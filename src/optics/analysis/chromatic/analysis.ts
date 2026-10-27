/**
 * Chromatic analysis helpers — pure longitudinal focus and lateral color sweeps.
 *
 * These helpers keep chromatic analysis out of React rendering. They reuse the
 * same exact chromatic tracing and projection-aware field launch paths as the
 * diagram rays, but return compact data contracts for analysis tabs.
 */

import type { PreparedGeometry } from "../../types.js";

import type { ChromaticChannel, ChromaticChannelOmission, ChromaticRayFanSpread } from "../../../types/optics.js";
import { computeOffAxisChannelFieldGeometry, traceOffAxisChiefRay } from "../aberration/offAxis.js";
import { prepareAxialZoneLaunch } from "../aberration/shared.js";
import { computeAnalysisFieldGeometryAtState } from "../../state/fieldAdapters.js";
import type { FieldGeometryState } from "../../field/launch.js";
import { thick } from "../../state/layout.js";
import { computeChromaticRayFanSpread } from "../../chromatic/chromaticTrace.js";
import { chromaticRayOmission, selectChromaticZone } from "../../chromatic/zoneSelection.js";
import { CHROMATIC_CHANNEL_ORDER } from "../../chromatic/channels.js";

import { runtimeView } from "../../prescription/runtimeView.js";
import { FULL_FIELD_FRACTIONS, MARGINAL_PUPIL_FRACTIONS } from "../sampling.js";
import type { AnalysisRequest } from "../request.js";

export const DEFAULT_CHROMATIC_ANALYSIS_CHANNELS = CHROMATIC_CHANNEL_ORDER;
export const DEFAULT_LONGITUDINAL_CHROMATIC_FRACTIONS = MARGINAL_PUPIL_FRACTIONS;
export const DEFAULT_LATERAL_COLOR_FIELD_FRACTIONS = FULL_FIELD_FRACTIONS;

export interface ChromaticAnalysisOptions {
  channels?: readonly ChromaticChannel[];
  longitudinalFractions?: readonly number[];
  fieldFractions?: readonly number[];
}

export interface LongitudinalChromaticFocusSample {
  channel: ChromaticChannel;
  focusZ: number | null;
  focusShiftMm: number | null;
  relativeFocusShiftMm: number | null;
  imageHeightMm: number | null;
  relativeImageHeightMm: number | null;
  usable: boolean;
  clipped: boolean;
}

export interface LongitudinalChromaticFocusResult {
  channels: readonly ChromaticChannel[];
  referenceChannel: ChromaticChannel;
  /**
   * Stop fraction the marginal zone was aimed at: the outermost candidate every requested channel passes, else (when
   * none does) the first at least two pass, with the others listed in `omittedChannels`.
   */
  marginalFraction: number;
  imagePlaneZ: number;
  lastSurfaceZ: number;
  longitudinalSpreadMm: number;
  longitudinalSpreadUm: number;
  transverseSpreadMm: number;
  transverseSpreadUm: number;
  spread: ChromaticRayFanSpread;
  samples: LongitudinalChromaticFocusSample[];
  validChannelCount: number;
  /** Requested channels the zone leaves out, each with why; empty unless no candidate passes every channel. */
  omittedChannels: ChromaticChannelOmission[];
}

export interface LateralColorChannelSample {
  channel: ChromaticChannel;
  imageHeightMm: number | null;
  relativeHeightMm: number | null;
  usable: boolean;
  clipped: boolean;
}

export interface LateralColorFieldSample {
  fieldFraction: number;
  label: string;
  fieldAngleDeg: number;
  referenceChannel: ChromaticChannel;
  referenceImageHeightMm: number | null;
  lateralSpreadMm: number | null;
  lateralSpreadUm: number | null;
  samples: LateralColorChannelSample[];
  validChannelCount: number;
  usable: boolean;
}

export interface LateralColorCurveResult {
  channels: readonly ChromaticChannel[];
  referenceChannel: ChromaticChannel;
  fieldFractions: readonly number[];
  fields: LateralColorFieldSample[];
  usableFieldCount: number;
  maxLateralSpreadMm: number;
  maxLateralSpreadUm: number;
  imagePlaneZ: number;
  halfFieldDeg: number;
}

export interface ChromaticAnalysisResult {
  longitudinalFocus: LongitudinalChromaticFocusResult | null;
  lateralColor: LateralColorCurveResult | null;
}

