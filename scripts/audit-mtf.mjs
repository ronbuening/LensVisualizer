/**
 * Read-only MTF census. Run with the project's TS specifier hook.
 *
 * Default: support reasons per lens. `--fields` also computes centre, half-height and modelled-edge
 * fields per supported lens and reports whether the format corner lies outside the model.
 * `--cdf` / `--photopic` select the spectrum; `--list` names the lenses behind every unavailable field;
 * `--limit=N` audits the first N lenses only.
 */
import { readdirSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import buildLens from "../src/optics/buildLens.ts";
import { prepareRuntimeState } from "../src/optics/compat.ts";
import { assessMtfSupport, computeMtf, resolveMtfGeometry } from "../src/optics/mtf.ts";

const spectrum = process.argv.includes("--cdf")
  ? "cdf"
  : process.argv.includes("--photopic")
    ? "photopic"
    : "reference";
const perField = process.argv.includes("--fields");
const list = process.argv.includes("--list");
const limit = Number(process.argv.find((arg) => arg.startsWith("--limit="))?.slice(8) ?? Infinity);
const tally = (counts, key) => (counts[key] = (counts[key] ?? 0) + 1);
const support = {};
const fields = { centre: {}, half: {}, edge: {}, corner: {} };
const unavailable = {};
const files = readdirSync("src/lens-data", { recursive: true })
  .filter((f) => f.endsWith(".data.ts"))
  .sort();
let audited = 0;
for (const file of files) {
  if (audited >= limit) break;
  const data = (await import(pathToFileURL(resolve("src/lens-data", file)))).default;
  if (data.visible === false) continue;
  audited++;
  const L = buildLens(data);
  const state = prepareRuntimeState(L, 0, 0);
  const options = {
    method: "geometric",
    spectrum,
    maxGridSize: 32,
    pupilSemiDiameterMm: L.EP.epSD,
    stopSemiDiameterMm: L.stopPhysSD,
  };
  const reason = assessMtfSupport(state, options).reason ?? "candidate";
  tally(support, reason);
  if (!perField || reason !== "candidate") continue;
  const geometry = resolveMtfGeometry(state, options);
  if (!geometry) {
    for (const position of Object.keys(fields)) tally(fields[position], "no-field-axis");
    continue;
  }
  const edge = geometry.modeledEdgeHeightMm / geometry.referenceHeightMm;
  const result = computeMtf(state, { ...options, fieldFractions: [0, 0.5, edge] });
  const status = (field) => (field.status === "unavailable" ? field.reason : "available");
  ["centre", "half", "edge"].forEach((position, i) => {
    const value = status(result.fields[i]);
    tally(fields[position], value);
    if (value !== "available") (unavailable[`${position}:${value}`] ??= []).push(data.key);
  });
  tally(fields.corner, edge < 1 - 1e-9 ? "outside-modeled-field" : "within-model");
}
const report = perField ? { spectrum, audited, support, fields, ...(list ? { unavailable } : {}) } : support;
console.log(JSON.stringify(report, null, 2));
