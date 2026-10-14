import * as THREE from 'three';

// Cache to prevent duplicate texture allocations
let vortexPlanetCache: { map: THREE.CanvasTexture; roughnessMap: THREE.CanvasTexture } | null = null;
let saturnRingCache: THREE.CanvasTexture | null = null;
let moonTextureCache: { map: THREE.CanvasTexture; bumpMap: THREE.CanvasTexture } | null = null;
let saturnPlanetCache: { map: THREE.CanvasTexture; roughnessMap: THREE.CanvasTexture } | null = null;

/**
 * Helper: converts hex color string to [r, g, b] (0..255)
 */
function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace('#', '');
  const num = parseInt(clean, 16);
  return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
}

/**
 * Helper: Linear RGB interpolation
 */
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
 * 1. HIGH-RESOLUTION VORTEX GAS GIANT TEXTURE (The dominant cyan planet)
 * Replicates the breathtaking cyclone vortex and silky atmospheric bands from the reference image.
 */
export function getOrCreateVortexGasGiantTextures(): {
  map: THREE.CanvasTexture;
  roughnessMap: THREE.CanvasTexture;
} {
  if (vortexPlanetCache) return vortexPlanetCache;

  const width = 2048;
  const height = 1024;

  const albedoCanvas = document.createElement('canvas');
  albedoCanvas.width = width;
  albedoCanvas.height = height;
  const albedoCtx = albedoCanvas.getContext('2d')!;
  const albedoImgData = albedoCtx.createImageData(width, height);
  const albedoData = albedoImgData.data;

  const roughCanvas = document.createElement('canvas');
  roughCanvas.width = width;
  roughCanvas.height = height;
  const roughCtx = roughCanvas.getContext('2d')!;
  const roughImgData = roughCtx.createImageData(width, height);
  const roughData = roughImgData.data;

  // Cinematic color palette matching the reference image:
  const deepNavy = hexToRgb('#030c1c');    // Deep midnight shadow
  const oceanBlue = hexToRgb('#04294f');   // Rich cobalt oceanic body
  const azureBlue = hexToRgb('#F59E0B');   // Vivid electric blue stream
  const brightCyan = hexToRgb('#20d9f3');  // Luminous cyan storm bands
  const pureWhite = hexToRgb('#f0f9ff');   // High-altitude cirrus clouds

  // Vortex storm center in normalized UV space:
  const vortexU = 0.52;
  const vortexV = 0.44;
  const vortexRadius = 0.28;

  for (let y = 0; y < height; y++) {
    const v = y / height;
    const vCenterDist = Math.abs(v - 0.5);

    for (let x = 0; x < width; x++) {
      const u = x / width;

      // 1. Smooth latitudinal jet streams
      const bandWave =
        Math.sin(v * Math.PI * 18.0) * 0.45 +
        Math.sin(v * Math.PI * 34.0 + u * 4.0) * 0.25 +
        Math.cos(v * Math.PI * 8.0) * 0.3;

      // 2. Cyclonic storm vortex displacement (logarithmic spiral)
      const du = u - vortexU;
      const dv = (v - vortexV) * 2.0; // Aspect ratio adjustment
      const distToVortex = Math.sqrt(du * du + dv * dv);

      let vortexFactor = 0;
      if (distToVortex < vortexRadius) {
        const normDist = distToVortex / vortexRadius;
        const angle = Math.atan2(dv, du);
        // Logarithmic spiral arms
        const spiral = Math.sin(angle * 3.0 - normDist * 16.0) * 0.5 + 0.5;
        // Bell-curve falloff from eyewall
        const envelope = Math.sin(normDist * Math.PI);
        vortexFactor = spiral * envelope;

        // Eye of the vortex (calm center)
        if (normDist < 0.12) {
          vortexFactor = normDist / 0.12 * 0.4;
        }
      }

      // Combine flow streams and vortex
      const compositeIntensity = Math.max(
        0,
        Math.min(1, 0.45 + bandWave * 0.32 + vortexFactor * 0.55 - vCenterDist * 0.15)
      );

      // Color mapping
      let rgb: [number, number, number];
      if (compositeIntensity < 0.28) {
        rgb = lerpRgb(deepNavy, oceanBlue, compositeIntensity / 0.28);
      } else if (compositeIntensity < 0.58) {
        rgb = lerpRgb(oceanBlue, azureBlue, (compositeIntensity - 0.28) / 0.30);
      } else if (compositeIntensity < 0.84) {
        rgb = lerpRgb(azureBlue, brightCyan, (compositeIntensity - 0.58) / 0.26);
      } else {
        rgb = lerpRgb(brightCyan, pureWhite, (compositeIntensity - 0.84) / 0.16);
      }

      const idx = (y * width + x) * 4;
      albedoData[idx] = rgb[0];
      albedoData[idx + 1] = rgb[1];
      albedoData[idx + 2] = rgb[2];
      albedoData[idx + 3] = 255;

      // Roughness (silky atmospheric sheen)
      const roughVal = Math.round(90 + (1.0 - compositeIntensity) * 60);
      roughData[idx] = roughVal;
      roughData[idx + 1] = roughVal;
      roughData[idx + 2] = roughVal;
      roughData[idx + 3] = 255;
    }
  }

  albedoCtx.putImageData(albedoImgData, 0, 0);
  roughCtx.putImageData(roughImgData, 0, 0);

  const map = new THREE.CanvasTexture(albedoCanvas);
  map.colorSpace = THREE.SRGBColorSpace;
  map.wrapS = THREE.RepeatWrapping;
  map.wrapT = THREE.ClampToEdgeWrapping;

  const roughnessMap = new THREE.CanvasTexture(roughCanvas);
  roughnessMap.wrapS = THREE.RepeatWrapping;
  roughnessMap.wrapT = THREE.ClampToEdgeWrapping;

  vortexPlanetCache = { map, roughnessMap };
  return vortexPlanetCache;
}

