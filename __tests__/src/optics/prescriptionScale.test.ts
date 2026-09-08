import { describe, expect, it } from "vitest";
import buildLens from "../../../src/optics/buildLens.js";
import { apertureMetricsForState, doLayout, eflAtFocus, resolveApertureStop } from "../../../src/optics/optics.js";
import { prepareRuntimeState } from "../../../src/optics/state/runtimeState.js";
import { conicPolySag } from "../../../src/optics/internal/surfaceMath.js";
import type { LensData } from "../../../src/types/optics.js";
import { traceSequential } from "../../../src/optics/trace/sequentialTrace.js";
import defaults from "../../../src/lens-data/defaults.js";
import z35 from "../../../src/lens-data/nikon/NikonZ35f18S.data.js";
import ai135 from "../../../src/lens-data/nikon/NikonAI135mmf2.data.js";

const Z35 = buildLens({ ...defaults, ...z35 } as LensData);
const AI135 = buildLens({ ...defaults, ...ai135 } as LensData);

describe("physical prescription units", () => {
  it("retains the Z 35mm source power discrepancy and floating-focus breathing in millimetres", () => {
    // Independent y/n-u propagation of JP 2019-090947 A EX4, then s = 35/1.572.
    const sourceEfls = [1.6237303501631484, 1.5078688921197, 1.4033772190622682];
    for (const [i, focus] of [0, 0.5, 1].entries()) {
      expect(eflAtFocus(focus, 0, Z35)).toBeCloseTo(sourceEfls[i] * (35 / 1.572), 7);
    }
    expect(z35.focalLengthDesign).toBe(35);
    expect(eflAtFocus(0, 0, Z35)).not.toBeCloseTo(z35.focalLengthDesign, 1);
    expect(z35.surfaces[0].R).toBeCloseTo(4.6232 * (35 / 1.572), 9);
    expect(z35.var.STO[1]).toBeCloseTo(0.283 * (35 / 1.572), 9);
    expect(z35.elements[0].fl).toBeCloseTo(-2.12 * (35 / 1.572), 9);
  });

  it("preserves all six source aspheric shapes under dimensional conversion", () => {
    // JP EX4 coefficients, evaluated independently at source radius 0.35.
    // EFL alone cannot detect a missing coefficient conversion.
    const source = [
      ["11A", 4.1556, -4.9288, -0.09582, 0.5043, -0.4618, 0],
      ["12A", 1.9836, -0.4693, -0.08355, 0.5689, -0.2913, 0],
      ["18A", -8.4171, 15.3255, -0.2063, 0.0689, 0, 0],
      ["19A", -2.8176, -0.9347, -0.002416, 0.1158, 0.1983, -0.113],
      ["20A", -1.8973, -0.1889, -0.1143, -0.1549, 0, 0],
      ["21A", -6.9348, 0, -0.09359, -0.1873, 0.1909, -0.1298],
    ] as const;
    const scale = 35 / 1.572;
    for (const [label, R, K, A4, A6, A8, A10] of source) {
      for (const h of [0.1, 0.35, 0.45]) {
        const sag =
          (h * h) / R / (1 + Math.sqrt(1 - (1 + K) * (h / R) ** 2)) +
          A4 * h ** 4 +
          A6 * h ** 6 +
          A8 * h ** 8 +
          A10 * h ** 10;
        const surface = z35.surfaces.find((s) => s.label === label)!;
        expect(conicPolySag(h * scale, surface.R, z35.asph[label])).toBeCloseTo(sag * scale, 10);
      }
    }
  });

  it("keeps unit-focus EFL constant while scaling the AI 135mm focus stroke", () => {
    for (const focus of [0, 0.5, 1]) expect(eflAtFocus(focus, 0, AI135)).toBeCloseTo(134.99527525829, 7);
    expect(ai135.focalLengthDesign).toBe(135);
    expect(ai135.var["10"][1] - ai135.var["10"][0]).toBeCloseTo(18.09, 9);
    expect(ai135.closeFocusM).toBe(1.3);
    const infinity = doLayout(0, 0, AI135);
    const close = doLayout(1, 0, AI135);
    expect(close.z[0] - close.imgZ - (infinity.z[0] - infinity.imgZ)).toBeCloseTo(-18.09, 7);
  });

  it("traces the source sensor plate as glass and keeps it fixed during floating focus", () => {
    const scale = 35 / 1.572;
    const infinity = prepareRuntimeState(Z35, 0, 0);
    const close = prepareRuntimeState(Z35, 1, 0);
    const front = infinity.surfaces.findIndex((s) => s.label === "22");
    const rear = front + 1;
    expect(infinity.surfaces[front].d).toBeCloseTo(0.074 * scale, 10);
    expect(infinity.surfaces[rear].d).toBeCloseTo(0.0425 * scale, 10);
    expect(close.z[front] - close.imgZ).toBeCloseTo(infinity.z[front] - infinity.imgZ, 9);
    expect(Z35.vdByIdx[front]).toBe(64.13);
    expect(Z35.FOPEN).toBeCloseTo(1.85, 10);
    expect(z35.apertureMarketing).toBe(1.8);

    const ray = traceSequential(infinity, { origin: [2, 0, -1], direction: [0, 0, 1] });
    expect(ray.status).toBe("ok");
    const entry = ray.hits[front];
    const exit = ray.hits[rear];
    // Parallel faces preserve the external angle but reduce the internal slope.
    expect(entry.incidentDirection![0] / entry.outgoingDirection![0]).toBeCloseTo(1.5168, 9);
    expect(exit.outgoingDirection![0]).toBeCloseTo(entry.incidentDirection![0], 10);
    expect(exit.point[0] - entry.point[0]).toBeCloseTo(
      (0.074 * scale * entry.outgoingDirection![0]) / entry.outgoingDirection![2],
      10,
    );
  });

  it("reports real-ray availability honestly at infinity, intermediate and close focus", () => {
    for (const focus of [0, 0.5, 1]) {
      for (const L of [Z35, AI135]) {
        const state = prepareRuntimeState(L, focus, 0);
        for (const fNumber of [L.FOPEN, 4, 16]) {
          const stop = resolveApertureStop(L, 0, fNumber);
          expect(stop.stopSemiDiameterMm).toBeGreaterThan(1);
          const metrics = apertureMetricsForState(state, stop.stopSemiDiameterMm);
          if (L === Z35 && fNumber === L.FOPEN) {
            expect(metrics.status).toBe("failed");
            expect(metrics.workingFNumber).toBeNull();
          } else {
            expect(metrics.status).toBe("ok");
            expect(metrics.workingFNumber).toBeGreaterThan(1);
          }
        }
      }
    }
  });
});
