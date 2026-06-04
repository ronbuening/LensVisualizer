/**
 * Diagram render diagnostics — classifies element visibility and surface geometry warnings.
 *
 * Gives the UI structured reasons for hidden or clipped elements without mixing presentation state into the
 * optics engine.
 */

import type {
  ElementRenderDiagnostics,
  ElementRenderTrimCause,
  ElementSpan,
  SurfaceRenderDiagnostics,
} from "../../types/optics.js";
import { FLAT_R_THRESHOLD } from "../constants.js";
import { sharedMaterialBand } from "../internal/apertureBands.js";
import type { CompiledStateSurface, PreparedOpticalState } from "../types.js";
import { surfaceSag2 } from "./surfaceOutline.js";

const MAX_VISIBLE_GAP_INTRUSION_FRAC = 1.0;
const BISECT_ITERATIONS = 30;

function surfaceDiagnostics(
  surface: CompiledStateSurface,
  declaredSD: number,
  renderSD: number,
  trimCause: ElementRenderTrimCause,
): SurfaceRenderDiagnostics {
  return {
    surfaceIndex: surface.physicalIndex,
    surfaceLabel: surface.label,
    declaredSD,
    renderSD,
    trimAmount: Math.max(0, declaredSD - renderSD),
    trimCause,
  };
}

function applyTrim(
  currentSD: number,
  currentCause: ElementRenderTrimCause,
  candidateSD: number,
  candidateCause: ElementRenderTrimCause,
): [number, ElementRenderTrimCause] {
  return candidateSD < currentSD ? [candidateSD, candidateCause] : [currentSD, currentCause];
}

function slopeTrimHeight2(surface: CompiledStateSurface, sd: number, maxSlopeTan: number): number {
  if (maxSlopeTan <= 0) return sd;
  if (Math.abs(surface.profile.slope(sd)) <= maxSlopeTan) return sd;
  let lo = 0;
  let hi = sd;
  for (let j = 0; j < BISECT_ITERATIONS; j++) {
    const mid = (lo + hi) / 2;
    if (Math.abs(surface.profile.slope(mid)) > maxSlopeTan) hi = mid;
    else lo = mid;
  }
  return (lo + hi) / 2;
}

function initialRenderSD2(
  state: PreparedOpticalState,
  surfaceIndex: number,
  declaredSD: number,
): [number, ElementRenderTrimCause] {
  const surface = state.surfaces[surfaceIndex];
  let renderSD = declaredSD;
  let trimCause: ElementRenderTrimCause = "none";
  const absR = Math.abs(surface.R);
  const K = surface.asphere?.K || 0;
  /* Conic-domain limit for positive K: keep sampled SVG paths inside the real-valued square root. */
  const hMax = K > 0 && absR < FLAT_R_THRESHOLD ? (absR / Math.sqrt(1 + K)) * 0.98 : Infinity;

  [renderSD, trimCause] = applyTrim(renderSD, trimCause, hMax, "conic-limit");
  [renderSD, trimCause] = applyTrim(
    renderSD,
    trimCause,
    slopeTrimHeight2(surface, declaredSD, state.lens.display.maxRimTan),
    "slope",
  );

  return [renderSD, trimCause];
}

function boundaryIntrusion2(
  state: PreparedOpticalState,
  rearSurfaceIndex: number,
  frontSurfaceIndex: number,
  height: number,
): number {
  return surfaceSag2(state.surfaces[rearSurfaceIndex], height) - surfaceSag2(state.surfaces[frontSurfaceIndex], height);
}

function boundaryTrimHeight2(
  state: PreparedOpticalState,
  rearSurfaceIndex: number,
  frontSurfaceIndex: number,
  sd: number,
  maxIntrusion: number,
): number {
  if (boundaryIntrusion2(state, rearSurfaceIndex, frontSurfaceIndex, sd) <= maxIntrusion) return sd;
  let lo = 0;
  let hi = sd;
  for (let i = 0; i < BISECT_ITERATIONS; i++) {
    const mid = (lo + hi) / 2;
    if (boundaryIntrusion2(state, rearSurfaceIndex, frontSurfaceIndex, mid) > maxIntrusion) hi = mid;
    else lo = mid;
  }
  return (lo + hi) / 2;
}

