/**
 * Reproducible MTF computation benchmark; stdout is the JSON artifact, no source files are rewritten.
 *
 * Every case and grid cap is computed `--warmups` times unrecorded and then `--iterations` times, and each row
 * reports every recorded sample in run order with their median.
 *
 * Usage:
 *   node --import ./scripts/ts-js-specifier-hook-register.mjs scripts/benchmark-mtf.mjs [--method=geometric|diffraction]
 *     [--spectrum=reference|cdf|photopic] [--fields=N] [--sweep] [--stopped-down] [--finite] [--iterations=N]
 *     [--warmups=N]
 */
import { execFileSync } from "node:child_process";
import os from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { summarizeNumbers } from "../src/benchmarks/benchmarkReport.ts";
import { MTF_BENCHMARK_CASES, MTF_BENCHMARK_GRIDS, MTF_FINITE_BENCHMARK_CASE } from "../src/benchmarks/mtfCases.ts";
const ROOT = join(import.meta.dirname, "..");

const VALUE_FLAGS = ["method", "spectrum", "fields", "iterations", "warmups"];
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

/** Load current public barrels through the Node TypeScript specifier hook. */
async function loadEngine() {
  const { buildLens, prepareRuntimeState } = await import("../src/optics/buildLens.ts");
  const { computeMtf } = await import("../src/optics/mtf.ts");
  const { createAnalysisRequest } = await import("../src/optics/analysis.ts");
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

const engine = await loadEngine();
const rows = [];
for (const file of focusT ? [MTF_FINITE_BENCHMARK_CASE] : MTF_BENCHMARK_CASES) {
  const data = (await import(pathToFileURL(join(ROOT, "src", "lens-data", file)).href)).default;
  const L = engine.buildLens(data, { path: `src/lens-data/${file}` });
  const state = engine.prepareRuntimeState(L, focusT, 0);
  for (const maxGridSize of MTF_BENCHMARK_GRIDS) {
    const samplesMs = [];
    let result;
    let error;
    for (let index = 0; index < warmups + iterations; index++) {
      try {
        const start = performance.now();
        result = engine.computeMtf(state, {
          method,
          spectrum,
          focus: "design",
          maxGridSize,
          fieldFractions,
          pupilSemiDiameterMm: L.EP.epSD * apertureScale,
          stopSemiDiameterMm: L.stopPhysSD * apertureScale,
        });
        const elapsed = performance.now() - start;
        if (index >= warmups) samplesMs.push(elapsed);
      } catch (caught) {
        error = caught instanceof Error ? caught.message : String(caught);
        break;
      }
    }
    if (error !== undefined) {
      rows.push({ key: data.key, maxGridSize, error });
    } else {
      const { support, conjugate, geometry, fields } = describeResult(result);
      rows.push({
        key: data.key,
        maxGridSize,
        support,
        ...(conjugate ? { conjugate } : {}),
        medianMs: +summarizeNumbers(samplesMs).median.toFixed(2),
        samplesMs,
        geometry,
        fields,
      });
    }
  }
}
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
      rows,
    },
    null,
    2,
  ),
);
