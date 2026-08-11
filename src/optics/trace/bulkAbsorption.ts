/**
 * Bulk-material absorption helpers for exact ray traces.
 *
 * Authored coefficients use the Beer-Lambert intensity convention I/I0 = exp(-alpha * distance),
 * with alpha in inverse millimeters and the traced 3D path length in millimeters.
 */

import type { RuntimeLens } from "../../types/optics.js";
import type { Vec3 } from "../types.js";

interface AbsorptionTraceHit {
  /** Engine tracer spelling. */
  surfaceIndex?: number;
  /** Runtime exact-tracer spelling retained by the compatibility facade. */
  surfaceIdx?: number;
  point: Vec3;
}

const ABSORPTION_BY_ELEMENT_ID = new WeakMap<RuntimeLens, ReadonlyMap<number, number>>();

function absorptionByElementId(L: RuntimeLens): ReadonlyMap<number, number> {
  const cached = ABSORPTION_BY_ELEMENT_ID.get(L);
  if (cached) return cached;

  const coefficients = new Map<number, number>();
  for (const element of L.elements) {
    const coefficient = element.absorptionCoefficientPerMm;
    if (coefficient !== undefined && coefficient > 0) coefficients.set(element.id, coefficient);
  }
  ABSORPTION_BY_ELEMENT_ID.set(L, coefficients);
  return coefficients;
}

/**
 * Compute bulk-material intensity transmission along an exact trace.
 *
 * The medium after a sequential surface is identified by that surface's `elemId`; therefore the
 * distance to the next hit is the path length through that element. Validation rejects authored
 * absorption on folded/generalized prescriptions until encounter-side medium accounting exists;
 * the folded guard below is a defensive fallback for manually constructed runtime fixtures.
 *
 * @param L - runtime lens containing element absorption coefficients
 * @param hits - exact surface hits in optical encounter order
 * @returns intensity transmission in `[0, 1]`
 */
export function bulkTransmissionForTrace(L: RuntimeLens, hits: readonly AbsorptionTraceHit[]): number {
  const coefficients = absorptionByElementId(L);
  if (coefficients.size === 0 || hits.length < 2 || L.isFoldedOptics) return 1;

  let transmission = 1;
  for (let i = 0; i < hits.length - 1; i++) {
    const surfaceIndex = hits[i].surfaceIndex ?? hits[i].surfaceIdx ?? -1;
    const elementId = L.S[surfaceIndex]?.elemId ?? 0;
    const coefficient = coefficients.get(elementId);
    if (coefficient === undefined) continue;

    const from = hits[i].point;
    const to = hits[i + 1].point;
    const distance = Math.hypot(to[0] - from[0], to[1] - from[1], to[2] - from[2]);
    if (!Number.isFinite(distance) || distance <= 0) continue;
    transmission *= Math.exp(-coefficient * distance);
  }

  return Number.isFinite(transmission) ? Math.min(1, Math.max(0, transmission)) : 0;
}
