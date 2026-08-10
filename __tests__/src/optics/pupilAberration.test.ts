/**
 * Pupil aberration profile tests.
 *
 * The entrance-pupil (EP) and exit-pupil (XP) describe blocks are the canonical
 * owners of structure/metadata/on-axis/zoom coverage. computeBothPupilAberrationProfiles
 * replicates (rather than delegates to) the two standalone loops, so its coverage
 * rides on the agreement describe below: it proves both.ep / both.xp match the
 * standalone functions field-by-field on a prime and a zoom (wide + tele ends) at
 * a non-default sampleCount. Those behaviors are therefore not re-asserted on the
 * combined pass; only Both-specific behavior (its own sampleCount clamp, its
 * precomputed-geometry shortcut, current-state baselines, folded fixtures) is.
 */
import { describe, it, expect } from "vitest";
import {
  computePupilAberrationProfile,
  computeExitPupilAberrationProfile,
  computeBothPupilAberrationProfiles,
  PUPIL_ABERRATION_SAMPLE_COUNT,
} from "../../../src/optics/pupilAberration.js";
import { computeAnalysisFieldGeometryAtState } from "../../../src/optics/optics.js";
import MinoltaAF100MacroRaw from "../../../src/lens-data/minolta/MinoltaAF100mmf28Macro.data.js";
import ReferenceAnnularObscuredMirrorRaw from "../../../src/lens-data/reference/ReferenceAnnularObscuredMirror.data.js";
import ReferenceCassegrainBackFocusRaw from "../../../src/lens-data/reference/ReferenceCassegrainBackFocus.data.js";
import ReferenceGregorianSecondaryRaw from "../../../src/lens-data/reference/ReferenceGregorianSecondary.data.js";
import ReferenceMaksutovCassegrainMeniscusRaw from "../../../src/lens-data/reference/ReferenceMaksutovCassegrainMeniscus.data.js";
import ReferenceNewtonianSideFocusRaw from "../../../src/lens-data/reference/ReferenceNewtonianSideFocus.data.js";
import { build, sharedNikkorZ70200, sharedSonnar50f15 } from "./testLensFixtures.js";

type Lens = ReturnType<typeof sharedSonnar50f15>;

describe("pupil aberration profiles — sampleCount handling", () => {
  // Each entry maps a sampleCount argument to the sample arrays the function produced,
  // so one test covers default/custom/clamp behavior for all three entry points
  // (computeBothPupilAberrationProfiles has its own clamp, not covered by agreement).
  const sampleCountCases = [
    [
      "computePupilAberrationProfile",
      (L: Lens, sampleCount?: number) => [computePupilAberrationProfile(0, 0, L, sampleCount).samples],
    ],
    [
      "computeExitPupilAberrationProfile",
      (L: Lens, sampleCount?: number) => [computeExitPupilAberrationProfile(0, 0, L, sampleCount).samples],
    ],
    [
      "computeBothPupilAberrationProfiles",
      (L: Lens, sampleCount?: number) => {
        const both = computeBothPupilAberrationProfiles(0, 0, L, sampleCount);
        return [both.ep.samples, both.xp.samples];
      },
    ],
  ] as const;

  it.each(sampleCountCases)("%s defaults, honors custom counts, and clamps to a minimum of 2", (_name, samplesFor) => {
    const L = sharedSonnar50f15();
    for (const samples of samplesFor(L)) expect(samples).toHaveLength(PUPIL_ABERRATION_SAMPLE_COUNT);
    for (const samples of samplesFor(L, 5)) expect(samples).toHaveLength(5);
    for (const samples of samplesFor(L, 17)) expect(samples).toHaveLength(17);
    for (const samples of samplesFor(L, 1)) expect(samples).toHaveLength(2);
    for (const samples of samplesFor(L, 0)) expect(samples).toHaveLength(2);
  });
});

// ─── Entrance Pupil Aberration ────────────────────────────────────────────────

describe("computePupilAberrationProfile — structure", () => {
  it("field samples run monotonically from 0 to 1 (fieldFrac) and 0 to halfFieldDeg (fieldDeg)", () => {
    const L = sharedSonnar50f15();
    const { samples, halfFieldDeg } = computePupilAberrationProfile(0, 0, L);
    expect(samples[0].fieldFrac).toBe(0);
    expect(samples[0].fieldDeg).toBe(0);
    expect(samples[samples.length - 1].fieldFrac).toBe(1);
    expect(samples[samples.length - 1].fieldDeg).toBeCloseTo(halfFieldDeg, 10);
    for (let i = 1; i < samples.length; i++) {
      expect(samples[i].fieldFrac).toBeGreaterThan(samples[i - 1].fieldFrac);
      expect(samples[i].fieldDeg).toBeGreaterThan(samples[i - 1].fieldDeg);
    }
  });

  it("all chiefRayCorrection values are finite and positive and all epShiftMm values are finite", () => {
    const L = sharedSonnar50f15();
    const { samples } = computePupilAberrationProfile(0, 0, L);
    for (const s of samples) {
      expect(isFinite(s.chiefRayCorrection)).toBe(true);
      expect(s.chiefRayCorrection).toBeGreaterThan(0);
      expect(isFinite(s.epShiftMm)).toBe(true);
    }
  });
});

