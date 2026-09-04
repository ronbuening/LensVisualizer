// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen, act } from "@testing-library/react";
import ImageQualityTab, { ImageQualityOutput } from "../../../../../src/components/display/analysis/ImageQualityTab.js";
import { mockTheme } from "../../../../testUtils.js";
import { prepareRuntimeState } from "../../../../../src/optics/compat.js";
import { buildSimplePositiveElementLens } from "../../../optics/testLensFixtures.js";
import type { ImageQualityResult } from "../../../../../src/types/imageQuality.js";
const { compute } = vi.hoisted(() => ({ compute: vi.fn() }));
vi.mock("../../../../../src/optics/optics.js", async (importOriginal) => ({
  ...(await importOriginal<object>()),
  computeImageQuality: compute,
}));
const result: ImageQualityResult = {
  status: "converged",
  reason: "Refinement passed",
  psf: {
    status: "ok",
    size: 3,
    pixelPitchMm: 0.001,
    intensity: [0, 0, 0, 0, 1, 0, 0, 0, 0],
    referencePeakIntensity: 1,
    windowIntegralMm2: 0.000001,
    centerStrehl: 1,
  },
  mtf: [
    { frequencyPerMm: 0, horizontal: 1, vertical: 1 },
    { frequencyPerMm: 100, horizontal: 0.2, vertical: 0.2 },
  ],
  spectrum: [],
  convergence: { pupilDifference: 0.01, windowDifference: 0.02, imageSamplingDifference: 0.001, maxOpdStepWaves: 0.05 },
};
afterEach(() => {
  cleanup();
  vi.useRealTimers();
  vi.clearAllMocks();
});
describe("Image Quality controls", () => {
  it("passes explicit controls and removes stale results when settings or lens state change", () => {
    vi.useFakeTimers();
    compute.mockReturnValue(result);
    const state = prepareRuntimeState(buildSimplePositiveElementLens(), 0, 0);
    const props = { preparedState: state, stopSemiDiameterMm: 0.1, t: mockTheme };
    const view = render(<ImageQualityTab {...props} />);
    expect(compute).not.toHaveBeenCalled();
    fireEvent.click(screen.getByText("Calculate image quality"));
    act(() => vi.runAllTimers());
    expect(compute.mock.calls[0][1]).toMatchObject({
      throughputModel: "ideal",
      objectDistanceMm: Infinity,
      spectrum: [
        { channel: "R", weight: 0 },
        { channel: "G", weight: 1 },
        { channel: "B", weight: 0 },
        { channel: "V", weight: 0 },
      ],
    });
    expect(screen.getByLabelText("Axial modulation transfer function")).toBeTruthy();
    for (const [label, value] of [
      ["Throughput model", "authored"],
      ["Source distance", "1000"],
      ["Pupil radial samples", "64"],
      ["Base window samples", "49"],
      ["Sensor spacing", "2"],
      ["C · 656.27 nm weight", "0.5"],
    ])
      fireEvent.change(screen.getByLabelText(label), { target: { value } });
    expect(screen.queryByLabelText("Axial modulation transfer function")).toBeNull();
    fireEvent.click(screen.getByText("Calculate image quality"));
    act(() => vi.runAllTimers());
    expect(compute.mock.calls.at(-1)![1]).toMatchObject({
      throughputModel: "authored",
      objectDistanceMm: 1000,
      radialStrata: 64,
      imageSize: 49,
      pixelPitchMm: 0.002,
    });
    view.rerender(<ImageQualityTab {...props} stopSemiDiameterMm={0.2} />);
    expect(screen.queryByLabelText("Axial modulation transfer function")).toBeNull();
    fireEvent.change(screen.getByLabelText("Throughput model"), { target: { value: "uncoated" } });
    expect(screen.getByText(/not a production coating model/)).toBeTruthy();
    fireEvent.click(screen.getByText("Calculate image quality"));
    view.unmount();
    act(() => vi.runAllTimers());
    expect(compute).toHaveBeenCalledTimes(2);
  });
  it.each(["undersampled", "unavailable", "unsupported"] as const)(
    "withholds MTF for %s even if a caller supplies curve data",
    (status) => {
      render(
        <ImageQualityOutput
          result={{ ...result, status, psf: status === "undersampled" ? result.psf : null }}
          t={mockTheme}
        />,
      );
      expect(screen.queryByLabelText("Axial modulation transfer function")).toBeNull();
      expect(screen.getByText(/MTF unavailable/)).toBeTruthy();
    },
  );
});
