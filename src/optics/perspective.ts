/** Public perspective seam; implementations live in the focused engine subdirectories. */
export type {
  PerspectiveChromaticAnalysis,
  PerspectiveChromaticChannelSample,
  PerspectiveChromaticFieldSample,
  PerspectiveChromaticRayFanSample,
} from "./perspective/analysis/chromatic.js";
export type { PerspectiveDistortionAnalysis, PerspectiveDistortionSample } from "./perspective/analysis/distortion.js";
export type {
  PerspectiveComaFieldSample,
  PerspectiveComaRaySample,
  PerspectiveFieldAberrationAnalysis,
  PerspectiveFieldCurvatureSample,
} from "./perspective/analysis/fieldAberrations.js";
export type { PerspectiveFocusAnalysis, PerspectiveFocusFieldSample } from "./perspective/analysis/focus.js";
export type { PerspectivePupilAnalysis } from "./perspective/analysis/pupil.js";
export type { PerspectiveVignettingAnalysis } from "./perspective/analysis/vignetting.js";
export type { PerspectiveFieldStatus } from "./perspective/chiefRay.js";
export { cameraDirectionForDiagramField, tracePerspectiveDiagramFan } from "./perspective/diagramFan.js";
export type { PerspectiveDiagramFan, PerspectiveDiagramFanSample } from "./perspective/diagramFan.js";
export type { SensorUv } from "./perspective/fieldGeometry.js";
export {
  MOVEMENT_SHIFT_ENVELOPE_MM,
  MOVEMENT_TILT_ENVELOPE_DEG,
  ZERO_LENS_MOVEMENT,
  clampLensMovement,
  createLensMovementTransform,
  isIdentityLensMovement,
  isMovementAxisEnabled,
  perspectiveControlSteps,
  transformMovedPoint,
  transformMovedSlope,
} from "./perspective/lensMovement.js";
export type { LensMovementState, LensMovementTransform, ResolvedLensMovement } from "./perspective/lensMovement.js";
export { createPerspectiveTraceContext } from "./perspective/trace.js";
export type { PerspectiveTraceContext } from "./perspective/trace.js";
export { computePerspectiveMovementViewportExtent } from "./perspective/viewport.js";
