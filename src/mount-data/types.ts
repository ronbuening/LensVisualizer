import type { LensMountId } from "../utils/catalog/lensTaxonomy.js";

export type MountSchemaVersion = "1.3";

export type ResearchStatus = "stub" | "partial" | "researched" | "complete";
export type MvpStatus = "not_started" | "renderable" | "mvp_complete" | "not_applicable";
export type MountMechanism =
  | "bayonet"
  | "threaded"
  | "breech_lock"
  | "positive_lock"
  | "fixed_lens"
  | "hybrid"
  | "unknown";
export type LockType =
  | "sprung_detent"
  | "friction_shoulder"
  | "breech_collar"
  | "per_components"
  | "not_applicable"
  | "unknown";
export type ValueStatus =
  | "unknown"
  | "not_applicable"
  | "official"
  | "patent"
  | "service_manual"
  | "measured"
  | "photo_scaled"
  | "secondary"
  | "conflicting";

export type UnknownToken = "unknown" | "not_applicable";
export type MountSvgView = "camera_side_front_view" | "lens_side_rear_view" | "axial_register_schematic";
export type MetadataView = "camera_side_front" | "lens_side_rear" | "axial_section" | "unknown";
export type MountSide = "body" | "lens" | "both" | "unknown";

export interface ValueEnvelope<T> {
  value: T | UnknownToken;
  status: ValueStatus;
  sourceRefs: string[];
}

export type LengthValue = ValueEnvelope<number>;
export type AngleValue = ValueEnvelope<number>;
export type AngleListValue = ValueEnvelope<number[]>;
export type CountValue = ValueEnvelope<number>;
export type DirectionValue = ValueEnvelope<"clockwise" | "counterclockwise">;
export type CoordinateValue = ValueEnvelope<number>;

export interface VariantProfile {
  profileId: string;
  profileType: "base" | "variant";
  appliesTo: string;
  requirementLayer?: string;
  adds: string[];
  removes: string[];
  changes: string[];
  cameraSideOverlayLayers?: string[];
  lensSideOverlayLayers?: string[];
  status?: string;
  sourceRefs: string[];
}

export interface MountMvpPolicy {
  requiredViews: MountSvgView[];
  requirementLevels: {
    mvpRequired: string[];
    conditionalCoreRequired: string[];
    variantRequired: string[];
    mvpOptional: string[];
    referenceGrade: string[];
  };
  profileModel: {
    baseProfileId: string;
    selectedMvpProfileId: string;
    variantStrategy: "none" | "base_only" | "variant_profiles_defined" | "unknown";
    variantProfiles: VariantProfile[];
  };
}

export interface CoordinateConvention {
  units: "mm_deg";
  zDatum: "flange_datum";
  zPositive: "toward_lens";
  angleZero: "top_dead_center_camera_front_view";
  anglePositive: "clockwise_camera_front_view";
  storedAngleFrame: "camera_front_view";
  lensRearMirror: "theta_out = (360 - theta) mod 360";
  angleSpanRule: "clockwise_sweep_start_to_end_mod_360";
}

export interface RenderViewBox {
  viewBox: string;
}

export interface MountRenderContract {
  unitMapping: "1_user_unit_per_mm";
  marginFraction: 0.1;
  numericPrecision: 3;
  views: {
    cameraSideFront: RenderViewBox;
    lensSideRear: RenderViewBox;
    axialSection: RenderViewBox;
  };
}

export interface CoreDimensions {
  flangeFocalDistanceMm: LengthValue;
  nominalThroatDiameterMm: LengthValue;
  effectiveClearApertureMm: LengthValue;
  cameraMountOuterDiameterMm: LengthValue;
  lensMountOuterDiameterMm: LengthValue;
  contactCount: CountValue;
}

export interface LockGeometry {
  insertionAngleDeg: AngleValue;
  lockAngleDeg: AngleValue;
  lockRotationDeg: AngleValue;
  lockRotationDirection: DirectionValue;
}

