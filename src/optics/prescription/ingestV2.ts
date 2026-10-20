/**
 * V2 ingest — maps an authored `schema: 2` lens or teleconverter file onto the canonical prescription, and
 * refuses retired V1 files at the app boundary (`ingestLens`, `ingestTeleconverter`).
 *
 * V2 is the canonical prescription as an author writes it (OPTICS_ENGINE_REWRITE_SPEC.md, Lens data V2), so most of
 * the mapping is a copy. Ingest applies the schema defaults to the fields a file leaves out, gives undrawn media the
 * ids V1 ingest gives them (`m1`, `m2`, … by first use, so a medium's own id and name stay out of the semantic
 * fingerprint), takes a variable gap's first thickness as its surface's `d`, and decides the stop's radius authority.
 *
 * Like V1 ingest it does not validate the prescription, which canonical validation does on diagnostic columns. A V2 file
 * has no validator-first pass, though, so V2 ingest refuses every shape it cannot read itself, along with what the
 * canonical form cannot hold and the rules V2 adds, each at its authored path. The one list of them is
 * the S2.P2.T1 As built of OPTICS_ENGINE_REWRITE_SPEC.md. Every reason found is reported at once, in a
 * `PrescriptionIngestError`, but for `elements` or `surfaces` that is not a list of objects, which stops ingest at
 * once. The input is never modified, and the result shares no object with it. Asked for source paths, ingest records
 * where it read each value (`SourcePaths`); in V2 a value sits at its canonical path, except a medium's, which ingest
 * renumbers, and a gap's, which it keys by surface.
 */

import type {
  AberrationControlV2Input,
  AberrationGapV2Input,
  ApertureV2Input,
  ChecksV2Input,
  ConjugateV2Input,
  ElementV2Input,
  FocusV2Input,
  GapV2Input,
  LayoutV2Input,
  LensCatalogV2Input,
  LensDataV2Input,
  MediumV2Input,
  RaysV2Input,
  SourceV2Input,
  SurfaceV2Input,
  TeleconverterDataV2Input,
  TeleconverterSourceV2Input,
  ZoomStationV2Input,
  ZoomV2Input,
} from "../../types/lensDataV2.js";
import { associateCanonical } from "./identity.js";
import { FLAT_R_THRESHOLD } from "../geometry/surfaceProfile.js";
import { FLAT_RADIUS, PrescriptionIngestError, stopRadiusAuthority } from "./canonical.js";
import type {
  CanonicalAberrationControl,
  CanonicalConjugate,
  CanonicalElement,
  CanonicalFocus,
  CanonicalGap,
  CanonicalLens,
  CanonicalMedium,
  CanonicalSurface,
  CanonicalTeleconverter,
  CanonicalZoom,
  CanonicalZoomStation,
  IngestedPrescription,
  IngestRequest,
  SourcePaths,
  StopRadiusAuthority,
  V2Spelling,
} from "./canonical.js";
import { ELEMENT_SCHEMA_DEFAULTS, LENS_SCHEMA_DEFAULTS } from "./defaults.js";
import type { SchemaDefault } from "./defaults.js";
import {
  copy,
  finish,
  has,
  ingestAsphere,
  ingestRearPlates,
  isNumberList,
  isRecord,
  put,
  recordReads,
  refuseUnknownFields,
  requireFields,
  requireRecords,
  sourcePathsFor,
  takeDefault,
} from "./ingestCommon.js";
import type { IngestContext, Untyped } from "./ingestCommon.js";
import { labelPath } from "./sourcePaths.js";

/** The `schema` value of a V2 file. */
export const LENS_DATA_V2_SCHEMA = 2;

/* ── Field inventories ──
 * Typed as records over the V2 types, so a field added to a V2 type fails the typecheck here until ingest knows it. */

type Fields<Shape> = Readonly<Record<keyof Shape, true>>;

const LENS_FIELDS: Fields<LensDataV2Input> = {
  schema: true,
  key: true,
  maker: true,
  name: true,
  subtitle: true,
  visible: true,
  publishedAt: true,
  catalog: true,
  source: true,
  elements: true,
  media: true,
  surfaces: true,
  zoom: true,
  focus: true,
  gaps: true,
  aperture: true,
  aberrationControl: true,
  projection: true,
  opticalPath: true,
  perspectiveControl: true,
  rearPlates: true,
  groups: true,
  doublets: true,
  layout: true,
  rays: true,
  checks: true,
};

const TELECONVERTER_FIELDS: Fields<TeleconverterDataV2Input> = {
  schema: true,
  key: true,
  maker: true,
  name: true,
  subtitle: true,
  visible: true,
  publishedAt: true,
  catalog: true,
  source: true,
  magnification: true,
  masterImageDistanceMm: true,
  universal: true,
  minHostFNumber: true,
  incompatibleLensKeys: true,
  elements: true,
  media: true,
  surfaces: true,
  rearPlates: true,
  groups: true,
  doublets: true,
};

const LENS_CATALOG_FIELDS: Fields<LensCatalogV2Input> = {
  lensMounts: true,
  imageFormat: true,
  imageCircleMm: true,
  specs: true,
  elementCount: true,
  groupCount: true,
  acceptsTeleconverters: true,
  opticalConfiguration: true,
  focalLengthMm: true,
  fNumber: true,
};

const TELECONVERTER_CATALOG_FIELDS: Fields<TeleconverterDataV2Input["catalog"]> = {
  lensMounts: true,
  specs: true,
  elementCount: true,
  groupCount: true,
};

const MARKETING_DESIGN_FIELDS: Fields<{ marketing: unknown; design: unknown }> = { marketing: true, design: true };

const SOURCE_FIELDS: Fields<SourceV2Input> = {
  patentNumber: true,
  patentYear: true,
  authors: true,
  assignees: true,
  errata: true,
};

/** A converter's source: V1 holds no errata for one. */
const TELECONVERTER_SOURCE_FIELDS: Fields<TeleconverterSourceV2Input> = {
  patentNumber: true,
  patentYear: true,
  authors: true,
  assignees: true,
};

const ELEMENT_FIELDS: Fields<ElementV2Input> = {
  id: true,
  name: true,
  label: true,
  type: true,
  nd: true,
  vd: true,
  indexReference: true,
  indexReferenceNote: true,
  focalLengthMm: true,
  glass: true,
  apd: true,
  apdNote: true,
  role: true,
  diagramLabel: true,
  maxSdRatio: true,
  absorptionCoefficientPerMm: true,
  cemented: true,
  dPgF: true,
  nC: true,
  nF: true,
  ng: true,
  span: true,
};

