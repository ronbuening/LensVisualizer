import { createTraceGeometry } from "../../../src/optics/trace/geometry.js";
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
 * meridional and skew launches retain phase power at every channel, a same-index
 * phase plate is never skipped as a passive surface, and a diffraction order
 * that cannot propagate fails with a typed reason instead of NaN geometry.
 */

const PHASE_SURFACE_LABEL = "8";
const L = build(PfRaw);

describe("sequential diffractive surface", () => {
  it("keeps meridional and skew traces finite and wavelength-dependent at every channel", () => {
    const layout = doLayout(0, 0, L);
    const args = [20, 0, layout.z, 0, 0, L.stopPhysSD, false, L] as const;
    const prepared = tracePreparedRay(...args);
    expect(prepared.clipped).toBe(false);
    const skewArgs = [0, 20, 0, 0, 0, 0, L.stopPhysSD, false, L] as const;
    const skew = tracePreparedSkewRay(...skewArgs);
    expect(skew.clipped).toBe(false);
    expect(skew.x).toBe(0);
    expect(skew.y).toBeCloseTo(prepared.y, 9);
    expect(skew.uy).toBeCloseTo(prepared.u, 9);
    // A rotationally symmetric phase surface must rotate a nonzero sagittal launch with the ray.
    const radialHeight = Math.hypot(3, 10);
    const radialArgs = [radialHeight, 0, layout.z, 0, 0, L.stopPhysSD, false, L] as const;
    const skewRadialArgs = [3, 10, 0, 0, 0, 0, L.stopPhysSD, false, L] as const;
    const radial = tracePreparedRay(...radialArgs);
    const skewRadial = tracePreparedSkewRay(...skewRadialArgs);
    expect(skewRadial.clipped).toBe(false);
    expect(skewRadial.x).toBeCloseTo((radial.y * 3) / radialHeight, 9);
    expect(skewRadial.y).toBeCloseTo((radial.y * 10) / radialHeight, 9);
    expect(skewRadial.ux).toBeCloseTo((radial.u * 3) / radialHeight, 9);
    expect(skewRadial.uy).toBeCloseTo((radial.u * 10) / radialHeight, 9);
    const slopes = new Set<number>();
    for (const channel of ["R", "G", "B", "V"] as const) {
      const meridional = tracePreparedRayChromatic(...args, channel);
      const chromaticSkew = tracePreparedSkewRayChromatic(...skewArgs, channel);
      expect(meridional.clipped).toBe(false);
      expect(chromaticSkew.clipped).toBe(false);
      expect(chromaticSkew.x).toBe(0);
      expect(chromaticSkew.y).toBeCloseTo(meridional.y, 9);
      expect(chromaticSkew.uy).toBeCloseTo(meridional.u, 9);
      expect(Number.isFinite(meridional.u)).toBe(true);
      const radial = tracePreparedRayChromatic(...radialArgs, channel);
      const skewRadial = tracePreparedSkewRayChromatic(...skewRadialArgs, channel);
      expect(radial.clipped).toBe(false);
      expect(skewRadial.clipped).toBe(false);
      expect(skewRadial.x).toBeCloseTo((radial.y * 3) / radialHeight, 9);
      expect(skewRadial.y).toBeCloseTo((radial.y * 10) / radialHeight, 9);
      expect(skewRadial.ux).toBeCloseTo((radial.u * 3) / radialHeight, 9);
      expect(skewRadial.uy).toBeCloseTo((radial.u * 10) / radialHeight, 9);
      slopes.add(meridional.u);
    }
    expect(slopes.size).toBe(4);
  });

  it("keeps a same-index phase plate active in automatic generalized path selection", () => {
    const sameIndexData = structuredClone(PfRaw);
    const phaseSurface = sameIndexData.surfaces.find((surface) => surface.label === PHASE_SURFACE_LABEL)!;
    const precedingIndex = sameIndexData.surfaces[sameIndexData.surfaces.indexOf(phaseSurface) - 1].nd;
    phaseSurface.nd = precedingIndex;
    sameIndexData.elements.find((element) => element.id === phaseSurface.elemId)!.nd = precedingIndex;
    const sameIndex = build(sameIndexData);
    const state = prepareRuntimeState(sameIndex, 0, 0);
    const phaseSurfaceIndex = sameIndex.labelIdx[PHASE_SURFACE_LABEL];
    const phaseZ = state.surfaces[phaseSurfaceIndex].z;
    const candidate = findNearestGeneralizedSurfaceHit(
      [0, 5, phaseZ - 5],
      [0, 0, 1],
      state.traceGeometry,
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
    extremeState.traceGeometry = createTraceGeometry({
      ...state.traceGeometry,
      surfaces: extremeState.surfaces,
      isFoldedOptics: state.lens.flags.isFoldedOptics,
    });
    const result = traceSequential(
      extremeState.traceGeometry,
      { origin: [0, 20, state.surfaces[0].z - 100], direction: [0, 0, 1] },
      { wavelengthNm: 587.6 },
    );

    expect(result.failureReason).toBe("nonPropagatingDiffractionOrder");
    expect(result.hits.at(-1)?.surfaceIndex).toBe(phaseSurfaceIndex);
    expect(result.hits.at(-1)?.clipReason).toBe("non-propagating-diffraction-order");
  });
});
