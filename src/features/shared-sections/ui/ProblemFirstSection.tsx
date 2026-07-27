import React from 'react';
import { AlertCircle, TrendingDown, Clock, ShieldAlert } from 'lucide-react';
import { Container } from '@/shared/ui/container';
import { Section } from '@/shared/ui/section';
import { SpotlightCard } from '@/shared/ui/spotlight-card';
import { TextReveal } from '@/shared/ui/text-reveal';
import { Badge } from '@/shared/ui/badge';

const painPoints = [
  {
    icon: Clock,
    title: 'Legacy Technical Debt',
    description: 'Slow release cycles and aging monoliths are holding back your competitive edge and slowing down your engineering teams.',
  },
  {
    icon: TrendingDown,
    title: 'The AI & Cloud Talent Gap',
    description: 'Finding, training, and retaining senior talent who actually understand modern distributed systems is harder than ever.',
  },
  {
    icon: ShieldAlert,
    title: 'Security & Compliance Risks',
    description: 'Moving to the cloud without a hardened infrastructure strategy leaves your enterprise data dangerously exposed.',
  },
];

/**
 * ProblemFirstSection — High-Conversion SaaS layout.
 * Mirrors the user's pain points before presenting our solutions.
 */
export default function ProblemFirstSection() {
  return (
    <Section tone="charcoal-blue" className="border-t border-white/5 py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Badge tone="danger" className="mb-6">
            <AlertCircle className="h-4 w-4 text-rose-400" />
            <span className="text-rose-300">THE ENTERPRISE IT DILEMMA</span>
          </Badge>
          
          <h2 className="mb-6 font-display text-4xl font-extrabold text-white sm:text-5xl">
            <TextReveal delay={0.1}>Scaling technology is easy.</TextReveal>
            <br />
            <span className="text-slate-400">Scaling engineering talent is hard.</span>
          </h2>
          
          <p className="font-body text-lg text-slate-300">
            Most UK enterprises aren&apos;t struggling with a lack of ambition. They are blocked by structural engineering challenges that stall growth.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {painPoints.map((point) => {
            const Icon = point.icon;
            return (
              <SpotlightCard key={point.title} spotlightColor="rgba(244, 63, 94, 0.15)" className="p-8 border-white/10 hover:border-rose-500/30">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500/10 text-rose-400 shadow-[0_0_15px_rgba(244,63,94,0.1)]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 font-display text-xl font-bold text-white">
                  {point.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-slate-400">
                  {point.description}
                </p>
              </SpotlightCard>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
