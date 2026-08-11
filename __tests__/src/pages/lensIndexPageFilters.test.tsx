// @vitest-environment jsdom

/**
 * LensIndexPage custom-filter panel coverage (maker, patent year, mount,
 * image format), split out of lensIndexPage.test.tsx for suite parallelism.
 */

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, screen } from "@testing-library/react";
import LensIndexPage from "../../../src/pages/LensIndexPage.js";
import {
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

describe("LensIndexPage custom filters", () => {
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

  it("opens the custom filter panel and filters by maker and patent year", () => {
    renderLensIndexPage();

    expect(screen.getByRole("link", { name: "Subscribe to New Lenses" }).getAttribute("href")).toBe(
      "/feeds/lenses.xml",
    );

    fireEvent.click(screen.getByRole("button", { name: "Custom Filter" }));

    expect(screen.getByText("Focal Length")).toBeTruthy();
    expect(screen.getByText("Aperture")).toBeTruthy();
    expect(screen.getByText("Patent Date")).toBeTruthy();
    expect(screen.getByText("Maker")).toBeTruthy();
    expect(screen.getByText("Mount")).toBeTruthy();
    expect(screen.getByText("Image Format")).toBeTruthy();

    fireEvent.click(screen.getByRole("button", { name: /^Nikon \(\d+\)$/ }));
    fireEvent.change(screen.getByLabelText("Minimum patent year value"), { target: { value: "2024" } });
    /* Typed numeric filters commit on blur/Enter, so exercise that path
       rather than relying only on the slider behavior. */
    fireEvent.blur(screen.getByLabelText("Minimum patent year value"));

    const expectedNikonEntries = CATALOG_ENTRIES.filter((entry) =>
      matchesCustomFilter(
        entry,
        {
          ...defaultCustomFilter(FILTER_BOUNDS),
          makerSlugs: ["nikon"],
          patentYearMin: 2024,
        },
        FILTER_BOUNDS,
      ),
    );

    expect(
      screen.getByText(
        new RegExp(`Showing ${expectedNikonEntries.length} of \\d+ interactive optical cross-section diagrams`, "i"),
      ),
    ).toBeTruthy();
    expect(screen.getByRole("link", { name: /NIKON NIKKOR Z 135mm f\/1.8 S Plena/i })).toBeTruthy();
    expect(screen.queryByRole("link", { name: /NIKON NIKKOR Z 26mm f\/2.8/i })).toBeNull();
    expect(screen.queryByRole("link", { name: /CANON SERENAR 35mm f\/3.2/i })).toBeNull();
    for (const entry of expectedNikonEntries) {
      const escapedName = entry.data.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      expect(screen.getByRole("link", { name: new RegExp(escapedName) })).toBeTruthy();
    }

    fireEvent.click(screen.getByRole("button", { name: "Clear Filters" }));

    expect(screen.getByText(/Showing \d+ of \d+ interactive optical cross-section diagrams/i)).toBeTruthy();
    expect(screen.getByRole("link", { name: /NIKON NIKKOR Z 26mm f\/2.8/i })).toBeTruthy();
  });

  it("filters by lens mount and image format", () => {
    renderLensIndexPage();

    fireEvent.click(screen.getByRole("button", { name: "Custom Filter" }));
    fireEvent.click(screen.getByRole("button", { name: /^Sony E \(\d+\)$/ }));
    fireEvent.click(screen.getByRole("button", { name: /^135 \/ Full-frame \(\d+\)$/ }));

    expect(screen.getByRole("link", { name: /VOIGTLÄNDER APO-LANTHAR 50mm f\/2\.0 Aspherical/i })).toBeTruthy();
    expect(screen.queryByRole("link", { name: /NIKON NIKKOR Z 26mm f\/2.8/i })).toBeNull();

    fireEvent.click(screen.getByRole("button", { name: "Clear Filters" }));

    expect(screen.getByRole("link", { name: /NIKON NIKKOR Z 26mm f\/2.8/i })).toBeTruthy();
  });
});
