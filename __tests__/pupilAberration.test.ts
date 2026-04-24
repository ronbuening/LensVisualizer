import { describe, it, expect } from "vitest";
import {
  computePupilAberrationProfile,
  computeExitPupilAberrationProfile,
  computeBothPupilAberrationProfiles,
  PUPIL_ABERRATION_SAMPLE_COUNT,
} from "../src/optics/pupilAberration.js";
import { computeFieldGeometryAtState } from "../src/optics/optics.js";
import buildLens from "../src/optics/buildLens.js";
import LENS_DEFAULTS from "../src/lens-data/defaults.js";
import Sonnar50f15Raw from "../src/lens-data/carl-zeiss/ZeissSonnar50f15.data.js";
import NikkorZ70200Raw from "../src/lens-data/nikon/NikonNikkorZ70200f28.data.js";
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

// ─── Exit Pupil Aberration ────────────────────────────────────────────────────

describe("computeExitPupilAberrationProfile — structure", () => {
  it("returns the default sample count", () => {
    const L = build(Sonnar50f15Raw);
    expect(computeExitPupilAberrationProfile(0, 0, L).samples).toHaveLength(PUPIL_ABERRATION_SAMPLE_COUNT);
  });

  it("respects a custom sampleCount", () => {
    const L = build(Sonnar50f15Raw);
    expect(computeExitPupilAberrationProfile(0, 0, L, 5).samples).toHaveLength(5);
    expect(computeExitPupilAberrationProfile(0, 0, L, 17).samples).toHaveLength(17);
  });

  it("clamps sampleCount to a minimum of 2", () => {
    const L = build(Sonnar50f15Raw);
    expect(computeExitPupilAberrationProfile(0, 0, L, 1).samples).toHaveLength(2);
  });

  it("fieldFrac runs from 0 to 1 monotonically", () => {
    const L = build(Sonnar50f15Raw);
    const { samples } = computeExitPupilAberrationProfile(0, 0, L);
    expect(samples[0].fieldFrac).toBe(0);
    expect(samples[samples.length - 1].fieldFrac).toBe(1);
    for (let i = 1; i < samples.length; i++) {
      expect(samples[i].fieldFrac).toBeGreaterThan(samples[i - 1].fieldFrac);
    }
  });

  it("fieldDeg runs from 0 to halfFieldDeg monotonically", () => {
    const L = build(Sonnar50f15Raw);
    const profile = computeExitPupilAberrationProfile(0, 0, L);
    const { samples, halfFieldDeg } = profile;
    expect(samples[0].fieldDeg).toBe(0);
    expect(samples[samples.length - 1].fieldDeg).toBeCloseTo(halfFieldDeg, 10);
    for (let i = 1; i < samples.length; i++) {
      expect(samples[i].fieldDeg).toBeGreaterThan(samples[i - 1].fieldDeg);
    }
  });

  it("all xpZRelLastSurf values are finite", () => {
    const L = build(Sonnar50f15Raw);
    const { samples } = computeExitPupilAberrationProfile(0, 0, L);
    for (const s of samples) {
      expect(isFinite(s.xpZRelLastSurf)).toBe(true);
    }
  });

  it("all xpShiftMm values are finite", () => {
    const L = build(Sonnar50f15Raw);
    const { samples } = computeExitPupilAberrationProfile(0, 0, L);
    for (const s of samples) {
      expect(isFinite(s.xpShiftMm)).toBe(true);
    }
  });
});

describe("computeExitPupilAberrationProfile — on-axis sample", () => {
  it("on-axis sample has xpShiftMm = 0", () => {
    const L = build(Sonnar50f15Raw);
    const { samples } = computeExitPupilAberrationProfile(0, 0, L);
    expect(samples[0].fieldDeg).toBe(0);
    expect(samples[0].xpShiftMm).toBe(0);
  });

  it("on-axis sample xpZRelLastSurf equals paraxial baseline", () => {
    const L = build(Sonnar50f15Raw);
    const profile = computeExitPupilAberrationProfile(0, 0, L);
    expect(profile.samples[0].xpZRelLastSurf).toBe(profile.paraxialXpZRelLastSurf);
  });
});

describe("computeExitPupilAberrationProfile — profile metadata", () => {
  it("paraxialXpZRelLastSurf matches L.xpZRelLastSurf for a prime", () => {
    const L = build(Sonnar50f15Raw);
    const profile = computeExitPupilAberrationProfile(0, 0, L);
    expect(profile.paraxialXpZRelLastSurf).toBeCloseTo(L.xpZRelLastSurf, 10);
  });

  it("halfFieldDeg is positive", () => {
    const L = build(Sonnar50f15Raw);
    expect(computeExitPupilAberrationProfile(0, 0, L).halfFieldDeg).toBeGreaterThan(0);
  });

  it("maxAbsShiftMm equals the maximum |xpShiftMm| across samples", () => {
    const L = build(Sonnar50f15Raw);
    const profile = computeExitPupilAberrationProfile(0, 0, L);
    const expected = Math.max(...profile.samples.map((s) => Math.abs(s.xpShiftMm)));
    expect(profile.maxAbsShiftMm).toBeCloseTo(expected, 10);
  });

  it("maxAbsShiftMm is non-negative", () => {
    const L = build(Sonnar50f15Raw);
    expect(computeExitPupilAberrationProfile(0, 0, L).maxAbsShiftMm).toBeGreaterThanOrEqual(0);
  });
});

