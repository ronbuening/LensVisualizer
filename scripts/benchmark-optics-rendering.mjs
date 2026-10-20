/**
 * Build and run the optics/rendering benchmark in an isolated measurement process.
 * Full matrix records feed runs/ and the trend report; heavy and memory records go to sessions/.
 * Usage: node scripts/benchmark-optics-rendering.mjs [--iterations=N] [--warmups=N]
 *   [--heavy] [--memory] [--dry-run] [--report-only]
 */

import { execFileSync, spawn } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import os from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { build } from "vite";

const ROOT = join(import.meta.dirname, "..");
const BENCHMARK_DIR = join(ROOT, "agent_docs", "benchmarks");
const RUNS_DIR = join(BENCHMARK_DIR, "runs");
const SESSIONS_DIR = join(BENCHMARK_DIR, "sessions");
const REPORT_PATH = join(BENCHMARK_DIR, "benchmark-report.md");
export const BENCHMARK_RUN_RETENTION_TRIGGER = 15;

/* Prefix for child-process failures. */
const LABEL = "benchmark";
const HARNESS_DIR = join("src", "benchmarks");
const ENTRY = join(HARNESS_DIR, "opticsRenderingBenchmark.tsx");
const CHILD_SCRIPT = join(import.meta.dirname, "benchmark-child.mjs");

/**
 * Parse the command line.
 *
 * @param {readonly string[]} argv - arguments after the script name
 * @returns {{ dryRun: boolean, reportOnly: boolean, iterations: number | undefined, warmups: number | undefined,
 *   heavy: boolean, memory: boolean }} the options
 * @throws when an argument is unknown, a value is missing or invalid, or two options cannot be combined
 */
