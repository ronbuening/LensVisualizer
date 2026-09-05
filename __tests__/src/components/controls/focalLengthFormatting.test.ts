import { expect, it } from "vitest";
import {
  formatFocalLength,
  formatZoomFocalLength,
  formatZoomReconstructionNote,
} from "../../../../src/components/controls/focalLengthFormatting.js";
import type { ZoomReconstructionReport } from "../../../../src/optics/state/zoomReconstruction.js";

it.each([
  [129.02, 129.02, true, "129 mm"],
  [129.02, 120, true, "129 mm (eff. 120.0 mm)"],
  [129.02, 120, false, "129 mm"],
  [129.02, NaN, true, "129 mm (eff. unavailable)"],
  [NaN, 120, true, "unavailable (eff. 120.0 mm)"],
])("labels calculated infinity %s and current %s consistently", (a, b, show, expected) => {
  expect(formatZoomFocalLength(a, b, show)).toBe(expected);
});
it("separates source, reconstructed and unavailable zoom geometry", () => {
  expect(formatFocalLength(Infinity)).toBe("unavailable");
  expect(formatZoomReconstructionNote()).toBe("");
  const report: ZoomReconstructionReport = {
    status: "source",
    focusErrorMm: 0,
    focalLengthErrorMm: 0,
    referenceFocusOffsetMm: null,
    maxGroupShiftMm: 0,
  };
  expect(formatZoomReconstructionNote(report)).toBe("");
  expect(formatZoomReconstructionNote({ ...report, status: "reconstructed" })).toContain("not a measured cam curve");
  for (const status of ["unsupported", "unavailable"] as const)
    expect(formatZoomReconstructionNote({ ...report, status })).toContain("unvalidated");
});
