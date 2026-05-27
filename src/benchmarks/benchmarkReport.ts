export const BENCHMARK_SCHEMA_VERSION = 1;

export type BenchmarkStatus = "ok" | "skipped" | "error";
export type MainBenchmarkCategory = "build" | "layout" | "rays" | "analysis" | "svgRender" | "total";

export interface NumericSummary {
  min: number;
  median: number;
  mean: number;
  p95: number;
  max: number;
}

export interface BenchmarkStats extends NumericSummary {
  iterations: number;
  warmups: number;
  heapDeltaBytes?: NumericSummary;
}

export interface BenchmarkEntry {
  status: BenchmarkStatus;
  stats?: BenchmarkStats;
  reason?: string;
  message?: string;
  output?: Record<string, number | string | boolean | null>;
}

export interface BenchmarkSkip {
  lensKey: string;
  scenarioId: string;
  category: string;
  reason: string;
}

export interface BenchmarkScenarioResults {
  build: BenchmarkEntry;
  layout: BenchmarkEntry;
  rays: BenchmarkEntry;
  analysis: BenchmarkEntry;
  svgRender: BenchmarkEntry;
  total: BenchmarkEntry;
}

export interface AberrationPanelScenarioResults {
  data: Record<string, BenchmarkEntry>;
  render: Record<string, BenchmarkEntry>;
  skips: BenchmarkSkip[];
}

export interface BenchmarkRunRecord {
  schemaVersion: number;
  createdAt: string;
  git: {
    branch: string | null;
    commit: string | null;
    shortCommit: string | null;
    dirty: boolean | null;
  };
  environment: {
    node: string;
    v8: string;
    platform: string;
    arch: string;
    cpuModel: string | null;
    cpuCount: number | null;
    heapMode: "raw" | "gc";
  };
  config: {
    warmups: number;
    iterations: number;
    lensKeys: string[];
    scenarios: string[];
  };
  results: Record<string, Record<string, BenchmarkScenarioResults>>;
  aberrationPanels: Record<string, Record<string, AberrationPanelScenarioResults>>;
  summary: {
    main: Record<string, NumericSummary | null>;
    aberrationPanels: Record<string, NumericSummary | null>;
  };
  warnings: string[];
}

interface CategoryPoint {
  lensKey: string;
  scenarioId: string;
  category: string;
  medianMs: number;
  status: BenchmarkStatus;
  reason?: string;
}

const MAIN_CATEGORIES: MainBenchmarkCategory[] = ["build", "layout", "rays", "analysis", "svgRender", "total"];

export function formatRunFileName(createdAt: string, shortCommit: string | null = null): string {
  const stamp = createdAt.replace(/\.\d{3}Z$/, "Z").replace(/:/g, "-");
  return `${stamp}-${shortCommit ?? "no-git"}.json`;
}

export function sortRunRecords(records: readonly BenchmarkRunRecord[]): BenchmarkRunRecord[] {
  return [...records].sort((a, b) => a.createdAt.localeCompare(b.createdAt));
}

export function latestRunRecords(records: readonly BenchmarkRunRecord[], limit = 10): BenchmarkRunRecord[] {
  return sortRunRecords(records).slice(-limit);
}

export function summarizeNumbers(values: readonly number[]): NumericSummary | null {
  const finite = values.filter(Number.isFinite).sort((a, b) => a - b);
  if (finite.length === 0) return null;
  return {
    min: finite[0],
    median: quantileSorted(finite, 0.5),
    mean: finite.reduce((sum, value) => sum + value, 0) / finite.length,
    p95: quantileSorted(finite, 0.95),
    max: finite[finite.length - 1],
  };
}

export function summarizeRun(record: BenchmarkRunRecord): BenchmarkRunRecord["summary"] {
  const main: Record<string, NumericSummary | null> = {};
  for (const category of MAIN_CATEGORIES) {
    main[category] = summarizeNumbers(collectMainCategoryPoints(record, category).map((point) => point.medianMs));
  }

  const aberrationPanels: Record<string, NumericSummary | null> = {};
  for (const category of collectAberrationCategoryNames(record)) {
    aberrationPanels[category] = summarizeNumbers(
      collectAberrationCategoryPoints(record, category).map((point) => point.medianMs),
    );
  }

  return { main, aberrationPanels };
}

