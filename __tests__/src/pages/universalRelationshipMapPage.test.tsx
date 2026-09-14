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
  }: {
    graph: UniversalRelationshipGraph;
    onSelectNode: (nodeId: string) => void;
    selectedNodeId: string | null;
    focusRequest?: { nodeId: string; requestId: number };
    viewResetRequest?: number;
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

  it.each(["author", "assignee", "patent", "organization", "family"] as const)(
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
