import Navigation from "./navigation";
import Intro from "./intro";
import Projects from "./projects";
import CarouselContainer from "./CarouselContainer";

export default function Home() {
  return (
    <div>
      <Navigation />
      <main className="">
        <section id="banner" className="bg-[url(/images/portfolio-bg-full.png)] bg-cover flex flex-col justify-center gap-10 xl:gap-20 bg-gradient-to-bl text-blue-50 py-15 xl:py-25 px-5 md:px-12 xl:px-30 z-0 relative">
          <section id="intro" className="mix-blend-normal">
            <Intro />
          </section>
          <section id="stacks" className="flex justify-center mix-blend-normal">
            <CarouselContainer />
          </section>
        </section>
        <section id="projects" className="bg-gray-200 py-15 xl:py-25 px-5 md:px-12 xl:px-30"><Projects /></section>
        <section id="design"></section>
      </main>
      <footer>
      </footer>
    </div>
  );
}
