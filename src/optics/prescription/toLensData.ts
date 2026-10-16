/**
 * V1 view — rebuilds V1 lens and teleconverter data from a canonical prescription and its provenance.
 *
 * The catalog and UI consume this source-preserving V1 `LensData` view. The compiler uses the shared field
 * projection with canonical values alone; it never restores ignored provenance into optical construction. For a file of either version the defaulted fields stay omitted, and the authored
 * values the engine ignores come back from `provenance.ignored`: a V2 `zoom.step: 0` gives `zoomStep: 0`, a zero
 * aspheric term returns, a numeric flat radius keeps its number. Only the V1 spellings the canonical form holds once
 * need V1 provenance (`provenance.v1`: the containers written empty, and how `publishedStations` was written). Given a
 * V1 file, the view gives it back as written. Given none (a V2 file), it writes the plain V1 spelling of each field:
 * `1e15` for a radius written `"flat"`, every aspheric coefficient V1 requires, `[wide, tele]` zoom labels where only
 * the end stations are labelled.
 *
 * Two forms:
 * - `toLensData` is what the engine consumes, the catalog defaults merged in, as the V1 catalog spread them;
 * - `toLensDataInput` is the file as authored, which the converter writes back for `--to-version 1`.
 */

import type { LensConstructionData } from "../types.js";
import { ASPHERIC_COEFFICIENT_SCHEMA } from "../../types/asphericSchema.js";
import type {
  AberrationControlConfig,
  ElementData,
  FiniteConjugate,
  LensData,
  LensDataInput,
  PublishedStations,
  RearPlateData,
  SurfaceData,
} from "../../types/optics.js";
import type { TeleconverterData } from "../../types/teleconverter.js";
import {
  FLAT_RADIUS,
  type CanonicalElement,
  type CanonicalLens,
  type CanonicalMedium,
  type CanonicalProvenance,
  type CanonicalRearPlate,
  type CanonicalSurface,
  type CanonicalTeleconverter,
  type IngestedPrescription,
  type V1PublishedStationsSpelling,
  type V1Spelling,
} from "./canonical.js";
import {
  ELEMENT_SCHEMA_DEFAULTS,
  LENS_SCHEMA_DEFAULTS,
  REAR_PLATE_SCHEMA_DEFAULTS,
  type SchemaDefault,
} from "./defaults.js";
import { V1_FLAT_RADIUS } from "./ingestV1.js";

import { associateCanonical } from "./identity.js";
import { zoomIndexToT } from "../state/stationTables.js";

type Untyped = Record<string, unknown>;

/**
 * Top-level members of a V1 file in the order the converter prints them (`--to-version 1`): the declaration order of
 * `LensData`, less `attachedTeleconverter`, which only the composer writes, and of `TeleconverterData`. The views
 * below write a lens's tail in another order, which nothing reads: the layout, rays and checks fields follow
 * `LENS_SCHEMA_DEFAULTS`, and `yScFill` comes after them. A record below the top level prints in the order its view
 * writes it, which is its type's declaration order but for a surface's `elemId`, written before `sd` as the catalog
 * writes it, and records keyed by surface label print in surface order.
 */
