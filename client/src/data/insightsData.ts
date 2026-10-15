export type InsightCategory =
  | 'Technology'
  | 'Web Development'
  | 'Mobile'
  | 'SEO'
  | 'Digital Marketing'
  | 'Design';

export type InsightCategorySlug =
  | 'all'
  | 'technology'
  | 'web-development'
  | 'mobile'
  | 'seo'
  | 'digital-marketing'
  | 'design';

export type InsightStatus = 'preview' | 'published';

export interface InsightSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface InsightRelatedService {
  title: string;
  route: string;
}

export interface InsightArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: InsightCategory;
  categorySlug: InsightCategorySlug;
  status: InsightStatus;

  author: string;
  publishedAt?: string;
  updatedAt?: string;
  readTime: string;

  featured?: boolean;
  heroImage?: string;

  introduction: string;
  sections: InsightSection[];
  keyTakeaways: string[];

  relatedServices: InsightRelatedService[];
  relatedInsights?: string[];
}

export interface CategoryFilterItem {
  id: InsightCategorySlug;
  label: string;
}

export const INSIGHT_CATEGORIES: CategoryFilterItem[] = [
  { id: 'all', label: 'All' },
  { id: 'technology', label: 'Technology' },
  { id: 'web-development', label: 'Web Development' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'seo', label: 'SEO' },
  { id: 'digital-marketing', label: 'Digital Marketing' },
  { id: 'design', label: 'Design' },
];

