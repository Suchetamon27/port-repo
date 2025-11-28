import React from 'react';
import { Code, Terminal, Palette, Globe, Video, Github } from 'lucide-react';

// Helpers
const CloudIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19c0-3.037-2.463-5.5-5.5-5.5S6.5 15.963 6.5 19"/><path d="M19 19V7.5a4.5 4.5 0 1 0-9 0v.5"/></svg>;
const BotIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z"/><path d="M4 11v2a8 8 0 0 0 16 0v-2"/><rect width="16" height="12" x="4" y="8" rx="2"/></svg>;

const SkillBadge = ({ name, icon, color }) => (
  <div className="group relative flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden cursor-default">
    <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
    <div className="p-2 rounded-lg bg-slate-950 group-hover:scale-110 transition-transform duration-300 text-white">
      {icon}
    </div>
    <span className="text-slate-200 font-medium group-hover:text-white">{name}</span>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Skills & <span className="text-purple-400">Expertise</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Technologies and tools I leverage to create intuitive, scalable, and robust applications.</p>
        </div>

        <div className="space-y-12">
          {/* Frontend */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              <span className="w-8 h-1 bg-purple-500 rounded-full"></span> Frontend Development
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
               {/* Note: In a real project, specific icons would be imported. Using generic Code/Terminal icons for demo purposes where Lucide matches weren't perfect */}
               <SkillBadge name="HTML" icon={<Code size={20}/>} color="from-blue-500 to-indigo-500" />
               <SkillBadge name="CSS" icon={<Palette size={20}/>} color="from-blue-500 to-indigo-500" />
               <SkillBadge name="JavaScript" icon={<Terminal size={20}/>} color="from-blue-500 to-indigo-500" />
               <SkillBadge name="C" icon={<Terminal size={20}/>} color="from-blue-500 to-indigo-500" />
               <SkillBadge name="C++ & DSA" icon={<Terminal size={20}/>} color="from-blue-500 to-indigo-500" />
               <SkillBadge name="Java" icon={<Code size={20}/>} color="from-blue-500 to-indigo-500" />
               <SkillBadge name="React.js" icon={<Code size={20}/>} color="from-cyan-500 to-blue-500" />
               <SkillBadge name="TypeScript" icon={<Code size={20}/>} color="from-blue-500 to-indigo-500" />
               <SkillBadge name="Tailwind CSS" icon={<Palette size={20}/>} color="from-teal-400 to-cyan-500" />
               <SkillBadge name="Next.js" icon={<Globe size={20}/>} color="from-slate-500 to-white" />
            </div>
          </div>

          {/* Backend & Tools */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <span className="w-8 h-1 bg-blue-500 rounded-full"></span> Backend & Database
              </h3>
              <div className="grid grid-cols-2 gap-4">
                 <SkillBadge name="Node.js" icon={<Terminal size={20}/>} color="from-green-500 to-emerald-500" />
                 <SkillBadge name="Python" icon={<Terminal size={20}/>} color="from-yellow-400 to-yellow-600" />
                 <SkillBadge name="MongoDB" icon={<Terminal size={20}/>} color="from-green-400 to-green-700" />
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <span className="w-8 h-1 bg-pink-500 rounded-full"></span> Tools & Others
              </h3>
              <div className="grid grid-cols-2 gap-4">
                 <SkillBadge name="GIT" icon={<Github size={20}/>} color="from-slate-400 to-slate-600" />
                 <SkillBadge name="Google Cloud" icon={<CloudIcon size={20}/>} color="from-slate-400 to-slate-600" />
                 <SkillBadge name="Figma" icon={<Palette size={20}/>} color="from-purple-400 to-pink-500" />
                 <SkillBadge name="GitHub Copilot" icon={<BotIcon size={20}/>} color="from-teal-400 to-emerald-500" />
                 <SkillBadge name="Video Editing" icon={<Video size={20}/>} color="from-slate-400 to-slate-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
