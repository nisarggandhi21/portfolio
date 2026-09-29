import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Posts are Markdown files in content/blog. The file name (without .md) is the URL slug.
// Files starting with "_" (like _template.md) are ignored.
const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  originalUrl?: string;
  originalSource?: string;
  coverImage?: string;
  readingTime: number;
};

export type Post = PostMeta & { content: string };

const WORDS_PER_MINUTE = 200;

// Human-readable name of the site a post was first published on, e.g. "LinkedIn"
function getSourceName(url: string): string {
  const host = new URL(url).hostname.replace(/^www\./, "");
  if (host.endsWith("linkedin.com")) return "LinkedIn";
  if (host.endsWith("medium.com")) return "Medium";
  if (host.endsWith("dev.to")) return "DEV";
  if (host.endsWith("hashnode.dev")) return "Hashnode";
  return host;
}

function getPostFiles(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".md") && !file.startsWith("_"));
}

function readPost(file: string): Post {
  const slug = file.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
  const { data, content } = matter(raw);

  if (!data.title || !data.date) {
    throw new Error(
      `content/blog/${file} needs a "title" and a "date" in its front matter`,
    );
  }

  const words = content.trim().split(/\s+/).length;

  return {
    slug,
    title: String(data.title),
    // gray-matter turns unquoted YAML dates into Date objects
    date:
      data.date instanceof Date
        ? data.date.toISOString().slice(0, 10)
        : String(data.date),
    description: data.description ? String(data.description) : "",
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    originalUrl: data.originalUrl ? String(data.originalUrl) : undefined,
    originalSource: data.originalUrl
      ? getSourceName(String(data.originalUrl))
      : undefined,
    coverImage: data.coverImage ? String(data.coverImage) : undefined,
    readingTime: Math.max(1, Math.round(words / WORDS_PER_MINUTE)),
    content,
  };
}

export function getAllPosts(): PostMeta[] {
  return getPostFiles()
    .map((file) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { content, ...meta } = readPost(file);
      return meta;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  const file = `${slug}.md`;
  if (!getPostFiles().includes(file)) return null;
  return readPost(file);
}

export function formatDate(
  date: string,
  month: "long" | "short" = "long",
): string {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month,
    year: "numeric",
    timeZone: "UTC",
  });
}
