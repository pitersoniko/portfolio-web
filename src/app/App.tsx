import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
