/** Browser-only worker; the pure engine receives a complete immutable state per request. */
import buildLens from "../../optics/buildLens.js";
import { prepareRuntimeState } from "../../optics/compat.js";
import { computeMtf } from "../../optics/mtf.js";
import type { LensData, RuntimeLens } from "../../types/optics.js";
import type { MtfJob } from "./mtfWorkerClient.js";

let lens: RuntimeLens | null = null;
let initializationError: string | null = null;
self.onmessage = (
  event: MessageEvent<{ type: "init"; data: LensData } | { type: "compute"; id: number; job: MtfJob }>,
) => {
  const message = event.data;
  if (message.type === "init") {
    try {
      lens = buildLens(message.data);
      initializationError = null;
    } catch (error) {
      lens = null;
      initializationError = String(error);
    }
    return;
  }
  try {
    if (!lens) throw new Error(initializationError ?? "MTF prescription is unavailable.");
    const { focusT, zoomT, aberrationT, options } = message.job;
    const result = computeMtf(prepareRuntimeState(lens, focusT, zoomT, aberrationT), options);
    self.postMessage({ id: message.id, result });
  } catch (error) {
    self.postMessage({ id: message.id, error: String(error) });
  }
};
