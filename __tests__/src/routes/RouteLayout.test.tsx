// @vitest-environment jsdom

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { createMemoryRouter, Link, Route, RouterProvider, Routes } from "react-router";
import RouteLayout from "../../../src/routes/RouteLayout.js";
import { renderPage } from "../../testUtils.js";

function Page() {
  return (
    <>
      <Link to="/second">New page</Link>
      <Link to="?group=mount">Change grouping</Link>
      <Link to="/second#target">Page anchor</Link>
      <Link to="#other">Same-page anchor</Link>
      <h2 id="target">Target</h2>
      <h2 id="other">Other</h2>
      <h2 id="encoded target">Encoded target</h2>
      <h2 id="malformed%ZZ">Literal target</h2>
    </>
  );
}

function renderRoutes(initialEntry = "/first") {
  return renderPage(
    <Routes>
      <Route element={<RouteLayout />}>
        <Route path="/:page" element={<Page />} />
      </Route>
    </Routes>,
    { initialEntries: [initialEntry] },
  );
}

describe("RouteLayout navigation scrolling", () => {
  const scrollTo = vi.fn();
  const scrollIntoView = vi.fn();
  let frames = new Map<number, FrameRequestCallback>();
  let frameId = 0;

  function flushFrames() {
    act(() => {
      const pending = [...frames.values()];
      frames.clear();
      for (const callback of pending) callback(0);
    });
  }

  beforeEach(() => {
    scrollTo.mockClear();
    scrollIntoView.mockClear();
    Object.defineProperty(window, "scrollTo", { configurable: true, writable: true, value: scrollTo });
    Object.defineProperty(Element.prototype, "scrollIntoView", {
      configurable: true,
      writable: true,
      value: scrollIntoView,
    });
    frames = new Map();
    frameId = 0;
    vi.spyOn(window, "requestAnimationFrame").mockImplementation((callback) => {
      frames.set(++frameId, callback);
      return frameId;
    });
    vi.spyOn(window, "cancelAnimationFrame").mockImplementation((id) => {
      frames.delete(id);
    });
  });
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("scrolls new pages to the top, including a different URL using the same page component", () => {
    renderRoutes();
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, left: 0 });
    scrollTo.mockClear();
    fireEvent.click(screen.getByRole("link", { name: "New page" }));
    expect(scrollTo).toHaveBeenCalledExactlyOnceWith({ top: 0, left: 0 });
  });

  it("keeps the current position when only query state changes", () => {
    renderRoutes();
    scrollTo.mockClear();
    fireEvent.click(screen.getByRole("link", { name: "Change grouping" }));
    expect(scrollTo).not.toHaveBeenCalled();
    expect(scrollIntoView).not.toHaveBeenCalled();
  });

  it("honors anchors on new pages and within the current page", () => {
    renderRoutes();
    scrollTo.mockClear();
    fireEvent.click(screen.getByRole("link", { name: "Page anchor" }));
    flushFrames();
    expect(scrollTo).not.toHaveBeenCalled();
    expect(scrollIntoView.mock.instances.at(-1)).toBe(document.getElementById("target"));
    fireEvent.click(screen.getByRole("link", { name: "Same-page anchor" }));
    flushFrames();
    expect(scrollTo).not.toHaveBeenCalled();
    expect(scrollIntoView.mock.instances.at(-1)).toBe(document.getElementById("other"));
  });

  it.each([
    ["encoded%20target", "encoded target"],
    ["malformed%ZZ", "malformed%ZZ"],
  ])("honors an initial #%s fragment", (fragment, id) => {
    renderRoutes(`/first#${fragment}`);
    flushFrames();
    expect(scrollTo).not.toHaveBeenCalled();
    expect(scrollIntoView.mock.instances.at(-1)).toBe(document.getElementById(id));
  });

  it("cancels an old anchor scroll when another navigation commits first", () => {
    renderRoutes("/first#target");
    fireEvent.click(screen.getByRole("link", { name: "New page" }));
    flushFrames();
    expect(scrollIntoView).not.toHaveBeenCalled();
    expect(scrollTo).toHaveBeenCalledExactlyOnceWith({ top: 0, left: 0 });
  });

  it("waits for a lazy destination before scrolling to its anchor", async () => {
    let resolvePage!: (value: { Component: typeof Page }) => void;
    const pending = new Promise<{ Component: typeof Page }>((resolve) => {
      resolvePage = resolve;
    });
    const router = createMemoryRouter(
      [
        {
          Component: RouteLayout,
          children: [
            { path: "/first", Component: () => <Link to="/lazy#target">Lazy anchor</Link> },
            { path: "/lazy", lazy: () => pending },
          ],
        },
      ],
      { initialEntries: ["/first"] },
    );
    render(<RouterProvider router={router} />);
    scrollTo.mockClear();
    fireEvent.click(screen.getByRole("link", { name: "Lazy anchor" }));
    flushFrames();
    expect(scrollIntoView).not.toHaveBeenCalled();
    await act(async () => {
      resolvePage({ Component: Page });
    });
    flushFrames();
    expect(scrollTo).not.toHaveBeenCalled();
    expect(scrollIntoView.mock.instances.at(-1)).toBe(document.getElementById("target"));
    router.dispose();
  });
});
