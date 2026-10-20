import { describe, expect, it, vi } from "vitest";
import {
  BENCHMARK_SCHEMA_VERSION,
  HEADLINE_CASE_IDS,
  completedWorkOf,
  listBenchmarkCases,
  type BenchmarkEntry,
} from "../../../src/benchmarks/benchmarkReport.js";
import {
  BENCHMARK_SCENARIOS,
  BEST_FOCUS_PROFILE_FRACTIONS,
  DEFAULT_BENCHMARK_LENS_KEYS,
  HEAVY_BENCHMARK_CELLS,
  buildPairedSummary,
  computeBenchmarkScenarioAnalysisWork,
  computeBenchmarkScenarioRayWork,
  createBenchmarkScenarioSnapshot,
  createMemoryBenchmarkRecord,
  finishBenchmarkRecord,
  planTimedProcesses,
  poolTimedRecords,
  prepareBenchmarkLens,
  runMemorySession,
  runOpticsRenderingBenchmark,
  runUntimedBenchmarkPass,
  sampleCell,
  validateBenchmarkCells,
  type OpticsRenderingBenchmarkOptions,
  type PairedBenchmarkBase,
  type PreparedBenchmarkCell,
} from "../../../src/benchmarks/opticsRenderingBenchmark.js";
import { PROFILE_FRACS } from "../../../src/optics/analysis/aberration/shared.js";

/* Tallies of three engine calls the benchmark makes itself, each passed through unchanged: a lens build, a prepared
 * state and a spherical-aberration job. The head side of a paired run is the benchmark's own and takes no stand-in,
 * so the paired tests read these to tell what the head has done by the time the base is called. */
const engineCalls = vi.hoisted(() => ({ lensBuilds: 0, preparedStates: 0, sphericalAberrationJobs: 0 }));

vi.mock("../../../src/optics/compat.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../../src/optics/compat.js")>();
  const buildLens2: typeof actual.buildLens2 = (...args) => {
    engineCalls.lensBuilds++;
    return actual.buildLens2(...args);
  };
  const prepareRuntimeState: typeof actual.prepareRuntimeState = (...args) => {
    engineCalls.preparedStates++;
    return actual.prepareRuntimeState(...args);
  };
  const computeSphericalAberration: typeof actual.analysisJobsForState2.computeSphericalAberration = (...args) => {
    engineCalls.sphericalAberrationJobs++;
    return actual.analysisJobsForState2.computeSphericalAberration(...args);
  };
  return {
    ...actual,
    buildLens2,
    prepareRuntimeState,
    analysisJobsForState2: { ...actual.analysisJobsForState2, computeSphericalAberration },
  };
});

const NIKON_PC_19 = "nikon-pc-nikkor-19mm-f4e-ed";
const CANON_TSE_50 = "canon-tse-50f28l-macro";
const SERENAR = "canon-serenar-50f18";

const METADATA = {
  createdAt: "2026-10-12T08:00:00.000Z",
  git: { branch: "test", commit: "f".repeat(40), shortCommit: "ffffffff", dirty: false },
  environment: {
    node: "test-node",
    v8: "test-v8",
    platform: "test-platform",
    arch: "test-arch",
    cpuModel: null,
    cpuCount: null,
    heapMode: "raw",
  },
} satisfies Pick<OpticsRenderingBenchmarkOptions, "createdAt" | "git" | "environment">;

/** This module as the base of a paired run: the same engine on both sides. */
const SELF_BASE: PairedBenchmarkBase = {
  ref: "self",
  commit: "b".repeat(40),
  shortCommit: "bbbbbbbb",
  prepareBenchmarkLens,
};

