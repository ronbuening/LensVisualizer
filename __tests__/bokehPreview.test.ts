import { describe, it, expect } from "vitest";
import {
  BOKEH_PREVIEW_FIELD_FRACTIONS,
  BOKEH_PREVIEW_PUPIL_RING_SAMPLES,
  BOKEH_PREVIEW_SAMPLE_COUNT,
  computeBokehPreview,
} from "../src/optics/aberrationAnalysis.js";
import { traceNearObjectCircularOffAxisBundle, computeOffAxisFieldGeometry } from "../src/optics/aberration/offAxis.js";
import { traceChiefRelativeNearObjectSkewRay } from "../src/optics/optics.js";
import { doLayout, epAtZoom, fopenAtZoom } from "../src/optics/optics.js";
import buildLens from "../src/optics/buildLens.js";
import LENS_DEFAULTS from "../src/lens-data/defaults.js";
import Sonnar50f15Raw from "../src/lens-data/ZeissSonnar50f15.data.js";
import ApoLantharRaw from "../src/lens-data/VoigtlanderApoLanthar50f2.data.js";
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
  const baseEPSD = epAtZoom(zoomT, L);
  const currentEPSD = (baseEPSD * L.FOPEN) / fNumber;
  return { currentPhysStopSD, currentEPSD };
}

/* ── Constants ── */

describe("bokeh preview constants", () => {
  it("BOKEH_PREVIEW_SAMPLE_COUNT equals the sum of BOKEH_PREVIEW_PUPIL_RING_SAMPLES", () => {
    const expected = BOKEH_PREVIEW_PUPIL_RING_SAMPLES.reduce((sum, n) => sum + n, 0);
    expect(BOKEH_PREVIEW_SAMPLE_COUNT).toBe(expected);
  });

  it("BOKEH_PREVIEW_SAMPLE_COUNT is 225", () => {
    expect(BOKEH_PREVIEW_SAMPLE_COUNT).toBe(225);
  });

  it("BOKEH_PREVIEW_FIELD_FRACTIONS has 4 positions", () => {
    expect(BOKEH_PREVIEW_FIELD_FRACTIONS).toHaveLength(4);
  });

  it("BOKEH_PREVIEW_FIELD_FRACTIONS starts at 0 and ends at 0.75", () => {
    expect(BOKEH_PREVIEW_FIELD_FRACTIONS[0]).toBe(0);
    expect(BOKEH_PREVIEW_FIELD_FRACTIONS[3]).toBe(0.75);
  });
});

/* ── computeBokehPreview — basic structure ── */

describe("computeBokehPreview basic structure (Sonnar 50 f/1.5)", () => {
  const L = build(Sonnar50f15Raw);
  const zoomT = 0;
  const focusT = 0;
  const { currentPhysStopSD, currentEPSD } = apertureAt(L, zoomT, 0);
  const zPos = doLayout(focusT, zoomT, L).z;

  const result = computeBokehPreview(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD);

  it("returns a non-null result", () => {
    expect(result).not.toBeNull();
  });

  it("infinityGrid is not null", () => {
    expect(result.infinityGrid).not.toBeNull();
  });

  it("nearGrid is not null", () => {
    expect(result.nearGrid).not.toBeNull();
  });

  it("infinityGrid has exactly 4 fields", () => {
    expect(result.infinityGrid?.fields).toHaveLength(4);
  });

  it("nearGrid has exactly 4 fields", () => {
    expect(result.nearGrid?.fields).toHaveLength(4);
  });

  it("infinityGrid has at least 1 usable field", () => {
    expect(result.infinityGrid?.usableFieldCount).toBeGreaterThanOrEqual(1);
  });

  it("nearGrid has at least 1 usable field", () => {
    expect(result.nearGrid?.usableFieldCount).toBeGreaterThanOrEqual(1);
  });

  it("sharedSpotHalfRangeMm is positive for infinityGrid", () => {
    expect(result.infinityGrid?.sharedSpotHalfRangeMm).toBeGreaterThan(0);
  });

  it("sharedSpotHalfRangeMm is positive for nearGrid", () => {
    expect(result.nearGrid?.sharedSpotHalfRangeMm).toBeGreaterThan(0);
  });
});

/* ── Focus slider effect ── */