const MEDIUM_FIELDS: Fields<MediumV2Input> = { id: true, name: true, nd: true };

const SURFACE_FIELDS: Fields<SurfaceV2Input> = {
  label: true,
  R: true,
  d: true,
  sd: true,
  innerSd: true,
  medium: true,
  asphere: true,
  diffractive: true,
  interaction: true,
  stopPlacement: true,
};

const ZOOM_FIELDS: Fields<ZoomV2Input> = { stations: true, apertureModel: true, step: true };

const STATION_FIELDS: Fields<ZoomStationV2Input> = {
  focalLengthMm: true,
  nominalFNumber: true,
  stopSemiDiameter: true,
  closeFocusM: true,
  label: true,
  published: true,
  publishedFocus: true,
};

const FOCUS_FIELDS: Fields<FocusV2Input> = {
  closeFocusM: true,
  keyframes: true,
  step: true,
  description: true,
  conjugates: true,
  published: true,
};

const CONJUGATE_FIELDS: Fields<ConjugateV2Input> = {
  zoomStation: true,
  keyframe: true,
  objectDistanceMm: true,
  distanceReference: true,
  source: true,
};

const GAP_FIELDS: Fields<GapV2Input> = { label: true, values: true };

const ABERRATION_CONTROL_FIELDS: Fields<AberrationControlV2Input> = {
  label: true,
  description: true,
  minLabel: true,
  centerLabel: true,
  maxLabel: true,
  step: true,
  gaps: true,
};

const ABERRATION_GAP_FIELDS: Fields<AberrationGapV2Input> = { label: true, values: true };

const APERTURE_FIELDS: Fields<ApertureV2Input> = {
  nominalFNumber: true,
  fStops: true,
  maxFNumber: true,
  step: true,
  blades: true,
  bladeRoundedness: true,
};

const LAYOUT_FIELDS: Fields<LayoutV2Input> = {
  svgW: true,
  svgH: true,
  scFill: true,
  yScFill: true,
  maxAspectRatio: true,
  lensShiftFrac: true,
};

const RAYS_FIELDS: Fields<RaysV2Input> = {
  rayFractions: true,
  rayLeadFrac: true,
  offAxisFieldFrac: true,
  offAxisFractions: true,
};

const CHECKS_FIELDS: Fields<ChecksV2Input> = { gapSagFrac: true, maxRimAngleDeg: true };

/* ── Context and records ── */

function createContext(request: IngestRequest | undefined): IngestContext {
  return { format: "V2", issues: [], defaulted: [], ignored: {}, sources: sourcePathsFor(request) };
}

/** Record that each listed member of a V2 record was read where it sits, at its canonical path. */
function recordInPlace(sources: SourcePaths, at: string, record: Untyped, fields: readonly string[]): void {
  sources.records[at] = at;
  recordReads(sources, at, at, record, fields);
}

function keyOf(data: Untyped): string {
  return typeof data?.key === "string" ? data.key : "?";
}

/**
 * A nested record of the file, its unknown members refused.
 *
 * @param parent - the record holding it
 * @param field - its member name
 * @param at - authored path of `parent`, empty for the file itself
 * @param known - the members V2 defines on it
 * @param context - collects refusals
 * @returns the record; `undefined` when the file leaves it out, and an empty one when it is not an object
 */
function nested(
  parent: Untyped,
  field: string,
  at: string,
  known: Readonly<Record<string, true>>,
  context: IngestContext,
): Untyped | undefined {
  const value = parent[field];
  if (value === undefined) return undefined;
  const path = at ? `${at}.${field}` : field;
  if (!isRecord(value)) {
    context.issues.push(`${path} must be an object`);
    return {};
  }
  refuseUnknownFields(value, known, path, context);
  if (context.sources) context.sources.records[path] = path;
  return value;
}

/**
 * A list with each hole read as `undefined`, and anything else as it is. Array methods skip a hole, so V2 ingest reads a
 * list through this wherever it checks the entries, and refuses a hole as it refuses `null`.
 */
function everyIndex(value: unknown): unknown {
  return Array.isArray(value) ? Array.from(value) : value;
}

/** Whether `value` is a list of numbers at every index. */
function isNumberListAtEveryIndex(value: unknown): value is number[] {
  return isNumberList(everyIndex(value));
}

/** A list of records at `path`, each one's unknown members refused; `[]` when absent or not a list. */
function records(
  value: unknown,
  path: string,
  known: Readonly<Record<string, true>>,
  context: IngestContext,
): Untyped[] {
  if (value === undefined) return [];
  if (!Array.isArray(value)) {
    context.issues.push(`${path} must be a list`);
    return [];
  }
  if (context.sources) context.sources.records[path] = path;
  return Array.from(value as unknown[], (entry, index) => {
    if (!isRecord(entry)) {
      context.issues.push(`${path}[${index}] must be an object`);
      return {};
    }
    refuseUnknownFields(entry, known, `${path}[${index}]`, context);
    return entry;
  });
}

function lensDefault(path: string): SchemaDefault {
  const row = LENS_SCHEMA_DEFAULTS.find((candidate) => candidate.path === path);
  if (!row) throw new Error(`ingestV2: no lens schema default at "${path}"`);
  return row;
}

/**
 * Read a defaulted lens field from the V2 record that holds it. V2 writes a defaulted field at its canonical path.
 *
 * @param holder - the V2 record, or `undefined` when the file leaves the whole record out
 * @param path - canonical path of the field, e.g. `layout.svgW`
 * @param context - collects the defaulted path and any authored value the default replaces
 * @returns the value the prescription holds
 */
function withDefault(holder: Untyped | undefined, path: string, context: IngestContext): unknown {
  const field = path.slice(path.lastIndexOf(".") + 1);
  return takeDefault(holder?.[field], lensDefault(path), path, context);
}

/** Whether `value` is an integer index in `[first, last]`. */
function isIndexIn(value: unknown, first: number, last: number): value is number {
  return Number.isInteger(value) && (value as number) >= first && (value as number) <= last;
}

/* ── Elements, media and surfaces ── */

/** Element members read as written; the defaulted ones are read through `takeDefault`. */
const ELEMENT_READ_FIELDS = Object.keys(ELEMENT_FIELDS).filter(
  (field) => field !== "indexReference" && field !== "apd",
);

