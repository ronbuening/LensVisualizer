/**
 * On-demand optics/rendering benchmark runner.
 *
 * This script is intentionally not part of test, build, lint, or metadata generation.
 * It builds the TypeScript benchmark module through Vite SSR so catalog glob imports
 * and React/TSX components resolve the same way they do in the app, without opening
 * a dev-server port.
 *
 * A plain run times the whole matrix on the working tree and writes one record under
 * `agent_docs/benchmarks/runs/`, which the trend report is built from.
 *
 * `--base <ref>` is a paired run. It adds a detached git worktree at the base in the system temp directory, as
 * `scripts/engine-diff.mjs` does, copies the working tree's `src/benchmarks/` into it, and bundles the benchmark
 * entry once per side, so one entry drives both engines. The base is bundled with this checkout's node_modules
 * while its package-lock.json is the working tree's, and with its own, installed by `npm ci` in the worktree, when
 * the lockfile differs; the record and the summary then say so. A child process then loads both bundles and samples
 * every case on both, starting each case's warmups and measured pairs with the side loaded first, then
 * alternating from pair to pair. The timed pass is two such processes, which share the measured pairs: the first
 * loads and prepares the base's bundle before the head's, the second the head's before the base's, and their pairs
 * are pooled. Each side's bundle then runs every case once
 * more in a process of its own, untimed, for what each case completed. `--heavy` runs the heavy set of cells in
 * place of the whole matrix. `--memory` runs the scripted memory session and no timed pass: one child process per
 * side, started with `--expose-gc`.
 *
 * Every pass of every run, a plain run's timed pass included, is measured by `scripts/benchmark-child.mjs`, in a
 * process that has imported prebuilt bundles and built nothing; that file says why. A paired, heavy or memory run
 * writes its record under `agent_docs/benchmarks/paired/`, where nothing is pruned and the trend report does not
 * look, and prints a Markdown summary to stdout. Progress goes to stderr.
 *
 * Usage:
 *   node scripts/benchmark-optics-rendering.mjs [--iterations=N] [--warmups=N] [--base <ref>] [--heavy]
 *     [--memory] [--dry-run] [--report-only]
 */

