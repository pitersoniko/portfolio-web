import React from 'react';

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-16">
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-white flex items-center gap-4">
          <span className="text-cyan-400">01.</span> About Me
        </h2>
        <div className="flex-1 h-px bg-zinc-800 ml-8 hidden sm:block"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-6 text-lg text-zinc-400 leading-relaxed font-sans">
          <p>
          I am a Software Engineer operating at the intersection of robust mobile engineering and intelligent data systems. Currently an External Fellow at INESC TEC, I specialize in bridging the gap between complex research and production-grade software. My recent work ranges from driving the architectural refactoring and scaling of Android applications to engineering Python-based Computer Vision tools that leverage Deep Learning (YOLOv8, RT-DETR) for automated, GDPR-compliant data annotation. Driven by technical challenges that demand full-stack versatility—from intuitive UIs to AI integration—I am actively seeking opportunities to build scalable, high-impact software solutions.
          </p>
          <p>
            Currently, my technical focus is on engineering intuitive software solutions that digitize and streamline everyday tasks. I am driven by the opportunity to build applications that deliver tangible, real-world value by eliminating friction in mundane processes. For instance, I am actively developing a modern mobile ticketing and payment ecosystem for public transportation. Designed to modernize urban mobility, this application provides a seamless end-to-end user journey—allowing commuters to easily top-up a digital wallet, purchase fares, and generate secure validation codes. Ultimately, my goal is to leverage my full-stack engineering skills to replace outdated physical processes with highly practical, user-centric digital experiences.
           </p>
        </div>

        {/* Minimal Terminal Graphic */}
        <div className="bg-[#1e1e1e] border border-zinc-800 rounded-lg overflow-hidden shadow-2xl shadow-black/50 aspect-video md:aspect-square lg:aspect-video flex flex-col">
          <div className="bg-zinc-900 border-b border-zinc-800 px-4 py-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <div className="mx-auto text-xs text-zinc-500 font-mono">bash - pedro_rodrigues@backend-server:~</div>
          </div>
          <div className="p-6 font-mono text-sm sm:text-base text-zinc-300 flex-1 bg-black/50 overflow-auto">
            <div className="flex gap-4">
              <span className="text-cyan-500">➜</span>
              <span className="text-purple-400">~</span>
              <span className="text-white">whoami</span>
            </div>
            <div className="mt-2 text-zinc-400">pedro_rodrigues</div>
            
            <div className="flex gap-4 mt-4">
              <span className="text-cyan-500">➜</span>
              <span className="text-purple-400">~</span>
              <span className="text-white">cat status.txt</span>
            </div>
            <div className="mt-2 text-green-400">"Turning caffeine into scalable software"</div>

            <div className="flex gap-4 mt-4">
              <span className="text-cyan-500">➜</span>
              <span className="text-purple-400">~</span>
              <span className="text-white flex items-center gap-2">
                ./run_brain_diagnostic.sh
                <span className="w-2 h-4 bg-cyan-400 animate-pulse inline-block align-middle"></span>
              </span>
            </div>
            <div className="mt-2 text-zinc-500 text-xs sm:text-sm">
              [OK] Logic core online. <br />
              [OK] UI/UX subroutines active. <br />
              [WARN] Sleep deprivation detected. <br />
              [INFO] Applying patch: double_espresso.exe...<br /> 
              Success.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
