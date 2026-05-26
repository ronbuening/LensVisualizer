import { describe, expect, it } from "vitest";
import buildLens from "../../../src/optics/buildLens.js";
import { computeCardinalElementsAtState } from "../../../src/optics/cardinalElements.js";
import { doLayout, entrancePupilAtState } from "../../../src/optics/optics.js";
import { computeCardinalElementsAtState2, entrancePupilAtState2 } from "../../../src/optics-2/compat.js";
import { LENS_CATALOG } from "../../../src/utils/catalog/lensCatalog.js";
import { OPTICS_2_PARITY_TOLERANCES } from "./tolerances.js";

function expectClose(actual: number, expected: number, label: string): void {
  expect(Math.abs(actual - expected), label).toBeLessThanOrEqual(OPTICS_2_PARITY_TOLERANCES.analysis.boundedValue.abs);
}

describe("Optics 2 first-order and pupil parity", () => {
  it("matches legacy cardinal elements for ordinary and axial folded systems", () => {
    for (const key of ["nokton-50f1", "sony-fe-90mm-f2p8-macro", "reference-spherical-primary-mirror"]) {
      const lens = buildLens(LENS_CATALOG[key]);
      const focusT = key === "sony-fe-90mm-f2p8-macro" ? 1 : 0;
      const layout = doLayout(focusT, 0, lens);
      const legacy = computeCardinalElementsAtState(lens, focusT, 0, layout.z, layout.imgZ);
      const next = computeCardinalElementsAtState2(lens, focusT, 0, layout.z, layout.imgZ);

      expect(next === null, `${key} nullability`).toBe(legacy === null);
      if (!legacy || !next) continue;
      expectClose(next.distances.efl.valueMm, legacy.distances.efl.valueMm, `${key} efl`);
      expectClose(next.points.frontFocal.z, legacy.points.frontFocal.z, `${key} front focal`);
      expectClose(next.points.rearFocal.z, legacy.points.rearFocal.z, `${key} rear focal`);
      expect(next.nodalPrincipalCoincident, `${key} nodal flag`).toBe(legacy.nodalPrincipalCoincident);
    }
  });

  it("matches entrance pupil first-order state", () => {
    const lens = buildLens(LENS_CATALOG["nikkor-z-50f18s"]);
    const legacy = entrancePupilAtState(lens.stopPhysSD, 0, 0, lens);
    const next = entrancePupilAtState2(lens.stopPhysSD, 0, 0, lens);

    expectClose(next.epSD, legacy.epSD, "epSD");
    expectClose(next.yRatio, legacy.yRatio, "yRatio");
    expectClose(next.b, legacy.b, "b");
    expectClose(next.epRatio, legacy.epRatio, "epRatio");
  });
});
