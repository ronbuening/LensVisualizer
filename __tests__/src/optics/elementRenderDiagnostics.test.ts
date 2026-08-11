import { describe, expect, it } from "vitest";
import { computeElementRenderDiagnostics } from "../../../src/optics/diagramGeometry.js";
import buildLens from "../../../src/optics/buildLens.js";
import { sharedMaterialBand } from "../../../src/optics/internal/apertureBands.js";
import { doLayout, renderSag } from "../../../src/optics/optics.js";
import { LENS_CATALOG } from "../../../src/utils/catalog/lensCatalog.js";
import type { RuntimeLens } from "../../../src/types/optics.js";

const MATERIAL_TRIM_TOLERANCE_MM = 0.25;
const INTENTIONAL_MATERIAL_TRIMS = new Set(["canon-s-50mm-f2-8:L2:4:gap"]);

/* Build + layout + diagnostics once per lens, shared across every test in
 * this file — several tests sweep the full catalog. */
interface CatalogDiagnostics {
  L: RuntimeLens;
  diagnostics: ReturnType<typeof computeElementRenderDiagnostics>;
}

const catalogDiagnosticsByKey = new Map<string, CatalogDiagnostics>();

function catalogDiagnostics(key: string): CatalogDiagnostics {
  let entry = catalogDiagnosticsByKey.get(key);
  if (!entry) {
    const L = buildLens(LENS_CATALOG[key]);
    const layout = doLayout(0, 0, L);
    entry = { L, diagnostics: computeElementRenderDiagnostics(L, layout.z) };
    catalogDiagnosticsByKey.set(key, entry);
  }
  return entry;
}

describe("element render diagnostics", () => {
  function maxRenderedGapOverlapMm(key: string): number {
    const { L, diagnostics } = catalogDiagnostics(key);
    const surfaceDiagnostics = new Map(
      diagnostics.flatMap((diagnostic) => [
        [diagnostic.front.surfaceIndex, diagnostic.front],
        [diagnostic.rear.surfaceIndex, diagnostic.rear],
      ]),
    );
    let maxOverlap = 0;

    for (let i = 0; i < L.N - 1; i++) {
      const curr = L.S[i];
      const next = L.S[i + 1];
      if (curr.nd !== 1.0 || curr.elemId !== 0 || next.elemId === 0) continue;
      const rear = surfaceDiagnostics.get(i);
      const front = surfaceDiagnostics.get(i + 1);
      if (!rear || !front) continue;

      const sharedBand = sharedMaterialBand(
        { sd: rear.renderSD, innerSd: curr.innerSd },
        { sd: front.renderSD, innerSd: next.innerSd },
      );
      if (!sharedBand) continue;

      const intrusion = renderSag(sharedBand.outer, i, L) - renderSag(sharedBand.outer, i + 1, L);
      maxOverlap = Math.max(maxOverlap, intrusion - curr.d);
    }

    return maxOverlap;
  }

  /* The full-catalog validateLensData sweep lives in validateLensData.test.ts
   * ("every catalog lens passes validation with no errors"). */

  it("does not hide material production-lens semi-diameter trims", () => {
    const offenders: string[] = [];

    for (const key of Object.keys(LENS_CATALOG)) {
      const { diagnostics } = catalogDiagnostics(key);
      for (const diagnostic of diagnostics) {
        for (const surface of [diagnostic.front, diagnostic.rear]) {
          const trimKey = `${key}:L${diagnostic.eid}:${surface.surfaceLabel}:${surface.trimCause}`;
          if (surface.trimAmount > MATERIAL_TRIM_TOLERANCE_MM && !INTENTIONAL_MATERIAL_TRIMS.has(trimKey)) {
            offenders.push(
              `${key} L${diagnostic.eid} ${surface.surfaceLabel}: ${surface.trimAmount.toFixed(2)} mm (${surface.trimCause})`,
            );
          }
        }
      }
    }

    expect(offenders).toEqual([]);
  });

  it("documents the Canon 50mm f/2.8 patent-silhouette trim", () => {
    const diagnostic = catalogDiagnostics("canon-s-50mm-f2-8").diagnostics.find((candidate) => candidate.eid === 2);

    expect(diagnostic).toBeDefined();
    expect(diagnostic!.rear.surfaceLabel).toBe("4");
    expect(diagnostic!.rear.trimCause).toBe("gap");
    expect(diagnostic!.rear.trimAmount).toBeGreaterThan(1.68);
    expect(diagnostic!.rear.trimAmount).toBeLessThan(1.7);
  });

  it("does not leave rendered cross-gap collisions in production lenses", () => {
    const offenders: string[] = [];

    for (const key of Object.keys(LENS_CATALOG)) {
      const overlap = maxRenderedGapOverlapMm(key);
      if (overlap > 1e-6) offenders.push(`${key}: ${overlap.toFixed(6)} mm`);
    }

    expect(offenders).toEqual([]);
  });

  it("keeps the Canon New FD 50mm f/1.2 and Nokton 50mm f/1.0 L2 outlines untrimmed", () => {
    const cases = [
      ["canon-fdn-50f12", 2],
      ["nokton-50f1", 2],
    ] as const;

    for (const [key, elementId] of cases) {
      const diagnostic = catalogDiagnostics(key).diagnostics.find((candidate) => candidate.eid === elementId);

      expect(diagnostic, `${key} L${elementId}`).toBeDefined();
      expect(Math.max(diagnostic!.front.trimAmount, diagnostic!.rear.trimAmount)).toBeLessThanOrEqual(
        MATERIAL_TRIM_TOLERANCE_MM,
      );
    }
  });

  it("does not leave rendered cross-gap collisions in the reported problem lenses", () => {
    const cases = ["canon-rf-28-70-f28-is-stm", "nikkor-z-28f28", "nikkor-28f14d", "canon-fdn-50f12", "nokton-50f1"];

    for (const key of cases) {
      expect(maxRenderedGapOverlapMm(key), key).toBeLessThanOrEqual(1e-6);
    }
  });
});
