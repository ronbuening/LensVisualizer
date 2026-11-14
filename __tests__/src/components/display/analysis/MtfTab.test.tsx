// @vitest-environment jsdom
import { constructionFixtureData } from "../../../optics/constructionFixtures.js";
import { createAnalysisComputationContext } from "../../../../../src/optics/analysis/analysisContext.js";
import { mtfInputs } from "../../../optics/testLensFixtures.js";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { act, cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import MtfTab from "../../../../../src/components/display/analysis/MtfTab.js";
import { mtfCsv } from "../../../../../src/components/display/analysis/mtf/mtfCsv.js";
import MtfFieldSummary from "../../../../../src/components/display/analysis/mtf/MtfFieldSummary.js";
import MtfChart from "../../../../../src/components/display/analysis/MtfChart.js";
import { installMatchMediaMock, mockTheme } from "../../../../testUtils.js";
import {
  build,
  buildChromaticPositiveElementLens,
  buildSimplePositiveElementLens,
} from "../../../optics/testLensFixtures.js";
import { prepareRuntimeState } from "../../../../../src/optics/state/runtimeAdapters.js";
import { stopSemiDiameterForFNumber } from "../../../../../src/optics/state/apertureStop.js";
import { assessMtfSupport } from "../../../../../src/optics/analysis/mtf/mtfSupport.js";
import { computeMtf } from "../../../../../src/optics/analysis/mtf/mtf.js";
import { mtfImagePlaneOffset } from "../../../../../src/optics/analysis/mtf/mtfFocus.js";
import type { MtfResult } from "../../../../../src/types/mtf.js";
import type { MtfJob, MtfWorkerReply, MtfWorkerRequest } from "../../../../../src/components/hooks/mtfWorkerClient.js";
import {
  DEFAULT_MTF_PREFERENCES,
  MTF_PREFERENCES_KEY,
  resetMtfPreferencesCache,
} from "../../../../../src/utils/state/mtfPreferences.js";
import { buildMtfLink, parseSharedMtfSettings } from "../../../../../src/utils/state/mtfUrlState.js";
import { resetMtfDataWarnings } from "../../../../../src/utils/state/mtfDataWarnings.js";
import { MTF_EXPORT_DISCLAIMER } from "../../../../../src/components/display/analysis/mtf/mtfExportContext.js";

// The fixture's authored image plane sits far from its paraxial focus, so Auto refocuses it.
const L = buildSimplePositiveElementLens();
const state = prepareRuntimeState(L, 0, 0);
const referenceOptions = {
  method: "geometric",
  spectrum: "reference",
  focus: "design",
  pupilSemiDiameterMm: 1,
  stopSemiDiameterMm: 1,
} as const;
const offsetMm = mtfImagePlaneOffset(state, assessMtfSupport(...mtfInputs(state, referenceOptions)))!.offsetMm;
const focusedL = build({
  ...constructionFixtureData(L),
  surfaces: constructionFixtureData(L).surfaces.map((s, i, all) =>
    i === all.length - 1 ? { ...s, d: s.d + offsetMm } : s,
  ),
});
const focusedState = prepareRuntimeState(focusedL, 0, 0);

/* The stub worker runs the real engine; a coarse pupil grid and a per-state memo keep repeated
 * identical jobs across tests from recomputing. No assertion here depends on grid resolution. */
const mtfMemo = new WeakMap<typeof state, Map<string, MtfResult>>();
function memoizedMtf(target: typeof state, options: MtfJob["options"]): MtfResult {
  const byOptions = mtfMemo.get(target) ?? new Map<string, MtfResult>();
  mtfMemo.set(target, byOptions);
  const key = JSON.stringify(options);
  const cached = byOptions.get(key);
  if (cached) return cached;
  const result = computeMtf(...mtfInputs(target, { ...options, maxGridSize: 32 }));
  byOptions.set(key, result);
  return result;
}

/** Worker stand-in that runs the pure engine; `progress` first posts a result with every field pending. */
function stubWorker({
  progress = false,
  target = state,
  error,
  heldFocusShiftMm,
  resultForJob,
}: {
  progress?: boolean;
  target?: typeof state;
  error?: (job: MtfJob) => string | null;
  heldFocusShiftMm?: number;
  resultForJob?: (job: MtfJob) => MtfResult;
} = {}) {
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
        const send = (reply: MtfWorkerReply) => this.onmessage?.({ data: reply } as MessageEvent<MtfWorkerReply>);
        const failure = error?.(message.job);
        if (failure) {
          queueMicrotask(() => send({ type: "error", id: message.id, error: failure }));
          return;
        }
        const result =
          resultForJob?.(message.job) ??
          memoizedMtf(
            target,
            heldFocusShiftMm === undefined ? message.job.options : { ...message.job.options, heldFocusShiftMm },
          );
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
  within(screen.getByRole("figure")).getByText(label).parentElement!.querySelector("line")!.getAttribute("stroke");

beforeEach(() => {
  installMatchMediaMock(false);
  window.history.replaceState({}, "", "/");
  localStorage.clear();
  resetMtfPreferencesCache();
  resetMtfDataWarnings();
});
afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

describe("MTF share links", () => {
  const tab = <MtfTab L={focusedL} t={mockTheme} preparedState={focusedState} currentEPSD={1} currentPhysStopSD={1} />;

  it("applies link settings without saving them, saves only changed controls, and resumes my settings", async () => {
    const saved = JSON.stringify({ method: "diffraction", spectrum: "reference", focus: "auto", advanced: false });
    localStorage.setItem(MTF_PREFERENCES_KEY, saved);
    const shared = { ...DEFAULT_MTF_PREFERENCES, method: "geometric", focus: "design", advanced: true } as const;
    window.history.replaceState({}, "", buildMtfLink(window.location.href, shared));
    const { calls } = stubWorker({ target: focusedState });
    const { unmount } = render(tab);
    await screen.findByRole("figure");
    expect(screen.getByText("Settings from a shared link")).toBeTruthy();
    expect((screen.getByRole("combobox", { name: "MTF method" }) as HTMLSelectElement).value).toBe("geometric");
    expect(calls.jobs[0].options).toMatchObject({ method: "geometric", focus: "design", spectrum: "photopic" });
    expect(localStorage.getItem(MTF_PREFERENCES_KEY)).toBe(saved);
    fireEvent.change(screen.getByRole("combobox", { name: "MTF spectrum" }), { target: { value: "cdf" } });
    expect(parseSharedMtfSettings(window.location.search)).toEqual({ ...shared, spectrum: "cdf" });
    expect(JSON.parse(localStorage.getItem(MTF_PREFERENCES_KEY)!)).toMatchObject({
      method: "diffraction",
      spectrum: "cdf",
      focus: "auto",
      advanced: false,
    });
    // Closing and reopening the analysis tab keeps this visit's override.
    unmount();
    render(tab);
    expect((screen.getByRole("combobox", { name: "MTF method" }) as HTMLSelectElement).value).toBe("geometric");
    fireEvent.click(screen.getByRole("button", { name: "Use my settings" }));
    expect(screen.queryByText("Settings from a shared link")).toBeNull();
    expect(new URLSearchParams(window.location.search).has("mtf")).toBe(false);
    expect((screen.getByRole("combobox", { name: "MTF method" }) as HTMLSelectElement).value).toBe("diffraction");
    expect((screen.getByRole("combobox", { name: "MTF image plane" }) as HTMLSelectElement).value).toBe("auto");
    expect(screen.getByRole("button", { name: "Advanced" }).getAttribute("aria-pressed")).toBe("false");
    fireEvent.change(screen.getByRole("combobox", { name: "MTF method" }), { target: { value: "geometric" } });
    expect(JSON.parse(localStorage.getItem(MTF_PREFERENCES_KEY)!).method).toBe("geometric");
    expect(new URLSearchParams(window.location.search).has("mtf")).toBe(false);
  });

  it.each(["", "?v=1&mtf=2", "?v=1&mtf=bad", "?mtf=1"])(
    "keeps ordinary stored preferences and URL behavior for %s",
    async (query) => {
      const saved = JSON.stringify({ method: "geometric", spectrum: "reference" });
      localStorage.setItem(MTF_PREFERENCES_KEY, saved);
      window.history.replaceState({}, "", `/lens/test/${query}`);
      const original = window.location.href;
      stubWorker({ target: focusedState });
      render(tab);
      await screen.findByRole("figure");
      expect(screen.queryByText("Settings from a shared link")).toBeNull();
      expect((screen.getByRole("combobox", { name: "MTF method" }) as HTMLSelectElement).value).toBe("geometric");
      expect(localStorage.getItem(MTF_PREFERENCES_KEY)).toBe(saved);
      fireEvent.click(screen.getByRole("button", { name: "Advanced" }));
      expect(JSON.parse(localStorage.getItem(MTF_PREFERENCES_KEY)!).advanced).toBe(true);
      expect(window.location.href).toBe(original);
    },
  );

  it("copies the current URL and visit settings without changing the address bar or sharing disclosures", async () => {
    stubWorker({ target: focusedState });
    const writeText = vi.fn().mockResolvedValue(undefined);
    vi.stubGlobal("navigator", { ...navigator, clipboard: { writeText } });
    window.history.replaceState({}, "", "/lens/test/?v=1&focus=0.6666666666666666&aperture=0.12345678901234568#chart");
    const original = window.location.href;
    const { unmount } = render(tab);
    await screen.findByRole("figure");
    fireEvent.click(screen.getByRole("button", { name: "Show chart anyway" }));
    fireEvent.click(screen.getByRole("checkbox", { name: /Show diagnostic estimates/ }));
    fireEvent.click(screen.getByRole("button", { name: "Advanced" }));
    fireEvent.click(screen.getByRole("button", { name: "Copy MTF link" }));
    expect(await screen.findByText("Copied")).toBeTruthy();
    expect(window.location.href).toBe(original);
    const copied = new URL(writeText.mock.calls[0][0] as string);
    expect(copied.pathname).toBe("/lens/test/");
    expect(copied.hash).toBe("#chart");
    expect(copied.searchParams.get("focus")).toBe("0.6666666666666666");
    expect(copied.searchParams.get("aperture")).toBe("0.12345678901234568");
    expect(copied.searchParams.get("ad")).toBe("1");
    expect(copied.searchParams.get("tab")).toBe("mtf");
    expect(parseSharedMtfSettings(copied.search)).toEqual({ ...DEFAULT_MTF_PREFERENCES, advanced: true });
    // A new recipient visit starts with both disclosures closed, even though the sender opened them.
    unmount();
    resetMtfDataWarnings();
    window.history.replaceState({}, "", copied.href);
    render(tab);
    await screen.findByRole("figure");
    expect(screen.getByRole("note", { name: "Limited data for this chart" })).toBeTruthy();
    expect((screen.getByRole("checkbox", { name: /Show diagnostic estimates/ }) as HTMLInputElement).checked).toBe(
      false,
    );
  });

  it("reports clipboard failure for the link action", async () => {
    stubWorker({ target: focusedState });
    vi.stubGlobal("navigator", {
      ...navigator,
      clipboard: { writeText: vi.fn().mockRejectedValue(new Error("blocked")) },
    });
    render(tab);
    await screen.findByRole("figure");
    fireEvent.click(screen.getByRole("button", { name: "Copy MTF link" }));
    expect(await screen.findByText("Copy unavailable in this browser")).toBeTruthy();
  });

  it("hydrates shared settings and removes them on back/forward navigation", async () => {
    stubWorker({ target: focusedState });
    render(tab);
    await screen.findByRole("figure");
    act(() => {
      window.history.replaceState(
        {},
        "",
        buildMtfLink(window.location.href, { ...DEFAULT_MTF_PREFERENCES, advanced: true }),
      );
      window.dispatchEvent(new PopStateEvent("popstate"));
    });
    expect(screen.getByText("Settings from a shared link")).toBeTruthy();
    expect(screen.getByRole("button", { name: "Advanced" }).getAttribute("aria-pressed")).toBe("true");
    act(() => {
      window.history.replaceState({}, "", "/lens/test/");
      window.dispatchEvent(new PopStateEvent("popstate"));
    });
    expect(screen.queryByText("Settings from a shared link")).toBeNull();
    expect(screen.getByRole("button", { name: "Advanced" }).getAttribute("aria-pressed")).toBe("false");
    expect(localStorage.getItem(MTF_PREFERENCES_KEY)).toBeNull();
  });
});

describe("MTF tab", () => {
  it("offers single wavelength only in Advanced, keeping a selected line visible and labelled while off", async () => {
    localStorage.setItem(MTF_PREFERENCES_KEY, JSON.stringify({ spectrum: "reference", wavelengthNm: 587.5618 }));
    const { calls } = stubWorker({ target: focusedState });
    render(<MtfTab L={focusedL} t={mockTheme} preparedState={focusedState} currentEPSD={1} currentPhysStopSD={1} />);
    await screen.findByRole("figure");
    const select = screen.getByRole("combobox", { name: "MTF spectrum" });
    expect(within(select).queryByRole("option", { name: "Single wavelength" })).toBeNull();
    expect(screen.queryByRole("spinbutton", { name: "MTF wavelength" })).toBeNull();
    fireEvent.click(screen.getByRole("button", { name: "Advanced" }));
    expect(within(select).getByRole("option", { name: "Single wavelength" })).toBeTruthy();
    fireEvent.change(select, { target: { value: "single" } });
    const input = screen.getByRole("spinbutton", { name: "MTF wavelength" }) as HTMLInputElement;
    expect([input.min, input.max, input.step]).toEqual(["435.8", "656.3", "1"]);
    await vi.waitFor(() =>
      expect(calls.jobs.at(-1)!.options).toMatchObject({ spectrum: "single", wavelengthNm: 587.5618 }),
    );
    expect(screen.queryByText(/Every glass is known only/)).toBeNull();
    const computations = calls.compute;
    fireEvent.click(screen.getByRole("button", { name: "Advanced" }));
    expect(screen.queryByRole("spinbutton", { name: "MTF wavelength" })).toBeNull();
    expect(within(select).getByRole("option", { name: "Single wavelength" })).toBeTruthy();
    expect((select as HTMLSelectElement).value).toBe("single");
    expect(screen.getByText(/Diffraction-corrected · 587.5618 nm ·/)).toBeTruthy();
    expect(calls.compute).toBe(computations);
    fireEvent.change(select, { target: { value: "reference" } });
    expect(within(select).queryByRole("option", { name: "Single wavelength" })).toBeNull();
    fireEvent.click(screen.getByRole("button", { name: "Advanced" }));
    fireEvent.change(select, { target: { value: "single" } });
    for (const [label, wavelengthNm] of [
      ["g 436", 435.8343],
      ["F 486", 486.1327],
      ["e 546", 546.074],
      ["d 588", 587.5618],
      ["C 656", 656.2725],
    ] as const) {
      fireEvent.click(screen.getByRole("button", { name: label }));
      expect((screen.getByRole("spinbutton", { name: "MTF wavelength" }) as HTMLInputElement).valueAsNumber).toBe(
        wavelengthNm,
      );
    }
    const wavelengthInput = screen.getByRole("spinbutton", { name: "MTF wavelength" });
    fireEvent.change(wavelengthInput, { target: { value: "53" } });
    expect(JSON.parse(localStorage.getItem(MTF_PREFERENCES_KEY)!).wavelengthNm).toBe(656.2725);
    fireEvent.blur(wavelengthInput);
    expect((wavelengthInput as HTMLInputElement).valueAsNumber).toBe(656.2725);
    fireEvent.change(wavelengthInput, { target: { value: "532.125" } });
    await vi.waitFor(() =>
      expect(calls.jobs.at(-1)!.options).toMatchObject({ spectrum: "single", wavelengthNm: 532.125 }),
    );
  });

  it("opens a shared single-line chart with Advanced off and applies the same wavelength to f/8", async () => {
    const shared = { ...DEFAULT_MTF_PREFERENCES, spectrum: "single" as const, wavelengthNm: 532.125, compareF8: true };
    window.history.replaceState(
      {},
      "",
      buildMtfLink("https://example.com/lens/test/", shared).replace("https://example.com", ""),
    );
    const { calls } = stubWorker({ target: focusedState });
    render(
      <MtfTab
        L={focusedL}
        t={mockTheme}
        preparedState={focusedState}
        currentEPSD={1}
        currentPhysStopSD={1}
        fNumber={2.8}
      />,
    );
    await vi.waitFor(() => expect(calls.compute).toBe(2));
    expect(screen.queryByRole("spinbutton", { name: "MTF wavelength" })).toBeNull();
    expect((screen.getByRole("combobox", { name: "MTF spectrum" }) as HTMLSelectElement).value).toBe("single");
    expect(screen.getByText(/Diffraction-corrected · 532.125 nm ·/)).toBeTruthy();
    for (const job of calls.jobs) expect(job.options).toMatchObject({ spectrum: "single", wavelengthNm: 532.125 });
    expect(calls.jobs[0].options.stopSemiDiameterMm).not.toBe(calls.jobs[1].options.stopSemiDiameterMm);
    expect(localStorage.getItem(MTF_PREFERENCES_KEY)).toBeNull();
  });

  it("offers persisted display references without recomputing and falls back from a stale field", async () => {
    localStorage.setItem(MTF_PREFERENCES_KEY, JSON.stringify({ frequencyField: 0.35 }));
    resetMtfPreferencesCache();
    const { calls } = stubWorker({ target: focusedState });
    render(<MtfTab L={focusedL} t={mockTheme} preparedState={focusedState} currentEPSD={1} currentPhysStopSD={1} />);
    await screen.findByRole("figure");
    expect(screen.getByRole("button", { name: "Diffraction limit" }).getAttribute("aria-pressed")).toBe("false");
    expect(screen.queryByRole("combobox", { name: "Fields" })).toBeNull();
    expect(screen.queryByRole("combobox", { name: "Pixel pitch" })).toBeNull();
    const computations = calls.compute;
    fireEvent.click(screen.getByRole("button", { name: "Diffraction limit" }));
    fireEvent.click(
      within(screen.getByRole("group", { name: "MTF chart" })).getByRole("button", { name: "Frequency" }),
    );
    const fields = screen.getByRole("combobox", { name: "Fields" }) as HTMLSelectElement;
    expect(fields.value).toBe("overview");
    expect(within(fields).getByRole("option", { name: /40 % · .* mm/ })).toBeTruthy();
    fireEvent.change(fields, { target: { value: "0.4" } });
    fireEvent.change(screen.getByRole("combobox", { name: "Pixel pitch" }), { target: { value: "6" } });
    expect(screen.getByRole("figure").textContent).toContain("Nyquist, 6 µm pixels: 83.3 lp/mm");
    expect(calls.compute).toBe(computations);
    expect(JSON.parse(localStorage.getItem(MTF_PREFERENCES_KEY)!)).toMatchObject({
      diffractionLimit: true,
      frequencyField: 0.4,
      pixelPitchUm: 6,
    });
    fireEvent.change(screen.getByRole("combobox", { name: "MTF method" }), { target: { value: "geometric" } });
    expect((screen.getByRole("button", { name: "Diffraction limit" }) as HTMLButtonElement).disabled).toBe(true);
    expect(screen.getByText("Requires diffraction method.")).toBeTruthy();
    await vi.waitFor(() => expect(calls.compute).toBe(computations + 1));
    expect(screen.queryByTestId("mtf-diffraction-limit")).toBeNull();
  });
  it("blocks moved optics without starting background work", () => {
    const worker = vi.fn();
    vi.stubGlobal("Worker", worker);
    render(<MtfTab L={L} t={mockTheme} preparedState={state} currentEPSD={1} currentPhysStopSD={1} movementActive />);
    expect(screen.getByRole("status").textContent).toContain("tilt or shift");
    expect(worker).not.toHaveBeenCalled();
  });
  it("reuses the deferred request and recomputes only when its aperture changes", async () => {
    const { calls } = stubWorker();
    const context = (aperture: number) =>
      createAnalysisComputationContext({
        preparedState: state,
        dynamicEFL: 0,
        currentEPSD: aperture,
        currentPhysStopSD: aperture,
      });
    const initial = context(1);
    const props = { L, t: mockTheme, preparedState: state, currentEPSD: 9, currentPhysStopSD: 9 };
    const { rerender } = render(<MtfTab {...props} analysisContext={initial} />);
    await screen.findByRole("figure", { name: /image height/ });
    expect(calls.jobs[0].options.pupilSemiDiameterMm).toBe(1);
    rerender(<MtfTab {...props} analysisContext={initial} focalLengthMm={50} />);
    expect(calls.compute).toBe(1);
    rerender(<MtfTab {...props} analysisContext={context(0.5)} focalLengthMm={50} />);
    await vi.waitFor(() => expect(calls.compute).toBe(2));
    expect(calls.jobs[1].options.pupilSemiDiameterMm).toBe(0.5);
    expect(calls.jobs[1].options.stopSemiDiameterMm).toBe(0.5);
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
    // The iris limits the axial beam, so the marked f-number stands alone, however far the 1 mm iris is from f/2.8.
    const header = screen.getByText(/^f\/2\.8 · 49\.2 mm · Diffraction-corrected · /);
    expect(header.textContent).toContain("photopic spectrum");
    expect(header.textContent).toContain("Best axial focus estimate (");
    expect(screen.queryByRole("option", { name: "Single wavelength" })).toBeNull();
    expect(screen.queryByRole("spinbutton", { name: "MTF wavelength" })).toBeNull();
    // The fixture glass has only nd and νd, so its dispersion is estimated and the tab says so.
    expect(screen.getByText("Dispersion of one glass is estimated from nd and νd.")).toBeTruthy();
    expect(screen.queryByText(/own prescription's paraxial focus/)).toBeNull();
  });
  it("names the surface that vignettes the axial beam, but not while the result belongs to an earlier request", async () => {
    // Element rims of 6 mm behind an iris of 8 mm or more clip the axial marginal ray at surface 1.
    const rimmedL = build({
      ...constructionFixtureData(focusedL),
      surfaces: constructionFixtureData(focusedL).surfaces.map((surface) =>
        surface.label === "STO" ? surface : { ...surface, sd: 6 },
      ),
    });
    const rimmedState = prepareRuntimeState(rimmedL, 0, 0);
    stubWorker({ target: rimmedState });
    const tab = (fNumber: number, stop: number) => (
      <MtfTab
        L={rimmedL}
        t={mockTheme}
        preparedState={rimmedState}
        currentEPSD={stop}
        currentPhysStopSD={stop}
        fNumber={fNumber}
        focalLengthMm={49.2}
      />
    );
    const { rerender } = render(tab(2.8, 8));
    await screen.findByText(/^f\/2\.8 \(axial beam vignetted at surface 1\) · 49\.2 mm/);
    // The new label must not carry the previous request's state.
    rerender(tab(2.5, 9));
    expect(screen.getByText(/^f\/2\.5 · 49\.2 mm/)).toBeTruthy();
    expect(await screen.findByText(/^f\/2\.5 \(axial beam vignetted at surface 1\) · 49\.2 mm/)).toBeTruthy();
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
    expect(screen.getByRole("tooltip").textContent).toContain("Best axial focus: moves the image plane");
  });
  it("refocuses a lens whose image plane contradicts its own prescription, and says so", async () => {
    stubWorker();
    render(<MtfTab L={L} t={mockTheme} preparedState={state} currentEPSD={1} currentPhysStopSD={1} />);
    expect(await screen.findByRole("figure", { name: /image height/ })).toBeTruthy();
    expect(screen.getByText(/· Best axial focus estimate \(/)).toBeTruthy();
    const note = screen.getByText(/own prescription's paraxial focus/).closest("p")!.textContent!;
    expect(note).toContain(`${Math.abs(offsetMm).toFixed(2)} mm behind`);
    expect(note).toContain("These curves use best axial focus");
  });
  it.each(["auto", "design", "best-axial"] as const)(
    "labels a shifted held result independently of the %s request",
    async (focus) => {
      // A held worker result exercises plane readouts independently of the main-chart controls.
      localStorage.setItem(MTF_PREFERENCES_KEY, JSON.stringify({ focus, spectrum: "reference" }));
      resetMtfPreferencesCache();
      stubWorker({ heldFocusShiftMm: 10 });
      render(<MtfTab L={L} t={mockTheme} preparedState={state} currentEPSD={1} currentPhysStopSD={1} />);
      await screen.findByRole("figure");
      expect(screen.getByText(/· Held image plane \(\+10\.000 mm from authored plane\)/)).toBeTruthy();
      const note = screen.getByText(/own prescription's paraxial focus/).closest("p")!.textContent!;
      expect(note).toContain("These curves use a held image plane (+10.000 mm from the authored plane).");
      expect(note).not.toContain("out of focus");
      expect(note).not.toContain("best axial focus");
      expect(screen.queryByRole("button", { name: "Refocus automatically" })).toBeNull();
      expect(screen.queryByRole("note", { name: "Limited data for this chart" })).toBeNull();
    },
  );
  it.each(["auto", "design", "best-axial"] as const)(
    "warns that a held zero shift uses the authored plane despite a %s request",
    async (focus) => {
      localStorage.setItem(MTF_PREFERENCES_KEY, JSON.stringify({ focus, spectrum: "reference" }));
      resetMtfPreferencesCache();
      stubWorker({ heldFocusShiftMm: 0 });
      render(<MtfTab L={L} t={mockTheme} preparedState={state} currentEPSD={1} currentPhysStopSD={1} />);
      await screen.findByRole("figure");
      expect(screen.getByText(/· Held image plane \(\+0\.000 mm from authored plane\)/)).toBeTruthy();
      const note = screen.getByText(/own prescription's paraxial focus/).closest("p")!.textContent!;
      expect(note).toContain("Curves at the authored plane are out of focus.");
      expect(screen.getByRole("button", { name: "Refocus automatically" })).toBeTruthy();
    },
  );
  it("holds the chart behind a data warning until the reader dismisses it", async () => {
    stubWorker({ target: focusedState });
    const tab = (
      <MtfTab L={focusedL} t={mockTheme} preparedState={focusedState} currentEPSD={1} currentPhysStopSD={1} />
    );
    const { unmount } = render(tab);
    const chart = await screen.findByRole("figure", { name: /image height/ });
    // The fixture glass has only nd and νd, so the photopic chart starts blurred and inert behind the warning.
    const warning = screen.getByRole("note", { name: "Limited data for this chart" });
    expect(warning.textContent).toContain("Every glass is known only by nd and νd");
    expect(chart.closest<HTMLElement>("[inert]")!.style.filter).toContain("blur");
    fireEvent.click(within(warning).getByRole("button", { name: "Show chart anyway" }));
    expect(screen.queryByRole("note", { name: "Limited data for this chart" })).toBeNull();
    expect(screen.getByRole("figure", { name: /image height/ })).toBe(chart);
    expect(chart.closest("[inert]")).toBeNull();
    // The gaps stay one click away, and the dismissal survives the tab closing and reopening.
    expect(screen.getByText(/Limited data for this chart \(1\)/)).toBeTruthy();
    unmount();
    render(tab);
    await screen.findByRole("figure", { name: /image height/ });
    expect(screen.queryByRole("note", { name: "Limited data for this chart" })).toBeNull();
    // A single-wavelength chart the reader asks for has no gap to report.
    fireEvent.change(screen.getByRole("combobox", { name: "MTF spectrum" }), { target: { value: "reference" } });
    await vi.waitFor(() => expect(screen.queryByText(/Limited data for this chart/)).toBeNull());
  });
  it("lists a source erratum beside the chart without holding the chart back", async () => {
    // Catalog glass leaves no dispersion gap, so the unresolved source contradiction is the only item.
    const noted = build({
      ...constructionFixtureData(buildChromaticPositiveElementLens("test-source-erratum")),
      sourceErrata: [{ status: "unresolved", note: "The table traces to a shorter focal length than stated." }],
    });
    const notedState = prepareRuntimeState(noted, 0, 0);
    stubWorker({ target: notedState });
    render(<MtfTab L={noted} t={mockTheme} preparedState={notedState} currentEPSD={1} currentPhysStopSD={1} />);
    const chart = await screen.findByRole("figure", { name: /image height/ });
    expect(screen.queryByRole("note", { name: "Limited data for this chart" })).toBeNull();
    expect(chart.closest("[inert]")).toBeNull();
    expect(screen.getByText(/Notes on this lens's data \(1\)/)).toBeTruthy();
    expect(screen.getByText(/these curves describe the printed table: The table traces/)).toBeTruthy();
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
  const computed = computeMtf(
    ...mtfInputs(state, {
      method: "geometric",
      spectrum: "reference",
      focus: "design",
      pupilSemiDiameterMm: 1,
      stopSemiDiameterMm: 1,
      fieldFractions: [0, 0.5, 1],
      maxGridSize: 32,
    }),
  );
  const result: MtfResult = {
    ...computed,
    fields: computed.fields.map((field) => ({ ...field, status: "converged", convergedThroughLpMm: 100 })),
  };
  // Distinct synthetic S/T references prove the UI reads the supplied pupil response without normalizing curves.
  const withLimit: MtfResult = {
    ...result,
    method: "diffraction",
    fields: result.fields.map((field) => ({
      ...field,
      diffractionLimit: {
        sagittal: result.frequenciesPerMm.map((f) => 1 - f / 200),
        tangential: result.frequenciesPerMm.map((f) => 1 - f / 250),
      },
    })),
  };
  // Supplied diagnostics isolate presentation from the engine's numerical decisions.
  const diagnostics: MtfResult = {
    ...result,
    focus: {
      requestedMode: "auto",
      mode: "best-axial",
      appliedShiftMm: 0.125,
      bestAxialShiftMm: 0.125,
      designScore: 0.3456,
      bestScore: 0.7891,
      imagePlaneOffsetMm: -0.25,
      imagePlaneInconsistent: true,
    },
    fields: result.fields.map((field, i) => ({
      ...field,
      imageHeightMm: i * 5,
      targetImageHeightMm: i * 5,
      status: (["converged", "unconverged", "unavailable"] as const)[i],
      reason: i === 2 ? "trace-failed" : null,
      gridSize: [64, 128, 32][i],
      maxDelta: [0.0042, 0.0234, null][i],
      convergedThroughLpMm: [30, 10, null][i],
      unknownFluxFraction: [0, 0.003, 0.02][i],
      unaimedRays: i,
      failedRays: i * 2,
      pupilSampling: i === 1 ? "launch-plane" : "stop",
      notes: i === 2 ? [] : ["Shared sampling note.", `Only field ${i}.`],
      message: `Field ${i} message.`,
    })),
  };
  const advancedHeaders = [
    "Grid size",
    "Max ΔMTF",
    "Stable through",
    "Unresolved flux",
    "Unaimed samples",
    "Failed samples",
    "Pupil sampling",
    "Field notes",
    "Field message",
  ];

  it("keeps the default table and deduplicated notes unchanged with Advanced off", () => {
    const props = { result: diagnostics, frequencies: [10, 30] as const, t: mockTheme };
    const { container, rerender } = render(<MtfFieldSummary {...props} />);
    const original = container.innerHTML;
    expect(screen.getAllByText("Shared sampling note.")).toHaveLength(1);
    expect(
      within(screen.getByRole("table"))
        .getAllByRole("columnheader")
        .map((th) => th.textContent),
    ).toEqual(["Height (mm)", "10 lp/mm", "30 lp/mm", "Rays", "Status"]);
    rerender(<MtfFieldSummary {...props} advanced={false} />);
    expect(container.innerHTML).toBe(original);
    for (const name of advancedHeaders) expect(screen.queryByRole("columnheader", { name })).toBeNull();
  });

  it("attaches sampling details, notes and messages to their fields without disclosing withheld values", () => {
    render(<MtfFieldSummary result={diagnostics} frequencies={[10, 30]} t={mockTheme} advanced />);
    const table = screen.getByRole("table");
    expect(table.closest("details")!.open).toBe(true);
    for (const name of advancedHeaders)
      expect(within(table).getByRole("columnheader", { name }).getAttribute("scope")).toBe("col");
    const rows = within(table).getAllByRole("row").slice(1);
    const cells = rows.map((row) =>
      within(row)
        .getAllByRole("cell")
        .map((cell) => cell.textContent),
    );
    expect(cells[0].slice(3)).toEqual([
      "converged",
      "64",
      "0.0042",
      "30 lp/mm",
      "",
      "0",
      "0",
      "",
      "Shared sampling note.Only field 0.",
      "Field 0 message.",
    ]);
    expect(cells[1].slice(3)).toEqual([
      "unconverged",
      "128",
      "0.0234",
      "10 lp/mm",
      "0.30 %",
      "1",
      "2",
      "Launch plane",
      "Shared sampling note.Only field 1.",
      "Field 1 message.",
    ]);
    expect(cells[2].slice(3)).toEqual([
      "unavailable",
      "32",
      "—",
      "Not established",
      "2.00 %",
      "2",
      "4",
      "",
      "",
      "Field 2 message.",
    ]);
    expect(cells[0][0]).not.toBe("—");
    expect(cells[1].slice(0, 2)).toEqual(["—", "—"]);
    expect(cells[2].slice(0, 2)).toEqual(["—", "—"]);
    expect(within(rows[0]).queryByText("Only field 1.")).toBeNull();
    expect(within(rows[1]).queryByText("Only field 0.")).toBeNull();
    expect(screen.getAllByText("Shared sampling note.")).toHaveLength(2);
  });

  it.each(["geometric", "diffraction"] as const)(
    "uses each aperture's own %s notes and sampling diagnostics",
    (method) => {
      const fluxNote =
        method === "geometric"
          ? "Unresolved flux 0.3%; MTF error ≤ 2ε."
          : "Unresolved flux 0.3%; the diffraction estimate does not account for it.";
      const main = { ...diagnostics, method, fields: diagnostics.fields.map((f) => ({ ...f, notes: [fluxNote] })) };
      const comparison: MtfResult = {
        ...main,
        fields: main.fields.map((field) => ({
          ...field,
          gridSize: 256,
          maxDelta: 0,
          convergedThroughLpMm: 50,
          unknownFluxFraction: 0.001,
          unaimedRays: 5,
          failedRays: 7,
          notes: ["Comparison sampling note."],
          message: "Comparison message.",
        })),
      };
      render(<MtfFieldSummary result={main} comparison={comparison} frequencies={[10]} t={mockTheme} advanced />);
      const rows = within(screen.getByRole("table"))
        .getAllByRole("rowheader", { name: "f/8" })
        .map((th) => th.closest("tr")!);
      for (const row of rows) {
        expect(
          within(row)
            .getAllByRole("cell")
            .slice(3)
            .map((cell) => cell.textContent),
        ).toEqual([
          "256",
          "0.0000",
          "50 lp/mm",
          "0.10 %",
          "5",
          "7",
          row === rows[1] ? "Launch plane" : "",
          "Comparison sampling note.",
          "Comparison message.",
        ]);
        expect(within(row).queryByText(fluxNote)).toBeNull();
      }
      expect(screen.getAllByText(fluxNote)).toHaveLength(3);
      if (method === "diffraction") expect(document.body.textContent).not.toContain("MTF error ≤");
    },
  );

  it("persists Advanced without retracing or changing diagnostic disclosure and restores the default render", async () => {
    const { calls } = stubWorker({ resultForJob: () => diagnostics });
    const { container, unmount } = render(
      <MtfTab L={L} t={mockTheme} preparedState={state} currentEPSD={1} currentPhysStopSD={1} />,
    );
    await screen.findByRole("figure");
    const original = container.innerHTML;
    const computations = calls.compute;
    const toggle = screen.getByRole("button", { name: "Advanced" });
    expect(toggle.getAttribute("aria-pressed")).toBe("false");
    expect(toggle.title).toBe("Per-field sampling details and the focus search");
    expect(screen.queryByRole("region", { name: "Focus search" })).toBeNull();
    expect(screen.queryByRole("columnheader", { name: "Grid size" })).toBeNull();
    fireEvent.click(toggle);
    expect(toggle.getAttribute("aria-pressed")).toBe("true");
    expect((screen.getByRole("checkbox", { name: /Show diagnostic estimates/ }) as HTMLInputElement).checked).toBe(
      false,
    );
    const focus = within(screen.getByRole("region", { name: "Focus search" }));
    const value = (label: string) =>
      focus.getByRole("rowheader", { name: label }).closest("tr")!.querySelector("td")!.textContent;
    expect(value("Requested mode")).toBe("Auto");
    expect(value("Applied mode")).toBe("Best axial focus");
    expect(value("Applied shift from authored plane")).toBe("+0.1250 mm");
    expect(value("Best-axial shift from authored plane")).toBe("+0.1250 mm");
    expect(value("Design-plane score (mean axial geometric MTF at 10–50 lp/mm)")).toBe("0.3456");
    expect(value("Best-plane score (mean axial geometric MTF at 10–50 lp/mm)")).toBe("0.7891");
    expect(value("Image-plane offset (paraxial focus − authored plane)")).toBe("−0.2500 mm");
    expect(value("Image-plane consistency")).toBe("Flagged inconsistent");
    expect(focus.getByText(/numerical sampling and the focus search, not physical accuracy/)).toBeTruthy();
    fireEvent.click(toggle);
    expect(container.innerHTML).toBe(original);
    fireEvent.click(screen.getByRole("checkbox", { name: /Show diagnostic estimates/ }));
    fireEvent.click(toggle);
    expect((screen.getByRole("checkbox", { name: /Show diagnostic estimates/ }) as HTMLInputElement).checked).toBe(
      true,
    );
    expect(calls.compute).toBe(computations);
    expect(JSON.parse(localStorage.getItem(MTF_PREFERENCES_KEY)!).advanced).toBe(true);
    unmount();
    resetMtfPreferencesCache();
    render(<MtfTab L={L} t={mockTheme} preparedState={state} currentEPSD={1} currentPhysStopSD={1} />);
    await screen.findByRole("region", { name: "Focus search" });
    expect(screen.getByRole("button", { name: "Advanced" }).getAttribute("aria-pressed")).toBe("true");
  });

  it("shows the comparison's own focus and unavailable field diagnostics", async () => {
    const comparison: MtfResult = {
      ...diagnostics,
      focus: {
        ...diagnostics.focus!,
        requestedMode: "design",
        mode: "held",
        appliedShiftMm: -0.5,
        bestAxialShiftMm: 0.75,
        designScore: 0.4567,
        bestScore: 0.8765,
        imagePlaneOffsetMm: 0.01,
        imagePlaneInconsistent: false,
      },
      fields: diagnostics.fields.map((field) => ({
        ...field,
        status: "unavailable",
        sagittal: [],
        tangential: [],
        gridSize: 16,
      })),
    };
    const f8Stop = stopSemiDiameterForFNumber(8, 0, L);
    stubWorker({ resultForJob: (job) => (job.options.stopSemiDiameterMm === f8Stop ? comparison : diagnostics) });
    localStorage.setItem(MTF_PREFERENCES_KEY, JSON.stringify({ advanced: true, compareF8: true }));
    resetMtfPreferencesCache();
    render(<MtfTab L={L} t={mockTheme} preparedState={state} currentEPSD={1} currentPhysStopSD={1} fNumber={2.8} />);
    await screen.findAllByRole("rowheader", { name: /^f\/8, wide-open plane/ });
    const focus = within(screen.getByRole("region", { name: "Focus search" }));
    expect(focus.getByRole("columnheader", { name: "f/8" })).toBeTruthy();
    const values = (label: string) =>
      within(focus.getByRole("rowheader", { name: label }).closest("tr")!)
        .getAllByRole("cell")
        .map((td) => td.textContent);
    expect(values("Requested mode")).toEqual(["Auto", "Design plane"]);
    expect(values("Applied mode")).toEqual(["Best axial focus", "Held image plane"]);
    expect(values("Applied shift from authored plane")).toEqual(["+0.1250 mm", "−0.5000 mm"]);
    expect(values("Best-axial shift from authored plane")).toEqual(["+0.1250 mm", "+0.7500 mm"]);
    expect(values("Design-plane score (mean axial geometric MTF at 10–50 lp/mm)")).toEqual(["0.3456", "0.4567"]);
    expect(values("Best-plane score (mean axial geometric MTF at 10–50 lp/mm)")).toEqual(["0.7891", "0.8765"]);
    expect(values("Image-plane offset (paraxial focus − authored plane)")).toEqual(["−0.2500 mm", "+0.0100 mm"]);
    expect(values("Image-plane consistency")).toEqual(["Flagged inconsistent", "Not flagged inconsistent"]);
    fireEvent.click(screen.getByRole("button", { name: "Compare f/8" }));
    expect(focus.queryByRole("columnheader", { name: "f/8" })).toBeNull();
    expect(screen.queryByRole("rowheader", { name: /^f\/8/ })).toBeNull();
  });

  it("labels absent focus diagnostics without inventing scores or a consistency assessment", async () => {
    localStorage.setItem(MTF_PREFERENCES_KEY, JSON.stringify({ advanced: true }));
    resetMtfPreferencesCache();
    stubWorker({ resultForJob: () => ({ ...diagnostics, focus: null }) });
    render(<MtfTab L={L} t={mockTheme} preparedState={state} currentEPSD={1} currentPhysStopSD={1} />);
    const focus = within(await screen.findByRole("region", { name: "Focus search" }));
    expect(focus.getAllByRole("cell").map((cell) => cell.textContent)).toEqual([
      "—",
      "—",
      "—",
      "—",
      "—",
      "—",
      "—",
      "Not assessed",
    ]);
  });
  it("leaves default chart and CSV output unchanged when the reference is off", () => {
    const props = { result: withLimit, view: "field" as const, frequencies: [10, 30] as const, t: mockTheme };
    const { container, rerender } = render(<MtfChart {...props} />);
    const original = container.innerHTML;
    rerender(<MtfChart {...props} diffractionLimit={false} frequencyField="overview" pixelPitchUm={null} />);
    expect(container.innerHTML).toBe(original);
    expect(mtfCsv(withLimit, [10, 30], false, result, false)).toBe(mtfCsv(withLimit, [10, 30], false, result));
    expect(screen.queryByTestId("mtf-diffraction-limit")).toBeNull();
    const mainPaths = () => [...container.querySelectorAll('path[stroke-width="2"]')].map((p) => p.outerHTML);
    const curves = mainPaths();
    rerender(<MtfChart {...props} diffractionLimit />);
    expect(mainPaths()).toEqual(curves);
    expect(screen.getByText("Diffraction limit of the same traced pupil (no aberration)")).toBeTruthy();
    fireEvent.keyDown(screen.getByRole("group", { name: /MTF chart values/ }), { key: "Home" });
    expect(screen.getByText(/— 10 lp\/mm S/).textContent).toContain("Diffraction limit: 10 lp/mm S 0.950 T 0.960");
    rerender(<MtfChart {...props} diffractionLimit={false} />);
    fireEvent.keyDown(screen.getByRole("group", { name: /MTF chart values/ }), { key: "Escape" });
    expect(container.innerHTML).toBe(original);
  });
  it("withholds reference values with their curves and discloses diagnostic estimates together", () => {
    const uncertain: MtfResult = {
      ...withLimit,
      fields: withLimit.fields.map((field, i) => ({
        ...field,
        status: i === 0 ? "unconverged" : i === 1 ? "unavailable" : "converged",
        convergedThroughLpMm: i === 2 ? 20 : null,
      })),
    };
    const props = {
      result: uncertain,
      view: "field" as const,
      frequencies: [30] as const,
      t: mockTheme,
      diffractionLimit: true,
    };
    const { rerender } = render(<MtfChart {...props} />);
    const referencePaths = () =>
      [...screen.getByTestId("mtf-diffraction-limit").querySelectorAll("path")].filter((p) => p.getAttribute("d"));
    expect(referencePaths()).toHaveLength(0);
    rerender(<MtfChart {...props} diagnostic />);
    expect(referencePaths()).toHaveLength(2);
    expect(referencePaths().every((p) => p.getAttribute("d")!.match(/M/g)?.length === 2)).toBe(true);
    rerender(<MtfChart {...props} view="frequency" frequencyField={1} />);
    fireEvent.keyDown(screen.getByRole("group", { name: /MTF chart values/ }), { key: "End" });
    expect(screen.getByText(/^100 lp\/mm —/).textContent).not.toMatch(/S [0-9]/);
    const dimPaths = () => [...screen.getByTestId("mtf-diffraction-limit").querySelectorAll('g[opacity="0.35"] path')];
    expect(dimPaths().some((p) => p.getAttribute("d"))).toBe(false);
    rerender(<MtfChart {...props} view="frequency" frequencyField={1} diagnostic />);
    expect(dimPaths().filter((p) => p.getAttribute("d"))).toHaveLength(2);
    expect(screen.getByText(/^100 lp\/mm —/).textContent).toContain("Diffraction limit: 100 %");
    expect(screen.getByText(/^100 lp\/mm —/).textContent).toContain("S 0.500 T 0.600");
  });
  it("selects one computed frequency field for the main, f/8 and reference curves", () => {
    const props = {
      result: withLimit,
      comparison: withLimit,
      view: "frequency" as const,
      frequencies: [10] as const,
      t: mockTheme,
      diffractionLimit: true,
    };
    const { rerender } = render(<MtfChart {...props} frequencyField={0.5} comparisonLabel="f/8, wide-open plane" />);
    expect(screen.queryByText(/^Center ·/)).toBeNull();
    expect(screen.queryByText(/^Edge ·/)).toBeNull();
    expect(screen.getAllByTestId("mtf-diffraction-limit")).toHaveLength(2);
    for (const group of screen.getAllByTestId("mtf-diffraction-limit"))
      expect(group.querySelectorAll('path[stroke-dasharray="1,3"]')).toHaveLength(2);
    fireEvent.keyDown(screen.getByRole("group", { name: /MTF chart values/ }), { key: "End" });
    expect(screen.getByText(/^100 lp\/mm —/).textContent).toContain("f/8, wide-open plane diffraction limit: 50 %");
    rerender(<MtfChart {...props} frequencyField={0.4} />);
    expect(screen.getByText(/^Center ·/)).toBeTruthy();
    expect(screen.getByText(/^Edge ·/)).toBeTruthy();
  });
  it("places Nyquist at the pixel-grid sampling frequency or labels it beyond the right edge", () => {
    const props = { result, view: "frequency" as const, frequencies: [10] as const, t: mockTheme };
    const { rerender } = render(<MtfChart {...props} pixelPitchUm={8} />);
    const line = screen.getByTestId("mtf-nyquist").querySelector("line")!;
    // Plot spans x=40..350 for 0..100 lp/mm: 8 µm gives 62.5 lp/mm.
    expect(Number(line.getAttribute("x1"))).toBeCloseTo(40 + 310 * 0.625);
    expect(line.getAttribute("x2")).toBe(line.getAttribute("x1"));
    expect(screen.getByRole("status").textContent).toContain("Nyquist, 8 µm pixels: 62.5 lp/mm");
    expect(screen.getByRole("status").textContent).toContain("not a prediction of camera or sensor MTF");
    rerender(<MtfChart {...props} pixelPitchUm={5} />);
    expect(screen.getByTestId("mtf-nyquist").querySelector("line")!.getAttribute("x1")).toBe("350");
    rerender(<MtfChart {...props} pixelPitchUm={3} />);
    const marker = screen.getByTestId("mtf-nyquist");
    expect(marker.querySelector("line")).toBeNull();
    expect(marker.querySelector("text")!.getAttribute("x")).toBe("350");
    expect(marker.textContent).toContain("Nyquist, 3 µm pixels: 166.7 lp/mm →");
    expect(screen.getByRole("status").textContent).toContain("beyond chart range");
    rerender(<MtfChart {...props} view="field" pixelPitchUm={8} />);
    expect(screen.queryByTestId("mtf-nyquist")).toBeNull();
    expect(screen.queryByRole("status")).toBeNull();
  });
  it("appends limit CSV columns after f/8 columns and applies the same table disclosure", async () => {
    const limited: MtfResult = {
      ...withLimit,
      fields: withLimit.fields.map((field, i) => ({
        ...field,
        status: i === 0 ? "unavailable" : i === 1 ? "unconverged" : "converged",
        convergedThroughLpMm: i === 2 ? 20 : null,
      })),
    };
    const base = mtfCsv(limited, [10, 30], false, limited)
      .split("\n")
      .map((r) => r.split(","));
    const normal = mtfCsv(limited, [10, 30], false, limited, true)
      .split("\n")
      .map((r) => r.split(","));
    normal.forEach((row, i) => expect(row.slice(0, base[0].length)).toEqual(base[i]));
    expect(normal[0].slice(base[0].length)).toEqual([
      "10 lp/mm diffraction limit sagittal",
      "10 lp/mm diffraction limit tangential",
      "30 lp/mm diffraction limit sagittal",
      "30 lp/mm diffraction limit tangential",
      "f/8 10 lp/mm diffraction limit sagittal",
      "f/8 10 lp/mm diffraction limit tangential",
      "f/8 30 lp/mm diffraction limit sagittal",
      "f/8 30 lp/mm diffraction limit tangential",
    ]);
    expect(normal[1].slice(-8)).toEqual(Array(8).fill(""));
    expect(normal[2].slice(-8)).toEqual(Array(8).fill(""));
    expect(normal[3].slice(-8)).toEqual(["0.9500", "0.9600", "", "", "0.9500", "0.9600", "", ""]);
    const diagnostic = mtfCsv(limited, [10, 30], true, limited, true)
      .split("\n")
      .map((r) => r.split(","));
    expect(diagnostic[1].slice(-8)).toEqual(Array(8).fill(""));
    expect(diagnostic[2].slice(-8)).toEqual([
      "0.9500",
      "0.9600",
      "0.8500",
      "0.8800",
      "0.9500",
      "0.9600",
      "0.8500",
      "0.8800",
    ]);
    expect(mtfCsv(result, [10], false, null, true)).toBe(mtfCsv(result, [10]));
    const writeText = vi.fn().mockResolvedValue(undefined);
    vi.stubGlobal("navigator", { ...navigator, clipboard: { writeText } });
    const props = {
      result: limited,
      comparison: limited,
      frequencies: [10, 30] as const,
      t: mockTheme,
      diffractionLimit: true,
      pixelPitchUm: 6 as const,
    };
    const { rerender } = render(<MtfFieldSummary {...props} />);
    expect(screen.getByRole("table").querySelector("caption")!.textContent).toContain(
      "Diffraction limit of the same traced pupil (no aberration)",
    );
    expect(screen.getByRole("table").querySelector("caption")!.textContent).toContain(
      "Nyquist, 6 µm pixels: 83.3 lp/mm",
    );
    const limitCells = () =>
      within(screen.getByRole("table"))
        .getAllByRole("row")
        .slice(1)
        .map((row) =>
          within(row)
            .getAllByRole("cell")
            .slice(2, 4)
            .map((cell) => cell.textContent),
        );
    expect(limitCells()).toEqual([
      ["—", "—"],
      ["—", "—"],
      ["0.950 / 0.960", "—"],
      ["—", "—"],
      ["—", "—"],
      ["0.950 / 0.960", "—"],
    ]);
    fireEvent.click(screen.getByRole("button", { name: "Copy CSV" }));
    await screen.findByText("Copied");
    expect(writeText).toHaveBeenCalledWith(mtfCsv(limited, [10, 30], false, limited, true));
    rerender(<MtfFieldSummary {...props} diagnostic />);
    expect(limitCells()[1]).toEqual(["0.950 / 0.960", "0.850 / 0.880"]);
  });
  it("withholds unconverged frequency readouts and values beyond the converged band", () => {
    const uncertain: MtfResult = {
      ...result,
      fields: result.fields.map((field, i) => ({
        ...field,
        status: i === 0 ? "unconverged" : "converged",
        convergedThroughLpMm: i === 0 ? null : 20,
      })),
    };
    const { rerender, container } = render(
      <MtfChart result={uncertain} view="frequency" frequencies={[10, 30]} t={mockTheme} />,
    );
    const chart = screen.getByRole("group", { name: /MTF chart values/ });
    fireEvent.keyDown(chart, { key: "Home" });
    expect(screen.getByText(/^0 lp\/mm —/).textContent).not.toContain("(unconverged)");
    fireEvent.keyDown(chart, { key: "ArrowRight" });
    expect(screen.getByText(/^2 lp\/mm —/).textContent).not.toContain("(unconverged)");
    fireEvent.keyDown(chart, { key: "End" });
    const readout = screen.getByText(/^100 lp\/mm —/);
    expect(readout.textContent).not.toMatch(/S [0-9]/);
    expect(container.innerHTML).not.toContain("NaN");
    rerender(<MtfChart result={uncertain} view="frequency" frequencies={[10, 30]} t={mockTheme} diagnostic />);
    expect(screen.getByText(/^100 lp\/mm —/).textContent).toMatch(/S [0-9]/);
    expect(screen.getByText(/Diagnostic estimates include unconverged values/)).toBeTruthy();
    // The active frequency index exceeds the number of field samples after changing views.
    rerender(<MtfChart result={uncertain} view="field" frequencies={[10, 30]} t={mockTheme} diagnostic />);
    expect(container.innerHTML).not.toContain("NaN");
  });
  it("identifies comparison values at their own physical image height", () => {
    const comparison: MtfResult = {
      ...result,
      fields: result.fields.map((field) => ({
        ...field,
        imageHeightMm: field.imageHeightMm! + 3,
      })),
    };
    const { rerender, container } = render(
      <MtfChart
        result={result}
        comparison={comparison}
        comparisonLabel="f/8"
        view="field"
        frequencies={[10]}
        t={mockTheme}
      />,
    );
    fireEvent.keyDown(screen.getByRole("group", { name: /MTF chart values/ }), { key: "End" });
    expect(screen.getByText(/lp\/mm S/).textContent).toContain(
      `f/8 at ${comparison.fields[2].imageHeightMm!.toFixed(2)} mm:`,
    );
    rerender(<MtfChart result={result} comparison={comparison} view="frequency" frequencies={[10]} t={mockTheme} />);
    fireEvent.keyDown(screen.getByRole("group", { name: /MTF chart values/ }), { key: "End" });
    rerender(<MtfChart result={result} comparison={comparison} view="field" frequencies={[10]} t={mockTheme} />);
    expect(container.innerHTML).not.toContain("NaN");
  });
  it("draws comparison estimates beyond the stable frequency band only when disclosed", () => {
    const comparison = { ...result, fields: result.fields.map((field) => ({ ...field, convergedThroughLpMm: 20 })) };
    const { container, rerender } = render(
      <MtfChart
        result={result}
        comparison={comparison}
        comparisonLabel="f/8"
        view="frequency"
        frequencies={[10]}
        t={mockTheme}
      />,
    );
    const faded = () => [...container.querySelectorAll('g[opacity="0.6"] > g[opacity="0.35"] path')];
    expect(faded().some((path) => path.getAttribute("d"))).toBe(false);
    fireEvent.keyDown(screen.getByRole("group", { name: /MTF chart values/ }), { key: "End" });
    expect(screen.getByText(/^100 lp\/mm —/).textContent).toMatch(/f\/8: Center.*—/);
    rerender(
      <MtfChart
        result={result}
        comparison={comparison}
        comparisonLabel="f/8"
        view="frequency"
        frequencies={[10]}
        t={mockTheme}
        diagnostic
      />,
    );
    expect(faded().filter((path) => path.getAttribute("d"))).toHaveLength(6);
    expect(faded().every((path) => path.getAttribute("stroke-width") === "1.1")).toBe(true);
    expect(screen.getByText(/^100 lp\/mm —/).textContent).toMatch(/f\/8: Center.*S [0-9]/);
  });
  it("appends labelled comparison CSV columns and table rows under the same disclosure policy", async () => {
    const comparison: MtfResult = {
      ...result,
      fields: result.fields.map((field, i) => ({
        ...field,
        imageHeightMm: field.imageHeightMm! + 1,
        status: i === 0 ? "unavailable" : i === 1 ? "unconverged" : "converged",
        convergedThroughLpMm: i === 2 ? 10 : null,
      })),
    };
    const main = mtfCsv(result, [10, 30])
      .split("\n")
      .map((row) => row.split(","));
    const csv = mtfCsv(result, [10, 30], false, comparison)
      .split("\n")
      .map((row) => row.split(","));
    csv.forEach((row, i) => expect(row.slice(0, main[0].length)).toEqual(main[i]));
    expect(csv[0].slice(9, 12)).toEqual(["f/8 image height (mm)", "f/8 10 lp/mm sagittal", "f/8 10 lp/mm tangential"]);
    expect(csv[1].slice(10, 14)).toEqual(["", "", "", ""]);
    expect(csv[2].slice(10, 14)).toEqual(["", "", "", ""]);
    expect(csv[3].slice(12, 14)).toEqual(["", ""]);
    expect(csv[3][9]).toBe(comparison.fields[2].imageHeightMm!.toFixed(3));
    const estimates = mtfCsv(result, [10, 30], true, comparison)
      .split("\n")
      .map((row) => row.split(","));
    expect(estimates[1].slice(10, 14)).toEqual(["", "", "", ""]);
    expect(estimates[2].slice(10, 14).every(Boolean)).toBe(true);
    expect(estimates[3].slice(10, 14).every(Boolean)).toBe(true);
    const writeText = vi.fn().mockResolvedValue(undefined);
    vi.stubGlobal("navigator", { ...navigator, clipboard: { writeText } });
    const { rerender } = render(
      <MtfFieldSummary
        result={result}
        comparison={comparison}
        mainLabel="f/2.8"
        comparisonLabel="f/8, design plane"
        frequencies={[10, 30]}
        t={mockTheme}
      />,
    );
    const table = screen.getByRole("table");
    expect(within(table).getAllByRole("rowheader", { name: "f/2.8" })).toHaveLength(3);
    const comparedRows = within(table)
      .getAllByRole("rowheader", { name: "f/8, design plane" })
      .map((th) => th.closest("tr")!);
    expect(
      within(comparedRows[1])
        .getAllByRole("cell")
        .slice(0, 2)
        .map((cell) => cell.textContent),
    ).toEqual(["—", "—"]);
    fireEvent.click(screen.getByRole("button", { name: "Copy CSV" }));
    await screen.findByText("Copied");
    expect(writeText).toHaveBeenCalledWith(mtfCsv(result, [10, 30], false, comparison));
    rerender(
      <MtfFieldSummary result={result} comparison={comparison} frequencies={[10, 30]} t={mockTheme} diagnostic />,
    );
    const diagnosticRow = within(screen.getByRole("table"))
      .getAllByRole("rowheader", { name: "f/8" })[1]
      .closest("tr")!;
    expect(within(diagnosticRow).getAllByRole("cell")[0].textContent).toMatch(/0\.[0-9]+ \/ 0\.[0-9]+/);
  });
  it("keeps nonconverged status rows in normal exports and qualifies diagnostic values", () => {
    const uncertain: MtfResult = {
      ...result,
      fields: [{ ...result.fields[0], status: "unconverged", convergedThroughLpMm: null }],
    };
    const normal = mtfCsv(uncertain, [10, 30]).split("\n")[1].split(",");
    expect(normal.slice(2, 6)).toEqual(["", "", "", ""]);
    expect(normal[6]).toBe("unconverged");
    const diagnostic = mtfCsv(uncertain, [10, 30], true);
    expect(diagnostic).toContain("diagnostic estimates included");
    expect(diagnostic).toContain(uncertain.fields[0].sagittal[uncertain.frequenciesPerMm.indexOf(10)].toFixed(4));
  });
  it("prevents stale exports from being mistaken for the current settings", () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    vi.stubGlobal("navigator", { ...navigator, clipboard: { writeText } });
    render(<MtfFieldSummary result={result} frequencies={[10, 30]} t={mockTheme} stale />);
    const copy = screen.getByRole("button", { name: "Copy CSV" });
    expect((copy as HTMLButtonElement).disabled).toBe(true);
    fireEvent.click(copy);
    expect(writeText).not.toHaveBeenCalled();
    expect(screen.getByText(/Previous settings: values are updating/)).toBeTruthy();
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
  it("keeps diagnostic disclosure across chart views and resets it for numerical changes", async () => {
    const { calls } = stubWorker();
    render(<MtfTab L={L} t={mockTheme} preparedState={state} currentEPSD={1} currentPhysStopSD={1} />);
    await screen.findByRole("figure", { name: /image height/ });
    const toggle = screen.getByRole("checkbox", { name: /Show diagnostic estimates/ });
    fireEvent.click(toggle);
    const computations = calls.compute;
    fireEvent.click(
      within(screen.getByRole("group", { name: "MTF chart" })).getByRole("button", { name: "Frequency" }),
    );
    expect((screen.getByRole("checkbox", { name: /Show diagnostic estimates/ }) as HTMLInputElement).checked).toBe(
      true,
    );
    expect(calls.compute).toBe(computations);
    fireEvent.change(screen.getByLabelText("MTF spectrum"), { target: { value: "reference" } });
    await vi.waitFor(() =>
      expect((screen.getByRole("checkbox", { name: /Show diagnostic estimates/ }) as HTMLInputElement).checked).toBe(
        false,
      ),
    );
  });
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
      "Image height (mm),Field (%),10 lp/mm sagittal,10 lp/mm tangential,30 lp/mm sagittal,30 lp/mm tangential,Status,Values,Stable through (lp/mm)",
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
    // The f/8 stop comes from the stop rule, not from the current stop, and the iris limits its beam: no note.
    expect(await screen.findByText(/^f\/8, refocused .*\(thin lines\)$/)).toBeTruthy();
    const stopped = calls.jobs.at(-1)!.options;
    const f8Stop = stopSemiDiameterForFNumber(8, 0, L);
    expect(stopped.stopSemiDiameterMm).toBe(f8Stop);
    // The current request's pupil-to-stop ratio (1 : 1 here) carries over to the f/8 stop.
    expect(stopped.pupilSemiDiameterMm).toBeCloseTo(f8Stop, 12);
    const mainFocus = memoizedMtf(state, calls.jobs[0].options).focus!;
    const stoppedFocus = memoizedMtf(state, stopped).focus!;
    const delta = stoppedFocus.appliedShiftMm - mainFocus.appliedShiftMm;
    expect(screen.getByText(/^f\/8, refocused .*\(thin lines\)$/).textContent).toContain(
      `${delta >= 0 ? "+" : "−"}${Math.abs(delta * 1000).toFixed(0)} µm from wide-open plane`,
    );
    unmount();
    render(<MtfTab L={L} t={mockTheme} preparedState={state} currentEPSD={1} currentPhysStopSD={1} fNumber={8} />);
    expect(screen.queryByRole("button", { name: "Compare f/8" })).toBeNull();
  });
  it("shows the f/8 error independently while keeping the main result", async () => {
    const f8Stop = stopSemiDiameterForFNumber(8, 0, L);
    stubWorker({ error: (job) => (job.options.stopSemiDiameterMm === f8Stop ? "Comparison trace failed." : null) });
    render(<MtfTab L={L} t={mockTheme} preparedState={state} currentEPSD={1} currentPhysStopSD={1} fNumber={2.8} />);
    await screen.findByRole("figure");
    fireEvent.click(screen.getByRole("button", { name: "Compare f/8" }));
    expect(await screen.findByText("Calculating f/8 comparison…")).toBeTruthy();
    expect((await screen.findByRole("alert")).textContent).toBe("f/8 comparison: Comparison trace failed.");
    expect(screen.getByRole("figure")).toBeTruthy();
    expect(screen.queryByText(/thin lines/)).toBeNull();
  });
  it("holds the main plane from its first partial result and replaces stale comparisons on policy changes", async () => {
    localStorage.setItem(
      MTF_PREFERENCES_KEY,
      JSON.stringify({ compareF8: true, comparisonFocus: "hold", spectrum: "reference" }),
    );
    resetMtfPreferencesCache();
    const worker = stubWorker({ progress: true, target: focusedState });
    render(
      <MtfTab
        L={focusedL}
        t={mockTheme}
        preparedState={focusedState}
        currentEPSD={1}
        currentPhysStopSD={1}
        fNumber={2.8}
      />,
    );
    expect(screen.getByText(/f\/8 comparison: waiting/)).toBeTruthy();
    await screen.findByText(/Calculating… 1 \/ 11 fields/);
    await vi.waitFor(() => expect(worker.calls.compute).toBe(2));
    const main = memoizedMtf(focusedState, worker.calls.jobs[0].options);
    expect(worker.calls.jobs[1].options.heldFocusShiftMm).toBe(main.focus!.appliedShiftMm);
    expect(await screen.findByText(/^f\/8, wide-open plane .*\(thin lines\)$/)).toBeTruthy();
    fireEvent.click(screen.getByRole("checkbox", { name: /Show diagnostic estimates/ }));
    fireEvent.change(screen.getByRole("combobox", { name: "f/8 comparison image plane" }), {
      target: { value: "refocus" },
    });
    expect(screen.queryByText(/^f\/8, wide-open plane .*\(thin lines\)$/)).toBeNull();
    expect((screen.getByRole("checkbox", { name: /Show diagnostic estimates/ }) as HTMLInputElement).checked).toBe(
      false,
    );
    await vi.waitFor(() => expect(worker.calls.compute).toBe(3));
    expect(worker.calls.jobs[2].options).not.toHaveProperty("heldFocusShiftMm");
    expect(await screen.findByText(/^f\/8, refocused .*from wide-open plane.*\(thin lines\)$/)).toBeTruthy();
    act(() => worker.finish());
    await vi.waitFor(() => expect(screen.queryByText(/Calculating…/)).toBeNull());
    fireEvent.click(screen.getByRole("button", { name: "Compare f/8" }));
    expect(screen.queryByRole("combobox", { name: "f/8 comparison image plane" })).toBeNull();
    expect(screen.queryByText(/thin lines/)).toBeNull();
    expect(screen.queryByRole("columnheader", { name: "Aperture / image plane" })).toBeNull();
  });
  it("waits for the refreshed main focus when a held comparison's aperture changes", async () => {
    localStorage.setItem(
      MTF_PREFERENCES_KEY,
      JSON.stringify({ compareF8: true, comparisonFocus: "hold", spectrum: "reference" }),
    );
    resetMtfPreferencesCache();
    const worker = stubWorker({ progress: true, target: focusedState });
    const tab = (stop: number) => (
      <MtfTab
        L={focusedL}
        t={mockTheme}
        preparedState={focusedState}
        currentEPSD={stop}
        currentPhysStopSD={stop}
        fNumber={2.8}
      />
    );
    const { rerender } = render(tab(1));
    await screen.findByText(/^f\/8, wide-open plane .*\(thin lines\)$/);
    expect(worker.calls.compute).toBe(2);
    rerender(tab(0.8));
    expect(screen.queryByText(/^f\/8, wide-open plane .*\(thin lines\)$/)).toBeNull();
    expect(screen.getByText(/f\/8 comparison: waiting/)).toBeTruthy();
    await vi.waitFor(() => expect(worker.calls.compute).toBe(4));
    const refreshed = memoizedMtf(focusedState, worker.calls.jobs[2].options).focus!;
    expect(worker.calls.jobs[2].options.stopSemiDiameterMm).toBe(0.8);
    expect(worker.calls.jobs[3].options.heldFocusShiftMm).toBe(refreshed.appliedShiftMm);
    expect(worker.calls.jobs[3].options.heldFocusShiftMm).not.toBe(worker.calls.jobs[1].options.heldFocusShiftMm);
    act(() => worker.finish());
    await vi.waitFor(() => expect(screen.queryByText(/Calculating…/)).toBeNull());
  });
});

describe("MTF download actions", () => {
  afterEach(() => vi.restoreAllMocks());

  function downloads() {
    const blobs: Blob[] = [];
    const clicks: Array<{ filename: string; attached: boolean }> = [];
    const revokeObjectURL = vi.fn();
    vi.stubGlobal(
      "URL",
      class extends URL {
        static createObjectURL = vi.fn((blob: Blob) => {
          blobs.push(blob);
          return `blob:mtf-${blobs.length}`;
        });
        static revokeObjectURL = revokeObjectURL;
      },
    );
    vi.spyOn(HTMLAnchorElement.prototype, "click").mockImplementation(function (this: HTMLAnchorElement) {
      clicks.push({ filename: this.download, attached: this.isConnected });
    });
    return { blobs, clicks, revokeObjectURL };
  }

  function readBlob(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsText(blob);
    });
  }

  async function showTab() {
    localStorage.setItem(
      MTF_PREFERENCES_KEY,
      JSON.stringify({
        method: "geometric",
        spectrum: "reference",
        focus: "design",
        advanced: true,
        frequencies: [10],
      }),
    );
    const worker = stubWorker({ target: focusedState });
    const rendered = render(
      <MtfTab
        L={focusedL}
        t={mockTheme}
        preparedState={focusedState}
        currentEPSD={1}
        currentPhysStopSD={1}
        fNumber={2.8}
      />,
    );
    await screen.findByRole("figure");
    const warning = screen.queryByRole("button", { name: "Show chart anyway" });
    if (warning) fireEvent.click(warning);
    return { ...rendered, worker };
  }

  it("opens and navigates the menu by keyboard and downloads contextual view/all CSVs", async () => {
    const { blobs, clicks } = downloads();
    const writeText = vi.fn().mockResolvedValue(undefined);
    vi.stubGlobal("navigator", { ...navigator, clipboard: { writeText } });
    await showTab();
    const button = screen.getByRole("button", { name: "Export" });
    expect(button.getAttribute("aria-expanded")).toBe("false");
    fireEvent.keyDown(button, { key: "ArrowDown" });
    const first = screen.getByRole("menuitem", { name: "CSV — this view" });
    expect(document.activeElement).toBe(first);
    fireEvent.keyDown(first, { key: "End" });
    expect(document.activeElement).toBe(screen.getByRole("menuitem", { name: "PNG" }));
    fireEvent.keyDown(document.activeElement!, { key: "ArrowDown" });
    expect(document.activeElement).toBe(first);
    fireEvent.keyDown(first, { key: "Escape" });
    expect(screen.queryByRole("menu")).toBeNull();
    expect(document.activeElement).toBe(button);
    fireEvent.keyDown(button, { key: "ArrowUp" });
    expect(document.activeElement).toBe(screen.getByRole("menuitem", { name: "PNG" }));
    fireEvent.keyDown(document.activeElement!, { key: "Home" });
    fireEvent.click(screen.getByRole("menuitem", { name: "CSV — this view" }));
    await vi.waitFor(() => expect(clicks).toHaveLength(1));
    expect(screen.queryByRole("menu")).toBeNull();
    expect(document.activeElement).toBe(button);
    const viewCsv = await readBlob(blobs[0]);
    expect(viewCsv).toContain(`# lens_key: ${focusedL.source.key}`);
    expect(viewCsv).toContain("# aperture: selected f/2.8;");
    expect(viewCsv).toContain(`# disclaimer: ${MTF_EXPORT_DISCLAIMER}`);
    expect(viewCsv).toContain("# status: complete");
    const link = viewCsv
      .split("\n")
      .find((line) => line.startsWith("# shared_link: "))!
      .slice("# shared_link: ".length);
    expect(parseSharedMtfSettings(new URL(link).search)).toMatchObject({
      frequencies: [10],
      advanced: true,
      method: "geometric",
    });
    expect(clicks[0]).toMatchObject({ attached: true });
    expect(clicks[0].filename).toMatch(/-image-height-\d{4}-\d{2}-\d{2}-this-view\.csv$/);
    expect(document.querySelector("a[download]")).toBeNull();

    // The legacy action retains its uncaptioned bytes alongside the new downloads.
    fireEvent.click(screen.getByRole("button", { name: "Copy CSV" }));
    await screen.findByText("Copied");
    const legacy = writeText.mock.calls[0][0] as string;
    expect(legacy.startsWith("Image height (mm),Field (%),10 lp/mm sagittal")).toBe(true);
    expect(
      viewCsv
        .split("\n")
        .filter((line) => !/^"?# /.test(line))
        .map((line) => line.slice(0, line.lastIndexOf(",")))
        .join("\n"),
    ).toBe(legacy);

    fireEvent.click(
      within(screen.getByRole("group", { name: "MTF chart" })).getByRole("button", { name: "Frequency" }),
    );
    fireEvent.click(button);
    fireEvent.click(screen.getByRole("menuitem", { name: "CSV — this view" }));
    await vi.waitFor(() => expect(clicks).toHaveLength(2));
    const frequencyCsv = await readBlob(blobs[1]);
    expect(frequencyCsv).toContain("# view: spatial frequency");
    expect(frequencyCsv).toContain("Field (%),Frequency (lp/mm),Image height (mm),Sagittal,Tangential");
    fireEvent.click(button);
    fireEvent.click(screen.getByRole("menuitem", { name: "CSV — all sampled values" }));
    await vi.waitFor(() => expect(clicks).toHaveLength(3));
    expect(clicks[2].filename).toMatch(/-frequency-\d{4}-\d{2}-\d{2}-all-sampled-values\.csv$/);
    const allCsv = await readBlob(blobs[2]);
    expect(allCsv.split("\n").filter((line) => !line.startsWith("# ")).length).toBeGreaterThan(
      frequencyCsv.split("\n").filter((line) => !line.startsWith("# ")).length,
    );
  });

  it("downloads the rendered SVG and a 2× PNG, and discloses PNG failures", async () => {
    const { blobs, clicks } = downloads();
    await showTab();
    fireEvent.click(screen.getByRole("button", { name: "Export" }));
    fireEvent.click(screen.getByRole("menuitem", { name: "SVG" }));
    await vi.waitFor(() => expect(clicks).toHaveLength(1));
    expect(clicks[0].filename).toMatch(/\.svg$/);
    const svg = await readBlob(blobs[0]);
    expect(svg).toContain(MTF_EXPORT_DISCLAIMER);
    expect(svg).toContain('stroke-width="2"');
    expect(svg).toContain("font-family=");
    vi.stubGlobal(
      "Image",
      class {
        onload: (() => void) | null = null;
        set src(_value: string) {
          queueMicrotask(() => this.onload?.());
        }
      },
    );
    // Canvas pixels are stubbed in jsdom; the real export is checked through drawImage/toBlob.
    const drawImage = vi.fn();
    const canvasContext = vi
      .spyOn(HTMLCanvasElement.prototype, "getContext")
      .mockReturnValue({ drawImage } as unknown as CanvasRenderingContext2D);
    vi.spyOn(HTMLCanvasElement.prototype, "toBlob").mockImplementation((callback) =>
      callback(new Blob(["PNG pixels"], { type: "image/png" })),
    );
    fireEvent.click(screen.getByRole("button", { name: "Export" }));
    fireEvent.click(screen.getByRole("menuitem", { name: "PNG" }));
    await vi.waitFor(() => expect(clicks).toHaveLength(2));
    expect(clicks[1].filename).toMatch(/\.png$/);
    expect(blobs.at(-1)?.type).toBe("image/png");
    expect(drawImage.mock.calls[0][3]).toBe(2000);
    expect(drawImage.mock.calls[0][4]).toBeGreaterThan(1000);
    canvasContext.mockReturnValueOnce(null);
    fireEvent.click(screen.getByRole("button", { name: "Export" }));
    fireEvent.click(screen.getByRole("menuitem", { name: "PNG" }));
    expect(await screen.findByRole("alert")).toHaveProperty(
      "textContent",
      "PNG export unavailable in this browser. Try SVG.",
    );
    expect(clicks).toHaveLength(2);
  });

  it("marks a computing result partial and disables downloads of superseded results", async () => {
    const { blobs, clicks } = downloads();
    localStorage.setItem(
      MTF_PREFERENCES_KEY,
      JSON.stringify({ method: "geometric", spectrum: "reference", advanced: true }),
    );
    stubWorker({ target: focusedState, progress: true });
    render(<MtfTab L={focusedL} t={mockTheme} preparedState={focusedState} currentEPSD={1} currentPhysStopSD={1} />);
    await screen.findByRole("figure");
    const warning = screen.queryByRole("button", { name: "Show chart anyway" });
    if (warning) fireEvent.click(warning);
    fireEvent.click(screen.getByRole("button", { name: "Export" }));
    fireEvent.click(screen.getByRole("menuitem", { name: "CSV — this view" }));
    await vi.waitFor(() => expect(clicks).toHaveLength(1));
    expect(await readBlob(blobs[0])).toContain("# status: partial");
    fireEvent.change(screen.getByRole("combobox", { name: "MTF image plane" }), { target: { value: "design" } });
    expect(screen.getByRole("button", { name: "Export" })).toHaveProperty("disabled", true);
    expect(screen.getByRole("button", { name: "Copy CSV" })).toHaveProperty("disabled", true);
  });
});
