import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Container } from '@/shared/ui/container';
import { Badge } from '@/shared/ui/badge';
import { GradientButton } from '@/shared/ui/gradient-button';
import { site } from '@/shared/lib/site';
import { HeroTerminal } from '@/features/hero/ui/HeroTerminal';

/**
 * HeroSection — the page thesis.
 *
 * Per anthropic/frontend-design: the hero is a thesis, open with the most
 * characteristic thing in the subject's world. For a cloud + training
 * company that's the deploy/teach CLI. The headline itself is set as a
 * prompt (> verb + noun), so the type treatment becomes the signature —
 * not a generic three-verb tagline with a gradient.
 *
 * Signature: the terminal session reveals line-by-line on load (one
 * orchestrated moment), then a blinking cursor — then still.
 *
 * Warm editorial skin (Vinny.io v2): warm paper canvas, serif display
 * headline, terracotta prompt glyph + hero metric.
 */
export default function HeroSection() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-paper pb-20 pt-28">
      {/* Layered warm glow mesh — a richer hero atmosphere than a single blur */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-accent/8 blur-[160px]" />
      <div className="pointer-events-none absolute -left-20 top-1/3 h-[320px] w-[320px] rounded-full bg-accent/5 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-[0.5]" />

      <Container className="relative w-full">
        <div className="mx-auto max-w-[860px] text-center">
          <Badge tone="accent" className="mb-8">
            <Sparkles className="h-4 w-4" />
            <span>UK Technology Consultancy &amp; Training Academy</span>
          </Badge>

          {/* Headline set as a CLI prompt — the type treatment is the signature */}
          <h1 className="mb-7 font-display text-5xl font-medium leading-[1.1] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            <span className="font-mono text-accent">&gt; </span>
            Ship cloud infrastructure.
            <br />
            <span className="font-mono text-accent">&gt; </span>
            Certify your team.
          </h1>

          <p className="mx-auto mb-10 max-w-[620px] font-body text-lg leading-relaxed text-muted">
            Endless Tech is a UK-based partner for IT training, custom software,
            cloud migration, AI solutions, and digital transformation consulting.
            We deploy what we teach.
          </p>

          <div className="mb-14 flex flex-wrap justify-center gap-4">
            <GradientButton href="/services" size="lg">
              <span>Explore Our Services</span>
              <ArrowRight className="h-5 w-5" />
            </GradientButton>

            <GradientButton href="/contact" variant="secondary" size="lg">
              <span>Book a Consultation</span>
            </GradientButton>
          </div>

          {/* The one hero metric, with provenance */}
          <div className="mx-auto flex max-w-[560px] flex-col items-center gap-1 border-t border-line pt-7 font-mono text-xs text-muted sm:flex-row sm:justify-center sm:gap-3">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-2xl font-medium text-accent">
                {site.heroMetric.value}
              </span>
              <span className="text-muted">{site.heroMetric.label}</span>
            </div>
            <span className="hidden text-line-strong sm:inline">·</span>
            <span className="text-muted">{site.heroMetric.context}</span>
          </div>

          {/* Signature: the live CLI session, full-width under the fold */}
          <div className="mt-16 text-left">
            <HeroTerminal />
          </div>
        </div>
      </Container>
    </section>
  );
}
