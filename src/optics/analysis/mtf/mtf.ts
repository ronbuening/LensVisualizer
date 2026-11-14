/** Pure MTF orchestration with explicit per-field convergence and unavailable results. */
import type {
  MtfFieldGeometry,
  MtfFieldResult,
  MtfFocus,
  MtfMethod,
  MtfOptions,
  MtfRequestOptions,
  MtfResult,
  MtfSupport,
  MtfUnavailableReason,
} from "../../../types/mtf.js";
import type { AnalysisRequest } from "../request.js";
import type { PreparedGeometry } from "../../types.js";
import { assessMtfSupport, resolveMtfOptions } from "./mtfSupport.js";
import { MTF_FIELDS, MTF_FREQUENCIES } from "./mtfConstants.js";
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
import { combineOtfs, geometricOtf, otfMagnitude } from "./mtfMath.js";
import type { ComplexOtf, MtfSpot } from "./mtfMath.js";
import {
  findMtfFieldFootprint,
  prepareMtfFieldLaunch,
  traceMtfStopBundle,
  traceMtfLaunchPlaneBundle,
  mtfAimSpectrum,
  mtfImagePoint,
  mtfLaunchRay,
  mtfTraceOptions,
} from "./mtfTracing.js";
import type { MtfBundle, MtfFieldLaunch, MtfOpenBorders } from "./mtfTracing.js";
import type { AimedStopLattice } from "../pupils/aimedPupil.js";
import { expandMtfFootprint } from "./mtfFootprint.js";
import type { MtfFootprint } from "./mtfFootprint.js";
import { shearedOtf } from "./mtfShearedOtf.js";
import { findAxialBestFocus, mtfImagePlaneOffset, mtfNearestImagePlaneZ } from "./mtfFocus.js";
import { traceWorkingFNumber } from "../summary/fNumbers.js";
import { traceEngineRay } from "../../trace/rayAdapters.js";
import {
  mtfBeamHeight,
  mtfChiefHeight,
  mtfFieldProcessingOrder,
  mtfModeledHalfField,
  resolveMtfFieldGeometry,
  resolveMtfFieldTargets,
} from "./mtfFields.js";
import type { MtfFieldTarget } from "./mtfFields.js";

/**
 * Results an identical earlier request may share: the field axis, the axial focus search, the
 * axial marginal ray's vignetting and finished fields, keyed by fraction. Callers key a cache by everything in the
 * request except `fieldFractions`.
 */
export interface MtfJobCache {
  /** Field axis; null when no chief ray reaches the image. */
  geometry?: MtfFieldGeometry | null;
  focus?: MtfFocus;
  axial?: Pick<MtfResult, "workingFNumber" | "magnification" | "axialVignetting">;
  fields: Map<number, MtfFieldResult>;
}

/** Work boundaries carry no in-progress spectral field or unfinished curve arrays. */
export type MtfPhase =
  | { kind: "geometry" }
  | { kind: "focus"; lineIndex: number; lineCount: number }
  | { kind: "aperture" }
  | { kind: "field"; fieldIndex: number; fieldCount: number; gridSize: number; lineIndex: number; lineCount: number };

/** Only complete grid evaluations can accompany a progress boundary. */
export interface MtfProgress {
  phase: MtfPhase;
  result?: MtfResult;
}

type MtfFieldStep = MtfPhase | MtfFieldResult;

