import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const cosmicDir = path.join(projectRoot, 'client/public/images/cosmic');

// 1. Download helper
async function downloadImage(url, destPath) {
  console.log('Downloading from NASA:', url);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} fetching ${url}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(destPath, buffer);
  console.log(`Saved ${destPath} (${buffer.length} bytes)`);
  return destPath;
}

// 2. Real NASA Astronaut: Bruce McCandless untethered spacewalk
async function processRealAstronaut() {
  console.log('Processing Real NASA Astronaut (s84-27017)...');
  const rawPath = path.join(cosmicDir, 'nasa_astronaut_raw.jpg');
  await downloadImage('https://images-assets.nasa.gov/image/s84-27017/s84-27017~large.jpg', rawPath);

  const { data, info } = await sharp(rawPath).raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;
  const rgba = Buffer.alloc(width * height * 4);

  // Astronaut in s84-27017 is roughly centered around [w*0.5, h*0.5], surrounded by pure black space
  for (let i = 0; i < width * height; i++) {
    const r = data[i * 3];
    const g = data[i * 3 + 1];
    const b = data[i * 3 + 2];
    const maxVal = Math.max(r, g, b);

    // Deep space black threshold
    let alpha = 0;
    if (maxVal > 28) {
      alpha = 255;
    } else if (maxVal > 8) {
      alpha = Math.round(((maxVal - 8) / 20) * 255);
    }

    rgba[i * 4] = r;
    rgba[i * 4 + 1] = g;
    rgba[i * 4 + 2] = b;
    rgba[i * 4 + 3] = alpha;
  }

  const outPath = path.join(cosmicDir, 'astronaut_eva_spacewalker.png');
  await sharp(rgba, { raw: { width, height, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(outPath);
  console.log('Successfully saved Real NASA Astronaut to:', outPath);
}

// 3. Real NASA Hubble Space Telescope in Orbit
async function processRealHubbleStation() {
  console.log('Processing Real NASA Space Station (iss_station_real.jpg)...');
  const rawPath = path.join(cosmicDir, 'iss_station_real.jpg');

  const { data, info } = await sharp(rawPath).raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;
  const rgba = Buffer.alloc(width * height * 4);

  for (let i = 0; i < width * height; i++) {
    const r = data[i * 3];
    const g = data[i * 3 + 1];
    const b = data[i * 3 + 2];
    const maxVal = Math.max(r, g, b);

    let alpha = 0;
    if (maxVal > 22) {
      alpha = 255;
    } else if (maxVal > 6) {
      alpha = Math.round(((maxVal - 6) / 16) * 255);
    }

    rgba[i * 4] = r;
    rgba[i * 4 + 1] = g;
    rgba[i * 4 + 2] = b;
    rgba[i * 4 + 3] = alpha;
  }

  const outPath = path.join(cosmicDir, 'orbital_shipyard_station.png');
  await sharp(rgba, { raw: { width, height, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(outPath);
  console.log('Successfully saved Real NASA Space Station/Telescope to:', outPath);
}

// 4. Real NASA Goldstone Deep Space Network Radio Dish
async function processRealAntennaDish() {
  console.log('Processing Real NASA Deep Space Radio Dish (PIA23214)...');
  const rawPath = path.join(cosmicDir, 'antenna_dish_real.jpg'); // already downloaded

  const { data, info } = await sharp(rawPath).raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;
  const rgba = Buffer.alloc(width * height * 4);

  for (let i = 0; i < width * height; i++) {
    const r = data[i * 3];
    const g = data[i * 3 + 1];
    const b = data[i * 3 + 2];
    const maxVal = Math.max(r, g, b);

    let alpha = 0;
    if (maxVal > 30) {
      alpha = 255;
    } else if (maxVal > 10) {
      alpha = Math.round(((maxVal - 10) / 20) * 255);
    }

    rgba[i * 4] = r;
    rgba[i * 4 + 1] = g;
    rgba[i * 4 + 2] = b;
    rgba[i * 4 + 3] = alpha;
  }

  const outPath = path.join(cosmicDir, 'quantum_uplink_dish.png');
  await sharp(rgba, { raw: { width, height, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(outPath);
  console.log('Successfully saved Real NASA Deep Space Dish to:', outPath);
}

// 5. Real NASA Juno Jupiter
async function processRealJupiter() {
  console.log('Processing Real NASA Jupiter (PIA21771)...');
  const rawPath = path.join(cosmicDir, 'jupiter_real.jpg');

  const { data, info } = await sharp(rawPath).raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;
  const rgba = Buffer.alloc(width * height * 4);

  for (let i = 0; i < width * height; i++) {
    const r = data[i * 3];
    const g = data[i * 3 + 1];
    const b = data[i * 3 + 2];
    const maxVal = Math.max(r, g, b);

    let alpha = 0;
    if (maxVal > 18) {
      alpha = 255;
    } else if (maxVal > 4) {
      alpha = Math.round(((maxVal - 4) / 14) * 255);
    }

    rgba[i * 4] = r;
    rgba[i * 4 + 1] = g;
    rgba[i * 4 + 2] = b;
    rgba[i * 4 + 3] = alpha;
  }

  const outPath = path.join(cosmicDir, 'jupiter_gas_giant.png');
  await sharp(rgba, { raw: { width, height, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(outPath);
  console.log('Successfully saved Real NASA Jupiter to:', outPath);
}

// 6. Real NASA Voyager 2 Neptune
async function processRealNeptune() {
  console.log('Processing Real NASA Neptune (PIA01492)...');
  const rawPath = path.join(cosmicDir, 'neptune_nasa.jpg');

  const { data, info } = await sharp(rawPath).raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;
  const rgba = Buffer.alloc(width * height * 4);

  // Exact planet sphere center in PIA01492: [w/2, h/2], r ~ w * 0.44
  const cx = width / 2;
  const cy = height / 2;
  const r = width * 0.43;

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

      if (dist <= r) {
        let alpha = 255;
        if (dist > r - 4) {
          alpha = Math.round(((r - dist) / 4) * 255);
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

  const outPath = path.join(cosmicDir, 'neptune_ice_giant.png');
  await sharp(rgba, { raw: { width, height, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(outPath);
  console.log('Successfully saved Real NASA Neptune to:', outPath);
}

// 7. Real NASA Hubble Crab Nebula Pulsar
async function processRealPulsar() {
  console.log('Processing Real NASA Pulsar (PIA03606)...');
  const rawPath = path.join(cosmicDir, 'pulsar_crab_nasa.jpg');

  const { data, info } = await sharp(rawPath).raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;
  const rgba = Buffer.alloc(width * height * 4);

  for (let i = 0; i < width * height; i++) {
    const r = data[i * 3];
    const g = data[i * 3 + 1];
    const b = data[i * 3 + 2];
    const maxVal = Math.max(r, g, b);

    let alpha = 0;
    if (maxVal > 25) {
      alpha = 255;
    } else if (maxVal > 6) {
      alpha = Math.round(((maxVal - 6) / 19) * 255);
    }

    rgba[i * 4] = r;
    rgba[i * 4 + 1] = g;
    rgba[i * 4 + 2] = b;
    rgba[i * 4 + 3] = alpha;
  }

  const outPath = path.join(cosmicDir, 'pulsar_energy_core.png');
  await sharp(rgba, { raw: { width, height, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(outPath);
  console.log('Successfully saved Real NASA Pulsar to:', outPath);
}

async function run() {
  await processRealAstronaut();
  await processRealHubbleStation();
  await processRealAntennaDish();
  await processRealJupiter();
  await processRealNeptune();
  await processRealPulsar();
  console.log('All real NASA photographic assets downloaded and processed to transparent PNGs!');
}

run().catch(console.error);