export const INSIGHTS_ARTICLES: InsightArticle[] = [
  {
    slug: 'what-makes-a-modern-business-website-actually-effective',
    title: 'What Makes a Modern Business Website Actually Effective?',
    excerpt:
      'Beyond visual aesthetics, an effective commercial website balances sub-second performance, clear information architecture, accessible typography, and frictionless conversion pathways.',
    category: 'Web Development',
    categorySlug: 'web-development',
    status: 'preview',
    author: 'VTuber Design Editorial',
    readTime: '6 min read',
    featured: true,
    introduction:
      'In an era where digital first impressions determine commercial credibility, a corporate website can no longer function as a passive online brochure. High-growth organisations require platforms engineered for speed, search discovery, and purposeful user action.',
    sections: [
      {
        heading: 'Performance as a Core Value Proposition',
        paragraphs: [
          'Page load speed directly affects user retention and perceived brand quality. When a web application or landing page hesitates, prospective clients question the operational precision of the organization behind it.',
          'Modern frontend architecture achieves rapid delivery through lean dependency graphs, responsive image orchestration, and edge caching rather than heavy client-side bundles.',
        ],
        bullets: [
          'Sub-second first contentful paint across mobile cellular connections',
          'Elimination of layout shifts (CLS) to preserve reading flow',
          'Selective asset loading rather than monolithic JavaScript payloads',
        ],
      },
      {
        heading: 'Information Architecture Built for Clarity',
        paragraphs: [
          'A visitor should understand within seconds what an organisation builds, who it serves, and how to begin a conversation. Unclear navigation and vague terminology create cognitive friction that drives potential partners away.',
          'Effective web platforms structure content around customer objectives rather than internal corporate hierarchies.',
        ],
      },
      {
        heading: 'The Role of Thoughtful Design Systems',
        paragraphs: [
          'A coherent design system enforces visual consistency across breakpoints, ensuring that typography scales harmoniously from handheld devices to ultra-wide displays.',
          'Systematic tokens for color, spacing, and interaction states allow marketing and engineering teams to expand platforms predictably without accumulating visual debt.',
        ],
      },
    ],
    keyTakeaways: [
      'Performance and user experience are commercial requirements, not technical afterthoughts.',
      'Clear, accessible information architecture outperforms ornamental visuals every time.',
      'Tokenized design systems provide long-term velocity and brand consistency.',
    ],
    relatedServices: [
      { title: 'Web Development', route: '/services/web-development' },
      { title: 'UI/UX Design', route: '/services/ui-ux-design' },
      { title: 'SEO & Organic Growth', route: '/services/seo' },
    ],
    relatedInsights: [
      'from-website-to-web-application',
      'why-good-ui-ux-is-more-than-visual-design',
      'technical-seo-foundations-for-modern-websites',
    ],
  },
  {
    slug: 'from-website-to-web-application',
    title: 'From Website to Web Application: When Your Business Needs More',
    excerpt:
      'How to evaluate when a business has outgrown static content marketing and requires real-time state management, workflow automation, and authenticated cloud systems.',
    category: 'Technology',
    categorySlug: 'technology',
    status: 'preview',
    author: 'VTuber Design Editorial',
    readTime: '8 min read',
    featured: false,
    introduction:
      'Many organizations reach an inflection point where static web pages can no longer support their operational complexity. Transitioning from a content site to a purpose-built web application unlocks automation, real-time collaboration, and direct customer value.',
    sections: [
      {
        heading: 'Identifying the Architectural Inflection Point',
        paragraphs: [
          'Static websites excel at communicating brand narrative, positioning, and contact discovery. However, when customers demand interactive calculation, self-service account management, or bespoke ordering flows, the requirements fundamentally shift.',
          'Attempting to stretch a traditional CMS into a complex business tool typically results in brittle plugins, security vulnerabilities, and slow user feedback.',
        ],
        bullets: [
          'Repetitive manual data entry across disconnected spreadsheets',
          'Customer requests for persistent profiles, order history, or self-service tools',
          'The need for real-time notifications or role-based permission tiers',
        ],
      },
      {
        heading: 'Designing for State Management and Resilient Data',
        paragraphs: [
          'Web applications require robust client-side state coordination, asynchronous API communication, and clear fallback states for intermittent network connectivity.',
          'By leveraging typed APIs, resilient caching layers, and decoupled backend micro-services, modern web apps deliver desktop-grade reliability directly inside the browser.',
        ],
      },
      {
        heading: 'Security, Compliance, and Enterprise Governance',
        paragraphs: [
          'With interactive applications comes the responsibility of handling authenticated sessions and sensitive operational data. Clean session management, encrypted communications, and audit trails must be considered from day one of architecture.',
        ],
      },
    ],
    keyTakeaways: [
      'Recognise when business requirements exceed the boundaries of traditional content management systems.',
      'Decoupled, API-first architectures provide the flexibility needed for iterative product evolution.',
      'Enterprise security, role permissions, and audit logging must be engineered from day one.',
    ],
    relatedServices: [
      { title: 'Web Applications', route: '/services/web-applications' },
      { title: 'Web Development', route: '/services/web-development' },
    ],
    relatedInsights: [
      'what-makes-a-modern-business-website-actually-effective',
      'designing-mobile-products-people-actually-use',
    ],
  },
  {
    slug: 'designing-mobile-products-people-actually-use',
    title: 'Designing Mobile Products People Actually Want to Use',
    excerpt:
      'A focus on thumb-zone ergonomics, sensible offline data synchronization, haptic feedback, and eliminating multi-step input friction in modern mobile platforms.',
    category: 'Mobile',
    categorySlug: 'mobile',
    status: 'preview',
    author: 'VTuber Design Editorial',
    readTime: '7 min read',
    featured: false,
    introduction:
      'Mobile users are frequently multitasking, on the move, and intolerant of friction. Crafting an enduring mobile product requires balancing technical efficiency with tactile, human-centered interface design.',
    sections: [
      {
        heading: 'Ergonomics in the Modern Device Era',
        paragraphs: [
          'As smartphone screens have expanded, one-handed reachability has become a primary ergonomic challenge. Critical navigation controls and primary actions should be anchored within natural thumb zones.',
          'Placing critical submit buttons or navigation targets in top corners introduces physical fatigue and elevates tap errors.',
        ],
        bullets: [
          'Bottom-anchored sheets and primary action bars',
          'Fluid swipe gestures replacing tiny header back buttons',
          'Adequate touch targets (minimum 44x44px) with generous spacing',
        ],
      },
      {
        heading: 'Graceful Degradation and Offline-First Architecture',
        paragraphs: [
          'Mobile connectivity is inherently variable. Applications that freeze or present unhandled error dialogues upon losing cellular signal frustrate users and damage brand trust.',
          'Implementing local persistence, background synchronization, and optimistic UI updates ensures that users can continue viewing data and queuing actions regardless of network state.',
        ],
      },
      {
        heading: 'Micro-Interactions and Tactile Feedback',
        paragraphs: [
          'Subtle haptic cues, spring physics, and contextual feedback reinforce actions without being ostentatious. When an interface feels physically responsive, digital confidence naturally follows.',
        ],
      },
    ],
    keyTakeaways: [
      'Design layouts around natural thumb zones to reduce physical fatigue.',
      'Treat network connectivity as a variable condition through offline caching and optimistic updates.',
      'Restrained haptic and motion feedback instills tactile confidence in user actions.',
    ],
    relatedServices: [
      { title: 'Mobile App Development', route: '/services/mobile-app-development' },
      { title: 'UI/UX Design', route: '/services/ui-ux-design' },
    ],
    relatedInsights: [
      'why-good-ui-ux-is-more-than-visual-design',
      'from-website-to-web-application',
    ],
  },
  {
    slug: 'technical-seo-foundations-for-modern-websites',
    title: 'Technical SEO Foundations Every Modern Website Should Get Right',
    excerpt:
      'Core Web Vitals, semantic HTML document outline, structured Schema.org JSON-LD, and crawlable routing architectures that turn technical precision into organic discoverability.',
    category: 'SEO',
    categorySlug: 'seo',
    status: 'preview',
    author: 'VTuber Design Editorial',
    readTime: '6 min read',
    featured: false,
    introduction:
      'High-quality content cannot rank if search engine crawlers struggle to parse its architecture. Technical SEO is the structural foundation that enables search platforms to discover, index, and understand digital content accurately.',
    sections: [
      {
        heading: 'Semantic HTML and the Document Tree',
        paragraphs: [
          'Search engines rely on semantic elements to interpret content hierarchy and informational weight. Replacing generic container tags with semantic markup communicates clear contextual relevance.',
          'A singular, unambiguous H1 header, logical heading sub-nesting (H2 &rarr; H3), and descriptive ARIA landmarks allow bots and assistive technologies to map pages efficiently.',
        ],
        bullets: [
          'Strict single H1 per route representing the primary subject',
          'Semantic landmarks (<header>, <main>, <article>, <nav>, <footer>)',
          'Descriptive, contextual link text rather than generic labels',
        ],
      },
      {
        heading: 'Structured Data with Schema.org JSON-LD',
        paragraphs: [
          'Embedding structured machine-readable JSON-LD provides direct clarity to search engines regarding entities, organizations, articles, and product catalogs.',
          'This semantic markup assists search engines in displaying rich snippets, breadcrumbs, and verified publisher details directly in search engine result pages.',
        ],
      },
      {
        heading: 'Core Web Vitals and Mobile Crawlability',
        paragraphs: [
          'Search ranking algorithms explicitly favor websites that deliver stable visual rendering and immediate responsiveness. Optimizing largest contentful paint (LCP) and cumulative layout shift (CLS) protects both organic rank and conversion rates.',
        ],
      },
    ],
    keyTakeaways: [
      'Semantic HTML structure is the bedrock of crawlability and accessibility.',
      'Schema.org structured data communicates domain entities directly to search algorithms.',
      'Core Web Vitals bridge the gap between technical performance and organic search rankings.',
    ],
    relatedServices: [
      { title: 'SEO & Organic Growth', route: '/services/seo' },
      { title: 'Web Development', route: '/services/web-development' },
    ],
    relatedInsights: [
      'what-makes-a-modern-business-website-actually-effective',
      'building-a-digital-growth-strategy-around-the-customer-journey',
    ],
  },
  {
    slug: 'building-a-digital-growth-strategy-around-the-customer-journey',
    title: 'Building a Digital Growth Strategy Around the Customer Journey',
    excerpt:
      'Moving away from vanity metrics toward unified conversion funnels, clear attribution tracking, and targeted marketing campaigns that align with business milestones.',
    category: 'Digital Marketing',
    categorySlug: 'digital-marketing',
    status: 'preview',
    author: 'VTuber Design Editorial',
    readTime: '7 min read',
    featured: false,
    introduction:
      'Digital growth often suffers when organizations view customer acquisition through isolated channels. Sustainable commercial momentum is built by aligning marketing touchpoints with the stages of the customer evaluation journey.',
    sections: [
      {
        heading: 'Mapping Intent Across Funnel Stages',
        paragraphs: [
          'Prospects arrive at your digital ecosystem with varying levels of intent. Visitors in early exploration require high-level clarity and thought leadership, while decision-makers seeking immediate procurement require direct pricing indicators and technical proof points.',
          'Tailoring landing experiences to intent rather than sending all campaigns to a generic homepage substantially improves conversion velocity.',
        ],
        bullets: [
          'Top of Funnel: Problem articulation, industry insight, and educational discovery',
          'Middle of Funnel: Comparative architecture, case previews, and technical methodology',
          'Bottom of Funnel: Scoping criteria, indicative budgets, and direct project enquiry initiation',
        ],
      },
      {
        heading: 'Accurate Attribution and Conversion Instrumentation',
        paragraphs: [
          'Effective optimization depends on clean data pipelines. Implementing server-side tracking, cookie consent compliance, and clear event attribution ensures marketing spend is focused on channels generating tangible pipeline.',
        ],
      },
      {
        heading: 'Iterative Feedback and Continuous Refinement',
        paragraphs: [
          'A growth strategy is not a static roadmap. Ongoing evaluation of bounce rates, form abandonment points, and session replays provides actionable guidance for conversion rate optimization.',
        ],
      },
    ],
    keyTakeaways: [
      'Align digital touchpoints directly with the prospect’s current stage of intent.',
      'Prioritise accurate conversion tracking and data hygiene over vanity impressions.',
      'Refine user funnels iteratively based on measurable behavioral feedback.',
    ],
    relatedServices: [
      { title: 'Digital Marketing', route: '/services/digital-marketing' },
      { title: 'UI/UX Design', route: '/services/ui-ux-design' },
    ],
    relatedInsights: [
      'what-makes-a-modern-business-website-actually-effective',
      'technical-seo-foundations-for-modern-websites',
    ],
  },
  {
    slug: 'why-good-ui-ux-is-more-than-visual-design',
    title: 'Why Good UI/UX Is More Than Visual Design',
    excerpt:
      'Why interface design is fundamentally about clarity of mental models, reducing cognitive load, resilient error handling, and systematic design tokens rather than superficial decoration.',
    category: 'Design',
    categorySlug: 'design',
    status: 'preview',
    author: 'VTuber Design Editorial',
    readTime: '8 min read',
    featured: false,
    introduction:
      'It is a common misconception that user experience design begins and ends with visual styling. In reality, visual presentation is merely the outermost layer of a deep discipline focused on human cognition, task efficiency, and operational clarity.',
    sections: [
      {
        heading: 'Cognitive Load and User Mental Models',
        paragraphs: [
          'Every decision a user must make, every unfamiliar icon they must decipher, and every complex multi-column form they encounter consumes cognitive bandwidth. Exceptional UI design minimizes this mental tax.',
          'When digital workflows mirror existing mental models, users navigate intuitively without requiring instructional walkthroughs or extensive training.',
        ],
        bullets: [
          'Progressive disclosure: revealing complexity only when demanded by context',
          'Predictable interactive states (default, hover, focus, active, disabled)',
          'Clear, actionable validation messages placed adjacent to relevant inputs',
        ],
      },
      {
        heading: 'Accessibility as a Foundational Standard',
        paragraphs: [
          'Designing for accessibility is not a compliance checklist; it is an engineering discipline that improves clarity for all users. High-contrast typography, keyboard navigation, and logical tab sequences produce products that withstand rigorous real-world use.',
        ],
      },
      {
        heading: 'The Engineering Synergy of Tokenized Design',
        paragraphs: [
          'When designers and engineers share a common token vocabulary for spacing, typography, and motion, collaboration friction evaporates. Changes propagate cleanly, visual drift is eliminated, and product teams build with elevated confidence.',
        ],
      },
    ],
    keyTakeaways: [
      'Effective UX eliminates cognitive friction by aligning with intuitive user mental models.',
      'Accessibility standards elevate product ergonomics and clarity for every user.',
      'Shared design tokens bridge the divide between creative intention and engineering execution.',
    ],
    relatedServices: [
      { title: 'UI/UX Design', route: '/services/ui-ux-design' },
      { title: 'Web Applications', route: '/services/web-applications' },
    ],
    relatedInsights: [
      'designing-mobile-products-people-actually-use',
      'what-makes-a-modern-business-website-actually-effective',
    ],
  },
];
