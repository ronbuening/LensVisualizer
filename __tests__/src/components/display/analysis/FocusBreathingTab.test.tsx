// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import FocusBreathingTab from "../../../../../src/components/display/analysis/FocusBreathingTab.js";
import { eflAtFocus } from "../../../../../src/optics/optics.js";
import { mockTheme } from "../../../../testUtils.js";
import { buildSimplePositiveElementLens } from "../../../optics/testLensFixtures.js";

describe("FocusBreathingTab", () => {
  it.each([
    [0.9, "wider FOV"],
    [1, "negligible"],
    [1.1, "narrower FOV"],
  ] as const)("labels a focal scale of %s correctly", (scale, label) => {
    const base = buildSimplePositiveElementLens();
    // Misleading catalog focal length must not change the calculated reference.
    const L = { ...base, EFL: 999 };
    const html = renderToStaticMarkup(
      <FocusBreathingTab L={L} t={mockTheme} focusT={1} zoomT={0} dynamicEFL={eflAtFocus(0, 0, L) * scale} />,
    );
    expect(html).toContain(label);
    expect(html).not.toContain("NaN");
  });

  it("renders an unavailable explanation instead of non-finite SVG geometry", () => {
    const L = buildSimplePositiveElementLens();
    const html = renderToStaticMarkup(<FocusBreathingTab L={L} t={mockTheme} focusT={0} zoomT={0} dynamicEFL={NaN} />);
    expect(html).toContain("unavailable");
    expect(html).not.toContain("<svg");
  });
});
