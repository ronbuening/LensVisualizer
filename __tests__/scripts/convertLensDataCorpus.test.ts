/**
 * The corpus conversion sweep (see agent_docs/architecture/testing.md), in the tooling suite. Every catalog file
 * goes through the command line, into a temp directory, to the other lens-data version and back to its own, and a
 * second round trip follows from the first one's output:
 * - each leg's output ingests to the source's canonical prescription;
 * - the first round trip's output holds every comment of the source once, as written or with the converter's note;
 * - the second round trip writes byte for byte what the first wrote, in both versions.
 *
 * Each leg type-checks every converted text where it is written, and a file the command line refuses is a case with
 * its reason; the leg then runs again without it, so the other files go on. Every catalog file must go through every
 * leg of its version's group: one that a leg neither writes nor refuses is a case. The sweep runs to the end and
 * fails with every case it found. A case is resolved by a data correction on `main`, never here.
 */
import * as nodeFs from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { afterEach, describe, expect, it } from "vitest";
import { runConversion } from "../../scripts/lens-data-convert/cli.mjs";
import { commentNotCarried } from "../../scripts/lens-data-convert/comments.mjs";
import { readLensDataFile } from "../../scripts/lens-data-convert/read.mjs";
import { evaluateLensDataSource } from "../../scripts/lens-data-ast.mjs";
import * as conversion from "../../src/optics/lensDataConversion.js";
import { BUILDABLE_V2, PRIME_MEMBERS, TELECONVERTER_FILE, v1LensFile } from "./convertLensDataFixtures.js";

const { copyFileSync, existsSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, realpathSync, rmSync } = nodeFs;
const { statSync, writeFileSync } = nodeFs;

const ROOT = fileURLToPath(new URL("../..", import.meta.url));
const CATALOG = join(ROOT, "src", "lens-data");
const TYPES = join(ROOT, "src", "types");

/** A case the sweep found: the file, the leg or check that found it, and why. */
interface Offender {
  file: string;
  leg: string;
  check: string;
  detail: string;
}

const directories: string[] = [];
afterEach(() => {
  for (const directory of directories.splice(0)) rmSync(directory, { recursive: true, force: true });
});

function temp(): string {
  const directory = realpathSync(mkdtempSync(join(tmpdir(), "convert-lens-data-corpus-")));
  directories.push(directory);
  return directory;
}

/** Every lens and converter file under a directory, by path relative to it; none when it does not exist. */
function lensDataFiles(directory: string): string[] {
  const files: string[] = [];
  const walk = (at: string) => {
    for (const name of readdirSync(at).sort()) {
      const path = join(at, name);
      if (statSync(path).isDirectory()) walk(path);
      else if (/\.(data|teleconverter)\.ts$/.test(name)) files.push(relative(directory, path));
    }
  };
  if (existsSync(directory)) walk(directory);
  return files;
}

/** The canonical prescription a file on disk ingests to. */
function prescriptionOf(path: string) {
  const data = evaluateLensDataSource(readFileSync(path, "utf8"), path) as never;
  return path.endsWith(".teleconverter.ts")
    ? conversion.ingestTeleconverter(data).prescription
    : conversion.ingestLens(data).prescription;
}

/** The comments of a file on disk, as the converter reads them. */
function commentsOf(path: string) {
  return readLensDataFile(readFileSync(path, "utf8"), path, conversion).comments;
}

/** Run the command line in process, collecting what it prints; the engine loads under Vitest. */
async function cli(argv: string[]) {
  let stderr = "";
  const code = await runConversion({
    argv,
    stdout: { write: () => true },
    stderr: { write: (text: string) => (stderr += text) },
    loadConversion: () => import("../../src/optics/lensDataConversion.js"),
    loadBuildLens: () => import("../../src/optics/buildLens.js"),
  });
  return { code, stderr };
}

