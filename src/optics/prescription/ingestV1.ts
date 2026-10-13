/**
 * V1 ingest — maps an authored V1 lens or teleconverter file onto the canonical prescription.
 *
 * This is the V1 half of the object-level mapping in `src/optics/prescription/` (OPTICS_ENGINE_REWRITE_SPEC.md,
 * Lens data V2, Field mapping): the runtime and the converter share it. Ingest applies the schema defaults
 * (`defaults.ts`) and the engine's authority rules, and records in provenance whatever the V1 view needs to give
 * the file back as written: which values were defaulted, the authored values the engine ignores, and the V1
 * spellings the canonical form holds once.
 *
 * Ingest does not validate a prescription; `validateLensData` still does. It refuses only a file the canonical form
 * cannot hold without losing something the engine or UI reads:
 * - two V1 copies of one value that disagree: a surface `nd` and the `nd` of its medium, a surface `d` and the first
 *   value of its variable gap (exact agreement), or a finite conjugate and the station it names (the validator's
 *   1e-8);
 * - a shape the canonical records cannot hold: a zoom field on a prime, `zoomLabels` that are neither `[wide, tele]`
 *   nor one per station, `varLabels` (or the ring's) naming a gap that does not exist or out of surface order;
 * - a field V1 does not define, or one only the engine writes.
 * Every reason found is reported at once, in a `PrescriptionIngestError` that names each field and its authored path.
 * Ingest does not check types: input of the wrong type, such as `asph: null`, is the validator's to refuse, and
 * ingest may fail on it with a plain `TypeError`. The input is never modified, and the result shares no object with
 * it.
 */

import { ASPHERIC_COEFFICIENT_SCHEMA } from "../../types/asphericSchema.js";
import type {
  AberrationControlConfig,
  ElementData,
  FiniteConjugate,
  LensDataInput,
  PublishedStations,
  RearPlateData,
  SurfaceData,
} from "../../types/optics.js";
import type { TeleconverterData } from "../../types/teleconverter.js";
import { FLAT_R_THRESHOLD } from "../geometry/surfaceProfile.js";
import {
  FLAT_RADIUS,
  PrescriptionIngestError,
  stopRadiusAuthority,
  type CanonicalAberrationControl,
  type CanonicalAberrationGap,
  type CanonicalAsphere,
  type CanonicalConjugate,
  type CanonicalElement,
  type CanonicalFocus,
  type CanonicalGap,
  type CanonicalLens,
  type CanonicalMedium,
  type CanonicalRearPlate,
  type CanonicalSurface,
  type CanonicalTeleconverter,
  type CanonicalZoom,
  type CanonicalZoomStation,
  type IngestedPrescription,
  type StopRadiusAuthority,
  type V1PublishedStationsSpelling,
  type V1Spelling,
} from "./canonical.js";
import {
  ELEMENT_SCHEMA_DEFAULTS,
  LENS_SCHEMA_DEFAULTS,
  REAR_PLATE_SCHEMA_DEFAULTS,
  defaultValue,
  takesDefault,
  type SchemaDefault,
} from "./defaults.js";

/** Radius the V1 format writes for a flat surface; any other flat radius is kept in provenance. */
export const V1_FLAT_RADIUS = 1e15;

/** How far a finite conjugate's coordinates may sit from the station they name: the validator's tolerance. */
const STATION_COORDINATE_TOLERANCE = 1e-8;

/* ── Field inventories ──
 * Typed as records over the V1 types, so a field added to a V1 type fails the typecheck here until ingest knows it. */

const LENS_FIELDS: Readonly<Record<keyof LensDataInput, true>> = {
  publishedAt: true,
  key: true,
  maker: true,
  name: true,
  subtitle: true,
  specs: true,
  focalLengthMarketing: true,
  focalLengthDesign: true,
  apertureMarketing: true,
  apertureDesign: true,
  lensMounts: true,
  imageFormat: true,
  imageCircleMm: true,
  patentNumber: true,
  patentAuthors: true,
  patentAssignees: true,
  patentYear: true,
  sourceErrata: true,
  elementCount: true,
  groupCount: true,
  visible: true,
  opticalConfiguration: true,
  acceptsTeleconverters: true,
  perspectiveControl: true,
  projection: true,
  opticalPath: true,
  aberrationControl: true,
  nominalFno: true,
  closeFocusM: true,
  zoomCloseFocusM: true,
  zoomStopSemiDiameters: true,
  zoomApertureModel: true,
  focusStep: true,
  maxFstop: true,
  apertureStep: true,
  fstopSeries: true,
  elements: true,
  surfaces: true,
  rearPlates: true,
  asph: true,
  var: true,
  varLabels: true,
  focusPositions: true,
  finiteConjugates: true,
  publishedStations: true,
  groups: true,
  doublets: true,
  zoomPositions: true,
  zoomStep: true,
  zoomLabels: true,
  focusDescription: true,
  svgW: true,
  svgH: true,
  scFill: true,
  yScFill: true,
  maxRimAngleDeg: true,
  gapSagFrac: true,
  maxAspectRatio: true,
  lensShiftFrac: true,
  rayFractions: true,
  rayLeadFrac: true,
  offAxisFieldFrac: true,
  offAxisFractions: true,
  apertureBlades: true,
  apertureBladeRoundedness: true,
};

