/**
 * Homepage content registry — articles and article page content.
 *
 * Articles are auto-discovered from src/content/*.md files with YAML
 * frontmatter. Dates are derived from git history at build time via
 * scripts/generate-build-metadata.mjs.
 *
 * Adding a new article:
 *   1. Create a markdown file in src/content/ with frontmatter:
 *      ---
 *      slug: my-article
 *      title: My Article Title
 *      summary: A short description for cards.
 *      tag: guide
 *      ---
 *   2. Run `npm run generate:metadata` (or it runs automatically on build/dev)
 *   3. The article will appear on the homepage and /articles page automatically
 */

import buildMeta from "../generated/build-metadata.json";

/* ── Types ─────────────────────────────────────────────────────────── */

export interface HomepageArticle {
  /** URL-safe slug — used in /articles/:slug routes */
  slug: string;
  /** Display title */
  title: string;
  /** ISO date string for sorting/display (e.g. "2026-03-15") */
  date: string;
  /** 1-2 sentence summary shown on homepage card */
  summary: string;
  /** Where the card links to: internal path (e.g. "/articles/optics-primer") */
  linkTo: string;
  /** Last modified date used for structured data */
  lastModified: string;
  /** Optional category tag displayed on the card */
  tag?: "article" | "announcement" | "guide";
}

export interface ArticleContentEntry {
  title: string;
  description: string;
  markdown: string;
  publishedOn: string;
  lastModified: string;
}

/* ── Constants ─────────────────────────────────────────────────────── */

/** Maximum articles shown on the homepage before "View all" link appears */
export const HOMEPAGE_ARTICLE_LIMIT = 5;

/* ── Auto-discovered markdown content ──────────────────────────────── */

/** Strip YAML frontmatter (---...---) from the top of a markdown string. */
export function stripFrontmatter(raw: string): string {
  return raw.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n*/, "");
}

const _mdModules = import.meta.glob<string>("../content/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

/** Map filename → raw markdown content (with frontmatter stripped). */
const MD_BY_FILE: Record<string, string> = {};
for (const [path, raw] of Object.entries(_mdModules)) {
  const file = path.replace("../content/", "");
  MD_BY_FILE[file] = stripFrontmatter(raw);
}

/* ── Articles (auto-generated from build metadata) ─────────────────── */

/**
 * Articles ordered newest-first, built from generated metadata.
 * The homepage shows the first HOMEPAGE_ARTICLE_LIMIT entries;
 * the /articles page shows all.
 */
export const ARTICLES: HomepageArticle[] = buildMeta.articles
  .filter((a) => MD_BY_FILE[a.file])
  .map((a) => ({
    slug: a.slug,
    title: a.title,
    date: a.publishedOn,
    summary: a.summary,
    linkTo: `/articles/${a.slug}`,
    lastModified: a.lastModified,
    tag: a.tag as HomepageArticle["tag"],
  }));

/* ── Article Content Registry ──────────────────────────────────────── */

/**
 * Maps article slugs to their full page content.
 * Used by ArticlePage to render standalone article pages.
 */
export const ARTICLE_CONTENT: Record<string, ArticleContentEntry> = {};
for (const a of buildMeta.articles) {
  const md = MD_BY_FILE[a.file];
  if (!md) continue;
  ARTICLE_CONTENT[a.slug] = {
    title: a.title,
    description: a.summary,
    markdown: md,
    publishedOn: a.publishedOn,
    lastModified: a.lastModified,
  };
}
