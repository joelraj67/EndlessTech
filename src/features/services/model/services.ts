import {
  GraduationCap,
  Code2,
  Cloud,
  BrainCircuit,
  Lightbulb,
} from 'lucide-react';
import type { Service } from '@/shared/types';

/**
 * The five core services. Single source of truth consumed by:
 * - Home ServicesSection (card grid)
 * - /services overview page
 * - /services/[slug] dynamic detail route (capabilities + CTA)
 *
 * Slugs are the route segments — must stay stable for SEO + external links.
 * 
 * Updated to use the extended editorial palette (cool editorial tones):
 * - Thistle (#DBC2CF) — soft muted accent for IT Training
 * - Lavender Grey (#9FA2B2) — muted neutral for Software Development
 * - Cerulean (#3C7A89) — info state for Cloud Services
 * - Charcoal Blue (#2E4756) — elevated dark for AI & Data Analytics
 * - Jet Black (#16262E) — deepest dark for Technology Consulting
 * 
 * Terracotta (#B0552E) remains the single high-signal accent for CTAs.
 */
export const services: Service[] = [
  {
    slug: 'it-training',
    title: 'IT Training',
    icon: GraduationCap,
    tag: 'B2C & B2B Academy',
    description:
      'Industry-focused technology training designed to build practical skills for the modern workplace with hands-on labs.',
    features: [
      'Cloud Computing',
      'Software Development',
      'Data Analytics',
      'AI & Machine Learning',
      'Cybersecurity',
    ],
    capabilities: [
      'Cloud Computing (AWS, Azure, Google Cloud Solutions Architect & Admin)',
      'Software Development (Full-Stack React 18, Next.js 14, Node.js, Python)',
      'Data Analytics & Business Intelligence (Power BI, SQL, Data Modeling)',
      'AI & Machine Learning Engineering (PyTorch, TensorFlow, LLM Fine-Tuning)',
      'Cybersecurity & Network Defense (CompTIA Security+, Ethical Hacking)',
    ],
    accent: 'from-thistle to-thistle/70',
    cta: { label: 'Enroll / Request Course Prospectus', href: '/contact' },
    accentColor: '#DBC2CF',
  },
  {
    slug: 'software-development',
    title: 'Software Development',
    icon: Code2,
    tag: 'Custom Engineering',
    description:
      'Custom web, mobile, and enterprise software solutions designed to solve complex business challenges cleanly.',
    features: [
      'Web Applications',
      'Mobile Applications',
      'Enterprise Software',
      'API Development',
    ],
    capabilities: [
      'Custom Web Application Development (React 18, Next.js 14, Node.js, TypeScript)',
      'Mobile App Development (React Native & Cross-Platform iOS/Android)',
      'Enterprise Software & Microservices (Scalable REST & GraphQL APIs)',
      'Legacy System Refactoring & Cloud Stack Modernization',
      'Automated Quality Assurance & Continuous Integration (CI/CD)',
    ],
    accent: 'from-lavender-grey to-lavender-grey/70',
    cta: { label: 'Discuss Your Software Project', href: '/contact' },
    accentColor: '#9FA2B2',
  },
  {
    slug: 'cloud-services',
    title: 'Cloud Services',
    icon: Cloud,
    tag: 'AWS & Azure Partners',
    description:
      'Helping UK organisations migrate, optimise, and manage modern cloud infrastructure with zero downtime.',
    features: [
      'Cloud Migration',
      'AWS / Azure Solutions',
      'Infrastructure Management',
      'Cloud Security',
    ],
    capabilities: [
      'Zero-Downtime AWS & Azure Cloud Migration Architecture',
      'Infrastructure as Code (Terraform & AWS CloudFormation)',
      'Container Orchestration with Kubernetes (EKS / AKS)',
      'Cloud Cost Optimization & Multi-Cloud Architecture Review',
      '24/7 Managed Infrastructure Monitoring & UK Security Compliance',
    ],
    accent: 'from-cerulean to-cerulean/70',
    cta: { label: 'Schedule Cloud Assessment', href: '/contact' },
    accentColor: '#3C7A89',
  },
  {
    slug: 'ai-data-analytics',
    title: 'AI & Data Analytics',
    icon: BrainCircuit,
    tag: 'Intelligent Automation',
    description:
      'Transforming raw enterprise business data into predictive insights, ML pipelines, and automated intelligence.',
    features: [
      'AI Solutions',
      'Machine Learning',
      'Data Engineering',
      'Business Intelligence',
    ],
    capabilities: [
      'Custom Machine Learning Model Development & Training (PyTorch & TensorFlow)',
      'Enterprise Data Engineering Pipelines & Warehouse Design (PostgreSQL / Snowflake)',
      'Business Intelligence & Executive Analytics Dashboards (Power BI & Tableau)',
      'Secure LLM Integration, Vector Databases & RAG Pipelines',
      'Automated Predictive Analytics for Business Operations',
    ],
    accent: 'from-charcoal-blue to-charcoal-blue/70',
    cta: { label: 'Discuss AI Implementation', href: '/contact' },
    accentColor: '#2E4756',
  },
  {
    slug: 'technology-consulting',
    title: 'Technology Consulting',
    icon: Lightbulb,
    tag: 'Strategic Transformation',
    description:
      'Strategic technology advice helping business executives make smarter digital decisions and modernization plans.',
    features: [
      'Technology Strategy',
      'Cloud Adoption',
      'AI Implementation',
      'Software Architecture',
      'Digital Transformation',
    ],
    capabilities: [
      '12-to-36 Month Technology Strategy & IT Roadmap Design',
      'Cloud Adoption Assessment & Multi-Cloud Security Audit',
      'Enterprise Software Architecture Review & API Design',
      'Senior Executive Advisory for CTOs, IT Directors, and Product Leads',
      'Digital Transformation Lifecycle Management & Team Upskilling',
    ],
    accent: 'from-jet-black to-jet-black/70',
    cta: { label: 'Schedule Advisory Consultation', href: '/contact' },
    accentColor: '#16262E',
  },
];

/** Lookup helper for the [slug] route + cross-linking. */
export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);
