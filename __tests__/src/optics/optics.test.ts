import { describe, it, expect } from "vitest";
import {
  sag,
  renderSag,
  sagSlope,
  thick,
  doLayout,
  formatDist,
  traceRay,
  traceRayChromatic,
  computeChromaticRayFanSpread,
  traceToImage,
  conjugateK,
  wavelengthNd,
  eflAtZoom,
  eflAtFocus,
  effectiveFNumber,
  epAtZoom,
  halfFieldAtZoom,
  xpAtZoom,
  FLAT_R_THRESHOLD,
  FOCUS_INFINITY_THRESHOLD,
} from "../../../src/optics/optics.js";
import type { RuntimeLens, LensData, ChromaticChannel, RayTraceResult } from "../../../src/types/optics.js";
import { resolveVariableThickness } from "../../../src/optics/prescription/variables.js";
import {
  buildChromaticPositiveElementLens,
  buildGhostClippingLens,
  buildLayoutLens,
  buildMissAfterFirstHitLens,
  buildSimplePositiveElementLens,
  buildTirLens,
  buildVariableStopGapLens,
} from "./testLensFixtures.js";

describe("sag", () => {
  it("returns 0 for h = 0", () => {
    expect(sag(0, 50)).toBe(0);
    expect(sag(0, -100)).toBeCloseTo(0, 10);
  });

  it("returns 0 for flat surface (R > threshold)", () => {
    expect(sag(10, 1e15)).toBe(0);
    expect(sag(10, -1e15)).toBe(0);
    expect(sag(10, Infinity)).toBe(0);
  });

  it("computes correct sag for positive R", () => {
    const result = sag(10, 50);
    // sag = (c·h²) / (1 + √(1 - c²·h²)), c = 1/50
    expect(result).toBeCloseTo(1.0102, 3);
  });

  it("computes correct sag for negative R", () => {
    const result = sag(10, -50);
    expect(result).toBeCloseTo(-1.0102, 3);
  });

  it("handles h near R (large angle)", () => {
    // h = R * sin(45°) ≈ 35.36 for R=50
    const h = 50 * Math.sin(Math.PI / 4);
    const result = sag(h, 50);
    expect(result).toBeGreaterThan(0);
    expect(isFinite(result)).toBe(true);
  });
});

describe("formatDist", () => {
  const mockL = { closeFocusM: 0.4 } as unknown as RuntimeLens;

  it("returns ∞ for t near zero", () => {
    expect(formatDist(0, mockL)).toBe("∞");
    expect(formatDist(0.001, mockL)).toBe("∞");
  });

  it("formats meters for moderate distances", () => {
    // t=0.1 → d = 0.4/0.1 = 4.0 m
    expect(formatDist(0.1, mockL)).toBe("4.00 m");
  });

  it("formats cm for close distances", () => {
    // t=1.0 → d = 0.4/1 = 0.4 m = 40 cm
    expect(formatDist(1.0, mockL)).toBe("40 cm");
  });
});

describe("thick", () => {
  it("returns surface d when no variable spacing", () => {
    const L = buildLayoutLens([5, 5, 80]);
    expect(thick(0, 0, 0, L)).toBe(5.0);
    expect(thick(0, 0.5, 0, L)).toBe(5.0);
    expect(thick(0, 1.0, 0, L)).toBe(5.0);
  });

  it("interpolates variable spacing", () => {
    const L = buildVariableStopGapLens([5.0, 10.0]);
    expect(thick(0, 0, 0, L)).toBe(5.0);
    expect(thick(0, 0.5, 0, L)).toBe(7.5);
    expect(thick(0, 1.0, 0, L)).toBe(10.0);
  });

  it("interpolates zoom variable spacing", () => {
    const L = buildVariableStopGapLens([
      [2.0, 4.0],
      [6.0, 8.0],
      [10.0, 12.0],
    ]);
    // zoomT=0, focusT=0 → wide, infinity → 2.0
    expect(thick(0, 0, 0, L)).toBe(2.0);
    // zoomT=0, focusT=1 → wide, close → 4.0
    expect(thick(0, 1, 0, L)).toBe(4.0);
    // zoomT=1, focusT=0 → tele, infinity → 10.0
    expect(thick(0, 0, 1, L)).toBe(10.0);
    // zoomT=1, focusT=1 → tele, close → 12.0
    expect(thick(0, 1, 1, L)).toBe(12.0);
    // zoomT=0.5, focusT=0 → mid zoom, infinity → lerp(2,6,0) at z0→z1 then lerp(6,10,0) — at 0.5 we're at z1 = 6.0
    expect(thick(0, 0, 0.5, L)).toBe(6.0);
    // zoomT=0.25, focusT=0.5 → between z0 and z1, mid focus
    // d_inf = 2 + (6-2)*0.5 = 4, d_close = 4 + (8-4)*0.5 = 6, result = 4 + (6-4)*0.5 = 5
    expect(thick(0, 0.5, 0.25, L)).toBe(5.0);
  });
});

describe("doLayout", () => {
  it("computes cumulative z positions", () => {
    const L = buildLayoutLens([2.0, 3.0, 5.0]);
    const { z, imgZ } = doLayout(0, 0, L);
    expect(z).toEqual([0, 2.0, 5.0]);
    expect(imgZ).toBe(10.0);
  });
});

