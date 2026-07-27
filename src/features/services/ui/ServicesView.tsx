import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PageHero } from '@/shared/ui/page-hero';
import { Container } from '@/shared/ui/container';
import { Section } from '@/shared/ui/section';
import { SpotlightCard } from '@/shared/ui/spotlight-card';
import { GradientText } from '@/shared/ui/gradient-text';
import { Badge } from '@/shared/ui/badge';
import { services } from '@/features/services/model/services';
import { cn } from '@/shared/lib/utils';
import { TextReveal } from '@/shared/ui/text-reveal';

/**
 * ServicesView — services overview (5 cards).
 * Features an asymmetrical Bento Grid layout and SpotlightHover cards.
 */
export default function ServicesView() {
  return (
    <main className="min-h-screen bg-bg text-slate-100">
      <PageHero
        eyebrow="FULL CAPABILITIES CATALOG"
        eyebrowIcon={Sparkles}
        title={
          <>
            <TextReveal delay={0.1}>Our Enterprise</TextReveal> <br />
            <GradientText>Technology Services</GradientText>
          </>
        }
        subtitle="Comprehensive technology solutions tailored to your business growth targets, IT upskilling demands, and cloud architecture goals."
      />

      <Section tone="surface-alt">
        <Container>
          {/* Asymmetrical Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              
              // Bento Grid layout logic:
              // Make specific cards span 2 columns to break the monotonous uniform grid.
              const isLarge = index === 0 || index === 3 || index === 4;

              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className={cn(
                    "group block",
                    isLarge ? "md:col-span-2 lg:col-span-2" : "md:col-span-1 lg:col-span-1"
                  )}
                >
                  <SpotlightCard className="relative flex h-full flex-col justify-between p-10 hover:border-sky-400/50">
                    <div className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r ${service.accent}`} />

                    <div>
                      <div className="mb-8 flex items-center justify-between">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-sky-400/30 bg-sky-500/15 text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.2)] transition-transform group-hover:scale-110">
                          <Icon className="h-7 w-7" />
                        </div>
                        <Badge tone="accent">{service.tag}</Badge>
                      </div>

                      <h2 className="mb-4 flex items-center justify-between font-display text-3xl font-extrabold text-white transition-colors group-hover:text-sky-300">
                        <span>{service.title}</span>
                        <ArrowUpRight className="h-6 w-6 text-sky-400 opacity-0 transition-opacity group-hover:opacity-100" />
                      </h2>

                      <p className="mb-8 font-body text-base leading-relaxed text-slate-300">
                        {service.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
                      <div className="flex flex-wrap gap-3">
                        {service.features.slice(0, isLarge ? 4 : 2).map((h) => (
                          <span key={h} className="flex items-center gap-1.5 font-mono text-[11px] text-slate-400">
                            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                            {h}
                          </span>
                        ))}
                      </div>
                      <span className="flex items-center gap-1 font-mono text-sm font-bold text-sky-400 transition-transform group-hover:translate-x-1">
                        View Details &rarr;
                      </span>
                    </div>
                  </SpotlightCard>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>
    </main>
  );
}
