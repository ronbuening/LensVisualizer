/**
 * buildLens() — Validate, resolve labels, derive optical constants.
 *
 * Takes a LENS_DATA-shaped object (after defaults merging) and returns
 * a frozen runtime lens object L.  Pure function — no side effects.
 */

import validateLensData from "./validateLensData.js";
import {
  buildAsphereIndex,
  buildElementSpans,
  buildLabelIndex,
  buildStateSurfaces,
  buildVarIndex,
  buildVdIndex,
  resolveAnnotations,
  sumSurfaceThicknesses,
  zoomIndexToT,
} from "./internal/lensState.js";
import { FLAT_R_THRESHOLD } from "./internal/surfaceMath.js";
import {
  traceSurfacesParaxial,
  traceSurfacesReal,
  type ParaxialSurfaceTraceOptions,
  type RealSurfaceTraceResult,
} from "./internal/traceSurfaces.js";
import type {
  LensData,
  SurfaceData,
  AsphericCoefficients,
  EntrancePupil,
  RuntimeLens,
  ParaxialTraceResult,
} from "../types/optics.js";
import { ENABLE_UNIFORM_SCALING } from "../utils/featureFlags.js";

/**
 * Paraxial ray trace through a surface array.
 *
 * Applies the paraxial refraction formula at each surface:
 *   u' = (n·u − y·(n'−n)/R) / n'   (for curved surfaces)
 *   u' = (n·u) / n'                  (for flat surfaces, |R| > FLAT_R_THRESHOLD)
 * then transfers: y += d·u
 *
 * Used internally by buildLens() to derive EFL, entrance pupil, and
 * vignetting-limited field angle.
 *
 * @param S    — surface array (each with R, nd, d properties)
 * @param y0   — initial ray height (mm)
 * @param u0   — initial ray slope (angle in paraxial approx)
 * @param opts — optional { stopAt, skipLastTransfer, recordHeights }
 * @returns { y, u, n, heights }
 */
function paraxialTrace(
  S: SurfaceData[],
  y0: number,
  u0: number,
  opts: ParaxialSurfaceTraceOptions = {},
): ParaxialTraceResult {
  return traceSurfacesParaxial(S, y0, u0, opts);
}

/** Result of a real ray trace to an intermediate surface. */
interface RealTraceToStopResult {
  y: number;
  u: number; /* slope = tan(U) at the target surface */
}

/**
 * Real (exact Snell's law) ray trace from the first surface to a target surface.
 *
 * Unlike paraxialTrace which uses the linear u' = (n·u − y·φ)/n' formula,
 * this applies exact Snell's law with aspheric surface normals — matching
 * the rendering engine (_traceRayCore in optics.ts).  Returns both the ray
 * height and slope at the target surface.
 *
 * Used to compute corrected entrance pupil SD and z-position that account
 * for spherical aberration and aspheric deviations from the paraxial model.
 *
 * @returns { y, u } at the target surface, or { y: NaN, u: NaN } on TIR
 */
function realTraceToStopFull(
  S: SurfaceData[],
  asphByIdx: Record<number, AsphericCoefficients>,
  y0: number,
  u0: number,
  stopIdx: number,
): RealTraceToStopResult {
  const result = traceSurfacesReal(S, asphByIdx, y0, u0, { stopAt: stopIdx });
  return { y: result.y, u: result.u };
}

/**
 * Real (exact Snell's law) ray trace from the first surface to the stop.
 * Convenience wrapper that returns only the ray height.
 *
 * @returns ray height at the stop surface, or NaN on TIR
 */
function realTraceToStop(
  S: SurfaceData[],
  asphByIdx: Record<number, AsphericCoefficients>,
  y0: number,
  u0: number,
  stopIdx: number,
): number {
  return realTraceToStopFull(S, asphByIdx, y0, u0, stopIdx).y;
}

/** Result of a real ray trace through the full system with per-surface heights. */
interface RealTraceFullResult extends RealTraceToStopResult {
  heights: number[];
  clipped: boolean; /* true if |y| exceeded any surface SD */
}

/**
 * Real (exact Snell's law) ray trace through the full system, stopping
 * after refraction at the last surface (before the final transfer / BFL).
 * Returns { y, u } at the last surface — the same convention as
 * paraxialTrace with skipLastTransfer=true.
 *
 * @returns { y, u } at the last surface, or { y: NaN, u: NaN } on TIR
 */
