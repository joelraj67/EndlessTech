import { cn } from '@/shared/lib/utils';
import type { TerminalLine } from '@/shared/ui/terminal-block';

export type { TerminalLine };

/**
 * HeroTerminal — the signature element of the EndlessTech identity.
 *
 * A full CLI session that reveals line-by-line on load (one orchestrated
 * moment), ends on a blinking cursor, then stays still. This is the only
 * ambient motion on the page — everything else is disciplined.
 *
 * Built with CSS animation (no JS) so it stays light and respects
 * prefers-reduced-motion (handled globally in globals.css).
 *
 * Warm editorial skin (Vinny.io v2): the terminal is the one dark surface
 * — a tinted ink panel (#2A2420) rather than cold black, with terracotta
 * prompts and warm-tinted status chips.
 */
const sessionLines: TerminalLine[] = [
  { prompt: '$', output: 'endless deploy --env production', status: 'info' },
  { prompt: '›', output: 'Cloud infrastructure: live', status: 'ok' },
  { prompt: '›', output: 'Security audit: passed', status: 'ok' },
  { prompt: '›', output: 'Migration: zero downtime', status: 'ok' },
  { prompt: '$', output: 'endless train --cohort 2025' },
  { prompt: '›', output: 'AWS Solutions Architect: active', status: 'active' },
  { prompt: '›', output: 'Certification pass rate 95% — on track', status: 'ok' },
];

const statusClass: Record<NonNullable<TerminalLine['status']>, string> = {
  ok: 'text-success',
  info: 'text-accent',
  active: 'text-success',
};

const statusGlyph: Record<NonNullable<TerminalLine['status']>, string> = {
  ok: '✔',
  info: '→',
  active: '●',
};

export function HeroTerminal({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'terminal-surface rounded-xl border border-white/10 font-mono text-xs text-paper/80 shadow-2xl',
        className,
      )}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-paper/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-paper/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-paper/15" />
        </span>
        <span className="text-paper/40">endless-cli ~ production</span>
      </div>

      {/* Session body — each line staggers in via --line-idx */}
      <div className="space-y-1.5 p-5">
        {sessionLines.map((line, idx) => (
          <div
            key={idx}
            className="terminal-line flex items-center gap-2"
            style={{ ['--line-idx' as string]: idx }}
          >
            {line.prompt && (
              <span className="shrink-0 text-success">{line.prompt}</span>
            )}
            <span className="flex-1">
              {line.output && <span className="text-paper/85">{line.output}</span>}
              {line.status && (
                <span className={cn('ml-2', statusClass[line.status])}>
                  {statusGlyph[line.status]}
                </span>
              )}
            </span>
          </div>
        ))}

        {/* Blinking cursor — the resting state of the signature */}
        <div className="terminal-line flex items-center gap-2 pt-1" style={{ ['--line-idx' as string]: sessionLines.length }}>
          <span className="shrink-0 text-success">$</span>
          <span className="terminal-cursor bg-accent">&nbsp;</span>
        </div>
      </div>
    </div>
  );
}
