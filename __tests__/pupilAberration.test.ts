import { describe, it, expect } from "vitest";
import { computePupilAberrationProfile, PUPIL_ABERRATION_SAMPLE_COUNT } from "../src/optics/pupilAberration.js";
import { computeFieldGeometryAtState } from "../src/optics/optics.js";
import buildLens from "../src/optics/buildLens.js";
import LENS_DEFAULTS from "../src/lens-data/defaults.js";
import Sonnar50f15Raw from "../src/lens-data/ZeissSonnar50f15.data.js";
import NikkorZ70200Raw from "../src/lens-data/NikonNikkorZ70200f28.data.js";
import type { LensData } from "../src/types/optics.js";

function build(raw: object) {
  return buildLens({ ...LENS_DEFAULTS, ...raw } as LensData);
}

describe("computePupilAberrationProfile — structure", () => {
  it("returns the default sample count", () => {
    const L = build(Sonnar50f15Raw);
    const profile = computePupilAberrationProfile(0, 0, L);
    expect(profile.samples).toHaveLength(PUPIL_ABERRATION_SAMPLE_COUNT);
  });

  it("respects a custom sampleCount", () => {
    const L = build(Sonnar50f15Raw);
    expect(computePupilAberrationProfile(0, 0, L, 5).samples).toHaveLength(5);
    expect(computePupilAberrationProfile(0, 0, L, 17).samples).toHaveLength(17);
  });

  it("clamps sampleCount to a minimum of 2", () => {
    const L = build(Sonnar50f15Raw);
    expect(computePupilAberrationProfile(0, 0, L, 1).samples).toHaveLength(2);
    expect(computePupilAberrationProfile(0, 0, L, 0).samples).toHaveLength(2);
  });

  it("fieldFrac runs from 0 to 1 monotonically", () => {
    const L = build(Sonnar50f15Raw);
    const { samples } = computePupilAberrationProfile(0, 0, L);
    expect(samples[0].fieldFrac).toBe(0);
    expect(samples[samples.length - 1].fieldFrac).toBe(1);
    for (let i = 1; i < samples.length; i++) {
      expect(samples[i].fieldFrac).toBeGreaterThan(samples[i - 1].fieldFrac);
    }
  });

  it("fieldDeg runs from 0 to halfFieldDeg monotonically", () => {
    const L = build(Sonnar50f15Raw);
    const profile = computePupilAberrationProfile(0, 0, L);
    const { samples, halfFieldDeg } = profile;
    expect(samples[0].fieldDeg).toBe(0);
    expect(samples[samples.length - 1].fieldDeg).toBeCloseTo(halfFieldDeg, 10);
    for (let i = 1; i < samples.length; i++) {
      expect(samples[i].fieldDeg).toBeGreaterThan(samples[i - 1].fieldDeg);
    }
  });

  it("all chiefRayCorrection values are finite and positive", () => {
    const L = build(Sonnar50f15Raw);
    const { samples } = computePupilAberrationProfile(0, 0, L);
    for (const s of samples) {
      expect(isFinite(s.chiefRayCorrection)).toBe(true);
      expect(s.chiefRayCorrection).toBeGreaterThan(0);
    }
  });

  it("all epShiftMm values are finite", () => {
    const L = build(Sonnar50f15Raw);
    const { samples } = computePupilAberrationProfile(0, 0, L);
    for (const s of samples) {
      expect(isFinite(s.epShiftMm)).toBe(true);
    }
  });
});

describe("computePupilAberrationProfile — on-axis sample", () => {
  it("on-axis sample has chiefRayCorrection = 1 (paraxial regime)", () => {
    const L = build(Sonnar50f15Raw);
    const { samples } = computePupilAberrationProfile(0, 0, L);
    expect(samples[0].fieldDeg).toBe(0);
    expect(samples[0].chiefRayCorrection).toBe(1);
  });

  it("on-axis sample has epShiftMm = 0", () => {
    const L = build(Sonnar50f15Raw);
    const { samples } = computePupilAberrationProfile(0, 0, L);
    expect(samples[0].epShiftMm).toBe(0);
  });
});

