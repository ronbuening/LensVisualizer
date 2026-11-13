/**
 * Read-only MTF census. Run with the project's TS specifier hook.
 *
 * Default: support reasons per lens. `--fields` reports structural eligibility, modeled-field inclusion,
 * curve production and convergence at center, half-height, modeled edge and corner (fraction 1).
 * `--grid=32|64|128|256` sets the census cap (default 32); the product tab refines to 256.
 * `--cdf` / `--photopic` select the spectrum; `--list` retains each lens's field stages and diagnostics,
 * and names the lenses behind every unavailable field.
 * `--limit=N` audits the first N lenses only. `--focus` instead lists lenses whose authored image plane is
 * inconsistent with their own paraxial focus (`mtfImagePlaneOffset`), largest offset first.
 */
import { readdirSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { createAnalysisRequest } from "../src/optics/analysis.js";
import { buildLens } from "../src/optics/buildLens.js";
import { prepareRuntimeState } from "../src/optics/optics.js";
import { entrancePupilAtState } from "../src/optics/fieldGeometry.js";
import { assessMtfSupport, computeMtf, resolveMtfGeometry } from "../src/optics/mtf.js";
import { mtfImagePlaneOffset } from "../src/optics/mtf.js";

const spectrum = process.argv.includes("--cdf")
  ? "cdf"
  : process.argv.includes("--photopic")
    ? "photopic"
    : "reference";
const perField = process.argv.includes("--fields");
const list = process.argv.includes("--list");
const limit = Number(process.argv.find((arg) => arg.startsWith("--limit="))?.slice(8) ?? Infinity);
const focusCensus = process.argv.includes("--focus");
/** The authored plane keeps the field census tied to the lens data as written. */
const FIELD_FOCUS = "design";
const requestedGrid = Number(process.argv.find((arg) => arg.startsWith("--grid="))?.slice(7) ?? 32);
const gridCap = [32, 64, 128, 256].includes(requestedGrid) ? requestedGrid : 32;
if (perField && !focusCensus && gridCap !== requestedGrid) console.warn("--grid must be 32, 64, 128 or 256; using 32.");
const inconsistent = [];
const tally = (counts, key) => (counts[key] = (counts[key] ?? 0) + 1);
const support = {};
const positions = ["center", "half", "edge", "corner"];
const fields = Object.fromEntries(
  positions.map((position) => [
    position,
    { structurallyEligible: 0, insideModeledField: 0, curveProduced: 0, converged: 0 },
  ]),
);
const unavailable = {};
const lenses = [];
const files = readdirSync("src/lens-data", { recursive: true })
  .filter((f) => f.endsWith(".data.ts"))
  .sort();
let audited = 0;
for (const file of files) {
  if (audited >= limit) break;
  const data = (await import(pathToFileURL(resolve("src/lens-data", file)))).default;
  if (data.visible === false) continue;
  audited++;
  const L = buildLens(data, { path: `src/lens-data/${file}` });
  const state = prepareRuntimeState(L, 0, 0);
  const options = {
    method: "geometric",
    spectrum,
    focus: FIELD_FOCUS,
    maxGridSize: gridCap,
    // The wide-open stop and the paraxial entrance pupil it gives in this state.
    pupilSemiDiameterMm: entrancePupilAtState(L.stopPhysSD, 0, 0, L).epSD,
    stopSemiDiameterMm: L.stopPhysSD,
  };
  const request = createAnalysisRequest({
    preparedState: state,
    dynamicEFL: 0,
    currentEPSD: options.pupilSemiDiameterMm,
    currentPhysStopSD: options.stopSemiDiameterMm,
  });
  const assessed = assessMtfSupport(request, options);
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
  if (!perField) continue;
  const geometry = assessed.available ? resolveMtfGeometry(request, options) : null;
  const edge = geometry ? geometry.modeledEdgeHeightMm / geometry.referenceHeightMm : null;
  const fractions = [0, 0.5, edge, 1];
  const result = geometry ? computeMtf(request, { ...options, fieldFractions: fractions }) : null;
  const lensFields = {};
  positions.forEach((position, i) => {
    const field = result?.fields[i];
    const fieldReason = field ? field.reason : (assessed.reason ?? "chief-ray-failed");
    const stages = {
      structurallyEligible: assessed.available,
      insideModeledField: geometry !== null && fieldReason !== "outside-modeled-field",
      curveProduced: field?.status === "converged" || field?.status === "unconverged",
      converged: field?.status === "converged",
    };
    for (const [stage, passed] of Object.entries(stages)) if (passed) fields[position][stage]++;
    lensFields[position] = {
      ...stages,
      fieldFraction: fractions[i],
      status: field?.status ?? "unavailable",
      reason: fieldReason,
      gridSize: field?.gridSize ?? 0,
      convergedThroughLpMm: field?.convergedThroughLpMm ?? null,
    };
    if (assessed.available && !stages.curveProduced) (unavailable[`${position}:${fieldReason}`] ??= []).push(data.key);
  });
  if (list) lenses.push({ key: data.key, file, fields: lensFields });
}
inconsistent.sort((a, b) => Math.abs(b.offsetMm) - Math.abs(a.offsetMm));
const report = focusCensus
  ? { audited, candidates: support.candidate ?? 0, inconsistent: inconsistent.length, lenses: inconsistent }
  : perField
    ? {
        spectrum,
        focus: FIELD_FOCUS,
        maxGridSize: gridCap,
        convergenceNote:
          "Curve production is not convergence. Convergence is assessed at this census cap; the product tab refines to 256 cells with its selected focus mode.",
        audited,
        support,
        fields,
        ...(list ? { unavailable, lenses } : {}),
      }
    : support;
console.log(JSON.stringify(report, null, 2));
