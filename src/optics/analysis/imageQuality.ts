/** Axial scalar image quality with independent pupil, window and sensor-grid refinement. */
import type { ImageQualityOptions, ImageQualityResult, PsfGrid, ScalarPsf } from "../../types/imageQuality.js";
import { CHROMATIC_CHANNEL_WAVELENGTH_NM, IMAGE_QUALITY_LIMITS } from "../constants.js";
import { apertureMetricsForState } from "../first-order/aperture.js";
import { computeHuygensPsf } from "../math/huygens.js";
import { computeMtfFromPsf } from "../math/mtf.js";
import type { PreparedOpticalState } from "../types.js";
import { computeScalarWavefront } from "./wavefront.js";

const CONVERGENCE_TOLERANCE = 0.03;

/** Incoherent spectral sum at one common physical sensor grid, preserving throughput and wavelength scale. */
export function combineSpectralPsfs(components: readonly { psf: ScalarPsf; weight: number }[]): PsfGrid | null {
  const first = components[0]?.psf;
  if (
    !first ||
    components.some(
      ({ psf, weight }) =>
        psf.status !== "ok" ||
        psf.size !== first.size ||
        psf.pixelPitchMm !== first.pixelPitchMm ||
        psf.referencePeakIntensity === null ||
        !Number.isFinite(psf.referencePeakIntensity) ||
        psf.referencePeakIntensity <= 0 ||
        psf.intensity.length !== first.size ** 2 ||
        psf.intensity.some((v) => !Number.isFinite(v) || v < 0) ||
        !Number.isFinite(weight) ||
        weight < 0,
    )
  )
    return null;
  const peak = components.reduce((sum, c) => sum + c.weight * c.psf.referencePeakIntensity!, 0);
  if (peak <= 0 || !Number.isFinite(peak)) return null;
  const intensity = first.intensity.map(
    (_, i) =>
      components.reduce((sum, c) => sum + c.weight * c.psf.referencePeakIntensity! * c.psf.intensity[i], 0) / peak,
  );
  const middle = (first.size - 1) / 2;
  return {
    status: "ok",
    size: first.size,
    pixelPitchMm: first.pixelPitchMm,
    intensity,
    referencePeakIntensity: peak,
    windowIntegralMm2: intensity.reduce((sum, v) => sum + v, 0) * first.pixelPitchMm ** 2,
    centerStrehl: intensity[middle * first.size + middle],
  };
}

function relativeGridDifference(a: PsfGrid, b: PsfGrid): number {
  const scaleA = a.referencePeakIntensity!,
    scaleB = b.referencePeakIntensity!;
  const denominator = b.intensity.reduce((sum, v) => sum + v * scaleB, 0);
  return denominator > 0
    ? a.intensity.reduce((sum, v, i) => sum + Math.abs(v * scaleA - b.intensity[i] * scaleB), 0) / denominator
    : Infinity;
}

function mtfDifference(a: PsfGrid, b: PsfGrid): number {
  const maximum = 1 / (2 * Math.max(a.pixelPitchMm, b.pixelPitchMm));
  const first = computeMtfFromPsf(a, 33, maximum),
    second = computeMtfFromPsf(b, 33, maximum);
  if (!first.length || !second.length) return Infinity;
  return Math.max(
    ...first.flatMap((sample, i) => [
      Math.abs(sample.horizontal - second[i].horizontal),
      Math.abs(sample.vertical - second[i].vertical),
    ]),
  );
}

/** Exact centered subsets of the refined grid, preserving its physical intensity scale. */
function sampledWindow(psf: ScalarPsf, size: number, stride: number): ScalarPsf {
  const offset = (psf.size - 1 - (size - 1) * stride) / 2;
  const pixelPitchMm = psf.pixelPitchMm * stride;
  const intensity =
    psf.status === "ok"
      ? Array.from(
          { length: size * size },
          (_, i) => psf.intensity[(offset + Math.floor(i / size) * stride) * psf.size + offset + (i % size) * stride],
        )
      : [];
  return {
    ...psf,
    size,
    pixelPitchMm,
    intensity,
    windowIntegralMm2: intensity.reduce((sum, v) => sum + v, 0) * pixelPitchMm ** 2,
  };
}

