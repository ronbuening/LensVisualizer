import { describe, expect, it } from "vitest";
import {
  BENCHMARK_SCHEMA_VERSION,
  buildBenchmarkReport,
  formatPercent,
  formatRunFileName,
  latestRunRecords,
  percentChange,
  summarizeRun,
  digestCompletedWork,
  tallyMarkupElements,
  type BenchmarkEntry,
  type BenchmarkRunRecord,
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

describe("completed work", () => {
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
});
