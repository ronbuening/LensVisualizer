// @vitest-environment jsdom
/** Bokeh hook request identity follows prepared controls and both aperture radii. */
import { renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { createAnalysisComputationContext, createAnalysisRequest } from "../../../../../src/optics/analysis.js";
import { prepareRuntimeState } from "../../../../../src/optics/compat.js";
import { buildSimplePositiveElementLens } from "../../../optics/testLensFixtures.js";
import useBokehPreviewData from "../../../../../src/components/display/analysis/useBokehPreviewData.js";

const mocks = vi.hoisted(() => ({ probe: vi.fn((_name: string, run: () => unknown) => run()) }));
vi.mock("../../../../../src/utils/perfProbe.js", () => ({ probe: mocks.probe }));

describe("useBokehPreviewData", () => {
  it("uses the supplied context and keeps its cached empty result", () => {
    const lens = buildSimplePositiveElementLens();
    const preparedState = prepareRuntimeState(lens, 0, 0);
    const context = createAnalysisComputationContext(
      createAnalysisRequest({
        preparedState,
        dynamicEFL: 0,
        currentEPSD: 0,
        currentPhysStopSD: 0,
      }),
    );
    const compute = vi.spyOn(context, "computeBokehPreviewPair");
    const { result, rerender } = renderHook(() => useBokehPreviewData(preparedState, 5, 4, context));
    const first = result.current;
    expect(first).toEqual({ infinity: null, nearFocus: null });
    rerender();
    expect(result.current).toBe(first);
    expect(compute).toHaveBeenCalledTimes(1);
    expect(mocks.probe).toHaveBeenCalledWith("computeBokehPreviewPair", expect.any(Function));
  });

  it("reuses a standalone request and refreshes for either aperture or any prepared control", () => {
    const lens = buildSimplePositiveElementLens();
    const initial = { preparedState: prepareRuntimeState(lens, 0, 0), epSD: 5, stopSD: 4 };
    const { result, rerender } = renderHook(
      ({ preparedState, epSD, stopSD }) => useBokehPreviewData(preparedState, epSD, stopSD),
      { initialProps: initial },
    );
    let previous = result.current;
    rerender(initial);
    expect(result.current).toBe(previous);
    for (const next of [
      { ...initial, epSD: 3 },
      { ...initial, epSD: 3, stopSD: 2 },
      { ...initial, preparedState: prepareRuntimeState(lens, 0.4, 0) },
      { ...initial, preparedState: prepareRuntimeState(lens, 0.4, 0.5) },
      { ...initial, preparedState: prepareRuntimeState(lens, 0.4, 0.5, 0.3) },
      { ...initial, preparedState: prepareRuntimeState(buildSimplePositiveElementLens("other-bokeh"), 0, 0) },
    ]) {
      rerender(next);
      const request = createAnalysisRequest({
        preparedState: next.preparedState,
        dynamicEFL: 0,
        currentEPSD: next.epSD,
        currentPhysStopSD: next.stopSD,
      });
      // Near-focus jobs may evict the input from the short intern history; values stay equal.
      expect(result.current).toEqual(createAnalysisComputationContext(request).computeBokehPreviewPair());
      expect(result.current).not.toBe(previous);
      previous = result.current;
      rerender(next);
      expect(result.current).toBe(previous);
    }
  });
});
