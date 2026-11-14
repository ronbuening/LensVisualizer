/**
 * Loader-contract smoke test for the audit scripts.
 *
 * audit:image-circle and audit:patent-figure import `.ts` sources from plain
 * Node, which only works through the ts-js-specifier hook. This runs the real
 * npm entry against one known lens so a hook or specifier regression fails
 * here with the actual command line, not deep inside a manual audit session.
 *
 * Each audit reads V2 and refuses its archived V1 twin with the conversion command.
 */
import { execFileSync } from "node:child_process";
import { chmodSync, existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, relative, resolve } from "node:path";
import { env, execPath } from "node:process";
import { afterAll, describe, expect, it } from "vitest";
import { FIXTURE_PAIRS } from "../src/optics/prescription/ingestV2Fixtures.js";

function runNpmScript(script: string, args: string[] = []): string {
  return execFileSync("npm", ["run", script, "--", ...args], {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });
}

function weightingProbe(source: string) {
  return JSON.parse(
    execFileSync(
      execPath,
      [
        "--import",
        resolve("scripts/ts-js-specifier-hook-register.mjs"),
        "--input-type=module",
        "--eval",
        `import { geometricComparison, summarize, weightingDiagnostics } from "./scripts/audit-mtf-weighting.mjs";\n${source}`,
      ],
      { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] },
    ),
  );
}

