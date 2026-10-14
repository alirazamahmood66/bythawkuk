import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const cosmicDir = path.join(projectRoot, 'client/public/images/cosmic');

async function downloadAndExtractSphere(url, filename, edgeFeather = 4) {
  console.log('Downloading & processing:', filename, 'from', url);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());

  const { data, info } = await sharp(buf).raw().toBuffer({ resolveWithObject: true });
  const width = info.width;
  const height = info.height;
  const rgba = Buffer.alloc(width * height * 4);

  const cx = width / 2;
  const cy = height / 2;
  const r = Math.min(width, height) * 0.46;

  for (let y = 0; y < height; y++) {
    const dy = y - cy;
    for (let x = 0; x < width; x++) {
      const dx = x - cx;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const inIdx = (y * width + x) * info.channels;
      const outIdx = (y * width + x) * 4;

      if (dist <= r) {
        let alpha = 255;
        if (dist > r - edgeFeather) {
          alpha = Math.round(((r - dist) / edgeFeather) * 255);
        }
        rgba[outIdx] = data[inIdx];
        rgba[outIdx + 1] = data[inIdx + 1];
        rgba[outIdx + 2] = data[inIdx + 2];
        rgba[outIdx + 3] = alpha;
      } else {
        rgba[outIdx] = 0;
        rgba[outIdx + 1] = 0;
        rgba[outIdx + 2] = 0;
        rgba[outIdx + 3] = 0;
      }
    }
  }

  const outPath = path.join(cosmicDir, filename);
  await sharp(rgba, { raw: { width, height, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(outPath);
  console.log('Saved transparent PNG to:', outPath);
}

// Special Sun processor to preserve solar flare corona
async function processSun() {
  console.log('Downloading NASA Solar Dynamics Observatory Sun (PIA26681)...');
  const res = await fetch('https://images-assets.nasa.gov/image/PIA26681/PIA26681~medium.jpg');
  const buf = Buffer.from(await res.arrayBuffer());
  const { data, info } = await sharp(buf).raw().toBuffer({ resolveWithObject: true });
  const width = info.width;
  const height = info.height;
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

  const outPath = path.join(cosmicDir, 'sun_solar_core.png');
  await sharp(rgba, { raw: { width, height, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(outPath);
  console.log('Saved Real NASA Sun to:', outPath);
}

async function run() {
  await processSun();
  await downloadAndExtractSphere(
    'https://images-assets.nasa.gov/image/ARC-1972-AS17-148-22727/ARC-1972-AS17-148-22727~medium.jpg',
    'earth_blue_marble.png'
  );
  await downloadAndExtractSphere(
    'https://images-assets.nasa.gov/image/PIA00104/PIA00104~medium.jpg',
    'venus_planet.png'
  );
  await downloadAndExtractSphere(
    'https://images-assets.nasa.gov/image/PIA11364/PIA11364~medium.jpg',
    'mercury_planet.png'
  );
  await downloadAndExtractSphere(
    'https://images-assets.nasa.gov/image/PIA00502/PIA00502~small.jpg',
    'europa_moon.png'
  );
  console.log('All real NASA solar system planets extracted to transparent PNGs!');
}

run().catch(console.error);
