// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import type { Dispatch } from "react";
import ControlsBar from "../../../src/components/layout/ControlsBar.js";
import DiagramDefs from "../../../src/components/diagram/DiagramDefs.js";
import DiagramElementLayer from "../../../src/components/diagram/DiagramElementLayer.js";
import SphericalAberrationSection from "../../../src/components/display/analysis/aberrations/SphericalAberrationSection.js";
import { computeOffAxisTraceGeometry } from "../../../src/components/hooks/offAxisRayUtils.js";
import LENS_DEFAULTS from "../../../src/lens-data/defaults.js";
import SonnarRaw from "../../../src/lens-data/carl-zeiss-jena/ZeissSonnar50f15.data.js";
import buildLens from "../../../src/optics/buildLens.js";
import { doLayout } from "../../../src/optics/optics.js";
import type { SphericalAberrationResult } from "../../../src/optics/aberrationAnalysis.js";
import type { ElementShape, LensData } from "../../../src/types/optics.js";
import type { LensAction } from "../../../src/types/state.js";
import { SET_RAY_TOGGLE, createInitialState } from "../../../src/utils/state/lensReducer.js";
import themes from "../../../src/utils/theme/themes.js";

vi.mock("../../../src/utils/featureFlags.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../../src/utils/featureFlags.js")>();
  return {
    ...actual,
    ENABLE_UNIFORM_SCALING: true,
    ENABLE_ASPH_DIAMOND_FILL: true,
    ENABLE_EDGE_PROJECTION: true,
    ENABLE_REAL_RAY_LSA_DIAGNOSTIC: true,
    ENABLE_CARDINAL_ELEMENTS: true,
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
    showOffAxis: "trueAngle" as const,
    rayDensity: "normal" as const,
    rayTracksF: false,
    showChromatic: false,
    chromR: true,
    chromG: true,
    chromB: true,
    chromV: false,
    showPupils: false,
    showCardinals: false,
    showCardinalDimensions: false,
    scaleMode: "independent" as const,
    dispatch,
  };
}

afterEach(() => cleanup());

describe("enabled feature-flag behavior", () => {
  it("uses uniform optical scaling", () => {
    const lens = buildLens(data);

    expect(lens.YSC).toBe(lens.SC);
    expect(lens.svgH).toBeGreaterThanOrEqual(290);
  });

  it("renders the asphere diamond definition and fill", () => {
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

    expect(container.querySelector("#feature-asph-dm")).toBeTruthy();
    expect(container.querySelector('path[fill="url(#feature-asph-dm)"]')).toBeTruthy();
  });

  it("exposes edge projection through controls, state hydration, and trace geometry", () => {
    const dispatch = vi.fn<Dispatch<LensAction>>();
    render(<ControlsBar {...controlsProps(dispatch)} />);

    fireEvent.click(screen.getByRole("button", { name: "TRUE ∠" }));
    expect(dispatch).toHaveBeenCalledWith({ type: SET_RAY_TOGGLE, field: "showOffAxis", value: "edge" });

    const state = createInitialState({ showOffAxis: "edge" }, {}, false, ["lens"]);
    expect(state.rays.showOffAxis).toBe("edge");

    const lens = buildLens(data);
    const layout = doLayout(0, 0, lens);
    const geometry = computeOffAxisTraceGeometry({
      L: lens,
      zPos: layout.z,
      IMG_MM: layout.imgZ,
      focusT: 0,
      zoomT: 0,
      sx: (z) => z,
      sy: (y) => y,
      showOffAxis: "edge",
    });
    expect(geometry?.useEdge).toBe(true);
  });

  it("shows the real-ray LSA diagnostic and cardinal controls", () => {
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

    expect(screen.getByText("LSA")).toBeTruthy();
    expect(screen.getByRole("button", { name: "CARDINALS" })).toBeTruthy();
  });
});
