/**
 * buildLens() — Validate, resolve labels, derive optical constants.
 *
 * Takes a LENS_DATA-shaped object (after defaults merging) and returns
 * a frozen runtime lens object L.  Pure function — no side effects.
 */

import validateLensData from "./validateLensData.js";
import { FLAT_R_THRESHOLD } from "./optics.js";
import type {
  LensData,
  SurfaceData,
  AsphericCoefficients,
  VarRange,
  ElementData,
  AnnotationData,
  ResolvedAnnotation,
  ElementSpan,
  EntrancePupil,
  RuntimeLens,
  ParaxialTraceResult,
} from "../types/optics.js";

interface ParaxialTraceOpts {
  stopAt?: number;
  skipLastTransfer?: boolean;
  recordHeights?: boolean;
}

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
  { stopAt, skipLastTransfer = false, recordHeights = false }: ParaxialTraceOpts = {},
): ParaxialTraceResult {
  const N = stopAt !== undefined ? stopAt : S.length;
  const total = S.length;
  const heights: number[] | null = recordHeights ? [] : null;
  let y = y0,
    u = u0,
    n = 1.0;
  for (let i = 0; i < N; i++) {
    if (recordHeights) heights!.push(y);
    const { R, nd, d } = S[i];
    const nn = nd === 1.0 ? 1.0 : nd;
    if (nn !== n) u = Math.abs(R) < FLAT_R_THRESHOLD ? (n * u - (y * (nn - n)) / R) / nn : (n * u) / nn;
    n = nn;
    const isLast = i === N - 1;
    if (isLast && skipLastTransfer) {
      /* skip */
    } else if (i < total - 1) y += d * u;
  }
  return { y, u, n, heights };
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

  const labelIdx: Record<string, number> = {};
  for (let i = 0; i < N; i++) labelIdx[S[i].label] = i;

  const asphByIdx: Record<number, AsphericCoefficients> = {};
  for (const [label, coeffs] of Object.entries(data.asph || {})) asphByIdx[labelIdx[label]] = coeffs;

  const isZoom = Array.isArray(data.zoomPositions) && data.zoomPositions.length >= 2;

  const varByIdx: Record<number, VarRange> = {};
  for (const [label, range] of Object.entries(data.var || {})) varByIdx[labelIdx[label]] = range;

  const varLabels: [number, string][] = (data.varLabels || []).map(
    ([label, text]: [string, string]) => [labelIdx[label], text] as [number, string],
  );

  const ES: ElementSpan[] = [];
  for (const elem of data.elements) {
    let startIdx = -1;
    for (let i = 0; i < N; i++) {
      if (S[i].elemId === elem.id) {
        startIdx = i;
        break;
      }
    }
    ES.push([elem.id, startIdx, startIdx + 1]);
  }

  /* ── Per-surface Abbe number lookup (for chromatic tracing) ── */
  const vdByIdx: Record<number, number> = {};
  for (let i = 0; i < N; i++) {
    const eid = S[i].elemId;
    if (eid) {
      const elem = data.elements.find((e: ElementData) => e.id === eid);
      if (elem && elem.vd) vdByIdx[i] = elem.vd;
    }
  }

  function resolveAnnotation(arr: AnnotationData[] | undefined): ResolvedAnnotation[] {
    return (arr || []).map((g) => ({
      text: g.text,
      fromSurface: labelIdx[g.fromSurface],
      toSurface: labelIdx[g.toSurface],
    }));
  }
  const groups = resolveAnnotation(data.groups);
  const doublets = resolveAnnotation(data.doublets);

  const stopIdx = S.findIndex((row) => row.label === "STO");

  /* ── Derive stop SD from nominal f-number ──
   *  When the lens data specifies nominalFno instead of an explicit stop SD,
   *  we back-compute it:  epSD = EFL / (2·Fno), then scale by the marginal
   *  ray height ratio at the stop to get the physical stop semi-diameter.
   */
  if (data.nominalFno !== undefined) {
    const { y: yRatio } = paraxialTrace(S, 1, 0, { stopAt: stopIdx });
    const { u: ue } = paraxialTrace(S, 1, 0, { skipLastTransfer: true });
    const efl = -1.0 / ue;
    const epSD = efl / (2 * data.nominalFno);
    S[stopIdx].sd = epSD * yRatio;
  }

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

  /* B = chief ray height at stop (for vignetting computation below) */
  const B = paraxialTrace(S, 0, 1, { stopAt: stopIdx }).y;

  /* Entrance pupil z-offset from the stop (mm, baseline layout).
   * Back-projects the marginal ray arriving at the stop to find where it
   * appears to originate — the entrance pupil position.  When u≈0 (no
   * elements before the stop), the pupil is at the stop itself. */
  const epZRelStop = Math.abs(epTrace.u) > 1e-9 ? -epTrace.y / epTrace.u : 0;

  /* Exit pupil: trace the chief ray (y=0, u=1) through the full system.
   * Back-projecting from the last surface finds the exit pupil position;
   * the marginal ray height at that position gives the exit pupil SD.
   * eflTrace (y=1, u=0, skipLastTransfer) already holds the marginal ray
   * state at the last surface and is reused here. */
  const chiefFull = paraxialTrace(S, 0, 1, { skipLastTransfer: true });
  const xpZRelLastSurf = Math.abs(chiefFull.u) > 1e-9 ? -chiefFull.y / chiefFull.u : 0;
  const xpSD = Math.abs(eflTrace.y + eflTrace.u * xpZRelLastSurf);

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
  const halfField = (Math.atan(minU) * 180) / Math.PI;
  if (!isFinite(halfField))
    throw new Error(`Lens "${data.key}": Half-field angle is not finite — vignetting computation failed`);

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
  let YSC = (svgH * yScFill) / maxSD;
  const maxAR = data.maxAspectRatio;
  if (maxAR > 0 && YSC / SC > maxAR) YSC = SC * maxAR;
  const maxRimSin = Math.sin((maxRimAngleDeg * Math.PI) / 180);
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
  const bladeStubFrac = 1 - Math.max(...data.rayFractions.map(Math.abs));
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
      const tmpS = S.map((s, i) => {
        const v = varByIdx[i];
        if (!v) return s;
        return { ...s, d: (v as [number, number][])[zi][0] };
      });

      /* EFL — capture both y and u at last surface for exit pupil computation */
      const zMargLast = paraxialTrace(tmpS, 1, 0, { skipLastTransfer: true });
      const ue = zMargLast.u;
      zoomEFLs.push(-1.0 / ue);

      /* Entrance pupil and yRatio */
      const epT = paraxialTrace(tmpS, 1, 0, { stopAt: stopIdx });
      const epSD = Math.abs(epT.y) > 1e-15 ? tmpS[stopIdx].sd / epT.y : EP.epSD;
      zoomEPs.push(epSD);
      zoomYRatios.push(epT.y);

      /* Chief ray height at stop */
      zoomBs.push(paraxialTrace(tmpS, 0, 1, { stopAt: stopIdx }).y);

      /* Pupil positions at this zoom position */
      const zEpRelStop = Math.abs(epT.u) > 1e-9 ? -epT.y / epT.u : 0;
      zoomEpZRelStops.push(zEpRelStop);
      const zChiefFull = paraxialTrace(tmpS, 0, 1, { skipLastTransfer: true });
      const zXpRelLast = Math.abs(zChiefFull.u) > 1e-9 ? -zChiefFull.y / zChiefFull.u : 0;
      zoomXpZRelLastSurfs.push(zXpRelLast);
      zoomXpSDs.push(Math.abs(zMargLast.y + zMargLast.u * zXpRelLast));

      /* Half-field (vignetting-limited) */
      const zA = paraxialTrace(tmpS, 1, 0, { skipLastTransfer: true, recordHeights: true }).heights!;
      const zB = paraxialTrace(tmpS, 0, 1, { skipLastTransfer: true, recordHeights: true }).heights!;
      const zr = Math.abs(zA[stopIdx]) > 1e-15 ? zB[stopIdx] / zA[stopIdx] : r;
      let zMinU = Infinity;
      for (let j = 0; j < N; j++) {
        if (j === stopIdx) continue;
        const coeff = Math.abs(zB[j] - zr * zA[j]);
        if (coeff > 1e-8) {
          const uMax = tmpS[j].sd / coeff;
          if (uMax < zMinU) zMinU = uMax;
        }
      }
      zoomHalfFields.push((Math.atan(zMinU) * 180) / Math.PI);
    }
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
    epZRelStop,
    xpZRelLastSurf,
    xpSD,
    FOPEN,
    halfField,
    totalTrack,
    maxSD,
    svgW: data.svgW,
    svgH: data.svgH,
    SC,
    YSC,
    maxRimSin,
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
    zoomEpZRelStops,
    zoomXpZRelLastSurfs,
    zoomXpSDs,
    zoomStep: data.zoomStep || 0.004,
    zoomLabels: data.zoomLabels || null,
    labelIdx,
  }) as RuntimeLens;
}

export { paraxialTrace };
