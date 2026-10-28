import { describe, expect, it } from "vitest";
import { rimCutBeamReach, validateRimCutBeams } from "../../../src/optics/validation.js";
import { computeAnalysisFieldGeometryAtState } from "../../../src/optics/state/fieldAdapters.js";
import { buildRimCutLens, buildTwoRimCutLens, buildTwoStationRimCutLens } from "./testLensFixtures.js";
import { buildFixtureLens, CATALOG_CONSTRUCTION_FIXTURES } from "./constructionFixtures.js";
import type { LensData } from "../../../src/types/optics.js";

/* The fixture's rear cap (R = 20, sd = 12) sits 7 mm behind a 6 mm stop; its off-axis beams reach about 10.27 mm. */
const cutRadius = (depth: number) => Math.sqrt(400 - (20 - depth) ** 2);

describe("rim-cut beam rule", () => {
  it("refuses an inferred cut inside the beams, and accepts it once its depth is sourced", () => {
    const [reach] = rimCutBeamReach(buildRimCutLens(0.5, "test-rim-cut-inside")).cuts;
    expect(reach.cutRadius).toBeCloseTo(cutRadius(0.5), 9);
    expect(reach.reach).toBeGreaterThan(10);
    expect(validateRimCutBeams(buildRimCutLens(0.5, "test-rim-cut-inside"))).toEqual([
      expect.stringMatching(
        /^Surface "2": its inferred rim cut \(radius 4\.444 mm\) needs 0\.050 mm of clearance from the wide-open beams, which reach \d+\.\d{4} mm there at focus keyframe \d, field \d+\.\d\d°/,
      ),
    ]);
    expect(validateRimCutBeams(buildRimCutLens(0.5, "test-rim-cut-sourced", 12, "Fig. 1 land"))).toEqual([]);
    expect(rimCutBeamReach(buildRimCutLens(0.5, "test-rim-cut-sourced", 12, "Fig. 1 land")).cuts).toEqual([]);
  });

  it("asks an inferred cut to clear the beams by its margin", () => {
    /* A 2.85 mm cut (radius 10.29) clears the beams by less than 0.05 mm; a 2.95 mm one (10.45) by more. */
    const [close] = rimCutBeamReach(buildRimCutLens(2.85, "test-rim-cut-close")).cuts;
    expect(close.reach).toBeLessThan(close.cutRadius);
    expect(close.reach).toBeGreaterThan(close.cutRadius - close.margin);
    expect(validateRimCutBeams(buildRimCutLens(2.85, "test-rim-cut-close"))).toHaveLength(1);
    expect(validateRimCutBeams(buildRimCutLens(2.95, "test-rim-cut-clear"))).toEqual([]);
  });

  it("counts a ray against every cut it crosses", () => {
    /* The outer rays cross both cuts. Each cut's reach is the same beside a 0.1 mm cut on the other face, which would
       stop nearly every ray first, as beside its own depth: neither cut hides rays from the other. */
    const alone = [
      rimCutBeamReach(buildTwoRimCutLens(0.5, 0.1, "test-rim-cut-pair-rear")).cuts[0].reach,
      rimCutBeamReach(buildTwoRimCutLens(0.1, 0.5, "test-rim-cut-pair-front")).cuts[1].reach,
    ];
    const both = rimCutBeamReach(buildTwoRimCutLens(0.5, 0.5, "test-rim-cut-pair"));
    expect(both.cuts.map((cut) => cut.label)).toEqual(["2", "3"]);
    both.cuts.forEach((cut, n) => {
      expect(cut.reach).toBeGreaterThan(cut.cutRadius);
      expect(cut.reach).toBeCloseTo(alone[n], 2);
    });
    expect(validateRimCutBeams(buildTwoRimCutLens(0.5, 0.5, "test-rim-cut-pair"))).toHaveLength(2);
  });

  it("samples zoom between stations", () => {
    /* The beams clear a 0.32 mm cut (radius 11.31) at each station, but reach past it between them. */
    const zoom = rimCutBeamReach(buildTwoStationRimCutLens(0.32)).cuts[0];
    expect(zoom.at!.zoomT).toBeGreaterThan(0.1);
    expect(zoom.at!.zoomT).toBeLessThan(0.9);
    for (const station of [0, 1] as const) {
      const prime = buildTwoStationRimCutLens(0.32, station, `test-two-station-rim-cut-${station}`);
      expect(rimCutBeamReach(prime).cuts[0].reach).toBeLessThan(zoom.reach - 0.2);
      expect(validateRimCutBeams(prime)).toEqual([]);
    }
    expect(validateRimCutBeams(buildTwoStationRimCutLens(0.32))).toEqual([
      expect.stringMatching(/^Surface "3": .* at zoom 0\.\d{3}, focus keyframe 0, field /),
    ]);
  });

  it("traces the field range of the lens without its inferred cuts", () => {
    /* The 0.5 mm cut narrows the lens's own field to about 42.7°; the beams reach furthest past that, near 45°. */
    const L = buildRimCutLens(0.5, "test-rim-cut-narrowed");
    const own = Math.max(L.tracingHalfField, computeAnalysisFieldGeometryAtState(0, 0, L).halfFieldDeg);
    expect(rimCutBeamReach(L).cuts[0].at!.fieldDeg).toBeGreaterThan(own);
  });

  it("refuses the cuts where a field cannot be launched, rather than passing them", () => {
    /* Measured from the image plane, a 50 mm conjugate puts the object point behind the first vertex. */
    const conjugate = {
      finiteConjugates: [
        { focusT: 1, zoomT: 0, objectDistanceMm: 50, distanceReference: "image-plane", source: "Synthetic" },
      ],
    } as Partial<LensData>;
    expect(validateRimCutBeams(buildRimCutLens(2.95, "test-rim-cut-object-inside", 12, undefined, conjugate))).toEqual([
      expect.stringMatching(
        /^Inferred rim cuts on "2" cannot be checked: \d+ sampled fields cannot be traced, first focus keyframe 1, field 0\.00°, which has no finite object point in front of the lens/,
      ),
    ]);
    const fisheye = {
      projection: { kind: "fisheye-equidistant", focalLengthMm: 40, fullFieldDeg: 100 },
    } as Partial<LensData>;
    expect(validateRimCutBeams(buildRimCutLens(2.95, "test-rim-cut-fisheye", 12, undefined, fisheye))).toEqual([
      expect.stringMatching(/which launches from the bounding sphere, not the object plane/),
    ]);
  });
});

/* One case per lens: the rule screens every field, zoom and focus state in steps of 0.05, so a long zoom takes seconds. */
const CUT_LENSES = Object.entries(CATALOG_CONSTRUCTION_FIXTURES).filter(([, data]) =>
  data.surfaces.some((surface) => surface.rimCutDepthMm !== undefined),
);

describe("rim-cut beam rule — catalog", () => {
  it.each(CUT_LENSES)(
    "%s keeps its inferred rim cuts clear of its traced beams",
    (_, data) => {
      expect(validateRimCutBeams(buildFixtureLens(data))).toEqual([]);
    },
    180_000,
  );
});
