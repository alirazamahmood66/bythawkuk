import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

// Generate 1024x1024 photorealistic planets with spherical shading & transparent alpha
async function generateMars() {
  console.log('Generating Photorealistic Mars (Red Planet)...');
  const size = 1024;
  const rgba = Buffer.alloc(size * size * 4);
  const cx = 512, cy = 512, r = 440;

  for (let y = 0; y < size; y++) {
    const dy = y - cy;
    for (let x = 0; x < size; x++) {
      const dx = x - cx;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const idx = (y * size + x) * 4;

      if (dist <= r) {
        // Spherical normal calculation
        const nx = dx / r;
        const ny = dy / r;
        const nz = Math.sqrt(Math.max(0, 1 - nx * nx - ny * ny));

        // Light direction from upper-left (sunlight)
        const lx = -0.55, ly = -0.45, lz = 0.7;
        const lLen = Math.sqrt(lx * lx + ly * ly + lz * lz);
        const dot = (nx * (lx / lLen) + ny * (ly / lLen) + nz * (lz / lLen));
        const diffuse = Math.max(0, dot);

        // Terrestrial procedural texture variation (Canyons, craters, iron oxide deserts)
        const u = (Math.atan2(ny, nx) + Math.PI) / (2 * Math.PI);
        const v = Math.acos(nz) / Math.PI;
        const noise = Math.sin(nx * 14 + ny * 8) * Math.cos(nx * 8 - ny * 16) * 0.5 + 0.5;
        const fineNoise = Math.sin(nx * 42 + ny * 28) * 0.15;

        // Polar ice cap at top (ny < -0.65)
        const isPolar = ny < -0.65;
        let baseR = 210 + noise * 35;
        let baseG = 85 + noise * 25;
        let baseB = 40 + noise * 15;

        if (isPolar) {
          const polarBlend = Math.min(1, (-ny - 0.65) / 0.15);
          baseR = baseR * (1 - polarBlend) + 245 * polarBlend;
          baseG = baseG * (1 - polarBlend) + 248 * polarBlend;
          baseB = baseB * (1 - polarBlend) + 255 * polarBlend;
        }

        // Limb darkening
        const limb = Math.pow(nz, 0.45);
        const lit = (0.08 + diffuse * 0.92) * limb;

        // Edge antialiasing
        let alpha = 255;
        if (dist > r - 3) {
          alpha = Math.round(((r - dist) / 3) * 255);
        }

        rgba[idx] = Math.min(255, Math.max(0, Math.round(baseR * lit)));
        rgba[idx + 1] = Math.min(255, Math.max(0, Math.round(baseG * lit)));
        rgba[idx + 2] = Math.min(255, Math.max(0, Math.round(baseB * lit)));
        rgba[idx + 3] = alpha;
      } else {
        rgba[idx] = 0;
        rgba[idx + 1] = 0;
        rgba[idx + 2] = 0;
        rgba[idx + 3] = 0;
      }
    }
  }

  const output = path.join(projectRoot, 'client/public/images/cosmic/mars_red_planet.png');
  await sharp(rgba, { raw: { width: size, height: size, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(output);
  console.log('Saved Mars to:', output);
}

async function generateNeptune() {
  console.log('Generating Photorealistic Neptune (Deep Ice Giant)...');
  const size = 1024;
  const rgba = Buffer.alloc(size * size * 4);
  const cx = 512, cy = 512, r = 440;

  for (let y = 0; y < size; y++) {
    const dy = y - cy;
    for (let x = 0; x < size; x++) {
      const dx = x - cx;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const idx = (y * size + x) * 4;

      if (dist <= r) {
        const nx = dx / r;
        const ny = dy / r;
        const nz = Math.sqrt(Math.max(0, 1 - nx * nx - ny * ny));

        // Sunlight from upper left
        const lx = -0.5, ly = -0.4, lz = 0.75;
        const lLen = Math.sqrt(lx * lx + ly * ly + lz * lz);
        const diffuse = Math.max(0, (nx * (lx / lLen) + ny * (ly / lLen) + nz * (lz / lLen)));

        // Atmospheric methane storm bands
        const band = Math.sin(ny * 22) * 0.2 + Math.cos(ny * 48 + nx * 4) * 0.1;
        const whiteStorm = Math.exp(-Math.pow((ny + 0.12) * 20, 2)) * Math.sin(nx * 18) * 0.35;

        let baseR = Math.max(0, 18 + band * 20 + whiteStorm * 120);
        let baseG = Math.max(0, 95 + band * 35 + whiteStorm * 150);
        let baseB = Math.max(0, 235 + band * 20 + whiteStorm * 20);

        // Soft Rayleigh atmosphere glow on limb
        const limb = Math.pow(nz, 0.4);
        const atmosphericRim = Math.pow(1 - nz, 2.5) * 60;
        const lit = (0.12 + diffuse * 0.88) * limb;

        let alpha = 255;
        if (dist > r - 3) {
          alpha = Math.round(((r - dist) / 3) * 255);
        }

        rgba[idx] = Math.min(255, Math.max(0, Math.round(baseR * lit + atmosphericRim * 0.2)));
        rgba[idx + 1] = Math.min(255, Math.max(0, Math.round(baseG * lit + atmosphericRim * 0.5)));
        rgba[idx + 2] = Math.min(255, Math.max(0, Math.round(baseB * lit + atmosphericRim)));
        rgba[idx + 3] = alpha;
      } else {
        rgba[idx] = 0;
        rgba[idx + 1] = 0;
        rgba[idx + 2] = 0;
        rgba[idx + 3] = 0;
      }
    }
  }

  const output = path.join(projectRoot, 'client/public/images/cosmic/neptune_ice_giant.png');
  await sharp(rgba, { raw: { width: size, height: size, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(output);
  console.log('Saved Neptune to:', output);
}

async function generateJupiter() {
  console.log('Generating Photorealistic Jupiter (Gas Giant with Great Red Spot)...');
  const size = 1024;
  const rgba = Buffer.alloc(size * size * 4);
  const cx = 512, cy = 512, r = 440;

  for (let y = 0; y < size; y++) {
    const dy = y - cy;
    for (let x = 0; x < size; x++) {
      const dx = x - cx;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const idx = (y * size + x) * 4;

      if (dist <= r) {
        const nx = dx / r;
        const ny = dy / r;
        const nz = Math.sqrt(Math.max(0, 1 - nx * nx - ny * ny));

        const lx = -0.52, ly = -0.42, lz = 0.74;
        const lLen = Math.sqrt(lx * lx + ly * ly + lz * lz);
        const diffuse = Math.max(0, (nx * (lx / lLen) + ny * (ly / lLen) + nz * (lz / lLen)));

        // Distinct atmospheric storm belts (Ammonia / Ammonium Hydrosulfide bands)
        const bandPattern = Math.sin(ny * 28 + Math.cos(nx * 12) * 0.15);
        const turbulentSwirl = Math.sin(nx * 32 + ny * 18) * 0.12;

        // Great Red Spot vortex: centered around [nx: 0.25, ny: 0.22], oval radius rx: 0.16, ry: 0.09
        const spotDx = (nx - 0.22) / 0.15;
        const spotDy = (ny - 0.20) / 0.08;
        const inSpotDist = spotDx * spotDx + spotDy * spotDy;
        const isRedSpot = inSpotDist < 1.0;

        let baseR = 195 + bandPattern * 35 + turbulentSwirl * 20;
        let baseG = 145 + bandPattern * 25 + turbulentSwirl * 15;
        let baseB = 105 + bandPattern * 18 + turbulentSwirl * 10;

        if (isRedSpot) {
          const spotWeight = Math.pow(1 - inSpotDist, 0.75);
          baseR = baseR * (1 - spotWeight) + 215 * spotWeight;
          baseG = baseG * (1 - spotWeight) + 75 * spotWeight;
          baseB = baseB * (1 - spotWeight) + 55 * spotWeight;
        }

        const limb = Math.pow(nz, 0.45);
        const lit = (0.1 + diffuse * 0.9) * limb;

        let alpha = 255;
        if (dist > r - 3) {
          alpha = Math.round(((r - dist) / 3) * 255);
        }

        rgba[idx] = Math.min(255, Math.max(0, Math.round(baseR * lit)));
        rgba[idx + 1] = Math.min(255, Math.max(0, Math.round(baseG * lit)));
        rgba[idx + 2] = Math.min(255, Math.max(0, Math.round(baseB * lit)));
        rgba[idx + 3] = alpha;
      } else {
        rgba[idx] = 0;
        rgba[idx + 1] = 0;
        rgba[idx + 2] = 0;
        rgba[idx + 3] = 0;
      }
    }
  }

  const output = path.join(projectRoot, 'client/public/images/cosmic/jupiter_gas_giant.png');
  await sharp(rgba, { raw: { width: size, height: size, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(output);
  console.log('Saved Jupiter to:', output);
}

async function run() {
  await generateMars();
  await generateNeptune();
  await generateJupiter();
  console.log('All planets generated successfully with 100% transparent backgrounds!');
}

run().catch(console.error);
