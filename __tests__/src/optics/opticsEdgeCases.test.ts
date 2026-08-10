/**
 * Edge-case tests for optics engine — targeting uncovered branches in
 * optics.ts and buildLens.ts.
 *
 * Focuses on: traceParaxialRay, solveChiefRay fallbacks,
 * solveFieldAngleForImageHeight(Accurate) null paths, and buildLens
 * half-field refinement.
 */

import { describe, it, expect } from "vitest";
import {
  traceParaxialRay,
  solveChiefRay,
  solveFieldAngleForImageHeight,
  solveFieldAngleForImageHeightAccurate,
  solveFieldAnglesForImageHeightsAccurate,
  chiefRayImageHeight,
  chiefRayImageHeightAccurate,
  doLayout,
} from "../../../src/optics/optics.js";
import { sharedApoLanthar50f2, sharedNikkorZ70200, sharedNokton50f1 } from "./testLensFixtures.js";

/* ── traceParaxialRay ── */

describe("traceParaxialRay", () => {
  const L = sharedApoLanthar50f2();

  it("returns finite y and u for a marginal ray (y=1, u=0)", () => {
    const result = traceParaxialRay(1, 0, 0, 0, L);
    expect(typeof result.y).toBe("number");
    expect(typeof result.u).toBe("number");
    expect(isFinite(result.y)).toBe(true);
    expect(isFinite(result.u)).toBe(true);
  });

  it("returns finite y and u for a chief ray (y=0, u=1)", () => {
    const result = traceParaxialRay(0, 1, 0, 0, L);
    expect(isFinite(result.y)).toBe(true);
    expect(isFinite(result.u)).toBe(true);
  });

  it("varies with focusT", () => {
    const atZero = traceParaxialRay(1, 0, 0, 0, L);
    const atFull = traceParaxialRay(1, 0, 1, 0, L);
    expect(atZero.y).not.toBeCloseTo(atFull.y, 3);
  });
});

/* ── solveChiefRay launch height ── */

describe("solveChiefRay (launch height)", () => {
  const L = sharedApoLanthar50f2();

  it("returns a finite launch height at 0 degrees", () => {
    const result = solveChiefRay(0, 0, 0, L).yLaunch;
    expect(isFinite(result)).toBe(true);
    expect(result).toBeCloseTo(0, 6);
  });

  it("returns a finite launch height at moderate field angle", () => {
    const result = solveChiefRay(10, 0, 0, L).yLaunch;
    expect(isFinite(result)).toBe(true);
    expect(Math.abs(result)).toBeGreaterThan(0);
  });

  it("returns a finite result even at the half-field angle", () => {
    const result = solveChiefRay(L.halfField, 0, 0, L).yLaunch;
    expect(isFinite(result)).toBe(true);
  });

  it("returns paraxial fallback for extreme beyond-field angles", () => {
    /* Beyond the vignetting limit — the bisection bracket may have no sign change */
    const result = solveChiefRay(85, 0, 0, L).yLaunch;
    expect(isFinite(result)).toBe(true);
  });
});

/* ── chiefRayImageHeightAccurate ── */

describe("chiefRayImageHeightAccurate", () => {
  const L = sharedApoLanthar50f2();
  const layout = doLayout(0, 0, L);

  it("returns 0 for on-axis (0 degrees)", () => {
    const h = chiefRayImageHeightAccurate(0, layout.z, 0, 0, L);
    expect(h).toBeCloseTo(0, 4);
  });

  it("returns a negative value for positive field angle", () => {
    const h = chiefRayImageHeightAccurate(10, layout.z, 0, 0, L);
    expect(h).toBeLessThan(0);
  });

  it("is close to non-accurate version at small angles", () => {
    const accurate = chiefRayImageHeightAccurate(1, layout.z, 0, 0, L);
    const simple = chiefRayImageHeight(1, layout.z, 0, 0, L);
    expect(accurate).toBeCloseTo(simple, 3);
  });
});

/* ── solveFieldAngleForImageHeight ── */

