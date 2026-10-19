/**
 * Public analysis entry for request construction and migrated analysis families.
 * Implementation leaves import their lower-level owners directly to avoid barrel cycles.
 */

export { createAnalysisRequest, type AnalysisRequest, type AnalysisRequestParams } from "./analysis/request.js";
export { createAnalysisComputationContext, type AnalysisComputationContext } from "./analysis/analysisContext.js";
export { computeOpticalSummary, type OpticalSummaryMetrics2 } from "./analysis/summary/summary.js";
export { computeCardinalElements } from "./analysis/summary/cardinals.js";
export { computeFocusEFL, computeFocusBreathingSeries, type BreathingSample } from "./analysis/summary/breathing.js";
export {
  computeGroupMovementProfile,
  getGroupMovementAvailability,
  inferLensMovementGroups,
  firstAvailableGroupMovementMode,
  isGroupMovementModeAvailable,
  type GroupMovementPoint,
  type GroupMovementProfile,
} from "./analysis/summary/groupMovement.js";

export {
  computeSphericalAberration,
  computeSAProfile,
  computeSphericalAberrationBlurCharacter,
} from "./analysis/aberration/spherical.js";
export { computeBestFocusZ, computeImagePlaneZAtFocus } from "./analysis/aberration/bestFocus.js";
export { buildBokehRadialProfile, classifyBokehBrightnessCharacter } from "./analysis/aberration/radialProfile.js";
export type {
  SphericalAberrationResult,
  SphericalAberrationBlurCharacterResult,
  SAProfilePoint,
} from "./analysis/aberration/types.js";

export { stateWithZ } from "./state/preparedGeometry.js";

export {
  computeFieldCurvature,
  computeFieldCurvatureBundle,
  summarizeChromaticFieldFocus,
  type FieldCurvatureBundleResult,
  type ChromaticChannelSpan,
  type ChromaticFieldFocusFieldSummary,
  type ChromaticFieldFocusSummary,
} from "./analysis/aberration/fieldCurvature.js";
export type { FieldCurvatureResult, FieldCurvatureFieldResult } from "./analysis/aberration/types.js";

export {
  computeComaAnalysis,
  computeComaPointCloudPreview,
  computeComaPreview,
  computeMeridionalComa,
  computeSagittalComa,
} from "./analysis/aberration/coma.js";

export {
  computeDistortionCurve,
  computeDistortionFieldGrid,
  type DistortionSample,
  type DistortionCurveResult,
  type DistortionGridPoint,
  type DistortionGridLine,
  type DistortionFieldGridResult,
} from "./analysis/distortion/distortion.js";

export { computeVignettingCurve, type VignettingSample } from "./analysis/vignetting/vignetting.js";

export {
  computePupilAberrationProfile,
  computeExitPupilAberrationProfile,
  computeBothPupilAberrationProfiles,
  PUPIL_ABERRATION_SAMPLE_COUNT,
  type PupilAberrationSample,
  type PupilAberrationProfile,
  type ExitPupilAberrationSample,
  type ExitPupilAberrationProfile,
  type BothPupilAberrationProfiles,
} from "./analysis/pupils/pupilAberration.js";

export {
  computeBokehPreview,
  computeBokehPreviewPair,
  computeBokehFieldFootprint,
  buildBokehDensityGrid,
  describeBokehDefocusSide,
} from "./analysis/bokeh/bokeh.js";

export * from "./analysis/chromatic/analysis.js";
export * from "./analysis/chromatic/rayFan.js";
export * from "./analysis/chromatic/rayFanScaling.js";
