/**
 * Chromatic analysis helpers — pure longitudinal focus and lateral color sweeps.
 *
 * These helpers keep chromatic analysis out of React rendering. They reuse the
 * same exact chromatic tracing and projection-aware field launch paths as the
 * diagram rays, but return compact data contracts for analysis tabs.
 */

import type { ChromaticChannel, ChromaticSpread, RuntimeLens } from "../../types/optics.js";
import { computeProjectionAwareOffAxisFieldGeometry, traceOffAxisChiefRay } from "../aberration/offAxis.js";
import {
  computeAnalysisFieldGeometryAtState2 as computeAnalysisFieldGeometryAtState,
  type FieldGeometryState2 as FieldGeometryState,
} from "../field/fieldGeometry.js";
import { thick } from "../layout.js";
import { computeChromaticSpread2, traceRayChromatic2 } from "./chromaticTrace.js";
import { CHROMATIC_CHANNEL_ORDER } from "./channels.js";

export const DEFAULT_CHROMATIC_ANALYSIS_CHANNELS = CHROMATIC_CHANNEL_ORDER;
export const DEFAULT_LONGITUDINAL_CHROMATIC_FRACTIONS = [0.97, 0.95, 0.9, 0.85, 0.8] as const;
export const DEFAULT_LATERAL_COLOR_FIELD_FRACTIONS = [0, 0.25, 0.5, 0.75, 1] as const;

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
  marginalFraction: number;
  imagePlaneZ: number;
  lastSurfaceZ: number;
  longitudinalSpreadMm: number;
  longitudinalSpreadUm: number;
  transverseSpreadMm: number;
  transverseSpreadUm: number;
  spread: ChromaticSpread;
  samples: LongitudinalChromaticFocusSample[];
  validChannelCount: number;
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

function currentImagePlaneZ(
  L: RuntimeLens,
  zPos: readonly number[],
  focusT: number,
  zoomT: number,
  aberrationT: number,
): number | null {
  if (L.N < 1) return null;
  const lastSurfaceZ = zPos[L.N - 1];
  if (L.isFoldedOptics) return isFinite(L.imagePlane.z) ? L.imagePlane.z : null;
  const imagePlaneZ = lastSurfaceZ + thick(L.N - 1, focusT, zoomT, L, aberrationT);
  return isFinite(imagePlaneZ) ? imagePlaneZ : null;
}

/**
 * Compute axial chromatic focus from the outermost usable on-axis marginal ray.
 *
 * The result is an LCA-style focus summary by spectral channel. It searches
 * inward through marginal fractions so clipped wide-open rays do not make the
 * analysis unusable.
 */
