/** Object-to-image distance of the current on-axis paraxial conjugate. */
import type { RuntimeLens } from "../../types/optics.js";
import type { PreparedGeometry } from "../types.js";
import { paraxialInFocusVergence } from "../field/geometry.js";
import { compiledLensFromRuntime, findCompiledLens } from "../prescription/identity.js";
import { runtimeView } from "../prescription/runtimeView.js";
import { FOCUS_INFINITY_CUTOFF, focusDistanceAt } from "./focusDistance.js";
import { resolveControlledThickness } from "./layout.js";
import { OpticsPreparationError } from "./preparationError.js";
import { prepareState, prepareStateUncached } from "./preparedGeometry.js";
import { clampStationControl } from "./stationTables.js";

export type FocusReading =
  | { kind: "finite"; distanceM: number }
  | { kind: "infinity" | "beyond-infinity" | "unavailable" | "unspecified" };

const infinity: FocusReading = { kind: "infinity" };

/** Null means the control moves no focus gap at this zoom, or the path uses folded optics. */
export function modeledFocusReading(state: PreparedGeometry): FocusReading | null {
  if (state.focusT < FOCUS_INFINITY_CUTOFF) return infinity;
  if (state.lens.flags.isFoldedOptics) return null;
  const { lens } = state;
  const moved = state.surfaces.some((surface) => {
    const index = surface.physicalIndex;
    const range = lens.variables.bySurfaceIndex[index];
    if (!range) return false;
    const infinityGap = resolveControlledThickness(
      surface.base.d,
      range,
      lens.aberrationControl?.varBySurfaceIndex[index],
      lens.flags.isZoom,
      0,
      state.zoomT,
      state.aberrationT,
      lens.variables.focusPositions,
    );
    return surface.d !== infinityGap;
  });
  if (!moved) return null;
  const vergence = paraxialInFocusVergence(state);
  if (vergence === null) return { kind: "unavailable" };
  if (vergence === 0) return infinity;
  if (vergence < 0) return { kind: "beyond-infinity" };
  const distanceM = (1 / vergence + state.totalTrack) / 1000;
  return Number.isFinite(distanceM) ? { kind: "finite", distanceM } : { kind: "unavailable" };
}

function conventionalReading(t: number, L: RuntimeLens, zoomT: number): FocusReading {
  const distanceM = focusDistanceAt(t, L, zoomT);
  return distanceM === null ? { kind: "unspecified" } : { kind: "finite", distanceM };
}

/** Read the same geometry as the analysis, including the current aberration spacing. */
export function focusReadingForState(state: PreparedGeometry): FocusReading {
  return modeledFocusReading(state) ?? conventionalReading(state.focusT, runtimeView(state.lens), state.zoomT);
}

/** Runtime display adapter. Preserve the cutoff and fallback for unregistered compatibility views. */
export function focusReadingAt(t: number, L: RuntimeLens, zoomT = 0, aberrationT = 0): FocusReading {
  if (t < FOCUS_INFINITY_CUTOFF) return infinity;
  const lens = findCompiledLens(L);
  if (lens && !L.isFoldedOptics) {
    try {
      const reading = modeledFocusReading(
        prepareState(lens, clampStationControl(t), clampStationControl(zoomT), aberrationT),
      );
      if (reading !== null) return reading;
    } catch (error) {
      if (!(error instanceof OpticsPreparationError)) throw error;
      return { kind: "unavailable" };
    }
  }
  return conventionalReading(t, L, zoomT);
}

/** Enumerate native stops for a rejected edit. Trial geometries bypass the interactive LRU. */
export function* focusStepReadings(L: RuntimeLens, zoomT: number, aberrationT: number) {
  const lens = compiledLensFromRuntime(L);
  const step = L.focusStep > 0 ? L.focusStep : 1; // Native range default for an invalid step.
  const count = Math.floor(1 / step + 1e-10);
  for (let index = Math.max(1, Math.ceil(FOCUS_INFINITY_CUTOFF / step)); index <= count; index++) {
    const focusT = Math.min(1, Number((index * step).toPrecision(15)));
    let kind: FocusReading["kind"];
    try {
      const state = prepareStateUncached(lens, focusT, zoomT, aberrationT);
      kind = focusReadingForState(state).kind;
    } catch (error) {
      if (!(error instanceof OpticsPreparationError)) throw error;
      kind = "unavailable";
    }
    yield { focusT, kind };
  }
}
