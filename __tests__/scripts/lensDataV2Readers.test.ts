/**
 * Lens-data tooling reads both versions (S2.P2.T2): the shared AST reader, identity and summaries from a V2 file and
 * its V1 twin, the organizer's import rewrite, and page dates that skip the format-only conversion commits.
 *
 * It stays in `npm test`, beside `lensDataScripts.test.ts` and `buildMetadataHelpers.test.ts`: `TOOLING_TESTS` takes
 * only tests of tools neither the build nor the app uses (agent_docs/architecture/testing.md), and these readers run
 * in metadata generation before every `dev`, `test` and `build`.
 */

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { encodeValue } from "../../src/benchmarks/engineDiff/payload.js";
import {
  combineFreshnessEntries,
  getGitFileFreshness,
  isFormatOnlyCommit,
  parseGitLogDates,
} from "../../scripts/build-metadata-lib.mjs";
import { evaluateLensDataSource, isV1LensData as astIsV1, readLensIdentity } from "../../scripts/lens-data-ast.mjs";
import { collectLensData, organizeRootLensFiles } from "../../scripts/lens-data-lib.mjs";
import {
  isV1LensData as summariesIsV1,
  lensSummary,
  teleconverterSummary,
  v1Prescription,
} from "../../scripts/lens-summaries.mjs";
import { ingestLens, ingestTeleconverter, isV1File } from "../../src/optics/prescription/ingestV2.js";
import { teleconverterCompatibility } from "../../src/optics/prescription/teleconverterCompatibility.js";
import { toLensDataInput, toTeleconverterData } from "../../src/optics/prescription/toLensData.js";
import { FIXTURE_PAIRS } from "../src/optics/prescription/ingestV2Fixtures.js";

const CATALOG_SOURCES = import.meta.glob<string>("../../src/lens-data/**/*.{data,teleconverter}.ts", {
  query: "?raw",
  import: "default",
  eager: true,
});
const CATALOG_MODULES = import.meta.glob<{ default: unknown }>("../../src/lens-data/**/*.{data,teleconverter}.ts", {
  eager: true,
});

const loadViews = async () => ({ ingestLens, ingestTeleconverter, toLensDataInput, toTeleconverterData });
const LENS_PAIRS = FIXTURE_PAIRS.filter((pair) => pair.kind === "lens");
const CONVERTER_PAIR = FIXTURE_PAIRS.find((pair) => pair.kind === "teleconverter")!;

const tempRoots: string[] = [];
afterEach(() => {
  while (tempRoots.length > 0) rmSync(tempRoots.pop()!, { recursive: true, force: true });
});

function tempLensDataDir(): { rootDir: string; lensDataDir: string } {
  const rootDir = mkdtempSync(join(tmpdir(), "lens-data-v2-"));
  tempRoots.push(rootDir);
  const lensDataDir = join(rootDir, "src", "lens-data");
  mkdirSync(lensDataDir, { recursive: true });
  return { rootDir, lensDataDir };
}

/** A lens file's source text for a prescription object, written as a catalog file is. */
function sourceOf(data: object, typeName: string, typesModule: string): string {
  return [
    `import type { ${typeName} } from "../types/${typesModule}.js";`,
    "",
    `const LENS_DATA = ${JSON.stringify(data, null, 2)} satisfies ${typeName};`,
    "",
    "export default LENS_DATA;",
    "",
  ].join("\n");
}

/** A value's exact encoding: sorted keys, and -0, NaN, the infinities and `undefined` told apart. */
const exact = (value: unknown) => JSON.stringify(encodeValue(value));

