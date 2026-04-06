/**
 * Bokeh preview computation — pure functions, no React dependencies.
 *
 * Computes defocused point-source images (bokeh balls) at multiple field positions
 * for both infinity-source and near-source scenarios. The bokeh shape emerges naturally
 * from:
 *   – Circular pupil sampling (337 rays in concentric rings)
 *   – Vignetting/clipping by element apertures (cat's eye shapes off-axis)
 *   – Spherical aberration (brightness profile across the disk)
 *
 * Each traced ray preserves its pupil coordinates (radius, azimuth) to enable
 * future aperture-blade-shape masking (polygonal bokeh).
 */

import { doLayout, skewImagePlaneIntercept, type SkewImagePlaneIntercept } from "../optics.js";
import type { RuntimeLens } from "../../types/optics.js";
import { computeOffAxisFieldGeometry, traceCircularOffAxisBundle } from "./offAxis.js";
import { bestFocusPlane, computeRealRayHit, PROFILE_FRACS } from "./shared.js";
import {
  BOKEH_CIRCULAR_PUPIL_RING_SAMPLES,
  BOKEH_PREVIEW_FIELD_FRACTIONS,
  type BokehDensityCell,
  type BokehFieldResult,
  type BokehPoint,
  type BokehPreviewPair,
  type BokehPreviewResult,
} from "./types.js";

/* ── Constants ── */

const BOKEH_FIELD_LABELS: Record<number, string> = {
  0: "Center",
  0.25: "25%",
  0.5: "50%",
  0.75: "75%",
};

/** Minimum number of surviving rays to consider a field position usable. */
const BOKEH_MIN_VALID_SAMPLES = 5;

/** Minimum shared half-range (mm) to prevent degenerate scaling on tiny spots. */
const BOKEH_MIN_SHARED_HALF_RANGE_MM = 0.001;

/* ── Best-focus helpers ── */

/**
 * Compute the absolute image-plane Z position for a given focusT by performing
 * a full layout pass. This is the Z at which a perfectly focused image forms.
 */
export function computeImagePlaneZAtFocus(L: RuntimeLens, focusT: number, zoomT: number): number {
  return doLayout(focusT, zoomT, L).imgZ;
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
export function computeBestFocusZ(
  L: RuntimeLens,
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
): number {
  const layout = doLayout(focusT, zoomT, L);
  const lastSurfZ = layout.z[L.N - 1];
  const imagePlaneZ = layout.imgZ;

  /* Trace on-axis rays at the standard SA profile fractions (±0.1 to ±0.95) */
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
    );
    return [plusHit, minusHit].filter((h): h is NonNullable<typeof h> => h !== null);
  });

  if (hits.length < 4) return imagePlaneZ;
  return bestFocusPlane(hits, lastSurfZ);
}

/* ── Per-field footprint ── */

/**
 * Compute a single bokeh ball at a given field position.
 *
 * Traces a dense circular pupil bundle through the lens at `traceFocusT` optics,
 * then re-intercepts each surviving ray at `sensorZ` — the absolute Z position
 * of the sensor plane. This avoids reliance on `geometry.imagePlaneZ` (which
 * uses the nominal last-gap thickness and is wrong when that gap is variable).
 *
 * @param traceFocusT Focus setting at which rays are traced (defines variable gaps)
 * @param sensorZ     Absolute Z position of the sensor (image plane at current focus)
 */
