/**
 * The lens-data converter library (`scripts/lens-data-convert/`): V1 text to V2 text, with its report, on synthetic
 * fixtures only. The S2.P2.T1 fixture pairs check the converted prescription; the source-text fixtures check the
 * printed file: literal forms, number tokens, comments and their moves, blank lines, the file's frame, a V2 source,
 * the stop-radius report, and one refusal of each kind. One test runs the library under plain Node, as the organizer
 * will.
 */

import { execFileSync } from "node:child_process";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { convertLensDataSource, type ConversionOptions } from "../../scripts/lens-data-convert/convert.mjs";
import { movedCommentText } from "../../scripts/lens-data-convert/comments.mjs";
import { formatConversionReport } from "../../scripts/lens-data-convert/report.mjs";
import { evaluateLensDataSource } from "../../scripts/lens-data-ast.mjs";
import { ingestLens, ingestTeleconverter } from "../../src/optics/prescription/ingestV2.js";
import { FIXTURE_PAIRS, type FixturePair } from "../src/optics/prescription/ingestV2Fixtures.js";
import {
  FORMS_FILE,
  FORMS_REPORT,
  FORMS_V2,
  PRETTIER_IGNORE_FILE,
  PRIME_MEMBERS,
  TELECONVERTER_FILE,
  TELECONVERTER_V2,
  V2_SOURCE_FILE,
  ZOOM_FILE,
  ZOOM_REPORT,
  ZOOM_V2,
  v1LensFile,
} from "./convertLensDataFixtures.js";

const FILE = "src/lens-data/fixture/Fixture.data.ts";

/** Convert under Vitest, which loads the engine modules itself. */
function convert(text: string, options: Partial<ConversionOptions> = {}) {
  return convertLensDataSource(text, {
    file: FILE,
    kind: "lens",
    loadConversion: () => import("../../src/optics/lensDataConversion.js"),
    loadBuildLens: () => import("../../src/optics/buildLens.js"),
    ...options,
  });
}

/** Convert, failing the test on a refusal. */
async function converted(text: string, options: Partial<ConversionOptions> = {}) {
  const result = await convert(text, options);
  expect(result.refusal).toBeUndefined();
  return result as { text: string; refusal: undefined; report: (typeof result)["report"] };
}

/** A pair's V1 side as a file, its numbers written as JSON writes them. */
function v1Text(pair: FixturePair): string {
  if (pair.kind === "lens") return v1LensFile(JSON.stringify(pair.v1, null, 2).slice(2, -2));
  return [
    'import type { TeleconverterDataInput } from "../../types/teleconverter.js";',
    "",
    `const TELECONVERTER_DATA = ${JSON.stringify(pair.v1, null, 2)} satisfies TeleconverterDataInput;`,
    "",
    "export default TELECONVERTER_DATA;",
    "",
  ].join("\n");
}

describe("the S2.P2.T1 fixture pairs", () => {
  it.each(FIXTURE_PAIRS.map((pair) => [pair.family, pair] as const))(
    "%s: the V1 side converts to V2 text that ingests to the pair's prescription",
    async (_family, pair) => {
      const { text } = await converted(v1Text(pair), { kind: pair.kind });
      const data = evaluateLensDataSource(text) as never;
      if (pair.kind === "lens") expect(ingestLens(data).prescription).toEqual(ingestLens(pair.v2).prescription);
      else expect(ingestTeleconverter(data).prescription).toEqual(ingestTeleconverter(pair.v2).prescription);
      const again = await converted(text, { kind: pair.kind });
      expect(again.text).toBe(text);
    },
  );

  it("report the engine's stop radius for each kind of derived or scheduled stop, and nothing else", async () => {
    const stops: Record<string, unknown> = {};
    for (const pair of FIXTURE_PAIRS) {
      const { report } = await converted(v1Text(pair), { kind: pair.kind });
      stops[pair.family] = report.stops.map((stop) => {
        const engine = stop.engine as { kind: string; radii: number[] };
        return { from: stop.from, authored: stop.authored, kind: engine.kind, stations: engine.radii.length };
      });
    }
    expect(stops.prime).toEqual([{ from: "surfaces[0].sd", authored: "15", kind: "prime", stations: 1 }]);
    expect(stops.zoom).toEqual([{ from: "surfaces[0].sd", authored: "15", kind: "perStation", stations: 3 }]);
    expect(stops["fixed-iris zoom"]).toEqual([{ from: "surfaces[0].sd", authored: "15", kind: "held", stations: 1 }]);
    expect(stops["stop schedule"]).toEqual([{ from: "surfaces[0].sd", authored: "15", kind: "schedule", stations: 3 }]);
    for (const family of ["folded (auto)", "folded (explicit)", "stop inside an element", "teleconverter"]) {
      expect(stops[family], family).toEqual([]);
    }
  });
});

