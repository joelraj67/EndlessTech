import React from 'react';
import { Cloud, Code2, Cpu, Server, Terminal, Layers } from 'lucide-react';

const stackCategories = [
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

export default function TechStackSection() {
  return (
    <section className="py-32 bg-[#051320] relative border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-[700px] mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#00D4FF] text-xs font-mono mb-4">
            <Layers className="w-4 h-4" />
            <span>MODERN STACK FRAMEWORKS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 font-['Plus_Jakarta_Sans']">
            Mastering Tools That Power <br />
            <span className="gradient-text">Modern Enterprise Systems</span>
          </h2>
          <p className="text-lg text-white/60 leading-relaxed font-['Inter']">
            We teach and build with production-proven, enterprise-standard technology stacks.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stackCategories.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.category} className="glass-card glass-card-hover p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${item.color} p-0.5 mb-6 shadow-lg`}>
                    <div className="w-full h-full bg-[#071A2B] rounded-[10px] flex items-center justify-center text-white">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-4 font-['Manrope']">{item.category}</h3>

                  <ul className="space-y-2">
                    {item.techs.map((tech) => (
                      <li key={tech} className="text-xs font-mono text-white/75 flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
