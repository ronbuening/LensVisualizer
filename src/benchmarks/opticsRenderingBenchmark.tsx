/**
 * Manual optics/rendering benchmark harness.
 *
 * This module is loaded by `scripts/benchmark-optics-rendering.mjs` through a Vite
 * SSR build so TSX, React server rendering, and catalog `import.meta.glob` behavior
 * match the application. The benchmark records representative pipeline costs rather
 * than correctness assertions: lens building, current-state layout, ray tracing,
 * analysis jobs, static SVG rendering, and aberration-panel rendering.
 *
 * A paired run bundles this same file a second time in a worktree of a base ref, so one
 * entry drives two engines. The file therefore names nothing that an older `src/` may
 * lack.
 */

import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import {
  BENCHMARK_SCHEMA_VERSION,
  DEFAULT_BENCHMARK_ITERATIONS,
  compareMemorySessions,
  digestCompletedWork,
  hashText,
  pairedSampleOrder,
  summarizeRun,
  tallyMarkupElements,
  type AberrationPanelScenarioResults,
  type BenchmarkBaseSide,
  type BenchmarkCellRef,
  type BenchmarkEntry,
  type BenchmarkRunRecord,
  type BenchmarkScenarioConfigSnapshot,
  type BenchmarkScenarioResults,
  type BenchmarkSkip,
  type BenchmarkStats,
  type AnalysisBenchmarkCategory,
  type HeapReading,
  type MainBenchmarkCategory,
  type MemorySessionReport,
  type NumericSummary,
  type TimedProcess,
  type UntimedBenchmarkPass,
} from "./benchmarkReport.js";
export {
  buildBenchmarkReport,
  buildPairedSummary,
  finishBenchmarkRecord,
  formatPairedRunFileName,
  formatRunFileName,
  planTimedProcesses,
  poolTimedRecords,
  serializeBenchmarkRecord,
} from "./benchmarkReport.js";
import { wideOpenStopAtZoom } from "../optics/apertureStop.js";
import buildLens from "../optics/buildLens.js";
import { analysisJobsForState2, createAnalysisComputationContext, prepareRuntimeState } from "../optics/compat.js";
import {
  anchorLayoutToCamera,
  computeAnalysisFieldGeometryAtState,
  computeChromaticRayFanSpread,
  conjugateK,
  doLayout,
  effectiveFNumber,
  eflAtFocus,
  entrancePupilAtState,
  fopenAtZoom,
  offsetVectorFieldRay,
  traceRay,
  traceRayChromatic,
  traceRayVector,
  traceRayVectorChromatic,
} from "../optics/optics.js";
import { computeCardinalElements, createAnalysisRequest } from "../optics/analysis.js";
import { computeElementShapes, createCoordinateTransforms } from "../optics/diagramGeometry.js";
import {
  clampLensMovement,
  createLensMovementTransform,
  type LensMovementTransform,
  type ResolvedLensMovement,
} from "../optics/lensMovement.js";
import {
  cameraDirectionForDiagramField,
  computePerspectiveMovementViewportExtent,
  createPerspectiveTraceContext,
  tracePerspectiveDiagramFan,
  type PerspectiveDiagramFanSample,
  type PerspectiveTraceContext,
} from "../optics/perspective/index.js";
import { obstructionAwareRayFractionsForDensity } from "../optics/raySampling.js";
import {
  analysisSamplingForQuality,
  type AnalysisQuality,
  type AnalysisSamplingOptions,
} from "../optics/analysis/analysisQuality.js";
import { resetPerfProbe } from "../utils/perfProbe.js";
import { LENS_CATALOG } from "../utils/catalog/lensCatalog.js";
import themes from "../utils/theme/themes.js";
import DiagramSVG from "../components/diagram/DiagramSVG.js";
import AberrationsPanel from "../components/display/analysis/AberrationsPanel.js";
import ComaTab from "../components/display/analysis/ComaTab.js";
import AstigmatismSection from "../components/display/analysis/aberrations/AstigmatismSection.js";
import ComaPreviewSection from "../components/display/analysis/aberrations/ComaPreviewSection.js";
import FieldCurvatureSection from "../components/display/analysis/aberrations/FieldCurvatureSection.js";
import MeridionalComaSection from "../components/display/analysis/aberrations/MeridionalComaSection.js";
import SagittalComaSection from "../components/display/analysis/aberrations/SagittalComaSection.js";
import SphericalAberrationSection from "../components/display/analysis/aberrations/SphericalAberrationSection.js";
import { computeOffAxisTraceGeometry } from "../components/hooks/offAxisRayUtils.js";
import { compileRaySegment, filterChannels } from "../components/hooks/raySegmentUtils.js";
import type { ChromaticRaySegment } from "../components/hooks/useChromaticRays.js";
import type { RaySegment } from "../components/hooks/useOnAxisRays.js";
import type { FieldGeometryState } from "../optics/optics.js";
import type { PreparedOpticalState } from "../optics/types.js";
import type { AnalysisComputationContext } from "../optics/compat.js";
import type {
  ChromaticChannel,
  ChromaticRayFanSpread,
  ChromaticRayFanSpreadByAxis,
  RuntimeLens,
} from "../types/optics.js";
import type { OffAxisMode, RayDensity } from "../types/state.js";

declare const process:
  | {
      memoryUsage?: () => { heapUsed: number; arrayBuffers?: number };
    }
  | undefined;

/**
 * Representative lens set for performance tracking.
 *
 * The list deliberately spans simple primes, aspheric/modern lenses, zooms, macro and
 * focus-heavy optics, perspective-control movement, fisheye projection launch, a large
 * format wide zoom, a fully Sellmeier-covered APO zoom, and a folded mirror fixture.
 */
export const DEFAULT_BENCHMARK_LENS_KEYS = [
  "canon-serenar-50f18",
  "apo-lanthar-50f2",
  "ricoh-gr3-28f28",
  "canon-rf-85f12l",
  "sony-fe-24-70mm-f28-gm-ii",
  "sony-fe-70-200mm-f28-gm-ii",
  "canon-rf100f28-macro",
  "nikon-pc-nikkor-19mm-f4e-ed",
  "canon-tse-50f28l-macro",
  "canon-ef-8-15mm-f4l-fisheye-usm",
  "fujifilm-gf-20-35mm-f4-r-wr",
  "leica-apo-vario-elmarit-sl-90-280-f28-4",
  "sigma-apo-macro-180mm-f28-os-hsm",
  "sigma-apo-macro-150mm-f28-os-hsm",
  "reference-maksutov-cassegrain-meniscus",
] as const;

/**
 * Fixed runtime states exercised for every lens.
 *
 * `focusT`, `zoomT`, `aberrationT`, and `stopdownT` are normalized slider positions
 * in the same 0..1 ranges used by the viewer. The scenarios intentionally keep the
 * matrix small because each benchmark run renders many React trees and traces many rays.
 */
export const BENCHMARK_SCENARIOS = [
  {
    id: "default",
    focusT: 0,
    zoomT: 0,
    aberrationT: 0,
    stopdownT: 0,
    movement: { shiftMm: 0, tiltDeg: 0 },
    rayDensity: "normal" as RayDensity,
    rayTracksF: false,
    showOnAxis: true,
    showOffAxis: "trueAngle" as OffAxisMode,
    showChromatic: false,
    analysisQuality: "settled" as AnalysisQuality,
  },
  {
    id: "stopped-close",
    focusT: 1,
    zoomT: 0.5,
    aberrationT: 0,
    stopdownT: 0.5,
    movement: { shiftMm: 6, tiltDeg: 4 },
    rayDensity: "normal" as RayDensity,
    rayTracksF: true,
    showOnAxis: true,
    showOffAxis: "trueAngle" as OffAxisMode,
    showChromatic: false,
    analysisQuality: "settled" as AnalysisQuality,
  },
  {
    id: "tele-dense-chromatic",
    focusT: 0,
    zoomT: 1,
    aberrationT: 0,
    stopdownT: 0,
    movement: { shiftMm: 0, tiltDeg: 0 },
    rayDensity: "dense" as RayDensity,
    rayTracksF: false,
    showOnAxis: true,
    showOffAxis: "trueAngle" as OffAxisMode,
    showChromatic: true,
    analysisQuality: "settled" as AnalysisQuality,
  },
  {
    id: "interactive-drag",
    focusT: 0.63,
    zoomT: 0.75,
    aberrationT: 0,
    stopdownT: 0.2,
    movement: { shiftMm: -4, tiltDeg: -2.5 },
    rayDensity: "dense" as RayDensity,
    rayTracksF: false,
    showOnAxis: true,
    showOffAxis: "trueAngle" as OffAxisMode,
    showChromatic: true,
    analysisQuality: "interactive" as AnalysisQuality,
  },
] as const satisfies readonly BenchmarkScenarioConfigSnapshot[];

/**
 * The heavy set: seven cells of the matrix above that hold about half of its run time, for a check that is
 * quicker than the whole matrix. It has the perspective-control lenses in their moved and dragged states, the
 * PC-Nikkor 19mm default cell that carries the cost of the intersection contract, and two wide zooms at default.
 */
export const HEAVY_BENCHMARK_CELLS = [
  { lensKey: "nikon-pc-nikkor-19mm-f4e-ed", scenarioId: "default" },
  { lensKey: "nikon-pc-nikkor-19mm-f4e-ed", scenarioId: "stopped-close" },
  { lensKey: "nikon-pc-nikkor-19mm-f4e-ed", scenarioId: "interactive-drag" },
  { lensKey: "canon-tse-50f28l-macro", scenarioId: "stopped-close" },
  { lensKey: "canon-tse-50f28l-macro", scenarioId: "interactive-drag" },
  { lensKey: "sony-fe-24-70mm-f28-gm-ii", scenarioId: "default" },
  { lensKey: "fujifilm-gf-20-35mm-f4-r-wr", scenarioId: "default" },
] as const satisfies readonly {
  /* Typed against the matrix, so a lens or scenario that leaves it fails the type check here. */
  lensKey: (typeof DEFAULT_BENCHMARK_LENS_KEYS)[number];
  scenarioId: (typeof BENCHMARK_SCENARIOS)[number]["id"];
}[];

/** Input contract shared by persisted scenario metadata and runtime snapshots. */
type ScenarioConfig = BenchmarkScenarioConfigSnapshot;

/** Small serializable facts attached to a measured entry to prove the callback did real work. */
export type BenchmarkOutput = Record<string, number | string | boolean | null>;

/** Metadata captured by the script wrapper before this SSR module is invoked. */
interface BenchmarkMetadata {
  createdAt: string;
  git: BenchmarkRunRecord["git"];
  environment: BenchmarkRunRecord["environment"];
}

/** Options accepted by the manual benchmark runner. */
export interface OpticsRenderingBenchmarkOptions extends BenchmarkMetadata {
  /** Number of unrecorded calls made before measured samples. Defaults to 1. */
  warmups?: number;
  /** Number of measured samples per category. Defaults to 3. In a paired run, the pairs this process measures. */
  iterations?: number;
  /** Validate schema and lens keys without measuring or writing records. */
  dryRun?: boolean;
  /** Optional subset of catalog lens keys; primarily useful for local diagnosis. */
  lensKeys?: string[];
  /** Run only these lens/scenario cells, a lens at a time in the order given, and mark the record as that subset. */
  cells?: readonly BenchmarkCellRef[];
  /**
   * Keep every measured sample in the record, and every heap delta until `poolTimedRecords` has summarized them.
   * Set for records that are not written to `runs/`.
   */
  keepSamples?: boolean;
  /** The base side of a paired run. Each case is then sampled on both engines, in alternating order. */
  base?: PairedBenchmarkBase;
  /** Called before each cell is prepared, so a driver can report progress. */
  onCell?: BenchmarkCellHook;
}

/** Called before a cell is prepared, with the cell and its place in the run. */
export type BenchmarkCellHook = (progress: BenchmarkCellRef & { index: number; count: number }) => void | Promise<void>;

