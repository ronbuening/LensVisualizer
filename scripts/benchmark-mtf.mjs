/**
 * Reproducible MTF computation benchmark; stdout is the JSON artifact, no source files are rewritten.
 *
 * Every case and grid cap is computed `--warmups` times unrecorded and then `--iterations` times, and each row
 * reports every recorded sample in run order with their median.
 *
 * `--base <ref>` is a paired run. It adds a detached git worktree at the base in the system temp directory, as
 * `scripts/engine-diff.mjs` does, and loads the engine twice into this process: from the working tree and from
 * the worktree. Both engines build the working tree's prescriptions. Each row is then sampled on both, the side
 * that goes first alternating from pair to pair, and carries the base's samples, the ratio of the medians with
 * its bootstrap interval, and whether the two sides completed the same work. The statistics are the rendering
 * benchmark's, from `src/benchmarks/benchmarkReport.ts`. A paired run also prints a Markdown table to stderr. With
 * fewer samples per row than a regression verdict needs, no row is marked regressed, and the table and the JSON
 * say so.
 *
 * Usage:
 *   node --import ./scripts/ts-js-specifier-hook-register.mjs scripts/benchmark-mtf.mjs [--method=geometric|diffraction]
 *     [--spectrum=reference|cdf|photopic] [--fields=N] [--sweep] [--stopped-down] [--finite] [--iterations=N]
 *     [--warmups=N] [--base <ref>]
 */
import { execFileSync } from "node:child_process";
import os from "node:os";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import {
  BOOTSTRAP_RESAMPLES,
  BOOTSTRAP_SEED,
  REGRESSION_MEDIAN_GROWTH_MS,
  REGRESSION_RATIO_LOWER_BOUND,
  comparePairedSamples,
  pairedSampleOrder,
  summarizeNumbers,
  tooFewSamplesNotice,
} from "../src/benchmarks/benchmarkReport.ts";
import { MTF_BENCHMARK_CASES, MTF_BENCHMARK_GRIDS, MTF_FINITE_BENCHMARK_CASE } from "../src/benchmarks/mtfCases.ts";
import { addBaseWorktree, cleanUpOnSignal, otherBaseWorktrees, resolveBaseCommit } from "./base-worktree.mjs";

const ROOT = join(import.meta.dirname, "..");
/* The name that prefixes this tool's messages, and the temp-directory prefix that marks its base worktrees. */
const LABEL = "benchmark-mtf";
const BASE_WORKTREE_PREFIX = "benchmark-mtf-base-";

const VALUE_FLAGS = ["method", "spectrum", "fields", "iterations", "warmups", "base"];
const SWITCHES = ["diffraction", "cdf", "stopped-down", "finite", "sweep"];

/**
 * Parse the command line.
 *
 * @param {readonly string[]} argv - arguments after the script name; a value follows its flag or an "="
 * @returns {Record<string, string | true>} each flag given, by name
 * @throws when an argument is unknown or a value is missing
 */
function parseArgs(argv) {
  const given = {};
  for (let index = 0; index < argv.length; index++) {
    const arg = argv[index];
    const equals = arg.indexOf("=");
    const name = arg.startsWith("--") ? arg.slice(2, equals < 0 ? undefined : equals) : "";
    if (SWITCHES.includes(name) && equals < 0) {
      given[name] = true;
      continue;
    }
    if (!VALUE_FLAGS.includes(name)) throw new Error(`Unknown MTF benchmark argument: ${arg}`);
    const value = equals < 0 ? argv[++index] : arg.slice(equals + 1);
    if (value === undefined || value === "" || value.startsWith("--")) throw new Error(`--${name} needs a value.`);
    given[name] = value;
  }
  return given;
}

function integerAtLeast(value, label, min) {
  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed < min) throw new Error(`${label} must be an integer >= ${min}.`);
  return parsed;
}

/**
 * Load the engine of one tree. The specifier hook resolves the engine's own `.js` imports under any root, so the
 * working tree's engine and a base worktree's are two separate sets of modules in one process.
 *
 * @param {string} root - the checkout, or the base worktree
 */
async function loadEngine(root) {
  const load = (path) => import(pathToFileURL(join(root, path)).href);
  const [{ default: buildLens }, { prepareRuntimeState }, { computeMtf }] = await Promise.all([
    load("src/optics/buildLens.ts"),
    load("src/optics/optics.ts").then((module) => (module.prepareRuntimeState ? module : load("src/optics/compat.ts"))),
    load("src/optics/mtf.ts"),
  ]);
  if (!existsSync(join(root, "src/optics/analysis/mtf"))) return { buildLens, prepareRuntimeState, computeMtf };
  const { createAnalysisRequest } = await load("src/optics/analysis.ts");
  return {
    buildLens,
    prepareRuntimeState,
    computeMtf: (state, options) =>
      computeMtf(
        createAnalysisRequest({
          preparedState: state,
          dynamicEFL: 0,
          currentEPSD: options.pupilSemiDiameterMm,
          currentPhysStopSD: options.stopSemiDiameterMm,
        }),
        options,
      ),
  };
}