describe("printing a converted file", () => {
  it("prints each literal form, keeps padded and computed number text, and carries every comment", async () => {
    const { text, report } = await converted(FORMS_FILE);
    expect(text).toBe(FORMS_V2);
    expect(formatConversionReport([report])).toBe(FORMS_REPORT);
  });

  it("writes stations, gaps in surface order and conjugate indices, and moves comments V2 has no node for", async () => {
    const { text, report } = await converted(ZOOM_FILE);
    expect(text).toBe(ZOOM_V2);
    expect(formatConversionReport([report])).toBe(ZOOM_REPORT);
    expect(text).toContain("zoomStation: 0, keyframe: 1");
    expect(text.indexOf("STO: {")).toBeLessThan(text.indexOf('"2": {'));
  });

  it("converts a teleconverter file to its V2 type", async () => {
    const { text, report } = await converted(TELECONVERTER_FILE, { kind: "teleconverter" });
    expect(text).toBe(TELECONVERTER_V2);
    expect(report.stops).toEqual([]);
  });

  it("leaves records under prettier-ignore on one line, unpadded but with their number tokens", async () => {
    const { text } = await converted(PRETTIER_IGNORE_FILE);
    const elements = text.slice(text.indexOf("  elements: ["), text.indexOf("  surfaces: ["));
    expect(elements).toBe(
      [
        "  elements: [",
        "    // G1 — front group",
        "    // prettier-ignore",
        '    { id: 1, name: "L1", label: "Element 1", type: "Biconvex Positive", nd: 1.51680, vd: 64.17, role: ' +
          '"Front positive element of the fixture\'s only group, written on one line as its source does" },',
        "    // prettier-ignore",
        '    { id: 2, name: "L2", label: "Element 2", type: "Negative Meniscus", nd: 1.75520, vd: 27.53, role: ' +
          '"Rear negative meniscus of the fixture\'s only group, written on one line as its source does" },',
        "  ],",
        "",
        "",
      ].join("\n"),
    );
    expect(text).toContain('{ label: "1", R: 50.00, d: 5, sd: 15, medium: 1 },');
    expect((await converted(text)).text).toBe(text);
  });

  it("gives a V2 source back as written: its media, zero term and comment at the same paths", async () => {
    const { text, report } = await converted(V2_SOURCE_FILE);
    expect(text).toBe(V2_SOURCE_FILE);
    expect(report).toEqual({ file: FILE, moved: [], stops: [], zeroTerms: [], dropped: [] });
  });

  it("keeps a sign, Infinity and a respelled exponent, and leaves an undefined member out", async () => {
    const members = PRIME_MEMBERS.replace(
      "nd: 1.5168, vd: 64.17 }],",
      "nd: 1.5168, vd: 64.17, fl: +99.5, maxSdRatio: Infinity, cemented: undefined }],",
    ).replace('{ label: "1", R: 50,', '{ label: "1", R: 5.0E+1,');
    const { text } = await converted(v1LensFile(members));
    expect(text).toContain("      focalLengthMm: +99.5,\n      maxSdRatio: Infinity,\n    },");
    expect(text).toContain('{ label: "1", R: 5.0E+1, d: 5, sd: 15, medium: 1 }, // L1 front');
    expect(text).not.toContain("cemented");
  });

  it("writes a value reached through another top-level const from its value, and keeps that const as written", async () => {
    const header = "/** A synthetic lens. */\n\nconst GLASS_ND = 1.51680;";
    const members = PRIME_MEMBERS.replace("nd: 1.5168, vd: 64.17 }],", "nd: GLASS_ND, vd: 64.17 }],");
    const { text } = await converted(v1LensFile(members, header));
    expect(text).toContain("const GLASS_ND = 1.51680;");
    expect(text).toContain('type: "Biconvex Positive", nd: 1.5168, vd: 64.17 }');
  });

  it("prefixes a moved comment once, the prefix inside the comment so a directive stays inert", () => {
    expect(movedCommentText("// prettier-ignore", "asph")).toBe("// (moved from asph) prettier-ignore");
    expect(movedCommentText("/* ── Zoom ── */", "zoomPositions")).toBe("/* (moved from zoomPositions) ── Zoom ── */");
    expect(movedCommentText("//", "var")).toBe("// (moved from var)");
    expect(movedCommentText("// (moved from x) kept", "asph")).toBe("// (moved from x) kept");
  });
});

describe("the stop-radius report", () => {
  it("carries the first line of the error when the engine cannot build the converted lens", async () => {
    const failing = async () => ({
      default: () => {
        throw new Error("Lens data cannot be built:\n  • a reason");
      },
    });
    const { report } = await converted(v1LensFile(PRIME_MEMBERS), { loadBuildLens: failing });
    expect(report.stops[0].engine).toEqual({ error: "Lens data cannot be built:" });
    expect(formatConversionReport([report])).toContain("engine radius: not computed (Lens data cannot be built:)");
  });
});

