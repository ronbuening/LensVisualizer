// @vitest-environment jsdom

/**
 * LensIndexPage interaction test.
 *
 * Covers the custom filter UI path at the page level so catalog grouping,
 * typed numeric input commits, and result counts stay in sync.
 */

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, screen, waitFor, within } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import LensIndexPage from "../../../src/pages/LensIndexPage.js";
import {
  ALL_CATALOG_ENTRIES,
  CATALOG_ENTRIES,
  DEBUG_CATALOG_ENTRIES,
  FILTER_BOUNDS,
  defaultCustomFilter,
  matchesCustomFilter,
} from "../../../src/pages/lensIndex/catalog.js";
import { clearBrowserState, installMatchMediaMock, renderWithRouter } from "../../testUtils.js";

vi.mock("../../../src/components/SEOHead.js", () => ({
  default: function SEOHead() {
    return null;
  },
}));

describe("LensIndexPage", () => {
  function renderLensIndexPage(initialEntry = "/lenses") {
    renderWithRouter(
      <HelmetProvider>
        <LensIndexPage />
      </HelmetProvider>,
      { initialEntries: [initialEntry] },
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

    fireEvent.click(screen.getByRole("button", { name: "By Mount" }));
    expect(screen.getByRole("link", { name: "Nikon Z" }).getAttribute("href")).toBe("/mounts/nikon-z");
    expect(screen.getByRole("link", { name: "Sony E" }).getAttribute("href")).toBe("/mounts/sony-fe");
    expect(screen.getByText("Unknown Mount")).toBeTruthy();
    expect(screen.getAllByRole("link", { name: /VOIGTLÄNDER APO-LANTHAR 50mm f\/2\.0 Aspherical/i }).length).toBe(2);

    fireEvent.click(screen.getByRole("button", { name: "By Format" }));
    expect(screen.getByRole("link", { name: "135 / Full-frame" }).getAttribute("href")).toBe("/formats/135-full-frame");
    expect(screen.getByText("Unknown Format")).toBeTruthy();
  });

  it("groups each lens under every inventor and assignee with matching navigation sidebars", () => {
    const scrollTo = vi.fn();
    Object.defineProperty(window, "scrollTo", { configurable: true, value: scrollTo });
    renderLensIndexPage();

    const multiInventorEntry = CATALOG_ENTRIES.find((entry) => (entry.data.patentAuthors?.length ?? 0) > 1);
    const multiAssigneeEntry = CATALOG_ENTRIES.find((entry) => (entry.data.patentAssignees?.length ?? 0) > 1);
    expect(multiInventorEntry).toBeDefined();
    expect(multiAssigneeEntry).toBeDefined();

    fireEvent.click(screen.getByRole("button", { name: "By Inventor" }));

    const inventorName = multiInventorEntry!.data.patentAuthors![0];
    const escapedInventor = inventorName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const inventorHeading = screen.getByRole("heading", { name: new RegExp(`^${escapedInventor}\\s*\\(\\d+\\)$`) });
    const inventorTargetId = inventorHeading.closest("section")?.id;
    const inventorSidebar = screen.getByRole("navigation", { name: "Jump to inventors" });
    const inventorSidebarLink = within(inventorSidebar).getByRole("link", {
      name: new RegExp(`^${escapedInventor} \\(\\d+\\)$`),
    });
    expect(inventorSidebarLink.getAttribute("href")).toBe(`#${inventorTargetId}`);
    fireEvent.click(inventorSidebarLink);
    expect(scrollTo).toHaveBeenCalledWith({ top: expect.any(Number), behavior: "smooth" });
    const inventorLensLinks = screen.getAllByRole("link", {
      name: new RegExp(multiInventorEntry!.data.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")),
    });
    expect(inventorLensLinks).toHaveLength(multiInventorEntry!.data.patentAuthors!.length);
    expect(inventorLensLinks[0].getAttribute("href")).toContain("returnTo=%2Flenses%3Fgroup%3Dinventor");

    fireEvent.click(screen.getByRole("button", { name: "By Assignee" }));

    const assigneeName = multiAssigneeEntry!.data.patentAssignees![0];
    const escapedAssignee = assigneeName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const assigneeHeading = screen.getByRole("heading", { name: new RegExp(`^${escapedAssignee}\\s*\\(\\d+\\)$`) });
    const assigneeTargetId = assigneeHeading.closest("section")?.id;
    const assigneeSidebar = screen.getByRole("navigation", { name: "Jump to assignees" });
    expect(
      within(assigneeSidebar)
        .getByRole("link", { name: new RegExp(`^${escapedAssignee} \\(\\d+\\)$`) })
        .getAttribute("href"),
    ).toBe(`#${assigneeTargetId}`);
    const assigneeLensLinks = screen.getAllByRole("link", {
      name: new RegExp(multiAssigneeEntry!.data.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")),
    });
    expect(assigneeLensLinks).toHaveLength(multiAssigneeEntry!.data.patentAssignees!.length);
    expect(assigneeLensLinks[0].getAttribute("href")).toContain("returnTo=%2Flenses%3Fgroup%3Dassignee");
  });

  it("hydrates grouping and filters from the URL and preserves a return path in lens links", async () => {
    renderLensIndexPage("/lenses?group=mount&mounts=nikon-z");

    expect(screen.getByRole("button", { name: "By Mount" })).toBeTruthy();
    await waitFor(() => {
      expect(screen.getByRole("link", { name: "Nikon Z" })).toBeTruthy();
      expect(screen.queryByRole("link", { name: /CANON SERENAR 35mm f\/3.2/i })).toBeNull();
    });

    const lensLink = screen.getByRole("link", { name: /NIKON NIKKOR Z 26mm f\/2.8/i });
    const href = lensLink.getAttribute("href") ?? "";
    expect(href).toContain("/lens/nikon-z-26f28");
    expect(href).toContain("from=lenses");
    expect(href).toContain("context=mount");
    expect(href).toContain("id=nikon-z");
    expect(href).toContain("returnTo=%2Flenses%3Fgroup%3Dmount%26mounts%3Dnikon-z");
  });

  it("shows hidden reference fixtures in the debug URL view", async () => {
    renderLensIndexPage("/lenses?view=debug");

    await waitFor(() => {
      expect(
        screen.getByText(
          new RegExp(`Showing ${DEBUG_CATALOG_ENTRIES.length} of ${DEBUG_CATALOG_ENTRIES.length} interactive`, "i"),
        ),
      ).toBeTruthy();
    });

    expect(screen.getByRole("link", { name: /REFERENCE Newtonian Side Focus/i })).toBeTruthy();
    expect(screen.queryByRole("link", { name: /NIKON NIKKOR Z 26mm f\/2.8/i })).toBeNull();
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
    expect(href).toContain("/lens/reference-newtonian-side-focus");
    expect(href).toContain("returnTo=%2Flenses%3Fview%3Dall");
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
