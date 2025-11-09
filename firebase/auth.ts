import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { app } from "./config";

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export { auth, provider };