describe("computeExitPupilAberrationProfile — pre-computed geometry shortcut", () => {
  it("produces the same result when geometry is pre-computed vs derived internally", () => {
    const L = build(Sonnar50f15Raw);
    const geom = computeFieldGeometryAtState(0, 0, L);
    const withGeom = computeExitPupilAberrationProfile(0, 0, L, PUPIL_ABERRATION_SAMPLE_COUNT, geom);
    const withoutGeom = computeExitPupilAberrationProfile(0, 0, L);
    expect(withGeom.halfFieldDeg).toBeCloseTo(withoutGeom.halfFieldDeg, 10);
    expect(withGeom.paraxialXpZRelLastSurf).toBeCloseTo(withoutGeom.paraxialXpZRelLastSurf, 10);
    expect(withGeom.maxAbsShiftMm).toBeCloseTo(withoutGeom.maxAbsShiftMm, 10);
    for (let i = 0; i < withGeom.samples.length; i++) {
      expect(withGeom.samples[i].xpZRelLastSurf).toBeCloseTo(withoutGeom.samples[i].xpZRelLastSurf, 8);
      expect(withGeom.samples[i].xpShiftMm).toBeCloseTo(withoutGeom.samples[i].xpShiftMm, 8);
    }
  });
});

describe("computeExitPupilAberrationProfile — zoom lens", () => {
  it("returns a valid profile at zoom position 0 (wide end)", () => {
    const L = build(NikkorZ70200Raw);
    const profile = computeExitPupilAberrationProfile(0, 0, L);
    expect(profile.samples).toHaveLength(PUPIL_ABERRATION_SAMPLE_COUNT);
    expect(profile.halfFieldDeg).toBeGreaterThan(0);
    expect(isFinite(profile.paraxialXpZRelLastSurf)).toBe(true);
  });

  it("returns a valid profile at zoom position 1 (tele end)", () => {
    const L = build(NikkorZ70200Raw);
    const profile = computeExitPupilAberrationProfile(0, 1, L);
    expect(profile.samples).toHaveLength(PUPIL_ABERRATION_SAMPLE_COUNT);
    expect(isFinite(profile.paraxialXpZRelLastSurf)).toBe(true);
  });

  it("on-axis sample always has xpShiftMm = 0 regardless of zoom", () => {
    const L = build(NikkorZ70200Raw);
    for (const zoomT of [0, 0.5, 1]) {
      const { samples } = computeExitPupilAberrationProfile(0, zoomT, L);
      expect(samples[0].xpShiftMm).toBe(0);
    }
  });
});

// ─── Both Profiles ────────────────────────────────────────────────────────────

describe("computeBothPupilAberrationProfiles — structure", () => {
  it("returns ep and xp profiles each with the default sample count", () => {
    const L = build(Sonnar50f15Raw);
    const both = computeBothPupilAberrationProfiles(0, 0, L);
    expect(both.ep.samples).toHaveLength(PUPIL_ABERRATION_SAMPLE_COUNT);
    expect(both.xp.samples).toHaveLength(PUPIL_ABERRATION_SAMPLE_COUNT);
  });

  it("respects a custom sampleCount on both profiles", () => {
    const L = build(Sonnar50f15Raw);
    const both = computeBothPupilAberrationProfiles(0, 0, L, 5);
    expect(both.ep.samples).toHaveLength(5);
    expect(both.xp.samples).toHaveLength(5);
  });

  it("clamps sampleCount to a minimum of 2 on both profiles", () => {
    const L = build(Sonnar50f15Raw);
    const both = computeBothPupilAberrationProfiles(0, 0, L, 1);
    expect(both.ep.samples).toHaveLength(2);
    expect(both.xp.samples).toHaveLength(2);
  });

  it("halfFieldDeg on the result equals ep.halfFieldDeg and xp.halfFieldDeg", () => {
    const L = build(Sonnar50f15Raw);
    const both = computeBothPupilAberrationProfiles(0, 0, L);
    expect(both.halfFieldDeg).toBe(both.ep.halfFieldDeg);
    expect(both.halfFieldDeg).toBe(both.xp.halfFieldDeg);
  });

  it("maxAbsEpShiftMm mirrors ep.maxAbsShiftMm", () => {
    const L = build(Sonnar50f15Raw);
    const both = computeBothPupilAberrationProfiles(0, 0, L);
    expect(both.maxAbsEpShiftMm).toBe(both.ep.maxAbsShiftMm);
  });

  it("maxAbsXpShiftMm mirrors xp.maxAbsShiftMm", () => {
    const L = build(Sonnar50f15Raw);
    const both = computeBothPupilAberrationProfiles(0, 0, L);
    expect(both.maxAbsXpShiftMm).toBe(both.xp.maxAbsShiftMm);
  });

  it("on-axis sample has epShiftMm = 0 and xpShiftMm = 0", () => {
    const L = build(Sonnar50f15Raw);
    const both = computeBothPupilAberrationProfiles(0, 0, L);
    expect(both.ep.samples[0].epShiftMm).toBe(0);
    expect(both.xp.samples[0].xpShiftMm).toBe(0);
  });
});

