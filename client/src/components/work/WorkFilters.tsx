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
      className="py-6 border-b border-[#FFFBEB]/[0.08]"
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
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/50 ${
                isSelected
                  ? 'bg-[#EA580C]/40 text-[#FBBF24] border border-[#F59E0B] font-semibold shadow-md'
                  : 'bg-[#070D18]/80 text-[#FFFBEB]/70 hover:text-[#FFFBEB] hover:bg-[#070D18] border border-[#FFFBEB]/[0.08] hover:border-[#F59E0B]/40'
              }`}
            >
              <span>{category.label}</span>
              <span
                className={`ml-2 text-[10px] px-1.5 py-0.5 rounded-full ${
                  isSelected
                    ? 'bg-[#F59E0B]/20 text-[#FBBF24] font-bold'
                    : 'bg-[#FFFBEB]/[0.08] text-[#FFFBEB]/60'
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
