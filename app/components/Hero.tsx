import Image from "next/image";

export default function Hero() {
  return (
    <div className="h-screen">
      <div className="flex flex-wrap justify-between items-center h-full">
        <div className="h-full flex flex-col justify-center flex-1">
          <div>
            <h1 className="text-5xl font-bold">Hi, I'm Irone Rae</h1>
            <p>
              I love turning ideas into real-world projects. Whether it’s
              building applications or dealing with electronics, I enjoy
              creating things that connect people and technology.
            </p>
          </div>
          <div>
            <button className="btn btn-primary btn-lg mt-4">
              View My Work
            </button>
            <button className="btn btn-ghost btn-lg mt-4 ml-4">
              Let's Connect
            </button>
          </div>
        </div>
        <div className="h-full">
          <Image
            className="relative -top-4 -right-24"
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
