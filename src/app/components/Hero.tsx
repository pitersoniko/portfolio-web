import React from 'react';
import { ChevronRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 max-w-6xl mx-auto relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-cyan-900)_0%,transparent_50%)] opacity-20 pointer-events-none" />
      <div className="max-w-4xl text-left md:text-center space-y-8 z-10 relative">
        <p className="font-mono text-cyan-400 mb-4 tracking-wider">Hello, world! I am</p>
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
          Pedro Rodrigues <span className="text-zinc-500">|</span> <br className="hidden md:block" />
          <span className="text-zinc-300">FullStack Software Engineer</span>
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto font-sans leading-relaxed">
          Computer Engineering student (UTAD). Experience in Android development, data analysis and machine learning through my final project and an internship at INESC TEC (WalkingPAD).
        </p>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#projects" className="group flex items-center gap-2 bg-cyan-500 text-black px-8 py-4 rounded-md font-mono font-medium hover:bg-cyan-400 transition-all w-full sm:w-auto justify-center">
            Explore Projects
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#about" className="group flex items-center gap-2 border border-zinc-700 text-zinc-300 px-8 py-4 rounded-md font-mono hover:bg-zinc-800 hover:text-white hover:border-zinc-500 transition-all w-full sm:w-auto justify-center">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};
