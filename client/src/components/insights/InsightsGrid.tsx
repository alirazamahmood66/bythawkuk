import React from 'react';
import { InsightArticle } from '@/data/insightsData';
import { InsightCard } from './InsightCard';

interface InsightsGridProps {
  articles: InsightArticle[];
}

export const InsightsGrid: React.FC<InsightsGridProps> = ({ articles }) => {
  return (
    <section className="py-10 md:py-14" aria-label="Editorial Insights Collection">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
        {articles.map((article) => (
          <InsightCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
};
