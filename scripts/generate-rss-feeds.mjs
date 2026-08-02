/**
 * Build-time RSS 2.0 feed generator.
 *
 * Reads the git-derived publication metadata and lightweight lens summaries,
 * then writes deterministic article and lens feeds into dist/feeds/.
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { SITE_URL, canonicalPageUrl } from "./site-url.mjs";

const SITE_NAME = "Surface & Stop";
const DEFAULT_FEED_LIMIT = 50;
const ROOT = join(import.meta.dirname, "..");
const META_PATH = join(ROOT, "src", "generated", "build-metadata.json");
const LENS_SUMMARIES_PATH = join(ROOT, "src", "generated", "lens-summaries.json");
const DIST_DIR = join(ROOT, "dist");

const FEED_DEFINITIONS = {
  lenses: {
    title: `${SITE_NAME} — New Lenses`,
    description: "Recently published patent-derived camera lens diagrams and interactive optical models.",
    feedPath: "/feeds/lenses.xml",
    homePath: "/updates",
  },
  articles: {
    title: `${SITE_NAME} — New Articles`,
    description: "Recently published articles and guides about optical design, lens history, and lens engineering.",
    feedPath: "/feeds/articles.xml",
    homePath: "/articles",
  },
};

function stripInvalidXmlCharacters(value) {
  return Array.from(String(value))
    .filter((character) => {
      const codePoint = character.codePointAt(0);
      return (
        codePoint === 0x09 ||
        codePoint === 0x0a ||
        codePoint === 0x0d ||
        (codePoint >= 0x20 && codePoint <= 0xd7ff) ||
        (codePoint >= 0xe000 && codePoint <= 0xfffd) ||
        (codePoint >= 0x10000 && codePoint <= 0x10ffff)
      );
    })
    .join("");
}

function escapeXml(value) {
  return stripInvalidXmlCharacters(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function requiredString(value, label) {
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`RSS feed item is missing required ${label}.`);
  }
  return value.trim();
}

function formatRssDate(isoDate, label = "date") {
  const value = requiredString(isoDate, label);
  const dateOnly = /^\d{4}-\d{2}-\d{2}$/.test(value);
  const isoTimestamp = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{3})?(?:Z|[+-]\d{2}:\d{2})$/.test(value);
  if (!dateOnly && !isoTimestamp) {
    throw new Error(`RSS ${label} must use YYYY-MM-DD or an ISO 8601 timestamp, found "${value}".`);
  }

  const date = new Date(dateOnly ? `${value}T00:00:00Z` : value);
  if (Number.isNaN(date.valueOf()) || (dateOnly && date.toISOString().slice(0, 10) !== value)) {
    throw new Error(`RSS ${label} is not a valid calendar date: "${value}".`);
  }
  return date.toUTCString();
}

function compareStrings(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

function newestFirst(a, b) {
  if (Number.isInteger(a.publicationOrder) && Number.isInteger(b.publicationOrder)) {
    const byGeneratedOrder = a.publicationOrder - b.publicationOrder;
    if (byGeneratedOrder) return byGeneratedOrder;
  }

  const byDate = compareStrings(b.publishedOn, a.publishedOn);
  if (byDate) return byDate;
  const byTimestamp = compareStrings(a.publishedAt ?? a.publishedOn, b.publishedAt ?? b.publishedOn);
  if (byTimestamp) return byTimestamp;
  const byCommit = compareStrings(a.publishedCommit ?? "", b.publishedCommit ?? "");
  if (byCommit) return byCommit;
  return compareStrings(a.title, b.title) || compareStrings(a.url, b.url);
}

function normalizeLimit(limit) {
  if (!Number.isInteger(limit) || limit <= 0) {
    throw new Error(`RSS feed limit must be a positive integer, found "${limit}".`);
  }
  return limit;
}

function lensDescription(summary) {
  const details = [];
  if (summary.maker) details.push(summary.maker);
  if (Array.isArray(summary.specs)) {
    details.push(...summary.specs.filter((spec) => typeof spec === "string" && spec.trim()).slice(0, 3));
  }
  if (summary.patentNumber) {
    details.push(`Patent ${summary.patentNumber}${summary.patentYear ? ` (${summary.patentYear})` : ""}`);
  }

  const lead = details.length > 0 ? `${details.join(" · ")}. ` : "";
  return `${lead}Explore the interactive cross-section, ray tracing, and optical analysis.`;
}

function buildLensFeedItems(buildMeta, lensSummaries, limit = DEFAULT_FEED_LIMIT) {
  const boundedLimit = normalizeLimit(limit);
  if (!buildMeta?.lensFreshness || typeof buildMeta.lensFreshness !== "object") {
    throw new Error("build-metadata.json is missing lensFreshness.");
  }
  if (!Array.isArray(lensSummaries)) {
    throw new Error("lens-summaries.json must contain an array.");
  }

  const summariesByKey = new Map(lensSummaries.map((summary) => [summary.key, summary]));
  return Object.entries(buildMeta.lensFreshness)
    .map(([key, freshness]) => {
      const summary = summariesByKey.get(key);
      if (!summary) throw new Error(`RSS lens feed is missing a summary for "${key}".`);
      if (summary.visible !== true) return null;

      return {
        title: requiredString(summary.name, `lens name for "${key}"`),
        url: canonicalPageUrl(`/lens/${key}`),
        publishedOn: requiredString(freshness?.publishedOn, `publishedOn for lens "${key}"`),
        publishedAt:
          typeof freshness?.publishedAt === "string" && freshness.publishedAt.trim()
            ? freshness.publishedAt.trim()
            : freshness?.publishedOn,
        publishedCommit: freshness?.publishedCommit,
        lastModified: requiredString(freshness?.lastModified, `lastModified for lens "${key}"`),
        lastModifiedAt:
          typeof freshness?.lastModifiedAt === "string" && freshness.lastModifiedAt.trim()
            ? freshness.lastModifiedAt.trim()
            : freshness?.lastModified,
        publicationOrder: freshness?.publicationOrder,
        description: lensDescription(summary),
        category: typeof summary.maker === "string" && summary.maker.trim() ? summary.maker.trim() : undefined,
      };
    })
    .filter(Boolean)
    .sort(newestFirst)
    .slice(0, boundedLimit);
}

function buildArticleFeedItems(buildMeta, limit = DEFAULT_FEED_LIMIT) {
  const boundedLimit = normalizeLimit(limit);
  if (!Array.isArray(buildMeta?.articles)) {
    throw new Error("build-metadata.json is missing articles.");
  }

  return buildMeta.articles
    .map((article) => {
      const slug = requiredString(article.slug, "article slug");
      const title = requiredString(article.title, `article title for "${slug}"`);
      return {
        title,
        url: canonicalPageUrl(`/articles/${slug}`),
        publishedOn: requiredString(article.publishedOn, `publishedOn for article "${slug}"`),
        publishedAt:
          typeof article.publishedAt === "string" && article.publishedAt.trim()
            ? article.publishedAt.trim()
            : article.publishedOn,
        publishedCommit: article.publishedCommit,
        lastModified: requiredString(article.lastModified, `lastModified for article "${slug}"`),
        lastModifiedAt:
          typeof article.lastModifiedAt === "string" && article.lastModifiedAt.trim()
            ? article.lastModifiedAt.trim()
            : article.lastModified,
        publicationOrder: article.publicationOrder,
        description:
          typeof article.summary === "string" && article.summary.trim()
            ? article.summary.trim()
            : `Read ${title} on ${SITE_NAME}.`,
        category: typeof article.tag === "string" && article.tag.trim() ? article.tag.trim() : undefined,
      };
    })
    .sort(newestFirst)
    .slice(0, boundedLimit);
}

function renderRssFeed({ title, description, feedUrl, homeUrl, items }) {
  requiredString(title, "channel title");
  requiredString(description, "channel description");
  requiredString(feedUrl, "channel feed URL");
  requiredString(homeUrl, "channel home URL");
  if (!Array.isArray(items) || items.length === 0) {
    throw new Error(`RSS feed "${title}" must contain at least one item.`);
  }

  const seenUrls = new Set();
  for (const item of items) {
    requiredString(item.title, "item title");
    const url = requiredString(item.url, `URL for "${item.title}"`);
    requiredString(item.description, `description for "${item.title}"`);
    formatRssDate(item.publishedAt ?? item.publishedOn, `publishedAt for "${item.title}"`);
    formatRssDate(item.lastModifiedAt ?? item.lastModified, `lastModifiedAt for "${item.title}"`);
    if (seenUrls.has(url)) throw new Error(`RSS feed contains duplicate item URL "${url}".`);
    seenUrls.add(url);
  }

  const lastBuildDate = items.reduce((latest, item) => {
    const itemModifiedAt = item.lastModifiedAt ?? item.lastModified;
    return itemModifiedAt > latest ? itemModifiedAt : latest;
  }, items[0].lastModifiedAt ?? items[0].lastModified);
  const itemXml = items.map(
    (item) => `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${escapeXml(item.url)}</link>
      <guid isPermaLink="true">${escapeXml(item.url)}</guid>
      <pubDate>${formatRssDate(item.publishedAt ?? item.publishedOn, `publishedAt for "${item.title}"`)}</pubDate>
      <description>${escapeXml(item.description)}</description>${
        item.category ? `\n      <category>${escapeXml(item.category)}</category>` : ""
      }
    </item>`,
  );

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    "  <channel>",
    `    <title>${escapeXml(title)}</title>`,
    `    <link>${escapeXml(homeUrl)}</link>`,
    `    <description>${escapeXml(description)}</description>`,
    "    <language>en-us</language>",
    `    <lastBuildDate>${formatRssDate(lastBuildDate, "lastBuildDate")}</lastBuildDate>`,
    `    <atom:link href="${escapeXml(feedUrl)}" rel="self" type="application/rss+xml"/>`,
    `    <generator>${escapeXml(`${SITE_NAME} static build`)}</generator>`,
    ...itemXml,
    "  </channel>",
    "</rss>",
    "",
  ].join("\n");
}

function generateRssFeeds(buildMeta, lensSummaries, { limit = DEFAULT_FEED_LIMIT } = {}) {
  const lensDefinition = FEED_DEFINITIONS.lenses;
  const articleDefinition = FEED_DEFINITIONS.articles;
  const lensFeedUrl = `${SITE_URL}${lensDefinition.feedPath}`;
  const articleFeedUrl = `${SITE_URL}${articleDefinition.feedPath}`;

  return {
    lenses: renderRssFeed({
      title: lensDefinition.title,
      description: lensDefinition.description,
      feedUrl: lensFeedUrl,
      homeUrl: canonicalPageUrl(lensDefinition.homePath),
      items: buildLensFeedItems(buildMeta, lensSummaries, limit),
    }),
    articles: renderRssFeed({
      title: articleDefinition.title,
      description: articleDefinition.description,
      feedUrl: articleFeedUrl,
      homeUrl: canonicalPageUrl(articleDefinition.homePath),
      items: buildArticleFeedItems(buildMeta, limit),
    }),
  };
}

function writeRssFeeds({ distDir = DIST_DIR, metadataPath = META_PATH, lensSummariesPath = LENS_SUMMARIES_PATH } = {}) {
  if (!existsSync(distDir)) throw new Error("dist/ directory not found. Run `vite build` first.");
  if (!existsSync(metadataPath)) throw new Error("build-metadata.json not found. Run generate:metadata first.");
  if (!existsSync(lensSummariesPath)) throw new Error("lens-summaries.json not found. Run generate:metadata first.");

  const buildMeta = JSON.parse(readFileSync(metadataPath, "utf-8"));
  const lensSummaries = JSON.parse(readFileSync(lensSummariesPath, "utf-8"));
  const feeds = generateRssFeeds(buildMeta, lensSummaries);
  const feedsDir = join(distDir, "feeds");
  mkdirSync(feedsDir, { recursive: true });
  writeFileSync(join(feedsDir, "lenses.xml"), feeds.lenses, "utf-8");
  writeFileSync(join(feedsDir, "articles.xml"), feeds.articles, "utf-8");
  console.log(`RSS feeds written to ${feedsDir} (${DEFAULT_FEED_LIMIT} entries maximum per feed)`);
}

const isDirectExecution = process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href;
if (isDirectExecution) writeRssFeeds();

export {
  DEFAULT_FEED_LIMIT,
  FEED_DEFINITIONS,
  SITE_URL,
  buildArticleFeedItems,
  buildLensFeedItems,
  escapeXml,
  formatRssDate,
  generateRssFeeds,
  renderRssFeed,
  writeRssFeeds,
};
