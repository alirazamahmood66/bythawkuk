import React from 'react';
import { Card } from '@/components/ui/Card';
import { MapPin, Sparkles, Layers, MessageSquare } from 'lucide-react';

export const ContactAlternative: React.FC = () => {
  return (
    <section className="py-16 md:py-24 border-b border-white/[0.08]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Enquiry Overview */}
        <Card
          variant="default"
          spotlight={true}
          withReticles={true}
          spotlightColor="rgba(245, 158, 11, 0.12)"
          className="lg:col-span-7 p-7 md:p-10 flex flex-col justify-between"
        >
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-wider text-amber-400 uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>// ENGAGEMENT OVERVIEW</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
              Initiating a Project Dialogue
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4 font-light">
              The most direct path to collaborate is our structured project enquiry form. Submitting your preliminary scope, tech stack requirements, and timeline expectations enables our senior architects to evaluate feasibility swiftly.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
              Tell us what you're building and we'll evaluate architecture, sprint requirements, and initial delivery phases.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/[0.08]">
            <div className="flex items-start space-x-3">
              <MessageSquare className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
              <div>
                <span className="block text-xs font-mono text-white font-medium">STRUCTURED INTAKE</span>
                <span className="text-xs text-slate-400">Detailed review of engineering specifications</span>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Layers className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
              <div>
                <span className="block text-xs font-mono text-white font-medium">TECHNICAL FIT</span>
                <span className="text-xs text-slate-400">Architecture, security, and scalability evaluation</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Right Column: Location & Studio Details */}
        <Card
          variant="default"
          spotlight={true}
          withReticles={true}
          spotlightColor="rgba(168, 85, 247, 0.12)"
          className="lg:col-span-5 p-7 md:p-8 flex flex-col justify-between"
        >
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono text-amber-400 uppercase mb-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>STUDIO LOCATION</span>
              </div>
              <h3 className="text-xl font-bold text-white">London, United Kingdom</h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed font-light">
                Bythawk is a UK digital technology studio building high-performance web applications, enterprise platforms, and digital systems.
              </p>
            </div>

            <div className="rounded-xl bg-[#040407]/80 border border-white/[0.08] p-4 space-y-3">
              <span className="text-xs font-mono text-amber-400 tracking-wider uppercase block">
                CORE DISCIPLINES
              </span>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Web Platforms & SaaS Applications</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>High-Conversion Commerce Architecture</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Full-Stack Cloud & API Infrastructure</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/[0.08]">
            <span className="text-[11px] font-mono text-slate-400 block tracking-wider">
              BYTHAWK DIGITAL TECHNOLOGY & ENGINEERING STUDIO
            </span>
          </div>
        </Card>
      </div>
    </section>
  );
};
