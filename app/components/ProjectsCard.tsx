import Image from "next/image";
import { IconType } from "react-icons";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

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
      <div className="card bg-base-200 w-96 shadow-sm">
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
                className="btn btn-black"
              >
                <FaGithub /> Documentation →
              </a>
            )}
          </div>
        </div>
      </div>
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
            <div className="badge badge-error">Public</div>
          </div>
        ) : (
          <div className="tooltip" data-tip="Repo is private">
            <div className="badge badge-success">Private</div>
          </div>
        )}
        <div className="flex items-center gap-4 mt-2">
          <h2 className="text-4xl font-bold">{projectName}</h2>
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
        <p className="text-sm text-gray-500">{projectDate}</p>
        <p className="mt-4">{projectDescription}</p>
        <div className="mt-8">
          {sourceCodeLink && (
            <a href={sourceCodeLink} target="_blank" className="btn btn-black">
              <FaGithub /> Documentation →
            </a>
          )}
          <div className="mt-4">
            {projectStacks.map((StackIcon, i) => (
              <button key={i}>
                <StackIcon key={i} size={30} className="mx-1" />
              </button>
            ))}
          </div>
        </div>
      </div>
      <Image
        src={imageSrc}
        alt={projectName}
        width={400}
        height={300}
        className="rounded-2xl"
      />
    </div>
  );
}