describe("optics rendering benchmark movement scenarios", () => {
  it("persists explicit movement and includes moved wide and close-focus tilt-shift coverage", async () => {
    expect(DEFAULT_BENCHMARK_LENS_KEYS).toContain(NIKON_PC_19);
    expect(DEFAULT_BENCHMARK_LENS_KEYS).toContain(CANON_TSE_50);

    const dryRun = await runOpticsRenderingBenchmark({
      createdAt: "2026-09-03T12:00:00.000Z",
      git: { branch: "test", commit: null, shortCommit: null, dirty: true },
      environment: {
        node: "test-node",
        v8: "test-v8",
        platform: "test-platform",
        arch: "test-arch",
        cpuModel: null,
        cpuCount: null,
        heapMode: "raw",
      },
      dryRun: true,
    });

    expect(dryRun.config.scenarioSnapshots).toEqual(BENCHMARK_SCENARIOS);
    expect(dryRun.config.scenarioSnapshots?.find(({ id }) => id === "stopped-close")).toMatchObject({
      focusT: 1,
      movement: { shiftMm: 6, tiltDeg: 4 },
      analysisQuality: "settled",
    });
    expect(dryRun.config.scenarioSnapshots?.find(({ id }) => id === "interactive-drag")).toMatchObject({
      movement: { shiftMm: -4, tiltDeg: -2.5 },
      analysisQuality: "interactive",
    });
  });

  it("builds the same camera-anchored perspective and analysis context used by the viewer", () => {
    const snapshot = createBenchmarkScenarioSnapshot(NIKON_PC_19, "stopped-close");

    expect(snapshot.movement).toMatchObject({ active: true, shiftMm: 6, tiltDeg: 4 });
    expect(snapshot.perspectiveTraceContext.pose.movement).toMatchObject({ shiftMm: 6, tiltDeg: 4 });
    expect(snapshot.perspectiveTraceContext.sensorPlane.point[2]).toBeCloseTo(snapshot.IMG_MM, 10);
    expect(snapshot.analysisContext.perspectiveTraceContext).toBe(snapshot.perspectiveTraceContext);
    expect(snapshot.analysisContext.analysisQuality).toBe("settled");
    expect(snapshot.analysisContext.perspectiveCacheKey).toBe(snapshot.perspectiveTraceContext.cacheKey);
  });

  it("keeps identity scenarios on the centered ray and analysis fast paths", () => {
    const snapshot = createBenchmarkScenarioSnapshot(NIKON_PC_19, "default");
    const rayWork = computeBenchmarkScenarioRayWork(snapshot);
    const analysisWork = computeBenchmarkScenarioAnalysisWork(snapshot);

    expect(snapshot.movement.active).toBe(false);
    expect(rayWork.perspectiveFanSweeps).toBe(0);
    expect(rayWork.perspectiveRaySamples).toBe(0);
    expect(analysisWork.perspectiveAnalysisJobs).toBe(0);
  });

  it("runs physical moved rays and explicit interactive and settled analysis sampling", () => {
    const interactive = createBenchmarkScenarioSnapshot(NIKON_PC_19, "interactive-drag");
    const settled = createBenchmarkScenarioSnapshot(NIKON_PC_19, "stopped-close");
    const rayWork = computeBenchmarkScenarioRayWork(settled);
    const analysisWork = computeBenchmarkScenarioAnalysisWork(interactive);
    const interactiveDistortion = interactive.analysisContext.computePerspectiveDistortionAnalysis();
    const settledDistortion = settled.analysisContext.computePerspectiveDistortionAnalysis();

    expect(rayWork.movementActive).toBe(true);
    expect(rayWork.perspectiveFanSweeps).toBeGreaterThan(0);
    expect(rayWork.perspectiveRaySamples).toBeGreaterThan(0);
    expect(analysisWork.perspectiveAnalysisJobs).toBe(6);
    expect(analysisWork.legacyRayBasedAnalysisJobs).toBe(0);
    expect(interactive.analysisContext.analysisQuality).toBe("interactive");
    expect(settled.analysisContext.analysisQuality).toBe("settled");
    expect(interactiveDistortion.vertical).toHaveLength(3);
    expect(settledDistortion.vertical.length).toBeGreaterThan(interactiveDistortion.vertical.length);
  });

  it("memoizes concurrent accessor reads and isolates rapid movement scenarios by cache key", async () => {
    const firstIdentity = createBenchmarkScenarioSnapshot(NIKON_PC_19, "default");
    const active = createBenchmarkScenarioSnapshot(NIKON_PC_19, "interactive-drag");
    const close = createBenchmarkScenarioSnapshot(NIKON_PC_19, "stopped-close");
    const lastIdentity = createBenchmarkScenarioSnapshot(NIKON_PC_19, "default");

    const [first, second, third] = await Promise.all([
      Promise.resolve().then(() => active.analysisContext.computePerspectiveDistortionAnalysis()),
      Promise.resolve().then(() => active.analysisContext.computePerspectiveDistortionAnalysis()),
      Promise.resolve().then(() => active.analysisContext.computePerspectiveDistortionAnalysis()),
    ]);

    expect(second).toBe(first);
    expect(third).toBe(first);
    expect(firstIdentity.perspectiveTraceContext.cacheKey).toBe(lastIdentity.perspectiveTraceContext.cacheKey);
    expect(firstIdentity.analysisContext.cacheKey).toBe(lastIdentity.analysisContext.cacheKey);
    expect(active.analysisContext.cacheKey).not.toBe(firstIdentity.analysisContext.cacheKey);
    expect(close.analysisContext.cacheKey).not.toBe(active.analysisContext.cacheKey);
    expect(lastIdentity.movement.active).toBe(false);
  });

  it("exercises Canon's focus-moving close state without moving the fixed sensor", () => {
    const infinity = createBenchmarkScenarioSnapshot(CANON_TSE_50, "default");
    const close = createBenchmarkScenarioSnapshot(CANON_TSE_50, "stopped-close");

    expect(close.focusT).toBe(1);
    expect(close.movement.active).toBe(true);
    expect(close.zPos.some((z, index) => Math.abs(z - infinity.zPos[index]) > 1e-8)).toBe(true);
    expect(close.IMG_MM).toBeCloseTo(infinity.IMG_MM, 10);
    expect(close.perspectiveTraceContext.state.cacheKey).not.toBe(infinity.perspectiveTraceContext.state.cacheKey);
  });
});

