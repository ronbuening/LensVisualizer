import { describe, expect, it } from "vitest";
import buildLens, { paraxialTrace } from "../../../../src/optics/buildLens.js";
import { prepareRuntimeState } from "../../../../src/optics/compat.js";
import {
  doLayout,
  traceRay as tracePreparedRay,
  traceRayChromatic as tracePreparedRayChromatic,
  traceSkewRay as tracePreparedSkewRay,
  traceSkewRayChromatic as tracePreparedSkewRayChromatic,
} from "../../../../src/optics/optics.js";
import {
  traceRay as traceCompatibilityRay,
  traceRayChromatic as traceCompatibilityRayChromatic,
  traceSkewRay as traceCompatibilitySkewRay,
  traceSkewRayChromatic as traceCompatibilitySkewRayChromatic,
} from "../../../../src/optics/rayTrace.js";
import data from "../../../../src/lens-data/nikon/NikonAFSNikkor500mmf56EPFEDVR.data.js";
import LENS_DEFAULTS from "../../../../src/lens-data/defaults.js";
import { compileDiffractivePhase } from "../../../../src/optics/math/diffractivePhase.js";
import { findNearestGeneralizedSurfaceHit } from "../../../../src/optics/trace/pathPlanner.js";
import { traceSequential } from "../../../../src/optics/trace/sequentialTrace.js";
import type { LensData } from "../../../../src/types/optics.js";

function build(raw: object) {
  return buildLens({ ...LENS_DEFAULTS, ...raw } as LensData);
}

