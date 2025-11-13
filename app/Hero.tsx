"use client";

import Image from "next/image";
import QuickLinks from "./QuickLinks";
import HeroButtons from "./HeroButtons";
import { motion } from "motion/react";

export const animation = (delay: number = 0) => ({
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay,
    },
  },
});

export default function Hero() {
  return (
    <div className="h-auto md:min-h-screen mt-16 md:mt-0">
      <div className="flex flex-wrap justify-between items-center h-[80%] gap-4">
        <div className="h-full flex flex-col justify-center flex-1">
          <div className="space-y-4">
            <motion.h1
              className="text-5xl font-bold"
              variants={animation()}
              initial="initial"
              animate="animate"
            >
              Hi, I'm <span className="bg-primary text-white">Irone Rae</span>
            </motion.h1>
            <motion.p
              className="text-gray-500 text-lg"
              variants={animation(0.2)}
              initial="initial"
              animate="animate"
            >
              I love turning ideas into real-world projects. Whether it’s
              building applications or dealing with electronics, I enjoy
              creating things that connect people and technology.
            </motion.p>
          </div>
          <div className="flex mt-8">
            <motion.div
              variants={animation(0.4)}
              initial="initial"
              animate="animate"
            >
              <QuickLinks />
            </motion.div>
          </div>
          <motion.div
            variants={animation(0.6)}
            initial="initial"
            animate="animate"
          >
            <HeroButtons />
          </motion.div>
        </div>
        <motion.div
          className="h-full"
          initial={{
            x: 100,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <Image
            className="md:relative md:-top-4 md:-right-20 rounded-2xl md:rounded-none"
            src="/images/hero.png"
            alt="hero-image"
            width={700}
            height={400}
          />
        </motion.div>
      </div>
    </div>
  );
}
