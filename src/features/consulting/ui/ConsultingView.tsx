import React from 'react';
import Link from 'next/link';
import { Compass, ArrowRight } from 'lucide-react';
import { PageHero } from '@/shared/ui/page-hero';
import { Container } from '@/shared/ui/container';
import { Section } from '@/shared/ui/section';
import { GlassCard } from '@/shared/ui/glass-card';
import { GradientText } from '@/shared/ui/gradient-text';
import ROICalculator from '@/features/roi-calculator/ui/ROICalculator';
import { advisorySteps } from '@/features/consulting/model/advisory-steps';

/**
 * ConsultingView — advisory methodology + ROI impact calculator.
 * Unified Dark Glass (Aura Enterprise Design System).
 */
export default function ConsultingView() {
  return (
    <main className="min-h-screen bg-bg text-slate-100">
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
          {/* Interactive Impact Calculator Widget */}
          <div className="mb-20">
            <ROICalculator />
          </div>

          <div className="mx-auto max-w-[900px] space-y-6">
            <h2 className="mb-8 text-center font-display text-3xl font-extrabold text-white">
              Advisory Engagement Framework
            </h2>

            {advisorySteps.map((s) => {
              const Icon = s.icon;
              return (
                <GlassCard key={s.title} interactive className="group flex flex-col items-start gap-6 p-9 sm:flex-row border-white/10 hover:border-cerulean/50">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-cerulean/30 bg-cerulean/15 text-cerulean transition-transform group-hover:scale-110">
                    <Icon className="h-7 w-7" />
                  </div>

                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-xl font-bold text-white transition-colors group-hover:text-cerulean">
                        {s.title}
                      </h3>
                      <span className="font-mono text-xs text-slate-500">{s.step}</span>
                    </div>
                    <p className="font-body text-sm leading-relaxed text-slate-300">{s.description}</p>
                  </div>
                </GlassCard>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-base font-semibold text-white shadow-[0_0_28px_rgba(176,85,46,0.35)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-accent-hover active:scale-[0.97]"
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
