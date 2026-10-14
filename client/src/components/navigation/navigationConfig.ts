export interface SubNavItem {
  title: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  href: string;
  items: SubNavItem[];
}

export interface FeaturedService {
  id: string;
  title: string;
  tagline: string;
  description: string;
  href: string;
  category: string;
  color: string;
}

export interface SolutionItem {
  id: string;
  title: string;
  tagline: string;
  href: string;
  color?: string;
}

export interface DropdownItem {
  title: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface NavLinkItem {
  id: string;
  label: string;
  href?: string;
  type: 'mega-services' | 'mega-solutions' | 'dropdown' | 'link';
  dropdownItems?: DropdownItem[];
}

export const SERVICES_CATEGORIES: ServiceCategory[] = [
  {
    id: 'web-development',
    title: 'WEB DEVELOPMENT',
    description: 'High-performance websites engineered around your brand, users and business goals.',
    href: '/services/web-development',
    items: [
      { title: 'Corporate Websites', href: '/services/web-development#corporate' },
      { title: 'E-commerce', href: '/services/ecommerce' },
      { title: 'Landing Pages', href: '/services/web-development#landing-pages' },
      { title: 'Custom Websites', href: '/services/web-development#custom' },
      { title: 'CMS Development', href: '/services/web-development#cms' },
    ],
  },
  {
    id: 'web-applications',
    title: 'WEB APPLICATIONS',
    description: 'Scalable digital products and business systems built for real-world workflows.',
    href: '/services/web-applications',
    items: [
      { title: 'SaaS Platforms', href: '/services/web-applications#saas' },
      { title: 'Dashboards', href: '/services/web-applications#dashboards' },
      { title: 'Customer Portals', href: '/services/web-applications#portals' },
      { title: 'Business Systems', href: '/services/web-applications#business-systems' },
      { title: 'Custom Applications', href: '/services/web-applications#custom-apps' },
    ],
  },
  {
    id: 'mobile-app-development',
    title: 'MOBILE APP DEVELOPMENT',
    description: 'Mobile experiences designed for performance, usability and growth.',
    href: '/services/mobile-app-development',
    items: [
      { title: 'iOS Apps', href: '/services/mobile-app-development#ios' },
      { title: 'Android Apps', href: '/services/mobile-app-development#android' },
      { title: 'Cross-Platform Apps', href: '/services/mobile-app-development#cross-platform' },
      { title: 'MVP Development', href: '/services/mobile-app-development#mvp' },
      { title: 'App UI/UX', href: '/services/mobile-app-development#app-ui-ux' },
    ],
  },
  {
    id: 'digital-marketing',
    title: 'DIGITAL MARKETING',
    description: 'Data-driven campaigns designed to attract attention and generate measurable growth.',
    href: '/services/digital-marketing',
    items: [
      { title: 'Social Media Marketing', href: '/services/digital-marketing#social' },
      { title: 'Paid Advertising', href: '/services/digital-marketing#paid-ads' },
      { title: 'Google Ads', href: '/services/digital-marketing#google-ads' },
      { title: 'Meta Ads', href: '/services/digital-marketing#meta-ads' },
      { title: 'Content Marketing', href: '/services/digital-marketing#content' },
    ],
  },
  {
    id: 'seo',
    title: 'SEO',
    description: 'Search strategies designed to improve visibility, rankings and qualified organic traffic.',
    href: '/services/seo',
    items: [
      { title: 'Technical SEO', href: '/services/seo#technical' },
      { title: 'On-Page SEO', href: '/services/seo#on-page' },
      { title: 'Local SEO', href: '/services/seo#local' },
      { title: 'E-commerce SEO', href: '/services/seo#ecommerce' },
      { title: 'SEO Strategy', href: '/services/seo#strategy' },
    ],
  },
  {
    id: 'graphic-design',
    title: 'GRAPHIC DESIGN',
    description: 'Visual identities and creative systems that make brands recognizable and memorable.',
    href: '/services/graphic-design',
    items: [
      { title: 'Brand Identity', href: '/services/graphic-design#brand-identity' },
      { title: 'Logo Design', href: '/services/graphic-design#logo' },
      { title: 'UI/UX Design', href: '/services/ui-ux-design' },
      { title: 'Social Media Design', href: '/services/graphic-design#social' },
      { title: 'Marketing Materials', href: '/services/graphic-design#materials' },
    ],
  },
];

export const FEATURED_SERVICES: FeaturedService[] = [
  {
    id: 'ecommerce-featured',
    title: 'E-COMMERCE',
    tagline: 'High-Converting Digital Stores',
    description: 'Build digital storefronts designed to convert with bespoke checkout architectures and lightning-fast product catalogs.',
    href: '/services/ecommerce',
    category: 'COMMERCE ENGINE',
    color: '#06b6d4',
  },
  {
    id: 'uiux-featured',
    title: 'UI/UX DESIGN',
    tagline: 'Human-Centered Digital Craft',
    description: 'Create interfaces people understand and enjoy using. Cinematic aesthetic precision married with conversion metrics.',
    href: '/services/ui-ux-design',
    category: 'EXPERIENCE DESIGN',
    color: '#FBBF24',
  },
];

export const SOLUTIONS_ITEMS: SolutionItem[] = [
  {
    id: 'startup-launch',
    title: 'STARTUP LAUNCH',
    tagline: 'From idea to market-ready digital product with enterprise scalability.',
    href: '/solutions/startup-launch',
    color: '#06b6d4',
  },
  {
    id: 'digital-transformation',
    title: 'DIGITAL TRANSFORMATION',
    tagline: 'Modernize systems, workflows and customer experiences across your organization.',
    href: '/solutions/digital-transformation',
    color: '#38bdf8',
  },
  {
    id: 'ecommerce-growth',
    title: 'E-COMMERCE GROWTH',
    tagline: 'Build and optimize digital commerce experiences that scale international revenue.',
    href: '/solutions/ecommerce-growth',
    color: '#10b981',
  },
  {
    id: 'custom-software',
    title: 'CUSTOM SOFTWARE',
    tagline: 'Software engineered around your unique business requirements and data pipelines.',
    href: '/solutions/custom-software',
    color: '#FBBF24',
  },
  {
    id: 'mobile-products',
    title: 'MOBILE PRODUCTS',
    tagline: 'Launch mobile experiences designed for real users, retention, and peak speed.',
    href: '/solutions/mobile-products',
    color: '#f59e0b',
  },
  {
    id: 'growth-marketing',
    title: 'GROWTH & MARKETING',
    tagline: 'Combine technology, creative and marketing to accelerate compounding growth.',
    href: '/solutions/growth-marketing',
    color: '#F59E0B',
  },
];

export const ABOUT_DROPDOWN_ITEMS: DropdownItem[] = [
  {
    title: 'About Bythawk',
    href: '/about',
    description: 'Our mission, UK agency heritage, and creative technology ethos.',
  },
  {
    title: 'Our Process',
    href: '/process',
    description: 'Precision engineering workflows from concept discovery to deployment.',
  },
  {
    title: 'Why Bythawk',
    href: '/about#why-bythawk',
    description: 'The architectural advantage of a dedicated digital technology agency.',
  },
  {
    title: 'Technologies',
    href: '/about#technologies',
    description: 'Modern full-stack, cloud, 3D, and AI frameworks powering our builds.',
  },
  {
    title: 'Careers',
    href: '/careers',
    description: 'Join our team of engineers, designers, and digital strategists.',
    badge: 'Hiring',
  },
];

export const INSIGHTS_DROPDOWN_ITEMS: DropdownItem[] = [
  {
    title: 'All Insights',
    href: '/insights',
    description: 'Latest research, technical deep-dives, and agency perspectives.',
  },
  {
    title: 'Technology',
    href: '/insights?category=technology',
    description: 'Architectural patterns, cloud, and engineering benchmarks.',
  },
  {
    title: 'Web Development',
    href: '/insights?category=web-development',
    description: 'Modern frontend, backend, and full-stack performance.',
  },
  {
    title: 'Mobile',
    href: '/insights?category=mobile',
    description: 'Native and cross-platform mobile paradigms.',
  },
  {
    title: 'SEO',
    href: '/insights?category=seo',
    description: 'Search algorithms, organic capture, and semantic structure.',
  },
  {
    title: 'Digital Marketing',
    href: '/insights?category=digital-marketing',
    description: 'Data-informed customer acquisition and campaign mechanics.',
  },
  {
    title: 'Design',
    href: '/insights?category=design',
    description: 'Design systems, micro-interactions, and 3D visual language.',
  },
];

export const MAIN_NAV_ITEMS: NavLinkItem[] = [
  {
    id: 'home',
    label: 'Home',
    type: 'link',
    href: '/',
  },
  {
    id: 'services',
    label: 'Services',
    type: 'mega-services',
    href: '/services',
  },
  {
    id: 'solutions',
    label: 'Solutions',
    type: 'mega-solutions',
    href: '/solutions',
  },
  {
    id: 'work',
    label: 'Work',
    type: 'link',
    href: '/work',
  },
  {
    id: 'about',
    label: 'About',
    type: 'dropdown',
    href: '/about',
    dropdownItems: ABOUT_DROPDOWN_ITEMS,
  },
  {
    id: 'insights',
    label: 'Insights',
    type: 'dropdown',
    href: '/insights',
    dropdownItems: INSIGHTS_DROPDOWN_ITEMS,
  },
  {
    id: 'contact',
    label: 'Contact',
    type: 'link',
    href: '/contact',
  },
];
