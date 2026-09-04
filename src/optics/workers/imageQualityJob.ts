/** Serializable diffraction job contract and synchronous reference implementation. */
import buildLens from "../buildLens.js";
import { prepareRuntimeState } from "../state/runtimeState.js";
import { computeImageQuality } from "../analysis/imageQuality.js";
import type { LensData } from "../../types/optics.js";
import type { ImageQualityOptions, ImageQualityResult } from "../../types/imageQuality.js";

export interface ImageQualityJobRequest {
  id: number;
  lensData: LensData;
  focusT: number;
  zoomT: number;
  aberrationT: number;
  options: ImageQualityOptions;
}
export type ImageQualityJobResponse = { id: number; result: ImageQualityResult } | { id: number; error: string };

/** The worker and direct validation path execute exactly the same optical job. */
export function computeImageQualityJob(job: ImageQualityJobRequest): ImageQualityResult {
  const state = prepareRuntimeState(buildLens(job.lensData), job.focusT, job.zoomT, job.aberrationT);
  return computeImageQuality(state, job.options);
}

export interface ImageQualityWorkerScope {
  onmessage: ((event: MessageEvent<ImageQualityJobRequest>) => void) | null;
  postMessage: (response: ImageQualityJobResponse) => void;
}

/** Installed by the module-worker entry; factored for protocol/error regression tests. */
export function installImageQualityWorker(scope: ImageQualityWorkerScope): void {
  scope.onmessage = ({ data }) => {
    try {
      scope.postMessage({ id: data.id, result: computeImageQualityJob(data) });
    } catch (error) {
      scope.postMessage({
        id: data.id,
        error: error instanceof Error ? error.message : "Image quality calculation failed.",
      });
    }
  };
}
