/**
 * Browser-only MTF worker. The pure engine receives a complete immutable state per request; the
 * worker time-slices its generator so progress and cancellation are serviced between slices.
 */
import buildLens from "../../optics/buildLens.js";
import { prepareRuntimeState } from "../../optics/compat.js";
import { computeMtfSteps, type MtfJobCache } from "../../optics/mtf.js";
import type { MtfResult } from "../../types/mtf.js";
import type { RuntimeLens } from "../../types/optics.js";
import type { MtfJob, MtfWorkerReply, MtfWorkerRequest } from "./mtfWorkerClient.js";

/** Longest synchronous slice before the worker yields to incoming messages. */
const SLICE_MS = 30;
/** Minimum spacing of progress messages. */
const PROGRESS_MS = 100;
/** Request variants whose finished fields stay reusable, most recent last. */
const MAX_CACHED_JOBS = 24;

let lens: RuntimeLens | null = null;
let initializationError: string | null = null;
let active: { id: number; steps: Generator<MtfResult, MtfResult>; postedAt: number } | null = null;
const jobCaches = new Map<string, MtfJobCache>();

const post = (reply: MtfWorkerReply) => self.postMessage(reply);

/** Field results depend on everything in a request except which fields it lists. */
function jobCache(job: MtfJob): MtfJobCache {
  const key = JSON.stringify({ ...job, options: { ...job.options, fieldFractions: undefined } });
  const cache = jobCaches.get(key) ?? { fields: new Map() };
  jobCaches.delete(key);
  jobCaches.set(key, cache);
  while (jobCaches.size > MAX_CACHED_JOBS) jobCaches.delete(jobCaches.keys().next().value!);
  return cache;
}

function pump(): void {
  const job = active;
  if (!job) return;
  const start = performance.now();
  try {
    for (;;) {
      const next = job.steps.next();
      if (next.done) {
        active = null;
        post({ type: "result", id: job.id, result: next.value });
        return;
      }
      const now = performance.now();
      if (now - start >= SLICE_MS) {
        if (now - job.postedAt >= PROGRESS_MS) {
          job.postedAt = now;
          post({ type: "progress", id: job.id, result: next.value });
        }
        // Yield so a cancel or newer request can arrive before the next slice.
        setTimeout(() => {
          if (active === job) pump();
        }, 0);
        return;
      }
    }
  } catch (error) {
    if (active === job) active = null;
    post({ type: "error", id: job.id, error: String(error) });
  }
}

self.onmessage = (event: MessageEvent<MtfWorkerRequest>) => {
  const message = event.data;
  if (message.type === "init") {
    active = null;
    jobCaches.clear();
    try {
      // RuntimeLens.data already contains generated plates. Rebuild from the authored
      // surfaces/elements plus rearPlates so validation and expansion run exactly once.
      lens = buildLens({
        ...message.data,
        surfaces: message.data.surfaces.filter((surface) => !surface.synthetic),
        elements: message.data.elements.filter((element) => !element.synthetic),
      });
      initializationError = null;
    } catch (error) {
      lens = null;
      initializationError = String(error);
    }
    return;
  }
  if (message.type === "cancel") {
    if (active?.id === message.id) active = null;
    return;
  }
  try {
    if (!lens) throw new Error(initializationError ?? "MTF prescription is unavailable.");
    const { focusT, zoomT, aberrationT, options } = message.job;
    const state = prepareRuntimeState(lens, focusT, zoomT, aberrationT);
    // A newer request supersedes the running one; its generator is dropped mid-field.
    active = {
      id: message.id,
      steps: computeMtfSteps(state, options, jobCache(message.job)),
      postedAt: performance.now(),
    };
    pump();
  } catch (error) {
    post({ type: "error", id: message.id, error: String(error) });
  }
};