describe("optics rendering benchmark heavy set", () => {
  it("names seven cells of the matrix, with the two headline cases among them", () => {
    const lensKeys: readonly string[] = DEFAULT_BENCHMARK_LENS_KEYS;
    const scenarioIds: readonly string[] = BENCHMARK_SCENARIOS.map(({ id }) => id);

    expect(HEAVY_BENCHMARK_CELLS).toHaveLength(7);
    for (const { lensKey, scenarioId } of HEAVY_BENCHMARK_CELLS) {
      expect(lensKeys).toContain(lensKey);
      expect(scenarioIds).toContain(scenarioId);
    }
    expect(() => validateBenchmarkCells(HEAVY_BENCHMARK_CELLS)).not.toThrow();
    for (const id of HEADLINE_CASE_IDS) {
      const [lensKey, scenarioId] = id.split(":");
      expect(HEAVY_BENCHMARK_CELLS).toContainEqual({ lensKey, scenarioId });
    }
  });

  it("refuses a cell whose lens or scenario does not exist", () => {
    expect(() => validateBenchmarkCells([{ lensKey: "no-such-lens", scenarioId: "default" }])).toThrow(
      "Benchmark lens key(s) not found in catalog: no-such-lens",
    );
    expect(() => validateBenchmarkCells([{ lensKey: SERENAR, scenarioId: "no-such-scenario" }])).toThrow(
      "Benchmark scenario(s) not found: no-such-scenario",
    );
  });

  it("records the cells of a subset run and only the scenarios they use", async () => {
    const record = await runOpticsRenderingBenchmark({ ...METADATA, dryRun: true, cells: HEAVY_BENCHMARK_CELLS });

    expect(record.config.caseSet).toBe("heavy");
    expect(record.config.cells).toEqual(HEAVY_BENCHMARK_CELLS);
    expect(record.config.lensKeys).toEqual([
      NIKON_PC_19,
      CANON_TSE_50,
      "sony-fe-24-70mm-f28-gm-ii",
      "fujifilm-gf-20-35mm-f4-r-wr",
    ]);
    expect(record.config.scenarios).toEqual(["default", "stopped-close", "interactive-drag"]);
    expect(record.config.scenarioSnapshots?.map(({ id }) => id)).toEqual(record.config.scenarios);
  });
});

