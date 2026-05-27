import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import {
  BENCHMARK_SCHEMA_VERSION,
  summarizeRun,
  type AberrationPanelScenarioResults,
  type BenchmarkEntry,
  type BenchmarkRunRecord,
  type BenchmarkScenarioResults,
  type BenchmarkSkip,
  type BenchmarkStats,
  type AnalysisBenchmarkCategory,
  type MainBenchmarkCategory,
  type NumericSummary,
} from "./benchmarkReport.js";
export { buildBenchmarkReport, formatRunFileName } from "./benchmarkReport.js";
import buildLens from "../optics/buildLens.js";
import { analysisJobsForState2, prepareRuntimeState } from "../optics/compat.js";
import {
  computeAnalysisFieldGeometryAtState,
  computeChromaticSpread,
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
import { computeCardinalElementsAtState } from "../optics/cardinalElements.js";
import { computeElementShapes, createCoordinateTransforms } from "../optics/diagramGeometry.js";
import { obstructionAwareRayFractionsForDensity } from "../optics/raySampling.js";
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
import type { ChromaticChannel, ChromaticSpread, ChromaticSpreadByAxis, RuntimeLens } from "../types/optics.js";
import type { OffAxisMode, RayDensity } from "../types/state.js";

declare const process:
  | {
      memoryUsage?: () => { heapUsed: number };
    }
  | undefined;

const DEFAULT_LENS_KEYS = [
  "canon-serenar-50f18",
  "apo-lanthar-50f2",
  "ricoh-gr3-28f28",
  "canon-rf-85f12l",
  "sony-fe-24-70mm-f28-gm-ii",
  "sony-fe-70-200mm-f28-gm-ii",
  "canon-rf100f28-macro",
  "nikon-pc-nikkor-19mm-f4e-ed",
  "canon-ef-8-15mm-f4l-fisheye-usm",
  "fujifilm-gf-20-35mm-f4-r-wr",
  "leica-apo-vario-elmarit-sl-90-280-f28-4",
  "reference-maksutov-cassegrain-meniscus",
] as const;

const SCENARIOS = [
  {
    id: "default",
    focusT: 0,
    zoomT: 0,
    aberrationT: 0,
    stopdownT: 0,
    rayDensity: "normal" as RayDensity,
    rayTracksF: false,
    showOnAxis: true,
    showOffAxis: "trueAngle" as OffAxisMode,
    showChromatic: false,
  },
  {
    id: "stopped-close",
    focusT: 1,
    zoomT: 0.5,
    aberrationT: 0,
    stopdownT: 0.5,
    rayDensity: "normal" as RayDensity,
    rayTracksF: true,
    showOnAxis: true,
    showOffAxis: "trueAngle" as OffAxisMode,
    showChromatic: false,
  },
  {
    id: "tele-dense-chromatic",
    focusT: 0,
    zoomT: 1,
    aberrationT: 0,
    stopdownT: 0,
    rayDensity: "dense" as RayDensity,
    rayTracksF: false,
    showOnAxis: true,
    showOffAxis: "trueAngle" as OffAxisMode,
    showChromatic: true,
  },
] as const;

type ScenarioConfig = (typeof SCENARIOS)[number];
type BenchmarkOutput = Record<string, number | string | boolean | null>;

interface BenchmarkMetadata {
  createdAt: string;
  git: BenchmarkRunRecord["git"];
  environment: BenchmarkRunRecord["environment"];
}

export interface OpticsRenderingBenchmarkOptions extends BenchmarkMetadata {
  warmups?: number;
  iterations?: number;
  dryRun?: boolean;
  lensKeys?: string[];
}

interface ScenarioSnapshot {
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
  stopZ: number;
  currentPhysStopSD: number;
  currentEPSD: number;
  dynamicEFL: number;
  fieldGeometry: FieldGeometryState | null;
  preparedState: PreparedOpticalState;
}

interface RayWorkOutput extends BenchmarkOutput {
  onAxisRays: number;
  offAxisRays: number;
  chromaticRays: number;
  hasChromaticSpread: boolean;
}

interface RayWorkResult {
  rays: RaySegment[];
  offAxisRays: RaySegment[];
  chromaticRays: ChromaticRaySegment[];
  chromSpread: ChromaticSpread | null;
  chromaticSpreads: ChromaticSpreadByAxis;
  output: RayWorkOutput;
}

interface AberrationDataValues {
  sphericalAberration?: unknown;
  saProfile?: unknown;
  saBlurCharacter?: unknown;
  fieldCurvature?: unknown;
  chromaticFieldCurvature?: unknown;
  coma?: ReturnType<typeof analysisJobsForState2.computeComaAnalysis>;
}

type AnalysisBenchmarkResults = Record<AnalysisBenchmarkCategory, BenchmarkEntry>;

export async function runOpticsRenderingBenchmark(
  options: OpticsRenderingBenchmarkOptions,
): Promise<BenchmarkRunRecord> {
  const lensKeys = options.lensKeys ?? [...DEFAULT_LENS_KEYS];
  validateLensKeys(lensKeys);
  const warmups = options.warmups ?? 1;
  const iterations = options.iterations ?? 3;

  const record: BenchmarkRunRecord = {
    schemaVersion: BENCHMARK_SCHEMA_VERSION,
    createdAt: options.createdAt,
    git: options.git,
    environment: options.environment,
    config: {
      warmups,
      iterations,
      lensKeys,
      scenarios: SCENARIOS.map((scenario) => scenario.id),
    },
    results: {},
    aberrationPanels: {},
    summary: { main: {}, aberrationPanels: {} },
    warnings: [],
  };

  if (options.dryRun) {
    record.warnings.push("Dry run: lens keys and benchmark schema were validated without running measurements.");
    record.summary = summarizeRun(record);
    return record;
  }

  for (const lensKey of lensKeys) {
    record.results[lensKey] = {};
    record.aberrationPanels[lensKey] = {};
    const L = buildLens(LENS_CATALOG[lensKey]);

    for (const scenario of SCENARIOS) {
      const snapshot = buildScenarioSnapshot(L, scenario);
      const rayWork = computeRayWork(snapshot);

      record.results[lensKey][scenario.id] = measureMainScenario(lensKey, scenario, L, snapshot, rayWork, {
        warmups,
        iterations,
      });
      record.aberrationPanels[lensKey][scenario.id] = measureAberrationPanels(lensKey, scenario, snapshot, {
        warmups,
        iterations,
      });
    }
  }

  record.summary = summarizeRun(record);
  return record;
}

function validateLensKeys(lensKeys: readonly string[]): void {
  const missing = lensKeys.filter((key) => !LENS_CATALOG[key]);
  if (missing.length > 0) {
    throw new Error(`Benchmark lens key(s) not found in catalog: ${missing.join(", ")}`);
  }
}

function measureMainScenario(
  lensKey: string,
  scenario: ScenarioConfig,
  L: RuntimeLens,
  snapshot: ScenarioSnapshot,
  rayWork: RayWorkResult,
  options: Required<Pick<OpticsRenderingBenchmarkOptions, "warmups" | "iterations">>,
): BenchmarkScenarioResults {
  const measure = (category: MainBenchmarkCategory, fn: () => BenchmarkOutput): BenchmarkEntry =>
    measureEntry(`${lensKey}:${scenario.id}:${category}`, fn, options);

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
      };
    }),
    rays: measure("rays", () => computeRayWork(snapshot).output),
    analysis: measure("analysis", () => computeAnalysisWork(snapshot)),
    analysisBreakdown: measureAnalysisBreakdown(lensKey, scenario, snapshot, options),
    svgRender: measure("svgRender", () => renderDiagram(snapshot, rayWork)),
    totalCold: measure("totalCold", () => {
      const built = buildLens(LENS_CATALOG[lensKey]);
      const nextSnapshot = buildScenarioSnapshot(built, scenario);
      const nextRayWork = computeRayWork(nextSnapshot);
      computeAnalysisWork(nextSnapshot);
      renderDiagram(nextSnapshot, nextRayWork);
      return {
        surfaces: nextSnapshot.L.N,
        rays: nextRayWork.output.onAxisRays + nextRayWork.output.offAxisRays + nextRayWork.output.chromaticRays,
      };
    }),
    totalWarm: measure("totalWarm", () => {
      const nextSnapshot = buildScenarioSnapshot(L, scenario);
      const nextRayWork = computeRayWork(nextSnapshot);
      computeAnalysisWork(nextSnapshot);
      renderDiagram(nextSnapshot, nextRayWork);
      return {
        surfaces: nextSnapshot.L.N,
        rays: nextRayWork.output.onAxisRays + nextRayWork.output.offAxisRays + nextRayWork.output.chromaticRays,
      };
    }),
  };
}

