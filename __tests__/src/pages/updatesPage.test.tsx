// @vitest-environment jsdom

/**
 * The /updates hub and its /updates/YYYY-MM/ archive pages. RSS items and shared links point at
 * `/updates/#changelog-…`; an entry that has left the hub must move to its archive page with the same anchor
 * (RouteLayout.test.tsx covers the scroll itself).
 */

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, screen } from "@testing-library/react";
import { Route, Routes, useLocation } from "react-router";
import UpdatesMonthPage from "../../../src/pages/UpdatesMonthPage.js";
import UpdatesPage from "../../../src/pages/UpdatesPage.js";
import { CHANGELOG } from "../../../src/utils/content/changelogData.js";
import { changelogEntryId } from "../../../src/utils/content/changelogHelpers.js";
import { formatUpdateMonth } from "../../../src/utils/content/updateMonths.js";
import { RECENT_UPDATE_MONTHS, UPDATE_MONTHS } from "../../../src/utils/content/updatesArchive.js";
import { clearBrowserState, installMatchMediaMock, renderPage } from "../../testUtils.js";

vi.mock("../../../src/components/SEOHead.js", () => ({
  default: function SEOHead() {
    return null;
  },
}));

function LocationEcho() {
  const location = useLocation();
  return <output data-testid="location">{`${location.pathname}${location.hash}`}</output>;
}

function renderUpdates(initialEntry: string) {
  return renderPage(
    <Routes>
      <Route
        path="/updates"
        element={
          <>
            <UpdatesPage />
            <LocationEcho />
          </>
        }
      />
      <Route
        path="/updates/:month"
        element={
          <>
            <UpdatesMonthPage />
            <LocationEcho />
          </>
        }
      />
    </Routes>,
    { initialEntries: [initialEntry] },
  );
}

const oldestMonth = UPDATE_MONTHS[UPDATE_MONTHS.length - 1].month;
const archivedEntry = CHANGELOG.find((entry) => entry.date.startsWith(`${oldestMonth}-`))!;
const archivedId = changelogEntryId(archivedEntry);
const recentEntry = CHANGELOG[0];
const recentId = changelogEntryId(recentEntry);
const recentMonth = recentEntry.date.slice(0, 7);

describe("Updates archive", () => {
  beforeEach(() => {
    clearBrowserState();
    installMatchMediaMock(false);
  });

  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("has archived months beyond the hub's recent ones", () => {
    expect(RECENT_UPDATE_MONTHS).toContain(recentMonth);
    expect(RECENT_UPDATE_MONTHS).not.toContain(oldestMonth);
    expect(archivedEntry).toBeDefined();
  });

  it("lists only the recent months on the hub and links every month", () => {
    renderUpdates("/updates");

    expect(document.getElementById(recentId)).not.toBeNull();
    expect(document.getElementById(archivedId)).toBeNull();
    const archiveNav = screen.getByRole("navigation", { name: "Monthly archive" });
    for (const { month } of UPDATE_MONTHS) {
      expect(archiveNav.querySelector(`a[href="/updates/${month}/"]`), month).not.toBeNull();
    }
  });

  it("moves an archived entry's hub anchor to its month page, keeping the anchor", async () => {
    renderUpdates(`/updates#${archivedId}`);

    expect(await screen.findByText(`/updates/${oldestMonth}/#${archivedId}`)).toBeTruthy();
    expect(document.getElementById(archivedId)).not.toBeNull();
  });

  it("keeps a recent entry's anchor and a malformed fragment on the hub", () => {
    renderUpdates(`/updates#${recentId}`);
    expect(screen.getByTestId("location").textContent).toBe(`/updates#${recentId}`);
    cleanup();

    renderUpdates("/updates#%E0%A4%A");
    expect(screen.getByTestId("location").textContent).toBe("/updates#%E0%A4%A");
  });

  it("shows one month on its archive page and marks it current", () => {
    renderUpdates(`/updates/${oldestMonth}/`);

    expect(screen.getByRole("heading", { level: 1, name: `${formatUpdateMonth(oldestMonth)} Updates` })).toBeTruthy();
    expect(document.getElementById(archivedId)).not.toBeNull();
    expect(document.getElementById(recentId)).toBeNull();
    const current = screen.getByRole("navigation", { name: "Monthly archive" }).querySelector('[aria-current="page"]');
    expect(current?.textContent).toContain(formatUpdateMonth(oldestMonth));
  });

  it("moves an anchor from the wrong month page to its own", async () => {
    renderUpdates(`/updates/${oldestMonth}/#${recentId}`);

    expect(await screen.findByText(`/updates/${recentMonth}/#${recentId}`)).toBeTruthy();
  });

  it.each(["/updates/2099-01/", "/updates/latest/"])("sends unknown month %s back to the hub", async (path) => {
    renderUpdates(path);

    expect(await screen.findByText("/updates/")).toBeTruthy();
  });
});
