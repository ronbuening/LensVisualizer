/**
 * Shared benchmark schema and Markdown report aggregation helpers.
 *
 * Benchmark run JSON is treated as historical data under `agent_docs/benchmarks/runs/`.
 * The helpers in this module therefore keep schema compatibility explicit: records may
 * contain older `total` timings, while new records write separate cold and warm totals.
 * All timing summaries are measured in milliseconds unless a field name states another
 * unit, such as `heapDeltaBytes`.
 */

/** Current persisted benchmark JSON schema version. Increment when run-record shape changes. */
export const BENCHMARK_SCHEMA_VERSION = 2;

/** Outcome for one measured benchmark category. */
export type BenchmarkStatus = "ok" | "skipped" | "error";

/** Top-level optics/rendering pipeline categories written by schema 2 benchmark runs. */
export type MainBenchmarkCategory = "build" | "layout" | "rays" | "analysis" | "svgRender" | "totalCold" | "totalWarm";

/** Schema 1 category retained only so old run records can still be summarized. */
export type LegacyMainBenchmarkCategory = "total";

/** Fine-grained analysis categories measured inside the broader `analysis` pipeline step. */
export type AnalysisBenchmarkCategory =
  | "summary"
  | "distortionCurve"
  | "distortionGrid"
  | "vignetting"
  | "pupils"
  | "bokehPair"
  | "bestFocus";

/** Distribution summary for finite numeric samples. */
export interface NumericSummary {
  /** Fastest observed sample. */
  min: number;
  /** Linear-interpolated 50th percentile of sorted samples. */
  median: number;
  /** Arithmetic average across all finite samples. */
  mean: number;
  /** Linear-interpolated 95th percentile of sorted samples. */
  p95: number;
  /** Slowest observed sample. */
  max: number;
}

/** Per-category benchmark statistics. Durations are in milliseconds. */
export interface BenchmarkStats extends NumericSummary {
  /** Number of measured samples retained in the summary. */
  iterations: number;
  /** Number of unrecorded warmup calls made before measurement. */
  warmups: number;
  /** Optional heap-used delta summary in bytes, present only when the runtime exposes memory data. */
  heapDeltaBytes?: NumericSummary;
}

/** Persisted result for one category in one lens/scenario benchmark cell. */
export interface BenchmarkEntry {
  status: BenchmarkStatus;
  /** Timing and optional heap statistics for successful entries. */
  stats?: BenchmarkStats;
  /** Human-readable reason for intentional skips, commonly folded-optics UI guardrails. */
  reason?: string;
  /** Error message captured when the measured callback throws or records no samples. */
  message?: string;
  /** Lightweight facts proving the measured work executed without serializing large objects. */
  output?: Record<string, number | string | boolean | null>;
}

/** Explicit skip record for aberration-panel sections that are intentionally not exercised. */
export interface BenchmarkSkip {
  lensKey: string;
  scenarioId: string;
  category: string;
  reason: string;
}

/** Main benchmark results for one lens under one scenario. */
export interface BenchmarkScenarioResults {
  build: BenchmarkEntry;
  layout: BenchmarkEntry;
  rays: BenchmarkEntry;
  analysis: BenchmarkEntry;
  analysisBreakdown?: Record<AnalysisBenchmarkCategory, BenchmarkEntry>;
  svgRender: BenchmarkEntry;
  totalCold?: BenchmarkEntry;
  totalWarm?: BenchmarkEntry;
  /** Schema 1 compatibility. New records write totalCold/totalWarm instead. */
  total?: BenchmarkEntry;
}

/** Data-computation and server-render timings for the aberrations drawer. */
export interface AberrationPanelScenarioResults {
  data: Record<string, BenchmarkEntry>;
  render: Record<string, BenchmarkEntry>;
  skips: BenchmarkSkip[];
}

