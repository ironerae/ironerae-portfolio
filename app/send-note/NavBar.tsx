"use client";

import { auth, provider } from "@/firebase/auth";
import useGetSignedUser from "@/hooks/useGetSignedUser";
import { signInWithPopup } from "firebase/auth";
import Link from "next/link";
import { CiHome } from "react-icons/ci";
import AccountDropDown from "./AccountDropDown";

export default function NavBar() {
  const { user, loading } = useGetSignedUser();

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  return (
    <div className="flex justify-between items-center px-8 md:px-16 py-6">
      <Link
        className="rounded-full bg-neutral p-2 hover:scale-105 transition-transform"
        href="/"
      >
        <CiHome size={24} color="white" />
      </Link>
      {!user && !loading && (
        <button className="btn btn-sm btn-neutral" onClick={handleSignIn}>
          Sign in
        </button>
      )}
      {user && (
        <AccountDropDown
          displayName={user.displayName}
          photoURL={user.photoURL}
        />
      )}
    </div>
  );
}
