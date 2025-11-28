import React from 'react';

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-950">
      <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-purple-700/20 blur-[120px] animate-pulse" />
      <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-blue-700/20 blur-[120px] animate-pulse delay-1000" />
      <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[60%] rounded-full bg-indigo-700/10 blur-[120px] animate-pulse delay-2000" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
    </div>
  );
}
