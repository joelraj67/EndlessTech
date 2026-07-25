'use client';

import React, { useEffect, useState } from 'react';

/**
 * ReadingProgress — thin terracotta scroll-progress bar (Linear pattern).
 *
 * Fixed to the top of the viewport, fills as the reader scrolls. A subtle
 * presence cue that signals article length. Respects prefers-reduced-motion
 * (the bar still reflects position but the width transition is instant).
 */
const PROGRESS_UPDATE_MS = 16;

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-[60] h-0.5 bg-accent"
      style={{ width: `${progress}%`, transition: `width ${PROGRESS_UPDATE_MS}ms linear` }}
      aria-hidden="true"
    />
  );
}
