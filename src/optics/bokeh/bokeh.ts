/**
 * Bokeh preview computation — simulates bokeh ball appearance at four field
 * positions (Centre, 25 %, 50 %, 75 %) for two object-distance scenarios:
 *
 *   infinityGrid — point source at infinity; ball size grows as the lens is
 *                  focused away from infinity (focusT increases).
 *   nearGrid     — point source at the lens minimum focus distance; ball size
 *                  shrinks as focusT approaches 1 (near focus).
 *
 * Both grids are traced through the SAME current-focus-state surface layout
 * (zPos at focusT) and sensor plane, so the focus slider and aperture slider
 * naturally drive both grids.
 *
 * Near-object rays use traceNearObjectCircularOffAxisBundle which applies full
 * 2D slope corrections (du_x, du_y) to simulate a finite-distance point source.
 */

import { traceCircularOffAxisBundle, traceNearObjectCircularOffAxisBundle } from "../aberration/offAxis.js";
import { computeOffAxisFieldGeometry } from "../aberration/offAxis.js";
import { doLayout } from "../optics.js";
import type { RuntimeLens } from "../../types/optics.js";
import type {
  BokehPreviewFieldResult,
  BokehPreviewGrid,
  BokehPreviewPoint,
  BokehPreviewResult,
} from "../aberration/types.js";
import { BOKEH_PREVIEW_FIELD_FRACTIONS, BOKEH_PREVIEW_PUPIL_RING_SAMPLES } from "../aberration/types.js";

const BOKEH_MIN_VALID_SAMPLES = 5;
/** 15 % padding so that no point-cloud dot is clipped at a tile boundary. */
const BOKEH_SCALE_PADDING = 1.15;
/** Minimum shared half-range to avoid degenerate scale (mm). */
const BOKEH_MIN_SHARED_HALF_RANGE_MM = 0.005;

const BOKEH_PREVIEW_FIELD_LABELS: Record<(typeof BOKEH_PREVIEW_FIELD_FRACTIONS)[number], string> = {
  0: "Center",
  0.25: "25%",
  0.5: "50%",
  0.75: "75%",
};

function emptyBokehFieldResult(fieldFraction: (typeof BOKEH_PREVIEW_FIELD_FRACTIONS)[number]): BokehPreviewFieldResult {
  return {
    fieldFraction,
    label: BOKEH_PREVIEW_FIELD_LABELS[fieldFraction],
    fieldAngleDeg: 0,
    sampleCount: 0,
    validSampleCount: 0,
    clippedSampleCount: 0,
    vignetteTransmission: 0,
    chiefTangentialImageHeight: 0,
    chiefSagittalImageHeight: 0,
    minRelativeSagittalImageHeight: 0,
    maxRelativeSagittalImageHeight: 0,
    minRelativeTangentialImageHeight: 0,
    maxRelativeTangentialImageHeight: 0,
    centroidSagittalImageHeight: 0,
    centroidTangentialImageHeight: 0,
    rmsRadiusMm: 0,
    rmsRadiusUm: 0,
    points: [],
    usable: false,
  };
}

/**
 * Traces one bokeh field footprint.
 *
 * When D_near_mm is provided, traces near-object rays (converging slopes).
 * When omitted, traces infinity rays (parallel entry — standard off-axis bundle).
 */
