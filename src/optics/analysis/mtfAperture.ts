/**
 * Aperture the axial beam actually traces at.
 *
 * The label f-number sizes the iris, but the traced beam can differ from it: an authored clear aperture may stop the
 * marginal ray before the iris does, and a stopped-down iris is scaled linearly from the wide-open radius. The rim of
 * the transmitted axial beam gives the pupil the curves were computed with, as an f-number comparable to the label.
 */
import type { MtfAperture, MtfOptions, MtfSupport } from "../../types/mtf.js";
import type { PreparedOpticalState } from "../types.js";
import { traceEngineRay2 } from "../trace/rayAdapters.js";
import type { MtfFootprint } from "./mtfFootprint.js";
import { mtfLaunchRay, mtfTraceClassification, mtfTraceOptions, type MtfFieldLaunch } from "./mtfTracing.js";

/** Doublings of the starting bracket before giving up on finding a blocked ray. */
const RIM_EXPANSIONS = 6;
const RIM_BISECTIONS = 48;
/** Relative launch-height width at which the rim bisection stops. */
const RIM_TOLERANCE = 1e-10;
/** Share of the rim height at which the near-axis image-space slope is sampled. */
const NEAR_AXIS_FRACTION = 1e-3;

/**
 * Find the rim of the transmitted axial beam at the reference wavelength.
 *
 * An axial beam of a centered system is rotationally symmetric, so one meridional bisection between the chief ray
 * and a blocked launch height locates the rim. The f-number is the rim height times the near-axis slope
 * n′ sin U′ per launch height: f / (2 × pupil radius) at infinity, the paraxial working f-number at a finite
 * conjugate. The rim ray's own angle is not used, so spherical aberration cannot pose as an aperture change. The
 * first blocked ray names the surface that limits the beam.
 *
 * @param state - prepared optical state
 * @param options - MTF request
 * @param support - support record selecting the reference line and its indices
 * @param launch - axial field launch
 * @param footprint - axial launch-plane box, which brackets the beam
 * @returns traced aperture, or null when the chief ray is blocked or no rim can be bracketed
 */
export function resolveMtfAperture(
  state: PreparedOpticalState,
  options: MtfOptions,
  support: MtfSupport,
  launch: MtfFieldLaunch,
  footprint: MtfFootprint,
): MtfAperture | null {
  const traceOptions = mtfTraceOptions(state, options, support, support.spectralLines[0]);
  const trace = (y: number) => traceEngineRay2(state, mtfLaunchRay(launch, 0, y), traceOptions);
  const transmits = (y: number) => mtfTraceClassification(trace(y), state, options.stopSemiDiameterMm) === "valid";
  if (!transmits(0)) return null;
  let inside = 0;
  let outside = Math.max(Math.abs(footprint.y0), Math.abs(footprint.y1));
  for (let i = 0; transmits(outside); i++) {
    if (i >= RIM_EXPANSIONS) return null;
    inside = outside;
    outside *= 2;
  }
  for (let i = 0; i < RIM_BISECTIONS && outside - inside > RIM_TOLERANCE * outside; i++) {
    const middle = (inside + outside) / 2;
    if (transmits(middle)) inside = middle;
    else outside = middle;
  }
  if (!(inside > 0)) return null;
  // Image-space direction cosine scaled by the image-space index, n′ sin U′, of a near-axis ray of the same launch.
  const probe = inside * NEAR_AXIS_FRACTION;
  const nearAxis = trace(probe);
  const sine =
    (inside * nearAxis.finalMedium * Math.hypot(nearAxis.terminalDirection[0], nearAxis.terminalDirection[1])) / probe;
  if (!(sine > 0) || !Number.isFinite(sine)) return null;
  // A clip or total internal reflection ends on its own surface; a missed intersection ends before the next one.
  const lastHit = trace(outside).hits.at(-1);
  const limiting = state.surfaces[lastHit ? (lastHit.clipped ? lastHit.surfaceIndex : lastHit.surfaceIndex + 1) : 0];
  const atIris = !limiting || limiting.physicalIndex === state.lens.stop.surfaceIndex;
  return { tracedFNumber: 1 / (2 * sine), limitingSurfaceLabel: atIris ? null : limiting.label };
}
