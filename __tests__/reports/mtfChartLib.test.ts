/**
 * Unit tests for the MTF chart regression report's helpers. The report runs only through `npm run generate:reports`
 * with MTF_CHART_REPORT=1; these checks stay in `npm test`.
 */
import { afterEach, describe, expect, it, vi } from "vitest";
import { readFileSync } from "node:fs";
import {
  chartDeltas,
  correctedSinceAudit,
  crossCheckConfiguration,
  renderCrossCheckPass,
  parseChartAnchors,
  stoppedDownCrossCheck,
} from "../../reports/mtfChartLib.js";
import type { CrossCheckPass } from "../../reports/mtfChartLib.js";
import * as mtf from "../../src/optics/mtf.js";
import { prepareRuntimeState, stopSemiDiameterForFNumber } from "../../src/optics/optics.js";
import { buildSimplePositiveElementLens } from "../src/optics/testLensFixtures.js";
import type { MtfOptions, MtfResult } from "../../src/types/mtf.js";
import { buildFixtureLens as buildLens, constructionFixtureData } from "../src/optics/constructionFixtures.js";
import type { LensData, SourceErratum } from "../../src/types/optics.js";
import { FIXTURE_PAIRS } from "../src/optics/prescription/ingestV2Fixtures.js";

/** A corrected erratum on the prime fixture's surface "1", whose radius both twins carry as 50. */
const CORRECTED: SourceErratum = {
  status: "corrected",
  surface: "1",
  field: "R",
  printed: 5,
  applied: 50,
  evidence: ["source-summary", "claims"],
  note: "The table prints 5; the summary and the claims give 50.",
};

