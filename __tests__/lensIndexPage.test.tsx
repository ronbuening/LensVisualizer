// @vitest-environment jsdom

/**
 * LensIndexPage interaction test.
 *
 * Covers the custom filter UI path at the page level so catalog grouping,
 * typed numeric input commits, and result counts stay in sync.
 */

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import LensIndexPage from "../src/pages/LensIndexPage.js";
import { CATALOG_ENTRIES, FILTER_BOUNDS, defaultCustomFilter, matchesCustomFilter } from "../src/pages/lensIndex/catalog.js";
import { clearBrowserState, installMatchMediaMock, renderWithRouter } from "./testUtils.js";

vi.mock("../src/components/SEOHead.js", () => ({
  default: function SEOHead() {
    return null;
  },
}));

describe("LensIndexPage", () => {
  function renderLensIndexPage() {
    renderWithRouter(
      <HelmetProvider>
        <LensIndexPage />
      </HelmetProvider>,
      { initialEntries: ["/lenses"] },
    );
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

    fireEvent.click(screen.getByRole("button", { name: "Custom Filter" }));

    expect(screen.getByText("Focal Length")).toBeTruthy();
    expect(screen.getByText("Aperture")).toBeTruthy();
    expect(screen.getByText("Patent Date")).toBeTruthy();
    expect(screen.getByText("Maker")).toBeTruthy();

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

  it("switches between maker, focal-length, and patent-year groupings", () => {
    renderLensIndexPage();

    expect(screen.getByRole("link", { name: "Canon" })).toBeTruthy();

    fireEvent.click(screen.getByRole("button", { name: "By Focal Length" }));
    expect(screen.getByText("Primes")).toBeTruthy();
    expect(screen.getAllByText("Ultrawide (≤24mm)").length).toBeGreaterThan(0);

    fireEvent.click(screen.getByRole("button", { name: "By Patent Year" }));
    expect(screen.getByRole("button", { name: "By Patent Year ↑" })).toBeTruthy();
    expect(screen.getByText("1950s")).toBeTruthy();

    fireEvent.click(screen.getByRole("button", { name: "By Patent Year ↑" }));
    expect(screen.getByRole("button", { name: "By Patent Year ↓" })).toBeTruthy();
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
});
