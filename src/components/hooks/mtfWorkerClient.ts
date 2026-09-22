/** Cancellable worker boundary. Only completed result curves are retained, under a 64 MiB budget. */
import type { LensData } from "../../types/optics.js";
import type { MtfOptions, MtfResult } from "../../types/mtf.js";

export interface MtfJob {
  focusT: number;
  zoomT: number;
  aberrationT: number;
  options: MtfOptions;
}
export interface MtfWorkerReply {
  id: number;
  result?: MtfResult;
  error?: string;
}
export interface MtfWorkerPort {
  postMessage(message: unknown): void;
  terminate(): void;
  onmessage: ((event: MessageEvent<MtfWorkerReply>) => void) | null;
  onerror: ((event: ErrorEvent) => void) | null;
}

export class MtfWorkerClient {
  private worker: MtfWorkerPort | null = null;
  private serial = 0;
  private rejectPending: ((error: Error) => void) | null = null;
  private cache = new Map<string, { result: MtfResult; bytes: number }>();
  private retainedBytes = 0;
  constructor(
    private data: LensData,
    private createWorker: () => MtfWorkerPort,
    private byteLimit = 64 * 1024 * 1024,
  ) {}

  cancel(): void {
    if (!this.rejectPending) return;
    this.serial++;
    this.worker?.terminate();
    this.worker = null;
    this.rejectPending(new DOMException("Superseded MTF calculation", "AbortError"));
    this.rejectPending = null;
  }

  dispose(): void {
    this.cancel();
    this.worker?.terminate();
    this.worker = null;
    this.cache.clear();
    this.retainedBytes = 0;
  }

  compute(job: MtfJob): Promise<MtfResult> {
    this.cancel();
    const key = JSON.stringify(job);
    const cached = this.cache.get(key);
    if (cached) {
      this.cache.delete(key);
      this.cache.set(key, cached);
      return Promise.resolve(cached.result);
    }
    const id = ++this.serial;
    return new Promise((resolve, reject) => {
      this.rejectPending = reject;
      try {
        if (!this.worker) {
          this.worker = this.createWorker();
          this.worker.postMessage({ type: "init", data: this.data });
        }
        this.worker.onmessage = ({ data }) => {
          if (data.id !== id || this.serial !== id) return;
          this.rejectPending = null;
          if (!data.result) {
            reject(new Error(data.error ?? "MTF worker failed."));
            return;
          }
          const bytes = JSON.stringify(data.result).length * 2;
          while (this.retainedBytes + bytes > this.byteLimit && this.cache.size) {
            const oldest = this.cache.keys().next().value!;
            this.retainedBytes -= this.cache.get(oldest)!.bytes;
            this.cache.delete(oldest);
          }
          if (bytes <= this.byteLimit) {
            this.cache.set(key, { result: data.result, bytes });
            this.retainedBytes += bytes;
          }
          resolve(data.result);
        };
        this.worker.onerror = () => {
          if (this.serial !== id) return;
          this.rejectPending = null;
          this.worker?.terminate();
          this.worker = null;
          reject(new Error("MTF background calculation failed. Try again or reduce sampling."));
        };
        this.worker.postMessage({ type: "compute", id, job });
      } catch (error) {
        this.rejectPending = null;
        this.worker?.terminate();
        this.worker = null;
        reject(error);
      }
    });
  }
}
