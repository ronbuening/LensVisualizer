import { constructionFixtureData } from "./constructionFixtures.js";
import { CATALOG_CONSTRUCTION_FIXTURES } from "./constructionFixtures.js";
import * as constantsModule from "../../../src/optics/first-order/lensConstants.js";
import * as views from "../../../src/optics/prescription/runtimeView.js";
import { runtimeView } from "../../../src/optics/prescription/runtimeView.js";
import { describe, expect, it, vi } from "vitest";
import * as compiler from "../../../src/optics/prescription/compileCanonical.js";
import * as glassCatalog from "../../../src/optics/chromatic/glassCatalog.js";
import * as materials from "../../../src/optics/chromatic/materialResolver.js";
import { ingestLensV1 } from "../../../src/optics/prescription/ingestV1.js";
import { toLensData } from "../../../src/optics/prescription/toLensData.js";
import { dispersionTableFromRuntime } from "../../../src/optics/chromatic/dispersionAdapter.js";
import { summarizeDispersionQuality } from "../../../src/optics/chromatic/dispersionQuality.js";
import { traceRay } from "../../../src/optics/trace/rayAdapters.js";
import { buildVariableStopGapLens, teleconverterHostData, teleconverterZoomHostData } from "./testLensFixtures.js";
import { buildLens } from "../../../src/optics/prescription/buildRuntimeLens.js";
import { doLayoutForRuntimeLens as doLayout, thickOrZero as thick } from "../../../src/optics/state/runtimeAdapters.js";
import { engineLensFromRuntime, prepareRuntimeState } from "../../../src/optics/state/runtimeAdapters.js";
import { compileSurfaceDispersions } from "../../../src/optics/chromatic/dispersionTable.js";
import { compileLensData } from "../../../src/optics/prescription/compile.js";
import { prepareState, prepareStateUncached, stateWithZ } from "../../../src/optics/state/preparedGeometry.js";
import { evaluateSellmeier, resolveGlass } from "../../../src/optics/chromatic/glassCatalog.js";
import { LINE_NM } from "../../../src/optics/chromatic/spectralLines.js";
import type { ElementData, SurfaceData, SurfaceSpectral } from "../../../src/types/optics.js";
import { ALL_CATALOG_KEYS } from "../../../src/utils/catalog/lensCatalog.js";

interface EngineSliderState {
  focusT: number;
  zoomT: number;
  aberrationT?: number;
}

interface EngineStateFixture {
  key: string;
  states: readonly EngineSliderState[];
}

const PRIME_STATES: readonly EngineSliderState[] = [
  { focusT: 0, zoomT: 0 },
  { focusT: 1, zoomT: 0 },
];

const ZOOM_STATES: readonly EngineSliderState[] = [
  { focusT: 0, zoomT: 0 },
  { focusT: 1, zoomT: 0.5 },
  { focusT: 0, zoomT: 1 },
];

const ENGINE_STATE_FIXTURES: readonly EngineStateFixture[] = [
  { key: "nikkor-z-50f18s", states: PRIME_STATES },
  { key: "nikon-ai-af-micro-nikkor-105mm-f28s", states: [{ focusT: 0.8113045208264971, zoomT: 0 }] },
  { key: "nikon-z-24-70f4s", states: ZOOM_STATES },
  { key: "canon-ef-8-15mm-f4l-fisheye-usm", states: ZOOM_STATES },
  { key: "varisoft-rokkor-85f28", states: [{ focusT: 0, zoomT: 0, aberrationT: 0.75 }] },
  { key: "reference-newtonian-side-focus", states: PRIME_STATES },
];

const REQUIRED_FOLDED_REFERENCE_KEYS: readonly string[] = [
  "reference-annular-obscured-mirror",
  "reference-annular-ring-blocker",
  "reference-cassegrain-back-focus",
  "reference-gregorian-secondary",
  "reference-maksutov-cassegrain-meniscus",
  "reference-mangin-second-surface-mirror",
  "reference-newtonian-side-focus",
  "reference-spherical-primary-mirror",
];

