import { workExperience } from "@/data";
import { experienceYears } from "@/lib/experience";
import { ogCard, ogSize } from "@/lib/og";

export const alt = "Experience and projects of Nisarg Gandhi";
export const size = ogSize;
export const contentType = "image/png";

// Preview image for work.nisarg-gandhi.com, the link on the résumé
export default function OpengraphImage() {
  return ogCard({
    eyebrow: `Experience · ${workExperience.length} roles · ${experienceYears()}`,
    title: "Nisarg Gandhi,",
    accent: "full stack developer.",
    subtitle:
      "Experience, projects and skills: React.js, Next.js, Node.js and Python.",
    footer: "work.nisarg-gandhi.com",
  });
}
