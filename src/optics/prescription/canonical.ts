/**
 * Canonical prescription — the version-independent semantic content of a lens or teleconverter file.
 *
 * Every authored format is ingested into these types: V1 through `ingestV1.ts`, V2 through `ingestV2.ts`. The shape
 * follows the V2 lens-data model of `OPTICS_ENGINE_REWRITE_SPEC.md` (Lens data V2): records grouped by consumer,
 * one value per fact, indices carried by a surface's medium, sparse aspheres, a flat radius as a marker, and the
 * stop's radius authority stated once. Schema defaults are applied, so a default written out and a default left
 * out ingest to the same prescription, and the engine's authority rules are applied, so a value the engine never
 * reads is not part of it.
 *
 * Provenance is kept apart, beside the prescription: which values the schema supplied, the authored values the
 * engine ignores, and how the source spelled what the prescription holds once. The semantic fingerprint hashes the
 * prescription alone; the V1 view (`toLensData.ts`) needs both to give a file back as it was written.
 *
 * A prescription and its provenance are plain data: no functions, class instances or shared references, so they can
 * be cloned, frozen, serialized or sent to a worker.
 */

import type { AsphericCoefficients } from "../../types/asphericSchema.js";
import type {
  AnnotationData,
  DiffractivePhaseSurface,
  FiniteConjugate,
  LensProjectionConfig,
  LensData,
  OpticalConfigurationData,
  OpticalPathData,
  PerspectiveControlConfig,
  RefractiveIndexReferenceLine,
  SourceErratum,
  SurfaceInteraction,
} from "../../types/optics.js";
import type { ImageFormatId, LensMountId } from "../../utils/catalog/lensTaxonomy.js";
import { itemPath, memberPath } from "./sourcePaths.js";

/* ── Surfaces and media ── */

/** Marker for a flat surface: the engine reads neither the magnitude nor the sign of a radius past the threshold. */
export const FLAT_RADIUS = "flat";

/** A radius of curvature in mm, or the flat marker. */
export type CanonicalRadius = number | typeof FLAT_RADIUS;

/**
 * The aspheric terms of one surface, sparse: a zero term is absent. An entry with no terms is still an asphere,
 * because the engine builds an aspheric profile for it; the surface carries `asphere: {}`.
 */
export type CanonicalAsphere = Partial<AsphericCoefficients>;

/** What fills the space after a surface: an element id, the id of an undrawn medium, or `null` for air. */
export type CanonicalMediumRef = number | string | null;

/** An index-bearing medium that belongs to no drawn element: a cement layer, or water ahead of the lens. */
export interface CanonicalMedium {
  /** Referenced from `CanonicalSurface.medium`; never a number, so it cannot collide with an element id. */
  id: string;
  nd: number;
}

export interface CanonicalSurface {
  label: string;
  R: CanonicalRadius;
  /** Axial step to the next listed surface in mm; on a variable gap, the gap's first value. */
  d: number;
  /** Clear semi-diameter in mm. Absent only on a stop whose radius the engine derives or takes from a schedule. */
  sd?: number;
  innerSd?: number;
  /** The medium after this surface; its index is the surface's index. */
  medium: CanonicalMediumRef;
  asphere?: CanonicalAsphere;
  diffractive?: DiffractivePhaseSurface;
  interaction?: SurfaceInteraction;
  stopPlacement?: "inside-element";
}

/* ── Elements ── */

export interface CanonicalElement {
  id: number;
  name: string;
  label: string;
  type: string;
  nd: number;
  vd?: number;
  /** Spectral line of `nd` and `vd`; `"d"` unless the file says otherwise. */
  indexReference: RefractiveIndexReferenceLine;
  indexReferenceNote?: string;
  /** Authored element focal length in mm, shown in the inspector. */
  focalLengthMm?: number;
  glass?: string;
  /** Anomalous partial dispersion claim; `false` unless the file says otherwise. */
  apd: "patent" | "inferred" | false;
  apdNote?: string;
  role?: string;
  diagramLabel?: string;
  maxSdRatio?: number;
  absorptionCoefficientPerMm?: number;
  cemented?: string;
  dPgF?: number;
  nC?: number;
  nF?: number;
  ng?: number;
  /** Drawn span as `[from, to]` surface labels, where the file states one. */
  span?: [string, string];
}