function realTraceFullSystem(
  S: SurfaceData[],
  asphByIdx: Record<number, AsphericCoefficients>,
  y0: number,
  u0: number,
): RealTraceToStopResult {
  const r = realTraceFullSystemDetailed(S, asphByIdx, y0, u0);
  return { y: r.y, u: r.u };
}

/**
 * Real (exact Snell's law) ray trace through the full system with
 * per-surface height recording and vignetting clip detection.
 * Used for exit pupil computation and half-field refinement.
 */
function realTraceFullSystemDetailed(
  S: SurfaceData[],
  asphByIdx: Record<number, AsphericCoefficients>,
  y0: number,
  u0: number,
): RealTraceFullResult {
  const result: RealSurfaceTraceResult = traceSurfacesReal(S, asphByIdx, y0, u0, {
    skipLastTransfer: true,
    recordHeights: true,
    checkSemiDiameter: true,
  });
  return {
    y: result.y,
    u: result.u,
    heights: result.heights || [],
    clipped: result.clipped,
  };
}

/**
 * Build a frozen runtime lens object from validated LENS_DATA.
 *
 * Pipeline: validate → resolve label indices → derive optical constants
 * (EFL, entrance pupil, f-number, half-field) → compute layout geometry
 * → freeze and return.
 *
 * The returned object L is immutable and contains everything the renderer
 * and ray tracer need — no further data lookups are required at render time.
 *
 * @param data  — LENS_DATA object (after defaults merging)
 * @returns       frozen runtime lens object (L)
 * @throws        if validation finds any issues
 */
