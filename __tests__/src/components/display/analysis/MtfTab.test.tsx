// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import MtfTab from "../../../../../src/components/display/analysis/MtfTab.js";
import MtfChart from "../../../../../src/components/display/analysis/MtfChart.js";
import { mockTheme } from "../../../../testUtils.js";
import { build, buildSimplePositiveElementLens } from "../../../optics/testLensFixtures.js";
import { prepareRuntimeState } from "../../../../../src/optics/compat.js";
import { assessMtfSupport, computeMtf } from "../../../../../src/optics/mtf.js";
import { mtfImagePlaneOffset } from "../../../../../src/optics/analysis/mtfFocus.js";
import type { MtfResult } from "../../../../../src/types/mtf.js";
import type { MtfJob, MtfWorkerReply, MtfWorkerRequest } from "../../../../../src/components/hooks/mtfWorkerClient.js";
import { MTF_PREFERENCES_KEY, resetMtfPreferencesCache } from "../../../../../src/utils/state/mtfPreferences.js";

// The fixture's authored image plane sits far from its paraxial focus, so Auto refocuses it.
const L = buildSimplePositiveElementLens();
const state = prepareRuntimeState(L, 0, 0);
const referenceOptions = {
  method: "geometric",
  spectrum: "reference",
  pupilSemiDiameterMm: 1,
  stopSemiDiameterMm: 1,
} as const;
const offsetMm = mtfImagePlaneOffset(state, assessMtfSupport(state, referenceOptions))!.offsetMm;
const focusedL = build({
  ...L.data,
  surfaces: L.data.surfaces.map((s, i, all) => (i === all.length - 1 ? { ...s, d: s.d + offsetMm } : s)),
});
const focusedState = prepareRuntimeState(focusedL, 0, 0);

/** Worker stand-in that runs the pure engine; `progress` first posts a result with every field pending. */
function stubWorker({ progress = false, target = state }: { progress?: boolean; target?: typeof state } = {}) {
  const calls = { compute: 0, jobs: [] as MtfJob[] };
  const replies: Array<() => void> = [];
  vi.stubGlobal(
    "Worker",
    class {
      onmessage: ((e: MessageEvent<MtfWorkerReply>) => void) | null = null;
      onerror = null;
      terminate() {}
      postMessage(message: MtfWorkerRequest) {
        if (message.type !== "compute") return;
        calls.compute++;
        calls.jobs.push(message.job);
        const result = computeMtf(target, { ...message.job.options, maxGridSize: 128 });
        const send = (reply: MtfWorkerReply) => this.onmessage?.({ data: reply } as MessageEvent<MtfWorkerReply>);
        if (progress) {
          const pending: MtfResult = {
            ...result,
            fields: result.fields.map((field, i) => (i === 0 ? field : { ...field, status: "pending" })),
          };
          queueMicrotask(() => send({ type: "progress", id: message.id, result: pending }));
          replies.push(() => send({ type: "result", id: message.id, result }));
        } else queueMicrotask(() => send({ type: "result", id: message.id, result }));
      }
    },
  );
  return { calls, finish: () => replies.splice(0).forEach((reply) => reply()) };
}

const legendColor = (label: string) =>
  within(screen.getByRole("figure")).getByText(label).closest("span")!.querySelector("line")!.getAttribute("stroke");

beforeEach(() => {
  localStorage.clear();
  resetMtfPreferencesCache();
});
afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

