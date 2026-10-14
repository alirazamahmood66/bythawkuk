import React from 'react';
import { WorkProject } from '@/data/workData';
import { ProjectCard } from './ProjectCard';
import { Compass } from 'lucide-react';
import { Card } from '@/components/ui/Card';

interface ProjectGridProps {
  projects: WorkProject[];
  resetFilter?: () => void;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, resetFilter }) => {
  if (projects.length === 0) {
    return (
      <Card
        variant="default"
        spotlight={true}
        withReticles={true}
        className="py-16 px-8 text-center space-y-4 max-w-md mx-auto my-12 rounded-2xl bg-[#071426]/90 border-white/[0.08] shadow-xl"
      >
        <div className="w-14 h-14 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center mx-auto text-cyan-400">
          <Compass className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-bold text-white tracking-tight font-sans">
          No Projects In This Sector Yet
        </h3>
        <p className="text-sm text-slate-300 max-w-md mx-auto font-sans leading-relaxed">
          We are currently structuring additional case studies and project previews across our disciplines.
        </p>
        {resetFilter && (
          <div className="pt-2">
            <button
              onClick={resetFilter}
              className="text-xs font-mono tracking-wider text-cyan-400 hover:text-cyan-300 font-semibold"
            >
              View All Projects &rarr;
            </button>
          </div>
        )}
      </Card>
    );
  }

  return (
    <section className="py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
};
