/**
 * Type definitions for the optics engine: surfaces, elements, lens data,
 * runtime lens objects, ray-trace results, and diagram geometry.
 */

/* ── Raw lens data types (as declared in .data.ts files) ── */

import type { ImageFormatId, LensMountId } from "../utils/catalog/lensTaxonomy.js";
import type { AsphericCoefficients } from "./asphericSchema.js";

/** One sparse coefficient in a rotationally symmetric optical-path polynomial W(h). */
export interface RadialPhaseTerm {
  /** Radial exponent p in W(h) = sum(Cp * h^p). */
  radialPower: number;
  /** Optical-path coefficient Cp in mm^(1-p), with h expressed in millimeters. */
  coefficient: number;
}

/** Geometric-ray model of one authored diffraction order on a rotationally symmetric surface. */
export interface DiffractivePhaseSurface {
  kind: "radial-polynomial";
  referenceWavelengthNm: number;
  diffractionOrder: number;
  terms: RadialPhaseTerm[];
}

export interface SurfaceData {
  label: string;
  R: number;
  d: number;
  nd: number;
  sd: number;
  innerSd?: number;
  elemId: number;
  stopPlacement?: "inside-element";
  interaction?: SurfaceInteraction;
  diffractive?: DiffractivePhaseSurface;
}

export type SurfaceIncidentSide = "front" | "rear" | "both";
export type SurfaceInactiveSideBehavior = "ignore" | "block";
export type SurfaceInteractionType = "refract" | "reflect" | "block";
export type MirrorKind = "first-surface" | "second-surface";

export interface SurfaceInteraction {
  type: SurfaceInteractionType;
  incidentSide?: SurfaceIncidentSide;
  inactiveSide?: SurfaceInactiveSideBehavior;
  mirrorKind?: MirrorKind;
  normal?: ImagePlaneNormal;
}

export interface ImagePlaneNormal {
  z: number;
  y: number;
}

export interface ImagePlaneData {
  z: number;
  y?: number;
  normal?: ImagePlaneNormal;
  label?: string;
}

export interface ResolvedImagePlane {
  z: number;
  y: number;
  normal: ImagePlaneNormal;
  label: string;
}

export interface OpticalPathData {
  mode?: "sequential" | "auto";
  surfaceOrder?: string[];
  imagePlane?: ImagePlaneData;
  maxInteractions?: number;
}

export interface ResolvedOpticalPath {
  mode: "sequential" | "auto";
  surfaceOrder: number[] | null;
  surfaceLabels: string[] | null;
  maxInteractions: number;
}

export type FoldedPathTraceTermination =
  | "image-plane"
  | "explicit-path-complete"
  | "no-next-surface"
  | "trace-failure"
  | "clipped"
  | "loop-detected"
  | "max-interactions"
  | "sequential-return";

export type FoldedPathClipReason =
  | "semi-diameter"
  | "inner-hole"
  | "block-surface"
  | "inactive-side-block"
  | "intersection-failure"
  | "total-internal-reflection"
  | "non-propagating-diffraction-order"
  | "loop-detected"
  | "max-interactions";

export type FoldedPathAutoSkipReason = "intersection-failed" | "passive-same-index" | "self-hit" | "non-forward-hit";

export interface FoldedPathAutoCandidateSkip {
  surfaceIdx: number;
  surfaceLabel: string;
  reason: FoldedPathAutoSkipReason;
  failureReason?: string | null;
  t?: number;
}

export interface FoldedPathAutoStepDiagnostics {
  step: number;
  skippedCandidates: FoldedPathAutoCandidateSkip[];
}

export interface FoldedPathClipEvent {
  surfaceIdx: number | null;
  surfaceLabel: string | null;
  reason: FoldedPathClipReason;
  failureReason?: string | null;
}

export interface FoldedPathTraceDiagnostics {
  expectedPathMode: ResolvedOpticalPath["mode"];
  expectedSurfaceLabels: string[] | null;
  maxInteractions: number;
  hitSurfaceIndexes: number[];
  hitSurfaceLabels: string[];
  finalMedium: number;
  reachedImagePlane: boolean;
  imagePlaneLabel: string | null;
  terminalSurfaceIndex: number;
  terminalSurfaceLabel: string | null;
  clipped: boolean;
  failureReason: string | null;
  terminationReason: FoldedPathTraceTermination;
  clipEvents: FoldedPathClipEvent[];
  autoSteps: FoldedPathAutoStepDiagnostics[];
  loopDetected: boolean;
  loopKey: string | null;
}

/* Derived from the single-source schema in asphericSchema.ts; re-exported
 * here so existing `types/optics.js` imports keep working. */
export type { AsphericCoefficients } from "./asphericSchema.js";

/** Spectral reference used by an element's authored refractive index and Abbe number. */
export type RefractiveIndexReferenceLine = "d" | "e";