describe("MTF tab", () => {
  it("blocks moved optics without starting background work", () => {
    const worker = vi.fn();
    vi.stubGlobal("Worker", worker);
    render(<MtfTab L={L} t={mockTheme} preparedState={state} currentEPSD={1} currentPhysStopSD={1} movementActive />);
    expect(screen.getByRole("status").textContent).toContain("tilt or shift");
    expect(worker).not.toHaveBeenCalled();
  });
  it("defaults to the diffraction-corrected photopic model at best axial focus and notes estimated dispersion", async () => {
    stubWorker({ target: focusedState });
    render(
      <MtfTab
        L={focusedL}
        t={mockTheme}
        preparedState={focusedState}
        currentEPSD={1}
        currentPhysStopSD={1}
        fNumber={2.8}
        focalLengthMm={49.2}
      />,
    );
    expect(await screen.findByRole("figure", { name: /image height/ })).toBeTruthy();
    const header = screen.getByText(/^f\/2\.8 · 49\.2 mm · Diffraction-corrected/);
    expect(header.textContent).toContain("photopic spectrum");
    expect(header.textContent).toContain("Best axial focus (");
    // The fixture glass has only nd and νd, so its dispersion is estimated and the tab says so.
    expect(screen.getByText("Dispersion of one glass is estimated from nd and νd.")).toBeTruthy();
    expect(screen.queryByText(/own prescription's paraxial focus/)).toBeNull();
  });
  it("explains each dropdown's options in a tooltip", async () => {
    stubWorker({ target: focusedState });
    render(<MtfTab L={focusedL} t={mockTheme} preparedState={focusedState} currentEPSD={1} currentPhysStopSD={1} />);
    await screen.findByRole("figure", { name: /image height/ });
    for (const name of ["MTF method", "MTF spectrum", "MTF image plane", "MTF sampling"]) {
      const description = screen.getByRole("combobox", { name }).getAttribute("aria-describedby")!;
      expect(document.getElementById(description)!.textContent!.length).toBeGreaterThan(40);
    }
    const plane = screen.getByRole("combobox", { name: "MTF image plane" }) as HTMLSelectElement;
    expect(plane.value).toBe("best-axial");
    // Keyboard focus opens the explanation at once; Escape dismisses it.
    fireEvent.focus(plane);
    expect(screen.getByRole("tooltip").textContent).toContain("Design plane (always): the source's image plane");
    fireEvent.keyDown(plane, { key: "Escape" });
    expect(screen.queryByRole("tooltip")).toBeNull();
  });
  it("refocuses a lens whose image plane contradicts its own prescription, and says so", async () => {
    stubWorker();
    render(<MtfTab L={L} t={mockTheme} preparedState={state} currentEPSD={1} currentPhysStopSD={1} />);
    expect(await screen.findByRole("figure", { name: /image height/ })).toBeTruthy();
    expect(screen.getByText(/· Best axial focus \(/)).toBeTruthy();
    const note = screen.getByText(/own prescription's paraxial focus/).textContent!;
    expect(note).toContain(`${Math.abs(offsetMm).toFixed(2)} mm behind`);
    expect(note).toContain("These curves use best axial focus");
  });
  it("switches chart views and frequencies from one computed result, keeping color slots fixed", async () => {
    const { calls } = stubWorker();
    render(<MtfTab L={L} t={mockTheme} preparedState={state} currentEPSD={1} currentPhysStopSD={1} />);
    expect(await screen.findByRole("figure", { name: /image height/ })).toBeTruthy();
    const thirty = legendColor("30 lp/mm");
    expect(thirty).toBe(mockTheme.chartSeries[2]);
    const frequencies = within(screen.getByRole("group", { name: /Chart frequencies/ }));
    fireEvent.click(frequencies.getByRole("button", { name: "10" }));
    fireEvent.click(frequencies.getByRole("button", { name: "50" }));
    expect(frequencies.getByRole("button", { name: "10" }).getAttribute("aria-pressed")).toBe("false");
    expect(within(screen.getByRole("figure")).queryByText("10 lp/mm")).toBeNull();
    expect(legendColor("30 lp/mm")).toBe(thirty);
    expect(legendColor("50 lp/mm")).toBe(mockTheme.chartSeries[4]);
    // The last displayed frequency cannot be switched off.
    fireEvent.click(frequencies.getByRole("button", { name: "30" }));
    fireEvent.click(frequencies.getByRole("button", { name: "50" }));
    expect(frequencies.getByRole("button", { name: "50" }).getAttribute("aria-pressed")).toBe("true");
    fireEvent.click(
      within(screen.getByRole("group", { name: "MTF chart" })).getByRole("button", { name: "Frequency" }),
    );
    expect(screen.getByRole("figure", { name: /spatial frequency/ })).toBeTruthy();
    expect(calls.compute).toBe(1);
  });
  it("remembers options in this browser and recomputes only when the fields change", async () => {
    const { calls } = stubWorker();
    const { unmount } = render(
      <MtfTab L={L} t={mockTheme} preparedState={state} currentEPSD={1} currentPhysStopSD={1} />,
    );
    await screen.findByRole("figure", { name: /image height/ });
    fireEvent.click(within(screen.getByRole("group", { name: "Field step" })).getByRole("button", { name: "5 %" }));
    await vi.waitFor(() => expect(calls.compute).toBe(2));
    expect(JSON.parse(localStorage.getItem(MTF_PREFERENCES_KEY)!)).toMatchObject({ fieldStepPercent: 5 });
    unmount();
    resetMtfPreferencesCache();
    render(<MtfTab L={L} t={mockTheme} preparedState={state} currentEPSD={1} currentPhysStopSD={1} />);
    const step = within(screen.getByRole("group", { name: "Field step" })).getByRole("button", { name: "5 %" });
    expect(step.getAttribute("aria-pressed")).toBe("true");
  });
  it("reports field progress before the result completes", async () => {
    const worker = stubWorker({ progress: true });
    render(<MtfTab L={L} t={mockTheme} preparedState={state} currentEPSD={1} currentPhysStopSD={1} />);
    expect((await screen.findByText(/Calculating… 1 \/ 11 fields/)).getAttribute("role")).toBe("status");
    worker.finish();
    await vi.waitFor(() => expect(screen.queryByText(/Calculating…/)).toBeNull());
  });
});

describe("MTF chart", () => {
  const result = computeMtf(state, {
    method: "geometric",
    spectrum: "reference",
    pupilSemiDiameterMm: 1,
    stopSemiDiameterMm: 1,
    fieldFractions: [0, 0.5, 1],
    maxGridSize: 32,
  });
  it("breaks curves at unavailable fields without NaN coordinates", () => {
    const gapped: MtfResult = {
      ...result,
      fields: result.fields.map((field, i) => (i === 1 ? { ...field, status: "unavailable" } : field)),
    };
    const { container } = render(<MtfChart result={gapped} view="field" frequencies={[10, 30]} t={mockTheme} />);
    expect(container.innerHTML).not.toContain("NaN");
    const sagittal = [...container.querySelectorAll("path")].find(
      (path) => path.getAttribute("stroke") === mockTheme.chartSeries[0] && !path.getAttribute("stroke-dasharray"),
    )!;
    expect(sagittal.getAttribute("d")!.match(/M/g)).toHaveLength(2);
    expect(screen.getByText("Sagittal")).toBeTruthy();
    expect(screen.getByText("Tangential (meridional)")).toBeTruthy();
  });
  it("hatches image heights beyond the modeled edge", () => {
    const clipped: MtfResult = {
      ...result,
      geometry: { ...result.geometry!, modeledEdgeHeightMm: result.geometry!.referenceHeightMm / 2 },
    };
    render(<MtfChart result={clipped} view="field" frequencies={[10]} t={mockTheme} />);
    expect(screen.getAllByText("Outside model").length).toBeGreaterThan(0);
  });
  it("reads exact values with the keyboard crosshair", () => {
    render(<MtfChart result={result} view="field" frequencies={[10]} t={mockTheme} />);
    const chart = screen.getByRole("group", { name: /MTF chart values/ });
    fireEvent.keyDown(chart, { key: "End" });
    const field = result.fields[2];
    const text = screen.getByText(/lp\/mm S/).textContent!;
    expect(text).toContain(`${field.imageHeightMm!.toFixed(2)} mm`);
    expect(text).toContain(`S ${field.sagittal[result.frequenciesPerMm.indexOf(10)].toFixed(3)}`);
    expect(screen.getByTestId("mtf-crosshair")).toBeTruthy();
    fireEvent.keyDown(chart, { key: "Escape" });
    expect(screen.queryByTestId("mtf-crosshair")).toBeNull();
  });
});

describe("MTF export and aperture comparison", () => {
  it("copies the displayed table as CSV", async () => {
    stubWorker();
    const writeText = vi.fn().mockResolvedValue(undefined);
    vi.stubGlobal("navigator", { ...navigator, clipboard: { writeText } });
    render(<MtfTab L={L} t={mockTheme} preparedState={state} currentEPSD={1} currentPhysStopSD={1} />);
    await screen.findByRole("figure", { name: /image height/ });
    fireEvent.click(screen.getByRole("button", { name: "Copy CSV" }));
    expect(await screen.findByText("Copied")).toBeTruthy();
    const [header, first] = (writeText.mock.calls[0][0] as string).split("\n");
    expect(header).toBe(
      "Image height (mm),Field (%),10 lp/mm sagittal,10 lp/mm tangential,30 lp/mm sagittal,30 lp/mm tangential,Status",
    );
    expect(first.startsWith("0.000,0,")).toBe(true);
  });
  it("overlays the lens stopped down to f/8 only when the working aperture is faster", async () => {
    const { calls } = stubWorker();
    const { unmount } = render(
      <MtfTab L={L} t={mockTheme} preparedState={state} currentEPSD={1} currentPhysStopSD={1} fNumber={2.8} />,
    );
    await screen.findByRole("figure", { name: /image height/ });
    fireEvent.click(screen.getByRole("button", { name: "Compare f/8" }));
    expect(await screen.findByText("f/8 (thin lines)")).toBeTruthy();
    const stopped = calls.jobs.at(-1)!.options;
    expect(stopped.pupilSemiDiameterMm).toBeCloseTo(2.8 / 8, 12);
    expect(stopped.stopSemiDiameterMm).toBeCloseTo(2.8 / 8, 12);
    unmount();
    render(<MtfTab L={L} t={mockTheme} preparedState={state} currentEPSD={1} currentPhysStopSD={1} fNumber={8} />);
    expect(screen.queryByRole("button", { name: "Compare f/8" })).toBeNull();
  });
});
