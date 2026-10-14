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
    slug: 'bythawk-studio',
    title: 'Bytehawk Creative Studio',
    status: 'published',
    badgeLabel: 'LIVE STUDIO PLATFORM',
    liveUrl: 'https://bythawk.com',
    category: ['web-development', 'web-applications', 'branding', 'ui-ux'],
    primaryCategory: 'Creative Technology & 3D Engineering',
    shortDescription:
      'Immersive digital studio platform featuring real-time Three.js 3D graphics, sub-second route transitions, brand identity systems, and automated client acquisition pipelines.',
    description:
      'Bytehawk is a premier creative engineering studio specializing in high-performance React web applications, custom Three.js 3D animations, brand identity systems, and automated sales operations. Built with a bespoke cosmic titanium aesthetic, the platform combines cinematic visuals with lightning-fast page responsiveness.',
    industry: 'Creative Technology & Studio Operations',
    location: 'London, UK',
    year: '2026',
    duration: '8 Weeks',
    accentColor: '#20d9f3',
    featured: true,
    services: [
      { title: 'Web Development', route: '/services/web-development' },
      { title: 'Web Applications', route: '/services/web-applications' },
      { title: 'UI/UX Design', route: '/services/ui-ux-design' },
      { title: 'Brand Identity', route: '/services/branding' },
    ],
    technologies: [
      'React',
      'TypeScript',
      'Three.js',
      'Tailwind CSS',
      'Vite',
      'Framer Motion',
      'Node.js',
    ],
    challenge:
      'Digital technology studios require a web presence that proves technical excellence instantly. The challenge was building an interface with complex real-time WebGL 3D animation, dense typography, and smooth transitions while maintaining flawless 60fps performance and instantaneous route changes.',
    objectives: [
      'Implement real-time WebGL and Three.js visual elements with strict GPU frame budgets.',
      'Construct a modular design system using obsidian-titanium tokens with accessible high-contrast typography.',
      'Achieve sub-second initial load and instant subsequent client navigation.',
      'Integrate frictionless multi-step project discovery and automated lead qualification.',
    ],
    solution:
      'We architected an ultra-fast React and TypeScript platform bundled with Vite. Three.js scenes run on dedicated canvas loops with viewport-aware pausing, and styling is driven by an obsidian titanium glass system with dynamic cursor spotlight illumination and HUD reticles.',
    approach: [
      {
        step: '01',
        title: 'Aesthetic & Architectural Discovery',
        description: 'Establishing the dark celestial identity system, telemetry token palette, and performance benchmarks.',
      },
      {
        step: '02',
        title: 'Three.js & Canvas Engineering',
        description: 'Crafting responsive 3D planet geometry, orbital vector overlays, and micro-particle drift engines.',
      },
      {
        step: '03',
        title: 'Component Design & Telemetry Tokens',
        description: 'Building accessible glass panels, technical corner reticles, and smooth navigational waypoints.',
      },
      {
        step: '04',
        title: 'Performance & Production Hardening',
        description: 'Optimizing asset bundling, GPU draw calls, automated build verification, and zero-downtime deployment.',
      },
    ],
    features: [
      {
        title: '60FPS Real-Time Cosmic Graphics',
        description: 'GPU-optimized canvas rendering with particle physics and viewport-aware animation control.',
        tag: 'PERFORMANCE',
      },
      {
        title: 'Obsidian Titanium Design System',
        description: 'Custom tokenized UI system with cursor spotlight gradients, corner reticles, and WCAG AA contrast.',
        tag: 'DESIGN SYSTEM',
      },
      {
        title: 'Interactive Multi-Discipline Matrix',
        description: 'Dynamic service discovery explorer with linked specifications and capability matrices.',
        tag: 'ARCHITECTURE',
      },
      {
        title: 'Guided Project Discovery Flow',
        description: 'Interactive client questionnaire with live budget selection, scope evaluation, and confirmation.',
        tag: 'CONVERSION',
      },
    ],
    outcomes: [
      { metric: '60 FPS', label: 'Canvas Rendering Rate' },
      { metric: '< 50ms', label: 'Route Transition Latency' },
      { metric: '100%', label: 'Type Safety & Test Pass' },
    ],
  },
  {
    slug: 'oaksis-academy',
    title: 'OAKSIS Academy',
    status: 'published',
    badgeLabel: 'LIVE EDTECH PLATFORM',
    liveUrl: 'https://oaksis.com',
    category: ['web-applications', 'web-development', 'ui-ux'],
    primaryCategory: 'Next-Gen EdTech & Learning Management',
    shortDescription:
      'Comprehensive online education ecosystem delivering Cambridge and Edexcel O/A Level curricula, real-time student analytics, and elite international faculty access.',
    description:
      'OAKSIS Academy is a premier academic institution serving thousands of ambitious students worldwide. Built on Next.js and Tailwind CSS, the platform delivers interactive multi-tiered course pathways, live faculty consultation scheduling, student performance analytics, and seamless enrollment workflows.',
    industry: 'Online Education & Global EdTech',
    location: 'United Kingdom / Global',
    year: '2025',
    duration: '12 Weeks',
    accentColor: '#f59e0b',
    featured: false,
    services: [
      { title: 'Web Applications', route: '/services/web-applications' },
      { title: 'UI/UX Design', route: '/services/ui-ux-design' },
      { title: 'Web Development', route: '/services/web-development' },
    ],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Stripe Payments',
      'Node.js',
    ],
    challenge:
      'Students and parents needed a unified, high-trust portal that could manage thousands of course enrollments, present faculty credentials authoritatively, and handle curriculum navigation across multiple international exam boards without confusion.',
    objectives: [
      'Structure an intuitive course catalog covering O/A Level curricula with real-time syllabus tracking.',
      'Design high-conversion faculty spotlight profiles highlighting awards, ratings, and student testimonials.',
      'Integrate frictionless enrollment pipelines with multi-currency payment collection.',
      'Ensure lightning-fast mobile responsiveness for international learners on diverse network speeds.',
    ],
    solution:
      'We engineered a sleek Next.js web application utilizing server-side rendering for optimal SEO and rapid first paint. A warm royal-gold and emerald design language reinforces institutional prestige, paired with responsive interactive course filters and student review systems.',
    approach: [
      {
        step: '01',
        title: 'Curriculum Hierarchy Mapping',
        description: 'Organizing complex O/A Level subjects, exam boards, and modular learning units.',
      },
      {
        step: '02',
        title: 'Institutional Brand Experience',
        description: 'Creating a high-trust academic design system with gold-standard telemetry and verified faculty badges.',
      },
      {
        step: '03',
        title: 'Checkout & Enrollment Integration',
        description: 'Building streamlined student sign-up, cart flows, and multi-gateway tuition processing.',
      },
      {
        step: '04',
        title: 'Performance & Global CDN Tuning',
        description: 'Deploying edge caching for video teasers and global image delivery for international learners.',
      },
    ],
    features: [
      {
        title: 'Tiered Course Curriculum Catalog',
        description: 'Interactive subject taxonomy with syllabus milestones, instructor details, and student ratings.',
        tag: 'LEARNING',
      },
      {
        title: 'Faculty Verification & Credentials',
        description: 'Dedicated profile modules highlighting regional awards, years of experience, and student outcomes.',
        tag: 'TRUST',
      },
      {
        title: 'Frictionless Course Checkout',
        description: 'One-click enrollment with automated receipt generation and student onboarding emails.',
        tag: 'E-COMMERCE',
      },
      {
        title: 'Interactive Learning Pathways',
        description: 'Curated subject progression roadmaps guiding students from foundation to advanced exams.',
        tag: 'ROADMAP',
      },
    ],
    outcomes: [
      { metric: '50,000+', label: 'Active Learners' },
      { metric: '1,200+', label: 'Curated Modules' },
      { metric: '4.9 / 5', label: 'Student Satisfaction' },
    ],
  },
  {
    slug: 'ceedrs-platform',
    title: 'Ceedrs Digital Platform',
    status: 'published',
    badgeLabel: 'LIVE WEB APPLICATION',
    liveUrl: 'https://ceedrs.com',
    category: ['web-applications', 'web-development', 'ui-ux'],
    primaryCategory: 'High-Velocity Web Architecture',
    shortDescription:
      'Modern single-page web product engineered with modular UI components, high-speed client-side rendering, and responsive state synchronization.',
    description:
      'Ceedrs is a modern high-performance web platform built to handle agile digital operations. Engineered with a modular React component architecture and fine-tuned CSS, the platform delivers zero-latency user flows, fluid responsiveness, and reliable data interchange.',
    industry: 'Digital Services & Enterprise Software',
    location: 'United Kingdom',
    year: '2025',
    duration: '10 Weeks',
    accentColor: '#38bdf8',
    featured: false,
    services: [
      { title: 'Web Applications', route: '/services/web-applications' },
      { title: 'UI/UX Design', route: '/services/ui-ux-design' },
      { title: 'Web Development', route: '/services/web-development' },
    ],
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'REST APIs',
      'TanStack Query',
    ],
    challenge:
      'The client needed a lightweight, scalable digital frontend capable of loading instantly, maintaining seamless client state across complex workflows, and rendering dense interactive data cards with zero visual clutter.',
    objectives: [
      'Deliver an ultra-lightweight client bundle with sub-second Time to Interactive (TTI).',
      'Create a modular, reusable design system adaptable to evolving operational workflows.',
      'Implement strict TypeScript types across all API payloads and view layers.',
      'Ensure high-contrast readability across mobile, tablet, and widescreen workstation screens.',
    ],
    solution:
      'Bythawk developed a bespoke Single Page Application powered by Vite and React. The architecture incorporates atomic design tokens, predictive API prefetching, and clean typographic rhythms that keep user focus sharp.',
    approach: [
      {
        step: '01',
        title: 'Workflow & Wireframe Architecture',
        description: 'Mapping core operational user personas, data fields, and screen transitions.',
      },
      {
        step: '02',
        title: 'Atomic Component Formulation',
        description: 'Engineering reusable input components, cards, tables, and modal dialogues.',
      },
      {
        step: '03',
        title: 'State & Network Optimization',
        description: 'Implementing asynchronous caching and local persistence for offline-tolerant navigation.',
      },
      {
        step: '04',
        title: 'Cross-Device Quality Assurance',
        description: 'Rigorous automated viewport testing, cross-browser validation, and accessibility verification.',
      },
    ],
    features: [
      {
        title: 'Ultra-Lean Bundle Footprint',
        description: 'Carefully tree-shaken dependencies producing sub-second page delivery across 4G/5G mobile.',
        tag: 'SPEED',
      },
      {
        title: 'Reactive State Prefetching',
        description: 'Anticipatory network loading ensuring instant UI updates during interactive transitions.',
        tag: 'DATA',
      },
      {
        title: 'Ergonomic Glass Form Inputs',
        description: 'Accessible, feedback-rich input components with live validation and error boundaries.',
        tag: 'UI/UX',
      },
      {
        title: 'Fluid Viewport Adaptation',
        description: 'Breakpoints fine-tuned from compact smartphones to ultra-wide desktop monitors.',
        tag: 'RESPONSIVE',
      },
    ],
    outcomes: [
      { metric: '< 200ms', label: 'Average Interaction Time' },
      { metric: '99.9%', label: 'Uptime Reliability' },
      { metric: '100%', label: 'Strict TypeScript Coverage' },
    ],
  },
  {
    slug: 'global-integrated-support',
    title: 'Global Integrated Support',
    status: 'published',
    badgeLabel: 'ENTERPRISE INFRASTRUCTURE',
    liveUrl: 'https://globalintegratedsupport.com',
    category: ['web-development', 'web-applications'],
    primaryCategory: 'Enterprise Operations & Support Portal',
    shortDescription:
      'Mission-critical operational infrastructure portal coordinating client support tiers, multi-region SLA tracking, and automated service ticket dispatching.',
    description:
      'Global Integrated Support is an enterprise-grade digital portal engineered to coordinate complex operational workflows for international service delivery. Built with strict security parameters, the platform provides real-time SLA telemetry, multi-tiered incident routing, and centralized communication channels.',
    industry: 'Enterprise Operations & Technical Support',
    location: 'London, UK / Global',
    year: '2026',
    duration: '14 Weeks',
    accentColor: '#8b5cf6',
    featured: false,
    services: [
      { title: 'Web Applications', route: '/services/web-applications' },
      { title: 'Web Development', route: '/services/web-development' },
      { title: 'UI/UX Design', route: '/services/ui-ux-design' },
    ],
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'Tailwind CSS',
      'PostgreSQL',
      'Docker',
    ],
    challenge:
      'Enterprise support teams often struggle with fragmented email threads, slow ticket escalations, and poor visibility into critical client SLAs. The requirement was a centralized portal providing automated triage and real-time operational status.',
    objectives: [
      'Build a secure client and engineer portal with role-based access control (RBAC).',
      'Automate SLA countdown timers, incident severity classification, and technician assignment.',
      'Ensure high-security data compliance with audit logging and encrypted document transmission.',
      'Provide executive management dashboards displaying real-time resolution metrics.',
    ],
    solution:
      'We engineered a comprehensive operations hub utilizing React, TypeScript, and a resilient Express API backend. The system features WebSocket notifications for urgent incidents, audit trails for regulatory compliance, and a dark-mode command console optimized for 24/7 operations teams.',
    approach: [
      {
        step: '01',
        title: 'SLA & Escalation Protocol Mapping',
        description: 'Analyzing support tier contracts, severity levels, and automated routing logic.',
      },
      {
        step: '02',
        title: 'Command Dashboard Prototyping',
        description: 'Designing high-density incident queue tables, status pill telemetry, and SLA alerts.',
      },
      {
        step: '03',
        title: 'Secure Backend & Queue Architecture',
        description: 'Implementing asynchronous task workers, role scopes, and encrypted record storage.',
      },
      {
        step: '04',
        title: 'Load Testing & Security Audit',
        description: 'Simulating high-volume ticket surges and hardening against data leakage.',
      },
    ],
    features: [
      {
        title: 'Live SLA Countdown Telemetry',
        description: 'Dynamic visual timers alerting teams to impending response deadlines.',
        tag: 'REAL-TIME',
      },
      {
        title: 'Multi-Tier Role Governance',
        description: 'Granular authorization matrix protecting client documents and internal communications.',
        tag: 'SECURITY',
      },
      {
        title: 'Instant Incident Triage',
        description: 'Automated severity assignment and routing based on client contract rules.',
        tag: 'AUTOMATION',
      },
      {
        title: 'Executive Metrics & Reporting',
        description: 'Exportable analytics visualizing MTTR (Mean Time to Resolution) and satisfaction scores.',
        tag: 'ANALYTICS',
      },
    ],
    outcomes: [
      { metric: '99.99%', label: 'Infrastructure Availability' },
      { metric: '< 15min', label: 'Average Critical Triage' },
      { metric: '100%', label: 'SLA Audit Compliance' },
    ],
  },
  {
    slug: 'darul-quran-wa-sunnah',
    title: 'Darul Quran Wa Sunnah',
    status: 'published',
    badgeLabel: 'COMMUNITY & EDUCATION PORTAL',
    liveUrl: 'https://darulquranwasunnah.com',
    category: ['web-development', 'ui-ux', 'branding'],
    primaryCategory: 'Digital Islamic Learning Hub',
    shortDescription:
      'Global educational and community portal featuring structured multi-level curricula, live audio streaming, student registration pipelines, and donor engagement.',
    description:
      'Darul Quran Wa Sunnah is an international digital Islamic learning platform and community hub. Designed to bridge traditional Islamic education with modern digital accessibility, the platform hosts course catalogs, live audio broadcasts, student portal access, and transparent charity donation workflows.',
    industry: 'Islamic Education & Community Nonprofit',
    location: 'United Kingdom / Global',
    year: '2025',
    duration: '8 Weeks',
    accentColor: '#10b981',
    featured: false,
    services: [
      { title: 'Web Development', route: '/services/web-development' },
      { title: 'UI/UX Design', route: '/services/ui-ux-design' },
      { title: 'Brand Identity', route: '/services/branding' },
    ],
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Audio Streaming API',
      'Stripe / Donor Engine',
      'Cloudflare CDN',
    ],
    challenge:
      'The organization needed to replace an outdated web presence with a mobile-friendly digital hub capable of reaching a global audience, delivering live audio lectures smoothly, and managing student course applications with ease.',
    objectives: [
      'Create an elegant, culturally authentic design system reflecting Islamic aesthetics and geometric harmony.',
      'Integrate an embedded audio streaming player with low buffering across low-bandwidth connections.',
      'Construct a self-service student enrollment flow for weekend and evening adult/youth classes.',
      'Facilitate secure, transparent recurring charitable contributions and campaign tracking.',
    ],
    solution:
      'Bythawk crafted an inviting, modern web portal combining rich deep-emerald tones with clean typography and subtle geometric motifs. The site incorporates an persistent audio player, modular course registration cards, and instant mobile-friendly contribution processing.',
    approach: [
      {
        step: '01',
        title: 'Community Needs Discovery',
        description: 'Consulting with instructors, students, and donors to identify key digital touchpoints.',
      },
      {
        step: '02',
        title: 'Cultural Aesthetic & UX Craft',
        description: 'Blending contemporary clean ergonomics with traditional Islamic geometric motifs.',
      },
      {
        step: '03',
        title: 'Audio Streaming & Form Development',
        description: 'Configuring low-latency audio stream integration and multi-stage registration flows.',
      },
      {
        step: '04',
        title: 'Global CDN Delivery & Go-Live',
        description: 'Deploying edge caching on Cloudflare for smooth international accessibility.',
      },
    ],
    features: [
      {
        title: 'Persistent Live Audio Player',
        description: 'Low-bandwidth background streaming player for live broadcasts and recorded archives.',
        tag: 'MULTIMEDIA',
      },
      {
        title: 'Interactive Course Registration',
        description: 'Streamlined multi-level application flow for children, youth, and adult education tracks.',
        tag: 'EDUCATION',
      },
      {
        title: 'Transparent Community Giving',
        description: 'Secure contribution module supporting one-time and recurring sponsorship programs.',
        tag: 'PHILANTHROPY',
      },
      {
        title: 'Event & Prayer Time Telemetry',
        description: 'Automated schedules and calendar subscriptions for community gatherings.',
        tag: 'COMMUNITY',
      },
    ],
    outcomes: [
      { metric: 'Global', label: 'Audience Reach' },
      { metric: '< 1s', label: 'Audio Stream Buffer' },
      { metric: '+85%', label: 'Online Registrations' },
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
