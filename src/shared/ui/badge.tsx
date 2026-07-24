import { cn } from '@/shared/lib/utils';

export type BadgeTone = 'accent' | 'success' | 'warning' | 'danger' | 'info' | 'neutral';

const toneClass: Record<BadgeTone, string> = {
  accent: 'text-accent-active bg-accent-soft border-accent/20',
  success: 'text-success bg-success/10 border-success/20',
  warning: 'text-warning bg-warning/10 border-warning/20',
  danger: 'text-danger bg-danger/10 border-danger/20',
  info: 'text-info bg-info/10 border-info/20',
  neutral: 'text-muted bg-surface-alt border-line',
};

/**
 * Mono "eyebrow" pill — used as a section label, card tag, or status chip.
 * The mono voice is the brand's structural accent, used with restraint.
 */
export function Badge({
  tone = 'accent',
  className,
  children,
}: {
  tone?: BadgeTone;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-sm border px-3 py-1.5 font-mono text-xs tracking-wide',
        toneClass[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
