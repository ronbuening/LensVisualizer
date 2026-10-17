/**
 * Canonical prescription: V1 ingest, schema defaults with provenance, and the V1 view.
 *
 * The corpus sweeps hold every catalog file to the round trip V1 → canonical → V1 view, to leaving its source
 * untouched and unshared, to the schema-default table, and to the stop-radius authority `buildLens` applies. The
 * synthetic cases pin each rule on its own: which spellings ingest holds as one, what provenance records, and what
 * ingest refuses.
 */

import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import buildLens from "../../../../src/optics/buildLens.js";
import { DEFAULT_MAX_RIM_ANGLE_DEG } from "../../../../src/optics/geometry/surfaceProfile.js";
import {
  FLAT_RADIUS,
  PrescriptionIngestError,
  type CanonicalLens,
  type IngestedPrescription,
} from "../../../../src/optics/prescription/canonical.js";
import {
  ELEMENT_SCHEMA_DEFAULTS,
  LENS_SCHEMA_DEFAULTS,
  REAR_PLATE_SCHEMA_DEFAULTS,
  takesDefault,
  v1CatalogDefaults,
  type SchemaDefault,
} from "../../../../src/optics/prescription/defaults.js";
import { ingestLensV1, ingestTeleconverterV1 } from "../../../../src/optics/prescription/ingestV1.js";
import { ingestLens, ingestTeleconverter, isV1File } from "../../../../src/optics/prescription/ingestV2.js";
import { toLensData, toLensDataInput, toTeleconverterData } from "../../../../src/optics/prescription/toLensData.js";
import type { FiniteConjugate, LensData, LensDataInput } from "../../../../src/types/optics.js";
import type { TeleconverterData } from "../../../../src/types/teleconverter.js";

const LENS_FILES = import.meta.glob<{ default: LensDataInput }>("../../../../src/lens-data/**/*.data.ts", {
  eager: true,
});
const TELECONVERTER_FILES = import.meta.glob<{ default: TeleconverterData }>(
  "../../../../src/lens-data/**/*.teleconverter.ts",
  { eager: true },
);
const REPO_ROOT = fileURLToPath(new URL("../../../..", import.meta.url));
const LENSES = Object.entries(LENS_FILES).map(([file, module]) => ({ file, data: module.default }));
const TELECONVERTERS = Object.entries(TELECONVERTER_FILES).map(([file, module]) => ({ file, data: module.default }));
/* The catalog files written in V1, which the V1 round trips below give back; a V2 file round-trips in the converter's
 * corpus sweep. */
const V1_LENSES = LENSES.filter(({ data }) => isV1File(data));
const V1_TELECONVERTERS = TELECONVERTERS.filter(({ data }) => isV1File(data));

/** The first lines of what made `check` throw, or null when it did not. */
function failureOf(check: () => void): string | null {
  try {
    check();
    return null;
  } catch (thrown) {
    return thrown instanceof Error ? thrown.message.split("\n").slice(0, 12).join("\n") : String(thrown);
  }
}

/** Every catalog lens in V1 syntax, so field-level checks keep running after the last V1 file migrates. */
const INGESTED = LENSES.map(({ file, data: authored }) => {
  const data = toLensDataInput(ingestLens(authored), { stopRadius: 1 });
  return { file, data, ingested: ingestLensV1(data) };
});

function lensByKey(key: string): LensDataInput {
  const found = LENSES.find(({ data }) => data.key === key);
  if (!found) throw new Error(`no catalog lens "${key}"`);
  return toLensDataInput(ingestLens(found.data), { stopRadius: 1 });
}

/** Every object and array reachable from a value. */
function objectsOf(value: unknown, found = new Set<object>()): Set<object> {
  if (value !== null && typeof value === "object" && !found.has(value)) {
    found.add(value);
    for (const member of Object.values(value)) objectsOf(member, found);
  }
  return found;
}

/** Paths at which a value holds something other than plain data: a function, `undefined`, a non-plain object. */
function nonPlainPaths(value: unknown, path = "", found: string[] = []): string[] {
  if (value === undefined || typeof value === "function" || typeof value === "symbol" || typeof value === "bigint") {
    found.push(path || "(root)");
  } else if (value !== null && typeof value === "object") {
    const prototype = Object.getPrototypeOf(value);
    if (!Array.isArray(value) && prototype !== Object.prototype) found.push(`${path} (not a plain object)`);
    for (const [key, member] of Object.entries(value)) nonPlainPaths(member, `${path}.${key}`, found);
  }
  return found;
}

function deepFreeze<T>(value: T): T {
  if (value !== null && typeof value === "object") {
    for (const member of Object.values(value)) deepFreeze(member);
    Object.freeze(value);
  }
  return value;
}

/** The value at a dotted canonical path, `elements[2].apd` style. */
function valueAt(root: unknown, path: string): unknown {
  return path
    .replace(/\[(\d+)\]/g, ".$1")
    .split(".")
    .reduce<unknown>((node, step) => (node as Record<string, unknown> | undefined)?.[step], root);
}

/* ── Synthetic files ── */

/** A minimal valid prime: an air stop ahead of an aspheric singlet focused by one variable gap. */
function prime(): LensDataInput {
  return {
    key: "canonical-test-prime",
    name: "CANONICAL TEST Prime 50mm f/2.8",
    nominalFno: 2.8,
    closeFocusM: 0.5,
    fstopSeries: [2.8, 4, 5.6, 8, 11, 16],
    yScFill: 0.55,
    elements: [{ id: 1, name: "L1", label: "Element 1", type: "Biconvex Positive", nd: 1.5168, vd: 64.17 }],
    surfaces: [
      { label: "STO", R: 1e15, d: 1, nd: 1, elemId: 0, sd: 8 },
      { label: "1A", R: 50, d: 5, nd: 1.5168, elemId: 1, sd: 15 },
      { label: "2", R: -50, d: 80, nd: 1, elemId: 0, sd: 15 },
    ],
    asph: { "1A": { K: -0.5, A4: 1.25e-6, A6: -2e-10, A8: 0, A10: 0, A12: 0, A14: 0 } },
    var: { "2": [80, 84] },
    varLabels: [["2", "BF"]],
  };
}