/** The base ref of a paired run and the entry point of the bundle built from its tree. */
export interface PairedBenchmarkBase extends Pick<
  BenchmarkBaseSide,
  "ref" | "commit" | "shortCommit" | "ownDependencies"
> {
  /** `prepareBenchmarkLens` of the base bundle: this same file, bundled against the base engine. */
  prepareBenchmarkLens: (lensKey: string) => PreparedBenchmarkLens;
  /**
   * The side whose lenses and cells this process prepares first and which starts each case's warmups and measured
   * pairs, matching the bundle its driver loaded first. A paired run times in one process of each kind
   * (`planTimedProcesses`). Defaults to the base.
   */
  firstSide?: TimedProcess["firstSide"];
}

/**
 * One timed callback of a cell, described before it is sampled.
 *
 * A paired run needs both engines' callbacks for the same case in hand at once, so a cell is first laid out as a
 * list of cases and then sampled case by case.
 */
export interface BenchmarkCase {
  /** `lens:scenario:category`; the two sides of a paired run label a case alike. */
  id: string;
  /** Unmeasured work that this case and the ones after it rely on. It runs once, before the case's first call. */
  setup?: () => void;
  /** The timed callback. */
  run: () => BenchmarkOutput;
  /**
   * Untimed work that tallies what the results of `run` do not show. The untimed pass calls it after the case's one
   * call.
   */
  inspect?: () => void;
  /** The case's place in the cell's results, filled when the case has been sampled. */
  entry: BenchmarkEntry;
}

/** One lens/scenario cell, prepared and laid out as cases. Sampling the cases fills the two result objects. */
export interface PreparedBenchmarkCell {
  results: BenchmarkScenarioResults;
  aberrationPanels: AberrationPanelScenarioResults;
  cases: BenchmarkCase[];
}

/** One built lens, whose cells share it as the scenarios of a viewer session share one lens. */
export interface PreparedBenchmarkLens {
  /** Fingerprint of the prescription the lens was built from, so a paired run can tell when its sides' differ. */
  dataFingerprint(): number;
  prepareCell(scenarioId: string): PreparedBenchmarkCell;
}

/** Sampling counts and what to keep of the samples. */
interface SamplingOptions {
  warmups: number;
  iterations: number;
  keepSamples: boolean;
}

/** Collects the cases of one cell while its result objects are built. */
interface CasePlan {
  cases: BenchmarkCase[];
  /** Queue a timed callback, with what inspects it in the untimed pass. The entry is filled when the case is sampled. */
  measure(id: string, run: () => BenchmarkOutput, inspect?: () => void): BenchmarkEntry;
  /** Run unmeasured work once, just before the next queued case is first called. */
  before(setup: () => void): void;
}

/**
 * Reusable state for one lens/scenario pair.
 *
 * Values mirror the viewer's current optical state: `zPos` is the shifted surface
 * coordinate array in millimeters, `IMG_MM` is the reference image plane, and the
 * coordinate transforms map millimeter coordinates into SVG pixels. Precomputing this
 * snapshot lets warm-path categories avoid rebuilding unrelated state.
 */
export interface ScenarioSnapshot {
  L: RuntimeLens;
  scenario: ScenarioConfig;
  focusT: number;
  zoomT: number;
  aberrationT: number;
  stopdownT: number;
  IMG_MM: number;
  zPos: number[];
  sx: (z: number) => number;
  sy: (y: number) => number;
  clampedRayEnd: (lastZ: number, lastY: number, u: number, targetZ: number) => [number, number];
  CX: number;
  IX: number;
  effectiveSC: number;
  shapes: ReturnType<typeof computeElementShapes>;
  movement: ResolvedLensMovement;
  movementTransform: LensMovementTransform;
  lensAxis: [[number, number], [number, number]] | null;
  perspectiveTraceContext: PerspectiveTraceContext;
  stopZ: number;
  currentPhysStopSD: number;
  currentEPSD: number;
  dynamicEFL: number;
  fieldGeometry: FieldGeometryState | null;
  preparedState: PreparedOpticalState;
  analysisContext: AnalysisComputationContext;
  analysisSampling?: AnalysisSamplingOptions;
}

/** Counts returned from ray work measurement. */
export interface RayWorkOutput extends BenchmarkOutput {
  onAxisRays: number;
  offAxisRays: number;
  chromaticRays: number;
  hasChromaticRayFanSpread: boolean;
  movementActive: boolean;
  perspectiveFanSweeps: number;
  perspectiveRaySamples: number;
}

/** Full ray outputs reused by SVG rendering so trace cost is not counted twice there. */
interface RayWorkResult {
  rays: RaySegment[];
  offAxisRays: RaySegment[];
  chromaticRays: ChromaticRaySegment[];
  chromaticRayFanSpread: ChromaticRayFanSpread | null;
  chromaticRayFanSpreads: ChromaticRayFanSpreadByAxis;
  output: RayWorkOutput;
}

/** Precomputed aberration values shared by section-level render benchmarks. */
interface AberrationDataValues {
  sphericalAberration?: unknown;
  saProfile?: unknown;
  saBlurCharacter?: unknown;
  fieldCurvature?: unknown;
  chromaticFieldCurvature?: unknown;
  coma?: ReturnType<typeof analysisJobsForState2.computeComaAnalysis>;
}

/** Analysis breakdown results keyed by category id. */
type AnalysisBenchmarkResults = Record<AnalysisBenchmarkCategory, BenchmarkEntry>;

/**
 * Runs the manual optics/rendering benchmark and returns a persisted record object.
 *
 * The function is side-effect-free with respect to the filesystem. The script wrapper
 * owns writing run JSON, pruning old records, and regenerating the Markdown report.
 * With `dryRun`, only lens-key validation and schema construction are performed.
 *
 * With `base`, every case is sampled on both engines and the record carries the base
 * side beside its own. Such a record is one process's share of a timed pass:
 * `poolTimedRecords` makes the pass's record of the processes' records, and
 * `finishBenchmarkRecord` then adds the untimed passes and the comparison.
 */
export async function runOpticsRenderingBenchmark(
  options: OpticsRenderingBenchmarkOptions,
): Promise<BenchmarkRunRecord> {
  const selection = selectBenchmarkCells(options);
  const warmups = options.warmups ?? 1;
  const iterations = options.iterations ?? DEFAULT_BENCHMARK_ITERATIONS;
  const record = createRunRecord(options, selection, warmups, iterations);
  const firstSide = options.base?.firstSide ?? "base";

  if (options.dryRun) {
    record.warnings.push("Dry run: lens keys and benchmark schema were validated without running measurements.");
    record.summary = summarizeRun(record);
    return record;
  }

  const sampling: SamplingOptions = { warmups, iterations, keepSamples: options.keepSamples ?? false };
  const base: Pick<BenchmarkBaseSide, "results" | "aberrationPanels"> = { results: {}, aberrationPanels: {} };
  let cellIndex = 0;
  for (const lensKey of selection.lensKeys) {
    record.results[lensKey] = {};
    record.aberrationPanels[lensKey] = {};
    base.results[lensKey] = {};
    base.aberrationPanels[lensKey] = {};
    const { base: baseLens, head: headLens } = inSideOrder(
      firstSide,
      () => options.base?.prepareBenchmarkLens(lensKey),
      () => prepareBenchmarkLens(lensKey),
    );
    if (baseLens && baseLens.dataFingerprint() !== headLens.dataFingerprint()) {
      record.warnings.push(
        `The prescription of ${lensKey} differs between the base and the head, so its cases compare two lenses as ` +
          `well as two engines.`,
      );
    }

    for (const scenario of selection.scenariosByLens[lensKey]) {
      if (options.onCell) {
        await options.onCell({ lensKey, scenarioId: scenario.id, index: cellIndex, count: selection.cellCount });
      }
      cellIndex++;
      const { base: baseCell, head: headCell } = inSideOrder(
        firstSide,
        () => baseLens?.prepareCell(scenario.id),
        () => headLens.prepareCell(scenario.id),
      );
      sampleCell(headCell, baseCell, sampling, firstSide);
      record.results[lensKey][scenario.id] = headCell.results;
      record.aberrationPanels[lensKey][scenario.id] = headCell.aberrationPanels;
      if (baseCell) {
        base.results[lensKey][scenario.id] = baseCell.results;
        base.aberrationPanels[lensKey][scenario.id] = baseCell.aberrationPanels;
      }
    }
  }

  record.summary = summarizeRun(record);
  if (options.base) {
    const { ref, commit, shortCommit, ownDependencies } = options.base;
    record.base = {
      ref,
      commit,
      shortCommit,
      ...(ownDependencies ? { ownDependencies } : {}),
      ...base,
      summary: summarizeRun(base),
    };
    record.config.timedProcesses = [{ firstSide, pairs: iterations }];
  }
  return record;
}

/**
 * Call the two sides of a paired run in the order this process puts them in.
 *
 * @param firstSide - the side that goes first
 * @param base - what the base side does
 * @param head - what the head side does
 * @returns what each returned
 */
function inSideOrder<Base, Head>(
  firstSide: TimedProcess["firstSide"],
  base: () => Base,
  head: () => Head,
): { base: Base; head: Head } {
  if (firstSide === "base") {
    const fromBase = base();
    return { base: fromBase, head: head() };
  }
  const fromHead = head();
  return { base: base(), head: fromHead };
}

/**
 * Runs every case once, untimed, for what a timing cannot show: what each case completed.
 *
 * A driver runs this in a process of its own, on the bundle it times, so tallying costs the timed samples nothing.
 *
 * @param options - the lenses or cells to run, as for the timed run
 * @returns the tallies of every case, by case id
 */
export async function runUntimedBenchmarkPass(
  options: Pick<OpticsRenderingBenchmarkOptions, "lensKeys" | "cells" | "onCell">,
): Promise<UntimedBenchmarkPass> {
  const selection = selectBenchmarkCells(options);
  const pass: UntimedBenchmarkPass = { cases: {} };
  let cellIndex = 0;
  for (const lensKey of selection.lensKeys) {
    const lens = prepareBenchmarkLens(lensKey);
    for (const scenario of selection.scenariosByLens[lensKey]) {
      if (options.onCell) {
        await options.onCell({ lensKey, scenarioId: scenario.id, index: cellIndex, count: selection.cellCount });
      }
      cellIndex++;
      for (const benchmarkCase of lens.prepareCell(scenario.id).cases) {
        benchmarkCase.setup?.();
        const work = new Map<string, Record<string, number>>();
        workLog = work;
        try {
          benchmarkCase.run();
          benchmarkCase.inspect?.();
          pass.cases[benchmarkCase.id] = { work: [...work.values()] };
        } catch (error) {
          pass.cases[benchmarkCase.id] = { message: error instanceof Error ? error.message : String(error) };
        } finally {
          workLog = null;
        }
      }
    }
  }
  return pass;
}

/* The state a memory session sets each lens to first. It is none of the benchmark scenarios: nothing is moved or
 * stopped down, and every ray family is drawn. */
const MEMORY_SESSION_AT_REST: ScenarioConfig = {
  id: "memory-session",
  focusT: 0,
  zoomT: 0,
  aberrationT: 0,
  stopdownT: 0,
  movement: { shiftMm: 0, tiltDeg: 0 },
  rayDensity: "normal",
  rayTracksF: false,
  showOnAxis: true,
  showOffAxis: "trueAngle",
  showChromatic: true,
  analysisQuality: "settled",
};

/* What each control of the memory session is swept through, after that state. Shift and tilt apply to
 * perspective-control lenses and zoom to zooms; the values are inside every benchmark lens's ranges. */
const MEMORY_SESSION_SWEEPS = {
  focusT: [0.5, 1],
  zoomT: [0.5, 1],
  stopdownT: [0.5, 1],
  shiftMm: [6, -6],
  tiltDeg: [4, -4],
} as const;

