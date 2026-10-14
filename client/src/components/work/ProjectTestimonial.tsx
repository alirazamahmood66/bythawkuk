import React from 'react';
import { Card } from '@/components/ui/Card';
import { WorkTestimonial } from '@/data/workData';
import { Quote } from 'lucide-react';

interface ProjectTestimonialProps {
  testimonial?: WorkTestimonial;
}

export const ProjectTestimonial: React.FC<ProjectTestimonialProps> = ({ testimonial }) => {
  // Strictly conditional: never render if no verified testimonial exists
  if (!testimonial || !testimonial.quote) {
    return null;
  }

  return (
    <section className="py-12 md:py-16 border-b border-white/[0.08]">
      <Card
        variant="default"
        spotlight={true}
        withReticles={true}
        spotlightColor="rgba(32, 217, 243, 0.1)"
        className="max-w-3xl mx-auto text-center p-8 sm:p-10 relative"
      >
        <Quote className="w-8 h-8 text-amber-400/40 mx-auto mb-4" />
        <blockquote className="text-lg sm:text-xl text-white font-medium italic leading-relaxed mb-6 font-serif">
          "{testimonial.quote}"
        </blockquote>
        <div>
          <div className="text-sm font-semibold text-white">
            {testimonial.name}
          </div>
          {(testimonial.role || testimonial.company) && (
            <div className="text-xs font-mono text-amber-400/80 mt-1">
              {[testimonial.role, testimonial.company].filter(Boolean).join(' // ')}
            </div>
          )}
        </div>
      </Card>
    </section>
  );
};
