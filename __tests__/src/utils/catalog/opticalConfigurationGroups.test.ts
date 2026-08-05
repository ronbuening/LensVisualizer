/**
 * Invariants for switchable `opticalConfiguration` groups.
 *
 * A hidden variant whose `groupKey` matches no visible partner is unreachable:
 * lensCatalog.ts excludes it from the debug list, and nothing else links to it.
 * Duplicate `order` values and multi-visible groups are equally undetectable at
 * runtime, so they are asserted here across the whole catalog.
 */

import { describe, expect, it } from "vitest";
import { ALL_CATALOG_KEYS, LENS_CATALOG } from "../../../../src/utils/catalog/lensCatalog.js";

const CONFIGURATION_GROUPS = (() => {
  const groups = new Map<string, string[]>();
  for (const key of ALL_CATALOG_KEYS) {
    const groupKey = LENS_CATALOG[key].opticalConfiguration?.groupKey;
    if (!groupKey) continue;
    groups.set(groupKey, [...(groups.get(groupKey) ?? []), key]);
  }
  return groups;
})();

describe("optical configuration groups", () => {
  it("has at least one configuration group to validate", () => {
    expect(CONFIGURATION_GROUPS.size).toBeGreaterThan(0);
  });

  it("gives every group at least two members", () => {
    const orphans = [...CONFIGURATION_GROUPS.entries()]
      .filter(([, keys]) => keys.length < 2)
      .map(([groupKey, keys]) => `${groupKey}: only ${keys.join(", ")}`);

    expect(orphans, "a single-member group is unreachable in the UI").toEqual([]);
  });

  it("gives every member of a group a unique toggle order", () => {
    const collisions = [...CONFIGURATION_GROUPS.entries()]
      .map(([groupKey, keys]) => {
        const orders = keys.map((key) => LENS_CATALOG[key].opticalConfiguration!.order);
        return { groupKey, orders };
      })
      .filter(({ orders }) => new Set(orders).size !== orders.length)
      .map(({ groupKey, orders }) => `${groupKey}: [${orders}]`);

    expect(collisions, "duplicate order makes the toggle sequence non-deterministic").toEqual([]);
  });

  it("gives every group exactly one visible member", () => {
    const wrong = [...CONFIGURATION_GROUPS.entries()]
      .map(([groupKey, keys]) => ({
        groupKey,
        visible: keys.filter((key) => LENS_CATALOG[key].visible !== false),
      }))
      .filter(({ visible }) => visible.length !== 1)
      .map(({ groupKey, visible }) => `${groupKey}: ${visible.length} visible (${visible.join(", ") || "none"})`);

    expect(wrong, "the group needs exactly one catalog entry point").toEqual([]);
  });

  it("gives every member a non-empty toggle label", () => {
    for (const [groupKey, keys] of CONFIGURATION_GROUPS) {
      for (const key of keys) {
        expect(LENS_CATALOG[key].opticalConfiguration!.label.trim(), `${groupKey}/${key}`).not.toBe("");
      }
    }
  });
});
