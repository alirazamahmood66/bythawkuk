export type WorkStatus = 'preview' | 'published';

export type WorkCategory =
  | 'web-development'
  | 'web-applications'
  | 'ecommerce'
  | 'mobile'
  | 'ui-ux'
  | 'branding'
  | 'digital-marketing'
  | 'seo';

export interface WorkCategoryMeta {
  id: WorkCategory | 'all';
  label: string;
}

export interface WorkApproachStage {
  step: string;
  title: string;
  description: string;
}

export interface WorkFeature {
  title: string;
  description: string;
  tag?: string;
}

export interface WorkGalleryItem {
  src: string;
  alt: string;
  caption?: string;
}

export interface WorkOutcome {
  metric: string;
  label: string;
  description?: string;
}

export interface WorkTestimonial {
  quote: string;
  name: string;
  role?: string;
  company?: string;
}

export interface WorkServiceReference {
  title: string;
  route: string;
}

export interface WorkProject {
  slug: string;
  title: string;
  status: WorkStatus;
  badgeLabel: string;
  liveUrl?: string;
  domainUrl?: string;

  category: WorkCategory[];
  primaryCategory: string;

  shortDescription: string;
  description: string;

  industry?: string;
  location?: string;

  services: WorkServiceReference[];
  technologies: string[];

  year?: string;
  duration?: string;
  accentColor: string;

  featured?: boolean;

  heroImage?: string;
  heroVideo?: string;

  gallery?: WorkGalleryItem[];

  challenge?: string;
  objectives?: string[];
  solution?: string;

  approach?: WorkApproachStage[];
  features?: WorkFeature[];
  outcomes?: WorkOutcome[];
  testimonial?: WorkTestimonial;
  relatedServices?: string[];
}

export const WORK_CATEGORIES: WorkCategoryMeta[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'web-development', label: 'Web' },
  { id: 'web-applications', label: 'Web Applications' },
  { id: 'ecommerce', label: 'E-commerce' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'ui-ux', label: 'UI/UX' },
  { id: 'branding', label: 'Branding' },
  { id: 'digital-marketing', label: 'Marketing' },
  { id: 'seo', label: 'SEO' },
];

