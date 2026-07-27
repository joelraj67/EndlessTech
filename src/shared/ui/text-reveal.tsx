'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { cn } from '@/shared/lib/utils';

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
}

/**
 * TextReveal — Kinetic Staggered Typography Primitive.
 *
 * Animates text word-by-word into view using Framer Motion spring physics.
 */
export function TextReveal({ children, className, delay = 0 }: TextRevealProps) {
  // Split text into words while preserving spaces
  const words = children.split(' ').map(word => word + '\u00A0');

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 30,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      style={{ display: 'inline-flex', flexWrap: 'wrap' }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={cn(className)}
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index} style={{ display: 'inline-block' }}>
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
