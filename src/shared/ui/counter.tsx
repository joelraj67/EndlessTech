'use client';

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/shared/lib/utils';

/**
 * Counter — animates a numeric value from 0 to target when scrolled into view.
 *
 * Accepts string values like '95%', '200+', '100%' and animates only the
 * numeric portion, preserving the suffix. Uses requestAnimationFrame with
 * an ease-out curve. Respects prefers-reduced-motion (shows final value).
 *
 * Award-winning pattern: trust metrics that count up feel alive and draw
 * the eye to the proof points that earn the page.
 */
const ANIMATION_DURATION_MS = 1600;
const REVEAL_THRESHOLD = 0.4;

/** Extract the leading number and trailing suffix from a value string. */
function parseValue(value: string): { target: number; suffix: string } {
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { target: 0, suffix: value };
  return { target: parseFloat(match[1]), suffix: match[2] };
}

/** Ease-out-quint: fast start, slow finish — feels premium. */
function easeOutQuint(t: number): number {
  return 1 - Math.pow(1 - t, 5);
}

export function Counter({
  value,
  className,
  duration = ANIMATION_DURATION_MS,
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const { target, suffix } = parseValue(value);
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Reduced motion: show final value immediately.
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setDisplay(target);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          setDisplay(target * easeOutQuint(progress));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: REVEAL_THRESHOLD },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration]);

  const isFloat = !Number.isInteger(target);
  const rendered = isFloat ? display.toFixed(1) : Math.round(display).toString();

  return (
    <span ref={ref} className={cn(className)}>
      {rendered}
      {suffix}
    </span>
  );
}
