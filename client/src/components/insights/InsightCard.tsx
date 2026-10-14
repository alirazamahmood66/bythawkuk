import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/Card';
import { InsightArticle } from '@/data/insightsData';
import { ArrowRight, Clock } from 'lucide-react';

interface InsightCardProps {
  article: InsightArticle;
}

export const InsightCard: React.FC<InsightCardProps> = ({ article }) => {
  return (
    <Card
      as="article"
      variant="default"
      spotlight={true}
      withReticles={true}
      spotlightColor="rgba(245, 158, 11, 0.12)"
      className="p-6 sm:p-7 flex flex-col justify-between group shadow-xl"
    >
      <div>
        {/* Category & Status Badges */}
        <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-white/[0.06]">
          <span className="font-mono text-xs text-amber-300 bg-amber-950/40 border border-amber-500/30 px-2.5 py-0.5 rounded-full">
            {article.category}
          </span>
          <span className="text-[10px] font-mono text-slate-400 bg-white/[0.04] border border-white/[0.08] px-2 py-0.5 rounded">
            EDITORIAL PREVIEW
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug group-hover:text-amber-200 transition-colors mb-3">
          <Link to={`/insights/${article.slug}`}>
            {article.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light line-clamp-3 mb-6">
          {article.excerpt}
        </p>
      </div>

      {/* Footer Info & Action */}
      <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
        <div className="flex items-center space-x-1.5 text-slate-400">
          <Clock className="w-3.5 h-3.5 text-amber-400" />
          <span>{article.readTime}</span>
        </div>

        <Link
          to={`/insights/${article.slug}`}
          className="inline-flex items-center space-x-1 text-amber-400 hover:text-amber-300 group-hover:translate-x-0.5 transition-transform font-medium"
          aria-label={`Read insight: ${article.title}`}
        >
          <span>Read</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </Card>
  );
};