/** Passes over the lens list in one memory session, unless the caller asks for another number. */
const MEMORY_SESSION_CYCLES = 3;

/**
 * Runs a scripted viewer session and reports the heap it leaves in use.
 *
 * A cycle builds each lens in turn, as switching lenses does, sweeps its controls one at a time, computing the
 * diagram rays and the settled analysis at every state, and drops every reference to the lens before the next.
 * The retained heap is read after forced collections before the first cycle, after each cycle and at the end: the
 * JavaScript heap in use and the array buffers, which hold the data of typed arrays outside that heap. A cache
 * that outlives its lens, or grows with every state, shows as memory the session did not give back, whichever of
 * the two it is kept in.
 *
 * It needs `--expose-gc`, and a process of its own: a second engine or a bundler in the same heap would be counted.
 *
 * @param options - the lenses or cells whose lenses to use, and the number of cycles
 * @returns the retained heap at each of those points
 * @throws when the runtime exposes no forced collection or no heap figure
 */
export async function runMemorySession(
  options: Pick<OpticsRenderingBenchmarkOptions, "lensKeys" | "cells"> & { cycles?: number },
): Promise<MemorySessionReport> {
  const { lensKeys } = selectBenchmarkCells(options);
  const cycles = options.cycles ?? MEMORY_SESSION_CYCLES;
  const heapBefore = await settledHeap();
  const heapAfterCycle: HeapReading[] = [];
  let statesPerCycle = 0;
  for (let cycle = 0; cycle < cycles; cycle++) {
    statesPerCycle = 0;
    for (const lensKey of lensKeys) statesPerCycle += runMemorySessionLens(lensKey);
    heapAfterCycle.push(await settledHeap());
  }
  const heapAtEnd = await settledHeap();
  return {
    lensKeys,
    cycles,
    statesPerCycle,
    heapBefore,
    heapAfterCycle,
    heapAtEnd,
    retainedGrowthBytes: heapAtEnd.totalBytes - heapBefore.totalBytes,
  };
}

/** Build one lens, sweep its controls and return how many states were computed; nothing built here outlives it. */
function runMemorySessionLens(lensKey: string): number {
  const L = buildLens(LENS_CATALOG[lensKey]);
  const atRest = MEMORY_SESSION_AT_REST;
  const states: ScenarioConfig[] = [
    atRest,
    ...MEMORY_SESSION_SWEEPS.focusT.map((focusT) => ({ ...atRest, focusT })),
    ...(L.isZoom ? MEMORY_SESSION_SWEEPS.zoomT.map((zoomT) => ({ ...atRest, zoomT })) : []),
    ...MEMORY_SESSION_SWEEPS.stopdownT.map((stopdownT) => ({ ...atRest, stopdownT })),
    ...(L.perspectiveControl
      ? [
          ...MEMORY_SESSION_SWEEPS.shiftMm.map((shiftMm) => ({ ...atRest, movement: { shiftMm, tiltDeg: 0 } })),
          ...MEMORY_SESSION_SWEEPS.tiltDeg.map((tiltDeg) => ({ ...atRest, movement: { shiftMm: 0, tiltDeg } })),
        ]
      : []),
  ];
  for (const state of states) {
    const snapshot = buildScenarioSnapshot(L, state);
    computeRayWork(snapshot);
    computeAnalysisWork(snapshot);
  }
  return states.length;
}

/**
 * Memory in use once forced collections have settled.
 *
 * One collection is not enough. A cache keyed weakly by a lens gives its values up in the collection after the one
 * that frees the lens, and finalizers run between turns of the event loop. The array buffers are read with the
 * heap: a typed array's numbers live there, and a collection frees them as it frees the array.
 */
async function settledHeap(): Promise<HeapReading> {
  const gc = (globalThis as { gc?: () => void }).gc;
  if (typeof gc !== "function") throw new Error("The memory session needs a runtime started with --expose-gc.");
  for (let round = 0; round < 3; round++) {
    gc();
    await new Promise((resolve) => setTimeout(resolve, 0));
  }
  gc();
  const usage = process?.memoryUsage?.();
  if (!usage || usage.arrayBuffers === undefined) {
    throw new Error("The memory session needs process.memoryUsage() with its arrayBuffers figure.");
  }
  return {
    heapUsedBytes: usage.heapUsed,
    arrayBuffersBytes: usage.arrayBuffers,
    totalBytes: usage.heapUsed + usage.arrayBuffers,
  };
}

/**
 * Builds the record of a `--memory` run from the sessions its driver ran, one process per side.
 *
 * No scenario of the matrix runs in a session, so the record's config names none. It holds the lenses and the
 * session itself: the state each lens is set to first and what each control is swept through.
 *
 * @param options - the run's metadata, the lenses or cells the sessions used, and the base ref of a paired run
 * @param sessions - what `runMemorySession` returned in each side's process
 * @returns a record with no timed results and the sessions under `memory`
 */
export function createMemoryBenchmarkRecord(
  options: BenchmarkMetadata &
    Pick<OpticsRenderingBenchmarkOptions, "lensKeys" | "cells"> & {
      base?: Pick<BenchmarkBaseSide, "ref" | "commit" | "shortCommit" | "ownDependencies">;
    },
  sessions: { head: MemorySessionReport; base?: MemorySessionReport },
): BenchmarkRunRecord {
  const record = createRunRecord(options, selectBenchmarkCells(options), 0, 0);
  const { caseSet } = record.config;
  record.config = {
    warmups: 0,
    iterations: 0,
    lensKeys: record.config.lensKeys,
    scenarios: [],
    ...(caseSet ? { caseSet } : {}),
    memorySession: {
      cycles: sessions.head.cycles,
      atRest: copyScenarioConfig(MEMORY_SESSION_AT_REST),
      sweeps: Object.fromEntries(
        Object.entries(MEMORY_SESSION_SWEEPS).map(([control, values]) => [control, [...values]]),
      ),
    },
  };
  record.summary = summarizeRun(record);
  if (options.base) {
    const { ref, commit, shortCommit, ownDependencies } = options.base;
    record.base = {
      ref,
      commit,
      shortCommit,
      ...(ownDependencies ? { ownDependencies } : {}),
      results: {},
      aberrationPanels: {},
      summary: record.summary,
    };
  }
  record.memory = compareMemorySessions(sessions.head, sessions.base);
  return record;
}

/** The lenses of a run, each with the scenarios it runs under, in run order. */
interface CellSelection {
  lensKeys: string[];
  scenariosByLens: Record<string, ScenarioConfig[]>;
  cellCount: number;
  /** The cells as given, when the run is a subset of the matrix. */
  cells?: readonly BenchmarkCellRef[];
}

/** Resolve what a run covers: the given cells, or every scenario of the given or default lenses. */
function selectBenchmarkCells({
  lensKeys,
  cells,
}: Pick<OpticsRenderingBenchmarkOptions, "lensKeys" | "cells">): CellSelection {
  if (cells) {
    validateBenchmarkCells(cells);
    const scenariosByLens: Record<string, ScenarioConfig[]> = {};
    for (const { lensKey, scenarioId } of cells) {
      const scenario = BENCHMARK_SCENARIOS.find((candidate) => candidate.id === scenarioId);
      if (scenario) (scenariosByLens[lensKey] ??= []).push(scenario);
    }
    return { lensKeys: Object.keys(scenariosByLens), scenariosByLens, cellCount: cells.length, cells };
  }
  const keys = lensKeys ?? [...DEFAULT_BENCHMARK_LENS_KEYS];
  validateLensKeys(keys);
  return {
    lensKeys: keys,
    scenariosByLens: Object.fromEntries(keys.map((key) => [key, [...BENCHMARK_SCENARIOS]])),
    cellCount: keys.length * BENCHMARK_SCENARIOS.length,
  };
}

/** Start a record: everything but the measurements. A subset run names its cells and only the scenarios they use. */
function createRunRecord(
  metadata: BenchmarkMetadata,
  selection: CellSelection,
  warmups: number,
  iterations: number,
): BenchmarkRunRecord {
  const { cells } = selection;
  const scenarios = BENCHMARK_SCENARIOS.filter(({ id }) => !cells || cells.some((cell) => cell.scenarioId === id));
  const isHeavySet =
    cells?.length === HEAVY_BENCHMARK_CELLS.length &&
    HEAVY_BENCHMARK_CELLS.every(
      (heavy, index) => heavy.lensKey === cells[index].lensKey && heavy.scenarioId === cells[index].scenarioId,
    );
  return {
    schemaVersion: BENCHMARK_SCHEMA_VERSION,
    createdAt: metadata.createdAt,
    git: metadata.git,
    environment: metadata.environment,
    config: {
      warmups,
      iterations,
      lensKeys: selection.lensKeys,
      scenarios: scenarios.map((scenario) => scenario.id),
      scenarioSnapshots: scenarios.map(copyScenarioConfig),
      ...(cells ? { cells: cells.map((cell) => ({ ...cell })), caseSet: isHeavySet ? "heavy" : "custom" } : {}),
    },
    results: {},
    aberrationPanels: {},
    summary: { main: {}, aberrationPanels: {} },
    warnings: [],
  };
}

/**
 * Build one benchmark lens and return what lays out its cells.
 *
 * Every cell of a lens shares the one built lens, so a later scenario runs on the caches an earlier one filled, as
 * a viewer session does. A paired run calls this on each side's bundle.
 *
 * @param lensKey - a catalog lens key
 * @throws when the catalog has no such lens
 */
export function prepareBenchmarkLens(lensKey: string): PreparedBenchmarkLens {
  validateLensKeys([lensKey]);
  const L = buildLens(LENS_CATALOG[lensKey]);
  return {
    dataFingerprint: () => hashText(JSON.stringify(LENS_CATALOG[lensKey])),
    prepareCell(scenarioId) {
      const scenario = BENCHMARK_SCENARIOS.find((candidate) => candidate.id === scenarioId);
      if (!scenario) throw new Error(`Benchmark scenario not found: ${scenarioId}`);
      const snapshot = buildScenarioSnapshot(L, scenario);
      const rayWork = computeRayWork(snapshot);
      const plan = createCasePlan();
      const results = measureMainScenario(lensKey, scenario, L, snapshot, rayWork, plan);
      const aberrationPanels = measureAberrationPanels(lensKey, scenario, snapshot, plan);
      return { results, aberrationPanels, cases: plan.cases };
    },
  };
}

/**
 * Throws when a cell names a lens the catalog lacks or a scenario the matrix lacks.
 *
 * @param cells - the cells of a subset run
 */
export function validateBenchmarkCells(cells: readonly BenchmarkCellRef[]): void {
  validateLensKeys(cells.map(({ lensKey }) => lensKey));
  const unknown = cells.filter(({ scenarioId }) => !BENCHMARK_SCENARIOS.some(({ id }) => id === scenarioId));
  if (unknown.length > 0) {
    throw new Error(`Benchmark scenario(s) not found: ${unknown.map(({ scenarioId }) => scenarioId).join(", ")}`);
  }
}

/** Throws early when a requested benchmark lens is not present in the runtime catalog. */
function validateLensKeys(lensKeys: readonly string[]): void {
  const missing = lensKeys.filter((key) => !LENS_CATALOG[key]);
  if (missing.length > 0) {
    throw new Error(`Benchmark lens key(s) not found in catalog: ${missing.join(", ")}`);
  }
}

/** Copies nested scenario inputs before persisting them in a benchmark record. */
function copyScenarioConfig(scenario: ScenarioConfig): BenchmarkScenarioConfigSnapshot {
  return {
    ...scenario,
    movement: { ...scenario.movement },
  };
}

/** Build one benchmark snapshot without running the full timing matrix. */
export function createBenchmarkScenarioSnapshot(lensKey: string, scenarioId: string): ScenarioSnapshot {
  validateLensKeys([lensKey]);
  const scenario = BENCHMARK_SCENARIOS.find((candidate) => candidate.id === scenarioId);
  if (!scenario) throw new Error(`Benchmark scenario not found: ${scenarioId}`);
  return buildScenarioSnapshot(buildLens(LENS_CATALOG[lensKey]), scenario);
}