export function parseArgs(argv) {
  const options = {
    dryRun: false,
    reportOnly: false,
    iterations: undefined,
    warmups: undefined,
    heavy: false,
    memory: false,
  };
  for (let index = 0; index < argv.length; index++) {
    const arg = argv[index];
    if (arg === "--dry-run") {
      options.dryRun = true;
      continue;
    }
    if (arg === "--report-only") {
      options.reportOnly = true;
      continue;
    }
    if (arg === "--heavy") {
      options.heavy = true;
      continue;
    }
    if (arg === "--memory") {
      options.memory = true;
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

  const session = options.heavy || options.memory;
  if (options.dryRun && options.reportOnly) {
    throw new Error("--dry-run and --report-only cannot be used together.");
  }
  if (options.reportOnly && session) {
    throw new Error("--report-only rebuilds the trend report from runs/ and takes no --heavy or --memory.");
  }
  if (options.memory && (options.dryRun || options.iterations !== undefined || options.warmups !== undefined)) {
    throw new Error("--memory runs the memory session alone and takes no --dry-run, --iterations or --warmups.");
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
  // Session artifacts do not make subsequent measurement metadata dirty.
  const status = gitValue(["status", "--porcelain", "--", ".", ":(exclude)agent_docs/benchmarks/sessions"]);
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

/**
 * The environment of a record under `sessions/`: the machine in enough detail to tell two machines apart. The host's
 * name stays out of a file that is committed. The heap mode is the measuring child's, whatever this process was
 * started with: a timed pass runs without `--expose-gc`, and a memory session with it.
 *
 * @param {boolean} memory - whether the record is a memory session's
 */
function sessionEnvironmentInfo(memory) {
  return {
    ...environmentInfo(),
    heapMode: memory ? "gc" : "raw",
    totalMemoryBytes: os.totalmem(),
    osRelease: os.release(),
  };
}

function runFileNames(runsDir) {
  if (!existsSync(runsDir)) return [];
  return readdirSync(runsDir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".json"))
    .map((entry) => entry.name)
    .sort();
}

export function pruneOldBenchmarkRunFiles(runsDir, trigger = BENCHMARK_RUN_RETENTION_TRIGGER) {
  const names = runFileNames(runsDir);
  const retainedCount = trigger - 1;
  if (names.length < trigger || retainedCount < 0) return [];

  const removeCount = names.length - retainedCount;
  const removedPaths = [];
  for (const name of names.slice(0, removeCount)) {
    const path = join(runsDir, name);
    rmSync(path, { force: true });
    removedPaths.push(path);
  }
  return removedPaths;
}

function readRunRecords() {
  if (!existsSync(RUNS_DIR)) return [];
  return runFileNames(RUNS_DIR).map((name) => {
    const path = join(RUNS_DIR, name);
    return JSON.parse(readFileSync(path, "utf8"));
  });
}

/* ── Bundles ── */

/**
 * Bundle a tree's benchmark entry.
 *
 * @param {string} outDir - an empty directory for the bundle
 * @returns {Promise<string>} the URL to import the bundle from
 */
async function buildBundle(outDir) {
  await build({
    configFile: join(ROOT, "vite.config.js"),
    root: ROOT,
    build: {
      ssr: join(ROOT, ENTRY),
      outDir,
      emptyOutDir: true,
      copyPublicDir: false,
      rollupOptions: {
        output: { format: "es" },
      },
    },
    ssr: {
      noExternal: true,
    },
    logLevel: "warn",
  });
  return pathToFileURL(join(outDir, "opticsRenderingBenchmark.js")).href;
}

/* ── Child passes ── */

/**
 * Run one pass in a child process and return what it wrote.
 *
 * @param {"plain" | "timed" | "untimed" | "memory"} pass - what `benchmark-child.mjs` is to run
 * @param {object} request - the bundle to import, and the pass's options
 * @param {string} resultPath - a file for the child's result
 * @param {{ current: import("node:child_process").ChildProcess | null }} running - holds the child while it runs,
 *   so a run that is told to stop can stop it
 * @returns {Promise<object>} the pass's result
 * @throws when the child exits with a failure
 */
async function runChildPass(pass, request, resultPath, running) {
  /* A memory session collects on demand. A plain run's pass takes the flags this process was started with, as it
   * did while it ran here: under `--expose-gc` it collects between samples, and `environmentInfo` reads the
   * record's heap mode from this process. */
  const nodeFlags = pass === "memory" ? ["--expose-gc"] : pass === "plain" ? process.execArgv : [];
  const child = spawn(process.execPath, [...nodeFlags, CHILD_SCRIPT, pass, JSON.stringify(request), resultPath], {
    cwd: ROOT,
    /* React picks its production build by this. A build sets it in the process it runs in, and a child builds
     * nothing. Anything the child prints goes to stderr: stdout is the summary's. */
    env: { ...process.env, NODE_ENV: "production" },
    stdio: ["ignore", process.stderr, "inherit"],
  });
  running.current = child;
  try {
    const [code, signal] = await new Promise((resolve, reject) => {
      child.once("error", reject);
      child.once("exit", (...exit) => resolve(exit));
    });
    if (code !== 0) {
      throw new Error(`${LABEL}: the ${pass} pass ${signal ? `was ended by ${signal}` : `exited with ${code}`}.`);
    }
  } finally {
    running.current = null;
  }
  return JSON.parse(readFileSync(resultPath, "utf8"));
}

/* ── Runs ── */

/**
 * The whole matrix on the working tree: one record under `runs/`, and the trend report rebuilt from them.
 *
 * @param {ReturnType<typeof parseArgs>} args - the parsed command line
 * @param {string} createdAt - the run's timestamp
 * @param {string} tempDir - a directory for the bundle and the timed pass's result
 * @param {{ current: import("node:child_process").ChildProcess | null }} running - the child pass under way
 */
async function runPlain(args, createdAt, tempDir, running) {
  const bundleUrl = await buildBundle(join(tempDir, "bundle"));
  /* This process measures nothing, so it may load the bundle: to validate a dry run, and for the functions that
   * name a record and build the report. */
  const benchmarkModule = await import(bundleUrl);
  if (args.reportOnly) {
    const removedRunPaths = pruneOldBenchmarkRunFiles(RUNS_DIR);
    const records = readRunRecords();
    const report = benchmarkModule.buildBenchmarkReport(records, 10);
    mkdirSync(BENCHMARK_DIR, { recursive: true });
    writeFileSync(REPORT_PATH, report, "utf8");
    for (const removedPath of removedRunPaths) {
      console.log(`Removed stale benchmark ${removedPath}`);
    }
    console.log(`Updated ${REPORT_PATH}`);
    return;
  }

  const options = {
    createdAt,
    git: gitInfo(),
    environment: environmentInfo(),
    iterations: args.iterations,
    warmups: args.warmups,
  };
  if (args.dryRun) {
    const dryRun = await benchmarkModule.runOpticsRenderingBenchmark({ ...options, dryRun: true });
    console.log(`Benchmark dry run succeeded for ${dryRun.config.lensKeys.length} lenses.`);
    return;
  }

  const record = await runChildPass("plain", { bundleUrl, options }, join(tempDir, "plain.json"), running);

  mkdirSync(RUNS_DIR, { recursive: true });
  const runFileName = benchmarkModule.formatRunFileName(record.createdAt, record.git.shortCommit);
  const runPath = join(RUNS_DIR, runFileName);
  writeFileSync(runPath, `${JSON.stringify(record, null, 2)}\n`, "utf8");

  const removedRunPaths = pruneOldBenchmarkRunFiles(RUNS_DIR);
  const records = readRunRecords();
  const report = benchmarkModule.buildBenchmarkReport(records, 10);
  writeFileSync(REPORT_PATH, report, "utf8");

  console.log(`Wrote ${runPath}`);
  for (const removedPath of removedRunPaths) {
    console.log(`Removed stale benchmark ${removedPath}`);
  }
  console.log(`Updated ${REPORT_PATH}`);
}

/** Run one subset or memory session without adding it to the full-matrix trend. */
async function runSession(args, createdAt, tempDir, running) {
  const bundleUrl = await buildBundle(join(tempDir, "bundle"));
  const benchmark = await import(bundleUrl);
  const metadata = { createdAt, git: gitInfo(), environment: sessionEnvironmentInfo(args.memory) };
  const cells = args.heavy ? benchmark.HEAVY_BENCHMARK_CELLS : undefined;
  if (args.dryRun) {
    const record = await benchmark.runOpticsRenderingBenchmark({ ...metadata, cells, dryRun: true });
    console.log(`Benchmark dry run succeeded for ${record.config.lensKeys.length} lenses.`);
    return;
  }
  const pass = (name, options = {}) =>
    runChildPass(name, { bundleUrl, heavy: args.heavy, options }, join(tempDir, `${name}.json`), running);
  let record;
  if (args.memory) {
    record = benchmark.createMemoryBenchmarkRecord({ ...metadata, cells }, await pass("memory"));
  } else {
    record = await pass("timed", { ...metadata, iterations: args.iterations, warmups: args.warmups });
    benchmark.finishBenchmarkRecord(record, await pass("untimed"));
  }
  mkdirSync(SESSIONS_DIR, { recursive: true });
  const runPath = join(SESSIONS_DIR, benchmark.formatSessionRunFileName(record));
  writeFileSync(runPath, benchmark.serializeBenchmarkRecord(record), "utf8");
  console.log(benchmark.buildSessionSummary(record));
  console.log(`Wrote ${runPath}`);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const createdAt = new Date().toISOString();
  const tempDir = mkdtempSync(join(os.tmpdir(), "lens-benchmark-"));
  const running = { current: null };
  const cleanUp = () => {
    running.current?.kill();
    rmSync(tempDir, { recursive: true, force: true });
  };
  /* Signals stop the measured child and release temporary bundles. */
  const stop = (signal) => {
    console.error(`Optics benchmark: ${signal} received; stopping child and removing temporary bundles.`);
    cleanUp();
    process.exit(128 + os.constants.signals[signal]);
  };
  const onInterrupt = () => stop("SIGINT");
  const onTerminate = () => stop("SIGTERM");
  process.once("SIGINT", onInterrupt);
  process.once("SIGTERM", onTerminate);
  try {
    if (!args.heavy && !args.memory) await runPlain(args, createdAt, tempDir, running);
    else await runSession(args, createdAt, tempDir, running);
  } finally {
    process.removeListener("SIGINT", onInterrupt);
    process.removeListener("SIGTERM", onTerminate);
    cleanUp();
  }
}

if (process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url) {
  main().catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
  });
}
