"use client";

import Link from "next/link";
import ThemeControl from "./ThemeControl";
import scrollToView from "@/utils/scrollToView";
import MobileDropDown from "./MobileDropDown";
import { motion } from "motion/react";

export default function NavBar() {
  return (
    <motion.div
      className="bg-base-100 shadow-sm"
      id="navbar"
      initial={{ opacity: 0, width: 0 }}
      animate={{ opacity: 1, width: "100%" }}
      transition={{ duration: 0.5 }}
      viewport={{
        once: true,
      }}
    >
      <div className="max-w-6xl m-auto navbar">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl ">ironerae</a>
        </div>
        <MobileDropDown />
        <div className="flex-none hidden md:block">
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
    </motion.div>
  );
}
