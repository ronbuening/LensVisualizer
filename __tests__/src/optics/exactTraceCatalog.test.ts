import { describe, expect, it } from "vitest";
import LENS_DEFAULTS from "../../../src/lens-data/defaults.js";
import Sonnar50f15Raw from "../../../src/lens-data/carl-zeiss-jena/ZeissSonnar50f15.data.js";
import buildLens from "../../../src/optics/buildLens.js";
import {
  EXACT_SURFACE_TRACE_LENS_KEYS,
  doLayout,
  epAtZoom,
  resolveSurfaceTraceMode,
  traceRay,
  traceSkewRay,
} from "../../../src/optics/optics.js";
import type { LensData, RuntimeLens } from "../../../src/types/optics.js";
import { CATALOG_KEYS, LENS_CATALOG } from "../../../src/utils/lensCatalog.js";

const REPRESENTATIVE_KEYS = [
  "apo-lanthar-50f2",
  "nokton-50f1",
  "canon-rf-15-35-f28",
  "nikkor-z-70-200f28",
  "sony-fe-90mm-f2p8-macro",
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

function expectFiniteTraceResult(result: { x?: number; y: number; u?: number; ux?: number; uy?: number }) {
  expect(isFinite(result.y)).toBe(true);
  if (result.x !== undefined) expect(isFinite(result.x)).toBe(true);
  if (result.u !== undefined) expect(isFinite(result.u)).toBe(true);
  if (result.ux !== undefined) expect(isFinite(result.ux)).toBe(true);
  if (result.uy !== undefined) expect(isFinite(result.uy)).toBe(true);
}

function timeRepresentativeTraceBatch(mode: "legacy" | "exact"): number {
  const startedAt = Date.now();
  for (const key of REPRESENTATIVE_KEYS) {
    const L = buildCatalogLens(key);
    for (const zoomT of zoomSamples(L)) {
      const layout = doLayout(0, zoomT, L);
      const h = safeNearAxisHeight(L, zoomT);
      traceRay(h, 0, layout.z, 0, zoomT, L.stopPhysSD, true, L, 0, { mode });
      traceSkewRay(0, h, 0, 0, 0, zoomT, L.stopPhysSD, true, L, 0, { mode });
    }
  }
  return Date.now() - startedAt;
}

describe("exact surface trace catalog smoke coverage", () => {
  it.each(REPRESENTATIVE_KEYS)("keeps default rollout equivalent to resolved rollout mode for %s", (key) => {
    const L = buildCatalogLens(key);
    const zoomT = L.isZoom ? 0.5 : 0;
    const layout = doLayout(0, zoomT, L);
    const h = safeNearAxisHeight(L, zoomT);
    const mode = resolveSurfaceTraceMode(L);

    expect(traceRay(h, 0, layout.z, 0, zoomT, L.stopPhysSD, true, L)).toEqual(
      traceRay(h, 0, layout.z, 0, zoomT, L.stopPhysSD, true, L, 0, { mode }),
    );
    expect(traceSkewRay(0, h, 0, 0, 0, zoomT, L.stopPhysSD, true, L)).toEqual(
      traceSkewRay(0, h, 0, 0, 0, zoomT, L.stopPhysSD, true, L, 0, { mode }),
    );
  });

  it("traces finite on-axis and safe near-axis exact rays for allowlisted lenses", () => {
    for (const key of EXACT_SURFACE_TRACE_LENS_KEYS) {
      const L = buildCatalogLens(key);
      for (const zoomT of zoomSamples(L)) {
        const layout = doLayout(0, zoomT, L);
        const h = safeNearAxisHeight(L, zoomT);
        const traces = [
          traceRay(0, 0, layout.z, 0, zoomT, L.stopPhysSD, true, L, 0, { mode: "exact" }),
          traceRay(h, 0, layout.z, 0, zoomT, L.stopPhysSD, true, L, 0, { mode: "exact" }),
          traceSkewRay(0, 0, 0, 0, 0, zoomT, L.stopPhysSD, true, L, 0, { mode: "exact" }),
          traceSkewRay(0, h, 0, 0, 0, zoomT, L.stopPhysSD, true, L, 0, { mode: "exact" }),
        ];

        for (const trace of traces) {
          expect(trace.clipped, `${key} zoomT=${zoomT}`).toBe(false);
          expectFiniteTraceResult(trace);
        }
      }
    }
  });

  it("traces finite on-axis exact rays across every visible catalog lens", () => {
    expect(CATALOG_KEYS.length).toBeGreaterThan(0);

    for (const key of CATALOG_KEYS) {
      const L = buildCatalogLens(key);
      for (const zoomT of zoomSamples(L)) {
        const layout = doLayout(0, zoomT, L);
        const meridional = traceRay(0, 0, layout.z, 0, zoomT, L.stopPhysSD, true, L, 0, { mode: "exact" });
        const skew = traceSkewRay(0, 0, 0, 0, 0, zoomT, L.stopPhysSD, true, L, 0, { mode: "exact" });

        expect(meridional.clipped, `${key} zoomT=${zoomT} meridional`).toBe(false);
        expect(skew.clipped, `${key} zoomT=${zoomT} skew`).toBe(false);
        expectFiniteTraceResult(meridional);
        expectFiniteTraceResult(skew);
      }
    }
  });

  it("reports a well-formed exact trace for the Sonnar steep-surface diagnostic case", () => {
    const L = buildLens({ ...LENS_DEFAULTS, ...Sonnar50f15Raw } as LensData);
    const { z: zPos } = doLayout(0, 0, L);
    const result = traceRay(0.5 * L.EP.epSD, 0, zPos, 0, 0, L.stopPhysSD, true, L, 0, { mode: "exact" });

    expect(typeof result.clipped).toBe("boolean");
    expect(result.pts.length + result.ghostPts.length).toBeGreaterThan(0);
    expectFiniteTraceResult(result);
  });

  it("collects non-threshold legacy/exact timing samples for representative traces", () => {
    const legacyMs = timeRepresentativeTraceBatch("legacy");
    const exactMs = timeRepresentativeTraceBatch("exact");

    expect(isFinite(legacyMs)).toBe(true);
    expect(isFinite(exactMs)).toBe(true);
    expect(legacyMs).toBeGreaterThanOrEqual(0);
    expect(exactMs).toBeGreaterThanOrEqual(0);
  });
});
