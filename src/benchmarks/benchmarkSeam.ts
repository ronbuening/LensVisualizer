/**
 * The head's benchmark harness is copied into each base tree, but its engine is not.
 * Eager globs tolerate missing modules; export candidates and call shapes resolve once
 * when a bundle loads. Timed calls only forward the same inputs through one wrapper.
 * Inputs stay in the historical context vocabulary so old engines need no request shim.
 */
import type { AnalysisComputationContext } from "../optics/compat.js";
import type { AnalysisRequestParams } from "../optics/analysis.js";
import type { RuntimeLens } from "../types/optics.js";

type Module = Readonly<Record<string, unknown>>;
const modules = {
  analysis: Object.values(import.meta.glob<Module>("../optics/analysis.ts", { eager: true }))[0],
  jobs: Object.values(import.meta.glob<Module>("../optics/analysis/analysisJobs.ts", { eager: true }))[0],
  compat: Object.values(import.meta.glob<Module>("../optics/compat.ts", { eager: true }))[0],
  cardinals: Object.values(import.meta.glob<Module>("../optics/cardinalElements.ts", { eager: true }))[0],
};

type Candidate = readonly [keyof typeof modules, string];

/** Resolve an export once; type queries below are erased and never import head-only files. */
function capability<T>(name: string, candidates: readonly Candidate[]): T {
  for (const [module, exportName] of candidates) {
    const value = modules[module]?.[exportName];
    if (value !== undefined) return value as T;
  }
  throw new Error(`benchmark seam: no export for ${name}; tried ${candidates.map(([m, e]) => `${m}.${e}`).join(", ")}`);
}

type HeadJobs = Omit<
  typeof import("../optics/compat.js").analysisJobsForState2,
  "computeChromaticAnalysis" | "computeChromaticRayFanAnalysis"
>;
type Tail<T extends unknown[]> = T extends [unknown, ...infer Rest] ? Rest : never;
type Jobs = {
  [K in keyof HeadJobs]: (
    inputs: AnalysisRequestParams,
    ...rest: Tail<Parameters<HeadJobs[K]>>
  ) => ReturnType<HeadJobs[K]>;
};
const rawJobs = capability<HeadJobs>("analysis jobs", [
  ["compat", "analysisJobsForState2"],
  ["jobs", "analysisJobsForState2"],
]);
const createRequest = modules.analysis?.createAnalysisRequest as
  | typeof import("../optics/analysis.js").createAnalysisRequest
  | undefined;

/* The supported pre-request engines share this positional registry. Keep its arguments
 * here rather than synthesizing requests or detecting a signature inside measured calls. */
type LegacyJobs = { [K in keyof HeadJobs]: (...args: unknown[]) => ReturnType<HeadJobs[K]> };
const legacy = rawJobs as unknown as LegacyJobs;

