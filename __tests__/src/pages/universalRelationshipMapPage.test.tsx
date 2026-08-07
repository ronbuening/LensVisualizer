// @vitest-environment jsdom

/**
 * Page-level coverage for the catalog-wide universal relationship map.
 */

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, screen, waitFor } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { Route, Routes } from "react-router";
import type { UniversalRelationshipGraph } from "../../../src/utils/catalog/universalRelationshipGraph.js";
import UniversalRelationshipMapPage from "../../../src/pages/UniversalRelationshipMapPage.js";
import { clearBrowserState, installMatchMediaMock, renderWithRouter } from "../../testUtils.js";

vi.mock("../../../src/components/SEOHead.js", () => ({
  default: function SEOHead() {
    return null;
  },
}));

vi.mock("../../../src/components/relationshipMap/UniversalRelationshipMap.js", () => ({
  default: function UniversalRelationshipMapMock({
    graph,
    onSelectNode,
  }: {
    graph: UniversalRelationshipGraph;
    onSelectNode: (nodeId: string) => void;
  }) {
    const patent = graph.nodes.find((node) => node.kind === "patent")!;
    const assignee = graph.nodes.find((node) => node.kind === "assignee")!;
    const family = graph.nodes.find((node) => node.kind === "family")!;
    return (
      <div role="group" aria-label="Universal relationship map test double">
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

function renderPage() {
  return renderWithRouter(
    <HelmetProvider>
      <Routes>
        <Route path="/relationships/universal" element={<UniversalRelationshipMapPage />} />
      </Routes>
    </HelmetProvider>,
    { initialEntries: ["/relationships/universal"] },
  );
}

describe("UniversalRelationshipMapPage", () => {
  beforeEach(() => {
    clearBrowserState();
    installMatchMediaMock(false);
  });

  afterEach(cleanup);

  it("renders catalog totals and the client map", async () => {
    renderPage();
    expect(screen.getByRole("heading", { level: 1, name: "Universal Relationship Map" })).toBeDefined();
    expect(screen.getByText("corporate links")).toBeDefined();
    expect(screen.getByText("connected networks")).toBeDefined();
    expect(await screen.findByRole("group", { name: "Universal relationship map test double" })).toBeDefined();
  });

  it("links its breadcrumb back to the ordinary relationship index", () => {
    renderPage();
    expect(screen.getByRole("link", { name: "Relationship map" }).getAttribute("href")).toBe("/relationships/");
  });

  it("opens shared patent details without requiring a center party", async () => {
    renderPage();
    fireEvent.click(await screen.findByRole("button", { name: "Select test patent" }));
    expect(screen.getByRole("button", { name: "Close patent details" })).toBeDefined();
    expect(document.querySelector('a[href^="/lens/"]')).not.toBeNull();
  });

  it("opens entity details with a focused-map handoff for assignees", async () => {
    renderPage();
    fireEvent.click(await screen.findByRole("button", { name: "Select test assignee" }));
    const focusedLink = screen.getByRole("link", { name: /Open focused relationship map/ });
    expect(focusedLink.getAttribute("href")).toMatch(/^\/relationships\/#focus=assignee:/);
  });

  it("shows dated sourced corporate records for a family hub", async () => {
    renderPage();
    fireEvent.click(await screen.findByRole("button", { name: "Select test family" }));
    await waitFor(() => expect(screen.getAllByRole("link", { name: "Source ↗" }).length).toBeGreaterThan(0));
    expect(document.body.textContent).toMatch(/\d{4}/);
  });
});
