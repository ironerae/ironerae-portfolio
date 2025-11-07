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
      <h3 className="font-medium">WHAT I'VE BUILT SO FAR</h3>
      <h3 className="text-4xl font-bold text-center">
        Solo and Collaborative Projects
      </h3>
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
              i
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
            )
          )}
      </div>
      <h1 className="text-2xl text-center mt-16 font-bold">More Projects</h1>
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
              i
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
            )
          )}
      </div>
    </div>
  );
}
