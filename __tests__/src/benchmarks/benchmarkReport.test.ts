import { describe, expect, it } from "vitest";
import {
  BENCHMARK_SCHEMA_VERSION,
  BOOTSTRAP_RESAMPLES,
  BOOTSTRAP_SEED,
  HEADLINE_CASE_IDS,
  bootstrapMedianRatioInterval,
  bootstrapSeedFor,
  buildBenchmarkReport,
  buildPairedSummary,
  compareCompletedWork,
  compareMemorySessions,
  comparePairedSamples,
  completedWorkOf,
  createSeededRandom,
  digestCompletedWork,
  finishBenchmarkRecord,
  formatPairedRunFileName,
  formatPercent,
  formatRunFileName,
  isRegressedCase,
  latestRunRecords,
  listBenchmarkCases,
  pairedSampleOrder,
  percentChange,
  planTimedProcesses,
  poolTimedRecords,
  serializeBenchmarkRecord,
  summarizeNumbers,
  summarizeRun,
  tallyMarkupElements,
  tooFewSamplesNotice,
  type BenchmarkEntry,
  type BenchmarkRunRecord,
  type HeapReading,
  type MemorySessionReport,
  type UntimedBenchmarkPass,
} from "../../../src/benchmarks/benchmarkReport.js";

function okEntry(median: number): BenchmarkEntry {
  return {
    status: "ok",
    stats: {
      iterations: 3,
      warmups: 1,
      min: median - 1,
      median,
      mean: median,
      p95: median + 1,
      max: median + 1,
    },
  };
}

function makeRecord(createdAt: string, buildMedian: number, aberrationMedian: number): BenchmarkRunRecord {
  const record: BenchmarkRunRecord = {
    schemaVersion: BENCHMARK_SCHEMA_VERSION,
    createdAt,
    git: {
      branch: "bench",
      commit: "abcdef123456",
      shortCommit: "abcdef1",
      dirty: false,
    },
    environment: {
      node: "v24.15.0",
      v8: "12.0",
      platform: "darwin",
      arch: "arm64",
      cpuModel: "test cpu",
      cpuCount: 8,
      heapMode: "raw",
    },
    config: {
      warmups: 1,
      iterations: 3,
      lensKeys: ["lens-a"],
      scenarios: ["default"],
    },
    results: {
      "lens-a": {
        default: {
          build: okEntry(buildMedian),
          layout: okEntry(2),
          rays: okEntry(3),
          analysis: okEntry(4),
          analysisBreakdown: {
            summary: okEntry(aberrationMedian / 10),
            distortionCurve: okEntry(aberrationMedian / 5),
            distortionGrid: okEntry(aberrationMedian / 4),
            vignetting: okEntry(aberrationMedian / 3),
            pupils: okEntry(aberrationMedian / 2),
            bokehPair: okEntry(aberrationMedian),
            bestFocus: okEntry(aberrationMedian / 6),
          },
          svgRender: okEntry(5),
          totalCold: okEntry(6),
          totalWarm: okEntry(5.5),
        },
      },
    },
    aberrationPanels: {
      "lens-a": {
        default: {
          data: {
            sphericalAberration: okEntry(aberrationMedian),
          },
          render: {
            aberrationsTab: okEntry(aberrationMedian + 1),
          },
          skips: [
            {
              lensKey: "lens-a",
              scenarioId: "default",
              category: "coma",
              reason: "Folded optics guard",
            },
          ],
        },
      },
    },
    summary: { main: {}, aberrationPanels: {} },
    warnings: ["test warning"],
  };
  record.summary = summarizeRun(record);
  return record;
}

describe("benchmark report helpers", () => {
  it("formats stable per-run filenames", () => {
    expect(formatRunFileName("2026-05-27T12:34:56.789Z", "abc1234")).toBe("2026-05-27T12-34-56Z-abc1234.json");
  });

  it("sorts and selects the latest run records", () => {
    const older = makeRecord("2026-05-27T12:00:00.000Z", 10, 20);
    const newer = makeRecord("2026-05-27T13:00:00.000Z", 12, 22);
    const latest = latestRunRecords([newer, older], 1);
    expect(latest).toEqual([newer]);
  });

  it("computes percent changes and formats unavailable baselines", () => {
    expect(percentChange(12, 10)).toBe(20);
    expect(percentChange(0, 0)).toBe(0);
    expect(percentChange(10, 0)).toBeNull();
    expect(formatPercent(null)).toBe("n/a");
    expect(formatPercent(-12.345)).toBe("-12.3%");
  });

  it("builds a report with main and aberration panel sections", () => {
    const records = [makeRecord("2026-05-27T12:00:00.000Z", 10, 20), makeRecord("2026-05-27T13:00:00.000Z", 12, 24)];
    const report = buildBenchmarkReport(records);
    expect(report).toContain("## Main Pipeline Trends");
    expect(report).toContain("## Analysis Work Trends");
    expect(report).toContain("bokehPair");
    expect(report).toContain("## Aberration Panel Trends");
    expect(report).toContain("data.sphericalAberration");
    expect(report).toContain("Aberration panel skips: 1");
  });

  it("summarizes older schema-2 records without movement snapshots or perspective rows", () => {
    const record = makeRecord("2026-05-27T12:00:00.000Z", 10, 20);

    expect(record.config.scenarioSnapshots).toBeUndefined();
    expect(record.summary.analysis?.summary).not.toBeNull();
    expect(record.summary.analysis?.perspectiveFocus).toBeNull();
    expect(record.summary.analysis?.perspectiveDistortion).toBeNull();
    expect(buildBenchmarkReport([record])).toContain("perspectiveFocus");
  });
});

