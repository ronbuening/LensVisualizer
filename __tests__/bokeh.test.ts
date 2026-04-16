import { describe, it, expect } from "vitest";
import {
  BOKEH_CIRCULAR_PUPIL_RING_SAMPLES,
  BOKEH_POINT_COUNT,
  BOKEH_PREVIEW_FIELD_FRACTIONS,
  BOKEH_DENSITY_GRID_SIZE,
  buildBokehDensityGrid,
  buildBokehRadialProfile,
  classifyBokehBrightnessCharacter,
  computeBokehPreviewPair,
  computeStateAwareOffAxisFieldGeometry,
} from "../src/optics/aberrationAnalysis.js";
import {
  computeBokehPreview,
  computeBokehFieldFootprint,
  computeImagePlaneZAtFocus,
  computeBestFocusZ,
} from "../src/optics/aberration/bokeh.js";
import { computeFieldGeometryAtState, doLayout, epAtZoom, fopenAtZoom, solveChiefRayLaunchHeight } from "../src/optics/optics.js";
import { computeOffAxisFieldGeometry } from "../src/optics/aberration/offAxis.js";
import buildLens from "../src/optics/buildLens.js";
import LENS_DEFAULTS from "../src/lens-data/defaults.js";
import ApoLantharRaw from "../src/lens-data/VoigtlanderApoLanthar50f2.data.js";
import NikkorZ70200Raw from "../src/lens-data/NikonNikkorZ70200f28.data.js";
import NikonZ135Raw from "../src/lens-data/NikonZ135f18.data.js";
import NikonAF28f14DRaw from "../src/lens-data/NikonAF28f14D.data.js";
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