function normalizeChannels(channels: readonly ChromaticChannel[] | undefined): ChromaticChannel[] {
  const requested = new Set(channels ?? DEFAULT_CHROMATIC_ANALYSIS_CHANNELS);
  return CHROMATIC_CHANNEL_ORDER.filter((channel) => requested.has(channel));
}

// Unlike rayFan.normalizeSignedFractions, keep positive insertion order (and optional zero) for fallback searches.
function normalizeFractions(
  fractions: readonly number[] | undefined,
  fallback: readonly number[],
  { allowZero }: { allowZero: boolean },
): number[] {
  const values = (fractions ?? fallback)
    .filter((value) => isFinite(value) && (allowZero ? value >= 0 : value > 0))
    .map((value) => Math.max(0, Math.min(1, value)));
  return Array.from(new Set(values));
}

function referenceChannelFor(channels: readonly ChromaticChannel[]): ChromaticChannel {
  return channels.includes("G") ? "G" : (channels[0] ?? "G");
}

function labelForFieldFraction(fieldFraction: number): string {
  const percent = fieldFraction * 100;
  return `${Number(percent.toFixed(percent % 1 === 0 ? 0 : 2))}%`;
}

function span(values: number[]): number | null {
  if (values.length < 2) return null;
  return Math.max(...values) - Math.min(...values);
}

function currentImagePlaneZ(state: PreparedGeometry): number | null {
  const L = runtimeView(state.lens);
  const zPos = state.z as number[];
  const focusT = state.focusT;
  const zoomT = state.zoomT;
  const aberrationT = state.aberrationT;

  if (L.N < 1) return null;
  const lastSurfaceZ = zPos[L.N - 1];
  if (L.isFoldedOptics) return isFinite(L.imagePlane.z) ? L.imagePlane.z : null;
  const imagePlaneZ = lastSurfaceZ + thick(L.N - 1, focusT, zoomT, L, aberrationT);
  return isFinite(imagePlaneZ) ? imagePlaneZ : null;
}

/**
 * Compute axial chromatic focus from the outermost on-axis marginal zone every requested channel passes.
 *
 * The result is a LoCA-style real-ray zonal focus summary by spectral channel. Each channel's zone is aimed at the
 * same fraction of the stop radius at that channel's indices. The search moves inward through the fractions, given
 * outermost first, only while another aperture vignettes a zone, and stops at a zone no ray could be aimed at. When
 * no candidate passes every channel, the first that two pass is compared and the others are named with their reason.
 *
 * @param request - current geometry, controls and both aperture radii in mm
 * @param options - optional ordered channels and marginal stop fractions
 * @returns marginal focus summary at the chosen zone, or null
 */
