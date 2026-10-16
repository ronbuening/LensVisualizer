/**
 * V2 view — writes a canonical prescription as the default export of a `schema: 2` lens or teleconverter file, and
 * says where each part of that file came from.
 *
 * The converter (`scripts/lens-data-convert/`) prints what this view writes, and nothing in the app imports it. The
 * view writes each record's fields in the declaration order of the V2 types (`types/lensDataV2.ts`), names the
 * top-level members that open a group of the file (`V2_GROUP_STARTS`), leaves out a field the source left to the
 * schema, and keeps what provenance says the source wrote that the prescription holds otherwise:
 * - from either version, a flat radius written as a number other than `1e15`, and an authored stand-in for a default;
 * - from a V2 source, its media's ids, names and order, and its zero aspheric terms. A V1 source's zero terms are
 *   padding its format required, so they are dropped, and so is the radius of a stop the engine derives.
 *
 * Given a `V2Writes` collector, the view records the canonical path behind each node it writes. `v2SourceMap`
 * composes that with the source paths ingest recorded, which is how the converter carries each comment and each
 * literal's text from the source to the node it became. Gaps are written in surface order, and the record says so,
 * because a JavaScript object lists integer-like keys first.
 */

import { ASPHERIC_COEFFICIENT_SCHEMA } from "../../types/asphericSchema.js";
import type { LensDataV2Input, TeleconverterDataV2Input } from "../../types/lensDataV2.js";
import {
  FLAT_RADIUS,
  type CanonicalElement,
  type CanonicalLens,
  type CanonicalMedium,
  type CanonicalPrescription,
  type CanonicalRearPlate,
  type CanonicalSurface,
  type CanonicalTeleconverter,
  type IgnoredKind,
  type IngestedPrescription,
  type SourcePaths,
} from "./canonical.js";
import { V1_FLAT_RADIUS } from "./ingestV1.js";
import { childPath, follow, inverse, itemPath, labelPath, memberPath, parentPath } from "./sourcePaths.js";

type Untyped = Record<string, unknown>;

/** What the view records as it writes, when the caller asks. */
export interface V2Writes {
  /** V2 path of each record, value or copied subtree written → the canonical path it was written from. */
  from: Record<string, string>;
  /** V2 paths at which the view copied a canonical subtree whole: a node below one comes from below its source. */
  subtrees: string[];
  /** Members of each record written, by V2 path, in the order written. */
  order: Record<string, string[]>;
  /** Canonical path of each value ingest set aside that the view wrote back, as the source wrote it. */
  restored: string[];
}

/** An empty collector for `toLensDataV2Input` and `toTeleconverterDataV2Input`. */
export function v2Writes(): V2Writes {
  return { from: {}, subtrees: [], order: {}, restored: [] };
}

/* ── Writing ── */

/** Writes V2 records and records where each member came from. */
class Writer {
  readonly ingested: IngestedPrescription;
  readonly writes: V2Writes | undefined;

  constructor(ingested: IngestedPrescription, writes: V2Writes | undefined) {
    this.ingested = ingested;
    this.writes = writes;
  }

  /**
   * Write one member; a record or list value is copied whole, as a subtree of its canonical source. A function or a
   * symbol goes through `structuredClone` too, which refuses it.
   */
  put(target: Untyped, at: string, field: string, value: unknown, from?: string): void {
    if (value === undefined) return;
    const isTree = value !== null && typeof value === "object";
    const kind = typeof value;
    target[field] = isTree || kind === "function" || kind === "symbol" ? structuredClone(value) : value;
    this.note(at, field, from, isTree);
  }

  /** Write the listed members a canonical record holds, under the same names. */
  copy(target: Untyped, at: string, source: object, from: string, fields: readonly string[]): void {
    for (const field of fields) {
      this.put(target, at, field, (source as Untyped)[field], memberPath(from, field));
    }
  }

  /** Start a record member, recorded as built from the canonical record at `from`. */
  record(target: Untyped, at: string, field: string, from?: string): Untyped {
    const record: Untyped = {};
    target[field] = record;
    this.note(at, field, from, false);
    return record;
  }

