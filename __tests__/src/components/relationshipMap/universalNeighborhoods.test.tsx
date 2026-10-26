// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import UniversalNeighborhoodSummary from "../../../../src/components/relationshipMap/UniversalNeighborhoodSummary.js";
import {
  layoutUniversalRelationshipGraph,
  type UniversalLayoutCluster,
  type UniversalLayoutNode,
} from "../../../../src/components/relationshipMap/universalLayout.js";
import {
  buildUniversalNeighborhoods,
  filterUniversalNeighborhoods,
  summarizeUniversalBridges,
  universalNeighborhoodMatch,
} from "../../../../src/components/relationshipMap/universalNeighborhoods.js";
import {
  buildUniversalRelationshipGraph,
  type UniversalEdgeKind,
  type UniversalNodeKind,
  type UniversalRelationshipGraph,
  type UniversalRelationshipNode,
} from "../../../../src/utils/catalog/universalRelationshipGraph.js";
import themes from "../../../../src/utils/theme/themes.js";

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

function node(kind: UniversalNodeKind, slug: string, name: string): UniversalRelationshipNode {
  const id = `${kind}:${slug}`;
  if (kind === "author" || kind === "assignee")
    return { id, kind, name, ref: { role: kind, name, slug }, patentCount: 1 };
  if (kind === "patent")
    return { id, kind, name, patent: { id, patentNumber: name, authors: [], assignees: [], lenses: [] } };
  if (kind === "maker") return { id, kind, name, slug };
  if (kind === "lens") return { id, kind, name, lens: { key: slug, name } };
  return { id, kind, name };
}

/** Three hand-assigned neighborhoods: a family hub (A), an assignee hub (B), and a catalog maker hub (M). */
function fixture() {
  const members: [string, UniversalRelationshipNode][] = [
    ["A", node("family", "alpha", "Alpha family")],
    ["A", node("assignee", "a1", "Alpha Optical Works")],
    ["A", node("assignee", "a2", "Älpha Kogaku K.K.")],
    ["A", node("author", "x", "Inventor X")],
    ["A", node("patent", "P1", "P1")],
    ["A", node("patent", "P2", "P2")],
    ["A", node("lens", "l2", "Alpha model")],
    ["B", node("assignee", "b", "Beta Optics")],
    ["B", node("author", "y", "Inventor Y")],
    ["B", node("patent", "P3", "P3")],
    ["M", node("maker", "m", "Mu Cameras")],
    ["M", node("lens", "l1", "Mu model")],
  ];
  const edges: [string, string, string, UniversalEdgeKind][] = [
    ["e1", "patent:P1", "author:x", "authorship"],
    ["e2", "patent:P1", "assignee:a1", "assignment"],
    ["e3", "patent:P2", "author:y", "authorship"],
    ["e4", "patent:P2", "assignee:b", "assignment"],
    ["e5", "patent:P3", "author:x", "authorship"],
    ["e6", "assignee:a1", "assignee:b", "successor"],
    ["e7", "lens:l1", "maker:m", "catalog-maker"],
    ["e8", "lens:l2", "maker:m", "catalog-maker"],
    ["e9", "assignee:a2", "family:alpha", "family"],
  ];
  const nodes = members.map(([, member]) => member);
  const graph: UniversalRelationshipGraph = {
    nodes,
    edges: edges.map(([id, from, to, kind]) => ({ id, from, to, kind })),
    patents: [],
    components: [nodes.map((member) => member.id)],
    stats: {
      authors: 2,
      assignees: 3,
      patents: 3,
      organizations: 0,
      families: 1,
      patentRelationships: 5,
      corporateRelationships: 2,
      makers: 1,
      lenses: 2,
      catalogRelationships: 2,
      components: 1,
    },
  };
  const anchors: Record<string, [string, string]> = {
    A: ["family:alpha", "Alpha family"],
    B: ["assignee:b", "Beta Optics"],
    M: ["maker:m", "Mu Cameras"],
  };
  const clusters: UniversalLayoutCluster[] = Object.entries(anchors).map(([key, [anchorId, anchorLabel]]) => ({
    id: `cluster:${key}`,
    componentIndex: 0,
    anchorId,
    anchorLabel,
    x: 0,
    y: 0,
    width: 1,
    height: 1,
    nodeCount: 0,
    edgeCount: 0,
  }));
  const layoutNodes: UniversalLayoutNode[] = members.map(([key, member]) => ({
    id: member.id,
    kind: member.kind,
    x: 0,
    y: 0,
    r: 5,
    label: member.name,
    fullLabel: member.name,
    componentIndex: 0,
    clusterId: `cluster:${key}`,
  }));
  return { graph, layout: { clusters, nodes: layoutNodes } };
}