export function buildBenchmarkReport(recordsInput: readonly BenchmarkRunRecord[], limit = 10): string {
  const records = latestRunRecords(recordsInput, limit);
  const latest = records[records.length - 1];
  if (!latest) {
    return [
      "# Benchmark Report",
      "",
      "No benchmark records found.",
      "",
      `Expected run records in \`agent_docs/benchmarks/runs/\`.`,
      "",
    ].join("\n");
  }

  const previous = records.length >= 2 ? records[records.length - 2] : null;
  const lines: string[] = [];
  lines.push("# Benchmark Report");
  lines.push("");
  lines.push("Generated from the latest benchmark JSON records in `agent_docs/benchmarks/runs/`.");
  lines.push("");
  lines.push("## Latest Run");
  lines.push("");
  lines.push(`- Created: ${latest.createdAt}`);
  lines.push(`- Commit: ${latest.git.shortCommit ?? "unknown"}${latest.git.dirty ? " (dirty)" : ""}`);
  lines.push(`- Node: ${latest.environment.node} on ${latest.environment.platform}/${latest.environment.arch}`);
  lines.push(`- Iterations: ${latest.config.iterations} measured, ${latest.config.warmups} warmup`);
  lines.push(`- Runs compared: ${records.length}`);
  lines.push("");

  appendMainTrendTable(lines, latest, previous, records);
  appendAberrationTrendTable(lines, latest, previous, records);
  appendSlowestTable(lines, latest);
  appendSkipAndWarningSummary(lines, latest);

  return `${lines.join("\n")}\n`;
}

export function percentChange(current: number | null, baseline: number | null): number | null {
  if (current === null || baseline === null) return null;
  if (!Number.isFinite(current) || !Number.isFinite(baseline)) return null;
  if (Math.abs(baseline) < 1e-12) return Math.abs(current) < 1e-12 ? 0 : null;
  return ((current - baseline) / baseline) * 100;
}

export function formatMs(value: number | null | undefined): string {
  return value === null || value === undefined || !Number.isFinite(value) ? "n/a" : value.toFixed(2);
}

