// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import ChromaticFieldCurvaturePlot from "../../../../../src/components/display/analysis/ChromaticFieldCurvaturePlot.js";
import FieldCurvatureMeanPlot from "../../../../../src/components/display/analysis/FieldCurvatureMeanPlot.js";
import VignettingChart from "../../../../../src/components/display/analysis/VignettingChart.js";
import LocaInsetWidget from "../../../../../src/components/diagram/LocaInsetWidget.js";
import ChromaticOverlayContent from "../../../../../src/components/diagram/ChromaticOverlayContent.js";
import ChromaticFanSpreadWidget from "../../../../../src/components/diagram/ChromaticFanSpreadWidget.js";
import {
  angleTicks,
  formatSignedCompactTick,
  linearScale,
  niceTicks,
  svgPath,
  symmetricDomain,
} from "../../../../../src/components/display/analysis/charts/chartMath.js";
import themes from "../../../../../src/utils/theme/themes.js";
import type { FieldCurvatureResult } from "../../../../../src/optics/aberrationAnalysis.js";
import type { FieldCurvatureFieldResult } from "../../../../../src/optics/aberration/types.js";
import type { LateralColorCurveResult } from "../../../../../src/optics/compat.js";
import type { VignettingSample } from "../../../../../src/optics/vignetteAnalysis.js";

