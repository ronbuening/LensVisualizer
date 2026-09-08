import { describe, expect, it } from "vitest";
import ef50 from "../../../src/lens-data/canon/CanonEF50mmf12LUSM.data.js";
import ef70 from "../../../src/lens-data/canon/CanonEF70300mmf456ISUSM.data.js";
import efs from "../../../src/lens-data/canon/CanonEFS1855mmf3556.data.js";
import defaults from "../../../src/lens-data/defaults.js";
import buildLens from "../../../src/optics/buildLens.js";
import { computeElementRenderDiagnostics } from "../../../src/optics/diagramGeometry.js";
import { resolveCompatibleGlass } from "../../../src/optics/glassCatalog.js";
import { computeGroupMovementProfile, getGroupMovementAvailability } from "../../../src/optics/groupMovement.js";
import { doLayout } from "../../../src/optics/optics.js";
import type { LensData, LensDataInput } from "../../../src/types/optics.js";
import { isPatentPublicationNumber, patentJurisdiction } from "../../../src/utils/catalog/patentRecords.js";

const lenses: LensDataInput[] = [ef50, ef70, efs];

describe("September 8 Canon patent batch", () => {
  it("exposes recognized Japanese patent links", () => {
    for (const lens of lenses) {
      expect(isPatentPublicationNumber(lens.patentNumber ?? ""), lens.name).toBe(true);
      expect(patentJurisdiction(lens.patentNumber ?? "").code, lens.name).toBe("JP");
    }
  });

  it("uses compatible curves while retaining the unresolved 583302 material", () => {
    for (const lens of lenses) {
      for (const element of lens.elements) {
        const curve = resolveCompatibleGlass(element.glass, element.nd, element.vd);
        if (lens === efs && element.id === 10) expect(curve).toBeNull();
        else expect(curve, `${lens.key} ${element.name}`).not.toBeNull();
      }
    }
    expect(resolveCompatibleGlass(ef50.elements[2].glass, 1.639799, 34.5)?.name).toBe("S-TIM27");
    expect(resolveCompatibleGlass(ef70.elements[12].glass, 1.58913, 61.1)?.name).toBe("S-BAL35");
    expect(resolveCompatibleGlass(efs.elements[4].glass, 1.572501, 57.8)?.name).toBe("S-BAL11");
    expect(ef70.elements[6].apd).toBe("inferred");
  });

  it("preserves ordered source zoom travel, including the EF-S front-group reversal", () => {
    const cases: [LensDataInput, number[][]][] = [
      [
        ef70,
        [
          [-30.742651, -0.012651, -10.312651, -0.002651, -6.262651, -11.532651],
          [-54.383676, 0.016324, -27.493676, 0.016324, -6.963676, -23.493676],
        ],
      ],
      [
        efs,
        [
          [8.540326, -11.639674, -8.929674, -11.629674],
          [-0.135641, -30.395641, -24.105641, -30.385641],
        ],
      ],
    ];
    for (const [lens, expected] of cases) {
      const L = buildLens({ ...defaults, ...lens } as LensData);
      for (const [i, zoomT] of [0.5, 1].entries()) {
        const profile = computeGroupMovementProfile(L, "zoom", { focusT: 0, zoomT });
        expect(profile.series).toHaveLength(expected[i].length);
        profile.series.forEach((series, j) => expect(series.currentPoint.shiftMm).toBeCloseTo(expected[i][j], 5));
      }
    }
  });

  it("focuses objectward with the published moving unit and disables unavailable travel", () => {
    const prime = buildLens({ ...defaults, ...ef50 } as LensData);
    const zoom = buildLens({ ...defaults, ...efs } as LensData);
    for (const zoomT of [0, 0.5, 1]) {
      for (const series of computeGroupMovementProfile(prime, "focus", { focusT: 1, zoomT }).series)
        expect(series.currentPoint.shiftMm).toBeCloseTo(-7.067215, 6);
      const frontFocus = computeGroupMovementProfile(zoom, "focus", { focusT: 1, zoomT }).series;
      expect(frontFocus[0].currentPoint.shiftMm).toBeLessThan(-3.3);
      for (const series of frontFocus.slice(1)) expect(series.currentPoint.shiftMm).toBeCloseTo(0, 8);
    }
    expect(getGroupMovementAvailability(buildLens({ ...defaults, ...ef70 } as LensData)).focus).toBe(false);
    expect(getGroupMovementAvailability(prime).zoom).toBe(false);
  });

  it("keeps patent-refined rims free of hidden renderer trims across focus and zoom", () => {
    for (const lens of lenses) {
      const L = buildLens({ ...defaults, ...lens } as LensData);
      for (const focusT of [0, 0.5, 1]) {
        for (const zoomT of [0, 0.25, 0.5, 0.75, 1]) {
          for (const element of computeElementRenderDiagnostics(L, doLayout(focusT, zoomT, L).z)) {
            expect(element.front.trimAmount, lens.key).toBeLessThan(0.25);
            expect(element.rear.trimAmount, lens.key).toBeLessThan(0.25);
          }
        }
      }
    }
  });
});