  /** Start a list member. */
  list(target: Untyped, at: string, field: string, from?: string): unknown[] {
    const list: unknown[] = [];
    target[field] = list;
    this.note(at, field, from, false);
    return list;
  }

  /** Record the item a list just received. */
  item(at: string, index: number, from: string): void {
    if (this.writes) this.writes.from[itemPath(at, index)] = from;
  }

  /**
   * Write a field the schema defaults: left out when the source left it to the schema, unless the source wrote a
   * stand-in for the default, which is written back.
   */
  defaulted(target: Untyped, at: string, field: string, value: unknown, path: string): void {
    const { defaulted, ignored } = this.ingested.provenance;
    if (!defaulted.includes(path)) this.put(target, at, field, value, path);
    else if (ignored[path] !== undefined) this.restore(target, at, field, path);
  }

  /** Write back a value ingest set aside, as the source wrote it. */
  restore(target: Untyped, at: string, field: string, path: string): void {
    this.put(target, at, field, this.ingested.provenance.ignored[path], path);
    this.writes?.restored.push(path);
  }

  private note(at: string, field: string, from: string | undefined, isTree: boolean): void {
    if (!this.writes) return;
    const path = childPath(at, field);
    (this.writes.order[at] ??= []).push(field);
    if (from === undefined) return;
    this.writes.from[path] = from;
    if (isTree) this.writes.subtrees.push(path);
  }
}

/** Drop a record that received no member, as the V2 types let a file leave it out. */
function dropIfEmpty(target: Untyped, at: string, field: string, writes: V2Writes | undefined): void {
  const record = target[field] as Untyped;
  if (Object.keys(record).length > 0) return;
  delete target[field];
  if (!writes) return;
  const path = childPath(at, field);
  delete writes.from[path];
  delete writes.order[path];
  writes.order[at] = writes.order[at].filter((member) => member !== field);
}

const ELEMENT_FIELDS_BEFORE_INDEX_REFERENCE = ["id", "name", "label", "type", "nd", "vd"] as const;
const ELEMENT_FIELDS_BEFORE_APD = ["indexReferenceNote", "focalLengthMm", "glass"] as const;
const ELEMENT_FIELDS_AFTER_APD = [
  "apdNote",
  "role",
  "diagramLabel",
  "maxSdRatio",
  "absorptionCoefficientPerMm",
  "cemented",
  "dPgF",
  "nC",
  "nF",
  "ng",
  "span",
] as const;

function writeElements(write: Writer, out: Untyped, elements: readonly CanonicalElement[]): void {
  const list = write.list(out, "", "elements", "elements");
  elements.forEach((element, index) => {
    const at = itemPath("elements", index);
    const record: Untyped = {};
    list.push(record);
    write.item("elements", index, at);
    write.copy(record, at, element, at, ELEMENT_FIELDS_BEFORE_INDEX_REFERENCE);
    write.defaulted(record, at, "indexReference", element.indexReference, `${at}.indexReference`);
    write.copy(record, at, element, at, ELEMENT_FIELDS_BEFORE_APD);
    write.defaulted(record, at, "apd", element.apd, `${at}.apd`);
    write.copy(record, at, element, at, ELEMENT_FIELDS_AFTER_APD);
  });
}

/**
 * The V2 id of each canonical medium, and the media in the order the file lists them: a V2 source's own, a V1
 * source's in canonical order under their canonical ids.
 */
function writeMedia(write: Writer, out: Untyped, media: readonly CanonicalMedium[]): Map<string, string> {
  const spelled =
    write.ingested.provenance.v2?.media ?? media.map((medium) => ({ canonicalId: medium.id, id: medium.id }));
  const ids = new Map<string, string>();
  if (spelled.length === 0) return ids;
  const list = write.list(out, "", "media", "media");
  spelled.forEach((entry, index) => {
    const canonicalIndex = media.findIndex((medium) => medium.id === entry.canonicalId);
    const from = itemPath("media", canonicalIndex);
    const at = itemPath("media", index);
    const record: Untyped = {};
    list.push(record);
    write.item("media", index, from);
    write.put(record, at, "id", entry.id, `${from}.id`);
    write.put(record, at, "name", (entry as { name?: string }).name, `${from}.name`);
    write.put(record, at, "nd", media[canonicalIndex].nd, `${from}.nd`);
    ids.set(entry.canonicalId, entry.id);
  });
  return ids;
}