/** Execute the scenario's ray work through the same path measured by the harness. */
export function computeBenchmarkScenarioRayWork(snapshot: ScenarioSnapshot): RayWorkOutput {
  return { ...computeRayWork(snapshot).output };
}

/** Execute the scenario's coarse analysis workload without recording timings. */
export function computeBenchmarkScenarioAnalysisWork(snapshot: ScenarioSnapshot): BenchmarkOutput {
  return { ...computeAnalysisWork(snapshot) };
}

/**
 * Measures the main pipeline categories for one lens/scenario cell.
 *
 * Cold total rebuilds the lens and all derived work to approximate first-use cost.
 * Warm total reuses the prepared snapshot and measures repeated viewer work after the
 * catalog lens has already been normalized.
 *
 * Each category is queued on the plan in the order written here, which is the order it
 * is sampled in; the entries of the object returned are filled then.
 */
function measureMainScenario(
  lensKey: string,
  scenario: ScenarioConfig,
  L: RuntimeLens,
  snapshot: ScenarioSnapshot,
  rayWork: RayWorkResult,
  plan: CasePlan,
): BenchmarkScenarioResults {
  const measure = (category: MainBenchmarkCategory, fn: () => BenchmarkOutput, inspect?: () => void): BenchmarkEntry =>
    plan.measure(`${lensKey}:${scenario.id}:${category}`, fn, inspect);
  const inspectFocus = bestFocusInspection(snapshot);

  return {
    build: measure("build", () => {
      const built = buildLens(LENS_CATALOG[lensKey]);
      return { surfaces: built.N, elements: built.elements.length, folded: built.isFoldedOptics };
    }),
    layout: measure("layout", () => {
      const next = buildScenarioSnapshot(L, scenario);
      return {
        surfaces: next.L.N,
        shapes: next.shapes.length,
        imageZ: next.IMG_MM,
        fieldGeometry: next.fieldGeometry ? "ok" : "missing",
        movementActive: next.movement.active,
        shiftMm: next.movement.shiftMm,
        tiltDeg: next.movement.tiltDeg,
        analysisQuality: next.scenario.analysisQuality,
      };
    }),
    rays: measure("rays", () => computeRayWork(snapshot).output),
    analysis: measure("analysis", () => computeAnalysisWork(buildScenarioSnapshot(L, scenario)), inspectFocus),
    analysisBreakdown: measureAnalysisBreakdown(lensKey, scenario, snapshot, plan),
    svgRender: measure("svgRender", () => renderDiagram(snapshot, rayWork)),
    totalCold: measure(
      "totalCold",
      () => {
        const built = buildLens(LENS_CATALOG[lensKey]);
        const nextSnapshot = buildScenarioSnapshot(built, scenario);
        const nextRayWork = computeRayWork(nextSnapshot);
        computeAnalysisWork(nextSnapshot);
        renderDiagram(nextSnapshot, nextRayWork);
        return {
          surfaces: nextSnapshot.L.N,
          rays: nextRayWork.output.onAxisRays + nextRayWork.output.offAxisRays + nextRayWork.output.chromaticRays,
        };
      },
      inspectFocus,
    ),
    totalWarm: measure(
      "totalWarm",
      () => {
        const nextSnapshot = buildScenarioSnapshot(L, scenario);
        const nextRayWork = computeRayWork(nextSnapshot);
        computeAnalysisWork(nextSnapshot);
        renderDiagram(nextSnapshot, nextRayWork);
        return {
          surfaces: nextSnapshot.L.N,
          rays: nextRayWork.output.onAxisRays + nextRayWork.output.offAxisRays + nextRayWork.output.chromaticRays,
        };
      },
      inspectFocus,
    ),
  };
}

/**
 * Builds the viewer-equivalent optical state for one scenario.
 *
 * The benchmark mirrors `LensViewer` conventions: layout is anchored to the reference
 * image plane, focus/zoom/aberration sliders are normalized, and stop-down scales both
 * physical stop semi-diameter and entrance-pupil semi-diameter from the open-aperture
 * values. Cardinal and effective f-number calls are included to keep layout work close
 * to the visible viewer path even when their return values are not serialized.
 */
function buildScenarioSnapshot(L: RuntimeLens, scenario: ScenarioConfig): ScenarioSnapshot {
  const focusT = scenario.focusT;
  const zoomT = L.isZoom ? scenario.zoomT : 0;
  const aberrationT = L.aberrationControl ? scenario.aberrationT : 0;
  const stopdownT = scenario.stopdownT;
  const ref = doLayout(0, 0, L);
  const cur = doLayout(focusT, zoomT, L, aberrationT);
  const cameraLayout = anchorLayoutToCamera(ref, cur);
  const IMG_MM = cameraLayout.imgZ;
  const zPos = [...cameraLayout.z];
  const movement = clampLensMovement(L, scenario.movement);
  const movementTransform = createLensMovementTransform(IMG_MM, movement);
  const movementViewportExtent = computePerspectiveMovementViewportExtent({
    zPos,
    maxSemiDiameterMm: L.maxSD,
    imagePlaneZ: IMG_MM,
    config: L.perspectiveControl,
    movement,
  });
  const coordinateZExtent = movementViewportExtent
    ? {
        min: Math.min(0, IMG_MM, movementViewportExtent.z.min),
        max: Math.max(0, IMG_MM, movementViewportExtent.z.max),
      }
    : undefined;
  const fieldGeometry = computeAnalysisFieldGeometryAtState(focusT, zoomT, L, aberrationT);
  const { sx, sy, clampedRayEnd, CX, IX, effectiveSC } = createCoordinateTransforms({
    svgW: L.svgW,
    svgH: L.svgH,
    SC: L.SC,
    YSC: L.YSC,
    lensShiftFrac: L.lensShiftFrac,
    imgMM: IMG_MM,
    scaleRatio: null,
    zExtent: coordinateZExtent,
    yExtent: movementViewportExtent?.y,
  });
  const shapes = computeElementShapes(L, zPos, sx, sy, movementTransform.point);
  const currentFOPEN = fopenAtZoom(zoomT, L);
  const rawFNumber = L.FOPEN * Math.pow(L.maxFstop / L.FOPEN, stopdownT);
  const fNumber = Math.max(rawFNumber, currentFOPEN);
  const wideOpenStopSD = wideOpenStopAtZoom(zoomT, L);
  const currentPhysStopSD = (wideOpenStopSD * currentFOPEN) / fNumber;
  const baseEPSD = fieldGeometry
    ? entrancePupilAtState(wideOpenStopSD, focusT, zoomT, L, fieldGeometry, aberrationT).epSD
    : L.EP.epSD;
  const currentEPSD = (baseEPSD * currentFOPEN) / fNumber;
  const dynamicEFL = eflAtFocus(focusT, zoomT, L, aberrationT);
  effectiveFNumber(fNumber, focusT, zoomT, L, aberrationT);

  const preparedState = prepareRuntimeState(L, focusT, zoomT, aberrationT);
  computeCardinalElements(
    createAnalysisRequest({ preparedState, dynamicEFL, currentEPSD, currentPhysStopSD, fieldGeometry }),
    { zPos, imagePlaneZ: IMG_MM },
  );
  const perspectiveTraceContext = createPerspectiveTraceContext({
    preparedState,
    cameraZPos: zPos,
    movement: { shiftMm: movement.shiftMm, tiltDeg: movement.tiltDeg },
    tiltPivot: movement.config?.tiltPivot,
  });
  const analysisSampling = analysisSamplingForQuality(scenario.analysisQuality ?? "settled");
  const analysisContext = createAnalysisComputationContext({
    preparedState,
    dynamicEFL,
    currentEPSD,
    currentPhysStopSD,
    fieldGeometry,
    analysisQuality: scenario.analysisQuality ?? "settled",
    sampling: analysisSampling,
    perspectiveTraceContext,
  });
  const lensAxis = movement.active ? movementTransform.axis(zPos[0] - L.rayLead, IMG_MM) : null;

  return {
    L,
    scenario,
    focusT,
    zoomT,
    aberrationT,
    stopdownT,
    IMG_MM,
    zPos,
    sx,
    sy,
    clampedRayEnd,
    CX,
    IX,
    effectiveSC,
    shapes,
    movement,
    movementTransform,
    lensAxis,
    perspectiveTraceContext,
    stopZ: zPos[L.stopIdx],
    currentPhysStopSD,
    currentEPSD,
    dynamicEFL,
    fieldGeometry,
    preparedState,
    analysisContext,
    analysisSampling,
  };
}

/**
 * Traces all viewer ray families enabled by a scenario.
 *
 * Off-axis rays use the same projection-aware branch as the UI: ultra-wide/fisheye
 * cases launch vector rays, while ordinary fields use paraxial chief-ray slope/height.
 * Chromatic spread is computed from the largest unclipped matching ray fraction with at
 * least two wavelength channels, avoiding clipped marginal samples that would overstate
 * longitudinal color.
 */
