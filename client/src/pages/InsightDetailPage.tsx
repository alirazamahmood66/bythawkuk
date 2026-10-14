import React, { useEffect, useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { PageTransition } from '@/components/transitions/PageTransition';
import { CosmicScrollJourney } from '@/components/atmosphere/CosmicScrollJourney';
import {
  INSIGHTS_ARTICLES,
  INSIGHT_CATEGORIES,
  InsightArticle,
} from '@/data/insightsData';
import { InsightArticleContent } from '@/components/insights';
import { applySeo } from '@/utils/seo';
import { Compass, ArrowLeft, Home, ChevronRight } from 'lucide-react';

export const InsightDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Check if the requested slug is actually a category name (e.g. from legacy or direct navbar links)
  const isCategorySlug = INSIGHT_CATEGORIES.some((c) => c.id === slug && c.id !== 'all');
  if (isCategorySlug && slug) {
    return <Navigate to={`/insights?category=${slug}`} replace />;
  }

  // Find article by slug
  const article = INSIGHTS_ARTICLES.find((a) => a.slug === slug);

  // Compute related articles
  const relatedArticles: InsightArticle[] = useMemo(() => {
    if (!article) return [];

    if (article.relatedInsights && article.relatedInsights.length > 0) {
      return article.relatedInsights
        .map((s) => INSIGHTS_ARTICLES.find((a) => a.slug === s))
        .filter((a): a is InsightArticle => Boolean(a))
        .slice(0, 2);
    }

    // Fallback: match by category
    return INSIGHTS_ARTICLES.filter(
      (a) => a.slug !== article.slug && a.categorySlug === article.categorySlug
    ).slice(0, 2);
  }, [article]);

  // SEO, Open Graph & Structured Data Setup
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (!article) {
      return applySeo({
        title: 'Insight Not Found | Bythawk Insights',
        description: 'The requested editorial insight could not be found.',
        path: `/insights/${slug || ''}`,
        robots: 'noindex, nofollow',
      });
    }

    return applySeo({
      title: `${article.title} | Bythawk Insights`,
      description: article.excerpt,
      path: `/insights/${article.slug}`,
      robots: 'noindex, follow', // Preview articles are marked noindex, follow until finalized
      ogType: 'article',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.excerpt,
        author: {
          '@type': 'Organization',
          name: article.author,
        },
        publisher: {
          '@type': 'Organization',
          name: 'BYTHAWK',
          url: 'https://bythawk.uk',
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://bythawk.uk/insights/${article.slug}`,
        },
      },
    });
  }, [article, slug]);

  // Graceful Not-Found View if Slug Does Not Exist
  if (!article) {
    return (
      <main className="min-h-screen bg-[#030712] text-white flex items-center justify-center py-24">
        <Container className="text-center">
          <Card
            variant="default"
            spotlight={true}
            withReticles={true}
            className="max-w-md mx-auto p-8 rounded-2xl bg-[#071426]/90 border-white/[0.08] space-y-6 shadow-2xl"
          >
            <div className="w-16 h-16 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center mx-auto text-cyan-400">
              <Compass className="w-8 h-8 animate-spin-slow" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono tracking-wider text-cyan-400 uppercase">
                ERROR 404 // ARTICLE SPECIFICATION
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans">
                Insight Not Found
              </h1>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                The article you're looking for doesn't exist or may have been updated. Explore our other editorial perspectives.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/insights">
                <Button variant="primary" size="md" className="flex items-center">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  <span>Back to Insights</span>
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary" size="md">
                  <span>Start a Project</span>
                </Button>
              </Link>
            </div>
          </Card>
        </Container>
      </main>
    );
  }

  return (
    <PageTransition>
      <CosmicScrollJourney />
      <main className="relative z-10 min-h-screen text-space-text selection:bg-cyan-500/20 selection:text-cyan-300">
        <Container>
          {/* Semantic Breadcrumbs */}
          <nav aria-label="Breadcrumbs" className="pt-6 pb-2">
            <ol className="flex flex-wrap items-center space-x-2 text-xs font-mono text-slate-400">
              <li className="flex items-center">
                <Link to="/" className="hover:text-cyan-400 transition-colors flex items-center">
                  <Home className="w-3.5 h-3.5 mr-1" />
                  <span>Home</span>
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <ChevronRight className="w-3.5 h-3.5 text-white/20" />
                <Link to="/insights" className="hover:text-cyan-400 transition-colors">
                  Insights
                </Link>
              </li>
              <li className="flex items-center space-x-2 text-white font-medium">
                <ChevronRight className="w-3.5 h-3.5 text-white/20" />
                <span aria-current="page" className="truncate max-w-[200px] sm:max-w-xs md:max-w-md text-cyan-300">
                  {article.title}
                </span>
              </li>
            </ol>
          </nav>

          {/* Semantic Article Body */}
          <InsightArticleContent
            article={article}
            relatedArticles={relatedArticles}
          />
        </Container>
      </main>
    </PageTransition>
  );
};
