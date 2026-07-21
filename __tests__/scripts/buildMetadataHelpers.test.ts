import { describe, expect, it } from "vitest";
import {
  assertFreshnessDiversity,
  assertFullGitHistory,
  buildRouteFreshness,
  combineFreshnessEntries,
  getFirstGitFileFreshness,
  getGitFileFreshness,
  mapLimit,
  parseGitLogDates,
} from "../../scripts/build-metadata-lib.mjs";

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
      ["2026-03-27T10:00:00-04:00", "2026-03-25T10:00:00-04:00", "2026-03-19T10:00:00-04:00"].join("\n"),
    );

    expect(dates).toEqual({
      publishedOn: "2026-03-19",
      lastModified: "2026-03-27",
    });
  });

  it("falls back when git history is unavailable", () => {
    const dates = getGitFileFreshness("missing-file.ts", {
      fallbackDate: "2026-03-27",
      exec: () => {
        throw new Error("git failure");
      },
    });

    expect(dates).toEqual({
      publishedOn: "2026-03-27",
      lastModified: "2026-03-27",
    });
  });

  it("tries alternate history paths before falling back", () => {
    const dates = getFirstGitFileFreshness(["new-path.md", "old-path.md"], {
      fallbackDate: "2026-03-27",
      exec: (command) => {
        if (command.includes('"new-path.md"')) {
          throw new Error("missing");
        }
        if (command.includes('"old-path.md"')) {
          return ["2026-03-27T10:00:00-04:00", "2026-03-19T10:00:00-04:00"].join("\n");
        }
        throw new Error(`unexpected command: ${command}`);
      },
    });

    expect(dates).toEqual({
      publishedOn: "2026-03-19",
      lastModified: "2026-03-27",
    });
  });

  it("uses execFile-style arguments by default for git freshness", () => {
    const calls: unknown[][] = [];
    const dates = getGitFileFreshness("path with spaces.md", {
      fallbackDate: "2026-03-27",
      execFileImpl: (...args: unknown[]) => {
        calls.push(args);
        return ["2026-03-27T10:00:00-04:00", "2026-03-19T10:00:00-04:00"].join("\n");
      },
    });

    expect(dates).toEqual({
      publishedOn: "2026-03-19",
      lastModified: "2026-03-27",
    });
    expect(calls[0][0]).toBe("git");
    expect(calls[0][1]).toEqual(["log", "--follow", "--format=%aI", "--", "path with spaces.md"]);
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
});
