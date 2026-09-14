// @vitest-environment jsdom

/** Interaction coverage for the universal relationship SVG and entity panel. */

import { afterEach, describe, expect, it, vi } from "vitest";
import { act, cleanup, fireEvent } from "@testing-library/react";
import UniversalEntityDetailCard from "../../../../src/components/relationshipMap/UniversalEntityDetailCard.js";
import UniversalRelationshipMap from "../../../../src/components/relationshipMap/UniversalRelationshipMap.js";
import type {
  UniversalPartyNode,
  UniversalRelationshipGraph,
  UniversalRelationshipNode,
} from "../../../../src/utils/catalog/universalRelationshipGraph.js";
import themes from "../../../../src/utils/theme/themes.js";
import { installResizeObserverMock, renderWithRouter } from "../../../testUtils.js";
import { layoutUniversalRelationshipGraph } from "../../../../src/components/relationshipMap/universalLayout.js";

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

const author: UniversalPartyNode = {
  id: "author:ada",
  kind: "author",
  name: "Ada Inventor",
  ref: { role: "author", name: "Ada Inventor", slug: "ada" },
  patentCount: 1,
};
const assignee: UniversalPartyNode = {
  id: "assignee:example",
  kind: "assignee",
  name: "Example Optics",
  ref: { role: "assignee", name: "Example Optics", slug: "example" },
  patentCount: 1,
};

const graph: UniversalRelationshipGraph = {
  nodes: [
    { id: "family:example", kind: "family", name: "Example family" },
    assignee,
    author,
    {
      id: "patent:US 1",
      kind: "patent",
      name: "US 1",
      patent: {
        id: "patent:US 1",
        patentNumber: "US 1",
        patentYear: 2001,
        authors: [author.name],
        assignees: [assignee.name],
        lenses: [],
      },
    },
  ],
  edges: [
    { id: "edge-0", from: "patent:US 1", to: author.id, kind: "authorship" },
    { id: "edge-1", from: "patent:US 1", to: assignee.id, kind: "assignment" },
    {
      id: "edge-2",
      from: assignee.id,
      to: "family:example",
      kind: "family",
      effectiveFrom: "2000-01-01",
      sourceUrl: "https://example.com/source",
    },
  ],
  patents: [],
  components: [["family:example", assignee.id, author.id, "patent:US 1"]],
  stats: {
    authors: 1,
    assignees: 1,
    patents: 1,
    organizations: 0,
    families: 1,
    patentRelationships: 2,
    corporateRelationships: 1,
    components: 1,
  },
};

function makeMultiHubGraph(): UniversalRelationshipGraph {
  const alpha: UniversalPartyNode = {
    id: "assignee:alpha",
    kind: "assignee",
    name: "Alpha Optics",
    ref: { role: "assignee", name: "Alpha Optics", slug: "alpha" },
    patentCount: 8,
  };
  const beta: UniversalPartyNode = {
    id: "assignee:beta",
    kind: "assignee",
    name: "Beta Optics",
    ref: { role: "assignee", name: "Beta Optics", slug: "beta" },
    patentCount: 8,
  };
  const sharedAuthor: UniversalPartyNode = {
    id: "author:shared",
    kind: "author",
    name: "Shared Inventor",
    ref: { role: "author", name: "Shared Inventor", slug: "shared" },
    patentCount: 2,
  };
  const patents: UniversalRelationshipNode[] = Array.from({ length: 16 }, (_, index) => {
    const patentNumber = `${index < 8 ? "AA" : "BB"} ${(index % 8) + 1}`;
    const id = `patent:${patentNumber}`;
    return {
      id,
      kind: "patent",
      name: patentNumber,
      patent: {
        id,
        patentNumber,
        patentYear: 2000 + index,
        authors: [],
        assignees: [],
        lenses: [],
      },
    };
  });
  const nodes = [alpha, beta, sharedAuthor, ...patents];
  const edges = [
    ...patents.map((patent, index) => ({
      id: `assignment-${index}`,
      from: patent.id,
      to: index < 8 ? alpha.id : beta.id,
      kind: "assignment" as const,
    })),
    { id: "authorship-alpha", from: patents[0].id, to: sharedAuthor.id, kind: "authorship" as const },
    { id: "authorship-beta", from: patents[8].id, to: sharedAuthor.id, kind: "authorship" as const },
    { id: "acquisition", from: alpha.id, to: beta.id, kind: "acquisition" as const },
  ];

  return {
    nodes,
    edges,
    patents: [],
    components: [nodes.map((node) => node.id)],
    stats: {
      authors: 1,
      assignees: 2,
      patents: 16,
      organizations: 0,
      families: 0,
      patentRelationships: 18,
      corporateRelationships: 1,
      components: 1,
    },
  };
}

