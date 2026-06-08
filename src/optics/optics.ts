/**
 * Public optics barrel — stable pure-helper exports for rendering, tracing, fields, and analysis.
 *
 * App code imports this path by default while focused engine modules import deeper
 * implementation files only when needed.
 */

export { FLAT_R_THRESHOLD, conicPolySag, sag, sagSlopeRaw } from "./internal/surfaceMath.js";
export {
  FOCUS_INFINITY_THRESHOLD,
  SVG_PATH_SUBDIVISIONS,
  bAtZoom,
  epZRelStopAtZoom,
  gapTrimHeight,
  halfFieldAtZoom,
  renderSag,
  sagSlope,
  slopeTrimHeight,
  tracingHalfFieldAtZoom,
  xpAtZoom,
  xpZRelLastSurfAtZoom,
  yRatioAtZoom,
} from "./layout.js";
export {
  doLayout2 as doLayout,
  effectiveFNumber2 as effectiveFNumber,
  eflAtFocus2 as eflAtFocus,
  eflAtZoom2 as eflAtZoom,
  epAtZoom2 as epAtZoom,
  fopenAtZoom2 as fopenAtZoom,
  thick2 as thick,
} from "./compat.js";
export {
  chiefRayImageHeight2 as chiefRayImageHeight,
  chiefRayImageHeightAccurate2 as chiefRayImageHeightAccurate,
  computeAnalysisFieldGeometryAtState2 as computeAnalysisFieldGeometryAtState,
  computeBoundingSphereLaunchRadiusMm2 as computeBoundingSphereLaunchRadiusMm,
  computeBoundingSphereVectorFieldLaunch2 as computeBoundingSphereVectorFieldLaunch,
  computeFieldGeometryAtState2 as computeFieldGeometryAtState,
  conjugateK2 as conjugateK,
  entrancePupilAtState2 as entrancePupilAtState,
  offsetVectorFieldRay2 as offsetVectorFieldRay,
  solveChiefRay2 as solveChiefRay,
  solveFieldAngleForImageHeight2 as solveFieldAngleForImageHeight,
  solveFieldAngleForImageHeightAccurate2 as solveFieldAngleForImageHeightAccurate,
  solveFieldAnglesForImageHeightsAccurate2 as solveFieldAnglesForImageHeightsAccurate,
  traceChiefRayAtAngle2 as traceChiefRayAtAngle,
  traceParaxialRay2 as traceParaxialRay,
  type ChiefRaySolveResult2 as ChiefRaySolveResult,
  type EntrancePupilState2 as EntrancePupilState,
  type FieldGeometryState2 as FieldGeometryState,
  type OffsetVectorFieldRay2 as OffsetVectorFieldRay,
  type VectorFieldRayLaunch2 as VectorFieldRayLaunch,
} from "./compat.js";
export {
  traceRay2 as traceRay,
  traceRayChromatic2 as traceRayChromatic,
  traceRayVector2 as traceRayVector,
  traceRayVectorChromatic2 as traceRayVectorChromatic,
  traceSkewRay2 as traceSkewRay,
  traceSkewRayChromatic2 as traceSkewRayChromatic,
  traceSkewRayVector2 as traceSkewRayVector,
  traceSkewRayVectorChromatic2 as traceSkewRayVectorChromatic,
  type VectorRayTraceInput2 as VectorRayTraceInput,
} from "./compat.js";
export {
  CHANNEL_WAVELENGTH_NM_2 as CHANNEL_WAVELENGTH_NM,
  CHROMATIC_CHANNELS_2 as CHROMATIC_CHANNELS,
  computeChromaticAnalysis2 as computeChromaticAnalysis,
  computeChromaticRayFanAnalysis2 as computeChromaticRayFanAnalysis,
  computeChromaticRayFanSpread2 as computeChromaticRayFanSpread,
  computeLateralColorCurve2 as computeLateralColorCurve,
  computeLongitudinalChromaticFocus2 as computeLongitudinalChromaticFocus,
  summarizeChromaticFieldFocus2 as summarizeChromaticFieldFocus,
  wavelengthNd2 as wavelengthNd,
  type SurfaceIndexResolver2 as SurfaceIndexResolver,
} from "./compat.js";
export {
  DEFAULT_CIRCULAR_PUPIL_RING_SAMPLES,
  DEFAULT_ORTHOGONAL_PUPIL_FAN_SAMPLE_COUNT,
  sampleCircularPupil,
  sampleOrthogonalPupilFan,
  skewImagePlaneIntercept,
  traceChiefRelativeSkewRay,
  traceChiefRelativeSkewRayChromatic,
  traceToImage,
  type CircularPupilSample,
  type OrthogonalPupilSample,
  type SkewImagePlaneIntercept,
  type SkewRayTraceResult,
} from "./rayTrace.js";
export { stopInnerBlockedSemiDiameter } from "./stopObstruction.js";
export { formatDist, formatPetzvalRadius } from "./opticsFormat.js";