const TELECONVERTER_FIELDS: Readonly<Record<keyof TeleconverterData, true>> = {
  publishedAt: true,
  key: true,
  maker: true,
  visible: true,
  name: true,
  subtitle: true,
  specs: true,
  magnification: true,
  lensMounts: true,
  universal: true,
  minHostFno: true,
  incompatibleLensKeys: true,
  patentNumber: true,
  patentAuthors: true,
  patentAssignees: true,
  patentYear: true,
  elementCount: true,
  groupCount: true,
  elements: true,
  surfaces: true,
  rearPlates: true,
  asph: true,
  groups: true,
  doublets: true,
  masterImageDistanceMm: true,
};

const ELEMENT_FIELDS: Readonly<Record<Exclude<keyof ElementData, "synthetic">, true>> = {
  id: true,
  name: true,
  diagramLabel: true,
  maxSdRatio: true,
  label: true,
  type: true,
  nd: true,
  vd: true,
  indexReference: true,
  indexReferenceNote: true,
  fl: true,
  glass: true,
  role: true,
  absorptionCoefficientPerMm: true,
  apd: true,
  apdNote: true,
  cemented: true,
  dPgF: true,
  nC: true,
  nF: true,
  ng: true,
  fromSurface: true,
  toSurface: true,
};

const SURFACE_FIELDS: Readonly<Record<Exclude<keyof SurfaceData, "synthetic" | "clips">, true>> = {
  label: true,
  R: true,
  d: true,
  nd: true,
  sd: true,
  innerSd: true,
  elemId: true,
  stopPlacement: true,
  interaction: true,
  diffractive: true,
};

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

const ABERRATION_CONTROL_FIELDS: Readonly<Record<keyof AberrationControlConfig, true>> = {
  label: true,
  description: true,
  minLabel: true,
  centerLabel: true,
  maxLabel: true,
  step: true,
  var: true,
  varLabels: true,
};

/** Fields only the engine writes, with why a file may not carry them. */
const ENGINE_WRITTEN: Readonly<Record<string, string>> = {
  attachedTeleconverter: "is written only by attachTeleconverter(), never authored",
  synthetic: "is set only by expandRearPlates(), never authored",
  clips: "is set only by expandRearPlates(), never authored",
};

const ASPHERIC_KEYS: readonly string[] = ASPHERIC_COEFFICIENT_SCHEMA.map((descriptor) => descriptor.key);

/* ── Context ── */

type Untyped = Record<string, unknown>;

/** What one ingest collects besides the prescription. */
interface IngestContext {
  readonly issues: string[];
  readonly defaulted: string[];
  readonly ignored: Record<string, unknown>;
  readonly v1: V1Spelling;
}

function createContext(): IngestContext {
  return { issues: [], defaulted: [], ignored: {}, v1: { emptyContainers: [] } };
}

/** A value copied so the prescription shares nothing with the authored file. */
function copy<T>(value: T): T {
  return structuredClone(value);
}

/** Members that are present and not `undefined`; V1 treats an `undefined` member as an omitted one. */
function has(record: Untyped, field: string): boolean {
  return Object.hasOwn(record, field) && record[field] !== undefined;
}

/** Set `target[field]` to a copy of `value` unless the value is `undefined`. */
function put(target: Untyped, field: string, value: unknown): void {
  if (value !== undefined) target[field] = copy(value);
}

function refuseUnknownFields(
  record: Untyped,
  known: Readonly<Record<string, true>>,
  at: string,
  context: IngestContext,
) {
  for (const field of Object.keys(record)) {
    if (record[field] === undefined || Object.hasOwn(known, field)) continue;
    const path = at ? `${at}.${field}` : field;
    context.issues.push(`${path} ${ENGINE_WRITTEN[field] ?? "is not a V1 field"}`);
  }
}

/**
 * Read one defaulted field, recording the default or the authored value it stands in for.
 *
 * @param record - the V1 record the field sits on
 * @param row - the schema default
 * @param base - canonical path of the record, empty for the prescription itself
 * @param context - collects the defaulted path and any authored value the default replaces
 * @returns the value the prescription holds
 */
function withDefault(record: Untyped, row: SchemaDefault, base: string, context: IngestContext): unknown {
  const authored = record[row.v1Field];
  const path = base ? `${base}.${row.path}` : row.path;
  if (!takesDefault(row, authored)) return copy(authored);
  context.defaulted.push(path);
  if (authored !== undefined) context.ignored[path] = authored;
  return defaultValue(row);
}

function lensDefault(path: string): SchemaDefault {
  const row = LENS_SCHEMA_DEFAULTS.find((candidate) => candidate.path === path);
  if (!row) throw new Error(`ingestV1: no lens schema default at "${path}"`);
  return row;
}

/* ── Elements and rear plates ── */