export interface CameraSideFeature {
  featureId: string;
  featureType: string;
  profileId: string;
  count: number;
  centerAngleDeg: AngleValue;
  startAngleDeg: AngleValue;
  endAngleDeg: AngleValue;
  innerRadiusMm: LengthValue;
  outerRadiusMm: LengthValue;
  depthMm: LengthValue;
  matesWith: string;
  shapeNotes: string;
}

export interface LensSideFeature {
  featureId: string;
  featureType: string;
  profileId: string;
  count: number;
  centerAngleDeg: AngleValue;
  startAngleDeg: AngleValue;
  endAngleDeg: AngleValue;
  innerRadiusMm: LengthValue;
  outerRadiusMm: LengthValue;
  thicknessMm: LengthValue;
  matesWith: string;
  shapeNotes: string;
}

export interface AxialPlane {
  planeId: string;
  zPositionMm: CoordinateValue;
  thicknessMm: LengthValue;
  diameterMm: LengthValue;
}

export interface Contact {
  side: "body" | "lens";
  contactNo: number;
  profileId: string;
  centerAngleDeg: AngleValue;
  centerRadiusMm: LengthValue;
  widthMm: LengthValue;
  heightMm: LengthValue;
  shape: string;
  protrusionMm: CoordinateValue;
  function: string;
}

export interface MechanicalCoupling {
  featureId: string;
  side: MountSide;
  profileId: string;
  centerAngleDeg: AngleValue;
  radiusMm: LengthValue;
  sizeOrTravel: string;
  function: string;
  compatibilityNotes: string;
}

export interface ScrewGasketBaffle {
  featureId: string;
  featureType: string;
  side: MountSide;
  count: CountValue;
  pcdMm: LengthValue;
  diameterMm: LengthValue;
  centerAnglesDeg: AngleListValue;
  shape: string;
}

export interface MountSvgLayers {
  mvpRequired: Array<"datum-axis" | "camera-side-metal" | "lens-side-metal" | "axial-section" | "uncertainty">;
  conditionalCoreRequired: Array<"clear-aperture" | "camera-side-core-interface" | "lens-side-core-interface">;
  variantRequired: Array<
    | "camera-side-variant-electrical"
    | "camera-side-variant-mechanical"
    | "lens-side-variant-electrical"
    | "lens-side-variant-mechanical"
  >;
}

export interface MountSvgMetadata {
  title: string;
  desc: string;
  view: MetadataView;
  profileId: string;
}

export interface SourceRef {
  ref: string;
  sourceType: string;
  citation: string;
  liveUrl: string;
  archiveUrl: string;
  archiveDate: string;
  appliesTo: string;
  confidence: "high" | "medium" | "low" | "unknown";
}

export interface OpenQuestion {
  issue: string;
  affectedFields: string[];
  candidateValues: Array<string | number>;
  resolution: string;
}

export interface LensMountSpec {
  schemaVersion: MountSchemaVersion;
  mountId: LensMountId;
  displayLabel: string;
  projectNote: string;
  researchStatus: ResearchStatus;
  mvpStatus: MvpStatus;
  mechanism: MountMechanism;
  lockType: LockType;
  mvp: MountMvpPolicy;
  coordinateConvention: CoordinateConvention;
  render: MountRenderContract;
  coreDimensions: CoreDimensions;
  lockGeometry: LockGeometry;
  cameraSideFeatures: CameraSideFeature[];
  lensSideFeatures: LensSideFeature[];
  axialStack: AxialPlane[];
  contacts: Contact[];
  mechanicalCouplings: MechanicalCoupling[];
  screwsGasketsBaffles: ScrewGasketBaffle[];
  svgLayers: MountSvgLayers;
  metadata: MountSvgMetadata;
  sourceRefs: SourceRef[];
  openQuestions: OpenQuestion[];
}
