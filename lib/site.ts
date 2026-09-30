// Absolute site URL, used for metadata, the sitemap and robots.txt.
// On Vercel this is filled in automatically from the production domain;
// set NEXT_PUBLIC_SITE_URL to override it.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

// Advertises the RSS feed to feed readers; include in each page's `alternates`
export const rssAlternate = {
  "application/rss+xml": [
    { url: "/feed.xml", title: "Nisarg Gandhi – Articles" },
  ],
};

export const siteTitle = "Nisarg Gandhi | Full Stack Developer";

export const siteDescription =
  "Portfolio of Nisarg Gandhi, a Full Stack Developer in Mumbai, India, building scalable web apps and AI features with React.js, Next.js, Node.js and Python.";

// The experience page is served from its own subdomain (see middleware.ts)
export const workUrl = "https://work.nisarg-gandhi.com";

// Only production links across the main site and the subdomain;
// previews and local dev keep relative paths
const isProduction = process.env.VERCEL_ENV === "production";
export const workHref = isProduction ? workUrl : "/work";
export const mainHref = (path: string) =>
  isProduction ? `${siteUrl}${path}` : path;
