/**
 * Lens and teleconverter summaries — the lightweight fields index-style pages read instead of full prescriptions.
 *
 * Display DTOs keep their established flat field names. Metadata reads files through the public canonical ingest
 * seam, then selects only summary fields. Metadata does not load a V1 printer.
 */

import { register } from "node:module";

let prescriptionIngest;

/** Metadata and audits load ingest without importing either conversion printer. */
export async function loadPrescriptionIngest() {
  if (!prescriptionIngest) {
    register("./ts-js-specifier-hook.mjs", import.meta.url);
    prescriptionIngest = await import(new URL("../src/optics/buildLens.ts", import.meta.url).href);
  }
  return prescriptionIngest;
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

/** Read a file into its canonical prescription; conversion views are reserved for the converter. */
export async function canonicalPrescription(file, kind, path, loadIngest = loadPrescriptionIngest) {
  const ingest = await loadIngest();
  return (kind === "lens" ? ingest.ingestLens(file, { path }) : ingest.ingestTeleconverter(file, { path }))
    .prescription;
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
 * @param {Record<string, unknown>} data - the canonical lens
 * @returns {Record<string, unknown>} its summary fields
 */
export function lensSummary(data) {
  const summary = pick(
    {
      key: data.key,
      name: data.name,
      maker: data.maker,
      ...data.catalog,
      focalLengthMarketing: data.catalog.focalLengthMm?.marketing,
      apertureMarketing: data.catalog.fNumber?.marketing,
      apertureDesign: data.catalog.fNumber?.design,
      nominalFno: data.aperture.nominalFNumber ?? data.zoom?.stations.map((station) => station.nominalFNumber),
      patentNumber: data.source.patentNumber,
      patentAuthors: data.source.authors,
      patentAssignees: data.source.assignees,
      patentYear: data.source.patentYear,
    },
    SUMMARY_FIELDS,
  );
  /* Mirror the runtime defaults merge for the one summary-relevant default */
  summary.visible = data.visible !== false;
  return summary;
}

/**
 * The summary of one teleconverter, with the visible lenses it fits.
 *
 * @param {Record<string, unknown>} data - the canonical converter
 * @param {readonly Record<string, unknown>[]} visibleLenses - every visible canonical lens
 * @param {(host: unknown, converter: unknown) => { ok: boolean }} teleconverterCompatibility - the fit predicate
 * @returns {Record<string, unknown>} its summary fields and `compatibleLensKeys`
 */
export function teleconverterSummary(data, visibleLenses, teleconverterCompatibility) {
  const summary = pick(
    {
      key: data.key,
      name: data.name,
      maker: data.maker,
      subtitle: data.subtitle,
      ...data.catalog,
      magnification: data.magnification,
      universal: data.universal,
      minHostFno: data.minHostFNumber,
      patentNumber: data.source.patentNumber,
      patentAuthors: data.source.authors,
      patentAssignees: data.source.assignees,
      patentYear: data.source.patentYear,
    },
    TELECONVERTER_SUMMARY_FIELDS,
  );
  summary.visible = data.visible !== false;
  summary.compatibleLensKeys = visibleLenses
    .filter((lens) => teleconverterCompatibility(lens, data).ok)
    .map((lens) => lens.key);
  return summary;
}
