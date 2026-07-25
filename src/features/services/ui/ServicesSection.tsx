import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Container } from '@/shared/ui/container';
import { Section } from '@/shared/ui/section';
import { SectionHeading } from '@/shared/ui/section-heading';
import { GlassCard } from '@/shared/ui/glass-card';
import { Reveal } from '@/shared/ui/reveal';
import { services } from '@/features/services/model/services';

/**
 * ServicesSection — the 3-column service card grid.
 * No numbering (services aren't a sequence — anthropic/frontend-design rule).
 *
 * Warm editorial skin (Vinny.io v2): paper cards with hairline borders,
 * terracotta icon chips, hover lift through the warm shadow stack.
 */
export default function ServicesSection() {
  return (
    <Section id="services" tone="surface-alt">
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="OUR CORE CAPABILITIES"
          title="Comprehensive Technology & Academy Solutions"
          subtitle="Tailored IT training programs, custom software engineering, and strategic technology consulting for individuals and businesses across the UK."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.slug} delay={idx * 100}>
              <Link href={`/services/${service.slug}`} className="group block">
                <GlassCard interactive className="relative flex h-full flex-col justify-between p-8">
                  {/* Accent top border bar */}
                  <div
                    className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r ${service.accent} opacity-80 transition-opacity group-hover:opacity-100`}
                  />

                  <div>
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-line bg-surface-alt text-accent transition-all group-hover:scale-110 group-hover:bg-accent-soft">
                        <Icon className="h-7 w-7" />
                      </div>
                      <span className="rounded-sm border border-line bg-surface-alt px-3 py-1 font-mono text-xs text-muted">
                        {service.tag}
                      </span>
                    </div>

                    <h3 className="mb-3 flex items-center justify-between font-display text-2xl font-medium text-ink transition-colors group-hover:text-accent">
                      <span>{service.title}</span>
                      <ArrowUpRight className="h-5 w-5 text-accent opacity-0 transition-opacity group-hover:opacity-100" />
                    </h3>

                    <p className="mb-6 font-body text-sm leading-relaxed text-muted">
                      {service.description}
                    </p>

                    <div className="space-y-2 border-t border-line pt-5">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-xs font-medium text-ink">
                          <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex items-center gap-2 border-t border-line pt-4 font-mono text-xs font-semibold text-accent transition-transform group-hover:translate-x-1">
                    <span>Learn More & Syllabus</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </GlassCard>
              </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
