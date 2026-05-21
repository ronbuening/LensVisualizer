/**
 * Compatibility barrel for the pure optics engine.
 *
 * Public imports from this module are intentionally preserved while the
 * implementation lives in focused sibling modules.
 */

export { FLAT_R_THRESHOLD, conicPolySag, sag, sagSlopeRaw } from "./internal/surfaceMath.js";
export {
  FOCUS_INFINITY_THRESHOLD,
  SVG_PATH_SUBDIVISIONS,
  bAtZoom,
  doLayout,
  effectiveFNumber,
  eflAtFocus,
  eflAtZoom,
  epAtZoom,
  epZRelStopAtZoom,
  fopenAtZoom,
  gapTrimHeight,
  halfFieldAtZoom,
  tracingHalfFieldAtZoom,
  renderSag,
  sagSlope,
  slopeTrimHeight,
  thick,
  xpAtZoom,
  xpZRelLastSurfAtZoom,
  yRatioAtZoom,
} from "./layout.js";
export {
  chiefRayImageHeight,
  chiefRayImageHeightAccurate,
  computeAnalysisFieldGeometryAtState,
  computeBoundingSphereVectorFieldLaunch,
  computeFieldGeometryAtState,
  computeBoundingSphereLaunchRadiusMm,
  conjugateK,
  entrancePupilAtState,
  offsetVectorFieldRay,
  solveChiefRay,
  solveFieldAngleForImageHeight,
  solveFieldAngleForImageHeightAccurate,
  traceChiefRayAtAngle,
  traceParaxialRay,
  type ChiefRaySolveResult,
  type EntrancePupilState,
  type FieldGeometryState,
  type OffsetVectorFieldRay,
  type VectorFieldRayLaunch,
} from "./fieldGeometry.js";
export {
  DEFAULT_CIRCULAR_PUPIL_RING_SAMPLES,
  DEFAULT_ORTHOGONAL_PUPIL_FAN_SAMPLE_COUNT,
  computeChromaticSpread,
  sampleCircularPupil,
  sampleOrthogonalPupilFan,
  skewImagePlaneIntercept,
  traceChiefRelativeSkewRay,
  traceChiefRelativeSkewRayChromatic,
  traceRay,
  traceRayChromatic,
  traceRayVector,
  traceRayVectorChromatic,
  traceSkewRay,
  traceSkewRayChromatic,
  traceSkewRayVector,
  traceSkewRayVectorChromatic,
  traceToImage,
  wavelengthNd,
  type CircularPupilSample,
  type OrthogonalPupilSample,
  type RayTraceOptions,
  type SkewImagePlaneIntercept,
  type SkewRayTraceResult,
  type VectorRayTraceInput,
} from "./rayTrace.js";
export { formatDist, formatPetzvalRadius } from "./opticsFormat.js";
export { resolveSurfaceTraceMode, type SurfaceTraceMode } from "./traceMode.js";
