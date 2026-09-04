/** Scalar diffraction contracts. Distances and optical path differences are in millimeters. */
import type { Vec3 } from "../optics/types.js";
import type { ChromaticChannel, ThroughputModel } from "./optics.js";

export interface OpticalPathResult {
  status: "ok" | "blocked" | "failed" | "unsupported";
  toLastSurfaceMm: number | null;
  toSensorMm: number | null;
  sensorPoint: Vec3 | null;
}

/** One scalar wavelet on an image-space plane in air. */
export interface HuygensWavelet {
  point: Vec3;
  /** OPL to the reference image point minus the axial reference OPL. */
  opdMm: number;
  /** Field amplitude times exit-plane quadrature area (mm^2), including sqrt(power transmission). */
  amplitudeAreaMm2: number;
  /** Local forward wave-normal cosine relative to the integration plane. */
  directionCosine: number;
}

export interface ScalarWavefront {
  status: "ok" | "undersampled" | "blocked" | "failed" | "unsupported" | "missing-throughput";
  wavelengthNm: number;
  referencePoint: Vec3;
  wavelets: HuygensWavelet[];
  /** Piston-removed OPD RMS, weighted by geometric exit-plane area. */
  rmsOpdMm: number | null;
  maxOpdStepWaves: number | null;
  pupilSampleCount: number;
  acceptedSampleCount: number;
  model: ThroughputModel;
  /** Explicit axial source distance from the first vertex, or Infinity for a plane wave. */
  objectDistanceMm: number;
}

export interface ScalarWavefrontOptions {
  stopSemiDiameterMm: number;
  channel?: ChromaticChannel;
  throughputModel?: ThroughputModel;
  objectDistanceMm?: number;
  radialStrata?: number;
  azimuthalSamples?: number;
}

export interface ScalarPsf {
  status: "ok" | "unavailable";
  wavelengthNm: number;
  size: number;
  pixelPitchMm: number;
  /** Row-major intensity relative to the same pupil with zero OPD at the reference point. */
  intensity: number[];
  /** Restore common incident-field scaling before combining different wavelengths incoherently. */
  referencePeakIntensity: number | null;
  /** Sampled integral of the relative intensity. Not a claim that all diffracted energy was captured. */
  windowIntegralMm2: number;
  centerStrehl: number | null;
}
