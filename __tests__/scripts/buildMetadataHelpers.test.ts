import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  articleFrontmatterError,
  assertFreshnessDiversity,
  assertFullGitHistory,
  buildRouteFreshness,
  collectArticles,
  comparePublicationEntries,
  combineFreshnessEntries,
  getFirstGitFileFreshness,
  getGitFileFreshness,
  isGeneratedContentDoc,
  mapLimit,
  parseFrontmatterContent,
  parseGitLogDates,
} from "../../scripts/build-metadata-lib.mjs";

const tempContentRoots: string[] = [];

/** Build a throwaway content directory whose files are `[relativePath, contents]` pairs. */
function createTempContentDir(files: Array<[string, string]>): string {
  const contentDir = mkdtempSync(join(tmpdir(), "build-metadata-content-"));
  tempContentRoots.push(contentDir);
  for (const [file, contents] of files) {
    const slash = file.lastIndexOf("/");
    if (slash >= 0) mkdirSync(join(contentDir, file.slice(0, slash)), { recursive: true });
    writeFileSync(join(contentDir, file), contents, "utf-8");
  }
  return contentDir;
}

afterEach(() => {
  while (tempContentRoots.length > 0) {
    const contentDir = tempContentRoots.pop();
    if (contentDir) rmSync(contentDir, { recursive: true, force: true });
  }
});

