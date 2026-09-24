/** Reproducible MTF computation benchmark; stdout is the JSON artifact, no source files are rewritten. */
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import os from "node:os";
import { execFileSync } from "node:child_process";
import buildLens from "../src/optics/buildLens.ts";
import { prepareRuntimeState } from "../src/optics/compat.ts";
import { computeMtf } from "../src/optics/mtf.ts";
import { MTF_BENCHMARK_CASES, MTF_BENCHMARK_GRIDS, MTF_FINITE_BENCHMARK_CASE } from "../src/benchmarks/mtfCases.ts";

const option = (name) => process.argv.find((arg) => arg.startsWith(`--${name}=`))?.slice(name.length + 3);
const method = option("method") ?? (process.argv.includes("--diffraction") ? "diffraction" : "geometric");
const spectrum = option("spectrum") ?? (process.argv.includes("--cdf") ? "cdf" : "reference");
const apertureScale = process.argv.includes("--stopped-down") ? 0.25 : 1;
const focusT = process.argv.includes("--finite") ? 1 : 0;
const fieldCount = Number(option("fields") ?? (process.argv.includes("--sweep") ? 9 : 3));
if (!["geometric", "geometric-dl", "diffraction"].includes(method)) throw new Error(`Unknown --method=${method}`);
if (!["reference", "cdf", "photopic"].includes(spectrum)) throw new Error(`Unknown --spectrum=${spectrum}`);
if (!Number.isInteger(fieldCount) || fieldCount < 2 || fieldCount > 101) throw new Error("--fields must be 2-101");
// Fractions of the reference image height (the format corner when declared), evenly spaced.
const fieldFractions = Array.from({ length: fieldCount }, (_, i) => i / (fieldCount - 1));
const rows = [];
for (const file of focusT ? [MTF_FINITE_BENCHMARK_CASE] : MTF_BENCHMARK_CASES) {
  const data = (await import(pathToFileURL(resolve("src/lens-data", file)))).default;
  const L = buildLens(data);
  const state = prepareRuntimeState(L, focusT, 0);
  for (const maxGridSize of MTF_BENCHMARK_GRIDS) {
    const options = {
      method,
      spectrum,
      maxGridSize,
      fieldFractions,
      pupilSemiDiameterMm: L.EP.epSD * apertureScale,
      stopSemiDiameterMm: L.stopPhysSD * apertureScale,
    };
    computeMtf(state, options);
    const times = [];
    let result;
    for (let iteration = 0; iteration < 3; iteration++) {
      const start = performance.now();
      result = computeMtf(state, options);
      times.push(performance.now() - start);
    }
    times.sort((a, b) => a - b);
    rows.push({
      key: data.key,
      maxGridSize,
      support: result.support.reason ?? "candidate",
      ...(result.support.conjugate ? { conjugate: result.support.conjugate } : {}),
      medianMs: +times[1].toFixed(2),
      geometry: result.geometry,
      fields: result.fields.map(({ fieldFraction, imageHeightMm, status, reason, gridSize, maxDelta }) => ({
        fieldFraction,
        imageHeightMm,
        status,
        reason,
        gridSize,
        maxDelta,
      })),
    });
  }
}
console.log(
  JSON.stringify(
    {
      createdAt: new Date().toISOString(),
      commit: execFileSync("git", ["rev-parse", "HEAD"], { encoding: "utf8" }).trim(),
      node: process.version,
      cpu: os.cpus()[0]?.model,
      method,
      spectrum,
      apertureScale,
      focusT,
      fieldFractions,
      rows,
    },
    null,
    2,
  ),
);
