import { describe, expect, it } from "vitest";
import buildLens from "../../../src/optics/buildLens.js";
import { doLayout, traceRay } from "../../../src/optics/optics.js";
import { traceRay2 } from "../../../src/optics-2/compat.js";
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

  it("compares folded generalized traces and diagnostics against traceRay2", () => {
    for (const key of REQUIRED_FOLDED_REFERENCE_KEYS) {
      const lens = buildLens(LENS_CATALOG[key]);
      const { z: zPos } = doLayout(0, 0, lens);
      const rayHeight = Math.max(lens.stopPhysSD * 0.25, 1e-3);

      const legacy = traceRay(rayHeight, 0, zPos, 0, 0, lens.stopPhysSD, false, lens);
      const next = traceRay2(rayHeight, 0, zPos, 0, 0, lens.stopPhysSD, false, lens);

      expect(next.clipped, `${key} clipped`).toBe(legacy.clipped);
      expect(next.reachedImagePlane, `${key} image plane`).toBe(legacy.reachedImagePlane);
      expect(next.diagnostics?.terminationReason, `${key} termination`).toBe(legacy.diagnostics?.terminationReason);
      expect(next.diagnostics?.hitSurfaceLabels, `${key} hit labels`).toEqual(legacy.diagnostics?.hitSurfaceLabels);
      expect(next.diagnostics?.clipEvents, `${key} clip events`).toEqual(legacy.diagnostics?.clipEvents);
      expect(next.diagnostics?.finalMedium, `${key} final medium`).toBe(legacy.diagnostics?.finalMedium);
    }
  });
});
