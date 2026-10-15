/**
 * VTUBER DESIGN Design System — Tokens
 * Domain: vtuberdesign.co.au
 * Creative Direction: Cinematic deep-space, precision technology, restrained elegance
 */

export const colors = {
  // Primary Environment (Solar Gold & Neutral Obsidian — VTuber Design)
  background: {
    deep: '#040407',      // Neutral Obsidian Void (zero blue dominance)
    navy: '#040407',      // Neutral Obsidian Void
    surface: '#0B0C10',   // Neutral Dark Charcoal Glass
    elevated: '#12131A',  // Elevated dropdowns, modals, floating panels
    sunken: '#020204',    // Deep sunken inputs, code blocks
  },

  // Glassmorphic Overlays (Translucent with blur)
  glass: {
    base: 'rgba(11, 12, 16, 0.72)',
    elevated: 'rgba(14, 15, 20, 0.92)',
    subtle: 'rgba(245, 158, 11, 0.05)',
    highlight: 'rgba(245, 158, 11, 0.1)',
  },

  // Borders (Precision micro-borders)
  border: {
    subtle: 'rgba(245, 158, 11, 0.14)',
    medium: 'rgba(245, 158, 11, 0.28)',
    accent: 'rgba(251, 191, 36, 0.45)',    // Solar Flare gold glow border
    gold: 'rgba(245, 158, 11, 0.4)',       // Solar Gold border
    active: 'rgba(245, 158, 11, 0.65)',    // Active interactive border
  },

  // Typography Hierarchy
  text: {
    primary: '#FFFBEB',    // Warm Starlight White
    secondary: '#CBD5E1',  // Refined Slate Silver
    muted: '#94A3B8',      // Subdued metadata & telemetry
    accentGold: '#F59E0B', // Solar Gold
    accentFlare: '#FBBF24',// Solar Flare
    inverse: '#040407',    // Obsidian Void
  },

  // Accents (Solar Gold & Neutral Obsidian Palette — VTuber Design)
  accent: {
    solarGold: '#F59E0B',    // Primary Brand Solar Gold
    solarFlare: '#FBBF24',   // Solar Flare / Highlight
    sunsetAmber: '#EA580C',  // Deep Sunset Amber
    goldLight: '#FDE047',    // Light Gold
    obsidianVoid: '#040407', // Neutral Obsidian Void
    obsidianGlass: '#0B0C10',// Dark Obsidian Glass
    starlightWhite: '#FFFBEB',// Warm White
    white: '#ffffff',
  },

  // Semantic Alerts
  semantic: {
    success: '#10b981',
    warning: '#F59E0B',
    error: '#ef4444',
    info: '#38bdf8',
  },
} as const;

export const typography = {
  fontFamily: {
    sans: "'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    mono: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
  },
  lineHeight: {
    tight: '1.1',
    snug: '1.25',
    normal: '1.5',
    relaxed: '1.65',
  },
  letterSpacing: {
    tighter: '-0.04em',
    tight: '-0.02em',
    normal: '0em',
    wide: '0.04em',
    wider: '0.08em',
    widest: '0.14em', // For technical labels & badges
  },
} as const;

export const spacing = {
  section: {
    compact: 'py-12 sm:py-16',
    standard: 'py-16 sm:py-24',
    spacious: 'py-20 sm:py-32',
    cinematic: 'py-28 sm:py-40',
  },
  container: {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-[1440px]',
  },
} as const;

export const motionTokens = {
  duration: {
    instant: 0.1,
    fast: 0.2,
    base: 0.35,
    cinematic: 0.65,
    slow: 1.0,
  },
  easing: {
    cinematic: [0.16, 1, 0.3, 1] as const, // Custom cubic-bezier for smooth inertia
    easeOut: [0, 0, 0.2, 1] as const,
    easeInOut: [0.4, 0, 0.2, 1] as const,
  },
} as const;
