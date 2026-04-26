/**
 * Homepage content registry — articles and article page content.
 *
 * Articles are auto-discovered from markdown files anywhere under src/content/
 * frontmatter. Dates are derived from git history at build time via
 * scripts/generate-build-metadata.mjs.
 *
 * Adding a new article:
 *   1. Create a markdown file anywhere under src/content/ with frontmatter:
 *      ---
 *      slug: my-article
 *      title: My Article Title
 *      summary: A short description for cards.
 *      tag: guide
 *      ---
 *   2. Run `npm run generate:metadata` (or it runs automatically on build/dev)
 *   3. The article will appear on the homepage and /articles page automatically
 */

import buildMetaRaw from "../generated/build-metadata.json";

/** Shape of an entry in build-metadata.json → articles[]. Declared here because
 *  optional fields (series/seriesOrder/toc) may be absent from the JSON schema
 *  until at least one article declares them. */
interface BuildMetaArticle {
  slug: string;
  title: string;
  summary: string;
  tag?: string;
  series?: string;
  seriesOrder?: number;
  toc?: boolean;
  publishedOn: string;
  lastModified: string;
  file: string;
}

const buildMeta = buildMetaRaw as Omit<typeof buildMetaRaw, "articles"> & { articles: BuildMetaArticle[] };

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
  /** Optional series id; articles sharing a series are grouped in listings */
  series?: string;
  /** Sort order within the series (0 = landing/index page) */
  seriesOrder?: number;
}

export interface ArticleContentEntry {
  title: string;
  description: string;
  markdown: string;
  publishedOn: string;
  lastModified: string;
  /** Render a floating table-of-contents when true (frontmatter `toc: true`) */
  toc?: boolean;
  /** Optional series id (for cross-linking / next-prev navigation) */
  series?: string;
  /** Sort order within the series */
  seriesOrder?: number;
}

export interface SeriesSummary {
  /** Stable series id from frontmatter (kebab-case) */
  id: string;
  /** Landing/index entry — the article with seriesOrder === 0 (falls back to the first-ordered member). */
  landing: HomepageArticle;
  /** All members ordered by seriesOrder ascending, including the landing entry. */
  members: HomepageArticle[];
}

/* ── Constants ─────────────────────────────────────────────────────── */

/** Maximum articles shown on the homepage before "View all" link appears */
export const HOMEPAGE_ARTICLE_LIMIT = 5;

/* ── Auto-discovered markdown content ──────────────────────────────── */

/** Strip YAML frontmatter (---...---) from the top of a markdown string. */
export function stripFrontmatter(raw: string): string {
  return raw.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n*/, "");
}

const _mdModules = import.meta.glob<string>("../content/**/*.md", {
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
 * All articles ordered newest-first, built from generated metadata.
 * Used directly on the `/articles` archive page; the homepage consumes
 * `HOMEPAGE_ARTICLES` (below), which collapses each series to a single entry.
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
    series: a.series,
    seriesOrder: a.seriesOrder,
  }));

/* ── Series grouping ───────────────────────────────────────────────── */

/**
 * Articles grouped by series id. Each series records its landing entry
 * (seriesOrder === 0, falling back to the lowest-ordered member) and all
 * members sorted by seriesOrder ascending.
 */
export const ARTICLE_SERIES: Record<string, SeriesSummary> = (() => {
  const bySeries: Record<string, HomepageArticle[]> = {};
  for (const article of ARTICLES) {
    if (!article.series) continue;
    (bySeries[article.series] ??= []).push(article);
  }
  const out: Record<string, SeriesSummary> = {};
  for (const [id, members] of Object.entries(bySeries)) {
    members.sort((a, b) => (a.seriesOrder ?? Infinity) - (b.seriesOrder ?? Infinity));
    const landing = members.find((m) => m.seriesOrder === 0) ?? members[0];
    out[id] = { id, landing, members };
  }
  return out;
})();

/**
 * Homepage article list — each series collapses to its landing entry so
 * the top-N feed isn't dominated by one multi-part piece. Standalone
 * articles pass through unchanged.
 */
export const HOMEPAGE_ARTICLES: HomepageArticle[] = (() => {
  const seen = new Set<string>();
  const out: HomepageArticle[] = [];
  for (const article of ARTICLES) {
    if (article.series) {
      if (seen.has(article.series)) continue;
      seen.add(article.series);
      const series = ARTICLE_SERIES[article.series];
      if (series) {
        out.push(series.landing);
        continue;
      }
    }
    out.push(article);
  }
  return out;
})();

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
    toc: a.toc ?? undefined,
    series: a.series ?? undefined,
    seriesOrder: a.seriesOrder ?? undefined,
  };
}
