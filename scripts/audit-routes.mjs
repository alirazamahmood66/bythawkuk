import http from 'http';

const ROUTES_TO_AUDIT = [
  // Primary Navigation
  { path: '/', name: 'Homepage' },
  { path: '/about', name: 'About Page' },
  { path: '/process', name: 'Process Page' },
  { path: '/contact', name: 'Contact Page' },
  { path: '/work', name: 'Work / Portfolio Overview' },
  { path: '/insights', name: 'Insights Overview' },
  
  // Work Case Studies
  { path: '/work/bythawk-studio', name: 'Work: Bythawk Studio' },
  { path: '/work/oaksis-academy', name: 'Work: Oaksis Academy' },
  { path: '/work/ceedrs-platform', name: 'Work: Ceedrs Platform' },
  { path: '/work/global-integrated-support', name: 'Work: Global Integrated Support' },
  { path: '/work/darul-quran-wa-sunnah', name: 'Work: Darul Quran Wa Sunnah' },
  
  // Services Overview & Services Detail
  { path: '/services', name: 'Services Overview' },
  { path: '/services/web-development', name: 'Service: Web Development' },
  { path: '/services/web-applications', name: 'Service: Web Applications' },
  { path: '/services/ecommerce', name: 'Service: E-commerce' },
  { path: '/services/mobile-app-development', name: 'Service: Mobile Apps' },
  { path: '/services/digital-marketing', name: 'Service: Digital Marketing' },
  { path: '/services/seo', name: 'Service: SEO' },
  { path: '/services/graphic-design', name: 'Service: Graphic Design' },
  { path: '/services/ui-ux-design', name: 'Service: UI/UX Design' },

  // Solutions Routes (from Mega Menu)
  { path: '/solutions', name: 'Solutions Overview' },
  { path: '/solutions/startup-launch', name: 'Solution: Startup Launch' },
  { path: '/solutions/digital-transformation', name: 'Solution: Digital Transformation' },
  { path: '/solutions/ecommerce-growth', name: 'Solution: E-commerce Growth' },
  { path: '/solutions/custom-software', name: 'Solution: Custom Software' },
  { path: '/solutions/mobile-products', name: 'Solution: Mobile Products' },
  { path: '/solutions/growth-marketing', name: 'Solution: Growth Marketing' },

  // Secondary & Legal Routes
  { path: '/careers', name: 'Careers' },
  { path: '/design-system', name: 'Design System' },
  { path: '/privacy', name: 'Privacy Policy' },
  { path: '/terms', name: 'Terms of Service' },
  { path: '/cookies', name: 'Cookie Policy' },
  { path: '/insights/what-makes-a-modern-business-website-actually-effective', name: 'Insight Detail' },
];

function fetchRoute(path) {
  return new Promise((resolve, reject) => {
    http.get(`http://localhost:5173${path}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ statusCode: res.statusCode, html: data }));
    }).on('error', reject);
  });
}

console.log('=== BYTHAWK COMPREHENSIVE PAGE & CONTENT DENSITY AUDIT ===\n');

for (const route of ROUTES_TO_AUDIT) {
  try {
    const res = await fetchRoute(route.path);
    console.log(`Route: ${route.path.padEnd(35)} [${res.statusCode}] -> ${route.name}`);
  } catch (err) {
    console.error(`Failed to fetch ${route.path}:`, err.message);
  }
}