/* Ten pairs with an even count, so a resampled median averages two samples and the ratio takes many values. */
const BASE_MS = [100.2, 101.7, 99.4, 100.9, 102.3, 98.8, 100.1, 101.2, 99.9, 100.6];
const HEAD_MS = [104.1, 105.9, 102.2, 104.8, 107.5, 101.9, 103.3, 105.2, 103.9, 104.4];

describe("paired benchmark statistics", () => {
  it("gives a fixed interval for a fixed seed and sample set", () => {
    const interval = bootstrapMedianRatioInterval([{ baseMs: BASE_MS, headMs: HEAD_MS }], 12345);

    expect(interval).toEqual([1.031968031968032, 1.04004004004004]);
    expect(bootstrapMedianRatioInterval([{ baseMs: BASE_MS, headMs: HEAD_MS }], 12345)).toEqual(interval);
  });

  it("moves the interval when the seed changes", () => {
    /* Few resamples, where the draw still shows; at the default count two seeds agree to many digits. */
    const cells = [{ baseMs: BASE_MS, headMs: HEAD_MS }];

    expect(bootstrapMedianRatioInterval(cells, 1, 40)).toEqual([1.0300275336227893, 1.0400714874166201]);
    expect(bootstrapMedianRatioInterval(cells, 2, 40)).toEqual([1.0340914325137984, 1.0394802598700648]);
  });

  it("draws from a seeded generator and seeds every case apart", () => {
    const random = createSeededRandom(1);
    /* Each draw is a 32-bit integer over 2^32. */
    expect([random(), random(), random()].map((draw) => draw * 2 ** 32)).toEqual([2693262067, 11749833, 2265367787]);

    expect(BOOTSTRAP_RESAMPLES).toBe(10_000);
    expect(bootstrapSeedFor("lens-a:default:analysis")).toBe(822733486);
    expect(bootstrapSeedFor("lens-a:default:rays")).toBe(1367115625);
    expect(bootstrapSeedFor("lens-a:default:rays", 1)).not.toBe(
      bootstrapSeedFor("lens-a:default:rays", BOOTSTRAP_SEED),
    );
  });

  it("refuses samples that do not pair up", () => {
    expect(bootstrapMedianRatioInterval([], 1)).toBeNull();
    expect(bootstrapMedianRatioInterval([{ baseMs: [1, 2], headMs: [1] }], 1)).toBeNull();
    expect(comparePairedSamples("case", { baseMs: [1, 2], headMs: [1] })).toBeNull();
    expect(comparePairedSamples("case", { baseMs: [], headMs: [] })).toBeNull();
  });

  it("resamples a category as the median over its cells", () => {
    const interval = bootstrapMedianRatioInterval(
      [
        { baseMs: BASE_MS, headMs: HEAD_MS },
        { baseMs: [1, 2, 3], headMs: [2, 4, 6] },
      ],
      7,
    );

    expect(interval).toEqual([1.0449826989619375, 1.0671785028790788]);
  });

  it("alternates the side that is sampled first, from base-first", () => {
    expect([0, 1, 2, 3, 4].map((pair) => pairedSampleOrder(pair).join(">"))).toEqual([
      "base>head",
      "head>base",
      "base>head",
      "head>base",
      "base>head",
    ]);
  });

  it("calls a case regressed only past both thresholds", () => {
    expect(isRegressedCase(1.0501, 100, 101.01)).toBe(true);
    /* The bound must exceed 1.05, not reach it. */
    expect(isRegressedCase(1.05, 100, 110)).toBe(false);
    /* The median must grow by more than 1 ms, not by 1 ms. */
    expect(isRegressedCase(1.5, 2, 3)).toBe(false);
    expect(isRegressedCase(1.5, 2, 3.001)).toBe(true);
    /* A large ratio on a sub-millisecond case is no regression, and neither is a steady cost on a long one. */
    expect(isRegressedCase(3, 0.1, 0.4)).toBe(false);
    expect(isRegressedCase(1.02, 1000, 1030)).toBe(false);
  });

  it("compares a case's samples under its own seed and never judges unequal work regressed", () => {
    const samples = { baseMs: BASE_MS, headMs: HEAD_MS.map((sample) => sample + 3) };

    expect(comparePairedSamples("lens-a:default:analysis", samples)).toEqual({
      pairs: 10,
      baseMedianMs: 100.4,
      headMedianMs: 107.25,
      ratio: 1.0682270916334662,
      ci95: [1.061938061938062, 1.07007007007007],
      regressed: true,
      unequalWork: false,
      workNotVerified: false,
    });
    expect(comparePairedSamples("lens-a:default:analysis", samples, true)).toMatchObject({
      regressed: false,
      unequalWork: true,
    });
    /* A case with nothing of its work to compare is judged all the same, and says so. */
    expect(comparePairedSamples("lens-a:default:analysis", samples, false, true)).toMatchObject({
      regressed: true,
      workNotVerified: true,
    });
  });

  it("shares the measured pairs between two processes, the extra one to the process that puts the base first", () => {
    expect(planTimedProcesses(15)).toEqual([
      { firstSide: "base", pairs: 8 },
      { firstSide: "head", pairs: 7 },
    ]);
    expect(planTimedProcesses(2)).toEqual([
      { firstSide: "base", pairs: 1 },
      { firstSide: "head", pairs: 1 },
    ]);
    /* One pair cannot be shared, and a process that would measure nothing is not run. */
    expect(planTimedProcesses(1)).toEqual([{ firstSide: "base", pairs: 1 }]);
    expect(planTimedProcesses()).toEqual(planTimedProcesses(3));
    expect(planTimedProcesses(3).map(({ pairs }) => pairs)).toEqual([2, 1]);
  });

  it("says when the samples are too few for a verdict", () => {
    expect(tooFewSamplesNotice(8)).toBe(
      "Too few samples for a verdict: a regression needs at least 9 measured samples per case to mean anything.",
    );
    expect(tooFewSamplesNotice(1)).toBe(tooFewSamplesNotice(8));
    expect(tooFewSamplesNotice(9)).toBeNull();
    expect(tooFewSamplesNotice(15)).toBeNull();
  });
});

