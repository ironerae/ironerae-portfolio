import ThemeControl from "./ThemeControl";

export default function NavBar() {
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="max-w-6xl m-auto navbar">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl ">ironerae</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 items-center">
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <ThemeControl />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
