// @vitest-environment jsdom

/**
 * LensIndexPage inventor/assignee grouping and hidden-fixture debug view,
 * split out of lensIndexPage.test.tsx for suite parallelism.
 */

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, screen, waitFor, within } from "@testing-library/react";
import LensIndexPage from "../../../src/pages/LensIndexPage.js";
import { CATALOG_ENTRIES, DEBUG_CATALOG_ENTRIES } from "../../../src/pages/lensIndex/catalog.js";
import { clearBrowserState, installMatchMediaMock, renderPage } from "../../testUtils.js";

vi.mock("../../../src/components/SEOHead.js", () => ({
  default: function SEOHead() {
    return null;
  },
}));

describe("LensIndexPage inventor and assignee grouping", () => {
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
    expect(inventorLensLinks[0].getAttribute("href")).toMatch(/^\/lens\/[^/]+\/$/);

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
    expect(assigneeLensLinks[0].getAttribute("href")).toMatch(/^\/lens\/[^/]+\/$/);
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
});
