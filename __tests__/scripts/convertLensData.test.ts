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
import {
  convertLensDataSource,
  formatWithPrettier,
  type ConversionOptions,
} from "../../scripts/lens-data-convert/convert.mjs";
import { commentMisplaced, movedCommentText } from "../../scripts/lens-data-convert/comments.mjs";
import { formatConversionReport } from "../../scripts/lens-data-convert/report.mjs";
import { evaluateLensDataSource } from "../../scripts/lens-data-ast.mjs";
import { ingestLens, ingestTeleconverter } from "../../src/optics/prescription/ingestV2.js";
import { FIXTURE_PAIRS, type FixturePair } from "../src/optics/prescription/ingestV2Fixtures.js";
import {
  FORMS_FILE,
  FORMS_REPORT,
  FORMS_V2,
  PRETTIER_IGNORE_FILE,
  PRETTIER_IGNORE_V2,
  PRIME_MEMBERS,
  RULINGS_FILE,
  RULINGS_REPORT,
  RULINGS_V2,
  TELECONVERTER_FILE,
  TELECONVERTER_V2,
  V2_SOURCE_FILE,
  V2_ZOOM_SOURCE_FILE,
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

  it("leads a section with its banner, an empty var's comments focus, and a moved run takes one note", async () => {
    const { text, report } = await converted(RULINGS_FILE);
    expect(text).toBe(RULINGS_V2);
    expect(formatConversionReport([report])).toBe(RULINGS_REPORT);
    expect((await converted(text)).text).toBe(text);
  });

  it("converts a teleconverter file to its V2 type", async () => {
    const { text, report } = await converted(TELECONVERTER_FILE, { kind: "teleconverter" });
    expect(text).toBe(TELECONVERTER_V2);
    expect(report.stops).toEqual([]);
  });

  it("leaves records under prettier-ignore on one line, unpadded but with their number tokens", async () => {
    const { text } = await converted(PRETTIER_IGNORE_FILE);
    expect(text).toBe(PRETTIER_IGNORE_V2);
    expect((await converted(text)).text).toBe(text);
  });

  it("gives a V2 source back as written: its media, zero term and comments at the same paths", async () => {
    for (const source of [V2_SOURCE_FILE, V2_ZOOM_SOURCE_FILE]) {
      const { text, report } = await converted(source);
      expect(text).toBe(source);
      expect(report).toEqual({ file: FILE, moved: [], stops: [], zeroTerms: [], dropped: [] });
    }
    /* Ruling 10 is for a V1 source: a V2 file's first field keeps its leading comment, wherever the field prints. */
    const schemaLine = "  schema: 2, // the lens-data version\n";
    const keyLine = '  key: "fixture-v2-source",\n';
    const keyFirst = V2_SOURCE_FILE.replace(schemaLine + keyLine, `  // the key\n${keyLine}${schemaLine}`);
    const { text, report } = await converted(keyFirst);
    expect(text).toBe(V2_SOURCE_FILE.replace(keyLine, `  // the key\n${keyLine}`));
    expect(report.moved).toEqual([]);
  });

  it("leads schema with the banner over a V1 file's first field, though V2 dissolves that field", async () => {
    const asph = '  // ── Aspheres ──\n  asph: { "1": { K: 0, A4: 1e-6, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 } },\n';
    const { text, report } = await converted(v1LensFile(asph + PRIME_MEMBERS));
    expect(text).toContain("const LENS_DATA = {\n  // ── Aspheres ──\n  schema: 2,\n");
    expect(report.moved).toEqual([]);
    expect((await converted(text)).text).toBe(text);
  });

  it("keeps a node's trailing comments on its line, and leads it with a second line comment", async () => {
    const named = await converted(
      v1LensFile(PRIME_MEMBERS.replace('name: "Fixture 50mm f/2",', 'name: "Fixture 50mm f/2", /* a */ // b')),
    );
    expect(named.text).toContain('  name: "Fixture 50mm f/2" /* a */, // b\n');
    expect((await converted(named.text)).text).toBe(named.text);

    /* nd and elemId both become the surface's medium: the first line comment trails it, the second leads it. */
    const surface = [
      "{",
      '      label: "1",',
      "      R: 50,",
      "      d: 5,",
      "      nd: 1.5168, // N-BK7",
      "      elemId: 1, // L1",
      "      sd: 15,",
      "    },",
    ].join("\n");
    const merged = await converted(
      v1LensFile(
        PRIME_MEMBERS.replace('{ label: "1", R: 50, d: 5, nd: 1.5168, elemId: 1, sd: 15 }, // L1 front', surface),
      ),
    );
    expect(merged.text).toContain("      sd: 15,\n      // L1\n      medium: 1, // N-BK7\n    },");
    expect((await converted(merged.text)).text).toBe(merged.text);
  });

  it("gives a directive in a moved run its own note, so no moved comment is a bare directive", async () => {
    const gaps = '  // ── Variable gaps ──\n  // prettier-ignore\n  var: { "2": [80, 85] },\n';
    const { text } = await converted(v1LensFile(PRIME_MEMBERS.replace("  surfaces: [", `${gaps}  surfaces: [`)));
    expect(text).toContain(
      "  // (moved from var) ── Variable gaps ──\n  // (moved from var) prettier-ignore\n  gaps: {",
    );
    expect((await converted(text)).text).toBe(text);
  });

  it("leads the next entry with a block comment that sits just before it", async () => {
    const { text } = await converted(
      ZOOM_FILE.replace("nominalFno: [2, 2.4, 2.8],", "nominalFno: [2, /* mid */ 2.4, 2.8],"),
    );
    expect(text).toMatch(/focalLengthMm: 50,\n\s+\/\* mid \*\/\n\s+nominalFNumber: 2\.4,/);
    expect((await converted(text)).text).toBe(text);
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

  it("keeps a wrapped literal's text without its wrapper, and gives a spread's items their values", async () => {
    const members = PRIME_MEMBERS.replace("closeFocusM: 0.5,", 'closeFocusM: (0.50),\n  imageFormat: "aps-c" as const,')
      .replace("fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16],", "fstopSeries: [2.0, ...[2.80, 4.0], 5.6],")
      .replace("yScFill: 0.55,", "...{ yScFill: 0.550 },");
    const { text } = await converted(v1LensFile(members));
    expect(text).toContain('catalog: { imageFormat: "aps-c" },');
    expect(text).toContain("focus: { closeFocusM: 0.50 },");
    expect(text).toContain("fStops: [2.0, 2.8, 4, 5.6]");
    expect(text).toContain("layout: { yScFill: 0.55 },");
  });

  it("names no undrawn medium of a V1 source, and takes a shared one's text from its first surface", async () => {
    const members = PRIME_MEMBERS.replace(
      '{ label: "2", R: -50, d: 80, nd: 1, elemId: 0, sd: 15 },',
      [
        '{ label: "2", R: -50, d: 0.01, nd: 1.567320, elemId: 0, sd: 15 },',
        '    { label: "3", R: -50, d: 2, nd: 1.5168, elemId: 1, sd: 15 },',
        '    { label: "4", R: -60, d: 0.01, nd: 1.56732, elemId: 0, sd: 15 },',
        '    { label: "5", R: -70, d: 80, nd: 1, elemId: 0, sd: 15 },',
      ].join("\n"),
    );
    const { text } = await converted(v1LensFile(members));
    expect(text).toMatch(/media: \[\{ id: "[^"]+", nd: 1\.567320 \}\],/);
  });

  it("writes a value reached through another top-level const from its value, and keeps that const as written", async () => {
    const header = "/** A synthetic lens. */\n\nconst GLASS_ND = 1.51680;";
    const members = PRIME_MEMBERS.replace("nd: 1.5168, vd: 64.17 }],", "nd: GLASS_ND, vd: 64.17 }],");
    const { text } = await converted(v1LensFile(members, header));
    expect(text).toContain("const GLASS_ND = 1.51680;");
    expect(text).toContain('type: "Biconvex Positive", nd: 1.5168, vd: 64.17 }');
  });

  it("refuses a printed file that reads a comment elsewhere than the placer put it", () => {
    const placed = new Map([
      ["name", { leading: [], trailing: [{ text: "/* a */" }, { text: "// b" }], dangling: [] }],
    ]);
    const read = (path: string, placement: string, text: string) => ({ text, path, placement }) as never;
    expect(commentMisplaced(placed, [read("name", "trailing", "/* a */"), read("name", "trailing", "// b")])).toBe(
      undefined,
    );
    expect(commentMisplaced(placed, [read("name", "trailing", "/* a */"), read("subtitle", "leading", "// b")])).toBe(
      "the printed file reads the trailing comment of name as the leading comment of subtitle: // b",
    );
    expect(
      commentMisplaced(placed, [
        read("name", "trailing", "/* a */"),
        read("name", "trailing", "// b"),
        read("", "dangling", "// c"),
      ]),
    ).toBe("the printed file holds 3 comments, not the 2 placed");
  });

  it("prefixes a moved comment once, the prefix inside the comment so a directive stays inert", () => {
    expect(movedCommentText("// prettier-ignore", "asph")).toBe("// (moved from asph) prettier-ignore");
    expect(movedCommentText("/* ── Zoom ── */", "zoomPositions")).toBe("/* (moved from zoomPositions) ── Zoom ── */");
    expect(movedCommentText("//", "var")).toBe("// (moved from var)");
    expect(movedCommentText("// (moved from x) kept", "asph")).toBe("// (moved from x) kept");
  });
});

describe("the stop-radius report", () => {
  it("carries the header and first reason of the error when the engine cannot build the converted lens", async () => {
    const failing = async () => ({
      default: () => {
        throw new Error("Lens data cannot be built:\n  • a reason\n  • another");
      },
    });
    const { report } = await converted(v1LensFile(PRIME_MEMBERS), { loadBuildLens: failing });
    expect(report.stops[0].engine).toEqual({ error: "Lens data cannot be built: a reason" });
    expect(formatConversionReport([report])).toContain(
      "engine radius: not computed (Lens data cannot be built: a reason)",
    );
  });

  it("fails the conversion when buildLens cannot load, rather than reporting no radius", async () => {
    const unloadable = async () => Promise.reject(new Error("cannot load buildLens"));
    await expect(convert(v1LensFile(PRIME_MEMBERS), { loadBuildLens: unloadable })).rejects.toThrow(
      "cannot load buildLens",
    );
  });
});

describe("refusals", () => {
  const prime = v1LensFile(PRIME_MEMBERS);
  /** A formatter that edits the converter's own formatting, as a broken one might. */
  const formattedThen = (edit: (text: string) => string) => async (text: string) =>
    edit(await formatWithPrettier(text));

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
    [
      "a comment inside a list spread",
      prime.replace("fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16],", "fstopSeries: [2, ...[2.8 /* c */, 4], 5.6],"),
      /^the comment at line \d+ sits inside a spread$/,
    ],
    [
      "a comment inside an object spread",
      prime.replace("closeFocusM: 0.5,", "...{ closeFocusM: 0.40 /* c */ },"),
      /^the comment at line \d+ sits inside a spread$/,
    ],
    [
      "a comment inside the type import, which the frame rewrites",
      prime.replace("import type { LensDataInput }", "import type { LensDataInput /* note */ }"),
      /^the comment at line 1 is not in the converted file: \/\* note \*\/$/,
    ],
    [
      "a comment that formatting gives another node",
      prime.replace(
        "fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16],",
        "fstopSeries: [\n    2,\n    /* c */\n    2.8,\n    4,\n  ],",
      ),
      /^formatting made the leading comment of aperture\.fStops\[1\] the trailing comment of aperture\.fStops\[0\]: \/\* c \*\/$/,
    ],
    [
      "a converted file ingest refuses",
      prime.replace('{ label: "1", R: 50, d: 5,', "{ label: 1, R: 50, d: 5,"),
      /^the converted file does not ingest:\n {2}• /,
    ],
    [
      "a statement after the export",
      `${prime}const LATER = 1;\n`,
      /^a statement other than the export follows the exported const$/,
    ],
    [
      "a second declarator",
      prime.replace("} satisfies LensDataInput;", "} satisfies LensDataInput,\n  OTHER = 1;"),
      /^the exported const shares its statement with another declaration$/,
    ],
    [
      "an import of more than the type",
      prime.replace("import type { LensDataInput }", "import type { LensDataInput, SurfaceData }"),
      /^the import of LensDataInput imports more than the file's type$/,
    ],
    [
      "no top-level const",
      prime.replace("const LENS_DATA = {", "export default {").replace("\nexport default LENS_DATA;\n", ""),
      /^the file does not export a top-level const$/,
    ],
    [
      "the type not imported",
      prime.replace('import type { LensDataInput } from "../../types/optics.js";\n', ""),
      /^the file does not import LensDataInput$/,
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
      /^the comment at line \d+ is not in the converted file: \/\/ L1 front$/,
    ],
    [
      "a comment written twice",
      formattedThen((text) => text.replace(" // L1 front", " // L1 front\n    // L1 front")),
      /^the converted file holds a comment its source does not, or holds one twice: \/\/ L1 front$/,
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
    const format = async (printed: string) =>
      (await formatWithPrettier(printed)).replace("d: 5.0, sd: 5,", "sd: 5, d: 5.0,");
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
