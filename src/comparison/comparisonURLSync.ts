/**
 * Comparison-specific URL building and SEO metadata.
 *
 * Pathname-based comparison URLs and page metadata for the compare route.
 */

import type { LensData } from "../types/optics.js";
import type { BuildURLSliders } from "../utils/parseComparisonParams.js";
import { encodeSliderParams } from "../utils/parseComparisonParams.js";

const SITE_NAME = "Optical Bench";
const SITE_URL = "https://opticalbench.net";

/**
 * Build a pathname-based comparison URL.
 *
 * @param slugA   — first lens key
 * @param slugB   — second lens key
 * @param sliders — optional slider values { zoom, focus, aperture }
 * @returns URL path (e.g. "/compare/slugA/slugB?focus=0.300")
 */
export function buildComparePath(slugA: string, slugB: string, sliders: BuildURLSliders = {}): string {
  const params = encodeSliderParams(sliders);
  const search = params.toString() ? `?${params.toString()}` : "";
  return `/compare/${encodeURIComponent(slugA)}/${encodeURIComponent(slugB)}${search}`;
}

/** Title for a comparison page. */
export function comparePageTitle(lensA: LensData, lensB: LensData): string {
  return `${lensA.name} vs ${lensB.name} — Lens Comparison | ${SITE_NAME}`;
}

/** Meta description for a comparison page. */
export function comparePageDescription(lensA: LensData, lensB: LensData): string {
  const base = `Compare ${lensA.name} and ${lensB.name} side by side. Interactive ray tracing, aperture, focus, and chromatic aberration comparison.`;
  return base.length > 160 ? base.slice(0, 157) + "..." : base;
}

/** Canonical URL for a comparison page. */
export function compareCanonicalURL(slugA: string, slugB: string): string {
  return `${SITE_URL}/compare/${slugA}/${slugB}`;
}
