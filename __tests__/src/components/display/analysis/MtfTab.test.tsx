// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useReducer } from "react";
import lensReducer, { createInitialState } from "../../../../../src/utils/state/lensReducer.js";
import { prepareState } from "../../../../../src/optics/state/prepareState.js";
import { act, cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import LensStateSelector from "../../../../../src/components/display/analysis/mtf/LensStateSelector.js";
import type { LensSourceState } from "../../../../../src/types/optics.js";
import MtfTab from "../../../../../src/components/display/analysis/MtfTab.js";
import { mtfCsv } from "../../../../../src/components/display/analysis/mtf/mtfCsv.js";
import MtfChart from "../../../../../src/components/display/analysis/MtfChart.js";
import { installMatchMediaMock, mockTheme } from "../../../../testUtils.js";
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
function stubWorker({
  progress = false,
  manual = false,
  target = state,
}: { progress?: boolean; manual?: boolean; target?: typeof state } = {}) {
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
        const prepared = prepareState(target.lens, message.job.focusT, message.job.zoomT, message.job.aberrationT);
        const result = computeMtf(prepared, { ...message.job.options, maxGridSize: 128 });
        const send = (reply: MtfWorkerReply) => this.onmessage?.({ data: reply } as MessageEvent<MtfWorkerReply>);
        if (progress) {
          const pending: MtfResult = {
            ...result,
            fields: result.fields.map((field, i) => (i === 0 ? field : { ...field, status: "pending" })),
          };
          queueMicrotask(() => send({ type: "progress", id: message.id, result: pending }));
          replies.push(() => send({ type: "result", id: message.id, result }));
        } else if (manual) replies.push(() => send({ type: "result", id: message.id, result }));
        else queueMicrotask(() => send({ type: "result", id: message.id, result }));
      }
    },
  );
  return { calls, finish: () => replies.splice(0).forEach((reply) => reply()), finishNext: () => replies.shift()?.() };
}

const legendColor = (label: string) =>
  within(screen.getByRole("figure")).getByText(label).closest("span")!.querySelector("line")!.getAttribute("stroke");

