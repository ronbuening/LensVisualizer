/**
 * MTF field positions in image height.
 *
 * Manufacturer charts plot MTF against distance from the image center in millimetres, out to the
 * format corner. Field requests are therefore fractions of a reference height: the format-corner
 * radius when the lens declares an image format or circle, otherwise the modeled edge. Targets
 * map to chief-ray field angles through the same exact image-height inversion as the Distortion
 * tab (infinity) or a root solve on the aimed finite-source chief (documented conjugates).
 * Heights beyond the modeled edge, which the authored clear apertures leave unlit or without a
 * chief ray to place them by, are reported as outside the model rather than traced.
 */
import { IMAGE_FORMAT_BY_ID, isImageFormatId } from "../../utils/catalog/lensTaxonomy.js";
import type { MtfFieldGeometry, MtfOptions, MtfSupport } from "../../types/mtf.js";
import { computeFieldGeometryAtState2, solveFieldAnglesForImageHeightsAccurate2 } from "../field/chiefRay.js";
import { MAX_FIELD_LAUNCH_DEG } from "../field/projection.js";
import { halfFieldAtZoom } from "../layout.js";
import { solveScalarRoot } from "../math/rootSolve.js";
import { traceEngineRay2 } from "../trace/rayAdapters.js";
import type { PreparedOpticalState } from "../types.js";
import {
  findMtfFieldFootprint,
  mtfImagePoint,
  mtfLaunchRay,
  mtfTraceOptions,
  prepareMtfFieldLaunch,
} from "./mtfTracing.js";

/** One requested field sample resolved to a chief-ray angle, or to a reason it is not traced. */
export interface MtfFieldTarget {
  fraction: number;
  targetImageHeightMm: number;
  /** Chief-ray field angle in degrees; null when the height is outside the modeled field or unsolved. */
  fieldAngleDeg: number | null;
  outsideModel: boolean;
}

/** Radial chief-ray image height at a field angle in mm, or NaN when the field has no such height. */
export type MtfChiefHeight = (fieldAngleDeg: number) => number;

/** Chief heights of the fields past the chief ray's own clip, where part of the beam can still image. */
export interface MtfBeyondChiefClip {
  /** Height of the chief traced without aperture checks (`mtfChiefHeight` with apertures ignored). */
  reference: MtfChiefHeight;
  /** The same height while any of the beam reaches the image, NaN once none does (`mtfBeamHeight`). */
  beam: MtfChiefHeight;
}

/** Inward scan used when the starting half field is not reachable. */
const EDGE_SCAN_STEPS = 24;
/** Outward walk from the starting half field, in degrees per step. */
const EDGE_WALK_DEG = 1;
const EDGE_BISECTIONS = 24;
/** Bisections of the beam's own edge: each dark probe costs a footprint scan, and 1°/4096 is finer than any field step. */
const BEAM_EDGE_BISECTIONS = 12;
/** Angles at which the unchecked chief's height is tested for a steady rise across an edge extension. */
const EXTENSION_CHECK_STEPS = 16;
/** Footprint growths of a lit-or-dark probe: a beam whose chief is clipped still lies around the chief's launch point. */
const BEAM_PROBE_GROWTHS = 2;
/** Image-height tolerance of the field inversion, in mm. */
const HEIGHT_TOLERANCE_MM = 1e-4;
/** Samples of the finite chief-height table that brackets each target. */
const FINITE_TABLE_STEPS = 16;

/**
 * Starting estimate of the model's field edge: the shared current-state field geometry at
 * infinity, the source half field for finite conjugates. The shared geometry bisects a
 * paraxially launched chief, which can clip before the real stop-aimed chief in wide-angle
 * designs with strong pupil aberration, so `resolveMtfFieldGeometry` refines it by tracing.
 *
 * @param state - prepared optical state
 * @returns half field in degrees, before any image-format cap
 */
export function mtfModeledHalfField(state: PreparedOpticalState): number {
  return state.focusT === 0
    ? computeFieldGeometryAtState2(0, state.zoomT, state.lens.runtime, state.aberrationT).halfFieldDeg
    : halfFieldAtZoom(state.zoomT, state.lens.runtime);
}

