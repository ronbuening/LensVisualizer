// @vitest-environment jsdom

/**
 * LensIndexPage interaction test.
 *
 * Covers grouping switches and URL hydration at the page level. Inventor
 * grouping, custom-filter, and interaction coverage are split into
 * lensIndexPageInventorGrouping.test.tsx, lensIndexPageFilters.test.tsx, and
 * lensIndexPageInteractions.test.tsx for suite parallelism.
 */

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, screen, waitFor } from "@testing-library/react";
import LensIndexPage from "../../../src/pages/LensIndexPage.js";
import { clearBrowserState, installMatchMediaMock, renderPage } from "../../testUtils.js";

vi.mock("../../../src/components/SEOHead.js", () => ({
  default: function SEOHead() {
    return null;
  },
}));

describe("LensIndexPage", () => {
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
    expect(screen.getByRole("link", { name: "Nikon Z" }).getAttribute("href")).toBe("/mounts/nikon-z/");
    expect(screen.getByRole("link", { name: "Sony E" }).getAttribute("href")).toBe("/mounts/sony-fe/");
    expect(screen.getByText("Unknown Mount")).toBeTruthy();
    expect(screen.getAllByRole("link", { name: /VOIGTLÄNDER APO-LANTHAR 50mm f\/2\.0 Aspherical/i }).length).toBe(2);

    fireEvent.click(screen.getByRole("button", { name: "By Format" }));
    expect(screen.getByRole("link", { name: "135 / Full-frame" }).getAttribute("href")).toBe(
      "/formats/135-full-frame/",
    );
    expect(screen.getByText("Unknown Format")).toBeTruthy();
  });

  it("hydrates grouping and filters from the URL while keeping lens hrefs canonical", async () => {
    renderLensIndexPage("/lenses?group=mount&mounts=nikon-z");

    expect(screen.getByRole("button", { name: "By Mount" })).toBeTruthy();
    await waitFor(() => {
      expect(screen.getByRole("link", { name: "Nikon Z" })).toBeTruthy();
      expect(screen.queryByRole("link", { name: /CANON SERENAR 35mm f\/3.2/i })).toBeNull();
    });

    const lensLink = screen.getByRole("link", { name: /NIKON NIKKOR Z 26mm f\/2.8/i });
    const href = lensLink.getAttribute("href") ?? "";
    expect(href).toBe("/lens/nikon-z-26f28/");
  });
});