function computeRayWork(snapshot: ScenarioSnapshot): RayWorkResult {
  const { L, scenario, zPos, IMG_MM, focusT, zoomT, aberrationT, currentPhysStopSD, currentEPSD } = snapshot;
  const focusK = scenario.rayTracksF ? conjugateK(focusT, zoomT, L, aberrationT) : 0;
  const rays: RaySegment[] = [];
  const offAxisRays: RaySegment[] = [];
  const chromaticRays: ChromaticRaySegment[] = [];
  let perspectiveFanSweeps = 0;
  let perspectiveRaySamples = 0;
  const tracePerspectiveFan = (
    sceneDirectionCamera: readonly [number, number, number],
    fractions: readonly number[],
    channel?: ChromaticChannel,
  ): PerspectiveDiagramFanSample[] => {
    perspectiveFanSweeps++;
    const fan = tracePerspectiveDiagramFan({
      context: snapshot.perspectiveTraceContext,
      sceneDirectionCamera,
      pupilSemiDiameterMm: currentEPSD,
      stopSemiDiameterMm: currentPhysStopSD,
      fractions,
      channel,
    });
    const samples = fan?.samples ?? [];
    perspectiveRaySamples += samples.length;
    return samples;
  };

  if (scenario.showOnAxis) {
    const fractions = obstructionAwareRayFractionsForDensity(L, L.rayFractions, scenario.rayDensity, currentEPSD);
    if (snapshot.movement.active) {
      for (const sample of tracePerspectiveFan([0, 0, 1], fractions)) {
        rays.push(compilePerspectiveTraceSegment(snapshot, sample));
      }
    } else {
      for (const f of fractions) {
        const h = f * currentEPSD;
        const uIn = scenario.rayTracksF ? h * focusK : 0;
        const result = traceRay(h, uIn, zPos, focusT, zoomT, currentPhysStopSD, true, L, aberrationT);
        rays.push(compileTraceSegment(snapshot, result));
      }
    }
  }

  const offAxisGeometry =
    scenario.showOffAxis === "off"
      ? null
      : computeOffAxisTraceGeometry({
          L,
          zPos,
          IMG_MM,
          focusT,
          zoomT,
          aberrationT,
          sx: snapshot.sx,
          sy: snapshot.sy,
          showOffAxis: scenario.showOffAxis,
        });

  if (offAxisGeometry) {
    const fractions = obstructionAwareRayFractionsForDensity(L, L.offAxisFractions, scenario.rayDensity, currentEPSD);
    if (snapshot.movement.active) {
      const sceneDirection = cameraDirectionForDiagramField(offAxisGeometry.fieldAngleDeg);
      for (const sample of tracePerspectiveFan(sceneDirection, fractions)) {
        offAxisRays.push(compilePerspectiveTraceSegment(snapshot, sample));
      }
    } else {
      for (const f of fractions) {
        const h = f * currentEPSD;
        const uConverge = scenario.rayTracksF ? h * focusK : 0;
        const result =
          offAxisGeometry.kind === "vector"
            ? traceRayVector(
                offsetVectorFieldRay(offAxisGeometry.vectorLaunch, 0, h, uConverge),
                zPos,
                currentPhysStopSD,
                true,
                L,
                focusT,
                zoomT,
                aberrationT,
              )
            : traceRay(
                offAxisGeometry.yChief + h,
                offAxisGeometry.uField + uConverge,
                zPos,
                focusT,
                zoomT,
                currentPhysStopSD,
                true,
                L,
                aberrationT,
              );
        offAxisRays.push(
          compileTraceSegment(snapshot, result, offAxisGeometry.useEdge ? offAxisGeometry.edgeEnd : undefined),
        );
      }
    }
  }

  if (scenario.showChromatic) {
    const channels = filterChannels(true, true, true, false);
    const onAxisFractions = obstructionAwareRayFractionsForDensity(L, L.rayFractions, scenario.rayDensity, currentEPSD);
    if (snapshot.movement.active) {
      const fans = new Map(
        channels.map((channel) => [channel, tracePerspectiveFan([0, 0, 1], onAxisFractions, channel)]),
      );
      for (let index = 0; index < onAxisFractions.length; index++) {
        for (const channel of channels) {
          const sample = fans.get(channel)?.[index];
          if (sample) chromaticRays.push(compilePerspectiveChromaticSegment(snapshot, sample, channel, "onAxis"));
        }
      }
    } else {
      for (const f of onAxisFractions) {
        const h = f * currentEPSD;
        const uIn = scenario.rayTracksF ? h * focusK : 0;
        for (const channel of channels) {
          const result = traceRayChromatic(
            h,
            uIn,
            zPos,
            focusT,
            zoomT,
            currentPhysStopSD,
            true,
            L,
            channel,
            aberrationT,
          );
          chromaticRays.push(compileChromaticTraceSegment(snapshot, result, channel, "onAxis", f));
        }
      }
    }

    if (offAxisGeometry) {
      const offAxisFractions = obstructionAwareRayFractionsForDensity(
        L,
        L.offAxisFractions,
        scenario.rayDensity,
        currentEPSD,
      );
      if (snapshot.movement.active) {
        const direction = cameraDirectionForDiagramField(offAxisGeometry.fieldAngleDeg);
        const fans = new Map(
          channels.map((channel) => [channel, tracePerspectiveFan(direction, offAxisFractions, channel)]),
        );
        for (let index = 0; index < offAxisFractions.length; index++) {
          for (const channel of channels) {
            const sample = fans.get(channel)?.[index];
            if (sample) chromaticRays.push(compilePerspectiveChromaticSegment(snapshot, sample, channel, "offAxis"));
          }
        }
      } else {
        for (const f of offAxisFractions) {
          const h = f * currentEPSD;
          const uConverge = scenario.rayTracksF ? h * focusK : 0;
          for (const channel of channels) {
            const result =
              offAxisGeometry.kind === "vector"
                ? traceRayVectorChromatic(
                    offsetVectorFieldRay(offAxisGeometry.vectorLaunch, 0, h, uConverge),
                    zPos,
                    currentPhysStopSD,
                    true,
                    L,
                    channel,
                    focusT,
                    zoomT,
                    aberrationT,
                  )
                : traceRayChromatic(
                    offAxisGeometry.yChief + h,
                    offAxisGeometry.uField + uConverge,
                    zPos,
                    focusT,
                    zoomT,
                    currentPhysStopSD,
                    true,
                    L,
                    channel,
                    aberrationT,
                  );
            chromaticRays.push(
              compileChromaticTraceSegment(
                snapshot,
                result,
                channel,
                "offAxis",
                f,
                offAxisGeometry.useEdge ? offAxisGeometry.edgeEnd : undefined,
              ),
            );
          }
        }
      }
    }
  }

  const chromaticRayFanSpreads: ChromaticRayFanSpreadByAxis = scenario.showChromatic
    ? {
        onAxis: spreadForAxis(chromaticRays, "onAxis", IMG_MM, zPos[L.N - 1]),
        offAxis: spreadForAxis(chromaticRays, "offAxis", IMG_MM, zPos[L.N - 1]),
      }
    : { onAxis: null, offAxis: null };
  const chromaticRayFanSpread = chromaticRayFanSpreads.onAxis ?? chromaticRayFanSpreads.offAxis;

  return {
    rays,
    offAxisRays,
    chromaticRays,
    chromaticRayFanSpread,
    chromaticRayFanSpreads,
    output: {
      onAxisRays: rays.length,
      offAxisRays: offAxisRays.length,
      chromaticRays: chromaticRays.length,
      hasChromaticRayFanSpread: Boolean(chromaticRayFanSpread),
      movementActive: snapshot.movement.active,
      perspectiveFanSweeps,
      perspectiveRaySamples,
    },
  };
}

/**
 * Measures the coarse analysis workload used by the main `analysis` category.
 *
 * Active perspective-control scenarios use the movement-aware accessors exclusively;
 * centered and folded scenarios retain the established fast paths and guardrails.
 */
function computeAnalysisWork(snapshot: ScenarioSnapshot): BenchmarkOutput {
  const { L, analysisContext } = snapshot;
  const output: BenchmarkOutput = {};
  const summary = completed("summary", analysisContext.computeOpticalSummary());
  output.summarySurfaceCount = summary.surfaceCount;

  if (snapshot.movement.active) {
    const focus = completed("perspectiveFocus", analysisContext.computePerspectiveFocusAnalysis());
    const fieldAberrations = completed(
      "perspectiveFieldAberrations",
      analysisContext.computePerspectiveFieldAberrations(),
    );
    const chromatic = completed("perspectiveChromatic", analysisContext.computePerspectiveChromaticAnalysis());
    const distortion = completed("perspectiveDistortion", analysisContext.computePerspectiveDistortionAnalysis());
    const vignetting = completed("perspectiveVignetting", analysisContext.computePerspectiveVignettingAnalysis());
    const pupils = completed("perspectivePupils", analysisContext.computePerspectivePupilAnalysis());
    output.perspectiveAnalysisJobs = 6;
    output.legacyRayBasedAnalysisJobs = 0;
    output.perspectiveFocusSamples = focus.samples.length;
    output.perspectiveFieldCurvatureSamples = fieldAberrations.fieldCurvature.samples.length;
    output.perspectiveComaSamples = fieldAberrations.coma.samples.length;
    output.perspectiveChromaticSamples = chromatic.samples.length;
    output.perspectiveDistortionSamples =
      distortion.vertical.length + distortion.grid.rows.reduce((count, row) => count + row.length, 0);
    output.perspectiveVignettingSamples = vignetting.samples.length;
    output.perspectivePupilSamples = pupils.samples.length;
    return output;
  }

  output.perspectiveAnalysisJobs = 0;

  if (!L.isFoldedOptics) {
    output.distortionSamples = completed(
      "distortionCurve",
      distortionSamplesOf(analysisContext.computeDistortionCurve()),
    ).length;
    output.distortionGridLines = completed("distortionGrid", analysisContext.computeDistortionFieldGrid()).lines.length;
    output.vignettingSamples = completed("vignetting", analysisContext.computeVignettingCurve()).length;
  } else {
    output.foldedSequentialAnalysisSkipped = true;
  }

  const pupilProfiles = completed("pupils", analysisContext.computeBothPupilAberrationProfiles());
  output.pupilSamples = pupilProfiles.ep.samples.length + pupilProfiles.xp.samples.length;
  const bokehPair = completed("bokehPair", analysisContext.computeBokehPreviewPair());
  output.bokehInfinityFields = bokehPair.infinity?.fields.length ?? 0;
  output.bokehNearFocusFields = bokehPair.nearFocus?.fields.length ?? 0;
  output.bestFocusZ = analysisContext.computeBestFocusZ();
  return output;
}

/**
 * Measures individual analysis jobs so regressions can be attributed below the coarse
 * `analysis` category. Categories that are guarded for folded systems are recorded as
 * skips instead of errors to keep reports honest about coverage.
 */
function measureAnalysisBreakdown(
  lensKey: string,
  scenario: ScenarioConfig,
  snapshot: ScenarioSnapshot,
  plan: CasePlan,
): AnalysisBenchmarkResults {
  const measure = (
    category: AnalysisBenchmarkCategory,
    fn: () => BenchmarkOutput,
    inspect?: () => void,
  ): BenchmarkEntry => plan.measure(`${lensKey}:${scenario.id}:analysis.${category}`, fn, inspect);
  const inspectFocus = bestFocusInspection(snapshot);
  const foldedSkip = (category: AnalysisBenchmarkCategory): BenchmarkEntry =>
    skippedEntry(`${category} uses sequential field analysis guarded for folded optics`);
  const movementSkip = (category: AnalysisBenchmarkCategory): BenchmarkEntry =>
    skippedEntry(`${category} is replaced by movement-aware perspective analysis`);
  const centeredSkip = (category: AnalysisBenchmarkCategory): BenchmarkEntry =>
    skippedEntry(`${category} is not scheduled on the centered fast path`);
  const centeredOrFolded = (
    category: AnalysisBenchmarkCategory,
    work: () => BenchmarkOutput,
    inspect?: () => void,
  ): BenchmarkEntry => {
    if (snapshot.movement.active) return movementSkip(category);
    if (snapshot.L.isFoldedOptics && ["distortionCurve", "distortionGrid", "vignetting"].includes(category)) {
      return foldedSkip(category);
    }
    return measure(category, work, inspect);
  };
  const perspective = (category: AnalysisBenchmarkCategory, work: () => BenchmarkOutput): BenchmarkEntry =>
    snapshot.movement.active ? measure(category, work) : centeredSkip(category);

  return {
    summary: measure("summary", () => computeAnalysisSummaryWork(snapshot)),
    distortionCurve: centeredOrFolded("distortionCurve", () => computeAnalysisDistortionCurveWork(snapshot)),
    distortionGrid: centeredOrFolded("distortionGrid", () => computeAnalysisDistortionGridWork(snapshot)),
    vignetting: centeredOrFolded("vignetting", () => computeAnalysisVignettingWork(snapshot)),
    pupils: centeredOrFolded("pupils", () => computeAnalysisPupilsWork(snapshot)),
    bokehPair: centeredOrFolded("bokehPair", () => computeAnalysisBokehPairWork(snapshot), inspectFocus),
    bestFocus: centeredOrFolded("bestFocus", () => computeAnalysisBestFocusWork(snapshot), inspectFocus),
    perspectiveFocus: perspective("perspectiveFocus", () => computePerspectiveFocusWork(snapshot)),
    perspectiveFieldAberrations: perspective("perspectiveFieldAberrations", () =>
      computePerspectiveFieldAberrationsWork(snapshot),
    ),
    perspectiveChromatic: perspective("perspectiveChromatic", () => computePerspectiveChromaticWork(snapshot)),
    perspectiveDistortion: perspective("perspectiveDistortion", () => computePerspectiveDistortionWork(snapshot)),
    perspectiveVignetting: perspective("perspectiveVignetting", () => computePerspectiveVignettingWork(snapshot)),
    perspectivePupils: perspective("perspectivePupils", () => computePerspectivePupilsWork(snapshot)),
  };
}

/** Creates an uncached facade so each fine-grained benchmark times real job work. */
function createFreshAnalysisContext(snapshot: ScenarioSnapshot): AnalysisComputationContext {
  return createAnalysisComputationContext(Object.freeze({ ...snapshot.analysisContext.request }));
}

function computePerspectiveFocusWork(snapshot: ScenarioSnapshot): BenchmarkOutput {
  const result = completed("perspectiveFocus", createFreshAnalysisContext(snapshot).computePerspectiveFocusAnalysis());
  return { samples: result.samples.length, usableSamples: result.usableSampleCount };
}

