import React from 'react';
import { Link } from 'react-router-dom';
import { ABOUT_DATA } from '@/data/aboutData';
import { ArrowUpRight, Layers, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/Card';

export const AboutCapabilities: React.FC = () => {
  const { capabilities } = ABOUT_DATA;

  return (
    <section className="py-16 md:py-24 border-b border-white/[0.08]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-wider text-cyan-400 uppercase mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>// INTEGRATED CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Agency Capabilities
          </h2>
          <p className="text-slate-300 mt-2 text-base max-w-xl font-sans leading-relaxed">
            Eight interconnected disciplines engineered under one roof to deliver end-to-end digital solutions without fragmented vendor handoffs.
          </p>
        </div>

        <Link
          to="/services"
          className="mt-4 md:mt-0 text-xs font-mono tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-1.5"
        >
          <span>EXPLORE SERVICES UNIVERSE</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {capabilities.map((cap, idx) => (
          <Link
            key={cap.slug}
            to={cap.route}
            className="block focus:outline-none group"
          >
            <Card
              variant="default"
              spotlight={true}
              withReticles={true}
              spotlightColor="rgba(32, 217, 243, 0.12)"
              className="p-6 rounded-2xl bg-[#061F25]/90 border-white/[0.08] group-hover:border-cyan-500/40 group-hover:shadow-cyan-950/40 transition-all duration-300 flex flex-col justify-between h-full shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.06] text-[10px] font-mono">
                  <span className="text-cyan-400 uppercase font-semibold">
                    CAP 0{idx + 1}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-slate-400 uppercase">{cap.category}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all ml-1" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-cyan-200 transition-colors mb-2 font-sans">
                  {cap.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal font-sans">
                  {cap.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/[0.06] text-xs font-mono text-cyan-400 flex items-center justify-between group-hover:text-cyan-300">
                <span>VIEW SPECIFICATION</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};