/** Everything one request shares across its fields. */
interface MtfJobContext {
  state: PreparedGeometry;
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
    pupilSampling: "stop",
    gridSize: 0,
    validRays: 0,
    blockedRays: 0,
    failedRays: 0,
    unaimedRays: 0,
    unresolvedInBeamRays: 0,
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

/** True when a stop lattice's aim found no ray at all: no cell aimed and none proven blocked. */
function aimedNothing(lattice: AimedStopLattice): boolean {
  return lattice.aimedCount === 0 && lattice.blockedCount === 0 && lattice.unaimedCount > 0;
}

/** Why a lattice aimed nothing, in the aimer's own reason codes. */
function aimFailedMessage(lattice: AimedStopLattice, wavelengthNm: number): string {
  const reasons = Object.entries(lattice.unaimedByReason)
    .filter(([, count]) => count > 0)
    .map(([reason, count]) => `${count} ${reason}`)
    .join(", ");
  const chief =
    lattice.chief.status === "unaimed" ? ` The stop-centre chief is unaimed too (${lattice.chief.reason}).` : "";
  return `No sample of the ${lattice.cellsAcross}-cell stop lattice could be aimed at ${wavelengthNm.toFixed(1)} nm (${reasons}).${chief}`;
}

/* ── Unknown flux ── */

export interface MtfUnresolvedFlux {
  acceptable: boolean;
  note: string | null;
}

/**
 * Weight unresolved samples beside the beam by the same incident spectrum as transmitted flux.
 * Unresolved samples carry full transmission; resolved ray weights include bulk absorption.
 *
 * @param lines - incident spectral weight and summed transmitted and unresolved-in-beam weights per line
 * @returns unresolved share of the possible beam flux, or zero when it carries no weight
 */
export function mtfUnresolvedFluxFraction(
  lines: readonly { weight: number; transmittedWeight: number; unresolvedInBeamWeight: number }[],
): number {
  let sampledWeight = 0;
  let unresolvedWeight = 0;
  for (const line of lines) {
    sampledWeight += line.weight * (line.transmittedWeight + line.unresolvedInBeamWeight);
    unresolvedWeight += line.weight * line.unresolvedInBeamWeight;
  }
  return sampledWeight > 0 ? unresolvedWeight / sampledWeight : 0;
}

/**
 * Omitting flux ε changes a normalized geometric OTF by at most 2ε: small unresolved shares are
 * reported with that bound only for the geometric method. Diffraction reports the omitted flux
 * without an error bound. Larger shares make the grid unavailable. Unresolved samples are the
 * unaimed and failed ones. A field is judged by those beside its transmitted beam (a row or column
 * neighbour of a transmitted cell): one that touches no transmitted cell is counted and named in the
 * note but withholds nothing (`agent_docs/decisions.md`).
 *
 * @param unresolvedRays - unaimed and failed pupil samples
 * @param unknownFluxFraction - the judged share of the flux: that of the samples beside the beam when `inBeam` is
 *   given, of every unresolved sample otherwise, each counted at full transmission
 * @param method - estimator whose omitted flux the note qualifies
 * @param inBeam - how many of the samples lie beside the transmitted beam; null when not counted
 * @returns whether the field may be reported, with its qualifying note
 */
export function assessUnresolvedFlux(
  unresolvedRays: number,
  unknownFluxFraction: number,
  method: MtfMethod,
  inBeam: number | null = null,
): MtfUnresolvedFlux {
  if (unknownFluxFraction > MTF_MAX_UNKNOWN_FLUX) return { acceptable: false, note: null };
  if (unresolvedRays === 0) return { acceptable: true, note: null };
  const share = `${(unknownFluxFraction * 100).toFixed(2)}% of flux`;
  const qualification =
    method === "geometric"
      ? `MTF error ≤ ${(2 * unknownFluxFraction).toFixed(3)}`
      : "the diffraction estimate does not account for this flux";
  if (inBeam === null)
    return {
      acceptable: true,
      note: `${unresolvedRays} pupil samples that could not be aimed or traced (${share}) are omitted; ${qualification}.`,
    };
  const away = unresolvedRays - inBeam;
  const parts = [
    ...(inBeam > 0 ? [`${inBeam} beside the transmitted beam carry ${share} and are omitted; ${qualification}.`] : []),
    ...(away > 0 ? [`${away} touch no transmitted cell and are not counted.`] : []),
  ];
  return { acceptable: true, note: `${unresolvedRays} pupil samples could not be aimed or traced: ${parts.join(" ")}` };
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

/** How one field samples its pupil across the grid ladder. */
type MtfFieldSampling =
  /** On the real stop; each wavelength's latest lattice seeds its next, finer one. */
  | { kind: "stop"; lattices: Map<number, AimedStopLattice> }
  /** On the launch plane over a footprint, for a field launched from the bounding sphere. */
  | { kind: "launch-plane"; footprint: MtfFootprint };

/** Field note for a field sampled on the launch plane. */
const MTF_LAUNCH_PLANE_NOTE =
  "This field launches from the bounding sphere, which the stop lattice does not cover: its pupil is sampled in equal cells of the launch plane, not evenly on the stop.";

function* fieldAtGrid(
  context: MtfJobContext,
  target: MtfFieldTarget,
  launch: MtfFieldLaunch,
  sampling: MtfFieldSampling,
  size: number,
  phase: Pick<Extract<MtfPhase, { kind: "field" }>, "fieldIndex" | "fieldCount">,
): Generator<MtfPhase, MtfGridOutcome> {
  const { state, options, support } = context;
  const field = emptyMtfField(target.fraction, target);
  field.gridSize = size;
  field.pupilSampling = sampling.kind;
  if (sampling.kind === "launch-plane") field.notes.push(MTF_LAUNCH_PLANE_NOTE);
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
  const fluxWeights = [];
  /** Wavelengths no ray reaches at this grid. */
  let darkLines = 0;
  for (const [index, line] of support.spectralLines.entries()) {
    yield { kind: "field", ...phase, gridSize: size, lineIndex: index + 1, lineCount: support.spectralLines.length };
    let bundle: MtfBundle | null;
    if (sampling.kind === "stop") {
      bundle = traceMtfStopBundle(state, options, support, launch, size, line, context.imagePlaneZ, {
        reference: commonReference,
        coarse: sampling.lattices.get(index),
      });
      if (bundle?.lattice) sampling.lattices.set(index, bundle.lattice);
    } else {
      bundle = traceMtfLaunchPlaneBundle(
        state,
        options,
        support,
        launch,
        sampling.footprint,
        size,
        line,
        context.imagePlaneZ,
        { reference: commonReference },
      );
    }
    if (!bundle) return unavailable("chief-ray-failed", "No valid chief ray reaches the image plane.");
    chiefClipped ??= bundle.chiefClipped;
    commonReference ??= bundle.chief;
    field.imageHeightMm = Math.hypot(commonReference.x, commonReference.y);
    field.validRays += bundle.rays.length;
    field.blockedRays += bundle.blocked;
    field.failedRays += bundle.failed;
    field.unaimedRays += bundle.unaimed;
    field.unresolvedInBeamRays += bundle.unresolvedInBeam;
    openBorders.x ||= bundle.openBorders.x;
    openBorders.y0 ||= bundle.openBorders.y0;
    openBorders.y1 ||= bundle.openBorders.y1;
    // A finer lattice solves its cells as this one does, so a lattice that aims nothing ends the ladder.
    if (bundle.lattice && aimedNothing(bundle.lattice))
      return unavailable("aim-failed", aimFailedMessage(bundle.lattice, line.wavelengthNm));
    const transmitted = bundle.rays.reduce((sum, ray) => sum + ray.weight, 0);
    fluxWeights.push({
      weight: line.weight,
      transmittedWeight: transmitted,
      unresolvedInBeamWeight: bundle.unresolvedInBeamWeight,
    });
    // A wavelength no ray reaches, with every sample resolved: the grid is vignetted if every wavelength is.
    if (bundle.rays.length === 0 && bundle.unaimed + bundle.failed === 0) {
      darkLines++;
      continue;
    }
    // Too few rays means this grid is too coarse for a thin (for example cat's-eye vignetted) beam; a finer grid may
    // resolve it.
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
  // No ray at all reaches the image at any wavelength: a finer grid may still find a thin beam. Light at some wavelengths
  // and none at others is too little pupil for this grid.
  if (darkLines === support.spectralLines.length)
    return unavailable("vignetted", "No rays reach this image height through the model's clear apertures.", true);
  if (darkLines > 0) return unavailable("empty-pupil", "Too little pupil remains to estimate MTF.", true);
  field.unknownFluxFraction = mtfUnresolvedFluxFraction(fluxWeights);
  const unresolvedRays = field.failedRays + field.unaimedRays;
  const unresolved = assessUnresolvedFlux(
    unresolvedRays,
    field.unknownFluxFraction,
    options.method,
    field.unresolvedInBeamRays,
  );
  // A finer grid can resolve a beam edge this one cannot, so the ladder goes on.
  if (!unresolved.acceptable) {
    const away = unresolvedRays - field.unresolvedInBeamRays;
    return unavailable(
      "trace-failed",
      `${field.unresolvedInBeamRays} pupil samples beside the transmitted beam could not be aimed or traced and carry ${(field.unknownFluxFraction * 100).toFixed(1)}% of its flux, too much for an MTF estimate.${away > 0 ? ` ${away} more touch no transmitted cell.` : ""}`,
      true,
    );
  }
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
 * Compare two successive grids at positive frequencies in the convergence band, or all
 * positive frequencies if none is in band. DC alone retains its zero-change comparison.
 * The highest frequency whose running maximum change stays in tolerance is reported in
 * frequency order so higher-frequency charts can show where sampling noise begins.
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
  let band = deltas.filter((_, i) => frequencies[i] > 0 && frequencies[i] <= MTF_CONVERGENCE_BAND_LPMM);
  if (!band.length) band = deltas.filter((_, i) => frequencies[i] > 0);
  field.maxDelta = Math.max(...(band.length ? band : deltas));
  let through: number | null = null;
  const orderedIndices = frequencies.map((_, i) => i).sort((a, b) => frequencies[a] - frequencies[b]);
  for (const i of orderedIndices) {
    if (!(deltas[i] <= MTF_CONVERGENCE_TOLERANCE)) break;
    through = frequencies[i];
  }
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
 * A converged level ends refinement. A level that fails asking for finer sampling (a thin beam, or unresolved samples a
 * finer lattice may resolve) passes to the next; one that cannot be helped by it (no chief ray) ends refinement. A
 * failure never discards a coarser curve, which stays unconverged; when no finer level gave a curve, it says why.
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
  const steps = refineMtfFieldSteps(ladder, evaluate, frequencies);
  for (const step of steps) if ("status" in step) yield step;
}

/** Preserve refinement order while allowing an evaluation to pause between spectral lines. */
function* refineMtfFieldSteps(
  ladder: readonly number[],
  evaluate: (size: number) => MtfGridOutcome | Generator<MtfPhase, MtfGridOutcome>,
  frequencies: readonly number[],
): Generator<MtfFieldStep, void> {
  let previous: MtfFieldResult | null = null;
  /** The last failed level since the last curve. */
  let failed: { size: number; message: string } | null = null;
  const explain = (field: MtfFieldResult) => {
    if (failed)
      field.notes.push(
        `No grid finer than ${field.gridSize} cells gave a curve; at ${failed.size} cells: ${failed.message}`,
      );
  };
  for (const size of ladder) {
    const evaluation = evaluate(size);
    const outcome = "kind" in evaluation ? evaluation : yield* evaluation;
    if (outcome.kind === "unavailable") {
      failed = { size, message: outcome.field.message };
      if (!outcome.refine) {
        if (previous) explain(previous);
        yield previous ?? outcome.field;
        return;
      }
      yield previous ?? outcome.field;
      continue;
    }
    failed = null;
    applyConvergence(outcome.field, previous, frequencies);
    yield outcome.field;
    if (outcome.field.status === "converged") return;
    previous = outcome.field;
  }
  if (previous && failed) {
    explain(previous);
    yield previous;
  }
}

/**
 * Trace one field through launch and refinement, yielding its best result so far. A field on the real stop refines its
 * stop lattice; a bounding-sphere field scans a launch-plane footprint first and widens it when its guard band carries
 * flux.
 */
function* traceField(
  context: MtfJobContext,
  target: MtfFieldTarget,
  phase: Pick<Extract<MtfPhase, { kind: "field" }>, "fieldIndex" | "fieldCount">,
): Generator<MtfFieldStep, void> {
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
  if (launch.aim) {
    const sampling: MtfFieldSampling = { kind: "stop", lattices: new Map() };
    yield* refineMtfFieldSteps(
      context.ladder,
      (size) => fieldAtGrid(context, target, launch, sampling, size, phase),
      context.frequencies,
    );
    return;
  }
  let footprint = findMtfFieldFootprint(state, options, support, launch);
  if (!footprint) {
    const field = emptyMtfField(target.fraction, target);
    field.pupilSampling = "launch-plane";
    yield markUnavailable(field, "vignetted", "No rays reach this image height through the model's clear apertures.");
    return;
  }
  let expansions = 0;
  const evaluate = function* (size: number): Generator<MtfPhase, MtfGridOutcome> {
    for (;;) {
      const outcome = yield* fieldAtGrid(
        context,
        target,
        launch,
        { kind: "launch-plane", footprint: footprint! },
        size,
        phase,
      );
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
  yield* refineMtfFieldSteps(context.ladder, evaluate, context.frequencies);
}

/* ── Focus ── */

/** Axial launch for the focus search, with a launch-plane footprint only where the field cannot be aimed. */
interface MtfAxialBeam {
  launch: MtfFieldLaunch;
  footprint: MtfFootprint | null;
}

function resolveAxialBeam(context: MtfJobContext): MtfAxialBeam | null {
  const { state, options, support } = context;
  const launch = prepareMtfFieldLaunch(state, options, support, 0);
  if (!launch) return null;
  if (launch.aim) return { launch, footprint: null };
  const footprint = findMtfFieldFootprint(state, options, support, launch);
  return footprint ? { launch, footprint } : null;
}

/** The chart's own object and first wavelength define both the working aperture and axial vignetting. */
function resolveMtfAxialReadout(
  request: AnalysisRequest,
  context: MtfJobContext,
  axial: MtfAxialBeam | null,
): NonNullable<MtfJobCache["axial"]> {
  const { state, options, support } = context;
  const line = support.spectralLines[0];
  const field = axial?.launch.aim;
  const marginal = field ? traceWorkingFNumber(request, field, mtfAimSpectrum(state, support, line)) : null;
  let magnification: number | null = null;
  if (support.conjugate && axial?.launch.objectPoint) {
    // A 0.01 mm object height samples the on-axis scale without a paraxial object-distance substitution.
    const distance = state.surfaces[0].z - axial.launch.objectPoint[2];
    const angleDeg = (Math.atan2(0.01, distance) * 180) / Math.PI;
    const launch = prepareMtfFieldLaunch(state, options, support, angleDeg);
    if (launch?.objectPoint) {
      const trace = traceEngineRay(state, mtfLaunchRay(launch, 0, 0), mtfTraceOptions(state, options, support, line));
      const image = mtfImagePoint(state, trace, context.imagePlaneZ);
      const value = image ? image.y / launch.objectPoint[1] : NaN;
      if (Number.isFinite(value)) magnification = value;
    }
  }
  return {
    workingFNumber: marginal?.status === "traced" ? marginal.value : null,
    axialVignetting:
      marginal?.status === "vignetted"
        ? { surfaceLabel: marginal.surfaceLabel, beforeStop: marginal.beforeStop }
        : null,
    magnification,
  };
}

/**
 * Axial best focus from the center bundle, and the image-plane consistency check. The search
 * always runs so results can report it; `best-axial` requests apply the shift to every field, and
 * `auto` requests apply it only when the authored plane is inconsistent with the prescription.
 * An explicit held shift overrides that selection without suppressing the diagnostic.
 */
function* resolveMtfFocus(context: MtfJobContext, axial: MtfAxialBeam | null): Generator<MtfPhase, MtfFocus> {
  const { state, options, support } = context;
  const requestedMode = options.focus;
  const offset = mtfImagePlaneOffset(state, support);
  const focus: MtfFocus = {
    requestedMode,
    mode: options.heldFocusShiftMm === undefined ? "design" : "held",
    appliedShiftMm: options.heldFocusShiftMm ?? 0,
    bestAxialShiftMm: null,
    designScore: null,
    bestScore: null,
    imagePlaneOffsetMm: offset?.offsetMm ?? null,
    imagePlaneInconsistent: offset?.inconsistent ?? false,
  };
  const checkedFocus = (bundles?: Parameters<typeof mtfNearestImagePlaneZ>[1]) => {
    if (options.heldFocusShiftMm !== undefined) {
      const planeZ = state.imgZ + options.heldFocusShiftMm;
      if (!Number.isFinite(options.heldFocusShiftMm) || !Number.isFinite(planeZ))
        throw new RangeError("Held MTF image-plane shift must be finite.");
      if (planeZ < mtfNearestImagePlaneZ(state, bundles))
        throw new RangeError("Held MTF image plane lies in front of the last surface.");
    }
    return focus;
  };
  if (!axial) return checkedFocus();
  const { launch, footprint } = axial;
  const size = Math.min(MTF_FOCUS_GRID, context.ladder.at(-1) ?? MTF_FOCUS_GRID);
  const bundles = [];
  for (const [index, line] of support.spectralLines.entries()) {
    const bundle = footprint
      ? traceMtfLaunchPlaneBundle(state, options, support, launch, footprint, size, line, state.imgZ)
      : traceMtfStopBundle(state, options, support, launch, size, line, state.imgZ);
    yield { kind: "focus", lineIndex: index + 1, lineCount: support.spectralLines.length };
    if (!bundle) return checkedFocus();
    bundles.push({ bundle, weight: line.weight });
  }
  const best = findAxialBestFocus(
    bundles,
    state.imgZ,
    MTF_FOCUS_FREQUENCIES,
    state.lens.imageSurface === null ? mtfNearestImagePlaneZ(state) : mtfNearestImagePlaneZ(state, bundles),
  );
  if (!best) return checkedFocus(bundles);
  focus.bestAxialShiftMm = best.shiftMm;
  focus.designScore = best.designScore;
  focus.bestScore = best.bestScore;
  if (
    options.heldFocusShiftMm === undefined &&
    (requestedMode === "best-axial" || (requestedMode === "auto" && focus.imagePlaneInconsistent))
  ) {
    focus.mode = "best-axial";
    focus.appliedShiftMm = best.shiftMm;
  }
  return checkedFocus(bundles);
}

/* ── Job ── */

function outsideModelMessage(geometry: MtfFieldGeometry): string {
  return `Outside the modeled field: beyond ${geometry.modeledEdgeHeightMm.toFixed(1)} mm the model's clear apertures pass no light, or no chief ray to place it by.`;
}

/**
 * Field axis of a request without tracing its pupils, for charts and audits. Past the chief ray's own clip each probe
 * of the edge runs the coarse footprint scan.
 *
 * @param request - prepared geometry and current physical aperture
 * @param settings - method, spectrum, focus and sampling
 * @returns image-height axis, or null when the request is unsupported or no chief ray reaches the image
 */
export function resolveMtfGeometry(request: AnalysisRequest, settings: MtfRequestOptions): MtfFieldGeometry | null {
  const state = request.preparedGeometry;
  const options = resolveMtfOptions(request, settings);
  const support = assessMtfSupport(request, settings);
  if (!support.available) return null;
  return resolveMtfFieldGeometry(state, mtfModeledHalfField(state), mtfChiefHeight(state, options, support), {
    reference: mtfChiefHeight(state, options, support, false),
    beam: mtfBeamHeight(state, options, support),
  });
}

/**
 * Yields phase boundaries around geometry, focus bundles and spectral grid evaluations.
 * Only completed grid evaluations appear in progress results; the return value is the final result.
 *
 * @param request - prepared geometry and current physical aperture
 * @param settings - method, spectrum, focus and sampling
 * @param cache - optional reuse of an identical request's focus and finished fields
 */
export function* computeMtfSteps(
  request: AnalysisRequest,
  settings: MtfRequestOptions,
  cache?: MtfJobCache,
): Generator<MtfProgress, MtfResult> {
  const state = request.preparedGeometry;
  const options = resolveMtfOptions(request, settings);
  const support = assessMtfSupport(request, settings);
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
    conjugate: null,
    workingFNumber: null,
    magnification: null,
    axialVignetting: null,
  };
  if (!support.available) return result;
  yield { phase: { kind: "geometry" } };
  result.conjugate = support.conjugate
    ? {
        kind: "finite",
        objectDistanceMm: support.conjugate.objectDistanceMm,
        distanceReference: support.conjugate.distanceReference,
      }
    : { kind: "infinity" };
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
  yield { phase: { kind: "geometry" } };
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
  yield { phase: { kind: "focus", lineIndex: 0, lineCount: support.spectralLines.length } };
  // Every field shares one image plane, so the axial focus search runs before any field.
  const axial = cache?.focus && cache.axial ? null : resolveAxialBeam(context);
  if (cache?.focus) {
    result.focus = cache.focus;
  } else {
    const steps = resolveMtfFocus(context, axial);
    let next = steps.next();
    while (!next.done) {
      yield { phase: next.value };
      next = steps.next();
    }
    result.focus = next.value;
    if (cache) cache.focus = result.focus;
  }
  context.imagePlaneZ = state.imgZ + result.focus.appliedShiftMm;
  yield { phase: { kind: "aperture" } };
  const readout = cache?.axial ?? resolveMtfAxialReadout(request, context, axial);
  Object.assign(result, readout);
  if (cache) cache.axial = readout;
  yield { phase: { kind: "aperture" }, result };
  for (const index of mtfFieldProcessingOrder(fractions)) {
    if (targets[index].outsideModel) continue;
    const cached = cache?.fields.get(fractions[index]);
    if (cached) {
      result.fields[index] = copyField(cached);
      continue;
    }
    let finished: MtfFieldResult | undefined;
    const phase = { fieldIndex: index + 1, fieldCount: fractions.length };
    let currentPhase: MtfPhase = {
      kind: "field",
      ...phase,
      gridSize: 0,
      lineIndex: 0,
      lineCount: support.spectralLines.length,
    };
    for (const step of traceField(context, targets[index], phase)) {
      if ("kind" in step) {
        currentPhase = step;
        yield { phase: step };
      } else {
        finished = step;
        result.fields[index] = step;
        yield { phase: currentPhase, result };
      }
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

export function computeMtf(request: AnalysisRequest, options: MtfRequestOptions): MtfResult {
  const steps = computeMtfSteps(request, options);
  let next = steps.next();
  while (!next.done) next = steps.next();
  return next.value;
}
