import type { Metadata } from "next";

import { education, profile } from "@/data";
import { experienceYears } from "./experience";
import { siteUrl, workUrl } from "./site";

export const siteDescription = () =>
  `Nisarg Gandhi is a Full Stack Developer in Mumbai with ${experienceYears()} of experience building scalable web applications with React.js, Next.js and Node.js.`;

export const blogDescription =
  "Articles by Nisarg Gandhi on AI agents, LLMs and spec-driven development.";

export const workTitle = "Nisarg Gandhi | Experience & Projects";

export const workDescription =
  "Experience, projects and skills of Nisarg Gandhi, a Full Stack Developer working with React.js, Next.js, Node.js and Python.";

// Link-preview tags for a page. Open Graph and X get the same title and
// description; the image comes from the route's opengraph-image file.
export const shareMetadata = ({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}): Pick<Metadata, "openGraph" | "twitter"> => ({
  openGraph: {
    type: "website",
    siteName: profile.name,
    locale: "en_US",
    title,
    description,
    url,
  },
  twitter: {
    card: "summary_large_image",
    creator: "@nisarggandhi21",
    title,
    description,
  },
});

// schema.org data for search engines. The current employer is left out,
// as on the main site.
const personId = `${siteUrl}/#person`;

export const personSchema = () => ({
  "@type": "Person",
  "@id": personId,
  name: profile.name,
  url: siteUrl,
  jobTitle: "Full Stack Developer",
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressCountry: "IN",
  },
  alumniOf: education.map((item) => ({
    "@type": "CollegeOrUniversity",
    name: item.school,
  })),
  knowsAbout: ["React.js", "Next.js", "Node.js", "TypeScript", "Python"],
  sameAs: [
    ...profile.links.map((link) => link.href),
    profile.wakatimeProfile,
    workUrl,
  ],
});

export const authorRef = {
  "@type": "Person",
  "@id": personId,
  name: profile.name,
  url: siteUrl,
};
