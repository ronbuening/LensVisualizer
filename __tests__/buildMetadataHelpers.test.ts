import { describe, expect, it } from "vitest";
import {
  buildRouteFreshness,
  combineFreshnessEntries,
  getFirstGitFileFreshness,
  getGitFileFreshness,
  mapLimit,
  parseGitLogDates,
} from "../scripts/build-metadata-lib.mjs";

describe("build metadata helpers", () => {
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

  it("builds route freshness from content freshness", () => {
    const routeFreshness = buildRouteFreshness({
      lenses: [
        {
          key: "lens-a",
          makerSlug: "nikon",
          freshness: { publishedOn: "2026-03-19", lastModified: "2026-03-25" },
        },
        {
          key: "lens-b",
          makerSlug: "canon",
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
    expect(routeFreshness["/articles/optics-primer"]).toEqual({
      publishedOn: "2026-03-18",
      lastModified: "2026-03-24",
    });
    expect(routeFreshness["/makers/nikon"]).toEqual({
      publishedOn: "2026-03-17",
      lastModified: "2026-03-26",
    });
  });
});
