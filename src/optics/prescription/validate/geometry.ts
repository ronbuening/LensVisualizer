/** Element edges, rim slopes and cross-gap clearance on canonical diagnostic records. */
import type { UntrustedLensData, ExplicitElementSpan } from "./context.js";
import type { AsphericCoefficients } from "../../../types/optics.js";
import { buildAsphereIndex } from "../compileAspheres.js";
import { conicPolySag, MAX_RIM_SLOPE_TAN, sagSlopeRaw } from "../../geometry/surfaceProfile.js";
import { sharedMaterialBand } from "../../geometry/apertureBands.js";

export function validateGeometry(
  data: UntrustedLensData,
  labelToIdx: Record<string, number>,
  explicitSpans: Map<number, ExplicitElementSpan>,
  isZoom: boolean,
  errors: string[],
  gapSagFrac: number,
  maxRimAngle: unknown,
): void {
  const S = data.surfaces;
  /* ── Element geometry: edge thickness and SD consistency ──
   *  For each element, find its front/rear surface pair (same logic as buildLens ES)
   *  and check that (a) the element has positive edge thickness at the rendering SD,
   *  and (b) the front/rear SDs are consistent.
   */
  const asphByIdx = buildAsphereIndex(data.asph as Record<string, AsphericCoefficients> | undefined, labelToIdx);

  for (const elem of data.elements) {
    const explicitSpan = explicitSpans.get(elem.id);
    let s1 = explicitSpan?.from ?? -1;
    let s2 = explicitSpan?.to ?? -1;
    if (!explicitSpan) {
      for (let i = 0; i < S.length; i++) {
        if (S[i].elemId === elem.id) {
          s1 = i;
          break;
        }
      }
      s2 = s1 + 1;
    }
    if (s1 < 0 || s2 <= s1 || s2 >= S.length) continue;
    const front = S[s1],
      rear = S[s2];
    if (typeof front.sd !== "number" || typeof rear.sd !== "number") continue;
    if (typeof front.R !== "number" || typeof rear.R !== "number") continue;

    const sd = Math.min(front.sd, rear.sd);

    /* Edge thickness check (uses aspherical sag when available) */
    const sagFront = conicPolySag(sd, front.R, asphByIdx[s1]);
    const sagRear = conicPolySag(sd, rear.R, asphByIdx[s2]);
    let centerThickness = 0;
    for (let i = s1; i < s2; i++) centerThickness += typeof S[i].d === "number" ? S[i].d : 0;
    const edgeThickness = centerThickness + sagRear - sagFront;
    if (edgeThickness <= 0)
      errors.push(
        `Element ${elem.id} ("${elem.name}"): negative edge thickness (${edgeThickness.toFixed(3)} mm) at sd=${sd} — surfaces "${front.label}" / "${rear.label}" cross at the rim`,
      );

    /* SD consistency check — slope-aware.
     * The per-surface rim slope check (below) independently validates each
     * surface.  We keep a lenient ratio sanity check to catch obvious data
     * entry errors, but allow ratios up to 3.0 so that deep meniscus
     * elements in retrofocus designs (e.g. Canon RF 15-35 L1, ratio 1.45)
     * can use patent-accurate SDs. */
    const sdMax = Math.max(front.sd, rear.sd);
    const sdMin = Math.min(front.sd, rear.sd);
    const maxSdRatio =
      typeof elem.maxSdRatio === "number" && isFinite(elem.maxSdRatio) && elem.maxSdRatio >= 1 ? elem.maxSdRatio : 3;
    if (sdMin > 0 && sdMax / sdMin > maxSdRatio)
      errors.push(
        `Element ${elem.id} ("${elem.name}"): front/rear SD ratio ${(sdMax / sdMin).toFixed(2)} exceeds ${maxSdRatio.toFixed(1)} — surfaces "${front.label}" (sd=${front.sd}) / "${rear.label}" (sd=${rear.sd}) may indicate a data entry error`,
      );
  }

  /* ── Surface rim slope check ──
   *  When the actual sag slope at the rim becomes extreme, rays near the edge
   *  risk total internal reflection (TIR) at glass/air boundaries and cause
   *  numerical instability in the ray tracer.
   *
   *  Previous versions used a spherical proxy (sd/|R| ≤ 0.9).  We now
   *  compute the true aspherical slope via sagSlopeRaw(), which accounts for
   *  conic constant K and polynomial terms.  For spherical surfaces this
   *  gives identical results; for aspherics (especially K ≈ −1, near-
   *  paraboloids common on wide-angle meniscus elements) the actual slope is
   *  much gentler, allowing larger SDs without TIR risk.
   *
   *  MAX_RIM_SLOPE_TAN corresponds to a 64.2° slope angle, matching the
   *  old sd/|R| = 0.9 threshold for spheres exactly.
   */
  const maxRimAngleDeg = typeof maxRimAngle === "number" ? maxRimAngle : undefined;
  const maxRimSlopeTan =
    maxRimAngleDeg !== undefined && isFinite(maxRimAngleDeg)
      ? // eslint-disable-next-line no-restricted-syntax -- rim-slope TIR threshold from a data-declared angle, not a field launch
        Math.tan((maxRimAngleDeg * Math.PI) / 180)
      : MAX_RIM_SLOPE_TAN;

  for (let i = 0; i < S.length; i++) {
    const s = S[i];
    if (typeof s.sd !== "number" || typeof s.R !== "number") continue;
    const absR = Math.abs(s.R);
    if (absR > 1e10 || absR < 1e-10) continue;

    /* Conic h_max check: when K > 0, surface slope → ∞ at h = |R|/√(1+K) */
    const asph = asphByIdx[i];
    if (asph && asph.K > 0 && absR < 1e10) {
      const hMax = absR / Math.sqrt(1 + asph.K);
      if (s.sd > hMax * 0.98)
        errors.push(
          `Surface "${s.label}": sd=${s.sd} exceeds conic h_max=${hMax.toFixed(2)} mm (K=${asph.K}) — sag curve will have a discontinuity at the rim`,
        );
    }

    const slope = Math.abs(sagSlopeRaw(s.sd, s.R, asph));
    if (slope > maxRimSlopeTan) {
      const angleDeg = (Math.atan(slope) * 180) / Math.PI;
      const maxAngleDeg = (Math.atan(maxRimSlopeTan) * 180) / Math.PI;
      errors.push(
        `Surface "${s.label}": rim slope ${slope.toFixed(2)} (${angleDeg.toFixed(1)}°) at sd=${s.sd} exceeds threshold ${maxRimSlopeTan.toFixed(2)} (${maxAngleDeg.toFixed(1)}°) — risk of TIR and rendering artifacts`,
      );
    }
  }

  /* ── Cross-gap surface overlap check ──
   *  For each air gap between elements, verify that the combined sag intrusion
   *  from the two boundary surfaces that face each other does not exceed the
   *  configured fraction of the gap thickness.
   */
  /* A lens-side plate ahead of an attached teleconverter is expanded between the host's last surface and the
   * converter, so the authored gap there ends at the plate. The junction is checked against the full vertex
   * separation instead: authored gap + the plates ahead and their trailing gaps. */
  const platesAhead = Number.isInteger(data.attachedTeleconverter?.platesAhead)
    ? (data.attachedTeleconverter.platesAhead as number)
    : 0;
  const junctionIdx = platesAhead > 0 ? labelToIdx[data.attachedTeleconverter.firstSurfaceLabel] - 1 : -1;
  const junctionPlateSpanMm =
    junctionIdx >= 0 && Array.isArray(data.rearPlates)
      ? data.rearPlates
          .slice(0, platesAhead)
          .reduce(
            (sum: number, plate: UntrustedLensData) => sum + (plate?.thicknessMm ?? 0) + (plate?.gapAfterMm ?? 0),
            0,
          )
      : 0;
  const withJunctionSpan = (gapOverrides: Record<number, number>): Record<number, number> => {
    if (junctionIdx >= 0 && typeof S[junctionIdx]?.d === "number") {
      gapOverrides[junctionIdx] = (gapOverrides[junctionIdx] ?? S[junctionIdx].d) + junctionPlateSpanMm;
    }
    return gapOverrides;
  };

  _checkCrossGapOverlap(S, asphByIdx, junctionIdx >= 0 ? withJunctionSpan({}) : null, errors, "", gapSagFrac);

  /* For zoom lenses, also check at each zoom position's variable thickness.
   * Air gaps can change dramatically across zoom positions. */
  if (isZoom && data.var) {
    const nz = data.zoomPositions.length;
    /* Build a var lookup keyed by surface index for efficient gap-d overrides */
    const varByIdx: Record<number, unknown> = {};
    for (const [label, range] of Object.entries(data.var)) {
      if (labelToIdx[label] !== undefined) varByIdx[labelToIdx[label]] = range;
    }
    for (let zi = 0; zi < nz; zi++) {
      const gapOverrides: Record<number, number> = {};
      for (const [idx, range] of Object.entries(varByIdx)) {
        const r = range as number[][];
        if (Array.isArray(r[zi])) gapOverrides[Number(idx)] = r[zi][0]; // infinity-focus thickness
      }
      _checkCrossGapOverlap(
        S,
        asphByIdx,
        withJunctionSpan(gapOverrides),
        errors,
        ` at zoom position ${zi} (${data.zoomPositions[zi]} mm)`,
        gapSagFrac,
      );
    }
  }
}
/**
 * Check cross-gap surface overlap.
 *
 * Verifies that the combined sag intrusion from adjacent boundary surfaces
 * does not exceed the configured air-gap fraction. Called once with fixed d
 * values, then again per zoom position with overridden gap thicknesses.
 *
 * @param S             — surface array
 * @param asphByIdx     — aspheric coefficients by surface index
 * @param gapOverrides  — { surfIdx: overrideD } for variable gaps, or null
 * @param errors        — error accumulator (mutated)
 * @param context       — suffix for error messages (e.g. " at zoom position 0")
 * @param gapSagFrac    — maximum allowed intrusion fraction of the air gap
 */
