import scrollToView from "@/utils/scrollToView";
import { RiMenu3Fill } from "react-icons/ri";
import ThemeControl from "./ThemeControl";
import Link from "next/link";

export default function MobileDropDown() {
  return (
    <div className="dropdown md:hidden dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-sm m-1">
        <RiMenu3Fill size={16} />
      </div>
      <ul
        tabIndex={-1}
        className="dropdown-content menu bg-base-100 rounded-box z-1 w-44 p-2 shadow-sm gap-1"
      >
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
          <button className="btn btn-neutral btn-sm">
            <Link href="/send-note">Send Note</Link>
          </button>
        </li>
        <li>
          <ThemeControl />
        </li>
      </ul>
    </div>
  );
}
