import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { basename, join } from "node:path";
import { describe, expect, it } from "vitest";
import {
  BENCHMARK_RUN_RETENTION_TRIGGER,
  parseArgs,
  pruneOldBenchmarkRunFiles,
} from "../../scripts/benchmark-optics-rendering.mjs";

function withTempRunsDir<T>(callback: (runsDir: string) => T): T {
  const root = mkdtempSync(join(tmpdir(), "benchmark-retention-"));
  try {
    return callback(root);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
}

function writeRunFile(runsDir: string, index: number): string {
  const name = `2026-05-27T12-${String(index).padStart(2, "0")}-00Z-test.json`;
  writeFileSync(join(runsDir, name), "{}\n", "utf8");
  return name;
}

describe("benchmark optics rendering script retention", () => {
  it("leaves fewer-than-threshold run files untouched", () => {
    withTempRunsDir((runsDir) => {
      const names = Array.from({ length: BENCHMARK_RUN_RETENTION_TRIGGER - 1 }, (_, index) =>
        writeRunFile(runsDir, index),
      );

      expect(pruneOldBenchmarkRunFiles(runsDir)).toEqual([]);
      expect(readdirSync(runsDir).sort()).toEqual(names.sort());
    });
  });

  it("removes oldest JSON run files once the threshold is reached", () => {
    withTempRunsDir((runsDir) => {
      const names = Array.from({ length: BENCHMARK_RUN_RETENTION_TRIGGER + 2 }, (_, index) =>
        writeRunFile(runsDir, index),
      );
      writeFileSync(join(runsDir, "README.md"), "ignore me\n", "utf8");

      const removed = pruneOldBenchmarkRunFiles(runsDir);
      const remaining = readdirSync(runsDir).sort();

      expect(removed.map((path) => basename(path))).toEqual(names.slice(0, 3));
      expect(remaining).toEqual([...names.slice(3), "README.md"].sort());
    });
  });
});

describe("benchmark optics rendering command line", () => {
  const plain = {
    dryRun: false,
    reportOnly: false,
    iterations: undefined,
    warmups: undefined,
    heavy: false,
    memory: false,
  };

  it("runs the whole matrix on the working tree when given nothing", () => {
    expect(parseArgs([])).toEqual(plain);
    expect(parseArgs(["--iterations=5", "--warmups=2"])).toEqual({ ...plain, iterations: 5, warmups: 2 });
    expect(parseArgs(["--dry-run"])).toEqual({ ...plain, dryRun: true });
    expect(parseArgs(["--report-only"])).toEqual({ ...plain, reportOnly: true });
  });

  it("refuses what it cannot run, and says why", () => {
    expect(() => parseArgs(["--base", "HEAD"])).toThrow("Unknown benchmark argument: --base");
    expect(() => parseArgs(["d49857ae"])).toThrow("Unknown benchmark argument: d49857ae");
    expect(() => parseArgs(["--verbose"])).toThrow("Unknown benchmark argument: --verbose");
    expect(() => parseArgs(["--iterations=0"])).toThrow("--iterations must be an integer >= 1.");
    expect(() => parseArgs(["--warmups=-1"])).toThrow("--warmups must be an integer >= 0.");
    expect(() => parseArgs(["--dry-run", "--report-only"])).toThrow("cannot be used together");
    expect(() => parseArgs(["--report-only", "--heavy"])).toThrow("--report-only rebuilds the trend report");
    expect(() => parseArgs(["--memory", "--iterations=3"])).toThrow("--memory runs the memory session alone");
    expect(() => parseArgs(["--memory", "--dry-run"])).toThrow("--memory runs the memory session alone");
  });
});

describe("benchmark child pass", () => {
  /* A stand-in for a built bundle: its entry function reports one cell and returns the options it was given, the
   * progress hook as its type. */
  const BUNDLE = `export async function runOpticsRenderingBenchmark(options) {
  await options.onCell?.({ lensKey: "lens", scenarioId: "default", index: 0, count: 1 });
  return { ...options, onCell: typeof options.onCell };
}
`;
  const options = { createdAt: "2026-01-01T00:00:00.000Z", iterations: 2, label: "a progress label" };

  /**
   * Run `scripts/benchmark-child.mjs` on the stand-in bundle.
   *
   * @param pass - the pass to run
   * @returns what the pass wrote to its result file
   */
  function childResult(pass: string): unknown {
    const dir = mkdtempSync(join(tmpdir(), "benchmark-child-"));
    try {
      const bundlePath = join(dir, "bundle.mjs");
      const resultPath = join(dir, "result.json");
      writeFileSync(bundlePath, BUNDLE, "utf8");
      execFileSync(
        "node",
        [
          "scripts/benchmark-child.mjs",
          pass,
          JSON.stringify({ bundleUrl: `file://${bundlePath}`, options }),
          resultPath,
        ],
        { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] },
      );
      return JSON.parse(readFileSync(resultPath, "utf8"));
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  }

  it("times a plain run on one bundle and keeps no samples, as a record under runs/ has none", () => {
    expect(childResult("plain")).toEqual({ createdAt: options.createdAt, iterations: 2, onCell: "function" });
  });

  it("keeps the samples of a heavy run's timed pass", () => {
    expect(childResult("timed")).toEqual({
      createdAt: options.createdAt,
      iterations: 2,
      keepSamples: true,
      onCell: "function",
    });
  });

  it("refuses a pass it does not know", () => {
    expect(() => childResult("profile")).toThrow("Unknown benchmark pass: profile");
  });
});
