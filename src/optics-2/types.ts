import type { DispersionQuality } from "../optics/dispersion.js";
import type { GlassEntry } from "../optics/glassCatalog.js";
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

export type Vec3 = readonly [number, number, number];

export interface Ray3 {
  origin: Vec3;
  direction: Vec3;
}

export interface Plane3 {
  point: Vec3;
  normal: Vec3;
  label: string;
}

export interface SurfaceProfile {
  kind: "flat" | "spherical" | "aspheric" | "tilted-plane";
  sag(radius: number): number;
  slope(radius: number): number;
  normalAt(point: Vec3, vertexZ: number): Vec3;
  pointAt(vertexZ: number, x: number, y: number): Vec3;
  finiteRadiusLimit(): number | null;
}

export interface CompiledSurfaceInteraction {
  type: SurfaceInteractionType;
  incidentSide: "front" | "rear" | "both";
  inactiveSide: "ignore" | "block";
  mirrorKind: "first-surface" | "second-surface" | null;
  normal: Vec3 | null;
  source: SurfaceInteraction | null;
}

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

export interface StopSpec {
  surfaceIndex: number;
  label: string;
  physicalSemiDiameter: number;
  placement: "surface" | "inside-element";
}

export interface ProjectionSpec {
  config: LensProjectionConfig;
  kind: LensProjectionConfig["kind"];
}

export interface PathSpec {
  mode: "sequential" | "auto";
  surfaceOrder: readonly number[] | null;
  surfaceLabels: readonly string[] | null;
  maxInteractions: number;
}

export interface VariableSpec {
  isZoom: boolean;
  zoomPositions: readonly number[] | null;
  zoomLabels: readonly string[] | null;
  zoomStep: number;
  bySurfaceIndex: Readonly<Record<number, VarRange>>;
  labels: readonly (readonly [number, string])[];
}

export interface AberrationControlSpec extends Omit<AberrationControlConfig, "var" | "varLabels"> {
  varBySurfaceIndex: Readonly<Record<number, VarRange>>;
  varLabels: readonly (readonly [number, string])[];
}

export interface AnnotationSpec {
  groups: readonly ResolvedAnnotation[];
  doublets: readonly ResolvedAnnotation[];
}

export interface SurfaceDispersion {
  surfaceIndex: number;
  quality: DispersionQuality;
  indexAt(channel: ChromaticChannel): number;
  glassEntry: GlassEntry | null;
}

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

export interface AuthoredRayFans {
  rayFractions: readonly number[];
  offAxisFractions: readonly number[];
  offAxisFieldFrac: number;
}

export interface EngineLensFlags {
  isZoom: boolean;
  isFoldedOptics: boolean;
  hasPerspectiveControl: boolean;
  hasAberrationControl: boolean;
}

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

export interface CompiledStateSurface extends Omit<CompiledSurface, "d"> {
  base: CompiledSurface;
  d: number;
  z: number;
}

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

export type PreparationFailureReason = "invalid-control" | "invalid-thickness";

export class Optics2PreparationError extends Error {
  readonly reason: PreparationFailureReason;

  constructor(reason: PreparationFailureReason, message: string) {
    super(message);
    this.name = "Optics2PreparationError";
    this.reason = reason;
  }
}
