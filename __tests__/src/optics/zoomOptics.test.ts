/**
 * Zoom accessor tests for the `*AtZoom` family in src/optics/layout.ts.
 *
 * All ten accessors are thin wrappers over one private lerpZoomArray helper:
 * a non-zoom scalar passthrough plus piecewise-linear interpolation over the
 * lens's authored zoom array. The interpolation SHAPE is therefore tested
 * once, using yRatioAtZoom as the representative vehicle (any accessor would
 * do). A single parameterized dispatch matrix then proves each accessor reads
 * its own backing scalar/array — values are distinct per accessor, so a
 * cross-wired accessor fails. The remaining blocks cover the non-finite
 * exit-pupil guards and a small production zoom-lens anchor set.
 */
import { describe, it, expect } from "vitest";
import {
  bAtZoom,
  eflAtZoom,
  epAtZoom,
  epZRelStopAtZoom,
  fopenAtZoom,
  halfFieldAtZoom,
  tracingHalfFieldAtZoom,
  xpAtZoom,
  xpZRelLastSurfAtZoom,
  yRatioAtZoom,
} from "../../../src/optics/optics.js";
import { sharedNikkorZ70200 } from "./testLensFixtures.js";
import type { RuntimeLens } from "../../../src/types/optics.js";

/* Hand-mocked RuntimeLens partials are acceptable here because the accessors
 * are pure scalar/array reads with no cached prepared state; do not copy this
 * pattern into tests of stateful optics helpers (see testing_recipes.md). */

function makeNonZoomLens(): RuntimeLens {
  return {
    isZoom: false,
    EP: { yRatio: 0.75, epSD: 12 },
    B: 8.5,
    EFL: 50,
    FOPEN: 2.0,
    halfField: 23,
    tracingHalfField: 21,
    xpSD: 14,
    epZRelStop: -10,
    xpZRelLastSurf: 20,
  } as unknown as RuntimeLens;
}

function makeZoomLens(overrides: Record<string, unknown> = {}): RuntimeLens {
  return {
    isZoom: true,
    zoomYRatios: [0.4, 0.9],
    zoomBs: [3, 9],
    zoomEFLs: [70, 200],
    zoomEPs: [25, 35],
    zoomFOPENs: [2.8, 4.5],
    zoomHalfFields: [17, 6.2],
    zoomTracingHalfFields: [15, 5.5],
    zoomXpSDs: [18, 28],
    zoomEpZRelStops: [-5, -15],
    zoomXpZRelLastSurfs: [30, 10],
    ...overrides,
  } as unknown as RuntimeLens;
}

/* ── Interpolation shape, tested once via yRatioAtZoom ── */

describe("lerpZoomArray shape (via yRatioAtZoom)", () => {
  it("non-zoom lens: returns the scalar regardless of zoomT", () => {
    const L = makeNonZoomLens();
    expect(yRatioAtZoom(0, L)).toBe(0.75);
    expect(yRatioAtZoom(0.5, L)).toBe(0.75);
    expect(yRatioAtZoom(1, L)).toBe(0.75);
  });

  it("single-position zoom: returns the lone array value regardless of zoomT", () => {
    const L = makeZoomLens({ zoomYRatios: [0.6] });
    expect(yRatioAtZoom(0, L)).toBe(0.6);
    expect(yRatioAtZoom(0.5, L)).toBe(0.6);
    expect(yRatioAtZoom(1, L)).toBe(0.6);
  });

  it("two positions: returns the endpoints at zoomT = 0 and 1", () => {
    const L = makeZoomLens();
    expect(yRatioAtZoom(0, L)).toBeCloseTo(0.4, 10);
    expect(yRatioAtZoom(1, L)).toBeCloseTo(0.9, 10);
  });

  it("two positions: interpolates linearly at zoomT = 0.5", () => {
    expect(yRatioAtZoom(0.5, makeZoomLens())).toBeCloseTo(0.65, 10);
  });

  it("two positions: interpolates linearly at zoomT = 0.25", () => {
    // 0.4 + 0.25 * (0.9 - 0.4) = 0.525
    expect(yRatioAtZoom(0.25, makeZoomLens())).toBeCloseTo(0.525, 10);
  });

  it("three positions: piecewise-linear through knots and segment midpoints", () => {
    const L = makeZoomLens({ zoomYRatios: [0.3, 0.6, 0.9] });
    expect(yRatioAtZoom(0, L)).toBeCloseTo(0.3, 10);
    // zoomT=0.25: pos=0.5, idx=0, frac=0.5 → 0.3 + 0.5*(0.6-0.3) = 0.45
    expect(yRatioAtZoom(0.25, L)).toBeCloseTo(0.45, 10);
    expect(yRatioAtZoom(0.5, L)).toBeCloseTo(0.6, 10);
    // zoomT=0.75: pos=1.5, idx=1, frac=0.5 → 0.6 + 0.5*(0.9-0.6) = 0.75
    expect(yRatioAtZoom(0.75, L)).toBeCloseTo(0.75, 10);
    expect(yRatioAtZoom(1, L)).toBeCloseTo(0.9, 10);
  });
});

