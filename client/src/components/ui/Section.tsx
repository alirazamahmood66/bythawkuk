import React from 'react';
import { spacing } from '@/styles/tokens';

export type SectionSpacing = 'compact' | 'standard' | 'spacious' | 'cinematic';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  spacingVariant?: SectionSpacing;
  hasBorderTop?: boolean;
  hasBorderBottom?: boolean;
  background?: 'transparent' | 'deep' | 'surface';
  className?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  spacingVariant = 'standard',
  hasBorderTop = false,
  hasBorderBottom = false,
  background = 'transparent',
  className = '',
  ...props
}) => {
  const bgClasses = {
    transparent: 'bg-transparent',
    deep: 'bg-[#020611]',
    surface: 'bg-[#070D18]/70',
  };

  const borderTopClass = hasBorderTop ? 'border-t border-[#FFFBEB]/[0.08]' : '';
  const borderBottomClass = hasBorderBottom ? 'border-b border-[#FFFBEB]/[0.08]' : '';

  return (
    <section
      className={`relative w-full ${spacing.section[spacingVariant]} ${bgClasses[background]} ${borderTopClass} ${borderBottomClass} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};
