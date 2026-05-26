export interface OpticsBenchmarkSliderState {
  focusT: number;
  zoomT: number;
  apertureT: number;
  fieldFraction: number;
  aberrationT?: number;
}

export interface OpticsBenchmarkEngine<TContext = unknown> {
  id: "old" | "new" | string;
  label: string;
  context: TContext;
}

export interface OpticsBenchmarkCounts {
  successfulTraceCount: number;
  clippedTraceCount: number;
  failedTraceCount: number;
}

export interface OpticsBenchmarkCase<TContext = unknown> {
  name: string;
  lensKey: string;
  sliderState: OpticsBenchmarkSliderState;
  iterations: number;
  run: (engine: OpticsBenchmarkEngine<TContext>) => OpticsBenchmarkCounts | void;
}

export interface OpticsBenchmarkRunConfig<TOldContext = unknown, TNewContext = TOldContext> {
  oldEngine: OpticsBenchmarkEngine<TOldContext>;
  newEngine?: OpticsBenchmarkEngine<TNewContext>;
  sampleCount?: number;
  warmupCount?: number;
  now?: () => number;
}

export type OpticsBenchmarkStatus = "complete" | "new-engine-missing";

export interface OpticsBenchmarkResult {
  caseName: string;
  lensKey: string;
  sliderState: OpticsBenchmarkSliderState;
  oldMedianTimeMs: number;
  newMedianTimeMs: number | null;
  worstTimeMs: number;
  successfulTraceCount: number;
  clippedTraceCount: number;
  failedTraceCount: number;
  status: OpticsBenchmarkStatus;
}

export const OPTICS_2_REQUIRED_BENCHMARK_CASES = [
  { id: "sequential-on-axis-1000", name: "1,000 sequential on-axis traces", defaultIterations: 1000 },
  { id: "skew-1000", name: "1,000 skew traces", defaultIterations: 1000 },
  { id: "off-axis-display-ray-fan", name: "Off-axis display ray fan", defaultIterations: 1 },
  { id: "chromatic-fan", name: "Chromatic fan", defaultIterations: 1 },
  { id: "distortion-grid", name: "Distortion grid", defaultIterations: 1 },
  { id: "vignetting-curve", name: "Vignetting curve", defaultIterations: 1 },
  { id: "bokeh-spot-grid", name: "Bokeh point cloud or spot grid", defaultIterations: 1 },
  { id: "folded-fixture-trace", name: "Folded fixture trace", defaultIterations: 1 },
] as const;

function defaultNow(): number {
  return globalThis.performance?.now() ?? Date.now();
}

function emptyCounts(): OpticsBenchmarkCounts {
  return { successfulTraceCount: 0, clippedTraceCount: 0, failedTraceCount: 0 };
}

function normalizeCounts(counts: OpticsBenchmarkCounts | void, fallbackIterations: number): OpticsBenchmarkCounts {
  return counts ?? { successfulTraceCount: fallbackIterations, clippedTraceCount: 0, failedTraceCount: 0 };
}

function addCounts(left: OpticsBenchmarkCounts, right: OpticsBenchmarkCounts): OpticsBenchmarkCounts {
  return {
    successfulTraceCount: left.successfulTraceCount + right.successfulTraceCount,
    clippedTraceCount: left.clippedTraceCount + right.clippedTraceCount,
    failedTraceCount: left.failedTraceCount + right.failedTraceCount,
  };
}

function median(values: readonly number[]): number {
  if (values.length === 0) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 1) return sorted[middle];
  return (sorted[middle - 1] + sorted[middle]) / 2;
}

function runTimed<TContext>(
  benchmarkCase: OpticsBenchmarkCase<TContext>,
  engine: OpticsBenchmarkEngine<TContext>,
  sampleCount: number,
  warmupCount: number,
  now: () => number,
): { samples: number[]; counts: OpticsBenchmarkCounts } {
  for (let i = 0; i < warmupCount; i++) {
    benchmarkCase.run(engine);
  }

  const samples: number[] = [];
  let counts = emptyCounts();
  for (let i = 0; i < sampleCount; i++) {
    const start = now();
    const runCounts = normalizeCounts(benchmarkCase.run(engine), benchmarkCase.iterations);
    const elapsed = now() - start;
    samples.push(elapsed);
    counts = addCounts(counts, runCounts);
  }
  return { samples, counts };
}

export function runOpticsBenchmarkSuite<TOldContext, TNewContext = TOldContext>(
  benchmarkCases: readonly OpticsBenchmarkCase<TOldContext | TNewContext>[],
  config: OpticsBenchmarkRunConfig<TOldContext, TNewContext>,
): OpticsBenchmarkResult[] {
  const sampleCount = config.sampleCount ?? 5;
  const warmupCount = config.warmupCount ?? 1;
  const now = config.now ?? defaultNow;

  return benchmarkCases.map((benchmarkCase) => {
    const oldRun = runTimed(
      benchmarkCase as OpticsBenchmarkCase<TOldContext>,
      config.oldEngine,
      sampleCount,
      warmupCount,
      now,
    );
    const newRun = config.newEngine
      ? runTimed(benchmarkCase as OpticsBenchmarkCase<TNewContext>, config.newEngine, sampleCount, warmupCount, now)
      : null;
    const allSamples = newRun ? [...oldRun.samples, ...newRun.samples] : oldRun.samples;

    return {
      caseName: benchmarkCase.name,
      lensKey: benchmarkCase.lensKey,
      sliderState: benchmarkCase.sliderState,
      oldMedianTimeMs: median(oldRun.samples),
      newMedianTimeMs: newRun ? median(newRun.samples) : null,
      worstTimeMs: Math.max(...allSamples, 0),
      successfulTraceCount: (newRun ?? oldRun).counts.successfulTraceCount,
      clippedTraceCount: (newRun ?? oldRun).counts.clippedTraceCount,
      failedTraceCount: (newRun ?? oldRun).counts.failedTraceCount,
      status: newRun ? "complete" : "new-engine-missing",
    };
  });
}
