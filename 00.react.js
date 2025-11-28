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

// Projects Section
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

// Experience & Testimonials (Combined for cleaner layout)
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
              { year: "2025 - 2029", title: "B.Tech in Computer Science & Engineering", company: "Netaji Subhash Eng. College", desc: "Specialized in Web Development,UI-UX Designer,Web3 and DSA." }
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

// AI Chatbot Section
const AIChat = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "Hi! I'm Sucheta's AI assistant. Ask me anything about her work, skills, or experience!" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      let responseText = "I'm not sure about that, but Sucheta is always open to chatting! You can contact her directly.";
      const lowerInput = input.toLowerCase();
      
      if (lowerInput.includes('skill') || lowerInput.includes('stack') || lowerInput.includes('tech')) {
        responseText = "Sucheta is proficient in React, Tailwind CSS, Node.js, and Python. She loves building interactive UIs and scalable backends.";
      } else if (lowerInput.includes('project') || lowerInput.includes('work')) {
        responseText = "She has worked on several exciting projects, including a Hotel Booking Platform and a College Predictor AI. Check out the Projects section above!";
      } else if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('hire')) {
        responseText = "You can reach her at suchetamondal@gmail.com or use the contact form below. She's currently available for opportunities!";
      } else if (lowerInput.includes('hi') || lowerInput.includes('hello')) {
        responseText = "Hello there! How can I help you today?";
      }

      setMessages(prev => [...prev, { role: 'assistant', text: responseText }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <section id="aichat" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[600px]">
          
          {/* Header */}
          <div className="p-6 bg-white/5 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center">
                  <BotIcon className="text-white" size={24} />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900 animate-pulse"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">AI Assistant</h3>
                <p className="text-slate-400 text-sm">Powered by Custom Logic</p>
              </div>
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-slate-950/50 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`
                  max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed
                  ${msg.role === 'user' 
                    ? 'bg-purple-600 text-white rounded-br-none' 
                    : 'bg-white/10 text-slate-200 rounded-bl-none border border-white/5'}
                `}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/10 p-4 rounded-2xl rounded-bl-none flex gap-2 items-center">
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-100"></span>
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-200"></span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white/5 border-t border-white/5">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about my skills, projects, or contact info..."
                className="flex-1 bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
              />
              <button 
                onClick={handleSend}
                className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!input.trim()}
              >
                <Send size={20} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// Contact Section
const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-white">Get In <span className="text-purple-400">Touch</span></h2>
          <p className="text-slate-400 text-lg">
            Have a project in mind or just want to say hi? Feel free to reach out. I typically respond within 24 hours.
          </p>
          
          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-white font-medium">Email Me</h4>
                <a href="mailto:suchetamonbol@gmail.com" className="text-slate-400 hover:text-white transition-colors">suchetamonbol@gmail.com</a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                <Briefcase size={24} />
              </div>
              <div>
                <h4 className="text-white font-medium">Status</h4>
                <span className="text-green-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  Open to opportunities
                </span>
              </div>
            </div>
          </div>
        </div>

        <form className="space-y-4 bg-slate-900/50 p-8 rounded-3xl border border-white/10 shadow-xl backdrop-blur-sm" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Name</label>
              <input type="text" className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Email</label>
              <input type="email" className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all" placeholder="john@example.com" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Subject</label>
            <input type="text" className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all" placeholder="Project Inquiry" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Message</label>
            <textarea rows={4} className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none" placeholder="Tell me about your project..."></textarea>
          </div>

          <button className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
            Send Message <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
};

// Footer
const Footer = () => (
  <footer className="py-8 border-t border-white/10 text-center relative bg-slate-950">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-slate-500 text-sm">
        © 2025 Sucheta Mondal portfolio. All rights reserved.
      </p>
      <div className="flex gap-6 text-slate-400">
        <a href="#" className="hover:text-white transition-colors">Privacy</a>
        <a href="#" className="hover:text-white transition-colors">Terms</a>
        <a href="#" className="hover:text-white transition-colors">Sitemap</a>
      </div>
    </div>
  </footer>
);

/* --- Main App Component --- */

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'skills', 'experience', 'aichat', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-purple-500/30">
      <Background />
      <Navbar 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      
      <main className="space-y-12">
        <Hero scrollToSection={scrollToSection} />
        <Projects />
        <Skills />
        <Experience />
        <AIChat />
        <Contact />
      </main>

      <Footer />

      {/* Floating Action Button for Quick Contact */}
      <a 
        href="mailto:suchetamonbol@gmail.com"
        className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-purple-500/40 hover:-translate-y-1 transition-all md:hidden"
      >
        <Mail size={24} />
      </a>
      
      {/* Global Styles for Custom Animations */}
      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spin-reverse-slow {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-spin-reverse-slow { animation: spin-reverse-slow 25s linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-700 { animation-delay: 700ms; }
        .delay-1000 { animation-delay: 1000ms; }
        .delay-2000 { animation-delay: 2000ms; }
      `}</style>
    </div>
  );
};

export default App;
