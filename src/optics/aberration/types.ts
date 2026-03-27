/** One sample point on the real-ray transverse SA profile curve. */
export interface SAProfilePoint {
  fraction: number;
  transverseSaMm: number;
}

/** Result of a spherical aberration computation. */
export interface SphericalAberrationResult {
  nearAxisFraction: number;
  marginalFraction: number;
  longitudinalSaMm: number;
  longitudinalSaUm: number;
  currentPlaneRmsMm: number;
  currentPlaneRmsUm: number;
  currentPlanePeakMm: number;
  currentPlanePeakUm: number;
  bestFocusRmsMm: number;
  bestFocusRmsUm: number;
  bestFocusPeakMm: number;
  bestFocusPeakUm: number;
  nearAxisRealIntercept: number;
  marginalRealIntercept: number;
  nearAxisImageHeight: number;
  imagePlaneZ: number;
  bestFocusZ: number;
  bestFocusShiftMm: number;
  validSampleCount: number;
}

/** One dense pupil sample for the meridional coma view. */
export interface MeridionalComaSample {
  index: number;
  pupilFraction: number;
  launchHeight: number;
  imageHeight: number | null;
  clipped: boolean;
}

/** Dense meridional coma analysis result for the current lens state. */
export interface MeridionalComaResult {
  fieldAngleDeg: number;
  sampleCount: number;
  validSampleCount: number;
  clippedSampleCount: number;
  centerIntercept: number;
  minIntercept: number;
  maxIntercept: number;
  spanMm: number;
  spanUm: number;
  lowerIntercept: number;
  upperIntercept: number;
  samples: MeridionalComaSample[];
}

/** One field sample for the representative coma preview grid. */
export interface ComaPreviewFieldResult {
  fieldFraction: number;
  label: string;
  fieldAngleDeg: number;
  sampleCount: number;
  validSampleCount: number;
  clippedSampleCount: number;
  chiefIntercept: number;
  minRelativeIntercept: number;
  maxRelativeIntercept: number;
  samples: Array<MeridionalComaSample & { relativeImageHeight: number | null }>;
  usable: boolean;
}

/** Shared representative coma preview data for the current lens state. */
export interface ComaPreviewResult {
  fieldFractions: readonly number[];
  fields: ComaPreviewFieldResult[];
  sharedRelativeHalfRangeMm: number;
  usableFieldCount: number;
}

/** One synthesized point in the estimated 2D coma point cloud. */
export interface EstimatedComaPoint {
  index: number;
  sourceSampleIndex: number;
  tangentialImageHeight: number;
  sagittalNormalized: number;
  weight: number;
}

/** One field tile in the estimated 2D coma preview grid. */
export interface EstimatedComaPreviewFieldResult {
  fieldFraction: number;
  label: string;
  fieldAngleDeg: number;
  sampleCount: number;
  validSampleCount: number;
  clippedSampleCount: number;
  chiefIntercept: number;
  minRelativeIntercept: number;
  maxRelativeIntercept: number;
  points: EstimatedComaPoint[];
  usable: boolean;
}

/** Shared estimated 2D coma preview data for the current lens state. */
export interface EstimatedComaPreviewResult {
  fieldFractions: readonly number[];
  fields: EstimatedComaPreviewFieldResult[];
  sharedTangentialHalfRangeMm: number;
  normalizedSagittalHalfRange: number;
  usableFieldCount: number;
}

/** Near-axis real-ray fraction used as the spherical-aberration reference baseline. */
export const NEAR_AXIS_REAL_FRAC = 0.1;

/** Dense pupil sweep count for the meridional coma view. Must remain odd to include the chief ray sample. */
export const MERIDIONAL_COMA_SAMPLE_COUNT = 51;

/** Fixed field positions shown in the representative coma preview grid. */
export const COMA_PREVIEW_FIELD_FRACTIONS = [0, 0.25, 0.5, 0.75] as const;
