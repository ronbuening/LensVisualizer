/**
 * Loader-contract smoke test for the audit scripts.
 *
 * audit:image-circle and audit:patent-figure import `.ts` sources from plain
 * Node, which only works through the ts-js-specifier hook. This runs the real
 * npm entry against one known lens so a hook or specifier regression fails
 * here with the actual command line, not deep inside a manual audit session.
 */
import { execFileSync } from "node:child_process";
import { describe, expect, it } from "vitest";

describe("audit:image-circle loader contract", () => {
  it("audits one known lens through the npm entry with the loader hook", () => {
    const output = execFileSync(
      "node",
      [
        "--import",
        "./scripts/ts-js-specifier-hook-register.mjs",
        "scripts/audit-image-circle.mjs",
        "src/lens-data/canon/Canon50mmf12.data.ts",
      ],
      { encoding: "utf8" },
    );

    expect(output).toContain("1 lens checked");
  });

  it("rejects an invalid --sd override in audit-surface-probe", () => {
    let failed = false;
    try {
      execFileSync(
        "node",
        [
          "--import",
          "./scripts/ts-js-specifier-hook-register.mjs",
          "scripts/audit-surface-probe.mjs",
          "src/lens-data/canon/Canon50mmf12.data.ts",
          "--sd",
          "1=-5",
        ],
        { encoding: "utf8" },
      );
    } catch (error) {
      failed = true;
      expect(String((error as { stderr?: string }).stderr)).toContain("finite positive value");
    }
    expect(failed).toBe(true);
  });
});
