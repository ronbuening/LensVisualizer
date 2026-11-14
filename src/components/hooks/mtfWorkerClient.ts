/**
 * Worker boundary for MTF. Superseded requests are cancelled cooperatively, so the worker keeps
 * its built lens. All clients share computation slots and a 64 MiB completed-result cache.
 */
import { canonicalLensFromRuntime } from "../../optics/buildLens.js";
import type { CanonicalLens, IngestedPrescription } from "../../optics/buildLens.js";
import type { RuntimeLens } from "../../types/optics.js";
import type { MtfOptions, MtfRequestOptions, MtfResult } from "../../types/mtf.js";
import type { computeMtfSteps } from "../../optics/mtf.js";
import type { AnalysisRequest } from "../../optics/analysis.js";

/**
 * Serialize controls only; prepared geometry and solve caches stay on their thread.
 * @param request - optical snapshot and physical aperture
 * @param options - sampling, spectrum and plane policy
 * @returns the worker's rebuildable input
 */
export function mtfJobForRequest(request: AnalysisRequest, options: MtfRequestOptions): MtfJob {
  return {
    focusT: request.preparedGeometry.focusT,
    zoomT: request.preparedGeometry.zoomT,
    aberrationT: request.preparedGeometry.aberrationT,
    options: {
      ...options,
      pupilSemiDiameterMm: request.aperture.entrancePupilSemiDiameterMm,
      stopSemiDiameterMm: request.aperture.stopSemiDiameterMm,
      movementActive: request.pose?.active ?? options.movementActive,
    },
  };
}

export interface MtfJob {
  focusT: number;
  zoomT: number;
  aberrationT: number;
  options: MtfOptions;
  /** Restrict a zoom station's fields after its modeled edge is known on the worker. */
  sweep?: { candidates: readonly number[]; field: "overview" | number };
}

export type MtfWorkerRequest =
  | { type: "init"; input: IngestedPrescription<CanonicalLens> }
  | { type: "compute"; id: number; job: MtfJob }
  | { type: "cancel"; id: number };

/** The public engine owns the phase contract; queued work adds a page-local waiting phase. */
type EngineProgress = ReturnType<typeof computeMtfSteps> extends Generator<infer P> ? P : never;
export type MtfProgress = Omit<EngineProgress, "phase"> & { phase: EngineProgress["phase"] | { kind: "waiting" } };
export type MtfPriority = "main" | "comparison" | "sweep";

export type MtfWorkerReply =
  | ({ type: "progress"; id: number } & EngineProgress)
  | { type: "result"; id: number; result: MtfResult }
  | { type: "cancelled"; id: number }
  | { type: "error"; id: number; error: string };

export interface MtfWorkerPort {
  postMessage(message: MtfWorkerRequest): void;
  terminate(): void;
  onmessage: ((event: MessageEvent<MtfWorkerReply>) => void) | null;
  onerror: ((event: ErrorEvent) => void) | null;
}

interface ScheduledJob {
  priority: MtfPriority;
  start: () => void;
}

/** Page-wide admission and retained strings, with FIFO ordering within each priority. */
export class MtfPageBudget {
  private active = 0;
  private queue: ScheduledJob[] = [];
  private cache = new Map<object, { owner: object; key: string; serialized: string; bytes: number }>();
  private retainedBytes = 0;

  constructor(
    private concurrency = 2,
    private byteLimit = 64 * 1024 * 1024,
  ) {}

  /**
   * Admit a job or queue it by priority. Running jobs release only after worker acknowledgement.
   * @param priority - visible result, comparison, then background sweep
   * @param start - starts one complete computation on its owner's warm worker
   * @returns an idempotent removal/release function
   */
  schedule(priority: MtfPriority, start: (release: () => void) => void): () => void {
    const job = {
      priority,
      start: () => {
        running = true;
        start(release);
      },
    };
    let running = false;
    let released = false;
    const release = () => {
      if (released) return;
      released = true;
      if (running) this.active--;
      else this.queue = this.queue.filter((entry) => entry !== job);
      this.drain();
    };
    this.queue.push(job);
    this.drain();
    return release;
  }

  private drain(): void {
    const rank = { main: 0, comparison: 1, sweep: 2 };
    this.queue.sort((a, b) => rank[a.priority] - rank[b.priority]);
    while (this.active < this.concurrency && this.queue.length) {
      const job = this.queue.shift()!;
      this.active++;
      job.start();
    }
  }

  /**
   * Read and promote a completed result across all owners without sharing mutable arrays.
   * @param owner - client identity, which also isolates different lenses
   * @param key - exact serialized request
   * @returns an owned result, or null on a miss
   */
  get(owner: object, key: string): MtfResult | null {
    for (const [token, entry] of this.cache) {
      if (entry.owner !== owner || entry.key !== key) continue;
      this.cache.delete(token);
      this.cache.set(token, entry);
      return JSON.parse(entry.serialized) as MtfResult;
    }
    return null;
  }

