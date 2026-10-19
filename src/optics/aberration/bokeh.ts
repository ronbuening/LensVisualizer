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

import { sampleCircularPupil, type CircularPupilSample } from "../analysis/sampling.js";
import { skewImagePlaneIntercept, type SkewImagePlaneIntercept } from "../trace/rayAdapters.js";
import {
  computeAnalysisFieldGeometryAtState2 as computeAnalysisFieldGeometryAtState,
  type FieldGeometryState2 as FieldGeometryState,
} from "../state/fieldAdapters.js";
import { doLayout } from "../layout.js";
import type { LayoutResult, RuntimeLens } from "../../types/optics.js";
import {
  computeProjectionAwareOffAxisFieldGeometry,
  traceOffAxisBundleFromSamples,
} from "../analysis/aberration/offAxis.js";
import { computeBestFocusZFromLayout } from "../analysis/aberration/bestFocus.js";
import {
  buildBokehRadialProfile,
  classifyBokehBrightnessCharacter,
  emptyRadialProfile,
} from "../analysis/aberration/radialProfile.js";
import { createAnalysisRequest } from "../analysis/request.js";
import { prepareState } from "../state/preparedGeometry.js";
import { compiledLensFromRuntime } from "../prescription/compile.js";
import {
  BOKEH_CIRCULAR_PUPIL_RING_SAMPLES,
  BOKEH_PREVIEW_FIELD_FRACTIONS,
  type BokehDensityCell,
  type BokehFieldResult,
  type BokehPoint,
  type BokehPreviewPair,
  type BokehPreviewResult,
  type BokehPupilFootprint,
  type BokehPupilSample,
} from "../analysis/aberration/types.js";
import type { AnalysisSamplingOptions } from "../analysis/analysisQuality.js";

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

interface BokehTraceContext {
  focusT: number;
  zoomT: number;
  aberrationT: number;
  layout: LayoutResult;
  bestFocusZ: number;
  fieldGeometryState: FieldGeometryState;
  circularPupilSamples: CircularPupilSample[];
}

/* ── Best-focus helpers ── */

function buildBokehTraceContext(
  L: RuntimeLens,
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
  aberrationT = 0,
  sampling: AnalysisSamplingOptions = {},
): BokehTraceContext {
  const layout = doLayout(focusT, zoomT, L, aberrationT);
  return {
    focusT,
    zoomT,
    aberrationT,
    layout,
    bestFocusZ: computeBestFocusZFromLayout(
      createAnalysisRequest({
        preparedState: prepareState(compiledLensFromRuntime(L), focusT, zoomT, aberrationT),
        dynamicEFL: L.EFL,
        currentEPSD,
        currentPhysStopSD,
      }),
      layout,
    ),
    fieldGeometryState: computeAnalysisFieldGeometryAtState(focusT, zoomT, L, aberrationT),
    circularPupilSamples: sampleCircularPupil(sampling.bokehRingSamples ?? BOKEH_CIRCULAR_PUPIL_RING_SAMPLES),
  };
}

function emptyPupilFootprint(transmission = 0): BokehPupilFootprint {
  return {
    samples: [],
    transmission,
    centroidSagittal: 0,
    centroidTangential: 0,
    spanSagittal: 0,
    spanTangential: 0,
    shiftRadius: 0,
    catEyeAspect: 0,
  };
}

function makeEmptyFieldResult(
  fieldFraction: number,
  fieldAngleDeg: number,
  totalRays: number,
  transmission = 0,
): BokehFieldResult {
  return {
    fieldFraction,
    label: BOKEH_FIELD_LABELS[fieldFraction] ?? `${(fieldFraction * 100).toFixed(0)}%`,
    fieldAngleDeg,
    totalRays,
    passedRays: 0,
    points: [],
    centroidSagittal: 0,
    centroidTangential: 0,
    rmsRadiusMm: 0,
    maxRadiusMm: 0,
    transmission,
    pupilFootprint: emptyPupilFootprint(transmission),
    radialProfile: emptyRadialProfile(),
    brightnessCharacter: "neutral",
    centerToRimRatio: 1,
    usable: false,
  };
}

