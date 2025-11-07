"use client";

import scrollToView from "@/utils/scrollToView";
import { MdOutlineEmail } from "react-icons/md";

export default function HeroButtons() {
  return (
    <div>
      <button
        className="btn btn-neutral btn-lg mt-4 rounded-xl border-2 border-secondary"
        onClick={() => scrollToView("projects")}
      >
        View My Work
      </button>
      <button
        className="btn btn-lg mt-4 ml-4 rounded-xl"
        onClick={() => scrollToView("contact")}
      >
        <MdOutlineEmail className="ml-2 text-xl" /> Let's Connect
      </button>
    </div>
  );
}
