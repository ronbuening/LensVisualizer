import type { FreshnessEntry } from "./build-metadata-lib.mjs";

export interface FeedFreshness extends FreshnessEntry {
  publicationOrder?: number;
}

export interface FeedArticle extends FeedFreshness {
  slug: string;
  title: string;
  summary?: string;
  tag?: string;
  series?: string;
  seriesOrder?: number;
}

export interface FeedBuildMetadata {
  lensFreshness: Record<string, FeedFreshness>;
  articles: FeedArticle[];
}

export interface FeedLensSummary {
  key: string;
  name: string;
  maker?: string;
  specs?: string[];
  patentNumber?: string;
  patentYear?: number;
  visible: boolean;
}

export interface FeedChangelogEntry {
  date: string;
  type: "feature" | "fix" | "lens" | "improvement" | "article";
  summary: string;
}

export interface RssFeedItem extends FeedFreshness {
  title: string;
  url: string;
  description: string;
  category?: string;
}

export const DEFAULT_FEED_LIMIT: number;
export const SITE_URL: string;
export const FEED_DEFINITIONS: Record<
  "lenses" | "articles" | "changelog",
  { title: string; description: string; feedPath: string; homePath: string }
>;

export function escapeXml(value: unknown): string;
export function formatRssDate(isoDate: string, label?: string): string;
export function buildLensFeedItems(
  buildMeta: FeedBuildMetadata,
  lensSummaries: FeedLensSummary[],
  limit?: number,
): RssFeedItem[];
export function buildArticleFeedItems(buildMeta: FeedBuildMetadata, limit?: number): RssFeedItem[];
export function buildChangelogFeedItems(entries?: FeedChangelogEntry[], limit?: number): RssFeedItem[];
export function renderRssFeed(options: {
  title: string;
  description: string;
  feedUrl: string;
  homeUrl: string;
  items: RssFeedItem[];
}): string;
export function generateRssFeeds(
  buildMeta: FeedBuildMetadata,
  lensSummaries: FeedLensSummary[],
  options?: { limit?: number; changelogEntries?: FeedChangelogEntry[] },
): { lenses: string; articles: string; changelog: string };
export function writeRssFeeds(options?: { distDir?: string; metadataPath?: string; lensSummariesPath?: string }): void;
