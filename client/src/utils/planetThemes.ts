export interface PlanetTheme {
  id: string;
  planet: string;
  /** Hex accent used for the nav marker and scroll tracker. */
  hex: string;
  /** "r, g, b" triplet used inside rgba() nebula gradients. */
  rgb: string;
}

const THEMES: Record<string, PlanetTheme> = {
  home: { id: 'home', planet: 'Sun', hex: '#F59E0B', rgb: '245, 158, 11' },
  services: { id: 'services', planet: 'Mercury', hex: '#FBBF24', rgb: '251, 191, 36' },
  solutions: { id: 'solutions', planet: 'Venus', hex: '#FDE047', rgb: '253, 224, 71' },
  work: { id: 'work', planet: 'Mars', hex: '#EA580C', rgb: '234, 88, 12' },
  about: { id: 'about', planet: 'Earth', hex: '#D97706', rgb: '217, 119, 6' },
  process: { id: 'process', planet: 'Jupiter', hex: '#F59E0B', rgb: '245, 158, 11' },
  insights: { id: 'insights', planet: 'Saturn', hex: '#FBBF24', rgb: '251, 191, 36' },
  contact: { id: 'contact', planet: 'Neptune', hex: '#F59E0B', rgb: '245, 158, 11' },
};

const DEFAULT_THEME: PlanetTheme = {
  id: 'default',
  planet: 'Deep Space',
  hex: '#F59E0B',
  rgb: '245, 158, 11',
};

export function getPlanetTheme(pathname: string): PlanetTheme {
  if (pathname === '/') return THEMES.home;
  const first = pathname.split('/').filter(Boolean)[0];
  return THEMES[first] ?? DEFAULT_THEME;
}
