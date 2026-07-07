import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const repoRoot = process.cwd();

const ARCHITECTURE_DOCS_DIR = join(repoRoot, "agent_docs", "architecture");

const GUARDED_DOC_PATHS = [
  join(repoRoot, "CLAUDE.md"),
  ...readdirSync(ARCHITECTURE_DOCS_DIR)
    .filter((name) => name.endsWith(".md"))
    .map((name) => join(ARCHITECTURE_DOCS_DIR, name)),
];

/** Inline-code spans that look like repo paths and should resolve to real files/dirs. */
const REPO_PATH_PATTERN = /^(?:src|scripts|__tests__|agent_docs)\/\S*$/;

function isCheckablePath(span: string): boolean {
  if (!REPO_PATH_PATTERN.test(span)) return false;
  // Glob patterns and <placeholder> examples describe shapes, not concrete files.
  if (span.includes("*") || span.includes("<")) return false;
  // Build output is gitignored and absent in fresh checkouts.
  if (span.startsWith("src/generated/")) return false;
  return true;
}

function extractRepoPaths(markdown: string): string[] {
  const spans = [...markdown.matchAll(/`([^`\n]+)`/g)].map((match) => match[1]);
  return spans.filter(isCheckablePath);
}

describe("doc drift guards", () => {
  it("keeps agents.md byte-identical to CLAUDE.md", () => {
    const claudeMd = readFileSync(join(repoRoot, "CLAUDE.md"), "utf-8");
    const agentsMd = readFileSync(join(repoRoot, "agents.md"), "utf-8");
    expect(agentsMd, "agents.md must stay in sync with CLAUDE.md — run: cp CLAUDE.md agents.md").toBe(claudeMd);
  });

  for (const docPath of GUARDED_DOC_PATHS) {
    const relativeDoc = docPath.slice(repoRoot.length + 1);
    it(`resolves every backtick-quoted repo path in ${relativeDoc}`, () => {
      const referencedPaths = extractRepoPaths(readFileSync(docPath, "utf-8"));
      const missing = referencedPaths.filter((path) => !existsSync(join(repoRoot, path)));
      expect(missing, `${relativeDoc} references paths that do not exist`).toEqual([]);
    });
  }
});
