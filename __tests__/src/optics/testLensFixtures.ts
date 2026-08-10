import buildLens from "../../../src/optics/buildLens.js";
import { epAtZoom, fopenAtZoom } from "../../../src/optics/optics.js";
import LENS_DEFAULTS from "../../../src/lens-data/defaults.js";
import ApoLantharRaw from "../../../src/lens-data/voigtlander/VoigtlanderApoLanthar50f2.data.js";
import Nikkor105Raw from "../../../src/lens-data/nikon/NikonNikkor105f14E.data.js";
import NikkorRaw from "../../../src/lens-data/nikon/NikonNikkorZ50f18S.data.js";
import NikkorZ70200Raw from "../../../src/lens-data/nikon/NikonNikkorZ70200f28.data.js";
import NoktonRaw from "../../../src/lens-data/voigtlander/VoigtlanderNokton50f1.data.js";
import Sonnar50f15Raw from "../../../src/lens-data/carl-zeiss-jena/ZeissSonnar50f15.data.js";
import type { LensData, RuntimeLens, SurfaceData, VarRange } from "../../../src/types/optics.js";

/** Merge project defaults and build — the canonical test-side `buildLens` wrapper. */
export function build(raw: object): RuntimeLens {
  return buildLens({ ...LENS_DEFAULTS, ...raw } as LensData);
}

/**
 * Current physical stop and entrance-pupil semi-diameters at a zoom/stop-down
 * position — the slider math analysis helpers expect, shared by the analysis
 * test files.
 */
export function apertureAt(
  L: RuntimeLens,
  zoomT: number,
  stopdownT = 0,
): { currentPhysStopSD: number; currentEPSD: number } {
  const currentFOPEN = fopenAtZoom(zoomT, L);
  const rawFNumber = L.FOPEN * Math.pow(L.maxFstop / L.FOPEN, stopdownT);
  const fNumber = Math.max(rawFNumber, currentFOPEN);
  return {
    currentPhysStopSD: (L.stopPhysSD * L.FOPEN) / fNumber,
    currentEPSD: (epAtZoom(zoomT, L) * L.FOPEN) / fNumber,
  };
}

/* ── Shared pre-built production lenses ──────────────────────────────────
 *
 * buildLens returns a frozen RuntimeLens, and the prepared-state/chief-ray
 * helpers cache by lens object identity (src/optics/compat.ts), so sharing
 * one instance per file makes repeated analysis calls cheap — rebuilding the
 * same production lens per test was a dominant suite cost. Lazily memoized so
 * files only pay for the lenses they use. Never mutate a shared lens
 * (testing_recipes.md); call `build()` for a fresh instance when a test
 * modifies the prescription or exercises construction itself. */
function sharedBuild(raw: object): () => RuntimeLens {
  let L: RuntimeLens | null = null;
  return () => (L ??= build(raw));
}

export const sharedApoLanthar50f2 = sharedBuild(ApoLantharRaw);
export const sharedNikkor105f14 = sharedBuild(Nikkor105Raw);
export const sharedNikkorZ50f18 = sharedBuild(NikkorRaw);
export const sharedNikkorZ70200 = sharedBuild(NikkorZ70200Raw);
export const sharedNokton50f1 = sharedBuild(NoktonRaw);
export const sharedSonnar50f15 = sharedBuild(Sonnar50f15Raw);

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

export function buildMissAfterFirstHitLens(key = "test-miss-after-first-hit-lens"): RuntimeLens {
  return buildFixture({
    key,
    nominalFno: 4,
    surfaces: [
      { label: "STO", R: 1e15, nd: 1.0, sd: 100, d: 10, elemId: 0 },
      { label: "1", R: 20, nd: 1.5, sd: 10, d: 8, elemId: 1 },
      { label: "2", R: -20, nd: 1.0, sd: 10, d: 50, elemId: 1 },
    ],
  });
}