/** A source-documented plate behind the last surface. Field names are the V1 ones, which V2 keeps. */
export interface CanonicalRearPlate {
  label?: string;
  thicknessMm: number;
  nd: number;
  vd: number;
  glass?: string;
  indexReference: RefractiveIndexReferenceLine;
  dPgF?: number;
  nC?: number;
  nF?: number;
  ng?: number;
  gapAfterMm: number;
  sd?: number;
  source?: string;
}

/* ── States ── */

export interface CanonicalZoomStation {
  focalLengthMm: number;
  /** Per-station design f-number, on a variable-aperture zoom. */
  nominalFNumber?: number;
  /** Published physical stop semi-diameter in mm; the stop's radius authority is then `"schedule"`. */
  stopSemiDiameter?: number;
  /** Object-to-image close distance in metres, overriding `focus.closeFocusM` at this station. */
  closeFocusM?: number;
  label?: string;
  /**
   * Whether the source tabulates this station's infinity row. A file that declares no published stations takes the
   * schema default, every station published at infinity, and provenance records it as defaulted.
   */
  published: boolean;
  /** Focus keyframe indices (>= 1) the source tabulates at this station; empty when only infinity is. */
  publishedFocus: number[];
}

export interface CanonicalZoom {
  stations: CanonicalZoomStation[];
  apertureModel: "from-nominal-fno" | "fixed-iris";
  /** Zoom slider step. */
  step: number;
}

/** A source-certified finite conjugate, addressed by station and keyframe index. */
export interface CanonicalConjugate {
  /** Index into `zoom.stations`; 0 on a prime. */
  zoomStation: number;
  /** Index into `focus.keyframes`; never 0, which is infinity. */
  keyframe: number;
  objectDistanceMm: number;
  distanceReference: FiniteConjugate["distanceReference"];
  source: string;
}

export interface CanonicalFocus {
  closeFocusM: number;
  /** Normalized focus coordinate of each authored thickness, from 0 (infinity) to 1 (close focus). */
  keyframes: number[];
  /** Focus slider step. */
  step: number;
  description?: string;
  conjugates?: CanonicalConjugate[];
  /**
   * On a prime: focus keyframe indices (>= 1) the source tabulates; empty when only infinity is, the schema default.
   * Absent on a zoom, whose stations carry their own.
   */
  published?: number[];
}

/** One variable gap: the thickness after `surface` at every zoom station and focus keyframe. */
export interface CanonicalGap {
  surface: string;
  /** Display label of the gap. */
  label?: string;
  /** `[zoomStation][keyframe]` in mm; a prime has one row. */
  values: number[][];
}

/** One gap of an aberration-control ring, in V1's tuple forms: `[normal, max]`, `[min, center, max]`, or per station. */
export interface CanonicalAberrationGap {
  surface: string;
  label?: string;
  values: [number, number] | [number, number, number] | ([number, number] | [number, number, number])[];
}

export interface CanonicalAberrationControl {
  label: string;
  description?: string;
  minLabel?: string;
  centerLabel?: string;
  maxLabel?: string;
  step?: number;
  /** In surface order. */
  gaps: CanonicalAberrationGap[];
}

/* ── Aperture and stop ── */

/**
 * Where the engine takes the wide-open stop radius from:
 * - `"authored"`: the stop surface's own `sd` (folded systems and stops inside an element);
 * - `"schedule"`: each zoom station's `stopSemiDiameter`;
 * - `"derived"`: the marginal-ray height at the stop for the design f-number.
 */
export type StopRadiusAuthority = "authored" | "schedule" | "derived";

/**
 * Decide the stop's radius authority as `buildLens` does today, from facts every format states.
 *
 * A folded system keeps the authored radius at every station. Any other lens takes a published per-station
 * schedule, then an authored radius for a stop drawn inside glass, and otherwise derives the radius from the
 * f-number. A schedule wins over a stop inside glass.
 *
 * @param facts - whether the system is folded, whether a station schedule exists, and the stop's placement
 * @returns where the wide-open stop radius comes from
 */
