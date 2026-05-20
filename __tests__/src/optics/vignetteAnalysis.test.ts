import { describe, it, expect } from "vitest";
import { computeVignettingCurve as computeVignettingCurveBase } from "../../../src/optics/vignetteAnalysis.js";
import {
  computeAnalysisFieldGeometryAtState,
  doLayout,
  fopenAtZoom,
  epAtZoom,
  type FieldGeometryState,
  type RayTraceOptions,
} from "../../../src/optics/optics.js";
import buildLens from "../../../src/optics/buildLens.js";
import LENS_DEFAULTS from "../../../src/lens-data/defaults.js";
import Sonnar50f15Raw from "../../../src/lens-data/carl-zeiss-jena/ZeissSonnar50f15.data.js";
import NikkorZ70200Raw from "../../../src/lens-data/nikon/NikonNikkorZ70200f28.data.js";
import type { RuntimeLens, LensData } from "../../../src/types/optics.js";

/* ── Helpers ── */

const LEGACY_TRACE_OPTIONS: RayTraceOptions = { mode: "legacy" };
const EXACT_TRACE_OPTIONS: RayTraceOptions = { mode: "exact" };

function build(raw: object): RuntimeLens {
  return buildLens({ ...LENS_DEFAULTS, ...raw } as LensData);
}

function withImageFormat(L: RuntimeLens, imageFormat: LensData["imageFormat"]): RuntimeLens {
  return {
    ...L,
    data: {
      ...L.data,
      imageFormat,
    },
  } as RuntimeLens;
}

function apertureAt(L: RuntimeLens, zoomT: number, stopdownT: number) {
  const currentFOPEN = fopenAtZoom(zoomT, L);
  const rawFNumber = L.FOPEN * Math.pow(L.maxFstop / L.FOPEN, stopdownT);
  const fNumber = Math.max(rawFNumber, currentFOPEN);
  const currentPhysStopSD = (L.stopPhysSD * L.FOPEN) / fNumber;
  /* Entrance-pupil SD: same calculation used in useLensComputation */
  const baseEPSD = epAtZoom(zoomT, L);
  const currentEPSD = (baseEPSD * L.FOPEN) / fNumber;
  return { currentPhysStopSD, currentEPSD };
}

function computeVignettingCurve(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
  fieldGeometry?: FieldGeometryState,
  aberrationT = 0,
) {
  return computeVignettingCurveBase(
    L,
    zPos,
    focusT,
    zoomT,
    currentEPSD,
    currentPhysStopSD,
    fieldGeometry,
    aberrationT,
    LEGACY_TRACE_OPTIONS,
  );
}

