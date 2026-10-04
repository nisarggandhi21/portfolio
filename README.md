# nisarg-gandhi.com

Personal portfolio and blog of Nisarg Gandhi, Full Stack Developer based in Mumbai.
Live at [www.nisarg-gandhi.com](https://www.nisarg-gandhi.com).

Built with [Next.js](https://nextjs.org) (App Router), TypeScript and Tailwind CSS, deployed on Vercel.

## Pages

| Route                    | What it shows                                                       |
| ------------------------ | ------------------------------------------------------------------- |
| `/`                      | Intro, about me (quick facts, education, WakaTime), latest articles |
| `/blog`                  | All articles                                                        |
| `/blog/[slug]`           | A single article (with its own link-preview image)                  |
| `/feed.xml`              | RSS feed of the articles                                            |
| `work.nisarg-gandhi.com` | Full experience, skills, projects, recognition and education        |

The two domains work as separate sites from one codebase:

- **Main site** (`app/(site)/`): home and blog, with its own header and footer.
- **Work site** (`app/work/`): the experience page, with its own header and footer and no links
  to the main site.

`middleware.ts` serves the work page at the root of `work.nisarg-gandhi.com` and returns a 404
for every other path there, and returns a 404 for `/work` on the main domain. Locally and in
preview deployments the work page is at `/work`. The subdomain is added to the Vercel project
under **Settings → Domains**.

### Link previews and search

- **Preview images** (LinkedIn, X, WhatsApp) are drawn by `lib/og.tsx` in the site's fonts,
  which live in `assets/fonts/` with their licences. Each page type has its own
  `opengraph-image.tsx`; articles with a `.jpg` cover use the cover instead.
- **Titles and descriptions** for previews come from `shareMetadata` in `lib/seo.ts`, so
  Open Graph and X always match.
- **Structured data** (schema.org Person, ProfilePage and BlogPosting) helps search engines
  understand the pages.
- `robots.txt` and `sitemap.xml` answer per domain: the work site lists only itself.

## Running locally

Requires Node.js 22.

```bash
npm ci
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run lint       # ESLint
npx tsc --noEmit   # type check
npm run build      # production build
```

The same checks run on every pull request (`.github/workflows/ci.yml`).

### Environment variables

| Variable               | Required | Purpose                                                                                       |
| ---------------------- | -------- | --------------------------------------------------------------------------------------------- |
| `WAKATIME_API_KEY`     | No       | Shows total coding hours on the homepage. Without it, the card links to the WakaTime profile. |
| `NEXT_PUBLIC_SITE_URL` | No       | Absolute site URL for metadata, sitemap and RSS. On Vercel the production domain is used.     |

Put them in `.env.local` for local development.

## Editing content

- **Profile, experience, skills, projects, awards, education:** `data/index.ts`.
  Wrap numbers in `**double asterisks**` in experience bullet points to highlight them.
  Company and school logos live in `public/logos/`; entries without a `logo` show their first letter.
- **Articles:** add a Markdown file to `content/blog/`. The file name becomes the URL.
  Copy `content/blog/_template.md` for the front matter (title, date, description, tags,
  optional `originalUrl` and `coverImage`). Images go in `public/blog/`.
  Code blocks with a language (e.g. ` ```ts `) are syntax-highlighted at build time.
