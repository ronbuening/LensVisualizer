/**
 * Shared ingest rules — what V1 and V2 ingest do the same way.
 *
 * Both formats read a file without validating it, collect every reason the canonical form cannot hold it, apply the
 * schema defaults with provenance, keep the authored values the engine ignores, and share no object with the input.
 * The records they share field for field (aspheric terms and rear plates) are ingested here once.
 *
 * Asked for source paths, both record where they read each value as they read it (`SourcePaths`). Each recording site
 * is one branch on `IngestContext.sources`, so an ingest that was not asked builds no path for it.
 */

import { ASPHERIC_COEFFICIENT_SCHEMA } from "../../types/asphericSchema.js";
import type { RearPlateData } from "../../types/optics.js";
import { PrescriptionIngestError } from "./canonical.js";
import type {
  CanonicalAsphere,
  CanonicalLens,
  CanonicalProvenance,
  CanonicalRearPlate,
  CanonicalTeleconverter,
  IngestedPrescription,
  IngestRequest,
  SourcePaths,
} from "./canonical.js";
import { REAR_PLATE_SCHEMA_DEFAULTS, defaultValue, takesDefault } from "./defaults.js";
import type { SchemaDefault } from "./defaults.js";
import { memberPath } from "./sourcePaths.js";

/** An authored record, read field by field. */
export type Untyped = Record<string, unknown>;

/** What one ingest collects besides the prescription. */
export interface IngestContext {
  /** The authored format, as refusals name it. */
  readonly format: "V1" | "V2";
  readonly issues: string[];
  readonly defaulted: string[];
  readonly ignored: Record<string, unknown>;
  /** Where each value was read from; present only when the caller asked for source paths. */
  readonly sources?: SourcePaths;
}

/** Empty source paths when the request asks for them, for a new ingest. */
export function sourcePathsFor(request: IngestRequest | undefined): SourcePaths | undefined {
  if (!request?.sources) return undefined;
  return { read: {}, records: {}, heldBy: {}, ignored: {}, homes: {} };
}

/**
 * Record that each listed member a record holds was read from the authored record's member of the same name, or of
 * the name `authoredNames` gives it.
 *
 * @param sources - the source paths being recorded
 * @param canonical - canonical path of the record
 * @param authored - authored path of the record it was read from
 * @param record - the canonical record, as built
 * @param fields - the members to record, each read from the file as it stands
 * @param authoredNames - the authored name of each member V1 names otherwise
 */
export function recordReads(
  sources: SourcePaths,
  canonical: string,
  authored: string,
  record: Untyped,
  fields: readonly string[],
  authoredNames: Readonly<Record<string, string>> = {},
): void {
  for (const field of fields) {
    if (record[field] === undefined) continue;
    sources.read[memberPath(canonical, field)] = memberPath(authored, authoredNames[field] ?? field);
  }
}

/** Fields only the engine writes, with why a file may not carry them. */
const ENGINE_WRITTEN: Readonly<Record<string, string>> = {
  attachedTeleconverter: "is written only by attachTeleconverter(), never authored",
  synthetic: "is set only by expandCanonicalRearPlates(), never authored",
  clips: "is set only by expandCanonicalRearPlates(), never authored",
};

const ASPHERIC_KEYS: readonly string[] = ASPHERIC_COEFFICIENT_SCHEMA.map((descriptor) => descriptor.key);

/**
 * A value copied so the prescription shares nothing with the authored file. A string, number, boolean, bigint or
 * `undefined` is its own copy; anything else goes through `structuredClone`, which refuses a function or a symbol.
 */
export function copy<T>(value: T): T {
  const kind = typeof value;
  return kind === "object" || kind === "function" || kind === "symbol" ? structuredClone(value) : value;
}

/** Members that are present and not `undefined`; both formats treat an `undefined` member as an omitted one. */
export function has(record: Untyped, field: string): boolean {
  return Object.hasOwn(record, field) && record[field] !== undefined;
}

