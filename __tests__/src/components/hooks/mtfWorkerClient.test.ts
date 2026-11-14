import { mtfInputs } from "../../optics/testLensFixtures.js";
import { describe, expect, it } from "vitest";
import {
  MtfWorkerClient,
  MtfPageBudget,
  type MtfJob,
  type MtfWorkerPort,
  type MtfWorkerReply,
  type MtfWorkerRequest,
} from "../../../../src/components/hooks/mtfWorkerClient.js";
import { buildSimplePositiveElementLens } from "../../optics/testLensFixtures.js";
import { computeMtf } from "../../../../src/optics/analysis/mtf/mtf.js";
import { prepareRuntimeState } from "../../../../src/optics/state/runtimeAdapters.js";

class Port implements MtfWorkerPort {
  onmessage: MtfWorkerPort["onmessage"] = null;
  onerror: MtfWorkerPort["onerror"] = null;
  messages: MtfWorkerRequest[] = [];
  terminated = false;
  postMessage(message: MtfWorkerRequest) {
    this.messages.push(message);
  }
  terminate() {
    this.terminated = true;
  }
  reply(data: MtfWorkerReply) {
    this.onmessage?.({ data } as MessageEvent<MtfWorkerReply>);
  }
  computes() {
    return this.messages.filter((message) => message.type === "compute");
  }
}
const L = buildSimplePositiveElementLens();
const job: MtfJob = {
  focusT: 0,
  zoomT: 0,
  aberrationT: 0,
  options: {
    method: "geometric",
    spectrum: "reference",
    focus: "design",
    pupilSemiDiameterMm: 1,
    stopSemiDiameterMm: 1,
    fieldFractions: [0],
    frequenciesPerMm: [0, 10],
    maxGridSize: 32,
  },
};
const result = computeMtf(...mtfInputs(prepareRuntimeState(L, 0, 0), job.options));