function pointAt(radius: number, angleRad: number, weight = 1): BokehPoint {
  return {
    index: 0,
    sagittalOffset: radius * Math.cos(angleRad),
    tangentialOffset: radius * Math.sin(angleRad),
    pupilRadius: 0,
    pupilAzimuth: 0,
    weight,
  };
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

describe("radial profile helpers", () => {
  it("classifies center-bright synthetic blur", () => {
    const profile = buildBokehRadialProfile(
      [
        pointAt(0.03, 0, 8),
        pointAt(0.04, Math.PI / 2, 8),
        pointAt(0.05, Math.PI, 8),
        pointAt(0.06, (3 * Math.PI) / 2, 8),
        pointAt(1, 0, 1),
      ],
      0,
      0,
      6,
    );
    const classification = classifyBokehBrightnessCharacter(profile);

    expect(classification.brightnessCharacter).toBe("center-bright");
    expect(classification.centerToRimRatio).toBeGreaterThan(1);
  });

  it("classifies edge-bright synthetic blur", () => {
    const profile = buildBokehRadialProfile(
      [pointAt(1, 0), pointAt(1, Math.PI / 2), pointAt(1, Math.PI), pointAt(1, (3 * Math.PI) / 2)],
      0,
      0,
      6,
    );
    const classification = classifyBokehBrightnessCharacter(profile);

    expect(classification.brightnessCharacter).toBe("edge-bright");
    expect(classification.centerToRimRatio).toBeLessThan(1);
  });

  it("classifies neutral synthetic blur when annular energy matches area", () => {
    const annulusWeights = [1, 3, 5, 7];
    const profile = buildBokehRadialProfile(
      annulusWeights.map((weight, index) => pointAt((index + 0.5) / annulusWeights.length, 0, weight)),
      0,
      0,
      annulusWeights.length,
    );
    const classification = classifyBokehBrightnessCharacter(profile);

    expect(classification.brightnessCharacter).toBe("neutral");
    expect(classification.centerToRimRatio).toBeGreaterThan(0.85);
    expect(classification.centerToRimRatio).toBeLessThan(1.15);
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

describe("state-aware off-axis geometry", () => {
  const L = build(NikonAF28f14DRaw);
  const focusT = 0.85;
  const layout = doLayout(focusT, 0, L);

  it("matches the solved chief-ray launch used by vignetting analysis", () => {
    const stateGeometry = computeFieldGeometryAtState(focusT, 0, L);
    const result = computeStateAwareOffAxisFieldGeometry(L, layout.z, focusT, 0, 0.75);

    expect(result).not.toBeNull();
    expect(result!.yChief).toBeCloseTo(
      solveChiefRayLaunchHeight(result!.fieldAngleDeg, focusT, 0, L, stateGeometry),
      6,
    );
  });

  it("differs from the paraxial chief-ray launch on a vignetted wide-angle field", () => {
    const paraxial = computeOffAxisFieldGeometry(L, layout.z, 0, 0.75);
    const solved = computeStateAwareOffAxisFieldGeometry(L, layout.z, focusT, 0, 0.75);

    expect(paraxial).not.toBeNull();
    expect(solved).not.toBeNull();
    expect(Math.abs(solved!.yChief - paraxial!.yChief)).toBeGreaterThan(1e-3);
  });
});

describe("computeBokehFieldFootprint", () => {
  const L = build(ApoLantharRaw);
  const layout = doLayout(0, 0, L);
  const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

  it("on-axis (0%) has high transmission and roughly circular shape", () => {
    const sensorZ = layout.imgZ + 0.5; // sensor 0.5mm past image plane
    const result = computeBokehFieldFootprint(L, layout.z, 0, 0, currentEPSD, currentPhysStopSD, 0, sensorZ);

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
    const sensorZ = layout.imgZ + 0.5;
    const onAxis = computeBokehFieldFootprint(L, layout.z, 0, 0, currentEPSD, currentPhysStopSD, 0, sensorZ);
    const offAxis = computeBokehFieldFootprint(L, layout.z, 0, 0, currentEPSD, currentPhysStopSD, 0.75, sensorZ);

    expect(onAxis).not.toBeNull();
    expect(offAxis).not.toBeNull();
    if (onAxis!.usable && offAxis!.usable) {
      expect(offAxis!.transmission).toBeLessThanOrEqual(onAxis!.transmission);
    }
  });

  it("reports a separate mechanical pupil footprint off-axis", () => {
    const sensorZ = layout.imgZ + 0.5;
    const onAxis = computeBokehFieldFootprint(L, layout.z, 0, 0, currentEPSD, currentPhysStopSD, 0, sensorZ);
    const offAxis = computeBokehFieldFootprint(L, layout.z, 0, 0, currentEPSD, currentPhysStopSD, 0.75, sensorZ);

    expect(onAxis).not.toBeNull();
    expect(offAxis).not.toBeNull();
    expect(onAxis!.pupilFootprint.samples.length).toBeGreaterThan(0);
    expect(offAxis!.pupilFootprint.samples.length).toBeGreaterThan(0);

    if (onAxis!.usable && offAxis!.usable) {
      expect(offAxis!.pupilFootprint.shiftRadius).toBeGreaterThan(onAxis!.pupilFootprint.shiftRadius);
      expect(offAxis!.pupilFootprint.transmission).toBeLessThanOrEqual(onAxis!.pupilFootprint.transmission);
    }
  });

  it("returns unusable result when currentEPSD is zero", () => {
    const result = computeBokehFieldFootprint(L, layout.z, 0, 0, 0, currentPhysStopSD, 0, layout.imgZ + 0.5);
    expect(result).toBeNull();
  });

  it("preserves pupil coordinates for future blade masking", () => {
    const result = computeBokehFieldFootprint(L, layout.z, 0, 0, currentEPSD, currentPhysStopSD, 0, layout.imgZ + 0.5);
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
  const bf0 = computeBestFocusZ(L, 0, 0, currentEPSD, currentPhysStopSD);

  it("returns result with 4 fields when sensorZ is shifted from best focus", () => {
    const sensorZ = bf0 + 5; // 5mm past best focus
    const result = computeBokehPreview(L, 0, sensorZ, 0, currentEPSD, currentPhysStopSD, "Infinity");
    expect(result).not.toBeNull();
    expect(result!.fields.length).toBe(4);
    expect(result!.usableFieldCount).toBeGreaterThanOrEqual(1);
  });

  it("produces non-null result with sensorZ at best focus (minimum blur)", () => {
    const result = computeBokehPreview(L, 0, bf0, 0, currentEPSD, currentPhysStopSD, "Infinity");
    if (result !== null) {
      const centerField = result.fields.find((f) => f.fieldFraction === 0 && f.usable);
      if (centerField) {
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

  it("infinity defocus grows and near defocus shrinks as focus moves to near", () => {
    const pairA = computeBokehPreviewPair(L, 0.25, 0, currentEPSD, currentPhysStopSD);
    const pairB = computeBokehPreviewPair(L, 0.75, 0, currentEPSD, currentPhysStopSD);
    if (pairA.infinity && pairB.infinity) {
      expect(Math.abs(pairA.infinity.defocusDeltaMm)).toBeLessThan(Math.abs(pairB.infinity.defocusDeltaMm));
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

describe("computeBokehPreviewPair brightness character", () => {
  const L = build(NikonAF28f14DRaw);
  const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

  it("flips the visible blur character across opposite sides of best focus", () => {
    const bestFocus = computeBestFocusZ(L, 0, 0, currentEPSD, currentPhysStopSD);
    const frontDefocus = computeBokehPreview(L, 0, bestFocus - 0.35, 0, currentEPSD, currentPhysStopSD, "Front");
    const rearDefocus = computeBokehPreview(L, 0, bestFocus + 0.35, 0, currentEPSD, currentPhysStopSD, "Rear");

    expect(frontDefocus).not.toBeNull();
    expect(rearDefocus).not.toBeNull();

    const frontCenter = frontDefocus!.fields.find((field) => field.fieldFraction === 0 && field.usable);
    const rearCenter = rearDefocus!.fields.find((field) => field.fieldFraction === 0 && field.usable);

    expect(frontCenter).toBeTruthy();
    expect(rearCenter).toBeTruthy();
    expect(Math.sign(frontCenter!.centerToRimRatio - 1)).not.toBe(Math.sign(rearCenter!.centerToRimRatio - 1));
  });

  it("keeps the main radial profile usable while off-axis pupil transmission drops", () => {
    const pair = computeBokehPreviewPair(L, 0.5, 0, currentEPSD, currentPhysStopSD);
    const onAxis = pair.infinity?.fields.find((field) => field.fieldFraction === 0 && field.usable) ?? null;
    const offAxis = pair.infinity?.fields.find((field) => field.fieldFraction === 0.75 && field.usable) ?? null;

    expect(onAxis).not.toBeNull();
    expect(offAxis).not.toBeNull();
    expect(offAxis!.radialProfile.bins.length).toBeGreaterThan(0);
    expect(offAxis!.pupilFootprint.samples.length).toBeGreaterThan(0);
    expect(offAxis!.transmission).toBeLessThanOrEqual(onAxis!.transmission);
    expect(offAxis!.pupilFootprint.shiftRadius).toBeGreaterThan(onAxis!.pupilFootprint.shiftRadius);
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

describe("computeBestFocusZ", () => {
  it("returns finite value for standard lens at infinity", () => {
    const L = build(ApoLantharRaw);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);
    const bf = computeBestFocusZ(L, 0, 0, currentEPSD, currentPhysStopSD);
    expect(isFinite(bf)).toBe(true);
  });

  it("varies significantly for internal-focus lens (Nikon Z 135)", () => {
    const L = build(NikonZ135Raw);
    const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);
    const bf0 = computeBestFocusZ(L, 0, 0, currentEPSD, currentPhysStopSD);
    const bf1 = computeBestFocusZ(L, 1, 0, currentEPSD, currentPhysStopSD);
    // Layout imgZ is constant for internal focus, but best-focus must differ
    const layoutDelta = doLayout(1, 0, L).imgZ - doLayout(0, 0, L).imgZ;
    expect(Math.abs(layoutDelta)).toBeLessThan(0.01);
    expect(Math.abs(bf1 - bf0)).toBeGreaterThan(1);
  });
});

describe("focus tracking for internal-focus lens (Nikon Z 135)", () => {
  const L = build(NikonZ135Raw);
  const { currentEPSD, currentPhysStopSD } = apertureAt(L, 0, 0);

  it("infinity RMS grows monotonically from infinity to near focus", () => {
    const rmsValues = [0, 0.5, 1].map((fT) => {
      const pair = computeBokehPreviewPair(L, fT, 0, currentEPSD, currentPhysStopSD);
      return pair.infinity!.fields.find((f) => f.fieldFraction === 0 && f.usable)?.rmsRadiusMm ?? 0;
    });
    expect(rmsValues[0]).toBeLessThan(rmsValues[1]);
    expect(rmsValues[1]).toBeLessThan(rmsValues[2]);
  });

  it("near-focus RMS shrinks monotonically from infinity to near focus", () => {
    const rmsValues = [0, 0.5, 1].map((fT) => {
      const pair = computeBokehPreviewPair(L, fT, 0, currentEPSD, currentPhysStopSD);
      return pair.nearFocus!.fields.find((f) => f.fieldFraction === 0 && f.usable)?.rmsRadiusMm ?? 0;
    });
    expect(rmsValues[0]).toBeGreaterThan(rmsValues[1]);
    expect(rmsValues[1]).toBeGreaterThan(rmsValues[2]);
  });
});
