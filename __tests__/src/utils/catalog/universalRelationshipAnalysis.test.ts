import { describe, expect, it } from "vitest";
import {
  findUniversalConnectionPaths,
  universalConnectionDescription,
} from "../../../../src/utils/catalog/universalConnectionPaths.js";
import { buildInventorAffiliations } from "../../../../src/utils/catalog/inventorAffiliations.js";
import { layoutInventorAffiliations } from "../../../../src/components/relationshipMap/inventorAffiliationLayout.js";
import {
  buildRelationshipInsights,
  companyBridge,
  companyConnections,
  inventorCollaborators,
} from "../../../../src/utils/catalog/relationshipInsights.js";
import { relationshipInsightFixture } from "../../../fixtures/relationshipInsights.js";
import { companyChordLayout } from "../../../../src/components/relationshipMap/companyChordLayout.js";
import { coInventorLayout } from "../../../../src/components/relationshipMap/coInventorLayout.js";
import {
  buildUniversalRelationshipGraph,
  type UniversalPartyNode,
  type UniversalRelationshipEdge,
  type UniversalRelationshipNode,
} from "../../../../src/utils/catalog/universalRelationshipGraph.js";

function party(id: string, kind: "author" | "assignee"): UniversalPartyNode {
  return { id, kind, name: id, patentCount: 0, ref: { role: kind, slug: id, name: id } };
}

function patent(id: string): UniversalRelationshipNode {
  return { id, name: id, kind: "patent", patent: { id, patentNumber: id, authors: [], assignees: [], lenses: [] } };
}

function edge(
  id: string,
  from: string,
  to: string,
  kind: UniversalRelationshipEdge["kind"] = "family",
): UniversalRelationshipEdge {
  return { id, from, to, kind };
}

describe("relationship comparison evidence", () => {
  const graph = relationshipInsightFixture();
  const insights = buildRelationshipInsights(graph);

  it("weights bridges by distinct patents and retains joint assignments without inferring corporate work", () => {
    const rows = companyBridge(insights, "assignee:alpha", "assignee:beta");
    expect(rows.map((row) => row.record.inventor.name)).toEqual(["Ada", "Bea"]);
    expect(rows[0].left.patentIds).toEqual(["patent:P1", "patent:P3"]);
    expect(rows[0].right.patentIds).toEqual(["patent:P2", "patent:P3"]);
    expect(rows[0].jointPatentIds).toEqual(["patent:P3"]);
    expect(rows[0].rightShare).toBe(0.5);
    expect(rows[1].rightShare).toBeCloseTo(1 / 3);
    expect(companyBridge(insights, "assignee:alpha", "assignee:alpha")).toEqual([]);
    expect(companyBridge(insights, "assignee:alpha", "assignee:gamma").map((row) => row.record.inventor.name)).toEqual([
      "Bea",
    ]);
    expect(companyBridge(insights, "unknown", "assignee:alpha")).toEqual([]);
    expect(insights.inventors.find((record) => record.inventor.name === "Ada")!.assignedPatentCount).toBe(3);
    expect(insights.inventors.find((record) => record.inventor.name === "Ada")!.unassignedPatentCount).toBe(1);
  });

  it("counts a multi-company inventor once in each undirected company pair", () => {
    const pairs = companyConnections(insights, ["assignee:alpha", "assignee:beta", "assignee:gamma"]);
    expect(pairs.map((pair) => [pair.left, pair.right, pair.inventorIds])).toEqual([
      ["assignee:alpha", "assignee:beta", ["author:bea", "author:ada"]],
      ["assignee:beta", "assignee:gamma", ["author:bea", "author:cy"]],
      ["assignee:alpha", "assignee:gamma", ["author:bea"]],
    ]);
    expect(companyConnections(insights, ["assignee:alpha"])).toEqual([]);
  });

  it("ranks direct collaborators by shared patents and includes their other coauthorship evidence", () => {
    const network = inventorCollaborators(insights, "author:ada", 2);
    expect(network.collaborators.map((entry) => [entry.record.inventor.name, entry.patentIds])).toEqual([
      ["Bea", ["patent:P1", "patent:P3"]],
      ["Cy", ["patent:P2"]],
    ]);
    expect(network.edges.find((entry) => entry.from === "author:bea" && entry.to === "author:cy")!.patentIds).toEqual([
      "patent:P4",
    ]);
    expect(inventorCollaborators(insights, "author:ada", 1).edges).toHaveLength(1);
    expect(inventorCollaborators(insights, "author:dora", 12)).toEqual({ total: 0, collaborators: [], edges: [] });
    expect(insights.inventorPatents.get("author:dora")).toEqual(["patent:P5"]);
    const reversed = buildRelationshipInsights({
      ...graph,
      nodes: [...graph.nodes].reverse(),
      edges: [...graph.edges].reverse(),
      patents: [...graph.patents].reverse(),
    });
    expect(inventorCollaborators(reversed, "author:ada", 2)).toEqual(network);
  });

  it("allocates proportional chord widths and finite geometry, including empty input", () => {
    const pairs = companyConnections(insights, ["assignee:alpha", "assignee:beta", "assignee:gamma"]);
    const layout = companyChordLayout(["assignee:alpha", "assignee:beta", "assignee:gamma"], pairs);
    expect(layout.sectors.map((sector) => sector.count)).toEqual([3, 4, 3]);
    expect(
      (layout.sectors[1].end - layout.sectors[1].start) / (layout.sectors[0].end - layout.sectors[0].start),
    ).toBeCloseTo(4 / 3);
    expect(JSON.stringify(layout)).not.toMatch(/NaN|Infinity|undefined/);
    expect(companyChordLayout([], []).ribbons).toEqual([]);
  });

  it("keeps grouped inventor nodes and labels spaced even when many share one assignee", () => {
    const seed = insights.inventors[0];
    const members = Array.from({ length: 25 }, (_, i) => ({
      ...seed,
      inventor: { ...seed.inventor, id: `author:${i}` },
    }));
    const layout = coInventorLayout(members);
    const points = [...layout.points.values()];
    expect(points).toHaveLength(25);
    for (const point of points) {
      expect(point.x).toBeGreaterThan(30);
      expect(point.x).toBeLessThan(layout.width - 30);
      expect(point.y).toBeGreaterThan(30);
      expect(point.y).toBeLessThan(layout.height - 45);
      for (const other of points)
        if (point !== other) expect(Math.hypot(point.x - other.x, point.y - other.y)).toBeGreaterThanOrEqual(115);
    }
  });
});