function expectClose(actual: number, expected: number, tolerance = 1e-10): void {
  expect(Math.abs(actual - expected)).toBeLessThanOrEqual(tolerance);
}

describe("Optics engine LensData normalization and compatibility", () => {
  it("builds every visible and hidden catalog lens through buildLens", () => {
    for (const key of ALL_CATALOG_KEYS) {
      const runtime = buildLens(CATALOG_CONSTRUCTION_FIXTURES[key]);
      const engine = engineLensFromRuntime(runtime);
      expect(constructionFixtureData(runtime).key).toBe(key);
      expect(engine.key).toBe(key);
      expect(engine.surfaces).toHaveLength(runtime.N);
      /* Engine elements are every traced medium; runtime.elements drops synthetic rear plates for display. */
      expect(engine.elements).toHaveLength(constructionFixtureData(runtime).elements.length);
      expect(engine).not.toHaveProperty("runtime");
      expect(runtimeView(engine)).toBe(runtime);
      // Perspective control is opt-in: lenses without the data block build with movement disabled.
      if (constructionFixtureData(runtime).perspectiveControl == null)
        expect(runtime.perspectiveControl, key).toBeNull();
    }
  });

  it("builds hidden folded reference fixtures and preserves repeated surface-order labels", () => {
    for (const key of REQUIRED_FOLDED_REFERENCE_KEYS) {
      const runtime = buildLens(CATALOG_CONSTRUCTION_FIXTURES[key]);
      const engine = engineLensFromRuntime(runtime);
      expect(engine.flags.isFoldedOptics, key).toBe(true);
      expect(engine.imagePlane.label, key).toBe(runtime.imagePlane.label);
    }

    const mangin = engineLensFromRuntime(
      buildLens(CATALOG_CONSTRUCTION_FIXTURES["reference-mangin-second-surface-mirror"]),
    );
    expect(mangin.opticalPath.surfaceLabels).toEqual(["STO", "MG1", "MG2", "MG1"]);
    expect(mangin.opticalPath.surfaceOrder).toEqual([
      mangin.labelToSurfaceIndex.STO,
      mangin.labelToSurfaceIndex.MG1,
      mangin.labelToSurfaceIndex.MG2,
      mangin.labelToSurfaceIndex.MG1,
    ]);
  });

  it("defaults projection and image-plane metadata to the current runtime behavior", () => {
    const runtime = buildLens(CATALOG_CONSTRUCTION_FIXTURES["nikkor-z-50f18s"]);
    const engine = engineLensFromRuntime(runtime);
    expect(engine.projection.kind).toBe("rectilinear");
    expect(engine.imagePlane.label).toBe("IMG");
    expect(engine.imagePlane.normal).toEqual([0, 0, 1]);
    expectClose(engine.imagePlane.point[2], runtime.totalTrack);
    expect(engine.variables.focusPositions).toEqual([0, 1]);
  });

  it("can normalize directly from LensData without mutating lens data surfaces", () => {
    const original = structuredClone(CATALOG_CONSTRUCTION_FIXTURES["nikkor-z-50f18s"]);
    const engine = compileLensData(original);
    expect(engine.key).toBe(original.key);
    expect(original.surfaces).toEqual(CATALOG_CONSTRUCTION_FIXTURES["nikkor-z-50f18s"].surfaces);
  });
});