beforeEach(() => {
  installMatchMediaMock(false);
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
    // A mouse hover opens it after a short pause; there is no touch help button on a hover-capable device.
    vi.useFakeTimers();
    try {
      fireEvent.pointerEnter(plane, { pointerType: "mouse" });
      act(() => vi.advanceTimersByTime(400));
      expect(screen.getByRole("tooltip")).toBeTruthy();
      fireEvent.pointerLeave(plane, { pointerType: "mouse" });
      expect(screen.queryByRole("tooltip")).toBeNull();
    } finally {
      vi.useRealTimers();
    }
    expect(screen.queryByRole("button", { name: /^About the MTF/ })).toBeNull();
  });
  it("gives touch devices a tap-able help button beside each dropdown", async () => {
    installMatchMediaMock(true);
    stubWorker({ target: focusedState });
    render(<MtfTab L={focusedL} t={mockTheme} preparedState={focusedState} currentEPSD={1} currentPhysStopSD={1} />);
    await screen.findByRole("figure", { name: /image height/ });
    for (const name of ["MTF method", "MTF spectrum", "MTF image plane", "MTF sampling"]) {
      expect(screen.getByRole("button", { name: `About the ${name} options` })).toBeTruthy();
    }
    // A tap on the dropdown opens its native menu, never the hover tooltip.
    const plane = screen.getByRole("combobox", { name: "MTF image plane" });
    vi.useFakeTimers();
    try {
      fireEvent.pointerEnter(plane, { pointerType: "touch" });
      fireEvent.pointerDown(plane, { pointerType: "touch" });
      fireEvent.mouseEnter(plane);
      act(() => vi.advanceTimersByTime(400));
      expect(screen.queryByRole("tooltip")).toBeNull();
    } finally {
      vi.useRealTimers();
    }
    // The first tap on the help button opens the explanation (a tap also fires compatibility mouseenter).
    const help = screen.getByRole("button", { name: "About the MTF image plane options" });
    fireEvent.pointerEnter(help, { pointerType: "touch" });
    fireEvent.mouseEnter(help);
    fireEvent.click(help);
    expect(screen.getByRole("tooltip").textContent).toContain("Best axial focus: moves the MTF evaluation plane");
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

describe("Lens state selector", () => {
  const near: LensSourceState = {
    id: "near",
    label: "Close focus",
    focusT: 0.7123456789,
    zoomT: 0,
    source: "Synthetic Table 3",
    conjugate: {
      kind: "finite",
      objectDistanceMm: 1000,
      distanceReference: "first-surface",
      distanceProvenance: "calculated",
      derivation: "Independent synthetic verification",
      magnification: -0.1,
    },
  };
  const lens = build({ ...L.data, focusPositions: [0, near.focusT, 1], sourceStates: [near] });
  it("offers a single verified state without selecting it on mount, and exposes its evidence", () => {
    const select = vi.fn();
    const props = { L: lens, t: mockTheme, onSelect: select };
    const { rerender } = render(<LensStateSelector {...props} state={prepareRuntimeState(lens, 0, 0)} />);
    const control = screen.getByRole("combobox", { name: "Lens state" }) as HTMLSelectElement;
    expect(control.value).toBe("");
    expect(control.disabled).toBe(false);
    expect(select).not.toHaveBeenCalled();
    control.focus();
    expect(document.activeElement).toBe(control);
    expect(control.getAttribute("aria-describedby")).toBeTruthy();
    fireEvent.change(control, { target: { value: "near" } });
    expect(select).toHaveBeenCalledExactlyOnceWith(lens.data.key, near);
    rerender(<LensStateSelector {...props} state={prepareRuntimeState(lens, near.focusT, 0)} />);
    expect(control.value).toBe("near");
    expect(screen.getByText(/Calculated object distance:/).textContent).toContain("1,000 mm from the first surface");
    expect(screen.getByRole("option", { name: /0.1× · calculated distance/ })).toBeTruthy();
    expect(screen.getByText(near.source)).toBeTruthy();
    expect(screen.getByText("Independent synthetic verification")).toBeTruthy();
    rerender(<LensStateSelector {...props} state={prepareRuntimeState(lens, near.focusT + 0.001, 0)} />);
    expect(control.value).toBe("");
  });
  it("explains missing metadata without offering inferred states", () => {
    render(<LensStateSelector L={L} t={mockTheme} state={state} onSelect={vi.fn()} />);
    const control = screen.getByRole("combobox", { name: "Lens state" }) as HTMLSelectElement;
    expect(control.disabled).toBe(true);
    expect(control.options).toHaveLength(1);
    expect(screen.getByText(/No source configurations have been verified/)).toBeTruthy();
  });
  it("groups verified configurations by exact zoom station", () => {
    const zoom = {
      ...lens,
      isZoom: true,
      zoomPositions: [35, 50, 70],
      zoomLabels: ["Wide · 35 mm", "50 mm", "Tele · 70 mm"],
      data: {
        ...lens.data,
        sourceStates: [
          { ...near, id: "tele-near", zoomT: 1 },
          { ...near, id: "wide-near", zoomT: 0 },
          { ...near, id: "wide-infinity", focusT: 0, zoomT: 0, conjugate: { kind: "infinity" as const } },
        ],
      },
    };
    const { rerender } = render(<LensStateSelector L={zoom} t={mockTheme} state={state} onSelect={vi.fn()} />);
    const groups = within(screen.getByRole("combobox", { name: "Lens state" })).getAllByRole("group");
    expect(groups.map((g) => g.getAttribute("label"))).toEqual(["Wide · 35 mm", "Tele · 70 mm"]);
    expect(within(groups[0]).getAllByRole("option")).toHaveLength(2);
    rerender(<LensStateSelector L={zoom} t={mockTheme} state={{ ...state, zoomT: 0.25 }} onSelect={vi.fn()} />);
    expect(screen.getByText(/Interpolated infinity geometry/)).toBeTruthy();
  });
  it("keeps selection available while movement blocks MTF", () => {
    const worker = vi.fn();
    vi.stubGlobal("Worker", worker);
    const select = vi.fn();
    render(
      <MtfTab
        L={lens}
        t={mockTheme}
        preparedState={prepareRuntimeState(lens, 0, 0)}
        currentEPSD={1}
        currentPhysStopSD={1}
        movementActive
        onSelectSourceState={select}
      />,
    );
    fireEvent.change(screen.getByRole("combobox", { name: "Lens state" }), { target: { value: "near" } });
    expect(select).toHaveBeenCalledExactlyOnceWith(lens.data.key, near);
    expect(screen.getByRole("status").textContent).toContain("tilt or shift");
    expect(worker).not.toHaveBeenCalled();
  });
});

it("hides superseded station curves and preserves the diagram state when MTF closes", async () => {
  const near: LensSourceState = {
    id: "near",
    label: "Near",
    focusT: 0.7123456789,
    zoomT: 0,
    source: "Synthetic station",
    conjugate: {
      kind: "finite",
      objectDistanceMm: 1000,
      distanceReference: "first-surface",
      distanceProvenance: "published",
    },
  };
  const infinity: LensSourceState = {
    ...near,
    id: "infinity",
    label: "Infinity",
    focusT: 0,
    conjugate: { kind: "infinity" },
  };
  const lens = build({ ...focusedL.data, focusPositions: [0, near.focusT, 1], sourceStates: [infinity, near] });
  const worker = stubWorker({ manual: true, target: prepareRuntimeState(lens, 0, 0) });
  function Viewer() {
    const [viewer, dispatch] = useReducer(lensReducer, undefined, () => {
      const initial = createInitialState({}, {}, true, [lens.data.key]);
      initial.sliders.stopdownT = 0.4;
      initial.panels.analysisDrawerOpen = true;
      return initial;
    });
    const optical = prepareRuntimeState(lens, viewer.sliders.focusT, viewer.sliders.zoomT, viewer.sliders.aberrationT);
    return (
      <>
        <output data-testid="diagram-state">
          {JSON.stringify({
            ...viewer.sliders,
            rayTracksF: viewer.rays.rayTracksF,
            z: optical.z,
            imageZ: optical.imgZ,
          })}
        </output>
        <button
          onClick={() =>
            dispatch({
              type: "SET_PANEL_EXPANDED",
              panel: "analysisDrawerOpen",
              expanded: !viewer.panels.analysisDrawerOpen,
            })
          }
        >
          Toggle MTF
        </button>
        <button onClick={() => dispatch({ type: "SET_FOCUS_T", value: 0.5 })}>Intermediate focus</button>
        {viewer.panels.analysisDrawerOpen ? (
          <MtfTab
            L={lens}
            t={mockTheme}
            preparedState={optical}
            currentEPSD={0.1}
            currentPhysStopSD={0.1}
            onSelectSourceState={(lensKey, sourceState) =>
              dispatch({ type: "SELECT_SOURCE_STATE", lensKey, sourceState })
            }
          />
        ) : null}
      </>
    );
  }
  render(<Viewer />);
  await vi.waitFor(() => expect(worker.calls.compute).toBe(1));
  await act(async () => worker.finishNext());
  expect(screen.getByRole("figure")).toBeTruthy();
  fireEvent.change(screen.getByRole("combobox", { name: "Lens state" }), { target: { value: "near" } });
  expect(screen.queryByRole("figure")).toBeNull();
  const nearDiagram = screen.getByTestId("diagram-state").textContent!;
  expect(JSON.parse(nearDiagram)).toMatchObject({ focusT: near.focusT, stopdownT: 0.4, rayTracksF: true });
  await vi.waitFor(() => expect(worker.calls.compute).toBe(2));
  fireEvent.change(screen.getByRole("combobox", { name: "Lens state" }), { target: { value: "infinity" } });
  await act(async () => worker.finishNext()); // The cancelled near result arrives after the label changed.
  expect(screen.queryByRole("figure")).toBeNull();
  await screen.findByRole("figure"); // The correct infinity result is reused from cache.
  fireEvent.change(screen.getByRole("combobox", { name: "Lens state" }), { target: { value: "near" } });
  await vi.waitFor(() => expect(worker.calls.compute).toBe(3));
  await act(async () => worker.finishNext());
  expect(screen.getByRole("figure")).toBeTruthy();
  expect(screen.getByTestId("diagram-state").textContent).toBe(nearDiagram);
  fireEvent.click(screen.getByRole("button", { name: "Toggle MTF" }));
  expect(screen.queryByRole("combobox", { name: "Lens state" })).toBeNull();
  expect(screen.getByTestId("diagram-state").textContent).toBe(nearDiagram);
  fireEvent.click(screen.getByRole("button", { name: "Toggle MTF" }));
  expect((screen.getByRole("combobox", { name: "Lens state" }) as HTMLSelectElement).value).toBe("near");
  fireEvent.click(screen.getByRole("button", { name: "Intermediate focus" }));
  expect(screen.queryByRole("figure")).toBeNull();
  expect(within(screen.getByRole("region", { name: "Simulated MTF" })).getByRole("status").textContent).toContain(
    "Finite MTF",
  );
});

it("exports source evidence and evaluation plane from the computed result with CSV escaping", () => {
  const sourceState: LensSourceState = {
    id: "near",
    label: "Near",
    focusT: 0,
    zoomT: 0,
    source: 'Synthetic "Table 1", published geometry',
    conjugate: {
      kind: "finite",
      objectDistanceMm: 1000,
      distanceReference: "image-plane",
      distanceProvenance: "calculated",
      derivation: "First-order solution; exact-ray check",
      magnification: -0.1,
    },
  };
  const lens = build({ ...focusedL.data, sourceStates: [sourceState] });
  const result = computeMtf(prepareRuntimeState(lens, 0, 0), {
    ...referenceOptions,
    focus: "best-axial",
    fieldFractions: [0],
    maxGridSize: 32,
  });
  // A later request or metadata change cannot relabel this result's export.
  lens.data.sourceStates![0].label = "New selection";
  const csv = mtfCsv(result, [10]);
  expect(csv).toContain("Source state label,Near");
  expect(csv).toContain('Source citation,"Synthetic ""Table 1"", published geometry"');
  expect(csv).toContain("Distance provenance,calculated");
  expect(csv).toContain("Distance reference,image-plane");
  expect(csv).toContain("Sourced magnification,-0.1");
  expect(csv).toContain(`Evaluation-plane shift from authored plane (mm),${result.focus!.appliedShiftMm}`);
  expect(csv).toContain("Applied MTF image plane,best-axial");
  expect(csv).not.toContain("New selection");
});