function writeSurfaces(
  write: Writer,
  out: Untyped,
  surfaces: readonly CanonicalSurface[],
  gapSurfaces: ReadonlySet<string>,
  mediumIds: ReadonlyMap<string, string>,
): void {
  const { format, ignored } = write.ingested.provenance;
  const list = write.list(out, "", "surfaces", "surfaces");
  surfaces.forEach((surface, index) => {
    const at = itemPath("surfaces", index);
    const record: Untyped = {};
    list.push(record);
    write.item("surfaces", index, at);
    write.put(record, at, "label", surface.label, `${at}.label`);
    /* A flat radius the source wrote as a number other than V1's 1e15 stays that number; V2 ingest reads it as flat. */
    const written = ignored[`${at}.R`];
    const keepNumber = surface.R === FLAT_RADIUS && typeof written === "number" && !Object.is(written, V1_FLAT_RADIUS);
    if (keepNumber) write.restore(record, at, "R", `${at}.R`);
    else write.put(record, at, "R", surface.R, `${at}.R`);
    if (!gapSurfaces.has(surface.label)) write.put(record, at, "d", surface.d, `${at}.d`);
    write.copy(record, at, surface, at, ["sd", "innerSd"]);
    if (surface.medium !== null) {
      const medium = typeof surface.medium === "string" ? mediumIds.get(surface.medium) : surface.medium;
      write.put(record, at, "medium", medium, `${at}.medium`);
    }
    if (surface.asphere) {
      const asphereAt = `${at}.asphere`;
      const asphere = write.record(record, at, "asphere", asphereAt);
      for (const { key } of ASPHERIC_COEFFICIENT_SCHEMA) {
        const path = `${asphereAt}.${key}`;
        /* A V1 file had to write every term, so a zero there is padding; a V2 file wrote its zeros on purpose. */
        if (format === 2 && ignored[path] !== undefined) write.restore(asphere, asphereAt, key, path);
        else write.put(asphere, asphereAt, key, (surface.asphere as Untyped)[key], path);
      }
    }
    write.copy(record, at, surface, at, ["diffractive", "interaction", "stopPlacement"]);
  });
}

function writeRearPlates(write: Writer, out: Untyped, plates: readonly CanonicalRearPlate[] | undefined): void {
  if (!plates) return;
  const list = write.list(out, "", "rearPlates", "rearPlates");
  plates.forEach((plate, index) => {
    const at = itemPath("rearPlates", index);
    const record: Untyped = {};
    list.push(record);
    write.item("rearPlates", index, at);
    write.copy(record, at, plate, at, ["label", "thicknessMm", "nd", "vd", "glass"]);
    write.defaulted(record, at, "indexReference", plate.indexReference, `${at}.indexReference`);
    write.copy(record, at, plate, at, ["dPgF", "nC", "nF", "ng", "gapAfterMm", "sd", "source"]);
  });
}

/** Gaps keyed by surface label, in surface order. */
function writeGaps(
  write: Writer,
  target: Untyped,
  at: string,
  field: string,
  gaps: readonly { surface: string; label?: string; values: unknown }[],
): void {
  const from = memberPath(at, field);
  const record = write.record(target, at, field, from);
  gaps.forEach((gap, index) => {
    const gapFrom = itemPath(from, index);
    const gapAt = labelPath(from, gap.surface);
    const entry = write.record(record, from, gap.surface, gapFrom);
    write.copy(entry, gapAt, gap, gapFrom, ["label", "values"]);
  });
}

/**
 * Top-level members that open a group of a V2 lens or teleconverter file, in the order the view writes them; the
 * converter prints a blank line before each.
 */
