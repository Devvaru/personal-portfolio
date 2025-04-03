import Navigation from "./navigation";
import Projects from "./projects";
import CarouselContainer from "./CarouselContainer";

export default function Home() {
  return (
    <div>
      <Navigation />
      <main className="">
        <section className="flex flex-col justify-center gap-8 bg-gradient-to-bl from-cyan-900 to-slate-800 text-blue-50 py-20 px-20">
          <section id="intro" className="flex items-center ">
            <p className="w-1/2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </section>
          <section id="stacks" className="flex justify-center">
            <CarouselContainer />
          </section>
        </section>
        <section id="projects" className="py-8 px-12 bg-gray-200"><Projects /></section>
        <section id="design"></section>
      </main>
      <footer>
      </footer>
    </div>
  );
}
