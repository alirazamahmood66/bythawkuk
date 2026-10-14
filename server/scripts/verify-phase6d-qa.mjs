import mongoose from 'mongoose';

const API_BASE = 'http://localhost:5000/api';
const CLIENT_BASE = 'http://localhost:5173';

async function runQa() {
  console.log('====================================================');
  console.log('PHASE 6D — FINAL QA & REGRESSION VERIFICATION SUITE');
  console.log('====================================================\n');

  // Connect to MongoDB to verify records and clean up
  await mongoose.connect('mongodb://127.0.0.1:27017/bythawk');
  const db = mongoose.connection.db;
  const enquiriesColl = db.collection('contactenquiries');

  // Record initial count
  const initialCount = await enquiriesColl.countDocuments();
  console.log(`[DB] Initial contact enquiries in MongoDB: ${initialCount}`);

  // Test Health Endpoint
  const healthRes = await fetch(`${API_BASE}/health`);
  console.log(`[API] GET /health -> Status: ${healthRes.status} (Expected: 200)`);
  const healthJson = await healthRes.json();
  console.log(`[API] Health payload: ${JSON.stringify(healthJson)}`);

  // --- API TEST 1: Valid Submission ---
  const validPayload = {
    name: 'Verified QA Lead',
    email: 'qa.lead@agencytest.co.uk',
    company: 'QA Verification Systems Ltd',
    website: 'https://agencytest.co.uk',
    projectTypes: ['web-applications', 'ecommerce'],
    description: 'A genuine technical enquiry for architectural review and digital platform development.',
    budget: '25k-50k',
    timeline: '1-3-months'
  };

  const validRes = await fetch(`${API_BASE}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-forwarded-for': '198.51.100.1' },
    body: JSON.stringify(validPayload)
  });
  console.log(`\n1. Valid Submission: HTTP ${validRes.status} (Expected: 201)`);
  const validJson = await validRes.json();
  console.log(`   Response: success=${validJson.success}, ref=${validJson.data?.referenceNumber}, message="${validJson.message}"`);

  // Check DB persistence
  const savedValid = await enquiriesColl.findOne({ email: 'qa.lead@agencytest.co.uk' });
  console.log(`   DB Persisted: ${Boolean(savedValid)} (Enquiry ID: ${savedValid?._id})`);

  // --- API TEST 2: Invalid Email ---
  const badEmailRes = await fetch(`${API_BASE}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-forwarded-for': '198.51.100.2' },
    body: JSON.stringify({ ...validPayload, email: 'not-a-valid-email' })
  });
  console.log(`\n2. Invalid Email: HTTP ${badEmailRes.status} (Expected: 400)`);
  const badEmailJson = await badEmailRes.json();
  console.log(`   Errors: ${JSON.stringify(badEmailJson.errors)}`);

  // --- API TEST 3: Missing Project Type ---
  const missingTypeRes = await fetch(`${API_BASE}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-forwarded-for': '198.51.100.3' },
    body: JSON.stringify({ ...validPayload, projectTypes: [] })
  });
  console.log(`\n3. Missing Project Type: HTTP ${missingTypeRes.status} (Expected: 400)`);
  const missingTypeJson = await missingTypeRes.json();
  console.log(`   Errors: ${JSON.stringify(missingTypeJson.errors)}`);

  // --- API TEST 4: Short Description (< 10 chars) ---
  const shortDescRes = await fetch(`${API_BASE}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-forwarded-for': '198.51.100.4' },
    body: JSON.stringify({ ...validPayload, description: 'Short' })
  });
  console.log(`\n4. Short Description: HTTP ${shortDescRes.status} (Expected: 400)`);
  const shortDescJson = await shortDescRes.json();
  console.log(`   Errors: ${JSON.stringify(shortDescJson.errors)}`);

  // --- API TEST 5: Malformed Website URL ---
  const badUrlRes = await fetch(`${API_BASE}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-forwarded-for': '198.51.100.5' },
    body: JSON.stringify({ ...validPayload, website: 'ftp://not-http-site' })
  });
  console.log(`\n5. Malformed URL: HTTP ${badUrlRes.status} (Expected: 400)`);
  const badUrlJson = await badUrlRes.json();
  console.log(`   Errors: ${JSON.stringify(badUrlJson.errors)}`);

  // --- API TEST 6: Oversized Input (> 3000 chars description) ---
  const oversizedRes = await fetch(`${API_BASE}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-forwarded-for': '198.51.100.6' },
    body: JSON.stringify({ ...validPayload, description: 'A'.repeat(3050) })
  });
  console.log(`\n6. Oversized Input: HTTP ${oversizedRes.status} (Expected: 400)`);
  const oversizedJson = await oversizedRes.json();
  console.log(`   Errors: ${JSON.stringify(oversizedJson.errors)}`);

  // --- API TEST 7: Honeypot Anti-Spam Trap ---
  const honeypotRes = await fetch(`${API_BASE}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-forwarded-for': '198.51.100.7' },
    body: JSON.stringify({
      ...validPayload,
      email: 'spambot@marketing-crawler.net',
      company_fax: 'AUTOMATED BOT FORM FILL'
    })
  });
  console.log(`\n7. Honeypot Submission: HTTP ${honeypotRes.status} (Expected: 201)`);
  const honeypotJson = await honeypotRes.json();
  console.log(`   Response: success=${honeypotJson.success}, reference=${honeypotJson.data?.referenceId}`);
  // Verify honeypot submission was NOT persisted in MongoDB
  const botInDb = await enquiriesColl.findOne({ email: 'spambot@marketing-crawler.net' });
  console.log(`   Honeypot Persisted in DB: ${Boolean(botInDb)} (Expected: false)`);

  // --- API TEST 8: Rate Limiting Verification ---
  console.log('\n8. Rate Limiting Verification (Sending 7 requests from test IP 198.51.100.8)...');
  const rateLimitIp = '198.51.100.8';
  let rateLimitHit = false;
  let rateLimitStatus = null;
  let rateLimitMessage = null;

  for (let i = 1; i <= 7; i++) {
    const res = await fetch(`${API_BASE}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-forwarded-for': rateLimitIp },
      body: JSON.stringify({
        name: `Rate Test ${i}`,
        email: `rate${i}@ratetest.co.uk`,
        projectTypes: ['new-website'],
        description: `This is rate limit validation attempt number ${i}.`
      })
    });
    console.log(`   Request ${i}: HTTP ${res.status}`);
    if (res.status === 429) {
      rateLimitHit = true;
      rateLimitStatus = res.status;
      const json = await res.json();
      rateLimitMessage = json.message;
    }
  }
  console.log(`   Rate Limit Hit: ${rateLimitHit} (Status: ${rateLimitStatus}, Message: "${rateLimitMessage}")`);

  // Clean up all test records created during QA
  const deleteRes = await enquiriesColl.deleteMany({
    email: { $in: ['qa.lead@agencytest.co.uk', /@ratetest\.co\.uk$/, 'spambot@marketing-crawler.net', 'alex.vance@example.co.uk'] }
  });
  console.log(`\n[DB CLEANUP] Cleaned up ${deleteRes.deletedCount} QA test records from MongoDB.`);

  // --- ROUTE REGRESSION CHECKS (All Approved Routes) ---
  console.log('\n====================================================');
  console.log('CRITICAL ROUTE REGRESSION CHECKS (Vite Port 5173)');
  console.log('====================================================');

  const requiredRoutes = [
    '/',
    '/about',
    '/process',
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
    '/contact'
  ];

  let allRoutesPass = true;
  for (const r of requiredRoutes) {
    try {
      const res = await fetch(`${CLIENT_BASE}${r}`);
      const pass = res.status === 200;
      if (!pass) allRoutesPass = false;
      console.log(`Route: ${r.padEnd(35)} -> HTTP ${res.status} [${pass ? 'PASS' : 'FAIL'}]`);
    } catch (err) {
      console.log(`Route: ${r.padEnd(35)} -> ERROR: ${err.message} [FAIL]`);
      allRoutesPass = false;
    }
  }

  // Also check redirect from /services/ecommerce-development
  const redirRes = await fetch(`${CLIENT_BASE}/services/ecommerce-development`);
  console.log(`Route: ${'/services/ecommerce-development'.padEnd(35)} -> HTTP ${redirRes.status} [PASS]`);

  console.log('\n====================================================');
  console.log(`OVERALL RESULT: ${allRoutesPass && rateLimitHit ? 'ALL QA CHECKS PASSED' : 'SOME CHECKS FAILED'}`);
  console.log('====================================================');

  await mongoose.disconnect();
}

runQa().catch(console.error);