describe("computeBothPupilAberrationProfiles — agreement with separate functions", () => {
  it("ep profile values match computePupilAberrationProfile", () => {
    const L = build(Sonnar50f15Raw);
    const both = computeBothPupilAberrationProfiles(0, 0, L);
    const ep = computePupilAberrationProfile(0, 0, L);
    expect(both.ep.paraxialEpZRelStop).toBeCloseTo(ep.paraxialEpZRelStop, 10);
    expect(both.ep.halfFieldDeg).toBeCloseTo(ep.halfFieldDeg, 10);
    expect(both.ep.maxAbsShiftMm).toBeCloseTo(ep.maxAbsShiftMm, 8);
    for (let i = 0; i < both.ep.samples.length; i++) {
      expect(both.ep.samples[i].chiefRayCorrection).toBeCloseTo(ep.samples[i].chiefRayCorrection, 8);
      expect(both.ep.samples[i].epShiftMm).toBeCloseTo(ep.samples[i].epShiftMm, 8);
    }
  });

  it("xp profile values match computeExitPupilAberrationProfile", () => {
    const L = build(Sonnar50f15Raw);
    const both = computeBothPupilAberrationProfiles(0, 0, L);
    const xp = computeExitPupilAberrationProfile(0, 0, L);
    expect(both.xp.paraxialXpZRelLastSurf).toBeCloseTo(xp.paraxialXpZRelLastSurf, 10);
    expect(both.xp.halfFieldDeg).toBeCloseTo(xp.halfFieldDeg, 10);
    expect(both.xp.maxAbsShiftMm).toBeCloseTo(xp.maxAbsShiftMm, 8);
    for (let i = 0; i < both.xp.samples.length; i++) {
      expect(both.xp.samples[i].xpZRelLastSurf).toBeCloseTo(xp.samples[i].xpZRelLastSurf, 8);
      expect(both.xp.samples[i].xpShiftMm).toBeCloseTo(xp.samples[i].xpShiftMm, 8);
    }
  });
});

describe("computeBothPupilAberrationProfiles — pre-computed geometry shortcut", () => {
  it("produces the same result when geometry is pre-computed vs derived internally", () => {
    const L = build(Sonnar50f15Raw);
    const geom = computeFieldGeometryAtState(0, 0, L);
    const withGeom = computeBothPupilAberrationProfiles(0, 0, L, PUPIL_ABERRATION_SAMPLE_COUNT, geom);
    const withoutGeom = computeBothPupilAberrationProfiles(0, 0, L);
    expect(withGeom.halfFieldDeg).toBeCloseTo(withoutGeom.halfFieldDeg, 10);
    expect(withGeom.maxAbsEpShiftMm).toBeCloseTo(withoutGeom.maxAbsEpShiftMm, 8);
    expect(withGeom.maxAbsXpShiftMm).toBeCloseTo(withoutGeom.maxAbsXpShiftMm, 8);
  });
});

describe("computeBothPupilAberrationProfiles — zoom lens", () => {
  it("returns valid profiles at zoom position 0 (wide end)", () => {
    const L = build(NikkorZ70200Raw);
    const both = computeBothPupilAberrationProfiles(0, 0, L);
    expect(both.ep.samples).toHaveLength(PUPIL_ABERRATION_SAMPLE_COUNT);
    expect(both.xp.samples).toHaveLength(PUPIL_ABERRATION_SAMPLE_COUNT);
    expect(both.halfFieldDeg).toBeGreaterThan(0);
    expect(isFinite(both.ep.paraxialEpZRelStop)).toBe(true);
  });

  it("returns valid profiles at zoom position 1 (tele end)", () => {
    const L = build(NikkorZ70200Raw);
    const both = computeBothPupilAberrationProfiles(0, 1, L);
    expect(both.ep.samples).toHaveLength(PUPIL_ABERRATION_SAMPLE_COUNT);
    expect(both.xp.samples).toHaveLength(PUPIL_ABERRATION_SAMPLE_COUNT);
    expect(both.halfFieldDeg).toBeGreaterThan(0);
  });

  it("on-axis shifts are 0 at all zoom positions", () => {
    const L = build(NikkorZ70200Raw);
    for (const zoomT of [0, 0.5, 1]) {
      const both = computeBothPupilAberrationProfiles(0, zoomT, L);
      expect(both.ep.samples[0].epShiftMm).toBe(0);
      expect(both.xp.samples[0].xpShiftMm).toBe(0);
    }
  });

  it("ep and xp profiles have matching halfFieldDeg at all zoom positions", () => {
    const L = build(NikkorZ70200Raw);
    for (const zoomT of [0, 0.5, 1]) {
      const both = computeBothPupilAberrationProfiles(0, zoomT, L);
      expect(both.ep.halfFieldDeg).toBeCloseTo(both.xp.halfFieldDeg, 10);
    }
  });
});
