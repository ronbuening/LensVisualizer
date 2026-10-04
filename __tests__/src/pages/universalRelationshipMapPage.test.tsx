// @vitest-environment jsdom

/**
 * Page-level coverage for the catalog-wide universal relationship map.
 */

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { act, cleanup, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { Route, Routes, RouterProvider, createMemoryRouter, useLocation, useNavigate } from "react-router";
import { buildUniversalRelationshipGraph } from "../../../src/utils/catalog/universalRelationshipGraph.js";
import { universalMapHash } from "../../../src/utils/state/universalMapUrl.js";
import type { UniversalRelationshipGraph } from "../../../src/utils/catalog/universalRelationshipGraph.js";
import UniversalRelationshipMapPage from "../../../src/pages/UniversalRelationshipMapPage.js";
import { clearBrowserState, installMatchMediaMock, renderPage } from "../../testUtils.js";
import * as relationshipQueries from "../../../src/utils/catalog/universalRelationshipQueries.js";

const mapFlags = vi.hoisted(() => ({ extraViews: true }));
vi.mock("../../../src/utils/featureFlags.js", async (importOriginal) => ({
  ...(await importOriginal<typeof import("../../../src/utils/featureFlags.js")>()),
  get ENABLE_UNIVERSAL_MAP_EXTRA_VIEWS() {
    return mapFlags.extraViews;
  },
}));

vi.mock("../../../src/components/SEOHead.js", () => ({
  default: function SEOHead() {
    return null;
  },
}));

vi.mock("../../../src/components/relationshipMap/UniversalRelationshipMap.js", () => ({
  default: function UniversalRelationshipMapMock({
    graph,
    onSelectNode,
    onShowDetails,
    selectedNodeId,
    focusRequest,
    viewResetRequest,
    pathNodeIds,
  }: {
    graph: UniversalRelationshipGraph;
    onSelectNode: (nodeId: string) => void;
    onShowDetails?: () => void;
    selectedNodeId: string | null;
    focusRequest?: { nodeId: string; requestId: number };
    viewResetRequest?: number;
    pathNodeIds?: readonly string[];
  }) {
    const patent = graph.nodes.find((node) => node.kind === "patent")!;
    const assignee = graph.nodes.find((node) => node.kind === "assignee")!;
    const family = graph.nodes.find((node) => node.kind === "family")!;
    return (
      <div
        role="group"
        aria-label="Universal relationship map test double"
        data-selected={selectedNodeId}
        data-focus={focusRequest?.nodeId}
        data-request={focusRequest?.requestId}
        data-reset={viewResetRequest}
        data-path={pathNodeIds?.join(",")}
      >
        <button type="button" onClick={() => onSelectNode(patent.id)}>
          Select test patent
        </button>
        <button type="button" onClick={() => onSelectNode(assignee.id)}>
          Select test assignee
        </button>
        <button type="button" onClick={() => onSelectNode(family.id)}>
          Select test family
        </button>
        {selectedNodeId && onShowDetails && (
          <button type="button" onClick={onShowDetails}>
            View details
          </button>
        )}
      </div>
    );
  },
}));

function HistoryControls() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <output aria-label="Current location">{location.pathname + location.search + location.hash}</output>
      <button onClick={() => void navigate(-1)}>Back</button>
      <button onClick={() => void navigate(1)}>Forward</button>
    </>
  );
}

function renderUniversalPage(initialEntry = "/relationships/universal") {
  const entry = new URL(initialEntry, "https://example.test");
  const fragment = new URLSearchParams(entry.hash.slice(1));
  fragment.set("view", "full");
  entry.hash = fragment.toString();
  return renderPage(
    <Routes>
      <Route
        path="/relationships/universal"
        element={
          <>
            <UniversalRelationshipMapPage />
            <HistoryControls />
          </>
        }
      />
    </Routes>,
    { initialEntries: [entry.pathname + entry.search + entry.hash] },
  );
}

