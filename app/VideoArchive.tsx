"use client";

import { motion } from "motion/react";
import { FaExternalLinkAlt, FaPlay, FaYoutube } from "react-icons/fa";

type VideoItem = {
  title: string;
  description: string;
  category: string;
  runtime: string;
  year: string;
  youtubeUrl?: string;
  videoId?: string;
};

const videos: VideoItem[] = [
  {
    title: "Intro to Building Your Own DIY 3D Printer",
    description:
      "Seminar session organized by ACES - Fullbright College that introduce the fundamentals of designing and building a DIY 3D printer from the ground up.",
    category: "Presentation",
    runtime: "2:58:33",
    year: "2026",
    youtubeUrl: "https://youtu.be/ln6gCa6M3-c?si=1my7p0v36J5KVE-O",
    videoId: "ln6gCa6M3-c",
  },
  {
    title: "How to install OS in VM",
    description:
      "A step-by-step guide on installing an operating system inside a Virtual Machine.",
    category: "Walkthrough",
    runtime: "29:00",
    year: "2026",
    youtubeUrl: "https://youtu.be/r0CROgeYEII?si=7ABPrdsSDTaBxMVk",
    videoId: "r0CROgeYEII",
  },
  {
    title: "Building ironerae-amp: A DIY Audio Amplifier Project",
    description:
      "Building a custom-built low-power audio amplifier developed as a final project for the subject, Fundamentals of Electronic Circuits. ",
    category: "Project Development",
    runtime: "23:19",
    year: "2026",
    youtubeUrl: "https://youtu.be/sQ0NTAFm74Q?si=vgbxOfebQbMqTWq1",
    videoId: "sQ0NTAFm74Q",
  },
];

const animation = (delay: number = 0) => ({
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay,
    },
  },
});

function VideoPreview({ video }: { video: VideoItem }) {
  if (video.videoId) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${video.videoId}?rel=0`}
        title={video.title}
        className="h-full w-full rounded-2xl"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    );
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-base-300 bg-base-200 p-6 text-center">
      <div className="flex size-16 items-center justify-center rounded-full bg-base-100 text-base-content shadow-sm">
        <FaPlay className="ml-1 text-2xl" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-base-content">
          Ready for your video
        </h3>
        <p className="mt-2 max-w-sm text-sm text-base-content/70">
          Replace this sample entry with a YouTube URL or video ID to turn the
          card into a live embed.
        </p>
      </div>
    </div>
  );
}

export default function VideoArchive() {
  const featuredVideo = videos[0];

  return (
    <section className="mt-32 scroll-mt-24" id="video-archive">
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          variants={animation()}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="badge badge-outline badge-lg gap-2 px-4 py-3">
            <FaYoutube />
            Video archive
          </div>
          <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
            A collection of videos showcasing my projects
          </h2>
          <p className="mt-5 max-w-2xl text-base text-base-content/70 md:text-lg">
            From in-depth walkthroughs to highlights of my work, explore the
            visual journey of my development process and achievements. Click on
            any video to watch it on YouTube and see the story behind each
            project come to life.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="badge badge-neutral badge-outline">
              Walkthroughs
            </span>
            <span className="badge badge-neutral badge-outline">
              Project Development
            </span>
            <span className="badge badge-neutral badge-outline">
              Presentations
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              className="btn btn-primary"
              href={featuredVideo.youtubeUrl || "https://www.youtube.com"}
              target="_blank"
              rel="noreferrer"
            >
              Watch featured clip
              <FaExternalLinkAlt />
            </a>
            <a
              className="btn btn-ghost"
              href="https://www.youtube.com/@irone_rae"
              target="_blank"
              rel="noreferrer"
            >
              Visit my channel
            </a>
          </div>
        </motion.div>

        <motion.div
          variants={animation(0.15)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mockup-browser border border-base-300 bg-base-200 shadow-xl"
        >
          <div className="mockup-browser-toolbar">
            <div className="input input-bordered w-52 text-sm text-base-content/60">
              youtube.com/watch
            </div>
          </div>
          <div className="bg-base-100 p-3">
            <div className="aspect-video overflow-hidden rounded-2xl bg-base-200">
              <VideoPreview video={featuredVideo} />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {videos.map((video, index) => (
          <motion.article
            key={video.title}
            className="card border border-base-200 bg-base-100 shadow-lg transition-transform duration-300 hover:-translate-y-1"
            variants={animation(0.1 * index)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <figure className="aspect-video bg-base-200">
              <VideoPreview video={video} />
            </figure>
            <div className="card-body gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="badge badge-outline">{video.category}</span>
                <span className="text-sm text-base-content/60">
                  {video.year}
                </span>
                <span className="text-sm text-base-content/60">
                  {video.runtime}
                </span>
              </div>
              <div>
                <h3 className="card-title text-2xl">{video.title}</h3>
                <p className="mt-2 text-base-content/70">{video.description}</p>
              </div>
              <div className="card-actions justify-between">
                <a
                  className="btn btn-neutral btn-sm"
                  href={video.youtubeUrl || "https://www.youtube.com"}
                  target="_blank"
                  rel="noreferrer"
                >
                  Watch
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