export function computeBokehFieldFootprint(
  L: RuntimeLens,
  zPos: number[],
  traceFocusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
  fieldFraction: number,
  sensorZ: number,
): BokehFieldResult | null {
  if (currentEPSD <= 0 || L.N < 1) return null;

  const geometry = computeOffAxisFieldGeometry(L, zPos, zoomT, fieldFraction);
  if (geometry === null) return null;

  const bundle = traceCircularOffAxisBundle(
    BOKEH_CIRCULAR_PUPIL_RING_SAMPLES,
    geometry,
    L,
    traceFocusT,
    zoomT,
    currentEPSD,
    currentPhysStopSD,
  );
  if (bundle === null) return null;

  /* Re-intercept chief ray at the sensor plane */
  const defocusedImgZ = sensorZ;
  const chiefDefocused: SkewImagePlaneIntercept | null = skewImagePlaneIntercept(
    bundle.chiefRay.trace.x,
    bundle.chiefRay.trace.y,
    bundle.chiefRay.trace.ux,
    bundle.chiefRay.trace.uy,
    geometry.lastSurfZ,
    defocusedImgZ,
  );
  if (chiefDefocused === null) return null;

  /* Re-intercept each surviving ray and compute relative offsets */
  const points: BokehPoint[] = [];
  for (let i = 0; i < bundle.samples.length; i++) {
    const sample = bundle.samples[i];
    const intercept = skewImagePlaneIntercept(
      sample.trace.x,
      sample.trace.y,
      sample.trace.ux,
      sample.trace.uy,
      geometry.lastSurfZ,
      defocusedImgZ,
    );
    if (intercept === null) continue;

    points.push({
      index: i,
      sagittalOffset: intercept.x - chiefDefocused.x,
      tangentialOffset: intercept.y - chiefDefocused.y,
      pupilRadius: sample.radiusFraction ?? 0,
      pupilAzimuth: sample.azimuthRad ?? 0,
      weight: sample.weight ?? 1,
    });
  }

  if (points.length < BOKEH_MIN_VALID_SAMPLES) {
    return {
      fieldFraction,
      label: BOKEH_FIELD_LABELS[fieldFraction] ?? `${(fieldFraction * 100).toFixed(0)}%`,
      fieldAngleDeg: geometry.fieldAngleDeg,
      totalRays: bundle.sampleCount,
      passedRays: 0,
      points: [],
      centroidSagittal: 0,
      centroidTangential: 0,
      rmsRadiusMm: 0,
      maxRadiusMm: 0,
      transmission: 0,
      usable: false,
    };
  }

  /* Weighted centroid */
  const totalWeight = points.reduce((sum, p) => sum + p.weight, 0);
  const centroidSagittal = points.reduce((sum, p) => sum + p.sagittalOffset * p.weight, 0) / totalWeight;
  const centroidTangential = points.reduce((sum, p) => sum + p.tangentialOffset * p.weight, 0) / totalWeight;

  /* RMS radius and max radius */
  const rmsRadiusMm = Math.sqrt(
    points.reduce((sum, p) => {
      const dx = p.sagittalOffset - centroidSagittal;
      const dy = p.tangentialOffset - centroidTangential;
      return sum + p.weight * (dx * dx + dy * dy);
    }, 0) / totalWeight,
  );
  const maxRadiusMm = Math.max(
    ...points.map((p) => {
      const dx = p.sagittalOffset - centroidSagittal;
      const dy = p.tangentialOffset - centroidTangential;
      return Math.sqrt(dx * dx + dy * dy);
    }),
  );

  return {
    fieldFraction,
    label: BOKEH_FIELD_LABELS[fieldFraction] ?? `${(fieldFraction * 100).toFixed(0)}%`,
    fieldAngleDeg: geometry.fieldAngleDeg,
    totalRays: bundle.sampleCount,
    passedRays: points.length,
    points,
    centroidSagittal,
    centroidTangential,
    rmsRadiusMm,
    maxRadiusMm,
    transmission: points.length / bundle.sampleCount,
    usable: true,
  };
}

/* ── Density heatmap ── */

/**
 * Bin a set of bokeh points into a 2D density grid.
 *
 * Returns only non-empty cells, normalised so the densest cell = 1.0.
 * This utility is intentionally generic: it can be reused for any future
 * point-cloud density visualisation (e.g., PSF maps).
 *
 * @param points    Array of points with sagittalOffset, tangentialOffset, weight.
 * @param halfRange Extent of the grid in each direction (mm). Grid covers ±halfRange.
 * @param gridSize  Number of bins per axis (e.g., 64 → 64×64 grid).
 */
export function buildBokehDensityGrid(
  points: readonly BokehPoint[],
  halfRange: number,
  gridSize: number,
): BokehDensityCell[] {
  if (points.length === 0 || halfRange <= 0 || gridSize < 1) return [];

  const binSize = (2 * halfRange) / gridSize;
  const grid = new Float64Array(gridSize * gridSize);

  for (const p of points) {
    const col = Math.floor((p.sagittalOffset + halfRange) / binSize);
    const row = Math.floor((p.tangentialOffset + halfRange) / binSize);
    if (col >= 0 && col < gridSize && row >= 0 && row < gridSize) {
      grid[row * gridSize + col] += p.weight;
    }
  }

  /* Normalise to [0, 1] */
  let maxDensity = 0;
  for (let i = 0; i < grid.length; i++) {
    if (grid[i] > maxDensity) maxDensity = grid[i];
  }
  if (maxDensity <= 0) return [];

  const cells: BokehDensityCell[] = [];
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const density = grid[row * gridSize + col] / maxDensity;
      if (density > 0) {
        cells.push({
          x: -halfRange + (col + 0.5) * binSize,
          y: -halfRange + (row + 0.5) * binSize,
          density,
        });
      }
    }
  }

  return cells;
}

/* ── Single grid computation ── */

/**
 * Compute one bokeh preview grid (e.g., infinity-source or near-source).
 *
 * Rays are traced through the lens at `traceFocusT` and intercepted at the
 * supplied `sensorZ` — the absolute Z position of the intercept plane. The
 * caller is responsible for computing a sensorZ that produces the correct
 * defocus for both unit-focus and internal-focus lens types.
 *
 * @param traceFocusT Focus state used for tracing (defines variable gaps and SA character).
 * @param sensorZ     Absolute Z position of the intercept plane.
 * @param label       Display label for the grid ("Infinity" or "Near Focus").
 */