export function computeLongitudinalChromaticFocus(
  request: AnalysisRequest,
  options: ChromaticAnalysisOptions = {
    channels: request.channels,
    longitudinalFractions: request.sampling.chromaticLongitudinalFractions,
  },
): LongitudinalChromaticFocusResult | null {
  const { preparedGeometry: state } = request;
  const L = runtimeView(state.lens);
  const zPos = state.z as number[];
  const { entrancePupilSemiDiameterMm: currentEPSD } = request.aperture;
  const channels = normalizeChannels(options.channels);
  if (channels.length < 2 || currentEPSD <= 0 || L.N < 1) return null;

  const imagePlaneZ = currentImagePlaneZ(request.preparedGeometry);
  if (imagePlaneZ === null) return null;
  const lastSurfaceZ = zPos[L.N - 1];
  const fractions = normalizeFractions(options.longitudinalFractions, DEFAULT_LONGITUDINAL_CHROMATIC_FRACTIONS, {
    allowZero: false,
  });

  // Each wavelength's zone is aimed at the same stop fraction at its own indices, as lens-design programs aim.
  const zonesByChannel = new Map(
    channels.map((channel) => [channel, prepareAxialZoneLaunch(request, fractions, channel)]),
  );
  type MarginalRay = { y: number; u: number; z?: number; clipped: boolean };
  const zoneRays = (marginalFraction: number) => {
    const marginalRays: Partial<Record<ChromaticChannel, MarginalRay>> = {};
    const clippedByChannel: Partial<Record<ChromaticChannel, boolean>> = {};
    const omittedChannels: ChromaticChannelOmission[] = [];
    for (const channel of channels) {
      const zones = zonesByChannel.get(channel);
      const aimed = zones?.ray(marginalFraction);
      if (!zones || !aimed || aimed.status === "unaimed") {
        omittedChannels.push({ channel, reason: "unaimed" });
        continue;
      }
      const ray = zones.trace.meridional(aimed);
      clippedByChannel[channel] = ray.clipped;
      const omission = chromaticRayOmission(ray);
      if (omission) {
        omittedChannels.push({ channel, reason: omission });
      } else {
        marginalRays[channel] = {
          y: ray.y,
          u: ray.u,
          z: ray.reachedImagePlane ? imagePlaneZ : lastSurfaceZ,
          clipped: false,
        };
      }
    }
    return { marginalFraction, marginalRays, clippedByChannel, omittedChannels };
  };
  function* candidates() {
    for (const fraction of fractions) {
      // A later candidate stands in only for vignetting: a zone no ray could be aimed at ends the search.
      if (channels.some((channel) => zonesByChannel.get(channel)?.ray(fraction)?.status === "unaimed")) return;
      yield zoneRays(fraction);
    }
  }
  const chosen = selectChromaticZone(candidates(), channels.length);
  if (chosen) {
    const { marginalFraction, marginalRays, clippedByChannel, omittedChannels } = chosen;
    const validChannels = Object.keys(marginalRays) as ChromaticChannel[];

    const spread = computeChromaticRayFanSpread(marginalRays, imagePlaneZ, lastSurfaceZ);
    const referenceChannel = referenceChannelFor(channels);
    const referenceFocusZ = spread.axialIntercepts[referenceChannel] ?? null;
    const referenceImageHeight = spread.imagePlaneHeights[referenceChannel] ?? null;
    const samples = channels.map((channel): LongitudinalChromaticFocusSample => {
      const focusZ = spread.axialIntercepts[channel] ?? null;
      const imageHeightMm = spread.imagePlaneHeights[channel] ?? null;
      return {
        channel,
        focusZ,
        focusShiftMm: focusZ === null ? null : focusZ - imagePlaneZ,
        relativeFocusShiftMm: focusZ === null || referenceFocusZ === null ? null : focusZ - referenceFocusZ,
        imageHeightMm,
        relativeImageHeightMm:
          imageHeightMm === null || referenceImageHeight === null ? null : imageHeightMm - referenceImageHeight,
        usable: focusZ !== null,
        clipped: clippedByChannel[channel] ?? true,
      };
    });

    return {
      channels,
      referenceChannel,
      marginalFraction,
      imagePlaneZ,
      lastSurfaceZ,
      longitudinalSpreadMm: spread.axialInterceptSpreadMm,
      longitudinalSpreadUm: spread.axialInterceptSpreadMm * 1000,
      transverseSpreadMm: spread.imagePlaneHeightSpreadMm,
      transverseSpreadUm: spread.imagePlaneHeightSpreadMm * 1000,
      spread: { ...spread, axis: "onAxis", fraction: marginalFraction, channels: validChannels, omittedChannels },
      samples,
      validChannelCount: validChannels.length,
      omittedChannels,
    };
  }

  return null;
}

function emptyLateralField(
  fieldFraction: number,
  referenceChannel: ChromaticChannel,
  channels: readonly ChromaticChannel[],
): LateralColorFieldSample {
  return {
    fieldFraction,
    label: labelForFieldFraction(fieldFraction),
    fieldAngleDeg: 0,
    referenceChannel,
    referenceImageHeightMm: null,
    lateralSpreadMm: null,
    lateralSpreadUm: null,
    samples: channels.map((channel) => ({
      channel,
      imageHeightMm: null,
      relativeHeightMm: null,
      usable: false,
      clipped: true,
    })),
    validChannelCount: 0,
    usable: false,
  };
}