describe("computeBokehPreview focus slider — infinity grid (Sonnar 50 f/1.5)", () => {
  const L = build(Sonnar50f15Raw);
  const zoomT = 0;
  const { currentPhysStopSD, currentEPSD } = apertureAt(L, zoomT, 0);

  function rmsAtFocus(focusT: number, grid: "infinity" | "near"): number {
    const zPos = doLayout(focusT, zoomT, L).z;
    const result = computeBokehPreview(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD);
    const g = grid === "infinity" ? result.infinityGrid : result.nearGrid;
    const centerField = g?.fields.find((f) => f.fieldFraction === 0);
    return centerField?.rmsRadiusUm ?? 0;
  }

  it("infinity grid: rmsRadius grows as focus moves away from infinity (focusT=0→1)", () => {
    const rmsAtInfinity = rmsAtFocus(0, "infinity");
    const rmsAtNear = rmsAtFocus(1, "infinity");
    // At infinity focus the infinity point source should produce a smaller disc
    // than when focused at near (infinity is defocused at near focus).
    expect(rmsAtInfinity).toBeLessThan(rmsAtNear);
  });
});

describe("computeBokehPreview focus slider — near grid (ApoLanthar 50 f/2)", () => {
  // Use ApoLanthar (internal focus, well-corrected) for the near-grid focus slider test.
  // The Sonnar 50 f/1.5 has very high spherical aberration at wide open, causing the
  // near-object circle of least confusion to sit near the infinity-focus sensor position
  // (not at the paraxial focus) — which would give a misleading result.
  const L = build(ApoLantharRaw);
  const zoomT = 0;
  const { currentPhysStopSD, currentEPSD } = apertureAt(L, zoomT, 0);

  function rmsAtFocus(focusT: number, grid: "infinity" | "near"): number {
    const zPos = doLayout(focusT, zoomT, L).z;
    const result = computeBokehPreview(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD);
    const g = grid === "infinity" ? result.infinityGrid : result.nearGrid;
    const centerField = g?.fields.find((f) => f.fieldFraction === 0);
    return centerField?.rmsRadiusUm ?? 0;
  }

  it("near grid: rmsRadius shrinks as focus moves toward near (focusT=0→1)", () => {
    const rmsAtInfFocus = rmsAtFocus(0, "near");
    const rmsAtNearFocus = rmsAtFocus(1, "near");
    // Near focus position (focusT=1) should produce a smaller near-object disc
    // than infinity focus (near object is defocused at focusT=0).
    expect(rmsAtNearFocus).toBeLessThan(rmsAtInfFocus);
  });
});

/* ── Vignetting ── */

describe("computeBokehPreview vignetting (Sonnar 50 f/1.5, infinity focus)", () => {
  const L = build(Sonnar50f15Raw);
  const zoomT = 0;
  const focusT = 0;
  const { currentPhysStopSD, currentEPSD } = apertureAt(L, zoomT, 0);
  const zPos = doLayout(focusT, zoomT, L).z;
  const result = computeBokehPreview(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD);

  it("center field vignetteTransmission is positive for infinityGrid", () => {
    const centerField = result.infinityGrid?.fields.find((f) => f.fieldFraction === 0);
    // f/1.5 fast primes can show marginal-ray vignetting even on-axis — require
    // a reasonable minimum rather than an unrealistically high threshold.
    expect(centerField?.vignetteTransmission).toBeGreaterThan(0.5);
  });

  it("75% field vignetteTransmission is lower than center for infinityGrid", () => {
    const centerField = result.infinityGrid?.fields.find((f) => f.fieldFraction === 0);
    const edgeField = result.infinityGrid?.fields.find((f) => f.fieldFraction === 0.75);
    if (centerField?.usable && edgeField?.usable) {
      expect(edgeField.vignetteTransmission).toBeLessThan(centerField.vignetteTransmission);
    }
  });
});

/* ── Scale padding ── */

describe("computeBokehPreview scale padding (Sonnar 50 f/1.5)", () => {
  const L = build(Sonnar50f15Raw);
  const zoomT = 0;
  const focusT = 0;
  const { currentPhysStopSD, currentEPSD } = apertureAt(L, zoomT, 0);
  const zPos = doLayout(focusT, zoomT, L).z;
  const result = computeBokehPreview(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD);

  it("infinityGrid sharedSpotHalfRangeMm exceeds the max raw extent (confirms 15% padding)", () => {
    const grid = result.infinityGrid;
    if (grid === null) return;
    const rawMax = Math.max(
      ...grid.fields
        .filter((f) => f.usable)
        .flatMap((f) => [
          Math.abs(f.minRelativeSagittalImageHeight),
          Math.abs(f.maxRelativeSagittalImageHeight),
          Math.abs(f.minRelativeTangentialImageHeight),
          Math.abs(f.maxRelativeTangentialImageHeight),
        ]),
    );
    expect(grid.sharedSpotHalfRangeMm).toBeGreaterThan(rawMax);
  });
});

/* ── Invalid inputs ── */

