/** Debounced, cancellable MTF worker requests with progress and stale-while-revalidate results. */
import { useEffect, useMemo, useState } from "react";
import type { MtfResult } from "../../types/mtf.js";
import type { RuntimeLens } from "../../types/optics.js";
import { MtfWorkerClient, type MtfJob } from "./mtfWorkerClient.js";

/** Pause before starting a request, so slider drags do not queue work. */
const DEBOUNCE_MS = 150;

export interface MtfComputation {
  /** Finished or partial result of the current request, or the previous request's result while it starts. */
  result: MtfResult | null;
  /** True while `result` still belongs to an earlier request. */
  stale: boolean;
  running: boolean;
  error: string | null;
}

const IDLE: MtfComputation = { result: null, stale: false, running: false, error: null };

/**
 * Run MTF requests for one lens in a background worker.
 *
 * @param L - runtime lens; a new lens starts a new worker and clears earlier results
 * @param job - request to compute, or null when the state is unsupported
 * @returns the latest result and request status
 */
export function useMtfComputation(L: RuntimeLens, job: MtfJob | null): MtfComputation {
  const client = useMemo(
    () =>
      new MtfWorkerClient(L.data, () => new Worker(new URL("./mtf.worker.ts", import.meta.url), { type: "module" })),
    [L],
  );
  const [state, setState] = useState<{ client: MtfWorkerClient; value: MtfComputation }>({ client, value: IDLE });
  // Results never carry over to another lens.
  const current = state.client === client ? state.value : IDLE;
  useEffect(() => () => client.dispose(), [client]);
  const key = job ? JSON.stringify(job) : null;
  useEffect(() => {
    const set = (update: (previous: MtfComputation) => MtfComputation) =>
      setState((previous) => ({ client, value: update(previous.client === client ? previous.value : IDLE) }));
    if (!key) {
      set(() => IDLE);
      return;
    }
    let live = true;
    set((previous) => ({ ...previous, stale: previous.result !== null, running: true, error: null }));
    const timer = setTimeout(() => {
      client
        .compute(JSON.parse(key) as MtfJob, (partial) => {
          if (live) set(() => ({ result: partial, stale: false, running: true, error: null }));
        })
        .then((result) => {
          if (live) set(() => ({ result, stale: false, running: false, error: null }));
        })
        .catch((cause: Error) => {
          if (live && cause.name !== "AbortError")
            set((previous) => ({ ...previous, running: false, error: cause.message }));
        });
    }, DEBOUNCE_MS);
    return () => {
      live = false;
      clearTimeout(timer);
      client.cancel();
    };
  }, [client, key]);
  return current;
}
