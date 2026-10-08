// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import MtfDataWarning from "../../../../../../src/components/display/analysis/mtf/MtfDataWarning.js";
import type { MtfDataLimitation } from "../../../../../../src/types/mtf.js";
import { mockTheme } from "../../../../../testUtils.js";
import { replaceTextForTranslation } from "../../../../../translationTestUtils.js";

const NOTE: MtfDataLimitation = { kind: "source-erratum", text: "One printed value is corrected.", blocking: false };
const GAP: MtfDataLimitation = { kind: "scale", text: "Frequencies are at the prescription's scale.", blocking: true };

function renderWarning(limitations: MtfDataLimitation[], acknowledged = false) {
  const onAcknowledge = vi.fn();
  render(
    <MtfDataWarning limitations={limitations} acknowledged={acknowledged} onAcknowledge={onAcknowledge} t={mockTheme}>
      <figure aria-label="chart" />
    </MtfDataWarning>,
  );
  return onAcknowledge;
}

describe("MTF data warning", () => {
  afterEach(cleanup);
  it("lists a non-blocking note beside the chart without blurring it", () => {
    renderWarning([NOTE]);
    expect(screen.queryByRole("note")).toBeNull();
    expect(screen.getByRole("figure", { name: "chart" }).closest("[inert]")).toBeNull();
    expect(screen.getByText(/Notes on this lens's data \(1\)/)).toBeTruthy();
    expect(screen.getByText(NOTE.text)).toBeTruthy();
  });
  it("blurs the chart for a blocking gap and shows notes with it", () => {
    const onAcknowledge = renderWarning([GAP, NOTE]);
    const warning = screen.getByRole("note", { name: "Limited data for this chart" });
    expect(warning.textContent).toContain(GAP.text);
    expect(warning.textContent).toContain(NOTE.text);
    expect(screen.getByRole("figure", { name: "chart" }).closest<HTMLElement>("[inert]")!.style.filter).toContain(
      "blur",
    );
    fireEvent.click(screen.getByRole("button", { name: "Show chart anyway" }));
    expect(onAcknowledge).toHaveBeenCalledOnce();
  });
  it("keeps every item one click away once the blocking gaps are dismissed", () => {
    renderWarning([GAP, NOTE], true);
    expect(screen.queryByRole("note")).toBeNull();
    expect(screen.getByText(/Limited data for this chart \(2\)/)).toBeTruthy();
  });
  it("keeps translated titles and counts current through blocking, acknowledgement and removal", () => {
    const onAcknowledge = vi.fn();
    const warning = (limitations: MtfDataLimitation[], acknowledged = false) => (
      <MtfDataWarning limitations={limitations} acknowledged={acknowledged} onAcknowledge={onAcknowledge} t={mockTheme}>
        <figure aria-label="chart" />
      </MtfDataWarning>
    );
    const { container, rerender, unmount } = render(warning([NOTE]));
    const chart = screen.getByRole("figure", { name: "chart" });
    const expectSummary = (text: string) => {
      expect(container.querySelector("summary")!.textContent!.trim()).toBe(text);
      expect(chart.closest("[inert]")).toBeNull();
      expect(screen.queryByRole("note")).toBeNull();
    };
    expectSummary("Notes on this lens's data (1)");
    replaceTextForTranslation(container);
    rerender(warning([GAP, NOTE], true));
    expectSummary("Limited data for this chart (2)");
    replaceTextForTranslation(container);
    rerender(warning([NOTE], true));
    expectSummary("Notes on this lens's data (1)");
    replaceTextForTranslation(container);
    rerender(warning([GAP, NOTE]));
    expect(container.querySelector("summary")).toBeNull();
    expect(chart.closest<HTMLElement>("[inert]")!.style.filter).toContain("blur");
    const blocked = screen.getByRole("note", { name: "Limited data for this chart" });
    expect(blocked.textContent).toContain(NOTE.text);
    expect(blocked.textContent).toContain(GAP.text);
    replaceTextForTranslation(container);
    fireEvent.click(screen.getByRole("button", { name: "Show chart anyway" }));
    expect(onAcknowledge).toHaveBeenCalledOnce();
    rerender(warning([GAP, NOTE], true));
    expectSummary("Limited data for this chart (2)");
    expect(screen.getByRole("figure", { name: "chart" })).toBe(chart);
    replaceTextForTranslation(container);
    rerender(warning([]));
    expect(container.querySelector("summary")).toBeNull();
    expect(screen.queryByRole("note")).toBeNull();
    expect(chart.closest("[inert]")).toBeNull();
    replaceTextForTranslation(container);
    rerender(warning([NOTE]));
    expectSummary("Notes on this lens's data (1)");
    replaceTextForTranslation(container);
    unmount();
  });
});
