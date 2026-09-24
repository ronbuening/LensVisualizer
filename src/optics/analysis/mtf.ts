/** Pure MTF orchestration with explicit per-field convergence and unavailable results. */
import type { MtfFieldResult, MtfOptions, MtfResult, MtfSupport, MtfUnavailableReason } from "../../types/mtf.js";
import type { PreparedOpticalState } from "../types.js";
import { assessMtfSupport, MTF_FIELDS, MTF_FREQUENCIES } from "./mtfSupport.js";
import {
  formatMtfTolerance,
  MTF_CONVERGENCE_BAND_LPMM,
  MTF_CONVERGENCE_TOLERANCE,
  MTF_DEFAULT_GRID_CAP,
  MTF_GRID_LADDER,
  MTF_MAX_UNKNOWN_FLUX,
  MTF_MIN_RAYS,
} from "./mtfConstants.js";
import { combineOtfs, geometricOtf, otfMagnitude, translateOtf, type ComplexOtf, type MtfSpot } from "./mtfMath.js";
import { mtfHalfField, traceMtfPupil, type MtfBundle } from "./mtfTracing.js";
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
    notes: [],
    gridSize: 0,
    validRays: 0,
    blockedRays: 0,
    failedRays: 0,
    unknownFluxFraction: 0,
    maxDelta: null,
    convergedThroughLpMm: null,
  };
}

/* ── One field at one grid size ── */

interface WeightedOtf {
  otf: ComplexOtf;
  weight: number;
}

type GridOutcome =
  | { kind: "curves"; field: MtfFieldResult }
  | { kind: "unavailable"; field: MtfFieldResult; refine: boolean };

/** Complex OTF of one wavelength's bundle, relative to the job's common image reference. */
function bundleOtf(
  state: PreparedOpticalState,
  options: MtfOptions,
  bundle: MtfBundle,
  wavelengthNm: number,
  commonReference: MtfSpot,
  frequencies: readonly number[],
): { sagittal: ComplexOtf; tangential: ComplexOtf } | { failure: string; refine: boolean } {
  if (options.method === "diffraction") {
    const wavelengthMm = wavelengthNm * 1e-6;
    const reconstruction = reconstructMtfPupil(state, bundle, wavelengthMm);
    if (!reconstruction.pupil) return { failure: reconstruction.message, refine: reconstruction.refine };
    const otf = pupilOtf(reconstruction.pupil, wavelengthMm, frequencies);
    return {
      sagittal: translateOtf(otf.sagittal, frequencies, reconstruction.reference.x - commonReference.x),
      tangential: translateOtf(otf.tangential, frequencies, reconstruction.reference.y - commonReference.y),
    };
  }
  // One translation for the entire spectrum preserves lateral color and a common physical plane.
  const points = bundle.rays.map((p) => ({ x: p.x - commonReference.x, y: p.y - commonReference.y, weight: p.weight }));
  return { sagittal: geometricOtf(points, frequencies, "x"), tangential: geometricOtf(points, frequencies, "y") };
}

