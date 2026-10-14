import React from 'react';
import { Link } from 'react-router-dom';
import { WorkServiceReference } from '@/data/workData';

interface ProjectMetadataProps {
  primaryCategory: string;
  services: WorkServiceReference[];
  technologies: string[];
  year?: string;
  duration?: string;
  location?: string;
  industry?: string;
}

export const ProjectMetadata: React.FC<ProjectMetadataProps> = ({
  primaryCategory,
  services,
  technologies,
  year,
  duration,
  location,
  industry,
}) => {
  return (
    <div className="py-8 border-y border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
      {/* Category */}
      <div>
        <span className="text-[11px] font-mono tracking-wider text-cyan-400 uppercase font-semibold block mb-1.5">
          CATEGORY
        </span>
        <span className="text-sm font-bold text-white font-sans">
          {primaryCategory}
        </span>
        {industry && (
          <span className="text-xs text-slate-400 block mt-0.5 font-sans">
            {industry}
          </span>
        )}
      </div>

      {/* Services (with real links) */}
      <div>
        <span className="text-[11px] font-mono tracking-wider text-cyan-400 uppercase font-semibold block mb-1.5">
          SERVICES
        </span>
        <div className="flex flex-col space-y-1">
          {services.map((svc) => (
            <Link
              key={svc.title}
              to={svc.route}
              className="text-xs font-medium text-slate-300 hover:text-cyan-300 hover:underline inline-flex items-center transition-colors"
            >
              <span>{svc.title} &rarr;</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Representative Stack */}
      <div>
        <span className="text-[11px] font-mono tracking-wider text-cyan-400 uppercase font-semibold block mb-1.5">
          REPRESENTATIVE STACK
        </span>
        <div className="flex flex-wrap gap-1">
          {technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.05] border border-white/[0.08] text-slate-300"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 4 && (
            <span className="text-[11px] font-mono text-slate-400 self-center ml-1">
              +{technologies.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Year & Horizon */}
      <div>
        <span className="text-[11px] font-mono tracking-wider text-cyan-400 uppercase font-semibold block mb-1.5">
          DELIVERY TIMELINE
        </span>
        <span className="text-sm font-bold text-white font-sans">
          {year || '2026'}
          {duration ? ` (${duration})` : ''}
        </span>
        {location && (
          <span className="text-xs text-slate-400 block mt-0.5 font-sans">
            {location}
          </span>
        )}
      </div>
    </div>
  );
};
