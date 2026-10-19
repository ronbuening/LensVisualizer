/** Weighted axial best focus, preserving its own full layout coordinate system. */

import type { LayoutResult } from "../../../types/optics.js";
import { doLayout } from "../../layout.js";
import { runtimeView } from "../../prescription/runtimeView.js";
import { prepareRayTrace } from "../../trace/rayAdapters.js";
import type { AnalysisRequest } from "../request.js";
import { computeRealRayHit, PROFILE_FRACS, type RealRayHit } from "./shared.js";

/** Least-squares focus, weighted by each ray's surviving optical intensity. */
function photometricBestFocusPlane(hits: readonly RealRayHit[], lastSurfZ: number): number {
  const denom = hits.reduce((sum, hit) => sum + (hit.transmission ?? 1) * hit.slope * hit.slope, 0);
  if (!Number.isFinite(denom) || denom <= 1e-12) return lastSurfZ;

  const numer = hits.reduce((sum, hit) => {
    const referenceZ = hit.referenceZ ?? lastSurfZ;
    return sum + (hit.transmission ?? 1) * (hit.slope * hit.slope * referenceZ - hit.coordinate * hit.slope);
  }, 0);
  return Number.isFinite(numer) ? numer / denom : lastSurfZ;
}

/**
 * Compute the absolute image-plane Z position for a given focusT by performing
 * a full layout pass. This is the Z at which a perfectly focused image forms.
 */
export function computeImagePlaneZAtFocus(request: AnalysisRequest): number {
  const { focusT, zoomT } = request.preparedGeometry;
  const L = runtimeView(request.preparedGeometry.lens);
  return doLayout(focusT, zoomT, L).imgZ;
}

/** Bokeh shares its already-computed layout so each preview keeps its own focus coordinates. */
export function computeBestFocusZFromLayout(request: AnalysisRequest, layout: LayoutResult): number {
  const { focusT, zoomT, aberrationT } = request.preparedGeometry;
  const L = runtimeView(request.preparedGeometry.lens);
  const { entrancePupilSemiDiameterMm: currentEPSD, stopSemiDiameterMm: currentPhysStopSD } = request.aperture;
  const lastSurfZ = layout.z[L.N - 1];
  const imagePlaneZ = layout.imgZ;

  const prepared = prepareRayTrace(L, {
    zPos: layout.z,
    focusT,
    zoomT,
    stopSD: currentPhysStopSD,
    ghost: true,
    aberrationT,
  });
  const hits = PROFILE_FRACS.flatMap((fraction) => {
    const plusHit = computeRealRayHit(
      L,
      layout.z,
      focusT,
      zoomT,
      currentEPSD,
      currentPhysStopSD,
      lastSurfZ,
      imagePlaneZ,
      fraction,
      aberrationT,
      prepared,
    );
    const minusHit = computeRealRayHit(
      L,
      layout.z,
      focusT,
      zoomT,
      currentEPSD,
      currentPhysStopSD,
      lastSurfZ,
      imagePlaneZ,
      -fraction,
      aberrationT,
      prepared,
    );
    return [plusHit, minusHit].filter((h): h is NonNullable<typeof h> => h !== null);
  });

  if (hits.length < 4) return imagePlaneZ;
  return photometricBestFocusPlane(hits, lastSurfZ);
}

/**
 * Find the RMS-best-focus Z for on-axis infinity light traced through the lens
 * at a given focus setting. This is the Z plane that minimises the weighted
 * ray-intercept spread across the full aperture — the circle of least confusion.
 *
 * Using the best-focus plane (instead of the paraxial convergence) ensures that
 * the bokeh defocus grows monotonically with the focus slider, even for fast
 * lenses with significant spherical aberration whose paraxial and marginal foci
 * differ substantially.
 *
 * Falls back to the layout imgZ if insufficient rays survive.
 */
export function computeBestFocusZ(request: AnalysisRequest): number {
  const { focusT, zoomT, aberrationT } = request.preparedGeometry;
  const L = runtimeView(request.preparedGeometry.lens);
  const layout = doLayout(focusT, zoomT, L, aberrationT);
  return computeBestFocusZFromLayout(request, layout);
}
