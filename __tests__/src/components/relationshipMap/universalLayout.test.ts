/**
 * Geometry coverage for the deterministic universal relationship layout.
 */

import { describe, expect, it } from "vitest";
import {
  layoutUniversalRelationshipGraph,
  universalNodeRadius,
} from "../../../../src/components/relationshipMap/universalLayout.js";
import type {
  UniversalRelationshipEdge,
  UniversalRelationshipGraph,
  UniversalRelationshipNode,
} from "../../../../src/utils/catalog/universalRelationshipGraph.js";
import { universalConnectedComponents } from "../../../../src/utils/catalog/universalRelationshipGraph.js";

function makeGraph(nodes: UniversalRelationshipNode[], edgePairs: Array<[string, string]>): UniversalRelationshipGraph {
  const edges: UniversalRelationshipEdge[] = edgePairs.map(([from, to], index) => ({
    id: `edge-${index}`,
    from,
    to,
    kind: from.startsWith("patent:") ? "authorship" : "family",
  }));
  const components = universalConnectedComponents(nodes, edges);
  return {
    nodes,
    edges,
    components,
    patents: [],
    stats: {
      authors: nodes.filter((node) => node.kind === "author").length,
      assignees: nodes.filter((node) => node.kind === "assignee").length,
      patents: nodes.filter((node) => node.kind === "patent").length,
      organizations: nodes.filter((node) => node.kind === "organization").length,
      families: nodes.filter((node) => node.kind === "family").length,
      patentRelationships: edges.filter((edge) => edge.kind === "authorship").length,
      corporateRelationships: edges.filter((edge) => edge.kind !== "authorship").length,
      components: components.length,
    },
  };
}

function corporateNode(id: string, name: string, kind: "organization" | "family" = "family") {
  return { id, name, kind } satisfies UniversalRelationshipNode;
}

describe("layoutUniversalRelationshipGraph", () => {
  it("is deterministic and produces finite coordinates", () => {
    const nodes = [
      corporateNode("family:a", "Family A"),
      corporateNode("organization:b", "Organization B", "organization"),
      corporateNode("family:c", "Family C"),
    ];
    const graph = makeGraph(nodes, [
      ["family:a", "organization:b"],
      ["organization:b", "family:c"],
    ]);
    const first = layoutUniversalRelationshipGraph(graph);
    expect(first).toEqual(layoutUniversalRelationshipGraph(graph));
    for (const node of first.nodes) {
      expect(Number.isFinite(node.x)).toBe(true);
      expect(Number.isFinite(node.y)).toBe(true);
    }
  });

  it("places the highest-degree node at its component center", () => {
    const nodes = [
      corporateNode("family:center", "Center"),
      corporateNode("organization:a", "A", "organization"),
      corporateNode("organization:b", "B", "organization"),
      corporateNode("organization:c", "C", "organization"),
    ];
    const graph = makeGraph(nodes, [
      ["family:center", "organization:a"],
      ["family:center", "organization:b"],
      ["family:center", "organization:c"],
    ]);
    const layout = layoutUniversalRelationshipGraph(graph);
    const component = layout.components[0];
    const center = layout.nodeById["family:center"];
    expect(center.x).toBe(component.x + component.width / 2);
    expect(center.y).toBe(component.y + component.height / 2);
    expect(component.rootId).toBe("family:center");
  });

  it("packs disconnected components without overlapping their bounds", () => {
    const graph = makeGraph(
      [
        corporateNode("family:a", "A"),
        corporateNode("organization:b", "B", "organization"),
        corporateNode("family:c", "C"),
        corporateNode("organization:d", "D", "organization"),
      ],
      [
        ["family:a", "organization:b"],
        ["family:c", "organization:d"],
      ],
    );
    const layout = layoutUniversalRelationshipGraph(graph);
    expect(layout.components).toHaveLength(2);
    const [left, right] = layout.components;
    const overlaps =
      left.x < right.x + right.width &&
      left.x + left.width > right.x &&
      left.y < right.y + right.height &&
      left.y + left.height > right.y;
    expect(overlaps).toBe(false);
  });

  it("emits one positioned edge per graph edge", () => {
    const graph = makeGraph(
      [corporateNode("family:a", "A"), corporateNode("organization:b", "B", "organization")],
      [["family:a", "organization:b"]],
    );
    const layout = layoutUniversalRelationshipGraph(graph);
    expect(layout.edges).toHaveLength(graph.edges.length);
    expect(layout.edges[0]).toMatchObject({ from: "family:a", to: "organization:b" });
  });

  it("uses compact patent nodes and prominent family hubs", () => {
    expect(universalNodeRadius("patent")).toBeLessThan(universalNodeRadius("author"));
    expect(universalNodeRadius("family")).toBeGreaterThan(universalNodeRadius("assignee"));
  });
});
