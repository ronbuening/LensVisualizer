// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { MemoryRouter } from "react-router";
import LensDiagramPanel from "../../../../src/components/layout/LensDiagramPanel.js";
import { LensDispatchContext, LensStateContext, PanelStateContext } from "../../../../src/utils/state/LensContext.js";
import { createInitialState } from "../../../../src/utils/state/lensReducer.js";
import { build, buildSimplePositiveElementLens } from "../../optics/testLensFixtures.js";
import { installMatchMediaMock } from "../../../testUtils.js";
import { replaceTextForTranslation } from "../../../translationTestUtils.js";
import themes from "../../../../src/utils/theme/themes.js";

// The real panel receives runtime lenses, so catalog I/O is unnecessary. Optics,
// diagram SVG, controls, inspector, error boundary and drawers all remain real.
vi.mock("../../../../src/utils/catalog/lensCatalog.js", () => ({ LENS_CATALOG: {} }));
const baseLens = buildSimplePositiveElementLens("translated-first");
const lenses = [
  build({
    ...baseLens.data,
    name: "First test lens",
    patentNumber: "US 10,571,651 B2",
    patentAuthors: ["Hideki Sakai", "Test Author"],
  }),
  build({
    ...baseLens.data,
    key: "translated-second",
    name: "Second test lens",
    subtitle: "Catalog description",
    patentNumber: undefined,
    patentAuthors: undefined,
    surfaces: baseLens.data.surfaces.map((s) => (s.elemId ? { ...s, R: s.R * 1.2 } : s)),
  }),
];
beforeEach(() => installMatchMediaMock());
afterEach(cleanup);

describe("translated lens views", () => {
  it.each([false, true])("survives lens, inspector, drawer and zoom-mode changes (compact=%s)", (compact) => {
    const consoleError = vi.spyOn(console, "error");
    const view = (index: number, stage = 0) => {
      const L = lenses[index];
      const initial = createInitialState(
        {},
        {},
        false,
        lenses.map((lens) => lens.data.key),
      );
      const state = {
        ...initial,
        rays: { ...initial.rays, showChromatic: stage !== 0, showOnAxis: stage !== 2 },
        sliders: { ...initial.sliders, focusT: stage ? 0.5 : 0, stopdownT: stage ? 0.2 : 0 },
        panels: {
          ...initial.panels,
          analysisDrawerOpen: stage === 3,
          analysisDrawerTab: "breathing" as const,
          focusExpanded: true,
          apertureExpanded: true,
          legendExpanded: true,
          zoomPanActive: stage === 4,
        },
      };
      return (
        <MemoryRouter>
          <LensStateContext.Provider
            value={{ state, theme: themes.dark, isWide: !compact, updateURLWithSliders: vi.fn() }}
          >
            <LensDispatchContext.Provider value={vi.fn()}>
              <PanelStateContext.Provider value={state.panels}>
                <LensDiagramPanel
                  lensKey={L.data.key}
                  runtimeLens={L}
                  scaleRatio={null}
                  panelId="main"
                  compact={compact}
                />
              </PanelStateContext.Provider>
            </LensDispatchContext.Provider>
          </LensStateContext.Provider>
        </MemoryRouter>
      );
    };
    const { container, rerender, unmount } = render(view(0));
    expect(screen.getByRole("heading", { name: "First test lens" })).toBeTruthy();
    for (const [index, stage] of [
      [0, 1],
      [0, 2],
      [0, 3],
      [1, 3],
      [1, 4],
      [1, 0],
      [0, 0],
    ]) {
      expect(replaceTextForTranslation(container)).toBeGreaterThan(0);
      rerender(view(index, stage));
      expect(screen.queryByText("Diagram Rendering Error")).toBeNull();
      expect(container.querySelector("svg")).not.toBeNull();
    }
    const element = screen.getByRole("button", { name: /Select lens element/ });
    replaceTextForTranslation(container);
    fireEvent.mouseEnter(element);
    expect(container.textContent).toContain("Glass:");
    replaceTextForTranslation(container);
    fireEvent.mouseLeave(element);
    expect(container.textContent).toContain("element for optical details");
    replaceTextForTranslation(container);
    unmount();
    expect(consoleError).not.toHaveBeenCalled();
    consoleError.mockRestore();
  });
});