function ingestElement(element: Untyped, index: number, context: IngestContext): CanonicalElement {
  const at = `elements[${index}]`;
  refuseUnknownFields(element, ELEMENT_FIELDS, at, context);
  const [indexReference, apd] = ELEMENT_SCHEMA_DEFAULTS.map((row) => withDefault(element, row, at, context));
  const out: Untyped = {
    id: element.id,
    name: element.name,
    label: element.label,
    type: element.type,
    nd: element.nd,
  };
  put(out, "vd", element.vd);
  out.indexReference = indexReference;
  put(out, "indexReferenceNote", element.indexReferenceNote);
  put(out, "focalLengthMm", element.fl);
  put(out, "glass", element.glass);
  out.apd = apd;
  put(out, "apdNote", element.apdNote);
  put(out, "role", element.role);
  put(out, "diagramLabel", element.diagramLabel);
  put(out, "maxSdRatio", element.maxSdRatio);
  put(out, "absorptionCoefficientPerMm", element.absorptionCoefficientPerMm);
  put(out, "cemented", element.cemented);
  for (const field of ["dPgF", "nC", "nF", "ng"]) put(out, field, element[field]);
  const from = has(element, "fromSurface");
  const to = has(element, "toSurface");
  if (from && to) out.span = [element.fromSurface, element.toSurface];
  else if (from || to) {
    const [set, missing] = from ? ["fromSurface", "toSurface"] : ["toSurface", "fromSurface"];
    context.issues.push(`${at}.${set} is set without ${at}.${missing}, and one alone has no span`);
  }
  return out as unknown as CanonicalElement;
}

function ingestRearPlate(plate: Untyped, at: string, context: IngestContext): CanonicalRearPlate {
  refuseUnknownFields(plate, REAR_PLATE_FIELDS, at, context);
  const [indexReference] = REAR_PLATE_SCHEMA_DEFAULTS.map((row) => withDefault(plate, row, at, context));
  const out: Untyped = {};
  put(out, "label", plate.label);
  out.thicknessMm = plate.thicknessMm;
  out.nd = plate.nd;
  out.vd = plate.vd;
  put(out, "glass", plate.glass);
  out.indexReference = indexReference;
  for (const field of ["dPgF", "nC", "nF", "ng"]) put(out, field, plate[field]);
  out.gapAfterMm = plate.gapAfterMm;
  put(out, "sd", plate.sd);
  put(out, "source", plate.source);
  return out as unknown as CanonicalRearPlate;
}

/* ── Surfaces, media and aspheres ── */

/** Whether a V1 prescription takes the folded (generalized) path: `hasFoldedOptics` in `runtimeLens.ts`. */
function isFolded(data: Untyped, surfaces: readonly Untyped[]): boolean {
  return Boolean(
    data.opticalPath ||
    surfaces.some((surface) => {
      const interaction = surface.interaction as { type?: unknown } | undefined;
      return interaction && interaction.type !== "refract";
    }),
  );
}

function ingestAsphere(entry: unknown, label: string, index: number, context: IngestContext): CanonicalAsphere {
  const at = `surfaces[${index}].asphere`;
  if (entry === null || typeof entry !== "object" || Array.isArray(entry)) {
    context.issues.push(`asph["${label}"] must be an object of aspheric coefficients`);
    return {};
  }
  const terms = entry as Untyped;
  for (const key of Object.keys(terms)) {
    if (terms[key] !== undefined && !ASPHERIC_KEYS.includes(key)) {
      context.issues.push(`asph["${label}"].${key} is not an aspheric coefficient`);
    }
  }
  /* Schema order, which is also the accumulation order of sag evaluation. A zero term adds nothing to any sum, so
   * it is absent from the prescription and kept, with its sign, for the V1 view. */
  const asphere: Untyped = {};
  for (const key of ASPHERIC_KEYS) {
    const term = terms[key];
    if (term === undefined) continue;
    if (term === 0) context.ignored[`${at}.${key}`] = term;
    else asphere[key] = term;
  }
  return asphere as CanonicalAsphere;
}

interface IngestedSurfaces {
  surfaces: CanonicalSurface[];
  media: CanonicalMedium[];
  labelIndex: ReadonlyMap<string, number>;
}

/**
 * Map V1 surfaces onto canonical ones: each surface's medium from its `elemId` and `nd`, its asphere from `asph`,
 * a flat radius as the marker, and the stop's `sd` only where the engine reads it.
 *
 * @param data - the V1 file, for `asph`
 * @param elements - the file's elements, for the medium of each surface
 * @param stopAuthority - the stop's radius authority; any value but `"authored"` moves the stop's `sd` to provenance
 * @param context - collects issues and provenance
 * @returns the surfaces, the undrawn media they reference, and the index of every label
 */
