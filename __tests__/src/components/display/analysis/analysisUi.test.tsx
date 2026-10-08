// @vitest-environment jsdom

import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import {
  AnalysisMetricRow,
  AberrationValueDisplay,
} from "../../../../../src/components/display/analysis/analysisUi.js";
import themes from "../../../../../src/utils/theme/themes.js";
import { replaceTextForTranslation } from "../../../../translationTestUtils.js";

afterEach(cleanup);

describe("translated analysis values", () => {
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