/** What a row reports of one result: the support verdict and, per field, the status, grid and convergence. */
function describeResult(result) {
  return {
    support: result.support.reason ?? "candidate",
    ...(result.support.conjugate ? { conjugate: result.support.conjugate } : {}),
    geometry: result.geometry,
    fields: result.fields.map(({ fieldFraction, imageHeightMm, status, reason, gridSize, maxDelta }) => ({
      fieldFraction,
      imageHeightMm,
      status,
      reason,
      gridSize,
      maxDelta,
    })),
  };
}

/**
 * Compare what the two sides completed for one row. The support verdict and each field's status, reason and grid
 * size must agree. An image height and a convergence delta describe the result and may differ in their last bits.
 *
 * @returns {{ fact: string, base: unknown, head: unknown }[]} every differing fact with both values
 */
function compareCompletedWork(base, head) {
  if (base.error !== undefined || head.error !== undefined) {
    return base.error === head.error ? [] : [{ fact: "error", base: base.error ?? null, head: head.error ?? null }];
  }
  const differences = [];
  const compare = (fact, baseValue, headValue) => {
    if (baseValue !== headValue) differences.push({ fact, base: baseValue ?? null, head: headValue ?? null });
  };
  compare("support", base.support, head.support);
  compare("fields.length", base.fields.length, head.fields.length);
  for (let index = 0; index < Math.min(base.fields.length, head.fields.length); index++) {
    for (const fact of ["status", "reason", "gridSize"]) {
      compare(`fields[${index}].${fact}`, base.fields[index][fact], head.fields[index][fact]);
    }
  }
  return differences;
}

const args = parseArgs(process.argv.slice(2));
const method = args.method ?? (args.diffraction ? "diffraction" : "geometric");
const spectrum = args.spectrum ?? (args.cdf ? "cdf" : "reference");
const apertureScale = args["stopped-down"] ? 0.25 : 1;
const focusT = args.finite ? 1 : 0;
const fieldCount = Number(args.fields ?? (args.sweep ? 9 : 3));
const warmups = args.warmups === undefined ? 1 : integerAtLeast(args.warmups, "--warmups", 0);
const iterations = args.iterations === undefined ? 3 : integerAtLeast(args.iterations, "--iterations", 1);
if (!["geometric", "diffraction"].includes(method)) throw new Error(`Unknown --method=${method}`);
if (!["reference", "cdf", "photopic"].includes(spectrum)) throw new Error(`Unknown --spectrum=${spectrum}`);
if (!Number.isInteger(fieldCount) || fieldCount < 2 || fieldCount > 101) throw new Error("--fields must be 2-101");
// Fractions of the reference image height (the format corner when declared), evenly spaced.
const fieldFractions = Array.from({ length: fieldCount }, (_, i) => i / (fieldCount - 1));
/* Below the verdict's minimum an interval is too coarse to exclude noise: one sample gives an interval of no
 * width, which the rule would read as certainty. Such a run marks no row regressed and says why. */
const tooFewSamples = tooFewSamplesNotice(iterations);
const notice = tooFewSamples === null ? null : `${tooFewSamples} No row is marked regressed.`;

let baseTree = null;
const forgetSignals = cleanUpOnSignal(LABEL, () => baseTree?.remove());
/* A computation is one synchronous stretch, and a signal handler runs between turns of the event loop, so the run
 * yields a turn before each row. */
const nextTurn = () => new Promise((resolve) => setImmediate(resolve));

