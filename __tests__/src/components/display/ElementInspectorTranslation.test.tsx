// @vitest-environment jsdom

import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import ElementInspector from "../../../../src/components/display/ElementInspector.js";
import { replaceTextForTranslation } from "../../../translationTestUtils.js";
import { default as themes } from "../../../../src/utils/theme/themes.js";
import type { ElementData, RuntimeLens } from "../../../../src/types/optics.js";

const mockTheme = themes.dark;
const basicElement: ElementData = {
  id: 1,
  name: "Crown glass",
  label: "E1",
  type: "positive meniscus",
  nd: 1.518,
  vd: 64.1,
  fl: 85.3,
  glass: "S-BSL7",
};
const mockLens = { ES: [[1, 0, 1]], asphByIdx: {}, vdByIdx: {} } as unknown as RuntimeLens;
afterEach(cleanup);

describe("translated ElementInspector", () => {
  it("removes translated optional dispersion details when selecting different glass", () => {
    const chromaticLens = {
      ...mockLens,
      data: { elements: [basicElement] },
      S: [{ label: "1", elemId: 1 }],
      ES: [[1, 0, 0]],
      indexByIdx: { 0: { quality: "sellmeier", glassEntry: { name: "N-BK7" }, fn: () => 1.5 } },
    } as unknown as RuntimeLens;
    const view = (L: RuntimeLens) => <ElementInspector info={basicElement} L={L} t={mockTheme} showChromatic={true} />;
    const { container, rerender, unmount } = render(view(chromaticLens));
    replaceTextForTranslation(container);
    rerender(
      view({ ...chromaticLens, indexByIdx: { 0: { quality: "abbe", fn: () => 1.6 } } } as unknown as RuntimeLens),
    );
    expect(screen.getByText("Abbe estimate")).toBeTruthy();
    expect(container.textContent).not.toContain("N-BK7");
    replaceTextForTranslation(container);
    rerender(view(chromaticLens));
    expect(screen.getByText("Sellmeier (N-BK7)")).toBeTruthy();
    replaceTextForTranslation(container);
    unmount();
  });

  it("updates translated optional aspheric coefficients without leaving stale values", () => {
    const asphericLens = {
      ...mockLens,
      S: [{ label: "1", elemId: 1 }],
      ES: [[1, 0, 1]],
      asphByIdx: { 0: { K: -1, A4: 0.01, A6: 0.001 } },
    } as unknown as RuntimeLens;
    const view = (L: RuntimeLens) => <ElementInspector info={basicElement} L={L} t={mockTheme} showChromatic={false} />;
    const { container, rerender } = render(view(asphericLens));
    expect(screen.getByText(/K=-1.00e\+0 A4=/)).toBeTruthy();
    replaceTextForTranslation(container);
    rerender(view({ ...asphericLens, asphByIdx: { 0: { K: -2 } } } as unknown as RuntimeLens));
    expect(screen.getByText("K=-2.00e+0")).toBeTruthy();
    expect(container.textContent).not.toContain("A4=");
    expect(container.textContent).not.toContain("A6=");
  });
});