function ingestSurfaces(
  data: Untyped,
  elements: readonly Untyped[],
  stopAuthority: StopRadiusAuthority,
  context: IngestContext,
): IngestedSurfaces {
  const authoredSurfaces = data.surfaces as Untyped[];
  const elementIndex = new Map(elements.map((element, index) => [element.id, index]));
  const media: CanonicalMedium[] = [];
  const labelIndex = new Map<string, number>();

  authoredSurfaces.forEach((surface, index) => {
    const label = surface.label as string;
    const first = labelIndex.get(label);
    if (first !== undefined) {
      context.issues.push(`surfaces[${index}].label "${label}" repeats surfaces[${first}].label`);
    } else labelIndex.set(label, index);
  });

  const surfaces = authoredSurfaces.map((surface, index): CanonicalSurface => {
    const at = `surfaces[${index}]`;
    refuseUnknownFields(surface, SURFACE_FIELDS, at, context);
    const out: Untyped = { label: surface.label };

    const radius = surface.R;
    if (typeof radius === "number" && Math.abs(radius) > FLAT_R_THRESHOLD) {
      out.R = FLAT_RADIUS;
      if (!Object.is(radius, V1_FLAT_RADIUS)) context.ignored[`${at}.R`] = radius;
    } else {
      out.R = radius;
    }
    out.d = surface.d;

    const isDerivedStop = surface.label === "STO" && stopAuthority !== "authored";
    if (isDerivedStop) {
      if (surface.sd !== undefined) context.ignored[`${at}.sd`] = surface.sd;
    } else {
      put(out, "sd", surface.sd);
    }
    put(out, "innerSd", surface.innerSd);

    /* V1 says what follows a surface twice, by `elemId` and by `nd`; the canonical medium says it once. */
    const elemId = surface.elemId;
    const nd = surface.nd;
    if (elemId === 0) {
      if (nd === 1) {
        out.medium = null;
      } else {
        let medium = media.find((candidate) => Object.is(candidate.nd, nd));
        if (!medium) {
          medium = { id: `m${media.length + 1}`, nd: nd as number };
          media.push(medium);
        }
        out.medium = medium.id;
      }
    } else if (elementIndex.has(elemId)) {
      out.medium = elemId;
      const element = elementIndex.get(elemId)!;
      if (elements[element].nd !== nd) {
        context.issues.push(
          `${at}.nd ${String(nd)} differs from elements[${element}].nd ${String(elements[element].nd)}, the element ` +
            `${at}.elemId names: a surface takes its index from its element, so write the element's nd`,
        );
      }
    } else {
      out.medium = elemId as number;
      context.issues.push(`${at}.elemId ${String(elemId)} names no element`);
    }

    put(out, "stopPlacement", surface.stopPlacement);
    put(out, "interaction", surface.interaction);
    put(out, "diffractive", surface.diffractive);
    return out as unknown as CanonicalSurface;
  });

  if (has(data, "asph")) {
    const asph = data.asph as Untyped;
    const labels = Object.keys(asph).filter((label) => asph[label] !== undefined);
    if (labels.length === 0) context.v1.emptyContainers.push("asph");
    for (const label of labels) {
      const index = labelIndex.get(label);
      if (index === undefined) {
        context.issues.push(`asph["${label}"]: no surface is labelled "${label}"`);
        continue;
      }
      surfaces[index].asphere = ingestAsphere(asph[label], label, index, context);
    }
  }

  return { surfaces, media, labelIndex };
}

/* ── Gaps ── */

/**
 * Pair `var`-style ranges with their `varLabels`, in surface order.
 *
 * The pairs must follow surface order. Canonical gaps are held in surface order, and a V2 `gaps` object cannot carry
 * another order (integer-like keys enumerate numerically), so an order of the pairs is no spelling ingest keeps.
 *
 * @param ranges - label-keyed ranges as authored
 * @param labels - authored `[label, text]` pairs, if any
 * @param where - V1 field names for messages: the ranges' and the labels'
 * @param labelIndex - surface index of each label
 * @param context - collects issues
 * @returns one entry per range, with its display label, in surface order
 */
function pairGaps<Values>(
  ranges: Untyped,
  labels: unknown,
  where: { ranges: string; labels: string },
  labelIndex: ReadonlyMap<string, number>,
  context: IngestContext,
): { surface: string; label?: string; values: Values }[] {
  const text = new Map<string, string>();
  let previous: { label: string; at: number } | undefined;
  if (labels !== undefined && !Array.isArray(labels)) context.issues.push(`${where.labels} must be a list`);
  for (const [at, pair] of (Array.isArray(labels) ? labels : []).entries()) {
    const [label, value] = Array.isArray(pair) ? pair : [];
    if (typeof label !== "string" || typeof value !== "string") {
      context.issues.push(`${where.labels}[${at}] must be a [label, text] pair`);
    } else if (text.has(label)) {
      context.issues.push(`${where.labels}[${at}] labels "${label}" a second time`);
    } else if (ranges[label] === undefined) {
      context.issues.push(`${where.labels}[${at}] labels "${label}", which has no ${where.ranges} entry`);
    } else {
      text.set(label, value);
      const index = labelIndex.get(label);
      const previousIndex = previous && labelIndex.get(previous.label);
      if (index !== undefined && previousIndex !== undefined && index < previousIndex) {
        context.issues.push(
          `${where.labels}[${at}] labels "${label}", which comes before "${previous!.label}" ` +
            `(${where.labels}[${previous!.at}]) in the surfaces: list the pairs in surface order`,
        );
      }
      if (index !== undefined) previous = { label, at };
    }
  }
  const surfaceLabels = Object.keys(ranges).filter((label) => ranges[label] !== undefined);
  for (const label of surfaceLabels) {
    if (!labelIndex.has(label)) context.issues.push(`${where.ranges}["${label}"]: no surface is labelled "${label}"`);
  }
  return surfaceLabels
    .filter((label) => labelIndex.has(label))
    .sort((a, b) => labelIndex.get(a)! - labelIndex.get(b)!)
    .map((label) => {
      const gap: { surface: string; label?: string; values: Values } = {
        surface: label,
        values: copy(ranges[label]) as Values,
      };
      if (text.has(label)) gap.label = text.get(label);
      return gap;
    });
}

