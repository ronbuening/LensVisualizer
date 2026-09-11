import { describe, expect, it } from "vitest";
import buildLens from "../../../src/optics/buildLens.js";
import { anchorLayoutToCamera } from "../../../src/optics/cameraLayout.js";
import { computeCardinalElementsAtState } from "../../../src/optics/cardinalElements.js";
import { doLayout } from "../../../src/optics/optics.js";
import { LENS_CATALOG } from "../../../src/utils/catalog/lensCatalog.js";

const TILT_PIVOT_OFFSETS = {
  "canon-tse-50f28l-macro": -55.96,
  "canon-tse-90mm-f28l-macro": -71.85725,
  "canon-tse-135mm-f4l": -78.33,
  "fujifilm-gf-30mm-f56-ts": -30.9009,
  "nikon-pc-nikkor-19mm-f4e-ed": -56.38,
  "nikon-pc-e-nikkor-24-f35d-ed": -56.5,
  "nikon-pce-micro-nikkor-45f28d": -56.5,
} as const;

const CLOSE_FOCUS_REAR_TRAVEL_MM = {
  "canon-tse-50f28l-macro": -25.11,
  "canon-tse-90mm-f28l-macro": -31.25067,
  "canon-tse-135mm-f4l": 0,
  "fujifilm-gf-30mm-f56-ts": 0,
  "nikon-pc-nikkor-19mm-f4e-ed": -3.63,
  "nikon-pc-e-nikkor-24-f35d-ed": -8.646,
  "nikon-pce-micro-nikkor-45f28d": -21.64,
} as const;

describe("perspectiveControl lens data", () => {
  it("defaults to disabled for every non-PC lens", () => {
    for (const data of Object.values(LENS_CATALOG)) {
      if (data.perspectiveControl != null) continue;
      expect(buildLens(data).perspectiveControl, data.key).toBeNull();
    }
  });

  it("carries perspective-control config onto the built runtime lens", () => {
    const L = buildLens(LENS_CATALOG["nikon-pc-nikkor-19mm-f4e-ed"]);
    const ordinary = buildLens(LENS_CATALOG["nikkor-z-50f18s"]);

    expect(L.perspectiveControl?.shiftRangeMm).toEqual([-12, 12]);
    expect(ordinary.perspectiveControl).toBeNull();
  });

  it("declares camera-fixed sourced or explicitly fallback tilt pivots", () => {
    for (const [key, expectedOffset] of Object.entries(TILT_PIVOT_OFFSETS)) {
      const L = buildLens(LENS_CATALOG[key]);
      const pivot = L.perspectiveControl?.tiltPivot;
      const reference = doLayout(0, 0, L);
      const expectedBasis =
        key === "fujifilm-gf-30mm-f56-ts" ? "patent-principal-point-guidance" : "rear-vertex-fallback";

      expect(pivot).toMatchObject({
        frame: "camera",
        basis: expectedBasis,
        zOffsetFromImagePlaneMm: expectedOffset,
      });
      if (expectedBasis === "rear-vertex-fallback") {
        expect(pivot?.zOffsetFromImagePlaneMm).toBeCloseTo(reference.z.at(-1)! - reference.imgZ, 9);
      }
    }

    expect(LENS_CATALOG["nikon-pc-nikkor-35mm-f28"].perspectiveControl?.tiltPivot).toBeUndefined();
  });

  it("places the Fujifilm patent-guided tilt center at the reference image-side principal point", () => {
    const L = buildLens(LENS_CATALOG["fujifilm-gf-30mm-f56-ts"]);
    const reference = doLayout(0, 0, L);
    const cardinals = computeCardinalElementsAtState(L, 0, 0, reference.z, reference.imgZ, 0);
    const pivot = L.perspectiveControl!.tiltPivot!;

    expect(pivot.basis).toBe("patent-principal-point-guidance");
    expect(pivot.zOffsetFromImagePlaneMm).toBe(-LENS_CATALOG["fujifilm-gf-30mm-f56-ts"].focalLengthDesign!);
    expect(pivot.zOffsetFromImagePlaneMm).toBeCloseTo(cardinals!.points.rearPrincipal.z - reference.imgZ, 3);
    expect(pivot.zOffsetFromImagePlaneMm).not.toBeCloseTo(reference.z.at(-1)! - reference.imgZ, 3);
  });

  it("keeps tilt pivots fixed in the camera frame while rear vertices follow modeled focus", () => {
    for (const [key, expectedRearTravel] of Object.entries(CLOSE_FOCUS_REAR_TRAVEL_MM)) {
      const L = buildLens(LENS_CATALOG[key]);
      const reference = doLayout(0, 0, L);
      const close = anchorLayoutToCamera(reference, doLayout(1, 0, L));
      const pivotOffset = L.perspectiveControl!.tiltPivot!.zOffsetFromImagePlaneMm;

      expect(close.imgZ + pivotOffset).toBe(reference.imgZ + pivotOffset);
      expect(close.z.at(-1)! - reference.z.at(-1)!).toBeCloseTo(expectedRearTravel, 5);
    }
  });
});