/** Surface members read as written; `d` only where no gap supplies it, and the medium is a reference. */
const SURFACE_READ_FIELDS = ["label", "R", "sd", "innerSd", "diffractive", "interaction", "stopPlacement"];

function ingestElements(
  authored: readonly Untyped[],
  labelIndex: ReadonlyMap<string, number>,
  context: IngestContext,
): CanonicalElement[] {
  const [indexReferenceRow, apdRow] = ELEMENT_SCHEMA_DEFAULTS;
  return authored.map((element, index) => {
    const at = `elements[${index}]`;
    refuseUnknownFields(element, ELEMENT_FIELDS, at, context);
    /* V1 reads an element id of 0 as air, so the V1 view could not hold one. */
    if (!Number.isInteger(element.id) || (element.id as number) < 1) {
      context.issues.push(`${at}.id must be a positive integer`);
    }
    const out: Untyped = { id: element.id, name: element.name, label: element.label, type: element.type };
    out.nd = element.nd;
    put(out, "vd", element.vd);
    out.indexReference = takeDefault(element.indexReference, indexReferenceRow, `${at}.indexReference`, context);
    put(out, "indexReferenceNote", element.indexReferenceNote);
    put(out, "focalLengthMm", element.focalLengthMm);
    put(out, "glass", element.glass);
    out.apd = takeDefault(element.apd, apdRow, `${at}.apd`, context);
    put(out, "apdNote", element.apdNote);
    put(out, "role", element.role);
    put(out, "diagramLabel", element.diagramLabel);
    put(out, "maxSdRatio", element.maxSdRatio);
    put(out, "absorptionCoefficientPerMm", element.absorptionCoefficientPerMm);
    put(out, "cemented", element.cemented);
    for (const field of ["dPgF", "nC", "nF", "ng"]) put(out, field, element[field]);
    if (has(element, "span")) {
      const span = element.span;
      const [from, to] = Array.isArray(span) ? span : [];
      if (!Array.isArray(span) || span.length !== 2 || typeof from !== "string" || typeof to !== "string") {
        context.issues.push(`${at}.span must be [from, to] surface labels`);
      } else if (!labelIndex.has(from) || !labelIndex.has(to)) {
        const missing = labelIndex.has(from) ? to : from;
        context.issues.push(`${at}.span: no surface is labelled "${missing}"`);
      } else if (labelIndex.get(from)! > labelIndex.get(to)!) {
        context.issues.push(`${at}.span runs backwards: "${from}" comes after "${to}"`);
      } else {
        out.span = [from, to];
      }
    }
    if (context.sources) recordInPlace(context.sources, at, out, ELEMENT_READ_FIELDS);
    return out as unknown as CanonicalElement;
  });
}

/** The file's undrawn media, checked, with the canonical id each gets once a surface uses it. */
interface DeclaredMedia {
  readonly byId: ReadonlyMap<string, { index: number; nd: number }>;
  /** Canonical id of each authored id, in order of first use. */
  readonly canonicalIds: Map<string, string>;
  readonly authored: readonly Untyped[];
}

function declareMedia(value: unknown, context: IngestContext): DeclaredMedia {
  const authored = records(value, "media", MEDIUM_FIELDS, context);
  const byId = new Map<string, { index: number; nd: number }>();
  authored.forEach((medium, index) => {
    const at = `media[${index}]`;
    const { id, name, nd } = medium;
    if (name !== undefined && (typeof name !== "string" || name === "")) {
      context.issues.push(`${at}.name must be a non-empty string, or left out`);
    }
    if (typeof id !== "string" || id === "") {
      context.issues.push(`${at}.id must be a non-empty string`);
      return;
    }
    if (typeof nd !== "number") {
      context.issues.push(`${at}.nd must be a number`);
      return;
    }
    const first = byId.get(id);
    const sameIndex = [...byId.values()].find((other) => Object.is(other.nd, nd));
    if (first) context.issues.push(`${at}.id "${id}" repeats media[${first.index}].id`);
    else if (nd === 1) context.issues.push(`${at}.nd is 1, the index of air: leave the surface's medium out`);
    else if (sameIndex) {
      context.issues.push(
        `${at}.nd ${String(nd)} repeats media[${sameIndex.index}].nd: the engine knows an undrawn medium by its index alone`,
      );
    } else byId.set(id, { index, nd });
  });
  return { byId, canonicalIds: new Map(), authored };
}

/** What `ingestSurfaces` needs besides the surfaces. */
interface SurfaceFacts {
  readonly elementIds: ReadonlySet<unknown>;
  readonly media: DeclaredMedia;
  /** First thickness of each variable gap, by surface label. */
  readonly gapThickness: ReadonlyMap<string, number | undefined>;
  /** `undefined` on a teleconverter, which has no stop. */
  readonly stopAuthority: StopRadiusAuthority | undefined;
}

/** Where the radius of a stop that carries no `sd` comes from. */
const UNREAD_STOP_SD: Record<Exclude<StopRadiusAuthority, "authored">, string> = {
  derived: "is derived from the design f-number",
  schedule: "comes from zoom.stations[].stopSemiDiameter",
};

