import { DEFAULT_ORTHOGONAL_PUPIL_FAN_SAMPLE_COUNT } from "../optics.js";

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

/** One sample point in the sagittal coma fan. */
export interface SagittalComaSample {
  index: number;
  pupilFraction: number;
  launchX: number;
  imageX: number | null;
  clipped: boolean;
}

/** Dense sagittal coma analysis result for the current lens state. */
export interface SagittalComaResult {
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
  samples: SagittalComaSample[];
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

/** One real circular-pupil sample in the 2D coma point cloud, centered on the chief ray. */
export interface ComaPointCloudPoint {
  index: number;
  sourceSampleIndex: number;
  tangentialImageHeight: number;
  sagittalImageHeight: number;
  weight: number;
}

/** One field tile in the real 2D coma point-cloud preview grid. */
export interface ComaPointCloudPreviewFieldResult {
  fieldFraction: number;
  label: string;
  fieldAngleDeg: number;
  sampleCount: number;
  validSampleCount: number;
  clippedSampleCount: number;
  chiefIntercept: number;
  minRelativeTangentialImageHeight: number;
  maxRelativeTangentialImageHeight: number;
  minRelativeSagittalImageHeight: number;
  maxRelativeSagittalImageHeight: number;
  centroidTangentialImageHeight: number;
  centroidSagittalImageHeight: number;
  rmsRadiusMm: number;
  rmsRadiusUm: number;
  points: ComaPointCloudPoint[];
  usable: boolean;
}

/** Shared real 2D coma point-cloud preview data for the current lens state. */
export interface ComaPointCloudPreviewResult {
  fieldFractions: readonly number[];
  fields: ComaPointCloudPreviewFieldResult[];
  sharedTangentialHalfRangeMm: number;
  sharedSagittalHalfRangeMm: number;
  sharedSpotHalfRangeMm: number;
  usableFieldCount: number;
}

/** Per-channel chromatic focus shift at a single field position. */
export interface ChromaticFieldShift {
  channel: "R" | "G" | "B";
  tangentialShiftMm: number;
  sagittalShiftMm: number;
}

/** One field sample in the field-curvature / astigmatism sweep. */
export interface FieldCurvatureFieldResult {
  fieldFraction: number;
  label: string;
  fieldAngleDeg: number;
  sampleCount: number;
  validSampleCount: number;
  clippedSampleCount: number;
  chiefImageHeight: number;
  tangentialBestFocusZ: number;
  sagittalBestFocusZ: number;
  petzvalBestFocusZ: number;
  tangentialShiftMm: number;
  sagittalShiftMm: number;
  petzvalShiftMm: number;
  astigmaticDifferenceMm: number;
  astigmaticDifferenceUm: number;
  diagnosticTangentialBestFocusZ?: number;
  diagnosticSagittalBestFocusZ?: number;
  diagnosticTangentialShiftMm?: number;
  diagnosticSagittalShiftMm?: number;
  diagnosticAstigmaticDifferenceMm?: number;
  diagnosticAstigmaticDifferenceUm?: number;
  chromaticFieldShifts: ChromaticFieldShift[] | null;
  usable: boolean;
}

/** Shared field-curvature and astigmatic-difference analysis for the current lens state. */
export interface FieldCurvatureResult {
  fieldFractions: readonly number[];
  curveFieldFractions: readonly number[];
  fields: FieldCurvatureFieldResult[];
  curveFields: FieldCurvatureFieldResult[];
  usableFieldCount: number;
  imagePlaneZ: number;
  sharedFocusShiftHalfRangeMm: number;
  maxAstigmaticDifferenceMm: number;
  maxAstigmaticDifferenceUm: number;
  edgeTangentialShiftMm: number;
  edgeSagittalShiftMm: number;
  chromaticFocusSpreadMm: number | null;
}

/** Near-axis real-ray fraction used as the spherical-aberration reference baseline. */
export const NEAR_AXIS_REAL_FRAC = 0.1;

/** Dense pupil sweep count for the meridional coma view. Must remain odd to include the chief ray sample. */
export const ORTHOGONAL_PUPIL_FAN_SAMPLE_COUNT = DEFAULT_ORTHOGONAL_PUPIL_FAN_SAMPLE_COUNT;
export const MERIDIONAL_COMA_SAMPLE_COUNT = ORTHOGONAL_PUPIL_FAN_SAMPLE_COUNT;

/** Fixed equal-area circular pupil pattern reused by real 2D coma preview sampling. */
export const COMA_PREVIEW_CIRCULAR_PUPIL_RING_SAMPLES = [1, 8, 16, 24, 32, 40] as const;
export const COMA_PREVIEW_POINT_CLOUD_SAMPLE_COUNT = COMA_PREVIEW_CIRCULAR_PUPIL_RING_SAMPLES.reduce(
  (sum, count) => sum + count,
  0,
);

/** Fixed field positions shown in the representative coma preview grid. */
export const COMA_PREVIEW_FIELD_FRACTIONS = [0, 0.25, 0.5, 0.75] as const;

/** Fixed field positions shown in the field-curvature / astigmatism chart. */
export const FIELD_CURVATURE_FIELD_FRACTIONS = [0, 0.25, 0.5, 0.75, 1] as const;
export const FIELD_CURVATURE_CURVE_FIELD_FRACTIONS = Array.from({ length: 17 }, (_, index) => index / 16);

/* ── Bokeh preview types ── */

/**
 * Dense circular pupil ring sample counts for the bokeh preview.
 * 8 rings totalling 225 samples — denser than the coma preview's 121 samples
 * for high-fidelity bokeh ball simulation.
 */
export const BOKEH_PREVIEW_PUPIL_RING_SAMPLES = [1, 8, 16, 24, 32, 40, 48, 56] as const;
export const BOKEH_PREVIEW_SAMPLE_COUNT = BOKEH_PREVIEW_PUPIL_RING_SAMPLES.reduce((sum, n) => sum + n, 0);

/** Fixed field positions shown in the bokeh preview grid — same as coma. */
export const BOKEH_PREVIEW_FIELD_FRACTIONS = [0, 0.25, 0.5, 0.75] as const;

/** One traced real-ray point in the bokeh ball point cloud, centered on the chief ray. */
export interface BokehPreviewPoint {
  index: number;
  sourceSampleIndex: number;
  /** Sagittal (X) deviation from chief ray on the image plane (mm). */
  sagittalImageHeight: number;
  /** Tangential (Y) deviation from chief ray on the image plane (mm). */
  tangentialImageHeight: number;
  /** Equal-area sample weight (from sampleCircularPupil). */
  weight: number;
  /** Normalised pupil radius [0..1] — available for future intensity shading. */
  radiusFraction: number | null;
}

/** One field tile result in the bokeh preview 2×2 grid. */
export interface BokehPreviewFieldResult {
  fieldFraction: (typeof BOKEH_PREVIEW_FIELD_FRACTIONS)[number];
  label: string;
  fieldAngleDeg: number;
  /** Total pupil samples attempted. */
  sampleCount: number;
  /** Samples that survived all aperture clipping (vignetting). */
  validSampleCount: number;
  /** Samples that were clipped (vignetted). */
  clippedSampleCount: number;
  /** Geometric transmission: validSampleCount / sampleCount [0..1]. */
  vignetteTransmission: number;
  /** Chief-ray tangential image height on the sensor (mm, absolute). */
  chiefTangentialImageHeight: number;
  /** Chief-ray sagittal image height on the sensor (mm, absolute). */
  chiefSagittalImageHeight: number;
  minRelativeSagittalImageHeight: number;
  maxRelativeSagittalImageHeight: number;
  minRelativeTangentialImageHeight: number;
  maxRelativeTangentialImageHeight: number;
  centroidSagittalImageHeight: number;
  centroidTangentialImageHeight: number;
  rmsRadiusMm: number;
  rmsRadiusUm: number;
  points: BokehPreviewPoint[];
  usable: boolean;
}

/**
 * Bokeh preview result for one focus-position / source-distance scenario (a 2×2 field grid).
 * The sharedSpotHalfRangeMm includes a 15 % padding margin so that no point-cloud dots
 * are clipped at tile boundaries in the SVG renderer.
 */
export interface BokehPreviewGrid {
  fieldFractions: readonly number[];
  fields: BokehPreviewFieldResult[];
  sharedSpotHalfRangeMm: number;
  usableFieldCount: number;
}

/** Full bokeh preview result: two grids at the current focus position. */
export interface BokehPreviewResult {
  /**
   * Bokeh of an infinity point source at the current sensor position.
   * Ball size grows as focusT increases (lens focused away from infinity).
   */
  infinityGrid: BokehPreviewGrid | null;
  /**
   * Bokeh of a near point source at the lens minimum focus distance,
   * traced to the current sensor position.
   * Ball size shrinks as focusT approaches 1 (lens focused at near distance).
   */
  nearGrid: BokehPreviewGrid | null;
}
