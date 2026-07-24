import { cn } from '@/shared/lib/utils';

/**
 * TerminalBlock — the brand's signature motif.
 *
 * A reusable terminal/code surface that speaks the company's vernacular:
 * the `endless` CLI. Used by the hero thesis and any place where showing
 * a command + its output is more honest than decorative copy.
 *
 * Warm editorial skin (Vinny.io v2): the terminal is the one dark surface
 * — a tinted ink panel with terracotta prompts and warm-tinted status chips.
 */
export type TerminalLine = {
  /** `$ command` style input line. */
  prompt?: string;
  /** Output/response line shown after a prompt. */
  output?: string;
  /** Status chip rendered inline at end of an output line. */
  status?: 'ok' | 'info' | 'active';
};

const statusChip: Record<NonNullable<TerminalLine['status']>, string> = {
  ok: 'text-success',
  info: 'text-accent',
  active: 'text-success',
};

export function TerminalBlock({
  title = 'endless-cli',
  lines,
  className,
}: {
  title?: string;
  lines: TerminalLine[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        'terminal-surface rounded-xl border border-white/10 font-mono text-xs text-paper/80',
        className,
      )}
    >
      <div className="mb-3 flex items-center gap-2 border-b border-white/10 pb-2">
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-paper/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-paper/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-paper/15" />
        </span>
        <span className="text-paper/50">{title}</span>
      </div>
      <div className="space-y-1">
        {lines.map((line, idx) => (
          <div key={idx} className="flex items-center gap-2">
            {line.prompt && (
              <span className="shrink-0 text-success">{line.prompt}</span>
            )}
            <span className="flex-1">
              {line.output && <span>{line.output}</span>}
              {line.status && (
                <span className={cn('ml-2', statusChip[line.status])}>
                  {line.status === 'ok' && '✔'}
                  {line.status === 'active' && '●'}
                  {line.status === 'info' && '→'}
                </span>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