function isNumberList(value: unknown): value is number[] {
  return Array.isArray(value) && value.every((entry) => typeof entry === "number");
}

function ingestGaps(
  data: Untyped,
  isZoom: boolean,
  labelIndex: ReadonlyMap<string, number>,
  surfaces: readonly CanonicalSurface[],
  context: IngestContext,
): CanonicalGap[] {
  const ranges = (has(data, "var") ? data.var : {}) as Untyped;
  if (has(data, "var") && Object.keys(ranges).every((label) => ranges[label] === undefined)) {
    context.v1.emptyContainers.push("var");
  }
  if (Array.isArray(data.varLabels) && data.varLabels.length === 0) context.v1.emptyContainers.push("varLabels");
  const gaps = pairGaps<unknown>(ranges, data.varLabels, { ranges: "var", labels: "varLabels" }, labelIndex, context);

  return gaps.map((gap) => {
    const where = `var["${gap.surface}"]`;
    /* A prime authors one thickness per focus keyframe, a zoom one such row per station; both become rows. */
    const rows = isZoom ? gap.values : [gap.values];
    if (!Array.isArray(rows) || !rows.every(isNumberList)) {
      context.issues.push(
        `${where} must be ${isZoom ? "one row of thicknesses per zoom station" : "a list of thicknesses"}`,
      );
      return { ...gap, values: [] };
    }
    const surface = surfaces[labelIndex.get(gap.surface)!];
    if (rows.length > 0 && rows[0].length > 0 && rows[0][0] !== surface.d) {
      context.issues.push(
        `surfaces[${labelIndex.get(gap.surface)}].d ${String(surface.d)} differs from ${where}'s first value ` +
          `${String(rows[0][0])}: a variable gap's first value is its surface's d, so write the two alike`,
      );
    }
    return { ...gap, values: rows } as CanonicalGap;
  });
}

function ingestAberrationControl(
  control: Untyped,
  labelIndex: ReadonlyMap<string, number>,
  context: IngestContext,
): CanonicalAberrationControl {
  refuseUnknownFields(control, ABERRATION_CONTROL_FIELDS, "aberrationControl", context);
  const out: Untyped = { label: control.label };
  for (const field of ["description", "minLabel", "centerLabel", "maxLabel", "step"]) put(out, field, control[field]);
  if (Array.isArray(control.varLabels) && control.varLabels.length === 0) {
    context.v1.emptyContainers.push("aberrationControl.varLabels");
  }
  out.gaps = pairGaps<CanonicalAberrationGap["values"]>(
    (control.var ?? {}) as Untyped,
    control.varLabels,
    { ranges: "aberrationControl.var", labels: "aberrationControl.varLabels" },
    labelIndex,
    context,
  );
  return out as unknown as CanonicalAberrationControl;
}

/* ── Zoom stations, focus and published stations ── */

/** Fields that need zoom stations to live on. */
const ZOOM_ONLY_FIELDS = ["zoomStopSemiDiameters", "zoomCloseFocusM", "zoomLabels", "zoomApertureModel", "zoomStep"];

function ingestZoom(data: Untyped, context: IngestContext): CanonicalZoom | undefined {
  if (!has(data, "zoomPositions")) {
    for (const field of ZOOM_ONLY_FIELDS) {
      if (has(data, field)) context.issues.push(`${field} is a zoom field, and a prime has no stations to hold it`);
    }
    if (Array.isArray(data.nominalFno)) {
      context.issues.push(`nominalFno is a per-station list, and a prime has no stations to hold it`);
    }
    return undefined;
  }

  const positions = data.zoomPositions;
  if (!isNumberList(positions) || positions.length < 2) {
    context.issues.push(`zoomPositions must list at least two station focal lengths`);
    return undefined;
  }
  const count = positions.length;
  /* `ingestPublishedStations` gives every station its published flags. */
  const stations = positions.map((focalLengthMm) => ({ focalLengthMm }) as CanonicalZoomStation);
  const perStation = (field: string, member: keyof CanonicalZoomStation) => {
    const values = data[field];
    if (values === undefined) return;
    if (!Array.isArray(values) || values.length !== count) {
      context.issues.push(`${field} must hold one value per zoom station (${count})`);
      return;
    }
    values.forEach((value, station) => put(stations[station] as unknown as Untyped, member, value));
  };
  if (Array.isArray(data.nominalFno)) perStation("nominalFno", "nominalFNumber");
  perStation("zoomStopSemiDiameters", "stopSemiDiameter");
  perStation("zoomCloseFocusM", "closeFocusM");

  const labels = data.zoomLabels;
  if (labels !== undefined) {
    if (!Array.isArray(labels) || !(labels.length === count || labels.length === 2)) {
      context.issues.push(`zoomLabels must be [wide, tele] or one label per zoom station (${count})`);
    } else if (labels.length === count) {
      labels.forEach((label, station) => (stations[station].label = label));
    } else {
      stations[0].label = labels[0];
      stations[count - 1].label = labels[1];
    }
  }

  return {
    stations,
    apertureModel: withDefault(data, lensDefault("zoom.apertureModel"), "", context) as CanonicalZoom["apertureModel"],
    step: withDefault(data, lensDefault("zoom.step"), "", context) as number,
  };
}