describe("sagSlope", () => {
  it("returns 0 at h = 0", () => {
    const L = { S: [{ R: 50 }], asphByIdx: {} } as unknown as RuntimeLens;
    expect(sagSlope(0, 0, L)).toBe(0);
  });

  it("returns 0 for flat surface", () => {
    const L = { S: [{ R: 1e15 }], asphByIdx: {} } as unknown as RuntimeLens;
    expect(sagSlope(10, 0, L)).toBe(0);
  });

  it("computes correct slope for spherical surface", () => {
    const R = 50;
    const h = 10;
    const L = { S: [{ R }], asphByIdx: {} } as unknown as RuntimeLens;
    const c = 1 / R;
    const expected = (c * h) / Math.sqrt(1 - c * c * h * h);
    expect(sagSlope(h, 0, L)).toBeCloseTo(expected, 10);
  });

  it("computes correct slope for negative R", () => {
    const R = -50;
    const h = 10;
    const L = { S: [{ R }], asphByIdx: {} } as unknown as RuntimeLens;
    const c = 1 / R;
    const expected = (c * h) / Math.sqrt(1 - c * c * h * h);
    expect(sagSlope(h, 0, L)).toBeCloseTo(expected, 10);
  });

  it("matches finite-difference of renderSag for spherical surface", () => {
    const R = 30;
    const h = 8;
    const eps = 1e-6;
    const L = { S: [{ R }], asphByIdx: {} } as unknown as RuntimeLens;
    const fd = (renderSag(h + eps, 0, L) - renderSag(h - eps, 0, L)) / (2 * eps);
    expect(sagSlope(h, 0, L)).toBeCloseTo(fd, 5);
  });

  it("matches finite-difference of renderSag for aspheric surface", () => {
    const R = 40;
    const h = 6;
    const eps = 1e-6;
    const asph = { K: -0.5, A4: 1e-5, A6: -2e-8, A8: 0, A10: 0, A12: 0, A14: 0 };
    const L = { S: [{ R }], asphByIdx: { 0: asph } } as unknown as RuntimeLens;
    const fd = (renderSag(h + eps, 0, L) - renderSag(h - eps, 0, L)) / (2 * eps);
    expect(sagSlope(h, 0, L)).toBeCloseTo(fd, 4);
  });
});

describe("traceRay — exact Snell", () => {
  // Single positive element: two spherical surfaces with glass between
  const mkSingleElement = (): RuntimeLens => buildSimplePositiveElementLens();

  it("on-axis ray (h=0, u=0) passes through unchanged", () => {
    const L = mkSingleElement();
    const { z: zPos } = doLayout(0, 0, L);
    const { y, u, clipped } = traceRay(0, 0, zPos, 0, 0, 15, false, L);
    expect(y).toBeCloseTo(0, 10);
    expect(u).toBeCloseTo(0, 10);
    expect(clipped).toBe(false);
  });

  it("small-h ray agrees closely with paraxial trace", () => {
    const L = mkSingleElement();
    const { z: zPos, imgZ } = doLayout(0, 0, L);
    const h = 0.1; // very small height
    const { y: yReal, u: uReal } = traceRay(h, 0, zPos, 0, 0, 15, false, L);
    // traceRay stops at last surface; traceToImage propagates through final gap
    // Extrapolate real ray to image plane for comparison
    const lastSurfZ = zPos[L.N - 1];
    const yRealAtImage = yReal + (imgZ - lastSurfZ) * uReal;
    const yParax = traceToImage(h, 0, 0, 0, L);
    expect(yRealAtImage).toBeCloseTo(yParax, 3);
  });

  it("marginal ray shows undercorrected SA (focuses shorter than paraxial)", () => {
    const L = mkSingleElement();
    const { z: zPos, imgZ } = doLayout(0, 0, L);
    const h = 12; // near full aperture
    const { y: yReal, u: uReal } = traceRay(h, 0, zPos, 0, 0, 15, false, L);
    // Extrapolate real ray to image plane
    const lastSurfZ = zPos[L.N - 1];
    const yRealAtImage = yReal + (imgZ - lastSurfZ) * uReal;
    // Paraxial image height
    const yParax = traceToImage(h, 0, 0, 0, L);
    // Real ray at paraxial image plane should differ from paraxial (spherical aberration)
    expect(Math.abs(yRealAtImage - yParax)).toBeGreaterThan(0.01);
  });

  it("returns clipped=true on total internal reflection", () => {
    // Extreme case: high-index to low-index at steep angle
    const L = buildTirLens();
    const { z: zPos } = doLayout(0, 0, L);
    // Ray at steep angle entering high-index glass, then hitting flat exit surface
    const { clipped } = traceRay(5, 1, zPos, 0, 0, 20, true, L);
    expect(clipped).toBe(true);
  });

  it("returns clipped=true for non-ghost aperture clipping", () => {
    const L = mkSingleElement();
    const { z: zPos } = doLayout(0, 0, L);
    const result = traceRay(20, 0, zPos, 0, 0, 15, false, L);
    expect(result.clipped).toBe(true);
    expect(result.ghostPts).toHaveLength(0);
  });

  it("returns clipped=true for non-ghost total internal reflection", () => {
    const L = buildTirLens();
    const { z: zPos } = doLayout(0, 0, L);
    const result = traceRay(5, 1, zPos, 0, 0, 20, false, L);
    expect(result.clipped).toBe(true);
    expect(result.ghostPts).toHaveLength(0);
  });

  it("generates rendering points for each surface", () => {
    const L = mkSingleElement();
    const { z: zPos } = doLayout(0, 0, L);
    const { pts, clipped } = traceRay(5, 0, zPos, 0, 0, 15, false, L);
    expect(clipped).toBe(false);
    // pts: lead point + surface points, with the current tracer also appending image-plane axialIntercepts.
    expect(pts.length).toBeGreaterThanOrEqual(L.N + 1);
  });

  it("traces finite meridional rays through a single positive element", () => {
    const L = mkSingleElement();
    const { z: zPos } = doLayout(0, 0, L);
    const result = traceRay(12, 0, zPos, 0, 0, 15, false, L);

    expect(result.clipped).toBe(false);
    expect(result.pts.length).toBeGreaterThanOrEqual(L.N + 1);
    expect(result.pts.some((point) => Math.abs(point[0] - (zPos[1] + sag(12, 50))) < 1e-8)).toBe(true);
    expect(isFinite(result.y)).toBe(true);
    expect(isFinite(result.u)).toBe(true);
  });

  it("does not emit fallback ghost points for non-ghost total internal reflection", () => {
    const L = buildTirLens();
    const { z: zPos } = doLayout(0, 0, L);
    const result = traceRay(5, 1, zPos, 0, 0, 20, false, L);

    expect(result.clipped).toBe(true);
    expect(result.ghostPts).toHaveLength(0);
  });
});

