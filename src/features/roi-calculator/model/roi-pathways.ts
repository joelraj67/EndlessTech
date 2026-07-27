import type { Pathway } from '@/shared/types';

/** ROI calculator pathways — features/ROICalculator. 
 * Each pathway now uses an extended palette color for visual differentiation:
 * - AWS: Thistle (#DBC2CF) - soft training accent
 * - Azure: Cerulean (#3C7A89) - cloud info state
 * - Full-Stack: Lavender Grey (#9FA2B2) - engineering neutral
 * - Cloud Migration: Charcoal Blue (#2E4756) - consulting dark surface
 */
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
    accentColor: '#DBC2CF', // Thistle
    accentClass: 'thistle',
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
    accentColor: '#3C7A89', // Cerulean
    accentClass: 'cerulean',
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
    accentColor: '#9FA2B2', // Lavender Grey
    accentClass: 'lavender-grey',
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
    accentColor: '#2E4756', // Charcoal Blue
    accentClass: 'charcoal-blue',
  },
];
