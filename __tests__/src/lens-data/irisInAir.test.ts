import { describe, expect, it } from "vitest";
import { CATALOG_CONSTRUCTION_FIXTURES, buildFixtureLens as buildLens } from "../optics/constructionFixtures.js";
import { constructionFixtureData } from "../optics/constructionFixtures.js";
import { build, buildSimplePositiveElementLens } from "../optics/testLensFixtures.js";
import { prepareRuntimeState } from "../../../src/optics/state/runtimeAdapters.js";
import { fNumberAtStopdown } from "../../../src/optics/state/aperture.js";
import { stopSemiDiameterForFNumber, wideOpenStopAtZoom } from "../../../src/optics/state/apertureStop.js";
import { zoomIndexToT } from "../../../src/optics/state/stationTables.js";
import type { RuntimeLens } from "../../../src/types/optics.js";

/**
 * Data contract: the iris is in air over its stroke.
 *
 * At every zoom station and focus keyframe, from the smallest radius the aperture control reaches (the stop rule at
 * `maxFstop`) out to the wide-open radius, the stop plane lies in air: the face before the stop, with glass in front of it, does not
 * reach past the plane, and the face after it, with glass behind it, does not reach in front of it. A face is its own
 * sag out to its own semi-diameter and its rim height beyond. The sequential trace steps back to a stop plane in such
 * glass, as OpticStudio does, but no iris can close there.
 */

/** Rounding allowance of a sag compared with a vertex position, in mm. */
const IRIS_GLASS_EPS = 1e-9;

/** Samples of the iris stroke at one station; the first one in glass is refined by bisection. */
const IRIS_STROKE_SAMPLES = 256;

/**
 * Files whose iris lies in glass today, each with the change or queue row that moves it. The sweep compares for
 * equality, so a corrected file must leave this list and no file may join.
 */
const IRIS_IN_GLASS: Readonly<Record<string, string>> = {
  "bertele-sonnar-50f2-scaled": "#929 moves the stop plane",
  "leica-elmarit-90f28": "#929 moves the stop plane",
  "olympus-zuiko-auto-s-50f14": "#929 moves the stop plane",
  "nokton-50f1": "#928 cuts the rim at the stop",
  "canon-ef-24mm-f14-l-ii-usm": "agent_docs/sd-audit-queue.md Section I, iris in glass",
  "nikon-ai-zoom-nikkor-25-50mm-f4": "agent_docs/sd-audit-queue.md Section I, iris in glass",
  "zeiss-hologon-15f8": "agent_docs/sd-audit-queue.md Section I, `iris`: the design's embedded glass stop",
};

/** One station where the iris meets glass: the side, and the smallest radius of the stroke in glass. */
interface IrisInGlass {
  zoomIndex: number;
  focusT: number;
  side: "stop in glass" | "face before reaches past the stop" | "face after reaches in front of the stop";
  glassFromMm: number;
  irisMm: number;
}

/** Every station of a lens at which part of the iris stroke lies in glass. */
function irisInGlass(L: RuntimeLens): IrisInGlass[] {
  if (L.isFoldedOptics) return [];
  const s = L.stopIdx;
  const zoomCount = (L.isZoom && L.zoomPositions?.length) || 1;
  const found: IrisInGlass[] = [];
  for (let zoomIndex = 0; zoomIndex < zoomCount; zoomIndex++) {
    const zoomT = zoomIndexToT(zoomIndex, zoomCount);
    const irisMm = wideOpenStopAtZoom(zoomT, L);
    const smallest = stopSemiDiameterForFNumber(fNumberAtStopdown(1, zoomT, L), zoomT, L);
    for (const focusT of L.focusPositions) {
      const surfaces = prepareRuntimeState(L, focusT, zoomT).traceGeometry.surfaces;
      const stopZ = surfaces[s].z;
      const station = { zoomIndex, focusT, irisMm };
      if ((s > 0 && L.S[s - 1].nd !== 1) || L.S[s].nd !== 1) {
        found.push({ ...station, side: "stop in glass", glassFromMm: 0 });
        continue;
      }
      const faceZ = (index: number, r: number): number => {
        const face = surfaces[index];
        const limit = face.profile.finiteRadiusLimit();
        return face.z + face.profile.sag(Math.min(r, face.sd, limit ?? Infinity));
      };
      const sides = [
        {
          side: "face before reaches past the stop" as const,
          applies: s >= 2 && L.S[s - 2].nd !== 1,
          inGlass: (r: number) => faceZ(s - 1, r) - stopZ > IRIS_GLASS_EPS,
        },
        {
          side: "face after reaches in front of the stop" as const,
          applies: s + 1 < L.S.length && L.S[s + 1].nd !== 1,
          inGlass: (r: number) => stopZ - faceZ(s + 1, r) > IRIS_GLASS_EPS,
        },
      ];
      for (const { side, applies, inGlass } of sides) {
        if (!applies) continue;
        const at = (k: number) => smallest + ((irisMm - smallest) * k) / IRIS_STROKE_SAMPLES;
        let k = 0;
        while (k <= IRIS_STROKE_SAMPLES && !inGlass(at(k))) k++;
        if (k > IRIS_STROKE_SAMPLES) continue;
        let [lo, hi] = k === 0 ? [smallest, smallest] : [at(k - 1), at(k)];
        for (let mid = (lo + hi) / 2; mid !== lo && mid !== hi; mid = (lo + hi) / 2) {
          if (inGlass(mid)) hi = mid;
          else lo = mid;
        }
        found.push({ ...station, side, glassFromMm: hi });
      }
    }
  }
  return found;
}

