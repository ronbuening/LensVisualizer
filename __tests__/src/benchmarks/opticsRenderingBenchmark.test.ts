import { describe, expect, it, vi } from "vitest";
import {
  BENCHMARK_SCHEMA_VERSION,
  listBenchmarkCases,
  finishBenchmarkRecord,
  serializeBenchmarkRecord,
  formatSessionRunFileName,
  buildSessionSummary,
} from "../../../src/benchmarks/benchmarkReport.js";
import {
  BENCHMARK_SCENARIOS,
  BEST_FOCUS_PROFILE_FRACTIONS,
  DEFAULT_BENCHMARK_LENS_KEYS,
  HEAVY_BENCHMARK_CELLS,
  computeBenchmarkScenarioAnalysisWork,
  computeBenchmarkScenarioRayWork,
  createBenchmarkScenarioSnapshot,
  createMemoryBenchmarkRecord,
  prepareBenchmarkLens,
  runMemorySession,
  sampleCell,
  runOpticsRenderingBenchmark,
  runUntimedBenchmarkPass,
  validateBenchmarkCells,
  type OpticsRenderingBenchmarkOptions,
} from "../../../src/benchmarks/opticsRenderingBenchmark.js";

/* Count actual panel work during the untimed pass so cached answers cannot masquerade as execution. */
const engineCalls = vi.hoisted(() => ({ lensBuilds: 0, preparedStates: 0, sphericalAberrationJobs: 0 }));

vi.mock("../../../src/optics/prescription/buildRuntimeLens.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../../src/optics/prescription/buildRuntimeLens.js")>();
  return {
    ...actual,
    buildLens: (...args: Parameters<typeof actual.buildLens>) => {
      engineCalls.lensBuilds++;
      return actual.buildLens(...args);
    },
  };
});
vi.mock("../../../src/optics/state/runtimeAdapters.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../../src/optics/state/runtimeAdapters.js")>();
  return {
    ...actual,
    prepareRuntimeState: (...args: Parameters<typeof actual.prepareRuntimeState>) => {
      engineCalls.preparedStates++;
      return actual.prepareRuntimeState(...args);
    },
  };
});
vi.mock("../../../src/optics/analysis/analysisJobs.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../../src/optics/analysis/analysisJobs.js")>();
  return {
    ...actual,
    analysisJobs: {
      ...actual.analysisJobs,
      computeSphericalAberration: (...args: Parameters<typeof actual.analysisJobs.computeSphericalAberration>) => {
        engineCalls.sphericalAberrationJobs++;
        return actual.analysisJobs.computeSphericalAberration(...args);
      },
    },
  };
});

import { PROFILE_FRACS } from "../../../src/optics/analysis/aberration/shared.js";

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
    for (const id of [`${NIKON_PC_19}:default:analysis`, `${NIKON_PC_19}:stopped-close:analysis`]) {
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

describe("optics rendering benchmark records", () => {
  it("continues sampling after a case throws", () => {
    const cell = prepareBenchmarkLens(SERENAR).prepareCell("default");
    const later = vi.fn(() => ({ fixtureCount: 1 }));
    cell.cases = cell.cases.slice(0, 2);
    cell.cases[0].run = () => {
      throw new Error("fixture failure");
    };
    cell.cases[1].run = later;
    sampleCell(cell, { warmups: 0, iterations: 2, keepSamples: true });
    expect(cell.cases[0].entry).toEqual({ status: "error", message: "fixture failure" });
    expect(later).toHaveBeenCalledTimes(2);
    expect(cell.cases[1].entry.stats?.samplesMs).toHaveLength(2);
  });
  it("retains single-commit session samples, deduplicated work and serialization", async () => {
    const cells = [{ lensKey: SERENAR, scenarioId: "default" }];
    const record = await runOpticsRenderingBenchmark({
      ...METADATA,
      cells,
      iterations: 2,
      warmups: 0,
      keepSamples: true,
    });
    const pass = await runUntimedBenchmarkPass({ cells });
    finishBenchmarkRecord(record, pass);
    expect(BEST_FOCUS_PROFILE_FRACTIONS).toEqual(PROFILE_FRACS);
    const entries = listBenchmarkCases(record).filter(({ entry }) => entry.status === "ok");
    expect(entries.length).toBeGreaterThan(0);
    for (const { entry } of entries) {
      expect(entry.stats?.samplesMs).toHaveLength(2);
      expect(entry.stats).not.toHaveProperty("heapDeltaSamplesBytes");
      if (entry.work) for (const ref of entry.work) expect(record.workTallies?.[ref]).toBeDefined();
    }
    const focus = record.results[SERENAR].default.analysisBreakdown!.bestFocus!;
    expect(focus.work?.length).toBeGreaterThan(0);
    const tallies = Object.assign({}, ...focus.work!.map((ref) => record.workTallies![ref]));
    expect((tallies["bestFocusRay.clipped=true"] ?? 0) + (tallies["bestFocusRay.clipped=false"] ?? 0)).toBe(
      2 * BEST_FOCUS_PROFILE_FRACTIONS.length,
    );
    const encoded = record.workTallies!.map((tally) => JSON.stringify(tally));
    expect(new Set(encoded).size).toBe(encoded.length);
    expect(JSON.parse(serializeBenchmarkRecord(record))).toEqual(record);
    expect(formatSessionRunFileName(record)).toBe("2026-10-12T08-00-00Z-ffffffff-custom.json");
    expect(buildSessionSummary(record)).toContain("2 measured after 0 warmups");
    expect(buildSessionSummary(record)).toContain(`${SERENAR}:default:analysis`);

    const failedId = entries[0].id;
    finishBenchmarkRecord(record, { cases: { ...pass.cases, [failedId]: { message: "fixture failure" } } });
    expect(record.warnings).toContain(`Untimed pass threw: ${failedId}: fixture failure`);
    expect(record.results[SERENAR].default.analysisBreakdown!.bestFocus!.work?.length).toBeGreaterThan(0);
  });
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
      /* No raw samples or completed-work tallies: those belong to records under sessions/. */
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
    expect(cell.cases.map(({ id }) => id)).toContain(`${NIKON_PC_19}:stopped-close:analysis`);
    expect(cell.cases.every(({ entry }) => entry.status === "error")).toBe(true);
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
      },
      session(101 * megabyte),
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
    expect(record.memory).not.toHaveProperty("base");
    expect(record.memory?.head.retainedGrowthBytes).toBe(21 * megabyte);
    expect(JSON.parse(serializeBenchmarkRecord(record))).toEqual(record);
    expect(formatSessionRunFileName(record)).toBe("2026-10-12T08-00-00Z-ffffffff-heavy-memory.json");
    expect(buildSessionSummary(record)).toContain("1 lenses, 3 cycles of 9 lens states");
    expect(buildSessionSummary(record)).toContain("Growth: 21.00 MB");
  });
});
