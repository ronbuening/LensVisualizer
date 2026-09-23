import { afterEach, expect, it, vi } from "vitest";
import { buildChromaticPositiveElementLens } from "../../optics/testLensFixtures.js";
import { computeMtf } from "../../../../src/optics/mtf.js";
import { prepareRuntimeState } from "../../../../src/optics/compat.js";
import type { MtfOptions } from "../../../../src/types/mtf.js";

afterEach(() => vi.unstubAllGlobals());

it("rebuilds serializable prescriptions in the worker and matches the pure engine for every method", async () => {
  const port = { onmessage: null as ((event: MessageEvent) => void) | null, postMessage: vi.fn() };
  vi.stubGlobal("self", port);
  await import("../../../../src/components/hooks/mtf.worker.js");
  const send = (data: unknown) => port.onmessage!({ data } as MessageEvent);
  send({ type: "compute", id: 1, job: {} });
  expect(port.postMessage).toHaveBeenLastCalledWith({ id: 1, error: "Error: MTF prescription is unavailable." });
  const L = buildChromaticPositiveElementLens();
  send({ type: "init", data: structuredClone(L.data) });
  for (const method of ["geometric", "diffraction"] as const)
    for (const spectrum of ["reference", "cdf"] as const) {
      const options: MtfOptions = {
        method,
        spectrum,
        pupilSemiDiameterMm: 0.1,
        stopSemiDiameterMm: 0.1,
        fieldFractions: [0],
        frequenciesPerMm: [0, 1, 2],
        maxGridSize: 32,
      };
      const job = { focusT: 0, zoomT: 0, aberrationT: 0, options };
      send({ type: "compute", id: 2, job });
      expect(port.postMessage).toHaveBeenLastCalledWith({
        id: 2,
        result: computeMtf(prepareRuntimeState(L, 0, 0), options),
      });
    }
  send({ type: "init", data: {} });
  send({ type: "compute", id: 3, job: {} });
  expect(port.postMessage.mock.lastCall![0]).toMatchObject({ id: 3, error: expect.any(String) });
});