/* ── Accessor dispatch matrix ── */

describe("accessor dispatch", () => {
  const nonZoomLens = makeNonZoomLens();
  const zoomLens = makeZoomLens();

  it.each([
    ["yRatioAtZoom", yRatioAtZoom, 0.75, 0.4, 0.9],
    ["bAtZoom", bAtZoom, 8.5, 3, 9],
    ["eflAtZoom", eflAtZoom, 50, 70, 200],
    ["epAtZoom", epAtZoom, 12, 25, 35],
    ["fopenAtZoom", fopenAtZoom, 2.0, 2.8, 4.5],
    ["halfFieldAtZoom", halfFieldAtZoom, 23, 17, 6.2],
    ["tracingHalfFieldAtZoom", tracingHalfFieldAtZoom, 21, 15, 5.5],
    ["xpAtZoom", xpAtZoom, 14, 18, 28],
    ["epZRelStopAtZoom", epZRelStopAtZoom, -10, -5, -15],
    ["xpZRelLastSurfAtZoom", xpZRelLastSurfAtZoom, 20, 30, 10],
  ] as const)("%s reads its own backing scalar and zoom array", (_name, fn, scalar, wide, tele) => {
    expect(fn(0.5, nonZoomLens)).toBe(scalar);
    expect(fn(0, zoomLens)).toBeCloseTo(wide, 10);
    expect(fn(1, zoomLens)).toBeCloseTo(tele, 10);
    expect(fn(0.5, zoomLens)).toBeCloseTo((wide + tele) / 2, 10);
  });
});

/* ── Accessor-specific guards ── */

describe("accessor guards", () => {
  it("xpAtZoom returns Infinity when any zoomXpSDs entry is non-finite", () => {
    const L = makeZoomLens({ zoomXpSDs: [18, Infinity] });
    expect(xpAtZoom(0, L)).toBe(Infinity); // even where the entry itself is finite
    expect(xpAtZoom(1, L)).toBe(Infinity);
  });

  it("xpZRelLastSurfAtZoom returns Infinity when any zoomXpZRelLastSurfs entry is non-finite", () => {
    const L = makeZoomLens({ zoomXpZRelLastSurfs: [NaN, 10] });
    expect(xpZRelLastSurfAtZoom(0, L)).toBe(Infinity);
    expect(xpZRelLastSurfAtZoom(1, L)).toBe(Infinity);
  });

  it("fopenAtZoom falls back to L.FOPEN when a zoom lens has no zoomFOPENs", () => {
    const L = makeZoomLens({ zoomFOPENs: undefined, FOPEN: 3.5 });
    expect(fopenAtZoom(0, L)).toBe(3.5);
    expect(fopenAtZoom(1, L)).toBe(3.5);
  });

  it("fopenAtZoom handles single-entry zoom arrays and non-finite zoomT defensively", () => {
    // fopenAtZoom routes through the prepared-state interpolator in compat.ts
    // (interpolateZoomArray2), so its defensive branches are pinned here.
    const single = makeZoomLens({ zoomFOPENs: [4] });
    expect(fopenAtZoom(0, single)).toBe(4);
    expect(fopenAtZoom(0.7, single)).toBe(4);
    expect(fopenAtZoom(Number.NaN, makeZoomLens())).toBe(2.8); // non-finite zoomT clamps to wide
  });
});

