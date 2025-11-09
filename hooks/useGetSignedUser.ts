import { auth } from "@/firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

export default function useGetSignedUser() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      else setUser(null);

      setLoading(false);
    });
  }, []);

  return { user, loading };
}
