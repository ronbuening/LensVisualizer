import { describe, it, expect } from "vitest";
import { computeDistortionCurve, computeDistortionFieldGrid } from "../src/optics/distortionAnalysis.js";
import { doLayout, eflAtFocus, fopenAtZoom, halfFieldAtZoom } from "../src/optics/optics.js";
import buildLens from "../src/optics/buildLens.js";
import LENS_DEFAULTS from "../src/lens-data/defaults.js";
import Sonnar50f15Raw from "../src/lens-data/ZeissSonnar50f15.data.js";
import ApoLantharRaw from "../src/lens-data/VoigtlanderApoLanthar50f2.data.js";
import NikkorZ70200Raw from "../src/lens-data/NikonNikkorZ70200f28.data.js";
import NikonZ135Raw from "../src/lens-data/NikonZ135f18.data.js";
import NikonZ100400Raw from "../src/lens-data/NikonNikkorZ100400f4556.data.js";
import type { RuntimeLens, LensData } from "../src/types/optics.js";

/* ── Helpers ── */

function build(raw: object): RuntimeLens {
  return buildLens({ ...LENS_DEFAULTS, ...raw } as LensData);
}

function apertureAt(L: RuntimeLens, zoomT: number, stopdownT: number) {
  const currentFOPEN = fopenAtZoom(zoomT, L);
  const rawFNumber = L.FOPEN * Math.pow(L.maxFstop / L.FOPEN, stopdownT);
  const fNumber = Math.max(rawFNumber, currentFOPEN);
  const currentPhysStopSD = (L.stopPhysSD * L.FOPEN) / fNumber;
  return { currentPhysStopSD };
}

describe("computeDistortionCurve", () => {
  /* ── Basic curve shape ── */

  it("returns at least 9 samples for Sonnar 50/1.5", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const dynamicEFL = eflAtFocus(0, 0, L);
    const { currentPhysStopSD } = apertureAt(L, 0, 0);

    const samples = computeDistortionCurve(L, zPos, 0, 0, dynamicEFL, currentPhysStopSD);
    expect(samples.length).toBeGreaterThanOrEqual(9);
  });

  it("first sample is at 0° with exactly 0% distortion", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const dynamicEFL = eflAtFocus(0, 0, L);
    const { currentPhysStopSD } = apertureAt(L, 0, 0);

    const samples = computeDistortionCurve(L, zPos, 0, 0, dynamicEFL, currentPhysStopSD);
    expect(samples[0].fieldAngleDeg).toBe(0);
    expect(samples[0].distortionPercent).toBe(0);
  });

  it("field angles span from 0 to near the current field edge", () => {
    const L = build(ApoLantharRaw);
    const { z: zPos } = doLayout(0, 0, L);
    const dynamicEFL = eflAtFocus(0, 0, L);
    const { currentPhysStopSD } = apertureAt(L, 0, 0);

    const samples = computeDistortionCurve(L, zPos, 0, 0, dynamicEFL, currentPhysStopSD);
    expect(samples.length).toBeGreaterThan(1);

    const halfField = halfFieldAtZoom(0, L);
    const lastAngle = samples[samples.length - 1].fieldAngleDeg;
    expect(lastAngle).toBeGreaterThan(0);
    expect(lastAngle).toBeLessThanOrEqual(halfField);
    expect(lastAngle).toBeGreaterThan(halfField * 0.9);
  });

  it("all samples have finite values", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const dynamicEFL = eflAtFocus(0, 0, L);
    const { currentPhysStopSD } = apertureAt(L, 0, 0);

    const samples = computeDistortionCurve(L, zPos, 0, 0, dynamicEFL, currentPhysStopSD);
    for (const s of samples) {
      expect(isFinite(s.fieldAngleDeg)).toBe(true);
      expect(isFinite(s.distortionPercent)).toBe(true);
      expect(isFinite(s.realHeight)).toBe(true);
      expect(isFinite(s.idealHeight)).toBe(true);
      expect(isFinite(s.imageHeight)).toBe(true);
      expect(isFinite(s.normalizedImageHeight)).toBe(true);
      expect(isFinite(s.idealFieldAngleDeg)).toBe(true);
    }
  });

  /* ── Edge cases ── */

  it("ignores the legacy dynamicEFL input and still computes the curve", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const { currentPhysStopSD } = apertureAt(L, 0, 0);

    const samples = computeDistortionCurve(L, zPos, 0, 0, 0, currentPhysStopSD);
    expect(samples.length).toBeGreaterThanOrEqual(9);
  });

  /* ── Zoom lens ── */

  it("produces samples for a zoom lens at tele position", () => {
    const L = build(NikkorZ70200Raw);
    if (!L.isZoom) return; // skip if not zoom
    const { z: zPos } = doLayout(0, 1, L);
    const dynamicEFL = eflAtFocus(0, 1, L);
    const { currentPhysStopSD } = apertureAt(L, 1, 0);

    const samples = computeDistortionCurve(L, zPos, 0, 1, dynamicEFL, currentPhysStopSD);
    expect(samples.length).toBeGreaterThanOrEqual(9);
    expect(samples[0].distortionPercent).toBe(0);
  });

  /* ── Distortion direction ── */

  it("ApoLanthar 50/2 shows non-zero distortion at field edge", () => {
    const L = build(ApoLantharRaw);
    const { z: zPos } = doLayout(0, 0, L);
    const dynamicEFL = eflAtFocus(0, 0, L);
    const { currentPhysStopSD } = apertureAt(L, 0, 0);

    const samples = computeDistortionCurve(L, zPos, 0, 0, dynamicEFL, currentPhysStopSD);
    const edgeSample = samples[samples.length - 1];
    /* Just verify it's non-zero — specific direction depends on lens design */
    expect(edgeSample.distortionPercent).not.toBe(0);
  });

  it("field angles are monotonically increasing", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const dynamicEFL = eflAtFocus(0, 0, L);
    const { currentPhysStopSD } = apertureAt(L, 0, 0);

    const samples = computeDistortionCurve(L, zPos, 0, 0, dynamicEFL, currentPhysStopSD);
    for (let i = 1; i < samples.length; i++) {
      expect(samples[i].fieldAngleDeg).toBeGreaterThan(samples[i - 1].fieldAngleDeg);
    }
  });

  it("image heights are monotonically increasing in magnitude", () => {
    const L = build(Sonnar50f15Raw);
    const { z: zPos } = doLayout(0, 0, L);
    const dynamicEFL = eflAtFocus(0, 0, L);
    const { currentPhysStopSD } = apertureAt(L, 0, 0);

    const samples = computeDistortionCurve(L, zPos, 0, 0, dynamicEFL, currentPhysStopSD);
    for (let i = 1; i < samples.length; i++) {
      expect(Math.abs(samples[i].imageHeight)).toBeGreaterThan(Math.abs(samples[i - 1].imageHeight));
      expect(samples[i].normalizedImageHeight).toBeGreaterThan(samples[i - 1].normalizedImageHeight);
    }
  });

  it("keeps close-focus distortion bounded for Nikon Z 135mm f/1.8", () => {
    const L = build(NikonZ135Raw);
    const { z: zPos } = doLayout(1, 0, L);
    const dynamicEFL = eflAtFocus(1, 0, L);
    const { currentPhysStopSD } = apertureAt(L, 0, 0);

    const samples = computeDistortionCurve(L, zPos, 1, 0, dynamicEFL, currentPhysStopSD);
    const maxAbs = samples.reduce((m, s) => Math.max(m, Math.abs(s.distortionPercent)), 0);
    expect(maxAbs).toBeLessThan(10);
  });

  it("keeps tele close-focus distortion bounded for Nikon Z 100-400mm", () => {
    const L = build(NikonZ100400Raw);
    const { z: zPos } = doLayout(1, 1, L);
    const dynamicEFL = eflAtFocus(1, 1, L);
    const { currentPhysStopSD } = apertureAt(L, 1, 0);

    const samples = computeDistortionCurve(L, zPos, 1, 1, dynamicEFL, currentPhysStopSD);
    const maxAbs = samples.reduce((m, s) => Math.max(m, Math.abs(s.distortionPercent)), 0);
    expect(maxAbs).toBeLessThan(15);
  });
});

