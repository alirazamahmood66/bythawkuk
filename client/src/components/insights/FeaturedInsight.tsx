import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/Card';
import { InsightArticle } from '@/data/insightsData';
import { ArrowRight, Clock, Sparkles } from 'lucide-react';

interface FeaturedInsightProps {
  article: InsightArticle;
}

export const FeaturedInsight: React.FC<FeaturedInsightProps> = ({ article }) => {
  return (
    <section className="py-8 md:py-12 border-b border-white/[0.08]" aria-label="Featured Insight">
      <div className="flex items-center space-x-2 text-xs font-mono text-amber-400 uppercase tracking-wider mb-4">
        <Sparkles className="w-3.5 h-3.5" />
        <span>// FEATURED EDITORIAL</span>
      </div>

      <Card
        variant="default"
        spotlight={true}
        withReticles={true}
        spotlightColor="rgba(245, 158, 11, 0.14)"
        className="rounded-2xl overflow-hidden group shadow-2xl p-0"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
          {/* Left / Top: Editorial Summary Content */}
          <div className="lg:col-span-7 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs text-amber-300 bg-amber-950/40 border border-amber-500/30 px-2.5 py-0.5 rounded-full">
                  {article.category}
                </span>
                <span className="text-[11px] font-mono text-slate-400 bg-white/[0.04] border border-white/[0.08] px-2 py-0.5 rounded-full">
                  EDITORIAL PREVIEW
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight group-hover:text-amber-200 transition-colors">
                <Link to={`/insights/${article.slug}`}>
                  {article.title}
                </Link>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed line-clamp-3 font-light">
                {article.excerpt}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-4 text-xs font-mono text-slate-400">
                <span>{article.author}</span>
                <span>&bull;</span>
                <div className="flex items-center space-x-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>{article.readTime}</span>
                </div>
              </div>

              <Link
                to={`/insights/${article.slug}`}
                className="inline-flex items-center space-x-2 text-xs font-mono font-medium text-amber-400 hover:text-amber-300 group-hover:translate-x-0.5 transition-transform"
              >
                <span>Read insight</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* Right / Bottom: Lightweight Geometric Visual Artwork */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0B0C10] via-[#040407] to-amber-950/20 border-t lg:border-t-0 lg:border-l border-white/[0.08] p-8 sm:p-10 flex items-center justify-center relative overflow-hidden min-h-[220px]">
            {/* Ambient visual gradient */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 70% 30%, #F59E0B 0%, #D97706 50%, transparent 80%)',
              }}
            />

            {/* Geometric architectural SVG illustration */}
            <svg
              className="w-full max-w-[280px] h-auto text-amber-400/60 group-hover:text-amber-400 transition-colors duration-500"
              viewBox="0 0 240 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Concentric rings and technical grid */}
              <circle cx="120" cy="90" r="70" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" opacity="0.4" />
              <circle cx="120" cy="90" r="45" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
              <circle cx="120" cy="90" r="20" stroke="#FBBF24" strokeWidth="1.5" opacity="0.8" />
              <line x1="20" y1="90" x2="220" y2="90" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 5" opacity="0.3" />
              <line x1="120" y1="10" x2="120" y2="170" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 5" opacity="0.3" />
              <circle cx="120" cy="90" r="4" fill="#06b6d4" />
              <circle cx="170" cy="60" r="3" fill="#38bdf8" />
              <circle cx="70" cy="120" r="2.5" fill="#FBBF24" />
            </svg>
          </div>
        </div>
      </Card>
    </section>
  );
};
