import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function QuickLinks() {
  return (
    <div className="flex bg-base-200 p-2 rounded-2xl gap-2">
      <FaGithub size={40} />
      <FaFacebook size={40} />
      <FaLinkedin size={40} />
    </div>
  );
}
