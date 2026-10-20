import { registerRuntimeFixture } from "./testLensFixtures.js";
import { createTraceGeometry } from "../../../src/optics/trace/geometry.js";
import { describe, expect, it, vi } from "vitest";
import { build, buildMissAfterFirstHitLens, buildSimplePositiveElementLens } from "./testLensFixtures.js";
import { prepareRuntimeState } from "../../../src/optics/state/runtimeAdapters.js";
import {
  prepareEngineTrace,
  prepareRayTrace,
  prepareRayTraceForState,
  traceEngineRay,
  traceSkewRayChromatic,
  traceSkewRayVectorChromatic,
} from "../../../src/optics/trace/rayAdapters.js";
import * as normalization from "../../../src/optics/prescription/identity.js";
import { prepareState } from "../../../src/optics/state/preparedGeometry.js";
import { createPerspectiveTraceContext } from "../../../src/optics/perspective/trace.js";
import { buildLens } from "../../../src/optics/prescription/buildRuntimeLens.js";
import { traceFixtureSlope, traceFixtureVector } from "./traceGeometryFixtures.js";
import { doLayoutForRuntimeLens as doLayout } from "../../../src/optics/state/runtimeAdapters.js";
import { solveChiefRayForRuntimeLens as solveChiefRay } from "../../../src/optics/state/fieldAdapters.js";
import {
  traceRay,
  traceRayChromatic,
  traceRayVector,
  traceRayVectorChromatic,
  traceSkewRay,
  traceSkewRayVector,
} from "../../../src/optics/trace/rayAdapters.js";
import { traceChiefRelativeSkewRay } from "../../../src/optics/trace/chiefRelative.js";
import { LENS_CATALOG } from "../../../src/utils/catalog/lensCatalog.js";
import type { RuntimeLens } from "../../../src/types/optics.js";

const LENS_KEYS = ["apo-lanthar-50f2", "nokton-50f1", "sonnar-50f15"] as const;
const FIELD_DEGS = [5, 30, 60] as const;
const Y0_OFFSETS = [0, 1.5, -2.5] as const;

function lensFor(key: string): RuntimeLens {
  return buildLens(LENS_CATALOG[key]);
}

