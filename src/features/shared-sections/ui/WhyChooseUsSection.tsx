import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { Container } from '@/shared/ui/container';
import { Section } from '@/shared/ui/section';
import { GlassCard } from '@/shared/ui/glass-card';
import { Badge } from '@/shared/ui/badge';
import { GradientText } from '@/shared/ui/gradient-text';
import { advantages } from '@/features/shared-sections/model/advantages';

/**
 * WhyChooseUsSection — the "Endless Tech Advantage" feature grid.
 * High-Contrast AAA Typography & Smoked Glass Cards.
 */
export default function WhyChooseUsSection() {
  return (
    <Section tone="charcoal-blue" className="border-t border-white/10">
      <Container>
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Badge tone="accent" className="mb-4">
              <ShieldCheck className="h-4 w-4 text-sky-300" />
              <span>THE ENDLESS TECH ADVANTAGE</span>
            </Badge>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Technology Expertise. <br />
              <GradientText>Real Business Impact.</GradientText>
            </h2>
          </div>
          <p className="max-w-[420px] font-body text-base leading-relaxed text-slate-300">
            Why leading UK businesses and ambitious professionals choose Endless Tech as their trusted technology partner.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item) => {
            const Icon = item.icon;
            return (
              <GlassCard
                key={item.title}
                interactive
                className="group relative overflow-hidden p-9 border-white/15 hover:border-sky-400/50"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-sky-400/30 bg-sky-500/15 text-sky-300 transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full border border-sky-400/30 bg-sky-500/15 px-3 py-1 font-mono text-xs font-bold text-sky-300 shadow-[0_0_12px_rgba(56,189,248,0.25)]">
                    {item.metric}
                  </span>
                </div>
                <h3 className="mb-3 font-body text-xl font-bold text-white">{item.title}</h3>
                <p className="font-body text-sm leading-relaxed text-slate-200">{item.description}</p>
              </GlassCard>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
