import { describe, expect, it } from "vitest";
import LENS_DEFAULTS from "../../../../src/lens-data/defaults.js";
import { sharedMaterialBand } from "../../../../src/optics/internal/apertureBands.js";
import buildLens from "../../../../src/optics/buildLens.js";
import { doLayout, renderSag } from "../../../../src/optics/optics.js";
import validateLensData from "../../../../src/optics/validateLensData.js";
import type { LensData } from "../../../../src/types/optics.js";

const SIGMA_MODULES = import.meta.glob<{ default: LensData }>("../../../../src/lens-data/sigma/*.data.ts", {
  eager: true,
});

function stateValues(data: LensData): { focus: number[]; zoom: number[] } {
  return {
    focus: data.var ? [0, 0.5, 1] : [0],
    zoom: Array.isArray(data.zoomPositions) && data.zoomPositions.length > 1 ? [0, 0.5, 1] : [0],
  };
}

function elementSpan(data: LensData, elemId: number): [number, number] | null {
  const element = data.elements.find((candidate) => candidate.id === elemId);
  if (element?.fromSurface && element.toSurface) {
    const from = data.surfaces.findIndex((surface) => surface.label === element.fromSurface);
    const to = data.surfaces.findIndex((surface) => surface.label === element.toSurface);
    return from >= 0 && to > from ? [from, to] : null;
  }

  const from = data.surfaces.findIndex((surface) => surface.elemId === elemId);
  return from >= 0 && from + 1 < data.surfaces.length ? [from, from + 1] : null;
}

describe("Sigma semi-diameter geometry", () => {
  it("keeps authored SDs free of raw self-crossings and near-overlap gaps", () => {
    const offenders: string[] = [];

    for (const [modulePath, mod] of Object.entries(SIGMA_MODULES)) {
      const data = { ...LENS_DEFAULTS, ...mod.default } as LensData;
      const L = buildLens(data);
      const { focus, zoom } = stateValues(data);
      const prefix = `${modulePath.replace("../../../../src/lens-data/sigma/", "")}: ${data.name}`;

      offenders.push(...validateLensData(data).map((error) => `${prefix}: ${error}`));

      for (const focusT of focus) {
        for (const zoomT of zoom) {
          const layout = doLayout(focusT, zoomT, L);

          for (const element of data.elements) {
            const span = elementSpan(data, element.id);
            if (!span) continue;

            const [frontIdx, rearIdx] = span;
            const front = L.S[frontIdx];
            const rear = L.S[rearIdx];
            const h = Math.max(front.sd, rear.sd);
            const thickness =
              layout.z[rearIdx] + renderSag(h, rearIdx, L) - (layout.z[frontIdx] + renderSag(h, frontIdx, L));
            if (thickness <= 0) {
              offenders.push(
                `${prefix} focus=${focusT} zoom=${zoomT}: L${element.id} ${front.label}/${rear.label} raw extended thickness ${thickness.toFixed(3)} mm at h=${h.toFixed(3)}`,
              );
            }
          }

          for (let i = 0; i < L.N - 1; i++) {
            const curr = L.S[i];
            const next = L.S[i + 1];
            if (curr.nd !== 1.0 || curr.elemId !== 0 || next.elemId === 0) continue;

            const band = sharedMaterialBand(curr, next);
            if (!band) continue;

            const gap = layout.z[i + 1] - layout.z[i];
            const intrusion = renderSag(band.outer, i, L) - renderSag(band.outer, i + 1, L);
            if (intrusion > gap * 0.9) {
              offenders.push(
                `${prefix} focus=${focusT} zoom=${zoomT}: ${curr.label}->${next.label} raw sag intrusion ${intrusion.toFixed(3)} mm exceeds 90% of gap ${gap.toFixed(3)} mm at sd=${band.outer.toFixed(3)}`,
              );
            }
          }
        }
      }
    }

    expect(offenders).toEqual([]);
  });
});
