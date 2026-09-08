import { describe, expect, it } from "vitest";
import data from "../../../src/lens-data/voigtlander/VoigtlanderApoLanthar50f2.data.js";
import defaults from "../../../src/lens-data/defaults.js";
import buildLens from "../../../src/optics/buildLens.js";
import { anchorLayoutToCamera, conicPolySag, doLayout, sag } from "../../../src/optics/optics.js";
import { computeElementRenderDiagnostics } from "../../../src/optics/diagramGeometry.js";
import { computeGroupMovementProfile } from "../../../src/optics/groupMovement.js";
import type { LensData } from "../../../src/types/optics.js";

const L = buildLens({ ...defaults, ...data } as LensData);

describe("APO-LANTHAR 50/2: JP 2021-043376 A Example 5", () => {
  it("reproduces the independently evaluated ASP19 departure from Table 5", () => {
    // Page 27: -569.81 + 189.42 - 48.687 + 7.6837 micrometres at h=10 mm.
    const departure = conicPolySag(10, -112.348, data.asph["19A"]) - sag(10, -112.348);
    expect(departure * 1000).toBeCloseTo(-421.3933, 5);
  });

  it("preserves the F36 rigid assemblies and object-distance reference", () => {
    const reference = doLayout(0, 0, L);
    const close = doLayout(1, 0, L);
    expect(close.imgZ).toBeCloseTo(84.95, 8);
    expect(data.closeFocusM * 1000 - close.imgZ).toBeCloseTo(370, 8);
    const motion = computeGroupMovementProfile(L, "focus", { focusT: 1, zoomT: 0 });
    expect(motion.series).toHaveLength(3);
    motion.series.forEach((series, i) => {
      expect(series.currentPoint.shiftMm).toBeCloseTo([-8.94, -8.54, -5.53][i], 8);
    });
    for (const focusT of [0.25, 0.5, 1]) {
      const current = anchorLayoutToCamera(reference, doLayout(focusT, 0, L));
      expect(current.imgZ).toBe(reference.imgZ);
      L.S.forEach((surface, i) => {
        // Table 5 gap differences, accumulated from the fixed image plane.
        const fullShift = i <= 9 ? -8.94 : i <= 13 ? -8.54 : -5.53;
        expect(current.z[i] - reference.z[i], surface.label).toBeCloseTo(fullShift * focusT, 8);
      });
    }
  });

  it("renders the enlarged Figure 10 rear rim without hidden trimming", () => {
    for (const focusT of [0, 0.5, 1]) {
      for (const element of computeElementRenderDiagnostics(L, doLayout(focusT, 0, L).z)) {
        expect(element.front.trimAmount).toBeLessThan(0.25);
        expect(element.rear.trimAmount).toBeLessThan(0.25);
      }
    }
  });
});
