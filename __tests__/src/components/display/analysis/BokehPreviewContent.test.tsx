// @vitest-environment jsdom

import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import BokehPreviewContent from "../../../../../src/components/display/analysis/BokehPreviewContent.js";
import themes from "../../../../../src/utils/theme/themes.js";
import type { BokehPreviewPair, BokehPreviewResult } from "../../../../../src/optics/aberrationAnalysis.js";

vi.mock("../../../../../src/components/display/analysis/BokehPreviewGrid.js", () => ({
  default: ({ result }: { result: BokehPreviewResult }) => <div data-testid="bokeh-grid">{result.defocusDeltaMm}</div>,
}));

const PREVIEW = {
  label: "Infinity source",
  defocusDeltaMm: 0.1,
  sharedHalfRangeMm: 0.2,
  usableFieldCount: 0,
  fields: [],
} as unknown as BokehPreviewResult;

afterEach(() => cleanup());

describe("BokehPreviewContent", () => {
  it("renders unavailable messaging when neither preview can be computed", () => {
    render(<BokehPreviewContent pair={{ infinity: null, nearFocus: null }} t={themes.dark} />);
    expect(screen.getByText("Insufficient focus range to compute bokeh preview for this lens.")).toBeTruthy();
  });

  it("renders infinity and near-focus preview sections when available", () => {
    const pair: BokehPreviewPair = {
      infinity: PREVIEW,
      nearFocus: { ...PREVIEW, label: "Near focus source", defocusDeltaMm: -0.1 },
    };

    render(<BokehPreviewContent pair={pair} t={themes.dark} title="Custom bokeh title" />);

    expect(screen.getByRole("heading", { name: "Custom bokeh title" })).toBeTruthy();
    expect(screen.getByText("INFINITY SOURCE")).toBeTruthy();
    expect(screen.getByText("NEAR FOCUS SOURCE")).toBeTruthy();
    expect(screen.getAllByTestId("bokeh-grid")).toHaveLength(2);
  });
});