export default function buildLens(data: LensData): RuntimeLens {
  const validationErrors = validateLensData(data as Record<string, any>);
  if (validationErrors.length > 0)
    throw new Error(
      `Lens data "${data.key || "?"}" has ${validationErrors.length} error(s):\n  • ${validationErrors.join("\n  • ")}`,
    );

  const S: SurfaceData[] = data.surfaces.map((s) => ({ ...s }));
  const N = S.length;

  const isZoom = Array.isArray(data.zoomPositions) && data.zoomPositions.length >= 2;
  const labelIdx = buildLabelIndex(S);
  const asphByIdx = buildAsphereIndex(data.asph, labelIdx);
  const varByIdx = buildVarIndex(data.var, labelIdx);

  const varLabels: [number, string][] = (data.varLabels || []).map(
    ([label, text]: [string, string]) => [labelIdx[label], text] as [number, string],
  );
  const ES = buildElementSpans(S, data.elements);

  /* ── Per-surface Abbe number lookup (for chromatic tracing) ── */
  const vdByIdx = buildVdIndex(S, data.elements);
  const groups = resolveAnnotations(data.groups, labelIdx);
  const doublets = resolveAnnotations(data.doublets, labelIdx);

  const stopIdx = S.findIndex((row) => row.label === "STO");

  /* ── Derive stop SD and entrance pupil from nominal f-number ──
   *  nominalFno is a required field (validated).  We back-compute:
   *    epSD = EFL / (2·Fno)  →  the entrance pupil semi-diameter
   *  then trace a real (Snell's law) ray at that height to the stop to get
   *  the physical stop SD.  This accounts for aspherics and higher-order
   *  aberrations that the paraxial model ignores — without it, real rays
   *  overshoot the stop on lenses with strong aspherics (e.g. Nikon 60mm).
   *  Falls back to the paraxial yRatio if the real trace hits TIR. */
  const { y: nomYRatio } = paraxialTrace(S, 1, 0, { stopAt: stopIdx });
  const { u: nomUe } = paraxialTrace(S, 1, 0, { skipLastTransfer: true });
  const nomEFL = -1.0 / nomUe;
  const baseNomFno = Array.isArray(data.nominalFno) ? data.nominalFno[0] : data.nominalFno!;
  const nominalEPSD = nomEFL / (2 * baseNomFno);
  const nomRealY = realTraceToStop(S, asphByIdx, nominalEPSD, 0, stopIdx);
  S[stopIdx].sd = isFinite(nomRealY) && Math.abs(nomRealY) > 1e-15 ? nomRealY : nominalEPSD * nomYRatio;

  /* ── Optical constants ──
   *  EFL: trace a unit-height marginal ray (y=1, u=0) and read off the
   *  exit slope u; EFL = −1/u (standard paraxial formula). */
  const eflTrace = paraxialTrace(S, 1, 0, { skipLastTransfer: true });
  const EFL = -1.0 / eflTrace.u;
  if (!isFinite(EFL))
    throw new Error(
      `Lens "${data.key}": EFL is not finite (paraxial u=${eflTrace.u}) — system may be afocal or surface data is invalid`,
    );

  /* Entrance pupil: trace marginal ray to the stop; the height ratio
   * epTrace.y maps between entrance pupil SD and physical stop SD.
   * EP.epSD = stop SD / yRatio = entrance pupil semi-diameter in object space. */
  const epTrace = paraxialTrace(S, 1, 0, { stopAt: stopIdx });
  if (Math.abs(epTrace.y) < 1e-15)
    throw new Error(`Lens "${data.key}": Entrance pupil trace y≈0 at stop — cannot compute entrance pupil`);
  const EP: EntrancePupil = { epSD: S[stopIdx].sd / epTrace.y, yRatio: epTrace.y };

  /* Override EP with the nominal value.  The paraxial EP.epSD (= stopSD /
   * paraxialYRatio) is inconsistent because the stop SD was set via real trace
   * while yRatio is paraxial.  The correct EP is nominalEPSD = EFL / (2·Fno). */
  EP.epSD = nominalEPSD;

  /* B = chief ray height at stop (for vignetting computation below) */
  const B = paraxialTrace(S, 0, 1, { stopAt: stopIdx }).y;

  /* Entrance pupil z-position — use real (Snell's law) two-ray decomposition.
   * Trace a small marginal ray (y=δ, u=0) and a small chief ray (y=0, u=δ)
   * through the front group to the stop using exact refraction.  The real
   * yRatio and B are the ray heights at the stop (normalized by δ), so
   * epZ = realB / realYRatio gives the z where the chief ray crosses the axis.
   * Falls back to paraxial if the real traces hit TIR. */
  const zStopBaseline = sumSurfaceThicknesses(S, stopIdx);
  const realEpDelta = 1e-4;
  const realMarginal = realTraceToStopFull(S, asphByIdx, realEpDelta, 0, stopIdx);
  const realChief = realTraceToStopFull(S, asphByIdx, 0, realEpDelta, stopIdx);
  const realYRatio = isFinite(realMarginal.y) ? realMarginal.y / realEpDelta : epTrace.y;
  const realB = isFinite(realChief.y) ? realChief.y / realEpDelta : B;
  const epZRelStop = Math.abs(realYRatio) > 1e-9 ? realB / realYRatio - zStopBaseline : 0;

  /* Exit pupil: use real (Snell's law) two-ray decomposition through the
   * full system.  Trace small marginal (y=δ, u=0) and chief (y=0, u=δ)
   * rays with exact refraction, then combine to find the chief ray that
   * passes through the stop center.  Back-project from the last surface
   * to find XP position and size.  Falls back to paraxial on TIR. */
  const realMargFull = realTraceFullSystem(S, asphByIdx, realEpDelta, 0);
  const realChiefFull = realTraceFullSystem(S, asphByIdx, 0, realEpDelta);
  let xpZRelLastSurf: number;
  let xpSD: number;
  if (isFinite(realMargFull.y) && isFinite(realChiefFull.y)) {
    /* Normalize to unit-input basis rays (divide out δ) */
    const mY = realMargFull.y / realEpDelta,
      mU = realMargFull.u / realEpDelta;
    const cY = realChiefFull.y / realEpDelta,
      cU = realChiefFull.u / realEpDelta;
    /* Two-ray decomposition: stop-center chief = yRatio·chief − B·marginal
     * (using real yRatio and B from the front-group traces above) */
    const xpY = realYRatio * cY - realB * mY;
    const xpU = realYRatio * cU - realB * mU;
    xpZRelLastSurf = Math.abs(xpU) > 1e-9 ? -xpY / xpU : 0;
    xpSD = Math.abs(mY + mU * xpZRelLastSurf) * EP.epSD;
  } else {
    /* Fallback: paraxial exit pupil */
    const chiefFull = paraxialTrace(S, 0, 1, { skipLastTransfer: true });
    const xpNumer = -(epTrace.y * chiefFull.y - eflTrace.y * B);
    const xpDenom = epTrace.y * chiefFull.u - eflTrace.u * B;
    xpZRelLastSurf = Math.abs(xpDenom) > 1e-9 ? xpNumer / xpDenom : 0;
    xpSD = Math.abs(eflTrace.y + eflTrace.u * xpZRelLastSurf) * EP.epSD;
  }

  const stopPhysSD = S[stopIdx].sd;
  const FOPEN = EFL / (2 * EP.epSD); /* wide-open f-number */
  if (!isFinite(FOPEN))
    throw new Error(`Lens "${data.key}": Wide-open f-number is not finite (EFL=${EFL}, epSD=${EP.epSD})`);

  /* ── Half-field angle (vignetting-limited) ──
   *  Find the maximum chief-ray angle (field angle) before any surface
   *  clips the ray.  Uses two basis rays (marginal hA and chief hB) to
   *  build a linear model of ray height vs field angle at each surface.
   *  The minimum sd/|coefficient| across all surfaces gives the
   *  vignetting-limited half-field angle.
   */
  const hA = paraxialTrace(S, 1, 0, { skipLastTransfer: true, recordHeights: true }).heights!;
  const hB = paraxialTrace(S, 0, 1, { skipLastTransfer: true, recordHeights: true }).heights!;
  if (Math.abs(hA[stopIdx]) < 1e-15)
    throw new Error(`Lens "${data.key}": Chief-ray height ratio undefined — marginal ray height at stop ≈ 0`);
  const r = hB[stopIdx] / hA[stopIdx];
  let minU = Infinity;
  for (let i = 0; i < N; i++) {
    if (i === stopIdx) continue;
    const c = Math.abs(hB[i] - r * hA[i]);
    if (c > 1e-8) {
      const uMax = S[i].sd / c;
      if (uMax < minU) minU = uMax;
    }
  }
  const halfFieldParaxial = (Math.atan(minU) * 180) / Math.PI;
  if (!isFinite(halfFieldParaxial))
    throw new Error(`Lens "${data.key}": Half-field angle is not finite — vignetting computation failed`);

  /* Refine half-field with real (Snell's law) chief ray vignetting check.
   * The paraxial two-ray model can overestimate the field angle for strongly
   * curved or aspheric front groups.  Bisect to find the real clipping angle.
   * Uses the real EP position (realB/realYRatio) for chief ray entry. */
  let halfField = halfFieldParaxial;
  {
    const epRatio = Math.abs(realYRatio) > 1e-9 ? realB / realYRatio : B / epTrace.y;
    const testChief = (deg: number): boolean => {
      const uTest = -Math.tan((deg * Math.PI) / 180);
      const yIn = -epRatio * uTest;
      const result = realTraceFullSystemDetailed(S, asphByIdx, yIn, uTest);
      return isFinite(result.y) && !result.clipped;
    };
    if (!testChief(halfFieldParaxial)) {
      /* Paraxial overestimates — bisect downward */
      let lo = 0,
        hi = halfFieldParaxial;
      for (let iter = 0; iter < 20; iter++) {
        const mid = (lo + hi) / 2;
        if (testChief(mid)) lo = mid;
        else hi = mid;
      }
      halfField = lo;
    }
    /* If the paraxial field passes the real check, keep it (conservative). */
  }

  /* ── Petzval sum ──
   * P = Σ (n'−n) / (n'·n·R) over all refracting surfaces.
   * Contribution is zero for flat surfaces (|R| ≥ FLAT_R_THRESHOLD). */
  let petzvalSum = 0;
  let nPetz = 1.0;
  for (let i = 0; i < N; i++) {
    const { R, nd } = S[i];
    const nNext = nd === 1.0 ? 1.0 : nd;
    if (nNext !== nPetz && Math.abs(R) < FLAT_R_THRESHOLD) {
      petzvalSum += (nNext - nPetz) / (nNext * nPetz * R);
    }
    nPetz = nNext;
  }

  /* ── Layout geometry ──
   *  SC  = horizontal scale (pixels per mm along optical axis)
   *  YSC = vertical scale (pixels per mm perpendicular to axis)
   *  maxAspectRatio caps YSC/SC to prevent extremely tall, narrow lenses
   *  from dominating the viewport.
   *  For zoom lenses, use the maximum total track across all positions to
   *  ensure the SVG viewport never clips at any zoom setting.
   */
  let totalTrack: number;
  if (isZoom) {
    const nz = data.zoomPositions!.length;
    let maxTrack = 0;
    for (let zi = 0; zi < nz; zi++) {
      let track = 0;
      for (let i = 0; i < N; i++) {
        const v = varByIdx[i];
        track += v ? (v as [number, number][])[zi][0] : S[i].d;
      }
      maxTrack = Math.max(maxTrack, track);
    }
    totalTrack = maxTrack;
  } else {
    const z = [0];
    for (let i = 0; i < N - 1; i++) z.push(z[i] + S[i].d);
    totalTrack = z[N - 1] + S[N - 1].d;
  }
  const maxSD = Math.max(...S.map((s) => s.sd));

  const { svgW, svgH, scFill, yScFill, maxRimAngleDeg, gapSagFrac, clipMargin } = data;
  const SC = (svgW * scFill) / totalTrack;
  let YSC: number;
  let effectiveSvgH: number;
  if (ENABLE_UNIFORM_SCALING) {
    YSC = SC;
    const verticalMargin = 1.45 * maxSD;
    effectiveSvgH = Math.round(Math.max(2 * verticalMargin * SC + 20, 290));
  } else {
    YSC = (svgH * yScFill) / maxSD;
    const maxAR = data.maxAspectRatio;
    if (maxAR > 0 && YSC / SC > maxAR) YSC = SC * maxAR;
    effectiveSvgH = svgH;
  }
  const maxRimSin = Math.sin((maxRimAngleDeg * Math.PI) / 180);
  const maxRimTan = Math.tan((maxRimAngleDeg * Math.PI) / 180);
  const gridPitch = totalTrack / 15;
  const gridCount = Math.ceil(svgW / (gridPitch * SC)) + 4;
  const lyDoublet = -1.1 * maxSD;
  const lyImgLine = 1.133 * maxSD;
  const lyImgLabel = -1.233 * maxSD;
  const lyElemNum = 1.2 * maxSD;
  const lyVdBadge = 1.36 * maxSD;
  const lyGroup = 1.37 * maxSD;
  const lyStoPad = 0.12 * maxSD;

  const rayHeights = data.rayFractions.map((f: number) => f * EP.epSD);
  const rayLead = totalTrack * data.rayLeadFrac;
  const maxFrac = Math.max(...data.rayFractions.map(Math.abs));
  const outerRealY = realTraceToStop(S, asphByIdx, maxFrac * nominalEPSD, 0, stopIdx);
  const outerRatio = isFinite(outerRealY) && Math.abs(stopPhysSD) > 1e-15 ? Math.abs(outerRealY) / stopPhysSD : maxFrac;
  const bladeStubFrac = Math.max(0.02, 1 - outerRatio);
  const prevSD = stopIdx > 0 ? S[stopIdx - 1].sd : stopPhysSD;
  const nextSD = stopIdx < N - 1 ? S[stopIdx + 1].sd : stopPhysSD;
  const stopHousingSD = Math.max(stopPhysSD, Math.min(prevSD, nextSD));
  const offAxisFieldDeg = halfField * data.offAxisFieldFrac;
  const offAxisHeights = data.offAxisFractions.map((f: number) => f * EP.epSD);

  /* ── Zoom-lens derived constants ──
   *  Pre-compute optical properties at each zoom position by constructing
   *  a temporary surface array with the infinity-focus thickness for that
   *  zoom index, then running paraxial traces.
   *  - zoomEFLs:      EFL at each position (EFL = −1/u)
   *  - zoomEPs:       entrance pupil SD at each position
   *  - zoomHalfFields: vignetting-limited half-field angle at each position
   *  - zoomYRatios:   marginal ray height ratio at stop (for EP scaling)
   *  - zoomBs:        chief ray height at stop (for off-axis ray placement)
   */
  let zoomEFLs: number[] | null = null,
    zoomEPs: number[] | null = null,
    zoomHalfFields: number[] | null = null;
  let zoomYRatios: number[] | null = null,
    zoomBs: number[] | null = null;
  let zoomEpZRelStops: number[] | null = null,
    zoomXpZRelLastSurfs: number[] | null = null,
    zoomXpSDs: number[] | null = null;
  if (isZoom) {
    const nz = data.zoomPositions!.length;
    zoomEFLs = [];
    zoomEPs = [];
    zoomHalfFields = [];
    zoomYRatios = [];
    zoomBs = [];
    zoomEpZRelStops = [];
    zoomXpZRelLastSurfs = [];
    zoomXpSDs = [];
    for (let zi = 0; zi < nz; zi++) {
      const tmpS = buildStateSurfaces(S, varByIdx, true, 0, zoomIndexToT(zi, nz));

      /* EFL — capture y and u at last surface for exit pupil computation */
      const zMargLast = paraxialTrace(tmpS, 1, 0, { skipLastTransfer: true });
      zoomEFLs.push(-1.0 / zMargLast.u);

      /* Entrance pupil and yRatio — use real trace for EP, same as baseline */
      const epT = paraxialTrace(tmpS, 1, 0, { stopAt: stopIdx });
      const zEfl = -1.0 / zMargLast.u;
      const zNomFno = Array.isArray(data.nominalFno) ? data.nominalFno[zi] : data.nominalFno!;
      const zNomEP = zEfl / (2 * zNomFno);
      const zRealY = realTraceToStop(tmpS, asphByIdx, zNomEP, 0, stopIdx);
      if (isFinite(zRealY) && Math.abs(zRealY) > 1e-15) tmpS[stopIdx].sd = zRealY;
      zoomEPs.push(zNomEP);
      zoomYRatios.push(epT.y);

      /* Chief ray height at stop */
      const zBValue = paraxialTrace(tmpS, 0, 1, { stopAt: stopIdx }).y;
      zoomBs.push(zBValue);

      /* Pupil positions at this zoom position — real (Snell's law) traces */
      const zStopBaselineZ = sumSurfaceThicknesses(tmpS, stopIdx);
      const zRealMarg = realTraceToStopFull(tmpS, asphByIdx, realEpDelta, 0, stopIdx);
      const zRealChief = realTraceToStopFull(tmpS, asphByIdx, 0, realEpDelta, stopIdx);
      const zRealYRatio = isFinite(zRealMarg.y) ? zRealMarg.y / realEpDelta : epT.y;
      const zRealB = isFinite(zRealChief.y) ? zRealChief.y / realEpDelta : zBValue;
      const zEpRelStop = Math.abs(zRealYRatio) > 1e-9 ? zRealB / zRealYRatio - zStopBaselineZ : 0;
      zoomEpZRelStops.push(zEpRelStop);

      /* Exit pupil — real full-system two-ray decomposition */
      const zRealMargFull = realTraceFullSystem(tmpS, asphByIdx, realEpDelta, 0);
      const zRealChiefFull = realTraceFullSystem(tmpS, asphByIdx, 0, realEpDelta);
      if (isFinite(zRealMargFull.y) && isFinite(zRealChiefFull.y)) {
        const zmY = zRealMargFull.y / realEpDelta,
          zmU = zRealMargFull.u / realEpDelta;
        const zcY = zRealChiefFull.y / realEpDelta,
          zcU = zRealChiefFull.u / realEpDelta;
        const zXpY = zRealYRatio * zcY - zRealB * zmY;
        const zXpU = zRealYRatio * zcU - zRealB * zmU;
        const zXpRelLast = Math.abs(zXpU) > 1e-9 ? -zXpY / zXpU : 0;
        zoomXpZRelLastSurfs.push(zXpRelLast);
        zoomXpSDs.push(Math.abs(zmY + zmU * zXpRelLast) * zNomEP);
      } else {
        /* Fallback: paraxial exit pupil */
        const zChiefFull = paraxialTrace(tmpS, 0, 1, { skipLastTransfer: true });
        const zXpNumer = -(epT.y * zChiefFull.y - zMargLast.y * zBValue);
        const zXpDenom = epT.y * zChiefFull.u - zMargLast.u * zBValue;
        const zXpRelLast = Math.abs(zXpDenom) > 1e-9 ? zXpNumer / zXpDenom : 0;
        zoomXpZRelLastSurfs.push(zXpRelLast);
        zoomXpSDs.push(Math.abs(zMargLast.y + zMargLast.u * zXpRelLast) * zNomEP);
      }

      /* Half-field (vignetting-limited) — paraxial estimate refined with real ray */
      const zA = paraxialTrace(tmpS, 1, 0, { skipLastTransfer: true, recordHeights: true }).heights!;
      const zB2 = paraxialTrace(tmpS, 0, 1, { skipLastTransfer: true, recordHeights: true }).heights!;
      const zr = Math.abs(zA[stopIdx]) > 1e-15 ? zB2[stopIdx] / zA[stopIdx] : r;
      let zMinU = Infinity;
      for (let j = 0; j < N; j++) {
        if (j === stopIdx) continue;
        const coeff = Math.abs(zB2[j] - zr * zA[j]);
        if (coeff > 1e-8) {
          const uMax = tmpS[j].sd / coeff;
          if (uMax < zMinU) zMinU = uMax;
        }
      }
      let zHalfField = (Math.atan(zMinU) * 180) / Math.PI;
      /* Refine with real chief ray bisection (same as baseline) */
      const zEpRatio = Math.abs(zRealYRatio) > 1e-9 ? zRealB / zRealYRatio : zBValue / epT.y;
      const zTestChief = (deg: number): boolean => {
        const uTest = -Math.tan((deg * Math.PI) / 180);
        const yIn = -zEpRatio * uTest;
        const result = realTraceFullSystemDetailed(tmpS, asphByIdx, yIn, uTest);
        return isFinite(result.y) && !result.clipped;
      };
      if (isFinite(zHalfField) && !zTestChief(zHalfField)) {
        let lo = 0,
          hi = zHalfField;
        for (let iter = 0; iter < 20; iter++) {
          const mid = (lo + hi) / 2;
          if (zTestChief(mid)) lo = mid;
          else hi = mid;
        }
        zHalfField = lo;
      }
      zoomHalfFields.push(zHalfField);
    }
  }

  /* ── Zoom-dependent wide-open f-numbers ──
   * Compute FOPEN at each zoom position from pre-computed EFL and EP arrays.
   * For variable-aperture zooms (nominalFno is an array), the per-position
   * FOPENs differ; L.FOPEN is set to the widest (minimum) value so the
   * aperture slider range covers the full available range. */
  let zoomFOPENs: number[] | null = null;
  if (isZoom && zoomEFLs && zoomEPs) {
    const epValues = zoomEPs;
    zoomFOPENs = zoomEFLs.map((efl, i) => efl / (2 * epValues[i]));
  }

  return Object.freeze({
    data,
    S,
    N,
    ES,
    elements: data.elements,
    asphByIdx,
    varByIdx,
    vdByIdx,
    varLabels,
    groups,
    doublets,
    stopIdx,
    stopPhysSD,
    EFL,
    EP,
    B,
    FOPEN,
    halfField,
    petzvalSum,
    totalTrack,
    maxSD,
    svgW: data.svgW,
    svgH: effectiveSvgH,
    SC,
    YSC,
    maxRimSin,
    maxRimTan,
    gapSagFrac,
    clipMargin,
    gridPitch,
    gridCount,
    lyDoublet,
    lyImgLine,
    lyImgLabel,
    lyElemNum,
    lyVdBadge,
    lyGroup,
    lyStoPad,
    lensShiftFrac: data.lensShiftFrac || 0,
    rayFractions: data.rayFractions,
    rayHeights,
    rayLead,
    bladeStubFrac,
    stopHousingSD,
    offAxisFieldDeg,
    offAxisFieldFrac: data.offAxisFieldFrac,
    offAxisFractions: data.offAxisFractions,
    offAxisHeights,
    closeFocusM: data.closeFocusM,
    focusStep: data.focusStep,
    focusDescription: data.focusDescription,
    maxFstop: data.maxFstop,
    apertureStep: data.apertureStep,
    fstopSeries: data.fstopSeries,
    isZoom,
    zoomPositions: isZoom ? data.zoomPositions! : null,
    zoomEFLs,
    zoomEPs,
    zoomHalfFields,
    zoomYRatios,
    zoomBs,
    epZRelStop,
    xpZRelLastSurf,
    xpSD,
    zoomEpZRelStops,
    zoomXpZRelLastSurfs,
    zoomXpSDs,
    zoomFOPENs,
    zoomStep: data.zoomStep || 0.004,
    zoomLabels: data.zoomLabels || null,
    labelIdx,
  }) as RuntimeLens;
}

export { paraxialTrace, realTraceToStop };
