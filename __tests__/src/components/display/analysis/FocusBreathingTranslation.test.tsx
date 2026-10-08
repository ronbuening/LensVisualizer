// @vitest-environment jsdom
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import FocusBreathingTab from "../../../../../src/components/display/analysis/FocusBreathingTab.js";
import { buildSimplePositiveElementLens } from "../../../optics/testLensFixtures.js";
import { replaceTextForTranslation } from "../../../../translationTestUtils.js";
import themes from "../../../../../src/utils/theme/themes.js";
afterEach(cleanup);
it("keeps translated breathing percentages current when their sign changes", () => {
  const L = buildSimplePositiveElementLens();
  const view = (dynamicEFL: number) => (
    <FocusBreathingTab L={L} t={themes.dark} focusT={0.5} zoomT={0} dynamicEFL={dynamicEFL} />
  );
  const { container, rerender, unmount } = render(view(L.EFL));
  const currentRow = screen.getByText("CURRENT").parentElement!;
  const eflRow = screen.getByText("EFL").parentElement!;
  for (const ratio of [0.99, 1.01, 1]) {
    expect(replaceTextForTranslation(container)).toBeGreaterThan(0);
    rerender(view(L.EFL * ratio));
    expect(currentRow.textContent).toContain(ratio < 1 ? "-1.0%" : ratio > 1 ? "+1.0%" : "+0.0%");
    expect(eflRow.textContent).toContain(`${(L.EFL * ratio).toFixed(1)} mm`);
  }
  unmount();
});
