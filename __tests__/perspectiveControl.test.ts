import { describe, expect, it } from "vitest";
import buildLens from "../src/optics/buildLens.js";
import { LENS_CATALOG } from "../src/utils/lensCatalog.js";

const ENABLED_PC_KEYS = [
  "nikon-pc-nikkor-19mm-f4e-ed",
  "nikon-pc-e-nikkor-24-f35d-ed",
  "nikon-pce-micro-nikkor-45f28d",
] as const;

describe("perspectiveControl lens data", () => {
  it("defaults to disabled for every non-PC lens", () => {
    const enabled = Object.entries(LENS_CATALOG)
      .filter(([, data]) => data.perspectiveControl != null)
      .map(([key]) => key)
      .sort();

    expect(enabled).toEqual([...ENABLED_PC_KEYS].sort());
  });

  it("declares official Nikon shift and tilt limits for the enabled PC lenses", () => {
    expect(LENS_CATALOG["nikon-pc-nikkor-19mm-f4e-ed"].perspectiveControl).toMatchObject({
      shiftRangeMm: [-12, 12],
      tiltRangeDeg: [-7.5, 7.5],
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
});
