import React from 'react';
import { spacing } from '@/styles/tokens';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  as?: 'div' | 'section' | 'article' | 'main' | 'nav';
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'lg',
  as: Component = 'div',
  ...props
}) => {
  const sizeClasses = {
    sm: spacing.container.sm,
    md: spacing.container.md,
    lg: spacing.container.lg,
    xl: spacing.container.xl,
    full: 'max-w-full',
  };

  const combinedClassName = `w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 ${sizeClasses[size]} ${className}`;

  if (Component === 'section') {
    return <section className={combinedClassName} {...props}>{children}</section>;
  }
  if (Component === 'article') {
    return <article className={combinedClassName} {...props}>{children}</article>;
  }
  if (Component === 'main') {
    return <main className={combinedClassName} {...props}>{children}</main>;
  }
  if (Component === 'nav') {
    return <nav className={combinedClassName} {...props}>{children}</nav>;
  }

  return (
    <div className={combinedClassName} {...props}>
      {children}
    </div>
  );
};