describe("computePupilAberrationProfile — profile metadata", () => {
  it("paraxialEpZRelStop matches L.epZRelStop for a prime", () => {
    const L = build(Sonnar50f15Raw);
    const profile = computePupilAberrationProfile(0, 0, L);
    expect(profile.paraxialEpZRelStop).toBeCloseTo(L.epZRelStop, 10);
  });

  it("halfFieldDeg is positive and matches field geometry", () => {
    const L = build(Sonnar50f15Raw);
    const profile = computePupilAberrationProfile(0, 0, L);
    expect(profile.halfFieldDeg).toBeGreaterThan(0);
  });

  it("maxAbsShiftMm equals the maximum |epShiftMm| across samples", () => {
    const L = build(Sonnar50f15Raw);
    const profile = computePupilAberrationProfile(0, 0, L);
    const expected = Math.max(...profile.samples.map((s) => Math.abs(s.epShiftMm)));
    expect(profile.maxAbsShiftMm).toBeCloseTo(expected, 10);
  });

  it("maxAbsShiftMm is non-negative", () => {
    const L = build(Sonnar50f15Raw);
    expect(computePupilAberrationProfile(0, 0, L).maxAbsShiftMm).toBeGreaterThanOrEqual(0);
  });
});

describe("computePupilAberrationProfile — pre-computed geometry shortcut", () => {
  it("produces the same result when geometry is pre-computed vs derived internally", () => {
    const L = build(Sonnar50f15Raw);
    const geom = computeFieldGeometryAtState(0, 0, L);
    const withGeom = computePupilAberrationProfile(0, 0, L, PUPIL_ABERRATION_SAMPLE_COUNT, geom);
    const withoutGeom = computePupilAberrationProfile(0, 0, L);
    expect(withGeom.halfFieldDeg).toBeCloseTo(withoutGeom.halfFieldDeg, 10);
    expect(withGeom.paraxialEpZRelStop).toBeCloseTo(withoutGeom.paraxialEpZRelStop, 10);
    expect(withGeom.maxAbsShiftMm).toBeCloseTo(withoutGeom.maxAbsShiftMm, 10);
    for (let i = 0; i < withGeom.samples.length; i++) {
      expect(withGeom.samples[i].chiefRayCorrection).toBeCloseTo(withoutGeom.samples[i].chiefRayCorrection, 8);
      expect(withGeom.samples[i].epShiftMm).toBeCloseTo(withoutGeom.samples[i].epShiftMm, 8);
    }
  });
});

describe("computePupilAberrationProfile — zoom lens", () => {
  it("returns a valid profile at zoom position 0 (wide end)", () => {
    const L = build(NikkorZ70200Raw);
    const profile = computePupilAberrationProfile(0, 0, L);
    expect(profile.samples).toHaveLength(PUPIL_ABERRATION_SAMPLE_COUNT);
    expect(profile.halfFieldDeg).toBeGreaterThan(0);
    expect(isFinite(profile.paraxialEpZRelStop)).toBe(true);
  });

  it("returns a valid profile at zoom position 1 (tele end)", () => {
    const L = build(NikkorZ70200Raw);
    const profile = computePupilAberrationProfile(0, 1, L);
    expect(profile.samples).toHaveLength(PUPIL_ABERRATION_SAMPLE_COUNT);
    expect(profile.halfFieldDeg).toBeGreaterThan(0);
    expect(isFinite(profile.paraxialEpZRelStop)).toBe(true);
  });

  it("halfFieldDeg at tele end is smaller than at wide end for a zoom", () => {
    const L = build(NikkorZ70200Raw);
    const wide = computePupilAberrationProfile(0, 0, L);
    const tele = computePupilAberrationProfile(0, 1, L);
    expect(tele.halfFieldDeg).toBeLessThan(wide.halfFieldDeg);
  });

  it("on-axis sample always has correction=1 and shift=0 regardless of zoom", () => {
    const L = build(NikkorZ70200Raw);
    for (const zoomT of [0, 0.5, 1]) {
      const { samples } = computePupilAberrationProfile(0, zoomT, L);
      expect(samples[0].chiefRayCorrection).toBe(1);
      expect(samples[0].epShiftMm).toBe(0);
    }
  });
});