describe("lens-data AST reader", () => {
  it("evaluates every catalog file to the value its module exports", () => {
    const offenders = Object.entries(CATALOG_SOURCES).flatMap(([path, source]) => {
      try {
        return exact(evaluateLensDataSource(source, path)) === exact(CATALOG_MODULES[path].default) ? [] : [path];
      } catch (error) {
        return [`${path}: ${(error as Error).message}`];
      }
    });
    expect(Object.keys(CATALOG_SOURCES).length).toBeGreaterThan(900);
    expect(offenders).toEqual([]);
  });

  it("evaluates the literal forms the catalog uses, arithmetic and string joins as JavaScript does", () => {
    const value = evaluateLensDataSource(
      [
        "const RAYS = [-0.5, +0.5] as const;",
        "const BASE = { scFill: 0.5 };",
        "const LENS_DATA = {",
        '  "key": "forms", name: `NAME`, maker: null, visible: false, sub: undefined, far: Infinity,',
        "  dPgF: 0.5769 - (0.6438 - 0.001682 * 37.2), gap: 5.53 - 2.8 - 2.33 / 1.5168,",
        '  note: "first " + "second", rays: [...RAYS, 1e15], RAYS, ...BASE,',
        "  scale: <number>2, sure: (3)!,",
        "} satisfies Record<string, unknown>;",
        "export default LENS_DATA;",
      ].join("\n"),
    );
    expect(value).toStrictEqual({
      key: "forms",
      name: "NAME",
      maker: null,
      visible: false,
      sub: undefined,
      far: Infinity,
      dPgF: 0.5769 - (0.6438 - 0.001682 * 37.2),
      gap: 5.53 - 2.8 - 2.33 / 1.5168,
      note: "first second",
      rays: [-0.5, 0.5, 1e15],
      RAYS: [-0.5, 0.5],
      scFill: 0.5,
      scale: 2,
      sure: 3,
    });
  });

  it.each([
    ["a call", "export default { n: Math.sqrt(2) };", /test\.ts:1: a CallExpression/],
    [
      "a template with a substitution",
      "const x = 1;\nexport default { s: `a${x}` };",
      /test\.ts:2: a TemplateExpression/,
    ],
    ["a computed property name", 'const k = "a";\nexport default { [k]: 1 };', /test\.ts:2: a computed property name/],
    ["an imported binding", 'import { v } from "./v.js";\nexport default { v };', /test\.ts:2: "v" is not a top-level/],
    ["a let binding", "let v = 1;\nexport default { v };", /"v" is not a top-level const/],
    ["arithmetic on a string", 'export default { s: "a" - 1 };', /arithmetic on something other than numbers/],
    ["a cycle", "const a = { b };\nconst b = { a };\nexport default a;", /refers to itself/],
  ])("refuses %s, naming the file and line", (_form, source, message) => {
    expect(() => evaluateLensDataSource(source, "test.ts")).toThrow(message);
  });

  it("reads the same identity from a V2 file and its V1 twin", () => {
    for (const pair of FIXTURE_PAIRS) {
      expect(readLensIdentity(pair.v2), pair.family).toEqual(readLensIdentity(pair.v1));
    }
    const prime = FIXTURE_PAIRS.find((pair) => pair.family === "prime")!;
    expect(readLensIdentity(prime.v2)).toMatchObject({ lensMountIds: ["nikon-z"], imageFormatId: "135-full-frame" });
  });
});

describe("the scripts' copies of the V1 rule", () => {
  it("agree with isV1File on every fixture pair and on each kind of file a version refuses", () => {
    const files: [string, unknown][] = [
      ...FIXTURE_PAIRS.flatMap((pair): [string, unknown][] => [
        [`${pair.family} V1`, pair.v1],
        [`${pair.family} V2`, pair.v2],
      ]),
      ["no schema", { key: "k" }],
      ["schema: 2", { schema: 2, key: "k" }],
      ["schema: 3", { schema: 3, key: "k" }],
      ["null", null],
      ["a number", 7],
    ];
    /* What a predicate says of a file: its answer, or the kind of error it throws. */
    const outcome = (predicate: (file: object) => boolean, file: unknown) => {
      try {
        return predicate(file as object);
      } catch (error) {
        return (error as Error).constructor.name;
      }
    };
    for (const [name, file] of files) {
      const rule = outcome(isV1File, file);
      expect(outcome(astIsV1, file), `lens-data-ast.mjs, ${name}`).toBe(rule);
      expect(outcome(summariesIsV1, file), `lens-summaries.mjs, ${name}`).toBe(rule);
    }
    expect(files.map(([, file]) => outcome(isV1File, file)).slice(-5)).toEqual([true, false, false, "TypeError", true]);
  });
});