/**
 * One leg: every file under `input` not at `target` converted to it and written under `output`. A file the command
 * line refuses is a case, and the leg runs once more on a copy of `input` without it, since a run that refuses a file
 * writes none.
 */
async function leg(name: string, input: string, target: 1 | 2, output: string, offenders: Offender[]) {
  let from = input;
  for (let attempt = 0; attempt < 2; attempt++) {
    const run = await cli(["--input", from, "--to-version", String(target), "--write", "--output", output]);
    if (run.code === 0) return;
    /* A run refused before converting anything, a collision, names no file: it is a case for the leg. */
    if (/^convert-lens-data: refused before converting anything: /m.test(run.stderr)) {
      offenders.push({ file: "", leg: name, check: "run", detail: run.stderr.trim() });
      return;
    }
    /* Each status line starts "convert-lens-data: "; a refusal's reasons follow on its own indented lines. */
    const refused = run.stderr
      .split(/^(?=convert-lens-data: )/m)
      .map((block) => /^convert-lens-data: refused (.+?\.(?:data|teleconverter)\.ts): ([\s\S]*)$/.exec(block.trimEnd()))
      .filter((match) => match !== null)
      .map(([, file, reason]) => ({ file: relative(from, resolve(ROOT, file)), reason }));
    if (refused.length === 0 || attempt === 1) {
      offenders.push({ file: "", leg: name, check: "run", detail: run.stderr.trim() });
      return;
    }
    for (const { file, reason } of refused) offenders.push({ file, leg: name, check: "refused", detail: reason });
    const kept = mkdtempSync(join(dirname(output), "kept-"));
    const skipped = new Set(refused.map((entry) => entry.file));
    for (const file of lensDataFiles(from).filter((path) => !skipped.has(path))) {
      mkdirSync(dirname(join(kept, file)), { recursive: true });
      copyFileSync(join(from, file), join(kept, file));
    }
    from = kept;
  }
}

/**
 * Sweep a catalog: each file of either version to the other and back, then a second round trip from that output.
 *
 * @param catalog - the directory of lens and converter files
 * @param work - an empty directory for the legs' outputs
 * @returns every case found
 */
async function sweep(catalog: string, work: string): Promise<Offender[]> {
  const offenders: Offender[] = [];
  const refusedAt = (legName: string) =>
    new Set(offenders.filter((entry) => entry.leg === legName && entry.check === "refused").map((entry) => entry.file));
  /* Each catalog file a group's first leg wrote or refused: every file must enter one group. */
  const entered = new Set<string>();
  for (const own of [1, 2] as const) {
    const other = own === 1 ? 2 : 1;
    const targets = [other, own, other, own, other] as const;
    const outputs: string[] = [];
    const names = targets.map((target, index) => `V${own} files, leg ${index + 1} to V${target}`);
    let input = catalog;
    for (const [index, target] of targets.entries()) {
      const output = join(work, `v${own}-leg${index + 1}`);
      await leg(names[index], input, target, output, offenders);
      outputs.push(output);
      if (lensDataFiles(output).length === 0) break;
      input = output;
    }
    for (const file of [...lensDataFiles(outputs[0]), ...refusedAt(names[0])]) entered.add(file);
    for (const file of lensDataFiles(outputs[0])) {
      /* A file the group's first leg wrote goes through every later leg, written or refused there. */
      const skipped = names.findIndex(
        (name, index) =>
          (outputs[index] === undefined || !existsSync(join(outputs[index], file))) && !refusedAt(name).has(file),
      );
      if (skipped >= 0) {
        offenders.push({
          file,
          leg: names[skipped],
          check: "coverage",
          detail: "the leg neither wrote nor refused it",
        });
      }
    }
    for (const file of lensDataFiles(outputs[0])) {
      const report = (check: string, detail: string) => offenders.push({ file, leg: `V${own} files`, check, detail });
      const source = prescriptionOf(join(catalog, file));
      outputs.forEach((output, index) => {
        if (!existsSync(join(output, file))) return;
        const difference = conversion.prescriptionDifference(source, prescriptionOf(join(output, file)));
        if (difference) report(`leg ${index + 1} prescription`, difference);
      });
      if (outputs[1] === undefined || !existsSync(join(outputs[1], file))) continue;
      const missing = commentNotCarried(commentsOf(join(catalog, file)), commentsOf(join(outputs[1], file)));
      if (missing) report("comments after the round trip", missing);
      for (const [first, second] of [
        [1, 3],
        [2, 4],
      ] as const) {
        if (outputs[second] === undefined) continue;
        const [a, b] = [join(outputs[first], file), join(outputs[second], file)];
        if (existsSync(a) && existsSync(b) && readFileSync(a, "utf8") !== readFileSync(b, "utf8")) {
          report("second round trip", `leg ${second + 1} wrote other bytes than leg ${first + 1}`);
        }
      }
    }
  }
  for (const file of lensDataFiles(catalog).filter((path) => !entered.has(path))) {
    offenders.push({ file, leg: "leg 1", check: "coverage", detail: "neither group's first leg wrote or refused it" });
  }
  return offenders;
}

