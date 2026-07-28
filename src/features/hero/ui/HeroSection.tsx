import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Container } from '@/shared/ui/container';
import { Badge } from '@/shared/ui/badge';
import { GradientButton } from '@/shared/ui/gradient-button';
import { Counter } from '@/shared/ui/counter';
import { MagneticButton } from '@/shared/ui/magnetic-button';
import { TextReveal } from '@/shared/ui/text-reveal';
import { site } from '@/shared/lib/site';
import { HeroTerminal } from '@/features/hero/ui/HeroTerminal';

/**
 * HeroSection — high-impact dark landing hero.
 * Features Kinetic Typography, Magnetic CTAs, and AAA contrast.
 * a11y: decorative blobs are aria-hidden, section labelled.
 */
export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-bg pb-20 pt-32"
      aria-label="Hero — Endless Tech"
    >
      {/* Multi-stop atmospheric mesh — decorative, hidden from assistive tech */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[550px] w-[900px] -translate-x-1/2 rounded-full opacity-40 blur-[180px]"
        style={{ background: 'radial-gradient(ellipse, rgba(56,189,248,0.25) 0%, rgba(30,41,59,0.5) 45%, transparent 75%)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/4 h-[420px] w-[420px] rounded-full opacity-25 blur-[150px]"
        style={{ background: 'rgba(244,114,182,0.2)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-1/4 h-[320px] w-[320px] rounded-full opacity-20 blur-[120px]"
        style={{ background: 'rgba(56,189,248,0.2)' }}
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-[0.35]" />

      <Container className="relative w-full">
        <div className="mx-auto max-w-[880px] text-center">
          <Badge tone="accent" className="mb-8">
            <Sparkles className="h-4 w-4 text-sky-300" aria-hidden="true" />
            <span>UK Technology Consultancy &amp; Training Academy</span>
          </Badge>

          <h1 className="mb-7 font-display text-5xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
            <TextReveal delay={0.1}>Ship cloud infrastructure. Certify your team.</TextReveal>
          </h1>

          <p className="mx-auto mb-10 max-w-[660px] font-body text-lg leading-relaxed text-slate-200">
            Endless Tech is a UK-based partner for IT training, custom software,
            cloud migration, AI solutions, and digital transformation consulting.
            We deploy what we teach.
          </p>

          <div className="mb-14 flex flex-wrap justify-center gap-4">
            <MagneticButton strength={0.2} asChild>
              <GradientButton href="/services" size="lg">
                <span>Explore Our Services</span>
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </GradientButton>
            </MagneticButton>

            <MagneticButton strength={0.15} asChild>
              <GradientButton href="/contact" variant="secondary" size="lg">
                <span>Book a Consultation</span>
              </GradientButton>
            </MagneticButton>
          </div>

          {/* Hero Metric */}
          <div
            className="mx-auto flex max-w-[580px] flex-col items-center gap-1 border-t border-white/15 pt-7 font-mono text-xs text-slate-300 sm:flex-row sm:justify-center sm:gap-3"
            aria-label={`Trust metric: ${site.heroMetric.value} ${site.heroMetric.label}`}
          >
            <div className="flex items-baseline gap-2">
              <span className="font-display text-2xl font-extrabold text-sky-400 drop-shadow-[0_0_12px_rgba(56,189,248,0.4)]">
                <Counter value={site.heroMetric.value} />
              </span>
              <span className="text-slate-200 font-semibold">{site.heroMetric.label}</span>
            </div>
            <span className="hidden text-slate-500 sm:inline" aria-hidden="true">·</span>
            <span className="text-slate-300">{site.heroMetric.context}</span>
          </div>

          {/* Signature: the live CLI session */}
          <div className="mt-16 text-left">
            <HeroTerminal />
          </div>
        </div>
      </Container>
    </section>
  );
}
