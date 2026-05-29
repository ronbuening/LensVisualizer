// @vitest-environment jsdom

import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import themes from "../../../../../src/utils/theme/themes.js";
import { buildSimplePositiveElementLens } from "../../../optics/testLensFixtures.js";

const mocks = vi.hoisted(() => ({
  preparedState: { lens: { runtime: {} }, focusT: 0, zoomT: 0, aberrationT: 0 },
  pair: { infinity: null, nearFocus: null },
}));

vi.mock("../../../../../src/components/display/analysis/usePreparedAnalysisState.js", () => ({
  default: vi.fn(() => mocks.preparedState),
}));

vi.mock("../../../../../src/components/display/analysis/useBokehPreviewData.js", () => ({
  default: vi.fn(() => mocks.pair),
}));

vi.mock("../../../../../src/components/display/analysis/BokehPreviewContent.js", () => ({
  default: ({ title }: { title: string }) => <div data-testid="bokeh-content">{title}</div>,
}));

import BokehTab from "../../../../../src/components/display/analysis/BokehTab.js";

afterEach(() => cleanup());

describe("BokehTab", () => {
  it("prepares analysis state and renders the bokeh preview content", () => {
    render(
      <BokehTab
        L={buildSimplePositiveElementLens("test-bokeh-tab")}
        t={themes.dark}
        focusT={0.2}
        zoomT={0}
        currentEPSD={5}
        currentPhysStopSD={4}
      />,
    );

    expect(screen.getByTestId("bokeh-content").textContent).toBe("Bokeh / Defocused Point Image");
  });
});
