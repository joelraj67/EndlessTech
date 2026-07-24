import React from 'react';
import { Container } from '@/shared/ui/container';
import { Section } from '@/shared/ui/section';
import { SectionHeading } from '@/shared/ui/section-heading';
import { GlassCard } from '@/shared/ui/glass-card';
import { techStack } from '@/features/shared-sections/model/tech-stack';

/**
 * TechStackSection — the categories of tools we teach and build with.
 *
 * Warm editorial skin (Vinny.io v2): recessed surface, terracotta-tinted
 * icon tiles, hairline-bordered tech chips. Per-service gradient tiles
 * collapse to the warm accent-soft (the system is single-accent).
 */
export default function TechStackSection() {
  return (
    <Section tone="surface" className="border-t border-line">
      <Container>
        <SectionHeading
          eyebrow="MODERN STACK FRAMEWORKS"
          title={
            <>
              Mastering Tools That Power <br />
              <span className="text-accent italic">Modern Enterprise Systems</span>
            </>
          }
          subtitle="We teach and build with production-proven, enterprise-standard technology stacks."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {techStack.map((item) => {
            const Icon = item.icon;
            return (
              <GlassCard key={item.category} className="flex flex-col justify-between p-6">
                <div>
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-accent/30 bg-accent-soft text-accent">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mb-4 font-body text-lg font-semibold text-ink">{item.category}</h3>

                  <ul className="space-y-2">
                    {item.techs.map((tech) => (
                      <li
                        key={tech}
                        className="flex items-center gap-2 rounded-md border border-line bg-surface-alt px-3 py-1.5 font-mono text-xs text-ink"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
