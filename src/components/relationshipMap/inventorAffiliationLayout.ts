import type { InventorAffiliationRecord } from "../../utils/catalog/inventorAffiliations.js";

export interface AffiliationPosition {
  id: string;
  x: number;
  y: number;
}

/** Fixed company anchors and count-weighted inventor positions, with collision offsets. */
export function layoutInventorAffiliations(records: readonly InventorAffiliationRecord[]) {
  const assigneeIds = [
    ...new Set(records.flatMap((record) => record.affiliations.map((link) => link.assigneeId))),
  ].sort();
  const radius = Math.max(340, Math.sqrt(records.length) * 18, (assigneeIds.length * 110) / (2 * Math.PI));
  const width = radius * 2 + 300;
  const height = radius * 2 + 180;
  const cx = width / 2;
  const cy = height / 2;
  const assignees = assigneeIds.map((id, index) => {
    const angle =
      assigneeIds.length === 2 ? Math.PI * index : -Math.PI / 2 + (index * 2 * Math.PI) / assigneeIds.length;
    return {
      id,
      x: assigneeIds.length === 1 ? cx : cx + radius * Math.cos(angle),
      y: assigneeIds.length === 1 ? cy : cy + radius * Math.sin(angle),
    };
  });
  const anchors = new Map(assignees.map((node) => [node.id, node]));
  const spacing = 23;
  const cells = new Map<string, AffiliationPosition[]>();
  const occupy = (point: AffiliationPosition) => {
    const key = `${Math.floor(point.x / spacing)}:${Math.floor(point.y / spacing)}`;
    const cell = cells.get(key) ?? [];
    cell.push(point);
    cells.set(key, cell);
  };
  const available = (point: { x: number; y: number }) => {
    if (point.x < 30 || point.x > width - 30 || point.y < 30 || point.y > height - 30) return false;
    const cx = Math.floor(point.x / spacing);
    const cy = Math.floor(point.y / spacing);
    for (let dx = -1; dx <= 1; dx++)
      for (let dy = -1; dy <= 1; dy++) {
        if (
          (cells.get(`${cx + dx}:${cy + dy}`) ?? []).some(
            (other) => Math.hypot(point.x - other.x, point.y - other.y) < spacing,
          )
        )
          return false;
      }
    return true;
  };
  assignees.forEach(occupy);
  const inventors: Array<AffiliationPosition & { targetX: number; targetY: number }> = [];
  // Stable placement prevents a filter's input order from changing the picture.
  for (const record of [...records].sort((a, b) => a.inventor.id.localeCompare(b.inventor.id))) {
    const total = record.affiliations.reduce((sum, link) => sum + link.patentIds.length, 0);
    if (!total) continue;
    const target = record.affiliations.reduce(
      (point, link) => {
        const anchor = anchors.get(link.assigneeId)!;
        const weight = link.patentIds.length / total;
        return { x: point.x + anchor.x * weight, y: point.y + anchor.y * weight };
      },
      { x: 0, y: 0 },
    );
    let point = target;
    for (let attempt = 0; attempt < Math.max(1200, records.length * 60); attempt++) {
      const angle = attempt * 2.399963229728653;
      const offset = 7 * Math.sqrt(attempt);
      point = {
        x: target.x + Math.cos(angle) * offset,
        y: target.y + Math.sin(angle) * offset,
      };
      if (available(point)) break;
    }
    if (!available(point)) {
      // Dense single-company cohorts can exhaust the local spiral. A grid
      // fallback retains every inventor without stacking interactive targets.
      outer: for (let y = 30; y < height - 30; y += spacing + 1) {
        for (let x = 30; x < width - 30; x += spacing + 1) {
          if (!available({ x, y })) continue;
          point = { x, y };
          break outer;
        }
      }
    }
    const node = { id: record.inventor.id, ...point, targetX: target.x, targetY: target.y };
    inventors.push(node);
    occupy(node);
  }
  return { width, height, assignees, inventors };
}
