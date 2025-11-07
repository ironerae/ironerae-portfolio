import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function QuickLinks() {
  return (
    <div className="flex p-2 rounded-2xl gap-2">
      <a href="https://github.com/ironerae" target="_blank">
        <FaGithub size={36} />
      </a>
      <a href="https://www.linkedin.com/ironerae" target="_blank">
        <FaLinkedin size={36} />
      </a>
      <a href="https://www.facebook.com/ironerae" target="_blank">
        <FaFacebook size={36} />
      </a>
    </div>
  );
}