describe("build metadata helpers", () => {
  it("rejects shallow git history before freshness generation", () => {
    expect(() =>
      assertFullGitHistory({
        allowFetch: false,
        execFileImpl: () => "true\n",
      }),
    ).toThrow(/checkout is shallow/);
  });

  it("unshallows git history before freshness generation when possible", () => {
    const calls: string[][] = [];
    const shallowStates = ["true\n", "false\n"];

    expect(() =>
      assertFullGitHistory({
        execFileImpl: (_file, args) => {
          calls.push(args);
          if (args[0] === "fetch") return "";
          return shallowStates.shift() ?? "false\n";
        },
      }),
    ).not.toThrow();
    expect(calls).toEqual([
      ["rev-parse", "--is-shallow-repository"],
      ["fetch", "--unshallow"],
      ["rev-parse", "--is-shallow-repository"],
    ]);
  });

  it("rejects shallow git history when unshallowing fails", () => {
    expect(() =>
      assertFullGitHistory({
        execFileImpl: (_file, args) => {
          if (args[0] === "fetch") throw new Error("network unavailable");
          return "true\n";
        },
      }),
    ).toThrow(/git fetch --unshallow failed/);
  });

  it("allows complete git history before freshness generation", () => {
    expect(() =>
      assertFullGitHistory({
        execFileImpl: () => "false\n",
      }),
    ).not.toThrow();
  });

  it("parses git log output into published and modified dates", () => {
    const dates = parseGitLogDates(
      [
        "2026-03-27T10:00:00-04:00\tcommit-c",
        "2026-03-25T10:00:00-04:00\tcommit-b",
        "2026-03-19T10:00:00-04:00\tcommit-a",
      ].join("\n"),
    );

    expect(dates).toEqual({
      publishedOn: "2026-03-19",
      publishedAt: "2026-03-19T14:00:00.000Z",
      publishedCommit: "commit-a",
      lastModified: "2026-03-27",
      lastModifiedAt: "2026-03-27T14:00:00.000Z",
      lastModifiedCommit: "commit-c",
    });
  });

  it("uses the UTC calendar date when a negative offset crosses midnight", () => {
    // An evening-EDT commit is already the next day in UTC; the calendar
    // dates shown on site cards must match the UTC instants used by RSS.
    const dates = parseGitLogDates("2026-08-03T21:14:12-04:00\tcommit-evening");

    expect(dates).toEqual({
      publishedOn: "2026-08-04",
      publishedAt: "2026-08-04T01:14:12.000Z",
      publishedCommit: "commit-evening",
      lastModified: "2026-08-04",
      lastModifiedAt: "2026-08-04T01:14:12.000Z",
      lastModifiedCommit: "commit-evening",
    });
  });

  it("orders later same-day commits first and alphabetizes entries from one commit", () => {
    const entries = [
      {
        key: "early",
        name: "Early Lens",
        publishedOn: "2026-03-27",
        publishedAt: "2026-03-27T14:00:00.000Z",
        publishedCommit: "commit-early",
        lastModified: "2026-03-27",
      },
      {
        key: "z-late",
        name: "Zulu Late Lens",
        publishedOn: "2026-03-27",
        publishedAt: "2026-03-27T18:00:00.000Z",
        publishedCommit: "commit-late",
        lastModified: "2026-03-27",
      },
      {
        key: "a-late",
        name: "Alpha Late Lens",
        publishedOn: "2026-03-27",
        publishedAt: "2026-03-27T18:00:00.000Z",
        publishedCommit: "commit-late",
        lastModified: "2026-03-27",
      },
    ];

    expect(entries.sort(comparePublicationEntries).map((entry) => entry.key)).toEqual(["a-late", "z-late", "early"]);
  });

  it("orders an untracked fallback entry before committed entries from the same date", () => {
    const entries = [
      {
        key: "committed",
        name: "Committed Lens",
        publishedOn: "2026-03-27",
        publishedAt: "2026-03-27T18:00:00.000Z",
        publishedCommit: "commit-late",
        lastModified: "2026-03-27",
      },
      {
        key: "untracked",
        name: "Untracked Lens",
        publishedOn: "2026-03-27",
        publishedAt: "2026-03-27T00:00:00.000Z",
        publishedCommit: null,
        lastModified: "2026-03-27",
      },
    ];

    expect(entries.sort(comparePublicationEntries).map((entry) => entry.key)).toEqual(["untracked", "committed"]);
  });

  it("breaks full ties on url for feed items without key or slug", () => {
    const shared = {
      title: "Same Title",
      publishedOn: "2026-03-27",
      publishedAt: "2026-03-27T18:00:00.000Z",
      publishedCommit: "commit-late",
      lastModified: "2026-03-27",
    };
    const entries = [
      { ...shared, url: "https://example.com/b/" },
      { ...shared, url: "https://example.com/a/" },
    ];

    expect(entries.sort(comparePublicationEntries).map((entry) => entry.url)).toEqual([
      "https://example.com/a/",
      "https://example.com/b/",
    ]);
  });

  it("falls back when git history is unavailable", () => {
    const dates = getGitFileFreshness("missing-file.ts", {
      fallbackDate: "2026-03-27",
      execFileImpl: () => {
        throw new Error("git failure");
      },
    });

    expect(dates).toEqual({
      publishedOn: "2026-03-27",
      publishedAt: "2026-03-27T00:00:00.000Z",
      publishedCommit: null,
      lastModified: "2026-03-27",
      lastModifiedAt: "2026-03-27T00:00:00.000Z",
      lastModifiedCommit: null,
    });
  });

  it("tries alternate history paths before falling back", () => {
    const dates = getFirstGitFileFreshness(["new-path.md", "old-path.md"], {
      fallbackDate: "2026-03-27",
      execFileImpl: (_file, args) => {
        const filePath = args[args.length - 1];
        if (filePath === "new-path.md") {
          throw new Error("missing");
        }
        if (filePath === "old-path.md") {
          return ["2026-03-27T10:00:00-04:00\tcommit-b", "2026-03-19T10:00:00-04:00\tcommit-a"].join("\n");
        }
        throw new Error(`unexpected path: ${filePath}`);
      },
    });

    expect(dates).toEqual({
      publishedOn: "2026-03-19",
      publishedAt: "2026-03-19T14:00:00.000Z",
      publishedCommit: "commit-a",
      lastModified: "2026-03-27",
      lastModifiedAt: "2026-03-27T14:00:00.000Z",
      lastModifiedCommit: "commit-b",
    });
  });

  it("uses execFile-style arguments by default for git freshness", () => {
    const calls: unknown[][] = [];
    const dates = getGitFileFreshness("path with spaces.md", {
      fallbackDate: "2026-03-27",
      execFileImpl: (...args: unknown[]) => {
        calls.push(args);
        return ["2026-03-27T10:00:00-04:00\tcommit-b", "2026-03-19T10:00:00-04:00\tcommit-a"].join("\n");
      },
    });

    expect(dates).toEqual({
      publishedOn: "2026-03-19",
      publishedAt: "2026-03-19T14:00:00.000Z",
      publishedCommit: "commit-a",
      lastModified: "2026-03-27",
      lastModifiedAt: "2026-03-27T14:00:00.000Z",
      lastModifiedCommit: "commit-b",
    });
    expect(calls[0][0]).toBe("git");
    expect(calls[0][1]).toEqual(["log", "--follow", "--format=%cI%x09%H", "--", "path with spaces.md"]);
  });

  it("maps with bounded concurrency while preserving result order", async () => {
    let active = 0;
    let maxActive = 0;
    const result = await mapLimit([1, 2, 3, 4], 2, async (value) => {
      active++;
      maxActive = Math.max(maxActive, active);
      await Promise.resolve();
      active--;
      return value * 2;
    });

    expect(result).toEqual([2, 4, 6, 8]);
    expect(maxActive).toBeLessThanOrEqual(2);
  });

  it("combines multiple freshness entries into a single range", () => {
    const combined = combineFreshnessEntries(
      [
        { publishedOn: "2026-03-19", lastModified: "2026-03-25" },
        { publishedOn: "2026-03-21", lastModified: "2026-03-27" },
      ],
      "2026-03-27",
    );

    expect(combined).toEqual({
      publishedOn: "2026-03-19",
      lastModified: "2026-03-27",
    });
  });

  it("rejects mature metadata when publication dates collapse to one date", () => {
    const lenses = Array.from({ length: 10 }, (_, index) => ({
      key: `lens-${index}`,
      makerSlug: "canon",
      freshness: { publishedOn: "2026-05-05", lastModified: "2026-05-05" },
    }));
    const articles = Array.from({ length: 5 }, (_, index) => ({
      slug: `article-${index}`,
      publishedOn: "2026-05-05",
      lastModified: "2026-05-05",
    }));

    expect(() => assertFreshnessDiversity({ lenses, articles })).toThrow(/only 1 publication date/);
  });

  it("allows mature metadata with diverse publication dates", () => {
    const lenses = [
      {
        key: "lens-a",
        makerSlug: "canon",
        freshness: { publishedOn: "2026-03-19", lastModified: "2026-04-01" },
      },
      {
        key: "lens-b",
        makerSlug: "nikon",
        freshness: { publishedOn: "2026-04-01", lastModified: "2026-04-01" },
      },
    ];
    const articles = [
      {
        slug: "article-a",
        publishedOn: "2026-03-19",
        lastModified: "2026-04-01",
      },
      {
        slug: "article-b",
        publishedOn: "2026-04-01",
        lastModified: "2026-04-01",
      },
    ];

    expect(() =>
      assertFreshnessDiversity({
        lenses,
        articles,
        minimumLensEntries: 2,
        minimumArticleEntries: 2,
      }),
    ).not.toThrow();
  });

  it("builds route freshness from content freshness", () => {
    const routeFreshness = buildRouteFreshness({
      lenses: [
        {
          key: "lens-a",
          makerSlug: "nikon",
          lensMountIds: ["nikon-z"],
          imageFormatId: "135-full-frame",
          freshness: { publishedOn: "2026-03-19", lastModified: "2026-03-25" },
        },
        {
          key: "lens-b",
          makerSlug: "canon",
          lensMountIds: ["canon-rf"],
          imageFormatId: "135-full-frame",
          freshness: { publishedOn: "2026-03-21", lastModified: "2026-03-27" },
        },
      ],
      articles: [
        {
          slug: "optics-primer",
          publishedOn: "2026-03-18",
          lastModified: "2026-03-24",
        },
      ],
      makerSlugs: ["canon", "nikon"],
      mountIds: ["canon-rf", "nikon-z"],
      formatIds: ["135-full-frame"],
      authors: [{ name: "Author A", slug: "author-a", lensKeys: ["lens-a"], patentCount: 1 }],
      makerDetailsFreshness: { publishedOn: "2026-03-17", lastModified: "2026-03-26" },
      fallbackDate: "2026-03-27",
    });

    expect(routeFreshness["/"]).toEqual({
      publishedOn: "2026-03-17",
      lastModified: "2026-03-27",
    });
    expect(routeFreshness["/lenses"]).toEqual({
      publishedOn: "2026-03-19",
      lastModified: "2026-03-27",
    });
    expect(routeFreshness["/search"]).toEqual({
      publishedOn: "2026-03-19",
      lastModified: "2026-03-27",
    });
    expect(routeFreshness["/authors"]).toEqual({
      publishedOn: "2026-03-19",
      lastModified: "2026-03-27",
    });
    expect(routeFreshness["/patents"]).toEqual({
      publishedOn: "2026-03-19",
      lastModified: "2026-03-27",
    });
    expect(routeFreshness["/articles/optics-primer"]).toEqual({
      publishedOn: "2026-03-18",
      lastModified: "2026-03-24",
    });
    expect(routeFreshness["/makers/nikon"]).toEqual({
      publishedOn: "2026-03-17",
      lastModified: "2026-03-26",
    });
    expect(routeFreshness["/mounts/nikon-z"]).toEqual({
      publishedOn: "2026-03-19",
      lastModified: "2026-03-25",
    });
    expect(routeFreshness["/formats/135-full-frame"]).toEqual({
      publishedOn: "2026-03-19",
      lastModified: "2026-03-27",
    });
    expect(routeFreshness["/authors/author-a"]).toEqual({
      publishedOn: "2026-03-19",
      lastModified: "2026-03-25",
    });
  });

  it("parses quoted frontmatter values and ignores indented keys", () => {
    const meta = parseFrontmatterContent(
      ["---", 'slug: "optics-primer"', "title: 'Optics Primer'", "  tag: indented", "---", "", "Body"].join("\n"),
    );

    expect(meta).toEqual({ slug: "optics-primer", title: "Optics Primer" });
  });

  it("names the reason a content file cannot publish", () => {
    expect(articleFrontmatterError(null)).toMatch(/no YAML frontmatter/);
    expect(articleFrontmatterError({ title: "Optics Primer" })).toMatch(/missing frontmatter slug/);
    expect(articleFrontmatterError({ slug: "optics-primer" })).toMatch(/missing frontmatter title/);
    expect(articleFrontmatterError({ slug: "optics-primer", title: "Optics Primer" })).toBeNull();
  });

  it("exempts only the generated per-folder documentation", () => {
    expect(isGeneratedContentDoc("readme.md")).toBe(true);
    expect(isGeneratedContentDoc("pupils/improvementsuggestions.md")).toBe(true);
    expect(isGeneratedContentDoc("pupils/entrance-pupil.md")).toBe(false);
  });

  it("collects articles and skips generated folder documentation", async () => {
    const contentDir = createTempContentDir([
      ["readme.md", "# src/content\n\nGenerated folder documentation.\n"],
      ["pupils/entrance-pupil.md", '---\nslug: entrance-pupil\ntitle: "Entrance Pupil"\ntoc: true\n---\n\nBody\n'],
    ]);

    const articles = await collectArticles({
      contentDir,
      cwd: contentDir,
      fallbackDate: "2026-03-27",
      execFileImpl: () => {
        throw new Error("no git history in the fixture");
      },
    });

    expect(articles).toHaveLength(1);
    expect(articles[0]).toMatchObject({
      slug: "entrance-pupil",
      title: "Entrance Pupil",
      toc: true,
      file: "pupils/entrance-pupil.md",
      publishedOn: "2026-03-27",
      publicationOrder: 0,
    });
  });

  it("fails the build for a content file that cannot publish", async () => {
    const contentDir = createTempContentDir([
      ["pupils/no-title.md", "---\nslug: no-title\n---\n\nBody\n"],
      ["pupils/no-frontmatter.md", "# Heading only\n"],
      ["pupils/indented.md", "---\n  slug: indented\n  title: Indented\n---\n\nBody\n"],
    ]);

    await expect(
      collectArticles({ contentDir, cwd: contentDir, fallbackDate: "2026-03-27", execFileImpl: () => "" }),
    ).rejects.toThrow(/pupils\/no-title\.md: missing frontmatter title/);
    await expect(
      collectArticles({ contentDir, cwd: contentDir, fallbackDate: "2026-03-27", execFileImpl: () => "" }),
    ).rejects.toThrow(/pupils\/no-frontmatter\.md: no YAML frontmatter/);
    await expect(
      collectArticles({ contentDir, cwd: contentDir, fallbackDate: "2026-03-27", execFileImpl: () => "" }),
    ).rejects.toThrow(/pupils\/indented\.md: missing frontmatter slug and title/);
  });
});
