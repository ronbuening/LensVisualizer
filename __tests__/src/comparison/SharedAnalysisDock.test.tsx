// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import type { Dispatch } from "react";
import SharedAnalysisDock from "../../../src/comparison/SharedAnalysisDock.js";
import {
  LensDispatchContext,
  LensStateContext,
  PanelStateContext,
  type LensCtxValue,
} from "../../../src/utils/state/LensContext.js";
import { createInitialState } from "../../../src/utils/state/lensReducer.js";
import { CATALOG_KEYS } from "../../../src/utils/catalog/lensCatalog.js";
import themes from "../../../src/utils/theme/themes.js";
import type { LensAction, PanelsSlice } from "../../../src/types/state.js";

function renderSharedDock(panels: Partial<PanelsSlice> = {}) {
  const base = createInitialState({}, {}, true, CATALOG_KEYS);
  const state = { ...base, panels: { ...base.panels, ...panels } };
  const dispatch = vi.fn<Dispatch<LensAction>>();
  const value: LensCtxValue = { state, theme: themes.dark, isWide: true, updateURLWithSliders: vi.fn() };
  render(
    <LensStateContext.Provider value={value}>
      <LensDispatchContext.Provider value={dispatch}>
        <PanelStateContext.Provider value={state.panels}>
          <SharedAnalysisDock theme={themes.dark} />
        </PanelStateContext.Provider>
      </LensDispatchContext.Provider>
    </LensStateContext.Provider>,
  );
  return dispatch;
}

afterEach(() => cleanup());

describe("SharedAnalysisDock", () => {
  it("drives the shared drawer and zoom state for both comparison panes", () => {
    const dispatch = renderSharedDock({ analysisDrawerOpen: false, analysisDrawerTab: "aberrations" });

    fireEvent.click(screen.getByRole("button", { name: "DISTORTION" }));
    expect(dispatch).toHaveBeenCalledWith({ type: "SET_ANALYSIS_TAB", tab: "distortion" });
    expect(dispatch).toHaveBeenCalledWith({ type: "SET_PANEL_EXPANDED", panel: "analysisDrawerOpen", expanded: true });

    fireEvent.click(screen.getByRole("button", { name: "Enter zoom and pan mode" }));
    expect(dispatch).toHaveBeenCalledWith({ type: "SET_PANEL_EXPANDED", panel: "zoomPanActive", expanded: true });
  });

  it("hides while zoom/pan mode is active", () => {
    renderSharedDock({ zoomPanActive: true });

    expect(screen.queryByRole("group", { name: "Aberrations & distortions" })).toBeNull();
  });
});