describe("Nikon AF-S NIKKOR 500mm f/5.6E PF ED VR", () => {
  it("reproduces the patent Example 2 first-order prescription with PF power", () => {
    const L = build(data);
    expect(L.N).toBe(33);
    expect(L.data.elementCount).toBe(19);
    expect(L.elements).toHaveLength(21);
    expect(L.EFL).toBeCloseTo(489.709445, 2);
    const finalParaxialRay = paraxialTrace(L.S, 1, 0, { skipLastTransfer: true });
    expect(-finalParaxialRay.y / finalParaxialRay.u).toBeCloseTo(64.398175, 2);
    expect(L.totalTrack).toBeCloseTo(279.32418, 3);
    expect(L.FOPEN).toBeCloseTo(5.75019, 5);
    expect(L.S[L.labelIdx["8"]].diffractive?.terms).toHaveLength(2);
  });

  it("preserves the published close-focus spacing endpoints", () => {
    const L = build(data);
    const infinity = doLayout(0, 0, L);
    const close = doLayout(1, 0, L);
    expect(infinity.th[L.labelIdx["12"]]).toBeCloseTo(22.24696, 5);
    expect(close.th[L.labelIdx["12"]]).toBeCloseTo(39.16215, 5);
    expect(close.th[L.labelIdx["15"]]).toBeCloseTo(15.39786, 5);
    expect(close.th[L.labelIdx["34"]]).toBeCloseTo(64.43514, 5);
  });

  it("shows the independently verified first-order contribution of the PF surface", () => {
    const withoutPhase = structuredClone(data);
    const phaseSurface = withoutPhase.surfaces.find((surface) => surface.label === "8")!;
    delete phaseSurface.diffractive;

    const L = build(data);
    const refractiveOnly = build(withoutPhase);
    expect(refractiveOnly.EFL).toBeCloseTo(538.940703, 2);
    const finalRefractiveRay = paraxialTrace(refractiveOnly.S, 1, 0, { skipLastTransfer: true });
    expect(-finalRefractiveRay.y / finalRefractiveRay.u).toBeCloseTo(79.501045, 2);
    expect(refractiveOnly.EFL - L.EFL).toBeCloseTo(49.231258, 2);
  });

  it("keeps compatibility and prepared exact traces aligned at every chromatic channel", () => {
    const L = build(data);
    const layout = doLayout(0, 0, L);
    const args = [20, 0, layout.z, 0, 0, L.stopPhysSD, false, L] as const;
    const compatibility = traceCompatibilityRay(...args);
    const prepared = tracePreparedRay(...args);
    expect(prepared.clipped).toBe(false);
    expect(prepared.y).toBeCloseTo(compatibility.y, 9);
    expect(prepared.u).toBeCloseTo(compatibility.u, 9);

    for (const channel of ["R", "G", "B", "V"] as const) {
      const compatibilityChromatic = traceCompatibilityRayChromatic(...args, channel);
      const preparedChromatic = tracePreparedRayChromatic(...args, channel);
      expect(preparedChromatic.clipped).toBe(compatibilityChromatic.clipped);
      expect(preparedChromatic.y).toBeCloseTo(compatibilityChromatic.y, 9);
      expect(preparedChromatic.u).toBeCloseTo(compatibilityChromatic.u, 9);
    }

    const skewArgs = [3, 10, 0, 0, 0, 0, L.stopPhysSD, false, L] as const;
    const compatibilitySkew = traceCompatibilitySkewRay(...skewArgs);
    const preparedSkew = tracePreparedSkewRay(...skewArgs);
    expect(preparedSkew.clipped).toBe(false);
    expect(preparedSkew.x).toBeCloseTo(compatibilitySkew.x, 9);
    expect(preparedSkew.y).toBeCloseTo(compatibilitySkew.y, 9);
    expect(preparedSkew.ux).toBeCloseTo(compatibilitySkew.ux, 9);
    expect(preparedSkew.uy).toBeCloseTo(compatibilitySkew.uy, 9);

    for (const channel of ["R", "G", "B", "V"] as const) {
      const compatibilitySkewChromatic = traceCompatibilitySkewRayChromatic(...skewArgs, channel);
      const preparedSkewChromatic = tracePreparedSkewRayChromatic(...skewArgs, channel);
      expect(preparedSkewChromatic.clipped).toBe(compatibilitySkewChromatic.clipped);
      expect(preparedSkewChromatic.x).toBeCloseTo(compatibilitySkewChromatic.x, 9);
      expect(preparedSkewChromatic.y).toBeCloseTo(compatibilitySkewChromatic.y, 9);
      expect(preparedSkewChromatic.ux).toBeCloseTo(compatibilitySkewChromatic.ux, 9);
      expect(preparedSkewChromatic.uy).toBeCloseTo(compatibilitySkewChromatic.uy, 9);
    }
  });

  it("keeps a same-index phase plate active in automatic generalized path selection", () => {
    const sameIndexData = structuredClone(data);
    const phaseSurface = sameIndexData.surfaces.find((surface) => surface.label === "8")!;
    phaseSurface.nd = 1.5278;
    const L = build(sameIndexData);
    const state = prepareRuntimeState(L, 0, 0);
    const phaseSurfaceIndex = L.labelIdx["8"];
    const phaseZ = state.surfaces[phaseSurfaceIndex].z;
    const candidate = findNearestGeneralizedSurfaceHit(
      [0, 5, phaseZ - 5],
      [0, 0, 1],
      state,
      undefined,
      1.5278,
      undefined,
      -1,
      new Set([phaseSurfaceIndex]),
    );

    expect(candidate.surfaceIndex).toBe(phaseSurfaceIndex);
    expect(candidate.skippedCandidates.some((skip) => skip.reason === "passive-same-index")).toBe(false);
  });

  it("reports a typed failure when the authored diffraction order cannot propagate", () => {
    const L = build(data);
    const state = prepareRuntimeState(L, 0, 0);
    const phaseSurfaceIndex = L.labelIdx["8"];
    const extremePhase = compileDiffractivePhase({
      kind: "radial-polynomial",
      referenceWavelengthNm: 587.6,
      diffractionOrder: 1,
      terms: [{ radialPower: 2, coefficient: -1 }],
    })!;
    const extremeState = {
      ...state,
      surfaces: state.surfaces.map((surface, index) =>
        index === phaseSurfaceIndex ? { ...surface, diffractive: extremePhase } : surface,
      ),
    };
    const result = traceSequential(
      extremeState,
      { origin: [0, 20, state.surfaces[0].z - 100], direction: [0, 0, 1] },
      { wavelengthNm: 587.6 },
    );

    expect(result.failureReason).toBe("nonPropagatingDiffractionOrder");
    expect(result.hits.at(-1)?.surfaceIndex).toBe(phaseSurfaceIndex);
    expect(result.hits.at(-1)?.clipReason).toBe("non-propagating-diffraction-order");
  });
});
