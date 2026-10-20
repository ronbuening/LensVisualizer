/**
 * The V2 view and source paths: where ingest records it read each value when asked, how the V2 view writes a
 * canonical prescription and records what it wrote, how the two compose into the relations the converter carries
 * comments and literal text by, and how two prescriptions compare under the semantic fingerprint's rules.
 */

import { describe, expect, it } from "vitest";
import { ASPHERIC_COEFFICIENT_SCHEMA } from "../../../../src/types/asphericSchema.js";
import { prescriptionDifference } from "../../../../src/optics/prescription/canonical.js";
import { ingestLens, ingestTeleconverter } from "../../../../src/optics/lensDataConversion.js";
import { childPath, extendPath, parentPath, pathBelow } from "../../../../src/optics/prescription/sourcePaths.js";
import {
  toLensDataV2Input,
  toTeleconverterDataV2Input,
  v2SourceMap,
  v2Writes,
} from "../../../../src/optics/prescription/toLensDataV2.js";
import type { LensDataV2Input, TeleconverterDataV2Input } from "../../../../src/types/lensDataV2.js";
import type { LensDataInput } from "../../../../src/types/optics.js";
import { FIXTURE_PAIRS, MAXIMAL_ZOOM, reversed, type FixturePair } from "./ingestV2Fixtures.js";

function pairOf(family: string): Extract<FixturePair, { kind: "lens" }> {
  const pair = FIXTURE_PAIRS.find((candidate) => candidate.family === family);
  if (!pair || pair.kind !== "lens") throw new Error(`no lens fixture pair "${family}"`);
  return pair;
}

/** Ingest a file of either kind, with source paths when asked. */
function ingest(pair: FixturePair, version: "v1" | "v2", sources = true) {
  const request = sources ? { sources: true } : undefined;
  return pair.kind === "lens" ? ingestLens(pair[version], request) : ingestTeleconverter(pair[version], request);
}

/** The V2 view of a pair's side, with what the view recorded writing it. */
function viewOf(pair: FixturePair, version: "v1" | "v2") {
  const ingested = ingest(pair, version);
  const writes = v2Writes();
  const data =
    pair.kind === "lens"
      ? toLensDataV2Input(ingested as ReturnType<typeof ingestLens>, writes)
      : toTeleconverterDataV2Input(ingested as ReturnType<typeof ingestTeleconverter>, writes);
  return { ingested, writes, data, map: v2SourceMap(ingested, writes) };
}

describe("source path spelling", () => {
  it("spells members, items and surface-label keys as ingest's refusals do", () => {
    expect(childPath("", "surfaces")).toBe("surfaces");
    expect(childPath("surfaces", 3)).toBe("surfaces[3]");
    expect(childPath("surfaces[3]", "R")).toBe("surfaces[3].R");
    expect(childPath("asph", "3A")).toBe('asph["3A"]');
    expect(childPath("var", "STO")).toBe('var["STO"]');
    expect(childPath("gaps", "6")).toBe('gaps["6"]');
    expect(childPath("aberrationControl.var", "STO")).toBe('aberrationControl.var["STO"]');
    expect(childPath("catalog", "6x")).toBe('catalog["6x"]');
  });

  it("finds each path's parent, through quoted keys that hold brackets, dots and quotes", () => {
    for (const [path, parent] of [
      ["surfaces[3].R", "surfaces[3]"],
      ["surfaces[3]", "surfaces"],
      ["surfaces", ""],
      ['asph["3A"].A4', 'asph["3A"]'],
      ['asph["3A"]', "asph"],
      ['x["a.b]"]', "x"],
      ['x["say \\"hi\\""][0]', 'x["say \\"hi\\""]'],
      ['["6"]', ""],
    ]) {
      expect(parentPath(path), path).toBe(parent);
    }
    expect(parentPath("")).toBeUndefined();
  });

  it("extends a path by what another adds below its ancestor", () => {
    expect(pathBelow("gaps[0].values[1][2]", "gaps[0].values")).toBe("[1][2]");
    expect(pathBelow("surfaces[10]", "surfaces[1]")).toBeUndefined();
    expect(extendPath('var["6"]', "[1]")).toBe('var["6"][1]');
    expect(extendPath("", pathBelow("key", "")!)).toBe("key");
  });
});

