/**
 * One measured pass of a benchmark run, in a process of its own.
 *
 * `scripts/benchmark-optics-rendering.mjs` builds the bundles and starts this script once per pass. The process
 * that ran the builds is no place to measure in. V8 keeps one root map for every object literal of a given property
 * count, and that map holds at most 1,536 transitions. The bundler leaves about a thousand on the root that
 * four-property literals share, one per lazily imported chunk, and a second build of a tree at another path fills
 * it. The engine's own four-property results, first created after that, become dictionary-mode objects and
 * `evaluateAperture` deoptimizes in a loop, which slows the heavy cases on both sides. One build alone leaves that
 * map three quarters full, and each lazily imported `*.analysis.md` in the catalog adds one transition, so a plain
 * run that measured beside its build would reach the same loop as the catalog grows. A process that only imports
 * the prebuilt bundles starts with that map nearly empty, and has none of the build's heap.
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
