/**
 * Shared default values for lens data files.
 *
 * These are merged under each lens's own fields in the catalog builder:
 *   { ...LENS_DEFAULTS, ...lensData }
 * so any lens can override any default by declaring its own value.
 */

const LENS_DEFAULTS = {

  /* ── Catalog visibility ── */
  visible:          true,

  /* ── Ray fan configuration ── */
  rayFractions:     [-0.83, -0.50, -0.17, 0.17, 0.50, 0.83],
  rayLeadFrac:      0.35,
  lensShiftFrac:    0.08,
  offAxisFieldFrac: 0.60,
  offAxisFractions: [-0.75, -0.375, 0, 0.375, 0.75],

  /* ── Layout tuning ── */
  svgW:             1080,
  svgH:             490,
  scFill:           0.55,
  clipMargin:       1.0,
  maxRimAngleDeg:   40,
  gapSagFrac:       0.90,
  maxAspectRatio:   1.6,

  /* ── Controls ── */
  focusStep:        0.004,
  apertureStep:     0.004,
  maxFstop:         16,
};

export default LENS_DEFAULTS;
