/**
 * Diffractive phase surface inside a folded optical path.
 *
 * `validateLensData` permits a refracting phase surface in a folded system while
 * rejecting `diffractive` on reflect/block surfaces, and the generalized tracers
 * implement that combination — but no fixture exercised it. This suite pins the
 * behavior using the hidden `reference-folded-diffractive-plate` fixture, whose
 * geometry is analytic: a flat same-index plate with a single quadratic phase
 * term (C2 = -0.0025 /mm², so phiD = -2*C2 = 0.005 /mm → f = 200 mm), followed
 * by a 45° fold 100 mm downstream and a side image plane 100 mm past that.
 * A collimated axial bundle therefore focuses on the image-plane origin.
 */

import { describe, expect, it } from "vitest";
import LENS_DEFAULTS from "../../../src/lens-data/defaults.js";
import FoldedDiffractiveRaw from "../../../src/lens-data/reference/ReferenceFoldedDiffractivePlate.data.js";
import buildLens from "../../../src/optics/buildLens.js";
import validateLensData from "../../../src/optics/validateLensData.js";
import {
  DEFAULT_PHASE_WAVELENGTH_NM,
  diffractiveParaxialPower,
  radialPhaseKick,
} from "../../../src/optics/math/diffractivePhase.js";
import { doLayout, traceRay, traceRayVector } from "../../../src/optics/optics.js";
import type { LensData, RuntimeLens } from "../../../src/types/optics.js";

const LAUNCH_HEIGHTS = [8, 5, 2];
const PHASE = FoldedDiffractiveRaw.surfaces.find((surface) => surface.label === "PF")!.diffractive!;

function buildFixture(): RuntimeLens {
  return buildLens({ ...LENS_DEFAULTS, ...FoldedDiffractiveRaw } as LensData);
}

/** The same fixture with the phase term removed: a plain same-index flat plate. */
function buildRefractiveControl(): RuntimeLens {
  const surfaces = FoldedDiffractiveRaw.surfaces.map((surface) => {
    const { diffractive: _diffractive, ...rest } = surface as Record<string, unknown>;
    return rest;
  });
  return buildLens({ ...LENS_DEFAULTS, ...FoldedDiffractiveRaw, surfaces } as unknown as LensData);
}

/**
 * Meridional slope of the polyline segment leaving the phase plate.
 *
 * `pts[0]` is the launch point, so hit *i* is `pts[i + 1]`; the outgoing segment
 * runs from the PF vertex to the next hit.
 */
function slopeAfterPlate(trace: { pts: number[][]; diagnostics?: { hitSurfaceLabels: string[] } }): number {
  const hitIndex = trace.diagnostics!.hitSurfaceLabels.indexOf("PF");
  expect(hitIndex, "PF must appear in the hit list").toBeGreaterThanOrEqual(0);

  const [zPlate, yPlate] = trace.pts[hitIndex + 1];
  const [zNext, yNext] = trace.pts[hitIndex + 2];
  return (yNext - yPlate) / (zNext - zPlate);
}

/** Exact tangent implied by a tangential-momentum kick at normal incidence in air. */
function tangentFromKick(kick: number): number {
  return kick / Math.sqrt(1 - kick * kick);
}

describe("folded diffractive fixture — data contract", () => {
  it("validates as authored", () => {
    expect(validateLensData({ ...LENS_DEFAULTS, ...FoldedDiffractiveRaw } as LensData)).toEqual([]);
  });

  it("is hidden from the public catalog", () => {
    expect(FoldedDiffractiveRaw.visible).toBe(false);
  });

  it("still rejects a phase term attached to the fold mirror", () => {
    const surfaces = FoldedDiffractiveRaw.surfaces.map((surface) =>
      surface.label === "FOLD" ? { ...surface, diffractive: PHASE } : surface,
    );
    const errors = validateLensData({ ...LENS_DEFAULTS, ...FoldedDiffractiveRaw, surfaces } as unknown as LensData);

    expect(errors.some((error) => error.includes("diffractive is only valid on refracting surfaces"))).toBe(true);
  });

  it("carries the analytic 200 mm equivalent power in the phase term alone", () => {
    // Measured from the coefficients, NOT from RuntimeLens.EFL: that field is
    // `focalLengthDesign ?? focalLengthMarketing ?? axialExtent` (runtimeLens.ts
    // ~410), so it echoes authored metadata and would report 200 even with the
    // phase term deleted.
    expect(diffractiveParaxialPower(PHASE, PHASE.referenceWavelengthNm)).toBeCloseTo(1 / 200, 12);
  });
});

