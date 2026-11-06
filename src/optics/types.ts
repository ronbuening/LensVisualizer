/**
 * Engine-native optics types — compiled lenses, surfaces, states, vectors, and path metadata.
 *
 * These types sit below RuntimeLens and describe the normalized structures consumed by exact
 * tracing, prepared-state caches, field launch, and first-order analysis.
 */

import type { TraceGeometry } from "./trace/types.js";
import type { RimCut, RimLand } from "./geometry/rimCut.js";
import type { DispersionQuality } from "../types/dispersion.js";
import type { GlassEntry } from "./chromatic/glassCatalogTypes.js";
import type {
  AberrationControlConfig,
  AberrationVarRange,
  AsphericCoefficients,
  ChromaticChannel,
  DiffractivePhaseSurface,
  ElementData,
  LensData,
  LensProjectionConfig,
  PerspectiveControlConfig,
  ResolvedAnnotation,
  RuntimeLens,
  SurfaceData,
  SurfaceInteraction,
  SurfaceInteractionType,
  VarRange,
} from "../types/optics.js";

/** 3D vector in engine coordinates: x sagittal, y meridional, z axial millimeters. */
export type Vec3 = readonly [number, number, number];

/** 3D ray with origin in millimeters and a normalized direction vector. */
export interface Ray3 {
  origin: Vec3;
  direction: Vec3;
}

/** Plane represented by a point, normalized normal, and lens-data label. */
export interface Plane3 {
  point: Vec3;
  normal: Vec3;
  label: string;
}

/**
 * A curved image surface in its local frame: vertex at the origin, local z along the image-plane normal, local x
 * along global x. Every shape is mirror-symmetric in x and in y. A flat image is `null`, never a shape.
 */
export interface ImageSurfaceShape {
  readonly kind: "spherical" | "aspheric" | "cylindrical";
  /** Signed vertex radius in mm, as authored. */
  readonly radius: number;
  /** Vertex curvature 1/R in 1/mm. */
  readonly curvature: number;
  /** Conic constant K; 0 for a sphere or a cylinder. */
  readonly conic: number;
  /**
   * Angle in radians from the drawn (y) meridian to a cylinder's curved direction: 0 when the drawn section is curved,
   * π/2 when it is straight, between for a frame corner. Null when radial.
   */
  readonly cylinderAngle: number | null;
  /** False only for a cylinder turned obliquely, whose landings are not mirror images across the drawn meridian. */
  readonly xSymmetric: boolean;
  /**
   * A cylinder's frame half-length along the drawn meridian for its viewed section, in mm: the field sweeps end there
   * instead of at the image-circle radius. Null when radial or without a declared format.
   */
  readonly fieldExtentMm: number | null;
  /** Half-height in mm of the drawn and validated surface. */
  readonly semiDiameter: number;
  /** Sag and slope along the curved direction: r = hypot(x, y), or the curved coordinate of a cylinder. */
  readonly profile: SurfaceProfile;
  /** Local z of the surface at lateral (x, y) in mm; NaN where it is not single-valued. */
  sagAt(x: number, y: number): number;
  /** Unit normal at lateral (x, y), on the +z side. */
  normalAt(x: number, y: number): Vec3;
  /**
   * Image coordinates of a landing at lateral (x, y): unchanged on a radial surface, which does not unroll; on a
   * cylinder, distances along the unrolled film, as the print shows them. NaN past the cylinder's edge.
   */
  toImageCoordinates(x: number, y: number): readonly [number, number];
  /** Lateral (x, y) of the point at image coordinates (u, v); the inverse of `toImageCoordinates`. */
  fromImageCoordinates(u: number, v: number): readonly [number, number];
}

/** Sag in mm and radial slope dz/dr of a surface profile at one radius. */
export interface SagSlope {
  sag: number;
  slope: number;
}

/**
 * Surface geometry abstraction used by exact intersection and diagram rendering.
 *
 * Sag and slope are functions of radial aperture height in mm. `pointAt` converts
 * a vertex z plus x/y aperture coordinates into the actual 3D surface point.
 * A tilted plane is the exception: its `sag` and `evaluate` read the argument
 * as the signed meridional coordinate y.
 *
 * The four readonly fields give the base conic as data. An aspheric profile
 * from its factory reads `conic` and `hasPolynomial` from the coefficient object
 * on every access. A spread copy holds the values read when it was copied, while
 * its copied evaluators go on reading the object, so over mutable coefficients
 * a copy's data can disagree with its evaluators.
 */