describe("completed work", () => {
  /** One side of a measured case: its entry, and the tallies of what it completed. */
  interface Side {
    entry: BenchmarkEntry;
    work?: Record<string, number>;
  }
  const measured = (output: BenchmarkEntry["output"], work?: Record<string, number>): Side => ({
    entry: { ...okEntry(10), output },
    work,
  });
  const compare = (base: Side, head: Side) =>
    compareCompletedWork(base.entry, head.entry, { base: base.work, head: head.work });

  it("tallies every member of a result, and reads no float", () => {
    const tallies: Record<string, number> = {};
    digestCompletedWork(
      "result",
      {
        fields: [
          { usable: true, validSampleCount: 9, clippedSampleCount: 0, chiefImageHeight: 12.5, status: "usable" },
          { usable: false, validSampleCount: 3, clippedSampleCount: 6, chiefImageHeight: 20.25, status: "clipped" },
        ],
        points: [
          [0, 1],
          [2, 3, Number.NaN],
        ],
        usableFieldCount: 1,
        preview: null,
        pending: undefined,
        imagePlaneZ: 168.9,
        blurRadius: Number.NaN,
        focusDistance: Number.POSITIVE_INFINITY,
        label: "50%",
        vector: [1, 2, 3],
        weights: new Float64Array(5),
        hits: [null, { slope: 0.1 }, null],
        plain: { x: 1.5 },
        empty: {},
      },
      tallies,
    );
    digestCompletedWork("curve", [{ clipped: false }, { clipped: true }], tallies);
    digestCompletedWork("flag", true, tallies);
    digestCompletedWork("none", null, tallies);
    digestCompletedWork("number", 4.5, tallies);

    expect(tallies).toEqual({
      "result.fields.length": 2,
      "result.fields.usable=true": 1,
      "result.fields.usable=false": 1,
      "result.fields.validSampleCount": 12,
      "result.fields.clippedSampleCount": 6,
      "result.fields.chiefImageHeight=number": 2,
      "result.fields.status=usable": 1,
      "result.fields.status=clipped": 1,
      /* A list in a list is tallied under the outer list's items, and so is what is not finite there. */
      "result.points.length": 2,
      "result.points[].length": 5,
      "result.points[][]=NaN": 1,
      "result.usableFieldCount": 1,
      "result.preview=null": 1,
      "result.pending=undefined": 1,
      "result.imagePlaneZ=number": 1,
      "result.blurRadius=NaN": 1,
      "result.focusDistance=Infinity": 1,
      "result.label=text": 1,
      "result.vector.length": 3,
      "result.weights.length": 5,
      "result.hits.length": 3,
      "result.hits[]=null": 2,
      "result.hits.slope=number": 1,
      "result.plain.x=number": 1,
      "result.empty=object": 1,
      "curve.length": 2,
      "curve.clipped=false": 1,
      "curve.clipped=true": 1,
      "flag=true": 1,
      "none=null": 1,
      "number=number": 1,
    });
  });

  it("tallies an object past the depth it reads as present, and the elements of markup as one count", () => {
    const tallies: Record<string, number> = {};
    digestCompletedWork("deep", { a: { b: { c: { d: { e: { f: 1 } } } } } }, tallies);
    expect(tallies).toEqual({ "deep.a.b.c.d=object": 1 });

    const markup: Record<string, number> = {};
    tallyMarkupElements(
      '<svg width="10"><g><path d="M0 0L1.5 2"/><path d="M0 0"/></g><text>a &lt; b</text></svg>',
      markup,
    );
    tallyMarkupElements("<div><span>x</span></div>", markup);
    expect(markup).toEqual({ "markup.elements": 7 });
  });

  it("finds equal work equal", () => {
    const entry = measured({ onAxisRays: 6, movementActive: false }, { "ray.clipped=false": 6 });

    expect(compare(entry, structuredClone(entry))).toEqual([]);
  });

  it("does not trip on a float that only describes the result", () => {
    const base = measured({ distortionSamples: 21, bestFocusZ: 168.92510965063175, imageZ: 56.38, markupLength: 9120 });
    const head = measured({
      distortionSamples: 21,
      bestFocusZ: 168.92510965225574,
      imageZ: 56.380000000001,
      markupLength: 9118,
    });

    expect(compare(base, head)).toEqual([]);
  });

  it("reports a count that differs, with both sides", () => {
    const base = measured({ onAxisRays: 6 }, { "ray.clipped=false": 6 });
    const head = measured({ onAxisRays: 5 }, { "ray.clipped=false": 4, "ray.clipped=true": 2 });

    expect(compare(base, head)).toEqual([
      { fact: "output.onAxisRays", base: 6, head: 5 },
      { fact: "work.ray.clipped=false", base: 6, head: 4 },
      { fact: "work.ray.clipped=true", base: 0, head: 2 },
    ]);
  });

  it("reports a result that one side returned as null", () => {
    const base = measured({}, { "result.preview.fields.length": 4, "result.preview.usableFieldCount": 4 });
    const head = measured({}, { "result.preview=null": 1 });

    expect(compare(base, head)).toEqual([{ fact: "work.result.preview=null", base: 0, head: 1 }]);
  });

  it("reports a number that one side returned as null, as NaN or not at all", () => {
    const base = measured({}, { "bestFocus.z=number": 1, "result.fields.length": 2, "result.fields.blur=number": 2 });

    expect(
      compare(base, measured({}, { "bestFocus.z=null": 1, "result.fields.length": 2, "result.fields.blur=number": 2 })),
    ).toEqual([
      { fact: "work.bestFocus.z=number", base: 1, head: 0 },
      { fact: "work.bestFocus.z=null", base: 0, head: 1 },
    ]);
    expect(
      compare(
        base,
        measured(
          {},
          {
            "bestFocus.z=number": 1,
            "result.fields.length": 2,
            "result.fields.blur=number": 1,
            "result.fields.blur=NaN": 1,
          },
        ),
      ),
    ).toEqual([
      { fact: "work.result.fields.blur=number", base: 2, head: 1 },
      { fact: "work.result.fields.blur=NaN", base: 0, head: 1 },
    ]);
    /* The head's fields are there and hold no blur at all: the head completed less. */
    expect(compare(base, measured({}, { "bestFocus.z=number": 1, "result.fields.length": 2 }))).toEqual([
      { fact: "work.result.fields.blur", base: "present", head: "absent" },
    ]);
  });

  it("reports a list of numbers that is shorter on one side", () => {
    const tallies = (points: number[]): Record<string, number> => {
      const work: Record<string, number> = {};
      digestCompletedWork("result", { points }, work);
      return work;
    };

    expect(compare(measured({}, tallies([1, 2, 3, 4])), measured({}, tallies([1, 2])))).toEqual([
      { fact: "work.result.points.length", base: 4, head: 2 },
    ]);
  });

  it("reports a result that only one side computed, and a side with no tallies at all", () => {
    const base = measured({}, { "ray.clipped=false": 6, "bestFocus.isLayoutImagePlane=false": 1 });

    expect(compare(base, measured({}, { "ray.clipped=false": 6 }))).toEqual([
      { fact: "work.bestFocus", base: "present", head: "absent" },
    ]);
    expect(compare(measured({}, { "ray.clipped=false": 6 }), base)).toEqual([
      { fact: "work.bestFocus", base: "absent", head: "present" },
    ]);
    /* The head's untimed call threw, so it tallied nothing: every result the base has is missing there. */
    expect(compare(base, measured({}))).toEqual([
      { fact: "work.ray", base: "present", head: "absent" },
      { fact: "work.bestFocus", base: "present", head: "absent" },
    ]);
    expect(compare(measured({}), measured({}))).toEqual([]);
  });

  it("passes over a member that the head's results have and the base's lack, and not the other way round", () => {
    const without = measured({}, { "result.fields.length": 4, "result.fields.usable=true": 4 });
    const withMember = measured(
      {},
      { "result.fields.length": 4, "result.fields.usable=true": 4, "result.fields.floorAssisted=false": 4 },
    );

    /* The base's fields are there without the member: its result type has none, and the head did no less. */
    expect(compare(without, withMember)).toEqual([]);
    /* The same gap on the head is the head completing less. */
    expect(compare(withMember, without)).toEqual([
      { fact: "work.result.fields.floorAssisted", base: "present", head: "absent" },
    ]);
    /* A base that holds no object where the head's member sits has no type to lack it: the list is of numbers. */
    expect(
      compare(
        measured({}, { "result.fields.length": 4 }),
        measured({}, { "result.fields.length": 4, "result.fields.usable=true": 4 }),
      ),
    ).toEqual([{ fact: "work.result.fields.usable", base: "absent", head: "present" }]);
  });

  it("ends a status at the first equals sign", () => {
    const base = measured({}, { "result.reason=k = 0": 1 });
    const head = measured({}, { "result.reason=k = 1": 1 });

    expect(compare(base, head)).toEqual([
      { fact: "work.result.reason=k = 0", base: 1, head: 0 },
      { fact: "work.result.reason=k = 1", base: 0, head: 1 },
    ]);
  });

  it("reports a side that threw or was skipped as a difference of status", () => {
    const skipped: BenchmarkEntry = { status: "skipped", reason: "Folded optics guard" };
    const thrown: BenchmarkEntry = { status: "error", message: "no root" };

    expect(compareCompletedWork(measured({}).entry, thrown)).toEqual([{ fact: "status", base: "ok", head: "error" }]);
    expect(compareCompletedWork(skipped, measured({}).entry)).toEqual([
      { fact: "status", base: "skipped", head: "ok" },
    ]);
    expect(compareCompletedWork(skipped, { status: "skipped", reason: "another" })).toEqual([
      { fact: "reason", base: "Folded optics guard", head: "another" },
    ]);
    expect(compareCompletedWork(skipped, { ...skipped })).toEqual([]);
  });
});