describe("production vector traversal", () => {
  it.each(LENS_KEYS)("matches slope entry for %s across moderate fields", (key) => {
    const L = lensFor(key);
    const zFirst = 0;

    for (const fieldDeg of FIELD_DEGS) {
      for (const y0 of Y0_OFFSETS) {
        const thetaRad = (fieldDeg * Math.PI) / 180;
        const uy0 = -Math.tan(thetaRad);

        const slope = traceFixtureSlope(L, { y0, uy0 }, { leadDistance: 0, checkSemiDiameter: true });
        const vector = traceFixtureVector(
          L,
          { origin: [0, y0, zFirst], direction: [0, -Math.sin(thetaRad), Math.cos(thetaRad)] },
          { checkSemiDiameter: true },
        );

        expect(vector.x).toBeCloseTo(slope.x, 10);
        expect(vector.y).toBeCloseTo(slope.y, 10);
        expect(vector.ux).toBeCloseTo(slope.ux, 10);
        expect(vector.uy).toBeCloseTo(slope.uy, 10);
        expect(vector.status).toBe(slope.status);
        expect(vector.hits.length).toBe(slope.hits.length);
        expect(vector.failureReason).toBe(slope.failureReason);
      }
    }
  });

  it("preserves recorded heights between slope and vector entries", () => {
    const L = lensFor("nokton-50f1");
    const thetaRad = (15 * Math.PI) / 180;
    const slope = traceFixtureSlope(L, { y0: 0, uy0: -Math.tan(thetaRad) }, { leadDistance: 0, recordHeights: true });
    const vector = traceFixtureVector(
      L,
      { origin: [0, 0, 0], direction: [0, -Math.sin(thetaRad), Math.cos(thetaRad)] },
      { recordHeights: true },
    );

    expect(slope.heights).not.toBeNull();
    expect(vector.heights).not.toBeNull();
    expect(vector.heights!.length).toBe(slope.heights!.length);
    for (let i = 0; i < vector.heights!.length; i++) {
      expect(vector.heights![i]).toBeCloseTo(slope.heights![i], 10);
    }
  });

  it("respects stopAt and skipLastTransfer identically through both entries", () => {
    const L = lensFor("apo-lanthar-50f2");
    const thetaRad = (20 * Math.PI) / 180;
    const stopAt = L.stopIdx;

    const slope = traceFixtureSlope(
      L,
      { y0: 0, uy0: -Math.tan(thetaRad) },
      { leadDistance: 0, stopAt, skipLastTransfer: true },
    );
    const vector = traceFixtureVector(
      L,
      { origin: [0, 0, 0], direction: [0, -Math.sin(thetaRad), Math.cos(thetaRad)] },
      { stopAt, skipLastTransfer: true },
    );

    expect(vector.terminalSurfaceIndex).toBe(slope.terminalSurfaceIndex);
    expect(vector.returnVertexIndex).toBe(slope.returnVertexIndex);
    expect(vector.y).toBeCloseTo(slope.y, 10);
    expect(vector.uy).toBeCloseTo(slope.uy, 10);
  });

  it("public traceRayVector matches slope tracing below the object-plane cap", () => {
    const L = lensFor("nokton-50f1");
    const { z: zPos } = doLayout(0, 0, L);
    const fieldDeg = 15;
    const thetaRad = (fieldDeg * Math.PI) / 180;
    const y0 = 1.25;

    const slope = traceRay(y0, -Math.tan(thetaRad), zPos, 0, 0, L.stopPhysSD, true, L);
    const vector = traceRayVector(
      {
        origin: [0, y0, 0],
        direction: [0, -Math.sin(thetaRad), Math.cos(thetaRad)],
      },
      zPos,
      L.stopPhysSD,
      true,
      L,
    );

    expect(vector.y).toBeCloseTo(slope.y, 10);
    expect(vector.u).toBeCloseTo(slope.u, 10);
    expect(vector.clipped).toBe(slope.clipped);
    expect(vector.pts.length).toBeGreaterThan(0);
  });

  it("public vector adapters honor non-default focus and zoom state", () => {
    const L = lensFor("nikon-z-24-70f4s");
    const focusT = 0.72;
    const zoomT = 0.65;
    const { z: zPos } = doLayout(focusT, zoomT, L);
    const fieldDeg = 4;
    const thetaRad = (fieldDeg * Math.PI) / 180;
    const uy = -Math.tan(thetaRad);
    const direction: [number, number, number] = [0, -Math.sin(thetaRad), Math.cos(thetaRad)];
    const y0 = 0.3;

    const slope = traceRay(y0, uy, zPos, focusT, zoomT, L.stopPhysSD, true, L);
    const vector = traceRayVector({ origin: [0, y0, zPos[0]], direction }, zPos, L.stopPhysSD, true, L, focusT, zoomT);

    expect(vector.y).toBeCloseTo(slope.y, 10);
    expect(vector.u).toBeCloseTo(slope.u, 10);
    expect(vector.clipped).toBe(slope.clipped);

    const chromaticSlope = traceRayChromatic(y0, uy, zPos, focusT, zoomT, L.stopPhysSD, true, L, "R");
    const chromaticVector = traceRayVectorChromatic(
      { origin: [0, y0, zPos[0]], direction },
      zPos,
      L.stopPhysSD,
      true,
      L,
      "R",
      focusT,
      zoomT,
    );
    expect(chromaticVector.y).toBeCloseTo(chromaticSlope.y, 10);
    expect(chromaticVector.u).toBeCloseTo(chromaticSlope.u, 10);

    const ux = 0.01;
    const skewLength = Math.hypot(ux, uy, 1);
    const skewDirection: [number, number, number] = [ux / skewLength, uy / skewLength, 1 / skewLength];
    const skewSlope = traceSkewRay(0.2, y0, ux, uy, focusT, zoomT, L.stopPhysSD, true, L);
    const skewVector = traceSkewRayVector(
      { origin: [0.2, y0, zPos[0]], direction: skewDirection },
      zPos,
      L.stopPhysSD,
      true,
      L,
      focusT,
      zoomT,
    );

    expect(skewVector.x).toBeCloseTo(skewSlope.x, 10);
    expect(skewVector.y).toBeCloseTo(skewSlope.y, 10);
    expect(skewVector.ux).toBeCloseTo(skewSlope.ux, 10);
    expect(skewVector.uy).toBeCloseTo(skewSlope.uy, 10);
    expect(skewVector.clipped).toBe(skewSlope.clipped);
  });

  it("public traceRayVector draws finite ghost points for past-cap fisheye launches", () => {
    const L = lensFor("nikon-fisheye-nikkor-6mm-f28");
    const { z: zPos } = doLayout(0, 0, L);
    const launch = solveChiefRay(110, 0, 0, L).vectorLaunch;

    expect(launch).toBeDefined();
    const result = traceRayVector(launch!, zPos, L.stopPhysSD, true, L);
    const points = [...result.pts, ...result.ghostPts];

    expect(points.length).toBeGreaterThan(0);
    for (const [z, y] of points) {
      expect(Number.isFinite(z)).toBe(true);
      expect(Number.isFinite(y)).toBe(true);
    }
  });
});

