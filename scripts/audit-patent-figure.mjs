/**
 * Patent cross-section photogrammetry.
 *
 * Renders one page of a patent PDF to grayscale, measures how tall the drawn
 * elements are column by column, and reports each element's drawn semi-diameter
 * beside the value stored in the lens data file.
 *
 * The figure's scale is unknown, so it is recovered from the axial direction: the
 * drawn glass span in pixels is mapped onto the data file's glass z-extent in mm.
 * Axial thicknesses come straight from the patent table, so that anchor does not
 * depend on the semi-diameters being audited.
 *
 * Two independent measurements are taken per column and both are printed, so a
 * disagreement flags a figure that needs a human look rather than producing a
 * silent wrong number:
 *
 *   ENV  outermost ink in the column, taking the smaller of the two half
 *        envelopes about the axis. Labels, leader lines and one-sided ray bundles
 *        sit on one side only and drop out. Over-reads where a drawn bundle or a
 *        group bracket straddles the axis outside the glass.
 *   RIM  longest vertical dark run in the column, keeping its outer end and
 *        requiring mirrored ink across the axis. Rays are never vertical, so this
 *        is immune to them; it under-reads elements whose drawn edge is only a
 *        pixel or two tall.
 *
 * Treat the output as screening, not measurement: every number that matters
 * should be confirmed against a zoomed render of the figure. See
 * agent_docs/patent-figure-sd-audit-procedure.md.
 *
 * Requires poppler (`pdftoppm`).
 *
 * Usage:
 *   node scripts/audit-patent-figure.mjs <data.ts> <patent.pdf> <page> <x0,y0,x1,y1> [flags]
 *
 * The crop is given as fractions of the page (after rotation), and must bracket
 * the glass and nothing else — no image plane, no cover-glass plate, no
 * neighbouring panel.
 *
 * Flags:
 *   --rot90 / --rot270   sheet prints the optical axis vertically
 *   --flip               figure is drawn image-side-left
 *   --dpi=<n>            render resolution (default 300)
 */