function ingestSurfaces(authored: readonly Untyped[], facts: SurfaceFacts, context: IngestContext): CanonicalSurface[] {
  return authored.map((surface, index) => {
    const at = `surfaces[${index}]`;
    refuseUnknownFields(surface, SURFACE_FIELDS, at, context);
    const label = surface.label as string;
    const out: Untyped = { label };

    const radius = surface.R;
    if (typeof radius === "number" && Math.abs(radius) > FLAT_R_THRESHOLD) {
      /* V2 writes a flat surface as "flat"; a number past the threshold is kept for the views. */
      out.R = FLAT_RADIUS;
      context.ignored[`${at}.R`] = radius;
      if (context.sources) context.sources.ignored[`${at}.R`] = { from: `${at}.R`, kind: "flatRadius" };
    } else {
      out.R = radius;
    }

    if (facts.gapThickness.has(label)) {
      if (has(surface, "d")) {
        context.issues.push(
          `${at}.d: the gap after "${label}" takes its thickness from gaps["${label}"].values, so the surface carries no d`,
        );
      }
      out.d = facts.gapThickness.get(label);
    } else if (has(surface, "d")) {
      out.d = surface.d;
    } else {
      context.issues.push(`${at}.d is required: no entry in gaps supplies it`);
    }

    const authority = label === "STO" ? facts.stopAuthority : undefined;
    if (authority && authority !== "authored" && has(surface, "sd")) {
      context.issues.push(`${at}.sd: the stop's radius ${UNREAD_STOP_SD[authority]}, so the stop carries no sd`);
    } else if (authority === "authored" && !has(surface, "sd")) {
      context.issues.push(`${at}.sd is required: a folded system, or a stop inside glass, keeps its authored radius`);
    }
    put(out, "sd", surface.sd);
    put(out, "innerSd", surface.innerSd);

    const medium = surface.medium;
    if (medium === undefined) {
      out.medium = null;
    } else if (typeof medium === "number") {
      out.medium = medium;
      if (!facts.elementIds.has(medium)) context.issues.push(`${at}.medium: unknown element ${medium}`);
    } else if (typeof medium === "string") {
      if (!facts.media.byId.has(medium)) context.issues.push(`${at}.medium: unknown medium "${medium}"`);
      const ids = facts.media.canonicalIds;
      if (!ids.has(medium)) ids.set(medium, `m${ids.size + 1}`);
      out.medium = ids.get(medium);
    } else {
      context.issues.push(`${at}.medium must be an element id or a media id`);
      out.medium = null;
    }

    if (has(surface, "asphere"))
      out.asphere = ingestAsphere(surface.asphere, `${at}.asphere`, `${at}.asphere`, context);
    put(out, "diffractive", surface.diffractive);
    put(out, "interaction", surface.interaction);
    put(out, "stopPlacement", surface.stopPlacement);
    if (context.sources) {
      recordInPlace(context.sources, at, out, SURFACE_READ_FIELDS);
      if (has(surface, "d")) context.sources.read[`${at}.d`] = `${at}.d`;
      if (out.asphere) context.sources.records[`${at}.asphere`] = `${at}.asphere`;
      if (has(surface, "medium")) context.sources.heldBy[`${at}.medium`] = `${at}.medium`;
    }
    return out as unknown as CanonicalSurface;
  });
}

/** The canonical media, in order of first use, and how the file wrote them; refuses a medium no surface uses. */
function finishMedia(media: DeclaredMedia, context: IngestContext): { media: CanonicalMedium[]; spelling: V2Spelling } {
  const spelling: V2Spelling = { media: [] };
  media.authored.forEach((medium, index) => {
    const id = medium.id as string;
    if (!media.byId.has(id) || media.byId.get(id)!.index !== index) return;
    const canonicalId = media.canonicalIds.get(id);
    if (!canonicalId) {
      context.issues.push(`media[${index}] "${id}" is used by no surface`);
      return;
    }
    const entry: V2Spelling["media"][number] = { canonicalId, id };
    put(entry as unknown as Untyped, "name", medium.name);
    spelling.media.push(entry);
    if (context.sources) {
      /* Ingest numbers media by first use; a medium's name is spelling, kept beside its canonical record. */
      const at = `media[${[...media.canonicalIds.values()].indexOf(canonicalId)}]`;
      context.sources.records[at] = `media[${index}]`;
      context.sources.read[`${at}.nd`] = `media[${index}].nd`;
      if (has(medium, "name")) context.sources.read[`${at}.name`] = `media[${index}].name`;
      context.sources.heldBy[`media[${index}].id`] = `${at}.id`;
    }
  });
  const canonical = [...media.canonicalIds].flatMap(([id, canonicalId]): CanonicalMedium[] => {
    const declared = media.byId.get(id);
    return declared ? [{ id: canonicalId, nd: declared.nd }] : [];
  });
  return { media: canonical, spelling };
}

/** Index of every surface label, refusing a repeat. */
function labelIndexOf(surfaces: readonly Untyped[], context: IngestContext): Map<string, number> {
  const labelIndex = new Map<string, number>();
  surfaces.forEach((surface, index) => {
    const label = surface.label;
    if (typeof label !== "string") {
      context.issues.push(`surfaces[${index}].label must be a string`);
      return;
    }
    const first = labelIndex.get(label);
    if (first !== undefined)
      context.issues.push(`surfaces[${index}].label "${label}" repeats surfaces[${first}].label`);
    else labelIndex.set(label, index);
  });
  return labelIndex;
}

/* ── Gaps ── */

/**
 * Variable gaps in surface order, from a `gaps` record keyed by surface label.
 *
 * @param value - the authored `gaps`
 * @param path - its authored path, `gaps` or `aberrationControl.gaps`
 * @param labelIndex - surface index of each label
 * @param context - collects refusals
 * @returns each gap's surface, display label and values, in surface order
 */
function keyedGaps(
  value: unknown,
  path: string,
  known: Readonly<Record<string, true>>,
  labelIndex: ReadonlyMap<string, number>,
  context: IngestContext,
): { surface: string; label?: string; values: unknown }[] {
  if (value === undefined) return [];
  if (!isRecord(value)) {
    context.issues.push(`${path} must be an object keyed by surface label`);
    return [];
  }
  if (context.sources) context.sources.records[path] = path;
  const gaps: { surface: string; label?: string; values: unknown }[] = [];
  for (const surface of Object.keys(value)) {
    const entry = value[surface];
    if (entry === undefined) continue;
    const at = labelPath(path, surface);
    if (!isRecord(entry)) {
      context.issues.push(`${at} must be an object`);
      continue;
    }
    refuseUnknownFields(entry, known, at, context);
    if (!labelIndex.has(surface)) {
      context.issues.push(`${at}: no surface is labelled "${surface}"`);
      continue;
    }
    if (!has(entry, "values")) context.issues.push(`${at}.values is required`);
    const gap: { surface: string; label?: string; values: unknown } = { surface, values: copy(entry.values) };
    if (has(entry, "label")) {
      if (typeof entry.label === "string") gap.label = entry.label;
      else context.issues.push(`${at}.label must be a string`);
    }
    gaps.push(gap);
  }
  gaps.sort((a, b) => labelIndex.get(a.surface)! - labelIndex.get(b.surface)!);
  if (context.sources) {
    /* The canonical gaps are a list in surface order; the file keys each by its surface. */
    const sources = context.sources;
    gaps.forEach((gap, index) => {
      const from = labelPath(path, gap.surface);
      sources.records[`${path}[${index}]`] = from;
      recordReads(sources, `${path}[${index}]`, from, gap, ["label", "values"]);
    });
  }
  return gaps;
}

