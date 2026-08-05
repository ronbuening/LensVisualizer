export interface FreshnessEntry {
  publishedOn: string;
  publishedAt?: string;
  publishedCommit?: string | null;
  lastModified: string;
  lastModifiedAt?: string;
  lastModifiedCommit?: string | null;
}

export interface LensFreshnessInput {
  key: string;
  makerSlug: string;
  lensMountIds?: string[];
  imageFormatId?: string | null;
  freshness: FreshnessEntry;
}

export interface ArticleFreshnessInput {
  slug: string;
  title?: string;
  publishedOn: string;
  publishedAt?: string;
  publishedCommit?: string | null;
  lastModified: string;
  lastModifiedAt?: string;
  lastModifiedCommit?: string | null;
}

export interface AuthorRouteInput {
  name: string;
  slug: string;
  lensKeys: string[];
  patentCount: number;
}

export type ExecFileSyncLike = (file: string, args: string[], options: { cwd?: string; encoding: string }) => string;

export function assertFullGitHistory(options?: {
  cwd?: string;
  execFileImpl?: ExecFileSyncLike;
  allowFetch?: boolean;
}): void;

export function parseGitLogDates(raw: string): FreshnessEntry | null;

export function getGitFileFreshness(
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

export function comparePublicationEntries<
  T extends FreshnessEntry & { name?: string; title?: string; key?: string; slug?: string },
>(a: T, b: T): number;

export interface ArticleMetadata extends ArticleFreshnessInput {
  title: string;
  summary: string;
  tag?: string;
  series?: string;
  seriesOrder?: number;
  toc?: true;
  file: string;
  publicationOrder: number;
}

export function parseFrontmatterContent(content: string): Record<string, string> | null;

export function articleFrontmatterError(meta: Record<string, string> | null): string | null;

export function isGeneratedContentDoc(file: string): boolean;

export function collectArticles(options: {
  contentDir: string;
  cwd: string;
  fallbackDate: string;
  contentRepoPath?: string;
  concurrency?: number;
  execFileImpl?: ExecFileSyncLike;
}): Promise<ArticleMetadata[]>;

export function assertFreshnessDiversity(options: {
  lenses: LensFreshnessInput[];
  articles: ArticleFreshnessInput[];
  minimumLensEntries?: number;
  minimumArticleEntries?: number;
  minimumDistinctPublishedDates?: number;
}): void;

export function buildRouteFreshness(options: {
  lenses: LensFreshnessInput[];
  articles: ArticleFreshnessInput[];
  makerSlugs: string[];
  mountIds?: string[];
  formatIds?: string[];
  authors?: AuthorRouteInput[];
  makerDetailsFreshness: FreshnessEntry | null;
  fallbackDate: string;
}): Record<string, FreshnessEntry>;
