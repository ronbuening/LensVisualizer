import { describe, expect, it } from "vitest";
import { prepareRuntimeState } from "../../../src/optics/state/runtimeState.js";
import { reconstructZoom } from "../../../src/optics/state/zoomReconstruction.js";
import { resolveVariableThickness } from "../../../src/optics/prescription/variables.js";
import { traceParaxialSurfaces2 } from "../../../src/optics/math/paraxial.js";
import { apertureMetricsForState, resolveApertureStop } from "../../../src/optics/first-order/aperture.js";
import { doLayout, thick } from "../../../src/optics/layout.js";
import { build as buildLens, buildSimplePositiveElementLens } from "./testLensFixtures.js";
import Konica from "../../../src/lens-data/konica/KonicaUCZoomHexanonAR80200mmf4.data.js";
import Tamron from "../../../src/lens-data/tamron/TamronB02818400mmf3563.data.js";
import Nikon from "../../../src/lens-data/nikon/NikonNikkorAFS28300mmf3556G.data.js";
import Sony from "../../../src/lens-data/sony/SonyFE2470mmf28GMII.data.js";
import CanonDO from "../../../src/lens-data/canon/CanonEF70300mmf4556DOISUSM.data.js";
import type { PreparedOpticalState } from "../../../src/optics/types.js";

function metrics(state: PreparedOpticalState) {
  const ray = traceParaxialSurfaces2(state.surfaces, 1, 0);
  return { focal: -1 / ray.u, focus: -ray.y / ray.u - state.surfaces.at(-1)!.d };
}
function raw(state: PreparedOpticalState, focus: number, zoom: number) {
  const engine = state.lens;
  return engine.surfaces.map((s) =>
    resolveVariableThickness(
      s.d,
      engine.variables.bySurfaceIndex[s.physicalIndex],
      true,
      focus,
      zoom,
      engine.variables.focusPositions,
    ),
  );
}

