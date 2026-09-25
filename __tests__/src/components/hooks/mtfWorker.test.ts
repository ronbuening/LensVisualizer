import { afterEach, expect, it, vi } from "vitest";
import { build, buildChromaticPositiveElementLens, REAR_PLATE_FIXTURE } from "../../optics/testLensFixtures.js";
import { computeMtf } from "../../../../src/optics/mtf.js";
import { prepareRuntimeState } from "../../../../src/optics/compat.js";
import type { MtfOptions } from "../../../../src/types/mtf.js";
import type { MtfWorkerReply } from "../../../../src/components/hooks/mtfWorkerClient.js";

afterEach(() => vi.unstubAllGlobals());

async function loadWorker() {
  const port = { onmessage: null as ((event: MessageEvent) => void) | null, postMessage: vi.fn() };
  vi.stubGlobal("self", port);
  vi.resetModules();
  await import("../../../../src/components/hooks/mtf.worker.js");
  const send = (data: unknown) => port.onmessage!({ data } as MessageEvent);
  const replies = () => port.postMessage.mock.calls.map(([reply]) => reply as MtfWorkerReply);
  const finished = (id: number) =>
    vi.waitFor(
      () => {
        const reply = replies().find((r) => r.id === id && r.type !== "progress");
        if (!reply) throw new Error(`no reply for ${id}`);
        return reply;
      },
      { timeout: 20000, interval: 5 },
    );
  return { send, replies, finished };
}

it("rebuilds serializable prescriptions in the worker and matches the pure engine for every method", async () => {
  const { send, finished } = await loadWorker();
  send({ type: "compute", id: 1, job: {} });
  expect(await finished(1)).toEqual({ type: "error", id: 1, error: "Error: MTF prescription is unavailable." });
  const L = buildChromaticPositiveElementLens();
  // Runtime data includes generated hidden plates; worker rebuilds must expand them exactly once.
  const plated = build({
    ...L.data,
    rearPlates: [REAR_PLATE_FIXTURE, { ...REAR_PLATE_FIXTURE, gapAfterMm: 20 }],
  });
  let id = 10;
  for (const lens of [L, plated]) {
    send({ type: "init", data: structuredClone(lens.data) });
    for (const method of ["geometric", "geometric-dl", "diffraction"] as const)
      for (const spectrum of ["reference", "cdf", "photopic"] as const) {
        const options: MtfOptions = {
          method,
          spectrum,
          pupilSemiDiameterMm: 0.1,
          stopSemiDiameterMm: 0.1,
          fieldFractions: [0],
          frequenciesPerMm: [0, 1, 2],
          maxGridSize: 32,
        };
        send({ type: "compute", id: ++id, job: { focusT: 0, zoomT: 0, aberrationT: 0, options } });
        const expected = computeMtf(prepareRuntimeState(lens, 0, 0), options);
        expect(expected.support.available).toBe(true);
        expect(expected.fields[0].reason).toBeNull();
        expect(await finished(id)).toEqual({ type: "result", id, result: expected });
      }
  }
  send({ type: "init", data: {} });
  send({ type: "compute", id: 99, job: {} });
  expect(await finished(99)).toMatchObject({ type: "error", id: 99, error: expect.any(String) });
});

it("drops cancelled requests and reuses finished fields when only the field list changes", async () => {
  const { send, replies, finished } = await loadWorker();
  const L = buildChromaticPositiveElementLens();
  send({ type: "init", data: structuredClone(L.data) });
  const options: MtfOptions = {
    method: "geometric",
    spectrum: "reference",
    pupilSemiDiameterMm: 0.5,
    stopSemiDiameterMm: 0.5,
    fieldFractions: Array.from({ length: 101 }, (_, i) => i / 100),
    maxGridSize: 64,
  };
  const job = { focusT: 0, zoomT: 0, aberrationT: 0, options };
  send({ type: "compute", id: 1, job });
  send({ type: "cancel", id: 1 });
  send({ type: "compute", id: 2, job: { ...job, options: { ...options, fieldFractions: [0, 0.5, 1] } } });
  const coarse = (await finished(2)) as Extract<MtfWorkerReply, { type: "result" }>;
  send({ type: "compute", id: 3, job: { ...job, options: { ...options, fieldFractions: [0, 0.25, 0.5, 1] } } });
  const fine = (await finished(3)) as Extract<MtfWorkerReply, { type: "result" }>;
  expect(replies().some((reply) => reply.id === 1 && reply.type !== "progress")).toBe(false);
  // Shared fractions come back identical; the new one is traced.
  expect(fine.result.fields[0]).toEqual(coarse.result.fields[0]);
  expect(fine.result.fields[2]).toEqual(coarse.result.fields[1]);
  expect(fine.result.fields[1].status).not.toBe("pending");
});
