/**
 * Opt-in numerical repeatability signature through the public MTF engine, independent of manufacturer charts.
 * Run with the TS specifier hook; --check (the default) compares, --update replaces the reviewed baseline.
 *
 * The workload is wide open at zoom 0, both methods, reference/photopic, design/best-axial,
 * fields 0/0.7 and 0/10/30/50 lp/mm. The fixed 64-cell cap retains the public engine's
 * refinement/early convergence and records the actual grid; it does not assess convergence.
 */
import { createHash } from "node:crypto";
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { format, resolveConfig } from "prettier";
import { MTF_BENCHMARK_CASES, MTF_FINITE_BENCHMARK_CASE } from "../src/benchmarks/mtfCases.ts";
import { createAnalysisRequest } from "../src/optics/analysis.ts";
import { buildLens, prepareRuntimeState } from "../src/optics/buildLens.ts";
import { entrancePupilAtState } from "../src/optics/fieldGeometry.ts";
import { computeMtf } from "../src/optics/mtf.ts";
import { stopSemiDiameterForFNumber } from "../src/optics/optics.ts";

const ROOT = join(import.meta.dirname, "..");
const SIGNATURE_FILE = join(ROOT, "reports/data/mtfDriftSignature.json");
// Absolute repeatability tolerance, never an optical accuracy claim.
export const REPEATABILITY_TOLERANCE = 1e-7;
const MAX_GRID_SIZE = 64;
const FIELDS = [0, 0.7];
const FREQUENCIES = [0, 10, 30, 50];
// Serenar: spherical classic. Sony 12–24 at 12 mm: retrofocus pupil growth.
// GF80: inner focus with a source-verified finite station (576.6736 mm from first vertex).
const STATIONS = [
  { file: MTF_BENCHMARK_CASES[0], focusT: 0 },
  { file: MTF_BENCHMARK_CASES[2], focusT: 0 },
  { file: MTF_FINITE_BENCHMARK_CASE, focusT: 0 },
  { file: MTF_FINITE_BENCHMARK_CASE, focusT: 1 },
];

/**
 * Round the serialized signature without hiding nonfinite engine output behind JSON nulls.
 * @param {unknown} value - JSON-shaped result
 * @returns {any} signature rounded to 1e-9, with explicit nulls retained
 */
export function roundSignature(value) {
  if (typeof value === "number") {
    if (!Number.isFinite(value)) throw new Error("Nonfinite MTF signature value.");
    return Number(value.toFixed(9)) || 0;
  }
  if (Array.isArray(value)) return value.map(roundSignature);
  if (value && typeof value === "object")
    return Object.fromEntries(Object.entries(value).map(([key, entry]) => [key, roundSignature(entry)]));
  return value;
}

function engineFiles(directory = "src/optics") {
  return readdirSync(join(ROOT, directory), { withFileTypes: true }).flatMap((entry) => {
    const file = `${directory}/${entry.name}`;
    return entry.isDirectory() ? engineFiles(file) : file.endsWith(".ts") ? [file] : [];
  });
}

function inputHashes() {
  const engine = createHash("sha256");
  // Paths and separators make additions, deletions and renames unambiguous as well as edits.
  for (const file of engineFiles().sort())
    engine
      .update(file)
      .update("\0")
      .update(readFileSync(join(ROOT, file)))
      .update("\0");
  return {
    engineSha256: engine.digest("hex"),
    lensDataSha256: Object.fromEntries(
      [...new Set(STATIONS.map(({ file }) => `src/lens-data/${file}`))].sort().map((file) => [
        file,
        createHash("sha256")
          .update(readFileSync(join(ROOT, file)))
          .digest("hex"),
      ]),
    ),
  };
}

async function generateSignature() {
  const cases = [];
  for (const { file, focusT } of STATIONS) {
    const lensDataFile = `src/lens-data/${file}`;
    const data = (await import(pathToFileURL(join(ROOT, "src", "lens-data", file)).href)).default;
    const lens = buildLens(data, { path: lensDataFile });
    const state = prepareRuntimeState(lens, focusT, 0);
    const stopSemiDiameterMm = stopSemiDiameterForFNumber(lens.FOPEN, 0, lens);
    const pupilSemiDiameterMm = entrancePupilAtState(stopSemiDiameterMm, focusT, 0, lens).epSD;
    const request = createAnalysisRequest({
      preparedState: state,
      dynamicEFL: 0,
      currentEPSD: pupilSemiDiameterMm,
      currentPhysStopSD: stopSemiDiameterMm,
    });
    for (const method of ["geometric", "diffraction"]) {
      for (const spectrum of ["reference", "photopic"]) {
        for (const focus of ["best-axial", "design"]) {
          const id = `${data.key}/${focusT ? "finite" : "infinity"}/${method}/${spectrum}/${focus}`;
          console.error(`Computing ${id}`);
          const result = computeMtf(request, {
            method,
            spectrum,
            focus,
            maxGridSize: MAX_GRID_SIZE,
            fieldFractions: FIELDS,
            frequenciesPerMm: FREQUENCIES,
          });
          cases.push({
            id,
            lensKey: data.key,
            lensDataFile,
            settings: {
              method: result.method,
              spectrum: result.spectrum,
              focus,
              focusT,
              zoomT: 0,
              fNumber: lens.FOPEN,
              stopSemiDiameterMm,
              pupilSemiDiameterMm,
              maxGridSize: MAX_GRID_SIZE,
              fieldFractions: FIELDS,
              frequenciesPerMm: result.frequenciesPerMm,
              spectralLines: result.support.spectralLines,
              conjugate: result.support.conjugate ?? null,
            },
            support: { available: result.support.available, reason: result.support.reason },
            focus: result.focus,
            fields: result.fields.map((field) => ({
              fieldFraction: field.fieldFraction,
              status: field.status,
              reason: field.reason,
              gridSize: field.gridSize,
              validRays: field.validRays,
              sagittal: field.sagittal,
              tangential: field.tangential,
              diffractionLimit: field.diffractionLimit,
              unknownFluxFraction: field.unknownFluxFraction,
            })),
          });
        }
      }
    }
  }
  return roundSignature({ schemaVersion: 1, inputHashes: inputHashes(), cases });
}

