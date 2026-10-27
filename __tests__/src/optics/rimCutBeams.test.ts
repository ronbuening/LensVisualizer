import { describe, expect, it } from "vitest";
import { rimCutBeamReach, validateRimCutBeams } from "../../../src/optics/validation.js";
import { buildRimCutLens } from "./testLensFixtures.js";
import { buildFixtureLens, CATALOG_CONSTRUCTION_FIXTURES } from "./constructionFixtures.js";

describe("rim-cut beam rule", () => {
  /* The fixture's rear cap (R = 20, sd = 12) sits 7 mm behind a 6 mm stop; its off-axis beams pass well beyond 5 mm. */
  it("refuses an inferred cut that stops traced rays, and accepts it once its depth is sourced", () => {
    const [reach] = rimCutBeamReach(buildRimCutLens(0.5, "test-rim-cut-inside"));
    expect(reach.cutRadius).toBeCloseTo(Math.sqrt(19.75), 9);
    expect(reach.reach).toBeGreaterThan(reach.cutRadius);
    expect(reach.stopped).toBeGreaterThan(0);
    expect(validateRimCutBeams(buildRimCutLens(0.5, "test-rim-cut-inside"))).toEqual([
      expect.stringMatching(/^Surface "2": its inferred rim cut \(radius 4\.444 mm\) stops \d+ traced rays/),
    ]);
    expect(validateRimCutBeams(buildRimCutLens(0.5, "test-rim-cut-sourced", 12, "Fig. 1 land"))).toEqual([]);
    expect(rimCutBeamReach(buildRimCutLens(0.5, "test-rim-cut-sourced", 12, "Fig. 1 land"))).toEqual([]);
  });

  it("accepts an inferred cut outside every traced beam", () => {
    /* The beams reach about 9.48 mm at the rear cap: a 2.5 mm cut (radius 9.68) clears them, a 2.2 mm one (9.12) does not. */
    const [outside] = rimCutBeamReach(buildRimCutLens(2.5, "test-rim-cut-outside"));
    expect(outside.reach).toBeLessThan(outside.cutRadius);
    expect(validateRimCutBeams(buildRimCutLens(2.5, "test-rim-cut-outside"))).toEqual([]);
    expect(validateRimCutBeams(buildRimCutLens(2.2, "test-rim-cut-short"))).toHaveLength(1);
  });

  it("every catalog lens keeps its inferred rim cuts outside its traced beams", () => {
    const offenders = Object.entries(CATALOG_CONSTRUCTION_FIXTURES)
      .filter(([, data]) => data.surfaces.some((surface) => surface.rimCutDepthMm !== undefined))
      .flatMap(([key, data]) => validateRimCutBeams(buildFixtureLens(data)).map((error) => `${key}: ${error}`));
    expect(offenders).toEqual([]);
  });
});
