import type { Course } from '@/shared/types';

/**
 * Training courses / certification pathways.
 * Consumed by Home TrainingSection (top 4) + /training page (full 6).
 */
export const courses: Course[] = [
  {
    slug: 'aws-solutions-architect',
    title: 'AWS Certified Solutions Architect',
    level: 'Associate & Professional',
    duration: '8 Weeks',
    format: 'Live Online + Labs',
    description:
      'Master AWS core services, IAM security, VPC networking, EC2 auto-scaling, S3 storage architectures, and serverless Lambda functions.',
    topics: ['EC2 & S3 Security', 'VPC & Networking', 'IAM & Compliance', 'Serverless Lambda'],
    badge: 'AWS Partner',
  },
  {
    slug: 'azure-cloud-devops',
    title: 'Azure Cloud Administrator & DevOps',
    level: 'AZ-104 / AZ-400',
    duration: '8 Weeks',
    format: 'Live Online + Labs',
    description:
      'Configure Azure Active Directory, virtual networks, Kubernetes AKS clusters, ARM templates, and automated release pipelines.',
    topics: ['Azure AD & RBAC', 'Virtual Networks', 'Kubernetes AKS', 'ARM Templates'],
    badge: 'Microsoft Partner',
  },
  {
    slug: 'full-stack-software-engineer',
    title: 'Full-Stack Software Engineering',
    level: 'Beginner to Advanced',
    duration: '12 Weeks',
    format: 'Project-Based',
    description:
      'Build production-grade applications with React 18, Next.js 14, Node.js, TypeScript, PostgreSQL, and modern Tailwind CSS design.',
    topics: ['React 18 & Next.js 14', 'Node.js & TypeScript', 'PostgreSQL & REST APIs', 'CI/CD Pipelines'],
    badge: 'Full Bootcamp',
  },
  {
    slug: 'ai-machine-learning-engineering',
    title: 'AI & Machine Learning Engineering',
    level: 'Intermediate',
    duration: '10 Weeks',
    format: 'Lab Intensive',
    description:
      'Deep learning with PyTorch, TensorFlow, fine-tuning large language models, vector databases (Pinecone/Weaviate), and MLOps deployment.',
    topics: ['Python & NumPy', 'PyTorch & TensorFlow', 'LLM Fine-tuning', 'Vector Databases'],
    badge: 'AI Specialization',
  },
  {
    slug: 'python-data-science-ai',
    title: 'Python for Data Science & AI',
    level: 'Intermediate',
    duration: '10 Weeks',
    format: 'Hands-on Coding',
    description:
      'Master Python, NumPy, Pandas, SQL data modeling, data visualization with Power BI, and introductory machine learning algorithms.',
    badge: 'Data & AI',
  },
  {
    slug: 'cybersecurity-analyst-security-plus',
    title: 'Cybersecurity Analyst & Security+',
    level: 'SY0-701 Prep',
    duration: '8 Weeks',
    format: 'Hands-on Labs',
    description:
      'CompTIA Security+ preparation, network vulnerability assessment, ethical hacking concepts, and UK GDPR security incident response.',
    badge: 'Security Certification',
  },
];

/** The 4 courses surfaced on the homepage (full set lives on /training). */
export const featuredCourses: Course[] = courses.slice(0, 4);
