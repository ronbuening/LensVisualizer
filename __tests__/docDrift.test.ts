import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const repoRoot = fileURLToPath(new URL("..", import.meta.url));
const agentDocsRoot = join(repoRoot, "agent_docs");

/** Docs whose backtick-quoted repo paths must resolve to real files or directories. */
const GUARDED_DOC_PATHS = [
  "CLAUDE.md",
  "agent_docs/README.md",
  "agent_docs/architecture.md",
  "agent_docs/workflow.md",
  "agent_docs/documentation-policy.md",
  "agent_docs/decisions.md",
  ...readdirSync(join(agentDocsRoot, "architecture"))
    .filter((name) => name.endsWith(".md"))
    .map((name) => join("agent_docs", "architecture", name)),
];

/** agent_docs/documentation-policy.md: CLAUDE.md stays a routing file, not a manual. */
const CLAUDE_MD_MAX_LINES = 200;

/** Every agent_docs/README.md index entry starts with exactly one of these tags. */
const INDEX_TAGS = ["policy", "recipe", "architecture", "queue", "record", "generated"];

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

/** Relative link targets of every `[text](target)` in the markdown, minus anchors, queries, and external URLs. */
function markdownLinkTargets(markdown: string): string[] {
  return [...markdown.matchAll(/\]\(([^)\s#?]+)/g)]
    .map((match) => match[1].replace(/^\.\//, ""))
    .filter((target) => !/^[a-z][a-z0-9+.-]*:/i.test(target));
}

/** Body of the first fenced block following a `## <heading>` line. */
function fencedBlockUnderHeading(markdown: string, heading: string, docName: string): string {
  const headingIndex = markdown.indexOf(`\n## ${heading}\n`);
  expect(headingIndex, `${docName} is missing the "## ${heading}" section`).toBeGreaterThanOrEqual(0);
  const fence = /```[^\n]*\n([\s\S]*?)```/.exec(markdown.slice(headingIndex));
  expect(fence, `${docName}'s "${heading}" section has no fenced block`).not.toBeNull();
  return fence![1];
}

function sectionUnderHeading(markdown: string, heading: string): string | undefined {
  const marker = `## ${heading}\n`;
  const headingIndex = markdown.indexOf(marker);
  if (headingIndex < 0) return undefined;
  const bodyIndex = headingIndex + marker.length;
  const nextHeadingIndex = markdown.indexOf("\n## ", bodyIndex);
  return markdown.slice(bodyIndex, nextHeadingIndex < 0 ? undefined : nextHeadingIndex);
}

function topLevelDirectories(relativeDir: string): string[] {
  return readdirSync(join(repoRoot, relativeDir))
    .filter((name) => statSync(join(repoRoot, relativeDir, name)).isDirectory())
    .sort();
}

/** Markdown files directly inside one directory (not recursive), as bare file names. */
function markdownFiles(relativeDir: string): string[] {
  return readdirSync(join(repoRoot, relativeDir))
    .filter((name) => name.endsWith(".md") && !statSync(join(repoRoot, relativeDir, name)).isDirectory())
    .sort();
}

function filesMatching(relativeDir: string, matches: (filename: string) => boolean): string[] {
  return readdirSync(join(repoRoot, relativeDir)).flatMap((name) => {
    const relativePath = join(relativeDir, name);
    const stat = statSync(join(repoRoot, relativePath));
    if (stat.isDirectory()) return filesMatching(relativePath, matches);
    return matches(name) ? [relativePath] : [];
  });
}

function filesNamed(relativeDir: string, filename: string): string[] {
  return filesMatching(relativeDir, (name) => name === filename);
}

function documentedProjectMapDirectories(projectMap: string): {
  src: Set<string>;
  components: Set<string>;
} {
  const lines = projectMap.split("\n");
  const src = new Set(
    lines.flatMap((line) => {
      const match = /^src\/([^/\s]+)\/(?:\s|$)/.exec(line);
      return match ? [match[1]] : [];
    }),
  );

  const componentsIndex = lines.findIndex((line) => /^src\/components\/(?:\s|$)/.test(line));
  expect(componentsIndex, "the Project Map is missing the src/components/ root").toBeGreaterThanOrEqual(0);

  const components = new Set<string>();
  for (const line of lines.slice(componentsIndex + 1)) {
    if (line && !line.startsWith(" ")) break;
    const match = /^ {2}([^/\s]+)\/(?:\s|$)/.exec(line);
    if (match) components.add(match[1]);
  }

  return { src, components };
}

/**
 * `pretest`/`pretypecheck`-style lifecycle hooks run implicitly and are not documented;
 * `preview` only looks like one, so match on the hooked script actually existing.
 */
function isLifecycleHook(name: string, scripts: Record<string, string>): boolean {
  return name.startsWith("pre") && scripts[name.slice(3)] !== undefined;
}

describe("doc drift guards", () => {
  it("keeps generated src folder documentation synchronized", () => {
    expect(() =>
      execFileSync("node", ["scripts/generate-src-readmes.mjs", "--check"], {
        cwd: repoRoot,
        encoding: "utf8",
      }),
    ).not.toThrow();
  });

  it("omits intentionally data-heavy sources from large-file warnings", () => {
    const largeFileWarnings = filesNamed("src", "improvementsuggestions.md")
      .flatMap((relativePath) => {
        const section = sectionUnderHeading(
          readFileSync(join(repoRoot, relativePath), "utf-8"),
          "Large files carry substantial maintenance weight",
        );
        return section === undefined ? [] : [section];
      })
      .join("\n");
    const excludedBasenames = [
      "changelogData.ts",
      "glassCatalogData.ts",
      ...readdirSync(join(repoRoot, "src", "optics", "glassCatalogEntries")).filter((name) => name.endsWith(".ts")),
    ];

    for (const basename of excludedBasenames) {
      expect(largeFileWarnings, `${basename} should not inform generated large-file warnings`).not.toContain(basename);
    }
  });

  it("keeps AGENTS.md byte-identical to CLAUDE.md", () => {
    const claudeMd = readFileSync(join(repoRoot, "CLAUDE.md"), "utf-8");
    const agentsMd = readFileSync(join(repoRoot, "AGENTS.md"), "utf-8");
    expect(agentsMd, "AGENTS.md must stay in sync with CLAUDE.md — run: cp CLAUDE.md AGENTS.md").toBe(claudeMd);
  });

  describe("CLAUDE.md stays short and in sync with the repository", () => {
    const claudeMd = readFileSync(join(repoRoot, "CLAUDE.md"), "utf-8");
    const workflowMd = readFileSync(join(agentDocsRoot, "workflow.md"), "utf-8");
    const architectureMd = readFileSync(join(agentDocsRoot, "architecture.md"), "utf-8");
    const scripts: Record<string, string> = JSON.parse(readFileSync(join(repoRoot, "package.json"), "utf-8")).scripts;

    it("stays within the line budget", () => {
      const lineCount = claudeMd.trimEnd().split("\n").length;
      expect(
        lineCount,
        `CLAUDE.md is ${lineCount} lines; the budget is ${CLAUDE_MD_MAX_LINES} — move detail into agent_docs/ (agent_docs/documentation-policy.md)`,
      ).toBeLessThanOrEqual(CLAUDE_MD_MAX_LINES);
    });

    it("only documents npm scripts that exist", () => {
      const docs: readonly (readonly [string, string])[] = [
        ["CLAUDE.md", claudeMd],
        ["agent_docs/workflow.md", workflowMd],
      ];
      for (const [docName, markdown] of docs) {
        const documented = [...markdown.matchAll(/npm run ([\w:-]+)/g)].map((match) => match[1]);
        const unknown = [...new Set(documented)].filter((name) => scripts[name] === undefined).sort();
        expect(unknown, `${docName} documents npm scripts missing from package.json`).toEqual([]);
      }
    });

    it("documents every runnable npm script in agent_docs/workflow.md's Commands fence", () => {
      const commands = fencedBlockUnderHeading(workflowMd, "Commands", "agent_docs/workflow.md");
      const documented = new Set([...commands.matchAll(/^npm run ([\w:-]+)/gm)].map((match) => match[1]));
      const undocumented = Object.keys(scripts)
        .filter((name) => !isLifecycleHook(name, scripts) && !documented.has(name))
        .sort();
      expect(undocumented, "package.json scripts missing from agent_docs/workflow.md's Commands fence").toEqual([]);
    });

    it("keeps component directory names scoped to the components subtree", () => {
      const documented = documentedProjectMapDirectories(
        [
          "src/components/           - UI components",
          "  controls/               - shared controls",
          "src/optics/               - optical engine",
          "  mount/                  - mount renderer",
          "src/content/              - article content",
        ].join("\n"),
      );

      expect([...documented.components]).toEqual(["controls"]);
    });

    it("lists every top-level src/ directory in CLAUDE.md's Project Map fence", () => {
      const projectMap = fencedBlockUnderHeading(claudeMd, "Project Map", "CLAUDE.md");
      const documented = documentedProjectMapDirectories(projectMap);
      const missing = topLevelDirectories("src")
        .filter((name) => !documented.src.has(name))
        .map((name) => `src/${name}/`);
      expect(missing, "directories missing from CLAUDE.md's Project Map fence").toEqual([]);
    });

    it("lists every src/ and src/components/ directory in agent_docs/architecture.md's Project Map fence", () => {
      const projectMap = fencedBlockUnderHeading(architectureMd, "Project Map", "agent_docs/architecture.md");
      const documented = documentedProjectMapDirectories(projectMap);
      const missing = [
        ...topLevelDirectories("src")
          .filter((name) => !documented.src.has(name))
          .map((name) => `src/${name}/`),
        ...topLevelDirectories(join("src", "components"))
          .filter((name) => !documented.components.has(name))
          .map((name) => `src/components/${name}/`),
      ];
      expect(missing, "directories missing from agent_docs/architecture.md's Project Map fence").toEqual([]);
    });
  });

  describe("agent_docs/README.md indexes every living doc", () => {
    const readmePath = "agent_docs/README.md";
    const readme = readFileSync(join(repoRoot, readmePath), "utf-8");
    const linkTargets = markdownLinkTargets(readme);

    it("tags every index entry", () => {
      const entryPattern = /^- .*\]\([^)]+\.md\)/;
      const tagPattern = new RegExp(`^- \\[(?:${INDEX_TAGS.join("|")})\\] `);
      const untagged = readme.split("\n").filter((line) => entryPattern.test(line) && !tagPattern.test(line));
      expect(untagged, `${readmePath} index entries must start with one of [${INDEX_TAGS.join("] [")}]`).toEqual([]);
    });

    it("resolves every link target", () => {
      const missing = linkTargets.filter((target) => !existsSync(join(agentDocsRoot, target)));
      expect(missing, `${readmePath} links to paths that do not exist`).toEqual([]);
    });

    it("lists every agent_docs, architecture, and records document", () => {
      const living = [
        ...markdownFiles("agent_docs").filter((name) => name !== "README.md"),
        ...markdownFiles("agent_docs/architecture").map((name) => `architecture/${name}`),
        ...markdownFiles("agent_docs/records")
          .filter((name) => name !== "README.md")
          .map((name) => `records/${name}`),
      ];
      const indexed = new Set(linkTargets);
      const missing = living.filter((doc) => !indexed.has(doc));
      expect(missing, `${readmePath} is missing index entries — add a tagged entry or delete the doc`).toEqual([]);
    });
  });

  it("keeps every record linked from a living doc or a lens audit log", () => {
    const records = markdownFiles("agent_docs/records").filter((name) => name !== "README.md");
    const livingDocs = [
      ...markdownFiles("."),
      ...markdownFiles("agent_docs")
        .filter((name) => name !== "README.md")
        .map((name) => join("agent_docs", name)),
      ...markdownFiles("agent_docs/architecture").map((name) => join("agent_docs", "architecture", name)),
      ...filesMatching("src/lens-data", (name) => name.endsWith(".audit.md")),
    ];
    const corpus = livingDocs.map((path) => readFileSync(join(repoRoot, path), "utf-8")).join("\n");
    const orphaned = records.filter((name) => !corpus.includes(name));
    expect(
      orphaned,
      "agent_docs/records/*.md must be linked from a living doc or a *.audit.md log; otherwise delete it (agent_docs/documentation-policy.md)",
    ).toEqual([]);
  });

  for (const docPath of GUARDED_DOC_PATHS) {
    it(`resolves every backtick-quoted repo path in ${docPath}`, () => {
      const referencedPaths = extractRepoPaths(readFileSync(join(repoRoot, docPath), "utf-8"));
      const missing = referencedPaths.filter((path) => !existsSync(join(repoRoot, path)));
      expect(missing, `${docPath} references paths that do not exist`).toEqual([]);
    });
  }
});
