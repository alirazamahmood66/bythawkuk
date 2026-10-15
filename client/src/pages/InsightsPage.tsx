import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { PageTransition } from '@/components/transitions/PageTransition';
import { CosmicScrollJourney } from '@/components/atmosphere/CosmicScrollJourney';
import {
  INSIGHTS_ARTICLES,
  InsightCategorySlug,
  InsightArticle,
} from '@/data/insightsData';
import {
  InsightsHero,
  InsightsCategoryFilter,
  FeaturedInsight,
  InsightsGrid,
  InsightsEmptyState,
  InsightsCta,
} from '@/components/insights';
import { applySeo } from '@/utils/seo';

export const InsightsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = (searchParams.get('category') as InsightCategorySlug) || 'all';

  const [selectedCategory, setSelectedCategory] = useState<InsightCategorySlug>(initialCategory);

  // Sync category changes with URL query parameter without full reload
  useEffect(() => {
    const cat = searchParams.get('category') as InsightCategorySlug;
    if (cat && cat !== selectedCategory) {
      setSelectedCategory(cat);
    } else if (!cat && selectedCategory !== 'all') {
      setSelectedCategory('all');
    }
  }, [searchParams]);

  const handleCategorySelect = (cat: InsightCategorySlug) => {
    setSelectedCategory(cat);
    if (cat === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  // SEO & Schema Setup
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    return applySeo({
      title: 'Insights | VTuber Design — Digital Technology Studio',
      description:
        'Perspectives on technology, product design, development, search, and digital systems shaping modern businesses.',
      path: '/insights', // Canonical stays strictly /insights even when ?category= is present
      schema: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Insights | VTuber Design Digital Technology Studio',
        description:
          'Perspectives on technology, product design, development, search, and digital systems shaping modern businesses.',
        url: 'https://vtuberdesign.co.au/insights',
        provider: {
          '@type': 'Organization',
          name: 'VTUBER DESIGN',
          url: 'https://vtuberdesign.co.au',
        },
      },
    });
  }, []);

  // Compute category counts
  const countsByCategory = useMemo(() => {
    const counts: Record<string, number> = { all: INSIGHTS_ARTICLES.length };
    INSIGHTS_ARTICLES.forEach((art) => {
      counts[art.categorySlug] = (counts[art.categorySlug] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter articles by active category
  const filteredArticles = useMemo(() => {
    if (selectedCategory === 'all') {
      return INSIGHTS_ARTICLES;
    }
    return INSIGHTS_ARTICLES.filter((art) => art.categorySlug === selectedCategory);
  }, [selectedCategory]);

  // Determine featured article to elevate (if in 'all' view or matching category)
  const featuredArticle: InsightArticle | undefined = useMemo(() => {
    if (selectedCategory === 'all') {
      return INSIGHTS_ARTICLES.find((art) => art.featured);
    }
    return undefined; // Show in normal grid when filtered
  }, [selectedCategory]);

  // Remaining articles for the grid
  const gridArticles = useMemo(() => {
    if (featuredArticle) {
      return filteredArticles.filter((art) => art.slug !== featuredArticle.slug);
    }
    return filteredArticles;
  }, [filteredArticles, featuredArticle]);

  return (
    <PageTransition>
      <CosmicScrollJourney />
      <main className="relative z-10 min-h-screen text-space-text selection:bg-cyan-500/20 selection:text-amber-300">
        <Container>
          {/* 1. Cinematic Editorial Hero */}
          <InsightsHero />

          {/* 2. Category Filter Controls */}
          <InsightsCategoryFilter
            activeCategory={selectedCategory}
            onSelectCategory={handleCategorySelect}
            countsByCategory={countsByCategory}
          />

          {/* 3. Featured Article (when viewing all) */}
          {featuredArticle && <FeaturedInsight article={featuredArticle} />}

          {/* 4. Editorial Article Grid / Empty State */}
          {gridArticles.length > 0 ? (
            <InsightsGrid articles={gridArticles} />
          ) : (
            <InsightsEmptyState onReset={() => handleCategorySelect('all')} />
          )}

          {/* 5. Editorial Conversion CTA */}
          <InsightsCta />
        </Container>
      </main>
    </PageTransition>
  );
};