/* ── Production zoom-lens anchors ── */

describe("production zoom-lens anchors (Nikkor Z 70-200mm f/2.8)", () => {
  const L = sharedNikkorZ70200();

  it("interpolated accessors match their authored zoom-array endpoints", () => {
    expect(L.isZoom).toBe(true);
    const pairs: [string, (zoomT: number, lens: RuntimeLens) => number, number[]][] = [
      ["zoomYRatios", yRatioAtZoom, L.zoomYRatios!],
      ["zoomBs", bAtZoom, L.zoomBs!],
      ["zoomEFLs", eflAtZoom, L.zoomEFLs!],
      ["zoomEPs", epAtZoom, L.zoomEPs!],
      ["zoomHalfFields", halfFieldAtZoom, L.zoomHalfFields!],
      ["zoomXpSDs", xpAtZoom, L.zoomXpSDs!],
      ["zoomEpZRelStops", epZRelStopAtZoom, L.zoomEpZRelStops!],
      ["zoomXpZRelLastSurfs", xpZRelLastSurfAtZoom, L.zoomXpZRelLastSurfs!],
    ];
    for (const [name, fn, arr] of pairs) {
      expect(arr.length, `${name} must be authored`).toBeGreaterThan(0);
      expect(fn(0, L), `${name} wide endpoint`).toBeCloseTo(arr[0], 10);
      expect(fn(1, L), `${name} tele endpoint`).toBeCloseTo(arr[arr.length - 1], 10);
    }
  });

  it("all accessors return finite values across the zoom range", () => {
    const accessors = [
      yRatioAtZoom,
      bAtZoom,
      eflAtZoom,
      epAtZoom,
      fopenAtZoom,
      halfFieldAtZoom,
      tracingHalfFieldAtZoom,
      xpAtZoom,
      epZRelStopAtZoom,
      xpZRelLastSurfAtZoom,
    ];
    for (const t of [0, 0.25, 0.5, 0.75, 1]) {
      for (const fn of accessors) {
        expect(isFinite(fn(t, L)), `${fn.name}(${t}) must be finite`).toBe(true);
      }
    }
  });

  it("eflAtZoom increases monotonically from wide to tele", () => {
    const wide = eflAtZoom(0, L);
    const mid = eflAtZoom(0.5, L);
    const tele = eflAtZoom(1, L);
    expect(mid).toBeGreaterThan(wide);
    expect(tele).toBeGreaterThan(mid);
  });

  it("halfFieldAtZoom stays positive and decreases wide to tele; mid-zoom yRatio lies between its differing endpoints", () => {
    for (const t of [0, 0.25, 0.5, 0.75, 1]) {
      expect(halfFieldAtZoom(t, L), `halfFieldAtZoom(${t})`).toBeGreaterThan(0);
    }
    expect(halfFieldAtZoom(0, L)).toBeGreaterThan(halfFieldAtZoom(1, L));

    const wide = yRatioAtZoom(0, L);
    const tele = yRatioAtZoom(1, L);
    const mid = yRatioAtZoom(0.5, L);
    expect(wide).not.toBeCloseTo(tele, 3); // endpoints should differ meaningfully
    expect(mid).toBeGreaterThanOrEqual(Math.min(wide, tele));
    expect(mid).toBeLessThanOrEqual(Math.max(wide, tele));
  });
});
