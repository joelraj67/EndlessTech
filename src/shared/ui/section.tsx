import { cn } from '@/shared/lib/utils';

/**
 * Vertical page section with a configurable background tone and optional id.
 * Unified Dark Glass (Aura Enterprise Design System).
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
  paper: 'bg-bg text-slate-100',
  surface: 'bg-surface/60 text-slate-100',
  'surface-alt': 'bg-surface-alt/70 text-slate-100',
  panel: 'bg-panel text-white',
  transparent: '',
  thistle: 'bg-thistle/10 text-slate-100',
  'lavender-grey': 'bg-lavender-grey/10 text-slate-100',
  cerulean: 'bg-cerulean/15 text-slate-100',
  'charcoal-blue': 'bg-charcoal-blue text-white',
  'jet-black': 'bg-jet-black text-white',
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
      className={cn('relative py-36', toneClass[tone], className)}
    >
      {children}
    </section>
  );
}