/** A paired record of one lens under one scenario, with the samples of its `analysis` case chosen by the test. */
function makePairedRecord(headAnalysisMs: readonly number[], headRays = 6): BenchmarkRunRecord {
  const sampled = (entry: BenchmarkEntry, samplesMs: readonly number[]): BenchmarkEntry => ({
    ...entry,
    stats: { ...summarizeNumbers(samplesMs)!, iterations: samplesMs.length, warmups: 1, samplesMs: [...samplesMs] },
  });
  const side = (analysisMs: readonly number[], rays: number): BenchmarkRunRecord => {
    const record = makeRecord("2026-10-12T08:00:00.000Z", 10, 20);
    const cell = record.results["lens-a"].default;
    for (const entry of listBenchmarkCases(record).map((ref) => ref.entry))
      Object.assign(entry, sampled(entry, BASE_MS));
    cell.analysis = sampled(cell.analysis, analysisMs);
    cell.rays.output = { onAxisRays: rays };
    return record;
  };
  const record = side(headAnalysisMs, headRays);
  record.config.iterations = BASE_MS.length;
  record.config.timedProcesses = [{ firstSide: "base", pairs: BASE_MS.length }];
  const base = side(BASE_MS, 6);
  record.base = {
    ref: "d49857ae",
    commit: "d49857ae00000000000000000000000000000000",
    shortCommit: "d49857ae",
    results: base.results,
    aberrationPanels: base.aberrationPanels,
    summary: base.summary,
  };
  return record;
}

