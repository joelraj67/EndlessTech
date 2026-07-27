import { cn } from '@/shared/lib/utils';

export type BadgeTone = 'accent' | 'success' | 'warning' | 'danger' | 'info' | 'neutral';

const toneClass: Record<BadgeTone, string> = {
  accent: 'text-sky-300 bg-sky-500/20 border-sky-400/40 shadow-[0_0_14px_rgba(56,189,248,0.25)]',
  success: 'text-emerald-300 bg-emerald-500/20 border-emerald-400/40 shadow-[0_0_14px_rgba(52,211,153,0.25)]',
  warning: 'text-amber-300 bg-amber-500/20 border-amber-400/40 shadow-[0_0_14px_rgba(251,191,36,0.25)]',
  danger: 'text-rose-300 bg-rose-500/20 border-rose-400/40 shadow-[0_0_14px_rgba(251,113,133,0.25)]',
  info: 'text-cyan-300 bg-cyan-500/20 border-cyan-400/40 shadow-[0_0_14px_rgba(103,232,249,0.25)]',
  neutral: 'text-slate-200 bg-white/10 border-white/25',
};

/**
 * Mono "eyebrow" pill — used as a section label, card tag, or status chip.
 * High Contrast (WCAG AAA) for Dark Mode.
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
        'inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-xs font-semibold tracking-wide backdrop-blur-md',
        toneClass[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