describe("wavelengthNd", () => {
  it("returns 1.0 for air regardless of channel", () => {
    expect(wavelengthNd(1.0, 64.17, "R")).toBe(1.0);
    expect(wavelengthNd(1.0, 64.17, "G")).toBe(1.0);
    expect(wavelengthNd(1.0, 64.17, "B")).toBe(1.0);
  });

  it("returns nd for green channel", () => {
    expect(wavelengthNd(1.5168, 64.17, "G")).toBe(1.5168);
  });

  it("red < nd < blue for dispersive glass", () => {
    const nd = 1.5168,
      vd = 64.17;
    expect(wavelengthNd(nd, vd, "R")).toBeLessThan(nd);
    expect(wavelengthNd(nd, vd, "B")).toBeGreaterThan(nd);
  });

  it("computes BK7 dispersion approximately", () => {
    // BK7: nd=1.5168, vd=64.17, nF-nC = (nd-1)/vd ≈ 0.00806
    const nd = 1.5168,
      vd = 64.17;
    const nR = wavelengthNd(nd, vd, "R");
    const nB = wavelengthNd(nd, vd, "B");
    expect(nB - nR).toBeCloseTo((nd - 1) / vd, 4);
  });

  it("returns nd when vd is undefined or 0", () => {
    expect(wavelengthNd(1.5, undefined, "R")).toBe(1.5);
    expect(wavelengthNd(1.5, 0, "B")).toBe(1.5);
  });
});

