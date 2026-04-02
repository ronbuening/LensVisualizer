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

import {
  doLayout,
  skewImagePlaneIntercept,
  type SkewImagePlaneIntercept,
} from "../optics.js";
import type { RuntimeLens } from "../../types/optics.js";
import { computeOffAxisFieldGeometry, traceCircularOffAxisBundle } from "./offAxis.js";
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

/* ── Image-plane Z helpers ── */

/**
 * Compute the absolute image-plane Z position for a given focusT by performing
 * a full layout pass. This is the Z at which a perfectly focused image forms.
 */
export function computeImagePlaneZAtFocus(L: RuntimeLens, focusT: number, zoomT: number): number {
  return doLayout(focusT, zoomT, L).imgZ;
}

/* ── Per-field footprint ── */

/**
 * Compute a single bokeh ball at a given field position.
 *
 * Traces a dense circular pupil bundle through the lens at `traceFocusT` optics,
 * then re-intercepts each surviving ray on a plane shifted by `defocusDelta` from
 * the trace-focus image plane. The offset simulates a point source whose image
 * forms at a different Z than the sensor plane.
 *
 * @param traceFocusT  Focus setting at which rays are traced (defines variable gaps)
 * @param defocusDelta Signed shift applied to imagePlaneZ (positive = behind sensor)
 */
export function computeBokehFieldFootprint(
  L: RuntimeLens,
  zPos: number[],
  traceFocusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
  fieldFraction: number,
  defocusDelta: number,
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

  /* Re-intercept chief ray on the defocused plane */
  const defocusedImgZ = geometry.imagePlaneZ + defocusDelta;
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
 * @param traceFocusT Focus state used for tracing (0 = infinity optics, 1 = near optics).
 * @param viewFocusT  Current focus slider position — determines the sensor plane.
 */
export function computeBokehPreview(
  L: RuntimeLens,
  traceFocusT: number,
  viewFocusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
  label: string,
): BokehPreviewResult | null {
  /* Layout at trace-focus and view-focus to get image plane Z for each */
  const traceLayout = doLayout(traceFocusT, zoomT, L);
  const viewLayout = doLayout(viewFocusT, zoomT, L);
  const defocusDelta = viewLayout.imgZ - traceLayout.imgZ;

  /* Use the trace-focus layout for surface positions */
  const zPos = traceLayout.z;

  const fields: BokehFieldResult[] = BOKEH_PREVIEW_FIELD_FRACTIONS.map((fieldFraction) => {
    const result = computeBokehFieldFootprint(
      L,
      zPos,
      traceFocusT,
      zoomT,
      currentEPSD,
      currentPhysStopSD,
      fieldFraction,
      defocusDelta,
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

  const sharedHalfRangeMm = Math.max(
    BOKEH_MIN_SHARED_HALF_RANGE_MM,
    ...usableFields.map((f) => f.maxRadiusMm),
  );

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
 * – Infinity grid: traces rays through infinity-focused optics (focusT=0),
 *   intercepted at the current focus plane (viewFocusT=focusT).
 * – Near focus grid: traces rays through near-focused optics (focusT=1),
 *   intercepted at the current focus plane.
 *
 * At the lens's current focus setting, one grid will show large defocused bokeh
 * while the other shows tiny near-focus spots, and vice versa.
 */
export function computeBokehPreviewPair(
  L: RuntimeLens,
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
): BokehPreviewPair {
  const infinity = computeBokehPreview(L, 0, focusT, zoomT, currentEPSD, currentPhysStopSD, "Infinity");
  const nearFocus = computeBokehPreview(L, 1, focusT, zoomT, currentEPSD, currentPhysStopSD, "Near Focus");

  return { infinity, nearFocus };
}
