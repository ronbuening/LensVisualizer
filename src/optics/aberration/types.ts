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

/* ── Bokeh preview constants & types ── */

/** Fixed field positions shown in the bokeh preview grids. */
export const BOKEH_PREVIEW_FIELD_FRACTIONS = [0, 0.25, 0.5, 0.75] as const;

/** Dense circular pupil ring pattern for bokeh tracing (~3× denser than coma). */
export const BOKEH_CIRCULAR_PUPIL_RING_SAMPLES = [1, 12, 24, 36, 48, 60, 72, 84] as const;
export const BOKEH_POINT_COUNT = BOKEH_CIRCULAR_PUPIL_RING_SAMPLES.reduce(
  (sum, count) => sum + count,
  0,
);

/** Resolution of the 2D density heatmap grid per bokeh tile. */
export const BOKEH_DENSITY_GRID_SIZE = 64;

/** One traced ray sample in the bokeh point cloud, relative to the chief ray. */
export interface BokehPoint {
  index: number;
  /** Sagittal (X) offset from chief ray on the defocused plane (mm). */
  sagittalOffset: number;
  /** Tangential (Y) offset from chief ray on the defocused plane (mm). */
  tangentialOffset: number;
  /** Normalized pupil radius (0–1) — preserved for future aperture blade masking. */
  pupilRadius: number;
  /** Pupil azimuth in radians — preserved for future aperture blade masking. */
  pupilAzimuth: number;
  /** Equal-area weighting from the circular pupil sample. */
  weight: number;
}

/** One field tile in the bokeh preview grid. */
export interface BokehFieldResult {
  fieldFraction: number;
  label: string;
  fieldAngleDeg: number;
  totalRays: number;
  passedRays: number;
  points: BokehPoint[];
  centroidSagittal: number;
  centroidTangential: number;
  rmsRadiusMm: number;
  maxRadiusMm: number;
  /** Fraction of rays that survived vignetting (0–1). */
  transmission: number;
  usable: boolean;
}

/** Single bin in a 2D density heatmap (reusable for any point-cloud visualization). */
export interface BokehDensityCell {
  /** Center X of the bin in mm. */
  x: number;
  /** Center Y of the bin in mm. */
  y: number;
  /** Normalized density (0–1, where 1 = maximum density in the grid). */
  density: number;
}

/** Result for one bokeh grid (infinity or near focus). */
export interface BokehPreviewResult {
  label: string;
  defocusDeltaMm: number;
  fields: BokehFieldResult[];
  sharedHalfRangeMm: number;
  usableFieldCount: number;
}

/** Paired bokeh preview: infinity-source and near-source grids. */
export interface BokehPreviewPair {
  infinity: BokehPreviewResult | null;
  nearFocus: BokehPreviewResult | null;
}

/** Future: aperture blade shape configuration for polygonal bokeh rendering. */
export interface ApertureBladeConfig {
  bladeCount: number;
  /** 0 = straight edges (polygon), 1 = perfectly circular (no effect). */
  roundedness: number;
}
