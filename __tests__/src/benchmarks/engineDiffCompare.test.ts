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

/* ── budgets.ts ── */

describe("engineDiff budget table", () => {
  it("keeps the plan's proposed budgets", () => {
    const row = (id: QuantityId) => {
      const { kind, c1, unit } = QUANTITIES[id];
      return [kind, c1, unit];
    };
    expect(row("landing")).toEqual(["absolute", 1e-9, "mm"]);
    expect(row("clippedHit")).toEqual(["absolute", 1e-7, "mm"]);
    expect(row("directionCosine")).toEqual(["absolute", 1e-10, ""]);
    expect(row("firstOrder")).toEqual(["relative", 1e-12, "relative"]);
    expect(row("chiefLaunch")).toEqual(["absolute", 1e-9, "mm"]);
    expect(row("fieldAngle")).toEqual(["absolute", 1e-10, "deg"]);
    expect(row("analysisLength")).toEqual(["absolute", 1e-8, "mm"]);
    expect(row("percentage")).toEqual(["absolute", 1e-8, "points"]);
    expect(row("mtfModulation")).toEqual(["absolute", 1e-7, ""]);
    expect(row("count")).toEqual(["exact", 0, ""]);
    expect(row("requested")).toEqual(["exact", 0, ""]);
    const planRows = (Object.keys(QUANTITIES) as QuantityId[]).filter((id) => QUANTITIES[id].origin === "plan");
    expect(planRows).toHaveLength(11);
  });

  it("gives a relative class a floor only where its values may be zero, in the field's own unit", () => {
    /* A floor is the least a relative bound may be. A length may be exactly zero, so its classes keep 1e-12 mm; a
     * smooth ratio is a fraction that is often zero, and keeps its 1e-10. An index, an f-number, a ratio of ray
     * heights or the Petzval sum is no length and never near zero, and is held to the plain relative bound. */
    const floors = (Object.keys(QUANTITIES) as QuantityId[]).flatMap((id) => {
      const { kind, c1, floor }: Quantity = QUANTITIES[id];
      return kind === "relative" ? [[id, c1, floor ?? null]] : [];
    });
    const lengthFloor = { bound: 1e-12, unit: "mm" };
    expect(floors).toEqual([
      ["firstOrder", 1e-12, lengthFloor],
      /* A hit's effective tolerance is a length that is never below the engine's 1e-12 mm target. */
      ["effectiveTolerance", 1e-12, null],
      ["layoutLength", 1e-12, lengthFloor],
      ["bestFitRadius", 1e-12, lengthFloor],
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
      ["mtfFocusShift", "absolute", analysisLength.c1, "mm", 1e-6],
      ["bestFitRadius", "relative", firstOrder.c1, "relative", 1e-7],
    ]);
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
    /* No class is looser than the plan's loosest row in its unit. */
    const loosest: Record<string, number> = { mm: 1e-7, deg: 1e-10, relative: 1e-10, points: 1e-8, "": 1e-7 };
    const looser = (Object.keys(QUANTITIES) as QuantityId[]).filter((id) => {
      const { kind, c1, unit } = QUANTITIES[id];
      return (kind === "absolute" || kind === "relative" || kind === "slope") && !(c1 <= loosest[unit]);
    });
    expect(looser).toEqual([]);
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

  it.each<[RequestFamily, Path, QuantityId, number]>([
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
    ["analysis", ["jobs", "computeSphericalAberration", "value", "longitudinalSaUm"], "analysisLength", 1000],
    ["analysis", ["jobs", "computeDistortionCurve", "value", 3, "distortionPercent"], "percentage", 1],
    ["analysis", ["jobs", "computeDistortionCurve", "value", 3, "fieldAngleDeg"], "fieldAngle", 1],
    ["analysis", ["jobs", "computeVignettingCurve", "value", 3, "relativeIllumination"], "ratio", 1],
    ["analysis", ["jobs", "effectiveFNumber", "value"], "nonLength", 1],
    ["build", ["petzvalSum"], "nonLength", 1],
    ["build", ["EP", "yRatio"], "nonLength", 1],
    ["build", ["data", "surfaces", 0, "R"], "prescription", 1],
    /* A bar of the LoCA inset is a focus shift drawn at about 201 px per mm. */
    ["analysis", ["jobs", "locaBarOffsets", "value", "barOffsets", "R"], "analysisLength", 201],
    ["analysis", ["jobs", "locaBarOffsets", "value", "legacy", "mag"], "ratio", 1],
    ["mtf", ["result", "fields", 1, "sagittal", 5], "mtfModulation", 1],
    ["mtf", ["result", "focus", "bestAxialShiftMm"], "mtfFocusShift", 1],
  ])("holds %s %j to the %s budget under C1: twice fails, half passes", (request, path, quantity, scale) => {
    const value = numberAt(request, path);
    const { kind, floor }: Quantity = QUANTITIES[quantity];
    expect(
      resolveBudgetRule(
        request,
        path.map((step) => (typeof step === "number" ? "[]" : step)),
      )?.scale,
    ).toBe(scale);
    /* A relative budget is a share of the value, and of no less than the class's floor where it has one. */
    const bound = (budget: number) =>
      kind === "relative" ? Math.max(budget * Math.abs(value), floor?.bound ?? 0) : budget;
    const unit = bound(budgetOf(quantity, "c1")) * scale;
    const moved = (factor: number) => withChange(request, path, () => value + factor * unit);

    const beyond = compare("c1", moved(2));
    expect(beyond.passed).toBe(false);
    expect(beyond.engine.failures).toEqual([expect.objectContaining({ request, kind: "number", quantity })]);
    const { measure, budget } = beyond.engine.failures[0];
    expect(measure! / budget!).toBeCloseTo(2, 1);
    expect(beyond.engine.quantities[quantity]).toMatchObject({ differing: 1, beyondBudget: 1 });

    const within = compare("c1", moved(0.5));
    expect(within.passed).toBe(true);
    expect(within.engine.quantities[quantity]).toMatchObject({ differing: 1, beyondBudget: 0 });
    expect(compare("c0", moved(0.5)).passed).toBe(false);
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
    run.addLens({ lens: key, dataChange, baseEngine: structuredClone(head), headEngine: head, baseData });
    return run.finish();
  }

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

  it("blocks a failed status or a non-finite number that a change of shape hides from the paired walk", () => {
    /* The walk reports a longer array, a new member or a value of another type once, and does not enter it. What
     * such a change brought with it shows in the record's own totals. */
    const nan = encodeValue(Number.NaN);
    const residuals: Path = [...RAY, "hits", "columns", "residual"];
    const shapes: Record<string, [head: PayloadRecord[], base: PayloadRecord[], noun: string]> = {
      "NaN appended to a longer array": [
        withChange("traces", residuals, (column) => [...(column as unknown[]), nan], plainRecords),
        plainRecords,
        "non-finite numbers",
      ],
      "a failed ray added to a longer fan": [
        withChange(
          "traces",
          ["onAxis", "rays"],
          (rays) => [...(rays as object[]), { ...(rays as object[])[1], status: "failed" }],
          plainRecords,
        ),
        plainRecords,
        "failed statuses",
      ],
      "NaN where the base had null": [
        withChange("traces", [...RAY, "imagePoint"], () => nan, plainRecords),
        withChange("traces", [...RAY, "imagePoint"], () => null, plainRecords),
        "non-finite numbers",
      ],
      "NaN in a member the base did not have": [
        withChange("traces", RAY, (ray) => ({ ...(ray as object), added: nan }), plainRecords),
        plainRecords,
        "non-finite numbers",
      ],
    };
    for (const [shape, [head, base, noun]] of Object.entries(shapes)) {
      const [impact] = evaluate("semantic", head, base).dataImpact;
      expect(impact.blocking, shape).toBe(1);
      expect(impact.blockers, shape).toEqual([
        expect.objectContaining({
          request: "traces",
          path: "",
          kind: noun === "failed statuses" ? "discrete" : "nonFinite",
          base: expect.stringMatching(new RegExp(`^\\d+ ${noun} in the record$`)),
          head: expect.stringMatching(new RegExp(`^\\d+ ${noun} in the record$`)),
          measure: 1,
        }),
      ]);
      /* The other way round the record lost one, and nothing blocks. */
      expect(evaluate("semantic", base, head).passed, shape).toBe(true);
    }
    const report = renderDataImpactMarkdown(
      evaluate("semantic", shapes["a failed ray added to a longer fan"][0], plainRecords),
      REPORT_CONTEXT,
    );
    expect(report).toContain("| traces | (the record) | discrete |");

    /* One the walk located is counted once, with its path. */
    const inPlace = withChange("traces", [...RAY, "y"], () => nan, plainRecords);
    expect(evaluate("semantic", inPlace, plainRecords).dataImpact[0]).toMatchObject({
      blocking: 1,
      blockers: [{ path: "onAxis.rays[1].y" }],
    });

    /* A non-finite number that hands the prescription back was authored: a plane element's focal length. */
    const infinite = encodeValue(Number.POSITIVE_INFINITY);
    const planeElement = withChange("build", ["elements", 0, "fl"], () => infinite, plainRecords);
    expect(evaluate("semantic", planeElement, plainRecords)).toMatchObject({
      passed: true,
      dataImpact: [{ blocking: 0 }],
    });
    const appended = withChange(
      "build",
      ["elements"],
      (elements) => [...(elements as object[]), { ...(elements as object[])[0], fl: infinite }],
      plainRecords,
    );
    expect(evaluate("semantic", appended, plainRecords).passed).toBe(true);
    /* One the engine computed is not. */
    const computed = withChange(
      "build",
      ["rayHeights"],
      (heights) => [...(heights as number[]), infinite],
      plainRecords,
    );
    expect(evaluate("semantic", computed, plainRecords).dataImpact[0].blocking).toBe(1);
  });

  it("reports a new lens, and blocks it only when it does not build", () => {
    const added = evaluate("new", plainRecords, null);
    expect(added.passed).toBe(true);
    expect(added.dataImpact).toEqual([expect.objectContaining({ lens: key, change: "new", blocking: 0 })]);
    const broken = evaluate("new", captureRecords(catalogOf(unbuildable), requests), null);
    expect(broken.passed).toBe(false);
    expect(broken.dataImpact[0].blockers).toEqual([expect.objectContaining({ request: "build", path: "ok" })]);
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
    /* A changed lens is counted against its base data and blocked by the rule, so it carries no such list. */
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
    /* A failed ray that came with a longer fan: the paired walk does not enter the fan, the record's totals show it. */
    const longerFan = withChange(
      "traces",
      ["onAxis", "rays"],
      (rays) => [...(rays as object[]), { ...(rays as object[])[1], status: "failed" }],
      plainRecords,
    );
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
      blockedByCount: { dataChange: "semantic", baseEngine: longerFan, headEngine: longerFan, baseData: plainRecords },
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
    expect(whole.blockedByCount.summary.dataImpact).toMatchObject([
      { blocking: 1, blockers: [{ request: "traces", path: "" }] },
    ]);
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

    /* The count of failed statuses needs a record on the base data to count against. Set beside one that threw,
     * every failed ray of the head's would be an increase. */
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
    expect(beside.finish()).toMatchObject({ passed: true, dataImpact: [{ blocking: 0 }] });
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