/** The prime as a three-station zoom: the back focus moves with zoom and focus. */
function zoom(): LensDataInput {
  return {
    ...prime(),
    key: "canonical-test-zoom",
    name: "CANONICAL TEST Zoom 50-70mm f/2.8",
    zoomPositions: [50, 60, 70],
    var: {
      "2": [
        [80, 84],
        [81, 85],
        [82, 86],
      ],
    },
  };
}

function ingested(data: LensDataInput): IngestedPrescription<CanonicalLens> {
  return ingestLensV1(data);
}

/** A value of the same kind as `value` that differs from it. */
function otherThan(value: unknown): unknown {
  if (Array.isArray(value)) return [0, 0.5, 1];
  /* The one declaration row, `publishedStations`: a focus row beyond infinity. */
  if (value !== null && typeof value === "object") return { focus: [1] };
  if (typeof value === "boolean") return !value;
  if (typeof value === "string") return value === "from-nominal-fno" ? "fixed-iris" : `${value}~`;
  return (value as number) * 1.5;
}

/* ── Corpus ── */

describe("canonical prescription: catalog round trip", () => {
  it("has a catalog to sweep", () => {
    expect(LENSES.length).toBeGreaterThan(900);
    expect(TELECONVERTERS.length).toBeGreaterThan(0);
  });

  it("gives every V1 catalog lens back from V1 → canonical → V1 view, as authored and as the catalog merges it", () => {
    const offenders = V1_LENSES.flatMap(({ file, data }) => {
      const failure = failureOf(() => {
        const result = ingestLensV1(data);
        expect(toLensDataInput(result)).toEqual(data);
        expect(toLensData(result)).toEqual({ ...v1CatalogDefaults(), ...data });
      });
      return failure === null ? [] : [`${file}: ${failure}`];
    });
    expect(offenders).toEqual([]);
  });

  it("gives every V1 catalog teleconverter back from V1 → canonical → V1 view", () => {
    const offenders = V1_TELECONVERTERS.flatMap(({ file, data }) => {
      const failure = failureOf(() => expect(toTeleconverterData(ingestTeleconverterV1(data))).toEqual(data));
      return failure === null ? [] : [`${file}: ${failure}`];
    });
    expect(offenders).toEqual([]);
  });

  it("notices a prescription that no longer gives its file back", () => {
    /* The round trip compares values, so it must fail when one canonical value moves. */
    const data = prime();
    const result = ingestLensV1(data);
    result.prescription.surfaces[1].d *= 1 + Number.EPSILON;
    expect(failureOf(() => expect(toLensDataInput(result)).toEqual(data))).not.toBeNull();
  });

  it("reads every catalog file without writing to it, and shares no object with it or with the view", () => {
    const offenders: string[] = [];
    const ingestFrozen = <Data, Result extends IngestedPrescription>(
      file: string,
      data: Data,
      ingest: (frozen: Data) => Result,
      view: (result: Result) => unknown,
    ) => {
      const frozen = deepFreeze(structuredClone(data));
      const failure = failureOf(() => {
        const result = ingest(frozen);
        expect(frozen).toEqual(data);
        const source = objectsOf(frozen);
        expect(
          [...objectsOf(result)].filter((object) => source.has(object)),
          "shared with the source",
        ).toEqual([]);
        const prescriptionObjects = objectsOf(result);
        expect(
          [...objectsOf(view(result))].filter((object) => prescriptionObjects.has(object)),
          "shared between prescription and view",
        ).toEqual([]);
        expect(nonPlainPaths(result.prescription)).toEqual([]);
        expect(structuredClone(result)).toEqual(result);
      });
      if (failure !== null) offenders.push(`${file}: ${failure}`);
    };
    for (const { file, data } of LENSES) ingestFrozen(file, data, ingestLens, toLensData);
    for (const { file, data } of TELECONVERTERS) ingestFrozen(file, data, ingestTeleconverter, toTeleconverterData);
    expect(offenders).toEqual([]);
  });

  it("copies no function or symbol: ingest and the view refuse one as structuredClone does", () => {
    const errorName = (run: () => unknown) => {
      try {
        run();
        return null;
      } catch (error) {
        return (error as Error).name;
      }
    };
    const { data } = INGESTED[0];
    for (const glass of [() => "S-LAH63", Symbol("S-LAH63")]) {
      const file = structuredClone(data);
      (file.elements[0] as unknown as Record<string, unknown>).glass = glass;
      expect(errorName(() => ingestLensV1(file))).toBe("DataCloneError");
      const ingested = ingestLensV1(data);
      (ingested.prescription.elements[0] as unknown as Record<string, unknown>).glass = glass;
      expect(errorName(() => toLensData(ingested))).toBe("DataCloneError");
    }
  });
});

/* ── Schema defaults ── */