export const V1_PRINT_ORDER = {
  lens: [
    "publishedAt",
    "key",
    "maker",
    "name",
    "subtitle",
    "specs",
    "focalLengthMarketing",
    "focalLengthDesign",
    "apertureMarketing",
    "apertureDesign",
    "lensMounts",
    "imageFormat",
    "imageCircleMm",
    "patentNumber",
    "patentAuthors",
    "patentAssignees",
    "patentYear",
    "sourceErrata",
    "elementCount",
    "groupCount",
    "visible",
    "opticalConfiguration",
    "acceptsTeleconverters",
    "perspectiveControl",
    "projection",
    "opticalPath",
    "aberrationControl",
    "nominalFno",
    "closeFocusM",
    "zoomCloseFocusM",
    "zoomStopSemiDiameters",
    "zoomApertureModel",
    "focusStep",
    "maxFstop",
    "apertureStep",
    "fstopSeries",
    "elements",
    "surfaces",
    "rearPlates",
    "asph",
    "var",
    "varLabels",
    "focusPositions",
    "finiteConjugates",
    "publishedStations",
    "groups",
    "doublets",
    "zoomPositions",
    "zoomStep",
    "zoomLabels",
    "focusDescription",
    "svgW",
    "svgH",
    "scFill",
    "yScFill",
    "maxRimAngleDeg",
    "gapSagFrac",
    "maxAspectRatio",
    "lensShiftFrac",
    "rayFractions",
    "rayLeadFrac",
    "offAxisFieldFrac",
    "offAxisFractions",
    "apertureBlades",
    "apertureBladeRoundedness",
  ] satisfies readonly (keyof LensDataInput)[],
  teleconverter: [
    "publishedAt",
    "key",
    "maker",
    "visible",
    "name",
    "subtitle",
    "specs",
    "magnification",
    "lensMounts",
    "universal",
    "minHostFno",
    "incompatibleLensKeys",
    "patentNumber",
    "patentAuthors",
    "patentAssignees",
    "patentYear",
    "elementCount",
    "groupCount",
    "elements",
    "surfaces",
    "rearPlates",
    "asph",
    "groups",
    "doublets",
    "masterImageDistanceMm",
  ] satisfies readonly (keyof TeleconverterData)[],
} as const;

/**
 * Top-level members that open a section of a V1 file, as the lens template's sections run, in `V1_PRINT_ORDER`: the
 * metadata, the switches with the focus and aperture fields, `elements`, `surfaces`, `rearPlates`, `asph`, the
 * variable gaps with the focus key frames, the conjugates and published stations, the annotations, the zoom fields,
 * and the layout. A converter's sections are its own fields, then the same lists. Going to V1, the converter prints a
 * blank line before the first member of each section a file has, the identity fields that open the file aside.
 */
export const V1_GROUP_STARTS = {
  lens: [
    "focalLengthMarketing",
    "visible",
    "elements",
    "surfaces",
    "rearPlates",
    "asph",
    "var",
    "finiteConjugates",
    "groups",
    "zoomPositions",
    "svgW",
  ] satisfies readonly (typeof V1_PRINT_ORDER.lens)[number][],
  teleconverter: [
    "magnification",
    "elements",
    "surfaces",
    "rearPlates",
    "asph",
    "groups",
    "masterImageDistanceMm",
  ] satisfies readonly (typeof V1_PRINT_ORDER.teleconverter)[number][],
} as const;

/**
 * Lists of a V1 file whose rows keep a blank line their source had, before the row or before one of its leading
 * comments; the converter breaks such a list across lines when one does. A lens and a converter have the same two.
 */
export const V1_ROW_LISTS: readonly string[] = ["surfaces", "elements"];

/**
 * Set `target[field]` to a copy of `value` unless the value is `undefined`. A string, number, boolean or bigint is its
 * own copy; anything else goes through `structuredClone`, which refuses a function or a symbol.
 */
function put(target: Untyped, field: string, value: unknown): void {
  if (value === undefined) return;
  const kind = typeof value;
  target[field] = kind === "object" || kind === "function" || kind === "symbol" ? structuredClone(value) : value;
}

/** What the converter asks of the V1 file it writes beyond the view. */
export interface V1FileOptions {
  /**
   * The `sd` to write on a stop whose radius the engine derives or takes from a schedule, which V1's `SurfaceData`
   * requires and the prescription does not hold; V1 ingest sets it aside again.
   */
  stopRadius?: number;
  /**
   * Containers to write empty where the view writes none (`asph`, `var`, `varLabels`, `aberrationControl.varLabels`):
   * those a converter note names, "(moved from asph)", so that the comments the note carries return to them.
   */
  emptyContainers?: V1Spelling["emptyContainers"];
}

