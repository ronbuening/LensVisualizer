/**
 * Vignetting / relative illumination analysis — pure function for computing
 * illumination falloff across the field for the current lens state.
 *
 * Each field's transmitted beam is found and sampled in two dimensions with the
 * MTF's own launch machinery: the chief-ray launch, the footprint scan over the
 * launch plane, and a square lattice of about 64 cells across the beam. Geometric
 * transmission is the lit cells' area on the launch plane. Relative illumination
 * follows from conservation of energy: the flux a field's beam carries per unit
 * of object solid angle, its lit area weighted by authored bulk transmission
 * times cos θ, over the image area that unit solid angle covers: (dh/dθ)(h/sin θ)
 * from lit chief rays 0.01° apart, or, where the chief ray is vignetted, the median
 * ray tube of the beam with its stop crossing held (`traceBeam`).
 *
 * Assumptions / scope:
 *   - The beam is sampled over its full 2D footprint, so off-axis growth and shift
 *     of the stop's image (pupil aberration) and lens-shaped vignetted beams are
 *     measured. Geometric transmission may exceed 1 where the stop's image grows
 *     off axis.
 *   - Relative illumination assumes no law of the field angle: the beam's
 *     cross-section, the stop's image at each field and the object-to-image
 *     mapping (distortion, image-side obliquity) all come from traced rays. It is
 *     the mean irradiance on the image plane from a uniformly bright distant
 *     object, so it does not depend on where each field focuses. Fresnel
 *     reflection losses and coating transmission are out of scope.
 *   - Fields launch collimated along the solved chief ray at every focus, as the
 *     tab always has.
 *   - Both figures are normalized to the axis's own 2D figures, so any residual
 *     on-axis vignetting is measured, not folded in, and the axis is exactly 1.
 *   - States the MTF's beam model refuses (fisheye projections, folded, mirror,
 *     diffractive or annular paths, a tilted image plane) and curves with a
 *     bounding-sphere field return no curve: a curve is never assembled from two
 *     methods. A field whose chief ray cannot be solved through the stop
 *     transmits no beam the lattice can find and counts as dark.
 *
 * No React dependencies — fully testable in isolation.  Memoize from current
 * state in a React hook rather than embedding in a component.
 */

import { uniformFieldFraction } from "../sampling.js";

import { prepareEngineTrace, traceEngineRay } from "../../trace/rayAdapters.js";
import { bulkTransmissionForTrace } from "../../trace/bulkAbsorption.js";
import { computeAnalysisFieldGeometryAtState } from "../../state/fieldAdapters.js";
import { launchSurfaceForFieldDeg } from "../../field/projection.js";
import { LINE_NM } from "../../chromatic/spectralLines.js";
import {
  findMtfFieldFootprint,
  mtfImagePoint,
  mtfLaunchGrid,
  mtfLaunchRay,
  mtfMirrorSymmetric,
  mtfTraceOptions,
  prepareMtfFieldLaunch,
} from "../mtf/mtfTracing.js";
import type { MtfFieldLaunch } from "../mtf/mtfTracing.js";
import { traceRayClassification } from "../../trace/rayClassification.js";
import type { MtfFootprint } from "../mtf/mtfFootprint.js";
import { mtfAxialImagePlane, mtfSequentialRefractivePath } from "../mtf/mtfSupport.js";
import type { MtfOptions, MtfSupport } from "../../../types/mtf.js";
import type { EngineTraceResult, TraceOptions } from "../../trace/types.js";
import type { PreparedGeometry, Ray3, Vec3 } from "../../types.js";
import { runtimeView } from "../../prescription/runtimeView.js";
import type { AnalysisRequest } from "../request.js";

/** A single sample on the vignetting / relative-illumination curve. */
export interface VignettingSample {
  /** Field angle in degrees (0 = on-axis). */
  fieldAngleDeg: number;
  /**
   * Geometric transmission: area of the field's transmitted beam on the launch
   * plane, normalized so on-axis = 1.0. May exceed 1 where the stop's image grows
   * off axis.
   */
  geometricTransmission: number;
  /**
   * Relative illumination: mean image-plane irradiance from a uniformly bright
   * distant object, with authored bulk absorption, normalized so on-axis = 1.0.
   */
  relativeIllumination: number;
}

