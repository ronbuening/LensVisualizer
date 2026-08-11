import { describe, expect, it } from "vitest";
import LENS_DEFAULTS from "../../../src/lens-data/defaults.js";
import Sonnar50f15Raw from "../../../src/lens-data/carl-zeiss-jena/ZeissSonnar50f15.data.js";
import buildLens from "../../../src/optics/buildLens.js";
import { doLayout, epAtZoom, traceRay, traceSkewRay } from "../../../src/optics/optics.js";
import { obstructionAwareRayFractionsForDensity } from "../../../src/optics/raySampling.js";

/**
 * Historical exact-trace fixtures — the first three lenses validated when the
 * exact tracer landed. The full-catalog smoke test below traces an extra safe
 * near-axis ray for these keys on top of the representative rays.
 */
const EXACT_TRACE_FIXTURE_KEYS = ["apo-lanthar-50f2", "nokton-50f1", "sonnar-50f15"] as const;
import type { LensData, RuntimeLens } from "../../../src/types/optics.js";
import { ALL_CATALOG_KEYS, CATALOG_KEYS, LENS_CATALOG } from "../../../src/utils/catalog/lensCatalog.js";

const HIDDEN_FOLDED_TRACE_CASES = [
  {
    key: "reference-spherical-primary-mirror",
    y0: 5,
    expectedHitLabels: ["STO", "M1"],
  },
  {
    // Diffractive phase surface ahead of a fold; detailed assertions live in
    // foldedDiffractiveTrace.test.ts.
    key: "reference-folded-diffractive-plate",
    y0: 8,
    expectedHitLabels: ["STO", "PF", "FOLD"],
  },
  {
    key: "reference-annular-obscured-mirror",
    y0: 12,
    expectedHitLabels: ["STO", "M1"],
  },
  {
    key: "reference-mangin-second-surface-mirror",
    y0: 4,
    expectedHitLabels: ["STO", "MG1", "MG2", "MG1"],
  },
  {
    key: "reference-newtonian-side-focus",
    y0: 12,
    expectedHitLabels: ["M1", "SEC"],
  },
  {
    key: "reference-cassegrain-back-focus",
    y0: 12,
    expectedHitLabels: ["M1", "SEC"],
  },
  {
    key: "reference-maksutov-cassegrain-meniscus",
    y0: 12,
    expectedHitLabels: ["MEN1", "MEN2", "M1", "SEC"],
  },
  {
    key: "reference-gregorian-secondary",
    y0: 12,
    expectedHitLabels: ["M1", "SEC"],
  },
  {
    key: "reference-annular-ring-blocker",
    y0: 0,
    expectedHitLabels: [],
  },
] as const;

function buildCatalogLens(key: string): RuntimeLens {
  return buildLens({ ...LENS_DEFAULTS, ...LENS_CATALOG[key] } as LensData);
}

function zoomSamples(L: RuntimeLens): number[] {
  return L.isZoom ? [0, 1] : [0];
}

function safeNearAxisHeight(L: RuntimeLens, zoomT: number): number {
  const ep = epAtZoom(zoomT, L);
  return Math.min(Math.max(ep * 0.05, 0.01), Math.max(L.stopPhysSD * 0.2, 0.01));
}

function catalogSmokeTraceHeight(L: RuntimeLens, zoomT: number): number {
  if (!L.isFoldedOptics) return 0;
  const ep = epAtZoom(zoomT, L);
  const samples = obstructionAwareRayFractionsForDensity(L, L.rayFractions, "normal", ep);
  const sample = samples.find((fraction) => Math.abs(fraction) > 1e-12) ?? 0;
  return sample * ep;
}

function expectFiniteTraceResult(result: { x?: number; y: number; u?: number; ux?: number; uy?: number }) {
  expect(isFinite(result.y)).toBe(true);
  if (result.x !== undefined) expect(isFinite(result.x)).toBe(true);
  if (result.u !== undefined) expect(isFinite(result.u)).toBe(true);
  if (result.ux !== undefined) expect(isFinite(result.ux)).toBe(true);
  if (result.uy !== undefined) expect(isFinite(result.uy)).toBe(true);
}