export function stopRadiusAuthority(facts: {
  folded: boolean;
  hasSchedule: boolean;
  stopInsideElement: boolean;
}): StopRadiusAuthority {
  if (facts.folded) return "authored";
  if (facts.hasSchedule) return "schedule";
  return facts.stopInsideElement ? "authored" : "derived";
}

/**
 * The stop's radius authority of V1 lens data, read as `buildLens` reads it: folded when the file declares an optical
 * path or a surface reflects or blocks, a schedule when it lists `zoomStopSemiDiameters`, and a stop inside glass by
 * the `STO` surface's placement.
 *
 * @param data - V1 lens data, authored or merged
 * @returns where the wide-open stop radius comes from
 */
export function lensDataStopRadiusAuthority(data: {
  opticalPath?: unknown;
  zoomStopSemiDiameters?: unknown;
  surfaces: readonly { label: string; interaction?: { type?: unknown }; stopPlacement?: unknown }[];
}): StopRadiusAuthority {
  return stopRadiusAuthority({
    folded: Boolean(
      data.opticalPath ||
      data.surfaces.some((surface) => surface.interaction && surface.interaction.type !== "refract"),
    ),
    hasSchedule: Boolean(data.zoomStopSemiDiameters),
    stopInsideElement: data.surfaces.some(
      (surface) => surface.label === "STO" && surface.stopPlacement === "inside-element",
    ),
  });
}

export interface CanonicalAperture {
  /** Design f-number of a prime or a constant-aperture zoom; a variable-aperture zoom holds one per station. */
  nominalFNumber?: number;
  fStops: number[];
  maxFNumber: number;
  /** Aperture slider step. */
  step: number;
  blades?: number;
  bladeRoundedness?: number;
  stopRadius: StopRadiusAuthority;
}

/* ── Catalog, source, display ── */

/** A value as the source states it: a scalar, or `[wide, tele]` on a zoom. */
export type CanonicalRangeValue = number | [number, number];

export interface CanonicalLensCatalog {
  lensMounts?: LensMountId[];
  imageFormat?: ImageFormatId;
  imageCircleMm?: number;
  specs?: string[];
  elementCount?: number;
  groupCount?: number;
  acceptsTeleconverters?: boolean;
  opticalConfiguration?: OpticalConfigurationData;
  focalLengthMm?: { marketing?: CanonicalRangeValue; design?: CanonicalRangeValue };
  fNumber?: { marketing?: number; design?: number };
}

export interface CanonicalSource {
  patentNumber?: string;
  patentYear?: number;
  authors?: string[];
  assignees?: string[];
  errata?: SourceErratum[];
}

export interface CanonicalLayout {
  svgW: number;
  svgH: number;
  scFill: number;
  yScFill: number;
  maxAspectRatio: number;
  lensShiftFrac: number;
}

export interface CanonicalRays {
  rayFractions: number[];
  rayLeadFrac: number;
  offAxisFieldFrac: number;
  offAxisFractions: number[];
}

export interface CanonicalChecks {
  gapSagFrac: number;
  maxRimAngleDeg: number;
}

/* ── Prescriptions ── */

export interface CanonicalLens {
  kind: "lens";
  key: string;
  /** `null` records an unconfirmed maker; absent leaves the maker to be inferred from the name. */
  maker?: string | null;
  name: string;
  subtitle?: string;
  visible: boolean;
  publishedAt?: string;
  catalog: CanonicalLensCatalog;
  source: CanonicalSource;
  elements: CanonicalElement[];
  media: CanonicalMedium[];
  surfaces: CanonicalSurface[];
  zoom?: CanonicalZoom;
  focus: CanonicalFocus;
  /** In surface order. */
  gaps: CanonicalGap[];
  aperture: CanonicalAperture;
  aberrationControl?: CanonicalAberrationControl;
  projection?: LensProjectionConfig;
  opticalPath?: OpticalPathData;
  perspectiveControl?: PerspectiveControlConfig;
  rearPlates?: CanonicalRearPlate[];
  groups?: AnnotationData[];
  doublets?: AnnotationData[];
  layout: CanonicalLayout;
  rays: CanonicalRays;
  checks: CanonicalChecks;
}

