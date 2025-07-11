"use client"

import { useState } from 'react';
import { DisplayOption } from "./types";
import Navigation from "./Navigation";
import Intro from "./Intro";
import Projects from "./Projects";
import Designs from "./Designs";
import CarouselContainer from "./CarouselContainer";
import DisplayToggle from "./DisplayToggle";
import ProjectsModal from './ProjectsModal';

export default function Home() {
  const [activeDisplay, setActiveDisplay] = useState<DisplayOption>('projects');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

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
          {activeDisplay === 'projects' && (
            <Projects onProjectClick={(imgs: string[]) => {
              setSelectedImages(imgs);
              setModalOpen(true);
            }} />
          )}
          {activeDisplay === 'designs' && <Designs />}
          <ProjectsModal modalOpen={modalOpen} setModalOpen={setModalOpen} projectImgs={selectedImages} />
        </section>
      </main>
      <footer>
      </footer>
    </div>
  );
}