/** Write a source text at `path`, its type import pointing at this repository's types from there. */
function put(path: string, text: string) {
  mkdirSync(dirname(path), { recursive: true });
  const types = relative(dirname(path), TYPES).split("\\").join("/");
  writeFileSync(path, text.replace(/from "(\.\.\/)+types\//, `from "${types}/`));
}

describe("the corpus conversion sweep", () => {
  it(
    "brings every catalog file back to its own prescription, and a second round trip writes the same bytes",
    async () => {
      expect(await sweep(CATALOG, temp())).toEqual([]);
    },
    30 * 60_000,
  );

  it("finds a refused file and carries the others of either version through every leg", async () => {
    const catalog = temp();
    put(join(catalog, "fixture", "Prime.data.ts"), v1LensFile(PRIME_MEMBERS));
    put(join(catalog, "fixture", "Hand.data.ts"), BUILDABLE_V2);
    put(join(catalog, "fixture", "Odd.data.ts"), v1LensFile(`${PRIME_MEMBERS}\n  mystery: 1,`));
    put(join(catalog, "fixture", "Converter.teleconverter.ts"), TELECONVERTER_FILE);
    const work = temp();
    const offenders = await sweep(catalog, work);
    expect(offenders).toEqual([
      {
        file: join("fixture", "Odd.data.ts"),
        leg: "V1 files, leg 1 to V2",
        check: "refused",
        detail: expect.stringMatching(/mystery/),
      },
    ]);
    expect(lensDataFiles(join(work, "v1-leg5"))).toEqual([
      join("fixture", "Converter.teleconverter.ts"),
      join("fixture", "Prime.data.ts"),
    ]);
    expect(lensDataFiles(join(work, "v2-leg5"))).toEqual([join("fixture", "Hand.data.ts")]);
  }, 120_000);

  it("takes a run the command line refuses before converting anything as a case for its leg, not a file", async () => {
    const catalog = temp();
    put(join(catalog, "fixture", "Prime.data.ts"), v1LensFile(PRIME_MEMBERS));
    writeFileSync(join(catalog, "fixture", ".Prime.data.ts.1.convert-bak"), "a backup a run left");
    const run = {
      file: "",
      check: "run",
      detail: expect.stringMatching(/refused before converting anything: .+ a backup/),
    };
    expect(await sweep(catalog, temp())).toEqual([
      { ...run, leg: "V1 files, leg 1 to V2" },
      { ...run, leg: "V2 files, leg 1 to V1" },
      {
        file: join("fixture", "Prime.data.ts"),
        leg: "leg 1",
        check: "coverage",
        detail: "neither group's first leg wrote or refused it",
      },
    ]);
  }, 120_000);
});
