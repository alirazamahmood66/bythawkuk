import React from 'react';
import { Card } from '@/components/ui/Card';
import { WorkOutcome } from '@/data/workData';

interface ProjectOutcomesProps {
  outcomes?: WorkOutcome[];
  accentColor: string;
}

export const ProjectOutcomes: React.FC<ProjectOutcomesProps> = ({ outcomes, accentColor }) => {
  // Strictly conditional: never render section if no verified outcomes are provided
  if (!outcomes || outcomes.length === 0) {
    return null;
  }

  return (
    <section className="py-12 md:py-16 border-b border-white/[0.08]">
      <div className="max-w-3xl mb-8">
        <span className="text-xs font-mono tracking-wider text-amber-400 uppercase block mb-2">
          // MEASURED IMPACT
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Verified Project Outcomes
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {outcomes.map((item, idx) => (
          <Card
            key={idx}
            variant="default"
            spotlight={true}
            withReticles={true}
            spotlightColor="rgba(32, 217, 243, 0.12)"
            className="p-6"
          >
            <div
              className="text-3xl sm:text-4xl font-mono font-bold tracking-tight mb-2"
              style={{ color: accentColor }}
            >
              {item.metric}
            </div>
            <div className="text-sm font-semibold text-white tracking-wide">
              {item.label}
            </div>
            {item.description && (
              <p className="text-xs text-slate-300 mt-2 leading-relaxed font-light">
                {item.description}
              </p>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
};