describe("UniversalRelationshipMapPage", () => {
  beforeEach(() => {
    mapFlags.extraViews = true;
    clearBrowserState();
    installMatchMediaMock(false);
  });

  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it.each(["", "explore", "research"])(
    "shows only Full map when extra views are disabled, including saved view=%s",
    async (view) => {
      mapFlags.extraViews = false;
      const findPaths = vi.spyOn(relationshipQueries, "findUniversalPaths");
      const edge = buildUniversalRelationshipGraph().edges.find((e) => e.kind === "assignment")!;
      const fragment = new URLSearchParams({ view, node: edge.to, from: edge.from, to: edge.to, keep: "yes" });
      const router = createMemoryRouter(
        [{ path: "/relationships/universal", Component: UniversalRelationshipMapPage }],
        {
          initialEntries: [`/relationships/universal#${fragment}`],
        },
      );
      render(<RouterProvider router={router} />);
      const map = await screen.findByRole("group", { name: "Universal relationship map test double" });
      expect(screen.getByRole("region", { name: "Full map" })).toBeDefined();
      expect(screen.queryByRole("tablist", { hidden: true })).toBeNull();
      expect(screen.queryByRole("tabpanel", { hidden: true })).toBeNull();
      expect(screen.queryByRole("region", { name: "Research records", hidden: true })).toBeNull();
      expect(screen.queryByRole("searchbox", { name: "Find a neighborhood", hidden: true })).toBeNull();
      expect(map.getAttribute("data-selected")).toBe(edge.to);
      expect(map.getAttribute("data-focus")).toBe(edge.to);
      expect(map.getAttribute("data-path")).toBeNull();
      expect(findPaths).not.toHaveBeenCalled();
      expect(router.state.location.hash).toBe(`#${fragment}`);
      fireEvent.click(screen.getByRole("button", { name: "Select test patent" }));
      await act(async () => {
        await router.navigate(-1);
      });
      expect(map.getAttribute("data-selected")).toBe(edge.to);
      expect(screen.getByRole("region", { name: "Full map" })).toBeDefined();
      router.dispose();
    },
  );

  it("restores partial relationship filters and shares the research path with Full map", async () => {
    const edge = buildUniversalRelationshipGraph().edges.find((e) => e.kind === "assignment")!;
    const fragment = new URLSearchParams({ relations: "assignment", from: edge.from, to: edge.to, view: "full" });
    renderUniversalPage(`/relationships/universal#${fragment}`);
    const map = await screen.findByRole("group", { name: "Universal relationship map test double" });
    expect(map.getAttribute("data-path")).toBe(`${edge.from},${edge.to}`);
    fireEvent.click(screen.getByRole("button", { name: /^Filters/ }));
    expect((screen.getByRole("checkbox", { name: "Patent relationships" }) as HTMLInputElement).indeterminate).toBe(
      true,
    );
    fireEvent.click(screen.getByRole("checkbox", { name: "Patent relationships" }));
    await waitFor(() =>
      expect((screen.getByRole("checkbox", { name: "Patent relationships" }) as HTMLInputElement).indeterminate).toBe(
        false,
      ),
    );
  });

  it("keeps filters out of the initial workspace and exposes hidden relationships with a reset", async () => {
    mapFlags.extraViews = false;
    renderUniversalPage("/relationships/universal#relations=&keep=yes");
    const toggle = await screen.findByRole("button", { name: /^Filters · None/ });
    expect(toggle.getAttribute("aria-expanded")).toBe("false");
    expect(screen.queryByRole("checkbox", { name: "Corporate history" })).toBeNull();
    expect(screen.getByText(/All connections are hidden/)).toBeDefined();
    const location = screen.getByRole("status", { name: "Current location" }).textContent;
    fireEvent.click(toggle);
    expect(screen.getByRole("status", { name: "Current location" }).textContent).toBe(location);
    fireEvent.click(screen.getByRole("button", { name: "Show all relationships" }));
    await waitFor(() => expect(toggle.textContent).toContain("All"));
    expect(screen.queryByText(/All connections are hidden/)).toBeNull();
    expect((screen.getByRole("checkbox", { name: "Corporate history" }) as HTMLInputElement).checked).toBe(true);
    expect(screen.getByRole("status", { name: "Current location" }).textContent).toContain("keep=yes");
    fireEvent.click(toggle);
    expect(screen.queryByRole("checkbox", { name: "Corporate history" })).toBeNull();
    fireEvent.click(screen.getByRole("button", { name: "Back" }));
    await waitFor(() => expect(toggle.textContent).toContain("None"));
    expect(toggle.getAttribute("aria-expanded")).toBe("false");
  });

  it("opens details and returns to the map on narrow screens without changing selection or history", async () => {
    mapFlags.extraViews = false;
    renderUniversalPage();
    fireEvent.click(await screen.findByRole("button", { name: "Select test assignee" }));
    const details = screen.getByText("Details & sources").closest("details")!;
    const map = screen.getByRole("region", { name: "Full map" });
    details.scrollIntoView = vi.fn();
    map.scrollIntoView = vi.fn();
    details.open = false;
    const location = screen.getByRole("status", { name: "Current location" }).textContent;
    fireEvent.click(screen.getByRole("button", { name: "View details" }));
    expect(details.open).toBe(true);
    expect(details.scrollIntoView).toHaveBeenCalledOnce();
    expect(document.activeElement).toBe(within(details).getByRole("heading", { level: 3 }));
    fireEvent.click(screen.getByRole("button", { name: "Back to map" }));
    expect(map.scrollIntoView).toHaveBeenCalledOnce();
    expect(document.activeElement).toBe(map);
    expect(screen.getByRole("status", { name: "Current location" }).textContent).toBe(location);
  });

  it("places Full map first, defaults legacy node links to it, and shares selection and filters across views and history", async () => {
    const node = buildUniversalRelationshipGraph().nodes.find((n) => n.kind === "assignee")!;
    const router = createMemoryRouter([{ path: "/relationships/universal", Component: UniversalRelationshipMapPage }], {
      initialEntries: [`/relationships/universal${universalMapHash("#keep=yes", node.id)}`],
    });
    render(<RouterProvider router={router} />);
    expect((await screen.findByRole("tab", { name: "Full map" })).getAttribute("aria-selected")).toBe("true");
    expect(
      within(screen.getByRole("tablist"))
        .getAllByRole("tab")
        .map((tab) => tab.textContent),
    ).toEqual(["Full map", "Explore", "Research"]);
    fireEvent.keyDown(screen.getByRole("tab", { name: "Full map" }), { key: "ArrowRight" });
    expect(screen.getByRole("tab", { name: "Explore" }).getAttribute("aria-selected")).toBe("true");
    expect(router.state.location.hash).toContain("view=explore");
    fireEvent.keyDown(screen.getByRole("tab", { name: "Explore" }), { key: "Home" });
    expect(screen.getByRole("tab", { name: "Full map" }).getAttribute("aria-selected")).toBe("true");
    expect(router.state.location.hash).not.toContain("view=");
    expect(screen.getByRole("heading", { level: 3, name: node.name })).toBeDefined();
    fireEvent.click(screen.getByRole("button", { name: /^Filters/ }));
    fireEvent.click(screen.getByRole("checkbox", { name: "Corporate history" }));
    fireEvent.click(screen.getByRole("tab", { name: "Research" }));
    expect(router.state.location.hash).toContain("view=research");
    expect(router.state.location.hash).toContain("keep=yes");
    expect(screen.getByRole("heading", { level: 3, name: node.name })).toBeDefined();
    await act(async () => {
      await router.navigate(-1);
    });
    expect(screen.getByRole("tab", { name: "Full map" }).getAttribute("aria-selected")).toBe("true");
    expect((screen.getByRole("checkbox", { name: "Corporate history" }) as HTMLInputElement).checked).toBe(false);
    router.dispose();
  });

  it("opens the explored entity in Full map, preserving filters and history and framing repeated selections", async () => {
    const node = buildUniversalRelationshipGraph().nodes.find((n) => n.kind === "assignee")!;
    const fragment = new URLSearchParams({ view: "explore", node: node.id, relations: "assignment", keep: "yes" });
    const router = createMemoryRouter([{ path: "/relationships/universal", Component: UniversalRelationshipMapPage }], {
      initialEntries: [`/relationships/universal#${fragment}`],
    });
    render(<RouterProvider router={router} />);
    const action = await screen.findByRole("button", { name: `Open full map with ${node.name} selected` });
    action.focus();
    fireEvent.click(action);
    const map = await screen.findByRole("group", { name: "Universal relationship map test double" });
    expect(map.getAttribute("data-selected")).toBe(node.id);
    expect(map.getAttribute("data-focus")).toBe(node.id);
    expect(document.activeElement).toBe(screen.getByRole("tab", { name: "Full map" }));
    expect(Object.fromEntries(new URLSearchParams(router.state.location.hash.slice(1)))).toEqual({
      keep: "yes",
      node: node.id,
      relations: "assignment",
    });
    const firstRequest = Number(map.getAttribute("data-request"));
    await act(async () => {
      await router.navigate(-1);
    });
    expect(router.state.location.hash).toBe(`#${fragment}`);
    expect(screen.getByRole("tab", { name: "Explore" }).getAttribute("aria-selected")).toBe("true");
    fireEvent.click(screen.getByRole("button", { name: "Open full map" }));
    await waitFor(() => expect(Number(map.getAttribute("data-request"))).toBeGreaterThan(firstRequest));
    expect(map.getAttribute("data-selected")).toBe(node.id);
    expect(map.getAttribute("data-focus")).toBe(node.id);
    router.dispose();
  });

  it.each(["full", "explore"])(
    "prefills Research from the selection in %s and preserves its saved destination",
    async (view) => {
      const graph = buildUniversalRelationshipGraph();
      const node = graph.nodes.find((n) => n.kind === "assignee")!;
      const destination = graph.nodes.find((n) => n.kind === "patent")!;
      const fragment = new URLSearchParams({
        view,
        node: node.id,
        to: destination.id,
        relations: "assignment",
        keep: "yes",
      });
      const router = createMemoryRouter(
        [{ path: "/relationships/universal", Component: UniversalRelationshipMapPage }],
        {
          initialEntries: [`/relationships/universal#${fragment}`],
        },
      );
      render(<RouterProvider router={router} />);
      fireEvent.click(await screen.findByRole("tab", { name: "Research" }));
      await waitFor(() => expect(new URLSearchParams(router.state.location.hash.slice(1)).get("from")).toBe(node.id));
      const finder = screen.getByRole("region", { name: "Find a connection" });
      expect(within(finder).getByText(node.name)).toBeDefined();
      expect(within(finder).getByText(destination.name)).toBeDefined();
      expect(new URLSearchParams(router.state.location.hash.slice(1)).get("to")).toBe(destination.id);
      expect(router.state.location.hash).toContain("relations=assignment");
      expect(router.state.location.hash).toContain("keep=yes");
      await act(async () => {
        await router.navigate(-1);
      });
      expect(router.state.location.hash).toBe(`#${fragment}`);
      await act(async () => {
        await router.navigate(1);
      });
      expect(within(screen.getByRole("region", { name: "Find a connection" })).getByText(node.name)).toBeDefined();
      router.dispose();
    },
  );

  it("keeps selection consistent when Back interrupts a pending data-router navigation", async () => {
    const router = createMemoryRouter([{ path: "/relationships/universal", Component: UniversalRelationshipMapPage }], {
      initialEntries: ["/relationships/universal#view=full"],
    });
    render(<RouterProvider router={router} />);
    const button = await screen.findByRole("button", { name: "Select test assignee" });
    await act(async () => {
      fireEvent.click(button);
      await router.navigate(-1);
    });
    expect(router.state.location.hash).toBe("#view=full");
    expect(
      screen.getByRole("group", { name: "Universal relationship map test double" }).getAttribute("data-selected"),
    ).toBeNull();
    router.dispose();
  });

  it("restores history through the production data-router provider", async () => {
    const router = createMemoryRouter(
      [
        {
          path: "/relationships/universal",
          Component: () => (
            <>
              <UniversalRelationshipMapPage />
              <HistoryControls />
            </>
          ),
        },
      ],
      { initialEntries: ["/relationships/universal#view=full"] },
    );
    render(<RouterProvider router={router} />);
    fireEvent.click(await screen.findByRole("button", { name: "Select test assignee" }));
    await waitFor(() =>
      expect(screen.getByRole("status", { name: "Current location" }).textContent).toContain("node=assignee"),
    );
    fireEvent.click(screen.getByRole("button", { name: "Select test patent" }));
    await waitFor(() =>
      expect(screen.getByRole("status", { name: "Current location" }).textContent).toContain("node=patent"),
    );
    fireEvent.click(screen.getByRole("button", { name: "Back" }));
    await waitFor(() =>
      expect(
        screen.getByRole("group", { name: "Universal relationship map test double" }).getAttribute("data-focus"),
      ).toMatch(/^assignee:/),
    );
    router.dispose();
  });

  it.each(["author", "assignee", "patent", "organization", "family", "maker", "lens"] as const)(
    "restores shared %s selection and requests focus after mounting",
    async (kind) => {
      const node = buildUniversalRelationshipGraph().nodes.find((n) => n.kind === kind)!;
      renderUniversalPage(`/relationships/universal?keep=yes${universalMapHash("", node.id)}`);
      const map = await screen.findByRole("group", { name: "Universal relationship map test double" });
      expect(map.getAttribute("data-selected")).toBe(node.id);
      expect(map.getAttribute("data-focus")).toBe(node.id);
      expect(screen.getByRole("status", { name: "Current location" }).textContent).toContain("?keep=yes");
    },
  );

  it("updates history without recentering direct selections and restores Back/Forward focus", async () => {
    renderUniversalPage();
    const map = await screen.findByRole("group", { name: "Universal relationship map test double" });
    fireEvent.click(screen.getByRole("button", { name: "Select test assignee" }));
    const assigneeId = map.getAttribute("data-selected");
    expect(map.getAttribute("data-focus")).toBeNull();
    expect(screen.getByRole("status", { name: "Current location" }).textContent).toContain("node=assignee");
    fireEvent.click(screen.getByRole("button", { name: "Select test patent" }));
    fireEvent.click(screen.getByRole("button", { name: "Back" }));
    await waitFor(() => expect(map.getAttribute("data-focus")).toBe(assigneeId));
    fireEvent.click(screen.getByRole("button", { name: "Forward" }));
    await waitFor(() => expect(map.getAttribute("data-focus")).toMatch(/^patent:/));
    const reset = map.getAttribute("data-reset");
    fireEvent.click(screen.getByRole("button", { name: "Close patent details" }));
    expect(map.getAttribute("data-selected")).toBeNull();
    expect(map.getAttribute("data-reset")).toBe(reset);
    expect(screen.getByRole("status", { name: "Current location" }).textContent).not.toContain("node=");
  });

  it("repeats search focus without duplicating history", async () => {
    renderUniversalPage("/relationships/universal?keep=yes#extra=ok");
    const input = await screen.findByRole("combobox", { name: "Search the map" });
    const map = screen.getByRole("group", { name: "Universal relationship map test double" });
    fireEvent.change(input, { target: { value: "Nikon Corporation" } });
    fireEvent.keyDown(input, { key: "Enter" });
    const request = Number(map.getAttribute("data-request"));
    fireEvent.change(input, { target: { value: "Nikon Corporation" } });
    fireEvent.keyDown(input, { key: "Enter" });
    expect(Number(map.getAttribute("data-request"))).toBe(request + 1);
    fireEvent.click(screen.getByRole("button", { name: "Back" }));
    await waitFor(() => expect(map.getAttribute("data-selected")).toBeNull());
    expect(screen.getByRole("status", { name: "Current location" }).textContent).toBe(
      "/relationships/universal?keep=yes#extra=ok&view=full",
    );
  });

  it("falls back to the overview for an invalid shared node", async () => {
    renderUniversalPage("/relationships/universal#node=__proto__");
    const map = await screen.findByRole("group", { name: "Universal relationship map test double" });
    expect(map.getAttribute("data-selected")).toBeNull();
    expect(map.getAttribute("data-focus")).toBeNull();
    expect(Number(map.getAttribute("data-reset"))).toBeGreaterThan(0);
  });

  it("renders catalog totals and the client map", async () => {
    renderUniversalPage();
    expect(screen.getByRole("heading", { level: 1, name: "Universal Relationship Map" })).toBeDefined();
    expect(screen.getByText(/corporate links ·/)).toBeDefined();
    expect(screen.getByText(/connected networks$/)).toBeDefined();
    expect(await screen.findByRole("group", { name: "Universal relationship map test double" })).toBeDefined();
  });

  it("links its breadcrumb back to the ordinary relationship index", () => {
    renderUniversalPage();
    expect(screen.getByRole("link", { name: "Relationship map" }).getAttribute("href")).toBe("/relationships/");
  });

  it("opens shared patent details without requiring a center party", async () => {
    renderUniversalPage();
    fireEvent.click(await screen.findByRole("button", { name: "Select test patent" }));
    expect(screen.getByRole("button", { name: "Close patent details" })).toBeDefined();
    expect(document.querySelector('a[href^="/lens/"]')).not.toBeNull();
  });

  it("opens entity details from dropdown search without leaving the universal page", async () => {
    renderUniversalPage();
    const input = await screen.findByRole("combobox", { name: "Search the map" });
    fireEvent.change(input, { target: { value: "Nikon Corporation" } });
    fireEvent.keyDown(input, { key: "Enter" });
    expect(screen.getByRole("heading", { level: 3, name: "Nikon Corporation" })).toBeDefined();
    expect(screen.queryByRole("listbox")).toBeNull();
    expect(screen.getByRole("heading", { level: 1, name: "Universal Relationship Map" })).toBeDefined();
  });

  it("opens entity details with a focused-map handoff for assignees", async () => {
    renderUniversalPage();
    fireEvent.click(await screen.findByRole("button", { name: "Select test assignee" }));
    const focusedLink = screen.getByRole("link", { name: /Open focused relationship map/ });
    expect(focusedLink.getAttribute("href")).toMatch(/^\/relationships\/#focus=assignee:/);
  });

  it("navigates patent-party details in place and focuses the replacement heading for keyboard activation", async () => {
    renderUniversalPage();
    fireEvent.click(await screen.findByRole("button", { name: "Select test patent" }));
    const party = within(screen.getByRole("article"))
      .getAllByRole("button")
      .find((button) => !button.getAttribute("aria-label")?.startsWith("Close"))!;
    const name = party.textContent!;
    fireEvent.click(party, { detail: 0 });
    const heading = screen.getByRole("heading", { level: 3, name });
    expect(document.activeElement).toBe(heading);
    expect(screen.getByRole("heading", { level: 1, name: "Universal Relationship Map" })).toBeDefined();
    const patent = within(screen.getByRole("region", { name: "Related patents" })).getAllByRole("button")[0];
    const number = patent.textContent!;
    fireEvent.click(patent, { detail: 0 });
    expect(screen.getByRole("button", { name: "Close patent details" })).toBeDefined();
    expect(document.activeElement?.tagName).toBe("H3");
    expect(document.activeElement?.textContent).toContain(number);
  });

  it("shows dated sourced corporate records for a family hub", async () => {
    renderUniversalPage();
    fireEvent.click(await screen.findByRole("button", { name: "Select test family" }));
    await waitFor(() => expect(screen.getAllByRole("link", { name: "Source ↗" }).length).toBeGreaterThan(0));
    expect(document.body.textContent).toMatch(/\d{4}/);
  });
});