/**
 * Declared format-corner radius in mm, without the full-frame fallback other callers accept.
 *
 * @param state - prepared optical state
 * @returns image-circle or format-diagonal radius, or null when the lens declares neither
 */
export function declaredFormatRadiusMm(state: PreparedOpticalState): number | null {
  const { imageCircleMm, imageFormat } = state.lens.source;
  const diameter = imageCircleMm ?? (isImageFormatId(imageFormat) ? IMAGE_FORMAT_BY_ID[imageFormat].diagonalMm : null);
  return diameter !== null && Number.isFinite(diameter) && diameter > 0 ? diameter / 2 : null;
}

/**
 * Resolve the MTF field axis for one state.
 *
 * The edge is first the largest height whose chief ray passes every clear aperture. Where that
 * falls short of a declared format corner, the rest of the beam still forms an image, so the edge
 * moves out to the last height that light reaches. The chief traced without aperture checks
 * places those heights, and it runs over surface zones beyond their rims: an extension is kept
 * only while its height rises steadily, since a height that turns back is no longer a position.
 * Without a declared format the chief's own edge stays the reference: the height where the beam
 * vanishes cannot be charted.
 *
 * @param state - prepared optical state
 * @param startDeg - starting edge estimate from `mtfModeledHalfField`
 * @param chiefHeight - real chief image height for this state's conjugate (see `mtfChiefHeight`)
 * @param beyond - heights past the chief's own clip; omitted to stop at the chief's edge
 * @returns reference and edge heights, or null when no chief ray reaches the image
 */
export function resolveMtfFieldGeometry(
  state: PreparedOpticalState,
  startDeg: number,
  chiefHeight: MtfChiefHeight,
  beyond?: MtfBeyondChiefClip,
): MtfFieldGeometry | null {
  const formatRadius = declaredFormatRadiusMm(state);
  let edge = findModeledEdge(chiefHeight, startDeg, formatRadius ?? Infinity);
  if (!edge || !(edge.height > 0)) return null;
  const chiefEdge = edge;
  if (beyond && formatRadius !== null && edge.height < formatRadius - HEIGHT_TOLERANCE_MM) {
    const extended = findModeledEdge(beyond.beam, edge.angle, formatRadius, BEAM_EDGE_BISECTIONS);
    if (extended && risesSteadily(beyond.reference, edge, extended)) edge = extended;
  }
  const capped = (height: number) => (formatRadius !== null ? Math.min(formatRadius, height) : height);
  return {
    referenceHeightMm: formatRadius ?? edge.height,
    modeledEdgeHeightMm: capped(edge.height),
    modeledEdgeAngleDeg: edge.angle,
    chiefEdgeHeightMm: capped(chiefEdge.height),
    chiefEdgeAngleDeg: chiefEdge.angle,
    basis: formatRadius !== null ? "format-corner" : "modeled-edge",
  };
}

/**
 * True when a chief height never falls between two field angles.
 *
 * @param chiefHeight - chief image height
 * @param from - inner angle and its height
 * @param to - outer angle and its height
 * @returns whether the sampled heights rise from `from` to `to`
 */
function risesSteadily(
  chiefHeight: MtfChiefHeight,
  from: { angle: number; height: number },
  to: { angle: number; height: number },
): boolean {
  let previous = from.height;
  for (let i = 1; i < EXTENSION_CHECK_STEPS; i++) {
    const height = chiefHeight(from.angle + ((to.angle - from.angle) * i) / EXTENSION_CHECK_STEPS);
    if (!(height >= previous - HEIGHT_TOLERANCE_MM)) return false;
    previous = height;
  }
  return to.height >= previous - HEIGHT_TOLERANCE_MM;
}

/**
 * Largest field angle that `chiefHeight` still gives a height for, or the angle whose chief
 * reaches `stopHeightMm` when that comes first.
 *
 * Walks outward from the starting estimate until the height is lost or passes `stopHeightMm`,
 * then bisects the boundary; an unreachable start scans inward instead. A chief that passes the
 * stop height is solved back to it, so the returned angle and height always describe the same
 * ray: a 1° walk step can otherwise land millimetres beyond the format corner where the chief
 * height rises steeply.
 *
 * @param chiefHeight - chief image height, NaN beyond the edge being sought
 * @param startDeg - starting estimate in degrees
 * @param stopHeightMm - height beyond which the edge no longer matters (the format corner)
 * @param bisections - halvings of the last walk step that place the edge
 * @returns edge angle and height, or null when no chief ray reaches the image
 */