describe("MTF chart report helpers", () => {
  afterEach(() => vi.restoreAllMocks());

  it("exposes opposite directional errors even when the pair midpoint agrees", () => {
    const anchor = { pairMin: 0.6, pairMax: 0.8 };
    const split = chartDeltas({ sagittal: 0.9, tangential: 0.5 }, anchor);
    expect(split.midpoint).toBeCloseTo(0, 12);
    expect(split.separation).toBeCloseTo(0.2, 12);
    expect(split.sagittal).toBeNull();
    expect(split.tangential).toBeNull();
    expect(chartDeltas({ sagittal: 0.5, tangential: 0.9 }, anchor)).toEqual(split);
    expect(chartDeltas({ sagittal: 0.7, tangential: 0.7 }, anchor).separation).toBeCloseTo(-0.2, 12);
    expect(chartDeltas({ sagittal: 0.6, tangential: 0.8 }, anchor).separation).toBe(0);
  });

  it("preserves the existing anchors and accepts optional assignments and chart provenance", () => {
    const csv = readFileSync("reports/data/mtfChartAnchors.csv", "utf8");
    const anchors = parseChartAnchors(csv);
    expect(anchors).toHaveLength(392);
    expect(anchors.every((anchor) => anchor.assigned === undefined)).toBe(true);
    const [header, first] = csv.trim().split("\n");
    const extendedHeader =
      header + ",manufacturer_sagittal,manufacturer_meridional,assignment_confidence,chart_stated_aperture";
    expect(parseChartAnchors(`${extendedHeader}\n${first},,,,`)).toEqual([anchors[0]]);
    const [assigned] = parseChartAnchors(`${extendedHeader}\n${first},0.8,0.6,high,"f/1.8, wide open"`);
    expect(assigned).toMatchObject({
      assigned: { sagittal: 0.8, tangential: 0.6 },
      assignmentConfidence: "high",
      statedAperture: "f/1.8, wide open",
      recorded: anchors[0].recorded,
    });
    const deltas = chartDeltas({ sagittal: 0.9, tangential: 0.5 }, assigned);
    expect(deltas.sagittal).toBeCloseTo(0.1, 12);
    expect(deltas.tangential).toBeCloseTo(-0.1, 12);
    const [partial] = parseChartAnchors(`${extendedHeader}\n${first},0,,low,`);
    expect(chartDeltas({ sagittal: 0.1, tangential: 0.5 }, partial)).toMatchObject({
      sagittal: 0.1,
      tangential: null,
    });
    expect(() => parseChartAnchors(`${extendedHeader}\n${first},invalid,,,`)).toThrow("not a number");
    expect(() => parseChartAnchors(`${extendedHeader}\n${first},0.8,0.6,certain,`)).toThrow("assignment_confidence");
  });

  it("reads a corrected source erratum from a V2 file as from its V1 twin", () => {
    const prime = FIXTURE_PAIRS.find((pair) => pair.family === "prime");
    if (prime?.kind !== "lens") throw new Error("the prime fixture pair is missing");
    /* The test fixture adapter converts V1 explicitly before invoking app construction. */
    const built = (file: object) => buildLens(file as LensData);
    expect(correctedSinceAudit(built(prime.v1))).toBe(false);
    expect(correctedSinceAudit(built(prime.v2))).toBe(false);
    expect(correctedSinceAudit(built({ ...prime.v1, sourceErrata: [CORRECTED] }))).toBe(true);
    expect(correctedSinceAudit(built({ ...prime.v2, source: { ...prime.v2.source, errata: [CORRECTED] } }))).toBe(true);
  });

  it("counts every field, gates all wavelengths before evaluating OTFs, and retains complex differences", () => {
    const state = prepareRuntimeState(buildSimplePositiveElementLens(), 0, 0);
    const options: MtfOptions = {
      method: "diffraction",
      spectrum: "reference",
      focus: "best-axial",
      pupilSemiDiameterMm: 3,
      stopSemiDiameterMm: 3,
      fieldFractions: [0, 0.2, 0.4, 0.6, 0.8, 1],
    };
    const support = {
      available: true,
      spectralLines: [
        { wavelengthNm: 500, weight: 1 },
        { wavelengthNm: 600, weight: 2 },
      ],
    } as ReturnType<typeof mtf.assessMtfSupport>;
    vi.spyOn(mtf, "assessMtfSupport").mockReturnValue(support);
    vi.spyOn(mtf, "prepareMtfFieldLaunch").mockReturnValue({ aim: {} } as NonNullable<
      ReturnType<typeof mtf.prepareMtfFieldLaunch>
    >);
    vi.spyOn(mtf, "traceMtfStopBundle").mockReturnValue({
      chief: { x: 0, y: 0, weight: 1 },
      rays: [{ weight: 1 }],
    } as NonNullable<ReturnType<typeof mtf.traceMtfStopBundle>>);
    vi.spyOn(mtf, "mtfWaveLattice").mockReturnValue({} as NonNullable<ReturnType<typeof mtf.mtfWaveLattice>>);
    const steps = [0.1, 0.2, 0.25, 0.8, Infinity, 0.1, 0.25, 0.25];
    vi.spyOn(mtf, "waveLatticePhaseStep").mockImplementation(() => steps.shift()!);
    const real = { real: [0.5, 0.5, 0.5], imaginary: [0, 0, 0] };
    const imaginary = { real: [0, 0, 0], imaginary: [0.5, 0.5, 0.5] };
    vi.spyOn(mtf, "shearedOtf").mockReturnValue({
      sagittal: real,
      tangential: real,
      limit: { sagittal: [], tangential: [] },
      straddling: [],
    });
    const wave = vi.spyOn(mtf, "waveLatticeOtf").mockReturnValue({ sagittal: imaginary, tangential: imaginary });
    const result = {
      focus: { appliedShiftMm: 0 },
      fields: [0, 1, 2, 3, null].map((fieldAngleDeg) => ({ fieldAngleDeg })),
    } as unknown as MtfResult;
    const check = crossCheckConfiguration(state, options, result);
    expect(check).toMatchObject({
      compared: 1,
      undersampled: 2,
      nonInvertible: 1,
      untraced: 2,
      largestStep: 0.2,
      largestExcludedStep: Infinity,
      largestUndersampledStep: 0.8,
    });
    expect(check.gaps).toEqual(Array(6).fill(0));
    // Equal magnitudes hide a quarter-turn phase discrepancy: |0.5 - 0.5i| = sqrt(0.5).
    expect(check.complexGaps).toHaveLength(6);
    check.complexGaps.forEach((gap) => expect(gap).toBeCloseTo(Math.SQRT1_2, 12));
    expect(wave).toHaveBeenCalledTimes(2);
    expect(wave.mock.calls.every((call) => call[2].join() === "10,30,50")).toBe(true);
    expect(steps).toEqual([]);

    vi.mocked(mtf.assessMtfSupport).mockReturnValue({ ...support, available: false });
    expect(crossCheckConfiguration(state, options, { ...result, fields: [] })).toMatchObject({
      compared: 0,
      undersampled: 0,
      nonInvertible: 0,
      untraced: 6,
      gaps: [],
      complexGaps: [],
    });
  });

  it("prints exclusions and totals even when no field is checked", () => {
    const pass: CrossCheckPass = {
      fNumber: 8,
      focusShiftMm: null,
      check: {
        compared: 0,
        undersampled: 2,
        nonInvertible: 1,
        untraced: 3,
        largestStep: 0,
        largestExcludedStep: Infinity,
        largestUndersampledStep: 0.75,
        gaps: [],
        complexGaps: [],
      },
    };
    const lines = renderCrossCheckPass("Stopped down", [
      { key: "synthetic-a", zoomT: 0, pass },
      { key: "synthetic-b", zoomT: 1, pass },
    ]);
    expect(lines.join("\n")).toContain("Fields excluded (not checked)");
    expect(lines).toContain(
      "| `synthetic-a` | 0 | 8.00 | n/a | 0 | 6 | 2 | 0.750 | 1 | 3 | infinity | n/a | 0 | n/a | n/a | n/a | 0 |",
    );
    expect(lines).toContain(
      "| **Total** | — | — | — | 0 | 12 | 4 | 0.750 | 2 | 6 | infinity | n/a | 0 | n/a | n/a | n/a | 0 |",
    );
  });

  it.each([
    { wideOpen: 2, minimumAperture: 16, expected: 8 },
    { wideOpen: 2, minimumAperture: 5.6, expected: 5.6 },
    { wideOpen: 11, minimumAperture: 22, expected: 11 },
  ])("sizes the stopped-down pass to the attainable f-number $expected", ({ wideOpen, minimumAperture, expected }) => {
    const lens = buildSimplePositiveElementLens();
    // Only the aperture range is varied; the optical geometry stays synthetic and fixed.
    const ranged = buildLens({ ...constructionFixtureData(lens), nominalFno: wideOpen, maxFstop: minimumAperture });
    const state = prepareRuntimeState(ranged, 0, 0);
    const result = { fields: [], focus: { appliedShiftMm: 0.012 } } as unknown as MtfResult;
    const compute = vi.spyOn(mtf, "computeMtfSteps").mockImplementation(function* () {
      yield result;
      throw new Error("The cross-check must not run an adaptive field sweep");
    });
    vi.spyOn(mtf, "assessMtfSupport").mockReturnValue({ available: false } as ReturnType<typeof mtf.assessMtfSupport>);
    const pass = stoppedDownCrossCheck(ranged, 0, state, {
      method: "diffraction",
      spectrum: "photopic",
      focus: "best-axial",
      stopSemiDiameterMm: 3,
      pupilSemiDiameterMm: 6,
      fieldFractions: [0, 1],
    });
    expect(pass.fNumber).toBeCloseTo(expected, 12);
    expect(pass.focusShiftMm).toBe(0.012);
    expect(pass.check.untraced).toBe(2);
    const options = compute.mock.calls[0][1];
    expect(compute).toHaveBeenCalledTimes(1);
    const aperture = compute.mock.calls[0][0].aperture;
    expect(aperture.stopSemiDiameterMm).toBeCloseTo(stopSemiDiameterForFNumber(expected, 0, ranged), 12);
    expect(aperture.entrancePupilSemiDiameterMm).toBe(aperture.stopSemiDiameterMm * 2);
    expect(options.fieldFractions).toEqual([0, 1]);
    expect(options.focus).toBe("best-axial");
  });
});
