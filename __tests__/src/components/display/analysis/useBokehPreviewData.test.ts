// @vitest-environment jsdom

import { renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import type { PreparedOpticalState } from "../../../../../src/optics/types.js";

const mocks = vi.hoisted(() => ({
  pairFromJob: { infinity: null, nearFocus: null },
  pairFromContext: { infinity: { marker: "context" }, nearFocus: null },
  computeBokehPreviewPair: vi.fn(),
  probe: vi.fn((_name: string, run: () => unknown) => run()),
}));

vi.mock("../../../../../src/optics/compat.js", () => ({
  analysisJobsForState2: {
    computeBokehPreviewPair: mocks.computeBokehPreviewPair,
  },
}));

vi.mock("../../../../../src/utils/perfProbe.js", () => ({
  probe: mocks.probe,
}));

import useBokehPreviewData from "../../../../../src/components/display/analysis/useBokehPreviewData.js";

describe("useBokehPreviewData", () => {
  it("uses the analysis context when supplied", () => {
    const preparedState = { focusT: 0 } as PreparedOpticalState;
    const analysisContext = {
      computeBokehPreviewPair: vi.fn(() => mocks.pairFromContext),
    };

    const { result } = renderHook(() => useBokehPreviewData(preparedState, 5, 4, analysisContext as never));

    expect(result.current).toBe(mocks.pairFromContext);
    expect(analysisContext.computeBokehPreviewPair).toHaveBeenCalledTimes(1);
    expect(mocks.computeBokehPreviewPair).not.toHaveBeenCalled();
    expect(mocks.probe).toHaveBeenCalledWith("computeBokehPreviewPair", expect.any(Function));
  });

  it("falls back to the prepared-state analysis job", () => {
    const preparedState = { focusT: 0 } as PreparedOpticalState;
    mocks.computeBokehPreviewPair.mockReturnValueOnce(mocks.pairFromJob);

    const { result } = renderHook(() => useBokehPreviewData(preparedState, 5, 4));

    expect(result.current).toBe(mocks.pairFromJob);
    expect(mocks.computeBokehPreviewPair).toHaveBeenCalledWith(preparedState, 5, 4);
  });
});
