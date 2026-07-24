import { Award, Target, CheckCircle2, Cpu, MapPin, Rocket } from 'lucide-react';
import type { Advantage } from '@/shared/types';

/** "Why choose us" advantage cards — Home WhyChooseUsSection. */
export const advantages: Advantage[] = [
  {
    icon: Award,
    title: 'Industry-Experienced Experts',
    metric: '10+ Years Exp',
    description:
      'Our senior engineers and trainers have 10+ years of real-world enterprise experience across AWS, Azure, and cloud platforms.',
  },
  {
    icon: Target,
    title: 'Practical Learning Approach',
    metric: '100% Hands-On',
    description:
      'Project-based methodology focusing on real-world application, architecture design, and portfolio building.',
  },
  {
    icon: CheckCircle2,
    title: 'Business-Focused Solutions',
    metric: 'ROI Driven',
    description:
      'Services aligned directly to client business goals, cost optimization, and measurable digital outcomes.',
  },
  {
    icon: Cpu,
    title: 'Latest Tech Frameworks',
    metric: 'Modern Stack',
    description:
      'Up-to-date curricula and engineering with React 18, Next.js 14, Python 3.12, PyTorch, and modern DevOps tools.',
  },
  {
    icon: MapPin,
    title: 'UK-Based Support & HQ',
    metric: 'London HQ',
    description:
      'Based in the UK. Local engineering expertise, UK business context, and fully GDPR-compliant data processing.',
  },
  {
    icon: Rocket,
    title: 'Career Transformation',
    metric: '95% Pass Rate',
    description:
      'Proven career development. 95% of our AWS students pass official industry certification exams on their first attempt.',
  },
];
