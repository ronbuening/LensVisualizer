// @vitest-environment jsdom

/**
 * Failure-isolation coverage for /relationships: a render throw inside the
 * RelationshipMap must stay inside PanelErrorBoundary so the picker remains
 * usable for recovery. Lives apart from relationshipMapPage.test.tsx because
 * the map module is mocked to throw for the whole file.
 */

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, screen, waitFor } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { Route, Routes } from "react-router";
import RelationshipMapPage from "../../../src/pages/RelationshipMapPage.js";
import { AUTHORS } from "../../../src/utils/catalog/authorCatalog.js";
import { buildRelationshipGraph } from "../../../src/utils/catalog/relationshipGraph.js";
import { clearBrowserState, installMatchMediaMock, renderWithRouter } from "../../testUtils.js";

vi.mock("../../../src/components/SEOHead.js", () => ({
  default: function SEOHead() {
    return null;
  },
}));

vi.mock("../../../src/components/relationshipMap/RelationshipMap.js", () => ({
  default: function ThrowingRelationshipMap(): never {
    throw new Error("map-render-explosion");
  },
}));

const preventExpectedWindowError = (event: ErrorEvent) => event.preventDefault();

function connectedAuthorSlug(): string {
  for (const author of AUTHORS) {
    const graph = buildRelationshipGraph({ role: "author", name: author.name, slug: author.slug });
    if (graph.parties.length > 0) return author.slug;
  }
  throw new Error("No connected author in the catalog.");
}

describe("RelationshipMapPage map-failure isolation", () => {
  let errorSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    clearBrowserState();
    installMatchMediaMock(false);
    errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    window.addEventListener("error", preventExpectedWindowError);
  });

  afterEach(() => {
    cleanup();
    window.removeEventListener("error", preventExpectedWindowError);
    errorSpy.mockRestore();
  });

  it("keeps the entity picker usable when the map render throws", async () => {
    renderWithRouter(
      <HelmetProvider>
        <Routes>
          <Route path="/relationships" element={<RelationshipMapPage />} />
        </Routes>
      </HelmetProvider>,
      { initialEntries: [`/relationships#focus=author:${connectedAuthorSlug()}`] },
    );

    await waitFor(() => {
      expect(screen.getAllByText(/map-render-explosion/).length).toBeGreaterThanOrEqual(1);
    });

    // The panel boundary, not the route boundary, caught the throw: the rest
    // of the page — heading and recovery picker — is still rendered.
    expect(screen.getByRole("heading", { level: 1 })).toBeTruthy();
    expect(screen.getByRole("searchbox")).toBeTruthy();
  });
});
