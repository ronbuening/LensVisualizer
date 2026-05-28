/**
 * Engine-native optics types — compiled lenses, surfaces, states, vectors, and path metadata.
 *
 * These types sit below RuntimeLens and describe the normalized structures consumed by exact
 * tracing, prepared-state caches, field launch, and first-order analysis.
 */

import type { DispersionQuality } from "./dispersion.js";
import type { GlassEntry } from "./glassCatalog.js";
import type {
  AberrationControlConfig,
  AsphericCoefficients,
  ChromaticChannel,
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
 * Surface geometry abstraction used by exact intersection and diagram rendering.
 *
 * Sag and slope are functions of radial aperture height in mm. `pointAt` converts
 * a vertex z plus x/y aperture coordinates into the actual 3D surface point.
 */
export interface SurfaceProfile {
  kind: "flat" | "spherical" | "aspheric" | "tilted-plane";
  sag(radius: number): number;
  slope(radius: number): number;
  normalAt(point: Vec3, vertexZ: number): Vec3;
  pointAt(vertexZ: number, x: number, y: number): Vec3;
  finiteRadiusLimit(): number | null;
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

/** Physical surface record after labels, interactions, aspheres, and profiles are compiled. */
export interface CompiledSurface {
  physicalIndex: number;
  label: string;
  R: number;
  d: number;
  nd: number;
  sd: number;
  innerSd: number | null;
  elemId: number;
  stopPlacement: "inside-element" | null;
  asphere: AsphericCoefficients | null;
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
  zoomPositions: readonly number[] | null;
  zoomLabels: readonly string[] | null;
  zoomStep: number;
  bySurfaceIndex: Readonly<Record<number, VarRange>>;
  labels: readonly (readonly [number, string])[];
}

/** Aberration-control variable-gap metadata resolved to surface indices. */
export interface AberrationControlSpec extends Omit<AberrationControlConfig, "var" | "varLabels"> {
  varBySurfaceIndex: Readonly<Record<number, VarRange>>;
  varLabels: readonly (readonly [number, string])[];
}

/** Resolved annotation groups used by display overlays and element grouping. */
export interface AnnotationSpec {
  groups: readonly ResolvedAnnotation[];
  doublets: readonly ResolvedAnnotation[];
}

/** Per-surface chromatic index resolver and data-quality marker. */
export interface SurfaceDispersion {
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
  clipMargin: number;
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
export interface EngineLensFlags {
  isZoom: boolean;
  isFoldedOptics: boolean;
  hasPerspectiveControl: boolean;
  hasAberrationControl: boolean;
}

/**
 * Normalized engine lens shared by trace, field, state, and analysis modules.
 *
 * This is immutable by convention and retains the originating RuntimeLens only as
 * a compatibility bridge for older public helper signatures.
 */
export interface EngineLens {
  key: string;
  source: LensData;
  runtime: RuntimeLens;
  surfaces: readonly CompiledSurface[];
  elements: readonly CompiledElement[];
  labelToSurfaceIndex: Readonly<Record<string, number>>;
  stop: StopSpec;
  projection: ProjectionSpec;
  opticalPath: PathSpec;
  imagePlane: Plane3;
  variables: VariableSpec;
  aberrationControl: AberrationControlSpec | null;
  annotations: AnnotationSpec;
  dispersion: readonly SurfaceDispersion[];
  display: DisplaySpec;
  authoredRayFans: AuthoredRayFans;
  perspectiveControl: PerspectiveControlConfig | null;
  flags: EngineLensFlags;
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
export interface PreparedOpticalState {
  lens: EngineLens;
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

/** Reason a prepared state could not be constructed. */
export type PreparationFailureReason = "invalid-control" | "invalid-thickness";

/** Error raised when normalized lens data cannot produce a valid prepared state. */
export class Optics2PreparationError extends Error {
  readonly reason: PreparationFailureReason;

  constructor(reason: PreparationFailureReason, message: string) {
    super(message);
    this.name = "Optics2PreparationError";
    this.reason = reason;
  }
}
