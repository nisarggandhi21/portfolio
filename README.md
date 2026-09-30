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

The experience page lives at `app/work/page.tsx`. `middleware.ts` also serves it at the root of
`work.nisarg-gandhi.com`; it stays reachable at `/work` everywhere. The subdomain must be added
to the Vercel project under **Settings → Domains**.

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
