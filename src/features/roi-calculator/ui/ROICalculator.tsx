'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calculator, TrendingUp, Award, ArrowRight } from 'lucide-react';
import { Container } from '@/shared/ui/container';
import { GlassCard } from '@/shared/ui/glass-card';
import { pathways } from '@/features/roi-calculator/model/roi-pathways';
import { withBasePath } from '@/shared/lib/paths';

/**
 * ROICalculator — interactive pathway selector showing impact + success metrics.
 * Data sourced from content/roi-pathways.ts (single source of truth).
 *
 * Warm editorial skin (Vinny.io v2): paper card, terracotta accent on the
 * selected pathway, recessed metrics panel, warm shadows.
 * 
 * Enhanced: Uses extended editorial palette for pathway differentiation:
 * - Thistle (AWS), Cerulean (Azure), Lavender Grey (Full-Stack), Charcoal Blue (Cloud Migration)
 */
export default function ROICalculator() {
  const [selectedId, setSelectedId] = useState(pathways[0].id);
  const selected = pathways.find((p) => p.id === selectedId) ?? pathways[0];

  const getAccentClasses = (accentClass: string) => ({
    border: `border-${accentClass}`,
    bg: `bg-${accentClass}`,
    bgSoft: `bg-${accentClass}/10`,
    text: `text-${accentClass}`,
    textActive: `text-${accentClass}`,
    shadow: `shadow-[0_0_10px_var(--color-${accentClass.replace('-', '-')})]`,
  });

  return (
    <GlassCard className="relative overflow-hidden p-8 rounded-xl border border-line shadow-lg sm:p-10">
      <div className="mb-6 flex w-fit items-center gap-2 rounded-sm border border-accent/20 bg-accent-soft px-3.5 py-1.5 font-mono text-xs text-accent">
        <Calculator className="h-4 w-4" />
        <span>INTERACTIVE IMPACT CALCULATOR</span>
      </div>

      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
        {/* Pathway Selectors Left */}
        <div className="space-y-3 lg:col-span-6">
          <h3 className="mb-4 font-display text-2xl font-medium text-ink">
            Select Your Target Pathway or Project Scope
          </h3>

          {pathways.map((item) => {
            const accent = getAccentClasses(item.accentClass);
            return (
              <button
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`w-full text-left p-4 rounded-md border transition-all flex items-center justify-between ${
                  selectedId === item.id
                    ? `${accent.border} ${accent.bgSoft} text-ink shadow-md`
                    : 'border-line bg-surface text-muted hover:bg-surface-alt hover:text-ink'
                }`}
              >
              <div>
                <p className="font-body text-sm font-semibold">{item.name}</p>
                <p className="font-mono text-xs text-muted">{item.type} • {item.duration}</p>
              </div>
              <span className={`w-3 h-3 rounded-full ${selectedId === item.id ? `${accent.bg} ${accent.shadow}` : 'bg-line-strong'}`} />
            </button>
            );
          })}
        </div>

        {/* Dynamic ROI Metrics Card Right */}
        <div className="lg:col-span-6">
          <div className="rounded-lg border border-line bg-surface-alt p-8 relative overflow-hidden space-y-6">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <div>
                <span className="font-mono text-xs text-muted uppercase">Selected Target</span>
                <h4 className="font-body text-xl font-semibold text-ink">{selected.name}</h4>
              </div>
              <span className={`px-3 py-1 rounded-sm ${getAccentClasses(selected.accentClass).bgSoft} ${getAccentClasses(selected.accentClass).textActive} text-xs font-mono border ${getAccentClasses(selected.accentClass).border}/30`}>
                {selected.type}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-md bg-surface border border-line">
                <div className="flex items-center gap-1.5 font-mono text-xs text-muted mb-1">
                  <TrendingUp className="w-3.5 h-3.5 text-success" />
                  <span>Expected Impact</span>
                </div>
                <p className="font-display text-xl font-medium text-success">{selected.avgSalaryBoost}</p>
              </div>

              <div className="p-4 rounded-md bg-surface border border-line">
                <div className="flex items-center gap-1.5 font-mono text-xs text-muted mb-1">
                  <Award className="w-3.5 h-3.5" style={{ color: selected.accentColor }} />
                  <span>Success Metric</span>
                </div>
                <p className="font-display text-xl font-medium" style={{ color: selected.accentColor }}>{selected.passRate}</p>
              </div>
            </div>

            <p className="font-body text-xs text-ink leading-relaxed bg-surface p-3.5 rounded-md border border-line">
              {selected.prepDetails}
            </p>

            <Link
              href={withBasePath('/contact')}
              className="w-full inline-flex items-center justify-center gap-2 bg-accent text-white py-3.5 rounded-md text-sm font-semibold hover:bg-accent-hover shadow-md shadow-accent/25 transition-all duration-200 ease-out hover:-translate-y-0.5 active:scale-[0.97]"
            >
              <span>Get Personalized Roadmap & Pricing</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

          </div>
        </div>
      </div>
    </GlassCard>
  );
}
