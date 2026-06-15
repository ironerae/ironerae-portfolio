"use client";

import { IconType } from "react-icons";
import ProjectsCard from "./ProjectsCard";
import {
  RiFirebaseFill,
  RiNextjsFill,
  RiNodejsFill,
  RiReactjsFill,
  RiVercelFill,
} from "react-icons/ri";
import { SiHeroku, SiMongodb } from "react-icons/si";
import { motion } from "motion/react";
import { animation } from "./Hero";

const projects = [
  {
    siteLink: "https://aces-fullbrightcollege.vercel.app/",
    projectName: "ACES - Fullbright College Website",
    projectDate: "Jan 2025",
    projectDescription:
      "A fully responsive website built for ACES - Fullbright College using Next.js and Tailwind CSS. The website features complete system including MyACES portal, admin dashboard and more",
    projectStacks: [
      RiNextjsFill,
      RiFirebaseFill,
      RiVercelFill,
    ] as unknown[] as IconType[],
    isPublic: false,
    sourceCodeLink: "https://github.com/ironerae/ACES-Fullbright-College",
    imageSrc: "/images/projects/aces.png",
    isHighlight: false,
    reverse: false,
  },
  {
    siteLink: "https://ect-election.vercel.app//",
    projectName: "ECT Department Voting System 2025",
    projectDate: "August 2025",
    projectDescription:
      "A secure and efficient online voting system for the ECT Department's 2025 elections, developed using Next.js for the frontend and Firebase for the backend. This application ensures a seamless voting experience while maintaining data integrity and confidentiality.",
    projectStacks: [
      RiNextjsFill,
      RiFirebaseFill,
      RiVercelFill,
    ] as unknown[] as IconType[],
    isPublic: false,
    sourceCodeLink: "https://github.com/ironerae/ECT-Voting-System",
    imageSrc: "/images/projects/ect.png",
    isHighlight: false,
    reverse: false,
  },
  {
    siteLink: "",
    projectName: "VorCore 10",
    projectDate: "June 2026",
    projectDescription:
      "A custom-designed, open-source CoreXY kinematic mounting system. It bridges the gap between the heavy-duty front-motor layout of the SolidCore and the clean, stacked belt routing made popular by Voron designs.",
    projectStacks: [] as unknown[] as IconType[],
    isPublic: false,
    sourceCodeLink: "https://github.com/ironerae/VorCore-10",
    imageSrc: "/images/projects/vorcore-10.png",
    isHighlight: true,
    reverse: false,
  },
  {
    siteLink: "",
    projectName: "ironerae cant-ilever 3D printer",
    projectDate: "June 2026",
    projectDescription:
      "Developed as a project for the Microprocessor course, the ironerae cant-ilever is a custom-DIY 3D printer that rethinks traditional kinematics. The system utilizes a unique moving-gantry design where the entire cantilever assembly translates along the Y-axis over a stationary build area. At the heart of the system is the cant-ilever board powered by the Raspberry Pi Pico (RP2040) microcontroller and running Klipper firmware.",
    projectStacks: [] as unknown[] as IconType[],
    isPublic: false,
    sourceCodeLink: "https://github.com/ironerae/cant-ilever-3D-Printer",
    imageSrc: "/images/projects/ironerae-cant-ilever-3d-printer.png",
    isHighlight: true,
    reverse: true,
  },
  {
    siteLink: "",
    projectName: "cant-ilever Board V2",
    projectDate: "May 2026",
    projectDescription:
      "The v2 iteration of the previous custom 3D printer mainboard powered by the Raspberry Pi Pico (RP2040), designed for the ironerae cant-ilever 3D printer. This upgraded version introduces massive improvements, including full 12V copper pours for superior power delivery, opto-isolated heaters, TMC2209 UART support, and a dedicated onboard 5V regulator.",
    projectStacks: [] as unknown[] as IconType[],
    isPublic: true,
    sourceCodeLink: "https://github.com/ironerae/cant-ilever-Board-V2",
    imageSrc: "/images/projects/cant-ilever-board-v2.png",
    isHighlight: true,
    reverse: false,
  },
  {
    siteLink: "",
    projectName: "cant-ilever Board",
    projectDate: "March 2026",
    projectDescription:
      "A custom 3D printer mainboard powered by the Raspberry Pi Pico (RP2040), designed for ironerae cant-ilever 3D printer. ",
    projectStacks: [] as unknown[] as IconType[],
    isPublic: true,
    sourceCodeLink: "https://github.com/ironerae/cant-ilever-Board",
    imageSrc: "/images/projects/cant-ilever-board.png",
    isHighlight: true,
    reverse: true,
  },
  {
    siteLink: "",
    projectName: "ironerae-amp",
    projectDate: "June 2025",
    projectDescription:
      "A custom-built low-power audio amplifier developed as a final project for the subject, Fundamentals of Electronic Circuits. At the heart of the amplifier is the LM386 IC. The system includes three primary audio controls: volume, bass, and treble, giving the user full control over the listening experience.",
    projectStacks: [] as unknown[] as IconType[],
    isPublic: true,
    sourceCodeLink:
      "https://github.com/ironerae/ironerae-amp-A-DIY-Audio-Amplifier",
    imageSrc: "/images/projects/amplifier.png",
    isHighlight: true,
    reverse: false,
  },
  {
    siteLink: "https://coraltech.vercel.app/",
    projectName: "CoralTech",
    projectDate: "December 2024",
    projectDescription:
      "Client Project: A device that analyze the intensity of bleaching of corals. It uses machine learning and computer vision to analyze coral images and provide real-time, quantitative data on coral health",
    projectStacks: [
      RiReactjsFill,
      RiNodejsFill,
      SiMongodb,
      SiHeroku,
    ] as unknown[] as IconType[],
    isPublic: false,
    sourceCodeLink: "https://github.com/ironerae/CoralTech-Frontend",
    imageSrc: "/images/projects/coraltech.png",
    isHighlight: true,
    reverse: true,
  },
  {
    siteLink: "",
    projectName: "Xplore Palawan",
    projectDate: "December 2024",
    projectDescription:
      "This is a react-native app that I developed to meet my project requirements in software design subject. The app, called Xplore Palawan, serves as a travel guide app for tourists who want to explore Palawan. It features information on various tourist spots, local foods, and eco-tourism guidelines.",
    projectStacks: [RiReactjsFill, RiFirebaseFill] as unknown[] as IconType[],
    isPublic: true,
    sourceCodeLink: "https://github.com/ironerae/Xplore-Palawan",
    imageSrc: "/images/projects/xplore.png",
    isHighlight: true,
    reverse: false,
  },
  {
    siteLink: "",
    projectName:
      "Small City Miniature Renewable Energy System: Solar and Wind Integration",
    projectDate: "December 2024",
    projectDescription:
      "We designed and constructed a miniature renewable energy system that integrates both solar panels and a windmill. The system represents a small city where solar and wind energy are used as sources of power to charge a battery. This stored energy serves as a backup supply during blackouts or brownouts, ensuring uninterrupted electricity until power is restored.",
    projectStacks: [] as unknown[] as IconType[],
    isPublic: true,
    sourceCodeLink:
      "https://github.com/ironerae/Small-City-Miniature-Renewable-Energy-System",
    imageSrc: "/images/projects/miniature.png",
    isHighlight: true,
    reverse: true,
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col items-center mt-24" id="projects">
      <motion.h3
        className="font-medium"
        variants={animation()}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        WHAT I'VE BUILT SO FAR
      </motion.h3>
      <motion.h1
        className="text-4xl font-bold text-center"
        variants={animation(0.2)}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        Solo and Collaborative Projects
      </motion.h1>
      <div>
        {projects
          .filter((project) => project.isHighlight)
          .map(
            (
              {
                siteLink,
                projectName,
                projectDate,
                projectDescription,
                projectStacks,
                isPublic,
                sourceCodeLink,
                imageSrc,
                isHighlight,
                reverse,
              },
              i,
            ) => (
              <ProjectsCard
                key={i}
                siteLink={siteLink}
                projectName={projectName}
                projectDate={projectDate}
                projectDescription={projectDescription}
                projectStacks={projectStacks}
                isPublic={isPublic}
                sourceCodeLink={sourceCodeLink}
                imageSrc={imageSrc}
                isHighlight={isHighlight}
                reverse={reverse}
              />
            ),
          )}
      </div>
      <motion.h3
        className="text-2xl text-center mt-16 font-bold"
        variants={animation()}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        Other Projects
      </motion.h3>
      <div className="flex gap-8 justify-center flex-wrap mt-16">
        {projects
          .filter((project) => !project.isHighlight)
          .map(
            (
              {
                siteLink,
                projectName,
                projectDate,
                projectDescription,
                projectStacks,
                isPublic,
                sourceCodeLink,
                imageSrc,
                isHighlight,
                reverse,
              },
              i,
            ) => (
              <ProjectsCard
                key={i}
                siteLink={siteLink}
                projectName={projectName}
                projectDate={projectDate}
                projectDescription={projectDescription}
                projectStacks={projectStacks}
                isPublic={isPublic}
                sourceCodeLink={sourceCodeLink}
                imageSrc={imageSrc}
                isHighlight={isHighlight}
                reverse={reverse}
              />
            ),
          )}
      </div>
    </div>
  );
}
