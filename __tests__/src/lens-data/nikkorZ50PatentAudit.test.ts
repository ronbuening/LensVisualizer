import { describe, expect, it } from "vitest";
import data from "../../../src/lens-data/nikon/NikonNikkorZ50f18S.data.js";
import defaults from "../../../src/lens-data/defaults.js";
import buildLens from "../../../src/optics/buildLens.js";
import { anchorLayoutToCamera, doLayout } from "../../../src/optics/optics.js";
import { computeElementRenderDiagnostics } from "../../../src/optics/diagramGeometry.js";
import type { LensData } from "../../../src/types/optics.js";

const L = buildLens({ ...defaults, ...data } as LensData);

describe("NIKKOR Z 50: WO2019220618A1 Table 9", () => {
  it("preserves the thin aspherical layer's published dispersion", () => {
    const index = L.S.findIndex((s) => s.label === "6A");
    const { fn } = L.indexByIdx[index];
    expect(L.S[index].elemId).toBe(13);
    expect((1.56093 - 1) / (fn("B") - fn("R"))).toBeCloseTo(36.6, 6);
    expect(data.elements.find((e) => e.id === 13)?.vd).toBe(36.6);
  });

  it("preserves the finite object leg and actual stop-to-group gap", () => {
    const reference = doLayout(0, 0, L);
    expect(data.closeFocusM * 1000 - reference.imgZ).toBeCloseTo(307.67, 7);
    expect(data.var.STO).toEqual([13.02, 5.109]);
    for (const focusT of [0.5, 1]) {
      const current = anchorLayoutToCamera(reference, doLayout(focusT, 0, L));
      L.S.forEach((s, i) => {
        const moving = ["14", "15", "16A", "17A", "18", "19"].includes(s.label);
        expect(current.z[i] - reference.z[i], s.label).toBeCloseTo(moving ? -7.911 * focusT : 0, 8);
      });
    }
  });

  it("renders all modeled media without hidden profile trimming", () => {
    for (const focusT of [0, 0.5, 1]) {
      const elements = computeElementRenderDiagnostics(L, doLayout(focusT, 0, L).z);
      expect(elements).toHaveLength(13);
      elements.forEach((e) => {
        expect(e.front.trimAmount).toBeLessThan(0.25);
        expect(e.rear.trimAmount).toBeLessThan(0.25);
      });
    }
  });
});