export const WORK_PROJECTS: WorkProject[] = [
  {
    slug: 'global-integrated-support',
    title: 'Global Integrated Support',
    status: 'published',
    badgeLabel: 'LIVE ENTERPRISE PLATFORM',
    liveUrl: 'https://globalintegratedsupport.com',
    domainUrl: 'globalintegratedsupport.com',
    category: ['web-development', 'web-applications', 'seo'],
    primaryCategory: 'Premium Mobile Auto Detailing Platform',
    shortDescription:
      'High-performance digital booking platform for luxury mobile auto detailing and vehicle care with real-time scheduling and instant package selection.',
    description:
      'Global Integrated Support delivers luxury mobile auto detailing and vehicle care. We engineered a sleek, dark-mode digital web experience featuring seamless online appointment booking, dynamic service packages, customer review feeds, and same-day scheduling dispatch.',
    industry: 'Automotive Services & Mobile Detailing',
    location: 'Australia / Nationwide',
    year: '2026',
    duration: '8 Weeks',
    accentColor: '#06b6d4',
    featured: true,
    heroImage: '/images/projects/global_integrated_support_preview.png',
    services: [
      { title: 'Web Development', route: '/services/web-development' },
      { title: 'Web Applications', route: '/services/web-applications' },
      { title: 'UI/UX Design', route: '/services/ui-ux-design' },
      { title: 'SEO Architecture', route: '/services/seo' },
    ],
    technologies: ['React 19', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Vite'],
    challenge:
      'The client required an unmistakable, high-end digital presence with seamless appointment scheduling, package customization, and effortless mobile booking for discerning vehicle owners.',
    objectives: [
      'Engineered an instant 2-minute appointment booking and dispatch workflow.',
      'Showcase transparent detailing packages and eco-friendly certified care.',
      'Achieve sub-second mobile page loads and automated appointment confirmations.',
      'Deliver high-converting local search visibility across service territories.',
    ],
    solution:
      'We engineered a high-velocity React web application utilizing Tailwind CSS with sleek obsidian glass cards, high-gloss automotive photography, and an integrated booking engine with instant feedback loops.',
    approach: [
      {
        step: '01',
        title: 'Operational Strategy & Scoping',
        description: 'Analyzing international client workflows, latency requirements, and multi-region routing architectures.',
      },
      {
        step: '02',
        title: 'Information Architecture & UI',
        description: 'Creating an intuitive, frictionless service taxonomy with high-contrast obsidian-gold typography.',
      },
      {
        step: '03',
        title: 'Edge Engineering & Integration',
        description: 'Developing modular React components, strict TypeScript schemas, and automated Cloudflare caching.',
      },
      {
        step: '04',
        title: 'Global Performance Hardening',
        description: 'Conducting worldwide latency benchmarks, SSL hardening, and automated pipeline verification.',
      },
    ],
    features: [
      {
        title: 'Multi-Region Edge Optimization',
        description: 'Global routing ensuring ultra-fast load times regardless of client geographical location.',
        tag: 'PERFORMANCE',
      },
      {
        title: 'Mission-Critical Reliability',
        description: 'Fault-tolerant frontend architecture designed for zero disruption and continuous uptime.',
        tag: 'INFRASTRUCTURE',
      },
      {
        title: 'Intelligent Service Telemetry',
        description: 'Structured navigation allowing corporate buyers to locate and engage support tiers in seconds.',
        tag: 'UX ARCHITECTURE',
      },
      {
        title: 'Enterprise Compliance & Security',
        description: 'Hardened TLS 1.3 endpoints, Content Security Policies, and full data privacy governance.',
        tag: 'SECURITY',
      },
    ],
    outcomes: [
      { metric: '99.98%', label: 'Platform Availability' },
      { metric: '< 55ms', label: 'Global Edge TTFB' },
      { metric: '45+', label: 'Countries Supported' },
    ],
  },
  {
    slug: 'ceedrs',
    title: 'Ceedrs Workforce ERP',
    status: 'published',
    badgeLabel: 'MODULAR WORKFORCE ERP',
    liveUrl: 'https://ceedrs.com',
    domainUrl: 'ceedrs.com',
    category: ['web-applications', 'web-development', 'ui-ux'],
    primaryCategory: 'Modular Workforce ERP & HR Cloud',
    shortDescription:
      'One workspace for your entire workforce. Unifying onboarding, attendance, payroll, performance, and exit operations in one cohesive platform.',
    description:
      'Ceedrs is a next-generation modular cloud ERP system designed to replace 10 disconnected tools. From automated onboarding and geofenced attendance to payroll, performance reviews, and exit workflows, Ceedrs unifies enterprise operations into one cohesive, lightning-fast platform.',
    industry: 'Enterprise ERP & Workforce Automation',
    location: 'Australia / Global',
    year: '2026',
    duration: '14 Weeks',
    accentColor: '#16a34a',
    featured: true,
    heroImage: '/images/projects/ceedrs_preview.png',
    services: [
      { title: 'Web Applications', route: '/services/web-applications' },
      { title: 'Web Development', route: '/services/web-development' },
      { title: 'UI/UX Design', route: '/services/ui-ux-design' },
    ],
    technologies: ['React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Redis', 'Docker'],
    challenge:
      'Organizations struggle with fragmented HR and operational stacks, juggling disparate systems for hiring, timesheets, payroll, and appraisals resulting in data silos and operational lag.',
    objectives: [
      'Replace 10 disconnected workforce tools with one unified workspace.',
      'Construct automated onboarding, attendance, payroll, performance, and exit modules.',
      'Achieve sub-60ms interaction latency across dense workforce telemetry tables.',
      'Provide granular role-based access control and compliance-grade audit trails.',
    ],
    solution:
      'We engineered a modular React 19 and TypeScript ERP platform with real-time biometric and geofenced attendance tracking, automated payroll calculators, continuous 360 performance reviews, and virtualized high-density data tables.',
    approach: [
      {
        step: '01',
        title: 'ERP Process Mapping & Workflows',
        description: 'Analyzing workforce lifecycle stages: hiring, onboarding, daily attendance, payroll cycles, and exit interviews.',
      },
      {
        step: '02',
        title: 'Database Schema & Security Architecture',
        description: 'Designing multi-tenant relational schemas with double-entry payroll ledger enforcement and strict audit logs.',
      },
      {
        step: '03',
        title: 'Modular High-Density Interface Craft',
        description: 'Engineering virtualized data tables, split-screen approvals, keyboard shortcuts, and instant workforce search.',
      },
      {
        step: '04',
        title: 'Testing & Operational Rollout',
        description: 'Running high-concurrency payroll stress tests, CSV/API bulk import pipelines, and end-to-end user trials.',
      },
    ],
    features: [
      {
        title: 'Unified Workforce Lifecycle',
        description: 'Onboarding, attendance, payroll, performance, and offboarding unified in a single cloud dashboard.',
        tag: 'MODULAR ERP',
      },
      {
        title: 'Geofenced & Biometric Attendance',
        description: 'Real-time clock-in validation with shift schedules, overtime calculations, and leave telemetry.',
        tag: 'WORKFORCE',
      },
      {
        title: 'Automated Multi-Tier Payroll',
        description: 'One-click pay runs, statutory tax deductions, payslip generation, and direct bank reconciliation.',
        tag: 'PAYROLL',
      },
      {
        title: 'Continuous Performance Analytics',
        description: 'Goal tracking, 360-degree feedback loops, KPI milestones, and automated review cycles.',
        tag: 'PERFORMANCE',
      },
    ],
    outcomes: [
      { metric: '10-in-1', label: 'Tools Consolidated' },
      { metric: '< 60ms', label: 'Sync Latency' },
      { metric: '99.9%', label: 'Payroll Accuracy' },
    ],
  },
  {
    slug: 'darul-quran-wa-sunnah',
    title: 'Darul Quran Wasunnah',
    status: 'published',
    badgeLabel: 'GLOBAL QURANIC ACADEMY',
    liveUrl: 'https://darulquranwasunnah.com',
    domainUrl: 'darulquranwasunnah.com',
    category: ['web-development', 'ui-ux', 'branding'],
    primaryCategory: 'Online Quranic Academy & Live Learning',
    shortDescription:
      'Learn Quran the Right Way. Global online academy featuring certified scholars, 1-on-1 and group classes for Tajweed, Hifz, and Islamic studies across all ages.',
    description:
      'Darul Quran Wasunnah is a premier online Quranic academy connecting thousands of students worldwide with qualified, certified male and female scholars. Engineered with interactive virtual classrooms, flexible class scheduling, student milestone tracking, and secure multi-currency enrollment for students of all ages and levels.',
    industry: 'Online Islamic Education & Global Academy',
    location: 'Australia / Global',
    year: '2026',
    duration: '8 Weeks',
    accentColor: '#059669',
    featured: true,
    heroImage: '/images/projects/darul_quran_preview.png',
    services: [
      { title: 'Web Development', route: '/services/web-development' },
      { title: 'UI/UX Design', route: '/services/ui-ux-design' },
      { title: 'Brand Identity', route: '/services/branding' },
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'WebRTC', 'Supabase', 'Stripe'],
    challenge:
      'Providing an intuitive, world-class virtual learning environment where international families can easily book certified tutors, choose flexible time slots across time zones, and track Quranic progress seamlessly.',
    objectives: [
      'Design a serene, high-trust academy interface with frictionless trial class booking.',
      'Support 1-on-1 and group class curriculum for Tajweed, Memorization (Hifz), and Islamic Studies.',
      'Achieve sub-second video connection latency and multi-device learning compatibility.',
      'Deliver automated lesson scheduling, reminders, and parent progress reporting.',
    ],
    solution:
      'We architected a luxury emerald and gold digital academy built on Next.js, featuring frictionless trial registration, teacher profile matchmaking, timezone-aware scheduling, and integrated audio/video classrooms.',
    approach: [
      {
        step: '01',
        title: 'Academic Scoping & User Flow',
        description: 'Designing intuitive parent and student enrollment journeys with instant class trial booking.',
      },
      {
        step: '02',
        title: 'Bilingual UI & Visual Identity',
        description: 'Crafting serene emerald-gold visual motifs, accessible typography, and verified teacher badges.',
      },
      {
        step: '03',
        title: 'Timezone-Aware Scheduling Engine',
        description: 'Building automated booking calendars synchronizing international student and tutor timezones.',
      },
      {
        step: '04',
        title: 'Global Payment & Enrollment',
        description: 'Integrating frictionless multi-currency Stripe checkout and automated class confirmation emails.',
      },
    ],
    features: [
      {
        title: 'Certified Scholar Network',
        description: 'Vetted male and female instructors with verified Ijazah certifications and teaching credentials.',
        tag: 'FACULTY',
      },
      {
        title: 'Interactive Virtual Classrooms',
        description: 'Integrated digital Quran reader, real-time audio recitation correction, and whiteboard notes.',
        tag: 'CLASSROOM',
      },
      {
        title: 'Flexible Timezone Scheduling',
        description: 'Automated class booking engine accommodating learners across Australia, the UK, US, and Middle East.',
        tag: 'SCHEDULING',
      },
      {
        title: 'Parent Progress Telemetry',
        description: 'Milestone tracking dashboards showing surah memorization progress, attendance, and instructor notes.',
        tag: 'STUDENT PROGRESS',
      },
    ],
    outcomes: [
      { metric: '1-on-1', label: '& Group Formats' },
      { metric: '100%', label: 'Certified Scholars' },
      { metric: '25+', label: 'Countries Enrolled' },
    ],
  },
  {
    slug: 'vtuber-design',
    title: 'VTuber Design Studio',
    status: 'published',
    badgeLabel: 'CREATING DIGITAL WORLDS',
    liveUrl: 'https://vtuberdesign.co.au',
    domainUrl: 'vtuberdesign.co.au',
    category: ['web-development', 'web-applications', 'branding', 'ui-ux'],
    primaryCategory: 'Virtual Production & Creative Web',
    shortDescription:
      'Creating Digital Worlds for Creators. Industry-leading VTuber models, Live2D rigging, digital art, animation, and high-performance creator web platforms.',
    description:
      'VTuber Design is a premier creative technology and virtual production studio engineering industry-grade VTuber avatars, Live2D rigging systems, broadcast overlays, and web applications. Built to AAA studio creative standards with native 8000x8000px canvases and 4K texture atlases.',
    industry: 'Creative Technology & Virtual Production',
    location: 'Sydney & Melbourne, Australia',
    year: '2026',
    duration: '8 Weeks',
    accentColor: '#A855F7',
    featured: true,
    heroImage: '/images/projects/vtuber_design_preview.png',
    services: [
      { title: 'Web Development', route: '/services/web-development' },
      { title: 'Web Applications', route: '/services/web-applications' },
      { title: 'UI/UX Design', route: '/services/ui-ux-design' },
      { title: 'Brand Identity', route: '/services/branding' },
    ],
    technologies: ['React 19', 'TypeScript', 'Live2D Cubism', 'WebGL', 'Tailwind CSS', 'Vite'],
    challenge:
      'Virtual streamers and agencies require ultra-expressive rigging, low-latency live broadcast integration, and a sleek web platform showcasing real-time rigging telemetry and model tiers.',
    objectives: [
      'Deliver 100% rigging precision with 15+ built-in physics expressions.',
      'Maintain AAA studio standards with 8000x8000px native canvas fidelity.',
      'Construct interactive live broadcast testing simulator and instant quote calculator.',
      'Achieve sub-second page performance across global creator communities.',
    ],
    solution:
      'We engineered a neon-infused digital ecosystem with dark ergonomics, an integrated Live2D rigging parameter preview, automated project estimation calculators, and multi-tier showcase galleries.',
    approach: [
      {
        step: '01',
        title: 'Creative Pipeline & Parameter Scoping',
        description: 'Defining Live2D motion physics, blend shapes, head-turn angles, and streaming overlay architectures.',
      },
      {
        step: '02',
        title: 'Interactive Studio Simulator',
        description: 'Building interactive parameter sliders demonstrating real-time rigging deformation and facial tracking.',
      },
      {
        step: '03',
        title: 'Quote Calculator & Commission Engine',
        description: 'Developing transparent budget calculators for models, rigging tiers, and commercial licensing.',
      },
      {
        step: '04',
        title: 'Performance & Asset Delivery',
        description: 'Optimizing high-resolution portfolio art with automated next-gen compression and CDN edge caching.',
      },
    ],
    features: [
      {
        title: 'Live2D Rigging Simulator',
        description: 'Interactive browser simulator demonstrating real-time head turns, eye physics, and lip-syncing.',
        tag: 'VIRTUAL TECH',
      },
      {
        title: 'AAA Studio Creative Standards',
        description: 'Ultra-high-definition 8000x8000px textures with multi-layer physics and stinger transition support.',
        tag: 'ANIMATION',
      },
      {
        title: 'Dynamic Commission Calculator',
        description: 'Instant project scoping and tier selection for solo creators and international talent agencies.',
        tag: 'COMMERCE',
      },
      {
        title: 'Creator Resource Ecosystem',
        description: 'Downloadable streaming assets, OBS optimization guides, and rigging documentation.',
        tag: 'RESOURCES',
      },
    ],
    outcomes: [
      { metric: '100%', label: 'Rigging Precision' },
      { metric: '24/7', label: 'Creator Support' },
      { metric: '15+', label: 'Built-in Expressions' },
    ],
  },
  {
    slug: 'oaksis',
    title: 'Oaksis Learning Academy',
    status: 'published',
    badgeLabel: 'THE GOLD STANDARD OF EDUCATION',
    liveUrl: 'https://oaksis.com',
    domainUrl: 'oaksis.com',
    category: ['web-applications', 'ecommerce', 'web-development'],
    primaryCategory: 'Elite Academic LMS & Global Education',
    shortDescription:
      'Architecting Academic Elite. Specialized O/A Level curricula and world-renowned language programs with direct access to elite global trainers.',
    description:
      'Oaksis is an international academic ecosystem architected for the top 1% of achievers. Delivering specialized Cambridge and Edexcel O/A Level curricula, world-renowned language mastery programs, direct access to elite global trainers, and frictionless multi-currency course enrollment.',
    industry: 'Elite Online Education & Global EdTech',
    location: 'Australia / Global',
    year: '2026',
    duration: '12 Weeks',
    accentColor: '#EAB308',
    featured: true,
    heroImage: '/images/projects/oaksis_preview.png',
    services: [
      { title: 'Web Applications', route: '/services/web-applications' },
      { title: 'E-commerce Architecture', route: '/services/ecommerce' },
      { title: 'UI/UX Design', route: '/services/ui-ux-design' },
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe Edge', 'PostgreSQL', 'Redis'],
    challenge:
      'High-achieving international students and parents require an authoritative, distraction-free learning ecosystem with interactive lecture streaming, instant syllabus downloads, and seamless global admissions.',
    objectives: [
      'Architect a luxury emerald-and-gold academic portal for elite learners.',
      'Deliver Cambridge & Edexcel curriculum pathways with milestone tracking.',
      'Deploy global multi-currency checkout via Stripe with sub-second confirmation.',
      'Ensure 100% WCAG AAA accessible typography contrast across all devices.',
    ],
    solution:
      'We built a Next.js platform integrated with Stripe Billing and distributed edge caches, enabling interactive lecture streaming, structured subject trees, and streamlined elite admission funnels.',
    approach: [
      {
        step: '01',
        title: 'Curriculum & Elite Journey Mapping',
        description: 'Structuring intuitive subject trees, grade progressions, and exam board taxonomies.',
      },
      {
        step: '02',
        title: 'Full-Stack LMS Architecture',
        description: 'Building student auth, role-based dashboards, video lecture integrations, and billing engines.',
      },
      {
        step: '03',
        title: 'Global Payment & Edge Verification',
        description: 'Integrating multi-currency payment pathways and testing worldwide streaming latencies.',
      },
    ],
    features: [
      {
        title: 'Specialized O/A Level Pathways',
        description: 'Comprehensive curriculum coverage for Cambridge and Edexcel examination boards.',
        tag: 'CURRICULUM',
      },
      {
        title: 'Direct Faculty Access',
        description: 'Interactive digital classroom connecting students directly to elite global trainers.',
        tag: 'LEARNING TECH',
      },
      {
        title: 'Multi-Currency Enrollment',
        description: 'Frictionless checkout supporting AUD, GBP, USD, and regional digital payment methods.',
        tag: 'COMMERCE',
      },
      {
        title: 'Status: Elite Access Portal',
        description: 'Personalized student telemetry tracking milestones, assignments, and exam preparedness.',
        tag: 'PORTAL',
      },
    ],
    outcomes: [
      { metric: 'Top 1%', label: 'Academic Achievers' },
      { metric: 'O/A Level', label: 'Cambridge & Edexcel' },
      { metric: '< 50ms', label: 'Edge TTFB' },
    ],
  },
  {
    slug: 'bythawk',
    title: 'Bythawk Digital',
    status: 'published',
    badgeLabel: 'BYTEHAWK DIGITAL STUDIO',
    liveUrl: 'https://bythawk.com',
    domainUrl: 'bythawk.com',
    category: ['web-development', 'branding', 'ui-ux', 'web-applications'],
    primaryCategory: 'Immersive Interfaces & Brand Engineering',
    shortDescription:
      'Engineering Immersive Interfaces That Scale Brands. Ultra-high performance web applications, interactive 3D scenes, and automated growth funnels.',
    description:
      'Bythawk Software Solutions designs and builds ultra-high performance web applications, interactive 3D scenes, and custom automated growth funnels for next-generation enterprises. Combining architectural rigor with bespoke typography and dark-mode ergonomics.',
    industry: 'Digital Engineering & Brand Systems',
    location: 'Sydney, Australia',
    year: '2026',
    duration: '6 Weeks',
    accentColor: '#7C3AED',
    featured: true,
    heroImage: '/images/projects/bythawk_preview.png',
    services: [
      { title: 'Web Development', route: '/services/web-development' },
      { title: 'Web Applications', route: '/services/web-applications' },
      { title: 'UI/UX Design', route: '/services/ui-ux-design' },
      { title: 'Brand Identity', route: '/services/branding' },
    ],
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'Three.js', 'Framer Motion', 'Vite'],
    challenge:
      'Modern brands need web interfaces that immediately convey technological authority, modern aesthetics, and relentless attention to speed while driving project estimation conversions.',
    objectives: [
      'Implement an unmistakable dark obsidian design language with purple illumination.',
      'Achieve 100/100 Google Lighthouse performance metrics.',
      'Construct an automated interactive project estimator and transparent scoping flow.',
      'Deliver butter-smooth 60fps motion transitions across all devices.',
    ],
    solution:
      'We engineered a lightweight React application utilizing Tailwind CSS and Framer Motion with custom cubic bezier transitions, obsidian glass cards, and an interactive project estimator tool.',
    approach: [
      {
        step: '01',
        title: 'Visual Identity & Systems',
        description: 'Defining color hierarchies, typography scales, and tactile micro-interaction principles.',
      },
      {
        step: '02',
        title: 'Interactive Project Estimator',
        description: 'Assembling reusable, accessible UI primitives with responsive layout ergonomics and instant pricing.',
      },
      {
        step: '03',
        title: 'Conversion Optimization',
        description: 'Streamlining project consultation pathways and user engagement telemetry.',
      },
    ],
    features: [
      {
        title: 'Interactive Project Estimator',
        description: 'Guided estimation workflow calculating custom budgets and development timelines in seconds.',
        tag: 'ESTIMATOR',
      },
      {
        title: 'Immersive Interface Engineering',
        description: 'Custom aesthetic utilizing dark obsidian glass panels with subtle electric violet illumination.',
        tag: 'AESTHETICS',
      },
      {
        title: '60FPS Motion Transitions',
        description: 'Butter-smooth route transitions and interactive micro-hover states.',
        tag: 'MOTION',
      },
    ],
    outcomes: [
      { metric: '100/100', label: 'Lighthouse Performance' },
      { metric: '< 0.8s', label: 'Largest Contentful Paint' },
      { metric: '+64%', label: 'Discovery Conversion' },
    ],
  },
];

export function getProjectBySlug(slug: string): WorkProject | undefined {
  return WORK_PROJECTS.find((p) => p.slug === slug);
}

export function getFeaturedProject(): WorkProject {
  return WORK_PROJECTS.find((p) => p.featured) || WORK_PROJECTS[0];
}

export function getNextProject(currentSlug: string): WorkProject {
  const currentIndex = WORK_PROJECTS.findIndex((p) => p.slug === currentSlug);
  if (currentIndex === -1 || currentIndex === WORK_PROJECTS.length - 1) {
    return WORK_PROJECTS[0];
  }
  return WORK_PROJECTS[currentIndex + 1];
}