describe("refusals", () => {
  const prime = v1LensFile(PRIME_MEMBERS);
  /** A formatter that edits Prettier's output, as a broken one might. */
  const formattedThen = (edit: (text: string) => string) => async (text: string) => {
    const { format } = await import("prettier");
    return edit(await format(text, { parser: "typescript", printWidth: 120 }));
  };

  it.each([
    ["a form outside the literal subset", prime.replace("nominalFno: 2", "nominalFno: Math.sqrt(4)"), /cannot be read/],
    ["no satisfies on the export", prime.replace("} satisfies LensDataInput;", "};"), /names no type with satisfies/],
    [
      "a second copy that disagrees",
      prime.replace('{ label: "1", R: 50, d: 5, nd: 1.5168', '{ label: "1", R: 50, d: 5, nd: 1.6'),
      /ingest refuses it:\n {2}• surfaces\[1\]\.nd 1\.6 differs/,
    ],
    [
      "a comment outside the object",
      prime.replace("} satisfies LensDataInput;", "} /* outside */ satisfies LensDataInput;"),
      /the comment at line \d+ sits outside the exported object/,
    ],
  ])("%s", async (_kind, text, reason) => {
    const result = await convert(text);
    expect(result.text).toBeUndefined();
    expect(result.refusal).toMatch(reason);
  });

  it.each([
    [
      "a formatter error",
      async () => Promise.reject(new Error("cannot parse\nmore")),
      /Prettier cannot format it: cannot parse$/,
    ],
    [
      "a number token added",
      formattedThen((text) => text.replace("fStops: [2, 2.8", "fStops: [1.4, 2, 2.8")),
      /number of number tokens from \d+ to \d+/,
    ],
    [
      "a number token changed",
      formattedThen((text) => text.replace("fStops: [2, 2.8", "fStops: [2, 2.9")),
      /number token \d+ from 2\.8 to 2\.9/,
    ],
    [
      "a comment dropped",
      formattedThen((text) => text.replace(" // L1 front", "")),
      /a comment is not written exactly once: \/\/ L1 front/,
    ],
    [
      "another prescription",
      formattedThen((text) => text.replace('"Fixture 50mm f/2"', '"Fixture 50mm f/2.0"')),
      /ingests to another prescription: name: "Fixture 50mm f\/2" ≠ "Fixture 50mm f\/2\.0"/,
    ],
  ])("%s", async (_kind, format, reason) => {
    const result = await convert(prime, { format: format as (text: string) => Promise<string> });
    expect(result.text).toBeUndefined();
    expect(result.refusal).toMatch(reason);
  });

  it("a number token read back at another value", async () => {
    /* Prettier never reorders members; a formatter that does pairs tokens in order and puts each back elsewhere. */
    const text = v1LensFile(
      PRIME_MEMBERS.replace('{ label: "1", R: 50, d: 5,', '{ label: "1", R: 50, d: 5.0,').replace(
        "sd: 15 }, // L1 front",
        "sd: 5 }, // L1 front",
      ),
    );
    const format = async (printed: string) => {
      const { format: prettierFormat } = await import("prettier");
      const formatted = await prettierFormat(printed, { parser: "typescript", printWidth: 120 });
      return formatted.replace("d: 5.0, sd: 5,", "sd: 5, d: 5.0,");
    };
    const result = await convert(text, { format });
    expect(result.refusal).toMatch(/^surfaces\[1\]\.d reads back as 5, not 5\.0$/);
  });
});

describe("under plain Node", () => {
  const roots: string[] = [];
  afterEach(() => {
    while (roots.length > 0) rmSync(roots.pop()!, { recursive: true, force: true });
  });

  it("loads the conversion seam and buildLens by path, as the organizer will", () => {
    const root = mkdtempSync(join(tmpdir(), "convert-lens-data-"));
    roots.push(root);
    const script = join(root, "convert.mjs");
    const library = new URL("../../scripts/lens-data-convert/convert.mjs", import.meta.url).href;
    writeFileSync(
      script,
      [
        `import { convertLensDataSource } from ${JSON.stringify(library)};`,
        `const text = ${JSON.stringify(v1LensFile(PRIME_MEMBERS))};`,
        `const result = await convertLensDataSource(text, { file: "x.data.ts", kind: "lens" });`,
        "console.log(JSON.stringify({ refusal: result.refusal, engine: result.report.stops[0].engine.kind }));",
      ].join("\n"),
    );
    const output = execFileSync("node", [script], { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
    expect(JSON.parse(output)).toEqual({ engine: "prime" });
  });
});
