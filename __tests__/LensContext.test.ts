// @vitest-environment jsdom

import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook } from "@testing-library/react";
import { useLensCtx, useLensDispatch, usePanelCtx } from "../src/utils/LensContext.js";

describe("LensContext hooks — outside provider", () => {
  // React 18 dispatches a DOM ErrorEvent on the window (via jsdom) when a
  // component throws without an error boundary, which jsdom prints to stderr.
  // Calling preventDefault() on that event suppresses the output while still
  // letting the thrown error propagate to the test assertion.
  const suppressWindowError = (e: ErrorEvent) => e.preventDefault();

  beforeEach(() => {
    window.addEventListener("error", suppressWindowError);
    vi.spyOn(console, "error").mockImplementation(() => undefined);
  });

  afterEach(() => {
    window.removeEventListener("error", suppressWindowError);
    vi.restoreAllMocks();
  });

  it("useLensCtx throws when used outside LensStateContext.Provider", () => {
    expect(() => renderHook(() => useLensCtx())).toThrow(/LensStateContext\.Provider/);
  });

  it("useLensDispatch throws when used outside LensDispatchContext.Provider", () => {
    expect(() => renderHook(() => useLensDispatch())).toThrow(/LensDispatchContext\.Provider/);
  });

  it("usePanelCtx throws when used outside PanelStateContext.Provider", () => {
    expect(() => renderHook(() => usePanelCtx())).toThrow(/PanelStateContext\.Provider/);
  });
});
