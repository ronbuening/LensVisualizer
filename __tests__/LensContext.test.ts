// @vitest-environment jsdom

import { describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import { useLensCtx, useLensDispatch } from "../src/utils/LensContext.js";

describe("LensContext hooks — outside provider", () => {
  it("useLensCtx throws when used outside LensStateContext.Provider", () => {
    expect(() => renderHook(() => useLensCtx())).toThrow(/LensStateContext\.Provider/);
  });

  it("useLensDispatch throws when used outside LensDispatchContext.Provider", () => {
    expect(() => renderHook(() => useLensDispatch())).toThrow(/LensDispatchContext\.Provider/);
  });
});