/** Complete persisted benchmark run record. */
export interface BenchmarkRunRecord {
  /** Schema used to interpret optional and legacy fields in the JSON record. */
  schemaVersion: number;
  /** ISO timestamp used for chronological sorting and run filenames. */
  createdAt: string;
  /** Git metadata captured by the runner; nullable when unavailable outside a checkout. */
  git: {
    branch: string | null;
    commit: string | null;
    shortCommit: string | null;
    dirty: boolean | null;
  };
  /** Runtime details that affect performance comparisons between machines or Node versions. */
  environment: {
    node: string;
    v8: string;
    platform: string;
    arch: string;
    cpuModel: string | null;
    cpuCount: number | null;
    heapMode: "raw" | "gc";
  };
  /** Benchmark input set and sampling counts used for this record. */
  config: {
    warmups: number;
    iterations: number;
    lensKeys: string[];
    scenarios: string[];
  };
  /** Main pipeline results keyed by lens key, then scenario id. */
  results: Record<string, Record<string, BenchmarkScenarioResults>>;
  /** Aberration panel timings keyed by lens key, then scenario id. */
  aberrationPanels: Record<string, Record<string, AberrationPanelScenarioResults>>;
  /** Precomputed aggregate summaries used by the report generator. */
  summary: {
    main: Record<string, NumericSummary | null>;
    analysis?: Record<string, NumericSummary | null>;
    aberrationPanels: Record<string, NumericSummary | null>;
  };
  /** Non-fatal runner warnings, such as dry-run notices. */
  warnings: string[];
}

/** Flattened successful category timing used to find per-category slowest cases. */
interface CategoryPoint {
  lensKey: string;
  scenarioId: string;
  category: string;
  medianMs: number;
  status: BenchmarkStatus;
  reason?: string;
}

/** Current report order for top-level benchmark categories. */
const MAIN_CATEGORIES: MainBenchmarkCategory[] = [
  "build",
  "layout",
  "rays",
  "analysis",
  "svgRender",
  "totalCold",
  "totalWarm",
];

/** Current report order for analysis breakdown rows. */
const ANALYSIS_CATEGORIES: AnalysisBenchmarkCategory[] = [
  "summary",
  "distortionCurve",
  "distortionGrid",
  "vignetting",
  "pupils",
  "bokehPair",
  "bestFocus",
];

/**
 * Builds a stable run-record filename from the ISO timestamp and current short commit.
 *
 * Colons are replaced because the file lives in a cross-platform docs directory, and
 * milliseconds are dropped to keep filenames readable while preserving chronological
 * ordering at normal manual-run cadence.
 */
export function formatRunFileName(createdAt: string, shortCommit: string | null = null): string {
  const stamp = createdAt.replace(/\.\d{3}Z$/, "Z").replace(/:/g, "-");
  return `${stamp}-${shortCommit ?? "no-git"}.json`;
}

/** Returns benchmark records in ascending creation time without mutating the caller's array. */
export function sortRunRecords(records: readonly BenchmarkRunRecord[]): BenchmarkRunRecord[] {
  return [...records].sort((a, b) => a.createdAt.localeCompare(b.createdAt));
}

/** Returns the newest records by `createdAt`, preserving chronological order within the returned slice. */
export function latestRunRecords(records: readonly BenchmarkRunRecord[], limit = 10): BenchmarkRunRecord[] {
  return sortRunRecords(records).slice(-limit);
}

/**
 * Summarizes finite numeric samples with min/median/mean/p95/max.
 *
 * Non-finite samples are ignored so a single failed measurement cannot poison a whole
 * aggregate. The function returns `null` when no finite samples remain.
 */
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

/**
 * Recomputes aggregate summaries for all successful cells in one run record.
 *
 * The summary is intentionally derived from each entry's median instead of raw samples,
 * because persisted records keep only per-cell statistics. Skipped and errored entries
 * are excluded from aggregates.
 */
