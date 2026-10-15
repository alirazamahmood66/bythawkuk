import React, { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { PageTransition } from '@/components/transitions/PageTransition';
import { CosmicScrollJourney } from '@/components/atmosphere/CosmicScrollJourney';
import {
  WORK_PROJECTS,
  WorkCategory,
} from '@/data/workData';
import {
  WorkHero,
  WorkFilters,
  ProjectGrid,
  WorkCta,
} from '@/components/work';

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

  // Scroll to top and apply centralized SEO
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const cleanupSeo = applySeo({
      title: 'Portfolio & Client Work | VTuber Design — Digital Technology Studio',
      description:
        'Explore client portfolio, digital platforms, e-commerce architectures, and web applications engineered by VTuber Design.',
      path: '/portfolio',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Portfolio & Client Work | VTuber Design',
        description:
          'A curated portfolio of digital products, platforms, and architectural blueprints shaped through strategy, design, and engineering.',
        url: 'https://vtuberdesign.co.au/portfolio',
        provider: {
          '@type': 'Organization',
          name: 'VTUBER DESIGN',
          url: 'https://vtuberdesign.co.au',
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

  return (
    <PageTransition>
      <CosmicScrollJourney />
      <div className="relative z-10 min-h-screen text-[#FFFBEB] selection:bg-[#EA580C]/30 selection:text-[#FBBF24]">
        <Container>
          {/* Section 1: Hero */}
          <WorkHero />

          {/* Section 2: Accessible Category Filters */}
          <div className="pt-6 pb-2">
            <WorkFilters
              selectedCategory={selectedCategory}
              onSelectCategory={handleSelectCategory}
              projectCounts={projectCounts}
            />
          </div>

          {/* Section 3: Project Grid with Direct, Prominent Screenshots */}
          <div className="pt-2 pb-12">
            <ProjectGrid
              projects={filteredProjects}
              resetFilter={() => handleSelectCategory('all')}
            />
          </div>

          {/* Section 4: Case Study CTA */}
          <WorkCta />
        </Container>
      </div>
    </PageTransition>
  );
};