describe("canonical prescription: schema defaults", () => {
  it("keeps the catalog defaults the V1 file src/lens-data/defaults.ts held before S2.P1.T2 deleted it", () => {
    expect(v1CatalogDefaults()).toEqual({
      visible: true,
      rayFractions: [-0.83, -0.5, -0.17, 0.17, 0.5, 0.83],
      rayLeadFrac: 0.35,
      lensShiftFrac: 0.08,
      offAxisFieldFrac: 0.6,
      offAxisFractions: [-0.75, -0.375, 0, 0.375, 0.75],
      svgW: 1080,
      svgH: 490,
      scFill: 0.55,
      maxRimAngleDeg: DEFAULT_MAX_RIM_ANGLE_DEG,
      gapSagFrac: 0.9,
      maxAspectRatio: 1.6,
      focusStep: 0.004,
      apertureStep: 0.004,
      maxFstop: 16,
    });
  });

  it("cites a reader that exists for every default", () => {
    const rows = [...LENS_SCHEMA_DEFAULTS, ...ELEMENT_SCHEMA_DEFAULTS, ...REAR_PLATE_SCHEMA_DEFAULTS];
    const missing = rows.flatMap((row) => {
      const files = [...row.reader.matchAll(/\b((?:src|scripts)\/[\w./-]+\.(?:tsx?|mjs))\b/g)].map((match) => match[1]);
      if (files.length === 0) return [`${row.path}: names no file`];
      return files.filter((file) => !existsSync(`${REPO_ROOT}/${file}`)).map((file) => `${row.path}: ${file}`);
    });
    expect(missing).toEqual([]);
  });

  it("applies every lens, element and plate default exactly where a catalog file leaves the field out", () => {
    const offenders: string[] = [];
    const check = (
      file: string,
      record: Record<string, unknown>,
      rows: readonly SchemaDefault[],
      base: string,
      result: IngestedPrescription<CanonicalLens>,
    ) => {
      for (const row of rows) {
        if (row.path.startsWith("zoom.") && !result.prescription.zoom) continue;
        const path = base ? `${base}.${row.path}` : row.path;
        const expected = takesDefault(row, record[row.v1Field]);
        if (result.provenance.defaulted.includes(path) !== expected) offenders.push(`${file}: ${path} defaulted`);
        if (row.spread) {
          /* A declaration left out reads as the row's value written out. */
          const written = { ...record, [row.v1Field]: structuredClone(row.value) } as unknown as LensDataInput;
          if (expected && JSON.stringify(ingested(written).prescription) !== JSON.stringify(result.prescription)) {
            offenders.push(`${file}: ${path} is not its declaration written out`);
          }
          continue;
        }
        const value = valueAt(result.prescription, path);
        const expectedValue = expected ? row.value : record[row.v1Field];
        if (JSON.stringify(value) !== JSON.stringify(expectedValue))
          offenders.push(`${file}: ${path} = ${JSON.stringify(value)}`);
      }
    };
    for (const { file, data, ingested: result } of INGESTED) {
      check(file, data as unknown as Record<string, unknown>, LENS_SCHEMA_DEFAULTS, "", result);
      data.elements.forEach((element, index) =>
        check(
          file,
          element as unknown as Record<string, unknown>,
          ELEMENT_SCHEMA_DEFAULTS,
          `elements[${index}]`,
          result,
        ),
      );
      (data.rearPlates ?? []).forEach((plate, index) =>
        check(
          file,
          plate as unknown as Record<string, unknown>,
          REAR_PLATE_SCHEMA_DEFAULTS,
          `rearPlates[${index}]`,
          result,
        ),
      );
    }
    expect(offenders).toEqual([]);
    /* Count default coverage on files of either version, independently of their V1 test spellings above. */
    const ways = new Map<string, Set<boolean>>();
    const note = (row: SchemaDefault, record: object, scope: string) => {
      const id = `${scope}.${row.path}`;
      if (!ways.has(id)) ways.set(id, new Set());
      ways.get(id)!.add(takesDefault(row, (record as Record<string, unknown>)[row.v1Field]));
    };
    for (const { data: authored } of LENSES) {
      const result = ingestLens(authored);
      const data = toLensDataInput(result);
      for (const row of LENS_SCHEMA_DEFAULTS) {
        if (!row.path.startsWith("zoom.") || result.prescription.zoom) note(row, data, "lens");
      }
      for (const element of data.elements) for (const row of ELEMENT_SCHEMA_DEFAULTS) note(row, element, "element");
      for (const plate of data.rearPlates ?? [])
        for (const row of REAR_PLATE_SCHEMA_DEFAULTS) note(row, plate, "plate");
    }
    expect([...ways].filter(([, seen]) => seen.size < 2).map(([id]) => id)).toEqual([]);
    expect(ways.size).toBe(
      LENS_SCHEMA_DEFAULTS.length + ELEMENT_SCHEMA_DEFAULTS.length + REAR_PLATE_SCHEMA_DEFAULTS.length,
    );
  });

  /* One synthetic file per row: the field left out, written as its default, and written otherwise. */
  const lensCases = LENS_SCHEMA_DEFAULTS.map((row): [string, SchemaDefault] => [row.path, row]);
  it.each(lensCases)("holds %s written out as its default and left out as one prescription", (_path, row) => {
    const make = (value: unknown) => {
      const data = row.path.startsWith("zoom.") ? zoom() : prime();
      const record = data as unknown as Record<string, unknown>;
      if (value === undefined) delete record[row.v1Field];
      else record[row.v1Field] = value;
      return data;
    };
    const omitted = make(undefined);
    const written = make(structuredClone(row.value));
    const other = make(otherThan(row.value));

    const [a, b, c] = [omitted, written, other].map(ingested);
    expect(b.prescription).toEqual(a.prescription);
    expect(c.prescription).not.toEqual(a.prescription);
    expect(a.provenance.defaulted).toContain(row.path);
    expect(b.provenance.defaulted).not.toContain(row.path);
    /* The view gives each file back as written, and the engine's merged form as the catalog makes it. */
    expect(toLensDataInput(a)).toEqual(omitted);
    expect(toLensDataInput(b)).toEqual(written);
    expect(toLensData(a)).toEqual({ ...v1CatalogDefaults(), ...omitted });
    expect(toLensData(b)).toEqual({ ...v1CatalogDefaults(), ...written });
  });

  it("takes any falsy zoomStep as the default, as buildLens reads it, and gives the authored value back", () => {
    for (const authored of [0, Number.NaN]) {
      const data = { ...zoom(), zoomStep: authored };
      const result = ingested(data);
      expect(result.prescription.zoom!.step).toBe(0.004);
      expect(result.prescription).toEqual(ingested(zoom()).prescription);
      expect(result.provenance.defaulted).toContain("zoom.step");
      expect(result.provenance.ignored["zoom.step"]).toBe(authored);
      expect(toLensDataInput(result)).toEqual(data);
    }
  });

  it("defaults an element's and a rear plate's indexReference and apd, and nothing else on a teleconverter", () => {
    const base = prime();
    const withPlate = {
      ...base,
      rearPlates: [{ thicknessMm: 2, nd: 1.5168, vd: 64.17, gapAfterMm: 1 }],
    };
    const written = {
      ...withPlate,
      elements: [{ ...base.elements[0], apd: false as const, indexReference: "d" as const }],
      rearPlates: [{ ...withPlate.rearPlates[0], indexReference: "d" as const }],
    };
    const [a, b] = [withPlate, written].map(ingested);
    expect(b.prescription).toEqual(a.prescription);
    expect(a.prescription.elements[0]).toMatchObject({ apd: false, indexReference: "d" });
    expect(a.prescription.rearPlates![0].indexReference).toBe("d");
    expect(a.provenance.defaulted).toEqual(
      expect.arrayContaining(["elements[0].indexReference", "elements[0].apd", "rearPlates[0].indexReference"]),
    );
    expect(toLensDataInput(a)).toEqual(withPlate);
    expect(toLensDataInput(b)).toEqual(written);

    const converter = TELECONVERTERS[0].data;
    const result = ingestTeleconverter(converter);
    expect(result.provenance.defaulted.every((path) => /^(elements|rearPlates)\[\d+\]\./.test(path))).toBe(true);
    expect(Object.hasOwn(result.prescription, "layout")).toBe(false);
    expect(Object.hasOwn(result.prescription, "visible")).toBe(converter.visible !== undefined);
  });
});

