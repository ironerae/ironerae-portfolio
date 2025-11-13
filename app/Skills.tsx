"use client";
import { motion } from "motion/react";
import { Icon } from "@iconify/react";

const icons = [
  {
    icon: "logos:python",
    width: 60,
    height: 60,
  },
  {
    icon: "logos:c-plusplus",
    width: 60,
    height: 60,
  },
  {
    icon: "logos:react",
    width: 60,
    height: 60,
  },
  {
    icon: "logos:nodejs",
    width: 120,
    height: 80,
  },
  {
    icon: "logos:tailwindcss",
    width: 150,
    height: 70,
  },
  {
    icon: "logos:nextjs",
    width: 100,
    height: 80,
  },
  {
    icon: "logos:arduino",
    width: 70,
    height: 70,
  },
  {
    icon: "logos:firebase",
    width: 120,
    height: 80,
  },
  {
    icon: "logos:vercel",
    width: 120,
    height: 80,
  },
  {
    icon: "logos:heroku",
    width: 120,
    height: 80,
  },
];

export default function Skills() {
  return (
    <div className="flex flex-col items-center mt-16" id="skills">
      <motion.h1
        className="text-4xl font-bold text-center mb-16"
        initial={{
          y: 20,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        viewport={{
          once: true,
        }}
      >
        Some technologies I've been working with
      </motion.h1>
      <div className="flex flex-wrap items-center justify-center gap-6 max-w-2xl">
        {icons.map(({ icon, width, height }, i) => (
          <motion.span
            key={i}
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              rotate: 360,
            }}
            transition={{
              delay: i * 0.1,
              duration: 0.5,
            }}
            viewport={{
              once: true,
            }}
          >
            <Icon icon={icon} width={width} height={height} />
          </motion.span>
        ))}
      </div>
    </div>
  );
}
