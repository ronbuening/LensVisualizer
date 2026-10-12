/**
 * The engine differential driver: its command line, and runs of the real script.
 *
 * The comparison itself is tested with the harness in `__tests__/src/benchmarks/`. What only a real run shows is
 * the plumbing around it: a base worktree added and removed again, two capture bundles built with no config file,
 * a tier cut down to one shard, and the reports written where the caller asked.
 */

import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { USAGE, parseArgs } from "../../scripts/engine-diff.mjs";
import { exportCatalog, requestCatalog } from "../../src/benchmarks/engineDiff/captureEntry.js";
import { parseDeclaredExceptions, parseDeclaredTransitions } from "../../src/benchmarks/engineDiff/compare.js";
import { lensId, shardRequests, tierRequests } from "../../src/benchmarks/engineDiff/requests.js";

describe("engine-diff command line", () => {
  it("defaults to Tier P under C0, with nothing narrowed and nothing declared", () => {
    expect(parseArgs(["--base", "origin/main"])).toEqual({
      base: "origin/main",
      tier: "p",
      changeClass: "c0",
      shard: null,
      lens: null,
      exceptions: null,
      out: null,
    });
  });

  it("takes a value after its flag or after an equals sign", () => {
    const expected = {
      base: "optics-rewrite/s1",
      tier: "s",
      changeClass: "c2",
      shard: { index: 3, count: 8 },
      lens: "host-lens+some-converter",
      exceptions: "description.md",
      out: "out/dir=1",
    };
    expect(
      parseArgs([
        "--base",
        "optics-rewrite/s1",
        "--tier",
        "s",
        "--class",
        "c2",
        "--shard",
        "3/8",
        "--lens",
        "host-lens+some-converter",
        "--exceptions",
        "description.md",
        "--out",
        "out/dir=1",
      ]),
    ).toEqual(expected);
    expect(
      parseArgs([
        "--base=optics-rewrite/s1",
        "--tier=s",
        "--class=c2",
        "--shard=3/8",
        "--lens=host-lens+some-converter",
        "--exceptions=description.md",
        "--out=out/dir=1",
      ]),
    ).toEqual(expected);
  });

  it("takes every tier, and a shard counted from 1 up to the number of shards", () => {
    expect(["p", "s", "f"].map((tier) => parseArgs(["--base=main", `--tier=${tier}`]).tier)).toEqual(["p", "s", "f"]);
    expect(parseArgs(["--base=main", "--tier=f", "--shard=1/1"]).shard).toEqual({ index: 1, count: 1 });
    expect(parseArgs(["--base=main", "--tier=f", "--shard=32/32"]).shard).toEqual({ index: 32, count: 32 });
  });

  it("refuses what it cannot run, and says why", () => {
    expect(() => parseArgs([])).toThrow("--base <ref> is required");
    expect(() => parseArgs(["--base"])).toThrow("--base needs a value");
    expect(() => parseArgs(["--base=main", "--verbose"])).toThrow(`Unknown engine-diff argument: --verbose\n${USAGE}`);
    expect(() => parseArgs(["main"])).toThrow("Unknown engine-diff argument: main");
    expect(() => parseArgs(["--base=main", "--tier=q"])).toThrow("--tier must be one of p, s, f");
    expect(() => parseArgs(["--base=main", "--class=c4"])).toThrow("--class must be one of c0, c1, c2, c3");
    for (const shard of ["5/4", "0/4", "1/0", "half", "3", "-1/4", "1.5/4", "1/4/8"]) {
      expect(() => parseArgs(["--base=main", `--shard=${shard}`])).toThrow("--shard must be i/n with 1 <= i <= n");
    }
  });
});

/** What a run of the driver printed, and how it ended. */
interface DriverRun {
  status: "passed" | "failed";
  stdout: string;
  stderr: string;
}

/**
 * Run the real driver against HEAD.
 *
 * @param args - arguments after `--base HEAD`
 * @returns the run, or null where git cannot add a worktree and the driver therefore cannot run at all
 */
