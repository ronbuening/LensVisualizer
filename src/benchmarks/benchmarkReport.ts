/**
 * Shared benchmark schema, paired-run statistics and Markdown report helpers.
 *
 * Benchmark run JSON is treated as historical data under `agent_docs/benchmarks/runs/`.
 * The helpers in this module therefore keep schema compatibility explicit: records may
 * contain older `total` timings, while new records write separate cold and warm totals.
 * All timing summaries are measured in milliseconds unless a field name states another
 * unit, such as `heapDeltaBytes`.
 *
 * A record under `agent_docs/benchmarks/paired/` is the same record with more in it: the
 * head side sits where an unpaired record keeps its only side, and the base side, the raw
 * samples, the completed-work facts and the comparison are added. The trend report reads
 * `runs/` alone.
 *
 * The module imports nothing and uses only erasable type syntax, so the MTF benchmark can
 * load it under plain Node for the same statistics.
 */

/** Current persisted benchmark JSON schema version. Increment when run-record shape changes. */
export const BENCHMARK_SCHEMA_VERSION = 3;

/** Resamples behind every paired confidence interval. */
export const BOOTSTRAP_RESAMPLES = 10_000;

/**
 * Seed of the bootstrap. Each case combines it with a hash of its own id, so no two cases draw from one stream
 * and a case's interval does not depend on which other cases ran.
 */
export const BOOTSTRAP_SEED = 0x5eedc0de;

/** First half of the regression rule: the lower bound of a case's ratio interval must exceed this. */
export const REGRESSION_RATIO_LOWER_BOUND = 1.05;

/** Second half: its head median must also exceed its base median by more than this many milliseconds. */
export const REGRESSION_MEDIAN_GROWTH_MS = 1;

/**
 * Fewest measured samples per case under which a regression verdict means anything. With fewer, the interval is
 * too coarse to exclude noise, and a summary says so.
 */
export const VERDICT_MINIMUM_SAMPLES = 9;

/** Largest head / base ratio of retained heap that the memory gate accepts. */
export const RETAINED_HEAP_RATIO_LIMIT = 1.05;

/** Measured samples per case in a run that names no number. */
export const DEFAULT_BENCHMARK_ITERATIONS = 3;

/**
 * The two cases a paired summary prints first: PC-Nikkor 19mm default analysis, which carries the cost of the
 * intersection contract, and its stopped-close analysis with shift and tilt.
 */
export const HEADLINE_CASE_IDS = [
  "nikon-pc-nikkor-19mm-f4e-ed:default:analysis",
  "nikon-pc-nikkor-19mm-f4e-ed:stopped-close:analysis",
] as const;

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
  /**
   * Every measured sample, warmups excluded. Written to records under `paired/` only. A paired run times in two
   * processes: the samples of the first come first, in run order, and then those of the second
   * (`config.timedProcesses`).
   */
  samplesMs?: number[];
  /**
   * Every measured heap delta, as `samplesMs` holds the durations. A timed process hands it over so that the
   * summary above can be made over all the processes; `poolTimedRecords` drops it, and no record keeps it.
   */
  heapDeltaSamplesBytes?: number[];
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
   * tallies in the record's `workTallies`. `completedWorkOf` reads them. Written to records under `paired/` only.
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

/** The base side of a paired run: the ref it was built from and what the head's benchmark entry measured on it. */
export interface BenchmarkBaseSide {
  /** The ref as it was given on the command line. */
  ref: string;
  commit: string;
  shortCommit: string;
  /**
   * Set when the base's package-lock.json differs from the working tree's. The base was then bundled with packages
   * installed in its own worktree by `npm ci`, so the two sides differ by their dependencies as well as by their
   * source. Absent when both sides were bundled with the working tree's packages.
   */
  ownDependencies?: true;
  results: BenchmarkRunRecord["results"];
  aberrationPanels: BenchmarkRunRecord["aberrationPanels"];
  summary: BenchmarkRunRecord["summary"];
}

/** Timing of one case on the two sides of a paired run. */
export interface PairedCaseComparison {
  /** Measured pairs: one sample per side each. */
  pairs: number;
  baseMedianMs: number;
  headMedianMs: number;
  /** Head median over base median; null when the base median is zero. */
  ratio: number | null;
  /** Percentile bootstrap interval of the ratio over pair indices; null when a bound is not finite. */
  ci95: [number, number] | null;
  /** True under the regression rule. Never true for a case whose completed work differs. */
  regressed: boolean;
  /** The sides completed different work, so the ratio compares two different things. */
  unequalWork: boolean;
  /** The run had no fact of the two sides' work to compare, so nothing shows that the ratio compares like with like. */
  workNotVerified: boolean;
}

/** One category over the cells whose completed work is equal on both sides. */
export interface PairedCategoryComparison {
  cellCount: number;
  /** Median over those cells of each cell's base median, as `summary` holds it for one side. */
  baseMedianMs: number;
  headMedianMs: number;
  ratio: number | null;
  ci95: [number, number] | null;
  regressedCases: number;
  unequalWorkCases: number;
  workNotVerifiedCases: number;
  thrownCases: number;
}

/** One fact that the two sides of a case report differently. */
export interface WorkDifference {
  /**
   * `status`, `reason`, `output.<fact>` or `work.<fact>`. A `work` fact is a tally with its count on each side, or
   * a member of the results that one side has and the other has not, as `present` and `absent`.
   */
  fact: string;
  base: number | string | boolean | null;
  head: number | string | boolean | null;
}

/** A member that the head's results have and the base's lack, and the cases of one category in which that is so. */
export interface HeadOnlyMember {
  category: string;
  /** The member's path, from the label of the result it belongs to. */
  member: string;
  cases: number;
}

/** One process of the timed pass of a paired run. */
export interface TimedProcess {
  /** The side loaded and prepared first, which starts pair 0 of each case's warmups and measured samples. */
  firstSide: "base" | "head";
  /** Measured pairs per case that this process sampled. */
  pairs: number;
}

/** A case whose completed work differs, with every differing fact on both sides. */
export interface UnequalWorkCase {
  id: string;
  differences: WorkDifference[];
}

/** A case whose callback threw on at least one side; a side that did not throw is null. */
export interface ThrownCase {
  id: string;
  base: string | null;
  head: string | null;
}