import { execFileSync, spawn } from "node:child_process";
import { cpSync, existsSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import os from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { build } from "vite";
import {
  addBaseWorktree,
  cleanUpOnSignal,
  otherBaseWorktrees,
  prepareHistoricalSeam,
  provideBaseDependencies,
  resolveBaseCommit,
} from "./base-worktree.mjs";

const ROOT = join(import.meta.dirname, "..");
const BENCHMARK_DIR = join(ROOT, "agent_docs", "benchmarks");
const RUNS_DIR = join(BENCHMARK_DIR, "runs");
const PAIRED_DIR = join(BENCHMARK_DIR, "paired");
const REPORT_PATH = join(BENCHMARK_DIR, "benchmark-report.md");
export const BENCHMARK_RUN_RETENTION_TRIGGER = 15;

/* The name that prefixes this tool's messages, and the temp-directory prefix that marks its base worktrees. */
const LABEL = "benchmark";
const BASE_WORKTREE_PREFIX = "benchmark-base-";
/* The benchmark entry and the modules beside it, which a base worktree takes from the working tree. */
const HARNESS_DIR = join("src", "benchmarks");
const ENTRY = join(HARNESS_DIR, "opticsRenderingBenchmark.tsx");
const CHILD_SCRIPT = join(import.meta.dirname, "benchmark-child.mjs");

/**
 * Parse the command line.
 *
 * @param {readonly string[]} argv - arguments after the script name
 * @returns {{ dryRun: boolean, reportOnly: boolean, iterations: number | undefined, warmups: number | undefined,
 *   base: string | null, heavy: boolean, memory: boolean }} the options; `base` is the ref of a paired run, given
 *   as `--base <ref>` or `--base=<ref>`
 * @throws when an argument is unknown, a value is missing or invalid, or two options cannot be combined
 */
export function parseArgs(argv) {
  const options = {
    dryRun: false,
    reportOnly: false,
    iterations: undefined,
    warmups: undefined,
    base: null,
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
    if (arg === "--base" || arg.startsWith("--base=")) {
      const value = arg === "--base" ? argv[++index] : arg.slice("--base=".length);
      /* A flag where the ref should be means the ref was left out. */
      if (value === undefined || value === "" || value.startsWith("--")) throw new Error("--base needs a ref.");
      options.base = value;
      continue;
    }
    throw new Error(`Unknown benchmark argument: ${arg}`);
  }

  const paired = options.base !== null || options.heavy || options.memory;
  if (options.dryRun && options.reportOnly) {
    throw new Error("--dry-run and --report-only cannot be used together.");
  }
  if (options.reportOnly && paired) {
    throw new Error("--report-only rebuilds the trend report from runs/ and takes no --base, --heavy or --memory.");
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
  // A paired run leaves its record untracked under paired/, and the next run of a baseline would read that as a
  // dirty tree, so those records are left out of the check.
  const status = gitValue(["status", "--porcelain", "--", ".", ":(exclude)agent_docs/benchmarks/paired"]);
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
 * The environment of a record under `paired/`: the machine in enough detail to tell two machines apart. The host's
 * name stays out of a file that is committed. The heap mode is the measuring child's, whatever this process was
 * started with: a timed pass runs without `--expose-gc`, and a memory session with it.
 *
 * @param {boolean} memory - whether the record is a memory session's
 */
function pairedEnvironmentInfo(memory) {
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
 * Both sides of a paired run are built by this checkout's Vite under this checkout's config, so the two bundles
 * differ by their tree alone: its source, and its packages where the base has installed its own.
 *
 * @param {string} root - the tree to build: this checkout, or the base worktree
 * @param {string} outDir - an empty directory for the bundle
 * @returns {Promise<string>} the URL to import the bundle from
 */
async function buildBundle(root, outDir) {
  await build({
    configFile: join(ROOT, "vite.config.js"),
    root,
    build: {
      ssr: join(root, ENTRY),
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

/**
 * Put dependencies and the working tree's benchmark harness in a new base worktree.
 *
 * @param {string} worktree - the worktree `addBaseWorktree` made
 * @param {string} commit - the base commit
 * @returns {"linked" | "installed"} whose packages the base is bundled with: this checkout's, or its own
 */
function prepareBaseWorktree(worktree, commit) {
  /* The entry imports React and the component tree, so the base cannot be bundled without dependencies, and this
   * checkout's are the base's own only while the lockfile is the same. */
  const dependencies = provideBaseDependencies({ root: ROOT, worktree, commit, label: LABEL });
  /* Both engines run the working tree's entry: the base's own may be older, and would measure something else. */
  rmSync(join(worktree, HARNESS_DIR), { recursive: true, force: true });
  cpSync(join(ROOT, HARNESS_DIR), join(worktree, HARNESS_DIR), { recursive: true });
  prepareHistoricalSeam(worktree);
  return dependencies;
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
  const bundleUrl = await buildBundle(ROOT, join(tempDir, "head"));
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

/**
 * A paired, heavy or memory run: one record under `paired/` and a summary on stdout.
 *
 * @param {ReturnType<typeof parseArgs>} args - the parsed command line
 * @param {string} createdAt - the run's timestamp
 * @param {string} tempDir - a directory for the bundles and the passes' results
 * @param {{ worktree: string } | null} baseTree - the base worktree of a paired run
 * @param {{ ref: string, commit: string, shortCommit: string, ownDependencies?: true } | null} base - the base it
 *   was made from, and whether it is bundled with packages installed in its own worktree
 * @param {{ current: import("node:child_process").ChildProcess | null }} running - the child pass under way
 */
async function runPaired(args, createdAt, tempDir, baseTree, base, running) {
  /* One bundle per side serves every pass. Both are built before anything is measured, so a tree that cannot be
   * bundled stops the run at once. */
  const headUrl = await buildBundle(ROOT, join(tempDir, "head"));
  const baseUrl = baseTree ? await buildBundle(baseTree.worktree, join(tempDir, "base")) : null;
  const metadata = { createdAt, git: gitInfo(), environment: pairedEnvironmentInfo(args.memory) };
  const { heavy } = args;
  const pass = (name, request) => runChildPass(name, { heavy, ...request }, join(tempDir, `${name}.json`), running);
  /* This process measures nothing, so it may load the head bundle: for the plan of the timed pass, and for the
   * functions that complete and print a record. */
  const head = await import(headUrl);

  if (args.dryRun) {
    /* Each side validates the lenses and cells against its own catalog. */
    const options = { ...metadata, cells: heavy ? head.HEAVY_BENCHMARK_CELLS : undefined, dryRun: true };
    if (baseUrl) await (await import(baseUrl)).runOpticsRenderingBenchmark(options);
    const dryRun = await head.runOpticsRenderingBenchmark(options);
    console.log(
      `Benchmark dry run succeeded for ${dryRun.config.lensKeys.length} lenses` +
        `${base ? ` on the working tree and on ${base.shortCommit}` : ""}` +
        `${base?.ownDependencies ? ", the base with its own dependencies, installed by npm ci" : ""}.`,
    );
    return;
  }

  let record;
  let passes = null;
  let sessions = null;
  if (args.memory) {
    /* The base first, as in a timed pair; the two sessions share nothing, so the order decides nothing. */
    sessions = {
      ...(baseUrl ? { base: await pass("memory", { bundleUrl: baseUrl, options: { label: "memory base" } }) } : {}),
      head: await pass("memory", { bundleUrl: headUrl, options: { label: "memory head" } }),
    };
  } else {
    /* A paired pass is timed in two processes, one with each side loaded and prepared first, each with every
     * warmup and its share of the measured pairs. A run without a base has one side and one process. */
    const processes = base ? head.planTimedProcesses(args.iterations) : [{ pairs: args.iterations }];
    const records = [];
    for (const [index, { firstSide, pairs }] of processes.entries()) {
      records.push(
        await pass("timed", {
          bundleUrl: headUrl,
          baseBundleUrl: baseUrl,
          firstSide,
          options: {
            ...metadata,
            iterations: pairs,
            warmups: args.warmups,
            ...(base ? { base, label: `timed ${index + 1}/${processes.length}, ${firstSide} first` } : {}),
          },
        }),
      );
    }
    record = head.poolTimedRecords(records);
    passes = {
      head: await pass("untimed", { bundleUrl: headUrl, options: { label: "untimed head" } }),
      ...(baseUrl ? { base: await pass("untimed", { bundleUrl: baseUrl, options: { label: "untimed base" } }) } : {}),
    };
  }

  if (sessions) {
    const cells = heavy ? head.HEAVY_BENCHMARK_CELLS : undefined;
    record = head.createMemoryBenchmarkRecord({ ...metadata, cells, ...(base ? { base } : {}) }, sessions);
  } else {
    head.finishBenchmarkRecord(record, passes);
  }

  mkdirSync(PAIRED_DIR, { recursive: true });
  const runPath = join(PAIRED_DIR, head.formatPairedRunFileName(record));
  writeFileSync(runPath, head.serializeBenchmarkRecord(record), "utf8");
  console.log(head.buildPairedSummary(record));
  console.log(`Wrote ${runPath}`);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const createdAt = new Date().toISOString();
  const tempDir = mkdtempSync(join(os.tmpdir(), "lens-benchmark-"));
  let baseTree = null;
  const running = { current: null };
  const cleanUp = () => {
    running.current?.kill();
    baseTree?.remove();
    rmSync(tempDir, { recursive: true, force: true });
  };
  /* A run that is told to stop must still stop the pass under way and remove its base worktree, which is
   * registered in the repository. */
  const forgetSignals = cleanUpOnSignal(LABEL, cleanUp);
  try {
    if (args.base === null && !args.heavy && !args.memory) {
      await runPlain(args, createdAt, tempDir, running);
      return;
    }
    let base = null;
    if (args.base !== null) {
      const commit = resolveBaseCommit(ROOT, args.base, LABEL);
      for (const path of otherBaseWorktrees(ROOT, BASE_WORKTREE_PREFIX)) {
        console.error(
          `${LABEL}: warning: the base worktree of another run is registered at ${path}. If no run is using it, ` +
            `remove it with: git worktree remove --force ${path}`,
        );
      }
      let dependencies;
      baseTree = addBaseWorktree({
        root: ROOT,
        commit,
        label: LABEL,
        prefix: BASE_WORKTREE_PREFIX,
        prepare: (worktree) => {
          dependencies = prepareBaseWorktree(worktree, commit);
        },
      });
      base = {
        ref: args.base,
        commit,
        shortCommit: gitValue(["rev-parse", "--short", commit]) ?? commit.slice(0, 8),
        /* Its packages are then no part of what the two sides share, and the record has to say so. */
        ...(dependencies === "installed" ? { ownDependencies: true } : {}),
      };
      console.error(
        `${LABEL}: base ${base.shortCommit} (${args.base}) in ${baseTree.worktree}` +
          `${base.ownDependencies ? ", with its own dependencies" : ""}`,
      );
    }
    await runPaired(args, createdAt, tempDir, baseTree, base, running);
  } finally {
    forgetSignals();
    cleanUp();
  }
}

if (process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url) {
  main().catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
  });
}
