/**
 * One measured pass of a benchmark run, in a process of its own.
 *
 * `scripts/benchmark-optics-rendering.mjs` builds the bundle and starts this script
 * once per pass. Build allocations and V8 object-shape transitions can affect
 * timing and heap readings, so measurement imports a prebuilt bundle in a fresh
 * process. That process holds none of the bundler's heap.
 *
 * Usage:
 *   node [--expose-gc] scripts/benchmark-child.mjs <plain|timed|untimed|memory> <request JSON> <result file>
 *
 * `plain` is the timed pass of a plain run: the whole matrix on one bundle, returning the record that run writes
 * under `runs/`, which keeps no samples. `timed` is the timed pass of a heavy run, and keeps them.
 *
 * The request names the prebuilt bundle, heavy-set selection and entry options.
 * Progress goes to stderr.
 */

import { writeFileSync } from "node:fs";

const [pass, requestJson, resultPath] = process.argv.slice(2);
const { bundleUrl, heavy = false, options = {} } = JSON.parse(requestJson);
const { label = pass, ...entryOptions } = options;
const bundle = await import(bundleUrl);
const cells = heavy ? bundle.HEAVY_BENCHMARK_CELLS : undefined;
const reportCell = ({ lensKey, scenarioId, index, count }) => {
  console.error(`benchmark: ${label} ${index + 1}/${count} ${lensKey} ${scenarioId}`);
};

let result;
if (pass === "plain") {
  result = await bundle.runOpticsRenderingBenchmark({ ...entryOptions, onCell: reportCell });
} else if (pass === "timed") {
  result = await bundle.runOpticsRenderingBenchmark({ ...entryOptions, cells, keepSamples: true, onCell: reportCell });
} else if (pass === "untimed") {
  result = await bundle.runUntimedBenchmarkPass({ cells, onCell: reportCell });
} else if (pass === "memory") {
  result = await bundle.runMemorySession({ cells });
} else {
  throw new Error(`Unknown benchmark pass: ${pass}`);
}
writeFileSync(resultPath, JSON.stringify(result), "utf8");
