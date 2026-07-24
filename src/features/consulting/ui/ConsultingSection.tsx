import React from 'react';
import Link from 'next/link';
import { Compass, ArrowRight } from 'lucide-react';
import { Container } from '@/shared/ui/container';
import { Section } from '@/shared/ui/section';
import { GlassCard } from '@/shared/ui/glass-card';
import { advisorySteps } from '@/features/consulting/model/advisory-steps';

/**
 * ConsultingSection — advisory methodology cards.
 * Numbered markers (01–05) are justified: this IS a sequential process.
 *
 * Warm editorial skin (Vinny.io v2): paper cards, terracotta icon chips,
 * mono step markers in the muted editorial voice.
 */
export default function ConsultingSection() {
  return (
    <Section tone="surface-alt" className="border-t border-line">
      <Container>
        <div className="mb-20 grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-4 inline-flex items-center gap-2 rounded-sm border border-line bg-surface-alt px-3.5 py-1.5 font-mono text-xs text-accent">
              <Compass className="h-4 w-4" />
              <span>STRATEGIC ADVISORY</span>
            </div>
            <h2 className="font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
              Helping Businesses Navigate <br />
              <span className="text-accent italic">Digital Transformation</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="mb-6 font-body text-base leading-relaxed text-muted">
              From high-level cloud architecture to hands-on AI implementation, our UK technology consultants provide clear, actionable advisory to scale your operations efficiently.
            </p>
            <Link
              href="/consulting"
              className="inline-flex items-center gap-2 font-mono text-sm font-semibold text-accent hover:underline"
            >
              <span>Explore Advisory Services</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {advisorySteps.map((item) => {
            const Icon = item.icon;
            return (
              <GlassCard key={item.title} interactive className="group p-8">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-accent/30 bg-accent-soft text-accent transition-transform group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>
                {/* Sequential step marker — justified by genuine sequence */}
                <span className="mb-2 block font-mono text-xs text-line-strong">{item.step}</span>
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
