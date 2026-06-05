import type { RuntimeLens, SurfaceData } from "../types/optics.js";

type StopObstructionLens = Pick<RuntimeLens, "isFoldedOptics" | "S" | "stopIdx">;

function finitePositive(value: number | undefined): value is number {
  return typeof value === "number" && Number.isFinite(value) && value > 0;
}

function authoredCentralObstructionFromSurface(surface: SurfaceData): number {
  const innerSd = surface.innerSd ?? 0;

  if (surface.interaction?.type === "block") {
    return innerSd <= 0 && finitePositive(surface.sd) ? surface.sd : 0;
  }

  if (surface.interaction?.type === "reflect") {
    if (innerSd > 0 && Number.isFinite(innerSd)) return innerSd;
  }

  return 0;
}

function fallbackInactiveMirrorObstructionFromSurface(surface: SurfaceData): number {
  const innerSd = surface.innerSd ?? 0;
  if (surface.interaction?.type !== "reflect") return 0;
  if (surface.interaction.inactiveSide !== "block") return 0;
  return innerSd <= 0 && finitePositive(surface.sd) ? surface.sd : 0;
}

/**
 * Resolve the central blocked semi-diameter that makes a stop behave as an annulus.
 *
 * Explicit `STO.innerSd` wins. Otherwise folded systems infer the blocked core from
 * solid central blockers and annular reflective holes. Solid inactive-side mirrors
 * are only a fallback for fixtures that do not model a separate blocker surface.
 */
export function stopInnerBlockedSemiDiameter(L: StopObstructionLens): number {
  const stop = L.S[L.stopIdx];
  if (stop && finitePositive(stop.innerSd)) return stop.innerSd;
  if (!L.isFoldedOptics) return 0;

  const authoredObstruction = L.S.reduce(
    (max, surface) => Math.max(max, authoredCentralObstructionFromSurface(surface)),
    0,
  );
  if (authoredObstruction > 0) return authoredObstruction;

  return L.S.reduce((max, surface) => Math.max(max, fallbackInactiveMirrorObstructionFromSurface(surface)), 0);
}
