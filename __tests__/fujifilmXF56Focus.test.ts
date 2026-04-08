import { describe, expect, it } from "vitest";
import buildLens from "../src/optics/buildLens.js";
import LENS_DEFAULTS from "../src/lens-data/defaults.js";
import FujifilmXF56Raw from "../src/lens-data/FujifilmXF56mmf12.data.js";
import { conjugateK, doLayout, entrancePupilAtState, traceRay } from "../src/optics/optics.js";
import type { LensData, RuntimeLens } from "../src/types/optics.js";

function build(raw: object): RuntimeLens {
  return buildLens({ ...LENS_DEFAULTS, ...raw } as LensData);
}

function focusTForDistance(distanceM: number, L: RuntimeLens): number {
  return L.closeFocusM / distanceM;
}

function imageHeightAtSensor(L: RuntimeLens, focusT: number, h: number, k: number): number | null {
  const { z, imgZ } = doLayout(focusT, 0, L);
  const lastSurfZ = z[L.N - 1];
  const ray = traceRay(h, h * k, z, focusT, 0, L.stopPhysSD, true, L);
  const imageHeight = ray.y + ray.u * (imgZ - lastSurfZ);
  return isFinite(imageHeight) ? imageHeight : null;
}

function solveKForImageHeight(L: RuntimeLens, focusT: number, h: number): number | null {
  let lo = -0.05;
  let hi = 0.05;
  const loHeight = imageHeightAtSensor(L, focusT, h, lo);
  const hiHeight = imageHeightAtSensor(L, focusT, h, hi);
  if (loHeight === null || hiHeight === null) return null;
  if (Math.sign(loHeight) === Math.sign(hiHeight)) return null;

  let loValue = loHeight;
  for (let i = 0; i < 60; i++) {
    const mid = (lo + hi) / 2;
    const midHeight = imageHeightAtSensor(L, focusT, h, mid);
    if (midHeight === null) return null;
    if (Math.abs(midHeight) < 1e-9) return mid;
    if (Math.sign(midHeight) === Math.sign(loValue)) {
      lo = mid;
      loValue = midHeight;
    } else {
      hi = mid;
    }
  }
  return (lo + hi) / 2;
}

describe("Fujifilm XF 56mm f/1.2 focus tracking", () => {
  const L = build(FujifilmXF56Raw);

  it("matches the solved near-axis tracked-focus slope near minimum focus", () => {
    for (const distanceM of [0.73, 0.71, 0.7]) {
      const focusT = focusTForDistance(distanceM, L);
      const currentEPSD = entrancePupilAtState(L.stopPhysSD, focusT, 0, L).epSD;
      const solvedNearAxisK = solveKForImageHeight(L, focusT, currentEPSD * 0.1);
      expect(solvedNearAxisK, `${distanceM} m should yield a finite near-axis solve`).not.toBeNull();
      expect(conjugateK(focusT, 0, L)).toBeCloseTo(solvedNearAxisK!, 4);
    }
  });

  it("does not invert the wide-open outer ray ahead of L25 near minimum focus", () => {
    for (const distanceM of [0.73, 0.71, 0.7]) {
      const focusT = focusTForDistance(distanceM, L);
      const { z } = doLayout(focusT, 0, L);
      const currentEPSD = entrancePupilAtState(L.stopPhysSD, focusT, 0, L).epSD;
      const outerHeight = currentEPSD * 0.83;
      const focusK = conjugateK(focusT, 0, L);
      const tracked = traceRay(outerHeight, outerHeight * focusK, z, focusT, 0, L.stopPhysSD, true, L);

      expect(tracked.clipped, `${distanceM} m outer tracked ray should stay inside the lens`).toBe(false);

      const l24RearHeight = tracked.pts[18]?.[1];
      const l25FrontHeight = tracked.pts[19]?.[1];
      expect(typeof l24RearHeight).toBe("number");
      expect(typeof l25FrontHeight).toBe("number");
      expect(Math.sign(l24RearHeight!)).toBe(Math.sign(l25FrontHeight!));
    }
  });
});
