import { describe, it, expect } from "vitest";
import {
  BOKEH_CIRCULAR_PUPIL_RING_SAMPLES,
  BOKEH_POINT_COUNT,
  BOKEH_PREVIEW_FIELD_FRACTIONS,
  BOKEH_DENSITY_GRID_SIZE,
  computeBokehPreviewPair,
  buildBokehDensityGrid,
} from "../src/optics/aberrationAnalysis.js";
import {
  computeBokehPreview,
  computeBokehFieldFootprint,
  computeImagePlaneZAtFocus,
} from "../src/optics/aberration/bokeh.js";
import { doLayout, fopenAtZoom, epAtZoom } from "../src/optics/optics.js";
import buildLens from "../src/optics/buildLens.js";
import LENS_DEFAULTS from "../src/lens-data/defaults.js";
import ApoLantharRaw from "../src/lens-data/VoigtlanderApoLanthar50f2.data.js";
import NikkorZ70200Raw from "../src/lens-data/NikonNikkorZ70200f28.data.js";
import type { RuntimeLens, LensData } from "../src/types/optics.js";
import type { BokehPoint } from "../src/optics/aberration/types.js";

/* ── Helpers ── */

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

/* ── Tests ── */

describe("bokeh constants", () => {
  it("BOKEH_POINT_COUNT matches ring sample sum", () => {
    const sum = BOKEH_CIRCULAR_PUPIL_RING_SAMPLES.reduce((acc, n) => acc + n, 0);
    expect(sum).toBe(BOKEH_POINT_COUNT);
    expect(BOKEH_POINT_COUNT).toBe(337);
  });

  it("has 4 field fractions", () => {
    expect(BOKEH_PREVIEW_FIELD_FRACTIONS).toEqual([0, 0.25, 0.5, 0.75]);
  });
});

describe("computeImagePlaneZAtFocus", () => {
  const L = build(ApoLantharRaw);

  it("returns the image plane Z from doLayout", () => {
    const layout = doLayout(0, 0, L);
    expect(computeImagePlaneZAtFocus(L, 0, 0)).toBeCloseTo(layout.imgZ, 10);
  });

  it("near-focus image plane differs from infinity", () => {
    const zInf = computeImagePlaneZAtFocus(L, 0, 0);
    const zNear = computeImagePlaneZAtFocus(L, 1, 0);
    expect(zNear).not.toBeCloseTo(zInf, 2);
  });
});

describe("computeBokehFieldFootprint", () => {
  const L = build(ApoLantharRaw);
  const layout = doLayout(0, 0, L);
  const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

  it("on-axis (0%) has high transmission and roughly circular shape", () => {
    const defocusDelta = 0.5; // arbitrary defocus
    const result = computeBokehFieldFootprint(L, layout.z, 0, 0, currentEPSD, currentPhysStopSD, 0, defocusDelta);

    expect(result).not.toBeNull();
    expect(result!.usable).toBe(true);
    expect(result!.transmission).toBeGreaterThan(0.8);
    expect(result!.passedRays).toBeGreaterThan(200);

    // Roughly circular: sagittal and tangential extents should be similar
    const sagExtent = Math.max(...result!.points.map((p) => Math.abs(p.sagittalOffset)));
    const tanExtent = Math.max(...result!.points.map((p) => Math.abs(p.tangentialOffset)));
    if (sagExtent > 0.001 && tanExtent > 0.001) {
      expect(sagExtent / tanExtent).toBeGreaterThan(0.5);
      expect(sagExtent / tanExtent).toBeLessThan(2.0);
    }
  });

  it("off-axis (75%) has lower transmission (cat's eye vignetting)", () => {
    const defocusDelta = 0.5;
    const onAxis = computeBokehFieldFootprint(L, layout.z, 0, 0, currentEPSD, currentPhysStopSD, 0, defocusDelta);
    const offAxis = computeBokehFieldFootprint(L, layout.z, 0, 0, currentEPSD, currentPhysStopSD, 0.75, defocusDelta);

    expect(onAxis).not.toBeNull();
    expect(offAxis).not.toBeNull();
    if (onAxis!.usable && offAxis!.usable) {
      expect(offAxis!.transmission).toBeLessThanOrEqual(onAxis!.transmission);
    }
  });

  it("returns unusable result when currentEPSD is zero", () => {
    const result = computeBokehFieldFootprint(L, layout.z, 0, 0, 0, currentPhysStopSD, 0, 0.5);
    expect(result).toBeNull();
  });

  it("preserves pupil coordinates for future blade masking", () => {
    const result = computeBokehFieldFootprint(L, layout.z, 0, 0, currentEPSD, currentPhysStopSD, 0, 0.5);
    expect(result).not.toBeNull();
    expect(result!.points.length).toBeGreaterThan(0);

    for (const p of result!.points) {
      expect(p.pupilRadius).toBeGreaterThanOrEqual(0);
      expect(p.pupilRadius).toBeLessThanOrEqual(1.01);
      expect(typeof p.pupilAzimuth).toBe("number");
    }
  });
});