describe("Optics engine dispersion descriptors", () => {
  it("exposes all quality labels and per-channel index lookups", () => {
    const bk7 = resolveGlass("N-BK7");
    expect(bk7).toBeDefined();
    const bk7Nd = evaluateSellmeier(bk7!, LINE_NM.d);
    const surfaces: SurfaceData[] = [
      { label: "AIR", R: 1e15, d: 1, nd: 1, sd: 5, elemId: 0 },
      { label: "SELL", R: 40, d: 1, nd: bk7Nd, sd: 5, elemId: 1 },
      { label: "LINE", R: 40, d: 1, nd: 1.6, sd: 5, elemId: 2 },
      { label: "ABBE", R: 40, d: 1, nd: 1.7, sd: 5, elemId: 3 },
      { label: "CONST", R: 40, d: 1, nd: 1.8, sd: 5, elemId: 4 },
    ];
    const elements: ElementData[] = [
      { id: 1, name: "E1", label: "E1", type: "Positive", nd: bk7Nd, vd: 64.17, glass: "N-BK7" },
      { id: 2, name: "E2", label: "E2", type: "Positive", nd: 1.6, nC: 1.59, nF: 1.61 },
      { id: 3, name: "E3", label: "E3", type: "Positive", nd: 1.7, vd: 50 },
      { id: 4, name: "E4", label: "E4", type: "Positive", nd: 1.8 },
    ];
    const spectralByIdx: Record<number, SurfaceSpectral> = { 2: { nC: 1.59, nF: 1.61 } };
    const descriptors = compileSurfaceDispersions(surfaces, elements, spectralByIdx);

    expect(descriptors.map((descriptor) => descriptor.quality)).toEqual([
      "air",
      "sellmeier",
      "lineIndices",
      "abbe",
      "constant",
    ]);
    expect(descriptors[0].indexAt("B")).toBe(1);
    expect(descriptors[2].indexAt("R")).toBe(1.59);
    expect(descriptors[2].indexAt("B")).toBe(1.61);
    expect(descriptors[4].indexAt("V")).toBe(1.8);
  });
});