  /**
   * Retain completed curves under one global byte allowance and LRU order.
   * @param owner - originating client
   * @param key - serialized request
   * @param result - complete, immutable numerical result
   */
  retain(owner: object, key: string, result: MtfResult): void {
    const serialized = JSON.stringify(result);
    // UTF-16 strings bound the payload; include keys and a conservative entry allowance.
    const bytes = (serialized.length + key.length) * 2 + 1024;
    if (bytes > this.byteLimit) return;
    for (const [token, entry] of this.cache) if (entry.owner === owner && entry.key === key) this.evict(token);
    while ((this.retainedBytes + bytes > this.byteLimit || this.cache.size >= 128) && this.cache.size)
      this.evict(this.cache.keys().next().value!);
    this.cache.set({}, { owner, key, serialized, bytes });
    this.retainedBytes += bytes;
  }

  /**
   * Drop a disposed client's retained results without disturbing other clients.
   * @param owner - client being disposed
   */
  forget(owner: object): void {
    for (const [token, entry] of this.cache) if (entry.owner === owner) this.evict(token);
  }

  private evict(token: object): void {
    this.retainedBytes -= this.cache.get(token)!.bytes;
    this.cache.delete(token);
  }
}

const PAGE_BUDGET = new MtfPageBudget();

export class MtfWorkerClient {
  private worker: MtfWorkerPort | null = null;
  private serial = 0;
  private pending: {
    id: number;
    reject: (error: Error) => void;
    resolve: (result: MtfResult) => void;
    key: string;
    onProgress?: (progress: MtfProgress) => void;
    release?: () => void;
    started: boolean;
  } | null = null;
  private running = new Map<number, () => void>();

  constructor(
    private lens: RuntimeLens,
    private createWorker: () => MtfWorkerPort,
    private budget = PAGE_BUDGET,
  ) {}

  /** Abandon queued work immediately, or cancel running work while keeping its lens warm. */
  cancel(): void {
    if (!this.pending) return;
    const pending = this.pending;
    this.pending = null;
    if (pending.started) this.worker?.postMessage({ type: "cancel", id: pending.id });
    else pending.release?.();
    pending.reject(new DOMException("Superseded MTF calculation", "AbortError"));
  }

  /** Dispose a tab's worker and retained strings, releasing any occupied page slots. */
  dispose(): void {
    this.cancel();
    this.worker?.terminate();
    this.worker = null;
    for (const release of this.running.values()) release();
    this.running.clear();
    this.budget.forget(this);
  }

  /**
   * Compute one request, reusing retained curves or waiting for a page-wide computation slot.
   * @param job - optical state and numerical options
   * @param onProgress - phase changes and complete-grid partial results; queued work reports waiting
   * @param priority - main visible result, comparison or background sweep
   * @returns the completed result; rejects with AbortError when superseded
   */
  compute(
    job: MtfJob,
    onProgress?: (progress: MtfProgress) => void,
    priority: MtfPriority = "main",
  ): Promise<MtfResult> {
    this.cancel();
    const key = JSON.stringify(job);
    const cached = this.budget.get(this, key);
    if (cached) return Promise.resolve(cached);
    const id = ++this.serial;
    return new Promise((resolve, reject) => {
      const pending = { id, key, resolve, reject, onProgress, started: false } as NonNullable<typeof this.pending>;
      this.pending = pending;
      onProgress?.({ phase: { kind: "waiting" } });
      pending.release = this.budget.schedule(priority, (release) => {
        pending.started = true;
        this.running.set(id, release);
        onProgress?.({ phase: { kind: "geometry" } });
        try {
          if (!this.worker) {
            this.worker = this.createWorker();
            this.worker.onmessage = ({ data }) => this.receive(data);
            this.worker.onerror = () =>
              this.failed(new Error("MTF background calculation failed. Try again or reduce sampling."));
            this.worker.postMessage({ type: "init", input: canonicalLensFromRuntime(this.lens) });
          }
          this.worker.postMessage({ type: "compute", id, job });
        } catch (error) {
          this.failed(error instanceof Error ? error : new Error(String(error)));
        }
      });
    });
  }

  private receive(data: MtfWorkerReply): void {
    if (data.type !== "progress") {
      const release = this.running.get(data.id);
      this.running.delete(data.id);
      release?.();
    }
    const pending = this.pending;
    if (!pending || pending.id !== data.id) return;
    if (data.type === "progress") {
      pending.onProgress?.(data);
      return;
    }
    this.pending = null;
    if (data.type === "error") pending.reject(new Error(data.error));
    else if (data.type === "cancelled") pending.reject(new DOMException("Cancelled MTF calculation", "AbortError"));
    else {
      this.budget.retain(this, pending.key, data.result);
      pending.resolve(data.result);
    }
  }

  private failed(error: Error): void {
    this.worker?.terminate();
    this.worker = null;
    const pending = this.pending;
    this.pending = null;
    pending?.release?.();
    for (const release of this.running.values()) release();
    this.running.clear();
    pending?.reject(error);
  }
}