/** What the view writes for one defaulted field. */
interface ViewContext {
  readonly provenance: CanonicalProvenance;
  /** How the file spelled it in V1; empty for a file of another format, which takes the plain V1 spelling. */
  readonly v1: V1Spelling;
  /** Write the catalog defaults, as the V1 catalog merges them; otherwise write only what the file authored. */
  readonly mergeCatalogDefaults: boolean;
  /** The `sd` of a stop the prescription holds none for, when the converter supplies one. */
  readonly stopRadius?: number;
}

function viewContext(
  provenance: CanonicalProvenance,
  mergeCatalogDefaults: boolean,
  options?: V1FileOptions,
): ViewContext {
  const spelling = provenance.v1 ?? { emptyContainers: [] };
  const extra = options?.emptyContainers ?? [];
  const v1 = extra.length === 0 ? spelling : { ...spelling, emptyContainers: [...spelling.emptyContainers, ...extra] };
  return { provenance, v1, mergeCatalogDefaults, stopRadius: options?.stopRadius };
}

/**
 * Write a field that has a schema default.
 *
 * @param target - the V1 record being built
 * @param row - the schema default
 * @param base - canonical path of the record, empty for the prescription itself
 * @param value - the prescription's value
 * @param view - provenance and the merge choice
 */
function putDefaulted(target: Untyped, row: SchemaDefault, base: string, value: unknown, view: ViewContext): void {
  const path = base ? `${base}.${row.path}` : row.path;
  if (!view.provenance.defaulted.includes(path)) {
    put(target, row.v1Field, value);
    return;
  }
  const standIn = view.provenance.ignored[path];
  if (standIn !== undefined) put(target, row.v1Field, standIn);
  else if (row.v1Applied === "catalog" && view.mergeCatalogDefaults) put(target, row.v1Field, value);
}

function lensRow(path: string): SchemaDefault {
  const row = LENS_SCHEMA_DEFAULTS.find((candidate) => candidate.path === path);
  if (!row) throw new Error(`toLensData: no lens schema default at "${path}"`);
  return row;
}

function ignoredAt(view: ViewContext, path: string): unknown {
  return view.provenance.ignored[path];
}

/* ── Elements, plates, surfaces ── */

function elementView(element: CanonicalElement, index: number, view: ViewContext): ElementData {
  const at = `elements[${index}]`;
  const [indexReferenceRow, apdRow] = ELEMENT_SCHEMA_DEFAULTS;
  const out: Untyped = { id: element.id, name: element.name };
  put(out, "diagramLabel", element.diagramLabel);
  put(out, "maxSdRatio", element.maxSdRatio);
  out.label = element.label;
  out.type = element.type;
  out.nd = element.nd;
  put(out, "vd", element.vd);
  putDefaulted(out, indexReferenceRow, at, element.indexReference, view);
  put(out, "indexReferenceNote", element.indexReferenceNote);
  put(out, "fl", element.focalLengthMm);
  put(out, "glass", element.glass);
  put(out, "role", element.role);
  put(out, "absorptionCoefficientPerMm", element.absorptionCoefficientPerMm);
  putDefaulted(out, apdRow, at, element.apd, view);
  put(out, "apdNote", element.apdNote);
  put(out, "cemented", element.cemented);
  for (const field of ["dPgF", "nC", "nF", "ng"] as const) put(out, field, element[field]);
  if (element.span) {
    out.fromSurface = element.span[0];
    out.toSurface = element.span[1];
  }
  return out as unknown as ElementData;
}

function rearPlateView(plate: CanonicalRearPlate, index: number, view: ViewContext): RearPlateData {
  const out: Untyped = {};
  put(out, "label", plate.label);
  out.thicknessMm = plate.thicknessMm;
  out.nd = plate.nd;
  out.vd = plate.vd;
  put(out, "glass", plate.glass);
  putDefaulted(out, REAR_PLATE_SCHEMA_DEFAULTS[0], `rearPlates[${index}]`, plate.indexReference, view);
  for (const field of ["dPgF", "nC", "nF", "ng"] as const) put(out, field, plate[field]);
  out.gapAfterMm = plate.gapAfterMm;
  put(out, "sd", plate.sd);
  put(out, "source", plate.source);
  return out as unknown as RearPlateData;
}

