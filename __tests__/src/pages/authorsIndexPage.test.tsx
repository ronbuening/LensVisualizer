// @vitest-environment jsdom

/**
 * AuthorsIndexPage sorting coverage, split out of the search/author/patent
 * route coverage (searchPages.test.tsx) for suite parallelism.
 */

import { cleanup, fireEvent, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Route, Routes } from "react-router";
import AuthorsIndexPage from "../../../src/pages/AuthorsIndexPage.js";
import { AUTHORS } from "../../../src/utils/catalog/authorCatalog.js";
import { AUTHOR_SORT_PREFERENCE_KEY } from "../../../src/utils/state/authorSortPreference.js";
import { clearBrowserState, installMatchMediaMock, renderPage } from "../../testUtils.js";
import { catalogCollator } from "../../../src/utils/catalog/collation.js";

vi.mock("../../../src/components/SEOHead.js", () => ({
  default: function SEOHead() {
    return null;
  },
}));

describe("authors index page sorting", () => {
  beforeEach(() => {
    clearBrowserState();
    installMatchMediaMock(false);
  });

  afterEach(() => {
    cleanup();
  });

  it("renders an author index and sorts it by name or patent count", () => {
    const alphabeticalAuthors = [...AUTHORS].sort((left, right) => catalogCollator.compare(left.name, right.name));
    const authorsByPatentCount = [...AUTHORS].sort(
      (left, right) => right.patentCount - left.patentCount || catalogCollator.compare(left.name, right.name),
    );

    renderPage(
      <Routes>
        <Route path="/authors" element={<AuthorsIndexPage />} />
      </Routes>,
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

    renderPage(
      <Routes>
        <Route path="/authors" element={<AuthorsIndexPage />} />
      </Routes>,
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

    renderPage(
      <Routes>
        <Route path="/authors" element={<AuthorsIndexPage />} />
      </Routes>,
      { initialEntries: ["/authors"] },
    );

    await waitFor(() =>
      expect(screen.getByRole("button", { name: "Alphabetical" }).getAttribute("aria-pressed")).toBe("true"),
    );
    expect(document.querySelector("main a[href^='/authors/']")?.textContent).toBe(alphabeticalAuthors[0].name);
  });
});
