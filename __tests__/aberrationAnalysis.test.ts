import { describe, it, expect } from "vitest";
import {
  BOKEH_PREVIEW_POINT_CLOUD_SAMPLE_COUNT,
  COMA_PREVIEW_CIRCULAR_PUPIL_RING_SAMPLES,
  COMA_PREVIEW_FIELD_FRACTIONS,
  COMA_PREVIEW_POINT_CLOUD_SAMPLE_COUNT,
  FIELD_CURVATURE_CURVE_FIELD_FRACTIONS,
  FIELD_CURVATURE_FIELD_FRACTIONS,
  MERIDIONAL_COMA_SAMPLE_COUNT,
  NEAR_AXIS_REAL_FRAC,
  computeBokehPreview,
  computeComaPointCloudPreview,
  computeComaPreview,
  computeFieldCurvature,
  computeMeridionalComa,
  computeSagittalComa,
  computeSphericalAberration,
  computeSAProfile,
} from "../src/optics/aberrationAnalysis.js";
import {
  bestFocusPlaneForDirection,
  computeOffAxisFieldGeometry,
  traceOffAxisChiefRay,
  traceOffAxisRelativeRay,
  traceCircularOffAxisBundle,
  traceOrthogonalOffAxisBundle,
} from "../src/optics/aberration/offAxis.js";
import { doLayout, entrancePupilAtState, epAtZoom, fopenAtZoom, traceRay } from "../src/optics/optics.js";
import buildLens from "../src/optics/buildLens.js";
import LENS_DEFAULTS from "../src/lens-data/defaults.js";
import ApoLantharRaw from "../src/lens-data/VoigtlanderApoLanthar50f2.data.js";
import Sonnar50f15Raw from "../src/lens-data/ZeissSonnar50f15.data.js";
import NikkorZ70200Raw from "../src/lens-data/NikonNikkorZ70200f28.data.js";
import NikonAF28f14DRaw from "../src/lens-data/NikonAF28f14D.data.js";
import type { RuntimeLens, LensData } from "../src/types/optics.js";
import type { OffAxisFieldGeometry } from "../src/optics/aberration/offAxis.js";
import { bestRelativeFocusPlane } from "../src/optics/aberration/shared.js";

/* ── Helpers ── */

/** Build a RuntimeLens from raw lens data + defaults. */
function build(raw: object): RuntimeLens {
  return buildLens({ ...LENS_DEFAULTS, ...raw } as LensData);
}

/** Compute aperture metrics at given zoom/stopdown for a lens. */
function apertureAt(L: RuntimeLens, zoomT: number, stopdownT: number) {
  const currentFOPEN = fopenAtZoom(zoomT, L);
  const rawFNumber = L.FOPEN * Math.pow(L.maxFstop / L.FOPEN, stopdownT);
  const fNumber = Math.max(rawFNumber, currentFOPEN);
  const currentPhysStopSD = (L.stopPhysSD * L.FOPEN) / fNumber;
  const baseEPSD = epAtZoom(zoomT, L);
  const currentEPSD = (baseEPSD * L.FOPEN) / fNumber;
  return { currentPhysStopSD, currentEPSD };
}

function stateApertureAt(L: RuntimeLens, focusT: number, zoomT: number, stopdownT: number) {
  const currentFOPEN = fopenAtZoom(zoomT, L);
  const rawFNumber = L.FOPEN * Math.pow(L.maxFstop / L.FOPEN, stopdownT);
  const fNumber = Math.max(rawFNumber, currentFOPEN);
  const currentPhysStopSD = (L.stopPhysSD * L.FOPEN) / fNumber;
  const baseEPSD = entrancePupilAtState(L.stopPhysSD, focusT, zoomT, L).epSD;
  const currentEPSD = (baseEPSD * L.FOPEN) / fNumber;
  return { currentPhysStopSD, currentEPSD };
}

function axialIntercept(y: number, u: number, lastSurfZ: number): number {
  return lastSurfZ - y / u;
}

function standardizedParabasalFraction(currentEPSD: number): number {
  return Math.min(0.02, Math.max(1e-4, 0.01 / currentEPSD));
}

function standardizedFieldFocusAt(
  L: RuntimeLens,
  geometry: OffAxisFieldGeometry,
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
) {
  const chiefRay = traceOffAxisChiefRay(geometry, L, focusT, zoomT, currentEPSD, currentPhysStopSD);
  expect(chiefRay).not.toBeNull();

  const parabasalFraction = standardizedParabasalFraction(currentEPSD);
  const traceRelativeHit = (direction: "tangential" | "sagittal", sign: -1 | 1) => {
    const trace = traceOffAxisRelativeRay(
      direction === "sagittal" ? sign * parabasalFraction : 0,
      direction === "tangential" ? sign * parabasalFraction : 0,
      geometry,
      L,
      focusT,
      zoomT,
      currentEPSD,
      currentPhysStopSD,
    );
    if (trace.clipped) return null;
    return direction === "tangential"
      ? { coordinate: trace.y, slope: trace.uy }
      : { coordinate: trace.x, slope: trace.ux };
  };

  const tangentialHits = ([-1, 1] as const)
    .map((sign) => traceRelativeHit("tangential", sign))
    .filter((hit): hit is { coordinate: number; slope: number } => hit !== null);
  const sagittalHits = ([-1, 1] as const)
    .map((sign) => traceRelativeHit("sagittal", sign))
    .filter((hit): hit is { coordinate: number; slope: number } => hit !== null);

  expect(tangentialHits.length).toBeGreaterThan(0);
  expect(sagittalHits.length).toBeGreaterThan(0);

  return {
    chiefImageHeight: chiefRay!.imagePoint.y,
    tangentialBestFocusZ: bestRelativeFocusPlane(
      tangentialHits,
      { coordinate: chiefRay!.trace.y, slope: chiefRay!.trace.uy },
      geometry.lastSurfZ,
    ),
    sagittalBestFocusZ: bestRelativeFocusPlane(
      sagittalHits,
      { coordinate: chiefRay!.trace.x, slope: chiefRay!.trace.ux },
      geometry.lastSurfZ,
    ),
    validSampleCount: tangentialHits.length + sagittalHits.length,
  };
}

function mkSingleElement(): RuntimeLens {
  return {
    S: [
      { label: "1", R: 50, nd: 1.5168, sd: 15, d: 5, elemId: 1 },
      { label: "2", R: -50, nd: 1.0, sd: 15, d: 80, elemId: 1 },
    ],
    N: 2,
    stopIdx: 0,
    clipMargin: 1.0,
    rayLead: 5,
    asphByIdx: {},
    varByIdx: {},
  } as unknown as RuntimeLens;
}

