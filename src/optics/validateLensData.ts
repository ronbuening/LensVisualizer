/**
 * Lens data schema validation.
 *
 * Checks a LENS_DATA object (after defaults merging) for structural
 * correctness.  Returns an array of human-readable error strings.
 * An empty array means the data is valid.
 *
 * Called at the top of buildLens() to surface ALL issues at once
 * rather than throwing on the first problem.
 */

import type { AsphericCoefficients, SurfaceData } from "../types/optics.js";
import { buildAsphereIndex, buildLabelIndex, firstInfinityThickness } from "./internal/lensState.js";
import { conicPolySag, sagSlopeRaw } from "./internal/surfaceMath.js";

/* Validation operates on untrusted data — use a permissive record type
 * so dynamic-key checks compile without casts on every property access. */
type UntrustedLensData = Record<string, any>;

/**
 * Validate a LENS_DATA object for structural correctness.
 *
 * Checks are ordered from fast/cheap (missing fields) to slow/expensive
 * (geometry: edge thickness, sag overlap).  All errors are collected
 * before returning so the user sees every issue at once.
 *
 * @param data  — LENS_DATA object (after defaults merging)
 * @returns       array of human-readable error messages (empty = valid)
 */
export default function validateLensData(data: UntrustedLensData): string[] {
  const errors: string[] = [];

  /* ── Required top-level scalars ── */
  const requiredStrings = ["key", "name"];
  const requiredNumbers = [
    "closeFocusM",
    "focusStep",
    "maxFstop",
    "apertureStep",
    "svgW",
    "svgH",
    "scFill",
    "yScFill",
    "clipMargin",
    "maxRimAngleDeg",
    "gapSagFrac",
    "rayLeadFrac",
    "offAxisFieldFrac",
    "maxAspectRatio",
  ];
  const requiredArrays = ["elements", "surfaces", "fstopSeries", "rayFractions", "offAxisFractions"];

  for (const f of requiredStrings) {
    if (typeof data[f] !== "string" || !data[f]) errors.push(`Missing or empty required string field: "${f}"`);
  }
  for (const f of requiredNumbers) {
    if (typeof data[f] !== "number" || !isFinite(data[f]))
      errors.push(`Missing or non-finite required number field: "${f}"`);
  }
  for (const f of requiredArrays) {
    if (!Array.isArray(data[f]) || data[f].length === 0) errors.push(`Missing or empty required array field: "${f}"`);
  }

  /* ── nominalFno: required, number or number[] (for variable-aperture zooms) ── */
  if (typeof data.nominalFno === "number") {
    if (!isFinite(data.nominalFno)) errors.push(`"nominalFno" must be a finite number`);
  } else if (Array.isArray(data.nominalFno)) {
    if (data.nominalFno.length === 0) errors.push(`"nominalFno" array must not be empty`);
    for (let i = 0; i < data.nominalFno.length; i++) {
      if (typeof data.nominalFno[i] !== "number" || !isFinite(data.nominalFno[i]))
        errors.push(`"nominalFno[${i}]" must be a finite number`);
    }
    if (Array.isArray(data.zoomPositions) && data.nominalFno.length !== data.zoomPositions.length)
      errors.push(
        `"nominalFno" array length (${data.nominalFno.length}) must match "zoomPositions" length (${data.zoomPositions.length})`,
      );
    if (!Array.isArray(data.zoomPositions) || data.zoomPositions.length === 0)
      errors.push(
        `"nominalFno" is an array but lens has no "zoomPositions" — only zoom lenses support variable aperture`,
      );
  } else {
    errors.push(`Missing or invalid required field: "nominalFno" (must be number or number[])`);
  }

  /* ── Optional boolean fields ── */
  if (data.visible !== undefined && typeof data.visible !== "boolean")
    errors.push(`"visible" must be a boolean (got ${typeof data.visible})`);

  /* ── Early exit if surfaces/elements are missing — rest of checks depend on them ── */
  if (!Array.isArray(data.surfaces) || !Array.isArray(data.elements)) return errors;

  /* ── Surface labels: unique, exactly one STO ── */
  const surfaceLabels = new Set<string>();
  let stoCount = 0;
  for (let i = 0; i < data.surfaces.length; i++) {
    const s = data.surfaces[i];
    if (typeof s.label !== "string" || !s.label) {
      errors.push(`surfaces[${i}]: missing or empty label`);
      continue;
    }
    if (surfaceLabels.has(s.label)) errors.push(`Duplicate surface label: "${s.label}"`);
    surfaceLabels.add(s.label);
    if (s.label === "STO") stoCount++;

    if (typeof s.R !== "number") errors.push(`surfaces[${i}] ("${s.label}"): missing or invalid R`);
    if (typeof s.d !== "number") errors.push(`surfaces[${i}] ("${s.label}"): missing or invalid d`);
    if (typeof s.nd !== "number") errors.push(`surfaces[${i}] ("${s.label}"): missing or invalid nd`);
    if (typeof s.sd !== "number") errors.push(`surfaces[${i}] ("${s.label}"): missing or invalid sd`);
  }
  if (stoCount === 0) errors.push('No surface with label "STO" found');
  if (stoCount > 1) errors.push(`Multiple surfaces with label "STO" found (${stoCount})`);

  /* ── Element IDs: unique ── */
  const elemIds = new Set<number>();
  for (let i = 0; i < data.elements.length; i++) {
    const e = data.elements[i];
    if (e.id === undefined || e.id === null) {
      errors.push(`elements[${i}]: missing id`);
      continue;
    }
    if (elemIds.has(e.id)) errors.push(`Duplicate element id: ${e.id}`);
    elemIds.add(e.id);
  }

  /* ── Surface elemId values reference valid element IDs or 0 (air) ── */
  for (let i = 0; i < data.surfaces.length; i++) {
    const s = data.surfaces[i];
    if (s.elemId !== 0 && s.elemId !== undefined && !elemIds.has(s.elemId))
      errors.push(`surfaces[${i}] ("${s.label}"): elemId ${s.elemId} does not match any element`);
  }

  /* ── Each element has at least one surface referencing it ── */
  const referencedElems = new Set(data.surfaces.map((s: SurfaceData) => s.elemId).filter((id: number) => id !== 0));
  for (const e of data.elements) {
    if (!referencedElems.has(e.id)) errors.push(`Element ${e.id} ("${e.name}") has no surfaces referencing it`);
  }

  /* ── asph keys reference real surface labels ── */
  if (data.asph && typeof data.asph === "object") {
    for (const label of Object.keys(data.asph)) {
      if (!surfaceLabels.has(label)) errors.push(`asph key "${label}" does not match any surface label`);
    }
  }

  /* ── Zoom lens fields ── */
  const isZoom = Array.isArray(data.zoomPositions) && data.zoomPositions.length >= 2;
  if (data.zoomPositions !== undefined) {
    if (!Array.isArray(data.zoomPositions) || data.zoomPositions.length < 2)
      errors.push(`"zoomPositions" must be an array of at least 2 focal lengths`);
    else {
      if (!data.zoomPositions.every((n: number) => typeof n === "number" && isFinite(n)))
        errors.push(`"zoomPositions" must contain only finite numbers`);
      for (let i = 1; i < data.zoomPositions.length; i++) {
        if (data.zoomPositions[i] <= data.zoomPositions[i - 1]) {
          errors.push(`"zoomPositions" must be monotonically increasing`);
          break;
        }
      }
    }
  }

  /* ── Optional zoom fields ── */
  if (data.zoomStep !== undefined) {
    if (typeof data.zoomStep !== "number" || !isFinite(data.zoomStep) || data.zoomStep <= 0)
      errors.push(`"zoomStep" must be a finite positive number (got ${data.zoomStep})`);
  }
  if (data.zoomLabels !== undefined) {
    if (!Array.isArray(data.zoomLabels) || !data.zoomLabels.every((s: string) => typeof s === "string"))
      errors.push(`"zoomLabels" must be an array of strings`);
  }

  /* ── Build label→index map for var/geometry checks below ── */
  const labelToIdx = buildLabelIndex(
    data.surfaces.filter((surface: SurfaceData) => typeof surface.label === "string") as Pick<SurfaceData, "label">[],
  );

  /* ── var keys reference real surface labels ── */
  if (data.var && typeof data.var === "object") {
    const nz = isZoom ? data.zoomPositions.length : 0;
    for (const [label, range] of Object.entries(data.var)) {
      if (!surfaceLabels.has(label)) errors.push(`var key "${label}" does not match any surface label`);
      if (isZoom) {
        if (!Array.isArray(range) || range.length !== nz)
          errors.push(`var["${label}"]: expected array of ${nz} [d_inf, d_close] pairs (one per zoom position)`);
        else {
          for (let zi = 0; zi < nz; zi++) {
            if (!Array.isArray(range[zi]) || range[zi].length !== 2)
              errors.push(`var["${label}"][${zi}]: expected [d_infinity, d_close] array of length 2`);
            else {
              /* Non-negative thickness — negative gaps are physically impossible */
              if (range[zi][0] < 0) errors.push(`var["${label}"][${zi}]: d_infinity=${range[zi][0]} is negative`);
              if (range[zi][1] < 0) errors.push(`var["${label}"][${zi}]: d_close=${range[zi][1]} is negative`);
            }
          }
        }
      } else {
        if (!Array.isArray(range) || range.length !== 2)
          errors.push(`var["${label}"]: expected [d_infinity, d_close] array of length 2`);
        else {
          if (range[0] < 0) errors.push(`var["${label}"]: d_infinity=${range[0]} is negative`);
          if (range[1] < 0) errors.push(`var["${label}"]: d_close=${range[1]} is negative`);
        }
      }
      /* Surface d should match the var infinity value at the first zoom position */
      if (surfaceLabels.has(label)) {
        const surfD = data.surfaces[labelToIdx[label]].d;
        const varInf = firstInfinityThickness(range, isZoom);
        if (typeof surfD === "number" && typeof varInf === "number" && Math.abs(surfD - varInf) > 1e-6)
          errors.push(`var["${label}"]: surface d=${surfD} does not match var infinity value ${varInf}`);
      }
    }
  }

  /* ── varLabels reference real surface labels ── */
  if (Array.isArray(data.varLabels)) {
    for (const entry of data.varLabels) {
      if (!Array.isArray(entry) || entry.length < 2)
        errors.push(`varLabels entry is not a [label, text] pair: ${JSON.stringify(entry)}`);
      else if (!surfaceLabels.has(entry[0]))
        errors.push(`varLabels label "${entry[0]}" does not match any surface label`);
    }
  }

  /* ── groups and doublets reference real surface labels ── */
  for (const kind of ["groups", "doublets"] as const) {
    if (!Array.isArray(data[kind])) continue;
    for (let i = 0; i < data[kind].length; i++) {
      const g = data[kind][i];
      if (!surfaceLabels.has(g.fromSurface))
        errors.push(`${kind}[${i}] ("${g.text}"): fromSurface "${g.fromSurface}" not found`);
      if (!surfaceLabels.has(g.toSurface))
        errors.push(`${kind}[${i}] ("${g.text}"): toSurface "${g.toSurface}" not found`);
    }
  }

  /* ── Element geometry: edge thickness and SD consistency ──
   *  For each element, find its front/rear surface pair (same logic as buildLens ES)
   *  and check that (a) the element has positive edge thickness at the rendering SD,
   *  and (b) the front/rear SDs are consistent (ratio ≤ 1.25).
   */
  const S = data.surfaces;

  const asphByIdx = buildAsphereIndex(data.asph as Record<string, AsphericCoefficients> | undefined, labelToIdx);

  for (const elem of data.elements) {
    let s1 = -1;
    for (let i = 0; i < S.length; i++) {
      if (S[i].elemId === elem.id) {
        s1 = i;
        break;
      }
    }
    if (s1 < 0 || s1 + 1 >= S.length) continue;
    const s2 = s1 + 1;
    const front = S[s1],
      rear = S[s2];
    if (typeof front.sd !== "number" || typeof rear.sd !== "number") continue;
    if (typeof front.R !== "number" || typeof rear.R !== "number") continue;

    const sd = Math.min(front.sd, rear.sd);

    /* Edge thickness check (uses aspherical sag when available) */
    const sagFront = conicPolySag(sd, front.R, asphByIdx[s1]);
    const sagRear = conicPolySag(sd, rear.R, asphByIdx[s2]);
    const edgeThickness = front.d + sagRear - sagFront;
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
    if (sdMin > 0 && sdMax / sdMin > 3.0)
      errors.push(
        `Element ${elem.id} ("${elem.name}"): front/rear SD ratio ${(sdMax / sdMin).toFixed(2)} exceeds 3.0 — surfaces "${front.label}" (sd=${front.sd}) / "${rear.label}" (sd=${rear.sd}) may indicate a data entry error`,
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
   *  MAX_RIM_SLOPE = 2.065 corresponds to a 64.2° slope angle, matching the
   *  old sd/|R| = 0.9 threshold for spheres exactly.
   */
  const MAX_RIM_SLOPE = 2.065;
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
    if (slope > MAX_RIM_SLOPE) {
      const angleDeg = (Math.atan(slope) * 180) / Math.PI;
      errors.push(
        `Surface "${s.label}": rim slope ${slope.toFixed(2)} (${angleDeg.toFixed(1)}°) at sd=${s.sd} exceeds threshold ${MAX_RIM_SLOPE.toFixed(2)} (64.2°) — risk of TIR and rendering artifacts`,
      );
    }
  }

  /* ── Cross-gap surface overlap check ──
   *  For each air gap between elements, verify that the combined sag intrusion
   *  from both bounding surfaces does not exceed the gap thickness.
   */
  _checkCrossGapOverlap(S, asphByIdx, null, errors, "");

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
        gapOverrides,
        errors,
        ` at zoom position ${zi} (${data.zoomPositions[zi]} mm)`,
      );
    }
  }

  return errors;
}

