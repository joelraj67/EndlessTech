import React from 'react';
import Link from 'next/link';
import { Compass, ArrowRight } from 'lucide-react';
import { PageHero } from '@/shared/ui/page-hero';
import { Container } from '@/shared/ui/container';
import { Section } from '@/shared/ui/section';
import { GlassCard } from '@/shared/ui/glass-card';
import { GradientText } from '@/shared/ui/gradient-text';
import { advisorySteps } from '@/features/consulting/model/advisory-steps';

/**
 * ConsultingView — advisory methodology, presented as a genuine sequence.
 *
 * Warm editorial skin (Vinny.io v2): paper cards, terracotta icon chips,
 * mono step markers in the editorial voice.
 */
export default function ConsultingView() {
  return (
    <main className="min-h-screen bg-paper pt-24 text-ink">
      <PageHero
        eyebrow="UK ADVISORY & CONSULTING"
        eyebrowIcon={Compass}
        title={
          <>
            Digital Transformation & <br />
            <GradientText>Senior Tech Advisory</GradientText>
          </>
        }
        subtitle="Strategic advice helping UK CTOs, IT directors, and digital leads navigate cloud adoption, AI integration, and software architecture."
      />

      <Section tone="surface-alt">
        <Container>
          <div className="mx-auto max-w-[900px] space-y-6">
            {advisorySteps.map((s) => {
              const Icon = s.icon;
              return (
                <GlassCard key={s.title} interactive className="group flex flex-col items-start gap-6 p-8 sm:flex-row">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-accent/40 bg-accent-soft text-accent transition-transform group-hover:scale-110">
                    <Icon className="h-7 w-7" />
                  </div>

                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-xl font-medium text-ink transition-colors group-hover:text-accent">
                        {s.title}
                      </h3>
                      <span className="font-mono text-xs text-line-strong">{s.step}</span>
                    </div>
                    <p className="font-body text-sm leading-relaxed text-muted">{s.description}</p>
                  </div>
                </GlassCard>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-md bg-accent px-8 py-4 text-base font-semibold text-white shadow-xl shadow-accent/25 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-accent-hover active:scale-[0.97]"
            >
              <span>Schedule Strategic Advisory Call</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </Container>
      </Section>
    </main>
  );
}
