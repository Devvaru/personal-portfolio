import Navigation from "./navigation";
import Projects from "./projects";

export default function Home() {
  return (
    <div>
      <Navigation />
      <main>
        <section id="intro">
          <p>Hello! I am a Full-Stack Web Developer with a particular interest in Front End Development and creating enriching user experiences. I also like to dabble in UI design, honing my skills to ensure my web apps leave lasting impressions. </p>
        </section>
        <section id="stacks"></section>
        <section id="projects"><Projects /></section>
        <section id="design"></section>
      </main>
      <footer>
      </footer>
    </div>
  );
}
