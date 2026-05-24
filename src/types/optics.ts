/**
 * Type definitions for the optics engine: surfaces, elements, lens data,
 * runtime lens objects, ray-trace results, and diagram geometry.
 */

/* ── Raw lens data types (as declared in .data.ts files) ── */

import type { ImageFormatId, LensMountId } from "../utils/catalog/lensTaxonomy.js";

/**
 * Reflective surface specification. Marks a surface as a mirror.
 *
 * - `kind: "first"` — silvered front surface in air. The ray reflects without
 *   ever entering glass; the refractive medium is unchanged.
 * - `kind: "second"` — silvered rear surface of a glass element (Mangin
 *   mirror). The ray refracts into the glass through the element's front,
 *   reflects off this silvered rear, and refracts back out through the front.
 *   The medium on both sides of this surface in the data must be glass.
 * - `region` — optional radial coverage of the silvering. Inside the silvered
 *   region the ray reflects; outside it transmits (refracts) through. Default
 *   is a fully-silvered disk out to `sd`.
 */
export interface SurfaceReflectance {
  kind: "first" | "second";
  region?: { shape: "disk"; rMax: number } | { shape: "annulus"; rMin: number; rMax?: number };
  /**
   * Optional one-sided opacity. When set, the surface absorbs rays
   * approaching from the given direction (within the silvered region) and
   * reflects rays approaching from the other direction. Used to model a
   * secondary mirror that blocks direct forward light but reflects light
   * returning from a primary. Default: bidirectional reflection.
   */
  opaqueFrom?: "front" | "back";
}

export interface SurfaceData {
  label: string;
  R: number;
  d: number;
  nd: number;
  sd: number;
  elemId: number;
  stopPlacement?: "inside-element";
  reflect?: SurfaceReflectance;
  /**
   * Optional host-element marker for surfaces that are geometrically embedded
   * inside another element's volume (e.g. a secondary mirror spot embedded
   * within the front corrector of a Maksutov-Cassegrain). The value is the
   * label of a surface belonging to the host element. The host element's span
   * (its `fromSurface` / `toSurface` range) must include this embedded
   * surface's vertex z. Diagram rendering treats embedded surfaces as a
   * separate overlay rather than part of the host element's outline.
   */
  embeddedIn?: string;
}

export interface AsphericCoefficients {
  K: number;
  A4: number;
  A6: number;
  A8: number;
  A10: number;
  A12: number;
  A14: number;
  A16?: number;
  A18?: number;
  A20?: number;
}

export interface ElementData {
  id: number;
  name: string;
  label: string;
  type: string;
  nd: number;
  vd?: number;
  fl?: number;
  glass?: string;
  role?: string;
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
  maxLabel?: string;
  step?: number;
  var: Record<string, VarRange>;
  varLabels?: [string, string][];
}

export interface ResolvedAberrationControlConfig extends Omit<AberrationControlConfig, "var" | "varLabels"> {
  varByIdx: Record<number, VarRange>;
  varLabels: [number, string][];
}

/** Variable gap range for prime lenses: [d_infinity, d_close] */
export type PrimeVarRange = [number, number];

/** Variable gap for zoom lenses: array of [d_infinity, d_close] per zoom position */
export type ZoomVarRange = [number, number][];

/** Variable gap: prime or zoom */
export type VarRange = PrimeVarRange | ZoomVarRange;

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
  patentYear?: number;
  elementCount?: number;
  groupCount?: number;
  visible?: boolean;
  perspectiveControl?: PerspectiveControlConfig;
  projection?: LensProjectionConfig;
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
  /**
   * Inner radius of an annular entrance pupil, in mm. Use for catadioptric
   * lenses where a secondary mirror or central obstruction blocks the
   * inner zone of the entrance pupil. Default 0 (no obstruction).
   */
  entrancePupilObstructionSD?: number;
  /**
   * Optional explicit hit-order sequence for catadioptric lenses where the
   * inferred order (forward through every surface, reflect at the silvered
   * one, backward through prior surfaces) does not describe the physical
   * light path. Each entry is a surface label; a label may repeat to express
   * a surface that the ray traverses more than once (e.g. a Cassegrain's
   * corrector plate on both the forward and return passes).
   *
   * The engine derives the action at each step from the surface itself: a
   * surface with `reflect` set always reflects when visited; otherwise the
   * step refracts. The medium-after-surface is inferred from the current
   * direction sign (positive z = forward, negative z = backward).
   */
  traceSequence?: string[];
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
  /**
   * Inner radius of the entrance pupil for lenses with a central obstruction
   * (catadioptric mirror lenses, etc.). When > 0 the pupil is annular: rays
   * inside `epObstructionSD` from the axis are blocked. Zero (the default)
   * means a solid disk pupil.
   */
  epObstructionSD: number;
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
  /** Resolved trace sequence (surface indices) for catadioptric lenses with
   *  explicit hit-order. Null when the legacy/inferred sequence applies. */
  readonly traceSequence: readonly number[] | null;
}

/* ── Ray-trace result types ── */

export interface RayTraceResult {
  pts: number[][];
  ghostPts: number[][];
  y: number;
  u: number;
  clipped: boolean;
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

export interface ChromaticSpread {
  lcaMm: number;
  tcaMm: number;
  intercepts: Partial<Record<ChromaticChannel, number>>;
  imgHeights: Partial<Record<ChromaticChannel, number>>;
}

export interface ChromaticSpreadByAxis {
  onAxis: ChromaticSpread | null;
  offAxis: ChromaticSpread | null;
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

export interface MirrorPathData {
  surfIdx: number;
  pathD: string;
}

export interface ElementShape {
  eid: number;
  d: string;
  z1: number;
  z2: number;
  asphPaths: AsphPathData[];
  mirrorPaths: MirrorPathData[];
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
