import { describe, it, expect } from "vitest";
import { yRatioAtZoom, bAtZoom } from "../src/optics/optics.js";
import buildLens from "../src/optics/buildLens.js";
import LENS_DEFAULTS from "../src/lens-data/defaults.js";
import NikkorZ70200Raw from "../src/lens-data/NikonNikkorZ70200f28.data.js";
import type { RuntimeLens, LensData } from "../src/types/optics.js";

/* ── Minimal mock helpers ── */

function makeNonZoomLens(yRatio = 0.75, B = 8.5): RuntimeLens {
  return { isZoom: false, EP: { yRatio, epSD: 12 }, B } as unknown as RuntimeLens;
}

function makeZoomLens(yRatios: number[], bs: number[]): RuntimeLens {
  return { isZoom: true, zoomYRatios: yRatios, zoomBs: bs } as unknown as RuntimeLens;
}

/* ── yRatioAtZoom ── */

describe("yRatioAtZoom — non-zoom lens", () => {
  it("returns EP.yRatio regardless of zoomT", () => {
    const L = makeNonZoomLens(0.75);
    expect(yRatioAtZoom(0, L)).toBe(0.75);
    expect(yRatioAtZoom(0.5, L)).toBe(0.75);
    expect(yRatioAtZoom(1, L)).toBe(0.75);
  });

  it("returns exact EP.yRatio value from lens object", () => {
    const L = makeNonZoomLens(1.23456);
    expect(yRatioAtZoom(0.99, L)).toBe(1.23456);
  });
});

describe("yRatioAtZoom — zoom lens, single position", () => {
  it("returns the single array value regardless of zoomT", () => {
    const L = makeZoomLens([0.6], [5.0]);
    expect(yRatioAtZoom(0, L)).toBe(0.6);
    expect(yRatioAtZoom(0.5, L)).toBe(0.6);
    expect(yRatioAtZoom(1, L)).toBe(0.6);
  });
});

describe("yRatioAtZoom — zoom lens, two positions", () => {
  it("returns first value at zoomT = 0", () => {
    const L = makeZoomLens([0.4, 0.9], [3, 9]);
    expect(yRatioAtZoom(0, L)).toBeCloseTo(0.4, 10);
  });

  it("returns last value at zoomT = 1", () => {
    const L = makeZoomLens([0.4, 0.9], [3, 9]);
    expect(yRatioAtZoom(1, L)).toBeCloseTo(0.9, 10);
  });

  it("interpolates linearly at zoomT = 0.5", () => {
    const L = makeZoomLens([0.4, 0.9], [3, 9]);
    expect(yRatioAtZoom(0.5, L)).toBeCloseTo(0.65, 10);
  });

  it("interpolates correctly at zoomT = 0.25", () => {
    const L = makeZoomLens([0.4, 0.9], [3, 9]);
    // 0.4 + 0.25 * (0.9 - 0.4) = 0.525
    expect(yRatioAtZoom(0.25, L)).toBeCloseTo(0.525, 10);
  });
});

describe("yRatioAtZoom — zoom lens, three positions", () => {
  it("returns first value at zoomT = 0", () => {
    const L = makeZoomLens([0.3, 0.6, 0.9], [2, 5, 8]);
    expect(yRatioAtZoom(0, L)).toBeCloseTo(0.3, 10);
  });

  it("returns middle value at zoomT = 0.5", () => {
    const L = makeZoomLens([0.3, 0.6, 0.9], [2, 5, 8]);
    expect(yRatioAtZoom(0.5, L)).toBeCloseTo(0.6, 10);
  });

  it("returns last value at zoomT = 1", () => {
    const L = makeZoomLens([0.3, 0.6, 0.9], [2, 5, 8]);
    expect(yRatioAtZoom(1, L)).toBeCloseTo(0.9, 10);
  });

  it("interpolates in the first half at zoomT = 0.25", () => {
    const L = makeZoomLens([0.3, 0.6, 0.9], [2, 5, 8]);
    // pos = 0.25 * 2 = 0.5, idx = 0, frac = 0.5 → 0.3 + 0.5*(0.6-0.3) = 0.45
    expect(yRatioAtZoom(0.25, L)).toBeCloseTo(0.45, 10);
  });

  it("interpolates in the second half at zoomT = 0.75", () => {
    const L = makeZoomLens([0.3, 0.6, 0.9], [2, 5, 8]);
    // pos = 0.75 * 2 = 1.5, idx = 1, frac = 0.5 → 0.6 + 0.5*(0.9-0.6) = 0.75
    expect(yRatioAtZoom(0.75, L)).toBeCloseTo(0.75, 10);
  });
});

/* ── bAtZoom ── */