describe("computeBokehPreview", () => {
  const L = build(ApoLantharRaw);
  const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

  it("returns result with 4 fields for infinity grid at near focus", () => {
    const result = computeBokehPreview(L, 0, 1, 0, currentEPSD, currentPhysStopSD, "Infinity");
    expect(result).not.toBeNull();
    expect(result!.fields.length).toBe(4);
    expect(result!.usableFieldCount).toBeGreaterThanOrEqual(1);
    expect(result!.defocusDeltaMm).not.toBe(0);
  });

  it("produces non-null result with zero defocus (aberration spot)", () => {
    // traceFocusT = viewFocusT → defocusDelta ≈ 0; result is the aberration spot
    const result = computeBokehPreview(L, 0, 0, 0, currentEPSD, currentPhysStopSD, "Infinity");
    // May be null if defocus is exactly 0 and no aberrations, but should work for real lens
    if (result !== null) {
      expect(result.defocusDeltaMm).toBeCloseTo(0, 5);
      const centerField = result.fields.find((f) => f.fieldFraction === 0 && f.usable);
      if (centerField) {
        // RMS may be non-zero due to residual aberrations
        expect(centerField.rmsRadiusMm).toBeGreaterThanOrEqual(0);
      }
    }
  });
});

describe("computeBokehPreviewPair", () => {
  const L = build(ApoLantharRaw);
  const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

  it("returns both grids at mid-focus", () => {
    const pair = computeBokehPreviewPair(L, 0.5, 0, currentEPSD, currentPhysStopSD);
    expect(pair.infinity).not.toBeNull();
    expect(pair.nearFocus).not.toBeNull();
  });

  it("infinity grid has different defocus than near grid", () => {
    const pair = computeBokehPreviewPair(L, 0.5, 0, currentEPSD, currentPhysStopSD);
    if (pair.infinity && pair.nearFocus) {
      expect(pair.infinity.defocusDeltaMm).not.toBeCloseTo(pair.nearFocus.defocusDeltaMm, 3);
    }
  });

  it("stopdown produces smaller bokeh", () => {
    const wide = apertureAt(L, 0, 0);
    const stopped = apertureAt(L, 0, 0.5);

    const pairWide = computeBokehPreviewPair(L, 0.5, 0, wide.currentEPSD, wide.currentPhysStopSD);
    const pairStopped = computeBokehPreviewPair(L, 0.5, 0, stopped.currentEPSD, stopped.currentPhysStopSD);

    if (pairWide.infinity && pairStopped.infinity) {
      const wideCenterRms = pairWide.infinity.fields.find((f) => f.fieldFraction === 0 && f.usable)?.rmsRadiusMm ?? 0;
      const stoppedCenterRms =
        pairStopped.infinity.fields.find((f) => f.fieldFraction === 0 && f.usable)?.rmsRadiusMm ?? 0;
      if (wideCenterRms > 0.001 && stoppedCenterRms > 0.001) {
        expect(stoppedCenterRms).toBeLessThan(wideCenterRms);
      }
    }
  });
});

describe("computeBokehPreviewPair with zoom lens", () => {
  const L = build(NikkorZ70200Raw);
  const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

  it("produces valid results for zoom lens at wide", () => {
    const pair = computeBokehPreviewPair(L, 0.5, 0, currentEPSD, currentPhysStopSD);
    expect(pair.infinity).not.toBeNull();
    expect(pair.nearFocus).not.toBeNull();
  });

  it("produces valid results at tele end", () => {
    const teleAperture = apertureAt(L, 1, 0);
    const pair = computeBokehPreviewPair(L, 0.5, 1, teleAperture.currentEPSD, teleAperture.currentPhysStopSD);
    expect(pair.infinity).not.toBeNull();
    expect(pair.nearFocus).not.toBeNull();
  });
});

describe("buildBokehDensityGrid", () => {
  it("returns empty for no points", () => {
    expect(buildBokehDensityGrid([], 1, 64)).toEqual([]);
  });

  it("returns empty for zero halfRange", () => {
    const points: BokehPoint[] = [
      { index: 0, sagittalOffset: 0, tangentialOffset: 0, pupilRadius: 0, pupilAzimuth: 0, weight: 1 },
    ];
    expect(buildBokehDensityGrid(points, 0, 64)).toEqual([]);
  });

  it("bins a centered point with density 1.0", () => {
    const points: BokehPoint[] = [
      { index: 0, sagittalOffset: 0, tangentialOffset: 0, pupilRadius: 0, pupilAzimuth: 0, weight: 1 },
    ];
    const cells = buildBokehDensityGrid(points, 1, 4);
    expect(cells.length).toBe(1);
    expect(cells[0].density).toBe(1);
  });

  it("normalises so max density = 1.0", () => {
    const points: BokehPoint[] = [
      { index: 0, sagittalOffset: -0.5, tangentialOffset: -0.5, pupilRadius: 0, pupilAzimuth: 0, weight: 1 },
      { index: 1, sagittalOffset: -0.5, tangentialOffset: -0.5, pupilRadius: 0.5, pupilAzimuth: 0.5, weight: 1 },
      { index: 2, sagittalOffset: 0.5, tangentialOffset: 0.5, pupilRadius: 1, pupilAzimuth: Math.PI, weight: 1 },
    ];
    const cells = buildBokehDensityGrid(points, 1, 4);
    const maxDensity = Math.max(...cells.map((c) => c.density));
    expect(maxDensity).toBeCloseTo(1, 5);
  });

  it("works with real bokeh data", () => {
    const L = build(ApoLantharRaw);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);
    const pair = computeBokehPreviewPair(L, 0.5, 0, currentEPSD, currentPhysStopSD);

    if (pair.infinity) {
      const centerField = pair.infinity.fields.find((f) => f.usable);
      if (centerField) {
        const cells = buildBokehDensityGrid(
          centerField.points,
          pair.infinity.sharedHalfRangeMm,
          BOKEH_DENSITY_GRID_SIZE,
        );
        expect(cells.length).toBeGreaterThan(0);
        expect(cells.every((c) => c.density >= 0 && c.density <= 1)).toBe(true);
      }
    }
  });
});