function buildScenarioSnapshot(L: RuntimeLens, scenario: ScenarioConfig): ScenarioSnapshot {
  const focusT = scenario.focusT;
  const zoomT = L.isZoom ? scenario.zoomT : 0;
  const aberrationT = L.aberrationControl ? scenario.aberrationT : 0;
  const stopdownT = scenario.stopdownT;
  const ref = doLayout(0, 0, L);
  const IMG_MM = ref.imgZ;
  const cur = doLayout(focusT, zoomT, L, aberrationT);
  const dz = IMG_MM - cur.imgZ;
  const zPos = cur.z.map((z) => z + dz);
  const fieldGeometry = computeAnalysisFieldGeometryAtState(focusT, zoomT, L, aberrationT);
  const { sx, sy, clampedRayEnd, CX, IX, effectiveSC } = createCoordinateTransforms({
    svgW: L.svgW,
    svgH: L.svgH,
    SC: L.SC,
    YSC: L.YSC,
    lensShiftFrac: L.lensShiftFrac,
    imgMM: IMG_MM,
    scaleRatio: null,
  });
  const shapes = computeElementShapes(L, zPos, sx, sy);
  const currentFOPEN = fopenAtZoom(zoomT, L);
  const rawFNumber = L.FOPEN * Math.pow(L.maxFstop / L.FOPEN, stopdownT);
  const fNumber = Math.max(rawFNumber, currentFOPEN);
  const currentPhysStopSD = (L.stopPhysSD * L.FOPEN) / fNumber;
  const baseEPSD = fieldGeometry
    ? entrancePupilAtState(L.stopPhysSD, focusT, zoomT, L, fieldGeometry, aberrationT).epSD
    : L.EP.epSD;
  const currentEPSD = (baseEPSD * L.FOPEN) / fNumber;
  const dynamicEFL = eflAtFocus(focusT, zoomT, L, aberrationT);
  effectiveFNumber(fNumber, focusT, zoomT, L, aberrationT);
  computeCardinalElementsAtState(L, focusT, zoomT, zPos, IMG_MM, aberrationT);

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
    stopZ: zPos[L.stopIdx],
    currentPhysStopSD,
    currentEPSD,
    dynamicEFL,
    fieldGeometry,
    preparedState: prepareRuntimeState(L, focusT, zoomT, aberrationT),
  };
}

