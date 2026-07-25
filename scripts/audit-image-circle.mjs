/**
 * Image-circle coverage audit.
 *
 * A chief ray reaching image semi-height Y' comes from the exit pupil centre on
 * the axis, so at a distance t ahead of the image plane its height is
 * Y' − t·tanθ, where tanθ = Y'/L for exit-pupil distance L. Any surface there
 * must be at least that big or the format corner never arrives.
 *
 * L is not known without a trace, so the floor uses tanθ = max(1, Y'/f). The
 * `1` bounds θ at 45°, which every conventional camera lens stays under; the
 * `Y'/f` term takes over for wide designs, where it approximates L ≈ f. Both are
 * deliberately lenient — a surface below this floor is short by at least the
 * amount reported.
 *
 * The proxy stops being trustworthy once Y'/f exceeds about 0.9 (half-field past
 * ~42°). Symmetric ultra-wides put the exit pupil far closer to the image than f,
 * so their true floors are much lower and they are reported with a `wide` caveat:
 * treat those rows as "look at it", not as proven errors.
 *
 * This needs no patent and has no measurement error, which makes it the entry
 * point for the semi-diameter audit — see agent_docs/patent-figure-sd-audit-procedure.md.
 *
 * Usage:
 *   node scripts/audit-image-circle.mjs                  # whole catalog
 *   node scripts/audit-image-circle.mjs <data.ts> [...]  # named files
 *   node scripts/audit-image-circle.mjs --markdown       # queue-table output
 */

import { readdirSync } from "node:fs";
import { join, relative } from "node:path";
import { pathToFileURL } from "node:url";

const ROOT = join(import.meta.dirname, "..");
const LENS_DIR = join(ROOT, "src", "lens-data");

const { IMAGE_FORMAT_BY_ID } = await import(pathToFileURL(join(ROOT, "src/utils/catalog/lensTaxonomy.ts")).href);

/** Collect every `*.data.ts` under src/lens-data. */
function allLensFiles() {
  return readdirSync(LENS_DIR, { recursive: true })
    .filter((name) => typeof name === "string" && name.endsWith(".data.ts"))
    .map((name) => join(LENS_DIR, name))
    .sort();
}

/** First numeric value of a focal-length field, which zooms may store as a range. */
function firstFocalLength(value) {
  const candidate = Array.isArray(value) ? value[0] : value;
  return typeof candidate === "number" && isFinite(candidate) && candidate > 0 ? candidate : null;
}

/**
 * Ratio between the stored prescription and the production lens.
 *
 * Some files keep the patent's normalized prescription (f ≈ 1), so the image
 * circle has to be scaled into those units before anything can be compared.
 * Only clearly normalized files are rescaled; a rounded marketing focal length
 * is left alone.
 *
 * @param lens - lens data object
 * @returns multiplier to apply to real-world millimetres
 */
function prescriptionScale(lens) {
  const design = firstFocalLength(lens.focalLengthDesign);
  const marketing = firstFocalLength(lens.focalLengthMarketing);
  if (!design || !marketing) return 1;
  const ratio = design / marketing;
  return ratio < 0.5 || ratio > 2 ? ratio : 1;
}

/**
 * Audit one lens file.
 *
 * @param file - absolute path to a `*.data.ts`
 * @returns per-lens verdict, or a skip reason when the check does not apply
 */
async function auditLens(file) {
  const lens = (await import(pathToFileURL(file).href)).default;
  const rel = relative(ROOT, file);
  const format = IMAGE_FORMAT_BY_ID[lens.imageFormat];
  if (!format) return { rel, name: lens.name, skipped: `no usable imageFormat (${String(lens.imageFormat)})` };
  /* Folded systems route the beam through mirrors, so the axial gap between a
   * surface vertex and the image plane is not the distance the ray travels. */
  if (lens.opticalPath) return { rel, name: lens.name, skipped: "folded optical path" };

  const scale = prescriptionScale(lens);
  const semiDiagonal = (format.diagonalMm / 2) * scale;
  const focalLength = firstFocalLength(lens.focalLengthDesign) ?? firstFocalLength(lens.focalLengthMarketing);
  if (!focalLength) return { rel, name: lens.name, skipped: "no usable focal length" };

  const fieldSlope = Math.max(1, semiDiagonal / focalLength);
  const wide = semiDiagonal / focalLength > 0.9;

  let z = 0;
  const surfaces = lens.surfaces.map((surface) => {
    const row = { ...surface, z };
    z += surface.d;
    return row;
  });
  const imageZ = z;

  const violations = [];
  for (const surface of surfaces) {
    if (surface.label === "STO") continue;
    const t = imageZ - surface.z;
    const floor = semiDiagonal - t * fieldSlope;
    if (floor > 0 && surface.sd < floor) {
      violations.push({ label: surface.label, sd: surface.sd, floor, t, shortfall: floor - surface.sd });
    }
  }
  return { rel, name: lens.name, format: lens.imageFormat, semiDiagonal, scale, wide, violations };
}

const args = process.argv.slice(2);
const markdown = args.includes("--markdown");
const named = args.filter((arg) => !arg.startsWith("--"));
const files = named.length ? named.map((arg) => join(process.cwd(), arg)) : allLensFiles();

const results = [];
for (const file of files) results.push(await auditLens(file));

const failed = results
  .filter((result) => result.violations?.length)
  .map((result) => ({ ...result, worst: Math.max(...result.violations.map((v) => v.shortfall)) }))
  .sort((a, b) => b.worst - a.worst);
const skipped = results.filter((result) => result.skipped);

if (markdown) {
  console.log("| Lens | File | Format | Surfaces below floor | Worst shortfall | Note |");
  console.log("|---|---|---|---|---|---|");
  for (const lens of failed) {
    const surfaces = lens.violations.map((v) => `${v.label} (${v.sd.toFixed(2)} < ${v.floor.toFixed(2)})`).join(", ");
    const note = lens.wide ? "wide — verify by trace" : "";
    console.log(
      `| ${lens.name} | \`${lens.rel}\` | ${lens.format} | ${surfaces} | ${lens.worst.toFixed(2)} mm | ${note} |`,
    );
  }
} else {
  for (const lens of failed) {
    const caveat = lens.wide ? "  (wide — exit-pupil proxy unreliable, verify by trace)" : "";
    const scaled = lens.scale === 1 ? "" : `, prescription scale ${lens.scale.toFixed(4)}`;
    console.log(`UNDERSIZED  ${lens.name}  [${lens.format}, Y'=${lens.semiDiagonal.toFixed(2)} mm${scaled}]${caveat}`);
    console.log(`            ${lens.rel}`);
    for (const v of lens.violations) {
      console.log(
        `    surface ${v.label.padEnd(4)} at t=${v.t.toFixed(2)} mm before image: sd=${v.sd.toFixed(2)} < floor ${v.floor.toFixed(2)} mm  (short by ${v.shortfall.toFixed(2)})`,
      );
    }
  }
  console.log("");
  const noun = results.length === 1 ? "lens" : "lenses";
  console.log(`${results.length} ${noun} checked · ${failed.length} undersized · ${skipped.length} skipped`);
  for (const lens of skipped) console.log(`    skipped: ${lens.name ?? lens.rel} — ${lens.skipped}`);
}

process.exitCode = failed.length ? 1 : 0;
