export interface CompanyChordInput {
  left: string;
  right: string;
  inventorIds: readonly string[];
}

/** Undirected ribbons reserve the same angular width at both ends for each shared inventor. */
export function companyChordLayout(ids: readonly string[], pairs: readonly CompanyChordInput[]) {
  const totals = new Map(
    ids.map((id) => [
      id,
      pairs.reduce((sum, pair) => sum + (pair.left === id || pair.right === id ? pair.inventorIds.length : 0), 0),
    ]),
  );
  const total = [...totals.values()].reduce((sum, count) => sum + count, 0);
  const unit = total > 0 ? (Math.PI * 2 - ids.length * 0.12) / total : 0;
  const point = (angle: number, radius = 235) => ({
    x: 500 + Math.cos(angle) * radius,
    y: 310 + Math.sin(angle) * radius,
  });
  const arc = (start: number, end: number, radius: number) => {
    const a = point(start, radius);
    const b = point(end, radius);
    return `M ${a.x} ${a.y} A ${radius} ${radius} 0 ${end - start > Math.PI ? 1 : 0} 1 ${b.x} ${b.y}`;
  };
  let cursor = -Math.PI / 2;
  const sectors = ids.map((id) => {
    const start = cursor;
    const end = start + (totals.get(id) ?? 0) * unit;
    cursor = end + 0.12;
    return {
      id,
      start,
      end,
      count: totals.get(id) ?? 0,
      path: arc(start, end, 244),
      anchor: point((start + end) / 2, 255),
      label: point((start + end) / 2, 275),
    };
  });
  // Small adjacent sectors need separate label rows even when their arcs are close.
  for (const side of [-1, 1]) {
    const labels = sectors
      .filter((sector) => sector.count > 0 && (sector.label.x < 500 ? -1 : 1) === side)
      .sort((a, b) => a.label.y - b.label.y);
    let lastY = 10;
    labels.forEach((sector, index) => {
      sector.label = {
        x: side < 0 ? 210 : 790,
        y: Math.max(lastY + 22, Math.min(590 - (labels.length - index - 1) * 22, sector.label.y)),
      };
      lastY = sector.label.y;
    });
  }
  const offsets = new Map(sectors.map((sector) => [sector.id, sector.start]));
  const ribbons = pairs.map((pair) => {
    const a0 = offsets.get(pair.left)!;
    const b0 = offsets.get(pair.right)!;
    const a1 = a0 + pair.inventorIds.length * unit;
    const b1 = b0 + pair.inventorIds.length * unit;
    offsets.set(pair.left, a1);
    offsets.set(pair.right, b1);
    const b = point(b0);
    const a = point(a0);
    const path = `${arc(a0, a1, 235)} Q 500 310 ${b.x} ${b.y} ${arc(b0, b1, 235).replace(/^M [^A]+/, "")} Q 500 310 ${a.x} ${a.y} Z`;
    return { ...pair, path };
  });
  return { sectors, ribbons };
}
