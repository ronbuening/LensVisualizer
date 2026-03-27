/**
 * Type definitions for the optics engine: surfaces, elements, lens data,
 * runtime lens objects, ray-trace results, and diagram geometry.
 */

/* ── Raw lens data types (as declared in .data.ts files) ── */

export interface SurfaceData {
  label: string;
  R: number;
  d: number;
  nd: number;
  sd: number;
  elemId: number;
}

export interface AsphericCoefficients {
  K: number;
  A4: number;
  A6: number;
  A8: number;
  A10: number;
  A12: number;
  A14: number;
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
  patentYear?: number;
  elementCount?: number;
  groupCount?: number;
  visible?: boolean;
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
  readonly varLabels: [number, string][];
  readonly groups: ResolvedAnnotation[];
  readonly doublets: ResolvedAnnotation[];
  readonly stopIdx: number;
  readonly stopPhysSD: number;
  readonly EFL: number;
  readonly EP: EntrancePupil;
  readonly B: number;
  readonly FOPEN: number;
  readonly halfField: number;
  readonly petzvalSum: number;
  readonly totalTrack: number;
  readonly maxSD: number;
  readonly svgW: number;
  readonly svgH: number;
  readonly SC: number;
  readonly YSC: number;
  readonly maxRimSin: number;
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
  /** True if the ray exceeded ANY surface's semi-diameter (stop or element edge). */
  clipped: boolean;
  /**
   * True if the ray exceeded the aperture STOP semi-diameter specifically.
   * A ray clipped only at a non-stop element edge (clipped=true, clippedAtStop=false)
   * is still physically meaningful for aberration analysis — element SDs are
   * estimates, and only the stop enforces the true aperture.
   */
  clippedAtStop: boolean;
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

export type ChromaticChannel = "R" | "G" | "B";

export interface ChromaticSpread {
  lcaMm: number;
  tcaMm: number;
  intercepts: Partial<Record<ChromaticChannel, number>>;
  imgHeights: Partial<Record<ChromaticChannel, number>>;
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

export interface ElementShape {
  eid: number;
  d: string;
  z1: number;
  z2: number;
  asphPaths: AsphPathData[];
}
