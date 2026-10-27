/**
 * Paraxial f-numbers of the current state, as OpticStudio defines them.
 *
 * - Image-space f-number: EFL / EPD, both paraxial, of the current state.
 * - Paraxial working f-number: 1 / (2 n′ |u′|) of the paraxial marginal ray from the axial object point at the
 *   current object distance through the stop rim.
 *
 * The current object distance is the paraxial object plane the current image plane is conjugate to
 * (`paraxialObjectVergence`); infinity focus is an infinite object. The real-ray working f-number is an analysis
 * (`analysis/summary/fNumbers.ts`). Folded paths have no paraxial working f-number: the sequential kernel does not
 * follow a fold.
 */

import type { RuntimeLens } from "../../types/optics.js";
import type { PreparedGeometry } from "../types.js";
import { traceParaxialSurfaces } from "../math/paraxial.js";
import { paraxialObjectVergence } from "../field/geometry.js";
import { compiledLensFromRuntime } from "../prescription/identity.js";
import { prepareState } from "../state/preparedGeometry.js";

/**
 * Image-space f-number EFL / EPD of a sequential state, both paraxial.
 *
 * @param state - prepared geometry for the current controls
 * @param stopSemiDiameterMm - current stop radius in mm
 * @returns |EFL| × |stop height ratio| / (2 × stop radius), or null for a folded path or a degenerate trace
 */
export function imageSpaceFNumber(state: PreparedGeometry, stopSemiDiameterMm: number): number | null {
  if (state.lens.flags.isFoldedOptics || !(stopSemiDiameterMm > 0)) return null;
  const stopRatio = traceParaxialSurfaces(state.surfaces, 1, 0, { stopAt: state.lens.stop.surfaceIndex }).y;
  const image = traceParaxialSurfaces(state.surfaces, 1, 0, { skipLastTransfer: true });
  // EFL = −1/u′ of the unit collimated ray; EPD = 2 × stop radius / stop height ratio.
  return finitePositive(Math.abs(stopRatio / image.u) / (2 * stopSemiDiameterMm));
}

/**
 * Paraxial working f-number 1 / (2 n′ |u′|) of the paraxial marginal ray at the current object distance.
 *
 * The ray leaves the axial object point at distance s in front of the first vertex (height 1 there, slope 1/s), is
 * scaled to cross the stop at its rim, and u′ is its image-space slope in a medium of index n′. At infinity this is
 * EFL / (2 n′ × entrance-pupil radius).
 *
 * @param state - prepared geometry for the current controls
 * @param stopSemiDiameterMm - current stop radius in mm
 * @returns paraxial working f-number, or null for a folded path or a degenerate trace
 */
export function paraxialWorkingFNumber(state: PreparedGeometry, stopSemiDiameterMm: number): number | null {
  if (state.lens.flags.isFoldedOptics || !(stopSemiDiameterMm > 0)) return null;
  const vergence = paraxialObjectVergence(state);
  const atStop = traceParaxialSurfaces(state.surfaces, 1, vergence, { stopAt: state.lens.stop.surfaceIndex }).y;
  const image = traceParaxialSurfaces(state.surfaces, 1, vergence, { skipLastTransfer: true });
  const marginalSlope = (stopSemiDiameterMm / Math.abs(atStop)) * Math.abs(image.u);
  return finitePositive(1 / (2 * image.n * marginalSlope));
}

/**
 * Paraxial working f-number for a RuntimeLens state (`paraxialWorkingFNumber`).
 *
 * @param stopSemiDiameterMm - current stop radius in mm
 * @param focusT - normalized focus slider, 0=infinity and 1=close focus
 * @param zoomT - normalized zoom slider, 0=wide and 1=tele
 * @param L - runtime lens object
 * @param aberrationT - normalized aberration spacing slider
 * @returns paraxial working f-number, or null where it is undefined
 */
export function paraxialWorkingFNumberForRuntimeLens(
  stopSemiDiameterMm: number,
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  aberrationT = 0,
): number | null {
  return paraxialWorkingFNumber(
    prepareState(compiledLensFromRuntime(L), focusT, zoomT, aberrationT),
    stopSemiDiameterMm,
  );
}

function finitePositive(value: number): number | null {
  return Number.isFinite(value) && value > 0 ? value : null;
}
