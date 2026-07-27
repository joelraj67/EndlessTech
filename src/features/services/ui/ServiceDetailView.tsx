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
 * Unified Dark Glass (Aura Enterprise Design System).
 */
export default function ServiceDetailView({ service }: { service: Service }) {
  const { title, description, capabilities, accentColor, cta } = service;
  const Icon = service.icon;

  return (
    <main className="min-h-screen bg-bg text-slate-100">
      <PageHero
        eyebrow={service.tag.toUpperCase()}
        eyebrowIcon={Icon}
        glowColor="bg-cerulean/20"
        title={
          <>
            {title} <br />
            <GradientText>Capabilities</GradientText>
          </>
        }
        subtitle={description}
      />

      <Section tone="surface-alt">
        <Container>
          <div className="mx-auto max-w-[1000px] space-y-6">
            <h2 className="mb-8 text-center font-display text-3xl font-extrabold text-white">
              Enterprise Capabilities & Deliverables
            </h2>

            {capabilities.map((item, idx) => (
              <GlassCard key={item} interactive className="flex items-center gap-4 p-6 border-white/10 hover:border-cerulean/50">
                <CheckCircle2 className="h-6 w-6 shrink-0 text-cerulean" />
                <p className="font-body text-base font-semibold text-slate-200">{item}</p>
                <span className="ml-auto hidden font-mono text-xs text-slate-500 sm:block">
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
                className="inline-flex items-center gap-3 rounded-full px-8 py-4 text-base font-semibold text-white bg-accent hover:bg-accent-hover shadow-[0_0_28px_rgba(176,85,46,0.35)] transition-all duration-200 ease-out hover:-translate-y-0.5 active:scale-[0.97]"
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
