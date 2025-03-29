import Navigation from "./navigation";
import Stacks from "./stacks";
import Projects from "./projects";

export default function Home() {
  return (
    <div>
      <Navigation />
      <main className="">
        <section className="flex flex-col justify-center gap-8 bg-gradient-to-bl from-cyan-900 to-slate-800 text-blue-50 p-8 h-96">
          <section id="intro" className="flex items-center ">
            <p className="w-1/2">Hello! I am a Full-Stack Web Developer with a particular interest in Front End Development and creating enriching user experiences. I also like to dabble in UI design, honing my skills to ensure my web apps leave lasting impressions. </p>
          </section>
          <section id="stacks" className="flex justify-center p-8">
            <Stacks />
          </section>
        </section>
        <section id="projects" className="p-8"><Projects /></section>
        <section id="design"></section>
      </main>
      <footer>
      </footer>
    </div>
  );
}