export interface ElementData {
  id: number;
  name: string;
  /** Optional patent/source identifier shown beneath the element in the diagram. */
  diagramLabel?: string;
  label: string;
  type: string;
  nd: number;
  vd?: number;
  /**
   * Spectral reference for the authored `nd` / `vd` fields. Defaults to the
   * helium d line; use `"e"` when those schema slots preserve patent ne / νe.
   */
  indexReference?: RefractiveIndexReferenceLine;
  fl?: number;
  glass?: string;
  role?: string;
  /** Beer-Lambert intensity absorption coefficient in inverse millimeters. */
  absorptionCoefficientPerMm?: number;
  apd?: "patent" | "inferred" | false;
  apdNote?: string;
  cemented?: string;
  /** Partial dispersion deviation from the normal line (P_g,F − P_g,F_normal). Drives APO behavior. */
  dPgF?: number;
  /** Measured refractive index at the C line (656.3 nm), when published. */
  nC?: number;
  /** Measured refractive index at the F line (486.1 nm), when published. */
  nF?: number;
  /** Measured refractive index at the g line (435.8 nm), when published. */
  ng?: number;
  /** Explicit physical span for elements that contain optically neutral internal surfaces such as an embedded stop. */
  fromSurface?: string;
  toSurface?: string;
}

export interface AnnotationData {
  text: string;
  fromSurface: string;
  toSurface: string;
}

export interface ResolvedAnnotation {
  text: string;
  fromSurface: number;
  toSurface: number;
}

export interface PerspectiveControlConfig {
  /** A [0, 0] range disables that movement axis for shift-only or tilt-only lenses. */
  shiftRangeMm: [number, number];
  tiltRangeDeg: [number, number];
  shiftStepMm?: number;
  tiltStepDeg?: number;
}

export interface RectilinearProjectionConfig {
  kind: "rectilinear";
  fullFieldDeg?: number;
  maxTraceFieldDeg?: number;
}

export type ProjectionZoomValue = number | number[];

export interface FisheyeEquidistantProjectionConfig {
  kind: "fisheye-equidistant";
  focalLengthMm: ProjectionZoomValue;
  fullFieldDeg: ProjectionZoomValue;
  imageCircleMm?: ProjectionZoomValue;
  maxTraceFieldDeg?: ProjectionZoomValue;
}

export interface FisheyeEquisolidProjectionConfig {
  kind: "fisheye-equisolid";
  focalLengthMm: ProjectionZoomValue;
  fullFieldDeg: ProjectionZoomValue;
  imageCircleMm?: ProjectionZoomValue;
  maxTraceFieldDeg?: ProjectionZoomValue;
}

export type LensProjectionConfig =
  | RectilinearProjectionConfig
  | FisheyeEquidistantProjectionConfig
  | FisheyeEquisolidProjectionConfig;

export interface AberrationControlConfig {
  label: string;
  description?: string;
  minLabel?: string;
  /** Optional centered/default position at control value 0; enables signed -1..1 travel. */
  centerLabel?: string;
  maxLabel?: string;
  step?: number;
  var: Record<string, AberrationVarRange>;
  varLabels?: [string, string][];
}

export interface ResolvedAberrationControlConfig extends Omit<AberrationControlConfig, "var" | "varLabels"> {
  varByIdx: Record<number, AberrationVarRange>;
  varLabels: [number, string][];
}

/** Variable gap range for prime lenses: [d_infinity, d_close] */
export type PrimeVarRange = [number, number];

/** Variable gap for zoom lenses: array of [d_infinity, d_close] per zoom position */
export type ZoomVarRange = [number, number][];

/** Variable gap: prime or zoom */
export type VarRange = PrimeVarRange | ZoomVarRange;

/** Aberration-control positions: legacy [normal, maximum] or centered [minimum, center, maximum]. */
export type AberrationPositionRange = [number, number] | [number, number, number];

/** Aberration-control positions for a prime, or one position tuple per zoom position. */
export type AberrationVarRange = AberrationPositionRange | AberrationPositionRange[];

/** Links complete prescriptions that represent switchable optical states of one catalog lens. */
export interface OpticalConfigurationData {
  /** Stable family identifier shared by every prescription in the switchable set. */
  groupKey: string;
  /** Compact user-facing toggle label, such as "TC OUT" or "TC IN". */
  label: string;
  /** Deterministic left-to-right toggle order. */
  order: number;
}