/** The V1 `elemId` and `nd` of a surface's medium. */
function mediumView(
  surface: CanonicalSurface,
  elements: readonly CanonicalElement[],
  media: readonly CanonicalMedium[],
): { nd: number; elemId: number } {
  const { medium } = surface;
  if (medium === null) return { nd: 1, elemId: 0 };
  if (typeof medium === "string") {
    const found = media.find((candidate) => candidate.id === medium);
    if (!found) throw new Error(`toLensData: surface "${surface.label}" names unknown medium "${medium}"`);
    return { nd: found.nd, elemId: 0 };
  }
  const element = elements.find((candidate) => candidate.id === medium);
  if (!element) throw new Error(`toLensData: surface "${surface.label}" names unknown element ${medium}`);
  return { nd: element.nd, elemId: medium };
}

function surfaceView(
  surface: CanonicalSurface,
  index: number,
  elements: readonly CanonicalElement[],
  media: readonly CanonicalMedium[],
  view: ViewContext,
): SurfaceData {
  const at = `surfaces[${index}]`;
  const out: Untyped = { label: surface.label };
  out.R = surface.R === FLAT_RADIUS ? (ignoredAt(view, `${at}.R`) ?? V1_FLAT_RADIUS) : surface.R;
  out.d = surface.d;
  const { nd, elemId } = mediumView(surface, elements, media);
  out.nd = nd;
  out.elemId = elemId;
  put(out, "sd", surface.sd ?? ignoredAt(view, `${at}.sd`) ?? view.stopRadius);
  put(out, "innerSd", surface.innerSd);
  put(out, "stopPlacement", surface.stopPlacement);
  put(out, "interaction", surface.interaction);
  put(out, "diffractive", surface.diffractive);
  return out as unknown as SurfaceData;
}

/** V1 `asph`: every term V1 requires, zero where the prescription has none, and any zero the file wrote. */
function asphView(
  surfaces: readonly CanonicalSurface[],
  view: ViewContext,
): Record<string, Record<string, number>> | undefined {
  const entries: [string, Record<string, number>][] = [];
  surfaces.forEach((surface, index) => {
    if (!surface.asphere) return;
    const terms: Record<string, number> = {};
    for (const { key, required } of ASPHERIC_COEFFICIENT_SCHEMA) {
      const term =
        (surface.asphere as Record<string, number | undefined>)[key] ??
        (ignoredAt(view, `surfaces[${index}].asphere.${key}`) as number | undefined) ??
        (required ? 0 : undefined);
      if (term !== undefined) terms[key] = term;
    }
    entries.push([surface.label, terms]);
  });
  if (entries.length === 0 && !view.v1.emptyContainers.includes("asph")) return undefined;
  return Object.fromEntries(entries);
}

/** The `[label, text]` pairs of the labelled gaps, in surface order, as ingest requires the file to list them. */
function gapLabels(gaps: readonly { surface: string; label?: string }[]): [string, string][] {
  return gaps.filter((gap) => gap.label !== undefined).map((gap): [string, string] => [gap.surface, gap.label!]);
}

/* ── Lens ── */

function stationsList<Value>(values: readonly (Value | undefined)[]): Value[] | undefined {
  return values.every((value) => value !== undefined) ? (values as Value[]) : undefined;
}

function sameIndices(a: readonly number[], b: readonly number[]): boolean {
  return a.length === b.length && a.every((value, at) => value === b[at]);
}

/**
 * The one V1 spelling of published stations given no provenance: no object where they hold the default, a `zoom` list
 * only where it leaves a station out, and one `focus` list where every published station shares it.
 */
