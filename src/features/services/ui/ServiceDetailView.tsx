import React from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { PageHero } from '@/shared/ui/page-hero';
import { Container } from '@/shared/ui/container';
import { Section } from '@/shared/ui/section';
import { GlassCard } from '@/shared/ui/glass-card';
import { GradientText } from '@/shared/ui/gradient-text';
import { TerminalBlock } from '@/shared/ui/terminal-block';
import type { Service } from '@/shared/types';

/**
 * ServiceDetailView — shared detail page for every /services/[slug] route.
 *
 * One component renders all 5 service detail pages, driven by the `Service`
 * data object. This replaces 5 near-identical static folders.
 *
 * Signature accent: a small terminal block that frames the service in the
 * brand's CLI vernacular — the capabilities read as a session output.
 *
 * Warm editorial skin (Vinny.io v2): paper canvas, serif heading, terracotta
 * capability bullets. The terminal stays the one dark surface.
 */
export default function ServiceDetailView({ service }: { service: Service }) {
  const { title, description, capabilities, accentColor, cta } = service;
  const Icon = service.icon;

  return (
    <main className="min-h-screen bg-paper pt-24 text-ink">
      <PageHero
        eyebrow={service.tag.toUpperCase()}
        eyebrowIcon={Icon}
        glowColor="bg-accent/10"
        title={
          <>
            {title} <br />
            <GradientText>Solutions</GradientText>
          </>
        }
        subtitle={description}
      />

      <Section tone="surface-alt">
        <Container>
          <div className="mx-auto max-w-[1000px] space-y-6">
            <h2 className="mb-8 text-center font-display text-3xl font-medium text-ink">
              Capabilities
            </h2>

            {capabilities.map((item, idx) => (
              <GlassCard key={item} interactive className="flex items-center gap-4 p-6">
                <CheckCircle2 className="h-6 w-6 shrink-0" style={{ color: accentColor }} />
                <p className="font-body text-base font-medium text-ink">{item}</p>
                <span className="ml-auto hidden font-mono text-xs text-line-strong sm:block">
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </GlassCard>
            ))}

            {/* CLI accent — the capabilities as a session */}
            <div className="pt-8">
              <TerminalBlock
                title={`endless ~ ${service.slug}`}
                lines={capabilities.slice(0, 3).map((cap) => ({
                  prompt: '›',
                  output: cap,
                  status: 'ok' as const,
                }))}
              />
            </div>

            <div className="pt-12 text-center">
              <Link
                href={cta.href}
                className="inline-flex items-center gap-3 rounded-md px-8 py-4 text-base font-semibold text-white shadow-xl transition-all duration-200 ease-out hover:-translate-y-0.5 hover:opacity-95 active:scale-[0.97]"
                style={{
                  backgroundColor: 'var(--color-accent)',
                  boxShadow: `0 20px 25px -5px ${accentColor}40`,
                }}
              >
                <span>{cta.label}</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