function field(
  fieldFraction: number,
  petzvalShiftMm: number,
  chiefImageHeight: number,
  usable = true,
  chromaticFieldShifts: FieldCurvatureFieldResult["chromaticFieldShifts"] = null,
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
    chromaticFieldShifts,
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

  it("renders violet values in chromatic field-curvature traces", () => {
    const shifts = (base: number): FieldCurvatureFieldResult["chromaticFieldShifts"] => [
      { channel: "R", tangentialShiftMm: base - 0.03, sagittalShiftMm: base - 0.02 },
      { channel: "G", tangentialShiftMm: base, sagittalShiftMm: base + 0.01 },
      { channel: "B", tangentialShiftMm: base + 0.02, sagittalShiftMm: base + 0.03 },
      { channel: "V", tangentialShiftMm: base + 0.04, sagittalShiftMm: base + 0.05 },
    ];
    const result = fieldCurvatureResult([
      field(0, 0, 0, true, shifts(0)),
      field(0.5, 0, 0, true, shifts(0.03)),
      field(1, 0, 0, true, shifts(0.06)),
    ]);

    const { container } = render(<ChromaticFieldCurvaturePlot result={result} t={themes.dark} />);

    expect(screen.getByText("V T/S")).toBeTruthy();
    expect(container.querySelectorAll("polyline")).toHaveLength(8);
  });

  it("renders vignetting fallback for insufficient samples", () => {
    render(<VignettingChart samples={[vignetteSamples[0]]} t={themes.dark} />);

    expect(screen.getByText("Not enough data to plot vignetting curve.")).toBeTruthy();
  });

  it("renders vignetting curves, ticks, labels, and custom dimensions", () => {
    const { container } = render(
      <VignettingChart samples={vignetteSamples} t={themes.dark} width={420} height={260} />,
    );

    expect(container.querySelector("svg")?.getAttribute("viewBox")).toBe("0 0 420 260");
    expect(screen.getByText("Geometric")).toBeTruthy();
    expect(screen.getByText("Relative (cos⁴)")).toBeTruthy();
    expect(screen.getByText("20°")).toBeTruthy();
    expect(screen.getByText("Field angle (°)")).toBeTruthy();
    expect(container.querySelectorAll("path")).toHaveLength(2);
    expect(container.querySelectorAll("circle")).toHaveLength(6);
  });

  it("renders LoCA inset channels, formatting, custom placement, and click handling", () => {
    const onClick = vi.fn();
    const { container } = render(
      <svg>
        <LocaInsetWidget
          chromaticRayFanSpread={{
            axialInterceptSpreadMm: 0.0004,
            imagePlaneHeightSpreadMm: 0,
            axialIntercepts: { R: -0.02, G: 0, B: 0.03 },
            imagePlaneHeights: {},
          }}
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
          dispersionQuality="lineIndices"
        />
      </svg>,
    );

    expect(screen.getByText("LoCA")).toBeTruthy();
    expect(screen.getByText("R")).toBeTruthy();
    expect(screen.getByText("G")).toBeTruthy();
    expect(screen.getByText("B")).toBeTruthy();
    expect(screen.getByText("Line indices")).toBeTruthy();
    expect(screen.getByText("0.4 µm")).toBeTruthy();
    expect(container.querySelector("rect")?.getAttribute("x")).toBe("12");

    fireEvent.click(container.querySelector("g")!);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("renders off-axis fan-spread inset channels and image-plane formatting", () => {
    render(
      <svg>
        <ChromaticFanSpreadWidget
          chromaticRayFanSpread={{
            axialInterceptSpreadMm: 0,
            imagePlaneHeightSpreadMm: 0.0005,
            axialIntercepts: {},
            imagePlaneHeights: { R: -0.00025, G: 0, B: 0.00025 },
          }}
          effectiveSC={1}
          t={themes.dark}
          width={160}
          height={140}
          originX={12}
          originY={18}
          fontScale={1.4}
          dispersionQuality="lineIndices"
        />
      </svg>,
    );

    expect(screen.getByText("FAN")).toBeTruthy();
    expect(screen.getByText("Line indices")).toBeTruthy();
    expect(screen.queryByText("IMAGE HEIGHT")).toBeNull();
    expect(screen.getByText("R")).toBeTruthy();
    expect(screen.getByText("G")).toBeTruthy();
    expect(screen.getByText("B")).toBeTruthy();
    expect(screen.getByText("0.5 µm")).toBeTruthy();
  });

  it("renders LoCA, lateral color/TCA, and off-axis fan spread as separate chromatic overlay panels", () => {
    const lateralColor: LateralColorCurveResult = {
      channels: ["R", "G", "B"],
      referenceChannel: "G",
      fieldFractions: [0, 1],
      fields: [
        {
          fieldFraction: 0,
          label: "0%",
          fieldAngleDeg: 0,
          referenceChannel: "G",
          referenceImageHeightMm: 0,
          lateralSpreadMm: 0.0001,
          lateralSpreadUm: 0.1,
          samples: [
            { channel: "R", imageHeightMm: -0.00005, relativeHeightMm: -0.00005, usable: true, clipped: false },
            { channel: "G", imageHeightMm: 0, relativeHeightMm: 0, usable: true, clipped: false },
            { channel: "B", imageHeightMm: 0.00005, relativeHeightMm: 0.00005, usable: true, clipped: false },
          ],
          validChannelCount: 3,
          usable: true,
        },
        {
          fieldFraction: 1,
          label: "100%",
          fieldAngleDeg: 20,
          referenceChannel: "G",
          referenceImageHeightMm: 12,
          lateralSpreadMm: 0.0003,
          lateralSpreadUm: 0.3,
          samples: [
            { channel: "R", imageHeightMm: 11.99985, relativeHeightMm: -0.00015, usable: true, clipped: false },
            { channel: "G", imageHeightMm: 12, relativeHeightMm: 0, usable: true, clipped: false },
            { channel: "B", imageHeightMm: 12.00015, relativeHeightMm: 0.00015, usable: true, clipped: false },
          ],
          validChannelCount: 3,
          usable: true,
        },
      ],
      usableFieldCount: 2,
      maxLateralSpreadMm: 0.0003,
      maxLateralSpreadUm: 0.3,
      imagePlaneZ: 40,
      halfFieldDeg: 20,
    };
    const { container } = render(
      <ChromaticOverlayContent
        chromaticRayFanSpread={{
          axialInterceptSpreadMm: 0.0004,
          imagePlaneHeightSpreadMm: 0,
          axialIntercepts: { R: -0.02, G: 0, B: 0.03 },
          imagePlaneHeights: {},
        }}
        chromaticRayFanSpreads={{
          onAxis: {
            axialInterceptSpreadMm: 0.0004,
            imagePlaneHeightSpreadMm: 0,
            axialIntercepts: { R: -0.02, G: 0, B: 0.03 },
            imagePlaneHeights: {},
          },
          offAxis: {
            axialInterceptSpreadMm: 0.0008,
            imagePlaneHeightSpreadMm: 0.0005,
            axialIntercepts: { R: -0.04, G: 0, B: 0.04 },
            imagePlaneHeights: { R: -0.00025, G: 0, B: 0.00025 },
          },
        }}
        lateralColor={lateralColor}
        effectiveSC={1}
        IMG_MM={0}
        t={themes.dark}
        dispersionQuality="lineIndices"
      />,
    );

    expect(screen.getByText("LoCA")).toBeTruthy();
    expect(screen.getByText("FAN")).toBeTruthy();
    expect(screen.getAllByText("Line indices")).toHaveLength(2);
    expect(screen.getByText("LoCA / Axial Color")).toBeTruthy();
    expect(screen.getByText("Lateral Color (TCA)")).toBeTruthy();
    expect(screen.getByText("Off-Axis Fan Spread")).toBeTruthy();
    expect(screen.getByText(/OFF-AXIS FAN SPREAD/)).toBeTruthy();
    expect(screen.getByText(/LATERAL COLOR \/ TCA/)).toBeTruthy();
    expect(screen.getByText(/Longitudinal color is the wavelength focus spread/)).toBeTruthy();
    expect(screen.getByText(/Lateral color is the chief-ray image-height separation/)).toBeTruthy();
    expect(screen.getByText(/It is not the chief-ray lateral color\/TCA metric/)).toBeTruthy();
    expect(screen.getByText("0.4 µm")).toBeTruthy();
    expect(screen.getAllByText("0.5 µm").length).toBeGreaterThan(0);
    expect(screen.queryByText("0.8 µm")).toBeNull();

    const charts = Array.from(container.querySelectorAll("svg"));
    expect(charts.length).toBeGreaterThanOrEqual(3);
    expect(charts[0].getAttribute("width")).toBe("340");
    expect(charts[0].getAttribute("height")).toBe("280");
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
    expect(
      svgPath(
        [
          { x: 0, y: 1 },
          { x: 2, y: 3 },
        ],
        (p) => p.x,
        (p) => p.y,
      ),
    ).toBe("M0.0,1.0 L2.0,3.0");
  });

  it("auto-flips the LoCA inset when it would overflow the right edge", () => {
    const { container } = render(
      <svg>
        <LocaInsetWidget
          chromaticRayFanSpread={{
            axialInterceptSpreadMm: 0.02,
            imagePlaneHeightSpreadMm: 0,
            axialIntercepts: { G: 0 },
            imagePlaneHeights: {},
          }}
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
