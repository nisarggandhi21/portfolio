import { experienceYears } from "@/lib/experience";
import { ogCard, ogSize } from "@/lib/og";

export const alt = "Nisarg Gandhi, Full Stack Developer in Mumbai, India";
export const size = ogSize;
export const contentType = "image/png";

// Preview image for the homepage (and any page without its own)
export default function OpengraphImage() {
  return ogCard({
    eyebrow: "Portfolio · Mumbai, India",
    title: "I'm Nisarg Gandhi,",
    accent: "full stack developer.",
    subtitle: `${experienceYears()} building scalable web applications with React.js, Next.js and Node.js.`,
    footer: "nisarg-gandhi.com",
  });
}