/** What a paired run concludes from its two sides. */
export interface BenchmarkComparison {
  /** The side that starts pair 0 where no process gives one; each timed process's own is in config.timedProcesses. */
  firstSide: "base";
  bootstrap: { resamples: number; seed: number; confidence: number };
  regressionRule: { ratioLowerBound: number; medianGrowthMs: number };
  /** Every case timed on both sides, by case id, in run order. */
  cases: Record<string, PairedCaseComparison>;
  /** Category rows named as the trend report names them: `analysis`, `analysis.pupils`, `data.coma`. */
  categories: Record<string, PairedCategoryComparison>;
  regressed: string[];
  unequalWork: UnequalWorkCase[];
  /**
   * Cases timed on both sides with no fact of their work to compare: no fact in `output` beyond the descriptive
   * ones, and no tally in `work` that both sides hold. Their timings are judged, and nothing vouches for them.
   */
  workNotVerified: string[];
  /**
   * Members of the head's results that the base's lack, by category. Their tallies are compared with nothing, on
   * the reading that the base's result type has no such member.
   */
  headOnlyMembers: HeadOnlyMember[];
  thrown: ThrownCase[];
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

/** Memory sessions of a `--memory` run, each from its own process. */
export interface BenchmarkMemoryReport {
  head: MemorySessionReport;
  base?: MemorySessionReport;
  /** Head over base `heapAtEnd.totalBytes`. */
  retainedHeapRatio?: number;
  /** Whether that ratio is at most `RETAINED_HEAP_RATIO_LIMIT`. */
  withinLimit?: boolean;
}

/** What one side's untimed pass found for one case. */
export interface UntimedCaseResult {
  /** The tallies of each result the case marked, one set per label. Absent when the case threw. */
  work?: Record<string, number>[];
  /** Set when the case threw in the untimed pass. */
  message?: string;
}

/** One side's untimed pass: every case called once, for its completed work. */
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
    /* The rest is written to records under `paired/` only. */
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
    /** Present on a paired record: the processes of its timed pass, in the order they ran. */
    timedProcesses?: TimedProcess[];
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
  /** The other side of a paired run. The head side is everything above. */
  base?: BenchmarkBaseSide;
  /**
   * The tallies that the entries' `work` points into, on both sides. A result is tallied in every case that
   * computes it, and alike on two sides that completed the same work, so one set here stands for all of them.
   */
  workTallies?: Record<string, number>[];
  comparison?: BenchmarkComparison;
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

/** Measured samples of one case on both sides, pair i at index i of each. */
export interface PairedSamples {
  baseMs: readonly number[];
  headMs: readonly number[];
}

/** The measured entries of one side: a whole record, or the base side of a paired one. */
type BenchmarkSideResults = Pick<BenchmarkRunRecord, "results" | "aberrationPanels">;

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

/* ── Paired runs: sampling order, bootstrap and the regression rule ── */

/**
 * Which side a paired run samples first in a pair.
 *
 * Warmup pairs and measured pairs are each counted from 0, so both start with the chosen side whatever the
 * number of warmups, and neither side is always the one that runs on a cache the other just disturbed.
 *
 * @param pairIndex - index of the pair among the warmups, or among the measured samples
 * @param firstSide - the side that starts pair 0; defaults to base for callers without a process order
 * @returns the two sides in the order they are called
 */
export function pairedSampleOrder(
  pairIndex: number,
  firstSide: TimedProcess["firstSide"] = "base",
): readonly ["base", "head"] | readonly ["head", "base"] {
  return (pairIndex % 2 === 0) === (firstSide === "base") ? BASE_FIRST : HEAD_FIRST;
}

const BASE_FIRST = ["base", "head"] as const;
const HEAD_FIRST = ["head", "base"] as const;

/**
 * The processes a paired run times in.
 *
 * Two copies of one engine in one process do not time alike. In a run of a ref against itself most cases lean
 * toward one side, and the side changes with the bundle that was loaded and prepared first and made each case's
 * first call. The alternation of pairs cancels what changes from pair to pair and nothing that lasts a whole
 * process. So the timed pass runs twice, once with each side first, and the pairs of the two processes are pooled.
 * The measured pairs are shared as evenly as possible, the extra one going to the first process; a process that
 * would measure nothing is not run.
 *
 * @param iterations - measured pairs per case over the whole pass
 * @returns the processes in the order they run, each with the side it puts first and its share of the pairs
 */
export function planTimedProcesses(iterations: number = DEFAULT_BENCHMARK_ITERATIONS): TimedProcess[] {
  const processes: TimedProcess[] = [
    { firstSide: "base", pairs: Math.ceil(iterations / 2) },
    { firstSide: "head", pairs: Math.floor(iterations / 2) },
  ];
  return processes.filter(({ pairs }) => pairs > 0);
}

/**
 * What a summary says of a run with too few measured samples per case for a regression verdict.
 *
 * @param samples - measured samples per case
 * @returns the notice, or null when the samples are enough
 */
export function tooFewSamplesNotice(samples: number): string | null {
  return samples < VERDICT_MINIMUM_SAMPLES
    ? `Too few samples for a verdict: a regression needs at least ${VERDICT_MINIMUM_SAMPLES} measured samples per ` +
        `case to mean anything.`
    : null;
}

/** FNV-1a hash of a text, as an unsigned 32-bit integer. */
export function hashText(text: string): number {
  let hash = 0x811c9dc5;
  for (let index = 0; index < text.length; index++) {
    hash ^= text.charCodeAt(index);
    hash = Math.imul(hash, 0x01000193);
  }
  return hash >>> 0;
}

/**
 * The bootstrap seed of one case or category.
 *
 * @param id - the case id, or the name of a category row
 * @param seed - the run's seed
 * @returns an unsigned 32-bit seed that differs between ids
 */
export function bootstrapSeedFor(id: string, seed: number = BOOTSTRAP_SEED): number {
  return (seed ^ hashText(id)) >>> 0;
}

/**
 * Seeded generator of uniform numbers in [0, 1): mulberry32. `Math.random` cannot be seeded, and an interval that
 * moved between two readings of the same record could not be checked.
 *
 * @param seed - any integer; its low 32 bits are the state
 */
export function createSeededRandom(seed: number): () => number {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let mixed = state;
    mixed = Math.imul(mixed ^ (mixed >>> 15), mixed | 1);
    mixed ^= mixed + Math.imul(mixed ^ (mixed >>> 7), mixed | 61);
    return ((mixed ^ (mixed >>> 14)) >>> 0) / 4294967296;
  };
}

/** Samples of one side in ascending order, with each sample's place in that order. */
interface RankedSamples {
  sorted: Float64Array;
  rank: Uint32Array;
  counts: Uint32Array;
}

