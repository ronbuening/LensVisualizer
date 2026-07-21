/**
 * Search and author-catalog behavior over the generated lightweight metadata.
 */

import { describe, expect, it } from "vitest";
import { AUTHORS, groupAuthorPatents, patentsForAuthor } from "../../../../src/utils/catalog/authorCatalog.js";
import { exactSearchTarget, normalizeSearchText, searchCatalog } from "../../../../src/utils/catalog/searchCatalog.js";

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

  it("resolves exact unambiguous entries directly", () => {
    expect(exactSearchTarget("AGFA COLOR-TELINEAR 90mm f/4")).toBe("/lens/agfa-color-telinear-90mm-f4");
    expect(exactSearchTarget("US 2,819,651")).toBe("/lens/agfa-color-telinear-90mm-f4");
    expect(exactSearchTarget("Carl Baur")).toMatch(/^\/authors\//);
    expect(exactSearchTarget("not in the catalog")).toBeNull();
  });
});

describe("author catalog", () => {
  it("keeps generated author entries in sync with their aggregated patents", () => {
    const author = AUTHORS.find((entry) => entry.name === "Carl Baur");
    expect(author).toBeDefined();
    if (!author) return;

    const patents = patentsForAuthor(author.name);
    expect(patents).toHaveLength(author.patentCount);
    expect(patents.every((patent) => patent.authors.includes(author.name))).toBe(true);
  });

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

    const coauthors = groupAuthorPatents(patents, "Ada", "coauthor");
    expect(coauthors.map((group) => group.label)).toEqual(["Ben", "Cy", "Sole inventor"]);
    expect(coauthors.find((group) => group.label === "Ben")?.patents[0].patentNumber).toBe("US 1");
  });
});
