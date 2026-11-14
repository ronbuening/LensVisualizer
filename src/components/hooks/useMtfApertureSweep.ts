/** A mounted tab retains one cached worker client for sequential aperture or zoom sweeps. */
import { useEffect, useMemo, useState } from "react";
import type { AnalysisRequest } from "../../optics/analysis.js";
import type { MtfSweepSample, MtfRequestOptions, MtfResult } from "../../types/mtf.js";
import type { RuntimeLens } from "../../types/optics.js";
import { mtfApertureRequests } from "../display/analysis/mtf/mtfApertureSweep.js";
import { MtfWorkerClient, mtfJobForRequest, type MtfJob, type MtfProgress } from "./mtfWorkerClient.js";

interface SweepState {
  samples: readonly MtfSweepSample[];
  running: boolean;
  index: number;
  error: string | null;
  phase: MtfProgress["phase"] | null;
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
  return useMtfSweep(lens, request ? mtfApertureRequests(lens, request, fNumber) : [], options, settingsKey);
}

interface SweepRequest extends Omit<MtfSweepSample, "result"> {
  request: AnalysisRequest;
  sweep?: MtfJob["sweep"];
}

/**
 * Run ordinary optical states sequentially on one cached worker client.
 * @param lens - client lifetime and prescription identity
 * @param requests - aperture or zoom stations, empty when inactive
 * @param options - common method, spectrum and focus controls
 * @param settingsKey - cancels on presentation changes without discarding cached results
 * @returns partial samples and current ordinal
 */
export function useMtfSweep(
  lens: RuntimeLens,
  requests: readonly SweepRequest[],
  options: MtfRequestOptions,
  settingsKey: string,
): SweepState {
  const client = useMemo(
    () => new MtfWorkerClient(lens, () => new Worker(new URL("./mtf.worker.ts", import.meta.url), { type: "module" })),
    [lens],
  );
  const jobs = requests.map(({ request, sweep, ...sample }) => ({
    ...sample,
    job: { ...mtfJobForRequest(request, options), ...(sweep ? { sweep } : {}) },
  }));
  const serialized = JSON.stringify(jobs);
  const key = `${settingsKey}/${serialized}`;
  const empty: SweepState = {
    samples: jobs.map(({ job: _job, ...sample }) => ({ ...sample, result: null })),
    running: jobs.length > 0,
    index: 0,
    error: null,
    phase: null,
  };
  const [state, setState] = useState<{ client: MtfWorkerClient; key: string; value: SweepState } | null>(null);
  useEffect(() => () => client.dispose(), [client]);
  useEffect(() => {
    let live = true;
    const queue = JSON.parse(serialized) as Array<Omit<MtfSweepSample, "result"> & { job: MtfJob }>;
    const samples: MtfSweepSample[] = queue.map(({ job: _job, ...sample }) => ({ ...sample, result: null }));
    let phase: MtfProgress["phase"] | null = null;
    const publish = (index: number, running: boolean, error: string | null = null) => {
      if (live)
        setState({
          client,
          key,
          value: { samples: [...samples], index, running, error, phase: running ? phase : null },
        });
    };
    const run = async () => {
      for (let index = 0; index < queue.length; index++) {
        if (!live) return;
        phase = null;
        publish(index, true);
        const accept = (result: MtfResult) => {
          if (!live) return;
          samples[index] = { ...samples[index], result, edge: result.sweepEdge };
          publish(index, true);
        };
        try {
          const job = queue[index].job;
          const result = await client.compute(
            job,
            (progress) => {
              phase = progress.phase;
              if (progress.result) accept(progress.result);
              else publish(index, true);
            },
            "sweep",
          );
          if (!live) return;
          accept(result);
        } catch (cause) {
          if (!live || (cause as Error).name === "AbortError") return;
          samples[index] = {
            ...samples[index],
            result: null,
            edge: undefined,
            error: String((cause as Error).message ?? cause),
          };
          publish(index, true);
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
