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
    /* The beams reach about 10.08 mm at the rear cap: a 2.8 mm cut (radius 10.21) clears them, a 2.5 mm one (9.68) does not. */
    const [outside] = rimCutBeamReach(buildRimCutLens(2.8, "test-rim-cut-outside"));
    expect(outside.reach).toBeLessThan(outside.cutRadius);
    expect(validateRimCutBeams(buildRimCutLens(2.8, "test-rim-cut-outside"))).toEqual([]);
    expect(validateRimCutBeams(buildRimCutLens(2.5, "test-rim-cut-short"))).toHaveLength(1);
  });
});

/* One case per lens: the rule traces every field, zoom station and focus keyframe, so a long zoom takes seconds. */
const CUT_LENSES = Object.entries(CATALOG_CONSTRUCTION_FIXTURES).filter(([, data]) =>
  data.surfaces.some((surface) => surface.rimCutDepthMm !== undefined),
);

describe("rim-cut beam rule — catalog", () => {
  it.each(CUT_LENSES)(
    "%s keeps its inferred rim cuts outside its traced beams",
    (_, data) => {
      expect(validateRimCutBeams(buildFixtureLens(data))).toEqual([]);
    },
    60_000,
  );
});
