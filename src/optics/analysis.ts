/** Public analysis seam; implementations live in the focused engine subdirectories. */
export { computeBestFocusZ, computeImagePlaneZAtFocus } from "./analysis/aberration/bestFocus.js";
export {
  computeComaAnalysis,
  computeComaPointCloudPreview,
  computeComaPreview,
  computeMeridionalComa,
  computeSagittalComa,
} from "./analysis/aberration/coma.js";
export {
  computeFieldCurvature,
  computeFieldCurvatureBundle,
  summarizeChromaticFieldFocus,
} from "./analysis/aberration/fieldCurvature.js";
export type {
  ChromaticChannelSpan,
  ChromaticFieldFocusFieldSummary,
  ChromaticFieldFocusSummary,
  FieldCurvatureBundleResult,
} from "./analysis/aberration/fieldCurvature.js";
export {
  computeProjectionAwareOffAxisFieldGeometry,
  computeStateAwareOffAxisFieldGeometry,
  isOffAxisVectorFieldGeometry,
} from "./analysis/aberration/offAxis.js";
export { buildBokehRadialProfile, classifyBokehBrightnessCharacter } from "./analysis/aberration/radialProfile.js";
export {
  computeSAProfile,
  computeSphericalAberration,
  computeSphericalAberrationBlurCharacter,
} from "./analysis/aberration/spherical.js";
export type {
  ApertureBladeConfig,
  BokehBrightnessCharacter,
  BokehDensityCell,
  BokehFieldResult,
  BokehPoint,
  BokehPreviewPair,
  BokehPreviewResult,
  BokehPupilFootprint,
  BokehPupilSample,
  BokehRadialProfile,
  BokehRadialProfileBin,
  ChromaticFieldShift,
  ComaAnalysisResult,
  ComaPointCloudPoint,
  ComaPointCloudPreviewFieldResult,
  ComaPointCloudPreviewResult,
  ComaPreviewFieldResult,
  ComaPreviewResult,
  ComaTailDirection,
  FieldCurvatureFieldResult,
  FieldCurvatureResult,
  MeridionalComaResult,
  MeridionalComaSample,
  SAProfilePoint,
  SagittalComaResult,
  SagittalComaSample,
  SphericalAberrationBlurCharacterResult,
  SphericalAberrationBlurCharacterSample,
  SphericalAberrationResult,
} from "./analysis/aberration/types.js";
export {
  BOKEH_CIRCULAR_PUPIL_RING_SAMPLES,
  BOKEH_DENSITY_GRID_SIZE,
  BOKEH_POINT_COUNT,
  BOKEH_PREVIEW_FIELD_FRACTIONS,
  BOKEH_RADIAL_PROFILE_BIN_COUNT,
  COMA_PREVIEW_CIRCULAR_PUPIL_RING_SAMPLES,
  COMA_PREVIEW_FIELD_FRACTIONS,
  COMA_PREVIEW_POINT_CLOUD_SAMPLE_COUNT,
  FIELD_CURVATURE_CURVE_FIELD_FRACTIONS,
  FIELD_CURVATURE_FIELD_FRACTIONS,
  MERIDIONAL_COMA_SAMPLE_COUNT,
  NEAR_AXIS_REAL_FRAC,
  ORTHOGONAL_PUPIL_FAN_SAMPLE_COUNT,
} from "./analysis/aberration/types.js";
export { createAnalysisComputationContext } from "./analysis/analysisContext.js";
export type { AnalysisComputationContext, AnalysisComputationContextParams } from "./analysis/analysisContext.js";
export { analysisJobs, analysisPreviewJobs } from "./analysis/analysisJobs.js";
export {
  AnalysisSectionUnavailableError,
  analysisSectionAvailability,
  assertAnalysisSectionAvailable,
  assertCenteredAnalysisSectionAvailable,
} from "./analysis/analysisMovementSupport.js";
export type {
  AnalysisSectionAvailability,
  AnalysisSectionId,
  AnalysisSectionMode,
} from "./analysis/analysisMovementSupport.js";
export { analysisSamplingForQuality } from "./analysis/analysisQuality.js";
export type { AnalysisQuality, AnalysisSamplingOptions } from "./analysis/analysisQuality.js";
export {
  computeAsphericDeparture,
  computeAsphericDepartureFromProfiles,
  computeBestFitSphereR,
  computeBestFitSphereRFromProfiles,
  computeDepartureProfile,
  computeDepartureProfileFromProfiles,
  nearestSurfaceForClick,
  peakAbsDeparture,
  rmsDeparture,
} from "./analysis/asphericComparison/comparison.js";
export type { DepartureSample } from "./analysis/asphericComparison/comparison.js";
export { computeAsphericElementComparison } from "./analysis/asphericComparison/element.js";
export type { SurfaceComparison } from "./analysis/asphericComparison/element.js";
export {
  buildBokehDensityGrid,
  computeBokehFieldFootprint,
  computeBokehPreview,
  computeBokehPreviewPair,
  describeBokehDefocusSide,
} from "./analysis/bokeh/bokeh.js";
export {
  DEFAULT_CHROMATIC_ANALYSIS_CHANNELS,
  DEFAULT_LATERAL_COLOR_FIELD_FRACTIONS,
  DEFAULT_LONGITUDINAL_CHROMATIC_FRACTIONS,
  computeChromaticAnalysis,
  computeLateralColorCurve,
  computeLongitudinalChromaticFocus,
} from "./analysis/chromatic/analysis.js";
export type {
  ChromaticAnalysisOptions,
  ChromaticAnalysisResult,
  LateralColorChannelSample,
  LateralColorCurveResult,
  LateralColorFieldSample,
  LongitudinalChromaticFocusResult,
  LongitudinalChromaticFocusSample,
} from "./analysis/chromatic/analysis.js";
export { computeChromaticRayFanAnalysis } from "./analysis/chromatic/rayFan.js";
export type { ChromaticRayFanAnalysis, ChromaticRayFanAnalysisOptions } from "./analysis/chromatic/rayFan.js";
export {
  REFERENCE_FAN_IMAGE_HEIGHT_SPREAD_MM,
  REFERENCE_LOCA_MM,
  computeChromaticBarOffsets,
  computeLocaBarOffsets,
} from "./analysis/chromatic/rayFanScaling.js";
export type { ChromaticBarResult } from "./analysis/chromatic/rayFanScaling.js";
export { computeDistortionCurve, computeDistortionFieldGrid } from "./analysis/distortion/distortion.js";
export type {
  DistortionCurveResult,
  DistortionFieldGridResult,
  DistortionGridLine,
  DistortionGridPoint,
  DistortionSample,
} from "./analysis/distortion/distortion.js";
export {
  PUPIL_ABERRATION_SAMPLE_COUNT,
  computeBothPupilAberrationProfiles,
  computeExitPupilAberrationProfile,
  computePupilAberrationProfile,
} from "./analysis/pupils/pupilAberration.js";
export type {
  BothPupilAberrationProfiles,
  ExitPupilAberrationProfile,
  ExitPupilAberrationSample,
  PupilAberrationProfile,
  PupilAberrationSample,
} from "./analysis/pupils/pupilAberration.js";
export { createAnalysisRequest } from "./analysis/request.js";
export type { AnalysisRequest, AnalysisRequestParams } from "./analysis/request.js";
export {
  DEFAULT_CIRCULAR_PUPIL_RING_SAMPLES,
  DEFAULT_ORTHOGONAL_PUPIL_FAN_SAMPLE_COUNT,
  MARGINAL_PUPIL_FRACTIONS,
  sampleCircularPupil,
  sampleOrthogonalPupilFan,
} from "./analysis/sampling.js";
export type { CircularPupilSample, OrthogonalPupilSample } from "./analysis/sampling.js";
export { computeFocusBreathingSeries, computeFocusEFL } from "./analysis/summary/breathing.js";
export type { BreathingSample } from "./analysis/summary/breathing.js";
export { computeCardinalElements } from "./analysis/summary/cardinals.js";
export {
  computeGroupMovementProfile,
  firstAvailableGroupMovementMode,
  getGroupMovementAvailability,
  inferLensMovementGroups,
  isGroupMovementModeAvailable,
} from "./analysis/summary/groupMovement.js";
export type { GroupMovementPoint, GroupMovementProfile } from "./analysis/summary/groupMovement.js";
export { computeOpticalSummary } from "./analysis/summary/summary.js";
export type { OpticalSummaryMetrics } from "./analysis/summary/summary.js";
export { computeVignettingCurve } from "./analysis/vignetting/vignetting.js";
export type { VignettingSample } from "./analysis/vignetting/vignetting.js";
export { computeCardinalElementsFromState } from "./first-order/cardinals.js";
export type { CardinalDistance, CardinalElements, CardinalPoint } from "./first-order/cardinals.js";

export { stateWithZ } from "./state/preparedGeometry.js";