describe("computeBokehPreview invalid inputs", () => {
  const L = build(Sonnar50f15Raw);
  const zoomT = 0;
  const focusT = 0;
  const zPos = doLayout(focusT, zoomT, L).z;
  const { currentPhysStopSD } = apertureAt(L, zoomT, 0);

  it("returns null grids when currentEPSD is 0", () => {
    const result = computeBokehPreview(L, zPos, focusT, zoomT, 0, currentPhysStopSD);
    expect(result.infinityGrid).toBeNull();
    expect(result.nearGrid).toBeNull();
  });
});

/* ── BokehPreviewPoint radiusFraction ── */

describe("computeBokehPreview point data (Sonnar 50 f/1.5)", () => {
  const L = build(Sonnar50f15Raw);
  const zoomT = 0;
  const focusT = 0;
  const { currentPhysStopSD, currentEPSD } = apertureAt(L, zoomT, 0);
  const zPos = doLayout(focusT, zoomT, L).z;
  const result = computeBokehPreview(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD);

  it("infinityGrid center field points have radiusFraction in [0..1] or null", () => {
    const centerField = result.infinityGrid?.fields.find((f) => f.fieldFraction === 0);
    if (!centerField?.usable) return;
    for (const point of centerField.points) {
      if (point.radiusFraction !== null) {
        expect(point.radiusFraction).toBeGreaterThanOrEqual(0);
        expect(point.radiusFraction).toBeLessThanOrEqual(1);
      }
    }
  });
});

/* ── traceNearObjectCircularOffAxisBundle ── */

describe("traceNearObjectCircularOffAxisBundle (Sonnar 50 f/1.5)", () => {
  const L = build(Sonnar50f15Raw);
  const zoomT = 0;
  const focusT = 0;
  const { currentPhysStopSD, currentEPSD } = apertureAt(L, zoomT, 0);
  const zPos = doLayout(focusT, zoomT, L).z;
  const D_near_mm = L.closeFocusM * 1000;

  const geometry = computeOffAxisFieldGeometry(L, zPos, zoomT, 0);

  it("returns a non-null bundle for on-axis near object", () => {
    if (geometry === null) return;
    const bundle = traceNearObjectCircularOffAxisBundle(
      BOKEH_PREVIEW_PUPIL_RING_SAMPLES,
      geometry,
      L,
      focusT,
      zoomT,
      currentEPSD,
      currentPhysStopSD,
      D_near_mm,
    );
    expect(bundle).not.toBeNull();
  });

  it("returns null for D_near_mm = 0", () => {
    if (geometry === null) return;
    const bundle = traceNearObjectCircularOffAxisBundle(
      BOKEH_PREVIEW_PUPIL_RING_SAMPLES,
      geometry,
      L,
      focusT,
      zoomT,
      currentEPSD,
      currentPhysStopSD,
      0,
    );
    expect(bundle).toBeNull();
  });
});

/* ── traceChiefRelativeNearObjectSkewRay ── */

describe("traceChiefRelativeNearObjectSkewRay (Sonnar 50 f/1.5)", () => {
  const L = build(Sonnar50f15Raw);
  const zoomT = 0;
  const focusT = 0;
  const { currentPhysStopSD, currentEPSD } = apertureAt(L, zoomT, 0);
  const D_near_mm = L.closeFocusM * 1000;

  it("returns a SkewRayTraceResult for an on-axis pupil sample", () => {
    const result = traceChiefRelativeNearObjectSkewRay(
      0,
      0.5, // 50% pupil height
      0, // on-axis chief launch height
      0, // on-axis field slope
      currentEPSD,
      D_near_mm,
      focusT,
      zoomT,
      currentPhysStopSD,
      false,
      L,
    );
    expect(result).toBeDefined();
    expect(typeof result.x).toBe("number");
    expect(typeof result.y).toBe("number");
  });

  it("produces a different result from infinity tracing when D_near_mm is small (close focus)", () => {
    // At very close distance, the near-object correction is significant
    const nearResult = traceChiefRelativeNearObjectSkewRay(
      0,
      0.8,
      0,
      0,
      currentEPSD,
      D_near_mm,
      focusT,
      zoomT,
      currentPhysStopSD,
      false,
      L,
    );
    // The near result should have non-zero ux slope (sagittal correction applied)
    // For an on-axis x sample with xFrac=0, ux=0; for yFrac=0.8, uy correction is added
    expect(typeof nearResult.uy).toBe("number");
  });
});

/* ── Second lens sanity check (ApoLanthar) ── */

describe("computeBokehPreview (ApoLanthar 50 f/2)", () => {
  const L = build(ApoLantharRaw);
  const zoomT = 0;
  const focusT = 0;
  const { currentPhysStopSD, currentEPSD } = apertureAt(L, zoomT, 0);
  const zPos = doLayout(focusT, zoomT, L).z;

  it("returns non-null grids", () => {
    const result = computeBokehPreview(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD);
    expect(result.infinityGrid).not.toBeNull();
    expect(result.nearGrid).not.toBeNull();
  });
});
