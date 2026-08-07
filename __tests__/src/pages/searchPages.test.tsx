// @vitest-environment jsdom

/**
 * Route-level interaction coverage for search, author, and patent pages.
 */

import { cleanup, fireEvent, screen, waitFor, within } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Route, Routes, useLocation } from "react-router";
import SearchPage from "../../../src/pages/SearchPage.js";
import AuthorPage from "../../../src/pages/AuthorPage.js";
import AuthorsIndexPage from "../../../src/pages/AuthorsIndexPage.js";
import PatentsIndexPage from "../../../src/pages/PatentsIndexPage.js";
import CatalogSearchBox from "../../../src/components/search/CatalogSearchBox.js";
import { getAuthorBiography } from "../../../src/utils/catalog/authorBiographies.js";
import {
  AUTHOR_ASSIGNEE_STRATA,
  AUTHOR_DIRECTORY_ENTRIES,
  filterAuthorsByAssignee,
} from "../../../src/utils/catalog/authorAssignees.js";
import { AUTHORS, getAuthorByName, patentsForAuthor } from "../../../src/utils/catalog/authorCatalog.js";
import {
  PATENTS,
  PATENT_COUNTRY_GROUPS,
  espacenetPatentUrl,
  isPatentPublicationNumber,
} from "../../../src/utils/catalog/patentCatalog.js";
import { AUTHOR_SORT_PREFERENCE_KEY } from "../../../src/utils/state/authorSortPreference.js";
import themes from "../../../src/utils/theme/themes.js";
import { clearBrowserState, installMatchMediaMock, renderWithRouter } from "../../testUtils.js";
import { catalogCollator } from "../../../src/utils/catalog/collation.js";
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

    renderWithRouter(
      <HelmetProvider>
        <Routes>
          <Route path="/authors/:author" element={<AuthorPage />} />
        </Routes>
      </HelmetProvider>,
      { initialEntries: [`/authors/${author.slug}`] },
    );

    expect(screen.getByRole("heading", { level: 2, name: "Biography" })).toBeTruthy();
    expect(screen.getByText(/foundational designers of modern photographic objectives/)).toBeTruthy();
    expect(screen.getByRole("link", { name: "ZEISS — History of camera and cine lenses" }).getAttribute("href")).toBe(
      "https://www.zeiss.com/corporate/en/about-zeiss/past/history/technological-milestones/camera-and-cine-lenses.html",
    );
  });

  it("renders an author index and sorts it by name or patent count", () => {
    const alphabeticalAuthors = [...AUTHORS].sort((left, right) => catalogCollator.compare(left.name, right.name));
    const authorsByPatentCount = [...AUTHORS].sort(
      (left, right) => right.patentCount - left.patentCount || catalogCollator.compare(left.name, right.name),
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
      `/authors/${alphabeticalAuthors[0].slug}/`,
    );
    expect(document.querySelector("main a[href^='/authors/']")?.textContent).toBe(alphabeticalAuthors[0].name);

    fireEvent.click(screen.getByRole("button", { name: "Patent count" }));

    expect(screen.getByRole("button", { name: "Patent count" }).getAttribute("aria-pressed")).toBe("true");
    expect(document.querySelector("main a[href^='/authors/']")?.textContent).toBe(authorsByPatentCount[0].name);
    expect(localStorage.getItem(AUTHOR_SORT_PREFERENCE_KEY)).toBe("patents");
  });

  it("restores the author sort preference on a later visit", async () => {
    localStorage.setItem(AUTHOR_SORT_PREFERENCE_KEY, "patents");
    const authorsByPatentCount = [...AUTHORS].sort(
      (left, right) => right.patentCount - left.patentCount || catalogCollator.compare(left.name, right.name),
    );

    renderWithRouter(
      <HelmetProvider>
        <Routes>
          <Route path="/authors" element={<AuthorsIndexPage />} />
        </Routes>
      </HelmetProvider>,
      { initialEntries: ["/authors"] },
    );

    await waitFor(() =>
      expect(screen.getByRole("button", { name: "Patent count" }).getAttribute("aria-pressed")).toBe("true"),
    );
    expect(document.querySelector("main a[href^='/authors/']")?.textContent).toBe(authorsByPatentCount[0].name);
  });

  it("falls back to alphabetical sorting for an invalid stored preference", async () => {
    localStorage.setItem(AUTHOR_SORT_PREFERENCE_KEY, "newest-first");
    const alphabeticalAuthors = [...AUTHORS].sort((left, right) => catalogCollator.compare(left.name, right.name));

    renderWithRouter(
      <HelmetProvider>
        <Routes>
          <Route path="/authors" element={<AuthorsIndexPage />} />
        </Routes>
      </HelmetProvider>,
      { initialEntries: ["/authors"] },
    );

    await waitFor(() =>
      expect(screen.getByRole("button", { name: "Alphabetical" }).getAttribute("aria-pressed")).toBe("true"),
    );
    expect(document.querySelector("main a[href^='/authors/']")?.textContent).toBe(alphabeticalAuthors[0].name);
  });

  it("stratifies and filters authors by patent assignee", () => {
    const assignee = AUTHOR_ASSIGNEE_STRATA.find((entry) => entry.authorCount > 1);
    expect(assignee).toBeDefined();
    if (!assignee) return;
    const expectedAuthors = filterAuthorsByAssignee(AUTHOR_DIRECTORY_ENTRIES, assignee.slug);

    const rendered = renderWithRouter(
      <HelmetProvider>
        <Routes>
          <Route path="/authors" element={<AuthorsIndexPage />} />
        </Routes>
      </HelmetProvider>,
      { initialEntries: ["/authors"] },
    );

    const companyFilter = screen.getByRole("button", { name: "Company / assignee" });
    vi.spyOn(window, "innerWidth", "get").mockReturnValue(800);
    vi.spyOn(window, "innerHeight", "get").mockReturnValue(900);
    vi.spyOn(companyFilter, "getBoundingClientRect").mockReturnValue({
      bottom: 100,
      height: 32,
      left: 700,
      right: 1060,
      top: 68,
      width: 360,
      x: 700,
      y: 68,
      toJSON: () => ({}),
    });
    expect(companyFilter.getAttribute("aria-expanded")).toBe("false");
    fireEvent.click(companyFilter);
    expect(companyFilter.getAttribute("aria-expanded")).toBe("true");
    const optionsPanel = screen.getByRole("listbox", { name: "Company / assignee options" }).parentElement;
    expect(optionsPanel?.style.left).toBe("432px");
    expect(optionsPanel?.style.maxHeight).toBe("300px");
    const assigneeOption = screen.getByRole("option", {
      name: `${assignee.name} (${assignee.authorCount} authors · ${assignee.patentCount} ${assignee.patentCount === 1 ? "patent" : "patents"})`,
    });
    fireEvent.mouseDown(assigneeOption);

    expect(screen.getByRole("status").textContent).toBe(
      `${assignee.authorCount} of ${AUTHORS.length} authors shown for ${assignee.name}.`,
    );
    const shownAuthorNames = [...document.querySelectorAll<HTMLAnchorElement>("main a[href^='/authors/']")].map(
      (link) => link.textContent,
    );
    expect(shownAuthorNames).toHaveLength(assignee.authorCount);
    expect(new Set(shownAuthorNames)).toEqual(new Set(expectedAuthors.map((entry) => entry.author.name)));
    expect(
      screen
        .getAllByRole("link", { name: assignee.name })
        .every((link) => link.getAttribute("href") === `/relationships/#focus=assignee:${assignee.slug}`),
    ).toBe(true);

    rendered.unmount();
    renderWithRouter(
      <HelmetProvider>
        <Routes>
          <Route path="/authors" element={<AuthorsIndexPage />} />
        </Routes>
      </HelmetProvider>,
      { initialEntries: ["/authors"] },
    );

    expect(screen.getByRole("button", { name: "Company / assignee" }).textContent).toBe(
      `All companies and assignees (${AUTHORS.length} authors)`,
    );
    expect(screen.getByRole("status").textContent).toBe(
      `${AUTHORS.length} authors across ${AUTHOR_ASSIGNEE_STRATA.length} named assignees.`,
    );
  });

  it("labels author index entries that include a curated biography", () => {
    const profiledAuthor = getAuthorByName("Paul Rudolph");
    const unprofiledAuthor = AUTHORS.find((author) => !getAuthorBiography(author.name));
    expect(profiledAuthor).toBeDefined();
    expect(unprofiledAuthor).toBeDefined();
    if (!profiledAuthor || !unprofiledAuthor) return;

    renderWithRouter(
      <HelmetProvider>
        <Routes>
          <Route path="/authors" element={<AuthorsIndexPage />} />
        </Routes>
      </HelmetProvider>,
      { initialEntries: ["/authors"] },
    );

    const profiledCard = screen.getByRole("link", { name: profiledAuthor.name }).parentElement;
    const unprofiledCard = screen.getByRole("link", { name: unprofiledAuthor.name }).parentElement;
    expect(profiledCard).toBeTruthy();
    expect(unprofiledCard).toBeTruthy();
    if (!profiledCard || !unprofiledCard) return;

    expect(within(profiledCard).getByText("Biography")).toBeTruthy();
    expect(within(unprofiledCard).queryByText("Biography")).toBeNull();
  });

  it("renders patents in Country → Assignee sections with lens links", () => {
    const country = PATENT_COUNTRY_GROUPS[0];
    const assignee = country.assignees[0];
    const patent = assignee.patents[0];

    renderWithRouter(
      <HelmetProvider>
        <Routes>
          <Route path="/patents" element={<PatentsIndexPage />} />
        </Routes>
      </HelmetProvider>,
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
