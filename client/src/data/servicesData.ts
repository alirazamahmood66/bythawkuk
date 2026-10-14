export interface CapabilityItem {
  id: string;
  number: string;
  title: string;
  description: string;
  keyOutputs: string[];
}

export interface DeliverableItem {
  title: string;
  description: string;
  tag: string;
}

export interface ProcessStage {
  step: string;
  name: string;
  summary: string;
  activities: string[];
  deliverable: string;
}

export interface TechStackTier {
  category: string;
  tools: {
    name: string;
    description: string;
  }[];
}

export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServiceFaqItem {
  question: string;
  answer: string;
}

export interface RelatedServiceItem {
  slug: string;
  title: string;
  category: string;
  description: string;
  route: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  shortName: string;
  eyebrow: string;
  category: string;
  headline: string;
  introduction: string;
  accentColor: string;
  iconName: 'Globe' | 'Layout' | 'ShoppingBag' | 'Smartphone' | 'TrendingUp' | 'Search' | 'Palette' | 'Layers';
  metaBadges: {
    label: string;
    value: string;
  }[];
  overview: {
    strategicHeadline: string;
    paragraphs: string[];
    corePillars: {
      title: string;
      description: string;
    }[];
  };
  capabilities: CapabilityItem[];
  deliverables: DeliverableItem[];
  process: ProcessStage[];
  technologies: TechStackTier[];
  benefits: ServiceBenefit[];
  faqs: ServiceFaqItem[];
  relatedServices: RelatedServiceItem[];
  seoTitle: string;
  seoDescription: string;
}

