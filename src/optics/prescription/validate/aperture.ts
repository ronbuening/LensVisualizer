/** Physical aperture bands, explicit span exceptions and embedded stop containment. */
import type { UntrustedLensData, ExplicitElementSpan } from "./context.js";
import {
  centralOpeningSemiDiameter,
  sharedMaterialBand,
  surfaceFitsInsideCentralOpening,
} from "../../geometry/apertureBands.js";
import { FLAT_R_THRESHOLD } from "../../geometry/surfaceProfile.js";

export function annularNestedOpeningForSpan(
  data: UntrustedLensData,
  S: UntrustedLensData[],
  from: number,
  to: number,
): number | null {
  /* Mirror-only exception: a declared annular element span can contain central
   * corrector surfaces when both span endpoints define the same physical hole
   * and at least one endpoint is the reflective surface. Ordinary refractive
   * explicit spans stay strict and only allow embedded stops. */
  if (data.opticalPath === undefined) return null;
  const front = S[from];
  const rear = S[to];
  const frontOpening = centralOpeningSemiDiameter(front);
  const rearOpening = centralOpeningSemiDiameter(rear);
  if (frontOpening === null || rearOpening === null || Math.abs(frontOpening - rearOpening) > 1e-9) return null;
  if (front.interaction?.type !== "reflect" && rear.interaction?.type !== "reflect") return null;
  return frontOpening;
}

export function isEmbeddedStop(surface: UntrustedLensData): boolean {
  return surface.label === "STO" && surface.stopPlacement === "inside-element";
}

export function isAllowedAnnularNestedSurface(span: ExplicitElementSpan, surface: UntrustedLensData): boolean {
  return span.nestedOpeningSd !== null && surfaceFitsInsideCentralOpening(surface, span.nestedOpeningSd);
}

export function isAllowedFoldedRadialSplitSurface(span: ExplicitElementSpan, surface: UntrustedLensData): boolean {
  if (!span.foldedMirrorLens) return false;
  if (centralOpeningSemiDiameter(surface) === null) return false;
  /* Complementary surfaces can be interleaved only when their occupied radial
   * material bands do not overlap. This models shared mirror blanks split into
   * an annular silvered shell plus a clear central plug for rendering. */
  return !sharedMaterialBand(span.frontSurface, surface) && !sharedMaterialBand(span.rearSurface, surface);
}

export function isAllowedFoldedSpanInternalSurface(span: ExplicitElementSpan, surface: UntrustedLensData): boolean {
  return isAllowedAnnularNestedSurface(span, surface) || isAllowedFoldedRadialSplitSurface(span, surface);
}

export function validatePairedInnerSdConsistency(
  S: UntrustedLensData[],
  explicitSpans: Map<number, ExplicitElementSpan>,
  errors: string[],
): void {
  const pairs = new Map<string, [number, number]>();
  const addPair = (a: number, b: number): void => {
    if (a === b || a < 0 || b < 0 || a >= S.length || b >= S.length) return;
    const lo = Math.min(a, b);
    const hi = Math.max(a, b);
    pairs.set(`${lo}:${hi}`, [lo, hi]);
  };

  for (const span of explicitSpans.values()) addPair(span.from, span.to);
  for (let i = 0; i < S.length - 1; i++) {
    if (typeof S[i]?.label === "string" && S[i + 1]?.label === `${S[i].label}B`) addPair(i, i + 1);
  }

  for (const [aIdx, bIdx] of pairs.values()) {
    const a = S[aIdx];
    const b = S[bIdx];
    const aInner = typeof a.innerSd === "number" && isFinite(a.innerSd) ? a.innerSd : null;
    const bInner = typeof b.innerSd === "number" && isFinite(b.innerSd) ? b.innerSd : null;
    if (aInner === null && bInner === null) continue;
    if (aInner !== null && bInner !== null && Math.abs(aInner - bInner) <= 1e-9) continue;
    errors.push(
      `surfaces[${aIdx}] ("${a.label}") and surfaces[${bIdx}] ("${b.label}"): paired annular surfaces must use matching innerSd values`,
    );
  }
}

export function validateStop(
  S: UntrustedLensData[],
  labelToIdx: Record<string, number>,
  explicitSpans: Map<number, ExplicitElementSpan>,
  errors: string[],
): void {
  const stopIdx = typeof labelToIdx.STO === "number" ? labelToIdx.STO : -1;
  if (stopIdx >= 0) {
    const stop = S[stopIdx];
    if (stop.stopPlacement === "inside-element") {
      if (Math.abs(stop.R) <= FLAT_R_THRESHOLD) {
        errors.push(`Surface "STO": stopPlacement "inside-element" requires a flat stop surface`);
      }
      const containers = [...explicitSpans.values()].filter(({ from, to }) => from < stopIdx && stopIdx < to);
      if (containers.length !== 1) {
        errors.push(
          `Surface "STO": stopPlacement "inside-element" requires exactly one explicit containing element span`,
        );
      } else {
        const [{ from, element }] = containers;
        if (stop.elemId !== element.id) {
          errors.push(`Surface "STO": internal stop elemId must match containing element id ${element.id}`);
        }
        if (
          typeof element.nd === "number" &&
          typeof stop.nd === "number" &&
          isFinite(element.nd) &&
          isFinite(stop.nd) &&
          Math.abs(stop.nd - element.nd) > 1e-6
        ) {
          errors.push(`Surface "STO": internal stop nd must match containing element nd=${element.nd}`);
        }
        if (from <= stopIdx - 1 && Math.abs(S[stopIdx - 1].nd - stop.nd) > 1e-6) {
          errors.push(`Surface "STO": internal stop nd must match the glass medium before the stop`);
        }
      }
    } else if (typeof stop.nd === "number" && stop.nd !== 1.0) {
      errors.push(`Surface "STO": glass-side stop surfaces require stopPlacement: "inside-element"`);
    }
  }
}
