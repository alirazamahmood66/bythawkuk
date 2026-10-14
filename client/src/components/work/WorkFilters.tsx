import React from 'react';
import { WORK_CATEGORIES, WorkCategory } from '@/data/workData';

interface WorkFiltersProps {
  selectedCategory: WorkCategory | 'all';
  onSelectCategory: (category: WorkCategory | 'all') => void;
  projectCounts: Record<string, number>;
}

export const WorkFilters: React.FC<WorkFiltersProps> = ({
  selectedCategory,
  onSelectCategory,
  projectCounts,
}) => {
  return (
    <nav
      aria-label="Filter portfolio projects by category"
      className="py-6 border-b border-white/[0.08]"
    >
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none sm:flex-wrap">
        {WORK_CATEGORIES.map((category) => {
          const isSelected = selectedCategory === category.id;
          const count = projectCounts[category.id] ?? 0;

          // Don't show filter if no projects match and it's not "all"
          if (category.id !== 'all' && count === 0) {
            return null;
          }

          return (
            <button
              key={category.id}
              type="button"
              aria-pressed={isSelected}
              onClick={() => onSelectCategory(category.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-cyan-400/50 ${
                isSelected
                  ? 'bg-cyan-950/60 text-cyan-300 border border-cyan-400 font-semibold shadow-md shadow-cyan-950/40'
                  : 'bg-[#071426]/80 text-slate-300 hover:text-white hover:bg-[#0b1b32] border border-white/[0.08] hover:border-cyan-500/40'
              }`}
            >
              <span>{category.label}</span>
              <span
                className={`ml-2 text-[10px] px-1.5 py-0.5 rounded-full ${
                  isSelected
                    ? 'bg-cyan-400/20 text-cyan-300 font-bold'
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
