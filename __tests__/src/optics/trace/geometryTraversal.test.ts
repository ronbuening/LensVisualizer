import { constructionFixtureData } from "../constructionFixtures.js";
import { prepareRuntimeState } from "../../../../src/optics/state/runtimeAdapters.js";
import { build, buildSimplePositiveElementLens } from "../testLensFixtures.js";
import { provesApertureMiss, traceRayClassification } from "../../../../src/optics/trace/rayClassification.js";
import * as pathPlanner from "../../../../src/optics/trace/pathPlanner.js";
import * as foldedDiagnostics from "../../../../src/optics/trace/foldedDiagnostics.js";
import type { Ray3, Vec3 } from "../../../../src/optics/types.js";
import type { EngineTraceResult, TraceGeometry, TraceOptions } from "../../../../src/optics/trace/types.js";
import { describe, expect, it, vi } from "vitest";
import {
  fixtureGeometry,
  type GeometryFixture,
  traceFixtureSlope,
  traceFixtureVector,
} from "../traceGeometryFixtures.js";
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

describe("sequential step backwards", () => {
  /* A flat glass face, then a rear face of radius +20 whose rim bends toward the image: at y = 5 it sags 0.635 mm,
   * past whatever lies 0.3 or 0.5 mm behind its vertex. A ray parallel to the axis at y = 5 meets the flat face
   * square on, so everything after it has a closed form. */
  const n = 1.5;
  const h = 5;
  const rearR = 20;
  const rearSag = rearR - Math.sqrt(rearR * rearR - h * h);
  const front = { label: "1", R: 1e15, nd: n, d: 5, sd: 10, elemId: 1 };
  const rear = { label: "2", R: rearR, nd: 1, d: 0.5, sd: 10, elemId: 0 };
  const stopInSag = {
    S: [front, rear, { label: "STO", R: 1e15, nd: 1, d: 10, sd: 8, elemId: 0 }],
    asphByIdx: {},
  } satisfies GeometryFixture;
  const ray: Ray3 = { origin: [0, h, -1], direction: [0, 0, 1] };
  const rearHit: Vec3 = [0, h, 5 + rearSag];

  /** Vector Snell from glass of index n into air at the rear face's hit, whose normal faces +z. */
  function refractedAtRear(): Vec3 {
    const normal: Vec3 = [0, -h / rearR, (rearR - rearSag) / rearR];
    const cosI = normal[2];
    const cosT = Math.sqrt(1 - n * n * (1 - cosI * cosI));
    const k = cosT - n * cosI;
    return [0, k * normal[1], n + k * normal[2]];
  }

  it("steps back to a stop plane inside the sag of the concave face before it", () => {
    const trace = traceFixtureVector(stopInSag, ray);
    const out = refractedAtRear();
    const step = (5.5 - rearHit[2]) / out[2];

    expect(step).toBeLessThan(0);
    expect(trace.status).toBe("ok");
    expect(trace.hits.map((hit) => hit.surfaceLabel)).toEqual(["1", "2", "STO"]);
    expect(trace.hits[1].point[2]).toBeCloseTo(rearHit[2], 12);
    expect(trace.hits[2].point[1]).toBeCloseTo(h + out[1] * step, 12);
    expect(trace.hits[2].point[2]).toBeCloseTo(5.5, 12);
  });

  it("meets the second of two crossing spheres behind the first, on its own vertex-side branch", () => {
    // The next face starts 0.3 mm behind the rear vertex and is flatter (R = +40), so the two cross below y = 5.
    const nextR = 40;
    const crossing = {
      S: [
        front,
        { ...rear, d: 0.3 },
        { label: "3", R: nextR, nd: 1.6, d: 4, sd: 10, elemId: 2 },
        { label: "4", R: 1e15, nd: 1, d: 10, sd: 10, elemId: 0 },
      ],
      asphByIdx: {},
    } satisfies GeometryFixture;
    const nextVertex = 5.3;
    expect(nextVertex + nextR - Math.sqrt(nextR * nextR - h * h)).toBeLessThan(rearHit[2]);

    const out = refractedAtRear();
    const center: Vec3 = [0, 0, nextVertex + nextR];
    const offset: Vec3 = [0, rearHit[1] - center[1], rearHit[2] - center[2]];
    const b = out[1] * offset[1] + out[2] * offset[2];
    const c = offset[1] ** 2 + offset[2] ** 2 - nextR * nextR;
    // The nearer root lies on the hemisphere about the vertex; the farther one is the sphere's far side.
    const step = -b - Math.sqrt(b * b - c);
    const expected: Vec3 = [0, rearHit[1] + out[1] * step, rearHit[2] + out[2] * step];

    const trace = traceFixtureVector(crossing, ray);
    expect(step).toBeLessThan(0);
    expect(expected[2]).toBeLessThan(center[2]);
    expect(trace.status).toBe("ok");
    expect(trace.hits.map((hit) => hit.surfaceLabel)).toEqual(["1", "2", "3", "4"]);
    expect(trace.hits[2].point[1]).toBeCloseTo(expected[1], 12);
    expect(trace.hits[2].point[2]).toBeCloseTo(expected[2], 12);
  });

  it("charges a backward step to the optical path with its sign", () => {
    // The rear face is a passive interface in one glass, so the ray runs straight and steps back 0.135 mm in it.
    const passive = {
      S: [front, { ...rear, nd: n, elemId: 1 }, { label: "3", R: 1e15, nd: 1, d: 10, sd: 10, elemId: 0 }],
      asphByIdx: {},
    } satisfies GeometryFixture;
    const trace = traceFixtureVector(passive, ray, { recordOpticalPath: true });

    expect(trace.hits[2].point[2]).toBeCloseTo(5.5, 12);
    expect(5.5 - rearHit[2]).toBeLessThan(0);
    // 1 mm of air, then 5 + 0.635 mm and −0.135 mm of glass: the straight path's 1 + 1.5 × 5.5.
    expect(trace.opticalPathLengthMm).toBeCloseTo(1 + n * 5 + n * rearSag + n * (5.5 - rearHit[2]), 12);
    expect(trace.opticalPathLengthMm).toBeCloseTo(1 + n * 5.5, 12);
  });

  it("blocks a ray that no longer travels toward +z at the next surface, whose line it crosses behind", () => {
    // Two planes in air, so a ray launched toward −z keeps its direction past the first.
    const planes = {
      S: [
        { label: "1", R: 1e15, nd: 1, d: 5, sd: 20, elemId: 0 },
        { label: "2", R: 1e15, nd: 1, d: 10, sd: 20, elemId: 0 },
      ],
      asphByIdx: {},
    } satisfies GeometryFixture;
    const geometry = fixtureGeometry(planes);
    const reversed: Vec3 = [0, 0.6, -0.8];
    const trace = traceFixtureVector(planes, { origin: [0, 1, 1], direction: reversed }, { launchBoundT: 100 });

    expect(trace.hits.map((hit) => hit.point)).toEqual([[0, 1.75, 0]]);
    expect(trace.terminalDirection).toEqual(reversed);
    expect(trace.failureReason).toBe("noBracket");
    expect(trace.terminalSurfaceIndex).toBe(0);
    // The line does cross the second plane, 6.25 mm behind the hit, and the trace does not step back to it.
    const behind = pathPlanner.intersectStateSurface({ origin: [0, 1.75, 0], direction: [0, -0.6, 0.8] }, geometry, 1, {
      maxT: 100,
    });
    expect(behind.ok && behind.t).toBeCloseTo(6.25, 12);
    expect(pathPlanner.sequentialSurfaceBackT(geometry, 1, [0, 1.75, 0], reversed)).toBe(0);
  });

  it("never steps back to the first surface or on a folded path", () => {
    const past: Vec3 = [0, h, 6];
    const forward: Vec3 = [0, 0, 1];
    const sequential = fixtureGeometry(stopInSag);
    const folded = fixtureGeometry({ ...stopInSag, isFoldedOptics: true });

    expect(pathPlanner.sequentialSurfaceBackT(sequential, 2, past, forward)).toBeCloseTo(6 - 4.5, 15);
    expect(pathPlanner.sequentialSurfaceBackT(sequential, 0, past, forward)).toBe(0);
    expect(folded.traversal.kind).toBe("generalized");
    expect(pathPlanner.sequentialSurfaceBackT(folded, 2, past, forward)).toBe(0);
  });

  it("proves a miss along the whole line where the trace may step back", () => {
    const state = prepareRuntimeState(
      build({
        ...constructionFixtureData(buildSimplePositiveElementLens()),
        surfaces: stopInSag.S.map((surface) => ({ ...surface, nd: surface.nd === 1 ? 1 : 1.5168 })),
      }),
      0,
      0,
    );
    const rearZ = state.surfaces[1].z;
    const missAt = (y: number) => {
      const sag = rearR - Math.sqrt(rearR * rearR - y * y);
      const trace = {
        terminalSurfaceIndex: 1,
        terminalPoint: [0, y, rearZ + sag],
        terminalDirection: [0, 0.13, 0.99],
      } as unknown as EngineTraceResult;
      return pathPlanner.sequentialSurfaceBackT(state.traceGeometry, 2, trace.terminalPoint, [0, 0, 1]) > 0
        ? provesApertureMiss(trace, state, 8)
        : null;
    };

    // Behind the hit the line crosses the stop plane inside the 8 mm iris, so a failure there is no miss.
    expect(missAt(5)).toBe(false);
    // At y = 9.5 it crosses the plane outside the iris.
    expect(missAt(9.5)).toBe(true);
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
        ...constructionFixtureData(buildSimplePositiveElementLens()),
        surfaces: [...singlet.S, { label: "STO", R: 1e15, nd: 1, d: 10, sd: 3, elemId: 0 }],
      }),
      0,
      0,
    );
    const physical = compareCaptures(state.traceGeometry, { origin: [12, 0, -10], direction: [0, 0, 1] });
    expect(physical.full.status).toBe("failed");
    expect(physical.full.failureReason).toBe("noBracket");
    expect(traceRayClassification(physical.full, state)).toBe("blocked");
    expect(traceRayClassification(physical.terminal, state)).toBe("blocked");

    // A solver refusal inside a clear cap is unresolved flux, never a proved physical miss.
    const refusal = vi.spyOn(pathPlanner, "intersectSequentialSurface").mockReturnValue({
      ok: false,
      failureReason: "noConvergedIntersection",
      residual: 1e-4,
      iterations: 72,
    });
    try {
      const numerical = compareCaptures(state.traceGeometry, { origin: [0, 0, -10], direction: [0, 0, 1] });
      expect(numerical.full.status).toBe("failed");
      expect(numerical.full.failureReason).toBe("noConvergedIntersection");
      expect(traceRayClassification(numerical.full, state)).toBe("failed");
      expect(traceRayClassification(numerical.terminal, state)).toBe("failed");
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
