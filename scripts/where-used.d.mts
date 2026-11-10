/** Types for scripts/where-used.mjs; its module header describes the two queries. */

export interface UsageSite {
  /** Repo-relative path with `/` separators. */
  file: string;
  /** 1-based line number. */
  line: number;
  /** The line's trimmed source text. */
  text: string;
}

export interface UsageResult {
  target: string;
  /** The queried export, or null for a file query. */
  symbol: string | null;
  /** Symbol query: where the original declaration is. */
  declarations: UsageSite[];
  /** Symbol query: barrels that re-export it, `export *` included. */
  reexports: UsageSite[];
  /** Symbol query: its uses. File query: literals that resolve to the file. */
  references: UsageSite[];
  /** File query: imports of the file's declarations through a barrel. */
  throughReexports: UsageSite[];
}

export function findUsages(options: { root?: string; target: string; symbol?: string }): UsageResult;
export function formatUsages(result: UsageResult): string;
