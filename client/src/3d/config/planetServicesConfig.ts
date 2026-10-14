export interface PlanetServiceStation {
  id: string; // 'sun' | 'mercury' | 'venus' | 'earth' | 'mars' | 'jupiter' | 'saturn' | 'uranus' | 'neptune'
  index: number;
  planetName: string;
  serviceTitle: string;
  category: string;
  tagline: string;
  description: string;
  tags: string[];
  route: string;
  color: string;
  gradient: string;
  cardSide: 'left' | 'right';
  camOffset: [number, number, number];
  lookOffset: [number, number, number];
}

export const PLANET_SERVICES: PlanetServiceStation[] = [
  {
    id: 'sun',
    index: 0,
    planetName: 'THE SUN',
    serviceTitle: 'Digital Studio Launchpad',
    category: 'CORE ECOSYSTEM',
    tagline: 'End-to-End Digital Engineering & Innovation',
    description:
      'We engineer bespoke digital platforms, enterprise architectures, and growth engines built for ambitious businesses demanding precision and scale.',
    tags: ['Full-Stack MERN', 'TypeScript', 'UK Craftsmanship', 'Cloud Scale'],
    route: '/contact',
    color: '#f59e0b',
    gradient: 'from-amber-400 via-orange-400 to-yellow-300',
    cardSide: 'left',
    camOffset: [-3.2, 2.8, 10.5],
    lookOffset: [-3.2, 0, 0],
  },
  {
    id: 'mercury',
    index: 1,
    planetName: 'MERCURY',
    serviceTitle: 'Graphic Design & Branding',
    category: 'BRAND IDENTITY',
    tagline: 'Memorable Brand Systems & Creative Identity',
    description:
      'Distinctive visual identities, logo architecture, and digital design collateral that command attention and build enduring brand equity.',
    tags: ['Brand Identity', 'Vector Assets', 'Design Systems', 'Brand Guidelines'],
    route: '/services/graphic-design',
    color: '#cbd5e1',
    gradient: 'from-slate-200 via-slate-300 to-zinc-400',
    cardSide: 'right',
    camOffset: [1.1, 0.45, 2.6],
    lookOffset: [1.1, 0, 0],
  },
  {
    id: 'venus',
    index: 2,
    planetName: 'VENUS',
    serviceTitle: 'UI/UX Design',
    category: 'EXPERIENCE DESIGN',
    tagline: 'Intuitive Interfaces & Product Prototypes',
    description:
      'Human-centered interfaces, interactive prototypes, and customer conversion journeys engineered to delight users and maximize retention.',
    tags: ['UX Research', 'Figma Prototyping', 'Design Systems', 'Usability Testing'],
    route: '/services/ui-ux-design',
    color: '#fbbf24',
    gradient: 'from-amber-300 via-yellow-400 to-orange-300',
    cardSide: 'left',
    camOffset: [-1.4, 0.55, 3.5],
    lookOffset: [-1.4, 0, 0],
  },
  {
    id: 'earth',
    index: 3,
    planetName: 'EARTH',
    serviceTitle: 'Web Development',
    category: 'CORE ENGINEERING',
    tagline: 'High-Performance Websites Engineered for Scale',
    description:
      'Fast, responsive corporate platforms and marketing experiences with sub-second page loads, 95+ Core Web Vitals, and bulletproof security.',
    tags: ['React 19', 'Next.js', 'TypeScript', 'Sub-second Loads'],
    route: '/services/web-development',
    color: '#38bdf8',
    gradient: 'from-sky-400 via-cyan-300 to-blue-500',
    cardSide: 'right',
    camOffset: [1.6, 0.65, 4.0],
    lookOffset: [1.6, 0, 0],
  },
  {
    id: 'mars',
    index: 4,
    planetName: 'MARS',
    serviceTitle: 'Web Applications & SaaS',
    category: 'CLOUD SYSTEMS',
    tagline: 'Scalable SaaS Platforms & Custom Portals',
    description:
      'Enterprise dashboards, authenticated customer portals, and full-stack software built to handle high concurrency and mission-critical workflows.',
    tags: ['SaaS Architecture', 'REST & GraphQL', 'Microservices', 'Real-time Data'],
    route: '/services/web-applications',
    color: '#f97316',
    gradient: 'from-orange-500 via-amber-500 to-red-500',
    cardSide: 'left',
    camOffset: [-1.3, 0.5, 3.3],
    lookOffset: [-1.3, 0, 0],
  },
  {
    id: 'jupiter',
    index: 5,
    planetName: 'JUPITER',
    serviceTitle: 'E-commerce Platforms',
    category: 'COMMERCE PLATFORMS',
    tagline: 'High-Converting Digital Stores & Headless Checkout',
    description:
      'Engineered for maximum conversion rates, ultra-fast headless checkouts, Shopify Plus integrations, and international multi-currency processing.',
    tags: ['Shopify Plus', 'Headless Commerce', 'Stripe Payments', 'Conversion Optimization'],
    route: '/services/ecommerce',
    color: '#f59e0b',
    gradient: 'from-amber-400 via-yellow-500 to-orange-400',
    cardSide: 'right',
    camOffset: [3.6, 1.2, 8.6],
    lookOffset: [3.6, 0, 0],
  },
  {
    id: 'saturn',
    index: 6,
    planetName: 'SATURN',
    serviceTitle: 'Mobile App Development',
    category: 'MOBILE ENGINEERING',
    tagline: 'Native & Cross-Platform iOS & Android Apps',
    description:
      'Engaging mobile applications that deliver native 60 FPS fluidity, offline-first data sync, intuitive gestures, and seamless App Store deployment.',
    tags: ['React Native', 'iOS & Android', 'Offline-First', 'Push Notifications'],
    route: '/services/mobile-app-development',
    color: '#eab308',
    gradient: 'from-yellow-400 via-amber-300 to-stone-300',
    cardSide: 'left',
    camOffset: [-4.2, 2.0, 10.2],
    lookOffset: [-4.2, 0, 0],
  },
  {
    id: 'uranus',
    index: 7,
    planetName: 'URANUS',
    serviceTitle: 'Search Engine Optimization (SEO)',
    category: 'ORGANIC SEARCH',
    tagline: 'Technical SEO & Organic Visibility Engines',
    description:
      'Data-driven technical SEO audits, semantic schema markup, and UK local search strategies that turn organic discovery into qualified revenue.',
    tags: ['Technical SEO', 'Schema Markup', 'Core Web Vitals', 'UK Local Ranking'],
    route: '/services/seo',
    color: '#22d3ee',
    gradient: 'from-cyan-300 via-teal-300 to-sky-400',
    cardSide: 'right',
    camOffset: [2.2, 0.7, 5.2],
    lookOffset: [2.2, 0, 0],
  },
  {
    id: 'neptune',
    index: 8,
    planetName: 'NEPTUNE',
    serviceTitle: 'Digital Marketing & Growth',
    category: 'PERFORMANCE MARKETING',
    tagline: 'Paid Acquisition, Google Ads & Multi-Channel ROI',
    description:
      'High-ROI digital marketing campaigns spanning Google Search, Meta Ads, and automated conversion funnels designed to scale lead generation.',
    tags: ['Google Ads', 'Meta Campaigns', 'Conversion Tracking', 'Performance Analytics'],
    route: '/services/digital-marketing',
    color: '#818cf8',
    gradient: 'from-indigo-400 via-blue-400 to-cyan-400',
    cardSide: 'left',
    camOffset: [-2.1, 0.7, 5.0],
    lookOffset: [-2.1, 0, 0],
  },
];
