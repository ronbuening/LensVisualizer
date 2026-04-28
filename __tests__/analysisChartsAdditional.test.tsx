// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import FieldCurvatureMeanPlot from "../src/components/display/FieldCurvatureMeanPlot.js";
import VignettingChart from "../src/components/display/VignettingChart.js";
import LCAInsetWidget from "../src/components/diagram/LCAInsetWidget.js";
import LCAOverlayContent from "../src/components/diagram/LCAOverlayContent.js";
import {
  angleTicks,
  formatSignedCompactTick,
  linearScale,
  niceTicks,
  svgPath,
  symmetricDomain,
} from "../src/components/display/charts/chartMath.js";
import themes from "../src/utils/themes.js";
import type { FieldCurvatureResult } from "../src/optics/aberrationAnalysis.js";
import type { FieldCurvatureFieldResult } from "../src/optics/aberration/types.js";
import type { VignettingSample } from "../src/optics/vignetteAnalysis.js";

function field(
  fieldFraction: number,
  petzvalShiftMm: number,
  chiefImageHeight: number,
  usable = true,
): FieldCurvatureFieldResult {
  return {
    fieldFraction,
    label: `${fieldFraction}`,
    fieldAngleDeg: fieldFraction * 20,
    sampleCount: 4,
    validSampleCount: usable ? 4 : 0,
    clippedSampleCount: usable ? 0 : 4,
    chiefImageHeight,
    tangentialBestFocusZ: 0,
    sagittalBestFocusZ: 0,
    petzvalBestFocusZ: 0,
    tangentialShiftMm: 0,
    sagittalShiftMm: 0,
    petzvalShiftMm,
    astigmaticDifferenceMm: 0,
    astigmaticDifferenceUm: 0,
    chromaticFieldShifts: null,
    usable,
  };
}

function fieldCurvatureResult(fields: ReturnType<typeof field>[]): FieldCurvatureResult {
  return {
    fieldFractions: fields.map((sample) => sample.fieldFraction),
    curveFieldFractions: fields.map((sample) => sample.fieldFraction),
    fields,
    curveFields: fields,
    usableFieldCount: fields.filter((sample) => sample.usable).length,
    imagePlaneZ: 0,
    sharedFocusShiftHalfRangeMm: 0,
    maxAstigmaticDifferenceMm: 0,
    maxAstigmaticDifferenceUm: 0,
    edgeTangentialShiftMm: 0,
    edgeSagittalShiftMm: 0,
    chromaticFocusSpreadMm: null,
  };
}

const vignetteSamples: VignettingSample[] = [
  { fieldAngleDeg: 0, geometricTransmission: 1, relativeIllumination: 1 },
  { fieldAngleDeg: 10, geometricTransmission: 0.82, relativeIllumination: 0.76 },
  { fieldAngleDeg: 20, geometricTransmission: 0.55, relativeIllumination: 0.43 },
];