/**
 * Lattice cells across each field's beam.
 *
 * Doubling to 128 moves no field by more than about 0.01 on the comparator's
 * benchmark; halving to 32 moves some by up to 0.02.
 */
const BEAM_GRID_CELLS = 64;
/** Fewest cells across the beam a sampling override may request. */
const MIN_BEAM_GRID_CELLS = 4;
/** Field step (deg) of the chief rays whose landings give the image mapping. */
const MAPPING_STEP_DEG = 0.01;
/** Tilt (rad) of the ray copies whose landings give each ray tube's image area per unit solid angle. */
const MAPPING_TILT_RAD = 1e-4;
/** Lit cells per side of the sub-lattice whose ray tubes sample the image mapping. */
const MAPPING_SUBLATTICE_CELLS = 16;

type Vec4 = [number, number, number, number];

/** Transmitted beam of one field on the launch plane. */
interface BeamFigures {
  /** Lit area, mm². */
  area: number;
  /** Lit area weighted by bulk transmission, mm². */
  flux: number;
  /** Image area per unit object solid angle from the beam's median ray tube, or null when none can be traced. */
  tubeMapping: () => number | null;
}

/**
 * Compute the vignetting / relative illumination curve for the current lens state.
 *
 * Samples the field from center (0°) to the current half-field edge at
 * adaptively spaced angles. At each angle the transmitted beam is located and
 * traced on a 2D lattice, and its area and the image area per unit object
 * solid angle are recorded.
 *
 * @param request - prepared geometry, entrance-pupil/stop radii in mm, field and sampling
 * @returns array of VignettingSample, or empty if invalid or outside the beam model
 */
