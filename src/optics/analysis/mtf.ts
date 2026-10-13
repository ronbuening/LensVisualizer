/** Pure MTF orchestration with explicit per-field convergence and unavailable results. */
import type {
  MtfAperture,
  MtfFieldGeometry,
  MtfFieldResult,
  MtfFocus,
  MtfOptions,
  MtfResult,
  MtfSupport,
  MtfUnavailableReason,
} from "../../types/mtf.js";
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
  MTF_STRADDLING_NOTE_SHARE,
} from "./mtfConstants.js";
import { combineOtfs, geometricOtf, otfMagnitude, type ComplexOtf, type MtfSpot } from "./mtfMath.js";
import {
  findMtfFieldFootprint,
  prepareMtfFieldLaunch,
  traceMtfBundle,
  type MtfFieldLaunch,
  type MtfOpenBorders,
} from "./mtfTracing.js";
import { expandMtfFootprint, type MtfFootprint } from "./mtfFootprint.js";
import { shearedOtf } from "./mtfShearedOtf.js";
import { findAxialBestFocus, mtfImagePlaneOffset, mtfNearestImagePlaneZ } from "./mtfFocus.js";
import { resolveMtfAperture } from "./mtfAperture.js";
import {
  mtfBeamHeight,
  mtfChiefHeight,
  mtfFieldProcessingOrder,
  mtfModeledHalfField,
  resolveMtfFieldGeometry,
  resolveMtfFieldTargets,
  type MtfFieldTarget,
} from "./mtfFields.js";

/**
 * Results an identical earlier request may share: the field axis, the axial focus search, the
 * traced aperture and finished fields, keyed by fraction. Callers key a cache by everything in the
 * request except `fieldFractions`.
 */
