/**
 * V2 ingest: the V1/V2 fixture pairs, dispatch on `schema`, V2 defaults, the refusals V2 adds, and derived stops
 * without an `sd`.
 *
 * Each fixture pair writes one prescription in both versions; the two must share a semantic fingerprint. Each of the
 * 18 lens pairs must build to the same lens, and the converter pair, which builds only on a host, must give the same V1
 * views. The offender sweep removes every derived or scheduled stop's authored `sd` from the catalog and requires the
 * rebuilt lenses to stay bit-identical, which is what lets V2 drop those values.
 */

import { describe, expect, it } from "vitest";
import {
  captureRecords,
  exportCatalog,
  requestCatalog,
  type SerializedCatalog,
} from "../../../../src/benchmarks/engineDiff/captureEntry.js";
import {
  decodeValue,
  encodeValue,
  projectBuildConstants,
  semanticFingerprint,
  sha256Hex,
} from "../../../../src/benchmarks/engineDiff/payload.js";
import { CHROMATIC_CHANNELS, tierRequests } from "../../../../src/benchmarks/engineDiff/requests.js";
import buildLens from "../../../../src/optics/buildLens.js";
import { FLAT_R_THRESHOLD } from "../../../../src/optics/geometry/surfaceProfile.js";
import { PrescriptionIngestError, lensDataStopRadiusAuthority } from "../../../../src/optics/prescription/canonical.js";
import { ELEMENT_SCHEMA_DEFAULTS, LENS_SCHEMA_DEFAULTS } from "../../../../src/optics/prescription/defaults.js";
import { ingestLensV1, ingestTeleconverterV1 } from "../../../../src/optics/prescription/ingestV1.js";
import {
  ingestLens,
  ingestLensV2,
  ingestTeleconverter,
  ingestTeleconverterV2,
} from "../../../../src/optics/prescription/ingestV2.js";
import { toLensData, toTeleconverterData } from "../../../../src/optics/prescription/toLensData.js";
import type { LensDataV2Input } from "../../../../src/types/lensDataV2.js";
import type { LensData, LensDataInput, RuntimeLens } from "../../../../src/types/optics.js";
import type { TeleconverterData } from "../../../../src/types/teleconverter.js";
import { FIXTURE_PAIRS, type FixturePair } from "./ingestV2Fixtures.js";

const lensFingerprint = (file: object) =>
  semanticFingerprint(file, (data) => ingestLens(data as LensDataInput).prescription);
const converterFingerprint = (file: object) =>
  semanticFingerprint(file, (data) => ingestTeleconverter(data as TeleconverterData).prescription);

function pairOf(family: string): Extract<FixturePair, { kind: "lens" }> {
  const pair = FIXTURE_PAIRS.find((candidate) => candidate.family === family);
  if (!pair || pair.kind !== "lens") throw new Error(`no lens fixture pair "${family}"`);
  return pair;
}

/** A fresh copy of a pair's V2 file, edited by `edit`. */
function editedV2(family: string, edit: (file: Record<string, any>) => void): LensDataV2Input {
  const file = structuredClone(pairOf(family).v2) as Record<string, any>;
  edit(file);
  return file as LensDataV2Input;
}

/** The refusals an ingest gives a V2 file, a lens file unless `ingest` says otherwise, or `[]` when it ingests. */
function refusalsOf(file: object, ingest: (file: never) => unknown = ingestLensV2): readonly string[] {
  try {
    ingest(file as never);
    return [];
  } catch (thrown) {
    if (thrown instanceof PrescriptionIngestError) return thrown.issues;
    throw thrown;
  }
}

/** `list` with a hole at `index`: no entry there at all, which array methods skip. */
function withHole<T>(list: readonly T[], index: number): T[] {
  const out = new Array<T>(list.length);
  list.forEach((value, at) => {
    if (at !== index) out[at] = value;
  });
  return out;
}

