/**
 * Assignee-catalog lookups and the `"assignee"` branch of `patentsForParty`,
 * which drives the relationship map's focus targets and party nodes.
 */

import { describe, expect, it } from "vitest";
import { ASSIGNEES, getAssigneeByName, getAssigneeBySlug } from "../../../../src/utils/catalog/assigneeCatalog.js";
import { patentsForParty } from "../../../../src/utils/catalog/authorCatalog.js";

const sample = ASSIGNEES[0];

describe("assignee lookups", () => {
  it("has a populated generated directory", () => {
    expect(ASSIGNEES.length).toBeGreaterThan(0);
  });

  it("round-trips every assignee through its slug and name", () => {
    const brokenSlugs = ASSIGNEES.filter((a) => getAssigneeBySlug(a.slug)?.name !== a.name).map((a) => a.slug);
    const brokenNames = ASSIGNEES.filter((a) => getAssigneeByName(a.name)?.slug !== a.slug).map((a) => a.name);

    expect(brokenSlugs).toEqual([]);
    expect(brokenNames).toEqual([]);
  });

  it("returns undefined for unknown slugs and names", () => {
    expect(getAssigneeBySlug("not-a-real-assignee-slug")).toBeUndefined();
    expect(getAssigneeByName("Not A Real Assignee")).toBeUndefined();
  });

  it("keeps slugs unique across the directory", () => {
    const slugs = ASSIGNEES.map((assignee) => assignee.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});

describe("patentsForParty in assignee mode", () => {
  it("orders records by patent year then number", () => {
    const patents = patentsForParty(sample.name, "assignee");
    expect(patents.length).toBeGreaterThan(0);

    const sortKeys = patents.map((p) => [p.patentYear ?? Number.POSITIVE_INFINITY, p.patentNumber] as const);
    const resorted = [...sortKeys].sort((a, b) => a[0] - b[0] || a[1].localeCompare(b[1]));
    expect(sortKeys).toEqual(resorted);
  });

  it("credits the requested assignee on every returned record", () => {
    for (const patent of patentsForParty(sample.name, "assignee")) {
      expect(patent.assignees, patent.patentNumber).toContain(sample.name);
    }
  });

  it("reads patentAssignees rather than patentAuthors", () => {
    // An assignee name must not resolve through the inventor branch; if the
    // role switch were ignored, this would return the assignee's records.
    expect(patentsForParty(sample.name, "author")).toEqual([]);
  });

  it("sorts the lenses inside each record by display name", () => {
    for (const patent of patentsForParty(sample.name, "assignee")) {
      const names = patent.lenses.map((lens) => lens.name);
      expect(names, patent.patentNumber).toEqual([...names].sort((a, b) => a.localeCompare(b)));
    }
  });

  it("returns nothing for an unknown assignee", () => {
    expect(patentsForParty("Not A Real Assignee", "assignee")).toEqual([]);
  });
});