function plainPublishedSpelling(
  published: readonly boolean[],
  lists: readonly number[][],
): V1PublishedStationsSpelling | undefined {
  const every = published.every(Boolean);
  if (every && lists.every((list) => list.length === 0)) return undefined;
  const shared = lists[published.indexOf(true)] ?? [];
  const one = lists.every((list, station) => sameIndices(list, published[station] ? shared : []));
  return {
    zoom: every ? "omitted" : "listed",
    focus: lists.every((list) => list.length === 0) ? "omitted" : one ? "one" : "perStation",
  };
}

function publishedStationsView(lens: CanonicalLens, view: ViewContext): PublishedStations | undefined {
  if (view.provenance.defaulted.includes(lensRow("publishedStations").path)) return undefined;
  const stations = lens.zoom?.stations;
  const published = stations ? stations.map((station) => station.published) : [true];
  const lists = stations ? stations.map((station) => station.publishedFocus) : [lens.focus.published ?? []];
  const spelling = view.v1.publishedStations ?? plainPublishedSpelling(published, lists);
  if (!spelling) return undefined;

  const out: PublishedStations = {};
  if (spelling.zoom === "empty") out.zoom = [];
  else if (spelling.zoom === "listed") out.zoom = published.flatMap((flag, station) => (flag ? [station] : []));
  if (spelling.focus === "one") out.focus = [...(lists[published.indexOf(true)] ?? [])];
  else if (spelling.focus === "perStation") out.focus = lists.map((list) => [...list]);
  return out;
}

function zoomLabelsView(lens: CanonicalLens): string[] | undefined {
  const labels = lens.zoom?.stations.map((station) => station.label);
  if (!labels || labels.every((label) => label === undefined)) return undefined;
  if (labels.every((label) => label !== undefined)) return labels;
  const last = labels.length - 1;
  if (labels.every((label, index) => (index === 0 || index === last) === (label !== undefined))) {
    return [labels[0]!, labels[last]!];
  }
  throw new Error(`toLensData: "${lens.key}" labels zoom stations V1 can only label all, or the first and last`);
}

function conjugatesView(lens: CanonicalLens, view: ViewContext): FiniteConjugate[] | undefined {
  const conjugates = lens.focus.conjugates;
  if (!conjugates) return undefined;
  const stationCount = lens.zoom?.stations.length ?? 1;
  return conjugates.map((conjugate, index) => {
    const at = `focus.conjugates[${index}]`;
    const zoomT = zoomIndexToT(conjugate.zoomStation, stationCount);
    return {
      focusT: (ignoredAt(view, `${at}.focusT`) as number | undefined) ?? lens.focus.keyframes[conjugate.keyframe],
      zoomT: (ignoredAt(view, `${at}.zoomT`) as number | undefined) ?? zoomT,
      objectDistanceMm: conjugate.objectDistanceMm,
      distanceReference: conjugate.distanceReference,
      source: conjugate.source,
    };
  });
}

function aberrationControlView(lens: CanonicalLens, view: ViewContext): AberrationControlConfig | undefined {
  const control = lens.aberrationControl;
  if (!control) return undefined;
  const out: Untyped = { label: control.label };
  for (const field of ["description", "minLabel", "centerLabel", "maxLabel", "step"] as const) {
    put(out, field, control[field]);
  }
  out.var = Object.fromEntries(control.gaps.map((gap) => [gap.surface, structuredClone(gap.values)]));
  const labels = gapLabels(control.gaps);
  if (labels.length > 0 || view.v1.emptyContainers.includes("aberrationControl.varLabels")) {
    out.varLabels = labels;
  }
  return out as unknown as AberrationControlConfig;
}

