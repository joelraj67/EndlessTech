import React from 'react';
import Link from 'next/link';
import { BookOpen, Map, Award, Code, Users, ArrowRight, CheckCircle2 } from 'lucide-react';

const courses = [
  {
    title: 'AWS Certified Solutions Architect',
    level: 'Associate & Professional',
    duration: '8 Weeks',
    topics: ['EC2 & S3 Security', 'VPC & Networking', 'IAM & Compliance', 'Serverless Lambda'],
    badge: 'AWS Partner',
  },
  {
    title: 'Azure Cloud Administrator & DevOps',
    level: 'AZ-104 / AZ-400',
    duration: '8 Weeks',
    topics: ['Azure AD & RBAC', 'Virtual Networks', 'Kubernetes AKS', 'ARM Templates'],
    badge: 'Microsoft Partner',
  },
  {
    title: 'Full-Stack Software Engineering',
    level: 'Beginner to Advanced',
    duration: '12 Weeks',
    topics: ['React 18 & Next.js 14', 'Node.js & TypeScript', 'PostgreSQL & REST APIs', 'CI/CD Pipelines'],
    badge: 'Full Bootcamp',
  },
  {
    title: 'AI & Machine Learning Engineering',
    level: 'Intermediate',
    duration: '10 Weeks',
    topics: ['Python & NumPy', 'PyTorch & TensorFlow', 'LLM Fine-tuning', 'Vector Databases'],
    badge: 'AI Specialization',
  },
];

export default function TrainingSection() {
  return (
    <section className="py-32 bg-[#071A2B] relative overflow-hidden border-t border-white/5">
      
      {/* Glow Effects */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#8B5CF6]/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-[720px] mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#00D4FF] text-xs font-mono mb-4">
            <BookOpen className="w-4 h-4" />
            <span>UK IT ACADEMY & COURSES</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 font-['Plus_Jakarta_Sans']">
            Build Industry Skills That <br />
            <span className="gradient-text-purple">Top Tech Employers Need</span>
          </h2>
          <p className="text-lg text-white/60 leading-relaxed font-['Inter']">
            Structured career pathways, hands-on lab projects, and direct preparation for industry-recognized cloud and software certifications.
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {courses.map((course) => (
            <div key={course.title} className="glass-card glass-card-hover p-8 rounded-2xl border border-white/10 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 text-xs font-mono">
                    {course.badge}
                  </span>
                  <span className="text-xs font-mono text-white/50">{course.duration} • {course.level}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 font-['Manrope'] group-hover:text-[#00D4FF] transition-colors">
                  {course.title}
                </h3>

                <div className="grid grid-cols-2 gap-2 mb-6">
                  {course.topics.map((t) => (
                    <div key={t} className="flex items-center gap-2 text-xs text-white/75">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Enrollment Open for Next Cohort
                </span>
                <Link 
                  href="/training" 
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#00D4FF] hover:underline"
                >
                  <span>View Syllabus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Banner Link */}
        <div className="text-center">
          <Link 
            href="/training" 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#8B5CF6] to-[#0066FF] text-white px-8 py-4 rounded-xl text-base font-semibold hover:opacity-95 shadow-xl shadow-[#8B5CF6]/25 transition-all"
          >
            <span>Explore All Academy Pathways</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