function buildPupilFootprint(samples: readonly BokehPupilSample[], totalRays: number): BokehPupilFootprint {
  if (samples.length === 0 || totalRays <= 0) return emptyPupilFootprint(0);

  const totalWeight = samples.reduce((sum, sample) => sum + sample.weight, 0);
  if (!Number.isFinite(totalWeight) || totalWeight <= 0) return emptyPupilFootprint(samples.length / totalRays);
  const centroidSagittal = samples.reduce((sum, sample) => sum + sample.xFraction * sample.weight, 0) / totalWeight;
  const centroidTangential = samples.reduce((sum, sample) => sum + sample.yFraction * sample.weight, 0) / totalWeight;
  const xs = samples.map((sample) => sample.xFraction);
  const ys = samples.map((sample) => sample.yFraction);
  const spanSagittal = Math.max(...xs) - Math.min(...xs);
  const spanTangential = Math.max(...ys) - Math.min(...ys);
  const maxSpan = Math.max(spanSagittal, spanTangential);

  return {
    samples: [...samples],
    transmission: samples.length / totalRays,
    centroidSagittal,
    centroidTangential,
    spanSagittal,
    spanTangential,
    shiftRadius: Math.sqrt(centroidSagittal * centroidSagittal + centroidTangential * centroidTangential),
    catEyeAspect: maxSpan > 1e-9 ? Math.min(spanSagittal, spanTangential) / maxSpan : 0,
  };
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
function computeBokehFieldFootprintFromContext(
  L: RuntimeLens,
  context: BokehTraceContext,
  currentEPSD: number,
  currentPhysStopSD: number,
  fieldFraction: number,
  sensorZ: number,
): BokehFieldResult | null {
  if (currentEPSD <= 0 || L.N < 1) return null;

  const geometry = computeProjectionAwareOffAxisFieldGeometry(
    L,
    context.layout.z,
    context.focusT,
    context.zoomT,
    fieldFraction,
    context.fieldGeometryState,
    context.aberrationT,
  );
  if (geometry === null) return null;

  const bundle = traceOffAxisBundleFromSamples(
    context.circularPupilSamples,
    geometry,
    L,
    context.focusT,
    context.zoomT,
    currentEPSD,
    currentPhysStopSD,
    undefined,
    context.aberrationT,
  );
  if (bundle === null) return null;

  const chiefDefocused: SkewImagePlaneIntercept | null = skewImagePlaneIntercept(
    bundle.chiefRay.trace.x,
    bundle.chiefRay.trace.y,
    bundle.chiefRay.trace.ux,
    bundle.chiefRay.trace.uy,
    geometry.lastSurfZ,
    sensorZ,
  );
  if (chiefDefocused === null) return null;

  const acceptedPupilSamples: BokehPupilSample[] = bundle.samples.map((sample) => ({
    index: sample.index,
    xFraction: sample.xFraction,
    yFraction: sample.yFraction,
    pupilRadius: sample.radiusFraction ?? 0,
    pupilAzimuth: sample.azimuthRad ?? 0,
    weight: sample.weight ?? 1,
  }));
  const pupilFootprint = buildPupilFootprint(acceptedPupilSamples, bundle.sampleCount);

  const points: BokehPoint[] = [];
  for (let i = 0; i < bundle.samples.length; i++) {
    const sample = bundle.samples[i];
    const intercept = skewImagePlaneIntercept(
      sample.trace.x,
      sample.trace.y,
      sample.trace.ux,
      sample.trace.uy,
      geometry.lastSurfZ,
      sensorZ,
    );
    if (intercept === null) continue;

    points.push({
      index: i,
      sagittalOffset: intercept.x - chiefDefocused.x,
      tangentialOffset: intercept.y - chiefDefocused.y,
      pupilRadius: sample.radiusFraction ?? 0,
      pupilAzimuth: sample.azimuthRad ?? 0,
      weight: (sample.weight ?? 1) * (sample.trace.transmission ?? 1),
    });
  }

  if (points.length < BOKEH_MIN_VALID_SAMPLES) {
    return {
      ...makeEmptyFieldResult(fieldFraction, geometry.fieldAngleDeg, bundle.sampleCount, pupilFootprint.transmission),
      pupilFootprint,
    };
  }

  const totalWeight = points.reduce((sum, point) => sum + point.weight, 0);
  if (!Number.isFinite(totalWeight) || totalWeight <= 0) {
    return {
      ...makeEmptyFieldResult(fieldFraction, geometry.fieldAngleDeg, bundle.sampleCount, pupilFootprint.transmission),
      pupilFootprint,
    };
  }
  const centroidSagittal = points.reduce((sum, point) => sum + point.sagittalOffset * point.weight, 0) / totalWeight;
  const centroidTangential =
    points.reduce((sum, point) => sum + point.tangentialOffset * point.weight, 0) / totalWeight;

  const rmsRadiusMm = Math.sqrt(
    points.reduce((sum, point) => {
      const dx = point.sagittalOffset - centroidSagittal;
      const dy = point.tangentialOffset - centroidTangential;
      return sum + point.weight * (dx * dx + dy * dy);
    }, 0) / totalWeight,
  );
  const maxRadiusMm = Math.max(
    ...points.map((point) => {
      const dx = point.sagittalOffset - centroidSagittal;
      const dy = point.tangentialOffset - centroidTangential;
      return Math.sqrt(dx * dx + dy * dy);
    }),
  );
  const radialProfile = buildBokehRadialProfile(points, centroidSagittal, centroidTangential);
  const { brightnessCharacter, centerToRimRatio } = classifyBokehBrightnessCharacter(radialProfile);

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
    transmission: pupilFootprint.transmission,
    pupilFootprint,
    radialProfile,
    brightnessCharacter,
    centerToRimRatio,
    usable: true,
  };
}

