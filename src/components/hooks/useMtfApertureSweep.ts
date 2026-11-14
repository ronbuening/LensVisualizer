/** A mounted tab retains one cached worker client for its sequential aperture sweep. */
import { useEffect, useMemo, useState } from "react";
import type { AnalysisRequest } from "../../optics/analysis.js";
import type { MtfApertureSample, MtfRequestOptions, MtfResult } from "../../types/mtf.js";
import type { RuntimeLens } from "../../types/optics.js";
import { mtfApertureRequests } from "../display/analysis/mtf/mtfApertureSweep.js";
import { MtfWorkerClient, mtfJobForRequest, type MtfJob } from "./mtfWorkerClient.js";

interface SweepState {
  samples: readonly MtfApertureSample[];
  running: boolean;
  index: number;
  error: string | null;
}

/**
 * Run one ordinary request per aperture, publishing field progress without provisional points.
 * @param lens - a new lens disposes the client and its result cache
 * @param request - charted request, or null when this view is inactive or waiting for its plane/fields
 * @param fNumber - exact marked aperture at the charted station
 * @param options - requested fields and common sampling/plane controls
 * @param settingsKey - cancels work on presentation changes while preserving cached engine results
 * @returns ordered samples and the currently computing aperture's progress
 */
export function useMtfApertureSweep(
  lens: RuntimeLens,
  request: AnalysisRequest | null,
  fNumber: number | undefined,
  options: MtfRequestOptions,
  settingsKey: string,
): SweepState {
  const client = useMemo(
    () => new MtfWorkerClient(lens, () => new Worker(new URL("./mtf.worker.ts", import.meta.url), { type: "module" })),
    [lens],
  );
  const jobs = request
    ? mtfApertureRequests(lens, request, fNumber).map((sample) => ({
        fNumber: sample.fNumber,
        job: mtfJobForRequest(sample.request, options),
      }))
    : [];
  const serialized = JSON.stringify(jobs);
  const key = `${settingsKey}/${serialized}`;
  const empty: SweepState = {
    samples: jobs.map(({ fNumber }) => ({ fNumber, result: null })),
    running: jobs.length > 0,
    index: 0,
    error: null,
  };
  const [state, setState] = useState<{ client: MtfWorkerClient; key: string; value: SweepState } | null>(null);
  useEffect(() => () => client.dispose(), [client]);
  useEffect(() => {
    let live = true;
    const queue = JSON.parse(serialized) as Array<{ fNumber: number; job: MtfJob }>;
    const samples: MtfApertureSample[] = queue.map(({ fNumber }) => ({ fNumber, result: null }));
    const publish = (index: number, running: boolean, error: string | null = null) => {
      if (live) setState({ client, key, value: { samples: [...samples], index, running, error } });
    };
    const run = async () => {
      for (let index = 0; index < queue.length; index++) {
        if (!live) return;
        publish(index, true);
        const accept = (result: MtfResult) => {
          if (!live) return;
          samples[index] = { fNumber: queue[index].fNumber, result };
          publish(index, true);
        };
        try {
          const result = await client.compute(queue[index].job, accept);
          if (!live) return;
          accept(result);
        } catch (cause) {
          if (live && (cause as Error).name !== "AbortError") publish(index, false, (cause as Error).message);
          return;
        }
      }
      publish(Math.max(0, queue.length - 1), false);
    };
    void run();
    return () => {
      live = false;
      client.cancel();
    };
  }, [client, key, serialized]);
  // A changed state never displays samples carrying an earlier aperture or plane label.
  return state?.client === client && state.key === key ? state.value : empty;
}