describe("traceRayChromatic", () => {
  const mkChromElement = (): RuntimeLens => buildChromaticPositiveElementLens();

  it("green channel matches traceRay exactly", () => {
    const L = mkChromElement();
    const { z: zPos } = doLayout(0, 0, L);
    const ref = traceRay(5, 0, zPos, 0, 0, 15, false, L);
    const chrom = traceRayChromatic(5, 0, zPos, 0, 0, 15, false, L, "G");
    expect(chrom.y).toBeCloseTo(ref.y, 7);
    expect(chrom.u).toBeCloseTo(ref.u, 7);
  });

  it("blue ray bends more than red ray", () => {
    const L = mkChromElement();
    const { z: zPos } = doLayout(0, 0, L);
    const red = traceRayChromatic(5, 0, zPos, 0, 0, 15, false, L, "R");
    const blue = traceRayChromatic(5, 0, zPos, 0, 0, 15, false, L, "B");
    // Positive height, positive curvature → rays converge downward
    // Higher index (blue) bends more → more negative u (steeper convergence)
    expect(Math.abs(blue.u)).toBeGreaterThan(Math.abs(red.u));
  });

  it("all channels agree for on-axis ray", () => {
    const L = mkChromElement();
    const { z: zPos } = doLayout(0, 0, L);
    const red = traceRayChromatic(0, 0, zPos, 0, 0, 15, false, L, "R");
    const blue = traceRayChromatic(0, 0, zPos, 0, 0, 15, false, L, "B");
    expect(red.y).toBeCloseTo(0, 10);
    expect(blue.y).toBeCloseTo(0, 10);
  });

  it("returns clipped=true on chromatic total internal reflection", () => {
    /* High-index to low-index at steep angle with dispersive glass */
    const L = buildTirLens("test-chromatic-tir-lens");
    const { z: zPos } = doLayout(0, 0, L);
    const { clipped } = traceRayChromatic(5, 1, zPos, 0, 0, 20, true, L, "B");
    expect(clipped).toBe(true);
  });

  it("ghost mode continues through chromatic TIR and returns ghostPts", () => {
    const L = buildTirLens("test-chromatic-tir-ghost-lens");
    const { z: zPos } = doLayout(0, 0, L);
    const result = traceRayChromatic(5, 1, zPos, 0, 0, 20, true, L, "B");
    /* Ghost mode should produce some points even when clipped */
    expect(result.pts.length + result.ghostPts.length).toBeGreaterThan(0);
  });

  it("non-ghost mode breaks on chromatic TIR without ghostPts", () => {
    const L = buildTirLens("test-chromatic-tir-non-ghost-lens");
    const { z: zPos } = doLayout(0, 0, L);
    const result = traceRayChromatic(5, 1, zPos, 0, 0, 20, false, L, "B");
    expect(result.clipped).toBe(true);
    expect(result.ghostPts).toHaveLength(0);
  });

  it("ghost ray after aperture clipping keeps rendering points", () => {
    const L = buildGhostClippingLens();
    const { z: zPos } = doLayout(0, 0, L);
    /* Ray at y=8 > stopSD=5 clips at the stop, then continues as a ghost trace. */
    const result = traceRayChromatic(8, 0, zPos, 0, 0, 5, true, L, "R");
    expect(result.clipped).toBe(true);
    /* Should still produce rendering points (no crash from sphere-extent guard) */
    expect(result.pts.length + result.ghostPts.length).toBeGreaterThan(1);
  });

  it("green channel matches exact traceRay", () => {
    const L = mkChromElement();
    const { z: zPos } = doLayout(0, 0, L);
    const ref = traceRay(5, 0, zPos, 0, 0, 15, false, L);
    const chrom = traceRayChromatic(5, 0, zPos, 0, 0, 15, false, L, "G");

    expect(chrom.y).toBeCloseTo(ref.y, 7);
    expect(chrom.u).toBeCloseTo(ref.u, 7);
  });

  it("ghost mode continues through chromatic TIR", () => {
    const L = buildTirLens("test-chromatic-tir-duplicate-ghost-lens");
    const { z: zPos } = doLayout(0, 0, L);
    const result = traceRayChromatic(5, 1, zPos, 0, 0, 20, true, L, "B");

    expect(result.clipped).toBe(true);
    expect(result.pts.length + result.ghostPts.length).toBeGreaterThan(0);
  });

  it("non-ghost exact chromatic TIR does not emit fallback ghost points", () => {
    const L = buildTirLens("test-chromatic-tir-duplicate-non-ghost-lens");
    const { z: zPos } = doLayout(0, 0, L);
    const result = traceRayChromatic(5, 1, zPos, 0, 0, 20, false, L, "B");

    expect(result.clipped).toBe(true);
    expect(result.ghostPts).toHaveLength(0);
  });
});

