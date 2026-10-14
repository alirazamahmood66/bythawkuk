export interface ContactInput {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  website?: string;
  projectTypes: string[];
  description: string;
  budget?: string;
  timeline?: string;
  honeypot?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
  sanitizedData?: ContactInput;
  isSpam?: boolean;
}

export const ALLOWED_PROJECT_TYPES = [
  'new-website',
  'web-applications',
  'ecommerce',
  'mobile-app',
  'digital-marketing',
  'seo',
  'graphic-design',
  'ui-ux-design',
  'custom-project',
  'not-sure',
] as const;

export const ALLOWED_BUDGET_RANGES = [
  'under-5k',
  '5k-10k',
  '10k-25k',
  '25k-50k',
  '50k-plus',
  'not-sure',
  '',
] as const;

export const ALLOWED_TIMELINES = [
  'asap',
  'within-1-month',
  '1-3-months',
  '3-6-months',
  'flexible',
  'not-sure',
  '',
] as const;

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

function sanitizeString(str: unknown): string {
  if (typeof str !== 'string') return '';
  // Strip raw HTML tags and normalize whitespace
  return str.replace(/<[^>]*>/g, '').trim();
}

function isValidUrl(val: string): boolean {
  if (!val) return true;
  try {
    const url = val.startsWith('http://') || val.startsWith('https://') ? val : `https://${val}`;
    const parsed = new URL(url);
    return Boolean(parsed.hostname && parsed.hostname.includes('.'));
  } catch {
    return false;
  }
}

export function validateContactEnquiry(rawBody: unknown): ValidationResult {
  const errors: Record<string, string> = {};

  if (!rawBody || typeof rawBody !== 'object') {
    return {
      isValid: false,
      errors: { form: 'Invalid submission payload' },
    };
  }

  const body = rawBody as Record<string, unknown>;

  // Honeypot trap check
  const honeypot = sanitizeString(body.honeypot || body.company_fax);
  if (honeypot.length > 0) {
    return {
      isValid: false,
      isSpam: true,
      errors: { honeypot: 'Automated submission rejected' },
    };
  }

  // Name validation
  const name = sanitizeString(body.name);
  if (!name) {
    errors.name = 'Please provide your full name.';
  } else if (name.length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  } else if (name.length > 100) {
    errors.name = 'Name must not exceed 100 characters.';
  }

  // Email validation
  const email = sanitizeString(body.email).toLowerCase();
  if (!email) {
    errors.email = 'Please provide your email address.';
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = 'Please enter a valid email address.';
  } else if (email.length > 255) {
    errors.email = 'Email address is too long.';
  }

  // Description validation
  const description = sanitizeString(body.description);
  if (!description) {
    errors.description = 'Please describe your project or operational challenge.';
  } else if (description.length < 10) {
    errors.description = 'Project description must be at least 10 characters.';
  } else if (description.length > 3000) {
    errors.description = 'Project description must not exceed 3,000 characters.';
  }

  // Project Types validation
  const rawProjectTypes = body.projectTypes;
  let projectTypes: string[] = [];

  if (Array.isArray(rawProjectTypes)) {
    projectTypes = rawProjectTypes
      .map(sanitizeString)
      .filter((pt) => (ALLOWED_PROJECT_TYPES as readonly string[]).includes(pt));
  }

  if (projectTypes.length === 0) {
    errors.projectTypes = 'Please select at least one project discipline or option.';
  }

  // Website validation (optional)
  const website = sanitizeString(body.website);
  if (website) {
    if (website.length > 255) {
      errors.website = 'Website URL must not exceed 255 characters.';
    } else if (!isValidUrl(website)) {
      errors.website = 'Please enter a valid website URL.';
    }
  }

  // Company validation (optional)
  const company = sanitizeString(body.company);
  if (company && company.length > 150) {
    errors.company = 'Company name must not exceed 150 characters.';
  }

  // Phone validation (optional)
  const phone = sanitizeString(body.phone);
  if (phone && phone.length > 50) {
    errors.phone = 'Phone number must not exceed 50 characters.';
  }

  // Budget validation (optional)
  const budget = sanitizeString(body.budget);
  if (budget && !(ALLOWED_BUDGET_RANGES as readonly string[]).includes(budget)) {
    errors.budget = 'Please select a valid budget range option.';
  }

  // Timeline validation (optional)
  const timeline = sanitizeString(body.timeline);
  if (timeline && !(ALLOWED_TIMELINES as readonly string[]).includes(timeline)) {
    errors.timeline = 'Please select a valid timeline option.';
  }

  const isValid = Object.keys(errors).length === 0;

  return {
    isValid,
    errors,
    sanitizedData: isValid
      ? {
          name,
          email,
          phone,
          company,
          website,
          projectTypes,
          description,
          budget,
          timeline,
        }
      : undefined,
  };
}