/* ── One fact, one value ── */

describe("canonical prescription: spellings held as one", () => {
  /** Ingest two spellings, require one prescription, and require each to come back as written. */
  const sameMeaning = (a: LensDataInput, b: LensDataInput) => {
    const [first, second] = [a, b].map(ingested);
    expect(JSON.stringify(a)).not.toBe(JSON.stringify(b));
    expect(second.prescription).toEqual(first.prescription);
    expect(toLensDataInput(first)).toEqual(a);
    expect(toLensDataInput(second)).toEqual(b);
    return [first, second];
  };

  it("holds a flat radius as the marker at any magnitude past the threshold", () => {
    const flipped = prime();
    flipped.surfaces[0].R = -2e15;
    const [first, second] = sameMeaning(prime(), flipped);
    expect(first.prescription.surfaces[0].R).toBe(FLAT_RADIUS);
    expect(second.provenance.ignored["surfaces[0].R"]).toBe(-2e15);
    expect(first.provenance.ignored["surfaces[0].R"]).toBeUndefined();
  });

  it("drops zero aspheric terms, keeps them for the view, and keeps an entry whose terms are all zero", () => {
    const withZero = prime();
    withZero.asph!["1A"] = { ...withZero.asph!["1A"], A16: 0, A8: -0 };
    const [first, second] = sameMeaning(prime(), withZero);
    expect(first.prescription.surfaces[1].asphere).toEqual({ K: -0.5, A4: 1.25e-6, A6: -2e-10 });
    expect(Object.is(second.provenance.ignored["surfaces[1].asphere.A8"], -0)).toBe(true);

    /* The engine builds an aspheric profile for an all-zero entry, so it stays an asphere with no terms. */
    const allZero = prime();
    allZero.asph!["2"] = { K: 0, A4: 0, A6: 0, A8: 0, A10: 0, A12: 0, A14: 0 };
    const result = ingested(allZero);
    expect(result.prescription.surfaces[2].asphere).toEqual({});
    expect(result.prescription).not.toEqual(first.prescription);
    expect(toLensDataInput(result)).toEqual(allZero);
    /* Two catalog lenses carry such an entry; the engine treats each as an asphere. */
    for (const [key, label] of [
      ["ricoh-gr3x-26f28", "12A"],
      ["schneider-super-symmar-xl-110-f56", "9A"],
    ] as const) {
      const data = lensByKey(key);
      const index = data.surfaces.findIndex((surface) => surface.label === label);
      expect(ingested(data).prescription.surfaces[index].asphere, `${data.key} ${label}`).toEqual({});
      expect(
        buildLens({ ...v1CatalogDefaults(), ...data } as LensData).asphByIdx[index],
        `${data.key} ${label}`,
      ).toBeDefined();
    }
  });

  it("holds empty asph, var and varLabels containers as none", () => {
    const bare = prime();
    delete bare.asph;
    const emptyAsph = { ...bare, asph: {} };
    sameMeaning(bare, emptyAsph);

    const fixed = prime();
    delete fixed.var;
    delete fixed.varLabels;
    const [, empty] = sameMeaning(fixed, { ...fixed, var: {}, varLabels: [] });
    expect(empty.provenance.v1!.emptyContainers).toEqual(["var", "varLabels"]);
  });

  it("orders gaps by surface, whatever order the var object enumerates in", () => {
    const data = prime();
    data.var = { STO: [1, 1.5], "2": [80, 84] };
    data.varLabels = [
      ["STO", "D0"],
      ["2", "BF"],
    ];
    /* An integer-like key enumerates first, so `var` lists "2" ahead of the stop that precedes it. */
    expect(Object.keys(data.var)).toEqual(["2", "STO"]);
    const result = ingested(data);
    expect(result.prescription.gaps.map((gap) => [gap.surface, gap.label])).toEqual([
      ["STO", "D0"],
      ["2", "BF"],
    ]);
    expect(toLensDataInput(result)).toEqual(data);
  });

  /** Ingest every spelling, require one prescription, and require each to come back as written. */
  const oneMeaning = (spellings: readonly LensDataInput[]) => {
    const results = spellings.map(ingested);
    results.forEach((result, at) => {
      expect(result.prescription, `spelling ${at}`).toEqual(results[0].prescription);
      expect(toLensDataInput(result), `spelling ${at}`).toEqual(spellings[at]);
    });
    return results;
  };

  it("holds every spelling of a published zoom list and of one focus list as one", () => {
    const declared = (publishedStations?: LensDataInput["publishedStations"]): LensDataInput => {
      const data: LensDataInput = {
        ...zoom(),
        focusPositions: [0, 0.5, 1],
        var: {
          "2": [
            [80, 82, 84],
            [81, 83, 85],
            [82, 84, 86],
          ],
        },
      };
      if (publishedStations !== undefined) data.publishedStations = publishedStations;
      return data;
    };
    /* A zoom list left out, written empty or naming every station; one focus list, or the same list per station. */
    const [rows] = oneMeaning([
      declared({ focus: [2] }),
      declared({ zoom: [0, 1, 2], focus: [2] }),
      declared({ zoom: [], focus: [2] }),
      declared({ focus: [[2], [2], [2]] }),
      declared({ zoom: [], focus: [[2], [2], [2]] }),
    ]);
    expect(rows.prescription.zoom!.stations.map((station) => [station.published, station.publishedFocus])).toEqual([
      [true, [2]],
      [true, [2]],
      [true, [2]],
    ]);

    /* No declaration is the schema default, every station at infinity alone, and so is any spelling of it. */
    const [absent, ...spelled] = oneMeaning([
      declared(),
      declared({}),
      declared({ zoom: [0, 1, 2] }),
      declared({ zoom: [] }),
      declared({ focus: [] }),
      declared({ zoom: [0, 1, 2], focus: [] }),
      declared({ focus: [[], [], []] }),
    ]);
    expect(absent.prescription.zoom!.stations.map((station) => [station.published, station.publishedFocus])).toEqual([
      [true, []],
      [true, []],
      [true, []],
    ]);
    expect(absent.provenance.defaulted).toContain("publishedStations");
    expect(absent.provenance.v1!.publishedStations).toBeUndefined();
    for (const result of spelled) expect(result.provenance.defaulted).not.toContain("publishedStations");

    /* A narrowed zoom list says something else, with focus rows or without. */
    expect(ingested(declared({ zoom: [0, 2], focus: [2] })).prescription).not.toEqual(rows.prescription);
    expect(ingested(declared({ zoom: [0, 2] })).prescription).not.toEqual(absent.prescription);
    expect(rows.prescription).not.toEqual(absent.prescription);
  });

  it("holds a prime's missing publishedStations as its one station at infinity alone", () => {
    const declared = (publishedStations?: LensDataInput["publishedStations"]): LensDataInput => {
      const data = prime();
      if (publishedStations !== undefined) data.publishedStations = publishedStations;
      return data;
    };
    const [absent] = oneMeaning([declared(), declared({}), declared({ focus: [] })]);
    expect(absent.prescription.focus.published).toEqual([]);
    expect(ingested(declared({ focus: [1] })).prescription).not.toEqual(absent.prescription);
  });

  it("addresses a finite conjugate by station, within the validator's tolerance, and keeps the authored coordinate", () => {
    const conjugate = (focusT: number): LensDataInput => ({
      ...prime(),
      finiteConjugates: [
        { focusT, zoomT: 0, objectDistanceMm: 500, distanceReference: "first-surface", source: "Test table 1" },
      ],
    });
    const [exact, near] = sameMeaning(conjugate(1), conjugate(1 - 1e-12));
    expect(exact.prescription.focus.conjugates).toEqual([
      {
        zoomStation: 0,
        keyframe: 1,
        objectDistanceMm: 500,
        distanceReference: "first-surface",
        source: "Test table 1",
      },
    ]);
    expect(near.provenance.ignored["focus.conjugates[0].focusT"]).toBe(1 - 1e-12);
    expect(() => ingested(conjugate(0.5))).toThrow(/finiteConjugates\[0\]\.focusT 0\.5 is no focus keyframe/);
  });

  it("measures a conjugate's zoomT in station index, as the validator does", () => {
    /* Three stations sit 0.5 apart in zoomT, so a tolerance of 1e-8 in station index is 5e-9 in zoomT. */
    const conjugate = (zoomT: number): LensDataInput => ({
      ...zoom(),
      finiteConjugates: [
        { focusT: 1, zoomT, objectDistanceMm: 500, distanceReference: "first-surface", source: "Test table 1" },
      ],
    });
    const near = ingested(conjugate(0.5 + 4e-9));
    expect(near.prescription.focus.conjugates![0].zoomStation).toBe(1);
    expect(near.provenance.ignored["focus.conjugates[0].zoomT"]).toBe(0.5 + 4e-9);
    expect(() => buildLens(conjugate(0.5 + 4e-9) as LensData)).not.toThrow();
    expect(() => ingested(conjugate(0.5 + 7.5e-9))).toThrow(
      /finiteConjugates\[0\]\.zoomT 0\.5000000075 is no zoom station/,
    );
    expect(() => buildLens(conjugate(0.5 + 7.5e-9) as LensData)).toThrow();
  });

  it("puts [wide, tele] zoom labels on the end stations and gives the pair back", () => {
    const labelled = { ...zoom(), zoomLabels: ["Wide", "Tele"] };
    const result = ingested(labelled);
    expect(result.prescription.zoom!.stations.map((station) => station.label)).toEqual(["Wide", undefined, "Tele"]);
    expect(toLensDataInput(result)).toEqual(labelled);
    const perStation = { ...zoom(), zoomLabels: ["W", "M", "T"] };
    expect(toLensDataInput(ingested(perStation))).toEqual(perStation);
  });

  it("gives each undrawn index-bearing medium one entry, shared by the surfaces that use it", () => {
    const hasselblad = ingested(lensByKey("hasselblad-xcd-90-f25-v")).prescription;
    expect(hasselblad.media).toEqual([{ id: "m1", nd: 1.56732 }]);
    expect(hasselblad.surfaces.filter((surface) => surface.medium === "m1").map((surface) => surface.label)).toEqual([
      "4",
      "10",
      "14",
    ]);
    const water = ingested(lensByKey("nikon-ruw-af-zoom-nikkor-20-35mm-f28")).prescription;
    expect(water.media).toEqual([{ id: "m1", nd: 1.33306 }]);
  });
});

