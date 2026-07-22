/**
 * Geometry coverage for the radial relationship-map layout engine.
 *
 * Uses synthetic RelationshipGraph literals (no catalog import) so the tests
 * stay stable as lens data changes.
 */

import { describe, expect, it } from "vitest";
import { layoutRelationshipGraph, truncateLabel } from "../../../../src/components/relationshipMap/layout.js";
import type {
  GraphPartyNode,
  GraphPatentNode,
  PartyRef,
  RelationshipGraph,
} from "../../../../src/utils/catalog/relationshipGraph.js";

const CENTER_REF: PartyRef = { role: "author", name: "Center Person", slug: "center-person" };

function patent(i: number): GraphPatentNode {
  return {
    id: `patent:P${i}`,
    patentNumber: `P${i}`,
    patentYear: 2000 + i,
    authors: [],
    assignees: [],
    lenses: [],
  };
}

function party(i: number, patentIds: string[]): GraphPartyNode {
  const ref: PartyRef = { role: "assignee", name: `Party ${String.fromCharCode(65 + i)}`, slug: `party-${i}` };
  return { id: `assignee:party-${i}`, ref, patentIds, hasPage: false };
}

/** Build a synthetic graph with `n` patents and the given party nodes. */
function makeGraph(n: number, parties: GraphPartyNode[] = []): RelationshipGraph {
  const patents = Array.from({ length: n }, (_, i) => patent(i));
  const center: GraphPartyNode = {
    id: "author:center-person",
    ref: CENTER_REF,
    patentIds: patents.map((p) => p.id),
    hasPage: true,
  };
  const edges = [
    ...patents.map((p) => ({ from: center.id, to: p.id })),
    ...parties.flatMap((pa) => pa.patentIds.map((pid) => ({ from: pid, to: pa.id }))),
  ];
  return { center, patents, parties, edges };
}

/** Recover a node's ring angle from its coordinates about the layout center. */
function angleOf(node: { x: number; y: number }, cx: number, cy: number): number {
  return Math.atan2(node.y - cy, node.x - cx);
}

describe("layoutRelationshipGraph", () => {
  it("is deterministic", () => {
    const g = makeGraph(5, [party(0, ["patent:P0", "patent:P2"]), party(1, ["patent:P3"])]);
    expect(layoutRelationshipGraph(g)).toEqual(layoutRelationshipGraph(g));
  });

  it("places a single patent at the top", () => {
    const layout = layoutRelationshipGraph(makeGraph(1));
    const cx = layout.width / 2;
    const cy = layout.height / 2;
    const p = layout.nodeById["patent:P0"];
    expect(Math.abs(p.x - cx)).toBeLessThan(1e-6);
    // With m = 0 the patent ring radius degrades to MIN_RING_1 = 140, above center.
    expect(Math.abs(p.y - (cy - 140))).toBeLessThan(1e-6);
  });

  it("spaces 8 patents at equal 2π/8 gaps", () => {
    const layout = layoutRelationshipGraph(makeGraph(8));
    const cx = layout.width / 2;
    const cy = layout.height / 2;
    const angles = layout.nodes
      .filter((node) => node.id.startsWith("patent:"))
      .map((node) => (Math.atan2(node.y - cy, node.x - cx) + 2 * Math.PI) % (2 * Math.PI))
      .sort((a, b) => a - b);
    for (let i = 1; i < angles.length; i++) {
      expect(Math.abs(angles[i] - angles[i - 1] - (2 * Math.PI) / 8)).toBeLessThan(1e-6);
    }
  });

  it("grows radii with node count via the max() formula", () => {
    const parties = Array.from({ length: 40 }, (_, i) => party(i, ["patent:P0"]));
    const layout = layoutRelationshipGraph(makeGraph(40, parties));
    const cx = layout.width / 2;
    const cy = layout.height / 2;
    const R1 = Math.hypot(layout.nodeById["patent:P0"].x - cx, layout.nodeById["patent:P0"].y - cy);
    const R2 = Math.hypot(layout.nodeById["assignee:party-0"].x - cx, layout.nodeById["assignee:party-0"].y - cy);
    expect(R1).toBeGreaterThanOrEqual((40 * 48) / (2 * Math.PI) - 1e-6);
    expect(R2).toBeGreaterThanOrEqual(R1 + 130 - 1e-6);
    expect(R2).toBeGreaterThanOrEqual((40 * 56) / (2 * Math.PI) - 1e-6);
  });

  it("keeps every pair of 12 party nodes well separated", () => {
    const parties = Array.from({ length: 12 }, (_, i) => party(i, ["patent:P0"]));
    const layout = layoutRelationshipGraph(makeGraph(3, parties));
    const partyNodes = layout.nodes.filter((node) => node.id.startsWith("assignee:"));
    for (let i = 0; i < partyNodes.length; i++) {
      for (let j = i + 1; j < partyNodes.length; j++) {
        const d = Math.hypot(partyNodes[i].x - partyNodes[j].x, partyNodes[i].y - partyNodes[j].y);
        expect(d).toBeGreaterThan(56 * 0.9);
      }
    }
  });

  it("uses the circular mean across the wrap for party placement", () => {
    // 12 patents; party A on patents 0 and 11 (straddling the top), party B on
    // patent 6 (bottom). Naive averaging would flip A to the bottom.
    const partyA = party(0, ["patent:P0", "patent:P11"]);
    const partyB = party(1, ["patent:P6"]);
    const layout = layoutRelationshipGraph(makeGraph(12, [partyA, partyB]));
    const cy = layout.height / 2;
    expect(layout.nodeById["assignee:party-0"].y).toBeLessThan(cy); // A near top
    expect(layout.nodeById["assignee:party-1"].y).toBeGreaterThan(cy); // B near bottom
  });

  it("places a lone party exactly at its preferred angle", () => {
    // Party connected to patent 6 of 12 sits at the bottom (angle ≈ +π/2).
    const layout = layoutRelationshipGraph(makeGraph(12, [party(0, ["patent:P6"])]));
    const cx = layout.width / 2;
    const cy = layout.height / 2;
    const patentAngle = angleOf(layout.nodeById["patent:P6"], cx, cy);
    const partyAngle = angleOf(layout.nodeById["assignee:party-0"], cx, cy);
    expect(Math.abs(partyAngle - patentAngle)).toBeLessThan(1e-6);
  });

  it("truncates long labels and leaves short ones", () => {
    expect(truncateLabel("short")).toBe("short");
    const long = "x".repeat(40);
    const out = truncateLabel(long, 24);
    expect(out.endsWith("…")).toBe(true);
    expect(out.length).toBe(24);
  });

  it("produces finite coordinates across sizes", () => {
    for (const n of [1, 3, 50]) {
      for (const m of [0, 1, 60]) {
        const parties = Array.from({ length: m }, (_, i) => party(i, [`patent:P${i % n}`]));
        const layout = layoutRelationshipGraph(makeGraph(n, parties));
        for (const node of layout.nodes) {
          expect(Number.isFinite(node.x)).toBe(true);
          expect(Number.isFinite(node.y)).toBe(true);
          expect(Number.isFinite(node.labelX)).toBe(true);
          expect(Number.isFinite(node.labelY)).toBe(true);
        }
        for (const edge of layout.edges) {
          expect(Number.isFinite(edge.x1) && Number.isFinite(edge.y2)).toBe(true);
        }
      }
    }
  });
});
