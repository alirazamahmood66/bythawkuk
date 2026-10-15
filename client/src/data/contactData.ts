export interface ProjectTypeOption {
  id: string;
  label: string;
  category: string;
  description: string;
}

export interface BudgetOption {
  id: string;
  label: string;
  hint: string;
}

export interface TimelineOption {
  id: string;
  label: string;
  hint: string;
}

export interface NextStepStage {
  step: string;
  title: string;
  description: string;
}

export interface ContactFaqItem {
  question: string;
  answer: string;
}

export const PROJECT_TYPE_OPTIONS: ProjectTypeOption[] = [
  {
    id: 'web-applications',
    label: 'Web Application',
    category: 'CLOUD SYSTEMS',
    description: 'SaaS platforms, operational dashboards, and complex web software.',
  },
  {
    id: 'new-website',
    label: 'New Website',
    category: 'CORE ENGINEERING',
    description: 'High-performance flagship corporate or brand web platform.',
  },
  {
    id: 'ecommerce',
    label: 'E-commerce',
    category: 'COMMERCE ENGINE',
    description: 'Headless storefronts, Shopify Plus, and conversion checkout flows.',
  },
  {
    id: 'mobile-app',
    label: 'Mobile App',
    category: 'MOBILE PLATFORMS',
    description: 'iOS, Android, and cross-platform mobile products.',
  },
  {
    id: 'ui-ux-design',
    label: 'UI/UX Design',
    category: 'EXPERIENCE CRAFT',
    description: 'Interface architecture, wireframes, user testing, and design systems.',
  },
  {
    id: 'seo',
    label: 'SEO & Architecture',
    category: 'DISCOVERY',
    description: 'Technical crawl audits, Schema.org data, and Core Web Vitals.',
  },
  {
    id: 'digital-marketing',
    label: 'Digital Marketing',
    category: 'GROWTH ENGINE',
    description: 'Performance acquisition, attribution setup, and paid growth campaigns.',
  },
  {
    id: 'graphic-design',
    label: 'Graphic Design',
    category: 'BRAND IDENTITY',
    description: 'Visual identity marks, typography guidelines, and digital asset suites.',
  },
  {
    id: 'custom-project',
    label: 'Custom Digital Project',
    category: 'BESPOKE MISSION',
    description: 'Multi-disciplinary solutions combining engineering, cloud, and creative.',
  },
  {
    id: 'not-sure',
    label: 'Not Sure Yet',
    category: 'ADVISORY',
    description: 'Explore the right technical direction with our senior leadership.',
  },
];

export const BUDGET_OPTIONS: BudgetOption[] = [
  { id: 'under-10k', label: 'Under A$10k', hint: 'Focused scope / advisory' },
  { id: '10k-25k', label: 'A$10k – A$25k', hint: 'Targeted build / sprint' },
  { id: '25k-50k', label: 'A$25k – A$50k', hint: 'Core platform / store' },
  { id: '50k-100k', label: 'A$50k – A$100k', hint: 'Full-scale digital platform' },
  { id: '100k-plus', label: 'A$100k+', hint: 'Comprehensive enterprise system' },
  { id: 'not-sure', label: 'Not sure yet', hint: 'Determine during scoping' },
];

export const TIMELINE_OPTIONS: TimelineOption[] = [
  { id: 'asap', label: 'As soon as possible', hint: 'Immediate sprint kickoff' },
  { id: 'within-1-month', label: 'Within 1 month', hint: 'Next operational cycle' },
  { id: '1-3-months', label: '1 – 3 months', hint: 'Planned quarter milestone' },
  { id: '3-6-months', label: '3 – 6 months', hint: 'Strategic roadmap horizon' },
  { id: 'flexible', label: 'Flexible', hint: 'Quality and scope first' },
  { id: 'not-sure', label: 'Not sure yet', hint: 'Discuss during scoping' },
];

export const WHAT_HAPPENS_NEXT_STAGES: NextStepStage[] = [
  {
    step: '01',
    title: 'We Review',
    description: 'We review your requirements, technical context, and project goals to assess alignment and scope.',
  },
  {
    step: '02',
    title: 'We Align',
    description: 'We follow up with relevant initial questions or arrange an introductory discovery conversation.',
  },
  {
    step: '03',
    title: 'We Plan',
    description: 'We outline recommended technical directions, preliminary milestones, and scope considerations.',
  },
  {
    step: '04',
    title: 'We Build',
    description: 'Once scope and milestones are confirmed, project implementation commences.',
  },
];

export const CONTACT_FAQS: ContactFaqItem[] = [
  {
    question: 'What happens after I submit a project enquiry?',
    answer:
      'We review every enquiry carefully. If there is alignment between your project needs and our capabilities, we will reach out to discuss your requirements and determine the appropriate next step.',
  },
  {
    question: 'Do I need a complete technical specification before contacting you?',
    answer:
      'Not at all. Many client engagements begin at the problem statement stage. We help you explore requirements, outline key deliverables, and establish a pragmatic technical direction during discovery.',
  },
  {
    question: 'Can you work with an existing website, application, or codebase?',
    answer:
      'Yes. We regularly conduct codebase audits and technical reviews on existing platforms to identify modernization opportunities, performance bottlenecks, and refactoring paths.',
  },
  {
    question: 'Can your team collaborate with our internal technical team?',
    answer:
      'Yes. We can work alongside internal product teams, CTOs, and developers, integrating with your existing version control, review standards, and sprint workflows.',
  },
  {
    question: 'Can I enquire about multiple interconnected services?',
    answer:
      'Yes. You can select multiple disciplines (e.g. Web Applications, UI/UX Design, and SEO) directly on the form to discuss a unified engagement.',
  },
  {
    question: 'Do you work with organizations outside Australia?',
    answer:
      'Yes. We collaborate with clients remotely across both Australia and international markets.',
  },
  {
    question: 'Do you provide ongoing support after deployment?',
    answer:
      'Yes. We offer post-launch support and ongoing engineering retainers tailored to the scope and operational needs of your platform.',
  },
];