function computePerspectiveFieldAberrationsWork(snapshot: ScenarioSnapshot): BenchmarkOutput {
  const result = completed(
    "perspectiveFieldAberrations",
    createFreshAnalysisContext(snapshot).computePerspectiveFieldAberrations(),
  );
  return {
    fieldCurvatureSamples: result.fieldCurvature.samples.length,
    comaSamples: result.coma.samples.length,
    usableFieldCurvatureSamples: result.fieldCurvature.usableSampleCount,
    usableComaSamples: result.coma.usableSampleCount,
  };
}

function computePerspectiveChromaticWork(snapshot: ScenarioSnapshot): BenchmarkOutput {
  const result = completed(
    "perspectiveChromatic",
    createFreshAnalysisContext(snapshot).computePerspectiveChromaticAnalysis(),
  );
  return { samples: result.samples.length, usableSamples: result.usableSampleCount };
}

function computePerspectiveDistortionWork(snapshot: ScenarioSnapshot): BenchmarkOutput {
  const result = completed(
    "perspectiveDistortion",
    createFreshAnalysisContext(snapshot).computePerspectiveDistortionAnalysis(),
  );
  return {
    verticalSamples: result.vertical.length,
    gridSamples: result.grid.rows.reduce((count, row) => count + row.length, 0),
    usableSamples: result.summary.usableCount,
  };
}

function computePerspectiveVignettingWork(snapshot: ScenarioSnapshot): BenchmarkOutput {
  const result = completed(
    "perspectiveVignetting",
    createFreshAnalysisContext(snapshot).computePerspectiveVignettingAnalysis(),
  );
  return {
    samples: result.samples.length,
    usableSamples: result.samples.filter((sample) => sample.status === "usable").length,
  };
}

function computePerspectivePupilsWork(snapshot: ScenarioSnapshot): BenchmarkOutput {
  const result = completed("perspectivePupils", createFreshAnalysisContext(snapshot).computePerspectivePupilAnalysis());
  return {
    samples: result.samples.length,
    usableSamples: result.samples.filter((sample) => sample.status === "usable").length,
  };
}

/** Measures the optical summary path through its request-facing analysis job. */
function computeAnalysisSummaryWork(snapshot: ScenarioSnapshot): BenchmarkOutput {
  const summary = analysisJobsForState2.computeOpticalSummary(
    createAnalysisRequest({
      preparedState: snapshot.preparedState,
      dynamicEFL: snapshot.dynamicEFL,
      currentEPSD: snapshot.currentEPSD,
      currentPhysStopSD: snapshot.currentPhysStopSD,
      fieldGeometry: snapshot.fieldGeometry,
    }),
  );
  completed("summary", summary);
  return { summarySurfaceCount: summary.surfaceCount };
}

/** Measures distortion-curve sampling for non-folded systems. */
function computeAnalysisDistortionCurveWork(snapshot: ScenarioSnapshot): BenchmarkOutput {
  const samples = analysisJobsForState2.computeDistortionCurve(
    snapshot.preparedState,
    snapshot.dynamicEFL,
    snapshot.currentPhysStopSD,
    snapshot.fieldGeometry ?? undefined,
    snapshot.analysisSampling,
  );
  const curve = distortionSamplesOf(samples);
  completed("distortionCurve", curve);
  return { distortionSamples: curve.length };
}

/**
 * The distortion curve's samples, from an engine that returns them alone or inside `{ samples, corner }` (from
 * #815). A paired run builds the base from an older commit, whose engine still returns the array.
 *
 * @param curve - the value the engine's distortion job returned
 * @returns its samples
 */
function distortionSamplesOf<Sample>(
  curve: readonly Sample[] | { readonly samples: readonly Sample[] },
): readonly Sample[] {
  return Array.isArray(curve) ? curve : (curve as { readonly samples: readonly Sample[] }).samples;
}

/** Measures the distortion field-grid helper used by the analysis drawer. */
function computeAnalysisDistortionGridWork(snapshot: ScenarioSnapshot): BenchmarkOutput {
  const grid = analysisJobsForState2.computeDistortionFieldGrid(
    snapshot.preparedState,
    snapshot.currentPhysStopSD,
    snapshot.fieldGeometry ?? undefined,
    snapshot.analysisSampling,
  );
  completed("distortionGrid", grid);
  return { distortionGridLines: grid.lines.length };
}

/** Measures vignetting sampling for non-folded sequential systems. */
function computeAnalysisVignettingWork(snapshot: ScenarioSnapshot): BenchmarkOutput {
  const samples = analysisJobsForState2.computeVignettingCurve(
    snapshot.preparedState,
    snapshot.currentEPSD,
    snapshot.currentPhysStopSD,
    snapshot.fieldGeometry ?? undefined,
    snapshot.analysisSampling,
  );
  completed("vignetting", samples);
  return { vignettingSamples: samples.length };
}

/** Measures entrance/exit pupil aberration profile generation. */
function computeAnalysisPupilsWork(snapshot: ScenarioSnapshot): BenchmarkOutput {
  const pupilProfiles = analysisJobsForState2.computeBothPupilAberrationProfiles(
    snapshot.preparedState,
    snapshot.analysisSampling?.pupilAberrationSampleCount ?? undefined,
    snapshot.fieldGeometry ?? undefined,
  );
  completed("pupils", pupilProfiles);
  return { pupilSamples: pupilProfiles.ep.samples.length + pupilProfiles.xp.samples.length };
}

/** Measures paired infinity/near-focus bokeh preview data generation. */
function computeAnalysisBokehPairWork(snapshot: ScenarioSnapshot): BenchmarkOutput {
  const bokehPair = analysisJobsForState2.computeBokehPreviewPair(
    snapshot.preparedState,
    snapshot.currentEPSD,
    snapshot.currentPhysStopSD,
    snapshot.analysisSampling,
  );
  completed("bokehPair", bokehPair);
  return {
    bokehInfinityFields: bokehPair.infinity?.fields.length ?? 0,
    bokehNearFocusFields: bokehPair.nearFocus?.fields.length ?? 0,
  };
}

/** Measures best-focus solve cost for the current stop and entrance-pupil scale. */
function computeAnalysisBestFocusWork(snapshot: ScenarioSnapshot): BenchmarkOutput {
  return {
    bestFocusZ: analysisJobsForState2.computeBestFocusZ(sphericalRequest(snapshot)),
  };
}

/**
 * The entrance-pupil fractions of the on-axis profile rays that best focus is fitted to, each traced above and below
 * the axis. The engine keeps its list inside the aberration module; this is a copy, and a test holds it to that list.
 */
export const BEST_FOCUS_PROFILE_FRACTIONS = [
  0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.88, 0.91, 0.93, 0.95,
  0.97,
] as const;

/**
 * What inspects, in the untimed pass, a case that solves best focus: alone, or inside the bokeh pair, the whole
 * analysis and the two totals. A moved lens solves none, and has no inspection.
 *
 * The solve returns one position, which says nothing of the work behind it. It is fitted to the on-axis profile
 * rays that are not clipped, and it answers with the layout's image plane when fewer than four of them give a hit.
 * So the inspection traces that ray set as the solve does and marks every ray as completed work, and it solves once
 * more and tallies whether the answer is that fallback. It does not see the rays the case itself traced: a solve
 * that traced fewer and still answered with a focus of its own is not flagged.
 *
 * @param snapshot - the cell's prepared state
 * @returns the inspection, or undefined for a moved lens
 */
function bestFocusInspection(snapshot: ScenarioSnapshot): (() => void) | undefined {
  if (snapshot.movement.active) return undefined;
  return () => {
    const { L, focusT, zoomT, aberrationT, currentEPSD, currentPhysStopSD } = snapshot;
    /* The solve's own layout, which is not the camera-anchored one the snapshot holds. */
    const layout = doLayout(focusT, zoomT, L, aberrationT);
    for (const fraction of BEST_FOCUS_PROFILE_FRACTIONS) {
      for (const height of [fraction * currentEPSD, -fraction * currentEPSD]) {
        const ray = traceRay(height, 0, layout.z, focusT, zoomT, currentPhysStopSD, true, L, aberrationT);
        completed("bestFocusRay", ray);
      }
    }
    const z = analysisJobsForState2.computeBestFocusZ(sphericalRequest(snapshot));
    completed("bestFocus", { z, isLayoutImagePlane: Object.is(z, layout.imgZ) });
  };
}

/**
 * Measures aberration drawer data jobs and server-rendered panel/section trees.
 *
 * Data and render categories are kept separate because analysis cost and React markup
 * cost regress for different reasons. Folded systems record explicit skips for field
 * curvature/coma paths that are still guarded in the UI.
 */
function measureAberrationPanels(
  lensKey: string,
  scenario: ScenarioConfig,
  snapshot: ScenarioSnapshot,
  plan: CasePlan,
): AberrationPanelScenarioResults {
  const skips: BenchmarkSkip[] = [];
  const data: Record<string, BenchmarkEntry> = {};
  const render: Record<string, BenchmarkEntry> = {};
  const measure = (group: "data" | "render", category: string, fn: () => BenchmarkOutput): BenchmarkEntry =>
    plan.measure(`${lensKey}:${scenario.id}:aberrationPanels:${group}.${category}`, fn);

  data.sphericalAberration = measure("data", "sphericalAberration", () => {
    const result = analysisJobsForState2.computeSphericalAberration(sphericalRequest(snapshot));
    return describeComputationOutput(result);
  });
  data.saProfile = measure("data", "saProfile", () => {
    const result = analysisJobsForState2.computeSAProfile(sphericalRequest(snapshot));
    completed("result", result);
    return { points: Array.isArray(result) ? result.length : 0 };
  });
  data.saBlurCharacter = measure("data", "saBlurCharacter", () => {
    const base = analysisJobsForState2.computeSphericalAberration(sphericalRequest(snapshot));
    const result = analysisJobsForState2.computeSphericalAberrationBlurCharacter(sphericalRequest(snapshot), base);
    return describeComputationOutput(result);
  });

  if (snapshot.L.isFoldedOptics) {
    for (const category of ["fieldCurvature", "chromaticFieldCurvature", "fieldCurvatureBundle", "coma", "comaTab"]) {
      skips.push({ lensKey, scenarioId: scenario.id, category, reason: "Folded optics guard" });
    }
  } else if (snapshot.movement.active) {
    for (const category of ["fieldCurvature", "chromaticFieldCurvature", "fieldCurvatureBundle", "coma"]) {
      skips.push({
        lensKey,
        scenarioId: scenario.id,
        category,
        reason: "Active movement uses the perspective field-aberration accessor",
      });
    }
  } else {
    data.fieldCurvature = measure("data", "fieldCurvature", () =>
      describeComputationOutput(analysisJobsForState2.computeFieldCurvature(fieldCurvatureRequest(snapshot), false)),
    );
    data.chromaticFieldCurvature = measure("data", "chromaticFieldCurvature", () =>
      describeComputationOutput(analysisJobsForState2.computeFieldCurvature(fieldCurvatureRequest(snapshot), true)),
    );
    data.fieldCurvatureBundle = measure("data", "fieldCurvatureBundle", () =>
      describeComputationOutput(analysisJobsForState2.computeFieldCurvatureBundle(fieldCurvatureRequest(snapshot))),
    );
    data.coma = measure("data", "coma", () =>
      describeComputationOutput(analysisJobsForState2.computeComaAnalysis(fieldCurvatureRequest(snapshot))),
    );
  }

  /* Computed once the data categories above have been sampled, as the render categories find it in the viewer. */
  let values: AberrationDataValues = {};
  plan.before(() => {
    values = computeAberrationDataValues(snapshot);
  });
  render.aberrationsTab = measure("render", "aberrationsTab", () => renderAberrationsTab(snapshot));
  render.sphericalSection = measure("render", "sphericalSection", () => renderSphericalSection(snapshot, values));

  if (!snapshot.L.isFoldedOptics && !snapshot.movement.active) {
    render.fieldCurvatureSection = measure("render", "fieldCurvatureSection", () =>
      renderFieldCurvatureSection(snapshot, values),
    );
    render.astigmatismSection = measure("render", "astigmatismSection", () =>
      renderAstigmatismSection(snapshot, values),
    );
    render.comaTab = measure("render", "comaTab", () => renderComaTab(snapshot));
    render.comaPreviewSection = measure("render", "comaPreviewSection", () =>
      renderComaPreviewSection(snapshot, values),
    );
    render.meridionalComaSection = measure("render", "meridionalComaSection", () =>
      renderMeridionalComaSection(snapshot, values),
    );
    render.sagittalComaSection = measure("render", "sagittalComaSection", () =>
      renderSagittalComaSection(snapshot, values),
    );
  } else if (snapshot.movement.active) {
    for (const category of [
      "fieldCurvatureSection",
      "astigmatismSection",
      "comaPreviewSection",
      "meridionalComaSection",
      "sagittalComaSection",
    ]) {
      skips.push({
        lensKey,
        scenarioId: scenario.id,
        category,
        reason: "Legacy section props are replaced by movement-aware panel data",
      });
    }
    render.comaTab = measure("render", "comaTab", () => renderComaTab(snapshot));
  }

  return { data, render, skips };
}

