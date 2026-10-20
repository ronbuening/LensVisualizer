/**
 * The lens-data converter library (`scripts/lens-data-convert/`): V1 text to V2 text, and V2 text to V1, with its
 * report, on synthetic fixtures only. The S2.P2.T1 fixture pairs check the converted prescription in each direction;
 * the source-text fixtures check the printed file: literal forms, number tokens, comments and their moves, blank
 * lines, the file's frame, a V2 source, the stop-radius report, the V1 print order and the stop radius V1's type
 * requires, and one refusal of each kind. One test runs the library under plain Node, as the organizer will.
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
import { commentMisplaced, movedCommentText, movedNote } from "../../scripts/lens-data-convert/comments.mjs";
import { formatConversionReport } from "../../scripts/lens-data-convert/report.mjs";
import { evaluateLensDataSource } from "../../scripts/lens-data-ast.mjs";
import { ingestLens, ingestTeleconverter } from "../../src/optics/lensDataConversion.js";
import { V1_GROUP_STARTS, V1_PRINT_ORDER } from "../../src/optics/prescription/v1/toLensData.js";
import type { LensDataInput } from "../../src/types/optics.js";
import { FIXTURE_PAIRS, MAXIMAL_ZOOM, type FixturePair } from "../src/optics/prescription/ingestV2Fixtures.js";
import {
  ALL_SPHERICAL_V1_PRIME,
  BANNERED_V1_PRIME,
  BUILDABLE_V2,
  BANNERED_V1_ZOOM,
  COMMENTED_V2_ZOOM,
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

/** The member a comment leads in a printed file: the first line below it, past other comments and blank lines. */
function ledMember(text: string, comment: string): string | undefined {
  const lines = text.split("\n");
  const at = lines.findIndex((line) => line.trim() === comment);
  if (at < 0) return undefined;
  return lines
    .slice(at + 1)
    .find((line) => !/^\s*(\/\/|\/\*|$)/.test(line))
    ?.trim()
    .split(":")[0];
}

/** Convert, failing the test on a refusal. */
async function converted(text: string, options: Partial<ConversionOptions> = {}) {
  const result = await convert(text, options);
  expect(result.refusal).toBeUndefined();
  return result as { text: string; refusal: undefined; report: (typeof result)["report"] };
}

/** A pair's V2 side as a file, or any V2 object, its numbers written as JSON writes them. */
function v2Text(data: object, kind: "lens" | "teleconverter" = "lens"): string {
  const type = kind === "lens" ? "LensDataV2Input" : "TeleconverterDataV2Input";
  return [
    `import type { ${type} } from "../../types/lensDataV2.js";`,
    "",
    `const DATA = ${JSON.stringify(data, null, 2)} satisfies ${type};`,
    "",
    "export default DATA;",
    "",
  ].join("\n");
}

