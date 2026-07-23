import React from 'react';
import Link from 'next/link';
import { GraduationCap, Award, CheckCircle2, ArrowRight, Sparkles, BookOpen, Clock, Users } from 'lucide-react';

const courses = [
  {
    title: 'AWS Certified Solutions Architect',
    level: 'Associate / Professional',
    duration: '8 Weeks',
    format: 'Live Online + Labs',
    desc: 'Master AWS core services, IAM security, VPC networking, EC2 auto-scaling, S3 storage architectures, and serverless Lambda functions.',
    badge: 'AWS Official Prep',
  },
  {
    title: 'Azure Cloud Administrator & DevOps',
    level: 'AZ-104 & AZ-400',
    duration: '8 Weeks',
    format: 'Live Online + Labs',
    desc: 'Configure Azure Active Directory, virtual networks, Kubernetes AKS clusters, ARM templates, and automated release pipelines.',
    badge: 'Microsoft Official Prep',
  },
  {
    title: 'Full-Stack Web Development Bootcamp',
    level: 'Beginner to Advanced',
    duration: '12 Weeks',
    format: 'Project-Based',
    desc: 'Build production-grade applications with React 18, Next.js 14, Node.js, TypeScript, PostgreSQL, and modern Tailwind CSS design.',
    badge: 'Full Career Pathway',
  },
  {
    title: 'Python for Data Science & AI',
    level: 'Intermediate',
    duration: '10 Weeks',
    format: 'Hands-on Coding',
    desc: 'Master Python, NumPy, Pandas, SQL data modeling, data visualization with Power BI, and introductory machine learning algorithms.',
    badge: 'Data & AI',
  },
  {
    title: 'Machine Learning & LLM Engineering',
    level: 'Advanced',
    duration: '10 Weeks',
    format: 'Lab Intensive',
    desc: 'Deep learning with PyTorch, TensorFlow, fine-tuning large language models, vector databases (Pinecone/Weaviate), and MLOps deployment.',
    badge: 'Advanced AI',
  },
  {
    title: 'Cybersecurity Analyst & Security+',
    level: 'SY0-701 Prep',
    duration: '8 Weeks',
    format: 'Hands-on Labs',
    desc: 'CompTIA Security+ preparation, network vulnerability assessment, ethical hacking concepts, and UK GDPR security incident response.',
    badge: 'Security Certification',
  },
];

export default function TrainingPage() {
  return (
    <main className="pt-24 bg-[#071A2B] min-h-screen text-white">
      
      {/* Hero Header */}
      <section className="py-24 relative overflow-hidden border-b border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[750px] h-[350px] bg-[#8B5CF6]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-6 relative z-10 text-center max-w-[780px]">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-purple-300 text-xs font-mono mb-6">
            <GraduationCap className="w-4 h-4 text-purple-400" />
            <span>UK TECHNOLOGY ACADEMY</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 font-['Plus_Jakarta_Sans'] leading-tight">
            Professional IT Training & <br />
            <span className="gradient-text-purple">Industry Certifications</span>
          </h1>

          <p className="text-lg text-white/70 leading-relaxed font-['Inter']">
            Curricula designed with cloud partners. 95% first-attempt certification pass rate for AWS and Azure learners across the UK.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((c) => (
              <div key={c.title} className="glass-card glass-card-hover p-8 rounded-2xl border border-white/10 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30 text-xs font-mono">
                      {c.badge}
                    </span>
                    <span className="text-xs font-mono text-white/50">{c.duration}</span>
                  </div>

                  <h2 className="text-xl font-bold text-white mb-3 font-['Manrope'] group-hover:text-[#00D4FF] transition-colors">
                    {c.title}
                  </h2>

                  <p className="text-white/70 text-xs leading-relaxed mb-6 font-['Inter']">
                    {c.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs text-white/60 font-mono">
                    <span>Level: {c.level}</span>
                    <span>Format: {c.format}</span>
                  </div>

                  <Link 
                    href="/contact" 
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/15 text-xs font-semibold text-white hover:bg-white/10 transition-colors"
                  >
                    <span>Enroll / Request Syllabus</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#00D4FF]" />
                  </Link>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
