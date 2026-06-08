/**
 * Camera/lens mount SVG specification types.
 *
 * This module is the in-repo TypeScript mirror of `src/mounts/lens-mount.schema.json`
 * (Lens Mount SVG Specification Package, schema version 1.3). The two files are the SAME
 * contract expressed twice: the JSON Schema is the published, external-facing artifact, and
 * these types are what the codebase compiles against. They MUST be edited together — there is
 * no codegen between them. Object keys are camelCase; enumerated *values* use the canonical
 * snake_case tokens from package Section 10.1.
 *
 * Authoring surface: `*.mount.ts` files export `… satisfies MountSpecInput`. The handful of
 * fixed/boilerplate blocks (schemaVersion, coordinateConvention, render scaffold, representative
 * metadata) are defaulted by `normalizeMountSpec()` in `src/optics/mount/`, so the compiler
 * checks every researched dimension while authors skip the invariant scaffolding.
 *
 * Because `emitMountJson()` serializes a typed `MountSpec` essentially unchanged, the emitted
 * machine block conforms to the schema by construction; that is the reason this project enforces
 * the contract through TypeScript rather than a runtime JSON-Schema validator.
 */

import type { LensMountId } from "../utils/catalog/lensTaxonomy.js";

/* ── Schema identity ── */

/** Schema version stamped on every record so stale 1.1/1.2-era data can be quarantined. */
export const MOUNT_SCHEMA_VERSION = "1.3";
export type MountSchemaVersion = typeof MOUNT_SCHEMA_VERSION;

/**
 * Profile id of the form `<mount-id>/<slug>` (e.g. `nikon-f/base`, `pentax-k/kaf2`). The
 * template type guarantees the prefix is a canonical mount id at author time; the slug and the
 * "prefix equals this record's mountId" rule are checked by `validateMountSpec()`.
 */
export type MountProfileId = `${LensMountId}/${string}`;

/* ── Enumerated tokens (Section 10.1) ── */

export type ResearchStatus = "stub" | "partial" | "researched" | "complete";
export type MvpStatus = "not_started" | "renderable" | "mvp_complete" | "not_applicable";
export type DiagramStatus = "not_started" | "partial" | "complete" | "not_applicable";

export type MountMechanism =
  | "bayonet"
  | "threaded"
  | "breech_lock"
  | "positive_lock"
  | "fixed_lens"
  | "hybrid"
  | "unknown";

export type MountLockType =
  | "sprung_detent"
  | "friction_shoulder"
  | "breech_collar"
  | "per_components"
  | "not_applicable"
  | "unknown";

/** Per-value provenance/epistemic token. A single token carries provenance and applicability. */
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

export type VariantStrategy = "none" | "base_only" | "variant_profiles_defined" | "unknown";
export type SourceConfidence = "high" | "medium" | "low" | "unknown";
export type ProfileType = "base" | "variant";

/** Sides a feature can belong to. Contacts are body/lens only; couplings/screws may be shared. */
export type ContactSide = "body" | "lens";
export type FeatureSide = "body" | "lens" | "both" | "unknown";

/** Required-view tokens for the MVP deliverable list. */
export type RequiredViewToken = "camera_side_front_view" | "lens_side_rear_view" | "axial_register_schematic";

/** The view a single emitted SVG represents (mirrored into its `<metadata>` block). */
export type MountMetadataView = "camera_side_front" | "lens_side_rear" | "axial_section" | "unknown";

/** Tokens shared by every numeric value envelope when a number is unavailable or inapplicable. */
export type UnknownToken = "unknown" | "not_applicable";

/* ── Numeric value envelopes ──
 * Every numeric field travels with its provenance. The envelopes differ only by the semantics of
 * `value` (angle 0–360, non-negative length, signed coordinate, integer count, angle list); TS
 * cannot express those numeric ranges, so range/shape rules are enforced by validateMountSpec(). */

/** Base envelope: a number (or unknown token) plus status and the citations backing it. */
export interface ValueEnvelope<TValue> {
  value: TValue | UnknownToken;
  status: ValueStatus;
  /** Ids that resolve to `MountSpec.sourceRefs[].ref`. */
  sourceRefs: string[];
}

