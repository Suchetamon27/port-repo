import React, { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';

// Import Components
import Background from './components/Background';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import Sections
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import AIChat from './sections/AIChat';
import Contact from './sections/Contact';

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
    </div>
  );
};

export default App;