describe("Optics engine prepared state", () => {
  it("matches doLayout, thick, z positions, and image plane through compatibility wrappers", () => {
    for (const fixture of ENGINE_STATE_FIXTURES) {
      const runtime = buildLens(CATALOG_CONSTRUCTION_FIXTURES[fixture.key]);
      for (const sliderState of fixture.states) {
        const aberrationT = sliderState.aberrationT ?? 0;
        const layout = doLayout(sliderState.focusT, sliderState.zoomT, runtime, aberrationT);
        const prepared = prepareRuntimeState(runtime, sliderState.focusT, sliderState.zoomT, aberrationT);

        expect(prepared.z).toEqual(layout.z);
        expect(prepared.imgZ).toBe(layout.imgZ);
        for (let i = 0; i < runtime.N; i++) {
          expect(prepared.surfaces[i].d).toBe(thick(i, sliderState.focusT, sliderState.zoomT, runtime, aberrationT));
          expect(prepared.surfaces[i].z).toBe(layout.z[i]);
        }
      }
    }
  });

  it("shares immutable cached geometry and matches uncached preparation", () => {
    const runtime = buildVariableStopGapLens([1, 5]);
    const engine = engineLensFromRuntime(runtime);
    const first = prepareState(engine, 0.25, 0.5, 0);
    const bypassed = prepareStateUncached(engine, 0.25, 0.5, 0);

    expect(prepareRuntimeState(runtime, 0.25, 0.5, 0)).toBe(first);
    expect(bypassed).not.toBe(first);
    expect(bypassed).toEqual(first);
    expect(Object.isFrozen(first)).toBe(true);
    expect(Object.isFrozen(first.surfaces)).toBe(true);
    expect(Object.isFrozen(first.z)).toBe(true);
    expect(first.cacheKey).toContain(engine.key);
    const independent = engineLensFromRuntime(buildVariableStopGapLens([1, 8]));
    expect(independent.key).toBe(engine.key);
    const other = prepareState(independent, 0.25, 0.5, 0);
    expect(other).not.toBe(first);
    expect(other.surfaces[0].d).not.toBe(first.surfaces[0].d);
  });

  it("compares controls exactly after clamping and normalizes signed zero", () => {
    const engine = engineLensFromRuntime(buildVariableStopGapLens([1, 5]));
    const zero = prepareState(engine, -0, -0, -0);
    expect([zero.focusT, zero.zoomT, zero.aberrationT]).toEqual([0, 0, 0]);
    expect(prepareState(engine, -1, -1, -1)).toBe(zero);
    expect(prepareState(engine, 2, 2, 2)).toBe(prepareState(engine, 1, 1, 1));
    const controls = [0.5, 0.5, 0.5];
    const base = prepareState(engine, controls[0], controls[1], controls[2]);
    for (let i = 0; i < controls.length; i++) {
      const nearby = [...controls];
      nearby[i] += Number.EPSILON;
      const distinct = prepareState(engine, nearby[0], nearby[1], nearby[2]);
      expect(distinct).not.toBe(base);
      expect(prepareState(engine, nearby[0], nearby[1], nearby[2])).toBe(distinct);
    }
    const centered = {
      ...engine,
      aberrationControl: { label: "Spacing", centerLabel: "Neutral", varBySurfaceIndex: {}, varLabels: [] },
    };
    expect(prepareState(centered, 0, 0, -2)).toBe(prepareState(centered, 0, 0, -1));
    expect(prepareState(centered, 0, 0, -0).aberrationT).toBe(0);
    expect(prepareState(centered, 0, 0, -0.5)).toEqual(prepareStateUncached(centered, 0, 0, -0.5));
    for (const invalid of [NaN, Infinity, -Infinity]) {
      expect(() => prepareState(engine, invalid, 0, 0)).toThrow("focusT must be finite");
      expect(() => prepareState(engine, 0, invalid, 0)).toThrow("zoomT must be finite");
      expect(() => prepareState(engine, 0, 0, invalid)).toThrow("aberrationT must be finite");
    }
  });

  it("evicts the least recently used geometry above 96 states per compiled lens", () => {
    const engine = engineLensFromRuntime(buildVariableStopGapLens([1, 5]));
    const states = Array.from({ length: 96 }, (_, i) => prepareState(engine, i / 100, 0));
    expect(prepareState(engine, 0, 0)).toBe(states[0]);
    const other = engineLensFromRuntime(buildVariableStopGapLens([1, 5]));
    for (let i = 0; i < 100; i++) prepareState(other, i / 100, 0);
    prepareStateUncached(engine, 0.96, 0);
    expect(prepareState(engine, 0.01, 0)).toBe(states[1]);
    prepareState(engine, 0.96, 0);
    expect(prepareState(engine, 0, 0)).toBe(states[0]);
    expect(prepareState(engine, 0.01, 0)).toBe(states[1]);
    const evicted = prepareState(engine, 0.02, 0);
    expect(evicted).not.toBe(states[2]);
    expect(evicted).toEqual(states[2]);
  });

  it("releases the least recently used lens cache while keeping 96 states for each active lens", () => {
    const first = engineLensFromRuntime(buildVariableStopGapLens([1, 5]));
    const second = engineLensFromRuntime(buildVariableStopGapLens([1, 5]));
    const third = engineLensFromRuntime(buildVariableStopGapLens([1, 5]));
    const firstStates = Array.from({ length: 96 }, (_, i) => prepareState(first, i / 100, 0));
    const secondState = prepareState(second, 0, 0);
    // A hit refreshes lens recency, so the third lens evicts the second, not the first.
    expect(prepareState(first, 0, 0)).toBe(firstStates[0]);
    const thirdStates = Array.from({ length: 96 }, (_, i) => prepareState(third, i / 100, 0));
    for (let i = 0; i < 96; i++) {
      expect(prepareState(first, i / 100, 0)).toBe(firstStates[i]);
      expect(prepareState(third, i / 100, 0)).toBe(thirdStates[i]);
    }
    const rebuilt = prepareState(second, 0, 0);
    expect(rebuilt).not.toBe(secondState);
    expect(rebuilt).toEqual(secondState);
    // Eviction drops cache ownership, not the validity of states still held by callers.
    expect(firstStates[0]).toEqual(prepareStateUncached(first, 0, 0));
  });

  it("keeps diagram metadata and translated camera planes distinct in the shared z helper", () => {
    const engine = engineLensFromRuntime(buildVariableStopGapLens([1, 5]));
    const base = prepareState(engine, 0, 0);
    for (const z of [base.z.map((v) => v + 12), base.z.map((v, i) => v + 12 + i), [12]]) {
      const diagram = stateWithZ(base, z, "preserve");
      const camera = stateWithZ(base, z);
      expect(diagram).not.toBe(camera);
      expect(diagram.imagePlane).toBe(base.imagePlane);
      expect(diagram.imgZ).toBe(base.imgZ);
      expect(diagram.totalTrack).toBe(base.totalTrack);
      expect(diagram.surfaces.at(-1)!.d).toBe(base.surfaces.at(-1)!.d);
      expect(camera.imgZ).toBe(base.imgZ + 12);
      expect(camera.surfaces.at(-1)!.d).toBe(camera.imgZ - camera.surfaces.at(-1)!.z);
      for (const mode of ["preserve", "translate"] as const) {
        const state = stateWithZ(base, z, mode);
        expect(stateWithZ(base, z, mode)).toBe(state);
        expect(state.traceGeometry.surfaces).toBe(state.surfaces);
        expect(state.traceGeometry.imagePlane).toBe(state.imagePlane);
      }
    }
  });

  it("owns one frozen trace geometry per prepared state without copying optical records", () => {
    const runtime = buildLens(CATALOG_CONSTRUCTION_FIXTURES["nikon-z-24-70f4s"]);
    const engine = engineLensFromRuntime(runtime);
    const first = prepareState(engine, 0, 0, 0);
    const geometry = first.traceGeometry;
    expect(geometry).toBeDefined();
    expect(geometry.surfaces).toBe(first.surfaces);
    expect(geometry.z).toBe(first.z);
    expect(geometry.imagePlane).toBe(first.imagePlane);
    expect(geometry.pathPlan).toBe(engine.opticalPath);
    expect(geometry.stopSurfaceIndex).toBe(engine.stop.surfaceIndex);
    expect(Object.isFrozen(geometry)).toBe(true);
    expect(Object.isFrozen(geometry.traversal)).toBe(true);
    expect(prepareState(engine, 0, 0, 0).traceGeometry).toBe(geometry);
    for (const controls of [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 0.5],
    ]) {
      expect(prepareState(engine, controls[0], controls[1], controls[2]).traceGeometry).not.toBe(geometry);
    }
    expect(prepareStateUncached(engine, 0, 0).traceGeometry).not.toBe(geometry);
    const other = buildLens(CATALOG_CONSTRUCTION_FIXTURES["nikon-z-24-70f4s"]);
    expect(prepareRuntimeState(other, 0, 0).traceGeometry).toBe(prepareRuntimeState(runtime, 0, 0).traceGeometry);
    const independent = buildLens(toLensData(ingestLensV1(CATALOG_CONSTRUCTION_FIXTURES["nikon-z-24-70f4s"])));
    expect(constructionFixtureData(independent).key).toBe(constructionFixtureData(runtime).key);
    expect(prepareRuntimeState(independent, 0, 0).traceGeometry).not.toBe(
      prepareRuntimeState(runtime, 0, 0).traceGeometry,
    );
  });

  it("keeps CompiledLens parity-recoverable from ordinary buildLens runtimes", () => {
    const runtime = buildLens(CATALOG_CONSTRUCTION_FIXTURES["varisoft-rokkor-85f28"]);
    const engine = engineLensFromRuntime(runtime);
    expect(engine.aberrationControl?.label).toBe(runtime.aberrationControl?.label);
    expect(engine.surfaces.map((surface) => surface.label)).toEqual(runtime.S.map((surface) => surface.label));
  });
});