export interface SurfaceProfile {
  kind: "flat" | "spherical" | "aspheric" | "tilted-plane";
  sag(radius: number): number;
  slope(radius: number): number;
  /**
   * Sag and slope at one radius from one pass. Each field is bit-identical to
   * `sag(radius)` and `slope(radius)`. Fills and returns `out` when given.
   */
  evaluate(radius: number, out?: SagSlope): SagSlope;
  normalAt(point: Vec3, vertexZ: number): Vec3;
  pointAt(vertexZ: number, x: number, y: number): Vec3;
  finiteRadiusLimit(): number | null;
  /** Conservative absolute radial slope bound; absent for unproved/custom geometry. */
  maxAbsSlope?(radius: number): number;
  /** Vertex curvature 1/R in 1/mm; 0 for a flat base or a plane. */
  readonly curvature: number;
  /** Conic constant K; 0 for a sphere or a plane. */
  readonly conic: number;
  /** True when a polynomial coefficient is nonzero, so the surface is more than its base conic. */
  readonly hasPolynomial: boolean;
  /** Unit normal of a tilted plane; null for every other kind. */
  readonly planeNormal: Vec3 | null;
}

/** Compiled refract/reflect/block behavior for one physical surface. */
export interface CompiledSurfaceInteraction {
  type: SurfaceInteractionType;
  incidentSide: "front" | "rear" | "both";
  inactiveSide: "ignore" | "block";
  mirrorKind: "first-surface" | "second-surface" | null;
  normal: Vec3 | null;
  source: SurfaceInteraction | null;
}

/** Precomputed sparse term used by the phase-gradient hot path. */
export interface CompiledRadialPhaseTerm {
  radialPower: number;
  coefficient: number;
  derivativeCoefficient: number;
}

/** Immutable compiled form of a radial diffractive optical-path polynomial. */
export interface CompiledDiffractivePhase {
  kind: "radial-polynomial";
  referenceWavelengthNm: number;
  diffractionOrder: number;
  quadraticCoefficient: number;
  terms: readonly CompiledRadialPhaseTerm[];
  source: DiffractivePhaseSurface;
}

/** Physical surface record after labels, interactions, aspheres, and profiles are compiled. */
export interface CompiledSurface {
  physicalIndex: number;
  label: string;
  R: number;
  d: number;
  nd: number;
  sd: number;
  innerSd: number | null;
  /** Flat land cutting the rim: tracing clips beyond its radius, drawing follows it; null on an uncut surface. */
  rimCut: RimCut | null;
  /** Shared drawn boundary of a rim cut or extension; null on an ordinary face. */
  rimLand: RimLand | null;
  /** False when `sd` is a generated rear-plate rim: the surface never clips a ray or limits the field. */
  clips: boolean;
  elemId: number;
  stopPlacement: "inside-element" | null;
  asphere: AsphericCoefficients | null;
  diffractive: CompiledDiffractivePhase | null;
  interaction: CompiledSurfaceInteraction;
  profile: SurfaceProfile;
  source: SurfaceData;
}

/** Element metadata with resolved physical surface span. */
export interface CompiledElement {
  id: number;
  name: string;
  label: string;
  type: string;
  nd: number;
  vd: number | null;
  glass: string | null;
  absorptionCoefficientPerMm: number | null;
  surfaceSpan: readonly [number, number];
  source: ElementData;
}

/** Stop surface metadata resolved to a physical surface index. */
export interface StopSpec {
  surfaceIndex: number;
  label: string;
  physicalSemiDiameter: number;
  placement: "surface" | "inside-element";
}

/** Lens projection metadata carried into field-launch and distortion calculations. */
export interface ProjectionSpec {
  config: LensProjectionConfig;
  kind: LensProjectionConfig["kind"];
}

/** Generalized optical-path metadata resolved for engine tracing. */
export interface PathSpec {
  mode: "sequential" | "auto";
  surfaceOrder: readonly number[] | null;
  surfaceLabels: readonly string[] | null;
  maxInteractions: number;
}

/** Focus/zoom variable-gap metadata resolved to surface indices. */
export interface VariableSpec {
  isZoom: boolean;
  focusPositions: readonly number[];
  zoomPositions: readonly number[] | null;
  zoomLabels: readonly string[] | null;
  zoomStep: number;
  bySurfaceIndex: Readonly<Record<number, VarRange>>;
  labels: readonly (readonly [number, string])[];
}

/** Aberration-control variable-gap metadata resolved to surface indices. */
export interface AberrationControlSpec extends Omit<AberrationControlConfig, "var" | "varLabels"> {
  varBySurfaceIndex: Readonly<Record<number, AberrationVarRange>>;
  varLabels: readonly (readonly [number, string])[];
}

/** Resolved annotation groups used by display overlays and element grouping. */
export interface AnnotationSpec {
  groups: readonly ResolvedAnnotation[];
  doublets: readonly ResolvedAnnotation[];
}

/** Per-surface chromatic index resolver and data-quality marker. */
export interface CompiledSurfaceDispersion {
  surfaceIndex: number;
  quality: DispersionQuality;
  indexAt(channel: ChromaticChannel): number;
  glassEntry: GlassEntry | null;
}