describe("computeSphericalAberration", () => {
  /* ── Nominal computation ── */

  it("returns a finite SA result for Sonnar 50/1.5 at infinity focus", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const result = computeSphericalAberration(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(result).not.toBeNull();
    expect(isFinite(result!.longitudinalSaUm)).toBe(true);
    expect(isFinite(result!.longitudinalSaMm)).toBe(true);
    expect(isFinite(result!.nearAxisRealIntercept)).toBe(true);
    expect(isFinite(result!.marginalRealIntercept)).toBe(true);
    expect(isFinite(result!.currentPlaneRmsUm)).toBe(true);
    expect(isFinite(result!.currentPlanePeakUm)).toBe(true);
    expect(isFinite(result!.bestFocusRmsUm)).toBe(true);
    expect(isFinite(result!.bestFocusPeakUm)).toBe(true);
  });

  it("returns a finite SA result for ApoLanthar 50/2 at infinity focus", () => {
    const L = build(ApoLantharRaw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const result = computeSphericalAberration(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(result).not.toBeNull();
    expect(isFinite(result!.longitudinalSaUm)).toBe(true);
  });

  /* ── µm conversion consistency ── */

  it("longitudinalSaUm equals longitudinalSaMm × 1000", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const result = computeSphericalAberration(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(result).not.toBeNull();
    expect(result!.longitudinalSaUm).toBeCloseTo(result!.longitudinalSaMm * 1000, 6);
    expect(result!.currentPlaneRmsUm).toBeCloseTo(result!.currentPlaneRmsMm * 1000, 6);
    expect(result!.currentPlanePeakUm).toBeCloseTo(result!.currentPlanePeakMm * 1000, 6);
    expect(result!.bestFocusRmsUm).toBeCloseTo(result!.bestFocusRmsMm * 1000, 6);
    expect(result!.bestFocusPeakUm).toBeCloseTo(result!.bestFocusPeakMm * 1000, 6);
  });

  /* ── Sign convention: simple positive lens groups are undercorrected ── */

  it("Sonnar 50/1.5 wide open shows non-zero SA", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const result = computeSphericalAberration(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(result).not.toBeNull();
    /* Fast lens should have measurable SA */
    expect(Math.abs(result!.longitudinalSaUm)).toBeGreaterThan(1);
  });

  it("simple positive element reports negative SA for undercorrected spherical aberration", () => {
    const L = mkSingleElement();
    const zPos = [0, 5];

    const result = computeSphericalAberration(L, zPos, 0, 0, 12, 15);
    expect(result).not.toBeNull();
    expect(result!.longitudinalSaMm).toBeLessThan(0);
  });

  it("uses a near-axis real-ray reference fraction", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD } = apertureAt(L, 0, 0);
    const lastSurfZ = zPos[L.N - 1];

    const nearAxisRay = traceRay(NEAR_AXIS_REAL_FRAC * currentEPSD, 0, zPos, 0, 0, undefined, true, L);
    expect(nearAxisRay.clipped).toBe(false);
    const nearAxisIntercept = axialIntercept(nearAxisRay.y, nearAxisRay.u, lastSurfZ);
    const result = computeSphericalAberration(L, zPos, 0, 0, currentEPSD, L.stopPhysSD);
    expect(result).not.toBeNull();
    expect(result!.nearAxisFraction).toBe(NEAR_AXIS_REAL_FRAC);
    expect(result!.nearAxisRealIntercept).toBeCloseTo(nearAxisIntercept, 6);
  });

  /* ── SA decreases with smaller aperture ── */

  it("SA magnitude decreases when stopped down (ApoLanthar)", () => {
    const L = build(ApoLantharRaw);
    const { z: zPos } = doLayout(0, 0, L);

    const wideOpen = apertureAt(L, 0, 0);
    const saWide = computeSphericalAberration(L, zPos, 0, 0, wideOpen.currentEPSD, wideOpen.currentPhysStopSD);

    /* stopdownT = 0.7 → well stopped down, smaller pupil → less SA */
    const stoppedDown = apertureAt(L, 0, 0.7);
    const saStopped = computeSphericalAberration(L, zPos, 0, 0, stoppedDown.currentEPSD, stoppedDown.currentPhysStopSD);

    expect(saWide).not.toBeNull();
    expect(saStopped).not.toBeNull();
    expect(Math.abs(saStopped!.longitudinalSaUm)).toBeLessThan(Math.abs(saWide!.longitudinalSaUm));
    expect(saStopped!.currentPlaneRmsUm).toBeLessThanOrEqual(saWide!.currentPlaneRmsUm);
    expect(saStopped!.currentPlanePeakUm).toBeLessThanOrEqual(saWide!.currentPlanePeakUm);
    expect(saStopped!.bestFocusRmsUm).toBeLessThanOrEqual(saWide!.bestFocusRmsUm);
    expect(saStopped!.bestFocusPeakUm).toBeLessThanOrEqual(saWide!.bestFocusPeakUm);
  });

  /* ── SA updates with focus change ── */

  it("returns a result at close focus", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0.5, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const result = computeSphericalAberration(L, zPos, 0.5, 0, currentEPSD, currentPhysStopSD);
    expect(result).not.toBeNull();
    expect(isFinite(result!.longitudinalSaUm)).toBe(true);
  });

  it("longitudinal SA updates with focus changes", () => {
    const L = build(NikonAF28f14DRaw);
    const infinity = apertureAt(L, 0, 0);
    const close = apertureAt(L, 0, 0);
    const { z: zInfinity } = doLayout(0, 0, L);
    const { z: zClose } = doLayout(0.8, 0, L);

    const atInfinity = computeSphericalAberration(L, zInfinity, 0, 0, infinity.currentEPSD, infinity.currentPhysStopSD);
    const atClose = computeSphericalAberration(L, zClose, 0.8, 0, close.currentEPSD, close.currentPhysStopSD);

    expect(atInfinity).not.toBeNull();
    expect(atClose).not.toBeNull();
    expect(atClose!.longitudinalSaMm).not.toBeCloseTo(atInfinity!.longitudinalSaMm, 6);
  });

  /* ── Zoom lens support ── */

  it("returns a result for zoom lens (Nikkor Z 70-200/2.8) at tele end", () => {
    const L = build(NikkorZ70200Raw);
    const { z: zPos } = doLayout(0, 1, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 1, 0);

    const result = computeSphericalAberration(L, zPos, 0, 1, currentEPSD, currentPhysStopSD);
    expect(result).not.toBeNull();
    expect(isFinite(result!.longitudinalSaUm)).toBe(true);
  });

  /* ── Symmetry: +Y and −Y averaging ── */

  it("near-axis and marginal real intercepts are distinct (non-trivial SA)", () => {
    const L = build(ApoLantharRaw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const result = computeSphericalAberration(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(result).not.toBeNull();
    expect(Math.abs(result!.marginalRealIntercept - result!.nearAxisRealIntercept)).toBeGreaterThan(1e-6);
  });

  it("current-plane spread metrics are finite for comparison lenses", () => {
    for (const raw of [ApoLantharRaw, Sonnar50f15Raw, NikonAF28f14DRaw]) {
      const L = build(raw);
      const { z: zPos } = doLayout(0, 0, L);
      const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);
      const result = computeSphericalAberration(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
      expect(result).not.toBeNull();
      expect(isFinite(result!.currentPlaneRmsUm)).toBe(true);
      expect(isFinite(result!.currentPlanePeakUm)).toBe(true);
      expect(isFinite(result!.bestFocusRmsUm)).toBe(true);
      expect(isFinite(result!.bestFocusPeakUm)).toBe(true);
      expect(result!.validSampleCount).toBeGreaterThanOrEqual(2);
    }
  });

  it("best-focus spread is no worse than current-plane spread", () => {
    for (const raw of [ApoLantharRaw, Sonnar50f15Raw, NikonAF28f14DRaw]) {
      const L = build(raw);
      const { z: zPos } = doLayout(0, 0, L);
      const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);
      const result = computeSphericalAberration(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
      expect(result).not.toBeNull();
      expect(result!.bestFocusRmsUm).toBeLessThanOrEqual(result!.currentPlaneRmsUm + 1e-6);
      expect(result!.bestFocusPeakUm).toBeLessThanOrEqual(result!.currentPlanePeakUm + 1e-6);
    }
  });

  /* ── Edge cases: invalid inputs ── */

  it("returns null when currentEPSD is zero", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);

    const result = computeSphericalAberration(L, zPos, 0, 0, 0, 0);
    expect(result).toBeNull();
  });

  it("returns null when currentEPSD is negative", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);

    const result = computeSphericalAberration(L, zPos, 0, 0, -1, 1);
    expect(result).toBeNull();
  });

  it("returns null for a degenerate lens with no surfaces", () => {
    const L = { N: 0, S: [] } as unknown as RuntimeLens;
    const result = computeSphericalAberration(L, [], 0, 0, 10, 5);
    expect(result).toBeNull();
  });

  /* ── Clipped ray handling ── */

  it("returns null when stop is too small to pass the marginal ray", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD } = apertureAt(L, 0, 0);

    /* Use a tiny stop that will clip the 0.95× marginal ray */
    const tinyStopSD = currentEPSD * 0.01;
    const result = computeSphericalAberration(L, zPos, 0, 0, currentEPSD, tinyStopSD);
    expect(result).toBeNull();
  });
});

