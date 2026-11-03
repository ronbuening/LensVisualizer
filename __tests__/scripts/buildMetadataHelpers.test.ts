import { execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, readFileSync, readdirSync, statSync, rmSync, writeFileSync } from "node:fs";
import { env } from "node:process";
import { fileURLToPath } from "node:url";
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
  gitHistory,
  isGeneratedContentDoc,
  mapLimit,
  parseFrontmatterContent,
  parseGitLogDates,
  projectClientMetadata,
  readTrackedFiles,
} from "../../scripts/build-metadata-lib.mjs";
import type { ExecFileSyncLike } from "../../scripts/build-metadata-lib.mjs";

const tempContentRoots: string[] = [];

/* A git hook exports GIT_DIR and friends, which would point the fixture's commands at this repository instead. */
const FIXTURE_GIT_ENV = Object.fromEntries(Object.entries(env).filter(([name]) => !name.startsWith("GIT_")));

/** Run git as the helpers do, but with the fixture's environment. */
const fixtureGit: ExecFileSyncLike = (file, args, options) =>
  execFileSync(file, args, { ...options, env: FIXTURE_GIT_ENV });

/**
 * Build a throwaway repository. Each `commit` writes its files (null deletes one) and commits them at a fixed UTC
 * instant, so the dates the helpers read are known.
 */
