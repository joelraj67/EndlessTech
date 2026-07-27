import { Cloud, Code2, Cpu, Server } from 'lucide-react';
import type { TechStackCategory } from '@/shared/types';

/** Tech-stack categories — Home TechStackSection.
 * Updated to use the extended editorial palette (cool editorial tones):
 * - Cloud Infrastructure: Cerulean (#3C7A89) - cloud/info state
 * - Full-Stack Development: Lavender Grey (#9FA2B2) - engineering neutral
 * - AI & Data Engineering: Charcoal Blue (#2E4756) - elevated dark surface
 * - DevOps & Security: Jet Black (#16262E) - deepest dark
 * 
 * Terracotta (#B0552E) remains the single high-signal accent for CTAs.
 */
export const techStack: TechStackCategory[] = [
  {
    category: 'Cloud Infrastructure',
    icon: Cloud,
    color: 'from-cerulean to-cerulean/70',
    techs: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Terraform', 'Cloudflare Edge'],
  },
  {
    category: 'Full-Stack Development',
    icon: Code2,
    color: 'from-lavender-grey to-lavender-grey/70',
    techs: ['React 18', 'Next.js 14', 'Node.js', 'Python 3.12', 'TypeScript', 'Java', '.NET Core'],
  },
  {
    category: 'AI & Data Engineering',
    icon: Cpu,
    color: 'from-charcoal-blue to-charcoal-blue/70',
    techs: ['PyTorch', 'TensorFlow', 'Power BI', 'PostgreSQL', 'Vector DBs', 'Python Data Stack'],
  },
  {
    category: 'DevOps & Security',
    icon: Server,
    color: 'from-jet-black to-jet-black/70',
    techs: ['Docker Containers', 'Kubernetes', 'CI/CD Pipelines', 'CompTIA Security+', 'GitHub Actions'],
  },
];