describe("iris in air", () => {
  /* A stop in front of a positive meniscus whose concave front face, of radius −20, reaches 0.5 mm forward of its
   * vertex at r = 4.44 mm and 2 mm forward at r = 8.72 mm: a stop 0.5 mm in front of the vertex lies in its rim
   * from 4.44 mm, one 2 mm in front lies in air over the whole stroke. */
  const meniscus = (stopGap: number) =>
    build({
      ...constructionFixtureData(buildSimplePositiveElementLens()),
      nominalFno: 4,
      fstopSeries: [4, 5.6, 8, 11, 16],
      surfaces: [
        { label: "STO", R: 1e15, nd: 1, d: stopGap, sd: 8, elemId: 0 },
        { label: "1", R: -20, nd: 1.5168, d: 5, sd: 10, elemId: 1 },
        { label: "2", R: -12, nd: 1, d: 60, sd: 10, elemId: 0 },
      ],
    });

  it("finds a stop inside a meniscus rim and passes a stop in air", () => {
    const inRim = meniscus(0.5);
    const iris = wideOpenStopAtZoom(0, inRim);
    // The stop is the first surface, so it is its own entrance pupil: the rule gives F/2N there, a quarter of the
    // f/4 iris at f/16.
    const smallest = stopSemiDiameterForFNumber(16, 0, inRim);
    expect(smallest).toBeCloseTo(iris / 4, 12);
    expect(smallest).toBeLessThan(Math.sqrt(400 - 19.5 ** 2));
    expect(iris).toBeGreaterThan(Math.sqrt(400 - 19.5 ** 2));
    expect(iris).toBeLessThan(Math.sqrt(400 - 18 ** 2));

    const found = irisInGlass(inRim);
    expect(found.map((station) => station.focusT)).toEqual([...inRim.focusPositions]);
    for (const station of found) {
      expect(station.side).toBe("face after reaches in front of the stop");
      // Where the face is the rounding allowance more than 0.5 mm forward of its vertex.
      expect(station.glassFromMm).toBeCloseTo(Math.sqrt(400 - (19.5 - IRIS_GLASS_EPS) ** 2), 9);
      expect(station.irisMm).toBe(iris);
    }
    expect(irisInGlass(meniscus(2))).toEqual([]);
  });

  it("keeps every catalog iris in air over its stroke, but for the listed files", () => {
    const found = Object.values(CATALOG_CONSTRUCTION_FIXTURES).flatMap((data) =>
      irisInGlass(buildLens(data)).map(
        (station) =>
          `${data.key} zoom ${station.zoomIndex} focus ${station.focusT}: ${station.side} from ` +
          `${station.glassFromMm.toFixed(2)} mm, iris ${station.irisMm.toFixed(2)} mm`,
      ),
    );
    const offenders = [...new Set(found.map((line) => line.split(" ")[0]))].sort();
    expect(offenders, found.join("\n")).toEqual(Object.keys(IRIS_IN_GLASS).sort());
  });
});
