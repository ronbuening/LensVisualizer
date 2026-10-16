import { prepareRuntimeState } from "../../../../src/optics/compat.js";
import { build, buildSimplePositiveElementLens } from "../testLensFixtures.js";
import { mtfTraceClassification } from "../../../../src/optics/analysis/mtfRayClassification.js";
import * as pathPlanner from "../../../../src/optics/trace/pathPlanner.js";
import * as foldedDiagnostics from "../../../../src/optics/trace/foldedDiagnostics.js";
import type { Ray3 } from "../../../../src/optics/types.js";
import type { TraceGeometry, TraceOptions } from "../../../../src/optics/trace/types.js";
import { describe, expect, it, vi } from "vitest";
import { fixtureGeometry, type GeometryFixture, traceFixtureSlope } from "../traceGeometryFixtures.js";
import { sag } from "../../../../src/optics/geometry/surfaceProfile.js";
import type { SurfaceData } from "../../../../src/types/optics.js";

const flatSurfaces = [
  { label: "1", R: 1e15, nd: 1.0, d: 5, sd: 10, elemId: 0 },
  { label: "2", R: 1e15, nd: 1.0, d: 7, sd: 10, elemId: 0 },
  { label: "3", R: 1e15, nd: 1.0, d: 10, sd: 10, elemId: 0 },
] satisfies SurfaceData[];