export interface CanonicalTeleconverter {
  kind: "teleconverter";
  key: string;
  maker?: string | null;
  name: string;
  subtitle?: string;
  visible?: boolean;
  publishedAt?: string;
  catalog: { lensMounts: LensMountId[]; specs?: string[]; elementCount?: number; groupCount?: number };
  source: CanonicalSource;
  magnification: number;
  /** Air-equivalent distance in mm from the converter's first vertex to the host's native image plane. */
  masterImageDistanceMm: number;
  universal?: boolean;
  minHostFNumber?: number;
  incompatibleLensKeys?: string[];
  elements: CanonicalElement[];
  media: CanonicalMedium[];
  surfaces: CanonicalSurface[];
  rearPlates?: CanonicalRearPlate[];
  groups?: AnnotationData[];
  doublets?: AnnotationData[];
}

export type CanonicalPrescription = CanonicalLens | CanonicalTeleconverter;

/* ── Provenance ── */

/** How a V1 file spelled what the prescription holds once, so the V1 view can give the file back. */
export interface V1Spelling {
  /** Containers written out empty: `asph: {}`, `var: {}`, `varLabels: []`, `aberrationControl.varLabels: []`. */
  emptyContainers: ("asph" | "var" | "varLabels" | "aberrationControl.varLabels")[];
  /** How the file wrote `publishedStations`; absent when it left the object out and took the default. */
  publishedStations?: V1PublishedStationsSpelling;
}

/**
 * How a V1 file wrote `publishedStations`. The engine reads a `zoom` list left out, written empty or naming every
 * station as every station, and one `focus` list as that list at every published station, so each declaration has
 * several spellings and the view needs the one the file used.
 */
export interface V1PublishedStationsSpelling {
  /** `zoom` left out, written empty, or written as a list of station indices. */
  zoom: "omitted" | "empty" | "listed";
  /** `focus` left out, written as one list of keyframe indices, or as one such list per zoom station. */
  focus: "omitted" | "one" | "perStation";
}

/** How a V2 file wrote what the prescription renumbers, so a V2 printer can give the file back. */
export interface V2Spelling {
  /**
   * The file's undrawn media as written, in its order, each with the id the prescription gives it. The prescription
   * numbers media by first use, as V1 ingest does, so a medium's name never reaches the semantic fingerprint.
   */
  media: { canonicalId: string; id: string; name?: string }[];
}

/** Why ingest set an authored value aside in `CanonicalProvenance.ignored`. */
export type IgnoredKind =
  /** A stop's `sd` the engine does not read: its radius is derived from the f-number or taken from a schedule. */
  | "stopRadius"
  /** A zero aspheric term, which adds nothing to the sag. */
  | "zeroTerm"
  /** A flat radius written as a number, other than V1's own `1e15`. */
  | "flatRadius"
  /** An authored value the schema reads as its default, such as a zoom step of 0. */
  | "defaultStandIn"
  /** A conjugate's focus or zoom coordinate that names its keyframe or station within the validator's tolerance. */
  | "stationCoordinate";

/**
 * Where ingest read what the prescription holds, recorded when the caller asks (`IngestRequest`): for the converter,
 * which carries comments and literal text across, and for diagnostics that name an authored path. Paths are spelled as
 * `sourcePaths.ts` spells them.
 */
export interface SourcePaths {
  /**
   * Canonical path of each value or copied subtree → the authored path ingest read it from. A path below a copied
   * subtree was read from the same place below the subtree's source. An index, flag or reference ingest computes is
   * not read, so it has no entry here.
   */
  read: Record<string, string>;
  /** Canonical path of each record or container ingest builds from an authored one → that record or container. */
  records: Record<string, string>;
  /**
   * Authored path of each value the prescription holds in another form → the canonical path that holds it: a second
   * copy ingest checks and does not keep (a V1 surface's `nd`, held by its `medium`), or the source of an index, flag
   * or reference ingest computes (a V1 conjugate's `focusT`, held by its `keyframe`).
   */
  heldBy: Record<string, string>;
  /** Canonical path of each value in `CanonicalProvenance.ignored` → its authored path and why ingest set it aside. */
  ignored: Record<string, { from: string; kind: IgnoredKind }>;
  /**
   * Authored path of each container the canonical form dissolves → the canonical path its comments move to: V1's
   * `var` and `varLabels` → `gaps`, or `focus` when they hold no gap, `asph` → `surfaces`, the per-station lists →
   * `zoom.stations`, `publishedStations` → `focus.published` on a prime and `zoom.stations` on a zoom, the ring's `var`
   * and `varLabels` → `aberrationControl.gaps`, and each label pair in either → the gap it names.
   */
  homes: Record<string, string>;
  /**
   * A V1 file's first top-level field as written, whatever it holds, whose leading comments lead `schema` in the V2
   * file (ruling 10). Recorded for a V1 source alone: a V2 source keeps its comments at their paths.
   */
  firstField?: string;
}

