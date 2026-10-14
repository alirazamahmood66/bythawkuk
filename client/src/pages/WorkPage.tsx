import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { PageTransition } from '@/components/transitions/PageTransition';
import { CosmicScrollJourney } from '@/components/atmosphere/CosmicScrollJourney';
import {
  WORK_PROJECTS,
  WorkCategory,
  getFeaturedProject,
} from '@/data/workData';
import {
  WorkHero,
  WorkFilters,
  FeaturedProject,
  ProjectGrid,
  OrbitalSystemView,
  WorkCta,
} from '@/components/work';
import { Globe, LayoutGrid } from 'lucide-react';

import { applySeo } from '@/utils/seo';

export const WorkPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') as WorkCategory | null;

  // Active filter state
  const selectedCategory: WorkCategory | 'all' = categoryParam || 'all';

  const handleSelectCategory = (category: WorkCategory | 'all') => {
    if (category === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams, { replace: true });
    } else {
      setSearchParams({ category }, { replace: true });
    }
  };

  // Scroll to top and apply centralized SEO (canonical is always /work regardless of category filter)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const cleanupSeo = applySeo({
      title: 'Selected Work | Bythawk — Digital Technology Studio',
      description:
        'Explore selected digital platforms, e-commerce architectures, and mobile products engineered by Bythawk.UK.',
      path: '/work',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Selected Work | Bythawk Digital Technology Studio',
        description:
          'A curated selection of digital products, platforms, and architectural blueprints shaped through strategy, design, and engineering.',
        url: 'https://bythawk.uk/work',
        provider: {
          '@type': 'Organization',
          name: 'BYTHAWK',
          url: 'https://bythawk.uk',
        },
      },
    });

    return cleanupSeo;
  }, []);

  // Compute category project counts
  const projectCounts = useMemo(() => {
    const counts: Record<string, number> = { all: WORK_PROJECTS.length };
    WORK_PROJECTS.forEach((p) => {
      p.category.forEach((cat) => {
        counts[cat] = (counts[cat] || 0) + 1;
      });
    });
    return counts;
  }, []);

  // Filter projects according to selected category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') {
      return WORK_PROJECTS;
    }
    return WORK_PROJECTS.filter((p) => p.category.includes(selectedCategory));
  }, [selectedCategory]);

  const featured = useMemo(() => getFeaturedProject(), []);

  const [viewMode, setViewMode] = useState<'orbit' | 'grid'>('orbit');

  return (
    <PageTransition>
      <CosmicScrollJourney />
      <div className="relative z-10 min-h-screen text-space-text selection:bg-cyan-500/20 selection:text-cyan-300">
        <Container>
          {/* Section 1: Hero */}
          <WorkHero />

          {/* Section 2: Accessible Category Filters & Perspective Toggle */}
          <div className="space-y-6">
            <WorkFilters
              selectedCategory={selectedCategory}
              onSelectCategory={handleSelectCategory}
              projectCounts={projectCounts}
            />

            {/* View Mode Toggle Bar */}
            <div className="flex items-center justify-between py-3 border-y border-white/[0.08]">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs font-mono text-slate-300 font-medium uppercase tracking-wider">
                  PORTFOLIO TELEMETRY PERSPECTIVE
                </span>
              </div>

              <div className="inline-flex p-1 rounded-xl bg-[#071426]/90 border border-white/[0.08]">
                <button
                  type="button"
                  onClick={() => setViewMode('orbit')}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                    viewMode === 'orbit'
                      ? 'bg-cyan-950/90 text-cyan-300 border border-cyan-500/50 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Globe className="w-3.5 h-3.5 text-cyan-400" />
                  <span>ORBITAL SYSTEM</span>
                </button>

                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                    viewMode === 'grid'
                      ? 'bg-cyan-950/90 text-cyan-300 border border-cyan-500/50 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5 text-cyan-400" />
                  <span>MATRIX GRID</span>
                </button>
              </div>
            </div>
          </div>

          {/* Section 3: Interactive Solar System Orrery (Shown in Orbit Mode) */}
          {viewMode === 'orbit' && (
            <div className="py-8">
              <OrbitalSystemView projects={filteredProjects} />
            </div>
          )}

          {/* Section 4: Featured Project Showcase (shown in Grid Mode or when matching category) */}
          {viewMode === 'grid' && (selectedCategory === 'all' || featured.category.includes(selectedCategory)) && (
            <FeaturedProject project={featured} />
          )}

          {/* Section 5: Project Grid */}
          <div className={viewMode === 'orbit' ? 'pt-8 border-t border-white/[0.08]' : ''}>
            <div className="mb-4">
              <span className="text-xs font-mono tracking-wider text-cyan-400 uppercase">
                // COMPREHENSIVE PLATFORM MATRIX
              </span>
            </div>
            <ProjectGrid
              projects={filteredProjects}
              resetFilter={() => handleSelectCategory('all')}
            />
          </div>

          {/* Section 6: Case Study CTA */}
          <WorkCta />
        </Container>
      </div>
    </PageTransition>
  );
};