/**
 * Compute one field tile of a defocused bokeh footprint.
 *
 * Rays are traced at `traceFocusT` and intercepted at `sensorZ`. The returned
 * offsets are chief-ray centered in sagittal/tangential millimeters, with pupil
 * footprint data preserving transmission/clipping shape.
 *
 * @param L - runtime lens object
 * @param _zPos - compatibility layout argument; context recomputes state internally
 * @param traceFocusT - normalized focus state used for tracing
 * @param zoomT - normalized zoom slider
 * @param currentEPSD - entrance-pupil semi-diameter in mm
 * @param currentPhysStopSD - physical stop semi-diameter in mm
 * @param fieldFraction - fraction of half field in `[0, 1]`
 * @param sensorZ - defocused intercept plane z coordinate in mm
 * @param aberrationT - normalized aberration spacing slider
 * @returns bokeh footprint for the field, or null when tracing is unusable
 */
export function computeBokehFieldFootprint(
  L: RuntimeLens,
  _zPos: number[],
  traceFocusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
  fieldFraction: number,
  sensorZ: number,
  aberrationT = 0,
): BokehFieldResult | null {
  const context = buildBokehTraceContext(L, traceFocusT, zoomT, currentEPSD, currentPhysStopSD, aberrationT);
  return computeBokehFieldFootprintFromContext(L, context, currentEPSD, currentPhysStopSD, fieldFraction, sensorZ);
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

function computeBokehPreviewFromContext(
  L: RuntimeLens,
  context: BokehTraceContext,
  sensorZ: number,
  currentEPSD: number,
  currentPhysStopSD: number,
  label: string,
  sampling: AnalysisSamplingOptions = {},
): BokehPreviewResult | null {
  const defocusDelta = sensorZ - context.layout.imgZ;
  const fieldFractions = sampling.bokehFieldFractions ?? BOKEH_PREVIEW_FIELD_FRACTIONS;

  const fields: BokehFieldResult[] = fieldFractions.map((fieldFraction) => {
    const result = computeBokehFieldFootprintFromContext(
      L,
      context,
      currentEPSD,
      currentPhysStopSD,
      fieldFraction,
      sensorZ,
    );
    if (result !== null) return result;
    return makeEmptyFieldResult(fieldFraction, 0, context.circularPupilSamples.length);
  });

  const usableFields = fields.filter((field) => field.usable);
  if (usableFields.length < 1) return null;

  return {
    label,
    defocusDeltaMm: defocusDelta,
    fields,
    sharedHalfRangeMm: Math.max(BOKEH_MIN_SHARED_HALF_RANGE_MM, ...usableFields.map((field) => field.maxRadiusMm)),
    usableFieldCount: usableFields.length,
  };
}

/**
 * Label a defocus offset relative to the nominal focus plane.
 *
 * @param defocusDeltaMm - intercept plane offset from focus plane in mm
 * @returns human-readable side label for analysis display
 */
export function describeBokehDefocusSide(defocusDeltaMm: number): string {
  if (Math.abs(defocusDeltaMm) < 1e-9) return "Near focus plane";
  return defocusDeltaMm > 0 ? "Rear defocus" : "Front defocus";
}

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
  aberrationT = 0,
  sampling: AnalysisSamplingOptions = {},
): BokehPreviewResult | null {
  return computeBokehPreviewFromContext(
    L,
    buildBokehTraceContext(L, traceFocusT, zoomT, currentEPSD, currentPhysStopSD, aberrationT, sampling),
    sensorZ,
    currentEPSD,
    currentPhysStopSD,
    label,
    sampling,
  );
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
  aberrationT = 0,
  sampling: AnalysisSamplingOptions = {},
): BokehPreviewPair {
  const contextCache = new Map<number, BokehTraceContext>();
  const getContext = (contextFocusT: number): BokehTraceContext => {
    const cached = contextCache.get(contextFocusT);
    if (cached) return cached;
    const next = buildBokehTraceContext(L, contextFocusT, zoomT, currentEPSD, currentPhysStopSD, aberrationT, sampling);
    contextCache.set(contextFocusT, next);
    return next;
  };

  const infContext = getContext(0);
  const nearContext = getContext(1);
  const viewContext = getContext(focusT);

  /*
   * Infinity grid: sensorZ anchored at bf(0) (in-focus = minimum blur),
   * then shifted by layout extension and best-focus drift:
   *   sensorZ = bf(0) + [imgZ(view) − imgZ(0)] + [bf(0) − bf(view)]
   *
   * At fT=0 both shifts are zero → sensorZ = bf(0) → minimum RMS.
   * – Unit-focus: imgZ shift dominates → growing defocus
   * – Internal-focus: bf shift dominates → growing defocus
   */
  const infSensorZ =
    infContext.bestFocusZ +
    (viewContext.layout.imgZ - infContext.layout.imgZ) +
    (infContext.bestFocusZ - viewContext.bestFocusZ);
  const infinity = computeBokehPreviewFromContext(
    L,
    infContext,
    infSensorZ,
    currentEPSD,
    currentPhysStopSD,
    "Infinity",
    sampling,
  );

  /*
   * Near grid: applies the infinity grid's defocus curve at the complementary
   * focus position (1−view), anchored at bf(1).
   *   sensorZ = bf(1) + [imgZ(1−view) − imgZ(0)] + [bf(0) − bf(1−view)]
   * At fT=1 → complementary=0: shifts are zero → sensorZ = bf(1) → minimum RMS.
   * At fT=0 → complementary=1: shifts are maximal → large defocus.
   */
  const complementaryFocusT = 1 - focusT;
  const complementaryContext = getContext(complementaryFocusT);
  const nearSensorZ =
    nearContext.bestFocusZ +
    (complementaryContext.layout.imgZ - infContext.layout.imgZ) +
    (infContext.bestFocusZ - complementaryContext.bestFocusZ);
  const nearFocus = computeBokehPreviewFromContext(
    L,
    nearContext,
    nearSensorZ,
    currentEPSD,
    currentPhysStopSD,
    "Near Focus",
    sampling,
  );

  return { infinity, nearFocus };
}
