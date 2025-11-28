import React from 'react';
import { Star } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        
        {/* Timeline */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-white mb-8">Experience & <span className="text-pink-400">Education</span></h2>
          
          <div className="relative border-l-2 border-slate-800 space-y-12 ml-4">
            {[
              { year: "2022 - Present", title: "Frontend Developer", company: "Tech Solutions Inc.", desc: "Building scalable web applications using React and Next.js." },
              { year: "2024 - Present", title: "UI/UX Designer", company: "Creative Studio", desc: "Designed user interfaces for mobile and web apps using Figma." },
              { year: "2025 - 2029", title: "B.Tech in Computer Science & Engineering", company: "Netaji Subhash Eng. College", desc: "Specialized in Web Development, UI-UX Designer, Web3 and DSA." }
            ].map((item, idx) => (
              <div key={idx} className="relative pl-8 group">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-purple-500 group-hover:bg-purple-500 transition-colors shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                <span className="text-sm text-purple-400 font-mono mb-1 block">{item.year}</span>
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <h4 className="text-slate-400 text-sm mb-2">{item.company}</h4>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-white mb-8">What Clients <span className="text-yellow-400">Say</span></h2>
          
          <div className="grid gap-6">
            {[
              { name: "Sarah Das", role: "Product Manager", text: "Sucheta delivered an exceptional website that exceeded our expectations. Her attention to detail is unmatched.", stars: 5 },
              { name: "Michael Gupta", role: "Startup Founder", text: "Working with Sucheta was a pleasure. She understood our vision and brought it to life with stunning design.", stars: 5 }
            ].map((t, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/5 relative">
                <div className="flex gap-1 mb-4 text-yellow-500">
                  {[...Array(t.stars)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-300 italic mb-6">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">{t.name}</h4>
                    <span className="text-slate-500 text-xs">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