function ingestGaps(
  value: unknown,
  stationCount: number,
  keyframeCount: number | undefined,
  labelIndex: ReadonlyMap<string, number>,
  context: IngestContext,
): CanonicalGap[] {
  return keyedGaps(value, "gaps", GAP_FIELDS, labelIndex, context).map((gap) => {
    const at = `${labelPath("gaps", gap.surface)}.values`;
    const rows = everyIndex(gap.values);
    if (rows === undefined) return { ...gap, values: [] } as CanonicalGap;
    if (!Array.isArray(rows) || !rows.every(isNumberListAtEveryIndex)) {
      context.issues.push(`${at} must be one row of thicknesses per zoom station`);
      return { ...gap, values: [] } as CanonicalGap;
    }
    if (rows.length !== stationCount) {
      context.issues.push(
        stationCount === 1
          ? `${at} has ${rows.length} rows, and a prime has one`
          : `${at} has ${rows.length} rows for ${stationCount} zoom stations`,
      );
    }
    rows.forEach((row, station) => {
      if (keyframeCount !== undefined && row.length !== keyframeCount) {
        context.issues.push(`${at}[${station}] has ${row.length} thicknesses for ${keyframeCount} focus keyframes`);
      }
    });
    return gap as CanonicalGap;
  });
}

function ingestAberrationControl(
  control: Untyped,
  labelIndex: ReadonlyMap<string, number>,
  context: IngestContext,
): CanonicalAberrationControl {
  const out: Untyped = { label: control.label };
  for (const field of ["description", "minLabel", "centerLabel", "maxLabel", "step"]) put(out, field, control[field]);
  if (!has(control, "gaps")) context.issues.push(`aberrationControl.gaps is required`);
  out.gaps = keyedGaps(control.gaps, "aberrationControl.gaps", ABERRATION_GAP_FIELDS, labelIndex, context);
  if (context.sources) {
    const fields = ["label", "description", "minLabel", "centerLabel", "maxLabel", "step"];
    recordReads(context.sources, "aberrationControl", "aberrationControl", out, fields);
  }
  return out as unknown as CanonicalAberrationControl;
}

/* ── Zoom stations, focus and published stations ── */

/** Station fields V1 holds on every station or on none. */
const EVERY_STATION_OR_NONE = ["nominalFNumber", "stopSemiDiameter", "closeFocusM"] as const;

/**
 * The zoom record, with the stations as `records` checked them: a station that is not an object is refused there,
 * stands as `{}` for every later reader, and is asked for no field again.
 */
function ingestZoom(zoom: Untyped, context: IngestContext): { zoom: CanonicalZoom; stations: Untyped[] } {
  const stations = records(zoom.stations, "zoom.stations", STATION_FIELDS, context);
  const refused = new Set(
    stations.flatMap((_, index) => (isRecord((zoom.stations as unknown[])[index]) ? [] : [index])),
  );
  const checked = stations.filter((_, index) => !refused.has(index));
  if (stations.length < 2) context.issues.push(`zoom.stations must list at least two stations`);
  const out = stations.map((station, index): CanonicalZoomStation => {
    const at = `zoom.stations[${index}]`;
    if (!refused.has(index) && !has(station, "focalLengthMm")) context.issues.push(`${at}.focalLengthMm is required`);
    const record: Untyped = { focalLengthMm: station.focalLengthMm };
    for (const field of EVERY_STATION_OR_NONE) put(record, field, station[field]);
    put(record, "label", station.label);
    if (context.sources) {
      recordInPlace(context.sources, at, record, ["focalLengthMm", ...EVERY_STATION_OR_NONE, "label"]);
      if (has(station, "published")) context.sources.heldBy[`${at}.published`] = `${at}.published`;
      /* The list is copied as written, so each keyframe index, and a comment on it, keeps its place. */
      if (has(station, "publishedFocus")) context.sources.read[`${at}.publishedFocus`] = `${at}.publishedFocus`;
    }
    return record as unknown as CanonicalZoomStation;
  });

  for (const field of EVERY_STATION_OR_NONE) {
    const set = checked.filter((station) => has(station, field)).length;
    if (set === 0 || set === checked.length) continue;
    stations.forEach((station, index) => {
      if (!refused.has(index) && !has(station, field)) {
        context.issues.push(`zoom.stations[${index}].${field} is missing: set it on every station or on none`);
      }
    });
  }
  /* A refused station counts as fitting whichever labelling the others show. */
  const labelled = stations.map((station, index) => (refused.has(index) ? null : has(station, "label")));
  const last = stations.length - 1;
  const fits = (wanted: (index: number) => boolean) =>
    labelled.every((flag, index) => flag === null || flag === wanted(index));
  if (!fits(() => true) && !fits(() => false) && !fits((index) => index === 0 || index === last)) {
    context.issues.push(`zoom.stations[].label: label every station, or the first and last alone`);
  }

  return {
    zoom: {
      stations: out,
      apertureModel: withDefault(zoom, "zoom.apertureModel", context) as CanonicalZoom["apertureModel"],
      step: withDefault(zoom, "zoom.step", context) as number,
    },
    stations,
  };
}

/** Whether a published-keyframe list holds strictly increasing keyframe indices beyond infinity. */
function isPublishedFocusList(value: unknown, keyframeCount: number): value is number[] {
  return (
    isNumberListAtEveryIndex(value) &&
    value.every((keyframe, at) => isIndexIn(keyframe, 1, keyframeCount - 1) && (at === 0 || keyframe > value[at - 1]))
  );
}

/**
 * Give every zoom station, or a prime's focus, its published flags. A file that writes none takes the schema default,
 * every station published at infinity alone, and provenance records it as defaulted, as it does for V1.
 */
function ingestPublishedStations(
  stations: readonly Untyped[] | undefined,
  zoom: CanonicalZoom | undefined,
  focusRecord: Untyped,
  focus: CanonicalFocus,
  keyframeCount: number | undefined,
  context: IngestContext,
): void {
  /* With the keyframes refused there is no count to hold a published list to, so only its shape is checked. */
  const rule =
    keyframeCount === undefined
      ? "a list of focus keyframe indices"
      : `strictly increasing focus keyframe indices (1..${keyframeCount - 1})`;
  const isPublishedList = (value: unknown) =>
    keyframeCount === undefined ? isNumberListAtEveryIndex(value) : isPublishedFocusList(value, keyframeCount);
  if (!zoom || !stations) {
    if (!has(focusRecord, "published")) context.defaulted.push(lensDefault("publishedStations").path);
    else if (!isPublishedList(focusRecord.published)) {
      context.issues.push(`focus.published must be ${rule}`);
    }
    focus.published = isNumberList(focusRecord.published) ? [...focusRecord.published] : [];
    return;
  }
  if (has(focusRecord, "published")) {
    context.issues.push(`focus.published is a prime field: a zoom's stations carry publishedFocus`);
  }
  const written = stations.some((station) => has(station, "published") || has(station, "publishedFocus"));
  if (!written) context.defaulted.push(lensDefault("publishedStations").path);
  zoom.stations.forEach((station, index) => {
    const at = `zoom.stations[${index}]`;
    const authored = stations[index];
    const flag = authored.published;
    if (flag !== undefined && typeof flag !== "boolean") context.issues.push(`${at}.published must be true or false`);
    station.published = flag !== false;
    const list = authored.publishedFocus;
    if (list !== undefined && !isPublishedList(list)) {
      context.issues.push(`${at}.publishedFocus must be ${rule}`);
    }
    station.publishedFocus = isNumberList(list) ? [...list] : [];
  });
  /* V1 reads a `zoom` list left out or empty as every station, so it cannot say that none is published. */
  if (zoom.stations.length > 0 && zoom.stations.every((station) => !station.published)) {
    context.issues.push(`zoom.stations[].published: no station is published, and a source tabulates at least one`);
  }
}

