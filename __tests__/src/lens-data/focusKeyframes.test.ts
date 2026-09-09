import { describe, expect, it } from "vitest";
import buildLens from "../../../src/optics/buildLens.js";
import { zoomIndexToT } from "../../../src/optics/internal/lensState.js";
import { thick } from "../../../src/optics/layout.js";
import { LENS_CATALOG } from "../../../src/utils/catalog/lensCatalog.js";

/**
 * Data contract for explicit focus keyframes.
 *
 * A prescription that declares `focusPositions` publishes exact spacings at
 * each keyframe, and the runtime interpolator must reproduce every authored
 * value at its keyframe coordinate rather than smoothing through it. The
 * synthetic interpolation cases live in optics.test.ts; this sweep proves the
 * contract holds for every keyframed prescription in the catalog.
 */

describe("focus keyframes", () => {
  it("reproduces every authored keyframe exactly through the runtime interpolation path", () => {
    const keyframed = Object.values(LENS_CATALOG).filter((data) => data.focusPositions !== undefined);
    expect(keyframed.length).toBeGreaterThan(0);

    const mismatches: string[] = [];
    for (const data of keyframed) {
      const L = buildLens(data);
      const focusPositions = data.focusPositions!;

      for (const [label, authoredRange] of Object.entries(data.var ?? {})) {
        const zoomRanges = Array.isArray(authoredRange[0])
          ? (authoredRange as number[][])
          : [authoredRange as number[]];

        for (let zoomIndex = 0; zoomIndex < zoomRanges.length; zoomIndex++) {
          const zoomT = zoomIndexToT(zoomIndex, zoomRanges.length);
          for (let focusIndex = 0; focusIndex < focusPositions.length; focusIndex++) {
            const expected = zoomRanges[zoomIndex][focusIndex];
            const actual = thick(L.labelIdx[label], focusPositions[focusIndex], zoomT, L);
            if (Math.abs(actual - expected) > 1e-11) {
              mismatches.push(`${data.key}: ${label} zoom ${zoomIndex} focus ${focusIndex}: ${actual} != ${expected}`);
            }
          }
        }
      }
    }

    expect(mismatches).toEqual([]);
  });
});
