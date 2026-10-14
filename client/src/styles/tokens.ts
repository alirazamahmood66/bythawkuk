/**
 * BYTHAWK Design System — Tokens
 * Domain: bythawk.uk
 * Creative Direction: Cinematic deep-space, precision technology, restrained elegance
 */

export const colors = {
  // Primary Environment (Deep Space, Dark Navy, Subtle Surfaces)
  background: {
    deep: '#030712',      // Cosmic void baseline
    navy: '#050b18',      // Deep navy background layer
    surface: '#0b1329',   // Standard card/panel surface
    elevated: '#101c3d',  // Elevated dropdowns, modals, floating panels
    sunken: '#02040a',    // Sunken inputs, code blocks
  },

  // Glassmorphic Overlays (Translucent with blur)
  glass: {
    base: 'rgba(11, 19, 41, 0.65)',
    elevated: 'rgba(16, 28, 61, 0.75)',
    subtle: 'rgba(255, 255, 255, 0.03)',
    highlight: 'rgba(255, 255, 255, 0.06)',
  },

  // Borders (Precision micro-borders)
  border: {
    subtle: 'rgba(255, 255, 255, 0.08)',
    medium: 'rgba(255, 255, 255, 0.14)',
    accent: 'rgba(6, 182, 212, 0.35)',      // Cyan subtle glow border
    violet: 'rgba(139, 92, 246, 0.35)',     // Violet accent border
    active: 'rgba(56, 189, 248, 0.6)',      // Active interactive border
  },

  // Typography Hierarchy
  text: {
    primary: '#f8fafc',    // Clean high-contrast white
    secondary: '#cbd5e1',  // Refined slate
    muted: '#64748b',      // Subdued metadata & telemetry
    accentCyan: '#38bdf8', // Interactive electric cyan
    accentViolet: '#c084fc',
    inverse: '#030712',    // Inverse dark on bright accent buttons
  },

  // Accents (Restrained, high-tech palette — NOT gaming neon)
  accent: {
    cyan: '#06b6d4',          // Brand primary accent
    cyanHover: '#22d3ee',
    electricBlue: '#0284c7',  // Deep propulsion blue
    violet: '#8b5cf6',        // Nebula violet secondary
    violetHover: '#a78bfa',
    white: '#ffffff',
  },

  // Semantic Alerts
  semantic: {
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#06b6d4',
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
