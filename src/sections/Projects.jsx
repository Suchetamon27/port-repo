import React from 'react';
import { User, Briefcase, GraduationCap, Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "A responsive portfolio cascading with animations and interactive elements built with React.",
      tags: ["React", "Tailwind", "Framer Motion"],
      color: "from-purple-500 to-blue-500",
      icon: <User size={32} />
    },
    {
      title: "Hotel Booking Platform",
      desc: "Comprehensive booking solution with real-time availability, user dashboards, and payment integration.",
      tags: ["Next.js", "MongoDB", "Stripe"],
      color: "from-blue-500 to-cyan-500",
      icon: <Briefcase size={32} />
    },
    {
      title: "WBJEE Rank & College Predictor AI",
      desc: "An analytical tool using historical data to predict college admission chances based on rank.",
      tags: ["Python", "Machine Learning", "React"],
      color: "from-emerald-500 to-teal-500",
      icon: <GraduationCap size={32} />
    }
  ];

  return (
    <section id="projects" className="py-20 relative bg-black/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
           <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl font-bold text-white">Featured <span className="text-blue-400">Projects</span></h2>
            <p className="text-slate-400">A selection of my recent work.</p>
           </div>
           <button className="px-6 py-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors flex items-center gap-2">
             View Github <Github size={18} />
           </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative rounded-2xl bg-slate-900 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className={`h-48 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-all duration-500 flex items-center justify-center`}>
                <div className="p-4 bg-slate-950/50 backdrop-blur-md rounded-full text-white shadow-xl transform group-hover:scale-110 transition-transform duration-500">
                   {project.icon}
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{project.desc}</p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-slate-300 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <button className="flex items-center gap-2 text-sm text-white font-medium hover:text-blue-400 transition-colors">
                    Live Demo <ExternalLink size={14} />
                  </button>
                  <button className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                    Source Code <Github size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
