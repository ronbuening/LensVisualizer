// @vitest-environment jsdom

/**
 * PatentsIndexPage coverage, split out of the search/author/patent route
 * coverage (searchPages.test.tsx) for suite parallelism.
 */

import { cleanup, fireEvent, screen, within } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Route, Routes } from "react-router";
import PatentsIndexPage from "../../../src/pages/PatentsIndexPage.js";
import { PATENTS, PATENT_COUNTRY_GROUPS, espacenetPatentUrl } from "../../../src/utils/catalog/patentCatalog.js";
import { clearBrowserState, installMatchMediaMock, renderPage } from "../../testUtils.js";

vi.mock("../../../src/components/SEOHead.js", () => ({
  default: function SEOHead() {
    return null;
  },
}));

describe("patents index page", () => {
  beforeEach(() => {
    clearBrowserState();
    installMatchMediaMock(false);
    Object.defineProperty(window, "scrollTo", { writable: true, value: vi.fn() });
  });

  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("renders patents in Country → Assignee sections with lens links", () => {
    const country = PATENT_COUNTRY_GROUPS[0];
    const assignee = country.assignees[0];
    const patent = assignee.patents[0];

    renderPage(
      <Routes>
        <Route path="/patents" element={<PatentsIndexPage />} />
      </Routes>,
      { initialEntries: ["/patents"] },
    );

    expect(screen.getByRole("heading", { level: 1, name: "Lens Patents by Country and Assignee" })).toBeTruthy();
    const countryNav = screen.getByRole("navigation", { name: "Patent country sections" });
    const countryButton = within(countryNav).getByRole("button", {
      name: `${country.jurisdiction.label} (${country.patentCount})`,
    });
    expect(countryButton.getAttribute("aria-expanded")).toBe("false");
    expect(
      within(countryNav).queryByRole("link", {
        name: `${assignee.label} (${assignee.patents.length})`,
      }),
    ).toBeNull();

    fireEvent.click(countryButton);

    expect(countryButton.getAttribute("aria-expanded")).toBe("true");
    const assigneeLink = within(countryNav).getByRole("link", {
      name: `${assignee.label} (${assignee.patents.length})`,
    });
    const assigneeTarget = document.getElementById(assigneeLink.getAttribute("href")!.slice(1));
    expect(assigneeTarget).toBeTruthy();
    fireEvent.click(assigneeLink);
    expect(window.scrollTo).toHaveBeenCalledTimes(1);

    const countrySection = document.getElementById(`patent-country-${country.jurisdiction.code.toLowerCase()}`);
    expect(countrySection).toBeTruthy();
    if (!countrySection) return;
    expect(
      within(countrySection).getByRole("heading", { level: 2, name: new RegExp(country.jurisdiction.label) }),
    ).toBeTruthy();
    expect(within(countrySection).getByRole("heading", { level: 3, name: new RegExp(assignee.label) })).toBeTruthy();
    expect(screen.getAllByText(patent.patentNumber).length).toBeGreaterThan(0);
    const patentDatabaseLink = screen.getAllByRole("link", {
      name: `${patent.patentNumber} in Espacenet (opens in a new tab)`,
    })[0];
    expect(patentDatabaseLink.getAttribute("href")).toBe(espacenetPatentUrl(patent.patentNumber));
    expect(patentDatabaseLink.getAttribute("target")).toBe("_blank");
    expect(patentDatabaseLink.getAttribute("rel")).toBe("noopener noreferrer");
    expect(
      screen
        .getAllByRole("link", { name: new RegExp(patent.lenses[0].name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")) })
        .some((link) => link.getAttribute("href") === `/lens/${patent.lenses[0].key}/`),
    ).toBe(true);
    expect(PATENTS.length).toBeGreaterThan(PATENT_COUNTRY_GROUPS.length);
  });
});
