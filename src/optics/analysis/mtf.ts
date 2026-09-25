/** Pure MTF orchestration with explicit per-field convergence and unavailable results. */
import type {
  MtfFieldGeometry,
  MtfFieldResult,
  MtfFocus,
  MtfOptions,
  MtfResult,
  MtfSpectralLine,
  MtfSupport,
  MtfUnavailableReason,
} from "../../types/mtf.js";
import { resolveLensSourceState } from "../sourceStates.js";
import type { PreparedOpticalState } from "../types.js";
import { assessMtfSupport, MTF_FIELDS, MTF_FREQUENCIES } from "./mtfSupport.js";
import {
  formatMtfTolerance,
  MTF_CONVERGENCE_BAND_LPMM,
  MTF_CONVERGENCE_TOLERANCE,
  MTF_DEFAULT_GRID_CAP,
  MTF_FOCUS_FREQUENCIES,
  MTF_FOCUS_GRID,
  MTF_GRID_LADDER,
  MTF_MAX_FOOTPRINT_EXPANSIONS,
  MTF_MAX_UNKNOWN_FLUX,
  MTF_MIN_RAYS,
} from "./mtfConstants.js";
import {
  combineOtfs,
  geometricOtf,
  multiplyOtf,
  otfMagnitude,
  translateOtf,
  type ComplexOtf,
  type MtfSpot,
} from "./mtfMath.js";
import {
  findMtfFieldFootprint,
  prepareMtfFieldLaunch,
  traceMtfBundle,
  type MtfBundle,
  type MtfFieldLaunch,
  type MtfOpenBorders,
} from "./mtfTracing.js";
import { expandMtfFootprint, type MtfFootprint } from "./mtfFootprint.js";
import { pupilOtf, reconstructMtfPupil } from "./mtfDiffraction.js";
import { diffractionLimitFromBundle, type MtfDiffractionLimit } from "./mtfDiffractionLimit.js";
import { findAxialBestFocus, mtfImagePlaneOffset } from "./mtfFocus.js";
import {
  mtfChiefHeight,
  mtfFieldProcessingOrder,
  mtfModeledHalfField,
  resolveMtfFieldGeometry,
  resolveMtfFieldTargets,
  type MtfFieldTarget,
} from "./mtfFields.js";

/**
 * Results an identical earlier request may share: the axial focus search and finished fields,
 * keyed by fraction. Callers key a cache by everything in the request except `fieldFractions`.
 */
export interface MtfJobCache {
  focus?: MtfFocus;
  fields: Map<number, MtfFieldResult>;
}

/** Everything one request shares across its fields. */
interface MtfJobContext {
  state: PreparedOpticalState;
  options: MtfOptions;
  support: MtfSupport;
  frequencies: readonly number[];
  ladder: readonly number[];
  /** Axial image-plane position every field is evaluated on, in mm. */
  imagePlaneZ: number;
}

/**
 * Field record before tracing.
 *
 * @param fraction - requested fraction of the reference image height
 * @param target - resolved target, when a field axis exists
 * @returns pending field with no curves
 */