describe("a V2 file and its V1 twin", () => {
  it("give the same identity, maker folder, mounts and formats to the metadata collector", () => {
    const collect = (version: "v1" | "v2") => {
      const { rootDir, lensDataDir } = tempLensDataDir();
      for (const pair of LENS_PAIRS) {
        const [typeName, module] = version === "v1" ? ["LensDataInput", "optics"] : ["LensDataV2Input", "lensDataV2"];
        writeFileSync(join(lensDataDir, `${pair.v1.key}.data.ts`), sourceOf(pair[version], typeName, module));
      }
      return collectLensData({
        rootDir,
        lensDataDir,
        fallbackDate: "2026-10-13",
        trackedLensRecordsByKey: {},
        getFreshness: () => ({ publishedOn: "2026-10-13", lastModified: "2026-10-13" }),
      });
    };
    const v1 = collect("v1");
    expect(v1).toHaveLength(LENS_PAIRS.length);
    expect(JSON.stringify(collect("v2"))).toBe(JSON.stringify(v1));
  });

  it("give byte-identical lens summaries", async () => {
    for (const pair of LENS_PAIRS) {
      const fromV2 = lensSummary(await v1Prescription(pair.v2, "lens", loadViews));
      expect(JSON.stringify(fromV2), pair.family).toBe(JSON.stringify(lensSummary(pair.v1)));
    }
  });

  it("give a byte-identical converter summary, its hosts read in either version", async () => {
    const hosts = async (version: "v1" | "v2") =>
      Promise.all(LENS_PAIRS.map((pair) => v1Prescription(pair[version], "lens", loadViews)));
    const v1Summary = teleconverterSummary(CONVERTER_PAIR.v1, await hosts("v1"), teleconverterCompatibility);
    const v2Summary = teleconverterSummary(
      await v1Prescription(CONVERTER_PAIR.v2, "teleconverter", loadViews),
      await hosts("v2"),
      teleconverterCompatibility,
    );
    expect(v1Summary.compatibleLensKeys).toEqual(["fixture-converter-host"]);
    expect(JSON.stringify(v2Summary)).toBe(JSON.stringify(v1Summary));
  });

  it("reach the engine through the script's own loader, under plain Node", async () => {
    /* Build metadata passes no loader: `v1Prescription` loads the conversion seam by its path, through the specifier
     * hook. Run that where build metadata runs, in plain Node, on every V2 fixture. */
    const { rootDir } = tempLensDataDir();
    const files = FIXTURE_PAIRS.map((pair) => ({ kind: pair.kind, file: pair.v2 }));
    expect(JSON.parse(JSON.stringify(files)), "the fixtures survive JSON").toEqual(files);
    const input = join(rootDir, "files.json");
    writeFileSync(input, JSON.stringify(files));
    const script = join(rootDir, "read.mjs");
    const summaries = new URL("../../scripts/lens-summaries.mjs", import.meta.url).href;
    writeFileSync(
      script,
      [
        'import { readFileSync } from "node:fs";',
        `import { v1Prescription } from ${JSON.stringify(summaries)};`,
        `const files = JSON.parse(readFileSync(${JSON.stringify(input)}, "utf8"));`,
        "const views = [];",
        "for (const { kind, file } of files) views.push(await v1Prescription(file, kind));",
        "console.log(JSON.stringify(views));",
      ].join("\n"),
    );
    const output = execFileSync("node", [script], { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
    const inProcess = await Promise.all(files.map(({ kind, file }) => v1Prescription(file, kind, loadViews)));
    expect(JSON.parse(output)).toEqual(JSON.parse(JSON.stringify(inProcess)));
  });

  it("is filed under its maker with its V2 type import rewritten", () => {
    const { lensDataDir } = tempLensDataDir();
    const pair = FIXTURE_PAIRS.find((candidate) => candidate.family === "prime")!;
    writeFileSync(join(lensDataDir, "FixturePrime.data.ts"), sourceOf(pair.v2, "LensDataV2Input", "lensDataV2"));
    const { movedLensCount } = organizeRootLensFiles(lensDataDir, { log: () => {} });
    const filed = join(lensDataDir, "fixture", "FixturePrime.data.ts");
    expect(movedLensCount).toBe(1);
    expect(existsSync(filed)).toBe(true);
    expect(readFileSync(filed, "utf-8")).toContain('from "../../types/lensDataV2.js";');
  });
});

describe("page dates skip format-only conversion commits", () => {
  const log = (...lines: [string, string, string][]) => lines.map((fields) => fields.join("\t")).join("\n");
  const CONTENT_ADDED: [string, string, string] = ["2026-03-01T12:00:00Z", "added", "Add the Fixture 50mm"];
  const CONTENT_EDITED: [string, string, string] = ["2026-05-01T12:00:00Z", "edited", "Correct L3 glass"];
  const CONVERTED: [string, string, string] = [
    "2026-11-01T12:00:00Z",
    "converted",
    "S2.P5.T3 Convert makers F-K (#901)",
  ];

  it("keeps the date of the commit before a conversion commit", () => {
    expect(parseGitLogDates(log(CONVERTED, CONTENT_EDITED, CONTENT_ADDED))).toMatchObject({
      publishedOn: "2026-03-01",
      publishedCommit: "added",
      lastModified: "2026-05-01",
      lastModifiedCommit: "edited",
    });
  });

  it("moves the date with a content commit after the conversion", () => {
    const later: [string, string, string] = ["2026-12-01T12:00:00Z", "later", "Add the published close-focus row"];
    expect(parseGitLogDates(log(later, CONVERTED, CONTENT_ADDED))).toMatchObject({
      lastModified: "2026-12-01",
      lastModifiedCommit: "later",
    });
  });

  it("matches a step ID at the start of the subject alone, with or without the squash suffix", () => {
    const skipped = (subject: string) => isFormatOnlyCommit({ commit: "c", subject });
    expect(skipped("S2.P5.T1 Convert makers A-C")).toBe(true);
    expect(skipped("S2.P5.T9 Close the migration (#950)")).toBe(true);
    expect(skipped("S2.P6.T1 Drop the no-op aperture models (#960)")).toBe(true);
    expect(skipped("Fix a label left by S2.P5.T3")).toBe(false);
    expect(skipped("S2.P5.T3: convert")).toBe(false);
    expect(skipped("S2.P6.T2 Single-lens corpus rules")).toBe(false);
  });

  it("skips a commit the committed list names, whatever its subject", () => {
    const listed = new Set(["reverted"]);
    const revert: [string, string, string] = ["2026-11-02T12:00:00Z", "reverted", 'Revert "S2.P5.T3 Convert"'];
    const dates = parseGitLogDates(log(revert, CONTENT_EDITED, CONTENT_ADDED), {
      isFormatOnly: (entry) => isFormatOnlyCommit(entry, listed),
    });
    expect(dates).toMatchObject({ lastModified: "2026-05-01", lastModifiedCommit: "edited" });
  });

  it("keeps a file's oldest commit when every commit is a conversion commit", () => {
    const first: [string, string, string] = ["2026-11-01T12:00:00Z", "first", "S2.P5.T3 Convert makers F-K"];
    const second: [string, string, string] = ["2026-11-05T12:00:00Z", "second", "S2.P5.T9 Close the migration"];
    expect(parseGitLogDates(log(second, first))).toMatchObject({
      publishedOn: "2026-11-01",
      lastModified: "2026-11-01",
      lastModifiedCommit: "first",
    });
  });

  it("reads a teleconverter file's history the same way", () => {
    const calls: string[][] = [];
    const freshness = getGitFileFreshness("src/lens-data/nikon/NikonTC14.teleconverter.ts", {
      execFileImpl: (_file, args) => {
        calls.push(args);
        return log(CONVERTED, CONTENT_ADDED);
      },
    });
    expect(calls[0]).toContain("--format=%cI%x09%H%x09%s");
    expect(freshness).toMatchObject({ lastModified: "2026-03-01", lastModifiedCommit: "added" });
  });

  it("still takes a newer analysis sidecar's date", () => {
    const data = parseGitLogDates(log(CONVERTED, CONTENT_ADDED));
    const analysis = parseGitLogDates(log(["2026-11-03T12:00:00Z", "analysis", "Expand the coma section"]));
    expect(combineFreshnessEntries([data, analysis], "2026-10-13")).toMatchObject({
      publishedOn: "2026-03-01",
      lastModified: "2026-11-03",
      lastModifiedCommit: "analysis",
    });
  });

  it("still clamps the modified date to an explicit publication date", () => {
    const { rootDir, lensDataDir } = tempLensDataDir();
    const pair = FIXTURE_PAIRS.find((candidate) => candidate.family === "prime")!;
    writeFileSync(
      join(lensDataDir, "Fixture.data.ts"),
      sourceOf({ ...pair.v2, publishedAt: "2026-10-01T00:00:00Z" }, "LensDataV2Input", "lensDataV2"),
    );
    const [lens] = collectLensData({
      rootDir,
      lensDataDir,
      fallbackDate: "2026-10-13",
      trackedLensRecordsByKey: {},
      getFreshness: () => parseGitLogDates(log(CONVERTED, CONTENT_EDITED, CONTENT_ADDED)),
    });
    expect(lens.freshness).toMatchObject({ publishedOn: "2026-10-01", lastModified: "2026-10-01" });
  });
});
