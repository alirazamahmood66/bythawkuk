import React from 'react';
import { Link } from 'react-router-dom';
import { HERO_SERVICE_PLANETS } from '@/3d/config/solarSystemConfig';
import { ArrowUpRight } from 'lucide-react';

interface AccessibleServiceNavProps {
  className?: string;
}

export const AccessibleServiceNav: React.FC<AccessibleServiceNavProps> = ({
  className = '',
}) => {
  return (
    <nav
      aria-label="Accessible Service Directory"
      className={`relative z-20 ${className}`}
    >
      <div className="flex flex-col space-y-2">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 font-semibold">
            Planetary Systems Directory (Keyboard Accessible)
          </span>
        </div>

        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2" role="list">
          {HERO_SERVICE_PLANETS.map((planet) => (
            <li key={planet.id}>
              <Link
                to={planet.route}
                className="group flex items-center justify-between p-2.5 rounded-lg bg-[#0B0C10]/80 hover:bg-[#101c3d]/90 border border-white/[0.08] hover:border-amber-500/40 transition-all duration-200 focus-ring"
                aria-label={`Explore ${planet.name} (${planet.category})`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span
                    className="w-2 h-2 rounded-full shrink-0 shadow-[0_0_6px_rgba(255,255,255,0.4)]"
                    style={{ backgroundColor: planet.color }}
                    aria-hidden="true"
                  />
                  <span className="text-xs font-semibold text-slate-300 group-hover:text-white truncate font-sans">
                    {planet.name}
                  </span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-300 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
