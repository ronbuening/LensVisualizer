/**
 * Worker boundary for MTF. Superseded requests are cancelled cooperatively, so the worker keeps
 * its built lens; only completed result curves are retained, under a 64 MiB budget.
 */
import type { LensData } from "../../types/optics.js";
import type { MtfOptions, MtfResult } from "../../types/mtf.js";

export interface MtfJob {
  focusT: number;
  zoomT: number;
  aberrationT: number;
  options: MtfOptions;
}

export type MtfWorkerRequest =
  | { type: "init"; data: LensData }
  | { type: "compute"; id: number; job: MtfJob }
  | { type: "cancel"; id: number };

/** Progress carries the partial result so far; pending fields have no curves yet. */
export type MtfWorkerReply =
  | { type: "progress"; id: number; result: MtfResult }
  | { type: "result"; id: number; result: MtfResult }
  | { type: "error"; id: number; error: string };

export interface MtfWorkerPort {
  postMessage(message: MtfWorkerRequest): void;
  terminate(): void;
  onmessage: ((event: MessageEvent<MtfWorkerReply>) => void) | null;
  onerror: ((event: ErrorEvent) => void) | null;
}

export class MtfWorkerClient {
  private worker: MtfWorkerPort | null = null;
  private serial = 0;
  private pending: { id: number; reject: (error: Error) => void } | null = null;
  private cache = new Map<string, { serialized: string; bytes: number }>();
  private retainedBytes = 0;
  constructor(
    private data: LensData,
    private createWorker: () => MtfWorkerPort,
    private byteLimit = 64 * 1024 * 1024,
  ) {}

  /** Abandon the running request; the worker drops it at its next slice and stays warm. */
  cancel(): void {
    if (!this.pending) return;
    const { id, reject } = this.pending;
    this.pending = null;
    this.worker?.postMessage({ type: "cancel", id });
    reject(new DOMException("Superseded MTF calculation", "AbortError"));
  }

  dispose(): void {
    this.cancel();
    this.worker?.terminate();
    this.worker = null;
    this.cache.clear();
    this.retainedBytes = 0;
  }

  /**
   * Compute one request, reusing a retained result when the request is unchanged.
   *
   * @param job - optical state and MTF options
   * @param onProgress - receives partial results while the worker refines fields
   * @returns the completed result; rejects with an AbortError when superseded
   */
  compute(job: MtfJob, onProgress?: (partial: MtfResult) => void): Promise<MtfResult> {
    this.cancel();
    const key = JSON.stringify(job);
    const cached = this.cache.get(key);
    if (cached) {
      this.cache.delete(key);
      this.cache.set(key, cached);
      return Promise.resolve(JSON.parse(cached.serialized) as MtfResult);
    }
    const id = ++this.serial;
    return new Promise((resolve, reject) => {
      this.pending = { id, reject };
      try {
        if (!this.worker) {
          this.worker = this.createWorker();
          this.worker.postMessage({ type: "init", data: this.data });
        }
        this.worker.onmessage = ({ data }) => {
          if (data.id !== id || this.pending?.id !== id) return;
          if (data.type === "progress") {
            onProgress?.(data.result);
            return;
          }
          this.pending = null;
          if (data.type === "error") {
            reject(new Error(data.error));
            return;
          }
          this.retain(key, data.result);
          resolve(data.result);
        };
        this.worker.onerror = () => {
          if (this.pending?.id !== id) return;
          this.pending = null;
          this.worker?.terminate();
          this.worker = null;
          reject(new Error("MTF background calculation failed. Try again or reduce sampling."));
        };
        this.worker.postMessage({ type: "compute", id, job });
      } catch (error) {
        this.pending = null;
        this.worker?.terminate();
        this.worker = null;
        reject(error);
      }
    });
  }

  private retain(key: string, result: MtfResult): void {
    // Retain strings, whose UTF-16 payload has a known upper bound, rather than estimating
    // object/array memory from JSON length. Include keys and a conservative entry allowance.
    const serialized = JSON.stringify(result);
    const bytes = (serialized.length + key.length) * 2 + 1024;
    while ((this.retainedBytes + bytes > this.byteLimit || this.cache.size >= 128) && this.cache.size) {
      const oldest = this.cache.keys().next().value!;
      this.retainedBytes -= this.cache.get(oldest)!.bytes;
      this.cache.delete(oldest);
    }
    if (bytes <= this.byteLimit) {
      this.cache.set(key, { serialized, bytes });
      this.retainedBytes += bytes;
    }
  }
}
