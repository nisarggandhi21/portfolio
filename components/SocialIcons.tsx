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

const SocialIcons = () => (
  <div className="social-icons">
    {profile.links.map((link) => {
      const Icon = icons[link.label];
      return (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer me"
          title={link.label}
          aria-label={link.label}
        >
          {Icon ? <Icon aria-hidden /> : link.label}
        </a>
      );
    })}
    <a
      href={profile.wakatimeProfile}
      target="_blank"
      rel="noopener noreferrer"
      title="WakaTime"
      aria-label="WakaTime"
    >
      <SiWakatime aria-hidden />
    </a>
    <a href={`mailto:${profile.email}`} title="Email" aria-label="Email">
      <FiMail aria-hidden />
    </a>
  </div>
);

export default SocialIcons;