function buildLensView(
  ingested: IngestedPrescription<CanonicalLens>,
  mergeCatalogDefaults: boolean,
  options?: V1FileOptions,
): Untyped {
  const { prescription: lens, provenance } = ingested;
  const view = viewContext(provenance, mergeCatalogDefaults, options);
  const { catalog, source, zoom, focus, aperture } = lens;
  const out: Untyped = {};

  put(out, "publishedAt", lens.publishedAt);
  out.key = lens.key;
  if (Object.hasOwn(lens, "maker")) put(out, "maker", lens.maker);
  out.name = lens.name;
  put(out, "subtitle", lens.subtitle);
  put(out, "specs", catalog.specs);
  put(out, "focalLengthMarketing", catalog.focalLengthMm?.marketing);
  put(out, "focalLengthDesign", catalog.focalLengthMm?.design);
  put(out, "apertureMarketing", catalog.fNumber?.marketing);
  put(out, "apertureDesign", catalog.fNumber?.design);
  put(out, "lensMounts", catalog.lensMounts);
  put(out, "imageFormat", catalog.imageFormat);
  put(out, "imageCircleMm", catalog.imageCircleMm);
  put(out, "patentNumber", source.patentNumber);
  put(out, "patentAuthors", source.authors);
  put(out, "patentAssignees", source.assignees);
  put(out, "patentYear", source.patentYear);
  put(out, "sourceErrata", source.errata);
  put(out, "elementCount", catalog.elementCount);
  put(out, "groupCount", catalog.groupCount);
  putDefaulted(out, lensRow("visible"), "", lens.visible, view);
  put(out, "opticalConfiguration", catalog.opticalConfiguration);
  put(out, "acceptsTeleconverters", catalog.acceptsTeleconverters);
  put(out, "perspectiveControl", lens.perspectiveControl);
  put(out, "projection", lens.projection);
  put(out, "opticalPath", lens.opticalPath);
  put(out, "aberrationControl", aberrationControlView(lens, view));

  put(
    out,
    "nominalFno",
    aperture.nominalFNumber ?? (zoom && stationsList(zoom.stations.map((station) => station.nominalFNumber))),
  );
  out.closeFocusM = focus.closeFocusM;
  if (zoom) {
    put(out, "zoomCloseFocusM", stationsList(zoom.stations.map((station) => station.closeFocusM)));
    put(out, "zoomStopSemiDiameters", stationsList(zoom.stations.map((station) => station.stopSemiDiameter)));
    putDefaulted(out, lensRow("zoom.apertureModel"), "", zoom.apertureModel, view);
  }
  putDefaulted(out, lensRow("focus.step"), "", focus.step, view);
  putDefaulted(out, lensRow("aperture.maxFNumber"), "", aperture.maxFNumber, view);
  putDefaulted(out, lensRow("aperture.step"), "", aperture.step, view);
  out.fstopSeries = [...aperture.fStops];

  out.elements = lens.elements.map((element, index) => elementView(element, index, view));
  out.surfaces = lens.surfaces.map((surface, index) => surfaceView(surface, index, lens.elements, lens.media, view));
  if (lens.rearPlates) out.rearPlates = lens.rearPlates.map((plate, index) => rearPlateView(plate, index, view));
  put(out, "asph", asphView(lens.surfaces, view));

  const emptyContainers = view.v1.emptyContainers;
  if (lens.gaps.length > 0 || emptyContainers.includes("var")) {
    out.var = Object.fromEntries(
      lens.gaps.map((gap) => [gap.surface, structuredClone(zoom ? gap.values : gap.values[0])]),
    );
  }
  const varLabels = gapLabels(lens.gaps);
  if (varLabels.length > 0 || emptyContainers.includes("varLabels")) out.varLabels = varLabels;

  putDefaulted(out, lensRow("focus.keyframes"), "", focus.keyframes, view);
  put(out, "finiteConjugates", conjugatesView(lens, view));
  put(out, "publishedStations", publishedStationsView(lens, view));
  put(out, "groups", lens.groups);
  put(out, "doublets", lens.doublets);
  if (zoom) {
    out.zoomPositions = zoom.stations.map((station) => station.focalLengthMm);
    putDefaulted(out, lensRow("zoom.step"), "", zoom.step, view);
    put(out, "zoomLabels", zoomLabelsView(lens));
  }
  put(out, "focusDescription", focus.description);

  for (const row of LENS_SCHEMA_DEFAULTS) {
    const [group, field] = row.path.split(".");
    const record =
      group === "layout" ? lens.layout : group === "rays" ? lens.rays : group === "checks" ? lens.checks : null;
    if (record) putDefaulted(out, row, "", (record as unknown as Untyped)[field], view);
  }
  out.yScFill = lens.layout.yScFill;
  put(out, "apertureBlades", aperture.blades);
  put(out, "apertureBladeRoundedness", aperture.bladeRoundedness);
  return out;
}