/**
 * 2. HIGH-RESOLUTION SATURNIAN PLANET TEXTURE (The tilted upper planet)
 */
export function getOrCreateSaturnPlanetTextures(): {
  map: THREE.CanvasTexture;
  roughnessMap: THREE.CanvasTexture;
} {
  if (saturnPlanetCache) return saturnPlanetCache;

  const width = 1024;
  const height = 512;

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;
  const imgData = ctx.createImageData(width, height);
  const data = imgData.data;

  const darkNavy = hexToRgb('#061426');
  const midBlue = hexToRgb('#EA580C');
  const iceCyan = hexToRgb('#38bdf8');
  const cloudWhite = hexToRgb('#bae6fd');

  for (let y = 0; y < height; y++) {
    const v = y / height;
    // Elegant latitudinal gas bands
    const band =
      Math.sin(v * Math.PI * 22.0) * 0.35 +
      Math.sin(v * Math.PI * 44.0) * 0.15 +
      0.5;

    for (let x = 0; x < width; x++) {
      let rgb: [number, number, number];
      if (band < 0.4) {
        rgb = lerpRgb(darkNavy, midBlue, band / 0.4);
      } else if (band < 0.75) {
        rgb = lerpRgb(midBlue, iceCyan, (band - 0.4) / 0.35);
      } else {
        rgb = lerpRgb(iceCyan, cloudWhite, (band - 0.75) / 0.25);
      }

      const idx = (y * width + x) * 4;
      data[idx] = rgb[0];
      data[idx + 1] = rgb[1];
      data[idx + 2] = rgb[2];
      data[idx + 3] = 255;
    }
  }

  ctx.putImageData(imgData, 0, 0);
  const map = new THREE.CanvasTexture(canvas);
  map.colorSpace = THREE.SRGBColorSpace;
  map.wrapS = THREE.RepeatWrapping;
  map.wrapT = THREE.ClampToEdgeWrapping;

  saturnPlanetCache = { map, roughnessMap: map };
  return saturnPlanetCache;
}

