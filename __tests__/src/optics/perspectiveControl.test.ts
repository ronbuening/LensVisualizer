import { describe, expect, it } from "vitest";
import buildLens from "../../../src/optics/buildLens.js";
import { anchorLayoutToCamera } from "../../../src/optics/cameraLayout.js";
import { doLayout } from "../../../src/optics/optics.js";
import { LENS_CATALOG } from "../../../src/utils/catalog/lensCatalog.js";

const ENABLED_PC_KEYS = [
  "canon-tse-50f28l-macro",
  "canon-tse-90mm-f28l-macro",
  "canon-tse-135mm-f4l",
  "fujifilm-gf-30mm-f56-ts",
  "nikon-pc-nikkor-19mm-f4e-ed",
  "nikon-pc-nikkor-35mm-f28",
  "nikon-pc-e-nikkor-24-f35d-ed",
  "nikon-pce-micro-nikkor-45f28d",
] as const;

const TILT_PIVOT_OFFSETS = {
  "canon-tse-50f28l-macro": -55.96,
  "canon-tse-90mm-f28l-macro": -71.85725,
  "canon-tse-135mm-f4l": -78.33,
  "fujifilm-gf-30mm-f56-ts": -51.225604641350216,
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
    const enabled = Object.entries(LENS_CATALOG)
      .filter(([, data]) => data.perspectiveControl != null)
      .map(([key]) => key)
      .sort();

    expect(enabled).toEqual([...ENABLED_PC_KEYS].sort());
  });

  it("declares official shift and tilt limits for the enabled PC lenses", () => {
    expect(LENS_CATALOG["canon-tse-50f28l-macro"].perspectiveControl).toMatchObject({
      shiftRangeMm: [-12, 12],
      tiltRangeDeg: [-8.5, 8.5],
    });
    expect(LENS_CATALOG["canon-tse-90mm-f28l-macro"].perspectiveControl).toMatchObject({
      shiftRangeMm: [-12, 12],
      tiltRangeDeg: [-10, 10],
    });
    expect(LENS_CATALOG["canon-tse-135mm-f4l"].perspectiveControl).toMatchObject({
      shiftRangeMm: [-12, 12],
      tiltRangeDeg: [-10, 10],
    });
    expect(LENS_CATALOG["fujifilm-gf-30mm-f56-ts"].perspectiveControl).toMatchObject({
      shiftRangeMm: [-15, 15],
      tiltRangeDeg: [-8.5, 8.5],
    });
    expect(LENS_CATALOG["nikon-pc-nikkor-19mm-f4e-ed"].perspectiveControl).toMatchObject({
      shiftRangeMm: [-12, 12],
      tiltRangeDeg: [-7.5, 7.5],
    });
    expect(LENS_CATALOG["nikon-pc-nikkor-35mm-f28"].perspectiveControl).toMatchObject({
      shiftRangeMm: [-11, 11],
      tiltRangeDeg: [0, 0],
    });
    expect(LENS_CATALOG["nikon-pc-e-nikkor-24-f35d-ed"].perspectiveControl).toMatchObject({
      shiftRangeMm: [-11.5, 11.5],
      tiltRangeDeg: [-8.5, 8.5],
    });
    expect(LENS_CATALOG["nikon-pce-micro-nikkor-45f28d"].perspectiveControl).toMatchObject({
      shiftRangeMm: [-11.5, 11.5],
      tiltRangeDeg: [-8.5, 8.5],
    });
  });

  it("carries perspective-control config onto the built runtime lens", () => {
    const L = buildLens(LENS_CATALOG["nikon-pc-nikkor-19mm-f4e-ed"]);
    const ordinary = buildLens(LENS_CATALOG["nikkor-z-50f18s"]);

    expect(L.perspectiveControl?.shiftRangeMm).toEqual([-12, 12]);
    expect(ordinary.perspectiveControl).toBeNull();
  });

  it("declares camera-fixed reference-state rear-vertex tilt-pivot fallbacks", () => {
    for (const [key, expectedOffset] of Object.entries(TILT_PIVOT_OFFSETS)) {
      const L = buildLens(LENS_CATALOG[key]);
      const pivot = L.perspectiveControl?.tiltPivot;
      const reference = doLayout(0, 0, L);

      expect(pivot).toMatchObject({
        frame: "camera",
        basis: "rear-vertex-fallback",
        zOffsetFromImagePlaneMm: expectedOffset,
      });
      expect(pivot?.zOffsetFromImagePlaneMm).toBeCloseTo(reference.z.at(-1)! - reference.imgZ, 9);
    }

    expect(LENS_CATALOG["nikon-pc-nikkor-35mm-f28"].perspectiveControl?.tiltPivot).toBeUndefined();
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
