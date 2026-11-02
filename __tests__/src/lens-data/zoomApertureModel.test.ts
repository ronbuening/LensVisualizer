import { describe, expect, it } from "vitest";
import { catalogLensData } from "../optics/testLensFixtures.js";
import { buildFixtureLens as buildLens } from "../optics/constructionFixtures.js";
import type { LensDataInput } from "../../../src/types/optics.js";

const modules = import.meta.glob<{ default: LensDataInput }>("../../../src/lens-data/**/*.data.ts", { eager: true });

/**
 * Data contract for `zoomApertureModel: "fixed-iris"`.
 *
 * A fixed iris keeps the first station's radius, so every other station traces at whatever that radius gives. The
 * declaration is sound only when those are the f-numbers `nominalFno` states, which this sweep reads as the radius
 * the stop rule gives each station's f-number (paraxial EPD = F/N) staying close to the fixed one. Declared on a zoom
 * whose iris opens with focal length, it would trace slow at the long end under an unchanged readout; this sweep
 * fails instead.
 */

/** Largest share by which a station's traced iris radius may differ from the fixed one. */
const FIXED_IRIS_TOLERANCE = 0.03;

describe("zoom aperture model", () => {
  it("declares a fixed iris only where one radius gives the stated f-number at every station", () => {
    const fixedIris = Object.values(modules)
      .map(({ default: data }) => catalogLensData(data))
      .filter((data) => data.zoomApertureModel === "fixed-iris");
    expect(fixedIris.length).toBeGreaterThan(0);

    const offenders = fixedIris.flatMap((data) => {
      const fixedRadius = buildLens(data).stopPhysSD;
      const stationRadii = buildLens({ ...data, zoomApertureModel: undefined }).zoomStopSDs!;
      const worst = Math.max(...stationRadii.map((radius) => Math.abs(radius / fixedRadius - 1)));
      return worst > FIXED_IRIS_TOLERANCE ? [data.key] : [];
    });
    expect(offenders).toEqual([]);
  });
});