function fieldAtGrid(
  state: PreparedOpticalState,
  options: MtfOptions,
  support: MtfSupport,
  fraction: number,
  size: number,
  halfFieldDeg: number,
  frequencies: readonly number[],
): GridOutcome {
  const field = emptyMtfField(fraction);
  field.gridSize = size;
  const unavailable = (reason: MtfUnavailableReason, message: string, refine = false): GridOutcome => {
    field.reason = reason;
    field.message = message;
    return { kind: "unavailable", field, refine };
  };
  const sagittal: WeightedOtf[] = [];
  const tangential: WeightedOtf[] = [];
  let commonReference: MtfSpot | undefined;
  let launchedWeight = 0;
  let failedWeight = 0;
  for (const line of support.spectralLines) {
    const bundle = traceMtfPupil(state, options, support, fraction, size, line, halfFieldDeg);
    if (!bundle) return unavailable("chief-ray-failed", "No valid chief ray reaches the image plane.");
    commonReference ??= bundle.chief;
    field.imageHeightMm = commonReference.y;
    field.validRays += bundle.rays.length;
    field.blockedRays += bundle.blocked;
    field.failedRays += bundle.failed;
    const transmitted = bundle.rays.reduce((sum, ray) => sum + ray.weight, 0);
    launchedWeight += transmitted + bundle.failedWeight;
    failedWeight += bundle.failedWeight;
    const strict = options.method === "diffraction" && bundle.failed > 0;
    if (strict) return unavailable("trace-failed", "Numerical ray failures prevent a scalar diffraction estimate.");
    if (bundle.rays.length < MTF_MIN_RAYS || !(transmitted > 0))
      return unavailable("empty-pupil", "Too little pupil remains to estimate MTF.");
    const otf = bundleOtf(state, options, bundle, line.wavelengthNm, commonReference, frequencies);
    if ("failure" in otf) return unavailable("diffraction-domain", otf.failure, otf.refine);
    // Incident line weight times transmitted flux: clipping and bulk absorption shape each line's share.
    sagittal.push({ otf: otf.sagittal, weight: line.weight * transmitted });
    tangential.push({ otf: otf.tangential, weight: line.weight * transmitted });
  }
  field.unknownFluxFraction = launchedWeight > 0 ? failedWeight / launchedWeight : 0;
  if (field.unknownFluxFraction > MTF_MAX_UNKNOWN_FLUX)
    return unavailable("trace-failed", "Numerical ray failures prevent an MTF estimate.");
  if (field.failedRays > 0)
    field.notes.push(
      `${field.failedRays} unresolved edge rays (${(field.unknownFluxFraction * 100).toFixed(2)}% of flux) are omitted; MTF error ≤ ${(2 * field.unknownFluxFraction).toFixed(3)}.`,
    );
  field.sagittal = otfMagnitude(combineOtfs(sagittal));
  field.tangential = otfMagnitude(combineOtfs(tangential));
  field.reason = null;
  return { kind: "curves", field };
}

/* ── Convergence ── */

/**
 * Compare two successive grids. Only frequencies within the convergence band decide the
 * status; the highest frequency whose running maximum change stays in tolerance is reported
 * so higher-frequency charts can show where sampling noise begins.
 */
function applyConvergence(field: MtfFieldResult, previous: MtfFieldResult | null, frequencies: readonly number[]) {
  const tolerance = formatMtfTolerance();
  if (!previous) {
    field.status = "unconverged";
    field.message = `Sampling has not converged within ${tolerance} MTF.`;
    return;
  }
  const deltas = frequencies.map((_, i) =>
    Math.max(
      Math.abs(field.sagittal[i] - previous.sagittal[i]),
      Math.abs(field.tangential[i] - previous.tangential[i]),
    ),
  );
  const band = frequencies.some((f) => f <= MTF_CONVERGENCE_BAND_LPMM)
    ? deltas.filter((_, i) => frequencies[i] <= MTF_CONVERGENCE_BAND_LPMM)
    : deltas;
  field.maxDelta = Math.max(...band);
  let through: number | null = null;
  for (let i = 0; i < frequencies.length && deltas[i] <= MTF_CONVERGENCE_TOLERANCE; i++) through = frequencies[i];
  field.convergedThroughLpMm = through;
  field.status = field.maxDelta <= MTF_CONVERGENCE_TOLERANCE ? "converged" : "unconverged";
  field.message =
    field.status === "converged"
      ? `Sampling converged within ${tolerance} MTF.`
      : `Sampling has not converged within ${tolerance} MTF.`;
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
  // Match the other analysis tabs: known image formats cap the infinity field through
  // the exact chief-ray solve. Missing format metadata retains the modeled field.
  const halfFieldDeg = mtfHalfField(state);
  const cap = options.maxGridSize ?? MTF_DEFAULT_GRID_CAP;
  const ladder = MTF_GRID_LADDER.filter((size) => size <= cap && (options.method !== "diffraction" || size >= 32));
  for (const fraction of options.fieldFractions ?? MTF_FIELDS) {
    const index = result.fields.length;
    result.fields.push(emptyMtfField(fraction));
    let previous: MtfFieldResult | null = null;
    for (const size of ladder) {
      const outcome = fieldAtGrid(state, options, support, fraction, size, halfFieldDeg, result.frequenciesPerMm);
      if (outcome.kind === "unavailable") {
        // A finer grid that fails never discards a coarser curve; report it as unconverged instead.
        if (!previous) result.fields[index] = outcome.field;
        if (outcome.refine) {
          yield result;
          continue;
        }
        break;
      }
      applyConvergence(outcome.field, previous, result.frequenciesPerMm);
      result.fields[index] = outcome.field;
      yield result;
      if (outcome.field.status === "converged") break;
      previous = outcome.field;
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
