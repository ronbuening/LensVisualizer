/** Element edges, rim slopes and cross-gap clearance on canonical diagnostic records. */
import type { UntrustedLensData, ExplicitElementSpan } from "./context.js";
import type { AsphericCoefficients } from "../../../types/optics.js";
import { buildAsphereIndex } from "../compileAspheres.js";
import { conicPolySag, MAX_RIM_SLOPE_TAN, sagSlopeRaw } from "../../geometry/surfaceProfile.js";
import { sharedMaterialBand } from "../../geometry/apertureBands.js";
import { cutOutlineSag, resolveRimCut, rimCutReentryRadius } from "../../geometry/rimCut.js";
import type { RimCut } from "../../geometry/rimCut.js";

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
  const cuts = validateRimCuts(S, asphByIdx, errors);
  /* Sag of the drawn outline: the cap, or a rim cut's land beyond its radius. */
  const rimSag = (i: number, h: number) => cutOutlineSag((r) => conicPolySag(r, S[i].R, asphByIdx[i]), cuts[i], h);

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
    const sagFront = rimSag(s1, sd);
    const sagRear = rimSag(s2, sd);
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

    /* A rim cut ends the cap at its radius; the land beyond is flat. */
    const capEdge = cuts[i] ? Math.min(s.sd, cuts[i]!.radius) : s.sd;
    const slope = Math.abs(sagSlopeRaw(capEdge, s.R, asph));
    if (slope > maxRimSlopeTan) {
      const angleDeg = (Math.atan(slope) * 180) / Math.PI;
      const maxAngleDeg = (Math.atan(maxRimSlopeTan) * 180) / Math.PI;
      errors.push(
        `Surface "${s.label}": rim slope ${slope.toFixed(2)} (${angleDeg.toFixed(1)}°) at ${cuts[i] ? `the rim cut, r=${capEdge.toFixed(3)}` : `sd=${s.sd}`} exceeds threshold ${maxRimSlopeTan.toFixed(2)} (${maxAngleDeg.toFixed(1)}°) — risk of TIR and rendering artifacts`,
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

  _checkCrossGapOverlap(S, rimSag, junctionIdx >= 0 ? withJunctionSpan({}) : null, errors, "", gapSagFrac);

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
        rimSag,
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
 * @param rimSag        — drawn-outline sag of surface i at height h
 * @param gapOverrides  — { surfIdx: overrideD } for variable gaps, or null
 * @param errors        — error accumulator (mutated)
 * @param context       — suffix for error messages (e.g. " at zoom position 0")
 * @param gapSagFrac    — maximum allowed intrusion fraction of the air gap
 */
function _checkCrossGapOverlap(
  S: UntrustedLensData[],
  rimSag: (i: number, h: number) => number,
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
    const sagFwd = rimSag(i, sdCheck);
    const sagBack = rimSag(i + 1, sdCheck);
    const intrusion = sagFwd - sagBack;
    const maxIntrusion = gapD * Math.min(gapSagFrac, 1);
    if (intrusion > maxIntrusion)
      errors.push(
        `Air gap "${curr.label}"→"${next.label}": combined surface sag (${intrusion.toFixed(2)} mm) exceeds allowed gap intrusion (${maxIntrusion.toFixed(3)} mm of ${gapD.toFixed(3)} mm) at sd=${sdCheck.toFixed(1)}${context} — elements will overlap in rendering`,
      );
  }
}

/**
 * Resolve every authored rim cut, refusing one that cuts nothing or cuts the wrong side.
 *
 * A cut trims glass that reaches past the vertex plane into air: the cap must reach the depth inside `sd` and stay
 * beyond it out to `sd`, with glass on the vertex side and air on the side the rim bends toward.
 *
 * @returns the resolved cut per surface index; null where a surface has none or it is refused
 */
function validateRimCuts(
  S: UntrustedLensData[],
  asphByIdx: Record<number, AsphericCoefficients>,
  errors: string[],
): (RimCut | null)[] {
  return S.map((s, i) => {
    const depth = s.rimCutDepthMm;
    if (typeof depth !== "number" || !(depth > 0) || typeof s.sd !== "number" || typeof s.R !== "number") return null;
    const sag = (h: number) => conicPolySag(h, s.R, asphByIdx[i]);
    const cut = resolveRimCut(sag, s.sd, depth);
    if (!cut) {
      errors.push(
        `Surface "${s.label}": rimCutDepthMm ${depth} must be smaller than the cap's sag at sd=${s.sd} (${Math.abs(sag(s.sd)).toFixed(3)} mm)`,
      );
      return null;
    }
    const reentry = rimCutReentryRadius(sag, s.sd, cut);
    if (reentry !== null) {
      errors.push(
        `Surface "${s.label}": the cap turns back inside the rim cut at r=${reentry.toFixed(3)} mm, so the land would not bound the glass`,
      );
      return null;
    }
    const glass = (index: number) => index >= 0 && typeof S[index].elemId === "number" && S[index].elemId !== 0;
    const air = (index: number) => index < 0 || (S[index].elemId === 0 && S[index].nd === 1);
    /* The medium after surface i - 1 lies before surface i; a rim bending rearward (positive sag) reaches into the
     * medium after it. */
    const [vertexSide, rimSide] = cut.sag > 0 ? [i - 1, i] : [i, i - 1];
    if (!glass(vertexSide) || !air(rimSide)) {
      errors.push(
        `Surface "${s.label}": a rim cut trims glass where the rim bends into air, so it needs glass on the vertex side and air on the ${cut.sag > 0 ? "rear" : "front"}, where this rim bends`,
      );
      return null;
    }
    return cut;
  });
}
