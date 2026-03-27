export interface FreshnessEntry {
  publishedOn: string;
  lastModified: string;
}

export interface LensFreshnessInput {
  key: string;
  makerSlug: string;
  freshness: FreshnessEntry;
}

export interface ArticleFreshnessInput {
  slug: string;
  publishedOn: string;
  lastModified: string;
}

export function parseGitLogDates(raw: string): FreshnessEntry | null;

export function getGitFileFreshness(
  filePath: string,
  options?: {
    cwd?: string;
    fallbackDate?: string;
    exec?: (command: string, options: { cwd?: string; encoding: string }) => string;
  },
): FreshnessEntry | null;

export function combineFreshnessEntries(
  entries: Array<FreshnessEntry | null | undefined>,
  fallbackDate: string,
): FreshnessEntry;

export function buildRouteFreshness(options: {
  lenses: LensFreshnessInput[];
  articles: ArticleFreshnessInput[];
  makerSlugs: string[];
  makerDetailsFreshness: FreshnessEntry | null;
  fallbackDate: string;
}): Record<string, FreshnessEntry>;