// Shared cap/root-order guard: aperture checks must classify the first physical hit, never search for a clear one.
describe("asphere cap tracing and clipping", () => {
  const coefficients = { K: 0, A3: -6, A4: 11, A5: -6, A6: 1, A8: 0, A10: 0, A12: 0, A14: 0 };
  const ray = { origin: [0, 4, 0] as [number, number, number], direction: [0, -1, 0] as [number, number, number] };

  it.each([0, 2.25])("preserves the first stop/inner-hole clip instead of using a later clear root (%s)", (innerSd) => {
    const L = build({
      closeFocusM: 0.5,
      yScFill: 0.55,
      nominalFno: 2,
      fstopSeries: [2, 4, 8],
      key: "test-asphere-cap-order",
      name: "Asphere cap fixture",
      focalLengthDesign: 50,
      apertureDesign: 2,
      elements: [{ id: 1, name: "Fixture", label: "L1", type: "positive", nd: 1.5, vd: 50 }],
      surfaces: [
        { label: "STO", R: 1e15, nd: 1, sd: 2.5, innerSd, d: 1, elemId: 0 },
        { label: "1", R: 50, nd: 1.5, sd: 3, d: 1, elemId: 1 },
        { label: "2", R: -50, nd: 1, sd: 3, d: 20, elemId: 0 },
      ],
      asph: { STO: coefficients },
    });
    // The runtime builder sizes its diaphragm from the nominal f-number. This intersection fixture
    // explicitly authors the cap and overrides only the active stop radius in the trace options.
    const state = prepareRuntimeState(L, 0, 0);
    const capState = {
      ...state,
      surfaces: state.surfaces.map((surface, i) => (i === 0 ? { ...surface, sd: 2.5, innerSd } : surface)),
    };
    capState.traceGeometry = createTraceGeometry({
      ...state.traceGeometry,
      surfaces: capState.surfaces,
      isFoldedOptics: state.lens.flags.isFoldedOptics,
    });
    const prepared = traceEngineRay(capState, ray, {
      launchBoundT: 4,
      checkSemiDiameter: true,
      stopSemiDiameter: innerSd ? 2.5 : 1.5,
      stopOnClip: true,
    });
    expect(prepared.hits).toHaveLength(1);
    expect(prepared.hits[0].radius).toBeCloseTo(2, 8);
    expect(prepared.hits[0].clipped).toBe(true);
    expect(prepared.hits[0].clipReason).toBe(innerSd ? "inner-hole" : "semi-diameter");
  });
});

