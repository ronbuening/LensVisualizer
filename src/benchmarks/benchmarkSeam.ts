/**
 * The head's benchmark harness is copied into each base tree, but its engine is not.
 * Eager globs tolerate missing modules; export candidates and call shapes resolve once
 * when a bundle loads. Timed calls only forward the same inputs through one wrapper.
 * Inputs stay in the historical context vocabulary so old engines need no request shim.
 */
import type { AnalysisComputationContext } from "../optics/analysis.js";
import type { AnalysisRequestParams } from "../optics/analysis.js";
import type { RuntimeLens } from "../types/optics.js";

type Module = Readonly<Record<string, unknown>>;
const modules = {
  publicOptics: Object.values(import.meta.glob<Module>("../optics/optics.ts", { eager: true }))[0],
  publicBuild: Object.values(import.meta.glob<Module>("../optics/buildLens.ts", { eager: true }))[0],
  publicField: Object.values(import.meta.glob<Module>("../optics/fieldGeometry.ts", { eager: true }))[0],
  publicChromatic: Object.values(import.meta.glob<Module>("../optics/chromatic.ts", { eager: true }))[0],
  publicDiagram: Object.values(import.meta.glob<Module>("../optics/diagramGeometry.ts", { eager: true }))[0],
  publicPerspective: Object.values(import.meta.glob<Module>("../optics/perspective.ts", { eager: true }))[0],
  oldPerspective: Object.values(import.meta.glob<Module>("../optics/perspective/index.ts", { eager: true }))[0],
  oldMovement: Object.values(import.meta.glob<Module>("../optics/lensMovement.ts", { eager: true }))[0],
  oldSampling: Object.values(import.meta.glob<Module>("../optics/raySampling.ts", { eager: true }))[0],
  oldAperture: Object.values(import.meta.glob<Module>("../optics/apertureStop.ts", { eager: true }))[0],
  oldQuality: Object.values(import.meta.glob<Module>("../optics/analysis/analysisQuality.ts", { eager: true }))[0],
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
  typeof import("../optics/analysis.js").analysisJobs,
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
  ["analysis", "analysisJobs"],
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

export const analysisJobs: Jobs = createRequest
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

const createContext = capability<typeof import("../optics/analysis.js").createAnalysisComputationContext>(
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

export const wideOpenStopAtZoom = capability<typeof import("../optics/optics.js").wideOpenStopAtZoom>(
  "wideOpenStopAtZoom",
  [
    ["publicOptics", "wideOpenStopAtZoom"],
    ["oldAperture", "wideOpenStopAtZoom"],
  ],
);

export const buildLens = capability<typeof import("../optics/buildLens.js").buildLens>("buildLens", [
  ["publicBuild", "buildLens"],
  ["publicBuild", "default"],
]);

export const createAnalysisComputationContext = capability<
  typeof import("../optics/analysis.js").createAnalysisComputationContext
>("createAnalysisComputationContext", [
  ["analysis", "createAnalysisComputationContext"],
  ["compat", "createAnalysisComputationContext"],
]);

export const prepareRuntimeState = capability<typeof import("../optics/optics.js").prepareRuntimeState>(
  "prepareRuntimeState",
  [
    ["publicOptics", "prepareRuntimeState"],
    ["compat", "prepareRuntimeState"],
  ],
);

export const anchorLayoutToCamera = capability<typeof import("../optics/optics.js").anchorLayoutToCamera>(
  "anchorLayoutToCamera",
  [["publicOptics", "anchorLayoutToCamera"]],
);

export const doLayoutForRuntimeLens = capability<typeof import("../optics/optics.js").doLayoutForRuntimeLens>(
  "doLayoutForRuntimeLens",
  [
    ["publicOptics", "doLayoutForRuntimeLens"],
    ["publicOptics", "doLayout"],
  ],
);

export const effectiveFNumber = capability<typeof import("../optics/optics.js").effectiveFNumber>("effectiveFNumber", [
  ["publicOptics", "effectiveFNumber"],
]);

export const eflAtFocus = capability<typeof import("../optics/optics.js").eflAtFocus>("eflAtFocus", [
  ["publicOptics", "eflAtFocus"],
]);

export const fopenAtZoomClamped = capability<typeof import("../optics/optics.js").fopenAtZoomClamped>(
  "fopenAtZoomClamped",
  [
    ["publicOptics", "fopenAtZoomClamped"],
    ["publicOptics", "fopenAtZoom"],
  ],
);

export const traceRay = capability<typeof import("../optics/optics.js").traceRay>("traceRay", [
  ["publicOptics", "traceRay"],
]);

export const traceRayChromatic = capability<typeof import("../optics/optics.js").traceRayChromatic>(
  "traceRayChromatic",
  [["publicOptics", "traceRayChromatic"]],
);

export const traceRayVector = capability<typeof import("../optics/optics.js").traceRayVector>("traceRayVector", [
  ["publicOptics", "traceRayVector"],
]);

export const traceRayVectorChromatic = capability<typeof import("../optics/optics.js").traceRayVectorChromatic>(
  "traceRayVectorChromatic",
  [["publicOptics", "traceRayVectorChromatic"]],
);

export const computeAnalysisFieldGeometryAtState = capability<
  typeof import("../optics/fieldGeometry.js").computeAnalysisFieldGeometryAtState
>("computeAnalysisFieldGeometryAtState", [
  ["publicField", "computeAnalysisFieldGeometryAtState"],
  ["publicOptics", "computeAnalysisFieldGeometryAtState"],
]);

export const conjugateKForRuntimeLens = capability<
  typeof import("../optics/fieldGeometry.js").conjugateKForRuntimeLens
>("conjugateKForRuntimeLens", [
  ["publicField", "conjugateKForRuntimeLens"],
  ["publicOptics", "conjugateK"],
]);

export const entrancePupilAtState = capability<typeof import("../optics/fieldGeometry.js").entrancePupilAtState>(
  "entrancePupilAtState",
  [
    ["publicField", "entrancePupilAtState"],
    ["publicOptics", "entrancePupilAtState"],
  ],
);

export const offsetVectorFieldRay = capability<typeof import("../optics/fieldGeometry.js").offsetVectorFieldRay>(
  "offsetVectorFieldRay",
  [
    ["publicField", "offsetVectorFieldRay"],
    ["publicOptics", "offsetVectorFieldRay"],
  ],
);

export const computeChromaticRayFanSpread = capability<
  typeof import("../optics/chromatic.js").computeChromaticRayFanSpread
>("computeChromaticRayFanSpread", [
  ["publicChromatic", "computeChromaticRayFanSpread"],
  ["publicOptics", "computeChromaticRayFanSpread"],
]);

export const computeElementShapes = capability<typeof import("../optics/diagramGeometry.js").computeElementShapes>(
  "computeElementShapes",
  [["publicDiagram", "computeElementShapes"]],
);

export const createCoordinateTransforms = capability<
  typeof import("../optics/diagramGeometry.js").createCoordinateTransforms
>("createCoordinateTransforms", [["publicDiagram", "createCoordinateTransforms"]]);

export const clampLensMovement = capability<typeof import("../optics/perspective.js").clampLensMovement>(
  "clampLensMovement",
  [
    ["publicPerspective", "clampLensMovement"],
    ["oldMovement", "clampLensMovement"],
  ],
);

export const createLensMovementTransform = capability<
  typeof import("../optics/perspective.js").createLensMovementTransform
>("createLensMovementTransform", [
  ["publicPerspective", "createLensMovementTransform"],
  ["oldMovement", "createLensMovementTransform"],
]);

export const cameraDirectionForDiagramField = capability<
  typeof import("../optics/perspective.js").cameraDirectionForDiagramField
>("cameraDirectionForDiagramField", [
  ["publicPerspective", "cameraDirectionForDiagramField"],
  ["oldPerspective", "cameraDirectionForDiagramField"],
]);

export const computePerspectiveMovementViewportExtent = capability<
  typeof import("../optics/perspective.js").computePerspectiveMovementViewportExtent
>("computePerspectiveMovementViewportExtent", [
  ["publicPerspective", "computePerspectiveMovementViewportExtent"],
  ["oldPerspective", "computePerspectiveMovementViewportExtent"],
]);

export const createPerspectiveTraceContext = capability<
  typeof import("../optics/perspective.js").createPerspectiveTraceContext
>("createPerspectiveTraceContext", [
  ["publicPerspective", "createPerspectiveTraceContext"],
  ["oldPerspective", "createPerspectiveTraceContext"],
]);

export const tracePerspectiveDiagramFan = capability<
  typeof import("../optics/perspective.js").tracePerspectiveDiagramFan
>("tracePerspectiveDiagramFan", [
  ["publicPerspective", "tracePerspectiveDiagramFan"],
  ["oldPerspective", "tracePerspectiveDiagramFan"],
]);

export const obstructionAwareRayFractionsForDensity = capability<
  typeof import("../optics/optics.js").obstructionAwareRayFractionsForDensity
>("obstructionAwareRayFractionsForDensity", [
  ["publicOptics", "obstructionAwareRayFractionsForDensity"],
  ["oldSampling", "obstructionAwareRayFractionsForDensity"],
]);

export const analysisSamplingForQuality = capability<typeof import("../optics/analysis.js").analysisSamplingForQuality>(
  "analysisSamplingForQuality",
  [
    ["analysis", "analysisSamplingForQuality"],
    ["oldQuality", "analysisSamplingForQuality"],
  ],
);