describe("computeSAProfile", () => {
  /* ── Nominal computation ── */

  it("returns ≥ 2 points for Sonnar 50/1.5 at infinity focus", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const profile = computeSAProfile(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(profile.length).toBeGreaterThanOrEqual(2);
  });

  it("all fraction values are in (0, 1]", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const profile = computeSAProfile(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    for (const { fraction } of profile) {
      expect(fraction).toBeGreaterThan(0);
      expect(fraction).toBeLessThanOrEqual(1);
    }
  });

  it("all signed transverse profile values are finite", () => {
    const L = build(ApoLantharRaw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const profile = computeSAProfile(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    for (const { transverseSaMm } of profile) {
      expect(isFinite(transverseSaMm)).toBe(true);
    }
  });

  it("profile values stay within twice the best-focus peak spread", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const result = computeSphericalAberration(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    const profile = computeSAProfile(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);

    expect(result).not.toBeNull();
    expect(profile.length).toBeGreaterThan(0);
    const maxProfileHeight = Math.max(...profile.map((point) => Math.abs(point.transverseSaMm * 1000)));
    expect(maxProfileHeight).toBeLessThanOrEqual(result!.bestFocusPeakUm * 2 + 1e-6);
  });

  it("near-axis profile sample is close to zero at best focus", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const profile = computeSAProfile(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(profile.length).toBeGreaterThan(0);
    expect(profile[0].fraction).toBe(NEAR_AXIS_REAL_FRAC);
    expect(Math.abs(profile[0].transverseSaMm)).toBeLessThan(0.01);
  });

  it("simple positive element profile goes negative toward the margin", () => {
    const L = mkSingleElement();
    const zPos = [0, 5];

    const profile = computeSAProfile(L, zPos, 0, 0, 12, 15);
    expect(profile.length).toBeGreaterThan(1);
    expect(Math.abs(profile[0].transverseSaMm)).toBeLessThan(0.01);
    expect(profile[profile.length - 1].transverseSaMm).toBeLessThan(0);
  });

  it("profile marginal value matches the spherical aberration sign convention", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const result = computeSphericalAberration(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    const profile = computeSAProfile(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);

    expect(result).not.toBeNull();
    expect(profile.length).toBeGreaterThan(0);
    const marginalPoint = profile[profile.length - 1];
    expect(Math.sign(marginalPoint.transverseSaMm)).toBe(Math.sign(result!.longitudinalSaMm));
  });

  /* ── Edge cases ── */

  it("returns empty array when currentEPSD is zero", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);

    const profile = computeSAProfile(L, zPos, 0, 0, 0, 0);
    expect(profile).toEqual([]);
  });

  it("returns empty array for a degenerate lens with no surfaces", () => {
    const L = { N: 0, S: [] } as unknown as RuntimeLens;
    const profile = computeSAProfile(L, [], 0, 0, 10, 5);
    expect(profile).toEqual([]);
  });

  it("returns empty array when fewer than two zone samples survive clipping", () => {
    const L = mkSingleElement();
    const zPos = [0, 5];

    const profile = computeSAProfile(L, zPos, 0, 0, 12, 1.5);
    expect(profile).toEqual([]);
  });

  /* ── Aperture sensitivity ── */

  it("returns fewer or equal valid points when stopped down (clipping removes outer zones)", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);

    const wideOpen = apertureAt(L, 0, 0);
    const stoppedDown = apertureAt(L, 0, 0.8);

    const wideProfile = computeSAProfile(L, zPos, 0, 0, wideOpen.currentEPSD, wideOpen.currentPhysStopSD);
    const stoppedProfile = computeSAProfile(L, zPos, 0, 0, stoppedDown.currentEPSD, stoppedDown.currentPhysStopSD);

    /* Stopping down shrinks the pupil so it shouldn't produce more valid zones */
    expect(stoppedProfile.length).toBeLessThanOrEqual(wideProfile.length);
  });

  /* ── Zoom lens ── */

  it("returns ≥ 2 points for zoom lens (Nikkor Z 70-200/2.8) at tele end", () => {
    const L = build(NikkorZ70200Raw);
    const { z: zPos } = doLayout(0, 1, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 1, 0);

    const profile = computeSAProfile(L, zPos, 0, 1, currentEPSD, currentPhysStopSD);
    expect(profile.length).toBeGreaterThanOrEqual(2);
  });
});

describe("computeMeridionalComa", () => {
  it("returns a dense sampled coma result for Sonnar 50/1.5", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const result = computeMeridionalComa(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(result).not.toBeNull();
    expect(result!.sampleCount).toBe(MERIDIONAL_COMA_SAMPLE_COUNT);
    expect(result!.samples.length).toBe(MERIDIONAL_COMA_SAMPLE_COUNT);
    expect(result!.validSampleCount).toBeGreaterThanOrEqual(3);
    expect(result!.fieldAngleDeg).toBeGreaterThan(0);
    expect(isFinite(result!.centerIntercept)).toBe(true);
    expect(isFinite(result!.minIntercept)).toBe(true);
    expect(isFinite(result!.maxIntercept)).toBe(true);
    expect(isFinite(result!.spanMm)).toBe(true);
    expect(isFinite(result!.spanUm)).toBe(true);
  });

  it("uses dense sampling rather than the sparse display ray fractions", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const result = computeMeridionalComa(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(result).not.toBeNull();
    expect(result!.sampleCount).toBeGreaterThan(L.offAxisFractions.length);
  });

  it("falls back to outermost valid samples when marginal rays clip", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD } = apertureAt(L, 0, 0);
    const clippedStop = currentEPSD * 0.85;

    const result = computeMeridionalComa(L, zPos, 0, 0, currentEPSD, clippedStop);
    expect(result).not.toBeNull();
    expect(result!.clippedSampleCount).toBeGreaterThan(0);
    expect(result!.samples[0].clipped).toBe(true);
    expect(result!.samples[result!.samples.length - 1].clipped).toBe(true);
    expect(result!.lowerIntercept).toBeGreaterThanOrEqual(result!.minIntercept);
    expect(result!.upperIntercept).toBeLessThanOrEqual(result!.maxIntercept);
    expect(result!.spanMm).toBeCloseTo(result!.upperIntercept - result!.lowerIntercept, 8);
  });

  it("returns null when clipping removes one side of the pupil fan", () => {
    const L = mkSingleElement();
    const zPos = [0, 5];

    const result = computeMeridionalComa(L, zPos, 0, 0, 12, 1);
    expect(result).toBeNull();
  });

  it("updates with stopdown changes", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);

    const wideOpen = apertureAt(L, 0, 0);
    const stoppedDown = apertureAt(L, 0, 0.7);

    const wide = computeMeridionalComa(L, zPos, 0, 0, wideOpen.currentEPSD, wideOpen.currentPhysStopSD);
    const stopped = computeMeridionalComa(L, zPos, 0, 0, stoppedDown.currentEPSD, stoppedDown.currentPhysStopSD);

    expect(wide).not.toBeNull();
    expect(stopped).not.toBeNull();
    expect(stopped!.spanMm).not.toBeCloseTo(wide!.spanMm, 6);
  });

  it("updates with focus changes", () => {
    const L = build(NikonAF28f14DRaw);
    const infinity = apertureAt(L, 0, 0);
    const close = apertureAt(L, 0, 0);
    const { z: zInfinity } = doLayout(0, 0, L);
    const { z: zClose } = doLayout(0.8, 0, L);

    const atInfinity = computeMeridionalComa(L, zInfinity, 0, 0, infinity.currentEPSD, infinity.currentPhysStopSD);
    const atClose = computeMeridionalComa(L, zClose, 0.8, 0, close.currentEPSD, close.currentPhysStopSD);

    expect(atInfinity).not.toBeNull();
    expect(atClose).not.toBeNull();
    expect(atClose!.spanMm).not.toBeCloseTo(atInfinity!.spanMm, 6);
  });

  it("preserves the configured off-axis field fraction after the helper refactor", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const result = computeMeridionalComa(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(result).not.toBeNull();
    expect(result!.fieldAngleDeg).toBeCloseTo(L.halfField * L.offAxisFieldFrac, 6);
  });

  it("matches the shared tangential bundle trace at the configured field", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const result = computeMeridionalComa(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(result).not.toBeNull();

    const geometry = computeOffAxisFieldGeometry(L, zPos, 0, 0, currentPhysStopSD, L.offAxisFieldFrac);
    expect(geometry).not.toBeNull();

    const bundle = traceOrthogonalOffAxisBundle(
      "tangential",
      MERIDIONAL_COMA_SAMPLE_COUNT,
      geometry!,
      L,
      0,
      0,
      currentEPSD,
      currentPhysStopSD,
    );
    expect(bundle).not.toBeNull();
    expect(result!.centerIntercept).toBeCloseTo(bundle!.chiefRay.imagePoint.y, 8);

    const tracedSamplesByIndex = new Map(bundle!.samples.map((sample) => [sample.sourceSampleIndex, sample]));
    for (const sample of result!.samples) {
      const traced = tracedSamplesByIndex.get(sample.index);
      if (sample.clipped) {
        expect(traced).toBeUndefined();
      } else {
        expect(traced).toBeDefined();
        expect(sample.imageHeight).toBeCloseTo(traced!.imagePoint.y, 8);
      }
    }
  });
});

