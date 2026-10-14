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
        className="py-16 px-8 text-center space-y-4 max-w-md mx-auto my-12 rounded-2xl bg-[#070D18]/90 border-[#FFFBEB]/[0.08] shadow-xl"
      >
        <div className="w-14 h-14 rounded-2xl bg-[#EA580C]/20 border border-[#D97706]/30 flex items-center justify-center mx-auto text-[#F59E0B]">
          <Compass className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-bold text-[#FFFBEB] tracking-tight font-sans">
          No Projects In This Sector Yet
        </h3>
        <p className="text-sm text-[#FFFBEB]/70 max-w-md mx-auto font-sans leading-relaxed">
          We are currently structuring additional case studies and project previews across our disciplines.
        </p>
        {resetFilter && (
          <div className="pt-2">
            <button
              onClick={resetFilter}
              className="text-xs font-mono tracking-wider text-[#FBBF24] hover:text-[#F59E0B] font-semibold"
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
