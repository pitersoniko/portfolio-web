import React from 'react';

const skillCategories = [
  {
    category: 'Languages',
    skills: ['C#', 'C++', 'Python', 'Javascript', 'React', 'SQL', 'Bash'],
  },
  {
    category: 'Backend & Frameworks',
    skills: ['.NET Core', 'ASP.NET', 'Entity Framework', 'Node.js'],
  },
  {
    category: 'Databases & Storage',
    skills: ['PostgreSQL', 'MongoDB', 'SQL Server', 'RabbitMQ'],
  },
  {
    category: 'Infrastructure & Tools',
    skills: ['Docker', 'CI/CD Pipelines', 'Linux', 'Git', 'Figma'],
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-16">
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-white flex items-center gap-4">
          <span className="text-cyan-400">03.</span> Technical Arsenal
        </h2>
        <div className="flex-1 h-px bg-zinc-800 ml-8 hidden sm:block"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="space-y-6">
            <h3 className="text-xl font-bold text-zinc-300 font-mono border-b border-zinc-800 pb-4">
              {category.category}
            </h3>
            <ul className="space-y-4">
              {category.skills.map((skill, sIdx) => (
                <li key={sIdx} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <span className="text-zinc-400 font-sans">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
