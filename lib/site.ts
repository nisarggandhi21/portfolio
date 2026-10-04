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

// The experience page is served from its own subdomain (see middleware.ts)
export const workUrl = "https://work.nisarg-gandhi.com";
export const workHost = new URL(workUrl).host;

// Link to the work site's home: its own domain in production, /work elsewhere
export const workHref =
  process.env.VERCEL_ENV === "production" ? workUrl : "/work";
