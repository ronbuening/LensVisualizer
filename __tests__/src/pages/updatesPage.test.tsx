// @vitest-environment jsdom

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { act, cleanup, fireEvent, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { Route, Routes, useNavigate } from "react-router";
import UpdatesPage from "../../../src/pages/UpdatesPage.js";
import { CHANGELOG } from "../../../src/utils/content/changelogData.js";
import { changelogEntryId } from "../../../src/utils/content/changelogHelpers.js";
import { clearBrowserState, installMatchMediaMock, renderWithRouter } from "../../testUtils.js";

vi.mock("../../../src/components/SEOHead.js", () => ({
  default: function SEOHead() {
    return null;
  },
}));

function HashNavButton({ hash }: { hash: string }) {
  const navigate = useNavigate();
  return (
    <button type="button" onClick={() => void navigate({ hash })}>
      navigate-hash
    </button>
  );
}

function renderUpdatesPage(initialEntry: string, navHash?: string) {
  return renderWithRouter(
    <HelmetProvider>
      <Routes>
        <Route
          path="/updates"
          element={
            <>
              <UpdatesPage />
              {navHash != null && <HashNavButton hash={navHash} />}
            </>
          }
        />
      </Routes>
    </HelmetProvider>,
    { initialEntries: [initialEntry] },
  );
}

describe("UpdatesPage hash deep links", () => {
  const entryIdA = changelogEntryId(CHANGELOG[0]);
  const entryIdB = changelogEntryId(CHANGELOG[1]);
  const scrollTo = vi.fn();
  const scrolledIntoViewIds: string[] = [];
  let rafCallbacks: FrameRequestCallback[] = [];

  function flushAnimationFrames() {
    act(() => {
      while (rafCallbacks.length > 0) {
        const pending = rafCallbacks;
        rafCallbacks = [];
        pending.forEach((cb) => cb(0));
      }
    });
  }

  beforeEach(() => {
    clearBrowserState();
    installMatchMediaMock(false);
    Object.defineProperty(window, "scrollTo", { writable: true, value: scrollTo });
    scrollTo.mockClear();
    scrolledIntoViewIds.length = 0;
    Element.prototype.scrollIntoView = vi.fn(function (this: Element) {
      scrolledIntoViewIds.push(this.id);
    });
    rafCallbacks = [];
    vi.spyOn(window, "requestAnimationFrame").mockImplementation((cb) => {
      rafCallbacks.push(cb);
      return rafCallbacks.length;
    });
    vi.spyOn(window, "cancelAnimationFrame").mockImplementation(() => {});
  });

  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("scrolls to top when no hash is present", () => {
    renderUpdatesPage("/updates");
    flushAnimationFrames();

    expect(scrollTo).toHaveBeenCalledWith({ top: 0, left: 0 });
    expect(scrolledIntoViewIds).toEqual([]);
  });

  it("scrolls the matching entry into view on a cold feed-link load", () => {
    renderUpdatesPage(`/updates#${entryIdA}`);
    flushAnimationFrames();

    expect(scrolledIntoViewIds).toContain(entryIdA);
    expect(scrollTo).not.toHaveBeenCalled();
  });

  it("scrolls to a second entry on same-page hash navigation", () => {
    renderUpdatesPage(`/updates#${entryIdA}`, `#${entryIdB}`);
    flushAnimationFrames();
    expect(scrolledIntoViewIds).toContain(entryIdA);

    fireEvent.click(screen.getByRole("button", { name: "navigate-hash" }));
    flushAnimationFrames();

    expect(scrolledIntoViewIds).toContain(entryIdB);
  });

  it("decodes percent-encoded fragments before matching", () => {
    renderUpdatesPage(`/updates#${entryIdA.replace(/-/g, "%2D")}`);
    flushAnimationFrames();

    expect(scrolledIntoViewIds).toContain(entryIdA);
  });

  it("survives malformed percent-encoding without crashing", () => {
    renderUpdatesPage("/updates#%E0%A4%A");
    flushAnimationFrames();

    expect(scrolledIntoViewIds).toEqual([]);
  });
});