describe("production sequential traversal", () => {
  it("matches vertex-plane transfer through flat air surfaces", () => {
    const result = traceFixtureSlope({ S: flatSurfaces, asphByIdx: {} }, { y0: 1, uy0: 0.2 }, { stopAt: 1 });

    expect(result.status).toBe("ok");
    expect(result.y).toBeCloseTo(2, 10);
    expect(result.uy).toBeCloseTo(0.2, 10);
  });

  it("records physical spherical sag hit points", () => {
    const surfaces = [
      { label: "1", R: 50, nd: 1.5168, d: 5, sd: 15, elemId: 1 },
      { label: "2", R: -50, nd: 1.0, d: 80, sd: 15, elemId: 0 },
    ] satisfies SurfaceData[];

    const result = traceFixtureSlope(
      { S: surfaces, asphByIdx: {} },
      { y0: 5, uy0: 0 },
      { zPos: [0, 5], leadDistance: 5 },
    );

    expect(result.status).toBe("ok");
    expect(result.hits[0].point[2]).toBeCloseTo(sag(5, 50), 8);
    expect(result.hits[0].radius).toBeCloseTo(5, 10);
  });

  it("honors stopAt, skipLastTransfer, and recorded heights", () => {
    const transferred = traceFixtureSlope(
      { S: flatSurfaces, asphByIdx: {} },
      { y0: 1, uy0: 0.1 },
      { stopAt: 2, recordHeights: true },
    );
    const skipped = traceFixtureSlope(
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
    const result = traceFixtureSlope(
      { S: clippedSurfaces, asphByIdx: {} },
      { y0: 2, uy0: 0.1 },
      { checkSemiDiameter: true },
    );

    expect(result.status).not.toBe("ok");
    expect(isFinite(result.y)).toBe(true);
    expect(isFinite(result.uy)).toBe(true);
  });

  it("clips at the semi-diameter itself, with no margin a lens object could widen it by", () => {
    /* `clipMargin` once multiplied every clip radius; a lens object that still carries one must not move the clip. */
    const margined = { S: flatSurfaces, asphByIdx: {}, clipMargin: 1.05 };
    const trace = (y0: number) => traceFixtureSlope(margined, { y0, uy0: 0 }, { checkSemiDiameter: true });

    expect(trace(9.999).status).toBe("ok");
    expect(trace(10.001).status).not.toBe("ok");
  });

  it("reports intersection or refraction failure as a clipped failed trace", () => {
    const surfaces = [
      { label: "1", R: 10, nd: 2.0, d: 5, sd: 20, elemId: 1 },
      { label: "2", R: 1e15, nd: 1.0, d: 10, sd: 20, elemId: 0 },
    ] satisfies SurfaceData[];

    const result = traceFixtureSlope(
      { S: surfaces, asphByIdx: {} },
      { y0: 9, uy0: 0.5 },
      { zPos: [0, 5], checkSemiDiameter: true, leadDistance: 1 },
    );

    expect(result.status).not.toBe("ok");
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

describe("trace capture policies", () => {
  const singlet = {
    S: [
      { label: "1", R: 10, nd: 1.5168, d: 1, sd: 3, elemId: 1 },
      { label: "2", R: -10, nd: 1, d: 10, sd: 3, elemId: 0 },
    ],
    asphByIdx: {},
  } satisfies GeometryFixture;

  function compareCaptures(geometry: TraceGeometry, input: Ray3, options: TraceOptions = {}) {
    const traverse = options.stopAt === undefined ? geometry.traversal.full : geometry.traversal.partial;
    const full = traverse(geometry, input, { ...options, capture: "diagnostics" });
    const hits = traverse(geometry, input, { ...options, capture: "hits" });
    const terminal = traverse(geometry, input, { ...options, capture: "terminal" });
    const { hits: fullHits, diagnostics, ...trajectory } = full;
    expect(diagnostics).toBeDefined();
    expect(hits.hits).toStrictEqual(fullHits);
    expect(hits.diagnostics).toBeUndefined();
    expect(terminal.hits).toBeUndefined();
    expect(terminal.diagnostics).toBeUndefined();
    for (const result of [hits, terminal]) {
      const { hits: _hits, diagnostics: _diagnostics, ...actual } = result;
      expect(actual).toStrictEqual(trajectory);
    }
    return { full, terminal };
  }

  it.each([false, true])("preserves sequential trajectories, clipping and ghost behavior (ghost=%s)", (ghost) => {
    const geometry = fixtureGeometry(singlet);
    for (const y of [0, 1, 3.2, 12]) {
      compareCaptures(
        geometry,
        { origin: [0, y, -2], direction: [0, 0, 1] },
        {
          checkSemiDiameter: true,
          stopOnClip: true,
          recordHeights: true,
          recordOpticalPath: true,
          ghost,
        },
      );
    }
    compareCaptures(
      geometry,
      { origin: [0, 1, -2], direction: [0, 0.1, 1] },
      {
        stopAt: 1,
        skipLastTransfer: true,
        recordHeights: true,
      },
    );
  });

  it.each(["sequential", "auto"] as const)(
    "preserves generalized %s trajectories and diagnostic skip selection",
    (mode) => {
      const geometry = fixtureGeometry({
        ...singlet,
        isFoldedOptics: true,
        opticalPath: {
          mode,
          surfaceOrder: mode === "sequential" ? [0, 1] : null,
          surfaceLabels: null,
          maxInteractions: 8,
        },
      });
      for (const y of [0, 1, 3.2, 12]) {
        compareCaptures(
          geometry,
          { origin: [0, y, -2], direction: [0, 0, 1] },
          {
            checkSemiDiameter: true,
            stopOnClip: true,
            recordHeights: true,
          },
        );
      }
    },
  );

  it("preserves reflected encounter paths, loop detection and interaction-limit failures", () => {
    const geometry = fixtureGeometry({
      S: flatSurfaces
        .slice(0, 2)
        .map((surface) => ({ ...surface, interaction: { type: "reflect", incidentSide: "both" } })),
      asphByIdx: {},
      isFoldedOptics: true,
      opticalPath: { mode: "auto", surfaceOrder: null, surfaceLabels: null, maxInteractions: 3 },
      imagePlane: { z: 20, y: 0, normal: { z: 1, y: 0 }, label: "IMG" },
    });
    const { full } = compareCaptures(geometry, { origin: [0, 1, 2], direction: [0, 0, 1] });
    expect(full.hits.map((hit) => hit.surfaceIndex)).toEqual([1, 0, 1]);
    expect(full.failureReason).toBe("loopDetected");
    const limited = { ...geometry, pathPlan: { ...geometry.pathPlan, maxInteractions: 2 } };
    expect(compareCaptures(limited, { origin: [0, 1, 2], direction: [0, 0, 1] }).full.failureReason).toBe(
      "maxInteractions",
    );
  });

  it("keeps physical miss and numerical failure status/reason/classification without diagnostics", () => {
    const state = prepareRuntimeState(
      build({
        ...buildSimplePositiveElementLens().data,
        surfaces: [...singlet.S, { label: "STO", R: 1e15, nd: 1, d: 10, sd: 3, elemId: 0 }],
      }),
      0,
      0,
    );
    const physical = compareCaptures(state.traceGeometry, { origin: [12, 0, -10], direction: [0, 0, 1] });
    expect(physical.full.status).toBe("failed");
    expect(physical.full.failureReason).toBe("noBracket");
    expect(mtfTraceClassification(physical.full, state)).toBe("blocked");
    expect(mtfTraceClassification(physical.terminal, state)).toBe("blocked");

    // A solver refusal inside a clear cap is unresolved flux, never a proved physical miss.
    const refusal = vi.spyOn(pathPlanner, "intersectStateSurface").mockReturnValue({
      ok: false,
      failureReason: "noConvergedIntersection",
      residual: 1e-4,
      iterations: 72,
    });
    try {
      const numerical = compareCaptures(state.traceGeometry, { origin: [0, 0, -10], direction: [0, 0, 1] });
      expect(numerical.full.status).toBe("failed");
      expect(numerical.full.failureReason).toBe("noConvergedIntersection");
      expect(mtfTraceClassification(numerical.full, state)).toBe("failed");
      expect(mtfTraceClassification(numerical.terminal, state)).toBe("failed");
    } finally {
      refusal.mockRestore();
    }
  });

  it("does not construct diagnostics for terminal/hits capture, including invalid launches", () => {
    const geometry = fixtureGeometry(singlet);
    const diagnostics = vi.spyOn(foldedDiagnostics, "buildTraceDiagnostics");
    try {
      for (const capture of ["terminal", "hits"] as const) {
        for (const direction of [
          [0, 0, 1],
          [0, 0, 0],
        ] as const) {
          const trace = geometry.traversal.full(geometry, { origin: [0, 0, -2], direction }, { capture });
          expect(trace.diagnostics).toBeUndefined();
          if (capture === "terminal") expect(trace.hits).toBeUndefined();
        }
      }
      expect(diagnostics).not.toHaveBeenCalled();
      geometry.traversal.full(geometry, { origin: [0, 0, -2], direction: [0, 0, 1] });
      expect(diagnostics).toHaveBeenCalledOnce();
    } finally {
      diagnostics.mockRestore();
    }
  });
});
