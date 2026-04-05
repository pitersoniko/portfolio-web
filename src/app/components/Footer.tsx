import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="border-t border-zinc-800 bg-zinc-950 pt-24 pb-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-mono font-bold text-white mb-6">
          Get In Touch
        </h2>
        <p className="text-zinc-400 text-center max-w-xl mb-12 text-lg font-sans">
          Currently open for new opportunities. Whether you have a question, a project to discuss, 
          or just want to say hi, I'll try my best to get back to you!
        </p>

        <a 
          href="mailto:pedroasrodrigues1984@gmail.com" 
          className="bg-cyan-500 text-black px-8 py-4 rounded-md font-mono font-medium hover:bg-cyan-400 transition-colors mb-16 inline-flex items-center gap-2"
        >
          <Mail className="w-5 h-5" /> Say Hello
        </a>

        <div className="flex flex-col md:flex-row w-full justify-between items-center gap-6 pt-12 border-t border-zinc-900">
          <div className="flex gap-6">
            <a href="https://github.com/pitersoniko" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-cyan-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/pedroasrodrigues" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-cyan-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:pedroasrodrigues1984@gmail.com" className="text-zinc-400 hover:text-cyan-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <a href="/resume.pdf" className="flex items-center gap-2 text-zinc-400 hover:text-cyan-400 transition-colors font-mono text-sm">
            <FileText className="w-4 h-4" /> Download Resume (PDF)
          </a>

          <div className="text-zinc-600 font-mono text-xs">
            © {new Date().getFullYear()} Pedro Rodrigues. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
