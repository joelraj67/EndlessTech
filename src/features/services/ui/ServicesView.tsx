import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PageHero } from '@/shared/ui/page-hero';
import { Container } from '@/shared/ui/container';
import { Section } from '@/shared/ui/section';
import { GlassCard } from '@/shared/ui/glass-card';
import { GradientText } from '@/shared/ui/gradient-text';
import { services } from '@/features/services/model/services';

/**
 * ServicesView — services overview (5 cards, 2-col grid).
 *
 * Warm editorial skin (Vinny.io v2): paper cards, terracotta icon chips,
 * hairline borders, hover lift through the warm shadow stack.
 */
export default function ServicesView() {
  return (
    <main className="min-h-screen bg-paper pt-24 text-ink">
      <PageHero
        eyebrow="FULL CAPABILITIES CATALOG"
        eyebrowIcon={Sparkles}
        title={
          <>
            Our Enterprise <br />
            <GradientText>Technology Services</GradientText>
          </>
        }
        subtitle="Comprehensive technology solutions tailored to your business growth targets, IT upskilling demands, and cloud architecture goals."
      />

      <Section tone="surface-alt">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group block"
                >
                  <GlassCard interactive className="relative flex h-full flex-col justify-between p-8">
                    <div className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r ${service.accent}`} />

                    <div>
                      <div className="mb-6 flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-line bg-surface text-accent transition-transform group-hover:scale-110">
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className="rounded-sm border border-accent/20 bg-accent-soft px-3 py-1 font-mono text-xs text-accent">
                          {service.tag}
                        </span>
                      </div>

                      <h2 className="mb-3 flex items-center justify-between font-display text-2xl font-medium text-ink transition-colors group-hover:text-accent">
                        <span>{service.title}</span>
                        <ArrowUpRight className="h-5 w-5 text-accent opacity-0 transition-opacity group-hover:opacity-100" />
                      </h2>

                      <p className="mb-6 font-body text-sm leading-relaxed text-muted">
                        {service.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-4">
                      <div className="flex flex-wrap gap-2">
                        {service.features.slice(0, 3).map((h) => (
                          <span key={h} className="flex items-center gap-1 font-mono text-[11px] text-muted">
                            <CheckCircle2 className="h-3 w-3 text-accent" />
                            {h}
                          </span>
                        ))}
                      </div>
                      <span className="flex items-center gap-1 font-mono text-xs font-semibold text-accent transition-transform group-hover:translate-x-1">
                        View Details &rarr;
                      </span>
                    </div>
                  </GlassCard>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>
    </main>
  );
}
