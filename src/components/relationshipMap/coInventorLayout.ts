import type { InventorAffiliationRecord } from "../../utils/catalog/inventorAffiliations.js";

/** Give each inventor and label their own space while retaining assignee group boundaries. */
export function coInventorLayout(members: readonly InventorAffiliationRecord[]) {
  const ids = [...new Set(members.map((record) => record.affiliations[0]?.assigneeId ?? "unassigned"))].sort();
  const columns = Math.min(2, ids.length || 1);
  const width = columns * 480;
  const groups: { id: string; x: number; y: number; width: number; height: number }[] = [];
  const points = new Map<string, { x: number; y: number; record: InventorAffiliationRecord }>();
  let rowY = 0;
  let rowHeight = 0;
  ids.forEach((id, index) => {
    if (index > 0 && index % columns === 0) {
      rowY += rowHeight;
      rowHeight = 0;
    }
    const peers = members.filter((record) => (record.affiliations[0]?.assigneeId ?? "unassigned") === id);
    const height = 65 + Math.ceil(peers.length / 2) * 115;
    const x = (index % columns) * 480;
    groups.push({ id, x, y: rowY, width: 480, height });
    rowHeight = Math.max(rowHeight, height);
    peers.forEach((record, i) =>
      points.set(record.inventor.id, {
        x: x + (peers.length === 1 ? 240 : 120 + (i % 2) * 240),
        y: rowY + 95 + Math.floor(i / 2) * 115,
        record,
      }),
    );
  });
  return { width, height: Math.max(180, rowY + rowHeight), groups, points };
}
