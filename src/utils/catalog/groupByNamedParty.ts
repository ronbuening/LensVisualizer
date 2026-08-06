/**
 * Shared catalog grouping for records attributed to one or more named patent parties.
 *
 * Author pages, the patent index, and the lens library adapt the generic `items`
 * result to their local group shapes while retaining their established fallback IDs.
 */

import { catalogCollator } from "./collation.js";

export interface NamedPartyGroup<T> {
  id: string;
  label: string;
  items: T[];
  isFallback: boolean;
}

interface GroupByNamedPartyOptions {
  fallbackId: string;
  fallbackLabel: string;
  missingLabel?: string;
}

/**
 * Group each item under every unique named party, or under a fallback metadata bucket.
 *
 * A party listed twice on one item is deliberately counted once — an item never
 * appears twice in the same group, and group counts are not inflated.
 *
 * @param items - records to distribute across groups
 * @param partiesOf - named parties, an empty list, or undefined when metadata is absent
 * @param options - consumer-owned fallback IDs and labels
 * @returns named groups first, followed by fallback and missing-metadata groups
 */
export function groupByNamedParty<T>(
  items: readonly T[],
  partiesOf: (item: T) => readonly string[] | undefined,
  options: GroupByNamedPartyOptions,
): NamedPartyGroup<T>[] {
  const groups = new Map<string, NamedPartyGroup<T>>();

  const addItem = (id: string, label: string, item: T, isFallback: boolean) => {
    const group = groups.get(id) ?? { id, label, items: [], isFallback };
    group.items.push(item);
    groups.set(id, group);
  };

  for (const item of items) {
    const parties = partiesOf(item);
    if (parties === undefined && options.missingLabel !== undefined) {
      addItem("missing-metadata", options.missingLabel, item, false);
      continue;
    }
    if (!parties || parties.length === 0) {
      addItem(options.fallbackId, options.fallbackLabel, item, true);
      continue;
    }
    for (const party of new Set(parties)) addItem(`named:${party}`, party, item, false);
  }

  const rank = (group: NamedPartyGroup<T>) =>
    group.id.startsWith("named:") ? 0 : group.id === options.fallbackId ? 1 : 2;
  return [...groups.values()].sort((a, b) => rank(a) - rank(b) || catalogCollator.compare(a.label, b.label));
}
