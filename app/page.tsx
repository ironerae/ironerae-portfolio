import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="max-w-6xl m-auto p-4">
        <Hero />
      </div>
    </main>
  );
}