describe("computeChromaticRayFanSpread", () => {
  it("returns zero LoCA spread when all channels have same axial intercept", () => {
    const marginalRays = {
      R: { y: 1.0, u: -0.1, clipped: false },
      G: { y: 1.0, u: -0.1, clipped: false },
      B: { y: 1.0, u: -0.1, clipped: false },
    };
    const result = computeChromaticRayFanSpread(marginalRays, 50, 40);
    expect(result.axialInterceptSpreadMm).toBeCloseTo(0, 10);
    expect(result.imagePlaneHeightSpreadMm).toBeCloseTo(0, 10);
  });

  it("computes positive LoCA spread when red focuses farther than blue", () => {
    // Red ray: y=1, u=-0.05 => intercept = 40 - 1/(-0.05) = 60
    // Blue ray: y=1, u=-0.06 => intercept = 40 - 1/(-0.06) = 56.67
    const marginalRays = {
      R: { y: 1.0, u: -0.05, clipped: false },
      G: { y: 1.0, u: -0.055, clipped: false },
      B: { y: 1.0, u: -0.06, clipped: false },
    };
    const result = computeChromaticRayFanSpread(marginalRays, 65, 40);
    expect(result.axialInterceptSpreadMm).toBeGreaterThan(0);
    expect(result.axialIntercepts.R).toBeCloseTo(60, 4);
    expect(result.axialIntercepts.B).toBeCloseTo(40 + 1 / 0.06, 4);
  });

  it("computes image heights correctly", () => {
    const marginalRays = {
      R: { y: 0.5, u: 0.02, clipped: false },
      B: { y: 0.5, u: 0.03, clipped: false },
    };
    const result = computeChromaticRayFanSpread(marginalRays, 50, 40);
    // R: 0.5 + 10*0.02 = 0.7
    // B: 0.5 + 10*0.03 = 0.8
    expect(result.imagePlaneHeights.R).toBeCloseTo(0.7, 8);
    expect(result.imagePlaneHeights.B).toBeCloseTo(0.8, 8);
    expect(result.imagePlaneHeightSpreadMm).toBeCloseTo(0.1, 8);
  });

  it("handles missing channels gracefully", () => {
    const marginalRays = { G: { y: 1.0, u: -0.1, clipped: false } };
    const result = computeChromaticRayFanSpread(marginalRays, 50, 40);
    expect(result.axialInterceptSpreadMm).toBe(0);
    expect(result.imagePlaneHeightSpreadMm).toBe(0);
  });

  it("skips clipped rays", () => {
    const marginalRays = {
      R: { y: 1.0, u: -0.05, clipped: true },
      B: { y: 1.0, u: -0.06, clipped: false },
    };
    const result = computeChromaticRayFanSpread(marginalRays, 50, 40);
    // R is clipped → only B+G fallback not available (no G), so axialInterceptSpreadMm = 0
    expect(result.axialInterceptSpreadMm).toBe(0);
    expect(result.axialIntercepts.R).toBeUndefined();
  });

  it("falls back to R−G when B is missing", () => {
    const marginalRays = {
      R: { y: 1.0, u: -0.05, clipped: false },
      G: { y: 1.0, u: -0.055, clipped: false },
    };
    const result = computeChromaticRayFanSpread(marginalRays, 65, 40);
    // R intercept: 40 - 1/(-0.05) = 60, G intercept: 40 - 1/(-0.055) ≈ 58.18
    expect(result.axialInterceptSpreadMm).toBeCloseTo(60 - (40 + 1 / 0.055), 4);
    expect(result.axialInterceptSpreadMm).not.toBe(0);
  });

  it("falls back to G−B when R is missing", () => {
    const marginalRays = {
      G: { y: 1.0, u: -0.055, clipped: false },
      B: { y: 1.0, u: -0.06, clipped: false },
    };
    const result = computeChromaticRayFanSpread(marginalRays, 65, 40);
    const gIntercept = 40 - 1.0 / -0.055;
    const bIntercept = 40 - 1.0 / -0.06;
    expect(result.axialInterceptSpreadMm).toBeCloseTo(gIntercept - bIntercept, 4);
    expect(result.axialInterceptSpreadMm).not.toBe(0);
  });

  it("uses the selected channel span so hiding a channel cannot increase LoCA spread", () => {
    const marginalRays = {
      R: { y: 1.0, u: -0.1, clipped: false }, // intercept = 50
      G: { y: 1.0, u: -0.0666666667, clipped: false }, // intercept = 55
      B: { y: 1.0, u: -0.0833333333, clipped: false }, // intercept = 52
    };
    const allChannels = computeChromaticRayFanSpread(marginalRays, 60, 40);
    const withoutBlue = computeChromaticRayFanSpread({ R: marginalRays.R, G: marginalRays.G }, 60, 40);
    const withoutGreen = computeChromaticRayFanSpread({ R: marginalRays.R, B: marginalRays.B }, 60, 40);

    expect(allChannels.axialInterceptSpreadMm).toBeCloseTo(5, 4);
    expect(withoutBlue.axialInterceptSpreadMm).toBeLessThanOrEqual(allChannels.axialInterceptSpreadMm);
    expect(withoutGreen.axialInterceptSpreadMm).toBeLessThanOrEqual(allChannels.axialInterceptSpreadMm);
  });

  it("includes violet in chromatic spread when supplied", () => {
    const marginalRays = {
      R: { y: 1.0, u: -0.1, clipped: false },
      G: { y: 1.0, u: -0.0833333333, clipped: false },
      V: { y: 1.0, u: -0.05, clipped: false },
    };
    const result = computeChromaticRayFanSpread(marginalRays, 70, 40);
    expect(result.axialIntercepts.V).toBeCloseTo(60, 4);
    expect(result.axialInterceptSpreadMm).toBeCloseTo(10, 4);
  });
});

/* ── Production lens ray tracing ── */
import buildLens from "../../../src/optics/buildLens.js";
import LENS_DEFAULTS from "../../../src/lens-data/defaults.js";
import ApoLantharRaw from "../../../src/lens-data/voigtlander/VoigtlanderApoLanthar50f2.data.js";
import NoktonRaw from "../../../src/lens-data/voigtlander/VoigtlanderNokton50f1.data.js";
import NikkorRaw from "../../../src/lens-data/nikon/NikonNikkorZ50f18S.data.js";
import Nikkor105Raw from "../../../src/lens-data/nikon/NikonNikkor105f14E.data.js";
import Sonnar50f15Raw from "../../../src/lens-data/carl-zeiss-jena/ZeissSonnar50f15.data.js";
import NikkorZ70200Raw from "../../../src/lens-data/nikon/NikonNikkorZ70200f28.data.js";

