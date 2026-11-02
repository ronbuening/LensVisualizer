import { constructionFixtureData } from "../../optics/constructionFixtures.js";
import { mtfInputs } from "../../optics/testLensFixtures.js";
import { afterEach, expect, it, vi } from "vitest";
import {
  build,
  buildChromaticPositiveElementLens,
  REAR_PLATE_FIXTURE,
  teleconverterFixture,
  teleconverterHostData,
} from "../../optics/testLensFixtures.js";
import { attachFixtureTeleconverter as attachTeleconverter } from "../../optics/constructionFixtures.js";
import { computeMtf } from "../../../../src/optics/analysis/mtf/mtf.js";
import { prepareRuntimeState } from "../../../../src/optics/state/runtimeAdapters.js";
import type { MtfOptions } from "../../../../src/types/mtf.js";
import { canonicalLensFromRuntime, compiledLensFromRuntime } from "../../../../src/optics/prescription/identity.js";
import {
  MtfWorkerClient,
  type MtfWorkerPort,
  type MtfWorkerReply,
} from "../../../../src/components/hooks/mtfWorkerClient.js";

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

async function loadWorker() {
  const port = { onmessage: null as ((event: MessageEvent) => void) | null, postMessage: vi.fn() };
  vi.stubGlobal("self", port);
  vi.resetModules();
  const workerCompiler = await import("../../../../src/optics/prescription/compile.js");
  const compiled = vi.spyOn(workerCompiler, "compileLens");
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
  return { send, replies, finished, compiled };
}

it("compiles canonical prescriptions in the worker and matches the pure engine for every method", async () => {
  const { send, finished, compiled } = await loadWorker();
  send({ type: "compute", id: 1, job: {} });
  expect(await finished(1)).toEqual({ type: "error", id: 1, error: "Error: MTF prescription is unavailable." });
  const L = buildChromaticPositiveElementLens();
  // Transport the unexpanded prescription even when the runtime already contains hidden plates.
  const plated = build({
    ...constructionFixtureData(L),
    rearPlates: [REAR_PLATE_FIXTURE, { ...REAR_PLATE_FIXTURE, gapAfterMm: 20 }],
  });
  // A composed pair retains its descriptor so plates expand on the correct side of the converter.
  const hostData = teleconverterHostData({
    plates: [{ ...REAR_PLATE_FIXTURE, label: "F", gapAfterMm: 38 }, REAR_PLATE_FIXTURE],
  });
  const converterData = teleconverterFixture();
  const converted = build(
    attachTeleconverter(
      { ...hostData, elements: [{ ...hostData.elements[0], glass: "N-BK7" }] },
      { ...converterData, elements: [{ ...converterData.elements[0], glass: "N-BK7" }] },
    ),
  );
  const methods = ["geometric", "diffraction"] as const;
  const spectra = ["reference", "cdf", "photopic"] as const;
  // The full method × spectrum grid proves dispatch once; plate cases need one combination.
  const cases = [
    { lens: L, methods, spectra },
    { lens: plated, methods: ["diffraction"] as const, spectra: ["photopic"] as const },
    { lens: converted, methods: ["diffraction"] as const, spectra: ["photopic"] as const },
  ];
  let id = 10;
  for (const { lens, methods, spectra } of cases) {
    const messages: unknown[] = [];
    const client = new MtfWorkerClient(
      lens,
      () =>
        ({
          postMessage: (message) => messages.push(structuredClone(message)),
          terminate: () => {},
          onmessage: null,
          onerror: null,
        }) as MtfWorkerPort,
    );
    const pending = client.compute({
      focusT: 0,
      zoomT: 0,
      aberrationT: 0,
      options: {
        method: "geometric",
        spectrum: "reference",
        focus: "design",
        pupilSemiDiameterMm: 0.1,
        stopSemiDiameterMm: 0.1,
      },
    });
    const cancelled = pending.catch(() => {});
    client.dispose();
    await cancelled;
    compiled.mockClear();
    send(messages[0]);
    expect(compiled).toHaveBeenCalledTimes(1);
    const workerLens = compiled.mock.results[0].value;
    const mainLens = compiledLensFromRuntime(lens);
    const records = (value: unknown): unknown => {
      if (typeof value === "function") return expect.any(Function);
      if (Array.isArray(value)) return value.map(records);
      if (value && typeof value === "object")
        return Object.fromEntries(Object.entries(value).map(([key, entry]) => [key, records(entry)]));
      return value;
    };
    expect(workerLens).not.toBe(mainLens);
    expect(workerLens).toEqual(records(mainLens));
    const compilationCount = compiled.mock.calls.length;
    for (const method of methods)
      for (const spectrum of spectra) {
        const options: MtfOptions = {
          method,
          spectrum,
          focus: "design",
          pupilSemiDiameterMm: 0.1,
          stopSemiDiameterMm: 0.1,
          fieldFractions: [0],
          frequenciesPerMm: [0, 1, 2],
          maxGridSize: 32,
        };
        send({ type: "compute", id: ++id, job: { focusT: 0, zoomT: 0, aberrationT: 0, options } });
        const expected = computeMtf(...mtfInputs(prepareRuntimeState(lens, 0, 0), options));
        expect(expected.support.available).toBe(true);
        expect(expected.fields[0].reason).toBeNull();
        expect(await finished(id)).toEqual({ type: "result", id, result: expected });
        expect(compiled).toHaveBeenCalledTimes(compilationCount);
      }
  }
  send({ type: "init", input: {} });
  send({ type: "compute", id: 99, job: {} });
  expect(await finished(99)).toMatchObject({ type: "error", id: 99, error: expect.any(String) });
});

it("drops cancelled requests and reuses finished fields when only the field list changes", async () => {
  const { send, replies, finished } = await loadWorker();
  const L = buildChromaticPositiveElementLens();
  send({ type: "init", input: structuredClone(canonicalLensFromRuntime(L)) });
  const options: MtfOptions = {
    method: "geometric",
    spectrum: "reference",
    focus: "design",
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
