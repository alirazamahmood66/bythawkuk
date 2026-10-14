export interface AboutPillar {
  title: string;
  subtitle: string;
  description: string;
}

export interface AboutPrinciple {
  number: string;
  title: string;
  summary: string;
  detail: string;
}

export interface AboutDifference {
  title: string;
  summary: string;
  detail: string;
  tag: string;
}

export interface TechnologyPrinciple {
  title: string;
  description: string;
}

export interface AboutCapabilityRef {
  title: string;
  slug: string;
  category: string;
  description: string;
  route: string;
  accentColor: string;
}

export interface ProcessTeaserStage {
  step: string;
  name: string;
  summary: string;
}

export const ABOUT_DATA = {
  hero: {
    eyebrow: 'BYTHAWK // ABOUT',
    headline: 'We Build Digital Worlds With Purpose.',
    subheadline:
      'Bythawk is a UK digital technology studio. We unite commercial strategy, human-centered design, and resilient software engineering to help ambitious businesses build digital systems that endure and scale.',
    chips: [
      { label: 'DISCIPLINE', value: 'Strategy + Design + Tech' },
      { label: 'BASE OF OPERATIONS', value: 'London • United Kingdom' },
      { label: 'METHODOLOGY', value: 'Sprint-Based Validation' },
      { label: 'ENGAGEMENT', value: 'Direct Senior Leadership' },
    ],
  },

  positioning: {
    headline: 'A Digital Technology Partner. Not Just a Vendor.',
    lead: 'Too many digital projects fail at the seams between business strategy, creative design, and technical implementation. Bythawk was created to eliminate those seams.',
    paragraphs: [
      'We do not treat software engineering as a mechanical handover of disconnected tickets. We interrogate the underlying business imperative, design interfaces that prioritize human clarity, and engineer architectures prepared for operational longevity.',
      'Our team functions as an embedded digital technology partner—bringing senior technical leadership, transparent sprint velocity, and uncompromised software craftsmanship to every product milestone.',
    ],
    pillars: [
      {
        title: 'Strategy',
        subtitle: 'Commercial Clarity',
        description: 'Identifying genuine market levers, revenue friction, and operational bottlenecks before writing a line of code.',
      },
      {
        title: 'Design',
        subtitle: 'Human Precision',
        description: 'Transforming complex data and operational workflows into intuitive, accessible, and conversion-focused interfaces.',
      },
      {
        title: 'Technology',
        subtitle: 'Resilient Craftsmanship',
        description: 'Building clean, type-safe, sub-second web platforms and cloud systems that eliminate technical debt.',
      },
      {
        title: 'Growth',
        subtitle: 'Continuous Evolution',
        description: 'Aligning technical architectures with sustainable organic discovery, measurable attribution, and scale.',
      },
    ],
  },

  philosophy: {
    sectionEyebrow: '// OPERATIONAL PRINCIPLES',
    sectionTitle: 'Our Guiding Philosophy',
    sectionDescription:
      'Five core commitments that shape how we think, how we communicate, and how we engineer digital solutions.',
    principles: [
      {
        number: '01',
        title: 'Strategy First',
        summary: 'Understand the business problem before architecting the technology.',
        detail:
          'Technology should never be built for its own sake. We take the time to evaluate unit economics, user incentives, and operational constraints to ensure every technical investment produces measurable business leverage.',
      },
      {
        number: '02',
        title: 'Built Around People',
        summary: 'Technology should be useful, accessible, and intuitive.',
        detail:
          'Whether engineered for external customers or internal operational teams, software must reduce cognitive load. We design with empathy, strict WCAG accessibility, and ergonomic interactions that feel second nature.',
      },
      {
        number: '03',
        title: 'Design With Purpose',
        summary: 'Visual design should support clarity, trust, and conversion.',
        detail:
          'Aesthetics are a function of credibility. We reject arbitrary visual decoration in favor of systemic design tokens, typographic hierarchy, and purposeful interactions that communicate authority and reliability.',
      },
      {
        number: '04',
        title: 'Engineering That Scales',
        summary: 'Build foundations that can evolve as your business grows.',
        detail:
          'We craft modular, type-safe architectures with clean boundary separations. By avoiding brittle templates and opaque dependencies, we ensure your internal teams can extend features with confidence.',
      },
      {
        number: '05',
        title: 'One Digital Partner',
        summary: 'Bring strategy, design, engineering, and growth together.',
        detail:
          'Eliminating handoff friction between design agencies and dev contractors. From the first whiteboard architecture session to production cloud monitoring, you work with a unified, accountable team.',
      },
    ],
  },

  differences: {
    sectionEyebrow: '// ARCHITECTURAL ADVANTAGE',
    sectionTitle: 'What Makes Bythawk Different',
    items: [
      {
        tag: 'STRATEGIC MINDSET',
        title: 'Business Thinking',
        summary: 'We understand why something is needed rather than blindly building a spec.',
        detail:
          'We challenge assumptions constructively. If a simpler architectural path solves your business problem faster and cheaper, that is what we recommend.',
      },
      {
        tag: 'COLLABORATIVE RIGOR',
        title: 'Design + Engineering in Unison',
        summary: 'Designers and developers work together from day one.',
        detail:
          'Our designers understand CSS flexbox and component props; our engineers appreciate optical alignment and micro-interactions. Zero handoff distortion.',
      },
      {
        tag: 'TECHNICAL HYGIENE',
        title: 'Long-Term Thinking',
        summary: 'We build durable systems that evolve rather than disposable solutions.',
        detail:
          'Clean TypeScript, comprehensive test suites, reproducible Docker environments, and clear documentation. No proprietary lock-in or unmaintainable code.',
      },
      {
        tag: 'RADICAL CLARITY',
        title: 'Clear Communication',
        summary: 'Keep decisions, priorities, and velocity completely understandable.',
        detail:
          'Direct access to senior engineering leads in UK business hours. Clear sprint demonstrations, honest risk assessments, and zero technical obfuscation.',
      },
    ],
  },

  capabilities: [
    {
      title: 'Web Development',
      slug: 'web-development',
      category: 'CORE ENGINEERING',
      description: 'High-performance websites engineered around your brand, users, and business goals.',
      route: '/services/web-development',
      accentColor: '#06b6d4',
    },
    {
      title: 'Web Applications',
      slug: 'web-applications',
      category: 'CLOUD SYSTEMS',
      description: 'Scalable web platforms, dashboards, and business systems built for real-world workflows.',
      route: '/services/web-applications',
      accentColor: '#38bdf8',
    },
    {
      title: 'E-commerce Development',
      slug: 'ecommerce',
      category: 'COMMERCE ENGINE',
      description: 'Conversion-focused commerce experiences designed to sell, scale, and evolve globally.',
      route: '/services/ecommerce',
      accentColor: '#0284c7',
    },
    {
      title: 'Mobile App Development',
      slug: 'mobile-app-development',
      category: 'MOBILE PLATFORMS',
      description: 'Thoughtful mobile products designed for iOS, Android, and modern cross-platform experiences.',
      route: '/services/mobile-app-development',
      accentColor: '#8b5cf6',
    },
    {
      title: 'Digital Marketing',
      slug: 'digital-marketing',
      category: 'GROWTH ENGINE',
      description: 'Data-driven campaigns and server-side attribution that connect your business with qualified revenue.',
      route: '/services/digital-marketing',
      accentColor: '#f59e0b',
    },
    {
      title: 'SEO & Search Architecture',
      slug: 'seo',
      category: 'DISCOVERY',
      description: 'Technical and strategic search optimization designed to build sustainable organic authority.',
      route: '/services/seo',
      accentColor: '#10b981',
    },
    {
      title: 'Graphic Design',
      slug: 'graphic-design',
      category: 'BRAND IDENTITY',
      description: 'Visual systems and creative assets that make your brand recognizable and consistent across all touchpoints.',
      route: '/services/graphic-design',
      accentColor: '#ec4899',
    },
    {
      title: 'UI/UX Design',
      slug: 'ui-ux-design',
      category: 'EXPERIENCE CRAFT',
      description: 'Clear, intuitive digital experiences that turn complex products into effortless interactions.',
      route: '/services/ui-ux-design',
      accentColor: '#c084fc',
    },
  ],

  technologyPhilosophy: {
    headline: 'Technology Should Disappear Into the Experience.',
    lead:
      'We believe the best technology is invisible. When software is architected with precision, users do not notice the servers, queries, or hydration cycles—they simply experience speed, responsiveness, and trust.',
    principles: [
      {
        title: 'Sub-Second Performance',
        description: 'Optimized rendering paths, asset compression, and edge caching designed to achieve near-instant initial page loads.',
      },
      {
        title: 'Operational Reliability',
        description: 'Defensive coding patterns, type-safe API boundaries, and graceful error boundaries that prevent runtime failures.',
      },
      {
        title: 'Horizontal Scalability',
        description: 'Stateless server logic, containerized infrastructure, and indexed databases built to comfortably absorb traffic surges.',
      },
      {
        title: 'Universal Accessibility',
        description: 'Semantic markup, full keyboard navigation, and high-contrast tokens complying with WCAG 2.1 AA standards.',
      },
      {
        title: 'Long-Term Maintainability',
        description: 'Self-documenting codebases that your internal engineers can understand and extend without costly architectural rewrites.',
      },
      {
        title: 'Exceptional UX Polish',
        description: 'Fluid micro-interactions, predictable states, and thoughtful layout ergonomics that turn tasks into intuitive routines.',
      },
    ],
  },

  ukPositioning: {
    location: 'LONDON • UNITED KINGDOM',
    eyebrow: '// HERITAGE & PRESENCE',
    headline: 'UK Digital Thinking. Global Digital Ambition.',
    description:
      'Headquartered in the UK, Bythawk operates with the precision, rigor, and craft expected of modern British software studios. We partner with ambitious organizations across London, the United Kingdom, and international markets.',
  },

  processTeaser: {
    eyebrow: '// DELIVERY TRAJECTORY',
    headline: 'The Bythawk Methodology',
    description:
      'Our projects move through a transparent 6-stage lifecycle designed to eliminate uncertainty and ensure consistent delivery.',
    stages: [
      { step: '01', name: 'Discover', summary: 'Research, business goals & technical discovery.' },
      { step: '02', name: 'Define', summary: 'System architecture, scope & technical blueprint.' },
      { step: '03', name: 'Design', summary: 'Interactive prototypes, tokens & UI/UX ergonomics.' },
      { step: '04', name: 'Build', summary: 'Sprint-driven frontend, backend & API engineering.' },
      { step: '05', name: 'Validate', summary: 'Quality assurance, performance & accessibility checks.' },
      { step: '06', name: 'Launch', summary: 'Zero-downtime deployment, DNS cutover & telemetry.' },
    ],
    ctaText: 'Explore Our Complete Process',
    ctaRoute: '/process',
  },

  cta: {
    eyebrow: 'INITIATE PARTNERSHIP // LONDON • UK',
    headline: 'Build Something Worth Launching.',
    subheadline:
      'Have a digital product, platform, or growth challenge in mind? Let us explore what we can engineer together.',
    primaryButtonText: 'Start a Project',
    primaryButtonRoute: '/contact',
    secondaryButtonText: 'Explore Our Work',
    secondaryButtonRoute: '/work',
  },
};
