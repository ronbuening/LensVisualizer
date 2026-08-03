/**
 * Diffractive phase-surface math — sparse radial optical-path evaluation and first-order power.
 *
 * The polynomial is an optical-path function W(h), not geometric sag. Helpers remain pure so
 * paraxial construction and exact generalized-Snell tracing share one coefficient convention.
 */

import { LINE_NM } from "../spectralLines.js";
import type { DiffractivePhaseSurface } from "../../types/optics.js";
import type { CompiledDiffractivePhase, Vec3 } from "../types.js";
import { add, dot, normalize, scale, subtract } from "./vector.js";

type PhasePowerSource = DiffractivePhaseSurface | CompiledDiffractivePhase;

/** Default wavelength for monochrome construction and tracing: helium d line in nanometers. */
export const DEFAULT_PHASE_WAVELENGTH_NM = LINE_NM.d;

/**
 * Compile and freeze an authored radial phase polynomial.
 *
 * Validation is performed before runtime construction; this helper precomputes derivative
 * coefficients and the quadratic term used by first-order tracing.
 */
export function compileDiffractivePhase(phase: DiffractivePhaseSurface | undefined): CompiledDiffractivePhase | null {
  if (phase === undefined) return null;
  const source = Object.freeze({
    ...phase,
    terms: Object.freeze(phase.terms.map((term) => Object.freeze({ ...term }))),
  }) as DiffractivePhaseSurface;
  const terms = Object.freeze(
    phase.terms.map((term) =>
      Object.freeze({
        radialPower: term.radialPower,
        coefficient: term.coefficient,
        derivativeCoefficient: term.radialPower * term.coefficient,
      }),
    ),
  );
  return Object.freeze({
    kind: "radial-polynomial",
    referenceWavelengthNm: phase.referenceWavelengthNm,
    diffractionOrder: phase.diffractionOrder,
    quadraticCoefficient: phase.terms.find((term) => term.radialPower === 2)?.coefficient ?? 0,
    terms,
    source,
  });
}

/** Evaluate the unwrapped radial optical-path polynomial W(h) in millimeters. */
export function radialPhaseOpticalPath(phase: CompiledDiffractivePhase, radiusMm: number): number {
  let value = 0;
  for (const term of phase.terms) value += term.coefficient * radiusMm ** term.radialPower;
  return value;
}

/** Evaluate dW/dh at non-negative radial height h. */
export function radialPhaseDerivative(phase: PhasePowerSource, radiusMm: number): number {
  let value = 0;
  for (const term of phase.terms) {
    const derivativeCoefficient =
      "derivativeCoefficient" in term ? term.derivativeCoefficient : term.radialPower * term.coefficient;
    value += derivativeCoefficient * radiusMm ** (term.radialPower - 1);
  }
  return value;
}

/** Wavelength/order multiplier applied to the authored design optical-path gradient. */
export function diffractiveWavelengthScale(phase: PhasePowerSource, wavelengthNm: number): number {
  return (phase.diffractionOrder * wavelengthNm) / phase.referenceWavelengthNm;
}

/** Signed radial reduced-angle/optical-momentum kick at one wavelength. */
export function radialPhaseKick(
  phase: PhasePowerSource,
  radiusMm: number,
  wavelengthNm: number = DEFAULT_PHASE_WAVELENGTH_NM,
): number {
  return diffractiveWavelengthScale(phase, wavelengthNm) * radialPhaseDerivative(phase, radiusMm);
}

/**
 * Refract through a radial phase surface with generalized Snell tangential momentum.
 *
 * `normal` points into the outgoing medium. The physical radial phase gradient keeps
 * the same global sign from either side, which makes a reversed ray retrace its path.
 */
export function diffractiveRefractedDirection(
  direction: Vec3,
  normal: Vec3,
  point: Vec3,
  nFrom: number,
  nTo: number,
  phase: PhasePowerSource,
  wavelengthNm: number = DEFAULT_PHASE_WAVELENGTH_NM,
): Vec3 | null {
  const d = normalize(direction);
  const orientedNormal = normalize(normal);
  if (!d || !orientedNormal || !Number.isFinite(nFrom) || !Number.isFinite(nTo) || nFrom <= 0 || nTo <= 0) {
    return null;
  }

  const incidentTangent = scale(subtract(d, scale(orientedNormal, dot(d, orientedNormal))), nFrom);
  const radius = Math.hypot(point[0], point[1]);
  let outgoingTangent = incidentTangent;
  if (radius > 1e-12) {
    const radialAxis: Vec3 = [point[0] / radius, point[1] / radius, 0];
    const surfaceRadialGradient = subtract(radialAxis, scale(orientedNormal, dot(radialAxis, orientedNormal)));
    const kick = radialPhaseKick(phase, radius, wavelengthNm);
    outgoingTangent = add(outgoingTangent, scale(surfaceRadialGradient, kick));
  }

  const tangentMomentumSquared = dot(outgoingTangent, outgoingTangent);
  const totalMomentumSquared = nTo * nTo;
  if (!Number.isFinite(tangentMomentumSquared) || tangentMomentumSquared > totalMomentumSquared + 1e-12) return null;

  const normalMomentum = Math.sqrt(Math.max(0, totalMomentumSquared - tangentMomentumSquared));
  return normalize(add(outgoingTangent, scale(orientedNormal, normalMomentum)));
}

/** Equivalent positive-converging paraxial power phiD = -2*C2*m*lambda/lambda0. */
export function diffractiveParaxialPower(
  phase: PhasePowerSource | null | undefined,
  wavelengthNm: number = DEFAULT_PHASE_WAVELENGTH_NM,
): number {
  if (!phase) return 0;
  const quadraticCoefficient =
    "quadraticCoefficient" in phase
      ? phase.quadraticCoefficient
      : (phase.terms.find((term) => term.radialPower === 2)?.coefficient ?? 0);
  if (quadraticCoefficient === 0) return 0;
  return -2 * quadraticCoefficient * diffractiveWavelengthScale(phase, wavelengthNm);
}

/** Thin-surface Petzval contribution for the equivalent diffractive paraxial power. */
export function diffractivePetzvalContribution(
  phase: PhasePowerSource | null | undefined,
  nBefore: number,
  nAfter: number,
  wavelengthNm: number = DEFAULT_PHASE_WAVELENGTH_NM,
): number {
  if (!phase || nBefore <= 0 || nAfter <= 0) return 0;
  return diffractiveParaxialPower(phase, wavelengthNm) / (nBefore * nAfter);
}
