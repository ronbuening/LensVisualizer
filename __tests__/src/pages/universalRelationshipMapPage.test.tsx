// @vitest-environment jsdom

/**
 * Page-level coverage for the catalog-wide universal relationship map.
 */

import { afterEach, beforeEach, describe, expect, it, vi, type MockInstance } from "vitest";
import { act, cleanup, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import type { ReactNode } from "react";
import { Route, Routes, RouterProvider, createMemoryRouter, useLocation, useNavigate } from "react-router";
import { buildUniversalRelationshipGraph } from "../../../src/utils/catalog/universalRelationshipGraph.js";
import { universalMapHash } from "../../../src/utils/state/universalMapUrl.js";
import { SUMMARY_KEYS } from "../../../src/utils/catalog/lensSummaries.js";
import { layoutUniversalRelationshipGraph } from "../../../src/components/relationshipMap/universalLayout.js";
import {
  buildUniversalNeighborhoods,
  filterUniversalNeighborhoods,
} from "../../../src/components/relationshipMap/universalNeighborhoods.js";
import type { UniversalRelationshipGraph } from "../../../src/utils/catalog/universalRelationshipGraph.js";
import UniversalRelationshipMapPage from "../../../src/pages/UniversalRelationshipMapPage.js";
import { clearBrowserState, installMatchMediaMock, renderPage } from "../../testUtils.js";

vi.mock("../../../src/components/SEOHead.js", () => ({
  default: function SEOHead() {
    return null;
  },
}));

vi.mock("../../../src/components/relationshipMap/UniversalRelationshipMap.js", () => ({
  default: function UniversalRelationshipMapMock({
    graph,
    onSelectNode,
    selectedNodeId,
    focusRequest,
    viewResetRequest,
    belowMap,
    fullScreenBottomInset,
  }: {
    graph: UniversalRelationshipGraph;
    onSelectNode: (nodeId: string) => void;
    selectedNodeId: string | null;
    focusRequest?: { nodeId: string; requestId: number };
    viewResetRequest?: number;
    belowMap?: ReactNode;
    fullScreenBottomInset?: string;
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
        data-bottom-inset={fullScreenBottomInset}
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
        {belowMap}
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
    { initialEntries: [initialEntry] },
  );
}

describe("UniversalRelationshipMapPage", () => {
  beforeEach(() => {
    clearBrowserState();
    installMatchMediaMock(false);
  });

  afterEach(cleanup);

  it("keeps the original network mounted and preserves its camera intent when switching views", async () => {
    renderUniversalPage();
    const map = await screen.findByRole("group", { name: "Universal relationship map test double" });
    fireEvent.click(screen.getByRole("button", { name: "Select test assignee" }));
    const selected = map.getAttribute("data-selected");
    const focus = map.getAttribute("data-request");
    const reset = map.getAttribute("data-reset");
    fireEvent.click(screen.getByRole("button", { name: "Trace connections" }));
    expect(screen.queryByRole("group", { name: "Universal relationship map test double" })).toBeNull();
    expect(screen.getByRole("combobox", { name: "Start entity" })).toBeDefined();
    fireEvent.click(screen.getByRole("button", { name: "Network" }));
    expect(screen.getByRole("group", { name: "Universal relationship map test double" })).toBe(map);
    expect(map.getAttribute("data-selected")).toBe(selected);
    expect(map.getAttribute("data-request")).toBe(focus);
    expect(map.getAttribute("data-reset")).toBe(reset);
  });

  it("restores a shared trace, preserves unrelated URL state, and navigates views with Back", async () => {
    const graph = buildUniversalRelationshipGraph();
    const edge = graph.edges.find((entry) => entry.kind === "authorship")!;
    const params = new URLSearchParams({ extra: "ok", view: "trace", from: edge.from, to: edge.to });
    renderUniversalPage(`/relationships/universal?keep=yes#${params}`);
    expect(await screen.findByRole("group", { name: "Connection path" })).toBeDefined();
    expect(screen.queryByText("Select test patent")).toBeNull();
    fireEvent.click(screen.getByRole("button", { name: "Network" }));
    const map = screen.getByRole("group", { name: "Universal relationship map test double" });
    fireEvent.click(screen.getByRole("button", { name: "Trace connections" }));
    expect(map.isConnected).toBe(true);
    expect(screen.getByText("1 step · 1 shortest path.")).toBeDefined();
    fireEvent.click(screen.getByRole("button", { name: "Swap entities" }));
    const location = screen.getByRole("status", { name: "Current location" }).textContent!;
    expect(location).toContain("?keep=yes#extra=ok");
    expect(new URLSearchParams(location.split("#")[1]).get("from")).toBe(edge.to);
    fireEvent.click(screen.getByRole("button", { name: "Inventor affiliations" }));
    expect(await screen.findByRole("group", { name: "Inventor affiliation map" })).toBeDefined();
    fireEvent.click(screen.getByRole("button", { name: "Back" }));
    expect(await screen.findByRole("group", { name: "Connection path" })).toBeDefined();
    fireEvent.click(screen.getByRole("button", { name: "Clear trace" }));
    expect(screen.queryByRole("group", { name: "Connection path" })).toBeNull();
    expect(screen.getByText("Select a start and end entity to find a connection.")).toBeDefined();
  });

  it("keeps selection consistent when Back interrupts a pending data-router navigation", async () => {
    const router = createMemoryRouter([{ path: "/relationships/universal", Component: UniversalRelationshipMapPage }], {
      initialEntries: ["/relationships/universal"],
    });
    render(<RouterProvider router={router} />);
    const button = await screen.findByRole("button", { name: "Select test assignee" });
    await act(async () => {
      fireEvent.click(button);
      await router.navigate(-1);
    });
    expect(router.state.location.hash).toBe("");
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
      { initialEntries: ["/relationships/universal"] },
    );
    render(<RouterProvider router={router} />);
    fireEvent.click(await screen.findByRole("button", { name: "Select test assignee" }));
    await waitFor(() =>
      expect(screen.getByRole("status", { name: "Current location" }).textContent).toContain("#node=assignee"),
    );
    fireEvent.click(screen.getByRole("button", { name: "Select test patent" }));
    await waitFor(() =>
      expect(screen.getByRole("status", { name: "Current location" }).textContent).toContain("#node=patent"),
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
    expect(screen.getByRole("status", { name: "Current location" }).textContent).toContain("#node=assignee");
    fireEvent.click(screen.getByRole("button", { name: "Select test patent" }));
    fireEvent.click(screen.getByRole("button", { name: "Back" }));
    await waitFor(() => expect(map.getAttribute("data-focus")).toBe(assigneeId));
    fireEvent.click(screen.getByRole("button", { name: "Forward" }));
    await waitFor(() => expect(map.getAttribute("data-focus")).toMatch(/^patent:/));
    const reset = map.getAttribute("data-reset");
    fireEvent.click(screen.getByRole("button", { name: "Close patent details" }));
    expect(map.getAttribute("data-selected")).toBeNull();
    expect(map.getAttribute("data-reset")).toBe(reset);
    expect(screen.getByRole("status", { name: "Current location" }).textContent).not.toContain("#node=");
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
      "/relationships/universal?keep=yes#extra=ok",
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
    expect(screen.getByText("corporate links")).toBeDefined();
    expect(screen.getByText("connected networks")).toBeDefined();
    expect(await screen.findByRole("group", { name: "Universal relationship map test double" })).toBeDefined();
  });

  it("counts the visible catalog lenses beside the graph totals", () => {
    renderUniversalPage();
    const card = screen.getByText("catalog lenses").parentElement!;
    expect(card.querySelector("strong")?.textContent).toBe(String(SUMMARY_KEYS.length));
  });

  it("hands a neighborhood card's hub to the network view, selected and framed", async () => {
    const graph = buildUniversalRelationshipGraph();
    const [largest] = filterUniversalNeighborhoods(
      buildUniversalNeighborhoods(graph, layoutUniversalRelationshipGraph(graph)).neighborhoods,
      "",
    );
    renderUniversalPage("/relationships/universal?keep=yes#extra=ok");
    fireEvent.click(await screen.findByRole("button", { name: "Neighborhoods" }));
    expect(screen.getByRole("status", { name: "Current location" }).textContent).toContain("view=neighborhoods");
    const list = screen.getByRole("list", { name: "Hub neighborhoods" });
    fireEvent.click(within(list).getByRole("button", { name: `Show ${largest.anchorLabel} in the network` }));
    const map = await screen.findByRole("group", { name: "Universal relationship map test double" });
    expect(map.getAttribute("data-selected")).toBe(largest.anchorId);
    expect(map.getAttribute("data-focus")).toBe(largest.anchorId);
    expect(screen.queryByRole("list", { name: "Hub neighborhoods" })).toBeNull();
    const params = new URLSearchParams(
      screen.getByRole("status", { name: "Current location" }).textContent!.split("#")[1],
    );
    expect(params.get("view")).toBeNull();
    expect(params.get("node")).toBe(largest.anchorId);
    expect(params.get("extra")).toBe("ok");
    fireEvent.click(screen.getByRole("button", { name: "Back" }));
    expect(await screen.findByRole("list", { name: "Hub neighborhoods" })).toBeDefined();
  });

  it("links its breadcrumb back to the ordinary relationship index", () => {
    renderUniversalPage();
    expect(screen.getByRole("link", { name: "Relationship map" }).getAttribute("href")).toBe("/relationships/");
  });

  it("shows details under the network map and after the other views on wider screens", async () => {
    renderUniversalPage();
    const map = await screen.findByRole("group", { name: "Universal relationship map test double" });
    fireEvent.click(within(map).getByRole("button", { name: "Select test assignee" }));
    expect(within(map).getByRole("button", { name: "Close entity details" })).toBeDefined();
    expect(screen.queryByRole("button", { name: "Close details" })).toBeNull();
    fireEvent.click(screen.getByRole("button", { name: "Trace connections" }));
    expect(screen.getByRole("button", { name: "Close entity details" })).toBeDefined();
    expect(screen.queryByRole("button", { name: "Details" })).toBeNull();
    expect(screen.queryByRole("button", { name: "How to use the map" })).toBeNull();
    expect(screen.queryByRole("button", { name: "More" })).toBeNull();
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

describe("UniversalRelationshipMapPage on a phone", () => {
  let width: MockInstance;

  function currentHash() {
    return screen.getByRole("status", { name: "Current location" }).textContent!.split("#")[1] ?? "";
  }

  beforeEach(() => {
    clearBrowserState();
    installMatchMediaMock(false);
    width = vi.spyOn(HTMLElement.prototype, "clientWidth", "get").mockReturnValue(390);
  });

  afterEach(() => {
    cleanup();
    width.mockRestore();
  });

  it("opens Neighborhoods for a bare visit without writing the default into the URL", async () => {
    renderUniversalPage("/relationships/universal?keep=yes");
    expect(await screen.findByRole("list", { name: "Hub neighborhoods" })).toBeDefined();
    expect(screen.queryByRole("group", { name: "Universal relationship map test double" })).toBeNull();
    const select = screen.getByRole("combobox", { name: "View" }) as HTMLSelectElement;
    expect(select.value).toBe("neighborhoods");
    expect(screen.getByRole("status", { name: "Current location" }).textContent).toBe(
      "/relationships/universal?keep=yes",
    );
    // The network must stay explicit once chosen: a bare fragment means Neighborhoods on this visit.
    fireEvent.change(select, { target: { value: "network" } });
    expect(await screen.findByRole("group", { name: "Universal relationship map test double" })).toBeDefined();
    expect(new URLSearchParams(currentHash()).get("view")).toBe("network");
    fireEvent.click(screen.getByRole("button", { name: "Back" }));
    expect(await screen.findByRole("list", { name: "Hub neighborhoods" })).toBeDefined();
  });

  it("retains the expanded Neighborhoods list when switching views", async () => {
    renderUniversalPage();
    fireEvent.click(await screen.findByRole("button", { name: /^Show all \d+ neighborhoods$/ }));
    const count = within(screen.getByRole("list", { name: "Hub neighborhoods" })).getAllByRole("button").length;
    const select = screen.getByRole("combobox", { name: "View" });
    fireEvent.change(select, { target: { value: "network" } });
    expect(screen.queryByRole("list", { name: "Hub neighborhoods" })).toBeNull();
    fireEvent.change(select, { target: { value: "neighborhoods" } });
    expect(screen.getByRole("button", { name: "Show fewer" })).toBeDefined();
    expect(within(screen.getByRole("list", { name: "Hub neighborhoods" })).getAllByRole("button")).toHaveLength(count);
  });

  it.each([
    ["an explicit network view", () => "#view=network"],
    ["a shared node", () => universalMapHash("", buildUniversalRelationshipGraph().nodes[0].id)],
  ])("opens the network for %s", async (_label, hash) => {
    renderUniversalPage(`/relationships/universal${hash()}`);
    expect(await screen.findByRole("group", { name: "Universal relationship map test double" })).toBeDefined();
    expect((screen.getByRole("combobox", { name: "View" }) as HTMLSelectElement).value).toBe("network");
    expect(screen.queryByRole("list", { name: "Hub neighborhoods" })).toBeNull();
  });

  it("keeps the network open after its shared selection is closed", async () => {
    const node = buildUniversalRelationshipGraph().nodes.find((entry) => entry.kind === "assignee")!;
    renderUniversalPage(`/relationships/universal${universalMapHash("", node.id)}`);
    fireEvent.click(await screen.findByRole("button", { name: "Close details" }));
    expect(currentHash()).toBe("");
    expect(screen.getByRole("group", { name: "Universal relationship map test double" })).toBeDefined();
  });

  it("picks views from one native select instead of the button grid", async () => {
    renderUniversalPage("/relationships/universal#view=network");
    const select = (await screen.findByRole("combobox", { name: "View" })) as HTMLSelectElement;
    expect(screen.queryByRole("button", { name: "Trace connections" })).toBeNull();
    expect(screen.queryByRole("group", { name: "Relationship map views" })).toBeNull();
    expect([...select.options].map((option) => option.textContent)).toContain("Evidence lanes");
    fireEvent.change(select, { target: { value: "trace" } });
    expect(await screen.findByRole("combobox", { name: "Start entity" })).toBeDefined();
    expect(new URLSearchParams(currentHash()).get("view")).toBe("trace");
  });

  it("clamps the intro to two lines until More is pressed", () => {
    renderUniversalPage();
    const more = screen.getByRole("button", { name: "More" });
    const intro = document.getElementById(more.getAttribute("aria-controls")!)!;
    expect(more.getAttribute("aria-expanded")).toBe("false");
    expect(intro.style.webkitLineClamp).toBe("2");
    fireEvent.click(more);
    expect(more.textContent).toBe("Less");
    expect(more.getAttribute("aria-expanded")).toBe("true");
    expect(intro.style.webkitLineClamp).toBe("");
  });

  it("folds the network note behind a how-to toggle", async () => {
    renderUniversalPage("/relationships/universal#view=network");
    const toggle = await screen.findByRole("button", { name: "How to use the map" });
    const note = document.getElementById(toggle.getAttribute("aria-controls")!)!;
    expect(note.textContent).toMatch(/^Soft halos group/);
    expect(note.hidden).toBe(true);
    fireEvent.click(toggle);
    expect(toggle.getAttribute("aria-expanded")).toBe("true");
    expect(note.hidden).toBe(false);
  });

  it("shows a selection in a bottom sheet that expands, collapses with Escape, and closes", async () => {
    renderUniversalPage("/relationships/universal#view=network");
    const map = await screen.findByRole("group", { name: "Universal relationship map test double" });
    fireEvent.click(within(map).getByRole("button", { name: "Select test assignee" }));
    const assignee = buildUniversalRelationshipGraph().nodes.find(
      (node) => node.id === map.getAttribute("data-selected"),
    )!;
    const sheet = screen.getByRole("region", { name: assignee.name });
    expect(within(map).queryByRole("article")).toBeNull();
    // Full screen ends above the collapsed sheet.
    expect(map.getAttribute("data-bottom-inset")).toMatch(/^calc\(62px/);
    expect(within(sheet).getByText(/^Assignee · \d+ patents?$/)).toBeDefined();
    expect(within(sheet).queryByRole("link", { name: /Open focused relationship map/ })).toBeNull();

    const details = within(sheet).getByRole("button", { name: "Details" });
    expect(details.getAttribute("aria-expanded")).toBe("false");
    fireEvent.click(details);
    const dialog = screen.getByRole("dialog", { name: assignee.name });
    expect(dialog.getAttribute("aria-modal")).toBeNull();
    expect(dialog).toBe(sheet);
    expect(details.getAttribute("aria-expanded")).toBe("true");
    const link = within(dialog).getByRole("link", { name: /Open focused relationship map/ });

    fireEvent.keyDown(link, { key: "Escape" });
    expect(screen.queryByRole("dialog")).toBeNull();
    expect(screen.getByRole("region", { name: assignee.name })).toBe(sheet);
    expect(document.activeElement).toBe(details);
    expect(currentHash()).toContain("node=");

    fireEvent.keyDown(details, { key: "Escape" });
    expect(screen.queryByRole("region", { name: assignee.name })).toBeNull();
    expect(new URLSearchParams(currentHash()).get("node")).toBeNull();
    expect(map.getAttribute("data-selected")).toBeNull();
    expect(map.getAttribute("data-bottom-inset")).toBeNull();

    fireEvent.click(within(map).getByRole("button", { name: "Select test patent" }));
    fireEvent.click(screen.getByRole("button", { name: "Close details" }));
    expect(map.getAttribute("data-selected")).toBeNull();
    expect(new URLSearchParams(currentHash()).get("view")).toBe("network");
  });

  it("uses the sheet for selections made in the other views", async () => {
    renderUniversalPage("/relationships/universal#view=trace");
    const input = await screen.findByRole("combobox", { name: "Search the map" });
    expect(input.getAttribute("placeholder")).toBe("Search names, lenses, patents");
    fireEvent.change(input, { target: { value: "Nikon Corporation" } });
    fireEvent.keyDown(input, { key: "Enter" });
    const sheet = screen.getByRole("region", { name: "Nikon Corporation" });
    fireEvent.click(within(sheet).getByRole("button", { name: "Details" }));
    expect(within(sheet).getByRole("heading", { level: 3, name: "Nikon Corporation" })).toBeDefined();
    expect(new URLSearchParams(currentHash()).get("view")).toBe("trace");
  });
});
