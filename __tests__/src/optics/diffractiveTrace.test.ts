import { describe, expect, it } from "vitest";
import PfRaw from "../../../src/lens-data/nikon/NikonAFSNikkor500mmf56EPFEDVR.data.js";
import { prepareRuntimeState } from "../../../src/optics/compat.js";
import { compileDiffractivePhase } from "../../../src/optics/math/diffractivePhase.js";
import {
  doLayout,
  traceRay as tracePreparedRay,
  traceRayChromatic as tracePreparedRayChromatic,
  traceSkewRay as tracePreparedSkewRay,
  traceSkewRayChromatic as tracePreparedSkewRayChromatic,
} from "../../../src/optics/optics.js";
import {
  traceRay as traceCompatibilityRay,
  traceRayChromatic as traceCompatibilityRayChromatic,
  traceSkewRay as traceCompatibilitySkewRay,
  traceSkewRayChromatic as traceCompatibilitySkewRayChromatic,
} from "../../../src/optics/rayTrace.js";
import { findNearestGeneralizedSurfaceHit } from "../../../src/optics/trace/pathPlanner.js";
import { traceSequential } from "../../../src/optics/trace/sequentialTrace.js";
import { build } from "./testLensFixtures.js";

/**
 * Diffractive phase surface in an ordinary sequential path.
 *
 * `foldedDiffractiveTrace.test.ts` pins the analytic phase kick on the hidden
 * folded fixture and `exactTraceGoldenValues.test.ts` pins the production
 * Phase Fresnel lens's first-order and per-channel numbers. This file covers
 * the remaining engine contracts around a sequential diffractive surface,
 * using the catalog's only production diffractive design as the fixture: the
 * compatibility and prepared tracers agree at every channel, a same-index
 * phase plate is never skipped as a passive surface, and a diffraction order
 * that cannot propagate fails with a typed reason instead of NaN geometry.
 */

const PHASE_SURFACE_LABEL = "8";
const L = build(PfRaw);

describe("sequential diffractive surface", () => {
  it("keeps compatibility and prepared exact traces aligned at every chromatic channel", () => {
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
    const sameIndexData = structuredClone(PfRaw);
    const phaseSurface = sameIndexData.surfaces.find((surface) => surface.label === PHASE_SURFACE_LABEL)!;
    const precedingIndex = sameIndexData.surfaces[sameIndexData.surfaces.indexOf(phaseSurface) - 1].nd;
    phaseSurface.nd = precedingIndex;
    const sameIndex = build(sameIndexData);
    const state = prepareRuntimeState(sameIndex, 0, 0);
    const phaseSurfaceIndex = sameIndex.labelIdx[PHASE_SURFACE_LABEL];
    const phaseZ = state.surfaces[phaseSurfaceIndex].z;
    const candidate = findNearestGeneralizedSurfaceHit(
      [0, 5, phaseZ - 5],
      [0, 0, 1],
      state,
      undefined,
      precedingIndex,
      undefined,
      -1,
      new Set([phaseSurfaceIndex]),
    );

    expect(candidate.surfaceIndex).toBe(phaseSurfaceIndex);
    expect(candidate.skippedCandidates.some((skip) => skip.reason === "passive-same-index")).toBe(false);
  });

  it("reports a typed failure when the authored diffraction order cannot propagate", () => {
    const state = prepareRuntimeState(L, 0, 0);
    const phaseSurfaceIndex = L.labelIdx[PHASE_SURFACE_LABEL];
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
