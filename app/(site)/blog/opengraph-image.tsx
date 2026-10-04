import { getAllPosts } from "@/lib/blog";
import { ogCard, ogSize } from "@/lib/og";

export const alt = "Articles by Nisarg Gandhi";
export const size = ogSize;
export const contentType = "image/png";

// Preview image for the article list
export default function OpengraphImage() {
  return ogCard({
    eyebrow: `The writing · ${getAllPosts().length} articles`,
    title: "Articles by",
    accent: "Nisarg Gandhi.",
    subtitle: "On AI agents, LLMs and spec-driven development.",
    footer: "nisarg-gandhi.com/blog",
  });
}
