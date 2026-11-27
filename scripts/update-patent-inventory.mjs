/**
 * Records the PDF filenames of the untracked local `patents/` archive in the committed
 * `reports/data/patent-inventory.txt`.
 *
 * The six-digit and glass-coverage-opportunities reports match lenses against these filenames (never
 * the PDFs themselves), so committing the names lets the post-merge refresh on a CI runner, which
 * holds no PDFs, produce the same reports as the machine that does (agent_docs/decisions.md,
 * 2026-11-27). `reports/glassScanLib.ts` (`parsePatentInventory`) reads the format written here.
 *
 * Names are only added by default: a checkout holding just one package's PDFs must not shrink the
 * list. On the machine with the full archive, `--prune` also drops names whose PDFs are gone.
 *
 * Usage: npm run patents:inventory [-- --prune]
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const MANIFEST = "reports/data/patent-inventory.txt";
const PATENTS_DIR = "patents";
const HEADER = [
  "# PDF filenames in the untracked local patents/ archive, one per line; the PDFs are never committed.",
  "# The patent-dependent glass reports match lenses against these names. Update: npm run patents:inventory",
];

const byName = (a, b) => a.localeCompare(b);
const isPdf = (name) => name.toLowerCase().endsWith(".pdf");

/** Same rules as parsePatentInventory in reports/glassScanLib.ts: skip blank and `#` lines. */
function readManifest() {
  if (!existsSync(MANIFEST)) return [];
  return readFileSync(MANIFEST, "utf8")
    .split("\n")
    .map((line) => line.replace(/\r$/, ""))
    .filter((line) => line.trim() !== "" && !line.startsWith("#"));
}

const prune = process.argv.includes("--prune");
const local = existsSync(PATENTS_DIR) ? readdirSync(PATENTS_DIR).filter(isPdf) : [];
if (local.length === 0) {
  console.error(`patents:inventory: no PDFs under ${PATENTS_DIR}/; run this where the patent archive is.`);
  process.exit(1);
}

const recorded = readManifest();
const names = [...new Set(prune ? local : [...recorded, ...local])].sort(byName);
const added = names.filter((name) => !recorded.includes(name));
const removed = recorded.filter((name) => !names.includes(name));

mkdirSync(dirname(MANIFEST), { recursive: true });
writeFileSync(MANIFEST, `${[...HEADER, ...names].join("\n")}\n`);
console.log(
  `patents:inventory: ${names.length} filenames in ${MANIFEST} (${added.length} added, ${removed.length} removed).`,
);