describe("UniversalRelationshipMap", () => {
  it("defers focus until measured and moves the overview below narrow viewports", () => {
    const observer = installResizeObserverMock();
    let width = 0;
    vi.spyOn(SVGSVGElement.prototype, "getBoundingClientRect").mockImplementation(
      () => ({ width, height: 600, left: 0, top: 0 }) as DOMRect,
    );
    const { container, getByRole } = renderWithRouter(
      <UniversalRelationshipMap
        graph={graph}
        theme={themes.dark}
        selectedNodeId={author.id}
        onSelectNode={vi.fn()}
        focusRequest={{ nodeId: author.id, requestId: 1 }}
      />,
    );
    const main = container.querySelector("svg")!;
    const initial = main.getAttribute("viewBox");
    width = 800;
    act(() => observer.trigger(main));
    expect(main.getAttribute("viewBox")).not.toBe(initial);
    let overview = getByRole("group", { name: "Map overview" });
    expect(main.parentElement?.contains(overview)).toBe(true);
    width = 390;
    act(() => observer.trigger(main));
    overview = getByRole("group", { name: "Map overview" });
    expect(main.parentElement?.contains(overview)).toBe(false);
    fireEvent.click(getByRole("button", { name: "Overview" }));
    expect(container.querySelector('[aria-label="Map overview"]')).toBeNull();
    fireEvent.click(getByRole("button", { name: "Overview" }));
    expect(getByRole("group", { name: "Map overview" })).toBeDefined();
  });
  it("moves the main viewport through the overview while retaining zoom, selection, and emphasis", () => {
    const select = vi.fn();
    const { container, getByRole } = renderWithRouter(
      <UniversalRelationshipMap graph={graph} theme={themes.dark} selectedNodeId={author.id} onSelectNode={select} />,
    );
    const main = container.querySelector("svg")!;
    const view = () => main.getAttribute("viewBox")!.split(" ").map(Number);
    fireEvent.click(getByRole("button", { name: "Zoom in" }));
    const [, , width, height] = view();
    const toggle = getByRole("button", { name: "Emphasize connections" });
    fireEvent.click(toggle);
    const overview = getByRole("group", { name: "Map overview" });
    Object.defineProperty(overview, "getScreenCTM", {
      value: () => ({ inverse: () => ({ a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 }) }),
    });
    fireEvent.click(overview, { clientX: 120, clientY: 140 });
    let [x, y, w, h] = view();
    expect(x + w / 2).toBeCloseTo(120);
    expect(y + h / 2).toBeCloseTo(140);
    expect([w, h]).toEqual([width, height]);
    fireEvent.keyDown(overview, { key: "ArrowRight" });
    [x, y, w, h] = view();
    expect(x + w / 2).toBeCloseTo(120 + width * 0.1);
    expect(y + h / 2).toBeCloseTo(140);
    const indicator = getByRole("img", { name: "Visible map area" });
    expect(Number(indicator.getAttribute("x"))).toBeCloseTo(Math.max(0, x));
    expect(toggle.getAttribute("aria-pressed")).toBe("true");
    expect(getByRole("button", { name: "Select assignee Example Optics" }).getAttribute("opacity")).toBe("0.15");
    expect(select).not.toHaveBeenCalled();
  });

  it("emphasizes only the selected neighborhood, keeps it anchored during hover, and resumes after clearing", () => {
    const props = { graph, theme: themes.dark, onSelectNode: vi.fn() };
    const { container, getByRole, rerender } = renderWithRouter(
      <UniversalRelationshipMap {...props} selectedNodeId={author.id} />,
    );
    const positions = [...container.querySelectorAll("circle")].map((node) => [
      node.getAttribute("cx"),
      node.getAttribute("cy"),
    ]);
    const edgeCount = container.querySelectorAll("line").length;
    const toggle = getByRole("button", { name: "Emphasize connections" });
    expect(toggle.getAttribute("aria-pressed")).toBe("false");
    fireEvent.click(toggle);
    const assigneeButton = getByRole("button", { name: "Select assignee Example Optics" });
    expect(assigneeButton.getAttribute("opacity")).toBe("0.15");
    expect(getByRole("button", { name: "Select inventor Ada Inventor" }).getAttribute("opacity")).toBe("1");
    expect(getByRole("button", { name: "Select patent US 1" }).getAttribute("opacity")).toBe("1");
    fireEvent.pointerEnter(assigneeButton);
    expect(assigneeButton.getAttribute("opacity")).toBe("0.15");
    fireEvent.click(assigneeButton);
    expect(props.onSelectNode).toHaveBeenCalledWith(assignee.id);
    expect(container.querySelectorAll("line")).toHaveLength(edgeCount);
    expect(
      [...container.querySelectorAll("circle")].map((node) => [node.getAttribute("cx"), node.getAttribute("cy")]),
    ).toEqual(positions);
    rerender(<UniversalRelationshipMap {...props} selectedNodeId={null} />);
    expect((toggle as HTMLButtonElement).disabled).toBe(true);
    expect(toggle.getAttribute("aria-pressed")).toBe("true");
    expect(assigneeButton.getAttribute("opacity")).toBe("1");
    rerender(<UniversalRelationshipMap {...props} selectedNodeId={"family:example"} />);
    expect(getByRole("button", { name: "Select inventor Ada Inventor" }).getAttribute("opacity")).toBe("0.15");
    expect(assigneeButton.getAttribute("opacity")).toBe("1");
  });

  it.each(["authorship", "assignment", "successor", "acquisition", "subsidiary", "family"] as const)(
    "keeps incident %s edges bright and dims unrelated edges",
    (kind) => {
      const edges = graph.edges.map((edge) => ({ ...edge, kind }));
      const { container, getByRole } = renderWithRouter(
        <UniversalRelationshipMap
          graph={{ ...graph, edges }}
          theme={themes.dark}
          selectedNodeId={author.id}
          onSelectNode={vi.fn()}
        />,
      );
      const lines = [...container.querySelectorAll("line")];
      const opacities = lines.map((line) => Number(line.getAttribute("opacity")));
      fireEvent.click(getByRole("button", { name: "Emphasize connections" }));
      lines.forEach((line, i) =>
        expect(Number(line.getAttribute("opacity"))).toBeCloseTo(
          opacities[i] * (edges[i].from === author.id || edges[i].to === author.id ? 1 : 0.15),
        ),
      );
    },
  );
  it("centers readable search targets and repeats requests after a viewport reset", () => {
    const rect = vi
      .spyOn(SVGSVGElement.prototype, "getBoundingClientRect")
      .mockReturnValue({ width: 800, height: 600 } as DOMRect);
    const props = { graph, theme: themes.dark, selectedNodeId: author.id, onSelectNode: vi.fn() };
    const request = { nodeId: author.id, requestId: 1 };
    const { container, getByRole, rerender } = renderWithRouter(
      <UniversalRelationshipMap {...props} focusRequest={request} />,
    );
    const svg = container.querySelector("svg")!;
    const target = layoutUniversalRelationshipGraph(graph).nodeById[author.id];
    const centered = svg.getAttribute("viewBox")!;
    const [x, y, w, h] = centered.split(" ").map(Number);
    expect(x + w / 2).toBeCloseTo(target.x);
    expect(y + h / 2).toBeCloseTo(target.y);
    expect(Math.min(800 / w, 600 / h) * 9).toBeCloseTo(13.5);
    fireEvent.click(getByRole("button", { name: "Fit all" }));
    expect(svg.getAttribute("viewBox")).not.toBe(centered);
    rerender(<UniversalRelationshipMap {...props} focusRequest={{ nodeId: author.id, requestId: 2 }} />);
    expect(svg.getAttribute("viewBox")).toBe(centered);
    rect.mockRestore();
  });

  it("provides bounded zoom controls and fits a panned overview without changing selection", () => {
    const rect = vi
      .spyOn(SVGSVGElement.prototype, "getBoundingClientRect")
      .mockReturnValue({ width: 800, height: 600, left: 0, top: 0 } as DOMRect);
    const select = vi.fn();
    const { container, getByRole } = renderWithRouter(
      <UniversalRelationshipMap graph={graph} theme={themes.dark} selectedNodeId={null} onSelectNode={select} />,
    );
    const svg = container.querySelector("svg")!;
    const initial = svg.getAttribute("viewBox");
    expect((getByRole("button", { name: "Zoom out" }) as HTMLButtonElement).disabled).toBe(true);
    expect((getByRole("button", { name: "Center selection" }) as HTMLButtonElement).disabled).toBe(true);
    Object.defineProperties(svg, { setPointerCapture: { value: vi.fn() }, releasePointerCapture: { value: vi.fn() } });
    fireEvent.pointerDown(svg, { button: 0, clientX: 200, clientY: 200, pointerId: 1 });
    fireEvent.pointerMove(svg, { clientX: 250, clientY: 230, pointerId: 1 });
    fireEvent.pointerUp(svg, { pointerId: 1 });
    expect(svg.getAttribute("viewBox")).not.toBe(initial);
    fireEvent.click(getByRole("button", { name: "Fit all" }));
    expect(svg.getAttribute("viewBox")).toBe(initial);
    for (let i = 0; i < 40; i++) fireEvent.click(getByRole("button", { name: "Zoom in" }));
    expect((getByRole("button", { name: "Zoom in" }) as HTMLButtonElement).disabled).toBe(true);
    fireEvent.click(getByRole("button", { name: "Zoom out" }));
    expect((getByRole("button", { name: "Zoom in" }) as HTMLButtonElement).disabled).toBe(false);
    expect(select).not.toHaveBeenCalled();
    rect.mockRestore();
  });

  it("centers the selected node again after fit-all and preserves closer zoom", () => {
    const rect = vi
      .spyOn(SVGSVGElement.prototype, "getBoundingClientRect")
      .mockReturnValue({ width: 800, height: 600 } as DOMRect);
    const select = vi.fn();
    const { container, getByRole } = renderWithRouter(
      <UniversalRelationshipMap graph={graph} theme={themes.dark} selectedNodeId={author.id} onSelectNode={select} />,
    );
    const svg = container.querySelector("svg")!;
    fireEvent.click(getByRole("button", { name: "Center selection" }));
    const focused = svg.getAttribute("viewBox");
    fireEvent.click(getByRole("button", { name: "Fit all" }));
    fireEvent.click(getByRole("button", { name: "Center selection" }));
    expect(svg.getAttribute("viewBox")).toBe(focused);
    fireEvent.click(getByRole("button", { name: "Zoom in" }));
    const closer = svg.getAttribute("viewBox");
    fireEvent.click(getByRole("button", { name: "Center selection" }));
    expect(svg.getAttribute("viewBox")).toBe(closer);
    expect(select).not.toHaveBeenCalled();
    rect.mockRestore();
  });
  it("renders every node as a keyboard-operable control", () => {
    const onSelectNode = vi.fn();
    const { container, getAllByRole, getByRole, getByText } = renderWithRouter(
      <UniversalRelationshipMap graph={graph} theme={themes.dark} selectedNodeId={null} onSelectNode={onSelectNode} />,
    );
    expect(getByRole("group", { name: /Universal relationship map/ })).toBeDefined();
    expect(getAllByRole("button", { name: /^Select / })).toHaveLength(graph.nodes.length);
    expect(getByText("Example Optics · 4 nodes")).toBeDefined();
    expect(container.querySelector("svg")!.querySelectorAll("ellipse")).toHaveLength(1);

    const familyButton = getByRole("button", { name: "Select corporate family Example family" });
    fireEvent.click(familyButton);
    expect(onSelectNode).toHaveBeenCalledWith("family:example");

    fireEvent.keyDown(getByRole("button", { name: "Select patent US 1" }), { key: "Enter" });
    expect(onSelectNode).toHaveBeenCalledWith("patent:US 1");
  });

  it("highlights a node and its edges on keyboard focus", () => {
    const { getByRole, container } = renderWithRouter(
      <UniversalRelationshipMap graph={graph} theme={themes.dark} selectedNodeId={null} onSelectNode={vi.fn()} />,
    );
    const button = getByRole("button", { name: "Select assignee Example Optics" });
    fireEvent.focus(button);
    const activeLines = [...container.querySelectorAll("line")].filter((line) => line.getAttribute("opacity") === "1");
    expect(activeLines).toHaveLength(2);
  });

  it("draws cross-neighborhood connections as brightly as matching internal connections", () => {
    const { container } = renderWithRouter(
      <UniversalRelationshipMap
        graph={makeMultiHubGraph()}
        theme={themes.dark}
        selectedNodeId={null}
        onSelectNode={vi.fn()}
      />,
    );
    expect(container.querySelector("svg")!.querySelectorAll("ellipse")).toHaveLength(2);

    const authorshipLines = [...container.querySelectorAll("line")].filter((line) =>
      line.querySelector("title")?.textContent?.includes("Shared Inventor named on"),
    );
    expect(authorshipLines).toHaveLength(2);
    expect(new Set(authorshipLines.map((line) => line.getAttribute("opacity")))).toEqual(new Set(["0.3"]));

    const acquisitionLine = [...container.querySelectorAll("line")].find(
      (line) => line.querySelector("title")?.textContent === "Alpha Optics acquired by Beta Optics",
    );
    expect(acquisitionLine?.getAttribute("opacity")).toBe("0.62");
    expect(acquisitionLine?.getAttribute("stroke-width")).toBe("1.35");
  });
});

