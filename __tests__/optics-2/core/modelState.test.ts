import { describe, expect, it } from "vitest";
import buildLens from "../../../src/optics/buildLens.js";
import { doLayout, thick } from "../../../src/optics/optics.js";
import { buildLens2, engineLensFromRuntime, prepareLegacyState } from "../../../src/optics-2/compat.js";
import { compileSurfaceDispersions } from "../../../src/optics-2/prescription/dispersion.js";
import { normalizeLensData } from "../../../src/optics-2/prescription/normalizeLensData.js";
import { createPreparedStateCache } from "../../../src/optics-2/state/cache.js";
import { prepareState } from "../../../src/optics-2/state/prepareState.js";
import { evaluateSellmeier, LINE_NM, resolveGlass } from "../../../src/optics/glassCatalog.js";
import type { ElementData, SurfaceData, SurfaceSpectral } from "../../../src/types/optics.js";
import { ALL_CATALOG_KEYS, LENS_CATALOG } from "../../../src/utils/catalog/lensCatalog.js";
import { OPTICS_2_PARITY_FIXTURES, REQUIRED_FOLDED_REFERENCE_KEYS } from "../parity/parityFixtures.js";

function expectClose(actual: number, expected: number, tolerance = 1e-10): void {
  expect(Math.abs(actual - expected)).toBeLessThanOrEqual(tolerance);
}

describe("Optics 2 LensData normalization and compatibility", () => {
  it("builds every visible and hidden catalog lens through buildLens2", () => {
    for (const key of ALL_CATALOG_KEYS) {
      const runtime = buildLens2(LENS_CATALOG[key]);
      const engine = engineLensFromRuntime(runtime);
      expect(runtime.data.key).toBe(key);
      expect(engine.key).toBe(key);
      expect(engine.surfaces).toHaveLength(runtime.N);
      expect(engine.elements).toHaveLength(runtime.elements.length);
      expect(engine.runtime).toBe(runtime);
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
  });

  it("can normalize directly from LensData without mutating lens data surfaces", () => {
    const original = structuredClone(LENS_CATALOG["nikkor-z-50f18s"]);
    const engine = normalizeLensData(original);
    expect(engine.key).toBe(original.key);
    expect(original.surfaces).toEqual(LENS_CATALOG["nikkor-z-50f18s"].surfaces);
  });
});

describe("Optics 2 dispersion descriptors", () => {
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

describe("Optics 2 prepared state", () => {
  it("matches doLayout, thick, z positions, and image plane through compatibility wrappers", () => {
    for (const fixture of OPTICS_2_PARITY_FIXTURES) {
      const runtime = buildLens2(LENS_CATALOG[fixture.key]);
      for (const sliderState of fixture.states) {
        const aberrationT = sliderState.aberrationT ?? 0;
        const legacyLayout = doLayout(sliderState.focusT, sliderState.zoomT, runtime, aberrationT);
        const prepared = prepareLegacyState(runtime, sliderState.focusT, sliderState.zoomT, aberrationT);

        expect(prepared.z).toEqual(legacyLayout.z);
        expect(prepared.imgZ).toBe(legacyLayout.imgZ);
        for (let i = 0; i < runtime.N; i++) {
          expect(prepared.surfaces[i].d).toBe(thick(i, sliderState.focusT, sliderState.zoomT, runtime, aberrationT));
          expect(prepared.surfaces[i].z).toBe(legacyLayout.z[i]);
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

  it("keeps EngineLens parity-recoverable from ordinary buildLens runtimes", () => {
    const runtime = buildLens(LENS_CATALOG["varisoft-rokkor-85f28"]);
    const engine = engineLensFromRuntime(runtime);
    expect(engine.aberrationControl?.label).toBe(runtime.aberrationControl?.label);
    expect(engine.surfaces.map((surface) => surface.label)).toEqual(runtime.S.map((surface) => surface.label));
  });
});