describe("shared inferred zoom motion", () => {
  it.each([Konica, Tamron, Nikon, Sony, CanonDO])(
    "preserves source states, rigid groups and focus across $key",
    (data) => {
      const L = buildLens(data),
        count = L.zoomPositions!.length;
      const anchors = Array.from({ length: count }, (_, i) => prepareRuntimeState(L, 0, i / (count - 1)));
      for (const [i, anchor] of anchors.entries())
        for (const focus of anchor.lens.variables.focusPositions) {
          const state = prepareRuntimeState(L, focus, i / (count - 1));
          expect(state.surfaces.map((s) => s.d)).toEqual(raw(state, focus, state.zoomT));
          expect(state.zoomReconstruction?.status).toBe("source");
        }
      for (let interval = 0; interval < count - 1; interval++) {
        const a = metrics(anchors[interval]),
          b = metrics(anchors[interval + 1]);
        for (const fraction of [0.001, 0.13, 0.428, 0.77, 0.999]) {
          const t = (interval + fraction) / (count - 1),
            state = prepareRuntimeState(L, 0, t),
            value = metrics(state);
          expect(state.zoomReconstruction?.status).toBe("reconstructed");
          expect(value.focal).toBeCloseTo(a.focal + (b.focal - a.focal) * fraction, 6);
          expect(value.focus).toBeCloseTo(a.focus + (b.focus - a.focus) * fraction, 6);
          const close = prepareRuntimeState(L, 1, t),
            rawOpen = raw(state, 0, t),
            rawClose = raw(state, 1, t);
          for (let i = 0; i < state.surfaces.length; i++) {
            expect(close.surfaces[i].d - state.surfaces[i].d).toBeCloseTo(rawClose[i] - rawOpen[i], 9);
            expect(close.surfaces[i].d).toBeGreaterThanOrEqual(-1e-9);
            if (state.surfaces[i].nd !== 1) expect(state.surfaces[i].d).toBe(rawOpen[i]);
            const left = anchors[interval],
              right = anchors[interval + 1];
            if (Math.abs(left.z[i] - left.imgZ - (right.z[i] - right.imgZ)) < 1e-7)
              expect(state.z[i] - state.imgZ).toBeCloseTo(left.z[i] - left.imgZ, 6);
          }
        }
      }
    },
  );

  it("removes the Konica intermediate defocus without changing the physical iris", () => {
    const L = buildLens(Konica),
      t = 0.428,
      state = prepareRuntimeState(L, 0, t);
    const original = { ...state, surfaces: state.surfaces.map((s, i) => ({ ...s, d: raw(state, 0, t)[i] })) };
    expect(metrics(original).focus).toBeGreaterThan(12);
    expect(metrics(state).focus).toBeCloseTo(0, 7);
    const stop = resolveApertureStop(L, t, 4),
      report = apertureMetricsForState(state, stop.stopSemiDiameterMm);
    expect(stop.stopSemiDiameterMm).toBe(L.stopPhysSD);
    expect(report.status).toBe("ok");
    expect(report.paraxialWorkingFNumber).toBeCloseTo(report.geometricFNumber!, 7);
    expect(report.workingFNumber).toBeGreaterThan(3.8);
    expect(report.workingFNumber).toBeLessThan(4.2);
    const layout = doLayout(0, t, L);
    expect(layout.z).toEqual(state.z);
    expect(layout.imgZ).toBe(state.imgZ);
    expect(layout.th).toEqual(state.surfaces.map((s) => s.d));
    expect(thick(L.stopIdx, 0, t, L)).toBe(state.surfaces[L.stopIdx].d);
  });

  it("does not amplify small back-focus normalization drift into large group motion", () => {
    const L = buildLens(Konica),
      zoomT = 0.428;
    const state = prepareRuntimeState(L, 0, zoomT);
    const base = raw(state, 0, zoomT);
    const left = raw(state, 0, 0),
      right = raw(state, 0, 1);
    const normalizationTravel = Math.abs(right.at(-1)! - left.at(-1)!);
    expect(normalizationTravel).toBeLessThan(0.02);
    // The front and rear assemblies are almost stationary in the source states.
    // Their small numerical drift must not make them free compensators.
    expect(Math.abs(state.surfaces.at(-1)!.d - base.at(-1)!)).toBeLessThan(normalizationTravel);
    expect(Math.abs(state.imgZ - base.reduce((sum, d) => sum + d, 0))).toBeLessThan(normalizationTravel);
    expect(apertureMetricsForState(state, L.stopPhysSD).workingFNumber).toBeCloseTo(4.02, 2);
  });

  it("remains continuous on both sides of source zoom stations", () => {
    const L = buildLens(Tamron),
      count = L.zoomPositions!.length;
    for (let i = 0; i < count; i++) {
      const t = i / (count - 1),
        anchor = prepareRuntimeState(L, 0, t);
      for (const near of [Math.max(0, t - 1e-7), Math.min(1, t + 1e-7)]) {
        const state = prepareRuntimeState(L, 0, near);
        expect(Math.max(...state.z.map((z, j) => Math.abs(z - state.imgZ - anchor.z[j] + anchor.imgZ)))).toBeLessThan(
          0.001,
        );
      }
    }
  });

  it("reports unsupported and insufficient-motion models without inventing a correction", () => {
    const prime = prepareRuntimeState(buildSimplePositiveElementLens(), 0, 0).lens;
    expect(reconstructZoom(prime, 0.4)).toBeNull();
    const base = prepareRuntimeState(buildLens(Konica), 0, 0).lens;
    const folded = { ...base, flags: { ...base.flags, isFoldedOptics: true } };
    expect(reconstructZoom(folded, 0.4)?.report.status).toBe("unsupported");
    const stationary = { ...base, variables: { ...base.variables, bySurfaceIndex: {} } };
    const failed = reconstructZoom(stationary, 0.4)!;
    expect(failed.report.status).toBe("unavailable");
    expect(failed.offsets.every((d) => d === 0)).toBe(true);
    const afocal = { ...base, surfaces: base.surfaces.map((s) => ({ ...s, R: Infinity, nd: 1, diffractive: null })) };
    expect(reconstructZoom(afocal, 0.4)?.report.status).toBe("unsupported");
  });

  it("shares immutable corrections across focus states and bounds the zoom cache", () => {
    const L = buildLens(Konica),
      base = prepareRuntimeState(L, 0, 0.4);
    const result = reconstructZoom(base.lens, 0.4)!;
    expect(reconstructZoom(base.lens, 0.4)).toBe(result);
    expect(prepareRuntimeState(L, 1, 0.4).zoomReconstruction).toBe(result.report);
    expect(Object.isFrozen(result.report)).toBe(true);
    expect(Object.isFrozen(result.offsets)).toBe(true);
    for (let i = 1; i <= 129; i++) reconstructZoom(base.lens, i / 130);
    expect(reconstructZoom(base.lens, 0.4)).not.toBe(result);
    expect(reconstructZoom(base.lens, 0.4)).toEqual(result);
  });
});
