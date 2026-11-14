// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import MtfDataWarning from "../../../../../../src/components/display/analysis/mtf/MtfDataWarning.js";
import type { MtfDataLimitation } from "../../../../../../src/types/mtf.js";
import {
  dismissMtfDataWarnings,
  getDismissedMtfDataWarnings,
  resetMtfDataWarnings,
} from "../../../../../../src/utils/state/mtfDataWarnings.js";
import { mockTheme } from "../../../../../testUtils.js";

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
  afterEach(() => {
    cleanup();
    resetMtfDataWarnings();
  });
  it.each([
    NOTE,
    {
      kind: "incomplete-prescription",
      blocking: false,
      text: "A10 is blank and taken as zero; the curves rest on that assumption.",
    } satisfies MtfDataLimitation,
  ])("lists a non-blocking $kind note beside the chart without blurring it", (note) => {
    renderWarning([note]);
    expect(screen.queryByRole("note")).toBeNull();
    expect(screen.getByRole("figure", { name: "chart" }).closest("[inert]")).toBeNull();
    expect(screen.getByText(/Notes on this lens's data \(1\)/)).toBeTruthy();
    expect(screen.getByText(note.text)).toBeTruthy();
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
  it("holds an incomplete prescription behind the warning while aperture notes stay non-blocking", () => {
    const missing: MtfDataLimitation = {
      kind: "incomplete-prescription",
      blocking: true,
      text: "Aspheric coefficients are missing on surface 9A; the curves describe the stand-in.",
    };
    const apertures: MtfDataLimitation = {
      kind: "estimated-apertures",
      blocking: false,
      text: "Off-axis curves depend on estimated clear apertures.",
    };
    renderWarning([missing, apertures]);
    expect(screen.getByRole("note").textContent).toContain(missing.text);
    expect(screen.getByRole("note").textContent).toContain(apertures.text);
    expect(screen.getByRole("figure").closest("[inert]")).toBeTruthy();
    cleanup();
    renderWarning([apertures]);
    expect(screen.queryByRole("note")).toBeNull();
    expect(screen.getByRole("figure").closest("[inert]")).toBeNull();
  });
  it("acknowledges missing prescriptions per system and per kind", () => {
    dismissMtfDataWarnings("lens-x-converter", ["scale", "estimated-apertures"]);
    expect(getDismissedMtfDataWarnings("lens-x-converter").has("incomplete-prescription")).toBe(false);
    dismissMtfDataWarnings("lens-x-converter", ["incomplete-prescription"]);
    expect(getDismissedMtfDataWarnings("lens-x-converter").has("incomplete-prescription")).toBe(true);
    expect(getDismissedMtfDataWarnings("lens").has("incomplete-prescription")).toBe(false);
    resetMtfDataWarnings();
    expect(getDismissedMtfDataWarnings("lens-x-converter").size).toBe(0);
  });
  it("keeps every item one click away once the blocking gaps are dismissed", () => {
    renderWarning([GAP, NOTE], true);
    expect(screen.queryByRole("note")).toBeNull();
    expect(screen.getByText(/Limited data for this chart \(2\)/)).toBeTruthy();
  });
});
