import Navigation from "./navigation";
import Intro from "./intro";
import Projects from "./projects";
import CarouselContainer from "./CarouselContainer";

export default function Home() {
  return (
    <div>
      <Navigation />
      <main className="">
        <section id="banner" className="flex flex-col justify-center gap-10 xl:gap-20 bg-gradient-to-bl from-cyan-900 to-slate-800 text-blue-50 py-15 xl:py-25 px-5 md:px-12 xl:px-30">
          <section id="intro">
            <Intro />
          </section>
          <section id="stacks" className="flex justify-center mix-blend-normal">
            <CarouselContainer />
          </section>
        </section>
        <section id="projects" className="py-15 xl:py-25 px-5 md:px-12 xl:px-30"><Projects /></section>
        <section id="design"></section>
      </main>
      <footer>
      </footer>
    </div>
  );
}
