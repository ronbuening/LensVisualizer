export interface FreshnessEntry {
  publishedOn: string;
  publishedAt?: string;
  publishedCommit?: string | null;
  lastModified: string;
  lastModifiedAt?: string;
  lastModifiedCommit?: string | null;
}

export interface PublicationEntry extends FreshnessEntry {
  name?: string;
  title?: string;
  key?: string;
  slug?: string;
  url?: string;
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

/** A teleconverter page is as fresh as the newest of the converter file and the host lenses it lists. */
export interface TeleconverterRouteInput {
  key: string;
  freshness: FreshnessEntry;
  compatibleLensKeys: string[];
}

/** Runs as `execFileSync` does: a string with `encoding`, the bytes without one. */
export type ExecFileSyncLike = (
  file: string,
  args: string[],
  options: { cwd?: string; encoding?: string; input?: string; maxBuffer?: number },
) => string | Uint8Array;

export function assertFullGitHistory(options?: {
  cwd?: string;
  execFileImpl?: ExecFileSyncLike;
  allowFetch?: boolean;
}): void;

export interface GitLogEntry {
  on: string;
  at: string;
  commit: string | null;
  subject: string | null;
}

export function isFormatOnlyCommit(
  entry: { commit: string | null; subject?: string | null },
  listed?: ReadonlySet<string>,
): boolean;

export function parseGitLogDates(
  raw: string,
  options?: { isFormatOnly?: (entry: GitLogEntry) => boolean },
): FreshnessEntry | null;

export function readTrackedFiles(options: {
  cwd: string;
  repoDir: string;
  suffix: string;
  execFileImpl?: ExecFileSyncLike;
}): Array<{ path: string; content: string }>;

/** File dates from one read of the repository's history, following renames but not copies. */
export interface GitHistory {
  /** The `%cI%x09%H%x09%s` line of each commit in the file's history, newest first. */
  log(filePath: string): string;
  fileFreshness(filePath: string, options?: { fallbackDate?: string }): FreshnessEntry | null;
  /** The dates of the first path that has history, else the fallback date's. */
  firstFileFreshness(filePaths: string[], options?: { fallbackDate?: string }): FreshnessEntry | null;
}

export function gitHistory(options?: { cwd?: string; execFileImpl?: ExecFileSyncLike }): GitHistory;

export function mapLimit<T, R>(
  items: T[],
  limit: number,
  mapper: (item: T, index: number) => R | Promise<R>,
): Promise<R[]>;

export function combineFreshnessEntries(
  entries: Array<FreshnessEntry | null | undefined>,
  fallbackDate: string,
): FreshnessEntry;

export function comparePublicationEntries<T extends PublicationEntry>(a: T, b: T): number;

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
  getFreshness?: (
    filePaths: string[],
    options: { cwd: string; fallbackDate: string },
  ) => FreshnessEntry | null | Promise<FreshnessEntry | null>;
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
  teleconverters?: TeleconverterRouteInput[];
  makerDetailsFreshness: FreshnessEntry | null;
  assigneeCorporateHistoryFreshness?: FreshnessEntry | null;
  fallbackDate: string;
}): Record<string, FreshnessEntry>;

export function projectClientMetadata<A extends Record<string, unknown>, B, C>(metadata: {
  lensFreshness: Record<string, FreshnessEntry & { publicationOrder?: number }>;
  routeFreshness: Record<string, FreshnessEntry>;
  articles: A[];
  makerSlugs: string[];
  authors: B[];
  assignees: C[];
}): {
  lensFreshness: Record<string, Pick<FreshnessEntry, "publishedOn" | "lastModified"> & { publicationOrder?: number }>;
  routeFreshness: Record<string, Pick<FreshnessEntry, "publishedOn" | "lastModified">>;
  articles: Partial<
    Pick<
      A,
      Extract<
        keyof A,
        | "slug"
        | "title"
        | "summary"
        | "tag"
        | "series"
        | "seriesOrder"
        | "toc"
        | "publishedOn"
        | "lastModified"
        | "file"
      >
    >
  >[];
  makerSlugs: string[];
  authors: B[];
  assignees: C[];
};