/** Index of the station a coordinate names, within the validator's tolerance, or -1. */
function stationIndex(coordinates: readonly number[], value: number): number {
  return coordinates.findIndex((coordinate) => Math.abs(coordinate - value) < STATION_COORDINATE_TOLERANCE);
}

function ingestConjugates(
  conjugates: readonly Untyped[],
  keyframes: readonly number[],
  stationCount: number,
  context: IngestContext,
): CanonicalConjugate[] {
  /* The engine places station i of n at zoomT = i / (n − 1) (`zoomIndexToT`), and a prime at 0. */
  const stationCoordinates =
    stationCount <= 1 ? [0] : Array.from({ length: stationCount }, (_, station) => station / (stationCount - 1));
  return conjugates.map((conjugate, index) => {
    const at = `focus.conjugates[${index}]`;
    const { focusT, zoomT } = conjugate as unknown as FiniteConjugate;
    const keyframe = stationIndex(keyframes, focusT);
    const zoomStation = stationCount <= 1 ? (zoomT === 0 ? 0 : -1) : stationIndex(stationCoordinates, zoomT);
    if (keyframe < 0) context.issues.push(`finiteConjugates[${index}].focusT ${String(focusT)} is no focus keyframe`);
    if (zoomStation < 0) context.issues.push(`finiteConjugates[${index}].zoomT ${String(zoomT)} is no zoom station`);
    /* The engine matches a conjugate to its station within the tolerance and never reads the coordinate itself. */
    if (keyframe >= 0 && !Object.is(keyframes[keyframe], focusT)) context.ignored[`${at}.focusT`] = focusT;
    if (zoomStation >= 0 && !Object.is(stationCoordinates[zoomStation], zoomT)) context.ignored[`${at}.zoomT`] = zoomT;
    return {
      zoomStation,
      keyframe,
      objectDistanceMm: conjugate.objectDistanceMm as number,
      distanceReference: conjugate.distanceReference as CanonicalConjugate["distanceReference"],
      source: conjugate.source as string,
    };
  });
}

/** How a file wrote `publishedStations.zoom`: left out, written empty, or as a list of stations. */
function zoomListSpelling(list: unknown): V1PublishedStationsSpelling["zoom"] {
  if (list === undefined) return "omitted";
  return Array.isArray(list) && list.length === 0 ? "empty" : "listed";
}

/** How a file wrote `publishedStations.focus`: left out, as one list, or as one list per zoom station. */
function focusListSpelling(list: unknown): V1PublishedStationsSpelling["focus"] {
  if (list === undefined) return "omitted";
  return isNumberList(list) ? "one" : "perStation";
}

/**
 * Spread `publishedStations` over the zoom stations, or onto `focus.published` on a prime.
 *
 * A file that leaves the object out takes the schema default, which ingest reads as the V1 declaration it stands for
 * (every zoom station at infinity focus alone) and records as defaulted. An object that declares neither list, `{}`,
 * declares the same, as `publishedStationGrid` reads it. A `zoom` list left out, written empty, or naming every
 * station says the same: every station. The spelling the file used is kept for the V1 view.
 */
function ingestPublishedStations(
  data: Untyped,
  zoom: CanonicalZoom | undefined,
  focus: CanonicalFocus,
  context: IngestContext,
): void {
  const row = lensDefault("publishedStations");
  const authored = has(data, "publishedStations");
  if (!authored) context.defaulted.push(row.path);
  const declared = (authored ? data.publishedStations : defaultValue(row)) as PublishedStations & Untyped;
  if (declared === null || typeof declared !== "object" || Array.isArray(declared)) {
    context.issues.push(`publishedStations must be an object of zoom and focus station indices`);
    return;
  }
  for (const field of Object.keys(declared)) {
    if (declared[field] !== undefined && field !== "zoom" && field !== "focus") {
      context.issues.push(`publishedStations.${field} is not a V1 field`);
    }
  }
  /* An object that declares neither list, `{}`, is read as the default declaration, which it then spells. */
  const { zoom: zoomList, focus: focusList } = declared;
  if (authored) {
    context.v1.publishedStations = { zoom: zoomListSpelling(zoomList), focus: focusListSpelling(focusList) };
  }

  if (!zoom) {
    if (zoomList !== undefined) context.issues.push(`publishedStations.zoom is a zoom field on a prime`);
    if (focusList !== undefined && !isNumberList(focusList)) {
      context.issues.push(`publishedStations.focus on a prime must be one index list`);
    }
    focus.published = isNumberList(focusList) ? [...focusList] : [];
    return;
  }

  const count = zoom.stations.length;
  const every = Array.from({ length: count }, (_, station) => station);
  if (zoomList !== undefined && !isNumberList(zoomList)) {
    context.issues.push(`publishedStations.zoom must be a list of station indices`);
    return;
  }
  zoomList?.forEach((station, at) => {
    if (!every.includes(station)) {
      context.issues.push(`publishedStations.zoom[${at}] ${String(station)} names no zoom station (0..${count - 1})`);
    }
  });
  /* `publishedStationGrid` reads a zoom list left out or written empty as every station. */
  const published = new Set(zoomList !== undefined && zoomList.length > 0 ? zoomList : every);

  let perStation: number[][];
  if (focusList === undefined) {
    perStation = every.map(() => []);
  } else if (isNumberList(focusList)) {
    perStation = every.map((station) => (published.has(station) ? [...focusList] : []));
  } else if (Array.isArray(focusList) && focusList.length === count && focusList.every(isNumberList)) {
    perStation = focusList.map((list) => [...list]);
  } else {
    context.issues.push(`publishedStations.focus must be one index list or one list per zoom station (${count})`);
    return;
  }
  zoom.stations.forEach((station, index) => {
    station.published = published.has(index);
    station.publishedFocus = perStation[index];
  });
}