/**
 * Check cross-gap surface overlap for a set of air gaps.
 *
 * Verifies that the combined sag intrusion from adjacent element surfaces
 * does not exceed the air gap thickness.  Called once with fixed d values,
 * then again per zoom position with overridden gap thicknesses.
 *
 * @param S             — surface array
 * @param asphByIdx     — aspheric coefficients by surface index
 * @param gapOverrides  — { surfIdx: overrideD } for variable gaps, or null
 * @param errors        — error accumulator (mutated)
 * @param context       — suffix for error messages (e.g. " at zoom position 0")
 */
function _checkCrossGapOverlap(
  S: UntrustedLensData[],
  asphByIdx: Record<number, AsphericCoefficients>,
  gapOverrides: Record<number, number> | null,
  errors: string[],
  context: string,
): void {
  for (let i = 0; i < S.length - 1; i++) {
    const curr = S[i],
      next = S[i + 1];
    if (typeof curr.nd !== "number" || curr.nd !== 1.0) continue;
    if (curr.elemId !== 0) continue;
    const gapD = gapOverrides ? (gapOverrides[i] ?? curr.d) : curr.d;
    if (typeof gapD !== "number" || gapD <= 0) continue;
    if (typeof next.elemId !== "number" || next.elemId === 0) continue;
    let prevElemRear = -1;
    for (let j = i - 1; j >= 0; j--) {
      if (S[j].elemId !== 0) {
        prevElemRear = j + 1;
        break;
      }
    }
    if (prevElemRear < 0 || prevElemRear !== i) continue;
    const prevFront = i - 1;
    if (prevFront < 0 || S[prevFront].elemId === 0) continue;
    const sdPrev = Math.min(S[prevFront].sd || Infinity, curr.sd || Infinity);
    const sdNext = Math.min(next.sd || Infinity, (i + 2 < S.length ? S[i + 2].sd : Infinity) || Infinity);
    const sdCheck = Math.min(sdPrev, sdNext);
    if (!isFinite(sdCheck) || sdCheck <= 0) continue;
    const sagFwd = conicPolySag(sdCheck, curr.R, asphByIdx[i]);
    const sagBack = conicPolySag(sdCheck, next.R, asphByIdx[i + 1]);
    const intrusion = sagFwd - sagBack;
    if (intrusion > gapD * 1.1)
      errors.push(
        `Air gap "${curr.label}"→"${next.label}": combined surface sag (${intrusion.toFixed(2)} mm) exceeds gap thickness (${gapD.toFixed(3)} mm) at sd=${sdCheck.toFixed(1)}${context} — elements will overlap in rendering`,
      );
  }
}