/** The harness's build record: every constant the build derives, with its authored-data echo normalized. */
const buildRecord = (lens: RuntimeLens) =>
  encodeValue(projectBuildConstants(lens, CHROMATIC_CHANNELS, FLAT_R_THRESHOLD));

/** Every object and array reachable from a value. */
function objectsOf(value: unknown, found = new Set<object>()): Set<object> {
  if (value !== null && typeof value === "object" && !found.has(value)) {
    found.add(value);
    for (const member of Object.values(value)) objectsOf(member, found);
  }
  return found;
}

describe("V1/V2 fixture pairs", () => {
  it("cover every feature family of the plan", () => {
    const families = FIXTURE_PAIRS.map((pair) => pair.family);
    for (const family of [
      "prime",
      "zoom",
      "focus keyframes",
      "published stations",
      "conjugates",
      "aberration control",
      "folded (auto)",
      "folded (explicit)",
      "mirrors with spans",
      "diffractive",
      "absorption",
      "rear plates",
      "media",
      "perspective control",
      "projection",
      "teleconverter",
    ]) {
      expect(families).toContain(family);
    }
  });

  describe.each(FIXTURE_PAIRS.map((pair) => [pair.family, pair] as const))("%s", (_family, pair) => {
    it("ingests both versions to one prescription, with one semantic fingerprint", () => {
      if (pair.kind === "lens") {
        expect(ingestLensV2(pair.v2).prescription).toEqual(ingestLensV1(pair.v1).prescription);
        expect(lensFingerprint(pair.v2)).toBe(lensFingerprint(pair.v1));
      } else {
        expect(ingestTeleconverterV2(pair.v2).prescription).toEqual(ingestTeleconverterV1(pair.v1).prescription);
        expect(converterFingerprint(pair.v2)).toBe(converterFingerprint(pair.v1));
      }
    });

    it("builds the V2 file's V1 view to the lens its V1 twin builds", () => {
      if (pair.kind === "teleconverter") {
        expect(toTeleconverterData(ingestTeleconverterV2(pair.v2))).toEqual(
          toTeleconverterData(ingestTeleconverterV1(pair.v1)),
        );
        return;
      }
      const fromV1 = buildLens(toLensData(ingestLensV1(pair.v1)));
      const fromV2 = buildLens(toLensData(ingestLensV2(pair.v2)));
      expect(buildRecord(fromV2)).toEqual(buildRecord(fromV1));
      for (const constant of ["EFL", "stopPhysSD", "halfField", "totalTrack"] as const) {
        expect(Object.is(fromV2[constant], fromV1[constant]), constant).toBe(true);
      }
    });

    it("leaves the V2 file untouched and shares nothing with it", () => {
      const before = structuredClone(pair.v2);
      const ingested = pair.kind === "lens" ? ingestLensV2(pair.v2) : ingestTeleconverterV2(pair.v2);
      expect(pair.v2).toEqual(before);
      const shared = [...objectsOf(ingested)].filter((object) => objectsOf(pair.v2).has(object));
      expect(shared).toEqual([]);
      expect(ingested.provenance.format).toBe(2);
    });
  });

  it("numbers undrawn media by first use, and keeps their authored ids and names in provenance alone", () => {
    const { prescription, provenance } = ingestLensV2(pairOf("media").v2);
    expect(prescription.media).toEqual([
      { id: "m1", nd: 1.33306 },
      { id: "m2", nd: 1.56732 },
    ]);
    expect(prescription.surfaces.map((surface) => surface.medium)).toEqual(["m1", null, 1, "m2", 2, null]);
    expect(provenance.v2?.media).toEqual([
      { canonicalId: "m2", id: "cement", name: "Cement layer" },
      { canonicalId: "m1", id: "water", name: "Water" },
    ]);
  });

  it("writes a derived stop with no sd into the V1 view, and buildLens derives its radius", () => {
    const view = toLensData(ingestLensV2(pairOf("prime").v2));
    const stop = view.surfaces.find((surface) => surface.label === "STO")!;
    expect("sd" in stop).toBe(false);
    expect(buildLens(view).S.find((surface) => surface.label === "STO")!.sd).toBeGreaterThan(0);
  });
});

