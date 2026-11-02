import { CATALOG_CONSTRUCTION_FIXTURES } from "../optics/constructionFixtures.js";
import { describe, expect, it } from "vitest";
import { TELECONVERTER_CATALOG } from "../../../src/utils/catalog/teleconverterCatalog.js";

/**
 * Data contract for values a prescription holds twice.
 *
 * A surface repeats the index of the element it opens, and a variable gap repeats its infinity thickness as the
 * surface's `d`. The validator accepts each pair within 1e-6, which is enough for today's engine. A format that
 * keeps one copy of each value can only be converted to from a file whose two copies are the same number, so this
 * sweep holds every catalog prescription to exact agreement.
 */

describe("values a prescription holds twice", () => {
  it("gives every surface the exact index of the element it opens", () => {
    const prescriptions = [
      ...Object.values(CATALOG_CONSTRUCTION_FIXTURES),
      ...Object.values(TELECONVERTER_CATALOG).map((tc) => ({
        ...tc,
        surfaces: tc.surfaces.map((surface) => ({
          ...surface,
          nd: typeof surface.medium === "number" ? tc.elements.find((e) => e.id === surface.medium)!.nd : 1,
          elemId: typeof surface.medium === "number" ? surface.medium : 0,
        })),
      })),
    ];
    expect(prescriptions.length).toBeGreaterThan(0);

    const mismatches: string[] = [];
    for (const data of prescriptions) {
      const elementNd = new Map(data.elements.map((element) => [element.id, element.nd]));
      for (const surface of data.surfaces) {
        if (!surface.elemId) continue;
        const nd = elementNd.get(surface.elemId);
        if (typeof nd !== "number" || typeof surface.nd !== "number") continue;
        /* A surface names the element whose glass follows it, and 0 where air does: the last face of an element
         * opens air and names no element. */
        if (surface.nd !== nd) {
          mismatches.push(
            `${data.key}: surface ${surface.label} nd ${surface.nd} != element ${surface.elemId} nd ${nd}`,
          );
        }
      }
    }

    expect(mismatches).toEqual([]);
  });

  it("gives every variable gap's surface the exact infinity thickness of the first zoom position", () => {
    const withGaps = Object.values(CATALOG_CONSTRUCTION_FIXTURES).filter(
      (data) => Object.keys(data.var ?? {}).length > 0,
    );
    expect(withGaps.length).toBeGreaterThan(0);

    const mismatches: string[] = [];
    for (const data of withGaps) {
      for (const [label, range] of Object.entries(data.var ?? {})) {
        const first = range[0];
        const infinityThickness = Array.isArray(first) ? first[0] : first;
        const surface = data.surfaces.find((candidate) => candidate.label === label);
        if (!surface || typeof infinityThickness !== "number") continue;
        if (surface.d !== infinityThickness) {
          mismatches.push(`${data.key}: surface ${label} d ${surface.d} != var infinity value ${infinityThickness}`);
        }
      }
    }

    expect(mismatches).toEqual([]);
  });
});
