/**
 * Lens and teleconverter summaries — the lightweight fields index-style pages read instead of full prescriptions.
 *
 * Summaries are written in V1 field names. A V1 file is read as it is. A V2 file (`schema: 2`) is read through the
 * engine's canonical ingest and its V1 view, so a V2 file and its V1 twin give the same summary, and the converter
 * fit predicate sees the same host and converter. Those engine functions come from the lens-data conversion seam,
 * `src/optics/lensDataConversion.ts`, loaded for every metadata run.
 */

import { register } from "node:module";

/* Named whole, so the seam guard sees which optics module this script loads. */
const LENS_DATA_CONVERSION_URL = new URL("../src/optics/lensDataConversion.ts", import.meta.url);

let lensDataConversion;

/**
 * Load the engine's lens-data conversion seam under plain Node. Its modules import one another by their `.js`
 * specifiers, so the specifier hook is registered first.
 *
 * @returns {Promise<import("./lens-summaries.d.mts").LensDataConversion>} canonical ingest, the V1 and V2 views,
 *   the V2 source map, the prescription comparison and the path spelling: every export of the seam
 */
export async function loadLensDataConversion() {
  if (!lensDataConversion) {
    register("./ts-js-specifier-hook.mjs", import.meta.url);
    lensDataConversion = await import(LENS_DATA_CONVERSION_URL.href);
  }
  return lensDataConversion;
}

/* Fields consumed by non-viewer pages (lens index, maker/mount/format pages,
 * updates, homepage cards). Keep in sync with the LensSummary type in
 * src/utils/catalog/lensSummaries.ts. */
export const SUMMARY_FIELDS = [
  "key",
  "name",
  "maker",
  "specs",
  "focalLengthMarketing",
  "apertureMarketing",
  "apertureDesign",
  "nominalFno",
  "patentNumber",
  "patentAuthors",
  "patentAssignees",
  "patentYear",
  "lensMounts",
  "imageFormat",
  "opticalConfiguration",
];

/* Fields consumed by the teleconverter pages and search. Keep in sync with the
 * TeleconverterSummary type in src/utils/catalog/teleconverterSummaries.ts. */
export const TELECONVERTER_SUMMARY_FIELDS = [
  "key",
  "name",
  "maker",
  "subtitle",
  "specs",
  "magnification",
  "lensMounts",
  "universal",
  "minHostFno",
  "patentNumber",
  "patentAuthors",
  "patentAssignees",
  "patentYear",
  "elementCount",
  "groupCount",
];

/**
 * A lens or teleconverter file in V1 field names: a V1 file as it is, a V2 file as its V1 view.
 *
 * @param {Record<string, unknown>} file - a file's evaluated default export
 * @param {"lens" | "teleconverter"} kind - which kind of file it is
 * @param {() => Promise<{ ingestLens: Function, ingestTeleconverter: Function, toLensDataInput: Function,
 *   toTeleconverterData: Function }>} [loadViews] - loads the engine's ingest and V1 views;
 *   the conversion seam by default
 * @returns {Promise<Record<string, unknown>>} the file in V1 field names
 */
export async function v1Prescription(file, kind, loadViews = loadLensDataConversion) {
  const { lensDataVersion } = await loadLensDataConversion();
  if (lensDataVersion(file) === 1) return file;
  const views = await loadViews();
  return kind === "lens"
    ? views.toLensDataInput(views.ingestLens(file))
    : views.toTeleconverterData(views.ingestTeleconverter(file));
}

/** Copy the listed fields a record defines. */
function pick(data, fields) {
  const summary = {};
  for (const field of fields) {
    if (data[field] !== undefined) summary[field] = data[field];
  }
  return summary;
}

/**
 * The summary of one lens.
 *
 * @param {Record<string, unknown>} data - the lens in V1 field names
 * @returns {Record<string, unknown>} its summary fields
 */
export function lensSummary(data) {
  const summary = pick(data, SUMMARY_FIELDS);
  /* Mirror the runtime defaults merge for the one summary-relevant default */
  summary.visible = data.visible !== false;
  return summary;
}

/**
 * The summary of one teleconverter, with the visible lenses it fits.
 *
 * @param {Record<string, unknown>} data - the converter in V1 field names
 * @param {readonly Record<string, unknown>[]} visibleLenses - every visible lens in V1 field names
 * @param {(host: unknown, converter: unknown) => { ok: boolean }} teleconverterCompatibility - the fit predicate
 * @returns {Record<string, unknown>} its summary fields and `compatibleLensKeys`
 */
export function teleconverterSummary(data, visibleLenses, teleconverterCompatibility) {
  const summary = pick(data, TELECONVERTER_SUMMARY_FIELDS);
  summary.visible = data.visible !== false;
  summary.compatibleLensKeys = visibleLenses
    .filter((lens) => teleconverterCompatibility(lens, data).ok)
    .map((lens) => lens.key);
  return summary;
}