function ingestConjugates(
  value: unknown,
  stationCount: number,
  keyframeCount: number | undefined,
  context: IngestContext,
): CanonicalConjugate[] {
  return records(value, "focus.conjugates", CONJUGATE_FIELDS, context).map((conjugate, index) => {
    const at = `focus.conjugates[${index}]`;
    const { zoomStation, keyframe } = conjugate;
    if (!isIndexIn(zoomStation, 0, stationCount - 1)) {
      context.issues.push(`${at}.zoomStation ${String(zoomStation)} names no zoom station (0..${stationCount - 1})`);
    }
    if (keyframeCount !== undefined && !isIndexIn(keyframe, 1, keyframeCount - 1)) {
      context.issues.push(
        `${at}.keyframe ${String(keyframe)} names no focus keyframe beyond infinity (1..${keyframeCount - 1})`,
      );
    }
    const out = {
      zoomStation: zoomStation as number,
      keyframe: keyframe as number,
      objectDistanceMm: conjugate.objectDistanceMm as number,
      distanceReference: conjugate.distanceReference as CanonicalConjugate["distanceReference"],
      source: conjugate.source as string,
    };
    if (context.sources) {
      recordInPlace(context.sources, at, out, ["objectDistanceMm", "distanceReference", "source"]);
      context.sources.heldBy[`${at}.zoomStation`] = `${at}.zoomStation`;
      context.sources.heldBy[`${at}.keyframe`] = `${at}.keyframe`;
    }
    return out;
  });
}

/* ── Catalog and source ── */

function ingestLensCatalog(data: Untyped, context: IngestContext): Untyped {
  const catalog = nested(data, "catalog", "", LENS_CATALOG_FIELDS, context) ?? {};
  const out: Untyped = {};
  for (const field of [
    "lensMounts",
    "imageFormat",
    "imageCircleMm",
    "specs",
    "elementCount",
    "groupCount",
    "acceptsTeleconverters",
    "opticalConfiguration",
  ]) {
    put(out, field, catalog[field]);
  }
  if (context.sources) recordReads(context.sources, "catalog", "catalog", out, Object.keys(out));
  for (const field of ["focalLengthMm", "fNumber"]) {
    const range = nested(catalog, field, "catalog", MARKETING_DESIGN_FIELDS, context);
    if (!range || (!has(range, "marketing") && !has(range, "design"))) continue;
    const copied: Untyped = {};
    put(copied, "marketing", range.marketing);
    put(copied, "design", range.design);
    out[field] = copied;
    if (context.sources) {
      recordReads(context.sources, `catalog.${field}`, `catalog.${field}`, copied, ["marketing", "design"]);
    }
  }
  return out;
}

function ingestSource(data: Untyped, known: Readonly<Record<string, true>>, context: IngestContext): Untyped {
  const source = nested(data, "source", "", known, context) ?? {};
  const out: Untyped = {};
  for (const field of Object.keys(known)) put(out, field, source[field]);
  if (context.sources) recordReads(context.sources, "source", "source", out, Object.keys(out));
  return out;
}

/** Identity members, as both prescriptions start. */
function identity(data: Untyped, out: Untyped): void {
  out.key = data.key;
  if (has(data, "maker")) out.maker = data.maker;
  out.name = data.name;
  put(out, "subtitle", data.subtitle);
}

function refuseOtherSchema(data: Untyped, context: IngestContext): void {
  if (data.schema !== LENS_DATA_V2_SCHEMA) {
    context.issues.push(`schema must be ${LENS_DATA_V2_SCHEMA} in a V2 file, not ${JSON.stringify(data.schema)}`);
  }
  /* The prescription holds the version as its format, and the V2 view writes it back as `schema`. */
  if (context.sources && has(data, "schema")) context.sources.heldBy.schema = "schema";
}

/* ── Prescriptions ── */

/**
 * Ingest a V2 lens file.
 *
 * @param input - the file's default export, as authored
 * @param request - what to record beyond the prescription: source paths, for the converter
 * @returns the canonical prescription and its provenance
 * @throws PrescriptionIngestError naming every reason the canonical form cannot hold the file, at its authored path
 */
