import { Lightbulb, Cloud, Cpu, Layout, Workflow } from 'lucide-react';
import type { AdvisoryStep } from '@/shared/types';

/**
 * Consulting advisory steps — genuinely sequential, so numbered markers
 * are justified here (anthropic/frontend-design: "numbering only if order
 * carries information the reader needs").
 */
export const advisorySteps: AdvisoryStep[] = [
  {
    step: '01',
    title: 'Technology Strategy & ROI Alignment',
    description:
      'Audit existing IT architecture, identify cost inefficiencies, and establish a clear 12-to-36 month technology modernization roadmap.',
    icon: Lightbulb,
  },
  {
    step: '02',
    title: 'Cloud Adoption & Multi-Cloud Migration',
    description:
      'Structured workload assessment, landing zone configuration, security audit, and zero-downtime execution for AWS & Azure.',
    icon: Cloud,
  },
  {
    step: '03',
    title: 'Enterprise AI & Automation Implementation',
    description:
      'Identify high-impact AI use cases, prototype machine learning algorithms, and integrate secure LLM pipelines into business tools.',
    icon: Cpu,
  },
  {
    step: '04',
    title: 'Software & Systems Architecture',
    description:
      'Design resilient microservices, decouple legacy monoliths, optimize database queries, and implement automated DevOps CI/CD.',
    icon: Layout,
  },
  {
    step: '05',
    title: 'Digital Transformation & Team Upskilling',
    description:
      'End-to-end modernization combined with hands-on team training so your internal engineering team can confidently own the stack.',
    icon: Workflow,
  },
];
