import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/Card';
import { WorkProject } from '@/data/workData';
import { ArrowRight, Sparkles } from 'lucide-react';

interface NextProjectProps {
  nextProject: WorkProject;
}

export const NextProject: React.FC<NextProjectProps> = ({ nextProject }) => {
  return (
    <section className="py-12 md:py-16 border-b border-white/[0.08]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-mono tracking-wider text-amber-400 uppercase block">
            CONTINUE EXPLORING
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">
            Next Architectural Preview
          </h2>
        </div>

        <Link
          to="/work"
          className="text-xs font-mono tracking-wider text-amber-400 hover:text-amber-300 hover:underline inline-flex items-center"
        >
          <span>VIEW ALL WORK &rarr;</span>
        </Link>
      </div>

      <Card
        as="div"
        variant="default"
        spotlight={true}
        withReticles={true}
        spotlightColor="rgba(32, 217, 243, 0.12)"
        className="p-6 sm:p-8 group"
      >
        <Link
          to={`/work/${nextProject.slug}`}
          className="block"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-xs font-mono text-amber-400/80 uppercase tracking-wider">
                  {nextProject.primaryCategory}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors">
                {nextProject.title}
              </h3>
              <p className="text-sm text-slate-300 max-w-2xl leading-relaxed font-light">
                {nextProject.shortDescription}
              </p>
            </div>

            <div className="flex items-center space-x-3 text-sm font-mono tracking-wider text-amber-400 group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0">
              <span>EXPLORE BLUEPRINT</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </Link>
      </Card>
    </section>
  );
};