describe("source paths on request", () => {
  it.each(FIXTURE_PAIRS.map((pair) => [pair.family, pair] as const))(
    "leave %s's prescription and provenance as they are, adding only the paths",
    (_family, pair) => {
      for (const version of ["v1", "v2"] as const) {
        const plain = ingest(pair, version, false);
        const { sources, ...provenance } = ingest(pair, version).provenance;
        expect(plain.provenance).not.toHaveProperty("sources");
        expect(provenance).toEqual(plain.provenance);
        expect(ingest(pair, version).prescription).toEqual(plain.prescription);
        expect(sources?.records[""]).toBe("");
      }
    },
  );

  it("record where a V1 file holds each value, what it holds twice, what ingest sets aside, and what V2 dissolves", () => {
    const zoom = ingestLens(pairOf("zoom").v1, { sources: true }).provenance.sources!;
    expect(zoom.read["zoom.stations[2].focalLengthMm"]).toBe("zoomPositions[2]");
    expect(zoom.read["zoom.stations[1].nominalFNumber"]).toBe("nominalFno[1]");
    expect(zoom.read["zoom.stations[2].label"]).toBe("zoomLabels[1]");
    expect(zoom.read["zoom.step"]).toBe("zoomStep");
    expect(zoom.records["gaps[0]"]).toBe('var["STO"]');
    expect(zoom.read["gaps[0].values"]).toBe('var["STO"]');
    expect(zoom.read["gaps[0].label"]).toBe("varLabels[0][1]");
    expect(zoom.read["surfaces[1].d"]).toBe("surfaces[1].d");
    expect(zoom.heldBy["surfaces[1].nd"]).toBe("surfaces[1].medium");
    expect(zoom.heldBy["surfaces[1].elemId"]).toBe("surfaces[1].medium");
    expect(zoom.ignored["surfaces[0].sd"]).toEqual({ from: "surfaces[0].sd", kind: "stopRadius" });
    expect(zoom.homes).toEqual({
      zoomPositions: "zoom.stations",
      nominalFno: "zoom.stations",
      zoomCloseFocusM: "zoom.stations",
      zoomLabels: "zoom.stations",
      var: "gaps",
      varLabels: "gaps",
      "varLabels[0]": "gaps[0]",
    });
    expect(zoom.firstField).toBe("key");
    /* The first field as written, whatever it holds. */
    const undefinedFirst = Object.assign({ maker: undefined }, pairOf("prime").v1, { maker: undefined });
    expect(ingestLens(undefinedFirst, { sources: true }).provenance.sources!.firstField).toBe("maker");

    /* A prime's gap list is the gap's one row; an asph entry is its surface's asphere, its zeros set aside. */
    const keyframes = ingestLens(pairOf("focus keyframes").v1, { sources: true }).provenance.sources!;
    expect(keyframes.read["gaps[0].values[0]"]).toBe('var["2"]');
    const prime = ingestLens(pairOf("prime").v1, { sources: true }).provenance.sources!;
    expect(prime.records["surfaces[1].asphere"]).toBe('asph["1"]');
    expect(prime.read["surfaces[1].asphere.A4"]).toBe('asph["1"].A4');
    expect(prime.ignored["surfaces[1].asphere.A6"]).toEqual({ from: 'asph["1"].A6', kind: "zeroTerm" });
    expect(prime.read["catalog.focalLengthMm.design"]).toBe("focalLengthDesign");
    expect(prime.read["source.authors"]).toBe("patentAuthors");
    expect(prime.read["elements[0].focalLengthMm"]).toBe("elements[0].fl");
    expect(prime.homes.asph).toBe("surfaces");

    /* The first surface to name an undrawn medium gives it its index. */
    const media = ingestLens(pairOf("media").v1, { sources: true }).provenance.sources!;
    expect(media.read["media[0].nd"]).toBe("surfaces[0].nd");
    expect(media.read["media[1].nd"]).toBe("surfaces[3].nd");

    const conjugates = ingestLens(pairOf("conjugates").v1, { sources: true }).provenance.sources!;
    expect(conjugates.records["focus.conjugates[0]"]).toBe("finiteConjugates[0]");
    expect(conjugates.heldBy["finiteConjugates[0].focusT"]).toBe("focus.conjugates[0].keyframe");
    expect(conjugates.heldBy["finiteConjugates[0].zoomT"]).toBe("focus.conjugates[0].zoomStation");
  });

  it("record a V2 file's values where they sit, its media by their own place, and its gaps by surface", () => {
    const media = ingestLens(pairOf("media").v2, { sources: true }).provenance.sources!;
    /* `water` is listed second and used first, so it is the first canonical medium. */
    expect(media.records["media[0]"]).toBe("media[1]");
    expect(media.read["media[0].nd"]).toBe("media[1].nd");
    expect(media.read["media[0].name"]).toBe("media[1].name");
    expect(media.heldBy["media[1].id"]).toBe("media[0].id");
    expect(media.heldBy["surfaces[0].medium"]).toBe("surfaces[0].medium");
    expect(media.heldBy["surfaces[1].medium"]).toBeUndefined();
    expect(media.heldBy.schema).toBe("schema");
    /* A V2 source keeps its comments at their paths, so ingest records no first field for ruling 10. */
    expect(media.firstField).toBeUndefined();
    expect(media.read["surfaces[0].R"]).toBe("surfaces[0].R");
    expect(media.ignored["surfaces[0].R"]).toBeUndefined();

    const zoom = ingestLens(pairOf("zoom").v2, { sources: true }).provenance.sources!;
    expect(zoom.records["gaps[0]"]).toBe('gaps["STO"]');
    expect(zoom.read["gaps[0].values"]).toBe('gaps["STO"].values');
    expect(zoom.read["zoom.stations[1].nominalFNumber"]).toBe("zoom.stations[1].nominalFNumber");
    expect(zoom.read["surfaces[0].d"]).toBeUndefined();
    expect(zoom.homes).toEqual({});

    /* A published list is copied as written, item by item; nothing is recorded for a member the file leaves out. */
    const published = ingestLens(pairOf("published stations").v2, { sources: true }).provenance.sources!;
    expect(published.read["zoom.stations[0].publishedFocus"]).toBe("zoom.stations[0].publishedFocus");
    expect(published.read["zoom.stations[1].publishedFocus"]).toBeUndefined();
    expect(published.heldBy["zoom.stations[1].published"]).toBe("zoom.stations[1].published");
    expect(published.heldBy["zoom.stations[0].published"]).toBeUndefined();
    const prime = ingestLens(pairOf("published stations (prime)").v2, { sources: true }).provenance.sources!;
    expect(prime.read["focus.published"]).toBe("focus.published");
    expect(
      ingestLens(pairOf("prime").v2, { sources: true }).provenance.sources!.read["focus.published"],
    ).toBeUndefined();
  });
});