describe("prepared traversal selection", () => {
  it.each([
    ["apo-lanthar-50f2", "sequential"],
    ["reference-spherical-primary-mirror", "generalized"],
    ["reference-mangin-second-surface-mirror", "generalized"],
    ["reference-annular-ring-blocker", "generalized"],
  ] as const)("caches %s traversal and keeps defined stopAt requests sequential", (key, kind) => {
    const state = prepareRuntimeState(lensFor(key), 0, 0);
    const geometry = state.traceGeometry;
    expect(geometry).toBeDefined();
    expect(geometry.traversal.kind).toBe(kind);
    const input = { origin: [0, 1, -5], direction: [0, 0, 1] } as const;
    const full = traceEngineRay(state, input, { recordHeights: true, recordOpticalPath: true });
    expect(full.diagnostics.terminationReason === "sequential-return").toBe(kind === "sequential");
    for (const stopAt of [0, 1, 1.5, NaN, Infinity, -Infinity]) {
      for (const skipLastTransfer of [false, true]) {
        const result = traceEngineRay(state, input, {
          stopAt,
          skipLastTransfer,
          recordHeights: true,
          recordOpticalPath: true,
        });
        const count = Number.isFinite(stopAt)
          ? Math.min(state.surfaces.length, Math.max(0, Math.round(stopAt)))
          : state.surfaces.length;
        expect(result.diagnostics.terminationReason).toBe("sequential-return");
        expect(result.returnVertexIndex).toBe(
          count <= 0 ? 0 : Math.min(skipLastTransfer ? count - 1 : count, state.surfaces.length - 1),
        );
        expect(result.heights?.length).toBe(result.hits.length);
        expect(result.opticalPathLengthMm).toBeDefined();
      }
    }
    expect(state.traceGeometry).toBe(geometry);
  });

  it("classifies geometry once rather than once per fan ray or active perspective guard", () => {
    for (const key of ["apo-lanthar-50f2", "reference-spherical-primary-mirror"]) {
      const base = prepareRuntimeState(lensFor(key), 0, 0);
      let classificationReads = 0;
      const lens = {
        ...base.lens,
        flags: {
          ...base.lens.flags,
          get isFoldedOptics() {
            classificationReads++;
            return base.lens.flags.isFoldedOptics;
          },
        },
      };
      const state = prepareState(lens, 0, 0);
      const context = createPerspectiveTraceContext({ preparedState: state, movement: { shiftMm: 1, tiltDeg: 0 } });
      const before = classificationReads;
      expect(before).toBeGreaterThan(0);
      for (const y of [0, 0.1, 0.2]) {
        const input = { origin: [0, y, -5], direction: [0, 0, 1] } as const;
        traceEngineRay(state, input);
        if (base.lens.flags.isFoldedOptics) {
          expect(() => context.traceRay(input)).toThrow("sequential optical paths only");
        } else {
          context.traceRay(input);
        }
        context.traceRay(input, { stopAt: 1 });
      }
      expect(classificationReads).toBe(before);
    }

    const base = prepareRuntimeState(lensFor("apo-lanthar-50f2"), 0, 0);
    let scans = 0;
    const surfaces = new Proxy(base.surfaces, {
      get(target, property, receiver) {
        if (property === "some") scans++;
        return Reflect.get(target, property, receiver);
      },
    });
    const geometry = createTraceGeometry({ ...base.traceGeometry, surfaces, isFoldedOptics: false });
    expect(scans).toBe(1);
    const state = { ...base, surfaces, traceGeometry: geometry };
    for (const y of [0, 0.1, 0.2]) traceEngineRay(state, { origin: [0, y, -5], direction: [0, 0, 1] });
    expect(scans).toBe(1);
    expect(state.traceGeometry).toBe(geometry);

    const blocker = base.surfaces.map((surface, i) =>
      i === 0 ? { ...surface, interaction: { ...surface.interaction, type: "block" as const } } : surface,
    );
    const blocking = createTraceGeometry({ ...geometry, surfaces: blocker, isFoldedOptics: false });
    expect(blocking.traversal.kind).toBe("generalized");
  });
});