export function formatPercent(value: number | null): string {
  if (value === null || !Number.isFinite(value)) return "n/a";
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(1)}%`;
}

function appendMainTrendTable(
  lines: string[],
  latest: BenchmarkRunRecord,
  previous: BenchmarkRunRecord | null,
  records: readonly BenchmarkRunRecord[],
): void {
  lines.push("## Main Pipeline Trends");
  lines.push("");
  lines.push("| Category | Current median ms | vs previous | vs 10-run median |");
  lines.push("|---|---:|---:|---:|");

  for (const category of MAIN_CATEGORIES) {
    const current = latest.summary.main[category]?.median ?? null;
    const previousValue = previous?.summary.main[category]?.median ?? null;
    const seriesMedian =
      records.length >= 2
        ? summarizeNumbers(records.map((record) => record.summary.main[category]?.median).filter(isFiniteNumber))
            ?.median
        : null;
    lines.push(
      `| ${category} | ${formatMs(current)} | ${formatPercent(percentChange(current, previousValue))} | ${formatPercent(
        percentChange(current, seriesMedian ?? null),
      )} |`,
    );
  }
  lines.push("");
}

function appendAberrationTrendTable(
  lines: string[],
  latest: BenchmarkRunRecord,
  previous: BenchmarkRunRecord | null,
  records: readonly BenchmarkRunRecord[],
): void {
  const categories = collectAberrationCategoryNames(latest);
  lines.push("## Aberration Panel Trends");
  lines.push("");
  if (categories.length === 0) {
    lines.push("No aberration panel benchmark data recorded.");
    lines.push("");
    return;
  }

  lines.push("| Panel category | Current median ms | vs previous | vs 10-run median |");
  lines.push("|---|---:|---:|---:|");
  for (const category of categories) {
    const current = latest.summary.aberrationPanels[category]?.median ?? null;
    const previousValue = previous?.summary.aberrationPanels[category]?.median ?? null;
    const seriesMedian =
      records.length >= 2
        ? summarizeNumbers(
            records.map((record) => record.summary.aberrationPanels[category]?.median).filter(isFiniteNumber),
          )?.median
        : null;
    lines.push(
      `| ${category} | ${formatMs(current)} | ${formatPercent(percentChange(current, previousValue))} | ${formatPercent(
        percentChange(current, seriesMedian ?? null),
      )} |`,
    );
  }
  lines.push("");
}

function appendSlowestTable(lines: string[], latest: BenchmarkRunRecord): void {
  const mainPoints = MAIN_CATEGORIES.flatMap((category) => collectMainCategoryPoints(latest, category));
  const aberrationPoints = collectAberrationCategoryNames(latest).flatMap((category) =>
    collectAberrationCategoryPoints(latest, category),
  );
  const slowestByCategory = new Map<string, CategoryPoint>();
  for (const point of [...mainPoints, ...aberrationPoints]) {
    const current = slowestByCategory.get(point.category);
    if (!current || point.medianMs > current.medianMs) slowestByCategory.set(point.category, point);
  }
  const slowest = [...slowestByCategory.values()].sort((a, b) => b.medianMs - a.medianMs);

  lines.push("## Slowest Current Cases");
  lines.push("");
  if (slowest.length === 0) {
    lines.push("No successful benchmark cases recorded.");
    lines.push("");
    return;
  }

  lines.push("| Category | Lens | Scenario | Median ms |");
  lines.push("|---|---|---|---:|");
  for (const point of slowest) {
    lines.push(`| ${point.category} | ${point.lensKey} | ${point.scenarioId} | ${formatMs(point.medianMs)} |`);
  }
  lines.push("");
}

function appendSkipAndWarningSummary(lines: string[], latest: BenchmarkRunRecord): void {
  const skips = Object.values(latest.aberrationPanels).flatMap((byScenario) =>
    Object.values(byScenario).flatMap((result) => result.skips),
  );
  lines.push("## Skips And Warnings");
  lines.push("");
  lines.push(`- Aberration panel skips: ${skips.length}`);
  lines.push(`- Warnings: ${latest.warnings.length}`);
  if (latest.warnings.length > 0) {
    for (const warning of latest.warnings.slice(0, 12)) lines.push(`- ${warning}`);
  }
  lines.push("");
}

function collectMainCategoryPoints(record: BenchmarkRunRecord, category: MainBenchmarkCategory): CategoryPoint[] {
  const points: CategoryPoint[] = [];
  for (const [lensKey, byScenario] of Object.entries(record.results)) {
    for (const [scenarioId, scenario] of Object.entries(byScenario)) {
      const entry = scenario[category];
      if (entry.status === "ok" && entry.stats) {
        points.push({ lensKey, scenarioId, category, medianMs: entry.stats.median, status: entry.status });
      }
    }
  }
  return points;
}

function collectAberrationCategoryPoints(record: BenchmarkRunRecord, category: string): CategoryPoint[] {
  const points: CategoryPoint[] = [];
  const [group, id] = splitAberrationCategory(category);
  if (!group || !id) return points;

  for (const [lensKey, byScenario] of Object.entries(record.aberrationPanels)) {
    for (const [scenarioId, scenario] of Object.entries(byScenario)) {
      const entry = scenario[group][id];
      if (entry?.status === "ok" && entry.stats) {
        points.push({ lensKey, scenarioId, category, medianMs: entry.stats.median, status: entry.status });
      }
    }
  }
  return points;
}

function collectAberrationCategoryNames(record: BenchmarkRunRecord): string[] {
  const names = new Set<string>();
  for (const byScenario of Object.values(record.aberrationPanels)) {
    for (const scenario of Object.values(byScenario)) {
      for (const key of Object.keys(scenario.data)) names.add(`data.${key}`);
      for (const key of Object.keys(scenario.render)) names.add(`render.${key}`);
    }
  }
  return [...names].sort((a, b) => a.localeCompare(b));
}

function splitAberrationCategory(category: string): ["data" | "render" | null, string | null] {
  const dot = category.indexOf(".");
  if (dot < 0) return [null, null];
  const group = category.slice(0, dot);
  if (group !== "data" && group !== "render") return [null, null];
  return [group, category.slice(dot + 1)];
}

function quantileSorted(values: readonly number[], q: number): number {
  if (values.length === 1) return values[0];
  const pos = (values.length - 1) * q;
  const lower = Math.floor(pos);
  const upper = Math.ceil(pos);
  if (lower === upper) return values[lower];
  return values[lower] + (values[upper] - values[lower]) * (pos - lower);
}

function isFiniteNumber(value: number | null | undefined): value is number {
  return typeof value === "number" && Number.isFinite(value);
}
