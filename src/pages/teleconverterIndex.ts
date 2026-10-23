/** Group published teleconverter summaries using the lens library's catalog ordering and anchors. */

import { catalogCollator } from "../utils/catalog/collation.js";
import { deriveMaker } from "../utils/catalog/lensMetadata.js";
import { groupByNamedParty } from "../utils/catalog/groupByNamedParty.js";
import { IMAGE_FORMATS, LENS_MOUNTS } from "../utils/catalog/lensTaxonomy.js";
import type { TeleconverterSummary } from "../utils/catalog/teleconverterSummaries.js";
import {
  formatGroupAnchorId,
  makerGroupAnchorId,
  mountGroupAnchorId,
  patentPartyGroupAnchorId,
  yearGroupAnchorId,
} from "./lensIndex/groupAnchors.js";

export type TeleconverterGroupMode = "maker" | "author" | "assignee" | "mount" | "format" | "year-asc" | "year-desc";

export const TELECONVERTER_GROUP_OPTIONS: ReadonlyArray<{
  mode: TeleconverterGroupMode;
  label: string;
  title: string;
}> = [
  { mode: "maker", label: "By Maker", title: "Makers" },
  { mode: "author", label: "By Inventor", title: "Inventors" },
  { mode: "assignee", label: "By Assignee", title: "Assignees" },
  { mode: "mount", label: "By Mount", title: "Mounts" },
  { mode: "format", label: "By Format", title: "Formats" },
  { mode: "year-asc", label: "By Patent Year", title: "Patent years" },
];

export interface TeleconverterGroup {
  id: string;
  label: string;
  items: TeleconverterSummary[];
}

export function parseTeleconverterGroupMode(value: string | null): TeleconverterGroupMode {
  return value === "year-desc" || TELECONVERTER_GROUP_OPTIONS.some((option) => option.mode === value)
    ? (value as TeleconverterGroupMode)
    : "maker";
}

export function groupTeleconverters(
  summaries: readonly TeleconverterSummary[],
  mode: TeleconverterGroupMode,
): TeleconverterGroup[] {
  const sorted = [...summaries].sort((a, b) => catalogCollator.compare(a.name, b.name));

  if (mode === "author" || mode === "assignee") {
    const field = mode === "author" ? "patentAuthors" : "patentAssignees";
    return groupByNamedParty(sorted, (item) => item[field], {
      fallbackId: "unnamed",
      fallbackLabel: mode === "author" ? "No named inventor" : "No named assignee or applicant",
      missingLabel: "No patent metadata",
    }).map(({ id, label, items }) => ({ id: patentPartyGroupAnchorId(mode, id), label, items }));
  }

  const groups = new Map<string, TeleconverterGroup>();
  const add = (id: string, label: string, item: TeleconverterSummary) => {
    const group = groups.get(id) ?? { id, label, items: [] };
    group.items.push(item);
    groups.set(id, group);
  };

  if (mode === "maker") {
    for (const item of sorted) {
      const maker = deriveMaker(item.name, item.maker);
      add(makerGroupAnchorId(maker.slug), maker.display, item);
    }
    return [...groups.values()].sort((a, b) => catalogCollator.compare(a.label, b.label));
  }

  if (mode === "mount" || mode === "format") {
    const metadata = mode === "mount" ? LENS_MOUNTS : IMAGE_FORMATS;
    const anchorId = mode === "mount" ? mountGroupAnchorId : formatGroupAnchorId;
    for (const item of sorted) {
      const ids = mode === "mount" ? [...new Set(item.lensMounts)] : item.imageFormat ? [item.imageFormat] : [];
      for (const id of ids) add(anchorId(id), metadata.find((entry) => entry.id === id)!.label, item);
      if (ids.length === 0) add(anchorId("unknown"), mode === "mount" ? "Unknown Mount" : "Unknown Format", item);
    }
    return [
      ...[...metadata].sort((a, b) => a.sortOrder - b.sortOrder).flatMap(({ id }) => groups.get(anchorId(id)) ?? []),
      ...(groups.get(anchorId("unknown")) ? [groups.get(anchorId("unknown"))!] : []),
    ];
  }

  const direction = mode === "year-desc" ? -1 : 1;
  sorted.sort((a, b) => {
    if (a.patentYear === undefined) return b.patentYear === undefined ? catalogCollator.compare(a.name, b.name) : 1;
    if (b.patentYear === undefined) return -1;
    return direction * (a.patentYear - b.patentYear) || catalogCollator.compare(a.name, b.name);
  });
  for (const item of sorted) {
    const decade = item.patentYear === undefined ? "Unknown Year" : `${Math.floor(item.patentYear / 10) * 10}s`;
    add(yearGroupAnchorId(decade), decade, item);
  }
  return [...groups.values()];
}