describe("buildUniversalNeighborhoods", () => {
  it("assigns every node to its layout cluster and counts members by kind", () => {
    const { graph, layout } = fixture();
    const model = buildUniversalNeighborhoods(graph, layout);
    const byId = new Map(model.neighborhoods.map((neighborhood) => [neighborhood.id, neighborhood]));
    expect(byId.get("cluster:A")).toMatchObject({
      anchorId: "family:alpha",
      patents: 2,
      inventors: 1,
      assignees: 2,
      models: 1,
      edgeIds: ["e1", "e2", "e9"],
      companyNames: ["Alpha family", "Alpha Optical Works", "Älpha Kogaku K.K."],
    });
    expect(byId.get("cluster:A")!.nodeIds).toHaveLength(7);
    expect(byId.get("cluster:B")).toMatchObject({ patents: 1, inventors: 1, assignees: 1, models: 0, edgeIds: [] });
    expect(byId.get("cluster:M")).toMatchObject({
      patents: 0,
      models: 1,
      companyNames: ["Mu Cameras"],
      edgeIds: ["e7"],
    });
    expect(model.owner.get("patent:P3")).toBe("cluster:B");
  });

  it("types cross-neighborhood bridges and weights patent bridges by distinct patents", () => {
    const { graph, layout } = fixture();
    const bridges = buildUniversalNeighborhoods(graph, layout).bridges.map(
      ({ from, to, category, edgeIds, weight }) => ({
        pair: `${from}|${to}`,
        category,
        edgeIds: [...edgeIds].sort(),
        weight,
      }),
    );
    expect(bridges).toEqual(
      expect.arrayContaining([
        // P2 reaches both Inventor Y and Beta Optics but counts once; P3 reaches Inventor X.
        { pair: "cluster:A|cluster:B", category: "patent", edgeIds: ["e3", "e4", "e5"], weight: 2 },
        { pair: "cluster:A|cluster:B", category: "corporate", edgeIds: ["e6"], weight: 1 },
        { pair: "cluster:A|cluster:M", category: "catalog", edgeIds: ["e8"], weight: 1 },
      ]),
    );
    expect(bridges).toHaveLength(3);
  });

  it("summarizes each neighborhood's strongest links by type with a capped list and total", () => {
    const { graph, layout } = fixture();
    const summary = summarizeUniversalBridges(buildUniversalNeighborhoods(graph, layout), 1);
    expect(
      summary.get("cluster:A")!.map(({ category, links, total }) => [category, links.map((l) => l.anchorLabel), total]),
    ).toEqual([
      ["patent", ["Beta Optics"], 1],
      ["corporate", ["Beta Optics"], 1],
      ["catalog", ["Mu Cameras"], 1],
    ]);
    expect(summary.get("cluster:B")!.map((group) => group.category)).toEqual(["patent", "corporate"]);
    expect(summary.get("cluster:M")![0].links[0]).toMatchObject({ anchorId: "family:alpha", weight: 1 });
  });
});

describe("filterUniversalNeighborhoods", () => {
  it("sorts by patent and model records, then member count, then name", () => {
    const { graph, layout } = fixture();
    const { neighborhoods } = buildUniversalNeighborhoods(graph, layout);
    expect(filterUniversalNeighborhoods(neighborhoods, "").map((n) => n.anchorLabel)).toEqual([
      "Alpha family",
      "Beta Optics",
      "Mu Cameras",
    ]);
  });

  it("matches anchor and member company names without case or diacritics", () => {
    const { graph, layout } = fixture();
    const { neighborhoods } = buildUniversalNeighborhoods(graph, layout);
    expect(filterUniversalNeighborhoods(neighborhoods, "  BETA ").map((n) => n.anchorLabel)).toEqual(["Beta Optics"]);
    const [alpha] = filterUniversalNeighborhoods(neighborhoods, "alpha kogaku");
    expect(alpha.anchorLabel).toBe("Alpha family");
    expect(universalNeighborhoodMatch(alpha, "alpha kogaku")).toBe("Älpha Kogaku K.K.");
    expect(universalNeighborhoodMatch(alpha, "alpha")).toBe("Alpha family");
    expect(filterUniversalNeighborhoods(neighborhoods, "Inventor X")).toEqual([]);
  });
});

