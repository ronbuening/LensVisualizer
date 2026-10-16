import * as constantsModule from "../../../src/optics/first-order/lensConstants.js";
import * as views from "../../../src/optics/prescription/runtimeView.js";
import { runtimeView } from "../../../src/optics/prescription/runtimeView.js";
import { describe, expect, it, vi } from "vitest";
import * as compiler from "../../../src/optics/prescription/compileCanonical.js";
import * as glassCatalog from "../../../src/optics/glassCatalog.js";
import * as materials from "../../../src/optics/chromatic/materialResolver.js";
import { ingestLensV1, toLensData } from "../../../src/optics/buildLens.js";
import { dispersionTableFromRuntime2 } from "../../../src/optics/chromatic/dispersionAdapter.js";
import { summarizeDispersionQuality2 } from "../../../src/optics/chromatic/dispersionQuality.js";
import { traceRay } from "../../../src/optics/optics.js";
import { teleconverterHostData, teleconverterZoomHostData } from "./testLensFixtures.js";
import buildLens from "../../../src/optics/buildLens.js";
import { doLayout, thick } from "../../../src/optics/optics.js";
import { buildLens2, engineLensFromRuntime, prepareRuntimeState } from "../../../src/optics/compat.js";
import { compileSurfaceDispersions } from "../../../src/optics/prescription/compileMaterials.js";
import { compileLensData } from "../../../src/optics/prescription/compile.js";
import { createPreparedStateCache } from "../../../src/optics/state/cache.js";
import { prepareState } from "../../../src/optics/state/prepareState.js";
import { evaluateSellmeier, LINE_NM, resolveGlass } from "../../../src/optics/glassCatalog.js";
import type { ElementData, SurfaceData, SurfaceSpectral } from "../../../src/types/optics.js";
import { ALL_CATALOG_KEYS, LENS_CATALOG } from "../../../src/utils/catalog/lensCatalog.js";

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
  it("builds every visible and hidden catalog lens through buildLens2", () => {
    for (const key of ALL_CATALOG_KEYS) {
      const runtime = buildLens2(LENS_CATALOG[key]);
      const engine = engineLensFromRuntime(runtime);
      expect(runtime.data.key).toBe(key);
      expect(engine.key).toBe(key);
      expect(engine.surfaces).toHaveLength(runtime.N);
      /* Engine elements are every traced medium; runtime.elements drops synthetic rear plates for display. */
      expect(engine.elements).toHaveLength(runtime.data.elements.length);
      expect(engine).not.toHaveProperty("runtime");
      expect(runtimeView(engine)).toBe(runtime);
      // Perspective control is opt-in: lenses without the data block build with movement disabled.
      if (runtime.data.perspectiveControl == null) expect(runtime.perspectiveControl, key).toBeNull();
    }
  });

  it("builds hidden folded reference fixtures and preserves repeated surface-order labels", () => {
    for (const key of REQUIRED_FOLDED_REFERENCE_KEYS) {
      const runtime = buildLens2(LENS_CATALOG[key]);
      const engine = engineLensFromRuntime(runtime);
      expect(engine.flags.isFoldedOptics, key).toBe(true);
      expect(engine.imagePlane.label, key).toBe(runtime.imagePlane.label);
    }

    const mangin = engineLensFromRuntime(buildLens2(LENS_CATALOG["reference-mangin-second-surface-mirror"]));
    expect(mangin.opticalPath.surfaceLabels).toEqual(["STO", "MG1", "MG2", "MG1"]);
    expect(mangin.opticalPath.surfaceOrder).toEqual([
      mangin.labelToSurfaceIndex.STO,
      mangin.labelToSurfaceIndex.MG1,
      mangin.labelToSurfaceIndex.MG2,
      mangin.labelToSurfaceIndex.MG1,
    ]);
  });

  it("defaults projection and image-plane metadata to the current runtime behavior", () => {
    const runtime = buildLens2(LENS_CATALOG["nikkor-z-50f18s"]);
    const engine = engineLensFromRuntime(runtime);
    expect(engine.projection.kind).toBe("rectilinear");
    expect(engine.imagePlane.label).toBe("IMG");
    expect(engine.imagePlane.normal).toEqual([0, 0, 1]);
    expectClose(engine.imagePlane.point[2], runtime.totalTrack);
    expect(engine.variables.focusPositions).toEqual([0, 1]);
  });

  it("can normalize directly from LensData without mutating lens data surfaces", () => {
    const original = structuredClone(LENS_CATALOG["nikkor-z-50f18s"]);
    const engine = compileLensData(original);
    expect(engine.key).toBe(original.key);
    expect(original.surfaces).toEqual(LENS_CATALOG["nikkor-z-50f18s"].surfaces);
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
      const runtime = buildLens2(LENS_CATALOG[fixture.key]);
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

  it("caches immutable prepared states by lens identity and normalized slider values", () => {
    const runtime = buildLens2(LENS_CATALOG["nikon-z-24-70f4s"]);
    const engine = engineLensFromRuntime(runtime);
    const cache = createPreparedStateCache();
    const first = prepareState(engine, 0.25, 0.5, 0, { cache });
    const second = prepareState(engine, 0.25, 0.5, 0, { cache });
    const bypassed = prepareState(engine, 0.25, 0.5, 0);

    expect(second).toBe(first);
    expect(bypassed).not.toBe(first);
    expect(Object.isFrozen(first)).toBe(true);
    expect(Object.isFrozen(first.surfaces)).toBe(true);
    expect(first.cacheKey).toContain(engine.key);
  });

  it("owns one frozen trace geometry per prepared state without copying optical records", () => {
    const runtime = buildLens2(LENS_CATALOG["nikon-z-24-70f4s"]);
    const engine = engineLensFromRuntime(runtime);
    const cache = createPreparedStateCache();
    const first = prepareState(engine, 0, 0, 0, { cache });
    const geometry = first.traceGeometry;
    expect(geometry).toBeDefined();
    expect(geometry.surfaces).toBe(first.surfaces);
    expect(geometry.z).toBe(first.z);
    expect(geometry.imagePlane).toBe(first.imagePlane);
    expect(geometry.pathPlan).toBe(engine.opticalPath);
    expect(geometry.stopSurfaceIndex).toBe(engine.stop.surfaceIndex);
    expect(Object.isFrozen(geometry)).toBe(true);
    expect(Object.isFrozen(geometry.traversal)).toBe(true);
    expect(prepareState(engine, 0, 0, 0, { cache }).traceGeometry).toBe(geometry);
    for (const controls of [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 0.5],
    ]) {
      expect(prepareState(engine, controls[0], controls[1], controls[2], { cache }).traceGeometry).not.toBe(geometry);
    }
    expect(prepareState(engine, 0, 0).traceGeometry).not.toBe(geometry);
    const other = buildLens2(LENS_CATALOG["nikon-z-24-70f4s"]);
    expect(prepareRuntimeState(other, 0, 0).traceGeometry).toBe(prepareRuntimeState(runtime, 0, 0).traceGeometry);
    const independent = buildLens2(toLensData(ingestLensV1(LENS_CATALOG["nikon-z-24-70f4s"])));
    expect(independent.data.key).toBe(runtime.data.key);
    expect(prepareRuntimeState(independent, 0, 0).traceGeometry).not.toBe(
      prepareRuntimeState(runtime, 0, 0).traceGeometry,
    );
  });

  it("keeps CompiledLens parity-recoverable from ordinary buildLens runtimes", () => {
    const runtime = buildLens(LENS_CATALOG["varisoft-rokkor-85f28"]);
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
      const compiled = compileLensData(LENS_CATALOG[key]);
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
        summarizeDispersionQuality2(runtime);
        expect(dispersionTableFromRuntime2(runtime)).toBe(compiled.dispersion);
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
