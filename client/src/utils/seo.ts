export const SITE_URL = 'https://vtuberdesign.co.au';

export interface SeoOptions {
  title: string;
  description: string;
  path: string;
  robots?: string;
  ogType?: 'website' | 'article';
  schema?: Record<string, unknown>;
}

/**
 * Returns a canonical URL normalized to the configured production origin.
 * Query parameters and trailing slashes (except root) are cleanly stripped.
 */
export function getCanonicalUrl(path: string): string {
  const cleanPath = path.split('?')[0].split('#')[0];
  const normalizedPath = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
  if (normalizedPath === '/' || normalizedPath === '') {
    return `${SITE_URL}/`;
  }
  return `${SITE_URL}${normalizedPath.replace(/\/+$/, '')}`;
}

/**
 * Manages document head tags for SEO, canonicalization, robots directives, and JSON-LD schema.
 * Designed to be called inside useEffect on page mount.
 */
export function applySeo(options: SeoOptions): () => void {
  // 1. Document Title
  document.title = options.title;

  // 2. Meta Description
  let metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.name = 'description';
    document.head.appendChild(metaDesc);
  }
  metaDesc.content = options.description;

  // 3. Canonical Link Tag
  let canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.href = getCanonicalUrl(options.path);

  // 4. Robots Meta Tag
  const robotsContent = options.robots || 'index, follow';
  let metaRobots = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
  if (!metaRobots) {
    metaRobots = document.createElement('meta');
    metaRobots.name = 'robots';
    document.head.appendChild(metaRobots);
  }
  metaRobots.content = robotsContent;

  // 5. Open Graph Meta Tags
  const ogTitle = ensureMeta('property', 'og:title');
  ogTitle.content = options.title;

  const ogDesc = ensureMeta('property', 'og:description');
  ogDesc.content = options.description;

  const ogUrl = ensureMeta('property', 'og:url');
  ogUrl.content = getCanonicalUrl(options.path);

  const ogType = ensureMeta('property', 'og:type');
  ogType.content = options.ogType || 'website';

  // 6. Schema.org JSON-LD
  const schemaId = 'vtuber design-seo-schema';
  let schemaScript = document.getElementById(schemaId) as HTMLScriptElement | null;
  if (options.schema) {
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.type = 'application/ld+json';
      schemaScript.id = schemaId;
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(options.schema);
  } else if (schemaScript) {
    schemaScript.remove();
  }

  // Cleanup on unmount
  return () => {
    document.title = 'VTuber Design — Digital Technology Studio | Web, Apps, E-commerce & Growth';
    const activeSchema = document.getElementById(schemaId);
    if (activeSchema) {
      activeSchema.remove();
    }
  };
}

function ensureMeta(attribute: 'name' | 'property', value: string): HTMLMetaElement {
  let element = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${value}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }
  return element;
}
