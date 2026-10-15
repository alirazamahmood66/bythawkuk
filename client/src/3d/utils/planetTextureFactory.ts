import * as THREE from 'three';
import type { PlanetSurfaceConfig } from '../config/solarSystemConfig';
import { fbm3D, simplex3D, cellularVoronoi3D } from './proceduralNoise';

export interface GeneratedPlanetTextures {
  map: THREE.CanvasTexture;
  normalMap: THREE.CanvasTexture;
  roughnessMap: THREE.CanvasTexture;
  cloudsMap?: THREE.CanvasTexture;
}

// Global memoization cache: textures are generated ONCE per session
const textureCache = new Map<string, GeneratedPlanetTextures>();
const ringTextureCache = new Map<string, THREE.CanvasTexture>();
let sunTextureCache: THREE.CanvasTexture | null = null;

// Helper: parse hex color string to [r, g, b] (0..255)
function hexToRgb(hex: string): [number, number, number] {
  const cleanHex = hex.replace('#', '');
  const bigint = parseInt(cleanHex, 16);
  if (cleanHex.length === 6) {
    return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
  }
  return [255, 255, 255];
}

// Helper: linear color interpolation
function lerpRgb(
  c1: [number, number, number],
  c2: [number, number, number],
  t: number
): [number, number, number] {
  const clamped = Math.max(0, Math.min(1, t));
  return [
    Math.round(c1[0] + (c2[0] - c1[0]) * clamped),
    Math.round(c1[1] + (c2[1] - c1[1]) * clamped),
    Math.round(c1[2] + (c2[2] - c1[2]) * clamped),
  ];
}

/**
 * Generates and caches procedural PBR textures (Albedo, Normal, Roughness, and Clouds)
 * using deterministic 3D spherical noise sampling to avoid UV pole pinching.
 */
