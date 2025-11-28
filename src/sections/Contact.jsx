import React from 'react';
import { Mail, Briefcase, Send } from 'lucide-react';

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

export default Contact;