export interface MtfJobCache {
  /** Field axis; null when no chief ray reaches the image. */
  geometry?: MtfFieldGeometry | null;
  focus?: MtfFocus;
  /** Stored with `focus`; both come from the axial beam. */
  aperture?: MtfAperture | null;
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
    diffractionLimit: null,
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

/** Field note where the beam images although its chief ray does not pass. */
const MTF_CLIPPED_CHIEF_NOTE =
  "A clear aperture stops the chief ray at this height; the curve comes from the part of the beam that still passes.";

interface WeightedOtf {
  otf: ComplexOtf;
  weight: number;
}

export type MtfGridOutcome =
  | { kind: "curves"; field: MtfFieldResult; openBorders?: MtfOpenBorders }
  | { kind: "unavailable"; field: MtfFieldResult; refine: boolean };

/** Real per-frequency response on both cuts, with the weight it carries in a spectral mean. */
interface WeightedLimit {
  sagittal: number[];
  tangential: number[];
  weight: number;
}

/** Spectral mean of per-wavelength aberration-free responses, weighted like the OTFs they bound. */
function combineLimits(limits: readonly WeightedLimit[]): { sagittal: number[]; tangential: number[] } {
  const total = limits.reduce((sum, limit) => sum + limit.weight, 0);
  const mean = (cut: "sagittal" | "tangential") =>
    limits[0][cut].map((_, i) => limits.reduce((sum, limit) => sum + limit.weight * limit[cut][i], 0) / total);
  return { sagittal: mean("sagittal"), tangential: mean("tangential") };
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
  const limits: WeightedLimit[] = [];
  /** Largest share of any wavelength's overlap that comes from pairs straddling a gap in the beam. */
  let straddling = 0;
  let commonReference: MtfSpot | undefined;
  /** Whether the reference wavelength's chief ray is stopped by a clear aperture. */
  let chiefClipped: boolean | undefined;
  let launchedWeight = 0;
  let failedWeight = 0;
  for (const line of support.spectralLines) {
    const bundle = traceMtfBundle(state, options, support, launch, footprint, size, line, context.imagePlaneZ, {
      reference: commonReference,
    });
    if (!bundle) return unavailable("chief-ray-failed", "No valid chief ray reaches the image plane.");
    chiefClipped ??= bundle.chiefClipped;
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
    // The footprint scan already found transmitted flux, so too few rays means this grid is too
    // coarse for a thin (for example cat's-eye vignetted) beam; a finer grid may resolve it.
    if (bundle.rays.length < MTF_MIN_RAYS || !(transmitted > 0))
      return unavailable("empty-pupil", "Too little pupil remains to estimate MTF.", true);
    // Incident line weight times transmitted flux: clipping and bulk absorption shape each line's share.
    const weight = line.weight * transmitted;
    if (options.method === "diffraction") {
      // Every wavelength shears its own lattice; one image reference keeps lateral color in the phase.
      const sheared = shearedOtf(bundle, commonReference, line.wavelengthNm * 1e-6, context.frequencies);
      sagittal.push({ otf: sheared.sagittal, weight });
      tangential.push({ otf: sheared.tangential, weight });
      limits.push({ ...sheared.limit, weight });
      // Judged where convergence is: above the band, sampling noise outweighs it.
      sheared.straddling.forEach((share, i) => {
        if (context.frequencies[i] <= MTF_CONVERGENCE_BAND_LPMM) straddling = Math.max(straddling, share);
      });
      continue;
    }
    // One translation for the entire spectrum preserves lateral color and a common physical plane.
    const reference = commonReference;
    const points = bundle.rays.map((p) => ({ x: p.x - reference.x, y: p.y - reference.y, weight: p.weight }));
    sagittal.push({ otf: geometricOtf(points, context.frequencies, "x"), weight });
    tangential.push({ otf: geometricOtf(points, context.frequencies, "y"), weight });
  }
  field.unknownFluxFraction = launchedWeight > 0 ? failedWeight / launchedWeight : 0;
  const unresolved = assessUnresolvedFlux(field.failedRays, field.unknownFluxFraction);
  if (!unresolved.acceptable) return unavailable("trace-failed", "Numerical ray failures prevent an MTF estimate.");
  if (unresolved.note) field.notes.push(unresolved.note);
  if (chiefClipped) field.notes.push(MTF_CLIPPED_CHIEF_NOTE);
  if (straddling > MTF_STRADDLING_NOTE_SHARE)
    field.notes.push(
      `${(straddling * 100).toFixed(1)}% of the sheared ray pairs straddle a gap in the transmitted beam; the diffraction estimate approximates their phase.`,
    );
  field.sagittal = otfMagnitude(combineOtfs(sagittal));
  field.tangential = otfMagnitude(combineOtfs(tangential));
  if (limits.length) field.diffractionLimit = combineLimits(limits);
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

/** Axial launch and footprint, shared by the focus search and the traced aperture. */
interface MtfAxialBeam {
  launch: MtfFieldLaunch;
  footprint: MtfFootprint;
}

function resolveAxialBeam(context: MtfJobContext): MtfAxialBeam | null {
  const { state, options, support } = context;
  const launch = prepareMtfFieldLaunch(state, options, support, 0);
  const footprint = launch ? findMtfFieldFootprint(state, options, support, launch) : null;
  return launch && footprint ? { launch, footprint } : null;
}

/**
 * Axial best focus from the center bundle, and the image-plane consistency check. The search
 * always runs so results can report it; `best-axial` requests apply the shift to every field, and
 * `auto` requests apply it only when the authored plane is inconsistent with the prescription.
 */
function resolveMtfFocus(context: MtfJobContext, axial: MtfAxialBeam | null): MtfFocus {
  const { state, options, support } = context;
  const requestedMode = options.focus;
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
  if (!axial) return focus;
  const { launch, footprint } = axial;
  const size = Math.min(MTF_FOCUS_GRID, context.ladder.at(-1) ?? MTF_FOCUS_GRID);
  const bundles = [];
  for (const line of support.spectralLines) {
    const bundle = traceMtfBundle(state, options, support, launch, footprint, size, line, state.imgZ);
    if (!bundle) return focus;
    bundles.push({ bundle, weight: line.weight });
  }
  const best = findAxialBestFocus(bundles, state.imgZ, MTF_FOCUS_FREQUENCIES, mtfNearestImagePlaneZ(state));
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
  return `Outside the modeled field: beyond ${geometry.modeledEdgeHeightMm.toFixed(1)} mm the model's clear apertures pass no light, or no chief ray to place it by.`;
}

/**
 * Field axis of a request without tracing its pupils, for charts and audits. Past the chief ray's own clip each probe
 * of the edge runs the coarse footprint scan.
 *
 * @param state - prepared optical state
 * @param options - MTF request
 * @returns image-height axis, or null when the request is unsupported or no chief ray reaches the image
 */
export function resolveMtfGeometry(state: PreparedOpticalState, options: MtfOptions): MtfFieldGeometry | null {
  const support = assessMtfSupport(state, options);
  if (!support.available) return null;
  return resolveMtfFieldGeometry(state, mtfModeledHalfField(state), mtfChiefHeight(state, options, support), {
    reference: mtfChiefHeight(state, options, support, false),
    beam: mtfBeamHeight(state, options, support),
  });
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
  const result: MtfResult = {
    method: options.method,
    spectrum: options.spectrum,
    support,
    frequenciesPerMm: frequencies,
    fields: [],
    geometry: null,
    focus: null,
    aperture: null,
  };
  if (!support.available) return result;
  const cap = options.maxGridSize ?? MTF_DEFAULT_GRID_CAP;
  const context: MtfJobContext = {
    state,
    options,
    support,
    frequencies,
    ladder: MTF_GRID_LADDER.filter((size) => size <= cap),
    imagePlaneZ: state.imgZ,
  };
  // Heights past the chief's own clip are placed by the chief traced through every surface.
  const referenceHeight = mtfChiefHeight(state, options, support, false);
  // The field axis does not depend on the field list, so a cached job already holds it.
  const geometry =
    cache?.geometry !== undefined
      ? cache.geometry
      : resolveMtfFieldGeometry(state, mtfModeledHalfField(state), mtfChiefHeight(state, options, support), {
          reference: referenceHeight,
          beam: mtfBeamHeight(state, options, support),
        });
  if (cache) cache.geometry = geometry;
  result.geometry = geometry;
  if (!geometry) {
    result.fields = fractions.map((fraction) =>
      markUnavailable(emptyMtfField(fraction), "chief-ray-failed", "No valid chief ray reaches the image plane."),
    );
    return result;
  }
  const targets = resolveMtfFieldTargets(state, geometry, fractions, referenceHeight, !support.conjugate);
  result.fields = targets.map((target) =>
    target.outsideModel
      ? markUnavailable(emptyMtfField(target.fraction, target), "outside-modeled-field", outsideModelMessage(geometry))
      : emptyMtfField(target.fraction, target),
  );
  // Every field shares one image plane, so the axial focus search runs before any field.
  if (cache?.focus) {
    result.focus = cache.focus;
    result.aperture = cache.aperture ?? null;
  } else {
    const axial = resolveAxialBeam(context);
    result.focus = resolveMtfFocus(context, axial);
    result.aperture = axial ? resolveMtfAperture(state, options, support, axial.launch, axial.footprint) : null;
    if (cache) {
      cache.focus = result.focus;
      cache.aperture = result.aperture;
    }
  }
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
    diffractionLimit: field.diffractionLimit && {
      sagittal: [...field.diffractionLimit.sagittal],
      tangential: [...field.diffractionLimit.tangential],
    },
  };
}

export function computeMtf(state: PreparedOpticalState, options: MtfOptions): MtfResult {
  const steps = computeMtfSteps(state, options);
  let next = steps.next();
  while (!next.done) next = steps.next();
  return next.value;
}