export function computeBokehPreview(
  L: RuntimeLens,
  traceFocusT: number,
  sensorZ: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
  label: string,
): BokehPreviewResult | null {
  /* Surface positions from the trace-focus layout */
  const traceLayout = doLayout(traceFocusT, zoomT, L);
  const zPos = traceLayout.z;

  /* Defocus for reporting: distance from sensor to trace-focus image plane */
  const defocusDelta = sensorZ - traceLayout.imgZ;

  const fields: BokehFieldResult[] = BOKEH_PREVIEW_FIELD_FRACTIONS.map((fieldFraction) => {
    const result = computeBokehFieldFootprint(
      L,
      zPos,
      traceFocusT,
      zoomT,
      currentEPSD,
      currentPhysStopSD,
      fieldFraction,
      sensorZ,
    );
    if (result !== null) return result;

    /* Empty placeholder for unusable field */
    return {
      fieldFraction,
      label: BOKEH_FIELD_LABELS[fieldFraction] ?? `${(fieldFraction * 100).toFixed(0)}%`,
      fieldAngleDeg: 0,
      totalRays: 0,
      passedRays: 0,
      points: [],
      centroidSagittal: 0,
      centroidTangential: 0,
      rmsRadiusMm: 0,
      maxRadiusMm: 0,
      transmission: 0,
      usable: false,
    };
  });

  const usableFields = fields.filter((f) => f.usable);
  if (usableFields.length < 1) return null;

  const sharedHalfRangeMm = Math.max(BOKEH_MIN_SHARED_HALF_RANGE_MM, ...usableFields.map((f) => f.maxRadiusMm));

  return {
    label,
    defocusDeltaMm: defocusDelta,
    fields,
    sharedHalfRangeMm,
    usableFieldCount: usableFields.length,
  };
}

/* ── Paired computation (main entry point) ── */

/**
 * Compute both infinity-source and near-source bokeh preview grids.
 *
 * Each grid traces through its reference optical configuration (fT=0 for
 * infinity, fT=1 for near) to maintain consistent SA and vignetting. The
 * intercept plane (sensorZ) is computed to give physically correct defocus
 * for both unit-focusing lenses (total track changes) and internal-focus
 * lenses (constant total track, variable EFL).
 *
 * **Infinity grid** sensorZ combines layout shift and convergence shift:
 *   `sensorZ = imgZ(view) + conv(0) − conv(view)`
 *
 * **Near grid** uses the infinity grid's defocus at the complementary focus
 * position (1 − viewFocusT), applied around the near-focus convergence:
 *   `sensorZ = conv(1) + imgZ(1−view) − conv(1−view)`
 *
 * This ensures: at viewFocusT=0 the infinity grid shows an in-focus spot
 * and the near grid shows maximum defocus; at viewFocusT=1 they swap.
 */
export function computeBokehPreviewPair(
  L: RuntimeLens,
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
): BokehPreviewPair {
  /*
   * Pre-compute the RMS-best-focus Z at key focus positions. Using the best-
   * focus plane (circle of least confusion) instead of the paraxial focus
   * ensures monotonic defocus even for fast lenses with strong SA.
   */
  const bf0 = computeBestFocusZ(L, 0, zoomT, currentEPSD, currentPhysStopSD);
  const bf1 = computeBestFocusZ(L, 1, zoomT, currentEPSD, currentPhysStopSD);
  const bfView = computeBestFocusZ(L, focusT, zoomT, currentEPSD, currentPhysStopSD);
  const imgZ0 = doLayout(0, zoomT, L).imgZ;
  const imgZView = doLayout(focusT, zoomT, L).imgZ;

  /*
   * Infinity grid: sensorZ anchored at bf(0) (in-focus = minimum blur),
   * then shifted by layout extension and best-focus drift:
   *   sensorZ = bf(0) + [imgZ(view) − imgZ(0)] + [bf(0) − bf(view)]
   *
   * At fT=0 both shifts are zero → sensorZ = bf(0) → minimum RMS.
   * – Unit-focus: imgZ shift dominates → growing defocus
   * – Internal-focus: bf shift dominates → growing defocus
   */
  const infSensorZ = bf0 + (imgZView - imgZ0) + (bf0 - bfView);
  const infinity = computeBokehPreview(L, 0, infSensorZ, zoomT, currentEPSD, currentPhysStopSD, "Infinity");

  /*
   * Near grid: applies the infinity grid's defocus curve at the complementary
   * focus position (1−view), anchored at bf(1).
   *   sensorZ = bf(1) + [imgZ(1−view) − imgZ(0)] + [bf(0) − bf(1−view)]
   * At fT=1 → complementary=0: shifts are zero → sensorZ = bf(1) → minimum RMS.
   * At fT=0 → complementary=1: shifts are maximal → large defocus.
   */
  const complementaryFocusT = 1 - focusT;
  const bfComplement = computeBestFocusZ(L, complementaryFocusT, zoomT, currentEPSD, currentPhysStopSD);
  const imgZComplement = doLayout(complementaryFocusT, zoomT, L).imgZ;
  const nearSensorZ = bf1 + (imgZComplement - imgZ0) + (bf0 - bfComplement);
  const nearFocus = computeBokehPreview(L, 1, nearSensorZ, zoomT, currentEPSD, currentPhysStopSD, "Near Focus");

  return { infinity, nearFocus };
}
