import { describe, expect, it } from "vitest";
import {
  MtfWorkerClient,
  type MtfJob,
  type MtfWorkerPort,
  type MtfWorkerReply,
  type MtfWorkerRequest,
} from "../../../../src/components/hooks/mtfWorkerClient.js";
import { buildSimplePositiveElementLens } from "../../optics/testLensFixtures.js";
import { computeMtf } from "../../../../src/optics/mtf.js";
import { prepareRuntimeState } from "../../../../src/optics/compat.js";

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
    pupilSemiDiameterMm: 1,
    stopSemiDiameterMm: 1,
    fieldFractions: [0],
    frequenciesPerMm: [0, 10],
    maxGridSize: 32,
  },
};
const result = computeMtf(prepareRuntimeState(L, 0, 0), job.options);

describe("MTF worker lifecycle", () => {
  it("retains completed curves across chart requests and invalidates changed apertures", async () => {
    const port = new Port();
    const client = new MtfWorkerClient(L.data, () => port);
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
    const client = new MtfWorkerClient(L.data, () => {
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
    const client = new MtfWorkerClient(L.data, () => port);
    const partials: number[] = [];
    const pending = client.compute(job, (partial) => partials.push(partial.fields.length));
    port.reply({ type: "progress", id: 1, result: { ...result, fields: [] } });
    port.reply({ type: "progress", id: 7, result });
    port.reply({ type: "result", id: 1, result });
    await pending;
    expect(partials).toEqual([0]);
    client.dispose();
  });
  it("evicts retained payloads and keeps caller mutations out of cached calculations", async () => {
    const port = new Port();
    const bytes = (JSON.stringify(result).length + JSON.stringify(job).length) * 2 + 1024;
    const client = new MtfWorkerClient(L.data, () => port, bytes + 50);
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
    const client = new MtfWorkerClient(L.data, () => port, 1);
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
