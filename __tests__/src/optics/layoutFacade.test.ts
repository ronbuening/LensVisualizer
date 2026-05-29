import { describe, expect, it } from "vitest";
import {
  doLayout,
  effectiveFNumber,
  eflAtFocus,
  eflAtZoom,
  renderSag,
  sagSlope,
  slopeTrimHeight,
  xpAtZoom,
  xpZRelLastSurfAtZoom,
} from "../../../src/optics/layout.js";
import type { RuntimeLens } from "../../../src/types/optics.js";
import { buildSimplePositiveElementLens } from "./testLensFixtures.js";

describe("layout facade edge cases", () => {
  it("trims display height until the rim slope is within the configured tangent", () => {
    const L = {
      S: [{ label: "1", R: 10, d: 1, nd: 1.5, sd: 9, elemId: 1 }],
      asphByIdx: {},
    } as unknown as RuntimeLens;

    expect(slopeTrimHeight(0, 9, 0, L)).toBe(9);

    const trimmed = slopeTrimHeight(0, 9, 0.25, L);
    expect(trimmed).toBeLessThan(9);
    expect(Math.abs(sagSlope(trimmed, 0, L))).toBeLessThanOrEqual(0.250001);
  });

  it("uses the explicit folded image plane instead of the sequential back focal gap", () => {
    const base = buildSimplePositiveElementLens("test-layout-folded-image-plane");
    const folded = {
      ...base,
      isFoldedOptics: true,
      imagePlane: { z: 123.5, y: 0, normal: { z: 1, y: 0 }, label: "folded image" },
    } as RuntimeLens;

    const layout = doLayout(0, 0, folded);
    expect(layout.imgZ).toBe(123.5);
    expect(layout.z).toHaveLength(base.N);
  });

  it("handles single-entry zoom arrays and non-finite exit pupil data defensively", () => {
    const L = {
      isZoom: true,
      EFL: 50,
      zoomEFLs: [35],
      zoomXpSDs: [Infinity, 12],
      zoomXpZRelLastSurfs: [8, Infinity],
    } as unknown as RuntimeLens;

    expect(eflAtZoom(0, L)).toBe(35);
    expect(eflAtZoom(1, L)).toBe(35);
    expect(xpAtZoom(0.5, L)).toBe(Infinity);
    expect(xpZRelLastSurfAtZoom(0.5, L)).toBe(Infinity);
  });

  it("falls back to the catalog EFL when paraxial power is effectively zero", () => {
    const L = {
      isZoom: false,
      EFL: 75,
      S: [
        { label: "1", R: 1e15, d: 5, nd: 1, sd: 10, elemId: 1 },
        { label: "2", R: 1e15, d: 50, nd: 1, sd: 10, elemId: 1 },
      ],
      varByIdx: {},
      aberrationControl: null,
    } as unknown as RuntimeLens;

    expect(eflAtFocus(0.5, 0, L)).toBe(75);
  });

  it("returns the marked f-number when the close-focus denominator collapses", () => {
    const L = {
      isZoom: false,
      EFL: 500,
      closeFocusM: 0.5,
      S: [
        { label: "1", R: 1e15, d: 5, nd: 1, sd: 10, elemId: 1 },
        { label: "2", R: 1e15, d: 50, nd: 1, sd: 10, elemId: 1 },
      ],
      varByIdx: {},
      aberrationControl: null,
    } as unknown as RuntimeLens;

    expect(effectiveFNumber(2.8, 1, 0, L)).toBe(2.8);
  });

  it("keeps effective f-number finite when pupil magnification inputs are degenerate", () => {
    const base = buildSimplePositiveElementLens("test-layout-degenerate-pupils");
    const L = {
      ...base,
      EP: { ...base.EP, epSD: 0 },
      xpSD: 0,
    } as RuntimeLens;

    const value = effectiveFNumber(2, 1, 0, L);
    expect(Number.isFinite(value)).toBe(true);
    expect(value).toBeGreaterThan(2);
  });

  it("computes spherical and aspheric sag through the render helpers", () => {
    const spherical = {
      S: [{ label: "1", R: 50, d: 1, nd: 1.5, sd: 10, elemId: 1 }],
      asphByIdx: {},
    } as unknown as RuntimeLens;
    const aspheric = {
      ...spherical,
      asphByIdx: { 0: { K: -0.5, A4: 1e-6, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 } },
    } as unknown as RuntimeLens;

    expect(renderSag(5, 0, spherical)).not.toBeCloseTo(renderSag(5, 0, aspheric), 8);
    expect(Number.isFinite(sagSlope(5, 0, aspheric))).toBe(true);
  });
});
