import { Award, Target, CheckCircle2, Cpu, MapPin, Rocket } from 'lucide-react';
import type { Advantage } from '@/shared/types';

/** "Why choose us" advantage cards — Home WhyChooseUsSection.
 * Each advantage now uses a distinct color from the extended editorial palette:
 * - Industry-Experienced Experts: Thistle (#DBC2CF) — soft training accent
 * - Practical Learning Approach: Lavender Grey (#9FA2B2) — engineering neutral
 * - Business-Focused Solutions: Cerulean (#3C7A89) — info/business state
 * - Latest Tech Frameworks: Charcoal Blue (#2E4756) — elevated technical dark
 * - UK-Based Support & HQ: Jet Black (#16262E) — deepest dark/authority
 * - Career Transformation: Thistle (#DBC2CF) — warm career growth accent
 * Terracotta (#B0552E) remains the single high-signal accent for CTAs.
 */
export const advantages: Advantage[] = [
  {
    icon: Award,
    title: 'Industry-Experienced Experts',
    metric: '10+ Years Exp',
    description:
      'Our senior engineers and trainers have 10+ years of real-world enterprise experience across AWS, Azure, and cloud platforms.',
    accentClass: 'thistle',
    accentColor: '#DBC2CF',
  },
  {
    icon: Target,
    title: 'Practical Learning Approach',
    metric: '100% Hands-On',
    description:
      'Project-based methodology focusing on real-world application, architecture design, and portfolio building.',
    accentClass: 'lavender-grey',
    accentColor: '#9FA2B2',
  },
  {
    icon: CheckCircle2,
    title: 'Business-Focused Solutions',
    metric: 'ROI Driven',
    description:
      'Services aligned directly to client business goals, cost optimization, and measurable digital outcomes.',
    accentClass: 'cerulean',
    accentColor: '#3C7A89',
  },
  {
    icon: Cpu,
    title: 'Latest Tech Frameworks',
    metric: 'Modern Stack',
    description:
      'Up-to-date curricula and engineering with React 18, Next.js 14, Python 3.12, PyTorch, and modern DevOps tools.',
    accentClass: 'charcoal-blue',
    accentColor: '#2E4756',
  },
  {
    icon: MapPin,
    title: 'UK-Based Support & HQ',
    metric: 'London HQ',
    description:
      'Based in the UK. Local engineering expertise, UK business context, and fully GDPR-compliant data processing.',
    accentClass: 'jet-black',
    accentColor: '#16262E',
  },
  {
    icon: Rocket,
    title: 'Career Transformation',
    metric: '95% Pass Rate',
    description:
      'Proven career development. 95% of our AWS students pass official industry certification exams on their first attempt.',
    accentClass: 'thistle',
    accentColor: '#DBC2CF',
  },
];
