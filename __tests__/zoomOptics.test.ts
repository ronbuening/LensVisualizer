import { describe, it, expect } from "vitest";
import {
  yRatioAtZoom,
  bAtZoom,
  eflAtZoom,
  epAtZoom,
  halfFieldAtZoom,
  epZRelStopAtZoom,
  xpZRelLastSurfAtZoom,
} from "../src/optics/optics.js";
import buildLens from "../src/optics/buildLens.js";
import LENS_DEFAULTS from "../src/lens-data/defaults.js";
import NikkorZ70200Raw from "../src/lens-data/NikonNikkorZ70200f28.data.js";
import type { RuntimeLens, LensData } from "../src/types/optics.js";

/* ── Minimal mock helpers ── */

function makeNonZoomLens(
  yRatio = 0.75,
  B = 8.5,
  EFL = 50,
  epSD = 12,
  halfField = 23,
  epZRelStop = -10,
  xpZRelLastSurf = 20,
): RuntimeLens {
  return {
    isZoom: false,
    EP: { yRatio, epSD },
    B,
    EFL,
    halfField,
    epZRelStop,
    xpZRelLastSurf,
  } as unknown as RuntimeLens;
}

function makeZoomLens(
  yRatios: number[],
  bs: number[],
  efls: number[] = [70, 200],
  eps: number[] = [25, 25],
  halfFields: number[] = [17, 6.2],
  epZRelStops: number[] = [-5, -15],
  xpZRelLastSurfs: number[] = [30, 10],
): RuntimeLens {
  return {
    isZoom: true,
    zoomYRatios: yRatios,
    zoomBs: bs,
    zoomEFLs: efls,
    zoomEPs: eps,
    zoomHalfFields: halfFields,
    zoomEpZRelStops: epZRelStops,
    zoomXpZRelLastSurfs: xpZRelLastSurfs,
  } as unknown as RuntimeLens;
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

/* ── eflAtZoom ── */

describe("eflAtZoom — non-zoom lens", () => {
  it("returns L.EFL regardless of zoomT", () => {
    const L = makeNonZoomLens(0.75, 8.5, 50);
    expect(eflAtZoom(0, L)).toBe(50);
    expect(eflAtZoom(0.5, L)).toBe(50);
    expect(eflAtZoom(1, L)).toBe(50);
  });
});

describe("eflAtZoom — zoom lens", () => {
  it("returns first EFL at zoomT = 0", () => {
    const L = makeZoomLens([0.4, 0.9], [3, 9], [70, 200], [25, 25], [17, 6.2]);
    expect(eflAtZoom(0, L)).toBeCloseTo(70, 10);
  });

  it("returns last EFL at zoomT = 1", () => {
    const L = makeZoomLens([0.4, 0.9], [3, 9], [70, 200], [25, 25], [17, 6.2]);
    expect(eflAtZoom(1, L)).toBeCloseTo(200, 10);
  });

  it("interpolates linearly at zoomT = 0.5", () => {
    const L = makeZoomLens([0.4, 0.9], [3, 9], [70, 200], [25, 25], [17, 6.2]);
    expect(eflAtZoom(0.5, L)).toBeCloseTo(135, 10);
  });

  it("interpolates three-position zoom", () => {
    const L = makeZoomLens([0.3, 0.6, 0.9], [2, 5, 8], [24, 70, 120], [20, 18, 16], [42, 17, 10]);
    expect(eflAtZoom(0, L)).toBeCloseTo(24, 10);
    expect(eflAtZoom(0.5, L)).toBeCloseTo(70, 10);
    expect(eflAtZoom(1, L)).toBeCloseTo(120, 10);
    // zoomT=0.25: pos=0.5, idx=0, frac=0.5 → 24 + 0.5*(70-24) = 47
    expect(eflAtZoom(0.25, L)).toBeCloseTo(47, 10);
  });
});

/* ── epAtZoom ── */

describe("epAtZoom — non-zoom lens", () => {
  it("returns L.EP.epSD regardless of zoomT", () => {
    const L = makeNonZoomLens(0.75, 8.5, 50, 25);
    expect(epAtZoom(0, L)).toBe(25);
    expect(epAtZoom(0.5, L)).toBe(25);
    expect(epAtZoom(1, L)).toBe(25);
  });
});

describe("epAtZoom — zoom lens", () => {
  it("returns first EP at zoomT = 0", () => {
    const L = makeZoomLens([0.4, 0.9], [3, 9], [70, 200], [25, 35], [17, 6.2]);
    expect(epAtZoom(0, L)).toBeCloseTo(25, 10);
  });

  it("returns last EP at zoomT = 1", () => {
    const L = makeZoomLens([0.4, 0.9], [3, 9], [70, 200], [25, 35], [17, 6.2]);
    expect(epAtZoom(1, L)).toBeCloseTo(35, 10);
  });

  it("interpolates linearly at zoomT = 0.5", () => {
    const L = makeZoomLens([0.4, 0.9], [3, 9], [70, 200], [25, 35], [17, 6.2]);
    expect(epAtZoom(0.5, L)).toBeCloseTo(30, 10);
  });
});

/* ── halfFieldAtZoom ── */

describe("halfFieldAtZoom — non-zoom lens", () => {
  it("returns L.halfField regardless of zoomT", () => {
    const L = makeNonZoomLens(0.75, 8.5, 50, 12, 23.5);
    expect(halfFieldAtZoom(0, L)).toBe(23.5);
    expect(halfFieldAtZoom(0.5, L)).toBe(23.5);
    expect(halfFieldAtZoom(1, L)).toBe(23.5);
  });
});

describe("halfFieldAtZoom — zoom lens", () => {
  it("returns first halfField at zoomT = 0", () => {
    const L = makeZoomLens([0.4, 0.9], [3, 9], [70, 200], [25, 25], [17, 6.2]);
    expect(halfFieldAtZoom(0, L)).toBeCloseTo(17, 10);
  });

  it("returns last halfField at zoomT = 1", () => {
    const L = makeZoomLens([0.4, 0.9], [3, 9], [70, 200], [25, 25], [17, 6.2]);
    expect(halfFieldAtZoom(1, L)).toBeCloseTo(6.2, 10);
  });

  it("interpolates linearly at zoomT = 0.5", () => {
    const L = makeZoomLens([0.4, 0.9], [3, 9], [70, 200], [25, 25], [17, 6.2]);
    // 17 + 0.5*(6.2-17) = 11.6
    expect(halfFieldAtZoom(0.5, L)).toBeCloseTo(11.6, 10);
  });

  it("interpolates three-position zoom", () => {
    const L = makeZoomLens([0.3, 0.6, 0.9], [2, 5, 8], [24, 70, 120], [20, 18, 16], [42, 17, 10]);
    expect(halfFieldAtZoom(0, L)).toBeCloseTo(42, 10);
    expect(halfFieldAtZoom(0.5, L)).toBeCloseTo(17, 10);
    expect(halfFieldAtZoom(1, L)).toBeCloseTo(10, 10);
  });
});

/* ── Production zoom lens: eflAtZoom, epAtZoom, halfFieldAtZoom ── */

describe("eflAtZoom / epAtZoom / halfFieldAtZoom — production zoom lens (Nikkor Z 70-200mm f/2.8)", () => {
  const NikkorZ70200 = { ...LENS_DEFAULTS, ...NikkorZ70200Raw } as LensData;
  const L = buildLens(NikkorZ70200);

  it("eflAtZoom returns finite values across zoom range", () => {
    for (const t of [0, 0.25, 0.5, 0.75, 1]) {
      expect(isFinite(eflAtZoom(t, L)), `eflAtZoom(${t}) must be finite`).toBe(true);
    }
  });

  it("eflAtZoom matches L.zoomEFLs endpoints exactly", () => {
    expect(eflAtZoom(0, L)).toBeCloseTo(L.zoomEFLs![0], 10);
    expect(eflAtZoom(1, L)).toBeCloseTo(L.zoomEFLs![L.zoomEFLs!.length - 1], 10);
  });

  it("eflAtZoom increases from wide to tele (positive zoom range)", () => {
    const wide = eflAtZoom(0, L);
    const tele = eflAtZoom(1, L);
    expect(tele).toBeGreaterThan(wide);
  });

  it("epAtZoom returns finite values across zoom range", () => {
    for (const t of [0, 0.25, 0.5, 0.75, 1]) {
      expect(isFinite(epAtZoom(t, L)), `epAtZoom(${t}) must be finite`).toBe(true);
    }
  });

  it("halfFieldAtZoom returns finite positive values across zoom range", () => {
    for (const t of [0, 0.25, 0.5, 0.75, 1]) {
      const val = halfFieldAtZoom(t, L);
      expect(isFinite(val), `halfFieldAtZoom(${t}) must be finite`).toBe(true);
      expect(val).toBeGreaterThan(0);
    }
  });

  it("halfFieldAtZoom decreases from wide to tele", () => {
    const wide = halfFieldAtZoom(0, L);
    const tele = halfFieldAtZoom(1, L);
    expect(wide).toBeGreaterThan(tele);
  });
});

/* ── epZRelStopAtZoom ── */

describe("epZRelStopAtZoom — non-zoom lens", () => {
  it("returns L.epZRelStop regardless of zoomT", () => {
    const L = makeNonZoomLens(0.75, 8.5, 50, 12, 23, -10, 20);
    expect(epZRelStopAtZoom(0, L)).toBe(-10);
    expect(epZRelStopAtZoom(0.5, L)).toBe(-10);
    expect(epZRelStopAtZoom(1, L)).toBe(-10);
  });
});

describe("epZRelStopAtZoom — zoom lens", () => {
  it("returns first value at zoomT = 0", () => {
    const L = makeZoomLens([0.4, 0.9], [3, 9], [70, 200], [25, 25], [17, 6.2], [-5, -15]);
    expect(epZRelStopAtZoom(0, L)).toBeCloseTo(-5, 10);
  });

  it("returns last value at zoomT = 1", () => {
    const L = makeZoomLens([0.4, 0.9], [3, 9], [70, 200], [25, 25], [17, 6.2], [-5, -15]);
    expect(epZRelStopAtZoom(1, L)).toBeCloseTo(-15, 10);
  });

  it("interpolates linearly at zoomT = 0.5", () => {
    const L = makeZoomLens([0.4, 0.9], [3, 9], [70, 200], [25, 25], [17, 6.2], [-5, -15]);
    expect(epZRelStopAtZoom(0.5, L)).toBeCloseTo(-10, 10);
  });

  it("handles three-position zoom", () => {
    const L = makeZoomLens([0.3, 0.6, 0.9], [2, 5, 8], [24, 70, 120], [20, 18, 16], [42, 17, 10], [-5, -10, -20]);
    expect(epZRelStopAtZoom(0, L)).toBeCloseTo(-5, 10);
    expect(epZRelStopAtZoom(0.5, L)).toBeCloseTo(-10, 10);
    expect(epZRelStopAtZoom(1, L)).toBeCloseTo(-20, 10);
  });
});

/* ── xpZRelLastSurfAtZoom ── */

describe("xpZRelLastSurfAtZoom — non-zoom lens", () => {
  it("returns L.xpZRelLastSurf regardless of zoomT", () => {
    const L = makeNonZoomLens(0.75, 8.5, 50, 12, 23, -10, 20);
    expect(xpZRelLastSurfAtZoom(0, L)).toBe(20);
    expect(xpZRelLastSurfAtZoom(0.5, L)).toBe(20);
    expect(xpZRelLastSurfAtZoom(1, L)).toBe(20);
  });
});

describe("xpZRelLastSurfAtZoom — zoom lens", () => {
  it("returns first value at zoomT = 0", () => {
    const L = makeZoomLens([0.4, 0.9], [3, 9], [70, 200], [25, 25], [17, 6.2], [-5, -15], [30, 10]);
    expect(xpZRelLastSurfAtZoom(0, L)).toBeCloseTo(30, 10);
  });

  it("returns last value at zoomT = 1", () => {
    const L = makeZoomLens([0.4, 0.9], [3, 9], [70, 200], [25, 25], [17, 6.2], [-5, -15], [30, 10]);
    expect(xpZRelLastSurfAtZoom(1, L)).toBeCloseTo(10, 10);
  });

  it("interpolates linearly at zoomT = 0.5", () => {
    const L = makeZoomLens([0.4, 0.9], [3, 9], [70, 200], [25, 25], [17, 6.2], [-5, -15], [30, 10]);
    expect(xpZRelLastSurfAtZoom(0.5, L)).toBeCloseTo(20, 10);
  });

  it("handles three-position zoom", () => {
    const L = makeZoomLens(
      [0.3, 0.6, 0.9],
      [2, 5, 8],
      [24, 70, 120],
      [20, 18, 16],
      [42, 17, 10],
      [-5, -10, -20],
      [50, 30, 10],
    );
    expect(xpZRelLastSurfAtZoom(0, L)).toBeCloseTo(50, 10);
    expect(xpZRelLastSurfAtZoom(0.5, L)).toBeCloseTo(30, 10);
    expect(xpZRelLastSurfAtZoom(1, L)).toBeCloseTo(10, 10);
  });
});

/* ── epZRelStopAtZoom / xpZRelLastSurfAtZoom — production zoom lens ── */

describe("epZRelStopAtZoom / xpZRelLastSurfAtZoom — production zoom lens (Nikkor Z 70-200mm f/2.8)", () => {
  const NikkorZ70200 = { ...LENS_DEFAULTS, ...NikkorZ70200Raw } as LensData;
  const L = buildLens(NikkorZ70200);

  it("L.zoomEpZRelStops is a non-empty array of finite values", () => {
    expect(Array.isArray(L.zoomEpZRelStops)).toBe(true);
    expect(L.zoomEpZRelStops!.length).toBeGreaterThan(0);
    for (const v of L.zoomEpZRelStops!) {
      expect(isFinite(v)).toBe(true);
    }
  });

  it("L.zoomXpZRelLastSurfs is a non-empty array of finite values", () => {
    expect(Array.isArray(L.zoomXpZRelLastSurfs)).toBe(true);
    expect(L.zoomXpZRelLastSurfs!.length).toBeGreaterThan(0);
    for (const v of L.zoomXpZRelLastSurfs!) {
      expect(isFinite(v)).toBe(true);
    }
  });

  it("epZRelStopAtZoom returns finite values across zoom range", () => {
    for (const t of [0, 0.25, 0.5, 0.75, 1]) {
      expect(isFinite(epZRelStopAtZoom(t, L)), `epZRelStopAtZoom(${t}) must be finite`).toBe(true);
    }
  });

  it("epZRelStopAtZoom matches zoomEpZRelStops endpoints exactly", () => {
    expect(epZRelStopAtZoom(0, L)).toBeCloseTo(L.zoomEpZRelStops![0], 10);
    expect(epZRelStopAtZoom(1, L)).toBeCloseTo(L.zoomEpZRelStops![L.zoomEpZRelStops!.length - 1], 10);
  });

  it("xpZRelLastSurfAtZoom returns finite values across zoom range", () => {
    for (const t of [0, 0.25, 0.5, 0.75, 1]) {
      expect(isFinite(xpZRelLastSurfAtZoom(t, L)), `xpZRelLastSurfAtZoom(${t}) must be finite`).toBe(true);
    }
  });

  it("xpZRelLastSurfAtZoom matches zoomXpZRelLastSurfs endpoints exactly", () => {
    expect(xpZRelLastSurfAtZoom(0, L)).toBeCloseTo(L.zoomXpZRelLastSurfs![0], 10);
    expect(xpZRelLastSurfAtZoom(1, L)).toBeCloseTo(L.zoomXpZRelLastSurfs![L.zoomXpZRelLastSurfs!.length - 1], 10);
  });
});
