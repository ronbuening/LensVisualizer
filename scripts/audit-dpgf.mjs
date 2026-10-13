/**
 * Partial-dispersion census: `dPgF` values that fit a source's normal line instead of the engine's.
 *
 * `dPgF` is a glass's partial dispersion PgF minus the engine's normal line, 0.6438 − 0.001682·νd
 * (`normalLinePgF` in src/optics/dispersion.ts); the g-line index is rebuilt from it. Many patents define their
 * deviation against another line, most often 0.64833 − 0.0018·νd, and a value copied from such a table is wrong by
 * 0.00453 − 0.000118·νd. src/lens-data/LENS_DATA_SPEC.md requires recovering the source's PgF first.
 *
 * The check is a screen, not a ruling. It compares each stored value with the PgF of the catalog glass the element
 * resolves to, and lists an element when the stored value fits the source line and misses the engine's. A melt whose
 * printed PgF differs from the catalog's by about the gap between the lines is listed too; the source decides.
 * Elements that author nC, nF and ng are marked `annotation`: the trace uses those indices and ignores `dPgF`.
 *
 * Usage:
 *   node --import ./scripts/ts-js-specifier-hook-register.mjs scripts/audit-dpgf.mjs [data.ts ...]
 *     --all        list every element that carries dPgF, with both readings, not only the flagged ones
 *     --json=<path>  write the flagged elements as JSON
 */

import { readdirSync, writeFileSync } from "node:fs";
import { join, relative, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const ROOT = join(import.meta.dirname, "..");
const LENS_DIR = join(ROOT, "src", "lens-data");
const load = async (path) => import(pathToFileURL(join(ROOT, path)).href);

const { resolveCompatibleGlass, evaluateSellmeier } = await load("src/optics/glassCatalog.ts");
const { normalLinePgF } = await load("src/optics/dispersion.ts");

const args = process.argv.slice(2);
const flag = (name) => args.find((arg) => arg.startsWith(`--${name}=`))?.slice(name.length + 3);
const ALL = args.includes("--all");
const JSON_PATH = flag("json");

/** The line most patents define their deviation against. Not an engine constant. */
const sourceLinePgF = (vd) => 0.64833 - 0.0018 * vd;
/** A stored value within this of a line's reading fits that line. */
const FIT = 0.0006;
/** A stored value further than this from a line's reading misses it. */
const MISS = 0.0012;
const LINE_NM = { C: 656.2725, F: 486.1327, g: 435.8343 };

function lensFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return lensFiles(path);
    return /\.(data|teleconverter)\.ts$/.test(entry.name) ? [path] : [];
  });
}

/** One row per element that carries `dPgF` and resolves to a d-line catalog glass. */
function readElement(element) {
  if (typeof element.dPgF !== "number" || typeof element.vd !== "number") return null;
  if (element.indexReference === "e" || !element.glass) return null;
  const entry = resolveCompatibleGlass(element.glass, element.nd, element.vd, element.indexReference);
  if (!entry) return null;
  const nC = evaluateSellmeier(entry, LINE_NM.C);
  const nF = evaluateSellmeier(entry, LINE_NM.F);
  const catalogPgF = (evaluateSellmeier(entry, LINE_NM.g) - nF) / (nF - nC);
  const onEngine = catalogPgF - normalLinePgF(element.vd);
  const onSource = catalogPgF - sourceLinePgF(element.vd);
  return {
    element: String(element.name ?? element.id),
    vd: element.vd,
    glass: entry.name,
    stored: element.dPgF,
    onEngine,
    onSource,
    flagged: Math.abs(element.dPgF - onSource) < FIT && Math.abs(element.dPgF - onEngine) > MISS,
    annotation: element.nC !== undefined && element.nF !== undefined && element.ng !== undefined,
  };
}

const named = args.filter((arg) => !arg.startsWith("--")).map((arg) => resolve(arg));
const files = named.length ? named : lensFiles(LENS_DIR).sort();
const signed = (value) => (value >= 0 ? "+" : "") + value.toFixed(6);
const flaggedRows = [];
let carrying = 0;
let read = 0;

for (const file of files) {
  const data = (await import(pathToFileURL(file).href)).default;
  const rows = (data.elements ?? []).map(readElement).filter(Boolean);
  if ((data.elements ?? []).some((element) => typeof element.dPgF === "number")) carrying++;
  read += rows.length;
  const shown = ALL ? rows : rows.filter((row) => row.flagged);
  if (!shown.length) continue;
  console.log(`${data.key}  (${relative(LENS_DIR, file)})`);
  for (const row of shown) {
    console.log(
      `  ${row.flagged ? "source-line" : "           "} ${row.element.padEnd(8)} νd ${String(row.vd).padEnd(6)} stored ${signed(row.stored)}  ` +
        `${row.glass}: ${signed(row.onEngine)} on the engine's line, ${signed(row.onSource)} on the source line` +
        (row.annotation ? "  [annotation]" : ""),
    );
    if (row.flagged) flaggedRows.push({ key: data.key, file: relative(ROOT, file), ...row });
  }
}

const flaggedLenses = new Set(flaggedRows.map((row) => row.key));
console.log(
  `\n${files.length} files, ${carrying} carry dPgF, ${read} elements read against a catalog glass: ` +
    `${flaggedRows.length} elements on ${flaggedLenses.size} lenses fit the source line`,
);
if (JSON_PATH) writeFileSync(resolve(JSON_PATH), JSON.stringify(flaggedRows, null, 1));
