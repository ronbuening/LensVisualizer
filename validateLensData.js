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
    'gapSagFrac', 'rayLeadFrac', 'offAxisFieldFrac',
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

  return errors;
}
