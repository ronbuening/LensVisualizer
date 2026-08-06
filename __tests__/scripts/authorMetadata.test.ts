/**
 * Regression coverage for collision-safe generated author/assignee metadata.
 */

import { describe, expect, it } from "vitest";
import { buildAuthorMetadata, buildAssigneeMetadata } from "../../scripts/author-metadata.mjs";
import { AUTHORS } from "../../src/utils/catalog/authorCatalog.js";
import { normalizeSearchText } from "../../src/utils/catalog/searchCatalog.js";

describe("author metadata generation", () => {
  it("deduplicates authors and counts unique patents", () => {
    const authors = buildAuthorMetadata([
      { key: "a", patentNumber: "US 1", patentAuthors: ["Ada Example"], visible: true },
      { key: "b", patentNumber: "US 1", patentAuthors: ["Ada Example"], visible: true },
      { key: "c", patentNumber: "US 2", patentAuthors: ["Ada Example"], visible: true },
      { key: "hidden", patentNumber: "US 3", patentAuthors: ["Ada Example"], visible: false },
    ]);

    expect(authors).toEqual([{ name: "Ada Example", slug: "ada-example", lensKeys: ["a", "b", "c"], patentCount: 2 }]);
  });

  it("counts attributed fallback records when a patent number is missing", () => {
    const authors = buildAuthorMetadata([
      { key: "a", patentAuthors: ["Ada Example"], visible: true },
      { key: "b", patentAuthors: ["Ada Example"], visible: true },
    ]);

    expect(authors[0]).toMatchObject({ lensKeys: ["a", "b"], patentCount: 2 });
  });

  /**
   * Public URL contract: `/authors/:slug`. These are the real catalog names whose
   * transliteration is non-obvious, pinned as exact strings — a change relocates
   * already-published author URLs.
   */
  it.each([
    ["Josef Weiß", "josef-weiss"],
    ["Hiltrud Ebbesmeier née Schitthof", "hiltrud-ebbesmeier-nee-schitthof"],
    ["Günter Klemt", "gunter-klemt"],
    ["Aurélien Dodoc", "aurelien-dodoc"],
    ["Harry Zöllner", "harry-zollner"],
    ["Jérôme Ø. Håkonsen", "jerome-o-hakonsen"],
    ["Łukasz Đurić", "lukasz-duric"],
  ])("slugifies %j to %j", (name, expected) => {
    const [author] = buildAuthorMetadata([{ key: "a", patentNumber: "US 1", patentAuthors: [name], visible: true }]);
    expect(author.slug).toBe(expected);
  });

  it.each(["Josef Weiß", "Günter Klemt", "Jérôme Ø. Håkonsen", "Łukasz Đurić"])(
    "keeps slug and search transliteration aligned for %j",
    (name) => {
      const [author] = buildAuthorMetadata([{ key: "a", patentNumber: "US 1", patentAuthors: [name], visible: true }]);
      expect(author.slug).toBe(normalizeSearchText(name).replaceAll(" ", "-"));
    },
  );

  it("pins the stableHash suffix used by collision-disambiguated slugs", () => {
    // Both names share the base "josef-weiss", so each slug carries its FNV-1a hash.
    const authors = buildAuthorMetadata([
      { key: "a", patentNumber: "US 1", patentAuthors: ["Josef Weiß"], visible: true },
      { key: "b", patentNumber: "US 2", patentAuthors: ["Josef Weiss"], visible: true },
    ]);
    const slugByName = Object.fromEntries(
      authors.map((author: { name: string; slug: string }) => [author.name, author.slug]),
    );

    expect(slugByName["Josef Weiß"]).toBe("josef-weiss-1fd43f8");
    expect(slugByName["Josef Weiss"]).toBe("josef-weiss-1249fdl");
  });

  it("matches the slugs actually shipped for those authors", () => {
    // Ties the unit pins above to the live /authors/:slug URLs in generated metadata.
    for (const [name, expected] of [
      ["Josef Weiß", "josef-weiss"],
      ["Hiltrud Ebbesmeier née Schitthof", "hiltrud-ebbesmeier-nee-schitthof"],
      ["Günter Klemt", "gunter-klemt"],
      ["Aurélien Dodoc", "aurelien-dodoc"],
      ["Harry Zöllner", "harry-zollner"],
    ]) {
      expect(AUTHORS.find((author) => author.name === name)?.slug, name).toBe(expected);
    }
  });

  it("pins the unslugifiable-name fallback base and hash", () => {
    const [author] = buildAuthorMetadata([
      { key: "a", patentNumber: "US 1", patentAuthors: ["郑艺丹"], visible: true },
    ]);
    expect(author.slug).toBe("author-7c9tsh");
  });

  it("adds stable suffixes for colliding and non-ASCII slug bases", () => {
    const authors = buildAuthorMetadata([
      { key: "a", patentAuthors: ["José Test"], visible: true },
      { key: "b", patentAuthors: ["Jose Test"], visible: true },
      { key: "c", patentAuthors: ["郑艺丹"], visible: true },
    ]);
    const slugs = authors.map((author: { slug: string }) => author.slug);

    expect(new Set(slugs).size).toBe(3);
    expect(slugs.filter((slug: string) => slug.startsWith("jose-test-")).length).toBe(2);
    expect(slugs.some((slug: string) => slug.startsWith("author-"))).toBe(true);
  });
});

