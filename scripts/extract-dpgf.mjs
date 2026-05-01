/**
 * One-shot codemod: extract numeric dPgF values trapped in `apdNote` prose
 * and emit them as a structured `dPgF` field on the same element.
 *
 * Run with: node scripts/extract-dpgf.mjs [--dry-run]
 *
 * The script preserves `apdNote` text verbatim; it only adds a sibling field.
 * Existing `dPgF:` fields are detected and skipped to make this re-runnable.
 * After running, execute `npm run format` to normalize whitespace.
 */

import { fileURLToPath } from "node:url";
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = join(import.meta.dirname, "..");
const LENS_DATA_DIR = join(ROOT, "src", "lens-data");
const DRY_RUN = process.argv.includes("--dry-run");
const IS_MAIN = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];

/**
 * Patterns that pull a signed decimal out of an apdNote string.
 * Order matters — first match wins. All capture the value at group 1.
 *
 * Notation map:
 *   dPgF, ΔPgF, ΔPg,F, ΔP(g,F), ΔP_g,F  — partial-dispersion deviation P_g,F − P_g,F(normal)
 *   ΔθgF, Δθ_g,F                         — equivalent quantity in θ-notation
 * All map to the same physical number, written into `dPgF`.
 */
const NUM = String.raw`[+\-−±]?\s*\d+(?:\.\d+)?`;
const PATTERNS = [
  new RegExp(String.raw`(?:dPgF|ΔPgF|ΔPg,F|ΔP\(g,F\)|ΔP_g,F|ΔθgF|Δθ_g,F)\s*(?:=|≈|approx)\s*(${NUM})`, "u"),
];

/** Normalize a captured numeric string to a JS number. */
function toNumber(raw) {
  const cleaned = raw.replace(/\s+/g, "").replace(/−/g, "-").replace(/±/g, "+");
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : null;
}

/** Extract a dPgF value from an apdNote string, or null if none parseable. */
function extractDPgF(note) {
  for (const re of PATTERNS) {
    const m = re.exec(note);
    if (m) {
      const n = toNumber(m[1]);
      if (n !== null) return n;
    }
  }
  return null;
}

/** Walk a directory tree returning absolute paths matching the predicate. */
function walk(dir, pred, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const s = statSync(full);
    if (s.isDirectory()) walk(full, pred, out);
    else if (pred(full)) out.push(full);
  }
  return out;
}

/**
 * Find the start of the enclosing object literal containing `apdNote:` at
 * `apdNoteOffset`. Walks backward, tracking braces. Returns the offset of the
 * `{` that opens the current element block, or 0 if none found.
 */
function findElementStart(text, apdNoteOffset) {
  let depth = 0;
  for (let i = apdNoteOffset - 1; i >= 0; i--) {
    const c = text[i];
    if (c === "}") depth++;
    else if (c === "{") {
      if (depth === 0) return i;
      depth--;
    }
  }
  return 0;
}

function run() {
  const files = walk(LENS_DATA_DIR, (p) => p.endsWith(".data.ts"));
  let filesChanged = 0;
  let elementsTagged = 0;
  const skips = [];

  for (const path of files) {
    const original = readFileSync(path, "utf8");
    // Match `apdNote: "..."` with simple non-greedy string content.
    // Lens data files use plain double-quoted strings without escaped quotes inside apdNote.
    const apdNoteRe = /apdNote:\s*"([^"\n]*)"/g;
    const edits = [];
    let m;
    while ((m = apdNoteRe.exec(original)) !== null) {
      const note = m[1];
      if (!note) continue;
      const value = extractDPgF(note);
      if (value === null) continue;
      const elementStart = findElementStart(original, m.index);
      const elementSlice = original.slice(elementStart, m.index);
      if (/\bdPgF\s*:/.test(elementSlice)) {
        skips.push(`${path} (already has dPgF near offset ${m.index})`);
        continue;
      }
      edits.push({ at: m.index, insert: `dPgF: ${value}, ` });
    }

    if (edits.length === 0) continue;

    // Apply edits back-to-front so earlier offsets stay valid.
    edits.sort((a, b) => b.at - a.at);
    let updated = original;
    for (const e of edits) {
      updated = updated.slice(0, e.at) + e.insert + updated.slice(e.at);
    }

    if (!DRY_RUN) writeFileSync(path, updated, "utf8");
    filesChanged++;
    elementsTagged += edits.length;
    const rel = path.slice(ROOT.length + 1);
    console.log(`${DRY_RUN ? "[dry] " : ""}${rel} — tagged ${edits.length} element(s)`);
  }

  console.log("");
  console.log(`Files changed: ${filesChanged}`);
  console.log(`Elements tagged: ${elementsTagged}`);
  if (skips.length) console.log(`Skipped (already tagged): ${skips.length}`);
  if (DRY_RUN) console.log("Dry run — no files written. Re-run without --dry-run to apply.");
  else console.log("Run `npm run format` to normalize whitespace.");
}

if (IS_MAIN) run();
