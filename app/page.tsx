import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="max-w-6xl m-auto p-4">
        <Hero />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}
