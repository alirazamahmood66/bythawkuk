import React from 'react';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  titleAs?: 'h1' | 'h2' | 'h3';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  highlight,
  description,
  align = 'left',
  className = '',
  titleAs: TitleTag = 'h2',
}) => {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
  };

  return (
    <div className={`flex flex-col ${alignClasses[align]} max-w-3xl mb-12 sm:mb-16 ${className}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#23F7DB] shadow-[0_0_8px_rgba(35,247,219,0.8)]" />
          <span className="text-mono-label">{eyebrow}</span>
        </div>
      )}

      <TitleTag className="heading-2 text-white">
        {title}{' '}
        {highlight && (
          <span className="bg-gradient-to-r from-[#23F7DB] via-[#30F1BE] to-[#04A37B] bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </TitleTag>

      {description && (
        <p className="text-lead mt-4 text-slate-400 max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
};
