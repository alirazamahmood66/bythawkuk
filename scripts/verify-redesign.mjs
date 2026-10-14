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
  console.log('=== STARTING BYTHAWK REDESIGN VERIFICATION ===\n');

  // 1. Verify project preview images exist and are non-empty
  const projectImages = [
    'client/public/images/projects/aetheria_preview.jpg',
    'client/public/images/projects/vanguard_preview.jpg',
    'client/public/images/projects/orbit_preview.jpg',
  ];

  for (const img of projectImages) {
    const fullPath = path.join(projectRoot, img);
    assert(fs.existsSync(fullPath), `Asset exists: ${img}`);
    if (fs.existsSync(fullPath)) {
      const stats = fs.statSync(fullPath);
      assert(stats.size > 50000, `Asset ${img} is high-res (${Math.round(stats.size / 1024)} KB)`);
    }
  }

  // 2. Verify design tokens in index.css
  const cssPath = path.join(projectRoot, 'client/src/index.css');
  const cssContent = fs.readFileSync(cssPath, 'utf8');
  assert(cssContent.includes('--bythawk-bg-deep: #030712'), 'index.css defines Near-black navy #030712');
  assert(cssContent.includes('--bythawk-bg-space: #071426'), 'index.css defines Deep space blue #071426');
  assert(cssContent.includes('--bythawk-bg-navy: #0b1b32'), 'index.css defines Secondary navy #0b1b32');
  assert(cssContent.includes('--bythawk-cyan: #20d9f3'), 'index.css defines Electric cyan #20d9f3');
  assert(cssContent.includes('--bythawk-soft-blue: #68afff'), 'index.css defines Soft blue #68afff');
  assert(cssContent.includes('--bythawk-text-primary: #f4f8ff'), 'index.css defines Celestial white #f4f8ff');

  // 3. Verify Hero CTA buttons and headline
  const heroPath = path.join(projectRoot, 'client/src/sections/HeroSection.tsx');
  const heroContent = fs.readFileSync(heroPath, 'utf8');
  assert(heroContent.includes('WE BUILD'), 'Hero headline contains WE BUILD');
  assert(heroContent.includes('DIGITAL WORLDS.'), 'Hero headline contains DIGITAL WORLDS.');
  assert(heroContent.includes('Start Your Project'), 'Hero contains Primary CTA "Start Your Project"');
  assert(heroContent.includes('Explore Our Work'), 'Hero contains Secondary CTA "Explore Our Work"');
  assert(heroContent.includes('to="/work"'), 'Hero Secondary CTA links to /work');
  assert(heroContent.includes('to="/contact"'), 'Hero Primary CTA links to /contact');

  // 4. Verify Cosmic Photorealistic Assets & Transit Systems
  const cosmicAssets = [
    'client/public/images/cosmic/cyan_vortex_planet.png',
    'client/public/images/cosmic/saturn_ringed_planet.png',
    'client/public/images/cosmic/bythawk_recon_spaceship.jpg',
    'client/public/images/cosmic/crescent_moon_photoreal.jpg',
    'client/public/images/cosmic/asteroid_field_photoreal.jpg',
  ];
  for (const asset of cosmicAssets) {
    const fullAssetPath = path.join(projectRoot, asset);
    assert(fs.existsSync(fullAssetPath), `Cosmic photorealistic asset exists: ${asset}`);
  }
  const shipTransitPath = path.join(projectRoot, 'client/src/sections/ShipTransitSection.tsx');
  assert(fs.existsSync(shipTransitPath), 'ShipTransitSection.tsx component exists');

  // 5. Verify Trust Strip
  const trustPath = path.join(projectRoot, 'client/src/sections/TrustStripSection.tsx');
  assert(fs.existsSync(trustPath), 'TrustStripSection.tsx exists');
  const trustContent = fs.readFileSync(trustPath, 'utf8');
  assert(trustContent.includes('6 Flagship'), 'TrustStrip declares 6 Flagship Digital Disciplines');
  assert(trustContent.includes('100% UK'), 'TrustStrip declares 100% UK Engineering Architecture');
  assert(trustContent.includes('Zero Tracker'), 'TrustStrip declares Zero Tracker Privacy Overhead');

  // 6. Verify Services Constellation
  const servicesPath = path.join(projectRoot, 'client/src/sections/ServicesSection.tsx');
  const servicesContent = fs.readFileSync(servicesPath, 'utf8');
  assert(servicesContent.includes('SERVICES CONSTELLATION'), 'ServicesSection is titled SERVICES CONSTELLATION');
  assert(servicesContent.includes('FLAGSHIP_SERVICES'), 'ServicesSection defines curated FLAGSHIP_SERVICES');
  assert(servicesContent.includes('to="/services"'), 'ServicesSection links to full catalog /services');

  // 7. Verify Selected Work (Zero empty rectangles)
  const workSectionPath = path.join(projectRoot, 'client/src/sections/FeaturedWorkSection.tsx');
  const workSectionContent = fs.readFileSync(workSectionPath, 'utf8');
  assert(!workSectionContent.includes('border-dashed border-cyan-500/20'), 'FeaturedWorkSection has NO empty dashed wireframe rectangles');
  assert(workSectionContent.includes('/images/projects/aetheria_preview.jpg'), 'FeaturedWorkSection displays Aetheria UI screenshot');
  assert(workSectionContent.includes('/images/projects/vanguard_preview.jpg'), 'FeaturedWorkSection displays Vanguard UI screenshot');
  assert(workSectionContent.includes('/images/projects/orbit_preview.jpg'), 'FeaturedWorkSection displays Orbit UI screenshot');

  // 8. Verify Final CTA
  const finalCtaPath = path.join(projectRoot, 'client/src/sections/FinalCtaSection.tsx');
  const finalCtaContent = fs.readFileSync(finalCtaPath, 'utf8');
  assert(finalCtaContent.includes('A UNIVERSE OF POSSIBILITIES'), 'Final CTA includes A UNIVERSE OF POSSIBILITIES');
  assert(finalCtaContent.includes('cyan_vortex_planet'), 'Final CTA renders real photorealistic cyan vortex destination planet');
  assert(finalCtaContent.includes('Start Your Project'), 'Final CTA contains Start Your Project button');

  // 9. Verify Server API Health Check
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

  // 10. Verify all 22 canonical public routes return HTTP 200 OK via Vite Dev Server
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
    console.error('\nRedesign Verification FAILED!');
    process.exit(1);
  } else {
    console.log('\nAll Redesign checks PASSED cleanly!');
  }
}

run();
