/**
 * Engine differential harness: the budget table, the comparison under each change class, cross-evaluation of data
 * changes, declared exceptions and the reports.
 *
 * The comparator is fed records captured from this checkout's engine with one perturbation injected at a time, so
 * each test names the drift it must detect. Real catalog lenses appear only as sources of realistic records.
 */

import { describe, expect, it } from "vitest";
import {
  C2_CRITERIA,
  QUANTITIES,
  RAW_INTERSECTION_TOLERANCE_MM,
  budgetOf,
  resolveBudgetRule,
  type ChangeClass,
  type Quantity,
  type QuantityId,
} from "../../../src/benchmarks/engineDiff/budgets.js";
import {
  captureRecords,
  exportCatalog,
  fingerprintCatalog,
  permittedPairs,
  requestCatalog,
  unbuiltPairs,
  type PayloadRecord,
  type SerializedCatalog,
} from "../../../src/benchmarks/engineDiff/captureEntry.js";
import {
  classifyCatalogChanges,
  comparePermittedPairs,
  createDifferentialRun,
  dataChangeOf,
  parseDeclaredExceptions,
  parseDeclaredTransitions,
  renderDataImpactMarkdown,
  renderSummaryMarkdown,
  transitionUnit,
  type ComparableRecord,
  type DataChange,
  type Finding,
  type LensCaptures,
  type RunContext,
  type RunOptions,
  type RunSummary,
} from "../../../src/benchmarks/engineDiff/compare.js";
import {
  createResultEncoder,
  decodeValue,
  encodeValue,
  maskBudgetedNumbers,
  type EncodedValue,
} from "../../../src/benchmarks/engineDiff/payload.js";
import {
  ANALYSIS_CONTEXT_JOBS,
  DEFAULT_STATE,
  FEATURE_REPRESENTATIVES,
  lensId,
  stateId,
  tierRequests,
  type CaptureRequest,
  type RequestFamily,
} from "../../../src/benchmarks/engineDiff/requests.js";
import { INTERSECTION_TOLERANCE } from "../../../src/optics/constants.js";
import type { LensDataInput } from "../../../src/types/optics.js";
import plainTwin from "./engineDiffFixtures/fingerprintTwinPlain.js";
import restyledTwin from "./engineDiffFixtures/fingerprintTwinRestyled.js";

const CATALOG = exportCatalog();
const TIER_P = tierRequests("p", requestCatalog(CATALOG));
const recordsOf = (id: string): PayloadRecord[] =>
  captureRecords(
    CATALOG,
    TIER_P.filter((request) => lensId(request.lens) === id),
  );

/** A benchmark prime: build constants, one state's families, every analysis job and MTF, in seven records. */
const SERENAR = "canon-serenar-50f18";
const SERENAR_RECORDS = recordsOf(SERENAR);
/** The one converter pair in Tier P. */
const PAIR_ID = lensId(FEATURE_REPRESENTATIVES.find(({ feature }) => feature === "converter-pair")!.lens);

const CLASSES: readonly ChangeClass[] = ["c0", "c1", "c2", "c3"];
type Path = readonly (string | number)[];

function valueOf(record: ComparableRecord): Record<string | number, unknown> {
  if (!record.payload.ok) throw new Error(`${record.lens} ${record.request}: ${record.payload.error.message}`);
  return record.payload.value as Record<string | number, unknown>;
}

/** The member at a path under the value of the first record of a request family. */
function at(records: readonly ComparableRecord[], request: RequestFamily, path: Path): unknown {
  let node: unknown = valueOf(records.find((record) => record.request === request)!);
  for (const step of path) node = (node as Record<string | number, unknown>)[step];
  return node;
}

/** A copy of the records with one member replaced. */
function withChange(
  request: RequestFamily,
  path: Path,
  change: (value: unknown) => unknown,
  source: readonly PayloadRecord[] = SERENAR_RECORDS,
): PayloadRecord[] {
  const records = structuredClone(source) as PayloadRecord[];
  const owner = at(records, request, path.slice(0, -1)) as Record<string | number, unknown>;
  const leaf = path[path.length - 1];
  owner[leaf] = change(owner[leaf]);
  return records;
}

const numberAt = (request: RequestFamily, path: Path): number => {
  const value = at(SERENAR_RECORDS, request, path);
  if (typeof value !== "number") throw new Error(`${request} ${path.join(".")} is not a number`);
  return value;
};

/** Compare records as the same prescription on two engines. */
function compare(
  changeClass: ChangeClass,
  head: readonly PayloadRecord[],
  base: readonly PayloadRecord[] = SERENAR_RECORDS,
): RunSummary {
  const run = createDifferentialRun({ changeClass, declaredExceptions: [], restricted: true });
  run.addLens({ lens: base[0].lens, dataChange: "unchanged", baseEngine: base, headEngine: head });
  return run.finish();
}

const failuresOf = (summary: RunSummary): Partial<Finding>[] =>
  summary.engine.failures.map(({ request, path, kind, quantity }) => ({ request, path, kind, quantity }));

/** What a driver knows about a run and passes to the reports. */
const REPORT_CONTEXT: RunContext = {
  tier: "p",
  shard: null,
  base: { ref: "origin/main", commit: "0123456789abcdef" },
  head: { commit: "fedcba9876543210", uncommittedChanges: true },
  lens: SERENAR,
  removed: ["engine-diff-leaving"],
  teleconverters: {},
  phases: [
    ["Capture on the base engine", 12.34],
    ["Total", 30],
  ],
};

/** A completed ray of the on-axis fan, and one of its hits away from either end. */
const RAY: Path = ["onAxis", "rays", 1];
const HIT = 2;
const HIT_POINT_Y: Path = [...RAY, "hits", "columns", "point", HIT, 1];

/** An off-axis field of the bokeh preview, and the bokeh footprint of one sensor point of the posed focus analysis. */
const BOKEH_FIELD: Path = ["jobs", "computeBokehPreviewPair", "value", "infinity", "fields", 1];
const POSED_BOKEH: Path = ["jobs", "computePerspectiveFocusAnalysis", "value", "samples", 1, "bokeh"];
/** An off-axis spot of the coma point cloud, and one of the posed coma analysis. */
const COMA_FIELD: Path = ["jobs", "computeComaAnalysis", "value", "pointCloudPreview", "fields", 1];
const POSED_COMA_SAMPLE: Path = ["jobs", "computePerspectiveFieldAberrations", "value", "coma", "samples", 1];
/** The blur character of spherical aberration, in front of best focus. */
const BLUR_CHARACTER: Path = ["jobs", "computeSphericalAberrationBlurCharacter", "value", "frontDefocus"];
/** The off-axis chromatic fan: where a ray of each channel crosses the axis, and the span of those crossings. */
const FAN_SPREAD: Path = ["jobs", "computeChromaticRayFanAnalysis", "value", "spreads", "offAxis"];
/** The pupil-aberration profiles, and one field of the exit pupil's, away from the axis. */
const PUPIL_PROFILES: Path = ["jobs", "computeBothPupilAberrationProfiles", "value"];
const XP_SAMPLE: Path = [...PUPIL_PROFILES, "xp", "samples", 13];
/** A length in micrometres beside its twin in mm, and a bar of the LoCA inset, a focus shift in px. */
const SA_UM: Path = ["jobs", "computeSphericalAberration", "value", "longitudinalSaUm"];
const SA_MM: Path = ["jobs", "computeSphericalAberration", "value", "longitudinalSaMm"];
const LOCA_BAR: Path = ["jobs", "locaBarOffsets", "value", "barOffsets", "R"];
const LOCA_PX_PER_MM = 201;
/** An off-axis field of the field-curvature analysis: its traced foci, and the Petzval position beside them. */
const CURVATURE_FIELD: Path = ["jobs", "computeFieldCurvature", "value", "fields", 2];

/** The Tier P lens with an absorbing element, whose rays do not all weigh the same. */
const ABSORBING = lensId(FEATURE_REPRESENTATIVES.find(({ feature }) => feature === "bulk-absorption")!.lens);
/**
 * That lens's analysis record at the default state. The catalog's own prescription is captured once, by the first
 * test that asks, and a test that edits the prescription captures its own.
 */
const absorbingAnalysisOf = (catalog: SerializedCatalog): PayloadRecord[] =>
  captureRecords(
    catalog,
    TIER_P.filter(({ lens, family }) => lensId(lens) === ABSORBING && family === "analysis"),
  );
let absorbingRecords: PayloadRecord[] | undefined;
const absorbingAnalysis = (): PayloadRecord[] => (absorbingRecords ??= absorbingAnalysisOf(CATALOG));

/** The record path of a member, as the budget table is asked for it: "[]" for each array level. */
const tablePath = (path: Path): string[] => path.map((step) => (typeof step === "number" ? "[]" : step));
/** The same path as a finding prints it. */
const pathText = (path: Path): string =>
  path.reduce<string>(
    (text, step) => (typeof step === "number" ? `${text}[${step}]` : text ? `${text}.${step}` : step),
    "",
  );
/** The five statistics of a footprint's radial profile: two of a bin, two means of bins, and the ratio of the means. */
const profileStatistics = (footprint: Path): Path[] => [
  [...footprint, "radialProfile", "bins", 0, "density"],
  [...footprint, "radialProfile", "bins", 0, "energyFraction"],
  [...footprint, "radialProfile", "centerDensity"],
  [...footprint, "radialProfile", "rimDensity"],
  [...footprint, "centerToRimRatio"],
];
/** How many different weights the points of a footprint carry: one where the engine summed rays of one weight. */
const distinctWeights = (records: readonly PayloadRecord[], footprint: Path): number =>
  new Set((at(records, "analysis", [...footprint, "points"]) as { weight: number }[]).map(({ weight }) => weight)).size;

/* ── budgets.ts ── */

describe("engineDiff budget table", () => {
  it("keeps the plan's proposed budgets", () => {
    const row = (id: QuantityId) => {
      const { kind, c1, unit } = QUANTITIES[id];
      return [kind, c1, unit];
    };
    expect(row("landing")).toEqual(["absolute", 1e-9, "mm"]);
    /* 1e-7 mm, as the plan has it, for any point within 100 m of the lens; relative beyond that. */
    expect(row("clippedHit")).toEqual(["relative", 1e-12, "relative"]);
    expect(QUANTITIES.clippedHit.floor).toEqual({ bound: 1e-7, unit: "mm" });
    expect(row("directionCosine")).toEqual(["absolute", 1e-10, ""]);
    expect(row("firstOrder")).toEqual(["relative", 1e-12, "relative"]);
    expect(row("chiefLaunch")).toEqual(["absolute", 1e-9, "mm"]);
    expect(row("fieldAngle")).toEqual(["absolute", 1e-10, "deg"]);
    /* 1e-8 mm, as the plan has it, for any length under 100 mm; 1e-10 of the length's own size beyond that. */
    expect(row("analysisLength")).toEqual(["relative", 1e-10, "relative"]);
    expect(QUANTITIES.analysisLength.floor).toEqual({ bound: 1e-8, unit: "mm" });
    expect(row("percentage")).toEqual(["absolute", 1e-8, "points"]);
    expect(row("mtfModulation")).toEqual(["absolute", 1e-7, ""]);
    expect(row("count")).toEqual(["exact", 0, ""]);
    expect(row("requested")).toEqual(["exact", 0, ""]);
    /* Two kinds of ratio the plan budgets by name, each a plain share of the value: the weighted bins of a bokeh
     * footprint at the 1e-10 of a smooth ratio, and one analysis length over another at 1e-8. */
    expect(row("binnedStatistic")).toEqual(["relative", 1e-10, "relative"]);
    expect(QUANTITIES.binnedStatistic.floor).toBeUndefined();
    expect(row("lengthRatio")).toEqual(["relative", 1e-8, "relative"]);
    expect(QUANTITIES.lengthRatio.floor).toBeUndefined();
    const planRows = (Object.keys(QUANTITIES) as QuantityId[]).filter((id) => QUANTITIES[id].origin === "plan");
    expect(planRows).toHaveLength(13);
    expect(planRows.slice(11)).toEqual(["binnedStatistic", "lengthRatio"]);
  });

  it("gives a relative class a floor where its values may be zero or its budget is absolute near the lens", () => {
    /* A floor is the least a relative bound may be, in the class's unit, and a class has one for either of two
     * reasons. A length may be exactly zero, so its classes keep 1e-12 mm; a smooth ratio is a fraction that is
     * often zero, and keeps its 1e-10. A clipped or diagnostic point keeps the plan's 1e-7 mm as its floor and an
     * analysis length the plan's 1e-8 mm: each is relative only far from the lens, a point beyond 100 m and a
     * length beyond 100 mm. An index, an f-number, a ratio of ray heights or the Petzval sum is no length and
     * never near zero, and is held to the plain relative bound. */
    const floors = (Object.keys(QUANTITIES) as QuantityId[]).flatMap((id) => {
      const { kind, c1, floor }: Quantity = QUANTITIES[id];
      return kind === "relative" ? [[id, c1, floor ?? null]] : [];
    });
    const lengthFloor = { bound: 1e-12, unit: "mm" };
    expect(floors).toEqual([
      ["clippedHit", 1e-12, { bound: 1e-7, unit: "mm" }],
      ["firstOrder", 1e-12, lengthFloor],
      ["analysisLength", 1e-10, { bound: 1e-8, unit: "mm" }],
      /* A weighted bin is a sum of weights that are never negative. Nothing cancels in it, so it is never near zero
       * without being zero, and a bin no ray falls in is zero on both sides. */
      ["binnedStatistic", 1e-10, null],
      /* One spot extent over another is 1 or more, and a span ratio is zero only for a footprint with no rays. */
      ["lengthRatio", 1e-8, null],
      /* A hit's effective tolerance is a length that is never below the engine's 1e-12 mm target. */
      ["effectiveTolerance", 1e-12, null],
      ["layoutLength", 1e-12, lengthFloor],
      ["bestFitRadius", 1e-12, lengthFloor],
      ["tangentialParabasalFocus", 1e-10, { bound: 1e-7, unit: "mm" }],
      ["refractiveIndex", 1e-12, null],
      ["nonLength", 1e-12, null],
      ["prescription", 1e-12, null],
      ["ratio", 1e-10, { bound: 1e-10, unit: "" }],
    ]);
    const classOf = (family: RequestFamily, ...path: string[]) => resolveBudgetRule(family, path)?.quantity;
    expect(classOf("build", "petzvalSum")).toBe("nonLength");
    expect(classOf("build", "EP", "yRatio")).toBe("nonLength");
    expect(classOf("build", "FOPEN")).toBe("nonLength");
    expect(classOf("fieldGeometry", "raw", "yRatio")).toBe("nonLength");
    expect(classOf("mtf", "result", "aperture", "tracedFNumber")).toBe("nonLength");
    expect(classOf("analysis", "jobs", "computeOpticalSummary", "value", "effectiveFNumber")).toBe("nonLength");
    expect(classOf("build", "EFL")).toBe("firstOrder");
    expect(classOf("build", "EP", "epSD")).toBe("firstOrder");
    expect(classOf("build", "epZRelStop")).toBe("firstOrder");
    expect(classOf("fieldGeometry", "raw", "epRatio")).toBe("firstOrder");
    /* A prescription handed back has no one unit, and holds asphere coefficients far below any floor of a length. */
    expect(classOf("build", "data", "asph", "3", "A10")).toBe("prescription");
    expect(classOf("composition", "prescription", "surfaces", "[]", "d")).toBe("prescription");
    expect(classOf("composition", "compatibility", "geometry", "finalGapMm")).toBe("layoutLength");
  });

  it("holds a solver's output to the plan's budget for its kind, and keeps the solver's quantum for the report", () => {
    /* A quantum says how far such an output moves when one comparison inside its solver falls the other way. It
     * is never the budget: each class takes the plan's row for the quantity it is. */
    const solverOutputs = (Object.keys(QUANTITIES) as QuantityId[]).flatMap((id) => {
      const { kind, c1, unit, solver }: (typeof QUANTITIES)[QuantityId] & { solver?: { quantum: number } } =
        QUANTITIES[id];
      return solver ? [[id, kind, c1, unit, solver.quantum]] : [];
    });
    const { fieldAngle, analysisLength, firstOrder } = QUANTITIES;
    expect(solverOutputs).toEqual([
      ["buildHalfField", "absolute", fieldAngle.c1, "deg", 90 / 2 ** 40],
      ["rawHalfField", "absolute", fieldAngle.c1, "deg", 90 / 2 ** 20],
      ["analysisHalfField", "absolute", fieldAngle.c1, "deg", 5 / 2 ** 8],
      /* A best-focus shift is a fraction of a millimetre, where an analysis length is held to its floor. */
      ["mtfFocusShift", "absolute", analysisLength.floor?.bound, "mm", 1e-6],
      ["bestFitRadius", "relative", firstOrder.c1, "relative", 1e-7],
    ]);
    expect(analysisLength.floor?.bound).toBe(1e-8);
    /* A residual is no output to difference. Its class is a contract: the tolerance of the solve, in mm, or the
     * one recorded beside a hit. */
    const residuals = (Object.keys(QUANTITIES) as QuantityId[]).flatMap((id) => {
      const { kind, c1, tolerance }: Quantity = QUANTITIES[id];
      return kind === "residual" ? [[id, c1, tolerance ?? null]] : [];
    });
    expect(residuals).toEqual([
      ["intersectionResidual", 1, null],
      ["chiefStopResidual", 1, 1e-7],
      ["sensorLockResidual", 1, 1e-5],
      ["chiefStopPlaneResidual", 1, 1e-6],
    ]);
    /* What a digest keeps of the residuals behind it is a share already, held to 1 like the residual of a hit. */
    const { kind, c1 }: Quantity = QUANTITIES.nestedResidualShare;
    expect([kind, c1]).toEqual(["share", 1]);
    expect(resolveBudgetRule("analysis", ["jobs", "x", "value", "trace", "residualShare"])?.quantity).toBe(
      "nestedResidualShare",
    );
  });

  it("holds every budget to the plan's loosest row of its unit, and names the classes that ceiling cannot hold", () => {
    /* No class carries a budget looser than the plan's loosest row in the unit the budget is stated in. Among the
     * relative rows that is the ratio of two analysis lengths, at 1e-8. */
    const loosest: Record<string, number> = { mm: 1e-7, deg: 1e-10, relative: 1e-8, points: 1e-8, "": 1e-7 };
    const differenced = (Object.keys(QUANTITIES) as QuantityId[]).filter((id) =>
      ["absolute", "relative", "slope"].includes(QUANTITIES[id].kind),
    );
    const looser = differenced.filter((id) => !(QUANTITIES[id].c1 <= loosest[QUANTITIES[id].unit]));
    expect(looser).toEqual([]);
    /* That row is alone past the budget of a fraction: no other relative class may take its 1e-8 as a ceiling. An
     * analysis length is a share of itself only beyond 100 mm, and then at the 1e-10 of a fraction, not past it. */
    const pastAFraction = differenced.filter((id) => QUANTITIES[id].unit === "relative" && QUANTITIES[id].c1 > 1e-10);
    expect(pastAFraction).toEqual(["lengthRatio"]);

    /* The ceiling above reads a relative class by its share alone, and a share of a length is no bound in mm: it
     * allows more millimetres the longer the length is. What holds such a class is its floor and the size where
     * the share overtakes it, so every floor is held here to what it is for. */
    const floored = differenced.flatMap((id) => {
      const { c1, floor }: Quantity = QUANTITIES[id];
      return floor ? [{ id, c1, ...floor }] : [];
    });
    /* A floor that equals the class's share at a size of 1 is a bound for a value at zero and no more: under 1 mm,
     * or under a fraction of 1, the class is absolute at its own relative budget. */
    const atZero = floored.filter(({ bound, c1 }) => bound === c1);
    expect(atZero.map(({ id, bound, unit }) => [id, bound, unit])).toEqual([
      ["firstOrder", 1e-12, "mm"],
      ["layoutLength", 1e-12, "mm"],
      ["bestFitRadius", 1e-12, "mm"],
      ["ratio", 1e-10, ""],
    ]);
    /* Any other floor is a plan row's absolute budget, and the whole budget of its class up to the size where the
     * share is more. Each is listed with that size, in mm, so that no class becomes a share of a length unseen: a
     * diagnostic point beyond 100 m, an analysis length beyond 100 mm. */
    const farFromTheLens = floored.filter(({ bound, c1 }) => bound !== c1);
    expect(farFromTheLens.map(({ id, bound, unit, c1 }) => [id, bound, unit, c1, bound / c1])).toEqual([
      ["clippedHit", 1e-7, "mm", 1e-12, expect.closeTo(1e5, 6)],
      ["analysisLength", 1e-8, "mm", 1e-10, 100],
      ["tangentialParabasalFocus", 1e-7, "mm", 1e-10, expect.closeTo(1000, 9)],
    ]);
    /* Such a floor is itself no looser than the loosest absolute row of its unit. Past its size the class is, by
     * the plan's rule for it and not by oversight: an analysis length 44 m away is allowed 4.4e-6 mm, forty-four
     * times the loosest row in mm, and a diagnostic point 1e8 mm away a thousand times it. No ceiling in this test
     * holds that. The share and the floor pinned above are the bound. */
    for (const { bound, unit } of farFromTheLens) expect(bound).toBeLessThanOrEqual(loosest[unit]);
    const boundAt = (id: "clippedHit" | "analysisLength", sizeMm: number) =>
      Math.max(QUANTITIES[id].floor!.bound, QUANTITIES[id].c1 * sizeMm);
    expect(boundAt("analysisLength", 99.9)).toBe(1e-8);
    expect(boundAt("analysisLength", 44222) / loosest.mm).toBeCloseTo(44.222, 9);
    expect(boundAt("clippedHit", 99e3)).toBe(1e-7);
    expect(boundAt("clippedHit", 1e8) / loosest.mm).toBeCloseTo(1000, 6);
  });

  it("keeps the Petzval focus position, which no rays cross to make, at a plain 1e-8 mm in a class of its own", () => {
    /* The class is what an analysis length is allowed under 100 mm, as an absolute bound with no share of the
     * value: the position is the image plane's z plus a closed-form sag, long only because z is counted from the
     * first vertex. */
    const { kind, c1, unit, floor, origin, solver }: Quantity = QUANTITIES.petzvalPosition;
    expect([kind, c1, unit, origin]).toEqual(["absolute", 1e-8, "mm", "derived"]);
    expect(c1).toBe(QUANTITIES.analysisLength.floor?.bound);
    expect(floor).toBeUndefined();
    expect(solver).toBeUndefined();
    for (const changeClass of CLASSES) expect(budgetOf("petzvalPosition", changeClass)).toBe(1e-8);
    /* The row names that one member, wherever a field-curvature result holds it. The traced foci of the same
     * field, the Petzval shift and every other focus position keep the class of an analysis length. */
    const classOf = (...path: string[]) => resolveBudgetRule("analysis", ["jobs", ...path])?.quantity;
    const results = [
      ["computeFieldCurvature", "value"],
      ["computeFieldCurvatureBundle", "value", "fieldCurvature"],
      ["computeFieldCurvatureBundle", "value", "chromaticFieldCurvature"],
    ];
    for (const result of results) {
      for (const fields of ["fields", "curveFields"]) {
        expect(classOf(...result, fields, "[]", "petzvalBestFocusZ")).toBe("petzvalPosition");
        for (const beside of [
          "sagittalBestFocusZ",
          "diagnosticTangentialBestFocusZ",
          "diagnosticSagittalBestFocusZ",
          "petzvalShiftMm",
        ]) {
          expect(classOf(...result, fields, "[]", beside)).toBe("analysisLength");
        }
      }
    }
    expect(resolveBudgetRule("analysis", ["jobs", "x", "value", "petzvalBestFocusZ"])).toMatchObject({
      quantity: "petzvalPosition",
      scale: 1,
    });
    expect(classOf("computeSphericalAberration", "value", "bestFocusZ")).toBe("analysisLength");
    expect(classOf("computeBestFocusZ", "value")).toBe("analysisLength");
    expect(classOf("longitudinalChromaticFocus", "value", "samples", "[]", "focusZ")).toBe("analysisLength");
  });

  it("holds every class to its C1 budget under C2, and says which C2 criteria it does not apply", () => {
    /* The plan's C2 column is a propagated solver criterion wherever it is not empty. None is derived here. */
    for (const id of Object.keys(QUANTITIES) as QuantityId[]) expect(budgetOf(id, "c2")).toBe(budgetOf(id, "c1"));
    expect(Object.keys(C2_CRITERIA).sort()).toEqual(
      ["analysisLength", "chiefLaunch", "fieldAngle", "mtfModulation", "percentage"].sort(),
    );
  });

  it("resolves a path by its first matching row, and leaves an unknown member unclassified", () => {
    /* A legacy ray's height is budgeted by its own clip flag, ahead of the row for every other ray's `y`. */
    const legacy = resolveBudgetRule("traces", ["legacy", "rays", "[]", "y"]);
    const prepared = resolveBudgetRule("traces", ["onAxis", "rays", "[]", "y"]);
    expect(typeof legacy?.quantity).toBe("function");
    expect(legacy?.quantity).not.toBe(prepared?.quantity);
    expect(resolveBudgetRule("analysis", ["jobs", "x", "value", "spanUm"])).toMatchObject({
      quantity: "analysisLength",
      scale: 1000,
    });
    expect(resolveBudgetRule("analysis", ["jobs", "x", "value", "spanMm"])).toMatchObject({ scale: 1 });
    /* A job name is one member even though it contains a dot. */
    expect(resolveBudgetRule("analysis", ["jobs", "groupMovement.focus", "value", "maxAbsShiftMm"])?.quantity).toBe(
      "layoutLength",
    );
    expect(resolveBudgetRule("analysis", ["jobs", "x", "value", "maxAbsShiftMm"])?.quantity).toBe("analysisLength");
    expect(resolveBudgetRule("traces", ["onAxis", "rays", "[]", "newMember"])).toBeNull();
    /* A pattern is scoped to its family, and "*" never stands for an array level. */
    expect(resolveBudgetRule("layout", ["EFL"])).toBeNull();
    expect(resolveBudgetRule("build", ["labelIdx", "3/5"])?.quantity).toBe("count");
    expect(resolveBudgetRule("build", ["labelIdx", "[]"])).toBeNull();
    /* Rows that hand prescription data back say so: the lens's `data` and elements, and a composed prescription. */
    expect(resolveBudgetRule("build", ["data", "surfaces", "[]", "d"])).toMatchObject({ authored: true });
    expect(resolveBudgetRule("build", ["elements", "[]", "fl"])).toMatchObject({
      quantity: "requested",
      authored: true,
    });
    expect(resolveBudgetRule("build", ["elements", "[]", "id"])).toMatchObject({ quantity: "count", authored: true });
    expect(resolveBudgetRule("composition", ["prescription", "elements", "[]", "fl"])?.authored).toBe(true);
    expect(resolveBudgetRule("build", ["maxFstop"])).toMatchObject({ quantity: "requested" });
    expect(resolveBudgetRule("build", ["maxFstop"])?.authored).toBeUndefined();
    expect(resolveBudgetRule("composition", ["compatibility", "geometry", "gapMm"])?.authored).toBeUndefined();
  });
});

/* ── compare.ts: one prescription on two engines ── */

describe("engineDiff comparison of identical captures", () => {
  it.each(CLASSES)("passes under %s, on a second capture as on a copy", (changeClass) => {
    for (const head of [structuredClone(SERENAR_RECORDS), recordsOf(SERENAR)]) {
      const summary = compare(changeClass, head);
      expect(summary.passed).toBe(true);
      expect(summary.failures).toEqual([]);
      expect(summary.engine).toMatchObject({ records: 7, recordsDiffering: 0, numbersDiffering: 0, failing: 0 });
    }
  });

  it("counts what a pull request states: records, numbers, ray statuses and job outcomes", () => {
    const { counts, engine, lenses } = compare("c0", structuredClone(SERENAR_RECORDS));
    expect(lenses).toBe(1);
    expect(counts.headEngine).toEqual(counts.baseEngine);
    expect(counts.headEngine.records).toBe(7);
    expect(counts.headEngine.failedRecords).toBe(0);
    expect(engine.numbers).toBe(counts.headEngine.numbers);
    expect(engine.numbers).toBeGreaterThan(1e5);
    /* Four fans with full hits: 5 on-axis, 5 off-axis, 4 skew, and 2 per chromatic channel. */
    const { ok, clipped, failed } = counts.headEngine.rays;
    expect(ok + clipped + failed).toBe(22);
    expect(ok).toBeGreaterThan(0);
    expect(counts.headEngine.digestedTraces.ok).toBeGreaterThan(0);
    /* The context's jobs, six beside them, and the four readouts the viewer computes outside the context. */
    expect(counts.headEngine.jobs).toEqual({ returned: ANALYSIS_CONTEXT_JOBS.length + 10, threw: 0 });
  });
});

describe("engineDiff tangential parabasal focus", () => {
  const contexts = [
    ["computeFieldCurvature", "value"],
    ["computeFieldCurvatureBundle", "value", "fieldCurvature"],
    ["computeFieldCurvatureBundle", "value", "chromaticFieldCurvature"],
  ];
  const ruleAt = (path: string[]) => resolveBudgetRule("analysis", ["jobs", ...path]);
  const records = (job: string, member: string, value: number): ComparableRecord[] => [
    {
      lens: "synthetic",
      state: DEFAULT_STATE,
      request: "analysis",
      payload: { ok: true, value: encodeValue({ jobs: { [job]: { value: { fields: [{ [member]: value }] } } } }) },
    },
  ];
  const judge = (job: string, member: string, position: number, move: number, changeClass: ChangeClass = "c1") => {
    const run = createDifferentialRun({ changeClass, declaredExceptions: [], restricted: true });
    run.addLens({
      lens: "synthetic",
      dataChange: "unchanged",
      baseEngine: records(job, member, position),
      headEngine: records(job, member, position + move),
    });
    return run.finish();
  };

  it("pins the class, units and every job-scoped row", () => {
    expect(QUANTITIES.tangentialParabasalFocus).toEqual({
      title: "Tangential parabasal focus, 1e-7 mm at least",
      unit: "relative",
      kind: "relative",
      c1: 1e-10,
      c2: null,
      floor: { bound: 1e-7, unit: "mm" },
      origin: "addition",
    });
    for (const changeClass of CLASSES) expect(budgetOf("tangentialParabasalFocus", changeClass)).toBe(1e-10);
    const covered = (path: string[], scale = 1) =>
      expect(ruleAt(path)).toMatchObject({ quantity: "tangentialParabasalFocus", scale });
    for (const context of contexts) {
      for (const fields of ["fields", "curveFields"]) {
        for (const member of ["tangentialBestFocusZ", "tangentialShiftMm", "astigmaticDifferenceMm"])
          covered([...context, fields, "[]", member]);
        covered([...context, fields, "[]", "astigmaticDifferenceUm"], 1000);
        covered([...context, fields, "[]", "chromaticFieldShifts", "[]", "tangentialShiftMm"]);
        for (const member of [
          "sagittalBestFocusZ",
          "sagittalShiftMm",
          "diagnosticTangentialBestFocusZ",
          "diagnosticTangentialShiftMm",
          "petzvalShiftMm",
        ]) {
          expect(ruleAt([...context, fields, "[]", member])?.quantity).toBe("analysisLength");
        }
        expect(ruleAt([...context, fields, "[]", "petzvalBestFocusZ"])?.quantity).toBe("petzvalPosition");
      }
      for (const member of [
        "maxAstigmaticDifferenceMm",
        "edgeTangentialShiftMm",
        "sharedFocusShiftHalfRangeMm",
        "chromaticFocusSpreadMm",
      ])
        covered([...context, member]);
      covered([...context, "maxAstigmaticDifferenceUm"], 1000);
    }
    const summary = ["chromaticFieldFocusSummary", "value"];
    for (const member of ["minShiftMm", "maxShiftMm", "spreadMm"])
      covered([...summary, "fields", "[]", "tangential", member]);
    covered([...summary, "fields", "[]", "tangential", "spreadUm"], 1000);
    covered([...summary, "fields", "[]", "maxFocusSpreadMm"]);
    covered([...summary, "fields", "[]", "maxFocusSpreadUm"], 1000);
    for (const member of ["maxTangentialSpreadMm", "maxFocusSpreadMm", "edgeFocusSpreadMm"])
      covered([...summary, member]);
    expect(ruleAt([...summary, "fields", "[]", "sagittal", "spreadUm"])).toMatchObject({
      quantity: "analysisLength",
      scale: 1000,
    });
    expect(ruleAt(["computePerspectiveFieldAberrations", "value", "fields", "[]", "tangentialShiftMm"])?.quantity).toBe(
      "analysisLength",
    );
  });

  it("admits 5e-8 mm only on the named tangential job member", () => {
    expect(judge("computeFieldCurvature", "tangentialShiftMm", 0, 5e-8).passed).toBe(true);
    expect(judge("computeFieldCurvature", "sagittalShiftMm", 0, 5e-8).passed).toBe(false);
    expect(judge("computePerspectiveFieldAberrations", "tangentialShiftMm", 0, 5e-8).passed).toBe(false);
    expect(judge("computeFieldCurvature", "tangentialShiftMm", 0, 5e-8, "c0").passed).toBe(false);
  });

  it("holds millimetre and micrometre twins to half and twice the same physical bound", () => {
    for (const position of [0, 500, 2000]) {
      const bound = Math.max(1e-7, 1e-10 * position);
      for (const [member, scale] of [
        ["astigmaticDifferenceMm", 1],
        ["astigmaticDifferenceUm", 1000],
      ] as const) {
        expect(judge("computeFieldCurvature", member, position * scale, (bound / 2) * scale).passed).toBe(true);
        expect(judge("computeFieldCurvature", member, position * scale, bound * 2 * scale).passed).toBe(false);
        expect(judge("computeFieldCurvature", member, position * scale, (bound / 2) * scale, "c0").passed).toBe(false);
      }
    }
  });
});

describe("engineDiff legacy missed-surface tail", () => {
  it("pins the finite-tail class and its record selectors", () => {
    expect(QUANTITIES.legacyMissTail).toEqual({
      title: "Legacy points after a missed surface",
      unit: "",
      kind: "finite",
      c1: 0,
      c2: null,
      origin: "addition",
    });
    for (const path of [["ghostPts", "[]", "[]"], ["y"]]) {
      expect(resolveBudgetRule("traces", ["legacy", "rays", "[]", ...path])).toMatchObject({ scale: 1 });
    }
  });
  const ray = {
    pts: [
      [0, 1],
      [1, 1],
    ],
    ghostPts: [
      [10, 20],
      [6.1e16, 3],
    ],
    clipped: true,
    y: 6.1e16,
    u: 2,
    diagnostics: {
      failureReason: "noBracket",
      hitSurfaceIndexes: [8, 4, 2],
      clipEvents: [
        { reason: "semi-diameter", surfaceIdx: 4, failureReason: null as string | null },
        { reason: "intersection-failure", surfaceIdx: 2, failureReason: "noBracket" },
      ],
    },
  };
  const records = (value: unknown): ComparableRecord[] => [
    { lens: "synthetic", state: DEFAULT_STATE, request: "traces", payload: { ok: true, value: encodeValue(value) } },
  ];
  const base = records({ legacy: { rays: [ray] } });
  const moved = (edit: (value: typeof ray) => void) => {
    const value = structuredClone(ray);
    edit(value);
    return records({ legacy: { rays: [value] } });
  };
  const judge = (head: ComparableRecord[], changeClass: ChangeClass = "c1", source = base) => {
    const run = createDifferentialRun({ changeClass, declaredExceptions: [], restricted: true });
    run.addLens({ lens: "synthetic", dataChange: "unchanged", baseEngine: source, headEngine: head });
    return run.finish();
  };

  it("compares finite ghost coordinates and clipped y after the miss without a distance budget", () => {
    const head = moved((value) => {
      value.ghostPts[1][0] *= 2;
      value.y *= 2;
    });
    expect(judge(head).passed).toBe(true);
    expect(judge(head, "c2").passed).toBe(true);
    expect(judge(head, "c0").passed).toBe(false);
  });

  it("keeps presence, counts, finiteness and the ray diagnostics gated", () => {
    for (const edit of [
      (value: typeof ray) => {
        value.ghostPts[1][0] = Infinity;
      },
      (value: typeof ray) => {
        value.ghostPts.pop();
      },
      (value: typeof ray) => {
        value.y = NaN;
      },
      (value: typeof ray) => {
        value.diagnostics.failureReason = "grazing";
      },
      (value: typeof ray) => {
        value.diagnostics.hitSurfaceIndexes[1] = 2;
      },
      (value: typeof ray) => {
        value.u += 1e-5;
      },
      (value: typeof ray) => {
        value.pts[0][1] += 1e-5;
      },
      (value: typeof ray) => {
        value.diagnostics.clipEvents[1].failureReason = "grazing";
      },
    ])
      expect(judge(moved(edit)).passed).toBe(false);
  });

  it("keeps points before the first miss at their existing budget even when a later miss qualifies", () => {
    const source = structuredClone(ray);
    source.diagnostics.clipEvents.push({ reason: "intersection-failure", surfaceIdx: 4, failureReason: "noBracket" });
    const head = structuredClone(source);
    head.ghostPts[0][1] += 2e-7;
    expect(judge(records({ legacy: { rays: [head] } }), "c1", records({ legacy: { rays: [source] } })).passed).toBe(
      false,
    );
  });

  it("exempts every ghost when a dropped point precedes a first-hit miss", () => {
    const source = structuredClone(ray);
    source.pts.pop();
    source.diagnostics.clipEvents[1].surfaceIdx = 8;
    const head = structuredClone(source);
    for (const point of head.ghostPts) point[0] *= 2;
    expect(judge(records({ legacy: { rays: [head] } }), "c1", records({ legacy: { rays: [source] } })).passed).toBe(
      true,
    );
  });

  it("keeps the lower bound when a point after the miss was dropped", () => {
    const source = structuredClone(ray);
    source.diagnostics.hitSurfaceIndexes.push(0);
    const head = structuredClone(source);
    head.ghostPts[1][0] *= 2;
    expect(judge(records({ legacy: { rays: [head] } }), "c1", records({ legacy: { rays: [source] } })).passed).toBe(
      true,
    );
    head.ghostPts[0][1] += 2e-7;
    expect(
      judge(records({ legacy: { rays: [head] } }), "c1", records({ legacy: { rays: [source] } })).engine.failures,
    ).toContainEqual(expect.objectContaining({ path: "legacy.rays[0].ghostPts[0][1]", quantity: "clippedHit" }));
  });

  it("requires the lower bound and first miss position on both sides", () => {
    for (const edit of [
      (value: typeof ray) => {
        value.pts.pop();
      },
      (value: typeof ray) => {
        value.diagnostics.clipEvents.pop();
      },
      (value: typeof ray) => {
        value.diagnostics.clipEvents[1].surfaceIdx = 9;
      },
    ]) {
      const conservative = structuredClone(ray);
      edit(conservative);
      const distant = structuredClone(conservative);
      distant.ghostPts[1][0] *= 2;
      const plain = records({ legacy: { rays: [conservative] } });
      const moved = records({ legacy: { rays: [distant] } });
      expect(judge(moved, "c1", plain).passed).toBe(false);
      expect(judge(plain, "c1", moved).passed).toBe(false);
      /* A single qualifying side must still choose the old quantity for the differing point. */
      for (const [baseRay, headRay] of [
        [ray, distant],
        [distant, ray],
      ]) {
        const summary = judge(records({ legacy: { rays: [headRay] } }), "c1", records({ legacy: { rays: [baseRay] } }));
        expect(summary.engine.failures).toContainEqual(
          expect.objectContaining({
            path: "legacy.rays[0].ghostPts[1][0]",
            quantity: "clippedHit",
          }),
        );
      }
    }
  });

  it("keeps a point before the miss on either side at its existing budget", () => {
    const head = structuredClone(ray);
    head.diagnostics.clipEvents[1].surfaceIdx = 8;
    head.ghostPts[0][1] += 2e-7;
    const changed = records({ legacy: { rays: [head] } });
    for (const [source, target] of [
      [base, changed],
      [changed, base],
    ]) {
      expect(judge(target, "c1", source).engine.failures).toContainEqual(
        expect.objectContaining({
          path: "legacy.rays[0].ghostPts[0][1]",
          quantity: "clippedHit",
        }),
      );
    }
  });

  it("requires both clipped flags and both misses for the y exemption", () => {
    for (const edit of [
      (value: typeof ray) => {
        value.clipped = false;
      },
      (value: typeof ray) => {
        value.diagnostics.clipEvents.pop();
      },
    ]) {
      const conservative = structuredClone(ray);
      edit(conservative);
      const distant = structuredClone(conservative);
      distant.y *= 2;
      for (const [baseRay, headRay] of [
        [ray, distant],
        [distant, ray],
      ]) {
        const summary = judge(records({ legacy: { rays: [headRay] } }), "c1", records({ legacy: { rays: [baseRay] } }));
        expect(summary.engine.failures).toContainEqual(
          expect.objectContaining({
            path: "legacy.rays[0].y",
            quantity: "clippedHit",
          }),
        );
      }
    }
  });
});

describe("engineDiff drift detection", () => {
  it("has the records its perturbations assume", () => {
    expect(at(SERENAR_RECORDS, "traces", [...RAY, "status"])).toBe("ok");
    expect(at(SERENAR_RECORDS, "traces", [...RAY, "hits", "columns", "clipped", HIT])).toBe(false);
    expect(numberAt("traces", HIT_POINT_Y)).not.toBe(0);
  });

  it("detects a changed status in every gated class, and lists it under C3", () => {
    const head = withChange("traces", [...RAY, "status"], () => "clipped");
    for (const changeClass of ["c0", "c1", "c2"] as const) {
      const summary = compare(changeClass, head);
      expect(summary.passed).toBe(false);
      expect(failuresOf(summary)).toEqual([
        { request: "traces", path: "onAxis.rays[1].status", kind: "discrete", quantity: null },
      ]);
    }
    const reported = compare("c3", head);
    expect(reported.passed).toBe(true);
    expect(reported.engine).toMatchObject({ failing: 0, transitions: 1 });
    expect(reported.engine.transitionSamples[0]).toMatchObject({ base: '"ok"', head: '"clipped"' });
  });

  it("detects a changed surface index", () => {
    const head = withChange("traces", [...RAY, "hits", "columns", "surfaceIndex", HIT], (index) => Number(index) + 1);
    for (const changeClass of ["c0", "c1"] as const) {
      expect(failuresOf(compare(changeClass, head))).toEqual([
        { request: "traces", path: "onAxis.rays[1].hits.columns.surfaceIndex[2]", kind: "discrete", quantity: "count" },
      ]);
    }
  });

  it.each<[RequestFamily, Path, QuantityId]>([
    ["build", ["EFL"], "firstOrder"],
    ["layout", ["z", 3], "layoutLength"],
    ["traces", [...RAY, "y"], "landing"],
    ["analysis", ["jobs", "computeBestFocusZ", "value"], "analysisLength"],
  ])("detects a unit error in %s %j", (request, path, quantity) => {
    const head = withChange(request, path, (value) => Number(value) * 1000);
    for (const changeClass of ["c0", "c1"] as const) {
      const summary = compare(changeClass, head);
      expect(summary.passed).toBe(false);
      expect(summary.engine.failures).toEqual([expect.objectContaining({ request, kind: "number", quantity })]);
    }
  });

  it("detects a changed sample order", () => {
    const reversed = (value: unknown) => [...(value as unknown[])].reverse();
    for (const [request, path] of [
      ["traces", ["onAxis", "rays"]],
      ["analysis", ["jobs", "computeDistortionCurve", "value"]],
      ["mtf", ["result", "fields"]],
    ] as [RequestFamily, Path][]) {
      const head = withChange(request, path, reversed);
      for (const changeClass of ["c0", "c1"] as const) {
        const summary = compare(changeClass, head);
        expect(summary.passed).toBe(false);
        expect(summary.engine.failing).toBeGreaterThan(1);
      }
    }
  });

  it("detects a coordinate moved by one ulp under C0, and accepts it under C1 and C2", () => {
    const head = withChange("traces", HIT_POINT_Y, (y) => Number(y) * (1 + Number.EPSILON));
    const strict = compare("c0", head);
    expect(strict.passed).toBe(false);
    expect(failuresOf(strict)).toEqual([
      { request: "traces", path: "onAxis.rays[1].hits.columns.point[2][1]", kind: "number", quantity: "landing" },
    ]);
    expect(strict.engine.failures[0].measure).toBeLessThan(1e-14);
    for (const changeClass of ["c1", "c2", "c3"] as const) {
      const summary = compare(changeClass, head);
      expect(summary.passed).toBe(true);
      expect(summary.engine).toMatchObject({ recordsDiffering: 1, numbersDiffering: 1, failing: 0 });
      expect(summary.engine.quantities.landing).toMatchObject({ differing: 1, beyondBudget: 0 });
    }
  });

  it("tells 0 from -0 under C0 only", () => {
    expect(numberAt("layout", ["z", 0])).toBe(0);
    const head = withChange("layout", ["z", 0], () => encodeValue(-0));
    expect(compare("c0", head).passed).toBe(false);
    expect(compare("c1", head).passed).toBe(true);
  });

  it.each<[RequestFamily, Path, QuantityId, number, (() => PayloadRecord[])?]>([
    ["traces", HIT_POINT_Y, "landing", 1],
    ["traces", [...RAY, "hits", "columns", "normal", HIT, 1], "directionCosine", 1],
    ["traces", [...RAY, "input", "origin", 1], "chiefLaunch", 1],
    ["traces", [...RAY, "imagePoint", 1], "landing", 1],
    ["build", ["EFL"], "firstOrder", 1],
    ["build", ["halfField"], "buildHalfField", 1],
    ["build", ["indexByIdx", "1", "indices", "G"], "refractiveIndex", 1],
    ["layout", ["z", 3], "layoutLength", 1],
    /* Zero is compared at the relative budget's floor, where a relative difference is not defined. */
    ["layout", ["z", 0], "layoutLength", 1],
    ["fieldGeometry", ["raw", "halfFieldDeg"], "rawHalfField", 1],
    ["chiefSolves", ["solves", 1, "yLaunch"], "chiefLaunch", 1],
    ["chiefSolves", ["solves", 1, "fieldAngleDeg"], "analysisHalfField", 1],
    ["analysis", ["jobs", "computeBestFocusZ", "value"], "analysisLength", 1],
    /* A micrometre twin is held to a thousand times the millimetre budget. */
    ["analysis", SA_UM, "analysisLength", 1000],
    /* Where a channel of the off-axis fan crosses the axis, the span of those crossings, and the traced exit pupil
     * of one field with its shift. On the benchmark prime each is under 100 mm; the far ones have a table below. */
    ["analysis", [...FAN_SPREAD, "axialIntercepts", "B"], "analysisLength", 1],
    ["analysis", [...FAN_SPREAD, "axialInterceptSpreadMm"], "analysisLength", 1],
    ["analysis", [...XP_SAMPLE, "xpZRelLastSurf"], "analysisLength", 1],
    ["analysis", [...XP_SAMPLE, "xpShiftMm"], "analysisLength", 1],
    /* The Petzval position of a field is no crossing of rays, and has a class of its own at the same 1e-8 mm. */
    ["analysis", [...CURVATURE_FIELD, "petzvalBestFocusZ"], "petzvalPosition", 1],
    ["analysis", [...CURVATURE_FIELD, "sagittalBestFocusZ"], "analysisLength", 1],
    ["analysis", ["jobs", "computeDistortionCurve", "value", 3, "distortionPercent"], "percentage", 1],
    ["analysis", ["jobs", "computeDistortionCurve", "value", 3, "fieldAngleDeg"], "fieldAngle", 1],
    ["analysis", ["jobs", "computeVignettingCurve", "value", 3, "relativeIllumination"], "ratio", 1],
    ["analysis", ["jobs", "effectiveFNumber", "value"], "nonLength", 1],
    ["build", ["petzvalSum"], "nonLength", 1],
    ["build", ["EP", "yRatio"], "nonLength", 1],
    ["build", ["data", "surfaces", 0, "R"], "prescription", 1],
    /* A bar of the LoCA inset is a focus shift drawn at about 201 px per mm. */
    ["analysis", LOCA_BAR, "analysisLength", LOCA_PX_PER_MM],
    ["analysis", ["jobs", "locaBarOffsets", "value", "legacy", "mag"], "ratio", 1],
    /* The radial profile of a bokeh footprint whose rays weigh differently, which the benchmark prime's do not: a
     * centre-to-rim ratio in the hundreds, and bins that are fractions of the profile's peak or of its total. */
    ["analysis", [...BOKEH_FIELD, "centerToRimRatio"], "binnedStatistic", 1, absorbingAnalysis],
    ["analysis", [...BOKEH_FIELD, "radialProfile", "bins", 0, "density"], "binnedStatistic", 1, absorbingAnalysis],
    [
      "analysis",
      [...BOKEH_FIELD, "radialProfile", "bins", 0, "energyFraction"],
      "binnedStatistic",
      1,
      absorbingAnalysis,
    ],
    ["analysis", [...BOKEH_FIELD, "radialProfile", "centerDensity"], "binnedStatistic", 1, absorbingAnalysis],
    ["analysis", [...POSED_BOKEH, "radialProfile", "rimDensity"], "binnedStatistic", 1, absorbingAnalysis],
    /* One image-plane length of a spot over another, in the centered coma analysis and the posed one. */
    ["analysis", [...COMA_FIELD, "tailSkewRatio"], "lengthRatio", 1],
    ["analysis", [...COMA_FIELD, "sagittalToTangentialRatio"], "lengthRatio", 1],
    ["analysis", [...POSED_COMA_SAMPLE, "tailSkewRatio"], "lengthRatio", 1],
    ["mtf", ["result", "fields", 1, "sagittal", 5], "mtfModulation", 1],
    ["mtf", ["result", "focus", "bestAxialShiftMm"], "mtfFocusShift", 1],
  ])("holds %s %j to the %s budget under C1: twice fails, half passes", (request, path, quantity, scale, from) => {
    /* The benchmark prime's records, or those of the lens a row names where the prime has no such field. */
    expectTwiceFailsHalfPasses(request, path, quantity, scale, from?.() ?? SERENAR_RECORDS);
  });

  /**
   * Move one number by twice what its class allows it under C1, and by half of that. The first fails as a number of
   * the class at twice its budget, the second passes, and under C0 the second fails as well.
   *
   * @param scale - how many of the field's units make one of the class's, which the field's row must state
   * @returns what the class allows the number, in the field's own unit, and whether that is the class's floor
   */
  function expectTwiceFailsHalfPasses(
    request: RequestFamily,
    path: Path,
    quantity: QuantityId,
    scale: number,
    source: readonly PayloadRecord[],
  ): { allowed: number; atFloor: boolean } {
    const value = at(source, request, path);
    if (typeof value !== "number") throw new Error(`${request} ${path.join(".")} is not a number`);
    const { kind, floor }: Quantity = QUANTITIES[quantity];
    expect(resolveBudgetRule(request, tablePath(path))?.scale).toBe(scale);
    /* An absolute budget and a floor are in the class's unit, and `scale` times as many of the field's. A relative
     * budget is a share of the value, the same share in any unit, and no less than the class's floor where it has
     * one. */
    const share = budgetOf(quantity, "c1") * Math.abs(value);
    const least = (floor?.bound ?? 0) * scale;
    const allowed = kind === "relative" ? Math.max(share, least) : budgetOf(quantity, "c1") * scale;
    const moved = (factor: number) => withChange(request, path, () => value + factor * allowed, source);

    const beyond = compare("c1", moved(2), source);
    expect(beyond.passed).toBe(false);
    expect(beyond.engine.failures).toEqual([expect.objectContaining({ request, kind: "number", quantity })]);
    const { measure, budget } = beyond.engine.failures[0];
    expect(measure! / budget!).toBeCloseTo(2, 1);
    expect(beyond.engine.quantities[quantity]).toMatchObject({ differing: 1, beyondBudget: 1 });

    const within = compare("c1", moved(0.5), source);
    expect(within.passed).toBe(true);
    expect(within.engine.quantities[quantity]).toMatchObject({ differing: 1, beyondBudget: 0 });
    expect(compare("c0", moved(0.5), source).passed).toBe(false);
    return { allowed, atFloor: kind === "relative" && least > share };
  }

  it.each<[string, Path, number, number, "floor" | "share"]>([
    /* What the member is, its path, the scale of its row, a value in its own unit, and which term is the bound. */
    ["the axial crossing of a channel, 71 mm away", [...FAN_SPREAD, "axialIntercepts", "B"], 1, -70.92, "floor"],
    [
      "the axial crossing of a channel, just short of 100 mm",
      [...FAN_SPREAD, "axialIntercepts", "B"],
      1,
      -99.9,
      "floor",
    ],
    [
      "the axial crossing of a channel, 23 m away",
      [...FAN_SPREAD, "axialIntercepts", "B"],
      1,
      -22772.388828468254,
      "share",
    ],
    [
      "the span of the channels' crossings, 39 m",
      [...FAN_SPREAD, "axialInterceptSpreadMm"],
      1,
      39051.78268254464,
      "share",
    ],
    ["a field's traced exit pupil, 21 mm away", [...XP_SAMPLE, "xpZRelLastSurf"], 1, -21.42, "floor"],
    ["a field's traced exit pupil, 44 m away", [...XP_SAMPLE, "xpZRelLastSurf"], 1, -44222.18817793754, "share"],
    ["a field's exit-pupil shift of 44 m", [...XP_SAMPLE, "xpShiftMm"], 1, -43964.31810696358, "share"],
    ["a best-focus position at 99 mm", ["jobs", "computeBestFocusZ", "value"], 1, 99, "floor"],
    ["a best-focus position at 400 mm", ["jobs", "computeBestFocusZ", "value"], 1, 400, "share"],
    ["a micrometre twin of 0.6 mm", SA_UM, 1000, -606.1, "floor"],
    ["a micrometre twin of 99 mm", SA_UM, 1000, 99e3, "floor"],
    ["a micrometre twin of 20 m", SA_UM, 1000, 2e7, "share"],
    ["a LoCA bar of a 0.07 mm shift, in px", LOCA_BAR, LOCA_PX_PER_MM, 14.76, "floor"],
    /* A bar of the inset is clamped to half the inset's width, some 0.2 mm of shift, so the engine writes no bar
     * near 100 mm. The next two rows put such a value in a bar's place to hold the rule of a row in px. */
    ["a member in px at 201 px per mm, holding 99 mm", LOCA_BAR, LOCA_PX_PER_MM, 99 * LOCA_PX_PER_MM, "floor"],
    ["a member in px at 201 px per mm, holding 500 mm", LOCA_BAR, LOCA_PX_PER_MM, 500 * LOCA_PX_PER_MM, "share"],
  ])("holds %s to the analysis-length bound under C1: twice fails, half passes", (_, path, scale, value, term) => {
    /* An analysis length is held to 1e-8 mm up to 100 mm and to 1e-10 of its own size beyond it. The length is
     * the member's value in mm, whichever unit the member is stored in. */
    const source = withChange("analysis", path, () => value);
    const { allowed, atFloor } = expectTwiceFailsHalfPasses("analysis", path, "analysisLength", scale, source);
    const lengthMm = Math.abs(value) / scale;
    expect(lengthMm > 100 ? "share" : "floor").toBe(term);
    expect(atFloor ? "floor" : "share").toBe(term);
    expect(allowed / scale / (term === "floor" ? 1e-8 : 1e-10 * lengthMm)).toBeCloseTo(1, 12);
  });

  it("holds a length restated in micrometres or px to the bound of the same length in mm", () => {
    /* One length three ways: in mm, as its micrometre twin, and in px at the 201 px per mm of the LoCA inset's
     * row. Each is moved by twice what the length is allowed in mm, and the comparison finds the three alike: at
     * twice their budget. A floor or a share taken in the field's own unit would allow the twin a thousand times
     * the length's share, and would end the floor of the row in px at half a millimetre. The engine clamps a bar
     * of the inset to some 0.2 mm of shift, so the longer lengths stand in a bar's place for the row's rule
     * alone. */
    const rows: [Path, number][] = [
      [SA_MM, 1],
      [SA_UM, 1000],
      [LOCA_BAR, LOCA_PX_PER_MM],
    ];
    for (const [path, scale] of rows) {
      expect(resolveBudgetRule("analysis", tablePath(path))).toMatchObject({ quantity: "analysisLength", scale });
    }
    for (const lengthMm of [0.6, 60, 99, 500, 20000]) {
      const allowedMm = Math.max(1e-8, 1e-10 * lengthMm);
      const shares = rows.map(([path, scale]) => {
        const set = (mm: number) => withChange("analysis", path, () => mm * scale);
        const beyond = compare("c1", set(lengthMm + 2 * allowedMm), set(lengthMm));
        expect(failuresOf(beyond)).toEqual([
          { request: "analysis", path: pathText(path), kind: "number", quantity: "analysisLength" },
        ]);
        expect(compare("c1", set(lengthMm + 0.5 * allowedMm), set(lengthMm)).passed).toBe(true);
        const { measure, budget } = beyond.engine.failures[0];
        return measure! / budget!;
      });
      for (const share of shares) expect(share).toBeCloseTo(2, 3);
    }
  });

  it("takes the larger side of a pair as its size, whichever engine holds it", () => {
    /* A relative bound is a share of the larger of the two sides. With one side at zero and the other far away
     * the distance is the whole of the larger side, so the measure is 1 in either order, in mm as in micrometres.
     * A size read from one engine alone would give the pair whose value that engine holds at zero the floor's
     * 100 mm for a size, and a measure of 1e7, or no size at all where the class has no floor. */
    const members: [Path, QuantityId, number][] = [
      [[...FAN_SPREAD, "axialIntercepts", "B"], "analysisLength", 1e9],
      [SA_UM, "analysisLength", 1e12],
      [[...COMA_FIELD, "tailSkewRatio"], "lengthRatio", 3],
    ];
    for (const [path, quantity, far] of members) {
      const set = (value: number) => withChange("analysis", path, () => value);
      for (const [base, head] of [
        [0, far],
        [far, 0],
        [-far, 0],
      ]) {
        const found = compare("c1", set(head), set(base));
        expect(failuresOf(found)).toEqual([{ request: "analysis", path: pathText(path), kind: "number", quantity }]);
        expect(found.engine.failures[0].measure).toBe(1);
      }
    }
  });

  it.each([64.1, 255.9997, 974.7])(
    "holds a Petzval focus position at %f mm to 1e-8 mm under C1: twice fails, half passes",
    (position) => {
      const path: Path = [...CURVATURE_FIELD, "petzvalBestFocusZ"];
      const source = withChange("analysis", path, () => position);
      const { allowed, atFloor } = expectTwiceFailsHalfPasses("analysis", path, "petzvalPosition", 1, source);
      expect(allowed).toBe(1e-8);
      expect(atFloor).toBe(false);
    },
  );

  it("holds a Petzval focus position of 256 mm to 1e-8 mm, where the traced focus beside it takes a share", () => {
    /* The Petzval position of a field is the image plane's z plus the sag of the Petzval sphere at the chief
     * ray's image height: a layout length and a closed form, with no crossing of rays in it. On a long lens it is
     * 256 mm from the first vertex, where an analysis length is allowed 2.56e-8 mm. A move of 2e-8 mm is inside
     * that share and twice what the position is allowed. The tangential focus of the same field is a crossing of
     * two rays, an analysis length, and the same move at the same value passes at 0.78 of its budget. */
    const [position, move] = [255.9997, 2e-8];
    expect(move).toBeLessThan(QUANTITIES.analysisLength.c1 * position);
    expect(position).toBeGreaterThan(QUANTITIES.analysisLength.floor!.bound / QUANTITIES.analysisLength.c1);
    const moved = (member: string) => {
      const path: Path = [...CURVATURE_FIELD, member];
      const set = (value: number) => withChange("analysis", path, () => value);
      return compare("c1", set(position + move), set(position));
    };

    const petzval = moved("petzvalBestFocusZ");
    expect(failuresOf(petzval)).toEqual([
      {
        request: "analysis",
        path: pathText([...CURVATURE_FIELD, "petzvalBestFocusZ"]),
        kind: "number",
        quantity: "petzvalPosition",
      },
    ]);
    const { measure, budget } = petzval.engine.failures[0];
    expect(budget).toBe(1e-8);
    expect(measure! / budget!).toBeCloseTo(2, 4);

    const traced = moved("sagittalBestFocusZ");
    expect(traced.passed).toBe(true);
    const tally = traced.engine.quantities.analysisLength!;
    expect(tally).toMatchObject({ differing: 1, beyondBudget: 0 });
    expect(tally.largest!.measure! / QUANTITIES.analysisLength.c1).toBeCloseTo(0.781, 3);
  });

  it("passes the far crossings a conic-seeded asphere solve moved, and fails each at ten times its allowance", () => {
    /* S3.P2.T2 seeds the asphere solve from the conic root and moves three quarters of asphere hits by rounding,
     * none by more than 1.2e-11 mm across Tier S. Eleven numbers of two lenses moved past their budgets all the
     * same, each a crossing of nearly parallel rays far from the lens:
     * - an off-axis ray of a 70-200 mm zoom on a 1.4x converter leaves nearly parallel to the axis in two channels
     *   and crosses it 16 m behind the lens and 23 m in front, so the span of the channels' crossings is 39 m;
     * - the chief ray of one field of a compact zoom at its long end leaves nearly parallel to the axis, and its
     *   traced exit pupil is 44 m in front of the last surface: the position, its shift from the paraxial pupil,
     *   and the profile's two largest shifts, which are that shift again. */
    const evidence: [Path, number, number][] = [
      [[...FAN_SPREAD, "axialIntercepts", "B"], -22772.388828468254, -22772.388828525724],
      [[...FAN_SPREAD, "axialIntercepts", "G"], 16279.393854076385, 16279.393854096963],
      [[...FAN_SPREAD, "axialInterceptSpreadMm"], 39051.78268254464, 39051.78268262269],
      [[...XP_SAMPLE, "xpShiftMm"], -43964.31810696358, -43964.31810645966],
      [[...PUPIL_PROFILES, "xp", "maxAbsShiftMm"], 43964.31810696358, 43964.31810645966],
      [[...PUPIL_PROFILES, "maxAbsXpShiftMm"], 43964.31810696358, 43964.31810645966],
      [[...XP_SAMPLE, "xpZRelLastSurf"], -44222.18817793754, -44222.188177433614],
    ];
    for (const [path, base, head] of evidence) {
      const set = (value: number) => withChange("analysis", path, () => value);
      const failed = [{ request: "analysis", path: pathText(path), kind: "number", quantity: "analysisLength" }];
      /* Each moved by more than the 1e-8 mm of the floor and by more than the 1e-12 of a first-order scalar, so
       * neither passes it: the share of an analysis length does, and none comes within a fifth of it. */
      const distance = Math.abs(head - base);
      const allowance = 1e-10 * Math.max(Math.abs(base), Math.abs(head));
      expect(distance).toBeGreaterThan(2e-8);
      expect(distance / Math.abs(base)).toBeGreaterThan(1.2e-12);
      expect(distance).toBeLessThan(allowance / 5);

      const found = compare("c1", set(head), set(base));
      expect(found.passed).toBe(true);
      expect(found.engine.quantities.analysisLength).toMatchObject({ differing: 1, beyondBudget: 0 });
      expect(found.engine.quantities.analysisLength!.largest!.measure! / (distance / allowance)).toBeCloseTo(1e-10, 15);
      /* Ten times its allowance fails, and under C0 the move itself does. */
      expect(failuresOf(compare("c1", set(base + 10 * allowance), set(base)))).toEqual(failed);
      expect(failuresOf(compare("c0", set(head), set(base)))).toEqual(failed);
    }
  });

  it("holds a far crossing to a share of its distance, which the same rounding breaks ten times as far out", () => {
    /* A crossing is z = −y/u. Rounding that moves the slope by δu moves the crossing by z²·δu/y, so its move grows
     * with the square of the distance and its share of the distance with the distance. The class allows a fixed
     * share, 1e-10, which is therefore a bound that holds out to some distance and no farther. S3.P2.T2 moved the
     * compact zoom's 44 m sample by 2.6e-16 mm per mm² of its distance, an ordinary sample of that profile (the
     * others moved by 1e-17 to 7e-16), and that sample passes at 0.11 of its budget. Had the same chief ray left
     * at a tenth of its slope it would cross 442 m away and move a hundred times as far, 1.14e-10 of its distance:
     * a failure on rounding alone, which this test holds as the limit of the rule. The share meets that sample's
     * rounding at 388 m. */
    const [base, head] = [-44222.18817793754, -44222.188177433614];
    const perSquare = Math.abs(head - base) / base ** 2;
    expect(perSquare).toBeGreaterThan(2.5e-16);
    expect(perSquare).toBeLessThan(2.6e-16);
    const path: Path = [...XP_SAMPLE, "xpZRelLastSurf"];
    const crossingAt = (distance: number) => {
      const set = (value: number) => withChange("analysis", path, () => value);
      return compare("c1", set(-distance + perSquare * distance ** 2), set(-distance));
    };
    const share = QUANTITIES.analysisLength.c1;

    const stored = crossingAt(-base);
    expect(stored.passed).toBe(true);
    expect(stored.engine.quantities.analysisLength!.largest!.measure! / share).toBeCloseTo(0.114, 3);

    const tenTimesAsFar = crossingAt(-10 * base);
    expect(failuresOf(tenTimesAsFar)).toEqual([
      { request: "analysis", path: pathText(path), kind: "number", quantity: "analysisLength" },
    ]);
    expect(tenTimesAsFar.engine.failures[0].measure! / share).toBeCloseTo(1.14, 2);

    const reachMm = share / perSquare;
    expect(reachMm / 1e3).toBeCloseTo(388, 0);
    expect(crossingAt(0.9 * reachMm).passed).toBe(true);
    expect(crossingAt(1.1 * reachMm).passed).toBe(false);
  });

  it("holds a field's traced exit pupil as an analysis length, and a paraxial pupil position as a first-order scalar", () => {
    /* The pupil-aberration profile traces the solved chief ray of each field through the lens and puts that
     * field's exit pupil where the ray crosses the axis: no paraxial constant, and far from the lens where the
     * field is near-telecentric. The paraxial positions beside the samples, and the build's pupil constants, come
     * from the engine's two near-axis rays and keep the first-order budget. */
    const classOf = (family: RequestFamily, path: Path) => resolveBudgetRule(family, tablePath(path))?.quantity;
    const sampleZ: Path = [...XP_SAMPLE, "xpZRelLastSurf"];
    const paraxialZ: Path = [...PUPIL_PROFILES, "xp", "paraxialXpZRelLastSurf"];
    /* What a field of each profile holds on the benchmark prime: the exit pupil's a position and its shift, the
     * entrance pupil's a launch-height ratio and a shift, and no position. */
    const membersOf = (path: Path) => Object.keys(at(SERENAR_RECORDS, "analysis", path) as object).sort();
    expect(membersOf(XP_SAMPLE)).toEqual(["fieldDeg", "fieldFrac", "xpShiftMm", "xpZRelLastSurf"]);
    expect(membersOf([...PUPIL_PROFILES, "ep", "samples", 13])).toEqual([
      "chiefRayCorrection",
      "epShiftMm",
      "fieldDeg",
      "fieldFrac",
    ]);
    expect(classOf("analysis", sampleZ)).toBe("analysisLength");
    expect(classOf("analysis", [...XP_SAMPLE, "xpShiftMm"])).toBe("analysisLength");
    expect(classOf("analysis", [...PUPIL_PROFILES, "ep", "samples", 13, "epShiftMm"])).toBe("analysisLength");
    expect(classOf("analysis", [...PUPIL_PROFILES, "ep", "samples", 13, "chiefRayCorrection"])).toBe("ratio");
    /* The row moves the position and nothing beside it. Where a field sits in the profile is a sample position,
     * exact, and its angle a fraction of the analysis half-field, in either profile: a fraction that moved by
     * 1e-10 is a discrete transition, as it was. */
    for (const sample of [XP_SAMPLE, [...PUPIL_PROFILES, "ep", "samples", 13]]) {
      expect(classOf("analysis", [...sample, "fieldFrac"])).toBe("requested");
      expect(classOf("analysis", [...sample, "fieldDeg"])).toBe("analysisHalfField");
    }
    const fraction: Path = [...XP_SAMPLE, "fieldFrac"];
    expect(numberAt("analysis", fraction)).toBe(13 / 16);
    expect(
      failuresOf(
        compare(
          "c1",
          withChange("analysis", fraction, () => 13 / 16 + 1e-10),
        ),
      ),
    ).toEqual([{ request: "analysis", path: pathText(fraction), kind: "discrete", quantity: "requested" }]);
    /* The exit-pupil profile computed alone returns the same samples with no `xp` above them and under another
     * job's name. No job captures it today. Its traced positions are analysis lengths all the same, and its
     * paraxial position a first-order scalar. */
    const alone: Path = ["jobs", "computeExitPupilAberrationProfile", "value"];
    expect(classOf("analysis", [...alone, "samples", 13, "xpZRelLastSurf"])).toBe("analysisLength");
    expect(classOf("analysis", [...alone, "samples", 13, "xpShiftMm"])).toBe("analysisLength");
    expect(classOf("analysis", [...alone, "paraxialXpZRelLastSurf"])).toBe("firstOrder");
    /* The row names the samples of the exit-pupil profile. The paraxial positions of the same record, the member
     * of the same name in any other, the posed lens's intrinsic pupils and the build's constants are not in it. */
    expect(classOf("analysis", paraxialZ)).toBe("firstOrder");
    expect(classOf("analysis", [...PUPIL_PROFILES, "ep", "paraxialEpZRelStop"])).toBe("firstOrder");
    expect(classOf("analysis", ["jobs", "x", "value", "xpZRelLastSurf"])).toBe("firstOrder");
    const intrinsic: Path = ["jobs", "computePerspectivePupilAnalysis", "value", "intrinsic"];
    expect(classOf("analysis", [...intrinsic, "exit", "zRelativeToLastSurfaceMm"])).toBe("firstOrder");
    expect(classOf("analysis", [...intrinsic, "entrance", "zRelativeToStopMm"])).toBe("firstOrder");
    for (const constant of ["xpZRelLastSurf", "epZRelStop"]) expect(classOf("build", [constant])).toBe("firstOrder");
    for (const stations of ["zoomXpZRelLastSurfs", "zoomEpZRelStops"]) {
      expect(classOf("build", [stations, 0])).toBe("firstOrder");
    }

    /* The compact zoom's move is 1.14e-11 of the position. A sample takes it, as the test above holds. On a
     * paraxial position it is eleven times the budget: the profile's, the build's exit pupil and its entrance
     * pupil. Rounding in the last bits passes there, as it did. */
    const [base, head] = [-44222.18817793754, -44222.188177433614];
    const paraxial: [RequestFamily, Path][] = [
      ["analysis", paraxialZ],
      ["build", ["xpZRelLastSurf"]],
      ["build", ["epZRelStop"]],
    ];
    for (const [request, path] of paraxial) {
      const set = (value: number) => withChange(request, path, () => value);
      const moved = compare("c1", set(head), set(base));
      expect(failuresOf(moved)).toEqual([{ request, path: pathText(path), kind: "number", quantity: "firstOrder" }]);
      expect(moved.engine.failures[0].measure! / QUANTITIES.firstOrder.c1).toBeCloseTo(11.4, 1);
      expect(compare("c1", set(base * (1 + 4 * Number.EPSILON)), set(base)).passed).toBe(true);
    }
    /* On the axis the chief ray is the axis and crosses it nowhere: that sample repeats the paraxial position,
     * which the first-order row holds beside it. */
    expect(numberAt("analysis", [...PUPIL_PROFILES, "xp", "samples", 0, "xpZRelLastSurf"])).toBe(
      numberAt("analysis", paraxialZ),
    );
  });

  it("holds a diagnostic point to 1e-7 mm near the lens and to 1e-12 of its size far from it", () => {
    /* A clipped ray that the stack tracer follows as a ghost path can leave the lens: on one catalog lens its points
     * run from 3.1e8 mm outwards, and two engines that agree to rounding differ there by more than 1e-7 mm. */
    const ghost: Path = ["legacy", "rays", 1, "ghostPts"];
    const withGhostPoint = (y: number) => withChange("traces", ghost, () => [[1, y]]);
    const run = (base: number, head: number) => compare("c1", withGhostPoint(head), withGhostPoint(base));
    const failed = (summary: RunSummary) =>
      summary.engine.failures.map(({ kind, quantity, path }) => ({ kind, quantity, path }));
    const breach = [{ kind: "number", quantity: "clippedHit", path: "legacy.rays[1].ghostPts[0][1]" }];

    /* Near the lens the bound is the plan's 1e-7 mm, whatever the point's size up to 100 m. */
    expect(failed(run(12, 12 + 5e-8))).toEqual([]);
    expect(failed(run(12, 12 + 2e-7))).toEqual(breach);
    expect(failed(run(9e4, 9e4 + 5e-8))).toEqual([]);
    expect(failed(run(9e4, 9e4 + 2e-7))).toEqual(breach);

    /* Far from it the bound is 1e-12 of the point: the catalog case passes, a gross difference does not. */
    const far = 310512819.872093;
    expect(failed(run(far, 310512819.87209314))).toEqual([]);
    expect(failed(run(far, far + 1e-4))).toEqual([]);
    expect(failed(run(far, far + 1e-3))).toEqual(breach);
    expect(failed(run(3.3473764502675636e55, 3.347376450267574e55))).toEqual([]);
    expect(failed(run(3.3473764502675636e55, 3.35e55))).toEqual(breach);

    /* Under C0 every number is exact, far or near. */
    expect(compare("c0", withGhostPoint(310512819.87209314), withGhostPoint(far)).passed).toBe(false);
  });

  it("budgets a hit as clipped when either side's flag says so, and lists the flag as a transition", () => {
    const moved = withChange("traces", HIT_POINT_Y, (y) => Number(y) + 5e-9);
    expect(failuresOf(compare("c1", moved))).toEqual([
      expect.objectContaining({ kind: "number", quantity: "landing" }),
    ]);

    /* The same move beside a clip flag that one side sets: the coordinate is inside the looser budget, and the
     * flag itself is what fails. */
    const flagged = withChange("traces", [...RAY, "hits", "columns", "clipped", HIT], () => true, moved);
    const summary = compare("c1", flagged);
    expect(failuresOf(summary)).toEqual([
      { request: "traces", path: "onAxis.rays[1].hits.columns.clipped[2]", kind: "discrete", quantity: null },
    ]);
    expect(summary.engine.quantities.clippedHit).toMatchObject({ differing: 1, beyondBudget: 0 });

    /* Clipped on both sides: no transition, and the looser budget. */
    const base = withChange("traces", [...RAY, "hits", "columns", "clipped", HIT], () => true);
    expect(compare("c1", flagged, base).passed).toBe(true);
    const far = withChange("traces", HIT_POINT_Y, (y) => Number(y) + 2e-7, base);
    expect(failuresOf(compare("c1", far, base))).toEqual([
      expect.objectContaining({ kind: "number", quantity: "clippedHit" }),
    ]);
  });

  it("budgets a ray's terminal values by its status", () => {
    const clippedRay = withChange("traces", [...RAY, "status"], () => "clipped");
    const moved = withChange("traces", [...RAY, "terminalPoint", 1], (y) => Number(y) + 5e-9, clippedRay);
    expect(compare("c1", moved, clippedRay).passed).toBe(true);
    expect(
      compare(
        "c1",
        withChange("traces", [...RAY, "terminalPoint", 1], (y) => Number(y) + 5e-9),
      ).passed,
    ).toBe(false);
  });

  it("compares NaN and the infinities exactly in every class", () => {
    const nan = withChange("traces", [...RAY, "y"], () => encodeValue(Number.NaN));
    for (const changeClass of ["c0", "c1", "c2"] as const) {
      expect(failuresOf(compare(changeClass, nan))).toEqual([
        { request: "traces", path: "onAxis.rays[1].y", kind: "nonFinite", quantity: "landing" },
      ]);
    }
    expect(compare("c1", structuredClone(nan), nan).passed).toBe(true);
    const infinite = withChange("build", ["xpSD"], () => encodeValue(Number.POSITIVE_INFINITY));
    expect(compare("c1", infinite).passed).toBe(false);
    expect(
      compare(
        "c1",
        withChange("build", ["xpSD"], () => encodeValue(Number.NEGATIVE_INFINITY)),
        infinite,
      ).passed,
    ).toBe(false);
  });

  it("checks a residual against its effective tolerance instead of differencing it", () => {
    const residual: Path = [...RAY, "hits", "columns", "residual", HIT];
    const tolerance: Path = [...RAY, "hits", "columns", "effectiveTolerance", HIT];
    expect(numberAt("traces", tolerance)).toBe(1e-12);
    const base = withChange("traces", residual, () => -9e-13);

    /* From one edge of the tolerance to the other: 1.8e-12 apart, and each side inside its own contract. */
    const within = withChange("traces", residual, () => 9e-13);
    expect(compare("c1", within, base).passed).toBe(true);
    expect(compare("c0", within, base).passed).toBe(false);

    const outside = withChange("traces", residual, () => 2e-12);
    expect(failuresOf(compare("c1", outside, base))).toEqual([
      expect.objectContaining({ kind: "contract", quantity: "intersectionResidual" }),
    ]);
    /* A relaxed tolerance is the contract of the hit that carries it: the residual is inside it, and the tolerance
     * itself is what fails. The base's is the raw target, so the hit left it for another tolerance. */
    const relaxed = withChange("traces", tolerance, () => 4e-12, outside);
    expect(failuresOf(compare("c1", relaxed, base))).toEqual([
      expect.objectContaining({ kind: "discrete", quantity: "toleranceBranch" }),
    ]);
  });

  it("holds an effective tolerance to 1e-12 relative above C0, and bit for bit under it", () => {
    /* At a stalled root the tolerance is a computed float, a roundoff envelope over the ray's operands, and
     * reordered arithmetic moves its last bits. */
    const tolerance: Path = [...RAY, "hits", "columns", "effectiveTolerance", HIT];
    const at2 = { request: "traces", path: "onAxis.rays[1].hits.columns.effectiveTolerance[2]" };
    const envelope = 3.7e-12;
    const held = (value: number) => withChange("traces", tolerance, () => value);

    const lastBits = held(envelope * (1 + 4 * Number.EPSILON));
    expect(failuresOf(compare("c0", lastBits, held(envelope)))).toEqual([
      { ...at2, kind: "number", quantity: "effectiveTolerance" },
    ]);
    for (const changeClass of ["c1", "c2"] as const) {
      const summary = compare(changeClass, lastBits, held(envelope));
      expect(summary.passed, changeClass).toBe(true);
      expect(summary.engine.quantities.effectiveTolerance, changeClass).toMatchObject({
        differing: 1,
        beyondBudget: 0,
      });
      expect(summary.engine.transitions, changeClass).toBe(0);

      /* Twice the budget fails and half of it passes, as for every budgeted class. */
      const twice = compare(changeClass, held(envelope * (1 + 2e-12)), held(envelope));
      expect(failuresOf(twice), changeClass).toEqual([{ ...at2, kind: "number", quantity: "effectiveTolerance" }]);
      expect(twice.engine.failures[0].measure! / twice.engine.failures[0].budget!).toBeCloseTo(2, 1);
      expect(compare(changeClass, held(envelope * (1 + 0.5e-12)), held(envelope)).passed, changeClass).toBe(true);

      /* 1e-10 relative is a hundred times the budget, and there is no absolute floor to hide it under. */
      const drifted = compare(changeClass, held(envelope * (1 + 1e-10)), held(envelope));
      expect(failuresOf(drifted), changeClass).toEqual([{ ...at2, kind: "number", quantity: "effectiveTolerance" }]);
      expect(drifted.engine.failures[0].measure! / drifted.engine.failures[0].budget!).toBeCloseTo(100, 0);

      /* A doubled tolerance fails: as a number far over its budget from an envelope, and from the engine's raw
       * target as a hit that left it. */
      expect(failuresOf(compare(changeClass, held(2 * envelope), held(envelope))), changeClass).toEqual([
        { ...at2, kind: "number", quantity: "effectiveTolerance" },
      ]);
      expect(failuresOf(compare(changeClass, held(2e-12))), changeClass).toEqual([
        { ...at2, kind: "discrete", quantity: "toleranceBranch" },
      ]);
    }
    expect(compare("c3", held(2 * envelope), held(envelope)).passed).toBe(true);
  });

  it("lists a hit that left the raw target for a stall envelope as a transition, not as a number over budget", () => {
    /* The field is two-valued by branch of the root finder: exactly the raw target where the residual met it, and
     * a computed envelope above it where the iteration stalled first. A reordered solve can stall where the base
     * converged, with both residuals inside their own tolerance. That is a boundary transition, which a C1 change
     * may list, so it must be among the discrete transitions. As a number it would stand 0.44 relative against a
     * budget of 1e-12, with nowhere to be listed. */
    expect(RAW_INTERSECTION_TOLERANCE_MM).toBe(INTERSECTION_TOLERANCE);
    const residual: Path = [...RAY, "hits", "columns", "residual", HIT];
    const tolerance: Path = [...RAY, "hits", "columns", "effectiveTolerance", HIT];
    const at2 = { request: "traces", path: "onAxis.rays[1].hits.columns.effectiveTolerance[2]" };
    expect(numberAt("traces", tolerance)).toBe(RAW_INTERSECTION_TOLERANCE_MM);
    /* The envelope of a hit whose operands sum to 500 mm: 16 ε times that. */
    const envelope = 16 * Number.EPSILON * 500;
    const converged = withChange("traces", residual, () => 0.9e-12);
    const stalled = withChange(
      "traces",
      tolerance,
      () => envelope,
      withChange("traces", residual, () => 1.1e-12),
    );
    for (const changeClass of ["c1", "c2"] as const) {
      for (const [head, base] of [
        [stalled, converged],
        [converged, stalled],
      ]) {
        const summary = compare(changeClass, head, base);
        expect(failuresOf(summary), changeClass).toEqual([{ ...at2, kind: "discrete", quantity: "toleranceBranch" }]);
        expect(summary.engine.transitions, changeClass).toBe(1);
        expect(summary.engine.transitionSamples.map(({ path }) => path)).toEqual([at2.path]);
        /* The residual beside it moved from one contract to the other and is inside each. */
        expect(summary.engine.quantities.intersectionResidual).toMatchObject({ differing: 1, beyondBudget: 0 });
        expect(summary.engine.quantities.effectiveTolerance).toBeUndefined();
      }
    }
    expect(compare("c3", stalled, converged)).toMatchObject({ passed: true, engine: { transitions: 1 } });
    expect(failuresOf(compare("c0", stalled, converged))).toContainEqual({
      ...at2,
      kind: "discrete",
      quantity: "toleranceBranch",
    });
    /* Between two envelopes there is no branch to switch, and the field is a number with a budget. */
    const grown = withChange("traces", tolerance, () => 2 * envelope, stalled);
    expect(failuresOf(compare("c1", grown, stalled))).toEqual([
      { ...at2, kind: "number", quantity: "effectiveTolerance" },
    ]);
  });

  it("checks a solve's residual against the solve's own tolerance instead of differencing it", () => {
    /* A field sample of a perspective job: the posed chief-ray solve, and the sensor lock around it. */
    const sample: Path = ["jobs", "computePerspectiveFocusAnalysis", "value", "samples", 0, "fieldSample"];
    const at0 = "jobs.computePerspectiveFocusAnalysis.value.samples[0].fieldSample";
    const root: Path = [...sample, "chiefSolve", "rootSolve"];
    const lock: Path = [...sample, "sensorSolve"];
    expect(at(SERENAR_RECORDS, "analysis", [...root, "status"])).toBe("converged");
    expect(at(SERENAR_RECORDS, "analysis", [...lock, "status"])).toBe("converged");
    expect(at(SERENAR_RECORDS, "analysis", [...lock, "scalarRoot", "status"])).toBe("converged");
    const set = (path: Path, value: unknown, source: readonly PayloadRecord[] = SERENAR_RECORDS) =>
      withChange("analysis", path, () => value, source);

    /* The posed chief-ray solve accepts a residual within 1e-7 mm, the sensor lock one within 1e-5 mm. From one
     * edge of a tolerance to the other each side is inside its contract, and the two are not differenced. */
    for (const [path, edge, quantity] of [
      [[...root, "residual"], 9e-8, "chiefStopResidual"],
      [[...lock, "scalarRoot", "residual"], 9e-6, "sensorLockResidual"],
      [[...lock, "residualMm", "v"], 9e-6, "sensorLockResidual"],
    ] as [Path, number, QuantityId][]) {
      const base = set(path, -edge);
      const within = compare("c1", set(path, edge), base);
      expect(within.passed, path.join(".")).toBe(true);
      expect(within.engine.quantities[quantity], path.join(".")).toMatchObject({ differing: 1, beyondBudget: 0 });
      expect(compare("c0", set(path, edge), base).passed).toBe(false);
      /* Outside it the residual breaks the solve's contract, however near the other side's it is. */
      const outside = compare("c1", set(path, 2.2 * (edge / 0.9)), set(path, 2.1 * (edge / 0.9)));
      expect(outside.engine.failures, path.join(".")).toEqual([
        expect.objectContaining({ kind: "contract", quantity, budget: 1 }),
      ]);
      expect(outside.engine.failures[0].measure).toBeCloseTo(2.2, 6);
    }

    /* The stop residual is the same miss measured in the stop plane, larger by one over the cosine of the field
     * angle. No tolerance of the engine's names it, so it is held to a bound of its own, 1e-6 mm, and a report
     * gives its share of that bound. */
    const stop: Path = [...sample, "chiefSolve", "stopResidualMm"];
    const farther = set(stop, 2.5e-7);
    expect(compare("c1", farther).passed).toBe(true);
    expect(compare("c1", farther).engine.quantities.chiefStopPlaneResidual).toMatchObject({
      differing: 1,
      beyondBudget: 0,
      largest: { measure: expect.closeTo(0.25, 9), budget: 1 },
    });
    expect(compare("c0", farther).passed).toBe(false);
    /* A converged solve whose stop residual is 1000 times larger on one side. The residual the solve accepted is
     * the same on both sides and within its tolerance, and the field still breaks its own bound. */
    const thousandfold = compare("c1", set(stop, 8.9e-5), set(stop, 8.9e-8));
    expect(thousandfold.passed).toBe(false);
    expect(thousandfold.engine.failures).toEqual([
      expect.objectContaining({
        path: `${at0}.chiefSolve.stopResidualMm`,
        kind: "contract",
        quantity: "chiefStopPlaneResidual",
        measure: expect.closeTo(89, 9),
        budget: 1,
      }),
    ]);
    expect(renderSummaryMarkdown(thousandfold, REPORT_CONTEXT)).toContain(
      "| Posed chief-ray stop residual, in the stop plane | addition | 1 of its bound in the stop plane | 1 | 1 | 89 |",
    );
    expect(compare("c2", set(stop, 8.9e-5), set(stop, 8.9e-8)).passed).toBe(false);
    expect(compare("c1", set(stop, -1.1e-6)).passed).toBe(false);
    expect(compare("c1", set(stop, -9e-7), set(stop, 9e-7)).passed).toBe(true);
    /* It answers through the residual its solve accepted as well, and still reports its own share. */
    const unaccepted = set([...root, "residual"], 3e-7, farther);
    expect(failuresOf(compare("c1", unaccepted)).map(({ path, kind }) => [path, kind])).toEqual([
      [`${at0}.chiefSolve.rootSolve.residual`, "contract"],
      [`${at0}.chiefSolve.stopResidualMm`, "contract"],
    ]);
    expect(compare("c1", unaccepted).engine.failures.map(({ measure }) => measure)).toEqual([
      expect.closeTo(3, 9),
      expect.closeTo(0.25, 9),
    ]);
    /* A solve that did not converge accepted nothing, and its stop residual is a diagnostic beside it. */
    const unbracketed = (value: number) => set([...root, "status"], "unbracketed", set(stop, value));
    expect(compare("c1", unbracketed(5 + 5e-8), unbracketed(5)).passed).toBe(true);
    expect(failuresOf(compare("c1", unbracketed(5 + 5e-7), unbracketed(5)))).toEqual([
      { request: "analysis", path: `${at0}.chiefSolve.stopResidualMm`, kind: "number", quantity: "clippedHit" },
    ]);

    /* A solve that did not converge accepted nothing. Its residual is the miss of its nearest sample, a diagnostic
     * like the coordinates of a clipped ray, and is held to that row. */
    const failed = (records: readonly PayloadRecord[]) => set([...root, "status"], "unbracketed", records);
    const missed = failed(set([...root, "residual"], 2));
    expect(compare("c1", failed(set([...root, "residual"], 2 + 5e-8)), missed).passed).toBe(true);
    expect(failuresOf(compare("c1", failed(set([...root, "residual"], 2 + 5e-7)), missed))).toEqual([
      { request: "analysis", path: `${at0}.chiefSolve.rootSolve.residual`, kind: "number", quantity: "clippedHit" },
    ]);
    /* The sensor lock's two components go by the lock's status, one level up, and not by the scalar root's. */
    const unlocked = (records: readonly PayloadRecord[]) => set([...lock, "status"], "iteration-limit", records);
    const drifting = unlocked(set([...lock, "residualMm", "v"], 3));
    expect(compare("c1", unlocked(set([...lock, "residualMm", "v"], 3 + 5e-8)), drifting).passed).toBe(true);
    expect(failuresOf(compare("c1", unlocked(set([...lock, "residualMm", "v"], 3 + 5e-7)), drifting))).toEqual([
      { request: "analysis", path: `${at0}.sensorSolve.residualMm.v`, kind: "number", quantity: "clippedHit" },
    ]);
  });

  it("holds a scalar that is no length to its plain relative budget, however small it is", () => {
    /* The Petzval sum is a few thousandths of 1/mm. Counted as at least 1, it would have ten thousand times its
     * budget; scaled by 1 + 1e-10 it is a hundred times past 1e-12 relative. */
    const petzval = numberAt("build", ["petzvalSum"]);
    expect(Math.abs(petzval)).toBeGreaterThan(0);
    expect(Math.abs(petzval)).toBeLessThan(0.1);
    const scaled = (factor: number) => withChange("build", ["petzvalSum"], () => petzval * factor);
    const beyond = compare("c1", scaled(1 + 1e-10));
    expect(beyond.passed).toBe(false);
    expect(beyond.engine.failures).toEqual([
      expect.objectContaining({ request: "build", path: "petzvalSum", kind: "number", quantity: "nonLength" }),
    ]);
    expect(beyond.engine.failures[0].measure! / 1e-12).toBeCloseTo(100, 0);
    expect(compare("c1", scaled(1 + 4 * Number.EPSILON)).passed).toBe(true);
    /* Without a floor only zero agrees with zero: a folded system's Petzval sum is exactly 0. */
    const zeroed = withChange("build", ["petzvalSum"], () => 0);
    expect(
      compare(
        "c1",
        withChange("build", ["petzvalSum"], () => 1e-300),
        zeroed,
      ).passed,
    ).toBe(false);
    expect(
      compare(
        "c1",
        withChange("build", ["petzvalSum"], () => encodeValue(-0)),
        zeroed,
      ).passed,
    ).toBe(true);

    /* Nor has a prescription the engine hands back a floor: an asphere coefficient is held to its own share. */
    const coefficient = (value: number) => withChange("build", ["data", "asph"], () => ({ "1": { A10: value } }));
    expect(compare("c1", coefficient(3e-19 * (1 + 1e-10)), coefficient(3e-19)).engine.failures).toEqual([
      expect.objectContaining({ path: "data.asph.1.A10", kind: "number", quantity: "prescription" }),
    ]);
    expect(compare("c1", coefficient(3e-19 * (1 + 4 * Number.EPSILON)), coefficient(3e-19)).passed).toBe(true);

    /* A length keeps its floor of 1e-12 mm: at zero, and below 1 mm, that is the bound. */
    const pupil = (z: number) => withChange("build", ["epZRelStop"], () => z);
    expect(compare("c1", pupil(5e-13), pupil(0)).passed).toBe(true);
    expect(compare("c1", pupil(2e-12), pupil(0)).passed).toBe(false);
    expect(compare("c1", pupil(0.5 + 5e-13), pupil(0.5)).passed).toBe(true);
    expect(compare("c1", pupil(0.5 * (1 + 1e-10)), pupil(0.5)).passed).toBe(false);
  });

  it("accepts the rounding in the weighted bins of an absorbing lens, and holds the counts beside them exact", () => {
    /* A bokeh footprint weighs each ray by its transmission. Through this lens's absorbing element that is
     * exp(−α · path), so a bin of the footprint's radial profile is a sum of such weights and no count, and its
     * last bits move when a hit moves inside its tolerance. A run of closed-form roots against the iterative ones
     * moved these bins by 1.6e-13 of themselves at most, and every count beside them not at all. */
    const records = absorbingAnalysis();
    expect(distinctWeights(records, BOKEH_FIELD)).toBeGreaterThan(1);

    const ratio: Path = [...BOKEH_FIELD, "centerToRimRatio"];
    const density: Path = [...BOKEH_FIELD, "radialProfile", "bins", 0, "density"];
    const set = (path: Path, value: number, source: readonly PayloadRecord[] = records) =>
      withChange("analysis", path, () => value, source);
    const failed = (path: Path, kind: Finding["kind"], quantity: QuantityId) => ({
      request: "analysis",
      path: pathText(path),
      kind,
      quantity,
    });
    const bothBinned = [ratio, density].map((path) => failed(path, "number", "binnedStatistic"));

    /* One field's centre-to-rim ratio and the density of its first bin as that run's base engine returned them,
     * then as its head engine did, and then both moved by one factor. */
    const scaled = (factor: number) =>
      set(density, 0.6779483983704641 * factor, set(ratio, 323.8170972473501 * factor));
    const base = scaled(1);
    const found = set(density, 0.677948398370464, set(ratio, 323.81709724735));
    for (const head of [found, scaled(1 + 2e-13)]) {
      const summary = compare("c1", head, base);
      expect(summary.passed).toBe(true);
      expect(summary.engine.quantities.binnedStatistic).toMatchObject({ differing: 2, beyondBudget: 0 });
      /* Under C0 every number is exact. */
      expect(failuresOf(compare("c0", head, base))).toEqual(bothBinned);
    }
    expect(failuresOf(compare("c1", scaled(1 + 1e-9), base))).toEqual(bothBinned);

    /* The bound is a share of the bin itself, however little of the light the bin holds. A sum of weights that are
     * never negative loses nothing to cancellation, so a faint bin moves by no more of itself than a full one. The
     * faintest bin of that run's record, at 1.7e-4 of its profile's peak, takes 2e-13 of itself and not 1e-9, which
     * is 1.7e-13 of the peak. */
    const bin = (value: number) => set(density, value);
    const binFailed = [failed(density, "number", "binnedStatistic")];
    const faint = 0.00017037667862741682;
    expect(compare("c1", bin(faint * (1 + 2e-13)), bin(faint)).passed).toBe(true);
    expect(failuresOf(compare("c1", bin(faint * (1 + 1e-9)), bin(faint)))).toEqual(binFailed);
    /* A bin no ray falls in is exactly zero, on both sides. The class has no floor, so only zero agrees with zero:
     * a bin that is empty on one side alone has gained a ray, whatever that ray weighs. */
    for (const gained of [5e-11, 1e-300]) {
      expect(failuresOf(compare("c1", bin(gained), bin(0)))).toEqual(binFailed);
    }

    /* The counts of the same footprint move by whole rays or not at all: the rays that passed, and their share of
     * the rays launched. Neither takes the move the bins were allowed. */
    const passed: Path = [...BOKEH_FIELD, "passedRays"];
    const share: Path = [...BOKEH_FIELD, "transmission"];
    const counted = (rays: number, surviving: number) => set(passed, rays, set(share, surviving));
    expect(failuresOf(compare("c1", counted(336, 0.5), counted(337, 0.5)))).toEqual([
      failed(passed, "discrete", "count"),
    ]);
    expect(failuresOf(compare("c1", counted(337, 0.5 * (1 + 2e-13)), counted(337, 0.5)))).toEqual([
      failed(share, "discrete", "countRatio"),
    ]);
  });

  it("keeps the bins of the spherical blur character exact, which the engine fills with rays of one weight", () => {
    /* The same five statistics of the same kind of radial profile are budgeted by what the engine sums into the
     * bins. A bokeh footprint weighs a ray by its transmission, in the centered analysis and in the posed one. The
     * blur character of spherical aberration bins its rays at the pupil sampler's weight, one number for every ray,
     * so its statistics are functions of counts on an absorbing lens too. Its record holds no points beside the
     * profile to say so, as a footprint's does, so the table names the job. */
    const classOf = (path: Path) => resolveBudgetRule("analysis", tablePath(path))?.quantity;
    expect(profileStatistics(BLUR_CHARACTER).map(classOf)).toEqual(Array(5).fill("countRatio"));

    /* That is a fact about the engine, so it is held here. With the absorption taken out of the prescription the
     * rays of the bokeh footprint weigh the same again, and the blur character does not change by a bit. */
    const cleared: SerializedCatalog = {
      ...CATALOG,
      lenses: CATALOG.lenses.map((entry) => {
        if (entry.key !== ABSORBING) return entry;
        const data = decodeValue(entry.prescription) as LensDataInput;
        const elements = data.elements.map(({ absorptionCoefficientPerMm: _absorption, ...element }) => element);
        return { ...entry, prescription: encodeValue({ ...data, elements }) };
      }),
    };
    const [absorbing, clear] = [absorbingAnalysis(), absorbingAnalysisOf(cleared)];
    expect(distinctWeights(absorbing, BOKEH_FIELD)).toBeGreaterThan(1);
    expect(distinctWeights(clear, BOKEH_FIELD)).toBe(1);
    const blurCharacter = at(absorbing, "analysis", BLUR_CHARACTER.slice(0, -1)) as Record<string, object>;
    expect(Object.keys(blurCharacter)).toEqual(expect.arrayContaining(["frontDefocus", "rearDefocus"]));
    expect(Object.keys(blurCharacter.frontDefocus)).not.toContain("points");
    expect(at(clear, "analysis", BLUR_CHARACTER.slice(0, -1))).toEqual(blurCharacter);

    /* So one of its statistics that moved at all has had a ray change bin, by however little it moved: the move
     * that the weighted bins are allowed is a discrete difference here. */
    const [density, , , , ratio] = profileStatistics(BLUR_CHARACTER);
    const scaled = (factor: number) =>
      withChange(
        "analysis",
        density,
        () => 0.25 * factor,
        withChange("analysis", ratio, () => 4 * factor, absorbing),
      );
    expect(failuresOf(compare("c1", scaled(1 + 2e-13), scaled(1)))).toEqual(
      [ratio, density].map((path) => ({
        request: "analysis",
        path: pathText(path),
        kind: "discrete",
        quantity: "countRatio",
      })),
    );
  });

  it("keeps the bins of a footprint exact where its rays weigh the same, and reads that from its points", () => {
    /* A footprint's record holds its points beside its profile, each with the weight the engine summed into a bin.
     * Where no element absorbs, every point has one weight and each statistic of the profile is a function of the
     * counts in the bins. Rounding cannot move it, so a difference, however small, is a ray that changed bin: a
     * discrete transition, which a pull request may declare, and no number beyond a budget, which none may. */
    const weighted = absorbingAnalysis();
    const finding = (path: Path, kind: Finding["kind"], quantity: QuantityId | null) => ({
      request: "analysis",
      path: pathText(path),
      kind,
      quantity,
    });
    for (const footprint of [BOKEH_FIELD, POSED_BOKEH]) {
      expect(distinctWeights(SERENAR_RECORDS, footprint)).toBe(1);
      expect(distinctWeights(weighted, footprint)).toBeGreaterThan(1);
      for (const path of profileStatistics(footprint)) {
        const scaled = (source: readonly PayloadRecord[]) =>
          withChange("analysis", path, (value) => Number(value) * (1 + 2e-13), source);
        /* The move a weighted bin is allowed is a discrete difference between two sides of one weight each. */
        expect(failuresOf(compare("c1", scaled(SERENAR_RECORDS)))).toEqual([finding(path, "discrete", "countRatio")]);
        const rounding = compare("c1", scaled(weighted), weighted);
        expect(rounding.passed).toBe(true);
        expect(rounding.engine.quantities.binnedStatistic).toMatchObject({ differing: 1, beyondBudget: 0 });
      }
    }

    const ratio: Path = [...BOKEH_FIELD, "centerToRimRatio"];
    const points: Path = [...BOKEH_FIELD, "points"];
    const moved = (factor: number, source: readonly PayloadRecord[] = SERENAR_RECORDS) =>
      withChange("analysis", ratio, (value) => Number(value) * factor, source);
    const beyond = [finding(ratio, "number", "binnedStatistic")];

    /* Both sides have to say so. A side whose points do not all weigh the same holds sums of weights, and the pair
     * is held to the budget: here one point weighs half of what the others do, in the head's footprint and then in
     * the base's. */
    const weight: Path = [...points, 0, "weight"];
    const halved = (source: readonly PayloadRecord[]) =>
      withChange("analysis", weight, (value) => Number(value) / 2, source);
    const halvedWeight = finding(weight, "number", "ratio");
    expect(failuresOf(compare("c1", halved(moved(1 + 2e-13))))).toEqual([halvedWeight]);
    expect(failuresOf(compare("c1", halved(moved(1 + 1e-9))))).toEqual([...beyond, halvedWeight]);
    expect(failuresOf(compare("c1", moved(1 + 2e-13), halved(SERENAR_RECORDS)))).toEqual([halvedWeight]);
    expect(failuresOf(compare("c1", moved(1 + 1e-9), halved(SERENAR_RECORDS)))).toEqual([...beyond, halvedWeight]);

    /* Nor do two sides of one weight each hold counts alone where the two weights are not the same: each side's
     * sums then round in their own way. */
    const reweighed = withChange(
      "analysis",
      points,
      (list) => (list as { weight: number }[]).map((point) => ({ ...point, weight: point.weight * (1 + 1e-12) })),
      moved(1 + 2e-13),
    );
    expect(distinctWeights(reweighed, BOKEH_FIELD)).toBe(1);
    const rounded = compare("c1", reweighed);
    expect(rounded.passed).toBe(true);
    expect(rounded.engine.quantities.binnedStatistic).toMatchObject({ differing: 1, beyondBudget: 0 });

    /* A footprint that lost every ray on one side has no weight to differ. Its profile is the empty one, and its
     * difference from a profile of counts is discrete. */
    const emptied = withChange("analysis", points, () => [], moved(1 + 2e-13));
    expect(failuresOf(compare("c1", emptied))).toEqual([
      finding(ratio, "discrete", "countRatio"),
      finding(points, "shape", null),
    ]);

    /* A profile with no points beside it does not say what its rays weigh, and is held as a weighted one: on both
     * sides, or on one. Nor do points that carry no weight say it. */
    const bare = (source: readonly PayloadRecord[]) =>
      withChange(
        "analysis",
        BOKEH_FIELD,
        (field) => {
          const { points: _points, ...rest } = field as Record<string, unknown>;
          return rest;
        },
        source,
      );
    expect(compare("c1", bare(moved(1 + 2e-13)), bare(SERENAR_RECORDS)).passed).toBe(true);
    expect(failuresOf(compare("c1", bare(moved(1 + 1e-9)), bare(SERENAR_RECORDS)))).toEqual(beyond);
    expect(failuresOf(compare("c1", bare(moved(1 + 1e-9))))).toEqual([...beyond, finding(points, "shape", null)]);
    const unweighed = (source: readonly PayloadRecord[]) =>
      withChange(
        "analysis",
        points,
        (list) => (list as Record<string, unknown>[]).map(({ weight: _weight, ...point }) => point),
        source,
      );
    expect(failuresOf(compare("c1", unweighed(moved(1 + 1e-9)), unweighed(SERENAR_RECORDS)))).toEqual(beyond);
  });

  it("holds one spot extent over another to 1e-8 of the ratio, where the budget of a fraction cannot", () => {
    /* The skew of a coma tail is the longer extent of a spot from its centroid over the shorter. A spot is some
     * thousandths of a millimetre across, so rounding that moves an extent by 1e-13 mm, five orders inside the
     * budget of an analysis length, moves the ratio by 1e-10 of itself. */
    const skew: Path = [...POSED_COMA_SAMPLE, "tailSkewRatio"];
    const spans: Path = [...COMA_FIELD, "sagittalToTangentialRatio"];
    const set = (path: Path, value: number) => withChange("analysis", path, () => value);
    const failed = (path: Path, quantity: QuantityId) => [
      { request: "analysis", path: pathText(path), kind: "number", quantity },
    ];

    /* The pair furthest apart in a run of closed-form roots against the iterative ones: 2.95e-10 of the ratio. */
    const [base, head] = [set(skew, 1.092679840905723), set(skew, 1.0926798412280463)];
    const found = compare("c1", head, base);
    expect(found.passed).toBe(true);
    expect(found.engine.quantities.lengthRatio).toMatchObject({ differing: 1, beyondBudget: 0 });
    expect(found.engine.quantities.lengthRatio!.largest!.measure! / 1e-10).toBeCloseTo(2.95, 2);
    /* Under C0 every number is exact. */
    expect(failuresOf(compare("c0", head, base))).toEqual(failed(skew, "lengthRatio"));

    /* 3e-10 of the ratio passes and 1e-7 fails: for the skew of the posed analysis, and for both ratios of the
     * centered one. */
    for (const path of [skew, [...COMA_FIELD, "tailSkewRatio"], spans]) {
      const scaled = (factor: number) => set(path, 1.6 * factor);
      expect(compare("c1", scaled(1 + 3e-10), scaled(1)).passed).toBe(true);
      const beyond = compare("c1", scaled(1 + 1e-7), scaled(1));
      expect(failuresOf(beyond)).toEqual(failed(path, "lengthRatio"));
      expect(beyond.engine.failures[0].measure! / 1e-8).toBeCloseTo(10, 3);
    }
    /* The class has no floor. A footprint with no rays reports a span ratio of exactly 0, and only zero agrees
     * with zero. */
    expect(failuresOf(compare("c1", set(spans, 1e-300), set(spans, 0)))).toEqual(failed(spans, "lengthRatio"));

    /* What is measured in fractions of the pupil stays a fraction, where 3e-10 is past the budget: the aspect of
     * a pupil footprint and the offset of its centroid. */
    for (const member of ["catEyeAspect", "shiftRadius"]) {
      const path: Path = [...BOKEH_FIELD, "pupilFootprint", member];
      expect(failuresOf(compare("c1", set(path, 0.9 * (1 + 3e-10)), set(path, 0.9)))).toEqual(failed(path, "ratio"));
    }
    /* The correction of a chief ray's launch height stays a smooth ratio as well. It is one length over another,
     * the solved launch height over the paraxial one, but neither is an analysis length, and the plan's row does
     * not name it. The row is tighter than its parts all the same: at the innermost sampled field the paraxial
     * height is a fraction of a millimetre, and the 1e-9 mm of a launch height is more than 1e-10 of that. */
    const correction: Path = ["jobs", "computeBothPupilAberrationProfiles", "value", "ep", "samples", 1];
    expect(numberAt("analysis", [...correction, "chiefRayCorrection"])).toBeGreaterThan(0);
    expect(resolveBudgetRule("analysis", tablePath([...correction, "chiefRayCorrection"]))?.quantity).toBe("ratio");
    const paraxialHeightMm =
      numberAt("analysis", ["inputs", "fieldGeometry", "epRatio"]) *
      Math.tan((numberAt("analysis", [...correction, "fieldDeg"]) * Math.PI) / 180);
    expect(paraxialHeightMm).toBeGreaterThan(0.1);
    expect(paraxialHeightMm).toBeLessThan(1);
    expect(QUANTITIES.chiefLaunch.c1 / paraxialHeightMm).toBeGreaterThan(QUANTITIES.ratio.c1);
  });

  it("reports a failing solver output in quanta of its solver", () => {
    /* The raw half-field is the output of a 20-step bisection. One step of it is a boundary transition, and far
     * past the budget; the report says what the field is and how many steps the difference comes to. */
    const quantum = 90 / 2 ** 20;
    const path: Path = ["raw", "halfFieldDeg"];
    const stepped = compare(
      "c1",
      withChange("fieldGeometry", path, (value) => Number(value) + quantum),
    );
    expect(failuresOf(stepped)).toEqual([
      { request: "fieldGeometry", path: "raw.halfFieldDeg", kind: "number", quantity: "rawHalfField" },
    ]);
    const markdown = renderSummaryMarkdown(stepped, REPORT_CONTEXT);
    expect(markdown).toContain("### Solver outputs among the failing differences");
    expect(markdown).toContain(
      `| ${SERENAR} | fieldGeometry | \`raw.halfFieldDeg\` | the 20-step bisection of a state's half-field | ` +
        "0.00008583 deg | 1 |",
    );
    /* Drift of the same field, past the budget and a small part of a step. */
    const drifted = compare(
      "c1",
      withChange("fieldGeometry", path, (value) => Number(value) + 1e-7),
    );
    expect(drifted.passed).toBe(false);
    expect(renderSummaryMarkdown(drifted, REPORT_CONTEXT)).toContain("| 0.00008583 deg | 0.001165 |");
    /* A failing field that no solver returns is not listed there. */
    const moved = compare(
      "c1",
      withChange("layout", ["z", 3], (value) => Number(value) + 1e-3),
    );
    expect(moved.passed).toBe(false);
    expect(renderSummaryMarkdown(moved, REPORT_CONTEXT)).not.toContain("### Solver outputs");
  });

  it("compares a slope as direction cosines", () => {
    const steep = (uField: number): ComparableRecord => ({
      lens: "synthetic",
      state: DEFAULT_STATE,
      request: "chiefSolves",
      payload: { ok: true, value: { halfFieldDeg: 87.7, solves: [{ uField, status: "converged" }] } },
    });
    const run = (head: ComparableRecord) => {
      const comparison = createDifferentialRun({ changeClass: "c1", declaredExceptions: [], restricted: true });
      comparison.addLens({ lens: "synthetic", dataChange: "unchanged", baseEngine: [steep(-25)], headEngine: [head] });
      return comparison.finish();
    };
    /* At a slope of 25 a change of 1e-8 turns the ray by 1e-8 / (1 + 25²)^1.5, far inside 1e-10. */
    expect(run(steep(-25 - 1e-8)).passed).toBe(true);
    expect(run(steep(-25 - 1e-5)).passed).toBe(false);

    /* Near the axis a slope is its cosine, and the partner slope of the same ray enters the normalization. */
    const shallow = withChange("traces", [...RAY, "uy"], (uy) => Number(uy) + 2e-10);
    expect(failuresOf(compare("c1", shallow))).toEqual([
      { request: "traces", path: "onAxis.rays[1].uy", kind: "number", quantity: "slope" },
    ]);
    expect(
      compare(
        "c1",
        withChange("traces", [...RAY, "uy"], (uy) => Number(uy) + 5e-11),
      ).passed,
    ).toBe(true);
  });

  it("holds an iteration count exact under C0 and reports a histogram of changes above it", () => {
    const iterations: Path = ["solves", 1, "iterations"];
    const head = withChange("chiefSolves", iterations, (count) => Number(count) + 2);
    expect(failuresOf(compare("c0", head))).toEqual([
      { request: "chiefSolves", path: "solves[1].iterations", kind: "iterations", quantity: "iterationCount" },
    ]);
    const summary = compare(
      "c1",
      withChange("chiefSolves", ["solves", 2, "iterations"], (count) => Number(count) - 1, head),
    );
    expect(summary.passed).toBe(true);
    expect(summary.engine.iterationChanges).toEqual({ "+2": 1, "-1": 1 });
    expect(summary.engine.transitions).toBe(0);
  });

  it("fails a changed trace digest under C0, and above it counts the digest and compares what stands beside it", () => {
    /* A trace nested in an analysis result is in the record as its status, its hit count, a hash of the rest, and
     * three reductions of what the hash hides: the outcome, the largest residual share and the largest tolerance. */
    const digest: Path = [
      "jobs",
      "computePerspectiveFocusAnalysis",
      "value",
      "samples",
      0,
      "fieldSample",
      "chiefTrace",
    ];
    const path = "jobs.computePerspectiveFocusAnalysis.value.samples[0].fieldSample.chiefTrace";
    expect(at(SERENAR_RECORDS, "analysis", digest)).toEqual({
      status: "ok",
      hitCount: expect.any(Number),
      hash: expect.stringMatching(/^[0-9a-f]{64}$/),
      outcome: expect.stringMatching(/^[0-9a-f]{64}$/),
      residualShare: expect.any(Number),
      largestTolerance: RAW_INTERSECTION_TOLERANCE_MM,
    });

    const rehashed = withChange("analysis", [...digest, "hash"], () => "0".repeat(64));
    expect(failuresOf(compare("c0", rehashed))).toEqual([
      { request: "analysis", path: `${path}.hash`, kind: "digest", quantity: null },
    ]);
    for (const changeClass of ["c1", "c2"] as const) {
      const summary = compare(changeClass, rehashed);
      expect(summary.passed).toBe(true);
      expect(summary.engine).toMatchObject({ recordsDiffering: 1, numbersDiffering: 0, transitions: 0 });
      expect(summary.engine.differences.digest).toBe(1);
      expect(summary.engine.digests).toEqual({ byRequest: { analysis: 1 }, lenses: [SERENAR] });
      /* The run passes, so the report leads with what it did not judge: how many, in which records and lenses. */
      const markdown = renderSummaryMarkdown(summary, REPORT_CONTEXT);
      expect(markdown.indexOf("## Not budgeted: digested traces")).toBeGreaterThan(0);
      expect(markdown.indexOf("## Not budgeted: digested traces")).toBeLessThan(markdown.indexOf("## Counts"));
      expect(markdown).toContain("**1 trace digests changed, in 1 lenses, and none of them was budgeted.**");
      /* It says what was held to something beside each hash, and what was not. */
      expect(markdown).toContain(`Under ${changeClass.toUpperCase()} five of those were judged`);
      expect(markdown).toContain("the outcome hash, which must be equal, and which changes with any flag, status,");
      expect(markdown).toContain("which the head must keep at or under 1 wherever the two sides differ;");
      expect(markdown).toContain("held as the tolerance of a hit the comparison can read is. Not judged: how far the");
      expect(markdown).toContain("an effective tolerance below the largest of its trace among them");
      expect(markdown).toContain("| analysis | 1 |");
      expect(markdown).toContain(`Lenses: ${SERENAR}.`);
    }
    /* Under C0 the digest fails, and C3 budgets nothing at all: neither report has the section. */
    for (const changeClass of ["c0", "c3"] as const) {
      const markdown = renderSummaryMarkdown(compare(changeClass, rehashed), REPORT_CONTEXT);
      expect(markdown).not.toContain("## Not budgeted");
      expect(markdown).toContain("1 digests of traces nested in analysis");
    }
    expect(
      failuresOf(
        compare(
          "c1",
          withChange("analysis", [...digest, "status"], () => "clipped"),
        ),
      ),
    ).toEqual([{ request: "analysis", path: `${path}.status`, kind: "discrete", quantity: null }]);
    expect(
      failuresOf(
        compare(
          "c1",
          withChange("analysis", [...digest, "hitCount"], (count) => Number(count) + 1),
        ),
      ),
    ).toEqual([{ request: "analysis", path: `${path}.hitCount`, kind: "discrete", quantity: "count" }]);
    /* Only a digest's hash is set aside. A text member of that name anywhere else is a label like any other. */
    const labelled = (hash: string) => withChange("layout", ["hash"], () => hash);
    expect(failuresOf(compare("c1", labelled("b"), labelled("a")))).toEqual([
      { request: "layout", path: "hash", kind: "discrete", quantity: null },
    ]);
    /* The outcome beside the hash is such a label: it is equal on the two sides or the run fails, below C3. */
    const otherOutcome = withChange("analysis", [...digest, "outcome"], () => "0".repeat(64), rehashed);
    for (const changeClass of ["c1", "c2"] as const) {
      expect(failuresOf(compare(changeClass, otherOutcome)), changeClass).toEqual([
        { request: "analysis", path: `${path}.outcome`, kind: "discrete", quantity: null },
      ]);
    }
    expect(compare("c3", otherOutcome)).toMatchObject({ passed: true, engine: { transitions: 1 } });
  });

  describe("judges what a digest keeps of a nested trace above C0", () => {
    /* A perspective result in small: one posed ray, and a field sample whose pupil bundle holds two more. It goes
     * through the result encoder, as a capture's does, so each test changes one thing inside a trace and compares
     * the digests that come out. */
    const hitOf = (z: number, extra: object = {}) => ({
      surfaceIndex: 0,
      surfaceLabel: "1",
      point: [0, 1, z],
      residual: 0,
      effectiveTolerance: 1e-12,
      clipped: false,
      fallback: false,
      failureReason: null,
      ...extra,
    });
    const posedOf = (hits: object[]) => {
      const ray = {
        status: "ok",
        failureReason: null,
        hits,
        terminalPoint: [0, 1, 6],
        diagnostics: { clipped: false, clipEvents: [], loopDetected: false },
      };
      return { localTrace: ray, cameraTrace: ray, reachedSensor: true };
    };
    /* The second hit of every ray sits at a quarter of its tolerance, so the largest share is 0.25 unless a test
     * moves it. */
    const quarter = { residual: 0.25e-12 };
    interface Change {
      /* Members of the first hit of the ray outside the bundle, and of its second. */
      hit?: object;
      lastHit?: object;
      /* Members of the first hit of the first ray inside the bundle, and that ray's status in the bundle. */
      bundleHit?: object;
      bundleStatus?: string;
    }
    const nested = ({
      hit = {},
      lastHit = {},
      bundleHit = {},
      bundleStatus = "usable",
    }: Change = {}): PayloadRecord[] => {
      const sample = {
        rays: [{ sensorPoint: [0, 1, 2], trace: posedOf([hitOf(5, hit), hitOf(6, { ...quarter, ...lastHit })]) }],
        fieldSample: {
          status: "usable",
          pupilBundle: {
            kind: "circular",
            samples: [
              { status: bundleStatus, weight: 0.5, trace: posedOf([hitOf(5, bundleHit), hitOf(6, quarter)]) },
              { status: "missed-sensor", weight: 0.5, trace: posedOf([hitOf(5), hitOf(6, quarter)]) },
            ],
          },
        },
      };
      const value = { jobs: { computePerspectiveFocusAnalysis: { ok: true, value: { samples: [sample] } } } };
      return [
        {
          lens: "synthetic",
          state: DEFAULT_STATE,
          request: "analysis",
          payload: { ok: true, value: createResultEncoder()(value) },
        },
      ];
    };
    const BASE = nested();
    const sampleAt = "jobs.computePerspectiveFocusAnalysis.value.samples[0]";
    const rayAt = `${sampleAt}.rays[0].trace`;
    const bundleAt = `${sampleAt}.fieldSample.pupilBundle`;
    const digestAt = (records: readonly PayloadRecord[], member: "rays" | "fieldSample") => {
      const [sample] = at(records, "analysis", ["jobs", "computePerspectiveFocusAnalysis", "value", "samples"]) as {
        rays: { trace: Record<string, unknown> }[];
        fieldSample: { pupilBundle: Record<string, unknown> };
      }[];
      return member === "rays" ? sample.rays[0].trace : sample.fieldSample.pupilBundle;
    };
    const kindsAt = (summary: RunSummary) => summary.engine.failures.map(({ path, kind }) => [path, kind]);

    it("has the digests its perturbations assume", () => {
      const held = { residualShare: 0.25, largestTolerance: RAW_INTERSECTION_TOLERANCE_MM };
      expect(digestAt(BASE, "rays")).toMatchObject({ status: "ok", hitCount: 4, ...held });
      expect(digestAt(BASE, "fieldSample")).toMatchObject({ status: null, hitCount: 8, ...held });
      expect(compare("c0", nested(), BASE).passed).toBe(true);
    });

    it.each<[string, Change, string]>([
      ["a flag flipped", { hit: { clipped: true } }, rayAt],
      ["a clip reason set", { hit: { clipReason: "semi-diameter" } }, rayAt],
      ["a coordinate made NaN", { hit: { point: [0, Number.NaN, 5] } }, rayAt],
      ["a residual made infinite", { hit: { residual: Number.POSITIVE_INFINITY } }, rayAt],
      ["a surface index changed", { hit: { surfaceIndex: 1 } }, rayAt],
      ["a flag flipped inside a pupil bundle", { bundleHit: { clipped: true } }, bundleAt],
      ["the status of one ray of a pupil bundle changed", { bundleStatus: "missed-sensor" }, bundleAt],
    ])("fails %s inside a trace whose status and hit count stand", (_name, change, where) => {
      const head = nested(change);
      for (const member of ["rays", "fieldSample"] as const) {
        const [base, moved] = [digestAt(BASE, member), digestAt(head, member)];
        expect([moved.status, moved.hitCount]).toEqual([base.status, base.hitCount]);
      }
      for (const changeClass of ["c1", "c2"] as const) {
        const summary = compare(changeClass, head, BASE);
        expect(summary.passed, changeClass).toBe(false);
        expect(kindsAt(summary), changeClass).toContainEqual([`${where}.outcome`, "discrete"]);
        /* The finding is a transition like any other discrete one, and the hash beside it is still only counted. */
        expect(summary.engine.transitions, changeClass).toBeGreaterThan(0);
        expect(summary.engine.differences.digest, changeClass).toBe(1);
        expect(kindsAt(summary).filter(([, kind]) => kind === "digest")).toEqual([]);
      }
      expect(kindsAt(compare("c0", head, BASE))).toContainEqual([`${where}.hash`, "digest"]);
      expect(compare("c3", head, BASE).passed).toBe(true);
    });

    it("holds the largest residual inside a trace to its effective tolerance, on the head", () => {
      const twice = nested({ hit: { residual: 2e-12 } });
      for (const changeClass of ["c1", "c2"] as const) {
        const summary = compare(changeClass, twice, BASE);
        expect(summary.passed, changeClass).toBe(false);
        expect(summary.engine.failures, changeClass).toEqual([
          expect.objectContaining({
            path: `${rayAt}.residualShare`,
            kind: "contract",
            quantity: "nestedResidualShare",
            measure: 2,
            budget: 1,
          }),
        ]);
        /* Inside a pupil bundle too, where no status of the bundle's own could show it. */
        expect(kindsAt(compare(changeClass, nested({ bundleHit: { residual: -2e-12 } }), BASE)), changeClass).toEqual([
          [`${bundleAt}.residualShare`, "contract"],
        ]);
        /* A residual that moves inside its tolerance is no breach: the two sides are not differenced. */
        const within = compare(changeClass, nested({ hit: { residual: -0.5e-12 } }), BASE);
        expect(within.passed, changeClass).toBe(true);
        expect(within.engine.quantities.nestedResidualShare, changeClass).toMatchObject({
          differing: 1,
          beyondBudget: 0,
          largest: { measure: 0.5, budget: 1 },
        });
        /* Only the head's share is judged. A finite breach the base alone carries is not one the change made. */
        expect(compare(changeClass, BASE, twice).passed, changeClass).toBe(true);
        /* And only where the two sides differ, as for every field: the same breach on both is not walked. */
        expect(compare(changeClass, nested({ hit: { residual: 2e-12 } }), twice).passed, changeClass).toBe(true);
        expect(compare(changeClass, nested({ hit: { residual: 3e-12 } }), twice).passed, changeClass).toBe(false);
      }
      /* Under C0 it is a number like any other, and under C3 nothing fails. */
      expect(kindsAt(compare("c0", nested({ hit: { residual: -0.5e-12 } }), BASE))).toEqual([
        [`${rayAt}.hash`, "digest"],
        [`${rayAt}.residualShare`, "number"],
      ]);
      expect(compare("c3", twice, BASE).passed).toBe(true);
    });

    it("compares a share that is infinite or absent on one side exactly, whichever side it is", () => {
      /* A residual that is not finite, or that has no positive tolerance to meet, gives an infinite share, and no
       * budget is defined across an infinity: it fails from the base as from the head. So does a share on one side
       * against none on the other. Each of these changes the outcome as well. */
      const broken = nested({ hit: { residual: Number.NaN } });
      const untraced = nested({
        hit: { residual: null, effectiveTolerance: null },
        lastHit: { residual: null, effectiveTolerance: null },
      });
      expect(digestAt(broken, "rays").residualShare).toBe("$+Inf");
      expect(digestAt(untraced, "rays")).toMatchObject({ residualShare: null, largestTolerance: null });
      for (const changeClass of ["c1", "c2"] as const) {
        for (const [head, base] of [
          [broken, BASE],
          [BASE, broken],
        ]) {
          expect(kindsAt(compare(changeClass, head, base)), changeClass).toEqual([
            [`${rayAt}.outcome`, "discrete"],
            [`${rayAt}.residualShare`, "nonFinite"],
          ]);
        }
        for (const [head, base] of [
          [untraced, BASE],
          [BASE, untraced],
        ]) {
          expect(kindsAt(compare(changeClass, head, base)), changeClass).toEqual([
            [`${rayAt}.largestTolerance`, "discrete"],
            [`${rayAt}.outcome`, "discrete"],
            [`${rayAt}.residualShare`, "discrete"],
          ]);
        }
      }
    });

    it("holds the largest effective tolerance inside a trace, so a head cannot relax its way into contract", () => {
      /* A share is of the tolerance its own hit recorded, and the outcome masks that tolerance as the budgeted
       * number it is. The largest tolerance beside them is what holds it: without it a residual at twice the raw
       * target under a tolerance relaxed to four times it would move the hash alone. */
      const tolerance = { request: "analysis", path: `${rayAt}.largestTolerance` };
      const envelope = 3.7e-12;
      const stalled = (factor = 1, extra: Change = {}) =>
        nested({ ...extra, hit: { effectiveTolerance: envelope * factor } });
      expect(digestAt(stalled(), "rays").largestTolerance).toBe(envelope);
      expect(digestAt(stalled(), "fieldSample").largestTolerance).toBe(RAW_INTERSECTION_TOLERANCE_MM);
      for (const changeClass of ["c1", "c2"] as const) {
        /* From the raw target the hit left it for another tolerance, which is a discrete transition, as for a hit
         * the comparison can read. The share beside it is inside its contract. */
        const relaxed = compare(changeClass, nested({ hit: { residual: 2e-12, effectiveTolerance: 4e-12 } }), BASE);
        expect(failuresOf(relaxed), changeClass).toEqual([
          { ...tolerance, kind: "discrete", quantity: "toleranceBranch" },
        ]);
        expect(relaxed.engine.quantities.nestedResidualShare, changeClass).toMatchObject({
          beyondBudget: 0,
          largest: { measure: 0.5 },
        });
        /* Between two envelopes it is a number at 1e-12 relative: doubled fails, 1e-10 relative fails, the last
         * bits pass. */
        for (const factor of [2, 1 + 1e-10]) {
          expect(failuresOf(compare(changeClass, stalled(factor), stalled())), `${changeClass} ${factor}`).toEqual([
            { ...tolerance, kind: "number", quantity: "effectiveTolerance" },
          ]);
        }
        const lastBits = compare(changeClass, stalled(1 + 4 * Number.EPSILON), stalled());
        expect(lastBits, changeClass).toMatchObject({ passed: true, engine: { numbersDiffering: 1, transitions: 0 } });
        expect(lastBits.engine.quantities.effectiveTolerance).toMatchObject({ differing: 1, beyondBudget: 0 });
        /* Inside a pupil bundle too. */
        expect(kindsAt(compare(changeClass, nested({ bundleHit: { effectiveTolerance: 4e-12 } }), BASE))).toEqual([
          [`${bundleAt}.largestTolerance`, "discrete"],
        ]);
      }
      expect(compare("c3", nested({ hit: { effectiveTolerance: 4e-12 } }), BASE).passed).toBe(true);
      expect(kindsAt(compare("c0", stalled(1 + 4 * Number.EPSILON), stalled()))).toEqual([
        [`${rayAt}.hash`, "digest"],
        [`${rayAt}.largestTolerance`, "number"],
      ]);

      /* The accepted limit of one number per carrier: a tolerance relaxed under a larger one beside it, in the same
       * trace, moves the hash alone. The base has to hold a stalled hit there already. */
      const under = (factor: number) => stalled(factor, { lastHit: { effectiveTolerance: 4 * envelope } });
      for (const changeClass of ["c1", "c2"] as const) {
        const summary = compare(changeClass, under(2), under(1));
        expect(summary, changeClass).toMatchObject({ passed: true, engine: { numbersDiffering: 0, transitions: 0 } });
        expect(summary.engine.differences.digest, changeClass).toBe(1);
      }
    });

    it("reports a coordinate that moved inside a trace and does not judge how far: the accepted limit of the rule", () => {
      /* A micrometre is a thousand times the budget of an unclipped hit the comparison can read. Inside a digest
       * the move changes the hash and nothing else, so it is counted, named at the top of the report, and passes. */
      for (const distance of [1e-12, 1e-6, 1]) {
        const head = nested({ hit: { point: [0, 1 + distance, 5] }, bundleHit: { point: [0, 1, 5 + distance] } });
        for (const member of ["rays", "fieldSample"] as const) {
          const [base, moved] = [digestAt(BASE, member), digestAt(head, member)];
          expect(moved.hash).not.toBe(base.hash);
          expect({ ...moved, hash: base.hash }).toEqual(base);
        }
        for (const changeClass of ["c1", "c2"] as const) {
          const summary = compare(changeClass, head, BASE);
          expect(summary.passed, `${changeClass} ${distance}`).toBe(true);
          expect(summary.engine).toMatchObject({ numbersDiffering: 0, transitions: 0, failing: 0 });
          expect(summary.engine.differences.digest).toBe(2);
          expect(renderSummaryMarkdown(summary, REPORT_CONTEXT)).toContain("## Not budgeted: digested traces");
        }
        expect(compare("c0", head, BASE).passed).toBe(false);
      }
    });

    it("lets an effective tolerance inside a trace move in its last bits", () => {
      /* Only a stall envelope is a computed float; the raw target is a constant and has no last bits to move. Under
       * a larger tolerance in the same trace, the hash is all that changes. */
      const envelope = 3.7e-12;
      const lastBits = envelope * (1 + 4 * Number.EPSILON);
      const larger = { lastHit: { effectiveTolerance: 2 * envelope } };
      const base = nested({ ...larger, hit: { effectiveTolerance: envelope } });
      const head = nested({ ...larger, hit: { effectiveTolerance: lastBits } });
      expect({ ...digestAt(head, "rays"), hash: "" }).toEqual({ ...digestAt(base, "rays"), hash: "" });
      expect(digestAt(head, "rays").hash).not.toBe(digestAt(base, "rays").hash);
      for (const changeClass of ["c1", "c2"] as const) {
        expect(compare(changeClass, head, base)).toMatchObject({ passed: true, engine: { numbersDiffering: 0 } });
      }
      expect(kindsAt(compare("c0", head, base))).toEqual([[`${rayAt}.hash`, "digest"]]);

      /* On the hit that carries the largest tolerance and the largest share, both move in their last bits with it,
       * each inside what it is held to, and the outcome stands. */
      const worstBase = nested({ hit: { residual: 0.5 * envelope, effectiveTolerance: envelope } });
      const worst = nested({ hit: { residual: 0.5 * envelope, effectiveTolerance: lastBits } });
      expect(digestAt(worstBase, "rays")).toMatchObject({ residualShare: 0.5, largestTolerance: envelope });
      expect(digestAt(worst, "rays").outcome).toBe(digestAt(worstBase, "rays").outcome);
      expect(digestAt(worst, "rays").largestTolerance).toBe(lastBits);
      expect(digestAt(worst, "rays").residualShare).not.toBe(0.5);
      expect(digestAt(worst, "rays").residualShare).toBeCloseTo(0.5, 12);
      for (const changeClass of ["c1", "c2"] as const) {
        const summary = compare(changeClass, worst, worstBase);
        expect(summary, changeClass).toMatchObject({ passed: true, engine: { numbersDiffering: 2, transitions: 0 } });
      }
    });
  });

  it("masks in a digest's outcome exactly the numbers the table budgets", () => {
    /* The outcome keeps a number where it is exact by nature and masks it where it has a budget. `payload.ts` goes
     * by member name, because a carrier's content has no record path to ask the table with. This holds the names
     * to the table in both directions, on what a carrier really holds: a ray of the `traces` record is an engine
     * trace as a digest's content has it. */
    const finite = (leaf: unknown) => typeof leaf === "number" || leaf === "$-0";
    const disagreements = (family: RequestFamily, prefix: readonly string[], content: unknown) => {
      const found = new Map<string, { kept: boolean; exact: boolean }>();
      const visit = (value: unknown, masked: unknown, segments: readonly string[]): void => {
        if (Array.isArray(value)) {
          value.forEach((item, index) => visit(item, (masked as unknown[])[index], [...segments, "[]"]));
        } else if (value !== null && typeof value === "object") {
          for (const [key, member] of Object.entries(value)) {
            visit(member, (masked as Record<string, unknown>)[key], [...segments, key]);
          }
        } else if (finite(value)) {
          const rule = resolveBudgetRule(family, [...prefix, ...segments]);
          const exact = typeof rule?.quantity === "string" && (QUANTITIES[rule.quantity] as Quantity).kind === "exact";
          found.set(segments.join("."), { kept: Object.is(masked, value), exact });
        }
      };
      visit(content, maskBudgetedNumbers(content as EncodedValue), []);
      return {
        kept: [...found].filter(([, { kept }]) => kept).map(([path]) => path),
        wrong: [...found].filter(([, { kept, exact }]) => kept !== exact).map(([path]) => path),
      };
    };

    /* A prime's fans, clipped rays among them, and an auto-path folded lens for the path planner's diagnostics. */
    const mirotar = captureRecords(
      CATALOG,
      TIER_P.filter(({ lens, family }) => lensId(lens) === "carl-zeiss-mirotar-500f45" && family === "traces"),
    );
    const kept = new Set<string>();
    for (const records of [SERENAR_RECORDS, mirotar]) {
      const fans = at(records, "traces", []) as Record<string, { rays: unknown[] }>;
      const rays = [...fans.onAxis.rays, ...fans.offAxis.rays, ...fans.skew.rays];
      expect(rays.length).toBe(14);
      for (const ray of rays) {
        const result = disagreements("traces", ["onAxis", "rays", "[]"], ray);
        expect(result.wrong).toEqual([]);
        for (const path of result.kept) kept.add(path);
      }
    }
    expect([...kept].sort()).toEqual([
      "diagnostics.autoSteps.[].skippedCandidates.[].surfaceIdx",
      "diagnostics.autoSteps.[].step",
      "diagnostics.clipEvents.[].surfaceIdx",
      "diagnostics.hitSurfaceIndexes.[]",
      "diagnostics.maxInteractions",
      "diagnostics.terminalSurfaceIndex",
      "hits.columns.surfaceIndex.[]",
      "hits.count",
      "returnVertexIndex",
      "terminalSurfaceIndex",
    ]);

    /* What a posed pair and a pupil bundle add around the traces they hold, as the engine's types name it. */
    const inner = {
      status: "ok",
      hitCount: 11,
      hash: "a".repeat(64),
      outcome: "b".repeat(64),
      residualShare: 0.5,
      largestTolerance: 1e-12,
    };
    const around = disagreements("analysis", ["jobs", "x", "value", "samples", "[]", "fieldSample"], {
      chiefTrace: {
        localTrace: inner,
        cameraTrace: inner,
        localReturnPoint: [0, 1, 2],
        cameraReturnPoint: [0, 1, 2],
        sensorIntersection: { point: [0, 1, 2], t: 26.5 },
        reachedSensor: true,
        transmission: 1,
      },
      pupilBundle: {
        kind: "circular",
        samples: [
          { pupilUv: { u: 0.5, v: -0 }, weight: 0.25, status: "usable", sensorIntercept: [0, 1, 2], transmission: 1 },
        ],
      },
    });
    expect(around.wrong).toEqual([]);
    expect(around.kept).toEqual([
      "chiefTrace.localTrace.hitCount",
      "chiefTrace.cameraTrace.hitCount",
      "pupilBundle.samples.[].pupilUv.u",
      "pupilBundle.samples.[].pupilUv.v",
    ]);
    /* A hash inside the content is left out of it: it follows the masked numbers, and the outcome beside it stays. */
    expect(maskBudgetedNumbers(inner)).toEqual({
      status: "ok",
      hitCount: 11,
      outcome: inner.outcome,
      residualShare: "$number",
      largestTolerance: "$number",
    });
  });

  it("fails a near-axis probe that stops returning, on either tracer", () => {
    /* The engine builds its pupil constants from two near-axis rays and takes another value, unflagged, when one
     * fails. The `traces` record traces two such rays on each tracer, so a ray that stops returning is a status and
     * not a number to budget. */
    const probes: Path = ["nearAxisProbes"];
    expect(at(SERENAR_RECORDS, "traces", probes)).toEqual({
      applicable: true,
      prepared: {
        ok: true,
        value: {
          marginal: { status: "ok", failureReason: null, y: expect.any(Number) },
          chief: { status: "ok", failureReason: null, y: expect.any(Number) },
        },
      },
      legacy: {
        ok: true,
        value: {
          marginal: { clipped: false, failureReason: null, returned: true },
          chief: { clipped: false, failureReason: null, returned: true },
        },
      },
    });
    const prepared = withChange("traces", [...probes, "prepared", "value", "chief"], () => ({
      status: "failed",
      failureReason: "noConvergedIntersection",
      y: encodeValue(Number.NaN),
    }));
    const legacy = withChange("traces", [...probes, "legacy", "value", "marginal"], () => ({
      clipped: true,
      failureReason: "noConvergedIntersection",
      returned: false,
    }));
    /* A launch that threw: the copy of the engine's launch met a prepared state it cannot read. */
    const threw = withChange("traces", [...probes, "prepared"], () => ({
      ok: false,
      error: { name: "TypeError", message: "first.profile.sag is not a function" },
    }));
    const pathsAndKinds = (summary: RunSummary) => summary.engine.failures.map(({ path, kind }) => [path, kind]);
    for (const changeClass of ["c0", "c1", "c2"] as const) {
      const at0 = "nearAxisProbes.prepared.value.chief";
      expect(failuresOf(compare(changeClass, prepared)), changeClass).toEqual([
        { request: "traces", path: `${at0}.failureReason`, kind: "discrete", quantity: null },
        { request: "traces", path: `${at0}.status`, kind: "discrete", quantity: null },
        { request: "traces", path: `${at0}.y`, kind: "nonFinite", quantity: "clippedHit" },
      ]);
      expect(pathsAndKinds(compare(changeClass, legacy)), changeClass).toEqual([
        ["nearAxisProbes.legacy.value.marginal.clipped", "discrete"],
        ["nearAxisProbes.legacy.value.marginal.failureReason", "discrete"],
        ["nearAxisProbes.legacy.value.marginal.returned", "discrete"],
      ]);
      /* The status alone, with nothing else to show for it. */
      for (const [tracer, member, value] of [
        ["prepared", "status", "failed"],
        ["legacy", "returned", false],
      ] as const) {
        const alone = withChange("traces", [...probes, tracer, "value", "marginal", member], () => value);
        expect(pathsAndKinds(compare(changeClass, alone)), changeClass).toEqual([
          [`nearAxisProbes.${tracer}.value.marginal.${member}`, "discrete"],
        ]);
      }
      /* A launch that threw on one engine fails as the outcome of that tracer's probes, and of nothing else: the
       * other tracer's probes and every ray of the record are still compared. */
      expect(pathsAndKinds(compare(changeClass, threw)), changeClass).toEqual([
        ["nearAxisProbes.prepared.ok", "discrete"],
        ["nearAxisProbes.prepared.value", "shape"],
        ["nearAxisProbes.prepared.error", "shape"],
      ]);
      /* A lens that gains or loses its probes, as one that turns folded would, changes the record's shape. */
      const none = withChange("traces", probes, () => ({ applicable: false }));
      expect(compare(changeClass, none).passed, changeClass).toBe(false);
    }
    expect(compare("c3", prepared)).toMatchObject({ passed: true, engine: { transitions: 2 } });
    /* A probe's height at the stop is a ray's height like any other, with that row's budget. */
    const height: Path = [...probes, "prepared", "value", "marginal", "y"];
    const nudged = withChange("traces", height, (y) => Number(y) * (1 + Number.EPSILON));
    expect(compare("c0", nudged).passed).toBe(false);
    expect(compare("c1", nudged).engine.quantities.landing).toMatchObject({ differing: 1, beyondBudget: 0 });
  });

  it("reports a changed shape once, without entering it", () => {
    const shorter = withChange("traces", ["onAxis", "rays"], (rays) => (rays as unknown[]).slice(0, -1));
    expect(failuresOf(compare("c1", shorter))).toEqual([
      { request: "traces", path: "onAxis.rays", kind: "shape", quantity: null },
    ]);
    const missing = withChange("traces", RAY, (ray) => {
      const { imagePoint: _imagePoint, ...rest } = ray as Record<string, unknown>;
      return { ...rest, extra: 1 };
    });
    expect(failuresOf(compare("c1", missing)).map(({ path, kind }) => [path, kind])).toEqual([
      ["onAxis.rays[1].imagePoint", "shape"],
      ["onAxis.rays[1].extra", "shape"],
    ]);
    /* A landing point that one side does not have is a change of type, not a number to budget. */
    const nulled = withChange("traces", [...RAY, "imagePoint"], () => null);
    expect(failuresOf(compare("c1", nulled))).toEqual([expect.objectContaining({ kind: "shape" })]);
  });

  it("detects a record that throws on one engine", () => {
    const head = structuredClone(SERENAR_RECORDS) as PayloadRecord[];
    const mtf = head.findIndex((record) => record.request === "mtf");
    head[mtf].payload = { ok: false, error: { name: "Error", message: "boom" } };
    const summary = compare("c1", head);
    expect(summary.passed).toBe(false);
    expect(failuresOf(summary)).toContainEqual({ request: "mtf", path: "ok", kind: "discrete", quantity: null });
    expect(summary.counts.headEngine.failedRecords).toBe(1);
    expect(summary.thrownOnBothEngines.records).toBe(0);
    /* Another message on the other engine is a change of outcome as well. */
    const reworded = structuredClone(head) as PayloadRecord[];
    reworded[mtf].payload = { ok: false, error: { name: "Error", message: "bang" } };
    expect(failuresOf(compare("c1", reworded, head))).toEqual([
      { request: "mtf", path: "error.message", kind: "discrete", quantity: null },
    ]);
  });

  it("fails a record that throws alike on both engines, in every class", () => {
    /* The harness runs on both sides, so a defect in a capture throws alike on both. Two equal failures compare
     * equal and compare nothing: the family would drop out of the run unnoticed. */
    const throwing = (request: RequestFamily, records: readonly PayloadRecord[] = SERENAR_RECORDS): PayloadRecord[] =>
      records.map((record) =>
        record.request === request
          ? { ...record, payload: { ok: false, error: { name: "TypeError", message: "capture defect" } } }
          : record,
      );
    const both = throwing("traces");
    const said = "false (TypeError: capture defect)";
    for (const changeClass of CLASSES) {
      const summary = compare(changeClass, structuredClone(both), both);
      expect(summary.passed).toBe(false);
      expect(summary.engine).toMatchObject({ records: 7, recordsDiffering: 0, failing: 0 });
      expect(summary.thrownOnBothEngines).toEqual({
        records: 1,
        samples: [
          {
            comparison: "engine",
            lens: SERENAR,
            state: stateId(DEFAULT_STATE),
            request: "traces",
            path: "ok",
            kind: "discrete",
            quantity: null,
            base: said,
            head: said,
            measure: null,
            budget: null,
          },
        ],
      });
      expect(summary.failures).toEqual([
        `Threw on both engines, which compares nothing: 1 record (${SERENAR} traces at ${stateId(DEFAULT_STATE)}).`,
      ]);
      const markdown = renderSummaryMarkdown(summary, REPORT_CONTEXT);
      expect(markdown).toContain("### Records that threw on both engines (1)");
      expect(markdown).toContain(`| ${SERENAR} | ${stateId(DEFAULT_STATE)} | traces | \`ok\` | discrete |`);
    }
    /* Both sides of the pair go to the failing records, where the error can be read. */
    const run = createDifferentialRun({ changeClass: "c0", declaredExceptions: [], restricted: true });
    const output = run.addLens({ lens: SERENAR, dataChange: "unchanged", baseEngine: both, headEngine: both });
    expect(output.failingRecords.map((line) => (JSON.parse(line) as { head: PayloadRecord }).head.request)).toEqual([
      "traces",
    ]);

    /* A build record that throws too is no excuse while the data is the same on both sides: nothing else would
     * notice a build projection that throws for every lens. */
    const all = SERENAR_RECORDS.reduce((records, { request }) => throwing(request, records), SERENAR_RECORDS);
    const none = compare("c3", structuredClone(all), all);
    expect(none.thrownOnBothEngines.records).toBe(7);
    expect(none.failures).toEqual([expect.stringMatching(/^Threw on both engines.*: 7 records \(.*; and more\)\.$/)]);

    /* A job that throws inside an analysis record is an outcome of the job. The record itself returned. */
    const maksutov = recordsOf("reference-maksutov-cassegrain-meniscus");
    const withThrowingJobs = compare("c0", structuredClone(maksutov), maksutov);
    expect(withThrowingJobs.counts.headEngine.jobs.threw).toBeGreaterThan(0);
    expect(withThrowingJobs).toMatchObject({ passed: true, thrownOnBothEngines: { records: 0 } });
  });

  it("fails a number that moved and has no quantity class above C0, and names its path", () => {
    const withMember = (value: number) => withChange("layout", ["unbudgeted"], () => value);
    for (const changeClass of ["c1", "c2"] as const) {
      /* With no class there is no budget to be within, so one ulp fails as a doubling does. */
      for (const moved of [2, 1 + Number.EPSILON]) {
        const summary = compare(changeClass, withMember(moved), withMember(1));
        expect(summary.passed, changeClass).toBe(false);
        expect(failuresOf(summary), changeClass).toEqual([
          { request: "layout", path: "unbudgeted", kind: "unclassified", quantity: null },
        ]);
        expect(summary.engine.unclassified, changeClass).toEqual(["layout:unbudgeted"]);
        expect(renderSummaryMarkdown(summary, REPORT_CONTEXT), changeClass).toContain(
          "### Numbers with no quantity class\n\n- `layout:unbudgeted`",
        );
      }
      /* The class is asked for only where the number differs: one that did not move needs none. */
      expect(compare(changeClass, withMember(1), withMember(1)).passed, changeClass).toBe(true);
    }
  });

  it("compares a number with no quantity class bit for bit under C0, like any other", () => {
    const withMember = (value: number) => withChange("layout", ["unbudgeted"], () => encodeValue(value));
    /* A C0 run reads no budget, so a payload member the table has never heard of passes while it is unchanged. */
    expect(compare("c0", withMember(1), withMember(1))).toMatchObject({ passed: true, engine: { failing: 0 } });
    const moved = compare("c0", withMember(1 + Number.EPSILON), withMember(1));
    expect(moved.passed).toBe(false);
    expect(moved.engine.failures.map(({ request, path }) => ({ request, path }))).toEqual([
      { request: "layout", path: "unbudgeted" },
    ]);
    /* The sign of zero is a bit, as it is for a number that has a class. */
    expect(compare("c0", withMember(-0), withMember(0)).passed).toBe(false);
  });

  it("refuses captures that do not answer the same requests", () => {
    expect(() => compare("c0", SERENAR_RECORDS.slice(1))).toThrow("do not answer the same requests");
    expect(() => compare("c0", [...SERENAR_RECORDS].reverse())).toThrow("do not answer the same requests");
    /* Two records of one family at one state are the same request only under the same variant. */
    const named = (variant: string) =>
      SERENAR_RECORDS.map((record) => (record.request === "mtf" ? { ...record, variant } : record));
    expect(() => compare("c0", named("diffraction/cdf"), named("geometric/cdf"))).toThrow(
      "do not answer the same requests",
    );
    expect(() => compare("c0", named("diffraction/cdf"))).toThrow("do not answer the same requests");
    expect(compare("c0", named("diffraction/cdf"), named("diffraction/cdf")).passed).toBe(true);
  });

  it("names the variant of a record in its findings and in the report", () => {
    const base = SERENAR_RECORDS.map((record) =>
      record.request === "mtf" ? { ...record, variant: "diffraction/cdf" } : record,
    );
    const head = withChange("mtf", ["result", "fields", 0, "sagittal", 1], (value) => Number(value) + 1e-3, base);
    const summary = compare("c1", head, base);
    expect(summary.engine.failures).toMatchObject([
      { request: "mtf", variant: "diffraction/cdf", path: "result.fields[0].sagittal[1]", quantity: "mtfModulation" },
    ]);
    const markdown = renderSummaryMarkdown(summary, REPORT_CONTEXT);
    expect(markdown).toContain("| mtf diffraction/cdf | `result.fields[0].sagittal[1]` |");
    expect(markdown).toContain(`${SERENAR} mtf diffraction/cdf \`result.fields[0].sagittal[1]\``);
    /* A record without a variant gets no such member: a finding stays what it was. */
    const plain = compare(
      "c1",
      withChange("mtf", ["result", "fields", 0, "sagittal", 1], (value) => Number(value) + 1e-3),
    );
    expect(plain.engine.failures[0]).not.toHaveProperty("variant");
  });

  it("returns each record as one line of JSON, and both sides of a failing pair", () => {
    const head = withChange("traces", [...RAY, "status"], () => "clipped");
    const run = createDifferentialRun({ changeClass: "c1", declaredExceptions: [], restricted: true });
    const output = run.addLens({
      lens: SERENAR,
      dataChange: "unchanged",
      baseEngine: SERENAR_RECORDS,
      headEngine: head,
    });
    expect(output.lines.baseEngine.map((line) => JSON.parse(line) as unknown)).toEqual(SERENAR_RECORDS);
    expect(output.lines.headEngine.map((line) => JSON.parse(line) as unknown)).toEqual(head);
    expect(output.lines.baseData).toEqual([]);
    expect(output.failingRecords).toHaveLength(1);
    expect(JSON.parse(output.failingRecords[0])).toEqual({
      comparison: "engine",
      base: SERENAR_RECORDS.find((record) => record.request === "traces"),
      head: head.find((record) => record.request === "traces"),
    });
  });
});

/* ── compare.ts: data changes and exceptions ── */

function catalogOf(...lenses: LensDataInput[]): SerializedCatalog {
  return {
    lenses: lenses.map((lens) => ({ key: lens.key, file: "fixture", prescription: encodeValue(lens) })),
    teleconverters: [],
    pairs: [],
  };
}

describe("engineDiff data failures after a ray's first clip", () => {
  const clip = { reason: "semi-diameter", surfaceIdx: 0, surfaceLabel: "1", failureReason: null };
  const failure = { reason: "intersection-failure", surfaceIdx: 1, surfaceLabel: "2", failureReason: "noBracket" };
  const ray = (status: string, clipEvents: readonly object[] = []) => ({
    status,
    hits: { count: 1, columns: {} },
    diagnostics: { clipEvents },
  });
  const record = (value: unknown, request: RequestFamily = "traces"): ComparableRecord => ({
    lens: "synthetic-clipped-ray",
    state: DEFAULT_STATE,
    request,
    payload: { ok: true, value: encodeValue(value) },
  });
  const judge = (base: ComparableRecord, head: ComparableRecord, changeClass: ChangeClass = "c0") => {
    const run = createDifferentialRun({ changeClass, declaredExceptions: [], restricted: true });
    const output = run.addLens({
      lens: head.lens,
      dataChange: "semantic",
      baseEngine: structuredClone([head]),
      headEngine: [head],
      baseData: [base],
    });
    return { summary: run.finish(), output };
  };
  const fans = [
    ...["onAxis", "offAxis", "skew"].map((fan) => ({
      name: fan,
      value: (traced: object) => ({ [fan]: { rays: [traced] } }),
    })),
    ...["B", "V", "R"].map((channel) => ({
      name: `chromatic ${channel}`,
      value: (traced: object) => ({ chromatic: { rays: { [channel]: [traced] } } }),
    })),
  ];

  it.each(fans)("counts and reports a clipped ray that fails after an earlier clip in $name", ({ value }) => {
    for (const changeClass of CLASSES) {
      const { summary, output } = judge(
        record(value(ray("clipped", [clip]))),
        record(value(ray("failed", [clip, failure]))),
        changeClass,
      );
      expect(summary.passed, changeClass).toBe(true);
      expect(summary.dataImpact[0]).toMatchObject({
        blocking: 0,
        blockers: [],
        paths: {
          statuses: { toFailure: 1, fromFailure: 0, afterFirstClip: 1 },
          statusChanges: { "clipped -> failed": 1 },
          statusChangesAfterFirstClip: { "clipped -> failed": 1 },
        },
      });
      expect(output.failingRecords).toEqual([]);
      expect(renderDataImpactMarkdown(summary, REPORT_CONTEXT)).toContain(
        "| clipped -> failed | 1 | does not block: failure after the ray's first clip |",
      );
    }
  });

  it("blocks when the failure is the first clip event, or the head has no ordered evidence", () => {
    for (const events of [[failure], [failure, clip], [clip], []]) {
      const { summary } = judge(
        record({ offAxis: { rays: [ray("clipped", [clip])] } }),
        record({ offAxis: { rays: [ray("failed", events)] } }),
      );
      expect(summary).toMatchObject({ passed: false, dataImpact: [{ blocking: 1 }] });
    }
  });

  it("uses the head ray's event order even from ok, across decreasing surface indexes and non-rim clips", () => {
    for (const reason of ["semi-diameter", "inner-hole", "block-surface"]) {
      const { summary } = judge(
        record({ skew: { rays: [ray("ok")] } }),
        record({ skew: { rays: [ray("failed", [{ ...clip, reason, surfaceIdx: 9 }, failure])] } }),
      );
      expect(summary).toMatchObject({ passed: true, dataImpact: [{ blocking: 0 }] });
      expect(renderDataImpactMarkdown(summary, REPORT_CONTEXT)).toContain(
        "| ok -> failed | 1 | does not block: failure after the ray's first clip |",
      );
    }
  });

  it("still blocks a digested nested trace whose status turns to failed", () => {
    const nested = (status: string) =>
      record({ jobs: { fan: { ok: true, value: { trace: { status, hash: "trace", hitCount: 1 } } } } }, "analysis");
    const { summary } = judge(nested("clipped"), nested("failed"));
    expect(summary).toMatchObject({
      passed: false,
      dataImpact: [{ blocking: 1, blockers: [{ path: "jobs.fan.value.trace.status" }] }],
    });
  });

  it.each(["bracket-failed", "evaluation-failed"])("still blocks %s with earlier clip events", (status) => {
    const solve = (status: string) => record({ solves: [ray(status, [clip, failure])] }, "chiefSolves");
    const { summary } = judge(solve("unbracketed"), solve(status));
    expect(summary).toMatchObject({ passed: false, dataImpact: [{ blocking: 1 }] });
  });

  it("keeps total status changes and differences, and separates mixed gates in JSON and Markdown", () => {
    const base = record({ offAxis: { rays: [ray("clipped"), ray("clipped"), ray("ok")] } });
    const head = record({
      offAxis: { rays: [ray("failed", [clip, failure]), ray("failed", [failure]), ray("failed", [clip, failure])] },
    });
    const { summary, output } = judge(base, head);
    const impact = JSON.parse(JSON.stringify(summary)).dataImpact[0];
    expect(impact).toMatchObject({
      records: 1,
      recordsDiffering: 1,
      transitions: 6,
      blocking: 1,
      blockers: [{ path: "offAxis.rays[1].status" }],
      paths: {
        statuses: { toFailure: 3, fromFailure: 0, afterFirstClip: 2 },
        statusChanges: { "clipped -> failed": 2, "ok -> failed": 1 },
        statusChangesAfterFirstClip: { "clipped -> failed": 1, "ok -> failed": 1 },
      },
    });
    expect(output.failingRecords).toHaveLength(1);
    const report = renderDataImpactMarkdown(summary, REPORT_CONTEXT);
    expect(report).toContain("| Statuses turned to a failure from a status that is none | 3 |");
    expect(report).toContain("| Failures after the ray's first clip | 2 | does not block |");
    expect(report).toContain("| clipped -> failed | 1 | blocks |");
    expect(report).toContain("| clipped -> failed | 1 | does not block: failure after the ray's first clip |");
    expect(report).toContain("| ok -> failed | 1 | does not block: failure after the ray's first clip |");
    expect(renderSummaryMarkdown(summary, REPORT_CONTEXT)).toContain("Failures after the ray's first clip");
    expect(summary.engine).toMatchObject({ recordsDiffering: 0, failing: 0 });

    /* A crowded status table still counts the non-blocking subset, and it cannot crowd a blocker out of its list. */
    const crowded = (head: boolean) =>
      record({
        beforeFans: Array.from({ length: 64 }, (_, index) => ({ status: `${head ? "head" : "base"}${index}` })),
        offAxis: {
          rays: Array.from({ length: 13 }, (_, index) =>
            ray(head ? "failed" : "clipped", head ? (index < 12 ? [clip, failure] : [failure]) : []),
          ),
        },
      });
    const unlisted = judge(crowded(false), crowded(true)).summary;
    expect(unlisted.dataImpact[0]).toMatchObject({
      blocking: 1,
      blockers: [{ path: "offAxis.rays[12].status" }],
      paths: {
        statuses: { toFailure: 13, afterFirstClip: 12 },
        statusChangesAfterFirstClip: {},
        statusChangesUnlisted: 13,
      },
    });
    expect(renderDataImpactMarkdown(unlisted, REPORT_CONTEXT)).toContain(
      "| any other change | 12 | does not block: failure after the ray's first clip |",
    );
    expect(renderDataImpactMarkdown(unlisted, REPORT_CONTEXT)).toContain(
      "| any other change | 1 | see the blockers listed above |",
    );
  });
});

describe("engineDiff cross-evaluation", () => {
  const key = plainTwin.key;
  const requests: CaptureRequest[] = [
    { lens: { key }, state: null, family: "build" },
    ...(["layout", "traces", "fieldGeometry", "chiefSolves"] as const).map((family) => ({
      lens: { key },
      state: DEFAULT_STATE,
      family,
    })),
  ];
  /** The plain twin with its element 10% thicker: a change the engine and the fingerprint both see. */
  const thicker: LensDataInput = {
    ...plainTwin,
    surfaces: plainTwin.surfaces.map((surface) => (surface.label === "1A" ? { ...surface, d: 5.5 } : surface)),
  };
  const unbuildable: LensDataInput = { ...plainTwin, surfaces: plainTwin.surfaces.slice(1) };
  const changeBetween = (base: SerializedCatalog, head: SerializedCatalog) =>
    classifyCatalogChanges(base, head, fingerprintCatalog(base), fingerprintCatalog(head));
  const plainRecords = captureRecords(catalogOf(plainTwin), requests);

  /** One lens through a run in which both engines are this checkout's. */
  function evaluate(
    dataChange: DataChange,
    head: readonly PayloadRecord[],
    baseData: readonly PayloadRecord[] | null,
    changeClass: ChangeClass = "c0",
  ): RunSummary {
    const run = createDifferentialRun({ changeClass, declaredExceptions: [], restricted: true });
    run.addLens({ lens: head[0].lens, dataChange, baseEngine: structuredClone(head), headEngine: head, baseData });
    return run.finish();
  }

  /* A semantic data change is judged path by path. The tests below set a status, a number or an outcome on each
   * side of one. */
  const NO_PATHS = {
    statuses: { toFailure: 0, afterFirstClip: 0, fromFailure: 0 },
    numbers: { toNonFinite: 0, fromNonFinite: 0 },
    outcomes: { toThrown: 0, fromThrown: 0 },
    baseOnly: { statuses: 0, failedStatuses: 0, nonFinite: 0 },
    headOnly: { statuses: 0, failedStatuses: 0, nonFinite: 0 },
    resized: { arrays: 0, listed: [] },
    statusChanges: {},
    statusChangesAfterFirstClip: {},
    statusChangesUnlisted: 0,
  };
  /** The digest that stands in for a trace nested in an analysis result. */
  const digestOf = (status: string) => ({
    status,
    hitCount: 4,
    hash: status,
    outcome: status,
    residualShare: 0.5,
    largestTolerance: RAW_INTERSECTION_TOLERANCE_MM,
  });
  type TraceStatus = "ok" | "clipped" | "failed";
  /** The rays of a fan as an analysis result holds them: a ray that was not traced keeps its place, with no trace. */
  const fanOf = (traces: readonly (TraceStatus | null)[]) => ({
    samples: traces.map((trace) => ({
      status: trace === "ok" ? "usable" : trace === "clipped" ? "clipped" : "missed-sensor",
      trace: trace && digestOf(trace),
    })),
  });
  /**
   * One channel of a chromatic perspective sample, in the shape the engine returns. A channel whose chief ray
   * reaches the sensor holds the chief-ray solve with its root solve and its two traces, the sensor lock and a fan
   * with a digest per traced ray. One that misses the sensor (`null`) holds no field sample, and its fan keeps the
   * same rays, each `missed-sensor` and untraced.
   */
  const channelOf = (fan: readonly TraceStatus[] | null, rays = 3) => ({
    status: fan ? "usable" : "missed-sensor",
    fieldSample: fan && {
      status: "usable",
      chiefSolve: {
        status: "usable",
        rootSolve: { status: "converged" },
        chiefTrace: digestOf("ok"),
        stopTrace: digestOf("ok"),
      },
      sensorSolve: { status: "converged", scalarRoot: { status: "converged" } },
    },
    rayFan: fanOf(fan ?? new Array<null>(rays).fill(null)),
  });
  /**
   * The same channel where the chief-ray solve found no root: the engine traces nothing past the solve, and calls
   * the channel `chief-unreachable`.
   */
  const channelWithoutRoot = (rootSolve: string, rays = 3) => ({
    status: "chief-unreachable",
    fieldSample: {
      status: "chief-unreachable",
      chiefSolve: { status: "chief-unreachable", rootSolve: { status: rootSolve }, chiefTrace: null, stopTrace: null },
      sensorSolve: null,
    },
    rayFan: fanOf(new Array<null>(rays).fill(null)),
  });
  /** The plain twin's records with such samples in one of them. */
  const withSamples = (samples: readonly object[]) => withChange("traces", ["samples"], () => samples, plainRecords);
  const pathsOf = (summary: RunSummary) => summary.dataImpact[0].paths!;
  /** Statuses that say `failed`, as text: what a rule that counted them compared between the two sides. */
  const failedStatusCount = (records: readonly PayloadRecord[]) =>
    records.reduce(
      (total, record) => total + (JSON.stringify(record).match(/"status":"[^"]*failed[^"]*"/g)?.length ?? 0),
      0,
    );

  it("sorts catalog changes into format-only, semantic, new and removed", () => {
    const base = catalogOf(plainTwin, { ...plainTwin, key: "engine-diff-leaving" });
    const same = { ...plainTwin, key: "engine-diff-same" };
    expect(changeBetween(catalogOf(plainTwin), catalogOf(restyledTwin)).lenses).toEqual({ [key]: "format" });
    expect(changeBetween(catalogOf(plainTwin), catalogOf(thicker)).lenses).toEqual({ [key]: "semantic" });
    expect(changeBetween(catalogOf(same), catalogOf(same)).lenses).toEqual({});
    expect(changeBetween(base, catalogOf(thicker, same))).toEqual({
      lenses: { [key]: "semantic", [same.key]: "new" },
      teleconverters: {},
      removedLenses: ["engine-diff-leaving"],
      removedTeleconverters: [],
    });
  });

  it("gives a pair the greater change of its host and its converter", () => {
    const changes = {
      lenses: { host: "format" as const, added: "new" as const },
      teleconverters: { converter: "semantic" as const },
      removedLenses: [],
      removedTeleconverters: [],
    };
    expect(dataChangeOf(changes, { key: "host" })).toBe("format");
    expect(dataChangeOf(changes, { key: "host", teleconverter: "converter" })).toBe("semantic");
    expect(dataChangeOf(changes, { key: "added", teleconverter: "converter" })).toBe("new");
    expect(dataChangeOf(changes, { key: "other", teleconverter: "untouched" })).toBe("unchanged");
  });

  it("finds no engine difference in a data-only change, and reports its impact", () => {
    const headCatalog = catalogOf(thicker);
    const dataChange = dataChangeOf(changeBetween(catalogOf(plainTwin), headCatalog), { key });
    expect(dataChange).toBe("semantic");
    /* Two captures of the head data stand for the two engines; the base data runs on the same engine. */
    const run = createDifferentialRun({ changeClass: "c0", declaredExceptions: [], restricted: false });
    const output = run.addLens({
      lens: key,
      dataChange,
      baseEngine: captureRecords(headCatalog, requests),
      headEngine: captureRecords(headCatalog, requests),
      baseData: plainRecords,
    });
    const summary = run.finish();

    expect(summary.passed).toBe(true);
    expect(summary.engine).toMatchObject({ records: requests.length, recordsDiffering: 0, failing: 0 });
    expect(summary.formatOnly.lenses).toEqual([]);
    expect(summary.dataImpact).toEqual([
      expect.objectContaining({ lens: key, change: "semantic", records: requests.length, blocking: 0, blockers: [] }),
    ]);
    const [impact] = summary.dataImpact;
    expect(impact.recordsDiffering).toBeGreaterThan(0);
    expect(impact.numbersDiffering).toBeGreaterThan(0);
    expect(impact.largest.length).toBeGreaterThan(0);
    expect(output.lines.baseData).toHaveLength(requests.length);
    expect(output.failingRecords).toEqual([]);

    const report = renderDataImpactMarkdown(summary, REPORT_CONTEXT);
    expect(report).toContain(`## ${key} (semantic)`);
    expect(report).toContain("### Largest differences");
    expect(report).not.toContain("### Blocking");
  });

  it("blocks a data change that stops a lens building, fails a ray or makes a value non-finite", () => {
    const broken = captureRecords(catalogOf(unbuildable), requests);
    const stopped = evaluate("semantic", broken, plainRecords);
    expect(stopped.passed).toBe(false);
    expect(stopped.failures).toEqual([expect.stringContaining("Data impact")]);
    expect(stopped.dataImpact[0].blocking).toBe(requests.length);
    expect(stopped.dataImpact[0].blockers[0]).toMatchObject({
      request: "build",
      path: "ok",
      base: "true",
      head: "false",
    });
    expect(renderDataImpactMarkdown(stopped, REPORT_CONTEXT)).toContain("### Blocking");

    const withRay = (status: string) => withChange("traces", [...RAY, "status"], () => status, plainRecords);
    expect(evaluate("semantic", withRay("failed"), plainRecords).dataImpact[0].blocking).toBe(1);
    /* A ray that clips where it passed is a change to review, not to block. So is a failure the base had. */
    expect(evaluate("semantic", withRay("clipped"), plainRecords).passed).toBe(true);
    expect(evaluate("semantic", withRay("failed"), withRay("failed")).passed).toBe(true);

    const nan = withChange("traces", [...RAY, "y"], () => encodeValue(Number.NaN), plainRecords);
    expect(evaluate("semantic", nan, plainRecords).dataImpact[0].blockers).toEqual([
      expect.objectContaining({ kind: "nonFinite", path: "onAxis.rays[1].y" }),
    ]);
    expect(evaluate("semantic", plainRecords, nan).passed).toBe(true);
  });

  it("passes a change whose new failures are all at paths the base data lacks, and counts them", () => {
    /* The case that a count of failed statuses blocked: channels that missed the sensor become usable, and the rays
     * traced for them for the first time hold some that fail. Every fan has the same rays on both sides, and the
     * record holds one failed status on the base data and two on the head data. Nothing that was good became
     * bad. */
    const base = withSamples([channelOf(null), channelOf(null), channelOf(["ok", "failed", "ok"])]);
    const head = withSamples([
      channelOf(["ok", "failed", "clipped"]),
      channelOf(["failed", "ok", "ok"]),
      channelOf(["ok", "ok", "ok"]),
    ]);
    expect([failedStatusCount(base), failedStatusCount(head)]).toEqual([1, 2]);
    const summary = evaluate("semantic", head, base);
    expect(summary).toMatchObject({ passed: true, failures: [], dataImpact: [{ blocking: 0, blockers: [] }] });
    expect(pathsOf(summary)).toEqual({
      ...NO_PATHS,
      /* The ray of the third channel that failed on the base data and is traced through on the head data. */
      statuses: { toFailure: 0, afterFirstClip: 0, fromFailure: 1 },
      /* Each of the two channels gained a field sample of seven statuses and the digests of its three rays. */
      headOnly: { statuses: 20, failedStatuses: 2, nonFinite: 0 },
      statusChanges: {
        /* The two channels, and four rays among their fans and the third channel's. */
        "missed-sensor -> usable": 6,
        "missed-sensor -> clipped": 1,
        "absent -> ok": 7,
        "absent -> converged": 6,
        "absent -> usable": 4,
        "absent -> failed": 2,
        "absent -> clipped": 1,
        "failed -> ok": 1,
      },
    });

    const report = renderDataImpactMarkdown(summary, REPORT_CONTEXT);
    expect(report).not.toContain("### Blocking");
    expect(report).toContain("| Statuses turned to a failure from a status that is none | 0 | blocks |");
    expect(report).toContain("| Statuses turned from a failure to a status that is none | 1 |  |");
    expect(report).toContain("| The head data: work the base data never did | 20 | 2 | 0 |");
    expect(report).toContain("| The base data: work no longer done | 0 | 0 | 0 |");
    /* Each status change is listed with what it does to the gate. None of these blocks. */
    expect(report).toContain("| absent -> failed | 2 |  |");
    expect(report).toContain("| failed -> ok | 1 |  |");
    expect(report).not.toMatch(/-> [a-z-]+ \| \d+ \| blocks \|/);
    /* The most frequent change leads the list. */
    expect(report.indexOf("| absent -> ok | 7 |")).toBeLessThan(report.indexOf("| absent -> failed | 2 |"));
    const summaryReport = renderSummaryMarkdown(summary, REPORT_CONTEXT);
    expect(summaryReport).toContain(`| ${key} | 0 | 0 | 1 | 0 | 0 | 20 / 2 / 0 | 0 / 0 / 0 | 0 |`);
    expect(summaryReport).not.toContain("### Blocking data changes");

    /* Work the head data no longer does is counted the same way, the failure in it too, and blocks nothing: the
     * channel misses the sensor now, which is no failure, and its field sample and its traces are gone. */
    const lost = evaluate("semantic", withSamples([channelOf(null)]), withSamples([channelOf(["ok", "failed", "ok"])]));
    expect(lost).toMatchObject({ passed: true, dataImpact: [{ blocking: 0 }] });
    expect(pathsOf(lost)).toEqual({
      ...NO_PATHS,
      baseOnly: { statuses: 10, failedStatuses: 1, nonFinite: 0 },
      statusChanges: {
        "usable -> missed-sensor": 3,
        "ok -> absent": 4,
        "converged -> absent": 3,
        "usable -> absent": 2,
        "failed -> absent": 1,
      },
    });
    expect(renderDataImpactMarkdown(lost, REPORT_CONTEXT)).toContain(
      "| The base data: work no longer done | 10 | 1 | 0 |",
    );
  });

  it("passes the catalog case that a count of failed statuses blocked, on records of the real engine", () => {
    /* One glass of a catalog lens resolves on the head data and not on the base data. Its chromatic perspective
     * analysis then has channels that reach the sensor where they missed it, and the rays traced for them for the
     * first time hold some that fail. The lens is a source of real records here, and what is asserted is the shape
     * of the change, not its numbers. */
    const id = "panasonic-lumix-s-pro-50-f14";
    const asked = tierRequests("p", { ...requestCatalog(CATALOG), changedLensKeys: [id] }).filter(
      (request) => lensId(request.lens) === id,
    );
    expect(asked.map((request) => request.family)).toContain("analysis");
    const unresolved: SerializedCatalog = {
      ...CATALOG,
      lenses: CATALOG.lenses.map((entry) => {
        if (entry.key !== id) return entry;
        const data = decodeValue(entry.prescription) as LensDataInput;
        const elements = data.elements.map((element, index) =>
          index === data.elements.length - 1 ? { ...element, glass: "A glass no catalog holds" } : element,
        );
        return { ...entry, prescription: encodeValue({ ...data, elements }) };
      }),
    };
    const [base, head] = [captureRecords(unresolved, asked), captureRecords(CATALOG, asked)];
    /* What the count compared: the head data's records hold more failed statuses than the base data's. */
    const gained = failedStatusCount(head) - failedStatusCount(base);
    expect(gained).toBeGreaterThan(0);

    const summary = evaluate("semantic", head, base);
    expect(summary).toMatchObject({
      passed: true,
      failures: [],
      dataImpact: [{ lens: id, blocking: 0, blockers: [] }],
    });
    const paths = pathsOf(summary);
    /* Every one of those failures is at a path the base data has no status at, and nothing turned to a failure
     * or stopped being finite at a path both sides have. */
    expect(paths).toMatchObject({
      statuses: { toFailure: 0, afterFirstClip: 0, fromFailure: 0 },
      numbers: { toNonFinite: 0 },
      outcomes: { toThrown: 0 },
      baseOnly: { statuses: 0, failedStatuses: 0 },
      headOnly: { failedStatuses: gained },
      /* The real shape pairs every array as it is: a fan keeps its rays, and an untraced ray holds no trace. */
      resized: { arrays: 0 },
    });
    expect(paths.headOnly.statuses).toBeGreaterThan(gained);
    expect(paths.statusChanges["missed-sensor -> usable"]).toBeGreaterThan(0);
    expect(paths.statusChanges["absent -> failed"]).toBe(gained);
    /* The other way round the same statuses are work no longer done, and that passes as well. */
    expect(evaluate("semantic", base, head)).toMatchObject({
      passed: true,
      dataImpact: [{ blocking: 0, paths: { baseOnly: { failedStatuses: gained }, statuses: { toFailure: 0 } } }],
    });
  });

  it("blocks a status that turned to a failure at a path both sides have, whatever the record's count of them", () => {
    const fan: Path = ["onAxis", "rays"];
    const failedAt = (ray: number, source: readonly PayloadRecord[] = plainRecords) =>
      withChange("traces", [...fan, ray, "status"], () => "failed", source);
    expect([1, 2].map((ray) => at(plainRecords, "traces", [...fan, ray, "status"]))).toEqual(["ok", "ok"]);

    /* One ray fails on the base data and another on the head data: the record holds one failed status either way.
     * The fan kept its length here, so the paired walk of the engine comparison finds the status as well. */
    const moved = evaluate("semantic", failedAt(1), failedAt(2));
    expect(moved.passed).toBe(false);
    expect(moved.dataImpact[0]).toMatchObject({
      blocking: 1,
      blockers: [
        { request: "traces", path: "onAxis.rays[1].status", kind: "discrete", base: '"ok"', head: '"failed"' },
      ],
    });
    expect(pathsOf(moved)).toEqual({
      ...NO_PATHS,
      statuses: { toFailure: 1, afterFirstClip: 0, fromFailure: 1 },
      statusChanges: { "ok -> failed": 1, "failed -> ok": 1 },
    });

    /* The hole in a count: the same behind a change of shape, where the fan also grew by a ray at its end. The
     * paired walk of the engine comparison reports such a fan once and does not enter it, and the count of failed
     * statuses is one on either side, so a rule that counted them passed this change. */
    const grown = withChange("traces", fan, (rays) => [...(rays as object[]), (rays as object[])[2]], failedAt(1));
    expect([failedStatusCount(failedAt(2)), failedStatusCount(grown)]).toEqual([1, 1]);
    const hidden = evaluate("semantic", grown, failedAt(2));
    expect(hidden.passed).toBe(false);
    expect(hidden.failures).toEqual(["Data impact: 1 blocking difference."]);
    expect(hidden.dataImpact[0]).toMatchObject({ blocking: 1, blockers: [{ path: "onAxis.rays[1].status" }] });
    const rays = (at(plainRecords, "traces", fan) as unknown[]).length;
    const resizedFan = {
      arrays: 1,
      listed: [
        {
          comparison: "impact",
          lens: key,
          state: stateId(DEFAULT_STATE),
          request: "traces",
          path: "onAxis.rays",
          kind: "shape",
          quantity: null,
          base: `array of ${rays}`,
          head: `array of ${rays + 1}`,
          measure: null,
          budget: null,
        },
      ],
    };
    expect(pathsOf(hidden)).toEqual({
      ...NO_PATHS,
      statuses: { toFailure: 1, afterFirstClip: 0, fromFailure: 1 },
      headOnly: { statuses: 1, failedStatuses: 0, nonFinite: 0 },
      resized: resizedFan,
      statusChanges: { "ok -> failed": 1, "failed -> ok": 1, "absent -> ok": 1 },
    });

    /* Both reports name the path. */
    const report = renderDataImpactMarkdown(hidden, REPORT_CONTEXT);
    expect(report).toContain("### Blocking (1)");
    expect(report).toContain('`onAxis.rays[1].status` is "ok" on the base data and "failed" on the head data.');
    expect(report).toContain("| Statuses turned to a failure from a status that is none | 1 | blocks |");
    expect(report).toContain("| ok -> failed | 1 | blocks |");
    expect(report).toContain("| failed -> ok | 1 |  |");
    const summaryReport = renderSummaryMarkdown(hidden, REPORT_CONTEXT);
    expect(summaryReport).toContain("- Data impact: 1 blocking difference.");
    expect(summaryReport).toContain(`| ${key} | 1 | 1 | 1 | 0 | 0 | 1 / 0 / 0 | 0 / 0 / 0 | 1 |`);
    expect(summaryReport).toContain("### Blocking data changes (1)");
    expect(summaryReport).toContain(
      `- ${key}, \`traces\`, ${stateId(DEFAULT_STATE)}: \`onAxis.rays[1].status\` is "ok" on the base data and ` +
        '"failed" on the head data.',
    );
  });

  it("pairs an array that changed length by index, and says where it did so", () => {
    /* The elements of such an array are at paths both sides have only while nothing was put in or taken out ahead
     * of them. Where something was, an index holds two different things, and the rule can miss a status that turned
     * to a failure, or find one that did not. The verdict stands as the paths give it, and the report names every
     * such array that holds what the rule reads, so a reader can check the pairing. */
    const fan: Path = ["onAxis", "rays"];
    const raysOf = (records: readonly PayloadRecord[]) => at(records, "traces", fan) as { status: string }[];
    const withFan = (change: (rays: { status: string }[]) => object[]) =>
      withChange("traces", fan, (rays) => change(rays as { status: string }[]), plainRecords);
    const count = raysOf(plainRecords).length;
    expect(raysOf(plainRecords).map((ray) => ray.status)).toEqual(new Array(count).fill("ok"));
    const listedFan = (base: number, head: number) => [
      expect.objectContaining({
        request: "traces",
        path: "onAxis.rays",
        kind: "shape",
        base: `array of ${base}`,
        head: `array of ${head}`,
      }),
    ];

    /* A miss: a ray is put in ahead of the others and the last ray fails. That ray was good on the base data, and
     * it is now one index further on, where the base data has nothing. */
    const shifted = withFan((rays) => [rays[0], ...rays.slice(0, -1), { ...rays[count - 1], status: "failed" }]);
    const missed = evaluate("semantic", shifted, plainRecords);
    expect(missed).toMatchObject({ passed: true, dataImpact: [{ blocking: 0 }] });
    expect(pathsOf(missed)).toMatchObject({
      statuses: { toFailure: 0, afterFirstClip: 0, fromFailure: 0 },
      headOnly: { statuses: 1, failedStatuses: 1 },
      resized: { arrays: 1, listed: listedFan(count, count + 1) },
    });
    const report = renderDataImpactMarkdown(missed, REPORT_CONTEXT);
    expect(report).toContain(
      "1 array that holds a status, an outcome or a computed non-finite number changed length and was paired by " +
        "index (1 listed).",
    );
    expect(report).toContain(
      `- \`traces\`, ${stateId(DEFAULT_STATE)}: \`onAxis.rays\` is array of ${count} on the base data and ` +
        `array of ${count + 1} on the head data.`,
    );
    expect(renderSummaryMarkdown(missed, REPORT_CONTEXT)).toContain(
      `| ${key} | 0 | 0 | 0 | 0 | 0 | 1 / 1 / 0 | 0 / 0 / 0 | 1 |`,
    );

    /* A block that is none: the first ray is taken out, and the last one failed on both sides. */
    const failedLast = withFan((rays) => [...rays.slice(0, -1), { ...rays[count - 1], status: "failed" }]);
    const shortened = withFan((rays) => [...rays.slice(1, -1), { ...rays[count - 1], status: "failed" }]);
    const found = evaluate("semantic", shortened, failedLast);
    expect(found).toMatchObject({
      passed: false,
      dataImpact: [{ blocking: 1, blockers: [{ path: `onAxis.rays[${count - 2}].status` }] }],
    });
    expect(pathsOf(found)).toMatchObject({
      baseOnly: { statuses: 1, failedStatuses: 1 },
      resized: { arrays: 1, listed: listedFan(count, count - 1) },
    });

    /* An array of finite numbers that changed length holds nothing the rule reads, and is not listed: a hit
     * column of a ray that crossed another number of surfaces. One that holds a number that is not finite is. */
    const residuals: Path = [...RAY, "hits", "columns", "residual"];
    const column = (...added: unknown[]) =>
      withChange("traces", residuals, (held) => [...(held as unknown[]), ...added], plainRecords);
    expect(pathsOf(evaluate("semantic", column(0), plainRecords))).toEqual(NO_PATHS);
    expect(pathsOf(evaluate("semantic", column(0, encodeValue(Number.NaN)), plainRecords))).toMatchObject({
      headOnly: { nonFinite: 1 },
      resized: { arrays: 1, listed: [{ path: "onAxis.rays[1].hits.columns.residual" }] },
    });
    /* Nor is an array of the same length on both sides, whatever it holds. */
    expect(pathsOf(evaluate("semantic", failedLast, plainRecords)).resized).toEqual({ arrays: 0, listed: [] });

    /* The list keeps the first ten arrays of a lens, and the count has them all. */
    const fans = (length: number) =>
      withSamples(Array.from({ length: 12 }, () => ({ rayFan: fanOf(new Array<TraceStatus>(length).fill("ok")) })));
    const many = pathsOf(evaluate("semantic", fans(3), fans(2)));
    expect(many.resized.arrays).toBe(12);
    expect(many.resized.listed).toHaveLength(10);
    expect(many.resized.listed[9]).toMatchObject({ path: "samples[9].rayFan.samples" });
  });

  it("blocks a solve that turned to a failure although what it went on to compute is gone", () => {
    /* The statuses that can turn to a failure with work under them are solves: a chief-ray solve whose root solve
     * no longer evaluates returns no traces, and the engine calls its channel `chief-unreachable` and traces no ray
     * of its fan. What the channel went on to compute is at paths only the base data has now, which is counted and
     * no gate. The gate is the root solve's own status, at a path both sides have. */
    const usable = withSamples([channelOf(["ok", "failed", "ok"])]);
    const stopped = evaluate("semantic", withSamples([channelWithoutRoot("evaluation-failed")]), usable);
    /* The two traces of the chief-ray solve, the two statuses of the sensor lock and the digests of three rays. */
    const gone = { statuses: 7, failedStatuses: 1, nonFinite: 0 };
    expect(stopped.passed).toBe(false);
    expect(stopped.dataImpact[0]).toMatchObject({
      blocking: 1,
      blockers: [
        {
          request: "traces",
          path: "samples[0].fieldSample.chiefSolve.rootSolve.status",
          base: '"converged"',
          head: '"evaluation-failed"',
        },
      ],
    });
    expect(pathsOf(stopped)).toEqual({
      ...NO_PATHS,
      statuses: { toFailure: 1, afterFirstClip: 0, fromFailure: 0 },
      baseOnly: gone,
      statusChanges: {
        "converged -> evaluation-failed": 1,
        /* The channel, its field sample and its chief-ray solve. None of them is a failure, and none blocks. */
        "usable -> chief-unreachable": 3,
        "usable -> missed-sensor": 2,
        "ok -> absent": 4,
        "converged -> absent": 2,
        "failed -> absent": 1,
      },
    });
    expect(renderDataImpactMarkdown(stopped, REPORT_CONTEXT)).toContain(
      "| converged -> evaluation-failed | 1 | blocks |",
    );

    /* A root solve that ends without a root in any other way is no failure, and the same loss of work passes: the
     * change is listed. So does a channel that only stopped being usable, as a perspective sample and a ray of a
     * fan do: the engine writes no failure for either. */
    for (const status of ["unbracketed", "iteration-limit", "invalid-input"]) {
      const summary = evaluate("semantic", withSamples([channelWithoutRoot(status)]), usable);
      expect(summary.passed, status).toBe(true);
      expect(pathsOf(summary), status).toMatchObject({
        statuses: { toFailure: 0, afterFirstClip: 0, fromFailure: 0 },
        baseOnly: gone,
        statusChanges: { [`converged -> ${status}`]: 1 },
      });
    }
    /* Were a sample itself to say `failed`, its status is at a path both sides have and would block the same way,
     * with everything under it gone. */
    const failedSample = evaluate("semantic", withSamples([{ ...channelOf(null), status: "failed" }]), usable);
    expect(failedSample.dataImpact[0]).toMatchObject({ blocking: 1, blockers: [{ path: "samples[0].status" }] });
  });

  it("reads a failure as a status that says failed, whatever the status it turned from", () => {
    const only = (status: unknown) => withSamples([{ status }]);
    const became = (status: string, from = "usable") => evaluate("semantic", only(status), only(from));
    /* The three failures the engine writes: a traced ray, a chief-ray solve, and a root solve or a sensor lock. */
    for (const status of ["failed", "bracket-failed", "evaluation-failed"]) {
      const summary = became(status);
      expect(summary.passed, status).toBe(false);
      expect(summary.dataImpact[0], status).toMatchObject({
        blocking: 1,
        blockers: [{ request: "traces", path: "samples[0].status", base: '"usable"', head: JSON.stringify(status) }],
      });
      expect(pathsOf(summary), status).toEqual({
        ...NO_PATHS,
        statuses: { toFailure: 1, afterFirstClip: 0, fromFailure: 0 },
        statusChanges: { [`usable -> ${status}`]: 1 },
      });
    }
    /* Every other status is an outcome a prescription can move between. Such a change is listed and does not
     * block. */
    for (const status of [
      "missed-sensor",
      "clipped",
      "chief-unreachable",
      "outside-projection-domain",
      "out-of-domain",
      "unbracketed",
      "iteration-limit",
      "invalid-input",
      "paraxial-fallback",
      "unconverged",
      "unavailable",
    ]) {
      const summary = became(status);
      expect(summary.passed, status).toBe(true);
      expect(pathsOf(summary), status).toEqual({ ...NO_PATHS, statusChanges: { [`usable -> ${status}`]: 1 } });
    }

    /* Without clip events to prove an earlier clip, a failure still blocks from a status that held no result.
     * Solve failures need no clip evidence. */
    for (const [from, to] of [
      ["clipped", "failed"],
      ["unbracketed", "evaluation-failed"],
      ["out-of-domain", "bracket-failed"],
    ]) {
      const summary = became(to, from);
      expect(summary.passed, from).toBe(false);
      expect(summary.dataImpact[0], from).toMatchObject({
        blocking: 1,
        blockers: [{ path: "samples[0].status", base: JSON.stringify(from), head: JSON.stringify(to) }],
      });
      expect(renderDataImpactMarkdown(summary, REPORT_CONTEXT), from).toContain(`| ${from} -> ${to} | 1 | blocks |`);
    }

    /* One failure for another is no new failure, and neither is a failure the base data had. */
    expect(evaluate("semantic", only("bracket-failed"), only("failed"))).toMatchObject({
      passed: true,
      dataImpact: [{ paths: { ...NO_PATHS, statusChanges: { "failed -> bracket-failed": 1 } } }],
    });
    expect(
      renderDataImpactMarkdown(evaluate("semantic", only("bracket-failed"), only("failed")), REPORT_CONTEXT),
    ).toContain("| failed -> bracket-failed | 1 |  |");
    /* A side has a status where it holds a string. Against a member that holds none, or no member at all, a
     * failure is the head data's alone: counted, and no gate. */
    for (const base of [only(null), withSamples([{}])]) {
      const summary = evaluate("semantic", only("failed"), base);
      expect(summary.passed).toBe(true);
      expect(pathsOf(summary)).toEqual({
        ...NO_PATHS,
        headOnly: { statuses: 1, failedStatuses: 1, nonFinite: 0 },
        statusChanges: { "absent -> failed": 1 },
      });
    }
  });

  it("blocks a number that turned non-finite at a path both sides have, and counts one that one side has alone", () => {
    const nan = encodeValue(Number.NaN);
    const residuals: Path = [...RAY, "hits", "columns", "residual"];
    const lone = { statuses: 0, failedStatuses: 0, nonFinite: 1 };

    const inPlace = withChange("traces", [...RAY, "y"], () => nan, plainRecords);
    const lost = evaluate("semantic", inPlace, plainRecords);
    expect(lost.passed).toBe(false);
    expect(lost.dataImpact[0]).toMatchObject({
      blocking: 1,
      blockers: [{ request: "traces", path: "onAxis.rays[1].y", kind: "nonFinite", head: JSON.stringify(nan) }],
    });
    expect(pathsOf(lost)).toEqual({ ...NO_PATHS, numbers: { toNonFinite: 1, fromNonFinite: 0 } });
    /* The other way round the number became finite, which is counted and blocks nothing. */
    const found = evaluate("semantic", plainRecords, inPlace);
    expect(found.passed).toBe(true);
    expect(pathsOf(found)).toEqual({ ...NO_PATHS, numbers: { toNonFinite: 0, fromNonFinite: 1 } });

    /* Behind a change of shape too: the first residual of a column that also grew by a hit. */
    const grown = withChange(
      "traces",
      residuals,
      (column) => [nan, ...(column as unknown[]).slice(1), 0],
      plainRecords,
    );
    expect(evaluate("semantic", grown, plainRecords).dataImpact[0]).toMatchObject({
      blocking: 1,
      blockers: [{ kind: "nonFinite", path: "onAxis.rays[1].hits.columns.residual[0]" }],
    });

    /* A non-finite number at a path only the head data has is work the base data never did. Each of these three
     * changes one record's count of them from none to one. */
    const oneSided: Record<string, [head: PayloadRecord[], base: PayloadRecord[]]> = {
      "NaN appended to a longer array": [
        withChange("traces", residuals, (column) => [...(column as unknown[]), nan], plainRecords),
        plainRecords,
      ],
      "NaN where the base data holds no number": [
        withChange("traces", [...RAY, "imagePoint"], () => nan, plainRecords),
        withChange("traces", [...RAY, "imagePoint"], () => null, plainRecords),
      ],
      "NaN in a member the base data lacks": [
        withChange("traces", RAY, (ray) => ({ ...(ray as object), added: nan }), plainRecords),
        plainRecords,
      ],
    };
    for (const [shape, [head, base]] of Object.entries(oneSided)) {
      /* The column that changed length is listed as paired by index, since it holds a number the rule reads. */
      const resized = {
        arrays: shape === "NaN appended to a longer array" ? 1 : 0,
        listed: shape === "NaN appended to a longer array" ? [expect.objectContaining({ kind: "shape" })] : [],
      };
      const gained = evaluate("semantic", head, base);
      expect(gained.passed, shape).toBe(true);
      expect(pathsOf(gained), shape).toEqual({ ...NO_PATHS, headOnly: lone, resized });
      const dropped = evaluate("semantic", base, head);
      expect(dropped.passed, shape).toBe(true);
      expect(pathsOf(dropped), shape).toEqual({ ...NO_PATHS, baseOnly: lone, resized });
    }
    expect(
      renderDataImpactMarkdown(evaluate("semantic", ...oneSided["NaN appended to a longer array"]), REPORT_CONTEXT),
    ).toContain("| The head data: work the base data never did | 0 | 0 | 1 |");

    /* A non-finite number that hands the prescription back was authored: a plane element's focal length. It is
     * no blocker where both sides have it, and is not counted where one has. */
    const infinite = encodeValue(Number.POSITIVE_INFINITY);
    const planeElement = withChange("build", ["elements", 0, "fl"], () => infinite, plainRecords);
    expect(evaluate("semantic", planeElement, plainRecords)).toMatchObject({
      passed: true,
      dataImpact: [{ blocking: 0, paths: NO_PATHS }],
    });
    const anotherElement = withChange(
      "build",
      ["elements"],
      (elements) => [...(elements as object[]), { ...(elements as object[])[0], fl: infinite }],
      plainRecords,
    );
    expect(evaluate("semantic", anotherElement, plainRecords)).toMatchObject({
      passed: true,
      dataImpact: [{ paths: { headOnly: { nonFinite: 0 } } }],
    });
    /* One the engine computed is neither. */
    const heights = (change: (heights: unknown[]) => unknown[]) =>
      withChange("build", ["rayHeights"], (held) => change(held as unknown[]), plainRecords);
    expect(
      evaluate(
        "semantic",
        heights(([, ...rest]) => [infinite, ...rest]),
        plainRecords,
      ).dataImpact[0],
    ).toMatchObject({
      blocking: 1,
      blockers: [{ request: "build", kind: "nonFinite", path: "rayHeights[0]" }],
    });
    const longer = evaluate(
      "semantic",
      heights((held) => [...held, infinite]),
      plainRecords,
    );
    expect(longer).toMatchObject({ passed: true, dataImpact: [{ paths: { headOnly: lone } }] });
  });

  it("leaves a status the prescription hands back out of the rule, as it does an authored number", () => {
    /* A source erratum carries a status of its own, `corrected` or `unresolved`, and the build record hands the
     * prescription back under `data`. Such a status is authored: it says nothing of what the engine did. */
    const erratum = (status: string) => ({ status, note: "The source prints two values for one gap." });
    const errata = (...list: object[]) => withChange("build", ["data", "sourceErrata"], () => list, plainRecords);
    expect(at(plainRecords, "build", ["data", "sourceErrata"])).toBeUndefined();

    /* An erratum the head data added is no work the base data never did, in a new list or in one that grew. */
    for (const base of [plainRecords, errata(erratum("corrected"))]) {
      const added = evaluate("semantic", errata(erratum("corrected"), erratum("unresolved")), base);
      expect(added.passed).toBe(true);
      expect(pathsOf(added)).toEqual(NO_PATHS);
      expect(pathsOf(evaluate("semantic", base, errata(erratum("corrected"), erratum("unresolved"))))).toEqual(
        NO_PATHS,
      );
    }
    /* And one whose status says `failed` is no failure of the engine, at a path both sides have or at one. */
    const reworded = errata(erratum("failed to reconcile"));
    expect(evaluate("semantic", reworded, errata(erratum("unresolved")))).toMatchObject({
      passed: true,
      dataImpact: [{ blocking: 0, blockers: [], paths: NO_PATHS }],
    });
    expect(pathsOf(evaluate("semantic", reworded, plainRecords))).toEqual(NO_PATHS);
    /* The records of a new lens are counted by the same reading. */
    expect(evaluate("new", reworded, null).dataImpact[0].recordCounts).toEqual(
      evaluate("new", plainRecords, null).dataImpact[0].recordCounts,
    );
    /* A status of the same name that the engine wrote, in the same record, is a status still. */
    const computed = (status: string) => withChange("build", ["pupilSolve"], () => ({ status }), plainRecords);
    expect(evaluate("semantic", computed("bracket-failed"), computed("converged")).dataImpact[0]).toMatchObject({
      blocking: 1,
      blockers: [{ request: "build", path: "pupilSolve.status" }],
    });
  });

  it("blocks a record or a job that returned and now throws, and counts what one that now returns holds", () => {
    const job = "computePerspectiveFocusAnalysis";
    const threw = withChange("analysis", ["jobs", job], () => ({
      ok: false,
      error: { name: "Error", message: "no focus" },
    }));
    const stopped = evaluate("semantic", threw, SERENAR_RECORDS);
    expect(stopped.passed).toBe(false);
    expect(stopped.dataImpact[0]).toMatchObject({
      lens: SERENAR,
      blocking: 1,
      blockers: [{ request: "analysis", path: `jobs.${job}.ok`, kind: "discrete", base: "true", head: "false" }],
    });
    /* What the job returned on the base data is work no longer done. */
    const held = pathsOf(stopped).baseOnly;
    expect(held.statuses).toBeGreaterThan(0);
    expect(pathsOf(stopped)).toEqual({
      ...NO_PATHS,
      outcomes: { toThrown: 1, fromThrown: 0 },
      baseOnly: held,
      statusChanges: expect.any(Object),
    });

    /* The other way round the job's result is work the base data never did. Its statuses are counted, a failed
     * one among them too, and none of them blocks. */
    const failedInside = withChange(
      "analysis",
      ["jobs", job, "value", "samples", 0, "fieldSample", "chiefTrace", "status"],
      () => "failed",
    );
    const started = evaluate("semantic", failedInside, threw);
    expect(started).toMatchObject({ passed: true, dataImpact: [{ blocking: 0, blockers: [] }] });
    expect(pathsOf(started)).toEqual({
      ...NO_PATHS,
      outcomes: { toThrown: 0, fromThrown: 1 },
      headOnly: { ...held, failedStatuses: held.failedStatuses + 1 },
      statusChanges: expect.any(Object),
    });

    /* A lens that no longer builds is every one of its records throwing where it returned. */
    const broken = captureRecords(catalogOf(unbuildable), requests);
    const unbuilt = evaluate("semantic", broken, plainRecords);
    expect(unbuilt.dataImpact[0].blocking).toBe(requests.length);
    expect(pathsOf(unbuilt).outcomes).toEqual({ toThrown: requests.length, fromThrown: 0 });
    /* And one that builds again blocks nothing. */
    const rebuilt = evaluate("semantic", plainRecords, broken);
    expect(rebuilt.passed).toBe(true);
    expect(pathsOf(rebuilt).outcomes).toEqual({ toThrown: 0, fromThrown: requests.length });
  });

  it("reads the digest of a nested trace as it reads any object at a path both sides have", () => {
    const digest: Path = [
      "jobs",
      "computePerspectiveFocusAnalysis",
      "value",
      "samples",
      0,
      "fieldSample",
      "chiefTrace",
    ];
    const path = "jobs.computePerspectiveFocusAnalysis.value.samples[0].fieldSample.chiefTrace";
    const withDigest = (member: string, value: unknown, source: readonly PayloadRecord[] = SERENAR_RECORDS) =>
      withChange("analysis", [...digest, member], () => value, source);
    expect(at(SERENAR_RECORDS, "analysis", [...digest, "status"])).toBe("ok");

    /* Its status is a status. */
    const failed = evaluate("semantic", withDigest("status", "failed"), SERENAR_RECORDS);
    expect(failed.dataImpact[0]).toMatchObject({
      blocking: 1,
      blockers: [{ request: "analysis", path: `${path}.status`, base: '"ok"', head: '"failed"' }],
    });
    /* The reports give such a path whole, which a table cell would cut. */
    const named = `\`${path}.status\` is "ok" on the base data and "failed" on the head data.`;
    expect(renderDataImpactMarkdown(failed, REPORT_CONTEXT)).toContain(named);
    expect(renderSummaryMarkdown(failed, REPORT_CONTEXT)).toContain(named);
    expect(evaluate("semantic", withDigest("status", "clipped"), SERENAR_RECORDS).passed).toBe(true);
    /* Its two hashes are neither a status nor a number. What changed inside the trace is a difference to review,
     * and blocks only through the members beside the hashes. */
    const rehashed = withDigest("outcome", "0".repeat(64), withDigest("hash", "0".repeat(64)));
    expect(evaluate("semantic", rehashed, SERENAR_RECORDS)).toMatchObject({
      passed: true,
      dataImpact: [{ blocking: 0, recordsDiffering: 1, transitions: 1, paths: NO_PATHS }],
    });
    /* Its largest residual share is a number: one that turned infinite blocks, and one where the base data has
     * none is the head data's alone. */
    const infinite = encodeValue(Number.POSITIVE_INFINITY);
    expect(evaluate("semantic", withDigest("residualShare", infinite), SERENAR_RECORDS).dataImpact[0]).toMatchObject({
      blocking: 1,
      blockers: [{ kind: "nonFinite", path: `${path}.residualShare` }],
    });
    const unshared = evaluate("semantic", withDigest("residualShare", infinite), withDigest("residualShare", null));
    expect(unshared.passed).toBe(true);
    expect(pathsOf(unshared)).toEqual({ ...NO_PATHS, headOnly: { statuses: 0, failedStatuses: 0, nonFinite: 1 } });
  });

  it("counts every blocker past those it lists, so no cap can pass a blocked change", () => {
    const fan = (trace: TraceStatus, rays: number) =>
      withSamples([channelOf(new Array<TraceStatus>(rays).fill(trace))]);
    const many = evaluate("semantic", fan("failed", 25), fan("ok", 25));
    expect(many.passed).toBe(false);
    expect(many.failures).toEqual(["Data impact: 25 blocking differences."]);
    expect(many.dataImpact[0].blocking).toBe(25);
    expect(many.dataImpact[0].blockers).toHaveLength(10);
    expect(many.dataImpact[0].blockers[9]).toMatchObject({ path: "samples[0].rayFan.samples[9].trace.status" });
    expect(pathsOf(many).statuses).toEqual({ toFailure: 25, afterFirstClip: 0, fromFailure: 0 });
    expect(renderDataImpactMarkdown(many, REPORT_CONTEXT)).toContain("### Blocking (first 10 of 25)");
    expect(renderSummaryMarkdown(many, REPORT_CONTEXT)).toContain("### Blocking data changes (first 10 of 25)");

    /* The list is capped for each kind of blocker apart: a number that turned non-finite in a later record is
     * still named. */
    const nan = encodeValue(Number.NaN);
    const withNumber = withChange("chiefSolves", ["halfFieldDeg"], () => nan, fan("failed", 25));
    const both = evaluate("semantic", withNumber, fan("ok", 25));
    expect(both.failures).toEqual(["Data impact: 26 blocking differences."]);
    expect(both.dataImpact[0].blockers).toHaveLength(11);
    expect(both.dataImpact[0].blockers[10]).toMatchObject({
      request: "chiefSolves",
      kind: "nonFinite",
      path: "halfFieldDeg",
    });

    /* The list of status changes is capped as well, and counts what it leaves out. A status that turned to a
     * failure past that cap blocks like any other, and is named. */
    const distinct = (prefix: string, last: string) =>
      withSamples([...Array.from({ length: 70 }, (_, index) => ({ status: `${prefix}${index}` })), { status: last }]);
    const crowded = evaluate("semantic", distinct("after", "failed"), distinct("before", "ok"));
    expect(crowded.passed).toBe(false);
    expect(crowded.dataImpact[0]).toMatchObject({ blocking: 1, blockers: [{ path: "samples[70].status" }] });
    expect(Object.keys(pathsOf(crowded).statusChanges)).toHaveLength(64);
    expect(pathsOf(crowded).statusChangesUnlisted).toBe(7);
    expect(renderDataImpactMarkdown(crowded, REPORT_CONTEXT)).toContain("| any other change | 7 |");
  });

  it("reports a new lens, and blocks it only when it does not build", () => {
    const added = evaluate("new", plainRecords, null);
    expect(added.passed).toBe(true);
    expect(added.dataImpact).toEqual([expect.objectContaining({ lens: key, change: "new", blocking: 0 })]);
    /* It has no base data to pair a path with, so nothing of it is judged path by path. */
    expect(added.dataImpact[0].paths).toBeUndefined();
    const broken = evaluate("new", captureRecords(catalogOf(unbuildable), requests), null);
    expect(broken.passed).toBe(false);
    expect(broken.dataImpact[0].blockers).toEqual([expect.objectContaining({ request: "build", path: "ok" })]);
    /* Both reports name the record, and the summary has no row of path counts for a lens with no base data. */
    const named = "`build`, lens: `ok` is absent on the base data and false (";
    const impactReport = renderDataImpactMarkdown(broken, REPORT_CONTEXT);
    expect(impactReport).toContain(`- ${named}`);
    const summaryReport = renderSummaryMarkdown(broken, REPORT_CONTEXT);
    expect(summaryReport).toContain("### Blocking data changes (1)");
    expect(summaryReport).toContain(`- ${key}, ${named}`);
    expect(summaryReport).not.toContain("Changed lenses (");
    /* The engine's message for a lens that does not build lists its errors on lines of their own. A report writes
     * the blocker as one line and cuts the message as it cuts a table cell, so the list it is in stays a list. */
    const message = broken.dataImpact[0].blockers[0].head;
    expect(message).toMatch(/^false \(.+\n.+\)$/s);
    expect(message.length).toBeGreaterThan(80);
    for (const report of [impactReport, summaryReport]) {
      const lines = report.split("\n");
      const index = lines.findIndex((line) => line.includes(named));
      expect(lines[index]).toMatch(/and false \(Lens data .{1,62}\.\.\. on the head data\.$/);
      expect(lines[index + 1]).toBe("");
      expect(report).not.toContain(message);
    }
  });

  it("counts what the records of a new lens hold, record by record, and blocks on none of it", () => {
    /* A new lens has no base data to count a failed status or a non-finite number against, so what would block a
     * changed lens only shows here. The impact report lists it for review. */
    const nan = encodeValue(Number.NaN);
    const state = stateId(DEFAULT_STATE);
    const before = evaluate("new", plainRecords, null).dataImpact[0].recordCounts!;
    expect(before.map(({ state: at, request }) => [at, request])).toEqual(
      requests.map((request) => [stateId(request.state), request.family]),
    );
    const countsOf = (counts: typeof before, request: RequestFamily) =>
      counts.find((count) => count.request === request)!;

    const failedRay = withChange("traces", [...RAY, "status"], () => "failed", plainRecords);
    const lostHeight = withChange("traces", [...RAY, "y"], () => nan, failedRay);
    const holding = withChange("chiefSolves", ["solves", 1, "yLaunch"], () => nan, lostHeight);
    const added = evaluate("new", holding, null);
    expect(added).toMatchObject({ passed: true, failures: [], dataImpact: [{ change: "new", blocking: 0 }] });
    const after = added.dataImpact[0].recordCounts!;
    const traces = countsOf(after, "traces");
    expect(traces).toEqual({
      state,
      request: "traces",
      failedStatuses: countsOf(before, "traces").failedStatuses + 1,
      nonFinite: countsOf(before, "traces").nonFinite + 1,
    });
    expect(countsOf(after, "chiefSolves")).toEqual({
      ...countsOf(before, "chiefSolves"),
      nonFinite: countsOf(before, "chiefSolves").nonFinite + 1,
    });
    expect(after.filter(({ request }) => request !== "traces" && request !== "chiefSolves")).toEqual(
      before.filter(({ request }) => request !== "traces" && request !== "chiefSolves"),
    );

    const report = renderDataImpactMarkdown(added, REPORT_CONTEXT);
    const total = (member: "failedStatuses" | "nonFinite") => after.reduce((sum, count) => sum + count[member], 0);
    expect(report).toContain("### Failed statuses and computed non-finite numbers");
    expect(report).toContain(
      `For review, and no gate: there is no base data to count these against. The ${requests.length} records hold ` +
        `${total("failedStatuses")} failed statuses and ${total("nonFinite")} computed non-finite numbers`,
    );
    expect(report).toContain(`| ${state} | traces | ${traces.failedStatuses} | ${traces.nonFinite} |`);
    expect(report).toContain(`| ${state} | chiefSolves | 0 | ${countsOf(after, "chiefSolves").nonFinite} |`);
    /* Every record has its line, one that holds neither as well. */
    expect(countsOf(after, "layout")).toMatchObject({ failedStatuses: 0, nonFinite: 0 });
    expect(report).toContain(`| ${state} | layout | 0 | 0 |`);
    expect(report.match(/^\| [^|]+ \| \w+ \| \d+ \| \d+ \|$/gm)).toHaveLength(requests.length);

    /* A non-finite number that hands the prescription back was authored, and is not counted here either. */
    const planeElement = withChange("build", ["elements", 0, "fl"], () => encodeValue(Infinity), plainRecords);
    expect(evaluate("new", planeElement, null).dataImpact[0].recordCounts).toEqual(before);
    /* A record that threw has nothing to count, and says so. */
    const threw = plainRecords.map((record) =>
      record.request === "chiefSolves"
        ? { ...record, payload: { ok: false as const, error: { name: "Error", message: "no chief ray" } } }
        : record,
    );
    const thrown = evaluate("new", threw, null);
    expect(countsOf(thrown.dataImpact[0].recordCounts!, "chiefSolves")).toEqual({
      state,
      request: "chiefSolves",
      failedStatuses: 0,
      nonFinite: 0,
      threw: true,
    });
    expect(renderDataImpactMarkdown(thrown, REPORT_CONTEXT)).toContain(`| ${state} | chiefSolves | threw | threw |`);
    /* A changed lens is judged path by path against its base data, so it carries no such list. The same records
     * block there: the ray and the two numbers were good on the base data. */
    expect(evaluate("semantic", holding, plainRecords).dataImpact[0]).toMatchObject({ blocking: 3 });
    expect(evaluate("semantic", holding, plainRecords).dataImpact[0].recordCounts).toBeUndefined();
  });

  it("passes a format-only change that leaves every record identical", () => {
    const head = captureRecords(catalogOf(restyledTwin), requests);
    for (const changeClass of CLASSES) {
      const summary = evaluate("format", head, plainRecords, changeClass);
      expect(summary.passed).toBe(true);
      expect(summary.formatOnly).toMatchObject({ lenses: [key], records: requests.length, recordsDiffering: 0 });
      expect(summary.dataImpact).toEqual([]);
    }
  });

  it("fails a format-only change that alters a value, in every class", () => {
    const altered = withChange("traces", HIT_POINT_Y, (y) => Number(y) * (1 + Number.EPSILON), plainRecords);
    for (const changeClass of CLASSES) {
      const summary = evaluate("format", plainRecords, altered, changeClass);
      expect(summary.passed).toBe(false);
      expect(summary.failures).toEqual([expect.stringContaining("Format-only data change: 1 difference")]);
      expect(summary.formatOnly.failures).toEqual([
        expect.objectContaining({ comparison: "format", path: "onAxis.rays[1].hits.columns.point[2][1]" }),
      ]);
      expect(summary.engine.failing).toBe(0);
    }
    expect(() => evaluate("format", plainRecords, null)).toThrow("do not answer the same requests");
  });

  /** What the base engine returns for a prescription it cannot build: every request throws. */
  const unevaluated = plainRecords.map((record) => ({
    ...record,
    payload: { ok: false as const, error: { name: "Error", message: "unknown prescription format" } },
  }));
  const withExceptions = (
    declaredExceptions: string[],
    baseEngine: readonly PayloadRecord[],
    restricted = false,
  ): RunSummary => {
    const run = createDifferentialRun({ changeClass: "c0", declaredExceptions, restricted });
    run.addLens({ lens: key, dataChange: "unchanged", baseEngine, headEngine: plainRecords });
    return run.finish();
  };

  it("fails on an uncompared lens that is not declared, and passes once it is", () => {
    const undeclared = withExceptions([], unevaluated);
    expect(undeclared.passed).toBe(false);
    expect(undeclared.uncompared).toEqual([{ lens: key, reason: "Error: unknown prescription format" }]);
    expect(undeclared.exceptions).toMatchObject({ undeclared: [key], comparable: [], unknown: [] });
    expect(undeclared.failures).toEqual([`Not compared and not declared as an exception: ${key}.`]);
    /* Nothing of an uncompared lens counts as compared, and nothing of it is a violation. */
    expect(undeclared.engine).toMatchObject({ records: 0, failing: 0 });

    const declared = withExceptions([key], unevaluated);
    expect(declared.passed).toBe(true);
    expect(renderSummaryMarkdown(declared, REPORT_CONTEXT)).toContain("unknown prescription format");
  });

  it("fails on a declared exception that turns out to be comparable", () => {
    const summary = withExceptions([key], structuredClone(plainRecords));
    expect(summary.passed).toBe(false);
    expect(summary.uncompared).toEqual([]);
    expect(summary.exceptions.comparable).toEqual([key]);
    expect(summary.failures).toEqual([`Declared as an exception and compared after all: ${key}.`]);
  });

  it("fails on a declared exception the whole tier never met, and lets a narrowed run pass it by", () => {
    const whole = withExceptions(["engine-diff-absent"], structuredClone(plainRecords));
    expect(whole.failures).toEqual(["Declared as an exception and not in the run: engine-diff-absent."]);
    expect(withExceptions(["engine-diff-absent"], structuredClone(plainRecords), true).passed).toBe(true);
  });

  it("leaves a lens that builds on neither engine to the data rules when they judge it, and fails it when not", () => {
    const broken = captureRecords(catalogOf(unbuildable), requests);
    /* New, or changed from a prescription that built: the data rules block it, and its thrown records are theirs. */
    for (const summary of [evaluate("new", broken, null), evaluate("semantic", broken, plainRecords)]) {
      expect(summary.thrownOnBothEngines.records).toBe(0);
      expect(summary.failures).toEqual([expect.stringContaining("Data impact")]);
    }
    const reformatted = evaluate("format", broken, plainRecords);
    expect(reformatted.thrownOnBothEngines.records).toBe(0);
    expect(reformatted.failures).toEqual([expect.stringContaining("Format-only data change")]);

    /* The same data on both sides, or data changed from a prescription that did not build either: no data rule
     * blocks, and a lens whose every record threw must not pass as compared. */
    const unchanged = evaluate("unchanged", broken, null);
    const stillBroken = evaluate("semantic", broken, structuredClone(broken));
    for (const summary of [unchanged, stillBroken]) {
      expect(summary.passed).toBe(false);
      expect(summary.uncompared).toEqual([]);
      expect(summary.engine).toMatchObject({ records: requests.length, recordsDiffering: 0 });
      expect(summary.thrownOnBothEngines.records).toBe(requests.length);
      expect(summary.failures).toEqual([
        expect.stringContaining(`Threw on both engines, which compares nothing: ${requests.length} records`),
      ]);
    }
    expect(stillBroken.dataImpact).toMatchObject([{ blocking: 0 }]);
  });

  it("counts no thrown record of a lens the base engine cannot build", () => {
    /* An uncompared lens is held to the declared exceptions, not to a comparison it cannot have. */
    const head = plainRecords.map((record) =>
      record.request === "traces" ? { ...record, payload: unevaluated[0].payload } : record,
    );
    const run = createDifferentialRun({ changeClass: "c0", declaredExceptions: [key], restricted: false });
    run.addLens({ lens: key, dataChange: "unchanged", baseEngine: unevaluated, headEngine: head });
    expect(run.finish()).toMatchObject({
      passed: true,
      uncompared: [{ lens: key }],
      thrownOnBothEngines: { records: 0 },
    });
  });

  it("takes a lens in consecutive parts, and reports what it would for the lens whole", () => {
    type Captures = Omit<LensCaptures, "lens">;
    /** One lens through a run, whole or cut after its build constants and again in the middle of its state. */
    const through = (captures: Captures, cuts: readonly number[]) => {
      const run = createDifferentialRun({ changeClass: "c1", declaredExceptions: [], restricted: false });
      const bounds = [0, ...cuts, requests.length];
      const outputs = bounds.slice(1).map((to, part) => {
        const from = bounds[part];
        return run.addLens({
          lens: key,
          dataChange: captures.dataChange,
          baseEngine: captures.baseEngine.slice(from, to),
          headEngine: captures.headEngine.slice(from, to),
          baseData: captures.baseData?.slice(from, to) ?? null,
        });
      });
      return {
        summary: run.finish(),
        headLines: outputs.flatMap((output) => output.lines.headEngine),
        baseDataLines: outputs.flatMap((output) => output.lines.baseData),
        failingRecords: outputs.flatMap((output) => output.failingRecords),
      };
    };

    /* Each drift is in a record of the last part, where a part that stood alone would misjudge the lens. */
    const drifted = withChange("chiefSolves", ["halfFieldDeg"], (value) => Number(value) + 1, plainRecords);
    const failedRay = withChange("traces", [...RAY, "status"], () => "failed", plainRecords);
    const thickerRecords = captureRecords(catalogOf(thicker), requests);
    const unbuilt = captureRecords(catalogOf(unbuildable), requests);
    /* A failed ray that came with a longer fan: it is at a path only the head data has. */
    const fan: Path = ["onAxis", "rays"];
    const longerFan = withChange(
      "traces",
      fan,
      (rays) => [...(rays as object[]), { ...(rays as object[])[1], status: "failed" }],
      plainRecords,
    );
    /* A ray that fails on the head data alone, in a fan that also grew, while another fails on the base data
     * alone: the paired walk does not enter the fan, and the record holds one failed status on either side. */
    const failedThird = withChange("traces", [...fan, 2, "status"], () => "failed", plainRecords);
    const grownFan = withChange("traces", fan, (rays) => [...(rays as object[]), (rays as object[])[2]], failedRay);
    /* Blockers of two kinds in two records, which a cut puts in two parts. */
    const failedRayAndNumber = withChange("chiefSolves", ["halfFieldDeg"], () => encodeValue(Number.NaN), failedRay);
    const cases: Record<string, Captures> = {
      identical: { dataChange: "unchanged", baseEngine: plainRecords, headEngine: structuredClone(plainRecords) },
      drift: { dataChange: "unchanged", baseEngine: plainRecords, headEngine: drifted },
      uncompared: { dataChange: "unchanged", baseEngine: unevaluated, headEngine: plainRecords },
      formatOnly: { dataChange: "format", baseEngine: plainRecords, headEngine: plainRecords, baseData: drifted },
      semantic: {
        dataChange: "semantic",
        baseEngine: thickerRecords,
        headEngine: thickerRecords,
        baseData: plainRecords,
      },
      blocked: { dataChange: "semantic", baseEngine: failedRay, headEngine: failedRay, baseData: plainRecords },
      blockedBehindShape: { dataChange: "semantic", baseEngine: grownFan, headEngine: grownFan, baseData: failedThird },
      blockedTwice: {
        dataChange: "semantic",
        baseEngine: failedRayAndNumber,
        headEngine: failedRayAndNumber,
        baseData: plainRecords,
      },
      headOnlyFailure: { dataChange: "semantic", baseEngine: longerFan, headEngine: longerFan, baseData: plainRecords },
      added: { dataChange: "new", baseEngine: plainRecords, headEngine: plainRecords },
      addedUnbuilt: { dataChange: "new", baseEngine: unbuilt, headEngine: unbuilt },
      /* Whether a lens that builds nowhere is the data rules' to judge is settled by the part with its build record. */
      unbuiltUnchanged: { dataChange: "unchanged", baseEngine: unbuilt, headEngine: unbuilt },
      unbuiltChanged: { dataChange: "semantic", baseEngine: unbuilt, headEngine: unbuilt, baseData: plainRecords },
    };
    const whole = Object.fromEntries(Object.entries(cases).map(([name, captures]) => [name, through(captures, [])]));
    for (const [name, captures] of Object.entries(cases)) {
      expect(through(captures, [1, 3]), name).toEqual(whole[name]);
      expect(through(captures, [1, 2, 3, 4]), name).toEqual(whole[name]);
    }

    /* The cases are what they say: one lens each time, judged once. */
    expect(Object.values(whole).map(({ summary }) => summary.lenses)).toEqual(Object.keys(cases).map(() => 1));
    expect(whole.identical.summary).toMatchObject({ passed: true, engine: { records: requests.length } });
    expect(whole.drift.summary.engine.failures).toMatchObject([{ request: "chiefSolves", path: "halfFieldDeg" }]);
    expect(whole.uncompared.summary).toMatchObject({ uncompared: [{ lens: key }], engine: { records: 0 } });
    expect(whole.formatOnly.summary.formatOnly).toMatchObject({ lenses: [key], records: requests.length, failing: 1 });
    expect(whole.semantic.summary.dataImpact).toMatchObject([{ lens: key, change: "semantic", blocking: 0 }]);
    expect(whole.semantic.summary.dataImpact[0].recordsDiffering).toBeGreaterThan(1);
    expect(whole.blocked.summary.dataImpact).toMatchObject([{ blocking: 1, blockers: [{ request: "traces" }] }]);
    expect(whole.blocked.failingRecords).toEqual([expect.stringContaining('{"comparison":"impact","base":')]);
    expect(whole.blockedBehindShape.summary).toMatchObject({
      passed: false,
      dataImpact: [{ blocking: 1, blockers: [{ request: "traces", path: "onAxis.rays[1].status" }] }],
    });
    expect(whole.blockedBehindShape.failingRecords).toHaveLength(1);
    expect(whole.blockedTwice.summary.dataImpact).toMatchObject([
      {
        blocking: 2,
        blockers: [{ request: "traces" }, { request: "chiefSolves", kind: "nonFinite" }],
        paths: { statuses: { toFailure: 1 }, numbers: { toNonFinite: 1 } },
      },
    ]);
    expect(whole.blockedTwice.failingRecords).toHaveLength(2);
    expect(whole.headOnlyFailure.summary).toMatchObject({
      passed: true,
      dataImpact: [{ blocking: 0, paths: { headOnly: { statuses: 1, failedStatuses: 1 } } }],
    });
    expect(whole.headOnlyFailure.failingRecords).toEqual([]);
    expect(whole.unbuiltUnchanged.summary.thrownOnBothEngines.records).toBe(requests.length);
    expect(whole.unbuiltChanged.summary).toMatchObject({
      thrownOnBothEngines: { records: 0 },
      dataImpact: [{ blocking: requests.length }],
    });
    expect(whole.added.summary.dataImpact).toMatchObject([{ change: "new", records: requests.length, blocking: 0 }]);
    expect(whole.addedUnbuilt.summary.dataImpact).toMatchObject([{ change: "new", blocking: 1 }]);
  });
});

describe("engineDiff converter pairs", () => {
  const refOf = ({ host, teleconverter }: SerializedCatalog["pairs"][number]) => ({ key: host, teleconverter });
  const idOf = (pair: SerializedCatalog["pairs"][number]) => lensId(refOf(pair));
  const permitted = CATALOG.pairs;
  /** Pair lists that agree everywhere. */
  const NO_DIFFERENCES: RunSummary["pairs"] = {
    baseEngineOnly: [],
    headEngineOnly: [],
    baseDataOnly: [],
    headDataOnly: [],
    uncompared: [],
    lostEveryPair: [],
  };
  /* Tier P's one representative pair: its requests are in the tier whatever else changed. */
  const representative = permitted.find((pair) => idOf(pair) === PAIR_ID)!;
  const others = permitted.filter((pair) => pair !== representative);
  /** A run of one unchanged lens, with what the pair lists said. */
  const withPairs = (changeClass: ChangeClass, pairs: RunSummary["pairs"]): RunSummary => {
    const run = createDifferentialRun({ changeClass, declaredExceptions: [], restricted: true, pairs });
    run.addLens({ lens: SERENAR, dataChange: "unchanged", baseEngine: SERENAR_RECORDS, headEngine: SERENAR_RECORDS });
    return run.finish();
  };

  it("finds no difference between equal answers, and requests them in lens-id order", () => {
    const { requested, differences } = comparePermittedPairs({
      headEngine: permitted,
      baseEngine: [...permitted].reverse(),
      baseData: permitted,
    });
    expect(requested.map(idOf)).toEqual(permitted.map(idOf).sort());
    expect(differences).toEqual(NO_DIFFERENCES);
    expect(withPairs("c0", differences)).toMatchObject({ passed: true, pairs: differences });
    expect(renderSummaryMarkdown(withPairs("c0", differences), REPORT_CONTEXT)).not.toContain("## Converter pairs");
  });

  it("fails when the engines permit different pairs, and still requests a pair one of them lost", () => {
    /* An engine-side change: the head engine's fit predicate no longer permits the representative pair. */
    const { requested, differences } = comparePermittedPairs({
      headEngine: others,
      baseEngine: permitted,
      baseData: others,
    });
    expect(differences).toEqual({ ...NO_DIFFERENCES, baseEngineOnly: [PAIR_ID] });
    /* Built from the head engine's answer alone, the tier would not hold the pair. From the union it is asked of
     * both engines, and the one that lost it throws. */
    const { lenses } = requestCatalog(CATALOG);
    expect(() => tierRequests("p", { lenses, pairs: others })).toThrow(PAIR_ID);
    const asked = tierRequests("p", { lenses, pairs: requested }).filter(({ lens }) => lensId(lens) === PAIR_ID);
    expect(asked.map((request) => request.family)).toContain("composition");

    for (const changeClass of ["c0", "c1", "c2"] as const) {
      const summary = withPairs(changeClass, differences);
      expect(summary.passed).toBe(false);
      expect(summary.failures).toEqual([
        "Converter pairs: the engines permit different pairs for the head prescriptions: " +
          `the base engine alone permits ${PAIR_ID}.`,
      ]);
    }
    /* An intended change reports it, as it does every other engine difference. */
    const intended = withPairs("c3", differences);
    expect(intended.passed).toBe(true);
    expect(renderSummaryMarkdown(intended, REPORT_CONTEXT)).toContain(
      `- Head prescriptions, base engine only: ${PAIR_ID}.`,
    );

    /* The other way round: a pair the head engine newly permits. */
    const gained = comparePermittedPairs({ headEngine: permitted, baseEngine: others, baseData: permitted });
    expect(gained.requested.map(idOf)).toContain(PAIR_ID);
    expect(withPairs("c1", gained.differences).failures).toEqual([
      expect.stringContaining(`the head engine alone permits ${PAIR_ID}.`),
    ]);
  });

  it("lists a pair the data gained or lost in the data-impact report, and does not fail on it", () => {
    /* A data-side change: both engines agree on the head prescriptions, which lost one pair and gained another. */
    const [gainedPair, ...rest] = others;
    const { requested, differences } = comparePermittedPairs({
      headEngine: [gainedPair, ...rest],
      baseEngine: [gainedPair, ...rest],
      baseData: [representative, ...rest],
    });
    expect(differences).toEqual({ ...NO_DIFFERENCES, baseDataOnly: [PAIR_ID], headDataOnly: [idOf(gainedPair)] });
    /* A pair the head data no longer permits is not requested: on that data neither engine can compose it. */
    expect(requested.map(idOf)).not.toContain(PAIR_ID);
    for (const changeClass of CLASSES) {
      const summary = withPairs(changeClass, differences);
      expect(summary.passed).toBe(true);
      const report = renderDataImpactMarkdown(summary, REPORT_CONTEXT);
      expect(report).toContain("## Converter pairs");
      expect(report).toContain(`- No longer permitted with the head data: ${PAIR_ID}.`);
      expect(report).toContain(`- Permitted with the head data alone: ${idOf(gainedPair)}.`);
      expect(renderSummaryMarkdown(summary, REPORT_CONTEXT)).toContain(
        `- Head engine, base prescriptions only: ${PAIR_ID}.`,
      );
    }
  });

  /* A host with three converters, whose pairs are quick to capture and hold failed rays like any other lens. */
  const HOST = "fujifilm-xf80-f28-macro";
  const hostPairs = permitted.filter((pair) => pair.host === HOST);
  /** The catalog with one edit applied to a lens or converter prescription. */
  const edited = (
    kind: "lenses" | "teleconverters",
    key: string,
    edit: (data: Record<string, unknown>) => unknown,
    catalog: SerializedCatalog = CATALOG,
  ): SerializedCatalog => ({
    ...catalog,
    [kind]: catalog[kind].map((entry) =>
      entry.key === key
        ? { ...entry, prescription: encodeValue(edit(structuredClone(decodeValue(entry.prescription)) as never)) }
        : entry,
    ),
  });
  const changesBetween = (base: SerializedCatalog, head: SerializedCatalog) =>
    classifyCatalogChanges(base, head, fingerprintCatalog(base), fingerprintCatalog(head));
  /** What Tier P asks of a pair of a changed host or converter, without the analysis jobs and MTF. */
  const pairRequests = (pair: SerializedCatalog["pairs"][number], pairs: SerializedCatalog["pairs"]) =>
    tierRequests("p", { ...requestCatalog({ ...CATALOG, pairs }), changedLensKeys: [pair.host] }).filter(
      ({ lens, family }) => lensId(lens) === idOf(pair) && family !== "analysis" && family !== "mtf",
    );
  const failedStatuses = (records: readonly PayloadRecord[]) =>
    records.reduce((total, record) => total + (JSON.stringify(record).match(/"status":"failed"/g)?.length ?? 0), 0);

  it("compares a pair that only the head data permits as new, and blocks it only when it does not build", () => {
    /* The base data's host did not accept a converter; the head's does. */
    const before = edited("lenses", HOST, ({ acceptsTeleconverters: _accepts, ...data }) => data);
    const changes = changesBetween(before, CATALOG);
    expect(changes.lenses).toEqual({ [HOST]: "semantic" });
    const { requested, differences } = comparePermittedPairs(
      { headEngine: permitted, baseEngine: permitted, baseData: permittedPairs(before) },
      changes,
    );
    expect(hostPairs.length).toBeGreaterThan(1);
    expect(differences).toEqual({ ...NO_DIFFERENCES, headDataOnly: hostPairs.map(idOf).sort() });
    expect(requested.map(idOf)).toEqual(permitted.map(idOf).sort());

    /* The host's change alone would make each pair a semantic change, to be set beside base data that throws. */
    expect(hostPairs.map((pair) => dataChangeOf(changes, refOf(pair)))).toEqual(hostPairs.map(() => "semantic"));
    expect(hostPairs.map((pair) => dataChangeOf(changes, refOf(pair), differences.headDataOnly))).toEqual(
      hostPairs.map(() => "new"),
    );
    expect(dataChangeOf(changes, { key: HOST }, differences.headDataOnly)).toBe("semantic");

    const run = createDifferentialRun({
      changeClass: "c0",
      declaredExceptions: [],
      restricted: true,
      pairs: differences,
    });
    let failed = 0;
    for (const pair of hostPairs) {
      const records = captureRecords(CATALOG, pairRequests(pair, requested));
      expect(records.map((record) => record.request)).toEqual([
        "composition",
        "build",
        "layout",
        "traces",
        "fieldGeometry",
        "chiefSolves",
      ]);
      failed += failedStatuses(records);
      run.addLens({
        lens: idOf(pair),
        dataChange: dataChangeOf(changes, refOf(pair), differences.headDataOnly),
        baseEngine: structuredClone(records),
        headEngine: records,
      });
    }
    /* Rays fail in these records as they do in any lens's, and none of them is new: there was no pair before. */
    expect(failed).toBeGreaterThan(0);
    const summary = run.finish();
    expect(summary).toMatchObject({ passed: true, failures: [], warnings: [] });
    expect(summary.dataImpact.map(({ lens, change, blocking }) => [lens, change, blocking])).toEqual(
      hostPairs.map((pair) => [idOf(pair), "new", 0]),
    );
    const report = renderDataImpactMarkdown(summary, REPORT_CONTEXT);
    expect(report).toContain(`## ${idOf(hostPairs[0])} (new)`);
    expect(report).toContain(`- Permitted with the head data alone: ${hostPairs.map(idOf).sort().join(", ")}.`);
    /* Nothing blocks on those failed rays, so each pair's section counts them, record by record, for review. */
    const counted = summary.dataImpact.flatMap((impact) => impact.recordCounts ?? []);
    expect(counted).toHaveLength(6 * hostPairs.length);
    expect(counted.reduce((total, count) => total + count.failedStatuses, 0)).toBe(failed);
    const [holding] = counted.filter((count) => count.failedStatuses > 0);
    expect(report).toContain(
      `| ${holding.state} | ${holding.request} | ${holding.failedStatuses} | ${holding.nonFinite} |`,
    );
    expect(report.match(/^### Failed statuses and computed non-finite numbers$/gm)).toHaveLength(hostPairs.length);

    /* Were such a pair judged as a semantic change, its records would be set beside base data that threw. Every
     * one of them then returns where it threw, and its failed rays are at paths only the head data has: counted,
     * and no blocker. */
    const [withFailedRay] = hostPairs.filter(
      (pair) => failedStatuses(captureRecords(CATALOG, pairRequests(pair, requested))) > 0,
    );
    const head = captureRecords(CATALOG, pairRequests(withFailedRay, requested));
    const onBaseData = captureRecords(before, pairRequests(withFailedRay, requested));
    expect(onBaseData.every((record) => !record.payload.ok)).toBe(true);
    const beside = createDifferentialRun({ changeClass: "c0", declaredExceptions: [], restricted: true });
    beside.addLens({
      lens: idOf(withFailedRay),
      dataChange: "semantic",
      baseEngine: structuredClone(head),
      headEngine: head,
      baseData: onBaseData,
    });
    expect(beside.finish()).toMatchObject({
      passed: true,
      dataImpact: [
        {
          blocking: 0,
          paths: {
            outcomes: { toThrown: 0, fromThrown: head.length },
            headOnly: { failedStatuses: failedStatuses(head) },
          },
        },
      ],
    });

    /* The fit predicate's answer in a composition record is a member named `ok`, and is read as any outcome is. The
     * composer applies the predicate, so a pair it refuses throws as its record does. Were a record to return with
     * the answer turned to false, that alone blocks. */
    expect(at(head, "composition", ["compatibility", "ok"])).toBe(true);
    const refused = withChange("composition", ["compatibility", "ok"], () => false, head);
    const answered = createDifferentialRun({ changeClass: "c0", declaredExceptions: [], restricted: true });
    answered.addLens({
      lens: idOf(withFailedRay),
      dataChange: "semantic",
      baseEngine: structuredClone(refused),
      headEngine: refused,
      baseData: head,
    });
    expect(answered.finish().dataImpact[0]).toMatchObject({
      blocking: 1,
      blockers: [{ request: "composition", path: "compatibility.ok", base: "true", head: "false" }],
      paths: { outcomes: { toThrown: 1, fromThrown: 0 } },
    });
  });

  it("fails a pair that only the head data permits when it does not build", () => {
    /* The head's host newly accepts converters, and one converter's first surface names an element it lacks:
     * the predicate permits the pair, the composer merges it, and the merged lens does not build. */
    const [broken] = hostPairs;
    const before = edited("lenses", HOST, ({ acceptsTeleconverters: _accepts, ...data }) => data);
    const head = edited("teleconverters", broken.teleconverter, (data) => {
      (data.surfaces as { elemId: number }[])[0].elemId = 99;
      return data;
    });
    const changes = changesBetween(before, head);
    const { requested, differences } = comparePermittedPairs(
      { headEngine: permittedPairs(head), baseEngine: permittedPairs(head), baseData: permittedPairs(before) },
      changes,
    );
    expect(differences.headDataOnly).toContain(idOf(broken));
    const lens = { key: broken.host, teleconverter: broken.teleconverter };
    const dataChange = dataChangeOf(changes, lens, differences.headDataOnly);
    expect(dataChange).toBe("new");

    const records = captureRecords(head, pairRequests(broken, requested));
    expect(records.find((record) => record.request === "build")?.payload.ok).toBe(false);
    const run = createDifferentialRun({
      changeClass: "c0",
      declaredExceptions: [],
      restricted: true,
      pairs: differences,
    });
    run.addLens({ lens: idOf(broken), dataChange, baseEngine: structuredClone(records), headEngine: records });
    const summary = run.finish();
    expect(summary.passed).toBe(false);
    expect(summary.failures).toEqual(["Data impact: 1 blocking difference."]);
    expect(summary.dataImpact).toMatchObject([
      { lens: idOf(broken), change: "new", blocking: 1, blockers: [{ request: "build", path: "ok", base: "absent" }] },
    ]);
    /* It builds on neither engine because of its data, which is the data rule's to judge. */
    expect(summary.thrownOnBothEngines.records).toBe(0);
  });

  it("warns of a changed host or converter that lost every pair it had, and does not fail on it", () => {
    /* A converter that no longer fits anything is asked nothing: the head data permits none of its pairs. */
    const converter = "fujifilm-gf14x-tc-wr";
    const lost = permitted
      .filter((pair) => pair.teleconverter === converter)
      .map(idOf)
      .sort();
    expect(lost.length).toBeGreaterThan(1);
    const unfit = edited("teleconverters", converter, (data) => ({ ...data, masterImageDistanceMm: Number.NaN }));
    const changes = changesBetween(CATALOG, unfit);
    expect(changes.teleconverters).toEqual({ [converter]: "semantic" });
    const answers = permittedPairs(unfit);
    const { requested, differences } = comparePermittedPairs(
      { headEngine: answers, baseEngine: answers, baseData: permitted },
      changes,
    );
    expect(differences).toEqual({
      ...NO_DIFFERENCES,
      baseDataOnly: lost,
      lostEveryPair: [{ kind: "converter", key: converter, pairs: lost }],
    });
    expect(requested.map(idOf)).toEqual(
      permitted
        .map(idOf)
        .filter((id) => !lost.includes(id))
        .sort(),
    );

    const warning =
      `The changed converter ${converter} lost every pair it had with the base data and was compared through ` +
      `none: ${lost.join(", ")}.`;
    for (const changeClass of CLASSES) {
      const summary = withPairs(changeClass, differences);
      expect(summary).toMatchObject({ passed: true, failures: [], warnings: [warning] });
      /* The run passed, so the warning stands where a failure would: under the headline, above everything else. */
      const markdown = renderSummaryMarkdown(summary, REPORT_CONTEXT);
      expect(markdown).toContain("# Engine diff: passed");
      const at = markdown.indexOf(`- Warning, which does not fail the run: ${warning}`);
      expect(at).toBeGreaterThan(0);
      expect(at).toBeLessThan(markdown.indexOf("## Counts"));
    }

    /* A host that stops accepting converters loses its pairs the same way. */
    const closed = edited("lenses", HOST, ({ acceptsTeleconverters: _accepts, ...data }) => data);
    const closedPairs = permittedPairs(closed);
    const ofHost = comparePermittedPairs(
      { headEngine: closedPairs, baseEngine: closedPairs, baseData: permitted },
      changesBetween(CATALOG, closed),
    ).differences;
    expect(ofHost.lostEveryPair).toEqual([{ kind: "host", key: HOST, pairs: hostPairs.map(idOf).sort() }]);
    expect(withPairs("c0", ofHost).warnings).toEqual([
      `The changed host ${HOST} lost every converter pair it had with the base data, and none was compared: ` +
        `${hostPairs.map(idOf).sort().join(", ")}.`,
    ]);

    /* One that keeps a pair is still compared through it, and a pair it lost is listed, as before. */
    const [excluded] = permitted.filter((pair) => pair.teleconverter === converter);
    const narrowed = edited("teleconverters", converter, (data) => ({
      ...data,
      incompatibleLensKeys: [excluded.host],
    }));
    const narrowedPairs = permittedPairs(narrowed);
    const kept = comparePermittedPairs(
      { headEngine: narrowedPairs, baseEngine: narrowedPairs, baseData: permitted },
      changesBetween(CATALOG, narrowed),
    ).differences;
    expect(kept).toEqual({ ...NO_DIFFERENCES, baseDataOnly: [idOf(excluded)] });
    expect(withPairs("c0", kept)).toMatchObject({ passed: true, warnings: [] });
    /* Without the catalog's changes nothing is known to have changed, and nothing is warned of. */
    expect(
      comparePermittedPairs({ headEngine: answers, baseEngine: answers, baseData: permitted }).differences
        .lostEveryPair,
    ).toEqual([]);
  });

  /*
   * A base engine handed a head prescription in a form it predates. This checkout stands for both engines, so the
   * base engine's answers are this engine's about a catalog in which something is unreadable to it.
   */
  const [metPair, otherPair] = hostPairs;
  const BASES: Record<string, SerializedCatalog> = {
    /* The fit predicate throws on the host, which does not build alone either. */
    "a host the predicate throws on": edited("lenses", HOST, ({ surfaces: _surfaces, ...data }) => ({
      ...data,
      schema: 2,
    })),
    /* The predicate reads the host and finds no mount. */
    "a host with no mount": edited("lenses", HOST, ({ lensMounts, acceptsTeleconverters, ...data }) => ({
      ...data,
      catalog: { lensMounts, acceptsTeleconverters },
      surfaces: "in another form",
    })),
    /* The host does not build alone, and the composer drops the member that stops it. */
    "a host that only its pairs build": edited("lenses", HOST, (data) => ({
      ...data,
      opticalConfiguration: "in another form",
    })),
    /* The predicate reads everything and refuses one pair. */
    "one pair the composer refuses": edited("teleconverters", metPair.teleconverter, (data) => ({
      ...data,
      incompatibleLensKeys: [HOST],
    })),
    /* A converter cannot be built alone. The predicate throws on this one beside every host. */
    "a converter the predicate throws on": edited(
      "teleconverters",
      metPair.teleconverter,
      ({ lensMounts, ...data }) => ({
        ...data,
        catalog: { lensMounts },
      }),
    ),
  };
  /** The pair lists of a run whose base engine is this engine reading `baseCatalog`. */
  const listsOf = (baseCatalog: SerializedCatalog) => {
    const baseEngine = permittedPairs(baseCatalog);
    const either = [...permitted, ...baseEngine];
    const unbuilt = { headEngine: unbuiltPairs(CATALOG, either), baseEngine: unbuiltPairs(baseCatalog, either) };
    const answers = { headEngine: permitted, baseEngine, baseData: permitted };
    return { answers, unbuilt, ...comparePermittedPairs({ ...answers, unbuilt }) };
  };
  const hostRequests = TIER_P.filter(({ lens, family }) => lensId(lens) === HOST && family !== "analysis");
  const serenarRequests = TIER_P.filter(({ lens, family }) => lensId(lens) === SERENAR && family === "build");
  /** A narrowed run of some lenses, each captured on the base catalog and on the head's. */
  const runOf = (
    baseCatalog: SerializedCatalog,
    { requested, differences }: ReturnType<typeof listsOf>,
    lenses: readonly (string | SerializedCatalog["pairs"][number])[],
    declaredExceptions: string[] = [],
    changeClass: ChangeClass = "c0",
  ): RunSummary => {
    const run = createDifferentialRun({ changeClass, declaredExceptions, restricted: true, pairs: differences });
    for (const lens of lenses) {
      const requests =
        typeof lens !== "string" ? pairRequests(lens, requested) : lens === HOST ? hostRequests : serenarRequests;
      run.addLens({
        lens: typeof lens === "string" ? lens : idOf(lens),
        dataChange: "unchanged",
        baseEngine: captureRecords(baseCatalog, requests),
        headEngine: captureRecords(CATALOG, requests),
      });
    }
    return run.finish();
  };

  it("sets a pair aside as uncompared when the base engine cannot compose and build it, and the head engine can", () => {
    const ids = hostPairs.map(idOf).sort();
    for (const how of ["a host the predicate throws on", "a host with no mount"]) {
      const catalog = BASES[how];
      /* Asking the engine about a prescription it cannot read must not end the run. */
      const lists = listsOf(catalog);
      expect(lists.answers.baseEngine.map(idOf), how).toEqual(permitted.map(idOf).filter((id) => !ids.includes(id)));
      expect(lists.unbuilt.headEngine, how).toEqual({});
      expect(Object.keys(lists.unbuilt.baseEngine).sort(), how).toEqual(ids);

      /* Read as two answers of the predicate, the host's pairs would be engine drift with no way to declare it. */
      expect(comparePermittedPairs(lists.answers).differences.headEngineOnly, how).toEqual(ids);
      expect(lists.differences, how).toEqual({
        ...NO_DIFFERENCES,
        uncompared: ids.map((lens) => ({ lens, reason: lists.unbuilt.baseEngine[lens] })),
      });
      /* The head engine builds them, so they are still asked: the head's records are captured and written. */
      expect(lists.requested.map(idOf), how).toEqual(permitted.map(idOf).sort());

      /* Through a run: the host and one of its pairs are met, and the other pairs are known from the lists. */
      const undeclared = runOf(catalog, lists, [HOST, metPair]);
      expect(undeclared.uncompared.map(({ lens }) => lens).sort(), how).toEqual([HOST, ...ids].sort());
      expect(undeclared.failures, how).toEqual([
        `Not compared and not declared as an exception: ${[HOST, ...ids].sort().join(", ")}.`,
      ]);
      expect(undeclared).toMatchObject({ engine: { records: 0 }, thrownOnBothEngines: { records: 0 } });
      /* The pair the run met and the pairs it did not are listed with the same words: the lists' own. */
      expect(undeclared.uncompared.filter(({ lens }) => lens !== HOST)).toEqual(
        [metPair, ...hostPairs.filter((pair) => pair !== metPair)].map((pair) => ({
          lens: idOf(pair),
          reason: lists.unbuilt.baseEngine[idOf(pair)],
          ...(pair === metPair ? {} : { unasked: true }),
        })),
      );
      const markdown = renderSummaryMarkdown(undeclared, REPORT_CONTEXT);
      expect(markdown).toContain(
        `- Not compared, the base engine cannot compose and build the pair: ${ids.join(", ")}.`,
      );
      expect(markdown).toContain(`| ${ids.at(-1)} | `);
      /* The run met two lenses, the host and one pair. The other pairs are no lenses of the run. */
      expect(markdown).toContain(
        `2 lenses, 2 of them not compared. ${ids.length - 1} converter pairs that the run asked nothing of are not ` +
          "compared either.",
      );

      expect(runOf(catalog, lists, [HOST, metPair], [HOST, ...ids]), how).toMatchObject({ passed: true, failures: [] });
    }

    /* The engine cannot compose a pair of a converter its predicate throws on. Each such pair is set aside by its
     * own build, and no other pair is. */
    const converter = metPair.teleconverter;
    const formed = permitted
      .filter((pair) => pair.teleconverter === converter)
      .map(idOf)
      .sort();
    const unread = listsOf(BASES["a converter the predicate throws on"]);
    expect(unread.answers.baseEngine.map(idOf)).toEqual(permitted.map(idOf).filter((id) => !formed.includes(id)));
    expect(unread.differences.headEngineOnly).toEqual([]);
    expect(unread.differences.uncompared.map(({ lens }) => lens)).toEqual(formed);
    expect(unread.differences.uncompared[0].reason).toMatch(/^TypeError: /);

    /* A pair both engines build and only one permits is still engine drift, beside the pairs set aside: it fails
     * in every gated class, and an intended change reports it. */
    const drifted = comparePermittedPairs({
      ...unread.answers,
      baseEngine: unread.answers.baseEngine.filter((pair) => idOf(pair) !== PAIR_ID),
      unbuilt: unread.unbuilt,
    });
    expect(formed).not.toContain(PAIR_ID);
    expect(drifted.differences.headEngineOnly).toEqual([PAIR_ID]);
    const driftedLists = { ...unread, ...drifted };
    for (const changeClass of ["c0", "c1", "c2"] as const) {
      expect(runOf(CATALOG, driftedLists, [SERENAR], [], changeClass).failures).toEqual([
        expect.stringContaining(`the head engine alone permits ${PAIR_ID}.`),
        `Not compared and not declared as an exception: ${formed.join(", ")}.`,
      ]);
      expect(runOf(CATALOG, driftedLists, [SERENAR], formed, changeClass).failures).toEqual([
        expect.stringContaining(`the head engine alone permits ${PAIR_ID}.`),
      ]);
    }
    const intended = runOf(CATALOG, driftedLists, [SERENAR], formed, "c3");
    expect(intended.passed).toBe(true);
    expect(renderSummaryMarkdown(intended, REPORT_CONTEXT)).toContain(
      `- Head prescriptions, head engine only: ${PAIR_ID}.`,
    );

    /* Only a base engine that cannot build is set aside. A pair the head engine cannot build, and the base engine
     * can, is a pair the head engine lost. */
    const refusing = BASES["one pair the composer refuses"];
    const headRefuses = permittedPairs(refusing);
    const lostByHead = comparePermittedPairs({
      headEngine: headRefuses,
      baseEngine: permitted,
      baseData: headRefuses,
      unbuilt: { headEngine: unbuiltPairs(refusing, permitted), baseEngine: unbuiltPairs(CATALOG, permitted) },
    });
    expect(lostByHead.differences).toEqual({ ...NO_DIFFERENCES, baseEngineOnly: [idOf(metPair)] });
    expect(lostByHead.requested.map(idOf)).toContain(idOf(metPair));
    /* Nor is a pair that neither engine can build: it is compared, and its thrown records are judged as such. */
    const neither = unbuiltPairs(refusing, permitted);
    expect(Object.keys(neither)).toEqual([idOf(metPair)]);
    expect(
      comparePermittedPairs({
        headEngine: permitted,
        baseEngine: permitted,
        baseData: permitted,
        unbuilt: { headEngine: neither, baseEngine: neither },
      }).differences,
    ).toEqual(NO_DIFFERENCES);
  });

  it("compares the pairs of a host that the base engine cannot build alone, and sets only the host aside", () => {
    const catalog = BASES["a host that only its pairs build"];
    const lists = listsOf(catalog);
    /* The predicate does not read what stops the host building, and the composer drops it. */
    expect(lists.answers.baseEngine).toEqual(permitted);
    expect(lists.unbuilt).toEqual({ headEngine: {}, baseEngine: {} });
    expect(lists.differences).toEqual(NO_DIFFERENCES);

    const run = runOf(catalog, lists, [HOST, metPair, otherPair]);
    expect(run.uncompared).toEqual([{ lens: HOST, reason: expect.stringContaining("opticalConfiguration") }]);
    expect(run.failures).toEqual([`Not compared and not declared as an exception: ${HOST}.`]);
    /* Each pair is compared in full: the base engine composes and builds it as the head engine does. */
    const pairRecords = pairRequests(metPair, lists.requested).length + pairRequests(otherPair, lists.requested).length;
    expect(run.engine).toMatchObject({ records: pairRecords, recordsDiffering: 0, failing: 0 });

    /* One list of exceptions, the host alone, holds for every run: of the host, of a pair, and of neither. */
    for (const lenses of [[HOST, metPair, otherPair], [HOST], [metPair], [SERENAR]]) {
      expect(runOf(catalog, lists, lenses, [HOST]), lenses.map(String).join()).toMatchObject({ passed: true });
    }
    expect(runOf(catalog, lists, [metPair]).passed).toBe(true);
    /* Declared with the host, a pair is found compared after all. */
    expect(runOf(catalog, lists, [HOST, metPair], [HOST, idOf(metPair)]).failures).toEqual([
      `Declared as an exception and compared after all: ${idOf(metPair)}.`,
    ]);
  });

  it("sets one pair aside when the base engine cannot build that pair alone, in a run that meets it or not", () => {
    const catalog = BASES["one pair the composer refuses"];
    const lists = listsOf(catalog);
    const id = idOf(metPair);
    const reason = lists.unbuilt.baseEngine[id];
    expect(lists.unbuilt).toEqual({ headEngine: {}, baseEngine: { [id]: expect.stringContaining("excluded") } });
    /* The base engine does not permit the pair, and that is no difference between the predicates: it cannot build
     * the pair, so its answer about it is no answer. */
    expect(lists.answers.baseEngine.map(idOf)).toEqual(permitted.map(idOf).filter((other) => other !== id));
    expect(lists.differences).toEqual({ ...NO_DIFFERENCES, uncompared: [{ lens: id, reason }] });
    expect(lists.requested.map(idOf)).toEqual(permitted.map(idOf).sort());

    /* The host alone, the host's other pair and the converter's other pairs are compared. */
    const sibling = permitted.find((pair) => pair.teleconverter === metPair.teleconverter && pair.host !== HOST)!;
    const met = runOf(catalog, lists, [HOST, metPair, otherPair, sibling]);
    const unmet = runOf(catalog, lists, [HOST, otherPair, sibling]);
    const elsewhere = runOf(catalog, lists, [SERENAR]);
    expect(met.uncompared).toEqual([{ lens: id, reason }]);
    expect(unmet.uncompared).toEqual([{ lens: id, reason, unasked: true }]);
    expect(elsewhere.uncompared).toEqual(unmet.uncompared);
    expect(met.engine).toMatchObject({ recordsDiffering: 0, failing: 0 });
    expect(met.engine.records).toBe(unmet.engine.records);
    expect(renderSummaryMarkdown(met, REPORT_CONTEXT)).toContain("4 lenses, 1 of them not compared.\n");
    expect(renderSummaryMarkdown(unmet, REPORT_CONTEXT)).toContain(
      "3 lenses, 0 of them not compared. 1 converter pairs that the run asked nothing of are not compared either.",
    );

    /* The lists decided it, and a run that meets the pair does not decide again: handed base records that would
     * compare, it still lists the pair as the lists do. */
    const again = runOf(CATALOG, lists, [metPair]);
    expect(again.uncompared).toEqual([{ lens: id, reason }]);
    expect(again.engine.records).toBe(0);

    /* Every run of the tier fails until the pair is declared, and passes once it is. */
    for (const [name, lenses] of Object.entries({
      met: [HOST, metPair, otherPair, sibling],
      unmet: [HOST, otherPair, sibling],
      elsewhere: [SERENAR],
    })) {
      expect(runOf(catalog, lists, lenses).failures, name).toEqual([
        `Not compared and not declared as an exception: ${id}.`,
      ]);
      expect(runOf(catalog, lists, lenses, [id]), name).toMatchObject({ passed: true, failures: [] });
    }
  });

  it("decides a pair the same way from the lists as from the pair's own build record", () => {
    /* The lists ask each engine for the build record of every pair. A run that meets a pair holds that record, and
     * handed no lists it decides by it, as it decides any lens. The two must name the same pairs, in the same
     * words, whatever it is the base engine cannot read. */
    for (const [how, catalog] of Object.entries(BASES)) {
      const { differences, requested } = listsOf(catalog);
      const byRecord = requested.flatMap((pair) => {
        const build: CaptureRequest[] = [{ lens: refOf(pair), state: null, family: "build" }];
        const run = createDifferentialRun({ changeClass: "c0", declaredExceptions: [], restricted: true });
        run.addLens({
          lens: idOf(pair),
          dataChange: "unchanged",
          baseEngine: captureRecords(catalog, build),
          headEngine: captureRecords(CATALOG, build),
        });
        return run.finish().uncompared;
      });
      expect(byRecord, how).toEqual(differences.uncompared);
    }
    /* Four of the five catalogs set something aside, so the agreement is not that of two empty lists. */
    expect(Object.values(BASES).filter((catalog) => listsOf(catalog).differences.uncompared.length > 0)).toHaveLength(
      4,
    );
  });
});

describe("engineDiff changed converters", () => {
  /* A converter that forms several pairs, none of them Tier P's representative. */
  const converter = "fujifilm-gf14x-tc-wr";
  const formed = CATALOG.pairs
    .filter((pair) => pair.teleconverter === converter)
    .map(({ host, teleconverter }) => ({ key: host, teleconverter }));
  /** The catalog with one edit applied to that converter's prescription. */
  const withConverter = (edit: (data: { surfaces: { d: number; elemId: number }[] }) => void): SerializedCatalog => ({
    ...CATALOG,
    teleconverters: CATALOG.teleconverters.map((entry) => {
      if (entry.key !== converter) return entry;
      const data = structuredClone(decodeValue(entry.prescription)) as { surfaces: { d: number; elemId: number }[] };
      edit(data);
      return { ...entry, prescription: encodeValue(data) };
    }),
  });
  const changesTo = (head: SerializedCatalog) =>
    classifyCatalogChanges(CATALOG, head, fingerprintCatalog(CATALOG), fingerprintCatalog(head));
  /** Tier P's lens-level requests of the converter's pairs, when the converter is named as changed. */
  const pairRequests = (changes: ReturnType<typeof changesTo>) =>
    tierRequests("p", {
      ...requestCatalog(CATALOG),
      changedLensKeys: Object.keys(changes.lenses),
      changedTeleconverterKeys: Object.keys(changes.teleconverters),
    }).filter(({ lens, state }) => lens.teleconverter === converter && state === null);
  /** Run the pairs of a changed converter as a driver does, with this checkout standing for both engines. */
  const evaluate = (head: SerializedCatalog): RunSummary => {
    const changes = changesTo(head);
    const run = createDifferentialRun({ changeClass: "c0", declaredExceptions: [], restricted: true });
    for (const lens of formed) {
      const requests = pairRequests(changes).filter((request) => lensId(request.lens) === lensId(lens));
      const records = captureRecords(head, requests);
      run.addLens({
        lens: lensId(lens),
        dataChange: dataChangeOf(changes, lens),
        baseEngine: structuredClone(records),
        headEngine: records,
        baseData: captureRecords(CATALOG, requests),
      });
    }
    return run.finish();
  };

  it("asks Tier P for every pair of a changed converter, and reports what the change did to each", () => {
    expect(formed.length).toBeGreaterThan(1);
    expect(formed.map(lensId)).not.toContain(PAIR_ID);
    const thicker = withConverter((data) => (data.surfaces[1].d += 0.05));
    const changes = changesTo(thicker);
    expect(changes).toMatchObject({ lenses: {}, teleconverters: { [converter]: "semantic" } });
    /* Without the converter's key the tier names none of its pairs. */
    expect(TIER_P.filter(({ lens }) => lens.teleconverter === converter)).toEqual([]);
    expect(pairRequests(changes).map(({ lens, family }) => `${lensId(lens)} ${family}`)).toEqual(
      formed.flatMap((lens) => [`${lensId(lens)} composition`, `${lensId(lens)} build`]),
    );

    const summary = evaluate(thicker);
    expect(summary.passed).toBe(true);
    expect(summary.engine).toMatchObject({ records: 2 * formed.length, recordsDiffering: 0 });
    expect(summary.dataImpact.map(({ lens, change, blocking }) => [lens, change, blocking])).toEqual(
      formed.map((lens) => [lensId(lens), "semantic", 0]),
    );
    expect(summary.dataImpact.every((impact) => impact.recordsDiffering === 2)).toBe(true);
    /* The report names the converter, which is no lens of the run, and the pairs it was compared through. */
    const context: RunContext = { ...REPORT_CONTEXT, lens: null, teleconverters: changes.teleconverters };
    const report = renderDataImpactMarkdown(summary, context);
    expect(report).toContain("## Teleconverters");
    expect(report).toContain(`- \`${converter}\` (semantic), compared through ${formed.map(lensId).join(", ")}.`);
    expect(renderSummaryMarkdown(summary, context)).toContain(
      `${formed.length} changed, 0 new, 1 removed, 1 teleconverters changed or new; 0 blocking differences.`,
    );
  });

  it("blocks a converter change that stops its pairs building", () => {
    /* A first surface that names an element the converter does not have: every pair fails validation. */
    const summary = evaluate(withConverter((data) => (data.surfaces[0].elemId = 99)));
    expect(summary.passed).toBe(false);
    expect(summary.failures).toEqual([`Data impact: ${formed.length} blocking differences.`]);
    expect(summary.dataImpact.map(({ lens, blocking }) => [lens, blocking])).toEqual(
      formed.map((lens) => [lensId(lens), 1]),
    );
    /* The composer still merges the two prescriptions; it is the merged lens that no longer builds. */
    expect(summary.dataImpact[0].blockers).toMatchObject([
      { request: "build", path: "ok", base: "true", head: expect.stringContaining("false") },
    ]);
    /* The build throws on both engines because of the data, which is the data rule's to judge. */
    expect(summary.counts.headEngine.failedRecords).toBe(formed.length);
    expect(summary.thrownOnBothEngines.records).toBe(0);
  });
});

describe("engineDiff declared exceptions", () => {
  it("reads one backticked lens id per bullet under the heading, up to the next heading", () => {
    const description = [
      "S2.P5.T3 Convert the Canon batch",
      "",
      "## Engine-Diff Exceptions",
      "",
      "The base has no V2 ingest:",
      "- `canon-rf-85f12l` is written in V2",
      "* `host-lens+some-converter`",
      "- no key on this line",
      "  - `nested-key` (indented)",
      "",
      "## Testing",
      "- `not-an-exception`",
    ].join("\r\n");
    expect(parseDeclaredExceptions(description)).toEqual(["canon-rf-85f12l", "host-lens+some-converter", "nested-key"]);
  });

  it("declares nothing without the heading, or under an empty one", () => {
    expect(parseDeclaredExceptions("")).toEqual([]);
    expect(parseDeclaredExceptions("- `canon-rf-85f12l`\n\nEngine-diff exceptions: none")).toEqual([]);
    expect(parseDeclaredExceptions("### engine-diff exceptions\n\nNone.\n")).toEqual([]);
  });
});

describe("engineDiff reports", () => {
  it("writes the verdict, the counts, the largest difference per quantity and the failing paths", () => {
    const head = withChange(
      "traces",
      [...RAY, "status"],
      () => "clipped",
      withChange("traces", HIT_POINT_Y, (y) => Number(y) + 2e-9),
    );
    const summary = compare("c1", head);
    const markdown = renderSummaryMarkdown(summary, REPORT_CONTEXT);
    expect(markdown).toContain("# Engine diff: failed");
    expect(markdown).toContain("Tier P, class C1, lens `canon-serenar-50f18` only.");
    expect(markdown).toContain("Base `012345678` (`origin/main`), head `fedcba987` with uncommitted changes.");
    expect(markdown).toContain("- Engine drift: 2 differences not allowed under C1.");
    expect(markdown).toContain("| Rays ok / clipped / failed |");
    expect(markdown).toContain("### Largest difference per quantity");
    expect(markdown).toContain("| Unclipped surface hit, image-plane landing | plan | 1e-9 mm | 1 | 1 |");
    expect(markdown).toContain("`onAxis.rays[1].hits.columns.point[2][1]`");
    expect(markdown).toContain("### Discrete transitions (1)");
    expect(markdown).toContain("| Capture on the base engine | 12.3 |");
    expect(markdown).toContain("0 changed, 0 new, 1 removed");
    expect(renderDataImpactMarkdown(summary, REPORT_CONTEXT)).toContain("- `engine-diff-leaving`");
    /* The summary is written as JSON beside the Markdown. */
    expect(JSON.parse(JSON.stringify(summary))).toEqual(summary);
  });

  it("names the shard a run covered, beside its tier", () => {
    const summary = compare("c0", structuredClone(SERENAR_RECORDS));
    const sharded: RunContext = { ...REPORT_CONTEXT, tier: "s", shard: { index: 3, count: 8 }, lens: null };
    expect(renderSummaryMarkdown(summary, sharded)).toContain("Tier S, class C0, shard 3 of 8. Base `012345678`");
    expect(renderSummaryMarkdown(summary, { ...sharded, lens: SERENAR })).toContain(
      "Tier S, class C0, shard 3 of 8, lens `canon-serenar-50f18` only.",
    );
  });

  it("says under C2 which of the plan's criteria it does not apply", () => {
    const markdown = renderSummaryMarkdown(compare("c2", structuredClone(SERENAR_RECORDS)), REPORT_CONTEXT);
    expect(markdown).toContain("# Engine diff: passed");
    expect(markdown).toContain("Chief-ray launch height: the plan's C2 criterion is");
    expect(renderSummaryMarkdown(compare("c1", structuredClone(SERENAR_RECORDS)), REPORT_CONTEXT)).not.toContain(
      "C2 criterion",
    );
  });
});

/* ── compare.ts: declared transitions ── */

describe("engineDiff declared transitions", () => {
  /* Everything of the prime but its analysis record, which is megabytes to copy for each perturbation. */
  const LIGHT = SERENAR_RECORDS.filter(({ request }) => request !== "analysis");
  const STATE = stateId(DEFAULT_STATE);
  const OTHER_LENS = CATALOG.lenses.find(({ key }) => key !== SERENAR)!.key;
  const LENS_IDS = [...CATALOG.lenses.map(({ key }) => key), PAIR_ID];
  const REASON = "The rim of the third surface now clips this ray.";
  const HEADING = "## Engine-diff transitions";

  /** A description that declares the lines a run printed, each with a reason. */
  const describing = (lines: readonly string[], reason = REASON): string =>
    ["S3.P2.T3 Legacy intersection delegates", "", HEADING, "", ...lines.map((line) => `${line} ${reason}`)].join("\n");

  /** One lens through a run that reads a description, with the lines the run prints for its undeclared units. */
  const judge = (
    changeClass: ChangeClass,
    head: readonly PayloadRecord[],
    description = "",
    base: readonly PayloadRecord[] = LIGHT,
    options: Partial<RunOptions> = {},
  ) => {
    const run = createDifferentialRun({
      changeClass,
      declaredExceptions: [],
      restricted: false,
      declaredTransitions: description,
      catalogLenses: LENS_IDS,
      ...options,
    });
    const output = run.addLens({ lens: base[0].lens, dataChange: "unchanged", baseEngine: base, headEngine: head });
    return { summary: run.finish(), lines: output.transitionLines };
  };
  /** The line a run prints for the one undeclared unit of a comparison. */
  const lineOf = (head: readonly PayloadRecord[], base: readonly PayloadRecord[] = LIGHT): string => {
    const { lines } = judge("c1", head, "", base);
    expect(lines).toHaveLength(1);
    return lines[0];
  };
  const outcomesOf = ({ transitions }: RunSummary) => transitions.declared.map(({ outcome }) => outcome);

  /** A rim clip: the ray's status, the flag of every hit from the clip on, and the landing it no longer has. */
  const clip = (ray: Path = RAY, source: readonly PayloadRecord[] = LIGHT, from = HIT): PayloadRecord[] => {
    const status = withChange("traces", [...ray, "status"], () => "clipped", source);
    const flags = withChange(
      "traces",
      [...ray, "hits", "columns", "clipped"],
      (column) => (column as boolean[]).map((flag, hit) => flag || hit >= from),
      status,
    );
    return withChange("traces", [...ray, "imagePoint"], () => null, flags);
  };
  /* Nine flags, the status and the landing. */
  const CLIP_DIFFERENCES = 11;
  const CLIPPED = clip();
  const CLIP_LINE = lineOf(CLIPPED);
  /** The least transition a unit can hold: the status alone, which leaves every number of the ray paired. */
  const statusOnly = (source: readonly PayloadRecord[] = LIGHT) =>
    withChange("traces", [...RAY, "status"], () => "clipped", source);
  const moved = (path: Path, by: number, source: readonly PayloadRecord[]) =>
    withChange("traces", path, (value) => Number(value) + by, source);

  it("has the records its perturbations assume", () => {
    expect(at(LIGHT, "traces", [...RAY, "hits", "count"])).toBe(11);
    expect(at(LIGHT, "traces", [...RAY, "hits", "columns", "clipped"])).toEqual(new Array(11).fill(false));
    expect(at(LIGHT, "traces", [...RAY, "imagePoint"])).toHaveLength(2);
    expect(at(LIGHT, "traces", ["legacy", "rays", 1, "clipped"])).toBe(false);
    expect(OTHER_LENS).not.toBe(SERENAR);
  });

  it("puts a difference in the unit its path names through its first array index", () => {
    expect(
      [
        "offAxis.rays[4].hits.columns.clipped[7]",
        "offAxis.rays[4].status",
        "offAxis.rays[4]",
        "chromatic.rays.R[0].status",
        "jobs.computePerspectiveDistortionAnalysis.value.grid.rows[2][5].fieldSample.status",
        "jobs.groupMovement.focus.value.groups[0].label",
        "solves[1].vectorLaunch.origin[2]",
        "halfFieldDeg",
        "jobs.computeBestFocusZ.ok",
        "onAxis.rays",
        "",
      ].map(transitionUnit),
    ).toEqual([
      "offAxis.rays[4]",
      "offAxis.rays[4]",
      "offAxis.rays[4]",
      "chromatic.rays.R[0]",
      "jobs.computePerspectiveDistortionAnalysis.value.grid.rows[2][5]",
      "jobs.groupMovement.focus.value.groups[0]",
      "solves[1]",
      "halfFieldDeg",
      "jobs.computeBestFocusZ.ok",
      "onAxis.rays",
      "",
    ]);
  });

  it("reads one transition per bullet under each such heading, with every field in backticks", () => {
    const declared = {
      lens: "host-lens+some-converter",
      state: "zoom=0.5 focus=1 aberration=0 stopdown=0 shift=0 tilt=0",
      path: "offAxis.rays[4].status",
      base: '"ok"',
      head: '"clipped"',
      digest: "0123456789ab",
    };
    const description = [
      "## Engine-diff exceptions",
      "- `some-lens` is written in V2",
      "",
      "### engine-diff transitions",
      "",
      "Two rays of the off-axis fan, and prose that is no bullet is passed over.",
      "- `host-lens+some-converter` `zoom=0.5 focus=1 aberration=0 stopdown=0 shift=0 tilt=0` `traces` " +
        '`offAxis.rays[4].status`: `"ok"` -> `"clipped"`; digest `0123456789ab`. The rim clips it.',
      "  * `host-lens+some-converter` `zoom=0.5 focus=1 aberration=0 stopdown=0 shift=0 tilt=0` `mtf geometric/cdf` " +
        "`(the record)`: `number` -> `null`; digest `ba9876543210`, numbers.   It ends on another surface. Twice.  ",
      "",
      "## Testing",
      "- `not` `a` `declared` `transition`",
      "",
      HEADING,
      '- `some-lens` `lens` `traces` `legacy.rays[2].clipped`: `false` -> `true`; digest `000000000000`. A "reason".',
    ].join("\r\n");
    expect(parseDeclaredTransitions(description)).toEqual([
      { ...declared, request: "traces", numbers: false, reason: "The rim clips it." },
      {
        ...declared,
        request: "mtf geometric/cdf",
        path: "",
        base: "number",
        head: "null",
        digest: "ba9876543210",
        numbers: true,
        reason: "It ends on another surface. Twice.",
      },
      {
        lens: "some-lens",
        state: "lens",
        request: "traces",
        path: "legacy.rays[2].clipped",
        base: "false",
        head: "true",
        digest: "000000000000",
        numbers: false,
        reason: 'A "reason".',
      },
    ]);
    expect(parseDeclaredTransitions("")).toEqual([]);
    expect(parseDeclaredTransitions(`${CLIP_LINE} ${REASON}`)).toEqual([]);
    expect(parseDeclaredTransitions(`${HEADING}\n\nNone.\n`)).toEqual([]);
  });

  it("stops on a bullet it cannot read, and on one with no reason, and names the bullet", () => {
    const unread = ["- `canon-serenar-50f18` status ok -> clipped", "- none", "- `a` `b` `c` `d`: `1` -> `2`. Why."];
    for (const bullet of unread) {
      expect(() => parseDeclaredTransitions(`${HEADING}\n${bullet}\n`)).toThrow(
        `a bullet under "Engine-diff transitions" is not a declared transition:\n  ${bullet}`,
      );
    }
    /* The line a run prints has no reason yet: pasted as it is, it stops the next run. */
    for (const bare of [CLIP_LINE, `${CLIP_LINE}   `]) {
      expect(() => parseDeclaredTransitions(`${HEADING}\n${bare}\n`)).toThrow(
        `a declared transition gives no reason after its full stop:\n  ${CLIP_LINE}`,
      );
    }
    /* A run reads its description before it compares anything. */
    expect(() =>
      createDifferentialRun({
        changeClass: "c1",
        declaredExceptions: [],
        restricted: true,
        declaredTransitions: `${HEADING}\n${CLIP_LINE}\n`,
      }),
    ).toThrow("gives no reason");
    expect(() =>
      createDifferentialRun({
        changeClass: "c0",
        declaredExceptions: [],
        restricted: true,
        declaredTransitions: `${HEADING}\n- none\n`,
      }),
    ).toThrow("is not a declared transition");
  });

  it("prints the line of an undeclared unit, and passes under C1 and C2 once it is pasted back with a reason", () => {
    const undeclared = judge("c1", CLIPPED);
    expect(undeclared.summary.passed).toBe(false);
    expect(undeclared.summary.failures).toEqual([
      `Engine drift: ${CLIP_DIFFERENCES} differences not allowed under C1.`,
    ]);
    expect(undeclared.lines).toEqual([
      `- \`${SERENAR}\` \`${STATE}\` \`traces\` \`onAxis.rays[1].status\`: \`"ok"\` -> \`"clipped"\`; ` +
        `digest \`${/digest `([0-9a-f]{12})`/.exec(CLIP_LINE)?.[1]}\`.`,
    ]);
    expect(undeclared.summary.transitions).toEqual({
      declared: [],
      undeclared: 1,
      undeclaredLines: undeclared.lines,
      breached: { units: 0, samples: [] },
      overflow: { records: 0, samples: [] },
    });

    const description = describing(undeclared.lines);
    for (const changeClass of ["c1", "c2"] as const) {
      const { summary, lines } = judge(changeClass, CLIPPED, description);
      expect(summary.passed, changeClass).toBe(true);
      expect(summary.failures).toEqual([]);
      expect(lines).toEqual([]);
      /* The differences are still counted and listed. What the line changes is that they do not fail. */
      expect(summary.engine).toMatchObject({ recordsDiffering: 1, failing: 0, transitions: CLIP_DIFFERENCES });
      expect(summary.transitions).toEqual({
        declared: [
          {
            line: `${CLIP_LINE} ${REASON}`,
            declared: parseDeclaredTransitions(description)[0],
            outcome: "matched",
            differences: CLIP_DIFFERENCES,
            shapes: 1,
            excusedNumbers: 0,
            covered: expect.any(Array),
          },
        ],
        undeclared: 0,
        undeclaredLines: [],
        breached: { units: 0, samples: [] },
        overflow: { records: 0, samples: [] },
      });
      /* The run passed on the strength of the line, so the report leads with it. */
      const markdown = renderSummaryMarkdown(summary, REPORT_CONTEXT);
      expect(markdown).toContain("# Engine diff: passed");
      expect(markdown.indexOf("## Declared transitions")).toBeGreaterThan(0);
      expect(markdown.indexOf("## Declared transitions")).toBeLessThan(markdown.indexOf("## Counts"));
      expect(markdown).toContain(
        `- Matched, ${CLIP_DIFFERENCES} discrete or shape differences (1 of them a shape, behind which only the ` +
          `hits both sides have are compared): \`${SERENAR}\` \`${STATE}\` \`traces\` `,
      );
      expect(JSON.parse(JSON.stringify(summary))).toEqual(summary);
    }
    /* The failing run's report holds the line to paste. */
    const failing = renderSummaryMarkdown(undeclared.summary, REPORT_CONTEXT);
    expect(failing).toContain("1 unit of the engine comparison holds a discrete or shape difference that no line");
    expect(failing).toContain(`\`\`\`text\n${CLIP_LINE}\n\`\`\``);
    /* A run with nothing declared and nothing discrete to declare says nothing of transitions. */
    expect(renderSummaryMarkdown(judge("c1", structuredClone(LIGHT)).summary, REPORT_CONTEXT)).not.toContain(
      "## Declared transitions",
    );
  });

  it("fails a C0 run whose description declares a transition, and reports under C3 without gating", () => {
    const description = describing([CLIP_LINE]);
    /* A C0 change declares none: the line excuses nothing, and is itself a failure with nothing changed. */
    const strict = judge("c0", CLIPPED, description);
    expect(strict.summary.failures).toEqual([
      `Engine drift: ${CLIP_DIFFERENCES} differences not allowed under C0.`,
      "Declared transitions: a C0 change declares none, and the description declares 1.",
    ]);
    expect(strict.lines).toEqual([]);
    expect(outcomesOf(strict.summary)).toEqual(["notJudged"]);
    const unchanged = judge("c0", structuredClone(LIGHT), description);
    expect(unchanged.summary.failures).toEqual([
      "Declared transitions: a C0 change declares none, and the description declares 1.",
    ]);
    expect(renderSummaryMarkdown(unchanged.summary, REPORT_CONTEXT)).toContain(
      "A C0 change declares no transition, and the description declares 1. No line was matched.",
    );

    const reported = judge("c3", CLIPPED, description);
    expect(reported.summary.passed).toBe(true);
    expect(reported.summary.transitions).toMatchObject({
      declared: [{ outcome: "matched", differences: CLIP_DIFFERENCES }],
      undeclared: 0,
    });
    expect(renderSummaryMarkdown(reported.summary, REPORT_CONTEXT)).toContain(
      "Under C3 the lines are matched and reported, and gate nothing.",
    );
    /* Nothing of the engine comparison gates under C3: neither the unit no line declares, nor the line with
     * nothing behind it, nor the one for a lens there is not. */
    const undeclared = judge("c3", CLIPPED);
    expect(undeclared.summary).toMatchObject({ passed: true, transitions: { undeclared: 1 } });
    expect(undeclared.lines).toEqual([CLIP_LINE]);
    const stale = judge("c3", structuredClone(LIGHT), description);
    expect(stale.summary.passed).toBe(true);
    expect(outcomesOf(stale.summary)).toEqual(["unchanged"]);
    const nowhere = judge("c3", CLIPPED, describing([CLIP_LINE.replace(SERENAR, "no-such-lens")]));
    expect(nowhere.summary.passed).toBe(true);
    expect(outcomesOf(nowhere.summary)).toEqual(["unknownLens"]);
  });

  it("fails on a line with nothing changed behind it", () => {
    for (const changeClass of ["c1", "c2"] as const) {
      const { summary, lines } = judge(changeClass, structuredClone(LIGHT), describing([CLIP_LINE]));
      expect(summary.passed).toBe(false);
      expect(summary.engine.failing).toBe(0);
      expect(outcomesOf(summary)).toEqual(["unchanged"]);
      expect(summary.failures).toEqual([
        "Declared transitions: of 1 declared, 1 nothing discrete changed in the unit. summary.md has each line.",
      ]);
      expect(lines).toEqual([]);
    }
    /* A record that differs in numbers alone has no transition either. */
    const drifted = moved(HIT_POINT_Y, 1e-12, LIGHT);
    expect(outcomesOf(judge("c1", drifted, describing([CLIP_LINE])).summary)).toEqual(["unchanged"]);
  });

  it("fails on a line that names another value, or carries the digest of other differences", () => {
    const wrongValue = judge("c1", CLIPPED, describing([CLIP_LINE.replace('"clipped"', '"failed"')]));
    expect(wrongValue.summary.passed).toBe(false);
    expect(wrongValue.summary.engine.failing).toBe(CLIP_DIFFERENCES);
    expect(wrongValue.summary.transitions.declared).toMatchObject([
      { outcome: "mismatch", differences: 0, detail: `The run found: ${CLIP_LINE}` },
    ]);
    expect(wrongValue.summary.failures).toEqual([
      `Engine drift: ${CLIP_DIFFERENCES} differences not allowed under C1.`,
      "Declared transitions: of 1 declared, 1 not what the run found. summary.md has each line.",
    ]);
    /* The unit is undeclared still, so the run prints the line that would declare it. */
    expect(wrongValue.lines).toEqual([CLIP_LINE]);

    /* One more flag flipped in the declared ray: the named difference is the same, and the digest is not. */
    const oneMore = clip(RAY, LIGHT, HIT - 1);
    const wrongDigest = judge("c1", oneMore, describing([CLIP_LINE]));
    expect(wrongDigest.summary.passed).toBe(false);
    expect(wrongDigest.summary.engine.failing).toBe(CLIP_DIFFERENCES + 1);
    expect(outcomesOf(wrongDigest.summary)).toEqual(["mismatch"]);
    expect(wrongDigest.lines).toHaveLength(1);
    expect(wrongDigest.lines[0]).not.toBe(CLIP_LINE);
    expect(wrongDigest.lines[0].replace(/digest `[0-9a-f]+`/, "")).toBe(CLIP_LINE.replace(/digest `[0-9a-f]+`/, ""));
    expect(judge("c1", oneMore, describing(wrongDigest.lines)).summary.passed).toBe(true);
    /* One flag fewer is another digest too, as is the same set of differences with another value in one. */
    expect(outcomesOf(judge("c1", clip(RAY, LIGHT, HIT + 1), describing([CLIP_LINE])).summary)).toEqual(["mismatch"]);
    const relabelled = withChange("traces", [...RAY, "imagePoint"], () => "none", CLIPPED);
    expect(outcomesOf(judge("c1", relabelled, describing([CLIP_LINE])).summary)).toEqual(["mismatch"]);
    /* A line that names another difference of the unit than the harness does is not the line. */
    const flag = "onAxis.rays[1].hits.columns.clipped[2]";
    const renamed = CLIP_LINE.replace("onAxis.rays[1].status", flag).replace(
      '`"ok"` -> `"clipped"`',
      "`false` -> `true`",
    );
    expect(parseDeclaredTransitions(describing([renamed]))).toMatchObject([
      { path: flag, base: "false", head: "true" },
    ]);
    expect(outcomesOf(judge("c1", CLIPPED, describing([renamed])).summary)).toEqual(["mismatch"]);
    /* Nor is one that names another difference with the same two values under the right digest. */
    const labelled = (label: string, source: readonly PayloadRecord[]) =>
      withChange("traces", RAY, (ray) => ({ ...(ray as object), label }), source);
    const [labelledBase, labelledHead] = [labelled("ok", LIGHT), labelled("clipped", CLIPPED)];
    const labelledLine = lineOf(labelledHead, labelledBase);
    const misnamed = labelledLine.replace("onAxis.rays[1].status", "onAxis.rays[1].label");
    expect(misnamed).not.toBe(labelledLine);
    expect(judge("c1", labelledHead, describing([labelledLine]), labelledBase).summary.passed).toBe(true);
    expect(outcomesOf(judge("c1", labelledHead, describing([misnamed]), labelledBase).summary)).toEqual(["mismatch"]);
  });

  it("fails on a second ray that changed beside the declared one, and names that ray alone", () => {
    const second: Path = ["onAxis", "rays", 2];
    const both = clip(second, CLIPPED);
    const { summary, lines } = judge("c1", both, describing([CLIP_LINE]));
    expect(summary.passed).toBe(false);
    expect(outcomesOf(summary)).toEqual(["matched"]);
    expect(summary.engine.failing).toBe(CLIP_DIFFERENCES);
    expect(summary.engine.failures.every(({ path }) => path.startsWith("onAxis.rays[2]"))).toBe(true);
    expect(summary.transitions.undeclared).toBe(1);
    expect(lines).toEqual([lineOf(clip(second))]);
    expect(judge("c1", both, describing([CLIP_LINE, ...lines])).summary.passed).toBe(true);
  });

  it("holds the numbers of a declared ray to their budgets, and with `numbers` lets its terminal values go", () => {
    /* The ray ends elsewhere, so its terminal point is held to the looser budget, and is past that too. */
    const terminal = moved([...RAY, "terminalPoint", 1], 5e-7, CLIPPED);
    const without = judge("c1", terminal, describing([CLIP_LINE]));
    expect(without.summary.passed).toBe(false);
    expect(failuresOf(without.summary)).toEqual([
      { request: "traces", path: "onAxis.rays[1].terminalPoint[1]", kind: "number", quantity: "clippedHit" },
    ]);
    expect(without.summary.transitions.declared).toMatchObject([
      { outcome: "matched", excusedNumbers: 0, detail: expect.stringContaining("does not say `numbers`") },
    ]);
    /* The line the run prints for such a unit says `numbers`, and passes when pasted back. */
    const line = lineOf(terminal);
    expect(line).toBe(`${CLIP_LINE.slice(0, -1)}, numbers.`);
    const permitted = judge("c1", terminal, describing([line]));
    expect(permitted.summary.passed).toBe(true);
    expect(permitted.summary.transitions.declared).toMatchObject([{ outcome: "matched", excusedNumbers: 1 }]);
    expect(permitted.summary.engine.quantities.clippedHit).toMatchObject({ beyondBudget: 1 });
    expect(renderSummaryMarkdown(permitted.summary, REPORT_CONTEXT)).toContain(
      `- Matched, ${CLIP_DIFFERENCES} discrete or shape differences (1 of them a shape, behind which only the ` +
        "hits both sides have are compared) and 1 number beyond budget: ",
    );

    /* `numbers` permits and does not assert: with nothing beyond budget the line is as good. */
    expect(judge("c1", CLIPPED, describing([line])).summary.passed).toBe(true);
    expect(judge("c1", moved([...RAY, "terminalPoint", 1], 5e-8, CLIPPED), describing([line])).summary.passed).toBe(
      true,
    );

    /* A hit both sides have is the same hit: its coordinates are not among the fields `numbers` permits. */
    const hit = judge("c1", moved(HIT_POINT_Y, 5e-7, terminal), describing([line]));
    expect(hit.summary.passed).toBe(false);
    expect(failuresOf(hit.summary)).toEqual([
      { request: "traces", path: "onAxis.rays[1].hits.columns.point[2][1]", kind: "number", quantity: "clippedHit" },
    ]);
    expect(hit.summary.transitions.declared).toMatchObject([{ outcome: "matched", excusedNumbers: 1 }]);
    /* Nor is anything outside the declared unit: the same terminal value of the ray beside it. */
    const beside = judge("c1", moved(["onAxis", "rays", 2, "terminalPoint", 1], 5e-7, terminal), describing([line]));
    expect(failuresOf(beside.summary)).toEqual([
      { request: "traces", path: "onAxis.rays[2].terminalPoint[1]", kind: "number", quantity: "landing" },
    ]);
    /* Nor an aggregate that the ray's change moved, which is in no ray's unit. */
    const aggregate = judge("c1", moved(["pupilSemiDiameterMm"], 1e-6, terminal), describing([line]));
    expect(failuresOf(aggregate.summary)).toEqual([
      { request: "traces", path: "pupilSemiDiameterMm", kind: "number", quantity: "firstOrder" },
    ]);
  });

  it("takes the fields `numbers` permits from the budget table's rows for a ray's terminal values", () => {
    const legacy: Path = ["legacy", "rays", 1];
    /* The stack tracer has no status: its ray clips by a flag, and draws the rest of its path as ghost points. */
    const ghosted = (source: readonly PayloadRecord[]) =>
      withChange("traces", [...legacy, "ghostPts"], () => [[1, 2]], source);
    const legacyBase = ghosted(LIGHT);
    const legacyClipped = withChange("traces", [...legacy, "clipped"], () => true, legacyBase);
    const cases: [permitted: boolean, path: Path, by: number, legacyRay?: true][] = [
      [true, [...RAY, "terminalPoint", 1], 5e-7],
      [true, [...RAY, "terminalDirection", 1], 1e-6],
      [true, [...RAY, "imagePoint", 1], 5e-7],
      [true, [...RAY, "x"], 5e-7],
      [true, [...RAY, "y"], 5e-7],
      [true, [...RAY, "ux"], 1e-6],
      [true, [...RAY, "uy"], 1e-6],
      [true, [...legacy, "pts", 3, 1], 1e-6, true],
      [true, [...legacy, "ghostPts", 0, 1], 5e-7, true],
      [true, [...legacy, "y"], 5e-7, true],
      [true, [...legacy, "u"], 1e-6, true],
      /* What the ray was launched with, what it met on the way, and a height no surface of it decides. */
      [false, [...RAY, "input", "origin", 1], 5e-7],
      [false, [...RAY, "input", "direction", 1], 1e-6],
      [false, [...RAY, "hits", "columns", "point", HIT, 1], 5e-7],
      [false, [...RAY, "hits", "columns", "normal", HIT, 1], 1e-6],
      [false, [...RAY, "hits", "columns", "radius", HIT], 5e-7],
      [false, [...legacy, "paraxialImageHeight"], 1e-6, true],
    ];
    /* The medium a ray ended in and the stack tracer's transmission follow from where the ray ended too, so a ray
     * that newly stops or completes inside glass can be declared. */
    cases.push(
      [true, [...RAY, "finalMedium"], 1e-6],
      [true, [...RAY, "diagnostics", "finalMedium"], 1e-6],
      [true, [...legacy, "transmission"], 1e-6, true],
    );
    for (const [permitted, path, by, legacyRay] of cases) {
      const [base, transition] = legacyRay ? [legacyBase, legacyClipped] : [LIGHT, statusOnly()];
      const name = path.join(".");
      /* Every one of these fields has a row of the budget table: the list names rows, and adds no class. */
      expect(
        resolveBudgetRule(
          "traces",
          path.map((step) => (typeof step === "number" ? "[]" : step)),
        ),
        name,
      ).not.toBeNull();
      const head = moved(path, by, transition);
      const declared = `${lineOf(transition, base)}`.replace(/\.$/, ", numbers.");
      const { summary } = judge("c1", head, describing([declared]), base);
      expect(failuresOf(judge("c1", head, describing([lineOf(transition, base)]), base).summary), name).toEqual([
        expect.objectContaining({ kind: "number" }),
      ]);
      expect(summary.passed, name).toBe(permitted);
      expect(summary.transitions.declared[0].excusedNumbers, name).toBe(permitted ? 1 : 0);
    }
    /* The harness names the status of a unit that has one, and otherwise its first difference in path order. */
    expect(lineOf(legacyClipped, legacyBase)).toContain("`legacy.rays[1].clipped`: `false` -> `true`; digest ");
    const reasoned = withChange("traces", [...RAY, "failureReason"], () => "noBracket", statusOnly());
    expect(lineOf(reasoned)).toContain('`onAxis.rays[1].status`: `"ok"` -> `"clipped"`; digest ');
  });

  it("holds the head side of a declared unit to the intersection contract, in a hit column that grew as well", () => {
    /** The ray with one hit more on the head side: every hit column a row longer, which no paired walk enters. */
    const grown = (change: (columns: Record<string, unknown[]>) => void = () => {}, source = LIGHT) =>
      withChange(
        "traces",
        [...RAY, "hits"],
        (hits) => {
          const { count, columns } = hits as { count: number; columns: Record<string, unknown[]> };
          const longer = Object.fromEntries(
            Object.entries(columns).map(([name, column]) => [name, [...column, structuredClone(column[count - 1])]]),
          );
          change(longer);
          return { count: count + 1, columns: longer };
        },
        source,
      );
    const line = lineOf(grown());
    expect(line).toContain("`onAxis.rays[1].hits.columns.clipped`: `array of 11` -> `array of 12`; digest ");
    expect(judge("c1", grown(), describing([line])).summary).toMatchObject({
      passed: true,
      transitions: { declared: [{ outcome: "matched", differences: 13, shapes: 12 }] },
    });

    /* The digest holds the shape of the column and not what is in it, so the line still names what the run found.
     * What the new hit carries is for the head side to answer alone. */
    const breaches: [string, (columns: Record<string, unknown[]>) => void, string][] = [
      ["a residual", (columns) => (columns.residual[11] = 1e-6), "1000000 times the effective tolerance"],
      ["a residual at the edge", (columns) => (columns.residual[11] = -1.5e-12), "1.5 times the effective tolerance"],
      ["no tolerance", (columns) => (columns.effectiveTolerance[11] = 0), "Infinity times the effective tolerance"],
      ["a residual that is no number", (columns) => (columns.residual[11] = encodeValue(Number.NaN)), "Infinity times"],
      ["a point that is no number", (columns) => (columns.point[11] = [0, encodeValue(Number.NaN), 1]), "is NaN"],
      [
        "a radius that is infinite",
        (columns) => (columns.radius[11] = encodeValue(Number.POSITIVE_INFINITY)),
        "is Infinity",
      ],
    ];
    for (const [name, change, said] of breaches) {
      /* With nothing declared the run writes what it found in place of a line, which a next run would only refuse. */
      const undeclared = judge("c1", grown(change));
      expect(undeclared.lines, name).toEqual([]);
      expect(undeclared.summary.transitions, name).toMatchObject({
        undeclared: 0,
        breached: {
          units: 1,
          samples: [expect.stringContaining(`\`${SERENAR}\` \`${STATE}\` \`traces\` \`onAxis.rays[1]\`: On the head `)],
        },
      });
      expect(undeclared.summary.transitions.breached.samples[0], name).toContain(said);
      expect(undeclared.summary.engine.failing, name).toBe(13);
      const { summary, lines } = judge("c1", grown(change), describing([line]));
      expect(summary.passed, name).toBe(false);
      expect(summary.engine.failing, name).toBe(13);
      expect(summary.transitions.declared, name).toMatchObject([
        { outcome: "contract", differences: 0, detail: expect.stringContaining(said) },
      ]);
      expect(summary.failures[1], name).toBe(
        "Declared transitions: of 1 declared, 1 refused, the unit holds what no line excuses. " +
          "summary.md has each line.",
      );
      /* The line names what the run found and is refused: there is no other line to paste. */
      expect(lines, name).toEqual([]);
      expect(judge("c3", grown(change), describing([line])).summary.passed, name).toBe(true);
    }
    /* Within its tolerance the new hit passes, at either sign. */
    expect(
      judge(
        "c1",
        grown((columns) => (columns.residual[11] = -9e-13)),
        describing([line]),
      ).summary.passed,
    ).toBe(true);

    /* A hit both sides have answers on the head side as well, whatever the paired walk made of it. */
    const residual: Path = [...RAY, "hits", "columns", "residual", HIT];
    const outside = withChange("traces", residual, () => 5e-12, CLIPPED);
    const paired = judge("c1", outside, describing([CLIP_LINE]));
    expect(outcomesOf(paired.summary)).toEqual(["contract"]);
    expect(failuresOf(paired.summary)).toContainEqual(
      expect.objectContaining({ path: "onAxis.rays[1].hits.columns.residual[2]", kind: "contract" }),
    );
    /* Outside its tolerance alike on both sides, the walk sees no difference, and the head side still answers. */
    const alike = judge(
      "c1",
      outside,
      describing([CLIP_LINE]),
      withChange("traces", residual, () => 5e-12, LIGHT),
    );
    expect(outcomesOf(alike.summary)).toEqual(["contract"]);
    expect(alike.summary.engine.failing).toBe(CLIP_DIFFERENCES);

    /* A non-finite number of the declared ray fails with `numbers` as without: no line excuses a mismatch. */
    const nan = withChange("traces", [...RAY, "terminalPoint", 1], () => encodeValue(Number.NaN), CLIPPED);
    const numbers = `${CLIP_LINE.slice(0, -1)}, numbers.`;
    const mismatched = judge("c1", nan, describing([numbers]));
    expect(outcomesOf(mismatched.summary)).toEqual(["contract"]);
    expect(failuresOf(mismatched.summary)).toContainEqual(
      expect.objectContaining({ path: "onAxis.rays[1].terminalPoint[1]", kind: "nonFinite" }),
    );
    /* One the base side repeats at the same place is no news of the head's: a ray may carry a slope it never had. */
    const slope: Path = [...RAY, "ux"];
    const undefinedSlope = (source: readonly PayloadRecord[]) =>
      withChange("traces", slope, () => encodeValue(Number.NaN), source);
    expect(judge("c1", undefinedSlope(CLIPPED), describing([CLIP_LINE]), undefinedSlope(LIGHT)).summary.passed).toBe(
      true,
    );
  });

  it("fails a number with no class inside a declared unit, with `numbers` as without", () => {
    const withMember = (value: number, source: readonly PayloadRecord[]) =>
      withChange("traces", RAY, (ray) => ({ ...(ray as object), unbudgeted: value }), source);
    const base = withMember(1, LIGHT);
    const head = withMember(1 + Number.EPSILON, CLIPPED);
    for (const line of [CLIP_LINE, `${CLIP_LINE.slice(0, -1)}, numbers.`]) {
      const { summary } = judge("c1", head, describing([line]), base);
      expect(outcomesOf(summary)).toEqual(["matched"]);
      expect(failuresOf(summary)).toEqual([
        { request: "traces", path: "onAxis.rays[1].unbudgeted", kind: "unclassified", quantity: null },
      ]);
    }
  });

  it("holds a line to its own record: the same unit under another state, request or lens declares nothing", () => {
    const elsewhere: [string, string, string][] = [
      [STATE, stateId({ ...DEFAULT_STATE, zoomT: 1 }), "notJudged"],
      ["`traces`", "`mtf`", "unchanged"],
      [`\`${SERENAR}\``, `\`${OTHER_LENS}\``, "notJudged"],
    ];
    for (const [written, instead, outcome] of elsewhere) {
      const line = CLIP_LINE.replace(written, instead);
      expect(line).not.toBe(CLIP_LINE);
      const { summary, lines } = judge("c1", CLIPPED, describing([line]));
      expect(summary.passed, instead).toBe(false);
      expect(summary.engine.failing, instead).toBe(CLIP_DIFFERENCES);
      expect(outcomesOf(summary), instead).toEqual([outcome]);
      expect(lines, instead).toEqual([CLIP_LINE]);
    }
    /* A variant is part of a record's request, and of the line for it. */
    const named = (records: readonly PayloadRecord[]) =>
      records.map((record) => (record.request === "traces" ? { ...record, variant: "ghost" } : record));
    const variantLine = lineOf(named(CLIPPED), named(LIGHT));
    expect(variantLine).toBe(CLIP_LINE.replace("`traces`", "`traces ghost`"));
    expect(judge("c1", named(CLIPPED), describing([variantLine]), named(LIGHT)).summary.passed).toBe(true);
    expect(judge("c1", named(CLIPPED), describing([CLIP_LINE]), named(LIGHT)).summary.passed).toBe(false);
  });

  it("fails on a lens id the catalog does not hold, and lists a line for a record the run did not ask for", () => {
    /* A line names a lens of the catalog or one of its pairs, whichever part of a tier the run covers. */
    for (const restricted of [false, true]) {
      const { summary } = judge(
        "c1",
        CLIPPED,
        describing([CLIP_LINE, CLIP_LINE.replace(SERENAR, "no-such-lens")]),
        LIGHT,
        {
          restricted,
        },
      );
      expect(outcomesOf(summary)).toEqual(["matched", "unknownLens"]);
      expect(summary.failures).toEqual([
        "Declared transitions: of 2 declared, 1 no such lens. summary.md has each line.",
      ]);
    }
    /* A lens of another shard, or one a narrowed run left out: its line is listed, and judged by the run that
     * meets it. So is a line for a state or a request this tier does not ask of the lens. */
    const other = [
      CLIP_LINE.replace(SERENAR, OTHER_LENS),
      CLIP_LINE.replace(SERENAR, PAIR_ID),
      CLIP_LINE.replace(STATE, stateId({ ...DEFAULT_STATE, focusT: 1 })),
      CLIP_LINE.replace("`traces`", "`analysis`"),
    ];
    for (const restricted of [true, false]) {
      const narrowed = judge("c1", CLIPPED, describing([CLIP_LINE, ...other]), LIGHT, { restricted });
      expect(narrowed.summary.passed).toBe(true);
      expect(outcomesOf(narrowed.summary)).toEqual(["matched", "notJudged", "notJudged", "notJudged", "notJudged"]);
    }
    const { summary } = judge("c1", CLIPPED, describing([CLIP_LINE, ...other]));
    expect(renderSummaryMarkdown(summary, REPORT_CONTEXT)).toContain(
      `- Not judged, the run did not ask for the record: \`${OTHER_LENS}\` \`${STATE}\` \`traces\` `,
    );
    /* Without the catalog's ids a run can vouch only for the lenses it met. */
    const unlisted = judge("c1", CLIPPED, describing([CLIP_LINE, other[0]]), LIGHT, { catalogLenses: undefined });
    expect(outcomesOf(unlisted.summary)).toEqual(["matched", "unknownLens"]);
    expect(unlisted.summary.passed).toBe(false);
  });

  it("refuses a declaration of a record or a job that starts or stops throwing", () => {
    const thrown = { ok: false as const, error: { name: "Error", message: "boom" } };
    const handwritten = (request: string, path: string, base: string, head: string) =>
      `- \`${SERENAR}\` \`${STATE}\` \`${request}\` \`${path}\`: \`${base}\` -> \`${head}\`; digest \`000000000000\`.`;

    /* A record: the walk starts at the outcome, where `ok` flips and one of `value` and `error` comes and goes. */
    const recordThrows = LIGHT.map((record) => (record.request === "mtf" ? { ...record, payload: thrown } : record));
    const outcome = [
      handwritten("mtf", "ok", "true", "false"),
      handwritten("mtf", "value", "object", "absent"),
      handwritten("mtf", "error", "absent", "object"),
    ];
    for (const [base, head] of [
      [LIGHT, recordThrows],
      [recordThrows, LIGHT],
    ]) {
      const undeclared = judge("c1", head, "", base);
      expect(undeclared.summary.engine.failing).toBe(3);
      /* Nothing here can be declared, so the run prints no line for it. */
      expect(undeclared.lines).toEqual([]);
      expect(undeclared.summary.transitions.undeclared).toBe(0);
      const declared = judge("c1", head, describing(outcome), base);
      expect(declared.summary.engine.failing).toBe(3);
      expect(outcomesOf(declared.summary)).toEqual(["refused", "refused", "refused"]);
      expect(declared.summary.failures[1]).toBe(
        "Declared transitions: of 3 declared, 3 refused, this cannot be declared. summary.md has each line.",
      );
    }

    /* A job of an analysis record: the same three members, under the job. */
    const job = "jobs.computeBestFocusZ";
    const jobThrows = withChange("analysis", ["jobs", "computeBestFocusZ"], () => thrown);
    const jobLines = [
      handwritten("analysis", `${job}.ok`, "true", "false"),
      handwritten("analysis", `${job}.value`, "number", "absent"),
      handwritten("analysis", `${job}.error`, "absent", "object"),
    ];
    for (const changeClass of ["c1", "c2"] as const) {
      const undeclared = judge(changeClass, jobThrows, "", SERENAR_RECORDS);
      expect(failuresOf(undeclared.summary).map(({ path }) => path)).toEqual([
        `${job}.ok`,
        `${job}.value`,
        `${job}.error`,
      ]);
      expect(undeclared.lines).toEqual([]);
      const declared = judge(changeClass, jobThrows, describing(jobLines), SERENAR_RECORDS);
      expect(declared.summary.passed).toBe(false);
      expect(declared.summary.engine.failing).toBe(3);
      expect(outcomesOf(declared.summary)).toEqual(["refused", "refused", "refused"]);
    }
    /* A job that throws on both engines with other words is an outcome that stayed one: that can be declared. */
    const reworded = withChange("analysis", ["jobs", "computeBestFocusZ"], () => ({
      ok: false,
      error: { name: "Error", message: "bang, at `z`" },
    }));
    const line = lineOf(reworded, jobThrows);
    /* A backtick in a value is written as its JSON escape, so the fields of a line stay apart. */
    expect(line).toContain(`\`${job}.error.message\`: \`"boom"\` -> \`"bang, at \\u0060z\\u0060"\`; digest `);
    expect(judge("c1", reworded, describing([line]), jobThrows).summary.passed).toBe(true);
  });

  it("refuses a declaration in a build, a composition or a layout record", () => {
    const pair = recordsOf(PAIR_ID);
    const cases: [RequestFamily, Path, (value: unknown) => unknown, readonly PayloadRecord[]][] = [
      ["build", ["N"], (count) => Number(count) + 1, LIGHT],
      ["build", ["S", 2, "elemId"], (id) => Number(id) + 1, LIGHT],
      ["build", ["data", "surfaces"], (surfaces) => (surfaces as unknown[]).slice(1), LIGHT],
      ["layout", ["z"], (z) => [...(z as number[]), 0], LIGHT],
      ["composition", ["compatibility", "geometry", "platesAhead"], (count) => Number(count) + 1, pair],
    ];
    for (const [request, path, change, source] of cases) {
      const head = withChange(request, path, change, source);
      const where = path.reduce<string>(
        (text, step) => (typeof step === "number" ? `${text}[${step}]` : `${text}.${step}`),
        "",
      );
      const undeclared = judge("c1", head, "", source);
      expect(undeclared.summary.passed, where).toBe(false);
      expect(undeclared.lines, where).toEqual([]);
      const state = stateId(source.find((record) => record.request === request)!.state);
      const line =
        `- \`${source[0].lens}\` \`${state}\` \`${request}\` \`${where.slice(1)}\`: \`1\` -> \`2\`; ` +
        "digest `000000000000`. A reason.";
      const declared = judge("c1", head, `${HEADING}\n${line}`, source);
      expect(declared.summary.passed, where).toBe(false);
      expect(outcomesOf(declared.summary), where).toEqual(["refused"]);
      expect(declared.summary.engine.failing, where).toBe(undeclared.summary.engine.failing);
    }
  });

  it("writes a number set against another type as a word, so its digits are no part of the line", () => {
    const height: Path = ["legacy", "rays", 1, "paraxialImageHeight"];
    const gone = withChange("traces", height, () => null);
    const line = lineOf(gone, SERENAR_RECORDS);
    expect(line).toContain("`legacy.rays[1].paraxialImageHeight`: `number` -> `null`; digest ");
    /* Another base, one ulp away, finds the same transition and the same line. */
    const nudged = withChange("traces", height, (value) => Number(value) * (1 + Number.EPSILON));
    expect(lineOf(gone, nudged)).toBe(line);
    expect(judge("c1", gone, describing([line]), nudged).summary.passed).toBe(true);
    /* A count is exact, and its two values are the transition. */
    const counted = withChange("traces", [...RAY, "terminalSurfaceIndex"], (index) => Number(index) - 1, LIGHT);
    expect(lineOf(counted)).toContain("`onAxis.rays[1].terminalSurfaceIndex`: `10` -> `9`; digest ");
  });

  it("fails a record with more transitions than it sorts into units, and matches no line in it", () => {
    /* One more than the 20000 discrete and shape differences a run holds for one record. */
    const flags = (set: number): ComparableRecord => ({
      lens: SERENAR,
      state: DEFAULT_STATE,
      request: "traces",
      payload: { ok: true, value: { flags: Array.from({ length: 20_001 }, (_, flag) => flag < set), status: "ok" } },
    });
    const run = (changeClass: ChangeClass, description: string, count = 20_001) => {
      const comparison = createDifferentialRun({
        changeClass,
        declaredExceptions: [],
        restricted: false,
        declaredTransitions: description,
        catalogLenses: LENS_IDS,
      });
      const output = comparison.addLens({
        lens: SERENAR,
        dataChange: "unchanged",
        baseEngine: [flags(0)],
        headEngine: [flags(count)],
      });
      return { summary: comparison.finish(), lines: output.transitionLines };
    };
    const line =
      `- \`${SERENAR}\` \`${STATE}\` \`traces\` \`flags[0]\`: \`false\` -> \`true\`; ` + "digest `000000000000`. Why.";
    for (const description of ["", `${HEADING}\n${line}`]) {
      const { summary, lines } = run("c1", description);
      expect(summary.passed).toBe(false);
      expect(summary.engine.failing).toBe(20_001);
      expect(lines).toEqual([]);
      expect(summary.transitions.overflow).toEqual({ records: 1, samples: [`${SERENAR} traces at ${STATE}`] });
      expect(summary.failures).toContainEqual(
        "Declared transitions: no line was matched in 1 record with more than 20000 discrete and shape " +
          `differences (${SERENAR} traces at ${STATE}).`,
      );
      expect(renderSummaryMarkdown(summary, REPORT_CONTEXT)).toContain(
        "1 record holds more than 20000 discrete and shape",
      );
    }
    expect(outcomesOf(run("c1", `${HEADING}\n${line}`).summary)).toEqual(["overflow"]);
    /* At the cap every unit is still sorted and printed, and a line is held to its unit as in any record. */
    const full = run("c1", "", 20_000);
    expect(full.summary.transitions).toMatchObject({ undeclared: 20_000, overflow: { records: 0 } });
    expect(full.lines).toHaveLength(20_000);
    expect(full.summary.transitions.undeclaredLines).toHaveLength(200);
    const declared = run("c1", `${HEADING}\n${full.lines[0]} Why.`, 20_000);
    expect(outcomesOf(declared.summary)).toEqual(["matched"]);
    expect(declared.summary.engine.failing).toBe(19_999);
  });

  it("gives a lens handed over in parts the verdict of the lens whole", () => {
    /** One lens through a run, whole or cut after its build constants and again inside its state. */
    const through = (head: readonly PayloadRecord[], description: string, cuts: readonly number[]) => {
      const run = createDifferentialRun({
        changeClass: "c1",
        declaredExceptions: [],
        restricted: false,
        declaredTransitions: description,
        catalogLenses: LENS_IDS,
      });
      const bounds = [0, ...cuts, LIGHT.length];
      const outputs = bounds.slice(1).map((to, part) =>
        run.addLens({
          lens: SERENAR,
          dataChange: "unchanged",
          baseEngine: LIGHT.slice(bounds[part], to),
          headEngine: head.slice(bounds[part], to),
        }),
      );
      return {
        summary: run.finish(),
        lines: outputs.flatMap((output) => output.transitionLines),
        failingRecords: outputs.flatMap((output) => output.failingRecords),
      };
    };
    const second = clip(["offAxis", "rays", 2], CLIPPED);
    const terminal = moved([...RAY, "terminalPoint", 1], 5e-7, second);
    const cases: Record<string, [head: readonly PayloadRecord[], description: string, passes: boolean]> = {
      declared: [second, describing([CLIP_LINE, lineOf(clip(["offAxis", "rays", 2]))]), true],
      undeclared: [second, "", false],
      oneOfTwo: [second, describing([CLIP_LINE]), false],
      mismatched: [second, describing([CLIP_LINE.replace('"clipped"', '"failed"')]), false],
      unchanged: [structuredClone(LIGHT), describing([CLIP_LINE]), false],
      withoutNumbers: [terminal, describing([CLIP_LINE, lineOf(clip(["offAxis", "rays", 2]))]), false],
      elsewhere: [CLIPPED, describing([CLIP_LINE, CLIP_LINE.replace("`traces`", "`layout`")]), false],
    };
    for (const [name, [head, description, passes]] of Object.entries(cases)) {
      const whole = through(head, description, []);
      expect(whole.summary.passed, name).toBe(passes);
      /* The traces record is the third of the six: alone in its part, first in it, and last in it. */
      for (const cuts of [[1, 3], [2, 3], [1, 2, 3, 4, 5], [2], [3]]) {
        expect(through(head, description, cuts), `${name} cut at ${cuts.join(", ")}`).toEqual(whole);
      }
    }
  });

  it("excuses nothing outside the engine comparison", () => {
    const description = describing([CLIP_LINE]);
    const run = (dataChange: DataChange, baseData: readonly PayloadRecord[] | null) => {
      const comparison = createDifferentialRun({
        changeClass: "c1",
        declaredExceptions: [],
        restricted: false,
        declaredTransitions: description,
        catalogLenses: LENS_IDS,
      });
      comparison.addLens({ lens: SERENAR, dataChange, baseEngine: LIGHT, headEngine: CLIPPED, baseData });
      return comparison.finish();
    };
    /* The engines differ by the declared clip, and so do the base and head prescriptions on the head engine. A
     * format-only change must leave every record bit-identical, whatever is declared of the engines. */
    const format = run("format", LIGHT);
    expect(outcomesOf(format)).toEqual(["matched"]);
    expect(format.engine.failing).toBe(0);
    expect(format.formatOnly.failing).toBe(CLIP_DIFFERENCES);
    expect(format.failures).toEqual([
      `Format-only data change: ${CLIP_DIFFERENCES} differences; the records must be bit-identical.`,
    ]);
    /* A semantic change that fails a ray blocks, declared or not. */
    const failed = withChange("traces", [...RAY, "status"], () => "failed", LIGHT);
    const comparison = createDifferentialRun({
      changeClass: "c1",
      declaredExceptions: [],
      restricted: false,
      declaredTransitions: describing([lineOf(failed)]),
      catalogLenses: LENS_IDS,
    });
    comparison.addLens({
      lens: SERENAR,
      dataChange: "semantic",
      baseEngine: LIGHT,
      headEngine: failed,
      baseData: LIGHT,
    });
    const semantic = comparison.finish();
    expect(outcomesOf(semantic)).toEqual(["matched"]);
    expect(semantic.failures).toEqual(["Data impact: 1 blocking difference."]);

    /* A record that throws alike on both engines compares nothing, and no line stands in for it. */
    const thrown = { ok: false as const, error: { name: "TypeError", message: "capture defect" } };
    const both = (message: string) =>
      LIGHT.map((record) =>
        record.request === "traces"
          ? { ...record, payload: { ...thrown, error: { ...thrown.error, message } } }
          : record,
      );
    const line = lineOf(both("another defect"), both("capture defect"));
    expect(line).toContain('`error.message`: `"capture defect"` -> `"another defect"`; digest ');
    const declared = judge("c1", both("another defect"), describing([line]), both("capture defect"));
    expect(outcomesOf(declared.summary)).toEqual(["matched"]);
    expect(declared.summary.failures).toEqual([expect.stringContaining("Threw on both engines")]);

    /* A lens the base engine cannot evaluate is compared with nothing, so a line for it declares nothing. */
    const unevaluated = LIGHT.map((record) => ({ ...record, payload: thrown }));
    const exception = createDifferentialRun({
      changeClass: "c1",
      declaredExceptions: [SERENAR],
      restricted: false,
      declaredTransitions: description,
      catalogLenses: LENS_IDS,
    });
    exception.addLens({ lens: SERENAR, dataChange: "unchanged", baseEngine: unevaluated, headEngine: CLIPPED });
    const uncompared = exception.finish();
    expect(outcomesOf(uncompared)).toEqual(["uncompared"]);
    expect(uncompared.failures).toEqual([
      "Declared transitions: of 1 declared, 1 the lens was not compared. summary.md has each line.",
    ]);
  });

  /** The ray ending early on the head side: every hit column cut to its first hits, and the status of a miss. */
  const cut = (
    to: number,
    change: (columns: Record<string, unknown[]>) => void = () => {},
    source: readonly PayloadRecord[] = LIGHT,
  ): PayloadRecord[] => {
    const shorter = withChange(
      "traces",
      [...RAY, "hits"],
      (hits) => {
        const columns = Object.fromEntries(
          Object.entries((hits as { columns: Record<string, unknown[]> }).columns).map(([name, column]) => [
            name,
            structuredClone(column.slice(0, to)),
          ]),
        );
        change(columns);
        return { count: to, columns };
      },
      source,
    );
    return withChange("traces", [...RAY, "status"], () => "failed", shorter);
  };
  const breachedOf = ({ transitions }: RunSummary) => transitions.breached;

  it("compares the hits both sides have where the hit columns changed length", () => {
    /* The ray misses the tenth surface: nine hits where there were eleven. The paired walk reports each column once,
     * as a shape, and enters none of them. */
    const line = lineOf(cut(9));
    expect(line).toContain('`onAxis.rays[1].status`: `"ok"` -> `"failed"`; digest ');
    const declared = judge("c1", cut(9), describing([line]));
    expect(declared.summary.passed).toBe(true);
    /* The status, the hit count and the twelve columns. */
    expect(declared.summary.transitions.declared).toMatchObject([{ outcome: "matched", differences: 14, shapes: 12 }]);

    /* A hit that both sides have is the same hit, and is held to the budget it has in a ray that kept its length. */
    const movedHit = (by: number) => cut(9, (columns) => ((columns.point[3] as number[])[1] += by));
    const far = judge("c1", movedHit(1e-4), describing([line]));
    expect(far.summary.passed).toBe(false);
    expect(far.summary.engine.failing).toBe(14);
    expect(far.summary.transitions.declared).toMatchObject([
      {
        outcome: "contract",
        differences: 0,
        detail: expect.stringMatching(
          /^In a hit both sides have, `onAxis\.rays\[1\]\.hits\.columns\.point\[3\]\[1\]` differs by 0\.0001 mm/,
        ),
      },
    ]);
    /* Nothing declares such a unit, so the run prints the breach and no line to paste. */
    const undeclared = judge("c1", movedHit(1e-4));
    expect(undeclared.lines).toEqual([]);
    expect(undeclared.summary.transitions).toMatchObject({ undeclared: 0, undeclaredLines: [] });
    expect(breachedOf(undeclared.summary)).toEqual({
      units: 1,
      samples: [
        expect.stringMatching(
          new RegExp(
            `^\`${SERENAR}\` \`${STATE}\` \`traces\` \`onAxis\\.rays\\[1\\]\`: In a hit both sides have, ` +
              "`onAxis\\.rays\\[1\\]\\.hits\\.columns\\.point\\[3\\]\\[1\\]` differs by 0\\.0001 mm",
          ),
        ),
      ],
    });
    expect(renderSummaryMarkdown(undeclared.summary, REPORT_CONTEXT)).toContain(
      "1 unit holds a discrete or shape difference that no line can declare",
    );
    /* Within its budget the same hit passes, and beyond the budget of an unclipped hit it does not. */
    expect(judge("c1", movedHit(5e-10), describing([line])).summary.passed).toBe(true);
    expect(outcomesOf(judge("c1", movedHit(5e-9), describing([line])).summary)).toEqual(["contract"]);
    /* So do its direction cosines, and its residual against the tolerance recorded beside it on either side. */
    const turned = cut(9, (columns) => ((columns.normal[3] as number[])[1] += 1e-6));
    expect(outcomesOf(judge("c1", turned, describing([line])).summary)).toEqual(["contract"]);
    const residualOf = (side: readonly PayloadRecord[]) =>
      withChange("traces", [...RAY, "hits", "columns", "residual", 3], () => 5e-12, side);
    const baseOutside = judge("c1", cut(9), describing([line]), residualOf(LIGHT));
    expect(baseOutside.summary.transitions.declared).toMatchObject([
      { outcome: "contract", detail: expect.stringContaining("outside the tolerance recorded beside it") },
    ]);

    /* A number that is not finite on the base side alone is a mismatch the head side cannot show. */
    const baseNaN = withChange(
      "traces",
      [...RAY, "hits", "columns", "point", 3, 1],
      () => encodeValue(Number.NaN),
      LIGHT,
    );
    expect(judge("c1", cut(9), describing([line]), baseNaN).summary.transitions.declared).toMatchObject([
      { outcome: "contract", detail: expect.stringContaining('point[3][1]` is "$NaN" on the base side and ') },
    ]);

    /* A flag of such a hit is a discrete difference of the unit like any other: it is in the digest. */
    const flagged = cut(9, (columns) => (columns.clipped[5] = true));
    const flaggedLine = lineOf(flagged);
    expect(flaggedLine).not.toBe(line);
    expect(outcomesOf(judge("c1", flagged, describing([line])).summary)).toEqual(["mismatch"]);
    expect(judge("c1", flagged, describing([flaggedLine])).summary.transitions.declared).toMatchObject([
      { outcome: "matched", differences: 15, shapes: 12 },
    ]);

    /* Hits are paired while both sides name the same surface. Where the head side gained a hit ahead of the fourth,
     * the three before it are the same hits, and what follows is another path that only its own side answers for. */
    const inserted = (change: (columns: Record<string, unknown[]>) => void = () => {}) =>
      withChange(
        "traces",
        [...RAY, "hits"],
        (hits) => {
          const { count, columns } = hits as { count: number; columns: Record<string, unknown[]> };
          const longer = Object.fromEntries(
            Object.entries(columns).map(([name, column]) => [
              name,
              [...column.slice(0, 3), structuredClone(column[3]), ...column.slice(3)],
            ]),
          );
          longer.surfaceIndex[3] = 99;
          change(longer);
          return { count: count + 1, columns: longer };
        },
        LIGHT,
      );
    const insertedLine = lineOf(inserted());
    expect(judge("c1", inserted(), describing([insertedLine])).summary.passed).toBe(true);
    const before = inserted((columns) => ((columns.point[2] as number[])[1] += 1e-4));
    expect(outcomesOf(judge("c1", before, describing([insertedLine])).summary)).toEqual(["contract"]);
    const after = inserted((columns) => ((columns.point[6] as number[])[1] += 1e-4));
    expect(judge("c1", after, describing([insertedLine])).summary.passed).toBe(true);

    /* Under C3 the line is reported with what refused it, and nothing gates. */
    const reported = judge("c3", movedHit(1e-4), describing([line]));
    expect(reported.summary.passed).toBe(true);
    expect(outcomesOf(reported.summary)).toEqual(["contract"]);

    /* A column that one side lacks is no column that changed length: the paired walk entered every other column of
     * that ray, and what it found there is counted once and judged as in any ray. */
    const older = withChange(
      "traces",
      [...RAY, "hits", "columns"],
      (columns) => Object.fromEntries(Object.entries(columns as object).filter(([name]) => name !== "fallback")),
      LIGHT,
    );
    const flaggedBeside = withChange("traces", [...RAY, "hits", "columns", "clipped", 5], () => true, LIGHT);
    const besideLine = lineOf(flaggedBeside, older);
    const beside = judge("c1", moved(HIT_POINT_Y, 5e-7, flaggedBeside), describing([besideLine]), older);
    expect(beside.summary.transitions.declared).toMatchObject([{ outcome: "matched", differences: 2, shapes: 1 }]);
    expect(beside.summary.transitions.declared[0].covered?.map(({ path }) => path)).toEqual([
      "onAxis.rays[1].hits.columns.clipped[5]",
      "onAxis.rays[1].hits.columns.fallback",
    ]);
    expect(failuresOf(beside.summary)).toEqual([
      { request: "traces", path: "onAxis.rays[1].hits.columns.point[2][1]", kind: "number", quantity: "landing" },
    ]);
  });

  it("holds a solve's residual on the head side of a declared unit to the tolerance of its solve", () => {
    /** One perspective field sample: its chief-ray solve, the stop residual beside it, and its sensor lock. */
    const sample = (
      chief: { status: string; residual: number | null; stopResidualMm: number | null },
      lock: { status: string; residual: number | null; u: number | null } = { status: "converged", residual: 0, u: 0 },
    ) => ({
      fieldSample: {
        chiefSolve: {
          status: chief.status,
          rootSolve: { status: chief.status, residual: chief.residual },
          stopResidualMm: chief.stopResidualMm,
        },
        sensorLock: {
          status: lock.status,
          scalarRoot: { status: lock.status, residual: lock.residual },
          residualMm: lock.u === null ? null : { u: lock.u, v: 0 },
        },
      },
    });
    const analysis = (value: unknown): ComparableRecord => ({
      lens: SERENAR,
      state: DEFAULT_STATE,
      request: "analysis",
      payload: { ok: true, value: { jobs: { computePerspectiveFocusAnalysis: { ok: true, value } } } as never },
    });
    const through = (base: unknown, head: unknown, description = "") => {
      const run = createDifferentialRun({
        changeClass: "c1",
        declaredExceptions: [],
        restricted: false,
        declaredTransitions: description,
        catalogLenses: LENS_IDS,
      });
      const output = run.addLens({
        lens: SERENAR,
        dataChange: "unchanged",
        baseEngine: [analysis(base)],
        headEngine: [analysis(head)],
      });
      return { summary: run.finish(), lines: output.transitionLines };
    };
    /* A solve that failed holds null where a converged one holds its residuals. */
    const failed = { samples: [sample({ status: "bracket-failed", residual: null, stopResidualMm: null })] };
    const solved = (residual: number, stopResidualMm = 0) => ({
      samples: [sample({ status: "converged", residual, stopResidualMm })],
    });

    /* A solve that failed to bracket has no residual, so one that now converges sets a number against null: a
     * discrete difference, which a line excuses. The residual it converged with is the head side's to answer for. */
    const { lines } = through(failed, solved(9e-8));
    expect(lines).toHaveLength(1);
    const unit = "jobs.computePerspectiveFocusAnalysis.value.samples[0]";
    expect(lines[0]).toContain(
      `\`${unit}.fieldSample.chiefSolve.rootSolve.residual\`: \`null\` -> \`number\`; digest `,
    );
    expect(through(failed, solved(9e-8), describing(lines)).summary.passed).toBe(true);
    const outside = through(failed, solved(3e-5), describing(lines));
    expect(outside.summary.passed).toBe(false);
    expect(outside.summary.transitions.declared).toMatchObject([
      {
        outcome: "contract",
        detail:
          `On the head side \`${unit}.fieldSample.chiefSolve.rootSolve.residual\` is 0.00003, 300 times the ` +
          "tolerance of its class (Posed chief-ray stop residual).",
      },
    ]);
    /* The stop residual beside the solve is held to its own bound, 1e-6 mm. */
    expect(through(failed, solved(9e-8, 9e-7), describing(lines)).summary.passed).toBe(true);
    expect(outcomesOf(through(failed, solved(9e-8, 2e-6), describing(lines)).summary)).toEqual(["contract"]);
    /* Nothing declares a unit whose head side is outside its tolerance, so no line is printed for it. */
    const undeclared = through(failed, solved(3e-5));
    expect(undeclared.lines).toEqual([]);
    expect(breachedOf(undeclared.summary)).toMatchObject({ units: 1 });

    /* A solve that did not converge returned the miss of its nearest sample, which no tolerance bounds. */
    const gaveUp = { samples: [sample({ status: "max-iterations", residual: 3e-5, stopResidualMm: 3e-5 })] };
    const gaveUpLines = through(failed, gaveUp).lines;
    expect(through(failed, gaveUp, describing(gaveUpLines)).summary.passed).toBe(true);

    /* The sensor lock answers for its scalar root and for both components of its miss, one level up. */
    const chief = { status: "converged", residual: 0, stopResidualMm: 0 };
    const locked = (residual: number, u: number) => ({
      samples: [sample(chief, { status: "converged", residual, u })],
    });
    const unlocked = { samples: [sample(chief, { status: "bracket-failed", residual: null, u: null })] };
    const lockLines = through(unlocked, locked(9e-6, 9e-6)).lines;
    expect(through(unlocked, locked(9e-6, 9e-6), describing(lockLines)).summary.passed).toBe(true);
    expect(outcomesOf(through(unlocked, locked(2e-5, 0), describing(lockLines)).summary)).toEqual(["contract"]);
    /* The miss is a member the base side lacks, which the paired walk reports once and does not enter. */
    expect(through(unlocked, locked(0, 2e-5), describing(lockLines)).summary.transitions.declared).toMatchObject([
      { outcome: "contract", detail: expect.stringContaining(".fieldSample.sensorLock.residualMm.u` is 0.00002, 2 ") },
    ]);

    /* A solve that sits under no array index is a unit of its own, and is held as one inside a sample is. */
    const alone = (status: string, residual: number | null) => ({ chiefSolve: { rootSolve: { status, residual } } });
    const aloneLines = through(alone("bracket-failed", null), alone("converged", 9e-8)).lines;
    expect(aloneLines).toHaveLength(2);
    const aloneDescription = describing(aloneLines);
    expect(through(alone("bracket-failed", null), alone("converged", 9e-8), aloneDescription).summary.passed).toBe(
      true,
    );
    expect(
      outcomesOf(through(alone("bracket-failed", null), alone("converged", 3e-5), aloneDescription).summary).sort(),
    ).toEqual(["contract", "matched"]);
  });

  it("honours `numbers` only where the unit's differences show that the ray ended elsewhere", () => {
    /* Both sides complete the ray through the same hits. A label differs, and the landing moved past its budget. */
    const relabelled = withChange("traces", [...RAY, "diagnostics", "terminalSurfaceLabel"], () => "ten", LIGHT);
    const drifted = moved([...RAY, "y"], 1e-6, relabelled);
    /* The line the run prints for the unit does not say `numbers`: nothing here is a ray that ended elsewhere. */
    const line = lineOf(drifted);
    expect(line).toBe(lineOf(relabelled));
    expect(line).not.toContain("numbers");
    for (const declared of [line, line.replace(/\.$/, ", numbers.")]) {
      const { summary } = judge("c1", drifted, describing([declared]));
      expect(summary.passed).toBe(false);
      expect(failuresOf(summary)).toEqual([
        { request: "traces", path: "onAxis.rays[1].y", kind: "number", quantity: "landing" },
      ]);
      expect(summary.transitions.declared).toMatchObject([
        {
          outcome: "matched",
          excusedNumbers: 0,
          detail: expect.stringContaining("nothing in the unit shows that the ray ended elsewhere"),
        },
      ]);
    }
    /* The label alone is declared as before, with `numbers` or without. */
    expect(judge("c1", relabelled, describing([line.replace(/\.$/, ", numbers.")])).summary.passed).toBe(true);

    /* Each of these differences is such a sign, in a ray of the surface tracer or of the stack tracer. */
    const legacy: Path = ["legacy", "rays", 1];
    const signs: [Path, (value: unknown) => unknown, number: Path][] = [
      [[...RAY, "status"], () => "clipped", [...RAY, "y"]],
      [[...RAY, "failureReason"], () => "noBracket", [...RAY, "y"]],
      [[...RAY, "terminalSurfaceIndex"], (index) => Number(index) - 1, [...RAY, "y"]],
      [[...RAY, "returnVertexIndex"], (index) => Number(index) - 1, [...RAY, "y"]],
      [[...RAY, "reachedImagePlane"], () => true, [...RAY, "y"]],
      [[...RAY, "hits", "count"], (count) => Number(count) - 1, [...RAY, "y"]],
      [[...RAY, "hits", "columns", "surfaceIndex", HIT], () => 99, [...RAY, "y"]],
      [[...RAY, "hits", "columns", "clipped", HIT], () => true, [...RAY, "y"]],
      [[...RAY, "hits", "columns", "fallback", HIT], () => true, [...RAY, "y"]],
      [[...RAY, "hits", "columns", "failureReason", HIT], () => "noBracket", [...RAY, "y"]],
      [[...RAY, "diagnostics", "clipped"], () => true, [...RAY, "y"]],
      [[...RAY, "diagnostics", "terminationReason"], () => "image-plane", [...RAY, "y"]],
      [[...RAY, "diagnostics", "terminalSurfaceIndex"], (index) => Number(index) - 1, [...RAY, "y"]],
      [[...RAY, "diagnostics", "reachedImagePlane"], () => true, [...RAY, "y"]],
      [[...RAY, "diagnostics", "hitSurfaceIndexes", HIT], () => 99, [...RAY, "y"]],
      [[...RAY, "diagnostics", "clipEvents"], () => [{ surfaceIdx: 2, reason: "semi-diameter" }], [...RAY, "y"]],
      [[...legacy, "clipped"], () => true, [...legacy, "y"]],
      [[...legacy, "pts"], (points) => (points as unknown[]).slice(0, -1), [...legacy, "y"]],
      [[...legacy, "ghostPts"], () => [[1, 2]], [...legacy, "y"]],
      [[...legacy, "diagnostics", "failureReason"], () => "noBracket", [...legacy, "y"]],
      [[...legacy, "diagnostics", "hitSurfaceIndexes"], (hits) => (hits as unknown[]).slice(0, -1), [...legacy, "y"]],
    ];
    for (const [path, change, number] of signs) {
      const name = path.join(".");
      const transition = withChange("traces", path, change, LIGHT);
      const head = moved(number, 1e-6, transition);
      const printed = lineOf(head);
      expect(printed, name).toBe(lineOf(transition).replace(/\.$/, ", numbers."));
      const { summary } = judge("c1", head, describing([printed]));
      expect(summary.passed, name).toBe(true);
      expect(summary.transitions.declared, name).toMatchObject([{ outcome: "matched", excusedNumbers: 1 }]);
    }
    /* A hit's clip reason is one too, where both sides have the column and one hit of it differs. */
    const reasons = (reason: string | null, source: readonly PayloadRecord[]) =>
      withChange(
        "traces",
        [...RAY, "hits", "columns"],
        (columns) => ({ ...(columns as object), clipReason: [reason, ...new Array<null>(10).fill(null)] }),
        source,
      );
    const [reasonedBase, reasoned] = [
      reasons(null, LIGHT),
      moved([...RAY, "y"], 1e-6, reasons("semi-diameter", LIGHT)),
    ];
    const reasonedLine = lineOf(reasoned, reasonedBase);
    expect(reasonedLine).toContain('`onAxis.rays[1].hits.columns.clipReason[0]`: `null` -> `"semi-diameter"`; digest ');
    expect(reasonedLine).toMatch(/, numbers\.$/);
    expect(judge("c1", reasoned, describing([reasonedLine]), reasonedBase).summary.passed).toBe(true);
    /* And none of these is: a label, or what the ray was traced with. */
    const others: [Path, (value: unknown) => unknown][] = [
      [[...RAY, "hits", "columns", "surfaceLabel", HIT], () => "three"],
      [[...RAY, "diagnostics", "hitSurfaceLabels", HIT], () => "three"],
      [[...RAY, "diagnostics", "maxInteractions"], (count) => Number(count) + 1],
      [[...RAY, "diagnostics", "expectedPathMode"], () => "explicit"],
    ];
    for (const [path, change] of others) {
      const name = path.join(".");
      const transition = withChange("traces", path, change, LIGHT);
      const head = moved([...RAY, "y"], 1e-6, transition);
      expect(lineOf(head), name).toBe(lineOf(transition));
      const { summary } = judge("c1", head, describing([lineOf(transition).replace(/\.$/, ", numbers.")]));
      expect(summary.passed, name).toBe(false);
      expect(summary.transitions.declared, name).toMatchObject([{ outcome: "matched", excusedNumbers: 0 }]);
    }
    /* Nor is a hit column that one side lacks, as when the base engine predates the member: the hits are the same. */
    const older = withChange(
      "traces",
      [...RAY, "hits", "columns"],
      (columns) => Object.fromEntries(Object.entries(columns as object).filter(([name]) => name !== "fallback")),
      LIGHT,
    );
    const gained = lineOf(moved([...RAY, "y"], 1e-6, LIGHT), older);
    expect(gained).toContain("`onAxis.rays[1].hits.columns.fallback`: `absent` -> `array of 11`; digest ");
    expect(gained).not.toContain("numbers");
  });

  it("lists what the digest of a matched line covers", () => {
    const { summary } = judge("c1", CLIPPED, describing([CLIP_LINE]));
    const [matched] = summary.transitions.declared;
    expect(matched.covered).toHaveLength(CLIP_DIFFERENCES);
    /* In path order, as the digest takes them: a reviewer reads here what one named difference stands for. */
    expect(matched.covered?.map(({ path }) => path)).toEqual([
      ...Array.from({ length: 9 }, (_, flag) => `onAxis.rays[1].hits.columns.clipped[${flag + HIT}]`).sort(),
      "onAxis.rays[1].imagePoint",
      "onAxis.rays[1].status",
    ]);
    expect(matched.covered).toContainEqual({
      path: "onAxis.rays[1].imagePoint",
      kind: "shape",
      base: "array of 2",
      head: "null",
    });
    expect(matched.covered).toContainEqual({
      path: "onAxis.rays[1].status",
      kind: "discrete",
      base: '"ok"',
      head: '"clipped"',
    });
    expect(renderSummaryMarkdown(summary, REPORT_CONTEXT)).toContain(
      "transitions.md lists every difference each matched line covers",
    );
    /* A line that matched nothing covers nothing. */
    const stale = judge("c1", structuredClone(LIGHT), describing([CLIP_LINE]));
    expect(stale.summary.transitions.declared[0].covered).toBeUndefined();

    /* The list is a sample past 200 differences, and the count beside it is of all of them. */
    const flags = (set: number): ComparableRecord => ({
      lens: SERENAR,
      state: DEFAULT_STATE,
      request: "traces",
      payload: { ok: true, value: { rays: [{ flags: Array.from({ length: 300 }, (_, flag) => flag < set) }] } },
    });
    const through = (description: string) => {
      const run = createDifferentialRun({
        changeClass: "c1",
        declaredExceptions: [],
        restricted: false,
        declaredTransitions: description,
        catalogLenses: LENS_IDS,
      });
      const output = run.addLens({
        lens: SERENAR,
        dataChange: "unchanged",
        baseEngine: [flags(0)],
        headEngine: [flags(300)],
      });
      return { summary: run.finish(), lines: output.transitionLines };
    };
    const many = through(describing(through("").lines)).summary.transitions.declared[0];
    expect(many).toMatchObject({ outcome: "matched", differences: 300 });
    expect(many.covered).toHaveLength(200);
  });
});