/* ── Prescriptions ── */

function requireArray(data: Untyped, field: string, key: string): Untyped[] {
  const value = data[field];
  if (!Array.isArray(value) || !value.every((entry) => entry !== null && typeof entry === "object")) {
    throw new PrescriptionIngestError(key, [`${field} must be a list of objects`]);
  }
  return value as Untyped[];
}

function requireFields(data: Untyped, fields: readonly string[], context: IngestContext): void {
  for (const field of fields) if (!has(data, field)) context.issues.push(`${field} is required`);
}

function finish<Prescription extends CanonicalLens | CanonicalTeleconverter>(
  key: string,
  prescription: Prescription,
  context: IngestContext,
): IngestedPrescription<Prescription> {
  if (context.issues.length > 0) throw new PrescriptionIngestError(key, context.issues);
  return {
    prescription,
    provenance: { format: 1, defaulted: context.defaulted, ignored: context.ignored, v1: context.v1 },
  };
}

/**
 * Ingest a V1 lens file.
 *
 * @param input - the file's default export, as authored: without catalog defaults, or with them already merged
 * @returns the canonical prescription and its provenance
 * @throws PrescriptionIngestError naming every reason the canonical form cannot hold the file
 */
export function ingestLensV1(input: LensDataInput): IngestedPrescription<CanonicalLens> {
  const data = input as unknown as Untyped;
  const key = typeof data.key === "string" ? data.key : "?";
  const context = createContext();
  refuseUnknownFields(data, LENS_FIELDS, "", context);
  requireFields(data, ["key", "name", "closeFocusM", "fstopSeries", "yScFill", "nominalFno"], context);
  const authoredElements = requireArray(data, "elements", key);
  const authoredSurfaces = requireArray(data, "surfaces", key);

  const zoom = ingestZoom(data, context);
  const stopAuthority = stopRadiusAuthority({
    folded: isFolded(data, authoredSurfaces),
    hasSchedule: zoom?.stations.some((station) => station.stopSemiDiameter !== undefined) ?? false,
    stopInsideElement: authoredSurfaces.some(
      (surface) => surface.label === "STO" && surface.stopPlacement === "inside-element",
    ),
  });
  const elements = authoredElements.map((element, index) => ingestElement(element, index, context));
  const { surfaces, media, labelIndex } = ingestSurfaces(data, authoredElements, stopAuthority, context);

  const focus: CanonicalFocus = {
    closeFocusM: data.closeFocusM as number,
    keyframes: withDefault(data, lensDefault("focus.keyframes"), "", context) as number[],
    step: withDefault(data, lensDefault("focus.step"), "", context) as number,
  };
  put(focus as unknown as Untyped, "description", data.focusDescription);
  if (has(data, "finiteConjugates")) {
    focus.conjugates = Array.isArray(data.finiteConjugates)
      ? ingestConjugates(data.finiteConjugates as Untyped[], focus.keyframes, zoom?.stations.length ?? 1, context)
      : [];
    if (!Array.isArray(data.finiteConjugates)) context.issues.push(`finiteConjugates must be a list`);
  }
  ingestPublishedStations(data, zoom, focus, context);
  const gaps = ingestGaps(data, zoom !== undefined, labelIndex, surfaces, context);

  const catalog: Untyped = {};
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
    put(catalog, field, data[field]);
  }
  if (has(data, "focalLengthMarketing") || has(data, "focalLengthDesign")) {
    const focalLengthMm: Untyped = {};
    put(focalLengthMm, "marketing", data.focalLengthMarketing);
    put(focalLengthMm, "design", data.focalLengthDesign);
    catalog.focalLengthMm = focalLengthMm;
  }
  if (has(data, "apertureMarketing") || has(data, "apertureDesign")) {
    const fNumber: Untyped = {};
    put(fNumber, "marketing", data.apertureMarketing);
    put(fNumber, "design", data.apertureDesign);
    catalog.fNumber = fNumber;
  }

  const aperture: Untyped = {};
  if (!Array.isArray(data.nominalFno)) put(aperture, "nominalFNumber", data.nominalFno);
  aperture.fStops = copy(data.fstopSeries);
  aperture.maxFNumber = withDefault(data, lensDefault("aperture.maxFNumber"), "", context);
  aperture.step = withDefault(data, lensDefault("aperture.step"), "", context);
  put(aperture, "blades", data.apertureBlades);
  put(aperture, "bladeRoundedness", data.apertureBladeRoundedness);
  aperture.stopRadius = stopAuthority;

  const layout: Untyped = {};
  const rays: Untyped = {};
  const checks: Untyped = {};
  for (const row of LENS_SCHEMA_DEFAULTS) {
    const [group, field] = row.path.split(".");
    const target = group === "layout" ? layout : group === "rays" ? rays : group === "checks" ? checks : null;
    if (target) target[field] = withDefault(data, row, "", context);
  }
  layout.yScFill = data.yScFill;

  const lens: Untyped = { kind: "lens", key: data.key };
  if (has(data, "maker")) lens.maker = data.maker;
  lens.name = data.name;
  put(lens, "subtitle", data.subtitle);
  lens.visible = withDefault(data, lensDefault("visible"), "", context);
  put(lens, "publishedAt", data.publishedAt);
  lens.catalog = catalog;
  lens.source = ingestSource(data);
  lens.elements = elements;
  lens.media = media;
  lens.surfaces = surfaces;
  if (zoom) lens.zoom = zoom;
  lens.focus = focus;
  lens.gaps = gaps;
  lens.aperture = aperture;
  if (has(data, "aberrationControl")) {
    lens.aberrationControl = ingestAberrationControl(data.aberrationControl as Untyped, labelIndex, context);
  }
  for (const field of ["projection", "opticalPath", "perspectiveControl"]) put(lens, field, data[field]);
  if (has(data, "rearPlates")) lens.rearPlates = ingestRearPlates(data.rearPlates, context);
  put(lens, "groups", data.groups);
  put(lens, "doublets", data.doublets);
  lens.layout = layout;
  lens.rays = rays;
  lens.checks = checks;
  return finish(key, lens as unknown as CanonicalLens, context);
}