export const SERVICES_DETAIL_DATA: Record<string, ServiceDetail> = {
  'web-development': {
    slug: 'web-development',
    title: 'Web Development',
    shortName: 'Web Dev',
    eyebrow: 'BYTHAWK // CORE ENGINEERING',
    category: 'CORE ENGINEERING',
    headline: 'High-Performance Web Platforms Engineered for Scale and Impact',
    introduction:
      'We design and engineer modern web platforms that combine sub-second performance, bulletproof security, and seamless responsive behavior. Built with clean TypeScript, modern component architecture, and rigorous UK software craftsmanship.',
    accentColor: '#06b6d4',
    iconName: 'Globe',
    metaBadges: [
      { label: 'DELIVERY CADENCE', value: '4–12 Weeks' },
      { label: 'CORE STACK', value: 'TypeScript / React / Node' },
      { label: 'ARCHITECTURE', value: 'Headless / SSR / SPA' },
      { label: 'BENCHMARK', value: '95+ Core Web Vitals' },
    ],
    overview: {
      strategicHeadline: 'Modern web engineering that eliminates template debt and prioritizes speed.',
      paragraphs: [
        'At BYTHAWK, we believe a website is an operational asset, not a static digital brochure. Generic templates and bloated WordPress installations accumulate technical debt, impair conversion funnels, and compromise search indexation.',
        'We engineer custom web solutions from the ground up using strict type safety, modular component systems, and automated build pipelines. Every line of code is structured for maintainability, high throughput, and effortless future expansion.',
      ],
      corePillars: [
        {
          title: 'Sub-Second Performance',
          description: 'Optimized rendering paths, asset compression, and edge caching designed to achieve near-instant initial page loads.',
        },
        {
          title: 'Clean Modular Architecture',
          description: 'Component-driven codebases built with TypeScript that enable your internal team to extend features without breaking regressions.',
        },
        {
          title: 'Engineered for Discovery',
          description: 'Semantic HTML5 structure, structured metadata, and lightning-fast Core Web Vitals built directly into the foundation.',
        },
      ],
    },
    capabilities: [
      {
        id: 'cap-1',
        number: '01',
        title: 'Custom Front-End Engineering',
        description: 'Pixel-perfect, fluid user interfaces built with React, TypeScript, and modern styling architectures that behave flawlessly across any display.',
        keyOutputs: ['React / Vite / Next.js', 'Strict TypeScript', 'Tailwind CSS', 'Fluid Responsive Layouts'],
      },
      {
        id: 'cap-2',
        number: '02',
        title: 'Headless CMS & API Orchestration',
        description: 'Decoupled content management systems enabling non-technical teams to publish content rapidly without touching deployment code.',
        keyOutputs: ['Sanity / Strapi / Contentful', 'GraphQL & REST APIs', 'Webhook Automation', 'Multi-Environment Staging'],
      },
      {
        id: 'cap-3',
        number: '03',
        title: 'Full-Stack Application Integration',
        description: 'Robust server-side endpoints, microservices, and third-party API integrations engineered with Node.js and Express.',
        keyOutputs: ['Node.js & Express APIs', 'Authentication & JWT', 'Third-Party Connectors', 'Secure Webhooks'],
      },
      {
        id: 'cap-4',
        number: '04',
        title: 'Core Web Vitals Optimization',
        description: 'Comprehensive audit and code-level refactoring to eliminate cumulative layout shift (CLS), largest contentful paint (LCP), and interaction delay (INP).',
        keyOutputs: ['Lighthouse 95+ Scores', 'Asset Bundling Optimization', 'Critical CSS Pathing', 'Edge CDN Routing'],
      },
      {
        id: 'cap-5',
        number: '05',
        title: 'Accessibility & WCAG 2.1 AA Compliance',
        description: 'Semantic markup, full keyboard navigation, screen reader ARIA landmarks, and high-contrast color validation built into the design tokens.',
        keyOutputs: ['WCAG 2.1 AA Verification', 'Keyboard Focus Trapping', 'Screen Reader Audits', 'Accessible Form Controls'],
      },
      {
        id: 'cap-6',
        number: '06',
        title: 'CI/CD Pipelines & Cloud Deployment',
        description: 'Automated test execution, linting validation, and zero-downtime deployment pipelines configured on modern cloud infrastructure.',
        keyOutputs: ['GitHub Actions Workflows', 'Automated Type Checking', 'Staging Environments', 'AWS / Vercel Edge Hosting'],
      },
    ],
    deliverables: [
      {
        title: 'Production Code Repository',
        description: 'Fully documented, Git-versioned TypeScript codebase with comprehensive setup instructions.',
        tag: 'SOURCE CODE',
      },
      {
        title: 'Design System Component Library',
        description: 'Reusable UI component library documented for consistent future product expansion.',
        tag: 'UI ARCHITECTURE',
      },
      {
        title: 'Performance & Lighthouse Audit',
        description: 'Exhaustive verification report confirming Core Web Vitals, accessibility, and security compliance.',
        tag: 'QUALITY REPORT',
      },
      {
        title: 'CI/CD Automated Deployment',
        description: 'Turnkey continuous integration and delivery pipelines for frictionless future deployments.',
        tag: 'DEVOPS',
      },
      {
        title: 'Content Management Integration',
        description: 'Tailored headless editing interface with custom schemas and role-based permissions.',
        tag: 'CMS ENGINE',
      },
      {
        title: 'Technical Handover Documentation',
        description: 'Clear architectural overview and developer onboarding guides for your technical team.',
        tag: 'DOCUMENTATION',
      },
    ],
    process: [
      {
        step: '01',
        name: 'Technical Discovery & Scoping',
        summary: 'We evaluate your business requirements, existing system dependencies, and technical goals to formulate an exact roadmap.',
        activities: ['Stakeholder discovery workshops', 'Technical stack selection', 'Data flow mapping', 'Milestone definition'],
        deliverable: 'Technical Specification & Project Roadmap',
      },
      {
        step: '02',
        name: 'Architecture & System Design',
        summary: 'We architect the component hierarchy, API interfaces, schema structures, and performance benchmarks.',
        activities: ['Component schema design', 'API contract specification', 'Design token synchronization', 'Security review'],
        deliverable: 'System Architecture Blueprint',
      },
      {
        step: '03',
        name: 'Iterative Engineering Sprints',
        summary: 'Bi-weekly agile sprints delivering functional, fully tested modules directly to a private staging environment.',
        activities: ['Front-end UI development', 'API & backend integration', 'Responsive validation', 'Bi-weekly demo reviews'],
        deliverable: 'Staging Environment Access & Code PRs',
      },
      {
        step: '04',
        name: 'Quality Assurance & Performance Auditing',
        summary: 'Rigorous cross-browser testing, device matrix validation, and automated stress testing under realistic traffic loads.',
        activities: ['Cross-browser / cross-OS testing', 'Core Web Vitals profiling', 'Security penetration testing', 'WCAG AA audit'],
        deliverable: 'Comprehensive QA Verification Report',
      },
      {
        step: '05',
        name: 'Zero-Downtime Orbital Launch',
        summary: 'Carefully orchestrated deployment execution with DNS cutover, SSL verification, and live telemetry activation.',
        activities: ['DNS migration management', 'Production CDN cache warming', 'Zero-downtime cutover', 'Real-time error logging'],
        deliverable: 'Live Production Platform',
      },
      {
        step: '06',
        name: 'Post-Launch Telemetry & Evolution',
        summary: '30-day dedicated warranty support and monitoring, followed by proactive quarterly evolution sprints.',
        activities: ['Runtime error monitoring', 'User behavioral analytics', 'Patch management', 'Roadmap refinement'],
        deliverable: 'Post-Launch Performance Review',
      },
    ],
    technologies: [
      {
        category: 'Core & Languages',
        tools: [
          { name: 'TypeScript', description: 'Strict static typing for robust, self-documenting application logic.' },
          { name: 'JavaScript (ESNext)', description: 'Modern ECMAScript runtime execution across all browsers.' },
          { name: 'HTML5 & Semantic Markup', description: 'Standards-compliant, accessible foundational document structure.' },
        ],
      },
      {
        category: 'Front-End Architecture',
        tools: [
          { name: 'React', description: 'Declarative component-based UI rendering engine.' },
          { name: 'Vite', description: 'Ultra-fast build tooling and hot module replacement.' },
          { name: 'Tailwind CSS', description: 'Utility-first styling with centralized design token integration.' },
          { name: 'Framer Motion', description: 'Hardware-accelerated layout and interaction animations.' },
        ],
      },
      {
        category: 'Backend & APIs',
        tools: [
          { name: 'Node.js', description: 'Scalable asynchronous event-driven server runtime.' },
          { name: 'Express', description: 'Minimalist, robust HTTP web framework for RESTful microservices.' },
          { name: 'REST & GraphQL', description: 'Standardized data contracts for frontend-backend communication.' },
        ],
      },
      {
        category: 'DevOps & Tooling',
        tools: [
          { name: 'GitHub Actions', description: 'Automated CI/CD test and deployment workflows.' },
          { name: 'Docker', description: 'Containerized reproducible application environments.' },
          { name: 'Vercel / AWS', description: 'Edge delivery network with global CDN routing.' },
        ],
      },
    ],
    benefits: [
      {
        title: 'Zero Template Fragility',
        description: 'No brittle page builders or dependency bloat. Every component is custom-crafted for long-term operational health.',
      },
      {
        title: 'Blazing Fast Load Times',
        description: 'Engineered from line one to pass Google Core Web Vitals with flying colors, driving conversion and search rankings.',
      },
      {
        title: 'UK Engineering Leadership',
        description: 'Direct communication with seasoned senior engineers working in UK business hours without handoff distortion.',
      },
      {
        title: 'True Codebase Ownership',
        description: 'You own 100% of your source code, repositories, and credentials with zero proprietary vendor lock-in.',
      },
    ],
    faqs: [
      {
        question: 'How long does a typical web development engagement take?',
        answer:
          'A focused commercial web platform typically takes between 4 and 10 weeks from discovery to production launch. Larger systems with custom integrations or multi-language requirements generally span 10 to 14 weeks. We provide clear sprint milestones during technical discovery.',
      },
      {
        question: 'Can you work with our existing codebase or CMS?',
        answer:
          'Yes. We regularly conduct technical codebase audits on existing systems to evaluate code hygiene, performance bottlenecks, and architectural viability. If an incremental modernization makes commercial sense, we refactor progressively rather than forcing a total rebuild.',
      },
      {
        question: 'How do you guarantee site speed and Core Web Vitals?',
        answer:
          'Performance is engineered into our architecture rather than patched on at the end. We enforce strict asset budgets, dynamic code splitting, image optimization pipelines, and server-side edge caching, targeting 90+ Lighthouse scores across mobile and desktop.',
      },
      {
        question: 'What happens after the website is launched?',
        answer:
          'All our projects include a 30-day dedicated post-launch warranty with continuous telemetry and issue resolution. Following that, we offer tailored ongoing engineering retainers covering security updates, feature evolution, and infrastructure management.',
      },
      {
        question: 'Do we own the intellectual property and code upon project completion?',
        answer:
          'Absolutely. All custom source code, design assets, schemas, and configurations created for your project become your exclusive intellectual property upon full settlement of project milestones.',
      },
    ],
    relatedServices: [
      {
        slug: 'web-applications',
        title: 'Web Applications',
        category: 'CLOUD SYSTEMS',
        description: 'Scalable web platforms, dashboards and business systems built for complex workflows.',
        route: '/services/web-applications',
      },
      {
        slug: 'ui-ux-design',
        title: 'UI/UX Design',
        category: 'EXPERIENCE CRAFT',
        description: 'Clear, intuitive digital experiences that turn complex products into simple interactions.',
        route: '/services/ui-ux-design',
      },
      {
        slug: 'seo',
        title: 'SEO & Search Architecture',
        category: 'DISCOVERY',
        description: 'Technical and strategic search optimisation designed to build sustainable visibility.',
        route: '/services/seo',
      },
    ],
    seoTitle: 'Custom Web Development Services UK | High Performance Platforms | BYTHAWK',
    seoDescription:
      'BYTHAWK builds high-performance, custom web platforms and headless digital experiences for forward-thinking UK businesses. TypeScript, React, and clean architecture.',
  },

  'web-applications': {
    slug: 'web-applications',
    title: 'Web Applications',
    shortName: 'Web Apps',
    eyebrow: 'BYTHAWK // CLOUD SYSTEMS',
    category: 'CLOUD SYSTEMS',
    headline: 'Mission-Critical Web Applications & Enterprise Dashboards',
    introduction:
      'We engineer sophisticated SaaS applications, internal operations tools, and data-dense dashboards designed to handle real-world business complexity with fluid responsiveness and unwavering reliability.',
    accentColor: '#38bdf8',
    iconName: 'Layout',
    metaBadges: [
      { label: 'DELIVERY CADENCE', value: '8–20 Weeks' },
      { label: 'CORE STACK', value: 'TypeScript / React / Node / Mongo' },
      { label: 'ARCHITECTURE', value: 'Modular Monolith / Microservices' },
      { label: 'SECURITY', value: 'Role-Based Access / SOC2 Ready' },
    ],
    overview: {
      strategicHeadline: 'Transforming complex business logic into dependable, scalable software systems.',
      paragraphs: [
        'Enterprise operations and SaaS ventures cannot afford brittle tooling, unreliable state synchronisation, or clunky user interfaces. As your business scales, your web applications must support concurrent users, high-volume transactions, and evolving permissions without degradation.',
        'BYTHAWK builds bespoke web applications designed for long-term operational resilience. We combine rigorous domain modeling, type-safe API architectures, and intuitive user experiences that turn labyrinthine workflows into productive daily routines.',
      ],
      corePillars: [
        {
          title: 'Resilient Data Flow',
          description: 'Optimistic UI updates, automated caching layers, and WebSocket real-time synchronisation that prevent state drift.',
        },
        {
          title: 'Role-Based Security',
          description: 'Granular role-based access control (RBAC), encrypted session handling, and strict input validation at every layer.',
        },
        {
          title: 'Horizontal Scalability',
          description: 'Stateless server processes, optimized database indexing, and containerized deployment built to absorb traffic surges.',
        },
      ],
    },
    capabilities: [
      {
        id: 'cap-app-1',
        number: '01',
        title: 'B2B & Enterprise SaaS Product Development',
        description: 'End-to-end engineering of customer-facing SaaS platforms, including subscription billing, tenant isolation, and onboarding flows.',
        keyOutputs: ['Multi-Tenant Architecture', 'Stripe Billing & Subscriptions', 'User Onboarding Flows', 'Automated Usage Metering'],
      },
      {
        id: 'cap-app-2',
        number: '02',
        title: 'Real-Time Telemetry & Operations Dashboards',
        description: 'High-throughput operational consoles capable of displaying live data streams, interactive charts, and system status with low latency.',
        keyOutputs: ['WebSocket / SSE Streaming', 'Interactive Data Visualisation', 'Custom Filter Engines', 'Audit Log Telemetry'],
      },
      {
        id: 'cap-app-3',
        number: '03',
        title: 'Internal Tools & Workflow Automation',
        description: 'Custom back-office software that replaces fragmented spreadsheets and legacy desktop software with streamlined web workflows.',
        keyOutputs: ['Inventory & Order Portals', 'CRM / ERP Synchronization', 'Approval Workflows', 'PDF & CSV Export Engines'],
      },
      {
        id: 'cap-app-4',
        number: '04',
        title: 'API Engineering & Systems Integration',
        description: 'Architecting secure RESTful and GraphQL endpoints that bridge third-party services, banking APIs, and legacy databases.',
        keyOutputs: ['OpenAPI 3.0 Documentation', 'Rate-Limiting & Throttling', 'Webhook Dispatchers', 'Third-Party Connectors'],
      },
      {
        id: 'cap-app-5',
        number: '05',
        title: 'Authentication & Access Governance',
        description: 'Enterprise single sign-on (SSO), multi-factor authentication (MFA), and granular permission matrices for compliance readiness.',
        keyOutputs: ['OAuth2 / SAML / OIDC', 'MFA Verification', 'Fine-Grained Permissions', 'Session Invalidation Logic'],
      },
      {
        id: 'cap-app-6',
        number: '06',
        title: 'Relational & Document Database Engineering',
        description: 'Sophisticated data modeling, schema migrations, and indexing strategies in MongoDB and PostgreSQL to guarantee sub-millisecond lookups.',
        keyOutputs: ['Mongoose / Prisma Schemas', 'Database Index Tuning', 'Zero-Downtime Migrations', 'Automated Daily Snapshots'],
      },
    ],
    deliverables: [
      {
        title: 'Full-Stack Application Codebase',
        description: 'Clean TypeScript codebase with automated unit, integration, and end-to-end test suites.',
        tag: 'FULL STACK',
      },
      {
        title: 'OpenAPI Specification & Documentation',
        description: 'Fully documented API surface enabling seamless internal or partner third-party consumption.',
        tag: 'API SPEC',
      },
      {
        title: 'Production Database Architecture',
        description: 'Optimized schema definitions, migration scripts, and replication configurations.',
        tag: 'DATA MODEL',
      },
      {
        title: 'Automated CI/CD Deployment Pipeline',
        description: 'Multi-stage test and release automation configured with Docker and cloud container services.',
        tag: 'INFRASTRUCTURE',
      },
      {
        title: 'Admin Governance Console',
        description: 'Comprehensive administrative panel for user moderation, role management, and system metrics.',
        tag: 'ADMIN TOOL',
      },
      {
        title: 'Security & Penetration Test Report',
        description: 'Verification audit confirming vulnerability remediation against OWASP Top 10 standards.',
        tag: 'SECURITY',
      },
    ],
    process: [
      {
        step: '01',
        name: 'Domain Modeling & Systems Architecture',
        summary: 'We map your business entities, workflow states, and user journeys to construct an unambiguous technical domain model.',
        activities: ['Domain-driven design workshops', 'Entity-relationship modeling', 'Security threat analysis', 'Architecture blueprinting'],
        deliverable: 'Domain Specification & API Contract Draft',
      },
      {
        step: '02',
        name: 'Prototype & Interface Ergonomics',
        summary: 'Designing high-fidelity dashboard views with real data density to validate workflow efficiency before code is written.',
        activities: ['Dashboard wireframing', 'Data table & filter prototyping', 'User role pathway validation', 'Design token sync'],
        deliverable: 'Interactive High-Fidelity Prototype',
      },
      {
        step: '03',
        name: 'Sprint-Based Full-Stack Engineering',
        summary: 'Agile sprints delivering functional frontend components connected to live backend endpoints with automated unit testing.',
        activities: ['TypeScript schema modeling', 'Frontend state orchestration', 'Backend controller development', 'Bi-weekly demo deployments'],
        deliverable: 'Continuous Staging Build Deployments',
      },
      {
        step: '04',
        name: 'Stress Testing & Concurrency Validation',
        summary: 'Simulating concurrent user spikes, heavy query loads, and network latency to benchmark performance limits.',
        activities: ['Load testing with k6', 'Database query profiling', 'Security penetration testing', 'Session edge-case testing'],
        deliverable: 'Load & Security Performance Report',
      },
      {
        step: '05',
        name: 'Controlled Rollout & Deployment',
        summary: 'Phased deployment with feature flag isolation, database migration verification, and real-time operational monitoring.',
        activities: ['Zero-downtime database migration', 'Feature flag deployment', 'Telemetry & alerting hookup', 'Production sign-off'],
        deliverable: 'Live Production System Deployment',
      },
      {
        step: '06',
        name: 'Telemetry Monitoring & Roadmap Expansion',
        summary: 'Active operational monitoring, error tracking, and planned feature sprints aligned with user telemetry.',
        activities: ['Sentry error alerting', 'Database query telemetry', 'Feature iteration sprints', 'Performance tuning'],
        deliverable: 'Continuous Engineering Retainer Support',
      },
    ],
    technologies: [
      {
        category: 'Frontend & State',
        tools: [
          { name: 'React 18 & TypeScript', description: 'Declarative component rendering with strict typing.' },
          { name: 'TanStack Query', description: 'Server state management, background refetching, and cache invalidation.' },
          { name: 'Zustand', description: 'Lightweight, predictable client-side application state management.' },
          { name: 'Tailwind CSS', description: 'High-density design token styling for complex enterprise interfaces.' },
        ],
      },
      {
        category: 'Backend & Services',
        tools: [
          { name: 'Node.js & Express', description: 'Asynchronous backend microservices and REST endpoints.' },
          { name: 'Socket.IO / WebSockets', description: 'Bi-directional real-time communication for live feeds.' },
          { name: 'JWT & OAuth2', description: 'Secure token-based authentication and role-based authorization.' },
        ],
      },
      {
        category: 'Databases & Storage',
        tools: [
          { name: 'MongoDB & Mongoose', description: 'Flexible, high-throughput document database for complex data models.' },
          { name: 'PostgreSQL', description: 'ACID-compliant relational database for structured financial data.' },
          { name: 'Redis', description: 'In-memory caching and distributed session management.' },
        ],
      },
      {
        category: 'DevOps & Reliability',
        tools: [
          { name: 'Docker Containers', description: 'Hermetic application packaging across staging and production.' },
          { name: 'AWS / DigitalOcean', description: 'Cloud infrastructure with automated scaling and backups.' },
          { name: 'Vitest & Playwright', description: 'Automated end-to-end regression and unit testing.' },
        ],
      },
    ],
    benefits: [
      {
        title: 'Built for High Operational Density',
        description: 'Interfaces and backends engineered specifically to handle dense data sets, complex tables, and rapid user workflows.',
      },
      {
        title: 'Enterprise-Grade Security',
        description: 'Built-in protection against SQL injection, XSS, CSRF, and broken access control aligned with OWASP standards.',
      },
      {
        title: 'Scalable Data Architecture',
        description: 'Database schemas and caching strategies that comfortably scale from thousands to millions of records.',
      },
      {
        title: 'Clear Developer Ergonomics',
        description: 'Clean, type-safe code that your internal engineers can easily understand, maintain, and expand.',
      },
    ],
    faqs: [
      {
        question: 'How do you approach multi-tenant SaaS architecture?',
        answer:
          'We evaluate tenant isolation requirements early. Depending on regulatory and scaling needs, we implement either shared-database tenant-scoping with strict query-level guardrails, or separate tenant database schemas for enterprise compliance.',
      },
      {
        question: 'How do you handle real-time data updates in web applications?',
        answer:
          'We utilize WebSocket connections or Server-Sent Events (SSE) coupled with TanStack Query cache invalidation. This ensures that when an operational record changes on the server, all connected client dashboards update instantaneously without full page refreshes.',
      },
      {
        question: 'Can you integrate with our legacy enterprise software?',
        answer:
          'Yes. We have deep experience building integration middleware, custom webhooks, and ETL adapters that bridge modern web applications with legacy ERPs, internal SQL databases, and third-party enterprise platforms.',
      },
      {
        question: 'What automated testing standards do you uphold?',
        answer:
          'We implement a pragmatic testing pyramid: unit tests for core domain logic, integration tests for API endpoints, and Playwright end-to-end tests for mission-critical user workflows such as checkout, authentication, and data export.',
      },
      {
        question: 'Do you offer ongoing SLA maintenance and infrastructure support?',
        answer:
          'Yes. We offer structured monthly engineering retainers providing 24/7 uptime monitoring, critical patch response, database optimization, and ongoing feature velocity.',
      },
    ],
    relatedServices: [
      {
        slug: 'web-development',
        title: 'Web Development',
        category: 'CORE ENGINEERING',
        description: 'High-performance websites engineered around your brand, customers and business goals.',
        route: '/services/web-development',
      },
      {
        slug: 'ui-ux-design',
        title: 'UI/UX Design',
        category: 'EXPERIENCE CRAFT',
        description: 'Clear, intuitive digital experiences that turn complex products into simple interactions.',
        route: '/services/ui-ux-design',
      },
      {
        slug: 'mobile-app-development',
        title: 'Mobile App Development',
        category: 'MOBILE PLATFORMS',
        description: 'Thoughtful mobile products designed for iOS, Android and modern cross-platform experiences.',
        route: '/services/mobile-app-development',
      },
    ],
    seoTitle: 'Custom Web Application Development UK | SaaS & Dashboards | BYTHAWK',
    seoDescription:
      'BYTHAWK builds mission-critical web applications, enterprise SaaS platforms, and data-dense dashboards for UK businesses. TypeScript, React, and scalable cloud systems.',
  },

  'ecommerce': {
    slug: 'ecommerce',
    title: 'E-commerce Development',
    shortName: 'E-commerce',
    eyebrow: 'BYTHAWK // COMMERCE ENGINE',
    category: 'COMMERCE ENGINE',
    headline: 'Conversion-Optimized Commerce Platforms Built to Scale Globally',
    introduction:
      'We build high-yield commerce platforms and bespoke storefronts that turn browsing into transactions. Combining ultra-fast checkout flows, resilient inventory sync, and fluid multi-currency purchasing experiences.',
    accentColor: '#F59E0B',
    iconName: 'ShoppingBag',
    metaBadges: [
      { label: 'DELIVERY CADENCE', value: '6–16 Weeks' },
      { label: 'PLATFORMS', value: 'Shopify Plus / Headless / Custom' },
      { label: 'INTEGRATIONS', value: 'Stripe / Klarna / ERP / WMS' },
      { label: 'COMPLIANCE', value: 'PCI-DSS / Global VAT' },
    ],
    overview: {
      strategicHeadline: 'Engineering high-velocity commerce engines where every millisecond translates to revenue.',
      paragraphs: [
        'In digital commerce, sluggish load speeds, complicated multi-step checkouts, and poor mobile responsiveness directly bleed top-line revenue. Winning brands require commerce infrastructure that loads instantly, handles traffic flash sales without breaking, and converts visitors into loyal repeat customers.',
        'BYTHAWK engineers custom commerce solutions tailored to ambitious UK and international brands. Whether designing a bespoke headless storefront or extending Shopify Plus with custom private apps, we focus obsessively on speed, conversion architecture, and backend automation.',
      ],
      corePillars: [
        {
          title: 'Frictionless Checkout',
          description: 'Single-page checkouts, Apple Pay / Google Pay one-tap buying, and dynamic address autocomplete to slash cart abandonment.',
        },
        {
          title: 'Automated Operations',
          description: 'Seamless integration with your warehouse management (WMS), ERP, and accounting systems to eliminate manual sync errors.',
        },
        {
          title: 'Global Multi-Currency & VAT',
          description: 'Localized pricing, automated currency conversion, and dynamic tax calculation for seamless international expansion.',
        },
      ],
    },
    capabilities: [
      {
        id: 'cap-ecom-1',
        number: '01',
        title: 'Headless Commerce & Custom Storefronts',
        description: 'Decoupled storefronts engineered with React and modern APIs that deliver blistering page speeds and bespoke design freedom.',
        keyOutputs: ['Headless React Storefronts', 'Sub-Second Product Views', 'Algolia Search Integration', 'Personalized Merchandising'],
      },
      {
        id: 'cap-ecom-2',
        number: '02',
        title: 'Shopify Plus Custom Engineering',
        description: 'Bespoke Liquid theme development, custom Shopify Functions, and private app integrations engineered for high-volume merchants.',
        keyOutputs: ['Custom Liquid & Theme 2.0', 'Shopify Functions & Scripts', 'Custom App Development', 'B2B Wholesale Portals'],
      },
      {
        id: 'cap-ecom-3',
        number: '03',
        title: 'Payment Gateway & Checkout Optimization',
        description: 'Seamless integration of Stripe, Klarna, PayPal, and digital wallets with conversion-focused UX enhancements.',
        keyOutputs: ['One-Click Digital Wallets', 'Klarna / Clearpay BNPL', 'Localized Payment Methods', 'Custom Post-Purchase Upsells'],
      },
      {
        id: 'cap-ecom-4',
        number: '04',
        title: 'ERP, WMS & Inventory Synchronisation',
        description: 'Real-time multi-warehouse inventory tracking, order dispatch automation, and automated stock level alerts.',
        keyOutputs: ['Warehouse Management Sync', 'Real-Time Stock Webhooks', 'ERP Order Ingestion', 'Automated Returns Portals'],
      },
      {
        id: 'cap-ecom-5',
        number: '05',
        title: 'Conversion Rate Optimization (CRO) UX',
        description: 'Data-informed interface design optimized for maximum average order value (AOV) and minimal cart abandonment.',
        keyOutputs: ['Sticky Add-to-Cart Modules', 'Dynamic Product Bundling', 'High-Converting Cart Drawers', 'Exit-Intent Architecture'],
      },
      {
        id: 'cap-ecom-6',
        number: '06',
        title: 'Subscription & Membership Engines',
        description: 'Recurring revenue infrastructure with customer self-service portals, automated replenishment, and flexible billing logic.',
        keyOutputs: ['Recharge / Bold Integrations', 'Custom Subscriber Portals', 'Tiered VIP Pricing', 'Churn Prevention Workflows'],
      },
    ],
    deliverables: [
      {
        title: 'Complete Commerce Storefront',
        description: 'Production-ready, responsive digital storefront optimized for high conversion across mobile and desktop.',
        tag: 'STOREFRONT',
      },
      {
        title: 'Payment & Currency Architecture',
        description: 'Multi-currency checkout integration configured with localized payment methods and tax engines.',
        tag: 'PAYMENTS',
      },
      {
        title: 'Operations & ERP Connectors',
        description: 'Automated data pipelines syncing inventory, products, orders, and customer records with external platforms.',
        tag: 'INTEGRATION',
      },
      {
        title: 'Product Catalog & Migration Matrix',
        description: 'Seamless migration of legacy product, customer, and order history without losing data or SEO rankings.',
        tag: 'DATA MIGRATION',
      },
      {
        title: 'Analytics & E-Commerce Funnel Tracking',
        description: 'Comprehensive GA4 Enhanced Ecommerce, Meta Pixel, and server-side tracking setup.',
        tag: 'ANALYTICS',
      },
      {
        title: 'Admin Training & Operational Playbook',
        description: 'Step-by-step guides for product uploads, promotion scheduling, and order fulfillment workflows.',
        tag: 'DOCUMENTATION',
      },
    ],
    process: [
      {
        step: '01',
        name: 'Commerce Strategy & Technical Audit',
        summary: 'We analyze your product catalog, operational workflows, target geographies, and average order value drivers.',
        activities: ['Catalog hierarchy audit', 'Checkout funnel analysis', 'Platform selection evaluation', 'Integration mapping'],
        deliverable: 'Commerce Technical Specification',
      },
      {
        step: '02',
        name: 'Storefront UI/UX & Conversion Design',
        summary: 'Crafting responsive mobile-first wireframes and visual designs geared strictly toward high add-to-cart rates.',
        activities: ['Mobile product detail page UX', 'Cart drawer & mini-cart design', 'Checkout friction audit', 'Interactive prototyping'],
        deliverable: 'High-Fidelity Storefront Prototypes',
      },
      {
        step: '03',
        name: 'Storefront Engineering & Theme Build',
        summary: 'Building custom storefront templates, dynamic filters, fast cart states, and responsive styling tokens.',
        activities: ['Custom theme / headless development', 'Product filtering & search', 'Cart state management', 'Component testing'],
        deliverable: 'Private Staging Storefront Access',
      },
      {
        step: '04',
        name: 'Integrations & Checkout Hardening',
        summary: 'Configuring payment gateways, warehouse syncing, shipping rules, tax engines, and automated order webhooks.',
        activities: ['Payment gateway sandboxing', 'Shipping rate matrix testing', 'Tax automation setup', 'ERP sync validation'],
        deliverable: 'End-to-End Transactional Staging Verification',
      },
      {
        step: '05',
        name: 'Data Migration & Go-Live Cutover',
        summary: 'Migrating customer records, existing order histories, 301 URL redirects, and initiating smooth DNS switchover.',
        activities: ['Customer & order migration', 'SEO 301 redirect map execution', 'DNS cutover & SSL provisioning', 'Live test purchases'],
        deliverable: 'Successful Production Store Launch',
      },
      {
        step: '06',
        name: 'Conversion Tuning & Optimization',
        summary: 'Post-launch heatmapping, funnel telemetry, and continuous multivariate testing to push conversion rates higher.',
        activities: ['Checkout dropoff analysis', 'A/B testing execution', 'Speed monitoring', 'Seasonal campaign support'],
        deliverable: 'Monthly Growth & Conversion Optimization',
      },
    ],
    technologies: [
      {
        category: 'Storefront & Frontend',
        tools: [
          { name: 'Shopify Plus / Liquid', description: 'Enterprise commerce engine with custom Theme 2.0 architecture.' },
          { name: 'React / Next.js', description: 'Headless storefront architecture for sub-second page rendering.' },
          { name: 'Tailwind CSS', description: 'Design-token driven styling for rapid storefront adaptation.' },
        ],
      },
      {
        category: 'Payments & Checkout',
        tools: [
          { name: 'Stripe & Stripe Elements', description: 'Secure, PCI-compliant global payment processing.' },
          { name: 'Klarna & Clearpay', description: 'Buy Now, Pay Later integrations that elevate average order value.' },
          { name: 'Apple Pay & Google Pay', description: 'Native one-touch mobile checkout accelerators.' },
        ],
      },
      {
        category: 'Backend & Orchestration',
        tools: [
          { name: 'Shopify Storefront API', description: 'GraphQL API for headless product and checkout querying.' },
          { name: 'Node.js & Express Middleware', description: 'Custom integration middleware for ERP and inventory sync.' },
          { name: 'Algolia / Klevu', description: 'Instant, typo-tolerant search and intelligent merchandising.' },
        ],
      },
      {
        category: 'Analytics & Tracking',
        tools: [
          { name: 'GA4 Enhanced Ecommerce', description: 'Complete funnel step-by-step conversion tracking.' },
          { name: 'Server-Side GTM', description: 'First-party conversion tracking resilient against ad blockers.' },
          { name: 'Klaviyo', description: 'E-commerce email and SMS marketing automation.' },
        ],
      },
    ],
    benefits: [
      {
        title: 'Built to Convert',
        description: 'Every layout decision is engineered around friction reduction, trust signals, and rapid purchasing flows.',
      },
      {
        title: 'Flash-Sale Resilient',
        description: 'Scalable architecture that stays up and fast during heavy Black Friday spikes and marketing campaigns.',
      },
      {
        title: 'Automated Operations',
        description: 'Say goodbye to manual stock updates and spreadsheet syncs. Your systems talk to each other automatically.',
      },
      {
        title: 'International Ready',
        description: 'Effortlessly serve customers across the UK, Europe, and the world with local currencies and tax calculations.',
      },
    ],
    faqs: [
      {
        question: 'Should we build on Shopify Plus or go with a Headless commerce build?',
        answer:
          'It depends on your scale and unique operational requirements. For 90% of brands, a customized Shopify Plus setup offers the fastest time-to-market and lowest total cost of ownership. For brands requiring ultra-bespoke 3D configurators or sub-second international multi-market loads, a headless React storefront provides unparalleled control.',
      },
      {
        question: 'How do you safeguard existing SEO rankings during a store migration?',
        answer:
          'We generate an exhaustive 1:1 redirect map covering every legacy product, collection, blog post, and CMS page. We preserve structured schema markup, metadata, and canonical tags so your organic search equity transfers seamlessly.',
      },
      {
        question: 'Can you integrate custom ERP and warehouse management systems?',
        answer:
          'Yes. We build custom middleware with Node.js that listens to webhooks and synchronizes product quantities, order fulfillment events, and customer data in real time between your store and your internal systems.',
      },
      {
        question: 'How do you optimize mobile conversion rates?',
        answer:
          'Over 70% of e-commerce traffic is mobile. We design mobile-first: persistent bottom-sheet add-to-cart buttons, one-tap digital wallets (Apple Pay/Google Pay), compressed image formats (AVIF/WebP), and simplified input fields to eliminate thumb friction.',
      },
      {
        question: 'Do you assist with subscription and recurring billing setups?',
        answer:
          'Yes. We integrate industry-standard recurring engines like Recharge or build bespoke recurring subscription workflows directly into your checkout flow, complete with customer portals for easy management.',
      },
    ],
    relatedServices: [
      {
        slug: 'web-development',
        title: 'Web Development',
        category: 'CORE ENGINEERING',
        description: 'High-performance websites engineered around your brand, customers and business goals.',
        route: '/services/web-development',
      },
      {
        slug: 'ui-ux-design',
        title: 'UI/UX Design',
        category: 'EXPERIENCE CRAFT',
        description: 'Clear, intuitive digital experiences that turn complex products into simple interactions.',
        route: '/services/ui-ux-design',
      },
      {
        slug: 'digital-marketing',
        title: 'Digital Marketing',
        category: 'GROWTH ENGINE',
        description: 'Data-driven campaigns that connect your business with the people who matter.',
        route: '/services/digital-marketing',
      },
    ],
    seoTitle: 'E-commerce Website Development UK | Shopify Plus & Headless Commerce | BYTHAWK',
    seoDescription:
      'BYTHAWK designs and engineers high-conversion e-commerce stores, Shopify Plus platforms, and headless commerce solutions for ambitious UK and global brands.',
  },

  'mobile-app-development': {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    shortName: 'Mobile Apps',
    eyebrow: 'BYTHAWK // MOBILE PLATFORMS',
    category: 'MOBILE PLATFORMS',
    headline: 'Native & Cross-Platform Mobile Apps Engineered for Performance',
    introduction:
      'We engineer fluid, intuitive iOS and Android applications that deliver native speed, haptic polish, and reliable offline capabilities, keeping your users connected wherever they are.',
    accentColor: '#FBBF24',
    iconName: 'Smartphone',
    metaBadges: [
      { label: 'DELIVERY CADENCE', value: '8–18 Weeks' },
      { label: 'PLATFORMS', value: 'iOS & Android' },
      { label: 'CORE TECH', value: 'React Native / TypeScript' },
      { label: 'DISTRIBUTION', value: 'App Store & Google Play' },
    ],
    overview: {
      strategicHeadline: 'Pocket-sized software that feels fluid, native, and indispensable.',
      paragraphs: [
        'A successful mobile application must do far more than replicate a responsive website in a webview. Users expect instant 60fps animations, haptic touch feedback, flawless offline data persistence, and native operating system integration.',
        'At BYTHAWK, we engineer production-grade mobile applications using React Native and TypeScript, backed by native Swift and Kotlin modules where performance demands it. We manage the entire lifecycle from early wireframing through to App Store and Google Play approval.',
      ],
      corePillars: [
        {
          title: 'Native-Grade Performance',
          description: 'Smooth 60/120fps gesture animations, hardware acceleration, and optimized bundle sizes that launch instantly.',
        },
        {
          title: 'Offline-First Resilience',
          description: 'Local caching and background synchronisation that allow users to work uninterrupted in low-connectivity environments.',
        },
        {
          title: 'Frictionless Store Approval',
          description: 'Strict adherence to Apple App Store and Google Play guidelines, guaranteeing smooth submission and compliance.',
        },
      ],
    },
    capabilities: [
      {
        id: 'cap-mob-1',
        number: '01',
        title: 'Cross-Platform React Native Engineering',
        description: 'Single type-safe TypeScript codebase delivering genuine native UI components across both Apple iOS and Google Android.',
        keyOutputs: ['React Native / Expo', 'Cross-Platform Parity', 'TypeScript Architecture', 'Rapid Feature Release Cycles'],
      },
      {
        id: 'cap-mob-2',
        number: '02',
        title: 'Native iOS & Android Modules',
        description: 'Custom bridge code written in Swift and Kotlin for device hardware acceleration, Bluetooth, and biometric sensors.',
        keyOutputs: ['Native Swift & Kotlin Modules', 'Biometric Authentication (FaceID)', 'Camera & Bluetooth APIs', 'Background Location Telemetry'],
      },
      {
        id: 'cap-mob-3',
        number: '03',
        title: 'Offline Data Synchronization',
        description: 'Local SQLite and WatermelonDB storage with robust conflict resolution algorithms when reconnecting to cloud servers.',
        keyOutputs: ['Offline-First Storage', 'Conflict Resolution Engines', 'Background Sync Workers', 'Optimistic UI Updates'],
      },
      {
        id: 'cap-mob-4',
        number: '04',
        title: 'Push Notifications & Deep Linking',
        description: 'Intelligent user re-engagement infrastructure powered by APNs, FCM, and universal deep linking architecture.',
        keyOutputs: ['OneSignal / Firebase FCM', 'Segmented Push Campaigns', 'Universal & App Links', 'In-App Message Banners'],
      },
      {
        id: 'cap-mob-5',
        number: '05',
        title: 'In-App Purchases & Subscriptions',
        description: 'Compliant digital subscriptions and in-app purchase integration utilizing StoreKit 2 and Google Play Billing.',
        keyOutputs: ['RevenueCat Integration', 'Subscription Paywalls', 'Receipt Validation', 'Automated Renewal Handling'],
      },
      {
        id: 'cap-mob-6',
        number: '06',
        title: 'App Store Submission & Fastlane CI/CD',
        description: 'Automated test flight distribution, screenshot generation, compliance auditing, and production app store submissions.',
        keyOutputs: ['Fastlane Build Automation', 'TestFlight Beta Tracks', 'Store Listing Copy & Imagery', 'App Review Approvals'],
      },
    ],
    deliverables: [
      {
        title: 'Cross-Platform Mobile Codebase',
        description: 'Production-ready React Native repository configured with strict typing, linting, and unit test suites.',
        tag: 'MOBILE CODE',
      },
      {
        title: 'TestFlight & Google Play Beta Builds',
        description: 'Internal and external testing builds distributed to your team for real-device evaluation.',
        tag: 'BETA BUILDS',
      },
      {
        title: 'App Store Submission Management',
        description: 'Full handling of App Store Connect and Google Play Console review processes through to live approval.',
        tag: 'STORE APPROVAL',
      },
      {
        title: 'Push Notification Infrastructure',
        description: 'Configured APNs and FCM credentials with deep link routing logic for targeted notifications.',
        tag: 'PUSH ENGINE',
      },
      {
        title: 'Offline Storage & Sync Engine',
        description: 'Embedded client database with automated background sync and state reconciliation.',
        tag: 'DATA ENGINE',
      },
      {
        title: 'Mobile Analytics & Crash Telemetry',
        description: 'Integrated Sentry and Firebase crash reporting for real-time mobile stability monitoring.',
        tag: 'TELEMETRY',
      },
    ],
    process: [
      {
        step: '01',
        name: 'Mobile Strategy & Feature Scoping',
        summary: 'We determine key mobile workflows, user permissions, offline requirements, and monetization mechanics.',
        activities: ['Feature prioritization matrix', 'Platform guideline review', 'Architecture design', 'API endpoint readiness'],
        deliverable: 'Mobile Technical Roadmap',
      },
      {
        step: '02',
        name: 'Mobile UX & Interactive Prototyping',
        summary: 'Designing touch-first interfaces with intuitive thumb zones, natural gestures, and platform-specific navigation patterns.',
        activities: ['Gesture & transition mapping', 'iOS / Android design adaptations', 'Interactive Figma prototype', 'User testing'],
        deliverable: 'Validated Mobile UI/UX Design',
      },
      {
        step: '03',
        name: 'Agile Mobile Engineering Sprints',
        summary: 'Iterative two-week development sprints delivering TestFlight and APK builds for your team to test on physical devices.',
        activities: ['Core navigation setup', 'API consumption & state', 'Native device module hooks', 'Weekly beta distribution'],
        deliverable: 'Weekly TestFlight & Internal Testing Builds',
      },
      {
        step: '04',
        name: 'Hardware Testing & Offline Validation',
        summary: 'Testing across a matrix of real iOS and Android devices, testing edge cases like airplane mode and low battery states.',
        activities: ['Real-device test matrix', 'Offline sync conflict testing', 'Memory leak profiling', 'Battery consumption audit'],
        deliverable: 'Device QA & Performance Audit',
      },
      {
        step: '05',
        name: 'App Store Submission & Live Launch',
        summary: 'Packaging release binaries, preparing compliant store listings, and navigating the review process through to approval.',
        activities: ['Fastlane release packaging', 'Store compliance verification', 'Review response handling', 'Global rollout orchestration'],
        deliverable: 'Live Apps on App Store & Google Play',
      },
      {
        step: '06',
        name: 'Post-Launch Telemetry & OS Updates',
        summary: 'Continuous monitoring of crash rates, user feedback, and adapting to annual Apple iOS and Google Android OS upgrades.',
        activities: ['Crashlytics monitoring', 'OS version compatibility patches', 'Store rating optimization', 'New feature sprints'],
        deliverable: 'Ongoing Mobile Retainer & Support',
      },
    ],
    technologies: [
      {
        category: 'Mobile Frameworks',
        tools: [
          { name: 'React Native', description: 'Declarative cross-platform mobile framework powered by native components.' },
          { name: 'Expo', description: 'Modern tooling ecosystem for rapid native build orchestration.' },
          { name: 'TypeScript', description: 'Static typing guaranteeing predictable mobile state and data contracts.' },
        ],
      },
      {
        category: 'Native Layers',
        tools: [
          { name: 'Swift (iOS)', description: 'Native Apple code for performance-critical tasks and hardware APIs.' },
          { name: 'Kotlin (Android)', description: 'Modern native Android code for background workers and system hooks.' },
          { name: 'StoreKit 2', description: 'Apple native framework for seamless in-app subscriptions and transactions.' },
        ],
      },
      {
        category: 'State & Persistence',
        tools: [
          { name: 'TanStack Query', description: 'Smart client-side caching and background synchronization.' },
          { name: 'WatermelonDB / SQLite', description: 'High-performance local database for offline-first architecture.' },
          { name: 'Zustand', description: 'Minimalist global UI state management for mobile.' },
        ],
      },
      {
        category: 'DevOps & Distribution',
        tools: [
          { name: 'Fastlane', description: 'Automated screenshot generation and release pipeline management.' },
          { name: 'TestFlight', description: 'Apple beta testing distribution platform.' },
          { name: 'Firebase Crashlytics', description: 'Real-time crash reporting and application diagnostics.' },
        ],
      },
    ],
    benefits: [
      {
        title: 'Single Codebase Velocity',
        description: 'Deploy to both iOS and Android simultaneously without doubling your budget or engineering overhead.',
      },
      {
        title: 'Genuine Native Performance',
        description: 'Smooth 60fps animations, haptic feedback, and hardware access that feel completely authentic to each platform.',
      },
      {
        title: 'Guaranteed Store Approval',
        description: 'We navigate Apple and Google guidelines with surgical precision, resolving compliance concerns before submission.',
      },
      {
        title: 'Offline Dependability',
        description: 'Your users can continue creating and viewing data whether they are on a London Underground tube or in remote areas.',
      },
    ],
    faqs: [
      {
        question: 'Should we build separate native apps (Swift/Kotlin) or use React Native?',
        answer:
          'For 95% of consumer and business applications, React Native provides near-identical native performance, native UI rendering, and halves both initial development cost and ongoing maintenance overhead. We only recommend pure Swift/Kotlin if building custom AR engines or low-level audio DSP software.',
      },
      {
        question: 'How long does the App Store review process usually take?',
        answer:
          'Apple typically reviews submissions within 24 to 48 hours, while Google Play generally approves updates within 2 to 4 days. Because we strictly adhere to Human Interface Guidelines and privacy requirements, first-pass approvals are standard.',
      },
      {
        question: 'How do you test on multiple screen sizes and devices?',
        answer:
          'We test on an extensive physical lab of iOS and Android devices—ranging from small-screen iPhone SEs to flagship iPhone Pro Max and varied Android handsets (Samsung, Pixel) with differing screen aspect ratios and notches.',
      },
      {
        question: 'How are push notifications managed?',
        answer:
          'We configure Apple Push Notification service (APNs) and Firebase Cloud Messaging (FCM), integrated with services like OneSignal or custom backend dispatchers. This allows you to broadcast messages or send automated transactional alerts.',
      },
      {
        question: 'What happens when Apple or Google release new major OS versions each autumn?',
        answer:
          'We maintain ongoing compatibility through our support retainers. When annual iOS and Android developer betas are released, we test your application against upcoming APIs and deploy updates before the public OS release.',
      },
    ],
    relatedServices: [
      {
        slug: 'web-applications',
        title: 'Web Applications',
        category: 'CLOUD SYSTEMS',
        description: 'Scalable web platforms, dashboards and business systems built for complex workflows.',
        route: '/services/web-applications',
      },
      {
        slug: 'ui-ux-design',
        title: 'UI/UX Design',
        category: 'EXPERIENCE CRAFT',
        description: 'Clear, intuitive digital experiences that turn complex products into simple interactions.',
        route: '/services/ui-ux-design',
      },
      {
        slug: 'web-development',
        title: 'Web Development',
        category: 'CORE ENGINEERING',
        description: 'High-performance websites engineered around your brand, customers and business goals.',
        route: '/services/web-development',
      },
    ],
    seoTitle: 'Mobile App Development UK | React Native iOS & Android Apps | BYTHAWK',
    seoDescription:
      'BYTHAWK engineers high-performance cross-platform iOS and Android mobile apps for UK enterprises. React Native, TypeScript, and offline-first architecture.',
  },

  'digital-marketing': {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    shortName: 'Marketing',
    eyebrow: 'BYTHAWK // GROWTH ENGINE',
    category: 'GROWTH ENGINE',
    headline: 'Precision Multi-Channel Growth Campaigns Grounded in Data',
    introduction:
      'We deploy data-driven acquisition, retention, and conversion strategies that accelerate qualified revenue. No vanity metrics—just measurable customer acquisition cost (CAC) reduction and customer lifetime value (LTV) growth.',
    accentColor: '#f59e0b',
    iconName: 'TrendingUp',
    metaBadges: [
      { label: 'ENGAGEMENT', value: 'Quarterly Growth Sprints' },
      { label: 'CHANNELS', value: 'Paid Search / Paid Social / Email' },
      { label: 'ATTRIBUTION', value: 'Server-Side GA4 / First-Party' },
      { label: 'TARGET', value: 'Measurable ROI & Lower CAC' },
    ],
    overview: {
      strategicHeadline: 'Eliminating guesswork with mathematically disciplined customer acquisition.',
      paragraphs: [
        'Marketing budgets are frequently squandered on vanity impressions, clickbait traffic, and inaccurate attribution dashboards. In modern digital markets, winning companies treat marketing as an engineering discipline: systematically testing hypotheses, optimizing conversion funnels, and allocating spend where incremental returns are mathematically proven.',
        'BYTHAWK unites technical analytics with creative advertising. We develop full-funnel acquisition engines across Google Ads, Meta, LinkedIn, and lifecycle email automation, ensuring every marketing pound invested maps directly to verified business revenue.',
      ],
      corePillars: [
        {
          title: 'Attribution Integrity',
          description: 'Server-side tracking and first-party event pipelines that bypass browser privacy blockers and provide true conversion data.',
        },
        {
          title: 'High-Intent Targeting',
          description: 'Focusing spend on high-intent search queries and precision account-based audiences rather than broad spray-and-pray campaigns.',
        },
        {
          title: 'Rapid Creative Experimentation',
          description: 'Systematic A/B testing of messaging, visual angles, and landing page variants to steadily depress acquisition costs.',
        },
      ],
    },
    capabilities: [
      {
        id: 'cap-mkt-1',
        number: '01',
        title: 'Paid Search (Google & Bing Ads)',
        description: 'Laser-focused commercial intent search campaigns engineered with granular keyword grouping, negative keyword sculpting, and smart bidding.',
        keyOutputs: ['Commercial Intent Search Campaigns', 'Performance Max Optimization', 'Negative Keyword Sculpting', 'Ad Copy Multivariate Testing'],
      },
      {
        id: 'cap-mkt-2',
        number: '02',
        title: 'Paid Social (Meta, LinkedIn & TikTok)',
        description: 'Dynamic visual advertising targeting custom lookalikes, retargeting sequences, and B2B firmographic accounts.',
        keyOutputs: ['Meta Ads (Instagram & Facebook)', 'LinkedIn B2B Lead Gen', 'Creative Angle Testing', 'Dynamic Retargeting Funnels'],
      },
      {
        id: 'cap-mkt-3',
        number: '03',
        title: 'Server-Side Analytics & Attribution',
        description: 'First-party conversion tracking implementation via Google Tag Manager Server-Side and Meta Conversions API (CAPI).',
        keyOutputs: ['Server-Side GTM Setup', 'Meta Conversions API (CAPI)', 'GA4 Custom Event Modeling', 'Multi-Touch Attribution Reports'],
      },
      {
        id: 'cap-mkt-4',
        number: '04',
        title: 'Conversion Rate Optimization (CRO)',
        description: 'Empirical split testing of landing page copy, visual hierarchy, form length, and call-to-actions to maximize visitor-to-lead rates.',
        keyOutputs: ['Landing Page Split Testing', 'Heatmap & Scrollmap Audits', 'Form Friction Reduction', 'Statistical Significance Reports'],
      },
      {
        id: 'cap-mkt-5',
        number: '05',
        title: 'Lifecycle Email & Retention Automation',
        description: 'Automated email flows that nurture inbound leads, recover abandoned carts, and maximize customer lifetime value (LTV).',
        keyOutputs: ['Welcome & Nurture Sequences', 'Abandoned Cart Automation', 'Customer Win-Back Flows', 'Deliverability & Domain Warmup'],
      },
      {
        id: 'cap-mkt-6',
        number: '06',
        title: 'Content Syndication & Account-Based Marketing',
        description: 'B2B demand generation campaigns engaging high-value target accounts with gated research and thought-leadership assets.',
        keyOutputs: ['ABM Account Lists', 'Gated Whitepaper Campaigns', 'Lead Scoring Logic', 'CRM Pipeline Sync'],
      },
    ],
    deliverables: [
      {
        title: 'Full-Funnel Growth Strategy',
        description: 'Documented acquisition roadmap detailing audience segments, budget distribution, channel strategy, and CPA targets.',
        tag: 'STRATEGY',
      },
      {
        title: 'Ad Creative & Copy Assets',
        description: 'High-converting ad copy, visual creative formats, and motion graphics produced for all active channels.',
        tag: 'CREATIVE ASSETS',
      },
      {
        title: 'Server-Side Tracking Architecture',
        description: 'Privacy-compliant tracking setup capturing verified purchase and lead events without data loss.',
        tag: 'TRACKING & DATA',
      },
      {
        title: 'High-Converting Landing Pages',
        description: 'Custom, fast-loading landing pages built and hosted specifically for paid campaign conversion.',
        tag: 'LANDING PAGES',
      },
      {
        title: 'Executive Real-Time Dashboard',
        description: 'Consolidated Looker Studio dashboard tracking spend, revenue, ROAS, and CAC in real time.',
        tag: 'BI DASHBOARD',
      },
      {
        title: 'Bi-Weekly Experimentation Log',
        description: 'Transparent reporting of all active split tests, statistical outcomes, and next iterative hypotheses.',
        tag: 'REPORTING',
      },
    ],
    process: [
      {
        step: '01',
        name: 'Growth Audit & Unit Economics Analysis',
        summary: 'We unpack your historical acquisition data, unit economics, conversion benchmarks, and customer lifetime value.',
        activities: ['Historical ad account auditing', 'CAC / LTV ratio modeling', 'Competitor ad intelligence', 'Conversion tracking verification'],
        deliverable: 'Growth Diagnostic & Opportunity Roadmap',
      },
      {
        step: '02',
        name: 'Tracking & Infrastructure Hardening',
        summary: 'Setting up first-party server-side tracking, verified pixel integrations, and automated conversion pipelines.',
        activities: ['Server-Side GTM deployment', 'CAPI connection setup', 'GA4 conversion event mapping', 'Attribution model baseline'],
        deliverable: 'Verified First-Party Analytics Setup',
      },
      {
        step: '03',
        name: 'Campaign Architecture & Creative Production',
        summary: 'Structuring campaign hierarchies, writing targeted copy angles, and producing tailored visual assets for each channel.',
        activities: ['Campaign taxonomy structuring', 'Audience segmentation', 'Creative asset design', 'Dedicated landing page launch'],
        deliverable: 'Active Multi-Channel Campaigns',
      },
      {
        step: '04',
        name: 'Algorithmic Bidding & Channel Optimization',
        summary: 'Guiding smart bidding algorithms with verified first-party conversion data to depress cost-per-acquisition.',
        activities: ['Search query mining & negative keywords', 'Bid strategy calibration', 'Audience pruning', 'Creative rotation'],
        deliverable: 'Weekly Performance Tuning Reports',
      },
      {
        step: '05',
        name: 'Conversion Rate Optimization Sprints',
        summary: 'Systematically testing landing page elements to improve click-to-lead and click-to-sale ratios.',
        activities: ['Landing page headline testing', 'Form field reduction', 'Social proof repositioning', 'Exit-intent captures'],
        deliverable: 'A/B Testing Outcome Log',
      },
      {
        step: '06',
        name: 'Budget Scaling & Incremental Expansion',
        summary: 'Ramping budgets into profitable campaign clusters while exploring secondary acquisition channels.',
        activities: ['Vertical budget scaling', 'Lookalike audience expansion', 'New channel exploration', 'Quarterly strategy reviews'],
        deliverable: 'Quarterly Executive Growth Review',
      },
    ],
    technologies: [
      {
        category: 'Ad Platforms',
        tools: [
          { name: 'Google Ads & Performance Max', description: 'Intent-driven search, shopping, and display network campaigns.' },
          { name: 'Meta Ads Manager', description: 'Visual storytelling and retargeting across Instagram and Facebook.' },
          { name: 'LinkedIn Campaign Manager', description: 'High-precision B2B firmographic and job-title targeting.' },
        ],
      },
      {
        category: 'Data & Tracking',
        tools: [
          { name: 'Google Tag Manager Server-Side', description: 'First-party tracking server resilient against browser cookie blocks.' },
          { name: 'Google Analytics 4', description: 'Event-driven cross-device web and application telemetry.' },
          { name: 'Meta Conversions API (CAPI)', description: 'Direct server-to-server conversion dispatch.' },
        ],
      },
      {
        category: 'Lifecycle & CRM',
        tools: [
          { name: 'Klaviyo', description: 'Advanced behavioral segmentation and e-commerce email flows.' },
          { name: 'HubSpot Marketing Hub', description: 'B2B inbound lead scoring and automated email workflows.' },
        ],
      },
      {
        category: 'Reporting & Optimization',
        tools: [
          { name: 'Looker Studio', description: 'Real-time client dashboards pulling cross-channel API data.' },
          { name: 'Hotjar / Microsoft Clarity', description: 'Session recordings, heatmaps, and rage-click diagnostics.' },
        ],
      },
    ],
    benefits: [
      {
        title: 'Zero Vanity Metrics',
        description: 'We do not report on "impressions" or "engagement" alone. Our north star is profitable pipeline and verified revenue.',
      },
      {
        title: 'Bulletproof Attribution',
        description: 'Server-side tracking ensures you actually know which campaigns generate revenue and which waste spend.',
      },
      {
        title: 'Transparent Collaboration',
        description: 'You maintain direct ownership of your ad accounts. Complete visibility into spend, bids, and assets at all times.',
      },
      {
        title: 'Integrated with Engineering',
        description: 'Our marketing team works hand-in-hand with our developers to build blazing fast landing pages that convert.',
      },
    ],
    faqs: [
      {
        question: 'What monthly ad budget do we need to start seeing meaningful results?',
        answer:
          'For commercial viability, we generally recommend a minimum monthly media spend of £2,500 to £5,000 across primary channels. This ensures sufficient conversion data volume for machine-learning bidding algorithms to optimize effectively.',
      },
      {
        question: 'Who owns the advertising accounts and creative assets?',
        answer:
          'You retain 100% ownership of all Google Ads, Meta, and LinkedIn accounts. All campaigns, audience configurations, and creative assets produced belong to your business indefinitely.',
      },
      {
        question: 'How do you combat signal loss from iOS 14+ and cookie restrictions?',
        answer:
          'We implement server-side tracking using Google Tag Manager Server-Side and direct Conversions APIs (such as Meta CAPI). This routes conversion data through your own custom domain, bypassing client-side ad blockers and cookie degradation.',
      },
      {
        question: 'How quickly can we expect to see profitable returns?',
        answer:
          'Paid search typically reveals commercial signals within the first 2 to 4 weeks. Full algorithmic bid optimization and creative tuning usually hit peak efficiency within 60 to 90 days as statistically significant data accumulates.',
      },
      {
        question: 'Do you tie paid marketing in with our SEO and organic content?',
        answer:
          'Yes. Paid search keyword performance directly informs organic SEO content targeting, and high-performing organic content provides proven copy hooks for paid social ad creatives.',
      },
    ],
    relatedServices: [
      {
        slug: 'seo',
        title: 'SEO & Search Architecture',
        category: 'DISCOVERY',
        description: 'Technical and strategic search optimisation designed to build sustainable visibility.',
        route: '/services/seo',
      },
      {
        slug: 'ecommerce',
        title: 'E-commerce Development',
        category: 'COMMERCE ENGINE',
        description: 'Conversion-focused commerce experiences designed to sell, scale and evolve.',
        route: '/services/ecommerce',
      },
      {
        slug: 'ui-ux-design',
        title: 'UI/UX Design',
        category: 'EXPERIENCE CRAFT',
        description: 'Clear, intuitive digital experiences that turn complex products into simple interactions.',
        route: '/services/ui-ux-design',
      },
    ],
    seoTitle: 'Digital Marketing Agency UK | Paid Ads, PPC & Growth Strategy | BYTHAWK',
    seoDescription:
      'BYTHAWK delivers data-driven digital marketing, Google Ads management, paid social campaigns, and server-side attribution for growth-focused UK businesses.',
  },

  'seo': {
    slug: 'seo',
    title: 'SEO & Search Architecture',
    shortName: 'SEO',
    eyebrow: 'BYTHAWK // DISCOVERY SYSTEMS',
    category: 'DISCOVERY',
    headline: 'Technical Search Engine Optimization for Sustainable Market Dominance',
    introduction:
      'We build sustainable organic search authority through deep technical audit remediation, semantic content architecture, schema markup, and authoritative digital presence that search engines reward.',
    accentColor: '#10b981',
    iconName: 'Search',
    metaBadges: [
      { label: 'FOCUS', value: 'Technical SEO & Core Web Vitals' },
      { label: 'REMIT', value: 'UK National & International' },
      { label: 'TOOLING', value: 'Ahrefs / Screaming Frog / Semrush' },
      { label: 'STANDARDS', value: 'Schema.org JSON-LD / Core Web Vitals' },
    ],
    overview: {
      strategicHeadline: 'Engineering search visibility from the server to the search result snippet.',
      paragraphs: [
        'Search Engine Optimization is no longer about stuffing arbitrary keywords into thin blog posts. Modern search algorithms evaluate rendering efficiency, mobile page performance, structured entity relationships, and authoritativeness across the entire domain.',
        'At BYTHAWK, we treat SEO as a multidisciplinary engineering and content architecture service. We eliminate crawl bloat, fix indexation leaks, deploy rich semantic Schema.org structured data, and build programmatic content hubs that capture high-intent commercial search traffic.',
      ],
      corePillars: [
        {
          title: 'Code-Level Technical Rigor',
          description: 'Fixing rendering hurdles, canonical conflicts, JavaScript hydration bottlenecks, and server response times.',
        },
        {
          title: 'Semantic Entity Architecture',
          description: 'Implementing interconnected JSON-LD schema that establishes your company as a verified entity in Google Knowledge Graph.',
        },
        {
          title: 'Commercial Intent Focus',
          description: 'Prioritizing search terms that demonstrate high purchasing or engagement intent rather than inflated informational volume.',
        },
      ],
    },
    capabilities: [
      {
        id: 'cap-seo-1',
        number: '01',
        title: 'Technical Crawlability & Indexation Auditing',
        description: 'Exhaustive code-level inspection diagnosing crawl errors, redirect loops, orphan pages, canonical conflicts, and sitemap issues.',
        keyOutputs: ['Screaming Frog Crawl Audit', 'Log File Analysis', 'Crawl Budget Optimization', 'Robots.txt & XML Sitemaps'],
      },
      {
        id: 'cap-seo-2',
        number: '02',
        title: 'Structured Data & Schema.org Engineering',
        description: 'Custom JSON-LD schema markup for organizations, products, services, FAQs, reviews, and breadcrumbs to unlock rich snippets.',
        keyOutputs: ['Organization & Brand Schema', 'Product & Offer Structured Data', 'FAQ & How-To Rich Snippets', 'BreadcrumbList JSON-LD'],
      },
      {
        id: 'cap-seo-3',
        number: '03',
        title: 'Core Web Vitals & Rendering Remediation',
        description: 'Resolving Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), and Interaction to Next Paint (INP) to satisfy Google page experience criteria.',
        keyOutputs: ['Core Web Vitals Pass Verification', 'Hydration Optimization', 'Font Loading Strategy', 'Critical CSS Inlining'],
      },
      {
        id: 'cap-seo-4',
        number: '04',
        title: 'Programmatic SEO & Content Hub Architecture',
        description: 'Designing scalable URL taxonomies and programmatic templates that capture thousands of long-tail commercial search queries.',
        keyOutputs: ['Taxonomy & Hierarchy Planning', 'Dynamic Page Templates', 'Internal Linking Graph Optimization', 'Cannibalization Remediation'],
      },
      {
        id: 'cap-seo-5',
        number: '05',
        title: 'International SEO & Multi-Region Hreflang',
        description: 'Configuring precise hreflang tags, multi-currency routing, and geotargeting for UK, European, and global audiences.',
        keyOutputs: ['Hreflang XML Sitemaps', 'Multi-Regional Canonical Routing', 'Geo-Targeting Verification', 'Currency Signaling'],
      },
      {
        id: 'cap-seo-6',
        number: '06',
        title: 'Competitive Gap & High-Intent Keyword Intelligence',
        description: 'Uncovering the exact search queries driving revenue to your top competitors and building authoritative content assets to capture share.',
        keyOutputs: ['Competitor Gap Analysis', 'Search Intent Classification', 'Keyword Priority Matrix', 'Content Brief Generation'],
      },
    ],
    deliverables: [
      {
        title: 'Technical SEO Audit & Pull Requests',
        description: 'Comprehensive technical audit accompanied by direct code-level fixes ready for developer merging.',
        tag: 'TECHNICAL AUDIT',
      },
      {
        title: 'Semantic Schema.org JSON-LD Suite',
        description: 'Turnkey structured data scripts tailored to your company entities, services, and commercial offerings.',
        tag: 'STRUCTURED DATA',
      },
      {
        title: 'Target Keyword & Intent Matrix',
        description: 'Prioritized spreadsheet of target commercial keywords mapped directly to specific page URLs.',
        tag: 'KEYWORD ROADMAP',
      },
      {
        title: 'Internal Linking Architecture Blueprint',
        description: 'Strategic link routing model distributing domain equity efficiently into priority commercial pages.',
        tag: 'LINK ARCHITECTURE',
      },
      {
        title: 'Google Search Console Verification',
        description: 'Configured Search Console profiles with indexation monitoring, sitemaps, and Core Web Vitals tracking.',
        tag: 'SEARCH CONSOLE',
      },
      {
        title: 'Monthly Organic Growth & Ranking Reports',
        description: 'Clear reporting detailing organic impressions, ranking shifts, organic conversions, and technical health scores.',
        tag: 'MONTHLY REPORT',
      },
    ],
    process: [
      {
        step: '01',
        name: 'Exhaustive Technical Crawl Audit',
        summary: 'We execute an enterprise crawl of every URL on your domain to uncover indexing friction, broken links, and metadata gaps.',
        activities: ['Deep crawl with Screaming Frog', 'Server response profiling', 'Indexation status review in Search Console', 'Duplicate content analysis'],
        deliverable: 'Technical SEO Audit & Prioritized Action Matrix',
      },
      {
        step: '02',
        name: 'Code-Level Remediation Sprints',
        summary: 'Directly resolving technical blockers: correcting canonical tags, cleaning up redirects, and optimizing Core Web Vitals.',
        activities: ['Robots.txt & XML sitemap rebuild', 'Canonical tag remediation', 'Core Web Vitals code fixes', 'Pagination & facet handling'],
        deliverable: 'Technical Remediation Deployment Verification',
      },
      {
        step: '03',
        name: 'Schema.org & Semantic Architecture',
        summary: 'Deploying structured JSON-LD entity data to communicate clearly with search engine knowledge graphs.',
        activities: ['Organization & entity modeling', 'Service & product schema coding', 'Rich snippet validation in Rich Results Test', 'Live deployment'],
        deliverable: 'Validated Schema.org Markup Deployment',
      },
      {
        step: '04',
        name: 'Commercial Keyword Mapping & Content Gaps',
        summary: 'Mapping high-converting search intent directly to primary service pages and architecting supporting content hubs.',
        activities: ['Search volume & intent clustering', 'Competitor keyword theft analysis', 'On-page title / H1 / metadata optimization', 'Content hub structuring'],
        deliverable: 'Commercial Keyword & On-Page Roadmap',
      },
      {
        step: '05',
        name: 'Internal Linking & Authority Sculpting',
        summary: 'Optimizing internal link flows to channel page authority into high-value commercial and service landing pages.',
        activities: ['Internal anchor text optimization', 'Orphan page elimination', 'Footer & mega menu link structuring', 'Contextual breadcrumb links'],
        deliverable: 'Optimized Internal Link Architecture',
      },
      {
        step: '06',
        name: 'Rank Tracking & Algorithmic Monitoring',
        summary: 'Weekly ranking telemetry, algorithm update resilience monitoring, and continuous technical maintenance.',
        activities: ['Daily rank tracking across target keywords', 'Search Console query volume monitoring', 'Algorithm fluctuation defense', 'Quarterly re-crawling'],
        deliverable: 'Monthly Organic Performance & ROI Review',
      },
    ],
    technologies: [
      {
        category: 'Crawling & Diagnostics',
        tools: [
          { name: 'Screaming Frog SEO Spider', description: 'Enterprise desktop crawler for comprehensive technical indexation audits.' },
          { name: 'Google Search Console', description: 'Official search engine indexing, crawl rate, and query telemetry.' },
          { name: 'Sitebulb', description: 'Automated data visualization and architectural issue prioritization.' },
        ],
      },
      {
        category: 'Market Intelligence',
        tools: [
          { name: 'Ahrefs', description: 'Backlink intelligence, keyword difficulty, and competitor organic traffic estimates.' },
          { name: 'Semrush', description: 'Competitive keyword gap analysis and search intent clustering.' },
        ],
      },
      {
        category: 'Structured Data & Code',
        tools: [
          { name: 'Schema.org & JSON-LD', description: 'Machine-readable structured semantic data for Google Knowledge Graph.' },
          { name: 'Lighthouse & PageSpeed Insights', description: 'Core Web Vitals measurement across mobile and desktop.' },
        ],
      },
      {
        category: 'Analytics & Reporting',
        tools: [
          { name: 'Looker Studio', description: 'Consolidated executive dashboards highlighting organic clicks and revenue.' },
          { name: 'Google Analytics 4', description: 'Organic traffic conversion paths and engagement modeling.' },
        ],
      },
    ],
    benefits: [
      {
        title: 'Long-Term Compounding Traffic',
        description: 'Unlike paid ads that stop the moment budget is paused, high organic rankings deliver qualified commercial leads continuously.',
      },
      {
        title: 'Engineers, Not Keyword Stuffers',
        description: 'We address the underlying code, rendering, and schema architecture that technical search engines actually evaluate.',
      },
      {
        title: 'Zero Black-Hat Risk',
        description: '100% white-hat technical optimization that insulates your brand against Google core algorithm penalties.',
      },
      {
        title: 'Commercial Intent Prioritization',
        description: 'We focus on keywords that drive sales inquiries and closed business rather than vanity traffic spikes.',
      },
    ],
    faqs: [
      {
        question: 'How long does it take for technical SEO changes to show impact?',
        answer:
          'Technical crawl fixes and schema additions typically begin reflecting in Google Search Console indexation within 2 to 4 weeks. Meaningful upward movements in commercial keyword rankings generally compound over 3 to 6 months as domain trust builds.',
      },
      {
        question: 'Do you write code fixes or just provide recommendations in a spreadsheet?',
        answer:
          'We do both. Unlike agencies that hand over 80-page static PDFs that sit ignored, our technical team writes actual code snippets, schema scripts, and even submits Git pull requests directly to your engineering team.',
      },
      {
        question: 'How does modern JavaScript (React / Next.js) affect SEO?',
        answer:
          'Search engines can render JavaScript, but it requires an extra rendering queue phase that drains crawl budget and delays indexation. We ensure your application uses server-side rendering (SSR), static site generation (SSG), or optimized hydration so bots receive clean HTML immediately.',
      },
      {
        question: 'What is Schema.org structured data and why is it important?',
        answer:
          'Schema.org is a standardized machine-readable vocabulary written in JSON-LD. It tells Google explicitly what your business is, what services you offer, and who works for you. This unlocks rich snippets (stars, FAQ dropdowns, breadcrumbs) in search results, dramatically improving click-through rates.',
      },
      {
        question: 'Can you assist with domain migrations without dropping our rankings?',
        answer:
          'Yes. We specialize in zero-loss site migrations. We map 1:1 301 redirects, verify canonical alignments, preserve internal link hierarchies, and monitor Search Console daily post-launch to ensure zero ranking attrition.',
      },
    ],
    relatedServices: [
      {
        slug: 'web-development',
        title: 'Web Development',
        category: 'CORE ENGINEERING',
        description: 'High-performance websites engineered around your brand, customers and business goals.',
        route: '/services/web-development',
      },
      {
        slug: 'digital-marketing',
        title: 'Digital Marketing',
        category: 'GROWTH ENGINE',
        description: 'Data-driven campaigns that connect your business with the people who matter.',
        route: '/services/digital-marketing',
      },
      {
        slug: 'web-applications',
        title: 'Web Applications',
        category: 'CLOUD SYSTEMS',
        description: 'Scalable web platforms, dashboards and business systems built for complex workflows.',
        route: '/services/web-applications',
      },
    ],
    seoTitle: 'Technical SEO Agency UK | Search Architecture & Core Web Vitals | BYTHAWK',
    seoDescription:
      'BYTHAWK provides enterprise technical SEO, Core Web Vitals remediation, Schema.org structured data, and search architecture for UK companies seeking organic dominance.',
  },

  'graphic-design': {
    slug: 'graphic-design',
    title: 'Graphic Design & Brand Systems',
    shortName: 'Graphic Design',
    eyebrow: 'BYTHAWK // BRAND IDENTITY',
    category: 'BRAND IDENTITY',
    headline: 'Cohesive Visual Systems & Creative Assets Built for the Digital Era',
    introduction:
      'We craft distinct visual identities, comprehensive design systems, and multi-channel creative assets that communicate authority, build recognition, and elevate brand perception across every touchpoint.',
    accentColor: '#F59E0B',
    iconName: 'Palette',
    metaBadges: [
      { label: 'DELIVERY CADENCE', value: '3–8 Weeks' },
      { label: 'OUTPUTS', value: 'Vector Identity / Brand Guidelines' },
      { label: 'MEDIUMS', value: 'Digital-First & Print-Ready' },
      { label: 'TOOLING', value: 'Figma / Illustrator / After Effects' },
    ],
    overview: {
      strategicHeadline: 'Engineering cohesive visual languages that communicate credibility and prestige.',
      paragraphs: [
        'A disjointed visual identity damages trust before a customer ever reads your value proposition. In a crowded digital landscape, inconsistent typography, outdated logos, and generic stock imagery signal lack of attention to detail.',
        'At BYTHAWK, we design comprehensive brand identity systems engineered for the digital era. We develop purposeful visual languages—spanning vector marks, mathematical typography scales, bespoke color palettes, and motion design guidelines—that make your business instantly recognizable across web, mobile, and print.',
      ],
      corePillars: [
        {
          title: 'Systemic Cohesion',
          description: 'A unified visual language ensuring every marketing asset, product screen, and document feels unmistakably part of the same brand.',
        },
        {
          title: 'Digital-First Precision',
          description: 'Vector graphics and typography systems optimized for sharp rendering on high-DPI screens down to tiny favicon dimensions.',
        },
        {
          title: 'Exhaustive Documentation',
          description: 'Clear, comprehensive brand guidelines that empower your internal team and partners to produce on-brand collateral effortlessly.',
        },
      ],
    },
    capabilities: [
      {
        id: 'cap-gd-1',
        number: '01',
        title: 'Brand Identity & Visual Architecture',
        description: 'Crafting memorable primary logos, responsive lockups, monochrome marks, and brand symbols engineered for modern screens.',
        keyOutputs: ['Primary Logo & Responsive Lockups', 'Monochrome & Reversed Marks', 'Favicon & App Icons', 'Exclusion Zone Specifications'],
      },
      {
        id: 'cap-gd-2',
        number: '02',
        title: 'Typography & Color Palette Engineering',
        description: 'Curating harmonious typeface pairings, hierarchy scales, and accessible color palettes with high-contrast digital verification.',
        keyOutputs: ['Primary & Display Type Pairings', 'Modular Scale Hierarchy', 'Accessible Color Token System', 'Dark / Light Mode Equivalents'],
      },
      {
        id: 'cap-gd-3',
        number: '03',
        title: 'Custom Iconography & Vector Illustration',
        description: 'Designing bespoke vector icon suites and illustration systems that reinforce your unique product concepts and brand aesthetic.',
        keyOutputs: ['Custom SVG Icon Library', 'Vector Feature Illustrations', 'Technical Diagram Assets', 'Unified Stroke & Corner Rules'],
      },
      {
        id: 'cap-gd-4',
        number: '04',
        title: 'Digital Marketing & Social Creative Suites',
        description: 'Complete suites of customizable templates for LinkedIn, Instagram, display advertising, email newsletters, and presentation decks.',
        keyOutputs: ['Figma Social Media Template Kits', 'Keynote & PowerPoint Pitch Decks', 'Display Ad Banner Formats', 'Email Header & Newsletter Kits'],
      },
      {
        id: 'cap-gd-5',
        number: '05',
        title: 'Motion Design & Animated Brand Assets',
        description: 'Engaging logo stingers, kinetic typography, and animated micro-interactions configured in Lottie and vector formats.',
        keyOutputs: ['Animated Logo Reveal', 'Lottie JSON UI Animations', 'Video Intro / Outro Bumpers', 'Social Motion Assets'],
      },
      {
        id: 'cap-gd-6',
        number: '06',
        title: 'Print, Environmental & Packaging Collateral',
        description: 'Flawless press-ready artwork with precise spot color specifications, bleed margins, and tactile paper stock recommendations.',
        keyOutputs: ['Executive Stationery & Business Cards', 'Brochures & Whitepapers', 'Event Booth & Signage Graphics', 'Product Packaging Artwork'],
      },
    ],
    deliverables: [
      {
        title: 'Master Vector Asset Suite',
        description: 'Complete export suite of all logo marks and brand iconography in SVG, EPS, PDF, and high-res PNG formats.',
        tag: 'VECTOR ASSETS',
      },
      {
        title: 'Comprehensive Brand Guidelines',
        description: 'Detailed PDF and digital documentation defining typography, color tokens, layout grids, and correct usage.',
        tag: 'BRAND BOOK',
      },
      {
        title: 'Figma Component Design Library',
        description: 'Tokenized Figma library containing typography styles, color swatches, and vector icon components.',
        tag: 'FIGMA LIBRARY',
      },
      {
        title: 'Digital Marketing Template Pack',
        description: 'Turnkey editable Figma templates for social media announcements, case studies, and ad campaigns.',
        tag: 'MARKETING KITS',
      },
      {
        title: 'Executive Pitch Deck Template',
        description: 'Polished presentation deck designed in Figma and PowerPoint for investor and client pitches.',
        tag: 'PRESENTATION',
      },
      {
        title: 'Press-Ready Print Production Files',
        description: 'CMYK print-ready files configured with crop marks, bleeds, and Pantone color matching.',
        tag: 'PRINT ASSETS',
      },
    ],
    process: [
      {
        step: '01',
        name: 'Brand Discovery & Visual Audit',
        summary: 'We unpack your company mission, market positioning, competitive visual landscape, and core audience expectations.',
        activities: ['Brand discovery workshop', 'Visual competitor audit', 'Moodboard creation', 'Design direction alignment'],
        deliverable: 'Visual Direction Moodboards & Creative Brief',
      },
      {
        step: '02',
        name: 'Identity Concept Exploration',
        summary: 'We explore 2–3 distinct visual identity directions presenting logo marks, typography pairings, and color palettes in real contexts.',
        activities: ['Logo mark sketching & vectorization', 'Type pairing experiments', 'Contextual mockups', 'Stakeholder presentation'],
        deliverable: 'Identity Direction Presentation',
      },
      {
        step: '03',
        name: 'Systemic Refinement & Polishing',
        summary: 'Deep refinement of the chosen direction: perfecting vector curves, mathematical optical balances, and contrast ratios.',
        activities: ['Vector bezier curve optimization', 'Optical alignment tests', 'Color contrast verification (WCAG)', 'Lockup variations'],
        deliverable: 'Refined Brand Asset Suite',
      },
      {
        step: '04',
        name: 'Collateral & Template Design',
        summary: 'Applying the finalized brand system to real-world touchpoints: presentation decks, social media templates, and business stationery.',
        activities: ['Pitch deck layout design', 'Social media template creation', 'Stationery artwork generation', 'Ad format variations'],
        deliverable: 'Collateral Suite Drafts',
      },
      {
        step: '05',
        name: 'Brand Guidelines Documentation',
        summary: 'Authoring the definitive brand rules manual covering typography rules, color formulas (RGB/HEX/CMYK/Pantone), and rules of usage.',
        activities: ['Brand book authoring', 'Clear dos and don’ts examples', 'Digital token export', 'Export checklist creation'],
        deliverable: 'Comprehensive Brand Guidelines Manual',
      },
      {
        step: '06',
        name: 'Master Asset Handover & Onboarding',
        summary: 'Organizing all master assets into structured cloud repositories and conducting a team walkthrough to ensure adoption.',
        activities: ['Master asset directory packaging', 'Cloud drive organization', 'Internal team Q&A walkthrough', 'Ongoing support setup'],
        deliverable: 'Complete Master Brand Package',
      },
    ],
    technologies: [
      {
        category: 'Vector & Identity',
        tools: [
          { name: 'Adobe Illustrator', description: 'Industry-standard vector artwork creation for scalable geometric marks.' },
          { name: 'Figma', description: 'Collaborative vector design and centralized component library management.' },
        ],
      },
      {
        category: 'Imaging & Layout',
        tools: [
          { name: 'Adobe Photoshop', description: 'High-end raster image editing, retouching, and photorealistic mockups.' },
          { name: 'Adobe InDesign', description: 'Precision editorial layout for print whitepapers, brochures, and books.' },
        ],
      },
      {
        category: 'Motion & Animation',
        tools: [
          { name: 'Adobe After Effects', description: 'Broadcast-quality motion graphics and kinetic typography.' },
          { name: 'Lottie (Bodymovin)', description: 'Lightweight JSON animation exports for web and mobile performance.' },
        ],
      },
      {
        category: 'Design Tokens',
        tools: [
          { name: 'Tokens Studio', description: 'Synchronizing Figma color and typography tokens directly with CSS/code.' },
        ],
      },
    ],
    benefits: [
      {
        title: 'Instant Brand Prestige',
        description: 'A sharp, cohesive visual system positions your company as a serious market leader from the first second of interaction.',
      },
      {
        title: 'Engineered for Digital Screens',
        description: 'Every mark and type size is calibrated to look crisp on high-resolution Retina displays and responsive layouts.',
      },
      {
        title: 'Empowered Internal Teams',
        description: 'With comprehensive guidelines and Figma templates, your team can produce marketing assets without deviating from standards.',
      },
      {
        title: 'Full Master Ownership',
        description: 'You receive all raw vector files, font licensing guidance, and complete commercial usage rights upon project completion.',
      },
    ],
    faqs: [
      {
        question: 'What file formats do you deliver for the finalized brand assets?',
        answer:
          'We deliver a comprehensive master asset directory containing scalable vector formats (SVG, EPS, PDF) for digital and print, along with high-resolution raster files (PNG with transparent backgrounds, JPEG, WebP) in multiple resolutions.',
      },
      {
        question: 'How do you ensure our visual identity looks great on both light and dark screens?',
        answer:
          'We engineer dual-mode visual systems. Every logo mark, typography style, and accent color is tested against both dark space backgrounds and clean white surfaces to ensure exceptional contrast and readability.',
      },
      {
        question: 'How many design concepts do you present initially?',
        answer:
          'We typically explore and present 2 to 3 distinct visual directions during the concept phase. Each direction demonstrates a unique visual narrative, typography pairing, and real-world mockup contexts.',
      },
      {
        question: 'Can you work with our existing brand if we just want a visual refresh?',
        answer:
          'Yes. We often conduct "brand evolutions" where we preserve the brand equity and recognizable core elements of an established company while modernizing typography, refining geometric proportions, and establishing a unified digital design system.',
      },
      {
        question: 'How do the graphic assets transition into web and app development?',
        answer:
          'Because we are a full-stack digital agency, our design tokens and SVGs are directly exportable into our React/Tailwind frontend codebases, guaranteeing 100% fidelity between Figma designs and live code.',
      },
    ],
    relatedServices: [
      {
        slug: 'ui-ux-design',
        title: 'UI/UX Design',
        category: 'EXPERIENCE CRAFT',
        description: 'Clear, intuitive digital experiences that turn complex products into simple interactions.',
        route: '/services/ui-ux-design',
      },
      {
        slug: 'web-development',
        title: 'Web Development',
        category: 'CORE ENGINEERING',
        description: 'High-performance websites engineered around your brand, customers and business goals.',
        route: '/services/web-development',
      },
      {
        slug: 'digital-marketing',
        title: 'Digital Marketing',
        category: 'GROWTH ENGINE',
        description: 'Data-driven campaigns that connect your business with the people who matter.',
        route: '/services/digital-marketing',
      },
    ],
    seoTitle: 'Graphic Design & Brand Identity Agency UK | Visual Systems | BYTHAWK',
    seoDescription:
      'BYTHAWK crafts bespoke visual identity systems, logos, typography hierarchies, and digital design collateral for forward-thinking UK businesses.',
  },

  'ui-ux-design': {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    shortName: 'UI/UX',
    eyebrow: 'BYTHAWK // EXPERIENCE CRAFT',
    category: 'EXPERIENCE CRAFT',
    headline: 'Intuitive, Research-Backed User Experiences for Complex Digital Products',
    introduction:
      'We transform intricate workflows into elegant, effortless digital interfaces. Grounded in cognitive psychology, user testing, and systematic component architecture, we design products that users genuinely love using.',
    accentColor: '#D97706',
    iconName: 'Layers',
    metaBadges: [
      { label: 'DELIVERY CADENCE', value: '4–12 Weeks' },
      { label: 'DELIVERABLES', value: 'Interactive Prototypes / Systems' },
      { label: 'METHODOLOGY', value: 'User Research & Heuristic Testing' },
      { label: 'COMPLIANCE', value: 'WCAG 2.1 AA / AAA Accessible' },
    ],
    overview: {
      strategicHeadline: 'Eliminating user friction through rigorous interface architecture and design token precision.',
      paragraphs: [
        'Complex digital products and platforms often fail not because of flawed underlying technology, but because users cannot navigate their interfaces intuitively. When workflows are convoluted, onboarding is painful, or information hierarchies are chaotic, user adoption plummets and churn spikes.',
        'At BYTHAWK, we design digital interfaces that feel like natural extensions of human thought. We blend qualitative user research, iterative wireframing, and production-grade Figma design systems to create digital experiences that balance visual sophistication with operational clarity.',
      ],
      corePillars: [
        {
          title: 'Frictionless Task Completion',
          description: 'Minimizing cognitive load, click counts, and visual noise so users accomplish complex goals with ease.',
        },
        {
          title: 'Tokenized Design Systems',
          description: 'Building atomic, scalable Figma component libraries that mirror production code tokens and drastically reduce developer rework.',
        },
        {
          title: 'Inclusive Accessibility',
          description: 'Designing with WCAG 2.1 AA/AAA compliance from wireframe stage, ensuring equal access across motor and visual abilities.',
        },
      ],
    },
    capabilities: [
      {
        id: 'cap-ui-1',
        number: '01',
        title: 'User Research & Journey Mapping',
        description: 'Conducting stakeholder interviews, user empathy mapping, and end-to-end user journey workflows that uncover pain points.',
        keyOutputs: ['User Persona Archetypes', 'End-to-End Journey Maps', 'Pain Point Prioritization', 'Feature Requirement Matrices'],
      },
      {
        id: 'cap-ui-2',
        number: '02',
        title: 'Information Architecture & Wireframing',
        description: 'Structuring logical navigation hierarchies, content models, and low-fidelity wireframes that validate screen layouts early.',
        keyOutputs: ['Information Architecture Schemas', 'Low-Fidelity Screen Wireframes', 'Interaction Flowcharts', 'Rapid Concept Prototyping'],
      },
      {
        id: 'cap-ui-3',
        number: '03',
        title: 'Interactive High-Fidelity Prototyping',
        description: 'Building realistic, clickable Figma prototypes with micro-interactions, realistic transitions, and dynamic states.',
        keyOutputs: ['Clickable Figma Prototypes', 'Micro-Interaction Specs', 'Component Variant States', 'Usability Testing Builds'],
      },
      {
        id: 'cap-ui-4',
        number: '04',
        title: 'Design System Engineering & Tokens',
        description: 'Architecting atomic design systems with tokenized color, typography, spacing, and elevation variables mapped to code.',
        keyOutputs: ['Atomic Figma Component Library', 'Design Tokens (JSON / CSS)', 'Auto-Layout Components', 'Dark / Light Mode Variants'],
      },
      {
        id: 'cap-ui-5',
        number: '05',
        title: 'Usability Testing & Heuristic Evaluation',
        description: 'Conducting empirical usability tests with real users to measure task completion times, confusion points, and satisfaction.',
        keyOutputs: ['Heuristic Evaluation Audit', 'Moderated Usability Sessions', 'Task Success Rate Analytics', 'Iterative Design Refinements'],
      },
      {
        id: 'cap-ui-6',
        number: '06',
        title: 'Developer Handoff & Specification',
        description: 'Delivering pixel-perfect redlines, interaction notes, responsive breakpoint rules, and asset exports for engineering teams.',
        keyOutputs: ['Developer Specification Redlines', 'Responsive Breakpoint Guides', 'SVG Asset Exports', 'Design-to-Code Sync Reviews'],
      },
    ],
    deliverables: [
      {
        title: 'Interactive High-Fidelity Prototype',
        description: 'Fully clickable, comprehensive Figma prototype demonstrating all user flows, modals, and edge states.',
        tag: 'PROTOTYPE',
      },
      {
        title: 'Production Design System (Figma)',
        description: 'Scalable component library organized using atomic design principles and full auto-layout properties.',
        tag: 'DESIGN SYSTEM',
      },
      {
        title: 'Design Tokens Package (JSON/CSS)',
        description: 'Exported color, spacing, radius, and typography tokens ready for immediate developer consumption.',
        tag: 'TOKENS',
      },
      {
        title: 'User Journey Maps & Wireframes',
        description: 'Complete user flow diagrams and low-fidelity architectural wireframes for product documentation.',
        tag: 'USER FLOWS',
      },
      {
        title: 'WCAG Accessibility Audit',
        description: 'Color contrast verification report and keyboard focus guidance satisfying WCAG 2.1 AA standards.',
        tag: 'ACCESSIBILITY',
      },
      {
        title: 'Developer Specification & Handoff Playbook',
        description: 'Detailed annotations on animation timings, hover behaviors, and responsive breakpoint behavior.',
        tag: 'HANDOFF SPEC',
      },
    ],
    process: [
      {
        step: '01',
        name: 'Research & User Discovery',
        summary: 'We analyze user needs, business constraints, existing analytics data, and benchmark competitor product interfaces.',
        activities: ['User interviews', 'Competitive UX teardowns', 'User persona development', 'Requirement prioritization'],
        deliverable: 'UX Research Summary & Opportunity Blueprint',
      },
      {
        step: '02',
        name: 'Information Architecture & Wireframes',
        summary: 'Establishing the navigational spine, content hierarchies, and low-fidelity wireframes to validate layout concepts.',
        activities: ['Site / app architecture mapping', 'Low-fidelity wireframing', 'User flow validation', 'Wireframe review workshops'],
        deliverable: 'Complete Low-Fidelity Wireframe Suite',
      },
      {
        step: '03',
        name: 'Design System Architecture & Tokens',
        summary: 'Building the underlying design tokens, typography scales, color palettes, and foundational UI components.',
        activities: ['Design token definition', 'Figma atomic components build', 'Color contrast checks', 'Auto-layout responsiveness'],
        deliverable: 'Foundational Design System Library',
      },
      {
        step: '04',
        name: 'High-Fidelity Interface Design',
        summary: 'Designing every screen, modal, dropdown, and active state with polished visual hierarchy and micro-interactions.',
        activities: ['High-fidelity screen design', 'Component variant mapping', 'Micro-interaction details', 'Edge case & empty states'],
        deliverable: 'Complete High-Fidelity Screen Suite',
      },
      {
        step: '05',
        name: 'Clickable Prototyping & Usability Testing',
        summary: 'Connecting screens into a realistic prototype and running usability test sessions to identify and fix friction.',
        activities: ['Figma interactive prototyping', 'User testing sessions', 'Feedback analysis', 'Interface refinement sprints'],
        deliverable: 'Validated Clickable Prototype & Test Report',
      },
      {
        step: '06',
        name: 'Developer Handoff & Implementation QA',
        summary: 'Preparing detailed design specifications and working closely with engineers during development to ensure pixel-perfect fidelity.',
        activities: ['Token export & redlines', 'Engineer handoff walkthrough', 'Front-end code QA audits', 'Visual defect ticketing'],
        deliverable: 'Developer-Ready Handoff & QA Sign-off',
      },
    ],
    technologies: [
      {
        category: 'Interface & Prototyping',
        tools: [
          { name: 'Figma', description: 'Industry-leading collaborative interface design and auto-layout prototyping.' },
          { name: 'FigJam', description: 'Interactive whiteboarding for journey mapping and stakeholder workshops.' },
          { name: 'ProtoPie', description: 'Advanced sensor-driven and micro-interaction prototyping.' },
        ],
      },
      {
        category: 'Design Systems & Tokens',
        tools: [
          { name: 'Tokens Studio for Figma', description: 'Centralized token management mapping directly to code repos.' },
          { name: 'Storybook Integration', description: 'Component documentation aligning Figma UI with React components.' },
        ],
      },
      {
        category: 'Testing & Accessibility',
        tools: [
          { name: 'Stark', description: 'Integrated accessibility suite checking WCAG contrast and colorblindness.' },
          { name: 'Maze', description: 'Rapid remote unmoderated usability testing and prototype analytics.' },
        ],
      },
      {
        category: 'Developer Handoff',
        tools: [
          { name: 'Figma Dev Mode', description: 'Inspecting CSS, box model parameters, and assets in real time.' },
          { name: 'Tailwind CSS Tokens', description: 'Direct 1:1 mapping between Figma color tokens and Tailwind classes.' },
        ],
      },
    ],
    benefits: [
      {
        title: 'Eliminate Developer Rework',
        description: 'Detailed Figma design systems and tokenized components ensure engineers know exactly what to build first time.',
      },
      {
        title: 'Measurable Usability Uplift',
        description: 'Grounded in empirical usability testing that reduces task abandonment and drives user satisfaction.',
      },
      {
        title: 'Accessible by Default',
        description: 'Every color, input, and focus state is engineered to comply with WCAG 2.1 AA/AAA accessibility standards.',
      },
      {
        title: 'Cohesive Cross-Platform Feel',
        description: 'Unified interaction patterns that work intuitively whether on desktop monitors, tablets, or smartphones.',
      },
    ],
    faqs: [
      {
        question: 'How do your UI/UX designers collaborate with developers?',
        answer:
          'Because BYTHAWK is an integrated technology agency, our designers speak developer language. We design with auto-layout flexbox principles, organize components around code props, export synchronized design tokens (JSON/CSS), and conduct visual QA reviews on staging builds.',
      },
      {
        question: 'What is the difference between UI and UX design?',
        answer:
          'UX (User Experience) is about the structural logic, flow, and ease with which a user solves a problem—information architecture, journey maps, and wireframes. UI (User Interface) is the aesthetic and visual realization—color harmony, typography hierarchy, micro-interactions, and visual finish. We excel at both.',
      },
      {
        question: 'Can you help us redesign an existing complex web application or dashboard?',
        answer:
          'Yes. We regularly conduct heuristic audits on legacy SaaS platforms and enterprise tools. We map out existing user bottlenecks, streamline data tables and filter systems, and rebuild the interface iteratively to avoid alienating existing power users.',
      },
      {
        question: 'How do you conduct usability testing?',
        answer:
          'We test interactive prototypes with target users using structured task scenarios. We observe where users hesitate, track task completion rates, and capture qualitative feedback to iteratively refine screens before any production code is written.',
      },
      {
        question: 'Do you deliver a full design system with the project?',
        answer:
          'Yes. Every UI/UX engagement includes a clean, tokenized Figma component library with auto-layout buttons, inputs, modals, navigation bars, and typography styles, enabling your team to build future features seamlessly.',
      },
    ],
    relatedServices: [
      {
        slug: 'web-development',
        title: 'Web Development',
        category: 'CORE ENGINEERING',
        description: 'High-performance websites engineered around your brand, customers and business goals.',
        route: '/services/web-development',
      },
      {
        slug: 'web-applications',
        title: 'Web Applications',
        category: 'CLOUD SYSTEMS',
        description: 'Scalable web platforms, dashboards and business systems built for complex workflows.',
        route: '/services/web-applications',
      },
      {
        slug: 'mobile-app-development',
        title: 'Mobile App Development',
        category: 'MOBILE PLATFORMS',
        description: 'Thoughtful mobile products designed for iOS, Android and modern cross-platform experiences.',
        route: '/services/mobile-app-development',
      },
    ],
    seoTitle: 'UI/UX Design Agency UK | User Experience & Design Systems | BYTHAWK',
    seoDescription:
      'BYTHAWK creates intuitive, research-driven UI/UX designs, SaaS dashboards, and design systems for forward-thinking UK technology companies.',
  },
};
