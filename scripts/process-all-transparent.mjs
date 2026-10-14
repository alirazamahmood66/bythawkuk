import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// 1. Process Telemetry Satellite to transparent PNG
async function processSatellite() {
  console.log('Processing Telemetry Satellite...');
  const input = path.join(projectRoot, 'client/public/images/cosmic/telemetry_satellite.jpg');
  const output = path.join(projectRoot, 'client/public/images/cosmic/telemetry_satellite.png');
  const { data, info } = await sharp(input).raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;
  const rgba = Buffer.alloc(width * height * 4);

  for (let i = 0; i < width * height; i++) {
    const r = data[i * 3];
    const g = data[i * 3 + 1];
    const b = data[i * 3 + 2];
    const max = Math.max(r, g, b);
    let alpha = 0;
    if (max > 22) {
      alpha = 255;
    } else if (max > 4) {
      alpha = Math.round(((max - 4) / 18) * 255);
    }
    rgba[i * 4] = r;
    rgba[i * 4 + 1] = g;
    rgba[i * 4 + 2] = b;
    rgba[i * 4 + 3] = alpha;
  }

  await sharp(rgba, { raw: { width, height, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(output);
  console.log('Saved:', output);
}

// 2. Process Crescent Moon to transparent circular PNG
async function processMoon() {
  console.log('Processing Crescent Moon...');
  const input = path.join(projectRoot, 'client/public/images/cosmic/crescent_moon_photoreal.jpg');
  const output = path.join(projectRoot, 'client/public/images/cosmic/crescent_moon.png');
  const { data, info } = await sharp(input).raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;
  const rgba = Buffer.alloc(width * height * 4);

  // Exact moon sphere center: [512, 512], radius ~ 380
  const cx = 512;
  const cy = 512;
  const r = 390;

  for (let y = 0; y < height; y++) {
    const dy = y - cy;
    for (let x = 0; x < width; x++) {
      const dx = x - cx;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const inIdx = (y * width + x) * info.channels;
      const outIdx = (y * width + x) * 4;

      const rVal = data[inIdx];
      const gVal = data[inIdx + 1];
      const bVal = data[inIdx + 2];
      const maxVal = Math.max(rVal, gVal, bVal);

      if (dist <= r && maxVal > 6) {
        // Edge feathering
        let alpha = 255;
        if (dist > r - 12) {
          alpha = Math.round(((r - dist) / 12) * 255);
        } else if (maxVal < 20) {
          alpha = Math.round(((maxVal - 6) / 14) * 255);
        }
        rgba[outIdx] = rVal;
        rgba[outIdx + 1] = gVal;
        rgba[outIdx + 2] = bVal;
        rgba[outIdx + 3] = alpha;
      } else {
        rgba[outIdx] = 0;
        rgba[outIdx + 1] = 0;
        rgba[outIdx + 2] = 0;
        rgba[outIdx + 3] = 0;
      }
    }
  }

  await sharp(rgba, { raw: { width, height, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(output);
  console.log('Saved:', output);
}

// 3. Process Asteroid Field to isolated 3D asteroids transparent PNG
async function processAsteroids() {
  console.log('Processing Asteroid Field...');
  const input = path.join(projectRoot, 'client/public/images/cosmic/asteroid_field_photoreal.jpg');
  const output = path.join(projectRoot, 'client/public/images/cosmic/asteroid_cluster.png');
  const { data, info } = await sharp(input).raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;
  const rgba = Buffer.alloc(width * height * 4);

  const cx = 512;
  const cy = 512;
  const r = 460;

  for (let y = 0; y < height; y++) {
    const dy = y - cy;
    for (let x = 0; x < width; x++) {
      const dx = x - cx;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const inIdx = (y * width + x) * info.channels;
      const outIdx = (y * width + x) * 4;

      const rVal = data[inIdx];
      const gVal = data[inIdx + 1];
      const bVal = data[inIdx + 2];
      const maxVal = Math.max(rVal, gVal, bVal);

      if (dist <= r && maxVal > 18) {
        let alpha = 255;
        if (dist > r - 25) {
          alpha = Math.round(((r - dist) / 25) * 255);
        } else if (maxVal < 36) {
          alpha = Math.round(((maxVal - 18) / 18) * 255);
        }
        rgba[outIdx] = rVal;
        rgba[outIdx + 1] = gVal;
        rgba[outIdx + 2] = bVal;
        rgba[outIdx + 3] = alpha;
      } else {
        rgba[outIdx] = 0;
        rgba[outIdx + 1] = 0;
        rgba[outIdx + 2] = 0;
        rgba[outIdx + 3] = 0;
      }
    }
  }

  await sharp(rgba, { raw: { width, height, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(output);
  console.log('Saved:', output);
}

async function run() {
  await processSatellite();
  await processMoon();
  await processAsteroids();
  console.log('All images converted to pure transparent PNGs!');
}

run().catch(console.error);
