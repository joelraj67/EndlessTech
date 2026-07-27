import { cn } from '@/shared/lib/utils';
import { Container } from './container';
import { Badge } from './badge';
import type { BadgeTone } from './badge';

/**
 * PageHero — the shared hero header used at the top of every interior page.
 * Unified Dark Glass (Aura Enterprise Design System).
 */
export function PageHero({
  eyebrow,
  eyebrowIcon: EyebrowIcon,
  eyebrowTone = 'accent',
  glowColor = 'bg-cerulean/15',
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
    <section className="relative overflow-hidden border-b border-white/10 bg-bg pb-20 pt-32">
      {/* Cinematic mesh atmosphere */}
      <div
        className={cn(
          'pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-35 blur-[160px]',
          glowColor,
        )}
      />
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-[0.35]" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-[820px] text-center">
          <Badge tone={eyebrowTone} className="mb-6">
            {EyebrowIcon && <EyebrowIcon className="h-4 w-4" />}
            <span>{eyebrow}</span>
          </Badge>
          <h1 className="mb-6 font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="font-body text-lg leading-relaxed text-slate-300">
            {subtitle}
          </p>
        </div>
      </Container>
    </section>
  );
}