describe("optics rendering benchmark sampling", () => {
  it.each([
    ["base", ["base>head", "head>base", "base>head"]],
    ["head", ["head>base", "base>head", "head>base"]],
  ] as const)("starts every case's warmup and measured pairs with %s", (firstSide, warmupOrder) => {
    /* Fake cells exercise the setup-to-sampling handoff without timing engine work. */
    const calls: string[] = [];
    const setups: string[] = [];
    const cell = (side: "base" | "head") =>
      ({
        cases: ["first", "second"].map((id) => ({
          id,
          setup: () => setups.push(`${id}:${side}`),
          run: () => {
            calls.push(side);
            return { side };
          },
          entry: { status: "error", message: "The case was not sampled." },
        })),
      }) as unknown as PreparedBenchmarkCell;
    const base = cell("base");
    const head = cell("head");

    sampleCell(head, base, { warmups: 3, iterations: 4, keepSamples: true }, firstSide);

    const pairs = Array.from({ length: calls.length / 2 }, (_, pair) => calls.slice(pair * 2, pair * 2 + 2).join(">"));
    const measuredOrder = [...warmupOrder, warmupOrder[1]];
    expect(pairs).toEqual([...warmupOrder, ...measuredOrder, ...warmupOrder, ...measuredOrder]);
    const setupOrder = firstSide === "base" ? ["base", "head"] : ["head", "base"];
    expect(setups).toEqual(["first", "second"].flatMap((id) => setupOrder.map((side) => `${id}:${side}`)));
    for (const [side, prepared] of [
      ["base", base],
      ["head", head],
    ] as const) {
      for (const { entry } of prepared.cases) {
        expect(entry).toMatchObject({ status: "ok", stats: { warmups: 3, iterations: 4 }, output: { side } });
        expect(entry.stats?.samplesMs).toHaveLength(4);
        expect(entry).not.toHaveProperty("message");
      }
    }
  });

  it.each(["base", "head"] as const)("calls the one unpaired case with firstSide %s", (firstSide) => {
    const run = vi.fn(() => ({}));
    const head = {
      cases: [{ id: "only", run, entry: { status: "error", message: "The case was not sampled." } }],
    } as unknown as PreparedBenchmarkCell;

    sampleCell(head, undefined, { warmups: 3, iterations: 4, keepSamples: true }, firstSide);

    expect(run).toHaveBeenCalledTimes(7);
    expect(head.cases[0].entry.stats?.samplesMs).toHaveLength(4);
  });
});

