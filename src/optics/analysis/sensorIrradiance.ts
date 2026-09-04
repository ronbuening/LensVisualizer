/** Reverse radiometry for a uniform external radiance field and an ideal planar sensor.
 *
 * Integrating cos(sensor) dOmega at the sensor avoids an assumed object-angle
 * cos-fourth law or a paraxial exit-pupil Jacobian. The aperture-plane change
 * of variables contributes cos(plane) dA / distance^2. Units are E / radiance.
 */

import type { SensorIrradianceResult, SensorIrradianceOptions } from "../../types/optics.js";
import { conservativeAxialBounds } from "../prescription/geometryBounds.js";
import { createAreaWeightedCircularPupilPoints } from "../math/pupilSampling.js";
import { traceGeneralized } from "../trace/generalizedTrace.js";
import type { PreparedOpticalState, Ray3, Vec3 } from "../types.js";

export type { SensorIrradianceResult, SensorIrradianceOptions } from "../../types/optics.js";

/** Integrate a disk on a plane parallel to the sensor, with a visibility/throughput callback.
 * A null callback result denotes a solver failure, while zero is a physical rejection.
 */
export function integrateSensorIrradiance(
  sensor: Vec3,
  planeZ: number,
  radius: number,
  transmission: (ray: Ray3) => number | null,
  options: SensorIrradianceOptions = {},
): SensorIrradianceResult {
  const rings = options.radialStrata ?? 12;
  const azimuths = options.azimuthalSamples ?? 16;
  const tolerance = options.relativeTolerance ?? 0.02;
  const distance = sensor[2] - planeZ;
  if (
    ![...sensor, planeZ, radius, rings, azimuths, tolerance].every(Number.isFinite) ||
    distance <= 0 ||
    radius <= 0 ||
    rings < 1 ||
    azimuths < 1 ||
    tolerance <= 0
  )
    return unavailable("failed");
  let failed = false;
  let sampleCount = 0;
  const integrate = (refinement: number) => {
    let sum = 0;
    for (const p of createAreaWeightedCircularPupilPoints(rings * refinement, azimuths * refinement)) {
      const dx = radius * p.u - sensor[0];
      const dy = radius * p.v - sensor[1];
      const r2 = dx * dx + dy * dy + distance * distance;
      const r = Math.sqrt(r2);
      const throughput = transmission({ origin: sensor, direction: [dx / r, dy / r, -distance / r] });
      sampleCount++;
      if (throughput === null || !Number.isFinite(throughput) || throughput < 0 || throughput > 1) {
        failed = true;
        continue;
      }
      sum += (p.weight * throughput * (distance * distance)) / (r2 * r2);
    }
    return Math.PI * radius * radius * sum;
  };
  const coarse = integrate(1);
  const fine = integrate(2);
  if (failed) return { ...unavailable("failed"), sampleCount };
  if (fine === 0)
    return { status: "no-transmission-sampled", irradiancePerRadiance: 0, estimatedRelativeError: null, sampleCount };
  const error = Math.abs(fine - coarse) / fine;
  return {
    status: error <= tolerance ? "converged" : "undersampled",
    irradiancePerRadiance: fine,
    estimatedRelativeError: error,
    sampleCount,
  };
}

/** Current-state radiometry for centered sequential refraction in air.
 * Missing coating/material losses are deliberately excluded here. Reversed
 * folded/phase paths and immersion require separate reciprocal-path fixtures.
 */
export function computeSensorIrradiance(
  state: PreparedOpticalState,
  sensorHeightMm: number,
  stopSemiDiameterMm: number,
  options: SensorIrradianceOptions = {},
): SensorIrradianceResult {
  if (
    state.lens.flags.isFoldedOptics ||
    state.surfaces.length === 0 ||
    state.surfaces.some(
      (s) =>
        s.interaction.type !== "refract" ||
        s.diffractive ||
        s.interaction.normal ||
        s.interaction.incidentSide !== "both" ||
        (s.innerSd ?? 0) > 0,
    ) ||
    state.surfaces.at(-1)!.nd !== 1 ||
    state.imagePlane.normal[0] !== 0 ||
    state.imagePlane.normal[1] !== 0 ||
    Math.abs(state.imagePlane.normal[2]) !== 1
  )
    return unavailable("unsupported");
  if (!Number.isFinite(stopSemiDiameterMm) || stopSemiDiameterMm <= 0) return unavailable("failed");

  const bounds = conservativeAxialBounds(state);
  if (!bounds || bounds.rearZ + 1e-6 >= state.imgZ) return unavailable("unsupported");
  const { frontZ } = bounds;
  const planeZ = bounds.rearZ + 1e-6;
  const radius = Math.max(Math.abs(sensorHeightMm), bounds.radius);
  const reverse: PreparedOpticalState = {
    ...state,
    imgZ: frontZ - 1,
    imagePlane: { label: "Radiometry reference", point: [0, 0, frontZ - 1], normal: [0, 0, -1] },
    lens: {
      ...state.lens,
      display: { ...state.lens.display, clipMargin: 1 },
      opticalPath: { ...state.lens.opticalPath, surfaceOrder: state.surfaces.map((_, i) => i).reverse() },
    },
  };
  return integrateSensorIrradiance(
    [0, sensorHeightMm, state.imgZ],
    planeZ,
    radius,
    (ray) => {
      const trace = traceGeneralized(reverse, ray, {
        checkSemiDiameter: true,
        stopSemiDiameter: stopSemiDiameterMm,
        stopOnClip: true,
      });
      // TIR physically rejects this transmitted path. An unbracketed surface
      // can also indicate crossing prescription geometry, so it is not zero flux.
      if (trace.failureReason === "totalInternalReflection") return 0;
      if (trace.failureReason) return null;
      return trace.status === "ok" && trace.reachedImagePlane ? 1 : 0;
    },
    options,
  );
}

function unavailable(status: "failed" | "unsupported"): SensorIrradianceResult {
  return { status, irradiancePerRadiance: null, estimatedRelativeError: null, sampleCount: 0 };
}
