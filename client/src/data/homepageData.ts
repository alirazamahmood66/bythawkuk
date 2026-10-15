export interface EcosystemService {
  id: string;
  title: string;
  description: string;
  route: string;
  category: string;
  color: string;
  iconName: 'Globe' | 'Layout' | 'ShoppingBag' | 'Smartphone' | 'TrendingUp' | 'Search' | 'Palette' | 'Layers';
}

export interface FeaturedProject {
  id: string;
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  services: string[];
  technologies: string[];
  route: string;
  accentColor: string;
}

export interface WhyPrinciple {
  number: string;
  title: string;
  description: string;
  detail: string;
}

export interface LaunchStep {
  step: string;
  title: string;
  description: string;
  focusArea: string;
}

export interface TechCategory {
  category: string;
  description: string;
  technologies: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  clientName: string;
  company: string;
  role: string;
  project: string;
  isPlaceholder?: boolean;
}

export const SERVICES_ECOSYSTEM_DATA: EcosystemService[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'High-performance websites engineered around your brand, customers and business goals.',
    route: '/services/web-development',
    category: 'CORE ENGINEERING',
    color: '#06b6d4',
    iconName: 'Globe',
  },
  {
    id: 'web-applications',
    title: 'Web Applications',
    description: 'Scalable web platforms, dashboards and business systems built for real-world workflows.',
    route: '/services/web-applications',
    category: 'CLOUD SYSTEMS',
    color: '#38bdf8',
    iconName: 'Layout',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Development',
    description: 'Conversion-focused commerce experiences designed to sell, scale and evolve.',
    route: '/services/ecommerce',
    category: 'COMMERCE ENGINE',
    color: '#F59E0B',
    iconName: 'ShoppingBag',
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    description: 'Thoughtful mobile products designed for iOS, Android and modern cross-platform experiences.',
    route: '/services/mobile-app-development',
    category: 'MOBILE PLATFORMS',
    color: '#FBBF24',
    iconName: 'Smartphone',
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Data-driven campaigns that connect your business with the people who matter.',
    route: '/services/digital-marketing',
    category: 'GROWTH ENGINE',
    color: '#f59e0b',
    iconName: 'TrendingUp',
  },
  {
    id: 'seo',
    title: 'SEO & Search Architecture',
    description: 'Technical and strategic search optimisation designed to build sustainable visibility.',
    route: '/services/seo',
    category: 'DISCOVERY',
    color: '#10b981',
    iconName: 'Search',
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'Visual systems and creative assets that make your brand recognisable and consistent.',
    route: '/services/graphic-design',
    category: 'BRAND IDENTITY',
    color: '#F59E0B',
    iconName: 'Palette',
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Clear, intuitive digital experiences that turn complex products into simple interactions.',
    route: '/services/ui-ux-design',
    category: 'EXPERIENCE CRAFT',
    color: '#D97706',
    iconName: 'Layers',
  },
];

export const FEATURED_WORK_DATA: FeaturedProject[] = [
  {
    id: 'project-1',
    slug: 'vtuber design-studio',
    title: 'Bytehawk Creative Studio',
    category: 'CREATIVE TECHNOLOGY & 3D WEBGL',
    tagline: 'High-performance interactive studio platform with fluid 3D experiences.',
    description: 'Engineered an immersive digital ecosystem featuring responsive 60fps WebGL visualizers, automated client onboarding, and bespoke design systems.',
    services: ['Web Applications', 'UI/UX Design', '3D WebGL', 'Brand Engineering'],
    technologies: ['React 19', 'TypeScript', 'Three.js', 'Tailwind CSS', 'Vite'],
    route: '/work/vtuber design-studio',
    accentColor: '#20d9f3',
  },
  {
    id: 'project-2',
    slug: 'oaksis-academy',
    title: 'Oaksis Learning Academy',
    category: 'EDTECH LEARNING MANAGEMENT',
    tagline: 'Scalable educational ecosystem for Cambridge & Edexcel curricula.',
    description: 'Architected a comprehensive LMS handling high-concurrency video lectures, automated milestone tracking, and seamless multi-currency subscription checkouts.',
    services: ['Web Applications', 'E-commerce Development', 'UI/UX Design'],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Node.js'],
    route: '/work/oaksis-academy',
    accentColor: '#38bdf8',
  },
  {
    id: 'project-3',
    slug: 'ceedrs-platform',
    title: 'Ceedrs Cloud ERP Platform',
    category: 'ENTERPRISE CLOUD ERP SYSTEM',
    tagline: 'Multi-branch cloud ERP platform orchestrating automated inventory and supply chain operations.',
    description: 'Engineered an enterprise resource planning system featuring multi-branch inventory tracking, real-time financial reporting, and automated invoicing pipelines.',
    services: ['Web Applications', 'Cloud Architecture', 'UI/UX Design', 'Database Systems'],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    route: '/work/ceedrs-platform',
    accentColor: '#FBBF24',
  },
  {
    id: 'project-4',
    slug: 'global-integrated-support',
    title: 'Global Integrated Support Portal',
    category: 'ENTERPRISE OPERATIONS HUB',
    tagline: 'Multi-tier operational ticketing, telemetry, and distributed workflows.',
    description: 'Built a secure, fault-tolerant enterprise operations center coordinating global cross-region ticketing, SLAs, and live operational monitoring.',
    services: ['Web Applications', 'Backend Architecture', 'DevOps'],
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL'],
    route: '/work/global-integrated-support',
    accentColor: '#10b981',
  },
];