/**
 * The V1 lens data the engine consumes: the file as written, with the catalog defaults merged in.
 *
 * @param ingested - a canonical lens with its provenance
 * @returns fresh V1 `LensData`, sharing nothing with the prescription
 */
export function toLensData(ingested: IngestedPrescription<CanonicalLens>): LensData {
  const view = buildLensView(ingested, true) as unknown as LensData;
  if (ingested.attachedTeleconverter) view.attachedTeleconverter = structuredClone(ingested.attachedTeleconverter);
  associateCanonical(view, ingested);
  return view;
}

/** Compiler construction projection: canonical values only, with no provenance restoration. */
export function canonicalConstructionData(prescription: CanonicalLens): LensConstructionData {
  return buildLensView(
    { prescription, provenance: { format: 2, defaulted: [], ignored: {} } },
    true,
  ) as unknown as LensConstructionData;
}

/**
 * The V1 lens file as authored: like `toLensData`, without the catalog defaults the file left out.
 *
 * @param ingested - a canonical lens with its provenance
 * @param options - what the converter supplies for V1's types
 * @returns fresh V1 lens input data
 */
export function toLensDataInput(ingested: IngestedPrescription<CanonicalLens>, options?: V1FileOptions): LensDataInput {
  return buildLensView(ingested, false, options) as unknown as LensDataInput;
}

/* ── Teleconverter ── */

/**
 * The V1 teleconverter file. A converter takes no catalog defaults, so this is both what it authored and what the
 * composer reads.
 *
 * @param ingested - a canonical teleconverter with its provenance
 * @param options - what the converter asks of the file beyond the view: the containers to write empty
 * @returns fresh V1 `TeleconverterData`
 */
export function toTeleconverterData(
  ingested: IngestedPrescription<CanonicalTeleconverter>,
  options?: Pick<V1FileOptions, "emptyContainers">,
): TeleconverterData {
  const { prescription: converter, provenance } = ingested;
  const view = viewContext(provenance, false, options);
  const out: Untyped = {};
  put(out, "publishedAt", converter.publishedAt);
  out.key = converter.key;
  if (Object.hasOwn(converter, "maker")) put(out, "maker", converter.maker);
  put(out, "visible", converter.visible);
  out.name = converter.name;
  put(out, "subtitle", converter.subtitle);
  put(out, "specs", converter.catalog.specs);
  out.magnification = converter.magnification;
  out.lensMounts = [...converter.catalog.lensMounts];
  put(out, "universal", converter.universal);
  put(out, "minHostFno", converter.minHostFNumber);
  put(out, "incompatibleLensKeys", converter.incompatibleLensKeys);
  put(out, "patentNumber", converter.source.patentNumber);
  put(out, "patentAuthors", converter.source.authors);
  put(out, "patentAssignees", converter.source.assignees);
  put(out, "patentYear", converter.source.patentYear);
  put(out, "elementCount", converter.catalog.elementCount);
  put(out, "groupCount", converter.catalog.groupCount);
  out.elements = converter.elements.map((element, index) => elementView(element, index, view));
  out.surfaces = converter.surfaces.map((surface, index) =>
    surfaceView(surface, index, converter.elements, converter.media, view),
  );
  if (converter.rearPlates) {
    out.rearPlates = converter.rearPlates.map((plate, index) => rearPlateView(plate, index, view));
  }
  put(out, "asph", asphView(converter.surfaces, view));
  put(out, "groups", converter.groups);
  put(out, "doublets", converter.doublets);
  out.masterImageDistanceMm = converter.masterImageDistanceMm;
  return out as unknown as TeleconverterData;
}
