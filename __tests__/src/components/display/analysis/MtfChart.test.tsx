/** Synthetic chart controls keep presentation changes independent of optical-engine results. */
// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import MtfChart from "../../../../../src/components/display/analysis/MtfChart.js";
import type { MtfResult } from "../../../../../src/types/mtf.js";
import { mockTheme } from "../../../../testUtils.js";

function syntheticResult(): MtfResult {
  return {
    method: "diffraction",
    spectrum: "reference",
    support: {
      available: true,
      reason: null,
      message: "",
      referenceWavelengthNm: 550,
      useResolvedReference: false,
      spectralLines: [{ wavelengthNm: 550, weight: 1 }],
      limitations: [],
    },
    frequenciesPerMm: [0, 10, 30, 50, 100],
    fields: [0, 0.25, 0.5, 0.75, 1].map((fraction) => ({
      fieldFraction: fraction,
      targetImageHeightMm: 20 * fraction,
      imageHeightMm: 20 * fraction,
      fieldAngleDeg: 10 * fraction,
      sagittal: [1, 0.9 - 0.2 * fraction, 0.7 - 0.2 * fraction, 0.5 - 0.2 * fraction, 0.1],
      tangential: [1, 0.8 - 0.2 * fraction, 0.6 - 0.2 * fraction, 0.4 - 0.2 * fraction, 0.05],
      status: "converged",
      reason: null,
      message: "",
      notes: [],
      pupilSampling: "stop",
      gridSize: 32,
      validRays: 100,
      blockedRays: 0,
      failedRays: 0,
      unaimedRays: 0,
      unresolvedInBeamRays: 0,
      unknownFluxFraction: 0,
      maxDelta: 0,
      convergedThroughLpMm: 100,
      diffractionLimit: { sagittal: [1, 0.95, 0.85, 0.75, 0.5], tangential: [1, 0.94, 0.84, 0.74, 0.49] },
    })),
    geometry: {
      referenceHeightMm: 20,
      modeledEdgeHeightMm: 20,
      modeledEdgeAngleDeg: 10,
      chiefEdgeHeightMm: 20,
      chiefEdgeAngleDeg: 10,
      basis: "format-corner",
    },
    focus: null,
    axialVignetting: null,
  };
}

afterEach(cleanup);