export function ingestLensV2(input: LensDataV2Input, request?: IngestRequest): IngestedPrescription<CanonicalLens> {
  const data = input as unknown as Untyped;
  const key = keyOf(data);
  const context = createContext(request);
  refuseUnknownFields(data, LENS_FIELDS, "", context);
  refuseOtherSchema(data, context);
  requireFields(data, ["key", "name", "focus", "aperture", "layout"], "", context);
  const authoredElements = requireRecords({ elements: everyIndex(data.elements) }, "elements", key);
  const authoredSurfaces = requireRecords({ surfaces: everyIndex(data.surfaces) }, "surfaces", key);
  const labelIndex = labelIndexOf(authoredSurfaces, context);

  const zoomRecord = nested(data, "zoom", "", ZOOM_FIELDS, context);
  const zoomRead = zoomRecord ? ingestZoom(zoomRecord, context) : undefined;
  const zoom = zoomRead?.zoom;
  const stationCount = zoom?.stations.length ?? 1;

  const focusRecord = nested(data, "focus", "", FOCUS_FIELDS, context) ?? {};
  requireFields(focusRecord, ["closeFocusM"], "focus", context);
  const keyframes = withDefault(focusRecord, "focus.keyframes", context);
  /* Counted once, from the checked list. A refused list leaves the count unknown, and nothing is counted against it. */
  const keyframeCount = isNumberListAtEveryIndex(keyframes) && keyframes.length >= 2 ? keyframes.length : undefined;
  if (keyframeCount === undefined) context.issues.push(`focus.keyframes must be a list of at least two numbers`);
  const focus: CanonicalFocus = {
    closeFocusM: focusRecord.closeFocusM as number,
    keyframes: keyframeCount === undefined ? [] : (keyframes as number[]),
    step: withDefault(focusRecord, "focus.step", context) as number,
  };
  put(focus as unknown as Untyped, "description", focusRecord.description);
  if (context.sources) {
    recordReads(context.sources, "focus", "focus", focus as unknown as Untyped, ["closeFocusM", "description"]);
    /* The list is copied as written, so each keyframe index, and a comment on it, keeps its place. */
    if (has(focusRecord, "published")) context.sources.read["focus.published"] = "focus.published";
  }
  if (has(focusRecord, "conjugates")) {
    focus.conjugates = ingestConjugates(focusRecord.conjugates, stationCount, keyframeCount, context);
  }
  ingestPublishedStations(zoomRead?.stations, zoom, focusRecord, focus, keyframeCount, context);

  const surfaceInteractions = authoredSurfaces.map((surface) => surface.interaction as { type?: unknown } | undefined);
  const stopAuthority = stopRadiusAuthority({
    folded: Boolean(data.opticalPath || surfaceInteractions.some((it) => it && it.type !== "refract")),
    hasSchedule: zoom?.stations.some((station) => station.stopSemiDiameter !== undefined) ?? false,
    stopInsideElement: authoredSurfaces.some(
      (surface) => surface.label === "STO" && surface.stopPlacement === "inside-element",
    ),
  });

  const elements = ingestElements(authoredElements, labelIndex, context);
  const declaredMedia = declareMedia(data.media, context);
  const gaps = ingestGaps(data.gaps, stationCount, keyframeCount, labelIndex, context);
  const surfaces = ingestSurfaces(
    authoredSurfaces,
    {
      elementIds: new Set(authoredElements.map((element) => element.id)),
      media: declaredMedia,
      gapThickness: new Map(gaps.map((gap) => [gap.surface, gap.values[0]?.[0]])),
      stopAuthority,
    },
    context,
  );
  const { media, spelling } = finishMedia(declaredMedia, context);

  const apertureRecord = nested(data, "aperture", "", APERTURE_FIELDS, context) ?? {};
  requireFields(apertureRecord, ["fStops"], "aperture", context);
  const perStationFNumber = zoom?.stations.some((station) => station.nominalFNumber !== undefined) ?? false;
  if (perStationFNumber && has(apertureRecord, "nominalFNumber")) {
    context.issues.push(`aperture.nominalFNumber is set beside zoom.stations[].nominalFNumber: state one`);
  } else if (!perStationFNumber && !has(apertureRecord, "nominalFNumber")) {
    context.issues.push(
      zoom
        ? `aperture.nominalFNumber is required, or zoom.stations[].nominalFNumber on every station`
        : `aperture.nominalFNumber is required`,
    );
  }
  const aperture: Untyped = {};
  put(aperture, "nominalFNumber", apertureRecord.nominalFNumber);
  aperture.fStops = copy(apertureRecord.fStops);
  aperture.maxFNumber = withDefault(apertureRecord, "aperture.maxFNumber", context);
  aperture.step = withDefault(apertureRecord, "aperture.step", context);
  put(aperture, "blades", apertureRecord.blades);
  put(aperture, "bladeRoundedness", apertureRecord.bladeRoundedness);
  aperture.stopRadius = stopAuthority;
  if (context.sources) {
    const fields = ["nominalFNumber", "fStops", "blades", "bladeRoundedness"];
    recordReads(context.sources, "aperture", "aperture", aperture, fields);
  }

  const layoutRecord = nested(data, "layout", "", LAYOUT_FIELDS, context) ?? {};
  requireFields(layoutRecord, ["yScFill"], "layout", context);
  const holders: Record<string, Untyped | undefined> = {
    layout: layoutRecord,
    rays: nested(data, "rays", "", RAYS_FIELDS, context),
    checks: nested(data, "checks", "", CHECKS_FIELDS, context),
  };
  const display: Record<string, Untyped> = { layout: {}, rays: {}, checks: {} };
  for (const row of LENS_SCHEMA_DEFAULTS) {
    const [group, field] = row.path.split(".");
    if (display[group]) display[group][field] = withDefault(holders[group], row.path, context);
  }
  display.layout.yScFill = layoutRecord.yScFill;

  const lens: Untyped = { kind: "lens" };
  identity(data, lens);
  lens.visible = withDefault(data, "visible", context);
  put(lens, "publishedAt", data.publishedAt);
  lens.catalog = ingestLensCatalog(data, context);
  lens.source = ingestSource(data, SOURCE_FIELDS, context);
  lens.elements = elements;
  lens.media = media;
  lens.surfaces = surfaces;
  if (zoom) lens.zoom = zoom;
  lens.focus = focus;
  lens.gaps = gaps;
  lens.aperture = aperture;
  const control = nested(data, "aberrationControl", "", ABERRATION_CONTROL_FIELDS, context);
  if (control) lens.aberrationControl = ingestAberrationControl(control, labelIndex, context);
  for (const field of ["projection", "opticalPath", "perspectiveControl"]) put(lens, field, data[field]);
  if (has(data, "rearPlates")) lens.rearPlates = ingestRearPlates(everyIndex(data.rearPlates), context);
  put(lens, "groups", data.groups);
  put(lens, "doublets", data.doublets);
  lens.layout = display.layout;
  lens.rays = display.rays;
  lens.checks = display.checks;
  if (context.sources) {
    const sources = context.sources;
    recordInPlace(sources, "", lens, ["key", "maker", "name", "subtitle", "publishedAt"]);
    recordReads(sources, "", "", lens, ["projection", "opticalPath", "perspectiveControl", "groups", "doublets"]);
    sources.records.elements = "elements";
    sources.records.surfaces = "surfaces";
    sources.read["layout.yScFill"] = "layout.yScFill";
  }
  return finish(key, lens as unknown as CanonicalLens, context, { format: 2, v2: spelling });
}

/**
 * Ingest a V2 teleconverter file. A converter has no stop, states or display, and takes no lens defaults; its
 * elements and plates take theirs.
 *
 * @param input - the file's default export, as authored
 * @param request - what to record beyond the prescription: source paths, for the converter
 * @returns the canonical prescription and its provenance
 * @throws PrescriptionIngestError naming every reason the canonical form cannot hold the file, at its authored path
 */
