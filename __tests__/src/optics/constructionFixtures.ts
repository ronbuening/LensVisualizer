/** Numeric construction fixtures for tests that perturb individual columns before rebuilding a lens. */
import type { LensData, RuntimeLens } from "../../../src/types/optics.js";
import type { CanonicalLens } from "../../../src/optics/buildLens.js";
import { ingestTeleconverter } from "../../../src/optics/lensDataConversion.js";
import { attachTeleconverter } from "../../../src/optics/teleconverter.js";
import type { TeleconverterData } from "../../../src/types/teleconverter.js";
import { ingestLensV1 } from "../../../src/optics/prescription/v1/ingestV1.js";
import { buildCanonicalLens, buildLens, canonicalInput } from "../../../src/optics/buildLens.js";
import { assertValidLensData } from "../../../src/optics/prescription/canonicalInput.js";
import { canonicalForView } from "../../../src/optics/prescription/identity.js";
import validateLensData from "../../../src/optics/prescription/validate/index.js";
import { v1CatalogDefaults } from "../../../src/optics/prescription/defaults.js";

import type { LensDataInput } from "../../../src/types/optics.js";
import { canonicalConstructionData } from "../../../src/optics/prescription/constructionData.js";
import { expandedConstruction } from "../../../src/optics/prescription/rearPlates.js";
import { associateCanonical } from "../../../src/optics/prescription/identity.js";
import { LENS_CATALOG } from "../../../src/utils/catalog/lensCatalog.js";

/** Validate legacy fixtures with the archived defaults, preserving explicit undefined fields. */
export function validateFixtureLensInput(data: unknown): string[] {
  return validateLensData({ ...v1CatalogDefaults(), ...(data as object) });
}
export function constructionFixtureData(lens: RuntimeLens | CanonicalLens): LensData {
  const input =
    "S" in lens
      ? { ...canonicalInput(lens.source), attachedTeleconverter: lens.attachedTeleconverter }
      : canonicalInput(lens);
  const expanded = expandedConstruction(input, input.attachedTeleconverter);
  const data = "S" in lens ? expanded.data : canonicalConstructionData(input.prescription);
  const source = "S" in lens ? expanded.source : { surfaces: data.surfaces, elements: data.elements };
  source.surfaces.forEach((surface) => {
    if (surface.label === "STO" && !(surface.sd > 0)) surface.sd = 1;
  });
  const fixture = structuredClone({
    ...data,
    ...source,
    ...(input.attachedTeleconverter ? { attachedTeleconverter: input.attachedTeleconverter } : {}),
  });
  const clean = (value: unknown): void => {
    if (value && typeof value === "object")
      for (const [key, member] of Object.entries(value)) {
        if (member === undefined) delete (value as Record<string, unknown>)[key];
        else clean(member);
      }
  };
  clean(fixture);
  associateCanonical(fixture, input);
  return fixture;
}

/** Lazy so tests that only need a few mutation fixtures do not compile the catalog. */
export const CATALOG_CONSTRUCTION_FIXTURES: Record<string, LensData> = {};
for (const key of Object.keys(LENS_CATALOG)) {
  Object.defineProperty(CATALOG_CONSTRUCTION_FIXTURES, key, {
    enumerable: true,
    get: () => constructionFixtureData(LENS_CATALOG[key]),
  });
}

/** Adapt hand-written partial numeric fixtures before they become runtime views. No V1 view is retained. */
export function runtimeFixtureView(data: Partial<LensData>): Pick<RuntimeLens, "source" | "attachedTeleconverter"> {
  const { attachedTeleconverter, ...fields } = data;
  // Geometry probes may deliberately put an air row inside an explicit element span.
  if (fields.surfaces)
    fields.surfaces = fields.surfaces.map((surface) => ({
      ...surface,
      elemId:
        surface.nd === 1 ||
        !fields.elements?.some((element) => element.id === surface.elemId && element.nd === surface.nd)
          ? 0
          : surface.elemId,
    }));
  const source = ingestLensV1({
    key: "test-runtime-fixture",
    name: "Runtime fixture",
    closeFocusM: 0.5,
    yScFill: 0.5,
    nominalFno: 2,
    fstopSeries: [2, 4, 8, 16],
    elements: [],
    surfaces: [{ label: "STO", R: 1e15, d: 1, sd: 1, nd: 1, elemId: 0 }],
    ...fields,
  } as import("../../../src/types/optics.js").LensDataInput).prescription;
  return { source, ...(attachedTeleconverter ? { attachedTeleconverter } : {}) };
}

/** Convert legacy numeric test fixtures explicitly; app construction itself never accepts a V1 file. */
export function buildFixtureLens(data: object): RuntimeLens {
  if (!data || (!("schema" in data) && !("kind" in data) && !canonicalForView(data))) {
    assertValidLensData(data as LensData, validateFixtureLensInput(data));
    return buildCanonicalLens(ingestLensV1(data as LensDataInput));
  }
  return buildLens(data as CanonicalLens);
}

/** Numeric fit fixtures are converted before exercising production canonical composition. */
export function attachFixtureTeleconverter(
  host: LensData | CanonicalLens,
  tc: TeleconverterData | import("../../../src/optics/buildLens.js").CanonicalTeleconverter,
): CanonicalLens {
  const fields = { ...host } as LensData;
  delete fields.zoomLabels;
  if (!("kind" in host) && !canonicalForView(host)) assertValidLensData(host, validateFixtureLensInput(fields));
  const hostInput = "kind" in host ? host : (canonicalForView(host) ?? ingestLensV1(fields)).prescription;
  const converter = "kind" in tc ? tc : ingestTeleconverter(tc).prescription;
  return attachTeleconverter(hostInput, converter);
}

/** Historical expanded numeric echoes used only by cross-revision capture tests. */
export function expandFixtureRearPlates(data: LensData): LensData {
  if (!data.rearPlates?.length) return data;
  const ingested = canonicalForView(data) ?? ingestLensV1(data);
  const expanded = expandedConstruction(ingested, data.attachedTeleconverter, data);
  return { ...data, surfaces: expanded.data.surfaces, elements: expanded.data.elements };
}
