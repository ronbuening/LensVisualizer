/**
 * Radial layout engine for the patent relationship map.
 *
 * Pure geometry: maps a RelationshipGraph to SVG coordinates. Party focus uses
 * two rings (patents, then related parties); patent focus uses one party ring.
 * Both are deterministic and collision-free by construction — evenly spaced
 * ring slots whose radii grow with node count, with no force simulation.
 */

import type { RelationshipGraph } from "../../utils/catalog/relationshipGraph.js";

export interface LayoutNode {
  id: string;
  x: number;
  y: number;
  r: number; // node circle radius
  label: string; // truncated display label
  fullLabel: string; // untruncated, for <title>
  labelX: number;
  labelY: number;
  labelAnchor: "start" | "middle" | "end";
}

export interface LayoutEdge {
  from: string;
  to: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export interface RelationshipLayout {
  width: number; // viewBox width
  height: number; // viewBox height
  nodes: LayoutNode[]; // center first, then patents, then parties
  nodeById: Record<string, LayoutNode>;
  edges: LayoutEdge[];
}

const CENTER_R = 26;
const PATENT_R = 10;
const PARTY_R = 14;
const MIN_PATENT_ARC = 48; // min arc length between adjacent patent nodes, SVG units
const MIN_PARTY_ARC = 56;
const MIN_RING_1 = 140; // min patent-ring radius
const MIN_RING_GAP = 130; // min gap between ring 1 and ring 2
const LABEL_MARGIN = 170; // outer padding so party labels are never clipped
const LABEL_MAX_CHARS = 24;

const TAU = 2 * Math.PI;
const TOP = -Math.PI / 2;

/** Truncate a label to `max` characters, appending an ellipsis when clipped. */
export function truncateLabel(value: string, max = LABEL_MAX_CHARS): string {
  if (value.length <= max) return value;
  return value.slice(0, max - 1) + "…";
}

/** Normalize an angle in radians to the [0, 2π) range. */
function normalizeAngle(angle: number): number {
  return ((angle % TAU) + TAU) % TAU;
}

/** Compute label placement for a node given the angle of its ring position. */
function placeLabel(
  x: number,
  y: number,
  r: number,
  angle: number,
): Pick<LayoutNode, "labelX" | "labelY" | "labelAnchor"> {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  if (cos > 0.35) {
    return { labelX: x + r + 6, labelY: y + 4, labelAnchor: "start" };
  }
  if (cos < -0.35) {
    return { labelX: x - r - 6, labelY: y + 4, labelAnchor: "end" };
  }
  return { labelX: x, labelY: sin < 0 ? y - r - 8 : y + r + 16, labelAnchor: "middle" };
}

/** Compute deterministic SVG coordinates for the two-ring relationship graph. */
export function layoutRelationshipGraph(graph: RelationshipGraph): RelationshipLayout {
  if (graph.centerKind === "patent") {
    const count = graph.parties.length;
    const ringRadius = Math.max(MIN_RING_1, (count * MIN_PARTY_ARC) / TAU);
    const half = ringRadius + LABEL_MARGIN;
    const cx = half;
    const cy = half;
    const centerLabel = graph.center.patentNumber;
    const centerNode: LayoutNode = {
      id: graph.center.id,
      x: cx,
      y: cy,
      r: CENTER_R,
      label: truncateLabel(centerLabel),
      fullLabel: centerLabel,
      labelX: cx,
      labelY: cy + CENTER_R + 16,
      labelAnchor: "middle",
    };
    const nodes = [centerNode];
    const nodeById: Record<string, LayoutNode> = { [centerNode.id]: centerNode };

    graph.parties.forEach((party, index) => {
      const angle = TOP + (TAU * index) / count;
      const x = cx + ringRadius * Math.cos(angle);
      const y = cy + ringRadius * Math.sin(angle);
      const node: LayoutNode = {
        id: party.id,
        x,
        y,
        r: PARTY_R,
        label: truncateLabel(party.ref.name),
        fullLabel: party.ref.name,
        ...placeLabel(x, y, PARTY_R, angle),
      };
      nodes.push(node);
      nodeById[node.id] = node;
    });

    const edges = graph.edges.flatMap((edge) => {
      const from = nodeById[edge.from];
      const to = nodeById[edge.to];
      return from && to ? [{ from: edge.from, to: edge.to, x1: from.x, y1: from.y, x2: to.x, y2: to.y }] : [];
    });

    return { width: 2 * half, height: 2 * half, nodes, nodeById, edges };
  }

  const n = graph.patents.length; // always ≥ 1
  const m = graph.parties.length; // can be 0

  const R1 = Math.max(MIN_RING_1, (n * MIN_PATENT_ARC) / TAU);
  const R2 = Math.max(R1 + MIN_RING_GAP, (m * MIN_PARTY_ARC) / TAU);
  const half = R2 + LABEL_MARGIN;
  const width = 2 * half;
  const height = 2 * half;
  const cx = half;
  const cy = half;

  const nodes: LayoutNode[] = [];
  const nodeById: Record<string, LayoutNode> = {};

  // Center node.
  const centerLabel = graph.center.ref.name;
  const centerNode: LayoutNode = {
    id: graph.center.id,
    x: cx,
    y: cy,
    r: CENTER_R,
    label: truncateLabel(centerLabel),
    fullLabel: centerLabel,
    labelX: cx,
    labelY: cy + CENTER_R + 16,
    labelAnchor: "middle",
  };
  nodes.push(centerNode);
  nodeById[centerNode.id] = centerNode;

  // Patent ring — input order is already year-sorted.
  const patentAngles = new Map<string, number>();
  graph.patents.forEach((patent, i) => {
    const angle = TOP + (TAU * i) / n;
    patentAngles.set(patent.id, angle);
    const x = cx + R1 * Math.cos(angle);
    const y = cy + R1 * Math.sin(angle);
    const node: LayoutNode = {
      id: patent.id,
      x,
      y,
      r: PATENT_R,
      label: truncateLabel(patent.patentNumber),
      fullLabel: patent.patentNumber,
      ...placeLabel(x, y, PATENT_R, angle),
    };
    nodes.push(node);
    nodeById[node.id] = node;
  });

  // Party ring — order by circular mean of connected patents' angles.
  const partyPref = graph.parties.map((party) => {
    let sinSum = 0;
    let cosSum = 0;
    for (const pid of party.patentIds) {
      const angle = patentAngles.get(pid);
      if (angle === undefined) continue;
      sinSum += Math.sin(angle);
      cosSum += Math.cos(angle);
    }
    const pref = Math.atan2(sinSum, cosSum);
    return { party, prefNorm: normalizeAngle(pref) };
  });

  partyPref.sort((a, b) => a.prefNorm - b.prefNorm || a.party.ref.name.localeCompare(b.party.ref.name));

  // Anchor the first sorted party at its preferred angle so a lone party lands
  // exactly on its preference and no party is rotated to the far side.
  const anchor = partyPref.length > 0 ? partyPref[0].prefNorm : 0;
  partyPref.forEach(({ party }, j) => {
    const angle = anchor + (TAU * j) / m;
    const x = cx + R2 * Math.cos(angle);
    const y = cy + R2 * Math.sin(angle);
    const node: LayoutNode = {
      id: party.id,
      x,
      y,
      r: PARTY_R,
      label: truncateLabel(party.ref.name),
      fullLabel: party.ref.name,
      ...placeLabel(x, y, PARTY_R, angle),
    };
    nodes.push(node);
    nodeById[node.id] = node;
  });

  // Edges — straight segments between node centers (nodes draw on top).
  const edges: LayoutEdge[] = [];
  for (const edge of graph.edges) {
    const from = nodeById[edge.from];
    const to = nodeById[edge.to];
    if (!from || !to) continue;
    edges.push({ from: edge.from, to: edge.to, x1: from.x, y1: from.y, x2: to.x, y2: to.y });
  }

  return { width, height, nodes, nodeById, edges };
}
