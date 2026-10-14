import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/Card';
import { InsightArticle } from '@/data/insightsData';
import { Clock, CheckCircle2, ArrowRight, ArrowLeft, Sparkles, Compass } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { InsightCard } from './InsightCard';

interface InsightArticleContentProps {
  article: InsightArticle;
  relatedArticles: InsightArticle[];
}

export const InsightArticleContent: React.FC<InsightArticleContentProps> = ({
  article,
  relatedArticles,
}) => {
  return (
    <article className="py-8 md:py-14">
      {/* 1. Article Header */}
      <header className="max-w-3xl mx-auto space-y-6 pb-10 border-b border-white/[0.08]">
        {/* Back Link */}
        <div>
          <Link
            to="/insights"
            className="inline-flex items-center space-x-2 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to All Insights</span>
          </Link>
        </div>

        {/* Category & Status */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <span className="font-mono text-xs text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 px-3 py-1 rounded-full">
            {article.category}
          </span>
          <span className="text-xs font-mono text-slate-400 bg-white/[0.04] border border-white/[0.08] px-2.5 py-1 rounded-full">
            EDITORIAL PREVIEW
          </span>
        </div>

        {/* Single H1 on page */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.15]">
          {article.title}
        </h1>

        {/* Excerpt */}
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
          {article.excerpt}
        </p>

        {/* Metadata */}
        <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center space-x-3">
            <span className="text-white font-medium">{article.author}</span>
            <span>&bull;</span>
            <div className="flex items-center space-x-1.5">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span>{article.readTime}</span>
            </div>
          </div>

          <div className="flex items-center space-x-1.5 text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BYTHAWK PERSPECTIVE</span>
          </div>
        </div>
      </header>

      {/* 2. Abstract Geometric Artwork Banner */}
      <Card
        variant="default"
        spotlight={true}
        withReticles={true}
        spotlightColor="rgba(32, 217, 243, 0.12)"
        className="max-w-3xl mx-auto my-10 p-8 sm:p-12 flex items-center justify-center relative overflow-hidden shadow-xl"
      >
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle at 50% 50%, #06b6d4 0%, #8b5cf6 50%, transparent 80%)' }}
        />
        <svg
          className="w-full max-w-[320px] h-auto text-cyan-400/60"
          viewBox="0 0 280 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="140" cy="60" r="50" stroke="currentColor" strokeWidth="1" strokeDasharray="3 6" opacity="0.4" />
          <circle cx="140" cy="60" r="30" stroke="#8b5cf6" strokeWidth="1.2" opacity="0.6" />
          <line x1="20" y1="60" x2="260" y2="60" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 6" opacity="0.3" />
          <circle cx="140" cy="60" r="4" fill="#06b6d4" />
          <circle cx="200" cy="40" r="2.5" fill="#38bdf8" />
          <circle cx="80" cy="80" r="2.5" fill="#8b5cf6" />
        </svg>
      </Card>

      {/* 3. Article Editorial Body */}
      <div className="max-w-3xl mx-auto space-y-12 text-space-text/90 leading-relaxed">
        {/* Introduction */}
        <section aria-label="Introduction">
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-normal">
            {article.introduction}
          </p>
        </section>

        {/* Content Sections */}
        {article.sections.map((sec, idx) => (
          <section key={idx} className="space-y-4 pt-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {sec.heading}
            </h2>

            {sec.paragraphs.map((p, pIdx) => (
              <p key={pIdx} className="text-sm sm:text-base text-space-muted leading-relaxed">
                {p}
              </p>
            ))}

            {sec.bullets && sec.bullets.length > 0 && (
              <ul className="space-y-2.5 pt-2 pl-1" role="list">
                {sec.bullets.map((b, bIdx) => (
                  <li key={bIdx} className="flex items-start space-x-3 text-sm text-space-text/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-space-cyan mt-2 flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {/* 4. Key Takeaways Callout Box */}
        {article.keyTakeaways && article.keyTakeaways.length > 0 && (
          <Card
            as="section"
            aria-label="Key Takeaways"
            variant="default"
            spotlight={true}
            withReticles={true}
            className="rounded-2xl bg-[#071426]/90 border-cyan-500/30 p-6 sm:p-8 space-y-4 shadow-xl"
          >
            <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 tracking-wider uppercase">
              <CheckCircle2 className="w-4 h-4" />
              <span>// KEY TAKEAWAYS</span>
            </div>
            <ul className="space-y-3" role="list">
              {article.keyTakeaways.map((takeaway, tIdx) => (
                <li key={tIdx} className="flex items-start space-x-3 text-sm text-slate-200 leading-relaxed font-sans">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </Card>
        )}

        {/* 5. Explore Related Services */}
        {article.relatedServices && article.relatedServices.length > 0 && (
          <section aria-label="Explore Related Services" className="pt-8 border-t border-white/[0.08]">
            <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-4">
              <Compass className="w-3.5 h-3.5" />
              <span>// EXPLORE RELATED SERVICES</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {article.relatedServices.map((srv) => (
                <Link
                  key={srv.route}
                  to={srv.route}
                  className="block group focus:outline-none"
                >
                  <Card
                    variant="default"
                    spotlight={true}
                    withReticles={true}
                    className="p-4 rounded-xl bg-[#071426]/90 border-white/[0.08] group-hover:border-cyan-500/40 group-hover:shadow-cyan-950/30 transition-all flex items-center justify-between"
                  >
                    <span className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors font-sans">
                      {srv.title}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* 6. Related Insights */}
        {relatedArticles.length > 0 && (
          <section aria-label="Related Insights" className="pt-10 border-t border-white/[0.08]">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>// RELATED PERSPECTIVES</span>
              </div>
              <Link
                to="/insights"
                className="text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors"
              >
                All articles &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedArticles.map((rel) => (
                <InsightCard key={rel.slug} article={rel} />
              ))}
            </div>
          </section>
        )}

        {/* 7. Conversion CTA */}
        <section className="pt-12 text-center">
          <Card
            variant="default"
            spotlight={true}
            withReticles={true}
            className="p-8 sm:p-10 rounded-2xl bg-[#071426]/90 border-white/[0.08] space-y-4 shadow-xl max-w-2xl mx-auto"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-sans">
              Have a digital challenge to solve?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto font-sans leading-relaxed">
              Discuss architecture, scoping, and timelines directly with our UK engineering team.
            </p>
            <div className="pt-2">
              <Link to="/contact">
                <Button variant="primary" size="md">
                  <span>Start a Project &rarr;</span>
                </Button>
              </Link>
            </div>
          </Card>
        </section>
      </div>
    </article>
  );
};