/** Set `target[field]` to a copy of `value` unless the value is `undefined`. */
export function put(target: Untyped, field: string, value: unknown): void {
  if (value !== undefined) target[field] = copy(value);
}

export function isNumberList(value: unknown): value is number[] {
  return Array.isArray(value) && value.every((entry) => typeof entry === "number");
}

/** Whether a value is a plain record: an object that is neither `null` nor an array. */
export function isRecord(value: unknown): value is Untyped {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

/**
 * Refuse every member of `record` its format does not define, naming an engine-written one as such.
 *
 * @param record - the authored record
 * @param known - the members the format defines on it
 * @param at - authored path of the record, empty for the file itself
 * @param context - collects the refusals
 */
export function refuseUnknownFields(
  record: Untyped,
  known: Readonly<Record<string, true>>,
  at: string,
  context: IngestContext,
): void {
  for (const field of Object.keys(record)) {
    if (record[field] === undefined || Object.hasOwn(known, field)) continue;
    const path = at ? `${at}.${field}` : field;
    const why = Object.hasOwn(ENGINE_WRITTEN, field) ? ENGINE_WRITTEN[field] : `is not a ${context.format} field`;
    context.issues.push(`${path} ${why}`);
  }
}

/**
 * Take one defaulted field, recording the default or the authored value it stands in for.
 *
 * @param authored - the field's value in the file; `undefined` when the file leaves it out
 * @param row - the schema default
 * @param path - canonical path of the field
 * @param context - collects the defaulted path and any authored value the default replaces
 * @param authoredPath - the field's authored path, where it is not `path`: a V1 field of the lens itself
 * @returns the value the prescription holds
 */
export function takeDefault(
  authored: unknown,
  row: SchemaDefault,
  path: string,
  context: IngestContext,
  authoredPath = path,
): unknown {
  if (!takesDefault(row, authored)) {
    if (context.sources) context.sources.read[path] = authoredPath;
    return copy(authored);
  }
  context.defaulted.push(path);
  if (authored !== undefined) {
    context.ignored[path] = authored;
    if (context.sources) context.sources.ignored[path] = { from: authoredPath, kind: "defaultStandIn" };
  }
  return defaultValue(row);
}

/**
 * The aspheric terms of one surface, sparse, in schema order: the accumulation order of sag evaluation. A zero term
 * adds nothing to any sum, so it is absent from the prescription and kept, with its sign, in provenance.
 *
 * @param entry - the authored terms
 * @param at - canonical path of the surface's asphere, e.g. `surfaces[3].asphere`
 * @param where - authored path for refusals: `asph["3A"]` in V1, the canonical path in V2
 * @param context - collects refusals and ignored zero terms
 * @returns the canonical asphere
 */
export function ingestAsphere(entry: unknown, at: string, where: string, context: IngestContext): CanonicalAsphere {
  if (!isRecord(entry)) {
    context.issues.push(`${where} must be an object of aspheric coefficients`);
    return {};
  }
  for (const key of Object.keys(entry)) {
    if (entry[key] !== undefined && !ASPHERIC_KEYS.includes(key)) {
      context.issues.push(`${where}.${key} is not an aspheric coefficient`);
    }
  }
  const asphere: Untyped = {};
  for (const key of ASPHERIC_KEYS) {
    const term = entry[key];
    if (term === undefined) continue;
    if (term === 0) context.ignored[`${at}.${key}`] = term;
    else asphere[key] = term;
    if (!context.sources) continue;
    if (term === 0) context.sources.ignored[`${at}.${key}`] = { from: `${where}.${key}`, kind: "zeroTerm" };
    else context.sources.read[`${at}.${key}`] = `${where}.${key}`;
  }
  return asphere as CanonicalAsphere;
}

const REAR_PLATE_FIELDS: Readonly<Record<keyof RearPlateData, true>> = {
  label: true,
  thicknessMm: true,
  nd: true,
  vd: true,
  glass: true,
  indexReference: true,
  dPgF: true,
  nC: true,
  nF: true,
  ng: true,
  gapAfterMm: true,
  sd: true,
  source: true,
};

/** Plate members read as written; the index reference is read through its default. */
const REAR_PLATE_READ_FIELDS = Object.keys(REAR_PLATE_FIELDS).filter((field) => field !== "indexReference");

/**
 * The rear plates of a lens or teleconverter. Both formats write a plate the same way.
 *
 * @param plates - the authored `rearPlates`
 * @param context - collects refusals and provenance
 * @returns the canonical plates
 */
export function ingestRearPlates(plates: unknown, context: IngestContext): CanonicalRearPlate[] {
  if (!Array.isArray(plates)) {
    context.issues.push(`rearPlates must be a list`);
    return [];
  }
  if (context.sources) context.sources.records.rearPlates = "rearPlates";
  return plates.map((entry, index) => {
    const at = `rearPlates[${index}]`;
    const plate: Untyped = isRecord(entry) ? entry : {};
    if (!isRecord(entry)) context.issues.push(`${at} must be an object`);
    refuseUnknownFields(plate, REAR_PLATE_FIELDS, at, context);
    const [indexReferenceRow] = REAR_PLATE_SCHEMA_DEFAULTS;
    const out: Untyped = {};
    put(out, "label", plate.label);
    out.thicknessMm = plate.thicknessMm;
    out.nd = plate.nd;
    out.vd = plate.vd;
    put(out, "glass", plate.glass);
    out.indexReference = takeDefault(
      plate[indexReferenceRow.v1Field],
      indexReferenceRow,
      `${at}.${indexReferenceRow.path}`,
      context,
    );
    for (const field of ["dPgF", "nC", "nF", "ng"]) put(out, field, plate[field]);
    out.gapAfterMm = plate.gapAfterMm;
    put(out, "sd", plate.sd);
    put(out, "source", plate.source);
    if (context.sources) {
      context.sources.records[at] = at;
      recordReads(context.sources, at, at, out, REAR_PLATE_READ_FIELDS);
    }
    return out as unknown as CanonicalRearPlate;
  });
}

/**
 * Throw every refusal collected, or return the prescription with its provenance.
 *
 * @param key - the file's key, for the error
 * @param prescription - the canonical prescription
 * @param context - the refusals and provenance collected
 * @param spelling - the format's own provenance: its format number and how it spelled what the prescription holds once
 * @returns the prescription and its provenance, with the source paths when they were asked for
 * @throws PrescriptionIngestError naming every reason the canonical form cannot hold the file
 */
export function finish<Prescription extends CanonicalLens | CanonicalTeleconverter>(
  key: string,
  prescription: Prescription,
  context: IngestContext,
  spelling: Pick<CanonicalProvenance, "format" | "v1" | "v2">,
): IngestedPrescription<Prescription> {
  if (context.issues.length > 0) throw new PrescriptionIngestError(key, context.issues);
  const provenance: CanonicalProvenance = { ...spelling, defaulted: context.defaulted, ignored: context.ignored };
  if (context.sources) provenance.sources = context.sources;
  return { prescription, provenance };
}

/**
 * A list of objects the rest of ingest walks; a file without one has nothing canonical to read.
 *
 * @param data - the authored file
 * @param field - the list's field
 * @param key - the file's key, for the error
 * @returns the list
 * @throws PrescriptionIngestError when the field is not a list of objects
 */
export function requireRecords(data: Untyped, field: string, key: string): Untyped[] {
  const value = data[field];
  if (!Array.isArray(value) || !value.every(isRecord)) {
    throw new PrescriptionIngestError(key, [`${field} must be a list of objects`]);
  }
  return value;
}

/** Refuse each named field the record leaves out. */
export function requireFields(data: Untyped, fields: readonly string[], at: string, context: IngestContext): void {
  for (const field of fields) if (!has(data, field)) context.issues.push(`${at ? `${at}.` : ""}${field} is required`);
}
