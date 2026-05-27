import buildLens from "../../../src/optics/buildLens.js";
import LENS_DEFAULTS from "../../../src/lens-data/defaults.js";
import type { LensData, RuntimeLens, SurfaceData, VarRange } from "../../../src/types/optics.js";

const BASE_ELEMENT = {
  id: 1,
  name: "Fixture element",
  label: "L1",
  type: "positive",
  nd: 1.5168,
  vd: 64.17,
};

function buildFixture(overrides: Partial<LensData>): RuntimeLens {
  const data = {
    ...LENS_DEFAULTS,
    key: "test-optics-fixture",
    name: "Test optics fixture",
    closeFocusM: 0.5,
    yScFill: 0.55,
    nominalFno: 2,
    fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16],
    elements: [BASE_ELEMENT],
    surfaces: simplePositiveSurfaces(),
    ...overrides,
  } as LensData;
  return buildLens(data);
}

function simplePositiveSurfaces(stopGap = 1, frontGap = 5, imageGap = 80): SurfaceData[] {
  return [
    { label: "STO", R: 1e15, nd: 1.0, sd: 15, d: stopGap, elemId: 0 },
    { label: "1", R: 50, nd: 1.5168, sd: 15, d: frontGap, elemId: 1 },
    { label: "2", R: -50, nd: 1.0, sd: 15, d: imageGap, elemId: 1 },
  ];
}

export function buildSimplePositiveElementLens(key = "test-simple-positive-element"): RuntimeLens {
  return buildFixture({ key, surfaces: simplePositiveSurfaces() });
}

export function buildChromaticPositiveElementLens(key = "test-chromatic-positive-element"): RuntimeLens {
  return buildFixture({
    key,
    elements: [{ ...BASE_ELEMENT, glass: "N-BK7" }],
    surfaces: simplePositiveSurfaces(),
  });
}

export function buildVariableStopGapLens(range: VarRange, key = "test-variable-stop-gap"): RuntimeLens {
  const surfaces = simplePositiveSurfaces(Array.isArray(range[0]) ? (range[0] as [number, number])[0] : range[0]);
  return buildFixture({
    key,
    surfaces,
    var: { STO: range },
    zoomPositions: Array.isArray(range[0]) ? [24, 50, 100] : undefined,
    nominalFno: Array.isArray(range[0]) ? [2, 2, 2] : 2,
  });
}

export function buildLayoutLens(thicknesses: readonly [number, number, number]): RuntimeLens {
  return buildFixture({
    key: "test-layout-lens",
    surfaces: [
      { label: "STO", R: 1e15, nd: 1.0, sd: 15, d: thicknesses[0], elemId: 0 },
      { label: "1", R: 100, nd: 1.5168, sd: 15, d: thicknesses[1], elemId: 1 },
      { label: "2", R: -100, nd: 1.0, sd: 15, d: thicknesses[2], elemId: 1 },
    ],
  });
}

export function buildTirLens(key = "test-tir-lens"): RuntimeLens {
  return buildFixture({
    key,
    nominalFno: 4,
    elements: [{ ...BASE_ELEMENT, nd: 2.0, vd: 20 }],
    surfaces: [
      { label: "STO", R: 1e15, nd: 1.0, sd: 20, d: 1, elemId: 0 },
      { label: "1", R: 10, nd: 2.0, sd: 8, d: 5, elemId: 1 },
      { label: "2", R: 1e15, nd: 1.0, sd: 8, d: 10, elemId: 1 },
    ],
  });
}

export function buildGhostClippingLens(key = "test-ghost-clipping-lens"): RuntimeLens {
  return buildFixture({
    key,
    nominalFno: 4,
    surfaces: [
      { label: "STO", R: 1e15, nd: 1.0, sd: 5, d: 1, elemId: 0 },
      { label: "1", R: 50, nd: 1.5, sd: 20, d: 10, elemId: 1 },
      { label: "2", R: -50, nd: 1.0, sd: 20, d: 50, elemId: 1 },
    ],
  });
}