try {
  let base = null;
  if (args.base !== undefined) {
    const commit = resolveBaseCommit(ROOT, args.base, LABEL);
    for (const path of otherBaseWorktrees(ROOT, BASE_WORKTREE_PREFIX)) {
      console.error(
        `${LABEL}: warning: the base worktree of another run is registered at ${path}. If no run is using it, ` +
          `remove it with: git worktree remove --force ${path}`,
      );
    }
    /* The engine imports no package and the prescriptions come from the working tree, so the worktree is used as
     * git checked it out. */
    baseTree = addBaseWorktree({ root: ROOT, commit, label: LABEL, prefix: BASE_WORKTREE_PREFIX, prepare: () => {} });
    base = { ref: args.base, commit };
  }
  /* The base first, so `sides[0]` is the side that `pairedSampleOrder` calls first in pair 0. */
  const sides = [
    ...(baseTree ? [{ name: "base", engine: await loadEngine(baseTree.worktree) }] : []),
    { name: "head", engine: await loadEngine(ROOT) },
  ];

  const rows = [];
  for (const file of focusT ? [MTF_FINITE_BENCHMARK_CASE] : MTF_BENCHMARK_CASES) {
    const data = (await import(pathToFileURL(join(ROOT, "src", "lens-data", file)).href)).default;
    const prepared = sides.map(({ name, engine }) => {
      const L = engine.buildLens(data);
      return { name, engine, L, state: engine.prepareRuntimeState(L, focusT, 0) };
    });
    for (const maxGridSize of MTF_BENCHMARK_GRIDS) {
      await nextTurn();
      const sampled = prepared.map(({ name, engine, L, state }) => ({
        name,
        samplesMs: [],
        result: null,
        error: undefined,
        compute: () =>
          engine.computeMtf(state, {
            method,
            spectrum,
            focus: "design",
            maxGridSize,
            fieldFractions,
            pupilSemiDiameterMm: L.EP.epSD * apertureScale,
            stopSemiDiameterMm: L.stopPhysSD * apertureScale,
          }),
      }));
      for (let i = 0; i < warmups + iterations; i++) {
        /* Warmup pairs and measured pairs are each counted from 0, as in the rendering benchmark. */
        const order = sampled.length === 1 ? ["head"] : pairedSampleOrder(i < warmups ? i : i - warmups);
        for (const name of order) {
          const side = sampled.find((candidate) => candidate.name === name);
          if (side.error !== undefined) continue;
          try {
            const start = performance.now();
            side.result = side.compute();
            const elapsed = performance.now() - start;
            if (i >= warmups) side.samplesMs.push(elapsed);
          } catch (error) {
            side.error = error instanceof Error ? error.message : String(error);
          }
        }
      }
      const describe = ({ samplesMs, result, error }) =>
        error !== undefined
          ? { error }
          : { ...describeResult(result), medianMs: +summarizeNumbers(samplesMs).median.toFixed(2), samplesMs };
      const head = describe(sampled.at(-1));
      const { support, conjugate, geometry, fields, ...timing } = head;
      /* The head side keeps the shape of an unpaired row; a paired row adds the base side and the comparison. */
      const row = {
        key: data.key,
        maxGridSize,
        ...(head.error === undefined
          ? { support, ...(conjugate ? { conjugate } : {}), ...timing, geometry, fields }
          : head),
      };
      if (sampled.length === 2) {
        const baseSide = describe(sampled[0]);
        const differences = compareCompletedWork(baseSide, head);
        row.base = baseSide;
        row.comparison = {
          /* A side that threw has no samples and no timing; the row is still listed, as unequal work. */
          regressed: false,
          unequalWork: differences.length > 0,
          ...comparePairedSamples(
            `${data.key}:${maxGridSize}`,
            { baseMs: sampled[0].samplesMs, headMs: sampled[1].samplesMs },
            differences.length > 0,
          ),
          differences,
        };
        if (notice !== null) row.comparison.regressed = false;
      }
      rows.push(row);
    }
  }

  const paired = rows.filter((row) => row.comparison);
  console.log(
    JSON.stringify(
      {
        createdAt: new Date().toISOString(),
        commit: execFileSync("git", ["rev-parse", "HEAD"], { cwd: ROOT, encoding: "utf8" }).trim(),
        node: process.version,
        cpu: os.cpus()[0]?.model,
        method,
        spectrum,
        apertureScale,
        focusT,
        fieldFractions,
        warmups,
        iterations,
        ...(base
          ? {
              base,
              comparison: {
                firstSide: "base",
                bootstrap: { resamples: BOOTSTRAP_RESAMPLES, seed: BOOTSTRAP_SEED, confidence: 0.95 },
                regressionRule: {
                  ratioLowerBound: REGRESSION_RATIO_LOWER_BOUND,
                  medianGrowthMs: REGRESSION_MEDIAN_GROWTH_MS,
                },
                ...(notice === null ? {} : { notice }),
                regressed: paired
                  .filter((row) => row.comparison.regressed)
                  .map((row) => `${row.key}:${row.maxGridSize}`),
                unequalWork: paired
                  .filter((row) => row.comparison.unequalWork)
                  .map((row) => `${row.key}:${row.maxGridSize}`),
              },
            }
          : {}),
        rows,
      },
      null,
      2,
    ),
  );

  if (base) {
    const ms = (value) => (Number.isFinite(value) ? value.toFixed(2) : "n/a");
    const lines = [
      `MTF benchmark (${method}, ${spectrum}): base ${base.commit.slice(0, 8)} (${base.ref}) against the working tree, ` +
        `${iterations} measured after ${warmups} warmups per row`,
      ...(notice === null ? [] : [notice]),
      "",
      "| Case | Grid | Base median ms | Head median ms | Head/base | 95% interval | Flags |",
      "|---|---:|---:|---:|---:|---|---|",
      ...paired.map(({ key, maxGridSize, comparison }) => {
        const flags = [
          ...(comparison.regressed ? ["regressed"] : []),
          ...(comparison.unequalWork ? ["unequal work"] : []),
        ];
        const interval = comparison.ci95 ? comparison.ci95.map((bound) => bound.toFixed(3)).join(" to ") : "n/a";
        return (
          `| ${key} | ${maxGridSize} | ${ms(comparison.baseMedianMs)} | ${ms(comparison.headMedianMs)} | ` +
          `${comparison.ratio?.toFixed(3) ?? "n/a"} | ${interval} | ${flags.join(", ")} |`
        );
      }),
    ];
    console.error(lines.join("\n"));
  }
} finally {
  forgetSignals();
  baseTree?.remove();
}
