import React from 'react';
import { Link } from 'react-router-dom';
import type { ServiceCategory } from './navigationConfig';

interface MegaMenuSectionProps {
  category: ServiceCategory;
  onSelect?: () => void;
}

export const MegaMenuSection: React.FC<MegaMenuSectionProps> = ({
  category,
  onSelect,
}) => {
  return (
    <div className="flex flex-col space-y-3 p-3 rounded-xl transition-colors duration-200 hover:bg-white/[0.02]">
      {/* Category Header */}
      <div>
        <Link
          to={category.href}
          onClick={onSelect}
          className="group inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-cyan-400 hover:text-cyan-300 transition-colors focus-ring rounded"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-transform group-hover:scale-125" />
          <span>{category.title}</span>
        </Link>
        <p className="text-[11px] text-slate-400/90 leading-snug mt-1 font-sans pr-2">
          {category.description}
        </p>
      </div>

      {/* Sub-Items List */}
      <ul className="space-y-1.5 pt-1 border-t border-white/[0.04]" role="list">
        {category.items.map((item) => (
          <li key={item.title}>
            <Link
              to={item.href}
              onClick={onSelect}
              className="group flex items-center gap-2 text-xs text-slate-300 hover:text-white py-1 transition-all duration-150 focus-ring rounded"
            >
              {/* Subtle orbital node indicator on hover */}
              <span className="w-1 h-1 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-150 shrink-0 transform -translate-x-1 group-hover:translate-x-0" />
              <span className="transition-transform duration-150 group-hover:translate-x-1 font-sans">
                {item.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
