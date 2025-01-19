import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { cn } from "@/lib/utils";
import BentoCard from "./BentoCards";
import { FaInstagram } from "react-icons/fa";
import { SlSocialSteam } from "react-icons/sl";
import { FaGithub } from "react-icons/fa6";

const socials = [
  {
    name: "Github",
    icon: FaGithub,
    link: "https://github.com/nisarggandhi21",
    translateX: "24px",
    rotate: "-20deg",
    zIndex: 0,
    color: "white", // GitHub blue
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/nisarggandhi21/",
    translateX: "12px",
    rotate: "-10deg",
    zIndex: 1,
    color: "#0077b5", // LinkedIn blue
  },
  {
    name: "Twitter",
    icon: FaXTwitter,
    link: "https://x.com/nisarggandhi21",
    translateX: "4px",
    rotate: "-3deg",
    zIndex: 3,
    color: "white", // Twitter blue
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/nisarg.wcyd/",
    translateX: "-4px",
    rotate: "3deg",
    zIndex: 2,
    color: "#e1306c", // Instagram pink
  },
  {
    name: "Spotify",
    icon: FaSpotify,
    link: "https://open.spotify.com/user/x3en72xdosa16qjwhjmbv88cp",
    translateX: "-12px",
    rotate: "10deg",
    zIndex: 1,
    color: "#1db954", // Spotify green
  },
  {
    name: "Steam",
    icon: SlSocialSteam,
    link: "https://steamcommunity.com/id/axemanic/",
    translateX: "-24px",
    rotate: "20deg",
    zIndex: 0,
    color: "#00adee", // Steam blue
  },
];

const SocialCard = ({
  icon: Icon,
  link,
  className,
  style,
  name,
  color,
}: {
  icon: React.ComponentType<{ className: string; style?: React.CSSProperties }>;
  link: string;
  className?: string;
  style?: React.CSSProperties;
  name: string;
  color: string;
}) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "p social flex min-w-[50px] max-w-[50px] lg:min-w-[100px] lg:max-w-[100px] md:min-w-[80px] md:max-w-[80px] flex-col items-center justify-center gap-2 lg:gap-5 rounded-xl border border-neutral-200 bg-white py-3 lg:py-5 transition-all duration-500 dark:border-white/[0.1] dark:bg-black",
        "[box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05),0_-20px_30px_-25px_#E8FFDB_inset] dark:[box-shadow:-20px_-15px_20px_-25px_#4b523d_inset]",
        className
      )}
      style={style}
    >
      <Icon className="size-5 md:size-8 lg:size-12" style={{ color }} />
      <p className="text-[10px] lg:text-[20px]">{name}</p>
    </Link>
  );
};

const SocialCards = () => {
  return (
    <BentoCard className="group-social col-span-5 row-span-1 h-56 p-4 xs:col-span-3 xs:row-span-2 lg:p-4">
      <div className="flex size-full items-center justify-center lg:gap-[15px] gap-[5px]">
        {socials.map((social) => (
          <SocialCard
            key={social.name}
            icon={social.icon}
            link={social.link}
            name={social.name}
            style={{
              transform: `translateX(${social.translateX}) rotate(${social.rotate})`,
              zIndex: social.zIndex,
              transformOrigin: "top center",
            }}
            color={social.color} // Pass the color here
          />
        ))}
      </div>
    </BentoCard>
  );
};

export default SocialCards;