export const V2_GROUP_STARTS: readonly string[] = [
  "catalog",
  "source",
  "magnification",
  "elements",
  "media",
  "surfaces",
  "zoom",
  "focus",
  "gaps",
  "aperture",
  "aberrationControl",
  "projection",
  "opticalPath",
  "perspectiveControl",
  "rearPlates",
  "groups",
  "layout",
  "rays",
  "checks",
];

/**
 * Lists of a V2 file whose rows keep a blank line their source had, before the row or before one of its leading
 * comments; the converter breaks such a list across lines when one does.
 */
export const V2_ROW_LISTS: readonly string[] = ["surfaces", "elements"];

function writeIdentity(write: Writer, out: Untyped, prescription: CanonicalPrescription, visiblePath?: string): void {
  /* Written from the format, under its own path, where a V2 source's `schema` is held. */
  write.put(out, "", "schema", 2, "schema");
  write.copy(out, "", prescription, "", ["key"]);
  if (Object.hasOwn(prescription, "maker")) write.copy(out, "", prescription, "", ["maker"]);
  write.copy(out, "", prescription, "", ["name", "subtitle"]);
  if (visiblePath) write.defaulted(out, "", "visible", prescription.visible, visiblePath);
  else write.copy(out, "", prescription, "", ["visible"]);
  write.copy(out, "", prescription, "", ["publishedAt"]);
}

function writeSource(write: Writer, out: Untyped, prescription: CanonicalPrescription): void {
  const source = write.record(out, "", "source", "source");
  write.copy(source, "source", prescription.source, "source", ["patentNumber", "patentYear", "authors", "assignees"]);
  write.copy(source, "source", prescription.source, "source", ["errata"]);
  dropIfEmpty(out, "", "source", write.writes);
}

