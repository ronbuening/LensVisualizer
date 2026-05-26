import { describe, expect, it } from "vitest";
import buildLens from "../../../src/optics/buildLens.js";
import { doLayout, traceRay } from "../../../src/optics/optics.js";
import { LENS_CATALOG } from "../../../src/utils/catalog/lensCatalog.js";
import { REQUIRED_FOLDED_REFERENCE_KEYS } from "./parityFixtures.js";

describe("Optics 2 folded-trace parity scaffold", () => {
  it("builds every hidden folded reference as folded optics in the current engine", () => {
    for (const key of REQUIRED_FOLDED_REFERENCE_KEYS) {
      const lens = buildLens(LENS_CATALOG[key]);
      expect(lens.isFoldedOptics, key).toBe(true);
      expect(lens.opticalPath.maxInteractions, key).toBeGreaterThan(0);
    }
  });

  it("captures current folded hit-order diagnostics on the spherical primary fixture", () => {
    const lens = buildLens(LENS_CATALOG["reference-spherical-primary-mirror"]);
    const { z: zPos } = doLayout(0, 0, lens);
    const trace = traceRay(lens.stopPhysSD * 0.25, 0, zPos, 0, 0, lens.stopPhysSD, false, lens);

    expect(trace.diagnostics).toBeDefined();
    expect(trace.diagnostics?.expectedSurfaceLabels).toEqual(["STO", "M1"]);
    expect(trace.diagnostics?.hitSurfaceLabels).toContain("M1");
    expect(trace.diagnostics?.finalMedium).toBe(1);
    expect(trace.diagnostics?.reachedImagePlane).toBe(true);
  });

  it.skip("compares folded generalized traces against missing traceExactSurfaceStackVector2 from src/optics-2/trace", () => {});
});
