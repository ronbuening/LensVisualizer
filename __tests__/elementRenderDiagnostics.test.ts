import { describe, expect, it } from "vitest";
import { computeElementRenderDiagnostics } from "../src/optics/diagramGeometry.js";
import buildLens from "../src/optics/buildLens.js";
import { doLayout, renderSag } from "../src/optics/optics.js";
import validateLensData from "../src/optics/validateLensData.js";
import { LENS_CATALOG } from "../src/utils/lensCatalog.js";

const MATERIAL_TRIM_TOLERANCE_MM = 0.25;

describe("element render diagnostics", () => {
  function maxRenderedGapOverlapMm(key: string): number {
    const L = buildLens(LENS_CATALOG[key]);
    const layout = doLayout(0, 0, L);
    const diagnostics = computeElementRenderDiagnostics(L, layout.z);
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

      const sdCheck = Math.min(rear.renderSD, front.renderSD);
      const intrusion = renderSag(sdCheck, i, L) - renderSag(sdCheck, i + 1, L);
      maxOverlap = Math.max(maxOverlap, intrusion - curr.d);
    }

    return maxOverlap;
  }

  it("has no production lens cross-gap validation failures", () => {
    const offenders = Object.entries(LENS_CATALOG).flatMap(([key, data]) =>
      validateLensData(data).map((error) => `${key}: ${error}`),
    );

    expect(offenders).toEqual([]);
  });

  it("does not hide material production-lens semi-diameter trims", () => {
    const offenders: string[] = [];

    for (const [key, data] of Object.entries(LENS_CATALOG)) {
      const L = buildLens(data);
      const layout = doLayout(0, 0, L);
      for (const diagnostic of computeElementRenderDiagnostics(L, layout.z)) {
        for (const surface of [diagnostic.front, diagnostic.rear]) {
          if (surface.trimAmount > MATERIAL_TRIM_TOLERANCE_MM) {
            offenders.push(
              `${key} L${diagnostic.eid} ${surface.surfaceLabel}: ${surface.trimAmount.toFixed(2)} mm (${surface.trimCause})`,
            );
          }
        }
      }
    }

    expect(offenders).toEqual([]);
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
      const L = buildLens(LENS_CATALOG[key]);
      const layout = doLayout(0, 0, L);
      const diagnostic = computeElementRenderDiagnostics(L, layout.z).find((candidate) => candidate.eid === elementId);

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