import { execFileSync } from "node:child_process";
import { readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const ROOT = join(import.meta.dirname, "..");
const { conicPolySag } = await import(pathToFileURL(join(ROOT, "src/optics/internal/surfaceMath.ts")).href);

const [dataFile, pdf, pageArg, cropArg, ...flags] = process.argv.slice(2);
if (!dataFile || !pdf || !pageArg || !cropArg) {
  console.error("usage: node scripts/audit-patent-figure.mjs <data.ts> <patent.pdf> <page> <x0,y0,x1,y1> [flags]");
  process.exit(2);
}
const page = Number(pageArg);
if (!Number.isInteger(page) || page < 1) {
  console.error(`<page> must be a finite integer >= 1, got "${pageArg}"`);
  process.exit(2);
}
const dpi = Number((flags.find((flag) => flag.startsWith("--dpi=")) ?? "--dpi=300").split("=")[1]);
if (!Number.isFinite(dpi) || dpi <= 0) {
  console.error("--dpi must be a finite positive number");
  process.exit(2);
}
const flip = flags.includes("--flip");
const rotation = flags.includes("--rot90") ? 90 : flags.includes("--rot270") ? 270 : 0;
const crop = cropArg.split(",").map(Number);
if (crop.length !== 4 || crop.some((value) => !Number.isFinite(value) || value < 0 || value > 1)) {
  console.error(`<x0,y0,x1,y1> must be four page fractions in [0,1], got "${cropArg}"`);
  process.exit(2);
}

/* ── render and parse the page as binary PGM ── */
const prefix = join(tmpdir(), `patentfig_${process.pid}`);
execFileSync("pdftoppm", ["-gray", "-r", String(dpi), "-f", String(page), "-l", String(page), pdf, prefix]);
const padded = page < 10 ? `0${page}` : String(page);
let pgmPath = `${prefix}-${padded}.pgm`;
let buffer;
try {
  buffer = readFileSync(pgmPath);
} catch {
  pgmPath = `${prefix}-${page}.pgm`;
  buffer = readFileSync(pgmPath);
}

let cursor = 0;
/** Read the next whitespace-delimited PGM header token, skipping comments. */
function nextToken() {
  while (cursor < buffer.length) {
    const code = buffer[cursor];
    if (code === 0x23) while (cursor < buffer.length && buffer[cursor] !== 0x0a) cursor++;
    else if (code === 0x20 || code === 0x09 || code === 0x0a || code === 0x0d) cursor++;
    else break;
  }
  const start = cursor;
  while (cursor < buffer.length && ![0x20, 0x09, 0x0a, 0x0d].includes(buffer[cursor])) cursor++;
  return buffer.toString("ascii", start, cursor);
}
const magic = nextToken();
if (magic !== "P5") throw new Error(`unexpected PGM magic "${magic}"`);
const pageWidth = Number(nextToken());
const pageHeight = Number(nextToken());
const maxValue = Number(nextToken());
cursor++;
const pixels = buffer.subarray(cursor, cursor + pageWidth * pageHeight);
rmSync(pgmPath, { force: true });

const rawPixel = (x, y) => pixels[y * pageWidth + x];
const sample =
  rotation === 0
    ? rawPixel
    : rotation === 90
      ? (x, y) => rawPixel(y, pageHeight - 1 - x)
      : (x, y) => rawPixel(pageWidth - 1 - y, x);
const imageWidth = rotation === 0 ? pageWidth : pageHeight;
const imageHeight = rotation === 0 ? pageHeight : pageWidth;
const isDark = (x, y) => sample(x, y) < maxValue * 0.55;

const cropX0 = Math.round(crop[0] * imageWidth);
const cropY0 = Math.round(crop[1] * imageHeight);
const cropX1 = Math.round(crop[2] * imageWidth);
const cropY1 = Math.round(crop[3] * imageHeight);

/* ── locate the optical axis: the row spanning the widest run of ink ── */
let axisY = -1;
let bestScore = -1;
for (let y = cropY0; y < cropY1; y++) {
  let count = 0;
  let first = -1;
  let last = -1;
  for (let x = cropX0; x < cropX1; x++) {
    if (!isDark(x, y)) continue;
    count++;
    if (first < 0) first = x;
    last = x;
  }
  const span = last - first;
  const score = span * Math.min(1, count / Math.max(1, span * 0.3));
  if (score > bestScore) {
    bestScore = score;
    axisY = y;
  }
}

/* ── measure both envelopes ── */
const minRun = Math.max(3, Math.round((dpi / 300) * 5));
const envelope = [];
const rims = [];
for (let x = cropX0; x < cropX1; x++) {
  let above = 0;
  let below = 0;
  let inkAbove = false;
  let inkBelow = false;
  for (let y = cropY0; y < cropY1; y++) {
    if (!isDark(x, y)) continue;
    if (y <= axisY) {
      inkAbove = true;
      above = Math.max(above, axisY - y);
    } else {
      inkBelow = true;
      below = Math.max(below, y - axisY);
    }
  }
  envelope.push({ x, h: inkAbove && inkBelow ? Math.min(above, below) : 0 });

  let bestRim = 0;
  let run = 0;
  for (let y = cropY0; y <= cropY1; y++) {
    if (y < cropY1 && isDark(x, y)) {
      run++;
      continue;
    }
    if (run >= minRun) {
      for (const edgeY of [y - run, y - 1]) {
        const distance = Math.abs(edgeY - axisY);
        if (distance <= bestRim) continue;
        const mirrorY = 2 * axisY - edgeY;
        let mirrored = false;
        for (let offset = -3; offset <= 3 && !mirrored; offset++) {
          const probeY = mirrorY + offset;
          if (probeY >= cropY0 && probeY < cropY1 && isDark(x, probeY)) mirrored = true;
        }
        if (mirrored) bestRim = distance;
      }
    }
    run = 0;
  }
  rims.push({ x, h: bestRim });
}

/* The axial span sets mm-per-pixel, so it must bracket the glass and nothing
 * else. RIM is used for it: figures that draw entering ray bundles have ENV ink
 * running off the sheet well beyond the front element, which would silently
 * truncate the span against the crop edge and rescale every measurement. */
const inked = rims.filter((column) => column.h > 0);
if (!inked.length) throw new Error("no element edges found — check the crop, rotation, and page number");
const leftX = inked[0].x;
const rightX = inked[inked.length - 1].x;
const truncated = leftX <= cropX0 + 1 || rightX >= cropX1 - 2;

/* ── the data file's own silhouette ── */
const lens = (await import(pathToFileURL(resolve(dataFile)).href)).default;
const aspheres = lens.asph ?? {};
let vertexZ = 0;
const surfaces = lens.surfaces.map((surface) => {
  const row = { ...surface, z: vertexZ };
  vertexZ += surface.d;
  return row;
});
const sagAt = (surface, height) => conicPolySag(height, surface.R, aspheres[surface.label]);

const elements = [];
for (let i = 0; i < surfaces.length; i++) {
  const front = surfaces[i];
  const rear = surfaces[i + 1];
  if (front.elemId === 0 || !rear) continue;
  const frontRimZ = front.z + sagAt(front, front.sd);
  const rearRimZ = rear.z + sagAt(rear, rear.sd);
  elements.push({
    name: lens.elements?.find((element) => element.id === front.elemId)?.name ?? `E${front.elemId}`,
    surfaces: `${front.label}/${rear.label}`,
    zMin: Math.min(frontRimZ, front.z, rearRimZ, rear.z),
    zMax: Math.max(frontRimZ, front.z, rearRimZ, rear.z),
    /* The drawn rim: the vertical edge joining the two surfaces at their SDs. */
    rimMin: Math.min(frontRimZ, rearRimZ),
    rimMax: Math.max(frontRimZ, rearRimZ),
    sd: Math.max(front.sd, rear.sd),
  });
}
const glassMinZ = Math.min(...elements.map((element) => element.zMin));
const glassMaxZ = Math.max(...elements.map((element) => element.zMax));
const mmPerPixel = (glassMaxZ - glassMinZ) / (rightX - leftX);
const toPixel = (z) => (flip ? rightX - (z - glassMinZ) / mmPerPixel : leftX + (z - glassMinZ) / mmPerPixel);

/* ── report ── */
if (truncated) console.log("!! WARNING: the glass span touches the crop edge — widen the crop and re-run");
console.log(`# ${lens.name}`);
console.log(`figure: ${pdf} page ${page} @${dpi}dpi, axis row ${axisY}, glass span ${leftX}..${rightX} px`);
console.log(
  `data glass z-extent ${glassMinZ.toFixed(2)}..${glassMaxZ.toFixed(2)} mm  →  scale ${(mmPerPixel * 1000).toFixed(2)} µm/px`,
);
console.log("");
console.log("elem    surfaces     rim z (mm)      sd(data)   ENV    RIM   agree   figure/data");

const padding = Math.max(2, Math.round(0.004 * Math.abs(rightX - leftX)));
const peakBetween = (columns, from, to) => {
  let peak = 0;
  for (const column of columns) if (column.x >= from && column.x <= to && column.h > peak) peak = column.h;
  return peak * mmPerPixel;
};
const ratios = [];
for (const element of elements) {
  const from = Math.round(Math.min(toPixel(element.rimMin), toPixel(element.rimMax))) - padding;
  const to = Math.round(Math.max(toPixel(element.rimMin), toPixel(element.rimMax))) + padding;
  const env = peakBetween(envelope, from, to);
  const rim = peakBetween(rims, from, to);
  /* RIM never over-reads and ENV never under-reads, so agreement brackets the truth. */
  const agree = env > 0 && rim > 0 && Math.abs(env - rim) / Math.max(env, rim) < 0.08;
  const best = agree ? (env + rim) / 2 : rim > 0 ? Math.min(env, rim) : env;
  const ratio = best / element.sd;
  ratios.push(ratio);
  console.log(
    `${element.name.padEnd(6)}  ${element.surfaces.padEnd(10)} ${element.rimMin.toFixed(2).padStart(7)}..${element.rimMax
      .toFixed(2)
      .padStart(7)}  ${element.sd.toFixed(2).padStart(7)}  ${env.toFixed(2).padStart(5)}  ${rim
      .toFixed(2)
      .padStart(5)}   ${agree ? " ok " : "DIFF"}   ${ratio.toFixed(3).padStart(8)}`,
  );
}

const sorted = [...ratios].sort((a, b) => a - b);
const median = sorted[Math.floor(sorted.length / 2)];
console.log("");
console.log(`median figure/data = ${median.toFixed(3)}  — a uniform offset means the whole lens is over/under-sized`);
console.log(
  "shape mismatch (ratio ÷ median): " +
    elements.map((element, index) => `${element.name}:${(ratios[index] / median).toFixed(2)}`).join(" "),
);
