/**
 * BYTHAWK Design System — Tokens
 * Domain: bythawk.uk
 * Creative Direction: Cinematic deep-space, precision technology, restrained elegance
 */

export const colors = {
  // Primary Environment (Aqua Mint Palette — Bythawk)
  background: {
    deep: '#001119',      // Midnight Teal (cosmic void baseline)
    navy: '#001119',      // Midnight Teal
    surface: '#061F25',   // Dark Teal (standard card/panel surface)
    elevated: '#092c34',  // Elevated dropdowns, modals, floating panels
    sunken: '#000c12',    // Deep sunken inputs, code blocks
  },

  // Glassmorphic Overlays (Translucent with blur)
  glass: {
    base: 'rgba(6, 31, 37, 0.65)',
    elevated: 'rgba(6, 31, 37, 0.85)',
    subtle: 'rgba(232, 255, 252, 0.04)',
    highlight: 'rgba(232, 255, 252, 0.08)',
  },

  // Borders (Precision micro-borders)
  border: {
    subtle: 'rgba(232, 255, 252, 0.08)',
    medium: 'rgba(48, 241, 190, 0.2)',
    accent: 'rgba(35, 247, 219, 0.4)',      // Neon Cyan glow border
    mint: 'rgba(4, 163, 123, 0.4)',        // Aqua Mint border
    active: 'rgba(35, 247, 219, 0.6)',      // Active interactive border
  },

  // Typography Hierarchy
  text: {
    primary: '#E8FFFC',    // Ice White
    secondary: '#9edcd2',  // Refined mint-slate
    muted: '#5e948c',      // Subdued metadata & telemetry
    accentCyan: '#23F7DB', // Neon Cyan
    accentMint: '#30F1BE', // Neon Mint
    inverse: '#001119',    // Midnight Teal (inverse dark on bright accents)
  },

  // Accents (Official Aqua Mint Palette — Bythawk)
  accent: {
    deepAqua: '#008C6B',     // Deep Aqua Green
    aquaMint: '#04A37B',     // Aqua Mint
    neonMint: '#30F1BE',     // Neon Mint
    neonCyan: '#23F7DB',     // Neon Cyan
    iceWhite: '#E8FFFC',     // Ice White
    midnightTeal: '#001119', // Midnight Teal
    darkTeal: '#061F25',     // Dark Teal
    white: '#ffffff',
  },

  // Semantic Alerts
  semantic: {
    success: '#30F1BE',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#23F7DB',
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
