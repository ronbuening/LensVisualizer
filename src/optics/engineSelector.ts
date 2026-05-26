import buildLens from "./buildLens.js";
import { analysisJobs } from "./analysisJobs.js";
import { computeCardinalElementsAtState } from "./cardinalElements.js";
import { createCoordinateTransforms, computeElementShapes } from "./diagramGeometry.js";
import { summarizeDispersionQuality } from "./dispersion.js";
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
  thick,
  traceRay,
  traceRayChromatic,
  traceRayVector,
  traceRayVectorChromatic,
} from "./optics.js";
import {
  analysisJobs2,
  buildLens2,
  computeAnalysisFieldGeometryAtState2,
  computeCardinalElementsAtState2,
  computeChromaticSpread2,
  computeElementShapes2,
  conjugateK2,
  createCoordinateTransforms2,
  doLayout2,
  effectiveFNumber2,
  eflAtFocus2,
  entrancePupilAtState2,
  fopenAtZoom2,
  offsetVectorFieldRay2,
  summarizeDispersionQuality2,
  thick2,
  traceRay2,
  traceRayChromatic2,
  traceRayVector2,
  traceRayVectorChromatic2,
} from "../optics-2/compat.js";

export type OpticsEngineId = "legacy" | "optics-2";

export interface SelectedOpticsEngine {
  id: OpticsEngineId;
  buildLens: typeof buildLens;
  doLayout: typeof doLayout;
  thick: typeof thick;
  fopenAtZoom: typeof fopenAtZoom;
  entrancePupilAtState: typeof entrancePupilAtState;
  computeAnalysisFieldGeometryAtState: typeof computeAnalysisFieldGeometryAtState;
  computeCardinalElementsAtState: typeof computeCardinalElementsAtState;
  createCoordinateTransforms: typeof createCoordinateTransforms;
  computeElementShapes: typeof computeElementShapes;
  eflAtFocus: typeof eflAtFocus;
  effectiveFNumber: typeof effectiveFNumber;
  conjugateK: typeof conjugateK;
  traceRay: typeof traceRay;
  traceRayVector: typeof traceRayVector;
  traceRayChromatic: typeof traceRayChromatic;
  traceRayVectorChromatic: typeof traceRayVectorChromatic;
  offsetVectorFieldRay: typeof offsetVectorFieldRay;
  computeChromaticSpread: typeof computeChromaticSpread;
  summarizeDispersionQuality: typeof summarizeDispersionQuality;
  analysisJobs: typeof analysisJobs;
}

const LEGACY_OPTICS_ENGINE: SelectedOpticsEngine = Object.freeze({
  id: "legacy",
  buildLens,
  doLayout,
  thick,
  fopenAtZoom,
  entrancePupilAtState,
  computeAnalysisFieldGeometryAtState,
  computeCardinalElementsAtState,
  createCoordinateTransforms,
  computeElementShapes,
  eflAtFocus,
  effectiveFNumber,
  conjugateK,
  traceRay,
  traceRayVector,
  traceRayChromatic,
  traceRayVectorChromatic,
  offsetVectorFieldRay,
  computeChromaticSpread,
  summarizeDispersionQuality,
  analysisJobs,
});

const offsetVectorFieldRayCompat: typeof offsetVectorFieldRay = (
  launch,
  sagittalOffsetMm,
  radialOffsetMm,
  radialDirectionDelta,
) => {
  const result = offsetVectorFieldRay2(launch, sagittalOffsetMm, radialOffsetMm, radialDirectionDelta);
  return {
    origin: [result.origin[0], result.origin[1], result.origin[2]],
    direction: [result.direction[0], result.direction[1], result.direction[2]],
    launchBoundT: result.launchBoundT,
  };
};

const OPTICS_2_ENGINE: SelectedOpticsEngine = Object.freeze({
  id: "optics-2",
  buildLens: buildLens2,
  doLayout: doLayout2,
  thick: thick2,
  fopenAtZoom: fopenAtZoom2,
  entrancePupilAtState: entrancePupilAtState2,
  computeAnalysisFieldGeometryAtState: computeAnalysisFieldGeometryAtState2,
  computeCardinalElementsAtState: computeCardinalElementsAtState2,
  createCoordinateTransforms: createCoordinateTransforms2,
  computeElementShapes: computeElementShapes2,
  eflAtFocus: eflAtFocus2,
  effectiveFNumber: effectiveFNumber2,
  conjugateK: conjugateK2,
  traceRay: traceRay2,
  traceRayVector: traceRayVector2,
  traceRayChromatic: traceRayChromatic2,
  traceRayVectorChromatic: traceRayVectorChromatic2,
  offsetVectorFieldRay: offsetVectorFieldRayCompat,
  computeChromaticSpread: computeChromaticSpread2,
  summarizeDispersionQuality: summarizeDispersionQuality2,
  analysisJobs: analysisJobs2,
});

let testEngineOverride: OpticsEngineId | null = null;

export function selectedOpticsEngineId(): OpticsEngineId {
  if (testEngineOverride) return testEngineOverride;
  return defaultOpticsEngineId();
}

export function getSelectedOpticsEngine(): SelectedOpticsEngine {
  return selectedOpticsEngineId() === "optics-2" ? OPTICS_2_ENGINE : LEGACY_OPTICS_ENGINE;
}

export function setOpticsEngineForTests(engineId: OpticsEngineId | null): void {
  if (import.meta.env.MODE !== "test") return;
  testEngineOverride = engineId;
}

function defaultOpticsEngineId(): OpticsEngineId {
  return import.meta.env.DEV && import.meta.env.VITE_INTERNAL_OPTICS_ENGINE === "optics-2" ? "optics-2" : "legacy";
}
