/** Axial scalar wavefront from exact sequential refraction and conserved ray-tube flux.
 * Moved, folded, annular, phase and image-space caustic paths require separate validation.
 */
import type { ScalarWavefront, ScalarWavefrontOptions } from "../../types/imageQuality.js";
import type { PreparedOpticalState, Ray3, Vec3 } from "../types.js";
import { CHROMATIC_CHANNEL_WAVELENGTH_NM } from "../constants.js";
import { conservativeAxialBounds } from "../prescription/geometryBounds.js";
import { opticalPathForTrace } from "../trace/opticalPath.js";
import { traceSpectralThroughput } from "../trace/spectralThroughput.js";

export function computeScalarWavefront(state: PreparedOpticalState, options: ScalarWavefrontOptions): ScalarWavefront {
  const channel = options.channel ?? "G";
  const model = options.throughputModel ?? "ideal";
  const wavelengthNm = CHROMATIC_CHANNEL_WAVELENGTH_NM[channel];
  const objectDistanceMm = options.objectDistanceMm ?? Infinity;
  const referencePoint: Vec3 = [0, 0, state.imgZ];
  const empty = (status: ScalarWavefront["status"]): ScalarWavefront => ({
    status,
    wavelengthNm,
    referencePoint,
    wavelets: [],
    rmsOpdMm: null,
    maxOpdStepWaves: null,
    pupilSampleCount: 0,
    acceptedSampleCount: 0,
    model,
    objectDistanceMm,
  });
  if (
    state.lens.flags.isFoldedOptics ||
    state.surfaces.length === 0 ||
    state.surfaces.some(
      (s) =>
        s.interaction.type !== "refract" ||
        s.interaction.incidentSide !== "both" ||
        s.interaction.normal ||
        s.diffractive ||
        (s.innerSd ?? 0) > 0,
    ) ||
    state.surfaces.at(-1)!.nd !== 1 ||
    state.imagePlane.normal[0] !== 0 ||
    state.imagePlane.normal[1] !== 0 ||
    state.imagePlane.normal[2] !== 1
  )
    return empty("unsupported");
  const rings = options.radialStrata ?? 32;
  const azimuths = options.azimuthalSamples ?? 128;
  if (
    !Number.isInteger(rings) ||
    rings < 2 ||
    rings > 256 ||
    !Number.isInteger(azimuths) ||
    azimuths < 8 ||
    azimuths > 256 ||
    !(objectDistanceMm > 0) ||
    !Number.isFinite(options.stopSemiDiameterMm) ||
    options.stopSemiDiameterMm <= 0
  )
    return empty("failed");
  const bounds = conservativeAxialBounds(state);
  if (!bounds || bounds.rearZ + 1e-5 >= state.imgZ) return empty("unsupported");
  const launchZ = bounds.frontZ - 1;
  const exitZ = bounds.rearZ + 1e-5;
  const sourceZ = state.z[0] - objectDistanceMm;
  const sourceGap = launchZ - sourceZ;
  if (sourceGap <= 0) return empty("unsupported");
  const apertureState: PreparedOpticalState = {
    ...state,
    lens: { ...state.lens, display: { ...state.lens.display, clipMargin: 1 } },
  };
  const radialTrace = (radius: number) => {
    const inputDistance = Math.hypot(radius, sourceGap);
    const inputCosine = objectDistanceMm === Infinity ? 1 : sourceGap / inputDistance;
    const ray: Ray3 = {
      origin: [radius, 0, launchZ],
      direction: objectDistanceMm === Infinity ? [0, 0, 1] : [radius / inputDistance, 0, inputCosine],
    };
    const { trace, throughput } = traceSpectralThroughput(
      apertureState,
      ray,
      options.stopSemiDiameterMm,
      model,
      channel,
    );
    if (throughput.status === "blocked") return { status: "blocked" as const };
    if (throughput.status === "incomplete") return { status: "missing-throughput" as const };
    if (throughput.transmission === null) return { status: "failed" as const };
    const path = opticalPathForTrace(apertureState, trace, channel);
    if (path.toLastSurfaceMm === null || trace.terminalDirection[2] <= 0) return { status: "failed" as const };
    const distance = (exitZ - trace.terminalPoint[2]) / trace.terminalDirection[2];
    if (distance <= 0) return { status: "unsupported" as const };
    const exitRadius = trace.terminalPoint[0] + distance * trace.terminalDirection[0];
    // Stable spherical source OPD: sqrt(d^2+r^2)-d = r^2/(sqrt(d^2+r^2)+d).
    const sourceOpd = objectDistanceMm === Infinity ? 0 : (radius * radius) / (inputDistance + sourceGap);
    return {
      status: "ok" as const,
      exitRadius,
      inputCosine,
      inputAmplitude: objectDistanceMm === Infinity ? 1 : sourceGap / inputDistance,
      exitCosine: trace.terminalDirection[2],
      transmission: throughput.transmission,
      opl: sourceOpd + path.toLastSurfaceMm + distance,
    };
  };
  const chief = radialTrace(0);
  if (chief.status !== "ok") return empty(chief.status);
  const referenceOpl = chief.opl + state.imgZ - exitZ;
  // Bound the source pupil by the first physical aperture, then locate its
  // actual transmitted rim. This avoids wasting almost all radial strata at
  // small stops or assuming the paraxial entrance pupil has the correct area.
  const boundRadius = state.surfaces[0].sd;
  let inputRadius = boundRadius;
  let previousRadius = 0;
  let blockedRadius: number | null = null;
  for (let i = 1; i <= 32; i++) {
    const radius = (boundRadius * i) / 32;
    const sample = radialTrace(radius);
    if (sample.status === "blocked") {
      if (blockedRadius === null) blockedRadius = radius;
    } else if (sample.status !== "ok") return empty(sample.status);
    else if (blockedRadius !== null)
      return empty("unsupported"); // Disconnected pupil requires a different quadrature.
    else previousRadius = radius;
  }
  if (blockedRadius !== null) {
    let lo = previousRadius,
      hi = blockedRadius;
    for (let i = 0; i < 24; i++) {
      const mid = (lo + hi) / 2;
      const sample = radialTrace(mid);
      if (sample.status === "ok") lo = mid;
      else if (sample.status === "blocked") hi = mid;
      else return empty(sample.status);
    }
    inputRadius = lo;
  }
  const inputAreaPerRing = (Math.PI * inputRadius ** 2) / rings;
  const result = empty("ok");
  result.pupilSampleCount = rings * azimuths;
  let area = 0,
    opdSum = 0,
    opdSquaredSum = 0;
  let previousOpd = 0,
    maxOpdStep = 0;
  for (let ring = 0; ring < rings; ring++) {
    const radius = inputRadius * Math.sqrt((ring + 0.5) / rings);
    const ray = radialTrace(radius);
    if (ray.status === "blocked") continue;
    if (ray.status !== "ok") return empty(ray.status);
    const delta = Math.max(1e-7, inputRadius * 1e-5);
    const lower = radialTrace(radius - delta);
    const upper = radialTrace(radius + delta);
    if (lower.status !== "ok" || upper.status !== "ok") return empty("failed");
    const derivative = (upper.exitRadius - lower.exitRadius) / (2 * delta);
    const jacobian = (ray.exitRadius * derivative) / radius;
    // Crossing ray tubes require caustic phase corrections, outside this initial model.
    if (ray.exitRadius <= 0 || derivative <= 0 || !Number.isFinite(jacobian)) return empty("unsupported");
    const referenceDistance = Math.hypot(ray.exitRadius, state.imgZ - exitZ);
    const opdMm = ray.opl + referenceDistance - referenceOpl;
    maxOpdStep = Math.max(maxOpdStep, Math.abs(opdMm - previousOpd));
    previousOpd = opdMm;
    const exitArea = jacobian * inputAreaPerRing;
    const amplitudeAreaMm2 =
      (ray.inputAmplitude *
        Math.sqrt((jacobian * ray.inputCosine * ray.transmission) / ray.exitCosine) *
        inputAreaPerRing) /
      azimuths;
    area += exitArea;
    opdSum += exitArea * opdMm;
    opdSquaredSum += exitArea * opdMm * opdMm;
    for (let azimuth = 0; azimuth < azimuths; azimuth++) {
      const angle = (2 * Math.PI * (azimuth + (ring % 2) / 2)) / azimuths;
      result.wavelets.push({
        point: [ray.exitRadius * Math.cos(angle), ray.exitRadius * Math.sin(angle), exitZ],
        opdMm,
        amplitudeAreaMm2,
        directionCosine: ray.exitCosine,
      });
    }
    result.acceptedSampleCount += azimuths;
  }
  if (area === 0) return empty("blocked");
  result.rmsOpdMm = Math.sqrt(Math.max(0, opdSquaredSum / area - (opdSum / area) ** 2));
  result.maxOpdStepWaves = maxOpdStep / (wavelengthNm * 1e-6);
  if (result.maxOpdStepWaves > 0.25) result.status = "undersampled";
  return result;
}
