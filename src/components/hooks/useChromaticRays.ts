/**
 * useChromaticRays — Computes chromatic ray fan segments and aberration spread.
 *
 * Traces density-derived axial and off-axis ray fans through wavelength-dependent
 * refractive indices for the selected spectral-line channels. Axial rays draw
 * the on-axis fan while a dedicated marginal-focus search feeds the LoCA readout;
 * off-axis rays feed the fan-spread readout using the same state-aware
 * field geometry as the monochrome off-axis fan.
 */
import { useMemo } from "react";
import {
  computeChromaticRayFanSpread,
  computeLongitudinalChromaticFocus,
  offsetVectorFieldRay,
  traceRayChromatic,
  traceRayVectorChromatic,
} from "../../optics/optics.js";
import {
  cameraDirectionForDiagramField,
  tracePerspectiveDiagramFan,
  type PerspectiveDiagramFan,
  type PerspectiveDiagramFanSample,
} from "../../optics/perspective/diagramFan.js";
import type { PerspectiveTraceContext } from "../../optics/perspective/index.js";
import { obstructionAwareRayFractionsForDensity } from "../../optics/raySampling.js";
import type {
  RuntimeLens,
  ChromaticChannel,
  ChromaticRayFanSpread,
  ChromaticRayFanSpreadByAxis,
} from "../../types/optics.js";
import type { OffAxisMode, RayDensity } from "../../types/state.js";
import type { RaySegment } from "./useOnAxisRays.js";
import { compileRaySegment, filterChannels } from "./raySegmentUtils.js";
import { computeOffAxisTraceGeometry } from "./offAxisRayUtils.js";

export interface ChromaticRaySegment extends RaySegment {
  channel: ChromaticChannel;
  axis: "onAxis" | "offAxis";
  fraction: number;
  y: number;
  u: number;
  z?: number;
  clipped: boolean;
}

interface UseChromaticRaysParams {
  L: RuntimeLens | undefined;
  zPos: number[];
  IMG_MM: number;
  focusT: number;
  zoomT: number;
  aberrationT?: number;
  sx: (z: number) => number;
  sy: (y: number) => number;
  clampedRayEnd: (lastZ: number, lastY: number, u: number, targetZ: number) => [number, number];
  perspectiveTraceContext?: PerspectiveTraceContext;
  currentPhysStopSD: number;
  currentEPSD: number;
  rayDensity: RayDensity;
  rayTracksF: boolean;
  focusK: number;
  showChromatic: boolean;
  showOnAxis: boolean;
  showOffAxis: OffAxisMode;
  chromR: boolean;
  chromG: boolean;
  chromB: boolean;
  chromV: boolean;
  lensKey: string;
}

interface UseChromaticRaysResult {
  chromaticRays: ChromaticRaySegment[];
  chromaticRayFanSpread: ChromaticRayFanSpread | null;
  chromaticRayFanSpreads: ChromaticRayFanSpreadByAxis;
  error: unknown;
}

const DISPLAY_LOCA_FALLBACK_FRACTIONS = [0.97, 0.95, 0.9, 0.85, 0.8] as const;

function longitudinalFractionsForDisplay(L: RuntimeLens, currentEPSD: number): number[] {
  const fractions: number[] = [...DISPLAY_LOCA_FALLBACK_FRACTIONS];
  for (const fraction of obstructionAwareRayFractionsForDensity(L, L.rayFractions, "normal", currentEPSD)) {
    const absolute = Math.abs(fraction);
    if (absolute > 1e-12 && !fractions.some((value) => Math.abs(value - absolute) < 1e-12)) {
      fractions.push(absolute);
    }
  }
  return fractions.sort((a, b) => b - a);
}

function spreadForAxis(
  chromaticRays: ChromaticRaySegment[],
  axis: ChromaticRaySegment["axis"],
  IMG_MM: number,
  lastSurfaceZ: number,
): ChromaticRayFanSpread | null {
  const axisRays = chromaticRays.filter((r) => r.axis === axis);
  if (axisRays.length === 0) return null;

  const candidateFractions = Array.from(new Set(axisRays.map((r) => r.fraction))).sort((a, b) => {
    const absDelta = Math.abs(b) - Math.abs(a);
    return Math.abs(absDelta) > 1e-12 ? absDelta : b - a;
  });

  for (const fraction of candidateFractions) {
    const marginalRays: Partial<Record<ChromaticChannel, { y: number; u: number; z?: number; clipped: boolean }>> = {};
    for (const r of axisRays) {
      if (Math.abs(r.fraction - fraction) < 1e-12 && !r.clipped && Math.abs(r.u) > 1e-15) {
        marginalRays[r.channel] = { y: r.y, u: r.u, z: r.z, clipped: false };
      }
    }
    const channels = Object.keys(marginalRays) as ChromaticChannel[];
    if (channels.length >= 2) {
      return { ...computeChromaticRayFanSpread(marginalRays, IMG_MM, lastSurfaceZ), axis, fraction, channels };
    }
  }

  return null;
}