describe("universal connection tracing", () => {
  const graph = {
    nodes: ["a", "b", "c", "d", "e", "isolated"].map((id) => ({ id, name: id, kind: "organization" as const })),
    edges: [
      edge("ab", "a", "b"),
      edge("bd", "b", "d"),
      edge("ac", "c", "a"),
      edge("cd", "d", "c"),
      edge("be", "b", "e"),
      edge("ed", "e", "d"),
    ],
  };

  it("finds all shortest alternatives, traversing either direction without cycles", () => {
    const result = findUniversalConnectionPaths(graph, "a", "d");
    expect(result.distance).toBe(2);
    expect(result.paths).toEqual([
      { nodeIds: ["a", "b", "d"], edgeIds: ["ab", "bd"] },
      { nodeIds: ["a", "c", "d"], edgeIds: ["ac", "cd"] },
    ]);
    expect(findUniversalConnectionPaths(graph, "d", "a").distance).toBe(2);
    expect(
      findUniversalConnectionPaths({ nodes: [...graph.nodes].reverse(), edges: [...graph.edges].reverse() }, "a", "d"),
    ).toEqual(result);
  });

  it("caps alternate routes and reports that additional routes exist", () => {
    const result = findUniversalConnectionPaths(graph, "a", "d", true, 1);
    expect(result.paths).toHaveLength(1);
    expect(result.truncated).toBe(true);
    expect(findUniversalConnectionPaths(graph, "a", "d", true, 2).truncated).toBe(false);
  });

  it("handles excluded corporate links, isolated nodes, invalid endpoints, and identity", () => {
    expect(findUniversalConnectionPaths(graph, "a", "d", false).distance).toBeNull();
    expect(findUniversalConnectionPaths(graph, "a", "isolated").paths).toEqual([]);
    expect(findUniversalConnectionPaths(graph, "__proto__", "a").paths).toEqual([]);
    expect(findUniversalConnectionPaths(graph, null, "a").paths).toEqual([]);
    expect(findUniversalConnectionPaths(graph, "a", "a")).toEqual({
      distance: 0,
      truncated: false,
      paths: [{ nodeIds: ["a"], edgeIds: [] }],
    });
    const patentOnly = {
      nodes: graph.nodes,
      edges: [
        edge("ab", "a", "b", "authorship"),
        edge("bd", "b", "d", "assignment"),
        edge("ad", "a", "d", "acquisition"),
      ],
    };
    expect(findUniversalConnectionPaths(patentOnly, "d", "a").distance).toBe(1);
    expect(findUniversalConnectionPaths(patentOnly, "d", "a", false).distance).toBe(2);
  });

  it("keeps parallel corporate records as distinct evidence and describes the original direction", () => {
    const graphWithParallelEdges = {
      nodes: graph.nodes,
      edges: [edge("old", "a", "b", "acquisition"), edge("new", "a", "b", "subsidiary")],
    };
    const result = findUniversalConnectionPaths(graphWithParallelEdges, "b", "a");
    expect(result.paths).toHaveLength(2);
    expect(
      universalConnectionDescription(
        graphWithParallelEdges.edges[0],
        new Map([
          ["a", "Alpha"],
          ["b", "Beta"],
        ]),
      ),
    ).toBe("Alpha was acquired by Beta");
  });
});

