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

export type ExecFileSyncLike = (
  file: string,
  args: string[],
  options: { cwd?: string; encoding: string },
) => string;

export function parseGitLogDates(raw: string): FreshnessEntry | null;

export function getGitFileFreshness(
  filePath: string,
  options?: {
    cwd?: string;
    fallbackDate?: string;
    exec?: (command: string, options: { cwd?: string; encoding: string }) => string;
    execFileImpl?: ExecFileSyncLike;
  },
): FreshnessEntry | null;

export function getGitFileFreshnessSafe(
  filePath: string,
  options?: {
    cwd?: string;
    fallbackDate?: string;
    execFileImpl?: ExecFileSyncLike;
  },
): FreshnessEntry | null;

export function getGitFileFreshnessAsync(
  filePath: string,
  options?: {
    cwd?: string;
    fallbackDate?: string;
  },
): Promise<FreshnessEntry | null>;

export function getFirstGitFileFreshness(
  filePaths: string[],
  options?: {
    cwd?: string;
    fallbackDate?: string;
    exec?: (command: string, options: { cwd?: string; encoding: string }) => string;
    execFileImpl?: ExecFileSyncLike;
  },
): FreshnessEntry | null;

export function getFirstGitFileFreshnessAsync(
  filePaths: string[],
  options?: {
    cwd?: string;
    fallbackDate?: string;
  },
): Promise<FreshnessEntry | null>;

export function mapLimit<T, R>(
  items: T[],
  limit: number,
  mapper: (item: T, index: number) => R | Promise<R>,
): Promise<R[]>;

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