function rankSamples(samples: readonly number[]): RankedSamples {
  const order = samples.map((_, index) => index).sort((a, b) => samples[a] - samples[b]);
  const rank = new Uint32Array(samples.length);
  order.forEach((sampleIndex, place) => {
    rank[sampleIndex] = place;
  });
  return { sorted: Float64Array.from(order, (index) => samples[index]), rank, counts: new Uint32Array(samples.length) };
}

/**
 * Median of a resample given as how many times each ranked sample was drawn. It reads the middle order statistics
 * off the running total, which costs one pass and no sort, and interpolates as `quantileSorted` does.
 */
function medianOfDraws({ sorted, counts }: RankedSamples): number {
  const total = sorted.length;
  const lower = (total - 1) >> 1;
  const upper = total >> 1;
  let drawn = 0;
  let lowerValue = Number.NaN;
  for (let place = 0; place < total; place++) {
    drawn += counts[place];
    if (Number.isNaN(lowerValue) && drawn > lower) lowerValue = sorted[place];
    if (drawn > upper) return lowerValue + (sorted[place] - lowerValue) * 0.5;
  }
  return Number.NaN;
}

/**
 * 95% percentile-bootstrap interval of a ratio of medians, head over base.
 *
 * Pair indices are resampled with replacement, so a pair's two samples stay together and drift that both sides
 * shared cancels in the ratio. With one cell the statistic is median(head) / median(base). With several, each
 * cell is resampled on its own and the statistic is the median over cells of the head medians, over the same for
 * the base: the ratio a category row reports.
 *
 * @param cells - paired samples, one entry per cell; a cell's two sides must be equally long
 * @param seed - seed of the generator; equal seeds and samples give equal intervals
 * @param resamples - number of bootstrap resamples
 * @returns the 2.5% and 97.5% quantiles of the resampled ratios, or null when there is nothing to resample or a
 *   bound is not finite
 */
export function bootstrapMedianRatioInterval(
  cells: readonly PairedSamples[],
  seed: number,
  resamples: number = BOOTSTRAP_RESAMPLES,
): [number, number] | null {
  if (cells.length === 0 || resamples < 1) return null;
  if (cells.some(({ baseMs, headMs }) => baseMs.length === 0 || baseMs.length !== headMs.length)) return null;
  const ranked = cells.map(({ baseMs, headMs }) => ({ base: rankSamples(baseMs), head: rankSamples(headMs) }));
  const baseMedians = new Float64Array(cells.length);
  const headMedians = new Float64Array(cells.length);
  const random = createSeededRandom(seed);
  const ratios = new Float64Array(resamples);
  for (let resample = 0; resample < resamples; resample++) {
    ranked.forEach(({ base, head }, cell) => {
      const pairs = base.sorted.length;
      base.counts.fill(0);
      head.counts.fill(0);
      for (let draw = 0; draw < pairs; draw++) {
        const pair = Math.floor(random() * pairs);
        base.counts[base.rank[pair]]++;
        head.counts[head.rank[pair]]++;
      }
      baseMedians[cell] = medianOfDraws(base);
      headMedians[cell] = medianOfDraws(head);
    });
    ratios[resample] = medianOfCells(headMedians) / medianOfCells(baseMedians);
  }
  ratios.sort();
  const interval: [number, number] = [quantileSorted(ratios, 0.025), quantileSorted(ratios, 0.975)];
  return interval.every(Number.isFinite) ? interval : null;
}

/** Median of per-cell medians. The array is the caller's scratch space and is left sorted. */
function medianOfCells(medians: Float64Array): number {
  if (medians.length === 1) return medians[0];
  return quantileSorted(medians.sort(), 0.5);
}

/**
 * The regression rule for one case: both halves must hold, so neither noise on a sub-millisecond case nor a small
 * steady cost on a long one counts alone.
 *
 * @param ciLowerBound - lower bound of the 95% interval of head median over base median
 * @param baseMedianMs - base median in milliseconds
 * @param headMedianMs - head median in milliseconds
 * @returns true when the bound exceeds 1.05 and the median grew by more than 1 ms
 */
export function isRegressedCase(ciLowerBound: number, baseMedianMs: number, headMedianMs: number): boolean {
  return ciLowerBound > REGRESSION_RATIO_LOWER_BOUND && headMedianMs - baseMedianMs > REGRESSION_MEDIAN_GROWTH_MS;
}

/**
 * Compare the measured samples of one case on the two sides.
 *
 * @param id - the case id, which seeds the bootstrap
 * @param samples - the measured samples of both sides, equally many
 * @param unequalWork - whether the sides completed different work; such a case is never judged regressed
 * @param workNotVerified - whether the run had nothing of the sides' work to compare; the case is judged all the same
 * @returns the medians, their ratio, its interval and the verdict; null when a side has no samples
 */
export function comparePairedSamples(
  id: string,
  samples: PairedSamples,
  unequalWork = false,
  workNotVerified = false,
): PairedCaseComparison | null {
  const base = summarizeNumbers(samples.baseMs);
  const head = summarizeNumbers(samples.headMs);
  if (!base || !head || samples.baseMs.length !== samples.headMs.length) return null;
  const ci95 = bootstrapMedianRatioInterval([samples], bootstrapSeedFor(id));
  return {
    pairs: samples.baseMs.length,
    baseMedianMs: base.median,
    headMedianMs: head.median,
    ratio: base.median > 0 ? head.median / base.median : null,
    ci95,
    regressed: !unequalWork && ci95 !== null && isRegressedCase(ci95[0], base.median, head.median),
    unequalWork,
    workNotVerified,
  };
}

/* ── Paired runs: completed work ── */

/* Facts in `output` that describe a result and are no count of work. They are floats, or follow one: an image
 * position, a best-focus position, a scalar result, the length of markup that prints coordinates. Two engines
 * that agree to the last few bits of a hit move them, so they never make work unequal. */
const DESCRIPTIVE_OUTPUT_FACTS = new Set(["imageZ", "bestFocusZ", "value", "markupLength"]);

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

/**
 * The member a tally belongs to: its fact name without the `=value` or the `.length` it counted. A status may hold
 * an equals sign of its own, so the member ends at the first one.
 */
function tallyMember(fact: string): string {
  const equals = fact.indexOf("=");
  if (equals >= 0) return fact.slice(0, equals);
  return fact.endsWith(".length") ? fact.slice(0, -".length".length) : fact;
}

