/** Cancellable diffraction worker with state identity and stale-message guards. */
import { useEffect, useRef, useState } from "react";
import type { PreparedOpticalState } from "../../../optics/types.js";
import type { ImageQualityOptions, ImageQualityResult } from "../../../types/imageQuality.js";
import type { ImageQualityJobRequest, ImageQualityJobResponse } from "../../../optics/workers/imageQualityJob.js";

export interface ImageQualityRequest {
  state: PreparedOpticalState;
  options: ImageQualityOptions;
}

export default function useImageQualityJob(request: ImageQualityRequest | null): ImageQualityResult | null {
  const sequence = useRef(0);
  const [completed, setCompleted] = useState<{ request: ImageQualityRequest; result: ImageQualityResult } | null>(null);
  useEffect(() => {
    if (!request) return;
    const id = ++sequence.current;
    let active = true;
    let worker: Worker | undefined;
    const publish = (result: ImageQualityResult) => {
      if (!active || sequence.current !== id) return;
      active = false;
      worker?.terminate();
      setCompleted({ request, result });
    };
    const fail = (reason: string) =>
      publish({ status: "unavailable", reason, psf: null, mtf: [], spectrum: [], convergence: null });
    try {
      worker = new Worker(new URL("../../../optics/workers/imageQuality.worker.ts", import.meta.url), {
        type: "module",
      });
      worker.onmessage = (event: MessageEvent<ImageQualityJobResponse>) => {
        if (event.data.id !== id) return;
        if ("error" in event.data) fail(event.data.error);
        else publish(event.data.result);
      };
      worker.onerror = () => fail("The image quality worker failed. Recalculate to retry.");
      const job: ImageQualityJobRequest = {
        id,
        lensData: request.state.lens.runtime.data,
        focusT: request.state.focusT,
        zoomT: request.state.zoomT,
        aberrationT: request.state.aberrationT,
        options: request.options,
      };
      worker.postMessage(job);
    } catch {
      queueMicrotask(() => fail("A background calculation could not start in this browser."));
    }
    // A cancellation message cannot interrupt a synchronous worker calculation. Termination can.
    return () => {
      active = false;
      worker?.terminate();
    };
  }, [request]);
  return completed?.request === request ? completed.result : null;
}
