/**
 * Comparison-specific URL building and SEO metadata.
 *
 * Pathname-based comparison URLs and page metadata for the compare route.
 */

import type { LensData } from "../types/optics.js";

const SITE_NAME = "Optical Bench";
const SITE_URL = "https://opticalbench.net";

interface BuildURLSliders {
  zoom?: number | null;
  focus?: number | null;
  aperture?: number | null;
}

/**
 * Build a pathname-based comparison URL.
 *
 * @param slugA   — first lens key
 * @param slugB   — second lens key
 * @param sliders — optional slider values { zoom, focus, aperture }
 * @returns URL path (e.g. "/compare/slugA/slugB?focus=0.300")
 */
export function buildComparePath(slugA: string, slugB: string, sliders: BuildURLSliders = {}): string {
  const { zoom, focus, aperture } = sliders;
  const params = new URLSearchParams();
  if (zoom != null && zoom > 0) params.set("zoom", String(zoom));
  if (focus != null && focus > 0) params.set("focus", focus.toFixed(3));
  if (aperture != null && aperture > 0) params.set("aperture", aperture.toFixed(3));
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