/* ── Stop radius ── */

describe("canonical prescription: stop radius", () => {
  it("keeps a derived stop's authored sd in provenance alone, and the view gives it back to the engine", () => {
    const data = prime();
    const result = ingested(data);
    const stop = data.surfaces.findIndex((surface) => surface.label === "STO");
    expect(result.prescription.aperture.stopRadius).toBe("derived");
    expect(result.prescription.surfaces[stop]).not.toHaveProperty("sd");
    expect(result.provenance.ignored[`surfaces[${stop}].sd`]).toBe(data.surfaces[stop].sd);
    /* Shrinking the authored value leaves the prescription as it was. */
    const shrunk = structuredClone(data);
    shrunk.surfaces[stop].sd *= 0.5;
    expect(ingested(shrunk).prescription).toEqual(result.prescription);

    const view = toLensData(result);
    expect(view.surfaces[stop].sd).toBe(data.surfaces[stop].sd);
    const fromView = buildLens(view);
    const fromCatalog = buildLens({ ...v1CatalogDefaults(), ...data } as LensData);
    expect(fromView.S).toEqual(fromCatalog.S);
    expect([fromView.stopPhysSD, fromView.EFL, fromView.FOPEN, fromView.EP]).toEqual([
      fromCatalog.stopPhysSD,
      fromCatalog.EFL,
      fromCatalog.FOPEN,
      fromCatalog.EP,
    ]);
  });

  it("assigns every catalog lens the stop-radius authority buildLens applies", () => {
    /* What buildLens does, read from what it built: the authored radius kept (confirmed by shrinking it), the
     * published schedule's first station, or neither. */
    const offenders: string[] = [];
    const counts = { authored: 0, schedule: 0, derived: 0 };
    for (const { file, data, ingested: result } of INGESTED) {
      const merged = { ...v1CatalogDefaults(), ...data } as LensData;
      const stop = merged.surfaces.find((surface) => surface.label === "STO");
      if (!stop) {
        offenders.push(`${file}: no STO surface`);
        continue;
      }
      const schedule = merged.zoomStopSemiDiameters?.[0];
      const built = buildLens(merged).stopPhysSD;
      let engine: keyof typeof counts = schedule !== undefined && built === schedule ? "schedule" : "derived";
      if (built === stop.sd) {
        /* The radius the lens kept is the authored one, or happens to equal it: shrinking the authored one tells. A
         * shrunk stop the validator refuses, such as a folded path that no longer reaches its image, is read too. */
        const shrunk = structuredClone(merged);
        shrunk.surfaces.find((surface) => surface.label === "STO")!.sd *= 0.9;
        let shrunkRadius: number | "refused";
        try {
          shrunkRadius = buildLens(shrunk).stopPhysSD;
        } catch {
          shrunkRadius = "refused";
        }
        if (shrunkRadius !== built) engine = "authored";
      }
      counts[engine]++;
      if (result.prescription.aperture.stopRadius !== engine) {
        offenders.push(`${file}: ingest ${result.prescription.aperture.stopRadius}, buildLens ${engine}`);
      }
    }
    expect(offenders).toEqual([]);
    expect(Object.values(counts).every((count) => count > 0)).toBe(true);
  });
});