describe("MTF worker lifecycle", () => {
  it("transports exact wavelengths and caches their completed results separately", async () => {
    const port = new Port();
    const client = new MtfWorkerClient(L, () => port);
    const results = [];
    for (const [i, wavelengthNm] of [532.125, 632.25].entries()) {
      const requested: MtfJob = { ...job, options: { ...job.options, spectrum: "single", wavelengthNm } };
      const expected = computeMtf(...mtfInputs(prepareRuntimeState(L, 0, 0), requested.options));
      const pending = client.compute(requested);
      expect(port.computes()).toHaveLength(i + 1);
      expect(port.computes().at(-1)!.job.options).toMatchObject({ spectrum: "single", wavelengthNm });
      port.reply({ type: "result", id: i + 1, result: expected });
      expect(await pending).toEqual(expected);
      results.push(expected);
    }
    expect(results[0].fields[0].sagittal).not.toEqual(results[1].fields[0].sagittal);
    expect(
      await client.compute({ ...job, options: { ...job.options, spectrum: "single", wavelengthNm: 532.125 } }),
    ).toEqual(results[0]);
    expect(port.computes()).toHaveLength(2);
    client.dispose();
  });
  it("keys held image planes separately from each other and from independent focus", async () => {
    const port = new Port();
    const client = new MtfWorkerClient(L, () => port);
    const shifts = [undefined, 0, 0.25];
    for (const [i, heldFocusShiftMm] of shifts.entries()) {
      const requested = { ...job, options: { ...job.options, heldFocusShiftMm } };
      const pending = client.compute(requested);
      expect(port.computes()).toHaveLength(i + 1);
      const response = {
        ...result,
        focus: {
          ...result.focus!,
          mode: heldFocusShiftMm === undefined ? "design" : "held",
          appliedShiftMm: heldFocusShiftMm ?? 0,
        },
      } as const;
      port.reply({ type: "result", id: i + 1, result: response });
      expect(await pending).toEqual(response);
      expect(await client.compute(requested)).toEqual(response);
      expect(port.computes()).toHaveLength(i + 1);
    }
    client.dispose();
  });
  it("retains completed curves across chart requests and invalidates changed apertures", async () => {
    const port = new Port();
    const client = new MtfWorkerClient(L, () => port);
    const pending = client.compute(job);
    port.reply({ type: "result", id: 1, result });
    expect(await pending).toEqual(result);
    expect(await client.compute(job)).toEqual(result);
    expect(port.computes()).toHaveLength(1);
    const changed = client.compute({ ...job, options: { ...job.options, stopSemiDiameterMm: 0.8 } });
    port.reply({ type: "result", id: 2, result });
    await changed;
    expect(port.computes()).toHaveLength(2);
    client.dispose();
    expect(port.terminated).toBe(true);
  });
  it("cancels superseded work cooperatively, keeps the warm worker and ignores late messages", async () => {
    let created = 0;
    const port = new Port();
    const client = new MtfWorkerClient(L, () => {
      created++;
      return port;
    });
    const old = client.compute(job).catch((e: Error) => e.name);
    const current = client.compute({ ...job, zoomT: 0.5 });
    expect(await old).toBe("AbortError");
    expect(port.messages).toContainEqual({ type: "cancel", id: 1 });
    expect(port.terminated).toBe(false);
    port.reply({ type: "result", id: 1, result: { ...result, fields: [] } });
    port.reply({ type: "result", id: 2, result });
    expect(await current).toEqual(result);
    expect(created).toBe(1);
    expect(port.messages.filter((message) => message.type === "init")).toHaveLength(1);
    client.dispose();
  });
  it("reports progress for the running request only", async () => {
    const port = new Port();
    const client = new MtfWorkerClient(L, () => port);
    const phases: string[] = [];
    const pending = client.compute(job, (progress) => phases.push(progress.phase.kind));
    port.reply({ type: "progress", id: 1, phase: { kind: "focus", lineIndex: 1, lineCount: 9 } });
    port.reply({ type: "progress", id: 7, phase: { kind: "geometry" }, result });
    port.reply({ type: "result", id: 1, result });
    await pending;
    expect(phases).toEqual(["waiting", "geometry", "focus"]);
    client.dispose();
  });
  it("evicts retained payloads and keeps caller mutations out of cached calculations", async () => {
    const port = new Port();
    const bytes = (JSON.stringify(result).length + JSON.stringify(job).length) * 2 + 1024;
    const client = new MtfWorkerClient(L, () => port, new MtfPageBudget(2, bytes + 50));
    const first = client.compute(job);
    port.reply({ type: "result", id: 1, result });
    await first;
    const copy = await client.compute(job);
    copy.fields[0].sagittal[0] = 0.123;
    expect((await client.compute(job)).fields[0].sagittal[0]).toBe(result.fields[0].sagittal[0]);
    const changed = client.compute({ ...job, options: { ...job.options, spectrum: "cdf" } });
    port.reply({ type: "result", id: 2, result });
    await changed;
    const evicted = client.compute(job);
    expect(port.computes()).toHaveLength(3);
    port.reply({ type: "result", id: 3, result });
    expect(await evicted).toEqual(result);
    client.dispose();
  });
  it("does not cache results beyond its byte budget and reports worker errors", async () => {
    const port = new Port();
    const client = new MtfWorkerClient(L, () => port, new MtfPageBudget(2, 1));
    const first = client.compute(job);
    port.reply({ type: "result", id: 1, result });
    await first;
    const second = client.compute(job);
    port.reply({ type: "error", id: 2, error: "unavailable" });
    await expect(second).rejects.toThrow("unavailable");
    expect(port.computes()).toHaveLength(2);
    client.dispose();
  });
});

