/**
 * buildLens() — Validate, resolve labels, derive optical constants.
 *
 * Takes a LENS_DATA-shaped object (after defaults merging) and returns
 * a frozen runtime lens object L.  Pure function — no side effects.
 */

import validateLensData from './validateLensData.js';
import { FLAT_R_THRESHOLD } from './optics.js';


/* ── Paraxial trace primitive ──
 *  Traces a paraxial ray through a surface array.
 *
 *  Options:
 *    stopAt          — trace only surfaces [0..stopAt) instead of all N
 *    skipLastTransfer — omit final y += d*u (for EFL-type computations)
 *    recordHeights   — return per-surface y values in a heights array
 */
function paraxialTrace(S, y0, u0, { stopAt, skipLastTransfer = false, recordHeights = false } = {}) {
  const N = stopAt !== undefined ? stopAt : S.length;
  const total = S.length;
  const heights = recordHeights ? [] : null;
  let y = y0, u = u0, n = 1.0;
  for (let i = 0; i < N; i++) {
    if (recordHeights) heights.push(y);
    const { R, nd, d } = S[i];
    const nn = nd === 1.0 ? 1.0 : nd;
    if (nn !== n)
      u = Math.abs(R) < FLAT_R_THRESHOLD ? (n * u - y * (nn - n) / R) / nn : (n * u) / nn;
    n = nn;
    const isLast = (i === N - 1);
    if (isLast && skipLastTransfer) { /* skip */ }
    else if (i < total - 1) y += d * u;
  }
  return { y, u, n, heights };
}


export default function buildLens(data) {
  const validationErrors = validateLensData(data);
  if (validationErrors.length > 0)
    throw new Error(`Lens data "${data.key || '?'}" has ${validationErrors.length} error(s):\n  • ${validationErrors.join('\n  • ')}`);

  const S = data.surfaces.map(s => ({ ...s }));
  const N = S.length;

  const labelIdx = {};
  for (let i = 0; i < N; i++) labelIdx[S[i].label] = i;

  const asphByIdx = {};
  for (const [label, coeffs] of Object.entries(data.asph || {}))
    asphByIdx[labelIdx[label]] = coeffs;

  const varByIdx = {};
  for (const [label, range] of Object.entries(data.var || {}))
    varByIdx[labelIdx[label]] = range;

  const varLabels = (data.varLabels || []).map(([label, text]) =>
    [labelIdx[label], text]);

  const ES = [];
  for (const elem of data.elements) {
    let startIdx = -1;
    for (let i = 0; i < N; i++) {
      if (S[i].elemId === elem.id) { startIdx = i; break; }
    }
    ES.push([elem.id, startIdx, startIdx + 1]);
  }

  function resolveAnnotation(arr) {
    return (arr || []).map(g => ({
      text: g.text,
      fromSurface: labelIdx[g.fromSurface],
      toSurface: labelIdx[g.toSurface],
    }));
  }
  const groups   = resolveAnnotation(data.groups);
  const doublets = resolveAnnotation(data.doublets);

  const stopIdx = S.findIndex(row => row.label === "STO");

  /* ── Derive stop SD from nominal f-number ── */
  if (data.nominalFno !== undefined) {
    const { y: yRatio } = paraxialTrace(S, 1, 0, { stopAt: stopIdx });
    const { u: ue }     = paraxialTrace(S, 1, 0, { skipLastTransfer: true });
    const efl  = -1.0 / ue;
    const epSD = efl / (2 * data.nominalFno);
    S[stopIdx].sd = epSD * yRatio;
  }

  /* ── Optical constants ── */
  const EFL = -1.0 / paraxialTrace(S, 1, 0, { skipLastTransfer: true }).u;

  const epTrace = paraxialTrace(S, 1, 0, { stopAt: stopIdx });
  const EP = { epSD: S[stopIdx].sd / epTrace.y, yRatio: epTrace.y };

  const B = paraxialTrace(S, 0, 1, { stopAt: stopIdx }).y;

  const stopPhysSD = S[stopIdx].sd;
  const FOPEN      = EFL / (2 * EP.epSD);

  /* ── Half-field angle (vignetting-limited) ── */
  const hA = paraxialTrace(S, 1, 0, { skipLastTransfer: true, recordHeights: true }).heights;
  const hB = paraxialTrace(S, 0, 1, { skipLastTransfer: true, recordHeights: true }).heights;
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
  const halfField = Math.atan(minU) * 180 / Math.PI;

  /* ── Layout geometry ── */
  const z = [0];
  for (let i = 0; i < N - 1; i++) z.push(z[i] + S[i].d);
  const totalTrack = z[N - 1] + S[N - 1].d;
  const maxSD = Math.max(...S.map(s => s.sd));

  const { svgW, svgH, scFill, yScFill, maxRimAngleDeg, gapSagFrac, clipMargin } = data;
  const SC  = svgW * scFill / totalTrack;
  const YSC = svgH * yScFill / maxSD;
  const maxRimSin  = Math.sin(maxRimAngleDeg * Math.PI / 180);
  const gridPitch  = totalTrack / 15;
  const gridCount  = Math.ceil(svgW / (gridPitch * SC)) + 4;
  const lyDoublet  = -1.10  * maxSD;
  const lyImgLine  =  1.133 * maxSD;
  const lyImgLabel = -1.233 * maxSD;
  const lyElemNum  =  1.20  * maxSD;
  const lyGroup    =  1.37  * maxSD;
  const lyStoPad   =  0.12  * maxSD;

  const rayHeights      = data.rayFractions.map(f => f * EP.epSD);
  const rayLead         = totalTrack * data.rayLeadFrac;
  const bladeStubFrac   = 1 - Math.max(...data.rayFractions.map(Math.abs));
  const offAxisFieldDeg = halfField * data.offAxisFieldFrac;
  const offAxisHeights  = data.offAxisFractions.map(f => f * EP.epSD);

  return Object.freeze({
    data, S, N, ES,
    elements: data.elements,
    asphByIdx, varByIdx, varLabels,
    groups, doublets,
    stopIdx, stopPhysSD,
    EFL, EP, B, FOPEN, halfField, totalTrack, maxSD,
    svgW: data.svgW, svgH: data.svgH,
    SC, YSC, maxRimSin, gapSagFrac, clipMargin,
    gridPitch, gridCount,
    lyDoublet, lyImgLine, lyImgLabel, lyElemNum, lyGroup, lyStoPad,
    lensShiftFrac: data.lensShiftFrac || 0,
    rayFractions: data.rayFractions, rayHeights, rayLead, bladeStubFrac,
    offAxisFieldDeg, offAxisFractions: data.offAxisFractions, offAxisHeights,
    closeFocusM: data.closeFocusM, focusStep: data.focusStep,
    focusDescription: data.focusDescription,
    maxFstop: data.maxFstop, apertureStep: data.apertureStep,
    fstopSeries: data.fstopSeries,
    labelIdx,
  });
}

export { paraxialTrace };
