// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import ArticleTOC from "../../../../src/components/content/ArticleTOC.js";
import themes from "../../../../src/utils/theme/themes.js";
import { installMatchMediaMock, mockReplaceState } from "../../../testUtils.js";

const MARKDOWN = ["## Intro", "### Background", "## Details", "## Summary"].join("\n");

class MockIntersectionObserver {
  observe = vi.fn();
  disconnect = vi.fn();

  constructor(private callback: IntersectionObserverCallback) {}

  trigger(entries: IntersectionObserverEntry[] = []) {
    this.callback(entries, this as unknown as IntersectionObserver);
  }
}

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe("ArticleTOC rendering", () => {
  it("does not render below the minimum heading count", () => {
    installMatchMediaMock(true);
    const { container } = render(<ArticleTOC markdown={"## Only one"} theme={themes.dark} minHeadings={2} />);
    expect(container.textContent).toBe("");
  });

  it("renders as a fixed wide sidebar when the wide media query matches", () => {
    installMatchMediaMock(true);
    render(<ArticleTOC markdown={MARKDOWN} theme={themes.dark} />);

    expect(screen.getByRole("navigation", { name: "On this page" })).toBeTruthy();
    expect(screen.queryByRole("button", { name: "Open table of contents" })).toBeNull();
    expect(screen.getByRole("link", { name: "Background" }).getAttribute("href")).toBe("#background");
  });

  it("renders a narrow toggle and scrolls to selected headings", () => {
    installMatchMediaMock(false);
    vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);
    const replaceState = mockReplaceState();
    const scrollTo = vi.fn();
    Object.defineProperty(window, "scrollY", { configurable: true, value: 20 });
    Object.defineProperty(window, "scrollTo", { configurable: true, value: scrollTo });

    const heading = document.createElement("h2");
    heading.id = "details";
    heading.getBoundingClientRect = () => ({ top: 300 }) as DOMRect;
    document.body.appendChild(heading);

    render(<ArticleTOC markdown={MARKDOWN} theme={themes.dark} offsetTop={80} />);

    const toggle = screen.getByRole("button", { name: "Open table of contents" });
    expect(toggle.getAttribute("aria-expanded")).toBe("false");
    fireEvent.click(toggle);
    expect(screen.getByRole("button", { name: "Close table of contents" }).getAttribute("aria-expanded")).toBe("true");

    fireEvent.click(screen.getByRole("link", { name: "Details" }));
    expect(scrollTo).toHaveBeenCalledWith({ top: 240, behavior: "smooth" });
    expect(replaceState).toHaveBeenCalledWith(null, "", "#details");
    expect(screen.getByRole("button", { name: "Open table of contents" }).getAttribute("aria-expanded")).toBe("false");
  });
});
