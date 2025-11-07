import Link from "next/link";
import { CiHome } from "react-icons/ci";
import SendForm from "./SendForm";

export default function SendNotePage() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <Link className="fixed top-6 left-6 rounded-full bg-neutral p-2" href="/">
        <CiHome size={24} color="white" />
      </Link>
      <h1 className="font-bold text-5xl text-center">
        send me a note anonymously
      </h1>
      <SendForm />
    </main>
  );
}
