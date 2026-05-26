import { describe, expect, it } from "vitest";
import buildLens from "../../../src/optics/buildLens.js";
import { computeSAProfile } from "../../../src/optics/aberrationAnalysis.js";
import { computeDistortionCurve } from "../../../src/optics/distortionAnalysis.js";
import { doLayout, epAtZoom, fopenAtZoom } from "../../../src/optics/optics.js";
import { computeVignettingCurve } from "../../../src/optics/vignetteAnalysis.js";
import { LENS_CATALOG } from "../../../src/utils/catalog/lensCatalog.js";
import type { RuntimeLens } from "../../../src/types/optics.js";

function apertureAt(
  lens: RuntimeLens,
  zoomT: number,
  apertureT: number,
): { currentEPSD: number; currentPhysStopSD: number } {
  const currentFopen = fopenAtZoom(zoomT, lens);
  const rawFNumber = lens.FOPEN * Math.pow(lens.maxFstop / lens.FOPEN, apertureT);
  const fNumber = Math.max(rawFNumber, currentFopen);
  return {
    currentPhysStopSD: (lens.stopPhysSD * lens.FOPEN) / fNumber,
    currentEPSD: (epAtZoom(zoomT, lens) * lens.FOPEN) / fNumber,
  };
}

describe("Optics 2 analysis parity scaffold", () => {
  it("captures representative current-engine analysis sample shapes", () => {
    const lens = buildLens(LENS_CATALOG["nikkor-z-50f18s"]);
    const focusT = 0;
    const zoomT = 0;
    const { z: zPos } = doLayout(focusT, zoomT, lens);
    const { currentEPSD, currentPhysStopSD } = apertureAt(lens, zoomT, 0);

    const distortion = computeDistortionCurve(lens, zPos, focusT, zoomT, lens.EFL, currentPhysStopSD);
    expect(distortion.length).toBeGreaterThan(0);
    expect(distortion[0]).toMatchObject({ fieldAngleDeg: 0, normalizedImageHeight: 0, distortionPercent: 0 });

    const vignetting = computeVignettingCurve(lens, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD);
    expect(vignetting.length).toBeGreaterThan(0);
    expect(vignetting[0].fieldAngleDeg).toBe(0);

    const spherical = computeSAProfile(lens, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD);
    expect(spherical.length).toBeGreaterThan(0);
  });

  it.skip("compares distortion samples against missing computeDistortionCurve2 from src/optics-2/analysis", () => {});

  it.skip("compares vignetting samples against missing computeVignettingCurve2 from src/optics-2/analysis", () => {});

  it.skip("compares pupil aberration samples against missing computePupilAberrationProfile2 from src/optics-2/analysis", () => {});

  it.skip("compares bokeh samples against missing computeBokehPreviewPair2 from src/optics-2/analysis", () => {});

  it.skip("compares coma samples against missing computeComaAnalysis2 from src/optics-2/analysis", () => {});

  it.skip("compares field curvature samples against missing computeFieldCurvature2 from src/optics-2/analysis", () => {});

  it.skip("compares spherical aberration samples against missing computeSAProfile2 from src/optics-2/analysis", () => {});
});