describe("folded diffractive fixture — generalized trace", () => {
  it("bends each ray by the analytic phase kick", () => {
    const L = buildFixture();
    const layout = doLayout(0, 0, L);

    for (const h of LAUNCH_HEIGHTS) {
      const trace = traceRay(h, 0, layout.z, 0, 0, L.stopPhysSD, true, L);
      // The monochrome tracer works at the engine's d-line constant (587.5618 nm),
      // not the conventional 587.6 nm the fixture quotes as its reference, so the
      // kick carries that wavelength ratio. Using the authored reference here
      // instead would be wrong by ~65 ppm and mask a real scaling regression.
      const expectedKick = radialPhaseKick(PHASE, h, DEFAULT_PHASE_WAVELENGTH_NM);

      expect(expectedKick, `h=${h}`).toBeCloseTo(-0.005 * h * (DEFAULT_PHASE_WAVELENGTH_NM / 587.6), 12);
      // Generalized Snell sets the tangential momentum, so the geometric slope is
      // tan(theta), not the kick itself. Asserting the exact relation keeps this
      // from silently degrading into a paraxial approximation.
      expect(slopeAfterPlate(trace), `h=${h}`).toBeCloseTo(tangentFromKick(expectedKick), 9);
    }
  });

  it("traverses the fold and reaches the side image plane", () => {
    const L = buildFixture();
    const layout = doLayout(0, 0, L);

    for (const h of LAUNCH_HEIGHTS) {
      const trace = traceRay(h, 0, layout.z, 0, 0, L.stopPhysSD, true, L);

      expect(trace.clipped, `h=${h}`).toBe(false);
      expect(trace.reachedImagePlane, `h=${h}`).toBe(true);
      expect(trace.diagnostics?.hitSurfaceLabels, `h=${h}`).toEqual(["STO", "PF", "FOLD"]);
      expect(trace.diagnostics?.finalMedium, `h=${h}`).toBeCloseTo(1, 12);
      expect(trace.diagnostics?.failureReason, `h=${h}`).toBeNull();
    }
  });

  it("focuses the collimated bundle on the image-plane origin", () => {
    const L = buildFixture();
    const layout = doLayout(0, 0, L);

    for (const h of LAUNCH_HEIGHTS) {
      const [zTerminal, yTerminal] = traceRay(h, 0, layout.z, 0, 0, L.stopPhysSD, true, L).pts.at(-1)!;

      expect(Number.isFinite(zTerminal), `h=${h}`).toBe(true);
      // The image plane is horizontal, so y is fixed and z carries the focus.
      expect(yTerminal, `h=${h}`).toBeCloseTo(-100, 9);
      // Exact-trace residual against the paraxial prediction of exactly 120 mm.
      expect(Math.abs(zTerminal - 120), `h=${h}`).toBeLessThan(0.01);
    }
  });

  it("agrees between the slope and vector generalized entry points", () => {
    const L = buildFixture();
    const layout = doLayout(0, 0, L);

    for (const h of LAUNCH_HEIGHTS) {
      const slopeTrace = traceRay(h, 0, layout.z, 0, 0, L.stopPhysSD, true, L);
      const vectorTrace = traceRayVector(
        { origin: [0, h, -10], direction: [0, 0, 1] },
        layout.z,
        L.stopPhysSD,
        true,
        L,
        0,
        0,
      );

      expect(vectorTrace.reachedImagePlane, `h=${h}`).toBe(true);
      expect(vectorTrace.diagnostics?.hitSurfaceLabels, `h=${h}`).toEqual(slopeTrace.diagnostics?.hitSurfaceLabels);

      const [zSlope, ySlope] = slopeTrace.pts.at(-1)!;
      const [zVector, yVector] = vectorTrace.pts.at(-1)!;
      expect(zVector, `h=${h}`).toBeCloseTo(zSlope, 9);
      expect(yVector, `h=${h}`).toBeCloseTo(ySlope, 9);
    }
  });
});

describe("folded diffractive fixture — refractive control", () => {
  /*
   * Removing the phase term must leave an inert same-index plate. A literal
   * reverse-ray trace is not available for this control: the fixture declares an
   * explicit `surfaceOrder`, and the generalized tracer rejects a ray arriving in
   * the opposite order (`failureReason: "noBracket"`). Reversibility is therefore
   * asserted as the property that actually defines it here — the plate introduces
   * no deviation at all, so the incoming and outgoing segments are collinear.
   */
  it("passes rays through the plate undeviated", () => {
    const C = buildRefractiveControl();
    const layout = doLayout(0, 0, C);

    for (const h of LAUNCH_HEIGHTS) {
      const trace = traceRay(h, 0, layout.z, 0, 0, C.stopPhysSD, true, C);

      expect(trace.reachedImagePlane, `h=${h}`).toBe(true);
      expect(trace.diagnostics?.hitSurfaceLabels, `h=${h}`).toEqual(["STO", "PF", "FOLD"]);
      expect(slopeAfterPlate(trace), `h=${h}`).toBeCloseTo(0, 12);
    }
  });

  it("lands where pure geometry predicts, with no diffractive power", () => {
    const C = buildRefractiveControl();
    const layout = doLayout(0, 0, C);

    for (const h of LAUNCH_HEIGHTS) {
      const [zTerminal] = traceRay(h, 0, layout.z, 0, 0, C.stopPhysSD, true, C).pts.at(-1)!;
      // Undeviated ray meets the 45° fold at z = 120 - h and then runs straight
      // down to the image plane, so it never converges.
      expect(zTerminal, `h=${h}`).toBeCloseTo(120 - h, 9);
    }
  });

  it("differs from the diffractive path at every launch height", () => {
    const L = buildFixture();
    const C = buildRefractiveControl();
    const phaseLayout = doLayout(0, 0, L);
    const controlLayout = doLayout(0, 0, C);

    for (const h of LAUNCH_HEIGHTS) {
      const withPhase = traceRay(h, 0, phaseLayout.z, 0, 0, L.stopPhysSD, true, L).pts.at(-1)![0];
      const withoutPhase = traceRay(h, 0, controlLayout.z, 0, 0, C.stopPhysSD, true, C).pts.at(-1)![0];
      expect(Math.abs(withPhase - withoutPhase), `h=${h}`).toBeGreaterThan(1);
    }
  });
});