describe("computeComaPreview", () => {
  it("returns four ordered preview fields for the current lens state", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const result = computeComaPreview(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(result).not.toBeNull();
    expect(result!.fieldFractions).toEqual(COMA_PREVIEW_FIELD_FRACTIONS);
    expect(result!.fields.map((field) => field.fieldFraction)).toEqual([0, 0.25, 0.5, 0.75]);
    expect(result!.fields.map((field) => field.label)).toEqual(["Center", "25%", "50%", "75%"]);
    expect(result!.fields).toHaveLength(4);
  });

  it("returns dense samples for each usable preview tile", () => {
    const L = build(ApoLantharRaw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const result = computeComaPreview(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(result).not.toBeNull();
    expect(result!.usableFieldCount).toBeGreaterThanOrEqual(2);

    for (const field of result!.fields.filter((sample) => sample.usable)) {
      expect(field.samples).toHaveLength(MERIDIONAL_COMA_SAMPLE_COUNT);
      expect(field.validSampleCount).toBeGreaterThanOrEqual(3);
      expect(field.fieldAngleDeg).toBeGreaterThanOrEqual(0);
    }
  });

  it("keeps the center field finite and chief-ray centered", () => {
    const L = build(ApoLantharRaw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const result = computeComaPreview(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(result).not.toBeNull();

    const centerField = result!.fields[0];
    expect(centerField.fieldFraction).toBe(0);
    expect(centerField.usable).toBe(true);
    expect(centerField.fieldAngleDeg).toBeCloseTo(0, 8);
    expect(isFinite(centerField.chiefIntercept)).toBe(true);

    const chiefSample = centerField.samples.find((sample) => Math.abs(sample.pupilFraction) < 1e-9) ?? null;
    expect(chiefSample).not.toBeNull();
    expect(chiefSample!.relativeImageHeight).toBeCloseTo(0, 8);
  });

  it("exposes a shared normalization range across usable tiles", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const result = computeComaPreview(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(result).not.toBeNull();
    expect(result!.sharedRelativeHalfRangeMm).toBeGreaterThan(0);

    for (const field of result!.fields.filter((sample) => sample.usable)) {
      expect(Math.abs(field.minRelativeIntercept)).toBeLessThanOrEqual(result!.sharedRelativeHalfRangeMm + 1e-9);
      expect(Math.abs(field.maxRelativeIntercept)).toBeLessThanOrEqual(result!.sharedRelativeHalfRangeMm + 1e-9);
    }
  });

  it("returns null when fewer than two preview tiles are usable", () => {
    const L = mkSingleElement();
    const zPos = [0, 5];

    const result = computeComaPreview(L, zPos, 0, 0, 12, 1);
    expect(result).toBeNull();
  });
});

describe("computeComaPointCloudPreview", () => {
  it("returns four ordered preview fields and preserves usable field count", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const result = computeComaPointCloudPreview(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(result).not.toBeNull();
    expect(result!.fieldFractions).toEqual(COMA_PREVIEW_FIELD_FRACTIONS);
    expect(result!.fields.map((field) => field.fieldFraction)).toEqual([0, 0.25, 0.5, 0.75]);
    expect(result!.fields.map((field) => field.label)).toEqual(["Center", "25%", "50%", "75%"]);
    expect(result!.usableFieldCount).toBe(result!.fields.filter((field) => field.usable).length);
    expect(result!.fields.filter((field) => field.usable).every((field) => field.points.length > 0)).toBe(true);
  });

  it("matches the shared circular bundle trace at an off-axis field", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const result = computeComaPointCloudPreview(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(result).not.toBeNull();

    const field = result!.fields.find((sample) => sample.fieldFraction === 0.5);
    expect(field).toBeDefined();
    expect(field!.usable).toBe(true);

    const geometry = computeOffAxisFieldGeometry(L, zPos, 0, 0, currentPhysStopSD, field!.fieldFraction);
    expect(geometry).not.toBeNull();

    const bundle = traceCircularOffAxisBundle(
      COMA_PREVIEW_CIRCULAR_PUPIL_RING_SAMPLES,
      geometry!,
      L,
      0,
      0,
      currentEPSD,
      currentPhysStopSD,
    );
    expect(bundle).not.toBeNull();
    expect(field!.validSampleCount).toBe(bundle!.validSampleCount);
    expect(field!.chiefIntercept).toBeCloseTo(bundle!.chiefRay.imagePoint.y, 8);

    const pointsBySourceIndex = new Map(field!.points.map((point) => [point.sourceSampleIndex, point]));
    for (const sample of bundle!.samples) {
      const point = pointsBySourceIndex.get(sample.sourceSampleIndex);
      expect(point).toBeDefined();
      expect(point!.tangentialImageHeight).toBeCloseTo(sample.imagePoint.y - bundle!.chiefRay.imagePoint.y, 8);
      expect(point!.sagittalImageHeight).toBeCloseTo(sample.imagePoint.x - bundle!.chiefRay.imagePoint.x, 8);
    }
  });

  it("keeps the center field centered and sagittally symmetric", () => {
    const L = build(ApoLantharRaw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const result = computeComaPointCloudPreview(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(result).not.toBeNull();

    const centerField = result!.fields[0];
    expect(centerField.fieldFraction).toBe(0);
    expect(centerField.usable).toBe(true);

    const chiefPoint = centerField.points.find((point) => point.sourceSampleIndex === 0);
    expect(chiefPoint).toBeDefined();
    expect(chiefPoint!.tangentialImageHeight).toBeCloseTo(0, 8);
    expect(chiefPoint!.sagittalImageHeight).toBeCloseTo(0, 8);

    const mirroredPointPairs = centerField.points
      .filter((point) => point.sagittalImageHeight < 0)
      .map((point) => ({
        point,
        mirrored: centerField.points.find(
          (candidate) =>
            candidate.sourceSampleIndex !== point.sourceSampleIndex &&
            candidate.tangentialImageHeight === point.tangentialImageHeight &&
            candidate.sagittalImageHeight === -point.sagittalImageHeight,
        ),
      }));
    expect(mirroredPointPairs.some(({ mirrored }) => mirrored !== undefined)).toBe(true);

    const sagittalAverage =
      centerField.points.reduce((sum, point) => sum + point.sagittalImageHeight * point.weight, 0) /
      centerField.points.reduce((sum, point) => sum + point.weight, 0);
    expect(sagittalAverage).toBeCloseTo(0, 8);
  });

  it("survives clipped outer rays when enough valid samples remain", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD } = apertureAt(L, 0, 0);
    const clippedStop = currentEPSD * 0.85;

    const result = computeComaPointCloudPreview(L, zPos, 0, 0, currentEPSD, clippedStop);
    expect(result).not.toBeNull();
    expect(result!.usableFieldCount).toBeGreaterThanOrEqual(2);
    expect(result!.fields.some((field) => field.clippedSampleCount > 0 && field.points.length > 0)).toBe(true);
  });

  it("returns null when fewer than two point-cloud preview tiles are usable", () => {
    const L = mkSingleElement();
    const zPos = [0, 5];

    const result = computeComaPointCloudPreview(L, zPos, 0, 0, 12, 1);
    expect(result).toBeNull();
  });

  it("tracks tangential spread changes in the same direction as the meridional preview", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);

    const wideOpen = apertureAt(L, 0, 0);
    const stoppedDown = apertureAt(L, 0, 0.7);

    const wideMeridional = computeComaPreview(L, zPos, 0, 0, wideOpen.currentEPSD, wideOpen.currentPhysStopSD);
    const stoppedMeridional = computeComaPreview(L, zPos, 0, 0, stoppedDown.currentEPSD, stoppedDown.currentPhysStopSD);
    const widePointCloud = computeComaPointCloudPreview(
      L,
      zPos,
      0,
      0,
      wideOpen.currentEPSD,
      wideOpen.currentPhysStopSD,
    );
    const stoppedPointCloud = computeComaPointCloudPreview(
      L,
      zPos,
      0,
      0,
      stoppedDown.currentEPSD,
      stoppedDown.currentPhysStopSD,
    );

    expect(wideMeridional).not.toBeNull();
    expect(stoppedMeridional).not.toBeNull();
    expect(widePointCloud).not.toBeNull();
    expect(stoppedPointCloud).not.toBeNull();

    const meridionalDelta = stoppedMeridional!.sharedRelativeHalfRangeMm - wideMeridional!.sharedRelativeHalfRangeMm;
    const pointCloudDelta =
      stoppedPointCloud!.sharedTangentialHalfRangeMm - widePointCloud!.sharedTangentialHalfRangeMm;
    expect(Math.sign(pointCloudDelta)).toBe(Math.sign(meridionalDelta));
    expect(Math.abs(pointCloudDelta)).toBeGreaterThan(1e-6);
    expect(widePointCloud!.sharedTangentialHalfRangeMm).toBeGreaterThan(0);
    expect(stoppedPointCloud!.sharedTangentialHalfRangeMm).toBeGreaterThan(0);
  });

  it("responds to focus changes", () => {
    const L = build(NikonAF28f14DRaw);
    const infinity = apertureAt(L, 0, 0);
    const close = apertureAt(L, 0, 0);
    const { z: zInfinity } = doLayout(0, 0, L);
    const { z: zClose } = doLayout(0.8, 0, L);

    const atInfinity = computeComaPointCloudPreview(
      L,
      zInfinity,
      0,
      0,
      infinity.currentEPSD,
      infinity.currentPhysStopSD,
    );
    const atClose = computeComaPointCloudPreview(L, zClose, 0.8, 0, close.currentEPSD, close.currentPhysStopSD);

    expect(atInfinity).not.toBeNull();
    expect(atClose).not.toBeNull();
    expect(atClose!.sharedTangentialHalfRangeMm).not.toBeCloseTo(atInfinity!.sharedTangentialHalfRangeMm, 6);
  });

  it("uses the fixed circular pupil pattern for sample counts", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const result = computeComaPointCloudPreview(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(result).not.toBeNull();
    expect(result!.fields.every((field) => field.sampleCount === COMA_PREVIEW_POINT_CLOUD_SAMPLE_COUNT)).toBe(true);
  });

  it("exposes positive finite shared sagittal and tangential half-ranges", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const result = computeComaPointCloudPreview(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(result).not.toBeNull();
    expect(result!.sharedTangentialHalfRangeMm).toBeGreaterThan(0);
    expect(result!.sharedSagittalHalfRangeMm).toBeGreaterThan(0);
    expect(result!.sharedSpotHalfRangeMm).toBe(
      Math.max(result!.sharedTangentialHalfRangeMm, result!.sharedSagittalHalfRangeMm),
    );
    expect(isFinite(result!.sharedTangentialHalfRangeMm)).toBe(true);
    expect(isFinite(result!.sharedSagittalHalfRangeMm)).toBe(true);
    expect(isFinite(result!.sharedSpotHalfRangeMm)).toBe(true);
  });

  it("records the weighted centroid and RMS spot radius for each usable field", () => {
    const L = build(ApoLantharRaw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const result = computeComaPointCloudPreview(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(result).not.toBeNull();

    const centerField = result!.fields[0];
    expect(centerField.usable).toBe(true);

    const totalWeight = centerField.points.reduce((sum, point) => sum + point.weight, 0);
    const tangentialCentroid =
      centerField.points.reduce((sum, point) => sum + point.tangentialImageHeight * point.weight, 0) / totalWeight;
    const sagittalCentroid =
      centerField.points.reduce((sum, point) => sum + point.sagittalImageHeight * point.weight, 0) / totalWeight;
    const rmsRadius = Math.sqrt(
      centerField.points.reduce((sum, point) => {
        const dx = point.tangentialImageHeight - tangentialCentroid;
        const dy = point.sagittalImageHeight - sagittalCentroid;
        return sum + point.weight * (dx * dx + dy * dy);
      }, 0) / totalWeight,
    );

    expect(centerField.centroidTangentialImageHeight).toBeCloseTo(tangentialCentroid, 8);
    expect(centerField.centroidSagittalImageHeight).toBeCloseTo(sagittalCentroid, 8);
    expect(centerField.rmsRadiusMm).toBeCloseTo(rmsRadius, 8);
    expect(centerField.rmsRadiusUm).toBeCloseTo(rmsRadius * 1000, 8);
    expect(centerField.centroidTangentialImageHeight).toBeCloseTo(0, 8);
  });
});

describe("computeBokehPreview", () => {
  it("returns both infinity and minimum-focus conjugate grids with shared normalization", () => {
    const L = build(Sonnar50f15Raw);
    const focusT = 0.4;
    const zoomT = 0;
    const { z: zPos } = doLayout(focusT, zoomT, L);
    const { currentEPSD, currentPhysStopSD } = stateApertureAt(L, focusT, zoomT, 0);

    const result = computeBokehPreview(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD);
    expect(result).not.toBeNull();
    expect(result!.fieldFractions).toEqual(COMA_PREVIEW_FIELD_FRACTIONS);
    expect(result!.conjugates.map((conjugate) => conjugate.objectConjugate)).toEqual(["infinity", "minimumFocus"]);
    expect(result!.conjugates.map((conjugate) => conjugate.label)).toEqual([
      "Infinity subject",
      "Minimum-focus subject",
    ]);
    expect(result!.sharedTangentialHalfRangeMm).toBeGreaterThan(0);
    expect(result!.sharedSagittalHalfRangeMm).toBeGreaterThan(0);
    expect(result!.sharedSpotHalfRangeMm).toBe(
      Math.max(result!.sharedTangentialHalfRangeMm, result!.sharedSagittalHalfRangeMm),
    );
    expect(result!.displaySpotHalfRangeMm).toBeGreaterThanOrEqual(result!.sharedSpotHalfRangeMm);
    for (const conjugate of result!.conjugates) {
      expect(conjugate.sharedSpotHalfRangeMm).toBeGreaterThan(0);
      expect(conjugate.displaySpotHalfRangeMm).toBeGreaterThanOrEqual(conjugate.sharedSpotHalfRangeMm);
    }
  });

  it("uses the denser fixed circular pupil pattern for every usable field", () => {
    const L = build(ApoLantharRaw);
    const focusT = 0;
    const zoomT = 0;
    const { z: zPos } = doLayout(focusT, zoomT, L);
    const { currentEPSD, currentPhysStopSD } = stateApertureAt(L, focusT, zoomT, 0);

    const result = computeBokehPreview(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD);
    expect(result).not.toBeNull();

    for (const field of result!.conjugates.flatMap((conjugate) => conjugate.fields.filter((sample) => sample.usable))) {
      expect(field.sampleCount).toBe(BOKEH_PREVIEW_POINT_CLOUD_SAMPLE_COUNT);
      expect(field.apertureSilhouette.kind).toBe("circular");
    }
  });

  it("separates the infinity and minimum-focus conjugates at the same lens state", () => {
    const L = build(NikonAF28f14DRaw);
    const focusT = 0.35;
    const zoomT = 0;
    const { z: zPos } = doLayout(focusT, zoomT, L);
    const { currentEPSD, currentPhysStopSD } = stateApertureAt(L, focusT, zoomT, 0);

    const result = computeBokehPreview(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD);
    expect(result).not.toBeNull();

    const infinityField = result!.conjugates[0].fields.find((field) => field.fieldFraction === 0.5);
    const minimumFocusField = result!.conjugates[1].fields.find((field) => field.fieldFraction === 0.5);
    expect(infinityField).toBeDefined();
    expect(minimumFocusField).toBeDefined();
    expect(infinityField!.usable).toBe(true);
    expect(minimumFocusField!.usable).toBe(true);
    expect(minimumFocusField!.centroidTangentialImageHeight).not.toBeCloseTo(
      infinityField!.centroidTangentialImageHeight,
      6,
    );
  });

  it("responds to stopdown changes", () => {
    const L = build(Sonnar50f15Raw);
    const focusT = 0.6;
    const zoomT = 0;
    const { z: zPos } = doLayout(focusT, zoomT, L);

    const wideOpen = stateApertureAt(L, focusT, zoomT, 0);
    const stoppedDown = stateApertureAt(L, focusT, zoomT, 0.7);

    const wide = computeBokehPreview(L, zPos, focusT, zoomT, wideOpen.currentEPSD, wideOpen.currentPhysStopSD);
    const stopped = computeBokehPreview(L, zPos, focusT, zoomT, stoppedDown.currentEPSD, stoppedDown.currentPhysStopSD);

    expect(wide).not.toBeNull();
    expect(stopped).not.toBeNull();
    expect(stopped!.sharedSpotHalfRangeMm).not.toBeCloseTo(wide!.sharedSpotHalfRangeMm, 6);
  });

  it("responds to focus changes in both conjugate grids", () => {
    const L = build(NikonAF28f14DRaw);
    const zoomT = 0;
    const focusInfinity = 0;
    const focusClose = 0.8;
    const { z: zInfinity } = doLayout(focusInfinity, zoomT, L);
    const { z: zClose } = doLayout(focusClose, zoomT, L);
    const apertureInfinity = stateApertureAt(L, focusInfinity, zoomT, 0);
    const apertureClose = stateApertureAt(L, focusClose, zoomT, 0);

    const atInfinity = computeBokehPreview(
      L,
      zInfinity,
      focusInfinity,
      zoomT,
      apertureInfinity.currentEPSD,
      apertureInfinity.currentPhysStopSD,
    );
    const atClose = computeBokehPreview(
      L,
      zClose,
      focusClose,
      zoomT,
      apertureClose.currentEPSD,
      apertureClose.currentPhysStopSD,
    );

    expect(atInfinity).not.toBeNull();
    expect(atClose).not.toBeNull();
    expect(atClose!.conjugates[0].fields[2]!.centroidTangentialImageHeight).not.toBeCloseTo(
      atInfinity!.conjugates[0].fields[2]!.centroidTangentialImageHeight,
      6,
    );
    expect(atClose!.conjugates[1].fields[2]!.centroidTangentialImageHeight).not.toBeCloseTo(
      atInfinity!.conjugates[1].fields[2]!.centroidTangentialImageHeight,
      6,
    );
    expect(atClose!.sharedSpotHalfRangeMm).not.toBeCloseTo(atInfinity!.sharedSpotHalfRangeMm, 6);
    expect(atClose!.displaySpotHalfRangeMm).not.toBeCloseTo(atInfinity!.displaySpotHalfRangeMm, 6);
    expect(atClose!.conjugates[0].displaySpotHalfRangeMm).toBeCloseTo(atClose!.conjugates[0].sharedSpotHalfRangeMm, 6);
    expect(atClose!.conjugates[1].displaySpotHalfRangeMm).toBeCloseTo(atClose!.conjugates[1].sharedSpotHalfRangeMm, 6);
    expect(atClose!.conjugates[0].displaySpotHalfRangeMm).not.toBeCloseTo(
      atInfinity!.conjugates[0].displaySpotHalfRangeMm,
      6,
    );
    expect(atClose!.conjugates[0].fields[2]!.rmsRadiusMm).toBeGreaterThan(
      atInfinity!.conjugates[0].fields[2]!.rmsRadiusMm,
    );
  });

  it("shows clipped off-axis bokeh truncation when the stop is constricted", () => {
    const L = build(Sonnar50f15Raw);
    const focusT = 0;
    const zoomT = 0;
    const { z: zPos } = doLayout(focusT, zoomT, L);
    const wideOpen = stateApertureAt(L, focusT, zoomT, 0);
    const clippedStop = wideOpen.currentEPSD * 0.8;

    const result = computeBokehPreview(L, zPos, focusT, zoomT, wideOpen.currentEPSD, clippedStop);
    expect(result).not.toBeNull();

    const outerField = result!.conjugates[0].fields.find((field) => field.fieldFraction === 0.75);
    expect(outerField).toBeDefined();
    expect(outerField!.usable).toBe(true);
    expect(outerField!.clippedSampleCount).toBeGreaterThan(0);
    expect(outerField!.validSampleCount).toBeLessThan(outerField!.sampleCount);
  });

  it("keeps the unconstrained center field sagittally symmetric", () => {
    const L = build(ApoLantharRaw);
    const focusT = 0;
    const zoomT = 0;
    const { z: zPos } = doLayout(focusT, zoomT, L);
    const { currentEPSD, currentPhysStopSD } = stateApertureAt(L, focusT, zoomT, 0);

    const result = computeBokehPreview(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD);
    expect(result).not.toBeNull();

    const centerField = result!.conjugates[0].fields[0];
    expect(centerField.usable).toBe(true);
    expect(centerField.centroidSagittalImageHeight).toBeCloseTo(0, 8);
    expect(centerField.centroidTangentialImageHeight).toBeCloseTo(0, 8);
  });
});

describe("computeSagittalComa", () => {
  it("returns a finite result for a real lens", () => {
    const L = build(NikonAF28f14DRaw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const result = computeSagittalComa(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(result).not.toBeNull();
    expect(result!.fieldAngleDeg).toBeGreaterThan(0);
    expect(result!.validSampleCount).toBeGreaterThanOrEqual(3);
    expect(isFinite(result!.spanMm)).toBe(true);
    expect(isFinite(result!.centerIntercept)).toBe(true);
    expect(result!.spanUm).toBeCloseTo(result!.spanMm * 1000, 8);
  });

  it("differs from meridional coma for an asymmetric off-axis field", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const sagittal = computeSagittalComa(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    const meridional = computeMeridionalComa(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);

    expect(sagittal).not.toBeNull();
    expect(meridional).not.toBeNull();
    // Sagittal and meridional spans should generally differ
    expect(sagittal!.spanMm).not.toBeCloseTo(meridional!.spanMm, 4);
  });

  it("returns null for zero field angle", () => {
    const L = build(ApoLantharRaw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    // ApoLanthar has offAxisFieldFrac that should give a non-zero field angle,
    // but a lens with zero field angle should return null
    const emptyLens = { ...L, offAxisFieldFrac: 0 } as RuntimeLens;
    const result = computeSagittalComa(emptyLens, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    // At field fraction 0, fieldAngleDeg is 0, so it should return null
    expect(result).toBeNull();
  });

  it("extracts x-coordinate intercepts (not y)", () => {
    const L = build(NikonAF28f14DRaw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const result = computeSagittalComa(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(result).not.toBeNull();

    // The center intercept should be near zero for x (sagittal direction on-axis in x)
    // while meridional center intercept is the chief ray image height (non-zero)
    const meridional = computeMeridionalComa(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(meridional).not.toBeNull();
    expect(Math.abs(result!.centerIntercept)).toBeLessThan(Math.abs(meridional!.centerIntercept));
  });

  it("responds to aperture changes", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);

    const wideOpen = apertureAt(L, 0, 0);
    const stoppedDown = apertureAt(L, 0, 0.7);

    const wide = computeSagittalComa(L, zPos, 0, 0, wideOpen.currentEPSD, wideOpen.currentPhysStopSD);
    const stopped = computeSagittalComa(L, zPos, 0, 0, stoppedDown.currentEPSD, stoppedDown.currentPhysStopSD);

    expect(wide).not.toBeNull();
    expect(stopped).not.toBeNull();
    // Stopping down should reduce coma span
    expect(Math.abs(stopped!.spanMm)).toBeLessThan(Math.abs(wide!.spanMm));
  });
});

describe("computeFieldCurvature", () => {
  it("returns an ordered field sweep for a representative prime lens", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const result = computeFieldCurvature(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(result).not.toBeNull();
    expect(result!.fieldFractions).toEqual(FIELD_CURVATURE_FIELD_FRACTIONS);
    expect(result!.curveFieldFractions).toEqual(FIELD_CURVATURE_CURVE_FIELD_FRACTIONS);
    expect(result!.fields.map((field) => field.fieldFraction)).toEqual([0, 0.25, 0.5, 0.75, 1]);
    expect(result!.curveFields.map((field) => field.fieldFraction)).toEqual(FIELD_CURVATURE_CURVE_FIELD_FRACTIONS);
    expect(result!.fields.map((field) => field.label)).toEqual(["Center", "25%", "50%", "75%", "100%"]);
    expect(result!.curveFields[0]?.label).toBe("Center");
    expect(result!.curveFields[result!.curveFields.length - 1]?.label).toBe("100%");
    expect(result!.usableFieldCount).toBeGreaterThanOrEqual(2);
    expect(result!.sharedFocusShiftHalfRangeMm).toBeGreaterThan(0);
  });

  it("keeps the dense curve sweep aligned with the standard checkpoint fields", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const result = computeFieldCurvature(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(result).not.toBeNull();
    expect(result!.curveFields.length).toBeGreaterThan(result!.fields.length);

    for (const checkpoint of result!.fields) {
      const curveField = result!.curveFields.find((field) => field.fieldFraction === checkpoint.fieldFraction);
      expect(curveField).toBeDefined();
      expect(curveField!.label).toBe(checkpoint.label);
      expect(curveField!.tangentialBestFocusZ).toBeCloseTo(checkpoint.tangentialBestFocusZ, 10);
      expect(curveField!.sagittalBestFocusZ).toBeCloseTo(checkpoint.sagittalBestFocusZ, 10);
      expect(curveField!.petzvalBestFocusZ).toBeCloseTo(checkpoint.petzvalBestFocusZ, 10);
      expect(curveField!.tangentialShiftMm).toBeCloseTo(checkpoint.tangentialShiftMm, 10);
      expect(curveField!.sagittalShiftMm).toBeCloseTo(checkpoint.sagittalShiftMm, 10);
      expect(curveField!.astigmaticDifferenceMm).toBeCloseTo(checkpoint.astigmaticDifferenceMm, 10);
    }
  });

  it("returns a finite result for a zoom lens at the tele end", () => {
    const L = build(NikkorZ70200Raw);
    const { z: zPos } = doLayout(0, 1, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 1, 0);

    const result = computeFieldCurvature(L, zPos, 0, 1, currentEPSD, currentPhysStopSD);
    expect(result).not.toBeNull();
    expect(isFinite(result!.maxAstigmaticDifferenceUm)).toBe(true);
    expect(isFinite(result!.edgeTangentialShiftMm)).toBe(true);
    expect(isFinite(result!.edgeSagittalShiftMm)).toBe(true);
  });

  it("matches the standardized parabasal solve at an off-axis field and keeps the dense real-ray solve as a diagnostic", () => {
    const L = build(NikonAF28f14DRaw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const result = computeFieldCurvature(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(result).not.toBeNull();

    const field = result!.fields.find((sample) => sample.fieldFraction === 0.75);
    expect(field).toBeDefined();
    expect(field!.usable).toBe(true);

    const geometry = computeOffAxisFieldGeometry(L, zPos, 0, 0, currentPhysStopSD, field!.fieldFraction);
    expect(geometry).not.toBeNull();
    const standardizedField = standardizedFieldFocusAt(L, geometry!, 0, 0, currentEPSD, currentPhysStopSD);

    const tangentialBundle = traceOrthogonalOffAxisBundle(
      "tangential",
      MERIDIONAL_COMA_SAMPLE_COUNT,
      geometry!,
      L,
      0,
      0,
      currentEPSD,
      currentPhysStopSD,
    );
    const sagittalBundle = traceOrthogonalOffAxisBundle(
      "sagittal",
      MERIDIONAL_COMA_SAMPLE_COUNT,
      geometry!,
      L,
      0,
      0,
      currentEPSD,
      currentPhysStopSD,
    );

    expect(tangentialBundle).not.toBeNull();
    expect(sagittalBundle).not.toBeNull();
    expect(field!.tangentialBestFocusZ).toBeCloseTo(standardizedField.tangentialBestFocusZ, 8);
    expect(field!.sagittalBestFocusZ).toBeCloseTo(standardizedField.sagittalBestFocusZ, 8);
    expect(field!.chiefImageHeight).toBeCloseTo(standardizedField.chiefImageHeight, 8);
    expect(field!.validSampleCount).toBe(standardizedField.validSampleCount);
    expect(field!.diagnosticTangentialBestFocusZ).toBeCloseTo(
      bestFocusPlaneForDirection(tangentialBundle!, "tangential"),
      8,
    );
    expect(field!.diagnosticSagittalBestFocusZ).toBeCloseTo(bestFocusPlaneForDirection(sagittalBundle!, "sagittal"), 8);
  });

  it("keeps the center-field astigmatic difference at zero", () => {
    const L = build(ApoLantharRaw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const result = computeFieldCurvature(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(result).not.toBeNull();
    expect(result!.fields[0].fieldFraction).toBe(0);
    expect(result!.fields[0].astigmaticDifferenceUm).toBeCloseTo(0, 8);
  });

  it("keeps the center-field standardized curves coincident and preserves the dense real-ray diagnostic", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const result = computeFieldCurvature(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(result).not.toBeNull();

    const centerField = result!.fields[0];
    expect(centerField.usable).toBe(true);
    expect(centerField.tangentialBestFocusZ).toBeCloseTo(centerField.sagittalBestFocusZ, 6);
    expect(centerField.diagnosticTangentialBestFocusZ).toBeDefined();
    expect(centerField.diagnosticSagittalBestFocusZ).toBeDefined();
    expect(centerField.diagnosticTangentialBestFocusZ).toBeCloseTo(centerField.diagnosticSagittalBestFocusZ!, 6);
  });

  it("keeps the standardized off-axis field curve distinct from the dense real-ray diagnostic", () => {
    const L = build(NikonAF28f14DRaw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const result = computeFieldCurvature(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(result).not.toBeNull();

    const offAxisField = result!.fields.find((field) => field.usable && field.fieldFraction === 0.75);
    expect(offAxisField).toBeDefined();
    expect(offAxisField!.diagnosticTangentialShiftMm).toBeDefined();
    expect(offAxisField!.diagnosticSagittalShiftMm).toBeDefined();
    expect(offAxisField!.tangentialShiftMm).not.toBeCloseTo(offAxisField!.diagnosticTangentialShiftMm!, 5);
    expect(offAxisField!.sagittalShiftMm).not.toBeCloseTo(offAxisField!.diagnosticSagittalShiftMm!, 5);
  });

  it("shows measurable astigmatic separation away from center", () => {
    const L = build(NikonAF28f14DRaw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const result = computeFieldCurvature(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(result).not.toBeNull();

    const offAxisFields = result!.fields.filter((field) => field.usable && field.fieldFraction > 0);
    expect(offAxisFields.length).toBeGreaterThan(0);
    expect(offAxisFields.some((field) => Math.abs(field.astigmaticDifferenceUm) > 1)).toBe(true);
  });

  it("does not fall back to mirroring the tangential solve about the Petzval mean", () => {
    const L = build(NikonAF28f14DRaw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const result = computeFieldCurvature(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(result).not.toBeNull();

    const offAxisField = [...result!.fields].reverse().find((field) => field.usable && field.fieldFraction > 0);
    expect(offAxisField).toBeDefined();

    const mirroredSagittal = 2 * offAxisField!.petzvalBestFocusZ - offAxisField!.tangentialBestFocusZ;
    expect(offAxisField!.sagittalBestFocusZ).not.toBeCloseTo(mirroredSagittal, 6);
  });

  it("changes with focus", () => {
    const L = build(NikonAF28f14DRaw);
    const infinity = apertureAt(L, 0, 0);
    const close = apertureAt(L, 0, 0);
    const { z: zInfinity } = doLayout(0, 0, L);
    const { z: zClose } = doLayout(0.8, 0, L);

    const atInfinity = computeFieldCurvature(L, zInfinity, 0, 0, infinity.currentEPSD, infinity.currentPhysStopSD);
    const atClose = computeFieldCurvature(L, zClose, 0.8, 0, close.currentEPSD, close.currentPhysStopSD);

    expect(atInfinity).not.toBeNull();
    expect(atClose).not.toBeNull();
    expect(atClose!.edgeTangentialShiftMm).not.toBeCloseTo(atInfinity!.edgeTangentialShiftMm, 6);
  });

  it("changes with zoom", () => {
    const L = build(NikkorZ70200Raw);
    const wide = apertureAt(L, 0, 0);
    const tele = apertureAt(L, 1, 0);
    const { z: zWide } = doLayout(0, 0, L);
    const { z: zTele } = doLayout(0, 1, L);

    const atWide = computeFieldCurvature(L, zWide, 0, 0, wide.currentEPSD, wide.currentPhysStopSD);
    const atTele = computeFieldCurvature(L, zTele, 0, 1, tele.currentEPSD, tele.currentPhysStopSD);

    expect(atWide).not.toBeNull();
    expect(atTele).not.toBeNull();
    expect(atTele!.edgeTangentialShiftMm).not.toBeCloseTo(atWide!.edgeTangentialShiftMm, 6);
  });

  it("returns null for invalid inputs", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);

    expect(computeFieldCurvature(L, zPos, 0, 0, 0, 0)).toBeNull();
    expect(computeFieldCurvature({ N: 0, S: [] } as unknown as RuntimeLens, [], 0, 0, 10, 5)).toBeNull();
  });

  it("returns zero astigmatism at center for a second lens (Sonnar 50/1.5)", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const result = computeFieldCurvature(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(result).not.toBeNull();
    expect(result!.fields[0].astigmaticDifferenceMm).toBeCloseTo(0, 8);
    expect(result!.fields[0].astigmaticDifferenceUm).toBeCloseTo(0, 8);
  });

  it("produces non-zero Petzval shift at off-axis fields for a lens with finite Petzval sum", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const result = computeFieldCurvature(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(result).not.toBeNull();

    const offAxisFields = result!.fields.filter((field) => field.usable && field.fieldFraction > 0);
    expect(offAxisFields.length).toBeGreaterThan(0);
    // Petzval shift should be non-zero for off-axis fields when petzvalSum is finite
    expect(offAxisFields.some((field) => Math.abs(field.petzvalShiftMm) > 1e-6)).toBe(true);
  });

  it("keeps Petzval shift proportional to image height squared (small-angle regime)", () => {
    const L = build(ApoLantharRaw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const result = computeFieldCurvature(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(result).not.toBeNull();

    // Compare 25% and 50% fields: at small angles, Petzval shift ~ h^2
    const f25 = result!.fields.find((f) => f.fieldFraction === 0.25);
    const f50 = result!.fields.find((f) => f.fieldFraction === 0.5);
    if (f25 && f50 && f25.usable && f50.usable && Math.abs(f25.petzvalShiftMm) > 1e-6) {
      const ratio = f50.petzvalShiftMm / f25.petzvalShiftMm;
      // Image height ratio ~ 2, so shift ratio should be ~ 4 (h^2 dependence)
      // Allow generous tolerance since this is only approximate
      expect(ratio).toBeGreaterThan(2);
      expect(ratio).toBeLessThan(6);
    }
  });

  it("produces Petzval shift in same direction as tangential/sagittal shifts for a converging system", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    // Converging system should have positive petzvalSum
    expect(L.petzvalSum).toBeGreaterThan(0);

    const result = computeFieldCurvature(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(result).not.toBeNull();

    // Check the 50% field — all three curves should shift in the same direction
    const f50 = result!.fields.find((f) => f.fieldFraction === 0.5);
    expect(f50).toBeDefined();
    expect(f50!.usable).toBe(true);

    // For a converging system with inward Petzval curvature, the Petzval surface and the
    // T/S field curves should all shift in the same direction at off-axis fields.
    // The Petzval shift sign must agree with the tangential shift sign.
    const pShift = f50!.petzvalShiftMm;
    const tShift = f50!.tangentialShiftMm;
    // All three should have the same sign for a typical converging system
    expect(Math.sign(pShift)).toBe(Math.sign(tShift));
    // Petzval shift should be non-trivially negative (toward lens) for a converging system
    expect(pShift).toBeLessThan(-0.01);
  });

  it("produces astigmatic difference as S minus T (signed convention)", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const result = computeFieldCurvature(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(result).not.toBeNull();

    const offAxisFields = result!.fields.filter((f) => f.usable && f.fieldFraction > 0);
    for (const field of offAxisFields) {
      const expected = field.sagittalBestFocusZ - field.tangentialBestFocusZ;
      expect(field.astigmaticDifferenceMm).toBeCloseTo(expected, 10);
      expect(field.astigmaticDifferenceUm).toBeCloseTo(field.astigmaticDifferenceMm * 1000, 6);
    }
  });

  it("includes diagnostic shifts in sharedFocusShiftHalfRangeMm", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const result = computeFieldCurvature(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(result).not.toBeNull();

    // The shared range should cover all diagnostic shifts
    const allFields = [...result!.fields, ...result!.curveFields].filter((f) => f.usable);
    for (const field of allFields) {
      const diagnosticT = Math.abs(field.diagnosticTangentialShiftMm ?? 0);
      const diagnosticS = Math.abs(field.diagnosticSagittalShiftMm ?? 0);
      expect(result!.sharedFocusShiftHalfRangeMm).toBeGreaterThanOrEqual(diagnosticT - 1e-9);
      expect(result!.sharedFocusShiftHalfRangeMm).toBeGreaterThanOrEqual(diagnosticS - 1e-9);
    }
  });

  it("produces both parabasal and real-ray results at off-axis fields", () => {
    const L = build(ApoLantharRaw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const result = computeFieldCurvature(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(result).not.toBeNull();

    // Off-axis fields should have both parabasal and diagnostic values
    const offAxisFields = result!.fields.filter((f) => f.usable && f.fieldFraction > 0);
    expect(offAxisFields.length).toBeGreaterThan(0);
    for (const field of offAxisFields) {
      expect(isFinite(field.tangentialShiftMm)).toBe(true);
      expect(isFinite(field.sagittalShiftMm)).toBe(true);
      // Diagnostic values should be present (may be undefined only if tracing fails)
      if (field.diagnosticTangentialShiftMm !== undefined) {
        expect(isFinite(field.diagnosticTangentialShiftMm)).toBe(true);
        expect(isFinite(field.diagnosticSagittalShiftMm!)).toBe(true);
      }
    }
  });

  it("computes non-null chromatic field shifts for a dispersive lens", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const result = computeFieldCurvature(L, zPos, 0, 0, currentEPSD, currentPhysStopSD, true);
    expect(result).not.toBeNull();
    expect(result!.chromaticFocusSpreadMm).not.toBeNull();
    expect(result!.chromaticFocusSpreadMm).toBeGreaterThan(0);

    // At least one usable off-axis field should have chromatic shifts
    const usableFields = result!.fields.filter((f) => f.usable && f.fieldFraction > 0);
    expect(usableFields.length).toBeGreaterThan(0);
    const withShifts = usableFields.filter((f) => f.chromaticFieldShifts !== null);
    expect(withShifts.length).toBeGreaterThan(0);

    // R and B should have different tangential shifts at off-axis fields
    for (const field of withShifts) {
      const rShift = field.chromaticFieldShifts!.find((s) => s.channel === "R");
      const bShift = field.chromaticFieldShifts!.find((s) => s.channel === "B");
      expect(rShift).toBeDefined();
      expect(bShift).toBeDefined();
      expect(rShift!.tangentialShiftMm).not.toBeCloseTo(bShift!.tangentialShiftMm, 4);
    }
  });

  it("returns null chromatic data when chromatic flag is false", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const result = computeFieldCurvature(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(result).not.toBeNull();
    expect(result!.chromaticFocusSpreadMm).toBeNull();
    for (const field of result!.fields) {
      expect(field.chromaticFieldShifts).toBeNull();
    }
  });

  it("includes all three channels (R, G, B) in chromatic shifts", () => {
    const L = build(ApoLantharRaw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const result = computeFieldCurvature(L, zPos, 0, 0, currentEPSD, currentPhysStopSD, true);
    expect(result).not.toBeNull();

    const usableFields = result!.fields.filter((f) => f.usable && f.chromaticFieldShifts !== null);
    for (const field of usableFields) {
      const channels = field.chromaticFieldShifts!.map((s) => s.channel);
      expect(channels).toEqual(["R", "G", "B"]);
    }
  });
});

describe("entrancePupilAtState", () => {
  it("scales linearly with the physical stop at a fixed optical state", () => {
    const L = build(NikkorZ70200Raw);

    const wideOpen = entrancePupilAtState(L.stopPhysSD, 0, 1, L);
    const halfStop = entrancePupilAtState(L.stopPhysSD * 0.5, 0, 1, L);

    expect(halfStop.epSD).toBeCloseTo(wideOpen.epSD * 0.5, 6);
  });

  it("changes with focus on a floating-focus design", () => {
    const L = build(NikonAF28f14DRaw);

    const atInfinity = entrancePupilAtState(L.stopPhysSD, 0, 0, L);
    const atCloseFocus = entrancePupilAtState(L.stopPhysSD, 0.8, 0, L);

    expect(Math.abs(atCloseFocus.epSD - atInfinity.epSD)).toBeGreaterThan(1e-4);
    expect(Math.abs(atCloseFocus.epSD - epAtZoom(0, L))).toBeGreaterThan(1e-4);
  });
});
