"use client"

import Navigation from "./navigation";
import Intro from "./intro";
import Projects from "./projects";
import Designs from "./designs";
import CarouselContainer from "./CarouselContainer";
import { useState } from 'react';
import DisplayToggle from "./DisplayToggle";
import { DisplayOption } from "./types";

export default function Home() {
  const [activeDisplay, setActiveDisplay] = useState<DisplayOption>('projects');

  return (
    <div>
      <Navigation activeDisplay={activeDisplay} setActiveDisplay={setActiveDisplay} />
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
          <DisplayToggle activeDisplay={activeDisplay} setActiveDisplay={setActiveDisplay} />
          {activeDisplay === 'projects' && <Projects />}
          {activeDisplay === 'designs' && <Designs />}
        </section>
      </main>
      <footer>
      </footer>
    </div>
  );
}