export function getOrCreatePlanetTextures(config: PlanetSurfaceConfig): GeneratedPlanetTextures {
  const cacheKey = config.type;
  if (textureCache.has(cacheKey)) {
    return textureCache.get(cacheKey)!;
  }

  const width = 512;
  const height = 256;

  // 1. Albedo Canvas & Context
  const albedoCanvas = document.createElement('canvas');
  albedoCanvas.width = width;
  albedoCanvas.height = height;
  const albedoCtx = albedoCanvas.getContext('2d')!;
  const albedoImgData = albedoCtx.createImageData(width, height);
  const albedoData = albedoImgData.data;

  // 2. Normal Canvas & Context
  const normalCanvas = document.createElement('canvas');
  normalCanvas.width = width;
  normalCanvas.height = height;
  const normalCtx = normalCanvas.getContext('2d')!;
  const normalImgData = normalCtx.createImageData(width, height);
  const normalData = normalImgData.data;

  // 3. Roughness Canvas & Context
  const roughCanvas = document.createElement('canvas');
  roughCanvas.width = width;
  roughCanvas.height = height;
  const roughCtx = roughCanvas.getContext('2d')!;
  const roughImgData = roughCtx.createImageData(width, height);
  const roughData = roughImgData.data;

  // Parse color palette
  const darkCol = hexToRgb(config.procedural.palette.dark);
  const primCol = hexToRgb(config.procedural.palette.primary);
  const secCol = hexToRgb(config.procedural.palette.secondary);
  const accCol = hexToRgb(config.procedural.palette.accent);

  const scale = config.procedural.noiseScale;
  const bumpIntensity = config.procedural.bumpIntensity * 4.0;
  const hasBanding = !!config.procedural.banding;
  const bandingFactor = config.procedural.banding || 0;
  const hasCraters = !!config.procedural.craterDensity;
  const craterFactor = config.procedural.craterDensity || 0;

  // Precompute height grid for normal calculation
  const heightGrid = new Float32Array(width * height);

  for (let y = 0; y < height; y++) {
    const v = y / height;
    const phi = v * Math.PI;
    const sinPhi = Math.sin(phi);
    const cosPhi = Math.cos(phi);

    for (let x = 0; x < width; x++) {
      const u = x / width;
      const theta = u * Math.PI * 2;

      // 3D Cartesian coordinates on unit sphere
      const nx = sinPhi * Math.cos(theta);
      const ny = cosPhi;
      const nz = sinPhi * Math.sin(theta);

      // Base spherical elevation
      let h = fbm3D(nx * scale, ny * scale, nz * scale, 5, 2.0, 0.5);

      // Secondary turbulence
      const turb = simplex3D(nx * scale * 2.5, ny * scale * 2.5, nz * scale * 2.5) * 0.15;
      h = Math.max(0, Math.min(1, h + turb));

      // Optional latitudinal banding (for desert dunes & gas marble)
      if (hasBanding) {
        const band = Math.sin(ny * 18.0 + turb * 4.0) * 0.5 + 0.5;
        h = h * (1.0 - bandingFactor) + band * bandingFactor;
      }

      // Optional crater depression
      if (hasCraters) {
        const crater = cellularVoronoi3D(nx * 14.0, ny * 14.0, nz * 14.0);
        if (crater < 0.35) {
          h = Math.max(0, h - (0.35 - crater) * craterFactor * 1.5);
        }
      }

      heightGrid[y * width + x] = h;
    }
  }

  // Populate Albedo, Normal, and Roughness buffers
  for (let y = 0; y < height; y++) {
    const yPrev = (y - 1 + height) % height;
    const yNext = (y + 1) % height;

    for (let x = 0; x < width; x++) {
      const xPrev = (x - 1 + width) % width;
      const xNext = (x + 1) % width;

      const idx = (y * width + x) * 4;
      const h = heightGrid[y * width + x];

      // Multi-layer PBR Palette Splatting
      let rgb: [number, number, number];
      let roughnessVal: number;

      if (config.type === 'earthlike' || config.type === 'oceanic') {
        // Deep oceans (< 0.44), shallow shelf (0.44 - 0.50), landmass (> 0.50)
        if (h < 0.44) {
          rgb = lerpRgb(darkCol, primCol, h / 0.44);
          roughnessVal = 40; // High specular sheen on water
        } else if (h < 0.50) {
          rgb = lerpRgb(primCol, secCol, (h - 0.44) / 0.06);
          roughnessVal = 60;
        } else if (h < 0.75) {
          rgb = lerpRgb(secCol, accCol, (h - 0.50) / 0.25);
          roughnessVal = 190; // Matte continental rock
        } else {
          rgb = lerpRgb(accCol, [240, 248, 255], (h - 0.75) / 0.25); // Snowcapped peaks
          roughnessVal = 220;
        }
      } else if (config.type === 'icy') {
        // Glacial cracks, ice plains, frozen ridges
        if (h < 0.35) {
          rgb = lerpRgb(darkCol, primCol, h / 0.35);
          roughnessVal = 70;
        } else if (h < 0.7) {
          rgb = lerpRgb(primCol, secCol, (h - 0.35) / 0.35);
          roughnessVal = 90; // Smooth reflective ice
        } else {
          rgb = lerpRgb(secCol, accCol, (h - 0.7) / 0.3);
          roughnessVal = 160;
        }
      } else {
        // Terrestrial, Desert, or Rose Marble
        if (h < 0.3) {
          rgb = lerpRgb(darkCol, primCol, h / 0.3);
          roughnessVal = 220;
        } else if (h < 0.65) {
          rgb = lerpRgb(primCol, secCol, (h - 0.3) / 0.35);
          roughnessVal = 180;
        } else {
          rgb = lerpRgb(secCol, accCol, (h - 0.65) / 0.35);
          roughnessVal = 140;
        }
      }

      albedoData[idx] = rgb[0];
      albedoData[idx + 1] = rgb[1];
      albedoData[idx + 2] = rgb[2];
      albedoData[idx + 3] = 255;

      // Sobel gradient for standard tangent space normal map
      const hL = heightGrid[y * width + xPrev];
      const hR = heightGrid[y * width + xNext];
      const hD = heightGrid[yPrev * width + x];
      const hU = heightGrid[yNext * width + x];

      const dx = (hR - hL) * bumpIntensity;
      const dy = (hU - hD) * bumpIntensity;
      const dz = 1.0;
      const len = Math.hypot(dx, dy, dz);

      normalData[idx] = Math.round(((-dx / len) * 0.5 + 0.5) * 255);
      normalData[idx + 1] = Math.round(((-dy / len) * 0.5 + 0.5) * 255);
      normalData[idx + 2] = Math.round(((dz / len) * 0.5 + 0.5) * 255);
      normalData[idx + 3] = 255;

      // Roughness channel (monochrome)
      roughData[idx] = roughnessVal;
      roughData[idx + 1] = roughnessVal;
      roughData[idx + 2] = roughnessVal;
      roughData[idx + 3] = 255;
    }
  }

  albedoCtx.putImageData(albedoImgData, 0, 0);
  normalCtx.putImageData(normalImgData, 0, 0);
  roughCtx.putImageData(roughImgData, 0, 0);

  // Convert to Three.js CanvasTextures with proper color spaces & filtering
  const mapTexture = new THREE.CanvasTexture(albedoCanvas);
  mapTexture.colorSpace = THREE.SRGBColorSpace;
  mapTexture.wrapS = THREE.RepeatWrapping;
  mapTexture.wrapT = THREE.ClampToEdgeWrapping;

  const normalMapTexture = new THREE.CanvasTexture(normalCanvas);
  normalMapTexture.wrapS = THREE.RepeatWrapping;
  normalMapTexture.wrapT = THREE.ClampToEdgeWrapping;

  const roughMapTexture = new THREE.CanvasTexture(roughCanvas);
  roughMapTexture.wrapS = THREE.RepeatWrapping;
  roughMapTexture.wrapT = THREE.ClampToEdgeWrapping;

  // Optional Cloud Layer Texture (for Earth-like worlds)
  let cloudsMapTexture: THREE.CanvasTexture | undefined;
  if (config.clouds) {
    const cloudCanvas = document.createElement('canvas');
    cloudCanvas.width = width;
    cloudCanvas.height = height;
    const cloudCtx = cloudCanvas.getContext('2d')!;
    const cloudImgData = cloudCtx.createImageData(width, height);
    const cloudData = cloudImgData.data;

    for (let y = 0; y < height; y++) {
      const v = y / height;
      const phi = v * Math.PI;
      const sinPhi = Math.sin(phi);
      const cosPhi = Math.cos(phi);

      for (let x = 0; x < width; x++) {
        const u = x / width;
        const theta = u * Math.PI * 2;

        const nx = sinPhi * Math.cos(theta);
        const ny = cosPhi;
        const nz = sinPhi * Math.sin(theta);

        // Turbulent atmospheric cloud swirls
        const c1 = fbm3D(nx * 3.8 + 20, ny * 3.8 + 10, nz * 3.8, 4, 2.1, 0.48);
        const swirl = simplex3D(nx * 6, ny * 6, nz * 6) * 0.15;
        const cTotal = Math.max(0, Math.min(1, c1 + swirl));

        const idx = (y * width + x) * 4;
        cloudData[idx] = 245; // Pure atmospheric white
        cloudData[idx + 1] = 250;
        cloudData[idx + 2] = 255;
        // Soft opacity threshold for natural wispy cloud formations
        const alpha = cTotal > 0.48 ? Math.min(255, Math.round(((cTotal - 0.48) / 0.52) * 255 * config.clouds.opacity)) : 0;
        cloudData[idx + 3] = alpha;
      }
    }

    cloudCtx.putImageData(cloudImgData, 0, 0);
    cloudsMapTexture = new THREE.CanvasTexture(cloudCanvas);
    cloudsMapTexture.colorSpace = THREE.SRGBColorSpace;
    cloudsMapTexture.wrapS = THREE.RepeatWrapping;
    cloudsMapTexture.wrapT = THREE.ClampToEdgeWrapping;
  }

  const generated: GeneratedPlanetTextures = {
    map: mapTexture,
    normalMap: normalMapTexture,
    roughnessMap: roughMapTexture,
    cloudsMap: cloudsMapTexture,
  };

  textureCache.set(cacheKey, generated);
  return generated;
}

