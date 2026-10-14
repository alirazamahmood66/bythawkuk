export interface ProcessStageItem {
  number: string;
  name: string;
  shortDescription: string;
  overview: string;
  activities: string[];
  deliverable: string;
  relatedServiceRoute?: string;
  relatedServiceLabel?: string;
}

export interface CollaborationPrinciple {
  title: string;
  tagline: string;
  description: string;
}

export interface EngagementType {
  title: string;
  badge: string;
  targetAudience: string;
  description: string;
  typicalFocus: string[];
  serviceLink: string;
  serviceLinkLabel: string;
}

export interface ProcessFaqItem {
  question: string;
  answer: string;
}

export const PROCESS_DATA = {
  hero: {
    eyebrow: 'BYTHAWK // PROCESS',
    headline: 'From Complexity to Clarity.',
    subheadline:
      'A structured, transparent engineering methodology that turns intricate business challenges into purposeful digital products, platforms, and experiences.',
    highlights: [
      { label: 'DELIVERY CYCLES', value: 'Agile 2-Week Sprints' },
      { label: 'COLLABORATION', value: 'Direct Senior Access' },
      { label: 'CODE INTEGRITY', value: 'Continuous Automated QA' },
      { label: 'HANDOVER', value: '100% Client Ownership' },
    ],
  },

  stages: [
    {
      number: '01',
      name: 'Discover',
      shortDescription: 'Understand the business, users, market, and existing technology landscape.',
      overview:
        'Every successful digital project begins with deep listening and rigorous technical analysis. We interrogate the commercial problem before proposing solutions, identifying potential pitfalls early.',
      activities: [
        'Stakeholder alignment & goals workshop',
        'User research & persona behavior analysis',
        'Existing codebase & infrastructure audit',
        'Competitive landscape & market gap mapping',
        'Key performance indicator (KPI) definition',
      ],
      deliverable: 'Discovery Direction & Technical Assessment',
    },
    {
      number: '02',
      name: 'Define',
      shortDescription: 'Turn research into a clear product direction, technical scope, and milestone plan.',
      overview:
        'We translate strategic discovery into concrete engineering architecture. Information flows, data models, technology choices, and sprint roadmaps are codified to eliminate ambiguity.',
      activities: [
        'Information architecture & user flow schemas',
        'Technical stack selection & API contract design',
        'Feature prioritization & MVP scoping matrix',
        'Data schema & security governance planning',
        'Sprint milestone roadmap & risk mitigation plan',
      ],
      deliverable: 'System Architecture Blueprint & Project Roadmap',
    },
    {
      number: '03',
      name: 'Design',
      shortDescription: 'Craft intuitive, accessible user interfaces and a scalable design system.',
      overview:
        'Design at Bythawk is ergonomic and intentional. We create systematic Figma component libraries, test interactive wireframes with real users, and ensure design tokens map 1:1 with code.',
      activities: [
        'Low-fidelity wireframing & task flow validation',
        'Interactive high-fidelity prototyping',
        'Tokenized design system (typography, color, spacing)',
        'Responsive layout ergonomics for all viewports',
        'Accessibility contrast & keyboard navigation review',
      ],
      deliverable: 'Interactive High-Fidelity Prototype & Design System',
      relatedServiceRoute: '/services/ui-ux-design',
      relatedServiceLabel: 'Explore UI/UX Service',
    },
    {
      number: '04',
      name: 'Build',
      shortDescription: 'Engineer clean, type-safe frontend, backend, and cloud architectures.',
      overview:
        'We execute in agile two-week sprints, deploying functional builds directly to private staging environments. Every line of code is strictly typed, modular, and built for long-term maintainability.',
      activities: [
        'Component-driven frontend development (React / TypeScript)',
        'Server-side API & microservices engineering (Node.js / Express)',
        'Database modeling & migration scripting',
        'Third-party platform & payment integrations',
        'Automated CI/CD pipelines & staging deployments',
      ],
      deliverable: 'Functional Staging Environment & Versioned Codebase',
      relatedServiceRoute: '/services/web-development',
      relatedServiceLabel: 'Explore Web Development',
    },
    {
      number: '05',
      name: 'Validate',
      shortDescription: 'Rigorous cross-device quality assurance, security, and performance verification.',
      overview:
        'Validation is built into every step rather than deferred to the end. We subject builds to automated unit testing, end-to-end user journey simulations, and strict performance audits.',
      activities: [
        'Cross-browser & multi-device matrix testing',
        'Core Web Vitals & page speed profiling',
        'Accessibility audit against WCAG 2.1 AA standards',
        'Edge-case error handling & offline simulation',
        'Stakeholder user acceptance testing (UAT)',
      ],
      deliverable: 'Comprehensive QA Audit & Performance Report',
    },
    {
      number: '06',
      name: 'Launch',
      shortDescription: 'Zero-downtime deployment, DNS cutover, telemetry activation, and knowledge handover.',
      overview:
        'Launch is a controlled, coordinated milestone. We manage domain configuration, CDN cache warming, and telemetry hooks to ensure a smooth transition from staging to live operations.',
      activities: [
        'Production infrastructure provisioning & SSL verification',
        'Zero-downtime DNS cutover orchestration',
        'Real-time error logging & telemetry activation',
        'Analytics & conversion tracking verification',
        'Technical documentation & client team handover',
      ],
      deliverable: 'Live Production Platform & Handover Documentation',
    },
  ] as ProcessStageItem[],

  collaboration: {
    sectionEyebrow: '// WORKING PRINCIPLES',
    sectionTitle: 'Our Collaboration Model',
    sectionDescription:
      'We believe the most successful digital products emerge from transparent, respectful, and direct partnership.',
    principles: [
      {
        title: 'Alignment',
        tagline: 'Start with shared goals.',
        description:
          'We align on commercial outcomes before touching technology. When client stakeholders and engineers share the same definition of success, every sprint makes measurable progress.',
      },
      {
        title: 'Transparency',
        tagline: 'Keep priorities and progress visible.',
        description:
          'No black boxes or opaque progress reports. You have live visibility into sprint boards, staging builds, and architectural decisions at every stage of the project.',
      },
      {
        title: 'Iteration',
        tagline: 'Review and refine throughout.',
        description:
          'Software evolves through feedback. Regular bi-weekly demonstrations allow your team to test features on staging environments and refine requirements before release.',
      },
      {
        title: 'Ownership',
        tagline: 'Clear responsibility for execution.',
        description:
          'Our senior leads take personal responsibility for delivery quality. When questions arise, you speak directly with the engineers architecting your system.',
      },
      {
        title: 'Evolution',
        tagline: 'Continuous support and refinement.',
        description:
          'Launch is only the beginning of a digital asset. We offer ongoing maintenance retainers and quarterly evolution sprints to adapt your platform as your business grows.',
      },
    ] as CollaborationPrinciple[],
  },

  engagementTypes: {
    sectionEyebrow: '// ENGAGEMENT MODELS',
    sectionTitle: 'Tailored to Your Operational Milestone',
    sectionDescription:
      'Our methodology flexes to meet your organization at its current stage of digital maturity.',
    types: [
      {
        title: 'New Digital Product',
        badge: 'GREENFIELD BUILD',
        targetAudience: 'For businesses creating a new SaaS platform, web application, or mobile product.',
        description:
          'From initial domain modeling and Figma prototyping to scalable cloud deployment. We take your concept from zero to a resilient, production-ready product.',
        typicalFocus: ['Full-stack architecture', 'User research & prototyping', 'API & database modeling', 'App Store / Cloud launch'],
        serviceLink: '/services/web-applications',
        serviceLinkLabel: 'View Web Applications',
      },
      {
        title: 'Product Transformation',
        badge: 'MODERNIZATION',
        targetAudience: 'For organizations modernizing a legacy web platform or resolving architectural debt.',
        description:
          'Progressive refactoring that replaces brittle page builders or legacy codebases with modern, type-safe TypeScript architectures without operational downtime.',
        typicalFocus: ['Codebase health audit', 'Incremental component migration', 'Database optimization', 'Performance remediation'],
        serviceLink: '/services/web-development',
        serviceLinkLabel: 'View Web Development',
      },
      {
        title: 'E-commerce Growth',
        badge: 'COMMERCE ENGINE',
        targetAudience: 'For retail and DTC brands upgrading to high-converting commerce platforms.',
        description:
          'Custom headless or Shopify Plus storefronts engineered for sub-second catalog browsing, streamlined checkout, and international multi-currency purchasing.',
        typicalFocus: ['Mobile checkout optimization', 'ERP & inventory sync', 'Multi-currency VAT routing', 'High-volume load resilience'],
        serviceLink: '/services/ecommerce',
        serviceLinkLabel: 'View E-commerce',
      },
      {
        title: 'Website & Brand Launch',
        badge: 'FLAGSHIP PLATFORM',
        targetAudience: 'For companies requiring a prestigious digital presence that communicates market authority.',
        description:
          'High-performance flagship corporate websites combining bespoke brand design, accessible typography scales, and sub-second Core Web Vitals.',
        typicalFocus: ['Brand identity integration', 'Content architecture', 'Core Web Vitals 95+', 'Technical SEO foundation'],
        serviceLink: '/services/web-development',
        serviceLinkLabel: 'View Web Development',
      },
      {
        title: 'Growth & Search Optimization',
        badge: 'DISCOVERY ENGINE',
        targetAudience: 'For businesses seeking sustainable organic customer acquisition and technical visibility.',
        description:
          'Deep technical crawl auditing, semantic Schema.org structured data, and server-side tracking pipelines that capture qualified commercial demand.',
        typicalFocus: ['Technical indexation audits', 'Schema.org JSON-LD suite', 'Server-side attribution (CAPI)', 'Conversion rate tuning'],
        serviceLink: '/services/seo',
        serviceLinkLabel: 'View SEO Services',
      },
    ] as EngagementType[],
  },

  faqs: [
    {
      question: 'How does a project usually begin?',
      answer:
        'Every project starts with an initial 30-minute discovery call to discuss your business goals, target timelines, and technical constraints. Following that, we conduct a structured technical scoping workshop to define project milestones, architecture blueprints, and a clear budget proposal.',
    },
    {
      question: 'How do you determine project scope and milestones?',
      answer:
        'During the Define stage, we break the project into functional user stories, data schemas, and UI components. We establish mutually agreed sprint milestones with explicit deliverables for each phase, ensuring complete clarity on what will be delivered and when.',
    },
    {
      question: 'Can you work with an existing product or codebase?',
      answer:
        'Yes. We regularly conduct technical audits on existing codebases to evaluate code hygiene, security posture, and performance bottlenecks. If an incremental modernization makes commercial sense, we refactor modules progressively rather than forcing a total rebuild.',
    },
    {
      question: 'Do you handle both design and development in-house?',
      answer:
        'Yes. Bythawk provides integrated strategy, design, and engineering under one roof. Our designers and engineers collaborate closely, ensuring that UI prototypes translate pixel-for-pixel into production-grade, accessible code without handoff friction.',
    },
    {
      question: 'Can you collaborate alongside our internal technical team?',
      answer:
        'Absolutely. We frequently work as an embedded acceleration unit alongside internal CTOs, product managers, and engineering teams—integrating into your existing Git repositories, ticket boards, and CI/CD pipelines.',
    },
    {
      question: 'How do projects move from design into development?',
      answer:
        'We do not treat design as a static handover. We build tokenized design systems in Figma (colors, typography, spacing) that map directly to code tokens in Tailwind and TypeScript. Developers and designers review staging builds together to ensure complete design fidelity.',
    },
    {
      question: 'What happens after the platform is launched?',
      answer:
        'All projects include a 30-day dedicated post-launch warranty with continuous telemetry and issue resolution. After that, we offer tailored ongoing engineering retainers covering security updates, feature evolution, and infrastructure management.',
    },
  ] as ProcessFaqItem[],

  cta: {
    eyebrow: 'READY TO MOVE // IDEA TO EXECUTION',
    headline: 'Ready to Move From Idea to Execution?',
    subheadline:
      'Book a technical discovery session with our London engineering team. We will review your requirements and outline a clear delivery roadmap.',
    primaryButtonText: 'Start a Project',
    primaryButtonRoute: '/contact',
    secondaryButtonText: 'Explore Our Work',
    secondaryButtonRoute: '/work',
  },
};