/* ── Refusals ── */

describe("canonical prescription: refusals", () => {
  const refusal = (data: LensDataInput): string[] => {
    try {
      ingested(data);
    } catch (thrown) {
      if (thrown instanceof PrescriptionIngestError) return [...thrown.issues];
      throw thrown;
    }
    return [];
  };
  const edit = (base: () => LensDataInput, change: (data: LensDataInput) => void): LensDataInput => {
    const data = base();
    change(data);
    return data;
  };
  /** A record as untyped data, to write what the V1 types would refuse. */
  const untyped = (record: object): Record<string, unknown> => record as Record<string, unknown>;
  const conjugateAt = (focusT: number, zoomT: number): FiniteConjugate => ({
    focusT,
    zoomT,
    objectDistanceMm: 500,
    distanceReference: "first-surface",
    source: "Test table 1",
  });

  it.each<[string, () => LensDataInput, RegExp]>([
    [
      "a surface nd that differs from its element's",
      () => edit(prime, (data) => (data.surfaces[1].nd = 1.5169)),
      /surfaces\[1\]\.nd 1\.5169 differs from elements\[0\]\.nd 1\.5168, the element surfaces\[1\]\.elemId names/,
    ],
    [
      "a gap's first value that differs from its surface's d",
      () => edit(prime, (data) => (data.var!["2"] = [80.5, 84])),
      /surfaces\[2\]\.d 80 differs from var\["2"\]'s first value 80\.5/,
    ],
    [
      "an elemId that names no element",
      () => edit(prime, (data) => (data.surfaces[1].elemId = 7)),
      /surfaces\[1\]\.elemId 7 names no element/,
    ],
    [
      "a zoom field on a prime",
      () => edit(prime, (data) => (data.zoomLabels = ["Wide", "Tele"])),
      /zoomLabels is a zoom field/,
    ],
    [
      "zoom labels that are neither [wide, tele] nor one per station",
      () => edit(zoom, (data) => (data.zoomLabels = ["W", "M", "T", "X"])),
      /zoomLabels must be \[wide, tele\] or one label per zoom station \(3\)/,
    ],
    [
      "varLabels naming a gap that does not exist",
      () => edit(prime, (data) => data.varLabels!.push(["1A", "D1"])),
      /varLabels\[1\] labels "1A", which has no var entry/,
    ],
    [
      "varLabels out of surface order",
      () =>
        edit(prime, (data) => {
          data.var = { STO: [1, 1.5], "2": [80, 84] };
          data.varLabels = [
            ["2", "BF"],
            ["STO", "D0"],
          ];
        }),
      /^varLabels\[1\] labels "STO", which comes before "2" \(varLabels\[0\]\) in the surfaces: list the pairs in surface order$/,
    ],
    [
      "the aberration ring's varLabels out of surface order",
      () =>
        edit(prime, (data) => {
          data.aberrationControl = {
            label: "Spherical aberration",
            var: { STO: [1, 1.5, 2], "1A": [5, 5, 5] },
            varLabels: [
              ["1A", "D1"],
              ["STO", "D0"],
            ],
          };
        }),
      /^aberrationControl\.varLabels\[1\] labels "STO", which comes before "1A" \(aberrationControl\.varLabels\[0\]\) in the surfaces/,
    ],
    [
      "a field V1 does not define",
      () => edit(prime, (data) => ((data as unknown as Record<string, unknown>).zoomPosition = [50])),
      /zoomPosition is not a V1 field/,
    ],
    [
      "a field only the engine writes",
      () => edit(prime, (data) => ((data.surfaces[2] as unknown as Record<string, unknown>).synthetic = "rearPlate")),
      /surfaces\[2\]\.synthetic is set only by expandRearPlates\(\)/,
    ],
    [
      "half an element span",
      () => edit(prime, (data) => (data.elements[0].fromSurface = "1A")),
      /elements\[0\]\.fromSurface is set without elements\[0\]\.toSurface/,
    ],
    [
      "a surface label used twice",
      () => edit(prime, (data) => (data.surfaces[0].label = "1A")),
      /surfaces\[1\]\.label "1A" repeats surfaces\[0\]\.label/,
    ],
    [
      "a published zoom station that does not exist",
      () => edit(zoom, (data) => (data.publishedStations = { zoom: [0, 3] })),
      /publishedStations\.zoom\[1\] 3 names no zoom station \(0\.\.2\)/,
    ],
    /* The validator reads `asph: null` and `var: null` as absent, so ingest is the check that names them. */
    [
      "an asph of null",
      () => edit(prime, (data) => (untyped(data).asph = null)),
      /^asph must be an object of aspheric entries keyed by surface label$/,
    ],
    [
      "an asph written as a list",
      () => edit(prime, (data) => (untyped(data).asph = [{ K: -0.5 }])),
      /^asph must be an object of aspheric entries keyed by surface label$/,
    ],
    [
      "a var of null",
      () =>
        edit(prime, (data) => {
          untyped(data).var = null;
          delete data.varLabels;
        }),
      /^var must be an object of gaps keyed by surface label$/,
    ],
    [
      "a var written as a number",
      () =>
        edit(prime, (data) => {
          untyped(data).var = 84;
          delete data.varLabels;
        }),
      /^var must be an object of gaps keyed by surface label$/,
    ],
    [
      "an aspheric entry on a surface that does not exist",
      () => edit(prime, (data) => (data.asph!["9"] = { ...data.asph!["1A"] })),
      /^asph\["9"\]: no surface is labelled "9"$/,
    ],
    [
      "an aspheric entry of a number",
      () => edit(prime, (data) => (untyped(data.asph!)["1A"] = 5)),
      /^asph\["1A"\] must be an object of aspheric coefficients$/,
    ],
    [
      "an aspheric term the schema does not define",
      () => edit(prime, (data) => (untyped(data.asph!["1A"]).B4 = 1e-9)),
      /^asph\["1A"\]\.B4 is not an aspheric coefficient$/,
    ],
    [
      "varLabels that are not a list",
      () => edit(prime, (data) => (untyped(data).varLabels = { "2": "BF" })),
      /^varLabels must be a list$/,
    ],
    [
      "a label pair of three members",
      () => edit(prime, (data) => (untyped(data).varLabels = [["2", "BF", "back focus"]])),
      /^varLabels\[0\] must be a \[label, text\] pair$/,
    ],
    [
      "a gap labelled twice",
      () => edit(prime, (data) => data.varLabels!.push(["2", "D2"])),
      /^varLabels\[1\] labels "2" a second time$/,
    ],
    [
      "varLabels naming a member every object inherits",
      () => edit(prime, (data) => data.varLabels!.push(["toString", "D9"])),
      /^varLabels\[1\] labels "toString", which has no var entry$/,
    ],
    [
      "a gap on a surface that does not exist",
      () => edit(prime, (data) => (data.var!["9"] = [1, 2])),
      /^var\["9"\]: no surface is labelled "9"$/,
    ],
    [
      "a prime's gap that is not a list of thicknesses",
      () => edit(prime, (data) => (untyped(data.var!)["2"] = [80, "84"])),
      /^var\["2"\] must be a list of thicknesses$/,
    ],
    [
      "a zoom's gap that is not one row per station",
      () => edit(zoom, (data) => (data.var!["2"] = [80, 84])),
      /^var\["2"\] must be one row of thicknesses per zoom station$/,
    ],
    [
      "a per-station f-number on a prime",
      () => edit(prime, (data) => (untyped(data).nominalFno = [2.8, 4])),
      /^nominalFno is a per-station list, and a prime has no stations to hold it$/,
    ],
    [
      "zoom positions of one station",
      () => edit(prime, (data) => (data.zoomPositions = [50])),
      /^zoomPositions must list at least two station focal lengths$/,
    ],
    [
      "a per-station list of the wrong length",
      () => edit(zoom, (data) => (data.zoomCloseFocusM = [0.5, 0.6])),
      /^zoomCloseFocusM must hold one value per zoom station \(3\)$/,
    ],
    [
      "a finite conjugate between focus keyframes",
      () => edit(prime, (data) => (data.finiteConjugates = [conjugateAt(0.5, 0)])),
      /^finiteConjugates\[0\]\.focusT 0\.5 is no focus keyframe$/,
    ],
    [
      "a finite conjugate between zoom stations",
      () => edit(zoom, (data) => (data.finiteConjugates = [conjugateAt(1, 0.25)])),
      /^finiteConjugates\[0\]\.zoomT 0\.25 is no zoom station$/,
    ],
    [
      "a finite conjugate member V1 does not define",
      () => edit(prime, (data) => (data.finiteConjugates = [{ ...conjugateAt(1, 0), note: "x" } as FiniteConjugate])),
      /^finiteConjugates\[0\]\.note is not a V1 field$/,
    ],
    [
      "finite conjugates that are not a list",
      () => edit(prime, (data) => (untyped(data).finiteConjugates = { 0: conjugateAt(1, 0) })),
      /^finiteConjugates must be a list$/,
    ],
    [
      "published stations that are not an object",
      () => edit(prime, (data) => (untyped(data).publishedStations = [0])),
      /^publishedStations must be an object of zoom and focus station indices$/,
    ],
    [
      "a published-stations member V1 does not define",
      () => edit(zoom, (data) => (untyped(data).publishedStations = { stations: [0] })),
      /^publishedStations\.stations is not a V1 field$/,
    ],
    [
      "published zoom stations on a prime",
      () => edit(prime, (data) => (data.publishedStations = { zoom: [0] })),
      /^publishedStations\.zoom is a zoom field on a prime$/,
    ],
    [
      "per-station published focus on a prime",
      () => edit(prime, (data) => (data.publishedStations = { focus: [[0]] })),
      /^publishedStations\.focus on a prime must be one index list$/,
    ],
    [
      "published zoom stations that are not a list of indices",
      () => edit(zoom, (data) => (untyped(data).publishedStations = { zoom: "all" })),
      /^publishedStations\.zoom must be a list of station indices$/,
    ],
    [
      "published focus rows for some zoom stations",
      () => edit(zoom, (data) => (data.publishedStations = { focus: [[0], [1]] })),
      /^publishedStations\.focus must be one index list or one list per zoom station \(3\)$/,
    ],
    ["a required field left out", () => edit(prime, (data) => delete untyped(data).yScFill), /^yScFill is required$/],
    [
      "surfaces that are not a list of objects",
      () => edit(prime, (data) => (untyped(data).surfaces = [1, 2])),
      /^surfaces must be a list of objects$/,
    ],
    [
      "an element field V1 does not define",
      () => edit(prime, (data) => (untyped(data.elements[0]).bogus = 1)),
      /^elements\[0\]\.bogus is not a V1 field$/,
    ],
    [
      "a rear-plate field V1 does not define",
      () =>
        edit(prime, (data) => {
          data.rearPlates = [{ thicknessMm: 2, nd: 1.5168, vd: 64.17, gapAfterMm: 1 }];
          untyped(data.rearPlates[0]).bogus = 1;
        }),
      /^rearPlates\[0\]\.bogus is not a V1 field$/,
    ],
    [
      "an aberration-control field V1 does not define",
      () =>
        edit(prime, (data) => {
          data.aberrationControl = { label: "Spherical aberration", var: {} };
          untyped(data.aberrationControl).bogus = 1;
        }),
      /^aberrationControl\.bogus is not a V1 field$/,
    ],
    [
      "a field named for a member every object inherits",
      () => edit(prime, (data) => Object.assign(data, { toString: "x" })),
      /^toString is not a V1 field$/,
    ],
    [
      "a label pair whose text is not a string",
      () => edit(prime, (data) => (untyped(data).varLabels = [["2", 5]])),
      /^varLabels\[0\] must be a \[label, text\] pair$/,
    ],
    [
      "rear plates that are not a list",
      () => edit(prime, (data) => (untyped(data).rearPlates = {})),
      /^rearPlates must be a list$/,
    ],
  ])("refuses %s, naming it", (_name, make, message) => {
    const issues = refusal(make());
    expect(issues).toHaveLength(1);
    expect(issues[0]).toMatch(message);
  });

  it("refuses for a teleconverter as for a lens, naming it", () => {
    const converter = () => toTeleconverterData(ingestTeleconverter(TELECONVERTERS[0].data));
    const refuse = (data: TeleconverterData): string[] => {
      try {
        ingestTeleconverterV1(data);
      } catch (thrown) {
        if (thrown instanceof PrescriptionIngestError) return [...thrown.issues];
        throw thrown;
      }
      return [];
    };
    const unknown = converter();
    (unknown as unknown as Record<string, unknown>).zoomPositions = [50, 70];
    expect(refuse(unknown)).toEqual(["zoomPositions is not a V1 field"]);
    const nd = converter();
    const surface = nd.surfaces.findIndex((candidate) => candidate.elemId !== 0);
    nd.surfaces[surface].nd += 0.01;
    expect(refuse(nd)).toHaveLength(1);
    expect(refuse(nd)[0]).toMatch(new RegExp(`^surfaces\\[${surface}\\]\\.nd .* differs from elements\\[\\d+\\]\\.nd`));
  });

  it("names an asph or var of null through buildLens, where the validator reads either as absent", () => {
    const nullAsph = edit(prime, (data) => (untyped(data).asph = null));
    const nullVar = edit(prime, (data) => {
      untyped(data).var = null;
      delete data.varLabels;
    });
    expect(() => buildLens(nullAsph as LensData)).toThrow(
      /asph must be an object of aspheric entries keyed by surface label/,
    );
    expect(() => buildLens(nullVar as LensData)).toThrow(/var must be an object of gaps keyed by surface label/);
  });

  it("names every reason at once, and the error carries the lens key", () => {
    const data = edit(prime, (lens) => {
      lens.surfaces[1].nd = 1.6;
      lens.zoomStep = 0.01;
    });
    expect(() => ingested(data)).toThrow(/Prescription "canonical-test-prime" cannot be ingested/);
    expect(refusal(data)).toHaveLength(2);
  });
});