/**
 * 3. HIGH-RESOLUTION RADIAL CONCENTRIC RING TEXTURE
 * Pre-computes concentric 2D circular bands with distinct Cassini divisions & micro dust.
 */
export function getOrCreateSaturnRingTexture(): THREE.CanvasTexture {
  if (saturnRingCache) return saturnRingCache;

  const size = 1024;
  const center = size / 2;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  const imgData = ctx.createImageData(size, size);
  const data = imgData.data;

  // Luminous icy dust colors:
  const ringColor = hexToRgb('#7dd3fc'); // Luminous sky-cyan
  const innerColor = hexToRgb('#38bdf8'); // Electric cyan

  const rInner = size * 0.26; // Inner clear boundary
  const rOuter = size * 0.48; // Outer clear boundary
  const rCassiniStart = size * 0.375;
  const rCassiniEnd = size * 0.405;

  for (let y = 0; y < size; y++) {
    const dy = y - center;
    for (let x = 0; x < size; x++) {
      const dx = x - center;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const idx = (y * size + x) * 4;

      if (dist < rInner || dist > rOuter) {
        // Completely transparent outside ring bounds
        data[idx + 3] = 0;
        continue;
      }

      // Normalized position across ring width: 0 (inner) to 1 (outer)
      const t = (dist - rInner) / (rOuter - rInner);

      // Micro dust bands using high-frequency sine waves
      const microDust =
        Math.sin(dist * 0.85) * 0.2 +
        Math.sin(dist * 2.2) * 0.15 +
        Math.sin(dist * 4.5) * 0.1;

      let alpha = 0.75 + microDust;

      // Cassini division gap
      if (dist >= rCassiniStart && dist <= rCassiniEnd) {
        alpha *= 0.08; // Sharp dark gap
      }

      // Soft feathering at inner and outer edges
      if (t < 0.08) alpha *= t / 0.08;
      if (t > 0.92) alpha *= (1.0 - t) / 0.08;

      const rgb = lerpRgb(innerColor, ringColor, t);
      data[idx] = rgb[0];
      data[idx + 1] = rgb[1];
      data[idx + 2] = rgb[2];
      data[idx + 3] = Math.max(0, Math.min(255, Math.round(alpha * 240)));
    }
  }

  ctx.putImageData(imgData, 0, 0);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  saturnRingCache = texture;
  return texture;
}

/**
 * 4. REALISTIC CRATERED MOON TEXTURE
 */
export function getOrCreateMoonTextures(): {
  map: THREE.CanvasTexture;
  bumpMap: THREE.CanvasTexture;
} {
  if (moonTextureCache) return moonTextureCache;

  const width = 512;
  const height = 256;

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;
  const imgData = ctx.createImageData(width, height);
  const data = imgData.data;

  for (let y = 0; y < height; y++) {
    const ny = (y / height) * 2 - 1;
    for (let x = 0; x < width; x++) {
      const nx = (x / width) * 2 - 1;
      // Crater craters & basalt plains
      const craterNoise =
        Math.sin(nx * 14.0) * Math.cos(ny * 14.0) * 0.25 +
        Math.sin(nx * 32.0 + ny * 20.0) * 0.15;
      const val = Math.max(0, Math.min(255, Math.round((0.55 + craterNoise) * 255)));

      const idx = (y * width + x) * 4;
      data[idx] = val;
      data[idx + 1] = Math.round(val * 0.98);
      data[idx + 2] = Math.round(val * 1.05); // Subtle silvery cast
      data[idx + 3] = 255;
    }
  }

  ctx.putImageData(imgData, 0, 0);
  const map = new THREE.CanvasTexture(canvas);
  map.colorSpace = THREE.SRGBColorSpace;
  map.wrapS = THREE.RepeatWrapping;
  map.wrapT = THREE.ClampToEdgeWrapping;

  moonTextureCache = { map, bumpMap: map };
  return moonTextureCache;
}
