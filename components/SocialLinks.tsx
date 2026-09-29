import type { IconType } from "react-icons";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { SiWakatime } from "react-icons/si";

import { profile } from "@/data";

const icons: Record<string, IconType> = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  X: FaXTwitter,
};

const iconClass =
  "h-6 w-6 fill-zinc-400 text-zinc-400 transition group-hover:fill-zinc-300 group-hover:text-zinc-300";

const SocialLinks = () => (
  <div className="flex gap-6">
    {profile.links.map((link) => {
      const Icon = icons[link.label];
      return (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer me"
          aria-label={link.label}
          className="group -m-1 p-1"
        >
          {Icon && <Icon aria-hidden className={iconClass} />}
        </a>
      );
    })}
    <a
      href={profile.wakatimeProfile}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WakaTime"
      className="group -m-1 p-1"
    >
      <SiWakatime aria-hidden className={iconClass} />
    </a>
    <a
      href={`mailto:${profile.email}`}
      aria-label="Email"
      className="group -m-1 p-1"
    >
      <FiMail
        aria-hidden
        className="h-6 w-6 text-zinc-400 transition group-hover:text-zinc-300"
      />
    </a>
  </div>
);

export default SocialLinks;
