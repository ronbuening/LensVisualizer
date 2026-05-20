import { describe, expect, it } from "vitest";
import LENS_DEFAULTS from "../../../../src/lens-data/defaults.js";
import Sonnar50f15Raw from "../../../../src/lens-data/carl-zeiss-jena/ZeissSonnar50f15.data.js";
import buildLens from "../../../../src/optics/buildLens.js";
import { traceExactSurfaceStack } from "../../../../src/optics/internal/exactSurfaceTrace.js";
import { sag } from "../../../../src/optics/internal/surfaceMath.js";
import { computeFieldGeometryAtState } from "../../../../src/optics/optics.js";
import { computeBothPupilAberrationProfiles } from "../../../../src/optics/pupilAberration.js";
import type { LensData, SurfaceData } from "../../../../src/types/optics.js";

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

describe("exact trace migration coverage", () => {
  it("build-derived constants can be compared deterministically between legacy and exact modes", () => {
    const legacy = buildLens({ ...LENS_DEFAULTS, ...Sonnar50f15Raw } as LensData, { traceMode: "legacy" });
    const exact = buildLens({ ...LENS_DEFAULTS, ...Sonnar50f15Raw } as LensData, { traceMode: "exact" });
    const deltas = [
      Math.abs(exact.stopPhysSD - legacy.stopPhysSD),
      Math.abs(exact.epZRelStop - legacy.epZRelStop),
      Math.abs(exact.xpZRelLastSurf - legacy.xpZRelLastSurf),
      Math.abs(exact.halfField - legacy.halfField),
    ];

    expect(deltas.some((delta) => delta > 1e-6)).toBe(true);
    expect(isFinite(exact.stopPhysSD)).toBe(true);
    expect(isFinite(exact.epZRelStop)).toBe(true);
  });

  it("field geometry and pupil baselines honor forced exact and legacy trace modes", () => {
    const L = buildLens({ ...LENS_DEFAULTS, ...Sonnar50f15Raw } as LensData);
    const legacyGeometry = computeFieldGeometryAtState(0, 0, L, 0, { mode: "legacy" });
    const exactGeometry = computeFieldGeometryAtState(0, 0, L, 0, { mode: "exact" });
    const legacyPupils = computeBothPupilAberrationProfiles(0.25, 0, L, undefined, undefined, 0, { mode: "legacy" });
    const exactPupils = computeBothPupilAberrationProfiles(0.25, 0, L, undefined, undefined, 0, { mode: "exact" });

    expect(
      Math.abs(exactGeometry.yRatio - legacyGeometry.yRatio) +
        Math.abs(exactGeometry.b - legacyGeometry.b) +
        Math.abs(exactGeometry.halfFieldDeg - legacyGeometry.halfFieldDeg),
    ).toBeGreaterThan(1e-8);
    expect(isFinite(exactPupils.ep.paraxialEpZRelStop)).toBe(true);
    expect(isFinite(exactPupils.xp.paraxialXpZRelLastSurf)).toBe(true);
    expect(
      Math.abs(exactPupils.ep.paraxialEpZRelStop - legacyPupils.ep.paraxialEpZRelStop) +
        Math.abs(exactPupils.xp.paraxialXpZRelLastSurf - legacyPupils.xp.paraxialXpZRelLastSurf),
    ).toBeGreaterThan(1e-8);
  });

  it("keeps production optics code off the legacy traceSurfacesReal alias", () => {
    const opticsSources = import.meta.glob<string>("../../../../src/optics/**/*.ts", {
      eager: true,
      import: "default",
      query: "?raw",
    });
    const offenders = Object.entries(opticsSources)
      .filter(([path]) => !path.endsWith("internal/traceSurfaces.ts"))
      .filter(([, source]) => source.includes("traceSurfacesReal"))
      .map(([path]) => path);

    expect(offenders).toEqual([]);
  });
});
