import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { INSIGHTS_ARTICLES } from '@/data/insightsData';
import { ArrowRight, ArrowUpRight, Clock, Sparkles, BookOpen } from 'lucide-react';

export const InsightsHomeSection: React.FC = () => {
  // Select 3 featured or recent editorial insights
  const studioInsights = INSIGHTS_ARTICLES.slice(0, 3);

  return (
    <Section spacingVariant="spacious" hasBorderTop className="relative overflow-hidden bg-[#030712]/50">
      <Container size="xl">
        <SectionHeading
          eyebrow="FROM THE STUDIO // EDITORIAL"
          title="Studio"
          highlight="Insights"
          description="Perspectives on technology, product architecture, search, and the digital systems shaping modern businesses."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {studioInsights.map((article, idx) => (
            <Card
              key={article.slug}
              as="article"
              variant="default"
              spotlight={true}
              withReticles={true}
              spotlightColor="rgba(32, 217, 243, 0.12)"
              className="p-6 sm:p-7 flex flex-col justify-between border-white/[0.08] hover:border-cyan-500/40 bg-[#071426]/85 group transition-all duration-300"
            >
              <div>
                {/* Header Metadata */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-white/[0.06]">
                  <span className="font-mono text-xs text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-0.5 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    DISPATCH 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight leading-snug group-hover:text-cyan-300 transition-colors mb-3">
                  <Link to={`/insights/${article.slug}`} className="inline-flex items-start justify-between w-full">
                    <span>{article.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-cyan-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2 mt-1" />
                  </Link>
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3 mb-6 font-sans">
                  {article.excerpt}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                <div className="flex items-center space-x-1.5 text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{article.readTime}</span>
                </div>

                <Link
                  to={`/insights/${article.slug}`}
                  className="inline-flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 font-semibold group/link"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 text-center">
          <Link to="/insights">
            <Button variant="secondary" size="md" className="inline-flex items-center group">
              <Sparkles className="w-4 h-4 mr-2 text-cyan-400" />
              <span>Explore all insights</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
};
