'use client';

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/shared/lib/utils';

/**
 * Reveal — lightweight scroll-triggered fade-up.
 *
 * Uses IntersectionObserver (no animation library) so it stays performant
 * and respects prefers-reduced-motion (handled globally in globals.css).
 * The signature pattern on award-winning sites (Vercel, Linear, Awwwards
 * SOTD): sections lift gently into view as the reader scrolls.
 *
 * Wrap any block; pass `delay` (ms) to stagger card grids.
 */
const REVEAL_THRESHOLD = 0.15;
const REVEAL_ROOT_MARGIN = '0px 0px -80px 0px';

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = 'div',
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: React.ElementType;
}) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Reduced motion: show immediately, no observer needed.
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: REVEAL_THRESHOLD, rootMargin: REVEAL_ROOT_MARGIN },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={cn('reveal', isVisible && 'reveal-visible', className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
