import { describe, it, expect } from "vitest";
import {
  focalLengthToZoomT,
  zoomTToFocalLength,
  type ZoomConvertibleLens,
} from "../../../../src/utils/state/zoomConversion.js";

describe("focalLengthToZoomT / zoomTToFocalLength", () => {
  const zoomLens: ZoomConvertibleLens = { isZoom: true, zoomPositions: [24, 50, 70] };
  const primeLens: ZoomConvertibleLens = { isZoom: false };

  it("returns 0 for prime lenses", () => {
    expect(focalLengthToZoomT(50, primeLens)).toBe(0);
  });

  it("returns null for prime lenses (zoomTToFocalLength)", () => {
    expect(zoomTToFocalLength(0.5, primeLens)).toBeNull();
  });

  it("returns 0 at wide end", () => {
    expect(focalLengthToZoomT(24, zoomLens)).toBe(0);
    expect(focalLengthToZoomT(20, zoomLens)).toBe(0);
  });

  it("returns 1 at tele end", () => {
    expect(focalLengthToZoomT(70, zoomLens)).toBe(1);
    expect(focalLengthToZoomT(100, zoomLens)).toBe(1);
  });

  it("round-trips at defined positions", () => {
    for (const fl of [24, 50, 70]) {
      const t = focalLengthToZoomT(fl, zoomLens);
      expect(zoomTToFocalLength(t, zoomLens)).toBeCloseTo(fl, 5);
    }
  });

  it("round-trips at intermediate values", () => {
    for (const fl of [30, 37, 45, 55, 60, 65]) {
      const t = focalLengthToZoomT(fl, zoomLens);
      expect(zoomTToFocalLength(t, zoomLens)).toBeCloseTo(fl, 5);
    }
  });

  it("zoomT=0 gives wide end, zoomT=1 gives tele end", () => {
    expect(zoomTToFocalLength(0, zoomLens)).toBeCloseTo(24, 5);
    expect(zoomTToFocalLength(1, zoomLens)).toBeCloseTo(70, 5);
  });
});
