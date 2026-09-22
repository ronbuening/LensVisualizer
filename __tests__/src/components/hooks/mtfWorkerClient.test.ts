import { describe, expect, it } from "vitest";
import {
  MtfWorkerClient,
  type MtfJob,
  type MtfWorkerPort,
  type MtfWorkerReply,
} from "../../../../src/components/hooks/mtfWorkerClient.js";
import { buildSimplePositiveElementLens } from "../../optics/testLensFixtures.js";
import { computeMtf } from "../../../../src/optics/mtf.js";
import { prepareRuntimeState } from "../../../../src/optics/compat.js";

class Port implements MtfWorkerPort {
  onmessage: MtfWorkerPort["onmessage"] = null;
  onerror: MtfWorkerPort["onerror"] = null;
  messages: unknown[] = [];
  terminated = false;
  postMessage(message: unknown) {
    this.messages.push(message);
  }
  terminate() {
    this.terminated = true;
  }
  reply(data: MtfWorkerReply) {
    this.onmessage?.({ data } as MessageEvent<MtfWorkerReply>);
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
    port.reply({ id: 1, result });
    expect(await pending).toEqual(result);
    expect(await client.compute(job)).toBe(result);
    expect(port.messages).toHaveLength(2);
    const changed = client.compute({ ...job, options: { ...job.options, stopSemiDiameterMm: 0.8 } });
    port.reply({ id: 2, result });
    await changed;
    expect(port.messages).toHaveLength(3);
    client.dispose();
    expect(port.terminated).toBe(true);
  });
  it("terminates superseded CPU work and ignores late messages", async () => {
    const ports: Port[] = [];
    const client = new MtfWorkerClient(L.data, () => {
      const port = new Port();
      ports.push(port);
      return port;
    });
    const old = client.compute(job).catch((e: Error) => e.name);
    const current = client.compute({ ...job, zoomT: 0.5 });
    ports[0].reply({ id: 1, result });
    expect(await old).toBe("AbortError");
    expect(ports[0].terminated).toBe(true);
    ports[1].reply({ id: 3, result });
    expect(await current).toEqual(result);
    client.dispose();
  });
  it("does not cache results beyond its byte budget and reports worker errors", async () => {
    const port = new Port();
    const client = new MtfWorkerClient(L.data, () => port, 1);
    const first = client.compute(job);
    port.reply({ id: 1, result });
    await first;
    const second = client.compute(job);
    port.reply({ id: 2, error: "unavailable" });
    await expect(second).rejects.toThrow("unavailable");
    expect(port.messages).toHaveLength(3);
    client.dispose();
  });
});