export function emptyMtfField(fraction: number, target?: MtfFieldTarget): MtfFieldResult {
  return {
    fieldFraction: fraction,
    targetImageHeightMm: target?.targetImageHeightMm ?? null,
    fieldAngleDeg: target?.fieldAngleDeg ?? null,
    imageHeightMm: null,
    sagittal: [],
    tangential: [],
    status: "pending",
    reason: null,
    message: "Waiting to be traced.",
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

function markUnavailable(field: MtfFieldResult, reason: MtfUnavailableReason, message: string): MtfFieldResult {
  field.status = "unavailable";
  field.reason = reason;
  field.message = message;
  return field;
}

/* ── Unknown flux ── */

export interface MtfUnresolvedFlux {
  acceptable: boolean;
  note: string | null;
}

/**
 * Omitting flux ε changes a normalized geometric OTF by at most 2ε: small unresolved shares are
 * reported with that bound, larger ones make the field unavailable.
 *
 * @param failedRays - unresolved pupil samples
 * @param unknownFluxFraction - their share of launched flux
 * @returns whether the field may be reported, with its qualifying note
 */
export function assessUnresolvedFlux(failedRays: number, unknownFluxFraction: number): MtfUnresolvedFlux {
  if (unknownFluxFraction > MTF_MAX_UNKNOWN_FLUX) return { acceptable: false, note: null };
  if (failedRays === 0) return { acceptable: true, note: null };
  return {
    acceptable: true,
    note: `${failedRays} unresolved edge rays (${(unknownFluxFraction * 100).toFixed(2)}% of flux) are omitted; MTF error ≤ ${(2 * unknownFluxFraction).toFixed(3)}.`,
  };
}

/* ── One field at one grid size ── */

interface WeightedOtf {
  otf: ComplexOtf;
  weight: number;
}

export type MtfGridOutcome =
  | { kind: "curves"; field: MtfFieldResult; openBorders?: MtfOpenBorders }
  | { kind: "unavailable"; field: MtfFieldResult; refine: boolean };

/** Complex OTF of one wavelength's bundle, relative to the field's common image reference. */
function bundleOtf(
  context: MtfJobContext,
  bundle: MtfBundle,
  line: MtfSpectralLine,
  commonReference: MtfSpot,
  limit: MtfDiffractionLimit | null,
): { sagittal: ComplexOtf; tangential: ComplexOtf } | { failure: string; refine: boolean } {
  const { state, options, frequencies } = context;
  const wavelengthMm = line.wavelengthNm * 1e-6;
  if (options.method === "diffraction") {
    const reconstruction = reconstructMtfPupil(state, bundle, wavelengthMm, context.imagePlaneZ);
    if (!reconstruction.pupil) return { failure: reconstruction.message, refine: reconstruction.refine };
    const otf = pupilOtf(reconstruction.pupil, wavelengthMm, frequencies);
    return {
      sagittal: translateOtf(otf.sagittal, frequencies, reconstruction.reference.x - commonReference.x),
      tangential: translateOtf(otf.tangential, frequencies, reconstruction.reference.y - commonReference.y),
    };
  }
  // One translation for the entire spectrum preserves lateral color and a common physical plane.
  const points = bundle.rays.map((p) => ({ x: p.x - commonReference.x, y: p.y - commonReference.y, weight: p.weight }));
  const sagittal = geometricOtf(points, frequencies, "x");
  const tangential = geometricOtf(points, frequencies, "y");
  if (!limit) return { sagittal, tangential };
  const gain = limit.sample(wavelengthMm, frequencies);
  return { sagittal: multiplyOtf(sagittal, gain.sagittal), tangential: multiplyOtf(tangential, gain.tangential) };
}

function fieldAtGrid(
  context: MtfJobContext,
  target: MtfFieldTarget,
  launch: MtfFieldLaunch,
  footprint: MtfFootprint,
  size: number,
): MtfGridOutcome {
  const { state, options, support } = context;
  const field = emptyMtfField(target.fraction, target);
  field.gridSize = size;
  const unavailable = (reason: MtfUnavailableReason, message: string, refine = false): MtfGridOutcome => ({
    kind: "unavailable",
    field: markUnavailable(field, reason, message),
    refine,
  });
  const openBorders: MtfOpenBorders = { x: false, y0: false, y1: false };
  const sagittal: WeightedOtf[] = [];
  const tangential: WeightedOtf[] = [];
  let commonReference: MtfSpot | undefined;
  let limit: MtfDiffractionLimit | null = null;
  let launchedWeight = 0;
  let failedWeight = 0;
  for (const line of support.spectralLines) {
    const bundle = traceMtfBundle(state, options, support, launch, footprint, size, line, context.imagePlaneZ);
    if (!bundle) return unavailable("chief-ray-failed", "No valid chief ray reaches the image plane.");
    commonReference ??= bundle.chief;
    field.imageHeightMm = Math.hypot(commonReference.x, commonReference.y);
    field.validRays += bundle.rays.length;
    field.blockedRays += bundle.blocked;
    field.failedRays += bundle.failed;
    openBorders.x ||= bundle.openBorders.x;
    openBorders.y0 ||= bundle.openBorders.y0;
    openBorders.y1 ||= bundle.openBorders.y1;
    const transmitted = bundle.rays.reduce((sum, ray) => sum + ray.weight, 0);
    launchedWeight += transmitted + bundle.failedWeight;
    failedWeight += bundle.failedWeight;
    if (options.method === "diffraction" && bundle.failed > 0)
      return unavailable("trace-failed", "Numerical ray failures prevent a scalar diffraction estimate.");
    // The footprint scan already found transmitted flux, so too few rays means this grid is too
    // coarse for a thin (for example cat's-eye vignetted) beam; a finer grid may resolve it.
    if (bundle.rays.length < MTF_MIN_RAYS || !(transmitted > 0))
      return unavailable("empty-pupil", "Too little pupil remains to estimate MTF.", true);
    // The exit pupil is nearly achromatic, so the reference line's pupil serves every wavelength.
    if (options.method === "geometric-dl") limit ??= diffractionLimitFromBundle(bundle);
    const otf = bundleOtf(context, bundle, line, commonReference, limit);
    if ("failure" in otf) return unavailable("diffraction-domain", otf.failure, otf.refine);
    // Incident line weight times transmitted flux: clipping and bulk absorption shape each line's share.
    sagittal.push({ otf: otf.sagittal, weight: line.weight * transmitted });
    tangential.push({ otf: otf.tangential, weight: line.weight * transmitted });
  }
  field.unknownFluxFraction = launchedWeight > 0 ? failedWeight / launchedWeight : 0;
  const unresolved = assessUnresolvedFlux(field.failedRays, field.unknownFluxFraction);
  if (!unresolved.acceptable) return unavailable("trace-failed", "Numerical ray failures prevent an MTF estimate.");
  if (unresolved.note) field.notes.push(unresolved.note);
  field.sagittal = otfMagnitude(combineOtfs(sagittal));
  field.tangential = otfMagnitude(combineOtfs(tangential));
  return { kind: "curves", field, openBorders };
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

/**
 * Refine one field through the grid ladder.
 *
 * A converged level ends refinement. A finer level that fails never discards a coarser curve,
 * which stays unconverged; failures that ask for finer sampling continue down the ladder.
 *
 * @param ladder - grid sizes, coarse to fine
 * @param evaluate - field at one grid size
 * @param frequencies - reported frequencies
 * @yields the current best field after every level
 */
export function* refineMtfField(
  ladder: readonly number[],
  evaluate: (size: number) => MtfGridOutcome,
  frequencies: readonly number[],
): Generator<MtfFieldResult, void> {
  let previous: MtfFieldResult | null = null;
  for (const size of ladder) {
    const outcome = evaluate(size);
    if (outcome.kind === "unavailable") {
      const best = previous ?? outcome.field;
      yield best;
      if (outcome.refine) continue;
      return;
    }
    applyConvergence(outcome.field, previous, frequencies);
    yield outcome.field;
    if (outcome.field.status === "converged") return;
    previous = outcome.field;
  }
}

/** Trace one field through launch, footprint and refinement, yielding its best result so far. */
function* traceField(context: MtfJobContext, target: MtfFieldTarget): Generator<MtfFieldResult, void> {
  const { state, options, support } = context;
  const launch =
    target.fieldAngleDeg === null ? null : prepareMtfFieldLaunch(state, options, support, target.fieldAngleDeg);
  if (!launch) {
    yield markUnavailable(
      emptyMtfField(target.fraction, target),
      "chief-ray-failed",
      "No valid chief ray reaches this image height.",
    );
    return;
  }
  let footprint = findMtfFieldFootprint(state, options, support, launch);
  if (!footprint) {
    yield markUnavailable(
      emptyMtfField(target.fraction, target),
      "vignetted",
      "No rays reach this image height through the model's clear apertures.",
    );
    return;
  }
  let expansions = 0;
  const evaluate = (size: number): MtfGridOutcome => {
    for (;;) {
      const outcome = fieldAtGrid(context, target, launch, footprint!, size);
      const open = outcome.kind === "curves" ? outcome.openBorders : undefined;
      if (!open || !(open.x || open.y0 || open.y1)) return outcome;
      if (expansions >= MTF_MAX_FOOTPRINT_EXPANSIONS) {
        outcome.field.notes.push(
          "Transmitted rays reach the edge of the sampled pupil region; some flux may be missing.",
        );
        return outcome;
      }
      // Flux on the sampled border means the coarse scan missed part of the beam: widen and retrace.
      footprint = expandMtfFootprint(footprint!, open);
      expansions++;
    }
  };
  yield* refineMtfField(context.ladder, evaluate, context.frequencies);
}

/* ── Focus ── */

/**
 * Axial best focus from the center bundle, and the image-plane consistency check. The search
 * always runs so results can report it; `best-axial` requests apply the shift to every field, and
 * `auto` requests apply it only when the authored plane is inconsistent with the prescription.
 */
function resolveMtfFocus(context: MtfJobContext): MtfFocus {
  const { state, options, support } = context;
  const requestedMode = options.focus ?? "design";
  const offset = mtfImagePlaneOffset(state, support);
  const focus: MtfFocus = {
    requestedMode,
    mode: "design",
    appliedShiftMm: 0,
    bestAxialShiftMm: null,
    designScore: null,
    bestScore: null,
    imagePlaneOffsetMm: offset?.offsetMm ?? null,
    imagePlaneInconsistent: offset?.inconsistent ?? false,
  };
  const launch = prepareMtfFieldLaunch(state, options, support, 0);
  const footprint = launch ? findMtfFieldFootprint(state, options, support, launch) : null;
  if (!launch || !footprint) return focus;
  const size = Math.min(MTF_FOCUS_GRID, context.ladder.at(-1) ?? MTF_FOCUS_GRID);
  const bundles = [];
  for (const line of support.spectralLines) {
    const bundle = traceMtfBundle(state, options, support, launch, footprint, size, line, state.imgZ);
    if (!bundle) return focus;
    bundles.push({ bundle, weight: line.weight });
  }
  const best = findAxialBestFocus(bundles, state.imgZ, MTF_FOCUS_FREQUENCIES);
  if (!best) return focus;
  focus.bestAxialShiftMm = best.shiftMm;
  focus.designScore = best.designScore;
  focus.bestScore = best.bestScore;
  if (requestedMode === "best-axial" || (requestedMode === "auto" && focus.imagePlaneInconsistent)) {
    focus.mode = "best-axial";
    focus.appliedShiftMm = best.shiftMm;
  }
  return focus;
}

/* ── Job ── */

function outsideModelMessage(geometry: MtfFieldGeometry): string {
  return `Outside the modeled field: the model's clear apertures clip the chief ray beyond ${geometry.modeledEdgeHeightMm.toFixed(1)} mm.`;
}

/**
 * Field axis of a request without tracing any pupil, for charts and audits.
 *
 * @param state - prepared optical state
 * @param options - MTF request
 * @returns image-height axis, or null when the request is unsupported or no chief ray reaches the image
 */
export function resolveMtfGeometry(state: PreparedOpticalState, options: MtfOptions): MtfFieldGeometry | null {
  const support = assessMtfSupport(state, options);
  if (!support.available) return null;
  return resolveMtfFieldGeometry(state, mtfModeledHalfField(state), mtfChiefHeight(state, options, support));
}

/**
 * Yields after the field axis is known and after every refinement, so a worker can publish progress.
 *
 * @param state - prepared optical state
 * @param options - MTF request
 * @param cache - optional reuse of an identical request's focus and finished fields
 */
export function* computeMtfSteps(
  state: PreparedOpticalState,
  options: MtfOptions,
  cache?: MtfJobCache,
): Generator<MtfResult, MtfResult> {
  const support = assessMtfSupport(state, options);
  const frequencies = [...(options.frequenciesPerMm ?? MTF_FREQUENCIES)];
  const fractions = options.fieldFractions ?? MTF_FIELDS;
  const source = resolveLensSourceState(state.lens.source, state.focusT, state.zoomT, state.aberrationT);
  const result: MtfResult = {
    configuration: {
      lensKey: state.lens.source.key,
      focusT: state.focusT,
      zoomT: state.zoomT,
      aberrationT: state.aberrationT,
      sourceState: source ? { ...source, conjugate: { ...source.conjugate } } : null,
    },
    method: options.method,
    spectrum: options.spectrum,
    support,
    frequenciesPerMm: frequencies,
    fields: [],
    geometry: null,
    focus: null,
  };
  if (!support.available) return result;
  const cap = options.maxGridSize ?? MTF_DEFAULT_GRID_CAP;
  const context: MtfJobContext = {
    state,
    options,
    support,
    frequencies,
    ladder: MTF_GRID_LADDER.filter((size) => size <= cap && (options.method !== "diffraction" || size >= 32)),
    imagePlaneZ: state.imgZ,
  };
  const chiefHeight = mtfChiefHeight(state, options, support);
  const geometry = resolveMtfFieldGeometry(state, mtfModeledHalfField(state), chiefHeight);
  result.geometry = geometry;
  if (!geometry) {
    result.fields = fractions.map((fraction) =>
      markUnavailable(emptyMtfField(fraction), "chief-ray-failed", "No valid chief ray reaches the image plane."),
    );
    return result;
  }
  const targets = resolveMtfFieldTargets(state, geometry, fractions, chiefHeight, !support.conjugate);
  result.fields = targets.map((target) =>
    target.outsideModel
      ? markUnavailable(emptyMtfField(target.fraction, target), "outside-modeled-field", outsideModelMessage(geometry))
      : emptyMtfField(target.fraction, target),
  );
  // Every field shares one image plane, so the axial focus search runs before any field.
  result.focus = cache?.focus ?? resolveMtfFocus(context);
  if (cache) cache.focus = result.focus;
  context.imagePlaneZ = state.imgZ + result.focus.appliedShiftMm;
  yield result;
  for (const index of mtfFieldProcessingOrder(fractions)) {
    if (targets[index].outsideModel) continue;
    const cached = cache?.fields.get(fractions[index]);
    if (cached) {
      result.fields[index] = copyField(cached);
      continue;
    }
    let finished: MtfFieldResult | undefined;
    for (const field of traceField(context, targets[index])) {
      finished = field;
      result.fields[index] = field;
      yield result;
    }
    // Only fields that ran to completion are reusable; an abandoned generator stores nothing.
    if (finished && cache) cache.fields.set(fractions[index], copyField(finished));
  }
  return result;
}

function copyField(field: MtfFieldResult): MtfFieldResult {
  return {
    ...field,
    sagittal: [...field.sagittal],
    tangential: [...field.tangential],
    notes: [...field.notes],
  };
}

export function computeMtf(state: PreparedOpticalState, options: MtfOptions): MtfResult {
  const steps = computeMtfSteps(state, options);
  let next = steps.next();
  while (!next.done) next = steps.next();
  return next.value;
}
