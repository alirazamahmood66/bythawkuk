import React from 'react';
import { Sparkles } from 'lucide-react';

export const WorkHero: React.FC = () => {
  return (
    <section className="relative pt-8 pb-14 md:pt-14 md:pb-20 overflow-hidden border-b border-white/[0.08]">
      {/* Ambient background glow */}
      <div
        className="absolute top-0 right-1/4 w-[500px] h-[350px] rounded-full opacity-15 blur-[120px] pointer-events-none -z-10"
        style={{ background: 'radial-gradient(circle, #06b6d4 0%, #8b5cf6 50%, transparent 70%)' }}
      />

      {/* Decorative Constellation Vectors */}
      <div className="absolute inset-0 pointer-events-none opacity-20 -z-10" aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="10%" y1="20%" x2="40%" y2="40%" stroke="#06b6d4" strokeWidth="1" strokeDasharray="4 6" />
          <line x1="40%" y1="40%" x2="70%" y2="25%" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="4 6" />
          <line x1="40%" y1="40%" x2="50%" y2="80%" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="10%" cy="20%" r="3" fill="#06b6d4" />
          <circle cx="40%" cy="40%" r="4" fill="#38bdf8" />
          <circle cx="70%" cy="25%" r="3" fill="#8b5cf6" />
          <circle cx="50%" cy="80%" r="3" fill="#10b981" />
        </svg>
      </div>

      <div className="max-w-3xl space-y-6">
        {/* Eyebrow */}
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 shadow-sm backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-xs font-mono font-medium tracking-wider text-cyan-300 uppercase">
            BYTHAWK // SELECTED WORK
          </span>
        </div>

        {/* Primary Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1] font-sans">
          Digital Experiences <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white to-violet-400">
            Built to Move.
          </span>
        </h1>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl font-sans">
          A selection of digital products, platforms, and architectural blueprints shaped through strategic discovery, user-centered interface craft, and rigorous UK engineering.
        </p>
      </div>
    </section>
  );
};
