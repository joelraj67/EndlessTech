import { Cloud, Code2, Cpu, Server } from 'lucide-react';
import type { TechStackCategory } from '@/shared/types';

/** Tech-stack categories — Home TechStackSection. */
export const techStack: TechStackCategory[] = [
  {
    category: 'Cloud Infrastructure',
    icon: Cloud,
    color: 'from-sky-500 to-blue-600',
    techs: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Terraform', 'Cloudflare Edge'],
  },
  {
    category: 'Full-Stack Development',
    icon: Code2,
    color: 'from-blue-600 to-cyan-400',
    techs: ['React 18', 'Next.js 14', 'Node.js', 'Python 3.12', 'TypeScript', 'Java', '.NET Core'],
  },
  {
    category: 'AI & Data Engineering',
    icon: Cpu,
    color: 'from-purple-500 to-indigo-600',
    techs: ['PyTorch', 'TensorFlow', 'Power BI', 'PostgreSQL', 'Vector DBs', 'Python Data Stack'],
  },
  {
    category: 'DevOps & Security',
    icon: Server,
    color: 'from-emerald-500 to-teal-600',
    techs: ['Docker Containers', 'Kubernetes', 'CI/CD Pipelines', 'CompTIA Security+', 'GitHub Actions'],
  },
];
