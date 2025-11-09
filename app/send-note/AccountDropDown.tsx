import { auth } from "@/firebase/auth";
import { signOut } from "firebase/auth";
import Image from "next/image";
import { IoIosLogOut } from "react-icons/io";
import NotesPageModal from "./NotesPageModal";

interface AccountDropDownProps {
  displayName: string | null;
  photoURL: string | null;
}

export default function AccountDropDown({
  displayName,
  photoURL,
}: AccountDropDownProps) {
  const handleSignOut = () => {
    try {
      signOut(auth);
    } catch (error) {
      console.error("Error during sign-out:", error);
    }
  };

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="border border-neutral rounded-full cursor-pointer"
      >
        <Image
          className="rounded-full"
          src={photoURL!}
          alt={`${displayName}'s Photo`}
          width={36}
          height={36}
        />
      </div>
      <ul
        tabIndex={-1}
        className="dropdown-content menu bg-base-100 rounded-box z-1 w-36 p-2 shadow-sm flex flex-col gap-2"
      >
        <li>
          <NotesPageModal />
        </li>
        <li>
          <button onClick={handleSignOut}>
            <IoIosLogOut />
            Sign out
          </button>
        </li>
      </ul>
    </div>
  );
}
