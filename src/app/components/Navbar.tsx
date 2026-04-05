import React, { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 z-50">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-cyan-400 font-mono text-xl font-bold tracking-tight">
          &lt; Pedro Rodrigues - Portfolio /&gt;
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-mono text-zinc-400">
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
        </div>

        {/* Mobile Toggle */}
        <div 
          className="md:hidden text-zinc-400 hover:text-cyan-400 transition-colors cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-zinc-800 px-6 py-4 flex flex-col gap-4 font-mono text-zinc-400">
          <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-cyan-400 transition-colors block">About</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-cyan-400 transition-colors block">Projects</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="hover:text-cyan-400 transition-colors block">Skills</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-cyan-400 transition-colors block">Contact</a>
        </div>
      )}
    </nav>
  );
};
