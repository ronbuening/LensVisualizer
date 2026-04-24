import { describe, expect, it } from "vitest";
import {
  bestFocusPlaneForDirection,
  computeOffAxisFieldGeometry,
  traceCircularOffAxisBundle,
  traceOffAxisBundleFromSamples,
  traceOrthogonalOffAxisBundle,
  transverseFocusHitsForDirection,
} from "../src/optics/aberration/offAxis.js";
import { DEFAULT_CIRCULAR_PUPIL_RING_SAMPLES, doLayout, epAtZoom, fopenAtZoom } from "../src/optics/optics.js";
import buildLens from "../src/optics/buildLens.js";
import LENS_DEFAULTS from "../src/lens-data/defaults.js";
import ApoLantharRaw from "../src/lens-data/voigtlander/VoigtlanderApoLanthar50f2.data.js";
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

  it("computes finite geometry at half-field (0.5)", () => {
    const L = build(ApoLantharRaw);
    const { z: zPos } = doLayout(0, 0, L);

    const geometry = computeOffAxisFieldGeometry(L, zPos, 0, 0.5);
    expect(geometry).not.toBeNull();
    expect(geometry!.fieldFraction).toBe(0.5);
    expect(geometry!.fieldAngleDeg).toBeGreaterThan(0);
    expect(geometry!.uField).toBeLessThan(0);
    expect(isFinite(geometry!.yChief)).toBe(true);
    expect(isFinite(geometry!.imagePlaneZ)).toBe(true);
  });

  it("computes finite geometry at full field (1.0)", () => {
    const L = build(ApoLantharRaw);
    const { z: zPos } = doLayout(0, 0, L);

    const geometry = computeOffAxisFieldGeometry(L, zPos, 0, 1.0);
    expect(geometry).not.toBeNull();
    expect(geometry!.fieldFraction).toBe(1.0);
    expect(geometry!.fieldAngleDeg).toBeGreaterThan(0);
  });

  it("rejects invalid field fractions", () => {
    const L = build(ApoLantharRaw);
    const { z: zPos } = doLayout(0, 0, L);

    expect(computeOffAxisFieldGeometry(L, zPos, 0, -0.1)).toBeNull();
    expect(computeOffAxisFieldGeometry(L, zPos, 0, 1.5)).toBeNull();
    expect(computeOffAxisFieldGeometry(L, zPos, 0, NaN)).toBeNull();
  });

  it("extracts tangential y/uy from transverseFocusHitsForDirection", () => {
    const L = build(ApoLantharRaw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);
    const geometry = computeOffAxisFieldGeometry(L, zPos, 0, 0.5);

    const bundle = traceOrthogonalOffAxisBundle(
      "tangential",
      6,
      geometry!,
      L,
      0,
      0,
      currentEPSD * 0.6,
      currentPhysStopSD * 0.6,
    );
    expect(bundle).not.toBeNull();

    const { hits, referenceHit } = transverseFocusHitsForDirection(bundle!, "tangential");
    expect(hits.length).toBe(bundle!.samples.length);
    // Tangential direction should extract y and uy
    expect(referenceHit.coordinate).toBe(bundle!.chiefRay.trace.y);
    expect(referenceHit.slope).toBe(bundle!.chiefRay.trace.uy);
    expect(hits[0].coordinate).toBe(bundle!.samples[0].trace.y);
    expect(hits[0].slope).toBe(bundle!.samples[0].trace.uy);
  });

  it("extracts sagittal x/ux from transverseFocusHitsForDirection", () => {
    const L = build(ApoLantharRaw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);
    const geometry = computeOffAxisFieldGeometry(L, zPos, 0, 0.5);

    const bundle = traceOrthogonalOffAxisBundle(
      "sagittal",
      6,
      geometry!,
      L,
      0,
      0,
      currentEPSD * 0.6,
      currentPhysStopSD * 0.6,
    );
    expect(bundle).not.toBeNull();

    const { hits, referenceHit } = transverseFocusHitsForDirection(bundle!, "sagittal");
    expect(referenceHit.coordinate).toBe(bundle!.chiefRay.trace.x);
    expect(referenceHit.slope).toBe(bundle!.chiefRay.trace.ux);
    expect(hits[0].coordinate).toBe(bundle!.samples[0].trace.x);
    expect(hits[0].slope).toBe(bundle!.samples[0].trace.ux);
  });

  it("traces a sagittal orthogonal fan bundle with all xFraction variation", () => {
    const L = build(ApoLantharRaw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);
    const geometry = computeOffAxisFieldGeometry(L, zPos, 0, 0.5);

    const bundle = traceOrthogonalOffAxisBundle(
      "sagittal",
      6,
      geometry!,
      L,
      0,
      0,
      currentEPSD * 0.6,
      currentPhysStopSD * 0.6,
    );

    expect(bundle).not.toBeNull();
    expect(bundle!.sampleCount).toBe(7);
    expect(bundle!.validSampleCount).toBeGreaterThanOrEqual(6);
    // Sagittal fan: all yFraction should be 0, xFraction should vary
    expect(bundle!.samples.every((sample) => sample.yFraction === 0)).toBe(true);
    expect(bundle!.samples.some((sample) => sample.xFraction !== 0)).toBe(true);
  });

  it("returns null from traceOffAxisBundleFromSamples for zero EPSD", () => {
    const L = build(ApoLantharRaw);
    const { z: zPos } = doLayout(0, 0, L);
    const geometry = computeOffAxisFieldGeometry(L, zPos, 0, 0.5);

    const result = traceOffAxisBundleFromSamples(
      [{ index: 0, pupilFraction: 0, xFraction: 0, yFraction: 0 }],
      geometry!,
      L,
      0,
      0,
      0,
      0,
    );
    expect(result).toBeNull();
  });

  it("produces different chromatic bundle intercepts for R vs B channels", () => {
    const L = build(ApoLantharRaw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);
    const geometry = computeOffAxisFieldGeometry(L, zPos, 0, 0.5);

    const redBundle = traceOrthogonalOffAxisBundle(
      "tangential",
      6,
      geometry!,
      L,
      0,
      0,
      currentEPSD * 0.6,
      currentPhysStopSD * 0.6,
      "R",
    );
    const blueBundle = traceOrthogonalOffAxisBundle(
      "tangential",
      6,
      geometry!,
      L,
      0,
      0,
      currentEPSD * 0.6,
      currentPhysStopSD * 0.6,
      "B",
    );

    expect(redBundle).not.toBeNull();
    expect(blueBundle).not.toBeNull();
    expect(redBundle!.validSampleCount).toBeGreaterThan(0);
    expect(blueBundle!.validSampleCount).toBeGreaterThan(0);

    // Chief ray image points should differ between R and B due to dispersion
    const redChiefY = redBundle!.chiefRay.imagePoint.y;
    const blueChiefY = blueBundle!.chiefRay.imagePoint.y;
    expect(Math.abs(redChiefY - blueChiefY)).toBeGreaterThan(1e-6);
  });

  it("produces different chromatic circular bundle intercepts for R vs B", () => {
    const L = build(ApoLantharRaw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);
    const geometry = computeOffAxisFieldGeometry(L, zPos, 0, 0.5);

    const redBundle = traceCircularOffAxisBundle(
      [1, 6],
      geometry!,
      L,
      0,
      0,
      currentEPSD * 0.6,
      currentPhysStopSD * 0.6,
      "R",
    );
    const blueBundle = traceCircularOffAxisBundle(
      [1, 6],
      geometry!,
      L,
      0,
      0,
      currentEPSD * 0.6,
      currentPhysStopSD * 0.6,
      "B",
    );

    expect(redBundle).not.toBeNull();
    expect(blueBundle).not.toBeNull();

    const redChiefY = redBundle!.chiefRay.imagePoint.y;
    const blueChiefY = blueBundle!.chiefRay.imagePoint.y;
    expect(Math.abs(redChiefY - blueChiefY)).toBeGreaterThan(1e-6);
  });

  it("returns null from traceOffAxisBundleFromSamples for empty lens", () => {
    const emptyLens = { N: 0, S: [] } as unknown as RuntimeLens;
    const geometry = {
      fieldFraction: 0.5,
      fieldAngleDeg: 10,
      uField: -0.17,
      yChief: 1,
      lastSurfZ: 50,
      imagePlaneZ: 100,
    };

    const result = traceOffAxisBundleFromSamples(
      [{ index: 0, pupilFraction: 0, xFraction: 0, yFraction: 0 }],
      geometry,
      emptyLens,
      0,
      0,
      10,
      5,
    );
    expect(result).toBeNull();
  });
});