describe("traceRay — Sonnar 50 f/1.5 production lens", () => {
  const L = buildLens({ ...LENS_DEFAULTS, ...Sonnar50f15Raw } as LensData);
  const { z: zPos, imgZ } = doLayout(0, 0, L);

  it("on-axis marginal ray at entrance-pupil edge reports aperture clipping", () => {
    const h = L.EP.epSD; // marginal ray at entrance pupil edge
    const { clipped, pts } = traceRay(h, 0, zPos, 0, 0, L.stopPhysSD, false, L);
    expect(clipped).toBe(true);
    expect(pts.length).toBeGreaterThan(2);
  });

  it("on-axis ray fan traces without TIR at the inner default fractions", () => {
    // Exact tracing on the f/1.5 Sonnar identifies clipping at the outer design
    // fractions (≥ ~0.8) that the legacy vertex-plane tracer missed; the test
    // restricts itself to the inner fractions that still cleanly transmit.
    for (const f of L.rayFractions.filter((frac) => Math.abs(frac) <= 0.3)) {
      const h = f * L.EP.epSD;
      const { clipped } = traceRay(h, 0, zPos, 0, 0, L.stopPhysSD, false, L);
      expect(clipped, `fraction ${f}`).toBe(false);
    }
  });

  it("on-axis ray converges to image plane (finite y at image)", () => {
    const h = 0.2 * L.EP.epSD;
    const { y, u, clipped } = traceRay(h, 0, zPos, 0, 0, L.stopPhysSD, false, L);
    expect(clipped).toBe(false);
    // Extrapolate to image: y + (imgZ - zPos[last]) * u
    const yAtImage = y + (imgZ - zPos[L.N - 1]) * u;
    // For on-axis from infinity, should converge near axis
    expect(Math.abs(yAtImage)).toBeLessThan(5.0); // within 5mm of axis (significant SA expected at f/1.5)
  });

  it("paraxial and exact rays agree for small heights", () => {
    const h = 0.01; // very small ray height
    const { y: yExact, u: uExact } = traceRay(h, 0, zPos, 0, 0, L.stopPhysSD, false, L);
    const yParax = traceToImage(h, 0, 0, 0, L);
    const yExactAtImage = yExact + (imgZ - zPos[L.N - 1]) * uExact;
    expect(yExactAtImage).toBeCloseTo(yParax, 2);
  });

  it("off-axis chief ray traces without clipping at 60% field", () => {
    const uField = -Math.tan((L.offAxisFieldDeg * Math.PI) / 180);
    const yChief = -(L.B / L.EP.yRatio) * uField;
    const { clipped } = traceRay(yChief, uField, zPos, 0, 0, L.stopPhysSD, false, L);
    expect(clipped).toBe(false);
  });

  it("off-axis ray fan traces at 60% field (some may vignette but not all)", () => {
    const uField = -Math.tan((L.offAxisFieldDeg * Math.PI) / 180);
    const yChief = -(L.B / L.EP.yRatio) * uField;
    let passCount = 0;
    for (const f of L.offAxisFractions) {
      const hOff = f * L.EP.epSD;
      const y0 = yChief + hOff;
      const { clipped } = traceRay(y0, uField, zPos, 0, 0, L.stopPhysSD, false, L);
      if (!clipped) passCount++;
    }
    // At least the chief ray (f=0) should pass; some marginal off-axis may vignette
    expect(passCount).toBeGreaterThanOrEqual(1);
  });

  it("chromatic rays (R, G, B) trace without TIR at inner-pupil heights", () => {
    const h = 0.2 * L.EP.epSD;
    for (const ch of ["R", "G", "B"] as ChromaticChannel[]) {
      const { clipped } = traceRayChromatic(h, 0, zPos, 0, 0, L.stopPhysSD, false, L, ch);
      expect(clipped, `channel ${ch}`).toBe(false);
    }
  });

  it("chromatic dispersion is measurable (LoCA spread > 0)", () => {
    const h = 0.3 * L.EP.epSD;
    const marginalRays: Record<ChromaticChannel, RayTraceResult> = {} as Record<ChromaticChannel, RayTraceResult>;
    for (const ch of ["R", "G", "B"] as ChromaticChannel[]) {
      marginalRays[ch] = traceRayChromatic(h, 0, zPos, 0, 0, L.stopPhysSD, false, L, ch);
    }
    const lastSurfZ = zPos[L.N - 1];
    const spread = computeChromaticRayFanSpread(marginalRays, imgZ, lastSurfZ);
    // Should have measurable chromatic aberration (it's an f/1.5 Sonnar)
    expect(Math.abs(spread.axialInterceptSpreadMm)).toBeGreaterThan(0.001);
  });

  it("rays trace at close focus (t=1) without TIR", () => {
    const { z: zClose } = doLayout(1.0, 0, L);
    const h = 0.2 * L.EP.epSD;
    const { clipped } = traceRay(h, 0, zClose, 1.0, 0, L.stopPhysSD, false, L);
    expect(clipped).toBe(false);
  });

  it("stopped-down rays (f/8) trace without issues", () => {
    // At f/8, stop SD = EP_SD × (f_open / f_stop)
    const stoppedSD = L.stopPhysSD * (L.FOPEN / 8);
    const h = (0.83 * stoppedSD) / L.EP.yRatio; // scale to EP
    const { clipped } = traceRay(h, 0, zPos, 0, 0, stoppedSD, false, L);
    expect(clipped).toBe(false);
  });

  it("ghost mode returns rendering points even when clipped", () => {
    // Use a marginal ray that hits several surfaces before missing a later one.
    const h = 0.7 * L.EP.epSD;
    const { clipped, pts, ghostPts } = traceRay(h, 0, zPos, 0, 0, L.stopPhysSD, true, L);
    expect(clipped).toBe(true);
    // Preceding valid hits still render even though tracing stops at the miss.
    expect(pts.length + ghostPts.length).toBeGreaterThan(1);
  });

  it("ghost mode stops after a missed surface while preserving preceding hits", () => {
    const missLens = buildMissAfterFirstHitLens();
    const { z: missZPos } = doLayout(0, 0, missLens);
    const result = traceRay(20, 0, missZPos, 0, 0, 100, true, missLens);

    expect(result.clipped).toBe(true);
    expect(result.pts).toHaveLength(2);
    expect(result.pts[1]).toEqual([missZPos[0], 20]);
    expect(result.ghostPts).toHaveLength(0);
  });
});

