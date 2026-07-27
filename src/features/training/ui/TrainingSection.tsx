import React from 'react';
import Link from 'next/link';
import { BookOpen, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Container } from '@/shared/ui/container';
import { Section } from '@/shared/ui/section';
import { SectionHeading } from '@/shared/ui/section-heading';
import { GlassCard } from '@/shared/ui/glass-card';
import { featuredCourses } from '@/features/training/model/courses';

/**
 * TrainingSection — featured course cards (top 4 on home).
 * Full catalogue lives on /training.
 *
 * Warm editorial skin (Vinny.io v2): paper cards, accent-tinted badges,
 * terracotta hover lift. The "Explore All Academy Pathways" CTA uses the
 * terracotta fill — the one allowed large accent wash per section.
 * 
 * Enhanced: Uses thistle tone for soft editorial warmth + course cards
 * with individual accent colors from the extended palette.
 */
export default function TrainingSection() {
  return (
    <Section tone="thistle" className="border-t border-line">
      <Container className="relative z-10">
        <SectionHeading
          tone="accent"
          eyebrow="UK IT ACADEMY & COURSES"
          title={
            <>
              Build Industry Skills That <br />
              <span className="text-accent italic">Top Tech Employers Need</span>
            </>
          }
          subtitle="Structured career pathways, hands-on lab projects, and direct preparation for industry-recognized cloud and software certifications."
        />

        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {featuredCourses.map((course) => (
            <GlassCard key={course.slug} interactive className="group flex flex-col justify-between border border-line p-8">
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-sm border border-accent/20 bg-accent-soft px-3 py-1 font-mono text-xs text-accent-active">
                    {course.badge}
                  </span>
                  <span className="font-mono text-xs text-muted">
                    {course.duration} • {course.level}
                  </span>
                </div>

                <h3 className="mb-4 font-display text-2xl font-medium text-ink transition-colors group-hover:text-accent">
                  {course.title}
                </h3>

                {course.topics && (
                  <div className="mb-6 grid grid-cols-2 gap-2">
                    {course.topics.map((t) => (
                      <div key={t} className="flex items-center gap-2 text-xs text-ink">
                        <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between border-t border-line pt-4">
                <span className="flex items-center gap-1 font-mono text-xs text-success">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-success" />
                  Enrollment Open for Next Cohort
                </span>
                <Link
                  href="/training"
                  className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-accent hover:underline"
                >
                  <span>View Syllabus</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/training"
            className="inline-flex items-center gap-3 rounded-md bg-accent px-8 py-4 text-base font-semibold text-white shadow-xl shadow-accent/25 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-accent-hover active:scale-[0.97]"
          >
            <span>Explore All Academy Pathways</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
