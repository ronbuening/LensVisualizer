// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import MtfTab from "../../../../../src/components/display/analysis/MtfTab.js";
import MtfChart from "../../../../../src/components/display/analysis/MtfChart.js";
import { mockTheme } from "../../../../testUtils.js";
import { buildSimplePositiveElementLens } from "../../../optics/testLensFixtures.js";
import { prepareRuntimeState } from "../../../../../src/optics/compat.js";
import { computeMtf } from "../../../../../src/optics/mtf.js";
import type { MtfJob, MtfWorkerReply } from "../../../../../src/components/hooks/mtfWorkerClient.js";

const L = buildSimplePositiveElementLens();
const state = prepareRuntimeState(L, 0, 0);
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
  it("shows both chart views using the same completed worker result", async () => {
    let calculations = 0;
    vi.stubGlobal(
      "Worker",
      class {
        onmessage: ((e: MessageEvent<MtfWorkerReply>) => void) | null = null;
        terminate() {}
        postMessage(message: { type: string; id: number; job: MtfJob }) {
          if (message.type !== "compute") return;
          calculations++;
          const result = computeMtf(state, { ...message.job.options, maxGridSize: 32 });
          queueMicrotask(() => this.onmessage?.({ data: { id: message.id, result } } as MessageEvent<MtfWorkerReply>));
        }
      },
    );
    render(<MtfTab L={L} t={mockTheme} preparedState={state} currentEPSD={1} currentPhysStopSD={1} />);
    expect(await screen.findByRole("figure", { name: /spatial frequency/ })).toBeTruthy();
    fireEvent.change(screen.getByLabelText("MTF chart"), { target: { value: "field" } });
    expect(screen.getByRole("figure", { name: /image height/ })).toBeTruthy();
    expect(calculations).toBe(1);
    expect(screen.getByText(/excludes diffraction/)).toBeTruthy();
  });
  it("draws gaps for unavailable fields without NaN coordinates", () => {
    const result = computeMtf(state, {
      method: "geometric",
      spectrum: "reference",
      pupilSemiDiameterMm: 1,
      stopSemiDiameterMm: 1,
      fieldFractions: [0, 0.5, 1],
      maxGridSize: 32,
    });
    result.fields[1].status = "unavailable";
    const { container } = render(<MtfChart result={result} view="field" t={mockTheme} />);
    expect(container.innerHTML).not.toContain("NaN");
    expect(container.querySelectorAll("path").length).toBe(6);
  });
});
