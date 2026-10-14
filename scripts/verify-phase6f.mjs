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
  console.log('=== STARTING PHASE 6F VERIFICATION ===\n');

  // 1. Check robots.txt
  const robotsPath = path.join(projectRoot, 'client', 'public', 'robots.txt');
  assert(fs.existsSync(robotsPath), 'robots.txt exists in client/public');
  const robotsContent = fs.readFileSync(robotsPath, 'utf8');
  assert(robotsContent.includes('User-agent: *'), 'robots.txt contains User-agent: *');
  assert(robotsContent.includes('Allow: /'), 'robots.txt contains Allow: /');
  assert(robotsContent.includes('Disallow: /design-system'), 'robots.txt disallows /design-system');
  assert(robotsContent.includes('Sitemap: https://bythawk.uk/sitemap.xml'), 'robots.txt declares canonical sitemap.xml URL');

  // 2. Check sitemap.xml
  const sitemapPath = path.join(projectRoot, 'client', 'public', 'sitemap.xml');
  assert(fs.existsSync(sitemapPath), 'sitemap.xml exists in client/public');
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

  const expectedUrls = [
    'https://bythawk.uk/',
    'https://bythawk.uk/about',
    'https://bythawk.uk/process',
    'https://bythawk.uk/contact',
    'https://bythawk.uk/services',
    'https://bythawk.uk/services/web-development',
    'https://bythawk.uk/services/web-applications',
    'https://bythawk.uk/services/ecommerce',
    'https://bythawk.uk/services/mobile-app-development',
    'https://bythawk.uk/services/digital-marketing',
    'https://bythawk.uk/services/seo',
    'https://bythawk.uk/services/graphic-design',
    'https://bythawk.uk/services/ui-ux-design',
    'https://bythawk.uk/work',
    'https://bythawk.uk/work/aetheria-platform',
    'https://bythawk.uk/work/vanguard-commerce',
    'https://bythawk.uk/work/kore-systems',
    'https://bythawk.uk/work/orbit-mobile',
    'https://bythawk.uk/insights',
    'https://bythawk.uk/privacy',
    'https://bythawk.uk/cookies',
    'https://bythawk.uk/terms',
  ];

  for (const url of expectedUrls) {
    assert(sitemapContent.includes(`<loc>${url}</loc>`), `sitemap.xml contains approved URL: ${url}`);
  }

  // Count loc tags
  const locMatches = sitemapContent.match(/<loc>(.*?)<\/loc>/g) || [];
  assert(locMatches.length === expectedUrls.length, `sitemap.xml has exactly ${expectedUrls.length} entries (found ${locMatches.length})`);

  // Ensure excluded paths are NOT in sitemap
  assert(!sitemapContent.includes('/design-system'), 'sitemap.xml does NOT contain /design-system');
  assert(!sitemapContent.includes('beyond-flat-saas'), 'sitemap.xml does NOT contain preview insight beyond-flat-saas');
  assert(!sitemapContent.includes('ecommerce-development'), 'sitemap.xml does NOT contain redirect alias /services/ecommerce-development');
  assert(!locMatches.some((loc) => loc.includes('?')), 'sitemap.xml does NOT contain query parameters in <loc> elements');

  // 3. Check Legal pages existence & zero Three.js imports
  const legalFiles = [
    path.join(projectRoot, 'client', 'src', 'pages', 'PrivacyPage.tsx'),
    path.join(projectRoot, 'client', 'src', 'pages', 'CookiesPage.tsx'),
    path.join(projectRoot, 'client', 'src', 'pages', 'TermsPage.tsx'),
    path.join(projectRoot, 'client', 'src', 'components', 'legal', 'LegalLayout.tsx'),
    path.join(projectRoot, 'client', 'src', 'components', 'legal', 'LegalHeader.tsx'),
    path.join(projectRoot, 'client', 'src', 'components', 'legal', 'LegalSectionView.tsx'),
    path.join(projectRoot, 'client', 'src', 'components', 'legal', 'LegalTableOfContents.tsx'),
  ];

  for (const file of legalFiles) {
    assert(fs.existsSync(file), `Legal file exists: ${path.basename(file)}`);
    const content = fs.readFileSync(file, 'utf8');
    assert(!content.includes('three'), `${path.basename(file)} contains NO Three.js imports`);
    assert(!content.includes('SolarSystem'), `${path.basename(file)} contains NO 3D SolarSystem components`);
    assert(!content.includes('@react-three'), `${path.basename(file)} contains NO @react-three imports`);
  }

  // 4. Truthful content audit
  const legalDataPath = path.join(projectRoot, 'client', 'src', 'data', 'legalData.ts');
  const legalDataContent = fs.readFileSync(legalDataPath, 'utf8');
  assert(!legalDataContent.includes('12345678'), 'legalData.ts contains no fake company number');
  assert(!legalDataContent.includes('GB 999'), 'legalData.ts contains no fake VAT number');
  assert(!legalDataContent.includes('Google Analytics'), 'legalData.ts does not falsely claim active Google Analytics');
  assert(!legalDataContent.includes('Facebook Pixel'), 'legalData.ts does not falsely claim active Facebook Pixel');
  assert(legalDataContent.includes('strictly essential'), 'legalData.ts accurately reflects strictly essential storage only');

  // 5. Test getCanonicalUrl logic
  const seoPath = path.join(projectRoot, 'client', 'src', 'utils', 'seo.ts');
  const seoContent = fs.readFileSync(seoPath, 'utf8');
  assert(seoContent.includes("SITE_URL = 'https://bythawk.uk'"), 'seo.ts defines SITE_URL as https://bythawk.uk');
  assert(seoContent.includes('getCanonicalUrl'), 'seo.ts exports getCanonicalUrl');
  assert(seoContent.includes('applySeo'), 'seo.ts exports applySeo');

  // 6. Test dev server endpoint responses
  try {
    const healthRes = await fetch('http://127.0.0.1:5000/api/health');
    const healthData = await healthRes.json();
    assert(
      healthRes.status === 200 && (healthData.status === 'ok' || healthData.data?.status === 'ok'),
      'Server API /api/health returned 200 OK with status: ok'
    );
  } catch (err) {
    console.error('API health fetch error:', err);
    assert(false, `Server health check failed: ${err.message}`);
  }

  try {
    const robotsRes = await fetch('http://localhost:5173/robots.txt');
    assert(robotsRes.status === 200, 'Vite dev server serves /robots.txt with HTTP 200');

    const sitemapRes = await fetch('http://localhost:5173/sitemap.xml');
    assert(sitemapRes.status === 200, 'Vite dev server serves /sitemap.xml with HTTP 200');

    const privacyRes = await fetch('http://localhost:5173/privacy');
    assert(privacyRes.status === 200, 'Vite dev server serves /privacy with HTTP 200');

    const cookiesRes = await fetch('http://localhost:5173/cookies');
    assert(cookiesRes.status === 200, 'Vite dev server serves /cookies with HTTP 200');

    const termsRes = await fetch('http://localhost:5173/terms');
    assert(termsRes.status === 200, 'Vite dev server serves /terms with HTTP 200');
  } catch (err) {
    assert(false, `Client static/page fetch failed: ${err.message}`);
  }

  // Summary
  console.log('\n=== VERIFICATION SUMMARY ===');
  const passed = results.filter((r) => r.status === 'PASS').length;
  const failed = results.filter((r) => r.status === 'FAIL').length;
  console.log(`Total assertions: ${results.length}`);
  console.log(`Passed: ${passed}`);
  console.log(`Failed: ${failed}`);

  if (failed > 0) {
    console.error('\nVerification FAILED!');
    process.exit(1);
  } else {
    console.log('\nAll Phase 6F checks PASSED cleanly!');
  }
}

run();
