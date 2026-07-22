// @vitest-environment jsdom

/**
 * Page-level coverage for /relationships: intro/picker prerender state, focused
 * map rendering, silent fallback, recentering URL updates, and patent focus.
 */

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, screen, waitFor } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import type { ReactElement } from "react";
import { Route, Routes, useLocation } from "react-router";
import RelationshipMapPage from "../../../src/pages/RelationshipMapPage.js";
import { AUTHORS } from "../../../src/utils/catalog/authorCatalog.js";
import { buildRelationshipGraph } from "../../../src/utils/catalog/relationshipGraph.js";
import { clearBrowserState, installMatchMediaMock, renderWithRouter } from "../../testUtils.js";

vi.mock("../../../src/components/SEOHead.js", () => ({
  default: function SEOHead() {
    return null;
  },
}));

function LocationEcho() {
  const location = useLocation();
  return <div data-testid="location-echo">{`${location.pathname}${location.search}`}</div>;
}

function renderRoutes(initialEntry: string, routes: ReactElement) {
  return renderWithRouter(<HelmetProvider>{routes}</HelmetProvider>, { initialEntries: [initialEntry] });
}

const PAGE_ROUTE = (
  <Routes>
    <Route
      path="/relationships"
      element={
        <>
          <RelationshipMapPage />
          <LocationEcho />
        </>
      }
    />
  </Routes>
);

/** First author with ≥ 1 outer party, so recentering is meaningful. */
function connectedAuthorSlug(): string {
  for (const author of AUTHORS) {
    const graph = buildRelationshipGraph({ role: "author", name: author.name, slug: author.slug });
    if (graph.parties.length > 0) return author.slug;
  }
  throw new Error("No connected author in the catalog.");
}

describe("RelationshipMapPage", () => {
  beforeEach(() => {
    clearBrowserState();
    installMatchMediaMock(false);
  });

  afterEach(() => {
    cleanup();
  });

  it("renders the intro, picker, and most-connected columns with no focus", async () => {
    renderRoutes("/relationships", PAGE_ROUTE);
    expect(screen.getByRole("heading", { level: 1, name: /Patent Relationship Map/ })).toBeDefined();
    expect(screen.getByRole("searchbox")).toBeDefined();
    expect(screen.getByRole("heading", { name: /Most-connected inventors/ })).toBeDefined();
    expect(screen.getByRole("heading", { name: /Most-connected assignees/ })).toBeDefined();
  });

  it("renders the map for a valid author focus", async () => {
    const slug = connectedAuthorSlug();
    const author = AUTHORS.find((a) => a.slug === slug)!;
    renderRoutes(`/relationships?focus=author:${slug}`, PAGE_ROUTE);
    await waitFor(() => {
      const map = screen.getByRole("img");
      expect(map.getAttribute("aria-label")).toContain(author.name);
    });
  });

  it("falls back to the intro for a garbage focus", async () => {
    renderRoutes("/relationships?focus=nonsense", PAGE_ROUTE);
    await waitFor(() => {
      expect(screen.getByRole("heading", { level: 1, name: /Patent Relationship Map/ })).toBeDefined();
    });
    expect(screen.queryByRole("img")).toBeNull();
  });

  it("updates the URL query when a party node is clicked", async () => {
    const slug = connectedAuthorSlug();
    renderRoutes(`/relationships?focus=author:${slug}`, PAGE_ROUTE);
    const partyButtons = await screen.findAllByRole("button", { name: /Recenter map on/ });
    fireEvent.click(partyButtons[0]);
    await waitFor(() => {
      expect(screen.getByTestId("location-echo").textContent).toMatch(/focus=(author|assignee)%3A/);
    });
  });

  it("links the breadcrumb back to the relationships home when focused", async () => {
    const slug = connectedAuthorSlug();
    renderRoutes(`/relationships?focus=author:${slug}`, PAGE_ROUTE);
    const crumb = await screen.findByRole("link", { name: "Relationship map" });
    expect(crumb.getAttribute("href")).toBe("/relationships");
    fireEvent.click(crumb);
    await waitFor(() => {
      expect(screen.getByRole("heading", { level: 1, name: /Patent Relationship Map/ })).toBeDefined();
    });
    expect(screen.queryByRole("img")).toBeNull();
  });

  it("renders the breadcrumb as plain text with no focus", () => {
    renderRoutes("/relationships", PAGE_ROUTE);
    expect(screen.queryByRole("link", { name: "Relationship map" })).toBeNull();
  });

  it("centers a clicked patent and shows its credited parties and diagrams", async () => {
    const slug = connectedAuthorSlug();
    renderRoutes(`/relationships?focus=author:${slug}`, PAGE_ROUTE);
    const patentButtons = await screen.findAllByRole("button", { name: /Center map on patent/ });
    fireEvent.click(patentButtons[0]);
    await waitFor(() => {
      expect(screen.getByTestId("location-echo").textContent).toMatch(/focus=patent%3A/);
      expect(screen.getByRole("img").getAttribute("aria-label")).toContain("centered on patent");
    });
    expect(screen.getAllByRole("button", { name: /Recenter map on/ }).length).toBeGreaterThan(0);
    const lensLink = document.querySelector('a[href^="/lens/"]');
    expect(lensLink).not.toBeNull();
  });
});