function computeLateralColorField(
  request: AnalysisRequest,
  fieldFraction: number,
  referenceChannel: ChromaticChannel,
  channels: readonly ChromaticChannel[],
  stateGeometry: FieldGeometryState,
): LateralColorFieldSample {
  // Each channel traces its own chief ray, through the stop's centre at that channel; the field angle is shared.
  const geometries = channels.map((channel) =>
    computeOffAxisChannelFieldGeometry(request.preparedGeometry, fieldFraction, channel, stateGeometry),
  );
  const fieldGeometry = geometries.find((geometry) => geometry !== null);
  if (!fieldGeometry) return emptyLateralField(fieldFraction, referenceChannel, channels);

  const rawSamples = channels.map((channel, index) => {
    const geometry = geometries[index];
    const chiefRay = geometry ? traceOffAxisChiefRay(request, geometry, channel) : null;
    return {
      channel,
      imageHeightMm: chiefRay?.imagePoint.y ?? null,
      clipped: chiefRay === null,
    };
  });
  const referenceImageHeightMm =
    rawSamples.find((sample) => sample.channel === referenceChannel)?.imageHeightMm ?? null;
  const validHeights = rawSamples
    .map((sample) => sample.imageHeightMm)
    .filter((height): height is number => height !== null);
  const lateralSpreadMm = span(validHeights);

  return {
    fieldFraction,
    label: labelForFieldFraction(fieldFraction),
    fieldAngleDeg: fieldGeometry.fieldAngleDeg,
    referenceChannel,
    referenceImageHeightMm,
    lateralSpreadMm,
    lateralSpreadUm: lateralSpreadMm === null ? null : lateralSpreadMm * 1000,
    samples: rawSamples.map((sample) => ({
      channel: sample.channel,
      imageHeightMm: sample.imageHeightMm,
      relativeHeightMm:
        sample.imageHeightMm === null || referenceImageHeightMm === null
          ? null
          : sample.imageHeightMm - referenceImageHeightMm,
      usable: sample.imageHeightMm !== null,
      clipped: sample.clipped,
    })),
    validChannelCount: validHeights.length,
    usable: lateralSpreadMm !== null,
  };
}

/**
 * Compute lateral color as chromatic chief-ray image-height spread across field.
 *
 * Lateral color is evaluated independently from the axial LoCA ray. It measures
 * chromatic magnification change at the image plane rather than focus shift.
 *
 * @param request - current geometry, apertures and optional solved field geometry
 * @param options - optional channels and field fractions
 * @returns chief-ray color curve, or null when no field is usable
 */
export function computeLateralColorCurve(
  request: AnalysisRequest,
  options: ChromaticAnalysisOptions = {
    channels: request.channels,
    fieldFractions: request.sampling.chromaticLateralFieldFractions ?? request.sampling.fieldCurvatureFieldFractions,
  },
): LateralColorCurveResult | null {
  const { preparedGeometry: state } = request;
  const { focusT, zoomT, aberrationT } = state;
  const L = runtimeView(state.lens);

  const { entrancePupilSemiDiameterMm: currentEPSD } = request.aperture;
  const fieldGeometry = request.fieldGeometry ?? undefined;
  const channels = normalizeChannels(options.channels);
  if (channels.length < 2 || currentEPSD <= 0 || L.N < 1) return null;

  const imagePlaneZ = currentImagePlaneZ(request.preparedGeometry);
  if (imagePlaneZ === null) return null;

  const stateGeometry = fieldGeometry ?? computeAnalysisFieldGeometryAtState(focusT, zoomT, L, aberrationT);
  const referenceChannel = referenceChannelFor(channels);
  const fieldFractions = normalizeFractions(options.fieldFractions, DEFAULT_LATERAL_COLOR_FIELD_FRACTIONS, {
    allowZero: true,
  });
  const fields = fieldFractions.map((fieldFraction) =>
    computeLateralColorField(request, fieldFraction, referenceChannel, channels, stateGeometry),
  );
  const usableFields = fields.filter((field) => field.usable && field.lateralSpreadMm !== null);
  if (usableFields.length === 0) return null;

  const maxLateralSpreadMm = Math.max(...usableFields.map((field) => field.lateralSpreadMm ?? 0));

  return {
    channels,
    referenceChannel,
    fieldFractions,
    fields,
    usableFieldCount: usableFields.length,
    maxLateralSpreadMm,
    maxLateralSpreadUm: maxLateralSpreadMm * 1000,
    imagePlaneZ,
    halfFieldDeg: stateGeometry.halfFieldDeg,
  };
}

/**
 * Compute both chromatic summaries using the same request and channel sampling.
 *
 * @param request - geometry, apertures, field geometry and ordered chromatic sampling
 * @param options - optional explicit channels and marginal/field fractions
 * @returns longitudinal focus and lateral color, independently nullable
 */
export function computeChromaticAnalysis(
  request: AnalysisRequest,
  options: ChromaticAnalysisOptions = {
    channels: request.channels,
    longitudinalFractions: request.sampling.chromaticLongitudinalFractions,
    fieldFractions: request.sampling.chromaticLateralFieldFractions ?? request.sampling.fieldCurvatureFieldFractions,
  },
): ChromaticAnalysisResult {
  return {
    longitudinalFocus: computeLongitudinalChromaticFocus(request, options),
    lateralColor: computeLateralColorCurve(request, options),
  };
}