export function summarizeRun(record: BenchmarkRunRecord): BenchmarkRunRecord["summary"] {
  const main: Record<string, NumericSummary | null> = {};
  for (const category of MAIN_CATEGORIES) {
    main[category] = summarizeNumbers(collectMainCategoryPoints(record, category).map((point) => point.medianMs));
  }

  const analysis: Record<string, NumericSummary | null> = {};
  for (const category of ANALYSIS_CATEGORIES) {
    analysis[category] = summarizeNumbers(
      collectAnalysisCategoryPoints(record, category).map((point) => point.medianMs),
    );
  }

  const aberrationPanels: Record<string, NumericSummary | null> = {};
  for (const category of collectAberrationCategoryNames(record)) {
    aberrationPanels[category] = summarizeNumbers(
      collectAberrationCategoryPoints(record, category).map((point) => point.medianMs),
    );
  }

  return { main, analysis, aberrationPanels };
}

/**
 * Builds the human-readable Markdown report from persisted benchmark records.
 *
 * The report compares the latest run with both the previous run and the median of the
 * selected record window. It does not read or write the filesystem; script code owns
 * record discovery, pruning, and report persistence.
 */
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
  appendAnalysisTrendTable(lines, latest, previous, records);
  appendAberrationTrendTable(lines, latest, previous, records);
  appendSlowestTable(lines, latest);
  appendSkipAndWarningSummary(lines, latest);

  return `${lines.join("\n")}\n`;
}

/**
 * Computes percentage change where positive means the current value is larger/slower.
 *
 * A zero baseline is only meaningful when the current value is also effectively zero;
 * otherwise the percentage is undefined and the report prints `n/a`.
 */
export function percentChange(current: number | null, baseline: number | null): number | null {
  if (current === null || baseline === null) return null;
  if (!Number.isFinite(current) || !Number.isFinite(baseline)) return null;
  if (Math.abs(baseline) < 1e-12) return Math.abs(current) < 1e-12 ? 0 : null;
  return ((current - baseline) / baseline) * 100;
}

/** Formats a millisecond value for report tables, using `n/a` for missing or non-finite data. */
export function formatMs(value: number | null | undefined): string {
  return value === null || value === undefined || !Number.isFinite(value) ? "n/a" : value.toFixed(2);
}

