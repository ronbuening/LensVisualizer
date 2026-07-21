/**
 * Regression coverage for collision-safe generated author metadata.
 */

import { describe, expect, it } from "vitest";
import { buildAuthorMetadata } from "../../scripts/author-metadata.mjs";

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