/* ── conjugateK with real-ray trace ── */
describe("conjugateK", () => {
  const allLenses: [string, RuntimeLens][] = [
    ["ApoLanthar50f2", buildLens({ ...LENS_DEFAULTS, ...ApoLantharRaw } as LensData)],
    ["Nokton50f1", buildLens({ ...LENS_DEFAULTS, ...NoktonRaw } as LensData)],
    ["NikkorZ50mmf18S", buildLens({ ...LENS_DEFAULTS, ...NikkorRaw } as LensData)],
    ["Nikkor105f14E", buildLens({ ...LENS_DEFAULTS, ...Nikkor105Raw } as LensData)],
    ["Sonnar50f15", buildLens({ ...LENS_DEFAULTS, ...Sonnar50f15Raw } as LensData)],
  ];

  it.each(allLenses)("%s: conjugateK(0) ≈ 0 at infinity", (name, L) => {
    const K = conjugateK(0, 0, L);
    expect(Math.abs(K)).toBeLessThan(1e-4);
  });

  it("Sonnar50f15 regression: |K(0)| < 1e-4 (was 0.00442 with paraxial)", () => {
    const L = buildLens({ ...LENS_DEFAULTS, ...Sonnar50f15Raw } as LensData);
    const K = conjugateK(0, 0, L);
    expect(Math.abs(K)).toBeLessThan(1e-4);
  });

  it.each(allLenses)("%s: conjugateK(1.0) is nonzero at close focus", (name, L) => {
    const K = conjugateK(1.0, 0, L);
    expect(Math.abs(K)).toBeGreaterThan(1e-6);
  });

  it("returns 0 gracefully for TIR conditions", () => {
    // Pathological lens that causes TIR at zonal height
    const L = buildLens({ ...LENS_DEFAULTS, ...Sonnar50f15Raw } as LensData);
    // Manually corrupt EP to trigger NaN path
    const badL = { ...L, EP: { ...L.EP, epSD: 1e6 } };
    expect(conjugateK(0, 0, badL)).toBe(0);
  });

  it.each(allLenses)("%s: conjugateK returns finite values at intermediate focus", (name, L) => {
    for (const t of [0.25, 0.5, 0.75]) {
      const K = conjugateK(t, 0, L);
      expect(isFinite(K), `${name}: conjugateK(${t}) must be finite`).toBe(true);
    }
  });

  it("Sonnar50f15: |conjugateK| increases monotonically from t=0 to t=1", () => {
    const L = buildLens({ ...LENS_DEFAULTS, ...Sonnar50f15Raw } as LensData);
    const K0 = Math.abs(conjugateK(0, 0, L)); // ≈ 0
    const K25 = Math.abs(conjugateK(0.25, 0, L));
    const K50 = Math.abs(conjugateK(0.5, 0, L));
    const K75 = Math.abs(conjugateK(0.75, 0, L));
    const K1 = Math.abs(conjugateK(1.0, 0, L));
    expect(K0).toBeLessThan(K25);
    expect(K25).toBeLessThan(K50);
    expect(K50).toBeLessThan(K75);
    expect(K75).toBeLessThan(K1);
  });
});

describe("thick — zoom edge cases", () => {
  it("handles zoomT=1.0 at tele end correctly", () => {
    const L = buildVariableStopGapLens([
      [2.0, 4.0],
      [6.0, 8.0],
      [10.0, 12.0],
    ]);
    expect(thick(0, 0, 1.0, L)).toBe(10.0);
    expect(thick(0, 1, 1.0, L)).toBe(12.0);
  });

  it("handles single-position zoom defensively", () => {
    const range: [number, number][] = [[5.0, 8.0]];
    expect(resolveVariableThickness(5.0, range, true, 0, 0)).toBe(5.0);
    expect(resolveVariableThickness(5.0, range, true, 1, 0)).toBe(8.0);
    expect(resolveVariableThickness(5.0, range, true, 0.5, 0.5)).toBe(6.5);
  });
});

describe("eflAtZoom", () => {
  it("returns L.EFL for prime lenses regardless of zoomT", () => {
    const L = buildLens({ ...LENS_DEFAULTS, ...ApoLantharRaw } as LensData);
    expect(eflAtZoom(0, L)).toBe(L.EFL);
    expect(eflAtZoom(0.5, L)).toBe(L.EFL);
    expect(eflAtZoom(1, L)).toBe(L.EFL);
  });

  it("returns wide EFL at zoomT=0 and tele EFL at zoomT=1", () => {
    const L = buildLens({ ...LENS_DEFAULTS, ...NikkorZ70200Raw } as LensData);
    expect(eflAtZoom(0, L)).toBeCloseTo(L.zoomEFLs![0], 5);
    expect(eflAtZoom(1, L)).toBeCloseTo(L.zoomEFLs![2], 5);
  });

  it("interpolates monotonically between wide and tele", () => {
    const L = buildLens({ ...LENS_DEFAULTS, ...NikkorZ70200Raw } as LensData);
    const efl = eflAtZoom(0.5, L);
    expect(efl).toBeGreaterThan(L.zoomEFLs![0]);
    expect(efl).toBeLessThan(L.zoomEFLs![2]);
  });

  it("handles single-element zoomEFLs defensively", () => {
    const L = { isZoom: true, zoomEFLs: [50], EFL: 50 } as unknown as RuntimeLens;
    expect(eflAtZoom(0, L)).toBe(50);
    expect(eflAtZoom(1, L)).toBe(50);
  });
});