describe("UniversalNeighborhoodSummary", () => {
  const graph = buildUniversalRelationshipGraph();
  const model = buildUniversalNeighborhoods(graph, layoutUniversalRelationshipGraph(graph));
  const ranked = filterUniversalNeighborhoods(model.neighborhoods, "");

  it("renders the first 24 named cards on desktop, largest first, and hands the anchor to the network", () => {
    vi.spyOn(HTMLElement.prototype, "clientWidth", "get").mockReturnValue(912);
    const show = vi.fn();
    const selected = ranked[1];
    render(
      <UniversalNeighborhoodSummary
        graph={graph}
        theme={themes.dark}
        selectedNodeId={selected.nodeIds.find((id) => id !== selected.anchorId)!}
        onShowInNetwork={show}
      />,
    );
    const cards = within(screen.getByRole("list", { name: "Hub neighborhoods" })).getAllByRole("button");
    expect(cards).toHaveLength(24);
    expect(cards[0].getAttribute("aria-label")).toBe(`Show ${ranked[0].anchorLabel} in the network`);
    expect(cards[0].textContent).toContain(`${ranked[0].patents} patents`);
    expect(cards[1].getAttribute("aria-current")).toBe("true");
    expect(cards[0].getAttribute("aria-current")).toBeNull();
    fireEvent.click(cards[0], { detail: 0 });
    expect(show).toHaveBeenCalledWith(ranked[0].anchorId, true);
    fireEvent.click(cards[1], { detail: 1 });
    expect(show).toHaveBeenLastCalledWith(ranked[1].anchorId, false);
  });

  it.each([390, 559, 560, 859, 912])("caps at the measured width %i, expands with focus, and collapses", (width) => {
    vi.spyOn(HTMLElement.prototype, "clientWidth", "get").mockReturnValue(width);
    render(
      <UniversalNeighborhoodSummary
        graph={graph}
        theme={themes.dark}
        selectedNodeId={null}
        onShowInNetwork={vi.fn()}
      />,
    );
    const cards = () => within(screen.getByRole("list", { name: "Hub neighborhoods" })).getAllByRole("button");
    const limit = width < 560 ? 12 : 24;
    expect(cards()).toHaveLength(limit);
    expect(screen.getByRole("status").textContent).toBe(`${limit} of ${ranked.length} neighborhoods`);
    fireEvent.click(screen.getByRole("button", { name: `Show all ${ranked.length} neighborhoods` }));
    expect(cards()).toHaveLength(ranked.length);
    expect(document.activeElement).toBe(cards()[limit]);
    fireEvent.click(screen.getByRole("button", { name: "Show fewer" }));
    expect(cards()).toHaveLength(limit);
  });

  it.each([390, 912])(
    "appends the selected neighborhood beyond the cap at %i and focuses the first new card",
    (width) => {
      vi.spyOn(HTMLElement.prototype, "clientWidth", "get").mockReturnValue(width);
      const selected = ranked[ranked.length - 1];
      render(
        <UniversalNeighborhoodSummary
          graph={graph}
          theme={themes.dark}
          selectedNodeId={selected.anchorId}
          onShowInNetwork={vi.fn()}
        />,
      );
      const cards = () => within(screen.getByRole("list", { name: "Hub neighborhoods" })).getAllByRole("button");
      const limit = width < 560 ? 12 : 24;
      expect(cards()).toHaveLength(limit + 1);
      expect(cards()[limit].getAttribute("aria-current")).toBe("true");
      fireEvent.click(screen.getByRole("button", { name: `Show all ${ranked.length} neighborhoods` }));
      expect(document.activeElement).toBe(cards()[limit]);
      expect(cards()[limit].getAttribute("aria-label")).toBe(`Show ${ranked[limit].anchorLabel} in the network`);
    },
  );

  it("shows every filter match beyond either cap, hides the toggle, and retains the expansion choice", () => {
    vi.spyOn(HTMLElement.prototype, "clientWidth", "get").mockReturnValue(390);
    const nodes = Array.from({ length: 30 }, (_, index) =>
      node("maker", `hub-${index}`, `Hub ${String(index).padStart(2, "0")}`),
    );
    const many = { ...graph, nodes, edges: [], components: nodes.map((node) => [node.id]) };
    render(
      <UniversalNeighborhoodSummary graph={many} theme={themes.dark} selectedNodeId={null} onShowInNetwork={vi.fn()} />,
    );
    const input = screen.getByRole("searchbox");
    fireEvent.change(input, { target: { value: "Hub" } });
    expect(within(screen.getByRole("list")).getAllByRole("button")).toHaveLength(30);
    expect(screen.queryByRole("button", { name: /Show all|Show fewer/ })).toBeNull();
    fireEvent.change(input, { target: { value: "" } });
    expect(within(screen.getByRole("list")).getAllByRole("button")).toHaveLength(12);
    fireEvent.click(screen.getByRole("button", { name: "Show all 30 neighborhoods" }));
    fireEvent.change(input, { target: { value: "Hub 01" } });
    fireEvent.change(input, { target: { value: "" } });
    expect(within(screen.getByRole("list")).getAllByRole("button")).toHaveLength(30);
    expect(screen.getByRole("button", { name: "Show fewer" })).toBeDefined();
  });

  it("filters cards by name and reports the visible count", () => {
    render(
      <UniversalNeighborhoodSummary
        graph={graph}
        theme={themes.light}
        selectedNodeId={null}
        onShowInNetwork={vi.fn()}
      />,
    );
    const input = screen.getByRole("searchbox", { name: "Filter neighborhoods by name" });
    const target = ranked[0].anchorLabel;
    fireEvent.change(input, { target: { value: target } });
    const expected = filterUniversalNeighborhoods(model.neighborhoods, target);
    expect(within(screen.getByRole("list", { name: "Hub neighborhoods" })).getAllByRole("button")).toHaveLength(
      expected.length,
    );
    expect(screen.getByRole("status").textContent).toBe(
      `${expected.length} of ${model.neighborhoods.length} neighborhoods`,
    );
    fireEvent.change(input, { target: { value: "zz no such company zz" } });
    expect(screen.queryByRole("list", { name: "Hub neighborhoods" })).toBeNull();
    expect(screen.getByText("No neighborhood matches that name.")).toBeDefined();
  });
});