describe("V2 view", () => {
  it("copies no function or symbol: the view refuses one as structuredClone does", () => {
    const pair = FIXTURE_PAIRS.find((candidate) => candidate.kind === "lens")!;
    for (const glass of [() => "S-LAH63", Symbol("S-LAH63")]) {
      const ingested = ingestLens(pair.v2 as LensDataV2Input);
      (ingested.prescription.elements[0] as unknown as Record<string, unknown>).glass = glass;
      let name: string | null = null;
      try {
        toLensDataV2Input(ingested);
      } catch (error) {
        name = (error as Error).name;
      }
      expect(name).toBe("DataCloneError");
    }
  });

  it("writes every record's members in the declaration order of the V2 types, whatever order the source has", () => {
    const writes = v2Writes();
    const zoom = toLensDataV2Input(ingestLens(reversed(MAXIMAL_ZOOM), { sources: true }), writes);
    const keys = (value: unknown) => Object.keys(value as object);
    expect(keys(zoom)).toEqual([
      "schema",
      "key",
      "maker",
      "name",
      "subtitle",
      "visible",
      "publishedAt",
      "catalog",
      "source",
      "elements",
      "media",
      "surfaces",
      "zoom",
      "focus",
      "gaps",
      "aperture",
      "aberrationControl",
      "projection",
      "perspectiveControl",
      "rearPlates",
      "groups",
      "doublets",
      "layout",
      "rays",
      "checks",
    ]);
    expect(keys(zoom.catalog)).toEqual([
      "lensMounts",
      "imageFormat",
      "imageCircleMm",
      "specs",
      "elementCount",
      "groupCount",
      "acceptsTeleconverters",
      "opticalConfiguration",
      "focalLengthMm",
      "fNumber",
    ]);
    expect(keys(zoom.catalog!.focalLengthMm)).toEqual(["marketing", "design"]);
    expect(keys(zoom.catalog!.fNumber)).toEqual(["marketing", "design"]);
    expect(keys(zoom.source)).toEqual(["patentNumber", "patentYear", "authors", "assignees", "errata"]);
    expect(keys(zoom.elements[0])).toEqual([
      "id",
      "name",
      "label",
      "type",
      "nd",
      "vd",
      "indexReference",
      "indexReferenceNote",
      "focalLengthMm",
      "glass",
      "apd",
      "apdNote",
      "role",
      "diagramLabel",
      "maxSdRatio",
      "absorptionCoefficientPerMm",
      "cemented",
      "dPgF",
      "nC",
      "nF",
      "ng",
      "span",
    ]);
    expect(keys(zoom.media![0])).toEqual(["id", "name", "nd"]);
    expect(keys(zoom.surfaces[1])).toEqual([
      "label",
      "R",
      "d",
      "sd",
      "innerSd",
      "medium",
      "asphere",
      "diffractive",
      "interaction",
    ]);
    expect(keys(zoom.surfaces[1].asphere)).toEqual(ASPHERIC_COEFFICIENT_SCHEMA.map(({ key }) => key));
    expect(keys(zoom.zoom)).toEqual(["stations", "apertureModel", "step"]);
    expect(keys(zoom.zoom!.stations[0])).toEqual([
      "focalLengthMm",
      "nominalFNumber",
      "stopSemiDiameter",
      "closeFocusM",
      "label",
      "published",
      "publishedFocus",
    ]);
    expect(keys(zoom.focus)).toEqual(["closeFocusM", "keyframes", "step", "description", "conjugates"]);
    expect(keys(zoom.focus.conjugates![0])).toEqual([
      "zoomStation",
      "keyframe",
      "objectDistanceMm",
      "distanceReference",
      "source",
    ]);
    /* A JavaScript object lists the integer-like label first; the printer takes surface order from the record. */
    expect(writes.order.gaps).toEqual(["STO", "4"]);
    expect(keys(zoom.gaps!.STO)).toEqual(["label", "values"]);
    expect(keys(zoom.aperture)).toEqual(["fStops", "maxFNumber", "step", "blades", "bladeRoundedness"]);
    expect(keys(zoom.aberrationControl)).toEqual([
      "label",
      "description",
      "minLabel",
      "centerLabel",
      "maxLabel",
      "step",
      "gaps",
    ]);
    expect(keys(zoom.aberrationControl!.gaps["3"])).toEqual(["label", "values"]);
    expect(keys(zoom.rearPlates![0])).toEqual([
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
    expect(keys(zoom.layout)).toEqual(["svgW", "svgH", "scFill", "yScFill", "maxAspectRatio", "lensShiftFrac"]);
    expect(keys(zoom.rays)).toEqual(["rayFractions", "rayLeadFrac", "offAxisFieldFrac", "offAxisFractions"]);
    expect(keys(zoom.checks)).toEqual(["gapSagFrac", "maxRimAngleDeg"]);

    /* What a zoom cannot hold: a design f-number for the whole lens, a prime's published keyframes, a folded path,
     * and a stop placed inside an element. */
    const prime = toLensDataV2Input(
      ingestLens(
        reversed({
          ...pairOf("published stations (prime)").v2,
          aperture: { nominalFNumber: 2, fStops: [2, 4], maxFNumber: 16, step: 0.05, blades: 9, bladeRoundedness: 0.8 },
          focus: { closeFocusM: 0.5, keyframes: [0, 1], step: 0.004, description: "Unit focus.", published: [1] },
        }),
      ),
    );
    expect(keys(prime.aperture)).toEqual([
      "nominalFNumber",
      "fStops",
      "maxFNumber",
      "step",
      "blades",
      "bladeRoundedness",
    ]);
    expect(keys(prime.focus)).toEqual(["closeFocusM", "keyframes", "step", "description", "published"]);
    const folded = toLensDataV2Input(ingestLens(reversed(pairOf("folded (explicit)").v2)));
    expect(keys(folded)).toEqual([
      "schema",
      "key",
      "name",
      "catalog",
      "elements",
      "surfaces",
      "focus",
      "aperture",
      "opticalPath",
      "groups",
      "layout",
    ]);
    const embedded = toLensDataV2Input(ingestLens(reversed(pairOf("stop inside an element").v2)));
    expect(keys(embedded.surfaces[1])).toEqual(["label", "R", "d", "sd", "medium", "stopPlacement"]);

    const converter = toTeleconverterDataV2Input(
      ingestTeleconverter(
        reversed({
          ...(FIXTURE_PAIRS.find((pair) => pair.kind === "teleconverter")!.v2 as TeleconverterDataV2Input),
          universal: false,
          minHostFNumber: 2.8,
          incompatibleLensKeys: ["fixture-prime"],
          groups: [{ text: "G1", fromSurface: "1", toSurface: "2" }],
          doublets: [{ text: "D1", fromSurface: "1", toSurface: "2" }],
        }),
      ),
    );
    expect(keys(converter)).toEqual([
      "schema",
      "key",
      "name",
      "catalog",
      "magnification",
      "masterImageDistanceMm",
      "universal",
      "minHostFNumber",
      "incompatibleLensKeys",
      "elements",
      "surfaces",
      "groups",
      "doublets",
    ]);
    expect(keys(converter.catalog)).toEqual(["lensMounts", "elementCount", "groupCount"]);
  });

  it.each(FIXTURE_PAIRS.map((pair) => [pair.family, pair] as const))(
    "writes %s from either side as a V2 file that ingests to the pair's prescription",
    (_family, pair) => {
      for (const version of ["v1", "v2"] as const) {
        const { ingested, data } = viewOf(pair, version);
        const again = pair.kind === "lens" ? ingestLens(data as LensDataV2Input) : ingestTeleconverter(data as never);
        expect(prescriptionDifference(ingested.prescription, again.prescription)).toBeUndefined();
      }
    },
  );

  it("writes the fields in the V2 order, leaving out what the source left to the schema", () => {
    const { data } = viewOf(pairOf("prime"), "v1");
    expect(Object.keys(data)).toEqual([
      "schema",
      "key",
      "maker",
      "name",
      "subtitle",
      "visible",
      "catalog",
      "source",
      "elements",
      "surfaces",
      "focus",
      "aperture",
      "groups",
      "layout",
    ]);
    expect(Object.keys((data as LensDataV2Input).elements[0])).toEqual([
      "id",
      "name",
      "label",
      "type",
      "nd",
      "vd",
      "indexReference",
      "focalLengthMm",
      "glass",
      "apd",
      "role",
    ]);
    expect((data as LensDataV2Input).surfaces[1]).toEqual({
      label: "1",
      R: 50,
      d: 5,
      sd: 15,
      medium: 1,
      asphere: { K: -0.5, A4: 1.2e-6, A8: -3e-11 },
    });
    expect((data as LensDataV2Input).surfaces[0]).toEqual({ label: "STO", R: "flat", d: 1 });
  });

  it("keeps a V2 source's media, zero terms and numeric flat radius, and drops a V1 source's zeros", () => {
    const v2 = structuredClone(pairOf("media").v2);
    v2.surfaces[1] = { ...v2.surfaces[1], R: 2e15 };
    v2.surfaces[2] = { ...v2.surfaces[2], asphere: { A4: 1e-6, A6: 0 } };
    const writes = v2Writes();
    const data = toLensDataV2Input(ingestLens(v2, { sources: true }), writes);
    expect(data.media).toEqual(v2.media);
    expect(data.surfaces.map((surface) => surface.medium)).toEqual(["water", undefined, 1, "cement", 2, undefined]);
    expect(data.surfaces[1].R).toBe(2e15);
    expect(data.surfaces[2].asphere).toEqual({ A4: 1e-6, A6: 0 });
    expect(writes.restored).toEqual(["surfaces[1].R", "surfaces[2].asphere.A6"]);

    const v1 = { ...pairOf("prime").v1, asph: { "1": { K: 0, A4: 0, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 } } };
    const view = toLensDataV2Input(ingestLens(v1 as LensDataInput));
    expect(view.surfaces[1].asphere).toEqual({});
  });

  it("writes back a V1 flat radius other than 1e15 and an authored stand-in for a default", () => {
    const v1 = structuredClone(pairOf("zoom").v1);
    v1.surfaces[0] = { ...v1.surfaces[0], R: -1e18 };
    v1.zoomStep = 0;
    const { data, map } = viewOf({ ...pairOf("zoom"), v1 }, "v1");
    expect((data as LensDataV2Input).surfaces[0].R).toBe(-1e18);
    expect((data as LensDataV2Input).zoom!.step).toBe(0);
    expect(map.dropped.map((value) => value.kind)).toEqual(["stopRadius"]);
  });

  it("records gaps in surface order, which a JavaScript object's own key order would not keep", () => {
    const v1 = structuredClone(pairOf("zoom").v1);
    v1.var = { STO: v1.var!.STO, "2": [80, 80, 80].map((inf): [number, number] => [inf, inf]) };
    const { data, writes } = viewOf({ ...pairOf("zoom"), v1 }, "v1");
    expect(Object.keys((data as LensDataV2Input).gaps!)).toEqual(["2", "STO"]);
    expect(writes.order.gaps).toEqual(["STO", "2"]);
  });
});

describe("V2 source map", () => {
  it("gives each written value the literal it was read from, and none to an index, flag or reference", () => {
    const { map } = viewOf(pairOf("media"), "v1");
    expect(map.textSource("elements[0].nd")).toBe("elements[0].nd");
    expect(map.textSource("media[1].nd")).toBe("surfaces[3].nd");
    expect(map.textSource("surfaces[3].medium")).toBeUndefined();
    const conjugates = viewOf(pairOf("conjugates"), "v1").map;
    expect(conjugates.textSource("focus.conjugates[0].objectDistanceMm")).toBe("finiteConjugates[0].objectDistanceMm");
    expect(conjugates.textSource("focus.conjugates[0].keyframe")).toBeUndefined();
    expect(conjugates.textSource("focus.conjugates[0].zoomStation")).toBeUndefined();
    const keyframes = viewOf(pairOf("focus keyframes"), "v1").map;
    expect(keyframes.textSource('gaps["2"].values[0][2]')).toBe('var["2"][2]');
    expect(keyframes.textSource('gaps["2"].label')).toBe("varLabels[0][1]");
  });

  it("sends a comment to the node written from its own, or moves it to an ancestor's or a container's home", () => {
    const { map } = viewOf(pairOf("zoom"), "v1");
    expect(map.commentTarget("surfaces[1].nd")).toEqual({ path: "surfaces[1].medium", moved: false });
    expect(map.commentTarget("surfaces[2].nd")).toEqual({ path: "surfaces[2]", moved: true });
    expect(map.commentTarget('var["STO"]')).toEqual({ path: 'gaps["STO"]', moved: false });
    expect(map.commentTarget('var["STO"][1][0]')).toEqual({ path: 'gaps["STO"].values[1][0]', moved: false });
    expect(map.commentTarget("var")).toEqual({ path: "gaps", moved: true });
    /* A label pair dissolves into the gap it names, which its comments lead. */
    expect(map.commentTarget("varLabels[0]")).toEqual({ path: 'gaps["STO"]', moved: true });
    expect(map.commentTarget("varLabels[0][1]")).toEqual({ path: 'gaps["STO"].label', moved: false });
    expect(map.commentTarget("zoomPositions")).toEqual({ path: "zoom.stations", moved: true });
    expect(map.commentTarget("zoomPositions[1]")).toEqual({ path: "zoom.stations[1].focalLengthMm", moved: false });
    expect(map.commentTarget("surfaces[0].sd")).toEqual({ path: "surfaces[0]", moved: true });
    expect(map.commentTarget("surfaces[0].d")).toEqual({ path: "surfaces[0]", moved: true });
    expect(map.commentTarget("fstopSeries")).toEqual({ path: "aperture.fStops", moved: false });
    expect(map.recordSource("surfaces[2]")).toBe("surfaces[2]");

    /* A container with no counterpart moves to its home; an empty `var`, from which V2 writes no gap, to `focus`. */
    const prime = viewOf({ ...pairOf("prime"), v1: { ...pairOf("prime").v1, var: {} } }, "v1").map;
    expect(prime.commentTarget('asph["1"]')).toEqual({ path: "surfaces[1].asphere", moved: false });
    expect(prime.commentTarget('asph["1"].A6')).toEqual({ path: "surfaces[1].asphere", moved: true });
    expect(prime.commentTarget("asph")).toEqual({ path: "surfaces", moved: true });
    expect(prime.commentTarget("var")).toEqual({ path: "focus", moved: true });
  });

  it("leads the record a top-level field opens with the comment that led the field, and schema with the first's", () => {
    const { map } = viewOf(pairOf("prime"), "v1");
    const leading = (path: string) => map.commentTarget(path, true);
    expect(leading("key")).toEqual({ path: "schema", moved: false });
    expect(map.commentTarget("key")).toEqual({ path: "key", moved: false });
    expect(leading("closeFocusM")).toEqual({ path: "focus", moved: false });
    expect(map.commentTarget("closeFocusM")).toEqual({ path: "focus.closeFocusM", moved: false });
    expect(leading("focusDescription")).toEqual({ path: "focus.description", moved: false });
    expect(leading("nominalFno")).toEqual({ path: "aperture", moved: false });
    expect(leading("scFill")).toEqual({ path: "layout", moved: false });
    expect(leading("yScFill")).toEqual({ path: "layout.yScFill", moved: false });
    /* The field opens the record it was written into, and that record does not open its own. */
    expect(leading("lensMounts")).toEqual({ path: "catalog", moved: false });
    expect(leading("focalLengthMarketing")).toEqual({ path: "catalog.focalLengthMm", moved: false });
    /* Only a top-level field's leading comment, and never a moved one. */
    expect(leading("elements[0].nd")).toEqual({ path: "elements[0].nd", moved: false });
    expect(leading("asph")).toEqual({ path: "surfaces", moved: true });

    const v2 = viewOf(pairOf("prime"), "v2").map;
    expect(v2.commentTarget("schema", true)).toEqual({ path: "schema", moved: false });
    expect(v2.commentTarget("schema")).toEqual({ path: "schema", moved: false });
    expect(v2.commentTarget("focus", true)).toEqual({ path: "focus", moved: false });
  });

  it("lists as dropped each set-aside value the view did not write back", () => {
    const { map } = viewOf(pairOf("prime"), "v1");
    expect(map.dropped).toEqual([
      { kind: "stopRadius", from: "surfaces[0].sd", canonical: "surfaces[0].sd", value: 15, stop: "prime" },
      { kind: "zeroTerm", from: 'asph["1"].A6', canonical: "surfaces[1].asphere.A6", value: 0 },
      { kind: "zeroTerm", from: 'asph["1"].A10', canonical: "surfaces[1].asphere.A10", value: 0 },
      { kind: "zeroTerm", from: 'asph["1"].A12', canonical: "surfaces[1].asphere.A12", value: 0 },
      { kind: "zeroTerm", from: 'asph["1"].A14', canonical: "surfaces[1].asphere.A14", value: 0 },
    ]);
    expect(viewOf(pairOf("prime"), "v2").map.dropped).toEqual([]);
  });

  it("needs the source paths", () => {
    const ingested = ingestLens(pairOf("prime").v1);
    expect(() => v2SourceMap(ingested, v2Writes())).toThrow(/sources: true/);
  });
});

describe("prescriptionDifference", () => {
  it("compares numbers bit for bit, except that -0 is 0", () => {
    expect(prescriptionDifference({ a: [0, Number.NaN] }, { a: [-0, Number.NaN] })).toBeUndefined();
    expect(prescriptionDifference({ a: [1.5] }, { a: [1.5000000000000002] })).toBe("a[0]: 1.5 ≠ 1.5000000000000002");
  });

  it("ignores member order and counts an undefined member as absent, but not list order", () => {
    expect(prescriptionDifference({ a: 1, b: undefined }, { a: 1 })).toBeUndefined();
    expect(prescriptionDifference({ a: 1, b: 2 }, { b: 2, a: 1 })).toBeUndefined();
    expect(prescriptionDifference({ s: ["x", "y"] }, { s: ["y", "x"] })).toBe('s[0]: "x" ≠ "y"');
    expect(prescriptionDifference({ s: [1] }, { s: [1, 2] })).toBe("s: 1 items ≠ 2 items");
    expect(prescriptionDifference({ g: { "6": 1 } }, { g: { "6": 2 } })).toBe('g["6"]: 1 ≠ 2');
  });

  it("names a member only the second holds, a list against a record, and null against a missing member", () => {
    expect(prescriptionDifference({ a: 1 }, { a: 1, b: 2 })).toBe("b: undefined ≠ 2");
    expect(prescriptionDifference({ s: [1] }, { s: { "0": 1 } })).toBe('s: [1] ≠ {"0":1}');
    expect(prescriptionDifference({ a: null }, {})).toBe("a: null ≠ undefined");
  });
});
