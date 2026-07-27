import { Lightbulb, Cloud, Cpu, Layout, Workflow } from 'lucide-react';
import type { AdvisoryStep } from '@/shared/types';

/**
 * Consulting advisory steps — genuinely sequential, so numbered markers
 * are justified here (anthropic/frontend-design: "numbering only if order
 * carries information the reader needs").
 * 
 * Enhanced with extended editorial palette colors:
 * - 01 Technology Strategy: Thistle (#DBC2CF) — soft training accent
 * - 02 Cloud Adoption: Cerulean (#3C7A89) — cloud info state
 * - 03 Enterprise AI: Charcoal Blue (#2E4756) — elevated dark
 * - 04 Software Architecture: Lavender Grey (#9FA2B2) — engineering neutral
 * - 05 Digital Transformation: Jet Black (#16262E) — deepest dark/authority
 * Terracotta (#B0552E) remains the single high-signal accent for CTAs.
 */
export const advisorySteps: AdvisoryStep[] = [
  {
    step: '01',
    title: 'Technology Strategy & ROI Alignment',
    description:
      'Audit existing IT architecture, identify cost inefficiencies, and establish a clear 12-to-36 month technology modernization roadmap.',
    icon: Lightbulb,
    accentColor: '#DBC2CF', // Thistle
    accentClass: 'thistle',
  },
  {
    step: '02',
    title: 'Cloud Adoption & Multi-Cloud Migration',
    description:
      'Structured workload assessment, landing zone configuration, security audit, and zero-downtime execution for AWS & Azure.',
    icon: Cloud,
    accentColor: '#3C7A89', // Cerulean
    accentClass: 'cerulean',
  },
  {
    step: '03',
    title: 'Enterprise AI & Automation Implementation',
    description:
      'Identify high-impact AI use cases, prototype machine learning algorithms, and integrate secure LLM pipelines into business tools.',
    icon: Cpu,
    accentColor: '#2E4756', // Charcoal Blue
    accentClass: 'charcoal-blue',
  },
  {
    step: '04',
    title: 'Software & Systems Architecture',
    description:
      'Design resilient microservices, decouple legacy monoliths, optimize database queries, and implement automated DevOps CI/CD.',
    icon: Layout,
    accentColor: '#9FA2B2', // Lavender Grey
    accentClass: 'lavender-grey',
  },
  {
    step: '05',
    title: 'Digital Transformation & Team Upskilling',
    description:
      'End-to-end modernization combined with hands-on team training so your internal engineering team can confidently own the stack.',
    icon: Workflow,
    accentColor: '#16262E', // Jet Black
    accentClass: 'jet-black',
  },
];