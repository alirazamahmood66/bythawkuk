import React from 'react';
import { WorkGalleryItem } from '@/data/workData';
import { Card } from '@/components/ui/Card';

interface ProjectGalleryProps {
  gallery?: WorkGalleryItem[];
  title: string;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ gallery, title }) => {
  if (!gallery || gallery.length === 0) {
    return null;
  }

  return (
    <section className="py-12 md:py-16 border-b border-[#E8FFFC]/[0.08]">
      <div className="mb-8">
        <span className="text-xs font-mono tracking-wider text-[#23F7DB] uppercase block mb-2 font-semibold">
          // INTERFACE ARTIFACTS
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#E8FFFC] tracking-tight font-sans">
          Visual System & Screen Architecture
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {gallery.map((item, idx) => (
          <Card
            key={idx}
            as="figure"
            variant="default"
            spotlight={true}
            withReticles={true}
            padding="none"
            className="rounded-2xl overflow-hidden border border-[#E8FFFC]/[0.08] bg-[#061F25]/90 group shadow-xl"
          >
            <div className="aspect-video w-full overflow-hidden relative">
              <img
                src={item.src}
                alt={item.alt || `${title} preview ${idx + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {item.caption && (
              <figcaption className="p-4 text-xs font-mono text-[#E8FFFC]/70 border-t border-[#E8FFFC]/[0.08] bg-[#001119]/50 font-sans">
                {item.caption}
              </figcaption>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
};
