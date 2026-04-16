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
  computeFieldGeometryAtState,
  doLayout,
  sampleCircularPupil,
  skewImagePlaneIntercept,
  type CircularPupilSample,
  type FieldGeometryState,
  type SkewImagePlaneIntercept,
} from "../optics.js";
import type { LayoutResult, RuntimeLens } from "../../types/optics.js";
import { computeStateAwareOffAxisFieldGeometry, traceOffAxisBundleFromSamples } from "./offAxis.js";
import { bestFocusPlane, computeRealRayHit, PROFILE_FRACS } from "./shared.js";
import {
  BOKEH_CIRCULAR_PUPIL_RING_SAMPLES,
  BOKEH_RADIAL_PROFILE_BIN_COUNT,
  BOKEH_PREVIEW_FIELD_FRACTIONS,
  type BokehBrightnessCharacter,
  type BokehDensityCell,
  type BokehFieldResult,
  type BokehPoint,
  type BokehPreviewPair,
  type BokehPreviewResult,
  type BokehPupilFootprint,
  type BokehPupilSample,
  type BokehRadialProfile,
  type BokehRadialProfileBin,
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
const BOKEH_BRIGHTNESS_RATIO_THRESHOLD = 1.15;

interface BokehTraceContext {
  focusT: number;
  zoomT: number;
  layout: LayoutResult;
  bestFocusZ: number;
  fieldGeometryState: FieldGeometryState;
  circularPupilSamples: CircularPupilSample[];
}

/* ── Best-focus helpers ── */

/**
 * Compute the absolute image-plane Z position for a given focusT by performing
 * a full layout pass. This is the Z at which a perfectly focused image forms.
 */
export function computeImagePlaneZAtFocus(L: RuntimeLens, focusT: number, zoomT: number): number {
  return doLayout(focusT, zoomT, L).imgZ;
}

function computeBestFocusZFromLayout(
  L: RuntimeLens,
  layout: LayoutResult,
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
): number {
  const lastSurfZ = layout.z[L.N - 1];
  const imagePlaneZ = layout.imgZ;

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
  return computeBestFocusZFromLayout(L, layout, focusT, zoomT, currentEPSD, currentPhysStopSD);
}

function buildBokehTraceContext(
  L: RuntimeLens,
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
): BokehTraceContext {
  const layout = doLayout(focusT, zoomT, L);
  return {
    focusT,
    zoomT,
    layout,
    bestFocusZ: computeBestFocusZFromLayout(L, layout, focusT, zoomT, currentEPSD, currentPhysStopSD),
    fieldGeometryState: computeFieldGeometryAtState(focusT, zoomT, L),
    circularPupilSamples: sampleCircularPupil(BOKEH_CIRCULAR_PUPIL_RING_SAMPLES),
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

function emptyRadialProfile(): BokehRadialProfile {
  return {
    bins: [],
    centerDensity: 0,
    rimDensity: 0,
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

export function buildBokehRadialProfile(
  points: readonly BokehPoint[],
  centroidSagittal: number,
  centroidTangential: number,
  binCount = BOKEH_RADIAL_PROFILE_BIN_COUNT,
): BokehRadialProfile {
  if (points.length === 0 || binCount < 1) return emptyRadialProfile();

  const clampedBinCount = Math.max(1, Math.round(binCount));
  const radii = points.map((point) => {
    const dx = point.sagittalOffset - centroidSagittal;
    const dy = point.tangentialOffset - centroidTangential;
    return Math.sqrt(dx * dx + dy * dy);
  });
  const maxRadius = Math.max(...radii);
  if (maxRadius <= 1e-12) {
    const bins: BokehRadialProfileBin[] = Array.from({ length: clampedBinCount }, (_, index) => ({
      innerRadiusFraction: index / clampedBinCount,
      outerRadiusFraction: (index + 1) / clampedBinCount,
      radiusFraction: (index + 0.5) / clampedBinCount,
      density: index === 0 ? 1 : 0,
      energyFraction: index === 0 ? 1 : 0,
    }));
    return {
      bins,
      centerDensity: 1,
      rimDensity: 0,
    };
  }

  const annularEnergy = new Float64Array(clampedBinCount);
  let totalWeight = 0;

  for (let index = 0; index < points.length; index++) {
    const normalizedRadius = Math.min(radii[index] / maxRadius, 0.999999);
    const binIndex = Math.min(clampedBinCount - 1, Math.floor(normalizedRadius * clampedBinCount));
    annularEnergy[binIndex] += points[index].weight;
    totalWeight += points[index].weight;
  }

  let maxDensity = 0;
  const rawDensities = new Float64Array(clampedBinCount);
  for (let index = 0; index < clampedBinCount; index++) {
    const innerRadiusFraction = index / clampedBinCount;
    const outerRadiusFraction = (index + 1) / clampedBinCount;
    const annulusArea =
      Math.PI * (outerRadiusFraction * outerRadiusFraction - innerRadiusFraction * innerRadiusFraction);
    const density = annulusArea > 1e-12 ? annularEnergy[index] / annulusArea : 0;
    rawDensities[index] = density;
    if (density > maxDensity) maxDensity = density;
  }

  if (maxDensity <= 1e-12 || totalWeight <= 1e-12) return emptyRadialProfile();

  const bins: BokehRadialProfileBin[] = Array.from({ length: clampedBinCount }, (_, index) => ({
    innerRadiusFraction: index / clampedBinCount,
    outerRadiusFraction: (index + 1) / clampedBinCount,
    radiusFraction: (index + 0.5) / clampedBinCount,
    density: rawDensities[index] / maxDensity,
    energyFraction: annularEnergy[index] / totalWeight,
  }));

  const centerBinCount = Math.max(1, Math.round(clampedBinCount * 0.25));
  const rimStart = Math.max(0, clampedBinCount - centerBinCount);
  const centerDensity = bins.slice(0, centerBinCount).reduce((sum, bin) => sum + bin.density, 0) / centerBinCount;
  const rimDensity =
    bins.slice(rimStart).reduce((sum, bin) => sum + bin.density, 0) / Math.max(1, clampedBinCount - rimStart);

  return {
    bins,
    centerDensity,
    rimDensity,
  };
}

export function classifyBokehBrightnessCharacter(radialProfile: BokehRadialProfile): {
  brightnessCharacter: BokehBrightnessCharacter;
  centerToRimRatio: number;
} {
  const rimDensity = radialProfile.rimDensity;
  const centerDensity = radialProfile.centerDensity;
  const centerToRimRatio = rimDensity > 1e-9 ? centerDensity / rimDensity : centerDensity > 1e-9 ? 999 : 1;

  if (centerToRimRatio > BOKEH_BRIGHTNESS_RATIO_THRESHOLD) {
    return {
      brightnessCharacter: "center-bright",
      centerToRimRatio,
    };
  }
  if (centerToRimRatio < 1 / BOKEH_BRIGHTNESS_RATIO_THRESHOLD) {
    return {
      brightnessCharacter: "edge-bright",
      centerToRimRatio,
    };
  }
  return {
    brightnessCharacter: "neutral",
    centerToRimRatio,
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

  const geometry = computeStateAwareOffAxisFieldGeometry(
    L,
    context.layout.z,
    context.focusT,
    context.zoomT,
    fieldFraction,
    context.fieldGeometryState,
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
      weight: sample.weight ?? 1,
    });
  }

  if (points.length < BOKEH_MIN_VALID_SAMPLES) {
    return {
      ...makeEmptyFieldResult(fieldFraction, geometry.fieldAngleDeg, bundle.sampleCount, pupilFootprint.transmission),
      pupilFootprint,
    };
  }

  const totalWeight = points.reduce((sum, point) => sum + point.weight, 0);
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

export function computeBokehFieldFootprint(
  L: RuntimeLens,
  _zPos: number[],
  traceFocusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
  fieldFraction: number,
  sensorZ: number,
): BokehFieldResult | null {
  const context = buildBokehTraceContext(L, traceFocusT, zoomT, currentEPSD, currentPhysStopSD);
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
): BokehPreviewResult | null {
  const defocusDelta = sensorZ - context.layout.imgZ;

  const fields: BokehFieldResult[] = BOKEH_PREVIEW_FIELD_FRACTIONS.map((fieldFraction) => {
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
): BokehPreviewResult | null {
  return computeBokehPreviewFromContext(
    L,
    buildBokehTraceContext(L, traceFocusT, zoomT, currentEPSD, currentPhysStopSD),
    sensorZ,
    currentEPSD,
    currentPhysStopSD,
    label,
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
): BokehPreviewPair {
  const contextCache = new Map<number, BokehTraceContext>();
  const getContext = (contextFocusT: number): BokehTraceContext => {
    const cached = contextCache.get(contextFocusT);
    if (cached) return cached;
    const next = buildBokehTraceContext(L, contextFocusT, zoomT, currentEPSD, currentPhysStopSD);
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
  );

  return { infinity, nearFocus };
}
