import { describe, expect, it } from "vitest";
import data from "../../../src/lens-data/nikon/NikonAFS28f14E.data.js";
import defaults from "../../../src/lens-data/defaults.js";
import buildLens from "../../../src/optics/buildLens.js";
import { doLayout, anchorLayoutToCamera } from "../../../src/optics/optics.js";
import { computeElementRenderDiagnostics } from "../../../src/optics/diagramGeometry.js";
import { normalLinePgF } from "../../../src/optics/dispersion.js";
import type { LensData } from "../../../src/types/optics.js";
const L = buildLens({ ...defaults, ...data } as LensData);

describe("AF-S28E: JP2017227799 Example 1", () => {
  it("retains the compound lens layer and source-normalized partial dispersion", () => {
    expect(data.elementCount).toBe(14);
    expect(data.elements).toHaveLength(15);
    expect(data.surfaces).toHaveLength(27);
    expect(data.surfaces[3]).toMatchObject({ d: 0.05, nd: 1.5138, elemId: 3 });
    expect(data.asph["5A"].K).toBe(-1.81201);
    expect(data.asph["27A"].K).toBe(1.61294);
    expect(normalLinePgF(data.elements[10].vd, data.elements[10].dPgF)).toBeCloseTo(0.5899, 10);
    expect(data.elements[9]).not.toHaveProperty("dPgF");
    expect(data.elements[13]).not.toHaveProperty("dPgF");
    expect(L.FOPEN).toBe(1.45);
  });

  it("preserves source focus gaps and derives the near label from the object leg", () => {
    expect(data.closeFocusM).toBeCloseTo((105.61 + 144.4) / 1000, 9);
    const rays = [
      [1, 0],
      [0, 1],
    ];
    let n = 1;
    for (const s of data.surfaces) {
      const gap = data.var[s.label as keyof typeof data.var]?.[1] ?? s.d;
      for (const r of rays) {
        r[1] -= ((s.nd - n) / s.R) * r[0];
        r[0] += (gap / s.nd) * r[1];
      }
      n = s.nd;
    }
    expect(-rays[1][0] / rays[0][0]).toBeCloseTo(105.61, 1);
    const reference = doLayout(0, 0, L);
    const first = L.S.findIndex((s) => s.label === "13");
    for (const t of [0, 0.5, 1]) {
      const layout = anchorLayoutToCamera(reference, doLayout(t, 0, L));
      L.S.forEach((_, i) => expect(layout.z[i] - reference.z[i]).toBeCloseTo((i < first ? -0.02 : -6.3) * t, 8));
      for (const e of computeElementRenderDiagnostics(L, layout.z)) {
        expect(e.front.trimAmount).toBeLessThan(0.01);
        expect(e.rear.trimAmount).toBeLessThan(0.01);
      }
    }
  });

  it("reports isolated thick-element rather than thin-lens powers", () => {
    for (const e of data.elements) {
      const i = data.surfaces.findIndex((s) => s.elemId === e.id),
        a = data.surfaces[i],
        b = data.surfaces[i + 1];
      const f = 1 / ((e.nd - 1) * (1 / a.R - 1 / b.R + ((e.nd - 1) * a.d) / (e.nd * a.R * b.R)));
      expect(Math.abs(e.fl - f)).toBeLessThan(0.006);
    }
  });
});
