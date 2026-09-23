/** Reproducible MTF computation benchmark; stdout is the JSON artifact, no source files are rewritten. */
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import os from "node:os";
import { execFileSync } from "node:child_process";
import buildLens from "../src/optics/buildLens.ts";
import { prepareRuntimeState } from "../src/optics/compat.ts";
import { computeMtf } from "../src/optics/mtf.ts";
import { MTF_BENCHMARK_CASES, MTF_BENCHMARK_GRIDS, MTF_FINITE_BENCHMARK_CASE } from "../src/benchmarks/mtfCases.ts";

const method = process.argv.includes("--diffraction") ? "diffraction" : "geometric";
const spectrum = process.argv.includes("--cdf") ? "cdf" : "reference";
const apertureScale = process.argv.includes("--stopped-down") ? 0.25 : 1;
const focusT = process.argv.includes("--finite") ? 1 : 0;
const fieldFractions = process.argv.includes("--sweep") ? Array.from({ length: 9 }, (_, i) => i / 8) : [0, 0.5, 1];
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
      fields: result.fields.map(({ fieldFraction, status, reason, gridSize, maxDelta }) => ({
        fieldFraction,
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