export function computeImageQuality(state: PreparedOpticalState, options: ImageQualityOptions): ImageQualityResult {
  const unavailable = (reason: string, status: ImageQualityResult["status"] = "unavailable"): ImageQualityResult => ({
    status,
    reason,
    psf: null,
    mtf: [],
    spectrum: [],
    convergence: null,
  });
  if (options.movementActive)
    return unavailable("Scalar diffraction is not validated for active lens movement.", "unsupported");
  if (state.lens.flags.isFoldedOptics)
    return unavailable("Scalar diffraction is not validated for folded optical paths.", "unsupported");
  const seen = new Set<string>();
  if (
    options.spectrum.length === 0 ||
    options.spectrum.some((s) => {
      const invalid =
        !(s.channel in CHROMATIC_CHANNEL_WAVELENGTH_NM) ||
        seen.has(s.channel) ||
        !Number.isFinite(s.weight) ||
        s.weight < 0;
      seen.add(s.channel);
      return invalid;
    })
  )
    return unavailable("Choose distinct spectral channels with finite non-negative weights.");
  const spectrum = options.spectrum.filter((s) => s.weight > 0);
  if (spectrum.length === 0) return unavailable("At least one spectral weight must be positive.");
  const sumWeights = spectrum.reduce((sum, s) => sum + s.weight, 0);
  if (!Number.isFinite(sumWeights)) return unavailable("The sum of spectral weights must be finite.");
  const rings = options.radialStrata ?? 32,
    azimuths = options.azimuthalSamples ?? 64,
    size = options.imageSize ?? 33;
  if (
    !Number.isInteger(rings) ||
    rings < 2 ||
    rings > IMAGE_QUALITY_LIMITS.radialStrata ||
    !Number.isInteger(azimuths) ||
    azimuths < 8 ||
    azimuths > IMAGE_QUALITY_LIMITS.azimuthalSamples ||
    !Number.isInteger(size) ||
    size < 5 ||
    size > IMAGE_QUALITY_LIMITS.imageSize ||
    size % 2 === 0
  )
    return unavailable("Sampling settings cannot be refined within the supported bounds.");
  const workingFNumber = apertureMetricsForState(state, options.stopSemiDiameterMm).paraxialWorkingFNumber;
  const pitch =
    options.pixelPitchMm ??
    (workingFNumber === null
      ? NaN
      : (Math.min(...spectrum.map((s) => CHROMATIC_CHANNEL_WAVELENGTH_NM[s.channel])) * 1e-6 * workingFNumber) / 3);
  if (!Number.isFinite(pitch) || pitch <= 0) return unavailable("A finite positive sensor sample spacing is required.");
  const coarse: { psf: ScalarPsf; weight: number }[] = [],
    fine: typeof coarse = [],
    window: typeof coarse = [],
    sensor: typeof coarse = [];
  const channels: ImageQualityResult["spectrum"] = [];
  let maxOpdStepWaves = 0;
  for (const entry of spectrum) {
    const waveOptions = {
      stopSemiDiameterMm: options.stopSemiDiameterMm,
      channel: entry.channel,
      throughputModel: options.throughputModel,
      objectDistanceMm: options.objectDistanceMm,
      radialStrata: rings,
      azimuthalSamples: azimuths,
    };
    const base = computeScalarWavefront(state, waveOptions);
    const refined = computeScalarWavefront(state, {
      ...waveOptions,
      radialStrata: rings * 2,
      azimuthalSamples: azimuths * 2,
    });
    if (!["ok", "undersampled"].includes(base.status) || !["ok", "undersampled"].includes(refined.status)) {
      const failed = !["ok", "undersampled"].includes(base.status) ? base : refined;
      const status = failed.status === "unsupported" ? "unsupported" : "unavailable";
      return unavailable(
        failed.status === "missing-throughput"
          ? "Sourced transmission is incomplete for this spectral or angular range."
          : `Wavefront unavailable (${failed.status}); calculation stopped before sampling convergence checks.`,
        status,
      );
    }
    maxOpdStepWaves = Math.max(maxOpdStepWaves, refined.maxOpdStepWaves ?? Infinity);
    const weight = entry.weight / sumWeights;
    const squareSymmetry = azimuths % 4 === 0;
    coarse.push({
      psf: computeHuygensPsf(
        base.wavelets,
        base.wavelengthNm,
        base.referencePoint,
        size * 2 - 1,
        pitch,
        squareSymmetry,
      ),
      weight,
    });
    const sensorPsf = computeHuygensPsf(
      refined.wavelets,
      refined.wavelengthNm,
      refined.referencePoint,
      size * 4 - 3,
      pitch / 2,
      squareSymmetry,
    );
    // Coarser sensor samples and the smaller window lie exactly on this grid.
    // Reusing those values leaves all three independent comparisons intact.
    fine.push({ psf: sampledWindow(sensorPsf, size * 2 - 1, 2), weight });
    window.push({ psf: sampledWindow(sensorPsf, size, 2), weight });
    sensor.push({ psf: sensorPsf, weight });
    channels.push({ channel: entry.channel, wavelengthNm: refined.wavelengthNm, weight, rmsOpdMm: refined.rmsOpdMm });
  }
  const c = combineSpectralPsfs(coarse),
    f = combineSpectralPsfs(fine),
    w = combineSpectralPsfs(window),
    s = combineSpectralPsfs(sensor);
  if (!c || !f || !w || !s) return unavailable("No finite scalar intensity was obtained.");
  const pupilDifference = relativeGridDifference(c, f);
  const windowDifference = Math.max(
    Math.abs(w.windowIntegralMm2 - f.windowIntegralMm2) / f.windowIntegralMm2,
    mtfDifference(w, f),
  );
  const imageSamplingDifference = Math.max(
    Math.abs(s.windowIntegralMm2 - f.windowIntegralMm2) / s.windowIntegralMm2,
    mtfDifference(f, s),
  );
  const converged =
    [pupilDifference, windowDifference, imageSamplingDifference].every(
      (v) => Number.isFinite(v) && v <= CONVERGENCE_TOLERANCE,
    ) && maxOpdStepWaves <= 0.25;
  const advice: string[] = [];
  if (!(pupilDifference <= CONVERGENCE_TOLERANCE))
    advice.push("Pupil integration has not converged: increase pupil radial and angular samples.");
  if (!(windowDifference <= CONVERGENCE_TOLERANCE))
    advice.push(
      "The image window is too small or unresolved: increase base window samples while keeping sensor spacing fixed.",
    );
  if (!(imageSamplingDifference <= CONVERGENCE_TOLERANCE))
    advice.push(
      "The sensor grid has not converged: reduce sensor spacing; increase base window samples to preserve the field of view.",
    );
  if (!(maxOpdStepWaves <= 0.25)) advice.push("Radial phase steps exceed 0.25 waves: increase pupil radial samples.");
  return {
    status: converged ? "converged" : "undersampled",
    reason: converged
      ? "Pupil, window and sensor-grid estimates agree within 3%; this is not a rigorous error bound."
      : advice.join(" "),
    psf: s,
    mtf: converged ? computeMtfFromPsf(s) : [],
    spectrum: channels,
    convergence: { pupilDifference, windowDifference, imageSamplingDifference, maxOpdStepWaves },
  };
}
