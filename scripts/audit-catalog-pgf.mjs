/**
 * Catalog partial-dispersion census: `PgF` fields that disagree with the entry's own dispersion curve.
 *
 * A catalog entry's optional `PgF` is the vendor's own partial dispersion (rule in src/optics/glassCatalogTypes.ts).
 * Vendors publish a deviation ΔPgF beside it, each measured from its own normal line, so a field rebuilt as the
 * engine's line (`normalLinePgF` in src/optics/dispersion.ts) plus a vendor's ΔPgF is wrong by the gap between the
 * two lines. Rows marked `line gap` have that difference.
 *
 * The check is a screen, not a ruling: where a vendor's line runs close to the engine's the gap is small and nearly
 * constant, and an unrelated difference can equal it. A row that is not a line gap is a mistyped field, or a curve
 * that departs from the vendor's published formula (a refit, or another catalog edition); such an entry keeps the
 * vendor's value in the field and stays listed until its curve is settled. Read-only.
 *
 * Usage:
 *   node --import ./scripts/ts-js-specifier-hook-register.mjs scripts/audit-catalog-pgf.mjs
 *     --threshold=<n>  list differences above n (default 0.0005)
 *     --json=<path>    write the listed entries as JSON
 */

import { writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const ROOT = join(import.meta.dirname, "..");
const load = async (path) => import(pathToFileURL(join(ROOT, path)).href);

const { allEntries, evaluateSellmeier, LINE_NM } = await load("src/optics/glassCatalog.ts");
const { normalLinePgF } = await load("src/optics/dispersion.ts");

const args = process.argv.slice(2);
const flag = (name) => args.find((arg) => arg.startsWith(`--${name}=`))?.slice(name.length + 3);
const THRESHOLD = Number(flag("threshold") ?? 0.0005);
const JSON_PATH = flag("json");

/**
 * Each vendor's own P_g,F normal line, as printed in its catalog: the line its ΔPgF is measured from. Not engine
 * constants. Hikari's is fitted to the printed P_g,F − ΔP_g,F of its 2025 data workbook. Vendors without a line on
 * file here get no line-gap verdict.
 */
const VENDOR_LINE = {
  Schott: (vd) => normalLinePgF(vd), // K7 and F2: the engine's line, so no gap
  Hoya: (vd) => 0.6483 - 0.0018 * vd, // C7 and F2
  Ohara: (vd) => 0.6415 - 0.001618 * vd, // NSL7 and PBM2
  CDGM: (vd) => 0.6457 - 0.001703 * vd, // H-K6 and F4
  Hikari: (vd) => 0.6444 - 0.001678 * vd,
};
/** A difference within this of the line gap is the line gap. */
const GAP_FIT = 0.0003;

const signed = (value) => (value >= 0 ? "+" : "") + value.toFixed(4);
const listed = [];
const fields = {};

for (const entry of allEntries()) {
  if (entry.PgF === undefined) continue;
  fields[entry.vendor] = (fields[entry.vendor] ?? 0) + 1;
  const nC = evaluateSellmeier(entry, LINE_NM.C);
  const nF = evaluateSellmeier(entry, LINE_NM.F);
  const curve = (evaluateSellmeier(entry, LINE_NM.g) - nF) / (nF - nC);
  const difference = entry.PgF - curve;
  if (Math.abs(difference) <= THRESHOLD) continue;
  const vendorLine = VENDOR_LINE[entry.vendor];
  const lineGap = vendorLine ? normalLinePgF(entry.vd) - vendorLine(entry.vd) : null;
  listed.push({
    vendor: entry.vendor,
    name: entry.name,
    vd: entry.vd,
    field: entry.PgF,
    curve,
    difference,
    lineGap,
    isLineGap: lineGap !== null && Math.abs(difference - lineGap) < GAP_FIT,
  });
}

listed.sort((a, b) => a.vendor.localeCompare(b.vendor) || a.vd - b.vd);
for (const row of listed) {
  const verdict =
    row.lineGap === null
      ? "no vendor line on file"
      : `engine − vendor line ${signed(row.lineGap)}: ${row.isLineGap ? "line gap" : "not the line gap"}`;
  console.log(
    `${row.vendor.padEnd(8)}${row.name.padEnd(15)} νd ${row.vd.toFixed(2).padStart(6)}  field ${row.field.toFixed(4)}  ` +
      `curve ${row.curve.toFixed(4)}  ${signed(row.difference)}  ${verdict}`,
  );
}

const perVendor = Object.entries(fields)
  .map(([vendor, count]) => `${vendor} ${listed.filter((row) => row.vendor === vendor).length} of ${count}`)
  .join(", ");
console.log(
  `\n${listed.length} of ${Object.values(fields).reduce((sum, count) => sum + count, 0)} PgF fields are more than ` +
    `${THRESHOLD} from their curve (${perVendor}); ${listed.filter((row) => row.isLineGap).length} are line gaps`,
);
if (JSON_PATH) writeFileSync(resolve(JSON_PATH), JSON.stringify(listed, null, 1));
