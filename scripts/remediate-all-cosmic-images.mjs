import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const cosmicDir = path.join(projectRoot, 'client/public/images/cosmic');

// Helper: Download buffer
async function fetchBuffer(url) {
  console.log(`Downloading: ${url}`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} fetching ${url}`);
  return Buffer.from(await res.arrayBuffer());
}

// 1. ASTRONAUT EVA SPACEWALKER: Real NASA Bruce McCandless (STS-41B)
// Isolate astronaut bounding box (x: 577..1442, y: 108..1034), eliminate Earth horizon limb, key out deep space
async function remediateAstronaut() {
  console.log('Remediating Real NASA Astronaut (s84-27017)...');
  const rawPath = path.join(cosmicDir, 'nasa_astronaut_raw.jpg');
  let buf;
  if (fs.existsSync(rawPath)) {
    buf = fs.readFileSync(rawPath);
  } else {
    buf = await fetchBuffer('https://images-assets.nasa.gov/image/s84-27017/s84-27017~large.jpg');
  }

  const { data, info } = await sharp(buf).raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;

  // Astronaut bounding box: x: 570..1450, y: 100..1034
  const minX = 560;
  const maxX = 1460;
  const minY = 90;
  const maxY = 1034;
  const cropW = maxX - minX;
  const cropH = maxY - minY;

  const targetSize = 1024;
  const pad = 40;
  const scale = (targetSize - pad * 2) / Math.max(cropW, cropH);
  const outW = Math.round(cropW * scale);
  const outH = Math.round(cropH * scale);
  const offsetX = Math.round((targetSize - outW) / 2);
  const offsetY = Math.round((targetSize - outH) / 2);

  // Extract astronaut with transparent alpha
  const croppedRgba = Buffer.alloc(cropW * cropH * 4);
  for (let y = 0; y < cropH; y++) {
    const srcY = minY + y;
    for (let x = 0; x < cropW; x++) {
      const srcX = minX + x;
      const srcIdx = (srcY * width + srcX) * info.channels;
      const dstIdx = (y * cropW + x) * 4;

      const r = data[srcIdx];
      const g = data[srcIdx + 1];
      const b = data[srcIdx + 2];
      const maxVal = Math.max(r, g, b);

      let alpha = 0;
      // Below y = 1034 is earth horizon, which is strictly excluded
      if (srcY <= maxY) {
        if (maxVal > 28) {
          alpha = 255;
        } else if (maxVal > 14) {
          alpha = Math.round(((maxVal - 14) / 14) * 255);
        }
      }

      croppedRgba[dstIdx] = r;
      croppedRgba[dstIdx + 1] = g;
      croppedRgba[dstIdx + 2] = b;
      croppedRgba[dstIdx + 3] = alpha;
    }
  }

  // Resize and composite onto 1024x1024 canvas with 0-alpha border
  const resized = await sharp(croppedRgba, { raw: { width: cropW, height: cropH, channels: 4 } })
    .resize(outW, outH)
    .toBuffer({ resolveWithObject: true });

  const finalCanvas = Buffer.alloc(targetSize * targetSize * 4, 0); // all zero alpha
  for (let y = 0; y < outH; y++) {
    for (let x = 0; x < outW; x++) {
      const srcIdx = (y * outW + x) * 4;
      const dstIdx = ((offsetY + y) * targetSize + (offsetX + x)) * 4;
      finalCanvas[dstIdx] = resized.data[srcIdx];
      finalCanvas[dstIdx + 1] = resized.data[srcIdx + 1];
      finalCanvas[dstIdx + 2] = resized.data[srcIdx + 2];
      finalCanvas[dstIdx + 3] = resized.data[srcIdx + 3];
    }
  }

  const outPath = path.join(cosmicDir, 'astronaut_eva_spacewalker.png');
  await sharp(finalCanvas, { raw: { width: targetSize, height: targetSize, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(outPath);
  console.log('Successfully saved Remediated Real NASA Astronaut:', outPath);
}

// 2. QUANTUM UPLINK DISH: Real NASA Voyager High-Gain Parabolic Antenna (ARC-1979-AC79-0143-3)
// 3.7m parabolic dish beaming deep into space against pure pitch-black void (corners: 1, 1, 1)
async function remediateQuantumUplinkDish() {
  console.log('Remediating Real NASA Voyager High-Gain Dish (ARC-1979-AC79-0143-3)...');
  const buf = await fetchBuffer('http://images-assets.nasa.gov/image/ARC-1979-AC79-0143-3/ARC-1979-AC79-0143-3~medium.jpg');
  const { data, info } = await sharp(buf).raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;

  const targetSize = 1024;
  const pad = 30;
  const scale = (targetSize - pad * 2) / Math.max(width, height);
  const outW = Math.round(width * scale);
  const outH = Math.round(height * scale);
  const offsetX = Math.round((targetSize - outW) / 2);
  const offsetY = Math.round((targetSize - outH) / 2);

  const rgba = Buffer.alloc(width * height * 4);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * info.channels;
      const outIdx = (y * width + x) * 4;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      const maxVal = Math.max(r, g, b);

      let alpha = 0;
      if (maxVal > 22) {
        alpha = 255;
      } else if (maxVal > 8) {
        alpha = Math.round(((maxVal - 8) / 14) * 255);
      }

      rgba[outIdx] = r;
      rgba[outIdx + 1] = g;
      rgba[outIdx + 2] = b;
      rgba[outIdx + 3] = alpha;
    }
  }

  const resized = await sharp(rgba, { raw: { width, height, channels: 4 } })
    .resize(outW, outH)
    .toBuffer({ resolveWithObject: true });

  const finalCanvas = Buffer.alloc(targetSize * targetSize * 4, 0);
  for (let y = 0; y < outH; y++) {
    for (let x = 0; x < outW; x++) {
      const srcIdx = (y * outW + x) * 4;
      const dstIdx = ((offsetY + y) * targetSize + (offsetX + x)) * 4;
      finalCanvas[dstIdx] = resized.data[srcIdx];
      finalCanvas[dstIdx + 1] = resized.data[srcIdx + 1];
      finalCanvas[dstIdx + 2] = resized.data[srcIdx + 2];
      finalCanvas[dstIdx + 3] = resized.data[srcIdx + 3];
    }
  }

  const outPath = path.join(cosmicDir, 'quantum_uplink_dish.png');
  await sharp(finalCanvas, { raw: { width: targetSize, height: targetSize, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(outPath);
  console.log('Successfully saved Remediated Real NASA High-Gain Dish:', outPath);
}

// 3. CRYSTALLINE PRISM ASTEROID: Real NASA Galileo Asteroid Ida (PIA00136)
// Faceted cratered asteroid rock body against pure pitch-black space (corners: 0, 0, 0)
async function remediateCrystallineAsteroid() {
  console.log('Remediating Real NASA Galileo Asteroid Ida (PIA00136)...');
  const buf = await fetchBuffer('http://images-assets.nasa.gov/image/PIA00136/PIA00136~orig.jpg');
  const { data, info } = await sharp(buf).raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;

  // Find asteroid bounding box
  let minX = width, maxX = 0, minY = height, maxY = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * info.channels;
      if (Math.max(data[idx], data[idx + 1], data[idx + 2]) > 20) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  // Margin
  minX = Math.max(0, minX - 20);
  maxX = Math.min(width, maxX + 20);
  minY = Math.max(0, minY - 20);
  maxY = Math.min(height, maxY + 20);
  const cropW = maxX - minX;
  const cropH = maxY - minY;

  const targetSize = 1024;
  const pad = 40;
  const scale = (targetSize - pad * 2) / Math.max(cropW, cropH);
  const outW = Math.round(cropW * scale);
  const outH = Math.round(cropH * scale);
  const offsetX = Math.round((targetSize - outW) / 2);
  const offsetY = Math.round((targetSize - outH) / 2);

  const croppedRgba = Buffer.alloc(cropW * cropH * 4);
  for (let y = 0; y < cropH; y++) {
    const srcY = minY + y;
    for (let x = 0; x < cropW; x++) {
      const srcX = minX + x;
      const srcIdx = (srcY * width + srcX) * info.channels;
      const dstIdx = (y * cropW + x) * 4;

      const r = data[srcIdx];
      const g = data[srcIdx + 1];
      const b = data[srcIdx + 2];
      const maxVal = Math.max(r, g, b);

      let alpha = 0;
      if (maxVal > 22) {
        alpha = 255;
      } else if (maxVal > 8) {
        alpha = Math.round(((maxVal - 8) / 14) * 255);
      }

      croppedRgba[dstIdx] = r;
      croppedRgba[dstIdx + 1] = g;
      croppedRgba[dstIdx + 2] = b;
      croppedRgba[dstIdx + 3] = alpha;
    }
  }

  const resized = await sharp(croppedRgba, { raw: { width: cropW, height: cropH, channels: 4 } })
    .resize(outW, outH)
    .toBuffer({ resolveWithObject: true });

  const finalCanvas = Buffer.alloc(targetSize * targetSize * 4, 0);
  for (let y = 0; y < outH; y++) {
    for (let x = 0; x < outW; x++) {
      const srcIdx = (y * outW + x) * 4;
      const dstIdx = ((offsetY + y) * targetSize + (offsetX + x)) * 4;
      finalCanvas[dstIdx] = resized.data[srcIdx];
      finalCanvas[dstIdx + 1] = resized.data[srcIdx + 1];
      finalCanvas[dstIdx + 2] = resized.data[srcIdx + 2];
      finalCanvas[dstIdx + 3] = resized.data[srcIdx + 3];
    }
  }

  const outPath = path.join(cosmicDir, 'crystalline_prism_asteroid.png');
  await sharp(finalCanvas, { raw: { width: targetSize, height: targetSize, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(outPath);
  console.log('Successfully saved Remediated Real NASA Asteroid Ida:', outPath);
}

// 4. ORBITAL SHIPYARD STATION: Photorealistic Modular Aerospace Space Station
// Construct ultra-clean modular station with rotating habitat ring, solar arrays, pressurized modules, and 100% transparent boundaries
async function remediateOrbitalStation() {
  console.log('Remediating Orbital Shipyard Station with pure alpha margins...');
  const size = 1024;
  const rgba = Buffer.alloc(size * size * 4, 0);
  const cx = 512, cy = 512;

  for (let y = 0; y < size; y++) {
    const dy = y - cy;
    for (let x = 0; x < size; x++) {
      const dx = x - cx;
      const idx = (y * size + x) * 4;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx);

      // 1. Central Core Spindle: cylinder x: [-36..36], y: [-330..330]
      const inCore = Math.abs(dx) <= 36 && Math.abs(dy) <= 330;

      // 2. Torus Habitat Ring: rx: 320, ry: 90, thickness: 24
      const ringDist = Math.abs(Math.sqrt(Math.pow(dx / 320, 2) + Math.pow(dy / 90, 2)) - 1.0) * 320;
      const inHabitatRing = ringDist <= 22;

      // 3. Solar Photovoltaic Panels: Left: x: [-420..-100], y: [-20..20]; Right: x: [100..420], y: [-20..20]
      const inLeftSolar = dx >= -420 && dx <= -90 && Math.abs(dy - 100) <= 22;
      const inRightSolar = dx >= 90 && dx <= 420 && Math.abs(dy - 100) <= 22;
      const inLeftSolar2 = dx >= -420 && dx <= -90 && Math.abs(dy + 100) <= 22;
      const inRightSolar2 = dx >= 90 && dx <= 420 && Math.abs(dy + 100) <= 22;
      const inSolar = inLeftSolar || inRightSolar || inLeftSolar2 || inRightSolar2;

      // 4. Radiator Panels
      const inRadiator = Math.abs(dx) <= 18 && (Math.abs(dy) >= 340 && Math.abs(dy) <= 410);

      // 5. Docking Spindle Hubs
      const inHub = dist <= 55;

      if (inSolar) {
        // Deep blue photovoltaic texture with gold collector grid
        const cellX = Math.abs(dx) % 18;
        const cellY = Math.abs(dy) % 18;
        const isGrid = cellX < 2 || cellY < 2;

        if (isGrid) {
          rgba[idx] = 220;
          rgba[idx + 1] = 180;
          rgba[idx + 2] = 40;
          rgba[idx + 3] = 255;
        } else {
          rgba[idx] = 16;
          rgba[idx + 1] = 45;
          rgba[idx + 2] = 95;
          rgba[idx + 3] = 255;
        }
      } else if (inHabitatRing) {
        // Metallic torus with illuminated observation windows
        const windowFreq = Math.sin(angle * 32);
        const isWindow = windowFreq > 0.6 && ringDist <= 10;
        const bevel = Math.sin((ringDist / 22) * Math.PI);

        if (isWindow) {
          rgba[idx] = 32;
          rgba[idx + 1] = 217;
          rgba[idx + 2] = 243;
          rgba[idx + 3] = 255;
        } else {
          const shade = 140 + bevel * 85;
          rgba[idx] = Math.round(shade * 0.85);
          rgba[idx + 1] = Math.round(shade * 0.9);
          rgba[idx + 2] = Math.round(shade);
          rgba[idx + 3] = 255;
        }
      } else if (inCore) {
        const cylinderShade = Math.cos((dx / 36) * (Math.PI / 2)) * 0.5 + 0.5;
        const moduleRib = Math.abs(dy) % 40 < 4;
        const base = moduleRib ? 60 : 170;
        rgba[idx] = Math.round(base * cylinderShade);
        rgba[idx + 1] = Math.round((base + 10) * cylinderShade);
        rgba[idx + 2] = Math.round((base + 25) * cylinderShade);
        rgba[idx + 3] = 255;
      } else if (inHub) {
        rgba[idx] = 200;
        rgba[idx + 1] = 215;
        rgba[idx + 2] = 235;
        rgba[idx + 3] = 255;
      } else if (inRadiator) {
        rgba[idx] = 180;
        rgba[idx + 1] = 190;
        rgba[idx + 2] = 205;
        rgba[idx + 3] = 255;
      }
    }
  }

  const outPath = path.join(cosmicDir, 'orbital_shipyard_station.png');
  await sharp(rgba, { raw: { width: size, height: size, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(outPath);
  console.log('Successfully saved Remediated Orbital Shipyard Station:', outPath);
}

// 5. FEATHER BORDER BLEEDS ON EXISTING ASSETS (Sun, Pulsar, Cyan Planet, Ship)
async function remediateBorderBleeds() {
  console.log('Remediating border bleeds on Sun, Pulsar, Cyan Planet, Ship...');

  // Sun Solar Core
  const sunPath = path.join(cosmicDir, 'sun_solar_core.png');
  if (fs.existsSync(sunPath)) {
    const { data, info } = await sharp(sunPath).raw().toBuffer({ resolveWithObject: true });
    const { width, height } = info;
    const cx = width / 2;
    const cy = height / 2;
    const maxR = width * 0.46; // feather out beyond 0.46

    for (let y = 0; y < height; y++) {
      const dy = y - cy;
      for (let x = 0; x < width; x++) {
        const dx = x - cx;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const idx = (y * width + x) * 4;

        if (dist > maxR) {
          const falloff = Math.max(0, 1 - (dist - maxR) / (width * 0.035));
          data[idx + 3] = Math.round(data[idx + 3] * falloff);
        }
      }
    }
    await sharp(data, { raw: { width, height, channels: 4 } }).png({ compressionLevel: 9 }).toFile(sunPath);
    console.log('Sun border bleeds feathered.');
  }

  // Pulsar Energy Core
  const pulsarPath = path.join(cosmicDir, 'pulsar_energy_core.png');
  if (fs.existsSync(pulsarPath)) {
    const { data, info } = await sharp(pulsarPath).raw().toBuffer({ resolveWithObject: true });
    const { width, height } = info;
    const pad = 35;

    for (let y = 0; y < height; y++) {
      const edgeY = Math.min(y, height - 1 - y);
      for (let x = 0; x < width; x++) {
        const edgeX = Math.min(x, width - 1 - x);
        const edgeDist = Math.min(edgeX, edgeY);
        const idx = (y * width + x) * 4;

        if (edgeDist < pad) {
          const factor = Math.max(0, edgeDist / pad);
          data[idx + 3] = Math.round(data[idx + 3] * factor);
        }
      }
    }
    await sharp(data, { raw: { width, height, channels: 4 } }).png({ compressionLevel: 9 }).toFile(pulsarPath);
    console.log('Pulsar border bleeds feathered.');
  }

  // Cyan Vortex Planet
  const cyanPath = path.join(cosmicDir, 'cyan_vortex_planet.png');
  if (fs.existsSync(cyanPath)) {
    const { data, info } = await sharp(cyanPath).raw().toBuffer({ resolveWithObject: true });
    const { width, height } = info;
    const pad = 30;

    for (let y = 0; y < height; y++) {
      const edgeY = Math.min(y, height - 1 - y);
      for (let x = 0; x < width; x++) {
        const edgeX = Math.min(x, width - 1 - x);
        const edgeDist = Math.min(edgeX, edgeY);
        const idx = (y * width + x) * 4;

        if (edgeDist < pad) {
          const factor = Math.max(0, edgeDist / pad);
          data[idx + 3] = Math.round(data[idx + 3] * factor);
        }
      }
    }
    await sharp(data, { raw: { width, height, channels: 4 } }).png({ compressionLevel: 9 }).toFile(cyanPath);
    console.log('Cyan Vortex Planet border bleeds feathered.');
  }

  // Bythawk Recon Spaceship
  const shipPath = path.join(cosmicDir, 'bythawk_recon_spaceship.png');
  if (fs.existsSync(shipPath)) {
    const { data, info } = await sharp(shipPath).raw().toBuffer({ resolveWithObject: true });
    const { width, height } = info;
    const pad = 25;

    for (let y = 0; y < height; y++) {
      const edgeY = Math.min(y, height - 1 - y);
      for (let x = 0; x < width; x++) {
        const edgeX = Math.min(x, width - 1 - x);
        const edgeDist = Math.min(edgeX, edgeY);
        const idx = (y * width + x) * 4;

        if (edgeDist < pad) {
          const factor = Math.max(0, edgeDist / pad);
          data[idx + 3] = Math.round(data[idx + 3] * factor);
        }
      }
    }
    await sharp(data, { raw: { width, height, channels: 4 } }).png({ compressionLevel: 9 }).toFile(shipPath);
    console.log('Recon spaceship border bleeds feathered.');
  }

  // Telemetry Satellite
  const satPath = path.join(cosmicDir, 'telemetry_satellite.png');
  if (fs.existsSync(satPath)) {
    const { data, info } = await sharp(satPath).raw().toBuffer({ resolveWithObject: true });
    const { width, height } = info;
    const pad = 25;

    for (let y = 0; y < height; y++) {
      const edgeY = Math.min(y, height - 1 - y);
      for (let x = 0; x < width; x++) {
        const edgeX = Math.min(x, width - 1 - x);
        const edgeDist = Math.min(edgeX, edgeY);
        const idx = (y * width + x) * 4;

        if (edgeDist < pad) {
          const factor = Math.max(0, edgeDist / pad);
          data[idx + 3] = Math.round(data[idx + 3] * factor);
        }
      }
    }
    await sharp(data, { raw: { width, height, channels: 4 } }).png({ compressionLevel: 9 }).toFile(satPath);
    console.log('Telemetry Satellite border bleeds feathered.');
  }

  // Jupiter Gas Giant
  const jupPath = path.join(cosmicDir, 'jupiter_gas_giant.png');
  if (fs.existsSync(jupPath)) {
    const { data, info } = await sharp(jupPath).raw().toBuffer({ resolveWithObject: true });
    const { width, height } = info;
    const pad = 20;

    for (let y = 0; y < height; y++) {
      const edgeY = Math.min(y, height - 1 - y);
      for (let x = 0; x < width; x++) {
        const edgeX = Math.min(x, width - 1 - x);
        const edgeDist = Math.min(edgeX, edgeY);
        const idx = (y * width + x) * 4;

        if (edgeDist < pad) {
          const factor = Math.max(0, edgeDist / pad);
          data[idx + 3] = Math.round(data[idx + 3] * factor);
        }
      }
    }
    await sharp(data, { raw: { width, height, channels: 4 } }).png({ compressionLevel: 9 }).toFile(jupPath);
    console.log('Jupiter border bleeds feathered.');
  }
}

async function run() {
  await remediateAstronaut();
  await remediateQuantumUplinkDish();
  await remediateCrystallineAsteroid();
  await remediateOrbitalStation();
  await remediateBorderBleeds();
  console.log('All image background remediations completed successfully!');
}

run().catch(console.error);
