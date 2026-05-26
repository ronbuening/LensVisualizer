import { FLAT_R_THRESHOLD } from "../constants.js";
import type { CompiledStateSurface } from "../types.js";

export interface ParaxialState {
  y: number;
  u: number;
  n: number;
}

export interface ParaxialTraceOptions {
  stopAt?: number;
  skipLastTransfer?: boolean;
  recordHeights?: boolean;
  allowReflect?: boolean;
  requireSameIndexRefraction?: boolean;
}

export interface ParaxialTraceResult extends ParaxialState {
  heights: number[] | null;
}

export function transferParaxialRay2({ y, u, n }: ParaxialState, distance: number): ParaxialState {
  return { y: y + distance * u, u, n };
}

export function interactParaxialSurface2(
  { y, u, n }: ParaxialState,
  surface: Pick<CompiledStateSurface, "R" | "nd" | "interaction">,
  {
    allowReflect = false,
    requireSameIndexRefraction = false,
  }: { allowReflect?: boolean; requireSameIndexRefraction?: boolean } = {},
): ParaxialState | null {
  const interactionType = surface.interaction.type;
  if (interactionType === "block") return null;

  if (interactionType === "reflect") {
    if (!allowReflect) return null;
    const reflectedU = Math.abs(surface.R) < FLAT_R_THRESHOLD ? -u - (2 * y) / surface.R : -u;
    return { y, u: reflectedU, n };
  }

  const nextN = surface.nd === 1 ? 1 : surface.nd;
  if (requireSameIndexRefraction && Math.abs(nextN - n) > 1e-12) return null;
  if (nextN === n) return { y, u, n };

  const refractedU =
    Math.abs(surface.R) < FLAT_R_THRESHOLD ? (n * u - (y * (nextN - n)) / surface.R) / nextN : (n * u) / nextN;
  return { y, u: refractedU, n: nextN };
}

export function traceParaxialSurfaces2(
  surfaces: readonly CompiledStateSurface[],
  y0: number,
  u0: number,
  {
    stopAt,
    skipLastTransfer = false,
    recordHeights = false,
    allowReflect = false,
    requireSameIndexRefraction = false,
  }: ParaxialTraceOptions = {},
): ParaxialTraceResult {
  const tracedCount = stopAt !== undefined ? stopAt : surfaces.length;
  const heights: number[] | null = recordHeights ? [] : null;
  let state: ParaxialState = { y: y0, u: u0, n: 1 };

  for (let i = 0; i < tracedCount; i++) {
    if (recordHeights) heights!.push(state.y);
    const surface = surfaces[i];
    const nextState = interactParaxialSurface2(state, surface, { allowReflect, requireSameIndexRefraction });
    if (nextState === null) return { ...state, heights };
    state = nextState;
    const isLast = i === tracedCount - 1;
    if (isLast && skipLastTransfer) continue;
    if (i < surfaces.length - 1) state = transferParaxialRay2(state, surface.d);
  }

  return { ...state, heights };
}