function untimedPass(): UntimedBenchmarkPass {
  return {
    cases: {
      "lens-a:default:analysis": { work: [{ "summary.surfaceCount": 12 }] },
      "lens-a:default:rays": { message: "threw untimed" },
    },
  };
}

describe("paired benchmark record", () => {
  it("lists every case under the id the benchmark entry labels it with", () => {
    const record = makeRecord("2026-10-12T08:00:00.000Z", 10, 20);

    expect(listBenchmarkCases(record).map(({ id, category }) => `${id} [${category}]`)).toEqual([
      "lens-a:default:build [build]",
      "lens-a:default:layout [layout]",
      "lens-a:default:rays [rays]",
      "lens-a:default:analysis [analysis]",
      "lens-a:default:analysis.summary [analysis.summary]",
      "lens-a:default:analysis.distortionCurve [analysis.distortionCurve]",
      "lens-a:default:analysis.distortionGrid [analysis.distortionGrid]",
      "lens-a:default:analysis.vignetting [analysis.vignetting]",
      "lens-a:default:analysis.pupils [analysis.pupils]",
      "lens-a:default:analysis.bokehPair [analysis.bokehPair]",
      "lens-a:default:analysis.bestFocus [analysis.bestFocus]",
      "lens-a:default:svgRender [svgRender]",
      "lens-a:default:totalCold [totalCold]",
      "lens-a:default:totalWarm [totalWarm]",
      "lens-a:default:aberrationPanels:data.sphericalAberration [data.sphericalAberration]",
      "lens-a:default:aberrationPanels:render.aberrationsTab [render.aberrationsTab]",
    ]);
  });

  it("adds the untimed passes and the comparison, and keeps the head side where an unpaired record has it", () => {
    const record = makePairedRecord(HEAD_MS.map((sample) => sample + 3));
    finishBenchmarkRecord(record, { head: untimedPass(), base: untimedPass() });

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
      "base",
      "workTallies",
      "comparison",
    ]);
    expect(Object.keys(record.base ?? {})).toEqual([
      "ref",
      "commit",
      "shortCommit",
      "results",
      "aberrationPanels",
      "summary",
    ]);
    /* The two sides tallied alike, so one set of tallies stands for both. */
    expect(record.workTallies).toEqual([{ "summary.surfaceCount": 12 }]);
    expect(record.results["lens-a"].default.analysis.work).toEqual([0]);
    expect(record.base?.results["lens-a"].default.analysis.work).toEqual([0]);
    expect(completedWorkOf(record, record.results["lens-a"].default.analysis)).toEqual({ "summary.surfaceCount": 12 });
    expect(completedWorkOf(record, record.results["lens-a"].default.rays)).toBeUndefined();
    expect(record.warnings).toContain("Untimed pass threw on the head: lens-a:default:rays: threw untimed");

    const comparison = record.comparison!;
    expect(Object.keys(comparison)).toEqual([
      "firstSide",
      "bootstrap",
      "regressionRule",
      "cases",
      "categories",
      "regressed",
      "unequalWork",
      "workNotVerified",
      "headOnlyMembers",
      "thrown",
    ]);
    expect(comparison.firstSide).toBe("base");
    expect(comparison.bootstrap).toEqual({ resamples: 10_000, seed: BOOTSTRAP_SEED, confidence: 0.95 });
    expect(comparison.regressionRule).toEqual({ ratioLowerBound: 1.05, medianGrowthMs: 1 });
    expect(Object.keys(comparison.cases)).toEqual(listBenchmarkCases(record).map(({ id }) => id));
    expect(comparison.cases["lens-a:default:analysis"]).toEqual({
      pairs: 10,
      baseMedianMs: 100.4,
      headMedianMs: 107.25,
      ratio: 1.0682270916334662,
      ci95: [1.061938061938062, 1.07007007007007],
      regressed: true,
      unequalWork: false,
      workNotVerified: false,
    });
    expect(comparison.cases["lens-a:default:build"]).toMatchObject({ ratio: 1, ci95: [1, 1], regressed: false });
    expect(comparison.regressed).toEqual(["lens-a:default:analysis"]);
    expect(comparison.unequalWork).toEqual([]);
    expect(comparison.headOnlyMembers).toEqual([]);
    expect(comparison.thrown).toEqual([]);
    expect(comparison.categories.analysis).toMatchObject({
      cellCount: 1,
      regressedCases: 1,
      unequalWorkCases: 0,
      workNotVerifiedCases: 0,
    });
  });

  it("flags unequal work, shows both sides and leaves the case out of the regression verdict", () => {
    const record = makePairedRecord(
      HEAD_MS.map((sample) => sample + 3),
      4,
    );
    const fasterRays = HEAD_MS.map((sample) => sample - 30);
    Object.assign(record.results["lens-a"].default.rays.stats!, summarizeNumbers(fasterRays), {
      samplesMs: fasterRays,
    });
    record.results["lens-a"].default.totalWarm = { status: "error", message: "no root" };
    finishBenchmarkRecord(record, { head: untimedPass(), base: untimedPass() });
    const comparison = record.comparison!;

    expect(comparison.unequalWork).toEqual([
      { id: "lens-a:default:rays", differences: [{ fact: "output.onAxisRays", base: 6, head: 4 }] },
      { id: "lens-a:default:totalWarm", differences: [{ fact: "status", base: "ok", head: "error" }] },
    ]);
    /* The side that traced fewer rays is a quarter faster, and that is not read as a speedup. */
    expect(comparison.cases["lens-a:default:rays"]).toMatchObject({ unequalWork: true, regressed: false });
    expect(comparison.cases["lens-a:default:rays"].ratio).toBeLessThan(0.75);
    expect(comparison.regressed).toEqual(["lens-a:default:analysis"]);
    expect(comparison.thrown).toEqual([{ id: "lens-a:default:totalWarm", base: null, head: "no root" }]);
    expect(comparison.cases["lens-a:default:totalWarm"]).toBeUndefined();
    expect(comparison.categories.rays).toBeUndefined();

    const summary = buildPairedSummary(record);
    expect(summary).toContain("| lens-a default rays | output.onAxisRays | 6 | 4 |");
    expect(summary).toContain('- lens-a:default:totalWarm: base ran, head threw "no root"');
    expect(summary).toMatch(/\| lens-a default rays \| 100\.40 \| 74\.25 \| 0\.740 \| [^|]+ \| unequal work \|/);
    expect(summary).toContain(
      "| lens-a default totalWarm | 100.40 | n/a | n/a | n/a | unequal work, threw on the head |",
    );
  });

  it("lists a case with no fact of its work to compare as work not verified, and still judges it", () => {
    const record = makePairedRecord(HEAD_MS.map((sample) => sample + 3));
    /* The build case reports a markup length alone, which describes a result and counts nothing. */
    for (const side of [record, record.base!]) side.results["lens-a"].default.build.output = { markupLength: 9120 };
    record.results["lens-a"].default.build.stats!.samplesMs = HEAD_MS.map((sample) => sample + 30);
    finishBenchmarkRecord(record, { head: untimedPass(), base: untimedPass() });
    const comparison = record.comparison!;

    /* The analysis case has a tally on both sides and the rays case a count in its output; nothing else has a fact. */
    const unverified = listBenchmarkCases(record)
      .map(({ id }) => id)
      .filter((id) => id !== "lens-a:default:analysis" && id !== "lens-a:default:rays");
    expect(comparison.workNotVerified).toEqual(unverified);
    expect(comparison.unequalWork).toEqual([]);
    expect(comparison.cases["lens-a:default:build"]).toMatchObject({ workNotVerified: true, regressed: true });
    expect(comparison.cases["lens-a:default:analysis"].workNotVerified).toBe(false);
    expect(comparison.cases["lens-a:default:rays"].workNotVerified).toBe(false);
    expect(comparison.categories.build).toMatchObject({ cellCount: 1, workNotVerifiedCases: 1, regressedCases: 1 });
    expect(comparison.categories.analysis.workNotVerifiedCases).toBe(0);

    const summary = buildPairedSummary(record);
    expect(summary).toContain(
      `- Work not verified, with no fact of the two sides' work to compare: ${unverified.length}`,
    );
    const section = summary.slice(summary.indexOf("### Work not verified"));
    expect(section).toMatch(
      /\| lens-a default build \| 100\.40 \| [\d.]+ \| [\d.]+ \| [^|]+ \| regressed, work not verified \|/,
    );
    expect(section).not.toContain("| lens-a default analysis |");
    /* A case the comparison found a difference in is unequal work, and is not listed a second time. */
    const unequal = makePairedRecord(HEAD_MS, 4);
    finishBenchmarkRecord(unequal, { head: untimedPass(), base: untimedPass() });
    expect(unequal.comparison?.workNotVerified).not.toContain("lens-a:default:rays");
    expect(unequal.comparison?.unequalWork.map(({ id }) => id)).toEqual(["lens-a:default:rays"]);
  });

  it("lists the members only the head's results have, by category, and compares them with nothing", () => {
    const record = makePairedRecord(HEAD_MS);
    const pass = (work: Record<string, number>): UntimedBenchmarkPass => ({
      cases: { "lens-a:default:analysis": { work: [work] }, "lens-a:default:totalWarm": { work: [work] } },
    });
    finishBenchmarkRecord(record, {
      head: pass({ "ray.clipped=false": 6, "ray.floorAssisted=false": 6 }),
      base: pass({ "ray.clipped=false": 6 }),
    });
    const comparison = record.comparison!;

    expect(comparison.unequalWork).toEqual([]);
    expect(comparison.headOnlyMembers).toEqual([
      { category: "analysis", member: "ray.floorAssisted", cases: 1 },
      { category: "totalWarm", member: "ray.floorAssisted", cases: 1 },
    ]);
    const summary = buildPairedSummary(record);
    expect(summary).toContain("- Result members only the head has, compared with nothing: 2 (listed below)");
    expect(summary).toContain("| analysis | ray.floorAssisted | 1 |");
  });

  it("pools the samples of two timed processes, first process first, and says which pairs each gave", () => {
    const process = (firstSide: "base" | "head", baseMs: number[], headMs: number[]): BenchmarkRunRecord => {
      const record = makePairedRecord(headMs);
      for (const side of [record, record.base!]) {
        for (const { entry } of listBenchmarkCases(side)) {
          const samplesMs = side === record ? headMs : baseMs;
          entry.stats = {
            ...summarizeNumbers(samplesMs)!,
            iterations: samplesMs.length,
            warmups: 2,
            heapDeltaBytes: summarizeNumbers(samplesMs.map((sample) => sample * 1000))!,
            samplesMs: [...samplesMs],
            heapDeltaSamplesBytes: samplesMs.map((sample) => sample * 1000),
          };
        }
      }
      record.config.iterations = headMs.length;
      record.config.timedProcesses = [{ firstSide, pairs: headMs.length }];
      record.warnings = ["shared warning", `warning of the ${firstSide}-first process`];
      return record;
    };
    const first = process("base", [10, 12, 14], [20, 22, 24]);
    const second = process("head", [11, 13], [40, 42]);
    second.results["lens-a"].default.svgRender = { status: "error", message: "threw in the second process" };
    const pooled = poolTimedRecords([first, second]);

    expect(pooled).toBe(first);
    expect(pooled.config.iterations).toBe(5);
    expect(pooled.config.timedProcesses).toEqual([
      { firstSide: "base", pairs: 3 },
      { firstSide: "head", pairs: 2 },
    ]);
    expect(pooled.warnings).toEqual([
      "shared warning",
      "warning of the base-first process",
      "warning of the head-first process",
    ]);
    const head = pooled.results["lens-a"].default.analysis.stats!;
    expect(head).toEqual({
      min: 20,
      median: 24,
      mean: 29.6,
      p95: 41.6,
      max: 42,
      iterations: 5,
      warmups: 2,
      heapDeltaBytes: { min: 20000, median: 24000, mean: 29600, p95: 41600, max: 42000 },
      samplesMs: [20, 22, 24, 40, 42],
    });
    /* Pair i of one side still sits beside pair i of the other. */
    expect(pooled.base?.results["lens-a"].default.analysis.stats?.samplesMs).toEqual([10, 12, 14, 11, 13]);
    expect(pooled.summary.main.analysis?.median).toBe(24);
    expect(pooled.base?.summary.main.analysis?.median).toBe(12);
    /* A case that threw in either process is a thrown case. */
    expect(pooled.results["lens-a"].default.svgRender).toEqual({
      status: "error",
      message: "threw in the second process",
    });
    expect(pooled.base?.results["lens-a"].default.svgRender.stats?.samplesMs).toHaveLength(5);

    finishBenchmarkRecord(pooled, { head: untimedPass(), base: untimedPass() });
    expect(pooled.comparison?.cases["lens-a:default:analysis"]).toMatchObject({
      pairs: 5,
      baseMedianMs: 12,
      headMedianMs: 24,
      ratio: 2,
    });
    expect(buildPairedSummary(pooled)).toContain(
      "- Samples: 5 measured after 1 warmup per case, both sides in 2 processes (3 with the base bundle loaded and " +
        "prepared first, 2 with the head bundle loaded and prepared first), alternating which side runs first from " +
        "pair to pair, starting each case's warmups and measured pairs with the process's first side",
    );

    /* One process is pooled with nothing, and only loses the raw heap deltas. */
    const alone = process("base", [10, 12, 14], [20, 22, 24]);
    expect(poolTimedRecords([alone]).results["lens-a"].default.analysis.stats).toEqual({
      min: 20,
      median: 22,
      mean: 22,
      p95: 23.8,
      max: 24,
      iterations: 3,
      warmups: 2,
      heapDeltaBytes: { min: 20000, median: 22000, mean: 22000, p95: 23800, max: 24000 },
      samplesMs: [20, 22, 24],
    });
    expect(() => poolTimedRecords([])).toThrow("A timed pass has no record to pool.");
  });

  it("prints the PC-Nikkor analysis rows first, and a category table for the whole matrix", () => {
    const record = makePairedRecord(HEAD_MS);
    const nikon = "nikon-pc-nikkor-19mm-f4e-ed";
    for (const side of [record, record.base!]) {
      side.results[nikon] = { default: structuredClone(side.results["lens-a"].default) };
      side.aberrationPanels[nikon] = { default: structuredClone(side.aberrationPanels["lens-a"].default) };
    }
    record.config.lensKeys = ["lens-a", nikon];
    finishBenchmarkRecord(record, { head: untimedPass(), base: untimedPass() });
    const summary = buildPairedSummary(record);
    const lines = summary.split("\n");

    expect(HEADLINE_CASE_IDS).toEqual([`${nikon}:default:analysis`, `${nikon}:stopped-close:analysis`]);
    expect(lines[0]).toBe("## Benchmark: base d49857ae (d49857ae) against head abcdef1");
    const firstTable = lines.indexOf("### PC-Nikkor 19mm analysis");
    expect(firstTable).toBeGreaterThan(0);
    expect(lines[firstTable + 4]).toMatch(
      /^\| nikon-pc-nikkor-19mm-f4e-ed default analysis \| 100\.40 \| 104\.25 \| 1\.038 \| 1\.0\d\d to 1\.0\d\d \|/,
    );
    expect(lines[firstTable + 5]).toBe(
      "| nikon-pc-nikkor-19mm-f4e-ed:stopped-close:analysis | not in this run | | | | |",
    );
    expect(lines.indexOf("### Categories")).toBeGreaterThan(firstTable);
    expect(summary).toContain(
      "| Category | Cells | Base median ms | Head median ms | Head/base | 95% interval | Flags |",
    );
    expect(summary).toMatch(/\| analysis \| 2 \| 100\.40 \| 104\.25 \| 1\.038 \|/);
    expect(summary).toContain("- Regressed: 0");
    /* Ten measured samples are enough for a verdict; fewer are said to be a smoke test. */
    expect(summary).not.toContain("Too few samples for a verdict");
    record.config.iterations = 3;
    expect(buildPairedSummary(record)).toContain("- Too few samples for a verdict: a regression needs at least 9");
  });

  it("says when the base was bundled with its own installed dependencies, in a timed and in a memory summary", () => {
    const line =
      "- Dependencies: the base's package-lock.json differs from the working tree's, so the base used its own, " +
      "installed in its worktree by npm ci. The two sides differ by their packages as well as by their source";
    const record = makePairedRecord(HEAD_MS);
    finishBenchmarkRecord(record, { head: untimedPass(), base: untimedPass() });
    expect(buildPairedSummary(record)).not.toContain("- Dependencies:");

    record.base!.ownDependencies = true;
    const lines = buildPairedSummary(record).split("\n");
    expect(lines[3]).toBe(line);
    /* The flag is the base side's, and is written with it. */
    expect(JSON.parse(serializeBenchmarkRecord(record)).base.ownDependencies).toBe(true);

    record.memory = compareMemorySessions(memorySession(100, 110), memorySession(100, 108));
    expect(buildPairedSummary(record).split("\n")[3]).toBe(line);
  });

  it("names a record by its timestamp, both commits and its kind", () => {
    const record = makePairedRecord(HEAD_MS);
    expect(formatPairedRunFileName(record)).toBe("2026-10-12T08-00-00Z-base-d49857ae-head-abcdef1.json");

    record.config.caseSet = "heavy";
    expect(formatPairedRunFileName(record)).toBe("2026-10-12T08-00-00Z-base-d49857ae-head-abcdef1-heavy.json");

    delete record.base;
    record.memory = compareMemorySessions(memorySession(100, 110));
    expect(formatPairedRunFileName(record)).toBe("2026-10-12T08-00-00Z-head-abcdef1-heavy-memory.json");
  });

  it("serializes one entry per line and reads back unchanged", () => {
    const record = makePairedRecord(HEAD_MS);
    finishBenchmarkRecord(record, { head: untimedPass(), base: untimedPass() });
    const text = serializeBenchmarkRecord(record);

    expect(JSON.parse(text)).toEqual(JSON.parse(JSON.stringify(record)));
    expect(text.endsWith("}\n")).toBe(true);
    expect(text.split("\n").filter((line) => line.includes('"lens-a:default:analysis": {"pairs":10,'))).toHaveLength(1);
    expect(text).toContain('"samplesMs":[100.2,101.7,');
  });

  it("is left out of the trend report's shape: an unpaired record reads as before", () => {
    const paired = makePairedRecord(HEAD_MS);
    const report = buildBenchmarkReport([makeRecord("2026-10-11T08:00:00.000Z", 10, 20), paired]);

    expect(report).toContain("## Main Pipeline Trends");
    expect(report).not.toContain("d49857ae");
  });
});

