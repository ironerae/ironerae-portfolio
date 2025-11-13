"use client";

import scrollToView from "@/utils/scrollToView";
import QuickLinks from "./QuickLinks";
import { FaExternalLinkAlt } from "react-icons/fa";
import { TbCircleLetterIFilled } from "react-icons/tb";

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal mt-32 py-10">
      <aside>
        <TbCircleLetterIFilled size={48} />
        <p>
          &copy; 2025 ironerae
          <br />
          Personal Portfolio Website
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Sections</h6>
        <a className="link link-hover" onClick={() => scrollToView("skills")}>
          Skills
        </a>
        <a className="link link-hover" onClick={() => scrollToView("projects")}>
          Projects
        </a>
        <a className="link link-hover" onClick={() => scrollToView("contact")}>
          Contact
        </a>
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>
        <QuickLinks />
      </nav>
      <nav>
        <a
          className="link link-hover flex items-center gap-2"
          href="https://ironerae-legacy.vercel.app/"
          target="_blank"
        >
          Legacy Site <FaExternalLinkAlt size={12} />
        </a>
        <a
          className="link link-hover flex items-center gap-2"
          href="https://github.com/ironerae/ironerae-portfolio"
          target="_blank"
        >
          Source Code <FaExternalLinkAlt size={12} />
        </a>
      </nav>
    </footer>
  );
}
