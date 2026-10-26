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

// Remove when companion lens analysis files are permanently exposed or retired.
export const ENABLE_ANALYSIS_VIEW = false;

// Remove when cardinal element overlays ship or are abandoned.
export const ENABLE_CARDINAL_ELEMENTS = true;

// On under npm run dev and Vitest; off in production/SSR builds. Set true to ship.
// Remove the flag and inline the route when shipped, or remove the builder if abandoned.
// Plain-Node metadata scripts also import this module, without Vite’s import.meta.env.
export const ENABLE_LENS_BUILDER = import.meta.env?.DEV ?? false;