/**
 * Precomputes data shared by section render benchmarks.
 *
 * Field-curvature and coma data are omitted for folded optics for the same reason the
 * corresponding render sections are skipped: those analysis paths are intentionally
 * guarded until fixture-backed validation says they are mirror-safe.
 */
function computeAberrationDataValues(snapshot: ScenarioSnapshot): AberrationDataValues {
  const sphericalAberration = analysisJobsForState2.computeSphericalAberration(sphericalRequest(snapshot));
  const saProfile = analysisJobsForState2.computeSAProfile(sphericalRequest(snapshot));
  const saBlurCharacter = analysisJobsForState2.computeSphericalAberrationBlurCharacter(
    sphericalRequest(snapshot),
    sphericalAberration,
  );
  if (snapshot.L.isFoldedOptics || snapshot.movement.active) {
    return { sphericalAberration, saProfile, saBlurCharacter };
  }
  const fieldCurvatureBundle = analysisJobsForState2.computeFieldCurvatureBundle(fieldCurvatureRequest(snapshot));
  const fieldCurvature = fieldCurvatureBundle.fieldCurvature;
  const chromaticFieldCurvature = fieldCurvatureBundle.chromaticFieldCurvature;
  const coma = analysisJobsForState2.computeComaAnalysis(fieldCurvatureRequest(snapshot));
  return { sphericalAberration, saProfile, saBlurCharacter, fieldCurvature, chromaticFieldCurvature, coma };
}

/**
 * Server-renders the full SVG diagram using already traced rays.
 *
 * Passing precomputed ray work isolates React/SVG rendering cost from ray-tracing cost,
 * while still exercising the same diagram props used by the viewer.
 */
function renderDiagram(snapshot: ScenarioSnapshot, rayWork: RayWorkResult): BenchmarkOutput {
  const html = renderedMarkup(
    <DiagramSVG
      L={snapshot.L}
      t={themes.dark}
      dark={true}
      sx={snapshot.sx}
      sy={snapshot.sy}
      CX={snapshot.CX}
      IX={snapshot.IX}
      effectiveSC={snapshot.effectiveSC}
      movementTransform={snapshot.movementTransform}
      lensAxis={snapshot.lensAxis}
      zPos={snapshot.zPos}
      IMG_MM={snapshot.IMG_MM}
      shapes={snapshot.shapes}
      filterId="benchmark-diagram"
      stopZ={snapshot.stopZ}
      currentPhysStopSD={snapshot.currentPhysStopSD}
      rays={rayWork.rays}
      offAxisRays={rayWork.offAxisRays}
      chromaticRays={rayWork.chromaticRays}
      chromaticRayFanSpread={rayWork.chromaticRayFanSpread}
      showOnAxis={snapshot.scenario.showOnAxis}
      showOffAxis={snapshot.scenario.showOffAxis}
      showChromatic={snapshot.scenario.showChromatic}
      showPupils={false}
      zoomT={snapshot.zoomT}
      act={null}
      onHover={noop}
      onSelect={noop}
      sel={null}
      maxSvgHeight="720px"
      useSideLayout={false}
      headerHeight={0}
      compact={false}
      flashVisible={false}
      flashKey={0}
      flashFading={false}
    />,
  );
  return { markupLength: html.length, shapes: snapshot.shapes.length };
}

/**
 * Server-renders the complete aberrations panel with the prepared analysis context. The panel computes its own
 * data through that context, so the untimed pass watches what it asks for.
 */
function renderAberrationsTab(snapshot: ScenarioSnapshot): BenchmarkOutput {
  const html = renderedMarkup(
    <AberrationsPanel
      L={snapshot.L}
      t={themes.dark}
      zPos={snapshot.zPos}
      focusT={snapshot.focusT}
      zoomT={snapshot.zoomT}
      aberrationT={snapshot.aberrationT}
      currentEPSD={snapshot.currentEPSD}
      currentPhysStopSD={snapshot.currentPhysStopSD}
      fieldGeometry={snapshot.fieldGeometry}
      preparedState={snapshot.preparedState}
      analysisContext={observedAnalysisContext(snapshot.analysisContext)}
      expanded={true}
      onExpandedChange={noop}
    />,
  );
  return { markupLength: html.length };
}

/** Server-renders the standalone coma tab for non-folded systems, which computes its data as the panel does. */
function renderComaTab(snapshot: ScenarioSnapshot): BenchmarkOutput {
  const html = renderedMarkup(
    <ComaTab
      L={snapshot.L}
      t={themes.dark}
      zPos={snapshot.zPos}
      focusT={snapshot.focusT}
      zoomT={snapshot.zoomT}
      aberrationT={snapshot.aberrationT}
      currentEPSD={snapshot.currentEPSD}
      currentPhysStopSD={snapshot.currentPhysStopSD}
      fieldGeometry={snapshot.fieldGeometry}
      preparedState={snapshot.preparedState}
      analysisContext={observedAnalysisContext(snapshot.analysisContext)}
    />,
  );
  return { markupLength: html.length };
}

/** Server-renders the spherical-aberration section using precomputed section data. */
function renderSphericalSection(snapshot: ScenarioSnapshot, values: AberrationDataValues): BenchmarkOutput {
  const html = renderedMarkup(
    <SphericalAberrationSection
      result={values.sphericalAberration as Parameters<typeof SphericalAberrationSection>[0]["result"]}
      profile={values.saProfile as Parameters<typeof SphericalAberrationSection>[0]["profile"]}
      blurCharacter={values.saBlurCharacter as Parameters<typeof SphericalAberrationSection>[0]["blurCharacter"]}
      expanded={true}
      onToggle={noop}
      theme={themes.dark}
    />,
  );
  return { markupLength: html.length, folded: snapshot.L.isFoldedOptics };
}

/** Server-renders field-curvature output, preferring chromatic data when available. */
function renderFieldCurvatureSection(snapshot: ScenarioSnapshot, values: AberrationDataValues): BenchmarkOutput {
  const html = renderedMarkup(
    <FieldCurvatureSection
      result={
        (values.chromaticFieldCurvature ?? values.fieldCurvature) as Parameters<
          typeof FieldCurvatureSection
        >[0]["result"]
      }
      expanded={true}
      onToggle={noop}
      theme={themes.dark}
    />,
  );
  return { markupLength: html.length, folded: snapshot.L.isFoldedOptics };
}

/** Server-renders the astigmatism section from the same field-curvature bundle. */
function renderAstigmatismSection(snapshot: ScenarioSnapshot, values: AberrationDataValues): BenchmarkOutput {
  const html = renderedMarkup(
    <AstigmatismSection
      result={
        (values.chromaticFieldCurvature ?? values.fieldCurvature) as Parameters<typeof AstigmatismSection>[0]["result"]
      }
      expanded={true}
      onToggle={noop}
      theme={themes.dark}
    />,
  );
  return { markupLength: html.length, folded: snapshot.L.isFoldedOptics };
}

/** Server-renders the coma point-cloud preview section. */
function renderComaPreviewSection(snapshot: ScenarioSnapshot, values: AberrationDataValues): BenchmarkOutput {
  const html = renderedMarkup(
    <ComaPreviewSection
      result={values.coma?.pointCloudPreview ?? null}
      expanded={true}
      onToggle={noop}
      theme={themes.dark}
    />,
  );
  return { markupLength: html.length, folded: snapshot.L.isFoldedOptics };
}

/** Server-renders the meridional coma plot section. */
function renderMeridionalComaSection(snapshot: ScenarioSnapshot, values: AberrationDataValues): BenchmarkOutput {
  const html = renderedMarkup(
    <MeridionalComaSection
      result={values.coma?.meridionalComa ?? null}
      expanded={true}
      onToggle={noop}
      theme={themes.dark}
    />,
  );
  return { markupLength: html.length, folded: snapshot.L.isFoldedOptics };
}

/** Server-renders the sagittal coma plot section. */
function renderSagittalComaSection(snapshot: ScenarioSnapshot, values: AberrationDataValues): BenchmarkOutput {
  const html = renderedMarkup(
    <SagittalComaSection
      result={values.coma?.sagittalComa ?? null}
      expanded={true}
      onToggle={noop}
      theme={themes.dark}
    />,
  );
  return { markupLength: html.length, folded: snapshot.L.isFoldedOptics };
}

/**
 * Converts raw trace points into the same SVG segment structure used by diagram hooks.
 *
 * `endOverride` lets off-axis edge rays terminate at the UI-computed field edge instead
 * of extrapolating to the reference image plane.
 */
function compileTraceSegment(
  snapshot: ScenarioSnapshot,
  result: ReturnType<typeof traceRay>,
  endOverride?: number[],
): RaySegment {
  completed("ray", result);
  return compileRaySegment(
    result.pts,
    result.ghostPts,
    result.u,
    result.clipped,
    snapshot.sx,
    snapshot.sy,
    snapshot.clampedRayEnd,
    snapshot.IMG_MM,
    endOverride,
    result.reachedImagePlane,
  );
}

/** Compiles a camera-frame perspective trace without synthesizing an image-plane tail. */
function compilePerspectiveTraceSegment(snapshot: ScenarioSnapshot, sample: PerspectiveDiagramFanSample): RaySegment {
  const result = completed("ray", sample.diagramTrace.ray);
  return compileRaySegment(
    result.pts,
    result.ghostPts,
    result.u,
    result.clipped,
    snapshot.sx,
    snapshot.sy,
    snapshot.clampedRayEnd,
    snapshot.IMG_MM,
    undefined,
    result.reachedImagePlane,
    false,
  );
}

/** Adds wavelength, axis, and aperture-fraction metadata to a compiled trace segment. */
function compileChromaticTraceSegment(
  snapshot: ScenarioSnapshot,
  result: ReturnType<typeof traceRayChromatic>,
  channel: ChromaticChannel,
  axis: ChromaticRaySegment["axis"],
  fraction: number,
  endOverride?: number[],
): ChromaticRaySegment {
  const segment = compileTraceSegment(snapshot, result, endOverride);
  return {
    ...segment,
    channel,
    axis,
    fraction,
    y: result.y,
    u: result.u,
    z: result.reachedImagePlane ? snapshot.IMG_MM : snapshot.zPos[snapshot.L.N - 1],
    clipped: result.clipped,
  };
}

