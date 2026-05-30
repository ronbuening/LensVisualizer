import { describe, expect, it } from "vitest";
import {
  INTERACTIVE_ANALYSIS_SAMPLING,
  analysisSamplingForQuality,
} from "../../../src/optics/analysis/analysisQuality.js";

describe("analysis quality sampling", () => {
  it("adds reduced chromatic sampling for interactive drawer updates", () => {
    expect(analysisSamplingForQuality("settled")).toBeUndefined();
    expect(analysisSamplingForQuality("interactive")).toBe(INTERACTIVE_ANALYSIS_SAMPLING);

    expect(INTERACTIVE_ANALYSIS_SAMPLING.chromaticLongitudinalFractions).toEqual([0.95, 0.85, 0.75]);
    expect(INTERACTIVE_ANALYSIS_SAMPLING.chromaticLateralFieldFractions).toEqual([0, 0.5, 1]);
    expect(INTERACTIVE_ANALYSIS_SAMPLING.chromaticRayTraceOnAxisFractions).toEqual([0.95, 0.85]);
    expect(INTERACTIVE_ANALYSIS_SAMPLING.chromaticRayTraceOffAxisFractions).toEqual([0.75, -0.75, 0.5, -0.5]);
  });
});