export function computeVignettingCurve(request: AnalysisRequest): VignettingSample[] {
  const { preparedGeometry: state, sampling } = request;
  const { focusT, zoomT, aberrationT } = state;
  const L = runtimeView(state.lens);
  const { entrancePupilSemiDiameterMm: currentEPSD, stopSemiDiameterMm: currentPhysStopSD } = request.aperture;
  const fieldGeometry = request.fieldGeometry ?? undefined;
  if (currentEPSD <= 0 || L.N < 1) return [];
  // One method per curve: a state the MTF's beam model refuses gets no curve rather than another method's.
  if (!mtfSequentialRefractivePath(state) || !mtfAxialImagePlane(state)) return [];

  const geom = fieldGeometry ?? computeAnalysisFieldGeometryAtState(focusT, zoomT, L, aberrationT);
  const halfFieldDeg = geom.halfFieldDeg;
  if (halfFieldDeg <= 0 || !isFinite(halfFieldDeg)) return [];

  /* Adaptive field sampling: ~3° spacing, min 7 samples.  Ultra-wide lenses
   * (>50° half-field) get denser sampling to capture rapid vignetting onset
   * near the field edge. */
  const fieldSamples =
    sampling.vignettingFieldSampleCount !== undefined
      ? Math.max(Math.round(sampling.vignettingFieldSampleCount), 3)
      : Math.max(Math.ceil(halfFieldDeg / 3) + 1, 7);
  const gridSize = Math.max(
    sampling.vignettingPupilSampleCount !== undefined
      ? Math.round(sampling.vignettingPupilSampleCount)
      : BEAM_GRID_CELLS,
    MIN_BEAM_GRID_CELLS,
  );

  /* The MTF's launch and footprint, at the authored indices and the reference
   * line, with no finite conjugate: the tab traces collimated fields. */
  const options: MtfOptions = {
    method: "geometric",
    spectrum: "reference",
    focus: "design",
    pupilSemiDiameterMm: currentEPSD,
    stopSemiDiameterMm: currentPhysStopSD,
  };
  const support: MtfSupport = {
    available: true,
    reason: null,
    message: "",
    referenceWavelengthNm: LINE_NM.d,
    useResolvedReference: false,
    spectralLines: [{ wavelengthNm: LINE_NM.d, weight: 1 }],
    limitations: [],
  };
  const traceOptions = mtfTraceOptions(state, options, support, support.spectralLines[0]);
  const traceRay = prepareEngineTrace(state, traceOptions);
  // Tilted copies of lit rays stay within the lit zones, so they need no aperture checks.
  const mappingOptions: TraceOptions = { ...traceOptions, checkSemiDiameter: false, stopOnClip: false };
  const mirror = mtfMirrorSymmetric(state);
  const launchAt = (fieldAngleDeg: number): MtfFieldLaunch | null =>
    launchSurfaceForFieldDeg(fieldAngleDeg, state.lens.projection.config) === "object-plane"
      ? prepareMtfFieldLaunch(state, options, support, fieldAngleDeg)
      : null;

  const fieldAngles = Array.from(
    { length: fieldSamples },
    (_, i) => uniformFieldFraction(i, fieldSamples) * halfFieldDeg,
  );
  // A bounding-sphere field has no MTF launch and would need the old sweep: no curve instead of a mixed one.
  if (fieldAngles.some((deg) => launchSurfaceForFieldDeg(deg, state.lens.projection.config) !== "object-plane"))
    return [];

  /** Landing height of a field's chief ray when it passes every aperture; a vignetted one would run past a rim. */
  const litChiefHeight = (launch: MtfFieldLaunch | null): number | null => {
    if (!launch) return null;
    const trace = traceRay(mtfLaunchRay(launch, 0, 0));
    return traceRayClassification(trace, state, currentPhysStopSD) === "valid"
      ? (mtfImagePoint(state, trace)?.y ?? null)
      : null;
  };
  /**
   * Image area per unit object solid angle from lit chief rays re-solved 0.01° to either side, (dh/dθ)(h/sin θ): the
   * chief ray holds the stop's centre, the pivot `traceBeam` holds for its tubes. One-sided where a neighbour clips.
   */
  const chiefMapping = (fieldAngleDeg: number, launch: MtfFieldLaunch): number | null => {
    const height = litChiefHeight(launch);
    if (height === null) return null;
    const [low, high] = [fieldAngleDeg - MAPPING_STEP_DEG, fieldAngleDeg + MAPPING_STEP_DEG].map((deg) =>
      litChiefHeight(launchAt(deg)),
    );
    const rise =
      low !== null && high !== null
        ? (high - low) / 2
        : high !== null
          ? high - height
          : low !== null
            ? height - low
            : null;
    if (rise === null) return null;
    const slope = Math.abs(rise / ((MAPPING_STEP_DEG * Math.PI) / 180));
    return slope * (fieldAngleDeg === 0 ? slope : Math.abs(height) / Math.sin((fieldAngleDeg * Math.PI) / 180));
  };

  const samples: { fieldAngleDeg: number; area: number; illumination: number }[] = [];
  for (const fieldAngleDeg of fieldAngles) {
    // A field with no chief ray through the stop, or no footprint, transmits no beam the lattice can find.
    const launch = launchAt(fieldAngleDeg);
    const footprint = launch && findMtfFieldFootprint(state, options, support, launch);
    const beam =
      launch &&
      footprint &&
      traceBeam(state, traceRay, mappingOptions, launch, footprint, gridSize, mirror, currentPhysStopSD);
    if (!launch || !beam || !(beam.flux > 0)) {
      samples.push({ fieldAngleDeg, area: beam?.area ?? 0, illumination: 0 });
      continue;
    }
    // A lit chief ray passes the surfaces' central zones; the beam's median ray tube stands in for a vignetted one.
    const imageArea = chiefMapping(fieldAngleDeg, launch) ?? beam.tubeMapping();
    // A transmitted beam whose image mapping cannot be traced has no illumination figure.
    if (!(imageArea !== null && imageArea > 0)) return [];
    samples.push({ fieldAngleDeg, area: beam.area, illumination: (beam.flux * launch.direction[2]) / imageArea });
  }

  /* ── Normalise to the axis's own 2D figures ── */
  const axis = samples[0];
  if (!(axis.area > 0) || !(axis.illumination > 0)) return [];
  return samples.map(({ fieldAngleDeg, area, illumination }) => ({
    fieldAngleDeg,
    geometricTransmission: area / axis.area,
    relativeIllumination: illumination / axis.illumination,
  }));
}