describe("inventor affiliation projection and placement", () => {
  const nodes = [
    party("inventor", "author"),
    party("unassigned", "author"),
    party("company-a", "assignee"),
    party("company-b", "assignee"),
    party("corporate-parent", "assignee"),
    ...["p1", "p2", "p3", "p4", "p5"].map(patent),
  ];
  const edges = [
    ...["p1", "p2", "p3", "p4"].map((id) => edge(`author-${id}`, id, "inventor", "authorship")),
    ...["p1", "p2", "p3"].map((id) => edge(`assignment-${id}`, id, "company-a", "assignment")),
    edge("b", "company-b", "p4", "assignment"),
    edge("duplicate", "p1", "inventor", "authorship"),
    edge("unassigned", "p5", "unassigned", "authorship"),
    edge("corporate", "company-a", "corporate-parent", "subsidiary"),
  ];
  const graph = { nodes, edges };

  it("counts distinct patent evidence, excludes corporate-only ties, and retains unassigned inventors", () => {
    const network = buildInventorAffiliations(graph);
    expect(network.assignees.map((node) => node.id)).toEqual(["company-a", "company-b"]);
    expect(network.inventors[0]).toMatchObject({
      inventor: { id: "inventor" },
      assignedPatentCount: 4,
      unassignedPatentCount: 0,
      affiliations: [
        { assigneeId: "company-a", patentIds: ["p1", "p2", "p3"], share: 0.75 },
        { assigneeId: "company-b", patentIds: ["p4"], share: 0.25 },
      ],
    });
    expect(network.inventors[1]).toMatchObject({ assignedPatentCount: 0, unassignedPatentCount: 1, affiliations: [] });
    expect(buildInventorAffiliations({ nodes: [...nodes].reverse(), edges: [...edges].reverse() })).toEqual(network);
  });

  it("uses a union denominator for jointly assigned patents, without dropping unassigned evidence", () => {
    const network = buildInventorAffiliations({
      nodes,
      edges: [
        ...edges,
        edge("joint", "p1", "company-b", "assignment"),
        edge("author-p5", "p5", "inventor", "authorship"),
      ],
    });
    const record = network.inventors[0];
    expect(record.assignedPatentCount).toBe(4);
    expect(record.unassignedPatentCount).toBe(1);
    expect(record.affiliations.map((link) => link.share)).toEqual([0.75, 0.5]);
  });

  it("places a 3:1 inventor nearer the stronger company and an equal inventor at the midpoint", () => {
    const record = buildInventorAffiliations(graph).inventors[0];
    const layout = layoutInventorAffiliations([record]);
    const [a, b] = layout.assignees;
    const inventor = layout.inventors[0];
    expect(inventor.x).toBeCloseTo(a.x * 0.75 + b.x * 0.25);
    expect(inventor.y).toBeCloseTo(a.y * 0.75 + b.y * 0.25);
    expect(Math.hypot(inventor.x - a.x, inventor.y - a.y)).toBeLessThan(Math.hypot(inventor.x - b.x, inventor.y - b.y));
    const equal = layoutInventorAffiliations([
      { ...record, affiliations: record.affiliations.map((link) => ({ ...link, patentIds: ["p1"] })) },
    ]);
    expect(equal.inventors[0].x).toBeCloseTo((equal.assignees[0].x + equal.assignees[1].x) / 2);
    expect(layoutInventorAffiliations([]).inventors).toEqual([]);
  });

  it("keeps coincident inventors separate with deterministic finite positions", () => {
    const record = buildInventorAffiliations(graph).inventors[0];
    const records = Array.from({ length: 30 }, (_, index) => ({
      ...record,
      inventor: { ...record.inventor, id: `inventor-${index}` },
    }));
    const layout = layoutInventorAffiliations(records);
    expect(layoutInventorAffiliations([...records].reverse())).toEqual(layout);
    for (const [index, inventor] of layout.inventors.entries()) {
      expect(Number.isFinite(inventor.x) && Number.isFinite(inventor.y)).toBe(true);
      for (const other of layout.inventors.slice(index + 1))
        expect(Math.hypot(inventor.x - other.x, inventor.y - other.y)).toBeGreaterThanOrEqual(23);
    }
  });

  it("backs every catalog affiliation with both original patent edges", () => {
    const catalog = buildUniversalRelationshipGraph();
    const network = buildInventorAffiliations(catalog);
    const original = new Set(catalog.edges.map((entry) => `${entry.kind}:${entry.from}:${entry.to}`));
    for (const record of network.inventors)
      for (const link of record.affiliations)
        for (const id of link.patentIds) {
          expect(original.has(`authorship:${id}:${record.inventor.id}`)).toBe(true);
          expect(original.has(`assignment:${id}:${link.assigneeId}`)).toBe(true);
        }
    expect(network.inventors.some((record) => record.affiliations.length > 1)).toBe(true);
  });
});
