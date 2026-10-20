/** Numeric construction fixtures for tests that perturb individual columns before rebuilding a lens. */
import type { LensData, RuntimeLens } from "../../../src/types/optics.js";
import type { CanonicalLens } from "../../../src/optics/buildLens.js";
import { ingestLensV1 } from "../../../src/optics/prescription/ingestV1.js";
import { canonicalInput } from "../../../src/optics/buildLens.js";
import { canonicalConstructionData } from "../../../src/optics/prescription/constructionData.js";
import { expandedConstruction } from "../../../src/optics/prescription/rearPlates.js";
import { associateCanonical } from "../../../src/optics/prescription/identity.js";
import { LENS_CATALOG } from "../../../src/utils/catalog/lensCatalog.js";

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
