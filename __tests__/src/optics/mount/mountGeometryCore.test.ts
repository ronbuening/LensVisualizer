/**
 * Mount geometry-core unit tests.
 *
 * Locks the package's coordinate conventions before any real mount data exists: the 12-o'clock
 * clockwise polar frame, the lens-rear mirror, deterministic number formatting, annular-sector arc
 * flags, the wraparound span rule, and the margin/outward-rounding viewBox.
 */
import { describe, expect, it } from "vitest";
import { fmt, fmtPoint, round3 } from "../../../../src/optics/mount/round.js";
import { mirrorAngleDeg, normalizeAngleDeg } from "../../../../src/optics/mount/mirror.js";
import { annularSectorPath, clockwiseSpanDeg, polarToCartesian } from "../../../../src/optics/mount/polar.js";
import { computeViewBox, emptyBBox, includeCircle } from "../../../../src/optics/mount/viewBox.js";

describe("round/fmt", () => {
  it("formats deterministically and strips trailing zeros", () => {
    expect(fmt(0)).toBe("0");
    expect(fmt(-0)).toBe("0");
    expect(fmt(5)).toBe("5");
    expect(fmt(5.25)).toBe("5.25");
    expect(fmt(5.2500001)).toBe("5.25");
    expect(fmt(1 / 3)).toBe("0.333");
    expect(fmt(46.5)).toBe("46.5");
  });

  it("normalizes negative zero from rounding", () => {
    expect(round3(-0.0001) === 0).toBe(true);
    expect(fmt(-0.0001)).toBe("0");
    expect(fmtPoint(-0.0001, 12)).toBe("0,12");
  });
});

describe("mirrorAngleDeg", () => {
  it("fixes 12/6 o'clock and swaps 3/9 o'clock", () => {
    expect(mirrorAngleDeg(0)).toBe(0);
    expect(mirrorAngleDeg(180)).toBe(180);
    expect(mirrorAngleDeg(90)).toBe(270);
    expect(mirrorAngleDeg(270)).toBe(90);
    expect(mirrorAngleDeg(360)).toBe(0);
    expect(mirrorAngleDeg(45)).toBe(315);
  });

  it("normalizeAngleDeg wraps into [0,360)", () => {
    expect(normalizeAngleDeg(-10)).toBe(350);
    expect(normalizeAngleDeg(370)).toBe(10);
    expect(normalizeAngleDeg(360)).toBe(0);
  });
});

describe("polarToCartesian (0deg = top, clockwise)", () => {
  const near = (a: number, b: number): boolean => Math.abs(a - b) < 1e-9;
  it("places clock positions correctly in SVG (y-down) space", () => {
    const top = polarToCartesian(0, 0, 10, 0);
    expect(near(top.x, 0) && near(top.y, -10)).toBe(true);
    const right = polarToCartesian(0, 0, 10, 90);
    expect(near(right.x, 10) && near(right.y, 0)).toBe(true);
    const bottom = polarToCartesian(0, 0, 10, 180);
    expect(near(bottom.x, 0) && near(bottom.y, 10)).toBe(true);
    const left = polarToCartesian(0, 0, 10, 270);
    expect(near(left.x, -10) && near(left.y, 0)).toBe(true);
  });
});

describe("clockwiseSpanDeg (wraparound rule)", () => {
  it("measures the clockwise sweep mod 360", () => {
    expect(clockwiseSpanDeg(350, 10)).toBe(20);
    expect(clockwiseSpanDeg(0, 120)).toBe(120);
    expect(clockwiseSpanDeg(120, 120)).toBe(0);
    expect(clockwiseSpanDeg(10, 350)).toBe(340);
  });
});

describe("annularSectorPath", () => {
  it("sets the large-arc flag from the span", () => {
    const small = annularSectorPath(0, 0, 20, 24, 0, 20);
    expect(small).toContain("A24,24 0 0 1");
    expect(small).toContain("A20,20 0 0 0");
    const large = annularSectorPath(0, 0, 20, 24, 0, 200);
    expect(large).toContain("A24,24 0 1 1");
    expect(large).toContain("A20,20 0 1 0");
  });

  it("is byte-identical across calls (determinism)", () => {
    const a = annularSectorPath(0, 0, 20, 24, 12, 108);
    const b = annularSectorPath(0, 0, 20, 24, 12, 108);
    expect(a).toBe(b);
  });
});

describe("computeViewBox", () => {
  it("adds a 0.1 margin and rounds outward to whole mm", () => {
    const box = emptyBBox();
    includeCircle(box, 0, 0, 27);
    // width=height=54, margin=5.4 → minX=floor(-32.4)=-33, maxX=ceil(32.4)=33 → 66 wide
    expect(computeViewBox(box)).toBe("-33 -33 66 66");
  });

  it("returns 'unknown' for an empty box", () => {
    expect(computeViewBox(emptyBBox())).toBe("unknown");
  });
});
