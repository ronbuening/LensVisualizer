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
  renderDataImpactMarkdown,
  renderSummaryMarkdown,
  type ComparableRecord,
  type DataChange,
  type Finding,
  type LensCaptures,
  type RunContext,
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
    ["traces", [...RAY, "hits", "columns", "effectiveTolerance", HIT], "effectiveTolerance", 1],
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
     * itself is what fails, far outside its own budget. */
    const relaxed = withChange("traces", tolerance, () => 4e-12, outside);
    expect(failuresOf(compare("c1", relaxed, base))).toEqual([
      expect.objectContaining({ kind: "number", quantity: "effectiveTolerance" }),
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

      /* 1e-10 relative is a hundred times the budget, and there is no absolute floor to hide it under. */
      const drifted = compare(changeClass, held(envelope * (1 + 1e-10)), held(envelope));
      expect(failuresOf(drifted), changeClass).toEqual([{ ...at2, kind: "number", quantity: "effectiveTolerance" }]);
      expect(drifted.engine.failures[0].measure! / drifted.engine.failures[0].budget!).toBeCloseTo(100, 0);

      /* A doubled tolerance fails, from the engine's raw target as from an envelope. */
      expect(compare(changeClass, held(2 * envelope), held(envelope)).passed, changeClass).toBe(false);
      expect(failuresOf(compare(changeClass, held(2e-12))), changeClass).toEqual([
        { ...at2, kind: "number", quantity: "effectiveTolerance" },
      ]);
    }
    expect(compare("c3", held(2 * envelope), held(envelope)).passed).toBe(true);
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
    /* A trace nested in an analysis result is in the record as its status, hit count and a hash of the rest. */
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
      expect(markdown).toContain(`Under ${changeClass.toUpperCase()} four of those were judged`);
      expect(markdown).toContain("the outcome hash, which must be equal, and which changes with any flag, status,");
      expect(markdown).toContain("which the head must keep at or under 1. Not judged: how far the coordinates");
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
      /* Members of the first hit of the ray outside the bundle. */
      hit?: object;
      /* Members of the first hit of the first ray inside the bundle, and that ray's status in the bundle. */
      bundleHit?: object;
      bundleStatus?: string;
    }
    const nested = ({ hit = {}, bundleHit = {}, bundleStatus = "usable" }: Change = {}): PayloadRecord[] => {
      const sample = {
        rays: [{ sensorPoint: [0, 1, 2], trace: posedOf([hitOf(5, hit), hitOf(6, quarter)]) }],
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
      expect(digestAt(BASE, "rays")).toMatchObject({ status: "ok", hitCount: 4, residualShare: 0.25 });
      expect(digestAt(BASE, "fieldSample")).toMatchObject({ status: null, hitCount: 8, residualShare: 0.25 });
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
        /* The share is of the hit's own tolerance: twice the target under a tolerance four times it is inside. */
        const relaxed = nested({ hit: { residual: 2e-12, effectiveTolerance: 4e-12 } });
        expect(compare(changeClass, relaxed, BASE).passed, changeClass).toBe(true);
        /* Only the head's share is judged. A breach the base alone carries is not one the change made. */
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
      /* On a hit that does not carry the largest share, the hash is all that changes. */
      const lastBits = 1e-12 * (1 + 4 * Number.EPSILON);
      const head = nested({ hit: { effectiveTolerance: lastBits } });
      expect({ ...digestAt(head, "rays"), hash: "" }).toEqual({ ...digestAt(BASE, "rays"), hash: "" });
      expect(digestAt(head, "rays").hash).not.toBe(digestAt(BASE, "rays").hash);
      for (const changeClass of ["c1", "c2"] as const) {
        expect(compare(changeClass, head, BASE)).toMatchObject({ passed: true, engine: { numbersDiffering: 0 } });
      }
      expect(kindsAt(compare("c0", head, BASE))).toEqual([[`${rayAt}.hash`, "digest"]]);

      /* On the hit that does, the share moves in its last bits with it, inside its contract. */
      const base = nested({ hit: { residual: 0.5e-12 } });
      const worst = nested({ hit: { residual: 0.5e-12, effectiveTolerance: lastBits } });
      expect(digestAt(worst, "rays").outcome).toBe(digestAt(base, "rays").outcome);
      expect(digestAt(worst, "rays").residualShare).not.toBe(0.5);
      expect(digestAt(worst, "rays").residualShare).toBeCloseTo(0.5, 12);
      for (const changeClass of ["c1", "c2"] as const) {
        expect(compare(changeClass, worst, base)).toMatchObject({ passed: true, engine: { numbersDiffering: 1 } });
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
    const inner = { status: "ok", hitCount: 11, hash: "a".repeat(64), outcome: "b".repeat(64), residualShare: 0.5 };
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
    });
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