describe("computePupilAberrationProfile — on-axis sample", () => {
  it("has chiefRayCorrection = 1 (paraxial regime) and epShiftMm = 0", () => {
    const L = sharedSonnar50f15();
    const { samples } = computePupilAberrationProfile(0, 0, L);
    expect(samples[0].fieldDeg).toBe(0);
    expect(samples[0].chiefRayCorrection).toBe(1);
    expect(samples[0].epShiftMm).toBe(0);
  });
});

describe("computePupilAberrationProfile — profile metadata", () => {
  it("reports the paraxial EP baseline, a positive half-field, and maxAbsShiftMm = max |epShiftMm|", () => {
    const L = sharedSonnar50f15();
    const profile = computePupilAberrationProfile(0, 0, L);
    expect(profile.paraxialEpZRelStop).toBeCloseTo(L.epZRelStop, 10);
    expect(profile.halfFieldDeg).toBeGreaterThan(0);
    const expected = Math.max(...profile.samples.map((s) => Math.abs(s.epShiftMm)));
    expect(profile.maxAbsShiftMm).toBeCloseTo(expected, 10);
    expect(profile.maxAbsShiftMm).toBeGreaterThanOrEqual(0);
  });
});

describe("computePupilAberrationProfile — pre-computed geometry shortcut", () => {
  it("produces the same result when geometry is pre-computed vs derived internally", () => {
    const L = sharedSonnar50f15();
    const geom = computeAnalysisFieldGeometryAtState(0, 0, L);
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
  it("returns valid profiles at both zoom ends, with a narrower half-field at the tele end", () => {
    const L = sharedNikkorZ70200();
    const wide = computePupilAberrationProfile(0, 0, L);
    const tele = computePupilAberrationProfile(0, 1, L);
    for (const profile of [wide, tele]) {
      expect(profile.samples).toHaveLength(PUPIL_ABERRATION_SAMPLE_COUNT);
      expect(profile.halfFieldDeg).toBeGreaterThan(0);
      expect(isFinite(profile.paraxialEpZRelStop)).toBe(true);
    }
    expect(tele.halfFieldDeg).toBeLessThan(wide.halfFieldDeg);
  });

  it("on-axis sample always has correction=1 and shift=0 regardless of zoom", () => {
    const L = sharedNikkorZ70200();
    for (const zoomT of [0, 0.5, 1]) {
      const { samples } = computePupilAberrationProfile(0, zoomT, L);
      expect(samples[0].chiefRayCorrection).toBe(1);
      expect(samples[0].epShiftMm).toBe(0);
    }
  });
});

// ─── Exit Pupil Aberration ────────────────────────────────────────────────────

describe("computeExitPupilAberrationProfile — structure", () => {
  it("field samples run monotonically from 0 to 1 (fieldFrac) and 0 to halfFieldDeg (fieldDeg)", () => {
    const L = sharedSonnar50f15();
    const { samples, halfFieldDeg } = computeExitPupilAberrationProfile(0, 0, L);
    expect(samples[0].fieldFrac).toBe(0);
    expect(samples[0].fieldDeg).toBe(0);
    expect(samples[samples.length - 1].fieldFrac).toBe(1);
    expect(samples[samples.length - 1].fieldDeg).toBeCloseTo(halfFieldDeg, 10);
    for (let i = 1; i < samples.length; i++) {
      expect(samples[i].fieldFrac).toBeGreaterThan(samples[i - 1].fieldFrac);
      expect(samples[i].fieldDeg).toBeGreaterThan(samples[i - 1].fieldDeg);
    }
  });

  it("all xpZRelLastSurf and xpShiftMm values are finite", () => {
    const L = sharedSonnar50f15();
    const { samples } = computeExitPupilAberrationProfile(0, 0, L);
    for (const s of samples) {
      expect(isFinite(s.xpZRelLastSurf)).toBe(true);
      expect(isFinite(s.xpShiftMm)).toBe(true);
    }
  });
});

describe("computeExitPupilAberrationProfile — on-axis sample", () => {
  it("has xpShiftMm = 0 and xpZRelLastSurf equal to the paraxial baseline", () => {
    const L = sharedSonnar50f15();
    const profile = computeExitPupilAberrationProfile(0, 0, L);
    expect(profile.samples[0].fieldDeg).toBe(0);
    expect(profile.samples[0].xpShiftMm).toBe(0);
    expect(profile.samples[0].xpZRelLastSurf).toBe(profile.paraxialXpZRelLastSurf);
  });
});

describe("computeExitPupilAberrationProfile — profile metadata", () => {
  it("reports the paraxial XP baseline, a positive half-field, and maxAbsShiftMm = max |xpShiftMm|", () => {
    const L = sharedSonnar50f15();
    const profile = computeExitPupilAberrationProfile(0, 0, L);
    expect(profile.paraxialXpZRelLastSurf).toBeCloseTo(L.xpZRelLastSurf, 10);
    expect(profile.halfFieldDeg).toBeGreaterThan(0);
    const expected = Math.max(...profile.samples.map((s) => Math.abs(s.xpShiftMm)));
    expect(profile.maxAbsShiftMm).toBeCloseTo(expected, 10);
    expect(profile.maxAbsShiftMm).toBeGreaterThanOrEqual(0);
  });
});

describe("computeExitPupilAberrationProfile — pre-computed geometry shortcut", () => {
  it("produces the same result when geometry is pre-computed vs derived internally", () => {
    const L = sharedSonnar50f15();
    const geom = computeAnalysisFieldGeometryAtState(0, 0, L);
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
  it("returns valid profiles at both zoom ends", () => {
    const L = sharedNikkorZ70200();
    for (const zoomT of [0, 1]) {
      const profile = computeExitPupilAberrationProfile(0, zoomT, L);
      expect(profile.samples).toHaveLength(PUPIL_ABERRATION_SAMPLE_COUNT);
      expect(profile.halfFieldDeg).toBeGreaterThan(0);
      expect(isFinite(profile.paraxialXpZRelLastSurf)).toBe(true);
    }
  });

  it("on-axis sample always has xpShiftMm = 0 regardless of zoom", () => {
    const L = sharedNikkorZ70200();
    for (const zoomT of [0, 0.5, 1]) {
      const { samples } = computeExitPupilAberrationProfile(0, zoomT, L);
      expect(samples[0].xpShiftMm).toBe(0);
    }
  });
});

// ─── Both Profiles ────────────────────────────────────────────────────────────

describe("computeBothPupilAberrationProfiles — agreement with separate functions", () => {
  const agreementCases = [
    ["Sonnar 50mm f/1.5 prime", sharedSonnar50f15, 0],
    ["Nikkor Z 70-200 zoom at the wide end", sharedNikkorZ70200, 0],
    ["Nikkor Z 70-200 zoom at the tele end", sharedNikkorZ70200, 1],
  ] as const;
  const sampleCount = 9; // deliberately non-default (PUPIL_ABERRATION_SAMPLE_COUNT is 17)

  it.each(agreementCases)(
    "matches the standalone EP/XP profiles field-by-field for the %s",
    (_label, makeLens, zoomT) => {
      const L = makeLens();
      const both = computeBothPupilAberrationProfiles(0, zoomT, L, sampleCount);
      const ep = computePupilAberrationProfile(0, zoomT, L, sampleCount);
      const xp = computeExitPupilAberrationProfile(0, zoomT, L, sampleCount);

      // Top-level convenience fields are exact mirrors of the nested profile fields.
      expect(both.halfFieldDeg).toBe(both.ep.halfFieldDeg);
      expect(both.halfFieldDeg).toBe(both.xp.halfFieldDeg);
      expect(both.halfFieldDeg).toBeGreaterThan(0);
      expect(both.maxAbsEpShiftMm).toBe(both.ep.maxAbsShiftMm);
      expect(both.maxAbsXpShiftMm).toBe(both.xp.maxAbsShiftMm);

      // On-axis samples degenerate exactly as in the standalone functions.
      expect(both.ep.samples[0].chiefRayCorrection).toBe(1);
      expect(both.ep.samples[0].epShiftMm).toBe(0);
      expect(both.xp.samples[0].xpShiftMm).toBe(0);

      // EP profile agreement.
      expect(both.ep.samples).toHaveLength(ep.samples.length);
      expect(both.ep.paraxialEpZRelStop).toBeCloseTo(ep.paraxialEpZRelStop, 10);
      expect(both.ep.halfFieldDeg).toBeCloseTo(ep.halfFieldDeg, 10);
      expect(both.ep.maxAbsShiftMm).toBeCloseTo(ep.maxAbsShiftMm, 8);
      for (let i = 0; i < ep.samples.length; i++) {
        expect(both.ep.samples[i].fieldFrac).toBe(ep.samples[i].fieldFrac);
        expect(both.ep.samples[i].fieldDeg).toBeCloseTo(ep.samples[i].fieldDeg, 10);
        expect(both.ep.samples[i].chiefRayCorrection).toBeCloseTo(ep.samples[i].chiefRayCorrection, 8);
        expect(both.ep.samples[i].epShiftMm).toBeCloseTo(ep.samples[i].epShiftMm, 8);
      }

      // XP profile agreement.
      expect(both.xp.samples).toHaveLength(xp.samples.length);
      expect(both.xp.paraxialXpZRelLastSurf).toBeCloseTo(xp.paraxialXpZRelLastSurf, 10);
      expect(both.xp.halfFieldDeg).toBeCloseTo(xp.halfFieldDeg, 10);
      expect(both.xp.maxAbsShiftMm).toBeCloseTo(xp.maxAbsShiftMm, 8);
      for (let i = 0; i < xp.samples.length; i++) {
        expect(both.xp.samples[i].fieldFrac).toBe(xp.samples[i].fieldFrac);
        expect(both.xp.samples[i].fieldDeg).toBeCloseTo(xp.samples[i].fieldDeg, 10);
        expect(both.xp.samples[i].xpZRelLastSurf).toBeCloseTo(xp.samples[i].xpZRelLastSurf, 8);
        expect(both.xp.samples[i].xpShiftMm).toBeCloseTo(xp.samples[i].xpShiftMm, 8);
      }
    },
  );
});

describe("computeBothPupilAberrationProfiles — pre-computed geometry shortcut", () => {
  it("keeps the combined EP/XP profile identical with precomputed geometry", () => {
    const L = sharedSonnar50f15();
    const geom = computeAnalysisFieldGeometryAtState(0.25, 0, L);
    expect(computeBothPupilAberrationProfiles(0.25, 0, L, PUPIL_ABERRATION_SAMPLE_COUNT, geom)).toEqual(
      computeBothPupilAberrationProfiles(0.25, 0, L),
    );
  });
});

describe("computeBothPupilAberrationProfiles — current-state pupil baselines", () => {
  it("updates pupil baselines at close focus for a floating-focus macro lens", () => {
    const L = build(MinoltaAF100MacroRaw);
    const infinity = computeBothPupilAberrationProfiles(0, 0, L);
    const close = computeBothPupilAberrationProfiles(1, 0, L);

    expect(infinity.ep.paraxialEpZRelStop).toBeCloseTo(L.epZRelStop, 10);
    expect(infinity.xp.paraxialXpZRelLastSurf).toBeCloseTo(L.xpZRelLastSurf, 10);
    expect(close.ep.paraxialEpZRelStop).not.toBeCloseTo(infinity.ep.paraxialEpZRelStop, 3);
    expect(close.xp.paraxialXpZRelLastSurf).not.toBeCloseTo(infinity.xp.paraxialXpZRelLastSurf, 3);
  });
});

describe("computeBothPupilAberrationProfiles — folded fixtures", () => {
  const foldedFixtures = [
    ["annular obscured mirror", ReferenceAnnularObscuredMirrorRaw],
    ["cassegrain back focus", ReferenceCassegrainBackFocusRaw],
    ["gregorian secondary", ReferenceGregorianSecondaryRaw],
    ["maksutov cassegrain meniscus", ReferenceMaksutovCassegrainMeniscusRaw],
    ["newtonian side focus", ReferenceNewtonianSideFocusRaw],
  ] as const;

  it.each(foldedFixtures)("computes finite folded pupil profiles for %s", (_label, raw) => {
    const L = build(raw);
    expect(L.isFoldedOptics).toBe(true);

    const profiles = computeBothPupilAberrationProfiles(0, 0, L, 5);

    expect(profiles.ep.samples).toHaveLength(5);
    expect(profiles.xp.samples).toHaveLength(5);
    expect(profiles.halfFieldDeg).toBeGreaterThan(0);
    expect(Number.isFinite(profiles.maxAbsEpShiftMm)).toBe(true);
    expect(Number.isFinite(profiles.maxAbsXpShiftMm)).toBe(true);

    for (const sample of profiles.ep.samples) {
      expect(Number.isFinite(sample.fieldDeg)).toBe(true);
      expect(Number.isFinite(sample.chiefRayCorrection)).toBe(true);
      expect(Number.isFinite(sample.epShiftMm)).toBe(true);
    }
    for (const sample of profiles.xp.samples) {
      expect(Number.isFinite(sample.fieldDeg)).toBe(true);
      expect(Number.isFinite(sample.xpShiftMm)).toBe(true);
    }
  });
});
