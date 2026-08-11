// @vitest-environment jsdom

/**
 * AuthorsIndexPage assignee filtering and biography labeling, split out of the
 * search/author/patent route coverage (searchPages.test.tsx) for suite parallelism.
 */

import { cleanup, fireEvent, screen, within } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Route, Routes } from "react-router";
import AuthorsIndexPage from "../../../src/pages/AuthorsIndexPage.js";
import { getAuthorBiography } from "../../../src/utils/catalog/authorBiographies.js";
import {
  AUTHOR_ASSIGNEE_STRATA,
  AUTHOR_DIRECTORY_ENTRIES,
  filterAuthorsByAssignee,
} from "../../../src/utils/catalog/authorAssignees.js";
import { AUTHORS, getAuthorByName } from "../../../src/utils/catalog/authorCatalog.js";
import { clearBrowserState, installMatchMediaMock, renderPage } from "../../testUtils.js";

vi.mock("../../../src/components/SEOHead.js", () => ({
  default: function SEOHead() {
    return null;
  },
}));

describe("authors index assignee filter and biography labels", () => {
  beforeEach(() => {
    clearBrowserState();
    installMatchMediaMock(false);
  });

  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("stratifies and filters authors by patent assignee", () => {
    const assignee = AUTHOR_ASSIGNEE_STRATA.find((entry) => entry.authorCount > 1);
    expect(assignee).toBeDefined();
    if (!assignee) return;
    const expectedAuthors = filterAuthorsByAssignee(AUTHOR_DIRECTORY_ENTRIES, assignee.slug);

    const rendered = renderPage(
      <Routes>
        <Route path="/authors" element={<AuthorsIndexPage />} />
      </Routes>,
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
    renderPage(
      <Routes>
        <Route path="/authors" element={<AuthorsIndexPage />} />
      </Routes>,
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

    renderPage(
      <Routes>
        <Route path="/authors" element={<AuthorsIndexPage />} />
      </Routes>,
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
});
