// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import type { Dispatch } from "react";
import ControlsBar from "../../../src/components/layout/ControlsBar.js";
import DiagramDefs from "../../../src/components/diagram/DiagramDefs.js";
import DiagramElementLayer from "../../../src/components/diagram/DiagramElementLayer.js";
import SphericalAberrationSection from "../../../src/components/display/analysis/aberrations/SphericalAberrationSection.js";
import LENS_DEFAULTS from "../../../src/lens-data/defaults.js";
import SonnarRaw from "../../../src/lens-data/carl-zeiss-jena/ZeissSonnar50f15.data.js";
import buildLens from "../../../src/optics/buildLens.js";
import type { SphericalAberrationResult } from "../../../src/optics/aberrationAnalysis.js";
import type { ElementShape, LensData } from "../../../src/types/optics.js";
import type { LensAction } from "../../../src/types/state.js";
import { SET_RAY_TOGGLE, createInitialState } from "../../../src/utils/state/lensReducer.js";
import themes from "../../../src/utils/theme/themes.js";

vi.mock("../../../src/utils/featureFlags.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../../src/utils/featureFlags.js")>();
  return {
    ...actual,
    ENABLE_UNIFORM_SCALING: false,
    ENABLE_ASPH_DIAMOND_FILL: false,
    ENABLE_EDGE_PROJECTION: false,
    ENABLE_REAL_RAY_LSA_DIAGNOSTIC: false,
    ENABLE_CARDINAL_ELEMENTS: false,
  };
});

const data = { ...LENS_DEFAULTS, ...SonnarRaw } as LensData;

function saResult(): SphericalAberrationResult {
  return {
    nearAxisFraction: 0.1,
    marginalFraction: 0.95,
    longitudinalSaMm: -0.012,
    longitudinalSaUm: -12,
    currentPlaneRmsMm: 0.008,
    currentPlaneRmsUm: 8,
    currentPlanePeakMm: 0.012,
    currentPlanePeakUm: 12,
    bestFocusRmsMm: 0.003,
    bestFocusRmsUm: 3,
    bestFocusPeakMm: 0.005,
    bestFocusPeakUm: 5,
    nearAxisRealIntercept: 100,
    marginalRealIntercept: 99.988,
    nearAxisImageHeight: 0,
    imagePlaneZ: 105,
    bestFocusZ: 104.2,
    bestFocusShiftMm: -0.8,
    validSampleCount: 10,
  };
}

function controlsProps(dispatch: Dispatch<LensAction>) {
  return {
    theme: themes.dark,
    compact: false,
    showScaleMode: false,
    showOnAxis: true,
    showOffAxis: "edge" as const,
    rayDensity: "normal" as const,
    rayTracksF: false,
    showChromatic: false,
    chromR: true,
    chromG: true,
    chromB: true,
    chromV: false,
    showPupils: false,
    showCardinals: true,
    showCardinalDimensions: true,
    scaleMode: "independent" as const,
    dispatch,
  };
}

afterEach(() => cleanup());

describe("disabled feature-flag behavior", () => {
  it("uses the configured anisotropic optical scaling", () => {
    const lens = buildLens(data);
    const maxSD = Math.max(...lens.S.map((surface) => surface.sd));
    const uncappedYsc = (data.svgH * data.yScFill) / maxSD;
    const expectedYsc =
      data.maxAspectRatio > 0 && uncappedYsc / lens.SC > data.maxAspectRatio
        ? lens.SC * data.maxAspectRatio
        : uncappedYsc;

    expect(lens.YSC).toBeCloseTo(expectedYsc, 10);
    expect(lens.YSC).not.toBe(lens.SC);
    expect(lens.svgH).toBe(data.svgH);
  });

  it("omits the asphere diamond definition and fill", () => {
    const lens = buildLens(data);
    const eid = lens.elements[0]!.id;
    const shapes: ElementShape[] = [
      {
        eid,
        d: "M 0 0 L 10 0 L 10 10 Z",
        z1: 0,
        z2: 10,
        asphPaths: [{ surfIdx: 0, pathD: "M 0 0 L 0 10", halfPathD: "M 0 0 L 5 10", labelX: 0, labelY: 0 }],
        surfaceAccentPaths: [],
      },
    ];

    const { container } = render(
      <svg>
        <DiagramDefs dark={true} filterId="feature" theme={themes.dark} />
        <DiagramElementLayer
          lens={lens}
          shapes={shapes}
          theme={themes.dark}
          filterId="feature"
          act={null}
          sel={null}
          onHover={vi.fn()}
          onSelect={vi.fn()}
        />
      </svg>,
    );

    expect(container.querySelector("#feature-asph-dm")).toBeNull();
    expect(container.querySelector('path[fill="url(#feature-asph-dm)"]')).toBeNull();
  });

  it("removes edge projection from controls and persisted state", () => {
    const dispatch = vi.fn<Dispatch<LensAction>>();
    render(<ControlsBar {...controlsProps(dispatch)} />);

    fireEvent.click(screen.getByRole("button", { name: "OFF-AXIS" }));
    expect(dispatch).toHaveBeenCalledWith({ type: SET_RAY_TOGGLE, field: "showOffAxis", value: "off" });

    const state = createInitialState({ showOffAxis: "edge" }, {}, false, ["lens"]);
    expect(state.rays.showOffAxis).toBe("trueAngle");
  });

  it("hides the real-ray LSA diagnostic and cardinal controls", () => {
    const dispatch = vi.fn<Dispatch<LensAction>>();
    render(
      <>
        <SphericalAberrationSection
          result={saResult()}
          profile={[]}
          blurCharacter={null}
          expanded={false}
          onToggle={vi.fn()}
          theme={themes.dark}
        />
        <ControlsBar {...controlsProps(dispatch)} />
      </>,
    );

    expect(screen.queryByText("LSA")).toBeNull();
    expect(screen.queryByRole("button", { name: "CARDINALS" })).toBeNull();
  });
});
