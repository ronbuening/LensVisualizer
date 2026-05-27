export const BENCHMARK_RUN_RETENTION_TRIGGER: number;

export function pruneOldBenchmarkRunFiles(runsDir: string, trigger?: number): string[];