function compilePerspectiveChromaticSample(
  sample: PerspectiveDiagramFanSample,
  channel: ChromaticChannel,
  axis: ChromaticRaySegment["axis"],
  sx: (z: number) => number,
  sy: (y: number) => number,
  clampedRayEnd: (lastZ: number, lastY: number, u: number, targetZ: number) => [number, number],
  imagePlaneZ: number,
): ChromaticRaySegment {
  const result = sample.diagramTrace.ray;
  const segment = compileRaySegment(
    result.pts,
    result.ghostPts,
    result.u,
    result.clipped,
    sx,
    sy,
    clampedRayEnd,
    imagePlaneZ,
    undefined,
    result.reachedImagePlane,
    false,
  );
  return {
    ...segment,
    channel,
    axis,
    fraction: sample.fraction,
    y: result.y,
    u: result.u,
    z: sample.diagramTrace.returnPoint[0],
    clipped: result.clipped,
  };
}

export default function useChromaticRays({
  L,
  zPos,
  IMG_MM,
  focusT,
  zoomT,
  aberrationT = 0,
  sx,
  sy,
  clampedRayEnd,
  perspectiveTraceContext,
  currentPhysStopSD,
  currentEPSD,
  rayDensity,
  rayTracksF,
  focusK,
  showChromatic,
  showOnAxis,
  showOffAxis,
  chromR,
  chromG,
  chromB,
  chromV,
  lensKey,
}: UseChromaticRaysParams): UseChromaticRaysResult {
  /* Separate ref to surface a caught error from the chromatic useMemo to the
   * combined return value (useMemo cannot return a tuple with a separate
   * error field without restructuring, so we pair the error here). */
  const chromaticResult = useMemo((): { segments: ChromaticRaySegment[]; error: unknown } => {
    if (!L || !showChromatic) return { segments: [], error: null };
    const channels = filterChannels(chromR, chromG, chromB, chromV);
    if (channels.length === 0) return { segments: [], error: null };
    try {
      const out: ChromaticRaySegment[] = [];
      if (showOnAxis) {
        const fractions = obstructionAwareRayFractionsForDensity(L, L.rayFractions, rayDensity, currentEPSD);
        if (perspectiveTraceContext?.pose.active) {
          const fans = new Map<ChromaticChannel, PerspectiveDiagramFan | null>(
            channels.map((channel) => [
              channel,
              tracePerspectiveDiagramFan({
                context: perspectiveTraceContext,
                sceneDirectionCamera: [0, 0, 1],
                pupilSemiDiameterMm: currentEPSD,
                stopSemiDiameterMm: currentPhysStopSD,
                fractions,
                channel,
              }),
            ]),
          );
          for (let index = 0; index < fractions.length; index++) {
            for (const channel of channels) {
              const sample = fans.get(channel)?.samples[index];
              if (sample) {
                out.push(compilePerspectiveChromaticSample(sample, channel, "onAxis", sx, sy, clampedRayEnd, IMG_MM));
              }
            }
          }
        } else {
          for (const f of fractions) {
            const h = f * currentEPSD;
            const uIn = rayTracksF ? h * focusK : 0;
            for (const ch of channels) {
              const result = traceRayChromatic(
                h,
                uIn,
                zPos,
                focusT,
                zoomT,
                currentPhysStopSD,
                true,
                L,
                ch,
                aberrationT,
              );
              const seg = compileRaySegment(
                result.pts,
                result.ghostPts,
                result.u,
                result.clipped,
                sx,
                sy,
                clampedRayEnd,
                IMG_MM,
                undefined,
                result.reachedImagePlane,
              );
              out.push({
                ...seg,
                channel: ch,
                axis: "onAxis",
                fraction: f,
                y: result.y,
                u: result.u,
                z: result.reachedImagePlane ? IMG_MM : zPos[L.N - 1],
                clipped: result.clipped,
              });
            }
          }
        }
      }

      if (showOffAxis !== "off") {
        const geometry = computeOffAxisTraceGeometry({
          L,
          zPos,
          IMG_MM,
          focusT,
          zoomT,
          aberrationT,
          sx,
          sy,
          showOffAxis,
        });
        if (geometry) {
          const fractions = obstructionAwareRayFractionsForDensity(L, L.offAxisFractions, rayDensity, currentEPSD);
          if (perspectiveTraceContext?.pose.active) {
            const sceneDirectionCamera = cameraDirectionForDiagramField(geometry.fieldAngleDeg);
            const fans = new Map<ChromaticChannel, PerspectiveDiagramFan | null>(
              channels.map((channel) => [
                channel,
                tracePerspectiveDiagramFan({
                  context: perspectiveTraceContext,
                  sceneDirectionCamera,
                  pupilSemiDiameterMm: currentEPSD,
                  stopSemiDiameterMm: currentPhysStopSD,
                  fractions,
                  channel,
                }),
              ]),
            );
            for (let index = 0; index < fractions.length; index++) {
              for (const channel of channels) {
                const sample = fans.get(channel)?.samples[index];
                if (sample) {
                  out.push(
                    compilePerspectiveChromaticSample(sample, channel, "offAxis", sx, sy, clampedRayEnd, IMG_MM),
                  );
                }
              }
            }
          } else {
            for (const f of fractions) {
              const h = f * currentEPSD;
              const uConverge = rayTracksF ? h * focusK : 0;
              for (const ch of channels) {
                const result =
                  geometry.kind === "vector"
                    ? traceRayVectorChromatic(
                        offsetVectorFieldRay(geometry.vectorLaunch, 0, h, uConverge),
                        zPos,
                        currentPhysStopSD,
                        true,
                        L,
                        ch,
                        focusT,
                        zoomT,
                        aberrationT,
                      )
                    : traceRayChromatic(
                        geometry.yChief + h,
                        geometry.uField + uConverge,
                        zPos,
                        focusT,
                        zoomT,
                        currentPhysStopSD,
                        true,
                        L,
                        ch,
                        aberrationT,
                      );
                const seg = compileRaySegment(
                  result.pts,
                  result.ghostPts,
                  result.u,
                  result.clipped,
                  sx,
                  sy,
                  clampedRayEnd,
                  IMG_MM,
                  geometry.useEdge ? geometry.edgeEnd : undefined,
                  result.reachedImagePlane,
                );
                out.push({
                  ...seg,
                  channel: ch,
                  axis: "offAxis",
                  fraction: f,
                  y: result.y,
                  u: result.u,
                  z: result.reachedImagePlane ? IMG_MM : zPos[L.N - 1],
                  clipped: result.clipped,
                });
              }
            }
          }
        }
      }
      return { segments: out, error: null };
    } catch (e) {
      console.error(`[useChromaticRays] Chromatic ray trace failed for "${lensKey}":`, e);
      return { segments: [], error: e };
    }
  }, [
    showChromatic,
    chromR,
    chromG,
    chromB,
    chromV,
    zPos,
    focusT,
    aberrationT,
    sx,
    sy,
    currentPhysStopSD,
    currentEPSD,
    rayDensity,
    rayTracksF,
    focusK,
    L,
    IMG_MM,
    lensKey,
    clampedRayEnd,
    perspectiveTraceContext,
    zoomT,
    showOnAxis,
    showOffAxis,
  ]);

  const chromaticRays = chromaticResult.segments;

  const onAxisChromSpread = useMemo((): ChromaticRayFanSpread | null => {
    if (!L || !showChromatic || !showOnAxis || chromaticResult.error) return null;
    const channels = filterChannels(chromR, chromG, chromB, chromV);
    if (channels.length < 2) return null;
    return (
      computeLongitudinalChromaticFocus(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD, aberrationT, {
        channels,
        longitudinalFractions: longitudinalFractionsForDisplay(L, currentEPSD),
      })?.spread ?? null
    );
  }, [
    showChromatic,
    showOnAxis,
    chromR,
    chromG,
    chromB,
    chromV,
    chromaticResult.error,
    L,
    zPos,
    focusT,
    zoomT,
    currentEPSD,
    currentPhysStopSD,
    aberrationT,
  ]);

  const offAxisChromSpread = useMemo((): ChromaticRayFanSpread | null => {
    if (!L || !showChromatic || chromaticResult.error) return null;
    const channels = filterChannels(chromR, chromG, chromB, chromV);
    if (channels.length < 2) return null;
    return spreadForAxis(chromaticRays, "offAxis", IMG_MM, zPos[L.N - 1]);
  }, [showChromatic, chromR, chromG, chromB, chromV, chromaticRays, chromaticResult.error, IMG_MM, zPos, L]);

  const chromaticRayFanSpreads = useMemo(
    (): ChromaticRayFanSpreadByAxis => ({ onAxis: onAxisChromSpread, offAxis: offAxisChromSpread }),
    [onAxisChromSpread, offAxisChromSpread],
  );

  const chromaticRayFanSpread = chromaticRayFanSpreads.onAxis ?? chromaticRayFanSpreads.offAxis;

  return { chromaticRays, chromaticRayFanSpread, chromaticRayFanSpreads, error: chromaticResult.error };
}
