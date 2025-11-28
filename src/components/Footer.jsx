import React from 'react';

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

export default Footer;
