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

  /* ── var keys reference real surface labels ── */
  if (data.var && typeof data.var === 'object') {
    for (const [label, range] of Object.entries(data.var)) {
      if (!surfaceLabels.has(label))
        errors.push(`var key "${label}" does not match any surface label`);
      if (!Array.isArray(range) || range.length !== 2)
        errors.push(`var["${label}"]: expected [d_infinity, d_close] array of length 2`);
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
  const labelToIdx = {};
  for (let i = 0; i < S.length; i++) {
    if (typeof S[i].label === 'string') labelToIdx[S[i].label] = i;
  }

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
  const SD_R_WARN = 0.90;
  for (let i = 0; i < S.length; i++) {
    const s = S[i];
    if (typeof s.sd !== 'number' || typeof s.R !== 'number') continue;
    const absR = Math.abs(s.R);
    if (absR > 1e10 || absR < 1e-10) continue;
    const ratio = s.sd / absR;
    if (ratio > SD_R_WARN)
      errors.push(`Surface "${s.label}": sd/|R| ratio ${ratio.toFixed(3)} exceeds ${SD_R_WARN} — risk of TIR and rendering artifacts at the rim (reduce sd or verify off-axis ray containment)`);
  }

  return errors;
}

/* ── Sag helper (spherical + aspherical) for geometry checks ── */
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