describe("audit script npm contracts", () => {
  it("measures pupil weighting through the npm hook and emits finite JSON comparisons", () => {
    const output = runNpmScript("audit:mtf-weighting", ["--lens=canon-serenar-50f18", "--grid=16", "--json"]);
    const report = JSON.parse(output.slice(output.indexOf("{")));
    expect(report.grid).toBe(16);
    expect(report.diffractionEstimatorSensitivity).toContain("not a prediction");
    expect(report.diffractionEstimatorSensitivity).toContain("sqrt(F/J)");
    expect(report.diffractionReference).toContain("handles its own Jacobian");
    expect(report.stations).toHaveLength(1);
    expect(report.perLens).toHaveLength(2);
    expect(report.summary.rows).toHaveLength(18);
    expect(report.summary.populations).toMatchObject({ attempted: 6, unavailable: 0 });
    expect(report.summary.populations.clean + report.summary.populations.warned).toBe(6);
    expect(report.diffractionReferenceGate.attempted).toBe(6);
    expect(report.diffractionReferenceGate.passed + report.diffractionReferenceGate.excluded).toBe(6);
    expect(report.diffractionReferenceGate.passed).toBeGreaterThan(0);
    for (const aperture of report.stations[0].apertures) {
      expect(aperture.unavailable).toBeUndefined();
      expect(aperture.fields).toHaveLength(3);
      for (const field of aperture.fields) {
        expect(field.unavailable).toBeUndefined();
        expect(Array.isArray(field.warnings)).toBe(true);
        expect(field).not.toHaveProperty("warning");
        expect(field).not.toHaveProperty("diffraction");
        for (const cut of ["sagittal", "tangential"]) {
          expect(field.geometric.product[cut]).toHaveLength(3);
          field.geometric.product[cut].forEach((value: number, i: number) => {
            expect(value).toBeGreaterThanOrEqual(0);
            expect(value).toBeLessThanOrEqual(1);
            expect(field.geometric.productMinusReferenceMagnitude[cut][i]).toBeCloseTo(
              value - field.geometric.launchPlane[cut][i],
              12,
            );
            expect(Number.isFinite(field.geometric.fluxMinusReferenceMagnitude[cut][i])).toBe(true);
            const otfs = field.geometric.otfs;
            for (const [group, metric] of [
              ["product", "productReferenceComplexGap"],
              ["incidentFlux", "fluxReferenceComplexGap"],
            ]) {
              expect(field.geometric[metric][cut][i]).toBeCloseTo(
                Math.hypot(
                  otfs[group][cut].real[i] - otfs.launchPlane[cut].real[i],
                  otfs[group][cut].imaginary[i] - otfs.launchPlane[cut].imaginary[i],
                ),
                12,
              );
            }
            const sensitivity = field.diffractionEstimatorSensitivity;
            expect(sensitivity.fluxMinusProductMagnitude[cut][i]).toBeCloseTo(
              sensitivity.incidentFlux[cut][i] - sensitivity.product[cut][i],
              12,
            );
            const reference = field.diffractionReference;
            if (reference.gatePassed) {
              expect(reference.phaseStepWaves).toBeLessThan(0.25);
              expect(reference.productEstimatorMinusReferenceMagnitude[cut][i]).toBeCloseTo(
                sensitivity.product[cut][i] - reference.incidentFluxMagnitude[cut][i],
                12,
              );
            } else {
              expect(reference.unavailable).toBeTruthy();
              expect(reference).not.toHaveProperty("productEstimatorMinusReferenceMagnitude");
            }
          });
        }
      }
    }
    expect(report.summary.rows.filter((row: { population: string }) => row.population === "clean")).toHaveLength(9);
  });

  it("retains a phase-only discrepancy that vanishes in MTF magnitudes", () => {
    // Unit phasors have identical MTF; their complex separation is the chord, independent of ray tracing.
    const comparison = weightingProbe(`
      const otf = (re, im) => Object.fromEntries(["sagittal", "tangential"].map(cut => [cut, {real: [re], imaginary: [im]}]));
      console.log(JSON.stringify(geometricComparison({product: otf(0, 1), incidentFlux: otf(0.6, 0.8), launchPlane: otf(1, 0)})));
    `);
    for (const cut of ["sagittal", "tangential"]) {
      expect(comparison.productMinusReferenceMagnitude[cut][0]).toBe(0);
      expect(comparison.fluxMinusReferenceMagnitude[cut][0]).toBe(0);
      expect(comparison.productReferenceComplexGap[cut][0]).toBeCloseTo(Math.SQRT2, 14);
      expect(comparison.fluxReferenceComplexGap[cut][0]).toBeCloseTo(Math.sqrt(0.8), 14);
    }
  });

  it("keeps simultaneous warnings and states the measure of unresolved flux", () => {
    const result = weightingProbe(`
      const stop = {sampling: "stop", rays: [{weight: 3}], failed: 1, unaimed: 0,
        unresolvedInBeam: 1, unresolvedWeight: 1, unresolvedInBeamWeight: 1,
        openBorders: {x: true, y0: false, y1: false}};
      const reference = {...stop, sampling: "launch-plane", objectPoint: [0, 0, -10],
        unresolvedWeight: 2, unresolvedInBeamWeight: 2};
      console.log(JSON.stringify(weightingDiagnostics(stop, reference)));
    `);
    expect(result.warnings).toHaveLength(4);
    expect(result.warnings.join(" ")).toContain("guard band remains open");
    expect(result.warnings.join(" ")).toContain("25.0000%");
    expect(result.warnings.join(" ")).toContain("≤40.0000%");
    expect(result.diagnostics.stop.unresolvedFlux).toMatchObject({
      allShare: 0.25,
      inBeamShare: 0.25,
      upperBound: false,
      basis: "stop-uniform, not incident flux",
    });
    expect(result.diagnostics.launchPlane.unresolvedFlux).toMatchObject({ allShare: 0.4, upperBound: true });
  });

  it("counts unavailable apertures and keeps warned statistics out of clean statistics", () => {
    const result = weightingProbe(`
      const otf = re => Object.fromEntries(["sagittal", "tangential"].map(cut => [cut, {real: [re, re, re], imaginary: [0, 0, 0]}]));
      const geometric = re => geometricComparison({product: otf(re), incidentFlux: otf(1), launchPlane: otf(1)});
      console.log(JSON.stringify(summarize([{label: "synthetic", apertures: [
        {fNumber: 2, fields: [
          {fraction: 0, warnings: [], geometric: geometric(0.8)},
          {fraction: 0.7, warnings: ["unresolved", "open border"], geometric: geometric(0.1)},
          {fraction: 1, warnings: [], unavailable: "no footprint"}]},
        {fNumber: 8, fields: [], unavailable: "no focus"}
      ]}])));
    `);
    expect(result.populations).toMatchObject({ attempted: 6, unavailable: 4, clean: 1, warned: 1 });
    expect(result.populations.unavailableSamples).toHaveLength(4);
    expect(result.populations.unavailableSamples.map((sample: { reason: string }) => sample.reason)).toEqual([
      "no footprint",
      "no focus",
      "no focus",
      "no focus",
    ]);
    for (const row of result.rows) {
      if (row.population === "clean" && row.field === 0) {
        expect(row.samples).toBe(1);
        expect(row.productMagnitude.mean).toBeCloseTo(0.2, 14);
        expect(row.productComplexGap.max).toBeCloseTo(0.2, 14);
      } else if (row.population === "warned" && row.field === 0.7) {
        expect(row.samples).toBe(1);
        expect(row.productMagnitude.mean).toBeCloseTo(0.9, 14);
      } else {
        expect(row.samples).toBe(0);
        expect(row.productMagnitude.max).toBeNull();
        expect(row.productComplexGap.mean).toBeNull();
      }
    }
  });

  it("audits one known lens through the npm entry with the loader hook", () => {
    const output = runNpmScript("audit:image-circle", ["src/lens-data/canon/Canon50mmf12.data.ts"]);

    expect(output).toContain("1 lens checked");
  });

  it("loads audit:patent-figure through its npm entry before validating arguments", () => {
    let failed = false;
    try {
      runNpmScript("audit:patent-figure");
    } catch (error) {
      failed = true;
      const stderr = String((error as { stderr?: string }).stderr);
      expect(stderr).toContain(
        "usage: node --import ./scripts/ts-js-specifier-hook-register.mjs scripts/audit-patent-figure.mjs",
      );
      expect(stderr).not.toContain("ERR_MODULE_NOT_FOUND");
    }
    expect(failed).toBe(true);
  });

  it("rejects an invalid --sd override through the audit:surface npm entry", () => {
    let failed = false;
    try {
      runNpmScript("audit:surface", ["src/lens-data/canon/Canon50mmf12.data.ts", "--sd", "1=-5"]);
    } catch (error) {
      failed = true;
      expect(String((error as { stderr?: string }).stderr)).toContain("finite positive value");
    }
    expect(failed).toBe(true);
  });
});