function findModeledEdge(
  chiefHeight: MtfChiefHeight,
  startDeg: number,
  stopHeightMm: number,
  bisections = EDGE_BISECTIONS,
): { angle: number; height: number } | null {
  if (!(startDeg > 0)) return null;
  let good: { angle: number; height: number } | null = null;
  let bad: number | null = null;
  // Largest reached angle still at or below the stop height; the axis always qualifies.
  let below = { angle: 0, height: 0 };
  const reached = (angle: number, height: number) => {
    const point = { angle, height };
    if (height <= stopHeightMm) below = point;
    return point;
  };
  const startHeight = chiefHeight(startDeg);
  if (Number.isFinite(startHeight)) {
    good = reached(startDeg, startHeight);
    for (let angle = startDeg + EDGE_WALK_DEG; good.height < stopHeightMm; angle += EDGE_WALK_DEG) {
      const next = Math.min(angle, MAX_FIELD_LAUNCH_DEG - 1e-3);
      if (next <= good.angle) break;
      const height = chiefHeight(next);
      if (!Number.isFinite(height)) {
        bad = next;
        break;
      }
      good = reached(next, height);
    }
  } else {
    bad = startDeg;
    for (let i = EDGE_SCAN_STEPS - 1; i >= 1 && !good; i--) {
      const angle = (startDeg * i) / EDGE_SCAN_STEPS;
      const height = chiefHeight(angle);
      if (Number.isFinite(height)) good = reached(angle, height);
      else bad = angle;
    }
    if (!good) return null;
  }
  let edge: { angle: number; height: number } = good;
  if (bad !== null) {
    let blocked = bad;
    for (let i = 0; i < bisections; i++) {
      const mid: number = (edge.angle + blocked) / 2;
      const height = chiefHeight(mid);
      if (Number.isFinite(height)) edge = reached(mid, height);
      else blocked = mid;
    }
  }
  return edge.height > stopHeightMm ? solveStopHeightCrossing(chiefHeight, below, edge.angle, stopHeightMm) : edge;
}

/**
 * Bisect a reachable bracket for the angle whose chief reaches `stopHeightMm`. A clipped or
 * failed chief inside the bracket counts as beyond it, so the result stays reachable.
 *
 * @param chiefHeight - real chief image height, NaN when stopped
 * @param below - reached angle whose chief height is at or below the stop height
 * @param aboveDeg - reached angle whose chief height exceeds it
 * @param stopHeightMm - target height in mm
 * @returns the crossing, reported at the stop height when the chief lands within tolerance of it
 */
function solveStopHeightCrossing(
  chiefHeight: MtfChiefHeight,
  below: { angle: number; height: number },
  aboveDeg: number,
  stopHeightMm: number,
): { angle: number; height: number } {
  let lower = below;
  let upper = aboveDeg;
  for (let i = 0; i < EDGE_BISECTIONS && stopHeightMm - lower.height >= HEIGHT_TOLERANCE_MM; i++) {
    const mid = (lower.angle + upper) / 2;
    const height = chiefHeight(mid);
    if (Number.isFinite(height) && height <= stopHeightMm) lower = { angle: mid, height };
    else upper = mid;
  }
  // A continuous chief lands on the stop height; a jump across it leaves the edge honestly below.
  return stopHeightMm - lower.height < HEIGHT_TOLERANCE_MM ? { angle: lower.angle, height: stopHeightMm } : lower;
}

/**
 * Map fractional field requests to chief-ray angles.
 *
 * @param state - prepared optical state
 * @param geometry - field axis from `resolveMtfFieldGeometry`
 * @param fractions - requested fractions of the reference height
 * @param chiefHeight - chief image height for this state's conjugate, traced without aperture
 *   checks so heights beyond the chief's own clip still resolve
 * @param infinity - true to use the shared exact infinity inversion up to the chief's own clip
 * @returns one target per requested fraction, in request order
 */
