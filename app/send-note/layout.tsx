import { ReCaptchaProvider } from "next-recaptcha-v3";
import { ReactNode } from "react";
import NavBar from "./NavBar";

export default function SendNoteLayout({ children }: { children: ReactNode }) {
  return (
    <ReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
    >
      <NavBar />
      {children}
    </ReCaptchaProvider>
  );
}