describe("MTF field census", () => {
  const root = mkdtempSync(join(tmpdir(), "audit-mtf-fields-"));
  const catalog = join(root, "src/lens-data");
  afterAll(() => rmSync(root, { recursive: true, force: true }));

  interface FieldStages {
    structurallyEligible: boolean;
    insideModeledField: boolean;
    curveProduced: boolean;
    converged: boolean;
    fieldFraction: number | null;
    status: string;
    reason: string | null;
    gridSize: number;
    convergedThroughLpMm: number | null;
  }
  interface Census {
    maxGridSize: number;
    focus: string;
    convergenceNote: string;
    fields: Record<string, Record<string, number>>;
    lenses: { key: string; fields: Record<string, FieldStages> }[];
  }

  function census(args: string[] = []): Census {
    return JSON.parse(
      execFileSync(
        "node",
        [
          "--import",
          resolve("scripts/ts-js-specifier-hook-register.mjs"),
          resolve("scripts/audit-mtf.mjs"),
          "--fields",
          "--list",
          ...args,
        ],
        { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] },
      ),
    );
  }

  it("distinguishes support, field extent, curves and convergence on synthetic prescriptions", () => {
    const pair = FIXTURE_PAIRS.find((pair) => pair.family === "prime");
    if (pair?.kind !== "lens") throw new Error("missing prime fixture");
    const prime = pair.v2;
    const diffractive = FIXTURE_PAIRS.find((pair) => pair.family === "diffractive")!.v2;
    mkdirSync(catalog, { recursive: true });
    const fixtures = [
      { ...prime, key: "inside", catalog: { ...prime.catalog, imageCircleMm: 10 } },
      { ...prime, key: "short-field", catalog: { ...prime.catalog, imageCircleMm: 1000 } },
      { ...diffractive, key: "unsupported" },
      {
        ...prime,
        key: "convergent",
        catalog: { imageCircleMm: 10, focalLengthMm: { design: 100 }, fNumber: { design: 10 } },
        // A plano-hyperbolic singlet has zero axial blur at r / (n - 1) = 100 mm.
        elements: prime.elements.map((element) => ({ ...element, nd: 1.5 })),
        surfaces: [
          { label: "STO", R: "flat", d: 1 },
          { label: "1", R: "flat", d: 5, sd: 15, medium: 1 },
          { label: "2", R: -50, d: 100, sd: 15, asphere: { K: -2.25 } },
        ],
        aperture: { nominalFNumber: 10, fStops: [10] },
      },
    ];
    for (const fixture of fixtures)
      writeFileSync(join(catalog, `${fixture.key}.data.ts`), `export default ${JSON.stringify(fixture)};\n`);

    // A traced corner can produce an unconverged curve; an extent check alone cannot establish either stage.
    const report = census();
    expect(report.maxGridSize).toBe(32);
    expect(report.focus).toBe("design");
    expect(report.convergenceNote).toContain("product tab refines to 256");
    const [convergent, inside, short, unsupported] = report.lenses;
    expect(convergent.fields.center).toMatchObject({ curveProduced: true, converged: true, status: "converged" });
    expect(inside.fields.corner).toMatchObject({
      structurallyEligible: true,
      insideModeledField: true,
      curveProduced: true,
      converged: false,
      fieldFraction: 1,
      status: "unconverged",
      reason: null,
      gridSize: 32,
    });
    expect(inside.fields.corner.convergedThroughLpMm).toSatisfy(
      (value: number | null) => value === null || Number.isFinite(value),
    );
    expect(short.fields.corner).toMatchObject({
      structurallyEligible: true,
      insideModeledField: false,
      curveProduced: false,
      converged: false,
      fieldFraction: 1,
      status: "unavailable",
      reason: "outside-modeled-field",
      gridSize: 0,
      convergedThroughLpMm: null,
    });
    expect(short.fields.edge.insideModeledField).toBe(true);
    expect(unsupported.fields.center).toMatchObject({
      structurallyEligible: false,
      insideModeledField: false,
      curveProduced: false,
      converged: false,
      status: "unavailable",
      reason: "unsupported-path",
      gridSize: 0,
      convergedThroughLpMm: null,
    });
    for (const [position, totals] of Object.entries(report.fields))
      for (const stage of ["structurallyEligible", "insideModeledField", "curveProduced", "converged"] as const)
        expect(totals[stage]).toBe(report.lenses.filter((lens) => lens.fields[position][stage]).length);

    const finer = census(["--grid=64", "--limit=2"]);
    expect(finer.maxGridSize).toBe(64);
    expect(finer.lenses[1].fields.corner.gridSize).toBe(64);
    for (const cap of [128, 256]) expect(census([`--grid=${cap}`, "--limit=0"]).maxGridSize).toBe(cap);
    expect(census(["--grid=48", "--limit=0"]).maxGridSize).toBe(32);
    // The census never edits its catalog inputs.
    for (const fixture of fixtures)
      expect(readFileSync(join(catalog, `${fixture.key}.data.ts`), "utf8")).toBe(
        `export default ${JSON.stringify(fixture)};\n`,
      );
  });
});

