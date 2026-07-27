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
  style,
  children,
}: {
  interactive?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  return (
    <div
      style={style}
      className={cn(
        'glass-card rounded-lg border border-line backdrop-blur-md transition-all duration-300',
        interactive && 'glass-card-hover hover:border-thistle/40 hover:shadow-lg',
        className,
      )}
    >
      {children}
    </div>
  );
}
