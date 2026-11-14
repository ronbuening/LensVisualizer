import { constructionFixtureData } from "../../optics/constructionFixtures.js";
import { mtfInputs } from "../../optics/testLensFixtures.js";
import { afterEach, expect, it, vi } from "vitest";
import {
  build,
  buildChromaticPositiveElementLens,
  buildSimplePositiveElementLens,
  REAR_PLATE_FIXTURE,
  teleconverterFixture,
  teleconverterHostData,
} from "../../optics/testLensFixtures.js";
import { attachFixtureTeleconverter as attachTeleconverter } from "../../optics/constructionFixtures.js";
import { assessMtfDataLimitations } from "../../../../src/optics/analysis/mtf/mtfDataLimitations.js";
import { computeMtf } from "../../../../src/optics/analysis/mtf/mtf.js";
import { prepareRuntimeState } from "../../../../src/optics/state/runtimeAdapters.js";
import type { MtfFieldResult, MtfOptions, MtfResult } from "../../../../src/types/mtf.js";
import { canonicalLensFromRuntime, compiledLensFromRuntime } from "../../../../src/optics/prescription/identity.js";
import {
  MtfWorkerClient,
  type MtfWorkerPort,
  type MtfWorkerReply,
} from "../../../../src/components/hooks/mtfWorkerClient.js";

afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

async function loadWorker() {
  const port = { onmessage: null as ((event: MessageEvent) => void) | null, postMessage: vi.fn() };
  vi.stubGlobal("self", port);
  vi.resetModules();
  const workerCompiler = await import("../../../../src/optics/prescription/compile.js");
  const compiled = vi.spyOn(workerCompiler, "compileLens");
  const { runtimeView } = await import("../../../../src/optics/prescription/runtimeView.js");
  const { prepareRuntimeState: prepareWorkerState } = await import("../../../../src/optics/state/runtimeAdapters.js");
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
  return { send, replies, finished, compiled, runtimeView, prepareWorkerState, port };
}

it("round-trips the finite object, working aperture and traced magnification and reuses them with focus", async () => {
  const { send, finished } = await loadWorker();
  const lens = build({
    ...constructionFixtureData(buildSimplePositiveElementLens()),
    finiteConjugates: [
      {
        focusT: 1,
        zoomT: 0,
        objectDistanceMm: 1000,
        distanceReference: "first-surface",
        source: "Synthetic finite source",
      },
    ],
  });
  const options: MtfOptions = {
    method: "diffraction",
    spectrum: "reference",
    focus: "design",
    pupilSemiDiameterMm: 0.1,
    stopSemiDiameterMm: 0.1,
    fieldFractions: [0],
    frequenciesPerMm: [0, 1, 2],
    maxGridSize: 32,
  };
  send({ type: "init", input: structuredClone(canonicalLensFromRuntime(lens)) });
  const job = { focusT: 1, zoomT: 0, aberrationT: 0, options };
  send({ type: "compute", id: 1, job });
  const expected = computeMtf(...mtfInputs(prepareRuntimeState(lens, 1, 0), options));
  expect(expected.conjugate).toEqual({ kind: "finite", objectDistanceMm: 1000, distanceReference: "first-surface" });
  expect(expected.workingFNumber).toBeGreaterThan(0);
  expect(expected.magnification).toBeLessThan(0);
  expect(structuredClone(await finished(1))).toEqual({ type: "result", id: 1, result: expected });
  send({ type: "compute", id: 2, job: { ...job, options: { ...options, fieldFractions: [0, 0.5] } } });
  const cached = await finished(2);
  expect(cached.type).toBe("result");
  if (cached.type !== "result") throw new Error("Expected a worker result");
  expect(cached.result.focus).toEqual(expected.focus);
  expect(cached.result.workingFNumber).toBe(expected.workingFNumber);
  expect(cached.result.magnification).toBe(expected.magnification);
  expect(cached.result.axialVignetting).toEqual(expected.axialVignetting);
});