describe("computeVignettingCurve", () => {
  /* ── Basic curve shape ── */

  it("returns at least 7 samples for Sonnar 50/1.5", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentPhysStopSD, currentEPSD } = apertureAt(L, 0, 0);

    const samples = computeVignettingCurve(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    /* Adaptive field sampling: ~3° spacing, minimum 7 samples */
    expect(samples.length).toBeGreaterThanOrEqual(7);
  });

  it("on-axis geometricTransmission is 1.0", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentPhysStopSD, currentEPSD } = apertureAt(L, 0, 0);

    const samples = computeVignettingCurve(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(samples[0].geometricTransmission).toBeCloseTo(1.0, 5);
  });

  it("on-axis relativeIllumination is 1.0", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentPhysStopSD, currentEPSD } = apertureAt(L, 0, 0);

    const samples = computeVignettingCurve(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(samples[0].relativeIllumination).toBeCloseTo(1.0, 5);
  });

  it("geometricTransmission does not exceed 1.0 at any sample", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentPhysStopSD, currentEPSD } = apertureAt(L, 0, 0);

    const samples = computeVignettingCurve(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    for (const s of samples) {
      expect(s.geometricTransmission).toBeLessThanOrEqual(1.0 + 1e-9);
    }
  });

  it("relativeIllumination ≤ geometricTransmission at all non-axis samples", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentPhysStopSD, currentEPSD } = apertureAt(L, 0, 0);

    const samples = computeVignettingCurve(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    for (let i = 1; i < samples.length; i++) {
      /* cos⁴(θ) ≤ 1 for θ > 0, so RI ≤ GT */
      expect(samples[i].relativeIllumination).toBeLessThanOrEqual(samples[i].geometricTransmission + 1e-9);
    }
  });

  it("all values are finite", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentPhysStopSD, currentEPSD } = apertureAt(L, 0, 0);

    const samples = computeVignettingCurve(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    for (const s of samples) {
      expect(isFinite(s.fieldAngleDeg)).toBe(true);
      expect(isFinite(s.geometricTransmission)).toBe(true);
      expect(isFinite(s.relativeIllumination)).toBe(true);
    }
  });

  it("returns finite non-negative samples in exact mode when Sonnar rays survive", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentPhysStopSD, currentEPSD } = apertureAt(L, 0, 0);

    const samples = computeVignettingCurveBase(
      L,
      zPos,
      0,
      0,
      currentEPSD,
      currentPhysStopSD,
      undefined,
      0,
      EXACT_TRACE_OPTIONS,
    );

    for (const sample of samples) {
      expect(isFinite(sample.fieldAngleDeg)).toBe(true);
      expect(isFinite(sample.geometricTransmission)).toBe(true);
      expect(isFinite(sample.relativeIllumination)).toBe(true);
      expect(sample.geometricTransmission).toBeGreaterThanOrEqual(0);
      expect(sample.relativeIllumination).toBeGreaterThanOrEqual(0);
    }
  });

  it("first sample field angle is 0°", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentPhysStopSD, currentEPSD } = apertureAt(L, 0, 0);

    const samples = computeVignettingCurve(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(samples[0].fieldAngleDeg).toBe(0);
  });

  /* ── Edge cases ── */

  it("returns empty array when currentEPSD is 0", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentPhysStopSD } = apertureAt(L, 0, 0);

    const samples = computeVignettingCurve(L, zPos, 0, 0, 0, currentPhysStopSD);
    expect(samples).toEqual([]);
  });

  it("returns empty array when L.N < 1", () => {
    const badLens = { N: 0 } as unknown as RuntimeLens;
    const samples = computeVignettingCurve(badLens, [], 0, 0, 1, 1);
    expect(samples).toEqual([]);
  });

  it("stays aligned when using precomputed field geometry", () => {
    const L = build(Sonnar50f15Raw);
    const focusT = 0.25;
    const zoomT = 0;
    const { z: zPos } = doLayout(focusT, zoomT, L);
    const { currentPhysStopSD, currentEPSD } = apertureAt(L, zoomT, 0.2);
    const geometry = computeAnalysisFieldGeometryAtState(focusT, zoomT, L);

    const withGeometry = computeVignettingCurve(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD, geometry);
    const withoutGeometry = computeVignettingCurve(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD);

    expect(withGeometry).toHaveLength(withoutGeometry.length);
    expect(withGeometry.at(-1)?.fieldAngleDeg).toBeCloseTo(withoutGeometry.at(-1)?.fieldAngleDeg ?? 0, 1);
  });

  it("samples to the analysis-limited image-format edge", () => {
    const L = withImageFormat(build(Sonnar50f15Raw), "aps-c");
    const { z: zPos } = doLayout(0, 0, L);
    const { currentPhysStopSD, currentEPSD } = apertureAt(L, 0, 0);
    const geometry = computeAnalysisFieldGeometryAtState(0, 0, L);

    const samples = computeVignettingCurve(L, zPos, 0, 0, currentEPSD, currentPhysStopSD, geometry);

    expect(samples.length).toBeGreaterThan(1);
    expect(samples[samples.length - 1].fieldAngleDeg).toBeCloseTo(geometry.halfFieldDeg, 10);
  });

  /* ── Vignetting direction ── */

  it("edge geometricTransmission remains finite at stopped-down Sonnar", () => {
    const L = build(Sonnar50f15Raw);
    /* Stop down to f/8 to exaggerate vignetting asymmetry */
    const { z: zPos } = doLayout(0, 0, L);
    const { currentPhysStopSD, currentEPSD } = apertureAt(L, 0, 0.8);

    const samples = computeVignettingCurve(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    expect(samples.length).toBeGreaterThan(1);
    const edgeSample = samples[samples.length - 1];
    expect(isFinite(edgeSample.geometricTransmission)).toBe(true);
    expect(edgeSample.geometricTransmission).toBeGreaterThanOrEqual(0);
  });

  it("edge relativeIllumination is less than geometricTransmission (cos⁴ falloff)", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentPhysStopSD, currentEPSD } = apertureAt(L, 0, 0);

    const samples = computeVignettingCurve(L, zPos, 0, 0, currentEPSD, currentPhysStopSD);
    const edgeSample = samples[samples.length - 1];
    /* At the field edge the cos⁴ factor must reduce RI below GT */
    expect(edgeSample.relativeIllumination).toBeLessThan(edgeSample.geometricTransmission + 1e-9);
  });

  /* ── Zoom lens ── */

  it("produces samples for a zoom lens at tele position", () => {
    const L = build(NikkorZ70200Raw);
    if (!L.isZoom) return; // skip if not a zoom lens
    const { z: zPos } = doLayout(0, 1, L);
    const { currentPhysStopSD, currentEPSD } = apertureAt(L, 1, 0);

    const samples = computeVignettingCurve(L, zPos, 0, 1, currentEPSD, currentPhysStopSD);
    /* Adaptive field sampling: ~3° spacing, minimum 7 samples */
    expect(samples.length).toBeGreaterThanOrEqual(7);
    expect(samples[0].geometricTransmission).toBeCloseTo(1.0, 5);
    expect(samples[0].relativeIllumination).toBeCloseTo(1.0, 5);
  });
});