/** Angle in degrees, camera-front world frame, 0–360. */
export type AngleValue = ValueEnvelope<number>;
/** Non-negative length in millimetres. */
export type LengthValue = ValueEnvelope<number>;
/** Signed axial coordinate in millimetres (e.g. sensor plane at z = −flangeFocalDistance). */
export type CoordinateValue = ValueEnvelope<number>;
/** Non-negative integer count. */
export type CountValue = ValueEnvelope<number>;
/** A list of angles in degrees (e.g. screw clock positions). */
export type AngleListValue = ValueEnvelope<number[]>;

/** Rotation sense as viewed from the camera front. */
export interface DirectionValue {
  value: "clockwise" | "counterclockwise" | "unknown" | "not_applicable";
  status: ValueStatus;
  sourceRefs: string[];
}

/* ── Coordinate convention & render scaffold (fixed by package Sections 4 / 9.1) ── */

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

/** One view's computed SVG viewBox, or `"unknown"` before the renderer fills it. */
export interface ViewBoxHolder {
  viewBox: string;
}

export interface RenderBlock {
  unitMapping: "1_user_unit_per_mm";
  marginFraction: 0.1;
  numericPrecision: 3;
  views: {
    cameraSideFront: ViewBoxHolder;
    lensSideRear: ViewBoxHolder;
    axialSection: ViewBoxHolder;
  };
}

/* ── MVP requirement model & profiles (Section 2.5) ── */

export interface MountRequirementLevels {
  mvpRequired: string[];
  conditionalCoreRequired: string[];
  variantRequired: string[];
  mvpOptional: string[];
  referenceGrade: string[];
}

/**
 * A named generation/era overlay (or the invariant base) for an evolved mount. The geometry that
 * belongs to a profile lives in the feature arrays tagged with this `profileId`; `adds`/`removes`/
 * `changes` are the human-readable summary of what the overlay does relative to the base.
 */
