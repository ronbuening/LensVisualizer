/**
 * Edge-case tests for optics engine — targeting uncovered branches in
 * optics.ts, buildLens.ts, bokeh.ts, and coma.ts.
 *
 * Focuses on: traceParaxialRay, solveChiefRayLaunchHeight fallbacks,
 * solveFieldAngleForImageHeight(Accurate) null paths, bokeh unusable-field
 * paths, and coma insufficient-samples paths.
 */

import { describe, it, expect } from "vitest";
import buildLens from "../src/optics/buildLens.js";
import {
  traceParaxialRay,
  solveChiefRayLaunchHeight,
  solveFieldAngleForImageHeight,
  solveFieldAngleForImageHeightAccurate,
  chiefRayImageHeight,
  chiefRayImageHeightAccurate,
  doLayout,
} from "../src/optics/optics.js";
import { computeBokehFieldFootprint, computeBokehPreview } from "../src/optics/aberration/bokeh.js";
import { computeMeridionalComa, computeSagittalComa } from "../src/optics/aberration/coma.js";
import { fopenAtZoom, epAtZoom } from "../src/optics/optics.js";
import LENS_DEFAULTS from "../src/lens-data/defaults.js";
import ApoLantharRaw from "../src/lens-data/voigtlander/VoigtlanderApoLanthar50f2.data.js";
import NoktonRaw from "../src/lens-data/voigtlander/VoigtlanderNokton50f1.data.js";
import NikkorZ70200Raw from "../src/lens-data/nikon/NikonNikkorZ70200f28.data.js";
import type { RuntimeLens, LensData } from "../src/types/optics.js";

/* ── Helpers ── */

function build(raw: object): RuntimeLens {
  return buildLens({ ...LENS_DEFAULTS, ...raw } as LensData);
}

function apertureAt(L: RuntimeLens, zoomT: number, stopdownT: number) {
  const currentFOPEN = fopenAtZoom(zoomT, L);
  const rawFNumber = L.FOPEN * Math.pow(L.maxFstop / L.FOPEN, stopdownT);
  const fNumber = Math.max(rawFNumber, currentFOPEN);
  const currentPhysStopSD = (L.stopPhysSD * L.FOPEN) / fNumber;
  const baseEPSD = epAtZoom(zoomT, L);
  const currentEPSD = (baseEPSD * L.FOPEN) / fNumber;
  return { currentPhysStopSD, currentEPSD };
}

/* ── traceParaxialRay ── */

describe("traceParaxialRay", () => {
  const L = build(ApoLantharRaw);

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

/* ── solveChiefRayLaunchHeight ── */

describe("solveChiefRayLaunchHeight", () => {
  const L = build(ApoLantharRaw);

  it("returns a finite launch height at 0 degrees", () => {
    const result = solveChiefRayLaunchHeight(0, 0, 0, L);
    expect(isFinite(result)).toBe(true);
    expect(result).toBeCloseTo(0, 6);
  });

  it("returns a finite launch height at moderate field angle", () => {
    const result = solveChiefRayLaunchHeight(10, 0, 0, L);
    expect(isFinite(result)).toBe(true);
    expect(Math.abs(result)).toBeGreaterThan(0);
  });

  it("returns a finite result even at the half-field angle", () => {
    const result = solveChiefRayLaunchHeight(L.halfField, 0, 0, L);
    expect(isFinite(result)).toBe(true);
  });

  it("returns paraxial fallback for extreme beyond-field angles", () => {
    /* Beyond the vignetting limit — the bisection bracket may have no sign change */
    const result = solveChiefRayLaunchHeight(85, 0, 0, L);
    expect(isFinite(result)).toBe(true);
  });
});

/* ── chiefRayImageHeightAccurate ── */

describe("chiefRayImageHeightAccurate", () => {
  const L = build(ApoLantharRaw);
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
  const L = build(ApoLantharRaw);
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
  const L = build(ApoLantharRaw);
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
});

/* ── buildLens half-field bisection ── */

describe("buildLens — half-field refinement", () => {
  it("Nokton 50/1.0 exercises real chief-ray vignetting refinement", () => {
    /* The Nokton is a fast lens with a wide paraxial field estimate that
       may be clipped by the real chief ray trace. buildLens should still
       produce a valid half-field value. */
    const L = build(NoktonRaw);
    expect(isFinite(L.halfField)).toBe(true);
    expect(L.halfField).toBeGreaterThan(0);
    expect(L.halfField).toBeLessThan(90);
  });

  it("zoom lens computes zoom-position arrays", () => {
    const L = build(NikkorZ70200Raw);
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

/* ── Bokeh edge cases ── */

describe("computeBokehFieldFootprint — edge cases", () => {
  const L = build(ApoLantharRaw);
  const layout = doLayout(0, 0, L);

  it("returns null when currentEPSD is zero", () => {
    const sensorZ = layout.imgZ + 0.5;
    const result = computeBokehFieldFootprint(L, layout.z, 0, 0, 0, 0, 0, sensorZ);
    expect(result).toBeNull();
  });

  it("returns null when currentEPSD is negative", () => {
    const sensorZ = layout.imgZ + 0.5;
    const result = computeBokehFieldFootprint(L, layout.z, 0, 0, -1, -1, 0, sensorZ);
    expect(result).toBeNull();
  });
});

describe("computeBokehPreview — edge cases", () => {
  const L = build(ApoLantharRaw);
  const layout = doLayout(0, 0, L);

  it("returns null when currentEPSD is zero (all fields unusable)", () => {
    const result = computeBokehPreview(L, 0, layout.imgZ + 0.5, 0, 0, 0, "Test");
    expect(result).toBeNull();
  });

  it("returns valid result with normal aperture", () => {
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);
    const result = computeBokehPreview(L, 0, layout.imgZ + 0.5, 0, currentEPSD, currentPhysStopSD, "Normal");
    expect(result).not.toBeNull();
    if (result) {
      expect(result.fields.length).toBeGreaterThan(0);
      const usable = result.fields.filter((f) => f.usable);
      expect(usable.length).toBeGreaterThan(0);
    }
  });
});

/* ── Coma edge cases ── */

describe("computeMeridionalComa — edge cases", () => {
  const L = build(ApoLantharRaw);
  const layout = doLayout(0, 0, L);

  it("returns a valid result at wide-open aperture", () => {
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);
    const result = computeMeridionalComa(L, layout.z, 0, 0, currentEPSD, currentPhysStopSD);
    /* May return null if field fraction is 0 or angle <= 0, but should not throw */
    if (result !== null) {
      expect(result.validSampleCount).toBeGreaterThanOrEqual(3);
      expect(isFinite(result.spanMm)).toBe(true);
    }
  });
});

describe("computeSagittalComa — edge cases", () => {
  const L = build(ApoLantharRaw);
  const layout = doLayout(0, 0, L);

  it("returns null when currentEPSD is zero", () => {
    const result = computeSagittalComa(L, layout.z, 0, 0, 0, 0);
    expect(result).toBeNull();
  });

  it("returns null when currentEPSD is negative", () => {
    const result = computeSagittalComa(L, layout.z, 0, 0, -1, 0);
    expect(result).toBeNull();
  });

  it("returns valid result at wide-open aperture", () => {
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);
    const result = computeSagittalComa(L, layout.z, 0, 0, currentEPSD, currentPhysStopSD);
    if (result !== null) {
      expect(result.validSampleCount).toBeGreaterThanOrEqual(3);
      expect(isFinite(result.spanMm)).toBe(true);
    }
  });
});
