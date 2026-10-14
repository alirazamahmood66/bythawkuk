import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

async function processCyanPlanet() {
  console.log('Processing Cyan Vortex Planet to transparent PNG...');
  const inputPath = path.join(projectRoot, 'client/public/images/cosmic/cyan_vortex_planet.jpg');
  const outputPath = path.join(projectRoot, 'client/public/images/cosmic/cyan_vortex_planet.png');

  const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });
  const width = info.width;
  const height = info.height;
  const rgbaData = Buffer.alloc(width * height * 4);

  // Exact planet geometry measured from bounds [208..772, 2..551]
  const cx = 490;
  const cy = 276.5;
  const r = 274;
  const rAtmo = r + 24; // Outer atmosphere glow boundary

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

      if (dist <= r) {
        // Inside planet body: 100% opaque solid sphere (including shadow side)
        rgbaData[outIdx] = rVal;
        rgbaData[outIdx + 1] = gVal;
        rgbaData[outIdx + 2] = bVal;
        rgbaData[outIdx + 3] = 255;
      } else if (dist <= rAtmo && maxVal > 3) {
        // Atmosphere limb glow: smooth feather from 255 at edge of sphere to 0 at rAtmo
        const falloff = 1.0 - (dist - r) / (rAtmo - r);
        const atmoAlpha = Math.round(Math.min(255, Math.max(0, falloff * 255)));

        // Un-premultiply slightly to retain vibrant cyan color
        const normAlpha = Math.max(0.1, atmoAlpha / 255);
        rgbaData[outIdx] = Math.min(255, Math.round(rVal / normAlpha));
        rgbaData[outIdx + 1] = Math.min(255, Math.round(gVal / normAlpha));
        rgbaData[outIdx + 2] = Math.min(255, Math.round(bVal / normAlpha));
        rgbaData[outIdx + 3] = atmoAlpha;
      } else {
        // Deep space background: 100% transparent
        rgbaData[outIdx] = 0;
        rgbaData[outIdx + 1] = 0;
        rgbaData[outIdx + 2] = 0;
        rgbaData[outIdx + 3] = 0;
      }
    }
  }

  await sharp(rgbaData, {
    raw: {
      width,
      height,
      channels: 4,
    },
  })
    .png({ compressionLevel: 9 })
    .toFile(outputPath);

  console.log('Saved transparent cyan vortex planet to:', outputPath);
}

async function processSaturnPlanet() {
  console.log('Processing Saturn Ringed Planet to transparent PNG...');
  const inputPath = path.join(projectRoot, 'client/public/images/cosmic/saturn_ringed_planet.jpg');
  const outputPath = path.join(projectRoot, 'client/public/images/cosmic/saturn_ringed_planet.png');

  const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });
  const width = info.width;
  const height = info.height;
  const rgbaData = Buffer.alloc(width * height * 4);

  // Saturn planet body center: [486, 280], radius ~185
  const cx = 486;
  const cy = 280;
  const rPlanet = 185;

  // Moon center: [696, 392], radius ~24
  const mx = 696;
  const my = 392;
  const rMoon = 24;

  for (let y = 0; y < height; y++) {
    const dyPlanet = y - cy;
    const dyMoon = y - my;

    for (let x = 0; x < width; x++) {
      const dxPlanet = x - cx;
      const dxMoon = x - mx;
      const distPlanet = Math.sqrt(dxPlanet * dxPlanet + dyPlanet * dyPlanet);
      const distMoon = Math.sqrt(dxMoon * dxMoon + dyMoon * dyMoon);

      const inIdx = (y * width + x) * info.channels;
      const outIdx = (y * width + x) * 4;

      const rVal = data[inIdx];
      const gVal = data[inIdx + 1];
      const bVal = data[inIdx + 2];
      const maxVal = Math.max(rVal, gVal, bVal);

      if (distPlanet <= rPlanet || distMoon <= rMoon) {
        // Inside solid planet or moon body: 100% opaque
        rgbaData[outIdx] = rVal;
        rgbaData[outIdx + 1] = gVal;
        rgbaData[outIdx + 2] = bVal;
        rgbaData[outIdx + 3] = 255;
      } else if (maxVal <= 3) {
        // Background black: 100% transparent
        rgbaData[outIdx] = 0;
        rgbaData[outIdx + 1] = 0;
        rgbaData[outIdx + 2] = 0;
        rgbaData[outIdx + 3] = 0;
      } else {
        // Rings and atmospheric dust: smooth alpha threshold
        let alpha = 255;
        if (maxVal < 26) {
          alpha = Math.round(((maxVal - 3) / 23) * 255);
        }
        rgbaData[outIdx] = rVal;
        rgbaData[outIdx + 1] = gVal;
        rgbaData[outIdx + 2] = bVal;
        rgbaData[outIdx + 3] = alpha;
      }
    }
  }

  await sharp(rgbaData, {
    raw: {
      width,
      height,
      channels: 4,
    },
  })
    .png({ compressionLevel: 9 })
    .toFile(outputPath);

  console.log('Saved transparent Saturn ringed planet to:', outputPath);
}

async function run() {
  await processCyanPlanet();
  await processSaturnPlanet();
  console.log('All cosmic transparent PNGs created successfully!');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
