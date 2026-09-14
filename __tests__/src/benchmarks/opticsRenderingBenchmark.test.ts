import { describe, expect, it } from "vitest";
import {
  BENCHMARK_SCENARIOS,
  DEFAULT_BENCHMARK_LENS_KEYS,
  computeBenchmarkScenarioAnalysisWork,
  computeBenchmarkScenarioRayWork,
  createBenchmarkScenarioSnapshot,
  runOpticsRenderingBenchmark,
} from "../../../src/benchmarks/opticsRenderingBenchmark.js";

const NIKON_PC_19 = "nikon-pc-nikkor-19mm-f4e-ed";
const CANON_TSE_50 = "canon-tse-50f28l-macro";

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
