import Link from "next/link";
import { CiHome } from "react-icons/ci";

export default function NavBar() {
  return (
    <div className="flex justify-between items-center px-8 md:px-16 py-6">
      <Link
        className="rounded-full bg-neutral p-2 hover:scale-105 transition-transform"
        href="/"
      >
        <CiHome size={24} color="white" />
      </Link>
      <button className="btn btn-sm btn-neutral">Sign in</button>
    </div>
  );
}
