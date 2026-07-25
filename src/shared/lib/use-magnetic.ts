'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * useMagnetic — pulls an element subtly toward the cursor on hover.
 *
 * Award-winning CTA pattern (Linear, Vercel): buttons that drift toward
 * the pointer feel responsive and tactile. Returns a ref + transform style.
 * Respects prefers-reduced-motion (no transform). Pointer-events only —
 * no cost on touch devices.
 */
const MAGNETIC_STRENGTH = 0.25; // how far the element follows the cursor
const RESET_DELAY_MS = 200;

export function useMagnetic<T extends HTMLElement>(strength = MAGNETIC_STRENGTH) {
  const ref = useRef<T>(null);
  const [transform, setTransform] = useState<string>('');

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Skip on touch / reduced-motion devices.
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = window.matchMedia('(hover: none)').matches;
    if (prefersReduced || isTouch) return;

    const handleMove = (e: MouseEvent) => {
      const rect = node.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = (e.clientX - centerX) * strength;
      const dy = (e.clientY - centerY) * strength;
      setTransform(`translate(${dx}px, ${dy}px)`);
    };

    const handleLeave = () => {
      setTransform(`translate(0px, 0px)`);
    };

    node.addEventListener('mousemove', handleMove);
    node.addEventListener('mouseleave', handleLeave);
    return () => {
      node.removeEventListener('mousemove', handleMove);
      node.removeEventListener('mouseleave', handleLeave);
    };
  }, [strength]);

  return { ref, style: { transform, transition: `transform ${RESET_DELAY_MS}ms var(--ease-out, ease-out)` } };
}
