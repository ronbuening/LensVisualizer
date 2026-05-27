import { describe, expect, it } from "vitest";
import {
  BENCHMARK_SCHEMA_VERSION,
  buildBenchmarkReport,
  formatPercent,
  formatRunFileName,
  latestRunRecords,
  percentChange,
  summarizeRun,
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
          svgRender: okEntry(5),
          total: okEntry(6),
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
    expect(report).toContain("## Aberration Panel Trends");
    expect(report).toContain("data.sphericalAberration");
    expect(report).toContain("Aberration panel skips: 1");
  });
});
