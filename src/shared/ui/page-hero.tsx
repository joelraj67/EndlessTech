import { cn } from '@/shared/lib/utils';
import { Container } from './container';
import { Badge } from './badge';
import type { BadgeTone } from './badge';

/**
 * PageHero — the shared hero header used at the top of every interior page.
 *
 * Replaces 7 hand-built hero blocks that were structurally identical:
 * glow → badge → h1 with accent → subtitle.
 *
 * Warm editorial skin (Vinny.io v2): a paper panel with a soft warm glow
 * (no scattered ambient blurs), serif display headline, terracotta accent
 * word.
 */
export function PageHero({
  eyebrow,
  eyebrowIcon: EyebrowIcon,
  eyebrowTone = 'accent',
  glowColor = 'bg-accent/10',
  title,
  subtitle,
}: {
  eyebrow: string;
  eyebrowIcon?: React.ComponentType<{ className?: string }>;
  eyebrowTone?: BadgeTone;
  glowColor?: string;
  title: React.ReactNode;
  subtitle: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-paper py-24">
      <div
        className={cn(
          'pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]',
          glowColor,
        )}
      />
      <Container className="relative z-10">
        <div className="mx-auto max-w-[780px] text-center">
          <Badge tone={eyebrowTone} className="mb-6">
            {EyebrowIcon && <EyebrowIcon className="h-4 w-4" />}
            <span>{eyebrow}</span>
          </Badge>
          <h1 className="mb-6 font-display text-4xl font-medium leading-tight tracking-tight text-ink sm:text-6xl">
            {title}
          </h1>
          <p className="font-body text-lg leading-relaxed text-muted">
            {subtitle}
          </p>
        </div>
      </Container>
    </section>
  );
}