/**
 * Trace one field's beam on a square lattice over its footprint.
 *
 * A uniformly bright distant object sends the field's flux, L cos θ Σ w dA over the lit cells of launch area dA and
 * weight w, onto an image area J per unit object solid angle. Where the chief ray is vignetted, `tubeMapping` gives J
 * as the determinant of each ray tube's ∂P/∂ω with its stop crossing s held, ∂P/∂ω − ∂P/∂x · (∂s/∂x)⁻¹ · ∂s/∂ω,
 * taken component by component as the median over a sub-lattice of the lit cells. Two tilted copies of a ray give the
 * direction derivatives of its landing P and stop crossing, and neighbouring lattice cells the launch-point ones.
 * Holding the stop crossing rather than the launch point keeps a field that focuses off the image plane from reading
 * as brighter or dimmer.
 *
 * @param state - prepared geometry
 * @param traceRay - aperture-checked trace at the authored indices
 * @param mappingOptions - unchecked trace options for the tilted ray copies
 * @param launch - field launch
 * @param footprint - launch-plane box of the transmitted beam
 * @param gridSize - cells across the beam's larger dimension
 * @param mirror - true to trace one half pupil and mirror it about the meridional plane
 * @param stopRadius - current physical stop radius in mm
 * @returns lit area, transmission-weighted area and the tube mapping
 */
