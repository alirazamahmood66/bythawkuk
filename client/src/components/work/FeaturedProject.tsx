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
        <span className="text-xs font-mono tracking-wider text-cyan-400 uppercase">
          // FEATURED ARCHITECTURE
        </span>
      </div>

      <Card
        variant="default"
        spotlight={true}
        withReticles={true}
        spotlightColor="rgba(32, 217, 243, 0.12)"
        className="rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl bg-[#061F25]/90 border-white/[0.08]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-7">
            <Link
              to={`/work/${project.slug}`}
              className="block group rounded-2xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
              aria-label={`View ${project.title} case study preview`}
            >
              <ProjectVisual
                title={project.title}
                category={project.primaryCategory}
                accentColor={project.accentColor}
                heroImage={project.heroImage}
                badgeLabel={project.badgeLabel}
                aspectRatio="wide"
                className="group-hover:border-cyan-500/40 transition-colors"
              />
            </Link>
          </div>

          {/* Copy & Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center space-x-1.5 font-mono text-[10px] tracking-wider text-cyan-300 px-2.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 uppercase">
                <Terminal className="w-3 h-3 text-cyan-400" />
                <span>{project.badgeLabel}</span>
              </span>
              <span className="font-mono text-xs text-slate-400">
                {project.year || '2026'}
              </span>
            </div>

            <div>
              <span className="text-xs font-mono tracking-wider text-cyan-400 uppercase block mb-1">
                {project.primaryCategory}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans">
                <Link
                  to={`/work/${project.slug}`}
                  className="hover:text-cyan-300 transition-colors"
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
                    className="text-xs font-mono px-2.5 py-1 rounded bg-[#061F25]/60 border border-white/[0.08] text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
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
                <Button variant="primary" size="md" className="group flex items-center shadow-lg shadow-cyan-950/30">
                  <span>View Case Study Preview</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs font-semibold text-cyan-300 bg-[#061F25]/70 hover:bg-cyan-950/80 border border-cyan-500/40 hover:border-cyan-400 transition-all shadow-md"
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
