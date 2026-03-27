import { describe, expect, it } from "vitest";
import {
  buildRouteFreshness,
  combineFreshnessEntries,
  getGitFileFreshness,
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
