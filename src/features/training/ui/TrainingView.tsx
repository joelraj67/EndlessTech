import React from 'react';
import Link from 'next/link';
import { GraduationCap, ArrowRight } from 'lucide-react';
import { PageHero } from '@/shared/ui/page-hero';
import { Container } from '@/shared/ui/container';
import { Section } from '@/shared/ui/section';
import { GlassCard } from '@/shared/ui/glass-card';
import { GradientText } from '@/shared/ui/gradient-text';
import { courses } from '@/features/training/model/courses';

/**
 * TrainingView — full course catalogue (6 courses).
 *
 * Warm editorial skin (Vinny.io v2): paper cards, accent-tinted badges,
 * serif course titles, terracotta hover lift.
 */
export default function TrainingView() {
  return (
    <main className="min-h-screen bg-paper pt-24 text-ink">
      <PageHero
        eyebrow="UK TECHNOLOGY ACADEMY"
        eyebrowIcon={GraduationCap}
        eyebrowTone="accent"
        glowColor="bg-accent/10"
        title={
          <>
            Professional IT Training & <br />
            <GradientText tone="purple">Industry Certifications</GradientText>
          </>
        }
        subtitle="Curricula designed with cloud partners. 95% first-attempt certification pass rate for AWS and Azure learners across the UK."
      />

      <Section tone="surface-alt">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((c) => (
              <GlassCard key={c.slug} interactive className="group flex flex-col justify-between p-8">
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-sm border border-accent/30 bg-accent-soft px-3 py-1 font-mono text-xs text-accent-active">
                      {c.badge}
                    </span>
                    <span className="font-mono text-xs text-muted">{c.duration}</span>
                  </div>

                  <h2 className="mb-3 font-display text-xl font-medium text-ink transition-colors group-hover:text-accent">
                    {c.title}
                  </h2>

                  {c.desc && (
                    <p className="mb-6 font-body text-xs leading-relaxed text-muted">{c.desc}</p>
                  )}
                </div>

                <div className="space-y-3 border-t border-line pt-4">
                  <div className="flex items-center justify-between font-mono text-xs text-muted">
                    <span>Level: {c.level}</span>
                    {c.format && <span>Format: {c.format}</span>}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-line-strong bg-surface py-3 font-mono text-xs font-semibold text-ink transition-colors hover:bg-surface-alt hover:border-accent hover:text-accent"
                  >
                    <span>Enroll / Request Syllabus</span>
                    <ArrowRight className="h-3.5 w-3.5 text-accent" />
                  </Link>
                </div>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
