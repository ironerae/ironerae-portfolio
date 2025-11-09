import SendForm from "./SendForm";
import { ToastContainer } from "react-toastify";

export default function SendNotePage() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="font-bold text-5xl text-center">
        send me a note anonymously
      </h1>
      <SendForm />
      <ToastContainer />
    </main>
  );
}
