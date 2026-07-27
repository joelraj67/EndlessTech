'use client';

import React from 'react';
import { cn } from '@/shared/lib/utils';

interface InfiniteMarqueeProps {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  speed?: 'fast' | 'normal' | 'slow';
}

export function InfiniteMarquee({
  children,
  className,
  reverse = false,
  pauseOnHover = true,
  speed = 'normal',
}: InfiniteMarqueeProps) {
  const duration = speed === 'fast' ? '20s' : speed === 'normal' ? '40s' : '60s';

  return (
    <div
      className={cn(
        'group flex overflow-hidden p-2 [--gap:2rem] [gap:var(--gap)]',
        // Mask for fading edges
        '[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]',
        className
      )}
    >
      <div
        className={cn(
          'flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row',
          {
            '[animation-direction:reverse]': reverse,
            'group-hover:[animation-play-state:paused]': pauseOnHover,
          }
        )}
        style={{ '--duration': duration } as React.CSSProperties}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
