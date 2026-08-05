// @vitest-environment jsdom

/**
 * CatalogSearchResults renders the /search route's grouped results. It was only
 * ever reached indirectly through page-level flows, so its empty, no-query, and
 * truncation branches had no direct coverage.
 */

import { cleanup, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import CatalogSearchResults from "../../../../src/components/search/CatalogSearchResults.js";
import { searchCatalog } from "../../../../src/utils/catalog/searchCatalog.js";
import themes from "../../../../src/utils/theme/themes.js";
import { renderWithRouter } from "../../../testUtils.js";

const theme = themes.dark;

/** A query with hits in a given section, chosen from real catalog data. */
function queryWith(section: "lenses" | "patents" | "authors", candidates: string[]): string {
  const found = candidates.find((query) => searchCatalog(query)[section].length > 0);
  if (!found) throw new Error(`no catalog query produced ${section} results`);
  return found;
}

afterEach(cleanup);

describe("CatalogSearchResults", () => {
  it("prompts for input when the query is empty", () => {
    renderWithRouter(<CatalogSearchResults query="" theme={theme} />);
    expect(screen.getByText(/Enter a lens name, a published patent number, or an inventor name/)).toBeTruthy();
  });

  it("treats a whitespace-only query as empty", () => {
    renderWithRouter(<CatalogSearchResults query="   " theme={theme} />);
    expect(screen.getByText(/Enter a lens name, a published patent number, or an inventor name/)).toBeTruthy();
  });

  it("reports an empty result set politely", () => {
    const query = "zzzz-no-such-lens-or-author";
    expect(searchCatalog(query).lenses).toHaveLength(0);

    renderWithRouter(<CatalogSearchResults query={query} theme={theme} />);
    const message = screen.getByText(/No results for/);
    expect(message.getAttribute("aria-live")).toBe("polite");
    expect(message.textContent).toContain(query);
  });

  it("renders lens matches as links to their lens pages", () => {
    const query = queryWith("lenses", ["Noct", "Nikkor", "Summicron", "50mm"]);
    const expected = searchCatalog(query);

    renderWithRouter(<CatalogSearchResults query={query} theme={theme} />);
    const section = screen.getByRole("heading", { name: /Lens names/ }).parentElement!;
    const first = expected.lenses[0];

    expect(within(section).getByText(first.data.name)).toBeTruthy();
    const link = within(section).getAllByRole("link")[0];
    expect(link.getAttribute("href")).toBe(`/lens/${first.key}/`);
  });

  it("renders author matches as links to their author pages", () => {
    const query = queryWith("authors", ["Sato", "Klemt", "Dodoc", "Weiß"]);
    const expected = searchCatalog(query);

    renderWithRouter(<CatalogSearchResults query={query} theme={theme} />);
    const section = screen.getByRole("heading", { name: /Authors/ }).parentElement!;
    const first = expected.authors[0].author;

    expect(within(section).getByText(first.name)).toBeTruthy();
    expect(within(section).getAllByRole("link")[0].getAttribute("href")).toBe(`/authors/${first.slug}/`);
  });

  it("announces the match count and pluralizes it", () => {
    const query = queryWith("lenses", ["Noct", "Nikkor", "50mm"]);
    const results = searchCatalog(query);
    const total = results.lenses.length + results.patents.length + results.authors.length;

    renderWithRouter(<CatalogSearchResults query={query} theme={theme} />);
    expect(screen.getByText(new RegExp(`${total} ${total === 1 ? "match" : "matches"} for`))).toBeTruthy();
  });

  it("omits sections that have no matches", () => {
    const query = ["Klemt", "Dodoc", "Sato"].find((q) => {
      const r = searchCatalog(q);
      return r.authors.length > 0 && r.lenses.length === 0 && r.patents.length === 0;
    });
    // Asserted rather than skipped, so this cannot quietly become vacuous.
    expect(query, "expected an author-only query in the catalog").toBeDefined();

    renderWithRouter(<CatalogSearchResults query={query!} theme={theme} />);
    expect(screen.getByRole("heading", { name: /Authors/ })).toBeTruthy();
    expect(screen.queryByRole("heading", { name: /Lens names/ })).toBeNull();
    expect(screen.queryByRole("heading", { name: /Patent numbers/ })).toBeNull();
  });

  it("caps a long result list and says so", () => {
    const query = ["e", "a", "1", "0"].find((q) => searchCatalog(q).lenses.length > 40);
    expect(query, "expected a query overflowing the 40-result section limit").toBeDefined();

    renderWithRouter(<CatalogSearchResults query={query!} theme={theme} />);
    const section = screen.getByRole("heading", { name: /Lens names/ }).parentElement!;

    expect(within(section).getAllByRole("link")).toHaveLength(40);
    expect(within(section).getByText(/Showing the first 40/)).toBeTruthy();
  });
});