describe("UniversalEntityDetailCard", () => {
  it("shows dates, sources, and the focused-map link", () => {
    const { getByRole, getByText } = renderWithRouter(
      <UniversalEntityDetailCard
        graph={graph}
        node={assignee}
        theme={themes.dark}
        onClose={vi.fn()}
        onSelectNode={vi.fn()}
      />,
    );
    expect(getByText("2000-01-01 onward")).toBeDefined();
    expect(getByRole("link", { name: "Source ↗" }).getAttribute("href")).toBe("https://example.com/source");
    expect(getByRole("link", { name: /Open focused relationship map/ }).getAttribute("href")).toBe(
      "/relationships/#focus=assignee:example",
    );
  });

  it("selects corporate-family members within the universal map", () => {
    const family = graph.nodes.find((node) => node.kind === "family")!;
    if (family.kind !== "family") throw new Error("missing family fixture");
    const pick = vi.fn();
    const { getByRole } = renderWithRouter(
      <UniversalEntityDetailCard
        graph={graph}
        node={family}
        theme={themes.dark}
        onClose={vi.fn()}
        onSelectNode={pick}
      />,
    );
    fireEvent.click(getByRole("button", { name: assignee.name }), { detail: 0 });
    expect(pick).toHaveBeenCalledWith(assignee.id, true);
  });

  it("deduplicates and orders related patents and selects corporate targets", () => {
    const patents = [
      {
        id: "patent:US 3",
        kind: "patent" as const,
        name: "US 3",
        patent: { id: "patent:US 3", patentNumber: "US 3", authors: [], assignees: [], lenses: [] },
      },
      {
        id: "patent:US 2",
        kind: "patent" as const,
        name: "US 2",
        patent: { id: "patent:US 2", patentNumber: "US 2", patentYear: 1990, authors: [], assignees: [], lenses: [] },
      },
    ];
    const expanded = {
      ...graph,
      nodes: [...graph.nodes, ...patents],
      edges: [
        ...graph.edges,
        { id: "duplicate", from: "patent:US 1", to: assignee.id, kind: "assignment" as const },
        ...patents.map((p) => ({ id: p.id, from: p.id, to: assignee.id, kind: "assignment" as const })),
      ],
    };
    const pick = vi.fn();
    const { getByRole, getAllByRole } = renderWithRouter(
      <UniversalEntityDetailCard
        graph={expanded}
        node={assignee}
        theme={themes.dark}
        onClose={vi.fn()}
        onSelectNode={pick}
      />,
    );
    expect(getAllByRole("button", { name: /^US / }).map((button) => button.textContent)).toEqual([
      "US 2",
      "US 1",
      "US 3",
    ]);
    fireEvent.click(getByRole("button", { name: "US 2" }), { detail: 1 });
    expect(pick).toHaveBeenLastCalledWith("patent:US 2", false);
    fireEvent.click(getByRole("button", { name: "Example family" }));
    expect(pick).toHaveBeenLastCalledWith("family:example", true);
  });
});
