import { describe, expect, it } from "vitest";
import {
  ALL_AUTHOR_ASSIGNEES,
  AUTHOR_ASSIGNEE_STRATA,
  AUTHOR_DIRECTORY_ENTRIES,
  UNASSIGNED_AUTHOR_COUNT,
  UNASSIGNED_AUTHORS,
  filterAuthorsByAssignee,
} from "../../../../src/utils/catalog/authorAssignees.js";
import { AUTHORS } from "../../../../src/utils/catalog/authorCatalog.js";

describe("author assignee strata", () => {
  it("represents every author exactly once in the unfiltered directory", () => {
    expect(AUTHOR_DIRECTORY_ENTRIES).toHaveLength(AUTHORS.length);
    expect(new Set(AUTHOR_DIRECTORY_ENTRIES.map((entry) => entry.author.slug)).size).toBe(AUTHORS.length);
  });

  it("records author counts that agree with assignee filtering", () => {
    expect(AUTHOR_ASSIGNEE_STRATA.length).toBeGreaterThan(0);
    for (const stratum of AUTHOR_ASSIGNEE_STRATA) {
      const filtered = filterAuthorsByAssignee(AUTHOR_DIRECTORY_ENTRIES, stratum.slug);
      expect(filtered, stratum.name).toHaveLength(stratum.authorCount);
      expect(filtered.every((entry) => entry.assignees.some((assignee) => assignee.slug === stratum.slug))).toBe(true);
    }
  });

  it("supports all-assignee and no-named-assignee buckets", () => {
    expect(filterAuthorsByAssignee(AUTHOR_DIRECTORY_ENTRIES, ALL_AUTHOR_ASSIGNEES)).toBe(AUTHOR_DIRECTORY_ENTRIES);
    const unassigned = filterAuthorsByAssignee(AUTHOR_DIRECTORY_ENTRIES, UNASSIGNED_AUTHORS);
    expect(unassigned).toHaveLength(UNASSIGNED_AUTHOR_COUNT);
    expect(unassigned.every((entry) => entry.assignees.length === 0)).toBe(true);
  });
});