describe("chief-relative physical traces", () => {
  it("selects the first authored cap root before a later definite miss", () => {
    const base = buildSimplePositiveElementLens();
    const surfaces = [
      { label: "CAP", R: 1e15, nd: 1, sd: 2.5, d: 10, elemId: 0 },
      { label: "STO", R: 1e15, nd: 1, sd: 20, d: 10, elemId: 0 },
      { label: "MISS", R: 1, nd: 1, sd: 0.5, d: 10, elemId: 0 },
    ];
    // Isolate cap/root order from build-time pupil sizing and the afocal-system refusal.
    const L = {
      ...base,
      S: surfaces,
      stopIdx: 1,
      labelIdx: { CAP: 0, STO: 1, MISS: 2 },
      data: { ...base.data, surfaces, asph: { CAP: { K: 0, A4: 0.04, A6: -0.004, A8: 0, A10: 0, A12: 0, A14: 0 } } },
    };
    const lens = registerRuntimeFixture({ ...L, rayLead: 5 });
    const state = prepareRuntimeState(lens, 0, 0);
    const trace = traceEngineRay(
      state,
      { origin: [0, 7.5, -5], direction: [0, -1, 1] },
      {
        checkSemiDiameter: true,
        stopSemiDiameter: 20,
        ghost: true,
        stopOnClip: true,
      },
    );
    expect(trace.hits[0].radius).toBeCloseTo(2.076820214007, 8);
    expect(trace.hits[0].point[2]).toBeCloseTo(0.423179785993, 8);
    expect(trace.hits.map((hit) => hit.surfaceIndex)).toEqual([0, 1]);
    expect(trace.status).not.toBe("ok");
    const relative = traceChiefRelativeSkewRay(0, 0, 2.5, -1, 1, 0, 0, 20, true, lens);
    expect(relative.clipped).toBe(true);
    expect(relative.y).toBe(trace.y);
    expect(relative.uy).toBe(trace.uy);
    expect(relative.transmission).toBe(1);
  });

  it.each([false, true])("terminates a subsequent miss without fabricated ghost hits (%s)", (ghost) => {
    const L = buildMissAfterFirstHitLens();
    const state = prepareRuntimeState(L, 0, 0);
    const trace = traceEngineRay(
      state,
      { origin: [0, 30, 0], direction: [0, 0, 1] },
      {
        checkSemiDiameter: true,
        stopSemiDiameter: 100,
        ghost,
        stopOnClip: true,
      },
    );
    expect(trace.hits).toHaveLength(1);
    expect(trace.hits[0].surfaceIndex).toBe(0);
    expect(trace.status).not.toBe("ok");
    const relative = traceChiefRelativeSkewRay(0, 0, 30, 0, 1, 0, 0, 100, ghost, L);
    expect(relative).toEqual({ x: 0, y: 30, ux: 0, uy: 0, clipped: true, transmission: 1 });
  });
});

function expectBitIdentical(actual: unknown, expected: unknown): void {
  if (typeof expected === "number") {
    expect(Object.is(actual, expected)).toBe(true);
  } else if (expected !== null && typeof expected === "object") {
    expect(Object.keys(actual as object)).toEqual(Object.keys(expected));
    for (const key of Object.keys(expected)) {
      expectBitIdentical((actual as Record<string, unknown>)[key], (expected as Record<string, unknown>)[key]);
    }
  } else {
    expect(actual).toBe(expected);
  }
}