/** The member that holds another: the list of `<list>[]`, the object of `<object>.<name>`; null for a result. */
function parentMember(member: string): string | null {
  if (member.endsWith("[]")) return member.slice(0, -"[]".length);
  const dot = member.lastIndexOf(".");
  return dot < 0 ? null : member.slice(0, dot);
}

/** The members one side's results have, and those among them that hold members of their own. */
interface WorkShape {
  members: Set<string>;
  holders: Set<string>;
}

function workShape(work: Record<string, number>): WorkShape {
  const shape: WorkShape = { members: new Set(), holders: new Set() };
  for (const fact of Object.keys(work)) {
    const member = tallyMember(fact);
    shape.members.add(member);
    /* Once a holder is known, so is everything that holds it. */
    for (let holder = parentMember(member); holder !== null && !shape.holders.has(holder); ) {
      shape.members.add(holder);
      shape.holders.add(holder);
      holder = parentMember(holder);
    }
  }
  return shape;
}

/** The outermost member on the way to `member` that a side's results lack; null when they have `member`. */
function outermostMissing(shape: WorkShape, member: string): string | null {
  let missing: string | null = null;
  for (let at: string | null = member; at !== null && !shape.members.has(at); at = parentMember(at)) missing = at;
  return missing;
}

/** What comparing the completed work of one case found. */
interface WorkComparison {
  differences: WorkDifference[];
  /** Facts that both sides hold and that were set side by side, whether or not they differ. */
  comparedFacts: number;
  /** Members that the head's results have and the base's lack, read as missing from the base's result type. */
  headOnlyMembers: string[];
}

/**
 * Compare what one case completed on the two sides.
 *
 * The statuses must agree. Two measured entries must report the same `output` facts, apart from the ones that
 * describe the result, and the same `work` tallies, where a status or flag that one side never produced counts as
 * zero there.
 *
 * A tally under a member that one side's results lack altogether is a difference too: the result exists on the
 * other side, so the side without the member completed less, or completed something else. One case is excepted: a
 * member that the base lacks while the base's results do hold the object it would sit in. An object that is there
 * without the member is what a result type that has no such member looks like, and a head that adds a member to a
 * type has done no less than the base. The comparison cannot tell that from a base that left the member out of
 * this one result, so it lists the member as the head's alone and compares it with nothing. The same gap on the
 * head is never excepted: a head whose results lack what the base's have is flagged.
 *
 * @param base - the base side's entry
 * @param head - the head side's entry
 * @param work - each side's tallies; a side whose untimed call threw has none
 * @returns the differing facts, how many facts were compared, and the members excepted
 */
function compareWork(
  base: BenchmarkEntry,
  head: BenchmarkEntry,
  work: { base?: Record<string, number>; head?: Record<string, number> },
): WorkComparison {
  const found: WorkComparison = { differences: [], comparedFacts: 0, headOnlyMembers: [] };
  const { differences } = found;
  if (base.status !== head.status) {
    differences.push({ fact: "status", base: base.status, head: head.status });
    return found;
  }
  if (base.status === "skipped" && base.reason !== head.reason) {
    differences.push({ fact: "reason", base: base.reason ?? null, head: head.reason ?? null });
  }
  if (base.status !== "ok") return found;

  const baseOutput = base.output ?? {};
  const headOutput = head.output ?? {};
  for (const fact of new Set([...Object.keys(baseOutput), ...Object.keys(headOutput)])) {
    if (DESCRIPTIVE_OUTPUT_FACTS.has(fact)) continue;
    found.comparedFacts++;
    if (Object.is(baseOutput[fact], headOutput[fact])) continue;
    differences.push({ fact: `output.${fact}`, base: baseOutput[fact] ?? null, head: headOutput[fact] ?? null });
  }

  /* A side whose untimed call threw has no tallies, and reads as a side whose results are all missing. */
  if (!work.base && !work.head) return found;
  const baseWork = work.base ?? {};
  const headWork = work.head ?? {};
  const baseShape = workShape(baseWork);
  const headShape = workShape(headWork);
  /* Members with a tally of their own that differs. What is missing beneath one of them is that difference seen
   * again: a result that is null on one side has none of the members it has on the other. */
  const differing = new Set<string>();
  const missing = new Map<string, WorkDifference>();
  const headOnly = new Set<string>();
  for (const fact of new Set([...Object.keys(baseWork), ...Object.keys(headWork)])) {
    const member = tallyMember(fact);
    const missingOnHead = outermostMissing(headShape, member);
    const missingOnBase = outermostMissing(baseShape, member);
    if (missingOnHead !== null) {
      missing.set(missingOnHead, { fact: `work.${missingOnHead}`, base: "present", head: "absent" });
    } else if (missingOnBase !== null) {
      const holder = parentMember(missingOnBase);
      if (holder !== null && baseShape.holders.has(holder)) headOnly.add(missingOnBase);
      else missing.set(missingOnBase, { fact: `work.${missingOnBase}`, base: "absent", head: "present" });
    } else {
      found.comparedFacts++;
      const baseCount = baseWork[fact] ?? 0;
      const headCount = headWork[fact] ?? 0;
      if (baseCount === headCount) continue;
      differing.add(member);
      differences.push({ fact: `work.${fact}`, base: baseCount, head: headCount });
    }
  }
  for (const [member, difference] of missing) {
    const holder = parentMember(member);
    if (holder === null || !differing.has(holder)) differences.push(difference);
  }
  found.headOnlyMembers = [...headOnly];
  return found;
}

/**
 * Compare what one case completed on the two sides, by status, by the facts in `output` and by the tallies of
 * its results.
 *
 * @param base - the base side's entry
 * @param head - the head side's entry
 * @param work - each side's tallies, as `completedWorkOf` reads them from a record
 * @returns every differing fact with both values; empty when the sides completed the same work
 */
export function compareCompletedWork(
  base: BenchmarkEntry,
  head: BenchmarkEntry,
  work: { base?: Record<string, number>; head?: Record<string, number> } = {},
): WorkDifference[] {
  return compareWork(base, head, work).differences;
}

/**
 * The tallies of everything one case completed: those of each result it marked, read from the record's
 * `workTallies` and put together.
 *
 * @param record - the record the entry belongs to, on either side
 * @param entry - a case's entry
 * @returns the case's tallies by fact; undefined for an entry the untimed pass tallied nothing for
 */
