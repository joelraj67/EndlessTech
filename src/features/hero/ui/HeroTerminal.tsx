'use client';

import React, { useState } from 'react';
import { Copy, Check, Terminal as TerminalIcon, Sparkles } from 'lucide-react';
import { cn } from '@/shared/lib/utils';
import type { TerminalLine } from '@/shared/ui/terminal-block';

export type { TerminalLine };

interface PresetCommand {
  id: string;
  name: string;
  command: string;
  description: string;
  lines: TerminalLine[];
}

const presets: PresetCommand[] = [
  {
    id: 'deploy',
    name: 'Cloud Deploy',
    command: 'endlesstech deploy --env production --region eu-west-2',
    description: 'AWS / Azure Zero-Downtime Migration',
    lines: [
      { prompt: '$', output: 'endlesstech deploy --env production --region eu-west-2', status: 'info' },
      { prompt: '›', output: 'Validating Terraform IAC state & security policies', status: 'ok' },
      { prompt: '›', output: 'Kubernetes cluster (EKS/AKS): 12 nodes online', status: 'ok' },
      { prompt: '›', output: 'Zero-downtime blue/green traffic switch', status: 'ok' },
      { prompt: '›', output: 'Status: 100% operational in London (eu-west-2)', status: 'active' },
    ],
  },
  {
    id: 'academy',
    name: 'IT Academy',
    command: 'endlesstech train --course aws-architect --cohort 2026',
    description: 'UK Tech Upskilling & Certification',
    lines: [
      { prompt: '$', output: 'endlesstech train --course aws-architect --cohort 2026', status: 'info' },
      { prompt: '›', output: 'Loading interactive hands-on sandbox labs', status: 'ok' },
      { prompt: '›', output: 'Module: High Availability & Multi-Region Failover', status: 'ok' },
      { prompt: '›', output: 'Exam Readiness Score: 96% (Target: 85%+)', status: 'ok' },
      { prompt: '›', output: 'Status: UK Academy Cohort Active', status: 'active' },
    ],
  },
  {
    id: 'ai-pipeline',
    name: 'AI Analytics',
    command: 'endlesstech ai --pipeline rag-vector --model claude-3-5',
    description: 'Intelligent Enterprise Automation',
    lines: [
      { prompt: '$', output: 'endlesstech ai --pipeline rag-vector --model claude-3-5', status: 'info' },
      { prompt: '›', output: 'Connecting vector database & document store', status: 'ok' },
      { prompt: '›', output: 'Processing 50,000 enterprise telemetry streams/sec', status: 'ok' },
      { prompt: '›', output: 'Automated Insight: Operational efficiency +38%', status: 'ok' },
      { prompt: '›', output: 'Status: AI Data Pipeline Streaming', status: 'active' },
    ],
  },
];

const statusClass: Record<NonNullable<TerminalLine['status']>, string> = {
  ok: 'text-sky-300 font-semibold',
  info: 'text-amber-400 font-semibold',
  active: 'text-emerald-400 font-bold',
};

const statusGlyph: Record<NonNullable<TerminalLine['status']>, string> = {
  ok: '✔',
  info: '→',
  active: '●',
};

export function HeroTerminal({ className }: { className?: string }) {
  const [activeTab, setActiveTab] = useState<string>('deploy');
  const [copied, setCopied] = useState(false);

  const currentPreset = presets.find((p) => p.id === activeTab) || presets[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentPreset.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        'terminal-surface rounded-xl border border-white/20 font-mono text-xs text-slate-100 shadow-2xl overflow-hidden',
        className,
      )}
      style={{
        background: 'linear-gradient(180deg, #0b132b 0%, #070d1d 100%)',
      }}
    >
      {/* Interactive Title Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/15 bg-black/60 px-4 py-3">
        <div className="flex items-center gap-3">
          <span className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-rose-500" />
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
          </span>
          <div className="flex items-center gap-1.5 text-slate-300 text-[11px] font-semibold">
            <TerminalIcon className="h-3.5 w-3.5 text-sky-400" />
            <span className="hidden sm:inline">endlesstech-cli v2.4.0 ~ </span>
            <span className="text-sky-300">{currentPreset.name}</span>
          </div>
        </div>

        {/* Command Preset Tabs */}
        <div className="flex items-center gap-1.5">
          {presets.map((preset) => (
            <button
              key={preset.id}
              onClick={() => setActiveTab(preset.id)}
              className={cn(
                'px-3 py-1 rounded-md text-[11px] font-mono transition-all',
                activeTab === preset.id
                  ? 'bg-sky-500 text-white font-bold shadow-[0_0_12px_rgba(56,189,248,0.4)]'
                  : 'text-slate-300 hover:text-white hover:bg-white/10',
              )}
            >
              {preset.name}
            </button>
          ))}

          {/* Copy Command Button */}
          <button
            onClick={handleCopy}
            className="ml-2 inline-flex items-center gap-1 px-2.5 py-1 rounded-md border border-white/20 bg-white/10 text-[11px] text-slate-200 hover:text-white hover:bg-white/20 transition-colors"
            title="Copy command"
          >
            {copied ? (
              <>
                <Check className="h-3 w-3 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Copied</span>
              </>
            ) : (
              <>
                <Copy className="h-3 w-3" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Preset Description Sub-header */}
      <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-5 py-2.5 text-[11px] text-slate-300">
        <span className="flex items-center gap-1.5 text-sky-300 font-medium">
          <Sparkles className="h-3.5 w-3.5 text-amber-400" />
          <span>{currentPreset.description}</span>
        </span>
        <span className="font-mono text-[10px] text-emerald-400 font-semibold tracking-wider">● SESSION LIVE</span>
      </div>

      {/* Terminal Output Session */}
      <div className="space-y-2.5 p-6 min-h-[220px]">
        {currentPreset.lines.map((line, idx) => (
          <div
            key={`${currentPreset.id}-${idx}`}
            className="terminal-line flex items-start gap-2.5 leading-relaxed"
            style={{ ['--line-idx' as string]: idx }}
          >
            {line.prompt && (
              <span className={cn('shrink-0 select-none font-bold', line.prompt === '$' ? 'text-amber-400' : 'text-sky-400')}>
                {line.prompt}
              </span>
            )}
            <span className="flex-1">
              {line.output && <span className="text-slate-100 font-mono">{line.output}</span>}
              {line.status && (
                <span className={cn('ml-2 font-mono text-[11px]', statusClass[line.status])}>
                  {statusGlyph[line.status]}
                </span>
              )}
            </span>
          </div>
        ))}

        {/* Blinking cursor */}
        <div className="flex items-center gap-2 pt-2">
          <span className="shrink-0 text-amber-400 font-bold">$</span>
          <span className="terminal-cursor h-4 w-2 bg-sky-400 inline-block animate-pulse">&nbsp;</span>
        </div>
      </div>
    </div>
  );
}