/** The prescription a file's text ingests to. */
function prescriptionOf(text: string, kind: "lens" | "teleconverter" = "lens") {
  const data = evaluateLensDataSource(text) as never;
  return kind === "lens" ? ingestLens(data).prescription : ingestTeleconverter(data).prescription;
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

  it("keeps a one-line block comment before its item in a list of numbers, which Prettier fills", async () => {
    const members = PRIME_MEMBERS.replace(
      "fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16],",
      "fstopSeries: [2, 2.8, /* b */ 4, 5.6, 8, 11, 16],",
    ).replace("  ],", '  ],\n  var: { "2": [80, /* w */ 81] },');
    const v2 = await converted(v1LensFile(members));
    expect(v2.text).toContain("fStops: [2, 2.8, /* b */ 4, 5.6, 8, 11, 16]");
    expect(v2.text).toContain('gaps: { "2": { values: [[80, /* w */ 81]] } },');
    expect((await converted(v2.text)).text).toBe(v2.text);
    const v1 = await converted(v2.text, { toVersion: 1 });
    expect(v1.text).toContain("fstopSeries: [2, 2.8, /* b */ 4, 5.6, 8, 11, 16],");
    expect(v1.text).toContain('var: { "2": [80, /* w */ 81] },');
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
    expect(commentMisplaced(placed, [read("name", "trailing", "// b"), read("name", "trailing", "/* a */")])).toBe(
      "the printed file holds the trailing comments of name in another order: /* a */",
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

  it("reads back only its own note, exactly as it writes one", () => {
    for (const text of ["// rest", "//", "/* ── Zoom ── */", "/* two\n * lines */"]) {
      expect(movedNote(movedCommentText(text, "zoomPositions"))).toEqual({ from: "zoomPositions", text });
    }
    /* Any path the engine spells: a quoted key may hold spaces, parentheses and escaped quotes. */
    for (const from of ['var["STO (iris)"]', 'asph["a\\"b"].K', '["odd key"]', "zoom.stations[1].published"]) {
      expect(movedNote(movedCommentText("// rest", from))).toEqual({ from, text: "// rest" });
    }
    /* Text with no whitespace after its delimiter comes back with the space the note put there. */
    expect(movedNote(movedCommentText("//x", "var"))).toEqual({ from: "var", text: "// x" });
    expect(movedNote(movedCommentText("/**doc */", "var"))).toEqual({ from: "var", text: "/* *doc */" });
    for (const text of [
      "//(moved from var) x",
      "// (Moved from var) x",
      "// (moved from var)x",
      "// see (moved from var)",
    ]) {
      expect(movedNote(text), text).toBeUndefined();
    }
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
        "fstopSeries: [\n    2,\n    /* c\n       d */\n    2.8,\n    4,\n  ],",
      ),
      /^formatting made the leading comment of aperture\.fStops\[1\] the trailing comment of aperture\.fStops\[0\]: \/\* c$/,
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

describe("the V1 direction (S2.P3.T2)", () => {
  /** The hand-written V2 prime without its published keyframe, which has no focus travel to build. */
  it.each(FIXTURE_PAIRS.map((pair) => [pair.family, pair] as const))(
    "%s: the V2 side converts to V1 text that ingests to the pair's prescription, and back to V2",
    async (_family, pair) => {
      const prescription = prescriptionOf(v2Text(pair.v2, pair.kind), pair.kind);
      const v1 = await converted(v2Text(pair.v2, pair.kind), { kind: pair.kind, toVersion: 1 });
      expect(v1.text).toContain(
        pair.kind === "lens" ? "satisfies LensDataInput;" : "satisfies TeleconverterDataInput;",
      );
      expect(prescriptionOf(v1.text, pair.kind)).toEqual(prescription);
      const v2 = await converted(v1.text, { kind: pair.kind });
      expect(prescriptionOf(v2.text, pair.kind)).toEqual(prescription);
    },
  );

  it("prints the file's members in V1_PRINT_ORDER, a blank line before each section, and records as the view writes", async () => {
    /* The maximal zoom ingests but does not build; its stop takes its schedule's first value from a stub. */
    const schedule = async () => ({ default: () => ({ zoomStopSDs: [5, 5.5, 6] }) });
    const { text } = await converted(v2Text(MAXIMAL_ZOOM), { toVersion: 1, loadBuildLens: schedule });
    const v1 = evaluateLensDataSource(text) as Record<string, Record<string, unknown>[] & Record<string, unknown>>;
    const members = Object.keys(v1);
    expect(members).toEqual(V1_PRINT_ORDER.lens.filter((member) => members.includes(member)));
    expect(members.length).toBeGreaterThan(55);
    const lines = text.split("\n");
    const blankBefore = members.filter(
      (member) => lines[lines.findIndex((line) => line.startsWith(`  ${member}:`)) - 1] === "",
    );
    const sections = V1_GROUP_STARTS.lens.map((start) => {
      const from = V1_PRINT_ORDER.lens.indexOf(start);
      const next = V1_GROUP_STARTS.lens.map((other) => V1_PRINT_ORDER.lens.indexOf(other)).find((at) => at > from);
      return V1_PRINT_ORDER.lens.slice(from, next).find((member) => members.includes(member));
    });
    expect(blankBefore).toEqual(sections.filter((member) => member !== undefined));
    expect(Object.keys(v1.elements[0])).toEqual([
      "id",
      "name",
      "diagramLabel",
      "maxSdRatio",
      "label",
      "type",
      "nd",
      "vd",
      "indexReference",
      "indexReferenceNote",
      "fl",
      "glass",
      "role",
      "absorptionCoefficientPerMm",
      "apd",
      "apdNote",
      "cemented",
      "dPgF",
      "nC",
      "nF",
      "ng",
      "fromSurface",
      "toSurface",
    ]);
    expect(Object.keys(v1.surfaces[1])).toEqual([
      "label",
      "R",
      "d",
      "nd",
      "elemId",
      "sd",
      "innerSd",
      "interaction",
      "diffractive",
    ]);
    expect(Object.keys(v1.rearPlates[0])).toEqual([
      "label",
      "thicknessMm",
      "nd",
      "vd",
      "glass",
      "indexReference",
      "dPgF",
      "nC",
      "nF",
      "ng",
      "gapAfterMm",
      "sd",
      "source",
    ]);
    expect(Object.keys(v1.aberrationControl)).toEqual([
      "label",
      "description",
      "minLabel",
      "centerLabel",
      "maxLabel",
      "step",
      "var",
      "varLabels",
    ]);
    expect(Object.keys(v1.finiteConjugates[0])).toEqual([
      "focusT",
      "zoomT",
      "objectDistanceMm",
      "distanceReference",
      "source",
    ]);
    expect(text.indexOf("    STO: [")).toBeLessThan(text.indexOf('    "4": ['));
  });

  it("writes the engine's radius as a derived stop's sd, which V1 ingest sets aside", async () => {
    expect(BUILDABLE_V2).not.toBe(V2_SOURCE_FILE);
    const { text, report } = await converted(BUILDABLE_V2, { toVersion: 1 });
    const v1 = evaluateLensDataSource(text) as LensDataInput;
    const sd = v1.surfaces[1].sd;
    expect(sd).toBeGreaterThan(0);
    expect(Number(sd.toFixed(3))).toBe(sd);
    expect(report.stopWritten).toEqual({ at: "surfaces[1].sd", value: sd, stop: "prime" });
    expect(formatConversionReport([report])).toContain(
      `  stop radius written for V1's type: surfaces[1].sd = ${sd} (the engine's radius; V1 ingest sets it aside)`,
    );
    expect(prescriptionOf(text)).toEqual(prescriptionOf(BUILDABLE_V2));
  });

  it("writes a scheduled zoom's first schedule value, not the radius its V1 source carried", async () => {
    const pair = FIXTURE_PAIRS.find((candidate) => candidate.family === "stop schedule")!;
    const source = structuredClone(pair.v1) as LensDataInput;
    source.surfaces[0].sd = 11.815;
    source.zoomStopSemiDiameters = [8.115, 9, 10];
    const v1Source = v1LensFile(JSON.stringify(source, null, 2).slice(2, -2));
    const v2 = await converted(v1Source);
    const v1 = await converted(v2.text, { toVersion: 1 });
    expect((evaluateLensDataSource(v1.text) as LensDataInput).surfaces[0].sd).toBe(8.115);
    expect(v1.report.stopWritten).toEqual({ at: "surfaces[0].sd", value: 8.115, stop: "schedule" });
    expect(prescriptionOf(v1.text)).toEqual(prescriptionOf(v1Source));
  });

  it("refuses a file whose stop needs a radius for V1's type that the engine cannot derive", async () => {
    const failing = async () => ({
      default: () => {
        throw new Error("Lens data cannot be built:\n  • a reason");
      },
    });
    const result = await convert(BUILDABLE_V2, { toVersion: 1, loadBuildLens: failing });
    expect(result.refusal).toBe(
      "surfaces[1].sd: V1's type requires a stop radius, and the engine derives none (Lens data cannot be built: a reason)",
    );
  });

  it("reports every medium V1 cannot hold, with its id and any name, in the list's order", async () => {
    const pair = FIXTURE_PAIRS.find((candidate) => candidate.family === "media")!;
    const v2 = structuredClone(pair.v2) as { media: { name?: string }[] };
    delete v2.media[1].name;
    const { report } = await converted(v2Text(v2), { toVersion: 1 });
    expect(report.media).toEqual([
      { from: "media[0]", id: "cement", name: "Cement layer" },
      { from: "media[1]", id: "water" },
    ]);
    expect(formatConversionReport([report])).toContain('    media[1]: id "water"\n');
  });

  it("moves a station record's comment to the first station list, a medium's to the file's object, each once", async () => {
    const { text, report } = await converted(COMMENTED_V2_ZOOM, { toVersion: 1 });
    expect(text).toContain(
      "  // (moved from zoom.stations[1]) the middle station, tabulated as Example 2\n  zoomPositions:",
    );
    expect(text).toContain(
      "  // (moved from media[0]) a cement layer between the elements\n} satisfies LensDataInput;",
    );
    expect(text).toContain('{ label: "1", R: 50, d: 5, nd: 1.5168, elemId: 1, sd: 15 }, // L1 front');
    expect(report.moved.map((move) => [move.from, move.to])).toEqual([
      ["media[0]", ""],
      ["zoom.stations[1]", "zoomPositions"],
    ]);
    expect(report.media).toEqual([{ from: "media[0]", id: "cement", name: "Cement layer" }]);
    expect(formatConversionReport([report])).toContain(
      "  media V1 cannot hold, written as their surfaces' nd (ids, names and order drop):\n" +
        '    media[0]: id "cement", name "Cement layer"',
    );
    expect(prescriptionOf(text)).toEqual(prescriptionOf(COMMENTED_V2_ZOOM));
    const back = await converted(text);
    expect(prescriptionOf(back.text)).toEqual(prescriptionOf(COMMENTED_V2_ZOOM));
  });

  it("takes zoomPositions first among the lists that hold a station, and its report line names the list", async () => {
    const source = COMMENTED_V2_ZOOM.replace("{ focalLengthMm: 24 }", "{ focalLengthMm: 24, nominalFNumber: 2 }")
      .replace("{ focalLengthMm: 50 }", "{ focalLengthMm: 50, nominalFNumber: 2.8 }")
      .replace("{ focalLengthMm: 100 }", "{ focalLengthMm: 100, nominalFNumber: 4 }")
      .replace("aperture: { nominalFNumber: 2, fStops", "aperture: { fStops");
    const { text, report } = await converted(source, { toVersion: 1 });
    expect(text.indexOf("  nominalFno: [")).toBeLessThan(text.indexOf("  zoomPositions:"));
    expect(ledMember(text, "// (moved from zoom.stations[1]) the middle station, tabulated as Example 2")).toBe(
      "zoomPositions",
    );
    expect(formatConversionReport([report])).toMatch(/line \d+: zoom\.stations\[1\] → zoomPositions: /);
  });

  it("leads, unmoved, the first V1 member written from inside a member V1 has no counterpart for", async () => {
    const source = COMMENTED_V2_ZOOM.replace("  schema: 2,", "  /* ── Identity ── */\n  schema: 2,")
      .replace(
        '  name: "Fixture 24-100mm f/2",\n',
        '  name: "Fixture 24-100mm f/2",\n\n  catalog: {\n    specs: ["4 ELEMENTS"],\n' +
          "    /* ── Metadata ── */\n    focalLengthMm: { marketing: [24, 100] },\n  },\n",
      )
      .replace("  zoom: {\n    stations:", "  /* ── Zoom ── */\n  zoom: {\n    // wide to tele\n    stations:")
      .replace("  focus: {", "  /* ── Focus ── */\n  focus: {")
      .replace("  gaps: {", "  /* ── Variable gaps ── */\n  gaps: {")
      .replace("  aperture: {", "  /* ── Aperture ── */\n  aperture: {")
      .replace("  layout: {", "  /* ── Layout ── */\n  layout: {");
    const { text, report } = await converted(source, { toVersion: 1 });
    expect(
      Object.fromEntries(
        [
          "/* ── Identity ── */",
          "/* ── Metadata ── */",
          "/* ── Zoom ── */",
          "// wide to tele",
          "/* ── Focus ── */",
          "/* ── Variable gaps ── */",
          "/* ── Aperture ── */",
          "/* ── Layout ── */",
        ].map((banner) => [banner, ledMember(text, banner)]),
      ),
    ).toEqual({
      "/* ── Identity ── */": "key",
      "/* ── Metadata ── */": "focalLengthMarketing",
      "/* ── Zoom ── */": "zoomPositions",
      "// wide to tele": "zoomPositions",
      "/* ── Focus ── */": "closeFocusM",
      "/* ── Variable gaps ── */": "var",
      "/* ── Aperture ── */": "nominalFno",
      "/* ── Layout ── */": "yScFill",
    });
    expect(report.moved.map((move) => move.from)).toEqual(["media[0]", "zoom.stations[1]"]);
  });

  it("reads a banner's note only when it names a member the banner may lead, and drops it then", async () => {
    const source = COMMENTED_V2_ZOOM.replace(
      "  focus: {",
      "  // (moved from asph) Not one of focus's members.\n  focus: {",
    ).replace("  aperture: {", "  // (moved from fstopSeries) The stops.\n  // Said once.\n  aperture: {");
    const { text, report } = await converted(source, { toVersion: 1 });
    expect(ledMember(text, "// (moved from asph) Not one of focus's members.")).toBe("closeFocusM");
    expect(ledMember(text, "// The stops.")).toBe("fstopSeries");
    expect(ledMember(text, "// Said once.")).toBe("fstopSeries");
    expect(text).not.toContain("(moved from fstopSeries)");
    expect(report.moved.map((move) => move.from)).toEqual(["media[0]", "zoom.stations[1]"]);
  });

  it("reads a note on a node V1 has a counterpart for, nested or not, when it names a node written from inside it", async () => {
    const source = COMMENTED_V2_ZOOM.replace(
      '    "3": {\n      values:',
      '    // (moved from varLabels[0]) The back focus.\n    "3": {\n      label: "BF",\n      values:',
    ).replace(
      '    { label: "1", R: 50, d: 5, sd: 15, medium: 1 }, // L1 front',
      '    // (moved from surfaces[1].sd) The rim.\n    { label: "1", R: 50, d: 5, sd: 15, medium: 1 }, // L1 front',
    );
    const { text, report } = await converted(source, { toVersion: 1 });
    expect(text).toMatch(/\/\/ The back focus\.\n\s+\["3", "BF"\]/);
    expect(text).toMatch(/\/\/ The rim\.\n\s+sd: 15/);
    expect(text).not.toMatch(/moved from (varLabels|surfaces)/);
    expect(report.moved.map((move) => move.from)).toEqual(["media[0]", "zoom.stations[1]"]);
  });

  it.each([
    ["prime", BANNERED_V1_PRIME],
    ["all-spherical prime (asph: {})", ALL_SPHERICAL_V1_PRIME],
    ["zoom", BANNERED_V1_ZOOM],
  ])(
    "brings every template banner of a V1 %s back, V1 → V2 → V1, on the member it led and moved by none",
    async (_kind, source) => {
      const there = await converted(source);
      const back = await converted(there.text, { toVersion: 1 });
      const commentLines = (text: string) =>
        text
          .split("\n")
          .map((line) => line.trim())
          .filter((line) => line.startsWith("//") || line.startsWith("/*"))
          .sort();
      const banners = commentLines(source).filter((line) => line.startsWith("/* ──"));
      expect(banners.length).toBeGreaterThanOrEqual(9);
      const led = (text: string) => Object.fromEntries(banners.map((banner) => [banner, ledMember(text, banner)]));
      expect(led(back.text)).toEqual(led(source));
      expect(back.report.moved).toEqual([]);
      expect(commentLines(back.text)).toEqual(commentLines(source));
      expect(prescriptionOf(back.text)).toEqual(prescriptionOf(source));
    },
  );

  it("prints a node's own banner before a run moved to it, so going back to V1 the note takes its run alone", async () => {
    const asph =
      "  /* ── Aspherical coefficients ── keyed by surface label. */\n" +
      '  asph: { "1": { K: 0, A4: 1.25e-6, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 } },\n\n';
    const surfaces = "  /* ── Surface prescription ── */\n";
    const source = BANNERED_V1_PRIME.replace(asph, "").replace(surfaces, asph + surfaces);
    expect(source.indexOf("asph:")).toBeLessThan(source.indexOf("surfaces:"));
    const there = await converted(source);
    expect(there.text).toContain(
      `${surfaces}  /* (moved from asph) ── Aspherical coefficients ── keyed by surface label. */\n  surfaces: [`,
    );
    expect((await converted(there.text)).text).toBe(there.text);
    const back = await converted(there.text, { toVersion: 1 });
    expect(ledMember(back.text, "/* ── Surface prescription ── */")).toBe("surfaces");
    expect(ledMember(back.text, "/* ── Aspherical coefficients ── keyed by surface label. */")).toBe("asph");
    expect(back.report.moved).toEqual([]);
  });

  it("writes back an empty asph a note names, and only when the note's run returns to it", async () => {
    const there = await converted(ALL_SPHERICAL_V1_PRIME);
    expect(there.text).not.toContain("asph:");
    const back = await converted(there.text, { toVersion: 1 });
    expect(back.text).toContain("  /* ── Aspherical coefficients ── keyed by surface label. */\n  asph: {},\n");
    /* A note on a node that does not hold asph's home leaves the comment where it is, and writes no asph. */
    const elsewhere = await converted(
      COMMENTED_V2_ZOOM.replace("  focus: {", "  // (moved from asph) Stray.\n  focus: {"),
      {
        toVersion: 1,
      },
    );
    expect(elsewhere.text).not.toContain("asph:");
  });

  it("prints a restored flat radius as 1e15, keeps a V2 literal's text, and prints a value V1 holds twice from its value", async () => {
    const source = BUILDABLE_V2.replace('{ label: "1", R: 50, d: 5,', '{ label: "1", R: 50.000, d: 5,').replace(
      'type: "Biconvex Positive", nd: 1.5168,',
      'type: "Biconvex Positive", nd: 1.51680,',
    );
    const { text } = await converted(source, { toVersion: 1 });
    expect(text).toContain('{ label: "WTR", R: 1e15, d: 0.001, nd: 1.33306, elemId: 0, sd: 20 }');
    expect(text).toContain('{ label: "1", R: 50.000, d: 5, nd: 1.5168, elemId: 1, sd: 15 }');
    expect(text).toContain('type: "Biconvex Positive", nd: 1.51680, vd: 64.17 }');
  });
});
