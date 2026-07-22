// @vitest-environment jsdom

/**
 * Page coverage for the patent index's links, attribution, and sorting.
 */

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import PatentsIndexPage from "../../../src/pages/PatentsIndexPage.js";
import { PATENTS } from "../../../src/utils/catalog/patentCatalog.js";
import { clearBrowserState, installMatchMediaMock, renderWithRouter } from "../../testUtils.js";

vi.mock("../../../src/components/SEOHead.js", () => ({
  default: function SEOHead() {
    return null;
  },
}));

describe("PatentsIndexPage", () => {
  beforeEach(() => {
    clearBrowserState();
    installMatchMediaMock(false);
  });

  afterEach(cleanup);

  it("lists patents with relationship-map, party, and diagram links", () => {
    const { container } = renderWithRouter(
      <HelmetProvider>
        <PatentsIndexPage />
      </HelmetProvider>,
      { initialEntries: ["/patents"] },
    );

    expect(screen.getByRole("heading", { level: 1, name: "Lens Patent Index" })).toBeDefined();
    expect(container.querySelectorAll("article").length).toBe(PATENTS.length);
    expect(container.querySelector('a[href^="/relationships?focus=patent%3A"]')).not.toBeNull();
    expect(container.querySelector('a[href^="/lens/"]')).not.toBeNull();
    expect(container.querySelector('a[href^="/authors/"]')).not.toBeNull();
    expect(container.querySelector('a[href^="/relationships?focus=assignee%3A"]')).not.toBeNull();
  });

  it("sorts newest patents first", () => {
    const { container } = renderWithRouter(
      <HelmetProvider>
        <PatentsIndexPage />
      </HelmetProvider>,
      { initialEntries: ["/patents"] },
    );
    const newest = [...PATENTS].sort(
      (left, right) =>
        (right.patentYear ?? Number.NEGATIVE_INFINITY) - (left.patentYear ?? Number.NEGATIVE_INFINITY) ||
        left.patentNumber.localeCompare(right.patentNumber),
    )[0];

    fireEvent.click(screen.getByRole("button", { name: "Newest first" }));
    expect(container.querySelector("article h2")?.textContent).toContain(newest.patentNumber);
  });
});