describe("page-wide MTF resources", () => {
  it("admits two jobs and orders queued main, comparison and sweep jobs FIFO within each class", async () => {
    const budget = new MtfPageBudget();
    const ports = Array.from({ length: 8 }, () => new Port());
    const clients = ports.map((port) => new MtfWorkerClient(L, () => port, budget));
    const order: number[] = [];
    const priorities = ["sweep", "sweep", "sweep", "comparison", "main", "main", "comparison", "sweep"] as const;
    const pending = clients.map((client, i) =>
      client.compute(
        job,
        (progress) => {
          if (progress.phase.kind === "geometry") order.push(i);
        },
        priorities[i],
      ),
    );
    expect(order).toEqual([0, 1]);
    expect(ports[4].messages).toEqual([]);
    for (const index of [0, 1, 4, 5, 3, 6, 2, 7]) ports[index].reply({ type: "result", id: 1, result });
    await Promise.all(pending);
    expect(order).toEqual([0, 1, 4, 5, 3, 6, 2, 7]);
    clients.forEach((client) => client.dispose());
  });

  it("removes cancelled queued jobs and holds running slots until cancellation is acknowledged", async () => {
    const budget = new MtfPageBudget(1);
    const ports = Array.from({ length: 4 }, () => new Port());
    const clients = ports.map((port) => new MtfWorkerClient(L, () => port, budget));
    const first = clients[0].compute(job).catch((error: Error) => error.name);
    const queued = clients[1].compute(job).catch((error: Error) => error.name);
    const next = clients[2].compute(job);
    clients[1].cancel();
    clients[0].cancel();
    expect(await queued).toBe("AbortError");
    expect(await first).toBe("AbortError");
    expect(ports[1].messages).toEqual([]);
    expect(ports[2].computes()).toHaveLength(0);
    ports[0].reply({ type: "cancelled", id: 1 });
    expect(ports[2].computes()).toHaveLength(1);
    const last = clients[3].compute(job);
    ports[0].reply({ type: "cancelled", id: 1 });
    expect(ports[3].computes()).toHaveLength(0);
    ports[2].reply({ type: "result", id: 1, result });
    ports[3].reply({ type: "result", id: 1, result });
    await Promise.all([next, last]);
    clients.forEach((client) => client.dispose());
  });

  it("shares one cache byte allowance and promotes hits across client owners", async () => {
    const bytes = (JSON.stringify(result).length + JSON.stringify(job).length) * 2 + 1024;
    const budget = new MtfPageBudget(2, bytes * 2 + 10);
    const ports = Array.from({ length: 3 }, () => new Port());
    const clients = ports.map((port) => new MtfWorkerClient(L, () => port, budget));
    for (const index of [0, 1]) {
      const pending = clients[index].compute(job);
      ports[index].reply({ type: "result", id: 1, result });
      await pending;
    }
    const hit = await clients[0].compute(job);
    hit.fields[0].sagittal[0] = 0.123;
    expect((await clients[0].compute(job)).fields[0].sagittal[0]).toBe(result.fields[0].sagittal[0]);
    const third = clients[2].compute(job);
    ports[2].reply({ type: "result", id: 1, result });
    await third;
    expect(await clients[0].compute(job)).toEqual(result);
    const evicted = clients[1].compute(job);
    expect(ports[1].computes()).toHaveLength(2);
    ports[1].reply({ type: "result", id: 2, result });
    await evicted;
    clients.forEach((client) => client.dispose());
  });

  it("releases occupied slots on worker errors, construction errors and disposal", async () => {
    const budget = new MtfPageBudget(1);
    const port = new Port();
    const client = new MtfWorkerClient(L, () => port, budget);
    const broken = new MtfWorkerClient(
      L,
      () => {
        throw new Error("constructor failed");
      },
      budget,
    );
    const nextPort = new Port();
    const next = new MtfWorkerClient(L, () => nextPort, budget);
    const pending = client.compute(job).catch((error: Error) => error.message);
    const failed = broken.compute(job).catch((error: Error) => error.message);
    const done = next.compute(job);
    port.onerror?.({} as ErrorEvent);
    expect(await pending).toContain("background calculation failed");
    expect(await failed).toBe("constructor failed");
    expect(nextPort.computes()).toHaveLength(1);
    next.dispose();
    await expect(done).rejects.toMatchObject({ name: "AbortError" });
    client.dispose();
    broken.dispose();
  });
});