export const WHY_BYTHAWK_DATA: WhyPrinciple[] = [
  {
    number: '01',
    title: 'Strategy First',
    description: 'We start with the business problem, not the technology.',
    detail: 'Before writing code, we align on your commercial targets, operational constraints, and audience drivers.',
  },
  {
    number: '02',
    title: 'Built Around People',
    description: 'Every digital experience is designed around the people who use it.',
    detail: 'High visual craft paired with intuitive friction-free ergonomics so systems are adopted immediately.',
  },
  {
    number: '03',
    title: 'Engineering That Scales',
    description: 'We build foundations designed to evolve with your business.',
    detail: 'Clean modular codebases, resilient database models, and modern frameworks that grow without painful rewrites.',
  },
  {
    number: '04',
    title: 'One Digital Partner',
    description: 'Strategy, design, development and growth working together.',
    detail: 'Eliminate handoff friction between design agencies and dev shops by having one unified engineering team.',
  },
];

export const PROCESS_LAUNCH_DATA: LaunchStep[] = [
  {
    step: '01',
    title: 'Discover',
    description: 'Understand the business, audience and opportunity.',
    focusArea: 'Discovery workshops, technical auditing & user research.',
  },
  {
    step: '02',
    title: 'Strategy',
    description: 'Define the roadmap, priorities and technical direction.',
    focusArea: 'Architecture blueprints, milestone pacing & KPI metrics.',
  },
  {
    step: '03',
    title: 'Design',
    description: 'Turn strategy into a clear and compelling experience.',
    focusArea: 'Figma prototypes, design systems & kinetic micro-interactions.',
  },
  {
    step: '04',
    title: 'Build',
    description: 'Engineer the product with performance and scalability in mind.',
    focusArea: 'Full-stack engineering, API design & database schemas.',
  },
  {
    step: '05',
    title: 'Test',
    description: 'Validate, refine and prepare everything for launch.',
    focusArea: 'End-to-end verification, accessibility & responsive stress testing.',
  },
  {
    step: '06',
    title: 'Launch',
    description: 'Release with confidence and continue improving.',
    focusArea: 'Production deployment, monitoring & ongoing optimization.',
  },
];

export const TECHNOLOGY_ECOSYSTEM_DATA: TechCategory[] = [
  {
    category: 'Frontend Engineering',
    description: 'Reactive, accessible interfaces built with modern component architectures.',
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vite'],
  },
  {
    category: 'Backend & Cloud',
    description: 'Resilient APIs, scalable databases, and enterprise data models.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'REST & GraphQL'],
  },
  {
    category: 'Mobile Products',
    description: 'Native and cross-platform mobile apps for iOS and Android.',
    technologies: ['React Native', 'Flutter', 'TypeScript', 'Mobile UI/UX'],
  },
  {
    category: '3D & Experience',
    description: 'Cinematic digital storytelling, WebGL graphics, and physics-driven motion.',
    technologies: ['Three.js', 'React Three Fiber', '@react-three/drei', 'GSAP', 'Framer Motion'],
  },
  {
    category: 'Search & Growth',
    description: 'Technical capture infrastructure driving compounding organic and paid acquisition.',
    technologies: ['Technical SEO', 'Search Architecture', 'Google Analytics', 'Google Ads', 'Meta Ads'],
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 't-1',
    quote: 'CLIENT TESTIMONIAL WILL APPEAR HERE — Dedicated client partnership case studies and executive feedback will be linked upon public client project release.',
    clientName: 'Enterprise Client Partner',
    company: 'Australian Technology Group',
    role: 'Head of Digital Transformation',
    project: 'Cloud Application & Design System',
    isPlaceholder: true,
  },
  {
    id: 't-2',
    quote: 'CLIENT TESTIMONIAL WILL APPEAR HERE — Independent client evaluations scheduled for onboarding as case studies enter public release.',
    clientName: 'Commercial Director',
    company: 'Scale-Up Commerce Australia',
    role: 'Managing Director',
    project: 'Headless E-commerce Storefront',
    isPlaceholder: true,
  },
];
