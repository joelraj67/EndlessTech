import { cn } from '@/shared/lib/utils';

/**
 * Vertical page section with a configurable background tone and optional id.
 * Owns the vertical rhythm + alternating bg so callers never repeat it.
 *
 * Warm editorial palette (Vinny.io v2): `paper` alternates with `surface`
 * (pure white) and `surface-alt` (recessed). `panel` is the single dark
 * surface, reserved for the terminal/footer vernacular.
 * 
 * Extended palette (cool editorial tones): `thistle`, `lavender-grey`, `cerulean`,
 * `charcoal-blue`, `jet-black` — semantic tokens for specific sections.
 */
type SectionTone =
  | 'paper'
  | 'surface'
  | 'surface-alt'
  | 'panel'
  | 'transparent'
  | 'thistle'
  | 'lavender-grey'
  | 'cerulean'
  | 'charcoal-blue'
  | 'jet-black';

const toneClass: Record<SectionTone, string> = {
  paper: 'bg-paper text-ink',
  surface: 'bg-surface text-ink',
  'surface-alt': 'bg-surface-alt text-ink',
  panel: 'bg-panel text-paper',
  transparent: '',
  thistle: 'bg-thistle/10 text-ink',
  'lavender-grey': 'bg-lavender-grey/10 text-ink',
  cerulean: 'bg-cerulean/10 text-ink',
  'charcoal-blue': 'bg-charcoal-blue text-paper',
  'jet-black': 'bg-jet-black text-paper',
};

export function Section({
  id,
  tone = 'paper',
  className,
  children,
}: {
  id?: string;
  tone?: SectionTone;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn('relative py-32', toneClass[tone], className)}
    >
      {children}
    </section>
  );
}
