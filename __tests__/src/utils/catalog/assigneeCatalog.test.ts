/**
 * Assignee-catalog lookups and the `"assignee"` branch of `patentsForParty`,
 * which drives the relationship map's focus targets and party nodes.
 */

import { describe, expect, it } from "vitest";
import { ASSIGNEES, getAssigneeByName, getAssigneeBySlug } from "../../../../src/utils/catalog/assigneeCatalog.js";
import { ASSIGNEE_CORPORATE_HISTORY } from "../../../../src/utils/catalog/assigneeCorporateHistory.js";
import { patentsForParty } from "../../../../src/utils/catalog/authorCatalog.js";
import { catalogCollator } from "../../../../src/utils/catalog/collation.js";

const sample = ASSIGNEES[0];
const ISO_DATE_AT_SUPPORTED_PRECISION = /^\d{4}(?:-\d{2}(?:-\d{2})?)?$/;

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

  it("emits all four corporate-history fields for every assignee", () => {
    for (const assignee of ASSIGNEES) {
      expect(Array.isArray(assignee.successorOf), `${assignee.name} successorOf`).toBe(true);
      expect(Array.isArray(assignee.acquiredBy), `${assignee.name} acquiredBy`).toBe(true);
      expect(Array.isArray(assignee.subsidiaryOf), `${assignee.name} subsidiaryOf`).toBe(true);
      expect(Array.isArray(assignee.corporateFamily), `${assignee.name} corporateFamily`).toBe(true);
    }
  });

  it("keeps the curated registry aligned with exact catalog assignee names", () => {
    const catalogNames = new Set(ASSIGNEES.map((assignee) => assignee.name));
    const orphaned = Object.keys(ASSIGNEE_CORPORATE_HISTORY).filter((name) => !catalogNames.has(name));
    expect(orphaned).toEqual([]);
  });

  it("uses supported ISO date precision and sourced relationship records", () => {
    for (const assignee of ASSIGNEES) {
      for (const relationship of [...assignee.successorOf, ...assignee.acquiredBy]) {
        expect(relationship.organization.trim(), assignee.name).not.toBe("");
        expect(relationship.effectiveDate, assignee.name).toMatch(ISO_DATE_AT_SUPPORTED_PRECISION);
        expect(relationship.sourceUrl, assignee.name).toMatch(/^https:\/\//);
      }

      for (const relationship of assignee.subsidiaryOf) {
        expect(relationship.organization.trim(), assignee.name).not.toBe("");
        expect(relationship.effectiveFrom, assignee.name).toMatch(ISO_DATE_AT_SUPPORTED_PRECISION);
        if (relationship.effectiveTo) {
          expect(relationship.effectiveTo, assignee.name).toMatch(ISO_DATE_AT_SUPPORTED_PRECISION);
          expect(relationship.effectiveTo >= relationship.effectiveFrom, assignee.name).toBe(true);
        }
        expect(relationship.sourceUrl, assignee.name).toMatch(/^https:\/\//);
      }

      for (const relationship of assignee.corporateFamily) {
        expect(relationship.family.trim(), assignee.name).not.toBe("");
        expect(relationship.effectiveFrom, assignee.name).toMatch(ISO_DATE_AT_SUPPORTED_PRECISION);
        if (relationship.effectiveTo) {
          expect(relationship.effectiveTo, assignee.name).toMatch(ISO_DATE_AT_SUPPORTED_PRECISION);
          expect(relationship.effectiveTo >= relationship.effectiveFrom, assignee.name).toBe(true);
        }
        expect(relationship.sourceUrl, assignee.name).toMatch(/^https:\/\//);
      }
    }
  });
});

describe("patentsForParty in assignee mode", () => {
  it("orders records by patent year then number", () => {
    const patents = patentsForParty(sample.name, "assignee");
    expect(patents.length).toBeGreaterThan(0);

    const sortKeys = patents.map((p) => [p.patentYear ?? Number.POSITIVE_INFINITY, p.patentNumber] as const);
    const resorted = [...sortKeys].sort((a, b) => a[0] - b[0] || catalogCollator.compare(a[1], b[1]));
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
      expect(names, patent.patentNumber).toEqual([...names].sort((a, b) => catalogCollator.compare(a, b)));
    }
  });

  it("returns nothing for an unknown assignee", () => {
    expect(patentsForParty("Not A Real Assignee", "assignee")).toEqual([]);
  });
});