/** Adds chromatic metadata to a compiled physical moved-lens diagram trace. */
function compilePerspectiveChromaticSegment(
  snapshot: ScenarioSnapshot,
  sample: PerspectiveDiagramFanSample,
  channel: ChromaticChannel,
  axis: ChromaticRaySegment["axis"],
): ChromaticRaySegment {
  const result = sample.diagramTrace.ray;
  return {
    ...compilePerspectiveTraceSegment(snapshot, sample),
    channel,
    axis,
    fraction: sample.fraction,
    y: result.y,
    u: result.u,
    z: sample.diagramTrace.returnPoint[0],
    clipped: result.clipped,
  };
}

/**
 * Computes chromatic spread for the largest available unclipped ray fraction on one axis.
 *
 * The UI spread annotation needs at least two wavelength channels at a shared aperture
 * fraction. Fractions are searched from the marginal rays inward so the reported spread
 * reflects the broadest valid aperture sample without using clipped rays.
 */
function spreadForAxis(
  chromaticRays: ChromaticRaySegment[],
  axis: ChromaticRaySegment["axis"],
  IMG_MM: number,
  lastSurfaceZ: number,
): ChromaticRayFanSpread | null {
  const axisRays = chromaticRays.filter((ray) => ray.axis === axis);
  if (axisRays.length === 0) return null;

  const candidateFractions = Array.from(new Set(axisRays.map((ray) => ray.fraction))).sort((a, b) => {
    const absDelta = Math.abs(b) - Math.abs(a);
    return Math.abs(absDelta) > 1e-12 ? absDelta : b - a;
  });

  for (const fraction of candidateFractions) {
    const marginalRays: Partial<Record<ChromaticChannel, { y: number; u: number; z?: number; clipped: boolean }>> = {};
    for (const ray of axisRays) {
      if (Math.abs(ray.fraction - fraction) < 1e-12 && !ray.clipped && Math.abs(ray.u) > 1e-15) {
        marginalRays[ray.channel] = { y: ray.y, u: ray.u, z: ray.z, clipped: false };
      }
    }
    const channels = Object.keys(marginalRays) as ChromaticChannel[];
    if (channels.length >= 2) {
      return { ...computeChromaticRayFanSpread(marginalRays, IMG_MM, lastSurfaceZ), axis, fraction, channels };
    }
  }

  return null;
}

/* What the running case has completed, as the untimed pass tallies it: the tallies of each result the case has
 * marked, by the result's label. Null in a timed pass, where `completed` costs one comparison and a case reports
 * its `output` alone. */
let workLog: Map<string, Record<string, number>> | null = null;

/** The tallies kept under one label in the running case's log, started when the label is first met. */
function talliesUnder(log: Map<string, Record<string, number>>, label: string): Record<string, number> {
  const tallies = log.get(label) ?? {};
  log.set(label, tallies);
  return tallies;
}

/**
 * Marks an engine result as part of what the running case completed, and passes it through.
 *
 * @param label - names the result within its case
 * @param result - what the engine returned
 */
function completed<T>(label: string, result: T): T {
  if (workLog) digestCompletedWork(label, result, talliesUnder(workLog, label));
  return result;
}

/**
 * Renders a tree to static markup. In the untimed pass it also tallies the elements of the markup, so a side that
 * draws less differs by a count and not only by a length that follows every printed coordinate.
 */
function renderedMarkup(tree: React.ReactElement): string {
  const html = renderToStaticMarkup(tree);
  if (workLog) tallyMarkupElements(html, talliesUnder(workLog, "markup"));
  return html;
}

/**
 * The analysis context a tab is rendered with. In the untimed pass it is wrapped, so that every data section the
 * tab computes through it is marked as completed work under the name of the method that computed it. A timed
 * pass hands the context over as it is.
 */
function observedAnalysisContext(context: AnalysisComputationContext): AnalysisComputationContext {
  if (!workLog) return context;
  return new Proxy(context, {
    get(target, name) {
      const member: unknown = Reflect.get(target, name);
      if (typeof member !== "function" || typeof name !== "string" || !name.startsWith("compute")) return member;
      return (...args: unknown[]): unknown => completed(name, Reflect.apply(member, target, args));
    },
  });
}

/** Start the case list of one cell. */
function createCasePlan(): CasePlan {
  const cases: BenchmarkCase[] = [];
  let pendingSetup: (() => void) | undefined;
  return {
    cases,
    measure(id, run, inspect) {
      /* The cell's results hold this object from now on, so sampling fills it in place. */
      const entry: BenchmarkEntry = { status: "error", message: "The case was not sampled." };
      cases.push({ id, run, entry, ...(pendingSetup ? { setup: pendingSetup } : {}), ...(inspect ? { inspect } : {}) });
      pendingSetup = undefined;
      return entry;
    },
    before(setup) {
      pendingSetup = setup;
    },
  };
}

/**
 * Samples every case of a cell: alone, or pair by pair with the same case of the base side's cell.
 *
 * @param head - the head's cases and the result objects sampling fills
 * @param base - the base's matching cases, absent for an unpaired run
 * @param sampling - warmup and measured counts, and whether to keep individual samples
 * @param firstSide - the side the process prepares and samples first
 * @throws when the two sides lay the cell out as different cases, which only differing lens data can cause
 */
export function sampleCell(
  head: PreparedBenchmarkCell,
  base: PreparedBenchmarkCell | undefined,
  sampling: SamplingOptions,
  firstSide: TimedProcess["firstSide"] = "base",
): void {
  if (base && base.cases.map(({ id }) => id).join("\n") !== head.cases.map(({ id }) => id).join("\n")) {
    throw new Error(
      `The base and the head list different benchmark cases for one cell (${head.cases[0]?.id ?? "no cases"}); ` +
        `their lens data must differ.`,
    );
  }
  head.cases.forEach((headCase, index) => {
    const baseCase = base?.cases[index];
    inSideOrder(
      firstSide,
      () => baseCase?.setup?.(),
      () => headCase.setup?.(),
    );
    sampleCases(baseCase ? [baseCase, headCase] : [headCase], sampling, firstSide);
  });
}

/* Which side of `sampleCases` is called first: the one case of an unpaired run, or `[base, head]` in either order. */
const UNPAIRED_ORDER = [0];
const PAIR_ORDERS = { base: [0, 1], head: [1, 0] };

/**
 * Times one case, or the same case on the two sides of a paired run, with warmups, optional forced GC, and heap
 * deltas, and fills each case's entry.
 *
 * The measured callback must return a compact serializable output object. Errors are
 * captured into the benchmark entry rather than thrown, allowing one failing category
 * to appear in the report without aborting the full run.
 *
 * A pair is one call of each side. Warmups and measured pairs each start with the process's first side, then
 * swap from pair to pair, so neither side always runs second, on whatever the first left in the processor's
 * caches and the collector's nursery. A side that throws is not called again, and the other side is sampled
 * to the end.
 *
 * @param sides - one case, or the base case and the head case in that order
 * @param firstSide - the side that starts pair 0 of warmups and of measured samples
 */
function sampleCases(
  sides: readonly BenchmarkCase[],
  { warmups, iterations, keepSamples }: SamplingOptions,
  firstSide: TimedProcess["firstSide"],
): void {
  const sampled = sides.map(() => ({
    durations: [] as number[],
    heapDeltas: [] as number[],
    output: undefined as BenchmarkOutput | undefined,
    message: undefined as string | undefined,
  }));

  resetPerfProbe();
  for (let i = 0; i < warmups + iterations; i++) {
    const order =
      sides.length === 1 ? UNPAIRED_ORDER : PAIR_ORDERS[pairedSampleOrder(i < warmups ? i : i - warmups, firstSide)[0]];
    for (const side of order) {
      const state = sampled[side];
      if (state.message !== undefined) continue;
      try {
        collectGarbage();
        const heapBefore = heapUsed();
        const start = performance.now();
        state.output = sides[side].run();
        const elapsed = performance.now() - start;
        collectGarbage();
        const heapAfter = heapUsed();
        if (i >= warmups) {
          state.durations.push(elapsed);
          if (heapBefore !== null && heapAfter !== null) state.heapDeltas.push(heapAfter - heapBefore);
        }
      } catch (error) {
        state.message = error instanceof Error ? error.message : String(error);
      }
    }
  }

  sides.forEach(({ entry }, side) => {
    /* The placeholder's message goes; everything else it holds is overwritten. */
    delete entry.message;
    Object.assign(entry, entryFromSamples(sampled[side], { warmups, iterations, keepSamples }));
  });
}

/** Builds the entry of a sampled case: its statistics and last output, or the message of what it threw. */
function entryFromSamples(
  sampled: { durations: number[]; heapDeltas: number[]; output?: BenchmarkOutput; message?: string },
  { warmups, iterations, keepSamples }: SamplingOptions,
): BenchmarkEntry {
  if (sampled.message !== undefined) return { status: "error", message: sampled.message };
  const timeStats = summarizeSamples(sampled.durations);
  if (!timeStats) return { status: "error", message: "No timing samples were recorded." };
  const heapStats = summarizeSamples(sampled.heapDeltas);
  const stats: BenchmarkStats = {
    ...timeStats,
    iterations,
    warmups,
    ...(heapStats ? { heapDeltaBytes: heapStats } : {}),
    ...(keepSamples ? { samplesMs: sampled.durations, heapDeltaSamplesBytes: sampled.heapDeltas } : {}),
  };
  return { status: "ok", stats, output: sampled.output };
}

/** Creates a skipped benchmark entry with a stable human-readable reason. */
function skippedEntry(reason: string): BenchmarkEntry {
  return { status: "skipped", reason };
}

/** Summarizes measured samples after dropping non-finite values. */
function summarizeSamples(values: readonly number[]): NumericSummary | null {
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

/** Returns a linearly interpolated quantile from an already sorted finite sample array. */
function quantileSorted(values: readonly number[], q: number): number {
  if (values.length === 1) return values[0];
  const pos = (values.length - 1) * q;
  const lower = Math.floor(pos);
  const upper = Math.ceil(pos);
  if (lower === upper) return values[lower];
  return values[lower] + (values[upper] - values[lower]) * (pos - lower);
}

/** Reads Node heap usage when the benchmark runtime exposes `process.memoryUsage`. */
function heapUsed(): number | null {
  return process?.memoryUsage?.().heapUsed ?? null;
}

/** Invokes `globalThis.gc` when Node was launched with explicit garbage collection enabled. */
function collectGarbage(): void {
  const gc = (globalThis as { gc?: () => void }).gc;
  if (typeof gc === "function") gc();
}

/**
 * Reduces arbitrary analysis results to compact record metadata.
 *
 * Benchmark records should prove work was performed without embedding large arrays,
 * React markup, or optical data structures in every JSON run file.
 */
function describeComputationOutput(value: unknown): BenchmarkOutput {
  completed("result", value);
  if (Array.isArray(value)) return { items: value.length };
  if (value && typeof value === "object") return { keys: Object.keys(value).length };
  if (typeof value === "number") return { value };
  if (typeof value === "boolean") return { value };
  return { result: value === null ? "null" : typeof value };
}

/** Stable no-op callback used for server-rendered interactive components. */
const noop = () => {};

/** Preserve the field-geometry override alongside the shared aperture and sampling snapshot. */
function fieldCurvatureRequest(snapshot: ScenarioSnapshot) {
  return createAnalysisRequest({
    preparedState: snapshot.preparedState,
    dynamicEFL: snapshot.dynamicEFL,
    currentEPSD: snapshot.currentEPSD,
    currentPhysStopSD: snapshot.currentPhysStopSD,
    fieldGeometry: snapshot.fieldGeometry,
    sampling: snapshot.analysisSampling,
  });
}

/** Keep benchmark dispatch on the same current-state request as the drawer. */
function sphericalRequest(snapshot: ScenarioSnapshot) {
  return createAnalysisRequest({
    preparedState: snapshot.preparedState,
    dynamicEFL: snapshot.dynamicEFL,
    currentEPSD: snapshot.currentEPSD,
    currentPhysStopSD: snapshot.currentPhysStopSD,
    sampling: snapshot.analysisSampling,
  });
}