describe("request-bound runtime ray adapters", () => {
  it("matches all per-call forms bit for bit for ordinary, folded, chromatic and absorbing fans", () => {
    const base = buildSimplePositiveElementLens();
    const absorbing = build({
      ...base.data,
      elements: base.data.elements.map((element) => ({ ...element, absorptionCoefficientPerMm: 0.2 })),
    });
    const lenses = [lensFor("apo-lanthar-50f2"), lensFor("reference-newtonian-side-focus"), absorbing];
    for (const L of lenses) {
      for (const focusT of [0, 0.7]) {
        const zoomT = 0;
        const aberrationT = 0;
        const zPos = doLayout(focusT, zoomT, L).z.map((z) => z + 3);
        for (const ghost of [false, true]) {
          for (const stopSD of [undefined, L.stopPhysSD * 0.7]) {
            for (const channel of [undefined, "R", "B", "V"] as const) {
              for (const launchBoundT of [undefined, 0, -1, 1000]) {
                const bound = prepareRayTrace(L, {
                  zPos,
                  focusT,
                  zoomT,
                  stopSD,
                  ghost,
                  channel,
                  aberrationT,
                  launchBoundT,
                });
                for (const fraction of [0, 0.5, 2]) {
                  const y = fraction * L.EP.epSD;
                  const u = -0.02;
                  const input = {
                    origin: [0.3, y, zPos[0] - 10] as const,
                    direction: [0, -0.02, 1] as const,
                    launchBoundT,
                  };
                  const ray = channel
                    ? traceRayChromatic(y, u, zPos, focusT, zoomT, stopSD, ghost, L, channel, aberrationT)
                    : traceRay(y, u, zPos, focusT, zoomT, stopSD, ghost, L, aberrationT);
                  const skew = channel
                    ? traceSkewRayChromatic(0.3, y, 0, u, focusT, zoomT, stopSD, ghost, L, channel, aberrationT)
                    : traceSkewRay(0.3, y, 0, u, focusT, zoomT, stopSD, ghost, L, aberrationT);
                  const vector = channel
                    ? traceRayVectorChromatic(input, zPos, stopSD, ghost, L, channel, focusT, zoomT, aberrationT)
                    : traceRayVector(input, zPos, stopSD, ghost, L, focusT, zoomT, aberrationT);
                  const skewVector = channel
                    ? traceSkewRayVectorChromatic(input, zPos, stopSD, ghost, L, channel, focusT, zoomT, aberrationT)
                    : traceSkewRayVector(input, zPos, stopSD, ghost, L, focusT, zoomT, aberrationT);
                  expectBitIdentical(bound.ray(y, u), ray);
                  expectBitIdentical(bound.skew(0.3, y, 0, u), skew);
                  expectBitIdentical(bound.vector(input), vector);
                  expectBitIdentical(bound.skewVector(input), skewVector);
                }
              }
            }
          }
        }
      }
    }
  });

  it("binds full and partial engine traversal with identical capture results", () => {
    for (const key of ["apo-lanthar-50f2", "reference-newtonian-side-focus"]) {
      const state = prepareRuntimeState(lensFor(key), 0, 0);
      for (const stopAt of [undefined, 0, state.lens.stop.surfaceIndex + 1]) {
        for (const capture of ["terminal", "hits", "diagnostics"] as const) {
          const options = { stopAt, capture, checkSemiDiameter: true };
          const input = { origin: [0, 1, -20] as const, direction: [0, 0, 1] as const };
          const expected = traceEngineRay(state, input, options);
          let bound = false;
          const geometry = {
            ...state.traceGeometry,
            get traversal() {
              if (bound) throw new Error("per-ray traversal selection");
              return state.traceGeometry.traversal;
            },
          };
          const trace = prepareEngineTrace({ ...state, traceGeometry: geometry }, options);
          bound = true;
          expectBitIdentical(trace(input), expected);
          expectBitIdentical(trace(input), expected);
        }
      }
    }
  });

  it("resolves runtime state once per request and never inside its fan", () => {
    const L = buildSimplePositiveElementLens();
    const normalize = vi.spyOn(normalization, "compiledLensFromRuntime");
    try {
      const bound = prepareRayTrace(L, { ghost: true });
      expect(normalize).toHaveBeenCalledTimes(1);
      for (let i = 0; i < 12; i++) {
        bound.ray(i * 0.01, 0);
        bound.skew(0, i * 0.01, 0, 0);
      }
      expect(normalize).toHaveBeenCalledTimes(1);
    } finally {
      normalize.mockRestore();
    }
  });

  it("reuses options and traversal without RuntimeLens or geometry selection reads in a prepared fan", () => {
    const L = buildSimplePositiveElementLens();
    const base = prepareRuntimeState(L, 0, 0);
    let tracing = false;
    const seen: unknown[] = [];
    const traversal = {
      ...base.traceGeometry.traversal,
      full: ((geometry, input, options) => {
        seen.push(options);
        return base.traceGeometry.traversal.full(geometry, input, options);
      }) as typeof base.traceGeometry.traversal.full,
    };
    const geometry = {
      ...base.traceGeometry,
      get traversal() {
        if (tracing) throw new Error("per-ray traversal selection");
        return traversal;
      },
    };
    const lens = {
      ...base.lens,
      get runtime() {
        if (tracing) throw new Error("RuntimeLens read in fan");
        return L;
      },
    };
    const state = { ...base, lens, traceGeometry: geometry };
    const bound = prepareRayTraceForState(state, { ghost: true, channel: "B", launchBoundT: 1000 });
    tracing = true;
    for (let i = 0; i < 3; i++) bound.vector({ origin: [0, i * 0.01, -10], direction: [0, 0, 1] });
    expect(seen).toHaveLength(3);
    expect(seen[0]).toBe(seen[1]);
    expect(seen[1]).toBe(seen[2]);
    expect(seen[0]).toMatchObject({ launchBoundT: 1000, capture: "diagnostics", directionNormalized: false });
    bound.ray(0, 0);
    bound.skew(0, 0, 0, 0);
    bound.skewVector({ origin: [0, 0, -10], direction: [0, 0, 1] });
  });
});
