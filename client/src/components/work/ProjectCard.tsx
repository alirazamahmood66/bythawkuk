import React from 'react';
import { Link } from 'react-router-dom';
import { WorkProject } from '@/data/workData';
import { ArrowUpRight, ExternalLink, ShieldCheck, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { ProjectVisual } from './ProjectVisual';

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
      spotlightColor="rgba(245, 158, 11, 0.12)"
      className="p-5 sm:p-7 flex flex-col justify-between group shadow-xl hover:shadow-2xl bg-[#0B0C10]/90 border-[#FFFBEB]/[0.08] hover:border-[#F59E0B]/40 transition-all duration-300 rounded-2xl overflow-hidden"
    >
      <div>
        {/* Browser Mockup Window with Prominent Real Screenshot */}
        <div className="rounded-xl overflow-hidden border border-[#FFFBEB]/[0.10] bg-[#040407] mb-6 shadow-lg group-hover:border-[#F59E0B]/30 transition-all">
          {/* Top Browser Chrome Bar */}
          <div className="px-4 py-2.5 bg-[#0B0C10] border-b border-[#FFFBEB]/[0.08] flex items-center justify-between z-10">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>

            <div className="px-3 py-0.5 rounded bg-[#040407]/90 border border-[#FFFBEB]/[0.08] text-[10px] font-mono text-[#CBD5E1]/80 flex items-center gap-1.5 max-w-[260px] truncate">
              <ShieldCheck className="w-3 h-3 text-[#F59E0B] shrink-0" />
              <span className="truncate">{project.domainUrl}</span>
            </div>

            <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="hidden sm:inline">LIVE</span>
            </div>
          </div>

          {/* Screenshot Container - clicking directly opens the live site in new tab */}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative h-60 sm:h-72 w-full overflow-hidden bg-[#040407] focus:outline-none group/img cursor-pointer"
            aria-label={`Visit live website for ${project.title}`}
          >
            {project.heroImage ? (
              <img
                src={project.heroImage}
                alt={`${project.title} live interface preview`}
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/img:scale-105"
              />
            ) : (
              <ProjectVisual
                title={project.title}
                category={project.primaryCategory}
                accentColor={project.accentColor}
                badgeLabel={project.badgeLabel}
                aspectRatio="standard"
              />
            )}

            {/* Subtle Gradient & Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10]/80 via-transparent to-transparent opacity-40 group-hover/img:opacity-20 transition-opacity pointer-events-none" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#FDE047] via-[#F59E0B] to-[#EA580C] text-[#040407] font-mono font-bold text-xs flex items-center gap-2 shadow-2xl shadow-[#F59E0B]/50 transform translate-y-2 group-hover/img:translate-y-0 transition-transform">
                <span>VISIT LIVE WEBSITE</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </div>
          </a>
        </div>

        {/* Metadata Badges */}
        <div className="flex items-center justify-between gap-2 mb-3 flex-wrap">
          <span className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-0.5 rounded bg-[#EA580C]/20 border border-[#D97706]/30 text-[#FBBF24] font-medium">
            {project.badgeLabel}
          </span>
          <span className="text-xs font-mono text-[#94A3B8]">
            {project.primaryCategory}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-[#FFFBEB] tracking-tight group-hover:text-[#F59E0B] transition-colors mb-2.5">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F59E0B] transition-colors inline-flex items-center gap-2"
          >
            <span>{project.title}</span>
            <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity text-[#FBBF24]" />
          </a>
        </h3>

        {/* Short Description */}
        <p className="text-sm text-[#CBD5E1] leading-relaxed font-normal mb-6 font-sans">
          {project.shortDescription}
        </p>
      </div>

      {/* Footer: Tech Stack and View Action */}
      <div className="pt-4 border-t border-[#FFFBEB]/[0.08]">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#040407] border border-[#FFFBEB]/[0.08] text-[#CBD5E1]"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#040407] border border-[#FFFBEB]/[0.08] text-[#94A3B8]">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between gap-3 pt-1">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#94A3B8] hover:text-white transition-colors"
          >
            <span>{project.domainUrl}</span>
            <ExternalLink className="w-3 h-3 text-[#FBBF24]" />
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit live website ${project.title}`}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#040407] bg-gradient-to-r from-[#FDE047] via-[#F59E0B] to-[#EA580C] hover:opacity-95 px-3.5 py-1.5 rounded-lg transition-all shadow-md shadow-[#F59E0B]/20 hover:scale-[1.02]"
              onClick={(e) => e.stopPropagation()}
            >
              <span>Visit Live Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};