describe("dispatch on schema", () => {
  it("sends a file without schema to V1 ingest and a schema: 2 file to V2 ingest", () => {
    const { v1, v2 } = pairOf("zoom");
    expect(ingestLens(v1)).toEqual(ingestLensV1(v1));
    expect(ingestLens(v2)).toEqual(ingestLensV2(v2));
    expect(ingestLens(v2).provenance.format).toBe(2);
    const converter = FIXTURE_PAIRS.find(
      (pair): pair is Extract<FixturePair, { kind: "teleconverter" }> => pair.kind === "teleconverter",
    )!;
    expect(ingestTeleconverter(converter.v1)).toEqual(ingestTeleconverterV1(converter.v1));
    expect(ingestTeleconverter(converter.v2)).toEqual(ingestTeleconverterV2(converter.v2));
    expect(ingestTeleconverter(converter.v2).provenance.format).toBe(2);
  });

  it("lets buildLens read a V2 file, and throws V2 ingest's refusal at the file's own path", () => {
    const { v1, v2 } = pairOf("zoom");
    expect(buildRecord(buildLens(v2 as unknown as LensData))).toEqual(buildRecord(buildLens(v1 as LensData)));
    const refused = editedV2("prime", (file) => (file.surfaces[1].medium = 13));
    expect(() => buildLens(refused as unknown as LensData)).toThrow("surfaces[1].medium: unknown element 13");
  });

  it("refuses a schema that is no version, and a V1 file given to V2 ingest", () => {
    const unknown = { ...pairOf("prime").v2, schema: 3 } as unknown as LensDataV2Input;
    expect(() => ingestLens(unknown)).toThrow(/schema 3 is no lens-data version/);
    expect(() => ingestTeleconverter(unknown as unknown as TeleconverterData)).toThrow(/schema 3 is no lens-data/);
    const issues = refusalsOf(pairOf("prime").v1 as unknown as LensDataV2Input);
    expect(issues).toContain("schema must be 2 in a V2 file, not undefined");
    expect(issues).toContain("closeFocusM is not a V2 field");
  });
});

describe("V2 schema defaults", () => {
  /** A zoom that leaves every default out, with every defaulted field written out at its default value. */
  function withEveryDefault(): LensDataV2Input {
    return editedV2("stop schedule", (file) => {
      for (const row of LENS_SCHEMA_DEFAULTS) {
        if (row.spread) continue;
        const [group, field] = row.path.includes(".") ? row.path.split(".") : [null, row.path];
        const holder = group ? (file[group] ??= {}) : file;
        holder[field] = structuredClone(row.value);
      }
      for (const element of file.elements) {
        for (const row of ELEMENT_SCHEMA_DEFAULTS) element[row.path] = row.value;
      }
      for (const station of file.zoom.stations) station.published = true;
    });
  }

  it("ingests a default left out as the default written out, and records it as defaulted", () => {
    const left = ingestLensV2(pairOf("stop schedule").v2);
    const written = ingestLensV2(withEveryDefault());
    expect(written.prescription).toEqual(left.prescription);
    expect(lensFingerprint(withEveryDefault())).toBe(lensFingerprint(pairOf("stop schedule").v2));
    expect(written.provenance.defaulted).toEqual([]);
    expect([...left.provenance.defaulted].sort()).toEqual(
      [
        ...LENS_SCHEMA_DEFAULTS.map((row) => row.path),
        ...ELEMENT_SCHEMA_DEFAULTS.map((row) => `elements[0].${row.path}`),
      ].sort(),
    );
  });

  it("reads a zero zoom step as the default, as the engine does, and keeps the zero in provenance", () => {
    const { prescription, provenance } = ingestLensV2(editedV2("zoom", (file) => (file.zoom.step = 0)));
    expect(prescription.zoom!.step).toBe(0.004);
    expect(provenance.ignored["zoom.step"]).toBe(0);
  });
});

