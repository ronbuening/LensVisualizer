import { describe, expect, it } from "vitest";
import buildLens from "../../../src/optics/buildLens.js";
import { doLayout, renderSag, sagSlope, thick } from "../../../src/optics/optics.js";
import { LENS_CATALOG } from "../../../src/utils/catalog/lensCatalog.js";
import { OPTICS_2_PARITY_FIXTURES } from "./parityFixtures.js";
import { OPTICS_2_PARITY_TOLERANCES } from "./tolerances.js";

function expectFiniteNumber(value: number, label: string): void {
  expect(Number.isFinite(value), label).toBe(true);
}

describe("Optics 2 layout parity scaffold", () => {
  it("exercises current doLayout/thick over the parity fixture state matrix", () => {
    for (const fixture of OPTICS_2_PARITY_FIXTURES) {
      const lens = buildLens(LENS_CATALOG[fixture.key]);
      for (const state of fixture.states) {
        const aberrationT = state.aberrationT ?? 0;
        const layout = doLayout(state.focusT, state.zoomT, lens, aberrationT);

        expect(layout.z, `${fixture.key} ${state.id} z`).toHaveLength(lens.N);
        expect(layout.th, `${fixture.key} ${state.id} th`).toHaveLength(lens.N);
        expectFiniteNumber(layout.imgZ, `${fixture.key} ${state.id} imgZ`);
        for (let i = 0; i < lens.N; i++) {
          expect(layout.th[i]).toBe(thick(i, state.focusT, state.zoomT, lens, aberrationT));
          expectFiniteNumber(layout.z[i], `${fixture.key} ${state.id} z[${i}]`);
        }
      }
    }
  });

  it("captures current surface sag and slope boundaries through named tolerances", () => {
    const lens = buildLens(LENS_CATALOG["nikkor-z-50f18s"]);
    const firstRenderableSurface = lens.S.findIndex((surface) => surface.sd > 0 && Math.abs(surface.R) < 1e14);
    expect(firstRenderableSurface).toBeGreaterThanOrEqual(0);

    const height = lens.S[firstRenderableSurface].sd * 0.5;
    expectFiniteNumber(renderSag(height, firstRenderableSurface, lens), "renderSag");
    expectFiniteNumber(sagSlope(height, firstRenderableSurface, lens), "sagSlope");
    expect(OPTICS_2_PARITY_TOLERANCES.surface.sag.abs).toBeLessThanOrEqual(1e-8);
    expect(OPTICS_2_PARITY_TOLERANCES.surface.slope.abs).toBeLessThanOrEqual(1e-8);
  });

  it.skip("compares doLayout against missing doLayout2 from src/optics-2/layout", () => {});

  it.skip("compares sag, slope, and normals against missing surface math exports from src/optics-2/surfaces", () => {});
});