describe("bAtZoom — non-zoom lens", () => {
  it("returns L.B regardless of zoomT", () => {
    const L = makeNonZoomLens(0.75, 10.5);
    expect(bAtZoom(0, L)).toBe(10.5);
    expect(bAtZoom(0.5, L)).toBe(10.5);
    expect(bAtZoom(1, L)).toBe(10.5);
  });

  it("handles negative B (telephoto-type lenses)", () => {
    const L = makeNonZoomLens(0.75, -3.2);
    expect(bAtZoom(0.5, L)).toBe(-3.2);
  });
});

describe("bAtZoom — zoom lens, single position", () => {
  it("returns the single array value regardless of zoomT", () => {
    const L = makeZoomLens([0.5], [7.0]);
    expect(bAtZoom(0, L)).toBe(7.0);
    expect(bAtZoom(0.5, L)).toBe(7.0);
    expect(bAtZoom(1, L)).toBe(7.0);
  });
});

describe("bAtZoom — zoom lens, two positions", () => {
  it("returns first value at zoomT = 0", () => {
    const L = makeZoomLens([0.4, 0.9], [3.0, 12.0]);
    expect(bAtZoom(0, L)).toBeCloseTo(3.0, 10);
  });

  it("returns last value at zoomT = 1", () => {
    const L = makeZoomLens([0.4, 0.9], [3.0, 12.0]);
    expect(bAtZoom(1, L)).toBeCloseTo(12.0, 10);
  });

  it("interpolates linearly at zoomT = 0.5", () => {
    const L = makeZoomLens([0.4, 0.9], [3.0, 12.0]);
    expect(bAtZoom(0.5, L)).toBeCloseTo(7.5, 10);
  });
});

describe("bAtZoom — zoom lens, three positions", () => {
  it("interpolates symmetrically across all three segments", () => {
    const L = makeZoomLens([0.3, 0.6, 0.9], [2.0, 6.0, 10.0]);
    expect(bAtZoom(0, L)).toBeCloseTo(2.0, 10);
    // pos=0.5*2=1, idx=min(1,1)=1, frac=0 → arr[1] = 6.0
    expect(bAtZoom(0.5, L)).toBeCloseTo(6.0, 10);
    expect(bAtZoom(1, L)).toBeCloseTo(10.0, 10);
    // zoomT=0.25: pos=0.5, idx=0, frac=0.5 → 2 + 0.5*(6-2) = 4
    expect(bAtZoom(0.25, L)).toBeCloseTo(4.0, 10);
    // zoomT=0.75: pos=1.5, idx=1, frac=0.5 → 6 + 0.5*(10-6) = 8
    expect(bAtZoom(0.75, L)).toBeCloseTo(8.0, 10);
  });
});

/* ── Production zoom lens sanity checks ── */

describe("yRatioAtZoom / bAtZoom — production zoom lens (Nikkor Z 70-200mm f/2.8)", () => {
  const NikkorZ70200 = { ...LENS_DEFAULTS, ...NikkorZ70200Raw } as LensData;
  const L = buildLens(NikkorZ70200);

  it("L.isZoom is true", () => {
    expect(L.isZoom).toBe(true);
  });

  it("yRatioAtZoom returns finite values across zoom range", () => {
    for (const t of [0, 0.25, 0.5, 0.75, 1]) {
      const val = yRatioAtZoom(t, L);
      expect(isFinite(val), `yRatioAtZoom(${t}) must be finite`).toBe(true);
    }
  });

  it("bAtZoom returns finite values across zoom range", () => {
    for (const t of [0, 0.25, 0.5, 0.75, 1]) {
      const val = bAtZoom(t, L);
      expect(isFinite(val), `bAtZoom(${t}) must be finite`).toBe(true);
    }
  });

  it("yRatioAtZoom is monotone across the zoom range", () => {
    // yRatio may increase or decrease monotonically; verify it changes between endpoints
    const wide = yRatioAtZoom(0, L);
    const tele = yRatioAtZoom(1, L);
    expect(wide).not.toBeCloseTo(tele, 3); // should differ meaningfully
  });

  it("yRatioAtZoom matches L.zoomYRatios endpoints exactly", () => {
    expect(yRatioAtZoom(0, L)).toBeCloseTo(L.zoomYRatios![0], 10);
    expect(yRatioAtZoom(1, L)).toBeCloseTo(L.zoomYRatios![L.zoomYRatios!.length - 1], 10);
  });

  it("bAtZoom matches L.zoomBs endpoints exactly", () => {
    expect(bAtZoom(0, L)).toBeCloseTo(L.zoomBs![0], 10);
    expect(bAtZoom(1, L)).toBeCloseTo(L.zoomBs![L.zoomBs!.length - 1], 10);
  });

  it("mid-zoom yRatioAtZoom is between wide and tele values", () => {
    const wide = yRatioAtZoom(0, L);
    const tele = yRatioAtZoom(1, L);
    const mid = yRatioAtZoom(0.5, L);
    const lo = Math.min(wide, tele);
    const hi = Math.max(wide, tele);
    expect(mid).toBeGreaterThanOrEqual(lo);
    expect(mid).toBeLessThanOrEqual(hi);
  });
});
