import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cinematicEasing } from '@/utils/motion';

export interface AnimatedTextProps {
  text: string;
  type?: 'words' | 'characters';
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  delay?: number;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  type = 'words',
  className = '',
  as: Component = 'span',
  delay = 0,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <Component className={className}>{text}</Component>;
  }

  const items = type === 'words' ? text.split(' ') : text.split('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: type === 'words' ? 0.08 : 0.025,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 12,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: cinematicEasing,
      },
    },
  };

  return (
    <Component className={`inline-block ${className}`}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        aria-label={text}
        className="inline-block"
      >
        {items.map((item, index) => (
          <motion.span
            key={`${item}-${index}`}
            variants={itemVariants}
            className="inline-block"
          >
            {item}
            {type === 'words' && index !== items.length - 1 && '\u00A0'}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  );
};