describe("a numeric flat radius in a V2 file", () => {
  it("reads any R beyond the flat threshold as flat, and keeps the number for the views", () => {
    const flat = pairOf("prime").v2;
    const index = flat.surfaces.findIndex((surface) => surface.R === "flat");
    expect(index).toBeGreaterThanOrEqual(0);
    /* No fixture writes a numeric flat radius, and 2e15 is no V1 spelling the converter writes either. */
    const numeric = editedV2("prime", (file) => (file.surfaces[index].R = 2e15));

    const read = ingestLensV2(numeric);
    expect(read.prescription.surfaces[index].R).toBe("flat");
    expect(read.prescription).toEqual(ingestLensV2(flat).prescription);
    expect(lensFingerprint(numeric)).toBe(lensFingerprint(flat));
    expect(buildRecord(buildLens(numeric as unknown as LensData))).toEqual(
      buildRecord(buildLens(flat as unknown as LensData)),
    );
    expect(read.provenance.ignored[`surfaces[${index}].R`]).toBe(2e15);
    expect(toLensData(read).surfaces[index].R).toBe(2e15);
  });
});

describe("V2 refusals name the authored path", () => {
  type Refusal = [description: string, family: string, edit: (file: Record<string, any>) => void, issue: string];
  const refusals: Refusal[] = [
    [
      "a field V2 does not define",
      "prime",
      (file) => (file.zoomPositions = [24, 50]),
      "zoomPositions is not a V2 field",
    ],
    ["a V1 field on a surface", "prime", (file) => (file.surfaces[1].nd = 1.5168), "surfaces[1].nd is not a V2 field"],
    [
      "a field only the engine writes",
      "prime",
      (file) => (file.surfaces[1].synthetic = "rearPlate"),
      "surfaces[1].synthetic is set only by expandRearPlates(), never authored",
    ],
    [
      "a record that is not an object",
      "prime",
      (file) => (file.source = "JP 2000-000001 A"),
      "source must be an object",
    ],
    ["a list that is not a list", "prime", (file) => (file.media = {}), "media must be a list"],
    ["a required field left out", "prime", (file) => delete file.aperture.fStops, "aperture.fStops is required"],
    [
      "elements that are not a list of objects",
      "prime",
      (file) => (file.elements = {}),
      "elements must be a list of objects",
    ],
    [
      "surfaces that are not a list of objects",
      "prime",
      (file) => (file.surfaces = [5]),
      "surfaces must be a list of objects",
    ],
    [
      "an asphere that is not an object",
      "prime",
      (file) => (file.surfaces[1].asphere = 5),
      "surfaces[1].asphere must be an object of aspheric coefficients",
    ],
    [
      "a term that is no aspheric coefficient",
      "prime",
      (file) => (file.surfaces[1].asphere.B4 = 1e-6),
      "surfaces[1].asphere.B4 is not an aspheric coefficient",
    ],
    ["rear plates that are not a list", "rear plates", (file) => (file.rearPlates = {}), "rearPlates must be a list"],
    [
      "a rear plate that is not an object",
      "rear plates",
      (file) => (file.rearPlates[0] = 5),
      "rearPlates[0] must be an object",
    ],
    [
      "an element id that is not a positive integer",
      "prime",
      (file) => {
        file.elements[0].id = 0;
        file.surfaces[1].medium = 0;
      },
      "elements[0].id must be a positive integer",
    ],
    [
      "a surface label that is no string",
      "prime",
      (file) => (file.surfaces[2].label = 2),
      "surfaces[2].label must be a string",
    ],
    [
      "a surface label written twice",
      "prime",
      (file) => (file.surfaces[2].label = "1"),
      'surfaces[2].label "1" repeats surfaces[1].label',
    ],
    [
      "a medium naming no element",
      "prime",
      (file) => (file.surfaces[1].medium = 13),
      "surfaces[1].medium: unknown element 13",
    ],
    [
      "a medium naming no media entry",
      "prime",
      (file) => (file.surfaces[1].medium = "glue"),
      'surfaces[1].medium: unknown medium "glue"',
    ],
    [
      "a medium that is neither an element id nor a media id",
      "prime",
      (file) => (file.surfaces[1].medium = true),
      "surfaces[1].medium must be an element id or a media id",
    ],
    [
      "a medium no surface uses",
      "media",
      (file) => file.media.push({ id: "oil", nd: 1.515 }),
      'media[2] "oil" is used by no surface',
    ],
    [
      "a medium with the index of air",
      "media",
      (file) => file.media.push({ id: "air", nd: 1 }),
      "media[2].nd is 1, the index of air: leave the surface's medium out",
    ],
    [
      "a medium repeating another's index",
      "media",
      (file) => file.media.push({ id: "sea", nd: 1.33306 }),
      "media[2].nd 1.33306 repeats media[1].nd: the engine knows an undrawn medium by its index alone",
    ],
    [
      "a medium id written twice",
      "media",
      (file) => file.media.push({ id: "water", nd: 1.4 }),
      'media[2].id "water" repeats media[1].id',
    ],
    ["a material field on a medium", "media", (file) => (file.media[0].vd = 55.8), "media[0].vd is not a V2 field"],
    [
      "a medium name that is no string",
      "media",
      (file) => (file.media[0].name = 5),
      "media[0].name must be a non-empty string, or left out",
    ],
    [
      "an empty medium name",
      "media",
      (file) => (file.media[0].name = ""),
      "media[0].name must be a non-empty string, or left out",
    ],
    [
      "a medium without an id",
      "media",
      (file) => file.media.push({ id: "", nd: 1.4 }),
      "media[2].id must be a non-empty string",
    ],
    [
      "a medium index that is no number",
      "media",
      (file) => file.media.push({ id: "oil", nd: "1.515" }),
      "media[2].nd must be a number",
    ],
    [
      "gaps that are not keyed by surface label",
      "prime",
      (file) => (file.gaps = [[80]]),
      "gaps must be an object keyed by surface label",
    ],
    ["a gap that is not an object", "prime", (file) => (file.gaps = { "1": 5 }), 'gaps["1"] must be an object'],
    [
      "a gap keyed by no surface",
      "focus keyframes",
      (file) => (file.gaps["9"] = { values: [[1, 1, 1]] }),
      'gaps["9"]: no surface is labelled "9"',
    ],
    [
      "a gap without its values",
      "focus keyframes",
      (file) => delete file.gaps["2"].values,
      'gaps["2"].values is required',
    ],
    [
      "gap values that are not rows of thicknesses",
      "focus keyframes",
      (file) => (file.gaps["2"].values = [80, 81, 82.5]),
      'gaps["2"].values must be one row of thicknesses per zoom station',
    ],
    [
      "a gap label that is no string",
      "focus keyframes",
      (file) => (file.gaps["2"].label = 5),
      'gaps["2"].label must be a string',
    ],
    [
      "an aberration-control gap label that is no string",
      "aberration control",
      (file) => (file.aberrationControl.gaps.STO.label = 7),
      'aberrationControl.gaps["STO"].label must be a string',
    ],
    [
      "aberration control without its gaps",
      "aberration control",
      (file) => delete file.aberrationControl.gaps,
      "aberrationControl.gaps is required",
    ],
    [
      "a gap surface that also writes d",
      "focus keyframes",
      (file) => (file.surfaces[2].d = 80),
      'surfaces[2].d: the gap after "2" takes its thickness from gaps["2"].values, so the surface carries no d',
    ],
    [
      "a surface with neither d nor a gap",
      "prime",
      (file) => delete file.surfaces[2].d,
      "surfaces[2].d is required: no entry in gaps supplies it",
    ],
    [
      "gap rows that miss a zoom station",
      "zoom",
      (file) => file.gaps.STO.values.pop(),
      'gaps["STO"].values has 2 rows for 3 zoom stations',
    ],
    [
      "a prime gap with two rows",
      "conjugates",
      (file) => file.gaps["2"].values.push([80, 82]),
      'gaps["2"].values has 2 rows, and a prime has one',
    ],
    [
      "a gap row that misses a focus keyframe",
      "focus keyframes",
      (file) => file.gaps["2"].values[0].pop(),
      'gaps["2"].values[0] has 2 thicknesses for 3 focus keyframes',
    ],
    [
      "focus keyframes that are null",
      "focus keyframes",
      (file) => (file.focus.keyframes = null),
      "focus.keyframes must be a list of at least two numbers",
    ],
    [
      "focus keyframes given as a count",
      "focus keyframes",
      (file) => (file.focus.keyframes = 3),
      "focus.keyframes must be a list of at least two numbers",
    ],
    [
      "no focus keyframes",
      "focus keyframes",
      (file) => {
        file.focus.keyframes = [];
        file.gaps["2"].values = [[]];
      },
      "focus.keyframes must be a list of at least two numbers",
    ],
    [
      "a hole in the focus keyframes",
      "focus keyframes",
      (file) => (file.focus.keyframes = withHole(file.focus.keyframes, 1)),
      "focus.keyframes must be a list of at least two numbers",
    ],
    [
      "a station field on some stations but not all",
      "zoom",
      (file) => delete file.zoom.stations[1].closeFocusM,
      "zoom.stations[1].closeFocusM is missing: set it on every station or on none",
    ],
    [
      "a label on a middle station alone",
      "zoom",
      (file) => {
        delete file.zoom.stations[0].label;
        file.zoom.stations[1].label = "Mid";
        delete file.zoom.stations[2].label;
      },
      "zoom.stations[].label: label every station, or the first and last alone",
    ],
    [
      "too few zoom stations",
      "zoom",
      (file) => {
        file.zoom.stations.splice(1);
        file.gaps.STO.values.splice(1);
      },
      "zoom.stations must list at least two stations",
    ],
    [
      "a zoom station that is not an object",
      "zoom",
      (file) => (file.zoom.stations[1] = null),
      "zoom.stations[1] must be an object",
    ],
    [
      "a hole in the zoom stations",
      "published stations",
      (file) => (file.zoom.stations = withHole(file.zoom.stations, 1)),
      "zoom.stations[1] must be an object",
    ],
    [
      "a zoom station without its focal length",
      "zoom",
      (file) => delete file.zoom.stations[1].focalLengthMm,
      "zoom.stations[1].focalLengthMm is required",
    ],
    [
      "a station's published flag that is no boolean",
      "published stations",
      (file) => (file.zoom.stations[1].published = "yes"),
      "zoom.stations[1].published must be true or false",
    ],
    [
      "no published station",
      "published stations",
      (file) => {
        for (const station of file.zoom.stations) station.published = false;
      },
      "zoom.stations[].published: no station is published, and a source tabulates at least one",
    ],
    [
      "a published keyframe that names none",
      "published stations",
      (file) => (file.zoom.stations[0].publishedFocus = [2]),
      "zoom.stations[0].publishedFocus must be strictly increasing focus keyframe indices (1..1)",
    ],
    [
      "a prime's published keyframe that names none",
      "published stations (prime)",
      (file) => (file.focus.published = [2]),
      "focus.published must be strictly increasing focus keyframe indices (1..1)",
    ],
    [
      "a prime's published keyframes on a zoom",
      "zoom",
      (file) => (file.focus.published = [1]),
      "focus.published is a prime field: a zoom's stations carry publishedFocus",
    ],
    [
      "a conjugate naming no zoom station",
      "conjugates",
      (file) => (file.focus.conjugates[0].zoomStation = 1),
      "focus.conjugates[0].zoomStation 1 names no zoom station (0..0)",
    ],
    [
      "a conjugate at infinity",
      "conjugates",
      (file) => (file.focus.conjugates[0].keyframe = 0),
      "focus.conjugates[0].keyframe 0 names no focus keyframe beyond infinity (1..1)",
    ],
    [
      "a span naming no surface",
      "mirrors with spans",
      (file) => (file.elements[0].span = ["MG1", "MG9"]),
      'elements[0].span: no surface is labelled "MG9"',
    ],
    [
      "a span running backwards",
      "mirrors with spans",
      (file) => (file.elements[0].span = ["MG2", "MG1"]),
      'elements[0].span runs backwards: "MG2" comes after "MG1"',
    ],
    [
      "a span that is not two surface labels",
      "mirrors with spans",
      (file) => (file.elements[0].span = ["MG1"]),
      "elements[0].span must be [from, to] surface labels",
    ],
    [
      "a derived stop's sd",
      "prime",
      (file) => (file.surfaces[0].sd = 15),
      "surfaces[0].sd: the stop's radius is derived from the design f-number, so the stop carries no sd",
    ],
    [
      "a scheduled stop's sd",
      "stop schedule",
      (file) => (file.surfaces[0].sd = 15),
      "surfaces[0].sd: the stop's radius comes from zoom.stations[].stopSemiDiameter, so the stop carries no sd",
    ],
    [
      "a folded system's stop without its sd",
      "folded (explicit)",
      (file) => delete file.surfaces[0].sd,
      "surfaces[0].sd is required: a folded system, or a stop inside glass, keeps its authored radius",
    ],
    [
      "a stop inside glass without its sd",
      "stop inside an element",
      (file) => delete file.surfaces[1].sd,
      "surfaces[1].sd is required: a folded system, or a stop inside glass, keeps its authored radius",
    ],
    [
      "a design f-number stated twice",
      "zoom",
      (file) => (file.aperture.nominalFNumber = 2),
      "aperture.nominalFNumber is set beside zoom.stations[].nominalFNumber: state one",
    ],
    [
      "a prime without a design f-number",
      "prime",
      (file) => delete file.aperture.nominalFNumber,
      "aperture.nominalFNumber is required",
    ],
    [
      "a zoom without a design f-number",
      "zoom",
      (file) => {
        for (const station of file.zoom.stations) delete station.nominalFNumber;
      },
      "aperture.nominalFNumber is required, or zoom.stations[].nominalFNumber on every station",
    ],
  ];

  it.each(refusals)("refuses %s", (_description, family, edit, issue) => {
    expect(refusalsOf(editedV2(family, edit))).toEqual([issue]);
  });

  /** Each list V2 ingest checks entry by entry, edited by `at` to hold a hole, or `null`, at one index. */
  type ListSite = [
    list: string,
    family: string,
    edit: (file: Record<string, any>, at: (list: unknown[], index: number) => unknown[]) => void,
  ];
  const listSites: ListSite[] = [
    ["zoom.stations", "published stations", (file, at) => (file.zoom.stations = at(file.zoom.stations, 1))],
    ["focus.keyframes", "focus keyframes", (file, at) => (file.focus.keyframes = at(file.focus.keyframes, 1))],
    ["media", "media", (file, at) => (file.media = at(file.media, 0))],
    ["focus.conjugates", "conjugates", (file, at) => (file.focus.conjugates = at(file.focus.conjugates, 0))],
    ["elements", "media", (file, at) => (file.elements = at(file.elements, 1))],
    ["surfaces", "prime", (file, at) => (file.surfaces = at(file.surfaces, 1))],
    ["a gap's rows", "zoom", (file, at) => (file.gaps.STO.values = at(file.gaps.STO.values, 1))],
    ["a gap row", "focus keyframes", (file, at) => (file.gaps["2"].values[0] = at(file.gaps["2"].values[0], 1))],
    [
      "a station's publishedFocus",
      "published stations",
      (file, at) => (file.zoom.stations[0].publishedFocus = at([1, 1], 1)),
    ],
    ["focus.published", "published stations (prime)", (file, at) => (file.focus.published = at([1, 1], 1))],
    ["rearPlates", "rear plates", (file, at) => (file.rearPlates = at(file.rearPlates, 0))],
  ];

  it.each(listSites)("refuses a hole in %s as it refuses null", (_list, family, edit) => {
    const withNull = (list: unknown[], index: number) => list.map((value, at) => (at === index ? null : value));
    const holed = refusalsOf(editedV2(family, (file) => edit(file, withHole)));
    expect(holed.length).toBeGreaterThan(0);
    expect(holed).toEqual(refusalsOf(editedV2(family, (file) => edit(file, withNull))));
  });

  it("refuses a teleconverter's source errata, which V1 holds for a lens alone", () => {
    const converter = FIXTURE_PAIRS.find(
      (pair): pair is Extract<FixturePair, { kind: "teleconverter" }> => pair.kind === "teleconverter",
    )!;
    const file = {
      ...structuredClone(converter.v2),
      source: { patentNumber: "JP 2000-000002 A", errata: [{ status: "unresolved", note: "Fixture." }] },
    };
    expect(refusalsOf(file, ingestTeleconverterV2)).toEqual(["source.errata is not a V2 field"]);
    expect(refusalsOf({ ...file, source: { patentNumber: "JP 2000-000002 A" } }, ingestTeleconverterV2)).toEqual([]);
  });

  it("reports every reason at once", () => {
    const issues = refusalsOf(
      editedV2("prime", (file) => {
        file.surfaces[1].medium = 13;
        file.surfaces[0].sd = 15;
      }),
    );
    expect(issues).toHaveLength(2);
    /* With the keyframes refused, a published list is held to its shape alone. */
    const unknownCount = editedV2("published stations (prime)", (file) => {
      file.focus.keyframes = null;
      file.focus.published = "1";
    });
    expect(refusalsOf(unknownCount)).toEqual([
      "focus.keyframes must be a list of at least two numbers",
      "focus.published must be a list of focus keyframe indices",
    ]);
    expect(() => ingestLensV2(editedV2("prime", (file) => (file.surfaces[1].medium = 13)))).toThrow(
      /Prescription "fixture-prime" cannot be ingested/,
    );
  });
});

