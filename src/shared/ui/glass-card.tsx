import { cn } from '@/shared/lib/utils';

/**
 * Warm editorial surface card — the brand's primary card style.
 * Replaces the old glassmorphic surface with a paper card + hairline border.
 *
 * Set `interactive` for the hover-lift treatment used on
 * service/feature/testimonial cards.
 */
export function GlassCard({
  interactive = false,
  className,
  children,
}: {
  interactive?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        'glass-card rounded-lg border border-line',
        interactive && 'glass-card-hover',
        className,
      )}
    >
      {children}
    </div>
  );
}
