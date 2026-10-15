import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/Card';
import { RelatedServiceItem } from '@/data/servicesData';
import { ArrowUpRight } from 'lucide-react';

interface RelatedServicesProps {
  relatedServices: RelatedServiceItem[];
  accentColor: string;
}

export const RelatedServices: React.FC<RelatedServicesProps> = ({
  relatedServices,
}) => {
  return (
    <section className="py-16 md:py-20 border-b border-white/[0.08]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
        <div>
          <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-wider text-amber-400 uppercase mb-3">
            <span>// CROSS-DISCIPLINARY SYNERGY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Interconnected Capabilities
          </h2>
          <p className="text-slate-300 mt-2 text-base font-light leading-relaxed">
            VTUBER DESIGN services are designed to reinforce one another, forming complete digital ecosystems.
          </p>
        </div>

        <Link
          to="/services"
          className="mt-4 md:mt-0 text-xs font-mono tracking-wider text-amber-400 hover:text-amber-300 hover:underline inline-flex items-center"
        >
          <span>VIEW ALL SERVICES &rarr;</span>
        </Link>
      </div>

      {/* Grid of Related Services */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedServices.map((service) => (
          <Link
            key={service.slug}
            to={service.route}
            className="block group"
          >
            <Card
              variant="default"
              spotlight={true}
              withReticles={true}
              spotlightColor="rgba(245, 158, 11, 0.12)"
              className="p-6 h-full flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono tracking-wider text-amber-300 uppercase px-2 py-0.5 rounded bg-amber-950/40 border border-amber-500/30">
                    {service.category}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-amber-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <h3 className="text-lg font-semibold text-white tracking-wide group-hover:text-amber-200 transition-colors mb-2">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center text-xs font-mono text-amber-400 font-medium">
                <span>EXPLORE SPECIFICATION &rarr;</span>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};
