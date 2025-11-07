import Image from "next/image";
import QuickLinks from "./QuickLinks";

export default function Hero() {
  return (
    <div className="h-auto md:min-h-screen mt-16 md:mt-0">
      <div className="flex flex-wrap justify-between items-center h-[80%] gap-4">
        <div className="h-full flex flex-col justify-center flex-1">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold">
              Hi, I'm <span className="bg-primary text-white">Irone Rae</span>
            </h1>
            <p className="text-gray-500 text-lg">
              I love turning ideas into real-world projects. Whether it’s
              building applications or dealing with electronics, I enjoy
              creating things that connect people and technology.
            </p>
          </div>
          <div className="flex mt-8">
            <QuickLinks />
          </div>
          <div>
            <button className="btn btn-neutral btn-lg mt-4 rounded-xl border-2 border-secondary">
              View My Work
            </button>
            <button className="btn btn-lg mt-4 ml-4 rounded-xl">
              Let's Connect
            </button>
          </div>
        </div>
        <div className="h-full">
          <Image
            className="md:relative md:-top-4 md:-right-20 rounded-2xl md:rounded-none"
            src="/images/hero.png"
            alt="hero-image"
            width={700}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