describe("optics rendering benchmark records", () => {
  it("keeps a plain run's record in its shape, apart from the schema version", { timeout: 120_000 }, async () => {
    const record = await runOpticsRenderingBenchmark({ ...METADATA, lensKeys: [SERENAR], iterations: 1, warmups: 0 });

    expect(record.schemaVersion).toBe(BENCHMARK_SCHEMA_VERSION);
    expect(BENCHMARK_SCHEMA_VERSION).toBe(3);
    expect(Object.keys(record)).toEqual([
      "schemaVersion",
      "createdAt",
      "git",
      "environment",
      "config",
      "results",
      "aberrationPanels",
      "summary",
      "warnings",
    ]);
    expect(record.environment).toEqual(METADATA.environment);
    expect(Object.keys(record.config)).toEqual(["warmups", "iterations", "lensKeys", "scenarios", "scenarioSnapshots"]);
    expect(record.config.scenarioSnapshots).toEqual(BENCHMARK_SCENARIOS);
    expect(Object.keys(record.summary)).toEqual(["main", "analysis", "aberrationPanels"]);
    expect(Object.keys(record.results[SERENAR])).toEqual(BENCHMARK_SCENARIOS.map(({ id }) => id));
    expect(Object.keys(record.results[SERENAR].default)).toEqual([
      "build",
      "layout",
      "rays",
      "analysis",
      "analysisBreakdown",
      "svgRender",
      "totalCold",
      "totalWarm",
    ]);
    expect(Object.keys(record.aberrationPanels[SERENAR].default)).toEqual(["data", "render", "skips"]);

    const cases = listBenchmarkCases(record);
    expect(cases.length).toBeGreaterThan(100);
    for (const { id, entry } of cases) {
      if (entry.status === "skipped") {
        expect(Object.keys(entry), id).toEqual(["status", "reason"]);
        continue;
      }
      expect(entry.status, `${id}: ${entry.message}`).toBe("ok");
      expect(Object.keys(entry), id).toEqual(["status", "stats", "output"]);
      /* No raw samples or completed-work tallies: those belong to records under paired/. */
      expect(Object.keys(entry.stats ?? {}), id).toEqual([
        "min",
        "median",
        "mean",
        "p95",
        "max",
        "iterations",
        "warmups",
        "heapDeltaBytes",
      ]);
    }
    expect(record.results[SERENAR].default.rays.output).toEqual({
      onAxisRays: 6,
      offAxisRays: 5,
      chromaticRays: 0,
      hasChromaticRayFanSpread: false,
      movementActive: false,
      perspectiveFanSweeps: 0,
      perspectiveRaySamples: 0,
    });
  });

  it("lays a cell out as the cases its record lists, under the same ids", () => {
    const cell = prepareBenchmarkLens(NIKON_PC_19).prepareCell("stopped-close");
    const listed = listBenchmarkCases({
      results: { [NIKON_PC_19]: { "stopped-close": cell.results } },
      aberrationPanels: { [NIKON_PC_19]: { "stopped-close": cell.aberrationPanels } },
    });

    /* A category that is skipped for the scenario has an entry and is not a case. */
    expect(listed.filter(({ entry }) => entry.status !== "skipped").map(({ id }) => id)).toEqual(
      cell.cases.map(({ id }) => id),
    );
    expect(cell.cases.map(({ id }) => id)).toContain(HEADLINE_CASE_IDS[1]);
    expect(cell.cases.every(({ entry }) => entry.status === "error")).toBe(true);
  });

  it("samples a paired case on both sides, alternating which goes first", async () => {
    /* The stand-in base builds no lens when it is sampled, so the lens builds between two of its calls are the
     * head's calls of the `build` case in between. */
    const buildsAtBaseCall: number[] = [];
    const base: PairedBenchmarkBase = {
      ...SELF_BASE,
      prepareBenchmarkLens: (lensKey) => {
        const lens = prepareBenchmarkLens(lensKey);
        return {
          dataFingerprint: lens.dataFingerprint,
          prepareCell: (scenarioId) => {
            const cell = lens.prepareCell(scenarioId);
            for (const benchmarkCase of cell.cases) {
              const isBuild = benchmarkCase.id.endsWith(":build");
              delete benchmarkCase.setup;
              benchmarkCase.run = () => {
                if (isBuild) buildsAtBaseCall.push(engineCalls.lensBuilds);
                return {};
              };
            }
            return cell;
          },
        };
      },
    };
    const record = await runOpticsRenderingBenchmark({
      ...METADATA,
      cells: [{ lensKey: SERENAR, scenarioId: "default" }],
      warmups: 2,
      iterations: 3,
      keepSamples: true,
      base,
    });

    /* Warmups: base>head, head>base. Measured: base>head, head>base, base>head. */
    const headCallsBefore = buildsAtBaseCall.map((builds, call) => builds - (buildsAtBaseCall[call - 1] ?? builds));
    expect(headCallsBefore).toEqual([0, 2, 0, 2, 0]);
    expect(record.results[SERENAR].default.build.stats?.samplesMs).toHaveLength(3);
    expect(record.base?.results[SERENAR].default.build.stats?.samplesMs).toHaveLength(3);
  });

  it("prepares the side a process puts first before the other: its lens, its cells and its setups", async () => {
    /* What the head has done by the time the base is asked for something. The stand-in base reads a tally before
     * it does any work of its own. */
    const countedAtBase = async (firstSide: "base" | "head") => {
      const counted = { lens: -1, cell: -1, setup: -1 };
      const base: PairedBenchmarkBase = {
        ...SELF_BASE,
        firstSide,
        prepareBenchmarkLens: (lensKey) => {
          counted.lens = engineCalls.lensBuilds;
          const lens = prepareBenchmarkLens(lensKey);
          return {
            dataFingerprint: lens.dataFingerprint,
            prepareCell: (scenarioId) => {
              counted.cell = engineCalls.preparedStates;
              const cell = lens.prepareCell(scenarioId);
              for (const benchmarkCase of cell.cases) {
                if (benchmarkCase.setup) {
                  benchmarkCase.setup = () => {
                    counted.setup = engineCalls.sphericalAberrationJobs;
                  };
                }
                benchmarkCase.run = () => ({});
              }
              return cell;
            },
          };
        },
      };
      Object.assign(engineCalls, { lensBuilds: 0, preparedStates: 0, sphericalAberrationJobs: 0 });
      const record = await runOpticsRenderingBenchmark({
        ...METADATA,
        cells: [{ lensKey: SERENAR, scenarioId: "default" }],
        warmups: 0,
        iterations: 1,
        keepSamples: true,
        base,
      });
      expect(record.config.timedProcesses).toEqual([{ firstSide, pairs: 1 }]);
      return counted;
    };
    const baseFirst = await countedAtBase("base");
    const headFirst = await countedAtBase("head");

    /* Base first: the base's lens is asked for before the head has built one. Head first: after. */
    expect(baseFirst.lens).toBe(0);
    expect(headFirst.lens).toBe(1);
    /* The head's cell prepares a state and its setup computes spherical aberration, each before the base's when the
     * head goes first. A case sampled before the setup computes it too, so the tally is past zero either way. */
    expect(headFirst.cell).toBeGreaterThan(baseFirst.cell);
    expect(baseFirst.setup).toBeGreaterThan(0);
    expect(headFirst.setup).toBeGreaterThan(baseFirst.setup);
  });

  it("builds a paired record with both sides, raw samples and completed work", { timeout: 120_000 }, async () => {
    const cells = [{ lensKey: SERENAR, scenarioId: "default" }];
    const progress: string[] = [];
    /* The timed pass as the runner makes it: one process's share with each side first, pooled. */
    const processes = planTimedProcesses(2);
    const shares = [];
    for (const { firstSide, pairs } of processes) {
      shares.push(
        await runOpticsRenderingBenchmark({
          ...METADATA,
          cells,
          warmups: 1,
          iterations: pairs,
          keepSamples: true,
          base: { ...SELF_BASE, firstSide },
          onCell: ({ lensKey, scenarioId, index, count }) => {
            progress.push(`${firstSide} first ${index + 1}/${count} ${lensKey} ${scenarioId}`);
          },
        }),
      );
    }
    const record = poolTimedRecords(shares);
    finishBenchmarkRecord(record, {
      head: await runUntimedBenchmarkPass({ cells }),
      base: await runUntimedBenchmarkPass({ cells }),
    });

    expect(progress).toEqual([`base first 1/1 ${SERENAR} default`, `head first 1/1 ${SERENAR} default`]);
    expect(record.schemaVersion).toBe(3);
    expect(record.config).toMatchObject({ warmups: 1, iterations: 2, lensKeys: [SERENAR], scenarios: ["default"] });
    expect(record.config.timedProcesses).toEqual(processes);
    expect(record.config.cells).toEqual(cells);
    expect(record.config.caseSet).toBe("custom");
    expect(record.base).toMatchObject({ ref: "self", commit: "b".repeat(40), shortCommit: "bbbbbbbb" });
    /* Both sides were bundled with one set of packages, and the record then says nothing of them. */
    expect(record.base).not.toHaveProperty("ownDependencies");
    expect(record.warnings).toEqual([]);

    const headCases = listBenchmarkCases(record);
    const baseCases = listBenchmarkCases(record.base!);
    expect(baseCases.map(({ id }) => id)).toEqual(headCases.map(({ id }) => id));
    const measured = (entry: BenchmarkEntry) => entry.status !== "skipped";
    for (const { id, entry } of [...headCases, ...baseCases].filter(({ entry }) => measured(entry))) {
      expect(entry.status, `${id}: ${entry.message}`).toBe("ok");
      expect(Object.keys(entry), id).toEqual(["status", "stats", "output", "work"]);
      /* One pair from each process, and no raw heap delta left behind by the pooling. */
      expect(entry.stats?.iterations, id).toBe(2);
      expect(entry.stats?.samplesMs, id).toHaveLength(2);
      expect(entry.stats?.heapDeltaSamplesBytes, id).toBeUndefined();
      expect(
        entry.stats?.samplesMs?.every((sample) => Number.isFinite(sample) && sample >= 0),
        id,
      ).toBe(true);
    }
    /* An entry points at the tallies of each result it marked; the record keeps equal tallies once. */
    const workOf = (entry: BenchmarkEntry | undefined) => (entry ? completedWorkOf(record, entry) : undefined);
    for (const tallies of record.workTallies ?? []) {
      for (const [fact, tally] of Object.entries(tallies)) expect(Number.isInteger(tally), fact).toBe(true);
    }
    const places = [...headCases, ...baseCases].flatMap(({ entry }) => entry.work ?? []);
    expect(new Set(places).size).toBe(record.workTallies?.length);
    expect(new Set(places).size).toBeLessThan(places.length / 2);

    const rays = record.results[SERENAR].default.rays;
    /* Every one of the eleven diagram rays is tallied once, clipped or not. */
    expect((workOf(rays)?.["ray.clipped=false"] ?? 0) + (workOf(rays)?.["ray.clipped=true"] ?? 0)).toBe(11);
    expect(workOf(record.results[SERENAR].default.analysis)).toMatchObject({
      "summary.surfaceCount": 11,
      "distortionCurve.length": 21,
      "bokehPair.infinity.usableFieldCount": 4,
    });

    const comparison = record.comparison!;
    const measuredIds = headCases.filter(({ entry }) => measured(entry)).map(({ id }) => id);
    expect(Object.keys(comparison.cases)).toEqual(measuredIds);
    for (const id of measuredIds) {
      const timing = comparison.cases[id];
      expect(timing.pairs, id).toBe(2);
      expect(timing.unequalWork, id).toBe(false);
      expect(timing.ci95?.[0], id).toBeLessThanOrEqual(timing.ci95?.[1] ?? Number.NaN);
    }
    /* One engine on both sides completes the same work. */
    expect(comparison.unequalWork).toEqual([]);
    expect(comparison.headOnlyMembers).toEqual([]);
    /* Every case of the matrix reports some fact of its work, so none is taken on trust. */
    expect(comparison.workNotVerified).toEqual([]);
    expect(comparison.thrown).toEqual([]);

    /* Best focus returns one position: its case tallies the profile rays it is fitted to and whether it fell back. */
    const bestFocus = record.results[SERENAR].default.analysisBreakdown?.bestFocus;
    expect(workOf(bestFocus)).toMatchObject({ "bestFocus.z=number": 1, "bestFocus.isLayoutImagePlane=false": 1 });
    const focusRays = (flag: string) => workOf(bestFocus)?.[`bestFocusRay.clipped=${flag}`] ?? 0;
    expect(focusRays("false") + focusRays("true")).toBe(2 * BEST_FOCUS_PROFILE_FRACTIONS.length);
    /* The benchmark's copy of the ray set is the engine's. */
    expect(BEST_FOCUS_PROFILE_FRACTIONS).toEqual(PROFILE_FRACS);
    /* A tab computes its own data, and tallies each section it asked for and the elements it drew. */
    const { render } = record.aberrationPanels[SERENAR].default;
    const sections = (work: Record<string, number> | undefined) => [
      ...new Set(
        Object.keys(work ?? {})
          .filter((fact) => fact.startsWith("compute"))
          .map((fact) => fact.split(/[.=]/)[0]),
      ),
    ];
    expect(sections(workOf(render.aberrationsTab))).toEqual([
      "computeSphericalAberration",
      "computeSAProfile",
      "computeSphericalAberrationBlurCharacter",
      "computeFieldCurvatureBundle",
    ]);
    expect(sections(workOf(render.comaTab))).toEqual(["computeComaAnalysis"]);
    for (const [name, entry] of Object.entries(render)) {
      expect(workOf(entry)?.["markup.elements"], name).toBeGreaterThan(0);
    }
    expect(workOf(record.results[SERENAR].default.svgRender)?.["markup.elements"]).toBeGreaterThan(0);
    expect(Object.keys(comparison.categories)).toContain("analysis.bokehPair");

    const summary = buildPairedSummary(record);
    expect(summary).toContain("## Benchmark: base bbbbbbbb (self) against head ffffffff");
    expect(summary).toContain("- Cases: custom set, 1 lens/scenario cells");
    expect(summary).toContain(`| ${SERENAR} default analysis |`);
    expect(summary).toContain("- Unequal work, left out of the regression verdict: 0");
  });

  it("observes request-era panel jobs once per untimed case", async () => {
    const pass = await runUntimedBenchmarkPass({ cells: [{ lensKey: NIKON_PC_19, scenarioId: "interactive-drag" }] });
    for (const panel of ["aberrationsTab", "comaTab"]) {
      const entry = pass.cases[`${NIKON_PC_19}:interactive-drag:aberrationPanels:render.${panel}`];
      expect(entry.message).toBeUndefined();
      expect(
        entry.work?.some((tally) =>
          Object.keys(tally).some((key) => key.startsWith("computePerspectiveFieldAberrations.")),
        ),
      ).toBe(true);
    }
    // A later pass must count exactly once again, rather than stacking wrappers.
    expect(
      await runUntimedBenchmarkPass({ cells: [{ lensKey: NIKON_PC_19, scenarioId: "interactive-drag" }] }),
    ).toEqual(pass);
  });

  it("says in the record when the base was bundled with dependencies of its own", async () => {
    const record = await runOpticsRenderingBenchmark({
      ...METADATA,
      cells: [{ lensKey: SERENAR, scenarioId: "default" }],
      warmups: 0,
      iterations: 1,
      keepSamples: true,
      base: { ...SELF_BASE, ownDependencies: true },
    });

    expect(Object.keys(record.base ?? {})).toEqual([
      "ref",
      "commit",
      "shortCommit",
      "ownDependencies",
      "results",
      "aberrationPanels",
      "summary",
    ]);
    expect(record.base?.ownDependencies).toBe(true);
  });

  it("reports a case that throws on one side and goes on sampling the other", async () => {
    const base: PairedBenchmarkBase = {
      ...SELF_BASE,
      prepareBenchmarkLens: (lensKey) => {
        const lens = prepareBenchmarkLens(lensKey);
        return {
          dataFingerprint: () => 0,
          prepareCell: (scenarioId) => {
            const cell = lens.prepareCell(scenarioId);
            for (const benchmarkCase of cell.cases) {
              const real = benchmarkCase.run;
              benchmarkCase.run = benchmarkCase.id.endsWith(":svgRender")
                ? () => {
                    throw new Error("base cannot render");
                  }
                : real;
            }
            return cell;
          },
        };
      },
    };
    const cells = [{ lensKey: SERENAR, scenarioId: "default" }];
    const record = await runOpticsRenderingBenchmark({
      ...METADATA,
      cells,
      warmups: 0,
      iterations: 2,
      keepSamples: true,
      base,
    });
    finishBenchmarkRecord(record, { head: { cases: {} }, base: { cases: {} } });

    expect(record.base?.results[SERENAR].default.svgRender).toEqual({ status: "error", message: "base cannot render" });
    expect(record.results[SERENAR].default.svgRender.stats?.samplesMs).toHaveLength(2);
    expect(record.comparison?.thrown).toEqual([
      { id: `${SERENAR}:default:svgRender`, base: "base cannot render", head: null },
    ]);
    expect(record.comparison?.unequalWork).toContainEqual({
      id: `${SERENAR}:default:svgRender`,
      differences: [{ fact: "status", base: "error", head: "ok" }],
    });
    expect(record.comparison?.cases[`${SERENAR}:default:svgRender`]).toBeUndefined();
    expect(record.warnings).toEqual([
      `The prescription of ${SERENAR} differs between the base and the head, so its cases compare two lenses as well ` +
        `as two engines.`,
    ]);
  });

  it("needs a forced collection for the memory session, and records what the sessions report", async () => {
    /* Vitest's workers expose no `gc`; the session itself runs in the runner's child processes. */
    await expect(runMemorySession({ lensKeys: [SERENAR] })).rejects.toThrow("--expose-gc");

    const megabyte = 1024 * 1024;
    const reading = (totalBytes: number) => ({
      heapUsedBytes: totalBytes - megabyte,
      arrayBuffersBytes: megabyte,
      totalBytes,
    });
    const session = (heapAtEndBytes: number) => ({
      lensKeys: [NIKON_PC_19],
      cycles: 3,
      statesPerCycle: 9,
      heapBefore: reading(80 * megabyte),
      heapAfterCycle: [reading(heapAtEndBytes), reading(heapAtEndBytes), reading(heapAtEndBytes)],
      heapAtEnd: reading(heapAtEndBytes),
      retainedGrowthBytes: heapAtEndBytes - 80 * megabyte,
    });
    const record = createMemoryBenchmarkRecord(
      {
        ...METADATA,
        cells: HEAVY_BENCHMARK_CELLS,
        base: { ref: "self", commit: "b".repeat(40), shortCommit: "bbbbbbbb", ownDependencies: true },
      },
      { head: session(101 * megabyte), base: session(100 * megabyte) },
    );

    expect(record.results).toEqual({});
    /* A session runs no scenario of the matrix: the config names the heavy set's lenses and the session's own sweep. */
    expect(record.config).toEqual({
      warmups: 0,
      iterations: 0,
      lensKeys: [NIKON_PC_19, CANON_TSE_50, "sony-fe-24-70mm-f28-gm-ii", "fujifilm-gf-20-35mm-f4-r-wr"],
      scenarios: [],
      caseSet: "heavy",
      memorySession: {
        cycles: 3,
        atRest: {
          id: "memory-session",
          focusT: 0,
          zoomT: 0,
          aberrationT: 0,
          stopdownT: 0,
          movement: { shiftMm: 0, tiltDeg: 0 },
          rayDensity: "normal",
          rayTracksF: false,
          showOnAxis: true,
          showOffAxis: "trueAngle",
          showChromatic: true,
          analysisQuality: "settled",
        },
        sweeps: { focusT: [0.5, 1], zoomT: [0.5, 1], stopdownT: [0.5, 1], shiftMm: [6, -6], tiltDeg: [4, -4] },
      },
    });
    expect(record.base).toMatchObject({ ref: "self", ownDependencies: true, results: {} });
    expect(record.memory).toMatchObject({ retainedHeapRatio: 1.01, withinLimit: true });
    expect(record.memory?.head.retainedGrowthBytes).toBe(21 * megabyte);
  });
});