describe("analysis chart coverage", () => {
  afterEach(() => cleanup());

  it("renders the Petzval mean plot from usable fields only and shows capped scale state", () => {
    const result = fieldCurvatureResult([
      field(0, 0, 0),
      field(0.5, 2.5, 1),
      field(1, -0.6, 1),
      field(0.75, 99, 99, false),
    ]);

    const { container } = render(<FieldCurvatureMeanPlot result={result} t={themes.dark} />);

    expect(screen.getByText(/Petzval reference curve/i)).toBeTruthy();
    expect(screen.getByText("Current image plane")).toBeTruthy();
    expect(screen.getByText("Scale capped to image circle")).toBeTruthy();
    expect(container.querySelector("polyline")?.getAttribute("points")).not.toContain("99");
    expect(container.querySelectorAll("circle")).toHaveLength(3);
    expect(container.querySelector("polygon")).toBeTruthy();
  });

  it("keeps the Petzval mean plot stable when no field samples are usable", () => {
    const result = fieldCurvatureResult([field(0.5, 3, 2, false)]);
    const { container } = render(<FieldCurvatureMeanPlot result={result} t={themes.dark} />);

    expect(screen.getByText("Current image plane")).toBeTruthy();
    expect(container.querySelector("polyline")).toBeNull();
    expect(container.querySelector("polygon")).toBeNull();
  });

  it("renders vignetting fallback for insufficient samples", () => {
    render(<VignettingChart samples={[vignetteSamples[0]]} t={themes.dark} />);

    expect(screen.getByText("Not enough data to plot vignetting curve.")).toBeTruthy();
  });

  it("renders vignetting curves, ticks, labels, and custom dimensions", () => {
    const { container } = render(<VignettingChart samples={vignetteSamples} t={themes.dark} width={420} height={260} />);

    expect(container.querySelector("svg")?.getAttribute("viewBox")).toBe("0 0 420 260");
    expect(screen.getByText("Geometric")).toBeTruthy();
    expect(screen.getByText("Relative (cos⁴)")).toBeTruthy();
    expect(screen.getByText("20°")).toBeTruthy();
    expect(screen.getByText("Field angle (°)")).toBeTruthy();
    expect(container.querySelectorAll("path")).toHaveLength(2);
    expect(container.querySelectorAll("circle")).toHaveLength(6);
  });

  it("renders LCA inset channels, formatting, custom placement, and click handling", () => {
    const onClick = vi.fn();
    const { container } = render(
      <svg>
        <LCAInsetWidget
          chromSpread={{ lcaMm: 0.0004, tcaMm: 0, intercepts: { R: -0.02, G: 0, B: 0.03 }, imgHeights: {} }}
          effectiveSC={1}
          IMG_MM={0}
          IX={100}
          svgW={400}
          sy={() => 80}
          t={themes.dark}
          width={160}
          height={140}
          originX={12}
          originY={18}
          fontScale={1.4}
          onClick={onClick}
        />
      </svg>,
    );

    expect(screen.getByText("LCA")).toBeTruthy();
    expect(screen.getByText("R")).toBeTruthy();
    expect(screen.getByText("G")).toBeTruthy();
    expect(screen.getByText("B")).toBeTruthy();
    expect(screen.getByText("0.4 µm")).toBeTruthy();
    expect(container.querySelector("rect")?.getAttribute("x")).toBe("12");

    fireEvent.click(container.querySelector("g")!);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("renders on-axis and off-axis LCA overlay panels side by side when both spreads are available", () => {
    render(
      <LCAOverlayContent
        chromSpread={{ lcaMm: 0.0004, tcaMm: 0, intercepts: { R: -0.02, G: 0, B: 0.03 }, imgHeights: {} }}
        chromaticSpreads={{
          onAxis: { lcaMm: 0.0004, tcaMm: 0, intercepts: { R: -0.02, G: 0, B: 0.03 }, imgHeights: {} },
          offAxis: { lcaMm: 0.0008, tcaMm: 0.0005, intercepts: { R: -0.04, G: 0, B: 0.04 }, imgHeights: {} },
        }}
        effectiveSC={1}
        IMG_MM={0}
        t={themes.dark}
      />,
    );

    expect(screen.getByText("ON-AXIS")).toBeTruthy();
    expect(screen.getByText("OFF-AXIS")).toBeTruthy();
    expect(screen.getByText("0.4 µm")).toBeTruthy();
    expect(screen.getByText("0.8 µm")).toBeTruthy();
  });

  it("shares chart math helpers for scales, domains, ticks, and SVG paths", () => {
    const scale = linearScale(-1, 1, 100, 0);
    expect(scale(-1)).toBe(100);
    expect(scale(0)).toBe(50);
    expect(scale(1)).toBe(0);
    expect(symmetricDomain(2, 1.2, 0.5)).toEqual([-2.4, 2.4]);
    expect(niceTicks(-1, 1, 4)).toContain(0);
    expect(angleTicks(23)).toEqual([0, 5, 10, 15, 20]);
    expect(formatSignedCompactTick(0.25)).toBe("+0.25");
    expect(svgPath([{ x: 0, y: 1 }, { x: 2, y: 3 }], (p) => p.x, (p) => p.y)).toBe("M0.0,1.0 L2.0,3.0");
  });

  it("auto-flips the LCA inset when it would overflow the right edge", () => {
    const { container } = render(
      <svg>
        <LCAInsetWidget
          chromSpread={{ lcaMm: 0.02, tcaMm: 0, intercepts: { G: 0 }, imgHeights: {} }}
          effectiveSC={1}
          IMG_MM={0}
          IX={260}
          svgW={300}
          sy={() => 80}
          t={themes.dark}
        />
      </svg>,
    );

    expect(container.querySelector("rect")?.getAttribute("x")).toBe("140");
    expect(screen.getByText("20 µm")).toBeTruthy();
  });
});
