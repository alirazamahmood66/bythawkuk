import React from 'react';
import { Card } from '@/components/ui/Card';
import { WorkApproachStage } from '@/data/workData';

interface ProjectApproachProps {
  approach?: WorkApproachStage[];
  accentColor: string;
}

export const ProjectApproach: React.FC<ProjectApproachProps> = ({ approach, accentColor }) => {
  if (!approach || approach.length === 0) {
    return null;
  }

  return (
    <section className="py-12 md:py-16 border-b border-white/[0.08]">
      <div className="max-w-3xl mb-10">
        <span className="text-xs font-mono tracking-wider text-cyan-400 uppercase block mb-2">
          // METHODOLOGY & SPRINT TRAJECTORY
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          The Engineering Approach
        </h2>
        <p className="text-slate-300 mt-2 text-sm sm:text-base font-light leading-relaxed">
          A disciplined, sprint-driven sequence executing from initial architectural scoping through to hardened production readiness.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {approach.map((stage) => (
          <Card
            key={stage.step}
            variant="default"
            spotlight={true}
            withReticles={true}
            spotlightColor="rgba(32, 217, 243, 0.12)"
            className="p-6 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span
                  className="font-mono text-xs font-bold px-2 py-0.5 rounded border"
                  style={{
                    color: accentColor,
                    borderColor: `${accentColor}40`,
                    backgroundColor: `${accentColor}10`,
                  }}
                >
                  STAGE 0{stage.step}
                </span>
              </div>

              <h3 className="text-base font-semibold text-white tracking-wide mb-2 group-hover:text-cyan-200 transition-colors">
                {stage.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {stage.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
