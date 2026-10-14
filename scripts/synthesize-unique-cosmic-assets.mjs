import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const cosmicDir = path.join(projectRoot, 'client/public/images/cosmic');

// 1. HYPERSPACE WARP GATE (Services Overview Page)
// A massive circular stasis ring with cyan plasma energy vortex and capacitor nodes
async function generateHyperspaceWarpGate() {
  console.log('Synthesizing Hyperspace Warp Gate...');
  const size = 1024;
  const rgba = Buffer.alloc(size * size * 4);
  const cx = 512, cy = 512;
  const rOuter = 460;
  const rInner = 360;
  const rVortex = 350;

  for (let y = 0; y < size; y++) {
    const dy = y - cy;
    for (let x = 0; x < size; x++) {
      const dx = x - cx;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx);
      const idx = (y * size + x) * 4;

      if (dist >= rInner && dist <= rOuter) {
        // Metallic mechanical ring chassis
        const ringProgress = (dist - rInner) / (rOuter - rInner); // 0 to 1
        const segmentCount = 12;
        const segment = Math.sin(angle * segmentCount);
        const nodeGlow = Math.pow(Math.max(0, segment), 8); // 12 bright capacitor nodes

        // Lighting on the metallic ring
        const bevel = Math.sin(ringProgress * Math.PI);
        const metalBase = 35 + bevel * 65;

        let r = metalBase + nodeGlow * 120;
        let g = metalBase + 40 + bevel * 80 + nodeGlow * 180;
        let b = metalBase + 90 + bevel * 110 + nodeGlow * 220;

        // Edge antialiasing
        let alpha = 255;
        if (dist > rOuter - 4) alpha = Math.round(((rOuter - dist) / 4) * 255);
        if (dist < rInner + 4) alpha = Math.round(((dist - rInner) / 4) * 255);

        rgba[idx] = Math.min(255, Math.round(r));
        rgba[idx + 1] = Math.min(255, Math.round(g));
        rgba[idx + 2] = Math.min(255, Math.round(b));
        rgba[idx + 3] = alpha;
      } else if (dist < rInner && dist > 140) {
        // Swirling internal cyan plasma vortex filaments
        const vortexRatio = dist / rInner; // 0 to 1
        const spiral = Math.sin(angle * 6 + (1 - vortexRatio) * 12);
        const filament = Math.pow(Math.max(0, spiral), 3) * (1 - Math.pow(vortexRatio - 0.7, 2) * 4);

        if (filament > 0.05) {
          const intensity = Math.min(1, Math.max(0, filament));
          rgba[idx] = Math.round(32 * intensity);
          rgba[idx + 1] = Math.round(217 * intensity);
          rgba[idx + 2] = Math.round(243 * intensity);
          rgba[idx + 3] = Math.round(intensity * 200 * (1 - Math.pow((dist - 250) / 200, 2)));
        }
      }
    }
  }

  const output = path.join(cosmicDir, 'hyperspace_warp_gate.png');
  await sharp(rgba, { raw: { width: size, height: size, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(output);
  console.log('Saved:', output);
}

// 2. ORBITAL SHIPYARD & ENGINEERING HABITAT (About Page)
// Modular titanium space station with central docking spindle, solar panels, and cyan hangar glow
async function generateOrbitalShipyardStation() {
  console.log('Synthesizing Orbital Shipyard Station...');
  const size = 1024;
  const rgba = Buffer.alloc(size * size * 4);
  const cx = 512, cy = 512;

  // We construct geometric primitives: central module, habitat ring, solar arrays
  for (let y = 0; y < size; y++) {
    const dy = y - cy;
    for (let x = 0; x < size; x++) {
      const dx = x - cx;
      const idx = (y * size + x) * 4;

      // 1. Central Core Spindle: vertical cylinder x: [-45..45], y: [-380..380]
      const inCore = Math.abs(dx) <= 45 && Math.abs(dy) <= 380;

      // 2. Torus Habitat Ring: ellipse rx: 360, ry: 110, thickness: 35
      const ringDist = Math.abs(Math.sqrt(Math.pow(dx / 360, 2) + Math.pow(dy / 110, 2)) - 1.0) * 360;
      const inHabitatRing = ringDist <= 32;

      // 3. Solar Photovoltaic Panels: Left: x: [-460..-120], y: [-24..24]; Right: x: [120..460], y: [-24..24]
      const inLeftSolar = dx >= -460 && dx <= -100 && Math.abs(dy - 120) <= 28;
      const inRightSolar = dx >= 100 && dx <= 460 && Math.abs(dy - 120) <= 28;
      const inSolar = inLeftSolar || inRightSolar;

      // 4. Upper Communication Array: y: [-440..-380], x: [-12..12]
      const inAntenna = Math.abs(dx) <= 8 && dy >= -440 && dy <= -380;

      if (inCore) {
        // Cylindrical shading
        const nx = dx / 45;
        const shade = Math.max(0.2, Math.sqrt(Math.max(0, 1 - nx * nx)));
        rgba[idx] = Math.round((140 + Math.sin(dy * 0.1) * 30) * shade);
        rgba[idx + 1] = Math.round((165 + Math.sin(dy * 0.1) * 30) * shade);
        rgba[idx + 2] = Math.round((195 + Math.sin(dy * 0.1) * 30) * shade);
        rgba[idx + 3] = 255;
      } else if (inHabitatRing) {
        // Torus shading
        const ringNorm = ringDist / 32;
        const shade = Math.cos(ringNorm * (Math.PI / 2));
        const windowGlow = Math.sin(Math.atan2(dy, dx) * 36) > 0.6 ? 70 : 0;

        rgba[idx] = Math.round(130 * shade + windowGlow * 0.4);
        rgba[idx + 1] = Math.round(155 * shade + windowGlow * 0.8);
        rgba[idx + 2] = Math.round(190 * shade + windowGlow);
        rgba[idx + 3] = 255;
      } else if (inSolar) {
        // Blue solar cell grid pattern
        const cellX = (Math.abs(dx) % 24) > 2 ? 1 : 0.4;
        const cellY = (Math.abs(dy - 120) % 12) > 2 ? 1 : 0.4;
        const grid = cellX * cellY;

        rgba[idx] = Math.round(25 * grid);
        rgba[idx + 1] = Math.round(95 * grid + 40);
        rgba[idx + 2] = Math.round(180 * grid + 50);
        rgba[idx + 3] = 255;
      } else if (inAntenna) {
        rgba[idx] = 180;
        rgba[idx + 1] = 210;
        rgba[idx + 2] = 230;
        rgba[idx + 3] = 255;
      }
    }
  }

  const output = path.join(cosmicDir, 'orbital_shipyard_station.png');
  await sharp(rgba, { raw: { width: size, height: size, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(output);
  console.log('Saved:', output);
}

// 3. ASTRONAUT EVA SPACEWALKER (Careers Page)
// Detailed spacesuit torso, helmet, reflective gold/cyan visor, and floating umbilical tether
async function generateAstronautSpacewalker() {
  console.log('Synthesizing Astronaut EVA Spacewalker...');
  const size = 1024;
  const rgba = Buffer.alloc(size * size * 4);
  const cx = 512, cy = 460;

  for (let y = 0; y < size; y++) {
    const dy = y - cy;
    for (let x = 0; x < size; x++) {
      const dx = x - cx;
      const idx = (y * size + x) * 4;

      // 1. Helmet: Circle radius 160 centered at [0, -140]
      const hx = dx, hy = dy + 140;
      const hDist = Math.sqrt(hx * hx + hy * hy);
      const inHelmet = hDist <= 160;

      // Visor: Oval centered at [10, -135], rx: 110, ry: 90
      const vx = hx - 10, vy = hy + 5;
      const vDist = Math.sqrt(Math.pow(vx / 115, 2) + Math.pow(vy / 90, 2));
      const inVisor = vDist <= 1.0;

      // 2. Torso Suit Body: rounded polygon dy: [-20..320], dx: [-180..180]
      const inTorso = dy >= -20 && dy <= 340 && Math.abs(dx) <= (190 - Math.pow(dy - 120, 2) / 380);

      // 3. Life Support Backpack: dx: [-230..-170], dy: [-80..260]
      const inPack = dx >= -240 && dx <= -160 && dy >= -80 && dy <= 280;

      // 4. Floating Umbilical Cable: Sinusoidal bezier wave
      const tetherX = -180 + Math.sin(dy * 0.03) * 60 - (dy > 200 ? (dy - 200) * 0.8 : 0);
      const inTether = dy > 120 && Math.abs(dx - tetherX) <= 9;

      if (inVisor) {
        // High-reflection gold / cyan starlight visor
        const normV = Math.sqrt(Math.max(0, 1 - Math.pow(vx / 115, 2) - Math.pow(vy / 90, 2)));
        const spec = Math.pow(normV, 3);
        const goldCyan = (vx + 100) / 200; // Gradient across visor
        rgba[idx] = Math.round(240 * (1 - goldCyan) + 32 * goldCyan + spec * 90);
        rgba[idx + 1] = Math.round(190 * (1 - goldCyan) + 217 * goldCyan + spec * 90);
        rgba[idx + 2] = Math.round(70 * (1 - goldCyan) + 243 * goldCyan + spec * 90);
        rgba[idx + 3] = 255;
      } else if (inHelmet) {
        // White pressurized composite helmet
        const hNorm = hDist / 160;
        const shade = Math.cos(hNorm * (Math.PI / 2)) * 0.4 + 0.6;
        rgba[idx] = Math.round(225 * shade);
        rgba[idx + 1] = Math.round(232 * shade);
        rgba[idx + 2] = Math.round(242 * shade);
        rgba[idx + 3] = 255;
      } else if (inTorso) {
        // Fabric folds and chest telemetry control pack
        const fold = Math.sin(dy * 0.15) * 15;
        const inChestPack = Math.abs(dx) <= 75 && dy >= 60 && dy <= 170;
        if (inChestPack) {
          // Technical telemetry unit with illuminated dials
          rgba[idx] = 45;
          rgba[idx + 1] = 75;
          rgba[idx + 2] = 110;
          rgba[idx + 3] = 255;
        } else {
          // Suit fabric with shoulder patches
          const shade = (200 + fold) / 255;
          rgba[idx] = Math.round(215 * shade);
          rgba[idx + 1] = Math.round(222 * shade);
          rgba[idx + 2] = Math.round(235 * shade);
          rgba[idx + 3] = 255;
        }
      } else if (inPack) {
        rgba[idx] = 130;
        rgba[idx + 1] = 145;
        rgba[idx + 2] = 165;
        rgba[idx + 3] = 255;
      } else if (inTether) {
        rgba[idx] = 32;
        rgba[idx + 1] = 217;
        rgba[idx + 2] = 243;
        rgba[idx + 3] = 255;
      }
    }
  }

  const output = path.join(cosmicDir, 'astronaut_eva_spacewalker.png');
  await sharp(rgba, { raw: { width: size, height: size, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(output);
  console.log('Saved:', output);
}

// 4. QUANTUM UPLINK DISH (Contact Page)
// High-gain ground/orbit transmission parabolic antenna beaming upward
async function generateQuantumUplinkDish() {
  console.log('Synthesizing Quantum Uplink Dish...');
  const size = 1024;
  const rgba = Buffer.alloc(size * size * 4);
  const cx = 512, cy = 600;

  for (let y = 0; y < size; y++) {
    const dy = y - cy;
    for (let x = 0; x < size; x++) {
      const dx = x - cx;
      const idx = (y * size + x) * 4;

      // 1. Parabolic Main Dish: y = a * x^2
      // Dish spans dx: [-340..340], depth ~140
      const dishY = Math.pow(dx / 340, 2) * 150 - 150;
      const inDish = dy >= dishY - 24 && dy <= dishY + 24 && Math.abs(dx) <= 340;

      // 2. Central Feed Horn Subreflector: dx: [-25..25], dy: [-260..-210]
      const inFeedHorn = Math.abs(dx) <= 22 && dy >= -260 && dy <= -210;

      // 3. Support Struts from dish to horn: 3 diagonal struts
      const strut1 = Math.abs(dx - dy * 0.7 - 80) <= 5 && dy >= -240 && dy <= -20;
      const strut2 = Math.abs(dx + dy * 0.7 + 80) <= 5 && dy >= -240 && dy <= -20;
      const inStrut = strut1 || strut2;

      // 4. Heavy Base Pedestal: dx: [-90..90], dy: [0..280]
      const inBase = Math.abs(dx) <= 90 && dy >= 0 && dy <= 280;

      // 5. Vertical Transmission Data Beam: dx: [-18..18], dy: [-580..-260]
      const inBeam = Math.abs(dx) <= 24 && dy <= -260;

      if (inBeam) {
        const beamFalloff = Math.exp(-Math.pow(dx / 9, 2));
        const alpha = Math.round(beamFalloff * 220);
        rgba[idx] = 32;
        rgba[idx + 1] = 217;
        rgba[idx + 2] = 243;
        rgba[idx + 3] = alpha;
      } else if (inDish) {
        // Metallic mesh parabolic reflection
        const curveShade = Math.cos((dx / 340) * (Math.PI / 2)) * 0.5 + 0.5;
        rgba[idx] = Math.round(150 * curveShade);
        rgba[idx + 1] = Math.round(175 * curveShade + 20);
        rgba[idx + 2] = Math.round(210 * curveShade + 35);
        rgba[idx + 3] = 255;
      } else if (inFeedHorn) {
        rgba[idx] = 32;
        rgba[idx + 1] = 217;
        rgba[idx + 2] = 243;
        rgba[idx + 3] = 255;
      } else if (inStrut) {
        rgba[idx] = 160;
        rgba[idx + 1] = 175;
        rgba[idx + 2] = 195;
        rgba[idx + 3] = 255;
      } else if (inBase) {
        const baseShade = 1 - Math.abs(dx) / 120;
        rgba[idx] = Math.round(70 * baseShade);
        rgba[idx + 1] = Math.round(85 * baseShade);
        rgba[idx + 2] = Math.round(110 * baseShade);
        rgba[idx + 3] = 255;
      }
    }
  }

  const output = path.join(cosmicDir, 'quantum_uplink_dish.png');
  await sharp(rgba, { raw: { width: size, height: size, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(output);
  console.log('Saved:', output);
}

// 5. GOLDEN EXOPLANET (E-Commerce Service)
// Rich metallic gold continent topography, auroral crown, and amber oceans
async function generateGoldenExoplanet() {
  console.log('Synthesizing Golden Exoplanet...');
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
        const nx = dx / r, ny = dy / r;
        const nz = Math.sqrt(Math.max(0, 1 - nx * nx - ny * ny));
        const lx = -0.5, ly = -0.4, lz = 0.75;
        const diffuse = Math.max(0, (nx * lx + ny * ly + nz * lz));

        // Golden mineral terrain noise
        const continent = Math.sin(nx * 12 + ny * 6) * Math.cos(nx * 8 - ny * 14);
        const isGoldOre = continent > 0.1;

        let baseR = isGoldOre ? 245 : 160;
        let baseG = isGoldOre ? 185 : 100;
        let baseB = isGoldOre ? 45 : 25;

        // Auroral crown at north pole (ny < -0.7)
        if (ny < -0.7) {
          baseR = 255;
          baseG = 220;
          baseB = 120;
        }

        const limb = Math.pow(nz, 0.45);
        const lit = (0.12 + diffuse * 0.88) * limb;

        let alpha = 255;
        if (dist > r - 3) alpha = Math.round(((r - dist) / 3) * 255);

        rgba[idx] = Math.min(255, Math.round(baseR * lit));
        rgba[idx + 1] = Math.min(255, Math.round(baseG * lit));
        rgba[idx + 2] = Math.min(255, Math.round(baseB * lit));
        rgba[idx + 3] = alpha;
      }
    }
  }

  const output = path.join(cosmicDir, 'golden_exoplanet.png');
  await sharp(rgba, { raw: { width: size, height: size, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(output);
  console.log('Saved:', output);
}

// 6. PULSAR ENERGY CORE (Web Development Service)
// Rapidly rotating neutron star with relativistic cyan/azure energy jets and electromagnetic field rings
async function generatePulsarEnergyCore() {
  console.log('Synthesizing Pulsar Energy Core...');
  const size = 1024;
  const rgba = Buffer.alloc(size * size * 4);
  const cx = 512, cy = 512;
  const rStar = 160;

  for (let y = 0; y < size; y++) {
    const dy = y - cy;
    for (let x = 0; x < size; x++) {
      const dx = x - cx;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx);
      const idx = (y * size + x) * 4;

      // 1. Star core
      if (dist <= rStar) {
        const norm = dist / rStar;
        const coreIntensity = Math.pow(1 - norm, 0.8);
        rgba[idx] = Math.min(255, Math.round(210 + coreIntensity * 45));
        rgba[idx + 1] = Math.min(255, Math.round(240 + coreIntensity * 15));
        rgba[idx + 2] = 255;
        rgba[idx + 3] = 255;
      } else {
        // 2. Twin Polar Relativistic Energy Jets: angle along ~45 deg / 225 deg
        const jetAngle = Math.PI / 4;
        const dAngle1 = Math.abs(Math.sin(angle - jetAngle));
        const inJet1 = dAngle1 < 0.22 && dist < 480;

        // 3. Concentric Magnetic Field Shockwaves: rings at 240, 320, 410
        const ring1 = Math.abs(dist - 260) <= 10;
        const ring2 = Math.abs(dist - 370) <= 8;

        if (inJet1) {
          const jetFalloff = Math.exp(-Math.pow(dAngle1 / 0.08, 2)) * (1 - dist / 480);
          const alpha = Math.round(jetFalloff * 230);
          rgba[idx] = 32;
          rgba[idx + 1] = 217;
          rgba[idx + 2] = 243;
          rgba[idx + 3] = alpha;
        } else if (ring1 || ring2) {
          rgba[idx] = 104;
          rgba[idx + 1] = 175;
          rgba[idx + 2] = 255;
          rgba[idx + 3] = 160;
        }
      }
    }
  }

  const output = path.join(cosmicDir, 'pulsar_energy_core.png');
  await sharp(rgba, { raw: { width: size, height: size, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(output);
  console.log('Saved:', output);
}

// 7. CRYSTALLINE PRISM ASTEROID (UI/UX Design Service)
// 3D faceted crystal prism refracting light into spectral spectrums
async function generateCrystallinePrismAsteroid() {
  console.log('Synthesizing Crystalline Prism Asteroid...');
  const size = 1024;
  const rgba = Buffer.alloc(size * size * 4);
  const cx = 512, cy = 512;

  for (let y = 0; y < size; y++) {
    const dy = y - cy;
    for (let x = 0; x < size; x++) {
      const dx = x - cx;
      const idx = (y * size + x) * 4;

      // Hexagonal bipyramid prism projection
      const ax = Math.abs(dx);
      const ay = Math.abs(dy);
      // Diamond boundary: ax * 0.7 + ay <= 380
      const inPrism = (ax * 0.85 + ay) <= 390;

      if (inPrism) {
        // Facet determination
        const facetX = Math.floor((dx + 380) / 120);
        const facetY = Math.floor((dy + 380) / 120);
        const facetId = Math.abs(facetX * 7 + facetY * 3) % 6;

        // Refracted chromatic colors per facet
        const colors = [
          [32, 217, 243],   // Electric Cyan
          [139, 92, 246],   // Violet
          [244, 63, 94],    // Rose
          [234, 179, 8],    // Amber
          [56, 189, 248],   // Sky blue
          [168, 85, 247],   // Purple
        ];
        const col = colors[facetId];
        const depth = 1 - (ax * 0.85 + ay) / 390;

        rgba[idx] = Math.round(col[0] * 0.8 + depth * 50);
        rgba[idx + 1] = Math.round(col[1] * 0.8 + depth * 50);
        rgba[idx + 2] = Math.round(col[2] * 0.8 + depth * 50);
        rgba[idx + 3] = Math.round(180 + depth * 75);
      }
    }
  }

  const output = path.join(cosmicDir, 'crystalline_prism_asteroid.png');
  await sharp(rgba, { raw: { width: size, height: size, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(output);
  console.log('Saved:', output);
}

async function run() {
  await generateHyperspaceWarpGate();
  await generateOrbitalShipyardStation();
  await generateAstronautSpacewalker();
  await generateQuantumUplinkDish();
  await generateGoldenExoplanet();
  await generatePulsarEnergyCore();
  await generateCrystallinePrismAsteroid();
  console.log('All unique cosmic assets synthesized successfully with 100% transparent backgrounds!');
}

run().catch(console.error);
