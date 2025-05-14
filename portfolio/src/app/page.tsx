import Navigation from "./navigation";
import Intro from "./intro";
import Projects from "./projects";
import CarouselContainer from "./CarouselContainer";

export default function Home() {
  return (
    <div>
      <Navigation />
      <main className="">
        <section id="banner" className="bg-[url(/images/portfolio-bg-full.png)] bg-cover bg-bottom flex flex-col justify-center gap-10 xl:gap-20 text-blue-50 py-15 xl:py-25 px-5 md:px-12 xl:px-30 h-[1000px]">
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
