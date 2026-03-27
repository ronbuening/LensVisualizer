import { describe, it, expect } from "vitest";
import {
  LEGACY_NEAR_AXIS_REAL_FRAC,
  MERIDIONAL_COMA_SAMPLE_COUNT,
  computeMeridionalComa,
  computeSphericalAberration,
  computeSAProfile,
} from "../src/optics/aberrationAnalysis.js";
import {
  doLayout,
  entrancePupilAtState,
  epAtZoom,
  fopenAtZoom,
  traceParaxialRay,
  traceRay,
} from "../src/optics/optics.js";
import buildLens from "../src/optics/buildLens.js";
import LENS_DEFAULTS from "../src/lens-data/defaults.js";
import ApoLantharRaw from "../src/lens-data/VoigtlanderApoLanthar50f2.data.js";
import Sonnar50f15Raw from "../src/lens-data/ZeissSonnar50f15.data.js";
import NikkorZ70200Raw from "../src/lens-data/NikonNikkorZ70200f28.data.js";
import NikonAF28f14DRaw from "../src/lens-data/NikonAF28f14D.data.js";
import type { RuntimeLens, LensData } from "../src/types/optics.js";

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

function axialIntercept(y: number, u: number, lastSurfZ: number): number {
  return lastSurfZ - y / u;
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
    expect(isFinite(result!.saUm)).toBe(true);
    expect(isFinite(result!.saMm)).toBe(true);
    expect(isFinite(result!.realIntercept)).toBe(true);
    expect(isFinite(result!.paraxialIntercept)).toBe(true);
  });

  it("returns a finite SA result for ApoLanthar 50/2 at infinity focus", () => {
    const L = build(ApoLantharRaw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const result = computeSphericalAberration(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(result).not.toBeNull();
    expect(isFinite(result!.saUm)).toBe(true);
  });

  /* ── µm conversion consistency ── */

  it("saUm equals saMm × 1000", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const result = computeSphericalAberration(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(result).not.toBeNull();
    expect(result!.saUm).toBeCloseTo(result!.saMm * 1000, 6);
  });

  /* ── Sign convention: simple positive lens groups are undercorrected ── */

  it("Sonnar 50/1.5 wide open shows non-zero SA", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const result = computeSphericalAberration(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(result).not.toBeNull();
    /* Fast lens should have measurable SA */
    expect(Math.abs(result!.saUm)).toBeGreaterThan(1);
  });

  it("simple positive element reports negative SA for undercorrected spherical aberration", () => {
    const L = mkSingleElement();
    const zPos = [0, 5];

    const result = computeSphericalAberration(L, zPos, 0, 0, 12, 15);
    expect(result).not.toBeNull();
    expect(result!.saMm).toBeLessThan(0);
  });

  it("uses a true paraxial reference instead of a near-axis real ray on fast lenses", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD } = apertureAt(L, 0, 0);
    const lastSurfZ = zPos[L.N - 1];

    const legacyRay = traceRay(LEGACY_NEAR_AXIS_REAL_FRAC * currentEPSD, 0, zPos, 0, 0, undefined, true, L);
    expect(legacyRay.clipped).toBe(false);
    const legacyIntercept = axialIntercept(legacyRay.y, legacyRay.u, lastSurfZ);

    const paraxialRay = traceParaxialRay(1, 0, 0, 0, L);
    const paraxialIntercept = axialIntercept(paraxialRay.y, paraxialRay.u, lastSurfZ);

    expect(Math.abs(paraxialIntercept - legacyIntercept)).toBeGreaterThan(1e-6);
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
    expect(Math.abs(saStopped!.saUm)).toBeLessThan(Math.abs(saWide!.saUm));
  });

  /* ── SA updates with focus change ── */

  it("returns a result at close focus", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0.5, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const result = computeSphericalAberration(L, zPos, 0.5, 0, currentEPSD, currentPhysStopSD);
    expect(result).not.toBeNull();
    expect(isFinite(result!.saUm)).toBe(true);
  });

  /* ── Zoom lens support ── */

  it("returns a result for zoom lens (Nikkor Z 70-200/2.8) at tele end", () => {
    const L = build(NikkorZ70200Raw);
    const { z: zPos } = doLayout(0, 1, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 1, 0);

    const result = computeSphericalAberration(L, zPos, 0, 1, currentEPSD, currentPhysStopSD);
    expect(result).not.toBeNull();
    expect(isFinite(result!.saUm)).toBe(true);
  });

  /* ── Symmetry: +Y and −Y averaging ── */

  it("real and paraxial intercepts are distinct (non-trivial SA)", () => {
    const L = build(ApoLantharRaw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const result = computeSphericalAberration(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(result).not.toBeNull();
    /* For a real lens wide open, the intercepts should differ measurably */
    expect(Math.abs(result!.realIntercept - result!.paraxialIntercept)).toBeGreaterThan(1e-6);
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

  it("all saMm values are finite", () => {
    const L = build(ApoLantharRaw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const profile = computeSAProfile(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    for (const { saMm } of profile) {
      expect(isFinite(saMm)).toBe(true);
    }
  });

  it("inner zones have less SA than outer zones (monotone for undercorrected lens)", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

    const profile = computeSAProfile(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(profile.length).toBeGreaterThan(1);
    /* Sonnar 50/1.5 is undercorrected: SA grows in magnitude toward the marginal zone */
    const innerAbs = Math.abs(profile[0].saMm);
    const outerAbs = Math.abs(profile[profile.length - 1].saMm);
    expect(outerAbs).toBeGreaterThan(innerAbs);
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
