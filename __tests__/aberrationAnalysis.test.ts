import { describe, it, expect } from "vitest";
import { computeSphericalAberration } from "../src/optics/aberrationAnalysis.js";
import { doLayout, epAtZoom, fopenAtZoom } from "../src/optics/optics.js";
import buildLens from "../src/optics/buildLens.js";
import LENS_DEFAULTS from "../src/lens-data/defaults.js";
import ApoLantharRaw from "../src/lens-data/VoigtlanderApoLanthar50f2.data.js";
import Sonnar50f15Raw from "../src/lens-data/ZeissSonnar50f15.data.js";
import NikkorZ70200Raw from "../src/lens-data/NikonNikkorZ70200f28.data.js";
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