export function computeLongitudinalChromaticFocus(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
  aberrationT = 0,
  options: ChromaticAnalysisOptions = {},
): LongitudinalChromaticFocusResult | null {
  const channels = normalizeChannels(options.channels);
  if (channels.length < 2 || currentEPSD <= 0 || L.N < 1) return null;

  const imagePlaneZ = currentImagePlaneZ(L, zPos, focusT, zoomT, aberrationT);
  if (imagePlaneZ === null) return null;
  const lastSurfaceZ = zPos[L.N - 1];
  const fractions = normalizeFractions(options.longitudinalFractions, DEFAULT_LONGITUDINAL_CHROMATIC_FRACTIONS, {
    allowZero: false,
  });

  for (const marginalFraction of fractions) {
    const marginalRays: Partial<Record<ChromaticChannel, { y: number; u: number; clipped: boolean }>> = {};
    const clippedByChannel: Partial<Record<ChromaticChannel, boolean>> = {};

    for (const channel of channels) {
      const ray = traceRayChromatic2(
        marginalFraction * currentEPSD,
        0,
        zPos,
        focusT,
        zoomT,
        currentPhysStopSD,
        true,
        L,
        channel,
        aberrationT,
      );
      clippedByChannel[channel] = ray.clipped;
      if (!ray.clipped && Math.abs(ray.u) > 1e-15) {
        marginalRays[channel] = { y: ray.y, u: ray.u, clipped: false };
      }
    }

    const validChannels = Object.keys(marginalRays) as ChromaticChannel[];
    if (validChannels.length < 2) continue;

    const spread = computeChromaticSpread2(marginalRays, imagePlaneZ, lastSurfaceZ);
    const referenceChannel = referenceChannelFor(channels);
    const referenceFocusZ = spread.intercepts[referenceChannel] ?? null;
    const referenceImageHeight = spread.imgHeights[referenceChannel] ?? null;
    const samples = channels.map((channel): LongitudinalChromaticFocusSample => {
      const focusZ = spread.intercepts[channel] ?? null;
      const imageHeightMm = spread.imgHeights[channel] ?? null;
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
      longitudinalSpreadMm: spread.lcaMm,
      longitudinalSpreadUm: spread.lcaMm * 1000,
      transverseSpreadMm: spread.tcaMm,
      transverseSpreadUm: spread.tcaMm * 1000,
      spread: { ...spread, axis: "onAxis", fraction: marginalFraction, channels: validChannels },
      samples,
      validChannelCount: validChannels.length,
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
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
  fieldFraction: number,
  referenceChannel: ChromaticChannel,
  channels: readonly ChromaticChannel[],
  stateGeometry: FieldGeometryState,
  aberrationT: number,
): LateralColorFieldSample {
  const geometry = computeProjectionAwareOffAxisFieldGeometry(
    L,
    zPos,
    focusT,
    zoomT,
    fieldFraction,
    stateGeometry,
    aberrationT,
  );
  if (geometry === null) return emptyLateralField(fieldFraction, referenceChannel, channels);

  const rawSamples = channels.map((channel) => {
    const chiefRay = traceOffAxisChiefRay(
      geometry,
      L,
      focusT,
      zoomT,
      currentEPSD,
      currentPhysStopSD,
      channel,
      aberrationT,
    );
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
    fieldAngleDeg: geometry.fieldAngleDeg,
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
 * Lateral color is evaluated independently from the axial LCA ray. It measures
 * chromatic magnification change at the image plane rather than focus shift.
 */
export function computeLateralColorCurve(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
  aberrationT = 0,
  fieldGeometry?: FieldGeometryState,
  options: ChromaticAnalysisOptions = {},
): LateralColorCurveResult | null {
  const channels = normalizeChannels(options.channels);
  if (channels.length < 2 || currentEPSD <= 0 || L.N < 1) return null;

  const imagePlaneZ = currentImagePlaneZ(L, zPos, focusT, zoomT, aberrationT);
  if (imagePlaneZ === null) return null;

  const stateGeometry = fieldGeometry ?? computeAnalysisFieldGeometryAtState(focusT, zoomT, L, aberrationT);
  const referenceChannel = referenceChannelFor(channels);
  const fieldFractions = normalizeFractions(options.fieldFractions, DEFAULT_LATERAL_COLOR_FIELD_FRACTIONS, {
    allowZero: true,
  });
  const fields = fieldFractions.map((fieldFraction) =>
    computeLateralColorField(
      L,
      zPos,
      focusT,
      zoomT,
      currentEPSD,
      currentPhysStopSD,
      fieldFraction,
      referenceChannel,
      channels,
      stateGeometry,
      aberrationT,
    ),
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

/** Compute both first-class chromatic analysis summaries for one optical state. */
export function computeChromaticAnalysis(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
  aberrationT = 0,
  fieldGeometry?: FieldGeometryState,
  options: ChromaticAnalysisOptions = {},
): ChromaticAnalysisResult {
  return {
    longitudinalFocus: computeLongitudinalChromaticFocus(
      L,
      zPos,
      focusT,
      zoomT,
      currentEPSD,
      currentPhysStopSD,
      aberrationT,
      options,
    ),
    lateralColor: computeLateralColorCurve(
      L,
      zPos,
      focusT,
      zoomT,
      currentEPSD,
      currentPhysStopSD,
      aberrationT,
      fieldGeometry,
      options,
    ),
  };
}
