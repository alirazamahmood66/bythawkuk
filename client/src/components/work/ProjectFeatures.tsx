import React from 'react';
import { Card } from '@/components/ui/Card';
import { WorkFeature } from '@/data/workData';
import { CheckCircle2 } from 'lucide-react';

interface ProjectFeaturesProps {
  features?: WorkFeature[];
  accentColor: string;
}

export const ProjectFeatures: React.FC<ProjectFeaturesProps> = ({ features, accentColor }) => {
  if (!features || features.length === 0) {
    return null;
  }

  return (
    <section className="py-12 md:py-16 border-b border-white/[0.08]">
      <div className="max-w-3xl mb-10">
        <span className="text-xs font-mono tracking-wider text-amber-400 uppercase block mb-2">
          // ARCHITECTURAL CAPABILITIES
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Key System Features
        </h2>
        <p className="text-slate-300 mt-2 text-sm sm:text-base font-light leading-relaxed">
          Core technical and ergonomic modules designed into the platform foundation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, idx) => (
          <Card
            key={idx}
            variant="default"
            spotlight={true}
            withReticles={true}
            spotlightColor="rgba(245, 158, 11, 0.1)"
            className="p-6 transition-all duration-200"
          >
            <div className="flex items-start space-x-3.5">
              <div
                className="mt-1 p-1 rounded-md flex-shrink-0"
                style={{
                  backgroundColor: `${accentColor}18`,
                  color: accentColor,
                }}
              >
                <CheckCircle2 className="w-4 h-4" />
              </div>

              <div>
                <div className="flex items-center space-x-2 mb-1.5">
                  <h3 className="text-base font-semibold text-white tracking-wide">
                    {feature.title}
                  </h3>
                  {feature.tag && (
                    <span
                      className="text-[10px] font-mono px-2 py-0.5 rounded border uppercase"
                      style={{
                        color: accentColor,
                        borderColor: `${accentColor}40`,
                        backgroundColor: `${accentColor}10`,
                      }}
                    >
                      {feature.tag}
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
