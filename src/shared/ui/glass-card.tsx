import { cn } from '@/shared/lib/utils';
import { accentClasses, type AccentKey } from '@/shared/lib/accent';

/**
 * Warm editorial surface card — the brand's primary card style.
 * Replaces the old glassmorphic surface with a paper card + hairline border.
 *
 * Set `interactive` for the hover-lift treatment used on
 * service/feature/testimonial cards.
 * 
 * Optional `accent` prop applies per-card palette colour to hover border/glow
 * and icon chip (replaces hardcoded cerulean/sky).
 */
export function GlassCard({
  interactive = false,
  accent,
  className,
  style,
  children,
}: {
  interactive?: boolean;
  accent?: AccentKey;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  const accentStyles = accent ? accentClasses(accent) : null;
  const cssVars = accentStyles
    ? {
        '--card-accent-border': `rgb(var(--color-${accent.replace('-', '-')}-rgb) / 0.6)`,
        '--card-accent-glow': `0 16px 48px rgb(var(--color-${accent.replace('-', '-')}-rgb) / 0.3), 0 0 24px rgb(var(--color-${accent.replace('-', '-')}-rgb) / 0.2)`,
      }
    : {};

  return (
    <div
      style={{ ...style, ...cssVars }}
      className={cn(
        'glass-card rounded-lg border border-line backdrop-blur-md transition-all duration-300',
        interactive && 'glass-card-hover',
        className,
      )}
    >
      {children}
    </div>
  );
}
