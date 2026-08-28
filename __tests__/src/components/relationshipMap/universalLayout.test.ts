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
import {
  buildUniversalRelationshipGraph,
  universalConnectedComponents,
} from "../../../../src/utils/catalog/universalRelationshipGraph.js";

function makeGraph(nodes: UniversalRelationshipNode[], edgePairs: Array<[string, string]>): UniversalRelationshipGraph {
  const nodeById = new Map(nodes.map((node) => [node.id, node]));
  const edges: UniversalRelationshipEdge[] = edgePairs.map(([from, to], index) => ({
    id: `edge-${index}`,
    from,
    to,
    kind:
      from.startsWith("patent:") || to.startsWith("patent:")
        ? nodeById.get(from.startsWith("patent:") ? to : from)?.kind === "assignee"
          ? "assignment"
          : "authorship"
        : "family",
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
      patentRelationships: edges.filter((edge) => edge.kind === "authorship" || edge.kind === "assignment").length,
      corporateRelationships: edges.filter((edge) => edge.kind !== "authorship" && edge.kind !== "assignment").length,
      components: components.length,
    },
  };
}

function corporateNode(id: string, name: string, kind: "organization" | "family" = "family") {
  return { id, name, kind } satisfies UniversalRelationshipNode;
}

function partyNode(id: string, name: string, kind: "author" | "assignee") {
  const slug = id.slice(id.indexOf(":") + 1);
  return {
    id,
    name,
    kind,
    ref: { role: kind, name, slug },
    patentCount: 1,
  } satisfies UniversalRelationshipNode;
}

function patentNode(index: number, prefix = "US") {
  const patentNumber = `${prefix} ${index}`;
  const id = `patent:${patentNumber}`;
  return {
    id,
    name: patentNumber,
    kind: "patent",
    patent: {
      id,
      patentNumber,
      patentYear: 2000 + index,
      authors: [],
      assignees: [],
      lenses: [],
    },
  } satisfies UniversalRelationshipNode;
}

function boundsOverlap(
  left: { x: number; y: number; width: number; height: number },
  right: { x: number; y: number; width: number; height: number },
): boolean {
  return (
    left.x < right.x + right.width &&
    left.x + left.width > right.x &&
    left.y < right.y + right.height &&
    left.y + left.height > right.y
  );
}

function halosOverlap(
  left: { x: number; y: number; width: number; height: number },
  right: { x: number; y: number; width: number; height: number },
): boolean {
  const leftCenter = { x: left.x + left.width / 2, y: left.y + left.height / 2 };
  const rightCenter = { x: right.x + right.width / 2, y: right.y + right.height / 2 };
  return Math.hypot(leftCenter.x - rightCenter.x, leftCenter.y - rightCenter.y) < left.width / 2 + right.width / 2;
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

  it("places the highest-degree fallback node at its neighborhood center", () => {
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
    const cluster = layout.clusters[0];
    const center = layout.nodeById["family:center"];
    expect(center.x).toBe(cluster.x + cluster.width / 2);
    expect(center.y).toBe(cluster.y + cluster.height / 2);
    expect(component.rootId).toBe("family:center");
    expect(cluster.anchorId).toBe("family:center");
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
    expect(boundsOverlap(left, right)).toBe(false);
  });

  it("creates separate neighborhoods for major assignee hubs in one connected component", () => {
    const alpha = partyNode("assignee:alpha", "Alpha Optics", "assignee");
    const beta = partyNode("assignee:beta", "Beta Optics", "assignee");
    const bridge = partyNode("author:bridge", "Shared Inventor", "author");
    const alphaPatents = Array.from({ length: 8 }, (_, index) => patentNode(index + 1, "AA"));
    const betaPatents = Array.from({ length: 8 }, (_, index) => patentNode(index + 1, "BB"));
    const graph = makeGraph(
      [alpha, beta, bridge, ...alphaPatents, ...betaPatents],
      [
        ...alphaPatents.map((patent) => [patent.id, alpha.id] satisfies [string, string]),
        ...betaPatents.map((patent) => [patent.id, beta.id] satisfies [string, string]),
        [alphaPatents[0].id, bridge.id],
        [betaPatents[0].id, bridge.id],
      ],
    );

    const layout = layoutUniversalRelationshipGraph(graph);
    expect(layout.components).toHaveLength(1);
    expect(layout.clusters).toHaveLength(2);
    expect(new Set(layout.clusters.map((cluster) => cluster.anchorId))).toEqual(new Set([alpha.id, beta.id]));
    expect(layout.nodeById[alpha.id].clusterId).not.toBe(layout.nodeById[beta.id].clusterId);
    expect(halosOverlap(layout.clusters[0], layout.clusters[1])).toBe(false);
  });

  it("uses a qualifying corporate family as one hub for its assignee names", () => {
    const family = corporateNode("family:lineage", "Example lineage");
    const early = partyNode("assignee:early", "Early Optics", "assignee");
    const modern = partyNode("assignee:modern", "Modern Optics", "assignee");
    const earlyPatents = Array.from({ length: 4 }, (_, index) => patentNode(index + 1, "EA"));
    const modernPatents = Array.from({ length: 4 }, (_, index) => patentNode(index + 1, "MA"));
    const graph = makeGraph(
      [family, early, modern, ...earlyPatents, ...modernPatents],
      [
        [early.id, family.id],
        [modern.id, family.id],
        ...earlyPatents.map((patent) => [patent.id, early.id] satisfies [string, string]),
        ...modernPatents.map((patent) => [patent.id, modern.id] satisfies [string, string]),
      ],
    );

    const layout = layoutUniversalRelationshipGraph(graph);
    expect(layout.clusters).toHaveLength(1);
    expect(layout.clusters[0].anchorId).toBe(family.id);
    expect(layout.nodeById[early.id].clusterId).toBe(layout.clusters[0].id);
    expect(layout.nodeById[modern.id].clusterId).toBe(layout.clusters[0].id);
  });

  it("places the most interconnected hub at the center of a shared constellation", () => {
    const alpha = partyNode("assignee:alpha", "Alpha Optics", "assignee");
    const beta = partyNode("assignee:beta", "Beta Optics", "assignee");
    const gamma = partyNode("assignee:gamma", "Gamma Optics", "assignee");
    const alphaPatents = Array.from({ length: 8 }, (_, index) => patentNode(index + 1, "AC"));
    const betaPatents = Array.from({ length: 8 }, (_, index) => patentNode(index + 1, "BC"));
    const gammaPatents = Array.from({ length: 8 }, (_, index) => patentNode(index + 1, "GC"));
    const graph = makeGraph(
      [alpha, beta, gamma, ...alphaPatents, ...betaPatents, ...gammaPatents],
      [
        ...alphaPatents.map((patent) => [patent.id, alpha.id] satisfies [string, string]),
        ...betaPatents.map((patent) => [patent.id, beta.id] satisfies [string, string]),
        ...gammaPatents.map((patent) => [patent.id, gamma.id] satisfies [string, string]),
        ...Array.from({ length: 5 }, () => [alpha.id, beta.id] satisfies [string, string]),
        [beta.id, gamma.id],
      ],
    );

    const layout = layoutUniversalRelationshipGraph(graph);
    const clusterByAnchor = new Map(layout.clusters.map((cluster) => [cluster.anchorId, cluster]));
    const center = (anchorId: string) => {
      const cluster = clusterByAnchor.get(anchorId)!;
      return { x: cluster.x + cluster.width / 2, y: cluster.y + cluster.height / 2 };
    };
    const alphaCenter = center(alpha.id);
    const betaCenter = center(beta.id);
    const gammaCenter = center(gamma.id);
    const distance = (left: { x: number; y: number }, right: { x: number; y: number }) =>
      Math.hypot(left.x - right.x, left.y - right.y);

    expect(distance(betaCenter, alphaCenter)).toBeLessThan(distance(alphaCenter, gammaCenter));
    expect(distance(betaCenter, gammaCenter)).toBeLessThan(distance(alphaCenter, gammaCenter));
  });

  it("splits a prolific assignee's patents across capacity-limited rings", () => {
    const assignee = partyNode("assignee:prolific", "Prolific Optics", "assignee");
    const patents = Array.from({ length: 108 }, (_, index) => patentNode(index + 1));
    const graph = makeGraph(
      [assignee, ...patents],
      patents.map((patent) => [patent.id, assignee.id]),
    );

    const layout = layoutUniversalRelationshipGraph(graph);
    const center = layout.nodeById[assignee.id];
    const ringRadii = new Set(
      patents.map((patent) =>
        Math.round(Math.hypot(layout.nodeById[patent.id].x - center.x, layout.nodeById[patent.id].y - center.y)),
      ),
    );
    expect([...ringRadii].sort((left, right) => left - right)).toEqual([54, 108, 162, 216]);
  });

  it("keeps every node inside its non-overlapping neighborhood bounds", () => {
    const alpha = partyNode("assignee:alpha", "Alpha Optics", "assignee");
    const beta = partyNode("assignee:beta", "Beta Optics", "assignee");
    const patents = Array.from({ length: 16 }, (_, index) => patentNode(index + 1));
    const graph = makeGraph(
      [alpha, beta, ...patents],
      patents.map((patent, index) => [patent.id, index < 8 ? alpha.id : beta.id]),
    );
    graph.edges.push({ id: "bridge", from: patents[7].id, to: beta.id, kind: "assignment" });
    graph.components = universalConnectedComponents(graph.nodes, graph.edges);

    const layout = layoutUniversalRelationshipGraph(graph);
    for (const node of layout.nodes) {
      const cluster = layout.clusters.find((entry) => entry.id === node.clusterId)!;
      expect(node.x - node.r).toBeGreaterThanOrEqual(cluster.x);
      expect(node.x + node.r).toBeLessThanOrEqual(cluster.x + cluster.width);
      expect(node.y - node.r).toBeGreaterThanOrEqual(cluster.y);
      expect(node.y + node.r).toBeLessThanOrEqual(cluster.y + cluster.height);
    }
    expect(halosOverlap(layout.clusters[0], layout.clusters[1])).toBe(false);
  });

  it("breaks the live Nikon-centered network into hubs and multiple patent bands", () => {
    const graph = buildUniversalRelationshipGraph();
    const layout = layoutUniversalRelationshipGraph(graph);
    const nikon = graph.nodes.find((node) => node.kind === "assignee" && node.name === "Nikon Corporation")!;
    const nikonFamily = graph.nodes.find((node) => node.kind === "family" && node.name === "Nikon")!;
    const nikonCluster = layout.clusters.find((cluster) => cluster.anchorId === nikonFamily.id)!;
    const component = layout.components[nikonCluster.componentIndex];
    const center = layout.nodeById[nikonFamily.id];
    const patentRadii = new Set(
      graph.edges
        .filter((edge) => edge.kind === "assignment" && (edge.from === nikon.id || edge.to === nikon.id))
        .map((edge) => (edge.from.startsWith("patent:") ? edge.from : edge.to))
        .filter((patentId) => layout.nodeById[patentId]?.clusterId === nikonCluster.id)
        .map((patentId) =>
          Math.round(Math.hypot(layout.nodeById[patentId].x - center.x, layout.nodeById[patentId].y - center.y)),
        ),
    );

    expect(component.clusterCount).toBeGreaterThan(1);
    expect(nikonCluster.nodeCount).toBeLessThan(component.nodeCount);
    expect(layout.nodeById[nikon.id].clusterId).toBe(nikonCluster.id);
    expect(patentRadii.size).toBeGreaterThan(1);
    const componentClusters = layout.clusters.filter((cluster) => cluster.componentIndex === component.index);
    for (let leftIndex = 0; leftIndex < componentClusters.length; leftIndex++) {
      for (let rightIndex = leftIndex + 1; rightIndex < componentClusters.length; rightIndex++) {
        expect(halosOverlap(componentClusters[leftIndex], componentClusters[rightIndex])).toBe(false);
      }
    }
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