describe("assignee metadata generation", () => {
  it("deduplicates one assignee across lenses and counts unique patents", () => {
    const assignees = buildAssigneeMetadata([
      { key: "a", patentNumber: "US 1", patentAssignees: ["Canon Inc."], visible: true },
      { key: "b", patentNumber: "US 1", patentAssignees: ["Canon Inc."], visible: true },
      { key: "c", patentNumber: "US 2", patentAssignees: ["Canon Inc."], visible: true },
      { key: "hidden", patentNumber: "US 3", patentAssignees: ["Canon Inc."], visible: false },
    ]);

    expect(assignees).toEqual([{ name: "Canon Inc.", slug: "canon-inc", lensKeys: ["a", "b", "c"], patentCount: 2 }]);
  });

  it("reads patentAssignees, not patentAuthors", () => {
    const assignees = buildAssigneeMetadata([
      {
        key: "a",
        patentNumber: "US 1",
        patentAuthors: ["Ada Example"],
        patentAssignees: ["Nikon Corp."],
        visible: true,
      },
    ]);

    expect(assignees.map((a: { name: string }) => a.name)).toEqual(["Nikon Corp."]);
  });

  it("rebuilds the assignee count when another attributed lens is added", () => {
    const firstBuild = buildAssigneeMetadata([
      { key: "a", patentNumber: "US 1", patentAssignees: ["Canon Inc."], visible: true },
    ]);
    const nextBuild = buildAssigneeMetadata([
      { key: "a", patentNumber: "US 1", patentAssignees: ["Canon Inc."], visible: true },
      { key: "b", patentNumber: "US 2", patentAssignees: ["Canon Inc."], visible: true },
    ]);

    expect(firstBuild[0]).toMatchObject({ lensKeys: ["a"], patentCount: 1 });
    expect(nextBuild[0]).toMatchObject({ lensKeys: ["a", "b"], patentCount: 2 });
  });

  it("adds stable suffixes for assignee names that slugify identically", () => {
    const assignees = buildAssigneeMetadata([
      { key: "a", patentAssignees: ["Acmé Optics"], visible: true },
      { key: "b", patentAssignees: ["Acme Optics"], visible: true },
    ]);
    const slugs = assignees.map((assignee: { slug: string }) => assignee.slug);

    expect(new Set(slugs).size).toBe(2);
    expect(slugs.filter((slug: string) => slug.startsWith("acme-optics")).length).toBe(2);
  });
});