export function resolveMtfFieldTargets(
  state: PreparedOpticalState,
  geometry: MtfFieldGeometry,
  fractions: readonly number[],
  chiefHeight: MtfChiefHeight,
  infinity: boolean,
): MtfFieldTarget[] {
  const edgeTolerance = geometry.modeledEdgeHeightMm * 1e-9 + 1e-9;
  const targets: MtfFieldTarget[] = fractions.map((fraction) => {
    const targetImageHeightMm = fraction * geometry.referenceHeightMm;
    return {
      fraction,
      targetImageHeightMm,
      fieldAngleDeg: targetImageHeightMm < HEIGHT_TOLERANCE_MM ? 0 : null,
      outsideModel: targetImageHeightMm > geometry.modeledEdgeHeightMm + edgeTolerance,
    };
  });
  const solvable = targets.filter((target) => !target.outsideModel && target.fieldAngleDeg === null);
  if (!solvable.length) return targets;
  /** Tabulate the chief across an angle range once, then solve each target inside its bracket. */
  const solveOnChief = (pending: readonly MtfFieldTarget[], fromDeg: number, toDeg: number) => {
    if (!pending.length) return;
    const angles = Array.from(
      { length: FINITE_TABLE_STEPS + 1 },
      (_, i) => fromDeg + ((toDeg - fromDeg) * i) / FINITE_TABLE_STEPS,
    );
    const heights = angles.map((angle) => (angle === 0 ? 0 : chiefHeight(angle)));
    for (const target of pending) {
      if (Math.abs(target.targetImageHeightMm - geometry.modeledEdgeHeightMm) < HEIGHT_TOLERANCE_MM) {
        target.fieldAngleDeg = geometry.modeledEdgeAngleDeg;
        continue;
      }
      const segment = heights.findIndex(
        (height, i) =>
          i < FINITE_TABLE_STEPS &&
          Number.isFinite(height) &&
          Number.isFinite(heights[i + 1]) &&
          (height - target.targetImageHeightMm) * (heights[i + 1] - target.targetImageHeightMm) <= 0,
      );
      if (segment < 0) continue;
      const solution = solveScalarRoot(
        (angle) => {
          const height = angle === 0 ? 0 : chiefHeight(angle);
          return Number.isFinite(height) ? height - target.targetImageHeightMm : null;
        },
        {
          initialGuess: (angles[segment] + angles[segment + 1]) / 2,
          initialHalfWidth: (angles[segment + 1] - angles[segment]) / 2,
          min: angles[segment],
          max: angles[segment + 1],
          maxExpansions: 0,
          scanSamples: 2,
          residualTolerance: HEIGHT_TOLERANCE_MM,
        },
      );
      target.fieldAngleDeg = solution.status === "converged" ? solution.root : null;
    }
  };
  if (!infinity) {
    solveOnChief(solvable, 0, geometry.modeledEdgeAngleDeg);
    return targets;
  }
  // The shared inversion serves heights up to the chief's own clip. Past it the inversion's chief ignores rims in
  // its own way and can settle on the clip itself, so those heights are solved on the chief traced here.
  const inside = solvable.filter((target) => target.targetImageHeightMm <= geometry.chiefEdgeHeightMm + edgeTolerance);
  if (inside.length) {
    // The inversion scans its geometry's half field; widen it to the traced edge.
    const L = state.lens.runtime;
    const shared = computeFieldGeometryAtState2(state.focusT, state.zoomT, L, state.aberrationT);
    const angles = solveFieldAnglesForImageHeightsAccurate2(
      inside.map((target) => target.targetImageHeightMm),
      [...state.z],
      state.focusT,
      state.zoomT,
      L,
      { ...shared, halfFieldDeg: geometry.chiefEdgeAngleDeg },
      state.aberrationT,
    );
    inside.forEach((target, i) => {
      const angle = angles[i];
      // The inversion reports |angle| to 1e-4 mm; the chief's own edge is always reachable.
      target.fieldAngleDeg =
        angle !== null && Number.isFinite(angle)
          ? Math.min(Math.abs(angle), geometry.chiefEdgeAngleDeg)
          : Math.abs(target.targetImageHeightMm - geometry.chiefEdgeHeightMm) < HEIGHT_TOLERANCE_MM
            ? geometry.chiefEdgeAngleDeg
            : null;
    });
  }
  solveOnChief(
    solvable.filter((target) => !inside.includes(target)),
    geometry.chiefEdgeAngleDeg,
    geometry.modeledEdgeAngleDeg,
  );
  return targets;
}