function hasInterveningAnnularSeparation2(
  state: PreparedOpticalState,
  fromSurfaceIndex: number,
  toSurfaceIndex: number,
  targetSurfaceIndex: number,
  targetRenderSD: number,
): boolean {
  const target = state.surfaces[targetSurfaceIndex];
  for (let i = fromSurfaceIndex + 1; i < toSurfaceIndex; i++) {
    const intervening = state.surfaces[i];
    if (intervening.innerSd === null || intervening.innerSd === undefined) continue;
    const sharedBand = sharedMaterialBand(
      { sd: intervening.sd, innerSd: intervening.innerSd },
      { sd: targetRenderSD, innerSd: target.innerSd },
    );
    /* An intervening annular mirror separates the SVG gap only if the target
     * lives entirely in the central hole. In that case trimming against the
     * surrounding mirror shell would hide valid clear-aperture geometry. */
    if (!sharedBand) return true;
  }
  return false;
}

/**
 * Compute per-element render trims and warnings for the current prepared state.
 *
 * Trims are display-only. They prevent SVG paths from sampling outside conic domains
 * or visibly overlapping adjacent elements, while the physical trace continues to use
 * the authored semi-diameters and surface profiles.
 *
 * @param state - prepared optical state with current surface positions and display limits
 * @returns one diagnostic record per rendered element span
 */
export function computeElementRenderDiagnosticsForState2(state: PreparedOpticalState): ElementRenderDiagnostics[] {
  const L = state.lens.runtime;
  return L.ES.map(([eid, s1, s2]: ElementSpan) => {
    const front = state.surfaces[s1];
    const rear = state.surfaces[s2];
    const sd1 = front.sd;
    const sd2 = rear.sd;
    let [renderSD1, cause1] = initialRenderSD2(state, s1, sd1);
    let [renderSD2, cause2] = initialRenderSD2(state, s2, sd2);

    if (s1 > 0 && state.lens.display.gapSagFrac > 0 && surfaceSag2(front, renderSD1) < 0) {
      /* Negative front sag intrudes toward the previous air gap; trim before SVG surfaces overlap. */
      const prevES = L.ES.findLast(([, , ps2]: ElementSpan) => ps2 < s1 && state.surfaces[ps2].nd === 1.0);
      const gapBefore = prevES ? front.z - state.surfaces[prevES[2]].z : state.surfaces[s1 - 1].d;
      const maxIntrusion =
        Math.max(gapBefore, 0) * Math.min(state.lens.display.gapSagFrac, MAX_VISIBLE_GAP_INTRUSION_FRAC);
      if (prevES) {
        const ps2 = prevES[2];
        const [prevSD] = initialRenderSD2(state, ps2, state.surfaces[ps2].sd);
        const sharedBand = sharedMaterialBand(
          { sd: prevSD, innerSd: state.surfaces[ps2].innerSd },
          { sd: renderSD1, innerSd: front.innerSd },
        );
        /* Evaluate SVG gap trimming at the shared radial material band, not at
         * min(sd). This prevents annular mirror shells from trimming correctors
         * drawn inside their clear central openings. */
        if (
          sharedBand &&
          !hasInterveningAnnularSeparation2(state, ps2, s1, s1, renderSD1) &&
          boundaryIntrusion2(state, ps2, s1, sharedBand.outer) > maxIntrusion
        ) {
          renderSD1 = boundaryTrimHeight2(state, ps2, s1, renderSD1, maxIntrusion);
          cause1 = "gap";
        }
      }
    }

    if (rear.nd === 1.0 && state.lens.display.gapSagFrac > 0 && surfaceSag2(rear, renderSD2) > 0) {
      /* Positive rear sag intrudes toward the next element; mirror the front-gap trim test. */
      const nextES = L.ES.find(([, ns1]: ElementSpan) => ns1 > s2);
      const gapAfter = nextES ? state.surfaces[nextES[1]].z - rear.z : rear.d;
      const maxIntrusion =
        Math.max(gapAfter, 0) * Math.min(state.lens.display.gapSagFrac, MAX_VISIBLE_GAP_INTRUSION_FRAC);
      if (nextES) {
        const ns1 = nextES[1];
        const [nextSD] = initialRenderSD2(state, ns1, state.surfaces[ns1].sd);
        const sharedBand = sharedMaterialBand(
          { sd: renderSD2, innerSd: rear.innerSd },
          { sd: nextSD, innerSd: state.surfaces[ns1].innerSd },
        );
        if (
          sharedBand &&
          !hasInterveningAnnularSeparation2(state, s2, ns1, s2, renderSD2) &&
          boundaryIntrusion2(state, s2, ns1, sharedBand.outer) > maxIntrusion
        ) {
          renderSD2 = boundaryTrimHeight2(state, s2, ns1, renderSD2, maxIntrusion);
          cause2 = "gap";
        }
      }
    }

    return {
      eid,
      front: surfaceDiagnostics(front, sd1, renderSD1, cause1),
      rear: surfaceDiagnostics(rear, sd2, renderSD2, cause2),
    };
  });
}
