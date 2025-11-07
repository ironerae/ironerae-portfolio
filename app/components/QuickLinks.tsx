import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function QuickLinks() {
  return (
    <div className="flex p-2 rounded-2xl gap-2">
      <FaGithub size={36} />
      <FaFacebook size={36} />
      <FaLinkedin size={36} />
    </div>
  );
}
