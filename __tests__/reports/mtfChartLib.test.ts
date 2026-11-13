/**
 * Unit tests for the MTF chart regression report's helpers. The report runs only through `npm run generate:reports`
 * with MTF_CHART_REPORT=1 for tracing, or without it for freshness; these checks stay in `npm test`.
 */
import { afterEach, describe, expect, it, vi } from "vitest";
import { mkdirSync, mkdtempSync, readFileSync, renameSync, rmSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { cwd, execPath } from "node:process";
import { format } from "prettier";
import {
  createMtfChartProvenance,
  hashMtfChartInputs,
  hashMtfEngineSources,
  MTF_CHART_ANCHORS_PATH,
  MTF_CHART_CONVENTIONS_PATH,
  mtfChartStatus,
  parseMtfChartProvenance,
  updateMtfChartStatus,
} from "../../reports/mtfChartProvenance.js";
import type { MtfChartProvenance } from "../../reports/mtfChartProvenance.js";
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

describe("MTF chart provenance", () => {
  const roots: string[] = [];
  const fixture = () => {
    const root = mkdtempSync(join(tmpdir(), "mtf-chart-provenance-"));
    roots.push(root);
    for (const directory of ["src/optics/nested", "src/lens-data", "reports/data"])
      mkdirSync(join(root, directory), { recursive: true });
    writeFileSync(join(root, "src/optics/z.ts"), "z\r\n");
    writeFileSync(join(root, "src/optics/nested/a.ts"), "a\n");
    writeFileSync(join(root, "src/optics/ignored.js"), "ignored");
    writeFileSync(join(root, MTF_CHART_ANCHORS_PATH), "anchors");
    writeFileSync(join(root, MTF_CHART_CONVENTIONS_PATH), "conventions");
    writeFileSync(join(root, "src/lens-data/a.data.ts"), "lens a");
    return root;
  };
  afterEach(() => {
    for (const root of roots.splice(0)) rmSync(root, { recursive: true, force: true });
    vi.useRealTimers();
  });

  it("hashes sorted paths and exact bytes, including nested sources, under plain Node", () => {
    const root = fixture();
    // Independent framing control catches order changes, newline conversion and omitted barrels.
    const expected = createHash("sha256").update("src/optics/nested/a.ts\0a\n\0src/optics/z.ts\0z\r\n\0").digest("hex");
    expect(hashMtfEngineSources(root)).toBe(expected);
    const moduleUrl = pathToFileURL(resolve("reports/mtfChartProvenance.ts")).href;
    const output = execFileSync(
      execPath,
      [
        "--input-type=module",
        "-e",
        `import { hashMtfEngineSources } from ${JSON.stringify(moduleUrl)};
       process.stdout.write(hashMtfEngineSources(${JSON.stringify(root)}));`,
      ],
      { encoding: "utf8" },
    );
    expect(output).toBe(expected);
    writeFileSync(join(root, "src/optics/ignored.js"), "still ignored");
    expect(hashMtfEngineSources(root)).toBe(expected);
    renameSync(join(root, "src/optics/z.ts"), join(root, "src/optics/b.ts"));
    expect(hashMtfEngineSources(root)).not.toBe(expected);
    const renamed = hashMtfEngineSources(root);
    writeFileSync(join(root, "src/optics/b.ts"), "changed");
    expect(hashMtfEngineSources(root)).not.toBe(renamed);
    const changed = hashMtfEngineSources(root);
    writeFileSync(join(root, "src/optics/empty.ts"), "");
    expect(hashMtfEngineSources(root)).not.toBe(changed);
    rmSync(join(root, "src/optics/empty.ts"));
    expect(hashMtfEngineSources(root)).toBe(changed);
  });

  it("records UTC checkout provenance and round-trips the fenced JSON while changing only status", async () => {
    const root = fixture();
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-01-02T00:30:00Z"));
    const hashes = hashMtfChartInputs(root, ["src/lens-data/a.data.ts"]);
    const settings = { focus: "best-axial", maxGridSize: 256, frequenciesPerMm: [0, 10, 30] };
    const stamp = createMtfChartProvenance(cwd(), hashes, settings);
    expect(stamp).toMatchObject({ version: 1, generatedDateUtc: "2026-01-02", hashes, settings });
    expect(stamp.gitCommit).toMatch(/^[a-f0-9]{40,64}$/);
    expect(typeof stamp.uncommittedSrcOrReports).toBe("boolean");
    const report = `# Chart\n\nStatus: current\n\n## Provenance\n\n\`\`\`json\n${JSON.stringify(stamp, null, 2)}\n\`\`\`\n\n## Results\n\nUnchanged.\n`;
    expect(parseMtfChartProvenance(report)).toEqual(stamp);
    expect(parseMtfChartProvenance(report.replaceAll("\n", "\r\n"))).toEqual(stamp);
    const formatted = await format(report, { parser: "markdown" });
    expect(parseMtfChartProvenance(formatted)).toEqual(stamp);
    expect(formatted).toContain("\nStatus: current\n");
    expect(mtfChartStatus(stamp, hashes)).toBe("Status: current");
    const status = "Status: STALE — engine sources";
    const updated = updateMtfChartStatus(report, status);
    expect(updated).toBe(report.replace("Status: current", status));
    expect(parseMtfChartProvenance(updated)).toEqual(stamp);
    expect(updateMtfChartStatus(updated, status)).toBe(updated);
    expect(updateMtfChartStatus(updated, "Status: current")).toBe(report);
  });

  it("names every changed input, counts missing lenses and rejects absent or malformed stamps", () => {
    const root = fixture();
    const paths = ["src/lens-data/a.data.ts"];
    const hashes = hashMtfChartInputs(root, paths);
    expect(hashes.anchors).toBe(createHash("sha256").update("anchors").digest("hex"));
    expect(hashes.conventions).toBe(createHash("sha256").update("conventions").digest("hex"));
    expect(hashes.lensFiles[paths[0]]).toBe(createHash("sha256").update("lens a").digest("hex"));
    const stamp: MtfChartProvenance = {
      version: 1,
      generatedDateUtc: "2026-01-02",
      gitCommit: "abc",
      uncommittedSrcOrReports: false,
      settings: {},
      hashes,
    };
    writeFileSync(join(root, "src/optics/z.ts"), "new engine");
    writeFileSync(join(root, MTF_CHART_ANCHORS_PATH), "new anchors");
    writeFileSync(join(root, MTF_CHART_CONVENTIONS_PATH), "new conventions");
    writeFileSync(join(root, paths[0]), "new lens");
    const current = hashMtfChartInputs(root, paths);
    expect(mtfChartStatus(stamp, current)).toBe(
      "Status: STALE — engine sources / anchors / conventions / 1 lens files",
    );
    rmSync(join(root, paths[0]));
    expect(hashMtfChartInputs(root, paths).lensFiles[paths[0]]).toBeNull();
    expect(mtfChartStatus(stamp, hashMtfChartInputs(root, paths))).toBe(mtfChartStatus(stamp, current));
    const twoLenses = { ...current, lensFiles: { ...current.lensFiles, "src/lens-data/b.data.ts": "new" } };
    expect(mtfChartStatus(stamp, twoLenses)).toContain("2 lens files");
    const legacy = "# Chart\n\nFrozen results.\n";
    expect(parseMtfChartProvenance(legacy)).toBeNull();
    const status = mtfChartStatus(null, current);
    expect(status).toBe("Status: STALE — generated before provenance was recorded");
    expect(updateMtfChartStatus(legacy, status)).toBe(`# Chart\n\n${status}\n\nFrozen results.\n`);
    for (const json of ["{", "null", "{}", JSON.stringify({ ...stamp, hashes: { ...hashes, lensFiles: [] } })])
      expect(parseMtfChartProvenance(`## Provenance\n\n\`\`\`json\n${json}\n\`\`\``)).toBeNull();
  });
});
