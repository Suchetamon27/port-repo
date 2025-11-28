import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Terminal, 
  Cpu, 
  Globe, 
  MessageSquare, 
  Send, 
  User, 
  Briefcase, 
  GraduationCap, 
  Star,
  ChevronDown,
  Menu,
  X,
  Twitter,
  Palette,
  Sparkles
} from 'lucide-react';

/* --- Components --- */

// Custom Animated Background
function Background() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-950">
            <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-purple-700/20 blur-[120px] animate-pulse" />
            <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-blue-700/20 blur-[120px] animate-pulse delay-1000" />
            <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[60%] rounded-full bg-indigo-700/10 blur-[120px] animate-pulse delay-2000" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        </div>
    );
}

// Navigation Bar
const Navbar = ({ activeSection, scrollToSection, mobileMenuOpen, setMobileMenuOpen }) => {
  const navLinks = [
    { id: 'home', label: 'Home', icon: <User size={18} /> },
    { id: 'projects', label: 'Projects', icon: <Code size={18} /> },
    { id: 'skills', label: 'Skills', icon: <Cpu size={18} /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase size={18} /> },
    { id: 'aichat', label: 'AI Chat', icon: <MessageSquare size={18} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={18} /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-950/70 border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => scrollToSection('home')}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all">
            S
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            Sucheta<span className="text-purple-500">.portfolio</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5 backdrop-blur-sm">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2
                ${activeSection === link.id 
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'}
              `}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-slate-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      <div className={`md:hidden absolute top-20 left-0 w-full bg-slate-900/95 border-b border-white/10 shadow-2xl transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-96 py-4' : 'max-h-0'}`}>
        <div className="flex flex-col gap-2 px-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                scrollToSection(link.id);
                setMobileMenuOpen(false);
              }}
              className={`
                p-3 rounded-xl text-left font-medium transition-all flex items-center gap-3
                ${activeSection === link.id 
                  ? 'bg-purple-600/20 text-purple-400 border border-purple-500/30' 
                  : 'text-slate-400 hover:bg-white/5 hover:text-white'}
              `}
            >
              {link.icon}
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

// Hero Section
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient-x">
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

// Skill Card Component
const SkillBadge = ({ name, icon, color }) => (
  <div className="group relative flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden cursor-default">
    <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
    <div className="p-2 rounded-lg bg-slate-950 group-hover:scale-110 transition-transform duration-300 text-white">
      {icon}
    </div>
    <span className="text-slate-200 font-medium group-hover:text-white">{name}</span>
  </div>
);

// Skills Section
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
               <SkillBadge name="HTML" icon={<HTML size={20}/>} color="from-blue-500 to-indigo-500" />
               <SkillBadge name="CSS" icon={<CSS size={20}/>} color="from-blue-500 to-indigo-500" />
               <SkillBadge name="JavaScript" icon={<JavaScript size={20}/>} color="from-blue-500 to-indigo-500" />
               <SkillBadge name="C" icon={<C size={20}/>} color="from-blue-500 to-indigo-500" />
               <SkillBadge name="C++ & DSA" icon={<Terminal size={20}/>} color="from-blue-500 to-indigo-500" />
               <SkillBadge name="Java" icon={<Java size={20}/>} color="from-blue-500 to-indigo-500" />
               <SkillBadge name="React.js" icon={<Reactjs size={20}/>} color="from-cyan-500 to-blue-500" />
               <SkillBadge name="TypeScript" icon={<Typescript size={20}/>} color="from-blue-500 to-indigo-500" />
               <SkillBadge name="Tailwind CSS" icon={<Tailwindcss size={20}/>} color="from-teal-400 to-cyan-500" />
               <SkillBadge name="Next.js" icon={<Nextjs size={20}/>} color="from-slate-500 to-white" />
               <SkillBadge name="Q Basic" icon={<Terminal size={20}/>} color="from-slate-500 to-white" />
               <SkillBadge name="Visual Basic" icon={<Visualbasic size={20}/>} color="from-slate-500 to-white" />
               
               
            </div>
          </div>

          {/* Backend & Tools */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <span className="w-8 h-1 bg-blue-500 rounded-full"></span> Backend & Database
              </h3>
              <div className="grid grid-cols-2 gap-4">
                 <SkillBadge name="Node.js" icon={<Nodejs size={20}/>} color="from-green-500 to-emerald-500" />
                 <SkillBadge name="Python" icon={<Python size={20}/>} color="from-yellow-400 to-yellow-600" />
                 <SkillBadge name="MongoDB" icon={<MongoDB size={20}/>} color="from-green-400 to-green-700" />
                
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <span className="w-8 h-1 bg-pink-500 rounded-full"></span> Tools & Others
              </h3>
              <div className="grid grid-cols-2 gap-4">
                 <SkillBadge name="GIT" icon={<Github size={20}/>} color="from-slate-400 to-slate-600" />
                 <SkillBadge name="GitHub" icon={<Github size={20}/>} color="from-slate-400 to-slate-600" />
                 <SkillBadge name="Google Cloud" icon={<Cloud size={20}/>} color="from-slate-400 to-slate-600" />
                 <SkillBadge name="Web#" icon={<Blockchain size={20}/>} color="from-slate-400 to-slate-600" />
                 <SkillBadge name="Figma" icon={<Palette size={20}/>} color="from-purple-400 to-pink-500" />
                 <SkillBadge name="Vercel" icon={<Globe size={20}/>} color="from-white to-slate-400" />
                 <SkillBadge name="GitHub Copilot" icon={<BotIcon size={20}/>} color="from-teal-400 to-emerald-500" />
                 <SkillBadge name="Generative AI" icon={<GenerativeAI size={20}/>} color="from-slate-400 to-slate-600" />
                 <SkillBadge name="UI/UX" icon={<Palette size={20}/>} color="from-slate-400 to-slate-600" />
                 <SkillBadge name="Open Source Contributer" icon={<Opensource size={20}/>} color="from-slate-400 to-slate-600" />
                 <SkillBadge name="Video Editing" icon={<Video size={20}/>} color="from-slate-400 to-slate-600" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Simple icon wrapper if Lucide doesn't have specific ones easily mapping
const CloudIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19c0-3.037-2.463-5.5-5.5-5.5S6.5 15.963 6.5 19"/><path d="M19 19V7.5a4.5 4.5 0 1 0-9 0v.5"/></svg>;
const BotIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z"/><path d="M4 11v2a8 8 0 0 0 16 0v-2"/><rect width="16" height="12" x="4" y="8" rx="2"/></svg>;