/** Formats a percentage delta with an explicit positive sign for slower regressions. */
export function formatPercent(value: number | null): string {
  if (value === null || !Number.isFinite(value)) return "n/a";
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(1)}%`;
}

/** Appends trend rows for top-level pipeline categories in schema/report order. */
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
    const current = mainSummaryMedian(latest, category);
    const previousValue = previous ? mainSummaryMedian(previous, category) : null;
    const seriesMedian =
      records.length >= 2
        ? summarizeNumbers(records.map((record) => mainSummaryMedian(record, category)).filter(isFiniteNumber))?.median
        : null;
    lines.push(
      `| ${category} | ${formatMs(current)} | ${formatPercent(percentChange(current, previousValue))} | ${formatPercent(
        percentChange(current, seriesMedian ?? null),
      )} |`,
    );
  }
  lines.push("");
}

/** Appends trend rows for each fine-grained analysis category. */
function appendAnalysisTrendTable(
  lines: string[],
  latest: BenchmarkRunRecord,
  previous: BenchmarkRunRecord | null,
  records: readonly BenchmarkRunRecord[],
): void {
  lines.push("## Analysis Work Trends");
  lines.push("");
  lines.push("| Analysis category | Current median ms | vs previous | vs 10-run median |");
  lines.push("|---|---:|---:|---:|");

  for (const category of ANALYSIS_CATEGORIES) {
    const current = latest.summary.analysis?.[category]?.median ?? null;
    const previousValue = previous?.summary.analysis?.[category]?.median ?? null;
    const seriesMedian =
      records.length >= 2
        ? summarizeNumbers(records.map((record) => record.summary.analysis?.[category]?.median).filter(isFiniteNumber))
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

/** Appends trend rows for every aberration-panel category present in the latest run. */
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

/**
 * Appends the slowest successful lens/scenario case for each category.
 *
 * This table favors triage over exhaustive output: each category appears once, carrying
 * the worst current median in the latest run.
 */
function appendSlowestTable(lines: string[], latest: BenchmarkRunRecord): void {
  const mainPoints = MAIN_CATEGORIES.flatMap((category) => collectMainCategoryPoints(latest, category));
  const analysisPoints = ANALYSIS_CATEGORIES.flatMap((category) => collectAnalysisCategoryPoints(latest, category));
  const aberrationPoints = collectAberrationCategoryNames(latest).flatMap((category) =>
    collectAberrationCategoryPoints(latest, category),
  );
  const slowestByCategory = new Map<string, CategoryPoint>();
  for (const point of [...mainPoints, ...analysisPoints, ...aberrationPoints]) {
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

/** Appends explicit skip counts and the first few non-fatal warnings captured by the runner. */
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

/** Collects successful main-category medians from all lens/scenario cells in one record. */
function collectMainCategoryPoints(record: BenchmarkRunRecord, category: MainBenchmarkCategory): CategoryPoint[] {
  const points: CategoryPoint[] = [];
  for (const [lensKey, byScenario] of Object.entries(record.results)) {
    for (const [scenarioId, scenario] of Object.entries(byScenario)) {
      const entry = mainEntryForCategory(scenario, category);
      if (entry.status === "ok" && entry.stats) {
        points.push({ lensKey, scenarioId, category, medianMs: entry.stats.median, status: entry.status });
      }
    }
  }
  return points;
}

/** Collects successful analysis-breakdown medians from all lens/scenario cells in one record. */
function collectAnalysisCategoryPoints(
  record: BenchmarkRunRecord,
  category: AnalysisBenchmarkCategory,
): CategoryPoint[] {
  const points: CategoryPoint[] = [];
  for (const [lensKey, byScenario] of Object.entries(record.results)) {
    for (const [scenarioId, scenario] of Object.entries(byScenario)) {
      const entry = scenario.analysisBreakdown?.[category];
      if (entry?.status === "ok" && entry.stats) {
        points.push({
          lensKey,
          scenarioId,
          category: `analysis.${category}`,
          medianMs: entry.stats.median,
          status: entry.status,
        });
      }
    }
  }
  return points;
}

/** Resolves schema 2 main categories while preserving schema 1 `total` compatibility. */
function mainEntryForCategory(scenario: BenchmarkScenarioResults, category: MainBenchmarkCategory): BenchmarkEntry {
  if (category === "totalCold") return scenario.totalCold ?? scenario.total ?? { status: "skipped", reason: "missing" };
  if (category === "totalWarm") return scenario.totalWarm ?? { status: "skipped", reason: "missing" };
  return scenario[category];
}

/** Reads a precomputed main-category median with schema 1 `total` fallback. */
function mainSummaryMedian(record: BenchmarkRunRecord, category: MainBenchmarkCategory): number | null {
  if (category === "totalCold") {
    return record.summary.main.totalCold?.median ?? record.summary.main.total?.median ?? null;
  }
  return record.summary.main[category]?.median ?? null;
}

/** Collects successful aberration data/render medians for a `data.*` or `render.*` category name. */
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

/** Returns all aberration data/render category names observed in one record. */
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

/** Parses report category names like `data.coma` or `render.aberrationsTab`. */
function splitAberrationCategory(category: string): ["data" | "render" | null, string | null] {
  const dot = category.indexOf(".");
  if (dot < 0) return [null, null];
  const group = category.slice(0, dot);
  if (group !== "data" && group !== "render") return [null, null];
  return [group, category.slice(dot + 1)];
}

/** Returns a linearly interpolated quantile from an already sorted finite sample array. */
function quantileSorted(values: readonly number[], q: number): number {
  if (values.length === 1) return values[0];
  const pos = (values.length - 1) * q;
  const lower = Math.floor(pos);
  const upper = Math.ceil(pos);
  if (lower === upper) return values[lower];
  return values[lower] + (values[upper] - values[lower]) * (pos - lower);
}

/** Type guard used after optional median lookups. */
function isFiniteNumber(value: number | null | undefined): value is number {
  return typeof value === "number" && Number.isFinite(value);
}
