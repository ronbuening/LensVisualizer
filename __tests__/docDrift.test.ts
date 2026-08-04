import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
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

/** Body of the first fenced block following a `## <heading>` line. */
function fencedBlockUnderHeading(markdown: string, heading: string): string {
  const headingIndex = markdown.indexOf(`\n## ${heading}\n`);
  expect(headingIndex, `CLAUDE.md is missing the "## ${heading}" section`).toBeGreaterThanOrEqual(0);
  const fence = /```[^\n]*\n([\s\S]*?)```/.exec(markdown.slice(headingIndex));
  expect(fence, `CLAUDE.md's "${heading}" section has no fenced block`).not.toBeNull();
  return fence![1];
}

function topLevelDirectories(relativeDir: string): string[] {
  return readdirSync(join(repoRoot, relativeDir))
    .filter((name) => statSync(join(repoRoot, relativeDir, name)).isDirectory())
    .sort();
}

/**
 * `pretest`/`pretypecheck`-style lifecycle hooks run implicitly and are not documented;
 * `preview` only looks like one, so match on the hooked script actually existing.
 */
function isLifecycleHook(name: string, scripts: Record<string, string>): boolean {
  return name.startsWith("pre") && scripts[name.slice(3)] !== undefined;
}

describe("doc drift guards", () => {
  it("keeps agents.md byte-identical to CLAUDE.md", () => {
    const claudeMd = readFileSync(join(repoRoot, "CLAUDE.md"), "utf-8");
    const agentsMd = readFileSync(join(repoRoot, "agents.md"), "utf-8");
    expect(agentsMd, "agents.md must stay in sync with CLAUDE.md — run: cp CLAUDE.md agents.md").toBe(claudeMd);
  });

  describe("CLAUDE.md stays in sync with the repository", () => {
    const claudeMd = readFileSync(join(repoRoot, "CLAUDE.md"), "utf-8");
    const scripts: Record<string, string> = JSON.parse(readFileSync(join(repoRoot, "package.json"), "utf-8")).scripts;

    it("only documents npm scripts that exist", () => {
      const documented = [...claudeMd.matchAll(/npm run ([\w:-]+)/g)].map((match) => match[1]);
      const unknown = [...new Set(documented)].filter((name) => scripts[name] === undefined).sort();
      expect(unknown, "CLAUDE.md documents npm scripts missing from package.json").toEqual([]);
    });

    it("documents every runnable npm script in the Commands fence", () => {
      const commands = fencedBlockUnderHeading(claudeMd, "Commands");
      const documented = new Set([...commands.matchAll(/^npm run ([\w:-]+)/gm)].map((match) => match[1]));
      const undocumented = Object.keys(scripts)
        .filter((name) => !isLifecycleHook(name, scripts) && !documented.has(name))
        .sort();
      expect(undocumented, "package.json scripts missing from CLAUDE.md's Commands fence").toEqual([]);
    });

    it("lists every src/ and src/components/ directory in the Project Map fence", () => {
      const projectMap = fencedBlockUnderHeading(claudeMd, "Project Map");
      const missing = [
        ...topLevelDirectories("src").map((name) => `src/${name}/`),
        ...topLevelDirectories(join("src", "components")).map((name) => `${name}/`),
      ].filter((entry) => !projectMap.includes(entry));
      expect(missing, "directories missing from CLAUDE.md's Project Map fence").toEqual([]);
    });
  });

  for (const docPath of GUARDED_DOC_PATHS) {
    it(`resolves every backtick-quoted repo path in ${docPath}`, () => {
      const referencedPaths = extractRepoPaths(readFileSync(join(repoRoot, docPath), "utf-8"));
      const missing = referencedPaths.filter((path) => !existsSync(join(repoRoot, path)));
      expect(missing, `${docPath} references paths that do not exist`).toEqual([]);
    });
  }
});
