import { describe, expect, it } from "vitest";
import ts from "typescript";
import { createTemplate, copyCatalogInput, validateDraft } from "../../../src/lensBuilder/draft.js";
import { parseUntrustedDraft, MAX_DRAFT_BYTES, escapeExportString } from "../../../src/lensBuilder/untrusted.js";
import { draftFilename, exportDataTs, exportJson, importJson } from "../../../src/lensBuilder/serialize.js";
import type { LensDataV2Input } from "../../../src/types/lensDataV2.js";
import { ALL_CATALOG_KEYS, authoredInputForKey } from "../../../src/utils/catalog/lensCatalog.js";

function changed(path: string, value: unknown): LensDataV2Input {
  const draft = createTemplate();
  const parts = path.split(".");
  let record = draft as unknown as Record<string, unknown>;
  for (const part of parts.slice(0, -1)) record = record[part] as Record<string, unknown>;
  record[parts.at(-1)!] = value;
  return draft;
}
function issues(value: unknown): string {
  const result = parseUntrustedDraft(value);
  expect(result.ok).toBe(false);
  return result.ok ? "" : result.issues.join("\n");
}

// The gate must never block "Start from": every catalog lens the picker offers is a trusted, valid starting draft.
describe("builder untrusted input gate on catalog copies", () => {
  it("accepts a copy of every catalog lens", () => {
    const refused = ALL_CATALOG_KEYS.flatMap((key) => {
      try {
        copyCatalogInput(authoredInputForKey(key)!);
        return [];
      } catch (error) {
        return [`${key}: ${String(error).slice(0, 160)}`];
      }
    });
    expect(refused).toEqual([]);
  });
});

