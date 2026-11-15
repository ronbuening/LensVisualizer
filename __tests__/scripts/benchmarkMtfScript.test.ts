/** Validate opt-in MTF tooling without running expensive prescription analyses. */

import { execFileSync } from "node:child_process";
import { describe, expect, it } from "vitest";
import { compareSignatures, main, roundSignature } from "../../scripts/mtf-drift-signature.mjs";

/**
 * Run the real script with arguments it must refuse.
 *
 * @param args - arguments after the script name
 * @returns what the script wrote to stderr, or "accepted" when it ran
 */
function refusal(args: readonly string[]): string {
  try {
    execFileSync(
      "node",
      ["--import", "./scripts/ts-js-specifier-hook-register.mjs", "scripts/benchmark-mtf.mjs", ...args],
      { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] },
    );
    return "accepted";
  } catch (error) {
    return String((error as { stderr?: string }).stderr);
  }
}

describe("benchmark-mtf command line", () => {
  it("treats an argument it does not know as an error", () => {
    expect(refusal(["--iteration=5"])).toContain("Unknown MTF benchmark argument: --iteration=5");
    expect(refusal(["--base", "HEAD"])).toContain("Unknown MTF benchmark argument: --base");
    expect(refusal(["--verbose"])).toContain("Unknown MTF benchmark argument: --verbose");
    expect(refusal(["d49857ae"])).toContain("Unknown MTF benchmark argument: d49857ae");
    /* A switch takes no value. */
    expect(refusal(["--finite=1"])).toContain("Unknown MTF benchmark argument: --finite=1");
  });

  it("needs a value for each flag that takes one, after the flag or after an equals sign", () => {
    expect(refusal(["--iterations"])).toContain("--iterations needs a value.");
  });

  it("checks the sample counts and the options it had before", () => {
    expect(refusal(["--iterations=0"])).toContain("--iterations must be an integer >= 1.");
    expect(refusal(["--warmups", "-1"])).toContain("--warmups must be an integer >= 0.");
    expect(refusal(["--method=wave"])).toContain("Unknown --method=wave");
    expect(refusal(["--spectrum", "white"])).toContain("Unknown --spectrum=white");
    expect(refusal(["--fields=1"])).toContain("--fields must be 2-101");
  });
});

/** Synthetic signatures keep comparison controls independent of real-lens MTF values. */
function signature() {
  return {
    schemaVersion: 1,
    inputHashes: { engineSha256: "engine", lensDataSha256: { "fixture.data.ts": "lens" } },
    cases: [
      {
        id: "synthetic",
        lensDataFile: "fixture.data.ts",
        settings: { focus: "design" },
        focus: { appliedShiftMm: 0, bestAxialShiftMm: 0.01 },
        fields: [0, 0.7].map((fieldFraction) => ({
          fieldFraction,
          status: "converged",
          reason: null as string | null,
          gridSize: 64,
          validRays: 100,
          sagittal: [1, 0.5],
          tangential: [1, 0.4],
          diffractionLimit: { sagittal: [1, 0.9], tangential: [1, 0.8] },
          unknownFluxFraction: 0,
        })),
      },
    ],
  };
}

describe("MTF drift signature controls", () => {
  it("reports every moved leaf, its field and signed delta, and fails beyond the repeatability tolerance", () => {
    const before = signature();
    const after = signature();
    after.cases[0].focus.appliedShiftMm = -0.001;
    after.cases[0].fields[1].sagittal[1] += 2e-7;
    after.cases[0].fields[1].diffractionLimit.tangential[1] -= 3e-7;
    after.cases[0].fields[1].unknownFluxFraction = 0.0001;
    const result = compareSignatures(before, after);
    expect(result.failed).toBe(true);
    expect(result.changes).toHaveLength(4);
    expect(result.changes.map(({ quantity }: { quantity: string }) => quantity)).toEqual([
      "focus.appliedShiftMm",
      "sagittal.1",
      "diffractionLimit.tangential.1",
      "unknownFluxFraction",
    ]);
    expect(result.changes[0]).toMatchObject({ case: "synthetic", field: "—", delta: -0.001 });
    expect(result.changes[1]).toMatchObject({ field: 0.7, old: 0.5, new: 0.5000002, nondeterminism: true });
  });

  it("prints sub-tolerance moves without failing and accepts a byte-identical signature", () => {
    const before = signature();
    expect(compareSignatures(before, signature())).toEqual({ changes: [], hashes: [], failed: false });
    const after = signature();
    after.cases[0].fields[0].tangential[1] += 9.9e-8;
    const result = compareSignatures(before, after);
    expect(result.failed).toBe(false);
    expect(result.changes).toHaveLength(1);
  });

  it("reports hash-only edits without failing, and attributes moves to the affected inputs", () => {
    for (const hash of ["engine", "lens"]) {
      const before = signature();
      const after = signature();
      if (hash === "engine") after.inputHashes.engineSha256 = "changed";
      else after.inputHashes.lensDataSha256["fixture.data.ts"] = "changed";
      expect(compareSignatures(before, after)).toMatchObject({ changes: [], failed: false });
      expect(compareSignatures(before, after).hashes).toHaveLength(1);
      after.cases[0].fields[0].validRays++;
      expect(compareSignatures(before, after).changes[0].nondeterminism).toBe(false);
    }
    const after = signature();
    Object.assign(after.inputHashes.lensDataSha256, { "another.data.ts": "changed" });
    after.cases[0].fields[0].validRays++;
    expect(compareSignatures(signature(), after).changes[0].nondeterminism).toBe(true);
  });

  it("fails changed statuses, settings, missing cases and missing fields, but ignores ordering", () => {
    const before = signature();
    const after = signature();
    after.cases[0].fields.reverse();
    expect(compareSignatures(before, after).failed).toBe(false);
    after.cases[0].fields[0].reason = "trace-failed";
    after.cases[0].fields[0].status = "unavailable";
    after.cases[0].settings.focus = "best-axial";
    expect(compareSignatures(before, after).changes).toHaveLength(3);
    expect(compareSignatures(before, after).failed).toBe(true);
    after.cases[0].fields.pop();
    expect(compareSignatures(before, after).failed).toBe(true);
    after.cases.pop();
    expect(compareSignatures(before, after).failed).toBe(true);
  });

  it("rounds recursively to 1e-9 and refuses nonfinite values rather than serializing them as null", () => {
    expect(roundSignature({ focus: 0.12345678949, curves: [0.12345678951, null, -1e-12] })).toEqual({
      focus: 0.123456789,
      curves: [0.12345679, null, 0],
    });
    for (const value of [NaN, Infinity, -Infinity]) expect(() => roundSignature({ value })).toThrow("Nonfinite");
  });

  it("rejects duplicate identities so a map cannot hide moved results", () => {
    const after = signature();
    after.cases.push(after.cases[0]);
    expect(() => compareSignatures(signature(), after)).toThrow("Duplicate MTF signature id");
    after.cases.pop();
    after.cases[0].fields.push(after.cases[0].fields[0]);
    expect(() => compareSignatures(signature(), after)).toThrow("Duplicate MTF signature fieldFraction");
  });

  it("rejects ambiguous modes and unknown flags before computing or writing", async () => {
    await expect(main(["--update", "--check"])).rejects.toThrow("Usage:");
    await expect(main(["--invalid"])).rejects.toThrow("Usage:");
  });
});
