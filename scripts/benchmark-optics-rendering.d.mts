export const BENCHMARK_RUN_RETENTION_TRIGGER: number;

export interface BenchmarkRunnerOptions {
  dryRun: boolean;
  reportOnly: boolean;
  iterations: number | undefined;
  warmups: number | undefined;
  heavy: boolean;
  memory: boolean;
}

export function parseArgs(argv: readonly string[]): BenchmarkRunnerOptions;

export function pruneOldBenchmarkRunFiles(runsDir: string, trigger?: number): string[];
