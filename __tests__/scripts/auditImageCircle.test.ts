/**
 * Loader-contract smoke test for the audit scripts.
 *
 * audit:image-circle and audit:patent-figure import `.ts` sources from plain
 * Node, which only works through the ts-js-specifier hook. This runs the real
 * npm entry against one known lens so a hook or specifier regression fails
 * here with the actual command line, not deep inside a manual audit session.
 *
 * The audits that read a lens file read a V2 file as its V1 twin (S2.P2.T2):
 * each runs through its npm entry on a committed fixture pair written out as
 * lens files.
 */
import { execFileSync } from "node:child_process";
import { chmodSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { env } from "node:process";
import { afterAll, describe, expect, it } from "vitest";
import { FIXTURE_PAIRS } from "../src/optics/prescription/ingestV2Fixtures.js";

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

describe("audits read a V2 file as its V1 twin", () => {
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
    try {
      stdout = execFileSync("npm", ["run", "--silent", script, "--", file, ...args], {
        encoding: "utf8",
        env: { ...env, ...extraEnv },
        stdio: ["ignore", "pipe", "pipe"],
      });
    } catch (error) {
      status = (error as { status?: number }).status ?? -1;
      stdout = String((error as { stdout?: string }).stdout);
    }
    return { status, stdout: stdout.replaceAll(dirname(file), "<dir>") };
  }

  it("audit:surface scans a V2 asphere as its V1 twin, and derives the radius of a flat stop", () => {
    const prime = twinFiles("prime");
    const [v1, v2] = [
      audit("audit:surface", prime.v1, ["--scan", "1"]),
      audit("audit:surface", prime.v2, ["--scan", "1"]),
    ];
    expect(v2).toEqual(v1);
    expect(v1.status).toBe(0);
    /* Surface "1" (K -0.5, A4 1.2e-6, A8 -3e-11) at h = 15 mm: 2.2598 mm with its asphere, 2.3030 mm as a sphere. */
    expect(v1.stdout).toContain("aspheric");
    expect(v1.stdout).toMatch(/^ 15\.00 {7}2\.2598 /m);
    expect(v1.stdout).toContain("OK — no validation errors");

    /* The V2 stop is flat and stores no radius: R reads as V1's 1e15, and the scan runs to twice the derived radius. */
    const stop = audit("audit:surface", prime.v2, ["--scan", "STO"]);
    expect(stop.status).toBe(0);
    expect(stop.stdout).toMatch(
      /surface STO {2}R=1000000000000000 {2}sd\(stored\)=none, derived \d+\.\d{3} {2}spherical/,
    );
    expect(stop.stdout).not.toContain("NaN");
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

  it("audit:aperture audits every station of a V2 zoom as its V1 twin", () => {
    const zoom = twinFiles("zoom");
    const rows = (file: string) => {
      const json = join(dirname(file), "rows.json");
      expect(audit("audit:aperture", file, [`--json=${json}`]).status).toBe(0);
      return (JSON.parse(readFileSync(json, "utf8")) as { file: string }[]).map(({ file: _file, ...row }) => row);
    };
    const v1 = rows(zoom.v1);
    expect(v1.map((row) => (row as { station: string }).station)).toEqual(["24 mm", "50 mm", "100 mm"]);
    expect(rows(zoom.v2)).toEqual(v1);
  });

  it("audit:image-circle reads a V2 file's image format as its V1 twin's", () => {
    const prime = twinFiles("prime");
    const v1 = audit("audit:image-circle", prime.v1);
    expect(v1.stdout).toContain("1 lens checked · 0 undersized · 0 skipped");
    expect(audit("audit:image-circle", prime.v2)).toEqual(v1);
  });

  it("audit:patent-figure draws a V2 file's silhouette as its V1 twin's", () => {
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

    const v1 = audit("audit:patent-figure", prime.v1, args, path);
    expect(v1.status).toBe(0);
    expect(v1.stdout).toMatch(/^L1 +1\/2 /m);
    expect(v1.stdout).not.toContain("NaN");
    expect(audit("audit:patent-figure", prime.v2, args, path)).toEqual(v1);
  });
});