describe("MTF spectral blocker census", () => {
  const root = mkdtempSync(join(tmpdir(), "audit-mtf-blockers-"));
  afterAll(() => rmSync(root, { recursive: true, force: true }));

  it("counts all blockers, overlapping classes, upgrade leverage and estimated elements without editing inputs", () => {
    const primePair = FIXTURE_PAIRS.find((pair) => pair.family === "prime");
    const embeddedPair = FIXTURE_PAIRS.find((pair) => pair.family === "stop inside an element");
    if (primePair?.kind !== "lens" || embeddedPair?.kind !== "lens") throw new Error("missing prime fixtures");
    const prime = { ...primePair.v2, elements: primePair.v2.elements.map((e) => ({ ...e, glass: undefined })) };
    const embedded = embeddedPair.v2;
    const high = { ...embedded.elements[0], nd: 1.497, vd: 81.6, glass: "Unresolved high glass" };
    const fixtures = [
      {
        ...embedded,
        key: "a-multi",
        elements: [{ ...high, vd: undefined }],
        rearPlates: [{ label: "Unknown plate", nd: 1.497, vd: 81.6, thicknessMm: 1, gapAfterMm: 1 }],
      },
      {
        ...embedded,
        key: "b-high",
        elements: [high],
        rearPlates: [{ label: "High plate", nd: 1.497, vd: 81.6, thicknessMm: 1, gapAfterMm: 1 }],
      },
      { ...prime, key: "c-no-abbe", elements: prime.elements.map((e) => ({ ...e, vd: undefined })) },
      { ...prime, key: "d-e-line", elements: prime.elements.map((e) => ({ ...e, indexReference: "e" })) },
      { ...prime, key: "e-estimate-one" },
      {
        ...prime,
        key: "f-estimate-two",
        elements: [...prime.elements, { ...prime.elements[0], id: 2, name: "L2", label: "Second element" }],
        surfaces: [
          ...prime.surfaces,
          { label: "3", R: "flat", d: 5, sd: 15, medium: 2 },
          { label: "4", R: "flat", d: 80, sd: 15 },
        ],
      },
      { ...FIXTURE_PAIRS.find((pair) => pair.family === "diffractive")!.v2, key: "g-unsupported" },
      { ...prime, key: "h-resolved", elements: prime.elements.map((e) => ({ ...e, glass: "N-BK7" })) },
      {
        ...prime,
        key: "i-plate-estimate",
        elements: prime.elements.map((e) => ({ ...e, glass: "N-BK7" })),
        rearPlates: [{ label: "Estimated plate", nd: 1.5168, vd: 64.17, thicknessMm: 1, gapAfterMm: 1 }],
      },
      { ...prime, key: "j-hidden", visible: false },
    ];
    const catalog = join(root, "src/lens-data");
    mkdirSync(catalog, { recursive: true });
    for (const fixture of fixtures)
      writeFileSync(join(catalog, `${fixture.key}.data.ts`), `export default ${JSON.stringify(fixture)};\n`);
    const run = (...args: string[]) =>
      JSON.parse(
        execFileSync(
          "node",
          [
            "--import",
            resolve("scripts/ts-js-specifier-hook-register.mjs"),
            resolve("scripts/audit-mtf.mjs"),
            "--blockers",
            ...args,
          ],
          { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] },
        ),
      );
    const report = run("--list");
    expect(report).toMatchObject({
      spectrum: "photopic",
      audited: 9,
      glassSurfaces: 15,
      eligible: 4,
      referenceFallback: 4,
      unsupported: 1,
      classes: {
        "high-vd-no-partial": {
          lenses: 2,
          elements: 3,
          surfaces: 4,
          shareOfGlassSurfaces: 4 / 15,
          unlockedLenses: 1,
          singleBlockingElementLenses: [],
        },
        "no-abbe": {
          lenses: 2,
          elements: 2,
          surfaces: 3,
          shareOfGlassSurfaces: 3 / 15,
          unlockedLenses: 1,
          singleBlockingElementLenses: ["c-no-abbe"],
        },
        "e-line-no-catalog": {
          lenses: 1,
          elements: 1,
          surfaces: 1,
          unlockedLenses: 1,
          singleBlockingElementLenses: ["d-e-line"],
        },
        "unusable-measured-span": { lenses: 0, elements: 0, surfaces: 0, unlockedLenses: 0 },
      },
      estimatedDispersion: { lenses: 3, singleElementLenses: 2, elementCountDistribution: { "1": 2, "2": 1 } },
      estimatedDispersionWarning: { lenses: 2, singleElementLenses: 1, elementCountDistribution: { "1": 1, "2": 1 } },
    });
    expect(report.lenses).toHaveLength(4);
    expect(report.lenses[0].blockers).toEqual([
      {
        elementId: 1,
        label: high.label,
        nd: 1.497,
        vd: null,
        indexReference: "d",
        glass: "Unresolved high glass",
        class: "no-abbe",
        surfaces: 2,
      },
      {
        elementId: 2,
        label: "Unknown plate",
        nd: 1.497,
        vd: 81.6,
        indexReference: "d",
        glass: null,
        class: "high-vd-no-partial",
        surfaces: 1,
      },
    ]);
    expect(
      report.estimatedDispersion.rows.map((row: { estimatedElementCount: number }) => row.estimatedElementCount),
    ).toEqual([1, 2, 1]);
    const summary = run();
    expect(summary.lenses).toBeUndefined();
    expect(summary.estimatedDispersion.rows).toBeUndefined();
    expect(summary.classes).toEqual(report.classes);
    expect(run("--limit=1")).toMatchObject({
      audited: 1,
      glassSurfaces: 3,
      referenceFallback: 1,
      classes: { "high-vd-no-partial": { unlockedLenses: 0 }, "no-abbe": { unlockedLenses: 0 } },
    });
    expect(run("--limit=0")).toMatchObject({
      audited: 0,
      glassSurfaces: 0,
      classes: { "no-abbe": { shareOfGlassSurfaces: 0 } },
    });
    for (const fixture of fixtures)
      expect(readFileSync(join(catalog, `${fixture.key}.data.ts`), "utf8")).toBe(
        `export default ${JSON.stringify(fixture)};\n`,
      );
  });
});

