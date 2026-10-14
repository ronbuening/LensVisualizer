import type { SvgBounds } from "../../utils/svgCoordinates.js";
import { catalogCollator } from "../../utils/catalog/collation.js";
import type { UniversalLayoutNode, UniversalLayoutEdge } from "./universalLayout.js";

export function boundsIntersect(a: SvgBounds, b: SvgBounds): boolean {
  return a.x <= b.x + b.width && a.x + a.width >= b.x && a.y <= b.y + b.height && a.y + a.height >= b.y;
}

export function universalEdgeCurve(edge: UniversalLayoutEdge, curved: boolean) {
  const dx = edge.x2 - edge.x1,
    dy = edge.y2 - edge.y1;
  const length = Math.hypot(dx, dy) || 1;
  const bend = curved ? Math.min(60, length * 0.08) : 0;
  const cx = (edge.x1 + edge.x2) / 2 - (dy / length) * bend;
  const cy = (edge.y1 + edge.y2) / 2 + (dx / length) * bend;
  return {
    d: `M ${edge.x1} ${edge.y1} Q ${cx} ${cy} ${edge.x2} ${edge.y2}`,
    bounds: {
      x: Math.min(edge.x1, edge.x2, cx),
      y: Math.min(edge.y1, edge.y2, cy),
      width: Math.max(edge.x1, edge.x2, cx) - Math.min(edge.x1, edge.x2, cx),
      height: Math.max(edge.y1, edge.y2, cy) - Math.min(edge.y1, edge.y2, cy),
    },
  };
}

/** Screen-space collision grid: camera changes affect labels, never the graph's positions. */
export function placeUniversalLabels(
  nodes: readonly UniversalLayoutNode[],
  bounds: SvgBounds,
  scale: number,
  priorityIds: readonly string[],
  hubIds: ReadonlySet<string>,
) {
  const priority = new Map(priorityIds.map((id, i) => [id, i]));
  const sorted = nodes
    .filter((n) => priority.has(n.id) || hubIds.has(n.id) || n.r * scale >= 2)
    .slice()
    .sort(
      (a, b) =>
        (priority.get(a.id) ?? (hubIds.has(a.id) ? 1000 : 2000)) -
          (priority.get(b.id) ?? (hubIds.has(b.id) ? 1000 : 2000)) || catalogCollator.compare(a.id, b.id),
    );
  const occupied = new Map<string, SvgBounds[]>();
  const cells = (box: SvgBounds) => {
    const keys = [];
    for (let x = Math.floor(box.x / 64); x <= Math.floor((box.x + box.width) / 64); x++)
      for (let y = Math.floor(box.y / 64); y <= Math.floor((box.y + box.height) / 64); y++) keys.push(`${x}:${y}`);
    return keys;
  };
  const labels: { id: string; x: number; y: number; text: string; box: SvgBounds }[] = [];
  const viewport = { x: 0, y: 0, width: bounds.width * scale, height: bounds.height * scale };
  for (const node of sorted) {
    const x = (node.x - bounds.x) * scale,
      y = (node.y - bounds.y) * scale;
    const text = node.fullLabel.length > 30 ? `${node.fullLabel.slice(0, 29)}…` : node.fullLabel;
    const width = text.length * 7.8 + 8,
      height = 20;
    const offset = node.r * scale + 6;
    const candidates = [
      { x: x + offset, y: y - 10, width, height },
      { x: x - offset - width, y: y - 10, width, height },
      { x: x - width / 2, y: y + offset, width, height },
    ];
    let box = candidates.find(
      (box) =>
        box.x >= 0 &&
        box.y >= 0 &&
        box.x + width <= viewport.width &&
        box.y + height <= viewport.height &&
        cells(box).every((key) => (occupied.get(key) ?? []).every((other) => !boundsIntersect(box, other))),
    );
    if (!box && priority.get(node.id) === 0)
      box = {
        x: Math.max(0, Math.min(viewport.width - width, candidates[0].x)),
        y: Math.max(0, Math.min(viewport.height - height, candidates[0].y)),
        width,
        height,
      };
    if (!box) continue;
    for (const key of cells(box)) occupied.set(key, [...(occupied.get(key) ?? []), box]);
    labels.push({ id: node.id, text, x: bounds.x + (box.x + 4) / scale, y: bounds.y + (box.y + 14) / scale, box });
  }
  return labels;
}

export function directionalUniversalNode(
  nodes: readonly UniversalLayoutNode[],
  current: UniversalLayoutNode,
  key: string,
) {
  const direction =
    key === "ArrowRight" ? [1, 0] : key === "ArrowLeft" ? [-1, 0] : key === "ArrowDown" ? [0, 1] : [0, -1];
  return nodes
    .filter((n) => (n.x - current.x) * direction[0] + (n.y - current.y) * direction[1] > 0)
    .sort((a, b) => {
      const score = (n: UniversalLayoutNode) => {
        const dx = n.x - current.x,
          dy = n.y - current.y;
        return Math.hypot(dx, dy) + 2 * Math.abs(dx * direction[1] - dy * direction[0]);
      };
      return score(a) - score(b) || catalogCollator.compare(a.id, b.id);
    })[0];
}
