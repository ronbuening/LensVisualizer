import { describe, expect, it } from "vitest";
import { traceExactSurfaceStack } from "../../../../src/optics/internal/exactSurfaceTrace.js";
import { sag } from "../../../../src/optics/internal/surfaceMath.js";
import type { SurfaceData } from "../../../../src/types/optics.js";

const flatSurfaces = [
  { label: "1", R: 1e15, nd: 1.0, d: 5, sd: 10, elemId: 0 },
  { label: "2", R: 1e15, nd: 1.0, d: 7, sd: 10, elemId: 0 },
  { label: "3", R: 1e15, nd: 1.0, d: 10, sd: 10, elemId: 0 },
] satisfies SurfaceData[];

describe("traceExactSurfaceStack", () => {
  it("matches vertex-plane transfer through flat air surfaces", () => {
    const result = traceExactSurfaceStack({ S: flatSurfaces, asphByIdx: {} }, { y0: 1, uy0: 0.2 }, { stopAt: 1 });

    expect(result.clipped).toBe(false);
    expect(result.y).toBeCloseTo(2, 10);
    expect(result.uy).toBeCloseTo(0.2, 10);
  });

  it("records physical spherical sag hit points", () => {
    const surfaces = [
      { label: "1", R: 50, nd: 1.5168, d: 5, sd: 15, elemId: 1 },
      { label: "2", R: -50, nd: 1.0, d: 80, sd: 15, elemId: 1 },
    ] satisfies SurfaceData[];

    const result = traceExactSurfaceStack(
      { S: surfaces, asphByIdx: {} },
      { y0: 5, uy0: 0 },
      { zPos: [0, 5], leadDistance: 5 },
    );

    expect(result.clipped).toBe(false);
    expect(result.hits[0].point[2]).toBeCloseTo(sag(5, 50), 8);
    expect(result.hits[0].radius).toBeCloseTo(5, 10);
  });

  it("honors stopAt, skipLastTransfer, and recorded heights", () => {
    const transferred = traceExactSurfaceStack(
      { S: flatSurfaces, asphByIdx: {} },
      { y0: 1, uy0: 0.1 },
      { stopAt: 2, recordHeights: true },
    );
    const skipped = traceExactSurfaceStack(
      { S: flatSurfaces, asphByIdx: {} },
      { y0: 1, uy0: 0.1 },
      { stopAt: 2, skipLastTransfer: true, recordHeights: true },
    );

    expect(transferred.y).toBeCloseTo(2.2, 10);
    expect(skipped.y).toBeCloseTo(1.5, 10);
    expect(transferred.heights).toEqual([1, 1.5]);
  });

  it("marks semi-diameter clipping without discarding finite terminal coordinates", () => {
    const clippedSurfaces = flatSurfaces.map((surface) => ({ ...surface, sd: 1 }));
    const result = traceExactSurfaceStack(
      { S: clippedSurfaces, asphByIdx: {} },
      { y0: 2, uy0: 0.1 },
      { checkSemiDiameter: true },
    );

    expect(result.clipped).toBe(true);
    expect(isFinite(result.y)).toBe(true);
    expect(isFinite(result.uy)).toBe(true);
  });

  it("reports intersection or refraction failure as a clipped failed trace", () => {
    const surfaces = [
      { label: "1", R: 10, nd: 2.0, d: 5, sd: 20, elemId: 1 },
      { label: "2", R: 1e15, nd: 1.0, d: 10, sd: 20, elemId: 1 },
    ] satisfies SurfaceData[];

    const result = traceExactSurfaceStack(
      { S: surfaces, asphByIdx: {} },
      { y0: 9, uy0: 0.5 },
      { zPos: [0, 5], checkSemiDiameter: true, leadDistance: 1 },
    );

    expect(result.clipped).toBe(true);
    expect(result.failureReason).not.toBeNull();
  });
});

describe("exact trace coverage", () => {
  it("keeps the deleted traceSurfacesReal alias out of every source file", () => {
    const allSources = import.meta.glob<string>(["../../../../src/**/*.ts", "../../../../__tests__/**/*.ts"], {
      eager: true,
      import: "default",
      query: "?raw",
    });
    const offenders = Object.entries(allSources)
      .filter(([, source]) => /\btraceSurfacesReal\b/.test(source) || /\btraceSurfacesVertexReal\b/.test(source))
      .map(([path]) => path);

    expect(offenders).toEqual([]);
  });
});