function computeBokehFieldFootprint(
  L: RuntimeLens,
  zPos: number[],
  imgZ: number,
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
  fieldFraction: (typeof BOKEH_PREVIEW_FIELD_FRACTIONS)[number],
  D_near_mm?: number,
): BokehPreviewFieldResult | null {
  if (currentEPSD <= 0 || L.N < 1) return null;

  const geometry = computeOffAxisFieldGeometry(L, zPos, zoomT, fieldFraction);
  if (geometry === null) return null;
  // Override with the focus-adjusted image plane from doLayout.
  // computeOffAxisFieldGeometry uses the nominal L.S[N-1].d, which is incorrect
  // for back-focus-only lenses (e.g. Zeiss Sonnar) where only the last gap changes.
  geometry.imagePlaneZ = imgZ;

  const bundle =
    D_near_mm !== undefined && D_near_mm > 0
      ? traceNearObjectCircularOffAxisBundle(
          BOKEH_PREVIEW_PUPIL_RING_SAMPLES,
          geometry,
          L,
          focusT,
          zoomT,
          currentEPSD,
          currentPhysStopSD,
          D_near_mm,
        )
      : traceCircularOffAxisBundle(
          BOKEH_PREVIEW_PUPIL_RING_SAMPLES,
          geometry,
          L,
          focusT,
          zoomT,
          currentEPSD,
          currentPhysStopSD,
        );

  if (bundle === null) return null;

  const points: BokehPreviewPoint[] = bundle.samples.map((sample, index) => ({
    index,
    sourceSampleIndex: sample.sourceSampleIndex,
    sagittalImageHeight: sample.imagePoint.x - bundle.chiefRay.imagePoint.x,
    tangentialImageHeight: sample.imagePoint.y - bundle.chiefRay.imagePoint.y,
    weight: sample.weight ?? 0,
    radiusFraction: sample.radiusFraction,
    pupilXFraction: sample.xFraction,
    pupilYFraction: sample.yFraction,
  }));

  if (points.length < BOKEH_MIN_VALID_SAMPLES) return null;

  const sagittalHeights = points.map((p) => p.sagittalImageHeight);
  const tangentialHeights = points.map((p) => p.tangentialImageHeight);
  const totalWeight = points.reduce((sum, p) => sum + p.weight, 0);

  const centroidSagittalImageHeight =
    totalWeight > 0 ? points.reduce((sum, p) => sum + p.sagittalImageHeight * p.weight, 0) / totalWeight : 0;
  const centroidTangentialImageHeight =
    totalWeight > 0 ? points.reduce((sum, p) => sum + p.tangentialImageHeight * p.weight, 0) / totalWeight : 0;

  const rmsRadiusMm =
    totalWeight > 0
      ? Math.sqrt(
          points.reduce((sum, p) => {
            const dx = p.sagittalImageHeight - centroidSagittalImageHeight;
            const dy = p.tangentialImageHeight - centroidTangentialImageHeight;
            return sum + p.weight * (dx * dx + dy * dy);
          }, 0) / totalWeight,
        )
      : 0;

  return {
    fieldFraction,
    label: BOKEH_PREVIEW_FIELD_LABELS[fieldFraction],
    fieldAngleDeg: geometry.fieldAngleDeg,
    sampleCount: bundle.sampleCount,
    validSampleCount: bundle.validSampleCount,
    clippedSampleCount: bundle.clippedSampleCount,
    vignetteTransmission: bundle.sampleCount > 0 ? bundle.validSampleCount / bundle.sampleCount : 0,
    chiefTangentialImageHeight: bundle.chiefRay.imagePoint.y,
    chiefSagittalImageHeight: bundle.chiefRay.imagePoint.x,
    minRelativeSagittalImageHeight: Math.min(...sagittalHeights),
    maxRelativeSagittalImageHeight: Math.max(...sagittalHeights),
    minRelativeTangentialImageHeight: Math.min(...tangentialHeights),
    maxRelativeTangentialImageHeight: Math.max(...tangentialHeights),
    centroidSagittalImageHeight,
    centroidTangentialImageHeight,
    rmsRadiusMm,
    rmsRadiusUm: rmsRadiusMm * 1000,
    points,
    usable: true,
  };
}

/**
 * Builds one complete 2×2 bokeh preview grid (4 field positions) at a given
 * object distance / focus configuration.
 *
 * Returns null if no field position produces a usable footprint.
 */
function buildBokehGrid(
  L: RuntimeLens,
  zPos: number[],
  imgZ: number,
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
  D_near_mm?: number,
): BokehPreviewGrid | null {
  const fields: BokehPreviewFieldResult[] = BOKEH_PREVIEW_FIELD_FRACTIONS.map((fieldFraction) => {
    const footprint = computeBokehFieldFootprint(
      L,
      zPos,
      imgZ,
      focusT,
      zoomT,
      currentEPSD,
      currentPhysStopSD,
      fieldFraction,
      D_near_mm,
    );
    return footprint ?? emptyBokehFieldResult(fieldFraction);
  });

  const usableFields = fields.filter((f) => f.usable);
  if (usableFields.length < 1) return null;

  // Compute shared scale from the maximum extent across all usable fields,
  // then add 15 % padding to ensure no point-cloud dot is clipped at tile edges.
  const maxExtent = Math.max(
    ...usableFields.flatMap((f) => [
      Math.abs(f.minRelativeSagittalImageHeight),
      Math.abs(f.maxRelativeSagittalImageHeight),
      Math.abs(f.minRelativeTangentialImageHeight),
      Math.abs(f.maxRelativeTangentialImageHeight),
    ]),
  );

  const sharedSpotHalfRangeMm = Math.max(BOKEH_MIN_SHARED_HALF_RANGE_MM, maxExtent * BOKEH_SCALE_PADDING);

  return {
    fieldFractions: BOKEH_PREVIEW_FIELD_FRACTIONS,
    fields,
    sharedSpotHalfRangeMm,
    usableFieldCount: usableFields.length,
  };
}

/**
 * Computes the full bokeh preview: two 2×2 grids at the current focus position.
 *
 * infinityGrid — infinity point source; balls grow as focusT increases.
 * nearGrid     — near point source at L.closeFocusM; balls shrink as focusT→1.
 *
 * Both grids use the same zPos (current layout) and focusT, so they respond
 * identically to the focus slider and aperture slider.
 */
export function computeBokehPreview(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
): BokehPreviewResult {
  /** Minimum focus distance converted to mm for ray-slope calculations. */
  const D_near_mm = L.closeFocusM * 1000;

  // Derive the focus-adjusted image plane position. computeOffAxisFieldGeometry
  // uses the nominal L.S[N-1].d and gives the wrong imagePlaneZ for lenses where
  // only the back-focus gap changes (e.g. Zeiss Sonnar 50 f/1.5). Using imgZ from
  // doLayout is correct for all focus mechanisms.
  const { imgZ } = doLayout(focusT, zoomT, L);

  const infinityGrid = buildBokehGrid(L, zPos, imgZ, focusT, zoomT, currentEPSD, currentPhysStopSD);
  const nearGrid = buildBokehGrid(L, zPos, imgZ, focusT, zoomT, currentEPSD, currentPhysStopSD, D_near_mm);

  return { infinityGrid, nearGrid };
}
