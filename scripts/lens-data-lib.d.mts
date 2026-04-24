export interface LensIdentity {
  key: string | null;
  name: string | null;
  maker: string | null;
}

export interface LensFreshness {
  publishedOn: string;
  lastModified: string;
}

export interface TrackedLensRecord {
  dataPath: string;
  analysisPath: string;
}

export interface LensDataRecord {
  key: string;
  name: string | null;
  makerSlug: string;
  freshness: LensFreshness;
}

export interface LensMoveFile {
  from: string;
  to: string;
}

export interface LensMovePlanEntry {
  key: string | null;
  makerSlug: string;
  targetDir: string;
  data: LensMoveFile;
  analysis: LensMoveFile | null;
}

export interface OrganizeRootLensFilesResult {
  movePlan: LensMovePlanEntry[];
  movedLensCount: number;
  movedFileCount: number;
}

export const MAKER_PREFIXES: Array<{ prefix: string; slug: string }>;

export function deriveMakerSlug(nameOrMaker: string): string;
export function extractLensIdentityContent(content: string): LensIdentity;
export function extractLensIdentity(
  filePath: string,
  options?: { readFile?: (filePath: string, encoding: string) => string },
): LensIdentity;
export function analysisRelativePathForDataPath(relativeDataPath: string): string;
export function rewriteLensDataTypesImport(
  filePath: string,
  options?: {
    readFile?: (filePath: string, encoding: string) => string;
    writeFile?: (filePath: string, content: string, encoding: string) => void;
  },
): void;

export function collectTrackedLensRecordsByKey(options?: {
  rootDir?: string;
  lensDataDir?: string;
  execFile?: (file: string, args: string[], options: { cwd: string; encoding: string }) => string;
}): Record<string, TrackedLensRecord>;

export function collectLensData(options?: {
  rootDir: string;
  lensDataDir?: string;
  fallbackDate: string;
  trackedLensRecordsByKey?: Record<string, TrackedLensRecord>;
  readdir?: (path: string, options?: { recursive?: boolean }) => Array<string | unknown>;
  exists?: (path: string) => boolean;
  getFreshness?: (
    paths: string[],
    options?: { cwd?: string; fallbackDate?: string },
  ) => LensFreshness | null;
  combineFreshness?: (
    entries: Array<LensFreshness | null | undefined>,
    fallbackDate: string,
  ) => LensFreshness;
}): LensDataRecord[];

export function collectRootLensMovePlan(
  lensDataDir: string,
  options?: {
    exists?: (path: string) => boolean;
    readdir?: (path: string) => Array<string | unknown>;
  },
): LensMovePlanEntry[];

export function organizeRootLensFiles(
  lensDataDir: string,
  options?: {
    exists?: (path: string) => boolean;
    mkdir?: (path: string, options?: { recursive?: boolean }) => unknown;
    rename?: (from: string, to: string) => void;
    log?: (message: string) => void;
    rewriteImport?: (filePath: string) => void;
  },
): OrganizeRootLensFilesResult;