/**
 * Generates an ultra-detailed, concentric planetary ring alpha-band texture
 * with Cassini divisions and subtle micro-striations.
 */
export function getOrCreateRingTexture(baseColorHex: string): THREE.CanvasTexture {
  if (ringTextureCache.has(baseColorHex)) {
    return ringTextureCache.get(baseColorHex)!;
  }

  const size = 512;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = 16;
  const ctx = canvas.getContext('2d')!;
  const imgData = ctx.createImageData(size, 16);
  const data = imgData.data;

  const rgb = hexToRgb(baseColorHex);

  for (let x = 0; x < size; x++) {
    const t = x / size; // 0 = inner radius, 1 = outer radius

    // Soft fade at inner and outer boundaries
    let alpha = 1.0;
    if (t < 0.1) alpha = t / 0.1;
    if (t > 0.9) alpha = (1.0 - t) / 0.1;

    // Cassini division gap at t ≈ 0.62 - 0.68
    if (t > 0.60 && t < 0.68) {
      alpha *= 0.12;
    }

    // Micro dust bands using high-frequency sine waves
    const dustHarmonic = Math.sin(t * 120.0) * 0.15 + Math.sin(t * 260.0) * 0.08;
    const finalAlpha = Math.max(0, Math.min(255, Math.round((alpha * 0.65 + dustHarmonic) * 255)));

    for (let y = 0; y < 16; y++) {
      const idx = (y * size + x) * 4;
      data[idx] = rgb[0];
      data[idx + 1] = rgb[1];
      data[idx + 2] = rgb[2];
      data[idx + 3] = finalAlpha;
    }
  }

  ctx.putImageData(imgData, 0, 0);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;

  ringTextureCache.set(baseColorHex, texture);
  return texture;
}

