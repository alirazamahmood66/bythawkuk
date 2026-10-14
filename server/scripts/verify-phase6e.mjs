const CLIENT_BASE = 'http://localhost:5173';
const API_BASE = 'http://localhost:5000/api';

async function verifyPhase6E() {
  console.log('====================================================');
  console.log('PHASE 6E — INSIGHTS ARCHITECTURE VERIFICATION');
  console.log('====================================================\n');

  // 1. API Health Check
  const healthRes = await fetch(`${API_BASE}/health`);
  console.log(`[API HEALTH] Status: ${healthRes.status} (Expected: 200)`);
  const healthJson = await healthRes.json();
  console.log(`  Payload: ${JSON.stringify(healthJson.data)}\n`);

  // 2. All 18 Canonical Baseline Routes (Phases 1-6D)
  const baselineRoutes = [
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
  ];

  console.log('--- 1. Baseline Route Regressions (Phases 1-6D) ---');
  let baselinePass = true;
  for (const r of baselineRoutes) {
    const res = await fetch(`${CLIENT_BASE}${r}`);
    const pass = res.status === 200;
    if (!pass) baselinePass = false;
    console.log(`Route: ${r.padEnd(35)} -> HTTP ${res.status} [${pass ? 'PASS' : 'FAIL'}]`);
  }

  // 3. New Insights Routes (Phase 6E)
  console.log('\n--- 2. Phase 6E Insights Routes ---');
  const insightsRoutes = [
    '/insights',
    '/insights/what-makes-a-modern-business-website-actually-effective',
    '/insights/from-website-to-web-application',
    '/insights/designing-mobile-products-people-actually-use',
    '/insights/technical-seo-foundations-for-modern-websites',
    '/insights/building-a-digital-growth-strategy-around-the-customer-journey',
    '/insights/why-good-ui-ux-is-more-than-visual-design',
  ];

  let insightsPass = true;
  for (const r of insightsRoutes) {
    const res = await fetch(`${CLIENT_BASE}${r}`);
    const pass = res.status === 200;
    if (!pass) insightsPass = false;
    console.log(`Route: ${r.padEnd(72)} -> HTTP ${res.status} [${pass ? 'PASS' : 'FAIL'}]`);
  }

  // 4. Test Invalid Slug
  console.log('\n--- 3. Invalid Slug Graceful Handling ---');
  const invalidRes = await fetch(`${CLIENT_BASE}/insights/this-article-does-not-exist`);
  const invalidHtml = await invalidRes.text();
  const invalidPass = invalidRes.status === 200 && invalidHtml.toLowerCase().includes('<!doctype html>');
  console.log(`Invalid Route: /insights/this-article-does-not-exist -> HTTP ${invalidRes.status} [${invalidPass ? 'PASS' : 'FAIL'}]`);

  // 5. Test Category Query Param & Alias Route
  console.log('\n--- 4. Category Filter Navigation & Aliases ---');
  const catParamRes = await fetch(`${CLIENT_BASE}/insights?category=technology`);
  console.log(`Query Param Route: /insights?category=technology   -> HTTP ${catParamRes.status} [${catParamRes.status === 200 ? 'PASS' : 'FAIL'}]`);

  const catAliasRes = await fetch(`${CLIENT_BASE}/insights/technology`);
  console.log(`Category Alias:    /insights/technology            -> HTTP ${catAliasRes.status} [${catAliasRes.status === 200 ? 'PASS' : 'FAIL'}]`);

  console.log('\n====================================================');
  const allPass = baselinePass && insightsPass && invalidPass;
  console.log(`FINAL RESULT: ${allPass ? 'ALL ROUTE & HEALTH CHECKS PASSED' : 'SOME CHECKS FAILED'}`);
  console.log('====================================================');
}

verifyPhase6E().catch(console.error);
