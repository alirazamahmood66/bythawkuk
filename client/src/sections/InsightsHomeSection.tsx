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
    <Section spacingVariant="spacious" hasBorderTop className="relative overflow-hidden bg-[#001119]">
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
              spotlightColor="rgba(35, 247, 219, 0.12)"
              className="p-6 sm:p-7 flex flex-col justify-between border-[#E8FFFC]/[0.08] hover:border-[#23F7DB]/40 bg-[#061F25]/85 group transition-all duration-300"
            >
              <div>
                {/* Header Metadata */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#E8FFFC]/[0.06]">
                  <span className="font-mono text-xs text-[#30F1BE] bg-[#008C6B]/20 border border-[#04A37B]/30 px-2.5 py-0.5 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-[10px] font-mono text-[#E8FFFC]/50">
                    DISPATCH 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#E8FFFC] tracking-tight leading-snug group-hover:text-[#23F7DB] transition-colors mb-3">
                  <Link to={`/insights/${article.slug}`} className="inline-flex items-start justify-between w-full">
                    <span>{article.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#23F7DB] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2 mt-1" />
                  </Link>
                </h3>

                <p className="text-xs sm:text-sm text-[#E8FFFC]/70 leading-relaxed line-clamp-3 mb-6 font-sans">
                  {article.excerpt}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-[#E8FFFC]/[0.06] flex items-center justify-between text-xs font-mono">
                <div className="flex items-center space-x-1.5 text-[#E8FFFC]/60">
                  <Clock className="w-3.5 h-3.5 text-[#23F7DB]" />
                  <span>{article.readTime}</span>
                </div>

                <Link
                  to={`/insights/${article.slug}`}
                  className="inline-flex items-center space-x-1 text-[#30F1BE] hover:text-[#23F7DB] font-semibold group/link"
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
              <Sparkles className="w-4 h-4 mr-2 text-[#23F7DB]" />
              <span>Explore all insights</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
};
