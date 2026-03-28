import { describe, expect, it } from "vitest";
import {
  bestFocusPlaneForDirection,
  computeOffAxisFieldGeometry,
  traceCircularOffAxisBundle,
  traceOrthogonalOffAxisBundle,
} from "../src/optics/aberration/offAxis.js";
import { DEFAULT_CIRCULAR_PUPIL_RING_SAMPLES, doLayout, epAtZoom, fopenAtZoom } from "../src/optics/optics.js";
import buildLens from "../src/optics/buildLens.js";
import LENS_DEFAULTS from "../src/lens-data/defaults.js";
import ApoLantharRaw from "../src/lens-data/VoigtlanderApoLanthar50f2.data.js";
import type { LensData, RuntimeLens } from "../src/types/optics.js";

function build(raw: object): RuntimeLens {
  return buildLens({ ...LENS_DEFAULTS, ...raw } as LensData);
}

function apertureAt(L: RuntimeLens, zoomT: number, stopdownT: number) {
  const currentFOPEN = fopenAtZoom(zoomT, L);
  const rawFNumber = L.FOPEN * Math.pow(L.maxFstop / L.FOPEN, stopdownT);
  const fNumber = Math.max(rawFNumber, currentFOPEN);
  const currentPhysStopSD = (L.stopPhysSD * L.FOPEN) / fNumber;
  const baseEPSD = epAtZoom(zoomT, L);
  const currentEPSD = (baseEPSD * L.FOPEN) / fNumber;
  return { currentPhysStopSD, currentEPSD };
}

describe("off-axis aberration helpers", () => {
  it("computes finite center-field geometry", () => {
    const L = build(ApoLantharRaw);
    const { z: zPos } = doLayout(0, 0, L);

    const geometry = computeOffAxisFieldGeometry(L, zPos, 0, 0);
    expect(geometry).not.toBeNull();
    expect(geometry!.fieldFraction).toBe(0);
    expect(geometry!.fieldAngleDeg).toBe(0);
    expect(geometry!.uField).toBeCloseTo(0, 12);
    expect(geometry!.yChief).toBeCloseTo(0, 12);
    expect(isFinite(geometry!.imagePlaneZ)).toBe(true);
  });

  it("traces a tangential orthogonal fan bundle and keeps the chief sample", () => {
    const L = build(ApoLantharRaw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);
    const geometry = computeOffAxisFieldGeometry(L, zPos, 0, 0.5);

    const bundle = traceOrthogonalOffAxisBundle(
      "tangential",
      6,
      geometry!,
      L,
      zPos,
      0,
      0,
      currentEPSD * 0.6,
      currentPhysStopSD * 0.6,
    );

    expect(bundle).not.toBeNull();
    expect(bundle!.sampleCount).toBe(7);
    expect(bundle!.validSampleCount).toBeGreaterThanOrEqual(6);
    expect(bundle!.clippedSampleCount).toBe(bundle!.sampleCount - bundle!.validSampleCount);
    expect(bundle!.samples.every((sample) => sample.xFraction === 0)).toBe(true);
    expect(bundle!.samples.some((sample) => sample.pupilFraction === 0)).toBe(true);
  });

  it("keeps the weighted circular bundle centered on axis", () => {
    const L = build(ApoLantharRaw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);
    const geometry = computeOffAxisFieldGeometry(L, zPos, 0, 0);

    const bundle = traceCircularOffAxisBundle(
      DEFAULT_CIRCULAR_PUPIL_RING_SAMPLES,
      geometry!,
      L,
      zPos,
      0,
      0,
      currentEPSD * 0.6,
      currentPhysStopSD * 0.6,
    );

    expect(bundle).not.toBeNull();
    expect(bundle!.sampleCount).toBe(61);
    expect(bundle!.validSampleCount).toBe(61);

    const weightedRelativeX = bundle!.samples.reduce(
      (sum, sample) => sum + (sample.imagePoint.x - bundle!.chiefRay.imagePoint.x) * (sample.weight ?? 0),
      0,
    );
    const weightedRelativeY = bundle!.samples.reduce(
      (sum, sample) => sum + (sample.imagePoint.y - bundle!.chiefRay.imagePoint.y) * (sample.weight ?? 0),
      0,
    );
    expect(weightedRelativeX).toBeCloseTo(0, 8);
    expect(weightedRelativeY).toBeCloseTo(0, 8);
  });

  it("produces matching tangential and sagittal focus at the center field", () => {
    const L = build(ApoLantharRaw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);
    const geometry = computeOffAxisFieldGeometry(L, zPos, 0, 0);

    const bundle = traceCircularOffAxisBundle(
      DEFAULT_CIRCULAR_PUPIL_RING_SAMPLES,
      geometry!,
      L,
      zPos,
      0,
      0,
      currentEPSD * 0.6,
      currentPhysStopSD * 0.6,
    );

    expect(bundle).not.toBeNull();
    expect(bestFocusPlaneForDirection(bundle!, "tangential")).toBeCloseTo(
      bestFocusPlaneForDirection(bundle!, "sagittal"),
      8,
    );
  });
});
