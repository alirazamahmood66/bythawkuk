import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const results = [];

function assert(condition, message) {
  if (condition) {
    results.push({ status: 'PASS', message });
    console.log(`[PASS] ${message}`);
  } else {
    results.push({ status: 'FAIL', message });
    console.error(`[FAIL] ${message}`);
  }
}

async function run() {
  console.log('=== STARTING PHASE 6G VERIFICATION ===\n');

  // 1. Verify 3D source files existence
  const expectedFiles = [
    'client/src/3d/config/solarSystemConfig.ts',
    'client/src/3d/utils/proceduralNoise.ts',
    'client/src/3d/utils/planetTextureFactory.ts',
    'client/src/3d/components/PlanetSurface.tsx',
    'client/src/3d/components/PlanetAtmosphere.tsx',
    'client/src/3d/components/PlanetRings.tsx',
    'client/src/3d/components/Planet.tsx',
    'client/src/3d/components/Sun.tsx',
    'client/src/3d/components/OrbitRing.tsx',
    'client/src/3d/components/CameraRig.tsx',
    'client/src/3d/components/PlanetLabel.tsx',
    'client/src/3d/canvas/SolarSystemCanvas.tsx',
    'client/src/3d/scenes/HeroSolarSystem.tsx',
  ];

  for (const relPath of expectedFiles) {
    const fullPath = path.join(projectRoot, relPath);
    assert(fs.existsSync(fullPath), `File exists: ${relPath}`);
  }

  // 2. Verify Solar System Configuration & 6 Service Planets
  const configPath = path.join(projectRoot, 'client/src/3d/config/solarSystemConfig.ts');
  const configContent = fs.readFileSync(configPath, 'utf8');

  const expectedPlanets = [
    { id: 'web-development', route: '/services/web-development', type: 'terrestrial' },
    { id: 'web-applications', route: '/services/web-applications', type: 'earthlike' },
    { id: 'mobile-app-development', route: '/services/mobile-app-development', type: 'icy' },
    { id: 'digital-marketing', route: '/services/digital-marketing', type: 'desert' },
    { id: 'seo', route: '/services/seo', type: 'oceanic' },
    { id: 'graphic-design', route: '/services/graphic-design', type: 'rose_marble' },
  ];

  for (const p of expectedPlanets) {
    assert(configContent.includes(`id: '${p.id}'`), `Config declares planet id: ${p.id}`);
    assert(configContent.includes(`route: '${p.route}'`), `Config maps ${p.id} to canonical route: ${p.route}`);
    assert(configContent.includes(`type: '${p.type}'`), `Config assigns realistic type '${p.type}' to ${p.id}`);
  }

  assert(configContent.includes('textureMap?: string'), 'Config schema supports future drop-in image textureMap');
  assert(configContent.includes('normalMap?: string'), 'Config schema supports future drop-in normalMap');
  assert(configContent.includes('cloudsMap?: string'), 'Config schema supports future drop-in cloudsMap');

  // 3. Verify Realistic Planet Surface System
  const surfacePath = path.join(projectRoot, 'client/src/3d/components/PlanetSurface.tsx');
  const surfaceContent = fs.readFileSync(surfacePath, 'utf8');
  assert(surfaceContent.includes('getOrCreatePlanetTextures'), 'PlanetSurface utilizes getOrCreatePlanetTextures factory');
  assert(surfaceContent.includes('normalMap={textures.normalMap}'), 'PlanetSurface applies tangent-space normalMap');
  assert(surfaceContent.includes('roughnessMap={textures.roughnessMap}'), 'PlanetSurface applies roughness differentiation map');
  assert(surfaceContent.includes('PlanetAtmosphere'), 'PlanetSurface mounts realistic Fresnel PlanetAtmosphere');
  assert(surfaceContent.includes('PlanetRings'), 'PlanetSurface mounts striated PlanetRings');

  // 4. Verify Sun Upgrade
  const sunPath = path.join(projectRoot, 'client/src/3d/components/Sun.tsx');
  const sunContent = fs.readFileSync(sunPath, 'utf8');
  assert(sunContent.includes('getOrCreateSunTexture'), 'Sun renders procedural solar granulation texture');
  assert(sunContent.includes('pointLight'), 'Sun houses primary physical point light source');
  assert(sunContent.includes('coronaMeshRef'), 'Sun renders layered coronal shell');
  assert(sunContent.includes('BYTHAWK CORE'), 'Sun preserves technological HUD core monogram');

  // 5. Verify Fresnel Atmosphere Shader
  const atmoPath = path.join(projectRoot, 'client/src/3d/components/PlanetAtmosphere.tsx');
  const atmoContent = fs.readFileSync(atmoPath, 'utf8');
  assert(atmoContent.includes('fresnel = pow'), 'Atmosphere calculates physical Fresnel curve');
  assert(atmoContent.includes('sunDir'), 'Atmosphere dynamically scatters light based on Sun orientation');
  assert(atmoContent.includes('THREE.AdditiveBlending'), 'Atmosphere utilizes clean additive blending');

  // 6. Verify Accessible 2D Navigation
  const navPath = path.join(projectRoot, 'client/src/components/common/AccessibleServiceNav.tsx');
  const navContent = fs.readFileSync(navPath, 'utf8');
  assert(navContent.includes('HERO_SERVICE_PLANETS.map'), 'AccessibleServiceNav iterates over HERO_SERVICE_PLANETS');
  assert(navContent.includes('role="list"'), 'AccessibleServiceNav provides semantic list markup');

  // 7. Verify ACESFilmic Tone Mapping in Canvas
  const canvasPath = path.join(projectRoot, 'client/src/3d/canvas/SolarSystemCanvas.tsx');
  const canvasContent = fs.readFileSync(canvasPath, 'utf8');
  assert(canvasContent.includes('THREE.ACESFilmicToneMapping'), 'SolarSystemCanvas enables ACESFilmicToneMapping');
  assert(canvasContent.includes('dpr={[1, 1.5]}'), 'SolarSystemCanvas caps devicePixelRatio to [1, 1.5]');

  // 8. Verify Server Health & Canonical Routes via Dev Server
  try {
    const healthRes = await fetch('http://127.0.0.1:5000/api/health');
    const healthData = await healthRes.json();
    assert(
      healthRes.status === 200 && (healthData.status === 'ok' || healthData.data?.status === 'ok'),
      'Backend API /api/health returned 200 OK'
    );
  } catch (err) {
    assert(false, `Backend health check failed: ${err.message}`);
  }

  const routesToTest = [
    '/',
    '/about',
    '/process',
    '/contact',
    '/services',
    '/services/web-development',
    '/services/web-applications',
    '/services/ecommerce',
    '/services/mobile-app-development',
    '/services/digital-marketing',
    '/services/seo',
    '/services/graphic-design',
    '/services/ui-ux-design',
    '/work',
    '/work/aetheria-platform',
    '/work/vanguard-commerce',
    '/work/kore-systems',
    '/work/orbit-mobile',
    '/insights',
    '/privacy',
    '/cookies',
    '/terms',
  ];

  for (const r of routesToTest) {
    try {
      const res = await fetch(`http://localhost:5173${r}`);
      assert(res.status === 200, `Vite dev server returns HTTP 200 for canonical route ${r}`);
    } catch (err) {
      assert(false, `Route fetch failed for ${r}: ${err.message}`);
    }
  }

  // Summary
  console.log('\n=== VERIFICATION SUMMARY ===');
  const passed = results.filter((r) => r.status === 'PASS').length;
  const failed = results.filter((r) => r.status === 'FAIL').length;
  console.log(`Total assertions: ${results.length}`);
  console.log(`Passed: ${passed}`);
  console.log(`Failed: ${failed}`);

  if (failed > 0) {
    console.error('\nPhase 6G Verification FAILED!');
    process.exit(1);
  } else {
    console.log('\nAll Phase 6G checks PASSED cleanly!');
  }
}

run();
