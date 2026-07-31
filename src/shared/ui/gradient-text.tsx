import { cn } from '@/shared/lib/utils';

/**
 * Accent word span — the editorial flourish on headlines.
 *
 * Warm editorial skin (Vinny.io v2): the terracotta italic serif replaces
 * the prior blue/purple gradient-clipped headline span (gradient text on
 * every heading is a top AI tell). Kept under the `GradientText` name so
 * existing call sites stay drop-in.
 */
export function GradientText({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span className={cn('font-serif italic text-accent', className)}>{children}</span>
  );
}
