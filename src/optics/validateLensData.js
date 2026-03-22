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

/**
 * Validate a LENS_DATA object for structural correctness.
 *
 * Checks are ordered from fast/cheap (missing fields) to slow/expensive
 * (geometry: edge thickness, sag overlap).  All errors are collected
 * before returning so the user sees every issue at once.
 *
 * @param {Object} data  — LENS_DATA object (after defaults merging)
 * @returns {string[]}     array of human-readable error messages (empty = valid)
 */
export default function validateLensData(data) {
  const errors = [];

  /* ── Required top-level scalars ── */
  const requiredStrings = ['key', 'name'];
  const requiredNumbers = [
    'nominalFno', 'closeFocusM', 'focusStep', 'maxFstop', 'apertureStep',
    'svgW', 'svgH', 'scFill', 'yScFill', 'clipMargin', 'maxRimAngleDeg',
    'gapSagFrac', 'rayLeadFrac', 'offAxisFieldFrac', 'maxAspectRatio',
  ];
  const requiredArrays = [
    'elements', 'surfaces', 'fstopSeries',
    'rayFractions', 'offAxisFractions',
  ];

  for (const f of requiredStrings) {
    if (typeof data[f] !== 'string' || !data[f])
      errors.push(`Missing or empty required string field: "${f}"`);
  }
  for (const f of requiredNumbers) {
    if (typeof data[f] !== 'number' || !isFinite(data[f]))
      errors.push(`Missing or non-finite required number field: "${f}"`);
  }
  for (const f of requiredArrays) {
    if (!Array.isArray(data[f]) || data[f].length === 0)
      errors.push(`Missing or empty required array field: "${f}"`);
  }

  /* ── Optional boolean fields ── */
  if (data.visible !== undefined && typeof data.visible !== 'boolean')
    errors.push(`"visible" must be a boolean (got ${typeof data.visible})`);

  /* ── Early exit if surfaces/elements are missing — rest of checks depend on them ── */
  if (!Array.isArray(data.surfaces) || !Array.isArray(data.elements)) return errors;

  /* ── Surface labels: unique, exactly one STO ── */
  const surfaceLabels = new Set();
  let stoCount = 0;
  for (let i = 0; i < data.surfaces.length; i++) {
    const s = data.surfaces[i];
    if (typeof s.label !== 'string' || !s.label) {
      errors.push(`surfaces[${i}]: missing or empty label`);
      continue;
    }
    if (surfaceLabels.has(s.label))
      errors.push(`Duplicate surface label: "${s.label}"`);
    surfaceLabels.add(s.label);
    if (s.label === 'STO') stoCount++;

    if (typeof s.R !== 'number')   errors.push(`surfaces[${i}] ("${s.label}"): missing or invalid R`);
    if (typeof s.d !== 'number')   errors.push(`surfaces[${i}] ("${s.label}"): missing or invalid d`);
    if (typeof s.nd !== 'number')  errors.push(`surfaces[${i}] ("${s.label}"): missing or invalid nd`);
    if (typeof s.sd !== 'number')  errors.push(`surfaces[${i}] ("${s.label}"): missing or invalid sd`);
  }
  if (stoCount === 0) errors.push('No surface with label "STO" found');
  if (stoCount > 1)   errors.push(`Multiple surfaces with label "STO" found (${stoCount})`);

  /* ── Element IDs: unique ── */
  const elemIds = new Set();
  for (let i = 0; i < data.elements.length; i++) {
    const e = data.elements[i];
    if (e.id === undefined || e.id === null) {
      errors.push(`elements[${i}]: missing id`);
      continue;
    }
    if (elemIds.has(e.id))
      errors.push(`Duplicate element id: ${e.id}`);
    elemIds.add(e.id);
  }

  /* ── Surface elemId values reference valid element IDs or 0 (air) ── */
  for (let i = 0; i < data.surfaces.length; i++) {
    const s = data.surfaces[i];
    if (s.elemId !== 0 && s.elemId !== undefined && !elemIds.has(s.elemId))
      errors.push(`surfaces[${i}] ("${s.label}"): elemId ${s.elemId} does not match any element`);
  }

  /* ── Each element has at least one surface referencing it ── */
  const referencedElems = new Set(data.surfaces.map(s => s.elemId).filter(id => id !== 0));
  for (const e of data.elements) {
    if (!referencedElems.has(e.id))
      errors.push(`Element ${e.id} ("${e.name}") has no surfaces referencing it`);
  }

  /* ── asph keys reference real surface labels ── */
  if (data.asph && typeof data.asph === 'object') {
    for (const label of Object.keys(data.asph)) {
      if (!surfaceLabels.has(label))
        errors.push(`asph key "${label}" does not match any surface label`);
    }
  }

  /* ── Zoom lens fields ── */
  const isZoom = Array.isArray(data.zoomPositions) && data.zoomPositions.length >= 2;
  if (data.zoomPositions !== undefined) {
    if (!Array.isArray(data.zoomPositions) || data.zoomPositions.length < 2)
      errors.push(`"zoomPositions" must be an array of at least 2 focal lengths`);
    else {
      if (!data.zoomPositions.every(n => typeof n === 'number' && isFinite(n)))
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
    if (typeof data.zoomStep !== 'number' || !isFinite(data.zoomStep) || data.zoomStep <= 0)
      errors.push(`"zoomStep" must be a finite positive number (got ${data.zoomStep})`);
  }
  if (data.zoomLabels !== undefined) {
    if (!Array.isArray(data.zoomLabels) || !data.zoomLabels.every(s => typeof s === 'string'))
      errors.push(`"zoomLabels" must be an array of strings`);
  }

  /* ── Build label→index map for var/geometry checks below ── */
  const labelToIdx = {};
  for (let i = 0; i < data.surfaces.length; i++) {
    if (typeof data.surfaces[i].label === 'string') labelToIdx[data.surfaces[i].label] = i;
  }

  /* ── var keys reference real surface labels ── */
  if (data.var && typeof data.var === 'object') {
    const nz = isZoom ? data.zoomPositions.length : 0;
    for (const [label, range] of Object.entries(data.var)) {
      if (!surfaceLabels.has(label))
        errors.push(`var key "${label}" does not match any surface label`);
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
        const varInf = isZoom
          ? (Array.isArray(range) && Array.isArray(range[0]) ? range[0][0] : null)
          : (Array.isArray(range) ? range[0] : null);
        if (typeof surfD === 'number' && typeof varInf === 'number' && Math.abs(surfD - varInf) > 1e-6)
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
  for (const kind of ['groups', 'doublets']) {
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

  const asphByIdx = {};
  if (data.asph && typeof data.asph === 'object') {
    for (const [label, coeffs] of Object.entries(data.asph)) {
      if (labelToIdx[label] !== undefined) asphByIdx[labelToIdx[label]] = coeffs;
    }
  }

  for (const elem of data.elements) {
    let s1 = -1;
    for (let i = 0; i < S.length; i++) {
      if (S[i].elemId === elem.id) { s1 = i; break; }
    }
    if (s1 < 0 || s1 + 1 >= S.length) continue;
    const s2 = s1 + 1;
    const front = S[s1], rear = S[s2];
    if (typeof front.sd !== 'number' || typeof rear.sd !== 'number') continue;
    if (typeof front.R !== 'number' || typeof rear.R !== 'number') continue;

    const sd = Math.min(front.sd, rear.sd);

    /* Edge thickness check (uses aspherical sag when available) */
    const sagFront = _renderSag(sd, front.R, asphByIdx[s1]);
    const sagRear  = _renderSag(sd, rear.R,  asphByIdx[s2]);
    const edgeThickness = front.d + sagRear - sagFront;
    if (edgeThickness <= 0)
      errors.push(`Element ${elem.id} ("${elem.name}"): negative edge thickness (${edgeThickness.toFixed(3)} mm) at sd=${sd} — surfaces "${front.label}" / "${rear.label}" cross at the rim`);

    /* SD consistency check */
    const sdMax = Math.max(front.sd, rear.sd);
    const sdMin = Math.min(front.sd, rear.sd);
    if (sdMin > 0 && sdMax / sdMin > 1.25)
      errors.push(`Element ${elem.id} ("${elem.name}"): front/rear SD ratio ${(sdMax/sdMin).toFixed(2)} exceeds 1.25 — surfaces "${front.label}" (sd=${front.sd}) / "${rear.label}" (sd=${rear.sd}) may cause rays outside element`);
  }

  /* ── Surface sd/|R| ratio check ──
   *  When sd approaches |R|, the surface extends near its geometric equator.
   *  This causes extreme sag slopes that trigger TIR at high-index glass/air
   *  boundaries and numerical instability in the ray tracer.
   */
  const SD_R_WARN = 0.90; /* threshold beyond which sag slope becomes extreme */
  for (let i = 0; i < S.length; i++) {
    const s = S[i];
    if (typeof s.sd !== 'number' || typeof s.R !== 'number') continue;
    const absR = Math.abs(s.R);
    if (absR > 1e10 || absR < 1e-10) continue;
    const ratio = s.sd / absR;
    if (ratio > SD_R_WARN)
      errors.push(`Surface "${s.label}": sd/|R| ratio ${ratio.toFixed(3)} exceeds ${SD_R_WARN} — risk of TIR and rendering artifacts at the rim (reduce sd or verify off-axis ray containment)`);

    /* Conic h_max check: when K > 0, surface slope → ∞ at h = |R|/√(1+K) */
    const asph = asphByIdx[i];
    if (asph && asph.K > 0 && absR < 1e10) {
      const hMax = absR / Math.sqrt(1 + asph.K);
      if (s.sd > hMax * 0.98)
        errors.push(`Surface "${s.label}": sd=${s.sd} exceeds conic h_max=${hMax.toFixed(2)} mm (K=${asph.K}) — sag curve will have a discontinuity at the rim`);
    }
  }

  /* ── Cross-gap surface overlap check ──
   *  For each air gap between elements, verify that the combined sag intrusion
   *  from both bounding surfaces does not exceed the gap thickness.
   */
  for (let i = 0; i < S.length - 1; i++) {
    const curr = S[i], next = S[i + 1];
    if (typeof curr.nd !== 'number' || curr.nd !== 1.0) continue;    // only air gaps
    if (curr.elemId !== 0) continue;                                  // skip cemented junctions
    if (typeof curr.d !== 'number' || curr.d <= 0) continue;
    if (typeof next.elemId !== 'number' || next.elemId === 0) continue; // next must be an element
    /* Find the element whose rear surface is curr (surface i) */
    let prevElemRear = -1;
    for (let j = i - 1; j >= 0; j--) {
      if (S[j].elemId !== 0) { prevElemRear = j + 1; break; }
    }
    if (prevElemRear < 0 || prevElemRear !== i) continue;             // curr isn't a rear surface
    const prevFront = i - 1;  // front surface of preceding element
    if (prevFront < 0 || S[prevFront].elemId === 0) continue;
    /* Use the minimum SD at which both surfaces are rendered */
    const sdPrev = Math.min(S[prevFront].sd || Infinity, curr.sd || Infinity);
    const sdNext = Math.min(next.sd || Infinity, (i + 2 < S.length ? S[i + 2].sd : Infinity) || Infinity);
    const sdCheck = Math.min(sdPrev, sdNext);
    if (!isFinite(sdCheck) || sdCheck <= 0) continue;
    const sagFwd  = _renderSag(sdCheck, curr.R, asphByIdx[i]);       // rear surface sag (positive = extends into gap)
    const sagBack = _renderSag(sdCheck, next.R, asphByIdx[i + 1]);   // front surface sag (negative = extends into gap)
    const intrusion = sagFwd - sagBack;
    if (intrusion > curr.d * 1.10)
      errors.push(`Air gap "${curr.label}"→"${next.label}": combined surface sag (${intrusion.toFixed(2)} mm) exceeds gap thickness (${curr.d} mm) at sd=${sdCheck.toFixed(1)} — elements will overlap in rendering`);
  }

  return errors;
}

/**
 * Local sag helper for geometry validation — duplicates renderSag logic
 * from optics.js to avoid a circular dependency (optics.js imports from
 * buildLens.js which imports this module).
 *
 * @param {number} h     — ray height (mm)
 * @param {number} R     — radius of curvature (mm)
 * @param {Object} asph  — aspheric coefficients {K, A4, A6, ...} or undefined
 * @returns {number}       sag in mm
 */
function _renderSag(h, R, asph) {
  const FLAT = 1e10;
  if (Math.abs(R) > FLAT && !asph) return 0;
  const c = Math.abs(R) > FLAT ? 0 : 1.0 / R;
  const K = asph ? (asph.K || 0) : 0;
  const h2 = h * h;
  const d = 1 - (1 + K) * c * c * h2;
  const conic = (c * h2) / (1 + Math.sqrt(d > 0 ? d : 1e-12));
  if (!asph) return conic;
  return conic
    + (asph.A4  || 0) * h2**2 + (asph.A6  || 0) * h2**3 + (asph.A8  || 0) * h2**4
    + (asph.A10 || 0) * h2**5 + (asph.A12 || 0) * h2**6 + (asph.A14 || 0) * h2**7;
}
