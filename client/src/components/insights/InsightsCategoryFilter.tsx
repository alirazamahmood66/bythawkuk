import React from 'react';
import { INSIGHT_CATEGORIES, InsightCategorySlug } from '@/data/insightsData';

interface InsightsCategoryFilterProps {
  activeCategory: InsightCategorySlug;
  onSelectCategory: (category: InsightCategorySlug) => void;
  countsByCategory: Record<string, number>;
}

export const InsightsCategoryFilter: React.FC<InsightsCategoryFilterProps> = ({
  activeCategory,
  onSelectCategory,
  countsByCategory,
}) => {
  return (
    <nav
      aria-label="Insights category filter"
      className="py-6 border-b border-white/[0.08] overflow-x-auto scrollbar-none"
    >
      <div className="flex items-center gap-2 min-w-max">
        {INSIGHT_CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          const count = countsByCategory[cat.id] ?? 0;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelectCategory(cat.id)}
              aria-pressed={isActive}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 flex items-center space-x-2 ${
                isActive
                  ? 'bg-cyan-400 text-[#030712] font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-[#071426]/80 hover:bg-[#0b1b32] text-slate-300 hover:text-white border border-white/[0.08] hover:border-cyan-500/40'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                  isActive
                    ? 'bg-black/20 text-[#030712] font-bold'
                    : 'bg-white/[0.08] text-slate-400'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
