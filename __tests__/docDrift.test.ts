import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const repoRoot = fileURLToPath(new URL("..", import.meta.url));

const GUARDED_DOC_PATHS = [
  "CLAUDE.md",
  ...readdirSync(join(repoRoot, "agent_docs", "architecture"))
    .filter((name) => name.endsWith(".md"))
    .map((name) => join("agent_docs", "architecture", name)),
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
    it(`resolves every backtick-quoted repo path in ${docPath}`, () => {
      const referencedPaths = extractRepoPaths(readFileSync(join(repoRoot, docPath), "utf-8"));
      const missing = referencedPaths.filter((path) => !existsSync(join(repoRoot, path)));
      expect(missing, `${docPath} references paths that do not exist`).toEqual([]);
    });
  }
});
