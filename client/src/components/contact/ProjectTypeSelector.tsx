import React from 'react';
import { PROJECT_TYPE_OPTIONS, ProjectTypeOption } from '@/data/contactData';
import { Check, Sparkles } from 'lucide-react';

interface ProjectTypeSelectorProps {
  selectedTypes: string[];
  onChange: (types: string[]) => void;
  error?: string;
}

export const ProjectTypeSelector: React.FC<ProjectTypeSelectorProps> = ({
  selectedTypes,
  onChange,
  error,
}) => {
  const toggleType = (id: string) => {
    if (id === 'not-sure') {
      // If user clicks "not sure", toggle it exclusively or add it
      if (selectedTypes.includes('not-sure')) {
        onChange(selectedTypes.filter((t) => t !== 'not-sure'));
      } else {
        onChange(['not-sure']);
      }
      return;
    }

    // If another option is clicked, remove 'not-sure' if present
    const withoutNotSure = selectedTypes.filter((t) => t !== 'not-sure');
    if (withoutNotSure.includes(id)) {
      onChange(withoutNotSure.filter((t) => t !== id));
    } else {
      onChange([...withoutNotSure, id]);
    }
  };

  return (
    <fieldset className="space-y-6">
      <legend className="text-xl sm:text-2xl font-bold text-white tracking-tight">
        What type of digital project are you planning?
      </legend>
      <p className="text-sm text-space-muted leading-relaxed">
        Select all disciplines that apply to your requirements. We engineer multidisciplinary systems tailored to your roadmap.
      </p>

      {error && (
        <div
          role="alert"
          id="project-types-error"
          className="p-3 rounded-lg bg-red-950/40 border border-red-500/40 text-xs font-mono text-red-400"
        >
          {error}
        </div>
      )}

      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        aria-describedby={error ? 'project-types-error' : undefined}
      >
        {PROJECT_TYPE_OPTIONS.map((option: ProjectTypeOption) => {
          const isSelected = selectedTypes.includes(option.id);

          return (
            <button
              key={option.id}
              type="button"
              aria-pressed={isSelected}
              onClick={() => toggleType(option.id)}
              className={`p-5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between group focus:outline-none focus:ring-2 focus:ring-cyan-400/50 ${
                isSelected
                  ? 'bg-cyan-950/60 border-cyan-400 text-white shadow-lg shadow-cyan-950/40'
                  : 'bg-[#061F25]/80 border-white/[0.08] hover:border-cyan-500/40 text-slate-300 hover:text-white'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded border ${
                      isSelected
                        ? 'bg-cyan-900/40 text-cyan-300 border-cyan-500/30 font-semibold'
                        : 'bg-[#061F25]/60 text-slate-400 border-white/[0.08]'
                    }`}
                  >
                    {option.category}
                  </span>

                  <div
                    className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                      isSelected
                        ? 'bg-cyan-400 text-[#001119] border-cyan-400'
                        : 'border-white/20 group-hover:border-cyan-400/50'
                    }`}
                    aria-hidden="true"
                  >
                    {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                </div>

                <h3 className="text-base font-bold text-white tracking-tight mb-1.5 font-sans">
                  {option.label}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed font-normal font-sans">
                  {option.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
};
