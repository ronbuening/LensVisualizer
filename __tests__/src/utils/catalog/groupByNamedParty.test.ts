/**
 * Shared named-party grouping semantics used by author, patent, and lens-index catalogs.
 */

import { describe, expect, it } from "vitest";
import { groupByNamedParty } from "../../../../src/utils/catalog/groupByNamedParty.js";

interface Item {
  id: string;
  parties?: string[];
}

describe("groupByNamedParty", () => {
  it("deduplicates named parties and orders fallback states after named groups", () => {
    const named = { id: "named", parties: ["Beta", "Alpha", "Alpha"] };
    const fallback = { id: "fallback", parties: [] };
    const missing = { id: "missing" };

    const groups = groupByNamedParty<Item>([missing, fallback, named], (item) => item.parties, {
      fallbackId: "unnamed",
      fallbackLabel: "No named party",
      missingLabel: "No metadata",
    });

    expect(groups.map(({ id, label, isFallback }) => ({ id, label, isFallback }))).toEqual([
      { id: "named:Alpha", label: "Alpha", isFallback: false },
      { id: "named:Beta", label: "Beta", isFallback: false },
      { id: "unnamed", label: "No named party", isFallback: true },
      { id: "missing-metadata", label: "No metadata", isFallback: false },
    ]);
    expect(groups[0].items).toEqual([named]);
    expect(groups[1].items).toEqual([named]);
    expect(groups[2].items).toEqual([fallback]);
    expect(groups[3].items).toEqual([missing]);
  });

  it("uses the fallback bucket for absent parties when no missing label is configured", () => {
    const item: Item = { id: "missing" };
    const groups = groupByNamedParty([item], (entry) => entry.parties, {
      fallbackId: "fallback",
      fallbackLabel: "Fallback",
    });

    expect(groups).toEqual([{ id: "fallback", label: "Fallback", items: [item], isFallback: true }]);
  });
});
