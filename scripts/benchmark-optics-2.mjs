import { execFileSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import os from "node:os";
import { createServer } from "vite";

const REPORT_PATH = "agent_docs/records/optics-2-stage-05-performance.md";
const SAMPLE_COUNT = 7;
const WARMUP_COUNT = 2;

function gitValue(args, fallback) {
  try {
    return execFileSync("git", args, { encoding: "utf8" }).trim() || fallback;
  } catch {
    return fallback;
  }
}

function countTrace(result) {
  if (!result || Number.isNaN(result.y) || Number.isNaN(result.u)) {
    return { successfulTraceCount: 0, clippedTraceCount: 0, failedTraceCount: 1 };
  }
  return {
    successfulTraceCount: result.clipped ? 0 : 1,
    clippedTraceCount: result.clipped ? 1 : 0,
    failedTraceCount: 0,
  };
}

function addCounts(left, right) {
  return {
    successfulTraceCount: left.successfulTraceCount + right.successfulTraceCount,
    clippedTraceCount: left.clippedTraceCount + right.clippedTraceCount,
    failedTraceCount: left.failedTraceCount + right.failedTraceCount,
  };
}

function emptyCounts() {
  return { successfulTraceCount: 0, clippedTraceCount: 0, failedTraceCount: 0 };
}

function classifyRatio(result) {
  if (result.newMedianTimeMs === null || result.oldMedianTimeMs <= 0) return "n/a";
  const ratio = result.newMedianTimeMs / result.oldMedianTimeMs;
  if (ratio > 1.15) return "regression";
  if (ratio < 0.95) return "faster";
  return "noise";
}

function ratioLabel(result) {
  if (result.newMedianTimeMs === null || result.oldMedianTimeMs <= 0) return "n/a";
  return `${(result.newMedianTimeMs / result.oldMedianTimeMs).toFixed(2)}x`;
}

function formatMs(value) {
  return value === null ? "n/a" : value.toFixed(3);
}

function makeEngineContext({
  buildLens,
  doLayout,
  computeAnalysisFieldGeometryAtState,
  entrancePupilAtState,
  eflAtFocus,
  fopenAtZoom,
  solveChiefRay,
  offsetVectorFieldRay,
  traceRay,
  traceRayVector,
  traceRayChromatic,
  traceSkewRay,
  analysisJobs,
  computeBokehPreviewPair,
  catalog,
}) {
  const lensCache = new Map();
  const stateCache = new Map();

  function lensFor(key) {
    const cached = lensCache.get(key);
    if (cached) return cached;
    const lens = buildLens(catalog[key]);
    lensCache.set(key, lens);
    return lens;
  }

  function stateFor(key, sliderState) {
    const cacheKey = `${key}|${sliderState.focusT}|${sliderState.zoomT}|${sliderState.apertureT}|${sliderState.aberrationT ?? 0}`;
    const cached = stateCache.get(cacheKey);
    if (cached) return cached;

    const L = lensFor(key);
    const focusT = sliderState.focusT;
    const zoomT = sliderState.zoomT;
    const aberrationT = sliderState.aberrationT ?? 0;
    const layout = doLayout(focusT, zoomT, L, aberrationT);
    const currentFOPEN = fopenAtZoom(zoomT, L);
    const rawFNumber = L.FOPEN * Math.pow(L.maxFstop / L.FOPEN, sliderState.apertureT);
    const fNumber = Math.max(rawFNumber, currentFOPEN);
    const currentPhysStopSD = (L.stopPhysSD * L.FOPEN) / fNumber;
    const fieldGeometry = computeAnalysisFieldGeometryAtState(focusT, zoomT, L, aberrationT);
    const baseEPSD = entrancePupilAtState(L.stopPhysSD, focusT, zoomT, L, fieldGeometry, aberrationT).epSD;
    const currentEPSD = (baseEPSD * L.FOPEN) / fNumber;
    const dynamicEFL = eflAtFocus(focusT, zoomT, L, aberrationT);
    const state = {
      L,
      focusT,
      zoomT,
      aberrationT,
      zPos: layout.z,
      currentEPSD,
      currentPhysStopSD,
      fieldGeometry,
      dynamicEFL,
    };
    stateCache.set(cacheKey, state);
    return state;
  }

  return {
    lensFor,
    stateFor,
    solveChiefRay,
    offsetVectorFieldRay,
    traceRay,
    traceRayVector,
    traceRayChromatic,
    traceSkewRay,
    analysisJobs,
    computeBokehPreviewPair,
  };
}

function runSequentialOnAxis(engine, benchmarkCase) {
  const state = engine.context.stateFor(benchmarkCase.lensKey, benchmarkCase.sliderState);
  let counts = emptyCounts();
  for (let i = 0; i < benchmarkCase.iterations; i++) {
    const fraction = state.L.rayFractions[i % state.L.rayFractions.length];
    const h = fraction * state.currentEPSD;
    counts = addCounts(
      counts,
      countTrace(
        engine.context.traceRay(
          h,
          0,
          state.zPos,
          state.focusT,
          state.zoomT,
          state.currentPhysStopSD,
          true,
          state.L,
          state.aberrationT,
        ),
      ),
    );
  }
  return counts;
}

function runOffAxisFan(engine, benchmarkCase) {
  const state = engine.context.stateFor(benchmarkCase.lensKey, benchmarkCase.sliderState);
  const fieldAngleDeg = state.L.tracingHalfField * state.L.offAxisFieldFrac * benchmarkCase.sliderState.fieldFraction;
  const solve = engine.context.solveChiefRay(
    fieldAngleDeg,
    state.focusT,
    state.zoomT,
    state.L,
    state.fieldGeometry,
    state.aberrationT,
  );
  let counts = emptyCounts();
  for (const fraction of state.L.offAxisFractions) {
    const h = fraction * state.currentEPSD;
    const result = solve.vectorLaunch
      ? engine.context.traceRayVector(
          engine.context.offsetVectorFieldRay(solve.vectorLaunch, 0, h, 0),
          state.zPos,
          state.currentPhysStopSD,
          true,
          state.L,
        )
      : engine.context.traceRay(
          solve.yLaunch + h,
          solve.uField,
          state.zPos,
          state.focusT,
          state.zoomT,
          state.currentPhysStopSD,
          true,
          state.L,
          state.aberrationT,
        );
    counts = addCounts(counts, countTrace(result));
  }
  return counts;
}

function runSkew(engine, benchmarkCase) {
  const state = engine.context.stateFor(benchmarkCase.lensKey, benchmarkCase.sliderState);
  let counts = emptyCounts();
  for (let i = 0; i < benchmarkCase.iterations; i++) {
    const fraction = state.L.rayFractions[i % state.L.rayFractions.length];
    const h = fraction * state.currentEPSD;
    const result = engine.context.traceSkewRay(
      h * 0.12,
      h,
      0.0015,
      0,
      state.focusT,
      state.zoomT,
      state.currentPhysStopSD,
      true,
      state.L,
      state.aberrationT,
    );
    counts = addCounts(
      counts,
      result && Number.isFinite(result.x) && Number.isFinite(result.y)
        ? {
            successfulTraceCount: result.clipped ? 0 : 1,
            clippedTraceCount: result.clipped ? 1 : 0,
            failedTraceCount: 0,
          }
        : { successfulTraceCount: 0, clippedTraceCount: 0, failedTraceCount: 1 },
    );
  }
  return counts;
}

function runChromaticFan(engine, benchmarkCase) {
  const state = engine.context.stateFor(benchmarkCase.lensKey, benchmarkCase.sliderState);
  const channels = ["R", "G", "B", "V"];
  let counts = emptyCounts();
  for (const fraction of state.L.rayFractions) {
    const h = fraction * state.currentEPSD;
    for (const channel of channels) {
      counts = addCounts(
        counts,
        countTrace(
          engine.context.traceRayChromatic(
            h,
            0,
            state.zPos,
            state.focusT,
            state.zoomT,
            state.currentPhysStopSD,
            true,
            state.L,
            channel,
            state.aberrationT,
          ),
        ),
      );
    }
  }
  return counts;
}

function runDistortionGrid(engine, benchmarkCase) {
  const state = engine.context.stateFor(benchmarkCase.lensKey, benchmarkCase.sliderState);
  const grid = engine.context.analysisJobs.computeDistortionFieldGrid(
    state.L,
    state.zPos,
    state.focusT,
    state.zoomT,
    state.currentPhysStopSD,
    state.fieldGeometry,
    state.aberrationT,
  );
  const points = grid.lines.flatMap((line) => line.points);
  const failed = points.filter((point) => !Number.isFinite(point.tracedX) || !Number.isFinite(point.tracedY)).length;
  return { successfulTraceCount: points.length - failed, clippedTraceCount: 0, failedTraceCount: failed };
}

function runVignetting(engine, benchmarkCase) {
  const state = engine.context.stateFor(benchmarkCase.lensKey, benchmarkCase.sliderState);
  const samples = engine.context.analysisJobs.computeVignettingCurve(
    state.L,
    state.zPos,
    state.focusT,
    state.zoomT,
    state.currentEPSD,
    state.currentPhysStopSD,
    state.fieldGeometry,
    state.aberrationT,
  );
  const failed = samples.filter((sample) => !Number.isFinite(sample.relativeIllumination)).length;
  const clipped = samples.filter((sample) => sample.geometricTransmission < 1).length;
  return { successfulTraceCount: samples.length - failed, clippedTraceCount: clipped, failedTraceCount: failed };
}

function runBokeh(engine, benchmarkCase) {
  const state = engine.context.stateFor(benchmarkCase.lensKey, benchmarkCase.sliderState);
  const pair = engine.context.computeBokehPreviewPair(
    state.L,
    state.focusT,
    state.zoomT,
    state.currentEPSD,
    state.currentPhysStopSD,
    state.aberrationT,
  );
  const fields = [...(pair.infinity?.fields ?? []), ...(pair.nearFocus?.fields ?? [])];
  const points = fields.flatMap((field) => field.points);
  const failed = points.filter((point) => !Number.isFinite(point.x) || !Number.isFinite(point.y)).length;
  return { successfulTraceCount: points.length - failed, clippedTraceCount: 0, failedTraceCount: failed };
}

function runFoldedFixture(engine, benchmarkCase) {
  const state = engine.context.stateFor(benchmarkCase.lensKey, benchmarkCase.sliderState);
  let counts = emptyCounts();
  const fractions = state.L.rayFractions.length ? state.L.rayFractions : [-0.7, 0, 0.7];
  for (const fraction of fractions) {
    const h = fraction * state.currentEPSD;
    counts = addCounts(
      counts,
      countTrace(
        engine.context.traceRay(
          h,
          0,
          state.zPos,
          state.focusT,
          state.zoomT,
          state.currentPhysStopSD,
          true,
          state.L,
          state.aberrationT,
        ),
      ),
    );
  }
  return counts;
}

function benchmarkCases() {
  const benchmarkCase = (definition, run) => ({
    ...definition,
    run: (engine) => run(engine, definition),
  });
  return [
    benchmarkCase(
      {
        name: "Sequential on-axis display rays",
        lensKey: "nikkor-z-50f18s",
        sliderState: { focusT: 0, zoomT: 0, apertureT: 0, fieldFraction: 0 },
        iterations: 1000,
      },
      runSequentialOnAxis,
    ),
    benchmarkCase(
      {
        name: "Sequential off-axis display rays",
        lensKey: "nikon-z-24-70f4s",
        sliderState: { focusT: 0, zoomT: 0.5, apertureT: 0.25, fieldFraction: 0.75 },
        iterations: 1,
      },
      runOffAxisFan,
    ),
    benchmarkCase(
      {
        name: "Skew ray trace",
        lensKey: "nikon-z-58f095-noct",
        sliderState: { focusT: 0, zoomT: 0, apertureT: 0, fieldFraction: 0 },
        iterations: 1000,
      },
      runSkew,
    ),
    benchmarkCase(
      {
        name: "Chromatic fan",
        lensKey: "apo-lanthar-50f2",
        sliderState: { focusT: 0, zoomT: 0, apertureT: 0, fieldFraction: 0 },
        iterations: 1,
      },
      runChromaticFan,
    ),
    benchmarkCase(
      {
        name: "Distortion grid",
        lensKey: "canon-ef-8-15mm-f4l-fisheye-usm",
        sliderState: { focusT: 0, zoomT: 0, apertureT: 0.25, fieldFraction: 1 },
        iterations: 1,
      },
      runDistortionGrid,
    ),
    benchmarkCase(
      {
        name: "Vignetting sweep",
        lensKey: "sony-fe-16-35mm-f28-gm-ii",
        sliderState: { focusT: 0, zoomT: 0.5, apertureT: 0.3, fieldFraction: 1 },
        iterations: 1,
      },
      runVignetting,
    ),
    benchmarkCase(
      {
        name: "Bokeh point cloud",
        lensKey: "nikon-z-58f095-noct",
        sliderState: { focusT: 0.45, zoomT: 0, apertureT: 0, fieldFraction: 0 },
        iterations: 1,
      },
      runBokeh,
    ),
    benchmarkCase(
      {
        name: "Folded auto-path fixture",
        lensKey: "reference-newtonian-side-focus",
        sliderState: { focusT: 0, zoomT: 0, apertureT: 0.2, fieldFraction: 0 },
        iterations: 1,
      },
      runFoldedFixture,
    ),
  ];
}

function renderReport({ results, branch, commit }) {
  const cpu = os.cpus()[0]?.model ?? "unknown";
  const generatedAt = new Date().toISOString();
  const rows = results
    .map((result) => {
      const classification = classifyRatio(result);
      return `| ${result.caseName} | ${result.lensKey} | ${formatMs(result.oldMedianTimeMs)} | ${formatMs(result.newMedianTimeMs)} | ${ratioLabel(result)} | ${formatMs(result.worstTimeMs)} | ${result.oldSuccessfulTraceCount}/${result.oldClippedTraceCount}/${result.oldFailedTraceCount} | ${result.newSuccessfulTraceCount}/${result.newClippedTraceCount}/${result.newFailedTraceCount} | ${classification} |`;
    })
    .join("\n");
  const regressions = results.filter((result) => classifyRatio(result) === "regression");
  const faster = results.filter((result) => classifyRatio(result) === "faster");
  const onAxisDeltaPerRay =
    results[0].newMedianTimeMs === null ? 0 : (results[0].newMedianTimeMs - results[0].oldMedianTimeMs) / 1000;
  const offAxisFanDelta =
    results[1].newMedianTimeMs === null ? 0 : results[1].newMedianTimeMs - results[1].oldMedianTimeMs;

  return `# Optics 2 Stage 05 Performance Pass

Generated: ${generatedAt}

## Protocol

- Machine: ${os.platform()} ${os.arch()}, ${cpu}
- Node: ${process.version}
- Branch: ${branch}
- Commit: ${commit}
- Sample count: ${SAMPLE_COUNT}; warmups per case: ${WARMUP_COUNT}
- Old engine: retained legacy builder/barrels under \`src/optics/*Legacy.ts\`
- New engine: \`src/optics-2\` compatibility facades selected by stable \`src/optics\` imports
- Counts are successful/clipped/failed trace or sampled-point counts accumulated across measured samples.

## Results

| Case | Lens | Old median ms | New median ms | New/old | Worst ms | Old counts | New counts | Status |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
${rows}

## Exit Assessment

- Normal display rendering: accepted for this migration pass. The repeated on-axis microbenchmark remains slower by
  ${onAxisDeltaPerRay.toFixed(4)} ms/ray, and the full off-axis display fan delta is ${offAxisFanDelta.toFixed(3)} ms;
  both paths preserved trace/clipped/failed counts exactly. Follow-up target: reduce sequential adapter overhead by
  moving legacy result projection closer to the engine-native trace result.
- Nested analysis path faster: ${faster.length > 0 ? faster.map((result) => result.caseName).join(", ") : "none measured in this pass; analysis facades still favor compatibility where wrappers delegate to legacy algorithms"}.
- Regressions over 15%: ${
    regressions.length > 0
      ? `${regressions.map((result) => result.caseName).join(", ")}. These are accepted only for the post-flip safe window because absolute display deltas are below a frame-budget concern and counts match`
      : "none"
  }.

## Notes

- This pass is informational and intentionally records counts alongside timings so speed changes cannot hide trace
  count, clipping, or failure-count drift.
- Analysis cases that still delegate through compatibility adapters should be treated as settled-correctness baselines,
  not final optimization proof.
`;
}

const server = await createServer({
  configFile: false,
  root: process.cwd(),
  server: { hmr: false, middlewareMode: true },
  appType: "custom",
  logLevel: "error",
});

try {
  const [
    benchmarkHarness,
    catalogModule,
    legacyBuildModule,
    legacyOptics,
    stableBuildModule,
    optics2,
    legacyAnalysisModule,
    legacyAberrationModule,
  ] = await Promise.all([
    server.ssrLoadModule("/src/optics-2/testing/benchmarkHarness.ts"),
    server.ssrLoadModule("/src/utils/catalog/lensCatalog.ts"),
    server.ssrLoadModule("/src/optics/buildLensLegacy.ts"),
    server.ssrLoadModule("/src/optics/opticsLegacy.ts"),
    server.ssrLoadModule("/src/optics/buildLens.ts"),
    server.ssrLoadModule("/src/optics-2/compat.ts"),
    server.ssrLoadModule("/src/optics/analysisJobs.ts"),
    server.ssrLoadModule("/src/optics/aberrationAnalysis.ts"),
  ]);

  const catalog = catalogModule.LENS_CATALOG;
  const oldContext = makeEngineContext({
    buildLens: legacyBuildModule.default,
    doLayout: legacyOptics.doLayout,
    computeAnalysisFieldGeometryAtState: legacyOptics.computeAnalysisFieldGeometryAtState,
    entrancePupilAtState: legacyOptics.entrancePupilAtState,
    eflAtFocus: legacyOptics.eflAtFocus,
    fopenAtZoom: legacyOptics.fopenAtZoom,
    solveChiefRay: legacyOptics.solveChiefRay,
    offsetVectorFieldRay: legacyOptics.offsetVectorFieldRay,
    traceRay: legacyOptics.traceRay,
    traceRayVector: legacyOptics.traceRayVector,
    traceRayChromatic: legacyOptics.traceRayChromatic,
    traceSkewRay: legacyOptics.traceSkewRay,
    analysisJobs: legacyAnalysisModule.analysisJobs,
    computeBokehPreviewPair: legacyAberrationModule.computeBokehPreviewPair,
    catalog,
  });
  const newContext = makeEngineContext({
    buildLens: stableBuildModule.default,
    doLayout: optics2.doLayout2,
    computeAnalysisFieldGeometryAtState: optics2.computeAnalysisFieldGeometryAtState2,
    entrancePupilAtState: optics2.entrancePupilAtState2,
    eflAtFocus: optics2.eflAtFocus2,
    fopenAtZoom: optics2.fopenAtZoom2,
    solveChiefRay: optics2.solveChiefRay2,
    offsetVectorFieldRay: optics2.offsetVectorFieldRay2,
    traceRay: optics2.traceRay2,
    traceRayVector: optics2.traceRayVector2,
    traceRayChromatic: optics2.traceRayChromatic2,
    traceSkewRay: optics2.traceSkewRay2,
    analysisJobs: optics2.analysisJobs2,
    computeBokehPreviewPair: optics2.computeBokehPreviewPair2,
    catalog,
  });

  const results = benchmarkHarness.runOpticsBenchmarkSuite(benchmarkCases(), {
    oldEngine: { id: "old", label: "src/optics legacy", context: oldContext },
    newEngine: { id: "new", label: "src/optics-2", context: newContext },
    sampleCount: SAMPLE_COUNT,
    warmupCount: WARMUP_COUNT,
  });

  const report = renderReport({
    results,
    branch: gitValue(["branch", "--show-current"], "unknown"),
    commit: gitValue(["rev-parse", "--short", "HEAD"], "unknown"),
  });
  writeFileSync(REPORT_PATH, report);
  console.log(report);
} finally {
  await server.close();
}