/** Complete lens data object (after defaults merging) */
export interface LensData {
  key: string;
  maker?: string;
  name: string;
  subtitle?: string;
  specs?: string[];
  focalLengthMarketing?: number | [number, number];
  focalLengthDesign?: number | [number, number];
  apertureMarketing?: number;
  apertureDesign?: number;
  lensMounts?: LensMountId[];
  imageFormat?: ImageFormatId;
  /** Source patent publication or grant identifier, including jurisdiction and kind code when published. */
  patentNumber?: string;
  /** Inventors named by the source patent, in source order; empty when the patent names none. */
  patentAuthors?: string[];
  /** Assignees or applicants named by the source patent; empty when the patent names none. */
  patentAssignees?: string[];
  patentYear?: number;
  elementCount?: number;
  groupCount?: number;
  visible?: boolean;
  opticalConfiguration?: OpticalConfigurationData;
  perspectiveControl?: PerspectiveControlConfig;
  projection?: LensProjectionConfig;
  opticalPath?: OpticalPathData;
  aberrationControl?: AberrationControlConfig;
  nominalFno?: number | number[];
  closeFocusM: number;
  focusStep: number;
  maxFstop: number;
  apertureStep: number;
  fstopSeries: number[];
  elements: ElementData[];
  surfaces: SurfaceData[];
  asph?: Record<string, AsphericCoefficients>;
  var?: Record<string, VarRange>;
  varLabels?: [string, string][];
  groups?: AnnotationData[];
  doublets?: AnnotationData[];
  zoomPositions?: number[];
  zoomStep?: number;
  zoomLabels?: string[];
  focusDescription?: string;
  svgW: number;
  svgH: number;
  scFill: number;
  yScFill: number;
  clipMargin: number;
  maxRimAngleDeg: number;
  gapSagFrac: number;
  maxAspectRatio: number;
  lensShiftFrac?: number;
  rayFractions: number[];
  rayLeadFrac: number;
  offAxisFieldFrac: number;
  offAxisFractions: number[];
  /** Number of aperture blades (future: polygonal bokeh rendering). */
  apertureBlades?: number;
  /** Blade roundedness 0–1 (future: 0 = straight polygon, 1 = circular). */
  apertureBladeRoundedness?: number;
}

/** Fields provided by LENS_DEFAULTS — optional in raw lens data files */
type DefaultedFields =
  | "rayFractions"
  | "rayLeadFrac"
  | "offAxisFieldFrac"
  | "offAxisFractions"
  | "svgW"
  | "svgH"
  | "scFill"
  | "clipMargin"
  | "maxRimAngleDeg"
  | "gapSagFrac"
  | "maxAspectRatio"
  | "focusStep"
  | "apertureStep"
  | "maxFstop";

/** Raw lens data shape before defaults merging (used in .data.ts files) */
export type LensDataInput = Omit<LensData, DefaultedFields> & Partial<Pick<LensData, DefaultedFields>>;

/** Entrance pupil data */
export interface EntrancePupil {
  epSD: number;
  yRatio: number;
}

/** Element span: [elementId, frontSurfaceIndex, rearSurfaceIndex] */
export type ElementSpan = [number, number, number];

/**
 * Per-surface spectral data carried on the runtime lens for chromatic tracing.
 * All fields are optional; the chromatic engine consults them in preference
 * order before falling back to the Abbe-only approximation.
 */
export interface SurfaceSpectral {
  dPgF?: number;
  nC?: number;
  nF?: number;
  ng?: number;
}

