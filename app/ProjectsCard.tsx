import Image from "next/image";
import { IconType } from "react-icons";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "motion/react";

interface ProjectsCardProps {
  siteLink?: string;
  projectName: string;
  projectDate: string;
  projectDescription: string;
  projectStacks: IconType[];
  isPublic: boolean;
  sourceCodeLink?: string;
  imageSrc: string;
  isHighlight?: boolean;
  reverse?: boolean;
}

const animation = (y: number = 20, delay: number = 0) => ({
  initial: {
    y,
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

const fade = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
};

export default function ProjectsCard({
  siteLink,
  projectName,
  projectDate,
  projectDescription,
  projectStacks,
  isPublic,
  sourceCodeLink,
  imageSrc,
  isHighlight = false,
  reverse = false,
}: ProjectsCardProps) {
  if (!isHighlight) {
    return (
      <motion.div
        className="card bg-base-200 max-w-96 w-full shadow- hover:scale-103 transition-transform duration-300"
        variants={animation(50, 0.2)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {siteLink && (
          <div className="tooltip absolute right-2 top-2" data-tip="Visit Site">
            <a className="btn btn-ghost btn-sm" href={siteLink} target="_blank">
              <FaExternalLinkAlt />
            </a>
          </div>
        )}
        <figure className="px-10 pt-10">
          <Image
            src={imageSrc}
            alt={projectName}
            width={300}
            height={200}
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h4 className="text-sm text-gray-500">{projectDate}</h4>
          <h2 className="card-title">{projectName}</h2>
          <p>{projectDescription}</p>
          <div className="mt-4">
            {projectStacks.map((StackIcon, i) => (
              <button key={i}>
                <StackIcon key={i} size={30} className="mx-1" />
              </button>
            ))}
          </div>
          <div className="card-actions items-center w-full justify-around mt-4">
            {isPublic ? (
              <div
                className="tooltip"
                data-tip="Repo is publicly accessible to anyone"
              >
                <div className="badge badge-error">Public</div>
              </div>
            ) : (
              <div className="tooltip" data-tip="Repo is private">
                <div className="badge badge-success">Private</div>
              </div>
            )}

            {sourceCodeLink && (
              <a
                href={sourceCodeLink}
                target="_blank"
                className="btn btn-neutral"
              >
                <FaGithub /> Documentation →
              </a>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div
      className={`flex flex-wrap items-center mt-16 gap-8 justify-between max-w-5xl ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <div className="flex-1">
        {isPublic ? (
          <div
            className="tooltip"
            data-tip="Repo is publicly accessible to anyone"
          >
            <motion.div
              className="badge badge-error"
              variants={fade}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              Public
            </motion.div>
          </div>
        ) : (
          <div className="tooltip" data-tip="Repo is private">
            <motion.div
              className="badge badge-success"
              variants={fade}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              Private
            </motion.div>
          </div>
        )}
        <div className="flex items-center gap-4 mt-2">
          <motion.h2
            className="text-4xl font-bold"
            variants={animation(20, 0.2)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {projectName}
          </motion.h2>
          {siteLink && (
            <div className="tooltip" data-tip="Visit Site">
              <a
                className="btn btn-ghost btn-sm"
                href={siteLink}
                target="_blank"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          )}
        </div>
        <motion.p
          className="text-sm text-gray-500"
          variants={animation(20, 0.3)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {projectDate}
        </motion.p>
        <motion.p
          className="mt-4"
          variants={animation(20, 0.4)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {projectDescription}
        </motion.p>
        <div className="mt-8">
          {sourceCodeLink && (
            <motion.a
              href={sourceCodeLink}
              target="_blank"
              className="btn btn-black"
              variants={animation(20, 0.3)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <FaGithub /> Documentation →
            </motion.a>
          )}
          <div className="mt-4">
            {projectStacks.map((StackIcon, i) => (
              <motion.button
                key={i}
                variants={animation(20, 0.4 + i * 0.1)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <StackIcon key={i} size={30} className="mx-1" />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: reverse ? -30 : 30 }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.5,
          delay: 0.2,
        }}
        viewport={{
          once: true,
        }}
      >
        <Image
          src={imageSrc}
          alt={projectName}
          width={400}
          height={300}
          className="rounded-2xl"
        />
      </motion.div>
    </div>
  );
}
