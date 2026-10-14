export interface PlanetTheme {
  id: string;
  planet: string;
  /** Hex accent used for the nav marker and scroll tracker. */
  hex: string;
  /** "r, g, b" triplet used inside rgba() nebula gradients. */
  rgb: string;
}

const THEMES: Record<string, PlanetTheme> = {
  home: { id: 'home', planet: 'Sun', hex: '#fbbf24', rgb: '251, 191, 36' },
  services: { id: 'services', planet: 'Mercury', hex: '#22d3ee', rgb: '34, 211, 238' },
  solutions: { id: 'solutions', planet: 'Venus', hex: '#a78bfa', rgb: '167, 139, 250' },
  work: { id: 'work', planet: 'Mars', hex: '#fb7a54', rgb: '251, 122, 84' },
  about: { id: 'about', planet: 'Earth', hex: '#38bdf8', rgb: '56, 189, 248' },
  process: { id: 'process', planet: 'Jupiter', hex: '#f59e0b', rgb: '245, 158, 11' },
  insights: { id: 'insights', planet: 'Saturn', hex: '#facc15', rgb: '250, 204, 21' },
  contact: { id: 'contact', planet: 'Neptune', hex: '#6366f1', rgb: '99, 102, 241' },
};

const DEFAULT_THEME: PlanetTheme = {
  id: 'default',
  planet: 'Deep Space',
  hex: '#20d9f3',
  rgb: '32, 217, 243',
};

export function getPlanetTheme(pathname: string): PlanetTheme {
  if (pathname === '/') return THEMES.home;
  const first = pathname.split('/').filter(Boolean)[0];
  return THEMES[first] ?? DEFAULT_THEME;
}
