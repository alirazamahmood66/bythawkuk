import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/Card';
import { WorkProject } from '@/data/workData';
import { ProjectVisual } from './ProjectVisual';
import { ArrowRight, Terminal, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface FeaturedProjectProps {
  project: WorkProject;
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({ project }) => {
  return (
    <section className="py-12 md:py-16 border-b border-white/[0.08]">
      <div className="mb-4">
        <span className="text-xs font-mono tracking-wider text-amber-400 uppercase">
          // FEATURED ARCHITECTURE
        </span>
      </div>

      <Card
        variant="default"
        spotlight={true}
        withReticles={true}
        spotlightColor="rgba(245, 158, 11, 0.12)"
        className="rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl bg-[#0B0C10]/90 border-white/[0.08]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-7">
            <Link
              to={`/work/${project.slug}`}
              className="block group rounded-2xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-amber-400/50"
              aria-label={`View ${project.title} case study preview`}
            >
              <ProjectVisual
                title={project.title}
                category={project.primaryCategory}
                accentColor={project.accentColor}
                heroImage={project.heroImage}
                badgeLabel={project.badgeLabel}
                aspectRatio="wide"
                className="group-hover:border-amber-500/40 transition-colors"
              />
            </Link>
          </div>

          {/* Copy & Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center space-x-1.5 font-mono text-[10px] tracking-wider text-amber-300 px-2.5 py-1 rounded-full bg-amber-950/40 border border-amber-500/30 uppercase">
                <Terminal className="w-3 h-3 text-amber-400" />
                <span>{project.badgeLabel}</span>
              </span>
              <span className="font-mono text-xs text-slate-400">
                {project.year || '2026'}
              </span>
            </div>

            <div>
              <span className="text-xs font-mono tracking-wider text-amber-400 uppercase block mb-1">
                {project.primaryCategory}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans">
                <Link
                  to={`/work/${project.slug}`}
                  className="hover:text-amber-300 transition-colors"
                >
                  {project.title}
                </Link>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal font-sans">
              {project.shortDescription}
            </p>

            {/* Services badges */}
            <div>
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                SERVICES
              </span>
              <div className="flex flex-wrap gap-2">
                {project.services.map((svc) => (
                  <Link
                    key={svc.title}
                    to={svc.route}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-[#0B0C10]/60 border border-white/[0.08] text-slate-300 hover:border-amber-500/40 hover:text-amber-300 transition-colors"
                  >
                    {svc.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Technologies tags */}
            <div>
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                REPRESENTATIVE STACK
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.05] border border-white/[0.08] text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 5 && (
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.05] border border-white/[0.08] text-slate-300">
                    +{project.technologies.length - 5}
                  </span>
                )}
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link to={`/work/${project.slug}`}>
                <Button variant="primary" size="md" className="group flex items-center shadow-lg shadow-amber-950/30">
                  <span>View Case Study Preview</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs font-semibold text-amber-300 bg-[#0B0C10]/70 hover:bg-amber-950/80 border border-amber-500/40 hover:border-cyan-400 transition-all shadow-md"
                >
                  <span>Visit Live Platform</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};
