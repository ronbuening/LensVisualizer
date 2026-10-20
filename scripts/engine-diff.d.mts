export interface EngineDiffOptions {
  base: string;
  tier: string;
  changeClass: string;
  shard: { index: number; count: number } | null;
  lens: string | null;
  exceptions: string | null;
  out: string | null;
}

export const USAGE: string;

export function parseArgs(argv: readonly string[]): EngineDiffOptions;

export function runEngineDiff(
  options: EngineDiffOptions,
  log?: (line: string) => void,
  warn?: (line: string) => void,
): Promise<{ passed: boolean; outDir: string }>;

/** What `renderTransitionsReport` reads of a run's `summary.transitions`. */
export interface TransitionsReportInput {
  breached: { units: number; samples: readonly string[] };
  declared: readonly {
    line: string;
    outcome: string;
    differences: number;
    covered?: readonly { path: string; kind: string; base: string; head: string }[];
  }[];
}

export function renderTransitionsReport(
  transitions: TransitionsReportInput,
  lines: readonly string[],
  omitted: number,
): string;