describe("audits read only V2 files", () => {
  const root = mkdtempSync(join(tmpdir(), "audit-v2-twins-"));
  afterAll(() => rmSync(root, { recursive: true, force: true }));

  /** A fixture pair written out as two lens files, each in a directory of its own version. */
  function twinFiles(family: string): { v1: string; v2: string } {
    const pair = FIXTURE_PAIRS.find((candidate) => candidate.family === family && candidate.kind === "lens");
    if (!pair) throw new Error(`no lens fixture pair "${family}"`);
    const write = (version: "v1" | "v2", data: object) => {
      const file = join(root, family, version, "Fixture.data.ts");
      mkdirSync(dirname(file), { recursive: true });
      writeFileSync(file, `const LENS_DATA = ${JSON.stringify(data, null, 2)};\n\nexport default LENS_DATA;\n`);
      return file;
    };
    return { v1: write("v1", pair.v1), v2: write("v2", pair.v2) };
  }

  /** An audit's exit status and output through its npm entry, the file's directory written as `<dir>`. */
  function audit(script: string, file: string, args: string[] = [], extraEnv: Record<string, string> = {}) {
    let status = 0;
    let stdout: string;
    let stderr = "";
    try {
      stdout = execFileSync("npm", ["run", "--silent", script, "--", file, ...args], {
        encoding: "utf8",
        env: { ...env, ...extraEnv },
        stdio: ["ignore", "pipe", "pipe"],
      });
    } catch (error) {
      status = (error as { status?: number }).status ?? -1;
      stdout = String((error as { stdout?: string }).stdout);
      stderr = String((error as { stderr?: string }).stderr);
    }
    return {
      status,
      conversionInput: /--input "([^"]+)" --write/.exec(stdout + stderr)?.[1],
      stdout: stdout.replaceAll(relative(".", dirname(file)), "<dir>").replaceAll(dirname(file), "<dir>"),
      stderr: stderr.replaceAll(relative(".", dirname(file)), "<dir>").replaceAll(dirname(file), "<dir>"),
    };
  }

  function rejectsV1(result: ReturnType<typeof audit>) {
    expect(result.status).toBe(1);
    expect(result.conversionInput).toBeDefined();
    expect(existsSync(resolve(result.conversionInput!))).toBe(true);
    expect(result.stdout + result.stderr).toContain(
      'npm run convert:lens-data -- --input "<dir>/Fixture.data.ts" --write',
    );
  }

  it("audit:surface scans a V2 asphere and refuses V1, and derives the radius of a flat stop", () => {
    const prime = twinFiles("prime");
    const [v1, v2] = [
      audit("audit:surface", prime.v1, ["--scan", "1"]),
      audit("audit:surface", prime.v2, ["--scan", "1"]),
    ];
    rejectsV1(v1);
    expect(v2.status).toBe(0);
    /* Surface "1" (K -0.5, A4 1.2e-6, A8 -3e-11) at h = 15 mm: 2.2598 mm with its asphere, 2.3030 mm as a sphere. */
    expect(v2.stdout).toContain("aspheric");
    expect(v2.stdout).toMatch(/^ 15\.00 {7}2\.2598 /m);
    expect(v2.stdout).toContain("OK — no validation errors");

    /* The V2 stop is flat and stores no radius: R reads as V1's 1e15, and the scan runs to twice the derived radius. */
    const stop = audit("audit:surface", prime.v2, ["--scan", "STO"]);
    expect(stop.status).toBe(0);
    expect(stop.stdout).toMatch(
      /surface STO {2}R=1000000000000000 {2}sd\(stored\)=none, derived \d+\.\d{3} {2}spherical/,
    );
    expect(stop.stdout).not.toContain("NaN");
  });

  it("audit:surface scans a V2 asphere that leaves K out as the engine traces it, with K = 0", () => {
    const pair = FIXTURE_PAIRS.find((candidate) => candidate.family === "prime" && candidate.kind === "lens");
    if (pair?.kind !== "lens") throw new Error('no lens fixture pair "prime"');
    const surfaces = pair.v2.surfaces.map((surface) =>
      surface.label === "1" ? { ...surface, asphere: { A4: 1.2e-6, A8: -3e-11 } } : surface,
    );
    const file = join(root, "sparse-conic", "Fixture.data.ts");
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, `export default ${JSON.stringify({ ...pair.v2, surfaces })};\n`);
    const scan = audit("audit:surface", file, ["--scan", "1"]);
    expect(scan.status).toBe(0);
    /* At h = 15 mm the R = 50 sphere sags 2.3030 mm; A4 and A8 bring it to 2.2869 mm, 16.1 µm inside the sphere. */
    expect(scan.stdout).toMatch(/^ 15\.00 {7}2\.2869 {11}-16\.1 /m);
  });

  it("audit:surface prints ingest's refusal of a V2 file as ERR lines, exit 1", () => {
    const pair = FIXTURE_PAIRS.find((candidate) => candidate.family === "prime")!;
    const file = join(root, "refused", "Fixture.data.ts");
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, `export default ${JSON.stringify({ ...pair.v2, surfaces: null })};\n`);
    const refused = audit("audit:surface", file, ["--sd", "1=14"]);
    expect(refused.status).toBe(1);
    expect(refused.stdout).toContain("ERR surfaces must be a list of objects");
  });

  it("audit:aperture audits every V2 zoom station and refuses V1", () => {
    const zoom = twinFiles("zoom");
    const rows = (file: string) => {
      const json = join(dirname(file), "rows.json");
      expect(audit("audit:aperture", file, [`--json=${json}`]).status).toBe(0);
      return (JSON.parse(readFileSync(json, "utf8")) as { file: string }[]).map(({ file: _file, ...row }) => row);
    };
    rejectsV1(audit("audit:aperture", zoom.v1));
    expect(rows(zoom.v2).map((row) => (row as { station: string }).station)).toEqual(["24 mm", "50 mm", "100 mm"]);
  });

  it("audit:image-circle reads V2 image format and refuses V1", () => {
    const prime = twinFiles("prime");
    rejectsV1(audit("audit:image-circle", prime.v1));
    expect(audit("audit:image-circle", prime.v2).stdout).toContain("1 lens checked · 0 undersized · 0 skipped");
  });

  it("audit:patent-figure draws V2 silhouette and refuses V1", () => {
    const prime = twinFiles("prime");
    /* A synthetic figure page: an axis line and one element drawn symmetric about it, served by a stand-in pdftoppm
     * on PATH, so the case needs no poppler. */
    const [width, height, axis] = [600, 400, 200];
    const pixels = new Uint8Array(width * height).fill(255);
    for (let x = 100; x < 500; x++) pixels[axis * width + x] = 0;
    for (let y = axis - 150; y <= axis + 150; y++) for (let x = 250; x < 310; x++) pixels[y * width + x] = 0;
    const header = new TextEncoder().encode(`P5\n${width} ${height}\n255\n`);
    const page = join(root, "figure", "page.pgm");
    mkdirSync(dirname(page), { recursive: true });
    writeFileSync(page, new Uint8Array([...header, ...pixels]));
    const bin = join(root, "figure", "bin");
    mkdirSync(bin, { recursive: true });
    writeFileSync(join(bin, "pdftoppm"), `#!/bin/sh\nfor last; do :; done\ncp "${page}" "$last-1.pgm"\n`);
    chmodSync(join(bin, "pdftoppm"), 0o755);
    const path = { PATH: `${bin}:${env.PATH ?? ""}` };
    const args = [join(root, "figure", "patent.pdf"), "1", "0.1,0.05,0.9,0.95"];

    rejectsV1(audit("audit:patent-figure", prime.v1, args, path));
    const v2 = audit("audit:patent-figure", prime.v2, args, path);
    expect(v2.status).toBe(0);
    expect(v2.stdout).toMatch(/^L1 +1\/2 /m);
    expect(v2.stdout).not.toContain("NaN");
  });
});