// Reduced synthetic versions of the audit's t-*, ls-*, s08/s19/s26 and overflow payloads.
describe("builder untrusted input gate", () => {
  it.each([
    ["maker", {}],
    ["subtitle", 42],
    ["publishedAt", {}],
    ["elements.0.type", 5],
    ["elements.0.role", {}],
    ["elements.0.name", 42],
    ["elements.0.label", {}],
    ["elements.0.glass", {}],
    ["focus.description", {}],
    ["catalog.specs", [{ a: 1 }]],
    ["zoom", { stations: {} }],
    ["source", { authors: [{}] }],
    ["visible", "true"],
    ["surfaces.0.interaction", { type: "execute" }],
    ["surfaces.0.asphere", { A99: 1 }],
    ["gaps.6.values", "bad"],
    ["catalog.imageFormat", "constructor"],
    ["catalog.lensMounts", ["__proto__"]],
    ["maker", "../../../escaped"],
    ["maker", "a\\b"],
    ["maker", ".hidden"],
    ["key", "../escape"],
    ["key", "Upper"],
    ["name", "a\u202eb"],
    ["name", "a\u0000b"],
    ["name", "a\u0085b"],
    ["name", "a\ud800b"],
    ["name", "a\nd"],
    ["name", "x".repeat(201)],
    ["subtitle", "x".repeat(201)],
    ["key", "x".repeat(81)],
    ["maker", "x".repeat(61)],
    ["elements.0.label", "x".repeat(201)],
    ["gaps.6.label", "x".repeat(65)],
    ["elements.0.glass", "x".repeat(201)],
    ["focus.description", "x".repeat(4001)],
    ["source", { authors: ["x".repeat(1001)] }],
    ["publishedAt", "2026-10-26"],
    ["surfaces.0.sd", Infinity],
    ["surfaces.0.rimExtensionSd", Infinity],
    ["surfaces.0.rimExtensionSd", "12"],
    ["surfaces.0.R", NaN],
    ["elements.0.vd", -1e19],
    ["aperture.fStops", [1e19]],
    ["source", { patentYear: Infinity }],
  ])("rejects unsafe %s (%j) for objects and JSON", (path, value) => {
    const bad = changed(path as string, value);
    expect(issues(bad)).toBeTruthy();
    expect(issues(JSON.stringify(bad))).toBeTruthy();
    expect(() => exportDataTs(bad)).toThrow();
    expect(() => exportJson(bad)).toThrow();
    expect(() => copyCatalogInput(bad)).toThrow();
    expect(validateDraft(bad).ok).toBe(false);
  });

  it.each([
    "__proto__",
    "constructor",
    "prototype",
    "toString",
    "hasOwnProperty",
    "valueOf",
    "bad label",
    "a\\b",
    "../5",
  ])("rejects reserved or unsafe surface label %s", (value) => {
    expect(issues(changed("surfaces.0.label", value))).toContain("surface label");
    expect(issues(changed("gaps", { [value]: { values: [[1, 2]] } }))).toBeTruthy();
  });

  it.each(["__proto__", "constructor", "prototype"])("rejects dangerous own keys anywhere: %s", (key) => {
    const bad = JSON.stringify(createTemplate()).replace('"yScFill":0.55', `"yScFill":0.55,"${key}":{}`);
    expect(issues(bad)).toContain("Dangerous");
    expect(() => importJson(bad)).toThrow();
    expect(Object.hasOwn(Object.prototype, "polluted")).toBe(false);
  });

  it("rejects exponent overflow, unknown keys with paths, getters, sparse arrays and cycles", () => {
    expect(issues(JSON.stringify(createTemplate()).replace('"R":30', '"R":1e400'))).toContain("finite");
    expect(issues(changed("focus.unknown", true))).toContain("draft.focus.unknown");
    expect(issues(changed("focus.unknown", undefined))).toContain("draft.focus.unknown");
    const getter = Object.defineProperty(createTemplate(), "subtitle", {
      get() {
        throw new Error("executed");
      },
    });
    expect(issues(getter)).toContain("Accessors");
    expect(issues(changed("aperture.fStops", Array(2)))).toContain("Sparse");
    const cyclic = createTemplate();
    Object.assign(cyclic, { self: cyclic });
    expect(issues(cyclic)).toContain("depth");
  });

  it("bounds bytes before parsing, depth and aggregate nodes before schema traversal", () => {
    expect(issues(" ".repeat(MAX_DRAFT_BYTES + 1))).toContain("1 MB");
    expect(issues('"' + "é".repeat(MAX_DRAFT_BYTES / 2) + '"')).toContain("1 MB");
    let deep: unknown = 1;
    for (let i = 0; i < 11; i++) deep = { a: deep };
    expect(issues(deep)).toContain("depth");
    const gaps = Object.fromEntries(
      Array.from({ length: 250 }, (_, i) => [`S${i}`, { values: Array.from({ length: 24 }, () => Array(60).fill(1)) }]),
    );
    expect(issues(changed("gaps", gaps))).toContain("300000 nodes");
  });

  it.each([
    ["elements", Array(101).fill({})],
    ["surfaces", Array(251).fill({})],
    ["media", Array(21).fill({})],
    ["rearPlates", Array(11).fill({})],
    ["zoom", { stations: Array(513).fill({}) }],
    ["focus.keyframes", Array(257).fill(0)],
    ["focus.published", Array(25).fill(0)],
    ["gaps.6.values", [Array(257).fill(1)]],
    ["gaps.6.values", Array(513).fill([1])],
    ["aberrationControl", { label: "AB", gaps: { "6": { values: Array(513).fill([1, 2]) } } }],
    ["aperture.fStops", Array(41).fill(4)],
    ["rays", { rayFractions: Array(65).fill(0.5) }],
    ["rays", { offAxisFractions: Array(65).fill(0.5) }],
    ["catalog.specs", Array(41).fill("spec")],
    ["catalog.lensMounts", Array(21).fill("canon-ef")],
  ])("bounds collection %s", (path, value) => {
    expect(issues(changed(path as string, value))).toBeTruthy();
  });

  // Values that passed the gate but hung the diagram: a 1.5-billion-line grid and an endless mirror-cavity trace.
  it.each([
    ["layout.scFill", 1e-8],
    ["layout.yScFill", 0],
    ["layout.svgW", 1e18],
    ["opticalPath", { maxInteractions: 1e18 }],
    ["opticalPath", { maxInteractions: 2.5 }],
  ])("bounds render-driving number %s", (path, value) => {
    expect(issues(changed(path as string, value))).toMatch(/Expected (a number|an integer) from/);
  });

  it("accepts unfinished references, legitimate Unicode and only LF in long free text", () => {
    const draft = changed("surfaces.1.label", "1");
    draft.focus.description = "Source note\nNext line μm 😀";
    draft.maker = null;
    draft.name = "Lens 日本語 😀";
    const result = parseUntrustedDraft(draft);
    expect(result.ok).toBe(true);
    expect(validateDraft(draft).ok).toBe(false);
    if (result.ok) {
      expect(result.draft).toEqual(draft);
      expect(result.draft).not.toBe(draft);
      expect(Object.getPrototypeOf(result.draft)).toBe(Object.prototype);
      expect(result.draft.surfaces[0]).not.toBe(draft.surfaces[0]);
    }
    expect(issues(changed("focus.description", "a\tb"))).toContain("Control");
  });

  it("accepts every authored optional record and enforces tagged union paths", () => {
    const draft = createTemplate();
    draft.maker = "Voigtländer";
    draft.publishedAt = "2026-10-26T12:00:00Z";
    draft.source = {
      patentNumber: "US1234567",
      patentYear: 1960,
      example: { label: "Example 1", id: "1" },
      authors: ["A"],
      assignees: ["B"],
      errata: [
        { status: "unresolved", note: "Uncertain\nSource note" },
        {
          status: "corrected",
          surface: "1",
          field: "R",
          printed: 31,
          applied: 30,
          evidence: ["source-summary", "claims"],
          note: "Synthetic note",
        },
      ],
    };
    draft.catalog = {
      lensMounts: ["canon-ef"],
      imageFormat: "135-full-frame",
      imageCircleMm: 43,
      specs: ["Synthetic"],
      elementCount: 3,
      groupCount: 3,
      acceptsTeleconverters: false,
      opticalConfiguration: { groupKey: "synthetic", label: "OUT", order: 0 },
      focalLengthMm: { marketing: [50, 55], design: 50 },
      fNumber: { marketing: 2.8, design: 2.8 },
    };
    draft.media = [{ id: "cement", name: "Cement", nd: 1.5 }];
    draft.elements[0] = {
      ...draft.elements[0],
      indexReference: "e",
      indexReferenceNote: "Source note",
      focalLengthMm: 40,
      apd: "inferred",
      apdNote: "Qualified",
      role: "Front group",
      diagramLabel: "L1",
      maxSdRatio: 1.1,
      absorptionCoefficientPerMm: 0,
      cemented: "D1",
      dPgF: 0,
      nC: 1.5,
      nF: 1.6,
      ng: 1.7,
      span: ["1", "2"],
    };
    draft.surfaces[0] = {
      ...draft.surfaces[0],
      innerSd: 0,
      asphere: { K: 0, A4: 1e-9 },
      stopPlacement: "inside-element",
      interaction: {
        type: "refract",
        incidentSide: "front",
        inactiveSide: "ignore",
        mirrorKind: "first-surface",
        normal: { z: 1, y: 0 },
      },
      diffractive: {
        kind: "radial-polynomial",
        referenceWavelengthNm: 550,
        diffractionOrder: 1,
        terms: [{ radialPower: 2, coefficient: 1e-5 }],
      },
    };
    draft.zoom = {
      stations: [
        {
          focalLengthMm: 50,
          nominalFNumber: 2.8,
          stopSemiDiameter: 5,
          closeFocusM: 1,
          label: "Wide",
          published: true,
          publishedFocus: [1],
        },
      ],
      apertureModel: "fixed-iris",
      step: 0.01,
    };
    draft.focus = {
      closeFocusM: 1,
      keyframes: [0, 1],
      step: 0.01,
      description: "Source\nnote",
      published: [1],
      conjugates: [
        { zoomStation: 0, keyframe: 1, objectDistanceMm: 1000, distanceReference: "first-surface", source: "Source" },
      ],
    };
    draft.aberrationControl = {
      label: "AB",
      description: "Ring",
      minLabel: "Min",
      centerLabel: "Normal",
      maxLabel: "Max",
      step: 0.01,
      gaps: { "6": { label: "BF", values: [[1, 2, 3]] } },
    };
    draft.projection = {
      kind: "fisheye-equisolid",
      focalLengthMm: [50],
      fullFieldDeg: [180],
      imageCircleMm: [43],
      maxTraceFieldDeg: [90],
    };
    draft.opticalPath = {
      mode: "auto",
      surfaceOrder: ["1", "2"],
      maxInteractions: 12,
      imagePlane: { z: 100, y: 0, normal: { z: 1, y: 0 }, label: "Image" },
    };
    draft.perspectiveControl = {
      shiftRangeMm: [-10, 10],
      tiltRangeDeg: [-5, 5],
      shiftStepMm: 0.1,
      tiltStepDeg: 0.1,
      tiltPivot: { frame: "camera", basis: "mechanical-axis", zOffsetFromImagePlaneMm: -20 },
    };
    draft.rearPlates = [
      {
        label: "CG",
        thicknessMm: 1,
        nd: 1.5,
        vd: 50,
        glass: "N-BK7",
        indexReference: "d",
        dPgF: 0,
        nC: 1.4,
        nF: 1.6,
        ng: 1.7,
        gapAfterMm: 1,
        sd: 20,
        source: "Source",
      },
    ];
    draft.groups = [{ text: "Front", fromSurface: "1", toSurface: "2" }];
    draft.doublets = draft.groups;
    draft.layout = { svgW: 600, svgH: 400, scFill: 0.7, yScFill: 0.5, maxAspectRatio: 2, lensShiftFrac: 0 };
    draft.rays = { rayFractions: [0, 1], rayLeadFrac: 1, offAxisFieldFrac: 0.5, offAxisFractions: [0.5] };
    draft.checks = { gapSagFrac: 0.9, maxRimAngleDeg: 90 };
    const result = parseUntrustedDraft(draft);
    expect(result.ok ? result.draft : result.issues).toEqual(draft);
    expect(issues({ ...draft, projection: { ...draft.projection, unknown: true } })).toContain(
      "draft.projection.unknown",
    );
    expect(issues({ ...draft, source: { errata: [{ status: "corrected", unknown: true }] } })).toContain(
      "draft.source.errata[0].unknown",
    );
  });

  it("keeps large accepted exports within the import byte limit", () => {
    const draft = createTemplate();
    draft.gaps = Object.fromEntries(
      Array.from({ length: 75 }, (_, i) => [
        `S${i}`,
        { values: Array.from({ length: 24 }, () => Array(24).fill(1e7)) },
      ]),
    );
    expect(parseUntrustedDraft(draft).ok).toBe(true);
    const json = exportJson(draft);
    expect(new TextEncoder().encode(json).length).toBeLessThanOrEqual(MAX_DRAFT_BYTES);
    expect(parseUntrustedDraft(json).ok).toBe(true);
  });

  it("copies only own data, drops known optional undefined fields, and exports inherited names safely", () => {
    const draft = createTemplate();
    Object.setPrototypeOf(draft.catalog!, { hostile: true });
    Object.assign(draft, { publishedAt: undefined });
    const result = parseUntrustedDraft(draft);
    expect(result.ok).toBe(true);
    expect(exportDataTs(draft)).not.toContain("hostile");
    const gaps = Object.assign(Object.create(null), { toString: { values: [[1, 2]] } });
    expect(issues(changed("gaps", gaps))).toContain("surface label");
  });
});