describe("computeDistortionFieldGrid", () => {
  const barrelSamples = [
    {
      fieldAngleDeg: 0,
      normalizedImageHeight: 0,
      imageHeight: 0,
      distortionPercent: 0,
      realHeight: 0,
      idealHeight: 0,
      idealFieldAngleDeg: 0,
    },
    {
      fieldAngleDeg: 10,
      normalizedImageHeight: 0.5,
      imageHeight: -10,
      distortionPercent: 2,
      realHeight: -10,
      idealHeight: -9.8,
      idealFieldAngleDeg: 9.8,
    },
    {
      fieldAngleDeg: 20,
      normalizedImageHeight: 1,
      imageHeight: -20,
      distortionPercent: 4,
      realHeight: -20,
      idealHeight: -19.2,
      idealFieldAngleDeg: 19.4,
    },
  ];

  const pincushionSamples = barrelSamples.map((sample) => ({
    ...sample,
    distortionPercent: sample.distortionPercent === 0 ? 0 : -sample.distortionPercent,
  }));

  it("returns a paired horizontal and vertical grid set", () => {
    const grid = computeDistortionFieldGrid(barrelSamples);
    expect(grid.length).toBe(10);
    expect(grid.filter((line) => line.orientation === "vertical").length).toBe(5);
    expect(grid.filter((line) => line.orientation === "horizontal").length).toBe(5);
    expect(grid.every((line) => line.points.length === 17)).toBe(true);
  });

  it("keeps the center point fixed", () => {
    const grid = computeDistortionFieldGrid(barrelSamples);
    const centerLine = grid.find((line) => line.orientation === "vertical" && line.idealCoordinate === 0);
    expect(centerLine).toBeDefined();
    const centerPoint = centerLine!.points.find((point) => point.idealY === 0);
    expect(centerPoint).toBeDefined();
    expect(centerPoint!.distortedX).toBeCloseTo(0, 8);
    expect(centerPoint!.distortedY).toBeCloseTo(0, 8);
  });

  it("bows barrel-distorted edge points outward", () => {
    const grid = computeDistortionFieldGrid(barrelSamples);
    const edgeLine = grid.find((line) => line.orientation === "horizontal" && line.idealCoordinate === 1);
    expect(edgeLine).toBeDefined();
    const edgePoint = edgeLine!.points[edgeLine!.points.length - 1];
    expect(edgePoint.distortedX).toBeGreaterThan(edgePoint.idealX);
    expect(edgePoint.distortedY).toBeGreaterThan(edgePoint.idealY);
  });

  it("bows pincushion-distorted edge points inward", () => {
    const grid = computeDistortionFieldGrid(pincushionSamples);
    const edgeLine = grid.find((line) => line.orientation === "horizontal" && line.idealCoordinate === 1);
    expect(edgeLine).toBeDefined();
    const edgePoint = edgeLine!.points[edgeLine!.points.length - 1];
    expect(edgePoint.distortedX).toBeLessThan(edgePoint.idealX);
    expect(edgePoint.distortedY).toBeLessThan(edgePoint.idealY);
  });
});
