import React from 'react';
import { Sparkles, Building2, CheckCircle2 } from 'lucide-react';
import { PageHero } from '@/shared/ui/page-hero';
import { Container } from '@/shared/ui/container';
import { Section } from '@/shared/ui/section';
import { GlassCard } from '@/shared/ui/glass-card';
import { GradientText } from '@/shared/ui/gradient-text';
import { Counter } from '@/shared/ui/counter';
import { Reveal } from '@/shared/ui/reveal';
import { Badge } from '@/shared/ui/badge';
import { aboutStats, companyValues } from '@/features/about/model/about';

/**
 * AboutView — company story, stats, and values.
 * Unified Dark Glass (Aura Enterprise Design System).
 */
export default function AboutView() {
  return (
    <main className="min-h-screen bg-bg text-slate-100">
      <PageHero
        eyebrow="ABOUT ENDLESS TECH"
        eyebrowIcon={Sparkles}
        title={
          <>
            Building the Next Era of <br />
            <GradientText>UK Technology Leadership</GradientText>
          </>
        }
        subtitle="Endless Tech (Endless Technologies) is a UK-based technology consultancy & training partner helping individuals and enterprise teams navigate modern cloud computing, AI innovation, and custom software engineering."
      />

      {/* Stats counter section */}
      <Section tone="surface-alt" className="border-b border-white/10 py-16">
        <Container>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {aboutStats.map((stat, idx) => (
              <Reveal key={stat.label} delay={idx * 120}>
                <GlassCard className="p-9 text-center">
                  <p className="mb-2 font-display text-4xl font-extrabold text-cerulean sm:text-5xl drop-shadow-[0_0_16px_rgba(60,122,137,0.4)]">
                    <Counter value={stat.value} />
                  </p>
                  <p className="font-mono text-xs uppercase tracking-wider text-slate-400">
                    {stat.label}
                  </p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Story & mission section */}
      <Section tone="paper">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-6">
              <Badge tone="accent" className="mb-2">
                <Building2 className="h-4 w-4" />
                <span>OUR STORY & PHILOSOPHY</span>
              </Badge>

              <h2 className="font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                Learn Today. Build Tomorrow.
              </h2>

              <p className="font-body text-base leading-relaxed text-slate-300">
                Founded in the UK, Endless Tech was built on the fundamental principle that technology consulting and training should be practical, high-impact, and results-focused.
              </p>

              <p className="font-body text-base leading-relaxed text-slate-300">
                Whether preparing a career-switcher for their first AWS Solutions Architect certification or assisting a mid-sized UK firm with a complex cloud migration, our senior practitioners bring real enterprise experience to every engagement.
              </p>
            </div>

            <div className="space-y-6 lg:col-span-6">
              {companyValues.map((v) => (
                <GlassCard key={v.title} interactive className="p-9">
                  <h3 className="mb-2 flex items-center gap-2 font-body text-xl font-bold text-white">
                    <CheckCircle2 className="h-5 w-5 text-cerulean" />
                    <span>{v.title}</span>
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-slate-300">{v.desc}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