describe("exact surface trace catalog smoke coverage", () => {
  it("traces finite representative exact rays across every visible catalog lens", () => {
    expect(CATALOG_KEYS.length).toBeGreaterThan(0);

    for (const key of CATALOG_KEYS) {
      const L = buildCatalogLens(key);
      for (const zoomT of zoomSamples(L)) {
        const layout = doLayout(0, zoomT, L);
        const y0 = catalogSmokeTraceHeight(L, zoomT);
        const meridional = traceRay(y0, 0, layout.z, 0, zoomT, L.stopPhysSD, true, L);
        const skew = traceSkewRay(0, y0, 0, 0, 0, zoomT, L.stopPhysSD, true, L);

        expect(meridional.clipped, `${key} zoomT=${zoomT} meridional`).toBe(false);
        expect(skew.clipped, `${key} zoomT=${zoomT} skew`).toBe(false);
        expectFiniteTraceResult(meridional);
        expectFiniteTraceResult(skew);

        /* The historical exact-trace fixture set (the first lenses validated
         * when the exact tracer landed) also smokes a safe near-axis height
         * on top of the representative rays above. */
        if ((EXACT_TRACE_FIXTURE_KEYS as readonly string[]).includes(key)) {
          const h = safeNearAxisHeight(L, zoomT);
          const fixtureTraces = [
            traceRay(h, 0, layout.z, 0, zoomT, L.stopPhysSD, true, L),
            traceSkewRay(0, h, 0, 0, 0, zoomT, L.stopPhysSD, true, L),
          ];
          for (const trace of fixtureTraces) {
            expect(trace.clipped, `${key} zoomT=${zoomT} near-axis`).toBe(false);
            expectFiniteTraceResult(trace);
          }
        }
      }
    }
  });

  it("traces hidden optical-configuration members the visible smoke loop skips", () => {
    /**
     * A switchable variant such as the TC-IN prescription is built at import
     * time but never appears in CATALOG_KEYS, so the loop above never traced
     * it — the 59-surface converter path had no CI coverage at all.
     */
    const hiddenConfigurationKeys = ALL_CATALOG_KEYS.filter(
      (key) => LENS_CATALOG[key].visible === false && LENS_CATALOG[key].opticalConfiguration !== undefined,
    );
    expect(hiddenConfigurationKeys.length, "expected at least one hidden configuration variant").toBeGreaterThan(0);

    for (const key of hiddenConfigurationKeys) {
      expect(CATALOG_KEYS, key).not.toContain(key);

      const L = buildCatalogLens(key);
      for (const zoomT of zoomSamples(L)) {
        const layout = doLayout(0, zoomT, L);
        const y0 = catalogSmokeTraceHeight(L, zoomT);
        const meridional = traceRay(y0, 0, layout.z, 0, zoomT, L.stopPhysSD, true, L);
        const skew = traceSkewRay(0, y0, 0, 0, 0, zoomT, L.stopPhysSD, true, L);

        expect(meridional.clipped, `${key} zoomT=${zoomT} meridional`).toBe(false);
        expect(skew.clipped, `${key} zoomT=${zoomT} skew`).toBe(false);
        expectFiniteTraceResult(meridional);
        expectFiniteTraceResult(skew);
      }
    }
  });

  it("keeps hidden folded reference fixtures covered outside the public catalog smoke test", () => {
    for (const { key, y0, expectedHitLabels } of HIDDEN_FOLDED_TRACE_CASES) {
      expect(LENS_CATALOG[key]?.visible, key).toBe(false);
      expect(CATALOG_KEYS, key).not.toContain(key);

      const L = buildCatalogLens(key);
      const layout = doLayout(0, 0, L);
      const trace = traceRay(y0, 0, layout.z, 0, 0, L.stopPhysSD, true, L);

      expect(trace.clipped, key).toBe(false);
      expect(trace.reachedImagePlane, key).toBe(true);
      expect(trace.diagnostics?.hitSurfaceLabels, key).toEqual(expectedHitLabels);
      expect(trace.diagnostics?.finalMedium, key).toBeCloseTo(1, 12);
      expectFiniteTraceResult(trace);
    }
  });

  it("reports a well-formed exact trace for the Sonnar steep-surface diagnostic case", () => {
    const L = buildLens({ ...LENS_DEFAULTS, ...Sonnar50f15Raw } as LensData);
    const { z: zPos } = doLayout(0, 0, L);
    const result = traceRay(0.5 * L.EP.epSD, 0, zPos, 0, 0, L.stopPhysSD, true, L);

    expect(typeof result.clipped).toBe("boolean");
    expect(result.pts.length + result.ghostPts.length).toBeGreaterThan(0);
    expectFiniteTraceResult(result);
  });
});