function ingestSource(data: Untyped): Untyped {
  const source: Untyped = {};
  put(source, "patentNumber", data.patentNumber);
  put(source, "patentYear", data.patentYear);
  put(source, "authors", data.patentAuthors);
  put(source, "assignees", data.patentAssignees);
  put(source, "errata", data.sourceErrata);
  return source;
}

function ingestRearPlates(plates: unknown, context: IngestContext): CanonicalRearPlate[] {
  if (!Array.isArray(plates)) {
    context.issues.push(`rearPlates must be a list`);
    return [];
  }
  return plates.map((plate, index) => ingestRearPlate(plate as Untyped, `rearPlates[${index}]`, context));
}

/**
 * Ingest a V1 teleconverter file. A converter takes no lens defaults; its elements and plates take theirs.
 *
 * @param input - the file's default export, as authored
 * @returns the canonical prescription and its provenance
 * @throws PrescriptionIngestError naming every reason the canonical form cannot hold the file
 */
export function ingestTeleconverterV1(input: TeleconverterData): IngestedPrescription<CanonicalTeleconverter> {
  const data = input as unknown as Untyped;
  const key = typeof data.key === "string" ? data.key : "?";
  const context = createContext();
  refuseUnknownFields(data, TELECONVERTER_FIELDS, "", context);
  requireFields(data, ["key", "name", "magnification", "lensMounts", "masterImageDistanceMm"], context);
  const authoredElements = requireArray(data, "elements", key);
  requireArray(data, "surfaces", key);

  const elements = authoredElements.map((element, index) => ingestElement(element, index, context));
  /* A converter has no stop, so every authored radius is read. */
  const { surfaces, media } = ingestSurfaces(data, authoredElements, "authored", context);

  const catalog: Untyped = { lensMounts: copy(data.lensMounts) };
  for (const field of ["specs", "elementCount", "groupCount"]) put(catalog, field, data[field]);

  const converter: Untyped = { kind: "teleconverter", key: data.key };
  if (has(data, "maker")) converter.maker = data.maker;
  converter.name = data.name;
  put(converter, "subtitle", data.subtitle);
  put(converter, "visible", data.visible);
  put(converter, "publishedAt", data.publishedAt);
  converter.catalog = catalog;
  converter.source = ingestSource(data);
  converter.magnification = data.magnification;
  converter.masterImageDistanceMm = data.masterImageDistanceMm;
  put(converter, "universal", data.universal);
  put(converter, "minHostFNumber", data.minHostFno);
  put(converter, "incompatibleLensKeys", data.incompatibleLensKeys);
  converter.elements = elements;
  converter.media = media;
  converter.surfaces = surfaces;
  if (has(data, "rearPlates")) converter.rearPlates = ingestRearPlates(data.rearPlates, context);
  put(converter, "groups", data.groups);
  put(converter, "doublets", data.doublets);
  return finish(key, converter as unknown as CanonicalTeleconverter, context);
}
