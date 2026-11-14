/**
 * Browser-only MTF worker. The pure engine receives a complete immutable state per request; the
 * worker time-slices its generator so progress and cancellation are serviced between slices.
 */
import { buildCanonicalLens } from "../../optics/buildLens.js";
import { createAnalysisRequest, type AnalysisRequest } from "../../optics/analysis.js";
import { prepareRuntimeState } from "../../optics/optics.js";
import { computeMtfSteps, resolveMtfGeometry } from "../../optics/mtf.js";
import type { MtfJobCache } from "../../optics/mtf.js";
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

/** Find an overview edge on this worker without tracing the station's full field grid. */
function* stationSteps(request: AnalysisRequest, job: MtfJob, cache: MtfJobCache): Generator<MtfResult, MtfResult> {
  if (!job.sweep) return yield* computeMtfSteps(request, job.options, cache);
  const { candidates, field, referenceHeightMm } = job.sweep;
  if (cache.geometry === undefined) cache.geometry = resolveMtfGeometry(request, job.options);
  if (!cache.geometry) return yield* computeMtfSteps(request, job.options, cache);
  // Undeclared formats share the first station's reference too: fractions keep the same mm.
  if (referenceHeightMm !== undefined) cache.geometry = { ...cache.geometry, referenceHeightMm };
  const geometry = cache.geometry;
  const edges = [...candidates]
    .sort((a, b) => b - a)
    .filter((fraction) => fraction * geometry.referenceHeightMm <= geometry.modeledEdgeHeightMm + 1e-4);
  for (const [index, edge] of (edges.length ? edges : [0]).entries()) {
    const settings = {
      ...job.options,
      fieldFractions: typeof field === "number" ? [field] : [...new Set([0, 0.5, edge])].sort((a, b) => a - b),
    };
    const result = yield* computeMtfSteps(request, settings, cache);
    const sampled = result.fields.find((sample) => sample.fieldFraction === edge);
    if (
      typeof field === "number" ||
      !result.support.available ||
      sampled?.status !== "unavailable" ||
      index >= edges.length - 1
    )
      return result;
    // A modeled field can still fail pupil tracing; try inward, retaining the common focus and fields.
  }
  throw new Error("No zoom field candidates");
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
      lens = buildCanonicalLens(message.input);
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
    const request = createAnalysisRequest({
      preparedState: state,
      dynamicEFL: 0,
      currentEPSD: options.pupilSemiDiameterMm,
      currentPhysStopSD: options.stopSemiDiameterMm,
    });
    const cache = jobCache(message.job);
    // A newer request supersedes the running one; its generator is dropped mid-field.
    active = {
      id: message.id,
      steps: stationSteps(request, message.job, cache),
      postedAt: performance.now(),
    };
    pump();
  } catch (error) {
    post({ type: "error", id: message.id, error: String(error) });
  }
};
