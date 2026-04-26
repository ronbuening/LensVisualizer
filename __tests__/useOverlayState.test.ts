// @vitest-environment jsdom

import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import useOverlayState from "../src/components/hooks/useOverlayState.js";

describe("useOverlayState", () => {
  it("starts with no aspheric comparison element", () => {
    const { result } = renderHook(() => useOverlayState("lens-a"));
    expect(result.current.asphCompareElementId).toBeNull();
  });

  it("opens and closes the aspheric comparison overlay", () => {
    const { result } = renderHook(() => useOverlayState("lens-a"));
    act(() => result.current.openAsphCompare(7));
    expect(result.current.asphCompareElementId).toBe(7);
    act(() => result.current.closeAsphCompare());
    expect(result.current.asphCompareElementId).toBeNull();
  });

  it("clears the aspheric comparison element when lensKey changes", () => {
    const { result, rerender } = renderHook(({ key }) => useOverlayState(key), {
      initialProps: { key: "lens-a" },
    });
    act(() => result.current.openAsphCompare(3));
    expect(result.current.asphCompareElementId).toBe(3);

    rerender({ key: "lens-b" });
    expect(result.current.asphCompareElementId).toBeNull();
  });
});
