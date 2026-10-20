/** Shared benchmark records, completed-work tallies and single-commit trend reports. */

export const BENCHMARK_SCHEMA_VERSION = 3;

/** Measured samples per case in a run that names no number. */
export const DEFAULT_BENCHMARK_ITERATIONS = 3;

/** Outcome for one measured benchmark category. */
export type BenchmarkStatus = "ok" | "skipped" | "error";

/** Top-level optics/rendering pipeline categories written by benchmark runs since schema 2. */
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
  | "bestFocus"
  | "perspectiveFocus"
  | "perspectiveFieldAberrations"
  | "perspectiveChromatic"
  | "perspectiveDistortion"
  | "perspectiveVignetting"
  | "perspectivePupils";

/** Persisted inputs for one benchmark scenario, including physical lens movement. */
export interface BenchmarkScenarioConfigSnapshot {
  id: string;
  focusT: number;
  zoomT: number;
  aberrationT: number;
  stopdownT: number;
  movement: {
    shiftMm: number;
    tiltDeg: number;
  };
  rayDensity: "normal" | "dense" | "diagnostic";
  rayTracksF: boolean;
  showOnAxis: boolean;
  showOffAxis: "off" | "trueAngle" | "edge";
  showChromatic: boolean;
  analysisQuality: "interactive" | "settled";
}

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
  /** Every measured duration in run order, warmups excluded; retained for session records. */
  samplesMs?: number[];
}

/** Small serializable facts about what one call of a case completed. */
export type BenchmarkFacts = Record<string, number | string | boolean | null>;

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
  output?: BenchmarkFacts;
  /**
   * What the case completed, from the untimed pass: for each result the case marked, the place of that result's
   * tallies in the record's `workTallies`. Written to records under `sessions/` only.
   */
  work?: number[];
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
  analysisBreakdown?: Partial<Record<AnalysisBenchmarkCategory, BenchmarkEntry>>;
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

/** One lens under one scenario. */
export interface BenchmarkCellRef {
  lensKey: string;
  scenarioId: string;
}

/**
 * Memory in use after forced collections, in bytes. A typed array keeps its numbers outside the JavaScript heap,
 * so the heap figure alone does not see a cache of them; the session reads both and compares their sum.
 */
export interface HeapReading {
  /** `process.memoryUsage().heapUsed`. */
  heapUsedBytes: number;
  /** `process.memoryUsage().arrayBuffers`: the backing stores of typed arrays and array buffers. */
  arrayBuffersBytes: number;
  /** The two together: the retained heap. */
  totalBytes: number;
}

/** Retained heap around one scripted memory session. */
export interface MemorySessionReport {
  lensKeys: string[];
  cycles: number;
  /** Lens states computed in one cycle, over every lens. */
  statesPerCycle: number;
  /** Before the first lens is built, with the bundle and its catalog loaded. */
  heapBefore: HeapReading;
  /** After each cycle's last lens was dropped. */
  heapAfterCycle: HeapReading[];
  /** After the last cycle: the retained heap that the memory gate reads. */
  heapAtEnd: HeapReading;
  /** `heapAtEnd.totalBytes - heapBefore.totalBytes`: what the session itself left behind. */
  retainedGrowthBytes: number;
}

/** The memory session of a `--memory` run, measured in a fresh child process. */
export interface BenchmarkMemoryReport {
  head: MemorySessionReport;
}

/** What the run's untimed pass found for one case. */
export interface UntimedCaseResult {
  /** The tallies of each result the case marked, one set per label. Absent when the case threw. */
  work?: Record<string, number>[];
  /** Set when the case threw in the untimed pass. */
  message?: string;
}

/** The run's untimed pass: every case called once, for its completed work. */
export interface UntimedBenchmarkPass {
  cases: Record<string, UntimedCaseResult>;
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
    /** `gc` when collections were forced around what the record measures, as a memory session forces them. */
    heapMode: "raw" | "gc";
    /* The rest is written to records under `sessions/` only. */
    totalMemoryBytes?: number;
    osRelease?: string;
  };
  /** Benchmark input set and sampling counts used for this record. */
  config: {
    warmups: number;
    iterations: number;
    lensKeys: string[];
    scenarios: string[];
    /** Optional schema-2 extension. Older records retain only the scenario ids above. */
    scenarioSnapshots?: BenchmarkScenarioConfigSnapshot[];
    /** Present on a subset run: the lens/scenario cells that ran, in run order. */
    cells?: BenchmarkCellRef[];
    /**
     * Present on a subset run: `heavy` for the heavy set, `custom` for any other list of cells. A memory record
     * carries it for the lenses of that set.
     */
    caseSet?: "heavy" | "custom";
    /**
     * Present on a memory record, which runs none of the scenarios: the state a session sets each lens to first, and
     * what it then sweeps each control through, one control at a time.
     */
    memorySession?: {
      cycles: number;
      atRest: BenchmarkScenarioConfigSnapshot;
      sweeps: Record<string, readonly number[]>;
    };
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
  /**
   * The tallies that the entries' `work` points into, for all cases. A result is tallied in every case that
   * computes it, and alike for cases that completed the same work, so one set here stands for all of them.
   */
  workTallies?: Record<string, number>[];
  memory?: BenchmarkMemoryReport;
}