describe("solveFieldAngleForImageHeight", () => {
  const L = sharedApoLanthar50f2();
  const layout = doLayout(0, 0, L);

  it("returns 0 for targetImageHeight = 0", () => {
    const result = solveFieldAngleForImageHeight(0, layout.z, 0, 0, L);
    expect(result).toBe(0);
  });

  it("returns 0 for near-zero targetImageHeight", () => {
    const result = solveFieldAngleForImageHeight(1e-14, layout.z, 0, 0, L);
    expect(result).toBe(0);
  });

  it("returns 0 for non-finite targetImageHeight", () => {
    expect(solveFieldAngleForImageHeight(NaN, layout.z, 0, 0, L)).toBe(0);
    expect(solveFieldAngleForImageHeight(Infinity, layout.z, 0, 0, L)).toBe(0);
  });

  it("returns null when target exceeds achievable image height", () => {
    /* A 50mm lens can't produce 200mm of image height */
    const result = solveFieldAngleForImageHeight(200, layout.z, 0, 0, L);
    expect(result).toBeNull();
  });

  it("finds the correct angle for a reachable image height", () => {
    /* Get the image height at 10 degrees, then solve back */
    const h10 = chiefRayImageHeight(10, layout.z, 0, 0, L);
    const solved = solveFieldAngleForImageHeight(Math.abs(h10), layout.z, 0, 0, L);
    expect(solved).not.toBeNull();
    expect(solved!).toBeCloseTo(10, 0);
  });
});

/* ── solveFieldAngleForImageHeightAccurate ── */

describe("solveFieldAngleForImageHeightAccurate", () => {
  const L = sharedApoLanthar50f2();
  const layout = doLayout(0, 0, L);

  it("returns 0 for targetImageHeight = 0", () => {
    expect(solveFieldAngleForImageHeightAccurate(0, layout.z, 0, 0, L)).toBe(0);
  });

  it("returns null when target exceeds achievable image height", () => {
    const result = solveFieldAngleForImageHeightAccurate(200, layout.z, 0, 0, L);
    expect(result).toBeNull();
  });

  it("returns 0 for near-zero targets", () => {
    const result = solveFieldAngleForImageHeightAccurate(1e-14, layout.z, 0, 0, L);
    expect(result).toBe(0);
  });

  it("finds the correct angle for a reachable image height", () => {
    const h10 = chiefRayImageHeightAccurate(10, layout.z, 0, 0, L);
    const solved = solveFieldAngleForImageHeightAccurate(Math.abs(h10), layout.z, 0, 0, L);
    expect(solved).not.toBeNull();
    expect(solved!).toBeCloseTo(10, 0);
  });

  it("batch inversion matches individual accurate solves", () => {
    const targets = [0, 5, 10, 15].map((angleDeg) =>
      Math.abs(chiefRayImageHeightAccurate(angleDeg, layout.z, 0, 0, L)),
    );
    const batch = solveFieldAnglesForImageHeightsAccurate(targets, layout.z, 0, 0, L);

    targets.forEach((target, index) => {
      const individual = solveFieldAngleForImageHeightAccurate(target, layout.z, 0, 0, L);
      expect(batch[index]).not.toBeNull();
      expect(batch[index]!).toBeCloseTo(individual!, 8);
    });
  });
});

/* ── buildLens half-field bisection ── */

describe("buildLens — half-field refinement", () => {
  it("Nokton 50/1.0 exercises real chief-ray vignetting refinement", () => {
    /* The Nokton is a fast lens with a wide paraxial field estimate that
       may be clipped by the real chief ray trace. buildLens should still
       produce a valid half-field value. */
    const L = sharedNokton50f1();
    expect(isFinite(L.halfField)).toBe(true);
    expect(L.halfField).toBeGreaterThan(0);
    expect(L.halfField).toBeLessThan(90);
  });

  it("zoom lens computes zoom-position arrays", () => {
    const L = sharedNikkorZ70200();
    expect(L.isZoom).toBe(true);
    expect(L.zoomXpZRelLastSurfs).toBeDefined();
    expect(L.zoomXpSDs).toBeDefined();
    expect(L.zoomXpZRelLastSurfs!.length).toBeGreaterThan(0);
    expect(L.zoomXpSDs!.length).toBeGreaterThan(0);

    /* Each value should be finite (whether real or paraxial fallback) */
    for (const v of L.zoomXpZRelLastSurfs!) {
      expect(isFinite(v)).toBe(true);
    }
    for (const v of L.zoomXpSDs!) {
      expect(isFinite(v)).toBe(true);
      expect(v).toBeGreaterThan(0);
    }
  });
});
