/** Pure MTF orchestration with explicit per-field convergence and unavailable results. */
import type { MtfFieldResult, MtfOptions, MtfResult } from "../../types/mtf.js";
import type { PreparedOpticalState } from "../types.js";
import { assessMtfSupport, MTF_CONVERGENCE_TOLERANCE, MTF_FIELDS, MTF_FREQUENCIES } from "./mtfSupport.js";
import { geometricOtf, otfMagnitude } from "./mtfMath.js";
import { traceMtfPupil } from "./mtfTracing.js";

export function emptyMtfField(fieldFraction: number): MtfFieldResult {
  return {
    fieldFraction,
    imageHeightMm: null,
    sagittal: [],
    tangential: [],
    status: "unavailable",
    reason: "chief-ray-failed",
    message: "No valid chief ray reaches the image plane.",
    gridSize: 0,
    validRays: 0,
    blockedRays: 0,
    failedRays: 0,
    maxDelta: null,
  };
}

/** Yields after each refinement, allowing a worker to publish progress and service messages. */
export function* computeMtfSteps(state: PreparedOpticalState, options: MtfOptions): Generator<MtfResult, MtfResult> {
  const support = assessMtfSupport(state, options);
  const result: MtfResult = {
    method: options.method,
    spectrum: options.spectrum,
    support,
    frequenciesPerMm: [...(options.frequenciesPerMm ?? MTF_FREQUENCIES)],
    fields: [],
  };
  if (!support.available) return result;
  for (const fraction of options.fieldFractions ?? MTF_FIELDS) {
    let previous: MtfFieldResult | null = null;
    const index = result.fields.length;
    result.fields.push(emptyMtfField(fraction));
    for (let size = 16; size <= (options.maxGridSize ?? 128); size *= 2) {
      const field = emptyMtfField(fraction);
      field.gridSize = size;
      const bundle = traceMtfPupil(state, options, support, fraction, size);
      result.fields[index] = field;
      if (!bundle) break;
      field.imageHeightMm = bundle.chief.y;
      field.validRays = bundle.rays.length;
      field.blockedRays = bundle.blocked;
      field.failedRays = bundle.failed;
      if (bundle.failed || bundle.rays.length < 16) {
        field.reason = bundle.failed ? "trace-failed" : "empty-pupil";
        field.message = bundle.failed
          ? "Numerical ray failures prevent an MTF estimate."
          : "Too little pupil remains to estimate MTF.";
        break;
      }
      // A single common translation improves numerical conditioning without changing monochromatic MTF.
      const points = bundle.rays.map((p) => ({ ...p, x: p.x - bundle.chief.x, y: p.y - bundle.chief.y }));
      field.sagittal = otfMagnitude(geometricOtf(points, result.frequenciesPerMm, "x"));
      field.tangential = otfMagnitude(geometricOtf(points, result.frequenciesPerMm, "y"));
      field.reason = null;
      field.maxDelta = previous
        ? Math.max(
            ...field.sagittal.map((v, i) => Math.abs(v - previous!.sagittal[i])),
            ...field.tangential.map((v, i) => Math.abs(v - previous!.tangential[i])),
          )
        : null;
      field.status =
        field.maxDelta !== null && field.maxDelta <= MTF_CONVERGENCE_TOLERANCE ? "converged" : "unconverged";
      field.message =
        field.status === "converged"
          ? "Sampling converged within 0.01 MTF."
          : "Sampling has not converged within 0.01 MTF.";
      yield result;
      if (field.status === "converged") break;
      previous = field;
    }
  }
  return result;
}

export function computeMtf(state: PreparedOpticalState, options: MtfOptions): MtfResult {
  const steps = computeMtfSteps(state, options);
  let next = steps.next();
  while (!next.done) next = steps.next();
  return next.value;
}