describe("epAtZoom / halfFieldAtZoom", () => {
  it("returns static values for prime lenses", () => {
    const L = buildLens({ ...LENS_DEFAULTS, ...ApoLantharRaw } as LensData);
    expect(epAtZoom(0, L)).toBe(L.EP.epSD);
    expect(epAtZoom(0.5, L)).toBe(L.EP.epSD);
    expect(halfFieldAtZoom(0, L)).toBe(L.halfField);
  });

  it("interpolates across zoom positions", () => {
    const L = buildLens({ ...LENS_DEFAULTS, ...NikkorZ70200Raw } as LensData);
    const epWide = epAtZoom(0, L);
    const epTele = epAtZoom(1, L);
    const epMid = epAtZoom(0.5, L);
    expect(epWide).toBeCloseTo(L.zoomEPs![0], 5);
    expect(epTele).toBeCloseTo(L.zoomEPs![2], 5);
    /* Mid should be between wide and tele (or equal) */
    expect(epMid).toBeGreaterThanOrEqual(Math.min(epWide, epTele) - 0.01);
    expect(epMid).toBeLessThanOrEqual(Math.max(epWide, epTele) + 0.01);
  });
});

describe("named constants", () => {
  it("FLAT_R_THRESHOLD is 1e10", () => {
    expect(FLAT_R_THRESHOLD).toBe(1e10);
  });

  it("FOCUS_INFINITY_THRESHOLD is 0.003", () => {
    expect(FOCUS_INFINITY_THRESHOLD).toBe(0.003);
  });
});

describe("eflAtFocus", () => {
  it("returns static EFL at infinity focus for prime lenses", () => {
    const L = buildLens({ ...LENS_DEFAULTS, ...ApoLantharRaw } as LensData);
    expect(eflAtFocus(0, 0, L)).toBe(L.EFL);
    expect(eflAtFocus(0.001, 0, L)).toBe(L.EFL); // below threshold
  });

  it("returns a different EFL at close focus for internal-focusing lenses", () => {
    const L = buildLens({ ...LENS_DEFAULTS, ...Nikkor105Raw } as LensData);
    const eflInf = eflAtFocus(0, 0, L);
    const eflClose = eflAtFocus(1, 0, L);
    expect(eflInf).toBeCloseTo(L.EFL, 2);
    /* EFL changes at close focus (direction depends on lens design) */
    expect(Math.abs(eflClose - eflInf)).toBeGreaterThan(0.1);
  });

  it("returns zoom-interpolated EFL at infinity for zoom lenses", () => {
    const L = buildLens({ ...LENS_DEFAULTS, ...NikkorZ70200Raw } as LensData);
    expect(eflAtFocus(0, 0, L)).toBeCloseTo(eflAtZoom(0, L), 5);
    expect(eflAtFocus(0, 1, L)).toBeCloseTo(eflAtZoom(1, L), 5);
  });

  it("returns finite positive value at close focus", () => {
    const L = buildLens({ ...LENS_DEFAULTS, ...ApoLantharRaw } as LensData);
    const efl = eflAtFocus(1, 0, L);
    expect(isFinite(efl)).toBe(true);
    expect(efl).toBeGreaterThan(0);
  });
});

describe("effectiveFNumber", () => {
  it("returns nominal f-number at infinity focus", () => {
    const L = buildLens({ ...LENS_DEFAULTS, ...ApoLantharRaw } as LensData);
    expect(effectiveFNumber(2.0, 0, 0, L)).toBe(2.0);
    expect(effectiveFNumber(2.0, 0.001, 0, L)).toBe(2.0); // below threshold
  });

  it("returns higher effective f-number at close focus", () => {
    const L = buildLens({ ...LENS_DEFAULTS, ...ApoLantharRaw } as LensData);
    const nominalF = 2.0;
    const effF = effectiveFNumber(nominalF, 1, 0, L);
    expect(effF).toBeGreaterThan(nominalF);
  });

  it("increases monotonically as focus gets closer", () => {
    const L = buildLens({ ...LENS_DEFAULTS, ...ApoLantharRaw } as LensData);
    const f1 = effectiveFNumber(2.0, 0.3, 0, L);
    const f2 = effectiveFNumber(2.0, 0.6, 0, L);
    const f3 = effectiveFNumber(2.0, 1.0, 0, L);
    expect(f2).toBeGreaterThan(f1);
    expect(f3).toBeGreaterThan(f2);
  });

  it("works with zoom lenses", () => {
    const L = buildLens({ ...LENS_DEFAULTS, ...NikkorZ70200Raw } as LensData);
    const effF = effectiveFNumber(2.8, 1, 0, L);
    expect(effF).toBeGreaterThan(2.8);
    expect(isFinite(effF)).toBe(true);
  });
});

describe("xpAtZoom", () => {
  it("returns static xpSD for prime lenses", () => {
    const L = buildLens({ ...LENS_DEFAULTS, ...ApoLantharRaw } as LensData);
    expect(xpAtZoom(0, L)).toBe(L.xpSD);
    expect(xpAtZoom(0.5, L)).toBe(L.xpSD);
  });

  it("interpolates across zoom positions", () => {
    const L = buildLens({ ...LENS_DEFAULTS, ...NikkorZ70200Raw } as LensData);
    const xpWide = xpAtZoom(0, L);
    const xpTele = xpAtZoom(1, L);
    expect(xpWide).toBeCloseTo(L.zoomXpSDs![0], 5);
    expect(xpTele).toBeCloseTo(L.zoomXpSDs![2], 5);
  });
});
