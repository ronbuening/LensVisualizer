/**
 * Read-only MTF census. Run with the project's TS specifier hook.
 *
 * Default: support reasons per lens. `--fields` also computes center, half-height and modeled-edge
 * fields per supported lens and reports whether the format corner lies outside the model.
 * `--cdf` / `--photopic` select the spectrum; `--list` names the lenses behind every unavailable field;
 * `--limit=N` audits the first N lenses only. `--focus` instead lists lenses whose authored image plane is
 * inconsistent with their own paraxial focus (`mtfImagePlaneOffset`), largest offset first.
 * `--derive-source-states` emits uncertified first-order/exact-ray evidence at each authored candidate.
 * `--source-states` inventories all prescriptions (including hidden/reference entries); `--lens=KEY` filters output.
 */
import { sourceStateInventory } from "./source-state-inventory.mjs";
import { readdirSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import buildLens from "../src/optics/buildLens.ts";
import { prepareRuntimeState } from "../src/optics/compat.ts";
import { assessMtfSupport, computeMtf, resolveMtfGeometry } from "../src/optics/mtf.ts";
import { deriveSourceDistance } from "../src/optics/analysis/sourceStateAudit.ts";
import { mtfImagePlaneOffset } from "../src/optics/analysis/mtfFocus.ts";

const sourceCensus = process.argv.includes("--source-states");
const deriveSources = process.argv.includes("--derive-source-states");
const lensKey = process.argv.find((arg) => arg.startsWith("--lens="))?.slice(7);

const spectrum = process.argv.includes("--cdf")
  ? "cdf"
  : process.argv.includes("--photopic")
    ? "photopic"
    : "reference";
const perField = process.argv.includes("--fields");
const list = process.argv.includes("--list");
const limit = Number(process.argv.find((arg) => arg.startsWith("--limit="))?.slice(8) ?? Infinity);
const focusCensus = process.argv.includes("--focus");
const inconsistent = [];
const tally = (counts, key) => (counts[key] = (counts[key] ?? 0) + 1);
const support = {};
const fields = { center: {}, half: {}, edge: {}, corner: {} };
const unavailable = {};
const files = readdirSync("src/lens-data", { recursive: true })
  .filter((f) => f.endsWith(".data.ts"))
  .sort();
if (sourceCensus || deriveSources) {
  const entries = [];
  for (const file of files) {
    const data = (await import(pathToFileURL(resolve("src/lens-data", file)))).default;
    entries.push({ file, data });
  }
  const inventory = sourceStateInventory(entries, { lensKey, limit });
  if (!deriveSources) console.log(JSON.stringify(inventory, null, 2));
  else {
    const reports = inventory.lenses.map((entry) => {
      const data = entries.find(({ data }) => data.key === entry.key).data;
      const L = buildLens(data);
      return {
        key: entry.key,
        file: entry.file,
        kind: entry.kind,
        candidates: entry.candidates.map(({ focusT, zoomT, stateId }) => {
          const declared = entry.states.find((s) => s.id === stateId);
          const finite = declared?.conjugate.kind === "finite" ? declared.conjugate : undefined;
          return {
            focusT,
            zoomT,
            stateId,
            evidence: deriveSourceDistance(prepareRuntimeState(L, focusT, zoomT), {
              publishedDistance: finite?.distanceProvenance === "published" ? finite : undefined,
              publishedMagnification: finite?.magnification,
            }),
          };
        }),
      };
    });
    console.log(JSON.stringify({ inventory: inventory.inventory, selected: reports.length, lenses: reports }, null, 2));
  }
} else {
  let audited = 0;
  for (const file of files) {
    if (audited >= limit) break;
    const data = (await import(pathToFileURL(resolve("src/lens-data", file)))).default;
    if (lensKey && data.key !== lensKey) continue;
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
    const assessed = assessMtfSupport(state, options);
    const reason = assessed.reason ?? "candidate";
    tally(support, reason);
    if (focusCensus) {
      const offset = reason === "candidate" ? mtfImagePlaneOffset(state, assessed) : null;
      if (offset?.inconsistent)
        inconsistent.push({
          key: data.key,
          file,
          offsetMm: Number(offset.offsetMm.toFixed(3)),
          depths: Number(((10 * Math.abs(offset.offsetMm)) / offset.limitMm).toFixed(1)),
        });
      continue;
    }
    if (!perField || reason !== "candidate") continue;
    const geometry = resolveMtfGeometry(state, options);
    if (!geometry) {
      for (const position of Object.keys(fields)) tally(fields[position], "no-field-axis");
      continue;
    }
    const edge = geometry.modeledEdgeHeightMm / geometry.referenceHeightMm;
    const result = computeMtf(state, { ...options, fieldFractions: [0, 0.5, edge] });
    const status = (field) => (field.status === "unavailable" ? field.reason : "available");
    ["center", "half", "edge"].forEach((position, i) => {
      const value = status(result.fields[i]);
      tally(fields[position], value);
      if (value !== "available") (unavailable[`${position}:${value}`] ??= []).push(data.key);
    });
    tally(fields.corner, edge < 1 - 1e-9 ? "outside-modeled-field" : "within-model");
  }
  inconsistent.sort((a, b) => Math.abs(b.offsetMm) - Math.abs(a.offsetMm));
  const report = focusCensus
    ? { audited, candidates: support.candidate ?? 0, inconsistent: inconsistent.length, lenses: inconsistent }
    : perField
      ? { spectrum, audited, support, fields, ...(list ? { unavailable } : {}) }
      : support;
  console.log(JSON.stringify(report, null, 2));
}
