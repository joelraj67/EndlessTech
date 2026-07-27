import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { Container } from '@/shared/ui/container';
import { Section } from '@/shared/ui/section';
import { GlassCard } from '@/shared/ui/glass-card';
import { advantages } from '@/features/shared-sections/model/advantages';

/**
 * WhyChooseUsSection — the "Endless Tech Advantage" feature grid.
 *
 * Warm editorial skin (Vinny.io v2): recessed surface, terracotta icon
 * chips + metric pills, hover lift.
 * 
 * Enhanced: Each advantage card now uses a distinct color from the
 * extended editorial palette for visual differentiation while maintaining
 * terracotta as the single high-signal accent for CTAs.
 */
export default function WhyChooseUsSection() {
  return (
    <Section tone="surface" className="border-t border-line">
      <Container>
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-sm border border-line bg-surface-alt px-3.5 py-1.5 font-mono text-xs text-accent">
              <ShieldCheck className="h-4 w-4" />
              <span>THE ENDLESS TECH ADVANTAGE</span>
            </div>
            <h2 className="font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
              Technology Expertise. <br />
              <span className="text-accent italic">Real Business Impact.</span>
            </h2>
          </div>
          <p className="max-w-[420px] font-body text-base leading-relaxed text-muted">
            Why leading UK businesses and ambitious professionals choose Endless Tech as their trusted technology partner.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item) => {
            const Icon = item.icon;
            return (
              <GlassCard key={item.title} interactive className="group relative overflow-hidden p-8">
                <div className="mb-6 flex items-center justify-between">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg border border-${item.accentClass}/30 bg-${item.accentClass}/10 text-${item.accentClass} transition-transform group-hover:scale-110`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className={`rounded-sm border border-${item.accentClass}/20 bg-${item.accentClass}/10 px-3 py-1 font-mono text-xs font-semibold text-${item.accentClass}`}>
                    {item.metric}
                  </span>
                </div>
                <h3 className="mb-3 font-body text-xl font-semibold text-ink">{item.title}</h3>
                <p className="font-body text-sm leading-relaxed text-muted">{item.description}</p>
              </GlassCard>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
