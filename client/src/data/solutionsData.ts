export interface SolutionFeature {
  title: string;
  description: string;
}

export interface SolutionDeliverable {
  title: string;
  description: string;
  timeframe: string;
}

export interface SolutionFaq {
  question: string;
  answer: string;
}

export interface SolutionItemData {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  eyebrow: string;
  description: string;
  accentColor: string;
  typicalTimeline: string;
  engagementModel: string;
  targetAudience: string;
  keyOutcomes: { label: string; value: string }[];
  challengesSolved: string[];
  features: SolutionFeature[];
  deliverables: SolutionDeliverable[];
  technologies: string[];
  relatedProjectSlugs: string[];
  faqs: SolutionFaq[];
}

export const SOLUTIONS_DATA: Record<string, SolutionItemData> = {
  'startup-launch': {
    slug: 'startup-launch',
    title: 'Startup MVP & Platform Launch',
    tagline: 'From idea to market-ready digital product with enterprise scalability.',
    category: 'VENTURE & MVP ENGINEERING',
    eyebrow: 'BYTHAWK // SOLUTION ARCHITECTURE',
    description:
      'We engineer production-grade MVPs for venture-backed and bootstrapped startups. We prioritize rapid delivery, robust architecture, and sub-second performance so you can onboard early customers, collect real data, and raise capital on a rock-solid codebase.',
    accentColor: '#06b6d4',
    typicalTimeline: '6–10 Weeks',
    engagementModel: 'Fixed-Scope Sprints or Dedicated Pod',
    targetAudience: 'Pre-seed to Series A founders, incubators, and corporate spin-outs.',
    keyOutcomes: [
      { label: 'Time to Market', value: '< 8 Weeks' },
      { label: 'Lighthouse Score', value: '95+' },
      { label: 'Cloud Architecture', value: 'Production Ready' },
    ],
    challengesSolved: [
      'Eliminating technical debt from prototype spaghetti code before it slows down growth.',
      'Balancing rapid speed-to-market with strict data security and compliance.',
      'Building an interface that immediately establishes enterprise-grade credibility with users and investors.',
    ],
    features: [
      {
        title: 'Full-Stack Architecture & API Design',
        description: 'Clean TypeScript backend with relational or document databases and documented REST/GraphQL endpoints.',
      },
      {
        title: 'High-Converting Onboarding Flow',
        description: 'Multi-step signup, self-service authentication, and automated welcome emails.',
      },
      {
        title: 'Subscription & Payment Processing',
        description: 'Frictionless Stripe integration with recurring billing, customer portal, and tax compliance.',
      },
      {
        title: 'Analytics & Product Telemetry',
        description: 'Event-driven telemetry tracking user activation, retention funnels, and drop-off points.',
      },
    ],
    deliverables: [
      {
        title: 'Production MVP Deployment',
        description: 'Fully functioning web application deployed on scalable cloud infrastructure.',
        timeframe: 'Weeks 5–8',
      },
      {
        title: 'Component Design System',
        description: 'Modular UI library with reusable design tokens for future feature sprints.',
        timeframe: 'Weeks 2–4',
      },
      {
        title: 'System Blueprint & API Docs',
        description: 'Complete architecture diagrams, schema definitions, and developer runbooks.',
        timeframe: 'Week 8',
      },
    ],
    technologies: ['React 19', 'TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Stripe', 'Docker'],
    relatedProjectSlugs: ['ceedrs-platform', 'bythawk-studio'],
    faqs: [
      {
        question: 'How fast can Bythawk deliver a working MVP?',
        answer: 'Most startup launch engagements complete in 6 to 10 weeks depending on feature scope and third-party integrations.',
      },
      {
        question: 'Do we own 100% of the code and intellectual property?',
        answer: 'Yes. Upon milestone completion, full source code ownership, repository rights, and deployment credentials transfer entirely to your company.',
      },
      {
        question: 'Can your team help us continue building post-launch?',
        answer: 'Yes. We offer ongoing sprint retainers, feature expansion pods, or smooth handoffs to your internal engineering hires.',
      },
    ],
  },

  'digital-transformation': {
    slug: 'digital-transformation',
    title: 'Enterprise Digital Transformation',
    tagline: 'Modernize legacy systems, internal workflows and customer touchpoints.',
    category: 'SYSTEM MODERNIZATION',
    eyebrow: 'BYTHAWK // ENTERPRISE STRATEGY',
    description:
      'We replace brittle legacy software, manual spreadsheet processes, and fragmented tools with unified, modern cloud platforms. We design intuitive interfaces that empower operational teams, eliminate bottlenecks, and protect data integrity.',
    accentColor: '#38bdf8',
    typicalTimeline: '8–16 Weeks',
    engagementModel: 'Phased Migration Sprints',
    targetAudience: 'Mid-market businesses, logistics operators, educational institutions, and financial firms.',
    keyOutcomes: [
      { label: 'Operational Efficiency', value: '+42%' },
      { label: 'Manual Data Entry', value: '-85%' },
      { label: 'System Uptime SLA', value: '99.98%' },
    ],
    challengesSolved: [
      'Migrating away from slow legacy software without disrupting ongoing daily operations.',
      'Eliminating error-prone manual spreadsheets and siloed communication channels.',
      'Creating unified real-time visibility across distributed teams and global branch locations.',
    ],
    features: [
      {
        title: 'Legacy Data Migration & Schema Mapping',
        description: 'Secure, lossless extraction and transformation of historical company data into modern relational stores.',
      },
      {
        title: 'Unified Operational Portals',
        description: 'Role-based dashboards providing access control, audit logs, and live departmental telemetry.',
      },
      {
        title: 'Automated Workflow Pipelines',
        description: 'Trigger-based background workers automating invoice generation, ticket routing, and approvals.',
      },
      {
        title: 'Enterprise Security & Audit Trails',
        description: 'Full adherence to UK GDPR, encryption at rest and in transit, and granular activity logging.',
      },
    ],
    deliverables: [
      {
        title: 'Migration Architecture Plan',
        description: 'Step-by-step risk mitigation matrix and parallel-run operational schedule.',
        timeframe: 'Weeks 1–3',
      },
      {
        title: 'Core Platform & Admin Console',
        description: 'Modern unified web portal replacing legacy software with instant search and role permissions.',
        timeframe: 'Weeks 4–12',
      },
      {
        title: 'Staff Onboarding & Training Materials',
        description: 'Interactive documentation, video walkthroughs, and operational cheat-sheets.',
        timeframe: 'Weeks 13–16',
      },
    ],
    technologies: ['TypeScript', 'React', 'Node.js', 'Express', 'PostgreSQL', 'Redis', 'AWS', 'Docker'],
    relatedProjectSlugs: ['global-integrated-support', 'oaksis-academy'],
    faqs: [
      {
        question: 'How do you prevent downtime during migration?',
        answer: 'We deploy dual-write bridges and parallel-run environments so legacy tools and the new platform operate concurrently until verification is 100% complete.',
      },
      {
        question: 'Can you integrate with our existing enterprise ERP or CRM?',
        answer: 'Yes. We build custom API connectors for platforms such as Salesforce, HubSpot, SAP, Xero, and legacy SQL databases.',
      },
    ],
  },

  'ecommerce-growth': {
    slug: 'ecommerce-growth',
    title: 'High-Converting E-Commerce Growth',
    tagline: 'Build and optimize digital commerce experiences that scale international revenue.',
    category: 'COMMERCE & CONVERSION',
    eyebrow: 'BYTHAWK // DIGITAL COMMERCE',
    description:
      'We build decoupled, headless storefronts and conversion-engineered shopping experiences. With sub-second catalog transitions, frictionless one-tap mobile checkout, and automated multi-currency pricing, we turn casual visitors into loyal repeat customers.',
    accentColor: '#10b981',
    typicalTimeline: '6–12 Weeks',
    engagementModel: 'Full Storefront Build or CRO Sprint',
    targetAudience: 'DTC retail brands, wholesale B2B merchants, and expanding international retailers.',
    keyOutcomes: [
      { label: 'Mobile Conversion', value: '+34%' },
      { label: 'Checkout Duration', value: '< 1.4s' },
      { label: 'Catalog TTFB', value: '< 60ms' },
    ],
    challengesSolved: [
      'Sluggish checkout flows and slow page loads that cause high mobile cart abandonment.',
      'Difficulty expanding into European and international markets due to multi-currency and tax barriers.',
      'Rigid monolithic commerce templates that limit custom branding and marketing campaigns.',
    ],
    features: [
      {
        title: 'Headless Next.js Storefront',
        description: 'Blazing-fast edge-rendered catalog pages with instant product filter updates and zero page reloads.',
      },
      {
        title: 'Frictionless Mobile Checkout',
        description: 'One-tap Apple Pay, Google Pay, and Klarna integrations optimized for thumb-zone conversion.',
      },
      {
        title: 'Automated Multi-Currency Routing',
        description: 'Geo-located pricing, localized tax calculation, and automated currency conversion.',
      },
      {
        title: 'Real-Time Inventory & ERP Sync',
        description: 'Bi-directional stock synchronization between warehouse fulfillment systems and online storefronts.',
      },
    ],
    deliverables: [
      {
        title: 'Custom Brand Storefront',
        description: 'Bespoke UI design system optimized for mobile commerce and high-res product visualizers.',
        timeframe: 'Weeks 3–6',
      },
      {
        title: 'Checkout & Gateway Integration',
        description: 'Hardened payment pipeline with Stripe Edge, fraud detection, and automated receipts.',
        timeframe: 'Weeks 6–9',
      },
      {
        title: 'Technical SEO & Schema Integration',
        description: 'Rich snippet product schema, merchant feed generation, and Core Web Vitals optimization.',
        timeframe: 'Weeks 10–12',
      },
    ],
    technologies: ['Next.js', 'React', 'Shopify Storefront API', 'Stripe', 'Tailwind CSS', 'GraphQL', 'Algolia'],
    relatedProjectSlugs: ['oaksis-academy', 'bythawk-studio'],
    faqs: [
      {
        question: 'Do you work with Shopify, WooCommerce, or custom backends?',
        answer: 'We specialize in headless Shopify, MedusaJS, and custom Stripe commerce architectures that deliver maximum performance.',
      },
      {
        question: 'How do you optimize mobile conversion rates?',
        answer: 'We simplify checkout steps, eliminate unnecessary form fields, implement instant mobile wallet buttons, and ensure catalog items load in under 100ms.',
      },
    ],
  },

  'custom-software': {
    slug: 'custom-software',
    title: 'Bespoke Software & Cloud Engineering',
    tagline: 'Software engineered around your unique business requirements and data pipelines.',
    category: 'CUSTOM CLOUD SOFTWARE',
    eyebrow: 'BYTHAWK // SOFTWARE ENGINEERING',
    description:
      'Off-the-shelf software forces you to adapt your business to someone else’s limitations. We architect custom business software, client portals, and cloud microservices designed specifically for your unique operational workflows, competitive advantages, and scale.',
    accentColor: '#8b5cf6',
    typicalTimeline: '8–14 Weeks',
    engagementModel: 'Milestone-Based Engineering Sprints',
    targetAudience: 'Organizations requiring proprietary software, specialized workflows, or high-security data pipelines.',
    keyOutcomes: [
      { label: 'Process Speedup', value: '4x' },
      { label: 'Licensing Costs', value: '-60%' },
      { label: 'System Scalability', value: '100k+ Users' },
    ],
    challengesSolved: [
      'Expensive per-seat SaaS licensing fees for bloated tools that only do half of what you need.',
      'Fragmented data silos between departments that prevent leadership from getting accurate reporting.',
      'Inability to launch proprietary digital products that give your business a distinct market advantage.',
    ],
    features: [
      {
        title: 'Proprietary Workflow Automation',
        description: 'Custom state machines and business logic tailored to your exact operational procedures.',
      },
      {
        title: 'Secure Client & Vendor Portals',
        description: 'Branded self-service portals with document signing, project tracking, and private communication.',
      },
      {
        title: 'High-Throughput REST & GraphQL APIs',
        description: 'Resilient API backends with rate limiting, JWT authentication, and sub-50ms response benchmarks.',
      },
      {
        title: 'Real-Time Analytics & BI Dashboards',
        description: 'Custom business intelligence visualizers providing executive clarity on key revenue metrics.',
      },
    ],
    deliverables: [
      {
        title: 'Architecture Blueprint & Specifications',
        description: 'Technical RFC document detailing database schemas, security models, and cloud infrastructure.',
        timeframe: 'Weeks 1–2',
      },
      {
        title: 'Interactive Web Software Platform',
        description: 'Responsive, accessible web application crafted with strict TypeScript and Tailwind design tokens.',
        timeframe: 'Weeks 3–10',
      },
      {
        title: 'DevOps & Automated CI/CD Pipeline',
        description: 'Containerized deployment pipeline with automated testing, linting, and zero-downtime releases.',
        timeframe: 'Weeks 11–14',
      },
    ],
    technologies: ['TypeScript', 'React', 'Node.js', 'Express', 'PostgreSQL', 'Docker', 'Redis', 'AWS'],
    relatedProjectSlugs: ['global-integrated-support', 'ceedrs-platform'],
    faqs: [
      {
        question: 'Who maintains the software after deployment?',
        answer: 'We provide ongoing maintenance SLAs covering security updates, server monitoring, backups, and feature expansions.',
      },
      {
        question: 'Can the software scale as our user base grows?',
        answer: 'Yes. All architectures are built statelessly in Docker containers, allowing horizontal auto-scaling to handle hundreds of thousands of concurrent users.',
      },
    ],
  },

  'mobile-products': {
    slug: 'mobile-products',
    title: 'Cross-Platform Mobile Apps',
    tagline: 'Launch mobile experiences designed for real users, retention, and peak speed.',
    category: 'MOBILE PRODUCT ENGINEERING',
    eyebrow: 'BYTHAWK // MOBILE SYSTEMS',
    description:
      'We design and build iOS and Android mobile applications using modern cross-platform frameworks. We prioritize fluid 60fps animations, intuitive gesture navigation, offline-first local data synchronization, and frictionless biometric sign-in.',
    accentColor: '#f59e0b',
    typicalTimeline: '8–14 Weeks',
    engagementModel: 'End-to-End Product Lifecycle',
    targetAudience: 'Consumer startups, field operations teams, and brands launching dedicated mobile companion apps.',
    keyOutcomes: [
      { label: 'App Store Rating', value: '4.8+' },
      { label: 'Crash-Free Rate', value: '99.9%' },
      { label: 'Offline Sync', value: '100%' },
    ],
    challengesSolved: [
      'Maintaining separate iOS and Android native codebases that double development and maintenance costs.',
      'App uninstalls caused by sluggish frame rates, battery drain, or confusing UI patterns.',
      'App Store and Google Play rejection cycles caused by compliance or guideline infractions.',
    ],
    features: [
      {
        title: 'Unified React Native Codebase',
        description: 'Single high-performance codebase compiling to native iOS and Android binaries with zero visual compromise.',
      },
      {
        title: 'Offline-First Local Storage',
        description: 'Instant UI response with local SQLite caching and automatic conflict-free sync when connection restores.',
      },
      {
        title: 'Push Notifications & Engagement',
        description: 'Targeted push notifications, badge updates, and deep-link routing that boost daily active users.',
      },
      {
        title: 'Biometric Security & Apple Keychain',
        description: 'One-touch Face ID, Touch ID, and hardware-level encryption for user credentials.',
      },
    ],
    deliverables: [
      {
        title: 'Interactive Prototype & UI Kit',
        description: 'Figma design system aligned with Apple Human Interface Guidelines and Google Material Design.',
        timeframe: 'Weeks 2–4',
      },
      {
        title: 'Compiled iOS & Android Builds',
        description: 'Production-ready app binaries tested across multiple screen resolutions and hardware devices.',
        timeframe: 'Weeks 5–11',
      },
      {
        title: 'App Store & Play Store Publishing',
        description: 'End-to-end management of app submissions, screenshots, privacy policies, and approval.',
        timeframe: 'Weeks 12–14',
      },
    ],
    technologies: ['React Native', 'TypeScript', 'Expo', 'Node.js', 'SQLite', 'Tailwind (NativeWind)', 'Firebase'],
    relatedProjectSlugs: ['ceedrs-platform', 'bythawk-studio'],
    faqs: [
      {
        question: 'Do you handle the Apple App Store and Google Play submission process?',
        answer: 'Yes. We manage certificates, provisioning profiles, store listing metadata, screenshots, and review responses.',
      },
      {
        question: 'Why cross-platform over separate native apps?',
        answer: 'Cross-platform engineering cuts initial build and ongoing maintenance costs in half while providing near-identical 60fps performance.',
      },
    ],
  },

  'growth-marketing': {
    slug: 'growth-marketing',
    title: 'Growth Marketing & SEO Strategy',
    tagline: 'Combine technology, creative and marketing to accelerate compounding growth.',
    category: 'GROWTH ACCELERATION',
    eyebrow: 'BYTHAWK // GROWTH ENGINEERING',
    description:
      'Marketing without strong technical foundations burns ad spend. We unite high-converting landing page engineering, technical SEO, semantic structured data, and automated analytics funnels to deliver sustainable organic customer acquisition.',
    accentColor: '#ec4899',
    typicalTimeline: '4–8 Weeks Initial Sprint',
    engagementModel: 'Growth Sprints or Monthly Retainer',
    targetAudience: 'B2B service providers, high-ticket consultants, and growing commercial brands.',
    keyOutcomes: [
      { label: 'Organic Traffic', value: '+140%' },
      { label: 'Landing Page CVR', value: '4.2%' },
      { label: 'Search Visibility', value: 'Top 3 Ranks' },
    ],
    challengesSolved: [
      'Spending money on Google and Meta ads that send traffic to slow, confusing pages with low conversion.',
      'Falling behind competitors in organic search because of poor technical SEO, layout shifts, or weak metadata.',
      'Lacking accurate end-to-end attribution data to know which marketing channels generate actual revenue.',
    ],
    features: [
      {
        title: 'Conversion-Engineered Landing Pages',
        description: 'Ultra-fast, modular landing pages designed with persuasive hierarchy, social proof, and clear CTAs.',
      },
      {
        title: 'Technical SEO & Core Web Vitals Audit',
        description: 'Full code-level remediation of crawl errors, canonical duplicates, schema markup, and speed bottlenecks.',
      },
      {
        title: 'Attribution Tracking & Funnel Analytics',
        description: 'Privacy-first server-side conversion tracking delivering accurate attribution across all campaigns.',
      },
      {
        title: 'Automated Lead Qualification Funnels',
        description: 'Interactive multi-step questionnaires that pre-qualify inbound prospects before booking meetings.',
      },
    ],
    deliverables: [
      {
        title: 'Comprehensive Growth Audit',
        description: 'Deep-dive analysis of your current search positioning, competitors, and conversion leakages.',
        timeframe: 'Weeks 1–2',
      },
      {
        title: 'High-Velocity Landing Page Kit',
        description: 'Bespoke landing page templates engineered for lightning-fast load times and maximum conversions.',
        timeframe: 'Weeks 3–5',
      },
      {
        title: 'SEO Architecture & Structured Schema',
        description: 'Implementation of rich snippets, XML sitemaps, and optimized semantic content structure.',
        timeframe: 'Weeks 6–8',
      },
    ],
    technologies: ['React', 'Next.js', 'Google Tag Manager', 'PostHog', 'Ahrefs', 'Tailwind CSS', 'Schema.org'],
    relatedProjectSlugs: ['bythawk-studio', 'oaksis-academy'],
    faqs: [
      {
        question: 'How quickly do SEO improvements translate into business results?',
        answer: 'Technical SEO fixes and Core Web Vitals boosts typically begin reflecting in crawl rates within 3 to 6 weeks, with compounding organic gains over 3 to 6 months.',
      },
      {
        question: 'Do you write the marketing copy as well as engineer the pages?',
        answer: 'Yes. Our team pairs technical architects with commercial copywriters who craft persuasive, high-clarity headlines.',
      },
    ],
  },
};

export const getSolutionBySlug = (slug: string): SolutionItemData | undefined => {
  return SOLUTIONS_DATA[slug];
};

export const getAllSolutions = (): SolutionItemData[] => {
  return Object.values(SOLUTIONS_DATA);
};
