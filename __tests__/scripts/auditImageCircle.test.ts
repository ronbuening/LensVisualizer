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

function runNpmScript(script: string, args: string[] = []): string {
  return execFileSync("npm", ["run", script, "--", ...args], {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });
}

describe("audit script npm contracts", () => {
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
      expect(stderr).toContain("usage: node scripts/audit-patent-figure.mjs");
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