/**
 * Generates an incandescent solar surface texture featuring convective granulation
 * and magnetic temperature gradients for the central VTUBER DESIGN CORE Sun.
 */
export function getOrCreateSunTexture(): THREE.CanvasTexture {
  if (sunTextureCache) {
    return sunTextureCache;
  }

  const width = 512;
  const height = 256;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;
  const imgData = ctx.createImageData(width, height);
  const data = imgData.data;

  for (let y = 0; y < height; y++) {
    const v = y / height;
    const phi = v * Math.PI;
    const sinPhi = Math.sin(phi);
    const cosPhi = Math.cos(phi);

    for (let x = 0; x < width; x++) {
      const u = x / width;
      const theta = u * Math.PI * 2;

      const nx = sinPhi * Math.cos(theta);
      const ny = cosPhi;
      const nz = sinPhi * Math.sin(theta);

      // Convective solar granulation cells
      const gran1 = fbm3D(nx * 8.0, ny * 8.0, nz * 8.0, 4, 2.2, 0.55);
      const gran2 = simplex3D(nx * 16.0, ny * 16.0, nz * 16.0) * 0.2;
      const intensity = Math.max(0, Math.min(1, gran1 + gran2));

      const idx = (y * width + x) * 4;
      // Incandescent solar fusion: brilliant white-yellow core (#fffbeb) -> golden-orange (#fb923c) -> deep amber plasma (#c2410c)
      if (intensity > 0.6) {
        const t = (intensity - 0.6) / 0.4;
        data[idx] = 255;
        data[idx + 1] = Math.round(200 + 55 * t);
        data[idx + 2] = Math.round(110 + 130 * t);
      } else {
        const t = intensity / 0.6;
        data[idx] = Math.round(210 + 45 * t);
        data[idx + 1] = Math.round(95 + 105 * t);
        data[idx + 2] = Math.round(20 + 80 * t);
      }
      data[idx + 3] = 255;
    }
  }

  ctx.putImageData(imgData, 0, 0);
  sunTextureCache = new THREE.CanvasTexture(canvas);
  sunTextureCache.colorSpace = THREE.SRGBColorSpace;
  sunTextureCache.wrapS = THREE.RepeatWrapping;
  sunTextureCache.wrapT = THREE.ClampToEdgeWrapping;

  return sunTextureCache;
}
