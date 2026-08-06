/**
 * Author-catalog lookups behind `/authors` and `/authors/:slug`.
 *
 * Exercised against the real generated metadata, so a slug-shape or lookup-map
 * regression fails here rather than as a 404 on a prerendered page.
 */

import { describe, expect, it } from "vitest";
import {
  AUTHORS,
  authorPathForName,
  getAuthorByName,
  getAuthorBySlug,
  groupAuthorPatents,
  patentsForAuthor,
  patentsForParty,
} from "../../../../src/utils/catalog/authorCatalog.js";
import { catalogCollator } from "../../../../src/utils/catalog/collation.js";
import type { LensSummary } from "../../../../src/utils/catalog/lensSummaries.js";

const sample = AUTHORS[0];

describe("author lookups", () => {
  it("has a populated generated directory", () => {
    expect(AUTHORS.length).toBeGreaterThan(0);
  });

  it("round-trips every author through its slug", () => {
    const broken = AUTHORS.filter((author) => getAuthorBySlug(author.slug)?.name !== author.name).map((a) => a.slug);
    expect(broken).toEqual([]);
  });

  it("round-trips every author through its name", () => {
    const broken = AUTHORS.filter((author) => getAuthorByName(author.name)?.slug !== author.slug).map((a) => a.name);
    expect(broken).toEqual([]);
  });

  it("returns undefined for unknown slugs and names", () => {
    expect(getAuthorBySlug("not-a-real-author-slug")).toBeUndefined();
    expect(getAuthorByName("Not A Real Author")).toBeUndefined();
    expect(getAuthorBySlug("")).toBeUndefined();
  });

  it("builds a canonical /authors path only for known names", () => {
    expect(authorPathForName(sample.name)).toContain(`/authors/${sample.slug}`);
    expect(authorPathForName("Not A Real Author")).toBeUndefined();
  });

  it("keeps slugs unique across the directory", () => {
    const slugs = AUTHORS.map((author) => author.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});

describe("patentsForAuthor", () => {
  it("returns records ordered by patent year then number", () => {
    const patents = patentsForAuthor(sample.name);
    expect(patents.length).toBeGreaterThan(0);

    const sortKeys = patents.map((p) => [p.patentYear ?? Number.POSITIVE_INFINITY, p.patentNumber] as const);
    const resorted = [...sortKeys].sort((a, b) => a[0] - b[0] || catalogCollator.compare(a[1], b[1]));
    expect(sortKeys).toEqual(resorted);
  });

  it("reuses the precomputed directory entry for repeated catalog lookups", () => {
    expect(patentsForAuthor(sample.name)).toBe(patentsForAuthor(sample.name));
  });

  it("credits the requested author on every returned record", () => {
    for (const patent of patentsForAuthor(sample.name)) {
      expect(patent.authors, patent.patentNumber).toContain(sample.name);
    }
  });

  it("returns nothing for an unknown author", () => {
    expect(patentsForAuthor("Not A Real Author")).toEqual([]);
  });

  it("derives merged, fallback, and missing-year records from synthetic summaries", () => {
    const summaries: LensSummary[] = [
      {
        key: "shared-b",
        name: "Shared Lens B",
        patentNumber: "US 20",
        patentAuthors: ["Ada", "Zoe"],
        visible: true,
      },
      {
        key: "shared-a",
        name: "Shared Lens A",
        patentNumber: "US 20",
        patentYear: 1999,
        patentAuthors: ["Ada", "Ben"],
        visible: true,
      },
      { key: "fallback", name: "Fallback Lens", patentAuthors: ["Ada"], visible: true },
      { key: "other", name: "Other Lens", patentAuthors: ["Zoe"], visible: true },
    ];

    const patents = patentsForParty("Ada", "author", summaries);

    expect(patents.map((patent) => patent.patentNumber)).toEqual(["US 20", "Patent source for Fallback Lens"]);
    expect(patents[0]).toMatchObject({
      patentYear: 1999,
      authors: ["Ada", "Zoe", "Ben"],
      lenses: [
        { key: "shared-a", name: "Shared Lens A" },
        { key: "shared-b", name: "Shared Lens B" },
      ],
    });
  });
});

describe("groupAuthorPatents", () => {
  it("keeps every patent reachable in both grouping modes", () => {
    const patents = patentsForAuthor(sample.name);

    for (const mode of ["assignee", "coauthor"] as const) {
      const groups = groupAuthorPatents(patents, sample.name, mode);
      expect(groups.length, mode).toBeGreaterThan(0);

      const grouped = new Set(groups.flatMap((group) => group.patents.map((p) => p.patentNumber)));
      // Multi-party patents intentionally appear in several groups, so compare
      // as sets rather than by count.
      expect(grouped, mode).toEqual(new Set(patents.map((p) => p.patentNumber)));
      expect(new Set(groups.map((group) => group.id)).size, `${mode} group ids unique`).toBe(groups.length);
    }
  });

  it("returns no groups for an empty patent list", () => {
    expect(groupAuthorPatents([], sample.name, "assignee")).toEqual([]);
  });
});