/** One case of a record with the place it holds there. */
export interface BenchmarkCaseRef {
  /** `lens:scenario:category`, as the benchmark entry labels the case. */
  id: string;
  lensKey: string;
  scenarioId: string;
  /** The category as the trend report names it. */
  category: string;
  entry: BenchmarkEntry;
}

/** The measured entries of one run: a whole record, or a subset record. */
type BenchmarkResults = Pick<BenchmarkRunRecord, "results" | "aberrationPanels">;

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
  "perspectiveFocus",
  "perspectiveFieldAberrations",
  "perspectiveChromatic",
  "perspectiveDistortion",
  "perspectiveVignetting",
  "perspectivePupils",
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
export function summarizeRun(
  record: Pick<BenchmarkRunRecord, "results" | "aberrationPanels">,
): BenchmarkRunRecord["summary"] {
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

/* A string member counts toward completed work when its name says it is a status. Other strings label a result or
 * classify it by a threshold on a float: they are tallied as present and their text is not read. */
const STATUS_MEMBER = /^(status|reason|support)$|(Status|Reason)$/;

/* An integer member counts when its name says it is a count of samples, rays or grid cells. */
const COUNT_MEMBER = /(Count|Rays|Size)$/;

/* Deep enough for a result that holds fields that hold samples that hold a status; past it a result is engine
 * internals, and an object there is tallied as present. */
const MAX_DIGEST_DEPTH = 4;

/**
 * Tally what a result holds, as counts that the last bits of a float cannot move.
 *
 * Every member is tallied in one way or another, so the tallies also say which members a result has:
 *
 * - a list, a typed array, a map or a set adds its length to `<path>.length`;
 * - a boolean adds one to `<path>=true` or `=false`, and a status string one to `<path>=<status>`;
 * - an integer count adds its value to `<path>`;
 * - null adds one to `<path>=null`, undefined to `=undefined`, and a number that is not finite to `=NaN`,
 *   `=Infinity` or `=-Infinity`;
 * - any other number adds one to `<path>=number` and any other string one to `=text`: the member is there, and
 *   what it holds is not read;
 * - an object adds its members under `<path>.<name>`, or one to `<path>=object` when it has none or lies deeper
 *   than `MAX_DIGEST_DEPTH`.
 *
 * The objects in a list share the list's path, so the tallies of a result's samples add up. Whatever else a list
 * holds is tallied under `<path>[]`, apart from its finite numbers and its strings, which the length alone counts.
 *
 * @param label - the path of the result itself, which names it within its case
 * @param value - what an engine call returned
 * @param into - the tallies of the running case, added to in place
 */
export function digestCompletedWork(label: string, value: unknown, into: Record<string, number>): void {
  digestValue(label, "", value, into, 0);
}

/**
 * Tally the elements of rendered markup, as one count of its opening tags. The length of the markup follows every
 * coordinate printed in it; the number of elements does not.
 *
 * @param markup - static markup of a rendered tree
 * @param into - the tallies of the running case, added to in place
 */
export function tallyMarkupElements(markup: string, into: Record<string, number>): void {
  bump(into, "markup.elements", markup.match(/<[A-Za-z]/g)?.length ?? 0);
}

/** Tally one value under its path. `name` is the member's own name, which decides how a string or a number counts. */
function digestValue(path: string, name: string, value: unknown, into: Record<string, number>, depth: number): void {
  if (value === null || value === undefined || typeof value === "boolean") bump(into, `${path}=${value}`, 1);
  else if (typeof value === "string") bump(into, `${path}=${STATUS_MEMBER.test(name) ? value : "text"}`, 1);
  else if (typeof value === "number") {
    if (!Number.isFinite(value)) bump(into, `${path}=${value}`, 1);
    else if (COUNT_MEMBER.test(name) && Number.isInteger(value)) bump(into, path, value);
    else bump(into, `${path}=number`, 1);
  } else if (typeof value !== "object") return;
  else if (Array.isArray(value)) {
    bump(into, `${path}.length`, value.length);
    for (const item of value) {
      if (typeof item === "string" || (typeof item === "number" && Number.isFinite(item))) continue;
      if (isRecord(item)) digestMembers(path, item, into, depth);
      else digestValue(`${path}[]`, "", item, into, depth);
    }
  } else if (ArrayBuffer.isView(value)) {
    bump(into, `${path}.length`, "length" in value ? Number(value.length) : value.byteLength);
  } else if (value instanceof Map || value instanceof Set) bump(into, `${path}.length`, value.size);
  else digestMembers(path, value, into, depth);
}

/** Tally the members of one object, which is itself tallied as present where it shows none. */
function digestMembers(path: string, value: object, into: Record<string, number>, depth: number): void {
  const members = depth < MAX_DIGEST_DEPTH ? Object.entries(value) : [];
  if (members.length === 0) bump(into, `${path}=object`, 1);
  for (const [name, member] of members) digestValue(`${path}.${name}`, name, member, into, depth + 1);
}

/** An object whose members are its content: not a list, a typed array, a map or a set. */
function isRecord(value: unknown): value is object {
  return (
    value !== null &&
    typeof value === "object" &&
    !Array.isArray(value) &&
    !ArrayBuffer.isView(value) &&
    !(value instanceof Map) &&
    !(value instanceof Set)
  );
}

function bump(into: Record<string, number>, fact: string, by: number): void {
  into[fact] = (into[fact] ?? 0) + by;
}

/* ── Records ── */

/**
 * List the cases of one run in the order the benchmark runs them, each with the id its entry is labelled with.
 *
 * @param record - a record, or a subset record
 * @returns every entry, skipped and failed ones included
 */
export function listBenchmarkCases(record: BenchmarkResults): BenchmarkCaseRef[] {
  const cases: BenchmarkCaseRef[] = [];
  for (const [lensKey, byScenario] of Object.entries(record.results)) {
    for (const [scenarioId, scenario] of Object.entries(byScenario)) {
      const add = (category: string, label: string, entry: BenchmarkEntry | undefined): void => {
        if (entry) cases.push({ id: `${lensKey}:${scenarioId}:${label}`, lensKey, scenarioId, category, entry });
      };
      for (const category of MAIN_CATEGORIES) {
        add(category, category, scenario[category]);
        if (category !== "analysis") continue;
        for (const job of ANALYSIS_CATEGORIES) {
          add(`analysis.${job}`, `analysis.${job}`, scenario.analysisBreakdown?.[job]);
        }
      }
      const panels = record.aberrationPanels[lensKey]?.[scenarioId];
      for (const group of ["data", "render"] as const) {
        for (const [name, entry] of Object.entries(panels?.[group] ?? {})) {
          add(`${group}.${name}`, `aberrationPanels:${group}.${name}`, entry);
        }
      }
    }
  }
  return cases;
}

/**
 * Put the run's untimed pass on the record's entries.
 *
 * @param record - the measured record
 * @param pass - what the untimed pass found, by case id
 * @param place - puts a result's tallies in the record's `workTallies` and returns where
 * @returns a warning for each case that threw in the untimed pass
 */
function attachUntimedPass(
  record: BenchmarkResults,
  pass: UntimedBenchmarkPass,
  place: (tallies: Record<string, number>) => number,
): string[] {
  const thrown: string[] = [];
  for (const { id, entry } of listBenchmarkCases(record)) {
    const found = pass.cases[id];
    if (!found) continue;
    if (found.work) entry.work = found.work.map(place);
    /* A case that threw when it was timed is in the record already, as its entry. */
    if (found.message !== undefined && entry.status !== "error") thrown.push(`${id}: ${found.message}`);
  }
  return thrown;
}

/**
 * Attach the untimed completed-work pass to a measured session record.
 *
 * @param record - the record of the timed pass, changed in place
 * @param pass - the completed-work tallies from the same bundle
 */
export function finishBenchmarkRecord(record: BenchmarkRunRecord, pass: UntimedBenchmarkPass): void {
  /* Equal tallies are kept once. The analysis results of a cell are tallied in the case of each, in the whole
   * analysis and in both totals: written out per case they are most of a record. */
  const workTallies: Record<string, number>[] = [];
  const places = new Map<string, number>();
  const place = (tallies: Record<string, number>): number => {
    const text = JSON.stringify(tallies);
    const known = places.get(text);
    if (known !== undefined) return known;
    places.set(text, workTallies.length);
    return workTallies.push(tallies) - 1;
  };
  for (const message of attachUntimedPass(record, pass, place)) {
    record.warnings.push(`Untimed pass threw: ${message}`);
  }
  record.workTallies = workTallies;
}

/**
 * Serialize a record under `sessions/` with one line per entry.
 *
 * Such a record carries samples and tallies for every measured case. Indented member by member, as the
 * records under `runs/` are, it would be several times the size for no gain in what a diff shows.
 *
 * @param record - the record to write
 * @returns JSON text ending in a newline; `JSON.parse` reads back what `JSON.stringify` would have written
 */
export function serializeBenchmarkRecord(record: BenchmarkRunRecord): string {
  return `${printJson(record, "")}\n`;
}

function printJson(value: unknown, indent: string): string {
  if (value === null || typeof value !== "object") return JSON.stringify(value) ?? "null";
  /* On one line: a list of plain values, a set of numbers such as a result's tallies, a case's entry,
   * or one completed-work tally. */
  const plainList = Array.isArray(value) && value.every((item) => item === null || typeof item !== "object");
  const numbers = !Array.isArray(value) && Object.values(value).every((member) => typeof member === "number");
  if (plainList || numbers || "status" in value) return JSON.stringify(value);
  const inner = `${indent}  `;
  const members = Array.isArray(value)
    ? value.map((item) => `${inner}${printJson(item, inner)}`)
    : Object.entries(value)
        .filter(([, member]) => member !== undefined)
        .map(([name, member]) => `${inner}${JSON.stringify(name)}: ${printJson(member, inner)}`);
  const [open, close] = Array.isArray(value) ? "[]" : "{}";
  return members.length === 0 ? `${open}${close}` : `${open}\n${members.join(",\n")}\n${indent}${close}`;
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
function collectMainCategoryPoints(record: BenchmarkResults, category: MainBenchmarkCategory): CategoryPoint[] {
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
function collectAnalysisCategoryPoints(record: BenchmarkResults, category: AnalysisBenchmarkCategory): CategoryPoint[] {
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
function collectAberrationCategoryPoints(record: BenchmarkResults, category: string): CategoryPoint[] {
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
function collectAberrationCategoryNames(record: BenchmarkResults): string[] {
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
function quantileSorted(values: ArrayLike<number>, q: number): number {
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

/** Name a subset or memory record without including it in the full-matrix trend. */
export function formatSessionRunFileName(record: BenchmarkRunRecord): string {
  const name = formatRunFileName(record.createdAt, record.git.shortCommit).replace(/\.json$/, "");
  return `${name}${record.config.caseSet ? `-${record.config.caseSet}` : ""}${record.memory ? "-memory" : ""}.json`;
}

/** Summarize one subset or memory run; the JSON retains every measurement. */
export function buildSessionSummary(record: BenchmarkRunRecord): string {
  const lines = [`## Benchmark: ${record.git.shortCommit ?? "unknown"}`, ""];
  const session = record.memory?.head;
  if (session) {
    const mb = (value: number): string => (value / 1024 / 1024).toFixed(2);
    lines.push(
      `- Session: ${session.lensKeys.length} lenses, ${session.cycles} cycles of ${session.statesPerCycle} lens states`,
    );
    lines.push(`- Retained heap plus array buffers: ${mb(session.heapAtEnd.totalBytes)} MB`);
    lines.push(`- Growth: ${mb(session.retainedGrowthBytes)} MB`);
    lines.push("", "| Reading | Heap MB | Array buffers MB | Total MB |", "|---|---:|---:|---:|");
    for (const [label, reading] of [
      ["Before", session.heapBefore],
      ...session.heapAfterCycle.map((value, index) => [`Cycle ${index + 1}`, value]),
      ["End", session.heapAtEnd],
    ] as [string, HeapReading][]) {
      lines.push(
        `| ${label} | ${mb(reading.heapUsedBytes)} | ${mb(reading.arrayBuffersBytes)} | ${mb(reading.totalBytes)} |`,
      );
    }
  } else {
    lines.push(
      `- Samples: ${record.config.iterations} measured after ${record.config.warmups} warmups`,
      "",
      "| Case | Median ms | Status |",
      "|---|---:|---|",
    );
    for (const { id, entry } of listBenchmarkCases(record))
      lines.push(`| ${id} | ${formatMs(entry.stats?.median)} | ${entry.status} |`);
  }
  for (const warning of record.warnings) lines.push(`- ${warning}`);
  return `${lines.join("\n")}\n`;
}
