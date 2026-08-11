// @vitest-environment jsdom

/**
 * LensIndexPage numeric-input/multi-select interactions and the all-files
 * library view, split out of lensIndexPage.test.tsx for suite parallelism.
 */

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, screen, waitFor } from "@testing-library/react";
import LensIndexPage from "../../../src/pages/LensIndexPage.js";
import {
  ALL_CATALOG_ENTRIES,
  CATALOG_ENTRIES,
  FILTER_BOUNDS,
  defaultCustomFilter,
  matchesCustomFilter,
} from "../../../src/pages/lensIndex/catalog.js";
import { clearBrowserState, installMatchMediaMock, renderPage } from "../../testUtils.js";

vi.mock("../../../src/components/SEOHead.js", () => ({
  default: function SEOHead() {
    return null;
  },
}));

describe("LensIndexPage filter interactions and library views", () => {
  function renderLensIndexPage(initialEntry = "/lenses") {
    renderPage(<LensIndexPage />, { initialEntries: [initialEntry] });
  }

  beforeEach(() => {
    clearBrowserState();
    installMatchMediaMock(false);
  });

  afterEach(() => {
    cleanup();
  });

  it("supports maker multi-select plus Enter and Escape numeric-input behavior", () => {
    renderLensIndexPage();

    fireEvent.click(screen.getByRole("button", { name: "Custom Filter" }));

    const focalMinInput = screen.getByLabelText("Minimum focal length value") as HTMLInputElement;
    const originalFocalMin = focalMinInput.value;

    fireEvent.change(focalMinInput, { target: { value: "999" } });
    fireEvent.keyDown(focalMinInput, { key: "Escape" });

    expect(focalMinInput.value).toBe(originalFocalMin);

    fireEvent.click(screen.getByRole("button", { name: /^Canon \(\d+\)$/ }));
    fireEvent.click(screen.getByRole("button", { name: /^Nikon \(\d+\)$/ }));

    expect(screen.getByRole("link", { name: /CANON SERENAR 35mm f\/3.2/i })).toBeTruthy();
    expect(screen.getByRole("link", { name: /NIKON NIKKOR Z 26mm f\/2.8/i })).toBeTruthy();

    fireEvent.click(screen.getByRole("button", { name: /^Nikon \(\d+\)$/ }));

    const patentYearMinInput = screen.getByLabelText("Minimum patent year value");
    fireEvent.change(patentYearMinInput, { target: { value: "2024" } });
    fireEvent.keyDown(patentYearMinInput, { key: "Enter" });

    const expectedCanonEntries = CATALOG_ENTRIES.filter((entry) =>
      matchesCustomFilter(
        entry,
        {
          ...defaultCustomFilter(FILTER_BOUNDS),
          makerSlugs: ["canon"],
          patentYearMin: 2024,
        },
        FILTER_BOUNDS,
      ),
    );

    expect(
      screen.getByText(
        new RegExp(`Showing ${expectedCanonEntries.length} of \\d+ interactive optical cross-section diagrams`, "i"),
      ),
    ).toBeTruthy();
    expect(screen.queryByRole("link", { name: /NIKON NIKKOR Z 26mm f\/2.8/i })).toBeNull();
    expect(screen.queryByRole("link", { name: /CANON SERENAR 35mm f\/3.2/i })).toBeNull();

    for (const entry of expectedCanonEntries) {
      const escapedName = entry.data.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      expect(screen.getByRole("link", { name: new RegExp(escapedName) })).toBeTruthy();
    }

    fireEvent.click(screen.getByRole("button", { name: "Clear Filters" }));

    expect(screen.getByRole("link", { name: /CANON SERENAR 35mm f\/3.2/i })).toBeTruthy();
    expect(screen.getByRole("link", { name: /NIKON NIKKOR Z 26mm f\/2.8/i })).toBeTruthy();
  });

  it("preserves the all-files library view in hidden fixture links", async () => {
    renderLensIndexPage("/lenses?view=all");

    await waitFor(() => {
      expect(
        screen.getByText(
          new RegExp(`Showing ${ALL_CATALOG_ENTRIES.length} of ${ALL_CATALOG_ENTRIES.length} interactive`, "i"),
        ),
      ).toBeTruthy();
    });

    const fixtureLink = screen.getByRole("link", { name: /REFERENCE Newtonian Side Focus/i });
    const href = fixtureLink.getAttribute("href") ?? "";
    expect(href).toBe("/lens/reference-newtonian-side-focus/");
  });
});
