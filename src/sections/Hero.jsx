import React from 'react';
import { Github, Linkedin, ExternalLink, Send, ChevronDown, Twitter } from 'lucide-react';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm font-medium animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Available for hire
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight animate-fade-in-up delay-100">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
              Sucheta
            </span>
          </h1>
          
          <div className="space-y-4 animate-fade-in-up delay-200">
            <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
              A passionate <span className="text-white font-semibold">Frontend Developer</span> & <span className="text-white font-semibold">UI/UX Designer</span> crafting immersive web experiences with modern technologies.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 rounded-full bg-white text-slate-950 font-bold hover:bg-slate-200 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform hover:-translate-y-1"
              >
                View My Work <ChevronDown size={20} />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 rounded-full bg-transparent border border-white/20 text-white font-bold hover:bg-white/10 transition-all flex items-center gap-2 backdrop-blur-sm"
              >
                Contact Me <Send size={18} />
              </button>
            </div>
          </div>

          <div className="flex gap-6 text-slate-400 pt-8 animate-fade-in-up delay-300">
            <a href="#" className="hover:text-purple-400 transition-colors transform hover:scale-110"><Github size={24} /></a>
            <a href="#" className="hover:text-blue-400 transition-colors transform hover:scale-110"><Linkedin size={24} /></a>
            <a href="#" className="hover:text-sky-400 transition-colors transform hover:scale-110"><Twitter size={24} /></a>
            <a href="#" className="hover:text-pink-400 transition-colors transform hover:scale-110"><ExternalLink size={24} /></a>
          </div>
        </div>

        <div className="relative z-0 hidden lg:block animate-float">
           <div className="relative w-[500px] h-[500px]">
             {/* Decorative circles */}
             <div className="absolute inset-0 rounded-full border border-purple-500/20 animate-spin-slow"></div>
             <div className="absolute inset-10 rounded-full border border-blue-500/20 animate-spin-reverse-slow"></div>
             
             {/* Main Image Container */}
             <div className="absolute inset-20 rounded-full overflow-hidden bg-gradient-to-tr from-purple-900/50 to-blue-900/50 backdrop-blur-xl border border-white/10 shadow-2xl flex items-center justify-center group">
                 <div className="absolute inset-0 bg-purple-600/20 group-hover:bg-purple-600/10 transition-all duration-500"></div>
                 <div className="text-9xl">👩‍💻</div>
                 
                 {/* Floating Badges */}
                 <div className="absolute -top-4 -right-4 px-4 py-2 bg-slate-900/80 backdrop-blur-md rounded-xl border border-white/10 shadow-xl flex items-center gap-2 animate-bounce-slow">
                    <span className="text-2xl">✨</span>
                    <div className="flex flex-col">
                       <span className="text-xs text-slate-400">Experience</span>
                       <span className="text-sm font-bold text-white">2+ Years</span>
                    </div>
                 </div>

                 <div className="absolute bottom-10 -left-10 px-4 py-2 bg-slate-900/80 backdrop-blur-md rounded-xl border border-white/10 shadow-xl flex items-center gap-2 animate-bounce-slow delay-700">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold text-xs">JS</div>
                    <div className="flex flex-col">
                       <span className="text-xs text-slate-400">Stack</span>
                       <span className="text-sm font-bold text-white">Javascript</span>
                    </div>
                 </div>
             </div>
           </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500">
        <ChevronDown size={24} />
      </div>
    </section>
  );
};

export default Hero;