function _checkCrossGapOverlap(
  S: UntrustedLensData[],
  asphByIdx: Record<number, AsphericCoefficients>,
  gapOverrides: Record<number, number> | null,
  errors: string[],
  context: string,
  gapSagFrac: number,
): void {
  for (let i = 0; i < S.length - 1; i++) {
    const curr = S[i],
      next = S[i + 1];
    if (typeof curr.nd !== "number" || curr.nd !== 1.0) continue;
    if (curr.elemId !== 0) continue;
    const gapD = gapOverrides ? (gapOverrides[i] ?? curr.d) : curr.d;
    if (typeof gapD !== "number" || gapD <= 0) continue;
    if (typeof next.elemId !== "number" || next.elemId === 0) continue;
    if (i === 0 || S[i - 1].elemId === 0) continue;
    const sharedBand = sharedMaterialBand(curr, next);
    if (!sharedBand) continue;
    /* Annular systems compare sag only where both neighboring surfaces contain
     * material. A central corrector inside a mirror hole has no shared band with
     * the annular mirror shell, so it is not a physical cross-gap overlap. */
    const sdCheck = sharedBand.outer;
    const sagFwd = conicPolySag(sdCheck, curr.R, asphByIdx[i]);
    const sagBack = conicPolySag(sdCheck, next.R, asphByIdx[i + 1]);
    const intrusion = sagFwd - sagBack;
    const maxIntrusion = gapD * Math.min(gapSagFrac, 1);
    if (intrusion > maxIntrusion)
      errors.push(
        `Air gap "${curr.label}"→"${next.label}": combined surface sag (${intrusion.toFixed(2)} mm) exceeds allowed gap intrusion (${maxIntrusion.toFixed(3)} mm of ${gapD.toFixed(3)} mm) at sd=${sdCheck.toFixed(1)}${context} — elements will overlap in rendering`,
      );
  }
}