describe("canonical compiler ownership", () => {
  it("finishes constants before publication and prepares without requesting a runtime view", () => {
    const data = teleconverterHostData();
    const compute = vi.spyOn(constantsModule, "computeLensConstants");
    const view = vi.spyOn(views, "runtimeView");
    const resolve = vi.spyOn(materials, "makeSurfaceDispersion");
    try {
      const compiled = compileLensData(data);
      expect(compute).toHaveBeenCalledTimes(1);
      expect(view).not.toHaveBeenCalled();
      expect(compiled).not.toHaveProperty("runtime");
      expect(compiled.constants).not.toHaveProperty("data");
      expect(compiled.constants).not.toHaveProperty("S");
      expect(Object.isFrozen(compiled)).toBe(true);
      expect(Object.isFrozen(compiled.constants)).toBe(true);
      expect(compiled).not.toHaveProperty("data");
      const calls = resolve.mock.calls.length;
      // Preparation uses compiled facts, including explicit-plane authority, rather than source metadata.
      const source = new Proxy(compiled.source, {
        get() {
          throw new Error("source read during preparation");
        },
      });
      const state = prepareState({ ...compiled, source }, 0.5, 0);
      expect(state.surfaces[state.lens.stop.surfaceIndex].sd).toBe(compiled.stop.physicalSemiDiameter);
      expect(view).not.toHaveBeenCalled();
      const runtime = runtimeView(compiled);
      expect(Object.isFrozen(runtime)).toBe(true);
      expect(runtimeView(compiled)).toBe(runtime);
      expect(engineLensFromRuntime(runtime)).toBe(compiled);
      expect(compileLensData(data)).toBe(compiled);
      expect(compute).toHaveBeenCalledTimes(1);
      expect(resolve).toHaveBeenCalledTimes(calls);
    } finally {
      compute.mockRestore();
      view.mockRestore();
      resolve.mockRestore();
    }
  });

  it("prepares a published iris schedule directly from compiled station constants", () => {
    const data = teleconverterZoomHostData({ zoomStopSemiDiameters: [8, 10, 12] });
    const source = structuredClone(data);
    const compiled = compileLensData(data);
    const view = vi.spyOn(views, "runtimeView");
    try {
      expect(compiled.constants.zoomStopSDs).toEqual([8, 10, 12]);
      for (const [zoomT, radius] of [
        [0, 8],
        [0.125, 8.5],
        [0.5, 10],
        [1, 12],
      ]) {
        const state = prepareState(compiled, 0.5, zoomT);
        expect(state.surfaces[compiled.stop.surfaceIndex].sd).toBe(radius);
      }
      expect(compiled.stop.physicalSemiDiameter).toBe(8);
      expect(view).not.toHaveBeenCalled();
      expect(data).toEqual(source);
    } finally {
      view.mockRestore();
    }
  });

  it("prepares folded image planes from compiled authority without consulting source echoes", () => {
    for (const key of ["reference-newtonian-side-focus", "reference-spherical-primary-mirror"]) {
      const compiled = compileLensData(CATALOG_CONSTRUCTION_FIXTURES[key]);
      expect(compiled.hasExplicitImagePlane).toBe(true);
      const source = new Proxy(compiled.source, {
        get() {
          throw new Error("source read during preparation");
        },
      });
      const expected = prepareState(compiled, 0.25, 0);
      const actual = prepareState({ ...compiled, source }, 0.25, 0);
      expect(actual.imagePlane).toBe(compiled.imagePlane);
      expect(actual.z).toEqual(expected.z);
      expect(actual.imgZ).toBe(expected.imgZ);
    }
  });

  it("never compiles an unregistered RuntimeLens view", () => {
    const runtime = buildLens(teleconverterHostData());
    expect(() => engineLensFromRuntime({ ...runtime })).toThrow(
      "RuntimeLens was not constructed by the canonical compiler",
    );
  });

  it("compiles once per canonical identity and resolves each medium once across every hot entry", () => {
    const data = teleconverterHostData();
    // A flat interface inside the first medium proves surface count is not resolver count.
    const first = data.surfaces.find((s) => s.elemId === 1)!;
    data.surfaces.splice(data.surfaces.indexOf(first) + 1, 0, { ...first, label: "shared-medium", R: 1e15, d: 0 });
    data.rearPlates = [{ thicknessMm: 1, gapAfterMm: 2, nd: 1.52, vd: 60, glass: "N-BK7" }];
    // Same glass label on distinct media must not conflate their optical coordinates.
    for (const e of data.elements) e.glass = "N-BK7";
    const ingested = ingestLensV1(data);
    const before = structuredClone(ingested);
    const view = toLensData(ingested);
    const viewBefore = structuredClone(view);
    const compile = vi.spyOn(compiler, "compileCanonicalUncached");
    const resolve = vi.spyOn(materials, "makeSurfaceDispersion");
    const lookup = vi.spyOn(glassCatalog, "resolveCompatibleGlass");
    try {
      const runtime = buildLens(view);
      const compiled = engineLensFromRuntime(runtime);
      const mediumCount = new Set(runtime.S.filter((s) => s.nd !== 1).map((s) => s.elemId || `index:${s.nd}`)).size;
      const nonAirCalls = () => resolve.mock.calls.filter(([surface]) => surface.nd !== 1).length;
      expect(compile).toHaveBeenCalledTimes(1);
      expect(nonAirCalls()).toBe(mediumCount);
      expect(lookup).toHaveBeenCalledTimes(mediumCount);
      const shared = runtime.S.map((s, i) => (s.elemId === 1 ? i : -1)).filter((i) => i >= 0);
      expect(shared.length).toBeGreaterThanOrEqual(2);
      expect(compiled.dispersion[shared[0]].indexAt).toBe(compiled.dispersion[shared[1]].indexAt);
      const glassCalls = resolve.mock.calls.filter(([surface]) => surface.nd !== 1);
      expect(new Set(glassCalls.map(([, element]) => element?.id)).size).toBe(mediumCount);
      const calls = resolve.mock.calls.length;
      for (let i = 0; i < 3; i++) {
        expect(buildLens(view)).toBe(runtime);
        expect(buildLens(toLensData(ingested))).toBe(runtime);
        const state = prepareRuntimeState(runtime, 0, 0);
        traceRay(0.1, 0, [...state.z], 0, 0, runtime.stopPhysSD, false, runtime);
        summarizeDispersionQuality(runtime);
        expect(dispersionTableFromRuntime(runtime)).toBe(compiled.dispersion);
      }
      expect(compile).toHaveBeenCalledTimes(1);
      expect(resolve).toHaveBeenCalledTimes(calls);
      expect(lookup).toHaveBeenCalledTimes(mediumCount);
      expect(ingested).toEqual(before);
      expect(view).toEqual(viewBefore);
      expect(compiled.surfaces[compiled.stop.surfaceIndex].sd).toBe(runtime.stopPhysSD);
      expect(compiled.surfaces.filter((s) => s.source.synthetic === "rearPlate")).toHaveLength(2);
      expect(compiled.surfaces.filter((s) => s.source.synthetic === "rearPlate").every((s) => !s.clips)).toBe(true);
      const copy = toLensData(ingestLensV1(view));
      expect(buildLens(copy)).not.toBe(runtime);
      expect(compile).toHaveBeenCalledTimes(2);
      expect(nonAirCalls()).toBe(2 * mediumCount);
      expect(lookup).toHaveBeenCalledTimes(2 * mediumCount);
    } finally {
      compile.mockRestore();
      resolve.mockRestore();
      lookup.mockRestore();
    }
  });
});
