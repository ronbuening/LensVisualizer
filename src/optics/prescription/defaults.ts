/**
 * Schema defaults — the values a lens or teleconverter file may leave out, applied by ingest with provenance.
 *
 * Each row names the canonical field, the V1 field it comes from, the value, how V1 applies it, and the code that
 * reads the field, so the row can be checked against its reader. Ingest fills an omitted field from its row and
 * records the canonical path in `CanonicalProvenance.defaulted`; a default written out and a default left out
 * therefore ingest to the same prescription and share a semantic fingerprint.
 *
 * V1 applies defaults two ways, and the V1 view (`toLensData.ts`) reproduces both:
 * - `catalog`: the V1 catalog spread them under every lens file, so the engine always sees a value. The view's merged
 *   form writes them in, and it is how the catalogs, `buildLens` and the tools apply them.
 * - `engine`: the engine falls back to them where the field is absent, so the merged data keeps the omission.
 *
 * Nothing outside tests spreads this table: lens data gets its defaults through ingest and the V1 view. The one
 * exception is the validator-first spread in `asTheValidatorReadsIt` (`compile.ts`), whose comment says why.
 *
 * Known reader disagreements, left as they are (OPTICS_ENGINE_REWRITE_SPEC.md, S2.P4.T1 spec–code contradictions):
 * `buildLens` reads `lensShiftFrac || 0`, and the chromatic ray-fan summary reads `L.offAxisFieldFrac ?? 0.7`.
 * Neither fallback is reached on catalog data, which always carries the merged value.
 */

import { DEFAULT_MAX_RIM_ANGLE_DEG } from "../geometry/surfaceProfile.js";
import type { LensData } from "../../types/optics.js";

/** One default of the schema. */
export interface SchemaDefault {
  /** Canonical path relative to the record the row belongs to: the prescription, an element or a rear plate. */
  readonly path: string;
  /** V1 field name on the same record. */
  readonly v1Field: string;
  readonly value: unknown;
  /** How V1 applies the default: merged by the catalog, or used by the engine in place of an absent field. */
  readonly v1Applied: "catalog" | "engine";
  /** The code that reads the field and the fallback it applies, as `module: expression`. */
  readonly reader: string;
  /**
   * Whether an authored value counts as the default. Absent means only an omitted field does. `zoomStep` is read as
   * `data.zoomStep || 0.004`, so any falsy authored step is the default too.
   */
  readonly authoredIsDefault?: (authored: unknown) => boolean;
  /**
   * Set on a default that fills several canonical members: `value` is then the V1 declaration the default stands
   * for, which ingest reads as it reads an authored one, and `path` names that declaration in provenance.
   */
  readonly spread?: true;
}

const BUILD_LENS = "src/optics/first-order/lensConstants.ts computeLensConstants";