function traceBeam(
  state: PreparedGeometry,
  traceRay: (ray: Ray3) => EngineTraceResult,
  mappingOptions: TraceOptions,
  launch: MtfFieldLaunch,
  footprint: MtfFootprint,
  gridSize: number,
  mirror: boolean,
  stopRadius: number,
): BeamFigures {
  const grid = mtfLaunchGrid(footprint, gridSize);
  const { columns, rows } = grid;
  const stopIndex = state.lens.stop.surfaceIndex;
  /** Landing on the image plane and crossing of the stop, as [Px, Py, Sx, Sy]. */
  const crossings = (trace: EngineTraceResult): Vec4 | null => {
    const landing = mtfImagePoint(state, trace);
    const stop = trace.hits.find((hit) => hit.surfaceIndex === stopIndex)?.point;
    return landing && stop ? [landing.x, landing.y, stop[0], stop[1]] : null;
  };
  const lit = new Uint8Array(columns * rows);
  const at = new Float64Array(4 * columns * rows);
  const weight = new Float64Array(columns * rows);
  const traces: (EngineTraceResult | undefined)[] = new Array(columns * rows);
  let cells = 0;
  let transmitted = 0;
  for (let row = 0; row < rows; row++) {
    for (let column = mirror ? columns / 2 : 0; column < columns; column++) {
      const trace = traceRay(
        mtfLaunchRay(launch, grid.x0 + (column + 0.5) * grid.step, grid.y0 + (row + 0.5) * grid.step),
      );
      if (traceRayClassification(trace, state, stopRadius) !== "valid") continue;
      const w = bulkTransmissionForTrace(state.lens, trace.hits);
      cells += mirror ? 2 : 1;
      transmitted += mirror ? 2 * w : w;
      // A ray with no landing or stop crossing still carries flux; it only drops out of the mapping.
      const values = crossings(trace);
      if (!values) continue;
      const cell = row * columns + column;
      lit[cell] = 1;
      weight[cell] = w;
      at.set(values, 4 * cell);
      traces[cell] = trace;
      if (!mirror) continue;
      const image = row * columns + columns - 1 - column;
      lit[image] = 1;
      weight[image] = w;
      at.set([-values[0], values[1], -values[2], values[3]], 4 * image);
    }
  }
  if (cells === 0) return { area: 0, flux: 0, tubeMapping: () => null };

  /** Derivative of the four crossings along a lattice line, per mm of launch offset; null without a lit neighbour. */
  const along = (cell: number, offset: number, hasBefore: boolean, hasAfter: boolean): Vec4 | null => {
    const before = hasBefore && lit[cell - offset] === 1;
    const after = hasAfter && lit[cell + offset] === 1;
    if (!before && !after) return null;
    const [from, to] = [before ? cell - offset : cell, after ? cell + offset : cell];
    const span = ((to - from) / offset) * grid.step;
    return [0, 1, 2, 3].map((k) => (at[4 * to + k] - at[4 * from + k]) / span) as Vec4;
  };
  const [, dy, dz] = launch.direction;
  // Orthogonal tilts of the launch direction: in the meridional plane, and across it.
  const tilts: Vec3[] = [
    [0, dy + MAPPING_TILT_RAD * dz, dz - MAPPING_TILT_RAD * dy],
    [MAPPING_TILT_RAD, dy, dz],
  ];
  /** ∂P/∂ω of one lit ray tube at a fixed stop crossing, as [∂x/∂ωm, ∂x/∂ωs, ∂y/∂ωm, ∂y/∂ωs]; null when untraceable. */
  const tubeMapping = (cell: number): Vec4 | null => {
    const trace = traces[cell]!;
    const base = at.subarray(4 * cell, 4 * cell + 4);
    const tilted = tilts.map((direction) => {
      const length = Math.hypot(...direction);
      const ray: Ray3 = {
        origin: trace.input.origin,
        direction: [direction[0] / length, direction[1] / length, direction[2] / length],
      };
      const values = crossings(traceEngineRay(state, ray, mappingOptions));
      return values && ([0, 1, 2, 3].map((k) => (values[k] - base[k]) / MAPPING_TILT_RAD) as Vec4);
    });
    if (!tilted[0] || !tilted[1]) return null;
    const [row, column] = [Math.floor(cell / columns), cell % columns];
    const dx = along(cell, 1, column > 0, column < columns - 1);
    const dyLaunch = along(cell, columns, row > 0, row < rows - 1);
    // ∂P/∂ω, corrected to a fixed stop crossing where the lattice gives ∂s/∂x.
    let [pa, pb, pc, pd] = [tilted[0][0], tilted[1][0], tilted[0][1], tilted[1][1]];
    if (dx && dyLaunch) {
      const [sa, sb, sc, sd] = [dx[2], dyLaunch[2], dx[3], dyLaunch[3]];
      const determinant = sa * sd - sb * sc;
      if (Math.abs(determinant) > 1e-12) {
        // Launch offset per unit tilt that holds the stop crossing: −(∂s/∂x)⁻¹ ∂s/∂ω.
        const shift = [tilted[0], tilted[1]].map(([, , su, sv]) => [
          -(sd * su - sb * sv) / determinant,
          -(-sc * su + sa * sv) / determinant,
        ]);
        pa += dx[0] * shift[0][0] + dyLaunch[0] * shift[0][1];
        pb += dx[0] * shift[1][0] + dyLaunch[0] * shift[1][1];
        pc += dx[1] * shift[0][0] + dyLaunch[1] * shift[0][1];
        pd += dx[1] * shift[1][0] + dyLaunch[1] * shift[1][1];
      }
    }
    return [pa, pb, pc, pd];
  };

  const stride = Math.max(1, Math.floor(gridSize / MAPPING_SUBLATTICE_CELLS));
  const tubeMappingArea = (): number | null => {
    const tubes: Vec4[] = [];
    const sample = (cell: number) => {
      const tube = traces[cell] && tubeMapping(cell);
      if (tube) tubes.push(tube);
    };
    for (let row = 0; row < rows; row += stride) {
      for (let column = mirror ? columns / 2 : 0; column < columns; column += stride) sample(row * columns + column);
    }
    // A beam too small for the sub-lattice samples every lit cell instead.
    if (tubes.length === 0) for (let cell = 0; cell < columns * rows; cell++) sample(cell);
    if (tubes.length === 0) return null;
    // The median tube's mapping: rays grazing a surface's rim zone can turn sharply with a tiny tilt, and a mean
    // would let those few scatter the whole beam's figure.
    const [pa, pb, pc, pd] = [0, 1, 2, 3].map((k) => median(tubes.map((tube) => tube[k])));
    return Math.abs(pa * pd - pb * pc);
  };
  const cellArea = grid.step * grid.step;
  return { area: cells * cellArea, flux: transmitted * cellArea, tubeMapping: tubeMappingArea };
}

/** Median of a non-empty list. */
function median(values: number[]): number {
  const sorted = [...values].sort((a, b) => a - b);
  const middle = sorted.length >> 1;
  return sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
}
