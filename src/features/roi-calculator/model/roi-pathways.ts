import type { Pathway } from '@/shared/types';

/** ROI calculator pathways — features/ROICalculator. */
export const pathways: Pathway[] = [
  {
    id: 'aws',
    name: 'AWS Solutions Architect',
    type: 'IT Academy',
    duration: '8 Weeks',
    passRate: '95%',
    avgSalaryBoost: '+£18,500/yr',
    prepDetails:
      'Includes official AWS exam voucher prep, 100+ lab scenarios, & resume review.',
  },
  {
    id: 'azure',
    name: 'Azure DevOps Specialist',
    type: 'IT Academy',
    duration: '8 Weeks',
    passRate: '92%',
    avgSalaryBoost: '+£16,000/yr',
    prepDetails:
      'ARM templates, Kubernetes AKS, CI/CD pipelines, and AZ-400 certification labs.',
  },
  {
    id: 'fullstack',
    name: 'Full-Stack Software Engineer',
    type: 'IT Academy',
    duration: '12 Weeks',
    passRate: '98%',
    avgSalaryBoost: '+£22,000/yr',
    prepDetails:
      'React 18, Next.js 14, Node.js, TypeScript, PostgreSQL, and portfolio projects.',
  },
  {
    id: 'cloud-mig',
    name: 'Enterprise Cloud Migration',
    type: 'Consulting Advisory',
    duration: '6-12 Weeks',
    passRate: '100% Zero Downtime',
    avgSalaryBoost: '35% Infrastructure Cost Savings',
    prepDetails:
      'Complete AWS/Azure landing zone, security audit, database migration, & team upskilling.',
  },
];