function runDriver(args: readonly string[]): DriverRun | null {
  try {
    const stdout = execFileSync("node", ["scripts/engine-diff.mjs", "--base", "HEAD", ...args], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    });
    return { status: "passed", stdout, stderr: "" };
  } catch (error) {
    const { stdout, stderr } = error as { stdout?: string; stderr?: string };
    /* A source archive or a sandbox without a writable git directory has no worktrees to add. */
    if (String(stderr).includes("git worktree add failed")) return null;
    return { status: "failed", stdout: String(stdout), stderr: String(stderr) };
  }
}

describe("engine-diff run", () => {
  it(
    "compares HEAD with the working tree for one lens and leaves no worktree behind",
    { timeout: 180_000 },
    (context) => {
      const outDir = mkdtempSync(join(tmpdir(), "engine-diff-test-"));
      try {
        const run = runDriver(["--tier", "p", "--class", "c0", "--lens", "canon-serenar-50f18", "--out", outDir]);
        if (!run) return context.skip("git cannot create a worktree here, so the driver was not run");
        if (run.status !== "passed") throw new Error(`engine-diff.mjs failed: ${run.stderr}`);
        const output = run.stdout;

        expect(output).toContain("engine-diff: passed (tier p, class c0): 1 lenses, 7 records");
        expect(readdirSync(join(outDir, "reports")).sort()).toEqual([
          "data-impact.md",
          "failing-records.ndjson.gz",
          "summary.json",
          "summary.md",
          "uncompared.json",
        ]);
        expect(readdirSync(join(outDir, "payloads")).sort()).toEqual([
          "base-data.ndjson.gz",
          "base-engine.ndjson.gz",
          "head-engine.ndjson.gz",
        ]);
        const summary = JSON.parse(readFileSync(join(outDir, "reports", "summary.json"), "utf8")) as {
          passed: boolean;
          tier: string;
          changeClass: string;
          shard: null;
          lens: string;
          base: { ref: string; commit: string };
          engine: { records: number; recordsDiffering: number; numbers: number };
          uncompared: unknown[];
          seam: { base: Record<string, string>; head: Record<string, string> };
          phases: [string, number][];
        };
        expect(summary).toMatchObject({
          passed: true,
          tier: "p",
          changeClass: "c0",
          shard: null,
          lens: "canon-serenar-50f18",
          base: { ref: "HEAD" },
          engine: { records: 7, recordsDiffering: 0 },
          uncompared: [],
        });
        expect(summary.base.commit).toMatch(/^[0-9a-f]{40}$/);
        expect(summary.engine.numbers).toBeGreaterThan(1e5);
        /* Both bundles resolved the engine through the same seam. */
        expect(summary.seam.base).toEqual(summary.seam.head);
        expect(summary.phases.map(([phase]) => phase)).toEqual(
          expect.arrayContaining(["Base worktree", "Capture bundles", "Capture on the base engine", "Total"]),
        );
        expect(readFileSync(join(outDir, "reports", "summary.md"), "utf8")).toContain("# Engine diff: passed");
        expect(readFileSync(join(outDir, "reports", "uncompared.json"), "utf8")).toBe("[]\n");

        /* The run names the worktree it added. Another run's may exist at this moment; this one's must be gone. */
        const worktree = /^engine-diff: base worktree (.+)$/m.exec(output)?.[1] ?? "";
        expect(worktree).toContain("engine-diff-base-");
        expect(existsSync(worktree)).toBe(false);
        const listed = execFileSync("git", ["worktree", "list"], {
          encoding: "utf8",
          stdio: ["ignore", "pipe", "pipe"],
        });
        expect(listed).not.toContain(worktree);
      } finally {
        rmSync(outDir, { recursive: true, force: true });
      }
      expect(existsSync(outDir)).toBe(false);
    },
  );

  it("runs one shard of the stage tier, and finds a lens in that shard alone", { timeout: 180_000 }, (context) => {
    const shard = { index: 2, count: 3 };
    /* The lens of the shard that the tier asks least of: a prime outside the analysis and MTF rows. */
    const requestsOf = new Map<string, number>();
    for (const request of shardRequests(tierRequests("s", requestCatalog(exportCatalog())), shard)) {
      requestsOf.set(lensId(request.lens), (requestsOf.get(lensId(request.lens)) ?? 0) + 1);
    }
    const [lens, records] = [...requestsOf].reduce((least, entry) => (entry[1] < least[1] ? entry : least));
    /* Build constants, and four families at two focus ends, each wide open and stopped down. */
    expect(records).toBe(17);

    const outDir = mkdtempSync(join(tmpdir(), "engine-diff-test-"));
    try {
      const run = runDriver(["--tier", "s", "--shard", "2/3", "--lens", lens, "--out", outDir]);
      if (!run) return context.skip("git cannot create a worktree here, so the driver was not run");
      if (run.status !== "passed") throw new Error(`engine-diff.mjs failed: ${run.stderr}`);
      expect(run.stdout).toContain("engine-diff: tier s shard 2/3, base ");
      expect(run.stdout).toContain(`engine-diff: passed (tier s shard 2/3, class c0): 1 lenses, ${records} records`);
      const summary = JSON.parse(readFileSync(join(outDir, "reports", "summary.json"), "utf8")) as object;
      expect(summary).toMatchObject({
        passed: true,
        tier: "s",
        shard,
        lens,
        engine: { records, recordsDiffering: 0 },
      });
      expect(readFileSync(join(outDir, "reports", "summary.md"), "utf8")).toContain(
        `Tier S, class C0, shard 2 of 3, lens \`${lens}\` only.`,
      );

      /* The same lens is in no other shard: the run has nothing to compare, and says so instead of passing. */
      const elsewhere = runDriver(["--tier", "s", "--shard", "1/3", "--lens", lens, "--out", outDir]);
      expect(elsewhere).toMatchObject({
        status: "failed",
        stderr: expect.stringContaining(`tier s shard 1/3 has no request for the lens "${lens}"`),
      });
    } finally {
      rmSync(outDir, { recursive: true, force: true });
    }
  });
});

