import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import NavBar from "./NavBar";
import Projects from "./Projects";
import Skills from "./Skills";
import VideoArchive from "./VideoArchive";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="max-w-6xl m-auto p-4">
        <Hero />
        <Skills />
        <Projects />
        <VideoArchive />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
