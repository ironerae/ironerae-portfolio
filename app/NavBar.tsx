"use client";

import Link from "next/link";
import ThemeControl from "./ThemeControl";
import scrollToView from "@/utils/scrollToView";

export default function NavBar() {
  return (
    <div className="bg-base-100 shadow-sm" id="navbar">
      <div className="max-w-6xl m-auto navbar">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl ">ironerae</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 items-center">
            <li>
              <a onClick={() => scrollToView("skills")}>Skills</a>
            </li>
            <li>
              <a onClick={() => scrollToView("projects")}>Projects</a>
            </li>
            <li>
              <a onClick={() => scrollToView("contact")}>Contact</a>
            </li>
            <li>
              <ThemeControl />
            </li>
            <li>
              <button className="btn btn-neutral btn-sm ml-4">
                <Link href="/send-note">Send Note</Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
