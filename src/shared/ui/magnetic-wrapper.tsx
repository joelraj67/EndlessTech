'use client';

import React from 'react';
import { useMagnetic } from '@/shared/lib/use-magnetic';

/**
 * MagneticWrapper — pulls its child subtly toward the cursor on hover.
 *
 * Isolates the magnetic effect in a Client Component boundary so parent
 * Server Components stay server-rendered. Wrap any inline CTA or icon.
 * No-op on touch devices and under prefers-reduced-motion.
 */
export function MagneticWrapper({
  children,
  strength,
  className,
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const { ref, style } = useMagnetic<HTMLSpanElement>(strength);
  return (
    <span ref={ref} style={style} className={className}>
      {children}
    </span>
  );
}
