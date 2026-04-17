/**
 * Feature flags — short-lived toggles for in-progress experiments.
 *
 * Policy: Every flag here must have a removal plan.
 *   - Ship the feature → remove the flag, inline the enabled path.
 *   - Abandon the feature → remove the flag, inline the disabled path.
 * Do not add permanent product configuration here; use appConfig.ts instead.
 *
 * ENABLE_* — whether the feature's UI is exposed at all.
 */

// --- Rendering experiments ---
// Uniform SC/YSC scaling — eliminates lens shape distortion from anisotropic scaling.
// Remove when confirmed stable; revert to false if regressions appear.
export const ENABLE_UNIFORM_SCALING = true;

// Remove when aspheric diamond fill ships or is abandoned.
export const ENABLE_ASPH_DIAMOND_FILL = false;

// --- Ray tracing experiments ---
// Remove when edge-projection off-axis mode ships or is abandoned.
export const ENABLE_EDGE_PROJECTION = false;

// --- UI experiments ---
// Remove when the spherical-aberration diagnostic presentation settles.
export const ENABLE_REAL_RAY_LSA_DIAGNOSTIC = false;