export function completedWorkOf(
  record: Pick<BenchmarkRunRecord, "workTallies">,
  entry: BenchmarkEntry,
): Record<string, number> | undefined {
  if (!entry.work) return undefined;
  return Object.assign({}, ...entry.work.map((place) => record.workTallies?.[place]));
}

/* ── Paired runs: the record ── */

/**
 * List the cases of one side in the order the benchmark runs them, each with the id its entry is labelled with.
 *
 * @param side - a record, or the base side of a paired record
 * @returns every entry, skipped and failed ones included
 */
export function listBenchmarkCases(side: BenchmarkSideResults): BenchmarkCaseRef[] {
  const cases: BenchmarkCaseRef[] = [];
  for (const [lensKey, byScenario] of Object.entries(side.results)) {
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
      const panels = side.aberrationPanels[lensKey]?.[scenarioId];
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
 * Pool the records of a timed pass that ran in several processes into the record of the pass.
 *
 * Each process sampled every case on its own, so a case's samples are those of the first process followed by
 * those of the next, pair i of one side still beside pair i of the other, and its statistics are taken over all of
 * them. `config.timedProcesses` says how many pairs each process gave, and so which process a pair came from. A
 * case that threw in any process is a thrown case. The raw heap deltas the processes handed over are summarized
 * and dropped.
 *
 * @param records - the record of each process, in the order the processes ran; the first is changed in place
 * @returns the first record, holding the pooled samples of all of them
 * @throws when there is no record
 */
export function poolTimedRecords(records: readonly BenchmarkRunRecord[]): BenchmarkRunRecord {
  const [pooled, ...others] = records;
  if (!pooled) throw new Error("A timed pass has no record to pool.");
  for (const other of others) {
    poolSide(pooled, other);
    if (pooled.base && other.base) poolSide(pooled.base, other.base);
    pooled.config.iterations += other.config.iterations;
    if (other.config.timedProcesses) {
      pooled.config.timedProcesses = [...(pooled.config.timedProcesses ?? []), ...other.config.timedProcesses];
    }
    for (const warning of other.warnings) if (!pooled.warnings.includes(warning)) pooled.warnings.push(warning);
  }
  for (const side of [pooled, ...(pooled.base ? [pooled.base] : [])]) {
    for (const { entry } of listBenchmarkCases(side)) delete entry.stats?.heapDeltaSamplesBytes;
    side.summary = summarizeRun(side);
  }
  return pooled;
}

/** Add one process's samples of one side to the samples that side already holds, case by case. */
function poolSide(into: BenchmarkSideResults, from: BenchmarkSideResults): void {
  const next = new Map(listBenchmarkCases(from).map(({ id, entry }) => [id, entry]));
  for (const { id, entry } of listBenchmarkCases(into)) {
    const added = next.get(id);
    if (entry.status !== "ok" || !entry.stats || !added) continue;
    if (added.status !== "ok" || !added.stats) {
      /* The entry is the one its cell's results hold, so it is emptied and refilled in place. */
      for (const member of Object.keys(entry)) delete entry[member as keyof BenchmarkEntry];
      Object.assign(entry, added);
      continue;
    }
    const samplesMs = [...(entry.stats.samplesMs ?? []), ...(added.stats.samplesMs ?? [])];
    const heapDeltas = [...(entry.stats.heapDeltaSamplesBytes ?? []), ...(added.stats.heapDeltaSamplesBytes ?? [])];
    const time = summarizeNumbers(samplesMs);
    const heap = summarizeNumbers(heapDeltas);
    if (!time) continue;
    entry.stats = {
      ...time,
      iterations: entry.stats.iterations + added.stats.iterations,
      warmups: entry.stats.warmups,
      ...(heap ? { heapDeltaBytes: heap } : {}),
      samplesMs,
      heapDeltaSamplesBytes: heapDeltas,
    };
  }
}

/**
 * Put one side's untimed pass on that side's entries.
 *
 * @param side - the record, or its base side
 * @param pass - what the untimed pass found, by case id
 * @param place - puts a result's tallies in the record's `workTallies` and returns where
 * @returns a warning for each case that threw in the untimed pass
 */
function attachUntimedPass(
  side: BenchmarkSideResults,
  pass: UntimedBenchmarkPass,
  place: (tallies: Record<string, number>) => number,
): string[] {
  const thrown: string[] = [];
  for (const { id, entry } of listBenchmarkCases(side)) {
    const found = pass.cases[id];
    if (!found) continue;
    if (found.work) entry.work = found.work.map(place);
    /* A case that threw when it was timed is in the record already, as its entry. */
    if (found.message !== undefined && entry.status !== "error") thrown.push(`${id}: ${found.message}`);
  }
  return thrown;
}

/**
 * Complete a record whose timed pass has run: add each side's untimed pass and, for a paired record, the
 * comparison of the two sides.
 *
 * @param record - the record of the timed pass, changed in place
 * @param passes - the untimed pass of the head bundle, and of the base bundle in a paired run
 */
export function finishBenchmarkRecord(
  record: BenchmarkRunRecord,
  passes: { head: UntimedBenchmarkPass; base?: UntimedBenchmarkPass },
): void {
  /* Equal tallies are kept once. The analysis results of a cell are tallied in the case of each, in the whole
   * analysis and in both totals, and on both sides: written out per case they are most of a record. */
  const workTallies: Record<string, number>[] = [];
  const places = new Map<string, number>();
  const place = (tallies: Record<string, number>): number => {
    const text = JSON.stringify(tallies);
    const known = places.get(text);
    if (known !== undefined) return known;
    places.set(text, workTallies.length);
    return workTallies.push(tallies) - 1;
  };
  for (const message of attachUntimedPass(record, passes.head, place)) {
    record.warnings.push(`Untimed pass threw on the head: ${message}`);
  }
  if (record.base && passes.base) {
    for (const message of attachUntimedPass(record.base, passes.base, place)) {
      record.warnings.push(`Untimed pass threw on the base: ${message}`);
    }
  }
  record.workTallies = workTallies;
  if (record.base) record.comparison = comparePairedRun(record);
}

/**
 * Compare the two sides of a paired record.
 *
 * A case whose sides completed different work is listed with both sides' facts and left out of the regression
 * verdict and of its category row: a side that gave up early is fast, and its time says nothing about the engine.
 * A case with no fact of its work to compare is judged like any other and listed as work not verified, so that
 * its verdict is not read as checked. A case that threw is listed with its message.
 *
 * @param record - a paired record with both sides' entries, samples and completed work in place
 * @returns the comparison, by case and by category
 */
export function comparePairedRun(record: BenchmarkRunRecord): BenchmarkComparison {
  const baseCases = new Map(record.base ? listBenchmarkCases(record.base).map((ref) => [ref.id, ref]) : []);
  const comparison: BenchmarkComparison = {
    firstSide: "base",
    bootstrap: { resamples: BOOTSTRAP_RESAMPLES, seed: BOOTSTRAP_SEED, confidence: 0.95 },
    regressionRule: { ratioLowerBound: REGRESSION_RATIO_LOWER_BOUND, medianGrowthMs: REGRESSION_MEDIAN_GROWTH_MS },
    cases: {},
    categories: {},
    regressed: [],
    unequalWork: [],
    workNotVerified: [],
    headOnlyMembers: [],
    thrown: [],
  };
  const byCategory = new Map<
    string,
    {
      samples: PairedSamples[];
      regressedCases: number;
      unequalWorkCases: number;
      workNotVerifiedCases: number;
      thrownCases: number;
    }
  >();
  const headOnly = new Map<string, HeadOnlyMember>();

  for (const { id, category, entry: head } of listBenchmarkCases(record)) {
    /* A case only the head lists has no base to compare with; the run refuses such a cell before sampling it. */
    const base = baseCases.get(id)?.entry ?? { status: "skipped", reason: "The base side has no such case." };
    const group = byCategory.get(category) ?? {
      samples: [],
      regressedCases: 0,
      unequalWorkCases: 0,
      workNotVerifiedCases: 0,
      thrownCases: 0,
    };
    byCategory.set(category, group);

    if (base.status === "error" || head.status === "error") {
      comparison.thrown.push({
        id,
        base: base.status === "error" ? (base.message ?? "") : null,
        head: head.status === "error" ? (head.message ?? "") : null,
      });
      group.thrownCases++;
    }
    const { differences, comparedFacts, headOnlyMembers } = compareWork(base, head, {
      base: completedWorkOf(record, base),
      head: completedWorkOf(record, head),
    });
    if (differences.length > 0) {
      comparison.unequalWork.push({ id, differences });
      group.unequalWorkCases++;
    }
    for (const member of headOnlyMembers) {
      const key = `${category}\n${member}`;
      const listed = headOnly.get(key) ?? { category, member, cases: 0 };
      headOnly.set(key, listed);
      listed.cases++;
    }
    const samples = { baseMs: base.stats?.samplesMs ?? [], headMs: head.stats?.samplesMs ?? [] };
    const unverified = differences.length === 0 && comparedFacts === 0;
    const timing = comparePairedSamples(id, samples, differences.length > 0, unverified);
    if (!timing) continue;
    comparison.cases[id] = timing;
    if (timing.workNotVerified) {
      comparison.workNotVerified.push(id);
      group.workNotVerifiedCases++;
    }
    if (timing.regressed) {
      comparison.regressed.push(id);
      group.regressedCases++;
    }
    if (!timing.unequalWork) group.samples.push(samples);
  }

  for (const [category, { samples, ...flagged }] of byCategory) {
    const baseMedian = summarizeNumbers(samples.map(({ baseMs }) => summarizeNumbers(baseMs)?.median ?? Number.NaN));
    const headMedian = summarizeNumbers(samples.map(({ headMs }) => summarizeNumbers(headMs)?.median ?? Number.NaN));
    if (!baseMedian || !headMedian) continue;
    comparison.categories[category] = {
      cellCount: samples.length,
      baseMedianMs: baseMedian.median,
      headMedianMs: headMedian.median,
      ratio: baseMedian.median > 0 ? headMedian.median / baseMedian.median : null,
      ci95: bootstrapMedianRatioInterval(samples, bootstrapSeedFor(`category:${category}`)),
      ...flagged,
    };
  }
  comparison.headOnlyMembers = [...headOnly.values()];
  return comparison;
}

/**
 * Compare the retained heap of two memory sessions.
 *
 * @param head - the head side's session
 * @param base - the base side's session, when the run had one
 * @returns the memory block of a record; with a base, the ratio of absolute retained heap and whether it is
 *   within the limit
 */
export function compareMemorySessions(head: MemorySessionReport, base?: MemorySessionReport): BenchmarkMemoryReport {
  if (!base) return { head };
  const retainedHeapRatio = head.heapAtEnd.totalBytes / base.heapAtEnd.totalBytes;
  return { head, base, retainedHeapRatio, withinLimit: retainedHeapRatio <= RETAINED_HEAP_RATIO_LIMIT };
}

/**
 * Builds the filename of a record under `agent_docs/benchmarks/paired/`.
 *
 * @param record - a paired, subset or memory record
 * @returns the timestamp, the base and head short commits, and what kind of run it was
 */
export function formatPairedRunFileName(record: BenchmarkRunRecord): string {
  const stamp = record.createdAt.replace(/\.\d{3}Z$/, "Z").replace(/:/g, "-");
  const parts = [
    stamp,
    ...(record.base ? ["base", record.base.shortCommit] : []),
    "head",
    record.git.shortCommit ?? "no-git",
    ...(record.config.caseSet ? [record.config.caseSet] : []),
    ...(record.memory ? ["memory"] : []),
  ];
  return `${parts.join("-")}.json`;
}

/**
 * Serialize a record under `paired/` with one line per entry.
 *
 * Such a record carries samples and tallies for every case on two sides. Indented member by member, as the
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
  /* On one line: a list of plain values, a set of numbers such as a result's tallies, a case's entry, a case's
   * comparison, and a differing fact. */
  const plainList = Array.isArray(value) && value.every((item) => item === null || typeof item !== "object");
  const numbers = !Array.isArray(value) && Object.values(value).every((member) => typeof member === "number");
  if (plainList || numbers || "status" in value || "pairs" in value || "fact" in value) return JSON.stringify(value);
  const inner = `${indent}  `;
  const members = Array.isArray(value)
    ? value.map((item) => `${inner}${printJson(item, inner)}`)
    : Object.entries(value)
        .filter(([, member]) => member !== undefined)
        .map(([name, member]) => `${inner}${JSON.stringify(name)}: ${printJson(member, inner)}`);
  const [open, close] = Array.isArray(value) ? "[]" : "{}";
  return members.length === 0 ? `${open}${close}` : `${open}\n${members.join(",\n")}\n${indent}${close}`;
}

/* ── Paired runs: the printed summary ── */

/**
 * Builds the Markdown summary a run prints for a record under `paired/`, made to be pasted into a pull request.
 *
 * The two headline cases come first. A subset run then lists the main pipeline cases of each of its cells, and a
 * run of the whole matrix lists one row per category; every flagged case follows with both sides' facts, whatever
 * its category.
 *
 * @param record - a paired or subset record that `finishBenchmarkRecord` has completed, or a memory record
 * @returns Markdown text ending in a newline
 */
export function buildPairedSummary(record: BenchmarkRunRecord): string {
  const lines: string[] = [];
  const { base, comparison, config, environment, git } = record;
  const head = `${git.shortCommit ?? "unknown"}${git.dirty ? " (dirty)" : ""}`;
  lines.push(
    base ? `## Benchmark: base ${base.shortCommit} (${base.ref}) against head ${head}` : `## Benchmark: ${head}`,
  );
  lines.push("");
  lines.push(
    `- Machine: ${environment.cpuModel ?? "unknown CPU"} x ${environment.cpuCount ?? "?"}, ` +
      `${environment.platform}/${environment.arch}, Node ${environment.node}, V8 ${environment.v8}`,
  );
  if (base?.ownDependencies) {
    lines.push(
      "- Dependencies: the base's package-lock.json differs from the working tree's, so the base used its own, " +
        "installed in its worktree by npm ci. The two sides differ by their packages as well as by their source",
    );
  }
  if (record.memory) {
    appendMemorySummary(lines, record);
    return `${lines.join("\n")}\n`;
  }

  const cells =
    config.cells ??
    config.lensKeys.flatMap((lensKey) => config.scenarios.map((scenarioId) => ({ lensKey, scenarioId })));
  lines.push(`- Cases: ${config.caseSet ?? "full"} set, ${cells.length} lens/scenario cells`);
  lines.push(
    `- Samples: ${config.iterations} measured after ${config.warmups} warmup${config.warmups === 1 ? "" : "s"} per case` +
      (base ? `, ${describeTimedProcesses(config.timedProcesses ?? [])}` : ""),
  );
  if (comparison) {
    const { bootstrap, regressionRule } = comparison;
    lines.push(
      `- Statistic: head median / base median, with a ${bootstrap.confidence * 100}% percentile bootstrap interval ` +
        `over pairs (${bootstrap.resamples} resamples, fixed seed). Regressed: lower bound above ` +
        `${regressionRule.ratioLowerBound} and median up by more than ${regressionRule.medianGrowthMs} ms`,
    );
  }
  const tooFewSamples = comparison ? tooFewSamplesNotice(config.iterations) : null;
  if (tooFewSamples !== null) lines.push(`- ${tooFewSamples} Read the flags below as a check that the run works`);
  lines.push("");

  const headCases = new Map(listBenchmarkCases(record).map((ref) => [ref.id, ref]));
  const baseCases = new Map(base ? listBenchmarkCases(base).map((ref) => [ref.id, ref]) : []);
  const row = (id: string): string => caseRow(id, headCases.get(id)?.entry, baseCases.get(id)?.entry, comparison);

  lines.push("### PC-Nikkor 19mm analysis");
  lines.push("");
  lines.push(...CASE_TABLE_HEADER);
  for (const id of HEADLINE_CASE_IDS) lines.push(headCases.has(id) ? row(id) : `| ${id} | not in this run | | | | |`);
  lines.push("");

  if (config.caseSet) {
    lines.push("### Main pipeline cases");
    lines.push("");
    lines.push(...CASE_TABLE_HEADER);
    for (const { id, category } of headCases.values()) {
      if ((MAIN_CATEGORIES as string[]).includes(category)) lines.push(row(id));
    }
  } else if (comparison) {
    lines.push("### Categories");
    lines.push("");
    lines.push("| Category | Cells | Base median ms | Head median ms | Head/base | 95% interval | Flags |");
    lines.push("|---|---:|---:|---:|---:|---|---|");
    for (const [category, entry] of Object.entries(comparison.categories)) {
      const flags = [
        ...(entry.regressedCases ? [`${entry.regressedCases} regressed`] : []),
        ...(entry.unequalWorkCases ? [`${entry.unequalWorkCases} unequal work`] : []),
        ...(entry.workNotVerifiedCases ? [`${entry.workNotVerifiedCases} work not verified`] : []),
        ...(entry.thrownCases ? [`${entry.thrownCases} threw`] : []),
      ];
      lines.push(
        `| ${category} | ${entry.cellCount} | ${formatMs(entry.baseMedianMs)} | ${formatMs(entry.headMedianMs)} | ` +
          `${formatRatio(entry.ratio)} | ${formatInterval(entry.ci95)} | ${flags.join(", ")} |`,
      );
    }
  }
  lines.push("");

  if (comparison) appendVerdict(lines, comparison, row);
  if (record.warnings.length > 0) {
    lines.push("### Warnings");
    lines.push("");
    for (const warning of record.warnings) lines.push(`- ${warning}`);
    lines.push("");
  }
  return `${lines.join("\n")}\n`;
}

const CASE_TABLE_HEADER = [
  "| Case | Base median ms | Head median ms | Head/base | 95% interval | Flags |",
  "|---|---:|---:|---:|---|---|",
];

/** One table row for a case: its medians on both sides, or what kept it from being timed. */
function caseRow(
  id: string,
  head: BenchmarkEntry | undefined,
  base: BenchmarkEntry | undefined,
  comparison: BenchmarkComparison | undefined,
): string {
  const timing = comparison?.cases[id];
  const flags = [
    ...(timing?.regressed ? ["regressed"] : []),
    ...(comparison?.unequalWork.some((unequal) => unequal.id === id) ? ["unequal work"] : []),
    ...(timing?.workNotVerified ? ["work not verified"] : []),
    ...(base?.status === "error" ? ["threw on the base"] : []),
    ...(head?.status === "error" ? ["threw on the head"] : []),
    ...(head?.status === "skipped" ? ["skipped"] : []),
  ];
  return (
    `| ${id.replace(/:/g, " ")} | ${formatMs(base?.stats?.median)} | ${formatMs(head?.stats?.median)} | ` +
    `${formatRatio(timing?.ratio)} | ${formatInterval(timing?.ci95)} | ${flags.join(", ")} |`
  );
}

/**
 * Appends the regressed, unequal-work, unverified and thrown cases of a paired run, and the members it compared
 * with nothing.
 */
function appendVerdict(lines: string[], comparison: BenchmarkComparison, row: (id: string) => string): void {
  lines.push("### Verdict");
  lines.push("");
  lines.push(`- Cases timed on both sides: ${Object.keys(comparison.cases).length}`);
  lines.push(`- Regressed: ${comparison.regressed.length}`);
  lines.push(`- Unequal work, left out of the regression verdict: ${comparison.unequalWork.length}`);
  lines.push(
    `- Work not verified, with no fact of the two sides' work to compare: ${comparison.workNotVerified.length}`,
  );
  lines.push(
    `- Result members only the head has, compared with nothing: ${comparison.headOnlyMembers.length}` +
      (comparison.headOnlyMembers.length > 0 ? " (listed below)" : ""),
  );
  lines.push(`- Threw: ${comparison.thrown.length}`);
  lines.push("");

  if (comparison.regressed.length > 0) {
    lines.push("### Regressed cases");
    lines.push("");
    lines.push(...CASE_TABLE_HEADER);
    for (const id of comparison.regressed) lines.push(row(id));
    lines.push("");
  }
  if (comparison.unequalWork.length > 0) {
    lines.push("### Unequal work");
    lines.push("");
    lines.push(...CASE_TABLE_HEADER);
    for (const { id } of comparison.unequalWork) lines.push(row(id));
    lines.push("");
    lines.push("| Case | Fact | Base | Head |");
    lines.push("|---|---|---:|---:|");
    for (const { id, differences } of comparison.unequalWork) {
      for (const { fact, base, head } of differences) {
        lines.push(`| ${id.replace(/:/g, " ")} | ${fact} | ${String(base)} | ${String(head)} |`);
      }
    }
    lines.push("");
  }
  if (comparison.workNotVerified.length > 0) {
    lines.push("### Work not verified");
    lines.push("");
    lines.push(
      "Nothing in these cases shows that the two sides did the same work: they report no fact that could be " +
        "compared. Their timings are judged like any other.",
    );
    lines.push("");
    lines.push(...CASE_TABLE_HEADER);
    for (const id of comparison.workNotVerified) lines.push(row(id));
    lines.push("");
  }
  if (comparison.headOnlyMembers.length > 0) {
    lines.push("### Result members only the head has");
    lines.push("");
    lines.push(
      "The base's results hold the object each of these members sits in, and no such member. That is read as a " +
        "result type the head added a member to, and the member's tallies are compared with nothing.",
    );
    lines.push("");
    lines.push("| Category | Member | Cases |");
    lines.push("|---|---|---:|");
    for (const { category, member, cases } of comparison.headOnlyMembers) {
      lines.push(`| ${category} | ${member} | ${cases} |`);
    }
    lines.push("");
  }
  if (comparison.thrown.length > 0) {
    lines.push("### Thrown cases");
    lines.push("");
    for (const { id, base, head } of comparison.thrown) {
      lines.push(
        `- ${id}: base ${base === null ? "ran" : `threw "${base}"`}, head ${head === null ? "ran" : `threw "${head}"`}`,
      );
    }
    lines.push("");
  }
}

/** Says how the measured pairs of a paired run were shared between its timed processes. */
function describeTimedProcesses(processes: readonly TimedProcess[]): string {
  const shares = processes.map(
    ({ firstSide, pairs }) => `${pairs} with the ${firstSide} bundle loaded and prepared first`,
  );
  return (
    `both sides in ${processes.length === 1 ? "one process" : `${processes.length} processes`}` +
    (shares.length > 0 ? ` (${shares.join(", ")})` : "") +
    `, alternating which side runs first from pair to pair, starting each case's warmups and measured pairs ` +
    `with the process's first side`
  );
}

/** Appends the heap table of a memory record and the comparison the memory gate reads. */
function appendMemorySummary(lines: string[], record: BenchmarkRunRecord): void {
  const memory = record.memory;
  if (!memory) return;
  const megabytes = (bytes: number): string => (bytes / 1024 / 1024).toFixed(2);
  const { head, base } = memory;
  lines.push(
    `- Session: ${head.lensKeys.length} lenses, ${head.cycles} cycles of ${head.statesPerCycle} lens states, one ` +
      `process per side with --expose-gc`,
  );
  lines.push("");
  lines.push("### Retained heap after forced collections, MB");
  lines.push("");
  lines.push("Each figure is the JavaScript heap in use plus the array buffers, where typed arrays keep their data.");
  lines.push("");
  lines.push(
    `| Side | Before | ${head.heapAfterCycle.map((_, cycle) => `Cycle ${cycle + 1}`).join(" | ")} | End | Growth | ` +
      `End: heap | End: array buffers |`,
  );
  lines.push(`|---|---:|${head.heapAfterCycle.map(() => "---:|").join("")}---:|---:|---:|---:|`);
  for (const [label, session] of [
    [`base ${record.base?.shortCommit ?? ""}`, base],
    [`head ${record.git.shortCommit ?? "unknown"}`, head],
  ] as const) {
    if (!session) continue;
    const { heapBefore, heapAfterCycle, heapAtEnd } = session;
    lines.push(
      `| ${label} | ${megabytes(heapBefore.totalBytes)} | ` +
        `${heapAfterCycle.map((reading) => megabytes(reading.totalBytes)).join(" | ")} | ` +
        `${megabytes(heapAtEnd.totalBytes)} | ${megabytes(session.retainedGrowthBytes)} | ` +
        `${megabytes(heapAtEnd.heapUsedBytes)} | ${megabytes(heapAtEnd.arrayBuffersBytes)} |`,
    );
  }
  lines.push("");
  if (memory.retainedHeapRatio !== undefined) {
    lines.push(
      `Retained heap at the end, head / base: ${memory.retainedHeapRatio.toFixed(4)} ` +
        `(${memory.withinLimit ? "within" : "over"} the limit of ${RETAINED_HEAP_RATIO_LIMIT}).`,
    );
    lines.push("");
  }
}

function formatRatio(value: number | null | undefined): string {
  return value === null || value === undefined || !Number.isFinite(value) ? "n/a" : value.toFixed(3);
}

function formatInterval(interval: [number, number] | null | undefined): string {
  return interval ? `${interval[0].toFixed(3)} to ${interval[1].toFixed(3)}` : "n/a";
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
function collectMainCategoryPoints(record: BenchmarkSideResults, category: MainBenchmarkCategory): CategoryPoint[] {
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
  record: BenchmarkSideResults,
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
function collectAberrationCategoryPoints(record: BenchmarkSideResults, category: string): CategoryPoint[] {
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
function collectAberrationCategoryNames(record: BenchmarkSideResults): string[] {
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