function createTempGitRepo() {
  const dir = mkdtempSync(join(tmpdir(), "build-metadata-git-"));
  tempContentRoots.push(dir);
  const git = (args: string[], at?: string) =>
    execFileSync("git", ["-c", "user.name=Fixture", "-c", "user.email=fixture@example.com", ...args], {
      cwd: dir,
      encoding: "utf8",
      env: { ...FIXTURE_GIT_ENV, ...(at ? { GIT_AUTHOR_DATE: at, GIT_COMMITTER_DATE: at } : {}) },
    });
  git(["init", "-q"]);
  return {
    dir,
    commit(at: string, subject: string, files: Record<string, string | null>) {
      for (const [file, contents] of Object.entries(files)) {
        if (contents === null) {
          git(["rm", "-q", "--", file]);
          continue;
        }
        mkdirSync(join(dir, file, ".."), { recursive: true });
        writeFileSync(join(dir, file), contents);
        git(["add", "--", file]);
      }
      git(["-c", "commit.gpgsign=false", "commit", "-q", "-m", subject], at);
    },
  };
}

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
  it("projects only client display fields while preserving dates, ordering, and full source records", () => {
    const freshness = {
      publishedOn: "2026-01-01",
      lastModified: "2026-02-02",
      publishedAt: "2026-01-01T09:00:00Z",
      publishedCommit: "first-commit",
      lastModifiedAt: "2026-02-02T10:00:00Z",
      lastModifiedCommit: "last-commit",
    };
    const metadata = {
      lensFreshness: { lens: { ...freshness, publicationOrder: 3 } },
      routeFreshness: { "/lens/lens": freshness },
      articles: [
        {
          ...freshness,
          slug: "second",
          title: "Second",
          summary: "Summary",
          file: "second.md",
          tag: "guide",
          series: "optics",
          seriesOrder: 2,
          toc: true,
        },
        { ...freshness, slug: "first", title: "First", summary: "Intro", file: "first.md" },
      ],
      makerSlugs: ["example"],
      authors: [{ name: "Author" }],
      assignees: [{ name: "Maker", corporateFamily: [{ name: "Parent" }] }],
      lensKeys: ["lens"],
      routes: ["/lens/lens"],
      mountIds: [],
      formatIds: [],
    };
    const before = structuredClone(metadata);
    const client = projectClientMetadata(metadata);
    expect(Object.keys(client).sort()).toEqual([
      "articles",
      "assignees",
      "authors",
      "lensFreshness",
      "makerSlugs",
      "routeFreshness",
    ]);
    expect(client.lensFreshness.lens).toEqual({
      publishedOn: freshness.publishedOn,
      lastModified: freshness.lastModified,
      publicationOrder: 3,
    });
    expect(client.routeFreshness["/lens/lens"]).toEqual({
      publishedOn: freshness.publishedOn,
      lastModified: freshness.lastModified,
    });
    expect(client.articles).toEqual(
      metadata.articles.map(
        ({ publishedAt: _a, publishedCommit: _b, lastModifiedAt: _c, lastModifiedCommit: _d, ...article }) => article,
      ),
    );
    expect(client.authors).toEqual(metadata.authors);
    expect(client.assignees).toEqual(metadata.assignees);
    expect(metadata).toEqual(before);
    expect(projectClientMetadata(metadata)).toEqual(client);
  });

  it("keeps full build metadata out of runtime imports", () => {
    const sourceRoot = fileURLToPath(new URL("../../src/", import.meta.url));
    const sourceFiles = (directory: string): string[] =>
      readdirSync(directory).flatMap((name) => {
        const path = join(directory, name);
        return statSync(path).isDirectory() ? sourceFiles(path) : /\.[jt]sx?$/.test(name) ? [path] : [];
      });
    const files = sourceFiles(sourceRoot);
    for (const file of files) {
      expect(readFileSync(file, "utf8"), file).not.toMatch(/(?:from\s*|import\s*\()\s*["'][^"']*build-metadata\.json/);
    }
  });

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
      ["fetch", "--unshallow", "--quiet"],
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
    const history = gitHistory({
      execFileImpl: () => {
        throw new Error("git failure");
      },
    });

    expect(history.fileFreshness("missing-file.ts", { fallbackDate: "2026-03-27" })).toEqual({
      publishedOn: "2026-03-27",
      publishedAt: "2026-03-27T00:00:00.000Z",
      publishedCommit: null,
      lastModified: "2026-03-27",
      lastModifiedAt: "2026-03-27T00:00:00.000Z",
      lastModifiedCommit: null,
    });
  });

  it("follows a file's renames but not copies, from one read of the history", () => {
    /* Enough shared lines that git pairs the edited rename, and would report the copy as one under --follow. */
    const body = Array.from({ length: 20 }, (_, line) => `Line ${line} of the page.\n`).join("");
    const repo = createTempGitRepo();
    repo.commit("2026-01-01T12:00:00Z", "Add the page", { "docs/first name.md": body });
    repo.commit("2026-02-01T12:00:00Z", "Rename and edit the page", {
      "docs/first name.md": null,
      "docs/page.md": `${body}An edit.\n`,
    });
    repo.commit("2026-03-01T12:00:00Z", "Start a new page from a copy", { "docs/copy.md": `${body}An edit.\n` });
    repo.commit("2026-04-01T12:00:00Z", "Edit the new page", { "docs/copy.md": `${body}A different edit.\n` });

    const history = gitHistory({ cwd: repo.dir, execFileImpl: fixtureGit });
    const subjects = (filePath: string) =>
      history
        .log(join(repo.dir, filePath))
        .split("\n")
        .map((line) => line.split("\t")[2]);
    expect(subjects("docs/page.md")).toEqual(["Rename and edit the page", "Add the page"]);
    /* `git log --follow` reports the copy and dates the new page from 2026-01-01. */
    expect(subjects("docs/copy.md")).toEqual(["Edit the new page", "Start a new page from a copy"]);
    expect(history.fileFreshness(join(repo.dir, "docs/copy.md"))).toMatchObject({
      publishedOn: "2026-03-01",
      lastModified: "2026-04-01",
    });

    /* Paths resolve against cwd however deep in the repository it sits. */
    const fromDocs = gitHistory({ cwd: join(repo.dir, "docs"), execFileImpl: fixtureGit });
    expect(fromDocs.fileFreshness("page.md")).toEqual(history.fileFreshness(join(repo.dir, "docs/page.md")));
    expect(fromDocs.fileFreshness("page.md")).toMatchObject({ publishedOn: "2026-01-01", lastModified: "2026-02-01" });
  });

  it("dates a file moved in the working tree from its tracked path, and falls back when neither has history", () => {
    const repo = createTempGitRepo();
    repo.commit("2026-03-19T14:00:00Z", "Add the page", { "old path.md": "Body\n" });
    repo.commit("2026-03-27T14:00:00Z", "Edit the page", { "old path.md": "Body, edited\n" });
    const history = gitHistory({ cwd: repo.dir, execFileImpl: fixtureGit });

    expect(history.firstFileFreshness(["new path.md", "old path.md"], { fallbackDate: "2026-04-01" })).toEqual({
      publishedOn: "2026-03-19",
      publishedAt: "2026-03-19T14:00:00.000Z",
      publishedCommit: expect.stringMatching(/^[0-9a-f]{40}$/),
      lastModified: "2026-03-27",
      lastModifiedAt: "2026-03-27T14:00:00.000Z",
      lastModifiedCommit: expect.stringMatching(/^[0-9a-f]{40}$/),
    });
    expect(history.firstFileFreshness(["new path.md"], { fallbackDate: "2026-04-01" })).toMatchObject({
      publishedOn: "2026-04-01",
      publishedCommit: null,
    });
    expect(history.firstFileFreshness(["new path.md"])).toBeNull();
  });

  it("reads every committed file of a folder in one batch, by byte size", () => {
    const repo = createTempGitRepo();
    /* A multi-byte name and body: ls-tree quotes such names unless -z, and the batch counts bytes, not characters. */
    repo.commit("2026-03-19T14:00:00Z", "Add pages", {
      "docs/angénieux.md": "Angénieux — 180 mm\n",
      "docs/b.md": "B\n",
      "docs/skip.txt": "Not a page\n",
      "other/c.md": "Outside the folder\n",
    });

    expect(readTrackedFiles({ cwd: repo.dir, repoDir: "docs", suffix: ".md", execFileImpl: fixtureGit })).toEqual([
      { path: "docs/angénieux.md", content: "Angénieux — 180 mm\n" },
      { path: "docs/b.md", content: "B\n" },
    ]);
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
      teleconverters: [
        {
          key: "converter-a",
          freshness: { publishedOn: "2026-03-22", lastModified: "2026-03-23" },
          compatibleLensKeys: ["lens-a"],
        },
      ],
      makerDetailsFreshness: { publishedOn: "2026-03-17", lastModified: "2026-03-26" },
      assigneeCorporateHistoryFreshness: { publishedOn: "2026-03-20", lastModified: "2026-03-28" },
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
    expect(routeFreshness["/relationships/universal"]).toEqual({
      publishedOn: "2026-03-19",
      lastModified: "2026-03-28",
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
    expect(routeFreshness["/teleconverters"]).toEqual({
      publishedOn: "2026-03-22",
      lastModified: "2026-03-23",
    });
    /* A converter page lists its hosts, so it is as fresh as the newest of the converter and those lenses. */
    expect(routeFreshness["/teleconverters/converter-a"]).toEqual({
      publishedOn: "2026-03-19",
      lastModified: "2026-03-25",
    });

    /* Without a published converter the section has no route, so nothing is dated for it. */
    const withoutTeleconverters = buildRouteFreshness({
      lenses: [],
      articles: [],
      makerSlugs: [],
      makerDetailsFreshness: { publishedOn: "2026-03-17", lastModified: "2026-03-26" },
      assigneeCorporateHistoryFreshness: { publishedOn: "2026-03-20", lastModified: "2026-03-28" },
      fallbackDate: "2026-03-27",
    });
    expect(Object.hasOwn(withoutTeleconverters, "/teleconverters")).toBe(false);
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
