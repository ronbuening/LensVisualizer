/** Pure MTF orchestration with explicit per-field convergence and unavailable results. */
import type { MtfFieldResult, MtfOptions, MtfResult } from "../../types/mtf.js";
import type { PreparedOpticalState } from "../types.js";
import {
  assessMtfSupport,
  MTF_CDF_LINES,
  MTF_CONVERGENCE_TOLERANCE,
  MTF_FIELDS,
  MTF_FREQUENCIES,
} from "./mtfSupport.js";
import { combineOtfs, geometricOtf, otfMagnitude, translateOtf, type ComplexOtf, type MtfSpot } from "./mtfMath.js";
import { traceMtfPupil } from "./mtfTracing.js";
import { pupilOtf, reconstructMtfPupil } from "./mtfDiffraction.js";

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
    for (let size = options.method === "diffraction" ? 32 : 16; size <= (options.maxGridSize ?? 128); size *= 2) {
      const field = emptyMtfField(fraction);
      field.gridSize = size;
      result.fields[index] = field;
      const spectralLines = options.spectrum === "cdf" ? [...MTF_CDF_LINES] : [undefined];
      const sagittal: Array<{ otf: ComplexOtf; weight: number }> = [],
        tangential: Array<{ otf: ComplexOtf; weight: number }> = [];
      let commonReference: MtfSpot | undefined,
        refine = false;
      for (const line of spectralLines) {
        const bundle = traceMtfPupil(state, options, support, fraction, size, line);
        if (!bundle) break;
        commonReference ??= bundle.chief;
        field.imageHeightMm = commonReference.y;
        field.validRays += bundle.rays.length;
        field.blockedRays += bundle.blocked;
        field.failedRays += bundle.failed;
        const weight = bundle.rays.reduce((sum, ray) => sum + ray.weight, 0);
        if (bundle.failed || bundle.rays.length < 16 || !(weight > 0)) {
          field.reason = bundle.failed ? "trace-failed" : "empty-pupil";
          field.message = bundle.failed
            ? "Numerical ray failures prevent an MTF estimate."
            : "Too little pupil remains to estimate MTF.";
          break;
        }
        let s: ComplexOtf, t: ComplexOtf;
        if (options.method === "diffraction") {
          const wavelengthMm = (line?.wavelengthNm ?? support.referenceWavelengthNm) * 1e-6;
          const reconstruction = reconstructMtfPupil(state, bundle, wavelengthMm);
          if (!reconstruction.pupil) {
            field.reason = "diffraction-domain";
            field.message = reconstruction.message;
            refine = reconstruction.refine;
            break;
          }
          const otf = pupilOtf(reconstruction.pupil, wavelengthMm, result.frequenciesPerMm);
          s = translateOtf(otf.sagittal, result.frequenciesPerMm, bundle.chief.x - commonReference.x);
          t = translateOtf(otf.tangential, result.frequenciesPerMm, bundle.chief.y - commonReference.y);
        } else {
          // One translation for the entire spectrum preserves lateral color and a common physical plane.
          const points = bundle.rays.map((p) => ({
            x: p.x - commonReference!.x,
            y: p.y - commonReference!.y,
            weight: p.weight,
          }));
          s = geometricOtf(points, result.frequenciesPerMm, "x");
          t = geometricOtf(points, result.frequenciesPerMm, "y");
        }
        // Equal incident line weights; clipping and authored bulk absorption determine transmitted weights.
        sagittal.push({ otf: s, weight });
        tangential.push({ otf: t, weight });
      }
      if (sagittal.length !== spectralLines.length) {
        if (refine) {
          yield result;
          continue;
        }
        break;
      }
      field.sagittal = otfMagnitude(combineOtfs(sagittal));
      field.tangential = otfMagnitude(combineOtfs(tangential));
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