describe("builder export defenses", () => {
  it("escapes invisible code points and strips them from the banner without executing payloads", () => {
    expect(escapeExportString("\u0000\u0085\u202e\u2066\u2028\u2029\u200b")).toBe(
      '"\\u0000\\u0085\\u202e\\u2066\\u2028\\u2029\\u200b"',
    );
    expect(escapeExportString("\b\f\n\r\t")).toBe('"\\u0008\\u000c\\u000a\\u000d\\u0009"');
    expect(JSON.parse(escapeExportString(String.raw`literal \n and \t`))).toBe(String.raw`literal \n and \t`);
    const draft = createTemplate();
    draft.name = 'Name *\u200b/; throw "payload"; /*\u2028\u2029\u200b';
    draft.focus.description = "Text\nnext";
    const source = exportDataTs(draft);
    expect(source).not.toMatch(/[\u2028\u2029\u200b]/);
    expect(source).toContain("\\u2028\\u2029\\u200b");
    expect(source).toContain("Text\\u000anext");
    expect(source.slice(source.indexOf("/**"), source.indexOf("const LENS_DATA"))).not.toContain("\\u2028");
    const ast = ts.createSourceFile("export.ts", source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
    expect(ast.statements).toHaveLength(3);
    expect(ast.statements[1].kind).toBe(ts.SyntaxKind.VariableStatement);
    expect(importJson(exportJson(draft))).toEqual(draft);
    expect(exportJson(draft)).toContain("\\u2028");
  });

  it.each(["con", "prn", "aux", "nul", "com1", "com9", "lpt1", "lpt9"])("prefixes Windows reserved name %s", (key) => {
    expect(draftFilename({ ...createTemplate(), key })).toBe(`_${key}.data.ts`);
  });
  it("caps the complete filename at 80 characters for both extensions", () => {
    const draft = { ...createTemplate(), key: "a".repeat(300) };
    expect(draftFilename(draft)).toHaveLength(80);
    expect(draftFilename(draft, "json")).toHaveLength(80);
    expect(draftFilename({ ...draft, key: "com10" })).toBe("com10.data.ts");
  });
});

describe("builder gate residuals from the security re-test", () => {
  it("accepts non-Latin makers and CRLF free text, and refuses unsafe maker paths", () => {
    expect(parseUntrustedDraft(changed("maker", "ЛОМО")).ok).toBe(true);
    expect(parseUntrustedDraft(changed("maker", "キヤノン")).ok).toBe(true);
    expect(parseUntrustedDraft(changed("focus.description", "Line one\r\nLine two")).ok).toBe(true);
    for (const maker of ["../escaped", "a/b", "a\\b", ".hidden"])
      expect(parseUntrustedDraft(changed("maker", maker)).ok).toBe(false);
  });

  it("checks publishedAt with the build's own rule", () => {
    expect(parseUntrustedDraft(changed("publishedAt", "2026-10-27T12:00:00Z")).ok).toBe(true);
    expect(parseUntrustedDraft(changed("publishedAt", "2026-10-27T12:00:00.000Z")).ok).toBe(true);
    expect(parseUntrustedDraft(changed("publishedAt", "2026-13-45T99:99:99Z")).ok).toBe(false);
    expect(parseUntrustedDraft(changed("publishedAt", "2026-10-27")).ok).toBe(false);
  });
});
