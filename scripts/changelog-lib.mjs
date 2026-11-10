/**
 * Changelog compiler: entry files → validated, ordered entries.
 *
 * Every user-facing change is one file, `src/content/changelog/<YYYY-MM>/<YYYY-MM-DD>-<type>-<subject>.txt`. The path
 * carries the date and type and the file's single line is the summary, so parallel pull requests add files instead of
 * editing one shared list. `generate-build-metadata.mjs` writes the result to `src/generated/changelog.json`, which the
 * site, RSS feeds and SEO audit read. Authoring rules: agent_docs/changelog.md.
 */

import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { CHANGELOG_ENTRY_TYPES, changelogEntryId } from "../src/utils/content/changelogHelpers.ts";

export const CHANGELOG_SUBJECT_MAX_LENGTH = 48;

const MONTH_FOLDER = /^\d{4}-\d{2}$/;
const ENTRY_FILE = /^(\d{4}-\d{2}-\d{2})-([a-z]+)-(.+)\.txt$/;
const KEBAB_SUBJECT = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const ENTRY_TYPES = new Set(CHANGELOG_ENTRY_TYPES);

function isCalendarDate(value) {
  const date = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(date.valueOf()) && date.toISOString().slice(0, 10) === value;
}

/** Every non-hidden file below `changelogDir`, as sorted `/`-separated relative paths. */
function listEntryFiles(changelogDir) {
  const files = [];
  const walk = (relativeDir) => {
    for (const name of readdirSync(join(changelogDir, relativeDir))) {
      if (name.startsWith(".")) continue;
      const relativePath = relativeDir ? `${relativeDir}/${name}` : name;
      if (statSync(join(changelogDir, relativePath)).isDirectory()) walk(relativePath);
      else files.push(relativePath);
    }
  };
  walk("");
  return files.sort();
}

/** Parse one relative entry path; returns `{ entry fields }` or `{ problem }`. */
function parseEntryPath(relativePath) {
  const parts = relativePath.split("/");
  const fileMatch = parts.length === 2 ? ENTRY_FILE.exec(parts[1]) : null;
  if (!fileMatch || !MONTH_FOLDER.test(parts[0])) {
    return { problem: "path must be <YYYY-MM>/<YYYY-MM-DD>-<type>-<subject>.txt" };
  }

  const [, date, type, subject] = fileMatch;
  if (!isCalendarDate(date)) return { problem: `"${date}" is not a calendar date` };
  if (date.slice(0, 7) !== parts[0]) return { problem: `a ${date} entry belongs in the ${date.slice(0, 7)}/ folder` };
  if (!ENTRY_TYPES.has(type)) {
    return { problem: `unknown type "${type}" (expected one of ${CHANGELOG_ENTRY_TYPES.join(", ")})` };
  }
  if (!KEBAB_SUBJECT.test(subject)) return { problem: `subject "${subject}" must be lowercase kebab-case a-z/0-9` };
  if (subject.length > CHANGELOG_SUBJECT_MAX_LENGTH) {
    return { problem: `subject is ${subject.length} characters; keep it to ${CHANGELOG_SUBJECT_MAX_LENGTH}` };
  }
  return { date, type };
}

/** The summary line, or `{ problem }`. A UTF-8 BOM and one trailing newline are tolerated. */
function parseEntryText(raw) {
  const text = raw.replace(/^\uFEFF/, "").replace(/\r?\n$/, "");
  if (/[\r\n]/.test(text)) return { problem: "text must be a single line" };
  if (text.trim() === "") return { problem: "text is empty" };
  if (text !== text.trim()) return { problem: "text has leading or trailing whitespace" };
  return { summary: text };
}

function compareEntries(a, b) {
  if (a.date !== b.date) return a.date < b.date ? 1 : -1;
  return a.path < b.path ? -1 : a.path > b.path ? 1 : 0;
}

/**
 * Read, validate and order every entry under `changelogDir`: newest date first, then file-name order within a day (so
 * the page lists a day's entries as its folder does). Throws one error naming every invalid file.
 */
export function collectChangelog({ changelogDir }) {
  if (!existsSync(changelogDir)) throw new Error(`Changelog directory not found: ${changelogDir}`);

  const problems = [];
  const parsed = [];
  const pathsById = new Map();
  for (const path of listEntryFiles(changelogDir)) {
    const location = parseEntryPath(path);
    if (location.problem) {
      problems.push(`  - ${path}: ${location.problem}`);
      continue;
    }
    const text = parseEntryText(readFileSync(join(changelogDir, path), "utf-8"));
    if (text.problem) {
      problems.push(`  - ${path}: ${text.problem}`);
      continue;
    }

    const entry = { date: location.date, type: location.type, summary: text.summary };
    const id = changelogEntryId(entry);
    const duplicateOf = pathsById.get(id);
    if (duplicateOf) {
      problems.push(`  - ${path}: same date, type and text as ${duplicateOf}`);
      continue;
    }
    pathsById.set(id, path);
    parsed.push({ ...entry, path });
  }

  if (problems.length > 0) {
    throw new Error(
      `Found ${problems.length} invalid changelog entr${problems.length === 1 ? "y" : "ies"} under ${changelogDir}:\n` +
        problems.join("\n") +
        "\nSee agent_docs/changelog.md for the entry file format.",
    );
  }

  return parsed.sort(compareEntries).map(({ date, type, summary }) => ({ date, type, summary }));
}
