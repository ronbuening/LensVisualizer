import { describe, expect, it } from "vitest";
import {
  computeImageQualityJob,
  installImageQualityWorker,
  type ImageQualityWorkerScope,
  type ImageQualityJobRequest,
} from "../../../src/optics/workers/imageQualityJob.js";
import { computeImageQuality } from "../../../src/optics/analysis/imageQuality.js";
import { prepareRuntimeState } from "../../../src/optics/compat.js";
import { buildSimplePositiveElementLens } from "./testLensFixtures.js";

describe("structured-clone image quality jobs", () => {
  it("rebuilds the same optical state and matches the direct reference including PSF samples", () => {
    const L = buildSimplePositiveElementLens();
    const job: ImageQualityJobRequest = {
      id: 7,
      lensData: L.data,
      focusT: 0.3,
      zoomT: 0,
      aberrationT: 0,
      options: {
        stopSemiDiameterMm: 0.1,
        spectrum: [{ channel: "G", weight: 1 }],
        radialStrata: 4,
        azimuthalSamples: 8,
        imageSize: 5,
      },
    };
    const expected = computeImageQuality(prepareRuntimeState(L, 0.3, 0), job.options);
    expect(expected.psf).not.toBeNull();
    expect(computeImageQualityJob(structuredClone(job))).toEqual(expected);
    const replies: unknown[] = [];
    const scope: ImageQualityWorkerScope = { onmessage: null, postMessage: (r) => replies.push(r) };
    installImageQualityWorker(scope);
    scope.onmessage!({ data: structuredClone(job) } as MessageEvent<ImageQualityJobRequest>);
    expect(replies).toEqual([{ id: 7, result: expected }]);
    scope.onmessage!({ data: { ...job, focusT: NaN } } as MessageEvent<ImageQualityJobRequest>);
    expect(replies[1]).toMatchObject({ id: 7, error: expect.any(String) });
  });
});
