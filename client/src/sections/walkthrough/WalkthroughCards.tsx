import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

/* Corner reticles — the signature HUD detail used across the site cards */
const Reticles: React.FC<{ color: string }> = ({ color }) => (
  <>
    {[
      'top-2.5 left-2.5 border-t border-l',
      'top-2.5 right-2.5 border-t border-r',
      'bottom-2.5 left-2.5 border-b border-l',
      'bottom-2.5 right-2.5 border-b border-r',
    ].map((c) => (
      <span key={c} className={`absolute w-3 h-3 ${c} pointer-events-none`} style={{ borderColor: `${color}99` }} />
    ))}
  </>
);

const GlassShell: React.FC<{ color: string; children: React.ReactNode }> = ({ color, children }) => (
  <div className="relative w-full max-w-[420px] rounded-2xl overflow-hidden bg-[#040b18]/60 backdrop-blur-xl border border-white/[0.1] shadow-[0_20px_80px_-20px_rgba(0,0,0,0.8)]">
    {/* accent beam on top edge */}
    <div className="absolute inset-x-0 top-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />
    {/* soft accent glow in the corner */}
    <div
      className="absolute -top-24 -right-24 w-56 h-56 rounded-full blur-3xl opacity-25 pointer-events-none"
      style={{ background: color }}
    />
    <Reticles color={color} />
    <div className="relative p-6 sm:p-7">{children}</div>
  </div>
);

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */
export const HeroCard: React.FC = () => (
  <GlassShell color="#22d3ee">
    <div className="flex items-center gap-2 text-[10px] font-mono tracking-[0.2em] text-amber-300 mb-5">
      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
      DIGITAL STUDIO &bull; LONDON, UK
    </div>

    <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.04] font-sans">
      We build
      <br />
      <span className="bg-gradient-to-r from-[#FDE047] via-[#F59E0B] to-[#EA580C] bg-clip-text text-transparent">
        digital worlds.
      </span>
    </h1>

    <p className="mt-4 text-sm text-slate-300/90 leading-relaxed">
      Websites, apps, e-commerce and growth &mdash; each one a planet in our system. Scroll to travel through them.
    </p>

    <div className="mt-6 flex flex-wrap items-center gap-3">
      <Link
        to="/contact"
        className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-slate-950 bg-gradient-to-r from-[#FBBF24] to-[#D97706] shadow-lg shadow-amber-500/25 hover:shadow-cyan-400/40 transition-all"
      >
        Start a project
        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
      </Link>
      <Link
        to="/services"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-slate-200 border border-white/[0.14] hover:border-amber-400/50 hover:text-white transition-all"
      >
        All services
      </Link>
    </div>

    <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center gap-2 text-[10px] font-mono text-slate-400 tracking-wider">
      <span>SCROLL TO LAUNCH</span>
      <span className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
      <span className="text-amber-300">01 / 07</span>
    </div>
  </GlassShell>
);

/* ------------------------------------------------------------------ */
/* One planet = one service                                            */
/* ------------------------------------------------------------------ */
export interface ServiceStation {
  index: number; // 1..6
  planet: string;
  color: string;
  title: string;
  line: string;
  tags: string[];
  route: string;
}

export const SERVICE_STATIONS: ServiceStation[] = [
  {
    index: 1, planet: 'EARTH', color: '#4ea8ff', title: 'Web Development',
    line: 'Fast, beautiful websites that turn visitors into customers.',
    tags: ['Next.js', 'React', 'Sub-second'], route: '/services/web-development',
  },
  {
    index: 2, planet: 'MARS', color: '#ff7a4d', title: 'Web Applications',
    line: 'Dashboards, portals and SaaS built to scale.',
    tags: ['SaaS', 'APIs', 'Cloud'], route: '/services/web-applications',
  },
  {
    index: 3, planet: 'JUPITER', color: '#e8b27a', title: 'Mobile Apps',
    line: 'iOS and Android apps people actually keep using.',
    tags: ['iOS', 'Android', 'Offline-first'], route: '/services/mobile-app-development',
  },
  {
    index: 4, planet: 'SATURN', color: '#f2d58a', title: 'E-commerce',
    line: 'Stores engineered for speed, trust and repeat orders.',
    tags: ['Checkout', 'Payments', 'Headless'], route: '/services/ecommerce',
  },
  {
    index: 5, planet: 'URANUS', color: '#7fe3ee', title: 'Marketing & SEO',
    line: 'Search and paid growth that brings in qualified leads.',
    tags: ['SEO', 'Paid Ads', 'Analytics'], route: '/services/digital-marketing',
  },
  {
    index: 6, planet: 'NEPTUNE', color: '#7c8cff', title: 'UI/UX & Brand Design',
    line: 'Interfaces and identities that feel premium and clear.',
    tags: ['UX', 'Design systems', 'Branding'], route: '/services/ui-ux-design',
  },
];

export const ServiceStationCard: React.FC<{ s: ServiceStation }> = ({ s }) => (
  <GlassShell color={s.color}>
    {/* giant ghost index */}
    <span
      className="absolute top-3 right-5 text-7xl font-black font-mono leading-none select-none pointer-events-none"
      style={{ color: `${s.color}1f` }}
    >
      0{s.index}
    </span>

    <div className="flex items-center gap-2 mb-4">
      <span className="w-2 h-2 rounded-full" style={{ background: s.color, boxShadow: `0 0 12px ${s.color}` }} />
      <span className="text-[10px] font-mono tracking-[0.22em]" style={{ color: s.color }}>
        {s.planet} &middot; SERVICE 0{s.index}
      </span>
    </div>

    <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight font-sans pr-12">
      {s.title}
    </h2>
    <p className="mt-3 text-sm text-slate-300/90 leading-relaxed">{s.line}</p>

    <div className="mt-4 flex flex-wrap gap-1.5">
      {s.tags.map((t) => (
        <span
          key={t}
          className="px-2.5 py-1 rounded-md text-[10px] font-mono text-slate-200 bg-white/[0.05] border border-white/[0.1]"
        >
          {t}
        </span>
      ))}
    </div>

    <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between">
      <Link
        to={s.route}
        className="group inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
      >
        Explore {s.title.split(' ')[0]}
        <ArrowUpRight
          className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          style={{ color: s.color }}
        />
      </Link>
      <span className="text-[10px] font-mono text-slate-500 tracking-wider">0{s.index + 1} / 07</span>
    </div>
  </GlassShell>
);
