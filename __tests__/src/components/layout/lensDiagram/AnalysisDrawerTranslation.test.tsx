// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import AnalysisDrawer from "../../../../../src/components/layout/AnalysisDrawer.js";
import AnalysisDrawerContent from "../../../../../src/components/layout/lensDiagram/AnalysisDrawerContent.js";
import { ANALYSIS_TABS } from "../../../../../src/components/layout/lensDiagram/analysisTabs.js";
import { build, buildSimplePositiveElementLens, apertureAt } from "../../../optics/testLensFixtures.js";
import { doLayout, eflAtFocus, computeAnalysisFieldGeometryAtState } from "../../../../../src/optics/optics.js";
import { installMatchMediaMock } from "../../../../testUtils.js";
import { replaceTextForTranslation } from "../../../../translationTestUtils.js";
import type { AnalysisTabId } from "../../../../../src/types/state.js";
import themes from "../../../../../src/utils/theme/themes.js";

// MTF's worker-driven transitions have their own real-engine test in MtfTab.test.tsx.
const tabs = ANALYSIS_TABS.filter((tab) => tab.id !== "mtf");
const firstLens = buildSimplePositiveElementLens("translation-first");
const lenses = [
  firstLens,
  build({
    ...firstLens.data,
    key: "translation-second",
    name: "Second fixture",
    surfaces: firstLens.data.surfaces.map((surface) => (surface.elemId ? { ...surface, R: surface.R * 1.2 } : surface)),
  }),
];
beforeEach(() => installMatchMediaMock());
afterEach(cleanup);

describe("translated analysis drawers", () => {
  it.each(tabs)("updates, switches lenses, closes and reopens $id", ({ id }) => {
    const onClose = vi.fn();
    const onTabChange = vi.fn();
    const view = (index: number, focusT: number, open = true, showTabs = true, activeTab: AnalysisTabId = id) => {
      const L = lenses[index];
      const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, focusT > 0 ? 0.35 : 0);
      return (
        <AnalysisDrawer
          open={open}
          onClose={onClose}
          activeTab={activeTab}
          onTabChange={onTabChange}
          tabs={ANALYSIS_TABS}
          t={themes.dark}
          showTabs={showTabs}
        >
          <AnalysisDrawerContent
            activeTab={activeTab}
            L={L}
            t={themes.dark}
            zPos={[...doLayout(focusT, 0, L).z]}
            focusT={focusT}
            zoomT={0}
            dynamicEFL={eflAtFocus(focusT, 0, L)}
            currentEPSD={currentEPSD}
            currentPhysStopSD={currentPhysStopSD}
            fNumber={focusT > 0 ? 5.6 : 2}
            fieldGeometry={computeAnalysisFieldGeometryAtState(focusT, 0, L)}
            sliderInteracting={true}
            aberrationsExpanded={true}
            onAberrationsExpandedChange={vi.fn()}
          />
        </AnalysisDrawer>
      );
    };
    const { container, rerender, unmount } = render(view(0, 0));
    expect(replaceTextForTranslation(container)).toBeGreaterThan(10);
    rerender(view(0, 0.5));
    expect(container.textContent?.length).toBeGreaterThan(100);
    replaceTextForTranslation(container);
    rerender(view(1, 0.25, true, false));
    expect(screen.getByRole("region").getAttribute("aria-label")).toContain("analysis");
    replaceTextForTranslation(container);
    fireEvent.keyDown(document, { key: "Escape" });
    expect(onClose).toHaveBeenCalledTimes(1);
    rerender(view(1, 0.25, false, false));
    expect(container.firstElementChild?.hasAttribute("inert")).toBe(true);
    rerender(view(1, 0.25));
    replaceTextForTranslation(container);
    fireEvent.click(screen.getByRole("button", { name: "SUMMARY" }));
    expect(onTabChange).toHaveBeenCalledWith("summary");
    rerender(view(1, 0.25, true, true, "summary"));
    replaceTextForTranslation(container);
    rerender(view(0, 0, true, true, id));
    unmount();
  });
});
