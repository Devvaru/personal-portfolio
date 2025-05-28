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
        <section id="banner" className="bg-[url(/images/portfolio-bg-full.png)] bg-cover flex flex-col justify-center gap-10 xl:gap-20 bg-gradient-to-bl from-cyan-900 to-slate-800 text-blue-50 py-15 xl:py-25 px-5 md:px-12 xl:px-30">
          <section id="intro">
            <Intro />
          </section>
          <section id="stacks" className="flex justify-center mix-blend-normal">
            <CarouselContainer />
          </section>
        </section>

        <section id="projects" className="py-15 xl:py-25 px-5 md:px-12 xl:px-30">
          <div className="flex justify-center items-center gap-5">
            <button onClick={() => setActiveDisplay('projects')}>Projects</button>
            <button onClick={() => setActiveDisplay('designs')}>Designs</button>
          </div>
          
          {activeDisplay == 'projects' && <Projects />}
          {activeDisplay == 'designs' && <Designs />}
        </section>
      </main>
      <footer>
      </footer>
    </div>
  );
}