function writeLens(write: Writer, lens: CanonicalLens): Untyped {
  const out: Untyped = {};
  if (write.writes) write.writes.from[""] = "";
  writeIdentity(write, out, lens, "visible");

  const catalog = write.record(out, "", "catalog", "catalog");
  write.copy(catalog, "catalog", lens.catalog, "catalog", [
    "lensMounts",
    "imageFormat",
    "imageCircleMm",
    "specs",
    "elementCount",
    "groupCount",
    "acceptsTeleconverters",
    "opticalConfiguration",
  ]);
  for (const range of ["focalLengthMm", "fNumber"] as const) {
    const values = lens.catalog[range];
    if (!values) continue;
    const record = write.record(catalog, "catalog", range, `catalog.${range}`);
    write.copy(record, `catalog.${range}`, values, `catalog.${range}`, ["marketing", "design"]);
  }
  dropIfEmpty(out, "", "catalog", write.writes);
  writeSource(write, out, lens);

  writeElements(write, out, lens.elements);
  const mediumIds = writeMedia(write, out, lens.media);
  writeSurfaces(write, out, lens.surfaces, new Set(lens.gaps.map((gap) => gap.surface)), mediumIds);

  const publishedDefaulted = write.ingested.provenance.defaulted.includes("publishedStations");
  if (lens.zoom) {
    const zoom = write.record(out, "", "zoom", "zoom");
    const stations = write.list(zoom, "zoom", "stations", "zoom.stations");
    lens.zoom.stations.forEach((station, index) => {
      const at = itemPath("zoom.stations", index);
      const record: Untyped = {};
      stations.push(record);
      write.item("zoom.stations", index, at);
      write.copy(record, at, station, at, ["focalLengthMm", "nominalFNumber", "stopSemiDiameter", "closeFocusM"]);
      write.copy(record, at, station, at, ["label"]);
      /* V1 reads a published list left out as every station; V2 states each station's flag. */
      if (publishedDefaulted) return;
      write.copy(record, at, station, at, ["published"]);
      if (station.publishedFocus.length > 0) write.copy(record, at, station, at, ["publishedFocus"]);
    });
    write.defaulted(zoom, "zoom", "apertureModel", lens.zoom.apertureModel, "zoom.apertureModel");
    write.defaulted(zoom, "zoom", "step", lens.zoom.step, "zoom.step");
  }

  const focus = write.record(out, "", "focus", "focus");
  write.copy(focus, "focus", lens.focus, "focus", ["closeFocusM"]);
  write.defaulted(focus, "focus", "keyframes", lens.focus.keyframes, "focus.keyframes");
  write.defaulted(focus, "focus", "step", lens.focus.step, "focus.step");
  write.copy(focus, "focus", lens.focus, "focus", ["description"]);
  if (lens.focus.conjugates) {
    const conjugates = write.list(focus, "focus", "conjugates", "focus.conjugates");
    lens.focus.conjugates.forEach((conjugate, index) => {
      const at = itemPath("focus.conjugates", index);
      const record: Untyped = {};
      conjugates.push(record);
      write.item("focus.conjugates", index, at);
      write.copy(record, at, conjugate, at, ["zoomStation", "keyframe", "objectDistanceMm", "distanceReference"]);
      write.copy(record, at, conjugate, at, ["source"]);
    });
  }
  if (!lens.zoom && !publishedDefaulted) write.copy(focus, "focus", lens.focus, "focus", ["published"]);

  if (lens.gaps.length > 0) writeGaps(write, out, "", "gaps", lens.gaps);

  const aperture = write.record(out, "", "aperture", "aperture");
  write.copy(aperture, "aperture", lens.aperture, "aperture", ["nominalFNumber", "fStops"]);
  write.defaulted(aperture, "aperture", "maxFNumber", lens.aperture.maxFNumber, "aperture.maxFNumber");
  write.defaulted(aperture, "aperture", "step", lens.aperture.step, "aperture.step");
  write.copy(aperture, "aperture", lens.aperture, "aperture", ["blades", "bladeRoundedness"]);

  const control = lens.aberrationControl;
  if (control) {
    const record = write.record(out, "", "aberrationControl", "aberrationControl");
    const fields = ["label", "description", "minLabel", "centerLabel", "maxLabel", "step"];
    write.copy(record, "aberrationControl", control, "aberrationControl", fields);
    writeGaps(write, record, "aberrationControl", "gaps", control.gaps);
  }

  write.copy(out, "", lens, "", ["projection", "opticalPath", "perspectiveControl"]);
  writeRearPlates(write, out, lens.rearPlates);
  write.copy(out, "", lens, "", ["groups", "doublets"]);

  for (const [group, fields] of [
    ["layout", ["svgW", "svgH", "scFill", "yScFill", "maxAspectRatio", "lensShiftFrac"]],
    ["rays", ["rayFractions", "rayLeadFrac", "offAxisFieldFrac", "offAxisFractions"]],
    ["checks", ["gapSagFrac", "maxRimAngleDeg"]],
  ] as const) {
    const record = write.record(out, "", group, group);
    const values = lens[group] as unknown as Untyped;
    for (const field of fields) {
      if (field === "yScFill") write.copy(record, group, values, group, [field]);
      else write.defaulted(record, group, field, values[field], `${group}.${field}`);
    }
    dropIfEmpty(out, "", group, write.writes);
  }
  return out;
}

function writeTeleconverter(write: Writer, converter: CanonicalTeleconverter): Untyped {
  const out: Untyped = {};
  if (write.writes) write.writes.from[""] = "";
  writeIdentity(write, out, converter);
  const catalog = write.record(out, "", "catalog", "catalog");
  write.copy(catalog, "catalog", converter.catalog, "catalog", ["lensMounts", "specs", "elementCount", "groupCount"]);
  writeSource(write, out, converter);
  write.copy(out, "", converter, "", ["magnification", "masterImageDistanceMm", "universal", "minHostFNumber"]);
  write.copy(out, "", converter, "", ["incompatibleLensKeys"]);
  writeElements(write, out, converter.elements);
  const mediumIds = writeMedia(write, out, converter.media);
  writeSurfaces(write, out, converter.surfaces, new Set(), mediumIds);
  writeRearPlates(write, out, converter.rearPlates);
  write.copy(out, "", converter, "", ["groups", "doublets"]);
  return out;
}