/** Defaults of a lens prescription, in canonical field order. */
export const LENS_SCHEMA_DEFAULTS: readonly SchemaDefault[] = [
  {
    path: "visible",
    v1Field: "visible",
    value: true,
    v1Applied: "catalog",
    reader:
      "src/utils/catalog/lensCatalog.ts: data.visible === false; scripts/generate-build-metadata.mjs: data.visible !== false",
  },
  {
    path: "zoom.apertureModel",
    v1Field: "zoomApertureModel",
    value: "from-nominal-fno",
    v1Applied: "engine",
    reader: `${BUILD_LENS}: data.zoomApertureModel !== "fixed-iris"`,
  },
  {
    path: "zoom.step",
    v1Field: "zoomStep",
    value: 0.004,
    v1Applied: "engine",
    reader: `${BUILD_LENS}: data.zoomStep || 0.004`,
    authoredIsDefault: (authored) => !authored,
  },
  {
    path: "focus.keyframes",
    v1Field: "focusPositions",
    value: [0, 1],
    v1Applied: "engine",
    reader: `${BUILD_LENS} and src/optics/validateLensData.ts: data.focusPositions ?? [0, 1]`,
  },
  {
    path: "focus.step",
    v1Field: "focusStep",
    value: 0.004,
    v1Applied: "catalog",
    reader: `${BUILD_LENS}: data.focusStep`,
  },
  {
    /* Spread over `zoom.stations[i].published` and `.publishedFocus`, or `focus.published` on a prime. */
    path: "publishedStations",
    v1Field: "publishedStations",
    value: { focus: [] },
    v1Applied: "engine",
    reader:
      "src/optics/publishedStations.ts publishedStationGrid: every zoom station where publishedStations or its zoom " +
      "list is absent or empty, at infinity focus alone where it declares no focus keyframe",
    spread: true,
  },
  {
    path: "aperture.maxFNumber",
    v1Field: "maxFstop",
    value: 16,
    v1Applied: "catalog",
    reader: `${BUILD_LENS}: data.maxFstop`,
  },
  {
    path: "aperture.step",
    v1Field: "apertureStep",
    value: 0.004,
    v1Applied: "catalog",
    reader: `${BUILD_LENS}: data.apertureStep`,
  },
  { path: "layout.svgW", v1Field: "svgW", value: 1080, v1Applied: "catalog", reader: `${BUILD_LENS}: data.svgW` },
  { path: "layout.svgH", v1Field: "svgH", value: 490, v1Applied: "catalog", reader: `${BUILD_LENS}: data.svgH` },
  { path: "layout.scFill", v1Field: "scFill", value: 0.55, v1Applied: "catalog", reader: `${BUILD_LENS}: data.scFill` },
  {
    path: "layout.maxAspectRatio",
    v1Field: "maxAspectRatio",
    value: 1.6,
    v1Applied: "catalog",
    reader: `${BUILD_LENS}: data.maxAspectRatio`,
  },
  {
    path: "layout.lensShiftFrac",
    v1Field: "lensShiftFrac",
    value: 0.08,
    v1Applied: "catalog",
    reader: `${BUILD_LENS}: data.lensShiftFrac || 0`,
  },
  {
    path: "rays.rayFractions",
    v1Field: "rayFractions",
    value: [-0.83, -0.5, -0.17, 0.17, 0.5, 0.83],
    v1Applied: "catalog",
    reader: `${BUILD_LENS}: data.rayFractions`,
  },
  {
    path: "rays.rayLeadFrac",
    v1Field: "rayLeadFrac",
    value: 0.35,
    v1Applied: "catalog",
    reader: `${BUILD_LENS}: data.rayLeadFrac`,
  },
  {
    path: "rays.offAxisFieldFrac",
    v1Field: "offAxisFieldFrac",
    value: 0.6,
    v1Applied: "catalog",
    reader: `${BUILD_LENS}: data.offAxisFieldFrac; src/optics/analysis/chromatic.ts: L.offAxisFieldFrac ?? 0.7`,
  },
  {
    path: "rays.offAxisFractions",
    v1Field: "offAxisFractions",
    value: [-0.75, -0.375, 0, 0.375, 0.75],
    v1Applied: "catalog",
    reader: `${BUILD_LENS}: data.offAxisFractions`,
  },
  {
    path: "checks.gapSagFrac",
    v1Field: "gapSagFrac",
    value: 0.9,
    v1Applied: "catalog",
    reader: `${BUILD_LENS} and src/optics/validateLensData.ts: data.gapSagFrac`,
  },
  {
    path: "checks.maxRimAngleDeg",
    v1Field: "maxRimAngleDeg",
    value: DEFAULT_MAX_RIM_ANGLE_DEG,
    v1Applied: "catalog",
    reader: `${BUILD_LENS}: data.maxRimAngleDeg; src/optics/validateLensData.ts: falls back to MAX_RIM_SLOPE_TAN, the same angle`,
  },
];

/** Defaults of one element, of a lens or a teleconverter. */
export const ELEMENT_SCHEMA_DEFAULTS: readonly SchemaDefault[] = [
  {
    path: "indexReference",
    v1Field: "indexReference",
    value: "d",
    v1Applied: "engine",
    reader:
      'src/optics/dispersion.ts makeSurfaceDispersion and src/optics/chromatic/*: indexReference === "e"; ' +
      'src/components/display/ElementInspector.tsx and src/optics/analysis/mtfSupport.ts: indexReference ?? "d"',
  },
  {
    path: "apd",
    v1Field: "apd",
    value: false,
    v1Applied: "engine",
    reader:
      'src/utils/theme/themes.ts and src/components/display/ElementInspector.tsx: e.apd truthy, === "patent" / "inferred"',
  },
];

/** Defaults of one rear plate, of a lens or a teleconverter. */
export const REAR_PLATE_SCHEMA_DEFAULTS: readonly SchemaDefault[] = [
  {
    path: "indexReference",
    v1Field: "indexReference",
    value: "d",
    v1Applied: "engine",
    reader:
      "src/optics/prescription/rearPlates.ts expandRearPlates: copied onto the plate's synthetic element only when " +
      "authored, then read as an element's",
  },
];

/**
 * Whether an authored V1 value takes the default of its row.
 *
 * @param row - the schema default
 * @param authored - the field's value in the file; `undefined` when the file leaves it out
 * @returns true when ingest should fill the field from the row
 */
export function takesDefault(row: SchemaDefault, authored: unknown): boolean {
  return authored === undefined || (row.authoredIsDefault?.(authored) ?? false);
}

/**
 * A fresh copy of a row's value, so no prescription shares an object with the table or with another prescription.
 *
 * @param row - the schema default
 * @returns the value, with an array or object copied
 */
export function defaultValue(row: SchemaDefault): unknown {
  return row.value !== null && typeof row.value === "object" ? structuredClone(row.value) : row.value;
}

/**
 * The `catalog` rows as a V1 object: what the V1 view merges under every lens file. Tests that need the raw table use
 * it; lens data gets its defaults through ingest and the V1 view.
 *
 * @returns a fresh object with one member per `catalog` row
 */
export function v1CatalogDefaults(): Partial<LensData> {
  const out: Record<string, unknown> = {};
  for (const row of LENS_SCHEMA_DEFAULTS) {
    if (row.v1Applied === "catalog") out[row.v1Field] = defaultValue(row);
  }
  return out as Partial<LensData>;
}