export interface VariantProfile {
  profileId: MountProfileId;
  profileType: ProfileType;
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

export interface MountProfileModel {
  baseProfileId: MountProfileId;
  /** The profile the MVP SVG renders: a variant id, or the base id for a `base_only` mount. */
  selectedMvpProfileId: MountProfileId;
  variantStrategy: VariantStrategy;
  variantProfiles: VariantProfile[];
}

export interface MountMvp {
  requiredViews: RequiredViewToken[];
  requirementLevels: MountRequirementLevels;
  profileModel: MountProfileModel;
}

/* ── Core dimensions & lock geometry ── */

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

/* ── Feature families ──
 * Angles are stored in the camera-front world frame for BOTH sides; the renderer applies the
 * lens-rear mirror at draw time and never writes mirrored angles back. */

/** A camera/body-side feature drawn in the front view (slots, mount ring, lock pin, …). */
export interface CameraSideFeature {
  featureId: string;
  /** snake_case descriptor, e.g. `bayonet_receiving_slot`, `mount_ring`, `lock_pin`, `index_mark`. */
  featureType: string;
  profileId: MountProfileId;
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

/** A lens-side feature drawn in the rear view (lugs, flange ring, lock notch, …). */
export interface LensSideFeature {
  featureId: string;
  featureType: string;
  profileId: MountProfileId;
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

/** A plane in the axial/register schematic (flange datum, sensor plane, clearance envelope, …). */
export interface AxialPlane {
  planeId: string;
  zPositionMm: CoordinateValue;
  thicknessMm: LengthValue;
  diameterMm: LengthValue;
}

/** A single electrical contact pad/pin on either side. */
export interface ContactFeature {
  side: ContactSide;
  contactNo: number;
  profileId: MountProfileId;
  centerAngleDeg: AngleValue;
  centerRadiusMm: LengthValue;
  widthMm: LengthValue;
  heightMm: LengthValue;
  shape: string;
  protrusionMm: CoordinateValue;
  function: string;
}

/** An aperture/AF/meter/rangefinder mechanical coupling. */
export interface MechanicalCoupling {
  featureId: string;
  side: FeatureSide;
  profileId: MountProfileId;
  centerAngleDeg: AngleValue;
  radiusMm: LengthValue;
  sizeOrTravel: string;
  function: string;
  compatibilityNotes: string;
}

/** Mount screws, weather gaskets, or baffles/masks. */
export interface ScrewGasketBaffle {
  featureId: string;
  featureType: string;
  side: FeatureSide;
  count: CountValue;
  pcdMm: LengthValue;
  diameterMm: LengthValue;
  centerAnglesDeg: AngleListValue;
  shape: string;
}

/* ── SVG layer manifest, document metadata, sources, open questions ── */

export type MvpRequiredLayer = "datum-axis" | "camera-side-metal" | "lens-side-metal" | "axial-section" | "uncertainty";
export type ConditionalCoreLayer = "clear-aperture" | "camera-side-core-interface" | "lens-side-core-interface";
export type VariantLayer =
  | "camera-side-variant-electrical"
  | "camera-side-variant-mechanical"
  | "lens-side-variant-electrical"
  | "lens-side-variant-mechanical";

export interface SvgLayerManifest {
  mvpRequired: MvpRequiredLayer[];
  conditionalCoreRequired: ConditionalCoreLayer[];
  variantRequired: VariantLayer[];
}

/** Document metadata mirrored into each SVG's `<metadata>` element. */
export interface MountDocMetadata {
  title: string;
  desc: string;
  view: MountMetadataView;
  profileId: string;
}

/** IEEE-numbered citation. Every live URL must carry an archived snapshot per package Section 3. */
export interface SourceRef {
  ref: string;
  sourceType: string;
  citation: string;
  /** Direct URL when available; put source labels in `citation`, not as a prefix here. */
  liveUrl: string;
  archiveUrl: string;
  /** ISO-8601 capture date, or `"unknown"`. */
  archiveDate: string;
  appliesTo: string;
  confidence: SourceConfidence;
}

export interface OpenQuestion {
  issue: string;
  affectedFields: string[];
  candidateValues: (string | number)[];
  resolution: string;
}

/* ── Top-level spec ── */

/**
 * Complete per-mount specification, structurally identical to one record validated by
 * `lens-mount.schema.json`. `emitMountJson()` serializes this with no shape change.
 */
export interface MountSpec {
  schemaVersion: MountSchemaVersion;
  mountId: LensMountId;
  displayLabel: string;
  projectNote: string;
  researchStatus: ResearchStatus;
  mvpStatus: MvpStatus;
  mechanism: MountMechanism;
  lockType: MountLockType;
  mvp: MountMvp;
  coordinateConvention: CoordinateConvention;
  render: RenderBlock;
  coreDimensions: CoreDimensions;
  lockGeometry: LockGeometry;
  cameraSideFeatures: CameraSideFeature[];
  lensSideFeatures: LensSideFeature[];
  axialStack: AxialPlane[];
  contacts: ContactFeature[];
  mechanicalCouplings: MechanicalCoupling[];
  screwsGasketsBaffles: ScrewGasketBaffle[];
  svgLayers: SvgLayerManifest;
  metadata: MountDocMetadata;
  sourceRefs: SourceRef[];
  openQuestions: OpenQuestion[];
}

/**
 * Fields filled by `normalizeMountSpec()` so authors omit fixed scaffolding:
 *  - `schemaVersion` — always "1.3";
 *  - `coordinateConvention` — fixed by package Section 4;
 *  - `render` — fixed margins/precision; per-view `viewBox` is computed by the renderer;
 *  - `metadata` — a representative block derived from mountId/label/base profile (each emitted SVG
 *    carries its own per-view metadata regardless).
 */
type DefaultedMountFields = "schemaVersion" | "coordinateConvention" | "render" | "metadata";

/** Authoring shape for `*.mount.ts` files (mirrors the `LensDataInput` Omit/Partial idiom). */
export type MountSpecInput = Omit<MountSpec, DefaultedMountFields> & Partial<Pick<MountSpec, DefaultedMountFields>>;