/**
 * The V2 lens file of a canonical lens.
 *
 * @param ingested - a canonical lens with its provenance
 * @param writes - collects where each node came from, when given
 * @returns the file's default export, sharing nothing with the prescription
 */
export function toLensDataV2Input(ingested: IngestedPrescription<CanonicalLens>, writes?: V2Writes): LensDataV2Input {
  return writeLens(new Writer(ingested, writes), ingested.prescription) as unknown as LensDataV2Input;
}

/**
 * The V2 teleconverter file of a canonical teleconverter.
 *
 * @param ingested - a canonical teleconverter with its provenance
 * @param writes - collects where each node came from, when given
 * @returns the file's default export, sharing nothing with the prescription
 */
export function toTeleconverterDataV2Input(
  ingested: IngestedPrescription<CanonicalTeleconverter>,
  writes?: V2Writes,
): TeleconverterDataV2Input {
  return writeTeleconverter(new Writer(ingested, writes), ingested.prescription) as unknown as TeleconverterDataV2Input;
}

/* ── Composition ── */

/**
 * How the engine sets a stop radius the V2 file drops: derived on a prime, derived at the wide station and held at
 * every station of a fixed-iris zoom, derived at each station of any other zoom, or each station's published radius.
 */
export type DroppedStopRadius = "prime" | "held" | "perStation" | "schedule";

/** A value ingest set aside that the V2 file does not hold. */
export interface DroppedValue {
  kind: IgnoredKind;
  /** Authored path of the value. */
  from: string;
  /** Canonical path where it would sit. */
  canonical: string;
  value: unknown;
  /** For a stop radius, how the engine sets the radius in its place. */
  stop?: DroppedStopRadius;
}

/**
 * How the engine sets the radius of a stop whose authored `sd` it does not read, or that writes none: the V2 file
 * drops such an `sd`, and the V1 file the converter writes supplies one (`v1StopRadius`).
 */
export function droppedStopRadius(prescription: CanonicalPrescription): DroppedStopRadius {
  const lens = prescription as CanonicalLens;
  if (!lens.zoom) return "prime";
  if (lens.aperture.stopRadius === "schedule") return "schedule";
  return lens.zoom.apertureModel === "fixed-iris" ? "held" : "perStation";
}

/** Where each part of a V2 file came from in its source, composed through the canonical prescription. */
export interface V2SourceMap {
  /**
   * The authored path whose literal may give a written value its text: the place ingest read the value from. At most
   * one per V2 path, and none for an index, flag or reference ingest computed.
   */
  textSource(v2Path: string): string | undefined;
  /**
   * Where a comment on an authored node goes: the node the V2 file wrote from it, or else, moved, the nearest node
   * written from one of its ancestors, or the home of a container the V2 file dissolves.
   *
   * A comment that leads a top-level field of the source is a banner over what follows, so it leads the outermost V2
   * record that field opens: the record whose first written member the field became, and so on outward while that
   * record is in turn the first member written into its own. A comment that leads the source's first field leads
   * `schema`, which opens the V2 file. Neither is moved.
   *
   * @param authoredPath - the node the comment annotates in the source
   * @param leading - whether the comment leads that node
   */
  commentTarget(authoredPath: string, leading?: boolean): { path: string; moved: boolean };
  /** The authored record a written record was read from: `surfaces[3]` for V2 `surfaces[3]`. */
  recordSource(v2Path: string): string | undefined;
  /** Each value ingest set aside that the V2 file does not hold, in the order ingest met them. */
  readonly dropped: readonly DroppedValue[];
}

/**
 * Compose where ingest read each value with where the V2 view wrote it.
 *
 * @param ingested - the source's prescription, ingested with `{ sources: true }`
 * @param writes - what `toLensDataV2Input` or `toTeleconverterDataV2Input` recorded writing it
 * @returns the text, comment and record relations between the source and the V2 file, and the values it drops
 * @throws Error when the prescription was ingested without source paths
 */