/** Diagram/display tuning parameters compiled from RuntimeLens data. */
export interface DisplaySpec {
  svgW: number;
  svgH: number;
  scFill: number;
  yScFill: number;
  maxRimAngleDeg: number;
  maxRimTan: number;
  gapSagFrac: number;
  maxAspectRatio: number;
  lensShiftFrac: number;
  rayLeadFrac: number;
}

/** Lens-authored baseline ray fans preserved for normal-density rendering. */
export interface AuthoredRayFans {
  rayFractions: readonly number[];
  offAxisFractions: readonly number[];
  offAxisFieldFrac: number;
}

/** Feature flags derived from RuntimeLens capabilities for engine branching. */
export interface CompiledLensFlags {
  isZoom: boolean;
  isFoldedOptics: boolean;
  hasPerspectiveControl: boolean;
  hasAberrationControl: boolean;
}

/** Constants own derived numbers and station tables, never the RuntimeLens read model. */
export type LensConstants = Omit<
  RuntimeLens,
  | "source"
  | "attachedTeleconverter"
  | "S"
  | "N"
  | "ES"
  | "elements"
  | "lastLensSurfaceIdx"
  | "asphByIdx"
  | "varByIdx"
  | "vdByIdx"
  | "spectralByIdx"
  | "indexByIdx"
  | "varLabels"
  | "groups"
  | "doublets"
  | "perspectiveControl"
  | "aberrationControl"
  | "projection"
  | "opticalPath"
  | "imageSurface"
  | "stopIdx"
  | "labelIdx"
>;

/** Shared compiled indices; material callbacks are resolved once per medium identity. */
export type CompiledIndices = Pick<RuntimeLens, "asphByIdx" | "vdByIdx" | "spectralByIdx" | "indexByIdx">;

/** Canonical projection after ingest has supplied the catalog defaults. */
export type LensConstructionData = LensData & { lensShiftFrac: number };

/** Immutable prescription primitives available before constants are calculated. */
export interface CompiledPrescription {
  key: string;
  source: import("./prescription/canonical.js").CanonicalLens;
  attachedTeleconverter?: LensData["attachedTeleconverter"];
  /** Numeric construction columns, discarded once constants are complete. */
  data: LensConstructionData;
  indices: CompiledIndices;
  lastLensSurfaceIndex: number;
  displayElementSpans: RuntimeLens["ES"];
  hasExplicitImagePlane: boolean;
  /** Curved image surface; null for a flat image. */
  imageSurface: ImageSurfaceShape | null;
  surfaces: readonly CompiledSurface[];
  elements: readonly CompiledElement[];
  labelToSurfaceIndex: Readonly<Record<string, number>>;
  stop: StopSpec;
  projection: ProjectionSpec;
  opticalPath: PathSpec;
  variables: VariableSpec;
  aberrationControl: AberrationControlSpec | null;
  annotations: AnnotationSpec;
  dispersion: readonly CompiledSurfaceDispersion[];
  display: Omit<DisplaySpec, "maxRimTan">;
  authoredRayFans: AuthoredRayFans;
  perspectiveControl: PerspectiveControlConfig | null;
  flags: CompiledLensFlags;
}

/** Final published compiled identity: constants are complete before preparation or view assembly. */
export interface CompiledLens extends Omit<CompiledPrescription, "data"> {
  /** Canonical surface rows needed by the compatibility view; the remaining construction data is released. */
  constructionSurfaces: readonly SurfaceData[];
  imagePlane: Plane3;
  display: DisplaySpec;
  constants: LensConstants;
}

/** Surface state after current focus/zoom/aberration thicknesses and z positions are applied. */
export interface CompiledStateSurface extends Omit<CompiledSurface, "d"> {
  base: CompiledSurface;
  d: number;
  z: number;
}

/**
 * Immutable current-state optical model consumed by engine-native helpers.
 *
 * All distances are millimeters. `z` and `imgZ` use the global optical-axis
 * coordinate; folded systems may have an image plane whose normal is not +z.
 */
export interface PreparedGeometry {
  readonly traceGeometry: TraceGeometry;
  lens: CompiledLens;
  focusT: number;
  zoomT: number;
  aberrationT: number;
  surfaces: readonly CompiledStateSurface[];
  z: readonly number[];
  imagePlane: Plane3;
  imgZ: number;
  totalTrack: number;
  cacheKey: string;
}

/** Optical state is the immutable prepared geometry for one control tuple. */
export type PreparedOpticalState = PreparedGeometry;

/** Reason a prepared state could not be constructed. */
export type PreparationFailureReason = "invalid-control" | "invalid-thickness";

export { OpticsPreparationError } from "./state/preparationError.js";

export type { CanonicalLens, CanonicalTeleconverter, IngestedPrescription } from "./prescription/canonical.js";