/** A reading whose retained heap is the given total, a tenth of it in array buffers. */
function heapReading(totalBytes: number): HeapReading {
  return { heapUsedBytes: totalBytes * 0.9, arrayBuffersBytes: totalBytes * 0.1, totalBytes };
}

function memorySession(heapBeforeBytes: number, heapAtEndBytes: number): MemorySessionReport {
  return {
    lensKeys: ["lens-a"],
    cycles: 2,
    statesPerCycle: 5,
    heapBefore: heapReading(heapBeforeBytes),
    heapAfterCycle: [heapReading(heapAtEndBytes - 1), heapReading(heapAtEndBytes)],
    heapAtEnd: heapReading(heapAtEndBytes),
    retainedGrowthBytes: heapAtEndBytes - heapBeforeBytes,
  };
}

describe("memory sessions", () => {
  it("compares the absolute retained heap of the two sides against the limit", () => {
    const megabyte = 1024 * 1024;
    const base = memorySession(80 * megabyte, 100 * megabyte);

    expect(compareMemorySessions(memorySession(80 * megabyte, 105 * megabyte), base)).toMatchObject({
      retainedHeapRatio: 1.05,
      withinLimit: true,
    });
    expect(compareMemorySessions(memorySession(80 * megabyte, 106 * megabyte), base)).toMatchObject({
      retainedHeapRatio: 1.06,
      withinLimit: false,
    });
    expect(compareMemorySessions(base)).toEqual({ head: base });
  });

  it("counts array buffers with the heap, so a cache of typed arrays moves the ratio", () => {
    const megabyte = 1024 * 1024;
    const base = memorySession(80 * megabyte, 100 * megabyte);
    /* The same JavaScript heap as the base, and twelve megabytes more of typed-array data. */
    const leaking = memorySession(80 * megabyte, 100 * megabyte);
    leaking.heapAtEnd = {
      heapUsedBytes: base.heapAtEnd.heapUsedBytes,
      arrayBuffersBytes: base.heapAtEnd.arrayBuffersBytes + 12 * megabyte,
      totalBytes: 112 * megabyte,
    };

    expect(compareMemorySessions(leaking, base)).toMatchObject({ retainedHeapRatio: 1.12, withinLimit: false });
  });

  it("prints both figures per side and the comparison the gate reads", () => {
    const megabyte = 1024 * 1024;
    const record = makePairedRecord(HEAD_MS);
    record.memory = compareMemorySessions(
      memorySession(80 * megabyte, 104 * megabyte),
      memorySession(80 * megabyte, 100 * megabyte),
    );
    const summary = buildPairedSummary(record);

    expect(summary).toContain("### Retained heap after forced collections, MB");
    expect(summary).toContain("| Side | Before | Cycle 1 | Cycle 2 | End | Growth | End: heap | End: array buffers |");
    expect(summary).toContain("| base d49857ae | 80.00 | 100.00 | 100.00 | 100.00 | 20.00 | 90.00 | 10.00 |");
    expect(summary).toContain("| head abcdef1 | 80.00 | 104.00 | 104.00 | 104.00 | 24.00 | 93.60 | 10.40 |");
    expect(summary).toContain("Retained heap at the end, head / base: 1.0400 (within the limit of 1.05).");
  });
});