describe("MTF chart presentation", () => {
  it("identifies frequency-view fields by distinct curve and legend marker shapes", () => {
    const result = syntheticResult();
    const props = { result, view: "frequency" as const, frequencies: [10] as const, t: mockTheme };
    const { container, rerender } = render(
      <MtfChart {...props} comparison={result} diffractionLimit pixelPitchUm={5} />,
    );
    const groups = screen.getAllByTestId("mtf-frequency-markers");
    expect(groups.map((group) => group.getAttribute("data-field"))).toEqual(["Center", "50 %", "Edge"]);
    for (const [i, tag, shape] of [
      [0, "circle", "circle"],
      [1, "rect", "square"],
      [2, "path", "triangle"],
    ] as const) {
      expect(groups[i].querySelectorAll(tag)).toHaveLength(6);
      const legend = screen.getByText(new RegExp(`\\(${shape} markers\\)$`));
      expect(legend.parentElement!.querySelector(`svg ${tag}`)).toBeTruthy();
    }
    // Markers add no end labels beside the Nyquist label and preserve the axis/reference strokes.
    const drawnPaths = (selector: string) =>
      [...container.querySelectorAll(selector)].filter((path) => path.getAttribute("d"));
    expect(drawnPaths('path[stroke-width="2"][stroke-dasharray="5,3"]')).toHaveLength(3);
    expect(drawnPaths('path[stroke-width="1.1"]')).toHaveLength(6);
    expect(drawnPaths('path[stroke-width="0.9"][stroke-dasharray="1,3"]')).toHaveLength(6);
    expect(drawnPaths('path[stroke-width="0.9"][stroke-dasharray="5,3,1,3"]')).toHaveLength(6);
    expect(screen.getByTestId("mtf-nyquist").textContent).toBe("Nyquist, 5 µm pixels: 100 lp/mm");

    rerender(<MtfChart {...props} frequencyField={0.25} />);
    expect(screen.getAllByTestId("mtf-frequency-markers")).toHaveLength(1);
    expect(screen.getByTestId("mtf-frequency-markers").getAttribute("data-field")).toBe("25 %");
    expect(screen.getByText("25 % · 5.0 mm (circle markers)")).toBeTruthy();
  });

  it("uses lighter dotted bridges only across pending fields for every curve pair", () => {
    const result = syntheticResult();
    const pending: MtfResult = {
      ...result,
      fields: result.fields.map((field, i) => (i === 1 || i === 2 ? { ...field, status: "pending" } : field)),
    };
    const props = { view: "field" as const, frequencies: [10] as const, t: mockTheme, diffractionLimit: true };
    const { container, rerender } = render(<MtfChart {...props} result={pending} comparison={pending} />);
    const bridges = screen.getAllByTestId("mtf-provisional");
    expect(bridges).toHaveLength(4);
    for (const bridge of bridges) {
      expect(Number(bridge.getAttribute("opacity"))).toBeLessThan(1);
      expect(bridge.querySelectorAll("path")).toHaveLength(2);
      for (const path of bridge.querySelectorAll("path")) {
        expect(path.getAttribute("stroke-dasharray")).toBe("1,3");
        expect(path.getAttribute("d")).toMatch(/^M40\.0,[\d.]+ L272\.5,[\d.]+$/);
      }
    }
    const solid = container.querySelector('path[stroke-width="2"]:not([stroke-dasharray])')!;
    expect(solid.getAttribute("d")).toBe("M40.0,35.3 M272.5,64.3 L350.0,73.9");
    expect(screen.getByText("Lighter dotted spans bridge fields still calculating.")).toBeTruthy();

    // Overlay-only progress also needs the disclosure after the main aperture finishes.
    rerender(<MtfChart {...props} result={result} comparison={pending} />);
    expect(screen.getAllByTestId("mtf-provisional")).toHaveLength(2);
    expect(screen.getByText("Lighter dotted spans bridge fields still calculating.")).toBeTruthy();
    rerender(<MtfChart {...props} result={result} comparison={result} />);
    expect(screen.queryByTestId("mtf-provisional")).toBeNull();
    expect(screen.queryByText("Lighter dotted spans bridge fields still calculating.")).toBeNull();
  });

  it.each(["unavailable", "unconverged"] as const)("keeps %s gaps even beside pending fields", (status) => {
    const result = syntheticResult();
    result.fields[1].status = "pending";
    result.fields[2].status = status;
    result.fields[3].status = "pending";
    const { container } = render(
      <MtfChart result={result} comparison={result} view="field" frequencies={[10]} t={mockTheme} diffractionLimit />,
    );
    expect(screen.queryByTestId("mtf-provisional")).toBeNull();
    for (const path of container.querySelectorAll('svg path[fill="none"]')) {
      expect(path.getAttribute("d")).not.toContain("L");
    }
  });

  it("keeps pending-field and exact-value readouts available to the keyboard", () => {
    const result = syntheticResult();
    result.fields[1].status = "pending";
    const { container } = render(<MtfChart result={result} view="field" frequencies={[10]} t={mockTheme} />);
    const chart = screen.getByRole("group", { name: /MTF chart values/ });
    const live = container.querySelector('[aria-live="polite"]')!;
    expect(chart.tabIndex).toBe(0);
    fireEvent.keyDown(chart, { key: "Home" });
    expect(live.textContent).toBe("0.00 mm — 10 lp/mm S 0.900 T 0.800");
    fireEvent.keyDown(chart, { key: "ArrowRight" });
    expect(live.textContent).toBe("5.00 mm: still calculating");
    expect(screen.getByTestId("mtf-crosshair").querySelector("line")!.getAttribute("x1")).toBe("117.5");
    fireEvent.keyDown(chart, { key: "End" });
    expect(live.textContent).toBe("20.00 mm — 10 lp/mm S 0.700 T 0.600");
    fireEvent.keyDown(chart, { key: "Escape" });
    expect(live.textContent).toBe("");
    expect(screen.queryByTestId("mtf-crosshair")).toBeNull();
  });

  it("adds active-field stability only in Advanced without disclosing withheld values", () => {
    const result = syntheticResult();
    result.fields[1].status = "unconverged";
    result.fields[1].convergedThroughLpMm = 30;
    const comparison = syntheticResult();
    comparison.fields[0].sagittal[1] = 0.95;
    const props = {
      result,
      comparison,
      comparisonLabel: "f/8",
      view: "field" as const,
      frequencies: [10] as const,
      t: mockTheme,
    };
    const { container, rerender } = render(<MtfChart {...props} />);
    const chart = screen.getByRole("group", { name: /MTF chart values/ });
    const live = container.querySelector('[aria-live="polite"]')!;
    fireEvent.keyDown(chart, { key: "Home" });
    const comparisonReadout = " · f/8 at 0.00 mm: 10 lp/mm S 0.950 T 0.800";
    expect(live.textContent).toBe(`0.00 mm — 10 lp/mm S 0.900 T 0.800${comparisonReadout}`);
    rerender(<MtfChart {...props} advanced />);
    expect(live.textContent).toBe(
      `0.00 mm (converged; stable through: 100 lp/mm) — 10 lp/mm S 0.900 T 0.800${comparisonReadout}`,
    );
    fireEvent.keyDown(chart, { key: "ArrowRight" });
    expect(live.textContent).toBe(
      "5.00 mm (unconverged; stable through: 30 lp/mm) — 10 lp/mm — · f/8 at 5.00 mm: 10 lp/mm S 0.850 T 0.750",
    );
    rerender(<MtfChart {...props} advanced={false} />);
    expect(live.textContent).toBe("5.00 mm (unconverged) — 10 lp/mm — · f/8 at 5.00 mm: 10 lp/mm S 0.850 T 0.750");
  });

  it.each(["pending", "unavailable"] as const)("includes absent stability for an Advanced %s field", (status) => {
    const result = syntheticResult();
    result.fields[0] = {
      ...result.fields[0],
      status,
      convergedThroughLpMm: null,
      message: "No usable rays",
    };
    const { container } = render(<MtfChart result={result} view="field" frequencies={[10]} t={mockTheme} advanced />);
    fireEvent.keyDown(screen.getByRole("group", { name: /MTF chart values/ }), { key: "Home" });
    expect(container.querySelector('[aria-live="polite"]')!.textContent).toBe(
      `0.00 mm (${status}; stable through: Not established): ${status === "pending" ? "still calculating" : "No usable rays"}`,
    );
  });

  it("uses each frequency-view field's status rather than the crosshair's frequency index", () => {
    const result = syntheticResult();
    result.fields[2].status = "unconverged";
    result.fields[2].convergedThroughLpMm = 30;
    const { container } = render(
      <MtfChart result={result} view="frequency" frequencies={[10]} t={mockTheme} advanced diagnostic />,
    );
    const chart = screen.getByRole("group", { name: /MTF chart values/ });
    fireEvent.keyDown(chart, { key: "End" });
    expect(container.querySelector('[aria-live="polite"]')!.textContent).toBe(
      "100 lp/mm — diagnostic estimates — Center · 0.0 mm (converged; stable through: 100 lp/mm) S 0.100 T 0.050 · 50 % · 10.0 mm (unconverged; stable through: 30 lp/mm) S 0.100 T 0.050 · Edge · 20.0 mm (converged; stable through: 100 lp/mm) S 0.100 T 0.050",
    );
  });

  it("mirrors pointer-selected field stability in the polite readout", () => {
    const result = syntheticResult();
    result.fields[1].status = "unconverged";
    result.fields[1].convergedThroughLpMm = 30;
    const { container } = render(<MtfChart result={result} view="field" frequencies={[10]} t={mockTheme} advanced />);
    const chart = screen.getByRole("group", { name: /MTF chart values/ });
    const svg = chart.querySelector("svg")!;
    vi.spyOn(svg, "getBoundingClientRect").mockReturnValue({ left: 0, width: 380 } as DOMRect);
    // MouseEvent supplies coordinates in environments without a native PointerEvent constructor.
    fireEvent(chart, new MouseEvent("pointermove", { bubbles: true, clientX: 40 }));
    const live = container.querySelector('[aria-live="polite"]')!;
    expect(live.textContent).toBe("0.00 mm (converged; stable through: 100 lp/mm) — 10 lp/mm S 0.900 T 0.800");
    fireEvent(chart, new MouseEvent("pointermove", { bubbles: true, clientX: 118 }));
    expect(live.textContent).toBe("5.00 mm (unconverged; stable through: 30 lp/mm) — 10 lp/mm —");
  });

  it("preserves completed image-height path data, including comparison and pupil limits", () => {
    const result = syntheticResult();
    const { container } = render(
      <MtfChart result={result} comparison={result} view="field" frequencies={[10]} t={mockTheme} diffractionLimit />,
    );
    // Fixed SVG coordinates also guard comparison widths and pupil-limit dash patterns.
    expect(
      [...container.querySelectorAll('svg path[fill="none"]')].map((path) => ({
        d: path.getAttribute("d"),
        width: path.getAttribute("stroke-width"),
        dash: path.getAttribute("stroke-dasharray"),
      })),
    ).toMatchInlineSnapshot(`
      [
        {
          "d": "M40.0,25.7 L117.5,25.7 L195.0,25.7 L272.5,25.7 L350.0,25.7",
          "dash": "1,3",
          "width": "0.9",
        },
        {
          "d": "M40.0,27.6 L117.5,27.6 L195.0,27.6 L272.5,27.6 L350.0,27.6",
          "dash": "5,3,1,3",
          "width": "0.9",
        },
        {
          "d": "",
          "dash": "1,3",
          "width": "0.9",
        },
        {
          "d": "",
          "dash": "5,3,1,3",
          "width": "0.9",
        },
        {
          "d": "M40.0,25.7 L117.5,25.7 L195.0,25.7 L272.5,25.7 L350.0,25.7",
          "dash": "1,3",
          "width": "0.9",
        },
        {
          "d": "M40.0,27.6 L117.5,27.6 L195.0,27.6 L272.5,27.6 L350.0,27.6",
          "dash": "5,3,1,3",
          "width": "0.9",
        },
        {
          "d": "",
          "dash": "1,3",
          "width": "0.9",
        },
        {
          "d": "",
          "dash": "5,3,1,3",
          "width": "0.9",
        },
        {
          "d": "M40.0,35.3 L117.5,45.0 L195.0,54.6 L272.5,64.3 L350.0,73.9",
          "dash": null,
          "width": "1.1",
        },
        {
          "d": "M40.0,54.6 L117.5,64.3 L195.0,73.9 L272.5,83.5 L350.0,93.2",
          "dash": "5,3",
          "width": "1.1",
        },
        {
          "d": "M40.0,35.3 L117.5,45.0 L195.0,54.6 L272.5,64.3 L350.0,73.9",
          "dash": null,
          "width": "2",
        },
        {
          "d": "M40.0,54.6 L117.5,64.3 L195.0,73.9 L272.5,83.5 L350.0,93.2",
          "dash": "5,3",
          "width": "2",
        },
      ]
    `);
  });
});
