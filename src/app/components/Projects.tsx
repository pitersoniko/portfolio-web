import React from 'react';
import { Database, Cpu, Server, Code, FileText, MoveRight } from 'lucide-react';

const projects = [
  {
    title: 'TUVR - MUI App',
    description: 'A modern mobile application developed to revolutionize the way users interact with public transportation. This app functions as a digital wallet and native ticket validation system, replacing traditional physical transit passes.',
    tech: ['JavaScript', 'React-Native', 'React Navigation', 'Expo', 'NativeWind', 'Lucide React Native', 'React Native Animated API'],
    icon: Code,
    githubUrl: 'https://github.com/pitersoniko/TUVR_App'
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-16">
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-white flex items-center gap-4">
          <span className="text-cyan-400">02.</span> Projects
        </h2>
        <div className="flex-1 h-px bg-zinc-800 ml-8 hidden sm:block"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => {
          const Icon = project.icon;
          return (
            <div 
              key={idx} 
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 flex flex-col hover:-translate-y-2 hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-zinc-950/50 rounded-lg text-cyan-400 group-hover:bg-cyan-400/10 transition-colors">
                  <Icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                {project.tech.map((tag, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="font-mono text-[10px] md:text-xs text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-md border border-cyan-400/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {/* Usamos {project.githubUrl && ...} para que o botão "Code" 
                  só apareça se o projeto tiver um link do GitHub preenchido 
                */}
                {project.githubUrl ? (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-mono text-zinc-300 hover:text-cyan-400 transition-colors"
                  >
                    <Code className="w-4 h-4" /> Code
                  </a>
                ) : (
                  <span className="flex items-center gap-2 text-sm font-mono text-zinc-600 cursor-not-allowed">
                    <Code className="w-4 h-4" /> Privado
                  </span>
                )}
                <button className="flex items-center gap-2 text-sm font-mono text-zinc-300 hover:text-cyan-400 transition-colors">
                  <FileText className="w-4 h-4" /> Docs
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
