/**
 * On-demand optics/rendering benchmark runner.
 *
 * This script is intentionally not part of test, build, lint, or metadata generation.
 * It builds the TypeScript benchmark module through Vite SSR so catalog glob imports
 * and React/TSX components resolve the same way they do in the app, without opening
 * a dev-server port.
 */

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import os from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { build } from "vite";

const ROOT = join(import.meta.dirname, "..");
const BENCHMARK_DIR = join(ROOT, "agent_docs", "benchmarks");
const RUNS_DIR = join(BENCHMARK_DIR, "runs");
const REPORT_PATH = join(BENCHMARK_DIR, "benchmark-report.md");

function parseArgs(argv) {
  const options = {
    dryRun: false,
    reportOnly: false,
    iterations: undefined,
    warmups: undefined,
  };
  for (const arg of argv) {
    if (arg === "--dry-run") {
      options.dryRun = true;
      continue;
    }
    if (arg === "--report-only") {
      options.reportOnly = true;
      continue;
    }
    if (arg.startsWith("--iterations=")) {
      options.iterations = parseIntegerAtLeast(arg.slice("--iterations=".length), "--iterations", 1);
      continue;
    }
    if (arg.startsWith("--warmups=")) {
      options.warmups = parseIntegerAtLeast(arg.slice("--warmups=".length), "--warmups", 0);
      continue;
    }
    throw new Error(`Unknown benchmark argument: ${arg}`);
  }
  return options;
}

function parseIntegerAtLeast(value, label, min) {
  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed < min) {
    throw new Error(`${label} must be an integer >= ${min}.`);
  }
  return parsed;
}

function gitValue(args) {
  try {
    return execFileSync("git", args, { cwd: ROOT, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
  } catch {
    return null;
  }
}

function gitInfo() {
  const status = gitValue(["status", "--porcelain"]);
  const commit = gitValue(["rev-parse", "HEAD"]);
  return {
    branch: gitValue(["rev-parse", "--abbrev-ref", "HEAD"]),
    commit,
    shortCommit: gitValue(["rev-parse", "--short", "HEAD"]),
    dirty: status === null ? null : status.length > 0,
  };
}

function environmentInfo() {
  const cpus = os.cpus();
  return {
    node: process.version,
    v8: process.versions.v8,
    platform: process.platform,
    arch: process.arch,
    cpuModel: cpus[0]?.model ?? null,
    cpuCount: cpus.length || null,
    heapMode: typeof globalThis.gc === "function" ? "gc" : "raw",
  };
}

function readRunRecords() {
  if (!existsSync(RUNS_DIR)) return [];
  return readdirSync(RUNS_DIR)
    .filter((name) => name.endsWith(".json"))
    .map((name) => {
      const path = join(RUNS_DIR, name);
      return JSON.parse(readFileSync(path, "utf8"));
    });
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.dryRun && args.reportOnly) {
    throw new Error("--dry-run and --report-only cannot be used together.");
  }
  const createdAt = new Date().toISOString();
  const outDir = mkdtempSync(join(os.tmpdir(), "lens-benchmark-"));

  try {
    await build({
      configFile: join(ROOT, "vite.config.js"),
      build: {
        ssr: join(ROOT, "src", "benchmarks", "opticsRenderingBenchmark.tsx"),
        outDir,
        emptyOutDir: true,
        rollupOptions: {
          output: { format: "es" },
        },
      },
      ssr: {
        noExternal: true,
      },
      logLevel: "warn",
    });

    const benchmarkModule = await import(pathToFileURL(join(outDir, "opticsRenderingBenchmark.js")).href);
    if (args.reportOnly) {
      const records = readRunRecords();
      const report = benchmarkModule.buildBenchmarkReport(records, 10);
      mkdirSync(BENCHMARK_DIR, { recursive: true });
      writeFileSync(REPORT_PATH, report, "utf8");
      console.log(`Updated ${REPORT_PATH}`);
      return;
    }

    const record = await benchmarkModule.runOpticsRenderingBenchmark({
      createdAt,
      git: gitInfo(),
      environment: environmentInfo(),
      dryRun: args.dryRun,
      iterations: args.iterations,
      warmups: args.warmups,
    });

    if (args.dryRun) {
      console.log(`Benchmark dry run succeeded for ${record.config.lensKeys.length} lenses.`);
      return;
    }

    mkdirSync(RUNS_DIR, { recursive: true });
    const runFileName = benchmarkModule.formatRunFileName(record.createdAt, record.git.shortCommit);
    const runPath = join(RUNS_DIR, runFileName);
    writeFileSync(runPath, `${JSON.stringify(record, null, 2)}\n`, "utf8");

    const records = readRunRecords();
    const report = benchmarkModule.buildBenchmarkReport(records, 10);
    writeFileSync(REPORT_PATH, report, "utf8");

    console.log(`Wrote ${runPath}`);
    console.log(`Updated ${REPORT_PATH}`);
  } finally {
    rmSync(outDir, { recursive: true, force: true });
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
