/**
 * Compares the report preview from `npm run generate:reports` (the gitignored `.reports/` tree) with the
 * committed reports in agent_docs/generated/, so a branch sees its effect without committing report output
 * (agent_docs/decisions.md, 2026-11-27).
 *
 * The committed files are refreshed on main after every merge, so on an up-to-date branch the difference is
 * this branch's own effect. Each changed report is listed with its added and removed line counts, followed
 * by the diff of its `## Summary` section (the catalog-wide totals), or of its first changed lines when it
 * has none. The quality workflow writes the `--markdown` form to the pull request's job summary.
 *
 * Usage: npm run reports:diff [-- --full | --markdown]
 *   --full      also print the complete unified diff of every changed report
 *   --markdown  emit GitHub-flavored markdown (job summary) instead of plain text
 */
import { spawnSync } from "node:child_process";
import { existsSync, mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, relative } from "node:path";

const TRACKED_DIR = "agent_docs/generated";
const PREVIEW_DIR = join(".reports", TRACKED_DIR);
const EXCERPT_LINES = 40;

const args = process.argv.slice(2);
const markdown = args.includes("--markdown");
const full = args.includes("--full");

function filesUnder(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { recursive: true, withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => relative(dir, join(entry.parentPath, entry.name)))
    .sort();
}

/** `git diff --no-index` exits 1 when the files differ; anything above that is a real failure. */
function gitDiff(diffArgs) {
  const result = spawnSync("git", ["diff", "--no-index", "--no-color", ...diffArgs], { encoding: "utf8" });
  if (result.status !== 0 && result.status !== 1) throw new Error(result.stderr || "git diff failed");
  return result.stdout;
}

/** Changed lines of a unified diff, without file headers or hunk markers. */
const changedLines = (diff) =>
  diff.split("\n").filter((line) => /^[-+]/.test(line) && !line.startsWith("---") && !line.startsWith("+++"));

/** Report names for a sentence: markdown reports by name, figure files (the mount SVGs) as a count per folder. */
function describe(files) {
  const named = files.filter((file) => file.endsWith(".md")).map((file) => `\`${file}\``);
  const perFolder = new Map();
  for (const file of files.filter((name) => !name.endsWith(".md"))) {
    const folder = file.includes("/") ? file.slice(0, file.lastIndexOf("/")) : ".";
    perFolder.set(folder, (perFolder.get(folder) ?? 0) + 1);
  }
  return [...named, ...[...perFolder].map(([folder, count]) => `${count} files under \`${folder}/\``)].join(", ");
}

/** The `## Summary` section of a markdown report, or null when it has none. */
function summarySection(text) {
  const lines = text.split("\n");
  const start = lines.findIndex((line) => line.trim() === "## Summary");
  if (start === -1) return null;
  const end = lines.findIndex((line, index) => index > start && line.startsWith("## "));
  return `${lines.slice(start, end === -1 ? undefined : end).join("\n")}\n`;
}

function excerpt(trackedPath, previewPath, scratch) {
  if (!trackedPath.endsWith(".md")) return { label: "first changed lines", lines: [] };
  const before = summarySection(readFileSync(trackedPath, "utf8"));
  const after = summarySection(readFileSync(previewPath, "utf8"));
  if (before !== null && after !== null) {
    const a = join(scratch, "before.md");
    const b = join(scratch, "after.md");
    writeFileSync(a, before);
    writeFileSync(b, after);
    const lines = changedLines(gitDiff(["-U0", a, b]));
    if (lines.length > 0) return { label: "summary", lines };
  }
  return { label: "first changed lines", lines: changedLines(gitDiff(["-U0", trackedPath, previewPath])) };
}

if (!existsSync(PREVIEW_DIR)) {
  console.error("reports:diff: no preview found; run `npm run generate:reports` (or one of its subsets) first.");
  process.exit(1);
}

const previewFiles = filesUnder(PREVIEW_DIR);
const trackedFiles = filesUnder(TRACKED_DIR);
const notRegenerated = trackedFiles.filter((file) => !previewFiles.includes(file));
const scratch = mkdtempSync(join(tmpdir(), "reports-diff-"));
const changed = [];
let unchanged = 0;

try {
  for (const file of previewFiles) {
    const previewPath = join(PREVIEW_DIR, file);
    const trackedPath = join(TRACKED_DIR, file);
    if (!existsSync(trackedPath)) {
      changed.push({ file, added: readFileSync(previewPath, "utf8").split("\n").length - 1, removed: 0, isNew: true });
      continue;
    }
    const numstat = gitDiff(["--numstat", trackedPath, previewPath]).trim();
    if (numstat === "") {
      unchanged++;
      continue;
    }
    const [added, removed] = numstat.split("\t").map(Number);
    changed.push({ file, added, removed, isNew: false, ...excerpt(trackedPath, previewPath, scratch) });
  }

  const out = [];
  if (markdown) {
    out.push("## Generated report preview", "");
    out.push(
      changed.length === 0
        ? "**No report changes.** Every regenerated report matches the committed copy."
        : `**${changed.length}** report file${changed.length === 1 ? "" : "s"} would change when this branch merges. ` +
            "`main` refreshes them after merge; this pull request must not commit them.",
      "",
    );
    if (changed.length > 0) {
      out.push("| Report | Added | Removed |", "|---|---:|---:|");
      for (const { file, added, removed, isNew } of changed)
        out.push(`| \`${file}\`${isNew ? " (new)" : ""} | ${added} | ${removed} |`);
      out.push("");
      for (const { file, label, lines } of changed.filter((entry) => entry.lines?.length)) {
        const shown = lines.slice(0, EXCERPT_LINES);
        out.push(`<details><summary><code>${file}</code>: ${label}</summary>`, "", "```diff", ...shown);
        if (lines.length > shown.length) out.push(`… ${lines.length - shown.length} more changed lines`);
        out.push("```", "", "</details>", "");
      }
    }
    out.push(`${unchanged} regenerated report file${unchanged === 1 ? "" : "s"} unchanged.`);
    if (notRegenerated.length > 0)
      out.push("", `Not regenerated in this run (left as committed): ${describe(notRegenerated)}.`);
  } else {
    if (changed.length === 0) out.push("reports:diff: no report changes.");
    for (const { file, added, removed, isNew, label, lines } of changed) {
      out.push(`${file}${isNew ? " (new)" : ""}: +${added} -${removed}`);
      if (lines?.length) {
        out.push(`  ${label}:`, ...lines.slice(0, EXCERPT_LINES).map((line) => `    ${line}`));
        if (lines.length > EXCERPT_LINES) out.push(`    … ${lines.length - EXCERPT_LINES} more changed lines`);
      }
    }
    out.push(`${unchanged} unchanged; ${notRegenerated.length} committed report files not regenerated in this run.`);
  }
  console.log(out.join("\n"));

  if (full) {
    for (const { file, isNew } of changed) {
      if (isNew) continue;
      console.log(gitDiff([join(TRACKED_DIR, file), join(PREVIEW_DIR, file)]));
    }
  }
} finally {
  rmSync(scratch, { recursive: true, force: true });
}
