// @vitest-environment jsdom

/**
 * Route-level interaction coverage for search, author, and patent pages.
 * Index-page coverage lives in authorsIndexPage.test.tsx,
 * authorsIndexAssigneeFilter.test.tsx, and patentsIndexPage.test.tsx,
 * split out for suite parallelism.
 */

import { cleanup, fireEvent, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Route, Routes, useLocation } from "react-router";
import SearchPage from "../../../src/pages/SearchPage.js";
import AuthorPage from "../../../src/pages/AuthorPage.js";
import CatalogSearchBox from "../../../src/components/search/CatalogSearchBox.js";
import { AUTHORS, getAuthorByName, patentsForAuthor } from "../../../src/utils/catalog/authorCatalog.js";
import { espacenetPatentUrl, isPatentPublicationNumber } from "../../../src/utils/catalog/patentCatalog.js";
import themes from "../../../src/utils/theme/themes.js";
import { clearBrowserState, installMatchMediaMock, renderPage, renderWithRouter } from "../../testUtils.js";
import * as searchCatalogModule from "../../../src/utils/catalog/searchCatalog.js";

vi.mock("../../../src/components/SEOHead.js", () => ({
  default: function SEOHead() {
    return null;
  },
}));

function LocationEcho() {
  const location = useLocation();
  return <div>{`${location.pathname}${location.search}`}</div>;
}

describe("search, author, and patent pages", () => {
  beforeEach(() => {
    clearBrowserState();
    installMatchMediaMock(false);
    Object.defineProperty(window, "scrollTo", { writable: true, value: vi.fn() });
  });

  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("renders patent results from a punctuation-free URL query", () => {
    renderPage(
      <Routes>
        <Route path="/search" element={<SearchPage />} />
      </Routes>,
      { initialEntries: ["/search?q=us2819651"] },
    );

    expect(screen.getByRole("heading", { name: "Search the Catalog" })).toBeTruthy();
    expect(screen.getByRole("heading", { name: /Patent numbers/ })).toBeTruthy();
    expect(screen.getByRole("link", { name: /US 2,819,651/ }).getAttribute("href")).toBe(
      "/lens/agfa-color-telinear-90mm-f4/",
    );
  });

  it("opens an exact lens directly when the search form is submitted", async () => {
    renderWithRouter(
      <Routes>
        <Route path="/" element={<CatalogSearchBox theme={themes.dark} showSuggestions />} />
        <Route path="/lens/:slug" element={<LocationEcho />} />
      </Routes>,
    );

    expect(screen.getByRole("searchbox").style.fontSize).toBe("16px");
    fireEvent.change(screen.getByRole("searchbox"), { target: { value: "AGFA COLOR-TELINEAR 90mm f/4" } });
    expect(screen.getByRole("link", { name: /AGFA COLOR-TELINEAR 90mm f\/4/ }).getAttribute("href")).toBe(
      "/lens/agfa-color-telinear-90mm-f4/",
    );
    fireEvent.submit(screen.getByRole("search"));

    await waitFor(() => expect(screen.getByText("/lens/agfa-color-telinear-90mm-f4/")).toBeTruthy());
  });

  it("dismisses catalog suggestions with Escape and an outside click", () => {
    renderWithRouter(<CatalogSearchBox theme={themes.dark} showSuggestions />);
    const searchbox = screen.getByRole("searchbox");

    fireEvent.change(searchbox, { target: { value: "AGFA COLOR" } });
    expect(screen.getByRole("list", { name: "Catalog suggestions" })).toBeDefined();
    /* aria-controls must reference the suggestions only while they exist */
    expect(searchbox.getAttribute("aria-controls")).toBe("catalog-search-suggestions");

    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.queryByRole("list", { name: "Catalog suggestions" })).toBeNull();
    expect(searchbox.getAttribute("aria-controls")).toBeNull();

    fireEvent.change(searchbox, { target: { value: "AGFA COLOR-TELINEAR" } });
    expect(screen.getByRole("list", { name: "Catalog suggestions" })).toBeDefined();
    fireEvent.mouseDown(document.body);
    expect(screen.queryByRole("list", { name: "Catalog suggestions" })).toBeNull();
    expect(searchbox.getAttribute("aria-controls")).toBeNull();
  });

  it("skips catalog suggestion scans when suggestions are disabled", () => {
    const searchSpy = vi.spyOn(searchCatalogModule, "searchCatalog");
    renderWithRouter(<CatalogSearchBox theme={themes.dark} query="nikon" />);

    expect(searchSpy).not.toHaveBeenCalled();
    expect(screen.queryByText("View all results →")).toBeNull();
  });

  it("renders an author patent page and switches to co-author sections", () => {
    const author = AUTHORS.find((entry) =>
      patentsForAuthor(entry.name).some(
        (patent) =>
          isPatentPublicationNumber(patent.patentNumber) && patent.authors.some((name) => name !== entry.name),
      ),
    );
    expect(author).toBeDefined();
    if (!author) return;

    const patent = patentsForAuthor(author.name).find(
      (entry) => isPatentPublicationNumber(entry.patentNumber) && entry.authors.some((name) => name !== author.name),
    )!;
    renderPage(
      <Routes>
        <Route path="/authors/:author" element={<AuthorPage />} />
      </Routes>,
      { initialEntries: [`/authors/${author.slug}`] },
    );

    expect(screen.getByRole("heading", { level: 1, name: author.name })).toBeTruthy();
    expect(screen.getAllByText(patent.patentNumber).length).toBeGreaterThan(0);
    const patentLinks = screen.getAllByRole("link", {
      name: `${patent.patentNumber} in Espacenet (opens in a new tab)`,
    });
    expect(patentLinks[0].getAttribute("href")).toBe(espacenetPatentUrl(patent.patentNumber));
    expect(patentLinks[0].getAttribute("target")).toBe("_blank");
    expect(screen.getByRole("navigation", { name: "Assignee sections" })).toBeTruthy();

    fireEvent.click(screen.getByRole("button", { name: "Co-authors" }));
    expect(screen.getByRole("button", { name: "Co-authors" }).getAttribute("aria-pressed")).toBe("true");
    expect(screen.getByRole("navigation", { name: "Co-author sections" })).toBeTruthy();
  });

  it("renders a sourced biography for a profiled author", () => {
    const author = getAuthorByName("Paul Rudolph");
    expect(author).toBeDefined();
    if (!author) return;

    renderPage(
      <Routes>
        <Route path="/authors/:author" element={<AuthorPage />} />
      </Routes>,
      { initialEntries: [`/authors/${author.slug}`] },
    );

    expect(screen.getByRole("heading", { level: 2, name: "Biography" })).toBeTruthy();
    expect(screen.getByText(/foundational designers of modern photographic objectives/)).toBeTruthy();
    expect(screen.getByRole("link", { name: "ZEISS — History of camera and cine lenses" }).getAttribute("href")).toBe(
      "https://www.zeiss.com/corporate/en/about-zeiss/past/history/technological-milestones/camera-and-cine-lenses.html",
    );
  });
});