describe("derived stops carry no sd", () => {
  /**
   * Remove the authored `sd` of every catalog stop whose radius the engine derives or takes from a schedule, and
   * rebuild. The build and layout records, which hold every constant `buildLens` derives and the drawn geometry, must
   * be bit-identical. The records that echo authored data drop that `sd` anyway (`normalizeAuthoredData`), so nothing
   * is excluded.
   */
  it("rebuilds every catalog lens whose stop radius is not authored without its stop sd, bit-identically", () => {
    const catalog = exportCatalog();
    const requests = tierRequests("p", requestCatalog(catalog)).filter(
      (request) => request.family === "build" || request.family === "layout",
    );
    let stripped = 0;
    const lenses = catalog.lenses.map((entry) => {
      const lens = decodeValue(entry.prescription) as LensData;
      if (lensDataStopRadiusAuthority(lens) === "authored") return entry;
      delete (lens.surfaces.find((surface) => surface.label === "STO") as { sd?: number }).sd;
      stripped++;
      return { ...entry, prescription: encodeValue(lens) };
    });
    const withoutStopSd: SerializedCatalog = { ...catalog, lenses };

    const before = captureRecords(catalog, requests);
    const after = captureRecords(withoutStopSd, requests);
    const digest = (record: (typeof before)[number]) => sha256Hex(JSON.stringify(record));
    const offenders = before.flatMap((record, index) =>
      digest(record) === digest(after[index]) ? [] : [`${record.lens} ${record.request}`],
    );

    expect(stripped).toBeGreaterThan(800);
    expect(before.filter((record) => !record.payload.ok)).toEqual([]);
    expect(offenders).toEqual([]);
  }, 120_000);
});
