// @vitest-environment jsdom

import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import {
  AnalysisMetricRow,
  AberrationValueDisplay,
} from "../../../../../src/components/display/analysis/analysisUi.js";
import themes from "../../../../../src/utils/theme/themes.js";
import { auditDetachedReactText, replaceTextForTranslation } from "../../../../translationTestUtils.js";
import { textRun } from "../../../../../src/utils/text.js";

afterEach(cleanup);

describe("translated analysis values", () => {
  it("counts every React write into text a translator detached, even when the value changes back", () => {
    const mixed = (value: number) => <span>A: {value}</span>;
    const owned = (value: number) => <span>{textRun("A: ", value)}</span>;
    for (const [view, writes] of [
      [mixed, 2],
      [owned, 0],
    ] as const) {
      const { container, rerender, unmount } = render(view(1));
      replaceTextForTranslation(container);
      expect(auditDetachedReactText(container)).toEqual({ detached: view === mixed ? 2 : 0, staleWrites: 0 });
      rerender(view(2));
      rerender(view(1));
      expect(auditDetachedReactText(container).staleWrites).toBe(writes);
      unmount();
    }
  });

  it.each([undefined, "mm"])("updates metrics with suffix %s and preserves other translated text", (suffix) => {
    const { container, rerender } = render(
      <AnalysisMetricRow label="Distance" value={10} suffix={suffix} t={themes.dark} />,
    );
    expect(replaceTextForTranslation(container)).toBeGreaterThan(0);
    const translatedLabel = screen.getByText("DISTANCE");
    translatedLabel.textContent = "Entfernung";
    rerender(<AnalysisMetricRow label="Distance" value={20} suffix={suffix} t={themes.dark} />);
    expect(screen.getByText("20")).toBeTruthy();
    expect(screen.queryByText("10")).toBeNull();
    expect(screen.getByText("Entfernung")).toBe(translatedLabel);
    expect(translatedLabel.isConnected).toBe(true);
    replaceTextForTranslation(container);
    rerender(<AnalysisMetricRow label="Distance" value="n/a" t={themes.dark} />);
    expect(screen.getByText("n/a")).toBeTruthy();
    expect(screen.queryByText("20")).toBeNull();
    expect(screen.queryByText("mm")).toBeNull();
  });

  it("updates signed compound aberration text after repeated translation", () => {
    const { container, rerender } = render(<AberrationValueDisplay label="Edge" value="T +1 / S -2" t={themes.dark} />);
    for (const value of ["T -3 / S +4", "n/a", "T +1 / S -2"]) {
      replaceTextForTranslation(container);
      rerender(<AberrationValueDisplay label="Edge" value={value} t={themes.dark} />);
      expect(screen.getByText(value)).toBeTruthy();
    }
  });
});