export const analysisJobsForState2: Jobs = createRequest
  ? {
      computeSphericalAberration: (p) => rawJobs.computeSphericalAberration(createRequest(p)),
      computeSAProfile: (p) => rawJobs.computeSAProfile(createRequest(p)),
      computeSphericalAberrationBlurCharacter: (p, base) =>
        rawJobs.computeSphericalAberrationBlurCharacter(createRequest(p), base),
      computeBestFocusZ: (p) => rawJobs.computeBestFocusZ(createRequest(p)),
      computeFieldCurvature: (p, chromatic) => rawJobs.computeFieldCurvature(createRequest(p), chromatic),
      computeFieldCurvatureBundle: (p) => rawJobs.computeFieldCurvatureBundle(createRequest(p)),
      computeComaAnalysis: (p) => rawJobs.computeComaAnalysis(createRequest(p)),
      computeOpticalSummary: (p) => rawJobs.computeOpticalSummary(createRequest(p)),
      computeDistortionCurve: (p) => rawJobs.computeDistortionCurve(createRequest(p)),
      computeDistortionFieldGrid: (p) => rawJobs.computeDistortionFieldGrid(createRequest(p)),
      computeVignettingCurve: (p) => rawJobs.computeVignettingCurve(createRequest(p)),
      computeBothPupilAberrationProfiles: (p) => rawJobs.computeBothPupilAberrationProfiles(createRequest(p)),
      computeBokehPreviewPair: (p) => rawJobs.computeBokehPreviewPair(createRequest(p)),
    }
  : {
      computeSphericalAberration: (p) =>
        legacy.computeSphericalAberration(p.preparedState, p.currentEPSD, p.currentPhysStopSD),
      computeSAProfile: (p) => legacy.computeSAProfile(p.preparedState, p.currentEPSD, p.currentPhysStopSD),
      computeSphericalAberrationBlurCharacter: (p, base) =>
        legacy.computeSphericalAberrationBlurCharacter(
          p.preparedState,
          p.currentEPSD,
          p.currentPhysStopSD,
          base,
          p.sampling,
        ),
      computeBestFocusZ: (p) => legacy.computeBestFocusZ(p.preparedState, p.currentEPSD, p.currentPhysStopSD),
      computeFieldCurvature: (p, chromatic) =>
        legacy.computeFieldCurvature(
          p.preparedState,
          p.currentEPSD,
          p.currentPhysStopSD,
          chromatic,
          p.fieldGeometry ?? undefined,
          p.sampling,
        ),
      computeFieldCurvatureBundle: (p) =>
        legacy.computeFieldCurvatureBundle(
          p.preparedState,
          p.currentEPSD,
          p.currentPhysStopSD,
          p.fieldGeometry ?? undefined,
          p.sampling,
        ),
      computeComaAnalysis: (p) =>
        legacy.computeComaAnalysis(
          p.preparedState,
          p.currentEPSD,
          p.currentPhysStopSD,
          p.fieldGeometry ?? undefined,
          p.sampling,
        ),
      computeOpticalSummary: (p) =>
        legacy.computeOpticalSummary(
          p.preparedState,
          p.dynamicEFL,
          p.currentEPSD,
          p.currentPhysStopSD,
          p.fieldGeometry ?? undefined,
        ),
      computeDistortionCurve: (p) =>
        legacy.computeDistortionCurve(
          p.preparedState,
          p.dynamicEFL,
          p.currentPhysStopSD,
          p.fieldGeometry ?? undefined,
          p.sampling,
        ),
      computeDistortionFieldGrid: (p) =>
        legacy.computeDistortionFieldGrid(
          p.preparedState,
          p.currentPhysStopSD,
          p.fieldGeometry ?? undefined,
          p.sampling,
        ),
      computeVignettingCurve: (p) =>
        legacy.computeVignettingCurve(
          p.preparedState,
          p.currentEPSD,
          p.currentPhysStopSD,
          p.fieldGeometry ?? undefined,
          p.sampling,
        ),
      computeBothPupilAberrationProfiles: (p) =>
        legacy.computeBothPupilAberrationProfiles(
          p.preparedState,
          p.sampling?.pupilAberrationSampleCount,
          p.fieldGeometry ?? undefined,
        ),
      computeBokehPreviewPair: (p) =>
        legacy.computeBokehPreviewPair(p.preparedState, p.currentEPSD, p.currentPhysStopSD, p.sampling),
    };

type Layout = { zPos: number[]; imagePlaneZ: number };
type CardinalResult = ReturnType<typeof import("../optics/analysis.js").computeCardinalElements>;
type Cardinals = (inputs: AnalysisRequestParams, layout: Layout, lens: RuntimeLens) => CardinalResult;
const cardinalExport = capability<unknown>("cardinals", [
  ["analysis", "computeCardinalElements"],
  ["cardinals", "computeCardinalElementsAtState"],
]);
const headCardinals = cardinalExport as typeof import("../optics/analysis.js").computeCardinalElements;
const oldCardinals = cardinalExport as (
  lens: RuntimeLens,
  focus: number,
  zoom: number,
  z: number[],
  imageZ: number,
  aberration: number,
) => CardinalResult;
export const computeCardinalElements: Cardinals = createRequest
  ? (p, layout) => headCardinals(createRequest(p), layout)
  : (p, layout, lens) =>
      oldCardinals(
        lens,
        p.preparedState.focusT,
        p.preparedState.zoomT,
        layout.zPos,
        layout.imagePlaneZ,
        p.preparedState.aberrationT,
      );

const createContext = capability<typeof import("../optics/compat.js").createAnalysisComputationContext>(
  "analysis context",
  [
    ["analysis", "createAnalysisComputationContext"],
    ["compat", "createAnalysisComputationContext"],
  ],
);

/** Each fine-grained perspective case must compute its job again, bypassing context memoization. */
export const createFreshAnalysisContext: (context: AnalysisComputationContext) => AnalysisComputationContext =
  createRequest
    ? (context) => createContext(Object.freeze({ ...context.request }))
    : (context) =>
        createContext({
          preparedState: context.preparedState,
          dynamicEFL: context.dynamicEFL,
          currentEPSD: context.currentEPSD,
          currentPhysStopSD: context.currentPhysStopSD,
          fieldGeometry: context.fieldGeometry,
          analysisQuality: context.analysisQuality,
          sampling: context.sampling,
          perspectiveTraceContext: context.perspectiveTraceContext,
        });
