export interface LegalSection {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface LegalDocument {
  title: string;
  eyebrow: string;
  lastUpdated: string;
  effectiveDate: string;
  summary: string;
  sections: LegalSection[];
}

export const PRIVACY_POLICY_DATA: LegalDocument = {
  title: 'Privacy Policy',
  eyebrow: 'GOVERNANCE & TRUST // PRIVACY',
  lastUpdated: '10 October 2026',
  effectiveDate: '1 October 2026',
  summary:
    'This Privacy Policy outlines how VTuber Design ("we", "us", or "our") handles personal information submitted through vtuberdesign.co.au. We are committed to transparency, data minimization, and protecting your privacy under the Australian Privacy Principles (APPs) and Privacy Act 1988 (Cth).',
  sections: [
    {
      id: 'introduction',
      title: '1. Introduction',
      paragraphs: [
        'VTuber Design operates the website vtuberdesign.co.au as an Australian digital technology and creative studio. This policy explains what information we collect when you visit our website or submit an enquiry, how that information is utilized, and the rights you retain over your data.',
        'We do not engage in the sale, rental, or commercial brokering of personal information. Information provided to us is used solely to evaluate project requirements and communicate directly with you.',
      ],
    },
    {
      id: 'information-collected',
      title: '2. Information We May Process',
      paragraphs: [
        'Depending on how you interact with our website, we may process the following categories of information:',
      ],
      bullets: [
        'Contact Information: Name, business email address, and optional telephone number provided via our project enquiry form.',
        'Project & Commercial Context: Business or organization name, existing website URL, selected project disciplines, project description, indicative budget range, and timeline horizon.',
        'Technical & Device Data: Internet Protocol (IP) address, browser user-agent string, and request timestamps automatically recorded in standard web server logs for security, rate-limiting, and abuse prevention.',
      ],
    },
    {
      id: 'purpose-of-processing',
      title: '3. How We Use Your Information',
      paragraphs: [
        'We process personal data only where there is a legitimate interest or necessary step to evaluate a potential commercial collaboration:',
      ],
      bullets: [
        'To review your project specification and determine architectural alignment and feasibility.',
        'To communicate directly with you regarding discovery meetings, scoping questions, and proposals.',
        'To enforce security safeguards, including sliding-window rate limiting and automated spam mitigation.',
        'To maintain internal records of incoming client inquiries and response progression.',
      ],
    },
    {
      id: 'data-sharing',
      title: '4. Data Sharing & Third Parties',
      paragraphs: [
        'We do not share your project details or contact information with third-party advertisers, marketing networks, or data brokers.',
        'Information may only be accessible to trusted infrastructure providers (such as hosting and database environments) strictly for the purpose of operating the website securely, or where required by law, regulation, or legal process.',
      ],
    },
    {
      id: 'data-retention',
      title: '5. Data Retention',
      paragraphs: [
        'We retain enquiry submissions only for as long as necessary to evaluate the project, maintain correspondence, or fulfill legitimate business and legal documentation requirements. If an enquiry does not lead to an active engagement, records may be archived or deleted in accordance with our routine data management procedures.',
      ],
    },
    {
      id: 'security-measures',
      title: '6. Data Security',
      paragraphs: [
        'We employ modern technical and organizational measures to safeguard your information against unauthorized access, loss, or alteration. All web transmissions between your browser and vtuberdesign.co.au are encrypted using Transport Layer Security (TLS/HTTPS).',
        'While we adhere to robust security engineering standards, no internet transmission can be guaranteed completely immune to external vulnerabilities. We encourage using secure corporate communication channels for sensitive intellectual property.',
      ],
    },
    {
      id: 'your-rights',
      title: '7. Your Rights Under Australian Privacy Law',
      paragraphs: [
        'Under the Australian Privacy Principles (APPs) established under the Privacy Act 1988 (Cth), you possess rights concerning your personal data, including:',
      ],
      bullets: [
        'The right to request confirmation of whether we hold your personal information and access a copy.',
        'The right to request rectification of inaccurate or incomplete contact records.',
        'The right to request erasure or correction of your personal data where retention is no longer necessary.',
        'The right to lodge an inquiry or complaint with the Office of the Australian Information Commissioner (OAIC).',
      ],
    },
    {
      id: 'updates-contact',
      title: '8. Policy Updates & Inquiries',
      paragraphs: [
        'We may revise this Privacy Policy periodically to reflect architectural enhancements or regulatory adjustments. Revisions will be reflected on this page with an updated effective date.',
        'To exercise any of your data rights or ask questions regarding this policy, please reach out via our project enquiry form at vtuberdesign.co.au/contact or via hello@vtuberdesign.co.au.',
      ],
    },
  ],
};

export const COOKIE_POLICY_DATA: LegalDocument = {
  title: 'Cookie Policy',
  eyebrow: 'GOVERNANCE & TRUST // COOKIES',
  lastUpdated: '10 October 2026',
  effectiveDate: '1 October 2026',
  summary:
    'This Cookie Policy explains how vtuberdesign.co.au uses cookies and browser storage technologies. We believe in minimal data footprint: our website currently deploys strictly essential technical mechanisms only.',
  sections: [
    {
      id: 'what-are-cookies',
      title: '1. What Are Cookies and Local Storage?',
      paragraphs: [
        'Cookies are small text files placed on your device by websites you visit. They are widely used to ensure websites function properly, remember user preferences, and provide diagnostic performance metrics.',
        'Modern web platforms may also utilize HTML5 Local Storage or Session Storage to maintain temporary client-side interface state without sending data on every HTTP header.',
      ],
    },
    {
      id: 'how-we-use-cookies',
      title: '2. How VTuber Design Uses Storage Technologies',
      paragraphs: [
        'VTuber Design maintains a minimal, privacy-first technical footprint. We currently utilize only strictly essential technologies required for website operation, navigation state, and form progression.',
        'We do not currently deploy non-essential third-party analytics cookies, advertising trackers, or behavioral profiling pixels on vtuberdesign.co.au.',
      ],
    },
    {
      id: 'essential-cookies',
      title: '3. Essential Storage Mechanisms',
      paragraphs: [
        'Essential technologies are strictly necessary for core functionality and security. Because they are required for the site to operate, they do not require consent under Australian privacy regulations:',
      ],
      bullets: [
        'Session Progression: Temporary memory state to retain form steps as you navigate the multi-stage project builder.',
        'Security & Rate Limiting: Ephemeral server-side IP tracking to protect against automated spam and denial-of-service attempts.',
        'Theme & Visual Preferences: Local storage tokens to preserve dark-mode rendering and reduced-motion user preferences.',
      ],
    },
    {
      id: 'future-tracking',
      title: '4. Non-Essential Analytics & Marketing Notice',
      paragraphs: [
        'If VTuber Design introduces non-essential analytics (such as aggregate visitor telemetry) or marketing cookies in the future, this policy will be updated and an accessible cookie consent management banner will be implemented prior to activating any tracking code.',
        'No tracking cookies will ever be placed on your machine without appropriate prior notice.',
      ],
    },
    {
      id: 'managing-cookies',
      title: '5. How to Control and Manage Cookies',
      paragraphs: [
        'You can configure your browser to block or alert you about cookies. Most modern browsers allow you to inspect, manage, and delete stored cookies and local storage through their privacy settings.',
        'Please note that disabling strictly essential storage may cause certain interactive components (such as multi-step form state) to function with reduced stability.',
      ],
    },
    {
      id: 'contact',
      title: '6. Inquiries Regarding Cookies',
      paragraphs: [
        'For questions regarding our use of storage technologies, please submit an enquiry through our contact portal at vtuberdesign.co.au/contact or via hello@vtuberdesign.co.au.',
      ],
    },
  ],
};

export const TERMS_DATA: LegalDocument = {
  title: 'Terms of Service',
  eyebrow: 'GOVERNANCE & TRUST // TERMS',
  lastUpdated: '10 October 2026',
  effectiveDate: '1 October 2026',
  summary:
    'These Terms of Service govern your access to and use of vtuberdesign.co.au. By accessing our platform, you agree to comply with these terms and applicable Australian regulations.',
  sections: [
    {
      id: 'introduction',
      title: '1. Agreement to Terms',
      paragraphs: [
        'These terms constitute a binding agreement between you and VTuber Design governing your use of the website at vtuberdesign.co.au. If you do not agree with any part of these terms, you should discontinue using this website.',
        'Specific commercial engineering engagements, development deliverables, and consulting retainers are governed by separate, formally executed Statements of Work (SOW) and Master Services Agreements (MSA).',
      ],
    },
    {
      id: 'intellectual-property',
      title: '2. Intellectual Property Rights',
      paragraphs: [
        'All intellectual property rights in the website, including its brand identity, logos, visual layouts, editorial articles, custom graphics, typography systems, and underlying source code, are owned by or licensed to VTuber Design.',
        'You may view and share links to publicly available content for personal or internal evaluation purposes. You may not reproduce, distribute, reverse-engineer, or commercially exploit any material from this website without prior written permission from VTuber Design.',
      ],
    },
    {
      id: 'project-enquiries',
      title: '3. Project Enquiries & Scope Discussions',
      paragraphs: [
        'Submitting a project enquiry through our website does not create a binding commercial obligation for VTuber Design to undertake work, nor does it guarantee specific delivery timescales or pricing.',
        'Initial discovery dialogues, indicative cost ranges, and architectural suggestions provided prior to a signed contract are exploratory in nature. Formal commercial agreements require a mutually executed written contract.',
      ],
    },
    {
      id: 'acceptable-use',
      title: '4. Acceptable Website Use',
      paragraphs: [
        'When using this website, you agree not to:',
      ],
      bullets: [
        'Attempt to circumvent or disable security measures, rate-limiting systems, or server integrity controls.',
        'Inject malicious payloads, automated bots, scrapers, or excessive traffic intended to degrade server availability.',
        'Submit fabricated, misleading, or defamatory contact details through the project enquiry portal.',
        'Misrepresent affiliation with VTuber Design or claim unauthorized partnership status.',
      ],
    },
    {
      id: 'demonstration-materials',
      title: '5. Information Accuracy & Case Previews',
      paragraphs: [
        'We endeavor to ensure all technical editorial content, service specifications, and architectural diagrams are accurate and informative. However, information is provided on an "as is" basis for general guidance.',
        'Certain case studies and insights are designated as "Previews" or "Architectural Demonstrations" illustrating methodology and technology capabilities. They should not be construed as warranties of specific business outcomes.',
      ],
    },
    {
      id: 'limitation-of-liability',
      title: '6. Limitation of Liability',
      paragraphs: [
        'To the maximum extent permitted by Australian law, VTuber Design excludes all liability for any indirect, consequential, or incidental loss or damage arising out of your access to, use of, or inability to use this website.',
        'Nothing in these terms limits or excludes liability that cannot be excluded under the Australian Consumer Law (Competition and Consumer Act 2010), fraud, or fraudulent misrepresentation.',
      ],
    },
    {
      id: 'governing-law',
      title: '7. Governing Law & Jurisdiction',
      paragraphs: [
        'These terms, and any dispute or claim arising out of or in connection with them or their subject matter, shall be governed by and construed in accordance with the laws of New South Wales, Australia.',
        'The courts of New South Wales and the federal courts of Australia shall have exclusive jurisdiction to settle any dispute or claim arising out of or in connection with these terms.',
      ],
    },
    {
      id: 'changes-to-terms',
      title: '8. Changes to These Terms',
      paragraphs: [
        'We reserve the right to modify these terms at any time. Continued use of vtuberdesign.co.au following the posting of revised terms indicates your acceptance of the updated conditions.',
      ],
    },
  ],
};