export function ingestTeleconverterV2(
  input: TeleconverterDataV2Input,
  request?: IngestRequest,
): IngestedPrescription<CanonicalTeleconverter> {
  const data = input as unknown as Untyped;
  const key = keyOf(data);
  const context = createContext(request);
  refuseUnknownFields(data, TELECONVERTER_FIELDS, "", context);
  refuseOtherSchema(data, context);
  requireFields(data, ["key", "name", "catalog", "magnification", "masterImageDistanceMm"], "", context);
  const authoredElements = requireRecords({ elements: everyIndex(data.elements) }, "elements", key);
  const authoredSurfaces = requireRecords({ surfaces: everyIndex(data.surfaces) }, "surfaces", key);
  const labelIndex = labelIndexOf(authoredSurfaces, context);

  const elements = ingestElements(authoredElements, labelIndex, context);
  const declaredMedia = declareMedia(data.media, context);
  const surfaces = ingestSurfaces(
    authoredSurfaces,
    {
      elementIds: new Set(authoredElements.map((element) => element.id)),
      media: declaredMedia,
      gapThickness: new Map(),
      stopAuthority: undefined,
    },
    context,
  );
  const { media, spelling } = finishMedia(declaredMedia, context);

  const catalogRecord = nested(data, "catalog", "", TELECONVERTER_CATALOG_FIELDS, context) ?? {};
  requireFields(catalogRecord, ["lensMounts"], "catalog", context);
  if (!Array.isArray(catalogRecord.lensMounts)) context.issues.push("catalog.lensMounts must be an array");
  const catalog: Untyped = { lensMounts: copy(catalogRecord.lensMounts) };
  for (const field of ["specs", "elementCount", "groupCount"]) put(catalog, field, catalogRecord[field]);
  if (context.sources) recordReads(context.sources, "catalog", "catalog", catalog, Object.keys(catalog));

  const converter: Untyped = { kind: "teleconverter" };
  identity(data, converter);
  put(converter, "visible", data.visible);
  put(converter, "publishedAt", data.publishedAt);
  converter.catalog = catalog;
  converter.source = ingestSource(data, TELECONVERTER_SOURCE_FIELDS, context);
  converter.magnification = data.magnification;
  converter.masterImageDistanceMm = data.masterImageDistanceMm;
  put(converter, "universal", data.universal);
  put(converter, "minHostFNumber", data.minHostFNumber);
  put(converter, "incompatibleLensKeys", data.incompatibleLensKeys);
  converter.elements = elements;
  converter.media = media;
  converter.surfaces = surfaces;
  if (has(data, "rearPlates")) converter.rearPlates = ingestRearPlates(everyIndex(data.rearPlates), context);
  put(converter, "groups", data.groups);
  put(converter, "doublets", data.doublets);
  if (context.sources) {
    const sources = context.sources;
    recordInPlace(sources, "", converter, ["key", "maker", "name", "subtitle", "visible", "publishedAt"]);
    const fields = ["magnification", "masterImageDistanceMm", "universal", "minHostFNumber", "incompatibleLensKeys"];
    recordReads(sources, "", "", converter, [...fields, "groups", "doublets"]);
    sources.records.elements = "elements";
    sources.records.surfaces = "surfaces";
  }
  return finish(key, converter as unknown as CanonicalTeleconverter, context, { format: 2, v2: spelling });
}

/* ── Version detection and V2-only app ingest ── */

function schemaOf(input: object): unknown {
  return (input as { schema?: unknown } | null | undefined)?.schema;
}

/**
 * Whether a lens or teleconverter file is V1: one that leaves `schema` out. The permanent converter dispatcher
 * and version detection share this rule; the app barrel exposes only `lensDataVersion`.
 *
 * @param input - a file's default export, as authored
 * @returns true for a V1 file; a file with any `schema` is not one
 */
export function isV1File<File extends object>(input: File): input is Exclude<File, { schema: unknown }> {
  return schemaOf(input) === undefined;
}

/**
 * The lens-data version of a file, by the same rule: 1 for a file that leaves `schema` out, 2 for `schema: 2`, and
 * none for any other `schema`, which app ingest and the converter refuse. The converter leaves a file already at
 * the requested version as it is, and refuses a file of no version.
 *
 * @param input - a file's default export, as authored
 * @returns the file's version, or `undefined` when its `schema` names none
 */
export function lensDataVersion(input: object): 1 | 2 | undefined {
  if (isV1File(input)) return 1;
  return schemaOf(input) === LENS_DATA_V2_SCHEMA ? 2 : undefined;
}

/** Refuse retired or unknown file formats before any authored data is mapped. */
function requireV2(input: unknown, kind: "lens" | "teleconverter", request?: IngestRequest): void {
  if (input === null || typeof input !== "object" || Array.isArray(input)) {
    throw new PrescriptionIngestError("?", ["input is not lens data: expected a lens-data object"]);
  }
  if (lensDataVersion(input) === 2) return;
  const path = request?.path;
  const key = keyOf(input as Untyped);
  const schema = schemaOf(input);
  throw new PrescriptionIngestError(keyOf(input as Untyped), [
    schema === undefined
      ? path
        ? `V1 file ${JSON.stringify(path)} is no longer accepted by the app; run npm run convert:lens-data -- --input ${JSON.stringify(path)} --write`
        : `V1 ${kind} data (key ${JSON.stringify(key)}) is no longer accepted by the app; run the converter on its .${kind === "lens" ? "data" : "teleconverter"}.ts file with npm run convert:lens-data`
      : `schema ${JSON.stringify(schema)} is no lens-data version: write ${LENS_DATA_V2_SCHEMA}`,
  ]);
}

/** Ingest an authored V2 lens; archived V1 files belong to the permanent converter. */
export function ingestLens(input: LensDataV2Input, request?: IngestRequest): IngestedPrescription<CanonicalLens> {
  requireV2(input, "lens", request);
  const ingested = ingestLensV2(input, request);
  associateCanonical(ingested.prescription, ingested);
  return ingested;
}

/** Ingest an authored V2 teleconverter. */
export function ingestTeleconverter(
  input: TeleconverterDataV2Input,
  request?: IngestRequest,
): IngestedPrescription<CanonicalTeleconverter> {
  requireV2(input, "teleconverter", request);
  return ingestTeleconverterV2(input, request);
}
