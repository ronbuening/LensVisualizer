import { describe, it, expect, vi } from "vitest";
import { compileRaySegment, filterChannels } from "../src/components/hooks/raySegmentUtils.js";

/* ── Helpers ── */
const identity = (v: number) => v;
const clampedRayEnd = (_z: number, _y: number, _u: number, _target: number): [number, number] => [100, 0];

describe("compileRaySegment", () => {
  describe("unclipped rays (clipped = false)", () => {
    it("maps pts through sx/sy and appends clampedRayEnd endpoint", () => {
      const pts = [
        [0, 1],
        [10, 2],
        [20, 3],
      ];
      const seg = compileRaySegment(pts, [], 0.1, false, identity, identity, clampedRayEnd, 50);
      // solid polyline: all pts mapped + final clampedRayEnd point
      expect(seg.sp).toEqual([
        [0, 1],
        [10, 2],
        [20, 3],
        [100, 0],
      ]);
      // no ghost polyline for unclipped rays
      expect(seg.gp).toEqual([]);
    });

    it("applies coordinate transforms", () => {
      const sx = (z: number) => z * 2;
      const sy = (y: number) => -y;
      const pts = [
        [5, 10],
        [15, 20],
      ];
      const seg = compileRaySegment(pts, [], 0.1, false, sx, sy, clampedRayEnd, 50);
      expect(seg.sp[0]).toEqual([10, -10]);
      expect(seg.sp[1]).toEqual([30, -20]);
    });

    it("uses endOverride instead of clampedRayEnd when provided", () => {
      const pts = [[0, 1]];
      const override = [999, 888];
      const seg = compileRaySegment(pts, [], 0, false, identity, identity, clampedRayEnd, 50, override);
      expect(seg.sp[seg.sp.length - 1]).toEqual([999, 888]);
    });

    it("returns empty sp when pts is empty", () => {
      const seg = compileRaySegment([], [], 0, false, identity, identity, clampedRayEnd, 50);
      // no pts and no "last" point → sp is empty
      expect(seg.sp).toEqual([]);
      expect(seg.gp).toEqual([]);
    });

    it("handles single-point pts", () => {
      const seg = compileRaySegment([[5, 3]], [], 0.1, false, identity, identity, clampedRayEnd, 50);
      // single mapped point + clampedRayEnd
      expect(seg.sp).toEqual([
        [5, 3],
        [100, 0],
      ]);
    });
  });

  describe("clipped rays (clipped = true)", () => {
    it("builds ghost polyline from last solid + ghost pts + endpoint", () => {
      const pts = [
        [0, 1],
        [10, 2],
      ];
      const ghostPts = [
        [20, 3],
        [30, 4],
      ];
      const seg = compileRaySegment(pts, ghostPts, 0.05, true, identity, identity, clampedRayEnd, 50);
      // solid polyline: just mapped pts (no endpoint appended for clipped)
      expect(seg.sp).toEqual([
        [0, 1],
        [10, 2],
      ]);
      // ghost polyline: last solid + ghost pts + clampedRayEnd from last ghost
      expect(seg.gp).toEqual([
        [10, 2],
        [20, 3],
        [30, 4],
        [100, 0],
      ]);
    });

    it("uses endOverride for ghost endpoint when provided", () => {
      const pts = [[0, 0]];
      const ghostPts = [[10, 5]];
      const override = [42, 24];
      const seg = compileRaySegment(pts, ghostPts, 0, true, identity, identity, clampedRayEnd, 50, override);
      expect(seg.gp[seg.gp.length - 1]).toEqual([42, 24]);
    });

    it("produces empty ghost when ghostPts is empty", () => {
      const pts = [
        [0, 1],
        [10, 2],
      ];
      const seg = compileRaySegment(pts, [], 0, true, identity, identity, clampedRayEnd, 50);
      expect(seg.gp).toEqual([]);
      // solid still has no endpoint appended for clipped rays
      expect(seg.sp).toEqual([
        [0, 1],
        [10, 2],
      ]);
    });

    it("calls clampedRayEnd with last ghost point and exit slope", () => {
      const clamped = vi.fn((): [number, number] => [200, 50]);
      const pts = [[0, 0]];
      const ghostPts = [[30, 7]];
      compileRaySegment(pts, ghostPts, 0.15, true, identity, identity, clamped, 80);
      expect(clamped).toHaveBeenCalledWith(30, 7, 0.15, 80);
    });

    it("applies coordinate transforms to ghost points", () => {
      const sx = (z: number) => z + 100;
      const sy = (y: number) => y * 10;
      const pts = [[0, 0]];
      const ghostPts = [[5, 2]];
      const seg = compileRaySegment(pts, ghostPts, 0, true, sx, sy, clampedRayEnd, 50);
      // first ghost point is mapped from last solid: sx(0)=100, sy(0)=0
      expect(seg.gp[0]).toEqual([100, 0]);
      // second ghost point: sx(5)=105, sy(2)=20
      expect(seg.gp[1]).toEqual([105, 20]);
    });
  });
});

describe("filterChannels", () => {
  it("returns all channels when all enabled", () => {
    expect(filterChannels(true, true, true, false)).toEqual(["R", "G", "B"]);
  });

  it("returns empty array when all disabled", () => {
    expect(filterChannels(false, false, false, false)).toEqual([]);
  });

  it("returns only R when only R enabled", () => {
    expect(filterChannels(true, false, false, false)).toEqual(["R"]);
  });

  it("returns only G when only G enabled", () => {
    expect(filterChannels(false, true, false, false)).toEqual(["G"]);
  });

  it("returns only B when only B enabled", () => {
    expect(filterChannels(false, false, true, false)).toEqual(["B"]);
  });

  it("returns R and B when G disabled", () => {
    expect(filterChannels(true, false, true, false)).toEqual(["R", "B"]);
  });

  it("returns G and B when R disabled", () => {
    expect(filterChannels(false, true, true, false)).toEqual(["G", "B"]);
  });
});