function indexBy(entries, key) {
  const index = new Map();
  for (const entry of entries) {
    const identity = entry[key];
    if (index.has(identity)) throw new Error(`Duplicate MTF signature ${key}: ${identity}`);
    index.set(identity, entry);
  }
  return index;
}

/**
 * Compare all signature leaves, matching cases and fields by identity rather than array position.
 * Hash-only changes are informational; nonnumeric changes fail just like missing or added results.
 * @param {any} before - saved baseline
 * @param {any} after - freshly computed signature
 * @returns {{changes: any[], hashes: any[], failed: boolean}} every moved value and input hash
 */
export function compareSignatures(before, after) {
  const changes = [];
  const hashes = [];
  function walk(oldValue, newValue, quantity, rows, context = {}) {
    if (oldValue === newValue) return;
    if (oldValue && newValue && typeof oldValue === "object" && typeof newValue === "object") {
      for (const key of new Set([...Object.keys(oldValue), ...Object.keys(newValue)]))
        walk(oldValue[key], newValue[key], quantity ? `${quantity}.${key}` : key, rows, context);
      return;
    }
    const delta = typeof oldValue === "number" && typeof newValue === "number" ? newValue - oldValue : null;
    rows.push({
      ...context,
      quantity,
      old: oldValue,
      new: newValue,
      delta,
      exceedsTolerance: delta === null || Math.abs(delta) > REPEATABILITY_TOLERANCE,
    });
  }
  walk(before.inputHashes, after.inputHashes, "", hashes);
  walk(before.schemaVersion, after.schemaVersion, "schemaVersion", changes, { case: "signature", field: "—" });
  const oldCases = indexBy(before.cases, "id");
  const newCases = indexBy(after.cases, "id");
  for (const id of new Set([...oldCases.keys(), ...newCases.keys()])) {
    const oldCase = oldCases.get(id);
    const newCase = newCases.get(id);
    const file = newCase?.lensDataFile ?? oldCase?.lensDataFile;
    const nondeterminism =
      before.inputHashes.engineSha256 === after.inputHashes.engineSha256 &&
      before.inputHashes.lensDataSha256[file] === after.inputHashes.lensDataSha256[file];
    const context = { case: id, field: "—", nondeterminism };
    if (!oldCase || !newCase) {
      walk(oldCase, newCase, "case", changes, context);
      continue;
    }
    const { fields: oldFields, ...oldRest } = oldCase;
    const { fields: newFields, ...newRest } = newCase;
    walk(oldRest, newRest, "", changes, context);
    const oldByField = indexBy(oldFields, "fieldFraction");
    const newByField = indexBy(newFields, "fieldFraction");
    for (const field of new Set([...oldByField.keys(), ...newByField.keys()]))
      walk(oldByField.get(field), newByField.get(field), "", changes, { ...context, field });
  }
  return { changes, hashes, failed: changes.some((change) => change.exceedsTolerance) };
}

function display(value) {
  return value === undefined ? "<missing>" : JSON.stringify(value);
}

/**
 * Run the opt-in tool; imports by tooling tests never compute or rewrite the baseline.
 * @param {readonly string[]} argv - no arguments, --check, or --update
 * @returns {Promise<number>} process exit status
 */
export async function main(argv) {
  if (argv.length > 1 || (argv.length === 1 && !["--check", "--update"].includes(argv[0])))
    throw new Error("Usage: audit:mtf-drift [--check|--update]");
  const update = argv[0] === "--update";
  const before = update ? null : JSON.parse(readFileSync(SIGNATURE_FILE, "utf8"));
  const after = await generateSignature();
  if (update) {
    const output = await format(JSON.stringify(after), {
      ...(await resolveConfig(SIGNATURE_FILE)),
      filepath: SIGNATURE_FILE,
    });
    writeFileSync(SIGNATURE_FILE, output);
    console.log(`Updated reports/data/mtfDriftSignature.json (${after.cases.length} cases).`);
    return 0;
  }
  const comparison = compareSignatures(before, after);
  if (comparison.hashes.length)
    console.table(comparison.hashes.map(({ quantity, old, new: next }) => ({ hash: quantity, old, new: next })));
  else console.log("Input hashes unchanged.");
  if (comparison.changes.length) {
    console.table(
      comparison.changes.map((change) => ({
        case: change.case,
        field: change.field,
        quantity: change.quantity,
        "old → new": `${display(change.old)} → ${display(change.new)}`,
        delta: change.delta ?? "—",
        verdict: change.exceedsTolerance ? "FAIL" : "within tolerance",
        cause: change.nondeterminism ? "nondeterminism (input hashes unchanged)" : "inputs changed",
      })),
    );
  }
  console.log(
    `${comparison.failed ? "FAIL" : "PASS"}: ${comparison.changes.length} moved values; absolute repeatability tolerance ${REPEATABILITY_TOLERANCE}.`,
  );
  return comparison.failed ? 1 : 0;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main(process.argv.slice(2)).then(
    (code) => {
      process.exitCode = code;
    },
    (error) => {
      console.error(error.message);
      process.exitCode = 1;
    },
  );
}
