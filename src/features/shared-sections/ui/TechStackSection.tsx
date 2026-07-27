import React from 'react';
import { Container } from '@/shared/ui/container';
import { Section } from '@/shared/ui/section';
import { SectionHeading } from '@/shared/ui/section-heading';
import { GlassCard } from '@/shared/ui/glass-card';
import { InfiniteMarquee } from '@/features/shared-sections/ui/InfiniteMarquee';
import { techStack } from '@/features/shared-sections/model/tech-stack';
import { SpotlightCard } from '@/shared/ui/spotlight-card';

/**
 * TechStackSection — the categories of tools we teach and build with.
 * Features an Infinite Marquee and Spotlight Hover Cards.
 */
export default function TechStackSection() {
  const allTechs = techStack.flatMap(item => item.techs);

  return (
    <Section tone="surface" className="border-t border-white/10 overflow-hidden">
      <Container>
        <SectionHeading
          eyebrow="MODERN STACK FRAMEWORKS"
          title={
            <>
              Mastering Tools That Power <br />
              <span className="text-sky-400 italic">Modern Enterprise Systems</span>
            </>
          }
          subtitle="We teach and build with production-proven, enterprise-standard technology stacks."
        />

        {/* The Kinetic Infinite Marquee */}
        <div className="mb-16 -mx-[50vw] left-1/2 relative w-[200vw] rotate-[-2deg]">
          <InfiniteMarquee speed="fast" className="bg-white/5 py-4 border-y border-white/10 shadow-2xl">
            {allTechs.map((tech, i) => (
              <div key={`${tech}-${i}`} className="flex items-center gap-4 mx-4">
                <span className="text-2xl md:text-4xl font-display font-extrabold text-white/40 uppercase tracking-widest">{tech}</span>
                <span className="w-2 h-2 rounded-full bg-sky-500/50" />
              </div>
            ))}
          </InfiniteMarquee>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {techStack.map((item) => {
            const Icon = item.icon;
            return (
              <SpotlightCard key={item.category} className="flex flex-col justify-between p-8">
                <div>
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-sky-400/30 bg-sky-500/15 text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mb-4 font-body text-xl font-bold text-white">{item.category}</h3>

                  <ul className="space-y-3">
                    {item.techs.map((tech) => (
                      <li
                        key={tech}
                        className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-2 font-mono text-sm text-slate-200 transition-colors hover:bg-white/10"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