/**
 * Radial image height of the real chief ray at the reference wavelength: the solved chief at
 * infinity, the stop-aimed chief from a documented finite source. A chief stopped by any clear
 * aperture reports NaN unless the apertures are ignored, so both conjugates share one edge rule.
 *
 * @param state - prepared optical state
 * @param options - MTF request
 * @param support - support record, including any finite conjugate
 * @param checkApertures - false to trace the chief through every surface regardless of its rim
 * @returns radial chief height in mm, or NaN when the chief cannot be established or clips
 */
export function mtfChiefHeight(
  state: PreparedOpticalState,
  options: MtfOptions,
  support: MtfSupport,
  checkApertures = true,
): MtfChiefHeight {
  const checked = mtfTraceOptions(state, options, support, support.spectralLines[0]);
  const traceOptions = checkApertures ? checked : { ...checked, checkSemiDiameter: false, stopOnClip: false };
  return (fieldAngleDeg) => {
    const launch = prepareMtfFieldLaunch(state, options, support, fieldAngleDeg);
    if (!launch) return NaN;
    const point = mtfImagePoint(state, traceEngineRay2(state, mtfLaunchRay(launch, 0, 0), traceOptions));
    return point ? Math.hypot(point.x, point.y) : NaN;
  };
}

/**
 * Chief image height of every field whose beam still reaches the image.
 *
 * Where a clear aperture stops the chief ray, the part of the beam that passes still forms an
 * image. The chief is then traced without aperture checks and keeps defining the image height (a
 * flux centroid would move with coma), and the field counts for as long as a footprint scan
 * finds transmitted rays.
 *
 * @param state - prepared optical state
 * @param options - MTF request
 * @param support - support record, including any finite conjugate
 * @returns radial chief height in mm, or NaN when no light reaches the image at that field or the unchecked chief
 *   cannot be traced
 */
export function mtfBeamHeight(state: PreparedOpticalState, options: MtfOptions, support: MtfSupport): MtfChiefHeight {
  const transmitted = mtfChiefHeight(state, options, support);
  const reference = mtfChiefHeight(state, options, support, false);
  return (fieldAngleDeg) => {
    const height = transmitted(fieldAngleDeg);
    if (Number.isFinite(height)) return height;
    const unchecked = reference(fieldAngleDeg);
    if (!Number.isFinite(unchecked)) return NaN;
    const launch = prepareMtfFieldLaunch(state, options, support, fieldAngleDeg);
    return launch && findMtfFieldFootprint(state, options, support, launch, BEAM_PROBE_GROWTHS) ? unchecked : NaN;
  };
}

/**
 * Order field requests coarse-to-fine: endpoints first, then repeatedly the request farthest
 * from everything already scheduled, so progressive results outline the whole curve early.
 *
 * @param fractions - requested fractions
 * @returns request indices in processing order
 */
export function mtfFieldProcessingOrder(fractions: readonly number[]): number[] {
  const remaining = fractions.map((_, index) => index);
  if (remaining.length <= 2) return remaining;
  const byValue = [...remaining].sort((a, b) => fractions[a] - fractions[b]);
  const order = [byValue[0], byValue[byValue.length - 1]];
  const gap = remaining.map((index) =>
    Math.min(Math.abs(fractions[index] - fractions[order[0]]), Math.abs(fractions[index] - fractions[order[1]])),
  );
  const scheduled = new Set(order);
  while (order.length < fractions.length) {
    let best = -1;
    for (const index of remaining) {
      if (scheduled.has(index)) continue;
      // Ties go to the lower fraction so the order is deterministic and center-first.
      if (
        best < 0 ||
        gap[index] > gap[best] + 1e-12 ||
        (Math.abs(gap[index] - gap[best]) <= 1e-12 && fractions[index] < fractions[best])
      )
        best = index;
    }
    order.push(best);
    scheduled.add(best);
    for (const index of remaining) gap[index] = Math.min(gap[index], Math.abs(fractions[index] - fractions[best]));
  }
  return order;
}
