import React from 'react';
import { Link } from 'react-router-dom';
import { WorkProject } from '@/data/workData';
import { ProjectVisual } from './ProjectVisual';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/Card';

interface ProjectCardProps {
  project: WorkProject;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card
      as="article"
      variant="default"
      spotlight={true}
      withReticles={true}
      spotlightColor="rgba(32, 217, 243, 0.12)"
      className="p-6 sm:p-7 flex flex-col justify-between group shadow-lg hover:shadow-2xl bg-[#071426]/85 border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300"
    >
      <div>
        {/* Visual Preview */}
        <Link
          to={`/work/${project.slug}`}
          className="block mb-6 rounded-xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-space-cyan/50"
          tabIndex={-1}
          aria-hidden="true"
        >
          <ProjectVisual
            title={project.title}
            category={project.primaryCategory}
            accentColor={project.accentColor}
            heroImage={project.heroImage}
            badgeLabel={project.badgeLabel}
            aspectRatio="standard"
            className="group-hover:border-space-cyan/40 transition-colors"
          />
        </Link>

        {/* Metadata Badges */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-0.5 rounded bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 font-medium">
            {project.badgeLabel}
          </span>
          <span className="text-xs font-mono text-slate-400">
            {project.year || '2026'}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors mb-2">
          <Link
            to={`/work/${project.slug}`}
            className="focus:outline-none focus:ring-1 focus:ring-space-cyan/50 rounded"
          >
            {project.title}
          </Link>
        </h3>

        <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3">
          {project.primaryCategory}
        </span>

        {/* Short Description */}
        <p className="text-sm text-slate-300 leading-relaxed font-normal mb-6">
          {project.shortDescription}
        </p>
      </div>

      {/* Footer: Tech Stack and View Action */}
      <div className="pt-4 border-t border-white/[0.08]">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#030712] border border-white/[0.08] text-slate-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#030712] border border-white/[0.08] text-slate-400">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between gap-3 pt-1">
          <Link
            to={`/work/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wider text-slate-300 group-hover:text-cyan-300 transition-colors py-1 focus:outline-none focus:ring-1 focus:ring-space-cyan/50 rounded"
          >
            <span>SPECIFICATION</span>
            <div className="w-6 h-6 rounded-full flex items-center justify-center bg-cyan-950/40 border border-cyan-500/30 group-hover:bg-cyan-500/20 group-hover:border-cyan-400 transition-colors">
              <ArrowUpRight className="w-3 h-3 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
          </Link>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit live website ${project.title}`}
              className="inline-flex items-center gap-1.5 text-[11px] font-mono font-medium text-cyan-300 hover:text-cyan-100 bg-cyan-950/60 hover:bg-cyan-900/80 border border-cyan-500/40 hover:border-cyan-400 px-2.5 py-1 rounded transition-all shadow-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <span>Live Site</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};
