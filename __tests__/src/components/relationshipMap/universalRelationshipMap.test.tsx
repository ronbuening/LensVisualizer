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
import {
  boundsIntersect,
  directionalUniversalNode,
} from "../../../../src/components/relationshipMap/universalMapGeometry.js";
import { layoutUniversalRelationshipGraph } from "../../../../src/components/relationshipMap/universalLayout.js";

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
  vi.useRealTimers();
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
    makers: 0,
    lenses: 0,
    catalogRelationships: 0,
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
      makers: 0,
      lenses: 0,
      catalogRelationships: 0,
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
  it.each([390, 599, 600, 768, 1024])("defaults the overview by container width (%i px)", (width) => {
    vi.spyOn(HTMLElement.prototype, "clientWidth", "get").mockReturnValue(width);
    const { getByRole, queryByRole } = renderWithRouter(
      <UniversalRelationshipMap graph={graph} theme={themes.dark} selectedNodeId={null} onSelectNode={vi.fn()} />,
    );
    const toggle = getByRole("button", { name: "Overview" });
    expect(toggle.getAttribute("aria-expanded")).toBe(String(width >= 600));
    // Phones keep the overlay to one icon row; the text toggles move under the map box.
    expect(getByRole("group", { name: "Map navigation" }).contains(toggle)).toBe(width >= 560);
    expect(queryByRole("group", { name: "Map overview" }) !== null).toBe(width >= 600);
    fireEvent.click(toggle);
    expect(queryByRole("group", { name: "Map overview" }) !== null).toBe(width < 600);
    expect(getByRole("button", { name: /MORE|LESS/ }).getAttribute("aria-expanded")).toBe(String(width >= 560));
  });

  it("retains the reader's overview and legend choices after resizing", () => {
    const observer = installResizeObserverMock();
    let width = 390;
    vi.spyOn(HTMLElement.prototype, "clientWidth", "get").mockImplementation(() => width);
    const { getByRole } = renderWithRouter(
      <UniversalRelationshipMap graph={graph} theme={themes.dark} selectedNodeId={null} onSelectNode={vi.fn()} />,
    );
    fireEvent.click(getByRole("button", { name: "Overview" }));
    fireEvent.click(getByRole("button", { name: /MORE/ }));
    width = 900;
    act(() => observer.trigger());
    expect(getByRole("button", { name: "Overview" }).getAttribute("aria-expanded")).toBe("true");
    fireEvent.click(getByRole("button", { name: "Overview" }));
    fireEvent.click(getByRole("button", { name: /LESS/ }));
    width = 390;
    act(() => observer.trigger());
    expect(getByRole("button", { name: "Overview" }).getAttribute("aria-expanded")).toBe("false");
    width = 900;
    act(() => observer.trigger());
    expect(getByRole("button", { name: "Overview" }).getAttribute("aria-expanded")).toBe("false");
    expect(getByRole("button", { name: /MORE/ }).getAttribute("aria-expanded")).toBe("false");
  });

  it("opens full screen, refits, closes with Escape or Close, and restores focus and page scrolling", () => {
    const { container, getByRole, getByText } = renderWithRouter(
      <UniversalRelationshipMap
        graph={graph}
        theme={themes.dark}
        selectedNodeId={author.id}
        onSelectNode={vi.fn()}
        belowMap={<div>Selection details</div>}
      />,
    );
    const main = container.querySelector("svg")!;
    const box = main.parentElement!;
    expect(box.nextElementSibling).toBe(getByText("Selection details"));
    const initialView = main.getAttribute("viewBox");
    const originalOverflow = document.body.style.overflow;
    const originalPosition = document.body.style.position;
    const toggle = getByRole("button", { name: "Full screen" });
    toggle.focus();
    fireEvent.click(getByRole("button", { name: "Zoom in" }));
    expect(main.getAttribute("viewBox")).not.toBe(initialView);
    fireEvent.click(toggle);
    const close = getByRole("button", { name: "Close full screen" });
    expect(document.activeElement).toBe(close);
    expect(box.style.position).toBe("fixed");
    expect(box.style.inset).toBe("0px");
    expect(box.style.zIndex).toBe("1000");
    expect(main.getAttribute("viewBox")).toBe(initialView);
    expect(document.body.style.overflow).toBe("hidden");
    expect(document.body.style.position).toBe("fixed");
    // Full screen covers the page, so the details move into the overlay.
    expect(getByRole("dialog", { name: "Full-screen relationship map" })).toBe(box);
    expect(box.contains(getByText("Selection details"))).toBe(true);
    fireEvent.keyDown(close, { key: "Escape" });
    expect(box.style.position).toBe("relative");
    expect(box.getAttribute("role")).toBeNull();
    expect(box.nextElementSibling).toBe(getByText("Selection details"));
    expect(document.activeElement).toBe(getByRole("button", { name: "Full screen" }));
    expect(document.body.style.overflow).toBe(originalOverflow);
    expect(document.body.style.position).toBe(originalPosition);
    fireEvent.click(toggle);
    fireEvent.click(getByRole("button", { name: "Close full screen" }));
    expect(document.activeElement).toBe(toggle);
  });

  it("ends full screen above a page's bottom panel, and on leaving the view", () => {
    const props = { graph, theme: themes.dark, selectedNodeId: author.id, onSelectNode: vi.fn() };
    const { container, getByRole, rerender } = renderWithRouter(
      <UniversalRelationshipMap {...props} fullScreenBottomInset="62px" />,
    );
    const box = container.querySelector<HTMLElement>("[data-map-box]")!;
    // Text controls size to their labels rather than shrinking onto each other.
    expect(getByRole("button", { name: "Emphasize connections" }).style.flex).toBe("0 0 auto");
    fireEvent.click(getByRole("button", { name: "Full screen" }));
    expect(box.style.inset).toBe("0 0 62px");
    rerender(<UniversalRelationshipMap {...props} fullScreenBottomInset="62px" active={false} />);
    expect(box.style.position).toBe("relative");
    expect(document.body.style.position).not.toBe("fixed");
    rerender(<UniversalRelationshipMap {...props} fullScreenBottomInset="62px" active />);
    expect(box.style.position).toBe("relative");
  });

  it("lets phone drags scroll, briefly hints at two-finger gestures, and allows full-screen one-finger pan", () => {
    vi.useFakeTimers();
    vi.stubGlobal(
      "matchMedia",
      vi.fn().mockReturnValue({ matches: true, addEventListener: vi.fn(), removeEventListener: vi.fn() }),
    );
    const { container, getByRole, getByText, unmount } = renderWithRouter(
      <UniversalRelationshipMap graph={graph} theme={themes.dark} selectedNodeId={null} onSelectNode={vi.fn()} />,
    );
    const main = container.querySelector("svg")!;
    vi.spyOn(main, "getBoundingClientRect").mockReturnValue({ width: 390, height: 320, left: 0, top: 0 } as DOMRect);
    const initialView = main.getAttribute("viewBox");
    const hint = getByText("Use two fingers to move the map");
    expect(main.style.touchAction).toBe("pan-x pan-y");
    fireEvent.touchStart(main, { touches: [{ clientX: 100, clientY: 100 }] });
    fireEvent.touchMove(main, { touches: [{ clientX: 100, clientY: 150 }] });
    expect(main.getAttribute("viewBox")).toBe(initialView);
    expect(hint.style.opacity).toBe("1");
    act(() => vi.advanceTimersByTime(1500));
    expect(hint.style.opacity).toBe("0");
    fireEvent.touchEnd(main, { touches: [] });
    fireEvent.click(getByRole("button", { name: "Full screen" }));
    expect(main.style.touchAction).toBe("none");
    fireEvent.touchStart(main, { touches: [{ clientX: 100, clientY: 100 }] });
    fireEvent.touchMove(main, { touches: [{ clientX: 130, clientY: 140 }] });
    expect(main.getAttribute("viewBox")).not.toBe(initialView);
    unmount();
    expect(document.body.style.position).not.toBe("fixed");
  });

  it("selects a node by its label text or transparent label box, keeping labels aria-hidden", () => {
    const select = vi.fn();
    const { container } = renderWithRouter(
      <UniversalRelationshipMap graph={graph} theme={themes.dark} selectedNodeId={null} onSelectNode={select} />,
    );
    const label = container.querySelector('[data-node-label="assignee:example"]')!;
    expect(label.closest('[aria-hidden="true"]')).not.toBeNull();
    fireEvent.click(label);
    expect(select).toHaveBeenLastCalledWith(assignee.id);
    const hit = container.querySelector('[data-label-hit-area="assignee:example"]')!;
    expect(hit.getAttribute("pointer-events")).toBe("all");
    fireEvent.click(hit);
    expect(select).toHaveBeenCalledTimes(2);
  });

  it.each([false, true])("keeps invisible node targets large on screen across zoom (coarse pointer: %s)", (coarse) => {
    vi.stubGlobal(
      "matchMedia",
      vi.fn().mockReturnValue({ matches: coarse, addEventListener: vi.fn(), removeEventListener: vi.fn() }),
    );
    vi.spyOn(SVGSVGElement.prototype, "getBoundingClientRect").mockReturnValue({
      width: 390,
      height: 320,
      left: 0,
      top: 0,
    } as DOMRect);
    const { container, getByRole } = renderWithRouter(
      <UniversalRelationshipMap graph={graph} theme={themes.dark} selectedNodeId={null} onSelectNode={vi.fn()} />,
    );
    const main = container.querySelector("svg")!;
    const verifyTargets = () => {
      const [, , width, height] = main.getAttribute("viewBox")!.split(" ").map(Number);
      const scale = Math.min(390 / width, 320 / height);
      const targets = main.querySelectorAll("[data-node-hit-area]");
      expect(targets).toHaveLength(graph.nodes.length);
      for (const target of targets) {
        expect(Number(target.getAttribute("r")) * scale).toBeGreaterThanOrEqual((coarse ? 22 : 12) - 1e-9);
        expect(target.getAttribute("fill")).toBe("transparent");
        expect(target.getAttribute("pointer-events")).toBe("all");
      }
    };
    verifyTargets();
    fireEvent.click(getByRole("button", { name: "Zoom in" }));
    verifyTargets();
  });

  it("uses one haloed label layer with constant screen size across zoom and resize", () => {
    const observer = installResizeObserverMock();
    let width = 800;
    vi.spyOn(SVGSVGElement.prototype, "getBoundingClientRect").mockImplementation(
      () => ({ width, height: 600, left: 0, top: 0 }) as DOMRect,
    );
    const { container, getByRole } = renderWithRouter(
      <UniversalRelationshipMap
        graph={makeMultiHubGraph()}
        theme={themes.dark}
        selectedNodeId={null}
        onSelectNode={vi.fn()}
      />,
    );
    const main = container.querySelector("svg")!;
    const verifyLabels = () => {
      const [, , w, h] = main.getAttribute("viewBox")!.split(" ").map(Number);
      const scale = Math.min(width / w, 600 / h);
      const labels = [...main.querySelectorAll("[data-node-label]")];
      expect(labels.length).toBeGreaterThan(0);
      expect(main.querySelector("[data-label-layer]")?.getAttribute("aria-hidden")).toBe("true");
      expect(main.querySelector('g[role="button"] text')).toBeNull();
      for (const label of labels) {
        expect(Number(label.getAttribute("font-size")) * scale).toBeCloseTo(13);
        expect(label.getAttribute("paint-order")).toBe("stroke");
        expect(label.getAttribute("stroke")).toBe(themes.dark.panelBg);
        expect(Number(label.getAttribute("stroke-width")) * scale).toBeCloseTo(4);
      }
      for (const caption of main.querySelectorAll("[data-network-caption]")) {
        expect(Number(caption.getAttribute("font-size")) * scale).toBeCloseTo(11);
      }
    };
    expect(main.querySelector('[data-node-label="assignee:alpha"]')?.textContent).toBe("Alpha Optics");
    expect(main.querySelector("[data-network-caption]")?.textContent).toBe("Network 1 · 19 nodes · 2 neighborhoods");
    verifyLabels();
    fireEvent.click(getByRole("button", { name: "Zoom in" }));
    verifyLabels();
    width = 390;
    act(() => observer.trigger(main));
    verifyLabels();
    fireEvent.click(getByRole("button", { name: "Fit all" }));
    verifyLabels();
    for (const shape of main.querySelectorAll(
      'g[role="button"] > circle, g[role="button"] > rect, g[role="button"] > polygon, path[data-edge-id]',
    )) {
      expect(shape.getAttribute("vector-effect")).toBe("non-scaling-stroke");
    }
  });

  it("keeps one tab stop and moves focus directionally, with Enter and Space selecting the focused node", () => {
    const select = vi.fn();
    const layout = layoutUniversalRelationshipGraph(graph);
    const { container, getByRole } = renderWithRouter(
      <UniversalRelationshipMap graph={graph} theme={themes.dark} selectedNodeId={null} onSelectNode={select} />,
    );
    const tabStops = () => container.querySelectorAll('g[role="button"][tabindex="0"]');
    expect(tabStops()).toHaveLength(1);
    let current = layout.nodes.find((node) => node.fullLabel === tabStops()[0].querySelector("title")!.textContent)!;
    act(() => (tabStops()[0] as SVGGElement).focus());
    // Modified arrows stay with the browser (Alt+Left is history navigation).
    fireEvent.keyDown(document.activeElement!, { key: "ArrowRight", altKey: true });
    expect(document.activeElement!.querySelector("title")?.textContent).toBe(current.fullLabel);
    for (const key of ["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp"]) {
      const target = directionalUniversalNode(layout.nodes, current, key);
      fireEvent.keyDown(document.activeElement!, { key });
      if (target) current = target;
      expect(tabStops()).toHaveLength(1);
      expect(document.activeElement).toBe(tabStops()[0]);
      expect(document.activeElement!.querySelector("title")?.textContent).toBe(current.fullLabel);
    }
    expect(select).not.toHaveBeenCalled();
    fireEvent.keyDown(document.activeElement!, { key: "Enter" });
    fireEvent.keyDown(document.activeElement!, { key: " " });
    expect(select.mock.calls).toEqual([[current.id], [current.id]]);
    expect(
      getByRole("button", {
        name: `Select ${current.kind === "author" ? "inventor" : current.kind === "family" ? "corporate family" : current.kind} ${current.fullLabel}`,
      }).getAttribute("tabindex"),
    ).toBe("0");
  });

  it("culls offscreen geometry while retaining the selected node, neighbors, labels, and incident edge layer", () => {
    vi.spyOn(SVGSVGElement.prototype, "getBoundingClientRect").mockReturnValue({
      width: 800,
      height: 600,
      left: 0,
      top: 0,
    } as DOMRect);
    const { container, getByRole } = renderWithRouter(
      <UniversalRelationshipMap graph={graph} theme={themes.dark} selectedNodeId={author.id} onSelectNode={vi.fn()} />,
    );
    const main = container.querySelector("svg")!;
    const initialNodes = main.querySelectorAll('g[role="button"]').length;
    for (let i = 0; i < 40; i++) fireEvent.click(getByRole("button", { name: "Zoom in" }));
    const overview = getByRole("group", { name: "Map overview" });
    Object.defineProperty(overview, "getScreenCTM", {
      value: () => ({ inverse: () => ({ a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 }) }),
    });
    fireEvent.click(overview, { clientX: 0, clientY: 0 });
    expect(main.querySelectorAll('g[role="button"]').length).toBeLessThan(initialNodes);
    expect(getByRole("button", { name: "Select inventor Ada Inventor" })).toBeDefined();
    expect(getByRole("button", { name: "Select patent US 1" })).toBeDefined();
    // The selection stays mounted offscreen, but its label is not clamped beside some other node.
    const [vbX, vbY, vbW, vbH] = main.getAttribute("viewBox")!.split(" ").map(Number);
    const ada = layoutUniversalRelationshipGraph(graph).nodeById[author.id];
    expect(
      boundsIntersect(
        { x: ada.x - ada.r, y: ada.y - ada.r, width: ada.r * 2, height: ada.r * 2 },
        { x: vbX, y: vbY, width: vbW, height: vbH },
      ),
    ).toBe(false);
    expect(main.querySelector('[data-node-label="author:ada"]')).toBeNull();
    const layers = [...main.querySelectorAll("[data-edge-layer]")];
    expect(layers.map((layer) => layer.getAttribute("data-edge-layer"))).toEqual(["background", "highlighted"]);
    expect(layers[1].querySelectorAll("[data-edge-id]")).toHaveLength(1);
    expect(layers[1].querySelector("[data-edge-id]")?.getAttribute("data-edge-id")).toBe("edge-0");
    expect(main.querySelectorAll("[data-edge-id]").length).toBeLessThan(graph.edges.length);
    const layout = layoutUniversalRelationshipGraph(graph);
    const key = ["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp"].find((key) =>
      directionalUniversalNode(layout.nodes, layout.nodeById[author.id], key),
    )!;
    const target = directionalUniversalNode(layout.nodes, layout.nodeById[author.id], key)!;
    const before = main.getAttribute("viewBox");
    const selected = getByRole("button", { name: "Select inventor Ada Inventor" });
    act(() => selected.focus());
    fireEvent.keyDown(selected, { key });
    expect(main.getAttribute("viewBox")).not.toBe(before);
    expect(document.activeElement?.querySelector("title")?.textContent).toBe(target.fullLabel);
    expect(main.querySelectorAll('g[role="button"][tabindex="0"]')).toHaveLength(1);
  });

  it("puts the tab stop on an onscreen node when the selection is offscreen", () => {
    vi.spyOn(SVGSVGElement.prototype, "getBoundingClientRect").mockReturnValue({
      width: 800,
      height: 600,
      left: 0,
      top: 0,
    } as DOMRect);
    const layout = layoutUniversalRelationshipGraph(graph);
    const patent = layout.nodeById["patent:US 1"];
    const ada = layout.nodeById[author.id];
    const { container, getByRole } = renderWithRouter(
      <UniversalRelationshipMap graph={graph} theme={themes.dark} selectedNodeId={author.id} onSelectNode={vi.fn()} />,
    );
    const main = container.querySelector("svg")!;
    for (let i = 0; i < 40; i++) fireEvent.click(getByRole("button", { name: "Zoom in" }));
    const overview = getByRole("group", { name: "Map overview" });
    Object.defineProperty(overview, "getScreenCTM", {
      value: () => ({ inverse: () => ({ a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 }) }),
    });
    fireEvent.click(overview, { clientX: patent.x, clientY: patent.y });
    const [vbX, vbY, vbW, vbH] = main.getAttribute("viewBox")!.split(" ").map(Number);
    expect(Math.abs(ada.x - patent.x) > vbW / 2 || Math.abs(ada.y - patent.y) > vbH / 2).toBe(true);
    expect(
      boundsIntersect({ x: patent.x, y: patent.y, width: 0, height: 0 }, { x: vbX, y: vbY, width: vbW, height: vbH }),
    ).toBe(true);
    expect(getByRole("button", { name: "Select inventor Ada Inventor" }).getAttribute("tabindex")).toBe("-1");
    expect(getByRole("button", { name: "Select patent US 1" }).getAttribute("tabindex")).toBe("0");
  });

  it("labels only hubs before the viewport is measured, as in prerendered HTML", () => {
    const multiHub = makeMultiHubGraph();
    const hubIds = layoutUniversalRelationshipGraph(multiHub).clusters.map((cluster) => cluster.anchorId);
    const { container } = renderWithRouter(
      <UniversalRelationshipMap graph={multiHub} theme={themes.dark} selectedNodeId={null} onSelectNode={vi.fn()} />,
    );
    const labelIds = [...container.querySelectorAll("[data-node-label]")].map((label) =>
      label.getAttribute("data-node-label"),
    );
    expect(labelIds.length).toBeGreaterThan(0);
    expect(labelIds.every((id) => hubIds.includes(id!))).toBe(true);
  });

  it("hides network captions that cannot fit inside their boundary", () => {
    const observer = installResizeObserverMock();
    let width = 800;
    vi.spyOn(SVGSVGElement.prototype, "getBoundingClientRect").mockImplementation(
      () => ({ width, height: 600, left: 0, top: 0 }) as DOMRect,
    );
    const { container } = renderWithRouter(
      <UniversalRelationshipMap graph={graph} theme={themes.dark} selectedNodeId={null} onSelectNode={vi.fn()} />,
    );
    const main = container.querySelector("svg")!;
    expect(main.querySelector("[data-network-caption]")?.textContent).toBe("Network 1 · 4 nodes · 1 neighborhood");
    width = 60;
    act(() => observer.trigger(main));
    expect(main.querySelector("[data-network-caption]")).toBeNull();
  });

  it("renders catalog maker/model links and exposes model navigation without patent claims", () => {
    const maker = { id: "maker:book", kind: "maker", name: "Book Optics", slug: "book" } as const;
    const lens = {
      id: "lens:book",
      kind: "lens",
      name: "Book Model",
      lens: { key: "book", name: "Book Model" },
    } as const;
    const catalogGraph: UniversalRelationshipGraph = {
      nodes: [maker, lens],
      edges: [{ id: "catalog", from: lens.id, to: maker.id, kind: "catalog-maker" }],
      patents: [],
      components: [[maker.id, lens.id]],
      stats: {
        authors: 0,
        assignees: 0,
        patents: 0,
        organizations: 0,
        families: 0,
        patentRelationships: 0,
        corporateRelationships: 0,
        makers: 1,
        lenses: 1,
        catalogRelationships: 1,
        components: 1,
      },
    };
    const select = vi.fn();
    const { container, getByRole, unmount } = renderWithRouter(
      <>
        <UniversalRelationshipMap
          graph={catalogGraph}
          theme={themes.dark}
          selectedNodeId={maker.id}
          onSelectNode={select}
        />
        <UniversalEntityDetailCard
          graph={catalogGraph}
          node={maker}
          theme={themes.dark}
          onClose={vi.fn()}
          onSelectNode={select}
        />
      </>,
    );
    expect(container.querySelector("path[data-edge-id] title")?.textContent).toBe(
      "Book Model grouped under catalog maker Book Optics",
    );
    expect(getByRole("link", { name: "Open maker page →" }).getAttribute("href")).toBe("/makers/book/");
    fireEvent.click(getByRole("button", { name: /^Book Model$/ }));
    expect(select).toHaveBeenCalledWith(lens.id, true);
    fireEvent.click(getByRole("button", { name: "Select lens model Book Model" }));
    expect(select).toHaveBeenCalledWith(lens.id);
    unmount();
    const modelCard = renderWithRouter(
      <UniversalEntityDetailCard
        graph={catalogGraph}
        node={lens}
        theme={themes.dark}
        onClose={vi.fn()}
        onSelectNode={select}
      />,
    );
    expect(modelCard.getByRole("link", { name: "Open lens model →" }).getAttribute("href")).toBe("/lens/book/");
    expect(modelCard.queryByText("Related patents")).toBeNull();
    expect(modelCard.getByText("non-patent catalog model")).toBeDefined();
  });

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
    const edgeCount = container.querySelectorAll("path[data-edge-id]").length;
    const toggle = getByRole("button", { name: "Emphasize connections" });
    expect(toggle.getAttribute("aria-pressed")).toBe("false");
    fireEvent.click(toggle);
    const assigneeButton = getByRole("button", { name: "Select assignee Example Optics" });
    expect(assigneeButton.getAttribute("opacity")).toBe("0.15");
    expect(container.querySelector('[data-node-label="assignee:example"]')?.getAttribute("opacity")).toBe("0.15");
    expect(getByRole("button", { name: "Select inventor Ada Inventor" }).getAttribute("opacity")).toBe("1");
    expect(getByRole("button", { name: "Select patent US 1" }).getAttribute("opacity")).toBe("1");
    fireEvent.pointerEnter(assigneeButton);
    expect(assigneeButton.getAttribute("opacity")).toBe("0.15");
    fireEvent.click(assigneeButton);
    expect(props.onSelectNode).toHaveBeenCalledWith(assignee.id);
    expect(container.querySelectorAll("path[data-edge-id]")).toHaveLength(edgeCount);
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
      const lines = [...container.querySelectorAll("path[data-edge-id]")];
      const opacities = lines.map((line) => Number(line.getAttribute("opacity")));
      fireEvent.click(getByRole("button", { name: "Emphasize connections" }));
      lines.forEach((line, i) =>
        expect(Number(line.getAttribute("opacity"))).toBeCloseTo(
          opacities[i] *
            (edges.find((edge) => edge.id === line.getAttribute("data-edge-id"))!.from === author.id ||
            edges.find((edge) => edge.id === line.getAttribute("data-edge-id"))!.to === author.id
              ? 1
              : 0.15),
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
    const { container, getAllByRole, getByRole } = renderWithRouter(
      <UniversalRelationshipMap graph={graph} theme={themes.dark} selectedNodeId={null} onSelectNode={onSelectNode} />,
    );
    expect(getByRole("group", { name: /Universal relationship map/ })).toBeDefined();
    expect(getAllByRole("button", { name: /^Select / })).toHaveLength(graph.nodes.length);
    expect(container.querySelector('[data-node-label="assignee:example"]')?.textContent).toBe("Example Optics");
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
    const activeLines = [...container.querySelectorAll("path[data-edge-id]")].filter(
      (line) => line.getAttribute("opacity") === "1",
    );
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

    const authorshipLines = [...container.querySelectorAll("path[data-edge-id]")].filter((line) =>
      line.querySelector("title")?.textContent?.includes("Shared Inventor named on"),
    );
    expect(authorshipLines).toHaveLength(2);
    expect(new Set(authorshipLines.map((line) => line.getAttribute("opacity")))).toEqual(new Set(["0.3"]));

    const acquisitionLine = [...container.querySelectorAll("path[data-edge-id]")].find(
      (line) => line.querySelector("title")?.textContent === "Alpha Optics acquired by Beta Optics",
    );
    expect(acquisitionLine?.getAttribute("opacity")).toBe("0.62");
    expect(acquisitionLine?.getAttribute("stroke-width")).toBe("1.35");
    const layout = layoutUniversalRelationshipGraph(makeMultiHubGraph());
    for (const edge of layout.edges) {
      const path = container.querySelector(`[data-edge-id="${edge.id}"]`)!;
      const [, , , , cx, cy] = path.getAttribute("d")!.split(" ").map(Number);
      const midpoint = [(edge.x1 + edge.x2) / 2, (edge.y1 + edge.y2) / 2];
      if (layout.nodeById[edge.from].clusterId === layout.nodeById[edge.to].clusterId) {
        expect([cx, cy]).toEqual(midpoint);
      } else {
        expect([cx, cy]).not.toEqual(midpoint);
      }
    }
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