describe("engine-diff declared transitions", () => {
  const HEADING = "## Engine-diff transitions";
  const STATE = "zoom=0 focus=0 aberration=0 stopdown=0 shift=0 tilt=0";
  /** A declared transition in the form a run prints one, for a ray of the on-axis fan. */
  const lineFor = (lens: string, reason: string) =>
    `- \`${lens}\` \`${STATE}\` \`traces\` \`onAxis.rays[1].status\`: \`"ok"\` -> \`"clipped"\`; ` +
    `digest \`0123456789ab\`. ${reason}`;

  it("passes the stage workflow's transitions input, as typed, to the file its driver reads", (context) => {
    const workflow = readFileSync(".github/workflows/engine-diff-stage.yml", "utf8");
    /* What a person typed reaches a shell as an environment variable, and is never text in a script. */
    expect(workflow).toMatch(/\n {6}transitions:\n(?: {8}.*\n)*? {8}type: string\n/);
    expect(workflow).toContain("\n  TRANSITIONS: ${{ inputs.transitions }}\n");
    expect(workflow.match(/\$\{\{ *inputs\.transitions *\}\}/g)).toHaveLength(1);
    /* The part of the shard step that writes the file, which the same step then hands to `--exceptions`. */
    const step =
      /\n( +)set -f\n([\s\S]*?\} > "\$RUNNER_TEMP\/engine-diff-exceptions\.md")\n( +node [^\n]*\\\n[^\n]*)/.exec(
        workflow,
      );
    if (!step) throw new Error("the stage workflow no longer writes engine-diff-exceptions.md in a step of its own");
    const [, indent, body, command] = step;
    expect(command).toContain('--exceptions "$RUNNER_TEMP/engine-diff-exceptions.md"');
    const script = `set -f\n${body}`
      .split("\n")
      .map((line) => (line.startsWith(indent) ? line.slice(indent.length) : line))
      .join("\n");
    expect(script).not.toContain("${{");

    const dir = mkdtempSync(join(tmpdir(), "engine-diff-test-"));
    try {
      /* Two lines, with what a shell would act on if either were ever expanded as script text. */
      const marker = join(dir, "expanded");
      const typed = [
        lineFor(
          "canon-serenar-50f18",
          `The rim clips it: $(touch ${marker}) \`touch ${marker}\` "quoted" * $HOME \\n.`,
        ),
        lineFor("host-lens+some-converter", "It ends on the stop; so does `this`. 100% of it."),
      ].join("\n");
      try {
        execFileSync(
          "env",
          [
            `RUNNER_TEMP=${dir}`,
            "EXCEPTIONS=some-lens  host-lens+some-converter *",
            `TRANSITIONS=${typed}`,
            "bash",
            "-c",
            script,
          ],
          { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] },
        );
      } catch (error) {
        if ((error as { code?: string }).code === "ENOENT")
          return context.skip("there is no bash here to run the step");
        throw error;
      }
      const written = readFileSync(join(dir, "engine-diff-exceptions.md"), "utf8");
      expect(existsSync(marker)).toBe(false);
      expect(parseDeclaredExceptions(written)).toEqual(["some-lens", "host-lens+some-converter", "*"]);
      expect(parseDeclaredTransitions(written)).toEqual(parseDeclaredTransitions(`${HEADING}\n${typed}`));
      expect(parseDeclaredTransitions(written)).toMatchObject([
        { lens: "canon-serenar-50f18", state: STATE, reason: expect.stringContaining("$(touch ") },
        { lens: "host-lens+some-converter", reason: "It ends on the stop; so does `this`. 100% of it." },
      ]);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it(
    "reads the transitions from the file given as --exceptions, and holds them to the run",
    { timeout: 180_000 },
    (context) => {
      const outDir = mkdtempSync(join(tmpdir(), "engine-diff-test-"));
      try {
        /* A description as CI hands it over: both headings in one file. The first line names a ray of the lens the
         * run is narrowed to, and the second a lens of the catalog that this run leaves out. */
        const other = exportCatalog().lenses.find(({ key }) => key !== "canon-serenar-50f18")!.key;
        const description = join(outDir, "description.md");
        writeFileSync(
          description,
          [
            "S3.P2.T3 Legacy intersection delegates",
            "",
            "## Engine-diff exceptions",
            "",
            "None.",
            "",
            HEADING,
            "",
            lineFor("canon-serenar-50f18", "The rim clips it."),
            lineFor(other, "The rim clips it."),
          ].join("\n"),
          "utf8",
        );
        const args = ["--tier", "p", "--lens", "canon-serenar-50f18", "--exceptions", description, "--out", outDir];
        const run = runDriver([...args, "--class", "c1"]);
        if (!run) return context.skip("git cannot create a worktree here, so the driver was not run");
        /* HEAD against itself has no transition, so the line that declares one fails the run. */
        expect(run.status).toBe("failed");
        expect(run.stdout).toContain("engine-diff: FAILED (tier p, class c1): 1 lenses, 7 records");
        expect(run.stdout).toContain(
          "engine-diff: Declared transitions: of 2 declared, 1 nothing discrete changed in the unit. summary.md " +
            "has each line.",
        );
        const summary = JSON.parse(readFileSync(join(outDir, "reports", "summary.json"), "utf8")) as {
          failures: string[];
          transitions: { declared: { line: string; outcome: string }[]; undeclared: number };
          transitionLines: { written: number; omitted: number };
        };
        expect(summary.failures).toHaveLength(1);
        /* The other lens is in the catalog, so its line names a record this narrowed run did not ask for. */
        expect(summary.transitions.declared).toEqual([
          expect.objectContaining({ line: lineFor("canon-serenar-50f18", "The rim clips it."), outcome: "unchanged" }),
          expect.objectContaining({ line: lineFor(other, "The rim clips it."), outcome: "notJudged" }),
        ]);
        expect(summary.transitions.undeclared).toBe(0);
        expect(summary.transitionLines).toMatchObject({ written: 0, omitted: 0 });
        expect(readFileSync(join(outDir, "reports", "summary.md"), "utf8")).toContain("## Declared transitions");
        /* Above C0 the lines to paste have a report of their own, written when there is none as well. */
        expect(readFileSync(join(outDir, "reports", "transitions.md"), "utf8")).toContain(
          "No unit of the engine comparison holds a transition that nothing declares.",
        );
      } finally {
        rmSync(outDir, { recursive: true, force: true });
      }
    },
  );
});
