"use client"

import Navigation from "./navigation";
import Intro from "./intro";
import Projects from "./projects";
import Designs from "./designs";
import CarouselContainer from "./CarouselContainer";
import { useState } from 'react';

export default function Home() {
  const [activeDisplay, setActiveDisplay] = useState('projects');

  return (
    <div>
      <Navigation />
      <main className="">
        <section id="banner" className="bg-[url(/images/portfolio-bg-full.png)] bg-cover flex flex-col justify-center gap-10 xl:gap-20 text-blue-50 py-15 xl:py-25 px-5 md:px-12 xl:px-30">
          <section id="intro">
            <Intro />
          </section>
          <section id="stacks" className="flex justify-center mix-blend-normal">
            <CarouselContainer />
          </section>
        </section>

        <section id="projects" className="flex flex-col py-15 xl:py-25 px-5 md:px-12 xl:px-30 gap-15 w-full items-center">
          <div className="flex justify-center">

            <button onClick={() => setActiveDisplay('projects')} className={`hover:cursor-pointer transition-colors duration-300 font-bold text-lg py-2 px-6 rounded-l-full ${activeDisplay === 'projects' ? 'bg-cyan-950 text-white' : 'bg-white text-cyan-950'
              }`}><h2>Projects</h2></button>

            <button onClick={() => setActiveDisplay('designs')} className={`hover:cursor-pointer transition-colors duration-300 font-bold text-lg py-2 px-6 rounded-r-full ${activeDisplay === 'designs' ? 'bg-cyan-950 text-white' : 'bg-white text-cyan-950'
              }`}><h2>Designs</h2></button>

          </div>

          {activeDisplay === 'projects' && <Projects />}
          {activeDisplay === 'designs' && <Designs />}
        </section>
      </main>
      <footer>
      </footer>
    </div>
  );
}