/** Frozen runtime lens object returned by buildLens() */
export interface RuntimeLens {
  readonly data: LensData;
  readonly S: SurfaceData[];
  readonly N: number;
  readonly ES: ElementSpan[];
  readonly elements: ElementData[];
  readonly asphByIdx: Record<number, AsphericCoefficients>;
  readonly varByIdx: Record<number, VarRange>;
  readonly vdByIdx: Record<number, number>;
  readonly spectralByIdx: Record<number, SurfaceSpectral>;
  readonly indexByIdx: Record<number, import("../optics/dispersion.js").SurfaceDispersion>;
  readonly varLabels: [number, string][];
  readonly groups: ResolvedAnnotation[];
  readonly doublets: ResolvedAnnotation[];
  readonly perspectiveControl: PerspectiveControlConfig | null;
  readonly aberrationControl: ResolvedAberrationControlConfig | null;
  readonly projection: LensProjectionConfig;
  readonly opticalPath: ResolvedOpticalPath;
  readonly imagePlane: ResolvedImagePlane;
  readonly isFoldedOptics: boolean;
  readonly stopIdx: number;
  readonly stopPhysSD: number;
  readonly EFL: number;
  readonly apertureReferenceFocalLength: number;
  readonly EP: EntrancePupil;
  readonly B: number;
  readonly FOPEN: number;
  readonly halfField: number;
  /**
   * Half-field within which off-axis ray bundles physically traverse the lens
   * without clipping, with a safety margin applied. Equal to `halfField` for
   * most rectilinear lenses (scaled by `TRACING_SAFETY_FACTOR`); for fisheyes
   * it's the slope-launch-bisected coverage (much smaller than the declared
   * projection halfField). Diagram ray rendering uses this so off-axis traces
   * land safely on the image plane.
   */
  readonly tracingHalfField: number;
  readonly petzvalSum: number;
  readonly totalTrack: number;
  readonly maxSD: number;
  readonly svgW: number;
  readonly svgH: number;
  readonly SC: number;
  readonly YSC: number;
  readonly maxRimSin: number;
  readonly maxRimTan: number;
  readonly gapSagFrac: number;
  readonly clipMargin: number;
  readonly gridPitch: number;
  readonly gridCount: number;
  readonly lyDoublet: number;
  readonly lyImgLine: number;
  readonly lyImgLabel: number;
  readonly lyElemNum: number;
  readonly lyVdBadge: number;
  readonly lyGroup: number;
  readonly lyStoPad: number;
  readonly lensShiftFrac: number;
  readonly rayFractions: number[];
  readonly rayHeights: number[];
  readonly rayLead: number;
  readonly bladeStubFrac: number;
  readonly stopHousingSD: number;
  readonly offAxisFieldDeg: number;
  readonly offAxisFieldFrac: number;
  readonly offAxisFractions: number[];
  readonly offAxisHeights: number[];
  readonly closeFocusM: number;
  readonly focusStep: number;
  readonly focusDescription?: string;
  readonly maxFstop: number;
  readonly apertureStep: number;
  readonly fstopSeries: number[];
  readonly isZoom: boolean;
  readonly zoomPositions: number[] | null;
  readonly zoomEFLs: number[] | null;
  readonly zoomEPs: number[] | null;
  readonly zoomHalfFields: number[] | null;
  readonly zoomTracingHalfFields: number[] | null;
  readonly zoomYRatios: number[] | null;
  readonly zoomBs: number[] | null;
  readonly epZRelStop: number;
  readonly xpZRelLastSurf: number;
  readonly xpSD: number;
  readonly zoomEpZRelStops: number[] | null;
  readonly zoomXpZRelLastSurfs: number[] | null;
  readonly zoomXpSDs: number[] | null;
  readonly zoomFOPENs: number[] | null;
  readonly zoomStep: number;
  readonly zoomLabels: string[] | null;
  readonly labelIdx: Record<string, number>;
}

/* ── Ray-trace result types ── */

export interface RayTraceResult {
  pts: number[][];
  ghostPts: number[][];
  y: number;
  u: number;
  clipped: boolean;
  /** Bulk-material intensity transmission accumulated along the traced path. */
  transmission?: number;
  reachedImagePlane?: boolean;
  diagnostics?: FoldedPathTraceDiagnostics;
}

export interface ParaxialTraceResult {
  y: number;
  u: number;
  n: number;
  heights: number[] | null;
}

export interface LayoutResult {
  z: number[];
  th: number[];
  imgZ: number;
}

export type ChromaticChannel = "R" | "G" | "B" | "V";

export interface ChromaticRayFanSpread {
  axialInterceptSpreadMm: number;
  imagePlaneHeightSpreadMm: number;
  axialIntercepts: Partial<Record<ChromaticChannel, number>>;
  imagePlaneHeights: Partial<Record<ChromaticChannel, number>>;
  axis?: "onAxis" | "offAxis";
  fraction?: number;
  channels?: ChromaticChannel[];
}

export interface ChromaticRayFanSpreadByAxis {
  onAxis: ChromaticRayFanSpread | null;
  offAxis: ChromaticRayFanSpread | null;
}

/* ── Diagram geometry types ── */

export interface CoordinateTransforms {
  sx: (z: number) => number;
  sy: (y: number) => number;
  clampedRayEnd: (lastZ: number, lastY: number, u: number, targetZ: number) => [number, number];
  yViewMax: number;
  CX: number;
  IX: number;
  effectiveSC: number;
}

export interface AsphPathData {
  surfIdx: number;
  pathD: string;
  halfPathD: string;
  labelX: number;
  labelY: number;
}

export interface SurfaceAccentPathData {
  surfIdx: number;
  pathD: string;
  labelX: number;
  labelY: number;
  kind: "second-surface-coating" | "diffractive-phase";
}

export interface ElementShape {
  eid: number;
  d: string;
  z1: number;
  z2: number;
  fillRule?: "evenodd";
  asphPaths: AsphPathData[];
  surfaceAccentPaths: SurfaceAccentPathData[];
}

export type ElementRenderTrimCause = "none" | "slope" | "gap" | "conic-limit";

export interface SurfaceRenderDiagnostics {
  surfaceIndex: number;
  surfaceLabel: string;
  declaredSD: number;
  renderSD: number;
  trimAmount: number;
  trimCause: ElementRenderTrimCause;
}

export interface ElementRenderDiagnostics {
  eid: number;
  front: SurfaceRenderDiagnostics;
  rear: SurfaceRenderDiagnostics;
}
