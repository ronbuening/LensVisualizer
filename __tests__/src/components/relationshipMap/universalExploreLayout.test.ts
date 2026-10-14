import { describe, expect, it } from "vitest";
import {
  buildUniversalNeighborhoods,
  layoutUniversalNeighborhoods,
} from "../../../../src/components/relationshipMap/universalExploreLayout.js";
import { layoutUniversalRelationshipGraph } from "../../../../src/components/relationshipMap/universalLayout.js";
import {
  boundsIntersect,
  placeUniversalLabels,
  universalEdgeCurve,
} from "../../../../src/components/relationshipMap/universalMapGeometry.js";
import { buildUniversalRelationshipGraph } from "../../../../src/utils/catalog/universalRelationshipGraph.js";
import { universalFixture, assignee, patent } from "../../../universalGraphFixture.js";

describe("universal projections and screen geometry", () => {
  it("reconciles every catalog entity and edge exactly once across summaries and bridges", () => {
    const graph = buildUniversalRelationshipGraph();
    const layout = layoutUniversalRelationshipGraph(graph);
    const model = buildUniversalNeighborhoods(graph, layout);
    expect(model.neighborhoods.flatMap((n) => n.nodeIds).sort()).toEqual(graph.nodes.map((n) => n.id).sort());
    expect(
      [...model.neighborhoods.flatMap((n) => n.edgeIds), ...model.bridges.flatMap((b) => b.edgeIds)].sort(),
    ).toEqual(graph.edges.map((e) => e.id).sort());
    expect(model.neighborhoods.reduce((sum, n) => sum + n.patents, 0)).toBe(graph.stats.patents);
    const summary = layoutUniversalNeighborhoods(graph, model, 1200);
    expect(summary).toEqual(layoutUniversalNeighborhoods(graph, model, 1200));
    for (const [i, node] of summary.nodes.entries())
      for (const other of summary.nodes.slice(i + 1)) expect(boundsIntersect(node, other)).toBe(false);
  });
  it("preserves independent assignees, joint assignments, inventor bridges and non-patent grouping", () => {
    const graph = universalFixture(
      [
        assignee("Alpha"),
        assignee("Beta"),
        patent("P"),
        patent("Q"),
        {
          id: "I",
          kind: "author",
          name: "Inventor",
          patentCount: 2,
          ref: { role: "author", name: "Inventor", slug: "inventor" },
        },
        { id: "maker", kind: "maker", slug: "maker", name: "Maker" },
        { id: "model", kind: "lens", name: "Book model", lens: { key: "book", name: "Book model" } },
      ],
      [
        { id: "pa", from: "P", to: "Alpha", kind: "assignment" },
        { id: "pb", from: "P", to: "Beta", kind: "assignment" },
        { id: "qb", from: "Q", to: "Beta", kind: "assignment" },
        { id: "pi", from: "P", to: "I", kind: "authorship" },
        { id: "qi", from: "Q", to: "I", kind: "authorship" },
        { id: "book", from: "model", to: "maker", kind: "catalog-maker" },
      ],
    );
    const model = buildUniversalNeighborhoods(graph, layoutUniversalRelationshipGraph(graph));
    expect(model.owner.get("Alpha")).not.toBe(model.owner.get("Beta"));
    expect(model.bridges.every((b) => b.category === "patent")).toBe(true);
    expect(model.neighborhoods.find((n) => n.anchorId === "maker")?.nodeIds.sort()).toEqual(["maker", "model"]);
  });
  it("keeps selected labels, suppresses collisions and catches edges crossing the viewport", () => {
    const nodes = Array.from({ length: 50 }, (_, i) => ({
      id: String(i),
      kind: "patent" as const,
      x: 100 + i,
      y: 100 + i / 2,
      r: 5,
      label: `Patent ${i}`,
      fullLabel: `Patent ${i}`,
      componentIndex: 0,
      clusterId: "cluster",
    }));
    const labels = placeUniversalLabels(nodes, { x: 0, y: 0, width: 400, height: 300 }, 1, ["25"], new Set());
    expect(labels.some((l) => l.id === "25")).toBe(true);
    expect(labels.length).toBeLessThan(nodes.length);
    for (const [i, label] of labels.entries())
      for (const other of labels.slice(i + 1)) expect(boundsIntersect(label.box, other.box)).toBe(false);
    const curve = universalEdgeCurve({ id: "edge", from: "a", to: "b", x1: -100, x2: 600, y1: 150, y2: 150 }, true);
    expect(boundsIntersect(curve.bounds, { x: 0, y: 0, width: 400, height: 300 })).toBe(true);
  });
});
