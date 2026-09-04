/**
 * Bulk-material absorption helpers for exact ray traces.
 *
 * Authored coefficients use the Beer-Lambert intensity convention I/I0 = exp(-alpha * distance),
 * with alpha in inverse millimeters and the traced 3D path length in millimeters.
 */

import type { ElementData, RuntimeLens } from "../../types/optics.js";
import { LINE_NM } from "../spectralLines.js";
import { sampleSpectrum } from "../math/spectralSampling.js";
import { mediumAfterEncounter, type MediumEncounterHit } from "./encounterMedia.js";

const ABSORPTION_BY_ELEMENT_ID = new WeakMap<RuntimeLens, ReadonlyMap<number, ElementData>>();

function absorptionByElementId(L: RuntimeLens): ReadonlyMap<number, ElementData> {
  const cached = ABSORPTION_BY_ELEMENT_ID.get(L);
  if (cached) return cached;
  const entries = new Map<number, ElementData>();
  for (const element of L.elements) {
    if (element.absorptionCoefficientPerMm !== undefined || element.absorptionSpectrumPerMm)
      entries.set(element.id, element);
  }
  ABSORPTION_BY_ELEMENT_ID.set(L, entries);
  return entries;
}

/** Null denotes missing spectral evidence, including wavelengths outside the authored range. */
export function bulkAbsorptionCoefficient(L: RuntimeLens, elementId: number, wavelengthNm: number): number | null {
  const element = absorptionByElementId(L).get(elementId);
  return element?.absorptionSpectrumPerMm
    ? sampleSpectrum(element.absorptionSpectrumPerMm, wavelengthNm)
    : (element?.absorptionCoefficientPerMm ?? null);
}

/**
 * Compute bulk-material intensity transmission along an exact trace.
 *
 * Tracks encounter-side material ownership, retaining the medium on reflection.
 * This compatibility scalar multiplies only known losses. Use spectralThroughput
 * for explicit unknown/coating status; this is never a measured total transmission.
 *
 * @param L - runtime lens containing element absorption coefficients
 * @param hits - exact surface hits in optical encounter order
 * @returns intensity transmission in `[0, 1]`
 */
export function bulkTransmissionForTrace(
  L: RuntimeLens,
  hits: readonly MediumEncounterHit[],
  wavelengthNm: number = LINE_NM.d,
): number {
  const coefficients = absorptionByElementId(L);
  if (coefficients.size === 0 || hits.length < 2) return 1;
  // Legacy partial hit records cannot establish reverse encounter sides.
  if (L.isFoldedOptics && hits.some((hit) => !hit.normal || !hit.incidentDirection)) return 1;

  let transmission = 1;
  let medium: number | null = null;
  for (let i = 0; i < hits.length - 1; i++) {
    medium = mediumAfterEncounter(L.S, hits[i], medium);
    if (medium === null) continue;
    const coefficient = bulkAbsorptionCoefficient(L, L.S[medium].elemId, wavelengthNm);
    if (coefficient === null) continue;

    const from = hits[i].point;
    const to = hits[i + 1].point;
    const distance = Math.hypot(to[0] - from[0], to[1] - from[1], to[2] - from[2]);
    if (!Number.isFinite(distance) || distance <= 0) continue;
    transmission *= Math.exp(-coefficient * distance);
  }

  return Number.isFinite(transmission) ? Math.min(1, Math.max(0, transmission)) : 0;
}