function computeRayWork(snapshot: ScenarioSnapshot): RayWorkResult {
  const { L, scenario, zPos, IMG_MM, focusT, zoomT, aberrationT, currentPhysStopSD, currentEPSD } = snapshot;
  const focusK = scenario.rayTracksF ? conjugateK(focusT, zoomT, L, aberrationT) : 0;
  const rays: RaySegment[] = [];
  const offAxisRays: RaySegment[] = [];
  const chromaticRays: ChromaticRaySegment[] = [];

  if (scenario.showOnAxis) {
    for (const f of obstructionAwareRayFractionsForDensity(L, L.rayFractions, scenario.rayDensity, currentEPSD)) {
      const h = f * currentEPSD;
      const uIn = scenario.rayTracksF ? h * focusK : 0;
      const result = traceRay(h, uIn, zPos, focusT, zoomT, currentPhysStopSD, true, L, aberrationT);
      rays.push(compileTraceSegment(snapshot, result));
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
    for (const f of obstructionAwareRayFractionsForDensity(L, L.offAxisFractions, scenario.rayDensity, currentEPSD)) {
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

  if (scenario.showChromatic) {
    const channels = filterChannels(true, true, true, false);
    for (const f of obstructionAwareRayFractionsForDensity(L, L.rayFractions, scenario.rayDensity, currentEPSD)) {
      const h = f * currentEPSD;
      const uIn = scenario.rayTracksF ? h * focusK : 0;
      for (const channel of channels) {
        const result = traceRayChromatic(h, uIn, zPos, focusT, zoomT, currentPhysStopSD, true, L, channel, aberrationT);
        chromaticRays.push(compileChromaticTraceSegment(snapshot, result, channel, "onAxis", f));
      }
    }

    if (offAxisGeometry) {
      for (const f of obstructionAwareRayFractionsForDensity(L, L.offAxisFractions, scenario.rayDensity, currentEPSD)) {
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

  const chromaticSpreads: ChromaticSpreadByAxis = scenario.showChromatic
    ? {
        onAxis: spreadForAxis(chromaticRays, "onAxis", IMG_MM, zPos[L.N - 1]),
        offAxis: spreadForAxis(chromaticRays, "offAxis", IMG_MM, zPos[L.N - 1]),
      }
    : { onAxis: null, offAxis: null };
  const chromSpread = chromaticSpreads.onAxis ?? chromaticSpreads.offAxis;

  return {
    rays,
    offAxisRays,
    chromaticRays,
    chromSpread,
    chromaticSpreads,
    output: {
      onAxisRays: rays.length,
      offAxisRays: offAxisRays.length,
      chromaticRays: chromaticRays.length,
      hasChromaticSpread: Boolean(chromSpread),
    },
  };
}

function computeAnalysisWork(snapshot: ScenarioSnapshot): BenchmarkOutput {
  const { L, preparedState, dynamicEFL, currentEPSD, currentPhysStopSD, fieldGeometry } = snapshot;
  const output: BenchmarkOutput = {};
  const summary = analysisJobsForState2.computeOpticalSummary(
    preparedState,
    dynamicEFL,
    currentEPSD,
    currentPhysStopSD,
    fieldGeometry ?? undefined,
  );
  output.summarySurfaceCount = summary.surfaceCount;

  if (!L.isFoldedOptics) {
    output.distortionSamples = analysisJobsForState2.computeDistortionCurve(
      preparedState,
      dynamicEFL,
      currentPhysStopSD,
      fieldGeometry ?? undefined,
    ).length;
    output.distortionGridLines = analysisJobsForState2.computeDistortionFieldGrid(
      preparedState,
      currentPhysStopSD,
      fieldGeometry ?? undefined,
    ).lines.length;
    output.vignettingSamples = analysisJobsForState2.computeVignettingCurve(
      preparedState,
      currentEPSD,
      currentPhysStopSD,
      fieldGeometry ?? undefined,
    ).length;
  } else {
    output.foldedSequentialAnalysisSkipped = true;
  }

  const pupilProfiles = analysisJobsForState2.computeBothPupilAberrationProfiles(
    preparedState,
    undefined,
    fieldGeometry ?? undefined,
  );
  output.pupilSamples = pupilProfiles.ep.samples.length + pupilProfiles.xp.samples.length;
  const bokehPair = analysisJobsForState2.computeBokehPreviewPair(preparedState, currentEPSD, currentPhysStopSD);
  output.bokehInfinityFields = bokehPair.infinity?.fields.length ?? 0;
  output.bokehNearFocusFields = bokehPair.nearFocus?.fields.length ?? 0;
  output.bestFocusZ = analysisJobsForState2.computeBestFocusZ(preparedState, currentEPSD, currentPhysStopSD);
  return output;
}

function measureAnalysisBreakdown(
  lensKey: string,
  scenario: ScenarioConfig,
  snapshot: ScenarioSnapshot,
  options: Required<Pick<OpticsRenderingBenchmarkOptions, "warmups" | "iterations">>,
): AnalysisBenchmarkResults {
  const measure = (category: AnalysisBenchmarkCategory, fn: () => BenchmarkOutput): BenchmarkEntry =>
    measureEntry(`${lensKey}:${scenario.id}:analysis.${category}`, fn, options);
  const foldedSkip = (category: AnalysisBenchmarkCategory): BenchmarkEntry =>
    skippedEntry(`${category} uses sequential field analysis guarded for folded optics`);

  return {
    summary: measure("summary", () => computeAnalysisSummaryWork(snapshot)),
    distortionCurve: snapshot.L.isFoldedOptics
      ? foldedSkip("distortionCurve")
      : measure("distortionCurve", () => computeAnalysisDistortionCurveWork(snapshot)),
    distortionGrid: snapshot.L.isFoldedOptics
      ? foldedSkip("distortionGrid")
      : measure("distortionGrid", () => computeAnalysisDistortionGridWork(snapshot)),
    vignetting: snapshot.L.isFoldedOptics
      ? foldedSkip("vignetting")
      : measure("vignetting", () => computeAnalysisVignettingWork(snapshot)),
    pupils: measure("pupils", () => computeAnalysisPupilsWork(snapshot)),
    bokehPair: measure("bokehPair", () => computeAnalysisBokehPairWork(snapshot)),
    bestFocus: measure("bestFocus", () => computeAnalysisBestFocusWork(snapshot)),
  };
}

function computeAnalysisSummaryWork(snapshot: ScenarioSnapshot): BenchmarkOutput {
  const summary = analysisJobsForState2.computeOpticalSummary(
    snapshot.preparedState,
    snapshot.dynamicEFL,
    snapshot.currentEPSD,
    snapshot.currentPhysStopSD,
    snapshot.fieldGeometry ?? undefined,
  );
  return { summarySurfaceCount: summary.surfaceCount };
}

function computeAnalysisDistortionCurveWork(snapshot: ScenarioSnapshot): BenchmarkOutput {
  const samples = analysisJobsForState2.computeDistortionCurve(
    snapshot.preparedState,
    snapshot.dynamicEFL,
    snapshot.currentPhysStopSD,
    snapshot.fieldGeometry ?? undefined,
  );
  return { distortionSamples: samples.length };
}

function computeAnalysisDistortionGridWork(snapshot: ScenarioSnapshot): BenchmarkOutput {
  const grid = analysisJobsForState2.computeDistortionFieldGrid(
    snapshot.preparedState,
    snapshot.currentPhysStopSD,
    snapshot.fieldGeometry ?? undefined,
  );
  return { distortionGridLines: grid.lines.length };
}

function computeAnalysisVignettingWork(snapshot: ScenarioSnapshot): BenchmarkOutput {
  const samples = analysisJobsForState2.computeVignettingCurve(
    snapshot.preparedState,
    snapshot.currentEPSD,
    snapshot.currentPhysStopSD,
    snapshot.fieldGeometry ?? undefined,
  );
  return { vignettingSamples: samples.length };
}

function computeAnalysisPupilsWork(snapshot: ScenarioSnapshot): BenchmarkOutput {
  const pupilProfiles = analysisJobsForState2.computeBothPupilAberrationProfiles(
    snapshot.preparedState,
    undefined,
    snapshot.fieldGeometry ?? undefined,
  );
  return { pupilSamples: pupilProfiles.ep.samples.length + pupilProfiles.xp.samples.length };
}

function computeAnalysisBokehPairWork(snapshot: ScenarioSnapshot): BenchmarkOutput {
  const bokehPair = analysisJobsForState2.computeBokehPreviewPair(
    snapshot.preparedState,
    snapshot.currentEPSD,
    snapshot.currentPhysStopSD,
  );
  return {
    bokehInfinityFields: bokehPair.infinity?.fields.length ?? 0,
    bokehNearFocusFields: bokehPair.nearFocus?.fields.length ?? 0,
  };
}

function computeAnalysisBestFocusWork(snapshot: ScenarioSnapshot): BenchmarkOutput {
  return {
    bestFocusZ: analysisJobsForState2.computeBestFocusZ(
      snapshot.preparedState,
      snapshot.currentEPSD,
      snapshot.currentPhysStopSD,
    ),
  };
}

function measureAberrationPanels(
  lensKey: string,
  scenario: ScenarioConfig,
  snapshot: ScenarioSnapshot,
  options: Required<Pick<OpticsRenderingBenchmarkOptions, "warmups" | "iterations">>,
): AberrationPanelScenarioResults {
  const skips: BenchmarkSkip[] = [];
  const data: Record<string, BenchmarkEntry> = {};
  const render: Record<string, BenchmarkEntry> = {};
  const measure = (group: "data" | "render", category: string, fn: () => BenchmarkOutput): BenchmarkEntry =>
    measureEntry(`${lensKey}:${scenario.id}:aberrationPanels:${group}.${category}`, fn, options);

  data.sphericalAberration = measure("data", "sphericalAberration", () => {
    const result = analysisJobsForState2.computeSphericalAberration(
      snapshot.preparedState,
      snapshot.currentEPSD,
      snapshot.currentPhysStopSD,
    );
    return describeComputationOutput(result);
  });
  data.saProfile = measure("data", "saProfile", () => {
    const result = analysisJobsForState2.computeSAProfile(
      snapshot.preparedState,
      snapshot.currentEPSD,
      snapshot.currentPhysStopSD,
    );
    return { points: Array.isArray(result) ? result.length : 0 };
  });
  data.saBlurCharacter = measure("data", "saBlurCharacter", () => {
    const base = analysisJobsForState2.computeSphericalAberration(
      snapshot.preparedState,
      snapshot.currentEPSD,
      snapshot.currentPhysStopSD,
    );
    const result = analysisJobsForState2.computeSphericalAberrationBlurCharacter(
      snapshot.preparedState,
      snapshot.currentEPSD,
      snapshot.currentPhysStopSD,
      base,
    );
    return describeComputationOutput(result);
  });

  if (snapshot.L.isFoldedOptics) {
    for (const category of ["fieldCurvature", "chromaticFieldCurvature", "coma", "comaTab"]) {
      skips.push({ lensKey, scenarioId: scenario.id, category, reason: "Folded optics guard" });
    }
  } else {
    data.fieldCurvature = measure("data", "fieldCurvature", () =>
      describeComputationOutput(
        analysisJobsForState2.computeFieldCurvature(
          snapshot.preparedState,
          snapshot.currentEPSD,
          snapshot.currentPhysStopSD,
          false,
          snapshot.fieldGeometry ?? undefined,
        ),
      ),
    );
    data.chromaticFieldCurvature = measure("data", "chromaticFieldCurvature", () =>
      describeComputationOutput(
        analysisJobsForState2.computeFieldCurvature(
          snapshot.preparedState,
          snapshot.currentEPSD,
          snapshot.currentPhysStopSD,
          true,
          snapshot.fieldGeometry ?? undefined,
        ),
      ),
    );
    data.coma = measure("data", "coma", () =>
      describeComputationOutput(
        analysisJobsForState2.computeComaAnalysis(
          snapshot.preparedState,
          snapshot.currentEPSD,
          snapshot.currentPhysStopSD,
          snapshot.fieldGeometry ?? undefined,
        ),
      ),
    );
  }

  const values = computeAberrationDataValues(snapshot);
  render.aberrationsTab = measure("render", "aberrationsTab", () => renderAberrationsTab(snapshot));
  render.sphericalSection = measure("render", "sphericalSection", () => renderSphericalSection(snapshot, values));

  if (!snapshot.L.isFoldedOptics) {
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
  }

  return { data, render, skips };
}

function computeAberrationDataValues(snapshot: ScenarioSnapshot): AberrationDataValues {
  const sphericalAberration = analysisJobsForState2.computeSphericalAberration(
    snapshot.preparedState,
    snapshot.currentEPSD,
    snapshot.currentPhysStopSD,
  );
  const saProfile = analysisJobsForState2.computeSAProfile(
    snapshot.preparedState,
    snapshot.currentEPSD,
    snapshot.currentPhysStopSD,
  );
  const saBlurCharacter = analysisJobsForState2.computeSphericalAberrationBlurCharacter(
    snapshot.preparedState,
    snapshot.currentEPSD,
    snapshot.currentPhysStopSD,
    sphericalAberration,
  );
  if (snapshot.L.isFoldedOptics) {
    return { sphericalAberration, saProfile, saBlurCharacter };
  }
  const fieldCurvature = analysisJobsForState2.computeFieldCurvature(
    snapshot.preparedState,
    snapshot.currentEPSD,
    snapshot.currentPhysStopSD,
    false,
    snapshot.fieldGeometry ?? undefined,
  );
  const chromaticFieldCurvature = analysisJobsForState2.computeFieldCurvature(
    snapshot.preparedState,
    snapshot.currentEPSD,
    snapshot.currentPhysStopSD,
    true,
    snapshot.fieldGeometry ?? undefined,
  );
  const coma = analysisJobsForState2.computeComaAnalysis(
    snapshot.preparedState,
    snapshot.currentEPSD,
    snapshot.currentPhysStopSD,
    snapshot.fieldGeometry ?? undefined,
  );
  return { sphericalAberration, saProfile, saBlurCharacter, fieldCurvature, chromaticFieldCurvature, coma };
}

function renderDiagram(snapshot: ScenarioSnapshot, rayWork: RayWorkResult): BenchmarkOutput {
  const html = renderToStaticMarkup(
    <DiagramSVG
      L={snapshot.L}
      t={themes.dark}
      dark={true}
      sx={snapshot.sx}
      sy={snapshot.sy}
      CX={snapshot.CX}
      IX={snapshot.IX}
      effectiveSC={snapshot.effectiveSC}
      zPos={snapshot.zPos}
      IMG_MM={snapshot.IMG_MM}
      shapes={snapshot.shapes}
      filterId="benchmark-diagram"
      stopZ={snapshot.stopZ}
      currentPhysStopSD={snapshot.currentPhysStopSD}
      rays={rayWork.rays}
      offAxisRays={rayWork.offAxisRays}
      chromaticRays={rayWork.chromaticRays}
      chromSpread={rayWork.chromSpread}
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

function renderAberrationsTab(snapshot: ScenarioSnapshot): BenchmarkOutput {
  const html = renderToStaticMarkup(
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
      expanded={true}
      onExpandedChange={noop}
    />,
  );
  return { markupLength: html.length };
}

function renderComaTab(snapshot: ScenarioSnapshot): BenchmarkOutput {
  const html = renderToStaticMarkup(
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
    />,
  );
  return { markupLength: html.length };
}

function renderSphericalSection(snapshot: ScenarioSnapshot, values: AberrationDataValues): BenchmarkOutput {
  const html = renderToStaticMarkup(
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

function renderFieldCurvatureSection(snapshot: ScenarioSnapshot, values: AberrationDataValues): BenchmarkOutput {
  const html = renderToStaticMarkup(
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

function renderAstigmatismSection(snapshot: ScenarioSnapshot, values: AberrationDataValues): BenchmarkOutput {
  const html = renderToStaticMarkup(
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

function renderComaPreviewSection(snapshot: ScenarioSnapshot, values: AberrationDataValues): BenchmarkOutput {
  const html = renderToStaticMarkup(
    <ComaPreviewSection
      result={values.coma?.pointCloudPreview ?? null}
      expanded={true}
      onToggle={noop}
      theme={themes.dark}
    />,
  );
  return { markupLength: html.length, folded: snapshot.L.isFoldedOptics };
}

function renderMeridionalComaSection(snapshot: ScenarioSnapshot, values: AberrationDataValues): BenchmarkOutput {
  const html = renderToStaticMarkup(
    <MeridionalComaSection
      result={values.coma?.meridionalComa ?? null}
      expanded={true}
      onToggle={noop}
      theme={themes.dark}
    />,
  );
  return { markupLength: html.length, folded: snapshot.L.isFoldedOptics };
}

function renderSagittalComaSection(snapshot: ScenarioSnapshot, values: AberrationDataValues): BenchmarkOutput {
  const html = renderToStaticMarkup(
    <SagittalComaSection
      result={values.coma?.sagittalComa ?? null}
      expanded={true}
      onToggle={noop}
      theme={themes.dark}
    />,
  );
  return { markupLength: html.length, folded: snapshot.L.isFoldedOptics };
}

function compileTraceSegment(
  snapshot: ScenarioSnapshot,
  result: ReturnType<typeof traceRay>,
  endOverride?: number[],
): RaySegment {
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
    clipped: result.clipped,
  };
}

function spreadForAxis(
  chromaticRays: ChromaticRaySegment[],
  axis: ChromaticRaySegment["axis"],
  IMG_MM: number,
  lastSurfaceZ: number,
): ChromaticSpread | null {
  const axisRays = chromaticRays.filter((ray) => ray.axis === axis);
  if (axisRays.length === 0) return null;

  const candidateFractions = Array.from(new Set(axisRays.map((ray) => ray.fraction))).sort((a, b) => {
    const absDelta = Math.abs(b) - Math.abs(a);
    return Math.abs(absDelta) > 1e-12 ? absDelta : b - a;
  });

  for (const fraction of candidateFractions) {
    const marginalRays: Partial<Record<ChromaticChannel, { y: number; u: number; clipped: boolean }>> = {};
    for (const ray of axisRays) {
      if (Math.abs(ray.fraction - fraction) < 1e-12 && !ray.clipped && Math.abs(ray.u) > 1e-15) {
        marginalRays[ray.channel] = { y: ray.y, u: ray.u, clipped: false };
      }
    }
    if (Object.keys(marginalRays).length >= 2) return computeChromaticSpread(marginalRays, IMG_MM, lastSurfaceZ);
  }

  return null;
}

function measureEntry(
  _label: string,
  fn: () => BenchmarkOutput,
  { warmups, iterations }: Required<Pick<OpticsRenderingBenchmarkOptions, "warmups" | "iterations">>,
): BenchmarkEntry {
  const durations: number[] = [];
  const heapDeltas: number[] = [];
  let output: BenchmarkOutput | undefined;

  try {
    resetPerfProbe();
    for (let i = 0; i < warmups + iterations; i++) {
      collectGarbage();
      const heapBefore = heapUsed();
      const start = performance.now();
      output = fn();
      const elapsed = performance.now() - start;
      collectGarbage();
      const heapAfter = heapUsed();
      if (i >= warmups) {
        durations.push(elapsed);
        if (heapBefore !== null && heapAfter !== null) heapDeltas.push(heapAfter - heapBefore);
      }
    }
  } catch (error) {
    return {
      status: "error",
      message: error instanceof Error ? error.message : String(error),
    };
  }

  const timeStats = summarizeSamples(durations);
  if (!timeStats) return { status: "error", message: "No timing samples were recorded." };
  const heapStats = summarizeSamples(heapDeltas);
  const stats: BenchmarkStats = {
    ...timeStats,
    iterations,
    warmups,
    ...(heapStats ? { heapDeltaBytes: heapStats } : {}),
  };
  return { status: "ok", stats, output };
}

function skippedEntry(reason: string): BenchmarkEntry {
  return { status: "skipped", reason };
}

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

function quantileSorted(values: readonly number[], q: number): number {
  if (values.length === 1) return values[0];
  const pos = (values.length - 1) * q;
  const lower = Math.floor(pos);
  const upper = Math.ceil(pos);
  if (lower === upper) return values[lower];
  return values[lower] + (values[upper] - values[lower]) * (pos - lower);
}

function heapUsed(): number | null {
  return process?.memoryUsage?.().heapUsed ?? null;
}

function collectGarbage(): void {
  const gc = (globalThis as { gc?: () => void }).gc;
  if (typeof gc === "function") gc();
}

function describeComputationOutput(value: unknown): BenchmarkOutput {
  if (Array.isArray(value)) return { items: value.length };
  if (value && typeof value === "object") return { keys: Object.keys(value).length };
  if (typeof value === "number") return { value };
  if (typeof value === "boolean") return { value };
  return { result: value === null ? "null" : typeof value };
}

const noop = () => {};
