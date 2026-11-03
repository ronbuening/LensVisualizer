import { createAnalysisRequest } from "../src/optics/analysis.js";
/**
 * Read-only MTF census. Run with the project's TS specifier hook.
 *
 * Default: support reasons per lens. `--fields` also computes center, half-height and modeled-edge
 * fields per supported lens and reports whether the format corner lies outside the model.
 * `--cdf` / `--photopic` select the spectrum; `--list` names the lenses behind every unavailable field;
 * `--limit=N` audits the first N lenses only. `--focus` instead lists the zoom stations (every station of a zoom,
 * the one of a prime) whose authored image plane at infinity is inconsistent with their own paraxial focus
 * (`mtfImagePlaneOffset`), largest offset first, with the real-ray axial best-focus shift, the close row's focus label
 * and the authored close-focus distance. `--min-depths=N` lists stations beyond N depths of focus instead of the
 * flag's `MTF_IMAGE_PLANE_DEPTHS`.
 */
import { readdirSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { buildLens } from "../src/optics/buildLens.js";
import {
  closeFocusAtZoom,
  eflAtZoom,
  focusLabelDistanceM,
  prepareRuntimeState,
  wideOpenStopAtZoom,
} from "../src/optics/optics.js";
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
const minDepths = Number(process.argv.find((arg) => arg.startsWith("--min-depths="))?.slice(13) ?? NaN);
/** Image plane of the `--fields` census: the authored plane, so availability reflects the lens data as written. */
const FIELD_FOCUS = "design";
const inconsistent = [];
const tally = (counts, key) => (counts[key] = (counts[key] ?? 0) + 1);
const support = {};
const fields = { center: {}, half: {}, edge: {}, corner: {} };
const unavailable = {};
const files = readdirSync("src/lens-data", { recursive: true })
  .filter((f) => f.endsWith(".data.ts"))
  .sort();
let audited = 0;
for (const file of files) {
  if (audited >= limit) break;
  const data = (await import(pathToFileURL(resolve("src/lens-data", file)))).default;
  // Hidden configuration members (a built-in converter engaged, say) are reachable from their visible sibling.
  if (data.visible === false && !(focusCensus && data.catalog?.opticalConfiguration)) continue;
  audited++;
  const L = buildLens(data, { path: `src/lens-data/${file}` });
  if (focusCensus) {
    inconsistent.push(...focusStations(data, file, L));
    continue;
  }
  const state = prepareRuntimeState(L, 0, 0);
  const options = {
    method: "geometric",
    spectrum,
    focus: FIELD_FOCUS,
    maxGridSize: 32,
    // The wide-open stop and the paraxial entrance pupil it gives in this state.
    pupilSemiDiameterMm: entrancePupilAtState(L.stopPhysSD, 0, 0, L).epSD,
    stopSemiDiameterMm: L.stopPhysSD,
  };
  const assessed = assessMtfSupport(
    createAnalysisRequest({
      preparedState: state,
      dynamicEFL: 0,
      currentEPSD: options.pupilSemiDiameterMm,
      currentPhysStopSD: options.stopSemiDiameterMm,
    }),
    options,
  );
  const reason = assessed.reason ?? "candidate";
  tally(support, reason);
  if (!perField || reason !== "candidate") continue;
  const geometry = resolveMtfGeometry(
    createAnalysisRequest({
      preparedState: state,
      dynamicEFL: 0,
      currentEPSD: options.pupilSemiDiameterMm,
      currentPhysStopSD: options.stopSemiDiameterMm,
    }),
    options,
  );
  if (!geometry) {
    for (const position of Object.keys(fields)) tally(fields[position], "no-field-axis");
    continue;
  }
  const edge = geometry.modeledEdgeHeightMm / geometry.referenceHeightMm;
  const result = computeMtf(
    createAnalysisRequest({
      preparedState: state,
      dynamicEFL: 0,
      currentEPSD: { ...options, fieldFractions: [0, 0.5, edge] }.pupilSemiDiameterMm,
      currentPhysStopSD: { ...options, fieldFractions: [0, 0.5, edge] }.stopSemiDiameterMm,
    }),
    { ...options, fieldFractions: [0, 0.5, edge] },
  );
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
  ? {
      audited,
      stations: inconsistent.length,
      lenses: new Set(inconsistent.map((row) => row.key)).size,
      inconsistent,
    }
  : perField
    ? { spectrum, focus: FIELD_FOCUS, audited, support, fields, ...(list ? { unavailable } : {}) }
    : support;
console.log(JSON.stringify(report, null, 2));

/**
 * Image-plane consistency of every zoom station at infinity, wide open. The offset is paraxial focus minus the
 * authored plane; the best-focus shift is the real-ray axial MTF optimum on the census spectrum, absent where the
 * MTF cannot trace the lens (`mtf` names why).
 *
 * @param data - authored lens data
 * @param file - path below `src/lens-data`
 * @param L - runtime lens
 * @returns the stations beyond the threshold
 */
function focusStations(data, file, L) {
  const rows = [];
  const stations = (L.isZoom && L.zoomPositions?.length) || 1;
  for (let station = 0; station < stations; station++) {
    const zoomT = stations > 1 ? station / (stations - 1) : 0;
    const state = prepareRuntimeState(L, 0, zoomT);
    const stopSemiDiameterMm = wideOpenStopAtZoom(zoomT, L);
    const pupilSemiDiameterMm = entrancePupilAtState(stopSemiDiameterMm, 0, zoomT, L).epSD;
    const request = createAnalysisRequest({
      preparedState: state,
      dynamicEFL: 0,
      currentEPSD: pupilSemiDiameterMm,
      currentPhysStopSD: stopSemiDiameterMm,
    });
    const options = {
      method: "geometric",
      spectrum,
      focus: "best-axial",
      maxGridSize: 32,
      fieldFractions: [0],
      pupilSemiDiameterMm,
      stopSemiDiameterMm,
    };
    const assessed = assessMtfSupport(request, options);
    // The plane's consistency is lens data whether or not the MTF can trace it; folded paths have no sequential focus.
    const offset = L.isFoldedOptics ? null : mtfImagePlaneOffset(state, assessed);
    if (!offset) continue;
    const depths = (10 * Math.abs(offset.offsetMm)) / offset.limitMm;
    if (Number.isFinite(minDepths) ? depths <= minDepths : !offset.inconsistent) continue;
    const best = assessed.available ? (computeMtf(request, options).focus?.bestAxialShiftMm ?? null) : null;
    const label = focusLabelDistanceM(1, L, zoomT);
    rows.push({
      key: data.key,
      file,
      station: stations > 1 ? `${station + 1}/${stations}` : "prime",
      eflMm: Number(eflAtZoom(zoomT, L).toFixed(2)),
      offsetMm: Number(offset.offsetMm.toFixed(3)),
      depths: Number(depths.toFixed(1)),
      bestFocusShiftMm: best === null ? null : Number(best.toFixed(3)),
      ...(assessed.available ? {} : { mtf: assessed.reason }),
      closeLabelM: label === null || !Number.isFinite(label) ? label : Number(label.toFixed(3)),
      closeFocusM: closeFocusAtZoom(zoomT, L),
    });
  }
  return rows;
}
