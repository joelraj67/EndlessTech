import { cn } from '@/shared/lib/utils';

type GradientTextTone = 'blue' | 'purple';

/**
 * Accent word span — the editorial flourish on headlines.
 *
 * Warm editorial skin (Vinny.io v2): the terracotta italic serif replaces
 * the prior blue/purple gradient-clipped headline span (gradient text on
 * every heading is a top AI tell). Kept under the `GradientText` name so
 * existing call sites stay drop-in; both tones resolve to the accent.
 */
export function GradientText({
  tone = 'blue',
  className,
  children,
}: {
  tone?: GradientTextTone;
  className?: string;
  children: React.ReactNode;
}) {
  void tone;
  return (
    <span className={cn('gradient-text', className)}>{children}</span>
  );
}
