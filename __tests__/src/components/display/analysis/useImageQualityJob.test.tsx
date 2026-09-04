// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from "vitest";
import { act, cleanup, renderHook } from "@testing-library/react";
import useImageQualityJob from "../../../../../src/components/display/analysis/useImageQualityJob.js";
import { prepareRuntimeState } from "../../../../../src/optics/compat.js";
import { buildSimplePositiveElementLens } from "../../../optics/testLensFixtures.js";
import type {
  ImageQualityJobRequest,
  ImageQualityJobResponse,
} from "../../../../../src/optics/workers/imageQualityJob.js";
import type { ImageQualityOptions, ImageQualityResult } from "../../../../../src/types/imageQuality.js";
class FakeWorker {
  static instances: FakeWorker[] = [];
  onmessage: ((event: MessageEvent<ImageQualityJobResponse>) => void) | null = null;
  onerror: (() => void) | null = null;
  job?: ImageQualityJobRequest;
  terminate = vi.fn();
  constructor() {
    FakeWorker.instances.push(this);
  }
  postMessage(job: ImageQualityJobRequest) {
    this.job = structuredClone(job);
  }
  reply(result: ImageQualityResult, id = this.job!.id) {
    this.onmessage?.({ data: { id, result } } as MessageEvent<ImageQualityJobResponse>);
  }
}
const result: ImageQualityResult = {
  status: "unsupported",
  reason: "fixture",
  psf: null,
  mtf: [],
  spectrum: [],
  convergence: null,
};
const state = prepareRuntimeState(buildSimplePositiveElementLens(), 0, 0);
const options: ImageQualityOptions = { stopSemiDiameterMm: 0.1, spectrum: [{ channel: "G" as const, weight: 1 }] };
afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
  FakeWorker.instances = [];
});
describe("cancellable diffraction worker", () => {
  it("serializes source data, rejects old and wrong-id replies, and terminates superseded/completed jobs", () => {
    vi.stubGlobal("Worker", FakeWorker);
    const first = { state, options };
    const view = renderHook(({ request }) => useImageQualityJob(request), { initialProps: { request: first } });
    const old = FakeWorker.instances[0];
    expect(old.job!.lensData.key).toBe(state.lens.runtime.data.key);
    expect(old.job!.options).toEqual(options);
    view.rerender({ request: { state, options: { ...options, objectDistanceMm: 1000 } } });
    expect(old.terminate).toHaveBeenCalled();
    const current = FakeWorker.instances[1];
    act(() => old.reply(result));
    expect(view.result.current).toBeNull();
    act(() => current.reply(result, old.job!.id));
    expect(view.result.current).toBeNull();
    act(() => current.reply(result));
    expect(view.result.current).toEqual(result);
    expect(current.terminate).toHaveBeenCalled();
    view.unmount();
    act(() => current.reply({ ...result, reason: "late" }));
  });
  it("cancels active work and returns explicit worker errors", () => {
    vi.stubGlobal("Worker", FakeWorker);
    const view = renderHook(({ request }) => useImageQualityJob(request), {
      initialProps: { request: { state, options } as { state: typeof state; options: typeof options } | null },
    });
    const old = FakeWorker.instances[0];
    view.rerender({ request: null });
    expect(old.terminate).toHaveBeenCalled();
    act(() => old.reply(result));
    expect(view.result.current).toBeNull();
    view.rerender({ request: { state, options } });
    const current = FakeWorker.instances[1];
    act(() => current.onerror?.());
    expect(view.result.current?.status).toBe("unavailable");
    view.rerender({ request: { state, options } });
    const third = FakeWorker.instances[2];
    act(() =>
      third.onmessage?.({
        data: { id: third.job!.id, error: "invalid optical input" },
      } as MessageEvent<ImageQualityJobResponse>),
    );
    expect(view.result.current?.reason).toBe("invalid optical input");
  });
  it("reports unsupported browser startup without blocking on synchronous fallback", async () => {
    vi.stubGlobal(
      "Worker",
      class {
        constructor() {
          throw new Error("unsupported");
        }
      },
    );
    const request = { state, options };
    const view = renderHook(() => useImageQualityJob(request));
    await act(async () => {
      await Promise.resolve();
    });
    expect(view.result.current?.reason).toContain("could not start");
  });
});
