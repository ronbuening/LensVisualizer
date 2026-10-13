/**
 * Search and author-catalog behavior over the generated lightweight metadata.
 */

import { describe, expect, it, vi } from "vitest";
import { groupAuthorPatents } from "../../../../src/utils/catalog/authorCatalog.js";
import {
  exactSearchTarget,
  matchesLensSearch,
  normalizeLensSearchText,
  normalizeSearchText,
  searchCatalog,
} from "../../../../src/utils/catalog/searchCatalog.js";
import {
  ALL_TELECONVERTER_SUMMARY_LIST,
  TELECONVERTER_SUMMARY_LIST,
} from "../../../../src/utils/catalog/teleconverterSummaries.js";

/* One synthetic published converter joins the generated list; see teleconverterSummaryFixtures.ts. */
vi.mock("../../../../src/generated/teleconverter-summaries.json", async (importOriginal) =>
  (await import("./teleconverterSummaryFixtures.js")).withPublishedTeleconverter(importOriginal),
);

describe("catalog search", () => {
  it("normalizes punctuation and diacritics", () => {
    expect(normalizeSearchText("  US 2,819,651 — Weiß ")).toBe("us 2 819 651 weiss");
  });

  it("matches lens names, punctuation-free patent numbers, and authors", () => {
    expect(searchCatalog("color telinear").lenses.some((match) => match.key === "agfa-color-telinear-90mm-f4")).toBe(
      true,
    );
    expect(searchCatalog("us2819651").patents.some((match) => match.key === "agfa-color-telinear-90mm-f4")).toBe(true);
    expect(searchCatalog("carl baur").authors.some((match) => match.author.name === "Carl Baur")).toBe(true);
    expect(searchCatalog("weiss").authors.some((match) => match.author.name.includes("Weiß"))).toBe(true);
  });

  it("finds teleconverters by name and opens an exact match on its own page", () => {
    const teleconverter = TELECONVERTER_SUMMARY_LIST[0];
    const matches = searchCatalog(teleconverter.name).teleconverters;

    expect(matches[0]).toMatchObject({ type: "teleconverter", key: teleconverter.key });
    expect(searchCatalog("teleconverter").teleconverters.some((match) => match.key === teleconverter.key)).toBe(true);
    /* A teleconverter is not a lens and must never be offered as one. */
    expect(searchCatalog(teleconverter.name).lenses.some((match) => match.key === teleconverter.key)).toBe(false);
    expect(exactSearchTarget(teleconverter.name)).toBe(`/teleconverters/${teleconverter.key}/`);
    expect(searchCatalog("").teleconverters).toEqual([]);

    /* A hidden test model is never a search result, by name or by the shared word. */
    for (const hidden of ALL_TELECONVERTER_SUMMARY_LIST.filter((summary) => !summary.visible)) {
      expect(searchCatalog(hidden.name).teleconverters.some((match) => match.key === hidden.key)).toBe(false);
      expect(searchCatalog("teleconverter").teleconverters.some((match) => match.key === hidden.key)).toBe(false);
      expect(exactSearchTarget(hidden.name)).not.toBe(`/teleconverters/${hidden.key}/`);
    }
  });

  it("resolves exact unambiguous entries directly", () => {
    expect(exactSearchTarget("AGFA COLOR-TELINEAR 90mm f/4")).toBe("/lens/agfa-color-telinear-90mm-f4/");
    expect(exactSearchTarget("US 2,819,651")).toBe("/lens/agfa-color-telinear-90mm-f4/");
    expect(exactSearchTarget("Carl Baur")).toMatch(/^\/authors\//);
    expect(exactSearchTarget("not in the catalog")).toBeNull();
    expect(exactSearchTarget("AGFA COLOR-TELINEAR 90 mm f 4.0")).toBe("/lens/agfa-color-telinear-90mm-f4/");
    expect(exactSearchTarget("50 mm f1.8")).toBeNull();
  });

  it("treats equivalent optical notation identically", () => {
    for (const query of ["50mm f1.8", "50 mm f/1.8", "50 MM f 1.80"]) {
      expect(normalizeLensSearchText(query)).toBe("50mm f1.8");
      expect(matchesLensSearch("Example 50mm f/1.8", query)).toBe(true);
      expect(searchCatalog(query).lenses.map(({ key }) => key)).toEqual(
        searchCatalog("50mm f/1.8").lenses.map(({ key }) => key),
      );
    }
    expect(searchCatalog("50mm f1.8").lenses.length).toBeGreaterThan(0);
  });

  it("does not navigate directly when equivalent exact names identify different lenses", async () => {
    vi.resetModules();
    vi.doMock("../../../../src/utils/catalog/lensSummaries.js", () => ({
      SUMMARY_KEYS: ["a", "b"],
      LENS_SUMMARIES: {
        a: { key: "a", name: "Example 50mm f/1.8" },
        b: { key: "b", name: "Example 50 mm f1.80" },
      },
    }));
    try {
      const search = await import("../../../../src/utils/catalog/searchCatalog.js");
      expect(search.searchCatalog("Example 50 mm f 1.8").lenses).toHaveLength(2);
      expect(search.exactSearchTarget("Example 50 mm f 1.8")).toBeNull();
    } finally {
      vi.doUnmock("../../../../src/utils/catalog/lensSummaries.js");
      vi.resetModules();
    }
  });

  it("matches complete numeric values and stated range endpoints", () => {
    expect(matchesLensSearch("Example 17–50mm f/3.5–5.6", "50 mm f5.6")).toBe(true);
    expect(matchesLensSearch("Example 17-50 mm f3.5-5.6", "17mm f/3.5")).toBe(true);
    expect(matchesLensSearch("Example 24–70mm f/2.8", "50mm")).toBe(false);
    expect(matchesLensSearch("Example 17–50mm f/3.5–5.6", "f4")).toBe(false);
    for (const name of ["Example 150mm f/1.8", "Example 500mm f/1.8"]) {
      expect(matchesLensSearch(name, "50")).toBe(false);
      expect(matchesLensSearch(name, "50mm")).toBe(false);
    }
    expect(matchesLensSearch("Example 50mm f/1.8", "50")).toBe(true);
    expect(matchesLensSearch("Example 50mm f/1.8", "1")).toBe(false);
    expect(matchesLensSearch("Example 18–50mm f/4–5.6", "50mm f1.8")).toBe(false);
    expect(matchesLensSearch("Voigtländer 50mm f/1.8", "voigtlander 50")).toBe(true);
  });
});

describe("author catalog", () => {
  it("groups multi-party patents into every relevant section", () => {
    const patents = [
      {
        patentNumber: "US 1",
        patentYear: 2000,
        authors: ["Ada", "Ben", "Cy"],
        assignees: ["Example Corp", "Optics LLC"],
        lenses: [{ key: "lens-a", name: "Lens A" }],
      },
      {
        patentNumber: "US 2",
        patentYear: 2001,
        authors: ["Ada"],
        assignees: [],
        lenses: [{ key: "lens-b", name: "Lens B" }],
      },
    ];

    const assignees = groupAuthorPatents(patents, "Ada", "assignee");
    expect(assignees.map((group) => group.label)).toEqual([
      "Example Corp",
      "Optics LLC",
      "No named assignee or applicant",
    ]);
    expect(assignees.map((group) => group.id)).toEqual(["named:Example Corp", "named:Optics LLC", "fallback"]);

    const coauthors = groupAuthorPatents(patents, "Ada", "coauthor");
    expect(coauthors.map((group) => group.label)).toEqual(["Ben", "Cy", "Sole inventor"]);
    expect(coauthors.map((group) => group.id)).toEqual(["named:Ben", "named:Cy", "fallback"]);
    expect(coauthors.find((group) => group.label === "Ben")?.patents[0].patentNumber).toBe("US 1");
  });
});
