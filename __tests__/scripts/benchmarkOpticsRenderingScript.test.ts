import { mkdtempSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { basename, join } from "node:path";
import { describe, expect, it } from "vitest";
import {
  BENCHMARK_RUN_RETENTION_TRIGGER,
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