/** What a caller asks of ingest beyond the prescription and its provenance. */
export interface IngestRequest {
  /** Record where each value was read from, in `CanonicalProvenance.sources`. */
  sources?: boolean;
}

export interface CanonicalProvenance {
  /** Authored format the prescription was ingested from. */
  format: 1 | 2;
  /**
   * Canonical paths whose value the schema supplied because the file did not, e.g. `elements[2].apd`. One entry names
   * a declaration rather than a member: `publishedStations`, the published flags of every station.
   */
  defaulted: string[];
  /**
   * Authored values the engine does not read, by the canonical path where the value would sit: a derived stop's
   * `sd`, a zero aspheric term, a flat radius written as a number (in V1, one other than `1e15`), an authored zoom
   * step that falls back to the default, a conjugate coordinate that only matches its station within tolerance.
   */
  ignored: Record<string, unknown>;
  /**
   * Present on a V1 file: the V1 spellings the canonical form holds once. Without it the V1 view writes the plain V1
   * spelling of those; the values in `ignored` come back for a file of either version.
   */
  v1?: V1Spelling;
  /** Present on a V2 file. */
  v2?: V2Spelling;
  /** Present when the caller asked for source paths. */
  sources?: SourcePaths;
}

/** A prescription with its provenance, as ingest returns it. */
export interface IngestedPrescription<Prescription extends CanonicalPrescription = CanonicalPrescription> {
  prescription: Prescription;
  provenance: CanonicalProvenance;
  /** Composition identity and plate placement, outside authored prescription semantics. */
  attachedTeleconverter?: LensData["attachedTeleconverter"];
}

/**
 * The first place two prescriptions differ, under the semantic fingerprint's rules: numbers bit for bit, except that
 * -0 is 0; member order is ignored, and a member whose value is `undefined` counts as absent; list order counts.
 *
 * @param a - a canonical prescription, or any part of one
 * @param b - another
 * @param at - path of the two values, for the answer
 * @returns the path of the first difference and the two values there, or `undefined` when they are the same
 */
export function prescriptionDifference(a: unknown, b: unknown, at = ""): string | undefined {
  const describe = (value: unknown) => (Object.is(value, -0) ? "-0" : (JSON.stringify(value) ?? String(value)));
  const differ = () => `${at || "(root)"}: ${describe(a)} ≠ ${describe(b)}`;
  if (typeof a === "number" && typeof b === "number") {
    return Object.is(a === 0 ? 0 : a, b === 0 ? 0 : b) ? undefined : differ();
  }
  if (a === null || b === null || typeof a !== "object" || typeof b !== "object") {
    return Object.is(a, b) ? undefined : differ();
  }
  if (Array.isArray(a) !== Array.isArray(b)) return differ();
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return `${at || "(root)"}: ${a.length} items ≠ ${b.length} items`;
    for (let index = 0; index < a.length; index++) {
      const found = prescriptionDifference(a[index], b[index], itemPath(at, index));
      if (found) return found;
    }
    return undefined;
  }
  const left = a as Record<string, unknown>;
  const right = b as Record<string, unknown>;
  const keys = [...new Set([...Object.keys(left), ...Object.keys(right)])].sort();
  for (const key of keys) {
    const found = prescriptionDifference(left[key], right[key], memberPath(at, key));
    if (found) return found;
  }
  return undefined;
}

/** An authored file that cannot be represented canonically, with every reason found. */
export class PrescriptionIngestError extends Error {
  readonly issues: readonly string[];

  constructor(key: string, issues: readonly string[]) {
    super(`Prescription "${key}" cannot be ingested:\n  • ${issues.join("\n  • ")}`);
    this.name = "PrescriptionIngestError";
    this.issues = issues;
  }
}
