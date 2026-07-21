// @vitest-environment jsdom

/**
 * Route-level interaction coverage for search and author pages.
 */

import { cleanup, fireEvent, screen, waitFor } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Route, Routes, useLocation } from "react-router";
import SearchPage from "../../../src/pages/SearchPage.js";
import AuthorPage from "../../../src/pages/AuthorPage.js";
import AuthorsIndexPage from "../../../src/pages/AuthorsIndexPage.js";
import CatalogSearchBox from "../../../src/components/search/CatalogSearchBox.js";
import { AUTHORS, patentsForAuthor } from "../../../src/utils/catalog/authorCatalog.js";
import themes from "../../../src/utils/theme/themes.js";
import { clearBrowserState, installMatchMediaMock, renderWithRouter } from "../../testUtils.js";

vi.mock("../../../src/components/SEOHead.js", () => ({
  default: function SEOHead() {
    return null;
  },
}));

function LocationEcho() {
  const location = useLocation();
  return <div>{`${location.pathname}${location.search}`}</div>;
}

describe("search and author pages", () => {
  beforeEach(() => {
    clearBrowserState();
    installMatchMediaMock(false);
  });

  afterEach(() => cleanup());

  it("renders patent results from a punctuation-free URL query", () => {
    renderWithRouter(
      <HelmetProvider>
        <Routes>
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </HelmetProvider>,
      { initialEntries: ["/search?q=us2819651"] },
    );

    expect(screen.getByRole("heading", { name: "Search the Catalog" })).toBeTruthy();
    expect(screen.getByRole("heading", { name: /Patent numbers/ })).toBeTruthy();
    expect(screen.getByRole("link", { name: /US 2,819,651/ }).getAttribute("href")).toBe(
      "/lens/agfa-color-telinear-90mm-f4",
    );
  });

  it("opens an exact lens directly when the search form is submitted", async () => {
    renderWithRouter(
      <Routes>
        <Route path="/" element={<CatalogSearchBox theme={themes.dark} showSuggestions />} />
        <Route path="/lens/:slug" element={<LocationEcho />} />
      </Routes>,
    );

    fireEvent.change(screen.getByRole("searchbox"), { target: { value: "AGFA COLOR-TELINEAR 90mm f/4" } });
    expect(screen.getByRole("link", { name: /AGFA COLOR-TELINEAR 90mm f\/4/ }).getAttribute("href")).toBe(
      "/lens/agfa-color-telinear-90mm-f4",
    );
    fireEvent.submit(screen.getByRole("search"));

    await waitFor(() => expect(screen.getByText("/lens/agfa-color-telinear-90mm-f4")).toBeTruthy());
  });

  it("renders an author patent page and switches to co-author sections", () => {
    const author = AUTHORS.find((entry) =>
      patentsForAuthor(entry.name).some((patent) => patent.authors.some((name) => name !== entry.name)),
    );
    expect(author).toBeDefined();
    if (!author) return;

    const patent = patentsForAuthor(author.name)[0];
    renderWithRouter(
      <HelmetProvider>
        <Routes>
          <Route path="/authors/:author" element={<AuthorPage />} />
        </Routes>
      </HelmetProvider>,
      { initialEntries: [`/authors/${author.slug}`] },
    );

    expect(screen.getByRole("heading", { level: 1, name: author.name })).toBeTruthy();
    expect(screen.getAllByText(patent.patentNumber).length).toBeGreaterThan(0);
    expect(screen.getByRole("navigation", { name: "Assignee sections" })).toBeTruthy();

    fireEvent.click(screen.getByRole("button", { name: "Co-authors" }));
    expect(screen.getByRole("button", { name: "Co-authors" }).getAttribute("aria-pressed")).toBe("true");
    expect(screen.getByRole("navigation", { name: "Co-author sections" })).toBeTruthy();
  });

  it("renders an author index and sorts it by name or patent count", () => {
    const alphabeticalAuthors = [...AUTHORS].sort((left, right) => left.name.localeCompare(right.name));
    const authorsByPatentCount = [...AUTHORS].sort(
      (left, right) => right.patentCount - left.patentCount || left.name.localeCompare(right.name),
    );

    renderWithRouter(
      <HelmetProvider>
        <Routes>
          <Route path="/authors" element={<AuthorsIndexPage />} />
        </Routes>
      </HelmetProvider>,
      { initialEntries: ["/authors"] },
    );

    expect(screen.getByRole("heading", { level: 1, name: "Lens Patent Authors" })).toBeTruthy();
    expect(screen.getByRole("link", { name: alphabeticalAuthors[0].name }).getAttribute("href")).toBe(
      `/authors/${alphabeticalAuthors[0].slug}`,
    );
    expect(document.querySelector("main a[href^='/authors/']")?.textContent).toBe(alphabeticalAuthors[0].name);

    fireEvent.click(screen.getByRole("button", { name: "Patent count" }));

    expect(screen.getByRole("button", { name: "Patent count" }).getAttribute("aria-pressed")).toBe("true");
    expect(document.querySelector("main a[href^='/authors/']")?.textContent).toBe(authorsByPatentCount[0].name);
  });
});
