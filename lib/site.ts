// Absolute site URL, used for metadata, the sitemap and robots.txt.
// On Vercel this is filled in automatically from the production domain;
// set NEXT_PUBLIC_SITE_URL to override it.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const siteTitle = "Nisarg Gandhi | Software Developer";

export const siteDescription =
  "Portfolio of Nisarg Gandhi, a software developer in Mumbai, India, building fast, scalable web apps with React, Next.js and TypeScript.";