export function v2SourceMap(ingested: IngestedPrescription, writes: V2Writes): V2SourceMap {
  const sources: SourcePaths | undefined = ingested.provenance.sources;
  if (!sources) throw new Error("v2SourceMap: ingest the source with { sources: true }");

  /* Canonical → authored, for text: every value read, a copied subtree extending to the paths below it. */
  const readExact = new Map(Object.entries(sources.read));
  const ignoredFrom = new Map(Object.entries(sources.ignored).map(([canonical, entry]) => [canonical, entry.from]));
  /* V2 → canonical. */
  const writtenExact = new Map(Object.entries(writes.from));
  const writtenTrees = new Map(writes.subtrees.map((path) => [path, writes.from[path]]));
  /* Canonical → V2. */
  const v2Exact = inverse(writes.from);
  const v2Trees = new Map(writes.subtrees.map((path) => [writes.from[path], path]));
  /* Authored → canonical, for comments. */
  const heldBy = new Map(Object.entries(sources.heldBy));
  const recordOf = inverse(sources.records);
  const readOf = inverse(sources.read);
  const ignoredOf = new Map(Object.entries(sources.ignored).map(([canonical, entry]) => [entry.from, canonical]));
  const homes = new Map(Object.entries(sources.homes));

  const v2Of = (canonical: string) => follow(canonical, v2Exact, v2Trees);
  const canonicalOf = (authored: string) =>
    heldBy.get(authored) ?? recordOf.get(authored) ?? follow(authored, readOf, readOf) ?? ignoredOf.get(authored);
  const nearestWritten = (canonical: string): string => {
    for (let path: string | undefined = canonical; path !== undefined; path = parentPath(path)) {
      const written = v2Of(path);
      if (written !== undefined) return written;
    }
    return "";
  };
  const carried = (authoredPath: string): { path: string; moved: boolean } => {
    for (let path: string | undefined = authoredPath; path !== undefined; path = parentPath(path)) {
      const canonical = canonicalOf(path);
      const written = canonical === undefined ? undefined : v2Of(canonical);
      if (written !== undefined) return { path: written, moved: path !== authoredPath };
      const home = homes.get(path);
      if (home !== undefined) return { path: nearestWritten(home), moved: true };
    }
    return { path: "", moved: true };
  };
  /* The outermost record a written node opens, below the file's own members: the node itself when it opens none. */
  const opened = (v2Path: string): string => {
    let at = v2Path;
    for (let record = parentPath(at); record !== undefined && record !== ""; record = parentPath(at)) {
      const first = writes.order[record]?.[0];
      if (first === undefined || childPath(record, first) !== at) break;
      at = record;
    }
    return at;
  };

  const restored = new Set(writes.restored);
  const dropped: DroppedValue[] = [];
  for (const [canonical, entry] of Object.entries(sources.ignored)) {
    if (restored.has(canonical)) continue;
    const value = ingested.provenance.ignored[canonical];
    if (entry.kind === "stopRadius")
      dropped.push({ ...entry, canonical, value, stop: droppedStopRadius(ingested.prescription) });
    else dropped.push({ ...entry, canonical, value });
  }

  return {
    textSource(v2Path) {
      const canonical = follow(v2Path, writtenExact, writtenTrees);
      if (canonical === undefined) return undefined;
      return readExact.get(canonical) ?? ignoredFrom.get(canonical) ?? follow(canonical, readExact, readExact);
    },
    commentTarget(authoredPath, leading = false) {
      /* Ruling 10: a V1 file's first field, as written, whatever it holds; ingest records it for a V1 source alone. */
      if (leading && authoredPath === sources.firstField) return { path: "schema", moved: false };
      const target = carried(authoredPath);
      if (!leading || target.moved || parentPath(authoredPath) !== "") return target;
      return { path: opened(target.path), moved: false };
    },
    recordSource(v2Path) {
      const canonical = writes.from[v2Path];
      return canonical === undefined ? undefined : sources.records[canonical];
    },
    dropped,
  };
}
