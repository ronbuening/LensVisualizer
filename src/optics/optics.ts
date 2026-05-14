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
  computeFieldGeometryAtState,
  conjugateK,
  entrancePupilAtState,
  solveChiefRayLaunchHeight,
  solveFieldAngleForImageHeight,
  solveFieldAngleForImageHeightAccurate,
  traceChiefRayAtAngle,
  traceParaxialRay,
  type EntrancePupilState,
  type FieldGeometryState,
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
  traceSkewRay,
  traceSkewRayChromatic,
  traceToImage,
  wavelengthNd,
  type CircularPupilSample,
  type OrthogonalPupilSample,
  type SkewImagePlaneIntercept,
  type SkewRayTraceResult,
} from "./rayTrace.js";
export { formatDist, formatPetzvalRadius } from "./opticsFormat.js";
export {
  EXACT_SURFACE_TRACE_LENS_KEYS,
  SURFACE_TRACE_ROLLOUT_MODE,
  resolveSurfaceTraceMode,
  type SurfaceTraceMode,
  type SurfaceTraceModeResolutionOptions,
  type SurfaceTraceRolloutMode,
} from "./traceMode.js";