it("compiles canonical prescriptions in the worker and matches the pure engine for every method", async () => {
  const { send, finished, compiled, runtimeView, prepareWorkerState } = await loadWorker();
  send({ type: "compute", id: 1, job: {} });
  expect(await finished(1)).toEqual({ type: "error", id: 1, error: "Error: MTF prescription is unavailable." });
  const L = buildChromaticPositiveElementLens();
  // Transport the unexpanded prescription even when the runtime already contains hidden plates.
  const plated = build({
    ...constructionFixtureData(L),
    rearPlates: [REAR_PLATE_FIXTURE, { ...REAR_PLATE_FIXTURE, gapAfterMm: 20 }],
    sourceOmissions: [
      { kind: "asphere-coefficients", surfaces: [L.source.surfaces[0].label], note: "Spherical stand-in." },
    ],
    sdSource: "figure-measured",
  });
  // A composed pair retains its descriptor so plates expand on the correct side of the converter.
  const hostData = teleconverterHostData({
    plates: [{ ...REAR_PLATE_FIXTURE, label: "F", gapAfterMm: 38 }, REAR_PLATE_FIXTURE],
  });
  const converterData = teleconverterFixture();
  const converted = build(
    attachTeleconverter(
      {
        ...hostData,
        elements: [{ ...hostData.elements[0], glass: "N-BK7" }],
        sourceOmissions: [
          { kind: "asphere-term", surfaces: [hostData.surfaces[0].label], note: "A10 is blank and taken as zero." },
        ],
      },
      {
        ...converterData,
        elements: [{ ...converterData.elements[0], glass: "N-BK7" }],
        sourceOmissions: [
          {
            kind: "asphere-equation",
            surfaces: [converterData.surfaces[0].label],
            note: "The sibling patent supplies the interpreted equation.",
          },
        ],
      },
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
    const limitationInput = {
      preferredSpectrum: "reference",
      spectrum: "reference",
      referenceWavelengthNm: 587.6,
      result: null,
    } as const;
    const workerNotes = assessMtfDataLimitations(prepareWorkerState(runtimeView(workerLens), 0, 0), limitationInput);
    expect(workerNotes).toEqual(assessMtfDataLimitations(prepareRuntimeState(lens, 0, 0), limitationInput));
    if (lens === plated)
      expect(workerNotes.map(({ kind }) => kind)).toEqual(["incomplete-prescription", "estimated-apertures"]);
    if (lens === converted) {
      expect(workerNotes).toEqual([{ kind: "incomplete-prescription", blocking: false, text: expect.any(String) }]);
      expect(workerNotes[0].text).toContain("A10 is blank and taken as zero.");
      expect(workerNotes[0].text).toContain(`surface ${lens.attachedTeleconverter!.firstSurfaceLabel}:`);
      expect(workerNotes[0].text).toContain("The sibling patent supplies the interpreted equation.");
    }
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
  expect(replies().some((reply) => reply.id === 1 && reply.type === "result")).toBe(false);
  expect(replies()).toContainEqual({ type: "cancelled", id: 1 });
  // Shared fractions come back identical; the new one is traced.
  expect(fine.result.fields[0]).toEqual(coarse.result.fields[0]);
  expect(fine.result.fields[2]).toEqual(coarse.result.fields[1]);
  expect(fine.result.fields[1].status).not.toBe("pending");
});

it("keeps held planes in the worker's focus and field cache keys", async () => {
  const { send, finished } = await loadWorker();
  const L = buildChromaticPositiveElementLens();
  send({ type: "init", input: structuredClone(canonicalLensFromRuntime(L)) });
  const options: MtfOptions = {
    method: "geometric",
    spectrum: "reference",
    focus: "best-axial",
    pupilSemiDiameterMm: 0.5,
    stopSemiDiameterMm: 0.5,
    fieldFractions: [0],
    frequenciesPerMm: [0, 10, 20],
    maxGridSize: 32,
  };
  for (const [i, shift] of [0, 0.25, 0].entries()) {
    const held = { ...options, heldFocusShiftMm: shift };
    send({ type: "compute", id: i + 1, job: { focusT: 0, zoomT: 0, aberrationT: 0, options: held } });
    const expected = computeMtf(...mtfInputs(prepareRuntimeState(L, 0, 0), held));
    expect(await finished(i + 1)).toEqual({ type: "result", id: i + 1, result: expected });
    expect(expected.focus).toMatchObject({ mode: "held", appliedShiftMm: shift });
  }
});

it("keys single wavelengths separately in the worker's focus and field caches", async () => {
  const { send, finished } = await loadWorker();
  const L = buildChromaticPositiveElementLens();
  send({ type: "init", input: structuredClone(canonicalLensFromRuntime(L)) });
  const results = [];
  for (const [i, wavelengthNm] of [532, 632, 532].entries()) {
    const options: MtfOptions = {
      method: "geometric",
      spectrum: "single",
      wavelengthNm,
      focus: "best-axial",
      pupilSemiDiameterMm: 1,
      stopSemiDiameterMm: 1,
      fieldFractions: [0],
      frequenciesPerMm: [0, 10, 30],
      maxGridSize: 32,
    };
    send({ type: "compute", id: i + 1, job: { focusT: 0, zoomT: 0, aberrationT: 0, options } });
    const expected = computeMtf(...mtfInputs(prepareRuntimeState(L, 0, 0), options));
    expect(expected.support.available).toBe(true);
    expect(await finished(i + 1)).toEqual({ type: "result", id: i + 1, result: expected });
    results.push(expected);
  }
  expect(results[0].focus!.bestAxialShiftMm).not.toBe(results[1].focus!.bestAxialShiftMm);
  expect(results[0]).toEqual(results[2]);
});

it("restricts zoom overview to each station's field edge with the same ordinary MTF values and plane", async () => {
  const { send, finished } = await loadWorker();
  const lens = buildSimplePositiveElementLens();
  send({ type: "init", input: structuredClone(canonicalLensFromRuntime(lens)) });
  const options: MtfOptions = {
    method: "geometric",
    spectrum: "reference",
    focus: "best-axial",
    pupilSemiDiameterMm: 0.5,
    stopSemiDiameterMm: 0.5,
    fieldFractions: [0, 0.25, 0.5, 0.75, 1],
    frequenciesPerMm: [0, 10, 30],
    maxGridSize: 32,
  };
  const ordinary = computeMtf(...mtfInputs(prepareRuntimeState(lens, 0, 0), options));
  expect(ordinary.support.available).toBe(true);
  for (const [index, field] of ["overview", 0.5].entries()) {
    send({
      type: "compute",
      id: index + 1,
      job: {
        focusT: 0,
        zoomT: 0,
        aberrationT: 0,
        options,
        sweep: { candidates: options.fieldFractions, field },
      },
    });
    const reply = await finished(index + 1);
    expect(reply.type).toBe("result");
    if (reply.type !== "result") throw new Error("Expected station result");
    expect(reply.result.focus).toEqual(ordinary.focus);
    expect(reply.result.fields.map((f) => f.fieldFraction)).toEqual(field === "overview" ? [0, 0.5, 1] : [0.5]);
    for (const sampled of reply.result.fields)
      expect(sampled).toEqual(ordinary.fields.find((f) => f.fieldFraction === sampled.fieldFraction));
  }
});

it("keeps ordinary field heights even when a sweep message contains a foreign reference height", async () => {
  const { send, finished } = await loadWorker();
  const lens = buildSimplePositiveElementLens();
  send({ type: "init", input: structuredClone(canonicalLensFromRuntime(lens)) });
  const options: MtfOptions = {
    method: "geometric",
    spectrum: "reference",
    focus: "design",
    pupilSemiDiameterMm: 0.5,
    stopSemiDiameterMm: 0.5,
    fieldFractions: [0, 0.25, 0.5, 0.75, 1],
    frequenciesPerMm: [0, 10],
    maxGridSize: 32,
  };
  const ordinary = computeMtf(...mtfInputs(prepareRuntimeState(lens, 0, 0), options));
  const referenceHeightMm = ordinary.geometry!.referenceHeightMm * 3;
  send({
    type: "compute",
    id: 1,
    job: {
      focusT: 0,
      zoomT: 0,
      aberrationT: 0,
      options,
      sweep: { candidates: options.fieldFractions, field: "overview", referenceHeightMm },
    },
  });
  const reply = await finished(1);
  if (reply.type !== "result") throw new Error("Expected station result");
  expect(reply.result.geometry).toEqual(ordinary.geometry);
  expect(reply.result.fields.map((field) => field.fieldFraction)).toEqual([0, 0.5, 1]);
  for (const field of reply.result.fields)
    expect(field).toEqual(ordinary.fields.find((control) => control.fieldFraction === field.fieldFraction));
});

it("finds an inward overview field when the modeled edge has no usable MTF", async () => {
  const { send, finished, port } = await loadWorker();
  vi.useFakeTimers();
  let now = 0;
  vi.spyOn(performance, "now").mockImplementation(() => (now += 100));
  // Capture transport-time values: the engine mutates partial results as it advances.
  const snapshots: MtfResult[] = [];
  port.postMessage.mockImplementation((reply: MtfWorkerReply) => {
    if ((reply.type === "progress" || reply.type === "result") && reply.result)
      snapshots.push(structuredClone(reply.result));
  });
  const lens = buildSimplePositiveElementLens();
  const options: MtfOptions = {
    method: "geometric",
    spectrum: "reference",
    focus: "design",
    pupilSemiDiameterMm: 0.5,
    stopSemiDiameterMm: 0.5,
    fieldFractions: [0, 0.25, 0.5, 0.75, 1],
    frequenciesPerMm: [0, 10],
    maxGridSize: 32,
  };
  const engine = await import("../../../../src/optics/analysis/mtf/mtf.js");
  const ordinary = computeMtf(...mtfInputs(prepareRuntimeState(lens, 0, 0), options));
  const steps = engine.computeMtfSteps;
  const traced = vi.spyOn(engine, "computeMtfSteps").mockImplementation(function* (request, settings, cache) {
    const result = yield* steps(request, settings, cache);
    const edge = result.fields.find((field) => field.fieldFraction === 1);
    if (edge) {
      edge.status = "unavailable";
      edge.sagittal = [];
      edge.tangential = [];
    }
    return result;
  });
  send({ type: "init", input: structuredClone(canonicalLensFromRuntime(lens)) });
  send({
    type: "compute",
    id: 1,
    job: {
      focusT: 0,
      zoomT: 0,
      aberrationT: 0,
      options,
      sweep: { candidates: options.fieldFractions, field: "overview" },
    },
  });
  await vi.runAllTimersAsync();
  const reply = await finished(1);
  if (reply.type !== "result") throw new Error("Expected station result");
  expect(traced.mock.calls.map(([, settings]) => settings.fieldFractions)).toEqual([
    [0, 0.5, 1],
    [0, 0.5, 0.75],
  ]);
  expect(reply.result.fields).toEqual(ordinary.fields.filter((field) => [0, 0.5, 0.75].includes(field.fieldFraction)));
  expect(reply.result.focus).toEqual(ordinary.focus);
  expect(reply.result.sweepEdge).toEqual({
    fieldFraction: 0.75,
    imageHeightMm: ordinary.fields.find((field) => field.fieldFraction === 0.75)!.imageHeightMm,
  });
  expect(
    snapshots.some(
      (result) =>
        result.sweepEdge?.fieldFraction === 1 &&
        [0, 0.5].every((fraction) =>
          result.fields.some((field) => field.fieldFraction === fraction && field.status !== "pending"),
        ),
    ),
  ).toBe(true);
  const previousFields = new Map<number, MtfFieldResult>();
  for (const result of snapshots) {
    for (const field of result.fields) {
      const previous = previousFields.get(field.fieldFraction);
      if (previous) {
        if (previous.status !== "pending") expect(field.status).not.toBe("pending");
        expect(field.gridSize).toBeGreaterThanOrEqual(previous.gridSize);
      }
      previousFields.set(field.fieldFraction, field);
    }
  }
});

it("matches ordinary no-format fields at every station even when their modeled reference heights differ", async () => {
  const { send, finished } = await loadWorker();
  const lens = build({
    ...constructionFixtureData(buildSimplePositiveElementLens()),
    zoomPositions: [50, 60, 70],
    var: {
      "1": [
        [5, 5],
        [7, 7],
        [9, 9],
      ],
    },
  });
  send({ type: "init", input: structuredClone(canonicalLensFromRuntime(lens)) });
  const options: MtfOptions = {
    method: "geometric",
    spectrum: "reference",
    focus: "best-axial",
    pupilSemiDiameterMm: 0.5,
    stopSemiDiameterMm: 0.5,
    fieldFractions: [0, 0.5, 1],
    frequenciesPerMm: [0, 10, 30],
    maxGridSize: 32,
  };
  const heights: number[] = [];
  for (const [id, zoomT] of [0, 0.5, 1].entries()) {
    const ordinary = computeMtf(...mtfInputs(prepareRuntimeState(lens, 0, zoomT), options));
    heights.push(ordinary.geometry!.referenceHeightMm);
    expect(ordinary.geometry!.basis).toBe("modeled-edge");
    send({
      type: "compute",
      id,
      job: { focusT: 0, zoomT, aberrationT: 0, options, sweep: { candidates: options.fieldFractions, field: 0.5 } },
    });
    const reply = await finished(id);
    if (reply.type !== "result") throw new Error("Expected station result");
    expect(reply.result.geometry).toEqual(ordinary.geometry);
    expect(reply.result.fields).toEqual(ordinary.fields.filter((field) => field.fieldFraction === 0.5));
    expect(reply.result.focus).toEqual(ordinary.focus);
  }
  expect(new Set(heights).size).toBe(3);
});

it("carries the center as the selected edge when the modeled radius is below the first field step", async () => {
  const { send, finished } = await loadWorker();
  const lens = buildSimplePositiveElementLens();
  const options: MtfOptions = {
    method: "geometric",
    spectrum: "reference",
    focus: "best-axial",
    pupilSemiDiameterMm: 0.5,
    stopSemiDiameterMm: 0.5,
    fieldFractions: [0, 0.1, 0.5, 1],
    frequenciesPerMm: [0, 10, 30],
    maxGridSize: 32,
  };
  const ordinary = computeMtf(...mtfInputs(prepareRuntimeState(lens, 0, 0), options));
  const engine = await import("../../../../src/optics/analysis/mtf/mtf.js");
  vi.spyOn(engine, "resolveMtfGeometry").mockReturnValue({
    ...ordinary.geometry!,
    modeledEdgeHeightMm: ordinary.geometry!.referenceHeightMm * 0.05,
  });
  send({ type: "init", input: structuredClone(canonicalLensFromRuntime(lens)) });
  send({
    type: "compute",
    id: 1,
    job: {
      focusT: 0,
      zoomT: 0,
      aberrationT: 0,
      options,
      sweep: { candidates: options.fieldFractions, field: "overview" },
    },
  });
  const reply = await finished(1);
  if (reply.type !== "result") throw new Error("Expected station result");
  expect(reply.result.sweepEdge).toEqual({ fieldFraction: 0, imageHeightMm: 0 });
  expect(reply.result.fields[0]).toEqual(ordinary.fields[0]);
  expect(reply.result.fields[1]).toMatchObject({ fieldFraction: 0.5, status: "unavailable" });
});

it("honours cancellation during the first step at the next boundary without advancing another yield", async () => {
  const { send, replies, compiled } = await loadWorker();
  vi.useFakeTimers();
  let now = 0;
  vi.spyOn(performance, "now").mockImplementation(() => (now += 100));
  const engine = await import("../../../../src/optics/analysis/mtf/mtf.js");
  const compute = engine.computeMtfSteps;
  let yields = 0;
  vi.spyOn(engine, "computeMtfSteps").mockImplementation(function* (...args) {
    const steps = compute(...args);
    let next = steps.next();
    while (!next.done) {
      yields++;
      if (yields === 1) setTimeout(() => send({ type: "cancel", id: 1 }), 0);
      yield next.value;
      next = steps.next();
    }
    return next.value;
  });
  const lens = buildChromaticPositiveElementLens();
  send({ type: "init", input: structuredClone(canonicalLensFromRuntime(lens)) });
  const job = {
    focusT: 0,
    zoomT: 0,
    aberrationT: 0,
    options: {
      method: "geometric",
      spectrum: "photopic",
      focus: "best-axial",
      pupilSemiDiameterMm: 1,
      stopSemiDiameterMm: 1,
      fieldFractions: [0, 0.5, 1],
      maxGridSize: 256,
    },
  };
  send({ type: "compute", id: 1, job });
  expect(yields).toBe(1);
  await vi.runAllTimersAsync();
  expect(yields).toBe(1);
  expect(replies()).toContainEqual({ type: "cancelled", id: 1 });
  expect(replies().filter((reply) => reply.type === "result")).toEqual([]);
  const builds = compiled.mock.calls.length;
  send({ type: "compute", id: 2, job: { ...job, options: { ...job.options, fieldFractions: [0], maxGridSize: 32 } } });
  await vi.runAllTimersAsync();
  expect(replies().some((reply) => reply.id === 2 && reply.type === "result")).toBe(true);
  expect(compiled).toHaveBeenCalledTimes(builds);
});

it.each([20, 100])("posts phases with a %i ms clock step and a 100 ms progress throttle", async (clockStep) => {
  const { send, replies, port } = await loadWorker();
  vi.useFakeTimers();
  let now = 0;
  vi.spyOn(performance, "now").mockImplementation(() => (now += clockStep));
  const times: number[] = [];
  port.postMessage.mockImplementation((reply: MtfWorkerReply) => {
    if (reply.type === "progress") times.push(now);
  });
  const lens = buildChromaticPositiveElementLens();
  send({ type: "init", input: structuredClone(canonicalLensFromRuntime(lens)) });
  send({
    type: "compute",
    id: 1,
    job: {
      focusT: 0,
      zoomT: 0,
      aberrationT: 0,
      options: {
        method: "geometric",
        spectrum: "photopic",
        focus: "best-axial",
        pupilSemiDiameterMm: 1,
        stopSemiDiameterMm: 1,
        fieldFractions: [0, 0.5],
        maxGridSize: 32,
      },
    },
  });
  await vi.runAllTimersAsync();
  const progress = replies().filter((reply) => reply.type === "progress");
  expect(progress.some((reply) => reply.phase.kind === "focus")).toBe(true);
  if (clockStep === 100) {
    expect(progress[0].phase).toEqual({ kind: "geometry" });
    expect(progress.some((reply) => reply.phase.kind === "aperture")).toBe(true);
    expect(progress.filter((reply) => reply.phase.kind === "focus").map((reply) => reply.phase)).toEqual(
      Array.from({ length: 10 }, (_, lineIndex) => ({ kind: "focus", lineIndex, lineCount: 9 })),
    );
  }
  expect(progress).toContainEqual(
    expect.objectContaining({ phase: expect.objectContaining({ kind: "field", fieldCount: 2, lineCount: 9 }) }),
  );
  for (let i = 1; i < times.length; i++) expect(times[i] - times[i - 1]).toBeGreaterThanOrEqual(100);
  expect(replies().at(-1)?.type).toBe("result");
});
